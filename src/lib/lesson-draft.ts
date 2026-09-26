import type { Drawn } from "./test-draw";

/**
 * Where the learner is inside one lesson (step, answers, draft text), saved so that a reload
 * or a closed tab does not throw the lesson away. Cleared when the lesson is finished.
 */
export interface LessonDraft<E = unknown, T = unknown> {
  stepIndex: number;
  completed: boolean[];
  /** correct/total of every scored step, by step index */
  results: Record<number, { correct: number; total: number }>;
  exerciseProgress: Record<number, E>;
  taskProgress: Record<number, T>;
  /** the final test drawn for this attempt, kept so a reload shows the same questions */
  drawn?: Drawn[];
}

const key = (courseSlug: string, lessonSlug: string) => `ce:lesson:v1:${courseSlug}/${lessonSlug}`;

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

export function parseDraft<E, T>(raw: string | null, stepCount: number): LessonDraft<E, T> | null {
  if (!raw) return null;
  try {
    const d: unknown = JSON.parse(raw);
    if (
      !isRecord(d) ||
      !Number.isInteger(d.stepIndex) ||
      !Array.isArray(d.completed) ||
      d.completed.length !== stepCount ||
      !d.completed.every((x) => typeof x === "boolean") ||
      (d.stepIndex as number) < 0 ||
      (d.stepIndex as number) >= stepCount
    ) {
      return null;
    }
    return {
      stepIndex: d.stepIndex as number,
      completed: d.completed as boolean[],
      results: isRecord(d.results) ? (d.results as LessonDraft["results"]) : {},
      exerciseProgress: isRecord(d.exerciseProgress) ? (d.exerciseProgress as Record<number, E>) : {},
      taskProgress: isRecord(d.taskProgress) ? (d.taskProgress as Record<number, T>) : {},
      ...(Array.isArray(d.drawn) && d.drawn.every((x) => isRecord(x) && typeof x.id === "string") ? { drawn: d.drawn as Drawn[] } : {}),
    };
  } catch {
    return null;
  }
}

export function loadDraft<E, T>(courseSlug: string, lessonSlug: string, stepCount: number): LessonDraft<E, T> | null {
  if (typeof window === "undefined") return null;
  try {
    return parseDraft<E, T>(window.localStorage.getItem(key(courseSlug, lessonSlug)), stepCount);
  } catch {
    return null;
  }
}

export function saveDraft(courseSlug: string, lessonSlug: string, draft: LessonDraft) {
  try {
    window.localStorage.setItem(key(courseSlug, lessonSlug), JSON.stringify(draft));
  } catch {
    // storage unavailable or full: the lesson still works, it just won't survive a reload
  }
}

export function clearDraft(courseSlug: string, lessonSlug: string) {
  try {
    window.localStorage.removeItem(key(courseSlug, lessonSlug));
  } catch {
    // nothing to clear
  }
}
