"use client";

import { useSyncExternalStore } from "react";
import { parsePlan, type ExamRecord, type PlanData } from "./my-plan-core";

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
