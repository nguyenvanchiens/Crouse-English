"use client";

import { useState } from "react";
import { ExternalLink, Play } from "lucide-react";
import type { LessonMedia } from "@/content/types";

const LANG_NOTE: Record<LessonMedia["lang"], string> = {
  vi: "Giảng bằng tiếng Việt.",
  en: "Giảng bằng tiếng Anh, bật phụ đề (CC) nếu cần.",
};

/**
 * A lesson's video or outside link, shown with its lecture. A video loads only when the learner presses play,
 * so the lesson page stays light and nothing is sent to YouTube before that.
 */
export function LessonMediaCard({ media }: { media: LessonMedia }) {
  const [playing, setPlaying] = useState(false);

  if (media.kind === "link") {
    return (
      <a
        href={media.url}
        target="_blank"
        rel="noopener noreferrer"
        className="clay flex items-start gap-4 p-5 transition-transform duration-200 hover:-translate-y-0.5"
      >
        <span className="grid size-11 shrink-0 place-items-center rounded-full border-2 border-ink bg-sky" aria-hidden>
          <ExternalLink className="size-5" />
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-semibold text-ink-soft">Học thêm: {media.source}</span>
          <span className="block font-display text-lg font-bold underline-offset-4 hover:underline">{media.title}</span>
          <span className="mt-1 block text-ink-soft">
            {media.note} {LANG_NOTE[media.lang]}
          </span>
          <span className="sr-only"> (mở trang mới)</span>
        </span>
      </a>
    );
  }

  const id = encodeURIComponent(media.youtubeId);
  return (
    <figure className="clay overflow-hidden p-0">
      <div className="aspect-video w-full bg-ink">
        {playing ? (
          <iframe
            className="size-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&cc_load_policy=1`}
            title={media.title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <button type="button" onClick={() => setPlaying(true)} className="group relative block size-full" aria-label={`Phát video: ${media.title}`}>
            {/* a plain img: the static export has no image optimiser, and the thumbnail is YouTube's own */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" className="size-full object-cover opacity-90 group-hover:opacity-100" />
            <span className="absolute inset-0 grid place-items-center">
              <span className="grid size-16 place-items-center rounded-full border-[2.5px] border-ink bg-tangerine shadow-[0_4px_0_0_var(--color-ink)] transition-transform group-hover:scale-105">
                <Play className="ml-1 size-7 fill-ink" aria-hidden />
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <span className="min-w-0 sm:flex-1">
          <span className="block text-sm font-semibold text-ink-soft">
            Video minh họa, {media.source}, {media.minutes} phút
          </span>
          <span className="block font-display text-lg font-bold">{media.title}</span>
          <span className="mt-1 block text-ink-soft">
            {media.note} {LANG_NOTE[media.lang]}
          </span>
        </span>
        <a
          href={`https://www.youtube.com/watch?v=${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 shrink-0 items-center gap-1 self-start text-sm font-semibold underline underline-offset-4"
        >
          Mở trên YouTube
          <ExternalLink className="size-4" aria-hidden />
          <span className="sr-only"> (mở trang mới)</span>
        </a>
      </figcaption>
    </figure>
  );
}
