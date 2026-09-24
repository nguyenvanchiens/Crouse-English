"use client";

import { useState } from "react";
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

export function StepExercise({ step, onComplete }: { step: ExerciseStep; onComplete: (r: { score: number }) => void }) {
  const [i, setI] = useState(0);
  const [result, setResult] = useState<boolean | null>(null);
  const [correct, setCorrect] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [score, setScore] = useState<number | null>(null);
  const total = step.items.length;
  const item = step.items[i];
  const last = i === total - 1;

  function onAnswer(ok: boolean) {
    setResult(ok);
    if (ok) setCorrect((c) => c + 1);
  }

  function nextItem() {
    if (last) {
      const s = percentScore(correct, total) ?? 0;
      setScore(s);
      onComplete({ score: s });
    } else {
      setI(i + 1);
      setResult(null);
    }
  }

  function retry() {
    setI(0);
    setResult(null);
    setCorrect(0);
    setScore(null);
    setAttempt((a) => a + 1);
  }

  if (score !== null) {
    return (
      <div className="clay card-in p-8 text-center">
        <p className="font-display text-5xl font-extrabold">{score}%</p>
        <p className="mt-2 text-lg">Bạn làm đúng {correct}/{total} câu.</p>
        <button type="button" className="btn btn-ghost mt-6" onClick={retry}>Làm lại</button>
      </div>
    );
  }

  return (
    <div className="clay p-6 sm:p-8">
      <p className="mb-4 text-sm font-semibold text-ink-soft">Câu {i + 1}/{total}</p>
      <ExerciseItem key={`${attempt}-${item.id}`} item={item} locked={result !== null} onAnswer={onAnswer} />
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
        <button type="button" className="btn btn-primary mt-6" onClick={nextItem}>
          {last ? "Xem kết quả" : "Câu tiếp"}
        </button>
      )}
    </div>
  );
}
