import type { Course, Goal, Lesson, Level, Module } from "@/content/types";

export interface CourseFilter { goal?: Goal; level?: Level }
export interface LessonRef { module: Module; lesson: Lesson }

const GOALS: Goal[] = ["phat-am", "lo-trinh", "ielts", "toeic", "tre-em"];
const LEVELS: Level[] = ["A1", "A2", "B1", "B2", "C1"];

export const isGoal = (v: string | null): v is Goal => v !== null && (GOALS as string[]).includes(v);
export const isLevel = (v: string | null): v is Level => v !== null && (LEVELS as string[]).includes(v);

export function filterCourses(courses: Course[], filter: CourseFilter): Course[] {
  return courses.filter(
    (c) => (!filter.goal || c.goal === filter.goal) && (!filter.level || c.level === filter.level),
  );
}

export function flattenLessons(course: Course): LessonRef[] {
  return course.modules.flatMap((m) => m.lessons.map((lesson) => ({ module: m, lesson })));
}

/** "16 bài học, 4 bài ôn tập" style counts for a course. */
export function lessonCounts(course: Course): { lessons: number; reviews: number } {
  const all = course.modules.flatMap((m) => m.lessons);
  const reviews = all.filter((l) => l.review).length;
  return { lessons: all.length - reviews, reviews };
}

/** Hours of lesson content (lessons, reviews and test), rounded to the nearest half hour. */
export function contentHours(course: Course): number {
  const minutes = course.modules.flatMap((m) => m.lessons).reduce((n, l) => n + l.minutes, 0);
  return Math.round((minutes / 60) * 2) / 2;
}

/**
 * Cambridge English's estimate of guided learning hours needed to reach each CEFR level,
 * counted from complete beginner (support.cambridgeenglish.org, "Guided learning hours").
 */
export const GUIDED_HOURS: Record<Level, [number, number]> = {
  A1: [90, 100],
  A2: [180, 200],
  B1: [350, 400],
  B2: [500, 600],
  C1: [700, 800],
};

export const formatHours = (h: number) => h.toLocaleString("vi-VN", { maximumFractionDigits: 1 });

export function suggestCourseSlug(level: Level): string {
  return `tieng-anh-${level.toLowerCase()}`;
}
