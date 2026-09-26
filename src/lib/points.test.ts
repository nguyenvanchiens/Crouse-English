import { describe, expect, it } from "vitest";
import { REWARDS } from "@/content/rewards";
import { POINTS, award, balance, buy, canBuy, emptyPoints, emptyRewards, equip, parsePoints, parseRewards } from "./points";
import {
  applyBuyReward,
  applyCompleteLesson,
  applyPlacement,
  applyReviewWord,
  displayStreak,
  emptyState,
  parseState,
  todayKey,
} from "./progress-core";

const day = (d: number) => new Date(2026, 8, d, 10);
const reward = (id: string) => REWARDS.find((r) => r.id === id)!;

describe("award", () => {
  it("pays each key only once", () => {
    const now = day(1);
    let p = award(emptyPoints(), "k", 20, "x", now);
    p = award(p, "k", 20, "x", now);
    expect(p.earned).toBe(20);
    expect(p.log).toHaveLength(1);
  });
});

describe("points from learning", () => {
  it("pays a first lesson finish plus the first-of-day bonus, and nothing for a redo", () => {
    let s = applyCompleteLesson(emptyState(), "c", "l1", 50, day(1));
    expect(s.points.earned).toBe(POINTS.lesson + POINTS.firstOfDay);
    s = applyCompleteLesson(s, "c", "l1", 60, day(1));
    expect(s.points.earned).toBe(POINTS.lesson + POINTS.firstOfDay);
  });
  it("pays score bands once when the best score reaches them", () => {
    let s = applyCompleteLesson(emptyState(), "c", "l1", 85, day(1));
    expect(s.points.earned).toBe(POINTS.lesson + POINTS.firstOfDay + POINTS.score80);
    s = applyCompleteLesson(s, "c", "l1", 100, day(1));
    expect(s.points.earned).toBe(POINTS.lesson + POINTS.firstOfDay + POINTS.score80 + POINTS.score100);
  });
  it("pays more for a chapter review and a big bonus only for passing the final test", () => {
    const r = applyCompleteLesson(emptyState(), "c", "on-tap-chuong-1", 50, day(1), "review");
    expect(r.points.earned).toBe(POINTS.review + POINTS.firstOfDay);
    const failed = applyCompleteLesson(emptyState(), "c", "kiem-tra-cuoi-khoa", 60, day(1), "final");
    expect(failed.points.awarded).not.toContain("final:c");
    const passed = applyCompleteLesson(failed, "c", "kiem-tra-cuoi-khoa", 75, day(1), "final");
    expect(passed.points.earned - failed.points.earned).toBe(POINTS.finalPass);
  });
  it("caps vocabulary points per day and merges them into one log line", () => {
    let s = emptyState();
    for (let i = 0; i < POINTS.vocabDailyCap + 5; i++) s = applyReviewWord(s, `c/w${i}`, true, day(1));
    expect(s.points.earned).toBe(POINTS.vocabDailyCap + POINTS.firstOfDay);
    expect(s.points.log.filter((e) => e.reason.startsWith("Nhớ từ"))).toHaveLength(1);
    s = applyReviewWord(s, "c/w-next-day", true, day(2));
    expect(s.points.vocabToday).toEqual({ day: todayKey(day(2)), n: 1 });
  });
  it("gives nothing for a word that was not remembered, apart from the day bonus", () => {
    expect(applyReviewWord(emptyState(), "c/w", false, day(1)).points.earned).toBe(POINTS.firstOfDay);
  });
  it("pays the placement test once", () => {
    let s = applyPlacement(emptyState(), "A1", "A2", 60, day(1));
    s = applyPlacement(s, "A2", "B1", 80, day(2));
    expect(s.points.earned).toBe(POINTS.placement);
  });
  it("pays the 7-day streak milestone", () => {
    let s = emptyState();
    for (let d = 1; d <= 7; d++) s = applyCompleteLesson(s, "c", `l${d}`, null, day(d));
    expect(s.streak.current).toBe(7);
    expect(s.points.awarded).toContain("streak:7");
  });
});

describe("streak freeze", () => {
  it("keeps the streak over one missed day and is used up", () => {
    let s = applyCompleteLesson(emptyState(), "c", "l1", null, day(1));
    s = applyCompleteLesson(s, "c", "l2", null, day(2));
    s = { ...s, rewards: { ...s.rewards, freezes: 1 } };
    expect(displayStreak(s.streak, todayKey(day(4)), s.rewards.freezes)).toBe(2);
    s = applyCompleteLesson(s, "c", "l3", null, day(4));
    expect(s.streak.current).toBe(3);
    expect(s.rewards.freezes).toBe(0);
  });
  it("does not save a streak after two missed days, or without a freeze", () => {
    let s = applyCompleteLesson(emptyState(), "c", "l1", null, day(1));
    s = { ...s, rewards: { ...s.rewards, freezes: 1 } };
    expect(applyCompleteLesson(s, "c", "l2", null, day(4)).streak.current).toBe(1);
    const noFreeze = applyCompleteLesson(applyCompleteLesson(emptyState(), "c", "l1", null, day(1)), "c", "l2", null, day(3));
    expect(noFreeze.streak.current).toBe(1);
  });
});

describe("rewards shop", () => {
  const rich = { ...emptyPoints(), earned: 1000 };
  it("buys and equips a cosmetic, then refuses to sell it again", () => {
    const { points, rewards } = buy(rich, emptyRewards(), reward("avatar-cat"), day(1));
    expect(balance(points)).toBe(1000 - reward("avatar-cat").cost);
    expect(rewards).toMatchObject({ owned: ["avatar-cat"], avatar: "avatar-cat" });
    expect(canBuy(points, rewards, reward("avatar-cat"))).toBe("owned");
  });
  it("refuses when there are not enough points", () => {
    expect(canBuy(emptyPoints(), emptyRewards(), reward("frame-gold"))).toBe("too-poor");
    const s = applyBuyReward(emptyState(), reward("frame-gold"), day(1));
    expect(s.rewards.owned).toEqual([]);
  });
  it("sells streak freezes up to the maximum", () => {
    let p = rich;
    let r = emptyRewards();
    for (let i = 0; i < 5; i++) ({ points: p, rewards: r } = buy(p, r, reward("freeze"), day(1)));
    expect(r.freezes).toBe(3);
    expect(canBuy(p, r, reward("freeze"))).toBe("max-freezes");
    expect(p.spent).toBe(3 * reward("freeze").cost);
  });
  it("equips only owned items", () => {
    const r = equip(emptyRewards(), "title", "title-motsach");
    expect(r.title).toBeNull();
  });
  it("has unique reward ids with positive prices", () => {
    expect(new Set(REWARDS.map((r) => r.id)).size).toBe(REWARDS.length);
    for (const r of REWARDS) expect(r.cost).toBeGreaterThan(0);
  });
});

describe("parsing", () => {
  it("drops bad data and never lets spent exceed earned", () => {
    expect(parsePoints({ earned: 10, spent: 50, awarded: ["a", "a", 3], log: [{ at: "x", amount: 1, reason: "r" }, "bad"] })).toMatchObject({
      earned: 10,
      spent: 10,
      awarded: ["a"],
    });
    expect(parseRewards({ owned: ["avatar-cat"], avatar: "avatar-owl", freezes: 9 })).toEqual({
      owned: ["avatar-cat"],
      avatar: null,
      title: null,
      frame: null,
      freezes: 3,
    });
  });
  it("round-trips through storage", () => {
    const s = applyCompleteLesson(emptyState(), "c", "l1", 100, day(1));
    expect(parseState(JSON.stringify(s)).points).toEqual(s.points);
  });
});
