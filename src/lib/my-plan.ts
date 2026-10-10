"use client";

import { useSyncExternalStore } from "react";
import { parsePlan, type ExamRecord, type PlanData } from "./my-plan-core";
import type { DayPicks } from "./today";

const KEY = "ce:plan:v1";
const EMPTY: PlanData = parsePlan(null);

let cache: PlanData | undefined;
const listeners = new Set<() => void>();

function read(): PlanData {
  if (cache !== undefined) return cache;
  try {
    cache = parsePlan(window.localStorage.getItem(KEY));
  } catch {
    cache = EMPTY;
  }
  return cache;
}

function write(next: PlanData) {
  cache = next;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // storage unavailable: the plan lasts until the tab is closed
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY || e.key === null) {
      cache = undefined;
      listener();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

export function usePlan(): PlanData {
  return useSyncExternalStore(subscribe, read, () => EMPTY);
}

export const plan = {
  toggleTick(id: string) {
    const now = read();
    write({ ...now, done: now.done.includes(id) ? now.done.filter((x) => x !== id) : [...now.done, id] });
  },
  /** hours studied in the week starting on that Monday; 0 removes the entry */
  setWeekHours(week: string, hours: number) {
    const now = read();
    const next = { ...now.hours };
    if (hours > 0) next[week] = hours;
    else delete next[week];
    write({ ...now, hours: next });
  },
  /** starts a day: keeps its picks for the rest of that day */
  startDay(date: string, picks: DayPicks) {
    const now = read();
    if (now.day?.date === date) return;
    // the day being replaced goes into the history, so it can be reviewed later
    const history = now.day && !now.history.some((h) => h.date === now.day!.date) ? [...now.history, { date: now.day.date, main: now.day.picks.main, ...(now.day.done.length ? { done: now.day.done } : {}) }].slice(-400) : now.history;
    write({ ...now, history, day: { date, picks, done: [] } });
  },
  toggleDayTask(date: string, id: string) {
    const now = read();
    if (now.day?.date !== date) return;
    const done = now.day.done.includes(id) ? now.day.done.filter((x) => x !== id) : [...now.day.done, id];
    write({ ...now, day: { ...now.day, done } });
  },
  saveReview(date: string, score: number) {
    const now = read();
    write({ ...now, reviews: { ...now.reviews, [date]: { score, at: new Date().toISOString() } } });
  },
  saveExam(level: string, record: ExamRecord) {
    const now = read();
    const used = now.used[level] ?? [];
    write({
      ...now,
      exams: { ...now.exams, [level]: record },
      used: record.sample && !used.includes(record.sample) ? { ...now.used, [level]: [...used, record.sample] } : now.used,
    });
  },
};
