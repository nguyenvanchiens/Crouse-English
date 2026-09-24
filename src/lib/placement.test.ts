import { describe, expect, it } from "vitest";
import type { PlacementQuestion } from "@/content/types";
import { PLACEMENT_QUESTIONS } from "@/content/placement";
import { scorePlacement } from "./placement";

const q = (id: string, level: PlacementQuestion["level"]): PlacementQuestion => ({
  id, level, skill: "grammar", prompt: id, options: ["a", "b"], answer: 0,
});
const questions = [
  q("a1", "A1"), q("a2", "A1"),
  q("b1", "A2"), q("b2", "A2"),
  q("c1", "B1"), q("c2", "B1"),
  q("d1", "B2"), q("d2", "B2"),
];
const answer = (ids: string[]) => Object.fromEntries(questions.map((x) => [x.id, ids.includes(x.id) ? 0 : 1]));

describe("scorePlacement", () => {
  it("falls back to A1 when nothing is right", () => {
    const r = scorePlacement(questions, {});
    expect(r.level).toBe("A1");
    expect(r.startLevel).toBe("A1");
    expect(r.score).toBe(0);
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
  it("reports B2 when everything is right", () => {
    const r = scorePlacement(questions, answer(questions.map((x) => x.id)));
    expect(r).toMatchObject({ level: "B2", startLevel: "C1", score: 100 });
  });
});

describe("PLACEMENT_QUESTIONS", () => {
  it("has 5 questions per level, unique ids, valid answers, audio for listening", () => {
    expect(PLACEMENT_QUESTIONS).toHaveLength(20);
    for (const level of ["A1", "A2", "B1", "B2"]) {
      expect(PLACEMENT_QUESTIONS.filter((x) => x.level === level)).toHaveLength(5);
    }
    expect(new Set(PLACEMENT_QUESTIONS.map((x) => x.id)).size).toBe(20);
    for (const x of PLACEMENT_QUESTIONS) {
      expect(x.answer).toBeGreaterThanOrEqual(0);
      expect(x.answer).toBeLessThan(x.options.length);
      if (x.skill === "listening") expect(x.audioText).toBeTruthy();
    }
  });
});
