import { OFFICIAL_CHECKS } from "@/content/my-plan";
import type { Level, SelfStudyPlan } from "@/content/types";
import { judgeExam, type ExamRecord, type ExamVerdict, type PlanData } from "./my-plan-core";
import { PLACEMENT_LEVELS } from "./placement";
import { lessonKey, type ProgressState } from "./progress-core";

export interface PlanGrammar { slug: string; title: string; chapter: string; video: boolean }
export interface PlanLesson {
  slug: string;
  title: string;
  minutes: number;
  kind: "lesson" | "review" | "final";
  /** the grammar point its lecture teaches */
  lecture?: string;
  /** a video or outside link goes with the lecture */
  media?: "youtube" | "link";
}
export interface PlanLevel {
  slug: string;
  title: string;
  level: Level;
  contentHours: number;
  /** Cambridge guided learning hours for this level alone */
  band: [number, number];
  weeks: [number, number];
  /** site time plus self-study, per week */
  weeklyHours: number;
  selfStudy: SelfStudyPlan | null;
  wordTopics: number;
  finalSlug: string | null;
  /** the level's word-bank topic ids */
  topics: string[];
  chapters: { title: string; lessons: PlanLesson[] }[];
}

/** Everything the plan is built from, read from the courses at build time. */
export interface PlanInput {
  baseCourse: string;
  /** the A1 lessons whose grammar the base stage fills in, in order */
  grammar: PlanGrammar[];
  ipaCourse: string;
  /** the pronunciation lessons the base stage teaches alongside */
  ipa: PlanLesson[];
  levels: PlanLevel[];
}

/** The plan asks more of the final test than the certificate does: the same 80% that marks a lesson as weak. */
export const PLAN_FINAL_PASS = 80;

export interface LevelStatus {
  lessons: PlanLesson[];
  /** lessons done, the final test not counted */
  done: number;
  /** lessons to study, the final test not counted */
  toStudy: number;
  nextLesson: PlanLesson | undefined;
  finalScore: number | null;
  /** when the final test was last taken */
  finalAt: string | null;
  finalPassed: boolean;
  /** when the last lesson was finished, once all are */
  lessonsDoneAt: string | null;
  /** the placement check was taken after the last lesson, whatever its result */
  placementTaken: boolean;
  certificate: boolean;
  placementPassed: boolean;
  exam: ExamVerdict | null;
  examPassed: boolean;
  passed: boolean;
  weak: { lesson: PlanLesson; score: number }[];
}

export function levelStatus(l: PlanLevel, state: ProgressState, exams: Record<string, ExamRecord>): LevelStatus {
  const lessons = l.chapters.flatMap((c) => c.lessons);
  const rec = (slug: string) => state.lessons[lessonKey(l.slug, slug)];
  const study = lessons.filter((x) => x.kind !== "final");
  const done = study.filter((x) => rec(x.slug)?.done).length;
  const finalScore = l.finalSlug ? (rec(l.finalSlug)?.score ?? null) : null;
  const finalPassed = l.finalSlug ? (finalScore ?? 0) >= PLAN_FINAL_PASS : true;
  const certificate = done === study.length && finalPassed;
  const placement = state.placement;
  // the retest counts only when taken after the last lesson, so it measures the finished course
  const lessonsDoneAt = done === study.length ? study.reduce((t, x) => (rec(x.slug)!.completedAt > t ? rec(x.slug)!.completedAt : t), "") : null;
  // placement.level is the highest level passed with every lower one passed too
  const placementTaken = !!placement && lessonsDoneAt !== null && placement.takenAt > lessonsDoneAt;
  const placementPassed =
    placementTaken &&
    PLACEMENT_LEVELS.indexOf(placement.level as (typeof PLACEMENT_LEVELS)[number]) >= PLACEMENT_LEVELS.indexOf(l.level as (typeof PLACEMENT_LEVELS)[number]);
  const exam = judgeExam(OFFICIAL_CHECKS[l.level], exams[l.level]);
  // a result counts only when it names the official sample it came from
  const examPassed = exam?.passed === true && !!exams[l.level]?.sample;
  const weak = study.flatMap((x) => {
    const s = rec(x.slug)?.score;
    return rec(x.slug)?.done && s != null && s < 80 ? [{ lesson: x, score: s }] : [];
  });
  return {
    lessons,
    done,
    toStudy: study.length,
    // the final test comes last, after every lesson
    nextLesson: study.find((x) => !rec(x.slug)?.done),
    finalScore,
    finalAt: l.finalSlug ? (rec(l.finalSlug)?.completedAt ?? null) : null,
    finalPassed,
    lessonsDoneAt,
    placementTaken,
    certificate,
    placementPassed,
    exam,
    examPassed,
    // the placement retest is a quick sanity check; the official sample test is the gate
    passed: certificate && examPassed,
    weak,
  };
}

export interface PlanStage {
  /** A1 topics done: the lesson finished or the topic ticked as reviewed */
  grammarDone: number;
  ipaDone: number;
  drillsDone: number;
  baseDone: boolean;
  statuses: LevelStatus[];
  /** index of the level being studied; -1 while on the base stage or when everything is passed */
  current: number;
  /** levels passed in order */
  levelsPassed: number;
  allDone: boolean;
}

export const grammarDoneOf = (input: PlanInput, state: ProgressState, data: PlanData, slug: string) =>
  data.done.includes(`g:${slug}`) || state.lessons[lessonKey(input.baseCourse, slug)]?.done === true;

/** Where the learner is on the plan: stages are taken in order, the first one not passed is the current one. */
export function planStage(input: PlanInput, state: ProgressState, data: PlanData): PlanStage {
  const { grammar, ipa, levels } = input;
  const grammarDone = grammar.filter((g) => grammarDoneOf(input, state, data, g.slug)).length;
  const ipaDone = ipa.filter((x) => state.lessons[lessonKey(input.ipaCourse, x.slug)]?.done).length;
  const drillsDone = data.done.filter((x) => x.startsWith("d:")).length;
  const baseDone = grammarDone === grammar.length && ipaDone === ipa.length;
  const statuses = levels.map((l) => levelStatus(l, state, data.exams));
  const current = baseDone ? statuses.findIndex((s) => !s.passed) : -1;
  return {
    grammarDone,
    ipaDone,
    drillsDone,
    baseDone,
    statuses,
    current,
    levelsPassed: !baseDone ? 0 : current === -1 ? levels.length : current,
    allDone: baseDone && current === -1,
  };
}
