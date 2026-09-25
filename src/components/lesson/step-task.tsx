"use client";

import { useId, useState } from "react";
import { Check, ClipboardList, Lightbulb } from "lucide-react";
import type { TaskStep } from "@/content/types";

export function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export interface TaskProgress {
  text: string;
  revealed: boolean;
  checked: boolean[];
}

export function StepTask({
  step,
  done,
  saved,
  onProgress,
  onComplete,
}: {
  step: TaskStep;
  done: boolean;
  /** restores the learner's draft when they come back to this step */
  saved?: TaskProgress;
  onProgress?: (p: TaskProgress) => void;
  onComplete: () => void;
}) {
  const [text, setTextState] = useState(saved?.text ?? "");
  const [revealed, setRevealedState] = useState(saved?.revealed ?? false);
  const [checked, setCheckedState] = useState<boolean[]>(() => saved?.checked ?? step.checklist.map(() => false));
  const id = useId();
  const save = (p: Partial<TaskProgress>) => onProgress?.({ text, revealed, checked, ...p });
  const setText = (v: string) => {
    setTextState(v);
    save({ text: v });
  };
  const setRevealed = (v: boolean) => {
    setRevealedState(v);
    save({ revealed: v });
  };
  const toggle = (i: number) => {
    const v = checked.map((x, k) => (k === i ? !x : x));
    setCheckedState(v);
    save({ checked: v });
  };
  const words = countWords(text);
  const canReveal = words >= step.minWords;

  return (
    <article className="clay p-6 sm:p-8">
      <p className="flex items-center gap-2 text-sm font-semibold text-ink-soft">
        <ClipboardList className="size-4" aria-hidden />
        Nhiệm vụ thực hành
      </p>
      <h2 className="mt-2 font-display text-2xl font-extrabold leading-snug">{step.prompt}</h2>

      {step.hints.length > 0 && (
        <div className="mt-5 rounded-2xl border-2 border-ink bg-leaf-soft px-4 py-3">
          <p className="flex items-center gap-2 font-semibold">
            <Lightbulb className="size-5" aria-hidden />
            Gợi ý
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            {step.hints.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      )}

      <label htmlFor={id} className="mt-6 block font-semibold">
        Bài làm của bạn (bằng tiếng Anh)
      </label>
      <textarea
        id={id}
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={6}
        lang="en"
        spellCheck
        className="mt-2 w-full rounded-2xl border-[2.5px] border-ink bg-card px-4 py-3 text-lg leading-relaxed"
      />
      <p className="mt-1 text-sm text-ink-soft">
        {words} từ{!canReveal ? `, viết ít nhất ${step.minWords} từ để mở bài mẫu` : ""}
      </p>
      {/* announce only the threshold, not every keystroke */}
      <p className="sr-only" aria-live="polite">
        {canReveal ? "Đã đủ số từ, bạn có thể xem bài mẫu." : ""}
      </p>

      <button type="button" className="btn btn-ghost mt-4" disabled={!canReveal || revealed} onClick={() => setRevealed(true)}>
        Xem bài mẫu để so sánh
      </button>

      {revealed && (
        <div className="card-in mt-6 space-y-6">
          <div className="rounded-2xl border-2 border-ink bg-sky px-4 py-3">
            <p className="font-semibold">Bài mẫu</p>
            <p lang="en" className="mt-2 whitespace-pre-line text-lg leading-relaxed">
              {step.model}
            </p>
          </div>
          <fieldset>
            <legend className="font-semibold">Tự chấm bài của bạn</legend>
            <ul className="mt-2 space-y-2">
              {step.checklist.map((c, i) => (
                <li key={c}>
                  <label className="flex min-h-11 cursor-pointer items-start gap-3 rounded-xl px-2 py-1 hover:bg-sun-soft">
                    <input
                      type="checkbox"
                      checked={checked[i]}
                      onChange={() => toggle(i)}
                      className="mt-1 size-5 shrink-0 accent-[var(--color-leaf)]"
                    />
                    <span>{c}</span>
                  </label>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-sm text-ink-soft" aria-live="polite">
              Đạt {checked.filter(Boolean).length}/{step.checklist.length} tiêu chí. Tiêu chí nào chưa đạt, hãy sửa bài rồi đọc to lại một lần.
            </p>
          </fieldset>
        </div>
      )}

      <button type="button" className="btn btn-primary mt-8" onClick={onComplete} disabled={done || !revealed}>
        {done && <Check className="size-5" aria-hidden />}
        Đã hoàn thành nhiệm vụ
      </button>
    </article>
  );
}
