"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Course } from "@/content/types";
import { flattenLessons } from "@/lib/course-utils";
import { formatVnd } from "@/lib/format";
import { courseProgress } from "@/lib/progress-core";
import { progress, useProgress } from "@/lib/progress";
import { ProgressBar } from "@/components/ui/progress-bar";

export function EnrollPanel({ course }: { course: Course }) {
  const { state, ready } = useProgress();
  const router = useRouter();
  const [notified, setNotified] = useState(false);
  const lessons = flattenLessons(course);
  const firstFree = lessons.find((x) => x.lesson.free)?.lesson ?? null;
  const enrolled = state.enrolled.includes(course.slug);
  const p = courseProgress(course, state);

  const price = (
    <>
      <p className="font-display text-3xl font-extrabold">
        {formatVnd(course.priceVnd)}
        <span className="text-lg font-semibold text-ink-soft">/tháng</span>
      </p>
      <p className="mt-1 text-ink-soft">{course.durationWeeks} tuần, {lessons.length} bài học</p>
    </>
  );

  if (!ready) return <div className="clay h-56 animate-pulse bg-card" aria-hidden />;

  if (course.status === "soon") {
    return (
      <div className="clay p-6">
        {price}
        <button type="button" className="btn btn-primary mt-6 w-full" onClick={() => setNotified(true)} disabled={notified}>
          Báo tôi khi mở lớp
        </button>
        {notified && <p role="status" className="mt-3 font-medium">Đã ghi nhận yêu cầu của bạn.</p>}
      </div>
    );
  }

  if (enrolled) {
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
      {price}
      <button
        type="button"
        className="btn btn-primary mt-6 w-full"
        onClick={() => {
          progress.enroll(course.slug);
          router.push(`/hoc/${course.slug}/${lessons[0].lesson.slug}`);
        }}
      >
        Đăng ký khóa học
      </button>
      {firstFree && (
        <Link href={`/hoc/${course.slug}/${firstFree.slug}`} className="btn btn-ghost mt-3 w-full">
          Học thử: {firstFree.title}
        </Link>
      )}
    </div>
  );
}
