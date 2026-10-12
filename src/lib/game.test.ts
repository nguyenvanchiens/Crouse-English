import { describe, expect, it } from "vitest";
import { BOARDS, GRAMMAR_PER_ROUND, PAIRS, ROUND, blankRound, checkSentence, listenRound, matchBoards, roundXp, sentenceRound, type GameBlank, type GameData, type GameWord } from "./game";
import { GAME_LEVELS, loadGameData } from "./game-data";
import { POINTS, awardGame, emptyPoints } from "./points";

let seed = 11;
const rng = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 2 ** 32);
const word = (i: number, meaning = `nghĩa ${i}`): GameWord => ({ id: `w${i}`, word: `word${i}`, meaning, ipa: "", courseKey: `c/word${i}` });

describe("game rounds", () => {
  it("deals three boards of five pairs with no meaning twice, unseen words first", () => {
    const words = [...Array.from({ length: 30 }, (_, i) => word(i)), word(99, "nghĩa 0")];
    const boards = matchBoards(words, ["w1", "w2"], rng);
    expect(boards).toHaveLength(BOARDS);
    const pairs = boards.flatMap((b) => b.pairs);
    expect(pairs).toHaveLength(BOARDS * PAIRS);
    expect(new Set(pairs.map((p) => p.meaning)).size).toBe(pairs.length);
    expect(pairs.map((p) => p.id)).not.toContain("w1");
    for (const b of boards) {
      expect([...b.left].sort()).toEqual(b.pairs.map((p) => p.word).sort());
      expect([...b.right].sort()).toEqual(b.pairs.map((p) => p.meaning).sort());
    }
  });

  it("shuffles a sentence's own tiles and accepts it back in order, punctuation and case aside", () => {
    const item = { id: "s1", en: "I visited my grandparents last weekend.", vi: "…", tiles: ["I", "visited", "my grandparents", "last weekend."] };
    const [q] = sentenceRound([item], [], rng);
    expect([...q.tiles].sort()).toEqual([...item.tiles].sort());
    expect(checkSentence(["i", "visited", "my grandparents", "last weekend"], item)).toBe(true);
    expect(checkSentence(["I", "my grandparents", "visited", "last weekend."], item)).toBe(false);
  });

  it("asks what was heard among four different options that include the answer", () => {
    const data: GameData = {
      words: Array.from({ length: 20 }, (_, i) => word(i)),
      sentences: Array.from({ length: 10 }, (_, i) => ({ id: `s${i}`, en: `This is sentence number ${i}.`, vi: `câu ${i}`, tiles: [] })),
      blanks: [],
    };
    const round = listenRound(data, [], rng);
    expect(round).toHaveLength(ROUND);
    for (const q of round) {
      expect(q.options[q.answer]).toBe(q.audio);
      expect(new Set(q.options).size).toBe(q.options.length);
      expect(q.options.length).toBe(4);
    }
  });

  it("mixes at most four grammar questions into a blank round and keeps each answer right after shuffling", () => {
    const blank = (id: string, ans: string): GameBlank => ({ id, prompt: "I ___ it.", options: [ans, "x", "y", "z"], answer: 0 });
    const blanks = [...Array.from({ length: 8 }, (_, i) => blank(`g:${i}`, `go${i}`)), ...Array.from({ length: 20 }, (_, i) => blank(`v:${i}`, `do${i}`))];
    const round = blankRound(blanks, [], rng);
    expect(round).toHaveLength(ROUND);
    expect(round.filter((b) => b.id.startsWith("g:")).length).toBe(GRAMMAR_PER_ROUND);
    for (const b of round) expect(b.options[b.answer]).toMatch(/^(go|do)\d+$/);
  });

  it("gives 2 XP a right answer and 5 more for a perfect round, paid as points up to a daily cap", () => {
    expect(roundXp(7, 10)).toBe(14);
    expect(roundXp(10, 10)).toBe(25);
    const now = new Date("2026-10-11T10:00:00Z");
    let p = emptyPoints();
    const first = awardGame(p, 25, "2026-10-11", now);
    expect(first.paid).toBe(25);
    p = first.points;
    const second = awardGame(p, 25, "2026-10-11", now);
    expect(second.paid).toBe(POINTS.gameDailyCap - 25);
    expect(awardGame(second.points, 25, "2026-10-11", now).paid).toBe(0);
    expect(awardGame(second.points, 25, "2026-10-12", now).paid).toBe(25);
    expect(second.points.log[0]).toMatchObject({ reason: "Chơi trò chơi", amount: POINTS.gameDailyCap });
  });
});

describe("game content on the real courses", async () => {
  const levels = await Promise.all(GAME_LEVELS.map(async (l) => [l, await loadGameData(l)] as const));
  it.each(levels)("%s has enough words, sentences and blanks, all well formed", (_, d) => {
    expect(d.words.length).toBeGreaterThanOrEqual(BOARDS * PAIRS * 4);
    expect(d.sentences.length).toBeGreaterThanOrEqual(ROUND * 3);
    expect(d.blanks.filter((b) => b.id.startsWith("g:")).length).toBeGreaterThanOrEqual(GRAMMAR_PER_ROUND * 3);
    expect(new Set(d.words.map((w) => w.word.toLowerCase())).size).toBe(d.words.length);
    for (const s of d.sentences) {
      expect(s.tiles.length, s.id).toBeGreaterThanOrEqual(2);
      expect(checkSentence(s.tiles, s), s.id).toBe(true);
      expect(s.vi, s.id).not.toBe("");
    }
    for (const b of d.blanks) {
      expect(b.prompt, b.id).toContain("___");
      expect(new Set(b.options.map((o) => o.toLowerCase())).size, b.id).toBe(b.options.length);
      expect(b.options[b.answer], b.id).toBeTruthy();
    }
  });
});

describe("the hint in the sentence game", () => {
  const item = { id: "h", en: "I am a student.", vi: "", tiles: ["I", "am", "a", "student."] };
  // the tiles as shown, shuffled
  const shown = ["student.", "a", "I", "am"];
  it("places the next right piece, keeping the right ones and taking back the wrong ones", async () => {
    const { nextHint } = await import("./game");
    expect(nextHint(shown, [], item)).toEqual([2]);
    expect(nextHint(shown, [2], item)).toEqual([2, 3]);
    // "I a" is wrong after "I": the hint keeps "I" and places "am"
    expect(nextHint(shown, [2, 1], item)).toEqual([2, 3]);
    expect(nextHint(shown, [2, 3, 1, 0], item)).toEqual([2, 3, 1, 0]);
  });
  it("copes with the same word twice", async () => {
    const { nextHint } = await import("./game");
    const twice = { id: "t", en: "I'm Tom. I'm your teacher.", vi: "", tiles: ["I'm", "Tom.", "I'm", "your", "teacher."] };
    const shownTwice = ["I'm", "your", "I'm", "Tom.", "teacher."];
    expect(nextHint(shownTwice, [0, 3], twice)).toEqual([0, 3, 2]);
  });
});
