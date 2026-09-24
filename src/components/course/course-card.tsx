import Link from "next/link";
import type { Course } from "@/content/types";
import { formatVnd } from "@/lib/format";
import { GOAL_META, LEVEL_LABEL } from "./goal-meta";

export function CourseCard({ course }: { course: Course }) {
  const meta = GOAL_META[course.goal];
  const Icon = meta.icon;
  return (
    <Link
      href={`/khoa-hoc/${course.slug}`}
      className={`clay flex flex-col p-6 transition-transform duration-200 hover:-translate-y-1 ${meta.tone}`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="grid size-12 place-items-center rounded-2xl border-[2.5px] border-ink bg-card">
          <Icon className="size-6" aria-hidden />
        </span>
        {course.status === "soon" && (
          <span className="rounded-full border-2 border-ink bg-card px-3 py-1 text-sm font-semibold">Sắp ra mắt</span>
        )}
      </div>
      <h3 className="mt-5 font-display text-2xl font-extrabold leading-tight">{course.title}</h3>
      <p className="mt-2 text-ink">{course.summary}</p>
      <p className="mt-3 text-sm font-semibold text-ink-soft">
        Trình độ {course.level} ({LEVEL_LABEL[course.level].toLowerCase()}), {course.durationWeeks} tuần
      </p>
      <p className="mt-auto pt-6 font-display text-xl font-bold">{formatVnd(course.priceVnd)}/tháng</p>
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
