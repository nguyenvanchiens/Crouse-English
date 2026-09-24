"use client";

import { useSearchParams } from "next/navigation";
import type { Course, Goal, Level } from "@/content/types";
import { filterCourses, isGoal, isLevel } from "@/lib/course-utils";
import { Chip } from "@/components/ui/chip";
import { EmptyState } from "@/components/ui/empty-state";
import { CourseGrid } from "./course-card";
import { GOAL_META, LEVEL_LABEL } from "./goal-meta";

const GOALS = Object.keys(GOAL_META) as Goal[];
const LEVELS = Object.keys(LEVEL_LABEL) as Level[];

export function CourseCatalog({ courses }: { courses: Course[] }) {
  const params = useSearchParams();
  const goalParam = params.get("muc-tieu");
  const levelParam = params.get("trinh-do");
  const goal = isGoal(goalParam) ? goalParam : undefined;
  const level = isLevel(levelParam) ? levelParam : undefined;
  const shown = filterCourses(courses, { goal, level });

  function href(key: "muc-tieu" | "trinh-do", value: string | null) {
    const next = new URLSearchParams(params.toString());
    if (value === null) next.delete(key);
    else next.set(key, value);
    const qs = next.toString();
    return qs ? `/khoa-hoc?${qs}` : "/khoa-hoc";
  }

  return (
    <>
      <div className="mt-10 space-y-4">
        <div className="flex flex-wrap items-center gap-3" role="group" aria-label="Lọc theo mục tiêu">
          <span className="w-24 font-semibold text-ink-soft">Mục tiêu</span>
          <Chip href={href("muc-tieu", null)} active={!goal}>Tất cả</Chip>
          {GOALS.map((g) => (
            <Chip key={g} href={href("muc-tieu", g)} active={goal === g}>{GOAL_META[g].label}</Chip>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3" role="group" aria-label="Lọc theo trình độ">
          <span className="w-24 font-semibold text-ink-soft">Trình độ</span>
          <Chip href={href("trinh-do", null)} active={!level}>Tất cả</Chip>
          {LEVELS.map((l) => (
            <Chip key={l} href={href("trinh-do", l)} active={level === l}>{l}</Chip>
          ))}
        </div>
      </div>
      <p className="mt-8 text-ink-soft" role="status">{shown.length} khóa học</p>
      <div className="mt-4">
        {shown.length > 0 ? (
          <CourseGrid courses={shown} />
        ) : (
          <EmptyState title="Chưa có khóa học phù hợp" body="Thử bỏ bớt một bộ lọc để xem thêm khóa học." />
        )}
      </div>
    </>
  );
}
