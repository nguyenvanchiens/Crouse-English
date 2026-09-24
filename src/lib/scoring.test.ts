import { describe, expect, it } from "vitest";
import {
  checkChoice,
  checkFillBlank,
  checkReorder,
  correctAnswerText,
  matchSpeech,
  normalize,
  percentScore,
  shuffleAvoidingAnswer,
} from "./scoring";

describe("normalize", () => {
  it("lowercases, trims, collapses spaces and strips punctuation", () => {
    expect(normalize("  Nice to   MEET you! ")).toBe("nice to meet you");
  });
  it("keeps apostrophes and unifies curly ones", () => {
    expect(normalize("I’m six o'clock.")).toBe("i'm six o'clock");
  });
});

describe("checkChoice", () => {
  it("matches the answer index", () => {
    expect(checkChoice(1, 1)).toBe(true);
    expect(checkChoice(1, 0)).toBe(false);
    expect(checkChoice(1, null)).toBe(false);
  });
});

describe("checkFillBlank", () => {
  it("accepts any listed answer ignoring case, spaces and punctuation", () => {
    expect(checkFillBlank(["meet"], " Meet. ")).toBe(true);
    expect(checkFillBlank(["meet"], "MEET")).toBe(true);
    expect(checkFillBlank(["next to", "near"], "near")).toBe(true);
    expect(checkFillBlank(["next to"], "next   to")).toBe(true);
  });
  it("rejects wrong and empty input", () => {
    expect(checkFillBlank(["meet"], "see")).toBe(false);
    expect(checkFillBlank(["meet"], "   ")).toBe(false);
    expect(checkFillBlank([""], "")).toBe(false);
  });
});

describe("checkReorder", () => {
  it("requires the exact word sequence", () => {
    expect(checkReorder(["I", "am", "a", "student"], ["I", "am", "a", "student"])).toBe(true);
    expect(checkReorder(["I", "am", "a", "student"], ["am", "I", "a", "student"])).toBe(false);
    expect(checkReorder(["I", "am"], ["I"])).toBe(false);
  });
  it("accepts either copy of a duplicated word", () => {
    const words = ["the", "cat", "and", "the", "dog"];
    expect(checkReorder(words, ["the", "cat", "and", "the", "dog"])).toBe(true);
  });
});

describe("shuffleAvoidingAnswer", () => {
  it("returns a permutation of indices", () => {
    const order = shuffleAvoidingAnswer(["a", "b", "c", "d"]);
    expect([...order].sort()).toEqual([0, 1, 2, 3]);
  });
  it("never yields the original word sequence when avoidable", () => {
    const identityRng = () => 0.999999; // Fisher-Yates with this rng keeps order
    const words = ["the", "cat", "and", "the", "dog"];
    for (let k = 0; k < 20; k++) {
      const order = shuffleAvoidingAnswer(words, k === 0 ? identityRng : Math.random);
      expect(order.map((i) => words[i])).not.toEqual(words);
    }
  });
  it("leaves single-item and all-equal lists alone", () => {
    expect(shuffleAvoidingAnswer(["hi"])).toEqual([0]);
    expect(shuffleAvoidingAnswer(["a", "a"]).length).toBe(2);
  });
});

describe("correctAnswerText", () => {
  it("renders the expected answer per kind", () => {
    expect(correctAnswerText({ kind: "multiple-choice", id: "x", prompt: "", options: ["a", "b"], answer: 1 })).toBe("b");
    expect(correctAnswerText({ kind: "listen-choose", id: "x", audioText: "", options: ["a", "b"], answer: 0 })).toBe("a");
    expect(correctAnswerText({ kind: "fill-blank", id: "x", prompt: "", answers: ["meet", "see"] })).toBe("meet");
    expect(correctAnswerText({ kind: "reorder", id: "x", prompt: "", words: ["See", "you", "later"] })).toBe("See you later");
  });
});

describe("matchSpeech", () => {
  it("marks every word when the sentence is repeated exactly", () => {
    const r = matchSpeech("Nice to meet you.", "nice to meet you");
    expect(r.percent).toBe(100);
    expect(r.words.map((w) => w.word)).toEqual(["Nice", "to", "meet", "you."]);
    expect(r.words.every((w) => w.matched)).toBe(true);
  });
  it("marks missing words and ignores extra ones", () => {
    const r = matchSpeech("Good morning, how are you?", "good morning um how you today");
    expect(r.words.map((w) => w.matched)).toEqual([true, true, true, false, true]);
    expect(r.percent).toBe(80);
  });
  it("treats digits 0-20 as their English words", () => {
    const r = matchSpeech("I usually get up at six o'clock.", "I usually get up at 6 o'clock");
    expect(r.percent).toBe(100);
  });
  it("returns 0 for empty input", () => {
    expect(matchSpeech("Hello", "").percent).toBe(0);
    expect(matchSpeech("", "hello")).toEqual({ words: [], percent: 0 });
  });
});

describe("percentScore", () => {
  it("rounds to an integer percent", () => {
    expect(percentScore(2, 3)).toBe(67);
    expect(percentScore(4, 4)).toBe(100);
  });
  it("is null when there is nothing to score", () => {
    expect(percentScore(0, 0)).toBeNull();
  });
});
