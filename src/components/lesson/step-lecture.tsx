"use client";

import { Check, Lightbulb, TriangleAlert, Volume2 } from "lucide-react";
import type { LectureBlock, LectureStep } from "@/content/types";
import { parseBold } from "@/lib/rich-text";
import { speak, useSpeechSupport } from "@/lib/speech";

function Rich({ text }: { text: string }) {
  return (
    <>
      {parseBold(text).map((r, i) =>
        r.bold ? (
          <strong key={i} className="font-bold text-ink">
            {r.text}
          </strong>
        ) : (
          <span key={i}>{r.text}</span>
        ),
      )}
    </>
  );
}

function Block({ block, tts }: { block: LectureBlock; tts: boolean }) {
  switch (block.kind) {
    case "text":
      return (
        <p className="max-w-[68ch] text-lg leading-relaxed">
          <Rich text={block.body} />
        </p>
      );
    case "table":
      return (
        <div className="overflow-x-auto rounded-2xl border-[2.5px] border-ink bg-card">
          <table className="w-full min-w-[28rem] border-collapse text-left">
            <thead className="bg-sun-soft">
              <tr>
                {block.headers.map((h) => (
                  <th key={h} scope="col" className="border-b-2 border-ink px-4 py-2.5 font-display font-bold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r} className="border-b border-ink/15 last:border-0">
                  {row.map((cell, c) => (
                    <td key={c} className={`px-4 py-2.5 ${c === 0 ? "font-semibold" : ""}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "example":
      return (
        <div className="flex items-start gap-3 rounded-2xl bg-sky px-4 py-3">
          <button
            type="button"
            onClick={() => speak(block.en, { rate: 0.85 })}
            disabled={!tts}
            aria-label={`Nghe câu: ${block.en}`}
            className="grid size-11 shrink-0 place-items-center rounded-full border-2 border-ink bg-card hover:bg-sun-soft disabled:opacity-50"
          >
            <Volume2 className="size-5" aria-hidden />
          </button>
          <div>
            <p lang="en" className="font-display text-xl font-bold leading-snug">
              {block.en}
            </p>
            <p className="text-ink-soft">{block.vi}</p>
            {block.note && <p className="mt-1 text-sm text-ink-soft">{block.note}</p>}
          </div>
        </div>
      );
    case "tip":
      return (
        <div className="flex gap-3 rounded-2xl border-2 border-ink bg-leaf-soft px-4 py-3">
          <Lightbulb className="mt-0.5 size-5 shrink-0" aria-hidden />
          <p>
            <span className="sr-only">Mẹo: </span>
            <Rich text={block.body} />
          </p>
        </div>
      );
    case "mistake":
      return (
        <div className="rounded-2xl border-2 border-ink bg-card px-4 py-3">
          <p className="flex items-center gap-2 text-sm font-semibold text-ink-soft">
            <TriangleAlert className="size-4 text-tangerine-deep" aria-hidden />
            Lỗi hay gặp
          </p>
          <p lang="en" className="mt-2 text-lg">
            <span className="sr-only">Sai: </span>
            <span className="text-ink-soft line-through decoration-tangerine-deep decoration-2">{block.wrong}</span>
          </p>
          <p lang="en" className="text-lg font-semibold">
            <span className="sr-only">Đúng: </span>
            {block.right}
          </p>
          <p className="mt-1 text-ink-soft">{block.why}</p>
        </div>
      );
  }
}

export function StepLecture({ step, done, onComplete }: { step: LectureStep; done: boolean; onComplete: () => void }) {
  const { tts } = useSpeechSupport();
  return (
    <article className="clay p-6 sm:p-8">
      <h2 className="font-display text-3xl font-extrabold leading-tight">{step.title}</h2>
      <div className="mt-6 space-y-5">
        {step.blocks.map((b, i) => (
          <Block key={i} block={b} tts={tts} />
        ))}
      </div>
      <button type="button" className="btn btn-ghost mt-8" onClick={onComplete} disabled={done}>
        {done && <Check className="size-5 text-leaf" aria-hidden />}
        Đã đọc xong
      </button>
    </article>
  );
}
