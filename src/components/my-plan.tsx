"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, BookOpen, Check, Circle, Clock, ExternalLink, Lock } from "lucide-react";
import {
  AFTER_SAMPLES,
  CONVERSION_PDF,
  DAILY_MINUTES,
  DAILY_ROUTINE,
  OFFICIAL_CHECKS,
  OFFICIAL_EXAMS,
  READING_STEPS,
  speakingPrompt,
  writingPrompt,
  type OfficialCheck,
} from "@/content/my-plan";
import { ALL_DRILLS } from "@/content/drills";
import type { Level } from "@/content/types";
import { useAuth } from "@/lib/auth";
import { formatHours } from "@/lib/course-utils";
import { formatDateVi } from "@/lib/format";
import { plan, usePlan } from "@/lib/my-plan";
import { MAX_WEEK_HOURS, speakingTotal, weekKey, type ExamRecord, type ExamVerdict } from "@/lib/my-plan-core";
import { PLAN_FINAL_PASS, grammarDoneOf, planStage, type PlanGrammar, type PlanInput, type PlanLesson, type PlanLevel } from "@/lib/plan-stage";
import { lessonKey } from "@/lib/progress-core";
import { useProgress } from "@/lib/progress";
import { ProgressBar } from "@/components/ui/progress-bar";
import { SESSIONS_PER_SPRINT, SPRINT_HOURS, SPRINT_MINUTES, WORK_SPRINTS } from "@/content/work-sprints";
import { sprintSessionsDone } from "@/lib/work-sprint";

export type { PlanGrammar, PlanLesson, PlanLevel };

/** weeks for the grammar base and the sentence drills */
const BASE_WEEKS: [number, number] = [3, 4];

function Tick({ id, ticks, label }: { id: string; ticks: string[]; label: string }) {
  return (
    <label className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-xl px-2 font-semibold hover:bg-sun-soft">
      <input type="checkbox" checked={ticks.includes(id)} onChange={() => plan.toggleTick(id)} className="size-5 shrink-0 accent-[var(--color-leaf)]" />
      {label}
    </label>
  );
}

function Status({ done, current }: { done: boolean; current: boolean }) {
  if (done) return <span className="rounded-full border-2 border-ink bg-leaf-soft px-3 py-0.5 text-sm font-bold">Đã qua</span>;
  if (current) return <span className="rounded-full border-2 border-ink bg-sun px-3 py-0.5 text-sm font-bold">Đang học</span>;
  return <span className="rounded-full border-2 border-ink/40 px-3 py-0.5 text-sm font-semibold text-ink-soft">Chưa tới</span>;
}

function Condition({ ok, children }: { ok: boolean; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      {ok ? <Check className="mt-0.5 size-5 shrink-0 text-leaf" aria-hidden /> : <Circle className="mt-0.5 size-5 shrink-0 text-ink-soft" aria-hidden />}
      <span>
        <span className="sr-only">{ok ? "Đã đạt: " : "Chưa đạt: "}</span>
        {children}
      </span>
    </li>
  );
}

export function MyPlan({ input }: { input: PlanInput }) {
  const { baseCourse, grammar, levels, ipa, ipaCourse } = input;
  const { session, ready } = useAuth();
  const { state, ready: progressReady } = useProgress();
  const data = usePlan();
  const ticks = data.done;

  if (!ready || !progressReady) return <div className="clay h-96 animate-pulse bg-card" aria-hidden />;

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

  const { grammarDone, ipaDone, drillsDone, baseDone, statuses, current: currentLevel, allDone, levelsPassed } = planStage(input, state, data);
  // a stage counts only once every stage before it is passed
  const stagesPassed = (baseDone ? 1 : 0) + levelsPassed;

  const nextGrammar = grammar.find((g) => !grammarDoneOf(input, state, data, g.slug));
  const nextIpa = ipa.find((x) => !state.lessons[lessonKey(ipaCourse, x.slug)]?.done);
  const cur = currentLevel >= 0 ? levels[currentLevel] : null;
  const curStatus = currentLevel >= 0 ? statuses[currentLevel] : null;
  const next = !baseDone
    ? nextGrammar
      ? { what: `Học bài A1: ${nextGrammar.title}`, href: `/hoc/${baseCourse}/${nextGrammar.slug}`, why: "Chặng nền lấp chỗ hổng ngữ pháp, phải làm trước." }
      : { what: `Học bài phát âm: ${nextIpa?.title ?? ""}`, href: nextIpa ? `/hoc/${ipaCourse}/${nextIpa.slug}` : "#stage-0", why: "Ngữ pháp A1 đã xong, còn phần phát âm của chặng nền." }
    : cur && curStatus
      ? curStatus.nextLesson
        ? { what: `Học bài ${cur.level}: ${curStatus.nextLesson.title}`, href: `/hoc/${cur.slug}/${curStatus.nextLesson.slug}`, why: `Học ${cur.title} theo đúng thứ tự.` }
        : !curStatus.finalPassed && cur.finalSlug
          ? {
              what: `Làm bài kiểm tra cuối khóa ${cur.level} (cần từ ${PLAN_FINAL_PASS}%)`,
              href: `/hoc/${cur.slug}/${cur.finalSlug}`,
              why: curStatus.finalScore != null ? `Lần trước đạt ${curStatus.finalScore}%. Ôn các bài dưới 80% rồi làm lại.` : "Đã học hết bài, giờ kiểm tra cả khóa.",
            }
          : {
              what: `Làm đề mẫu chính thức ${OFFICIAL_CHECKS[cur.level].exam} và nhập điểm`,
              href: `#exam-${cur.level}`,
              why: "Bước kiểm chứng để lên cấp: so với ngưỡng thật của Cambridge.",
            }
      : { what: "Thi chứng chỉ C1 quốc tế", href: "#c1", why: "Bạn đã đi hết lộ trình trên trang." };

  const weeksLo = BASE_WEEKS[0] + levels.reduce((n, l) => n + l.weeks[0], 0);
  const weeksHi = BASE_WEEKS[1] + levels.reduce((n, l) => n + l.weeks[1], 0);
  const monthsLo = Math.round(weeksLo / 4.35);
  const monthsHi = Math.round(weeksHi / 4.35);
  const routineHref = { vocab: "/on-tap-tu-vung", grammar: baseDone || !nextGrammar ? "/ngu-phap" : `/hoc/${baseCourse}/${nextGrammar.slug}`, lesson: next.href.startsWith("/hoc/") ? next.href : cur ? `/khoa-hoc/${cur.slug}` : "/khoa-hoc", reading: "#tach-cau" };

  return (
    <div className="space-y-14">
      <header>
        <p className="font-semibold text-ink-soft">Xin chào, {session.user}</p>
        <h1 className="mt-1 font-display text-5xl font-extrabold leading-tight">Lộ trình của tôi: tới C1</h1>
        <div className="clay mt-6 p-6 sm:p-8">
          <h2 className="font-display text-2xl font-bold">Mình đang ở đâu</h2>
          <p className="mt-2 text-lg">
            Lúc bắt đầu lộ trình, bài kiểm tra xếp mình vào cấp <strong>A2</strong>, nhưng ngữ pháp còn hổng nên đọc cả câu vẫn không hiểu câu nói gì.
            Biết nghĩa từng từ chưa đủ, phải nhận ra câu được ghép theo cấu trúc nào.
          </p>
          {state.placement && (
            <p className="mt-2 text-ink-soft">
              Kết quả kiểm tra trình độ gần nhất ({formatDateVi(state.placement.takenAt)}): gợi ý học từ cấp {state.placement.startLevel}, đúng {state.placement.score}%.
            </p>
          )}
          <p className="mt-3 text-lg">
            Lộ trình gồm 5 chặng đi theo thứ tự: <strong>chặng nền</strong> (ngữ pháp A1, phát âm, tách câu), rồi <strong>A2 → B1 → B2 → C1</strong>.
            Mỗi cấp chỉ tính là qua khi có đủ 3 điều kiện: học hết bài, đạt từ {PLAN_FINAL_PASS}% bài kiểm tra cuối khóa, và đề mẫu chính thức của Cambridge
            đạt ngưỡng của cấp ở mọi phần. Chưa qua thì lịch xếp học bù đúng phần yếu, không nhảy cấp.
          </p>
          <div className="mt-6">
            <p className="mb-2 font-semibold">Đã qua {stagesPassed}/5 chặng</p>
            <ProgressBar value={(stagesPassed / 5) * 100} label={`Đã qua ${stagesPassed}/5 chặng`} />
          </div>
        </div>
      </header>

      <section aria-labelledby="next" className="rounded-[1.5rem] border-[2.5px] border-ink bg-sun p-6 shadow-[0_6px_0_0_var(--color-ink)] sm:p-8">
        <h2 id="next" className="font-display text-2xl font-bold">Việc tiếp theo</h2>
        <p className="mt-2 text-lg font-semibold">{next.what}</p>
        <p className="mt-1">{next.why}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={next.href} className="btn btn-ghost">
            Làm ngay
            <ArrowRight className="size-5" aria-hidden />
          </Link>
          <Link href="/hom-nay" className="btn btn-ghost">Xem việc chi tiết hôm nay</Link>
          <Link href="/lich-hoc" className="btn btn-ghost">Lịch học từng ngày</Link>
        </div>
      </section>

      <section aria-labelledby="overview">
        <h2 id="overview" className="font-display text-3xl font-extrabold">Cả chặng đường</h2>
        <ol className="mt-5 grid gap-3">
          <li className="clay flex flex-wrap items-center gap-x-4 gap-y-2 p-4">
            <a href="#stage-0" className="min-w-48 flex-1 font-display text-lg font-bold underline-offset-4 hover:underline">Chặng nền: ngữ pháp A1, phát âm và tách câu</a>
            <span className="text-sm text-ink-soft">{BASE_WEEKS[0]}–{BASE_WEEKS[1]} tuần</span>
            <Status done={baseDone} current={!baseDone} />
          </li>
          {levels.map((l, i) => (
            <li key={l.slug} className="clay flex flex-wrap items-center gap-x-4 gap-y-2 p-4">
              <a href={`#stage-${i + 1}`} className="min-w-48 flex-1 font-display text-lg font-bold underline-offset-4 hover:underline">
                Chặng {i + 1}: {l.title}
              </a>
              <span className="text-sm text-ink-soft">khoảng {l.weeks[0] === l.weeks[1] ? l.weeks[0] : `${l.weeks[0]}–${l.weeks[1]}`} tuần</span>
              <Status done={i < levelsPassed} current={i === currentLevel} />
            </li>
          ))}
        </ol>
        <div className="mt-5 rounded-2xl border-2 border-ink bg-card px-5 py-4">
          <p className="font-semibold">Thời gian thật: khoảng {monthsLo}–{monthsHi} tháng nếu học đều mỗi tuần.</p>
          <p className="mt-1 text-ink-soft">
            Theo Cambridge English, mỗi cấp cần khoảng 200 giờ học có hướng dẫn, tổng khoảng 700–800 giờ để đạt C1 tính từ đầu. Bài học trên trang chỉ là
            một phần nhỏ của số giờ đó, nên mỗi chặng đều có lịch tự học mỗi tuần. Tự học là bắt buộc, không phải phần thêm. Số tuần ở trên tính với{" "}
            {DAILY_MINUTES} phút trên trang mỗi ngày cộng giờ tự học của từng chặng.
          </p>
        </div>
      </section>

      <section aria-labelledby="routine">
        <h2 id="routine" className="font-display text-3xl font-extrabold">Mỗi ngày {DAILY_MINUTES} phút trên trang</h2>
        <p className="mt-2 text-ink-soft">Học đều mỗi ngày hiệu quả hơn học dồn. Bận thì làm ít nhất hai việc đầu. Giờ tự học mỗi tuần nằm trong từng chặng.</p>
        <ol className="mt-5 grid gap-3 sm:grid-cols-2">
          {DAILY_ROUTINE.map((r) => (
            <li key={r.what} className="clay flex items-start gap-4 p-5">
              <span className="flex shrink-0 items-center gap-1 font-display text-xl font-extrabold">
                <Clock className="size-5 text-tangerine-deep" aria-hidden />
                {r.minutes}′
              </span>
              <Link href={routineHref[r.to]} className="font-semibold underline-offset-4 hover:underline">{r.what}</Link>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="cong-viec" className="scroll-mt-28">
        <h2 id="cong-viec" className="scroll-mt-28 font-display text-3xl font-extrabold">Tiếng Anh cho công việc: {WORK_SPRINTS.length} đợt {SPRINT_HOURS} giờ</h2>
        <p className="mt-2 max-w-3xl text-ink-soft">
          Theo phương pháp “20 giờ đầu” của Josh Kaufman: mỗi lần chỉ luyện một kỹ năng của công việc lập trình, {SPRINT_MINUTES} phút mỗi ngày thay cho phần tự học,
          đủ {SPRINT_HOURS} giờ thì sang đợt sau. Đường tới C1 vẫn giữ nguyên; các đợt này giúp bạn dùng được tiếng Anh trong công việc sớm hơn.
        </p>
        <ol className="mt-5 grid gap-4 md:grid-cols-2">
          {WORK_SPRINTS.map((s, i) => {
            const sessions = sprintSessionsDone(data) + (data.day?.done.includes("sprint") ? 1 : 0);
            const mine = Math.max(0, Math.min(SESSIONS_PER_SPRINT, sessions - i * SESSIONS_PER_SPRINT));
            const hours = Math.round(((mine * SPRINT_MINUTES) / 60) * 10) / 10;
            return (
              <li key={s.id} className="clay p-5">
                <p className="text-sm font-semibold text-ink-soft">Đợt {i + 1}</p>
                <p className="font-display text-xl font-bold">{s.title}</p>
                <p className="mt-1">{s.goal}</p>
                <p className="mt-3 text-sm font-semibold">Đã luyện {hours.toLocaleString("vi-VN")}/{SPRINT_HOURS} giờ</p>
                <ProgressBar className="mt-1.5" value={(mine / SESSIONS_PER_SPRINT) * 100} label={`Đợt ${i + 1}: ${hours.toLocaleString("vi-VN")}/${SPRINT_HOURS} giờ`} />
              </li>
            );
          })}
        </ol>
      </section>

      <HoursLog
        hours={data.hours}
        target={cur ? cur.weeklyHours : Math.round((DAILY_MINUTES * 7) / 60)}
        stageName={cur ? cur.title : "chặng nền"}
        needLo={levels.reduce((n, l) => n + l.band[0], 0)}
        needHi={levels.reduce((n, l) => n + l.band[1], 0)}
      />

      <section aria-labelledby="stage-0" className="scroll-mt-28">
        <div className="flex flex-wrap items-center gap-3">
          <h2 id="stage-0" className="scroll-mt-28 font-display text-3xl font-extrabold">Chặng nền: ngữ pháp A1, phát âm và tách câu</h2>
          <Status done={baseDone} current={!baseDone} />
        </div>
        <details open={!baseDone} className="mt-4">
          <summary className="inline-flex min-h-11 cursor-pointer items-center font-semibold underline underline-offset-4">Việc cần làm ở chặng này</summary>

          <h3 className="mt-6 font-display text-2xl font-bold">
            1. Học {grammar.length} bài ngữ pháp A1 <span className="text-base font-semibold text-ink-soft">({grammarDone}/{grammar.length})</span>
          </h3>
          <p className="mt-2 max-w-3xl text-ink-soft">
            Mỗi ngày trọn một bài, đủ các bước; cứ bốn ngày có một ngày ôn cách quãng. Học xong bài là tự tính, hoặc tích Đã ôn nếu bạn chắc rồi.
          </p>
          <ol className="mt-4 divide-y divide-ink/15 rounded-2xl border-[2.5px] border-ink bg-card">
            {grammar.map((g, i) => (
              <li key={g.slug} className="flex flex-wrap items-center gap-x-4 gap-y-1 px-4 py-3">
                <span className="w-6 shrink-0 font-display font-bold text-ink-soft">{i + 1}</span>
                <span className="min-w-48 flex-1">
                  <Link href={`/ngu-phap/${baseCourse}/${g.slug}`} className="font-semibold underline-offset-4 hover:underline">{g.title}</Link>
                  <span className="block text-sm text-ink-soft">{g.chapter}</span>
                </span>
                <Link href={`/hoc/${baseCourse}/${g.slug}`} className="inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-4">
                  Vào học
                </Link>
                {state.lessons[lessonKey(baseCourse, g.slug)]?.done ? (
                  <span className="inline-flex min-h-11 items-center gap-1 px-2 font-semibold"><Check className="size-5 text-leaf" aria-hidden /> Đã học</span>
                ) : (
                  <Tick id={`g:${g.slug}`} ticks={ticks} label="Đã ôn" />
                )}
              </li>
            ))}
          </ol>

          <h3 className="mt-10 font-display text-2xl font-bold">
            2. Học {ipa.length} bài phát âm <span className="text-base font-semibold text-ink-soft">({ipaDone}/{ipa.length})</span>
          </h3>
          <p className="mt-2 max-w-3xl text-ink-soft">Mỗi ngày một bài, song song với ngữ pháp trong 8 ngày đầu. Âm cuối, cặp âm dễ nhầm và trọng âm là phần người Việt hay sai nhất.</p>
          <ol className="mt-4 divide-y divide-ink/15 rounded-2xl border-[2.5px] border-ink bg-card">
            {ipa.map((x, n) => (
              <li key={x.slug} className="flex flex-wrap items-center gap-x-4 gap-y-1 px-4 py-3">
                <span className="w-6 shrink-0 font-display font-bold text-ink-soft">{n + 1}</span>
                <Link href={`/hoc/${ipaCourse}/${x.slug}`} className="min-w-48 flex-1 font-semibold underline-offset-4 hover:underline">{x.title}</Link>
                {state.lessons[lessonKey(ipaCourse, x.slug)]?.done ? (
                  <span className="inline-flex min-h-11 items-center gap-1 px-2 font-semibold"><Check className="size-5 text-leaf" aria-hidden /> Đã học</span>
                ) : (
                  <span className="text-sm text-ink-soft">{x.minutes} phút</span>
                )}
              </li>
            ))}
          </ol>
        </details>
      </section>

      <section aria-labelledby="tach-cau">
          <h2 id="tach-cau" className="scroll-mt-28 font-display text-3xl font-extrabold">
            Tách câu khi đọc <span className="text-base font-semibold text-ink-soft">({drillsDone}/{ALL_DRILLS.length})</span>
          </h2>
          <p className="mt-2 max-w-3xl text-ink-soft">
            Chạy suốt lộ trình, mỗi ngày vài câu, khó dần từ A1 đến C1; lịch hằng ngày tự chọn câu đúng cấp. Gặp câu không hiểu, đừng dịch từng từ từ trái sang phải, làm theo 4 bước:
          </p>
          <ol className="mt-4 grid gap-3 sm:grid-cols-2">
            {READING_STEPS.map((s, i) => (
              <li key={s.title} className="clay p-5">
                <p className="font-display text-lg font-bold">
                  {i + 1}. {s.title}
                </p>
                <p className="mt-1 text-ink-soft">{s.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 font-semibold">Câu luyện: tự tách trước, rồi mở cách tách để so.</p>
          {(["A1", "A2", "B1", "B2", "C1"] as const).map((lvl) => {
            const mine = ALL_DRILLS.filter((d) => d.level === lvl);
            if (!mine.length) return null;
            const done = mine.filter((d) => ticks.includes(`d:${d.id}`)).length;
            return (
          <details key={lvl} className="mt-4" open={done < mine.length && mine.some((d) => ticks.includes(`d:${d.id}`))}>
            <summary className="inline-flex min-h-11 cursor-pointer items-center font-display text-xl font-bold">
              Câu cấp {lvl} ({done}/{mine.length})
            </summary>
          <ul className="mt-4 grid gap-4">
            {mine.map((d) => (
              <li key={d.id} id={`drill-${d.id}`} className="clay scroll-mt-28 p-5 sm:p-6">
                <p lang="en" className="font-display text-xl font-bold leading-snug sm:text-2xl">{d.en}</p>
                <details className="mt-3">
                  <summary className="inline-flex min-h-11 cursor-pointer items-center font-semibold underline underline-offset-4">Xem cách tách câu</summary>
                  <dl className="mt-3 grid gap-2 sm:grid-cols-[10rem_1fr]">
                    <dt className="font-semibold">Động từ chính</dt>
                    <dd>{d.verb}</dd>
                    <dt className="font-semibold">Chủ ngữ</dt>
                    <dd>{d.subject}</dd>
                    <dt className="font-semibold">Dấu hiệu</dt>
                    <dd>{d.sign}</dd>
                    <dt className="font-semibold">Cắt thành cụm</dt>
                    <dd lang="en" className="flex flex-wrap gap-2">
                      {d.chunks.map((c) => (
                        <span key={c} className="rounded-lg border-2 border-ink bg-sky px-2 py-0.5">{c}</span>
                      ))}
                    </dd>
                    <dt className="font-semibold">Nghĩa</dt>
                    <dd className="font-semibold">{d.meaning}</dd>
                  </dl>
                  <Link
                    href={`/ngu-phap/${d.review.course}/${d.review.lesson}`}
                    className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline underline-offset-4"
                  >
                    <BookOpen className="size-4" aria-hidden />
                    Ôn lại: {d.review.title}
                  </Link>
                </details>
                <div className="mt-2">
                  <Tick id={`d:${d.id}`} ticks={ticks} label="Mình đã hiểu câu này" />
                </div>
              </li>
            ))}
          </ul>
          </details>
            );
          })}
      </section>

      {levels.map((l, i) => {
        const s = statuses[i];
        const isCurrent = i === currentLevel;
        const passedStage = i < levelsPassed;
        return (
          <section key={l.slug} aria-labelledby={`stage-${i + 1}`}>
            <div className="flex flex-wrap items-center gap-3">
              <h2 id={`stage-${i + 1}`} className="scroll-mt-28 font-display text-3xl font-extrabold">
                Chặng {i + 1}: {l.title}
              </h2>
              <Status done={passedStage} current={isCurrent} />
            </div>
            <p className="mt-2 text-ink-soft">
              {s.toStudy} bài{l.finalSlug ? " và bài kiểm tra cuối khóa" : ""}, khoảng {formatHours(l.contentHours)} giờ bài học. Cả cấp cần khoảng{" "}
              {l.band[0] === l.band[1] ? l.band[0] : `${l.band[0]}–${l.band[1]}`} giờ học, tức khoảng{" "}
              {l.weeks[0] === l.weeks[1] ? l.weeks[0] : `${l.weeks[0]}–${l.weeks[1]}`} tuần với {l.weeklyHours} giờ mỗi tuần.
            </p>
            <details open={isCurrent} className="mt-4">
              <summary className="inline-flex min-h-11 cursor-pointer items-center font-semibold underline underline-offset-4">Việc cần làm ở chặng này</summary>

              <div className="clay mt-4 p-5 sm:p-6">
                <h3 className="font-display text-xl font-bold">Điều kiện để qua chặng</h3>
                <ul className="mt-3 grid gap-2">
                  <Condition ok={s.done === s.toStudy}>
                    Học hết các bài theo thứ tự ({s.done}/{s.toStudy})
                  </Condition>
                  <Condition ok={s.finalPassed}>
                    Đạt từ {PLAN_FINAL_PASS}% bài kiểm tra cuối khóa{s.finalScore != null ? ` (lần gần nhất: ${s.finalScore}%)` : ""}
                    {l.finalSlug && s.nextLesson === undefined && !s.finalPassed && (
                      <>
                        {" "}
                        <Link href={`/hoc/${l.slug}/${l.finalSlug}`} className="font-semibold underline underline-offset-4">Làm bài kiểm tra</Link>
                      </>
                    )}
                  </Condition>
                  <Condition ok={s.examPassed}>
                    <a href={`#exam-${l.level}`} className="font-semibold underline underline-offset-4">Đề mẫu chính thức {OFFICIAL_CHECKS[l.level].exam}</a> đạt
                    ngưỡng {l.level} ở mọi phần
                  </Condition>
                </ul>
                <p className="mt-3 text-sm text-ink-soft">
                  Trong tuần kiểm tra còn có bài kiểm tra trình độ để soát lại{s.placementPassed ? " (đã qua)" : ""}; nó không phải điều kiện lên cấp.
                </p>
                {s.weak.length > 0 && (
                  <div className="mt-4 rounded-2xl border-2 border-ink bg-sun-soft px-4 py-3">
                    <p className="font-semibold">Bài dưới 80%, nên học lại trước khi làm bài kiểm tra:</p>
                    <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                      {s.weak.map((w) => (
                        <li key={w.lesson.slug}>
                          <Link href={`/hoc/${l.slug}/${w.lesson.slug}`} className="underline underline-offset-4">{w.lesson.title}</Link> ({w.score}%)
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <h3 className="mt-8 font-display text-xl font-bold">1. Học bài theo thứ tự</h3>
              <p className="mt-1 max-w-3xl text-ink-soft">
                Mỗi bài có bài giảng ngữ pháp, từ vựng, hội thoại, đọc hiểu, bài tập, luyện nói và nhiệm vụ viết. Ở phần đọc, câu nào khó thì tách câu theo 4
                bước trước khi trả lời.
              </p>
              {s.nextLesson && (
                <Link href={`/hoc/${l.slug}/${s.nextLesson.slug}`} className="btn btn-primary mt-4">Học tiếp: {s.nextLesson.title}</Link>
              )}
              <div className="mt-5 grid gap-5 lg:grid-cols-2">
                {l.chapters.map((c) => (
                  <div key={c.title} className="clay p-5">
                    <h4 className="font-display text-lg font-bold">{c.title}</h4>
                    <ul className="mt-2 grid gap-1">
                      {c.lessons.map((x) => {
                        const rec = state.lessons[lessonKey(l.slug, x.slug)];
                        return (
                          <li key={x.slug}>
                            <Link href={`/hoc/${l.slug}/${x.slug}`} className="flex min-h-11 items-center gap-3 rounded-xl px-2 hover:bg-sun-soft">
                              {rec?.done ? <Check className="size-5 shrink-0 text-leaf" aria-hidden /> : <Circle className="size-5 shrink-0 text-ink-soft" aria-hidden />}
                              <span className="flex-1">
                                {x.title}
                                <span className="sr-only">{rec?.done ? ", đã xong" : ", chưa học"}</span>
                              </span>
                              <span className="text-sm text-ink-soft">{rec?.done && rec.score != null ? `${rec.score}%` : `${x.minutes} phút`}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>

              <h3 className="mt-8 font-display text-xl font-bold">2. Từ vựng</h3>
              <p className="mt-1 max-w-3xl">
                Từ của mỗi bài tự vào lịch ôn. Thêm dần các chủ đề trong{" "}
                <Link href={`/tu-vung/${l.slug}`} className="font-semibold underline underline-offset-4">kho từ vựng {l.level}</Link>
                {l.wordTopics > 0 ? ` (${l.wordTopics} chủ đề)` : ""}, mỗi tuần 1–2 chủ đề, và{" "}
                <Link href="/on-tap-tu-vung" className="font-semibold underline underline-offset-4">ôn từ</Link> mỗi ngày.
              </p>

              {l.selfStudy && (
                <>
                  <h3 className="mt-8 font-display text-xl font-bold">3. Tự học mỗi tuần: khoảng {l.selfStudy.weeklyHours} giờ</h3>
                  <ul className="mt-2 max-w-3xl list-disc space-y-1 pl-6">
                    {l.selfStudy.routine.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {l.selfStudy.resources.map((r) => (
                      <li key={r.url} className="rounded-2xl border-2 border-ink bg-card p-4">
                        <a href={r.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold underline underline-offset-4">
                          {r.name}
                          <ExternalLink className="size-4" aria-hidden />
                          <span className="sr-only">(mở trang mới)</span>
                        </a>
                        <p className="mt-1 text-sm text-ink-soft">{r.how}</p>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <ExamCheck level={l.level} check={OFFICIAL_CHECKS[l.level]} record={data.exams[l.level]} used={data.used[l.level] ?? []} verdict={s.exam} n={l.selfStudy ? 4 : 3} />
            </details>
          </section>
        );
      })}

      <section aria-labelledby="c1-title" id="c1" className="scroll-mt-28 rounded-[1.5rem] border-[2.5px] border-ink bg-grape-soft p-6 sm:p-8">
        <h2 id="c1-title" className="font-display text-3xl font-extrabold">Về đích C1</h2>
        <p className="mt-3 max-w-3xl text-lg">
          Qua chặng 4 nghĩa là bạn có chứng chỉ khóa C1 trên trang và bài kiểm tra trình độ xác nhận đã vững C1. {OFFICIAL_EXAMS}
        </p>
        {allDone && <p className="mt-3 font-display text-xl font-bold">Bạn đã đi hết lộ trình. Chúc mừng!</p>}
      </section>
    </div>
  );
}

const INPUT = "mt-1 w-full rounded-xl border-[2.5px] border-ink bg-card px-3 py-2 text-lg";

function CopyPrompt({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <details className="mt-2">
      <summary className="inline-flex min-h-11 cursor-pointer items-center font-semibold underline underline-offset-4">{label}</summary>
      <pre className="mt-2 whitespace-pre-wrap rounded-xl border-2 border-ink bg-sky p-3 text-sm">{text}</pre>
      <button
        type="button"
        className="btn btn-ghost mt-2"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
          } catch {
            setCopied(false);
          }
        }}
      >
        {copied ? "Đã chép" : "Chép câu lệnh"}
      </button>
    </details>
  );
}

type Field = { key: string; label: string; max: number; step: number };

function ExamCheck({
  level,
  check,
  record,
  used,
  verdict,
  n,
}: {
  level: Level;
  check: OfficialCheck;
  record: ExamRecord | undefined;
  used: string[];
  verdict: ExamVerdict | null;
  n: number;
}) {
  const fields: Field[] = [
    ...check.sections.map((sec) => ({ key: sec.id, label: `${sec.label} (trên ${sec.max}, cần ${sec.pass})`, max: sec.max, step: 1 })),
    { key: "writing", label: `Writing, tổng hai bài (trên ${check.writing.max}, cần ${check.writing.pass})`, max: check.writing.max, step: 1 },
    ...check.speaking.criteria.map((c) => ({ key: `sp:${c.id}`, label: `Speaking: ${c.label} (0–5${c.weight > 1 ? `, nhân ${c.weight}` : ""})`, max: 5, step: 0.5 })),
  ];
  const [marks, setMarks] = useState<Record<string, string>>(() =>
    Object.fromEntries(fields.map((f) => [f.key, record?.marks[f.key] != null ? String(record.marks[f.key]) : ""])),
  );
  const [saved, setSaved] = useState(false);
  const [sample, setSample] = useState(record?.sample ?? "");
  // a sample already used by an earlier attempt cannot be counted again; the latest one can still be corrected
  const takenBefore = (id: string) => used.includes(id) && id !== record?.sample;
  const left = check.samples.filter((x) => !used.includes(x.id));
  const ok = (f: Field) => {
    const v = marks[f.key];
    const x = Number(v);
    return v !== "" && Number.isFinite(x) && x >= 0 && x <= f.max && Number.isInteger(x / f.step);
  };
  const valid = fields.every(ok) && sample !== "" && !takenBefore(sample);
  const speakingNow = speakingTotal(check, Object.fromEntries(fields.filter((f) => f.key.startsWith("sp:") && ok(f)).map((f) => [f.key, Number(marks[f.key])])));
  const tick = (good: boolean) => (
    <>
      <span aria-hidden>{good ? "✓" : "✗"}</span> <span className="sr-only">{good ? "Đạt: " : "Chưa đạt: "}</span>
    </>
  );

  return (
    <div id={`exam-${level}`} className="scroll-mt-28">
      <h3 className="mt-8 font-display text-xl font-bold">
        {n}. Kiểm chứng bằng đề mẫu chính thức: {check.exam}
      </h3>
      <ol className="mt-2 max-w-3xl list-decimal space-y-1 pl-6">
        <li>
          Mở{" "}
          <a href={check.prepUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">
            trang ôn thi {check.exam} của Cambridge<span className="sr-only"> (mở trang mới)</span>
          </a>{" "}
          và làm trọn một đề mẫu miễn phí (bản làm trên máy hoặc bản giấy), tính giờ như thi thật.
        </li>
        <li>Tự chấm phần đọc, nghe{check.sections.some((sec) => sec.id === "use") ? ", Use of English" : ""} bằng đáp án (answer key) trên cùng trang.</li>
        <li>
          Nhờ AI chấm phần viết và nói bằng hai câu lệnh dưới đây: câu lệnh bắt AI chấm đúng các tiêu chí 0–5 mà giám khảo Cambridge dùng. Phần nói
          nên gửi bản ghi âm, vì từ bản chép lời thì không chấm được phát âm.
        </li>
      </ol>
      <CopyPrompt label="Câu lệnh chấm bài viết" text={writingPrompt(check)} />
      <CopyPrompt label="Câu lệnh chấm bài nói" text={speakingPrompt(check)} />
      <form
        className="clay mt-4 grid gap-4 p-5 sm:grid-cols-2 sm:p-6"
        onSubmit={(e) => {
          e.preventDefault();
          if (!valid) return;
          plan.saveExam(level, { marks: Object.fromEntries(fields.map((f) => [f.key, Number(marks[f.key])])), sample, at: new Date().toISOString() });
          setSaved(true);
        }}
      >
        <label className="sm:col-span-2">
          <span className="block font-semibold">Bạn đã làm đề nào</span>
          <select
            value={sample}
            onChange={(e) => {
              setSample(e.target.value);
              setSaved(false);
            }}
            className={INPUT}
          >
            <option value="">Chọn đề mẫu</option>
            {check.samples.map((x) => (
              <option key={x.id} value={x.id} disabled={takenBefore(x.id)}>
                {x.label}
                {takenBefore(x.id) ? " (đã dùng)" : ""}
              </option>
            ))}
          </select>
          <span className="mt-1 block text-sm text-ink-soft">
            Mỗi đề chỉ được tính một lần, vì làm lại đề cũ thì đã nhớ đáp án. Còn {left.length}/{check.samples.length} đề chưa dùng.
          </span>
        </label>
        {fields.map((f) => (
          <label key={f.key}>
            <span className="block font-semibold">{f.label}</span>
            <input
              type="number"
              inputMode="decimal"
              min={0}
              max={f.max}
              step={f.step}
              value={marks[f.key]}
              onChange={(e) => {
                setMarks({ ...marks, [f.key]: e.target.value });
                setSaved(false);
              }}
              aria-invalid={marks[f.key] !== "" && !ok(f) ? true : undefined}
              className={INPUT}
            />
          </label>
        ))}
        <p className="sm:col-span-2">
          Speaking quy đổi theo hệ số của Cambridge: <strong>{speakingNow ?? "…"}</strong>/{check.speaking.max}, cần {check.speaking.pass}.
        </p>
        <div className="flex flex-wrap items-center gap-3 sm:col-span-2">
          <button type="submit" className="btn btn-primary" disabled={!valid}>Lưu kết quả</button>
          <p role="status" className="font-semibold">{saved ? "Đã lưu." : ""}</p>
        </div>
      </form>
      {record && verdict && (
        <div className={`mt-4 rounded-2xl border-2 border-ink px-4 py-3 ${verdict.passed ? "bg-leaf-soft" : "bg-sun-soft"}`}>
          <p className="font-semibold">
            {verdict.passed ? `Đạt ngưỡng ${level} ở mọi phần.` : `Chưa đạt ngưỡng ${level} ở mọi phần.`} Lần nhập gần nhất: {formatDateVi(record.at)}.
          </p>
          <ul className="mt-1 grid gap-1">
            {check.sections.map((sec, i) => (
              <li key={sec.id}>
                {tick(verdict.sections[i].ok)}
                {sec.label}: {record.marks[sec.id]}/{sec.max}, cần {sec.pass}
              </li>
            ))}
            <li>
              {tick(verdict.writing.ok)}Writing: {verdict.writing.total ?? "chưa có"}/{check.writing.max}, cần {check.writing.pass}
            </li>
            <li>
              {tick(verdict.speaking.ok)}Speaking: {verdict.speaking.total ?? "chưa có"}/{check.speaking.max}, cần {check.speaking.pass}
            </li>
          </ul>
          {!verdict.passed && (
            <p className="mt-2">{left.length > 0 ? `Ôn thêm phần chưa đạt rồi làm một đề mẫu khác (còn ${left.length} đề chưa dùng).` : AFTER_SAMPLES}</p>
          )}
          {record.sample === undefined && <p className="mt-2">Kết quả này chưa ghi làm đề nào nên chưa được tính. Chọn đề rồi lưu lại.</p>}
        </div>
      )}
      <p className="mt-3 text-sm text-ink-soft">
        Ngưỡng và cách tính điểm viết, nói lấy từ{" "}
        <a href={CONVERSION_PDF} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
          bảng quy đổi điểm đề mẫu của Cambridge<span className="sr-only"> (mở trang mới)</span>
        </a>{" "}
        ({check.scale} điểm trên thang Cambridge English Scale, tức cấp {level}) và chỉ đúng với đề mẫu chính thức. Cambridge lưu ý điểm chỉ vừa sát ngưỡng thì khi
        thi thật chưa chắc đạt, nên hãy ôn tiếp đến khi vượt ngưỡng rõ ràng. Lộ trình đòi mọi phần đều đạt, chặt hơn cách Cambridge tính điểm trung bình. AI chấm
        viết, nói chỉ là ước lượng.
      </p>
    </div>
  );
}


function addDays(week: string, days: number): string {
  const [y, m, d] = week.split("-").map(Number);
  return weekKey(new Date(y, m - 1, d + days));
}

function HoursLog({ hours, target, stageName, needLo, needHi }: { hours: Record<string, number>; target: number; stageName: string; needLo: number; needHi: number }) {
  const thisWeek = weekKey(new Date());
  const [value, setValue] = useState(hours[thisWeek] != null ? String(hours[thisWeek]) : "");
  const [saved, setSaved] = useState(false);
  const weeks = Array.from({ length: 8 }, (_, i) => addDays(thisWeek, -7 * i));
  // the last four full weeks, an empty week counted as zero
  const recent = weeks.slice(1, 5).map((w) => hours[w] ?? 0);
  const avg = recent.reduce((a, b) => a + b, 0) / recent.length;
  const total = Object.values(hours).reduce((a, b) => a + b, 0);
  const n = Number(value);
  const valid = value !== "" && Number.isFinite(n) && n >= 0 && n <= MAX_WEEK_HOURS;
  const [y, m, d] = thisWeek.split("-");
  const round1 = (x: number) => Math.round(x * 10) / 10;

  return (
    <section aria-labelledby="hours">
      <h2 id="hours" className="font-display text-3xl font-extrabold">Nhật ký giờ học</h2>
      <p className="mt-2 max-w-3xl text-ink-soft">
        Mỗi cuối tuần ghi tổng số giờ học tiếng Anh trong tuần, cả trên trang lẫn tự học. Mục tiêu của {stageName} là khoảng {target} giờ mỗi tuần. Cột bên phải là số giờ đã học trên mục tiêu.
      </p>
      <form
        className="clay mt-4 flex flex-wrap items-end gap-4 p-5"
        onSubmit={(e) => {
          e.preventDefault();
          if (!valid) return;
          plan.setWeekHours(thisWeek, Math.round(n * 2) / 2);
          setSaved(true);
        }}
      >
        <label className="min-w-48 flex-1">
          <span className="block font-semibold">
            Tuần này (từ thứ Hai {d}/{m}/{y}), số giờ
          </span>
          <input
            type="number"
            inputMode="decimal"
            min={0}
            max={MAX_WEEK_HOURS}
            step={0.5}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setSaved(false);
            }}
            className={INPUT}
          />
        </label>
        <button type="submit" className="btn btn-primary" disabled={!valid}>Lưu giờ học</button>
        <p role="status" className="font-semibold">{saved ? "Đã lưu." : ""}</p>
      </form>
      <ul className="mt-5 grid gap-2">
        {weeks.map((w) => {
          const h = hours[w] ?? 0;
          const [wy, wm, wd] = w.split("-");
          return (
            <li key={w} className="grid grid-cols-[4.75rem_minmax(0,1fr)_auto] items-center gap-3">
              <span className="text-sm font-semibold">{w === thisWeek ? "Tuần này" : `${wd}/${wm}/${wy.slice(2)}`}</span>
              <ProgressBar value={target ? (h / target) * 100 : 0} label={`Tuần từ ${wd}/${wm}: ${formatHours(h)} trên ${target} giờ`} />
              <span className="text-right text-sm font-semibold tabular-nums" aria-hidden>
                {formatHours(h)}/{target}
              </span>
            </li>
          );
        })}
      </ul>
      <div className={`mt-5 rounded-2xl border-2 border-ink px-5 py-4 ${avg >= target ? "bg-leaf-soft" : "bg-sun-soft"}`}>
        <p className="font-semibold">
          Trung bình 4 tuần trước: {formatHours(round1(avg))} giờ mỗi tuần.{" "}
          {avg >= target
            ? "Đúng nhịp của lộ trình."
            : `Thiếu khoảng ${formatHours(round1(target - avg))} giờ mỗi tuần so với mục tiêu, nên lộ trình sẽ dài hơn ước tính.`}
        </p>
        <p className="mt-1 text-ink-soft">
          Tổng đã ghi: {formatHours(total)} giờ. Theo Cambridge, từ A2 tới C1 cần khoảng {needLo}–{needHi} giờ học.
        </p>
      </div>
    </section>
  );
}
