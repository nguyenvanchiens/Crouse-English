import { describe, expect, it } from "vitest";
import type { PlacementQuestion } from "@/content/types";
import { PLACEMENT_QUESTIONS } from "@/content/placement";
import { PLACEMENT_LEVELS, scorePlacement } from "./placement";

const q = (id: string, level: PlacementQuestion["level"]): PlacementQuestion => ({
  id, level, skill: "grammar", prompt: id, options: ["a", "b"], answer: 0,
});
const questions = [
  q("a1", "A1"), q("a2", "A1"),
  q("b1", "A2"), q("b2", "A2"),
  q("c1", "B1"), q("c2", "B1"),
  q("d1", "B2"), q("d2", "B2"),
  q("e1", "C1"), q("e2", "C1"),
];
const answer = (ids: string[]) => Object.fromEntries(questions.map((x) => [x.id, ids.includes(x.id) ? 0 : 1]));

describe("scorePlacement", () => {
  it("falls back to A1 when nothing is right", () => {
    const r = scorePlacement(questions, {});
    expect(r).toMatchObject({ level: "A1", startLevel: "A1", score: 0, mastered: false });
  });
  it("picks the highest level passed with every lower level passed (>= 60%)", () => {
    const r = scorePlacement(questions, answer(["a1", "a2", "b1", "b2", "c1", "c2", "d1"]));
    expect(r.level).toBe("B1"); // B2 is 1/2 = 50%
    expect(r.startLevel).toBe("B2");
    expect(r.perLevel.B2).toEqual({ correct: 1, total: 2 });
  });
  it("does not skip a failed lower level", () => {
    const r = scorePlacement(questions, answer(["a1", "a2", "c1", "c2", "d1", "d2"]));
    expect(r.level).toBe("A1");
    expect(r.startLevel).toBe("A2");
  });
  it("starts at C1 after passing B2", () => {
    const r = scorePlacement(questions, answer(["a1", "a2", "b1", "b2", "c1", "c2", "d1", "d2"]));
    expect(r).toMatchObject({ level: "B2", startLevel: "C1", mastered: false });
  });
  it("reports C1 mastered when everything is right", () => {
    const r = scorePlacement(questions, answer(questions.map((x) => x.id)));
    expect(r).toMatchObject({ level: "C1", startLevel: "C1", score: 100, mastered: true });
  });
});

describe("PLACEMENT_QUESTIONS", () => {
  it("has 8 questions per level from A1 to C1, unique ids, valid answers", () => {
    expect(PLACEMENT_QUESTIONS).toHaveLength(8 * PLACEMENT_LEVELS.length);
    for (const level of PLACEMENT_LEVELS) {
      const mine = PLACEMENT_QUESTIONS.filter((x) => x.level === level);
      expect(mine, level).toHaveLength(8);
      expect(mine.some((x) => x.skill === "listening"), `${level} listening`).toBe(true);
      expect(mine.some((x) => x.skill === "reading"), `${level} reading`).toBe(true);
    }
    expect(new Set(PLACEMENT_QUESTIONS.map((x) => x.id)).size).toBe(PLACEMENT_QUESTIONS.length);
    for (const x of PLACEMENT_QUESTIONS) {
      expect(x.answer).toBeGreaterThanOrEqual(0);
      expect(x.answer).toBeLessThan(x.options.length);
      expect(new Set(x.options).size, `${x.id} duplicate options`).toBe(x.options.length);
      if (x.skill === "listening") expect(x.audioText).toBeTruthy();
      if (x.skill === "reading") expect(x.passage).toBeTruthy();
    }
  });
});
