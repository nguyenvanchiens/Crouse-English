import type { Course, Lesson, Level } from "@/content/types";
import { FINAL_PASS } from "@/content/review";
import { isLevel } from "./course-utils";

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
}
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

export function displayStreak(streak: Streak, today: string): number {
  if (streak.lastDay === null) return 0;
  const diff = dayNumber(today) - dayNumber(streak.lastDay);
  return diff >= -1 && diff <= 1 ? streak.current : 0;
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
): ProgressState {
  const key = lessonKey(courseSlug, lessonSlug);
  const prev = state.lessons[key];
  const best =
    score === null ? (prev?.score ?? null) : prev?.score != null ? Math.max(prev.score, score) : score;
  return {
    ...applyEnroll(state, courseSlug),
    lessons: {
      ...state.lessons,
      [key]: { done: true, score: best, completedAt: prev?.done ? prev.completedAt : now.toISOString() },
    },
    streak: nextStreak(state.streak, todayKey(now)),
  };
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
  return { ...state, placement: { level, startLevel, score, takenAt: now.toISOString() } };
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
  return { ...state, srs: { ...state.srs, [key]: { box, due } }, streak: nextStreak(state.streak, today) };
}

export function topicKey(courseSlug: string, topicId: string): string {
  return `${courseSlug}/${topicId}`;
}

/** Adds (or removes) a word-bank topic from the learner's review. */
export function applyToggleTopic(state: ProgressState, key: string): ProgressState {
  const topics = state.topics.includes(key) ? state.topics.filter((t) => t !== key) : [...state.topics, key];
  return { ...state, topics };
}
