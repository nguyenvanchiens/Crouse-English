"use client";

import { useSyncExternalStore } from "react";

/** Ticks on the personal study plan ("g:<lesson>" grammar reviewed, "d:<id>" sentence drill understood). */
const KEY = "ce:plan:v1";
const EMPTY: string[] = [];

let cache: string[] | undefined;
const listeners = new Set<() => void>();

export function parsePlan(raw: string | null): string[] {
  if (!raw) return EMPTY;
  try {
    const d: unknown = JSON.parse(raw);
    const done = typeof d === "object" && d !== null ? (d as { done?: unknown }).done : null;
    return Array.isArray(done) ? [...new Set(done.filter((x): x is string => typeof x === "string"))] : EMPTY;
  } catch {
    return EMPTY;
  }
}

function read(): string[] {
  if (cache !== undefined) return cache;
  try {
    cache = parsePlan(window.localStorage.getItem(KEY));
  } catch {
    cache = EMPTY;
  }
  return cache;
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

export function usePlanTicks(): string[] {
  return useSyncExternalStore(subscribe, read, () => EMPTY);
}

export function togglePlanTick(id: string) {
  const now = read();
  cache = now.includes(id) ? now.filter((x) => x !== id) : [...now, id];
  try {
    window.localStorage.setItem(KEY, JSON.stringify({ done: cache }));
  } catch {
    // storage unavailable: ticks last until the tab is closed
  }
  listeners.forEach((l) => l());
}
