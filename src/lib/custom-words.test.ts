import { describe, expect, it } from "vitest";
import {
  CUSTOM_LIMITS,
  applyAddCustomWord,
  applyRemoveCustomWord,
  applyReviewWord,
  checkCustomWord,
  customWordKey,
  emptyState,
  parseState,
  vocabKey,
  type ProgressState,
} from "./progress-core";
import { NEW_PER_DAY, SESSION_MAX, buildReviewPlan, type ReviewWord } from "./review-queue";

const now = new Date(2026, 9, 4, 9);
const at = (n: number) => new Date(2026, 9, 4, 9, n);
const add = (s: ProgressState, word: string, meaning = "nghĩa", n = 0) => applyAddCustomWord(s, { word, meaning }, at(n));

describe("own words: parse", () => {
  it("defaults to an empty list, also for old saves without the field", () => {
    expect(emptyState().custom).toEqual([]);
    expect(parseState(JSON.stringify({ version: 1 })).custom).toEqual([]);
    expect(parseState(JSON.stringify({ version: 1, custom: "x" })).custom).toEqual([]);
  });

  it("drops invalid entries, trims, dedupes ignoring case and caps lengths", () => {
    const ok = now.toISOString();
    const s = parseState(
      JSON.stringify({
        version: 1,
        custom: [
          { word: "  take   off ", meaning: " cất cánh ", example: "The plane took off.", ipa: 5, addedAt: ok },
          { word: "Take Off", meaning: "trùng", addedAt: ok },
          { word: "", meaning: "rỗng", addedAt: ok },
          { word: "ghost", meaning: "   ", addedAt: ok },
          { word: "no-date", meaning: "x" },
          { word: "bad-date", meaning: "x", addedAt: "hôm qua" },
          "string",
          null,
          { word: "x".repeat(500), meaning: "y".repeat(500), example: "z".repeat(500), addedAt: ok },
        ],
      }),
    );
    expect(s.custom.map((c) => c.word)).toEqual(["take off", "x".repeat(CUSTOM_LIMITS.word)]);
    expect(s.custom[0]).toEqual({ word: "take off", meaning: "cất cánh", example: "The plane took off.", ipa: "", addedAt: ok });
    expect(s.custom[1].meaning).toHaveLength(CUSTOM_LIMITS.meaning);
    expect(s.custom[1].example).toHaveLength(CUSTOM_LIMITS.example);
  });

  it("keeps at most CUSTOM_LIMITS.count words", () => {
    const custom = Array.from({ length: CUSTOM_LIMITS.count + 10 }, (_, i) => ({ word: `w${i}`, meaning: "m", addedAt: now.toISOString() }));
    expect(parseState(JSON.stringify({ version: 1, custom })).custom).toHaveLength(CUSTOM_LIMITS.count);
  });

  it("survives a round trip", () => {
    const s = applyAddCustomWord(emptyState(), { word: "ubiquitous", meaning: "phổ biến khắp nơi", example: "Phones are ubiquitous.", ipa: "/juːˈbɪkwɪtəs/" }, now);
    expect(parseState(JSON.stringify(s))).toEqual(s);
  });
});

describe("own words: add and remove", () => {
  it("rejects an empty word or meaning and leaves the state alone", () => {
    const s = emptyState();
    expect(checkCustomWord(s, { word: "  ", meaning: "x" })).toBe("word");
    expect(checkCustomWord(s, { word: "cat", meaning: " " })).toBe("meaning");
    expect(applyAddCustomWord(s, { word: "  ", meaning: "x" }, now)).toBe(s);
    expect(applyAddCustomWord(s, { word: "cat", meaning: "" }, now)).toBe(s);
  });

  it("appends in order, cleans fields and stamps addedAt", () => {
    const s = applyAddCustomWord(add(emptyState(), "first", "một", 1), { word: " second  word ", meaning: " hai ", ipa: " /x/ " }, at(2));
    expect(s.custom).toEqual([
      { word: "first", meaning: "một", example: "", ipa: "", addedAt: at(1).toISOString() },
      { word: "second word", meaning: "hai", example: "", ipa: "/x/", addedAt: at(2).toISOString() },
    ]);
  });

  it("replaces a word already in the list in place, keeping its place, date and review card", () => {
    let s = add(add(emptyState(), "Cat", "mèo", 1), "dog", "chó", 2);
    s = applyReviewWord(s, customWordKey("cat"), true, now);
    const card = s.srs[customWordKey("cat")];
    s = add(s, "  cat ", "con mèo", 5);
    expect(s.custom.map((c) => [c.word, c.meaning])).toEqual([["cat", "con mèo"], ["dog", "chó"]]);
    expect(s.custom[0].addedAt).toBe(at(1).toISOString());
    expect(s.srs[customWordKey("cat")]).toEqual(card);
  });

  it("keeps the saved example and IPA when an update leaves them blank", () => {
    let s = applyAddCustomWord(emptyState(), { word: "cat", meaning: "mèo", example: "A cat.", ipa: "/kæt/" }, now);
    s = applyAddCustomWord(s, { word: "cat", meaning: "con mèo", example: " ", ipa: "" }, now);
    expect(s.custom[0]).toMatchObject({ meaning: "con mèo", example: "A cat.", ipa: "/kæt/" });
    s = applyAddCustomWord(s, { word: "cat", meaning: "con mèo", example: "The cat sleeps." }, now);
    expect(s.custom[0].example).toBe("The cat sleeps.");
  });

  it("refuses a new word once the list is full, but still allows updates", () => {
    let s = emptyState();
    s = { ...s, custom: Array.from({ length: CUSTOM_LIMITS.count }, (_, i) => ({ word: `w${i}`, meaning: "m", example: "", ipa: "", addedAt: now.toISOString() })) };
    expect(checkCustomWord(s, { word: "extra", meaning: "m" })).toBe("full");
    expect(add(s, "extra")).toBe(s);
    expect(checkCustomWord(s, { word: "W3", meaning: "mới" })).toBeNull();
    expect(add(s, "W3", "mới").custom[3].meaning).toBe("mới");
  });

  it("keys own words under tu-cua-toi with vocabKey's lower-casing", () => {
    expect(customWordKey("  Take   OFF ")).toBe(vocabKey("tu-cua-toi", "take off"));
  });

  it("removes the word and its review card, ignoring case", () => {
    let s = add(add(emptyState(), "cat"), "dog");
    s = applyReviewWord(s, customWordKey("cat"), true, now);
    s = applyReviewWord(s, "khoa/cat", true, now);
    const r = applyRemoveCustomWord(s, "CAT");
    expect(r.custom.map((c) => c.word)).toEqual(["dog"]);
    expect(r.srs[customWordKey("cat")]).toBeUndefined();
    expect(r.srs["khoa/cat"]).toBeDefined();
    expect(applyRemoveCustomWord(r, "missing")).toBe(r);
  });
});

describe("own words in the review queue", () => {
  const today = "2026-10-04";
  const courseWord = (i: number): ReviewWord => ({
    key: `khoa/c${i}`,
    source: { lesson: "khoa/bai" },
    course: "Khóa",
    word: { word: `c${i}`, ipa: "", meaning: "", example: "", syllables: [`c${i}`], stress: 0 },
  });
  const done = (s: ProgressState): ProgressState => ({ ...s, lessons: { "khoa/bai": { done: true, score: null, completedAt: now.toISOString() } } });

  it("counts own words as learned, never-seen ones as fresh in the order added", () => {
    const s = add(add(emptyState(), "beta", "b", 1), "alpha", "a", 2);
    const plan = buildReviewPlan([courseWord(1)], s, today);
    expect(plan.learned.map((w) => w.word.word)).toEqual(["beta", "alpha"]); // the lesson is not done yet
    expect(plan.queue.map((w) => w.key)).toEqual([customWordKey("beta"), customWordKey("alpha")]);
    expect(plan.queue[0]).toMatchObject({ source: { custom: true }, course: "Từ của tôi", word: { syllables: ["beta"], stress: 0, meaning: "b" } });
  });

  it("puts due own words with the due ones and leaves not-yet-due ones out", () => {
    let s = add(add(emptyState(), "due"), "later");
    s = { ...s, srs: { [customWordKey("due")]: { box: 1, due: today }, [customWordKey("later")]: { box: 2, due: "2026-10-09" } } };
    const plan = buildReviewPlan([], s, today);
    expect(plan.dueOld.map((w) => w.word.word)).toEqual(["due"]);
    expect(plan.fresh).toEqual([]);
    expect(plan.queue.map((w) => w.word.word)).toEqual(["due"]);
  });

  it("shares the daily cap on new words with course words, taking turns", () => {
    let s = done(emptyState());
    for (let i = 0; i < 20; i++) s = add(s, `own${i}`, "m", i);
    const course = Array.from({ length: 20 }, (_, i) => courseWord(i));
    const plan = buildReviewPlan(course, s, today);
    expect(plan.fresh).toHaveLength(40);
    expect(plan.queue).toHaveLength(NEW_PER_DAY);
    const own = plan.queue.filter((w) => "custom" in w.source).map((w) => w.word.word);
    expect(own).toEqual(["own0", "own1", "own2", "own3", "own4", "own5", "own6"]);
    expect(plan.queue.length - own.length).toBe(8);
  });

  it("fills the cap from own words alone when no course word is waiting", () => {
    let s = emptyState();
    for (let i = 0; i < 40; i++) s = add(s, `own${i}`, "m", i);
    const plan = buildReviewPlan([], s, today);
    expect(plan.queue.map((w) => w.word.word)).toEqual(Array.from({ length: NEW_PER_DAY }, (_, i) => `own${i}`));
  });

  it("never goes past SESSION_MAX", () => {
    let s = emptyState();
    for (let i = 0; i < 40; i++) s = add(s, `own${i}`, "m", i);
    const srs = Object.fromEntries(s.custom.slice(0, 25).map((c) => [customWordKey(c.word), { box: 1, due: today }]));
    const plan = buildReviewPlan([], { ...s, srs }, today);
    expect(plan.dueOld).toHaveLength(25);
    expect(plan.queue).toHaveLength(SESSION_MAX);
  });
});
