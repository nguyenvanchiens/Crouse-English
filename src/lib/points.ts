/**
 * Learning points: earned for finishing things, spent in the rewards shop (/doi-qua).
 * Every award has a key, so the same achievement never pays twice (re-doing a lesson
 * earns nothing new). Pure functions, no storage.
 */

export const POINTS = {
  /** first finish of a lesson */
  lesson: 20,
  /** first finish of a chapter review */
  review: 30,
  /** best score reaches 80% / 100% on a lesson, review or test */
  score80: 10,
  score100: 10,
  /** passing the end-of-course test (certificate) */
  finalPass: 100,
  /** the first thing you finish on a given day */
  firstOfDay: 5,
  /** each word remembered in the vocabulary review, up to a daily cap */
  vocab: 1,
  vocabDailyCap: 20,
  /** first placement test */
  placement: 10,
  /** streak milestones in days */
  streak: { 7: 50, 30: 200, 100: 500 } as Record<number, number>,
} as const;

export interface PointEntry { at: string; amount: number; reason: string }

export interface PointsState {
  earned: number;
  spent: number;
  /** keys of one-off awards already paid */
  awarded: string[];
  /** newest first, capped */
  log: PointEntry[];
  /** words that earned points today (for the daily cap) */
  vocabToday: { day: string; n: number };
}

export interface RewardsState {
  owned: string[];
  avatar: string | null;
  title: string | null;
  frame: string | null;
  /** streak freezes held: each saves the streak once when a single day is missed */
  freezes: number;
}

export const MAX_FREEZES = 3;
const LOG_SIZE = 50;

export function emptyPoints(): PointsState {
  return { earned: 0, spent: 0, awarded: [], log: [], vocabToday: { day: "", n: 0 } };
}

export function emptyRewards(): RewardsState {
  return { owned: [], avatar: null, title: null, frame: null, freezes: 0 };
}

export const balance = (p: PointsState) => p.earned - p.spent;

function addLog(p: PointsState, amount: number, reason: string, now: Date): PointEntry[] {
  return [{ at: now.toISOString(), amount, reason }, ...p.log].slice(0, LOG_SIZE);
}

/** Pays a one-off award unless its key was already paid. */
export function award(p: PointsState, key: string, amount: number, reason: string, now: Date): PointsState {
  if (amount <= 0 || p.awarded.includes(key)) return p;
  return { ...p, earned: p.earned + amount, awarded: [...p.awarded, key], log: addLog(p, amount, reason, now) };
}

/** One point per remembered word, at most POINTS.vocabDailyCap a day. */
export function awardVocab(p: PointsState, today: string, now: Date): PointsState {
  const n = p.vocabToday.day === today ? p.vocabToday.n : 0;
  if (n >= POINTS.vocabDailyCap) return p;
  // merge consecutive vocab points of the same day into one log line
  const [head, ...rest] = p.log;
  const reason = "Nhớ từ khi ôn từ vựng";
  const log =
    head && head.reason === reason && head.at.slice(0, 10) === now.toISOString().slice(0, 10)
      ? [{ ...head, amount: head.amount + POINTS.vocab, at: now.toISOString() }, ...rest]
      : addLog(p, POINTS.vocab, reason, now);
  return { ...p, earned: p.earned + POINTS.vocab, log, vocabToday: { day: today, n: n + 1 } };
}

export type RewardKind = "avatar" | "title" | "frame" | "freeze";
export interface Reward {
  id: string;
  kind: RewardKind;
  name: string;
  description: string;
  cost: number;
}

export type BuyResult = "ok" | "owned" | "too-poor" | "max-freezes";

export function canBuy(p: PointsState, r: RewardsState, reward: Reward): BuyResult {
  if (reward.kind === "freeze") {
    if (r.freezes >= MAX_FREEZES) return "max-freezes";
  } else if (r.owned.includes(reward.id)) {
    return "owned";
  }
  return balance(p) >= reward.cost ? "ok" : "too-poor";
}

/** Buys a reward (and equips it, for cosmetics). Returns the inputs unchanged when it can't be bought. */
export function buy(p: PointsState, r: RewardsState, reward: Reward, now: Date): { points: PointsState; rewards: RewardsState } {
  if (canBuy(p, r, reward) !== "ok") return { points: p, rewards: r };
  const points = { ...p, spent: p.spent + reward.cost, log: addLog(p, -reward.cost, `Đổi: ${reward.name}`, now) };
  if (reward.kind === "freeze") return { points, rewards: { ...r, freezes: r.freezes + 1 } };
  return { points, rewards: { ...r, owned: [...r.owned, reward.id], [reward.kind]: reward.id } };
}

/** Equips an owned cosmetic, or takes it off with null. */
export function equip(r: RewardsState, kind: Exclude<RewardKind, "freeze">, id: string | null): RewardsState {
  if (id !== null && !r.owned.includes(id)) return r;
  return { ...r, [kind]: id };
}

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}
const nonNeg = (v: unknown) => (typeof v === "number" && Number.isFinite(v) && v >= 0 ? Math.floor(v) : 0);
const strOrNull = (v: unknown) => (typeof v === "string" ? v : null);

export function parsePoints(v: unknown): PointsState {
  if (!isRecord(v)) return emptyPoints();
  const vt = isRecord(v.vocabToday) ? v.vocabToday : {};
  return {
    earned: nonNeg(v.earned),
    spent: Math.min(nonNeg(v.spent), nonNeg(v.earned)),
    awarded: Array.isArray(v.awarded) ? [...new Set(v.awarded.filter((k): k is string => typeof k === "string"))] : [],
    log: Array.isArray(v.log)
      ? v.log
          .filter((e): e is PointEntry => isRecord(e) && typeof e.at === "string" && typeof e.amount === "number" && typeof e.reason === "string")
          .slice(0, LOG_SIZE)
      : [],
    vocabToday: { day: typeof vt.day === "string" ? vt.day : "", n: nonNeg(vt.n) },
  };
}

export function parseRewards(v: unknown): RewardsState {
  if (!isRecord(v)) return emptyRewards();
  const owned = Array.isArray(v.owned) ? [...new Set(v.owned.filter((k): k is string => typeof k === "string"))] : [];
  const pick = (x: unknown) => {
    const id = strOrNull(x);
    return id && owned.includes(id) ? id : null;
  };
  return { owned, avatar: pick(v.avatar), title: pick(v.title), frame: pick(v.frame), freezes: Math.min(nonNeg(v.freezes), MAX_FREEZES) };
}
