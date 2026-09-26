"use client";

import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import type { Course } from "@/content/types";
import { suggestCourseSlug } from "@/lib/course-utils";
import { courseProgress, isDue, lessonKey, todayKey, topicKey, vocabKey } from "@/lib/progress-core";
import { useProgress } from "@/lib/progress";

interface Step {
  title: string;
  body: string;
  href: string;
  cta: string;
  alt?: { href: string; label: string };
}

/** "Bước tiếp theo của bạn": the single most useful next action, from the learner's saved progress. */
export function NextStep({ courses }: { courses: Course[] }) {
  const { state, ready } = useProgress();
  if (!ready) return <div className="clay h-44 animate-pulse bg-card" aria-hidden />;

  const pronunciation = courses.find((c) => c.goal === "phat-am");
  const started = courses
    .filter((c) => state.enrolled.includes(c.slug))
    .map((c) => ({ c, p: courseProgress(c, state) }))
    .filter(({ p }) => p.done > 0 || p.nextLesson);
  // the course touched most recently is the one to continue
  const lastDone = (c: Course) =>
    Math.max(0, ...c.modules.flatMap((m) => m.lessons).map((l) => Date.parse(state.lessons[lessonKey(c.slug, l.slug)]?.completedAt ?? "") || 0));
  const current = started.sort((a, b) => lastDone(b.c) - lastDone(a.c))[0];

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

  let step: Step;
  if (current?.p.nextLesson) {
    step = {
      title: `Học tiếp: ${current.p.nextLesson.title}`,
      body: `Bạn đang học ${current.c.title}, đã xong ${current.p.done}/${current.p.total} bài. Mỗi lần học một bài, làm đủ các bước theo thứ tự.`,
      href: `/hoc/${current.c.slug}/${current.p.nextLesson.slug}`,
      cta: "Vào bài tiếp theo",
    };
  } else if (current) {
    step = {
      title: `Bạn đã học xong ${current.c.title}`,
      body: "Xem chứng chỉ của bạn, rồi chuyển sang cấp tiếp theo. Nhớ vẫn ôn từ vựng mỗi ngày.",
      href: `/hoc/${current.c.slug}/hoan-thanh`,
      cta: "Xem chứng chỉ",
      alt: { href: "/khoa-hoc", label: "Chọn cấp tiếp theo" },
    };
  } else if (state.placement) {
    const suggested = courses.find((c) => c.slug === suggestCourseSlug(state.placement!.startLevel));
    const beginner = state.placement.startLevel === "A1";
    step = beginner && pronunciation
      ? {
          title: "Bắt đầu với Bước 0: phát âm",
          body: "Bài kiểm tra gợi ý bạn bắt đầu từ A1. Học Bước 0 trước (khoảng 5 giờ) để đọc đúng phiên âm, rồi vào khóa A1.",
          href: `/khoa-hoc/${pronunciation.slug}`,
          cta: "Xem khóa Bước 0",
          alt: suggested ? { href: `/khoa-hoc/${suggested.slug}`, label: "Hoặc vào thẳng A1" } : undefined,
        }
      : {
          title: `Bắt đầu khóa ${suggested?.title ?? state.placement.startLevel}`,
          body: `Bài kiểm tra gợi ý bạn bắt đầu từ cấp ${state.placement.startLevel}. Học lần lượt từng bài theo giáo trình.`,
          href: suggested ? `/khoa-hoc/${suggested.slug}` : "/khoa-hoc",
          cta: "Xem khóa học",
        };
  } else {
    step = {
      title: "Làm bài kiểm tra trình độ",
      body: "40 câu, khoảng 20 phút. Kết quả cho biết bạn nên bắt đầu từ cấp nào, để không học lại điều đã biết hay nhảy quá xa.",
      href: "/kiem-tra-trinh-do",
      cta: "Làm bài kiểm tra",
      alt: pronunciation ? { href: `/khoa-hoc/${pronunciation.slug}`, label: "Mất gốc hoàn toàn? Vào thẳng Bước 0" } : undefined,
    };
  }

  return (
    <section className="clay bg-sun-soft p-6 sm:p-8" aria-labelledby="next-step">
      <p className="flex items-center gap-2 text-sm font-semibold text-ink-soft">
        <Compass className="size-4" aria-hidden />
        Bước tiếp theo của bạn
      </p>
      <h2 id="next-step" className="mt-2 font-display text-3xl font-extrabold leading-tight">{step.title}</h2>
      <p className="mt-2 max-w-2xl text-lg">{step.body}</p>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Link href={step.href} className="btn btn-primary">
          {step.cta}
          <ArrowRight className="size-5" aria-hidden />
        </Link>
        {step.alt && <Link href={step.alt.href} className="btn btn-ghost">{step.alt.label}</Link>}
      </div>
      {dueWords > 0 && (
        <p className="mt-5 rounded-2xl border-2 border-ink bg-card px-4 py-3">
          Hôm nay có <strong>{dueWords} từ</strong> đến lượt ôn.{" "}
          <Link href="/on-tap-tu-vung" className="font-semibold underline underline-offset-4">Ôn ngay (vài phút)</Link>
        </p>
      )}
    </section>
  );
}
