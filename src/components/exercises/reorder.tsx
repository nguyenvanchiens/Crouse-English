"use client";

import { useState } from "react";
import type { ReorderExercise } from "@/content/types";
import { checkReorder, chipText, shuffleAvoidingAnswer } from "@/lib/scoring";
import { speakIfEnglish } from "@/lib/speech";
import { useDragReorder } from "@/components/ui/use-drag-reorder";

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
  const arrange = useDragReorder(picked, setPicked, (k) => setPicked((p) => p.filter((_, j) => j !== k)));
  const wordAt = (pos: number) => chipText(item.words[order[pos]], order[pos] === 0);
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
        {picked.map((pos, k) => (
          <button
            key={pos}
            type="button"
            disabled={locked}
            {...(locked ? {} : arrange.itemProps(k, wordAt(pos)))}
            className={`${chip} cursor-grab select-none transition-transform active:cursor-grabbing disabled:cursor-default ${arrange.dragging === k ? "z-10 scale-105 bg-tangerine" : "bg-sun"}`}
            aria-label={`${wordAt(pos)}, bấm để bỏ ra, kéo hoặc dùng phím mũi tên để đổi chỗ`}
          >
            {wordAt(pos)}
          </button>
        ))}
        {endMark && (
          <span className="ml-auto px-2 font-display text-2xl font-bold text-ink-soft">
            <span aria-hidden>{endMark}</span>
            <span className="sr-only">{endMark === "?" ? "Đây là câu hỏi" : "Kết thúc câu"}</span>
          </span>
        )}
      </div>
      {!locked && picked.length > 1 && <p className="mt-2 text-sm text-ink-soft">Kéo một từ để đổi chỗ, bấm để bỏ ra.</p>}
      <p role="status" className="sr-only">{arrange.status}</p>
      <div role="group" className="mt-4 flex flex-wrap gap-2" aria-label="Các từ để chọn">
        {order.map((_, pos) =>
          picked.includes(pos) ? null : (
            <button
              key={pos}
              type="button"
              disabled={locked}
              className={`${chip} bg-card`}
              onClick={() => {
                setPicked([...picked, pos]);
                speakIfEnglish(wordAt(pos));
              }}
            >
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
