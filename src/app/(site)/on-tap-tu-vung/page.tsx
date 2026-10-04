import type { Metadata } from "next";
import { CustomWords } from "@/components/custom-words";
import { VocabReview, type ReviewWord } from "@/components/vocab-review";
import { getCourses } from "@/lib/content";
import { lessonKey, topicKey, vocabKey } from "@/lib/progress-core";

export const metadata: Metadata = {
  title: "Ôn từ vựng mỗi ngày | Crouse English",
  description: "Ôn lại từ vựng của những bài đã học theo lịch lặp lại ngắt quãng: từ nhớ rồi thì giãn dần, từ quên thì gặp lại sớm.",
};

export default async function VocabReviewPage() {
  const courses = await getCourses();
  const words: ReviewWord[] = [];
  for (const c of courses) {
    for (const l of c.modules.flatMap((m) => m.lessons)) {
      for (const s of l.steps) {
        if (s.type !== "vocab") continue;
        for (const w of s.words) {
          words.push({ key: vocabKey(c.slug, w.word), source: { lesson: lessonKey(c.slug, l.slug) }, course: c.title, word: w });
        }
      }
    }
    for (const t of c.wordBank ?? []) {
      for (const w of t.words) {
        words.push({ key: vocabKey(c.slug, w.word), source: { topic: topicKey(c.slug, t.id) }, course: `${c.title}, ${t.title}`, word: w });
      }
    }
  }
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-5xl font-extrabold leading-tight">Ôn từ vựng</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-soft">
        Từ của những bài bạn đã học xong sẽ quay lại đây đúng lúc sắp quên. Nhớ thì từ đó giãn ra 1, 2, 4, 7, 15 rồi 30 ngày
        mới gặp lại; quên thì gặp lại ngay hôm sau. Mỗi ngày chỉ cần vài phút.
      </p>
      <VocabReview words={words} />
      <CustomWords />
    </div>
  );
}
