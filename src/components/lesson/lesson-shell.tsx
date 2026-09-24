"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Flame, List, PartyPopper, X } from "lucide-react";
import type { Step } from "@/content/types";
import type { LessonContext } from "@/lib/content";
import { courseProgress, displayStreak, todayKey } from "@/lib/progress-core";
import { progress, useProgress } from "@/lib/progress";
import { EmptyState } from "@/components/ui/empty-state";
import { PersistNotice } from "@/components/ui/persist-notice";
import { ProgressBar } from "@/components/ui/progress-bar";
import { LessonSidebar } from "./lesson-sidebar";
import { StepExercise } from "./step-exercise";
import { StepVideo } from "./step-video";
import { StepVocab } from "./step-vocab";

const STEP_LABEL: Record<Step["type"], string> = {
  video: "Video",
  vocab: "Từ vựng",
  exercise: "Bài tập",
  speaking: "Luyện nói",
};
const STEP_HINT: Record<Step["type"], string> = {
  video: "Xem video rồi bấm “Đã xem xong” để tiếp tục.",
  vocab: "Xem hết các từ rồi bấm “Đã học xong các từ”.",
  exercise: "Làm hết các câu để tiếp tục.",
  speaking: "Luyện hết các câu, hoặc bỏ qua, để tiếp tục.",
};

export function LessonShell({ ctx }: { ctx: LessonContext }) {
  const { course, module: currentModule, lesson, index, total, next } = ctx;
  const { state, ready } = useProgress();
  const [stepIndex, setStepIndex] = useState(0);
  const [completed, setCompleted] = useState<boolean[]>(() => lesson.steps.map(() => false));
  const [exerciseScore, setExerciseScore] = useState<number | null>(null);
  const [finished, setFinished] = useState<{ score: number | null; courseDone: boolean } | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const enrolled = state.enrolled.includes(course.slug);
  const cp = courseProgress(course, state);
  const streak = displayStreak(state.streak, todayKey());

  function markComplete(i: number, result?: { score?: number }) {
    setCompleted((c) => c.map((v, k) => (k === i ? true : v)));
    if (result?.score !== undefined) setExerciseScore(result.score);
  }

  function finishLesson() {
    const nextState = progress.completeLesson(course.slug, lesson.slug, exerciseScore);
    setFinished({ score: exerciseScore, courseDone: courseProgress(course, nextState).percent === 100 });
  }

  function restart() {
    setFinished(null);
    setStepIndex(0);
    setCompleted(lesson.steps.map(() => false));
    setExerciseScore(null);
  }

  const sidebar = (onNavigate?: () => void) => (
    <LessonSidebar course={course} currentSlug={lesson.slug} state={state} enrolled={enrolled} onNavigate={onNavigate} />
  );

  function renderStep(step: Step, i: number) {
    const done = () => markComplete(i);
    switch (step.type) {
      case "video":
        return <StepVideo step={step} done={completed[i]} onComplete={done} />;
      case "vocab":
        return <StepVocab step={step} onComplete={done} />;
      case "exercise":
        return <StepExercise step={step} onComplete={(r) => markComplete(i, r)} />;
      case "speaking":
        // Replaced by <StepSpeaking> in Task 11
        return <button type="button" className="btn btn-ghost" onClick={done}>Bỏ qua (tạm)</button>;
    }
  }

  function body() {
    if (!ready) return <div className="clay h-96 animate-pulse bg-card" aria-hidden />;

    if (course.status === "soon" || lesson.steps.length === 0) {
      return (
        <EmptyState title="Bài học này sắp ra mắt" body={`Khóa ${course.title} đang được hoàn thiện nội dung.`}>
          <Link href={`/khoa-hoc/${course.slug}`} className="btn btn-ghost">Về trang khóa học</Link>
        </EmptyState>
      );
    }

    if (!lesson.free && !enrolled) {
      return (
        <EmptyState
          title="Đăng ký để học bài này"
          body={`Bài “${lesson.title}” thuộc khóa ${course.title}. Bạn có thể học thử các bài miễn phí trước.`}
        >
          <button type="button" className="btn btn-primary" onClick={() => progress.enroll(course.slug)}>
            Đăng ký khóa học
          </button>
          <Link href={`/khoa-hoc/${course.slug}`} className="btn btn-ghost">Xem giáo trình</Link>
        </EmptyState>
      );
    }

    if (finished) {
      return (
        <div className="clay card-in mx-auto max-w-2xl px-6 py-12 text-center">
          <PartyPopper className="mx-auto size-12 text-tangerine-deep" aria-hidden />
          <h2 className="mt-4 font-display text-4xl font-extrabold">Xong bài {lesson.title}!</h2>
          {finished.score !== null && (
            <p className="mt-3 text-lg">Điểm bài tập: <strong>{finished.score}%</strong></p>
          )}
          <p className="mt-1 text-ink-soft">Chuỗi ngày học: {displayStreak(state.streak, todayKey())} ngày</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {finished.courseDone ? (
              <Link href={`/hoc/${course.slug}/hoan-thanh`} className="btn btn-primary">Nhận chứng chỉ</Link>
            ) : next ? (
              <Link href={`/hoc/${course.slug}/${next.slug}`} className="btn btn-primary">Bài tiếp theo: {next.title}</Link>
            ) : (
              <Link href={`/khoa-hoc/${course.slug}`} className="btn btn-primary">Về trang khóa học</Link>
            )}
            <button type="button" className="btn btn-ghost" onClick={restart}>Học lại bài này</button>
          </div>
        </div>
      );
    }

    const step = lesson.steps[stepIndex];
    const isLast = stepIndex === lesson.steps.length - 1;
    return (
      <>
        <ol className="mb-6 flex flex-wrap gap-2" aria-label="Các bước của bài">
          {lesson.steps.map((s, k) => {
            const reachable = k === 0 || completed[k - 1];
            return (
              <li key={k}>
                <button
                  type="button"
                  disabled={!reachable}
                  onClick={() => setStepIndex(k)}
                  aria-current={k === stepIndex ? "step" : undefined}
                  className={`inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-ink px-4 text-sm font-semibold disabled:opacity-50 ${
                    k === stepIndex ? "bg-ink text-card" : completed[k] ? "bg-leaf-soft" : "bg-card"
                  }`}
                >
                  {k + 1}. {STEP_LABEL[s.type]}
                </button>
              </li>
            );
          })}
        </ol>

        <div key={stepIndex}>{renderStep(step, stepIndex)}</div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t-2 border-ink/15 pt-6">
          <button type="button" className="btn btn-ghost" disabled={stepIndex === 0} onClick={() => setStepIndex(stepIndex - 1)}>
            Bước trước
          </button>
          <div className="flex flex-wrap items-center gap-4">
            {!completed[stepIndex] && <p className="text-sm text-ink-soft">{STEP_HINT[step.type]}</p>}
            <button
              type="button"
              className="btn btn-primary"
              disabled={!completed[stepIndex]}
              onClick={() => (isLast ? finishLesson() : setStepIndex(stepIndex + 1))}
            >
              {isLast ? "Hoàn thành bài học" : "Tiếp tục"}
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <header className="sticky top-0 z-30 border-b-[2.5px] border-ink bg-card">
        <div className="flex items-center gap-3 px-4 py-3 sm:px-6">
          <Link href={`/khoa-hoc/${course.slug}`} className="btn btn-ghost min-h-11 px-3 text-base" aria-label="Thoát bài học">
            <X className="size-5" aria-hidden />
            <span className="hidden sm:inline">Thoát</span>
          </Link>
          <button
            type="button"
            className="btn btn-ghost min-h-11 px-3 text-base lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="lesson-menu"
          >
            <List className="size-5" aria-hidden />
            Mục lục
          </button>
          <div className="min-w-0 flex-1">
            <p className="truncate font-display font-bold">{course.title}</p>
            <ProgressBar value={cp.percent} label={`Tiến độ khóa học ${cp.percent}%`} className="mt-1 max-w-xs" />
          </div>
          <p className="flex items-center gap-1 font-display text-lg font-bold" title="Chuỗi ngày học">
            <Flame className="size-5 text-tangerine-deep" aria-hidden />
            {ready ? streak : 0}
            <span className="sr-only"> ngày học liên tiếp</span>
          </p>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" role="dialog" aria-modal="true" aria-label="Mục lục khóa học">
          <button type="button" className="absolute inset-0 bg-ink/40" aria-label="Đóng mục lục" onClick={() => setMenuOpen(false)} />
          <div id="lesson-menu" className="absolute inset-y-0 left-0 w-[min(20rem,85vw)] overflow-y-auto border-r-[2.5px] border-ink bg-card p-5">
            <button type="button" className="btn btn-ghost mb-5 min-h-11 px-3 text-base" onClick={() => setMenuOpen(false)}>
              <X className="size-5" aria-hidden />
              Đóng
            </button>
            {sidebar(() => setMenuOpen(false))}
          </div>
        </div>
      )}

      <div className="mx-auto grid w-full max-w-7xl flex-1 gap-10 px-4 py-8 sm:px-6 lg:grid-cols-[17rem_minmax(0,1fr)]">
        <aside className="hidden lg:block">{sidebar()}</aside>
        <main className="min-w-0">
          <PersistNotice />
          <p className="mt-2 text-sm font-semibold text-ink-soft">
            {currentModule.title}, bài {index + 1}/{total}
          </p>
          <h1 className="mb-8 mt-1 font-display text-4xl font-extrabold leading-tight">{lesson.title}</h1>
          {body()}
        </main>
      </div>
    </>
  );
}
