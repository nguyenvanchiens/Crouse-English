import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LessonShell } from "@/components/lesson/lesson-shell";
import { getAllLessonParams, getLesson } from "@/lib/content";

export async function generateStaticParams() {
  return getAllLessonParams();
}

export async function generateMetadata(props: PageProps<"/hoc/[course]/[lesson]">): Promise<Metadata> {
  const { course, lesson } = await props.params;
  const ctx = await getLesson(course, lesson);
  return ctx ? { title: `${ctx.lesson.title} | ${ctx.course.title}` } : {};
}

export default async function LessonPage(props: PageProps<"/hoc/[course]/[lesson]">) {
  const { course, lesson } = await props.params;
  const ctx = await getLesson(course, lesson);
  if (!ctx) notFound();
  return <LessonShell key={`${ctx.course.slug}/${ctx.lesson.slug}`} ctx={ctx} />;
}
