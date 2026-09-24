"use client";

import { useState } from "react";
import type { MultipleChoiceExercise } from "@/content/types";
import { checkChoice } from "@/lib/scoring";
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
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (choice !== null) onAnswer(checkChoice(item.answer, choice));
      }}
    >
      <h3 className="mb-5 font-display text-2xl font-bold">{item.prompt}</h3>
      <OptionList
        name={item.id}
        options={item.options}
        value={choice}
        onChange={setChoice}
        disabled={locked}
        states={choiceStates(item.options, item.answer, choice, locked)}
      />
      {!locked && (
        <button type="submit" className="btn btn-primary mt-6" disabled={choice === null}>Kiểm tra</button>
      )}
    </form>
  );
}
