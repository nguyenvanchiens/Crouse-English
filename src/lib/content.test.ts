import { describe, expect, it } from "vitest";
import { COURSES } from "@/content";
import { FINAL_PER_CHAPTER } from "@/content/review";
import type { Course, Exercise, LectureStep, Lesson, Step } from "@/content/types";
import { checkCorrection } from "./scoring";
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

/** Every exercise item a step contains: exercise items, reading questions, dialogue questions. */
function itemsOf(s: Step): Exercise[] {
  if (s.type === "exercise") return s.items;
  if (s.type === "reading") return s.questions;
  if (s.type === "dialogue") return s.questions ?? [];
  return [];
}

function checkItem(e: Exercise) {
  if (e.kind === "multiple-choice" || e.kind === "listen-choose") {
    expect(e.answer, e.id).toBeGreaterThanOrEqual(0);
    expect(e.answer, e.id).toBeLessThan(e.options.length);
    expect(e.options.length, e.id).toBeGreaterThanOrEqual(3);
    expect(e.options.length, e.id).toBeLessThanOrEqual(4);
    expect(new Set(e.options).size, `${e.id} has duplicate options`).toBe(e.options.length);
  }
  if (e.kind === "fill-blank") {
    expect(e.prompt.split("___"), e.id).toHaveLength(2);
    expect(e.answers.length, e.id).toBeGreaterThan(0);
  }
  if (e.kind === "reorder") {
    expect(e.words.length, e.id).toBeGreaterThanOrEqual(3);
    expect(e.words.length, e.id).toBeLessThanOrEqual(12);
  }
  if (e.kind === "correct") {
    expect(e.answers.length, e.id).toBeGreaterThan(0);
    expect(checkCorrection(e.answers, e.wrong), `${e.id}: the wrong sentence must not be accepted`).toBe(false);
  }
}

const words = (text: string) => text.trim().split(/\s+/).filter(Boolean).length;

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
  it("has no lesson slug shared by two levels of the path", () => {
    const seen = new Map<string, string>();
    for (const c of COURSES.filter((x) => x.goal === "lo-trinh")) {
      for (const l of c.modules.flatMap((m) => m.lessons).filter((x) => !x.review && !x.final)) {
        expect(seen.get(l.slug), `${l.slug} is in ${seen.get(l.slug)} and ${c.slug}`).toBeUndefined();
        seen.set(l.slug, c.slug);
      }
    }
  });
  it("has at least one lesson in every course and full content in open courses", () => {
    for (const c of COURSES) {
      const lessons = c.modules.flatMap((m) => m.lessons);
      expect(lessons.length).toBeGreaterThan(0);
      if (c.status === "open") expect(lessons.every((l) => l.steps.length > 0)).toBe(true);
    }
  });
  it("has valid vocab, exercises and speaking data, with exercise ids unique everywhere", () => {
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
          for (const e of itemsOf(s)) {
            expect(allIds.has(e.id), `duplicate exercise id ${e.id}`).toBe(false);
            allIds.add(e.id);
            checkItem(e);
          }
          if (s.type === "speaking") expect(s.sentences.length).toBeGreaterThan(0);
        }
      }
    }
  });
});

/** Per-level size of the reading text, the writing task and the free speaking answer. */
const SPEC: Record<string, { reading: [number, number]; task: [number, number]; speak: number }> = {
  "phat-am-ipa": { reading: [50, 150], task: [15, 40], speak: 15 },
  "tieng-anh-a1": { reading: [60, 130], task: [20, 45], speak: 20 },
  "tieng-anh-a2": { reading: [100, 190], task: [35, 70], speak: 30 },
  "tieng-anh-b1": { reading: [180, 300], task: [80, 130], speak: 45 },
  "tieng-anh-b2": { reading: [280, 420], task: [140, 200], speak: 60 },
  "tieng-anh-c1": { reading: [400, 650], task: [220, 300], speak: 80 },
};

/** British (non-rhotic) IPA: an r is only written before a vowel. */
const RHOTIC = /(ə|ː|eə|ɪə|ʊə)r(\/|\.?[ˈˌ]?[^aeiouæɑɒɔəɜɪʊʌ.ˈˌ])/;

describe("A1 to C1 path", () => {
  const path = COURSES.filter((c) => c.goal === "lo-trinh");
  const structured = COURSES.filter((c) => c.goal === "lo-trinh" || c.goal === "phat-am");
  const kinds: Exercise["kind"][] = ["multiple-choice", "fill-blank", "reorder", "listen-choose", "correct"];

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

  it("does not re-teach a vocabulary word from an earlier level", () => {
    const earlier = new Map<string, string>();
    const dupes: string[] = [];
    for (const c of path) {
      const mine = c.modules.flatMap((m) => m.lessons).flatMap((l) => l.steps.flatMap((s) => (s.type === "vocab" ? s.words.map((w) => w.word.toLowerCase()) : [])));
      dupes.push(...mine.filter((w) => earlier.has(w)).map((w) => `${c.slug}: ${w} (already in ${earlier.get(w)})`));
      for (const w of mine) earlier.set(w, c.slug);
    }
    expect(dupes).toEqual([]);
  });

  for (const c of structured) {
    const chapters = c.goal === "phat-am" ? 2 : 4;
    const spec = SPEC[c.slug];
    describe(c.slug, () => {
      const all: Lesson[] = c.modules.flatMap((m) => m.lessons);
      const regular = all.filter((l) => !l.review && !l.final);

      it(`has ${chapters} chapters of 4–5 lessons, each closed by a chapter review, then the final test`, () => {
        expect(c.modules).toHaveLength(chapters + 1);
        const final = c.modules[chapters];
        expect(final.lessons.map((l) => [l.slug, l.final])).toEqual([["kiem-tra-cuoi-khoa", true]]);
        c.modules.slice(0, chapters).forEach((m, i) => {
          expect(m.lessons.length).toBeGreaterThanOrEqual(5);
          expect(m.lessons.length).toBeLessThanOrEqual(6);
          expect(m.lessons.slice(0, -1).every((l) => !l.review)).toBe(true);
          expect(m.lessons[m.lessons.length - 1]).toMatchObject({ review: true, slug: `on-tap-chuong-${i + 1}` });
        });
      });

      it("has a final test of unseen items, written for it and covering every kind", () => {
        const course = c as Course;
        const bank = course.finalTest ?? [];
        expect(bank).toHaveLength(FINAL_PER_CHAPTER * chapters);
        const final = c.modules[chapters].lessons[0].steps[0];
        expect(final.type === "exercise" ? final.items : []).toEqual(bank);
        const lessonIds = new Set(regular.flatMap((l) => l.steps.flatMap((s) => itemsOf(s).map((e) => e.id))));
        for (const e of bank) {
          expect(lessonIds.has(e.id), `${e.id} is also a lesson item`).toBe(false);
          checkItem(e);
        }
        for (const k of kinds) expect(bank.some((e) => e.kind === k), `final test needs ${k}`).toBe(true);
        // the same question must not come back word for word from a lesson
        const prompts = new Set(regular.flatMap((l) => l.steps.flatMap((s) => itemsOf(s).map(promptOf))));
        for (const e of bank) expect(prompts.has(promptOf(e)), `${e.id} copies a lesson item`).toBe(false);
      });

      it("has no vocabulary word taught twice in the same course", () => {
        const w = regular.flatMap((l) => l.steps.flatMap((s) => (s.type === "vocab" ? s.words.map((x) => x.word.toLowerCase()) : [])));
        const dupes = w.filter((x, i) => w.indexOf(x) !== i);
        expect(dupes, `repeated vocab: ${dupes.join(", ")}`).toEqual([]);
      });

      it("writes vocabulary IPA the British way (no r before a consonant or at the end)", () => {
        const bad = regular.flatMap((l) => l.steps.flatMap((s) => (s.type === "vocab" ? s.words.filter((x) => RHOTIC.test(x.ipa)).map((x) => `${x.word} ${x.ipa}`) : [])));
        expect(bad).toEqual([]);
      });

      for (const r of all.filter((l) => l.review)) {
        it(`${r.slug} reviews 3 items per lesson covering every exercise kind`, () => {
          expect(r.steps.map((s) => s.type)).toEqual(["exercise"]);
          const items = r.steps[0].type === "exercise" ? r.steps[0].items : [];
          const lessonsInChapter = c.modules.find((m) => m.lessons.includes(r))!.lessons.length - 1;
          expect(items).toHaveLength(3 * lessonsInChapter);
          for (const k of kinds) expect(items.some((e) => e.kind === k), `${r.slug} needs ${k}`).toBe(true);
        });
      }

      for (const l of regular) {
        it(`${l.slug} follows the lesson format`, () => {
          expect(l.minutes).toBeGreaterThanOrEqual(15);
          expect(l.minutes).toBeLessThanOrEqual(40);
          expect(l.steps.map((s) => s.type)).toEqual(["lecture", "vocab", "dialogue", "reading", "exercise", "speaking", "task"]);
          const [lecture, vocab, dialogue, reading, exercise, speaking, task] = l.steps;

          const lec = lecture as LectureStep;
          expect(lec.blocks.length).toBeGreaterThanOrEqual(10);
          expect(lec.blocks.length).toBeLessThanOrEqual(20);
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
            // the teacher is a course persona: no invented length of career
            if (b.kind === "teacher") expect(b.body, "teacher block claims years of teaching").not.toMatch(/\d+ năm|năm mươi năm|nửa thế kỷ|mấy chục năm|chục năm/i);
          }

          if (vocab.type !== "vocab") throw new Error("vocab step");
          expect(vocab.words.length).toBeGreaterThanOrEqual(6);
          expect(vocab.words.length).toBeLessThanOrEqual(8);
          for (const w of vocab.words) expect(w.word, "single-word vocab").not.toMatch(/\s/);

          if (dialogue.type !== "dialogue") throw new Error("dialogue step");
          expect(dialogue.lines.length, "dialogue length").toBeGreaterThanOrEqual(6);
          expect(dialogue.lines.length, "dialogue length").toBeLessThanOrEqual(14);
          expect(new Set(dialogue.lines.map((x) => x.speaker)), "both roles speak").toEqual(new Set(["A", "B"]));
          expect(dialogue.context.length).toBeGreaterThan(10);
          const dq = dialogue.questions ?? [];
          expect(dq.length, "dialogue comprehension questions").toBeGreaterThanOrEqual(2);
          expect(dq.length).toBeLessThanOrEqual(3);
          for (const q of dq) {
            expect(["listen-choose", "multiple-choice"]).toContain(q.kind);
            if (q.kind === "listen-choose") expect(q.question, `${q.id} asks a question about the audio`).toBeTruthy();
          }

          if (reading.type !== "reading") throw new Error("reading step");
          const n = words(reading.paragraphs.join(" "));
          expect(n, `reading length for ${c.slug}`).toBeGreaterThanOrEqual(spec.reading[0]);
          expect(n, `reading length for ${c.slug}`).toBeLessThanOrEqual(spec.reading[1]);
          expect(reading.questions.length).toBeGreaterThanOrEqual(4);
          expect(reading.questions.length).toBeLessThanOrEqual(6);
          for (const q of reading.questions) expect(["multiple-choice", "fill-blank"]).toContain(q.kind);
          expect(reading.glossary.length).toBeGreaterThanOrEqual(2);

          if (exercise.type !== "exercise") throw new Error("exercise step");
          expect(exercise.items).toHaveLength(10);
          for (const k of kinds) expect(exercise.items.filter((e) => e.kind === k).length, `${l.slug} needs 2 x ${k}`).toBeGreaterThanOrEqual(2);

          if (task.type !== "task") throw new Error("task step");
          expect(task.hints.length).toBeGreaterThanOrEqual(2);
          expect(task.checklist.length).toBeGreaterThanOrEqual(3);
          expect(task.checklist.length).toBeLessThanOrEqual(6);
          expect(task.minWords, `task length for ${c.slug}`).toBeGreaterThanOrEqual(spec.task[0]);
          expect(task.minWords, `task length for ${c.slug}`).toBeLessThanOrEqual(spec.task[1]);
          expect(words(task.model), "model answer meets its own word minimum").toBeGreaterThanOrEqual(task.minWords);

          if (speaking.type !== "speaking") throw new Error("speaking step");
          expect(speaking.sentences).toHaveLength(3);
          for (const s of speaking.sentences) expect(s.text, "spell numbers as words").not.toMatch(/\d/);
          expect(speaking.free, "free speaking question").toBeTruthy();
          expect(words(speaking.free!.model), "free speaking model length").toBeGreaterThanOrEqual(spec.speak);
        });
      }
    });
  }
});

function promptOf(e: Exercise): string {
  switch (e.kind) {
    case "multiple-choice":
    case "fill-blank":
      return `${e.kind}:${e.prompt}`;
    case "listen-choose":
      return `${e.kind}:${e.audioText}:${e.question ?? ""}`;
    case "reorder":
      return `${e.kind}:${e.words.join(" ")}`;
    case "correct":
      return `${e.kind}:${e.wrong}`;
  }
}

describe("word banks and self-study", () => {
  const path = COURSES.filter((c) => c.goal === "lo-trinh");

  for (const c of path) {
    it(`${c.slug} has a word bank of at least 400 words in topics of 20+`, () => {
      const topics = c.wordBank ?? [];
      expect(topics.length).toBeGreaterThanOrEqual(8);
      expect(new Set(topics.map((t) => t.id)).size).toBe(topics.length);
      for (const t of topics) {
        expect(t.id).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
        expect(t.words.length, t.id).toBeGreaterThanOrEqual(20);
        for (const w of t.words) {
          expect(w.word, `${t.id}: single word`).toMatch(/^[A-Za-z][A-Za-z'-]*$/);
          expect(w.stress, `${t.id}/${w.word}`).toBeGreaterThanOrEqual(0);
          expect(w.stress, `${t.id}/${w.word}`).toBeLessThan(w.syllables.length);
          expect(w.ipa, `${t.id}/${w.word}`).toMatch(/^\/.+\/$/);
          expect(RHOTIC.test(w.ipa), `${t.id}/${w.word} ${w.ipa} is rhotic`).toBe(false);
          expect(w.meaning.length, w.word).toBeGreaterThan(0);
          expect(w.example.toLowerCase(), `${w.word}: example uses the word`).toContain(w.word.toLowerCase().slice(0, Math.max(3, w.word.length - 3)));
        }
      }
      expect(topics.reduce((n, t) => n + t.words.length, 0)).toBeGreaterThanOrEqual(400);
    });
  }

  it("never repeats a word across lessons and word banks of the whole path", () => {
    const seen = new Map<string, string>();
    const dupes: string[] = [];
    const add = (w: string, where: string) => {
      const k = w.toLowerCase();
      if (seen.has(k)) dupes.push(`${k}: ${seen.get(k)} and ${where}`);
      else seen.set(k, where);
    };
    for (const c of path) {
      for (const l of c.modules.flatMap((m) => m.lessons)) for (const s of l.steps) if (s.type === "vocab") for (const w of s.words) add(w.word, `${c.slug}/${l.slug}`);
      for (const t of c.wordBank ?? []) for (const w of t.words) add(w.word, `${c.slug}#${t.id}`);
    }
    expect(dupes).toEqual([]);
  });

  for (const c of COURSES.filter((x) => x.goal === "lo-trinh" || x.goal === "phat-am")) {
    it(`${c.slug} has a self-study plan with real resources`, () => {
      const s = c.selfStudy;
      expect(s, "selfStudy").toBeTruthy();
      expect(s!.weeklyHours).toBeGreaterThan(0);
      expect(s!.routine.length).toBeGreaterThanOrEqual(3);
      expect(s!.resources.length).toBeGreaterThanOrEqual(4);
      for (const r of s!.resources) expect(r.url).toMatch(/^https:\/\//);
      expect(new Set(s!.resources.map((r) => r.kind)).size, "mixes skills").toBeGreaterThanOrEqual(3);
    });
  }
});
