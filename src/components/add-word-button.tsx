"use client";

import { Check, Plus } from "lucide-react";
import { useState } from "react";
import { customWordId } from "@/lib/progress-core";
import { progress, useProgress } from "@/lib/progress";

export interface WordToAdd {
  word: string;
  meaning: string;
  example?: string;
  ipa?: string;
  /** the word's own review key when it comes from a course (vocabKey), to tell it is already being reviewed */
  courseKey?: string;
}

/** whether a word is already in the review: one of the learner's own, or a course word already reviewed */
export function useInReview() {
  const { state } = useProgress();
  const own = new Set(state.custom.map((c) => customWordId(c.word)));
  return (w: WordToAdd) => own.has(customWordId(w.word)) || (!!w.courseKey && !!state.srs[w.courseKey]);
}

/**
 * Puts a word met while practising into "Từ của tôi", so it joins the daily spaced review
 * (/on-tap-tu-vung, at most 15 new words a day together with the course words).
 */
export function AddWordButton({ word, small = false }: { word: WordToAdd; small?: boolean }) {
  const inReview = useInReview();
  const [error, setError] = useState(false);
  const added = inReview(word);
  const size = small ? "min-h-11 px-2 text-sm" : "min-h-11 px-3";

  if (added)
    return (
      <span className={`inline-flex items-center gap-1 font-semibold text-ink-soft ${small ? "text-sm" : ""}`}>
        <Check className="size-4" aria-hidden />
        Đã có trong lịch ôn
      </span>
    );
  return (
    <span className="inline-flex flex-wrap items-center gap-2">
      <button
        type="button"
        className={`inline-flex items-center gap-1 rounded-xl border-2 border-ink bg-card font-semibold hover:bg-sun-soft ${size}`}
        onClick={() => setError(progress.addCustomWord({ word: word.word, meaning: word.meaning, example: word.example, ipa: word.ipa }) !== null)}
        aria-label={`Thêm “${word.word}” vào Từ của tôi để ôn`}
      >
        <Plus className="size-4" aria-hidden />
        {small ? "Thêm" : "Thêm vào Từ của tôi"}
      </button>
      {error && <span role="alert" className="text-sm">Chưa thêm được: danh sách đã đầy hoặc từ không hợp lệ.</span>}
    </span>
  );
}
