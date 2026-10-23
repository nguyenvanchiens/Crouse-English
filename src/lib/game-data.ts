import { ALL_DRILLS } from "@/content/drills";
import { exampleMeaning, exerciseMeaning } from "@/content/meanings";
import type { Course, Exercise, Lesson, Level } from "@/content/types";
import { getCourses } from "./content";
import { vocabKey } from "./progress-core";
import type { GameBlank, GameData, GameId, GameSentence, GameWord } from "./game";
import { PAIRS } from "./game";

export const GAME_LEVELS: Level[] = ["A1", "A2", "B1", "B2", "C1"];

const BLANK = "___";
const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const tokens = (s: string) => s.trim().split(/\s+/);

/** what one lesson gives the games */
interface LessonContent { words: GameWord[]; sentences: GameSentence[]; grammar: GameBlank[] }

function lessonContent(course: Course, lesson: Lesson): LessonContent {
  const words: GameWord[] = [];
  const sentences: GameSentence[] = [];
  const grammar: GameBlank[] = [];
  const takeChoice = (x: Exercise) => {
    if (x.kind === "multiple-choice" && x.prompt.includes(BLANK) && x.options.length >= 2) {
      const meaning = exerciseMeaning(x.id)?.vi;
      grammar.push({ id: `g:${x.id}`, prompt: x.prompt, options: x.options, answer: x.answer, explain: x.explain, ...(meaning ? { meaning } : {}) });
    }
  };
  lesson.steps.forEach((s, si) => {
    if (s.type === "vocab")
      for (const w of s.words) {
        if (!w.word || !w.meaning) continue;
        const courseKey = vocabKey(course.slug, w.word);
        words.push({ id: `w:${courseKey}`, word: w.word, meaning: w.meaning, ipa: w.ipa, courseKey, ...(w.example ? { example: w.example } : {}) });
      }
    else if (s.type === "exercise") s.items.forEach(takeChoice);
    else if (s.type === "reading" || s.type === "dialogue") (s.questions ?? []).forEach(takeChoice);
    if (s.type === "dialogue")
      s.lines.forEach((l, li) => {
        const n = tokens(l.en).length;
        if (n >= 3 && n <= 10 && l.vi) sentences.push({ id: `d:${course.slug}/${lesson.slug}/${si}/${li}`, en: l.en, vi: l.vi, tiles: tokens(l.en) });
      });
  });
  return { words, sentences, grammar };
}

/** each word's example sentence with the word taken out, with three other words of the level as wrong options */
function vocabBlanks(words: readonly GameWord[], pool: readonly string[], offset = 0): GameBlank[] {
  const others = pool.filter((x) => !x.includes(" "));
  const out: GameBlank[] = [];
  words.forEach((e, k) => {
    if (!e.example || e.word.includes(" ")) return;
    const re = new RegExp(`\\b${escape(e.word)}\\b`, "i");
    if (!re.test(e.example)) return;
    const i = offset + k;
    // a fixed, spread-out pick keeps the build deterministic; the round shuffles the options again
    const picks = [0, 1, 2, 3, 4, 5]
      .map((j) => others[(i * 7 + j * 13) % others.length])
      .filter((x, j, a) => x && x.toLowerCase() !== e.word.toLowerCase() && a.indexOf(x) === j)
      .slice(0, 3);
    if (picks.length < 3) return;
    const meaning = exampleMeaning(e.example);
    out.push({ id: `v:${e.word.toLowerCase()}`, prompt: e.example.replace(re, BLANK), options: [e.word, ...picks], answer: 0, explain: `${e.word}: ${e.meaning}`, word: e, ...(meaning ? { meaning } : {}) });
  });
  return out;
}

const studyLessons = (c: Course) => c.modules.flatMap((m) => m.lessons.map((l) => ({ lesson: l, chapter: m.title }))).filter((x) => !x.lesson.review && !x.lesson.final);

async function levelCourses(level: Level) {
  return (await getCourses()).filter((c) => c.level === level && c.status === "open");
}

/** the words of a level, each once (first lesson wins), lessons then word bank */
function levelWords(courses: Course[]): GameWord[] {
  const byWord = new Map<string, GameWord>();
  for (const c of courses) {
    for (const { lesson } of studyLessons(c)) for (const w of lessonContent(c, lesson).words) if (!byWord.has(w.word.toLowerCase())) byWord.set(w.word.toLowerCase(), w);
    for (const t of c.wordBank ?? [])
      for (const w of t.words) {
        if (!w.word || !w.meaning || byWord.has(w.word.toLowerCase())) continue;
        const courseKey = vocabKey(c.slug, w.word);
        byWord.set(w.word.toLowerCase(), { id: `w:${courseKey}`, word: w.word, meaning: w.meaning, ipa: w.ipa, courseKey, ...(w.example ? { example: w.example } : {}) });
      }
  }
  return [...byWord.values()];
}

const drillSentences = (level: Level): GameSentence[] =>
  ALL_DRILLS.filter((d) => d.level === level).map((d) => ({ id: `s:${d.id}`, en: d.en, vi: d.meaning, tiles: d.chunks }));

/**
 * Everything the free games draw from for one level, read from the courses at build time: the level's words
 * (lessons and word bank), its sentences (the sentence-splitting drills, cut into meaningful chunks, and
 * short dialogue lines, cut into words) and its fill-the-blank items (grammar questions with a blank, and the
 * example sentence of each word with that word taken out).
 */
export async function loadGameData(level: Level): Promise<GameData> {
  const courses = await levelCourses(level);
  const words = levelWords(courses);
  const sentences: GameSentence[] = [];
  const grammar: GameBlank[] = [];
  for (const c of courses)
    for (const { lesson } of studyLessons(c)) {
      const x = lessonContent(c, lesson);
      sentences.push(...x.sentences);
      grammar.push(...x.grammar);
    }
  sentences.push(...drillSentences(level));
  return { words, sentences, blanks: [...grammar, ...vocabBlanks(words, words.map((w) => w.word))] };
}

/* ---- the path: the level's main course, one unit per lesson, four games each, unlocked in order */

export interface PathUnit {
  slug: string;
  title: string;
  chapter: string;
  /** the games this lesson has enough content for, in the order they unlock */
  games: GameId[];
}
export const UNIT_GAMES: GameId[] = ["ghep-cap", "nghe-chon", "dien-tu", "xep-cau"];

const mainCourse = async (level: Level) => (await levelCourses(level)).find((c) => c.goal === "lo-trinh") ?? null;

/** the level's sentence drills shared out over the units, so every unit has sentences to build */
/**
 * The level's sentence drills shared out over the units, never before the lesson that teaches the grammar
 * they need: a drill goes to its share of the path or to that lesson, whichever comes later.
 */
function unitDrills(level: Level, course: Course, unitIndex: number, unitCount: number): GameSentence[] {
  const drills = ALL_DRILLS.filter((d) => d.level === level);
  const slugs = studyLessons(course).map((x) => x.lesson.slug);
  return drills
    .filter((d, j) => {
      const taught = d.review.course === course.slug ? slugs.indexOf(d.review.lesson) : -1;
      return Math.max(taught, Math.floor((j * unitCount) / drills.length)) === unitIndex;
    })
    .map((d) => ({ id: `s:${d.id}`, en: d.en, vi: d.meaning, tiles: d.chunks }));
}

/** At A1 and A2 the first units build short sentences: at most 6 pieces in units 1–3, 8 in units 4–8. */
const tileCap = (level: Level, unitIndex: number) => (level === "A1" || level === "A2" ? (unitIndex < 3 ? 6 : unitIndex < 8 ? 8 : Infinity) : Infinity);

function easyFirst(sentences: GameSentence[], cap: number): GameSentence[] {
  const short = sentences.filter((x) => x.tiles.length <= cap);
  // a unit always keeps three sentences to build, the shortest it has
  return short.length >= 3 ? short : [...sentences].sort((a, b) => a.tiles.length - b.tiles.length).slice(0, 3);
}

async function unitData(level: Level, course: Course, index: number, count: number, pool: GameWord[]): Promise<GameData> {
  const { lesson } = studyLessons(course)[index];
  const x = lessonContent(course, lesson);
  const sentences = easyFirst([...x.sentences, ...unitDrills(level, course, index, count)], tileCap(level, index));
  return { words: x.words, sentences, blanks: [...x.grammar, ...vocabBlanks(x.words, pool.map((w) => w.word), index * 11)] };
}

const gamesFor = (d: GameData): GameId[] =>
  UNIT_GAMES.filter((g) =>
    g === "ghep-cap" ? new Set(d.words.map((w) => w.meaning.toLowerCase())).size >= PAIRS - 1
    : g === "nghe-chon" ? d.words.length >= 3
    : g === "dien-tu" ? d.blanks.length >= 4
    : d.sentences.length >= 3,
  );

/** The units of a level's path, in course order. */
export async function loadPath(level: Level): Promise<{ course: string; units: PathUnit[] }> {
  const course = await mainCourse(level);
  if (!course) return { course: "", units: [] };
  const lessons = studyLessons(course);
  const pool = levelWords(await levelCourses(level));
  const units = await Promise.all(
    lessons.map(async ({ lesson, chapter }, i) => ({ slug: lesson.slug, title: lesson.title, chapter, games: gamesFor(await unitData(level, course, i, lessons.length, pool)) })),
  );
  return { course: course.slug, units };
}

/** One unit's content for its games, with the rest of the level as wrong options only. */
export async function loadUnit(level: Level, slug: string): Promise<{ unit: PathUnit; data: GameData } | null> {
  const course = await mainCourse(level);
  if (!course) return null;
  const lessons = studyLessons(course);
  const index = lessons.findIndex((x) => x.lesson.slug === slug);
  if (index < 0) return null;
  const courses = await levelCourses(level);
  const pool = levelWords(courses);
  const data = await unitData(level, course, index, lessons.length, pool);
  const short = (await loadGameData(level)).sentences.map((s) => s.en).filter((s) => s.split(" ").length <= 9);
  return {
    unit: { slug, title: lessons[index].lesson.title, chapter: lessons[index].chapter, games: gamesFor(data) },
    data: { ...data, pool: { words: pool.map((w) => w.word), sentences: short } },
  };
}
