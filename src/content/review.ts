import type { Exercise, Lesson, Module } from "./types";

const KINDS: Exercise["kind"][] = ["multiple-choice", "fill-blank", "reorder", "listen-choose"];
const PER_LESSON = 3;

function exercisesOf(l: Lesson): Exercise[] {
  return l.steps.flatMap((s) => (s.type === "exercise" ? s.items : []));
}

/**
 * Chapter review: 3 items from each lesson, each lesson starting from a different
 * exercise kind so the review as a whole covers every kind. Deterministic.
 */
export function buildReviewLesson(chapterNumber: number, lessons: Lesson[]): Lesson {
  const items: Exercise[] = [];
  lessons.forEach((l, i) => {
    const pool = exercisesOf(l);
    const kinds = [...KINDS.slice(i % KINDS.length), ...KINDS.slice(0, i % KINDS.length)];
    const picked: Exercise[] = [];
    for (const k of kinds) {
      const e = pool.find((x) => x.kind === k && !picked.includes(x));
      if (e && picked.length < PER_LESSON) picked.push(e);
    }
    for (const e of pool) if (picked.length < PER_LESSON && !picked.includes(e)) picked.push(e);
    items.push(...picked.map((e) => ({ ...e, id: `${e.id}-r` })));
  });
  return {
    slug: `on-tap-chuong-${chapterNumber}`,
    title: `Ôn tập chương ${chapterNumber}`,
    minutes: 15,
    review: true,
    steps: [{ type: "exercise", items }],
  };
}

/** A chapter (module) of lessons followed by its generated review. */
export function chapter(n: number, title: string, lessons: Lesson[]): Module {
  return { id: `m${n}`, title, lessons: [...lessons, buildReviewLesson(n, lessons)] };
}
