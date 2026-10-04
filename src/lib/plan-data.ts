import { DAILY_MINUTES, PLAN_COURSES } from "@/content/my-plan";
import type { Course, LectureStep, Level } from "@/content/types";
import { getCourse } from "./content";
import { GUIDED_HOURS, contentHours } from "./course-utils";
import { grammarIndex } from "./grammar";
import type { PlanInput, PlanLesson, PlanLevel } from "./plan-stage";
import type { ReviewBank } from "./review-day";

/** the grammar base to fill first */
export const BASE_COURSE = "tieng-anh-a1";
/** the pronunciation course taught alongside the grammar base */
export const IPA_COURSE = "phat-am-ipa";
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
    topics: (c.wordBank ?? []).map((t) => t.id),
    chapters: c.modules.map((m) => ({
      title: m.title,
      lessons: m.lessons.map((l) => ({
        slug: l.slug,
        title: l.title,
        minutes: l.minutes,
        kind: l.final ? "final" : l.review ? "review" : "lesson",
        ...(l.steps.find((s): s is LectureStep => s.type === "lecture") ? { lecture: l.steps.find((s): s is LectureStep => s.type === "lecture")!.title } : {}),
        ...(l.media ? { media: l.media.kind } : {}),
      })),
    })),
  };
}

/** Everything the personal plan pages need, read from the course content at build time. */
export async function loadPlanInput(): Promise<PlanInput | null> {
  const [base, ipaCourse, ...courses] = await Promise.all([getCourse(BASE_COURSE), getCourse(IPA_COURSE), ...PLAN_COURSES.map((s) => getCourse(s))]);
  if (!base || !ipaCourse || courses.some((c) => !c)) return null;
  const ipa: PlanLesson[] = ipaCourse.modules
    .flatMap((m) => m.lessons)
    .filter((l) => !l.review && !l.final)
    .map((l) => ({ slug: l.slug, title: l.title, minutes: l.minutes, kind: "lesson" }));
  const media = new Set(base.modules.flatMap((m) => m.lessons).filter((l) => l.media?.kind === "youtube").map((l) => l.slug));
  const grammar = grammarIndex([base]).map((e) => ({ slug: e.lessonSlug, title: e.lectureTitle, chapter: e.chapterTitle, video: media.has(e.lessonSlug) }));
  return { baseCourse: base.slug, grammar, ipaCourse: ipaCourse.slug, ipa, levels: (courses as Course[]).map(toPlanLevel) };
}

/** Key points and exercises of every lesson the plan uses, for reviewing a past day. */
export async function loadReviewBank(): Promise<ReviewBank> {
  const courses = await Promise.all([BASE_COURSE, IPA_COURSE, ...PLAN_COURSES].map((s) => getCourse(s)));
  const bank: ReviewBank = {};
  for (const c of courses) {
    if (!c) continue;
    for (const l of c.modules.flatMap((m) => m.lessons)) {
      if (l.final) continue;
      const lecture = l.steps.find((s): s is LectureStep => s.type === "lecture");
      const points = lecture?.blocks.flatMap((b) => (b.kind === "summary" ? b.points : [])) ?? [];
      const items = l.steps.flatMap((s) => (s.type === "exercise" ? s.items : []));
      if (items.length) bank[`${c.slug}/${l.slug}`] = { title: l.title, points, items };
    }
  }
  return bank;
}
