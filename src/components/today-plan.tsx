"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { ArrowRight, Check, ChevronLeft, ChevronRight, Clock, ExternalLink, Flame, Lock, Sparkles } from "lucide-react";
import { ALL_DRILLS } from "@/content/drills";
import { PLAN_START } from "@/content/my-plan";
import { WEEKDAY_VI } from "@/content/today";
import { useAuth } from "@/lib/auth";
import { plan, usePlan } from "@/lib/my-plan";
import { planStage, type PlanInput } from "@/lib/plan-stage";
import { displayStreak, isDue, todayKey } from "@/lib/progress-core";
import { useProgress } from "@/lib/progress";
import { spacedDays, studyDays, taughtDays } from "@/lib/review-day";
import { buildSchedule, dayOf } from "@/lib/schedule";
import { addDayKey, daysBetween, describeDay, parseDayKey } from "@/lib/schedule-describe";
import { buildToday, pickDay, type TodayTask } from "@/lib/today";
import { ProgressBar } from "@/components/ui/progress-bar";

const dateVi = (key: string) => {
  const [y, m, d] = key.split("-").map(Number);
  return `${WEEKDAY_VI[new Date(y, m - 1, d).getDay()]}, ${String(d).padStart(2, "0")}/${String(m).padStart(2, "0")}/${y}`;
};

function TaskCard({ task, n, date, open, preview = false }: { task: TodayTask; n: number; date: string; open: boolean; preview?: boolean }) {
  return (
    <li className={`clay p-5 sm:p-6 ${task.done ? "bg-leaf-soft" : ""}`}>
      <div className="flex items-start gap-4">
        {task.auto || preview ? (
          <span
            className={`grid size-8 shrink-0 place-items-center rounded-full border-2 border-ink font-display font-bold ${task.done ? "bg-leaf text-card" : "bg-card"}`}
            aria-hidden
          >
            {task.done ? <Check className="size-5" /> : n}
          </span>
        ) : (
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => plan.toggleDayTask(date, task.id)}
            aria-label={`Đánh dấu xong: ${task.title}`}
            className="mt-1 size-7 shrink-0 accent-[var(--color-leaf)]"
          />
        )}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 text-sm font-semibold">
            <span className="inline-flex items-center gap-1 rounded-full border-2 border-ink bg-card px-2.5 py-0.5">
              <Clock className="size-4 text-tangerine-deep" aria-hidden />
              {task.minutes} phút
            </span>
            {task.essential && <span className="rounded-full border-2 border-ink bg-sun px-2.5 py-0.5">Tối thiểu</span>}
            {task.done && <span className="rounded-full border-2 border-ink bg-card px-2.5 py-0.5">Đã xong</span>}
          </div>
          <h2 className="mt-2 font-display text-xl font-bold leading-snug sm:text-2xl">
            <span className="sr-only">Việc {n}: </span>
            {task.title}
          </h2>
          <p className="mt-1 text-ink-soft">{task.why}</p>
          <details open={open} className="mt-3">
            <summary className="inline-flex min-h-11 cursor-pointer items-center font-semibold underline underline-offset-4">Làm thế nào</summary>
            <ol className="mt-2 max-w-3xl list-decimal space-y-1.5 pl-6">
              {task.steps.map((s) => (
                <li key={s} lang={s.startsWith("Câu: ") ? "en" : undefined}>
                  {s}
                </li>
              ))}
            </ol>
          </details>
          <div className="mt-4 flex flex-wrap gap-3">
            {task.links.map((l, i) =>
              l.external ? (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={`btn ${i === 0 && !task.done ? "btn-primary" : "btn-ghost"}`}>
                  {l.label}
                  <ExternalLink className="size-4" aria-hidden />
                  <span className="sr-only"> (mở trang mới)</span>
                </a>
              ) : (
                <Link key={l.href} href={l.href} className={`btn ${i === 0 && !task.done ? "btn-primary" : "btn-ghost"}`}>
                  {l.label}
                </Link>
              ),
            )}
          </div>
          {task.auto && !task.done && <p className="mt-3 text-sm text-ink-soft">Tự đánh dấu xong khi bạn làm xong trên trang.</p>}
        </div>
      </div>
    </li>
  );
}

const DAY_RE = /^\d{4}-\d{2}-\d{2}$/;

function DayNav({ view, first, today }: { view: string; first: string; today: string }) {
  const href = (k: string) => (k === today ? "/hom-nay" : `/hom-nay?ngay=${k}`);
  const prev = addDayKey(view, -1);
  return (
    <nav aria-label="Chọn ngày" className="flex flex-wrap items-center gap-3">
      {view > first ? (
        <Link href={href(prev)} className="btn btn-ghost">
          <ChevronLeft className="size-5" aria-hidden />
          {prev === today ? "Hôm nay" : "Ngày trước"}
        </Link>
      ) : null}
      {view !== today && view !== first && (
        <Link href="/hom-nay" className="btn btn-ghost">Về hôm nay</Link>
      )}
      <Link href={href(addDayKey(view, 1))} className="btn btn-ghost">
        {addDayKey(view, 1) === addDayKey(today, 1) ? "Ngày mai" : "Ngày sau"}
        <ChevronRight className="size-5" aria-hidden />
      </Link>
    </nav>
  );
}

export function TodayPlan({ input }: { input: PlanInput }) {
  const { grammar, ipa, levels } = input;
  const { session, ready } = useAuth();
  const { state, ready: progressReady } = useProgress();
  const data = usePlan();
  const param = useSearchParams().get("ngay");
  const loaded = ready && progressReady;
  const now = new Date();
  const today = todayKey(now);
  // the plan's first day still ahead, or today
  const first = today < PLAN_START ? PLAN_START : today;
  const view = param && DAY_RE.test(param) && param > first ? param : first;
  const live = view === today;
  const stage = planStage(input, state, data);
  const fresh = data.day?.date !== today;
  const todayPicks = fresh ? { main: pickDay(now, input, stage, state, data).main } : data.day!.picks;

  // today's picks are kept from its first visit
  const picksKey = JSON.stringify(todayPicks);
  useEffect(() => {
    if (loaded && session && fresh && today >= PLAN_START) plan.startDay(today, JSON.parse(picksKey));
  }, [loaded, session, fresh, today, picksKey]);

  if (!loaded) return <div className="clay h-96 animate-pulse bg-card" aria-hidden />;

  if (!session) {
    return (
      <div className="clay mx-auto max-w-xl p-8 text-center">
        <Lock className="mx-auto size-10 text-ink-soft" aria-hidden />
        <h1 className="mt-4 font-display text-4xl font-extrabold">Trang riêng</h1>
        <p className="mt-3 text-lg text-ink-soft">Trang này chỉ hiện sau khi đăng nhập.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/dang-nhap" className="btn btn-primary">Đăng nhập</Link>
          <Link href="/khoa-hoc" className="btn btn-ghost">Xem các khóa học</Link>
        </div>
      </div>
    );
  }

  // every day from the first one is read off the same calendar, recomputed from progress
  const schedule = buildSchedule(parseDayKey(first), { input, stage, state, data });
  const viewDate = parseDayKey(view);
  viewDate.setHours(9);
  const entry = dayOf(schedule, view) ?? schedule[schedule.length - 1];
  const picks = live ? todayPicks : { main: entry.main };
  // days already studied, and on a preview the calendar's teaching days before the viewed one
  const pastDays = studyDays(data, state, null, input, today).map((d) => d.date);
  const tasks = buildToday({
    date: viewDate,
    spaced: spacedDays(view, live ? pastDays.filter((d) => d < today) : [...new Set([...pastDays, ...taughtDays(schedule, input).filter((d) => d < view)])]),
    picks,
    ticked: live && !fresh ? data.day!.done : [],
    input,
    dayStage: entry.stage,
    stage,
    state,
    data,
    dueWords: Object.values(state.srs).filter((c) => isDue(c, view)).length,
    // today starts by reviewing the last day studied; a preview day by reviewing the day before it
    recap: live
      ? (() => {
          const prev = pastDays.find((d) => d < today);
          return prev ? { date: prev, done: data.reviews[prev]?.at.startsWith(today) === true } : undefined;
        })()
      : (() => {
          // the last day before this one that taught something (not a Sunday review)
          const prev = schedule.filter((d) => d.date < view && ["grammar", "base-review", "lesson", "consolidate"].includes(d.main.kind)).pop();
          return prev ? { date: prev.date, done: false } : undefined;
        })(),
  }).map((t) => (live ? t : { ...t, done: false }));
  const essential = tasks.filter((t) => t.essential);
  const done = tasks.filter((t) => t.done).length;
  const minutes = tasks.reduce((n, t) => n + t.minutes, 0);
  const minMinutes = essential.reduce((n, t) => n + t.minutes, 0);
  const essentialDone = live && essential.every((t) => t.done);
  const firstOpen = live ? tasks.findIndex((t) => !t.done) : 0;
  const streak = displayStreak(state.streak, today, state.rewards.freezes);
  const dayNo = daysBetween(PLAN_START, view) + 1;
  const tomorrow = addDayKey(view, 1);
  const tomorrowEntry = dayOf(schedule, tomorrow);
  const cur = stage.current >= 0 ? levels[stage.current] : null;
  const where = !stage.baseDone
    ? `Chặng nền: đã học ${stage.grammarDone}/${grammar.length} bài ngữ pháp A1 và ${stage.ipaDone}/${ipa.length} bài phát âm; đã hiểu ${stage.drillsDone}/${ALL_DRILLS.length} câu luyện tách câu.`
    : cur
      ? `Chặng ${stage.current + 1}: ${cur.title}, đã học ${stage.statuses[stage.current].done}/${stage.statuses[stage.current].toStudy} bài.`
      : "Bạn đã đi hết lộ trình.";
  const waitingDays = daysBetween(today, PLAN_START);

  return (
    <div className="space-y-10">
      <header>
        <p className="font-semibold text-ink-soft">
          {dateVi(view)} · Ngày thứ {dayNo} của lộ trình
        </p>
        <h1 className="mt-1 font-display text-5xl font-extrabold leading-tight">
          {live ? "Hôm nay học gì" : view === addDayKey(today, 1) ? "Ngày mai học gì" : `Ngày ${dayNo} học gì`}
        </h1>
        {!live && (
          <p className="mt-3 inline-block rounded-full border-2 border-ink bg-sky px-3 py-0.5 text-sm font-semibold">
            Xem trước: tính theo tiến độ hiện tại, sẽ tự dời nếu bạn học nhanh hay chậm hơn
          </p>
        )}
        <p className="mt-3 max-w-3xl text-lg">{where}</p>
        <div className="mt-5">
          <DayNav view={view} first={first} today={today} />
        </div>
        {today < PLAN_START && view === PLAN_START && (
          <div className="clay mt-6 p-6 sm:p-8">
            <h2 className="font-display text-2xl font-bold">Lộ trình bắt đầu {waitingDays === 1 ? "ngày mai" : `sau ${waitingDays} ngày`}: chuẩn bị</h2>
            <ul className="mt-3 max-w-3xl list-disc space-y-1.5 pl-6">
              <li>Một quyển vở để chép công thức ngữ pháp, ví dụ và làm sổ lỗi.</li>
              <li>Tai nghe, để nghe phát âm và video minh họa.</li>
              <li>Chọn trước một giờ cố định mỗi ngày (ví dụ 20 giờ) và giữ đúng giờ đó, kể cả cuối tuần.</li>
              <li>Đến ngày 1 mở lại trang này: danh sách việc sẽ bắt đầu và được giữ nguyên cả ngày.</li>
            </ul>
          </div>
        )}
        <div className="clay mt-6 grid gap-5 p-6 sm:grid-cols-3 sm:p-8">
          <div>
            <p className="text-sm font-semibold text-ink-soft">Cả ngày</p>
            <p className="font-display text-3xl font-extrabold">khoảng {minutes} phút</p>
            <p className="text-ink-soft">tối thiểu {minMinutes} phút nếu bận</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink-soft">{live ? "Đã xong" : "Số việc"}</p>
            <p className="font-display text-3xl font-extrabold">{live ? `${done}/${tasks.length} việc` : `${tasks.length} việc`}</p>
            {live && <ProgressBar value={tasks.length ? (done / tasks.length) * 100 : 0} label={`Đã xong ${done}/${tasks.length} việc hôm nay`} className="mt-2" />}
          </div>
          <div>
            <p className="text-sm font-semibold text-ink-soft">Chuỗi ngày học</p>
            <p className="flex items-center gap-2 font-display text-3xl font-extrabold">
              <Flame className="size-7 text-tangerine-deep" aria-hidden />
              {streak} ngày
            </p>
            <p className="text-ink-soft">học mỗi ngày để giữ chuỗi</p>
          </div>
        </div>
        <p className="mt-4 max-w-3xl text-ink-soft">
          Làm theo thứ tự từ trên xuống. Bận thì làm ít nhất các việc có nhãn <strong className="text-ink">Tối thiểu</strong>: một tuần dùng phần tối thiểu 1–2 ngày là bình thường, học đều quan trọng hơn học đủ, đừng bỏ hẳn một ngày. Việc học trên trang tự đánh dấu khi xong,
          việc tự học bên ngoài thì bạn tự tích.
        </p>
      </header>

      {essentialDone && (
        <div role="status" className="flex items-start gap-3 rounded-2xl border-[2.5px] border-ink bg-leaf-soft px-5 py-4">
          <Sparkles className="mt-0.5 size-6 shrink-0" aria-hidden />
          <p className="font-semibold">
            {done === tasks.length ? "Xong hết việc hôm nay. Rất tốt!" : "Đã xong phần tối thiểu. Còn sức thì làm nốt các việc còn lại."}
          </p>
        </div>
      )}

      <ol className="space-y-5" aria-label={live ? "Việc cần làm hôm nay" : `Việc của ngày ${dayNo}`}>
        {tasks.map((t, i) => (
          <TaskCard key={t.id} task={t} n={i + 1} date={view} open={i === firstOpen} preview={!live} />
        ))}
      </ol>

      {tomorrowEntry && (
        <section aria-labelledby="next-day" className="rounded-[1.5rem] border-[2.5px] border-ink bg-sun p-6 shadow-[0_6px_0_0_var(--color-ink)] sm:p-8">
          <h2 id="next-day" className="font-display text-2xl font-bold">
            {tomorrow === addDayKey(today, 1) ? "Ngày mai" : `Ngày ${dayNo + 1}`} ({dateVi(tomorrow)})
          </h2>
          <p className="mt-2 text-lg">{describeDay(tomorrowEntry.main, input)}</p>
          {tomorrowEntry.selfStudy && tomorrowEntry.main.kind !== "week-review" && (
            <p className="mt-1">
              Tự học {tomorrowEntry.selfStudy.minutes} phút: {tomorrowEntry.selfStudy.title}
            </p>
          )}
          <Link href={`/hom-nay?ngay=${tomorrow}`} className="btn btn-ghost mt-5">
            Xem chi tiết
            <ArrowRight className="size-5" aria-hidden />
          </Link>
        </section>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <Link href="/lich-hoc" className="btn btn-ghost">
          Xem lịch học từng ngày tới C1
          <ArrowRight className="size-5" aria-hidden />
        </Link>
        <Link href="/on-lai" className="btn btn-ghost">Ôn lại một ngày đã học</Link>
        <p className="text-ink-soft">Danh sách hôm nay được giữ nguyên cả ngày; các ngày sau tính theo tiến độ của bạn.</p>
      </div>
    </div>
  );
}
