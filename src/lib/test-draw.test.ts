import { describe, expect, it } from "vitest";
import { correct, fill, mc, reorder, listenQ } from "@/content/builders";
import type { Exercise, PlacementQuestion } from "@/content/types";
import { applyOrder, drawFinal, drawPlacement, freshFirst, parseSeen, remember, resolveDrawn, shuffled } from "./test-draw";

/** a small deterministic generator, so the tests do not depend on luck */
function seeded(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 2 ** 32;
  };
}

const chapterItems = (c: number): Exercise[] =>
  [0, 1, 2].flatMap((k) => [
    mc(`c${c}-mc${k}`, `q${c}${k}`, ["a", "b", "c", "d"], k % 4),
    fill(`c${c}-fill${k}`, `x ___ y ${c}${k}`, ["z"]),
    reorder(`c${c}-ro${k}`, `one two three ${c}${k}`),
    listenQ(`c${c}-li${k}`, "hỏi", `audio ${c}${k}`, ["m", "n", "o"], 1),
    correct(`c${c}-co${k}`, `wrong ${c}${k}`, `right ${c}${k}`),
  ]);
const bank = [1, 2, 3, 4].flatMap(chapterItems); // 15 per chapter

describe("shuffled / freshFirst", () => {
  it("keeps every element", () => {
    expect(shuffled([1, 2, 3, 4, 5], seeded(1)).sort()).toEqual([1, 2, 3, 4, 5]);
  });
  it("puts unseen items first and the longest-ago seen before the recently seen", () => {
    const pool = ["a", "b", "c", "d"].map((id) => ({ id }));
    const out = freshFirst(pool, ["c", "a"], seeded(2)).map((x) => x.id);
    expect(new Set(out.slice(0, 2))).toEqual(new Set(["b", "d"]));
    expect(out.slice(2)).toEqual(["c", "a"]);
  });
});

describe("drawFinal", () => {
  it("takes 5 items from each chapter's own slice, all five kinds, with valid option orders", () => {
    const d = drawFinal(bank, 4, 5, [], seeded(3));
    expect(d).toHaveLength(20);
    const items = resolveDrawn(bank, d)!;
    for (let c = 1; c <= 4; c++) {
      const mine = items.filter((x) => x.id.startsWith(`c${c}-`));
      expect(mine).toHaveLength(5);
      expect(new Set(mine.map((x) => x.kind)).size).toBe(5);
    }
    for (const x of d) {
      const original = bank.find((b) => b.id === x.id)!;
      if ("options" in original) expect([...x.order!].sort()).toEqual(original.options.map((_, i) => i));
      else expect(x.order).toBeUndefined();
    }
  });
  it("gives three attempts in a row with no item repeated", () => {
    let seen: string[] = [];
    const all: string[] = [];
    for (let i = 0; i < 3; i++) {
      const ids = drawFinal(bank, 4, 5, seen, seeded(10 + i)).map((x) => x.id);
      all.push(...ids);
      seen = remember(seen, ids);
    }
    expect(new Set(all).size).toBe(60);
  });
  it("then reuses the items met longest ago first", () => {
    let seen: string[] = [];
    const first = drawFinal(bank, 4, 5, seen, seeded(20)).map((x) => x.id);
    seen = remember(seen, first);
    for (let i = 0; i < 2; i++) seen = remember(seen, drawFinal(bank, 4, 5, seen, seeded(21 + i)).map((x) => x.id));
    const fourth = drawFinal(bank, 4, 5, seen, seeded(30)).map((x) => x.id);
    expect(new Set(fourth)).toEqual(new Set(first));
  });
  it("draws from one pool when the bank is not whole chapters", () => {
    expect(drawFinal(bank.slice(0, 7), 4, 5, [], seeded(4))).toHaveLength(7);
  });
});

describe("option order", () => {
  it("moves the answer index with its option", () => {
    const item = mc("x", "q", ["right", "w1", "w2", "w3"], 0);
    const out = applyOrder(item, [2, 0, 3, 1]);
    expect(out.options).toEqual(["w2", "right", "w3", "w1"]);
    expect(out.options[out.answer]).toBe("right");
  });
  it("spreads the answer over every position across many shuffles", () => {
    const item = mc("x", "q", ["a", "b", "c", "d"], 1);
    const rng = seeded(5);
    const at = new Set<number>();
    for (let i = 0; i < 40; i++) {
      const d = drawFinal([item], 1, 1, [], rng)[0];
      at.add(applyOrder(item, d.order).answer);
    }
    expect(at).toEqual(new Set([0, 1, 2, 3]));
  });
  it("refuses a saved draw that no longer fits the bank", () => {
    expect(resolveDrawn(bank, [{ id: "gone" }])).toBeNull();
    expect(resolveDrawn(bank, [{ id: "c1-mc0", order: [0, 1] }])).toBeNull();
    expect(resolveDrawn(bank, [{ id: "c1-mc0", order: [0, 0, 1, 2] }])).toBeNull();
    expect(resolveDrawn(bank, [{ id: "c1-fill0" }])).toHaveLength(1);
  });
});

describe("drawPlacement", () => {
  const q = (id: string, level: string, skill: PlacementQuestion["skill"]): PlacementQuestion => ({
    id, level: level as PlacementQuestion["level"], skill, prompt: id, options: ["a", "b", "c"], answer: 0,
  });
  const levels = ["A1", "A2"];
  const pbank = levels.flatMap((l) => [
    ...Array.from({ length: 9 }, (_, i) => q(`${l}g${i}`, l, "grammar")),
    ...Array.from({ length: 9 }, (_, i) => q(`${l}v${i}`, l, "vocab")),
    ...Array.from({ length: 3 }, (_, i) => q(`${l}l${i}`, l, "listening")),
    ...Array.from({ length: 3 }, (_, i) => q(`${l}r${i}`, l, "reading")),
  ]);
  it("keeps the skill mix per level and the level order", () => {
    const items = resolveDrawn(pbank, drawPlacement(pbank, levels, [], seeded(6)))!;
    expect(items.map((x) => x.level)).toEqual([...Array(8).fill("A1"), ...Array(8).fill("A2")]);
    for (const l of levels) {
      const mine = items.filter((x) => x.level === l);
      expect(mine.filter((x) => x.skill === "grammar")).toHaveLength(3);
      expect(mine.filter((x) => x.skill === "vocab")).toHaveLength(3);
      expect(mine.filter((x) => x.skill === "listening")).toHaveLength(1);
      expect(mine.filter((x) => x.skill === "reading")).toHaveLength(1);
    }
  });
  it("gives three attempts in a row with no question repeated", () => {
    let seen: string[] = [];
    const all: string[] = [];
    for (let i = 0; i < 3; i++) {
      const ids = drawPlacement(pbank, levels, seen, seeded(40 + i)).map((x) => x.id);
      all.push(...ids);
      seen = remember(seen, ids);
    }
    expect(new Set(all).size).toBe(48);
  });
});

describe("seen store helpers", () => {
  it("moves re-met ids to the end and caps the list", () => {
    expect(remember(["a", "b", "c"], ["a", "d"])).toEqual(["b", "c", "a", "d"]);
    expect(remember(["a", "b"], ["c"], 2)).toEqual(["b", "c"]);
  });
  it("parses robustly", () => {
    expect(parseSeen(JSON.stringify({ placement: ["p1", 2], x: "no" }))).toEqual({ placement: ["p1"] });
    expect(parseSeen("nope")).toEqual({});
    expect(parseSeen(null)).toEqual({});
  });
});
