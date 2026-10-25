"use client";

import { useEffect, useRef, useState } from "react";
import { PartyPopper, X } from "lucide-react";
import { useProgress } from "@/lib/progress";
import { displayStreak, studySeconds, todayKey } from "@/lib/progress-core";

/**
 * A small celebration the moment today's study time reaches the daily goal (while learning, on any page). Only
 * on the crossing itself: opening a page after the goal was met shows nothing.
 */
export function GoalToast() {
  const { state, ready } = useProgress();
  const today = todayKey();
  const seconds = studySeconds(state, today);
  const goal = state.dailyGoal * 60;
  const seen = useRef<number | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (!ready) return;
    const before = seen.current;
    seen.current = seconds;
    if (before !== null && before < goal && seconds >= goal) {
      setShown(true);
      const t = setTimeout(() => setShown(false), 7000);
      return () => clearTimeout(t);
    }
  }, [ready, seconds, goal]);

  return (
    <div role="status" aria-live="polite" className="pointer-events-none fixed inset-x-0 top-20 z-50 flex justify-center px-4">
      {shown && (
        <div className="victory-pop pointer-events-auto flex max-w-sm items-center gap-3 rounded-2xl border-[2.5px] border-ink bg-leaf-soft px-4 py-3 shadow-[0_6px_0_0_var(--color-ink)] [animation-delay:0ms]">
          <PartyPopper className="size-8 shrink-0 text-tangerine-deep" aria-hidden />
          <p className="font-semibold">
            <span className="block font-display text-lg font-extrabold">Đạt mục tiêu hôm nay!</span>
            {state.dailyGoal} phút xong. Chuỗi {displayStreak(state.streak, today, state.rewards.freezes)} ngày 🔥
          </p>
          <button type="button" onClick={() => setShown(false)} className="grid size-11 shrink-0 place-items-center rounded-full hover:bg-card" aria-label="Đóng">
            <X className="size-5" aria-hidden />
          </button>
        </div>
      )}
    </div>
  );
}
