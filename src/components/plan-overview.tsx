"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, Clock, ExternalLink, Flame, Lock, Target } from "lucide-react";
import { PLAN_START } from "@/content/my-plan";
import { COVERAGE, PARETO_RULES, PARETO_SOURCES } from "@/content/pareto";
import { WEEKDAY_VI } from "@/content/today";
import { SPRINT_HOURS, SPRINT_MINUTES, WORK_SPRINTS } from "@/content/work-sprints";
import { useAuth } from "@/lib/auth";
import { usePlan } from "@/lib/my-plan";
import { weekKey } from "@/lib/my-plan-core";
import { planStage, weekTarget, type PlanInput } from "@/lib/plan-stage";
import { displayStreak, isDue, todayKey } from "@/lib/progress-core";
import { useProgress } from "@/lib/progress";
import { buildSchedule, type DayMain } from "@/lib/schedule";
import { daysBetween, describeDay, parseDayKey } from "@/lib/schedule-describe";
import { sprintProgress } from "@/lib/work-sprint";
import { InstallApp } from "@/components/install-app";
import { VoiceSettings } from "@/components/voice-settings";
import { ProgressBar } from "@/components/ui/progress-bar";

const dmy = (k: string) => `${k.slice(8, 10)}/${k.slice(5, 7)}/${k.slice(0, 4)}`;
const dm = (k: string) => `${k.slice(8, 10)}/${k.slice(5, 7)}`;
const pct = (a: number, b: number) => (b ? Math.round((a / b) * 100) : 0);

/** One screen with the whole plan: today, the stages to C1, the next tests, habits, work English and 80/20. */
export function PlanOverview({ input }: { input: PlanInput }) {
  const { session, ready } = useAuth();
  const { state, ready: progressReady } = useProgress();
  const data = usePlan();

  if (!ready || !progressReady) return <div className="clay h-96 animate-pulse bg-card" aria-hidden />;

  if (!session) {
    return (
      <div className="clay mx-auto max-w-xl p-8 text-center">
        <Lock className="mx-auto size-10 text-ink-soft" aria-hidden />
        <h1 className="mt-4 font-display text-4xl font-extrabold">Trang riêng</h1>
        <p className="mt-3 text-lg text-ink-soft">Trang này chỉ hiện sau khi đăng nhập.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/dang-nhap" className="btn btn-primary">Đăng nhập</Link>
        </div>
      </div>
    );
  }

  const { grammar, ipa, levels } = input;
  const today = todayKey();
  const first = today < PLAN_START ? PLAN_START : today;
  const stage = planStage(input, state, data);
  const days = buildSchedule(parseDayKey(first), { input, stage, state, data });
  const finish = days[days.length - 1].date;
  const dayNo = daysBetween(PLAN_START, first) + 1;
  const totalDays = daysBetween(PLAN_START, finish) + 1;
  const todayEntry = days[0];

  // the stages: the base, then each level, with the dates the calendar gives them
  const range = (s: number) => {
    const mine = days.filter((d) => d.stage === s);
    return mine.length ? { from: mine[0].date, to: mine[mine.length - 1].date } : null;
  };
  const stages = [
    {
      name: "Chặng nền: ngữ pháp A1 và phát âm",
      done: stage.grammarDone + stage.ipaDone,
      total: grammar.length + ipa.length,
      passed: stage.baseDone,
      current: !stage.baseDone,
      range: range(-1),
    },
    ...levels.map((l, i) => ({
      name: `${l.level}: ${l.title}`,
      done: stage.statuses[i].done,
      total: stage.statuses[i].toStudy,
      passed: stage.statuses[i].passed,
      current: stage.baseDone && stage.current === i,
      range: range(i),
    })),
  ];
  const passedCount = stages.filter((s) => s.passed).length;

  const isTest = (m: DayMain) => m.kind === "final" || m.kind === "placement" || (m.kind === "exam" && m.part !== "oral");
  const tests = days.filter((d) => isTest(d.main)).slice(0, 4);

  const streak = displayStreak(state.streak, today, state.rewards.freezes);
  const hoursThisWeek = data.hours[weekKey(new Date())] ?? 0;
  const target = weekTarget(stage.current, levels);
  const inReview = Object.keys(state.srs).length;
  const due = Object.values(state.srs).filter((c) => isDue(c, today)).length;

  return (
    <div className="space-y-12">
      <header>
        <h1 className="font-display text-5xl font-extrabold leading-tight">Tổng quan</h1>
        <p className="mt-3 max-w-3xl text-lg">
          {today < PLAN_START ? (
            <>Lộ trình bắt đầu ngày <strong>{dmy(PLAN_START)}</strong>.</>
          ) : (
            <>
              Hôm nay là <strong>ngày {dayNo}</strong> trên khoảng {totalDays} ngày của lộ trình.
            </>
          )}{" "}
          Nếu đi đúng lịch, bạn về đích C1 vào khoảng <strong>{dmy(finish)}</strong>.
        </p>
        <div className="mt-4 max-w-xl">
          <p className="text-sm font-semibold">Đã qua {passedCount}/{stages.length} chặng</p>
          <ProgressBar className="mt-1.5" value={pct(passedCount, stages.length)} label={`Đã qua ${passedCount}/${stages.length} chặng`} />
        </div>
      </header>

      <section aria-labelledby="ov-today" className="rounded-[1.5rem] border-[2.5px] border-ink bg-sun p-6 shadow-[0_6px_0_0_var(--color-ink)] sm:p-8">
        <h2 id="ov-today" className="font-display text-2xl font-bold">Hôm nay</h2>
        <p className="mt-2 text-lg">{describeDay(todayEntry.main, input)}</p>
        <Link href="/hom-nay" className="btn btn-primary mt-4">
          Mở việc hôm nay
          <ArrowRight className="size-5" aria-hidden />
        </Link>
      </section>

      <InstallApp />

      <section aria-labelledby="ov-voice" className="clay p-6 sm:p-8">
        <h2 id="ov-voice" className="font-display text-2xl font-bold">Giọng đọc trên máy này</h2>
        <div className="mt-4">
          <VoiceSettings />
        </div>
      </section>

      <section aria-labelledby="ov-habits">
        <h2 id="ov-habits" className="font-display text-3xl font-extrabold">Thói quen</h2>
        <dl className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="clay p-5">
            <dt className="flex items-center gap-2 text-sm font-semibold text-ink-soft"><Flame className="size-5 text-tangerine-deep" aria-hidden />Chuỗi ngày học</dt>
            <dd className="mt-1 font-display text-3xl font-extrabold">{streak} ngày</dd>
          </div>
          <div className="clay p-5">
            <dt className="flex items-center gap-2 text-sm font-semibold text-ink-soft"><Clock className="size-5 text-tangerine-deep" aria-hidden />Giờ học tuần này</dt>
            <dd className="mt-1 font-display text-3xl font-extrabold">{hoursThisWeek.toLocaleString("vi-VN")}/{target} giờ</dd>
            <dd className="mt-1 text-sm"><Link href="/lo-trinh-cua-toi#hours" className="underline underline-offset-4">Ghi giờ học</Link></dd>
          </div>
          <div className="clay p-5">
            <dt className="flex items-center gap-2 text-sm font-semibold text-ink-soft"><BookOpen className="size-5 text-tangerine-deep" aria-hidden />Từ trong lịch ôn</dt>
            <dd className="mt-1 font-display text-3xl font-extrabold">{inReview} từ</dd>
            <dd className="mt-1 text-sm">{due > 0 ? `${due} từ đến hạn hôm nay` : "Không có từ đến hạn"}</dd>
          </div>
          <div className="clay p-5">
            <dt className="flex items-center gap-2 text-sm font-semibold text-ink-soft"><Target className="size-5 text-tangerine-deep" aria-hidden />Từ của tôi</dt>
            <dd className="mt-1 font-display text-3xl font-extrabold">{state.custom.length} từ</dd>
            <dd className="mt-1 text-sm"><Link href="/on-tap-tu-vung#tu-cua-toi" className="underline underline-offset-4">Thêm từ</Link></dd>
          </div>
        </dl>
      </section>

      <section aria-labelledby="ov-stages">
        <h2 id="ov-stages" className="font-display text-3xl font-extrabold">Các chặng tới C1</h2>
        <ol className="mt-5 grid gap-4">
          {stages.map((s) => (
            <li key={s.name} className={`clay p-5 ${s.current ? "border-tangerine-deep" : ""}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="font-display text-xl font-bold">{s.name}</p>
                <p className="text-sm font-semibold">
                  {s.passed ? "Đã qua" : s.current ? "Đang học" : "Sắp tới"}
                  {s.range && !s.passed && (s.current ? ` · đến ${dmy(s.range.to)}` : ` · ${dm(s.range.from)} – ${dmy(s.range.to)}`)}
                </p>
              </div>
              <p className="mt-2 text-sm">Đã học {s.done}/{s.total} bài</p>
              <ProgressBar className="mt-1.5" value={pct(s.done, s.total)} label={`${s.name}: đã học ${s.done}/${s.total} bài`} />
            </li>
          ))}
        </ol>
        <Link href="/lich-hoc" className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold underline underline-offset-4">
          <CalendarDays className="size-5" aria-hidden />
          Xem lịch từng ngày
        </Link>
      </section>

      {tests.length > 0 && (
        <section aria-labelledby="ov-tests">
          <h2 id="ov-tests" className="font-display text-3xl font-extrabold">Bài kiểm tra sắp tới</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {tests.map((d) => (
              <li key={d.date} className="clay p-5">
                <p className="text-sm font-semibold text-ink-soft">
                  {WEEKDAY_VI[d.weekday]}, {dmy(d.date)} · {d.date === today ? "hôm nay" : `còn ${daysBetween(today, d.date)} ngày`}
                </p>
                <p className="mt-1 font-semibold">{describeDay(d.main, input)}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section aria-labelledby="ov-work">
        <h2 id="ov-work" className="font-display text-3xl font-extrabold">Tiếng Anh cho công việc</h2>
        <p className="mt-2 max-w-3xl text-ink-soft">
          {WORK_SPRINTS.length} đợt, mỗi đợt {SPRINT_HOURS} giờ, {SPRINT_MINUTES} phút mỗi ngày thay cho phần tự học.
        </p>
        <ol className="mt-5 grid gap-4 sm:grid-cols-2">
          {WORK_SPRINTS.map((s, i) => {
            const { hours, percent } = sprintProgress(data, i);
            return (
              <li key={s.id} className="clay p-5">
                <p className="font-semibold">Đợt {i + 1}: {s.title}</p>
                <p className="mt-2 text-sm">Đã luyện {hours.toLocaleString("vi-VN")}/{SPRINT_HOURS} giờ</p>
                <ProgressBar className="mt-1.5" value={percent} label={`Đợt ${i + 1}: ${hours.toLocaleString("vi-VN")}/${SPRINT_HOURS} giờ`} />
              </li>
            );
          })}
        </ol>
      </section>

      <section aria-labelledby="ov-pareto">
        <h2 id="ov-pareto" className="font-display text-3xl font-extrabold">Nguyên tắc 80/20</h2>
        <p className="mt-2 max-w-3xl">
          Một phần nhỏ của tiếng Anh xuất hiện trong phần lớn những gì bạn đọc và nghe. Học phần đó trước thì dùng được sớm nhất. Theo Oxford, biết các họ từ thông dụng nhất (một họ từ gồm các dạng như work, works, worked, worker) thì phủ được bao nhiêu phần trăm chữ trong một văn bản tiếng Anh thông thường:
        </p>
        <figure className="clay mt-5 p-5">
          <figcaption className="sr-only">Độ phủ văn bản theo số họ từ thông dụng nhất (Oxford)</figcaption>
          <ul className="space-y-3">
            {COVERAGE.map((c) => (
              <li key={c.words} className="grid grid-cols-[6.5rem_1fr_3.5rem] items-center gap-3">
                <span className="text-sm font-semibold">{c.words}</span>
                <span className="h-4 overflow-hidden rounded-full border-2 border-ink bg-card" aria-hidden>
                  <span className="block h-full rounded-full bg-leaf" style={{ width: `${c.percent}%` }} />
                </span>
                <span className="text-right text-sm font-semibold">{c.percent.toLocaleString("vi-VN")}%</span>
              </li>
            ))}
          </ul>
        </figure>
        <ul className="mt-5 grid gap-4 md:grid-cols-2">
          {PARETO_RULES.map((r) => (
            <li key={r.title} className="clay p-5">
              <p className="font-display text-lg font-bold">{r.title}</p>
              <p className="mt-1">{r.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-ink-soft">Nguồn:</p>
        <ul className="mt-1 flex flex-wrap gap-x-5 gap-y-1 text-sm">
          {PARETO_SOURCES.map((s) => (
            <li key={s.href}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1 underline underline-offset-4">
                {s.label}
                <ExternalLink className="size-4" aria-hidden />
                <span className="sr-only">(mở trang mới)</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
