"use client";

import { useState } from "react";
import type { ReorderExercise } from "@/content/types";
import { checkReorder, chipText, shuffleAvoidingAnswer } from "@/lib/scoring";

export function Reorder({
  item,
  locked,
  onAnswer,
}: {
  item: ReorderExercise;
  locked: boolean;
  onAnswer: (correct: boolean) => void;
}) {
  const [order] = useState(() => shuffleAvoidingAnswer(item.words));
  const [picked, setPicked] = useState<number[]>([]); // positions in `order`
  const wordAt = (pos: number) => chipText(item.words[order[pos]]);
  // chips hide punctuation, so show how the sentence ends: tells a question from a statement
  const endMark = /[?!.]$/.exec(item.words[item.words.length - 1])?.[0] ?? null;

  const chip =
    "min-h-11 rounded-xl border-[2.5px] border-ink px-4 font-display text-lg font-semibold shadow-[0_3px_0_0_var(--color-ink)] active:translate-y-0.5 active:shadow-none disabled:shadow-none";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAnswer(checkReorder(item.words, picked.map(wordAt)));
      }}
    >
      <h3 className="mb-5 font-display text-2xl font-bold">{item.prompt}</h3>
      <div
        role="group"
        className="flex min-h-20 flex-wrap items-center gap-2 rounded-2xl border-[2.5px] border-dashed border-ink bg-card p-3"
        aria-label="Câu trả lời của bạn"
      >
        {picked.length === 0 && <p className="px-2 text-ink-soft">Bấm các từ bên dưới theo đúng thứ tự</p>}
        {picked.map((pos) => (
          <button
            key={pos}
            type="button"
            disabled={locked}
            className={`${chip} bg-sun`}
            onClick={() => setPicked(picked.filter((p) => p !== pos))}
            aria-label={`Bỏ từ ${wordAt(pos)}`}
          >
            {wordAt(pos)}
          </button>
        ))}
        {endMark && (
          <span className="ml-auto px-2 font-display text-2xl font-bold text-ink-soft" aria-label={endMark === "?" ? "Đây là câu hỏi" : "Kết thúc câu"}>
            {endMark}
          </span>
        )}
      </div>
      <div role="group" className="mt-4 flex flex-wrap gap-2" aria-label="Các từ để chọn">
        {order.map((_, pos) =>
          picked.includes(pos) ? null : (
            <button key={pos} type="button" disabled={locked} className={`${chip} bg-card`} onClick={() => setPicked([...picked, pos])}>
              {wordAt(pos)}
            </button>
          ),
        )}
      </div>
      {!locked && (
        <button type="submit" className="btn btn-primary mt-6" disabled={picked.length !== item.words.length}>
          Kiểm tra
        </button>
      )}
    </form>
  );
}
