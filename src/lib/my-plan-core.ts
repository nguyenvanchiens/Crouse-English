import type { OfficialCheck } from "@/content/my-plan";
import type { DayRecord } from "./today";

export interface ExamRecord {
  /** raw marks: answer-key section ids, "writing" (both tasks) and "sp:<criterion>" for speaking */
  marks: Record<string, number>;
  /** which official sample test the marks come from */
  sample?: string;
  at: string;
}

export interface PlanData {
  /** ticks: "g:<lesson>" grammar reviewed, "d:<id>" sentence drill understood */
  done: string[];
  /** hours studied per week, keyed by the week's Monday (YYYY-MM-DD) */
  hours: Record<string, number>;
  /** official sample test results by plan level (the latest attempt) */
  exams: Record<string, ExamRecord>;
  /** sample tests already used, by plan level: each counts once */
  used: Record<string, string[]>;
  /** today's plan: what it is built around and what was ticked */
  day?: DayRecord;
  /** earlier days, oldest first: what each was built around, for reviewing a past day */
  history: { date: string; main: DayRecord["picks"]["main"] }[];
  /** review quizzes taken, by the reviewed day */
  reviews: Record<string, { score: number; at: string }>;
}

const isRecord = (v: unknown): v is Record<string, unknown> => typeof v === "object" && v !== null && !Array.isArray(v);
/** a week has 168 hours; anything outside 0..100 is a typo */
export const MAX_WEEK_HOURS = 100;

export function parsePlan(raw: string | null): PlanData {
  const empty: PlanData = { done: [], hours: {}, exams: {}, used: {}, history: [], reviews: {} };
  if (!raw) return empty;
  let d: unknown;
  try {
    d = JSON.parse(raw);
  } catch {
    return empty;
  }
  if (!isRecord(d)) return empty;
  const done = Array.isArray(d.done) ? [...new Set(d.done.filter((x): x is string => typeof x === "string"))] : [];
  const hours = isRecord(d.hours)
    ? Object.fromEntries(
        Object.entries(d.hours).filter(
          (e): e is [string, number] => /^\d{4}-\d{2}-\d{2}$/.test(e[0]) && typeof e[1] === "number" && e[1] > 0 && e[1] <= MAX_WEEK_HOURS,
        ),
      )
    : {};
  const exams = isRecord(d.exams)
    ? Object.fromEntries(
        Object.entries(d.exams).flatMap(([level, r]) => {
          if (!isRecord(r) || !isRecord(r.marks) || typeof r.at !== "string") return [];
          const marks = Object.fromEntries(Object.entries(r.marks).filter((m): m is [string, number] => typeof m[1] === "number" && m[1] >= 0));
          return [[level, { marks, ...(typeof r.sample === "string" ? { sample: r.sample } : {}), at: r.at }]];
        }),
      )
    : {};
  const used = isRecord(d.used)
    ? Object.fromEntries(Object.entries(d.used).flatMap(([k, v]) => (Array.isArray(v) ? [[k, [...new Set(v.filter((x): x is string => typeof x === "string"))]]] : [])))
    : {};
  const day = parseDay(d.day);
  const history = Array.isArray(d.history)
    ? d.history.flatMap((h) => {
        const r = parseDay(isRecord(h) ? { date: h.date, picks: { main: h.main }, done: [] } : null);
        return r ? [{ date: r.date, main: r.picks.main }] : [];
      })
    : [];
  const reviews = isRecord(d.reviews)
    ? Object.fromEntries(
        Object.entries(d.reviews).filter(
          (e): e is [string, { score: number; at: string }] => isRecord(e[1]) && typeof e[1].score === "number" && typeof e[1].at === "string",
        ),
      )
    : {};
  return { done, hours, exams, used, history, reviews, ...(day ? { day } : {}) };
}

const strings = (v: unknown): string[] => (Array.isArray(v) ? [...new Set(v.filter((x): x is string => typeof x === "string"))] : []);

const DAY_KINDS = ["grammar", "base-review", "lesson", "consolidate", "weak", "paper", "final", "placement", "exam", "remedy", "week-review", "done"];

function parseDay(v: unknown): DayRecord | null {
  if (!isRecord(v) || typeof v.date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(v.date) || !isRecord(v.picks)) return null;
  const main = v.picks.main;
  // the main work is rebuilt from the calendar when it is not a known kind
  if (!isRecord(main) || typeof main.kind !== "string" || !DAY_KINDS.includes(main.kind)) return null;
  return { date: v.date, picks: { main: main as unknown as DayRecord["picks"]["main"] }, done: strings(v.done) };
}

/** The Monday of the date's week, in local time, as YYYY-MM-DD. */
export function weekKey(date: Date): string {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  d.setDate(d.getDate() - ((d.getDay() + 6) % 7));
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export interface ExamVerdict {
  /** per answer-key section: reached Cambridge's mark for the level */
  sections: { id: string; ok: boolean }[];
  writing: { total: number | null; ok: boolean };
  speaking: { total: number | null; ok: boolean };
  passed: boolean;
}

/** Speaking total with Cambridge's weights, or null until every criterion has a mark. */
export function speakingTotal(check: OfficialCheck, marks: Record<string, number>): number | null {
  let total = 0;
  for (const c of check.speaking.criteria) {
    const m = marks[`sp:${c.id}`];
    if (m == null) return null;
    total += m * c.weight;
  }
  return total;
}

/** Every paper must reach the level; stricter than Cambridge's overall average, on purpose. */
export function judgeExam(check: OfficialCheck, r: ExamRecord | undefined): ExamVerdict | null {
  if (!r) return null;
  const sections = check.sections.map((s) => ({ id: s.id, ok: (r.marks[s.id] ?? -1) >= s.pass }));
  const w = r.marks.writing ?? null;
  const sp = speakingTotal(check, r.marks);
  const writing = { total: w, ok: w !== null && w >= check.writing.pass };
  const speaking = { total: sp, ok: sp !== null && sp >= check.speaking.pass };
  return { sections, writing, speaking, passed: sections.every((s) => s.ok) && writing.ok && speaking.ok };
}
