"use client";

import { Volume2 } from "lucide-react";
import { speak } from "@/lib/speech";

/**
 * After an answer is checked: the whole right sentence (tap to hear it) and what it means, so a right guess
 * still ends with the sentence understood.
 */
export function SentenceMeaning({ en, vi, className = "" }: { en?: string; vi: string; className?: string }) {
  return (
    <div className={`rounded-xl bg-card/70 px-3 py-2 ${className}`}>
      {en && (
        <button
          type="button"
          lang="en"
          onClick={() => speak(en, { rate: 0.85 })}
          className="inline-flex min-h-11 items-start gap-2 py-1.5 text-left font-display text-lg font-bold leading-snug hover:text-tangerine-deep"
        >
          <Volume2 className="mt-1 size-4 shrink-0" aria-hidden />
          {en}
          <span className="sr-only">, bấm để nghe</span>
        </button>
      )}
      <p>
        <span className="font-semibold">Nghĩa: </span>
        {vi}
      </p>
    </div>
  );
}
