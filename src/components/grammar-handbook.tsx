"use client";

import Link from "next/link";
import { useState } from "react";
import { Search } from "lucide-react";
import type { Level } from "@/content/types";
import { filterGrammar, type GrammarEntry } from "@/lib/grammar";
import { LEVEL_LABEL } from "@/components/course/goal-meta";

export function GrammarHandbook({ entries }: { entries: GrammarEntry[] }) {
  const [query, setQuery] = useState("");
  const shown = filterGrammar(entries, query);
  const levels = [...new Set(shown.map((e) => e.level))] as Level[];

  return (
    <>
      <label className="mt-10 flex max-w-xl items-center gap-3 rounded-full border-[2.5px] border-ink bg-card px-5 py-2 focus-within:outline-3 focus-within:outline-offset-2 focus-within:outline-grape">
        <Search className="size-5 shrink-0 text-ink-soft" aria-hidden />
        <span className="sr-only">Tìm điểm ngữ pháp</span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ví dụ: hiện tại hoàn thành, bị động, mạo từ"
          className="min-h-10 w-full bg-transparent text-lg outline-none"
        />
      </label>
      <p role="status" className="mt-4 text-ink-soft">
        {shown.length} điểm ngữ pháp
      </p>

      {shown.length === 0 ? (
        <p className="clay mt-6 p-8 text-center text-lg">Không có điểm ngữ pháp nào khớp. Thử một từ khóa ngắn hơn.</p>
      ) : (
        <div className="mt-6 space-y-12">
          {levels.map((level) => (
            <section key={level} aria-labelledby={`lv-${level}`}>
              <h2 id={`lv-${level}`} className="flex items-baseline gap-3 font-display text-3xl font-extrabold">
                {level}
                <span className="text-xl font-bold text-ink-soft">{LEVEL_LABEL[level]}</span>
              </h2>
              <ol className="mt-5 grid gap-3 sm:grid-cols-2">
                {shown
                  .filter((e) => e.level === level)
                  .map((e) => (
                    <li key={`${e.courseSlug}/${e.lessonSlug}`}>
                      <Link
                        href={`/ngu-phap/${e.courseSlug}/${e.lessonSlug}`}
                        className="flex h-full flex-col rounded-2xl border-[2.5px] border-ink bg-card px-5 py-4 hover:bg-sun-soft"
                      >
                        <span className="font-display text-lg font-bold leading-snug">{e.lectureTitle}</span>
                        <span className="mt-1 text-sm text-ink-soft">
                          Bài “{e.lessonTitle}”, {e.chapterTitle}
                        </span>
                      </Link>
                    </li>
                  ))}
              </ol>
            </section>
          ))}
        </div>
      )}
    </>
  );
}
