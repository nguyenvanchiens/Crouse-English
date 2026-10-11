import { LISTENING_KEPT_ON, LISTENING_SPRINT, SESSIONS_PER_SPRINT, SPRINT_HOURS, SPRINT_MINUTES, WORK_SPRINTS, type WorkSprint } from "@/content/work-sprints";
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

const hoursOf = (sessions: number) => Math.min(SPRINT_HOURS, Math.round(((sessions * SPRINT_MINUTES) / 60) * 10) / 10);

/**
 * Days with a sprint session done: the kept list, older records in the day history, and the current day
 * record (today's, or an earlier one not yet rolled into the history) when its session is ticked.
 */
export function sprintDates(data: PlanData): string[] {
  const dates = new Set(data.sprints);
  for (const h of data.history) if (h.done?.includes("sprint")) dates.add(h.date);
  if (data.day?.done.includes("sprint")) dates.add(data.day.date);
  return [...dates];
}

/** sessions done on days before `date` */
export const sprintSessionsBefore = (data: PlanData, date: string) => sprintDates(data).filter((d) => d < date).length;

/** Progress of sprint `i` from every session done so far. */
export function sprintProgress(data: PlanData, i: number): { sessions: number; hours: number; percent: number } {
  const sessions = Math.max(0, Math.min(SESSIONS_PER_SPRINT, sprintDates(data).length - i * SESSIONS_PER_SPRINT));
  return { sessions, hours: hoursOf(sessions), percent: (sessions / SESSIONS_PER_SPRINT) * 100 };
}

/** The sprint session for the n-th session overall (0-based), or null once every sprint is done. */
export function sprintAt(n: number): SprintPlace | null {
  const index = Math.floor(n / SESSIONS_PER_SPRINT);
  if (index >= WORK_SPRINTS.length) return null;
  const session = n % SESSIONS_PER_SPRINT;
  return { sprint: WORK_SPRINTS[index], index, session, hours: hoursOf(session) };
}

const LISTENING_INDEX = WORK_SPRINTS.findIndex((s) => s.id === LISTENING_SPRINT);

/**
 * Whether a calendar day can hold a session while the learner is on sprint `index`. Not on Sunday (the week
 * review), not on days that also teach a pronunciation lesson (their self-study is cut short), not on the
 * level's speaking self-study, and not on Friday's listening until the listening sprint begins.
 */
export function sprintDay(d: ScheduleDay, index: number): boolean {
  if (d.weekday === 0 || !d.selfStudy) return false;
  if (d.main.kind === "grammar" && d.main.ipa) return false;
  if (d.selfStudy.skill === "speak") return false;
  if (d.weekday === LISTENING_KEPT_ON && d.selfStudy.skill === "listen" && index < LISTENING_INDEX) return false;
  return true;
}

/**
 * The sprint session of a calendar day. `days` is the calendar from today (or day 1) on. Sessions done before
 * its first day count from the learner's records; every session day from then up to `date` is taken as done,
 * since the calendar assumes the plan is followed.
 */
export function sprintOn(days: ScheduleDay[], date: string, data: PlanData): SprintPlace | null {
  let n = sprintSessionsBefore(data, days[0]?.date ?? date);
  for (const d of days) {
    if (d.date > date) break;
    const place = sprintAt(n);
    if (!place) return null;
    if (sprintDay(d, place.index)) {
      if (d.date === date) return place;
      n++;
    } else if (d.date === date) return null;
  }
  return null;
}
