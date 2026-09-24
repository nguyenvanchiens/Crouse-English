import type { PlacementLevel, PlacementQuestion } from "@/content/types";
import { percentScore } from "./scoring";

export const PLACEMENT_LEVELS: PlacementLevel[] = ["A1", "A2", "B1", "B2"];

export interface PlacementResult {
  level: PlacementLevel;
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
  let level: PlacementLevel = "A1";
  for (const l of PLACEMENT_LEVELS) {
    const { correct: c, total } = perLevel[l];
    if (total > 0 && c / total >= 0.6) level = l;
    else break;
  }
  return { level, score: percentScore(correct, questions.length) ?? 0, perLevel };
}
