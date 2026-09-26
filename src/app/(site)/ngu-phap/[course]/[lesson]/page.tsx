import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import type { LectureStep } from "@/content/types";
import { LectureContent } from "@/components/lesson/step-lecture";
import { LessonMediaCard } from "@/components/lesson/lesson-media";
import { getCourses, getLesson } from "@/lib/content";
import { grammarIndex } from "@/lib/grammar";

export async function generateStaticParams() {
  return grammarIndex(await getCourses()).map((e) => ({ course: e.courseSlug, lesson: e.lessonSlug }));
}

async function load(courseSlug: string, lessonSlug: string) {
  const ctx = await getLesson(courseSlug, lessonSlug);
  const lecture = ctx?.lesson.steps.find((s): s is LectureStep => s.type === "lecture");
  return ctx && lecture && ctx.course.status === "open" ? { ctx, lecture } : null;
}

export async function generateMetadata(props: PageProps<"/ngu-phap/[course]/[lesson]">): Promise<Metadata> {
  const { course, lesson } = await props.params;
  const found = await load(course, lesson);
  return found ? { title: `${found.lecture.title} (${found.ctx.course.level}) | Sổ tay ngữ pháp` } : {};
}

export default async function GrammarEntryPage(props: PageProps<"/ngu-phap/[course]/[lesson]">) {
  const { course, lesson } = await props.params;
  const found = await load(course, lesson);
  if (!found) notFound();
  const { ctx, lecture } = found;
  const entries = grammarIndex(await getCourses());
  const at = entries.findIndex((e) => e.courseSlug === ctx.course.slug && e.lessonSlug === ctx.lesson.slug);
  const nextEntry = entries[at + 1] ?? null;
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <Link href="/ngu-phap" className="inline-flex min-h-11 items-center gap-2 font-semibold hover:text-tangerine-deep">
        <ArrowLeft className="size-5" aria-hidden />
        Sổ tay ngữ pháp
      </Link>
      <p className="mt-6 text-sm font-semibold text-ink-soft">
        {ctx.course.title}, {ctx.module.title}
      </p>
      <article className="clay mt-3 p-6 sm:p-8">
        <LectureContent step={lecture} headingLevel={1} />
      </article>
      {ctx.lesson.media && (
        <div className="mt-6">
          <LessonMediaCard media={ctx.lesson.media} />
        </div>
      )}
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href={`/hoc/${ctx.course.slug}/${ctx.lesson.slug}`} className="btn btn-primary">
          Luyện tập bài này
        </Link>
        {nextEntry && (
          <Link href={`/ngu-phap/${nextEntry.courseSlug}/${nextEntry.lessonSlug}`} className="btn btn-ghost">
            Điểm tiếp theo: {nextEntry.lectureTitle}
          </Link>
        )}
      </div>
    </div>
  );
}
