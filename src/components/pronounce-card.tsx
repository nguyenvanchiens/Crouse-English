"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { Eye, Snail, Volume2 } from "lucide-react";
import type { VocabWord } from "@/content/types";
import { speak, useSpeechSupport } from "@/lib/speech";

export function PronounceCard({
  word,
  label,
  revealMeaning = false,
  children,
}: {
  word: VocabWord;
  label?: string;
  revealMeaning?: boolean;
  children?: ReactNode;
}) {
  const [speaking, setSpeaking] = useState(false);
  const [popKey, setPopKey] = useState(0);
  const [showMeaning, setShowMeaning] = useState(revealMeaning);
  const { tts } = useSpeechSupport();

  function play(rate: number) {
    speak(word.word, {
      rate,
      onStart: () => {
        setSpeaking(true);
        setPopKey((k) => k + 1);
      },
      onEnd: () => setSpeaking(false),
    });
  }

  return (
    <article className="clay card-in relative p-6 sm:p-8" aria-label={`Thẻ từ vựng: ${word.word}`}>
      <div className="flex items-center justify-between gap-4">
        {label && <p className="text-sm font-semibold text-ink-soft">{label}</p>}
        {showMeaning ? (
          <span className="ml-auto rounded-full bg-leaf-soft px-3 py-1 text-sm font-semibold text-ink">
            {word.meaning}
          </span>
        ) : (
          <button
            type="button"
            onClick={() => setShowMeaning(true)}
            className="ml-auto inline-flex min-h-11 items-center gap-1.5 rounded-full border-2 border-ink bg-card px-3 text-sm font-semibold hover:bg-sun-soft"
          >
            <Eye className="size-4" aria-hidden />
            Xem nghĩa
          </button>
        )}
      </div>

      <div
        className="mt-6 flex flex-wrap items-end gap-x-1.5 gap-y-2"
        aria-label={`Trọng âm ở âm tiết ${word.stress + 1}`}
      >
        {word.syllables.map((s, i) => {
          const stressed = i === word.stress;
          return (
            <span
              key={`${popKey}-${i}`}
              className={
                stressed
                  ? `inline-block font-display text-5xl font-extrabold leading-none text-tangerine-deep sm:text-6xl ${speaking ? "stress-pop" : ""}`
                  : "font-display text-3xl font-semibold leading-none text-ink/65 sm:text-4xl"
              }
            >
              {stressed ? s.toUpperCase() : s}
            </span>
          );
        })}
      </div>

      <p className="mt-3 font-display text-xl text-ink-soft">
        <span className="font-semibold text-ink">{word.word}</span> {word.ipa}
        <Link href="/bang-ipa" className="ml-3 align-middle font-sans text-sm font-semibold text-ink underline underline-offset-4 hover:text-tangerine-deep">
          Tra bảng IPA
        </Link>
      </p>

      {showMeaning && word.example && <p className="mt-3 text-lg italic">“{word.example}”</p>}

      {word.tip && (
        <p className="mt-5 rounded-2xl bg-sky px-4 py-3 text-[0.95rem] leading-relaxed text-ink">{word.tip}</p>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        <button type="button" className="btn btn-primary" onClick={() => play(0.9)} disabled={!tts} aria-pressed={speaking}>
          <Volume2 className="size-5" aria-hidden />
          {speaking ? "Đang đọc…" : "Nghe phát âm"}
        </button>
        <button type="button" className="btn btn-ghost" onClick={() => play(0.5)} disabled={!tts}>
          <Snail className="size-5" aria-hidden />
          Nghe chậm
        </button>
        {children}
      </div>

      {!tts && (
        <p className="mt-3 text-sm text-ink-soft">
          Trình duyệt này chưa hỗ trợ đọc to. Hãy thử Chrome, Edge hoặc Safari.
        </p>
      )}
    </article>
  );
}
