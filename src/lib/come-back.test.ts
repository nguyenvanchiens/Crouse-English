import { describe, expect, it } from "vitest";
import { getCourses, summarizeCourse } from "./content";
import { badgeShelf, badges } from "./badges";
import {
  applyDailyGoal,
  applyStudyTime,
  courseProgress,
  dueWordCount,
  emptyState,
  lastDays,
  parseState,
  studySeconds,
  todayKey,
} from "./progress-core";

const at = (day: string, h = 10) => new Date(`${day}T${String(h).padStart(2, "0")}:00:00`);

describe("study time and the daily goal", () => {
  it("adds active seconds to today and keeps the slice small", () => {
    let s = applyStudyTime(emptyState(), 30, at("2026-10-20"));
    s = applyStudyTime(s, 9999, at("2026-10-20"));
    expect(studySeconds(s, "2026-10-20")).toBe(330);
    expect(applyStudyTime(s, 0, at("2026-10-20"))).toBe(s);
  });

  it("reaching the goal counts the day for the streak, once", () => {
    let s = applyDailyGoal(emptyState(), 5);
    s = applyStudyTime(s, 200, at("2026-10-20"));
    expect(s.streak.current).toBe(0);
    s = applyStudyTime(s, 100, at("2026-10-20"));
    expect(s.streak).toEqual({ current: 1, lastDay: "2026-10-20" });
    expect(s.bestStreak).toBe(1);
    s = applyStudyTime(applyStudyTime(s, 300, at("2026-10-21")), 0, at("2026-10-21"));
    expect(s.streak.current).toBe(2);
    expect(s.bestStreak).toBe(2);
  });

  it("forgets study older than the kept window", () => {
    let s = applyStudyTime(emptyState(), 60, at("2026-01-01"));
    s = applyStudyTime(s, 60, at("2026-10-20"));
    expect(Object.keys(s.study)).toEqual(["2026-10-20"]);
  });

  it("only accepts the offered goals", () => {
    expect(applyDailyGoal(emptyState(), 20).dailyGoal).toBe(20);
    expect(applyDailyGoal(emptyState(), 7).dailyGoal).toBe(10);
  });

  it("reads saved study data defensively", () => {
    const raw = JSON.stringify({ version: 1, study: { "2026-10-20": 120, bad: 5, "2026-10-21": -3 }, dailyGoal: 15, bestStreak: 4 });
    const s = parseState(raw);
    expect(s.study).toEqual({ "2026-10-20": 120 });
    expect(s.dailyGoal).toBe(15);
    expect(s.bestStreak).toBe(4);
    const old = parseState(JSON.stringify({ version: 1 }));
    expect(old.dailyGoal).toBe(10);
    expect(old.study).toEqual({});
  });

  it("lists the last days oldest first, across a month end", () => {
    expect(lastDays("2026-11-02", 3)).toEqual(["2026-10-31", "2026-11-01", "2026-11-02"]);
    expect(todayKey(at("2026-11-02"))).toBe("2026-11-02");
  });
});

describe("badges", () => {
  it("are read from what was already done, ladder by ladder", () => {
    const s = { ...emptyState(), bestStreak: 8, lessons: { "a/b": { done: true, score: 100, completedAt: "2026-10-20T00:00:00Z" } } };
    const all = badges(s);
    const got = all.filter((b) => b.earned).map((b) => b.id);
    expect(got).toEqual(expect.arrayContaining(["lessons-1", "streak-3", "streak-7"]));
    expect(got).not.toContain("streak-30");
    const { next } = badgeShelf(all);
    // one next badge per family, the first unearned rung
    expect(next.find((b) => b.id.startsWith("streak-"))?.id).toBe("streak-30");
    expect(next.find((b) => b.id.startsWith("lessons-"))?.id).toBe("lessons-10");
    expect(new Set(next.map((b) => b.id.split("-")[0])).size).toBe(next.length);
  });
});

describe("course summaries", () => {
  it("keep what progress needs and drop the lesson content", async () => {
    const [course] = (await getCourses()).filter((c) => c.status === "open" && c.wordBank?.length);
    const slim = summarizeCourse(course);
    const state = {
      ...emptyState(),
      lessons: { [`${course.slug}/${course.modules[0].lessons[0].slug}`]: { done: true, score: 90, completedAt: "2026-10-20T00:00:00Z" } },
      topics: [`${course.slug}/${course.wordBank![0].id}`],
    };
    // the next lesson is the trimmed one: compare what the pages show of it
    const view = (p: ReturnType<typeof courseProgress>) => ({ ...p, nextLesson: p.nextLesson && { slug: p.nextLesson.slug, title: p.nextLesson.title } });
    expect(view(courseProgress(slim, state))).toEqual(view(courseProgress(course, state)));
    expect(dueWordCount([slim], state, "2026-10-20")).toBe(dueWordCount([course], state, "2026-10-20"));
    expect(JSON.stringify(slim).length).toBeLessThan(JSON.stringify(course).length / 5);
  });
});
