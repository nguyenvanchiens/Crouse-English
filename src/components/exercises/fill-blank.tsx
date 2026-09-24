"use client";

import { useState } from "react";
import type { FillBlankExercise } from "@/content/types";
import { checkFillBlank } from "@/lib/scoring";

export function FillBlank({
  item,
  locked,
  onAnswer,
}: {
  item: FillBlankExercise;
  locked: boolean;
  onAnswer: (correct: boolean) => void;
}) {
  const [text, setText] = useState("");
  const [before, after = ""] = item.prompt.split("___");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (text.trim()) onAnswer(checkFillBlank(item.answers, text));
      }}
    >
      <h3 className="mb-5 font-display text-2xl font-bold">Điền từ còn thiếu</h3>
      <p className="font-display text-2xl leading-relaxed">
        {before}
        <input
          aria-label="Từ còn thiếu"
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={locked}
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          className="mx-1 inline-block w-40 rounded-xl border-[2.5px] border-ink bg-card px-3 py-1 align-baseline font-sans text-xl disabled:bg-sky"
        />
        {after}
      </p>
      {!locked && (
        <button type="submit" className="btn btn-primary mt-6" disabled={!text.trim()}>Kiểm tra</button>
      )}
    </form>
  );
}
