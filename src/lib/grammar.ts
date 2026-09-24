import type { Course, Level } from "@/content/types";

export interface GrammarEntry {
  courseSlug: string;
  courseTitle: string;
  level: Level;
  chapterTitle: string;
  lessonSlug: string;
  lessonTitle: string;
  lectureTitle: string;
}

/** Every lecture of the open courses, in course order: the grammar handbook's table of contents. */
export function grammarIndex(courses: Course[]): GrammarEntry[] {
  return courses
    .filter((c) => c.status === "open")
    .flatMap((c) =>
      c.modules.flatMap((m) =>
        m.lessons.flatMap((l) =>
          l.steps
            .filter((s) => s.type === "lecture")
            .map((s) => ({
              courseSlug: c.slug,
              courseTitle: c.title,
              level: c.level,
              chapterTitle: m.title,
              lessonSlug: l.slug,
              lessonTitle: l.title,
              lectureTitle: s.type === "lecture" ? s.title : "",
            })),
        ),
      ),
    );
}

/** Lowercase and strip Vietnamese diacritics so "dong tu" finds "Động từ". */
export function foldText(s: string): string {
  return s.normalize("NFD").replace(/\p{Diacritic}/gu, "").replace(/đ/g, "d").replace(/Đ/g, "d").toLowerCase().trim();
}

export function filterGrammar(entries: GrammarEntry[], query: string): GrammarEntry[] {
  const words = foldText(query).split(/\s+/).filter(Boolean);
  if (words.length === 0) return entries;
  return entries.filter((e) => {
    const tokens = foldText(`${e.lectureTitle} ${e.lessonTitle} ${e.chapterTitle} ${e.level}`).split(/[^\p{L}\p{N}]+/u);
    // Vietnamese syllables are short: "bi" (bị) must not match inside "bieu" (biểu),
    // so short query words match whole tokens and longer ones match token prefixes.
    return words.every((w) => tokens.some((t) => (w.length <= 3 ? t === w : t.startsWith(w))));
  });
}
