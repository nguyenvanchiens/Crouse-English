import { describe, expect, it } from "vitest";
import type { SelfStudySession } from "@/content/today";
import { SESSIONS_PER_SPRINT, SPRINT_HOURS, SPRINT_MINUTES, WORK_SPRINTS } from "@/content/work-sprints";
import { parsePlan } from "./my-plan-core";
import type { DayMain, ScheduleDay } from "./schedule";
import { sprintAt, sprintDates, sprintOn, sprintProgress, sprintSessionsBefore } from "./work-sprint";

const input: DayMain = { kind: "consolidate", course: "c", focus: "input", target: null, drills: [] };
const day = (date: string, weekday: number, skill: SelfStudySession["skill"] | null = "read", main: DayMain = input): ScheduleDay => ({
  date,
  weekday,
  stage: 0,
  main,
  selfStudy: skill === null ? null : { title: "x", skill, minutes: 40, steps: ["x"] },
});
const wr = { kind: "week-review" };
/** n distinct past dates */
const dates = (n: number) => Array.from({ length: n }, (_, i) => `2025-${String(1 + Math.floor(i / 28)).padStart(2, "0")}-${String((i % 28) + 1).padStart(2, "0")}`);

describe("work-English sprints", () => {
  it("are 20 hours each, in sessions of 45 minutes, with links and steps, reading first then speaking", () => {
    expect(SESSIONS_PER_SPRINT * SPRINT_MINUTES).toBeGreaterThanOrEqual(SPRINT_HOURS * 60);
    expect(WORK_SPRINTS.map((s) => s.id)).toEqual(["read-docs", "speak-work", "listen-work", "write-work"]);
    for (const s of WORK_SPRINTS) {
      expect(s.sessions.length, s.id).toBeGreaterThanOrEqual(3);
      expect(s.links.every((l) => l.href.startsWith("https://")), s.id).toBe(true);
      for (const x of s.sessions) expect(x.steps.length, `${s.id} ${x.title}`).toBeGreaterThanOrEqual(3);
    }
  });

  it("moves to the next sprint after 20 hours, never shows more than 20 hours, and stops after the last", () => {
    expect(sprintAt(0)).toMatchObject({ index: 0, session: 0, hours: 0 });
    expect(sprintAt(SESSIONS_PER_SPRINT)).toMatchObject({ index: 1, session: 0 });
    expect(sprintAt(4)!.hours).toBe(3);
    expect(sprintAt(SESSIONS_PER_SPRINT * WORK_SPRINTS.length)).toBeNull();
    const full = parsePlan(JSON.stringify({ sprints: dates(SESSIONS_PER_SPRINT) }));
    expect(sprintProgress(full, 0)).toEqual({ sessions: SESSIONS_PER_SPRINT, hours: SPRINT_HOURS, percent: 100 });
    expect(sprintProgress(full, 1).sessions).toBe(0);
  });

  it("keeps sessions done for good, beyond the capped history, and counts a day not yet rolled over", () => {
    const data = parsePlan(JSON.stringify({
      sprints: ["2026-10-05", "bad", "2026-10-06"],
      history: [
        { date: "2026-10-06", main: wr, done: ["sprint"] },
        { date: "2026-10-07", main: wr, done: ["vocab"] },
        { date: "2026-10-08", main: wr, done: ["sprint"] },
      ],
      day: { date: "2026-10-09", picks: { main: wr }, done: ["sprint"] },
    }));
    expect(data.sprints).toEqual(["2026-10-05", "2026-10-06"]);
    expect(data.history[1].done).toEqual(["vocab"]);
    expect(sprintDates(data).sort()).toEqual(["2026-10-05", "2026-10-06", "2026-10-08", "2026-10-09"]);
    // on 10 Oct the 9 Oct record (not yet rolled into the history) still counts
    expect(sprintSessionsBefore(data, "2026-10-10")).toBe(4);
    expect(sprintSessionsBefore(data, "2026-10-09")).toBe(3);
  });

  it("keeps the speaking self-study, Friday listening until the listening sprint, and pronunciation days free", () => {
    const data = parsePlan(JSON.stringify({ sprints: ["2026-10-03"] }));
    const days = [
      day("2026-10-12", 1, "read", { kind: "grammar", lesson: "g", ipa: "p", drills: [] }),
      day("2026-10-13", 2),
      day("2026-10-14", 3, "speak"),
      day("2026-10-15", 4, null),
      day("2026-10-16", 5, "listen"),
      day("2026-10-17", 6, "write"),
      day("2026-10-18", 0, "review"),
    ];
    expect(sprintOn(days, "2026-10-12", data)).toBeNull();
    expect(sprintOn(days, "2026-10-13", data)).toMatchObject({ index: 0, session: 1 });
    expect(sprintOn(days, "2026-10-14", data)).toBeNull();
    expect(sprintOn(days, "2026-10-15", data)).toBeNull();
    expect(sprintOn(days, "2026-10-16", data)).toBeNull();
    expect(sprintOn(days, "2026-10-17", data)).toMatchObject({ index: 0, session: 2 });
    expect(sprintOn(days, "2026-10-18", data)).toBeNull();
    // once the listening sprint is reached, the Friday listening self-study gives way to it
    const listen = WORK_SPRINTS.findIndex((s) => s.id === "listen-work");
    const later = parsePlan(JSON.stringify({ sprints: dates(listen * SESSIONS_PER_SPRINT) }));
    expect(sprintOn(days, "2026-10-16", later)).toMatchObject({ index: listen });
  });
});
