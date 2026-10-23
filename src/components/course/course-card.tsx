import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Course } from "@/content/types";
import { contentHours, formatHours, lessonCounts } from "@/lib/course-utils";
import { GOAL_META, LEVEL_LABEL, LEVEL_TONE } from "./goal-meta";

export function CourseCard({ course }: { course: Course }) {
  const meta = GOAL_META[course.goal];
  const Icon = meta.icon;
  // the A1–C1 path wears its level's colour, the same one as on the home page's level line
  const level = course.goal === "lo-trinh" ? LEVEL_TONE[course.level] : null;
  const open = course.status === "open";
  return (
    <Link
      href={`/khoa-hoc/${course.slug}`}
      className={`clay group flex flex-col p-6 transition-transform duration-200 hover:-translate-y-1 ${level?.soft ?? meta.tone}`}
    >
      <div className="flex items-center justify-between gap-3">
        {level ? (
          <span className={`grid size-12 place-items-center rounded-full border-[2.5px] border-ink font-display text-lg font-extrabold ${level.strong}`}>
            {course.level}
          </span>
        ) : (
          <span className="grid size-12 place-items-center rounded-2xl border-[2.5px] border-ink bg-card">
            <Icon className="size-6" aria-hidden />
          </span>
        )}
        {!open && <span className="rounded-full border-2 border-ink bg-card px-3 py-1 text-sm font-semibold">Sắp ra mắt</span>}
      </div>
      <h3 className="mt-5 font-display text-2xl font-extrabold leading-tight">{course.title}</h3>
      <p className="mt-2 text-ink">{course.summary}</p>
      <div className="mt-auto pt-6">
       <div className="flex items-center justify-between gap-3 border-t-2 border-ink/10 pt-4">
        <p className="text-[0.9375rem] font-semibold">
          {open ? (
            <>
              {lessonCounts(course).lessons} bài · {formatHours(contentHours(course))} giờ
              <span className="text-ink-soft"> · {LEVEL_LABEL[course.level]}</span>
            </>
          ) : (
            <span className="text-ink-soft">Trình độ {course.level}, {LEVEL_LABEL[course.level].toLowerCase()}</span>
          )}
        </p>
        {open && <ArrowRight className="size-5 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden />}
       </div>
      </div>
    </Link>
  );
}

/** A course that is not open yet, as one compact row: a promise, so it should not take a whole card. */
export function CourseSoonRow({ course }: { course: Course }) {
  const meta = GOAL_META[course.goal];
  const Icon = meta.icon;
  return (
    <Link href={`/khoa-hoc/${course.slug}`} className="clay-soft flex min-h-16 items-center gap-3 px-4 py-3 hover:bg-sun-soft">
      <span className={`grid size-10 shrink-0 place-items-center rounded-xl ${meta.tone}`}>
        <Icon className="size-5" aria-hidden />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-display text-lg font-bold leading-tight">{course.title}</span>
        <span className="block text-sm text-ink-soft">Trình độ {course.level}</span>
      </span>
      <ArrowRight className="size-5 shrink-0 text-ink-soft" aria-hidden />
      <span className="sr-only">(sắp ra mắt)</span>
    </Link>
  );
}

export function CourseGrid({ courses }: { courses: Course[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((c) => (
        <CourseCard key={c.slug} course={c} />
      ))}
    </div>
  );
}
