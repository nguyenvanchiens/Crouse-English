"use client";

import Link from "next/link";
import { Check, Plus, Volume2 } from "lucide-react";
import type { WordTopic } from "@/content/types";
import { topicKey } from "@/lib/progress-core";
import { progress, useProgress } from "@/lib/progress";
import { speak, useSpeechSupport } from "@/lib/speech";

/** The topics of one course's word bank; each topic can be added to (or taken out of) the spaced-repetition review. */
export function WordBank({ courseSlug, topics }: { courseSlug: string; topics: WordTopic[] }) {
  const { state, ready } = useProgress();
  const { tts } = useSpeechSupport();
  const added = topics.filter((t) => state.topics.includes(topicKey(courseSlug, t.id))).length;

  return (
    <div className="mt-10 space-y-8">
      <p className="rounded-2xl border-2 border-ink bg-sky px-5 py-4" role="status">
        {ready ? `Bạn đã thêm ${added}/${topics.length} chủ đề vào lịch ôn. ` : ""}
        Thêm một chủ đề rồi mở{" "}
        <Link href="/on-tap-tu-vung" className="font-semibold underline underline-offset-4">Ôn từ vựng</Link> mỗi ngày: mỗi ngày
        có tối đa 15 từ mới, từ đã nhớ sẽ giãn dần.
      </p>
      {topics.map((t) => {
        const key = topicKey(courseSlug, t.id);
        const on = ready && state.topics.includes(key);
        return (
          <section key={t.id} className="clay p-6 sm:p-8" aria-labelledby={`topic-${t.id}`}>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 id={`topic-${t.id}`} className="font-display text-2xl font-extrabold">
                {t.title} <span className="text-base font-semibold text-ink-soft">({t.words.length} từ)</span>
              </h2>
              <button
                type="button"
                className={on ? "btn btn-ghost" : "btn btn-primary"}
                onClick={() => progress.toggleTopic(key)}
                disabled={!ready}
                aria-pressed={on}
              >
                {on ? <Check className="size-5" aria-hidden /> : <Plus className="size-5" aria-hidden />}
                {on ? "Đã thêm vào lịch ôn" : "Thêm vào lịch ôn"}
              </button>
            </div>
            {/* a table from sm up; on a phone each word is a small card (word and IPA, then meaning, then example) */}
            <div className="mt-5">
              <table className="w-full border-collapse text-left max-sm:block">
                <thead className="max-sm:sr-only">
                  <tr className="border-b-2 border-ink">
                    <th scope="col" className="py-2 pr-3 font-display">Từ</th>
                    <th scope="col" className="py-2 pr-3 font-display">Phiên âm</th>
                    <th scope="col" className="py-2 pr-3 font-display">Nghĩa</th>
                    <th scope="col" className="py-2 font-display">Ví dụ</th>
                  </tr>
                </thead>
                <tbody className="max-sm:block">
                  {t.words.map((w) => (
                    <tr key={w.word} className="border-b border-ink/15 align-top last:border-0 max-sm:flex max-sm:flex-wrap max-sm:items-center max-sm:gap-x-3 max-sm:py-2.5">
                      <td className="py-1 pr-3 max-sm:p-0">
                        <button
                          type="button"
                          onClick={() => speak(w.word)}
                          disabled={!tts}
                          className="-ml-2 inline-flex min-h-11 items-center gap-1.5 rounded-xl px-2 font-semibold hover:bg-sun-soft hover:text-tangerine-deep max-sm:font-display max-sm:text-lg"
                        >
                          <Volume2 className="size-4 shrink-0" aria-hidden />
                          <span lang="en">{w.word}</span>
                          <span className="sr-only">, bấm để nghe</span>
                        </button>
                      </td>
                      <td className="py-3 pr-3 text-ink-soft max-sm:p-0">{w.ipa}</td>
                      <td className="py-3 pr-3 max-sm:w-full max-sm:p-0 max-sm:font-medium">{w.meaning}</td>
                      <td lang="en" className="py-3 text-ink-soft max-sm:w-full max-sm:p-0 max-sm:pt-0.5 max-sm:text-[0.9375rem]">{w.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        );
      })}
    </div>
  );
}
