import { describe, expect, it } from "vitest";
import { SELF_STUDY_WEEK } from "@/content/today";
import { parsePlan, type PlanData } from "./my-plan-core";
import { planStage, type PlanInput, type PlanLevel } from "./plan-stage";
import { emptyState, todayKey, type ProgressState } from "./progress-core";
import { buildSchedule } from "./schedule";
import { buildToday, pickDay } from "./today";

const lessons = (n: number, prefix = "l") =>
  Array.from({ length: n }, (_, i) => ({ slug: `${prefix}${i + 1}`, title: `Bài ${i + 1}`, minutes: 30, kind: "lesson" as const, lecture: `Điểm ${i + 1}` }));
const level = (slug: string, lvl: PlanLevel["level"], n: number, weeks: number): PlanLevel => ({
  slug, title: slug, level: lvl, contentHours: 10, band: [100, 100], weeks: [weeks, weeks], weeklyHours: 10, selfStudy: null, wordTopics: 2, finalSlug: "final",
  topics: ["t1", "t2"], chapters: [{ title: "Ch", lessons: [...lessons(n), { slug: "final", title: "Kiểm tra", minutes: 25, kind: "final" }] }],
});
const input: PlanInput = {
  baseCourse: "tieng-anh-a1",
  grammar: Array.from({ length: 6 }, (_, i) => ({ slug: `g${i + 1}`, title: `Chủ điểm ${i + 1}`, chapter: "C", video: i === 0 })),
  ipaCourse: "phat-am-ipa",
  ipa: lessons(3, "p"),
  levels: [level("tieng-anh-a2", "A2", 6, 4), level("tieng-anh-b1", "B1", 4, 3)],
};
const monday = new Date(2026, 9, 5, 9);
const plan = (done: string[] = []): PlanData => ({ ...parsePlan(null), done });
const baseDone = (s: ProgressState) => {
  for (const g of input.grammar) s.lessons[`tieng-anh-a1/${g.slug}`] = { done: true, score: 90, completedAt: "2026-10-01T10:00:00.000Z" };
  for (const p of input.ipa) s.lessons[`phat-am-ipa/${p.slug}`] = { done: true, score: 90, completedAt: "2026-10-01T10:00:00.000Z" };
  return s;
};
const cal = (state: ProgressState, data: PlanData = plan()) => buildSchedule(monday, { input, stage: planStage(input, state, data), state, data });
const day = (state: ProgressState, data: PlanData, date = monday) => {
  const stage = planStage(input, state, data);
  const p = pickDay(date, input, stage, state, data);
  return buildToday({ date, picks: { main: p.main }, ticked: [], input, stage, state, data, dueWords: 0, dayStage: p.stage, recap: { date: "2026-10-04", done: false } });
};

describe("calendar", () => {
  it("teaches one full A1 lesson a day, pronunciation alongside, and a spaced review every fourth day", () => {
    const days = cal(emptyState());
    const base = days.filter((d) => d.stage === -1 && d.main.kind !== "week-review");
    expect(base[0].main).toMatchObject({ kind: "grammar", lesson: "g1", ipa: "p1" });
    expect(base.filter((d) => d.main.kind === "grammar").map((d) => (d.main.kind === "grammar" ? d.main.lesson : ""))).toEqual(["g1", "g2", "g3", "g4", "g5", "g6"]);
    expect(base[3].main.kind).toBe("base-review");
  });
  it("puts every lesson of every level in order, with test weeks ending on a Saturday sample test", () => {
    const days = cal(emptyState());
    for (const l of input.levels) {
      expect(days.flatMap((d) => (d.main.kind === "lesson" && d.main.course === l.slug ? [d.main.lesson] : []))).toEqual(l.chapters[0].lessons.filter((x) => x.kind === "lesson").map((x) => x.slug));
      const exam = days.find((d) => d.main.kind === "exam" && d.main.course === l.slug)!;
      expect(exam.weekday).toBe(6);
    }
    for (const d of days.slice(0, -1)) if (d.weekday === 0) expect(["week-review", "exam"]).toContain(d.main.kind);
  });
  it("fills the days between lessons with new input, a redo, writing and speaking, spaced revisits and words", () => {
    const focus = new Set(cal(baseDone(emptyState())).flatMap((d) => (d.main.kind === "consolidate" ? [d.main.focus] : [])));
    expect(focus).toEqual(new Set(["redo", "input", "spaced", "produce", "words"]));
  });
  it("gives a failed final a week of remedial days before the retake", () => {
    const s = baseDone(emptyState());
    for (const x of lessons(6)) s.lessons[`tieng-anh-a2/${x.slug}`] = { done: true, score: 60, completedAt: "2026-10-02T10:00:00.000Z" };
    s.lessons["tieng-anh-a2/final"] = { done: true, score: 65, completedAt: "2026-10-03T10:00:00.000Z" };
    const kinds = cal(s).map((d) => d.main.kind).filter((k) => k !== "week-review");
    expect(kinds.slice(0, 6)).toEqual(["weak", "weak", "weak", "weak", "weak", "final"]);
  });
  it("gives a failed sample test remedial days on the failed sections before a fresh one", () => {
    const s = baseDone(emptyState());
    for (const x of lessons(6)) s.lessons[`tieng-anh-a2/${x.slug}`] = { done: true, score: 90, completedAt: "2026-10-02T10:00:00.000Z" };
    s.lessons["tieng-anh-a2/final"] = { done: true, score: 90, completedAt: "2026-10-03T10:00:00.000Z" };
    const data = parsePlan(JSON.stringify({ exams: { A2: { marks: { reading: 25, listening: 10, writing: 25, "sp:gv": 4, "sp:pron": 4, "sp:ic": 4, "sp:ga": 4 }, sample: "digital", at: "2026-10-03T10:00:00.000Z" } } }));
    const days = cal(s, data);
    const remedy = days.filter((d) => d.main.kind === "remedy");
    expect(remedy.length).toBeGreaterThanOrEqual(6);
    expect(new Set(remedy.map((d) => (d.main.kind === "remedy" ? d.main.skill : "")))).toEqual(new Set(["listening"]));
  });
});

describe("a day's tasks", () => {
  it("on a base day: vocab, recap, the A1 lesson, pronunciation, drills and the weekday's self-study", () => {
    const ids = day(emptyState(), plan()).map((t) => t.id);
    expect(ids).toEqual(["vocab", "recap", "g:g1", "ipa:p1", ...(ids.includes("drills") ? ["drills"] : []), "self:1"]);
  });
  it("uses the day's own level for self-study, not the learner's current level", () => {
    const days = cal(emptyState());
    const b1 = days.find((d) => d.stage === 1 && d.weekday === 1)!;
    const stage = planStage(input, emptyState(), plan());
    const tasks = buildToday({ date: new Date(b1.date + "T09:00:00"), picks: { main: b1.main }, ticked: [], input, stage, state: emptyState(), data: plan(), dueWords: 0, dayStage: b1.stage });
    expect(tasks.find((t) => t.id === "self:1")!.minutes).toBe(SELF_STUDY_WEEK.B1![1].minutes);
  });
  it("counts vocabulary done when words were reviewed that day", () => {
    const s = emptyState();
    s.points.vocabToday = { day: todayKey(monday), n: 4 };
    expect(day(s, plan()).find((t) => t.id === "vocab")).toMatchObject({ done: true, auto: true });
  });
});

describe("day record", () => {
  it("parses a known day and drops a bad or old one", () => {
    const ok = parsePlan(JSON.stringify({ day: { date: "2026-10-05", picks: { main: { kind: "base-review", lessons: ["g1"], drills: [] } }, done: ["vocab", "vocab"] } }));
    expect(ok.day).toEqual({ date: "2026-10-05", picks: { main: { kind: "base-review", lessons: ["g1"], drills: [] } }, done: ["vocab"] });
    expect(parsePlan(JSON.stringify({ day: { date: "2026-10-05", picks: { main: { kind: "drills", drills: [] } } } })).day).toBeUndefined();
  });
});
