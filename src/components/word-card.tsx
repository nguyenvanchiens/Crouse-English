"use client";

import { useState, useSyncExternalStore } from "react";
import { ChevronRight, Snail, Volume2 } from "lucide-react";

type Word = {
  word: string;
  ipa: string;
  syllables: string[];
  stress: number;
  meaning: string;
  tip: string;
};

const WORDS: Word[] = [
  {
    word: "comfortable",
    ipa: "/ˈkʌmf.tə.bəl/",
    syllables: ["comf", "ta", "ble"],
    stress: 0,
    meaning: "thoải mái",
    tip: "Người Việt hay đọc đủ 4 âm “com-for-ta-ble”. Người bản xứ chỉ đọc 3 âm.",
  },
  {
    word: "photographer",
    ipa: "/fəˈtɒɡ.rə.fər/",
    syllables: ["pho", "tog", "ra", "pher"],
    stress: 1,
    meaning: "nhiếp ảnh gia",
    tip: "Trọng âm rơi vào âm thứ hai, khác với “PHO-to” mà bạn quen đọc.",
  },
  {
    word: "Wednesday",
    ipa: "/ˈwenz.deɪ/",
    syllables: ["wenz", "day"],
    stress: 0,
    meaning: "thứ Tư",
    tip: "Chữ “d” đầu tiên không đọc. Chỉ có hai âm: WENZ-day.",
  },
  {
    word: "vegetable",
    ipa: "/ˈvedʒ.tə.bəl/",
    syllables: ["vedge", "ta", "ble"],
    stress: 0,
    meaning: "rau củ",
    tip: "Chữ “e” ở giữa bị nuốt mất, nên đọc 3 âm chứ không phải 4.",
  },
];

const noopSubscribe = () => () => {};

export function WordCard() {
  const [index, setIndex] = useState(0);
  const [speaking, setSpeaking] = useState(false);
  const [popKey, setPopKey] = useState(0);
  const canSpeak = useSyncExternalStore(
    noopSubscribe,
    () => "speechSynthesis" in window,
    () => true,
  );

  const current = WORDS[index];

  function speak(rate: number) {
    if (!canSpeak) return;
    const synth = window.speechSynthesis;
    synth.cancel();
    const utterance = new SpeechSynthesisUtterance(current.word);
    utterance.lang = "en-US";
    utterance.rate = rate;
    const voice = synth
      .getVoices()
      .find((v) => v.lang.startsWith("en-US") || v.lang.startsWith("en-GB"));
    if (voice) utterance.voice = voice;
    utterance.onstart = () => {
      setSpeaking(true);
      setPopKey((k) => k + 1);
    };
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    synth.speak(utterance);
  }

  function next() {
    if (canSpeak) window.speechSynthesis.cancel();
    setSpeaking(false);
    setIndex((i) => (i + 1) % WORDS.length);
  }

  return (
    <div className="relative">
      {/* Stacked cards behind — hints there are more words */}
      <div
        aria-hidden
        className="absolute inset-0 translate-x-3 translate-y-3 rotate-3 rounded-[1.5rem] border-[2.5px] border-ink bg-sun"
      />
      <div
        aria-hidden
        className="absolute inset-0 translate-x-1.5 translate-y-1.5 rotate-[1.5deg] rounded-[1.5rem] border-[2.5px] border-ink bg-grape-soft"
      />

      <article
        key={current.word}
        className="clay card-in relative p-6 sm:p-8"
        aria-label={`Thẻ từ vựng: ${current.word}`}
      >
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-semibold text-ink-soft">
            Từ hay đọc sai ({index + 1}/{WORDS.length})
          </p>
          <span className="rounded-full bg-leaf-soft px-3 py-1 text-sm font-semibold text-ink">
            {current.meaning}
          </span>
        </div>

        <div
          className="mt-6 flex flex-wrap items-end gap-x-1.5 gap-y-2"
          aria-label={`Trọng âm ở âm tiết ${current.stress + 1}`}
        >
          {current.syllables.map((s, i) => {
            const stressed = i === current.stress;
            return (
              <span
                key={`${popKey}-${i}`}
                className={
                  stressed
                    ? `font-display text-5xl sm:text-6xl font-extrabold leading-none text-tangerine-deep ${speaking ? "stress-pop inline-block" : "inline-block"}`
                    : "font-display text-3xl sm:text-4xl font-semibold leading-none text-ink/45"
                }
              >
                {stressed ? s.toUpperCase() : s}
              </span>
            );
          })}
        </div>

        <p className="mt-3 font-display text-xl text-ink-soft">
          <span className="font-semibold text-ink">{current.word}</span>{" "}
          {current.ipa}
        </p>

        <p className="mt-5 rounded-2xl bg-sky px-4 py-3 text-[0.95rem] leading-relaxed text-ink">
          {current.tip}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => speak(0.9)}
            disabled={!canSpeak}
            aria-pressed={speaking}
          >
            <Volume2 className="size-5" aria-hidden />
            {speaking ? "Đang đọc…" : "Nghe phát âm"}
          </button>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => speak(0.5)}
            disabled={!canSpeak}
          >
            <Snail className="size-5" aria-hidden />
            Nghe chậm
          </button>
          <button type="button" className="btn btn-ghost" onClick={next}>
            Từ tiếp theo
            <ChevronRight className="size-5" aria-hidden />
          </button>
        </div>

        {!canSpeak && (
          <p className="mt-3 text-sm text-ink-soft">
            Trình duyệt này chưa hỗ trợ đọc to. Hãy thử Chrome, Edge hoặc Safari.
          </p>
        )}
      </article>
    </div>
  );
}
