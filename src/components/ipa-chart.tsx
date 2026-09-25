"use client";

import { useState } from "react";
import { Volume2 } from "lucide-react";
import type { IpaSound } from "@/content/ipa";
import { speak, useSpeechSupport } from "@/lib/speech";

const GROUPS: { title: string; note: string; filter: (s: IpaSound) => boolean }[] = [
  { title: "Nguyên âm ngắn", note: "Đọc gọn, không kéo dài.", filter: (s) => s.group === "short" },
  { title: "Nguyên âm dài", note: "Dấu ː nghĩa là kéo dài âm.", filter: (s) => s.group === "long" },
  { title: "Nguyên âm đôi", note: "Trượt từ âm đầu sang âm sau.", filter: (s) => s.group === "diphthong" },
  { title: "Phụ âm vô thanh", note: "Chỉ có hơi, cổ họng không rung.", filter: (s) => s.group === "consonant" && s.voiced === false },
  { title: "Phụ âm hữu thanh", note: "Đặt tay lên cổ: cổ họng rung.", filter: (s) => s.group === "consonant" && s.voiced === true },
];

/** IPA glyphs are not in the display fonts; use a system face that has them. */
const IPA_FONT = { fontFamily: '"Segoe UI", "Noto Sans", "Lucida Sans Unicode", system-ui, sans-serif' };

export function IpaChart({ sounds }: { sounds: IpaSound[] }) {
  const [selected, setSelected] = useState<IpaSound>(sounds[0]);
  const { tts } = useSpeechSupport();

  return (
    <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_24rem]">
      <div className="space-y-8">
        {GROUPS.map((g) => {
          const items = sounds.filter(g.filter);
          return (
            <section key={g.title} aria-labelledby={`g-${g.title}`}>
              <h2 id={`g-${g.title}`} className="font-display text-2xl font-extrabold">
                {g.title} <span className="text-lg font-bold text-ink-soft">({items.length})</span>
              </h2>
              <p className="text-ink-soft">{g.note}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {items.map((x) => {
                  const active = x.symbol === selected.symbol;
                  return (
                    <li key={x.symbol}>
                      <button
                        type="button"
                        onClick={() => {
                          setSelected(x);
                          speak(x.examples[0].word, { rate: 0.8 });
                        }}
                        aria-pressed={active}
                        aria-label={`Âm /${x.symbol}/, ví dụ ${x.examples[0].word}`}
                        className={`flex h-20 w-20 flex-col items-center justify-center rounded-2xl border-[2.5px] border-ink transition-transform hover:-translate-y-0.5 ${
                          active ? "bg-ink text-card" : "bg-card hover:bg-sun-soft"
                        }`}
                      >
                        <span className="text-3xl leading-none" style={IPA_FONT}>
                          {x.symbol}
                        </span>
                        <span className={`mt-1 text-xs font-semibold ${active ? "text-card/80" : "text-ink-soft"}`}>
                          {x.examples[0].word}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>

      <aside aria-live="polite" className="lg:sticky lg:top-24 lg:self-start">
        <div className="clay p-6">
          <p className="text-sm font-semibold text-ink-soft">Âm đang xem</p>
          <p className="mt-1 text-6xl leading-none" style={IPA_FONT}>
            /{selected.symbol}/
          </p>
          <p className="mt-4 leading-relaxed">{selected.tip}</p>
          <h3 className="mt-6 font-display text-lg font-bold">Từ ví dụ</h3>
          <ul className="mt-2 space-y-2">
            {selected.examples.map((e) => (
              <li key={e.word}>
                <button
                  type="button"
                  onClick={() => speak(e.word, { rate: 0.8 })}
                  disabled={!tts}
                  className="flex min-h-11 w-full items-center gap-3 rounded-xl border-2 border-ink bg-sky px-3 text-left hover:bg-sun-soft disabled:opacity-60"
                >
                  <Volume2 className="size-5 shrink-0" aria-hidden />
                  <span className="font-display text-lg font-bold" lang="en">
                    {e.word}
                  </span>
                  <span className="ml-auto text-ink-soft" style={IPA_FONT}>
                    {e.ipa}
                  </span>
                </button>
              </li>
            ))}
          </ul>
          {selected.pair && (
            <>
              <h3 className="mt-6 font-display text-lg font-bold">
                Dễ nhầm với <span style={IPA_FONT}>/{selected.pair.symbol}/</span>
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {selected.pair.words.map((w) => (
                  <button
                    key={w}
                    type="button"
                    onClick={() => speak(w, { rate: 0.7 })}
                    disabled={!tts}
                    className="btn btn-ghost min-h-11 px-4 text-base"
                  >
                    <Volume2 className="size-4" aria-hidden />
                    <span lang="en">{w}</span>
                  </button>
                ))}
              </div>
              <p className="mt-2 text-sm text-ink-soft">Nghe liền hai từ nhiều lần cho tới khi tai phân biệt được.</p>
            </>
          )}
          {!tts && <p className="mt-4 text-sm text-ink-soft">Trình duyệt này chưa hỗ trợ đọc to. Hãy thử Chrome, Edge hoặc Safari.</p>}
        </div>
      </aside>
    </div>
  );
}
