import { describe, expect, it } from "vitest";
import { fill, lesson, listen, mc, reorder } from "./builders";
import { buildFinalTest, buildReviewLesson, chapter, withFinalTest } from "./review";
import type { Exercise, Lesson } from "./types";

const make = (n: number): Lesson =>
  lesson({
    slug: `l${n}`,
    title: `L${n}`,
    minutes: 15,
    lecture: { title: "t", blocks: [] },
    words: [],
    exercises: [
      mc(`e${n}-1`, "q", ["a", "b", "c"], 0),
      fill(`e${n}-2`, "a ___ b", ["x"]),
      reorder(`e${n}-3`, "I am here."),
      listen(`e${n}-4`, "hello", ["a", "b", "c"], 1),
      mc(`e${n}-5`, "q2", ["a", "b", "c"], 2),
    ],
    speaking: [],
  });

describe("buildReviewLesson", () => {
  const lessons = [make(1), make(2), make(3), make(4)];
  const review = buildReviewLesson(2, lessons);

  it("is a review lesson with a single exercise step", () => {
    expect(review).toMatchObject({ slug: "on-tap-chuong-2", title: "Ôn tập chương 2", review: true });
    expect(review.steps.map((s) => s.type)).toEqual(["exercise"]);
  });
  it("takes 3 items from every lesson and covers all 4 exercise kinds", () => {
    const items = (review.steps[0] as { items: Exercise[] }).items;
    expect(items).toHaveLength(12);
    for (const n of [1, 2, 3, 4]) expect(items.filter((e) => e.id.startsWith(`e${n}-`))).toHaveLength(3);
    expect(new Set(items.map((e) => e.kind))).toEqual(new Set(["multiple-choice", "fill-blank", "reorder", "listen-choose"]));
  });
  it("gives review items their own ids and leaves the source lessons untouched", () => {
    const items = (review.steps[0] as { items: Exercise[] }).items;
    expect(items.every((e) => e.id.endsWith("-r"))).toBe(true);
    expect(new Set(items.map((e) => e.id)).size).toBe(12);
    expect((lessons[0].steps[2] as { items: Exercise[] }).items[0].id).toBe("e1-1");
  });
  it("is deterministic", () => {
    expect(buildReviewLesson(2, lessons)).toEqual(review);
  });
});

describe("chapter", () => {
  it("appends the chapter review after the lessons", () => {
    const m = chapter(3, "Ba", [make(1), make(2)]);
    expect(m).toMatchObject({ id: "m3", title: "Ba" });
    expect(m.lessons.map((l) => l.slug)).toEqual(["l1", "l2", "on-tap-chuong-3"]);
  });
});

describe("buildFinalTest", () => {
  const chapters = [1, 2, 3, 4].map((n) => chapter(n, `C${n}`, [make(n * 10 + 1), make(n * 10 + 2), make(n * 10 + 3), make(n * 10 + 4)]));
  const final = buildFinalTest(chapters);
  const items = (final.steps[0] as { items: Exercise[] }).items;

  it("is a final test with one exercise step of 20 items", () => {
    expect(final).toMatchObject({ slug: "kiem-tra-cuoi-khoa", title: "Kiểm tra cuối khóa", final: true });
    expect(final.review).toBeFalsy();
    expect(items).toHaveLength(20);
  });
  it("draws 5 items from every chapter and covers every kind", () => {
    for (const n of [1, 2, 3, 4]) expect(items.filter((e) => e.id.startsWith(`e${n}`)).length).toBe(5);
    expect(new Set(items.map((e) => e.kind)).size).toBe(4);
  });
  it("prefers items the chapter reviews did not use, with their own ids", () => {
    const reviewIds = new Set(chapters.flatMap((m) => m.lessons.filter((l) => l.review).flatMap((l) => (l.steps[0] as { items: Exercise[] }).items.map((e) => e.id.replace(/-r$/, "")))));
    const reused = items.filter((e) => reviewIds.has(e.id.replace(/-f$/, "")));
    expect(reused.length).toBeLessThan(items.length / 2);
    expect(items.every((e) => e.id.endsWith("-f"))).toBe(true);
    expect(new Set(items.map((e) => e.id)).size).toBe(20);
  });
});

describe("withFinalTest", () => {
  it("adds a closing module with the final test and leaves chapters untouched", () => {
    const chapters = [chapter(1, "A", [make(1), make(2)])];
    const course = { modules: chapters } as unknown as import("./types").Course;
    const out = withFinalTest(course);
    expect(out.modules).toHaveLength(2);
    expect(out.modules[1]).toMatchObject({ id: "m-final", title: "Kiểm tra cuối khóa" });
    expect(out.modules[1].lessons[0].final).toBe(true);
    expect(course.modules).toHaveLength(1);
  });
  it("uses the course's own final-test bank when it has one", () => {
    const bank = [mc("f1", "q", ["a", "b", "c"], 0), fill("f2", "a ___ b", ["x"])];
    const course = { modules: [chapter(1, "A", [make(1)])], finalTest: bank } as unknown as import("./types").Course;
    const final = withFinalTest(course).modules[1].lessons[0];
    expect(final).toMatchObject({ slug: "kiem-tra-cuoi-khoa", final: true });
    expect(final.steps).toEqual([{ type: "exercise", items: bank }]);
  });
});
