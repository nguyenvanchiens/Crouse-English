import type { Exercise, Lesson, SentenceMeaning } from "../types";
import * as a1 from "./a1";
import * as a2 from "./a2";
import * as b1 from "./b1";
import * as b2 from "./b2";
import * as c1 from "./c1";
import * as ipa from "./ipa";

/*
 * What each practice sentence means in Vietnamese, kept apart from the lessons: by exercise id, the full right
 * English sentence and its meaning; by vocabulary example sentence, its meaning. Server-side only (lesson
 * pages and game data read it at build time), so a page carries just the meanings it shows.
 */

const LEVELS = [a1, a2, b1, b2, c1, ipa];

const BY_ID = new Map<string, SentenceMeaning>(
  LEVELS.flatMap((l) => Object.entries(l.EXERCISES).map(([id, [en, vi]]) => [id, { en, vi }] as const)),
);
const BY_EXAMPLE = new Map<string, string>(LEVELS.flatMap((l) => Object.entries(l.EXAMPLES)));

export const exerciseMeaning = (id: string): SentenceMeaning | undefined => BY_ID.get(id);
export const exampleMeaning = (sentence: string): string | undefined => BY_EXAMPLE.get(sentence);

const withMeaning = (x: Exercise): Exercise => {
  const m = BY_ID.get(x.id);
  return m ? { ...x, meaning: m } : x;
};

/** The lesson with each exercise and question carrying its meaning, for the lesson page. */
export function lessonWithMeanings(lesson: Lesson): Lesson {
  return {
    ...lesson,
    steps: lesson.steps.map((s) =>
      s.type === "exercise"
        ? { ...s, items: s.items.map(withMeaning) }
        : (s.type === "reading" || s.type === "dialogue") && s.questions
          ? { ...s, questions: s.questions.map(withMeaning) }
          : s,
    ),
  };
}
