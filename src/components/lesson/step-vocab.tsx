"use client";

import { useState } from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import type { VocabStep } from "@/content/types";
import { PronounceCard } from "@/components/pronounce-card";
import { stopSpeaking } from "@/lib/speech";

export function StepVocab({ step, onComplete }: { step: VocabStep; onComplete: () => void }) {
  const [i, setI] = useState(0);
  const [finished, setFinished] = useState(false);
  const word = step.words[i];
  const last = i === step.words.length - 1;

  function go(k: number) {
    stopSpeaking();
    setI(k);
  }

  return (
    <div>
      <ul className="mb-6 flex flex-wrap gap-2" aria-label="Các từ trong bài">
        {step.words.map((w, k) => (
          <li key={w.word}>
            <button
              type="button"
              onClick={() => go(k)}
              aria-current={k === i ? "true" : undefined}
              className={`min-h-11 rounded-full border-2 border-ink px-4 font-semibold ${k === i ? "bg-ink text-card" : "bg-card hover:bg-sun-soft"}`}
            >
              {w.word}
            </button>
          </li>
        ))}
      </ul>

      <PronounceCard key={word.word} word={word} label={`Từ ${i + 1}/${step.words.length}`}>
        {i > 0 && (
          <button type="button" className="btn btn-ghost" onClick={() => go(i - 1)}>
            <ChevronLeft className="size-5" aria-hidden />
            Từ trước
          </button>
        )}
        {!last ? (
          <button type="button" className="btn btn-ghost" onClick={() => go(i + 1)}>
            Từ tiếp theo
            <ChevronRight className="size-5" aria-hidden />
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-ghost"
            disabled={finished}
            onClick={() => {
              setFinished(true);
              onComplete();
            }}
          >
            <Check className="size-5" aria-hidden />
            Đã học xong các từ
          </button>
        )}
      </PronounceCard>
    </div>
  );
}
