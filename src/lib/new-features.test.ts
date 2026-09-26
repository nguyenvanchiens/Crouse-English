import { describe, expect, it } from "vitest";
import { parseDraft } from "./lesson-draft";
import { applyReviewWord, applyToggleTopic, emptyState, isDue, parseState, SRS_INTERVALS, topicKey, vocabKey } from "./progress-core";
import { checkCorrection } from "./scoring";

describe("checkCorrection", () => {
  it("accepts a listed correction, ignoring case, punctuation and contractions", () => {
    const answers = ["She doesn't like coffee."];
    expect(checkCorrection(answers, "she doesn't like coffee")).toBe(true);
    expect(checkCorrection(answers, "She does not like coffee!")).toBe(true);
    expect(checkCorrection(answers, "She don't like coffee.")).toBe(false);
    expect(checkCorrection(answers, "   ")).toBe(false);
  });
  it("spells out I'm, 're, 've, 'll, won't and can't", () => {
    expect(checkCorrection(["I'm sure they'll come."], "I am sure they will come.")).toBe(true);
    expect(checkCorrection(["We can't go."], "We cannot go.")).toBe(true);
    expect(checkCorrection(["It won't rain."], "It will not rain.")).toBe(true);
  });
});

describe("vocabulary spaced repetition", () => {
  const now = new Date(2026, 8, 26, 10);
  const key = vocabKey("tieng-anh-a1", "Hello");

  it("moves a remembered card up a box and schedules it by that box", () => {
    let s = applyReviewWord(emptyState(), key, true, now);
    expect(s.srs[key]).toEqual({ box: 1, due: "2026-09-27" });
    s = applyReviewWord(s, key, true, now);
    expect(s.srs[key]).toEqual({ box: 2, due: "2026-09-28" });
    expect(s.streak.current).toBe(1);
  });
  it("sends a missed card back to box 0, due tomorrow", () => {
    const s = applyReviewWord(applyReviewWord(emptyState(), key, true, now), key, false, now);
    expect(s.srs[key]).toEqual({ box: 0, due: "2026-09-27" });
  });
  it("caps the box at the longest interval", () => {
    let s = emptyState();
    for (let i = 0; i < SRS_INTERVALS.length + 3; i++) s = applyReviewWord(s, key, true, now);
    expect(s.srs[key].box).toBe(SRS_INTERVALS.length);
    expect(s.srs[key].due).toBe("2026-10-26");
  });
  it("treats unseen cards as due and seen ones by date", () => {
    expect(isDue(undefined, "2026-09-26")).toBe(true);
    expect(isDue({ box: 1, due: "2026-09-26" }, "2026-09-26")).toBe(true);
    expect(isDue({ box: 1, due: "2026-09-27" }, "2026-09-26")).toBe(false);
  });
  it("keeps valid cards and drops malformed ones when parsing", () => {
    const raw = JSON.stringify({ ...emptyState(), srs: { a: { box: 2, due: "2026-10-01" }, b: { box: -1, due: "x" } } });
    expect(parseState(raw).srs).toEqual({ a: { box: 2, due: "2026-10-01" } });
    expect(parseState(JSON.stringify({ ...emptyState(), srs: undefined })).srs).toEqual({});
  });
});

describe("renamed lessons", () => {
  it("carries progress from an old lesson slug to the new one", () => {
    const rec = { done: true, score: 80, completedAt: "2026-09-01T00:00:00.000Z" };
    const raw = JSON.stringify({ ...emptyState(), lessons: { "tieng-anh-b1/bi-dong-nang-cao": rec } });
    expect(parseState(raw).lessons).toEqual({ "tieng-anh-b1/bi-dong-moi-thi": rec });
  });
});

describe("parseDraft", () => {
  const draft = { stepIndex: 2, completed: [true, true, false], results: { 1: { correct: 3, total: 4 } }, exerciseProgress: {}, taskProgress: {} };
  it("restores a draft that fits the lesson", () => {
    expect(parseDraft(JSON.stringify(draft), 3)).toEqual(draft);
  });
  it("ignores drafts from a lesson whose steps changed, and garbage", () => {
    expect(parseDraft(JSON.stringify(draft), 4)).toBeNull();
    expect(parseDraft(JSON.stringify({ ...draft, stepIndex: 5 }), 3)).toBeNull();
    expect(parseDraft("{nope", 3)).toBeNull();
    expect(parseDraft(null, 3)).toBeNull();
  });
});

describe("word-bank topics", () => {
  it("adds and removes a topic, and survives parsing", () => {
    const k = topicKey("tieng-anh-a1", "food");
    const on = applyToggleTopic(emptyState(), k);
    expect(on.topics).toEqual([k]);
    expect(parseState(JSON.stringify(on)).topics).toEqual([k]);
    expect(applyToggleTopic(on, k).topics).toEqual([]);
    expect(parseState(JSON.stringify({ ...emptyState(), topics: [k, k, 3] })).topics).toEqual([k]);
  });
});
