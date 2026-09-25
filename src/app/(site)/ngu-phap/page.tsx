import type { Metadata } from "next";
import { GrammarHandbook } from "@/components/grammar-handbook";
import { getCourses } from "@/lib/content";
import { grammarIndex } from "@/lib/grammar";

export const metadata: Metadata = {
  title: "Sổ tay ngữ pháp tiếng Anh A1–C1 | Crouse English",
  description: "Tra cứu toàn bộ điểm ngữ pháp từ A1 đến C1, giải thích bằng tiếng Việt, có ví dụ và lỗi thường gặp.",
};

export default async function GrammarPage() {
  const entries = grammarIndex(await getCourses());
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-5xl font-extrabold leading-tight">Sổ tay ngữ pháp</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-soft">
        {entries.length} điểm ngữ pháp từ A1 đến C1, giải thích bằng tiếng Việt. Đọc lại bất cứ lúc nào, không cần vào bài học.
      </p>
      <GrammarHandbook entries={entries} />
    </div>
  );
}
