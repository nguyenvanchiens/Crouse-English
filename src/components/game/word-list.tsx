"use client";

import { Volume2 } from "lucide-react";
import type { GameWord } from "@/lib/game";
import { progress } from "@/lib/progress";
import { speak } from "@/lib/speech";
import { AddWordButton, useInReview } from "@/components/add-word-button";

const toAdd = (w: GameWord) => ({ word: w.word, meaning: w.meaning, ipa: w.ipa, example: w.example, courseKey: w.courseKey });

/** The round's words, the ones got wrong first, each ready to go into the learner's own review. */
export function WordList({ words, missed }: { words: GameWord[]; missed: string[] }) {
  const inReview = useInReview();
  const sorted = [...words].sort((a, b) => Number(missed.includes(b.id)) - Number(missed.includes(a.id)));
  const wrongToAdd = sorted.filter((w) => missed.includes(w.id) && !inReview(toAdd(w)));
  return (
    <section aria-labelledby="round-words" className="mt-6 text-left">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 id="round-words" className="font-display text-xl font-bold">Từ trong lượt này</h3>
        {wrongToAdd.length > 1 && (
          <button
            type="button"
            className="btn btn-ghost min-h-11 px-3 text-sm"
            onClick={() => wrongToAdd.forEach((w) => progress.addCustomWord(toAdd(w)))}
          >
            Thêm tất cả {wrongToAdd.length} từ ghép sai
          </button>
        )}
      </div>
      <p className="mt-1 text-sm text-ink-soft">Từ nào chưa chắc thì thêm vào Từ của tôi để ôn mỗi ngày.</p>
      <ul className="mt-3 divide-y divide-ink/15 rounded-2xl border-[2.5px] border-ink bg-card">
        {sorted.map((w) => (
          <li key={w.id} className="flex flex-wrap items-center gap-x-3 gap-y-1 px-4 py-2">
            <button type="button" className="grid size-11 shrink-0 place-items-center rounded-xl hover:bg-sun-soft" onClick={() => speak(w.word)} aria-label={`Nghe “${w.word}”`}>
              <Volume2 className="size-5" aria-hidden />
            </button>
            <span className="min-w-0 flex-1 basis-40">
              <span lang="en" className="font-semibold">{w.word}</span>
              <span className="text-ink-soft">: {w.meaning}</span>
              {missed.includes(w.id) && <span className="ml-2 rounded-full bg-tangerine/25 px-2 text-xs font-semibold">ghép sai</span>}
            </span>
            <AddWordButton small word={toAdd(w)} />
          </li>
        ))}
      </ul>
    </section>
  );
}
