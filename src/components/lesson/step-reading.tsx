"use client";

import { useState } from "react";
import { BookOpen, Check, Square, Volume2 } from "lucide-react";
import type { ReadingStep } from "@/content/types";
import { speak, stopSpeaking, useSpeechSupport } from "@/lib/speech";
import { StepExercise, type ExerciseProgress, type ExerciseResult } from "./step-exercise";

export function StepReading({
  step,
  saved,
  onProgress,
  onComplete,
}: {
  step: ReadingStep;
  saved?: ExerciseProgress;
  onProgress?: (p: ExerciseProgress) => void;
  onComplete: (r: ExerciseResult) => void;
}) {
  const { tts } = useSpeechSupport();
  const [reading, setReading] = useState<number | null>(null);
  const [started, setStarted] = useState(saved !== undefined);
  const words = step.paragraphs.join(" ").split(/\s+/).length;

  function toggleRead(i: number) {
    if (reading === i) {
      stopSpeaking();
      setReading(null);
      return;
    }
    setReading(i);
    speak(step.paragraphs[i], { rate: 0.9, onEnd: () => setReading((r) => (r === i ? null : r)) });
  }

  return (
    <div className="space-y-6">
      <article className="clay p-6 sm:p-8">
        <p className="flex items-center gap-2 text-sm font-semibold text-ink-soft">
          <BookOpen className="size-4" aria-hidden />
          Đọc hiểu, khoảng {words} từ
        </p>
        <h2 className="mt-2 font-display text-3xl font-extrabold leading-tight">{step.title}</h2>
        <div lang="en" className="mt-6 space-y-4">
          {step.paragraphs.map((para, i) => (
            <div key={i} className="flex gap-3">
              <button
                type="button"
                onClick={() => toggleRead(i)}
                disabled={!tts}
                aria-pressed={reading === i}
                aria-label={reading === i ? `Dừng đọc đoạn ${i + 1}` : `Nghe đoạn ${i + 1}`}
                className="mt-1 grid size-9 shrink-0 place-items-center rounded-full border-2 border-ink bg-card hover:bg-sun-soft disabled:opacity-40"
              >
                {reading === i ? <Square className="size-4" aria-hidden /> : <Volume2 className="size-4" aria-hidden />}
              </button>
              <p className="max-w-[68ch] text-lg leading-relaxed">{para}</p>
            </div>
          ))}
        </div>
        {step.glossary.length > 0 && (
          <section className="mt-8 rounded-2xl border-2 border-ink bg-sky p-5" aria-labelledby="glossary">
            <h3 id="glossary" className="font-display text-lg font-bold">Từ khó trong bài</h3>
            <dl className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {step.glossary.map((g) => (
                <div key={g.word} className="flex flex-wrap gap-x-2">
                  <dt lang="en" className="font-semibold">{g.word}</dt>
                  <dd className="text-ink-soft">{g.meaning}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}
        {!started && (
          <button type="button" className="btn btn-primary mt-8" onClick={() => setStarted(true)}>
            <Check className="size-5" aria-hidden />
            Đã đọc xong, làm câu hỏi
          </button>
        )}
      </article>

      {started && (
        <section className="clay p-6 sm:p-8" aria-label="Câu hỏi đọc hiểu">
          <h3 className="mb-4 font-display text-2xl font-extrabold">Câu hỏi đọc hiểu</h3>
          <p className="mb-6 text-ink-soft">Có thể kéo lên đọc lại bài bất cứ lúc nào.</p>
          <StepExercise items={step.questions} saved={saved} onProgress={onProgress} onComplete={onComplete} flat />
        </section>
      )}
    </div>
  );
}
