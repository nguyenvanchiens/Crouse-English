import type {
  FillBlankExercise,
  ListenChooseExercise,
  MultipleChoiceExercise,
  ReorderExercise,
  VocabWord,
} from "./types";

/** `syllables` written as "comf|ta|ble" */
export function word(
  w: string, ipa: string, meaning: string, example: string, syllables: string, stress: number, tip?: string,
): VocabWord {
  return { word: w, ipa, meaning, example, syllables: syllables.split("|"), stress, ...(tip ? { tip } : {}) };
}

export function mc(id: string, prompt: string, options: string[], answer: number, explain?: string): MultipleChoiceExercise {
  return { kind: "multiple-choice", id, prompt, options, answer, ...(explain ? { explain } : {}) };
}

export function fill(id: string, prompt: string, answers: string[], explain?: string): FillBlankExercise {
  return { kind: "fill-blank", id, prompt, answers, ...(explain ? { explain } : {}) };
}

export function reorder(id: string, sentence: string, explain?: string): ReorderExercise {
  return {
    kind: "reorder",
    id,
    prompt: "Sắp xếp các từ thành câu hoàn chỉnh",
    words: sentence.split(" "),
    ...(explain ? { explain } : {}),
  };
}

export function listen(id: string, audioText: string, options: string[], answer: number, explain?: string): ListenChooseExercise {
  return { kind: "listen-choose", id, audioText, options, answer, ...(explain ? { explain } : {}) };
}

export const say = (text: string, meaningVi: string) => ({ text, meaningVi });

/** Sample public video used until real lesson videos exist (YouTube IFrame API demo). */
export const SAMPLE_VIDEO_ID = "M7lc1UVf-VE";
