import { SESSIONS_PER_SPRINT, SPRINT_MINUTES, WORK_SPRINTS, type WorkSprint } from "@/content/work-sprints";
import type { PlanData } from "./my-plan-core";
import type { ScheduleDay } from "./schedule";

/** Where the learner is in the work-English sprints on a day. */
export interface SprintPlace {
  sprint: WorkSprint;
  /** 0-based sprint number */
  index: number;
  /** 0-based session within the sprint */
  session: number;
  /** hours practised in this sprint before this session */
  hours: number;
}

/** sessions ticked as done on days before today */
export function sprintSessionsDone(data: PlanData): number {
  return data.history.filter((h) => h.done?.includes("sprint")).length;
}

/** The sprint session for the n-th session overall (0-based), or null once every sprint is done. */
export function sprintAt(n: number): SprintPlace | null {
  const index = Math.floor(n / SESSIONS_PER_SPRINT);
  if (index >= WORK_SPRINTS.length) return null;
  const session = n % SESSIONS_PER_SPRINT;
  return { sprint: WORK_SPRINTS[index], index, session, hours: Math.round(((session * SPRINT_MINUTES) / 60) * 10) / 10 };
}

/** a calendar day that holds a sprint session: a study day with self-study, not Sunday */
export const sprintDay = (d: ScheduleDay) => d.weekday !== 0 && d.selfStudy !== null;

/**
 * The sprint session of a calendar day. `days` is the calendar from today (or day 1) on. Sessions of earlier
 * days count from the learner's records; for a day ahead, every sprint day from today up to it is taken as
 * done, since the calendar assumes the plan is followed.
 */
export function sprintOn(days: ScheduleDay[], date: string, data: PlanData): SprintPlace | null {
  const day = days.find((d) => d.date === date);
  if (!day || !sprintDay(day)) return null;
  return sprintAt(sprintSessionsDone(data) + days.filter((d) => d.date < date && sprintDay(d)).length);
}
