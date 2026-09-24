import Link from "next/link";
import { CheckCircle2, Circle, Lock, PlayCircle } from "lucide-react";
import type { Course } from "@/content/types";
import { lessonKey, type ProgressState } from "@/lib/progress-core";

export function LessonSidebar({
  course,
  currentSlug,
  state,
  enrolled,
  onNavigate,
}: {
  course: Course;
  currentSlug: string;
  state: ProgressState;
  enrolled: boolean;
  onNavigate?: () => void;
}) {
  return (
    <nav aria-label="Mục lục khóa học" className="space-y-6">
      {course.modules.map((m, mi) => (
        <div key={m.id}>
          <p className="text-sm font-semibold text-ink-soft">Chương {mi + 1}</p>
          <p className="font-display text-lg font-bold leading-tight">{m.title}</p>
          <ul className="mt-2 space-y-1">
            {m.lessons.map((l) => {
              const current = l.slug === currentSlug;
              const done = state.lessons[lessonKey(course.slug, l.slug)]?.done;
              const locked = !l.free && !enrolled;
              const Icon = current ? PlayCircle : done ? CheckCircle2 : locked ? Lock : Circle;
              return (
                <li key={l.slug}>
                  <Link
                    href={`/hoc/${course.slug}/${l.slug}`}
                    onClick={onNavigate}
                    aria-current={current ? "page" : undefined}
                    className={`flex min-h-11 items-center gap-2.5 rounded-xl px-2.5 text-[0.95rem] ${
                      current ? "border-2 border-ink bg-sun font-semibold" : "hover:bg-sun-soft"
                    } ${locked && !current ? "text-ink-soft" : ""}`}
                  >
                    <Icon className={`size-5 shrink-0 ${done && !current ? "text-leaf" : ""}`} aria-hidden />
                    <span className="flex-1">{l.title}</span>
                    {done && <span className="sr-only">(đã học)</span>}
                    {locked && <span className="sr-only">(cần đăng ký)</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
