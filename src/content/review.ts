import type { Course, Exercise, Lesson, Module } from "./types";

const KINDS: Exercise["kind"][] = ["multiple-choice", "fill-blank", "reorder", "listen-choose", "correct"];
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

/** Minimum final-test score (%) for the certificate. */
export const FINAL_PASS = 70;
/** Items per chapter in one attempt of the final test. */
export const FINAL_PER_CHAPTER = 5;
/** Items per chapter in a course's final-test bank: three attempts in a row share no item. */
export const FINAL_BANK_PER_CHAPTER = 15;

/**
 * A course's whole final-test bank in chapter order: the original items (FINAL_PER_CHAPTER per chapter)
 * followed by that chapter's extra items. Each attempt draws FINAL_PER_CHAPTER per chapter from it.
 */
export function finalBank(base: Exercise[], extra: Exercise[][]): Exercise[] {
  if (base.length !== extra.length * FINAL_PER_CHAPTER) throw new Error("final bank: base items do not match the chapters");
  return extra.flatMap((more, c) => [...base.slice(c * FINAL_PER_CHAPTER, (c + 1) * FINAL_PER_CHAPTER), ...more]);
}

function finalLesson(items: Exercise[]): Lesson {
  return {
    slug: "kiem-tra-cuoi-khoa",
    title: "Kiểm tra cuối khóa",
    minutes: 25,
    final: true,
    steps: [{ type: "exercise", items }],
  };
}

/**
 * End-of-course test: 5 items per chapter, preferring items the chapter review did not
 * use, rotating lessons and exercise kinds so the whole test covers every kind.
 */
export function buildFinalTest(chapters: Module[]): Lesson {
  const items: Exercise[] = [];
  chapters.forEach((m, ci) => {
    const used = new Set(
      m.lessons.filter((l) => l.review).flatMap((l) => exercisesOf(l).map((e) => e.id.replace(/-r$/, ""))),
    );
    const lessons = m.lessons.filter((l) => !l.review && !l.final);
    const fresh = lessons.map((l) => exercisesOf(l).filter((e) => !used.has(e.id)));
    const all = lessons.map((l) => exercisesOf(l));
    const picked: Exercise[] = [];
    for (const pools of [fresh, all]) {
      for (let round = 0; picked.length < FINAL_PER_CHAPTER && round < 8; round++) {
        for (let li = 0; li < pools.length && picked.length < FINAL_PER_CHAPTER; li++) {
          const kind = KINDS[(ci + li + round) % KINDS.length];
          const e = pools[li].find((x) => x.kind === kind && !picked.includes(x)) ?? pools[li].find((x) => !picked.includes(x));
          if (e) picked.push(e);
        }
      }
    }
    items.push(...picked.map((e) => ({ ...e, id: `${e.id}-f` })));
  });
  return finalLesson(items);
}

/**
 * Returns a copy of the course with a closing "Kiểm tra cuối khóa" module. A course with its own
 * `finalTest` bank is tested on those unseen items, so the certificate measures skill, not memory
 * of lesson answers; otherwise the test is drawn from the lessons.
 */
export function withFinalTest(course: Course): Course {
  const final = course.finalTest?.length ? finalLesson(course.finalTest) : buildFinalTest(course.modules);
  return {
    ...course,
    modules: [...course.modules, { id: "m-final", title: "Kiểm tra cuối khóa", lessons: [final] }],
  };
}
