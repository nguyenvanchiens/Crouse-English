import { describe, expect, it } from "vitest";
import { COURSES } from "@/content";
import { filterCourses, flattenLessons, isGoal, isLevel, suggestCourseSlug } from "./course-utils";

describe("filterCourses", () => {
  it("filters by goal and level, and returns all without a filter", () => {
    expect(filterCourses(COURSES, {})).toHaveLength(COURSES.length);
    expect(filterCourses(COURSES, { goal: "ielts" }).map((c) => c.slug)).toEqual(["ielts"]);
    expect(filterCourses(COURSES, { level: "A1" }).every((c) => c.level === "A1")).toBe(true);
    expect(filterCourses(COURSES, { goal: "ielts", level: "A1" })).toEqual([]);
  });
});

describe("guards", () => {
  it("accepts only known values", () => {
    expect(isGoal("toeic")).toBe(true);
    expect(isGoal("math")).toBe(false);
    expect(isGoal(null)).toBe(false);
    expect(isLevel("B2")).toBe(true);
    expect(isLevel("b2")).toBe(false);
  });
});

describe("flattenLessons", () => {
  it("keeps module order", () => {
    const flat = flattenLessons(COURSES[0]);
    expect(flat[0].lesson.slug).toBe("chao-hoi-va-gioi-thieu");
    expect(flat[0].module.id).toBe("m1");
  });
});

describe("suggestCourseSlug", () => {
  it("maps levels to a course", () => {
    expect(suggestCourseSlug("A1")).toBe("tieng-anh-a1");
    expect(suggestCourseSlug("B2")).toBe("tieng-anh-b2");
    expect(suggestCourseSlug("C1")).toBe("tieng-anh-c1");
  });
});
