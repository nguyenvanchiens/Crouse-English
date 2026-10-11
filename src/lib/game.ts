/**
 * Duolingo-style games built from the courses' own content. Pure functions: rounds are drawn with a given
 * random source, so they can be tested; the components only show them.
 */
import { shuffled, type Rng } from "./test-draw";

export type GameId = "ghep-cap" | "xep-cau" | "nghe-chon" | "dien-tu";

export interface GameWord {
  id: string;
  word: string;
  meaning: string;
  ipa: string;
  example?: string;
  /** its review key in the course (vocabKey), to tell whether it is already being reviewed */
  courseKey: string;
}
export interface GameSentence {
  id: string;
  en: string;
  vi: string;
  /** the sentence cut into the tiles to put back in order */
  tiles: string[];
}
export interface GameBlank {
  id: string;
  /** the sentence with "___" where the answer goes */
  prompt: string;
  options: string[];
  answer: number;
  /** Vietnamese meaning of the sentence or why the answer is right */
  explain?: string;
  /** for a word taken out of its example sentence: the word, to add to the learner's own review */
  word?: GameWord;
}
export interface GameData {
  words: GameWord[];
  sentences: GameSentence[];
  blanks: GameBlank[];
  /** other words and sentences of the level, used only as wrong options (a unit of the path has few of its own) */
  pool?: { words: string[]; sentences: string[] };
}

/** How big a round is: a free round draws from the whole level, a unit of the path from one lesson. */
export interface RoundSize { boards: number; sentences: number; listenWords: number; listenSentences: number; blanks: number; grammar: number }

/** questions in a round of the sentence, listening and blank games */
export const ROUND = 10;
export const HEARTS = 3;
/** the matching game: boards of five pairs */
export const BOARDS = 3;
export const PAIRS = 5;
/** grammar questions from the lessons in a round, at most; the rest are words taken out of example sentences */
export const GRAMMAR_PER_ROUND = 4;
export const FREE_ROUND: RoundSize = { boards: BOARDS, sentences: ROUND, listenWords: 6, listenSentences: 4, blanks: ROUND, grammar: GRAMMAR_PER_ROUND };
/** a unit of the path: one lesson's eight-odd words, a few sentences and its grammar */
export const UNIT_ROUND: RoundSize = { boards: 2, sentences: 6, listenWords: 5, listenSentences: 3, blanks: 8, grammar: 2 };

/** n items, least recently seen first, in random order */
function pick<T extends { id: string }>(pool: readonly T[], n: number, seen: readonly string[], rng: Rng): T[] {
  const s = new Set(seen);
  const fresh = shuffled(pool.filter((x) => !s.has(x.id)), rng);
  const old = shuffled(pool.filter((x) => s.has(x.id)), rng);
  return [...fresh, ...old].slice(0, n);
}

/** a list in random order with the index of `answer` in it */
function withAnswer(answer: string, others: string[], rng: Rng): { options: string[]; answer: number } {
  const options = shuffled([answer, ...others], rng);
  return { options, answer: options.indexOf(answer) };
}

/** distractors of the same kind as `target`, never equal to it (ignoring case) */
function distractors(target: string, pool: readonly string[], n: number, rng: Rng): string[] {
  const t = target.toLowerCase();
  return shuffled([...new Set(pool.filter((x) => x.toLowerCase() !== t))], rng).slice(0, n);
}

/* ---- matching pairs */
export interface MatchBoard { pairs: GameWord[]; left: string[]; right: string[] }

export function matchBoards(words: readonly GameWord[], seen: readonly string[], rng: Rng, boardCount = BOARDS): MatchBoard[] {
  // two words with the same meaning on one board would make the pairing ambiguous
  const chosen: GameWord[] = [];
  const meanings = new Set<string>();
  for (const w of pick(words, words.length, seen, rng)) {
    const m = w.meaning.toLowerCase();
    if (meanings.has(m)) continue;
    meanings.add(m);
    chosen.push(w);
    if (chosen.length === boardCount * PAIRS) break;
  }
  const boards: MatchBoard[] = [];
  for (let b = 0; b * PAIRS < chosen.length; b++) {
    const pairs = chosen.slice(b * PAIRS, b * PAIRS + PAIRS);
    if (pairs.length < 2) break;
    boards.push({ pairs, left: shuffled(pairs.map((p) => p.word), rng), right: shuffled(pairs.map((p) => p.meaning), rng) });
  }
  return boards;
}

/* ---- building a sentence from tiles */
export interface SentenceQuestion { item: GameSentence; tiles: string[] }

export function sentenceRound(sentences: readonly GameSentence[], seen: readonly string[], rng: Rng, n = ROUND): SentenceQuestion[] {
  return pick(sentences, n, seen, rng).map((item) => ({ item, tiles: shuffled(item.tiles, rng) }));
}

const norm = (s: string) =>
  s
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[.,!?;:"“”]/g, "")
    .replace(/\s+/g, " ")
    .trim();

/** The tiles in the order the learner put them make the sentence (punctuation and case aside). */
export function checkSentence(answer: readonly string[], item: GameSentence): boolean {
  return norm(answer.join(" ")) === norm(item.tiles.join(" "));
}

/* ---- listen and choose */
export interface ListenQuestion {
  id: string;
  audio: string;
  options: string[];
  answer: number;
  meaning: string;
  /** set when what was said is a single word, so it can be added to the learner's own review */
  word?: GameWord;
}

/** Words and short sentences (six and four in a free round): hear one, pick what was said among four. */
export function listenRound(data: GameData, seen: readonly string[], rng: Rng, size: RoundSize = FREE_ROUND): ListenQuestion[] {
  const wordPool = [...data.words.map((x) => x.word), ...(data.pool?.words ?? [])];
  const words = pick(data.words, size.listenWords, seen, rng).map((w) => ({
    id: w.id,
    audio: w.word,
    meaning: w.meaning,
    word: w,
    ...withAnswer(w.word, distractors(w.word, wordPool, 3, rng), rng),
  }));
  const isShort = (s: string) => s.split(" ").length <= 9;
  const short = data.sentences.filter((s) => isShort(s.en));
  const sentencePool = [...short.map((x) => x.en), ...(data.pool?.sentences ?? []).filter(isShort)];
  const sentences = pick(short, size.listenSentences, seen, rng).map((s) => ({
    id: s.id,
    audio: s.en,
    meaning: s.vi,
    ...withAnswer(s.en, distractors(s.en, sentencePool, 3, rng), rng),
  }));
  return shuffled([...words, ...sentences], rng).filter((q) => q.options.length >= 2);
}

/* ---- fill the blank */
export function blankRound(blanks: readonly GameBlank[], seen: readonly string[], rng: Rng, size: RoundSize = FREE_ROUND): GameBlank[] {
  const grammar = pick(blanks.filter((b) => b.id.startsWith("g:")), size.grammar, seen, rng);
  const words = pick(blanks.filter((b) => !b.id.startsWith("g:")), size.blanks - grammar.length, seen, rng);
  return shuffled([...grammar, ...words], rng).map((b) => ({ ...b, ...withAnswer(b.options[b.answer], b.options.filter((_, i) => i !== b.answer), rng) }));
}

/* ---- scoring */
/** XP for a finished round: 2 a correct answer, 5 more for a round without mistakes. */
export function roundXp(correct: number, total: number): number {
  return correct * 2 + (total > 0 && correct === total ? 5 : 0);
}
