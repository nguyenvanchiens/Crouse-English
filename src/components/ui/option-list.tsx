"use client";

import { isEnglish, speak } from "@/lib/speech";

export type OptionState = "idle" | "correct" | "wrong";

const STYLE: Record<OptionState | "selected", string> = {
  idle: "bg-card hover:bg-sun-soft",
  selected: "bg-sun-soft",
  correct: "bg-leaf-soft",
  wrong: "bg-tangerine/25",
};

export function OptionList({
  name,
  options,
  value,
  onChange,
  disabled = false,
  states,
  speakOptions = true,
  speakText = (o) => o,
}: {
  name: string;
  options: string[];
  value: number | null;
  onChange: (i: number) => void;
  disabled?: boolean;
  states?: OptionState[];
  /** read an English option aloud when it is picked; off for listening questions, where it would give the answer away */
  speakOptions?: boolean;
  /** what to read for an option: the option itself, or e.g. the sentence with the option in its gap */
  speakText?: (option: string) => string;
}) {
  return (
    <fieldset disabled={disabled} className="grid gap-3">
      <legend className="sr-only">Chọn một đáp án</legend>
      {options.map((o, i) => {
        const s = states?.[i] ?? "idle";
        const style = s !== "idle" ? STYLE[s] : value === i ? STYLE.selected : STYLE.idle;
        return (
          <label
            key={i}
            className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-2xl border-[2.5px] border-ink px-4 py-3 font-medium transition-colors has-[:disabled]:cursor-default ${style}`}
          >
            <input
              type="radio"
              name={name}
              value={i}
              checked={value === i}
              onChange={() => onChange(i)}
              // on click, not change: tapping the picked option again reads it again
              onClick={() => speakOptions && isEnglish(o) && speak(speakText(o))}
              className="size-5 shrink-0 accent-[var(--color-grape)]"
            />
            <span>{o}</span>
            {s === "correct" && <span className="ml-auto text-sm font-semibold">Đáp án đúng</span>}
            {s === "wrong" && <span className="ml-auto text-sm font-semibold">Bạn chọn</span>}
          </label>
        );
      })}
    </fieldset>
  );
}
