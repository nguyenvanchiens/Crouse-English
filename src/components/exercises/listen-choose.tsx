"use client";

import { useState } from "react";
import { Snail, Volume2 } from "lucide-react";
import type { ListenChooseExercise } from "@/content/types";
import { checkChoice } from "@/lib/scoring";
import { speak, useSpeechSupport } from "@/lib/speech";
import { OptionList } from "@/components/ui/option-list";
import { choiceStates } from "./multiple-choice";

export function ListenChoose({
  item,
  locked,
  onAnswer,
}: {
  item: ListenChooseExercise;
  locked: boolean;
  onAnswer: (correct: boolean) => void;
}) {
  const [choice, setChoice] = useState<number | null>(null);
  const { tts } = useSpeechSupport();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (choice !== null) onAnswer(checkChoice(item.answer, choice));
      }}
    >
      <h3 className="font-display text-2xl font-bold">Nghe và chọn đáp án đúng</h3>
      <div className="mb-5 mt-4 flex flex-wrap gap-3">
        <button type="button" className="btn btn-primary" onClick={() => speak(item.audioText)} disabled={!tts}>
          <Volume2 className="size-5" aria-hidden />
          Nghe
        </button>
        <button type="button" className="btn btn-ghost" onClick={() => speak(item.audioText, { rate: 0.5 })} disabled={!tts}>
          <Snail className="size-5" aria-hidden />
          Nghe chậm
        </button>
      </div>
      {(!tts || locked) && (
        <p className="mb-5 rounded-2xl bg-sky px-4 py-3">
          {tts ? "Câu vừa nghe: " : "Trình duyệt không đọc to được. Câu gốc: "}
          <strong>{item.audioText}</strong>
        </p>
      )}
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
