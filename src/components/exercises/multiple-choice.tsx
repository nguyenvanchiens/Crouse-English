"use client";

import { useState } from "react";
import type { MultipleChoiceExercise } from "@/content/types";
import { checkChoice } from "@/lib/scoring";
import { BlankSentence, fillGap } from "@/components/ui/blank-sentence";
import { OptionList, type OptionState } from "@/components/ui/option-list";

export function choiceStates(options: string[], answer: number, choice: number | null, locked: boolean): OptionState[] | undefined {
  if (!locked) return undefined;
  return options.map((_, k) => (k === answer ? "correct" : k === choice ? "wrong" : "idle"));
}

export function MultipleChoice({
  item,
  locked,
  onAnswer,
}: {
  item: MultipleChoiceExercise;
  locked: boolean;
  onAnswer: (correct: boolean) => void;
}) {
  const [choice, setChoice] = useState<number | null>(null);
  // "I ___ from Vietnam.": the picked option fills the gap and the whole sentence is read; once checked, the answer
  const gapped = item.prompt.includes("___");
  const shown = locked ? item.options[item.answer] : choice !== null ? item.options[choice] : null;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (choice !== null) onAnswer(checkChoice(item.answer, choice));
      }}
    >
      {gapped ? (
        <BlankSentence as="h3" prompt={item.prompt} word={shown} className="mb-5 font-display text-2xl font-bold" />
      ) : (
        <h3 className="mb-5 font-display text-2xl font-bold">{item.prompt}</h3>
      )}
      <OptionList
        name={item.id}
        options={item.options}
        value={choice}
        onChange={setChoice}
        disabled={locked}
        states={choiceStates(item.options, item.answer, choice, locked)}
        speakText={gapped ? (o) => fillGap(item.prompt, o) : undefined}
      />
      {!locked && (
        <button type="submit" className="btn btn-primary mt-6" disabled={choice === null}>Kiểm tra</button>
      )}
    </form>
  );
}
