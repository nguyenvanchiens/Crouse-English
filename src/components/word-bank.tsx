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
            <div className="mt-5 overflow-x-auto" tabIndex={0} role="region" aria-label="Bảng từ vựng, cuộn ngang để xem hết">
              <table className="w-full min-w-[34rem] border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-ink">
                    <th scope="col" className="py-2 pr-3 font-display">Từ</th>
                    <th scope="col" className="py-2 pr-3 font-display">Phiên âm</th>
                    <th scope="col" className="py-2 pr-3 font-display">Nghĩa</th>
                    <th scope="col" className="py-2 font-display">Ví dụ</th>
                  </tr>
                </thead>
                <tbody>
                  {t.words.map((w) => (
                    <tr key={w.word} className="border-b border-ink/15 align-top last:border-0">
                      <td className="py-2 pr-3">
                        <button
                          type="button"
                          onClick={() => speak(w.word)}
                          disabled={!tts}
                          className="inline-flex items-center gap-1.5 font-semibold hover:text-tangerine-deep"
                        >
                          <Volume2 className="size-4 shrink-0" aria-hidden />
                          <span lang="en">{w.word}</span>
                          <span className="sr-only">, bấm để nghe</span>
                        </button>
                      </td>
                      <td className="py-2 pr-3 text-ink-soft">{w.ipa}</td>
                      <td className="py-2 pr-3">{w.meaning}</td>
                      <td lang="en" className="py-2 text-ink-soft">{w.example}</td>
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
