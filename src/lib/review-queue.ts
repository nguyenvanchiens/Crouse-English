import type { VocabWord } from "@/content/types";
import { customWordKey, isDue, type CustomWord, type ProgressState } from "./progress-core";

export interface ReviewWord {
  /** vocabKey(course, word), or customWordKey(word) for the learner's own words */
  key: string;
  /**
   * where it comes from: a lesson (reviewed once the lesson is done), a word-bank topic (once added)
   * or the learner's own list (always)
   */
  source: { lesson: string } | { topic: string } | { custom: true };
  course: string;
  word: VocabWord;
}

/** At most this many never-seen words join a day's session, so a finished course doesn't flood it. */
export const NEW_PER_DAY = 15;
export const SESSION_MAX = 30;

/** Shown where a course name would be, for the learner's own words. */
export const CUSTOM_LABEL = "Từ của tôi";

/** A review card for one of the learner's own words: one chunk, no stress mark. */
export function customReviewWord(c: CustomWord): ReviewWord {
  return {
    key: customWordKey(c.word),
    source: { custom: true },
    course: CUSTOM_LABEL,
    word: { word: c.word, ipa: c.ipa, meaning: c.meaning, example: c.example, syllables: [c.word], stress: 0 },
  };
}

/** Takes from both lists in turn, keeping each list's order. */
function interleave<T>(a: T[], b: T[]): T[] {
  const out: T[] = [];
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if (i < a.length) out.push(a[i]);
    if (i < b.length) out.push(b[i]);
  }
  return out;
}

export interface ReviewPlan {
  /** every word the learner has met: from done lessons, added topics and their own list */
  learned: ReviewWord[];
  /** words already in the box whose day has come */
  dueOld: ReviewWord[];
  /** words never reviewed yet; course and own words take turns so neither starves the other */
  fresh: ReviewWord[];
  /** today's session: every due word first, then at most NEW_PER_DAY fresh ones, capped at SESSION_MAX */
  queue: ReviewWord[];
}

export function buildReviewPlan(words: ReviewWord[], state: ProgressState, today: string): ReviewPlan {
  const courseLearned = words.filter((w) =>
    "lesson" in w.source ? state.lessons[w.source.lesson]?.done : "topic" in w.source ? state.topics.includes(w.source.topic) : true,
  );
  const own = state.custom.map(customReviewWord);
  const learned = [...courseLearned, ...own];
  const dueOld = learned.filter((w) => state.srs[w.key] && isDue(state.srs[w.key], today));
  const unseen = (w: ReviewWord) => !state.srs[w.key];
  const fresh = interleave(courseLearned.filter(unseen), own.filter(unseen));
  const queue = [...dueOld, ...fresh.slice(0, NEW_PER_DAY)].slice(0, SESSION_MAX);
  return { learned, dueOld, fresh, queue };
}
