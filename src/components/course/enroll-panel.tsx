"use client";

import Link from "next/link";
import { useState } from "react";
import type { Course } from "@/content/types";
import { flattenLessons } from "@/lib/course-utils";
import { courseProgress } from "@/lib/progress-core";
import { useProgress } from "@/lib/progress";
import { ProgressBar } from "@/components/ui/progress-bar";

export function EnrollPanel({ course }: { course: Course }) {
  const { state, ready } = useProgress();
  const [notified, setNotified] = useState(false);
  const lessons = flattenLessons(course);
  const p = courseProgress(course, state);
  const started = p.done > 0;

  const summary = (
    <>
      <p className="font-display text-3xl font-extrabold">Miễn phí</p>
      <p className="mt-1 text-ink-soft">
        {lessons.length} bài học, khoảng {course.durationWeeks} tuần. Không cần đăng ký tài khoản.
      </p>
    </>
  );

  if (!ready) return <div className="clay h-56 animate-pulse bg-card" aria-hidden />;

  if (course.status === "soon") {
    return (
      <div className="clay p-6">
        {summary}
        <button type="button" className="btn btn-primary mt-6 w-full" onClick={() => setNotified(true)} disabled={notified}>
          Báo tôi khi mở khóa
        </button>
        {notified && <p role="status" className="mt-3 font-medium">Đã ghi nhận yêu cầu của bạn.</p>}
      </div>
    );
  }

  if (started) {
    return (
      <div className="clay p-6">
        <p className="font-display text-xl font-bold">Bạn đang học khóa này</p>
        <ProgressBar value={p.percent} label={`Tiến độ ${p.percent}%`} className="mt-4" />
        <p className="mt-2 text-ink-soft">Đã học {p.done}/{p.total} bài</p>
        {p.nextLesson ? (
          <Link href={`/hoc/${course.slug}/${p.nextLesson.slug}`} className="btn btn-primary mt-6 w-full">
            Học tiếp: {p.nextLesson.title}
          </Link>
        ) : (
          <Link href={`/hoc/${course.slug}/hoan-thanh`} className="btn btn-primary mt-6 w-full">Xem chứng chỉ</Link>
        )}
      </div>
    );
  }

  return (
    <div className="clay p-6">
      {summary}
      <Link href={`/hoc/${course.slug}/${lessons[0].lesson.slug}`} className="btn btn-primary mt-6 w-full">
        Bắt đầu học
      </Link>
    </div>
  );
}
