import { ALL_DRILLS, drillLevelIndex } from "@/content/drills";
import { EXAM_PAPERS, OFFICIAL_CHECKS } from "@/content/my-plan";
import { SELF_STUDY_WEEK, type SelfStudySession } from "@/content/today";
import type { Level } from "@/content/types";
import { judgeExam, type PlanData } from "./my-plan-core";
import { PLAN_FINAL_PASS, grammarDoneOf, type PlanInput, type PlanStage } from "./plan-stage";
import { lessonKey, todayKey, type ProgressState } from "./progress-core";

/**
 * The whole path as a calendar, from a day onwards, recomputed from real progress every time it is shown.
 *
 * - Mon–Sat are study days; Sunday reviews the week (or holds the second half of a B2/C1 sample test).
 * - The base stage teaches one full A1 lesson a day, with one pronunciation lesson a day for the first
 *   eight days; every fourth day goes back over earlier A1 lessons.
 * - Each level's lessons are spread over Cambridge's lower estimate of weeks for it. The days between them
 *   bring new input (graded reading and listening), one redo of the lesson, its use in writing and
 *   speaking, a full revisit of an older lesson (weak ones first) and vocabulary; the last three weeks also
 *   practise one exam paper a week. The short spaced reviews 2, 7 and 21 days after each study day are a
 *   daily task of their own (see spacedDays in review-day.ts).
 * - The sentence-splitting drill bank is paced over each stage, graded to the level being studied; days
 *   without a drill from the bank split sentences from the day's own text.
 * - Each level ends with a test week: weak lessons, the final test (80%), a placement check once, one
 *   practice day per exam paper and the official sample test. A failed final or sample test brings targeted
 *   remedial days before the retake. Days already studied (the plan's day history) are counted, so a
 *   calendar rebuilt the next day moves the retake closer instead of starting the remedial days again.
 */
export type ConsolidateFocus = "redo" | "spaced" | "produce" | "words" | "input";
/** the order the days between lessons take, run on through the level */
const ROTATION: ConsolidateFocus[] = ["input", "spaced", "redo", "produce", "input", "words", "spaced", "input"];
/** full revisits of a lesson on a consolidation day, in days after it was learned */
const INTERVALS = [7, 21];
const BASE_REVIEW_EVERY = 4;

export type DayMain =
  | { kind: "grammar"; lesson: string; ipa: string | null; drills: string[] }
  | { kind: "base-review"; lessons: string[]; drills: string[] }
  | { kind: "lesson"; course: string; lesson: string; drills: string[] }
  | { kind: "consolidate"; course: string; focus: ConsolidateFocus; target: string | null; drills: string[] }
  | { kind: "weak"; course: string; lessons: string[]; drills: string[] }
  | { kind: "paper"; course: string; paper: string; /** times this paper was practised before in the level */ set?: number }
  | { kind: "final"; course: string }
  | { kind: "placement"; course: string }
  | { kind: "exam"; course: string; part: "all" | "written" | "oral" }
  | { kind: "remedy"; course: string; skill: string; drills: string[] }
  | { kind: "week-review" }
  | { kind: "done" };

export interface ScheduleDay {
  date: string;
  weekday: number;
  /** -1 the base stage, 0… the levels, levels.length when the path is done */
  stage: number;
  main: DayMain;
  selfStudy: SelfStudySession | null;
}

export interface ScheduleInput {
  input: PlanInput;
  stage: PlanStage;
  state: ProgressState;
  data: PlanData;
}

const MAX_DAYS = 1000;
/** exams this long are split over Saturday and Sunday */
export const SPLIT_MINUTES = 200;

export function buildSchedule(from: Date, { input, stage, state, data }: ScheduleInput): ScheduleDay[] {
  const { grammar, ipa, levels, ipaCourse } = input;
  const days: ScheduleDay[] = [];
  const cursor = new Date(from.getFullYear(), from.getMonth(), from.getDate(), 12);
  const push = (stageIdx: number, main: DayMain) => {
    const lvl = stageIdx < 0 ? levels[0] : levels[Math.min(stageIdx, levels.length - 1)];
    days.push({ date: todayKey(cursor), weekday: cursor.getDay(), stage: stageIdx, main, selfStudy: daySelfStudy(main, lvl?.level, cursor.getDay()) });
    cursor.setDate(cursor.getDate() + 1);
  };
  /** puts a study-day item on the next Mon–Sat, with a week review on any Sunday on the way */
  const study = (stageIdx: number, main: DayMain) => {
    while (cursor.getDay() === 0) push(stageIdx, { kind: "week-review" });
    push(stageIdx, main);
  };

  // the sentence drill stream, easiest first, at most one level above the level being studied
  const drillQueue = ALL_DRILLS.filter((d) => !data.done.includes(`d:${d.id}`));
  const takeDrills = (n: number, levelIdx: number) => {
    const out: string[] = [];
    for (let k = 0; k < drillQueue.length && out.length < n; k++) {
      if (drillLevelIndex(drillQueue[k].level) <= levelIdx) {
        out.push(drillQueue[k].id);
        drillQueue.splice(k--, 1);
      }
    }
    return out;
  };
  // the bank is paced over each stage, so the drills of a level last the whole level
  let pace = { rate: 1, acc: 0 };
  const setPace = (levelIdx: number, studyDays: number) => {
    const n = drillQueue.filter((d) => drillLevelIndex(d.level) <= levelIdx).length;
    pace = { rate: Math.min(2, n / Math.max(studyDays, 1)), acc: 0.999 };
  };
  const paced = (levelIdx: number, max = 2) => {
    pace.acc += pace.rate;
    const ids = takeDrills(Math.min(max, Math.floor(pace.acc)), levelIdx);
    pace.acc -= ids.length;
    return ids;
  };
  const giveBack = (ids: string[]) => {
    drillQueue.unshift(...ALL_DRILLS.filter((d) => ids.includes(d.id)));
    pace.acc += ids.length - pace.rate;
  };
  // days already studied, from the plan's day history (the calendar itself starts again from today)
  const fromKey = todayKey(from);
  const dayOfIso = (iso: string | null | undefined) => (iso ? todayKey(new Date(iso)) : null);
  const studied = (course: string, since: string | null, match: (m: DayMain) => boolean) =>
    since === null ? [] : data.history.filter((h) => h.date >= since && h.date < fromKey && "course" in h.main && h.main.course === course && match(h.main));

  // ---- the base stage
  if (!stage.baseDone) {
    const g = grammar.filter((x) => !grammarDoneOf(input, state, data, x.slug)).map((x) => x.slug);
    const p = ipa.filter((x) => !state.lessons[lessonKey(ipaCourse, x.slug)]?.done).map((x) => x.slug);
    const learned = grammar.filter((x) => grammarDoneOf(input, state, data, x.slug)).map((x) => ({ slug: x.slug, at: -9, times: 0 }));
    let n = 0;
    setPace(0, g.length + Math.ceil(g.length / (BASE_REVIEW_EVERY - 1)) + 2);
    while ((g.length || p.length) && days.length < MAX_DAYS) {
      n++;
      const old = learned.filter((x) => days.length - x.at >= 2).sort((a, b) => a.times - b.times || a.at - b.at);
      if (n % BASE_REVIEW_EVERY === 0 && old.length) {
        const pick = old.slice(0, 2);
        for (const x of pick) x.times++;
        study(-1, { kind: "base-review", lessons: pick.map((x) => x.slug), drills: paced(0) });
        continue;
      }
      const lesson = g.shift() ?? "";
      const ip = p.shift() ?? null;
      study(-1, { kind: "grammar", lesson, ipa: ip, drills: paced(0) });
      if (lesson) learned.push({ slug: lesson, at: days.length, times: 0 });
    }
  }

  if (stage.baseDone && stage.current === -1) {
    push(levels.length, { kind: "done" });
    return days;
  }
  const first = stage.baseDone ? Math.max(stage.current, 0) : 0;

  for (let i = first; i < levels.length && days.length < MAX_DAYS; i++) {
    const l = levels[i];
    const st = stage.statuses[i];
    // drills up to this level; the A1 base level has index 0
    const lv = drillLevelIndex(l.level);
    const studyLessons = l.chapters.flatMap((c) => c.lessons).filter((x) => x.kind !== "final");
    const left = studyLessons.filter((x) => !state.lessons[lessonKey(l.slug, x.slug)]?.done);
    const budget = Math.max(left.length, Math.round(((l.weeks[0] - 1) * 6 * left.length) / Math.max(studyLessons.length, 1)));
    const papers = EXAM_PAPERS[l.level] ?? [];
    setPace(lv, budget + 10);
    // practice so far on each paper in this level, so each practice day uses a fresh practice set
    const practised = new Map(papers.map((p) => [p.id, studied(l.slug, "", (m) => m.kind === "paper" && m.paper === p.id).length]));
    const practise = (paper: string) => {
      const set = practised.get(paper) ?? 0;
      practised.set(paper, set + 1);
      study(i, { kind: "paper", course: l.slug, paper, set });
    };
    const scoreOf = (course: string, slug: string) => state.lessons[lessonKey(course, slug)]?.score ?? 100;

    // regular lessons learned, each with its spaced revisits still to come
    const learned = studyLessons
      .filter((x) => x.kind === "lesson" && state.lessons[lessonKey(l.slug, x.slug)]?.done)
      .map((x) => ({ slug: x.slug, due: [-1], weak: scoreOf(l.slug, x.slug) < PLAN_FINAL_PASS }));
    // weak lessons of the levels before come back once each
    const carried = levels
      .slice(0, i)
      .flatMap((pl) => pl.chapters.flatMap((c) => c.lessons).filter((x) => x.kind === "lesson" && scoreOf(pl.slug, x.slug) < PLAN_FINAL_PASS).map((x) => ({ course: pl.slug, slug: x.slug })));
    let last: string | null = learned.length ? learned[learned.length - 1].slug : null;
    let run = 0;
    let prev = "";
    let paperIdx = 0;
    let lastPaperWeek = -1;

    const dayFor = (focus: ConsolidateFocus, at: number): DayMain | null => {
      const drills = paced(lv);
      const base = { kind: "consolidate" as const, course: l.slug, focus, drills };
      if (focus === "spaced") {
        const due = learned.filter((x) => x.due.length && x.due[0] <= at && x.slug !== last).sort((a, b) => b.due.length - a.due.length || Number(b.weak) - Number(a.weak) || a.due[0] - b.due[0])[0];
        if (due) {
          due.due.shift();
          return { ...base, target: due.slug };
        }
        const c = carried.shift();
        if (c) return { ...base, course: c.course, target: c.slug };
      } else if (focus === "input" || focus === "words") return { ...base, target: null };
      else if (last) return { ...base, target: last };
      giveBack(drills);
      return null;
    };
    const consolidate = (k: number) => {
      const week = Math.floor(k / 6);
      // the last three weeks of lessons practise one exam paper a week
      if (papers.length && k >= budget - 18 && k < budget && week !== lastPaperWeek) {
        lastPaperWeek = week;
        practise(papers[paperIdx++ % papers.length].id);
        return;
      }
      const at = days.length;
      let main: DayMain | null = null;
      for (let tries = 0; tries < ROTATION.length && !main; tries++) {
        const m = dayFor(ROTATION[run++ % ROTATION.length], at);
        if (!m) continue;
        const key = JSON.stringify({ ...m, drills: [] });
        if (key !== prev) main = m;
        else if (m.kind === "consolidate") giveBack(m.drills);
      }
      main ??= { kind: "consolidate", course: l.slug, focus: "input", target: null, drills: paced(lv) };
      prev = JSON.stringify({ ...main, drills: [] });
      study(i, main);
    };

    for (let k = 0, placed = 0; k < budget; k++) {
      if (placed < left.length && Math.floor((placed * budget) / left.length) <= k) {
        const x = left[placed++];
        study(i, { kind: "lesson", course: l.slug, lesson: x.slug, drills: paced(lv, 1) });
        if (x.kind === "lesson") {
          const at = days.length;
          learned.push({ slug: x.slug, due: INTERVALS.map((d) => at + d), weak: false });
          last = x.slug;
          prev = "";
        }
      } else consolidate(k);
    }

    // ---- the test week
    const weak = studyLessons.filter((x) => x.kind === "lesson" && scoreOf(l.slug, x.slug) < PLAN_FINAL_PASS).map((x) => x.slug);
    // the test week starts once the last lesson is done; days of it already studied are not given again
    const lessonsDone = dayOfIso(st.lessonsDoneAt);
    if (!st.finalPassed) {
      // weak lessons before the final; a failed final gets a week of them before the retake
      const since = st.finalAt ? dayOfIso(st.finalAt) : lessonsDone;
      const planned = Math.min(5, st.finalScore != null ? 5 : Math.max(1, Math.ceil(weak.length / 2)));
      const had = studied(l.slug, since, (m) => m.kind === "weak").length;
      for (let r = had; r < planned; r++) study(i, { kind: "weak", course: l.slug, lessons: weak.slice(r * 2, r * 2 + 2), drills: paced(lv) });
      study(i, { kind: "final", course: l.slug });
    }
    // the placement check is advisory: once per level, whatever its result
    if (!st.placementTaken) study(i, { kind: "placement", course: l.slug });
    if (!st.examPassed) {
      // a failed sample test: targeted days on the sections that failed, then a fresh sample
      const record = data.exams[l.level];
      const verdict = judgeExam(OFFICIAL_CHECKS[l.level], record);
      const failedAt = verdict && !verdict.passed ? dayOfIso(record?.at) : null;
      if (verdict && !verdict.passed) {
        const failed = [
          ...verdict.sections.filter((s) => !s.ok).map((s) => s.id),
          ...(verdict.writing.ok ? [] : ["writing"]),
          ...(verdict.speaking.ok ? [] : ["speaking"]),
        ];
        const had = studied(l.slug, failedAt, (m) => m.kind === "remedy").length;
        for (let r = had; r < Math.max(6, failed.length * 3); r++) study(i, { kind: "remedy", course: l.slug, skill: failed[r % failed.length], drills: paced(lv) });
      }
      // one practice day per paper since the lessons ended (or since the failed sample)
      const since = failedAt ?? lessonsDone;
      for (const p of papers) if (!studied(l.slug, since, (m) => m.kind === "paper" && m.paper === p.id).length) practise(p.id);
      while (cursor.getDay() !== 6) consolidate(budget);
      if (papers.reduce((n, p) => n + p.minutes, 0) > SPLIT_MINUTES) {
        push(i, { kind: "exam", course: l.slug, part: "written" });
        push(i, { kind: "exam", course: l.slug, part: "oral" });
      } else push(i, { kind: "exam", course: l.slug, part: "all" });
    }
  }
  push(levels.length, { kind: "done" });
  return days;
}

/** The calendar's day for a date key, if the calendar reaches it. */
export function dayOf(days: ScheduleDay[], date: string): ScheduleDay | undefined {
  return days.find((d) => d.date === date);
}

/**
 * Days full enough without the weekday's self-study: the sample test, and practice on a paper longer than half
 * an hour (checking it takes as long again). The 25-minute final leaves room for it.
 */
export function fullDay(main: DayMain, level: string | undefined): boolean {
  if (main.kind === "done" || main.kind === "exam") return true;
  if (main.kind !== "paper" || !level) return false;
  const p = EXAM_PAPERS[level]?.find((x) => x.id === main.paper);
  return (p?.minutes ?? 0) > 30;
}

/** The weekday's self-study for a day, or null when the day is full enough without it. */
export function daySelfStudy(main: DayMain, level: Level | undefined, weekday: number): SelfStudySession | null {
  if (!level || fullDay(main, level)) return null;
  const s = SELF_STUDY_WEEK[level]?.[weekday];
  if (!s) return null;
  // the first days pair a full A1 lesson with a pronunciation lesson: a short self-study is enough to start
  if (main.kind === "grammar" && main.ipa && weekday !== 0)
    return { ...s, minutes: Math.min(s.minutes, 20), steps: [...s.steps.slice(0, 2), "Những ngày đầu đã có thêm bài phát âm, nên hôm nay tự học 20 phút là đủ: làm hai bước trên rồi dừng."] };
  return s;
}

/** Lesson keys a day teaches or revisits, for reviewing that day later. */
export function lessonsOfDay(main: DayMain, input: PlanInput): string[] {
  switch (main.kind) {
    case "grammar":
      return [...(main.lesson ? [`${input.baseCourse}/${main.lesson}`] : []), ...(main.ipa ? [`${input.ipaCourse}/${main.ipa}`] : [])];
    case "base-review":
      return main.lessons.map((s) => `${input.baseCourse}/${s}`);
    case "lesson":
      return [`${main.course}/${main.lesson}`];
    case "consolidate":
      return main.target ? [`${main.course}/${main.target}`] : [];
    case "weak":
      return main.lessons.map((s) => `${main.course}/${s}`);
    default:
      return [];
  }
}
