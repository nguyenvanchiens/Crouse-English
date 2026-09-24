import { describe, expect, it } from "vitest";
import { COURSES } from "@/content";
import type { Exercise, LectureStep, Lesson } from "@/content/types";
import { getAllLessonParams, getCourse, getCourses, getLesson } from "./content";

describe("content accessors", () => {
  it("finds courses and returns null for unknown slugs", async () => {
    expect((await getCourse("tieng-anh-a1"))?.title).toBeTruthy();
    expect(await getCourse("nope")).toBeNull();
    expect(await getCourses({ goal: "toeic" })).toHaveLength(1);
    expect(await getCourses({ goal: "lo-trinh" })).toHaveLength(5);
  });
  it("builds lesson context with prev/next across modules", async () => {
    const first = await getLesson("tieng-anh-a1", "chao-hoi-va-gioi-thieu");
    expect(first).toMatchObject({ index: 0, prev: null });
    expect(first?.next?.slug).toBe("gia-dinh-va-do-vat");
    const crossing = await getLesson("tieng-anh-a1", "mot-ngay-cua-toi");
    expect(crossing?.prev?.slug).toBe("so-tuoi-va-so-dien-thoai");
    expect(crossing?.module.id).toBe("m2");
    const last = await getLesson("tieng-anh-a1", "nha-va-noi-chon");
    expect(last?.next).toBeNull();
    expect(last?.index).toBe((last?.total ?? 0) - 1);
    expect(await getLesson("tieng-anh-a1", "nope")).toBeNull();
    expect(await getLesson("nope", "chao-hoi-va-gioi-thieu")).toBeNull();
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
      for (const s of slugs) expect(s).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    }
  });
  it("has at least one lesson in every course and full content in open courses", () => {
    for (const c of COURSES) {
      const lessons = c.modules.flatMap((m) => m.lessons);
      expect(lessons.length).toBeGreaterThan(0);
      if (c.status === "open") expect(lessons.every((l) => l.steps.length > 0)).toBe(true);
    }
  });
  it("has valid vocab, exercises and speaking data", () => {
    const allIds = new Set<string>();
    for (const c of COURSES) {
      for (const l of c.modules.flatMap((m) => m.lessons)) {
        for (const s of l.steps) {
          if (s.type === "vocab") {
            for (const w of s.words) {
              expect(w.stress, `${l.slug}/${w.word}`).toBeGreaterThanOrEqual(0);
              expect(w.stress, `${l.slug}/${w.word}`).toBeLessThan(w.syllables.length);
            }
          }
          if (s.type === "exercise") {
            for (const e of s.items) {
              expect(allIds.has(e.id), `duplicate exercise id ${e.id}`).toBe(false);
              allIds.add(e.id);
              if (e.kind === "multiple-choice" || e.kind === "listen-choose") {
                expect(e.answer, e.id).toBeGreaterThanOrEqual(0);
                expect(e.answer, e.id).toBeLessThan(e.options.length);
              }
              if (e.kind === "fill-blank") {
                expect(e.prompt.split("___"), e.id).toHaveLength(2);
                expect(e.answers.length, e.id).toBeGreaterThan(0);
              }
              if (e.kind === "reorder") expect(e.words.length, e.id).toBeGreaterThan(1);
            }
          }
          if (s.type === "speaking") expect(s.sentences.length).toBeGreaterThan(0);
        }
      }
    }
  });
});

describe("A1 to C1 path", () => {
  const path = COURSES.filter((c) => c.goal === "lo-trinh");
  const kinds: Exercise["kind"][] = ["multiple-choice", "fill-blank", "reorder", "listen-choose"];

  it("has one open course per level, in order", () => {
    expect(path.map((c) => [c.slug, c.level])).toEqual([
      ["tieng-anh-a1", "A1"],
      ["tieng-anh-a2", "A2"],
      ["tieng-anh-b1", "B1"],
      ["tieng-anh-b2", "B2"],
      ["tieng-anh-c1", "C1"],
    ]);
    expect(path.every((c) => c.status === "open")).toBe(true);
    expect(new Set(path.map((c) => c.teacher.name)).size, "each level has its own teacher").toBe(5);
  });

  for (const c of path) {
    describe(c.slug, () => {
      const lessons: Lesson[] = c.modules.flatMap((m) => m.lessons);

      it("has 2 chapters of 3 lessons", () => {
        expect(c.modules.map((m) => m.lessons.length)).toEqual([3, 3]);
      });

      for (const l of lessons) {
        it(`${l.slug} follows the lesson format`, () => {
          expect(l.minutes).toBeGreaterThanOrEqual(15);
          expect(l.minutes).toBeLessThanOrEqual(25);
          expect(l.steps.map((s) => s.type)).toEqual(["lecture", "vocab", "exercise", "speaking"]);
          const [lecture, vocab, exercise, speaking] = l.steps;

          const lec = lecture as LectureStep;
          expect(lec.blocks.length).toBeGreaterThanOrEqual(6);
          expect(lec.blocks.filter((b) => b.kind === "example").length).toBeGreaterThanOrEqual(2);
          expect(lec.blocks.some((b) => b.kind === "table")).toBe(true);
          expect(lec.blocks.some((b) => b.kind === "mistake")).toBe(true);
          for (const b of lec.blocks) {
            if (b.kind === "table") for (const row of b.rows) expect(row.length).toBe(b.headers.length);
            if (b.kind !== "text" && b.kind !== "tip") expect(JSON.stringify(b)).not.toContain("**");
          }

          if (vocab.type !== "vocab") throw new Error("vocab step");
          expect(vocab.words.length).toBeGreaterThanOrEqual(6);
          expect(vocab.words.length).toBeLessThanOrEqual(8);

          if (exercise.type !== "exercise") throw new Error("exercise step");
          expect(exercise.items.length).toBeGreaterThanOrEqual(6);
          expect(exercise.items.length).toBeLessThanOrEqual(8);
          for (const k of kinds) expect(exercise.items.some((e) => e.kind === k), `${l.slug} lacks ${k}`).toBe(true);
          for (const e of exercise.items) {
            if (e.kind === "multiple-choice" || e.kind === "listen-choose") {
              expect(e.options.length).toBeGreaterThanOrEqual(3);
              expect(e.options.length).toBeLessThanOrEqual(4);
              expect(new Set(e.options).size, `${e.id} has duplicate options`).toBe(e.options.length);
            }
            if (e.kind === "reorder") expect(e.words.length).toBeGreaterThanOrEqual(3);
          }

          if (speaking.type !== "speaking") throw new Error("speaking step");
          expect(speaking.sentences).toHaveLength(3);
          for (const s of speaking.sentences) expect(s.text, "spell numbers as words").not.toMatch(/\d/);
        });
      }
    });
  }
});
