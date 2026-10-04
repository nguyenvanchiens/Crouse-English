import type { Exercise } from "@/content/types";
import type { PlanData } from "./my-plan-core";
import type { ProgressState } from "./progress-core";
import type { PlanInput } from "./plan-stage";
import { lessonsOfDay, type ScheduleDay } from "./schedule";
import { addDayKey, daysBetween } from "./schedule-describe";
import { applyOrder, shuffled, type Rng } from "./test-draw";

/** What a lesson gives a review: its key points to recall and its exercises to retry. */
export interface ReviewLesson {
  title: string;
  /** the lecture's "Ghi nhớ" points */
  points: string[];
  items: Exercise[];
}

/** "<course>/<lesson>" → the lesson's review material */
export type ReviewBank = Record<string, ReviewLesson>;

export interface StudyDay {
  date: string;
  /** lessons studied that day, as "<course>/<lesson>" */
  lessons: string[];
}

/**
 * Days with something to review, newest first: from the plan's day history (what each day was built
 * around) and from lessons finished on each date.
 */
export function studyDays(data: PlanData, state: ProgressState, bank: ReviewBank | null, input: PlanInput, today: string): StudyDay[] {
  const byDate = new Map<string, Set<string>>();
  const add = (date: string, key: string) => {
    if (date > today || (bank && !bank[key])) return;
    if (!byDate.has(date)) byDate.set(date, new Set());
    byDate.get(date)!.add(key);
  };
  const days = [...data.history, ...(data.day ? [{ date: data.day.date, main: data.day.picks.main }] : [])];
  for (const h of days) for (const k of lessonsOfDay(h.main, input)) {
    // a day counts for review once its lesson was finished, or its A1 topic ticked as reviewed
    const a1 = k.startsWith(`${input.baseCourse}/`) && data.done.includes(`g:${k.slice(input.baseCourse.length + 1)}`);
    if (a1 || state.lessons[k]?.done) add(h.date, k);
  }
  for (const [k, rec] of Object.entries(state.lessons)) if (rec.done && rec.completedAt) add(rec.completedAt.slice(0, 10), k);
  return [...byDate.entries()].map(([date, set]) => ({ date, lessons: [...set] })).sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** a study day comes back for a short review about this many days later */
export const SPACED_AGO = [2, 7, 21];

/**
 * The study days due for a short spaced review on `view`: for each of 2, 7 and 21 days back, the latest
 * study day on or up to three days before that date (lessons are not taught every day), each day once.
 */
export function spacedDays(view: string, studied: string[]): { date: string; ago: number }[] {
  const used = new Set<string>();
  const out: { date: string; ago: number }[] = [];
  for (const ago of SPACED_AGO) {
    const target = addDayKey(view, -ago);
    const earliest = addDayKey(target, -3);
    const pick = studied.filter((d) => d <= target && d >= earliest && !used.has(d)).sort().pop();
    if (pick) {
      used.add(pick);
      out.push({ date: pick, ago: daysBetween(pick, view) });
    }
  }
  return out;
}

/** Dates of the calendar days that teach or revisit a lesson, for previewing their spaced reviews. */
export const taughtDays = (days: ScheduleDay[], input: PlanInput) => days.filter((d) => lessonsOfDay(d.main, input).length > 0).map((d) => d.date);

/** Up to `max` exercise items spread over the day's lessons, in random order with options shuffled. */
export function drawReview(lessons: string[], bank: ReviewBank, rng: Rng, max = 8): Exercise[] {
  const pools = lessons.map((k) => shuffled(bank[k]?.items ?? [], rng));
  const out: Exercise[] = [];
  for (let round = 0; out.length < max && pools.some((p) => p.length > round); round++) {
    for (const p of pools) if (p[round] && out.length < max) out.push(p[round]);
  }
  return shuffled(out, rng).map((x) => ("options" in x ? applyOrder(x, shuffled(x.options.map((_, i) => i), rng)) : x));
}
