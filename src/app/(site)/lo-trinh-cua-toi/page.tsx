import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DAILY_MINUTES, PLAN_COURSES } from "@/content/my-plan";
import type { Course, Level } from "@/content/types";
import { MyPlan, type PlanLevel } from "@/components/my-plan";
import { getCourse } from "@/lib/content";
import { GUIDED_HOURS, contentHours } from "@/lib/course-utils";
import { grammarIndex } from "@/lib/grammar";

export const metadata: Metadata = { title: "Lộ trình của tôi | Crouse English", robots: { index: false, follow: false } };

/** the grammar base to fill first */
const BASE_COURSE = "tieng-anh-a1";
const PREVIOUS: Record<Level, Level | null> = { A1: null, A2: "A1", B1: "A2", B2: "B1", C1: "B2" };

function toPlanLevel(c: Course): PlanLevel {
  const prev = PREVIOUS[c.level];
  const [lo, hi] = GUIDED_HOURS[c.level];
  // Cambridge's hours are cumulative from beginner; this level's share is the difference to the previous one
  const band: [number, number] = prev ? [lo - GUIDED_HOURS[prev][0], hi - GUIDED_HOURS[prev][1]] : [lo, hi];
  const weekly = (DAILY_MINUTES * 7) / 60 + (c.selfStudy?.weeklyHours ?? 0);
  const lessons = c.modules.flatMap((m) => m.lessons);
  return {
    slug: c.slug,
    title: c.title,
    level: c.level,
    contentHours: contentHours(c),
    band,
    weeks: [Math.ceil(band[0] / weekly), Math.ceil(band[1] / weekly)],
    weeklyHours: Math.round(weekly),
    selfStudy: c.selfStudy ?? null,
    wordTopics: c.wordBank?.length ?? 0,
    finalSlug: lessons.find((l) => l.final)?.slug ?? null,
    chapters: c.modules.map((m) => ({
      title: m.title,
      lessons: m.lessons.map((l) => ({ slug: l.slug, title: l.title, minutes: l.minutes, kind: l.final ? "final" : l.review ? "review" : "lesson" })),
    })),
  };
}

export default async function MyPlanPage() {
  const [base, ...courses] = await Promise.all([getCourse(BASE_COURSE), ...PLAN_COURSES.map((s) => getCourse(s))]);
  if (!base || courses.some((c) => !c)) notFound();
  const grammar = grammarIndex([base]).map((e) => ({ slug: e.lessonSlug, title: e.lectureTitle, chapter: e.chapterTitle }));
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <MyPlan baseCourse={base.slug} grammar={grammar} levels={(courses as Course[]).map(toPlanLevel)} />
    </div>
  );
}
