import type {
  DialogueLine,
  DialogueStep,
  ErrorCorrectionExercise,
  Exercise,
  FillBlankExercise,
  FreeSpeaking,
  LectureBlock,
  Lesson,
  ListenChooseExercise,
  MultipleChoiceExercise,
  ReadingStep,
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
/** "Kinh nghiệm của thầy cô": classroom-proven advice in the teacher's voice */
export const teacher = (body: string): LectureBlock => ({ kind: "teacher", body });
/** "Ghi nhớ": 3–6 key points that close the lecture */
export const summary = (...points: string[]): LectureBlock => ({ kind: "summary", points });

// ---- dialogue, reading, speaking and task ----
export const A = (en: string, vi: string): DialogueLine => ({ speaker: "A", en, vi });
export const B = (en: string, vi: string): DialogueLine => ({ speaker: "B", en, vi });
export function dialogue(title: string, context: string, roles: { A: string; B: string }, ...lines: DialogueLine[]): DialogueStep {
  return { type: "dialogue", title, context, roles, lines };
}
/** A reading text: `text` is split into paragraphs on blank lines. */
export function reading(o: {
  title: string;
  text: string;
  glossary: [word: string, meaning: string][];
  questions: Exercise[];
}): ReadingStep {
  return {
    type: "reading",
    title: o.title,
    paragraphs: o.text.split(/\n\s*\n/).map((x) => x.replace(/\s+/g, " ").trim()).filter(Boolean),
    glossary: o.glossary.map(([word, meaning]) => ({ word, meaning })),
    questions: o.questions,
  };
}
/** Open speaking prompt: an English question, what to say (Vietnamese) and a sample answer. */
export const free = (question: string, prompt: string, model: string): FreeSpeaking => ({ question, prompt, model });
export function task(o: { prompt: string; hints: string[]; model: string; checklist: string[]; minWords?: number }): TaskStep {
  return { type: "task", prompt: o.prompt, hints: o.hints, model: o.model, checklist: o.checklist, minWords: o.minWords ?? 20 };
}

/** A standard lesson: lecture → vocab → dialogue → reading → exercise → speaking → task. */
export function lesson(o: {
  slug: string;
  title: string;
  minutes: number;
  lecture: { title: string; blocks: LectureBlock[] };
  words: VocabWord[];
  exercises: Exercise[];
  speaking: { text: string; meaningVi: string }[];
  /** open speaking question after the repeat-after-me sentences */
  freeSpeaking?: FreeSpeaking;
  dialogue?: DialogueStep;
  /** comprehension questions on the dialogue */
  dialogueQuestions?: Exercise[];
  reading?: ReadingStep;
  task?: TaskStep;
}): Lesson {
  return {
    slug: o.slug,
    title: o.title,
    minutes: o.minutes,
    steps: [
      { type: "lecture", title: o.lecture.title, blocks: o.lecture.blocks },
      { type: "vocab", words: o.words },
      ...(o.dialogue ? [o.dialogueQuestions ? { ...o.dialogue, questions: o.dialogueQuestions } : o.dialogue] : []),
      ...(o.reading ? [o.reading] : []),
      { type: "exercise", items: o.exercises },
      { type: "speaking", sentences: o.speaking, ...(o.freeSpeaking ? { free: o.freeSpeaking } : {}) },
      ...(o.task ? [o.task] : []),
    ],
  };
}

/** `syllables` written as "com|for|ta|ble" */
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

/** Listening comprehension: hear `audioText`, then answer `question`. */
export function listenQ(
  id: string, question: string, audioText: string, options: string[], answer: number, explain?: string,
): ListenChooseExercise {
  return { kind: "listen-choose", id, question, audioText, options, answer, ...(explain ? { explain } : {}) };
}

/** Error correction: `wrong` has one typical mistake; `right` lists every accepted fix. */
export function correct(id: string, wrong: string, right: string | string[], explain?: string): ErrorCorrectionExercise {
  return { kind: "correct", id, wrong, answers: Array.isArray(right) ? right : [right], ...(explain ? { explain } : {}) };
}

export const say = (text: string, meaningVi: string) => ({ text, meaningVi });

/** Sample public video used until real lesson videos exist (YouTube IFrame API demo). */
export const SAMPLE_VIDEO_ID = "M7lc1UVf-VE";
