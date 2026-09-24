"use client";

import Link from "next/link";
import { CheckCircle2, Circle, ClipboardCheck, Lock } from "lucide-react";
import type { Course } from "@/content/types";
import { lessonKey } from "@/lib/progress-core";
import { useProgress } from "@/lib/progress";

export function Syllabus({ course }: { course: Course }) {
  const { state } = useProgress();
  const open = course.status === "open";

  return (
    <div className="space-y-4">
      {course.modules.map((m, mi) => (
        <details key={m.id} open={mi === 0} className="clay group p-0 [box-shadow:var(--shadow-clay-sm)]">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[1.5rem] px-6 py-5">
            <span>
              <span className="block text-sm font-semibold text-ink-soft">Chương {mi + 1}</span>
              <span className="block font-display text-xl font-bold">{m.title}</span>
            </span>
            <span className="text-sm font-semibold text-ink-soft">{m.lessons.length} bài</span>
          </summary>
          <ul className="border-t-2 border-ink/15 px-3 py-3">
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
