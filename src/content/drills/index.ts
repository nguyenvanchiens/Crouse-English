import { SENTENCE_DRILLS, type SentenceDrill } from "../my-plan";
import { DRILLS_A1_A2 } from "./a1-a2";
import { DRILLS_B1 } from "./b1";
import { DRILLS_B2_C1 } from "./b2-c1";

const ORDER: SentenceDrill["level"][] = ["A1", "A2", "B1", "B2", "C1"];

/**
 * Every sentence-splitting drill, easiest level first. The plan runs them as a daily stream from the base
 * stage to C1, never asking for a drill above the level being studied.
 */
export const ALL_DRILLS: SentenceDrill[] = [...DRILLS_A1_A2, ...SENTENCE_DRILLS, ...DRILLS_B1, ...DRILLS_B2_C1].sort((a, b) => ORDER.indexOf(a.level) - ORDER.indexOf(b.level));

export const drillLevelIndex = (l: SentenceDrill["level"]) => ORDER.indexOf(l);
