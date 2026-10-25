"use client";

import { useEffect } from "react";
import { progress } from "./progress";

const TICK = 5;
/** after this long without a tap, key or scroll, the learner has stepped away: the clock stops */
const IDLE_AFTER = 60_000;
const FLUSH_EVERY = 30;

/**
 * Counts active study time on a page where the learner studies (a lesson, a game, the review) for the daily
 * goal and the week report. Only while the page is visible and the learner has done something in the last
 * minute, so a tab left open does not fill the goal.
 */
export function useStudyTimer() {
  useEffect(() => {
    let lastActive = Date.now();
    let pending = 0;
    const active = () => (lastActive = Date.now());
    const flush = () => {
      if (pending > 0) progress.addStudyTime(pending);
      pending = 0;
    };
    const tick = setInterval(() => {
      if (document.visibilityState !== "visible" || Date.now() - lastActive > IDLE_AFTER) return;
      pending += TICK;
      if (pending >= FLUSH_EVERY) flush();
    }, TICK * 1000);
    const onHide = () => document.visibilityState === "hidden" && flush();
    const events = ["pointerdown", "keydown", "scroll", "touchstart"] as const;
    events.forEach((e) => window.addEventListener(e, active, { passive: true }));
    document.addEventListener("visibilitychange", onHide);
    window.addEventListener("pagehide", flush);
    return () => {
      clearInterval(tick);
      flush();
      events.forEach((e) => window.removeEventListener(e, active));
      document.removeEventListener("visibilitychange", onHide);
      window.removeEventListener("pagehide", flush);
    };
  }, []);
}
