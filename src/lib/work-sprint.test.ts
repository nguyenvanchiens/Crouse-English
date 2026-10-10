import { describe, expect, it } from "vitest";
import { SESSIONS_PER_SPRINT, SPRINT_HOURS, SPRINT_MINUTES, WORK_SPRINTS } from "@/content/work-sprints";
import { parsePlan } from "./my-plan-core";
import type { ScheduleDay } from "./schedule";
import { sprintAt, sprintOn, sprintSessionsDone } from "./work-sprint";

const day = (date: string, weekday: number, self = true): ScheduleDay => ({
  date,
  weekday,
  stage: 0,
  main: { kind: "week-review" },
  selfStudy: self ? { title: "x", minutes: 40, steps: ["x"] } : null,
});

describe("work-English sprints", () => {
  it("are 20 hours each, in sessions of 45 minutes, with links and steps", () => {
    expect(SESSIONS_PER_SPRINT * SPRINT_MINUTES).toBeGreaterThanOrEqual(SPRINT_HOURS * 60);
    for (const s of WORK_SPRINTS) {
      expect(s.sessions.length, s.id).toBeGreaterThanOrEqual(3);
      expect(s.links.every((l) => l.href.startsWith("https://")), s.id).toBe(true);
      for (const x of s.sessions) expect(x.steps.length, `${s.id} ${x.title}`).toBeGreaterThanOrEqual(3);
    }
  });

  it("moves to the next sprint after 20 hours and stops after the last", () => {
    expect(sprintAt(0)).toMatchObject({ index: 0, session: 0, hours: 0 });
    expect(sprintAt(SESSIONS_PER_SPRINT - 1)).toMatchObject({ index: 0, session: SESSIONS_PER_SPRINT - 1 });
    expect(sprintAt(SESSIONS_PER_SPRINT)).toMatchObject({ index: 1, session: 0 });
    expect(sprintAt(4)!.hours).toBe(3);
    expect(sprintAt(SESSIONS_PER_SPRINT * WORK_SPRINTS.length)).toBeNull();
  });

  it("counts sessions ticked on earlier days, kept in the day history", () => {
    const data = parsePlan(JSON.stringify({
      history: [
        { date: "2026-10-05", main: { kind: "week-review" }, done: ["sprint", "vocab"] },
        { date: "2026-10-06", main: { kind: "week-review" }, done: ["vocab"] },
        { date: "2026-10-07", main: { kind: "week-review" }, done: ["sprint"] },
      ],
      day: { date: "2026-10-08", picks: { main: { kind: "week-review" } }, done: ["sprint"] },
    }));
    expect(data.history[0].done).toEqual(["sprint", "vocab"]);
    expect(data.history[1].done).toEqual(["vocab"]);
    expect(sprintSessionsDone(data)).toBe(2);
  });

  it("puts a session on study days with self-study (not Sundays), counting the days ahead as done", () => {
    const data = parsePlan(JSON.stringify({ history: [{ date: "2026-10-03", main: { kind: "week-review" }, done: ["sprint"] }] }));
    const days = [day("2026-10-10", 6), day("2026-10-11", 0), day("2026-10-12", 1, false), day("2026-10-13", 2)];
    expect(sprintOn(days, "2026-10-10", data)).toMatchObject({ index: 0, session: 1 });
    expect(sprintOn(days, "2026-10-11", data)).toBeNull();
    expect(sprintOn(days, "2026-10-12", data)).toBeNull();
    expect(sprintOn(days, "2026-10-13", data)).toMatchObject({ index: 0, session: 2 });
  });
});
