import { describe, expect, it } from "vitest";
import { COURSES } from "..";
import { LESSON_MEDIA } from ".";

describe("lesson videos and links", () => {
  for (const [slug, media] of Object.entries(LESSON_MEDIA)) {
    it(`${slug}: every entry belongs to a real lesson and is well formed`, () => {
      const course = COURSES.find((c) => c.slug === slug);
      expect(course, slug).toBeDefined();
      const lessons = new Map(course!.modules.flatMap((m) => m.lessons).map((l) => [l.slug, l]));
      for (const [lessonSlug, m] of Object.entries(media)) {
        const lesson = lessons.get(lessonSlug);
        expect(lesson, `${slug}/${lessonSlug} is not a lesson`).toBeDefined();
        expect(lesson!.review || lesson!.final, `${lessonSlug} is a review or test`).toBeFalsy();
        expect(lesson!.media, `${lessonSlug} media not attached`).toEqual(m);
        expect(m.title.trim(), lessonSlug).not.toBe("");
        expect(m.source.trim(), lessonSlug).not.toBe("");
        expect(m.note.trim().length, `${lessonSlug} note`).toBeGreaterThan(10);
        if (m.kind === "youtube") {
          expect(m.youtubeId, lessonSlug).toMatch(/^[A-Za-z0-9_-]{11}$/);
          expect(m.minutes, lessonSlug).toBeGreaterThanOrEqual(1);
          expect(m.minutes, lessonSlug).toBeLessThanOrEqual(40);
        } else {
          expect(m.url, lessonSlug).toMatch(/^https:\/\/[^\s]+$/);
        }
      }
    });
  }
  it("uses a video only once across the whole path", () => {
    const ids = Object.values(LESSON_MEDIA).flatMap((m) => Object.values(m)).flatMap((m) => (m.kind === "youtube" ? [m.youtubeId] : []));
    expect(ids.filter((x, i) => ids.indexOf(x) !== i)).toEqual([]);
  });
});
