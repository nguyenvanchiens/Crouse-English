"use client";

import Link from "next/link";
import { ArrowRight, Flame, Gamepad2, Layers } from "lucide-react";
import type { Course } from "@/content/types";
import { planNextStep } from "@/components/next-step";
import { ProgressBar } from "@/components/ui/progress-bar";
import { lastDays, studySeconds, todayKey, wordsRemembered, displayStreak, type ProgressState } from "@/lib/progress-core";
import { BadgeShelf, DailyGoal, WeekChart } from "./progress-widgets";

/** Whether the learner has done anything yet: a returning learner gets the dashboard instead of the pitch. */
export const isReturning = (s: ProgressState) =>
  Object.keys(s.lessons).length > 0 || s.enrolled.length > 0 || Object.keys(s.study).length > 0 || s.placement !== null || s.points.earned > 0;

/** The streak line at the top: kept today, at risk, or lost. */
function streakNote(state: ProgressState, today: string): { tone: string; text: string } {
  const streak = displayStreak(state.streak, today, state.rewards.freezes);
  const studiedToday = state.streak.lastDay === today;
  if (studiedToday) return { tone: "bg-leaf-soft", text: `Đã giữ chuỗi ${streak} ngày. Mai học tiếp để lên ${streak + 1}!` };
  if (streak > 0) return { tone: "bg-tangerine-soft", text: `Hôm nay bạn chưa học. Học vài phút để giữ chuỗi ${streak} ngày.` };
  if (state.bestStreak > 1) return { tone: "bg-sun-soft", text: `Chuỗi cũ của bạn là ${state.bestStreak} ngày. Bắt đầu chuỗi mới hôm nay nhé.` };
  return { tone: "bg-sun-soft", text: "Học mỗi ngày một chút, chuỗi ngày học sẽ dài dần." };
}

/**
 * The home page for a learner who has started: what to do now (continue the lesson, review due words, a quick
 * game), today's goal, the week, and badges. A first visit still gets the course pitch.
 */
export function Dashboard({ courses, state }: { courses: Course[]; state: ProgressState }) {
  const today = todayKey();
  const { step, current, dueWords } = planNextStep(courses, state);
  const streak = displayStreak(state.streak, today, state.rewards.freezes);
  const note = streakNote(state, today);
  const weekMinutes = Math.floor(lastDays(today, 7).reduce((n, d) => n + studySeconds(state, d), 0) / 60);
  const lessonsDone = Object.values(state.lessons).filter((l) => l.done).length;
  const gameLevel = (current?.c.level ?? state.placement?.startLevel ?? "A1").toLowerCase();

  return (
    <section aria-labelledby="dash-title" className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:pt-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-semibold text-ink-soft">Chào {state.learnerName ?? "bạn"} 👋</p>
          <h1 id="dash-title" className="mt-1 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
            Hôm nay học gì?
          </h1>
        </div>
        <p className="flex items-center gap-2 rounded-full border-[2.5px] border-ink bg-card px-4 py-2 font-display text-2xl font-extrabold">
          <Flame className={`size-7 ${state.streak.lastDay === today ? "fill-tangerine text-tangerine-deep" : "text-ink-soft"}`} aria-hidden />
          {streak}
          <span className="text-base font-bold text-ink-soft">ngày liên tiếp</span>
        </p>
      </div>
      <p role="status" className={`mt-4 rounded-2xl border-2 border-ink px-4 py-3 font-semibold ${note.tone}`}>{note.text}</p>

      {/* phones: continue, goal, short tasks, numbers, week, badges; wide screens: two balanced columns */}
      <div className="mt-6 grid items-start gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="lg:col-start-1 lg:row-start-1">
          {/* the one thing to do now */}
          <div className="clay bg-sun p-6 sm:p-7">
            <p className="text-sm font-bold uppercase tracking-wide">Tiếp tục</p>
            <h2 className="mt-1 font-display text-3xl font-extrabold leading-tight">{step.title}</h2>
            {current && (
              <div className="mt-3 max-w-md">
                <p className="text-sm font-semibold">
                  {current.c.title}: {current.p.done}/{current.p.total} bài
                </p>
                <ProgressBar value={current.p.percent} label={`Tiến độ ${current.c.title}: ${current.p.percent}%`} className="mt-1" />
              </div>
            )}
            {!current && <p className="mt-2 max-w-xl">{step.body}</p>}
            <Link href={step.href} className="btn btn-primary mt-5 w-full text-lg sm:w-auto">
              {step.cta}
              <ArrowRight className="size-5" aria-hidden />
            </Link>
          </div>
        </div>
        <div className="lg:col-start-2 lg:row-start-1">
          <DailyGoal state={state} today={today} />
        </div>
        <div className="lg:col-start-1 lg:row-start-2">
          {/* short things that still count for the day */}
            <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/on-tap-tu-vung" className="clay flex items-center gap-4 p-5 transition-transform duration-200 hover:-translate-y-0.5">
              <Layers className="size-9 shrink-0 text-tangerine-deep" aria-hidden />
              <span>
                <span className="block font-display text-xl font-extrabold">{dueWords > 0 ? `Ôn ${dueWords} từ` : "Ôn từ vựng"}</span>
                <span className="block text-ink-soft">{dueWords > 0 ? `Khoảng ${Math.max(1, Math.ceil(dueWords / 6))} phút` : "Không có từ đến hạn hôm nay"}</span>
              </span>
            </Link>
            <Link href={`/tro-choi/lo-trinh/${gameLevel}`} className="clay flex items-center gap-4 p-5 transition-transform duration-200 hover:-translate-y-0.5">
              <Gamepad2 className="size-9 shrink-0 text-grape" aria-hidden />
              <span>
                <span className="block font-display text-xl font-extrabold">Chơi một lượt</span>
                <span className="block text-ink-soft">Khoảng 3 phút, vẫn tính vào mục tiêu</span>
            </span>
          </Link>
          </div>
        </div>
        <div className="lg:col-start-2 lg:row-start-2">
          <dl className="grid grid-cols-3 gap-3 text-center">
            {[
              [weekMinutes, "phút tuần này"],
              [wordsRemembered(state), "từ đã nhớ"],
              [lessonsDone, "bài đã học"],
            ].map(([n, label]) => (
              <div key={label} className="clay-soft px-2 py-3">
                <dd className="font-display text-3xl font-extrabold tabular-nums">{n}</dd>
                <dt className="text-sm font-semibold text-ink-soft">{label}</dt>
              </div>
            ))}
          </dl>
        </div>
        <div className="lg:col-start-1 lg:row-start-3">
          <WeekChart state={state} today={today} />
        </div>
        <div className="lg:col-start-2 lg:row-start-3">
          <BadgeShelf state={state} />
        </div>
      </div>
    </section>
  );
}
