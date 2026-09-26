"use client";

import { parseSeen, remember } from "./test-draw";

/** Test items the learner has met, per test ("placement", "final:<course>"), oldest first. */
const KEY = "ce:seen:v1";

function readAll(): Record<string, string[]> {
  try {
    return parseSeen(window.localStorage.getItem(KEY));
  } catch {
    return {};
  }
}

export function getSeen(test: string): string[] {
  if (typeof window === "undefined") return [];
  return readAll()[test] ?? [];
}

export function addSeen(test: string, ids: string[]) {
  try {
    const all = readAll();
    all[test] = remember(all[test] ?? [], ids);
    window.localStorage.setItem(KEY, JSON.stringify(all));
  } catch {
    // storage unavailable: the next attempt may repeat items, nothing else breaks
  }
}
