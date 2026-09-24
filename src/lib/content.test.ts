import { describe, expect, it } from "vitest";
import { COURSES } from "@/content";
import { getAllLessonParams, getCourse, getCourses, getLesson } from "./content";

describe("content accessors", () => {
  it("finds courses and returns null for unknown slugs", async () => {
    expect((await getCourse("giao-tiep-a1"))?.title).toBeTruthy();
    expect(await getCourse("nope")).toBeNull();
    expect(await getCourses({ goal: "toeic" })).toHaveLength(1);
  });
  it("builds lesson context with prev/next across modules", async () => {
    const first = await getLesson("giao-tiep-a1", "chao-hoi");
    expect(first).toMatchObject({ index: 0, prev: null });
    expect(first?.next?.slug).toBe("gioi-thieu-ban-than");
    const crossing = await getLesson("giao-tiep-a1", "gia-dinh");
    expect(crossing?.prev?.slug).toBe("so-dem");
    expect(crossing?.module.id).toBe("m2");
    const last = await getLesson("giao-tiep-a1", "mua-sam");
    expect(last?.next).toBeNull();
    expect(last?.index).toBe((last?.total ?? 0) - 1);
    expect(await getLesson("giao-tiep-a1", "nope")).toBeNull();
    expect(await getLesson("nope", "chao-hoi")).toBeNull();
  });
  it("lists every lesson for static params", async () => {
    const params = await getAllLessonParams();
    const total = COURSES.reduce((n, c) => n + c.modules.reduce((k, m) => k + m.lessons.length, 0), 0);
    expect(params).toHaveLength(total);
  });
});

describe("content integrity", () => {
  it("has unique course slugs and lesson slugs per course", () => {
    expect(new Set(COURSES.map((c) => c.slug)).size).toBe(COURSES.length);
    for (const c of COURSES) {
      const slugs = c.modules.flatMap((m) => m.lessons.map((l) => l.slug));
      expect(new Set(slugs).size).toBe(slugs.length);
      expect(slugs).not.toContain("hoan-thanh");
    }
  });
  it("has at least one lesson in every course and a free lesson in open courses", () => {
    for (const c of COURSES) {
      const lessons = c.modules.flatMap((m) => m.lessons);
      expect(lessons.length).toBeGreaterThan(0);
      if (c.status === "open") {
        expect(lessons.some((l) => l.free)).toBe(true);
        expect(lessons.every((l) => l.steps.length > 0)).toBe(true);
      }
    }
  });
  it("has valid vocab, exercises and speaking data", () => {
    for (const c of COURSES) {
      for (const l of c.modules.flatMap((m) => m.lessons)) {
        const ids = new Set<string>();
        for (const s of l.steps) {
          if (s.type === "vocab") {
            for (const w of s.words) {
              expect(w.stress, `${l.slug}/${w.word}`).toBeGreaterThanOrEqual(0);
              expect(w.stress, `${l.slug}/${w.word}`).toBeLessThan(w.syllables.length);
            }
          }
          if (s.type === "exercise") {
            for (const e of s.items) {
              expect(ids.has(e.id), e.id).toBe(false);
              ids.add(e.id);
              if (e.kind === "multiple-choice" || e.kind === "listen-choose") {
                expect(e.answer).toBeLessThan(e.options.length);
              }
              if (e.kind === "fill-blank") {
                expect(e.prompt.split("___")).toHaveLength(2);
                expect(e.answers.length).toBeGreaterThan(0);
              }
              if (e.kind === "reorder") expect(e.words.length).toBeGreaterThan(1);
            }
          }
          if (s.type === "speaking") expect(s.sentences.length).toBeGreaterThan(0);
        }
      }
    }
  });
});
