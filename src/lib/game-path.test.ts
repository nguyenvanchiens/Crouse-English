import { describe, expect, it } from "vitest";
import { UNIT_ROUND, blankRound, listenRound, matchBoards, sentenceRound } from "./game";
import { GAME_LEVELS, loadPath, loadUnit } from "./game-data";
import { isOpen, nextNode, nodeId, nodeStatuses, pathNodes, starsFor } from "./game-path";
import { parseStars } from "./path-store";

const units = [
  { slug: "u1", games: ["ghep-cap", "nghe-chon"] as const },
  { slug: "u2", games: ["ghep-cap", "xep-cau"] as const },
].map((u) => ({ ...u, games: [...u.games] }));

describe("the game path", () => {
  it("gives stars from 70% without running out of hearts", () => {
    expect(starsFor(6, 10, false)).toBe(0);
    expect(starsFor(7, 10, false)).toBe(1);
    expect(starsFor(9, 10, false)).toBe(2);
    expect(starsFor(10, 10, false)).toBe(3);
    expect(starsFor(9, 10, true)).toBe(0);
    expect(starsFor(0, 0, false)).toBe(0);
  });

  it("opens the games one after another, passed ones staying open", () => {
    const nodes = pathNodes("a1", units);
    expect(nodes.map((n) => n.id)).toEqual(["a1/u1/ghep-cap", "a1/u1/nghe-chon", "a1/u2/ghep-cap", "a1/u2/xep-cau"]);
    expect(nodeStatuses(nodes, {})).toEqual(["current", "locked", "locked", "locked"]);
    const stars = { "a1/u1/ghep-cap": 2, "a1/u1/nghe-chon": 1 };
    expect(nodeStatuses(nodes, stars)).toEqual(["done", "done", "current", "locked"]);
    expect(isOpen(nodes, stars, "a1/u1/ghep-cap")).toBe(true);
    expect(isOpen(nodes, stars, "a1/u2/ghep-cap")).toBe(true);
    expect(isOpen(nodes, stars, "a1/u2/xep-cau")).toBe(false);
    expect(nextNode(nodes, stars)?.id).toBe(nodeId("a1", "u2", "ghep-cap"));
    expect(nextNode(nodes, { ...stars, "a1/u2/ghep-cap": 3, "a1/u2/xep-cau": 1 })).toBeNull();
    // a failed try (0 stars) does not open the next game
    expect(nodeStatuses(nodes, { "a1/u1/ghep-cap": 0 })[1]).toBe("locked");
  });

  it("reads saved stars defensively", () => {
    expect(parseStars('{"a1/u1/ghep-cap":2,"x":9,"y":"3","z":-1}')).toEqual({ "a1/u1/ghep-cap": 2 });
    expect(parseStars("nope")).toEqual({});
    expect(parseStars(null)).toEqual({});
  });
});

describe("the game path on the real courses", async () => {
  const levels = await Promise.all(GAME_LEVELS.map(async (l) => [l, await loadPath(l)] as const));
  it.each(levels)("%s: every lesson of the main course is a unit with at least three games that can be played", async (l, p) => {
    expect(p.units.length).toBeGreaterThanOrEqual(15);
    let seed = 3;
    const rng = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 2 ** 32);
    for (const u of p.units) {
      expect(u.games.length, u.slug).toBeGreaterThanOrEqual(3);
      const { data } = (await loadUnit(l, u.slug))!;
      for (const g of u.games) {
        if (g === "ghep-cap") expect(matchBoards(data.words, [], rng, UNIT_ROUND.boards)[0].pairs.length, `${u.slug} ${g}`).toBeGreaterThanOrEqual(4);
        if (g === "nghe-chon") {
          const r = listenRound(data, [], rng, UNIT_ROUND);
          expect(r.length, `${u.slug} ${g}`).toBeGreaterThanOrEqual(3);
          for (const q of r) expect(q.options.length, `${u.slug} ${q.id}`).toBe(4);
        }
        if (g === "dien-tu") expect(blankRound(data.blanks, [], rng, UNIT_ROUND).length, `${u.slug} ${g}`).toBeGreaterThanOrEqual(4);
        if (g === "xep-cau") expect(sentenceRound(data.sentences, [], rng, UNIT_ROUND.sentences).length, `${u.slug} ${g}`).toBeGreaterThanOrEqual(3);
      }
      // a unit's own words, not the whole level, are what it asks about
      expect(data.words.length, u.slug).toBeLessThanOrEqual(20);
    }
  });
});

describe("sentences on the path come in a sensible order", async () => {
  const { ALL_DRILLS } = await import("@/content/drills");
  it.each(["A1", "A2"] as const)("%s: no drill before the lesson that teaches it, and short sentences first", async (l) => {
    const p = await loadPath(l);
    const slugs = p.units.map((u) => u.slug);
    for (const [i, u] of p.units.entries()) {
      const { data } = (await loadUnit(l, u.slug))!;
      for (const s of data.sentences) {
        const d = ALL_DRILLS.find((x) => `s:${x.id}` === s.id);
        if (d && slugs.includes(d.review.lesson)) expect(slugs.indexOf(d.review.lesson), `${u.slug} ${d.id}`).toBeLessThanOrEqual(i);
      }
      // the first units keep to short sentences; one a little longer only when a unit has too few
      if (i < 3) {
        expect(Math.max(...data.sentences.map((x) => x.tiles.length)), u.slug).toBeLessThanOrEqual(7);
        expect(data.sentences.filter((x) => x.tiles.length <= 6).length, u.slug).toBeGreaterThanOrEqual(2);
      }
    }
  });
});
