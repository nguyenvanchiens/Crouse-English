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

/** How a word is shown on a reorder chip: no punctuation or capitals that hint at its position. */
export function chipText(word: string): string {
  const bare = word.replace(/[‘’]/g, "'").replace(/[^\p{L}\p{N}']/gu, "");
  return /^I('|$)/.test(bare) ? bare : bare.toLowerCase();
}

export function checkReorder(words: string[], attempt: string[]): boolean {
  return attempt.length === words.length && attempt.every((w, i) => chipText(w) === chipText(words[i]));
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

const TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

function numberWords(n: number): string[] {
  if (n <= 20) return [NUMBER_WORDS[n]];
  const tens = TENS[Math.floor(n / 10)];
  return n % 10 === 0 ? [tens] : [tens, NUMBER_WORDS[n % 10]];
}

/** Speech recognizers often write numbers as digits ("0912", "13", "6:00"); spell them out. */
function speechTokens(token: string): string[] {
  const time = /^(\d{1,2}):(\d{2})$/.exec(token);
  if (time) {
    const [h, m] = [Number(time[1]), Number(time[2])];
    if (h <= 99) return [...numberWords(h), ...(m === 0 ? ["o'clock"] : numberWords(m))];
  }
  if (/^\d+$/.test(token)) {
    if (token.length >= 3 || (token.length > 1 && token.startsWith("0"))) {
      return [...token].map((d) => NUMBER_WORDS[Number(d)]);
    }
    return numberWords(Number(token));
  }
  return [token];
}

export function matchSpeech(
  target: string,
  heard: string,
): { words: { word: string; matched: boolean }[]; percent: number } {
  const display = target.split(/[\s-]+/).filter((w) => normalize(w) !== "");
  if (display.length === 0) return { words: [], percent: 0 };
  const t = display.map((w) => normalize(w));
  const h = heard.toLowerCase().split(/[\s-]+/).flatMap((raw) => {
    const bare = raw.replace(/[.,!?]+$/, "");
    // keep "6:00" intact: normalize() would split it on the colon
    if (/^\d{1,2}:\d{2}$/.test(bare)) return speechTokens(bare);
    return normalize(raw).split(" ").filter(Boolean).flatMap(speechTokens);
  });

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
