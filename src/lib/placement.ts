import type { Level, PlacementLevel, PlacementQuestion } from "@/content/types";
import { percentScore } from "./scoring";

export const PLACEMENT_LEVELS: PlacementLevel[] = ["A1", "A2", "B1", "B2", "C1"];

/** Course to start with after passing N levels; passing C1 as well still points at C1 (the last course). */
const START_LEVELS: Level[] = ["A1", "A2", "B1", "B2", "C1", "C1"];

/** Answer recorded when the learner presses "Tôi không biết" instead of guessing; it scores as wrong. */
export const DONT_KNOW = -1;

export interface PlacementResult {
  /** highest level passed (A1 also when nothing is passed) */
  level: PlacementLevel;
  /** the course level to start with: the one after the highest level passed */
  startLevel: Level;
  /** true when every level, C1 included, was passed */
  mastered: boolean;
  score: number;
  /** questions answered with "Tôi không biết" */
  dontKnow: number;
  perLevel: Record<PlacementLevel, { correct: number; total: number }>;
  /** lower levels failed but forgiven because the levels above them were passed: worth reviewing */
  gaps: PlacementLevel[];
}

export function scorePlacement(questions: PlacementQuestion[], answers: Record<string, number>): PlacementResult {
  const perLevel = Object.fromEntries(
    PLACEMENT_LEVELS.map((l) => [l, { correct: 0, total: 0 }]),
  ) as PlacementResult["perLevel"];
  let correct = 0;
  let dontKnow = 0;
  for (const q of questions) {
    perLevel[q.level].total++;
    if (answers[q.id] === DONT_KNOW) dontKnow++;
    if (answers[q.id] === q.answer) {
      perLevel[q.level].correct++;
      correct++;
    }
  }
  // With 8 items a level, one bad level can be a slip: a near miss (40% or more) is forgiven when the levels
  // above it are passed and the answers up to the placed level are still 60% right overall. A level far below
  // that, or two failed levels in a row, end the climb.
  let passed = 0;
  let failedInRow = 0;
  let upToC = 0;
  let upToT = 0;
  for (let i = 0; i < PLACEMENT_LEVELS.length; i++) {
    const { correct: c, total } = perLevel[PLACEMENT_LEVELS[i]];
    upToC += c;
    upToT += total;
    const rate = total > 0 ? c / total : 0;
    if (rate >= PASS) {
      failedInRow = 0;
      if (upToC / upToT >= PASS) passed = i + 1;
    } else if (rate < SLIP || ++failedInRow >= 2) break;
  }
  const level = PLACEMENT_LEVELS[Math.max(0, passed - 1)];
  const startLevel = START_LEVELS[passed];
  const gaps = PLACEMENT_LEVELS.slice(0, passed).filter((l) => {
    const { correct: c, total } = perLevel[l];
    return total > 0 && c / total < PASS;
  });
  return {
    level,
    startLevel,
    mastered: passed === PLACEMENT_LEVELS.length,
    score: percentScore(correct, questions.length) ?? 0,
    dontKnow,
    perLevel,
    gaps,
  };
}

const PASS = 0.6;
/** the least a failed level can score and still count as a slip */
const SLIP = 0.4;
