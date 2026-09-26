"use client";

import Link from "next/link";
import { Flame, Gauge, Layers, NotebookPen } from "lucide-react";
import type { Course } from "@/content/types";
import { suggestCourseSlug } from "@/lib/course-utils";
import { certificateStatus, courseProgress, displayStreak, isDue, lessonKey, todayKey, topicKey, vocabKey } from "@/lib/progress-core";
import { useProgress } from "@/lib/progress";
import { GOAL_META } from "@/components/course/goal-meta";
import { EmptyState } from "@/components/ui/empty-state";
import { PersistNotice } from "@/components/ui/persist-notice";
import { ProgressBar } from "@/components/ui/progress-bar";

export function MyCourses({ courses }: { courses: Course[] }) {
  const { state, ready } = useProgress();
  if (!ready) return <div className="clay mt-10 h-64 animate-pulse bg-card" aria-hidden />;

  const mine = courses.filter((c) => state.enrolled.includes(c.slug));
  const streak = displayStreak(state.streak, todayKey());
  const lessonsDone = Object.values(state.lessons).filter((l) => l.done).length;
  const placement = state.placement;
  const suggested = placement ? courses.find((c) => c.slug === suggestCourseSlug(placement.startLevel)) : null;
  const today = todayKey();
  const dueWords = courses.reduce(
    (n, c) =>
      n +
      c.modules
        .flatMap((m) => m.lessons)
        .filter((l) => state.lessons[lessonKey(c.slug, l.slug)]?.done)
        .flatMap((l) => l.steps.flatMap((s) => (s.type === "vocab" ? s.words : [])))
        .concat((c.wordBank ?? []).filter((t) => state.topics.includes(topicKey(c.slug, t.id))).flatMap((t) => t.words))
        .filter((w) => isDue(state.srs[vocabKey(c.slug, w.word)], today)).length,
    0,
  );

  return (
    <div className="mt-10 space-y-10">
      <PersistNotice />
      {dueWords > 0 && (
        <Link href="/on-tap-tu-vung" className="clay flex items-center gap-4 bg-sun-soft p-5 transition-transform duration-200 hover:-translate-y-0.5">
          <Layers className="size-9 shrink-0 text-tangerine-deep" aria-hidden />
          <span>
            <span className="block font-display text-2xl font-extrabold">{dueWords} từ vựng đến lượt ôn</span>
            <span className="block text-ink-soft">Vài phút ôn hôm nay giúp bạn nhớ lâu những từ đã học.</span>
          </span>
        </Link>
      )}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="clay flex items-center gap-4 p-5">
          <Flame className="size-9 text-tangerine-deep" aria-hidden />
          <div>
            <p className="font-display text-3xl font-extrabold">{streak} ngày</p>
            <p className="text-ink-soft">học liên tiếp</p>
          </div>
        </div>
        <div className="clay flex items-center gap-4 p-5">
          <NotebookPen className="size-9 text-grape" aria-hidden />
          <div>
            <p className="font-display text-3xl font-extrabold">{lessonsDone} bài</p>
            <p className="text-ink-soft">đã hoàn thành</p>
          </div>
        </div>
        <div className="clay flex items-center gap-4 p-5">
          <Gauge className="size-9 text-leaf" aria-hidden />
          {state.placement ? (
            <div>
              <p className="font-display text-3xl font-extrabold">{state.placement.startLevel}</p>
              <p className="text-ink-soft">cấp nên bắt đầu, theo bài kiểm tra</p>
            </div>
          ) : (
            <Link href="/kiem-tra-trinh-do" className="font-semibold underline underline-offset-4">
              Làm bài kiểm tra trình độ
            </Link>
          )}
        </div>
      </div>

      {mine.length === 0 ? (
        <EmptyState
          title="Bạn chưa đăng ký khóa học nào"
          body="Làm bài kiểm tra 20 phút để biết nên bắt đầu từ đâu, hoặc bắt đầu ngay một bài miễn phí."
        >
          {suggested ? (
            <Link href={`/khoa-hoc/${suggested.slug}`} className="btn btn-primary">Xem khóa gợi ý: {suggested.title}</Link>
          ) : (
            <Link href="/kiem-tra-trinh-do" className="btn btn-primary">Kiểm tra trình độ</Link>
          )}
          <Link href="/bat-dau" className="btn btn-ghost">Hướng dẫn cho người mới</Link>
        </EmptyState>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {mine.map((c) => {
            const p = courseProgress(c, state);
            return (
              <article key={c.slug} className={`clay flex flex-col p-6 ${GOAL_META[c.goal].tone}`}>
                <h2 className="font-display text-2xl font-extrabold">{c.title}</h2>
                <ProgressBar value={p.percent} label={`Tiến độ ${c.title} ${p.percent}%`} className="mt-5" />
                <p className="mt-2 font-medium">Đã học {p.done}/{p.total} bài ({p.percent}%)</p>
                <div className="mt-6">
                  {p.nextLesson ? (
                    <Link href={`/hoc/${c.slug}/${p.nextLesson.slug}`} className="btn btn-primary">
                      Học tiếp: {p.nextLesson.title}
                    </Link>
                  ) : (
                    <Link href={`/hoc/${c.slug}/hoan-thanh`} className="btn btn-primary">
            {certificateStatus(c, state).status === "final-failed" ? "Làm lại bài kiểm tra" : "Xem chứng chỉ"}
          </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
