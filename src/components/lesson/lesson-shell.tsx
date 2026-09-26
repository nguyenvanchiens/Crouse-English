"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Flame, List, PartyPopper, X } from "lucide-react";
import type { Step } from "@/content/types";
import type { LessonContext } from "@/lib/content";
import { FINAL_PASS } from "@/content/review";
import { certificateStatus, courseProgress, displayStreak, todayKey, type CertificateStatus } from "@/lib/progress-core";
import { clearDraft, loadDraft, saveDraft, type LessonDraft } from "@/lib/lesson-draft";
import { percentScore } from "@/lib/scoring";
import { setDefaultAccent } from "@/lib/speech";
import type { PointEntry } from "@/lib/points";
import { PointsEarned } from "@/components/points";
import { progress, useProgress } from "@/lib/progress";
import { EmptyState } from "@/components/ui/empty-state";
import { PersistNotice } from "@/components/ui/persist-notice";
import { ProgressBar } from "@/components/ui/progress-bar";
import { LessonSidebar } from "./lesson-sidebar";
import { StepExercise, type ExerciseProgress, type ExerciseResult } from "./step-exercise";
import { StepDialogue } from "./step-dialogue";
import { StepLecture } from "./step-lecture";
import { StepReading } from "./step-reading";
import { StepTask, type TaskProgress } from "./step-task";
import { StepSpeaking } from "./step-speaking";
import { StepVideo } from "./step-video";
import { StepVocab } from "./step-vocab";

const STEP_LABEL: Record<Step["type"], string> = {
  lecture: "Bài giảng",
  dialogue: "Hội thoại",
  reading: "Đọc hiểu",
  task: "Thực hành",
  video: "Video",
  vocab: "Từ vựng",
  exercise: "Bài tập",
  speaking: "Luyện nói",
};
const STEP_HINT: Record<Step["type"], string> = {
  lecture: "Đọc bài giảng rồi bấm “Đã đọc xong” để tiếp tục.",
  dialogue: "Nghe và đóng vai hội thoại, rồi trả lời các câu hỏi hoặc bấm “Đã luyện xong hội thoại”.",
  reading: "Đọc bài rồi trả lời hết các câu hỏi để tiếp tục.",
  task: "Viết bài, xem bài mẫu và tự chấm để hoàn thành.",
  video: "Xem video rồi bấm “Đã xem xong” để tiếp tục.",
  vocab: "Xem hết các từ rồi bấm “Đã học xong các từ”.",
  exercise: "Làm hết các câu để tiếp tục.",
  speaking: "Luyện hết các câu, hoặc bỏ qua, để tiếp tục.",
};

export function LessonShell({ ctx }: { ctx: LessonContext }) {
  const { course, module: currentModule, lesson, index, total, next } = ctx;
  const { state, ready } = useProgress();
  // A saved draft is only read on the client; the step UI renders after `ready`, so it never hydrates against it.
  const [draft] = useState(() => loadDraft<ExerciseProgress, TaskProgress>(course.slug, lesson.slug, lesson.steps.length));
  const [stepIndex, setStepIndex] = useState(draft?.stepIndex ?? 0);
  const [completed, setCompleted] = useState<boolean[]>(() => draft?.completed ?? lesson.steps.map(() => false));
  const [results, setResults] = useState<LessonDraft["results"]>(draft?.results ?? {});
  const [exerciseProgress, setExerciseProgress] = useState<Record<number, ExerciseProgress>>(draft?.exerciseProgress ?? {});
  const [taskProgress, setTaskProgress] = useState<Record<number, TaskProgress>>(draft?.taskProgress ?? {});
  const [finished, setFinished] = useState<{ score: number | null; cert: CertificateStatus; points: PointEntry[] } | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const menuCloseRef = useRef<HTMLButtonElement>(null);
  const menuWasOpen = useRef(false);
  const finishRef = useRef<HTMLDivElement>(null);

  // Opening a lesson of an open course puts that course in "Khóa học của tôi".
  useEffect(() => {
    if (course.status === "open" && lesson.steps.length > 0) progress.enroll(course.slug);
  }, [course.slug, course.status, lesson.steps.length]);

  // The pronunciation course teaches British (RP) sounds: play them with a British voice.
  useEffect(() => {
    setDefaultAccent(course.goal === "phat-am" ? "GB" : "US");
    return () => setDefaultAccent("US");
  }, [course.goal]);

  // Move focus into the drawer on open and back to its trigger on close.
  useEffect(() => {
    if (menuOpen) menuCloseRef.current?.focus();
    else if (menuWasOpen.current) menuTriggerRef.current?.focus();
    menuWasOpen.current = menuOpen;
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // The result card replaces the step, which was usually scrolled far down: bring it into view.
  useEffect(() => {
    if (finished) finishRef.current?.focus();
  }, [finished]);

  // Keep the lesson in progress across reloads; nothing is saved before the first step is touched.
  const touched = stepIndex > 0 || completed.some(Boolean) || Object.keys(exerciseProgress).length > 0 || Object.keys(taskProgress).length > 0;
  useEffect(() => {
    if (finished || !touched) return;
    saveDraft(course.slug, lesson.slug, { stepIndex, completed, results, exerciseProgress, taskProgress });
  }, [course.slug, lesson.slug, finished, touched, stepIndex, completed, results, exerciseProgress, taskProgress]);

  const cp = courseProgress(course, state);
  const streak = displayStreak(state.streak, todayKey(), state.rewards.freezes);

  function markComplete(i: number, result?: ExerciseResult) {
    setCompleted((c) => c.map((v, k) => (k === i ? true : v)));
    if (result) setResults((r) => ({ ...r, [i]: { correct: result.correct, total: result.total } }));
  }

  /** The lesson score counts every scored item: exercises, reading and dialogue questions. */
  function lessonScore(): number | null {
    const all = Object.values(results);
    return percentScore(
      all.reduce((n, r) => n + r.correct, 0),
      all.reduce((n, r) => n + r.total, 0),
    );
  }

  function finishLesson() {
    const score = lessonScore();
    const before = state.points.log;
    const nextState = progress.completeLesson(course.slug, lesson.slug, score, lesson.final ? "final" : lesson.review ? "review" : "lesson");
    clearDraft(course.slug, lesson.slug);
    // entries added by this finish (older ones keep their identity in the log)
    const gained = nextState.points.log.filter((e) => !before.includes(e));
    setFinished({ score, cert: certificateStatus(course, nextState), points: gained });
  }

  function restart() {
    setFinished(null);
    setStepIndex(0);
    setCompleted(lesson.steps.map(() => false));
    setResults({});
    setExerciseProgress({});
    setTaskProgress({});
  }

  const sidebar = (onNavigate?: () => void) => (
    <LessonSidebar course={course} currentSlug={lesson.slug} state={state} onNavigate={onNavigate} />
  );

  function renderStep(step: Step, i: number) {
    const done = () => markComplete(i);
    const quiz = {
      saved: exerciseProgress[i],
      onProgress: (p: ExerciseProgress) => setExerciseProgress((s) => ({ ...s, [i]: p })),
      onComplete: (r?: ExerciseResult) => markComplete(i, r),
    };
    switch (step.type) {
      case "dialogue":
        return <StepDialogue step={step} done={completed[i]} {...quiz} />;
      case "reading":
        return <StepReading step={step} {...quiz} />;
      case "task":
        return (
          <StepTask
            step={step}
            done={completed[i]}
            saved={taskProgress[i]}
            onProgress={(p) => setTaskProgress((s) => ({ ...s, [i]: p }))}
            onComplete={done}
          />
        );
      case "lecture":
        return <StepLecture step={step} done={completed[i]} onComplete={done} />;
      case "video":
        return <StepVideo step={step} done={completed[i]} onComplete={done} />;
      case "vocab":
        return <StepVocab step={step} onComplete={done} />;
      case "exercise":
        return (
          <StepExercise items={step.items} {...quiz} />
        );
      case "speaking":
        return <StepSpeaking step={step} onComplete={done} />;
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

    const earned = finished?.cert.status === "earned";
    const attempt = finished?.score ?? 0;

    if (finished && lesson.final && !earned && attempt >= FINAL_PASS) {
      // passed the test, but some lessons are still unfinished (lessons can be opened in any order)
      const left = cp.total - cp.done;
      return (
        <div ref={finishRef} tabIndex={-1} className="clay card-in mx-auto max-w-2xl scroll-mt-28 px-6 py-12 text-center">
          <h2 className="font-display text-4xl font-extrabold">Bạn đạt {attempt}%, đã qua bài kiểm tra!</h2>
          <p className="mx-auto mt-3 max-w-md text-lg">
            Còn {left} bài học chưa hoàn thành. Học nốt các bài đó là bạn nhận được chứng chỉ, không cần làm lại bài kiểm tra.
          </p>
          <PointsEarned entries={finished.points} />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {cp.nextLesson && (
              <Link href={`/hoc/${course.slug}/${cp.nextLesson.slug}`} className="btn btn-primary">
                Học tiếp: {cp.nextLesson.title}
              </Link>
            )}
            <Link href={`/khoa-hoc/${course.slug}`} className="btn btn-ghost">Xem giáo trình</Link>
          </div>
        </div>
      );
    }

    if (finished && lesson.final && !earned) {
      return (
        <div ref={finishRef} tabIndex={-1} className="clay card-in mx-auto max-w-2xl scroll-mt-28 px-6 py-12 text-center">
          <h2 className="font-display text-4xl font-extrabold">Bạn đạt {attempt}%</h2>
          <p className="mx-auto mt-3 max-w-md text-lg">
            Cần đạt ít nhất {FINAL_PASS}% để nhận chứng chỉ. Hãy xem lại những câu sai, ôn các bài ôn tập chương rồi làm lại.
            Lần làm tốt nhất sẽ được tính.
          </p>
          <PointsEarned entries={finished.points} />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button type="button" className="btn btn-primary" onClick={restart}>Làm lại bài kiểm tra</button>
            <Link href={`/khoa-hoc/${course.slug}`} className="btn btn-ghost">Ôn lại theo giáo trình</Link>
          </div>
        </div>
      );
    }

    if (finished) {
      return (
        <div ref={finishRef} tabIndex={-1} className="clay card-in mx-auto max-w-2xl scroll-mt-28 px-6 py-12 text-center">
          <PartyPopper className="mx-auto size-12 text-tangerine-deep" aria-hidden />
          <h2 className="mt-4 font-display text-4xl font-extrabold">
            {lesson.final ? "Bạn đã vượt qua bài kiểm tra cuối khóa!" : `Xong bài ${lesson.title}!`}
          </h2>
          {finished.score !== null && (
            <p className="mt-3 text-lg">
              {lesson.final ? "Điểm lần này" : "Điểm cả bài"}: <strong>{finished.score}%</strong>
            </p>
          )}
          {lesson.final && finished.cert.status === "earned" && finished.cert.finalScore !== undefined && finished.cert.finalScore > attempt && (
            <p className="mt-1 text-ink-soft">Điểm cao nhất của bạn ({finished.cert.finalScore}%) vẫn được tính.</p>
          )}
          <p className="mt-1 text-ink-soft">Chuỗi ngày học: {displayStreak(state.streak, todayKey(), state.rewards.freezes)} ngày</p>
          <PointsEarned entries={finished.points} />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {earned ? (
              <Link href={`/hoc/${course.slug}/hoan-thanh`} className="btn btn-primary">Nhận chứng chỉ</Link>
            ) : next ? (
              <Link href={`/hoc/${course.slug}/${next.slug}`} className="btn btn-primary">Bài tiếp theo: {next.title}</Link>
            ) : (
              <Link href={`/khoa-hoc/${course.slug}`} className="btn btn-primary">Về trang khóa học</Link>
            )}
            <button type="button" className="btn btn-ghost" onClick={restart}>
              {lesson.final ? "Làm lại bài kiểm tra" : "Học lại bài này"}
            </button>
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
      <header inert={menuOpen} className="sticky top-0 z-30 border-b-[2.5px] border-ink bg-card">
        <div className="flex items-center gap-3 px-4 py-3 sm:px-6">
          <Link href={`/khoa-hoc/${course.slug}`} className="btn btn-ghost min-h-11 px-3 text-base" aria-label="Thoát bài học">
            <X className="size-5" aria-hidden />
            <span className="hidden sm:inline">Thoát</span>
          </Link>
          <button
            ref={menuTriggerRef}
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
            <button ref={menuCloseRef} type="button" className="btn btn-ghost mb-5 min-h-11 px-3 text-base" onClick={() => setMenuOpen(false)}>
              <X className="size-5" aria-hidden />
              Đóng
            </button>
            {sidebar(() => setMenuOpen(false))}
          </div>
        </div>
      )}

      <div inert={menuOpen} className="mx-auto grid w-full max-w-7xl flex-1 gap-10 px-4 py-8 sm:px-6 lg:grid-cols-[17rem_minmax(0,1fr)]">
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
