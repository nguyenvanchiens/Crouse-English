"use client";

import { Check, GraduationCap, Lightbulb, ListChecks, TriangleAlert, Volume2 } from "lucide-react";
import type { LectureBlock, LectureStep, LessonMedia } from "@/content/types";
import { LessonMediaCard } from "./lesson-media";
import { parseBold } from "@/lib/rich-text";
import { isEnglish, speak, useSpeechSupport } from "@/lib/speech";

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

/** English inside a table or a correction: tap it to hear it. Vietnamese and IPA stay plain text. */
function Hear({ text, tts }: { text: string; tts: boolean }) {
  if (!tts || !isEnglish(text)) return <>{text}</>;
  return (
    <button
      type="button"
      lang="en"
      onClick={() => speak(text, { rate: 0.85 })}
      className="-my-2 cursor-pointer py-2 text-left underline decoration-ink/30 decoration-dotted decoration-2 underline-offset-4 hover:text-tangerine-deep hover:decoration-tangerine-deep"
    >
      {text}
      <span className="sr-only">, bấm để nghe</span>
    </button>
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
    case "table": {
      // Three or more columns don't fit a phone: there each row becomes a small card, its cells labelled
      // with their column (the header row stays for screen readers). Two columns stay a table everywhere.
      const stack = block.headers.length >= 3;
      return (
        <div className="overflow-hidden rounded-2xl border-[2.5px] border-ink bg-card">
          <table className={`w-full border-collapse text-left ${stack ? "max-sm:block" : ""}`}>
            <thead className={`bg-sun-soft ${stack ? "max-sm:sr-only" : ""}`}>
              <tr>
                {block.headers.map((h, i) => (
                  <th key={i} scope="col" className="border-b-2 border-ink px-4 py-2.5 font-display font-bold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={stack ? "max-sm:block" : ""}>
              {block.rows.map((row, r) => (
                <tr key={r} className={`border-b border-ink/15 last:border-0 ${stack ? "max-sm:block max-sm:px-4 max-sm:py-3" : ""}`}>
                  {row.map((cell, c) => (
                    <td
                      key={c}
                      data-label={block.headers[c]}
                      className={`px-4 py-2.5 ${c === 0 ? "font-semibold" : ""} ${
                        stack
                          ? c === 0
                            ? "max-sm:block max-sm:px-0 max-sm:pb-1 max-sm:pt-0 max-sm:font-display max-sm:text-lg max-sm:font-bold"
                            : "max-sm:flex max-sm:gap-3 max-sm:px-0 max-sm:py-0.5 max-sm:before:w-[38%] max-sm:before:shrink-0 max-sm:before:text-sm max-sm:before:font-semibold max-sm:before:leading-6 max-sm:before:text-ink-soft max-sm:before:content-[attr(data-label)]"
                          : ""
                      }`}
                    >
                      <Hear text={cell} tts={tts} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    case "example":
      return (
        // white on a phone, where the lecture has no card of its own and sits on the sky-blue page
        <div className="flex items-start gap-3 rounded-2xl bg-card px-4 py-3 sm:bg-sky">
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
    case "summary":
      return (
        <section className="rounded-2xl border-[2.5px] border-ink bg-sun-soft px-5 py-4" aria-label="Ghi nhớ">
          <p className="flex items-center gap-2 font-display text-lg font-bold">
            <ListChecks className="size-5" aria-hidden />
            Ghi nhớ
          </p>
          <ul className="mt-2 list-disc space-y-1.5 pl-6 leading-relaxed">
            {block.points.map((pt, i) => (
              <li key={i}>
                <Rich text={pt} />
              </li>
            ))}
          </ul>
        </section>
      );
    case "teacher":
      return (
        <aside className="rounded-2xl border-[2.5px] border-ink bg-grape-soft px-5 py-4">
          <p className="flex items-center gap-2 font-display font-bold">
            <GraduationCap className="size-5" aria-hidden />
            Kinh nghiệm của thầy cô
          </p>
          <p className="mt-2 leading-relaxed">
            <Rich text={block.body} />
          </p>
        </aside>
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
            <Hear text={block.right} tts={tts} />
          </p>
          <p className="mt-1 text-ink-soft">{block.why}</p>
        </div>
      );
  }
}

/** A lecture's title and blocks; shared by the lesson player and the grammar handbook. */
export function LectureContent({ step, headingLevel = 2 }: { step: LectureStep; headingLevel?: 1 | 2 }) {
  const { tts } = useSpeechSupport();
  const Heading = headingLevel === 1 ? "h1" : "h2";
  return (
    <>
      <Heading className="font-display text-3xl font-extrabold leading-tight">{step.title}</Heading>
      <div className="mt-6 space-y-5">
        {step.blocks.map((b, i) => (
          <Block key={i} block={b} tts={tts} />
        ))}
      </div>
    </>
  );
}

export function StepLecture({ step, media, done, onComplete }: { step: LectureStep; media?: LessonMedia; done: boolean; onComplete: () => void }) {
  return (
    <div className="space-y-8">
      {/* on a phone the lecture sits straight on the page: a frame inside the page's own margins would leave a narrow column */}
      {/* .clay spelled out: a component class takes no breakpoint variant */}
      <article className="sm:rounded-[var(--radius-clay)] sm:border-[2.5px] sm:border-ink sm:bg-card sm:p-8 sm:shadow-[var(--shadow-clay)]">
        <LectureContent step={step} />
        <button type="button" className={`btn mt-8 w-full sm:w-auto ${done ? "btn-ghost" : "btn-primary"}`} onClick={onComplete} disabled={done}>
          {done && <Check className="size-5 text-leaf" aria-hidden />}
          {done ? "Đã đọc xong" : "Tôi đã đọc xong"}
        </button>
      </article>
      {/* the lesson's own explanation comes first; an outside video is there to go further */}
      {media && (
        <section aria-label="Học thêm">
          <h3 className="mb-3 font-display text-xl font-bold">Xem thêm</h3>
          <LessonMediaCard media={media} />
        </section>
      )}
    </div>
  );
}
