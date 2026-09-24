# Course Client (phía học viên) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Xây phía học viên cho web khóa học tiếng Anh Crouse English: danh sách khóa, chi tiết khóa, trang học bài (video, từ vựng, bài tập, luyện nói), tiến độ, "Khóa học của tôi", hoàn thành kèm chứng chỉ, kiểm tra trình độ. Dùng dữ liệu mẫu, tiến độ lưu trong localStorage.

**Architecture:** Nội dung là dữ liệu TypeScript có kiểu trong `src/content/`. Mọi trang chỉ đọc dữ liệu qua `src/lib/content.ts` (async, sau này thay bằng CMS). Tiến độ nằm trong `src/lib/progress.ts`: hook `useProgress()` dùng `useSyncExternalStore` trên localStorage. Mọi logic thuần (chấm điểm, streak, % tiến độ, kiểm tra trình độ) nằm trong các module không có `"use client"`, được test bằng Vitest. Trang dạng server component, tạo sẵn bằng `generateStaticParams`; phần có trạng thái là client component.

**Tech Stack:** Next.js 16.3 (App Router), React 19.2, Tailwind v4, lucide-react, Vitest 3.

**Spec:** `docs/superpowers/specs/2026-09-24-course-client-design.md`

## Global Constraints

- Mọi lệnh chạy trong thư mục `web/` (gốc repo git).
- Next.js 16: `params` là Promise, gõ kiểu bằng helper toàn cục `PageProps<"/route/[param]">` (không cần import), luôn `await props.params`. Đọc `node_modules/next/dist/docs/` trước khi dùng API không có trong plan này.
- Component dùng `useSearchParams` phải được bọc trong `<Suspense>`.
- Không `setState` trực tiếp trong `useEffect` (luật lint `react-hooks/set-state-in-effect`). Giá trị chỉ có ở trình duyệt thì dùng `useSyncExternalStore`.
- Chỉ dùng token màu/utility của hệ "clay" trong `src/app/globals.css` (`clay`, `btn`, `btn-primary`, `btn-ghost`, `bg-sun`, `bg-leaf-soft`, `text-ink-soft`…). Không dùng mã hex trong component.
- Không dùng emoji làm icon trong giao diện; dùng lucide-react, icon trang trí có `aria-hidden`.
- Chữ trên giao diện viết tiếng Việt, câu thường (sentence case), không viết hoa toàn bộ nhãn, không nối chuỗi thông tin bằng dấu chấm giữa " · ".
- Nút bấm cao tối thiểu 44px (`min-h-11`), focus nhìn thấy được (đã có sẵn `:focus-visible` toàn cục), tôn trọng `prefers-reduced-motion` (đã có sẵn trong CSS).
- Khóa localStorage: `ce:progress:v1`. Slug bài học không được là `hoan-thanh`.
- Đường dẫn: `/khoa-hoc`, `/khoa-hoc/[slug]`, `/hoc/[course]/[lesson]`, `/hoc/[course]/hoan-thanh`, `/cua-toi`, `/kiem-tra-trinh-do`.
- Mặc định không commit. Chỉ chạy bước "Commit" khi người dùng đã cho phép commit trong phiên.

## Review Focus

1. **Chuỗi ngày học bị đứt:** học viên nghỉ 3 ngày rồi mở lại thì streak hiện 0 (không phải số cũ), và lần học tiếp theo streak = 1. Đồng hồ máy lùi ngày thì streak giữ nguyên. Test ở Task 2 (`displayStreak`, `nextStreak`).
2. **Nhận giọng nói trả về chữ số:** Chrome thường trả "6 o'clock" cho câu "six o'clock". So khớp phải coi "6" = "six" (0–20). Test ở Task 1 (`matchSpeech`).
3. **Dữ liệu localStorage hỏng hoặc của phiên bản khác:** JSON sai, `version: 2`, `enrolled` không phải mảng. App không được crash, phải về trạng thái rỗng. Test ở Task 2 (`parseState`).
4. **Câu sắp xếp có từ trùng** (ví dụ "I have two brothers" không trùng, nhưng "the cat and the dog" có "the" hai lần): thứ tự xáo không được trùng đáp án, và bất kỳ thứ tự nào ra đúng chuỗi từ đều được tính đúng. Test ở Task 1 (`shuffleAvoidingAnswer`, `checkReorder`).
5. **Điền từ có khoảng trắng, dấu câu hoặc chữ hoa** (" Meet. ", "MEET"), và ô trống thì không bao giờ tính đúng. Test ở Task 1 (`checkFillBlank`).

---

## File Structure

```
web/
  vitest.config.ts                          (Task 1) cấu hình Vitest, alias @
  src/content/types.ts                      (Task 1) toàn bộ kiểu dữ liệu nội dung
  src/lib/scoring.ts (+ .test.ts)           (Task 1) chuẩn hóa, chấm bài tập, so khớp câu nói, % điểm
  src/lib/progress-core.ts (+ .test.ts)     (Task 2) kiểu + hàm thuần của tiến độ
  src/lib/progress.ts                       (Task 2) store localStorage + hook useProgress (client)
  src/lib/placement.ts (+ .test.ts)         (Task 3) chấm bài kiểm tra trình độ
  src/content/placement.ts                  (Task 3) 20 câu kiểm tra
  src/lib/format.ts (+ .test.ts)            (Task 3) định dạng VND, ngày, mã chứng chỉ
  src/content/builders.ts                   (Task 4) hàm tạo nhanh bài tập/từ vựng
  src/content/courses/*.ts, index.ts        (Task 4) dữ liệu 4 khóa
  src/lib/course-utils.ts (+ .test.ts)      (Task 4) lọc, trải phẳng bài, gợi ý khóa (thuần)
  src/lib/content.ts (+ content.test.ts)    (Task 4) lớp lấy dữ liệu + kiểm tra toàn vẹn dữ liệu
  src/lib/speech.ts                         (Task 5) đọc to / nhận giọng nói (client)
  src/components/pronounce-card.tsx         (Task 5) thẻ phát âm dùng chung
  src/components/word-card.tsx              (Task 5) sửa: dùng PronounceCard
  src/components/site/*                     (Task 6) Logo, SiteHeader, SiteFooter
  src/components/ui/*                       (Task 6) ProgressBar, Chip, EmptyState, OptionList, PersistNotice
  src/components/course/goal-meta.ts        (Task 6) nhãn/màu/icon theo mục tiêu
  src/app/(site)/layout.tsx, page.tsx       (Task 6) chuyển trang chủ vào nhóm route, dùng dữ liệu chung
  src/app/not-found.tsx                     (Task 6)
  src/components/course/course-card.tsx     (Task 7)
  src/components/course/course-catalog.tsx  (Task 7)
  src/app/(site)/khoa-hoc/page.tsx          (Task 7)
  src/components/course/syllabus.tsx        (Task 8)
  src/components/course/enroll-panel.tsx    (Task 8)
  src/app/(site)/khoa-hoc/[slug]/page.tsx   (Task 8)
  src/app/hoc/layout.tsx                    (Task 9)
  src/app/hoc/[course]/[lesson]/page.tsx    (Task 9)
  src/components/lesson/lesson-shell.tsx    (Task 9)
  src/components/lesson/lesson-sidebar.tsx  (Task 9)
  src/components/lesson/step-video.tsx      (Task 9)
  src/components/lesson/step-vocab.tsx      (Task 9)
  src/components/exercises/*.tsx            (Task 10)
  src/components/lesson/step-exercise.tsx   (Task 10)
  src/components/lesson/step-speaking.tsx   (Task 11)
  src/app/hoc/[course]/hoan-thanh/page.tsx  (Task 12)
  src/components/completion-view.tsx        (Task 12)
  src/app/(site)/cua-toi/page.tsx           (Task 13)
  src/components/my-courses.tsx             (Task 13)
  src/app/(site)/kiem-tra-trinh-do/page.tsx (Task 14)
  src/components/placement-test.tsx         (Task 14)
```

Spec ghi tiến độ nằm trong "`progress.ts`". Plan tách thành `progress-core.ts` (thuần, server và test import được) và `progress.ts` (client). Lý do: một module có `"use client"` mà server component import hàm thuần từ đó thì sẽ bị biến thành client reference.

---

### Task 1: Vitest, kiểu nội dung, chấm điểm

**Files:**
- Create: `vitest.config.ts`, `src/content/types.ts`, `src/lib/scoring.ts`, `src/lib/scoring.test.ts`
- Modify: `package.json` (script `test`)

**Interfaces:**
- Produces (types.ts): `Level`, `Goal`, `Course`, `Module`, `Lesson`, `Step`, `VideoStep`, `VocabStep`, `ExerciseStep`, `SpeakingStep`, `VocabWord`, `Exercise`, `MultipleChoiceExercise`, `FillBlankExercise`, `ReorderExercise`, `ListenChooseExercise`, `PlacementQuestion`, `PlacementLevel`.
- Produces (scoring.ts): `normalize(text: string): string`, `checkChoice(answer: number, choice: number | null): boolean`, `checkFillBlank(answers: string[], input: string): boolean`, `checkReorder(words: string[], attempt: string[]): boolean`, `correctAnswerText(ex: Exercise): string`, `shuffleAvoidingAnswer<T>(items: T[], rng?: () => number): number[]`, `matchSpeech(target: string, heard: string): { words: { word: string; matched: boolean }[]; percent: number }`, `percentScore(correct: number, total: number): number | null`.

- [ ] **Step 1: Lưu lại trang chủ hiện có (chỉ khi được phép commit)**

```bash
git add -A
git commit -m "feat: landing page with clay design system and pronunciation card"
```

- [ ] **Step 2: Cài Vitest và thêm script**

```bash
npm i -D vitest@^3
npm pkg set scripts.test="vitest run"
```

Create `vitest.config.ts`:

```ts
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});
```

- [ ] **Step 3: Viết kiểu nội dung**

Create `src/content/types.ts`:

```ts
export type Level = "A1" | "A2" | "B1" | "B2" | "C1";
export type PlacementLevel = Exclude<Level, "C1">;
export type Goal = "giao-tiep" | "ielts" | "toeic" | "tre-em";

export interface VocabWord {
  word: string;
  ipa: string;
  meaning: string;
  example: string;
  syllables: string[];
  /** index of the stressed syllable in `syllables` */
  stress: number;
  tip?: string;
}

export interface MultipleChoiceExercise {
  kind: "multiple-choice";
  id: string;
  prompt: string;
  options: string[];
  answer: number;
  explain?: string;
}
export interface FillBlankExercise {
  kind: "fill-blank";
  id: string;
  /** contains exactly one "___" */
  prompt: string;
  answers: string[];
  explain?: string;
}
export interface ReorderExercise {
  kind: "reorder";
  id: string;
  prompt: string;
  /** words in the correct order */
  words: string[];
  explain?: string;
}
export interface ListenChooseExercise {
  kind: "listen-choose";
  id: string;
  audioText: string;
  options: string[];
  answer: number;
  explain?: string;
}
export type Exercise =
  | MultipleChoiceExercise
  | FillBlankExercise
  | ReorderExercise
  | ListenChooseExercise;

export interface VideoStep { type: "video"; youtubeId: string; title: string }
export interface VocabStep { type: "vocab"; words: VocabWord[] }
export interface ExerciseStep { type: "exercise"; items: Exercise[] }
export interface SpeakingStep {
  type: "speaking";
  sentences: { text: string; meaningVi: string }[];
}
export type Step = VideoStep | VocabStep | ExerciseStep | SpeakingStep;

export interface Lesson {
  slug: string;
  title: string;
  minutes: number;
  free: boolean;
  steps: Step[];
}
export interface Module { id: string; title: string; lessons: Lesson[] }

export interface Course {
  slug: string;
  title: string;
  level: Level;
  goal: Goal;
  summary: string;
  outcomes: string[];
  audience: string[];
  teacher: { name: string; bio: string; initials: string };
  /** học phí mỗi tháng */
  priceVnd: number;
  durationWeeks: number;
  rating: number;
  reviews: { name: string; role: string; quote: string }[];
  faqs: { q: string; a: string }[];
  status: "open" | "soon";
  modules: Module[];
}

export interface PlacementQuestion {
  id: string;
  level: PlacementLevel;
  skill: "vocab" | "grammar" | "listening";
  prompt: string;
  audioText?: string;
  options: string[];
  answer: number;
}
```

- [ ] **Step 4: Viết test chấm điểm (phải fail)**

Create `src/lib/scoring.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import {
  checkChoice,
  checkFillBlank,
  checkReorder,
  correctAnswerText,
  matchSpeech,
  normalize,
  percentScore,
  shuffleAvoidingAnswer,
} from "./scoring";

describe("normalize", () => {
  it("lowercases, trims, collapses spaces and strips punctuation", () => {
    expect(normalize("  Nice to   MEET you! ")).toBe("nice to meet you");
  });
  it("keeps apostrophes and unifies curly ones", () => {
    expect(normalize("I’m six o'clock.")).toBe("i'm six o'clock");
  });
});

describe("checkChoice", () => {
  it("matches the answer index", () => {
    expect(checkChoice(1, 1)).toBe(true);
    expect(checkChoice(1, 0)).toBe(false);
    expect(checkChoice(1, null)).toBe(false);
  });
});

describe("checkFillBlank", () => {
  it("accepts any listed answer ignoring case, spaces and punctuation", () => {
    expect(checkFillBlank(["meet"], " Meet. ")).toBe(true);
    expect(checkFillBlank(["meet"], "MEET")).toBe(true);
    expect(checkFillBlank(["next to", "near"], "near")).toBe(true);
    expect(checkFillBlank(["next to"], "next   to")).toBe(true);
  });
  it("rejects wrong and empty input", () => {
    expect(checkFillBlank(["meet"], "see")).toBe(false);
    expect(checkFillBlank(["meet"], "   ")).toBe(false);
    expect(checkFillBlank([""], "")).toBe(false);
  });
});

describe("checkReorder", () => {
  it("requires the exact word sequence", () => {
    expect(checkReorder(["I", "am", "a", "student"], ["I", "am", "a", "student"])).toBe(true);
    expect(checkReorder(["I", "am", "a", "student"], ["am", "I", "a", "student"])).toBe(false);
    expect(checkReorder(["I", "am"], ["I"])).toBe(false);
  });
  it("accepts either copy of a duplicated word", () => {
    const words = ["the", "cat", "and", "the", "dog"];
    expect(checkReorder(words, ["the", "cat", "and", "the", "dog"])).toBe(true);
  });
});

describe("shuffleAvoidingAnswer", () => {
  it("returns a permutation of indices", () => {
    const order = shuffleAvoidingAnswer(["a", "b", "c", "d"]);
    expect([...order].sort()).toEqual([0, 1, 2, 3]);
  });
  it("never yields the original word sequence when avoidable", () => {
    const identityRng = () => 0.999999; // Fisher-Yates with this rng keeps order
    const words = ["the", "cat", "and", "the", "dog"];
    for (let k = 0; k < 20; k++) {
      const order = shuffleAvoidingAnswer(words, k === 0 ? identityRng : Math.random);
      expect(order.map((i) => words[i])).not.toEqual(words);
    }
  });
  it("leaves single-item and all-equal lists alone", () => {
    expect(shuffleAvoidingAnswer(["hi"])).toEqual([0]);
    expect(shuffleAvoidingAnswer(["a", "a"]).length).toBe(2);
  });
});

describe("correctAnswerText", () => {
  it("renders the expected answer per kind", () => {
    expect(correctAnswerText({ kind: "multiple-choice", id: "x", prompt: "", options: ["a", "b"], answer: 1 })).toBe("b");
    expect(correctAnswerText({ kind: "listen-choose", id: "x", audioText: "", options: ["a", "b"], answer: 0 })).toBe("a");
    expect(correctAnswerText({ kind: "fill-blank", id: "x", prompt: "", answers: ["meet", "see"] })).toBe("meet");
    expect(correctAnswerText({ kind: "reorder", id: "x", prompt: "", words: ["See", "you", "later"] })).toBe("See you later");
  });
});

describe("matchSpeech", () => {
  it("marks every word when the sentence is repeated exactly", () => {
    const r = matchSpeech("Nice to meet you.", "nice to meet you");
    expect(r.percent).toBe(100);
    expect(r.words.map((w) => w.word)).toEqual(["Nice", "to", "meet", "you."]);
    expect(r.words.every((w) => w.matched)).toBe(true);
  });
  it("marks missing words and ignores extra ones", () => {
    const r = matchSpeech("Good morning, how are you?", "good morning um how you today");
    expect(r.words.map((w) => w.matched)).toEqual([true, true, true, false, true]);
    expect(r.percent).toBe(80);
  });
  it("treats digits 0-20 as their English words", () => {
    const r = matchSpeech("I usually get up at six o'clock.", "I usually get up at 6 o'clock");
    expect(r.percent).toBe(100);
  });
  it("returns 0 for empty input", () => {
    expect(matchSpeech("Hello", "").percent).toBe(0);
    expect(matchSpeech("", "hello")).toEqual({ words: [], percent: 0 });
  });
});

describe("percentScore", () => {
  it("rounds to an integer percent", () => {
    expect(percentScore(2, 3)).toBe(67);
    expect(percentScore(4, 4)).toBe(100);
  });
  it("is null when there is nothing to score", () => {
    expect(percentScore(0, 0)).toBeNull();
  });
});
```

- [ ] **Step 5: Chạy test để thấy fail**

Run: `npm test -- src/lib/scoring.test.ts`
Expected: FAIL, "Failed to resolve import ./scoring" / "Cannot find module".

- [ ] **Step 6: Viết scoring.ts**

Create `src/lib/scoring.ts`:

```ts
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
```

- [ ] **Step 7: Chạy test để thấy pass**

Run: `npm test -- src/lib/scoring.test.ts`
Expected: PASS, toàn bộ test trong file.

- [ ] **Step 8: Commit**

```bash
git add vitest.config.ts package.json package-lock.json src/content/types.ts src/lib/scoring.ts src/lib/scoring.test.ts
git commit -m "feat: content types and exercise scoring"
```

---

### Task 2: Tiến độ học (logic thuần + store localStorage)

**Files:**
- Create: `src/lib/progress-core.ts`, `src/lib/progress-core.test.ts`, `src/lib/progress.ts`

**Interfaces:**
- Consumes: `Course`, `Lesson`, `Level` từ `@/content/types`.
- Produces (progress-core.ts): `STORAGE_KEY`, `LessonRecord`, `Streak`, `ProgressState`, `CourseProgress`, `emptyState()`, `parseState(raw: string | null): ProgressState`, `todayKey(d?: Date): string`, `nextStreak(streak: Streak, today: string): Streak`, `displayStreak(streak: Streak, today: string): number`, `lessonKey(courseSlug: string, lessonSlug: string): string`, `courseProgress(course: Course, state: ProgressState): CourseProgress`, `lastCompletedAt(course: Course, state: ProgressState): string | null`, `applyEnroll(state, courseSlug)`, `applyCompleteLesson(state, courseSlug, lessonSlug, score: number | null, now: Date)`, `applyLearnerName(state, name: string)`, `applyPlacement(state, level: Level, score: number, now: Date)`.
- Produces (progress.ts, client): `useProgress(): { state: ProgressState; ready: boolean; persistent: boolean }`, `progress.enroll(slug)`, `progress.completeLesson(courseSlug, lessonSlug, score): ProgressState`, `progress.setLearnerName(name)`, `progress.savePlacement(level, score)`.

- [ ] **Step 1: Viết test (phải fail)**

Create `src/lib/progress-core.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import type { Course } from "@/content/types";
import {
  applyCompleteLesson,
  applyEnroll,
  applyLearnerName,
  applyPlacement,
  courseProgress,
  displayStreak,
  emptyState,
  lastCompletedAt,
  lessonKey,
  nextStreak,
  parseState,
  todayKey,
} from "./progress-core";

const lesson = (slug: string) => ({ slug, title: slug, minutes: 5, free: false, steps: [] });
const course: Course = {
  slug: "c", title: "C", level: "A1", goal: "giao-tiep", summary: "", outcomes: [], audience: [],
  teacher: { name: "", bio: "", initials: "" }, priceVnd: 0, durationWeeks: 1, rating: 5,
  reviews: [], faqs: [], status: "open",
  modules: [
    { id: "m1", title: "M1", lessons: [lesson("a"), lesson("b")] },
    { id: "m2", title: "M2", lessons: [lesson("c")] },
  ],
};

describe("parseState", () => {
  it("returns empty state for missing, corrupt or foreign data", () => {
    expect(parseState(null)).toEqual(emptyState());
    expect(parseState("{not json")).toEqual(emptyState());
    expect(parseState(JSON.stringify({ version: 2, enrolled: ["c"] }))).toEqual(emptyState());
    expect(parseState("[]")).toEqual(emptyState());
  });
  it("drops malformed fields but keeps valid ones", () => {
    const s = parseState(JSON.stringify({ version: 1, enrolled: "c", learnerName: "Lan", streak: "x" }));
    expect(s.enrolled).toEqual([]);
    expect(s.learnerName).toBe("Lan");
    expect(s.streak).toEqual({ current: 0, lastDay: null });
  });
  it("round-trips a valid state", () => {
    const s = applyEnroll(emptyState(), "c");
    expect(parseState(JSON.stringify(s))).toEqual(s);
  });
});

describe("todayKey", () => {
  it("formats local date as YYYY-MM-DD", () => {
    expect(todayKey(new Date(2026, 0, 5, 23, 59))).toBe("2026-01-05");
  });
});

describe("nextStreak", () => {
  it("starts at 1", () => {
    expect(nextStreak({ current: 0, lastDay: null }, "2026-09-24")).toEqual({ current: 1, lastDay: "2026-09-24" });
  });
  it("does not grow twice in one day", () => {
    const s = { current: 3, lastDay: "2026-09-24" };
    expect(nextStreak(s, "2026-09-24")).toEqual(s);
  });
  it("grows on consecutive days, across month ends", () => {
    expect(nextStreak({ current: 3, lastDay: "2026-09-30" }, "2026-10-01")).toEqual({ current: 4, lastDay: "2026-10-01" });
  });
  it("resets after a gap", () => {
    expect(nextStreak({ current: 9, lastDay: "2026-09-20" }, "2026-09-24")).toEqual({ current: 1, lastDay: "2026-09-24" });
  });
  it("keeps the streak if the clock goes backwards", () => {
    const s = { current: 4, lastDay: "2026-09-24" };
    expect(nextStreak(s, "2026-09-22")).toEqual(s);
  });
});

describe("displayStreak", () => {
  it("shows the streak while it is alive and 0 once broken", () => {
    expect(displayStreak({ current: 4, lastDay: "2026-09-24" }, "2026-09-24")).toBe(4);
    expect(displayStreak({ current: 4, lastDay: "2026-09-23" }, "2026-09-24")).toBe(4);
    expect(displayStreak({ current: 4, lastDay: "2026-09-21" }, "2026-09-24")).toBe(0);
    expect(displayStreak({ current: 0, lastDay: null }, "2026-09-24")).toBe(0);
  });
});

describe("applyEnroll", () => {
  it("adds once", () => {
    const s = applyEnroll(applyEnroll(emptyState(), "c"), "c");
    expect(s.enrolled).toEqual(["c"]);
  });
});

describe("applyCompleteLesson", () => {
  const now = new Date(2026, 8, 24, 10);
  it("marks done, keeps best score and first completion time, bumps streak", () => {
    let s = applyCompleteLesson(emptyState(), "c", "a", 50, now);
    expect(s.lessons[lessonKey("c", "a")]).toEqual({ done: true, score: 50, completedAt: now.toISOString() });
    expect(s.streak).toEqual({ current: 1, lastDay: "2026-09-24" });
    const later = new Date(2026, 8, 25, 10);
    s = applyCompleteLesson(s, "c", "a", 30, later);
    expect(s.lessons["c/a"]).toEqual({ done: true, score: 50, completedAt: now.toISOString() });
    expect(s.streak.current).toBe(2);
  });
  it("keeps a previous score when the new one is null", () => {
    let s = applyCompleteLesson(emptyState(), "c", "a", 80, now);
    s = applyCompleteLesson(s, "c", "a", null, now);
    expect(s.lessons["c/a"].score).toBe(80);
  });
});

describe("courseProgress", () => {
  it("counts done lessons and finds the next one in order", () => {
    const s = applyCompleteLesson(emptyState(), "c", "a", null, new Date());
    const p = courseProgress(course, s);
    expect(p).toMatchObject({ done: 1, total: 3, percent: 33 });
    expect(p.nextLesson?.slug).toBe("b");
  });
  it("reports 100% and no next lesson when finished", () => {
    let s = emptyState();
    for (const l of ["a", "b", "c"]) s = applyCompleteLesson(s, "c", l, null, new Date());
    expect(courseProgress(course, s)).toMatchObject({ done: 3, total: 3, percent: 100, nextLesson: null });
  });
});

describe("lastCompletedAt", () => {
  it("returns the latest completion among the course lessons", () => {
    let s = applyCompleteLesson(emptyState(), "c", "a", null, new Date("2026-09-20T10:00:00Z"));
    s = applyCompleteLesson(s, "c", "c", null, new Date("2026-09-22T10:00:00Z"));
    s = applyCompleteLesson(s, "other", "x", null, new Date("2026-09-30T10:00:00Z"));
    expect(lastCompletedAt(course, s)).toBe("2026-09-22T10:00:00.000Z");
    expect(lastCompletedAt(course, emptyState())).toBeNull();
  });
});

describe("applyLearnerName / applyPlacement", () => {
  it("trims names and clears empty ones", () => {
    expect(applyLearnerName(emptyState(), "  Lan  ").learnerName).toBe("Lan");
    expect(applyLearnerName(emptyState(), "   ").learnerName).toBeNull();
  });
  it("stores the placement result", () => {
    const now = new Date("2026-09-24T10:00:00Z");
    expect(applyPlacement(emptyState(), "B1", 65, now).placement).toEqual({ level: "B1", score: 65, takenAt: now.toISOString() });
  });
});
```

- [ ] **Step 2: Chạy test để thấy fail**

Run: `npm test -- src/lib/progress-core.test.ts`
Expected: FAIL, không tìm thấy module `./progress-core`.

- [ ] **Step 3: Viết progress-core.ts**

Create `src/lib/progress-core.ts`:

```ts
import type { Course, Lesson, Level } from "@/content/types";

export const STORAGE_KEY = "ce:progress:v1";

export interface LessonRecord { done: boolean; score: number | null; completedAt: string }
export interface Streak { current: number; lastDay: string | null }
export interface ProgressState {
  version: 1;
  learnerName: string | null;
  enrolled: string[];
  lessons: Record<string, LessonRecord>;
  streak: Streak;
  placement: { level: Level; score: number; takenAt: string } | null;
}
export interface CourseProgress { done: number; total: number; percent: number; nextLesson: Lesson | null }

export function emptyState(): ProgressState {
  return {
    version: 1,
    learnerName: null,
    enrolled: [],
    lessons: {},
    streak: { current: 0, lastDay: null },
    placement: null,
  };
}

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

export function parseState(raw: string | null): ProgressState {
  if (!raw) return emptyState();
  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch {
    return emptyState();
  }
  if (!isRecord(data) || data.version !== 1) return emptyState();
  const base = emptyState();
  const streak = data.streak;
  const placement = data.placement;
  return {
    version: 1,
    learnerName: typeof data.learnerName === "string" ? data.learnerName : null,
    enrolled: Array.isArray(data.enrolled) ? data.enrolled.filter((s): s is string => typeof s === "string") : [],
    lessons: isRecord(data.lessons) ? (data.lessons as Record<string, LessonRecord>) : {},
    streak:
      isRecord(streak) && typeof streak.current === "number"
        ? { current: streak.current, lastDay: typeof streak.lastDay === "string" ? streak.lastDay : null }
        : base.streak,
    placement:
      isRecord(placement) && typeof placement.level === "string" && typeof placement.score === "number"
        ? (placement as ProgressState["placement"])
        : null,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

export function todayKey(d: Date = new Date()): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function dayNumber(key: string): number {
  const [y, m, d] = key.split("-").map(Number);
  return Date.UTC(y, m - 1, d) / 86_400_000;
}

export function nextStreak(streak: Streak, today: string): Streak {
  if (streak.lastDay === null) return { current: 1, lastDay: today };
  const diff = dayNumber(today) - dayNumber(streak.lastDay);
  if (diff <= 0) return streak;
  if (diff === 1) return { current: streak.current + 1, lastDay: today };
  return { current: 1, lastDay: today };
}

export function displayStreak(streak: Streak, today: string): number {
  if (streak.lastDay === null) return 0;
  const diff = dayNumber(today) - dayNumber(streak.lastDay);
  return diff <= 1 ? streak.current : 0;
}

export function lessonKey(courseSlug: string, lessonSlug: string): string {
  return `${courseSlug}/${lessonSlug}`;
}

export function courseProgress(course: Course, state: ProgressState): CourseProgress {
  const lessons = course.modules.flatMap((m) => m.lessons);
  const isDone = (l: Lesson) => state.lessons[lessonKey(course.slug, l.slug)]?.done === true;
  const done = lessons.filter(isDone).length;
  const total = lessons.length;
  return {
    done,
    total,
    percent: total === 0 ? 0 : Math.round((done / total) * 100),
    nextLesson: lessons.find((l) => !isDone(l)) ?? null,
  };
}

export function lastCompletedAt(course: Course, state: ProgressState): string | null {
  let latest: string | null = null;
  for (const m of course.modules) {
    for (const l of m.lessons) {
      const rec = state.lessons[lessonKey(course.slug, l.slug)];
      if (rec?.done && (latest === null || rec.completedAt > latest)) latest = rec.completedAt;
    }
  }
  return latest;
}

export function applyEnroll(state: ProgressState, courseSlug: string): ProgressState {
  if (state.enrolled.includes(courseSlug)) return state;
  return { ...state, enrolled: [...state.enrolled, courseSlug] };
}

export function applyCompleteLesson(
  state: ProgressState,
  courseSlug: string,
  lessonSlug: string,
  score: number | null,
  now: Date,
): ProgressState {
  const key = lessonKey(courseSlug, lessonSlug);
  const prev = state.lessons[key];
  const best =
    score === null ? (prev?.score ?? null) : prev?.score != null ? Math.max(prev.score, score) : score;
  return {
    ...state,
    lessons: {
      ...state.lessons,
      [key]: { done: true, score: best, completedAt: prev?.done ? prev.completedAt : now.toISOString() },
    },
    streak: nextStreak(state.streak, todayKey(now)),
  };
}

export function applyLearnerName(state: ProgressState, name: string): ProgressState {
  const trimmed = name.trim();
  return { ...state, learnerName: trimmed === "" ? null : trimmed };
}

export function applyPlacement(state: ProgressState, level: Level, score: number, now: Date): ProgressState {
  return { ...state, placement: { level, score, takenAt: now.toISOString() } };
}
```

- [ ] **Step 4: Chạy test để thấy pass**

Run: `npm test -- src/lib/progress-core.test.ts`
Expected: PASS.

- [ ] **Step 5: Viết store phía client**

Create `src/lib/progress.ts`:

```ts
"use client";

import { useSyncExternalStore } from "react";
import type { Level } from "@/content/types";
import {
  STORAGE_KEY,
  applyCompleteLesson,
  applyEnroll,
  applyLearnerName,
  applyPlacement,
  emptyState,
  parseState,
  type ProgressState,
} from "./progress-core";

let cache: ProgressState | null = null;
let persistent = true;
const listeners = new Set<() => void>();
const SERVER_STATE = emptyState();

function read(): ProgressState {
  if (cache) return cache;
  try {
    cache = parseState(window.localStorage.getItem(STORAGE_KEY));
  } catch {
    persistent = false;
    cache = emptyState();
  }
  return cache;
}

function write(next: ProgressState) {
  cache = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    persistent = false;
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      cache = null;
      listener();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

const noopSubscribe = () => () => {};

export function useProgress() {
  const state = useSyncExternalStore(subscribe, read, () => SERVER_STATE);
  const ready = useSyncExternalStore(noopSubscribe, () => true, () => false);
  return { state, ready, persistent };
}

export const progress = {
  enroll(courseSlug: string) {
    write(applyEnroll(read(), courseSlug));
  },
  completeLesson(courseSlug: string, lessonSlug: string, score: number | null): ProgressState {
    const next = applyCompleteLesson(read(), courseSlug, lessonSlug, score, new Date());
    write(next);
    return next;
  },
  setLearnerName(name: string) {
    write(applyLearnerName(read(), name));
  },
  savePlacement(level: Level, score: number) {
    write(applyPlacement(read(), level, score, new Date()));
  },
};
```

- [ ] **Step 6: Kiểm tra kiểu và lint**

Run: `npx tsc --noEmit && npx eslint src/lib`
Expected: không có lỗi.

- [ ] **Step 7: Commit**

```bash
git add src/lib/progress-core.ts src/lib/progress-core.test.ts src/lib/progress.ts
git commit -m "feat: learner progress store with streaks"
```

---

### Task 3: Kiểm tra trình độ (chấm điểm + câu hỏi) và định dạng

**Files:**
- Create: `src/lib/placement.ts`, `src/lib/placement.test.ts`, `src/content/placement.ts`, `src/lib/format.ts`, `src/lib/format.test.ts`

**Interfaces:**
- Consumes: `PlacementQuestion`, `PlacementLevel`, `Level` (Task 1), `percentScore` (Task 1).
- Produces: `PLACEMENT_LEVELS: PlacementLevel[]`, `scorePlacement(questions, answers: Record<string, number>): PlacementResult` với `PlacementResult = { level: PlacementLevel; score: number; perLevel: Record<PlacementLevel, { correct: number; total: number }> }`. `PLACEMENT_QUESTIONS: PlacementQuestion[]`. `formatVnd(n: number): string`, `formatDateVi(iso: string): string`, `certificateCode(courseSlug: string, name: string, completedAt: string): string`.

- [ ] **Step 1: Viết test (phải fail)**

Create `src/lib/placement.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import type { PlacementQuestion } from "@/content/types";
import { PLACEMENT_QUESTIONS } from "@/content/placement";
import { scorePlacement } from "./placement";

const q = (id: string, level: PlacementQuestion["level"]): PlacementQuestion => ({
  id, level, skill: "grammar", prompt: id, options: ["a", "b"], answer: 0,
});
const questions = [
  q("a1", "A1"), q("a2", "A1"),
  q("b1", "A2"), q("b2", "A2"),
  q("c1", "B1"), q("c2", "B1"),
  q("d1", "B2"), q("d2", "B2"),
];
const answer = (ids: string[]) => Object.fromEntries(questions.map((x) => [x.id, ids.includes(x.id) ? 0 : 1]));

describe("scorePlacement", () => {
  it("falls back to A1 when nothing is right", () => {
    const r = scorePlacement(questions, {});
    expect(r.level).toBe("A1");
    expect(r.score).toBe(0);
  });
  it("picks the highest level passed with every lower level passed (>= 60%)", () => {
    const r = scorePlacement(questions, answer(["a1", "a2", "b1", "b2", "c1", "c2", "d1"]));
    expect(r.level).toBe("B1"); // B2 is 1/2 = 50%
    expect(r.perLevel.B2).toEqual({ correct: 1, total: 2 });
  });
  it("does not skip a failed lower level", () => {
    const r = scorePlacement(questions, answer(["a1", "a2", "c1", "c2", "d1", "d2"]));
    expect(r.level).toBe("A1");
  });
  it("reports B2 when everything is right", () => {
    const r = scorePlacement(questions, answer(questions.map((x) => x.id)));
    expect(r).toMatchObject({ level: "B2", score: 100 });
  });
});

describe("PLACEMENT_QUESTIONS", () => {
  it("has 5 questions per level, unique ids, valid answers, audio for listening", () => {
    expect(PLACEMENT_QUESTIONS).toHaveLength(20);
    for (const level of ["A1", "A2", "B1", "B2"]) {
      expect(PLACEMENT_QUESTIONS.filter((x) => x.level === level)).toHaveLength(5);
    }
    expect(new Set(PLACEMENT_QUESTIONS.map((x) => x.id)).size).toBe(20);
    for (const x of PLACEMENT_QUESTIONS) {
      expect(x.answer).toBeGreaterThanOrEqual(0);
      expect(x.answer).toBeLessThan(x.options.length);
      if (x.skill === "listening") expect(x.audioText).toBeTruthy();
    }
  });
});
```

Create `src/lib/format.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { certificateCode, formatDateVi, formatVnd } from "./format";

describe("formatVnd", () => {
  it("uses Vietnamese grouping and the đ sign", () => {
    expect(formatVnd(1290000)).toBe("1.290.000đ");
    expect(formatVnd(0)).toBe("0đ");
  });
});

describe("formatDateVi", () => {
  it("formats as dd/mm/yyyy", () => {
    expect(formatDateVi("2026-09-24T12:00:00.000Z")).toBe("24/09/2026");
  });
});

describe("certificateCode", () => {
  it("is deterministic and well-formed", () => {
    const a = certificateCode("giao-tiep-a1", "Lan", "2026-09-24T12:00:00.000Z");
    expect(a).toMatch(/^CE-GIAO-TIEP-A1-[0-9A-Z]{6}$/);
    expect(certificateCode("giao-tiep-a1", "Lan", "2026-09-24T12:00:00.000Z")).toBe(a);
    expect(certificateCode("giao-tiep-a1", "Minh", "2026-09-24T12:00:00.000Z")).not.toBe(a);
  });
});
```

- [ ] **Step 2: Chạy test để thấy fail**

Run: `npm test -- src/lib/placement.test.ts src/lib/format.test.ts`
Expected: FAIL, không tìm thấy module.

- [ ] **Step 3: Viết placement.ts, dữ liệu câu hỏi và format.ts**

Create `src/lib/placement.ts`:

```ts
import type { PlacementLevel, PlacementQuestion } from "@/content/types";
import { percentScore } from "./scoring";

export const PLACEMENT_LEVELS: PlacementLevel[] = ["A1", "A2", "B1", "B2"];

export interface PlacementResult {
  level: PlacementLevel;
  score: number;
  perLevel: Record<PlacementLevel, { correct: number; total: number }>;
}

export function scorePlacement(questions: PlacementQuestion[], answers: Record<string, number>): PlacementResult {
  const perLevel = Object.fromEntries(
    PLACEMENT_LEVELS.map((l) => [l, { correct: 0, total: 0 }]),
  ) as PlacementResult["perLevel"];
  let correct = 0;
  for (const q of questions) {
    perLevel[q.level].total++;
    if (answers[q.id] === q.answer) {
      perLevel[q.level].correct++;
      correct++;
    }
  }
  let level: PlacementLevel = "A1";
  for (const l of PLACEMENT_LEVELS) {
    const { correct: c, total } = perLevel[l];
    if (total > 0 && c / total >= 0.6) level = l;
    else break;
  }
  return { level, score: percentScore(correct, questions.length) ?? 0, perLevel };
}
```

Create `src/content/placement.ts`:

```ts
import type { PlacementQuestion } from "./types";

export const PLACEMENT_QUESTIONS: PlacementQuestion[] = [
  { id: "p01", level: "A1", skill: "vocab", prompt: "“Apple” nghĩa là gì?", options: ["Quả táo", "Quả cam", "Quả chuối", "Quả nho"], answer: 0 },
  { id: "p02", level: "A1", skill: "grammar", prompt: "She ___ a teacher.", options: ["am", "is", "are", "be"], answer: 1 },
  { id: "p03", level: "A1", skill: "grammar", prompt: "___ are you from?", options: ["What", "Where", "Who", "When"], answer: 1 },
  { id: "p04", level: "A1", skill: "listening", prompt: "Bạn nghe thấy câu nào?", audioText: "I have two cats.", options: ["Tôi có hai con mèo", "Tôi có hai con chó", "Tôi thích mèo", "Tôi có ba con mèo"], answer: 0 },
  { id: "p05", level: "A1", skill: "vocab", prompt: "Ngày ngay sau thứ Hai (Monday) là:", options: ["Sunday", "Wednesday", "Tuesday", "Friday"], answer: 2 },

  { id: "p06", level: "A2", skill: "grammar", prompt: "Yesterday I ___ to the cinema.", options: ["go", "goes", "went", "going"], answer: 2 },
  { id: "p07", level: "A2", skill: "grammar", prompt: "This bag is ___ than that one.", options: ["cheap", "cheaper", "cheapest", "more cheap"], answer: 1 },
  { id: "p08", level: "A2", skill: "vocab", prompt: "“Borrow” nghĩa là:", options: ["Cho mượn", "Mượn", "Mua", "Trả lại"], answer: 1 },
  { id: "p09", level: "A2", skill: "listening", prompt: "Tàu chạy lúc mấy giờ?", audioText: "The train leaves at half past seven.", options: ["7:00", "7:15", "7:30", "6:30"], answer: 2 },
  { id: "p10", level: "A2", skill: "grammar", prompt: "There isn't ___ milk in the fridge.", options: ["some", "any", "many", "a"], answer: 1 },

  { id: "p11", level: "B1", skill: "grammar", prompt: "I've lived here ___ 2019.", options: ["for", "since", "from", "in"], answer: 1 },
  { id: "p12", level: "B1", skill: "grammar", prompt: "If it rains tomorrow, we ___ at home.", options: ["stay", "will stay", "stayed", "would stay"], answer: 1 },
  { id: "p13", level: "B1", skill: "vocab", prompt: "Từ gần nghĩa nhất với “reliable”:", options: ["dependable", "expensive", "famous", "careful"], answer: 0 },
  { id: "p14", level: "B1", skill: "listening", prompt: "Người nói muốn gì?", audioText: "Sorry, I can't make it tonight. Can we reschedule for Friday?", options: ["Hủy hẳn cuộc hẹn", "Dời cuộc hẹn sang thứ Sáu", "Đến sớm hơn", "Mời thêm người"], answer: 1 },
  { id: "p15", level: "B1", skill: "grammar", prompt: "The report ___ by the manager yesterday.", options: ["wrote", "was written", "has written", "is writing"], answer: 1 },

  { id: "p16", level: "B2", skill: "grammar", prompt: "I wish I ___ more time to travel.", options: ["have", "had", "will have", "am having"], answer: 1 },
  { id: "p17", level: "B2", skill: "grammar", prompt: "Hardly ___ the meeting started when the power went out.", options: ["had", "has", "did", "was"], answer: 0 },
  { id: "p18", level: "B2", skill: "vocab", prompt: "“To postpone” gần nghĩa nhất với:", options: ["to cancel", "to delay", "to arrange", "to attend"], answer: 1 },
  { id: "p19", level: "B2", skill: "listening", prompt: "Điều gì đã xảy ra?", audioText: "Despite the heavy traffic, she arrived just in time for the interview.", options: ["Cô ấy đến muộn", "Cô ấy đến vừa kịp", "Cô ấy hủy phỏng vấn", "Cô ấy đi tàu"], answer: 1 },
  { id: "p20", level: "B2", skill: "grammar", prompt: "He denied ___ the window.", options: ["break", "to break", "breaking", "broke"], answer: 2 },
];
```

Create `src/lib/format.ts`:

```ts
export function formatVnd(amount: number): string {
  return `${new Intl.NumberFormat("vi-VN").format(amount)}đ`;
}

export function formatDateVi(iso: string): string {
  return new Date(iso).toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" });
}

export function certificateCode(courseSlug: string, name: string, completedAt: string): string {
  let h = 5381;
  for (const ch of `${courseSlug}|${name}|${completedAt}`) h = ((h << 5) + h + ch.charCodeAt(0)) | 0;
  const hash = (h >>> 0).toString(36).toUpperCase().padStart(6, "0").slice(-6);
  return `CE-${courseSlug.toUpperCase()}-${hash}`;
}
```

- [ ] **Step 4: Chạy test để thấy pass**

Run: `npm test -- src/lib/placement.test.ts src/lib/format.test.ts`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/lib/placement.ts src/lib/placement.test.ts src/content/placement.ts src/lib/format.ts src/lib/format.test.ts
git commit -m "feat: placement scoring, questions and formatters"
```

---

### Task 4: Dữ liệu khóa học và lớp lấy dữ liệu

**Files:**
- Create: `src/content/builders.ts`, `src/content/courses/giao-tiep-a1.ts`, `src/content/courses/ielts.ts`, `src/content/courses/toeic.ts`, `src/content/courses/tre-em.ts`, `src/content/index.ts`, `src/lib/course-utils.ts`, `src/lib/course-utils.test.ts`, `src/lib/content.ts`, `src/lib/content.test.ts`

**Interfaces:**
- Consumes: kiểu từ Task 1, `PLACEMENT_QUESTIONS` từ Task 3.
- Produces (course-utils.ts, thuần): `CourseFilter = { goal?: Goal; level?: Level }`, `filterCourses(courses: Course[], filter: CourseFilter): Course[]`, `isGoal(v: string | null): v is Goal`, `isLevel(v: string | null): v is Level`, `LessonRef = { module: Module; lesson: Lesson }`, `flattenLessons(course: Course): LessonRef[]`, `suggestCourseSlug(level: Level): string`.
- Produces (content.ts): `getCourses(filter?: CourseFilter): Promise<Course[]>`, `getCourse(slug: string): Promise<Course | null>`, `LessonContext = { course: Course; module: Module; lesson: Lesson; index: number; total: number; prev: { slug: string; title: string } | null; next: { slug: string; title: string } | null }`, `getLesson(courseSlug, lessonSlug): Promise<LessonContext | null>`, `getAllLessonParams(): Promise<{ course: string; lesson: string }[]>`, `getPlacementTest(): Promise<PlacementQuestion[]>`.
- Produces (content/index.ts): `COURSES: Course[]` theo thứ tự `giao-tiep-a1`, `ielts`, `toeic`, `tre-em`.

- [ ] **Step 1: Viết test (phải fail)**

Create `src/lib/course-utils.test.ts`:

```ts
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
    expect(flat[0].lesson.slug).toBe("chao-hoi");
    expect(flat[0].module.id).toBe("m1");
  });
});

describe("suggestCourseSlug", () => {
  it("maps levels to a course", () => {
    expect(suggestCourseSlug("A1")).toBe("giao-tiep-a1");
    expect(suggestCourseSlug("A2")).toBe("giao-tiep-a1");
    expect(suggestCourseSlug("B1")).toBe("toeic");
    expect(suggestCourseSlug("B2")).toBe("ielts");
  });
});
```

Create `src/lib/content.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { COURSES } from "@/content";
import { getAllLessonParams, getCourse, getCourses, getLesson } from "./content";

describe("content accessors", () => {
  it("finds courses and returns null for unknown slugs", async () => {
    expect((await getCourse("giao-tiep-a1"))?.title).toBeTruthy();
    expect(await getCourse("nope")).toBeNull();
    expect(await getCourses({ goal: "toeic" })).toHaveLength(1);
  });
  it("builds lesson context with prev/next across modules", async () => {
    const first = await getLesson("giao-tiep-a1", "chao-hoi");
    expect(first).toMatchObject({ index: 0, prev: null });
    expect(first?.next?.slug).toBe("gioi-thieu-ban-than");
    const crossing = await getLesson("giao-tiep-a1", "gia-dinh");
    expect(crossing?.prev?.slug).toBe("so-dem");
    expect(crossing?.module.id).toBe("m2");
    const last = await getLesson("giao-tiep-a1", "mua-sam");
    expect(last?.next).toBeNull();
    expect(last?.index).toBe((last?.total ?? 0) - 1);
    expect(await getLesson("giao-tiep-a1", "nope")).toBeNull();
    expect(await getLesson("nope", "chao-hoi")).toBeNull();
  });
  it("lists every lesson for static params", async () => {
    const params = await getAllLessonParams();
    const total = COURSES.reduce((n, c) => n + c.modules.reduce((k, m) => k + m.lessons.length, 0), 0);
    expect(params).toHaveLength(total);
  });
});

describe("content integrity", () => {
  it("has unique course slugs and lesson slugs per course", () => {
    expect(new Set(COURSES.map((c) => c.slug)).size).toBe(COURSES.length);
    for (const c of COURSES) {
      const slugs = c.modules.flatMap((m) => m.lessons.map((l) => l.slug));
      expect(new Set(slugs).size).toBe(slugs.length);
      expect(slugs).not.toContain("hoan-thanh");
    }
  });
  it("has at least one lesson in every course and a free lesson in open courses", () => {
    for (const c of COURSES) {
      const lessons = c.modules.flatMap((m) => m.lessons);
      expect(lessons.length).toBeGreaterThan(0);
      if (c.status === "open") {
        expect(lessons.some((l) => l.free)).toBe(true);
        expect(lessons.every((l) => l.steps.length > 0)).toBe(true);
      }
    }
  });
  it("has valid vocab, exercises and speaking data", () => {
    for (const c of COURSES) {
      for (const l of c.modules.flatMap((m) => m.lessons)) {
        const ids = new Set<string>();
        for (const s of l.steps) {
          if (s.type === "vocab") {
            for (const w of s.words) {
              expect(w.stress, `${l.slug}/${w.word}`).toBeGreaterThanOrEqual(0);
              expect(w.stress, `${l.slug}/${w.word}`).toBeLessThan(w.syllables.length);
            }
          }
          if (s.type === "exercise") {
            for (const e of s.items) {
              expect(ids.has(e.id), e.id).toBe(false);
              ids.add(e.id);
              if (e.kind === "multiple-choice" || e.kind === "listen-choose") {
                expect(e.answer).toBeLessThan(e.options.length);
              }
              if (e.kind === "fill-blank") {
                expect(e.prompt.split("___")).toHaveLength(2);
                expect(e.answers.length).toBeGreaterThan(0);
              }
              if (e.kind === "reorder") expect(e.words.length).toBeGreaterThan(1);
            }
          }
          if (s.type === "speaking") expect(s.sentences.length).toBeGreaterThan(0);
        }
      }
    }
  });
});
```

- [ ] **Step 2: Chạy test để thấy fail**

Run: `npm test -- src/lib/course-utils.test.ts src/lib/content.test.ts`
Expected: FAIL, không tìm thấy `@/content`.

- [ ] **Step 3: Viết hàm tạo nhanh**

Create `src/content/builders.ts`:

```ts
import type {
  FillBlankExercise,
  ListenChooseExercise,
  MultipleChoiceExercise,
  ReorderExercise,
  VocabWord,
} from "./types";

/** `syllables` written as "comf|ta|ble" */
export function word(
  w: string, ipa: string, meaning: string, example: string, syllables: string, stress: number, tip?: string,
): VocabWord {
  return { word: w, ipa, meaning, example, syllables: syllables.split("|"), stress, ...(tip ? { tip } : {}) };
}

export function mc(id: string, prompt: string, options: string[], answer: number, explain?: string): MultipleChoiceExercise {
  return { kind: "multiple-choice", id, prompt, options, answer, ...(explain ? { explain } : {}) };
}

export function fill(id: string, prompt: string, answers: string[], explain?: string): FillBlankExercise {
  return { kind: "fill-blank", id, prompt, answers, ...(explain ? { explain } : {}) };
}

export function reorder(id: string, sentence: string, explain?: string): ReorderExercise {
  return {
    kind: "reorder",
    id,
    prompt: "Sắp xếp các từ thành câu hoàn chỉnh",
    words: sentence.split(" "),
    ...(explain ? { explain } : {}),
  };
}

export function listen(id: string, audioText: string, options: string[], answer: number, explain?: string): ListenChooseExercise {
  return { kind: "listen-choose", id, audioText, options, answer, ...(explain ? { explain } : {}) };
}

export const say = (text: string, meaningVi: string) => ({ text, meaningVi });

/** Sample public video used until real lesson videos exist (YouTube IFrame API demo). */
export const SAMPLE_VIDEO_ID = "M7lc1UVf-VE";
```

- [ ] **Step 4: Viết khóa có nội dung đầy đủ**

Create `src/content/courses/giao-tiep-a1.ts`:

```ts
import { SAMPLE_VIDEO_ID, fill, listen, mc, reorder, say, word } from "../builders";
import type { Course, Lesson, Step } from "../types";

function lesson(slug: string, title: string, minutes: number, free: boolean, steps: Step[]): Lesson {
  return { slug, title, minutes, free, steps };
}
const video = (title: string): Step => ({ type: "video", youtubeId: SAMPLE_VIDEO_ID, title });

export const giaoTiepA1: Course = {
  slug: "giao-tiep-a1",
  title: "Tiếng Anh giao tiếp cơ bản",
  level: "A1",
  goal: "giao-tiep",
  summary: "Cho người mất gốc và người đi làm muốn nói trôi chảy những tình huống hằng ngày.",
  outcomes: [
    "Chào hỏi, giới thiệu bản thân và gia đình",
    "Nói số, giờ và số điện thoại không nhầm",
    "Gọi món, mua sắm và hỏi giá",
    "Hỏi đường và hiểu người khác chỉ đường",
  ],
  audience: [
    "Người mất gốc hoặc đã quên gần hết kiến thức phổ thông",
    "Người đi làm cần nói tiếng Anh trong các tình huống đơn giản",
    "Người chuẩn bị đi du lịch nước ngoài",
  ],
  teacher: {
    name: "Cô Hà My",
    initials: "HM",
    bio: "8 năm dạy tiếng Anh giao tiếp cho người đi làm, chứng chỉ CELTA. Chuyên sửa phát âm cho người Việt.",
  },
  priceVnd: 1_290_000,
  durationWeeks: 12,
  rating: 4.9,
  reviews: [
    { name: "Minh Anh", role: "Nhân viên kế toán, Hà Nội", quote: "Mình mất gốc từ cấp 3. Sau 3 tháng mình đã tự gọi điện đặt phòng khách sạn khi đi Singapore." },
    { name: "Đức Long", role: "Kỹ sư phần mềm, Đà Nẵng", quote: "Bài học ngắn nên mình học được trên xe buýt. Phần luyện nói giúp mình bớt ngại hẳn." },
  ],
  faqs: [
    { q: "Mình mất gốc hoàn toàn thì học được không?", a: "Được. Khóa bắt đầu từ chào hỏi và phát âm cơ bản, mỗi bài chỉ khoảng 15 phút." },
    { q: "Mỗi tuần cần học bao nhiêu?", a: "Khoảng 4–5 bài ngắn và 1 buổi lớp nhóm với giáo viên." },
  ],
  status: "open",
  modules: [
    {
      id: "m1",
      title: "Chào hỏi và làm quen",
      lessons: [
        lesson("chao-hoi", "Chào hỏi mỗi ngày", 12, true, [
          video("Chào hỏi trong ngày"),
          { type: "vocab", words: [
            word("hello", "/həˈləʊ/", "xin chào", "Hello, I'm Lan.", "he|llo", 1),
            word("morning", "/ˈmɔː.nɪŋ/", "buổi sáng", "Good morning, everyone!", "mor|ning", 0),
            word("nice", "/naɪs/", "vui, dễ chịu", "Nice to meet you.", "nice", 0, "Kết thúc bằng âm /s/ rõ ràng, không đọc thành “nai”."),
            word("later", "/ˈleɪ.tər/", "sau, lát nữa", "See you later!", "la|ter", 0),
          ] },
          { type: "exercise", items: [
            mc("chao-hoi-1", "Buổi sáng gặp đồng nghiệp, bạn nói:", ["Good night", "Good morning", "Goodbye"], 1, "“Good night” chỉ dùng khi chào tạm biệt buổi tối hoặc đi ngủ."),
            fill("chao-hoi-2", "Nice to ___ you.", ["meet"]),
            reorder("chao-hoi-3", "See you later"),
            listen("chao-hoi-4", "How are you?", ["Tôi tên là Lan", "Bạn khỏe không?", "Hẹn gặp lại"], 1),
          ] },
          { type: "speaking", sentences: [
            say("Good morning, how are you?", "Chào buổi sáng, bạn khỏe không?"),
            say("Nice to meet you.", "Rất vui được gặp bạn."),
          ] },
        ]),
        lesson("gioi-thieu-ban-than", "Giới thiệu bản thân", 15, true, [
          video("Giới thiệu tên, quê quán và nghề nghiệp"),
          { type: "vocab", words: [
            word("name", "/neɪm/", "tên", "My name is Lan.", "name", 0),
            word("from", "/frɒm/", "từ, đến từ", "I'm from Vietnam.", "from", 0),
            word("student", "/ˈstjuː.dənt/", "sinh viên, học sinh", "I'm a student.", "stu|dent", 0, "Nhớ đọc âm /t/ cuối, không bỏ mất."),
            word("teacher", "/ˈtiː.tʃər/", "giáo viên", "She is a teacher.", "tea|cher", 0),
          ] },
          { type: "exercise", items: [
            mc("gioi-thieu-1", "Chọn câu đúng để nói tên mình:", ["My name Lan.", "My name is Lan.", "I name is Lan."], 1),
            fill("gioi-thieu-2", "I ___ from Vietnam.", ["am"], "Với “I” ta dùng “am”: I am = I'm."),
            reorder("gioi-thieu-3", "I am a student"),
            listen("gioi-thieu-4", "Where are you from?", ["Bạn tên là gì?", "Bạn đến từ đâu?", "Bạn làm nghề gì?"], 1),
          ] },
          { type: "speaking", sentences: [
            say("My name is Lan. I'm from Vietnam.", "Tên tôi là Lan. Tôi đến từ Việt Nam."),
            say("I'm a student.", "Tôi là sinh viên."),
          ] },
        ]),
        lesson("so-dem", "Số đếm và số điện thoại", 14, false, [
          video("Số đếm và cách đọc số điện thoại"),
          { type: "vocab", words: [
            word("three", "/θriː/", "số 3", "I have three sisters.", "three", 0, "Âm /θ/: đặt đầu lưỡi giữa hai hàm răng rồi thổi hơi."),
            word("thirteen", "/θɜːˈtiːn/", "số 13", "She is thirteen.", "thir|teen", 1, "Thirteen nhấn âm sau, thirty nhấn âm trước. Đây là cặp người Việt hay nghe nhầm."),
            word("thirty", "/ˈθɜː.ti/", "số 30", "It's thirty dollars.", "thir|ty", 0),
            word("number", "/ˈnʌm.bər/", "số", "What's your phone number?", "num|ber", 0),
          ] },
          { type: "exercise", items: [
            mc("so-dem-1", "Số 13 trong tiếng Anh là:", ["thirty", "thirteen", "three"], 1),
            listen("so-dem-2", "thirty", ["13", "30", "3"], 1, "Thirty nhấn vào âm đầu: THIR-ty."),
            fill("so-dem-3", "My phone ___ is 0912 345 678.", ["number"]),
            reorder("so-dem-4", "What is your phone number?"),
          ] },
          { type: "speaking", sentences: [
            say("My phone number is zero nine one two.", "Số điện thoại của tôi là 0912."),
            say("Thirteen, thirty.", "Mười ba, ba mươi."),
          ] },
        ]),
      ],
    },
    {
      id: "m2",
      title: "Cuộc sống hằng ngày",
      lessons: [
        lesson("gia-dinh", "Gia đình của tôi", 15, false, [
          video("Nói về các thành viên trong gia đình"),
          { type: "vocab", words: [
            word("mother", "/ˈmʌð.ər/", "mẹ", "My mother is a nurse.", "mo|ther", 0, "Âm /ð/ rung, đặt lưỡi giữa hai răng, không đọc thành “d”."),
            word("father", "/ˈfɑː.ðər/", "bố", "My father works in a bank.", "fa|ther", 0),
            word("brother", "/ˈbrʌð.ər/", "anh/em trai", "I have two brothers.", "bro|ther", 0),
            word("sister", "/ˈsɪs.tər/", "chị/em gái", "My sister is ten.", "sis|ter", 0),
          ] },
          { type: "exercise", items: [
            mc("gia-dinh-1", "“Chị gái của tôi” là:", ["my brother", "my sister", "my mother"], 1),
            fill("gia-dinh-2", "This ___ my father.", ["is"]),
            reorder("gia-dinh-3", "I have two brothers"),
            listen("gia-dinh-4", "She is my mother.", ["Cô ấy là mẹ tôi", "Cô ấy là chị tôi", "Cô ấy là bạn tôi"], 0),
          ] },
          { type: "speaking", sentences: [
            say("I have one sister and two brothers.", "Tôi có một chị gái và hai anh trai."),
            say("This is my family.", "Đây là gia đình tôi."),
          ] },
        ]),
        lesson("mot-ngay-cua-toi", "Một ngày của tôi", 16, false, [
          video("Kể về thói quen hằng ngày"),
          { type: "vocab", words: [
            word("breakfast", "/ˈbrek.fəst/", "bữa sáng", "I have breakfast at seven.", "break|fast", 0, "Chữ “ea” đọc là /e/, âm sau đọc rất nhẹ."),
            word("usually", "/ˈjuː.ʒu.ə.li/", "thường thường", "I usually walk to work.", "u|su|al|ly", 0),
            word("work", "/wɜːk/", "làm việc, chỗ làm", "I go to work by bus.", "work", 0),
            word("evening", "/ˈiːv.nɪŋ/", "buổi tối", "I read in the evening.", "eve|ning", 0, "Chỉ có 2 âm tiết, không đọc thành “e-ve-ning”."),
          ] },
          { type: "exercise", items: [
            mc("mot-ngay-1", "Chọn câu đúng:", ["She get up at 6.", "She gets up at 6.", "She getting up at 6."], 1, "Chủ ngữ là she/he/it thì động từ thêm -s."),
            fill("mot-ngay-2", "I usually ___ breakfast at 7.", ["have", "eat"]),
            reorder("mot-ngay-3", "I go to work by bus"),
            listen("mot-ngay-4", "I go to bed at eleven.", ["Tôi đi ngủ lúc 11 giờ", "Tôi đi làm lúc 11 giờ", "Tôi ăn tối lúc 11 giờ"], 0),
          ] },
          { type: "speaking", sentences: [
            say("I usually get up at six o'clock.", "Tôi thường dậy lúc 6 giờ."),
            say("I go to work by motorbike.", "Tôi đi làm bằng xe máy."),
          ] },
        ]),
        lesson("goi-mon", "Gọi món ở quán cà phê", 15, false, [
          video("Gọi đồ uống và hỏi giá"),
          { type: "vocab", words: [
            word("coffee", "/ˈkɒf.i/", "cà phê", "Can I have a coffee, please?", "cof|fee", 0, "Nhấn âm đầu: COF-fee, không nhấn âm sau như tiếng Pháp."),
            word("water", "/ˈwɔː.tər/", "nước", "A glass of water, please.", "wa|ter", 0),
            word("menu", "/ˈmen.juː/", "thực đơn", "Can I see the menu?", "me|nu", 0),
            word("please", "/pliːz/", "làm ơn", "Two teas, please.", "please", 0, "Kết thúc bằng âm /z/ rung nhẹ."),
          ] },
          { type: "exercise", items: [
            mc("goi-mon-1", "Cách gọi món lịch sự nhất:", ["Give me a coffee.", "I want coffee.", "Can I have a coffee, please?"], 2),
            fill("goi-mon-2", "How ___ is it?", ["much"], "“How much” dùng để hỏi giá tiền."),
            reorder("goi-mon-3", "Can I see the menu, please?"),
            listen("goi-mon-4", "That's forty thousand dong.", ["40.000 đồng", "14.000 đồng", "4.000 đồng"], 0),
          ] },
          { type: "speaking", sentences: [
            say("Can I have an iced coffee, please?", "Cho tôi một ly cà phê đá."),
            say("How much is it?", "Bao nhiêu tiền vậy?"),
          ] },
        ]),
      ],
    },
    {
      id: "m3",
      title: "Ra ngoài và đi lại",
      lessons: [
        lesson("hoi-duong", "Hỏi đường", 17, false, [
          video("Hỏi và chỉ đường"),
          { type: "vocab", words: [
            word("left", "/left/", "bên trái", "Turn left at the bank.", "left", 0),
            word("right", "/raɪt/", "bên phải", "It's on your right.", "right", 0),
            word("straight", "/streɪt/", "thẳng", "Go straight for 200 metres.", "straight", 0, "Chữ “gh” không đọc. Đọc như “streit”."),
            word("near", "/nɪər/", "gần", "Is it near here?", "near", 0),
          ] },
          { type: "exercise", items: [
            mc("hoi-duong-1", "“Đi thẳng” là:", ["Turn left", "Go straight", "Turn right"], 1),
            fill("hoi-duong-2", "The bank is ___ the hotel.", ["next to", "near"]),
            reorder("hoi-duong-3", "Excuse me, where is the station?"),
            listen("hoi-duong-4", "Turn right at the corner.", ["Rẽ phải ở góc đường", "Rẽ trái ở góc đường", "Đi thẳng qua góc đường"], 0),
          ] },
          { type: "speaking", sentences: [
            say("Excuse me, where is the bus station?", "Xin lỗi, bến xe buýt ở đâu?"),
            say("Go straight and turn left.", "Đi thẳng rồi rẽ trái."),
          ] },
        ]),
        lesson("mua-sam", "Đi mua sắm", 16, false, [
          video("Hỏi size, hỏi giá và thử đồ"),
          { type: "vocab", words: [
            word("shirt", "/ʃɜːt/", "áo sơ mi", "I like this shirt.", "shirt", 0),
            word("size", "/saɪz/", "cỡ, size", "What size are you?", "size", 0),
            word("expensive", "/ɪkˈspen.sɪv/", "đắt", "It's too expensive.", "ex|pen|sive", 1, "Nhấn âm giữa: ex-PEN-sive."),
            word("cheap", "/tʃiːp/", "rẻ", "This one is cheap.", "cheap", 0),
          ] },
          { type: "exercise", items: [
            mc("mua-sam-1", "“Cái này đắt quá” là:", ["It's too cheap.", "It's too expensive.", "It's very nice."], 1),
            fill("mua-sam-2", "Do you have this in a bigger ___?", ["size"]),
            reorder("mua-sam-3", "Can I try it on?"),
            listen("mua-sam-4", "It's on sale today.", ["Hôm nay đang giảm giá", "Hôm nay hết hàng", "Hôm nay đóng cửa"], 0),
          ] },
          { type: "speaking", sentences: [
            say("Can I try this shirt on?", "Tôi mặc thử áo này được không?"),
            say("Do you have a smaller size?", "Bạn có size nhỏ hơn không?"),
          ] },
        ]),
      ],
    },
  ],
};
```

- [ ] **Step 5: Viết 3 khóa "sắp ra mắt"**

Create `src/content/courses/ielts.ts`:

```ts
import type { Course } from "../types";

const soon = (slug: string, title: string, minutes: number) => ({ slug, title, minutes, free: false, steps: [] });

export const ielts: Course = {
  slug: "ielts",
  title: "Luyện thi IELTS 6.5+",
  level: "B1",
  goal: "ielts",
  summary: "Đủ 4 kỹ năng, chấm Writing và Speaking theo đúng tiêu chí của kỳ thi thật.",
  outcomes: [
    "Nắm cấu trúc đề và chiến lược làm từng phần",
    "Viết Task 1 và Task 2 đạt band 6.5",
    "Trả lời Speaking Part 2 trôi chảy trong 2 phút",
    "Tăng tốc độ đọc và nghe hiểu",
  ],
  audience: ["Người có trình độ B1 trở lên", "Sinh viên cần IELTS để du học hoặc xét tốt nghiệp"],
  teacher: { name: "Thầy Daniel Brooks", initials: "DB", bio: "Cựu giám khảo IELTS, 10 năm luyện thi tại Việt Nam." },
  priceVnd: 2_490_000,
  durationWeeks: 16,
  rating: 4.8,
  reviews: [{ name: "Ngọc Hân", role: "Sinh viên năm 3, Hà Nội", quote: "Được chấm Writing chi tiết từng tiêu chí nên mình biết chính xác phải sửa gì." }],
  faqs: [{ q: "Đầu vào cần trình độ nào?", a: "Khoảng B1. Bạn có thể làm bài kiểm tra trình độ miễn phí để biết." }],
  status: "soon",
  modules: [
    { id: "m1", title: "Làm quen với đề thi", lessons: [soon("cau-truc-de", "Cấu trúc đề IELTS", 20), soon("band-diem", "Cách tính band điểm", 15)] },
    { id: "m2", title: "Writing", lessons: [soon("task-1", "Writing Task 1: biểu đồ", 30), soon("task-2", "Writing Task 2: nghị luận", 35)] },
    { id: "m3", title: "Speaking", lessons: [soon("part-2", "Speaking Part 2", 25)] },
  ],
};
```

Create `src/content/courses/toeic.ts`:

```ts
import type { Course } from "../types";

const soon = (slug: string, title: string, minutes: number) => ({ slug, title, minutes, free: false, steps: [] });

export const toeic: Course = {
  slug: "toeic",
  title: "TOEIC 750+",
  level: "A2",
  goal: "toeic",
  summary: "Cho sinh viên sắp ra trường và người cần chứng chỉ để thăng tiến trong công việc.",
  outcomes: [
    "Nắm 7 phần của bài thi Listening và Reading",
    "Học từ vựng theo chủ đề công sở",
    "Làm quen bẫy thường gặp trong đề",
  ],
  audience: ["Người có điểm TOEIC thử từ 350 trở lên", "Sinh viên cần chuẩn đầu ra tiếng Anh"],
  teacher: { name: "Cô Thanh Tâm", initials: "TT", bio: "TOEIC 990, 6 năm luyện thi cho sinh viên và người đi làm." },
  priceVnd: 1_590_000,
  durationWeeks: 10,
  rating: 4.8,
  reviews: [{ name: "Quốc Huy", role: "Sinh viên năm 4, TP.HCM", quote: "Thi thử tăng từ 480 lên 785 sau một khóa." }],
  faqs: [{ q: "Khóa có luyện Speaking và Writing không?", a: "Khóa này tập trung vào Listening và Reading." }],
  status: "soon",
  modules: [
    { id: "m1", title: "Listening", lessons: [soon("part-1-2", "Part 1–2: tranh và hỏi đáp", 20), soon("part-3-4", "Part 3–4: hội thoại và bài nói", 25)] },
    { id: "m2", title: "Reading", lessons: [soon("part-5-6", "Part 5–6: ngữ pháp và từ vựng", 25), soon("part-7", "Part 7: đọc hiểu", 30)] },
  ],
};
```

Create `src/content/courses/tre-em.ts`:

```ts
import type { Course } from "../types";

const soon = (slug: string, title: string, minutes: number) => ({ slug, title, minutes, free: false, steps: [] });

export const treEm: Course = {
  slug: "tre-em",
  title: "Tiếng Anh cho trẻ 6–12 tuổi",
  level: "A1",
  goal: "tre-em",
  summary: "Học qua trò chơi, bài hát và truyện tranh, có báo cáo hằng tuần cho phụ huynh.",
  outcomes: ["Từ vựng về gia đình, trường học, con vật", "Nghe và hát theo bài hát tiếng Anh", "Tự tin nói câu ngắn"],
  audience: ["Trẻ từ 6 đến 12 tuổi", "Phụ huynh muốn con học tiếng Anh tại nhà"],
  teacher: { name: "Cô Mai Linh", initials: "ML", bio: "Giáo viên tiểu học, 7 năm dạy tiếng Anh cho trẻ em." },
  priceVnd: 990_000,
  durationWeeks: 36,
  rating: 4.9,
  reviews: [{ name: "Thu Trang", role: "Phụ huynh bé Bin, 8 tuổi", quote: "Con tự mở bài học mỗi tối mà không cần nhắc." }],
  faqs: [{ q: "Phụ huynh có cần ngồi cùng con không?", a: "Không bắt buộc. Bài học được thiết kế để trẻ tự học." }],
  status: "soon",
  modules: [
    { id: "m1", title: "Xin chào!", lessons: [soon("mau-sac", "Màu sắc quanh em", 10), soon("con-vat", "Những con vật đáng yêu", 10)] },
    { id: "m2", title: "Trường học của em", lessons: [soon("do-dung", "Đồ dùng học tập", 10)] },
  ],
};
```

Create `src/content/index.ts`:

```ts
import { giaoTiepA1 } from "./courses/giao-tiep-a1";
import { ielts } from "./courses/ielts";
import { toeic } from "./courses/toeic";
import { treEm } from "./courses/tre-em";
import type { Course } from "./types";

export const COURSES: Course[] = [giaoTiepA1, ielts, toeic, treEm];
```

- [ ] **Step 6: Viết course-utils.ts và content.ts**

Create `src/lib/course-utils.ts`:

```ts
import type { Course, Goal, Lesson, Level, Module } from "@/content/types";

export interface CourseFilter { goal?: Goal; level?: Level }
export interface LessonRef { module: Module; lesson: Lesson }

const GOALS: Goal[] = ["giao-tiep", "ielts", "toeic", "tre-em"];
const LEVELS: Level[] = ["A1", "A2", "B1", "B2", "C1"];

export const isGoal = (v: string | null): v is Goal => v !== null && (GOALS as string[]).includes(v);
export const isLevel = (v: string | null): v is Level => v !== null && (LEVELS as string[]).includes(v);

export function filterCourses(courses: Course[], filter: CourseFilter): Course[] {
  return courses.filter(
    (c) => (!filter.goal || c.goal === filter.goal) && (!filter.level || c.level === filter.level),
  );
}

export function flattenLessons(course: Course): LessonRef[] {
  return course.modules.flatMap((m) => m.lessons.map((lesson) => ({ module: m, lesson })));
}

export function suggestCourseSlug(level: Level): string {
  if (level === "A1" || level === "A2") return "giao-tiep-a1";
  if (level === "B1") return "toeic";
  return "ielts";
}
```

Create `src/lib/content.ts`:

```ts
import { COURSES } from "@/content";
import { PLACEMENT_QUESTIONS } from "@/content/placement";
import type { Course, Lesson, Module, PlacementQuestion } from "@/content/types";
import { filterCourses, flattenLessons, type CourseFilter } from "./course-utils";

// Data access layer. Swap these bodies for CMS calls later; keep the signatures.

export interface LessonContext {
  course: Course;
  module: Module;
  lesson: Lesson;
  index: number;
  total: number;
  prev: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
}

export async function getCourses(filter: CourseFilter = {}): Promise<Course[]> {
  return filterCourses(COURSES, filter);
}

export async function getCourse(slug: string): Promise<Course | null> {
  return COURSES.find((c) => c.slug === slug) ?? null;
}

export async function getLesson(courseSlug: string, lessonSlug: string): Promise<LessonContext | null> {
  const course = await getCourse(courseSlug);
  if (!course) return null;
  const flat = flattenLessons(course);
  const index = flat.findIndex((x) => x.lesson.slug === lessonSlug);
  if (index === -1) return null;
  const ref = (i: number) => (flat[i] ? { slug: flat[i].lesson.slug, title: flat[i].lesson.title } : null);
  return {
    course,
    module: flat[index].module,
    lesson: flat[index].lesson,
    index,
    total: flat.length,
    prev: ref(index - 1),
    next: ref(index + 1),
  };
}

export async function getAllLessonParams(): Promise<{ course: string; lesson: string }[]> {
  return COURSES.flatMap((c) => flattenLessons(c).map((x) => ({ course: c.slug, lesson: x.lesson.slug })));
}

export async function getPlacementTest(): Promise<PlacementQuestion[]> {
  return PLACEMENT_QUESTIONS;
}
```

- [ ] **Step 7: Chạy toàn bộ test**

Run: `npm test`
Expected: PASS toàn bộ file test (scoring, progress-core, placement, format, course-utils, content).

- [ ] **Step 8: Commit**

```bash
git add src/content src/lib/course-utils.ts src/lib/course-utils.test.ts src/lib/content.ts src/lib/content.test.ts
git commit -m "feat: course content and data access layer"
```

---

### Task 5: Tiện ích giọng nói và thẻ phát âm dùng chung

**Files:**
- Create: `src/lib/speech.ts`, `src/components/pronounce-card.tsx`
- Modify: `src/components/word-card.tsx` (viết lại toàn bộ)

**Interfaces:**
- Consumes: `VocabWord` (Task 1).
- Produces (speech.ts): `canSpeak(): boolean`, `speak(text: string, opts?: { rate?: number; onStart?: () => void; onEnd?: () => void }): void`, `stopSpeaking(): void`, `listenOnce(opts: { onResult: (text: string) => void; onError: (code: string) => void; onEnd?: () => void }): () => void`, `useSpeechSupport(): { tts: boolean; stt: boolean }`.
- Produces (pronounce-card.tsx): `PronounceCard({ word: VocabWord; label?: string; revealMeaning?: boolean; children?: ReactNode })`. Phần tử cha phải truyền `key={word.word}` để trạng thái được reset khi đổi từ.

- [ ] **Step 1: Viết speech.ts**

Create `src/lib/speech.ts`:

```ts
"use client";

import { useSyncExternalStore } from "react";

interface RecognitionLike {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  start(): void;
  abort(): void;
  onresult: ((e: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null;
  onerror: ((e: { error: string }) => void) | null;
  onend: (() => void) | null;
}
type RecognitionCtor = new () => RecognitionLike;

export function canSpeak(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

function getRecognitionCtor(): RecognitionCtor | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as { SpeechRecognition?: RecognitionCtor; webkitSpeechRecognition?: RecognitionCtor };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

export function speak(
  text: string,
  { rate = 0.9, onStart, onEnd }: { rate?: number; onStart?: () => void; onEnd?: () => void } = {},
) {
  if (!canSpeak()) return;
  const synth = window.speechSynthesis;
  synth.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  u.rate = rate;
  const voice = synth.getVoices().find((v) => v.lang.startsWith("en-US") || v.lang.startsWith("en-GB"));
  if (voice) u.voice = voice;
  u.onstart = () => onStart?.();
  u.onend = () => onEnd?.();
  u.onerror = () => onEnd?.();
  synth.speak(u);
}

export function stopSpeaking() {
  if (canSpeak()) window.speechSynthesis.cancel();
}

export function listenOnce({
  onResult,
  onError,
  onEnd,
}: {
  onResult: (text: string) => void;
  onError: (code: string) => void;
  onEnd?: () => void;
}): () => void {
  const Ctor = getRecognitionCtor();
  if (!Ctor) {
    onError("not-supported");
    onEnd?.();
    return () => {};
  }
  const rec = new Ctor();
  rec.lang = "en-US";
  rec.interimResults = false;
  rec.maxAlternatives = 1;
  rec.onresult = (e) => onResult(e.results[0]?.[0]?.transcript ?? "");
  rec.onerror = (e) => onError(e.error);
  rec.onend = () => onEnd?.();
  try {
    rec.start();
  } catch {
    onError("start-failed");
    onEnd?.();
  }
  return () => rec.abort();
}

const noopSubscribe = () => () => {};

export function useSpeechSupport() {
  const tts = useSyncExternalStore(noopSubscribe, canSpeak, () => true);
  const stt = useSyncExternalStore(noopSubscribe, () => getRecognitionCtor() !== null, () => true);
  return { tts, stt };
}
```

- [ ] **Step 2: Viết PronounceCard**

Create `src/components/pronounce-card.tsx`:

```tsx
"use client";

import { useState, type ReactNode } from "react";
import { Eye, Snail, Volume2 } from "lucide-react";
import type { VocabWord } from "@/content/types";
import { speak, useSpeechSupport } from "@/lib/speech";

export function PronounceCard({
  word,
  label,
  revealMeaning = false,
  children,
}: {
  word: VocabWord;
  label?: string;
  revealMeaning?: boolean;
  children?: ReactNode;
}) {
  const [speaking, setSpeaking] = useState(false);
  const [popKey, setPopKey] = useState(0);
  const [showMeaning, setShowMeaning] = useState(revealMeaning);
  const { tts } = useSpeechSupport();

  function play(rate: number) {
    speak(word.word, {
      rate,
      onStart: () => {
        setSpeaking(true);
        setPopKey((k) => k + 1);
      },
      onEnd: () => setSpeaking(false),
    });
  }

  return (
    <article className="clay card-in relative p-6 sm:p-8" aria-label={`Thẻ từ vựng: ${word.word}`}>
      <div className="flex items-center justify-between gap-4">
        {label && <p className="text-sm font-semibold text-ink-soft">{label}</p>}
        {showMeaning ? (
          <span className="ml-auto rounded-full bg-leaf-soft px-3 py-1 text-sm font-semibold text-ink">
            {word.meaning}
          </span>
        ) : (
          <button
            type="button"
            onClick={() => setShowMeaning(true)}
            className="ml-auto inline-flex min-h-11 items-center gap-1.5 rounded-full border-2 border-ink bg-card px-3 text-sm font-semibold hover:bg-sun-soft"
          >
            <Eye className="size-4" aria-hidden />
            Xem nghĩa
          </button>
        )}
      </div>

      <div
        className="mt-6 flex flex-wrap items-end gap-x-1.5 gap-y-2"
        aria-label={`Trọng âm ở âm tiết ${word.stress + 1}`}
      >
        {word.syllables.map((s, i) => {
          const stressed = i === word.stress;
          return (
            <span
              key={`${popKey}-${i}`}
              className={
                stressed
                  ? `inline-block font-display text-5xl font-extrabold leading-none text-tangerine-deep sm:text-6xl ${speaking ? "stress-pop" : ""}`
                  : "font-display text-3xl font-semibold leading-none text-ink/45 sm:text-4xl"
              }
            >
              {stressed ? s.toUpperCase() : s}
            </span>
          );
        })}
      </div>

      <p className="mt-3 font-display text-xl text-ink-soft">
        <span className="font-semibold text-ink">{word.word}</span> {word.ipa}
      </p>

      {showMeaning && word.example && <p className="mt-3 text-lg italic">“{word.example}”</p>}

      {word.tip && (
        <p className="mt-5 rounded-2xl bg-sky px-4 py-3 text-[0.95rem] leading-relaxed text-ink">{word.tip}</p>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        <button type="button" className="btn btn-primary" onClick={() => play(0.9)} disabled={!tts} aria-pressed={speaking}>
          <Volume2 className="size-5" aria-hidden />
          {speaking ? "Đang đọc…" : "Nghe phát âm"}
        </button>
        <button type="button" className="btn btn-ghost" onClick={() => play(0.5)} disabled={!tts}>
          <Snail className="size-5" aria-hidden />
          Nghe chậm
        </button>
        {children}
      </div>

      {!tts && (
        <p className="mt-3 text-sm text-ink-soft">
          Trình duyệt này chưa hỗ trợ đọc to. Hãy thử Chrome, Edge hoặc Safari.
        </p>
      )}
    </article>
  );
}
```

- [ ] **Step 3: Viết lại WordCard trên trang chủ để dùng PronounceCard**

Replace the whole content of `src/components/word-card.tsx`:

```tsx
"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { word } from "@/content/builders";
import { PronounceCard } from "@/components/pronounce-card";
import { stopSpeaking } from "@/lib/speech";

const WORDS = [
  word("comfortable", "/ˈkʌmf.tə.bəl/", "thoải mái", "This sofa is really comfortable.", "comf|ta|ble", 0,
    "Người Việt hay đọc đủ 4 âm “com-for-ta-ble”. Người bản xứ chỉ đọc 3 âm."),
  word("photographer", "/fəˈtɒɡ.rə.fər/", "nhiếp ảnh gia", "My sister is a photographer.", "pho|tog|ra|pher", 1,
    "Trọng âm rơi vào âm thứ hai, khác với “PHO-to” mà bạn quen đọc."),
  word("Wednesday", "/ˈwenz.deɪ/", "thứ Tư", "See you on Wednesday.", "wenz|day", 0,
    "Chữ “d” đầu tiên không đọc. Chỉ có hai âm: WENZ-day."),
  word("vegetable", "/ˈvedʒ.tə.bəl/", "rau củ", "Eat more vegetables.", "vedge|ta|ble", 0,
    "Chữ “e” ở giữa bị nuốt mất, nên đọc 3 âm chứ không phải 4."),
];

export function WordCard() {
  const [index, setIndex] = useState(0);
  const current = WORDS[index];

  return (
    <div className="relative">
      <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 rotate-3 rounded-[1.5rem] border-[2.5px] border-ink bg-sun" />
      <div aria-hidden className="absolute inset-0 translate-x-1.5 translate-y-1.5 rotate-[1.5deg] rounded-[1.5rem] border-[2.5px] border-ink bg-grape-soft" />
      <PronounceCard key={current.word} word={current} label={`Từ hay đọc sai (${index + 1}/${WORDS.length})`} revealMeaning>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => {
            stopSpeaking();
            setIndex((i) => (i + 1) % WORDS.length);
          }}
        >
          Từ tiếp theo
          <ChevronRight className="size-5" aria-hidden />
        </button>
      </PronounceCard>
    </div>
  );
}
```

- [ ] **Step 4: Kiểm tra**

Run: `npx tsc --noEmit && npx eslint src && npm test`
Expected: không lỗi, test PASS.

Chạy `npm run dev`, mở `/`: thẻ phát âm ở trang chủ vẫn hiện nghĩa, câu ví dụ, mẹo, 3 nút. Bấm "Từ tiếp theo" thì đổi từ.

- [ ] **Step 5: Commit**

```bash
git add src/lib/speech.ts src/components/pronounce-card.tsx src/components/word-card.tsx
git commit -m "feat: shared speech helpers and pronunciation card"
```

---

### Task 6: Khung site dùng chung, UI cơ bản, trang chủ đọc dữ liệu chung, trang 404

**Files:**
- Create: `src/components/site/logo.tsx`, `src/components/site/site-header.tsx`, `src/components/site/site-footer.tsx`, `src/components/ui/progress-bar.tsx`, `src/components/ui/chip.tsx`, `src/components/ui/empty-state.tsx`, `src/components/ui/option-list.tsx`, `src/components/ui/persist-notice.tsx`, `src/components/course/goal-meta.ts`, `src/app/(site)/layout.tsx`, `src/app/not-found.tsx`
- Move + Modify: `src/app/page.tsx` → `src/app/(site)/page.tsx`

**Interfaces:**
- Consumes: `getCourses` (Task 4), `formatVnd` (Task 3), `useProgress` (Task 2).
- Produces: `Logo()`, `SiteHeader()`, `SiteFooter()`, `ProgressBar({ value: number; label: string; className?: string })`, `Chip({ href: string; active: boolean; children })`, `EmptyState({ title: string; body: string; children?: ReactNode })`, `OptionList({ name: string; options: string[]; value: number | null; onChange: (i: number) => void; disabled?: boolean; states?: OptionState[] })` với `OptionState = "idle" | "correct" | "wrong"`, `PersistNotice()`, `GOAL_META: Record<Goal, { label: string; tone: string; icon: LucideIcon }>`, `LEVEL_LABEL: Record<Level, string>`.

- [ ] **Step 1: Tạo Logo, header, footer**

Create `src/components/site/logo.tsx`:

```tsx
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 rounded-xl" aria-label="Crouse English, về trang chủ">
      <span className="grid size-10 place-items-center rounded-2xl border-[2.5px] border-ink bg-tangerine font-display text-xl font-extrabold shadow-[0_3px_0_0_var(--color-ink)]">
        Cr
      </span>
      <span className="font-display text-xl font-bold leading-none">
        Crouse <span className="text-ink-soft">English</span>
      </span>
    </Link>
  );
}
```

Create `src/components/site/site-header.tsx`:

```tsx
import Link from "next/link";
import { Logo } from "./logo";

const NAV = [
  { href: "/khoa-hoc", label: "Khóa học" },
  { href: "/kiem-tra-trinh-do", label: "Kiểm tra trình độ" },
  { href: "/cua-toi", label: "Khóa học của tôi" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b-[2.5px] border-ink bg-sky/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo />
        <ul className="hidden items-center gap-7 font-semibold md:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <Link className="hover:text-tangerine-deep" href={n.href}>{n.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <Link href="/cua-toi" className="font-semibold hover:text-tangerine-deep md:hidden">Của tôi</Link>
          <Link href="/hoc/giao-tiep-a1/chao-hoi" className="btn btn-primary min-h-11 px-4 text-base">
            Học thử miễn phí
          </Link>
        </div>
      </nav>
    </header>
  );
}
```

Create `src/components/site/site-footer.tsx`:

```tsx
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="border-t-[2.5px] border-ink bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Logo />
        <p className="text-ink-soft">Khóa học tiếng Anh giao tiếp, IELTS, TOEIC và tiếng Anh trẻ em.</p>
        <p className="text-sm text-ink-soft">© 2026 Crouse English</p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Tạo UI cơ bản và goal-meta**

Create `src/components/ui/progress-bar.tsx`:

```tsx
export function ProgressBar({ value, label, className = "" }: { value: number; label: string; className?: string }) {
  const v = Math.max(0, Math.min(100, Math.round(value)));
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={v}
      className={`h-3.5 w-full overflow-hidden rounded-full border-2 border-ink bg-card ${className}`}
    >
      <div className="h-full rounded-full bg-leaf transition-[width] duration-500" style={{ width: `${v}%` }} />
    </div>
  );
}
```

Create `src/components/ui/chip.tsx`:

```tsx
import Link from "next/link";
import type { ReactNode } from "react";

export function Chip({ href, active, children }: { href: string; active: boolean; children: ReactNode }) {
  return (
    <Link
      href={href}
      scroll={false}
      aria-current={active ? "true" : undefined}
      className={`inline-flex min-h-11 items-center rounded-full border-[2.5px] border-ink px-4 font-semibold transition-colors ${
        active ? "bg-ink text-card" : "bg-card hover:bg-sun-soft"
      }`}
    >
      {children}
    </Link>
  );
}
```

Create `src/components/ui/empty-state.tsx`:

```tsx
import type { ReactNode } from "react";

export function EmptyState({ title, body, children }: { title: string; body: string; children?: ReactNode }) {
  return (
    <div className="clay mx-auto max-w-2xl px-6 py-12 text-center sm:px-10">
      <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-lg text-lg text-ink-soft">{body}</p>
      {children && <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>}
    </div>
  );
}
```

Create `src/components/ui/option-list.tsx`:

```tsx
"use client";

export type OptionState = "idle" | "correct" | "wrong";

const STYLE: Record<OptionState | "selected", string> = {
  idle: "bg-card hover:bg-sun-soft",
  selected: "bg-sun-soft",
  correct: "bg-leaf-soft",
  wrong: "bg-tangerine/25",
};

export function OptionList({
  name,
  options,
  value,
  onChange,
  disabled = false,
  states,
}: {
  name: string;
  options: string[];
  value: number | null;
  onChange: (i: number) => void;
  disabled?: boolean;
  states?: OptionState[];
}) {
  return (
    <fieldset disabled={disabled} className="grid gap-3">
      <legend className="sr-only">Chọn một đáp án</legend>
      {options.map((o, i) => {
        const s = states?.[i] ?? "idle";
        const style = s !== "idle" ? STYLE[s] : value === i ? STYLE.selected : STYLE.idle;
        return (
          <label
            key={i}
            className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-2xl border-[2.5px] border-ink px-4 py-3 font-medium transition-colors has-[:disabled]:cursor-default ${style}`}
          >
            <input
              type="radio"
              name={name}
              value={i}
              checked={value === i}
              onChange={() => onChange(i)}
              className="size-5 shrink-0 accent-[var(--color-grape)]"
            />
            <span>{o}</span>
            {s === "correct" && <span className="ml-auto text-sm font-semibold">Đáp án đúng</span>}
            {s === "wrong" && <span className="ml-auto text-sm font-semibold">Bạn chọn</span>}
          </label>
        );
      })}
    </fieldset>
  );
}
```

Create `src/components/ui/persist-notice.tsx`:

```tsx
"use client";

import { useProgress } from "@/lib/progress";

export function PersistNotice() {
  const { ready, persistent } = useProgress();
  if (!ready || persistent) return null;
  return (
    <p role="status" className="rounded-2xl border-2 border-ink bg-sun-soft px-4 py-2 text-sm font-medium">
      Trình duyệt này không cho lưu dữ liệu, nên tiến độ sẽ mất khi bạn đóng trang.
    </p>
  );
}
```

Create `src/components/course/goal-meta.ts`:

```ts
import { BookOpenCheck, Briefcase, GraduationCap, Smile, type LucideIcon } from "lucide-react";
import type { Goal, Level } from "@/content/types";

export const GOAL_META: Record<Goal, { label: string; tone: string; icon: LucideIcon }> = {
  "giao-tiep": { label: "Giao tiếp", tone: "bg-sun", icon: Smile },
  ielts: { label: "IELTS", tone: "bg-grape-soft", icon: GraduationCap },
  toeic: { label: "TOEIC", tone: "bg-leaf-soft", icon: Briefcase },
  "tre-em": { label: "Trẻ em", tone: "bg-sky-deep", icon: BookOpenCheck },
};

export const LEVEL_LABEL: Record<Level, string> = {
  A1: "Mất gốc",
  A2: "Sơ cấp",
  B1: "Trung cấp",
  B2: "Trung cao",
  C1: "Thành thạo",
};
```

- [ ] **Step 3: Chuyển trang chủ vào nhóm route `(site)` và thêm layout**

```bash
mkdir -p "src/app/(site)"
git mv src/app/page.tsx "src/app/(site)/page.tsx"
```

(Nếu chưa commit gì thì dùng `mv` thay cho `git mv`.)

Create `src/app/(site)/layout.tsx`:

```tsx
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}
```

- [ ] **Step 4: Sửa `src/app/(site)/page.tsx`**

Thay 4 chỗ sau:

1. Xóa hàm `Logo`, khối `<header>…</header>` và khối `<footer>…</footer>`. Đổi `<main id="top">…</main>` thành `<>…</>`, vì layout đã bọc `<main>`.
2. Xóa hằng `COURSES`. Xóa các import icon `Briefcase`, `GraduationCap`, `Smile` (không còn dùng); giữ `BookOpenCheck`, `Check`, `Mic`, `Star`, `Users`. Thêm import:

```tsx
import Link from "next/link";
import { GOAL_META } from "@/components/course/goal-meta";
import { getCourses } from "@/lib/content";
import { formatVnd } from "@/lib/format";
```

3. Đổi `export default function Home()` thành:

```tsx
export default async function Home() {
  const courses = await getCourses();
```

   và thay toàn bộ phần `{COURSES.map((c) => { … })}` trong section `id="khoa-hoc"` bằng:

```tsx
{courses.map((c) => {
  const meta = GOAL_META[c.goal];
  const Icon = meta.icon;
  const featured = c.goal === "giao-tiep";
  const wide = c.goal === "tre-em";
  return (
    <article
      key={c.slug}
      className={`clay flex flex-col p-7 ${featured ? "md:col-span-2 md:row-span-2 md:p-10" : ""} ${wide ? "md:col-span-3 md:flex-row md:items-center md:gap-8" : ""} ${meta.tone}`}
    >
      <span className="grid size-12 shrink-0 place-items-center rounded-2xl border-[2.5px] border-ink bg-card">
        <Icon className="size-6" aria-hidden />
      </span>
      {featured && (
        <p className="mt-6 w-fit rounded-full bg-ink px-3 py-1 text-sm font-semibold text-card">Được chọn nhiều nhất</p>
      )}
      <div className={wide ? "md:flex-1" : ""}>
        <h3 className={`mt-4 font-display font-extrabold leading-tight ${featured ? "text-4xl sm:text-5xl" : "text-2xl"} ${wide ? "md:mt-0" : ""}`}>
          {c.title}
        </h3>
        <p className={`mt-3 text-ink ${featured ? "max-w-md text-lg" : ""}`}>{c.summary}</p>
        <p className="mt-2 text-sm font-semibold text-ink-soft">{c.durationWeeks} tuần, trình độ {c.level}</p>
      </div>
      {featured && (
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {c.outcomes.slice(0, 4).map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-2xl border-[2.5px] border-ink bg-card px-4 py-3 font-medium">
              <Check className="mt-0.5 size-5 shrink-0 text-leaf" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      )}
      <div className={`mt-auto flex flex-wrap items-center justify-between gap-3 pt-6 ${wide ? "md:mt-0 md:gap-6 md:pt-0" : ""}`}>
        <p className="font-display text-xl font-bold">{formatVnd(c.priceVnd)}/tháng</p>
        <Link href={`/khoa-hoc/${c.slug}`} className="btn btn-ghost min-h-11 px-4 text-base">Xem chi tiết</Link>
      </div>
    </article>
  );
})}
```

4. Đổi các liên kết:
   - hai nút hero: `href="#kiem-tra"` → `href="/kiem-tra-trinh-do"` (nút "Kiểm tra trình độ trong 10 phút"), `href="#khoa-hoc"` → `href="/khoa-hoc"` ("Xem các khóa học"). Dùng `<Link>` thay cho `<a>`;
   - nút "Bắt đầu bài kiểm tra" trong section `id="kiem-tra"`: `href="#"` → `<Link href="/kiem-tra-trinh-do">`.

- [ ] **Step 5: Thêm trang 404**

Create `src/app/not-found.tsx`:

```tsx
import Link from "next/link";
import { EmptyState } from "@/components/ui/empty-state";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center px-4 py-20 sm:px-6">
      <EmptyState title="Không tìm thấy trang này" body="Đường dẫn có thể đã thay đổi hoặc khóa học không còn nữa.">
        <Link href="/khoa-hoc" className="btn btn-primary">Xem các khóa học</Link>
        <Link href="/" className="btn btn-ghost">Về trang chủ</Link>
      </EmptyState>
    </main>
  );
}
```

- [ ] **Step 6: Kiểm tra**

Run: `npx tsc --noEmit && npx eslint src && npm run build`
Expected: build xong, route `/` là static.

Chạy `npm run dev`:
- mở `/`: header/footer vẫn hiện; 4 khóa lấy từ dữ liệu, giá "1.290.000đ/tháng"; "Xem chi tiết" trỏ tới `/khoa-hoc/giao-tiep-a1`;
- mở `/khong-co`: hiện trang 404 kiểu clay.

- [ ] **Step 7: Commit**

```bash
git add -A src
git commit -m "feat: shared site shell, UI primitives, data-driven homepage"
```

---

### Task 7: Trang danh sách khóa học `/khoa-hoc`

**Files:**
- Create: `src/components/course/course-card.tsx`, `src/components/course/course-catalog.tsx`, `src/app/(site)/khoa-hoc/page.tsx`

**Interfaces:**
- Consumes: `GOAL_META`, `LEVEL_LABEL`, `Chip` (Task 6); `filterCourses`, `isGoal`, `isLevel` (Task 4); `formatVnd` (Task 3); `getCourses` (Task 4).
- Produces: `CourseCard({ course: Course })`, `CourseGrid({ courses: Course[] })`, `CourseCatalog({ courses: Course[] })` (client, đọc `?muc-tieu=` và `?trinh-do=`).

- [ ] **Step 1: CourseCard**

Create `src/components/course/course-card.tsx`:

```tsx
import Link from "next/link";
import type { Course } from "@/content/types";
import { formatVnd } from "@/lib/format";
import { GOAL_META, LEVEL_LABEL } from "./goal-meta";

export function CourseCard({ course }: { course: Course }) {
  const meta = GOAL_META[course.goal];
  const Icon = meta.icon;
  return (
    <Link
      href={`/khoa-hoc/${course.slug}`}
      className={`clay flex flex-col p-6 transition-transform duration-200 hover:-translate-y-1 ${meta.tone}`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="grid size-12 place-items-center rounded-2xl border-[2.5px] border-ink bg-card">
          <Icon className="size-6" aria-hidden />
        </span>
        {course.status === "soon" && (
          <span className="rounded-full border-2 border-ink bg-card px-3 py-1 text-sm font-semibold">Sắp ra mắt</span>
        )}
      </div>
      <h3 className="mt-5 font-display text-2xl font-extrabold leading-tight">{course.title}</h3>
      <p className="mt-2 text-ink">{course.summary}</p>
      <p className="mt-3 text-sm font-semibold text-ink-soft">
        Trình độ {course.level} ({LEVEL_LABEL[course.level].toLowerCase()}), {course.durationWeeks} tuần
      </p>
      <p className="mt-auto pt-6 font-display text-xl font-bold">{formatVnd(course.priceVnd)}/tháng</p>
    </Link>
  );
}

export function CourseGrid({ courses }: { courses: Course[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((c) => (
        <CourseCard key={c.slug} course={c} />
      ))}
    </div>
  );
}
```

- [ ] **Step 2: CourseCatalog (lọc theo URL)**

Create `src/components/course/course-catalog.tsx`:

```tsx
"use client";

import { useSearchParams } from "next/navigation";
import type { Course, Goal, Level } from "@/content/types";
import { filterCourses, isGoal, isLevel } from "@/lib/course-utils";
import { Chip } from "@/components/ui/chip";
import { EmptyState } from "@/components/ui/empty-state";
import { CourseGrid } from "./course-card";
import { GOAL_META, LEVEL_LABEL } from "./goal-meta";

const GOALS = Object.keys(GOAL_META) as Goal[];
const LEVELS = Object.keys(LEVEL_LABEL) as Level[];

export function CourseCatalog({ courses }: { courses: Course[] }) {
  const params = useSearchParams();
  const goalParam = params.get("muc-tieu");
  const levelParam = params.get("trinh-do");
  const goal = isGoal(goalParam) ? goalParam : undefined;
  const level = isLevel(levelParam) ? levelParam : undefined;
  const shown = filterCourses(courses, { goal, level });

  function href(key: "muc-tieu" | "trinh-do", value: string | null) {
    const next = new URLSearchParams(params.toString());
    if (value === null) next.delete(key);
    else next.set(key, value);
    const qs = next.toString();
    return qs ? `/khoa-hoc?${qs}` : "/khoa-hoc";
  }

  return (
    <>
      <div className="mt-10 space-y-4">
        <div className="flex flex-wrap items-center gap-3" role="group" aria-label="Lọc theo mục tiêu">
          <span className="w-24 font-semibold text-ink-soft">Mục tiêu</span>
          <Chip href={href("muc-tieu", null)} active={!goal}>Tất cả</Chip>
          {GOALS.map((g) => (
            <Chip key={g} href={href("muc-tieu", g)} active={goal === g}>{GOAL_META[g].label}</Chip>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3" role="group" aria-label="Lọc theo trình độ">
          <span className="w-24 font-semibold text-ink-soft">Trình độ</span>
          <Chip href={href("trinh-do", null)} active={!level}>Tất cả</Chip>
          {LEVELS.map((l) => (
            <Chip key={l} href={href("trinh-do", l)} active={level === l}>{l}</Chip>
          ))}
        </div>
      </div>
      <p className="mt-8 text-ink-soft" role="status">{shown.length} khóa học</p>
      <div className="mt-4">
        {shown.length > 0 ? (
          <CourseGrid courses={shown} />
        ) : (
          <EmptyState title="Chưa có khóa học phù hợp" body="Thử bỏ bớt một bộ lọc để xem thêm khóa học." />
        )}
      </div>
    </>
  );
}
```

- [ ] **Step 3: Trang**

Create `src/app/(site)/khoa-hoc/page.tsx`:

```tsx
import { Suspense } from "react";
import type { Metadata } from "next";
import { CourseGrid } from "@/components/course/course-card";
import { CourseCatalog } from "@/components/course/course-catalog";
import { getCourses } from "@/lib/content";

export const metadata: Metadata = {
  title: "Khóa học tiếng Anh | Crouse English",
  description: "Khóa học tiếng Anh giao tiếp, IELTS, TOEIC và tiếng Anh cho trẻ em.",
};

export default async function CoursesPage() {
  const courses = await getCourses();
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-5xl font-extrabold leading-tight">Khóa học tiếng Anh</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-soft">
        Chọn khóa theo mục tiêu và trình độ. Chưa biết mình ở đâu? Làm bài kiểm tra trình độ 10 phút.
      </p>
      <Suspense fallback={<div className="mt-10"><CourseGrid courses={courses} /></div>}>
        <CourseCatalog courses={courses} />
      </Suspense>
    </div>
  );
}
```

- [ ] **Step 4: Kiểm tra**

Run: `npx eslint src && npm run build`
Expected: build thành công, `/khoa-hoc` static.

Chạy dev, mở `/khoa-hoc?muc-tieu=ielts`: chỉ còn 1 thẻ, chip "IELTS" tô đậm. Mở `/khoa-hoc?muc-tieu=ielts&trinh-do=A1`: hiện "Chưa có khóa học phù hợp". Mở `/khoa-hoc?muc-tieu=xyz`: hiện tất cả khóa.

- [ ] **Step 5: Commit**

```bash
git add src/components/course "src/app/(site)/khoa-hoc/page.tsx"
git commit -m "feat: course catalog with URL filters"
```

---

### Task 8: Trang chi tiết khóa học `/khoa-hoc/[slug]`

**Files:**
- Create: `src/components/course/syllabus.tsx`, `src/components/course/enroll-panel.tsx`, `src/app/(site)/khoa-hoc/[slug]/page.tsx`

**Interfaces:**
- Consumes: `useProgress`, `progress.enroll` (Task 2); `courseProgress`, `lessonKey` (Task 2); `flattenLessons` (Task 4); `getCourse`, `getCourses` (Task 4); `formatVnd` (Task 3); `ProgressBar` (Task 6); `GOAL_META`, `LEVEL_LABEL` (Task 6).
- Produces: `Syllabus({ course: Course })` (client), `EnrollPanel({ course: Course })` (client).

- [ ] **Step 1: Syllabus**

Create `src/components/course/syllabus.tsx`:

```tsx
"use client";

import Link from "next/link";
import { CheckCircle2, Circle, Lock } from "lucide-react";
import type { Course } from "@/content/types";
import { lessonKey } from "@/lib/progress-core";
import { useProgress } from "@/lib/progress";

export function Syllabus({ course }: { course: Course }) {
  const { state } = useProgress();
  const enrolled = state.enrolled.includes(course.slug);
  const open = course.status === "open";

  return (
    <div className="space-y-4">
      {course.modules.map((m, mi) => (
        <details key={m.id} open={mi === 0} className="clay group p-0 [box-shadow:var(--shadow-clay-sm)]">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[1.5rem] px-6 py-5">
            <span>
              <span className="block text-sm font-semibold text-ink-soft">Chương {mi + 1}</span>
              <span className="block font-display text-xl font-bold">{m.title}</span>
            </span>
            <span className="text-sm font-semibold text-ink-soft">{m.lessons.length} bài</span>
          </summary>
          <ul className="border-t-2 border-ink/15 px-3 py-3">
            {m.lessons.map((l) => {
              const done = state.lessons[lessonKey(course.slug, l.slug)]?.done;
              const accessible = open && (l.free || enrolled);
              const Icon = done ? CheckCircle2 : accessible ? Circle : Lock;
              const row = (
                <>
                  <Icon className={`size-5 shrink-0 ${done ? "text-leaf" : "text-ink-soft"}`} aria-hidden />
                  <span className="flex-1 font-medium">{l.title}</span>
                  {open && l.free && !enrolled && (
                    <span className="rounded-full bg-leaf-soft px-2.5 py-0.5 text-sm font-semibold">Học thử</span>
                  )}
                  <span className="text-sm text-ink-soft">{l.minutes} phút</span>
                  {done && <span className="sr-only">(đã học)</span>}
                  {!accessible && <span className="sr-only">(cần đăng ký)</span>}
                </>
              );
              return (
                <li key={l.slug}>
                  {accessible ? (
                    <Link href={`/hoc/${course.slug}/${l.slug}`} className="flex min-h-12 items-center gap-3 rounded-xl px-3 hover:bg-sun-soft">
                      {row}
                    </Link>
                  ) : (
                    <div className="flex min-h-12 items-center gap-3 px-3 text-ink-soft">{row}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </details>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: EnrollPanel**

Create `src/components/course/enroll-panel.tsx`:

```tsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Course } from "@/content/types";
import { flattenLessons } from "@/lib/course-utils";
import { formatVnd } from "@/lib/format";
import { courseProgress } from "@/lib/progress-core";
import { progress, useProgress } from "@/lib/progress";
import { ProgressBar } from "@/components/ui/progress-bar";

export function EnrollPanel({ course }: { course: Course }) {
  const { state, ready } = useProgress();
  const router = useRouter();
  const [notified, setNotified] = useState(false);
  const lessons = flattenLessons(course);
  const firstFree = lessons.find((x) => x.lesson.free)?.lesson ?? null;
  const enrolled = state.enrolled.includes(course.slug);
  const p = courseProgress(course, state);

  const price = (
    <>
      <p className="font-display text-3xl font-extrabold">
        {formatVnd(course.priceVnd)}
        <span className="text-lg font-semibold text-ink-soft">/tháng</span>
      </p>
      <p className="mt-1 text-ink-soft">{course.durationWeeks} tuần, {lessons.length} bài học</p>
    </>
  );

  if (!ready) return <div className="clay h-56 animate-pulse bg-card" aria-hidden />;

  if (course.status === "soon") {
    return (
      <div className="clay p-6">
        {price}
        <button type="button" className="btn btn-primary mt-6 w-full" onClick={() => setNotified(true)} disabled={notified}>
          Báo tôi khi mở lớp
        </button>
        {notified && <p role="status" className="mt-3 font-medium">Đã ghi nhận yêu cầu của bạn.</p>}
      </div>
    );
  }

  if (enrolled) {
    return (
      <div className="clay p-6">
        <p className="font-display text-xl font-bold">Bạn đang học khóa này</p>
        <ProgressBar value={p.percent} label={`Tiến độ ${p.percent}%`} className="mt-4" />
        <p className="mt-2 text-ink-soft">Đã học {p.done}/{p.total} bài</p>
        {p.nextLesson ? (
          <Link href={`/hoc/${course.slug}/${p.nextLesson.slug}`} className="btn btn-primary mt-6 w-full">
            Học tiếp: {p.nextLesson.title}
          </Link>
        ) : (
          <Link href={`/hoc/${course.slug}/hoan-thanh`} className="btn btn-primary mt-6 w-full">Xem chứng chỉ</Link>
        )}
      </div>
    );
  }

  return (
    <div className="clay p-6">
      {price}
      <button
        type="button"
        className="btn btn-primary mt-6 w-full"
        onClick={() => {
          progress.enroll(course.slug);
          router.push(`/hoc/${course.slug}/${lessons[0].lesson.slug}`);
        }}
      >
        Đăng ký khóa học
      </button>
      {firstFree && (
        <Link href={`/hoc/${course.slug}/${firstFree.slug}`} className="btn btn-ghost mt-3 w-full">
          Học thử: {firstFree.title}
        </Link>
      )}
    </div>
  );
}
```

- [ ] **Step 3: Trang chi tiết**

Create `src/app/(site)/khoa-hoc/[slug]/page.tsx`:

```tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, Star } from "lucide-react";
import { EnrollPanel } from "@/components/course/enroll-panel";
import { GOAL_META, LEVEL_LABEL } from "@/components/course/goal-meta";
import { Syllabus } from "@/components/course/syllabus";
import { getCourse, getCourses } from "@/lib/content";

export async function generateStaticParams() {
  return (await getCourses()).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(props: PageProps<"/khoa-hoc/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const course = await getCourse(slug);
  return course ? { title: `${course.title} | Crouse English`, description: course.summary } : {};
}

export default async function CoursePage(props: PageProps<"/khoa-hoc/[slug]">) {
  const { slug } = await props.params;
  const course = await getCourse(slug);
  if (!course) notFound();
  const meta = GOAL_META[course.goal];

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,1fr)_22rem]">
      <header>
        <p className="flex flex-wrap gap-2">
          <span className={`rounded-full border-2 border-ink px-3 py-1 text-sm font-semibold ${meta.tone}`}>{meta.label}</span>
          <span className="rounded-full border-2 border-ink bg-card px-3 py-1 text-sm font-semibold">
            Trình độ {course.level}, {LEVEL_LABEL[course.level].toLowerCase()}
          </span>
          {course.status === "soon" && (
            <span className="rounded-full border-2 border-ink bg-sun px-3 py-1 text-sm font-semibold">Sắp ra mắt</span>
          )}
        </p>
        <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.05] sm:text-6xl">{course.title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-soft">{course.summary}</p>
        <p className="mt-4 flex items-center gap-2 font-semibold">
          <Star className="size-5 fill-current text-tangerine-deep" aria-hidden />
          {course.rating.toLocaleString("vi-VN")} điểm đánh giá
        </p>
      </header>

      <aside className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <div className="lg:sticky lg:top-24">
          <EnrollPanel course={course} />
        </div>
      </aside>

      <div className="space-y-16">
        <section aria-labelledby="outcomes">
          <h2 id="outcomes" className="font-display text-3xl font-extrabold">Học xong bạn làm được</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {course.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-3 rounded-2xl border-[2.5px] border-ink bg-card px-4 py-3 font-medium">
                <Check className="mt-0.5 size-5 shrink-0 text-leaf" aria-hidden />
                {o}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="audience">
          <h2 id="audience" className="font-display text-3xl font-extrabold">Khóa học dành cho</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            {course.audience.map((a) => <li key={a}>{a}</li>)}
          </ul>
        </section>

        <section aria-labelledby="syllabus">
          <h2 id="syllabus" className="font-display text-3xl font-extrabold">Giáo trình</h2>
          <div className="mt-6"><Syllabus course={course} /></div>
        </section>

        <section aria-labelledby="teacher" className="clay flex flex-col gap-5 p-6 sm:flex-row sm:items-center">
          <span className="grid size-20 shrink-0 place-items-center rounded-full border-[2.5px] border-ink bg-sun font-display text-2xl font-extrabold">
            {course.teacher.initials}
          </span>
          <div>
            <h2 id="teacher" className="font-display text-2xl font-extrabold">{course.teacher.name}</h2>
            <p className="mt-1 text-ink-soft">{course.teacher.bio}</p>
          </div>
        </section>

        <section aria-labelledby="reviews">
          <h2 id="reviews" className="font-display text-3xl font-extrabold">Cảm nhận học viên</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {course.reviews.map((r) => (
              <figure key={r.name} className="clay p-6">
                <blockquote className="text-lg leading-relaxed">“{r.quote}”</blockquote>
                <figcaption className="mt-4">
                  <span className="block font-semibold">{r.name}</span>
                  <span className="block text-sm text-ink-soft">{r.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section aria-labelledby="faq">
          <h2 id="faq" className="font-display text-3xl font-extrabold">Câu hỏi thường gặp</h2>
          <div className="mt-6 space-y-4">
            {course.faqs.map((f) => (
              <details key={f.q} className="clay group p-0 [box-shadow:var(--shadow-clay-sm)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[1.5rem] px-6 py-5 font-display text-xl font-bold">
                  {f.q}
                  <span aria-hidden className="grid size-8 shrink-0 place-items-center rounded-full border-[2.5px] border-ink bg-sun text-lg transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <p className="px-6 pb-6 text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Kiểm tra**

Run: `npx eslint src && npm run build`
Expected: build tạo sẵn `/khoa-hoc/giao-tiep-a1`, `/khoa-hoc/ielts`, `/khoa-hoc/toeic`, `/khoa-hoc/tre-em`.

Chạy dev:
- `/khoa-hoc/giao-tiep-a1`: 2 bài đầu có nhãn "Học thử" và bấm được, các bài khác có ổ khóa;
- bấm "Đăng ký khóa học" thì chuyển sang `/hoc/giao-tiep-a1/chao-hoi` (tạm thời 404 cho tới Task 9). Quay lại, panel hiện "Bạn đang học khóa này" và mọi bài đều mở;
- `/khoa-hoc/ielts`: nút "Báo tôi khi mở lớp";
- `/khoa-hoc/abc`: 404.

- [ ] **Step 5: Commit**

```bash
git add src/components/course "src/app/(site)/khoa-hoc/[slug]"
git commit -m "feat: course detail page with syllabus and enrollment"
```

---

### Task 9: Khung trang học bài, mục lục, bước video và từ vựng

**Files:**
- Create: `src/app/hoc/layout.tsx`, `src/app/hoc/[course]/[lesson]/page.tsx`, `src/components/lesson/lesson-shell.tsx`, `src/components/lesson/lesson-sidebar.tsx`, `src/components/lesson/step-video.tsx`, `src/components/lesson/step-vocab.tsx`

**Interfaces:**
- Consumes: `LessonContext`, `getLesson`, `getAllLessonParams` (Task 4); `useProgress`, `progress` (Task 2); `courseProgress`, `displayStreak`, `todayKey`, `lessonKey`, `ProgressState` (Task 2); `PronounceCard` (Task 5); `stopSpeaking` (Task 5); `ProgressBar`, `EmptyState`, `PersistNotice` (Task 6).
- Produces: `LessonShell({ ctx: LessonContext })`, `LessonSidebar({ course: Course; currentSlug: string; state: ProgressState; enrolled: boolean; onNavigate?: () => void })`, `StepVideo({ step: VideoStep; done: boolean; onComplete: () => void })`, `StepVocab({ step: VocabStep; onComplete: () => void })`. Mọi component bước đều theo hợp đồng: `onComplete(result?: { score?: number })` được gọi khi học viên xong bước.
- Task 10 và 11 sẽ thay hai chỗ giữ tạm trong `LessonShell` (bước `exercise`, `speaking`) bằng `StepExercise` / `StepSpeaking`.

- [ ] **Step 1: Layout và route**

Create `src/app/hoc/layout.tsx`:

```tsx
import type { ReactNode } from "react";

export default function LearnLayout({ children }: { children: ReactNode }) {
  return <div className="flex min-h-full flex-1 flex-col">{children}</div>;
}
```

Create `src/app/hoc/[course]/[lesson]/page.tsx`:

```tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LessonShell } from "@/components/lesson/lesson-shell";
import { getAllLessonParams, getLesson } from "@/lib/content";

export async function generateStaticParams() {
  return getAllLessonParams();
}

export async function generateMetadata(props: PageProps<"/hoc/[course]/[lesson]">): Promise<Metadata> {
  const { course, lesson } = await props.params;
  const ctx = await getLesson(course, lesson);
  return ctx ? { title: `${ctx.lesson.title} | ${ctx.course.title}` } : {};
}

export default async function LessonPage(props: PageProps<"/hoc/[course]/[lesson]">) {
  const { course, lesson } = await props.params;
  const ctx = await getLesson(course, lesson);
  if (!ctx) notFound();
  return <LessonShell key={`${ctx.course.slug}/${ctx.lesson.slug}`} ctx={ctx} />;
}
```

- [ ] **Step 2: Mục lục**

Create `src/components/lesson/lesson-sidebar.tsx`:

```tsx
import Link from "next/link";
import { CheckCircle2, Circle, Lock, PlayCircle } from "lucide-react";
import type { Course } from "@/content/types";
import { lessonKey, type ProgressState } from "@/lib/progress-core";

export function LessonSidebar({
  course,
  currentSlug,
  state,
  enrolled,
  onNavigate,
}: {
  course: Course;
  currentSlug: string;
  state: ProgressState;
  enrolled: boolean;
  onNavigate?: () => void;
}) {
  return (
    <nav aria-label="Mục lục khóa học" className="space-y-6">
      {course.modules.map((m, mi) => (
        <div key={m.id}>
          <p className="text-sm font-semibold text-ink-soft">Chương {mi + 1}</p>
          <p className="font-display text-lg font-bold leading-tight">{m.title}</p>
          <ul className="mt-2 space-y-1">
            {m.lessons.map((l) => {
              const current = l.slug === currentSlug;
              const done = state.lessons[lessonKey(course.slug, l.slug)]?.done;
              const locked = !l.free && !enrolled;
              const Icon = current ? PlayCircle : done ? CheckCircle2 : locked ? Lock : Circle;
              return (
                <li key={l.slug}>
                  <Link
                    href={`/hoc/${course.slug}/${l.slug}`}
                    onClick={onNavigate}
                    aria-current={current ? "page" : undefined}
                    className={`flex min-h-11 items-center gap-2.5 rounded-xl px-2.5 text-[0.95rem] ${
                      current ? "border-2 border-ink bg-sun font-semibold" : "hover:bg-sun-soft"
                    } ${locked && !current ? "text-ink-soft" : ""}`}
                  >
                    <Icon className={`size-5 shrink-0 ${done && !current ? "text-leaf" : ""}`} aria-hidden />
                    <span className="flex-1">{l.title}</span>
                    {done && <span className="sr-only">(đã học)</span>}
                    {locked && <span className="sr-only">(cần đăng ký)</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
```

- [ ] **Step 3: Bước video và từ vựng**

Create `src/components/lesson/step-video.tsx`:

```tsx
"use client";

import { Check } from "lucide-react";
import type { VideoStep } from "@/content/types";

export function StepVideo({ step, done, onComplete }: { step: VideoStep; done: boolean; onComplete: () => void }) {
  return (
    <div>
      <div className="clay overflow-hidden p-0">
        <div className="aspect-video w-full bg-ink">
          <iframe
            className="size-full"
            src={`https://www.youtube-nocookie.com/embed/${step.youtubeId}?rel=0`}
            title={step.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-4">
        <button type="button" className="btn btn-ghost" onClick={onComplete} disabled={done}>
          {done && <Check className="size-5 text-leaf" aria-hidden />}
          Đã xem xong
        </button>
        <p className="text-ink-soft">{step.title}</p>
      </div>
    </div>
  );
}
```

Create `src/components/lesson/step-vocab.tsx`:

```tsx
"use client";

import { useState } from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import type { VocabStep } from "@/content/types";
import { PronounceCard } from "@/components/pronounce-card";
import { stopSpeaking } from "@/lib/speech";

export function StepVocab({ step, onComplete }: { step: VocabStep; onComplete: () => void }) {
  const [i, setI] = useState(0);
  const [finished, setFinished] = useState(false);
  const word = step.words[i];
  const last = i === step.words.length - 1;

  function go(k: number) {
    stopSpeaking();
    setI(k);
  }

  return (
    <div>
      <ul className="mb-6 flex flex-wrap gap-2" aria-label="Các từ trong bài">
        {step.words.map((w, k) => (
          <li key={w.word}>
            <button
              type="button"
              onClick={() => go(k)}
              aria-current={k === i ? "true" : undefined}
              className={`min-h-11 rounded-full border-2 border-ink px-4 font-semibold ${k === i ? "bg-ink text-card" : "bg-card hover:bg-sun-soft"}`}
            >
              {w.word}
            </button>
          </li>
        ))}
      </ul>

      <PronounceCard key={word.word} word={word} label={`Từ ${i + 1}/${step.words.length}`}>
        {i > 0 && (
          <button type="button" className="btn btn-ghost" onClick={() => go(i - 1)}>
            <ChevronLeft className="size-5" aria-hidden />
            Từ trước
          </button>
        )}
        {!last ? (
          <button type="button" className="btn btn-ghost" onClick={() => go(i + 1)}>
            Từ tiếp theo
            <ChevronRight className="size-5" aria-hidden />
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-ghost"
            disabled={finished}
            onClick={() => {
              setFinished(true);
              onComplete();
            }}
          >
            <Check className="size-5" aria-hidden />
            Đã học xong các từ
          </button>
        )}
      </PronounceCard>
    </div>
  );
}
```

- [ ] **Step 4: LessonShell**

Create `src/components/lesson/lesson-shell.tsx`:

```tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Flame, List, PartyPopper, X } from "lucide-react";
import type { Step } from "@/content/types";
import type { LessonContext } from "@/lib/content";
import { courseProgress, displayStreak, todayKey } from "@/lib/progress-core";
import { progress, useProgress } from "@/lib/progress";
import { EmptyState } from "@/components/ui/empty-state";
import { PersistNotice } from "@/components/ui/persist-notice";
import { ProgressBar } from "@/components/ui/progress-bar";
import { LessonSidebar } from "./lesson-sidebar";
import { StepVideo } from "./step-video";
import { StepVocab } from "./step-vocab";

const STEP_LABEL: Record<Step["type"], string> = {
  video: "Video",
  vocab: "Từ vựng",
  exercise: "Bài tập",
  speaking: "Luyện nói",
};
const STEP_HINT: Record<Step["type"], string> = {
  video: "Xem video rồi bấm “Đã xem xong” để tiếp tục.",
  vocab: "Xem hết các từ rồi bấm “Đã học xong các từ”.",
  exercise: "Làm hết các câu để tiếp tục.",
  speaking: "Luyện hết các câu, hoặc bỏ qua, để tiếp tục.",
};

export function LessonShell({ ctx }: { ctx: LessonContext }) {
  const { course, module: currentModule, lesson, index, total, next } = ctx;
  const { state, ready } = useProgress();
  const [stepIndex, setStepIndex] = useState(0);
  const [completed, setCompleted] = useState<boolean[]>(() => lesson.steps.map(() => false));
  const [exerciseScore, setExerciseScore] = useState<number | null>(null);
  const [finished, setFinished] = useState<{ score: number | null; courseDone: boolean } | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const enrolled = state.enrolled.includes(course.slug);
  const cp = courseProgress(course, state);
  const streak = displayStreak(state.streak, todayKey());

  function markComplete(i: number, result?: { score?: number }) {
    setCompleted((c) => c.map((v, k) => (k === i ? true : v)));
    if (result?.score !== undefined) setExerciseScore(result.score);
  }

  function finishLesson() {
    const nextState = progress.completeLesson(course.slug, lesson.slug, exerciseScore);
    setFinished({ score: exerciseScore, courseDone: courseProgress(course, nextState).percent === 100 });
  }

  function restart() {
    setFinished(null);
    setStepIndex(0);
    setCompleted(lesson.steps.map(() => false));
    setExerciseScore(null);
  }

  const sidebar = (onNavigate?: () => void) => (
    <LessonSidebar course={course} currentSlug={lesson.slug} state={state} enrolled={enrolled} onNavigate={onNavigate} />
  );

  function renderStep(step: Step, i: number) {
    const done = () => markComplete(i);
    switch (step.type) {
      case "video":
        return <StepVideo step={step} done={completed[i]} onComplete={done} />;
      case "vocab":
        return <StepVocab step={step} onComplete={done} />;
      case "exercise":
        // Replaced by <StepExercise> in Task 10
        return <button type="button" className="btn btn-ghost" onClick={done}>Bỏ qua (tạm)</button>;
      case "speaking":
        // Replaced by <StepSpeaking> in Task 11
        return <button type="button" className="btn btn-ghost" onClick={done}>Bỏ qua (tạm)</button>;
    }
  }

  function body() {
    if (!ready) return <div className="clay h-96 animate-pulse bg-card" aria-hidden />;

    if (course.status === "soon" || lesson.steps.length === 0) {
      return (
        <EmptyState title="Bài học này sắp ra mắt" body={`Khóa ${course.title} đang được hoàn thiện nội dung.`}>
          <Link href={`/khoa-hoc/${course.slug}`} className="btn btn-ghost">Về trang khóa học</Link>
        </EmptyState>
      );
    }

    if (!lesson.free && !enrolled) {
      return (
        <EmptyState
          title="Đăng ký để học bài này"
          body={`Bài “${lesson.title}” thuộc khóa ${course.title}. Bạn có thể học thử các bài miễn phí trước.`}
        >
          <button type="button" className="btn btn-primary" onClick={() => progress.enroll(course.slug)}>
            Đăng ký khóa học
          </button>
          <Link href={`/khoa-hoc/${course.slug}`} className="btn btn-ghost">Xem giáo trình</Link>
        </EmptyState>
      );
    }

    if (finished) {
      return (
        <div className="clay card-in mx-auto max-w-2xl px-6 py-12 text-center">
          <PartyPopper className="mx-auto size-12 text-tangerine-deep" aria-hidden />
          <h2 className="mt-4 font-display text-4xl font-extrabold">Xong bài {lesson.title}!</h2>
          {finished.score !== null && (
            <p className="mt-3 text-lg">Điểm bài tập: <strong>{finished.score}%</strong></p>
          )}
          <p className="mt-1 text-ink-soft">Chuỗi ngày học: {displayStreak(state.streak, todayKey())} ngày</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {finished.courseDone ? (
              <Link href={`/hoc/${course.slug}/hoan-thanh`} className="btn btn-primary">Nhận chứng chỉ</Link>
            ) : next ? (
              <Link href={`/hoc/${course.slug}/${next.slug}`} className="btn btn-primary">Bài tiếp theo: {next.title}</Link>
            ) : (
              <Link href={`/khoa-hoc/${course.slug}`} className="btn btn-primary">Về trang khóa học</Link>
            )}
            <button type="button" className="btn btn-ghost" onClick={restart}>Học lại bài này</button>
          </div>
        </div>
      );
    }

    const step = lesson.steps[stepIndex];
    const isLast = stepIndex === lesson.steps.length - 1;
    return (
      <>
        <ol className="mb-6 flex flex-wrap gap-2" aria-label="Các bước của bài">
          {lesson.steps.map((s, k) => {
            const reachable = k === 0 || completed[k - 1];
            return (
              <li key={k}>
                <button
                  type="button"
                  disabled={!reachable}
                  onClick={() => setStepIndex(k)}
                  aria-current={k === stepIndex ? "step" : undefined}
                  className={`inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-ink px-4 text-sm font-semibold disabled:opacity-50 ${
                    k === stepIndex ? "bg-ink text-card" : completed[k] ? "bg-leaf-soft" : "bg-card"
                  }`}
                >
                  {k + 1}. {STEP_LABEL[s.type]}
                </button>
              </li>
            );
          })}
        </ol>

        <div key={stepIndex}>{renderStep(step, stepIndex)}</div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t-2 border-ink/15 pt-6">
          <button type="button" className="btn btn-ghost" disabled={stepIndex === 0} onClick={() => setStepIndex(stepIndex - 1)}>
            Bước trước
          </button>
          <div className="flex flex-wrap items-center gap-4">
            {!completed[stepIndex] && <p className="text-sm text-ink-soft">{STEP_HINT[step.type]}</p>}
            <button
              type="button"
              className="btn btn-primary"
              disabled={!completed[stepIndex]}
              onClick={() => (isLast ? finishLesson() : setStepIndex(stepIndex + 1))}
            >
              {isLast ? "Hoàn thành bài học" : "Tiếp tục"}
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <header className="sticky top-0 z-30 border-b-[2.5px] border-ink bg-card">
        <div className="flex items-center gap-3 px-4 py-3 sm:px-6">
          <Link href={`/khoa-hoc/${course.slug}`} className="btn btn-ghost min-h-11 px-3 text-base" aria-label="Thoát bài học">
            <X className="size-5" aria-hidden />
            <span className="hidden sm:inline">Thoát</span>
          </Link>
          <button
            type="button"
            className="btn btn-ghost min-h-11 px-3 text-base lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="lesson-menu"
          >
            <List className="size-5" aria-hidden />
            Mục lục
          </button>
          <div className="min-w-0 flex-1">
            <p className="truncate font-display font-bold">{course.title}</p>
            <ProgressBar value={cp.percent} label={`Tiến độ khóa học ${cp.percent}%`} className="mt-1 max-w-xs" />
          </div>
          <p className="flex items-center gap-1 font-display text-lg font-bold" title="Chuỗi ngày học">
            <Flame className="size-5 text-tangerine-deep" aria-hidden />
            {ready ? streak : 0}
            <span className="sr-only"> ngày học liên tiếp</span>
          </p>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" role="dialog" aria-modal="true" aria-label="Mục lục khóa học">
          <button type="button" className="absolute inset-0 bg-ink/40" aria-label="Đóng mục lục" onClick={() => setMenuOpen(false)} />
          <div id="lesson-menu" className="absolute inset-y-0 left-0 w-[min(20rem,85vw)] overflow-y-auto border-r-[2.5px] border-ink bg-card p-5">
            <button type="button" className="btn btn-ghost mb-5 min-h-11 px-3 text-base" onClick={() => setMenuOpen(false)}>
              <X className="size-5" aria-hidden />
              Đóng
            </button>
            {sidebar(() => setMenuOpen(false))}
          </div>
        </div>
      )}

      <div className="mx-auto grid w-full max-w-7xl flex-1 gap-10 px-4 py-8 sm:px-6 lg:grid-cols-[17rem_minmax(0,1fr)]">
        <aside className="hidden lg:block">{sidebar()}</aside>
        <main className="min-w-0">
          <PersistNotice />
          <p className="mt-2 text-sm font-semibold text-ink-soft">
            {currentModule.title}, bài {index + 1}/{total}
          </p>
          <h1 className="mb-8 mt-1 font-display text-4xl font-extrabold leading-tight">{lesson.title}</h1>
          {body()}
        </main>
      </div>
    </>
  );
}
```

- [ ] **Step 5: Kiểm tra**

Run: `npx tsc --noEmit && npx eslint src && npm run build`
Expected: build tạo sẵn các trang `/hoc/giao-tiep-a1/*` và `/hoc/ielts/*`…

Chạy dev với localStorage trống (mở tab ẩn danh hoặc xóa khóa `ce:progress:v1` trong DevTools):
- `/hoc/giao-tiep-a1/chao-hoi` (bài học thử): các bước video → từ vựng → bài tập (tạm) → luyện nói (tạm); "Tiếp tục" bị tắt cho tới khi xong bước;
- bấm "Hoàn thành bài học": hiện màn hình chúc mừng, chuỗi ngày học = 1, nút "Bài tiếp theo";
- `/hoc/giao-tiep-a1/so-dem` khi chưa đăng ký: hiện màn hình "Đăng ký để học bài này"; bấm đăng ký thì bài hiện ra;
- `/hoc/ielts/cau-truc-de`: "Bài học này sắp ra mắt";
- ở khổ 390px, nút "Mục lục" mở ngăn trượt; phím Esc đóng được.

- [ ] **Step 6: Commit**

```bash
git add src/app/hoc src/components/lesson
git commit -m "feat: lesson player shell with sidebar, video and vocab steps"
```

---

### Task 10: Bài tập tương tác

**Files:**
- Create: `src/components/exercises/multiple-choice.tsx`, `src/components/exercises/listen-choose.tsx`, `src/components/exercises/fill-blank.tsx`, `src/components/exercises/reorder.tsx`, `src/components/lesson/step-exercise.tsx`
- Modify: `src/components/lesson/lesson-shell.tsx` (case `"exercise"`)

**Interfaces:**
- Consumes: `checkChoice`, `checkFillBlank`, `checkReorder`, `correctAnswerText`, `shuffleAvoidingAnswer`, `percentScore` (Task 1); `OptionList`, `OptionState` (Task 6); `speak`, `useSpeechSupport` (Task 5).
- Produces: component bài tập theo hợp đồng `{ item: X; locked: boolean; onAnswer: (correct: boolean) => void }`; `StepExercise({ step: ExerciseStep; onComplete: (result: { score: number }) => void })`.

- [ ] **Step 1: Trắc nghiệm và nghe chọn**

Create `src/components/exercises/multiple-choice.tsx`:

```tsx
"use client";

import { useState } from "react";
import type { MultipleChoiceExercise } from "@/content/types";
import { checkChoice } from "@/lib/scoring";
import { OptionList, type OptionState } from "@/components/ui/option-list";

export function choiceStates(options: string[], answer: number, choice: number | null, locked: boolean): OptionState[] | undefined {
  if (!locked) return undefined;
  return options.map((_, k) => (k === answer ? "correct" : k === choice ? "wrong" : "idle"));
}

export function MultipleChoice({
  item,
  locked,
  onAnswer,
}: {
  item: MultipleChoiceExercise;
  locked: boolean;
  onAnswer: (correct: boolean) => void;
}) {
  const [choice, setChoice] = useState<number | null>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (choice !== null) onAnswer(checkChoice(item.answer, choice));
      }}
    >
      <h3 className="mb-5 font-display text-2xl font-bold">{item.prompt}</h3>
      <OptionList
        name={item.id}
        options={item.options}
        value={choice}
        onChange={setChoice}
        disabled={locked}
        states={choiceStates(item.options, item.answer, choice, locked)}
      />
      {!locked && (
        <button type="submit" className="btn btn-primary mt-6" disabled={choice === null}>Kiểm tra</button>
      )}
    </form>
  );
}
```

Create `src/components/exercises/listen-choose.tsx`:

```tsx
"use client";

import { useState } from "react";
import { Snail, Volume2 } from "lucide-react";
import type { ListenChooseExercise } from "@/content/types";
import { checkChoice } from "@/lib/scoring";
import { speak, useSpeechSupport } from "@/lib/speech";
import { OptionList } from "@/components/ui/option-list";
import { choiceStates } from "./multiple-choice";

export function ListenChoose({
  item,
  locked,
  onAnswer,
}: {
  item: ListenChooseExercise;
  locked: boolean;
  onAnswer: (correct: boolean) => void;
}) {
  const [choice, setChoice] = useState<number | null>(null);
  const { tts } = useSpeechSupport();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (choice !== null) onAnswer(checkChoice(item.answer, choice));
      }}
    >
      <h3 className="font-display text-2xl font-bold">Nghe và chọn đáp án đúng</h3>
      <div className="mb-5 mt-4 flex flex-wrap gap-3">
        <button type="button" className="btn btn-primary" onClick={() => speak(item.audioText)} disabled={!tts}>
          <Volume2 className="size-5" aria-hidden />
          Nghe
        </button>
        <button type="button" className="btn btn-ghost" onClick={() => speak(item.audioText, { rate: 0.5 })} disabled={!tts}>
          <Snail className="size-5" aria-hidden />
          Nghe chậm
        </button>
      </div>
      {(!tts || locked) && (
        <p className="mb-5 rounded-2xl bg-sky px-4 py-3">
          {tts ? "Câu vừa nghe: " : "Trình duyệt không đọc to được. Câu gốc: "}
          <strong>{item.audioText}</strong>
        </p>
      )}
      <OptionList
        name={item.id}
        options={item.options}
        value={choice}
        onChange={setChoice}
        disabled={locked}
        states={choiceStates(item.options, item.answer, choice, locked)}
      />
      {!locked && (
        <button type="submit" className="btn btn-primary mt-6" disabled={choice === null}>Kiểm tra</button>
      )}
    </form>
  );
}
```

- [ ] **Step 2: Điền từ và sắp xếp câu**

Create `src/components/exercises/fill-blank.tsx`:

```tsx
"use client";

import { useState } from "react";
import type { FillBlankExercise } from "@/content/types";
import { checkFillBlank } from "@/lib/scoring";

export function FillBlank({
  item,
  locked,
  onAnswer,
}: {
  item: FillBlankExercise;
  locked: boolean;
  onAnswer: (correct: boolean) => void;
}) {
  const [text, setText] = useState("");
  const [before, after = ""] = item.prompt.split("___");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (text.trim()) onAnswer(checkFillBlank(item.answers, text));
      }}
    >
      <h3 className="mb-5 font-display text-2xl font-bold">Điền từ còn thiếu</h3>
      <p className="font-display text-2xl leading-relaxed">
        {before}
        <input
          aria-label="Từ còn thiếu"
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={locked}
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          className="mx-1 inline-block w-40 rounded-xl border-[2.5px] border-ink bg-card px-3 py-1 align-baseline font-sans text-xl disabled:bg-sky"
        />
        {after}
      </p>
      {!locked && (
        <button type="submit" className="btn btn-primary mt-6" disabled={!text.trim()}>Kiểm tra</button>
      )}
    </form>
  );
}
```

Create `src/components/exercises/reorder.tsx`:

```tsx
"use client";

import { useState } from "react";
import type { ReorderExercise } from "@/content/types";
import { checkReorder, shuffleAvoidingAnswer } from "@/lib/scoring";

export function Reorder({
  item,
  locked,
  onAnswer,
}: {
  item: ReorderExercise;
  locked: boolean;
  onAnswer: (correct: boolean) => void;
}) {
  const [order] = useState(() => shuffleAvoidingAnswer(item.words));
  const [picked, setPicked] = useState<number[]>([]); // positions in `order`
  const wordAt = (pos: number) => item.words[order[pos]];

  const chip =
    "min-h-11 rounded-xl border-[2.5px] border-ink px-4 font-display text-lg font-semibold shadow-[0_3px_0_0_var(--color-ink)] active:translate-y-0.5 active:shadow-none disabled:shadow-none";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAnswer(checkReorder(item.words, picked.map(wordAt)));
      }}
    >
      <h3 className="mb-5 font-display text-2xl font-bold">{item.prompt}</h3>
      <div
        className="flex min-h-20 flex-wrap items-center gap-2 rounded-2xl border-[2.5px] border-dashed border-ink bg-card p-3"
        aria-label="Câu trả lời của bạn"
      >
        {picked.length === 0 && <p className="px-2 text-ink-soft">Bấm các từ bên dưới theo đúng thứ tự</p>}
        {picked.map((pos) => (
          <button
            key={pos}
            type="button"
            disabled={locked}
            className={`${chip} bg-sun`}
            onClick={() => setPicked(picked.filter((p) => p !== pos))}
            aria-label={`Bỏ từ ${wordAt(pos)}`}
          >
            {wordAt(pos)}
          </button>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2" aria-label="Các từ để chọn">
        {order.map((_, pos) =>
          picked.includes(pos) ? null : (
            <button key={pos} type="button" disabled={locked} className={`${chip} bg-card`} onClick={() => setPicked([...picked, pos])}>
              {wordAt(pos)}
            </button>
          ),
        )}
      </div>
      {!locked && (
        <button type="submit" className="btn btn-primary mt-6" disabled={picked.length !== item.words.length}>
          Kiểm tra
        </button>
      )}
    </form>
  );
}
```

- [ ] **Step 3: StepExercise**

Create `src/components/lesson/step-exercise.tsx`:

```tsx
"use client";

import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import type { Exercise, ExerciseStep } from "@/content/types";
import { correctAnswerText, percentScore } from "@/lib/scoring";
import { FillBlank } from "@/components/exercises/fill-blank";
import { ListenChoose } from "@/components/exercises/listen-choose";
import { MultipleChoice } from "@/components/exercises/multiple-choice";
import { Reorder } from "@/components/exercises/reorder";

function ExerciseItem({ item, locked, onAnswer }: { item: Exercise; locked: boolean; onAnswer: (ok: boolean) => void }) {
  switch (item.kind) {
    case "multiple-choice":
      return <MultipleChoice item={item} locked={locked} onAnswer={onAnswer} />;
    case "listen-choose":
      return <ListenChoose item={item} locked={locked} onAnswer={onAnswer} />;
    case "fill-blank":
      return <FillBlank item={item} locked={locked} onAnswer={onAnswer} />;
    case "reorder":
      return <Reorder item={item} locked={locked} onAnswer={onAnswer} />;
  }
}

export function StepExercise({ step, onComplete }: { step: ExerciseStep; onComplete: (r: { score: number }) => void }) {
  const [i, setI] = useState(0);
  const [result, setResult] = useState<boolean | null>(null);
  const [correct, setCorrect] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [score, setScore] = useState<number | null>(null);
  const total = step.items.length;
  const item = step.items[i];
  const last = i === total - 1;

  function onAnswer(ok: boolean) {
    setResult(ok);
    if (ok) setCorrect((c) => c + 1);
  }

  function nextItem() {
    if (last) {
      const s = percentScore(correct, total) ?? 0;
      setScore(s);
      onComplete({ score: s });
    } else {
      setI(i + 1);
      setResult(null);
    }
  }

  function retry() {
    setI(0);
    setResult(null);
    setCorrect(0);
    setScore(null);
    setAttempt((a) => a + 1);
  }

  if (score !== null) {
    return (
      <div className="clay card-in p-8 text-center">
        <p className="font-display text-5xl font-extrabold">{score}%</p>
        <p className="mt-2 text-lg">Bạn làm đúng {correct}/{total} câu.</p>
        <button type="button" className="btn btn-ghost mt-6" onClick={retry}>Làm lại</button>
      </div>
    );
  }

  return (
    <div className="clay p-6 sm:p-8">
      <p className="mb-4 text-sm font-semibold text-ink-soft">Câu {i + 1}/{total}</p>
      <ExerciseItem key={`${attempt}-${item.id}`} item={item} locked={result !== null} onAnswer={onAnswer} />
      <div role="status" aria-live="polite">
        {result !== null && (
          <div className={`mt-6 rounded-2xl border-[2.5px] border-ink p-4 ${result ? "bg-leaf-soft" : "bg-tangerine/25"}`}>
            <p className="flex items-center gap-2 font-display text-xl font-bold">
              {result ? <CheckCircle2 className="size-6" aria-hidden /> : <XCircle className="size-6" aria-hidden />}
              {result ? "Chính xác!" : `Chưa đúng. Đáp án: ${correctAnswerText(item)}`}
            </p>
            {item.explain && <p className="mt-2">{item.explain}</p>}
          </div>
        )}
      </div>
      {result !== null && (
        <button type="button" className="btn btn-primary mt-6" onClick={nextItem}>
          {last ? "Xem kết quả" : "Câu tiếp"}
        </button>
      )}
    </div>
  );
}
```

- [ ] **Step 4: Nối vào LessonShell**

In `src/components/lesson/lesson-shell.tsx`, add import `import { StepExercise } from "./step-exercise";` and replace:

```tsx
      case "exercise":
        // Replaced by <StepExercise> in Task 10
        return <button type="button" className="btn btn-ghost" onClick={done}>Bỏ qua (tạm)</button>;
```

with:

```tsx
      case "exercise":
        return <StepExercise step={step} onComplete={(r) => markComplete(i, r)} />;
```

- [ ] **Step 5: Kiểm tra**

Run: `npx tsc --noEmit && npx eslint src && npm test && npm run build`
Expected: không lỗi.

Chạy dev, `/hoc/giao-tiep-a1/chao-hoi` → bước Bài tập:
- trắc nghiệm: chọn sai thì đáp án đúng tô xanh, lựa chọn của bạn tô cam, có giải thích;
- điền từ: gõ " Meet. " là đúng;
- sắp xếp: thứ tự ban đầu không trùng đáp án; bấm từ ở hàng trả lời thì từ đó trở về;
- nghe chọn: nút "Nghe" đọc câu;
- cuối cùng hiện điểm % và nút "Tiếp tục" của bài được bật. Làm tiếp tới "Hoàn thành bài học" thì màn hình chúc mừng hiện đúng điểm.
- Chỉ dùng bàn phím (Tab, Space, Enter) cũng làm được cả 4 dạng.

- [ ] **Step 6: Commit**

```bash
git add src/components/exercises src/components/lesson
git commit -m "feat: interactive exercises with instant feedback"
```

---

### Task 11: Luyện nói

**Files:**
- Create: `src/components/lesson/step-speaking.tsx`
- Modify: `src/components/lesson/lesson-shell.tsx` (case `"speaking"`)

**Interfaces:**
- Consumes: `listenOnce`, `speak`, `useSpeechSupport` (Task 5); `matchSpeech` (Task 1).
- Produces: `StepSpeaking({ step: SpeakingStep; onComplete: () => void })`.

- [ ] **Step 1: StepSpeaking**

Create `src/components/lesson/step-speaking.tsx`:

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Mic, Volume2 } from "lucide-react";
import type { SpeakingStep } from "@/content/types";
import { matchSpeech } from "@/lib/scoring";
import { listenOnce, speak, useSpeechSupport } from "@/lib/speech";

const ERRORS: Record<string, string> = {
  "not-allowed": "Trình duyệt chưa được phép dùng micro. Bấm biểu tượng ổ khóa trên thanh địa chỉ để cho phép, rồi thử lại.",
  "service-not-allowed": "Trình duyệt chưa được phép dùng micro. Bấm biểu tượng ổ khóa trên thanh địa chỉ để cho phép, rồi thử lại.",
  "no-speech": "Không nghe thấy giọng nói. Bấm “Bấm để nói” rồi nói to hơn một chút.",
  "audio-capture": "Không tìm thấy micro trên thiết bị này.",
  network: "Không kết nối được dịch vụ nhận giọng nói. Kiểm tra mạng rồi thử lại.",
  default: "Không nhận được giọng nói. Thử lại hoặc bỏ qua câu này.",
};

function feedback(percent: number) {
  if (percent >= 80) return "Rất tốt!";
  if (percent >= 50) return "Gần đúng rồi. Nghe mẫu rồi thử lại nhé.";
  return "Thử nói chậm hơn và rõ từng từ.";
}

export function StepSpeaking({ step, onComplete }: { step: SpeakingStep; onComplete: () => void }) {
  const { tts, stt } = useSpeechSupport();
  const [i, setI] = useState(0);
  const [listening, setListening] = useState(false);
  const [heard, setHeard] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [allDone, setAllDone] = useState(false);
  const stopRef = useRef<(() => void) | null>(null);

  useEffect(() => () => stopRef.current?.(), []);

  if (!stt) {
    return (
      <div className="clay p-6 sm:p-8">
        <p className="text-lg">
          Trình duyệt này chưa hỗ trợ nhận giọng nói. Hãy dùng Chrome hoặc Edge trên máy tính để luyện nói.
        </p>
        <button type="button" className="btn btn-ghost mt-6" onClick={onComplete} disabled={allDone}>Bỏ qua bước này</button>
      </div>
    );
  }

  if (allDone) {
    return (
      <div className="clay card-in p-8 text-center">
        <Check className="mx-auto size-10 text-leaf" aria-hidden />
        <p className="mt-3 font-display text-2xl font-bold">Đã xong phần luyện nói</p>
        <p className="mt-1 text-ink-soft">Bấm “Hoàn thành bài học” để lưu tiến độ.</p>
      </div>
    );
  }

  const s = step.sentences[i];
  const last = i === step.sentences.length - 1;
  const match = heard !== null ? matchSpeech(s.text, heard) : null;

  function record() {
    setError(null);
    setHeard(null);
    setListening(true);
    stopRef.current = listenOnce({
      onResult: (t) => setHeard(t),
      onError: (code) => setError(ERRORS[code] ?? ERRORS.default),
      onEnd: () => setListening(false),
    });
  }

  function advance() {
    stopRef.current?.();
    setListening(false);
    if (last) {
      setAllDone(true);
      onComplete();
    } else {
      setI(i + 1);
      setHeard(null);
      setError(null);
    }
  }

  return (
    <div className="clay p-6 sm:p-8">
      <p className="text-sm font-semibold text-ink-soft">Câu {i + 1}/{step.sentences.length}</p>
      <p className="mt-3 font-display text-3xl font-extrabold leading-snug">{s.text}</p>
      <p className="mt-1 text-ink-soft">{s.meaningVi}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <button type="button" className="btn btn-ghost" onClick={() => speak(s.text, { rate: 0.85 })} disabled={!tts}>
          <Volume2 className="size-5" aria-hidden />
          Nghe mẫu
        </button>
        <button type="button" className="btn btn-primary" onClick={record} disabled={listening} aria-pressed={listening}>
          <Mic className="size-5" aria-hidden />
          {listening ? "Đang nghe…" : "Bấm để nói"}
        </button>
      </div>

      <div role="status" aria-live="polite">
        {error && <p className="mt-5 rounded-2xl border-2 border-ink bg-sun-soft px-4 py-3">{error}</p>}
        {match && (
          <div className="mt-6 rounded-2xl border-[2.5px] border-ink bg-sky p-4">
            <p className="font-display text-xl font-bold">Khớp {match.percent}%. {feedback(match.percent)}</p>
            <p className="mt-3 flex flex-wrap gap-1.5 text-lg">
              {match.words.map((w, k) => (
                <span key={k} className={`rounded-lg px-1.5 ${w.matched ? "bg-leaf-soft" : "bg-tangerine/30 underline decoration-wavy"}`}>
                  {w.word}
                  {!w.matched && <span className="sr-only"> (chưa đúng)</span>}
                </span>
              ))}
            </p>
            <p className="mt-3 text-sm text-ink-soft">Máy nghe được: “{heard}”</p>
          </div>
        )}
      </div>

      <button type="button" className="btn btn-ghost mt-6" onClick={advance}>
        {last ? (heard ? "Xong phần luyện nói" : "Bỏ qua và kết thúc") : heard ? "Câu tiếp" : "Bỏ qua câu này"}
      </button>
    </div>
  );
}
```

- [ ] **Step 2: Nối vào LessonShell**

In `src/components/lesson/lesson-shell.tsx`, add import `import { StepSpeaking } from "./step-speaking";` and replace:

```tsx
      case "speaking":
        // Replaced by <StepSpeaking> in Task 11
        return <button type="button" className="btn btn-ghost" onClick={done}>Bỏ qua (tạm)</button>;
```

with:

```tsx
      case "speaking":
        return <StepSpeaking step={step} onComplete={done} />;
```

- [ ] **Step 3: Kiểm tra**

Run: `npx tsc --noEmit && npx eslint src && npm run build`
Expected: không lỗi. `grep -n "tạm" src/components/lesson/lesson-shell.tsx` không còn kết quả.

Kiểm tra tay trên Chrome: nói "Nice to meet you" thì các từ tô xanh, 100%. Từ chối quyền micro thì hiện hướng dẫn cho phép micro. Trên Firefox (không có SpeechRecognition) hiện thông báo không hỗ trợ và nút "Bỏ qua bước này".

- [ ] **Step 4: Commit**

```bash
git add src/components/lesson
git commit -m "feat: speaking practice with word-level feedback"
```

---

### Task 12: Hoàn thành khóa và chứng chỉ

**Files:**
- Create: `src/app/hoc/[course]/hoan-thanh/page.tsx`, `src/components/completion-view.tsx`
- Modify: `src/app/globals.css` (thêm CSS in)

**Interfaces:**
- Consumes: `getCourse`, `getCourses` (Task 4); `useProgress`, `progress.setLearnerName` (Task 2); `courseProgress`, `lastCompletedAt` (Task 2); `certificateCode`, `formatDateVi` (Task 3); `EmptyState`, `ProgressBar` (Task 6).
- Produces: `CompletionView({ course: Course })`.

- [ ] **Step 1: Trang**

Create `src/app/hoc/[course]/hoan-thanh/page.tsx`:

```tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CompletionView } from "@/components/completion-view";
import { getCourse, getCourses } from "@/lib/content";

export const metadata: Metadata = { title: "Hoàn thành khóa học | Crouse English" };

export async function generateStaticParams() {
  return (await getCourses()).map((c) => ({ course: c.slug }));
}

export default async function CompletionPage(props: PageProps<"/hoc/[course]/hoan-thanh">) {
  const { course: slug } = await props.params;
  const course = await getCourse(slug);
  if (!course) notFound();
  return <CompletionView course={course} />;
}
```

- [ ] **Step 2: CompletionView**

Create `src/components/completion-view.tsx`:

```tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Award, Printer } from "lucide-react";
import type { Course } from "@/content/types";
import { certificateCode, formatDateVi } from "@/lib/format";
import { courseProgress, lastCompletedAt } from "@/lib/progress-core";
import { progress, useProgress } from "@/lib/progress";
import { EmptyState } from "@/components/ui/empty-state";
import { ProgressBar } from "@/components/ui/progress-bar";

export function CompletionView({ course }: { course: Course }) {
  const { state, ready } = useProgress();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");

  if (!ready) return <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-16"><div className="clay h-96 animate-pulse bg-card" aria-hidden /></main>;

  const p = courseProgress(course, state);
  if (p.percent < 100) {
    return (
      <main className="flex flex-1 items-center px-4 py-16 sm:px-6">
        <EmptyState title="Bạn sắp về đích rồi" body={`Bạn đã học ${p.done}/${p.total} bài của khóa ${course.title}. Học hết các bài để nhận chứng chỉ.`}>
          <div className="w-full max-w-sm"><ProgressBar value={p.percent} label={`Tiến độ ${p.percent}%`} /></div>
          {p.nextLesson && (
            <Link href={`/hoc/${course.slug}/${p.nextLesson.slug}`} className="btn btn-primary">Học tiếp: {p.nextLesson.title}</Link>
          )}
        </EmptyState>
      </main>
    );
  }

  const completedAt = lastCompletedAt(course, state) ?? new Date().toISOString();
  const showForm = editing || !state.learnerName;

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-14 sm:px-6">
      <div className="print:hidden">
        <h1 className="font-display text-5xl font-extrabold leading-tight">Chúc mừng, bạn đã hoàn thành khóa học!</h1>
        <p className="mt-3 text-lg text-ink-soft">Bạn đã học xong {p.total} bài của khóa {course.title}.</p>

        {showForm && (
          <form
            className="clay mt-8 flex flex-col gap-3 p-6 sm:flex-row sm:items-end"
            onSubmit={(e) => {
              e.preventDefault();
              if (!name.trim()) return;
              progress.setLearnerName(name);
              setEditing(false);
            }}
          >
            <label className="flex-1">
              <span className="block font-semibold">Tên in trên chứng chỉ</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={60}
                autoComplete="name"
                className="mt-2 w-full rounded-xl border-[2.5px] border-ink bg-card px-4 py-2.5 text-lg"
              />
            </label>
            <button type="submit" className="btn btn-primary" disabled={!name.trim()}>Lưu tên</button>
          </form>
        )}
      </div>

      {state.learnerName && !editing && (
        <>
          <section
            id="certificate"
            aria-label="Chứng chỉ hoàn thành"
            className="clay mt-10 border-[6px] bg-card px-8 py-14 text-center sm:px-16"
          >
            <Award className="mx-auto size-14 text-tangerine-deep" aria-hidden />
            <p className="mt-4 font-display text-2xl font-bold text-ink-soft">Chứng nhận hoàn thành</p>
            <p className="mt-6 font-display text-5xl font-extrabold sm:text-6xl">{state.learnerName}</p>
            <p className="mx-auto mt-6 max-w-lg text-lg">
              đã hoàn thành khóa <strong>{course.title}</strong> (trình độ {course.level}) tại Crouse English.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-x-12 gap-y-3 text-ink-soft">
              <p>Ngày cấp: <strong className="text-ink">{formatDateVi(completedAt)}</strong></p>
              <p>Mã chứng chỉ: <strong className="text-ink">{certificateCode(course.slug, state.learnerName, completedAt)}</strong></p>
            </div>
          </section>

          <div className="mt-8 flex flex-wrap gap-3 print:hidden">
            <button type="button" className="btn btn-primary" onClick={() => window.print()}>
              <Printer className="size-5" aria-hidden />
              In chứng chỉ
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => {
                setName(state.learnerName ?? "");
                setEditing(true);
              }}
            >
              Đổi tên
            </button>
            <Link href="/khoa-hoc" className="btn btn-ghost">Xem khóa học khác</Link>
          </div>
        </>
      )}
    </main>
  );
}
```

- [ ] **Step 3: CSS in**

Append to `src/app/globals.css`:

```css
@media print {
  body * {
    visibility: hidden;
  }
  #certificate,
  #certificate * {
    visibility: visible;
  }
  #certificate {
    position: absolute;
    inset: 0;
    margin: 0;
    box-shadow: none;
  }
}
```

- [ ] **Step 4: Kiểm tra**

Run: `npx tsc --noEmit && npx eslint src && npm run build`
Expected: không lỗi.

Chạy dev. Mở `/hoc/giao-tiep-a1/hoan-thanh` khi chưa học xong: hiện "Bạn sắp về đích rồi" kèm thanh tiến độ.

Để giả lập đã học xong, trong DevTools Console chạy:

```js
const slugs = ["chao-hoi","gioi-thieu-ban-than","so-dem","gia-dinh","mot-ngay-cua-toi","goi-mon","hoi-duong","mua-sam"];
localStorage.setItem("ce:progress:v1", JSON.stringify({ version: 1, learnerName: null, enrolled: ["giao-tiep-a1"],
  lessons: Object.fromEntries(slugs.map(s => [`giao-tiep-a1/${s}`, { done: true, score: 100, completedAt: "2026-09-24T03:00:00.000Z" }])),
  streak: { current: 1, lastDay: "2026-09-24" }, placement: null }));
location.reload();
```

Kết quả mong đợi: form nhập tên; lưu tên xong thì hiện chứng chỉ có ngày 24/09/2026 và mã `CE-GIAO-TIEP-A1-XXXXXX`. Bấm "In chứng chỉ": bản xem trước khi in chỉ có chứng chỉ.

- [ ] **Step 5: Commit**

```bash
git add src/app/hoc src/components/completion-view.tsx src/app/globals.css
git commit -m "feat: course completion page with printable certificate"
```

---

### Task 13: Khóa học của tôi `/cua-toi`

**Files:**
- Create: `src/app/(site)/cua-toi/page.tsx`, `src/components/my-courses.tsx`

**Interfaces:**
- Consumes: `getCourses` (Task 4); `useProgress` (Task 2); `courseProgress`, `displayStreak`, `todayKey` (Task 2); `suggestCourseSlug` (Task 4); `GOAL_META`, `LEVEL_LABEL`, `ProgressBar`, `EmptyState`, `PersistNotice` (Task 6).
- Produces: `MyCourses({ courses: Course[] })`.

- [ ] **Step 1: Trang và component**

Create `src/app/(site)/cua-toi/page.tsx`:

```tsx
import type { Metadata } from "next";
import { MyCourses } from "@/components/my-courses";
import { getCourses } from "@/lib/content";

export const metadata: Metadata = { title: "Khóa học của tôi | Crouse English" };

export default async function MyCoursesPage() {
  const courses = await getCourses();
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-5xl font-extrabold leading-tight">Khóa học của tôi</h1>
      <MyCourses courses={courses} />
    </div>
  );
}
```

Create `src/components/my-courses.tsx`:

```tsx
"use client";

import Link from "next/link";
import { Flame, Gauge, NotebookPen } from "lucide-react";
import type { Course } from "@/content/types";
import { suggestCourseSlug } from "@/lib/course-utils";
import { courseProgress, displayStreak, todayKey } from "@/lib/progress-core";
import { useProgress } from "@/lib/progress";
import { GOAL_META, LEVEL_LABEL } from "@/components/course/goal-meta";
import { EmptyState } from "@/components/ui/empty-state";
import { PersistNotice } from "@/components/ui/persist-notice";
import { ProgressBar } from "@/components/ui/progress-bar";

export function MyCourses({ courses }: { courses: Course[] }) {
  const { state, ready } = useProgress();
  if (!ready) return <div className="clay mt-10 h-64 animate-pulse bg-card" aria-hidden />;

  const mine = courses.filter((c) => state.enrolled.includes(c.slug));
  const streak = displayStreak(state.streak, todayKey());
  const lessonsDone = Object.values(state.lessons).filter((l) => l.done).length;
  const placement = state.placement;
  const suggested = placement ? courses.find((c) => c.slug === suggestCourseSlug(placement.level)) : null;

  return (
    <div className="mt-10 space-y-10">
      <PersistNotice />
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="clay flex items-center gap-4 p-5">
          <Flame className="size-9 text-tangerine-deep" aria-hidden />
          <div>
            <p className="font-display text-3xl font-extrabold">{streak} ngày</p>
            <p className="text-ink-soft">học liên tiếp</p>
          </div>
        </div>
        <div className="clay flex items-center gap-4 p-5">
          <NotebookPen className="size-9 text-grape" aria-hidden />
          <div>
            <p className="font-display text-3xl font-extrabold">{lessonsDone} bài</p>
            <p className="text-ink-soft">đã hoàn thành</p>
          </div>
        </div>
        <div className="clay flex items-center gap-4 p-5">
          <Gauge className="size-9 text-leaf" aria-hidden />
          {state.placement ? (
            <div>
              <p className="font-display text-3xl font-extrabold">{state.placement.level}</p>
              <p className="text-ink-soft">{LEVEL_LABEL[state.placement.level]}, theo bài kiểm tra</p>
            </div>
          ) : (
            <Link href="/kiem-tra-trinh-do" className="font-semibold underline underline-offset-4">
              Làm bài kiểm tra trình độ
            </Link>
          )}
        </div>
      </div>

      {mine.length === 0 ? (
        <EmptyState
          title="Bạn chưa đăng ký khóa học nào"
          body="Làm bài kiểm tra 10 phút để biết nên bắt đầu từ đâu, hoặc học thử một bài miễn phí."
        >
          {suggested ? (
            <Link href={`/khoa-hoc/${suggested.slug}`} className="btn btn-primary">Xem khóa gợi ý: {suggested.title}</Link>
          ) : (
            <Link href="/kiem-tra-trinh-do" className="btn btn-primary">Kiểm tra trình độ</Link>
          )}
          <Link href="/khoa-hoc" className="btn btn-ghost">Xem các khóa học</Link>
        </EmptyState>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {mine.map((c) => {
            const p = courseProgress(c, state);
            return (
              <article key={c.slug} className={`clay flex flex-col p-6 ${GOAL_META[c.goal].tone}`}>
                <h2 className="font-display text-2xl font-extrabold">{c.title}</h2>
                <ProgressBar value={p.percent} label={`Tiến độ ${c.title} ${p.percent}%`} className="mt-5" />
                <p className="mt-2 font-medium">Đã học {p.done}/{p.total} bài ({p.percent}%)</p>
                <div className="mt-6">
                  {p.nextLesson ? (
                    <Link href={`/hoc/${c.slug}/${p.nextLesson.slug}`} className="btn btn-primary">
                      Học tiếp: {p.nextLesson.title}
                    </Link>
                  ) : (
                    <Link href={`/hoc/${c.slug}/hoan-thanh`} className="btn btn-primary">Xem chứng chỉ</Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Kiểm tra**

Run: `npx tsc --noEmit && npx eslint src && npm run build`
Expected: không lỗi.

Chạy dev:
- `/cua-toi` khi localStorage trống: 3 ô thống kê (0 ngày, 0 bài, liên kết kiểm tra trình độ) và màn hình trống;
- sau khi đăng ký và học 1 bài: thẻ khóa hiện 13%, nút "Học tiếp: Giới thiệu bản thân".

- [ ] **Step 3: Commit**

```bash
git add "src/app/(site)/cua-toi" src/components/my-courses.tsx
git commit -m "feat: my courses dashboard"
```

---

### Task 14: Kiểm tra trình độ `/kiem-tra-trinh-do`

**Files:**
- Create: `src/app/(site)/kiem-tra-trinh-do/page.tsx`, `src/components/placement-test.tsx`

**Interfaces:**
- Consumes: `getPlacementTest`, `getCourses` (Task 4); `scorePlacement`, `PLACEMENT_LEVELS`, `PlacementResult` (Task 3); `progress.savePlacement`, `useProgress` (Task 2); `suggestCourseSlug` (Task 4); `OptionList`, `ProgressBar` (Task 6); `CourseCard` (Task 7); `LEVEL_LABEL` (Task 6); `speak`, `useSpeechSupport` (Task 5).
- Produces: `PlacementTest({ questions: PlacementQuestion[]; courses: Course[] })`.

- [ ] **Step 1: Trang và component**

Create `src/app/(site)/kiem-tra-trinh-do/page.tsx`:

```tsx
import type { Metadata } from "next";
import { PlacementTest } from "@/components/placement-test";
import { getCourses, getPlacementTest } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kiểm tra trình độ tiếng Anh miễn phí | Crouse English",
  description: "20 câu, khoảng 10 phút, biết ngay trình độ và khóa học phù hợp.",
};

export default async function PlacementPage() {
  const [questions, courses] = await Promise.all([getPlacementTest(), getCourses()]);
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <PlacementTest questions={questions} courses={courses} />
    </div>
  );
}
```

Create `src/components/placement-test.tsx`:

```tsx
"use client";

import { useState } from "react";
import { Volume2 } from "lucide-react";
import type { Course, PlacementQuestion } from "@/content/types";
import { suggestCourseSlug } from "@/lib/course-utils";
import { PLACEMENT_LEVELS, scorePlacement, type PlacementResult } from "@/lib/placement";
import { progress, useProgress } from "@/lib/progress";
import { speak, useSpeechSupport } from "@/lib/speech";
import { CourseCard } from "@/components/course/course-card";
import { LEVEL_LABEL } from "@/components/course/goal-meta";
import { OptionList } from "@/components/ui/option-list";
import { ProgressBar } from "@/components/ui/progress-bar";

const SKILL_LABEL: Record<PlacementQuestion["skill"], string> = {
  vocab: "Từ vựng",
  grammar: "Ngữ pháp",
  listening: "Nghe",
};

export function PlacementTest({ questions, courses }: { questions: PlacementQuestion[]; courses: Course[] }) {
  const { state, ready } = useProgress();
  const { tts } = useSpeechSupport();
  const [stage, setStage] = useState<"intro" | "quiz" | "result">("intro");
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<PlacementResult | null>(null);

  const q = questions[i];
  const choice = q ? (answers[q.id] ?? null) : null;

  function start() {
    setAnswers({});
    setI(0);
    setResult(null);
    setStage("quiz");
  }

  function next() {
    if (i < questions.length - 1) {
      setI(i + 1);
      return;
    }
    const r = scorePlacement(questions, answers);
    progress.savePlacement(r.level, r.score);
    setResult(r);
    setStage("result");
  }

  if (stage === "intro") {
    return (
      <div className="clay p-8 sm:p-10">
        <h1 className="font-display text-5xl font-extrabold leading-tight">Kiểm tra trình độ tiếng Anh</h1>
        <p className="mt-4 text-lg text-ink-soft">
          {questions.length} câu, khoảng 10 phút, gồm từ vựng, ngữ pháp và nghe. Mỗi câu chỉ trả lời một lần, không quay lại câu trước.
        </p>
        {ready && state.placement && (
          <p className="mt-4 rounded-2xl bg-sky px-4 py-3">
            Lần trước bạn đạt trình độ <strong>{state.placement.level}</strong> ({LEVEL_LABEL[state.placement.level].toLowerCase()}).
          </p>
        )}
        <button type="button" className="btn btn-primary mt-8 text-lg" onClick={start}>Bắt đầu</button>
      </div>
    );
  }

  if (stage === "result" && result) {
    const suggested = courses.find((c) => c.slug === suggestCourseSlug(result.level));
    return (
      <div className="space-y-8">
        <div className="clay card-in p-8 text-center sm:p-10">
          <p className="font-semibold text-ink-soft">Trình độ của bạn</p>
          <p className="mt-2 font-display text-7xl font-extrabold">{result.level}</p>
          <p className="font-display text-2xl font-bold">{LEVEL_LABEL[result.level]}</p>
          <p className="mt-3 text-ink-soft">Đúng {result.score}% tổng số câu.</p>
          <dl className="mx-auto mt-8 grid max-w-md gap-3 text-left">
            {PLACEMENT_LEVELS.map((l) => {
              const { correct, total } = result.perLevel[l];
              return (
                <div key={l} className="grid grid-cols-[3rem_1fr_3.5rem] items-center gap-3">
                  <dt className="font-display font-bold">{l}</dt>
                  <dd><ProgressBar value={total ? (correct / total) * 100 : 0} label={`Cấp ${l}: đúng ${correct}/${total}`} /></dd>
                  <dd className="text-right text-sm font-semibold">{correct}/{total}</dd>
                </div>
              );
            })}
          </dl>
        </div>
        {suggested && (
          <div>
            <h2 className="mb-4 font-display text-3xl font-extrabold">Khóa học gợi ý cho bạn</h2>
            <CourseCard course={suggested} />
          </div>
        )}
        <button type="button" className="btn btn-ghost" onClick={start}>Làm lại bài kiểm tra</button>
      </div>
    );
  }

  return (
    <div className="clay p-6 sm:p-8">
      <ProgressBar value={(i / questions.length) * 100} label={`Đã làm ${i}/${questions.length} câu`} />
      <p className="mt-5 text-sm font-semibold text-ink-soft">
        Câu {i + 1}/{questions.length}, {SKILL_LABEL[q.skill].toLowerCase()}
      </p>
      <h2 className="mt-2 font-display text-3xl font-extrabold leading-snug">{q.prompt}</h2>
      {q.audioText && (
        <div className="mt-4">
          <button type="button" className="btn btn-ghost" onClick={() => speak(q.audioText!)} disabled={!tts}>
            <Volume2 className="size-5" aria-hidden />
            Nghe
          </button>
          {!tts && <p className="mt-2 text-sm text-ink-soft">Trình duyệt không đọc to được. Câu gốc: {q.audioText}</p>}
        </div>
      )}
      <div className="mt-6">
        <OptionList
          key={q.id}
          name={q.id}
          options={q.options}
          value={choice}
          onChange={(k) => setAnswers({ ...answers, [q.id]: k })}
        />
      </div>
      <button type="button" className="btn btn-primary mt-8" disabled={choice === null} onClick={next}>
        {i < questions.length - 1 ? "Câu tiếp" : "Xem kết quả"}
      </button>
    </div>
  );
}
```

- [ ] **Step 2: Kiểm tra**

Run: `npx tsc --noEmit && npx eslint src && npm run build`
Expected: không lỗi.

Chạy dev, `/kiem-tra-trinh-do`: làm hết 20 câu, chọn đúng 5 câu A1 và sai phần còn lại thì ra A1, gợi ý "Tiếng Anh giao tiếp cơ bản". `/cua-toi` hiện ô trình độ A1. Mở lại `/kiem-tra-trinh-do` thì phần giới thiệu hiện "Lần trước bạn đạt trình độ A1".

- [ ] **Step 3: Commit**

```bash
git add "src/app/(site)/kiem-tra-trinh-do" src/components/placement-test.tsx
git commit -m "feat: placement test with level suggestion"
```

---

### Task 15: Kiểm tra tổng thể

**Files:** không tạo file mới; chỉ sửa những lỗi phát hiện được.

- [ ] **Step 1: Chạy toàn bộ kiểm tra tự động**

Run: `npm test && npx tsc --noEmit && npm run lint && npm run build`
Expected: toàn bộ PASS; build liệt kê các route `/`, `/khoa-hoc`, `/khoa-hoc/[slug]` (4 trang), `/hoc/[course]/[lesson]`, `/hoc/[course]/hoan-thanh`, `/cua-toi`, `/kiem-tra-trinh-do`.

- [ ] **Step 2: Chụp màn hình từng trang**

Chạy `npx next dev -p 3100`. Bằng Playwright, chụp full-page ở 1440×900 và 390×844 cho: `/`, `/khoa-hoc`, `/khoa-hoc/giao-tiep-a1`, `/khoa-hoc/ielts`, `/hoc/giao-tiep-a1/chao-hoi` (mỗi bước), `/hoc/giao-tiep-a1/so-dem` (bị khóa), `/cua-toi` (trống và có khóa), `/kiem-tra-trinh-do` (giới thiệu, câu hỏi, kết quả), `/hoc/giao-tiep-a1/hoan-thanh` (chưa xong, đã xong). Lưu ảnh vào `../.playwright-mcp/`.

Kiểm từng ảnh: không có thanh cuộn ngang, chữ tiếng Việt đủ dấu, không có chữ bị cắt, các nút cao ít nhất 44px, bố cục không bị trống lệch.

- [ ] **Step 3: Chạy thử trọn một lượt học**

Trong một tab mới đã xóa localStorage, làm lần lượt: trang chủ → "Xem các khóa học" → "Tiếng Anh giao tiếp cơ bản" → "Học thử: Chào hỏi mỗi ngày" → làm hết các bước → "Bài tiếp theo" → … → gặp bài bị khóa → "Đăng ký khóa học" → học hết 8 bài → "Nhận chứng chỉ" → nhập tên → chứng chỉ. Tải lại trang ở giữa chừng: tiến độ vẫn còn. Mở `/cua-toi`: 100%, nút "Xem chứng chỉ".

- [ ] **Step 4: Commit các chỉnh sửa (nếu có)**

```bash
git add -A src
git commit -m "fix: polish from end-to-end review"
```
