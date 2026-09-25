import { describe, expect, it } from "vitest";
import { COURSES } from "@/content";
import { filterGrammar, grammarIndex } from "./grammar";

describe("grammarIndex", () => {
  const entries = grammarIndex(COURSES);
  it("lists one entry per lecture of open courses, skipping reviews", () => {
    const lectures = COURSES.filter((c) => c.status === "open")
      .flatMap((c) => c.modules.flatMap((m) => m.lessons))
      .filter((l) => l.steps.some((s) => s.type === "lecture"));
    expect(entries).toHaveLength(lectures.length);
    expect(entries.every((e) => !e.lessonSlug.startsWith("on-tap-chuong"))).toBe(true);
  });
  it("carries what the handbook needs to show and link", () => {
    const first = entries.find((e) => e.courseSlug === "tieng-anh-a1")!;
    expect(first).toMatchObject({ level: "A1", lessonSlug: "chao-hoi-va-gioi-thieu" });
    expect(first.lectureTitle).toBeTruthy();
    expect(first.chapterTitle).toBeTruthy();
  });
});

describe("filterGrammar", () => {
  const entries = grammarIndex(COURSES);
  it("returns everything for an empty query", () => {
    expect(filterGrammar(entries, "  ")).toHaveLength(entries.length);
  });
  it("matches lecture and lesson titles ignoring case and Vietnamese diacritics", () => {
    const hits = filterGrammar(entries, "dong tu TO BE");
    expect(hits.some((e) => e.lessonSlug === "chao-hoi-va-gioi-thieu")).toBe(true);
    expect(filterGrammar(entries, "chào hỏi").some((e) => e.lessonSlug === "chao-hoi-va-gioi-thieu")).toBe(true);
  });
  it("matches short query words as whole words, not inside longer ones", () => {
    const hits = filterGrammar(entries, "bi dong").map((e) => e.lessonSlug);
    expect(hits).toContain("tin-tuc-va-su-viec");
    expect(hits, "'bi' must not match 'biểu đồ'").not.toContain("mo-ta-so-lieu");
  });
  it("still matches longer words as prefixes", () => {
    expect(filterGrammar(entries, "menh de quan").some((e) => e.lessonSlug === "menh-de-quan-he")).toBe(true);
  });
  it("returns nothing when no entry matches", () => {
    expect(filterGrammar(entries, "zzzzqqq")).toEqual([]);
  });
});
