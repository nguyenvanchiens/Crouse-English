import type { Course, Lesson, Level } from "@/content/types";

export const STORAGE_KEY = "ce:progress:v1";

export interface LessonRecord { done: boolean; score: number | null; completedAt: string }
export interface Streak { current: number; lastDay: string | null }
export interface ProgressState {
  version: 1;
  learnerName: string | null;
  enrolled: string[];
  lessons: Record<string, LessonRecord>;
  streak: Streak;
  placement: { level: Level; score: number; takenAt: string } | null;
}
export interface CourseProgress { done: number; total: number; percent: number; nextLesson: Lesson | null }

export function emptyState(): ProgressState {
  return {
    version: 1,
    learnerName: null,
    enrolled: [],
    lessons: {},
    streak: { current: 0, lastDay: null },
    placement: null,
  };
}

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
    lessons: isRecord(data.lessons) ? (data.lessons as Record<string, LessonRecord>) : {},
    streak:
      isRecord(streak) && typeof streak.current === "number"
        ? { current: streak.current, lastDay: typeof streak.lastDay === "string" ? streak.lastDay : null }
        : base.streak,
    placement:
      isRecord(placement) && typeof placement.level === "string" && typeof placement.score === "number"
        ? (placement as ProgressState["placement"])
        : null,
  };
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
  if (diff <= 0) return streak;
  if (diff === 1) return { current: streak.current + 1, lastDay: today };
  return { current: 1, lastDay: today };
}

export function displayStreak(streak: Streak, today: string): number {
  if (streak.lastDay === null) return 0;
  const diff = dayNumber(today) - dayNumber(streak.lastDay);
  return diff <= 1 ? streak.current : 0;
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
    ...state,
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

export function applyPlacement(state: ProgressState, level: Level, score: number, now: Date): ProgressState {
  return { ...state, placement: { level, score, takenAt: now.toISOString() } };
}
