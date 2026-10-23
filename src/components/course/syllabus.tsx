"use client";

import Link from "next/link";
import { CheckCircle2, ChevronDown, Circle, ClipboardCheck, Lock } from "lucide-react";
import type { Course } from "@/content/types";
import { formatHours } from "@/lib/course-utils";
import { lessonKey } from "@/lib/progress-core";
import { useProgress } from "@/lib/progress";

/** "25 phút" under an hour, otherwise hours to the half: "2 giờ", "1,5 giờ". */
const chapterTime = (minutes: number) => (minutes < 60 ? `${minutes} phút` : `${formatHours(Math.round(minutes / 30) / 2)} giờ`);

export function Syllabus({ course }: { course: Course }) {
  const { state } = useProgress();
  const open = course.status === "open";

  return (
    <div className="space-y-3">
      {course.modules.map((m, mi) => (
        <details key={m.id} open={mi === 0} className="clay-soft group">
          <summary className="flex cursor-pointer list-none items-center gap-4 rounded-[1.25rem] px-5 py-4 sm:px-6 [&::-webkit-details-marker]:hidden">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-sky font-display text-lg font-extrabold">{mi + 1}</span>
            <span className="min-w-0 flex-1">
              <span className="block font-display text-xl font-bold leading-snug">{m.title}</span>
              <span className="block text-sm font-semibold text-ink-soft">
                {m.lessons.filter((l) => !l.review).length} bài học
                {m.lessons.some((l) => l.review) ? " · 1 bài ôn tập" : ""}
                {" · "}
                <span className="whitespace-nowrap">{chapterTime(m.lessons.reduce((n, l) => n + l.minutes, 0))}</span>
              </span>
            </span>
            <ChevronDown className="size-5 shrink-0 text-ink-soft transition-transform group-open:rotate-180" aria-hidden />
          </summary>
          <ul className="border-t-2 border-ink/10 px-2 py-2 sm:px-3">
            {m.lessons.map((l) => {
              const done = state.lessons[lessonKey(course.slug, l.slug)]?.done;
              const accessible = open;
              const Icon = done ? CheckCircle2 : !accessible ? Lock : l.review ? ClipboardCheck : Circle;
              const row = (
                <>
                  <Icon className={`size-5 shrink-0 ${done ? "text-leaf" : "text-ink-soft"}`} aria-hidden />
                  <span className="flex-1 font-medium">{l.title}</span>
                  <span className="text-sm text-ink-soft">{l.minutes} phút</span>
                  {done && <span className="sr-only">(đã học)</span>}
                  {!accessible && <span className="sr-only">(sắp ra mắt)</span>}
                </>
              );
              return (
                <li key={l.slug}>
                  {accessible ? (
                    <Link href={`/hoc/${course.slug}/${l.slug}`} className="flex min-h-12 items-center gap-3 rounded-xl px-3 hover:bg-sun-soft">
                      {row}
                    </Link>
                  ) : (
                    <div className="flex min-h-12 items-center gap-3 px-3 text-ink-soft">{row}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </details>
      ))}
    </div>
  );
}
