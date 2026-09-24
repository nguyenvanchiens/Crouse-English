import { COURSES } from "@/content";
import { PLACEMENT_QUESTIONS } from "@/content/placement";
import type { Course, Lesson, Module, PlacementQuestion } from "@/content/types";
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
    lesson: flat[index].lesson,
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
