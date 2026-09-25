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
    expect(crossing?.prev?.slug, "chapter 1 ends with its review").toBe("on-tap-chuong-1");
    expect(crossing?.module.id).toBe("m2");
    const last = await getLesson("tieng-anh-a1", "kiem-tra-cuoi-khoa");
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
  const structured = COURSES.filter((c) => c.goal === "lo-trinh" || c.goal === "phat-am");
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

  it("puts the pronunciation course first as step 0", () => {
    expect(COURSES[0]).toMatchObject({ slug: "phat-am-ipa", goal: "phat-am", status: "open" });
  });

  for (const c of structured) {
    const chapters = c.goal === "phat-am" ? 2 : 4;
    describe(c.slug, () => {
      const all: Lesson[] = c.modules.flatMap((m) => m.lessons);
      const regular = all.filter((l) => !l.review && !l.final);

      it(`has ${chapters} chapters of 4 lessons, each closed by a chapter review, then the final test`, () => {
        expect(c.modules).toHaveLength(chapters + 1);
        const final = c.modules[chapters];
        expect(final.lessons.map((l) => [l.slug, l.final])).toEqual([["kiem-tra-cuoi-khoa", true]]);
        const finalItems = final.lessons[0].steps[0].type === "exercise" ? final.lessons[0].steps[0].items : [];
        expect(finalItems).toHaveLength(5 * chapters);
        c.modules.slice(0, chapters).forEach((m, i) => {
          expect(m.lessons).toHaveLength(5);
          expect(m.lessons.slice(0, 4).every((l) => !l.review)).toBe(true);
          expect(m.lessons[4]).toMatchObject({ review: true, slug: `on-tap-chuong-${i + 1}` });
        });
      });

      it("has no vocabulary word taught twice in the same course", () => {
        const words = regular.flatMap((l) => l.steps.flatMap((s) => (s.type === "vocab" ? s.words.map((w) => w.word.toLowerCase()) : [])));
        const dupes = words.filter((w, i) => words.indexOf(w) !== i);
        expect(dupes, `repeated vocab: ${dupes.join(", ")}`).toEqual([]);
      });

      for (const r of all.filter((l) => l.review)) {
        it(`${r.slug} reviews 12 items covering every exercise kind`, () => {
          expect(r.steps.map((s) => s.type)).toEqual(["exercise"]);
          const items = r.steps[0].type === "exercise" ? r.steps[0].items : [];
          expect(items).toHaveLength(12);
          for (const k of kinds) expect(items.some((e) => e.kind === k)).toBe(true);
        });
      }

      for (const l of regular) {
        it(`${l.slug} follows the lesson format`, () => {
          expect(l.minutes).toBeGreaterThanOrEqual(15);
          expect(l.minutes).toBeLessThanOrEqual(25);
          expect(l.steps.map((s) => s.type)).toEqual(["lecture", "vocab", "dialogue", "exercise", "speaking", "task"]);
          const [lecture, vocab, dialogue, exercise, speaking, task] = l.steps;

          const lec = lecture as LectureStep;
          expect(lec.blocks.length).toBeGreaterThanOrEqual(10);
          expect(lec.blocks.length).toBeLessThanOrEqual(18);
          const last = lec.blocks[lec.blocks.length - 1];
          expect(last.kind, "lecture ends with a Ghi nhớ summary").toBe("summary");
          if (last.kind === "summary") {
            expect(last.points.length).toBeGreaterThanOrEqual(3);
            expect(last.points.length).toBeLessThanOrEqual(6);
          }
          expect(lec.blocks.filter((b) => b.kind === "example").length).toBeGreaterThanOrEqual(3);
          expect(lec.blocks.some((b) => b.kind === "table")).toBe(true);
          expect(lec.blocks.filter((b) => b.kind === "mistake").length).toBeGreaterThanOrEqual(2);
          expect(lec.blocks.some((b) => b.kind === "tip")).toBe(true);
          expect(lec.blocks.some((b) => b.kind === "teacher"), "teacher block").toBe(true);
          for (const b of lec.blocks) {
            if (b.kind === "table") for (const row of b.rows) expect(row.length).toBe(b.headers.length);
            if (b.kind !== "text" && b.kind !== "tip" && b.kind !== "teacher" && b.kind !== "summary") expect(JSON.stringify(b)).not.toContain("**");
          }

          if (vocab.type !== "vocab") throw new Error("vocab step");
          expect(vocab.words.length).toBeGreaterThanOrEqual(6);
          expect(vocab.words.length).toBeLessThanOrEqual(8);
          for (const w of vocab.words) expect(w.word, "single-word vocab").not.toMatch(/\s/);

          if (exercise.type !== "exercise") throw new Error("exercise step");
          expect(exercise.items).toHaveLength(8);
          for (const k of kinds) expect(exercise.items.filter((e) => e.kind === k).length, `${l.slug} needs 2 x ${k}`).toBeGreaterThanOrEqual(2);
          for (const e of exercise.items) {
            if (e.kind === "multiple-choice" || e.kind === "listen-choose") {
              expect(e.options.length).toBeGreaterThanOrEqual(3);
              expect(e.options.length).toBeLessThanOrEqual(4);
              expect(new Set(e.options).size, `${e.id} has duplicate options`).toBe(e.options.length);
            }
            if (e.kind === "reorder") {
              expect(e.words.length, e.id).toBeGreaterThanOrEqual(3);
              expect(e.words.length, e.id).toBeLessThanOrEqual(12);
            }
          }

          if (dialogue.type !== "dialogue") throw new Error("dialogue step");
          expect(dialogue.lines.length, "dialogue length").toBeGreaterThanOrEqual(6);
          expect(dialogue.lines.length, "dialogue length").toBeLessThanOrEqual(14);
          expect(new Set(dialogue.lines.map((x) => x.speaker)), "both roles speak").toEqual(new Set(["A", "B"]));
          expect(dialogue.context.length).toBeGreaterThan(10);

          if (task.type !== "task") throw new Error("task step");
          expect(task.hints.length).toBeGreaterThanOrEqual(2);
          expect(task.checklist.length).toBeGreaterThanOrEqual(3);
          expect(task.checklist.length).toBeLessThanOrEqual(6);
          expect(task.minWords).toBeGreaterThanOrEqual(10);
          expect(task.model.trim().split(/\s+/).length, "model answer meets its own word minimum").toBeGreaterThanOrEqual(task.minWords);

          if (speaking.type !== "speaking") throw new Error("speaking step");
          expect(speaking.sentences).toHaveLength(3);
          for (const s of speaking.sentences) expect(s.text, "spell numbers as words").not.toMatch(/\d/);
        });
      }
    });
  }
});
