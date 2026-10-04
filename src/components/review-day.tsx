"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Lock } from "lucide-react";
import { PLAN_START } from "@/content/my-plan";
import { WEEKDAY_VI } from "@/content/today";
import { useAuth } from "@/lib/auth";
import { plan, usePlan } from "@/lib/my-plan";
import { todayKey } from "@/lib/progress-core";
import { useProgress } from "@/lib/progress";
import type { PlanInput } from "@/lib/plan-stage";
import { drawReview, studyDays, type ReviewBank } from "@/lib/review-day";
import { daysBetween, parseDayKey } from "@/lib/schedule-describe";
import { StepExercise } from "@/components/lesson/step-exercise";
import { EmptyState } from "@/components/ui/empty-state";

/** pass mark for a day's review; below it the day's lessons are worth going over again */
const REVIEW_PASS = 70;

const dayLabel = (k: string) => {
  const d = parseDayKey(k);
  const n = daysBetween(PLAN_START, k) + 1;
  return `${WEEKDAY_VI[d.getDay()]}, ${k.slice(8, 10)}/${k.slice(5, 7)}/${k.slice(0, 4)}${n >= 1 ? ` (ngày ${n})` : ""}`;
};

function Quiz({ date, lessons, bank }: { date: string; lessons: string[]; bank: ReviewBank }) {
  const [items] = useState(() => drawReview(lessons, bank, Math.random));
  const [score, setScore] = useState<number | null>(null);
  const weak = lessons.filter((k) => bank[k]);
  return (
    <div>
      <StepExercise
        items={items}
        onComplete={(r) => {
          plan.saveReview(date, r.score);
          setScore(r.score);
        }}
      />
      {score !== null && (
        <div role="status" className={`mt-5 rounded-2xl border-[2.5px] border-ink px-5 py-4 ${score >= REVIEW_PASS ? "bg-leaf-soft" : "bg-sun-soft"}`}>
          <p className="font-semibold">
            {score >= REVIEW_PASS
              ? `Đạt ${score}%: bạn vẫn nắm được kiến thức của ngày này.`
              : `Đạt ${score}%: kiến thức của ngày này đã phai bớt. Nên học lại các bài dưới đây rồi ôn lại vào hôm khác.`}
          </p>
          {score < REVIEW_PASS && (
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
              {weak.map((k) => (
                <li key={k}>
                  <Link href={`/hoc/${k}`} className="underline underline-offset-4">{bank[k].title}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export function ReviewDay({ bank, input }: { bank: ReviewBank; input: PlanInput }) {
  const { session, ready } = useAuth();
  const { state, ready: progressReady } = useProgress();
  const data = usePlan();
  const router = useRouter();
  const param = useSearchParams().get("ngay");

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
  const days = studyDays(data, state, bank, input, today);
  if (days.length === 0) {
    return (
      <div>
        <h1 className="font-display text-5xl font-extrabold leading-tight">Ôn lại ngày đã học</h1>
        <div className="mt-8">
          <EmptyState title="Chưa có ngày nào để ôn" body="Học xong các việc của một ngày (tích Đã ôn chủ điểm ngữ pháp, hoặc học xong một bài), ngày đó sẽ hiện ở đây để ôn lại.">
            <Link href="/hom-nay" className="btn btn-primary">Hôm nay học gì</Link>
          </EmptyState>
        </div>
      </div>
    );
  }
  // by default the latest day before today: "did I keep what I did yesterday?"
  const picked = days.find((d) => d.date === param) ?? days.find((d) => d.date < today) ?? days[0];
  const lessons = picked.lessons.filter((k) => bank[k]);
  const last = data.reviews[picked.date];

  return (
    <div className="space-y-10">
      <header>
        <h1 className="font-display text-5xl font-extrabold leading-tight">Ôn lại ngày đã học</h1>
        <p className="mt-3 max-w-3xl text-lg">
          Kiểm tra xem bạn còn nắm được những gì đã học trong một ngày: tự nhớ lại các điểm chính trước, rồi làm vài câu hỏi rút từ chính các bài của ngày đó
          (thứ tự đáp án được xáo lại mỗi lần).
        </p>
        <label className="mt-6 block max-w-xl">
          <span className="block font-semibold">Chọn ngày muốn ôn</span>
          <select
            value={picked.date}
            onChange={(e) => router.push(`/on-lai?ngay=${e.target.value}`)}
            className="mt-2 w-full rounded-xl border-[2.5px] border-ink bg-card px-3 py-2.5 text-lg"
          >
            {days.map((d) => (
              <option key={d.date} value={d.date}>
                {d.date === today ? "Hôm nay, " : ""}
                {dayLabel(d.date)}: {d.lessons.length} bài{data.reviews[d.date] ? `, lần ôn trước ${data.reviews[d.date].score}%` : ""}
              </option>
            ))}
          </select>
        </label>
        {last && (
          <p className="mt-2 text-ink-soft">
            Lần ôn trước của ngày này: {last.score}% ({last.at.slice(8, 10)}/{last.at.slice(5, 7)}).
          </p>
        )}
      </header>

      <section aria-labelledby="recall">
        <h2 id="recall" className="font-display text-3xl font-extrabold">1. Tự nhớ lại</h2>
        <p className="mt-2 max-w-3xl text-ink-soft">
          Với mỗi bài, nói to hoặc viết ra giấy những điểm chính bạn còn nhớ (công thức, cách dùng, một ví dụ của bạn). Xong rồi mới mở để so.
        </p>
        <ul className="mt-5 grid gap-4">
          {lessons.map((k) => (
            <li key={k} className="clay p-5">
              <p className="font-display text-xl font-bold">{bank[k].title}</p>
              {bank[k].points.length > 0 ? (
                <details className="mt-2">
                  <summary className="inline-flex min-h-11 cursor-pointer items-center font-semibold underline underline-offset-4">Đã nghĩ xong, xem các điểm chính</summary>
                  <ul className="mt-2 list-disc space-y-1 pl-6">
                    {bank[k].points.map((p) => (
                      <li key={p}>{p.replace(/\*\*/g, "")}</li>
                    ))}
                  </ul>
                </details>
              ) : (
                <p className="mt-2 text-ink-soft">Bài này không có phần Ghi nhớ; mở lại bài để so.</p>
              )}
              <Link href={`/hoc/${k}`} className="mt-2 inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-4">Mở lại bài</Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="quiz">
        <h2 id="quiz" className="font-display text-3xl font-extrabold">2. Kiểm tra nhanh</h2>
        <p className="mt-2 max-w-3xl text-ink-soft">Làm không mở lại bài. Đạt từ {REVIEW_PASS}% là bạn vẫn nắm vững; thấp hơn thì nên học lại.</p>
        <div className="mt-5">
          <Quiz key={picked.date} date={picked.date} lessons={lessons} bank={bank} />
        </div>
      </section>

      <Link href="/hom-nay" className="btn btn-ghost">Về Hôm nay học gì</Link>
    </div>
  );
}
