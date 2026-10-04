import { EXAM_PAPERS, OFFICIAL_CHECKS } from "@/content/my-plan";
import type { PlanInput } from "./plan-stage";
import type { DayMain } from "./schedule";

const SKILL_VI: Record<string, string> = { reading: "đọc", use: "Use of English", listening: "nghe", writing: "viết", speaking: "nói" };

/** One line saying what a calendar day is about. */
export function describeDay(m: DayMain, input: PlanInput): string {
  const { grammar, ipa, levels } = input;
  const lessonTitle = (course: string, slug: string | null) =>
    slug ? levels.find((l) => l.slug === course)?.chapters.flatMap((c) => c.lessons).find((x) => x.slug === slug)?.title : undefined;
  const levelOf = (course: string) => levels.find((l) => l.slug === course)?.level ?? "";
  const drills = (ids: string[]) => (ids.length ? `, tách ${ids.length} câu` : "");
  switch (m.kind) {
    case "grammar": {
      const g = grammar.find((x) => x.slug === m.lesson)?.title;
      const p = ipa.find((x) => x.slug === m.ipa)?.title;
      return [g && `Bài A1: ${g}`, p && `Phát âm: ${p}`].filter(Boolean).join(". ") + drills(m.drills);
    }
    case "base-review":
      return `Ôn cách quãng A1: ${m.lessons.map((s) => grammar.find((g) => g.slug === s)?.title ?? s).join("; ")}${drills(m.drills)}`;
    case "lesson":
      return `Bài mới ${levelOf(m.course)}: ${lessonTitle(m.course, m.lesson) ?? m.lesson}`;
    case "consolidate": {
      const what = {
        redo: `Làm lại bài “${lessonTitle(m.course, m.target)}”`,
        produce: `Viết và nói với bài “${lessonTitle(m.course, m.target)}”`,
        spaced: `Ôn cách quãng ${levelOf(m.course)}: bài “${lessonTitle(m.course, m.target)}”`,
        words: `Từ vựng ${levelOf(m.course)}`,
        input: `Đầu vào mới: đọc hoặc nghe bài ${levelOf(m.course)}`,
      }[m.focus];
      return what + drills(m.drills);
    }
    case "weak":
      return `Học lại bài yếu ${levelOf(m.course)}${m.lessons.length ? `: ${m.lessons.map((s) => lessonTitle(m.course, s)).join("; ")}` : ""}`;
    case "paper": {
      const p = (EXAM_PAPERS[levelOf(m.course)] ?? []).find((x) => x.id === m.paper);
      return `Luyện đề ${OFFICIAL_CHECKS[levelOf(m.course)]?.exam ?? ""}: phần ${p?.name ?? m.paper}`;
    }
    case "final":
      return `Bài kiểm tra cuối khóa ${levelOf(m.course)}`;
    case "placement":
      return `Kiểm tra nhanh trình độ (soát lại ${levelOf(m.course)})`;
    case "exam": {
      const exam = OFFICIAL_CHECKS[levelOf(m.course)]?.exam ?? "";
      return m.part === "all" ? `Đề mẫu chính thức ${exam}` : m.part === "written" ? `Đề mẫu ${exam}, ngày 1: đọc và viết` : `Đề mẫu ${exam}, ngày 2: nghe và nói`;
    }
    case "remedy":
      return `Học bù phần ${SKILL_VI[m.skill] ?? m.skill} trước khi làm lại đề mẫu${drills(m.drills)}`;
    case "week-review":
      return "Ôn tuần, đọc lại sổ lỗi và ghi giờ học";
    case "done":
      return "Xong lộ trình: đăng ký thi chứng chỉ C1 quốc tế";
  }
}

/** YYYY-MM-DD → a local Date at noon, so adding days never trips over a time change. */
export function parseDayKey(k: string): Date {
  const [y, m, d] = k.split("-").map(Number);
  return new Date(y, m - 1, d, 12);
}

export function addDayKey(k: string, n: number): string {
  const d = parseDayKey(k);
  d.setDate(d.getDate() + n);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function daysBetween(a: string, b: string): number {
  return Math.round((parseDayKey(b).getTime() - parseDayKey(a).getTime()) / 86_400_000);
}
