"use client";

import { useSyncExternalStore } from "react";
import type { Level } from "@/content/types";
import {
  STORAGE_KEY,
  applyCompleteLesson,
  applyEnroll,
  applyLearnerName,
  applyPlacement,
  emptyState,
  parseState,
  type ProgressState,
} from "./progress-core";

let cache: ProgressState | null = null;
let persistent = true;
const listeners = new Set<() => void>();
const SERVER_STATE = emptyState();

function read(): ProgressState {
  if (cache) return cache;
  try {
    cache = parseState(window.localStorage.getItem(STORAGE_KEY));
  } catch {
    persistent = false;
    cache = emptyState();
  }
  return cache;
}

function write(next: ProgressState) {
  cache = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    persistent = false;
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    // key === null means another tab called localStorage.clear()
    if (e.key === STORAGE_KEY || e.key === null) {
      cache = null;
      listener();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

const noopSubscribe = () => () => {};

export const __test = { read, subscribe };

export function useProgress() {
  const state = useSyncExternalStore(subscribe, read, () => SERVER_STATE);
  const ready = useSyncExternalStore(noopSubscribe, () => true, () => false);
  return { state, ready, persistent };
}

export const progress = {
  enroll(courseSlug: string) {
    write(applyEnroll(read(), courseSlug));
  },
  completeLesson(courseSlug: string, lessonSlug: string, score: number | null): ProgressState {
    const next = applyCompleteLesson(read(), courseSlug, lessonSlug, score, new Date());
    write(next);
    return next;
  },
  setLearnerName(name: string) {
    write(applyLearnerName(read(), name));
  },
  savePlacement(level: Level, startLevel: Level, score: number) {
    write(applyPlacement(read(), level, startLevel, score, new Date()));
  },
};
