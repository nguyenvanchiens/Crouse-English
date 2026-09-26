import type { Metadata } from "next";
import Link from "next/link";
import { getCourses } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kho từ vựng theo cấp độ | Crouse English",
  description: "Từ vựng thêm cho từng cấp A1 đến C1, chia theo chủ đề, có phiên âm, nghĩa, ví dụ và lịch ôn lặp lại ngắt quãng.",
};

export default async function WordBanksPage() {
  const courses = (await getCourses()).filter((c) => c.wordBank?.length);
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-5xl font-extrabold leading-tight">Kho từ vựng</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-soft">
        Bài học chỉ dạy vài trăm từ; để đọc và nghe thoải mái ở mỗi cấp, bạn cần nhiều hơn thế. Kho từ vựng chia theo chủ đề,
        bạn chọn chủ đề cần học và ôn mỗi ngày theo lịch lặp lại ngắt quãng.
      </p>
      <ul className="mt-10 grid gap-5 sm:grid-cols-2">
        {courses.map((c) => {
          const n = c.wordBank!.reduce((k, t) => k + t.words.length, 0);
          return (
            <li key={c.slug}>
              <Link href={`/tu-vung/${c.slug}`} className="clay block p-6 transition-transform duration-200 hover:-translate-y-1">
                <span className="font-display text-3xl font-extrabold">{c.level}</span>
                <span className="mt-1 block font-display text-xl font-bold">{c.title}</span>
                <span className="mt-2 block text-ink-soft">{n} từ, {c.wordBank!.length} chủ đề</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
