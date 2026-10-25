"use client";

import { BookOpenCheck, CalendarCheck, Check, Flame, Languages, Lock, Star, Target, Trophy, type LucideIcon } from "lucide-react";
import { badgeShelf, badges, type BadgeIcon } from "@/lib/badges";
import { progress } from "@/lib/progress";
import { DAILY_GOALS, lastDays, studySeconds, type ProgressState } from "@/lib/progress-core";

const minutes = (seconds: number) => Math.floor(seconds / 60);
const WEEKDAY = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
const weekday = (day: string) => {
  const [y, m, d] = day.split("-").map(Number);
  return WEEKDAY[new Date(y, m - 1, d).getDay()];
};

/** Today's minutes against the daily goal, as a ring, with the goal to choose. */
export function DailyGoal({ state, today }: { state: ProgressState; today: string }) {
  const done = minutes(studySeconds(state, today));
  const goal = state.dailyGoal;
  const ratio = Math.min(1, done / goal);
  const met = done >= goal;
  const R = 42;
  const C = 2 * Math.PI * R;
  return (
    <section aria-labelledby="goal-title" className="clay p-5 sm:p-6">
      <h2 id="goal-title" className="flex items-center gap-2 font-display text-xl font-extrabold">
        <Target className="size-5 text-tangerine-deep" aria-hidden />
        Mục tiêu hôm nay
      </h2>
      <div className="mt-4 flex items-center gap-5">
        <svg viewBox="0 0 100 100" className="size-28 shrink-0 -rotate-90" role="img" aria-label={`Đã học ${done} trên ${goal} phút hôm nay`}>
          <circle cx="50" cy="50" r={R} fill="none" stroke="var(--color-sky-deep)" strokeWidth="12" />
          <circle
            cx="50"
            cy="50"
            r={R}
            fill="none"
            stroke={met ? "var(--color-leaf)" : "var(--color-tangerine)"}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={C}
            strokeDashoffset={C * (1 - ratio)}
            className="transition-[stroke-dashoffset] duration-700"
          />
        </svg>
        <div>
          <p className="font-display text-4xl font-extrabold tabular-nums leading-none">
            {Math.min(done, 999)}
            <span className="text-xl text-ink-soft">/{goal} phút</span>
          </p>
          <p className="mt-2 font-semibold">{met ? "Đã đạt mục tiêu! Ngày mai gặp lại nhé." : done === 0 ? "Chưa bắt đầu. Vài phút là đủ." : `Còn ${goal - done} phút nữa.`}</p>
        </div>
      </div>
      <fieldset className="mt-5">
        <legend className="text-sm font-semibold text-ink-soft">Mỗi ngày tôi muốn học</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {DAILY_GOALS.map((g) => (
            <button
              key={g}
              type="button"
              aria-pressed={g === goal}
              onClick={() => progress.setDailyGoal(g)}
              className="min-h-11 min-w-14 rounded-full border-2 border-ink px-3 font-semibold aria-pressed:bg-ink aria-pressed:text-card hover:bg-sun-soft aria-pressed:hover:bg-ink"
            >
              {g} phút
            </button>
          ))}
        </div>
      </fieldset>
    </section>
  );
}

/** The last seven days: minutes a day against the goal. */
export function WeekChart({ state, today }: { state: ProgressState; today: string }) {
  const days = lastDays(today, 7);
  const values = days.map((d) => minutes(studySeconds(state, d)));
  const top = Math.max(state.dailyGoal, ...values);
  const total = values.reduce((a, b) => a + b, 0);
  const met = values.filter((v) => v >= state.dailyGoal).length;
  return (
    <section aria-labelledby="week-title" className="clay p-5 sm:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 id="week-title" className="flex items-center gap-2 font-display text-xl font-extrabold">
          <CalendarCheck className="size-5 text-grape" aria-hidden />7 ngày qua
        </h2>
        <p className="text-sm font-semibold text-ink-soft">
          {total} phút · đạt mục tiêu {met}/7 ngày
        </p>
      </div>
      <ol className="mt-4 grid h-36 grid-cols-7 items-end gap-2" aria-label="Số phút học mỗi ngày">
        {days.map((d, i) => {
          const v = values[i];
          const reached = v >= state.dailyGoal;
          return (
            <li key={d} className="flex h-full flex-col items-center justify-end gap-1">
              <span className="text-[0.8125rem] font-semibold tabular-nums text-ink-soft">{v > 0 ? v : ""}</span>
              <span
                className={`w-full max-w-10 rounded-t-lg border-2 border-b-0 border-ink ${reached ? "bg-leaf" : v > 0 ? "bg-tangerine" : "bg-sky-deep"}`}
                style={{ height: `${Math.max(6, (v / top) * 100)}%` }}
                aria-hidden
              />
              <span className={`text-sm font-semibold ${d === today ? "text-ink" : "text-ink-soft"}`}>{d === today ? "Nay" : weekday(d)}</span>
              <span className="sr-only">
                {d === today ? "Hôm nay" : weekday(d)}: {v} phút{reached ? ", đạt mục tiêu" : ""}
              </span>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

const BADGE_ICON: Record<BadgeIcon, LucideIcon> = { lesson: BookOpenCheck, flame: Flame, words: Languages, target: Target, trophy: Trophy, star: Star, calendar: CalendarCheck };

/** Badges earned, and the next few to reach with how far along the learner is. */
export function BadgeShelf({ state, nextCount = 3 }: { state: ProgressState; nextCount?: number }) {
  const { earned, next } = badgeShelf(badges(state));
  return (
    <section aria-labelledby="badges-title" className="clay p-5 sm:p-6">
      <h2 id="badges-title" className="flex items-center gap-2 font-display text-xl font-extrabold">
        <Trophy className="size-5 text-tangerine-deep" aria-hidden />
        Huy hiệu
        <span className="text-base text-ink-soft">({earned.length})</span>
      </h2>
      {earned.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-3">
          {earned.map((b) => {
            const Icon = BADGE_ICON[b.icon];
            return (
              <li key={b.id} className="flex w-20 flex-col items-center text-center" title={b.how}>
                <span className="relative grid size-14 place-items-center rounded-full border-[2.5px] border-ink bg-sun shadow-[0_3px_0_0_var(--color-ink)]">
                  <Icon className="size-7" aria-hidden />
                  <Check className="absolute -bottom-1 -right-1 size-5 rounded-full border-2 border-ink bg-leaf p-0.5 text-card" strokeWidth={3} aria-hidden />
                </span>
                <span className="mt-1.5 text-sm font-semibold leading-tight">{b.name}</span>
              </li>
            );
          })}
        </ul>
      )}
      {next.length > 0 && (
        <>
          <h3 className="mt-5 text-sm font-semibold text-ink-soft">Sắp đạt</h3>
          <ul className="mt-2 space-y-2">
            {next.slice(0, nextCount).map((b) => {
              const Icon = BADGE_ICON[b.icon];
              return (
                <li key={b.id} className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border-2 border-dashed border-ink/40 bg-sky text-ink-soft">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline justify-between gap-2">
                      <span className="font-semibold">
                        <Lock className="mr-1 inline size-3.5 align-[-2px] text-ink-soft" aria-hidden />
                        {b.name}
                      </span>
                      <span className="shrink-0 text-sm tabular-nums text-ink-soft">
                        {b.have}/{b.need}
                      </span>
                    </span>
                    <span className="mt-1 block h-2 overflow-hidden rounded-full bg-sky-deep" aria-hidden>
                      <span className="block h-full rounded-full bg-grape" style={{ width: `${(b.have / b.need) * 100}%` }} />
                    </span>
                    <span className="mt-0.5 block text-sm text-ink-soft">{b.how}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </section>
  );
}
