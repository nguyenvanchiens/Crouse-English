import { describe, expect, it } from "vitest";
import type { Course } from "@/content/types";
import {
  applyCompleteLesson,
  applyEnroll,
  applyLearnerName,
  applyPlacement,
  courseProgress,
  displayStreak,
  emptyState,
  lastCompletedAt,
  lessonKey,
  nextStreak,
  parseState,
  todayKey,
} from "./progress-core";

const lesson = (slug: string) => ({ slug, title: slug, minutes: 5, steps: [] });
const course: Course = {
  slug: "c", title: "C", level: "A1", goal: "lo-trinh", summary: "", outcomes: [], audience: [],
  teacher: { name: "", bio: "", initials: "" }, durationWeeks: 1, rating: 5,
  reviews: [], faqs: [], status: "open",
  modules: [
    { id: "m1", title: "M1", lessons: [lesson("a"), lesson("b")] },
    { id: "m2", title: "M2", lessons: [lesson("c")] },
  ],
};

describe("parseState", () => {
  it("returns empty state for missing, corrupt or foreign data", () => {
    expect(parseState(null)).toEqual(emptyState());
    expect(parseState("{not json")).toEqual(emptyState());
    expect(parseState(JSON.stringify({ version: 2, enrolled: ["c"] }))).toEqual(emptyState());
    expect(parseState("[]")).toEqual(emptyState());
  });
  it("drops malformed fields but keeps valid ones", () => {
    const s = parseState(JSON.stringify({ version: 1, enrolled: "c", learnerName: "Lan", streak: "x" }));
    expect(s.enrolled).toEqual([]);
    expect(s.learnerName).toBe("Lan");
    expect(s.streak).toEqual({ current: 0, lastDay: null });
  });
  it("drops malformed lesson records instead of crashing later", () => {
    const s = parseState(JSON.stringify({
      version: 1,
      lessons: {
        "a/b": null,
        "a/c": { done: true },
        "a/d": { done: true, score: 80, completedAt: "not a date" },
        "a/e": { done: true, score: 80, completedAt: "2026-09-24T03:00:00.000Z" },
      },
    }));
    expect(Object.keys(s.lessons)).toEqual(["a/e"]);
  });
  it("rejects unknown placement levels and invalid streak counts", () => {
    const s = parseState(JSON.stringify({
      version: 1,
      placement: { level: "Z", score: 1, takenAt: "2026-09-24T03:00:00.000Z" },
      streak: { current: -3, lastDay: "2026-09-24" },
    }));
    expect(s.placement).toBeNull();
    expect(s.streak).toEqual({ current: 0, lastDay: null });
  });
  it("round-trips a valid state", () => {
    const s = applyEnroll(emptyState(), "c");
    expect(parseState(JSON.stringify(s))).toEqual(s);
  });
});

describe("todayKey", () => {
  it("formats local date as YYYY-MM-DD", () => {
    expect(todayKey(new Date(2026, 0, 5, 23, 59))).toBe("2026-01-05");
  });
});

describe("nextStreak", () => {
  it("starts at 1", () => {
    expect(nextStreak({ current: 0, lastDay: null }, "2026-09-24")).toEqual({ current: 1, lastDay: "2026-09-24" });
  });
  it("does not grow twice in one day", () => {
    const s = { current: 3, lastDay: "2026-09-24" };
    expect(nextStreak(s, "2026-09-24")).toEqual(s);
  });
  it("grows on consecutive days, across month ends", () => {
    expect(nextStreak({ current: 3, lastDay: "2026-09-30" }, "2026-10-01")).toEqual({ current: 4, lastDay: "2026-10-01" });
  });
  it("resets after a gap", () => {
    expect(nextStreak({ current: 9, lastDay: "2026-09-20" }, "2026-09-24")).toEqual({ current: 1, lastDay: "2026-09-24" });
  });
  it("keeps the streak if the clock goes back by one day (time zones)", () => {
    const s = { current: 4, lastDay: "2026-09-24" };
    expect(nextStreak(s, "2026-09-23")).toEqual(s);
  });
  it("resets a streak whose last day is two or more days in the future", () => {
    expect(nextStreak({ current: 4, lastDay: "2026-09-24" }, "2026-09-22")).toEqual({ current: 1, lastDay: "2026-09-22" });
  });
});

describe("displayStreak", () => {
  it("shows the streak while it is alive and 0 once broken", () => {
    expect(displayStreak({ current: 4, lastDay: "2026-09-24" }, "2026-09-24")).toBe(4);
    expect(displayStreak({ current: 4, lastDay: "2026-09-23" }, "2026-09-24")).toBe(4);
    expect(displayStreak({ current: 4, lastDay: "2026-09-21" }, "2026-09-24")).toBe(0);
    expect(displayStreak({ current: 0, lastDay: null }, "2026-09-24")).toBe(0);
    expect(displayStreak({ current: 4, lastDay: "2026-09-27" }, "2026-09-24")).toBe(0);
    expect(displayStreak({ current: 4, lastDay: "2026-09-25" }, "2026-09-24")).toBe(4);
  });
});

describe("applyEnroll", () => {
  it("adds once", () => {
    const s = applyEnroll(applyEnroll(emptyState(), "c"), "c");
    expect(s.enrolled).toEqual(["c"]);
  });
});

describe("applyCompleteLesson", () => {
  const now = new Date(2026, 8, 24, 10);
  it("marks done, keeps best score and first completion time, bumps streak", () => {
    let s = applyCompleteLesson(emptyState(), "c", "a", 50, now);
    expect(s.lessons[lessonKey("c", "a")]).toEqual({ done: true, score: 50, completedAt: now.toISOString() });
    expect(s.streak).toEqual({ current: 1, lastDay: "2026-09-24" });
    const later = new Date(2026, 8, 25, 10);
    s = applyCompleteLesson(s, "c", "a", 30, later);
    expect(s.lessons["c/a"]).toEqual({ done: true, score: 50, completedAt: now.toISOString() });
    expect(s.streak.current).toBe(2);
  });
  it("adds the course to my courses the first time a lesson is completed", () => {
    const s = applyCompleteLesson(emptyState(), "c", "a", 70, now);
    expect(s.enrolled).toEqual(["c"]);
    expect(applyCompleteLesson(s, "c", "b", 70, now).enrolled).toEqual(["c"]);
  });
  it("keeps a previous score when the new one is null", () => {
    let s = applyCompleteLesson(emptyState(), "c", "a", 80, now);
    s = applyCompleteLesson(s, "c", "a", null, now);
    expect(s.lessons["c/a"].score).toBe(80);
  });
});

describe("courseProgress", () => {
  it("counts done lessons and finds the next one in order", () => {
    const s = applyCompleteLesson(emptyState(), "c", "a", null, new Date());
    const p = courseProgress(course, s);
    expect(p).toMatchObject({ done: 1, total: 3, percent: 33 });
    expect(p.nextLesson?.slug).toBe("b");
  });
  it("reports 100% and no next lesson when finished", () => {
    let s = emptyState();
    for (const l of ["a", "b", "c"]) s = applyCompleteLesson(s, "c", l, null, new Date());
    expect(courseProgress(course, s)).toMatchObject({ done: 3, total: 3, percent: 100, nextLesson: null });
  });
});

describe("lastCompletedAt", () => {
  it("returns the latest completion among the course lessons", () => {
    let s = applyCompleteLesson(emptyState(), "c", "a", null, new Date("2026-09-20T10:00:00Z"));
    s = applyCompleteLesson(s, "c", "c", null, new Date("2026-09-22T10:00:00Z"));
    s = applyCompleteLesson(s, "other", "x", null, new Date("2026-09-30T10:00:00Z"));
    expect(lastCompletedAt(course, s)).toBe("2026-09-22T10:00:00.000Z");
    expect(lastCompletedAt(course, emptyState())).toBeNull();
  });
});

describe("applyLearnerName / applyPlacement", () => {
  it("trims names and clears empty ones", () => {
    expect(applyLearnerName(emptyState(), "  Lan  ").learnerName).toBe("Lan");
    expect(applyLearnerName(emptyState(), "   ").learnerName).toBeNull();
  });
  it("stores the placement result", () => {
    const now = new Date("2026-09-24T10:00:00Z");
    expect(applyPlacement(emptyState(), "B1", "B2", 65, now).placement).toEqual({ level: "B1", startLevel: "B2", score: 65, takenAt: now.toISOString() });
  });
  it("derives the start level for data saved before startLevel existed", () => {
    const old = (level: string) => parseState(JSON.stringify({ version: 1, placement: { level, score: 65, takenAt: "2026-09-24T03:00:00.000Z" } })).placement?.startLevel;
    expect(old("B1")).toBe("B2"); // old `level` meant "highest level passed"
    expect(old("B2")).toBe("C1");
    expect(old("A1")).toBe("A1"); // ambiguous (passed none or A1): start from the beginning
  });
});
