import type { Level, PlacementLevel, PlacementQuestion } from "@/content/types";
import { percentScore } from "./scoring";

export const PLACEMENT_LEVELS: PlacementLevel[] = ["A1", "A2", "B1", "B2"];

const START_LEVELS: Level[] = ["A1", "A2", "B1", "B2", "C1"];

export interface PlacementResult {
  /** highest level passed (A1 also when nothing is passed) */
  level: PlacementLevel;
  /** the course level to start with: the one after the highest level passed */
  startLevel: Level;
  score: number;
  perLevel: Record<PlacementLevel, { correct: number; total: number }>;
}

export function scorePlacement(questions: PlacementQuestion[], answers: Record<string, number>): PlacementResult {
  const perLevel = Object.fromEntries(
    PLACEMENT_LEVELS.map((l) => [l, { correct: 0, total: 0 }]),
  ) as PlacementResult["perLevel"];
  let correct = 0;
  for (const q of questions) {
    perLevel[q.level].total++;
    if (answers[q.id] === q.answer) {
      perLevel[q.level].correct++;
      correct++;
    }
  }
  let passed = 0;
  for (const l of PLACEMENT_LEVELS) {
    const { correct: c, total } = perLevel[l];
    if (total > 0 && c / total >= 0.6) passed++;
    else break;
  }
  const level = PLACEMENT_LEVELS[Math.max(0, passed - 1)];
  const startLevel = START_LEVELS[passed];
  return { level, startLevel, score: percentScore(correct, questions.length) ?? 0, perLevel };
}
