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
import type { Course } from "./types";

export const COURSES: Course[] = [
  ...[phatAmIpa, tiengAnhA1, tiengAnhA2, tiengAnhB1, tiengAnhB2, tiengAnhC1].map(withFinalTest),
  ielts,
  toeic,
  treEm,
];
