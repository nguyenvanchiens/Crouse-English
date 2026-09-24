"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import type { Exercise, ExerciseStep } from "@/content/types";
import { correctAnswerText, percentScore } from "@/lib/scoring";
import { FillBlank } from "@/components/exercises/fill-blank";
import { ListenChoose } from "@/components/exercises/listen-choose";
import { MultipleChoice } from "@/components/exercises/multiple-choice";
import { Reorder } from "@/components/exercises/reorder";

function ExerciseItem({ item, locked, onAnswer }: { item: Exercise; locked: boolean; onAnswer: (ok: boolean) => void }) {
  switch (item.kind) {
    case "multiple-choice":
      return <MultipleChoice item={item} locked={locked} onAnswer={onAnswer} />;
    case "listen-choose":
      return <ListenChoose item={item} locked={locked} onAnswer={onAnswer} />;
    case "fill-blank":
      return <FillBlank item={item} locked={locked} onAnswer={onAnswer} />;
    case "reorder":
      return <Reorder item={item} locked={locked} onAnswer={onAnswer} />;
  }
}

/** Where the learner is in an exercise step; kept by the lesson so leaving the step does not reset it. */
export interface ExerciseProgress {
  i: number;
  correct: number;
  score: number | null;
  /** result of item `i` if it was already checked; keeps a wrong answer from being retried by leaving */
  answered?: boolean | null;
}

export function StepExercise({
  step,
  saved,
  onProgress,
  onComplete,
}: {
  step: ExerciseStep;
  saved?: ExerciseProgress;
  onProgress?: (p: ExerciseProgress) => void;
  onComplete: (r: { score: number }) => void;
}) {
  const [i, setI] = useState(saved?.i ?? 0);
  const [result, setResult] = useState<boolean | null>(saved?.answered ?? null);
  const [correct, setCorrect] = useState(saved?.correct ?? 0);
  const [attempt, setAttempt] = useState(0);
  const [score, setScore] = useState<number | null>(saved?.score ?? null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const scoreRef = useRef<HTMLDivElement>(null);
  const total = step.items.length;
  const item = step.items[i];
  const last = i === total - 1;

  // Keep keyboard focus on the next action as the checked/next buttons unmount.
  useEffect(() => {
    if (result !== null) nextRef.current?.focus();
  }, [result]);
  useEffect(() => {
    if (i > 0) itemRef.current?.focus();
  }, [i]);
  useEffect(() => {
    if (score !== null) scoreRef.current?.focus();
  }, [score]);

  function onAnswer(ok: boolean) {
    setResult(ok);
    if (ok) setCorrect((c) => c + 1);
    onProgress?.({ i, correct: correct + (ok ? 1 : 0), score: null, answered: ok });
  }

  function nextItem() {
    if (last) {
      const s = percentScore(correct, total) ?? 0;
      setScore(s);
      onProgress?.({ i, correct, score: s });
      onComplete({ score: s });
    } else {
      setI(i + 1);
      setResult(null);
      onProgress?.({ i: i + 1, correct, score: null });
    }
  }

  function retry() {
    setI(0);
    setResult(null);
    setCorrect(0);
    setScore(null);
    setAttempt((a) => a + 1);
    onProgress?.({ i: 0, correct: 0, score: null });
  }

  if (score !== null) {
    return (
      <div ref={scoreRef} tabIndex={-1} className="clay card-in p-8 text-center">
        <p className="font-display text-5xl font-extrabold">{score}%</p>
        <p className="mt-2 text-lg">Bạn làm đúng {correct}/{total} câu.</p>
        <button type="button" className="btn btn-ghost mt-6" onClick={retry}>Làm lại</button>
      </div>
    );
  }

  return (
    <div className="clay p-6 sm:p-8">
      <p className="mb-4 text-sm font-semibold text-ink-soft">Câu {i + 1}/{total}</p>
      <div ref={itemRef} tabIndex={-1} aria-label={`Câu ${i + 1}`}>
        <ExerciseItem key={`${attempt}-${item.id}`} item={item} locked={result !== null} onAnswer={onAnswer} />
      </div>
      <div role="status" aria-live="polite">
        {result !== null && (
          <div className={`mt-6 rounded-2xl border-[2.5px] border-ink p-4 ${result ? "bg-leaf-soft" : "bg-tangerine/25"}`}>
            <p className="flex items-center gap-2 font-display text-xl font-bold">
              {result ? <CheckCircle2 className="size-6" aria-hidden /> : <XCircle className="size-6" aria-hidden />}
              {result ? "Chính xác!" : `Chưa đúng. Đáp án: ${correctAnswerText(item)}`}
            </p>
            {item.explain && <p className="mt-2">{item.explain}</p>}
          </div>
        )}
      </div>
      {result !== null && (
        <button ref={nextRef} type="button" className="btn btn-primary mt-6" onClick={nextItem}>
          {last ? "Xem kết quả" : "Câu tiếp"}
        </button>
      )}
    </div>
  );
}
