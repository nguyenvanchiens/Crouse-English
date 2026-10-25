"use client";

import Link from "next/link";
import { Flame } from "lucide-react";
import { useProgress } from "@/lib/progress";
import { displayStreak, todayKey } from "@/lib/progress-core";
import { isReturning } from "./dashboard";

/**
 * The header's call to action: "Bắt đầu" for a newcomer; for a learner who has started, their streak, which
 * leads back to the dashboard. The flame is lit once today counts, grey while the streak is at risk.
 */
export function HeaderCta() {
  const { state, ready } = useProgress();
  if (ready && isReturning(state)) {
    const today = todayKey();
    const streak = displayStreak(state.streak, today, state.rewards.freezes);
    const lit = state.streak.lastDay === today;
    return (
      <Link
        href="/"
        aria-label={`Chuỗi ${streak} ngày học${lit ? ", hôm nay đã học" : ", hôm nay chưa học"}. Về trang học của tôi`}
        title={lit ? "Hôm nay đã học" : "Hôm nay chưa học: học vài phút để giữ chuỗi"}
        className={`inline-flex min-h-11 items-center gap-1.5 rounded-full border-2 border-ink px-3 font-display text-lg font-extrabold tabular-nums ${lit ? "bg-tangerine-soft" : "bg-card"} hover:bg-sun-soft`}
      >
        <Flame className={`size-5 ${lit ? "fill-tangerine text-tangerine-deep" : "text-ink-soft"}`} aria-hidden />
        {streak}
      </Link>
    );
  }
  return (
    <Link href="/bat-dau" className="btn btn-primary min-h-11 whitespace-nowrap px-3 text-base sm:px-4">
      <span className="sm:hidden">Bắt đầu</span>
      <span className="hidden sm:inline">Bắt đầu học</span>
    </Link>
  );
}
