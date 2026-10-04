import type { Course, Lesson, Level } from "@/content/types";
import { FINAL_PASS } from "@/content/review";
import { isLevel } from "./course-utils";
import {
  POINTS,
  award,
  awardVocab,
  buy,
  emptyPoints,
  emptyRewards,
  equip,
  parsePoints,
  parseRewards,
  type PointsState,
  type Reward,
  type RewardKind,
  type RewardsState,
} from "./points";

export const STORAGE_KEY = "ce:progress:v1";

export interface LessonRecord { done: boolean; score: number | null; completedAt: string }
export interface Streak { current: number; lastDay: string | null }
export interface ProgressState {
  version: 1;
  learnerName: string | null;
  enrolled: string[];
  lessons: Record<string, LessonRecord>;
  streak: Streak;
  /** level = highest level passed; startLevel = the course level suggested to start with */
  placement: { level: Level; startLevel: Level; score: number; takenAt: string } | null;
  /** spaced-repetition vocab cards, keyed by vocabKey(); box 0 = just missed */
  srs: Record<string, SrsCard>;
  /** word-bank topics the learner added to their review, keyed by topicKey() */
  topics: string[];
  /** learning points (see lib/points.ts) */
  points: PointsState;
  /** rewards bought with points: cosmetics and streak freezes */
  rewards: RewardsState;
  /** the learner's own vocabulary cards, in the order added; reviewed under customWordKey(word) */
  custom: CustomWord[];
}
export interface CustomWord { word: string; meaning: string; example: string; ipa: string; addedAt: string }
export interface SrsCard { box: number; due: string }
export interface CourseProgress { done: number; total: number; percent: number; nextLesson: Lesson | null }

export function emptyState(): ProgressState {
  return {
    version: 1,
    learnerName: null,
    enrolled: [],
    lessons: {},
    streak: { current: 0, lastDay: null },
    placement: null,
    srs: {},
    topics: [],
    points: emptyPoints(),
    rewards: emptyRewards(),
    custom: [],
  };
}

/** Lessons whose slug changed: progress saved under the old key carries over to the new one. */
export const RENAMED_LESSONS: Record<string, string> = {
  "tieng-anh-b1/bi-dong-nang-cao": "tieng-anh-b1/bi-dong-moi-thi",
  "tieng-anh-b1/tuong-lai-nang-cao": "tieng-anh-b1/tuong-lai-tiep-dien-hoan-thanh",
  "tieng-anh-b2/dieu-kien-nang-cao": "tieng-anh-b2/dieu-kien-khong-chi-if",
};

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

export function parseState(raw: string | null): ProgressState {
  if (!raw) return emptyState();
  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch {
    return emptyState();
  }
  if (!isRecord(data) || data.version !== 1) return emptyState();
  const base = emptyState();
  const streak = data.streak;
  const placement = data.placement;
  return {
    version: 1,
    learnerName: typeof data.learnerName === "string" ? data.learnerName : null,
    enrolled: Array.isArray(data.enrolled) ? data.enrolled.filter((s): s is string => typeof s === "string") : [],
    lessons: isRecord(data.lessons)
      ? Object.fromEntries(
          Object.entries(data.lessons)
            .filter((e): e is [string, LessonRecord] => isLessonRecord(e[1]))
            .map(([k, v]) => [RENAMED_LESSONS[k] ?? k, v]),
        )
      : {},
    srs: isRecord(data.srs)
      ? Object.fromEntries(Object.entries(data.srs).filter((e): e is [string, SrsCard] => isSrsCard(e[1])))
      : {},
    topics: Array.isArray(data.topics) ? [...new Set(data.topics.filter((t): t is string => typeof t === "string"))] : [],
    points: parsePoints(data.points),
    rewards: parseRewards(data.rewards),
    custom: parseCustomWords(data.custom),
    streak:
      isRecord(streak) && Number.isInteger(streak.current) && (streak.current as number) >= 0
        ? { current: streak.current as number, lastDay: typeof streak.lastDay === "string" ? streak.lastDay : null }
        : base.streak,
    placement:
      isRecord(placement) &&
      isLevel(typeof placement.level === "string" ? placement.level : null) &&
      typeof placement.score === "number" &&
      isIsoDate(placement.takenAt)
        ? {
            level: placement.level as Level,
            startLevel: isLevel(typeof placement.startLevel === "string" ? placement.startLevel : null)
              ? (placement.startLevel as Level)
              : legacyStartLevel(placement.level as Level),
            score: placement.score,
            takenAt: placement.takenAt,
          }
        : null,
  };
}

const LEVEL_ORDER: Level[] = ["A1", "A2", "B1", "B2", "C1"];

/** Before startLevel existed, `level` meant "highest level passed" (A1 also for "none"). */
function legacyStartLevel(level: Level): Level {
  if (level === "A1") return "A1";
  return LEVEL_ORDER[Math.min(LEVEL_ORDER.indexOf(level) + 1, LEVEL_ORDER.length - 1)];
}

function isIsoDate(v: unknown): v is string {
  return typeof v === "string" && !Number.isNaN(Date.parse(v));
}

function isSrsCard(v: unknown): v is SrsCard {
  return (
    isRecord(v) &&
    Number.isInteger(v.box) &&
    (v.box as number) >= 0 &&
    typeof v.due === "string" &&
    /^\d{4}-\d{2}-\d{2}$/.test(v.due)
  );
}

function isLessonRecord(v: unknown): v is LessonRecord {
  return (
    isRecord(v) &&
    typeof v.done === "boolean" &&
    (v.score === null || typeof v.score === "number") &&
    isIsoDate(v.completedAt)
  );
}

const pad = (n: number) => String(n).padStart(2, "0");

export function todayKey(d: Date = new Date()): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function dayNumber(key: string): number {
  const [y, m, d] = key.split("-").map(Number);
  return Date.UTC(y, m - 1, d) / 86_400_000;
}

export function nextStreak(streak: Streak, today: string): Streak {
  if (streak.lastDay === null) return { current: 1, lastDay: today };
  const diff = dayNumber(today) - dayNumber(streak.lastDay);
  // one day back is a time-zone change; further back means the stored day is bogus
  if (diff === 0 || diff === -1) return streak;
  if (diff === 1) return { current: streak.current + 1, lastDay: today };
  return { current: 1, lastDay: today };
}

/** The streak to show today; with a streak freeze in hand, one missed day does not break it yet. */
export function displayStreak(streak: Streak, today: string, freezes = 0): number {
  if (streak.lastDay === null) return 0;
  const diff = dayNumber(today) - dayNumber(streak.lastDay);
  if (diff === 2 && freezes > 0) return streak.current;
  return diff >= -1 && diff <= 1 ? streak.current : 0;
}

/**
 * Records activity today: advances the streak (spending a streak freeze if exactly one day
 * was missed), then pays the first-of-day and streak-milestone points.
 */
function recordActivity(state: ProgressState, now: Date): ProgressState {
  const today = todayKey(now);
  const last = state.streak.lastDay;
  const missedOne = last !== null && dayNumber(today) - dayNumber(last) === 2;
  let next: ProgressState;
  if (missedOne && state.rewards.freezes > 0) {
    next = {
      ...state,
      streak: { current: state.streak.current + 1, lastDay: today },
      rewards: { ...state.rewards, freezes: state.rewards.freezes - 1 },
      points: { ...state.points, log: [{ at: now.toISOString(), amount: 0, reason: "Dùng thẻ đóng băng chuỗi: chuỗi ngày học được giữ" }, ...state.points.log].slice(0, 50) },
    };
  } else {
    next = { ...state, streak: nextStreak(state.streak, today) };
  }
  let points = award(next.points, `day:${today}`, POINTS.firstOfDay, "Ngày học mới", now);
  for (const [days, amount] of Object.entries(POINTS.streak)) {
    if (next.streak.current >= Number(days)) points = award(points, `streak:${days}`, amount, `Chuỗi ${days} ngày học liên tiếp`, now);
  }
  return { ...next, points };
}

export function lessonKey(courseSlug: string, lessonSlug: string): string {
  return `${courseSlug}/${lessonSlug}`;
}

export function courseProgress(course: Course, state: ProgressState): CourseProgress {
  const lessons = course.modules.flatMap((m) => m.lessons);
  const isDone = (l: Lesson) => state.lessons[lessonKey(course.slug, l.slug)]?.done === true;
  const done = lessons.filter(isDone).length;
  const total = lessons.length;
  return {
    done,
    total,
    percent: total === 0 ? 0 : Math.round((done / total) * 100),
    nextLesson: lessons.find((l) => !isDone(l)) ?? null,
  };
}

export type CertificateStatus =
  | { status: "incomplete" }
  | { status: "final-failed"; finalScore: number }
  | { status: "earned"; finalScore?: number };


/** The certificate needs every lesson done and, if the course has a final test, a pass on it. */
export function certificateStatus(course: Course, state: ProgressState): CertificateStatus {
  const cp = courseProgress(course, state);
  if (cp.done < cp.total) return { status: "incomplete" };
  const final = course.modules.flatMap((m) => m.lessons).find((l) => l.final);
  if (!final) return { status: "earned" };
  const score = state.lessons[lessonKey(course.slug, final.slug)]?.score ?? 0;
  return score >= FINAL_PASS ? { status: "earned", finalScore: score } : { status: "final-failed", finalScore: score };
}

export function lastCompletedAt(course: Course, state: ProgressState): string | null {
  let latest: string | null = null;
  for (const m of course.modules) {
    for (const l of m.lessons) {
      const rec = state.lessons[lessonKey(course.slug, l.slug)];
      if (rec?.done && (latest === null || rec.completedAt > latest)) latest = rec.completedAt;
    }
  }
  return latest;
}

export function applyEnroll(state: ProgressState, courseSlug: string): ProgressState {
  if (state.enrolled.includes(courseSlug)) return state;
  return { ...state, enrolled: [...state.enrolled, courseSlug] };
}

export function applyCompleteLesson(
  state: ProgressState,
  courseSlug: string,
  lessonSlug: string,
  score: number | null,
  now: Date,
  kind: "lesson" | "review" | "final" = "lesson",
): ProgressState {
  const key = lessonKey(courseSlug, lessonSlug);
  const prev = state.lessons[key];
  const best =
    score === null ? (prev?.score ?? null) : prev?.score != null ? Math.max(prev.score, score) : score;
  const next = recordActivity(
    {
      ...applyEnroll(state, courseSlug),
      lessons: {
        ...state.lessons,
        [key]: { done: true, score: best, completedAt: prev?.done ? prev.completedAt : now.toISOString() },
      },
    },
    now,
  );
  let points = next.points;
  if (kind === "review") points = award(points, `lesson:${key}`, POINTS.review, "Xong bài ôn tập chương", now);
  else if (kind === "lesson") points = award(points, `lesson:${key}`, POINTS.lesson, "Xong một bài học", now);
  if (best !== null && best >= 80) points = award(points, `s80:${key}`, POINTS.score80, "Đạt từ 80% trở lên", now);
  if (best === 100) points = award(points, `s100:${key}`, POINTS.score100, "Đạt điểm tuyệt đối", now);
  if (kind === "final" && best !== null && best >= FINAL_PASS) {
    points = award(points, `final:${courseSlug}`, POINTS.finalPass, "Vượt qua bài kiểm tra cuối khóa", now);
  }
  return { ...next, points };
}

export function applyLearnerName(state: ProgressState, name: string): ProgressState {
  const trimmed = name.trim();
  return { ...state, learnerName: trimmed === "" ? null : trimmed };
}

export function applyPlacement(
  state: ProgressState,
  level: Level,
  startLevel: Level,
  score: number,
  now: Date,
): ProgressState {
  return {
    ...state,
    placement: { level, startLevel, score, takenAt: now.toISOString() },
    points: award(state.points, "placement", POINTS.placement, "Làm bài kiểm tra trình độ", now),
  };
}

// ---- spaced repetition (Leitner boxes) for vocabulary ----

/** Days until the next review after a correct answer, by the box the card moves into. */
export const SRS_INTERVALS = [1, 2, 4, 7, 15, 30];

export function vocabKey(courseSlug: string, word: string): string {
  return `${courseSlug}/${word.toLowerCase()}`;
}

function addDays(day: string, n: number): string {
  const [y, m, d] = day.split("-").map(Number);
  return todayKey(new Date(y, m - 1, d + n));
}

/** A card never reviewed is due; otherwise it is due once its day has come. */
export function isDue(card: SrsCard | undefined, today: string): boolean {
  return card === undefined || card.due <= today;
}

export function applyReviewWord(state: ProgressState, key: string, remembered: boolean, now: Date): ProgressState {
  const today = todayKey(now);
  const prev = state.srs[key];
  const box = remembered ? Math.min((prev?.box ?? 0) + 1, SRS_INTERVALS.length) : 0;
  const due = addDays(today, remembered ? SRS_INTERVALS[box - 1] : 1);
  const next = recordActivity({ ...state, srs: { ...state.srs, [key]: { box, due } } }, now);
  return remembered ? { ...next, points: awardVocab(next.points, today, now) } : next;
}

export function applyBuyReward(state: ProgressState, reward: Reward, now: Date): ProgressState {
  const { points, rewards } = buy(state.points, state.rewards, reward, now);
  return points === state.points ? state : { ...state, points, rewards };
}

export function applyEquipReward(state: ProgressState, kind: Exclude<RewardKind, "freeze">, id: string | null): ProgressState {
  return { ...state, rewards: equip(state.rewards, kind, id) };
}

export function topicKey(courseSlug: string, topicId: string): string {
  return `${courseSlug}/${topicId}`;
}

/** Adds (or removes) a word-bank topic from the learner's review. */
export function applyToggleTopic(state: ProgressState, key: string): ProgressState {
  const topics = state.topics.includes(key) ? state.topics.filter((t) => t !== key) : [...state.topics, key];
  return { ...state, topics };
}

// ---- the learner's own vocabulary cards ----

/** The pseudo-course the learner's own words are filed under in `srs`. */
export const CUSTOM_COURSE = "tu-cua-toi";

/** Longest accepted text per field, and the most own words kept. */
export const CUSTOM_LIMITS = { word: 60, meaning: 160, example: 240, ipa: 60, count: 2000 } as const;

export interface CustomWordInput { word: string; meaning: string; example?: string; ipa?: string }

/** Collapses runs of whitespace, trims and cuts to `max` characters. */
function cleanText(v: unknown, max: number): string {
  return typeof v === "string" ? v.replace(/\s+/g, " ").trim().slice(0, max).trim() : "";
}

/** The form a word is compared and keyed in: cleaned and lower-cased. */
export function customWordId(word: string): string {
  return cleanText(word, CUSTOM_LIMITS.word).toLowerCase();
}

/** The spaced-repetition key of one of the learner's own words. */
export function customWordKey(word: string): string {
  return vocabKey(CUSTOM_COURSE, customWordId(word));
}

function parseCustomWords(v: unknown): CustomWord[] {
  if (!Array.isArray(v)) return [];
  const seen = new Set<string>();
  const out: CustomWord[] = [];
  for (const e of v) {
    if (out.length >= CUSTOM_LIMITS.count) break;
    if (!isRecord(e) || !isIsoDate(e.addedAt)) continue;
    const word = cleanText(e.word, CUSTOM_LIMITS.word);
    const meaning = cleanText(e.meaning, CUSTOM_LIMITS.meaning);
    const id = word.toLowerCase();
    if (!word || !meaning || seen.has(id)) continue;
    seen.add(id);
    out.push({
      word,
      meaning,
      example: cleanText(e.example, CUSTOM_LIMITS.example),
      ipa: cleanText(e.ipa, CUSTOM_LIMITS.ipa),
      addedAt: e.addedAt,
    });
  }
  return out;
}

export type CustomWordError = "word" | "meaning" | "full";

/** Why a word can't be added, or null when it can. Updating a word already in the list is never "full". */
export function checkCustomWord(state: ProgressState, input: CustomWordInput): CustomWordError | null {
  const id = customWordId(input.word);
  if (!id) return "word";
  if (!cleanText(input.meaning, CUSTOM_LIMITS.meaning)) return "meaning";
  if (state.custom.length >= CUSTOM_LIMITS.count && !state.custom.some((c) => c.word.toLowerCase() === id)) return "full";
  return null;
}

/**
 * Adds one of the learner's own words. A word already in the list (ignoring case and extra spaces)
 * is updated in place and keeps its place and review history (blank example/IPA keep the saved ones);
 * an invalid word leaves the state unchanged.
 */
export function applyAddCustomWord(state: ProgressState, input: CustomWordInput, now: Date): ProgressState {
  if (checkCustomWord(state, input) !== null) return state;
  const word = cleanText(input.word, CUSTOM_LIMITS.word);
  const fields = {
    word,
    meaning: cleanText(input.meaning, CUSTOM_LIMITS.meaning),
    example: cleanText(input.example, CUSTOM_LIMITS.example),
    ipa: cleanText(input.ipa, CUSTOM_LIMITS.ipa),
  };
  const id = word.toLowerCase();
  const at = state.custom.findIndex((c) => c.word.toLowerCase() === id);
  const custom =
    at === -1
      ? [...state.custom, { ...fields, addedAt: now.toISOString() }]
      : state.custom.map((c, i) =>
          // a blank optional field keeps what was saved before
          i === at ? { ...fields, example: fields.example || c.example, ipa: fields.ipa || c.ipa, addedAt: c.addedAt } : c,
        );
  return { ...state, custom };
}

/** Removes one of the learner's own words together with its review card. */
export function applyRemoveCustomWord(state: ProgressState, word: string): ProgressState {
  const id = customWordId(word);
  const key = customWordKey(word);
  if (!state.custom.some((c) => c.word.toLowerCase() === id) && !(key in state.srs)) return state;
  const srs = { ...state.srs };
  delete srs[key];
  return { ...state, custom: state.custom.filter((c) => c.word.toLowerCase() !== id), srs };
}
