"use client";

import Link from "next/link";
import { useState } from "react";
import { Award, Printer } from "lucide-react";
import type { Course } from "@/content/types";
import { certificateCode, formatDateVi } from "@/lib/format";
import { FINAL_PASS } from "@/content/review";
import { certificateStatus, courseProgress, lastCompletedAt } from "@/lib/progress-core";
import { progress, useProgress } from "@/lib/progress";
import { EmptyState } from "@/components/ui/empty-state";
import { rewardById } from "@/content/rewards";

/** Certificate border bought in the rewards shop (/doi-qua). */
const FRAME_CLASS: Record<string, string> = {
  "frame-silver": "border-slate-400 [box-shadow:0_8px_0_0_var(--color-slate-500)]",
  "frame-gold": "border-amber-500 [box-shadow:0_8px_0_0_var(--color-amber-700)]",
  "frame-jade": "border-emerald-600 [box-shadow:0_8px_0_0_var(--color-emerald-800)]",
};
import { ProgressBar } from "@/components/ui/progress-bar";

export function CompletionView({ course }: { course: Course }) {
  const { state, ready } = useProgress();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");

  if (!ready) return <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-16"><div className="clay h-96 animate-pulse bg-card" aria-hidden /></main>;

  const p = courseProgress(course, state);
  if (p.percent < 100) {
    return (
      <main className="flex flex-1 items-center px-4 py-16 sm:px-6">
        <EmptyState title="Bạn sắp về đích rồi" body={`Bạn đã học ${p.done}/${p.total} bài của khóa ${course.title}. Học hết các bài để nhận chứng chỉ.`}>
          <div className="w-full max-w-sm"><ProgressBar value={p.percent} label={`Tiến độ ${p.percent}%`} /></div>
          {p.nextLesson && (
            <Link href={`/hoc/${course.slug}/${p.nextLesson.slug}`} className="btn btn-primary">Học tiếp: {p.nextLesson.title}</Link>
          )}
        </EmptyState>
      </main>
    );
  }

  const cert = certificateStatus(course, state);
  if (cert.status === "final-failed") {
    const finalLesson = course.modules.flatMap((m) => m.lessons).find((l) => l.final);
    return (
      <main className="flex flex-1 items-center px-4 py-16 sm:px-6">
        <EmptyState
          title={`Còn một bước: đạt ${FINAL_PASS}% bài kiểm tra cuối khóa`}
          body={`Điểm tốt nhất của bạn hiện là ${cert.finalScore}%. Ôn lại các chương rồi làm lại bài kiểm tra để nhận chứng chỉ.`}
        >
          {finalLesson && (
            <Link href={`/hoc/${course.slug}/${finalLesson.slug}`} className="btn btn-primary">Làm lại bài kiểm tra</Link>
          )}
          <Link href={`/khoa-hoc/${course.slug}`} className="btn btn-ghost">Xem giáo trình</Link>
        </EmptyState>
      </main>
    );
  }

  const completedAt = lastCompletedAt(course, state) ?? new Date().toISOString();
  const showForm = editing || !state.learnerName;

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-14 sm:px-6">
      <div className="print:hidden">
        <h1 className="font-display text-5xl font-extrabold leading-tight">Chúc mừng, bạn đã hoàn thành khóa học!</h1>
        <p className="mt-3 text-lg text-ink-soft">Bạn đã học xong {p.total} bài của khóa {course.title}.</p>

        {showForm && (
          <form
            className="clay mt-8 flex flex-col gap-3 p-6 sm:flex-row sm:items-end"
            onSubmit={(e) => {
              e.preventDefault();
              if (!name.trim()) return;
              progress.setLearnerName(name);
              setEditing(false);
            }}
          >
            <label className="flex-1">
              <span className="block font-semibold">Tên in trên chứng chỉ</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={60}
                autoComplete="name"
                className="mt-2 w-full rounded-xl border-[2.5px] border-ink bg-card px-4 py-2.5 text-lg"
              />
            </label>
            <button type="submit" className="btn btn-primary" disabled={!name.trim()}>Lưu tên</button>
            {editing && state.learnerName && (
              <button type="button" className="btn btn-ghost" onClick={() => setEditing(false)}>
                Hủy
              </button>
            )}
          </form>
        )}
      </div>

      {state.learnerName && !editing && (
        <>
          <section
            id="certificate"
            aria-label="Chứng chỉ hoàn thành"
            className={`clay mt-10 border-[6px] bg-card px-8 py-14 text-center sm:px-16 ${FRAME_CLASS[state.rewards.frame ?? ""] ?? ""}`}
          >
            <Award className="mx-auto size-14 text-tangerine-deep" aria-hidden />
            <p className="mt-4 font-display text-2xl font-bold text-ink-soft">Chứng nhận hoàn thành</p>
            <p className="mt-6 font-display text-5xl font-extrabold sm:text-6xl">{state.learnerName}</p>
            {rewardById(state.rewards.title) && (
              <p className="mt-2 font-display text-xl font-bold text-grape">{rewardById(state.rewards.title)!.name}</p>
            )}
            <p className="mx-auto mt-6 max-w-lg text-lg">
              đã hoàn thành khóa <strong>{course.title}</strong> (trình độ {course.level}) tại Crouse English.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-x-12 gap-y-3 text-ink-soft">
              <p>Ngày cấp: <strong className="text-ink">{formatDateVi(completedAt)}</strong></p>
              {cert.status === "earned" && cert.finalScore !== undefined && (
                <p>Điểm kiểm tra cuối khóa: <strong className="text-ink">{cert.finalScore}%</strong></p>
              )}
              <p>Mã chứng chỉ: <strong className="text-ink">{certificateCode(course.slug, state.learnerName, completedAt)}</strong></p>
            </div>
          </section>

          <div className="mt-8 flex flex-wrap gap-3 print:hidden">
            <button type="button" className="btn btn-primary" onClick={() => window.print()}>
              <Printer className="size-5" aria-hidden />
              In chứng chỉ
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => {
                setName(state.learnerName ?? "");
                setEditing(true);
              }}
            >
              Đổi tên
            </button>
            <Link href="/khoa-hoc" className="btn btn-ghost">Xem khóa học khác</Link>
          </div>
        </>
      )}
    </main>
  );
}
