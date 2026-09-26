"use client";

import { useState } from "react";
import type { ErrorCorrectionExercise } from "@/content/types";
import { checkCorrection } from "@/lib/scoring";

export function CorrectSentence({
  item,
  locked,
  onAnswer,
}: {
  item: ErrorCorrectionExercise;
  locked: boolean;
  onAnswer: (correct: boolean) => void;
}) {
  // start from the wrong sentence: the learner edits it rather than retyping it
  const [text, setText] = useState(item.wrong);
  const unchanged = text.trim() === item.wrong.trim();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (text.trim() && !unchanged) onAnswer(checkCorrection(item.answers, text));
      }}
    >
      <h3 className="font-display text-2xl font-bold">Tìm và sửa lỗi sai</h3>
      <p className="mt-2 text-ink-soft">Câu dưới đây có một lỗi. Sửa trực tiếp trong ô rồi bấm Kiểm tra.</p>
      <p lang="en" className="mt-4 rounded-2xl border-2 border-dashed border-ink bg-sun-soft px-4 py-3 font-display text-xl font-bold line-through decoration-tangerine-deep/60">
        {item.wrong}
      </p>
      <label className="mt-4 block">
        <span className="sr-only">Câu đã sửa</span>
        <textarea
          lang="en"
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={locked}
          rows={2}
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          className="w-full rounded-xl border-[2.5px] border-ink bg-card px-4 py-3 font-sans text-xl disabled:bg-sky"
        />
      </label>
      {!locked && (
        <button type="submit" className="btn btn-primary mt-6" disabled={!text.trim() || unchanged}>Kiểm tra</button>
      )}
    </form>
  );
}
