"use client";

import { Check } from "lucide-react";
import type { VideoStep } from "@/content/types";

export function StepVideo({ step, done, onComplete }: { step: VideoStep; done: boolean; onComplete: () => void }) {
  return (
    <div>
      <div className="clay overflow-hidden p-0">
        <div className="aspect-video w-full bg-ink">
          <iframe
            className="size-full"
            src={`https://www.youtube-nocookie.com/embed/${step.youtubeId}?rel=0`}
            title={step.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-4">
        <button type="button" className="btn btn-ghost" onClick={onComplete} disabled={done}>
          {done && <Check className="size-5 text-leaf" aria-hidden />}
          Đã xem xong
        </button>
        <p className="text-ink-soft">{step.title}</p>
      </div>
    </div>
  );
}
