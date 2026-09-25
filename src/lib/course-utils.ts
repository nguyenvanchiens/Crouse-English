import type { Course, Goal, Lesson, Level, Module } from "@/content/types";

export interface CourseFilter { goal?: Goal; level?: Level }
export interface LessonRef { module: Module; lesson: Lesson }

const GOALS: Goal[] = ["lo-trinh", "ielts", "toeic", "tre-em"];
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

export function suggestCourseSlug(level: Level): string {
  return `tieng-anh-${level.toLowerCase()}`;
}
