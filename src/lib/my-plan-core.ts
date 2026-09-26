import type { OfficialCheck } from "@/content/my-plan";

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
}

const isRecord = (v: unknown): v is Record<string, unknown> => typeof v === "object" && v !== null && !Array.isArray(v);
/** a week has 168 hours; anything outside 0..100 is a typo */
export const MAX_WEEK_HOURS = 100;

export function parsePlan(raw: string | null): PlanData {
  const empty: PlanData = { done: [], hours: {}, exams: {}, used: {} };
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
  return { done, hours, exams, used };
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
