"use client";

import { useSyncExternalStore } from "react";

/** Best stars per game of the path, keyed by nodeId(); kept on this device. */
const KEY = "ce:path:v1";
type Stars = Record<string, number>;
const EMPTY: Stars = {};
let cache: Stars | null = null;
const listeners = new Set<() => void>();

export function parseStars(raw: string | null): Stars {
  try {
    const v = JSON.parse(raw ?? "{}");
    if (typeof v !== "object" || !v || Array.isArray(v)) return {};
    return Object.fromEntries(Object.entries(v).filter((e): e is [string, number] => typeof e[1] === "number" && e[1] >= 0 && e[1] <= 3).map(([k, n]) => [k, Math.floor(n)]));
  } catch {
    return {};
  }
}

function read(): Stars {
  if (cache) return cache;
  try {
    cache = parseStars(window.localStorage.getItem(KEY));
  } catch {
    cache = {};
  }
  return cache;
}

/** Keeps the best result of a game: replaying for fewer stars never loses any. */
export function recordStars(id: string, stars: number) {
  const now = read();
  if ((now[id] ?? 0) >= stars) return;
  cache = { ...now, [id]: stars };
  try {
    window.localStorage.setItem(KEY, JSON.stringify(cache));
  } catch {
    // storage unavailable: progress lasts for this visit
  }
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY || e.key === null) {
      cache = null;
      cb();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", onStorage);
  };
}

export function usePathStars(): Stars {
  return useSyncExternalStore(subscribe, read, () => EMPTY);
}
