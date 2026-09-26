import type { Exercise, PlacementQuestion } from "@/content/types";

/**
 * Tests draw a fresh set from a bigger bank on every attempt, so a learner who retakes them is
 * measured on skill, not on memory of the last attempt. Options are shuffled too, so no answer
 * position can be learnt.
 */
export type Rng = () => number;

/** One drawn item: its id and, for choice items, the order its options are shown in. */
export interface Drawn {
  id: string;
  order?: number[];
}

export function shuffled<T>(xs: readonly T[], rng: Rng): T[] {
  const out = [...xs];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/**
 * Items the learner has not met come first (in random order); after them the ones met longest ago.
 * `seen` is oldest first, newest last.
 */
export function freshFirst<T extends { id: string }>(pool: readonly T[], seen: readonly string[], rng: Rng): T[] {
  const age = new Map(seen.map((id, i) => [id, i]));
  const unseen = shuffled(pool.filter((x) => !age.has(x.id)), rng);
  const met = pool.filter((x) => age.has(x.id)).sort((a, b) => age.get(a.id)! - age.get(b.id)!);
  return [...unseen, ...met];
}

const hasOptions = (x: object): x is { options: string[]; answer: number } => "options" in x && "answer" in x;

function drawnOf(x: { id: string; options?: string[] }, rng: Rng): Drawn {
  return x.options ? { id: x.id, order: shuffled(x.options.map((_, i) => i), rng) } : { id: x.id };
}

/** Rebuilds a choice item with its options in the drawn order; the answer index follows its option. */
export function applyOrder<T extends object>(item: T, order: number[] | undefined): T {
  if (!order || !hasOptions(item) || order.length !== item.options.length) return item;
  return { ...item, options: order.map((i) => item.options[i]), answer: order.indexOf(item.answer) };
}

/**
 * The drawn items looked up in the bank, or null when the draw no longer fits it (the bank changed
 * since the draw was saved), so the caller draws again.
 */
export function resolveDrawn<T extends { id: string }>(bank: readonly T[], drawn: readonly Drawn[]): T[] | null {
  const byId = new Map(bank.map((x) => [x.id, x]));
  const out: T[] = [];
  for (const d of drawn) {
    const x = byId.get(d.id);
    if (!x) return null;
    if (d.order && !(hasOptions(x) && d.order.length === x.options.length && new Set(d.order).size === d.order.length && d.order.every((i) => i >= 0 && i < x.options.length))) return null;
    out.push(applyOrder(x, d.order));
  }
  return out;
}

/**
 * End-of-course test: the bank is grouped by chapter in equal slices. Each chapter gives `perChapter`
 * items, as many different exercise kinds as it can, fresh ones first.
 */
export function drawFinal(bank: readonly Exercise[], chapters: number, perChapter: number, seen: readonly string[], rng: Rng): Drawn[] {
  const size = chapters > 0 ? bank.length / chapters : 0;
  if (!Number.isInteger(size) || size < perChapter) {
    // a bank that is not a whole number of chapters: draw from it as one pool
    return freshFirst(bank, seen, rng).slice(0, Math.min(bank.length, perChapter * Math.max(chapters, 1))).map((x) => drawnOf(x, rng));
  }
  const out: Drawn[] = [];
  for (let c = 0; c < chapters; c++) {
    const pool = freshFirst(bank.slice(c * size, (c + 1) * size), seen, rng);
    const picked: Exercise[] = [];
    for (const x of pool) if (picked.length < perChapter && !picked.some((p) => p.kind === x.kind)) picked.push(x);
    for (const x of pool) if (picked.length < perChapter && !picked.includes(x)) picked.push(x);
    out.push(...shuffled(picked, rng).map((x) => drawnOf(x, rng)));
  }
  return out;
}

export const PLACEMENT_MIX: Record<PlacementQuestion["skill"], number> = { grammar: 3, vocab: 3, listening: 1, reading: 1 };

/** Placement test: for every level in order, the same mix of skills, fresh questions first. */
export function drawPlacement(
  bank: readonly PlacementQuestion[],
  levels: readonly string[],
  seen: readonly string[],
  rng: Rng,
  mix: Record<PlacementQuestion["skill"], number> = PLACEMENT_MIX,
): Drawn[] {
  const out: Drawn[] = [];
  for (const level of levels) {
    const mine = bank.filter((q) => q.level === level);
    const picked: PlacementQuestion[] = [];
    for (const [skill, n] of Object.entries(mix)) picked.push(...freshFirst(mine.filter((q) => q.skill === skill), seen, rng).slice(0, n));
    // a level short of some skill still gets its full count from the others
    const want = Object.values(mix).reduce((a, b) => a + b, 0);
    for (const q of freshFirst(mine, seen, rng)) if (picked.length < want && !picked.includes(q)) picked.push(q);
    out.push(...shuffled(picked, rng).map((q) => drawnOf(q, rng)));
  }
  return out;
}

/** Keeps the ids met in tests, oldest first, newest last; a re-met id moves to the end. */
export function remember(seen: readonly string[], ids: readonly string[], cap = 1000): string[] {
  const set = new Set(ids);
  return [...seen.filter((id) => !set.has(id)), ...ids].slice(-cap);
}

export function parseSeen(raw: string | null): Record<string, string[]> {
  if (!raw) return {};
  try {
    const d: unknown = JSON.parse(raw);
    if (typeof d !== "object" || d === null || Array.isArray(d)) return {};
    return Object.fromEntries(
      Object.entries(d).flatMap(([k, v]) => (Array.isArray(v) ? [[k, v.filter((x): x is string => typeof x === "string")]] : [])),
    );
  } catch {
    return {};
  }
}
