import { ielts } from "./courses/ielts";
import { phatAmIpa } from "./courses/phat-am-ipa";
import { tiengAnhA1 } from "./courses/tieng-anh-a1";
import { tiengAnhA2 } from "./courses/tieng-anh-a2";
import { tiengAnhB1 } from "./courses/tieng-anh-b1";
import { tiengAnhB2 } from "./courses/tieng-anh-b2";
import { tiengAnhC1 } from "./courses/tieng-anh-c1";
import { toeic } from "./courses/toeic";
import { treEm } from "./courses/tre-em";
import { withFinalTest } from "./review";
import { SELF_STUDY } from "./self-study";
import type { Course, WordTopic } from "./types";
import wordsA1 from "./wordbanks/a1";
import wordsA2 from "./wordbanks/a2";
import wordsB1 from "./wordbanks/b1";
import wordsB2 from "./wordbanks/b2";
import wordsC1 from "./wordbanks/c1";

const WORD_BANKS: Record<string, WordTopic[]> = {
  "tieng-anh-a1": wordsA1,
  "tieng-anh-a2": wordsA2,
  "tieng-anh-b1": wordsB1,
  "tieng-anh-b2": wordsB2,
  "tieng-anh-c1": wordsC1,
};

/** Adds the course's word bank and self-study plan, which live in their own files. */
const withExtras = (c: Course): Course => ({
  ...c,
  ...(WORD_BANKS[c.slug] ? { wordBank: WORD_BANKS[c.slug] } : {}),
  ...(SELF_STUDY[c.slug] ? { selfStudy: SELF_STUDY[c.slug] } : {}),
});

export const COURSES: Course[] = [
  ...[phatAmIpa, tiengAnhA1, tiengAnhA2, tiengAnhB1, tiengAnhB2, tiengAnhC1].map(withFinalTest).map(withExtras),
  ielts,
  toeic,
  treEm,
];
