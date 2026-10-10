"use client";

import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";
import { PLAN_START } from "@/content/my-plan";
import { WEEKDAY_VI } from "@/content/today";
import { useAuth } from "@/lib/auth";
import { formatHours } from "@/lib/course-utils";
import { usePlan } from "@/lib/my-plan";
import { planStage, type PlanInput } from "@/lib/plan-stage";
import { spacedDays, taughtDays } from "@/lib/review-day";
import { buildToday } from "@/lib/today";
import { sprintOn } from "@/lib/work-sprint";
import { SPRINT_MINUTES } from "@/content/work-sprints";
import { todayKey } from "@/lib/progress-core";
import { useProgress } from "@/lib/progress";
import { buildSchedule, type DayMain, type ScheduleDay } from "@/lib/schedule";
import { describeDay } from "@/lib/schedule-describe";

const SHORT_DAY = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];

function parseKey(k: string) {
  const [y, m, d] = k.split("-").map(Number);
  return new Date(y, m - 1, d, 12);
}
const dm = (k: string) => `${k.slice(8, 10)}/${k.slice(5, 7)}`;
const dmy = (k: string) => `${dm(k)}/${k.slice(0, 4)}`;
const daysBetween = (a: string, b: string) => Math.round((parseKey(b).getTime() - parseKey(a).getTime()) / 86_400_000);

export function StudyCalendar({ input }: { input: PlanInput }) {
  const { levels } = input;
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

  const today = todayKey();
  const fromKey = today < PLAN_START ? PLAN_START : today;
  const stage = planStage(input, state, data);
  const days = buildSchedule(parseKey(fromKey), { input, stage, state, data });
  const finish = days[days.length - 1].date;

  const stageName = (i: number) => (i < 0 ? "Chặng nền: ngữ pháp A1, phát âm và tách câu" : i >= levels.length ? "Về đích" : `Chặng ${i + 1}: ${levels[i].title}`);
  const describe = (m: DayMain) => describeDay(m, input);
  const isTest = (m: DayMain) => m.kind === "final" || m.kind === "placement" || m.kind === "exam";

  // stage ranges
  const ranges: { stage: number; from: string; to: string }[] = [];
  for (const d of days) {
    const last = ranges[ranges.length - 1];
    if (last && last.stage === d.stage) last.to = d.date;
    else ranges.push({ stage: d.stage, from: d.date, to: d.date });
  }

  // weeks, Monday to Sunday
  const weeks: { monday: string; days: ScheduleDay[] }[] = [];
  for (const d of days) {
    const dt = parseKey(d.date);
    dt.setDate(dt.getDate() - ((dt.getDay() + 6) % 7));
    const monday = todayKey(dt);
    if (weeks[weeks.length - 1]?.monday !== monday) weeks.push({ monday, days: [] });
    weeks[weeks.length - 1].days.push(d);
  }
  const weekNo = (monday: string) => Math.floor(daysBetween(PLAN_START, monday) / 7) + 1;
  // the same task list the day page shows, so the weekly hours match what the learner is asked to do
  const taught = taughtDays(days, input);
  // the work-English sprint session each day holds in place of its self-study, while the sprints last
  const sprints = new Map(days.map((d) => [d.date, sprintOn(days, d.date, data)]));
  const minutes = (d: ScheduleDay) =>
    buildToday({
      date: parseKey(d.date), picks: { main: d.main }, ticked: [], input, stage, state, data, dueWords: 0, dayStage: d.stage,
      recap: { date: d.date, done: false }, spaced: spacedDays(d.date, taught.filter((x) => x < d.date)), sprint: sprints.get(d.date),
    }).reduce((n, t) => n + t.minutes, 0);

  return (
    <div className="space-y-12">
      <header>
        <h1 className="font-display text-5xl font-extrabold leading-tight">Lịch học tới C1</h1>
        <p className="mt-3 max-w-3xl text-lg">
          Từng ngày, từ <strong>{dmy(fromKey)}</strong> đến khi đạt C1. Dự kiến xong lộ trình vào khoảng <strong>{dmy(finish)}</strong>, sau khoảng{" "}
          {Math.round(daysBetween(fromKey, finish) / 30.4)} tháng.
        </p>
        <p className="mt-2 max-w-3xl text-ink-soft">
          Đây là lịch nhanh nhất có thể: số tuần mỗi cấp lấy theo mức thấp của ước tính Cambridge, mà Cambridge tính giờ học có giáo viên, chưa gồm giờ tự
          học. Với người tự học, đi từ A2 đến C1 thật sự thường mất khoảng 18–30 tháng. Lên cấp tính theo bằng chứng (bài kiểm tra, đề mẫu) chứ không theo
          ngày, nên lịch dời ra là chuyện bình thường, không phải bạn đang thất bại. Lịch tính lại mỗi khi bạn mở trang.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/hom-nay" className="btn btn-primary">
            Việc chi tiết hôm nay
            <ArrowRight className="size-5" aria-hidden />
          </Link>
          <Link href="/lo-trinh-cua-toi" className="btn btn-ghost">Điều kiện qua từng chặng</Link>
        </div>
      </header>

      <section aria-labelledby="stages">
        <h2 id="stages" className="font-display text-3xl font-extrabold">Các chặng</h2>
        <ol className="mt-5 grid gap-3">
          {ranges.map((r) => (
            <li key={r.stage} className="clay flex flex-wrap items-center justify-between gap-x-4 gap-y-1 p-4">
              <span className="font-display text-lg font-bold">{stageName(r.stage)}</span>
              <span className="text-ink-soft">
                {r.from === r.to ? dmy(r.from) : `${dmy(r.from)} – ${dmy(r.to)}`}
                {r.from !== r.to && `, ${Math.ceil((daysBetween(r.from, r.to) + 1) / 7)} tuần`}
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="weeks">
        <h2 id="weeks" className="font-display text-3xl font-extrabold">Từng tuần</h2>
        <p className="mt-2 text-ink-soft">Mỗi ngày còn có 10 phút ôn từ vựng, không ghi lại ở từng dòng.</p>
        <div className="mt-5 space-y-3">
          {weeks.map((w, wi) => {
            const stages = [...new Set(w.days.map((d) => d.stage))];
            const total = w.days.reduce((n, d) => n + minutes(d), 0);
            return (
              <details key={w.monday} open={wi < 2} className="clay p-0">
                <summary className="flex min-h-11 cursor-pointer flex-wrap items-center justify-between gap-x-4 gap-y-1 px-5 py-3">
                  <span className="font-display text-lg font-bold">
                    Tuần {weekNo(w.monday)} · {dm(w.days[0].date)} – {dm(w.days[w.days.length - 1].date)}
                  </span>
                  <span className="text-sm text-ink-soft">
                    {stages.map(stageName).join(", ")} · khoảng {formatHours(Math.round((total / 60) * 2) / 2)} giờ
                  </span>
                </summary>
                <ul className="divide-y divide-ink/15 border-t-2 border-ink/15">
                  {w.days.map((d) => {
                    const isToday = d.date === today;
                    return (
                      <li key={d.date} className={`grid gap-1 px-5 py-3 sm:grid-cols-[5.5rem_1fr] sm:gap-4 ${isToday ? "bg-sun-soft" : ""}`}>
                        <span className="font-semibold">
                          <abbr title={WEEKDAY_VI[d.weekday]} className="no-underline">
                            {SHORT_DAY[d.weekday]}
                          </abbr>{" "}
                          {dm(d.date)}
                          {isToday && <span className="ml-2 rounded-full border-2 border-ink bg-sun px-2 text-xs">Hôm nay</span>}
                        </span>
                        <span>
                          <span className={isTest(d.main) ? "font-bold" : ""}>{describe(d.main)}</span>
                          {d.selfStudy && d.main.kind !== "week-review" && (
                            <span className="block text-sm text-ink-soft">
                              {sprints.get(d.date)
                                ? `Tiếng Anh cho công việc ${SPRINT_MINUTES} phút: ${sprints.get(d.date)!.sprint.title}`
                                : `Tự học ${d.selfStudy.minutes} phút: ${d.selfStudy.title}`}
                            </span>
                          )}
                          {isToday && (
                            <Link href="/hom-nay" className="mt-1 inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-4">
                              Xem cách làm chi tiết
                            </Link>
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </details>
            );
          })}
        </div>
      </section>
    </div>
  );
}
