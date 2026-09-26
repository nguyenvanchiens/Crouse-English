import { describe, expect, it } from "vitest";
import { OFFICIAL_CHECKS, SENTENCE_DRILLS, speakingPrompt, writingPrompt } from "@/content/my-plan";
import { judgeExam, parsePlan, speakingTotal, weekKey } from "./my-plan-core";

describe("parsePlan", () => {
  it("keeps the old tick-only format and drops bad data", () => {
    expect(parsePlan(JSON.stringify({ done: ["g:a", "g:a", 3, "d:b"] }))).toEqual({ done: ["g:a", "d:b"], hours: {}, exams: {} });
    const p = parsePlan(JSON.stringify({ done: [], hours: { "2026-09-21": 6, "2026-09-14": -1, bad: 3, "2026-09-07": 500 }, exams: { B1: { marks: { reading: 25, x: "y" }, at: "t" }, B2: "no" } }));
    expect(p.hours).toEqual({ "2026-09-21": 6 });
    expect(p.exams).toEqual({ B1: { marks: { reading: 25 }, at: "t" } });
    expect(parsePlan("nope")).toEqual({ done: [], hours: {}, exams: {} });
  });
});

describe("weekKey", () => {
  it("gives the Monday of the week", () => {
    expect(weekKey(new Date(2026, 8, 26))).toBe("2026-09-21"); // Saturday
    expect(weekKey(new Date(2026, 8, 27))).toBe("2026-09-21"); // Sunday
    expect(weekKey(new Date(2026, 8, 21))).toBe("2026-09-21"); // Monday
    expect(weekKey(new Date(2026, 9, 1))).toBe("2026-09-28");
  });
});

describe("official sample test check", () => {
  it("matches the maxima Cambridge publishes for writing and speaking", () => {
    for (const [level, c] of Object.entries(OFFICIAL_CHECKS)) {
      const perTask = c.writing.criteria.length * 5;
      expect(perTask * 2, `${level} writing`).toBe(c.writing.max);
      expect(c.speaking.criteria.reduce((n, x) => n + 5 * x.weight, 0), `${level} speaking`).toBe(c.speaking.max);
      for (const s of [...c.sections, c.writing, c.speaking]) expect(s.pass).toBeLessThanOrEqual(s.max);
    }
  });
  it("weights speaking like Cambridge (B2: criteria doubled, global x4)", () => {
    const c = OFFICIAL_CHECKS.B2;
    expect(speakingTotal(c, { "sp:gv": 3, "sp:dm": 3, "sp:pron": 3, "sp:ic": 3, "sp:ga": 3 })).toBe(36);
    expect(speakingTotal(c, { "sp:gv": 3 })).toBeNull();
  });
  it("passes only when every paper reaches the level", () => {
    const c = OFFICIAL_CHECKS.B1;
    const sp = { "sp:gv": 3, "sp:dm": 3, "sp:pron": 3, "sp:ic": 3, "sp:ga": 3 }; // 12 + 6 = 18
    const good = { marks: { reading: 23, listening: 18, writing: 24, ...sp }, at: "t" };
    expect(judgeExam(c, good)?.passed).toBe(true);
    expect(judgeExam(c, { ...good, marks: { ...good.marks, listening: 17 } })?.passed).toBe(false);
    expect(judgeExam(c, { ...good, marks: { ...good.marks, writing: 23 } })?.passed).toBe(false);
    expect(judgeExam(c, { ...good, marks: { ...good.marks, "sp:ga": 2.5 } })?.speaking).toEqual({ total: 17, ok: false });
    expect(judgeExam(c, undefined)).toBeNull();
  });
  it("gives the AI the right criteria for the level", () => {
    expect(writingPrompt(OFFICIAL_CHECKS.A2)).toContain("Content, Organisation, Language");
    expect(speakingPrompt(OFFICIAL_CHECKS.C1)).toContain("Grammatical Resource, Lexical Resource");
  });
});

describe("sentence drills", () => {
  it("have chunks that rebuild the sentence", () => {
    expect(new Set(SENTENCE_DRILLS.map((d) => d.id)).size).toBe(SENTENCE_DRILLS.length);
    for (const d of SENTENCE_DRILLS) expect(d.chunks.join(" "), d.id).toBe(d.en.replace(/\.$/, ""));
  });
});
