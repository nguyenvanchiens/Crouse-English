"use client";

import { useSyncExternalStore } from "react";
import { AUTH_KEY, checkCredentials, parseSession, type Session } from "./auth-core";

let cache: Session | null | undefined;
const listeners = new Set<() => void>();

function read(): Session | null {
  if (cache !== undefined) return cache;
  try {
    cache = parseSession(window.localStorage.getItem(AUTH_KEY));
  } catch {
    cache = null;
  }
  return cache;
}

function write(next: Session | null) {
  cache = next;
  try {
    if (next) window.localStorage.setItem(AUTH_KEY, JSON.stringify(next));
    else window.localStorage.removeItem(AUTH_KEY);
  } catch {
    // storage unavailable: the session lasts until the tab is closed
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key === AUTH_KEY || e.key === null) {
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

const noopSubscribe = () => () => {};

export function useAuth() {
  const session = useSyncExternalStore(subscribe, read, () => null);
  const ready = useSyncExternalStore(noopSubscribe, () => true, () => false);
  return { session, ready };
}

export const auth = {
  /** true when signed in */
  async login(user: string, password: string): Promise<boolean> {
    const name = await checkCredentials(user, password);
    if (!name) return false;
    write({ user: name, at: new Date().toISOString() });
    return true;
  },
  logout() {
    write(null);
  },
};
