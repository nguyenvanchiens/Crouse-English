import type { Exercise } from "@/content/types";

const NUMBER_WORDS = [
  "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
  "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen",
  "eighteen", "nineteen", "twenty",
];

export function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[‘’]/g, "'")
    .replace(/[^\p{L}\p{N}'\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function checkChoice(answer: number, choice: number | null): boolean {
  return choice !== null && choice === answer;
}

export function checkFillBlank(answers: string[], input: string): boolean {
  const value = normalize(input);
  if (value === "") return false;
  return answers.some((a) => normalize(a) === value);
}

export function checkReorder(words: string[], attempt: string[]): boolean {
  return attempt.length === words.length && attempt.every((w, i) => w === words[i]);
}

export function correctAnswerText(ex: Exercise): string {
  switch (ex.kind) {
    case "multiple-choice":
    case "listen-choose":
      return ex.options[ex.answer];
    case "fill-blank":
      return ex.answers[0];
    case "reorder":
      return ex.words.join(" ");
  }
}

/** Returns a shuffled index order whose word sequence differs from `items` whenever possible. */
export function shuffleAvoidingAnswer<T>(items: T[], rng: () => number = Math.random): number[] {
  const order = items.map((_, i) => i);
  if (items.length < 2) return order;
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  const same = order.every((idx, pos) => items[idx] === items[pos]);
  const allEqual = items.every((x) => x === items[0]);
  if (same && !allEqual) return [...order.slice(1), order[0]];
  return order;
}

function speechToken(token: string): string {
  if (/^\d+$/.test(token)) {
    const n = Number(token);
    if (n <= 20) return NUMBER_WORDS[n];
  }
  return token;
}

export function matchSpeech(
  target: string,
  heard: string,
): { words: { word: string; matched: boolean }[]; percent: number } {
  const display = target.split(/\s+/).filter((w) => normalize(w) !== "");
  if (display.length === 0) return { words: [], percent: 0 };
  const t = display.map((w) => speechToken(normalize(w)));
  const h = normalize(heard).split(" ").filter(Boolean).map(speechToken);

  // LCS table
  const dp: number[][] = Array.from({ length: t.length + 1 }, () => new Array(h.length + 1).fill(0));
  for (let i = t.length - 1; i >= 0; i--) {
    for (let j = h.length - 1; j >= 0; j--) {
      dp[i][j] = t[i] === h[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }
  const matched = new Array(t.length).fill(false);
  let i = 0;
  let j = 0;
  while (i < t.length && j < h.length) {
    if (t[i] === h[j]) {
      matched[i] = true;
      i++;
      j++;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      i++;
    } else {
      j++;
    }
  }
  const count = matched.filter(Boolean).length;
  return {
    words: display.map((word, k) => ({ word, matched: matched[k] })),
    percent: Math.round((count / t.length) * 100),
  };
}

export function percentScore(correct: number, total: number): number | null {
  if (total === 0) return null;
  return Math.round((correct / total) * 100);
}
