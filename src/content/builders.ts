import type {
  DialogueLine,
  DialogueStep,
  Exercise,
  FillBlankExercise,
  LectureBlock,
  Lesson,
  ListenChooseExercise,
  MultipleChoiceExercise,
  ReorderExercise,
  TaskStep,
  VocabWord,
} from "./types";

// ---- lecture blocks ----
export const p = (body: string): LectureBlock => ({ kind: "text", body });
export const table = (headers: string[], ...rows: string[][]): LectureBlock => ({ kind: "table", headers, rows });
export const ex = (en: string, vi: string, note?: string): LectureBlock => ({ kind: "example", en, vi, ...(note ? { note } : {}) });
export const tip = (body: string): LectureBlock => ({ kind: "tip", body });
export const mistake = (wrong: string, right: string, why: string): LectureBlock => ({ kind: "mistake", wrong, right, why });
/** "Kinh nghiệm của thầy cô": classroom-proven advice in a veteran teacher's voice */
export const teacher = (body: string): LectureBlock => ({ kind: "teacher", body });
/** "Ghi nhớ": 3–5 key points that close the lecture */
export const summary = (...points: string[]): LectureBlock => ({ kind: "summary", points });

// ---- dialogue and task ----
export const A = (en: string, vi: string): DialogueLine => ({ speaker: "A", en, vi });
export const B = (en: string, vi: string): DialogueLine => ({ speaker: "B", en, vi });
export function dialogue(title: string, context: string, roles: { A: string; B: string }, ...lines: DialogueLine[]): DialogueStep {
  return { type: "dialogue", title, context, roles, lines };
}
export function task(o: { prompt: string; hints: string[]; model: string; checklist: string[]; minWords?: number }): TaskStep {
  return { type: "task", prompt: o.prompt, hints: o.hints, model: o.model, checklist: o.checklist, minWords: o.minWords ?? 20 };
}

/** A standard lesson: lecture → vocab → exercise → speaking. */
export function lesson(o: {
  slug: string;
  title: string;
  minutes: number;
  lecture: { title: string; blocks: LectureBlock[] };
  words: VocabWord[];
  exercises: Exercise[];
  speaking: { text: string; meaningVi: string }[];
  dialogue?: DialogueStep;
  task?: TaskStep;
}): Lesson {
  return {
    slug: o.slug,
    title: o.title,
    minutes: o.minutes,
    steps: [
      { type: "lecture", title: o.lecture.title, blocks: o.lecture.blocks },
      { type: "vocab", words: o.words },
      ...(o.dialogue ? [o.dialogue] : []),
      { type: "exercise", items: o.exercises },
      { type: "speaking", sentences: o.speaking },
      ...(o.task ? [o.task] : []),
    ],
  };
}

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
