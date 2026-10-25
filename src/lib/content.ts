import { COURSES } from "@/content";
import { lessonWithMeanings } from "@/content/meanings";
import { PLACEMENT_QUESTIONS } from "@/content/placement";
import type { Course, Lesson, Module, PlacementQuestion, VocabWord } from "@/content/types";
import { filterCourses, flattenLessons, type CourseFilter } from "./course-utils";

// Data access layer. Swap these bodies for CMS calls later; keep the signatures.

export interface LessonContext {
  course: Course;
  module: Module;
  lesson: Lesson;
  index: number;
  total: number;
  prev: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
}

export async function getCourses(filter: CourseFilter = {}): Promise<Course[]> {
  return filterCourses(COURSES, filter);
}

/**
 * A course trimmed for pages that only show progress and course cards (catalog, "my courses", the home
 * dashboard): chapter and lesson outline, and each vocabulary word's spelling (to count words due for review).
 * Passing whole courses to those client components made each page over 3 MB of HTML.
 */
export function summarizeCourse(course: Course): Course {
  // only the spelling travels (thousands of words: empty fields would still weigh); progress code reads `word` only
  const wordOnly = (w: VocabWord): VocabWord => ({ word: w.word }) as VocabWord;
  return {
    ...course,
    faqs: [],
    finalTest: undefined,
    selfStudy: undefined,
    modules: course.modules.map((m) => ({
      ...m,
      lessons: m.lessons.map((l) => ({
        slug: l.slug,
        title: l.title,
        minutes: l.minutes,
        ...(l.review ? { review: true } : {}),
        ...(l.final ? { final: true } : {}),
        steps: l.steps.flatMap((s) => (s.type === "vocab" ? [{ type: "vocab" as const, words: s.words.map(wordOnly) }] : [])),
      })),
    })),
    wordBank: course.wordBank?.map((t) => ({ ...t, words: t.words.map(wordOnly) })),
  };
}

export async function getCourseSummaries(filter: CourseFilter = {}): Promise<Course[]> {
  return (await getCourses(filter)).map(summarizeCourse);
}

export async function getCourse(slug: string): Promise<Course | null> {
  return COURSES.find((c) => c.slug === slug) ?? null;
}

export async function getLesson(courseSlug: string, lessonSlug: string): Promise<LessonContext | null> {
  const course = await getCourse(courseSlug);
  if (!course) return null;
  const flat = flattenLessons(course);
  const index = flat.findIndex((x) => x.lesson.slug === lessonSlug);
  if (index === -1) return null;
  const ref = (i: number) => (flat[i] ? { slug: flat[i].lesson.slug, title: flat[i].lesson.title } : null);
  return {
    course,
    module: flat[index].module,
    // only the lesson being opened carries the meanings: the course travels to the page too (for the contents)
    lesson: lessonWithMeanings(flat[index].lesson),
    index,
    total: flat.length,
    prev: ref(index - 1),
    next: ref(index + 1),
  };
}

export async function getAllLessonParams(): Promise<{ course: string; lesson: string }[]> {
  return COURSES.flatMap((c) => flattenLessons(c).map((x) => ({ course: c.slug, lesson: x.lesson.slug })));
}

export async function getPlacementTest(): Promise<PlacementQuestion[]> {
  return PLACEMENT_QUESTIONS;
}
