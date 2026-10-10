import { describe, expect, it } from "vitest";
import { ALL_DRILLS, drillLevelIndex } from "@/content/drills";
import { EXAM_PAPERS, OFFICIAL_CHECKS, PLAN_START } from "@/content/my-plan";
import { getAllLessonParams } from "./content";
import { parsePlan, type PlanData } from "./my-plan-core";
import { loadPlanInput, loadReviewBank } from "./plan-data";
import { planStage } from "./plan-stage";
import { emptyState, lessonKey, type ProgressState } from "./progress-core";
import { SPACED_AGO, drawReview, spacedDays, studyDays, taughtDays } from "./review-day";
import { SPLIT_MINUTES, buildSchedule, type DayMain } from "./schedule";
import { addDayKey, describeDay, parseDayKey } from "./schedule-describe";
import { checkChoice } from "./scoring";
import { buildToday } from "./today";
import { sprintOn } from "./work-sprint";
import { WORK_SPRINTS } from "@/content/work-sprints";

/** The real course content, walked day by day from day 1 to the end of the path. */
describe("the owner's calendar on the real content", async () => {
  const input = (await loadPlanInput())!;
  const state = emptyState();
  const data = parsePlan(null);
  const stage = planStage(input, state, data);
  const days = buildSchedule(parseDayKey(PLAN_START), { input, stage, state, data });
  const lessonPages = new Set((await getAllLessonParams()).map((p) => `/hoc/${p.course}/${p.lesson}`));
  const grammarPages = new Set(input.grammar.map((g) => `/ngu-phap/${input.baseCourse}/${g.slug}`));
  const levelIdx = (s: number) => drillLevelIndex(input.levels[Math.max(0, Math.min(s, input.levels.length - 1))].level);
  const taughtAll = taughtDays(days, input);

  it("starts on day 1 (a Monday) and runs day after day with no gap", () => {
    expect(days[0].date).toBe(PLAN_START);
    expect(days[0].weekday).toBe(1);
    for (let i = 1; i < days.length; i++) expect((parseDayKey(days[i].date).getTime() - parseDayKey(days[i - 1].date).getTime()) / 86_400_000).toBe(1);
    expect(days[days.length - 1].main.kind).toBe("done");
  });

  it("teaches every A1 lesson and every pronunciation lesson once, in order, with spaced base reviews", () => {
    const base = days.filter((d) => d.stage === -1);
    expect(base.flatMap((d) => (d.main.kind === "grammar" ? [d.main.lesson] : []))).toEqual(input.grammar.map((g) => g.slug));
    expect(base.flatMap((d) => (d.main.kind === "grammar" && d.main.ipa ? [d.main.ipa] : []))).toEqual(input.ipa.map((x) => x.slug));
    expect(base.filter((d) => d.main.kind === "base-review").length).toBeGreaterThanOrEqual(3);
  });

  it("teaches every lesson of every level exactly once, in course order", () => {
    for (const l of input.levels) {
      const want = l.chapters.flatMap((c) => c.lessons).filter((x) => x.kind !== "final").map((x) => x.slug);
      expect(days.flatMap((d) => (d.main.kind === "lesson" && d.main.course === l.slug ? [d.main.lesson] : [])), l.slug).toEqual(want);
    }
  });

  it("runs the sentence drills as one stream, each once, never above the day's level", () => {
    const seen: string[] = [];
    for (const d of days) {
      if (!("drills" in d.main)) continue;
      for (const id of d.main.drills) {
        const drill = ALL_DRILLS.find((x) => x.id === id);
        expect(drill, id).toBeDefined();
        expect(drillLevelIndex(drill!.level), `${d.date} ${id}`).toBeLessThanOrEqual(levelIdx(d.stage));
        seen.push(id);
      }
    }
    expect(new Set(seen).size).toBe(seen.length);
    expect(seen.length / ALL_DRILLS.length).toBeGreaterThanOrEqual(0.9);
  });

  it("ends every level with the final, practice on each exam paper, and the sample test on a weekend, split when long", () => {
    for (const l of input.levels) {
      const mine = days.filter((d) => "course" in d.main && d.main.course === l.slug);
      for (const p of EXAM_PAPERS[l.level]) expect(mine.some((d) => d.main.kind === "paper" && d.main.paper === p.id), `${l.level} ${p.id}`).toBe(true);
      const long = EXAM_PAPERS[l.level].reduce((n, p) => n + p.minutes, 0) > SPLIT_MINUTES;
      expect(mine.filter((d) => d.main.kind === "exam").map((d) => d.weekday), l.level).toEqual(long ? [6, 0] : [6]);
      const order = mine.map((d) => d.main.kind).filter((k) => k === "final" || k === "placement" || k === "exam");
      expect(order.slice(0, 2), l.level).toEqual(["final", "placement"]);
      expect(order[order.length - 1], l.level).toBe("exam");
    }
    for (const d of days.slice(0, -1)) if (d.weekday === 0) expect(["week-review", "exam"], d.date).toContain(d.main.kind);
  });

  it("varies the days between lessons and brings older lessons back on a schedule", () => {
    for (let i = 1; i < days.length; i++) {
      const m = days[i].main;
      if (m.kind !== "consolidate") continue;
      const p = days[i - 1].main;
      if (p.kind === "consolidate") expect({ ...m, drills: [] }, days[i].date).not.toEqual({ ...p, drills: [] });
      expect(m.target ?? "", `${days[i].date} consolidates a chapter review`).not.toMatch(/^on-tap/);
    }
    for (const l of input.levels) {
      const lessons = l.chapters.flatMap((c) => c.lessons).filter((x) => x.kind === "lesson").map((x) => x.slug);
      const mine = days.flatMap((d) => (d.main.kind === "consolidate" && d.main.course === l.slug ? [d.main] : []));
      // full 30-minute revisits; the short spaced reviews of every lesson are checked below
      const revisited = new Set(mine.filter((m) => m.focus === "spaced").map((m) => m.target));
      expect(revisited.size / lessons.length, `${l.level} revisited`).toBeGreaterThanOrEqual(0.4);
      expect(mine.filter((m) => m.focus === "redo").length / Math.max(mine.length, 1), `${l.level} redo share`).toBeLessThanOrEqual(0.25);
      expect(mine.some((m) => m.focus === "input"), `${l.level} input`).toBe(true);
    }
  });

  it("brings every teaching day back for a short review about 2, 7 and 21 days later", () => {
    const taught = taughtDays(days, input);
    const seen = new Map<string, Set<number>>();
    for (const d of days) {
      if (d.main.kind === "exam" || d.main.kind === "done") continue;
      for (const s of spacedDays(d.date, taught.filter((x) => x < d.date))) {
        if (!seen.has(s.date)) seen.set(s.date, new Set());
        seen.get(s.date)!.add(s.ago);
      }
    }
    const lessonDays = days.filter((d) => d.main.kind === "lesson" || d.main.kind === "grammar").map((d) => d.date);
    // the last three weeks have no third review yet
    const early = lessonDays.filter((x) => x <= addDayKey(days[days.length - 1].date, -30));
    const full = early.filter((x) => (seen.get(x)?.size ?? 0) >= SPACED_AGO.length);
    expect(full.length / early.length).toBeGreaterThanOrEqual(0.85);
    expect(early.filter((x) => (seen.get(x)?.size ?? 0) >= 2).length / early.length).toBeGreaterThanOrEqual(0.95);
  });

  it("splits sentences on every study day, from the bank or from the day's own text, and paces the bank over each stage", () => {
    for (const d of days) {
      if (d.main.kind === "week-review" || d.main.kind === "exam" || d.main.kind === "done") continue;
      const tasks = buildToday({ date: parseDayKey(d.date), picks: { main: d.main }, ticked: [], input, stage, state, data, dueWords: 0, dayStage: d.stage });
      expect(tasks.some((t) => t.id === "drills"), `${d.date} ${d.main.kind}`).toBe(true);
    }
    // the bank lasts into the last part of each stage, not just its first weeks
    for (const s of [-1, ...input.levels.map((_, i) => i)]) {
      const mine = days.filter((d) => d.stage === s);
      const lastWithDrill = mine.map((d) => "drills" in d.main && d.main.drills.length > 0).lastIndexOf(true);
      expect(lastWithDrill / mine.length, `stage ${s}`).toBeGreaterThanOrEqual(0.6);
    }
  });

  it("practises on the For Schools sets and never on the standard samples kept for the check", () => {
    for (const d of days) {
      if (d.main.kind !== "paper") continue;
      const level = input.levels.find((l) => l.slug === (d.main as { course: string }).course)!.level;
      const check = OFFICIAL_CHECKS[level];
      const t = buildToday({ date: parseDayKey(d.date), picks: { main: d.main }, ticked: [], input, stage, state, data, dueWords: 0, dayStage: d.stage }).find((x) => x.id === "paper")!;
      const text = t.steps.join(" ");
      for (const sample of check.samples) expect(text, d.date).not.toContain(sample.label);
      if (d.main.paper === "speaking") expect(text, d.date).toContain("Speak & Improve");
      else if (check.practice.length) expect(text, `${d.date} ${level}`).toContain("for Schools");
      else expect(text, `${d.date} ${level}`).toMatch(/sách đề chính thức|Write & Improve|Speak & Improve/);
    }
  });

  it("runs the work-English sprints from the first week, one after another, done within about five months", () => {
    const places = days.map((d) => ({ d, s: sprintOn(days, d.date, data) }));
    expect(places[0].s).toMatchObject({ index: 0, session: 0 });
    // a sprint never starts before the one before it ends
    const order = places.flatMap((p) => (p.s ? [p.s.index] : []));
    for (let i = 1; i < order.length; i++) expect(order[i]).toBeGreaterThanOrEqual(order[i - 1]);
    expect(new Set(order).size).toBe(WORK_SPRINTS.length);
    const last = places.filter((p) => p.s).pop()!.d.date;
    expect(last <= addDayKey(PLAN_START, 160), last).toBe(true);
    // the session takes the self-study's place: a day has one or the other
    for (const p of places) {
      if (!p.s) continue;
      const ids = buildToday({ date: parseDayKey(p.d.date), picks: { main: p.d.main }, ticked: [], input, stage, state, data, dueWords: 0, dayStage: p.d.stage, sprint: p.s }).map((t) => t.id);
      expect(ids.includes("sprint"), p.d.date).toBe(true);
      expect(ids.some((x) => x.startsWith("self:")), p.d.date).toBe(false);
    }
  });

  it("is honest about the time: about a year at the fastest", () => {
    console.log(`plan length: ${days.length} days, ${(days.length / 7).toFixed(1)} weeks`);
    expect(days.length / 7).toBeGreaterThan(45);
    expect(days.length / 7).toBeLessThan(80);
  });

  it("builds a sensible day for every date, at that day's level, with links only to pages that exist", () => {
    for (const d of days) {
      const tasks = buildToday({ date: parseDayKey(d.date), picks: { main: d.main }, ticked: [], input, stage, state, data, dueWords: 0, dayStage: d.stage, recap: { date: d.date, done: false }, spaced: spacedDays(d.date, taughtAll.filter((x) => x < d.date)), sprint: sprintOn(days, d.date, data) });
      expect(describeDay(d.main, input), d.date).not.toMatch(/undefined|tieng-anh-/);
      expect(tasks[0].id, d.date).toBe("vocab");
      expect(tasks.length, d.date).toBeGreaterThanOrEqual(2);
      const minutes = tasks.reduce((n, t) => n + t.minutes, 0);
      expect(minutes, d.date).toBeGreaterThanOrEqual(40);
      expect(minutes, `${d.date} ${d.main.kind}`).toBeLessThanOrEqual(d.main.kind === "exam" ? SPLIT_MINUTES + 40 : d.weekday === 6 ? 180 : 150);
      for (const t of tasks) {
        expect(t.steps.length, `${d.date} ${t.id}`).toBeGreaterThan(0);
        expect(`${t.title} ${t.steps.join(" ")}`, `${d.date} ${t.id}`).not.toMatch(/undefined|NaN/);
        for (const l of t.links) {
          if (l.external) expect(l.href, `${d.date} ${t.id}`).toMatch(/^https:\/\/(?!www\.bbc\.co\.uk)/);
          else if (l.href.startsWith("/hoc/")) expect(lessonPages.has(l.href), `${d.date} ${t.id} ${l.href}`).toBe(true);
          else if (l.href.startsWith("/ngu-phap/")) expect(grammarPages.has(l.href), `${d.date} ${l.href}`).toBe(true);
          else expect(l.href, `${d.date} ${t.id}`).toMatch(/^\/(on-tap-tu-vung(#tu-cua-toi)?|tu-vung\/tieng-anh-(a1|a2|b1|b2|c1)|lo-trinh-cua-toi(#[A-Za-z0-9-]+)?|kiem-tra-trinh-do|khoa-hoc\/[a-z0-9-]+|on-lai\?ngay=\d{4}-\d{2}-\d{2})$/);
        }
      }
    }
  });
});

describe("sentence drills on the real content", async () => {
  const lessonPages = new Set((await getAllLessonParams()).map((p) => `${p.course}/${p.lesson}`));
  it("are unique, rebuild their sentence from the chunks, point to a real lesson, and cover every level", () => {
    expect(new Set(ALL_DRILLS.map((d) => d.id)).size).toBe(ALL_DRILLS.length);
    for (const d of ALL_DRILLS) {
      expect(d.chunks.join(" ").replace(/[.?!]$/, ""), d.id).toBe(d.en.replace(/[.?!]$/, ""));
      expect(lessonPages.has(`${d.review.course}/${d.review.lesson}`), `${d.id} review`).toBe(true);
    }
    for (const lvl of ["A1", "A2", "B1", "B2", "C1"] as const) expect(ALL_DRILLS.filter((d) => d.level === lvl).length, lvl).toBeGreaterThanOrEqual(20);
  });
});

describe("review material on the real content", async () => {
  const input = (await loadPlanInput())!;
  const bank = await loadReviewBank();

  it("has exercises for every A1, pronunciation and level lesson of the plan", () => {
    const keys = [
      ...input.grammar.map((g) => `${input.baseCourse}/${g.slug}`),
      ...input.ipa.map((x) => `${input.ipaCourse}/${x.slug}`),
      ...input.levels.flatMap((l) => l.chapters.flatMap((c) => c.lessons).filter((x) => x.kind === "lesson").map((x) => `${l.slug}/${x.slug}`)),
    ];
    for (const k of keys) {
      expect(bank[k], k).toBeDefined();
      expect(bank[k].items.length, k).toBeGreaterThanOrEqual(3);
    }
  });

  it("draws a day's review with valid, reshuffled questions from that day's lessons only", () => {
    let seed = 7;
    const rng = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 2 ** 32);
    const day = input.grammar.slice(0, 3).map((g) => `${input.baseCourse}/${g.slug}`);
    const items = drawReview(day, bank, rng);
    expect(items).toHaveLength(8);
    const ids = new Set(day.flatMap((k) => bank[k].items.map((x) => x.id)));
    for (const x of items) {
      expect(ids.has(x.id), x.id).toBe(true);
      if ("options" in x) {
        const original = day.flatMap((k) => bank[k].items).find((o) => o.id === x.id)! as typeof x;
        expect(x.options[x.answer]).toBe(original.options[original.answer]);
        expect(checkChoice(x.answer, x.answer)).toBe(true);
      }
    }
    for (const k of day) expect(items.some((x) => bank[k].items.some((o) => o.id === x.id)), k).toBe(true);
  });

  it("lists a day for review once its lessons are finished or its topics ticked", () => {
    const first = input.grammar[0].slug;
    const data = parsePlan(JSON.stringify({
      done: [`g:${first}`],
      history: [{ date: "2026-10-05", main: { kind: "grammar", lesson: first, ipa: null, drills: [] } }],
    }));
    const state = emptyState();
    state.lessons["tieng-anh-a2/hom-qua-ban-lam-gi"] = { done: true, score: 80, completedAt: "2026-10-13T20:00:00.000Z" };
    expect(studyDays(data, state, bank, input, "2026-10-14")).toEqual([
      { date: "2026-10-13", lessons: ["tieng-anh-a2/hom-qua-ban-lam-gi"] },
      { date: "2026-10-05", lessons: [`${input.baseCourse}/${first}`] },
    ]);
  });
});

/** A level's test week, rebuilt each day as the learner follows it: retakes must come closer, not stay ahead. */
describe("the test week when the calendar is rebuilt every day", async () => {
  const input = (await loadPlanInput())!;
  const a2 = input.levels[0];
  const lessons = a2.chapters.flatMap((c) => c.lessons).filter((x) => x.kind !== "final");
  const base = () => {
    const s = emptyState();
    for (const g of input.grammar) s.lessons[lessonKey(input.baseCourse, g.slug)] = { done: true, score: 90, completedAt: "2026-11-01T10:00:00.000Z" };
    for (const p of input.ipa) s.lessons[lessonKey(input.ipaCourse, p.slug)] = { done: true, score: 90, completedAt: "2026-11-01T10:00:00.000Z" };
    for (const x of lessons) s.lessons[lessonKey(a2.slug, x.slug)] = { done: true, score: 90, completedAt: "2026-12-14T09:00:00.000Z" };
    return s;
  };
  /** follows the calendar for n days from `from`, recording each day, and returns where `kind` falls each day */
  const follow = (state: ProgressState, data: PlanData, from: string, n: number, kind: DayMain["kind"]) => {
    const when: (string | undefined)[] = [];
    let d = data;
    for (let k = 0; k < n; k++) {
      const date = addDayKey(from, k);
      const days = buildSchedule(parseDayKey(date), { input, stage: planStage(input, state, d), state, data: d });
      when.push(days.find((x) => x.main.kind === kind && "course" in x.main && x.main.course === a2.slug)?.date);
      d = { ...d, history: [...d.history, { date, main: days[0].main }] };
    }
    return when;
  };

  it("keeps the retake of a failed final on the same date", () => {
    const s = base();
    s.lessons[lessonKey(a2.slug, a2.finalSlug!)] = { done: true, score: 60, completedAt: "2026-12-14T11:00:00.000Z" };
    const when = follow(s, parsePlan(null), "2026-12-15", 6, "final");
    expect(when[0]).toBeDefined();
    for (const w of when) expect(w).toBe(when[0]);
  });

  it("keeps a fresh sample test after remedial days on the same date", () => {
    const s = base();
    s.lessons[lessonKey(a2.slug, a2.finalSlug!)] = { done: true, score: 90, completedAt: "2026-12-14T11:00:00.000Z" };
    s.placement = { level: "A2", startLevel: "B1", score: 30, takenAt: "2026-12-15T10:00:00.000Z" };
    const data = parsePlan(JSON.stringify({ exams: { A2: { marks: { reading: 25, listening: 10, writing: 25, "sp:gv": 4, "sp:pron": 4, "sp:ic": 4, "sp:ga": 4 }, sample: "digital", at: "2026-12-19T10:00:00.000Z" } } }));
    const when = follow(s, data, "2026-12-20", 9, "exam");
    expect(when[0]).toBeDefined();
    for (const w of when) expect(w).toBe(when[0]);
  });

  it("gives the advisory placement check once, and does not hold the level back when it is failed", () => {
    const s = base();
    s.lessons[lessonKey(a2.slug, a2.finalSlug!)] = { done: true, score: 90, completedAt: "2026-12-14T11:00:00.000Z" };
    s.placement = { level: "A1", startLevel: "A2", score: 10, takenAt: "2026-12-15T10:00:00.000Z" };
    const when = follow(s, parsePlan(null), "2026-12-16", 3, "placement");
    expect(when.every((w) => w === undefined)).toBe(true);
    const exam = follow(s, parsePlan(null), "2026-12-16", 3, "exam");
    for (const w of exam) expect(w).toBe(exam[0]);
  });
});
