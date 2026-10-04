"use client";

import { useRef, useState, type ReactNode } from "react";
import { Plus, Trash2 } from "lucide-react";
import { CUSTOM_LIMITS, customWordId, customWordKey, type CustomWordError } from "@/lib/progress-core";
import { progress, useProgress } from "@/lib/progress";
import { NEW_PER_DAY } from "@/lib/review-queue";

/** Past this many words the list folds into a <details> so the page stays short. */
const FOLD_AT = 8;

const ERRORS: Record<CustomWordError, string> = {
  word: "Hãy nhập từ hoặc cụm từ tiếng Anh.",
  meaning: "Hãy nhập nghĩa tiếng Việt của từ.",
  full: `Danh sách đã đủ ${CUSTOM_LIMITS.count} từ. Hãy xóa bớt từ đã thuộc trước khi thêm từ mới.`,
};

const fieldClass = "mt-2 w-full rounded-xl border-[2.5px] border-ink bg-card px-4 py-2.5 text-lg";

const dueLabel = (due: string) => `${due.slice(8, 10)}/${due.slice(5, 7)}`;

/** Lets the learner add their own words (from Oxford 3000, the Academic Word List, their reading…) to the daily review. */
export function CustomWords() {
  const { state, ready } = useProgress();
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");
  const [example, setExample] = useState("");
  const [ipa, setIpa] = useState("");
  const [error, setError] = useState<CustomWordError | null>(null);
  const [status, setStatus] = useState("");
  const wordRef = useRef<HTMLInputElement>(null);
  const meaningRef = useRef<HTMLInputElement>(null);
  const listHeadingRef = useRef<HTMLHeadingElement>(null);

  const words = state.custom;

  function submit() {
    const existed = words.some((w) => w.word.toLowerCase() === customWordId(word));
    const err = progress.addCustomWord({ word, meaning, example, ipa });
    setError(err);
    if (err) {
      setStatus("");
      (err === "meaning" ? meaningRef : wordRef).current?.focus();
      return;
    }
    const shown = word.replace(/\s+/g, " ").trim();
    setStatus(existed ? `Đã cập nhật “${shown}”.` : `Đã thêm “${shown}” vào lịch ôn.`);
    setWord("");
    setMeaning("");
    setExample("");
    setIpa("");
    wordRef.current?.focus();
  }

  function remove(w: string) {
    progress.removeCustomWord(w);
    setError(null);
    setStatus(`Đã xóa “${w}”.`);
    listHeadingRef.current?.focus();
  }

  const errorFor = (field: "word" | "meaning") => (error === field || (field === "word" && error === "full") ? "custom-word-error" : undefined);

  const list: ReactNode = (
    <ul className="mt-4 divide-y divide-ink/15">
      {words.map((w) => {
        const card = state.srs[customWordKey(w.word)];
        return (
          <li key={w.word} className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2 py-3">
            <div className="min-w-0 flex-1 basis-56">
              <p className="break-words">
                <span lang="en" className="font-display text-lg font-bold">{w.word}</span>
                {w.ipa && <span className="ml-2 text-ink-soft">{w.ipa}</span>}
                <span>: {w.meaning}</span>
              </p>
              {w.example && <p lang="en" className="mt-1 break-words italic text-ink-soft">“{w.example}”</p>}
              <p className="mt-1 text-sm text-ink-soft">{card ? `Ôn lại ngày ${dueLabel(card.due)}` : "Chưa ôn lần nào"}</p>
            </div>
            <button
              type="button"
              className="inline-flex min-h-11 items-center gap-1.5 rounded-full border-2 border-ink bg-card px-3 text-sm font-semibold hover:bg-sun-soft"
              aria-label={`Xóa từ ${w.word}`}
              onClick={() => remove(w.word)}
            >
              <Trash2 className="size-4" aria-hidden />
              Xóa
            </button>
          </li>
        );
      })}
    </ul>
  );

  return (
    <section id="tu-cua-toi" aria-labelledby="tu-cua-toi-heading" className="clay mt-12 scroll-mt-24 p-6 sm:p-8">
      <h2 id="tu-cua-toi-heading" className="font-display text-3xl font-extrabold">Thêm từ của bạn</h2>
      <p className="mt-2 text-ink-soft">
        Từ gặp khi đọc, hay từ trong Oxford 3000/5000, Academic Word List: thêm vào đây để ôn cùng lịch. Từ mới vào buổi ôn tối đa{" "}
        {NEW_PER_DAY} từ mỗi ngày, tính chung với từ của khóa học.
      </p>

      {!ready ? (
        <div className="mt-6 h-64 animate-pulse rounded-xl bg-card" aria-hidden />
      ) : (
        <>
          <form
            className="mt-6 grid gap-5 sm:grid-cols-2"
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
          >
            <label className="block">
              <span className="block font-semibold">
                Từ hoặc cụm từ <span className="font-normal text-ink-soft">(bắt buộc)</span>
              </span>
              <input
                ref={wordRef}
                value={word}
                onChange={(e) => {
                  setWord(e.target.value);
                  if (error !== "meaning") setError(null);
                }}
                lang="en"
                maxLength={CUSTOM_LIMITS.word}
                autoCapitalize="none"
                autoComplete="off"
                spellCheck={false}
                required
                aria-invalid={errorFor("word") ? true : undefined}
                aria-describedby={errorFor("word")}
                className={fieldClass}
              />
            </label>
            <label className="block">
              <span className="block font-semibold">
                Nghĩa tiếng Việt <span className="font-normal text-ink-soft">(bắt buộc)</span>
              </span>
              <input
                ref={meaningRef}
                value={meaning}
                onChange={(e) => {
                  setMeaning(e.target.value);
                  if (error === "meaning") setError(null);
                }}
                maxLength={CUSTOM_LIMITS.meaning}
                autoComplete="off"
                required
                aria-invalid={errorFor("meaning") ? true : undefined}
                aria-describedby={errorFor("meaning")}
                className={fieldClass}
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="block font-semibold">
                Câu ví dụ <span className="font-normal text-ink-soft">(không bắt buộc)</span>
              </span>
              <input
                value={example}
                onChange={(e) => setExample(e.target.value)}
                lang="en"
                maxLength={CUSTOM_LIMITS.example}
                autoComplete="off"
                className={fieldClass}
              />
            </label>
            <label className="block">
              <span className="block font-semibold">
                Phiên âm IPA <span className="font-normal text-ink-soft">(không bắt buộc)</span>
              </span>
              <input
                value={ipa}
                onChange={(e) => setIpa(e.target.value)}
                maxLength={CUSTOM_LIMITS.ipa}
                placeholder="/ˈwɜːd/"
                autoCapitalize="none"
                autoComplete="off"
                spellCheck={false}
                className={fieldClass}
              />
            </label>
            <div className="flex items-end">
              <button type="submit" className="btn btn-primary">
                <Plus className="size-5" aria-hidden />
                Thêm vào lịch ôn
              </button>
            </div>
          </form>

          <div role="alert">
            {error && (
              <p id="custom-word-error" className="mt-4 rounded-xl border-2 border-ink bg-sun-soft px-4 py-2.5 font-semibold">
                {ERRORS[error]}
              </p>
            )}
          </div>
          <div role="status">
            {status && <p className="mt-4 rounded-xl border-2 border-ink bg-leaf-soft px-4 py-2.5 font-semibold">{status}</p>}
          </div>

          <h3 ref={listHeadingRef} tabIndex={-1} className="mt-8 font-display text-2xl font-extrabold">
            Từ của tôi <span className="text-base font-semibold text-ink-soft">({words.length} từ)</span>
          </h3>
          {words.length === 0 ? (
            <p className="mt-2 text-ink-soft">Bạn chưa thêm từ nào.</p>
          ) : words.length > FOLD_AT ? (
            <details className="mt-3 rounded-xl border-[2.5px] border-ink bg-card px-4 py-3">
              <summary className="cursor-pointer font-semibold">Xem cả {words.length} từ</summary>
              {list}
            </details>
          ) : (
            list
          )}
        </>
      )}
    </section>
  );
}
