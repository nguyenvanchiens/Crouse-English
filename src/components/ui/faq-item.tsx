import { Plus } from "lucide-react";

/** One question of a FAQ list: a quiet row that opens in place (a native <details>, so no script is needed). */
export function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="clay-soft group open:bg-card">
      <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-[1.25rem] px-5 py-4 font-display text-lg font-bold leading-snug sm:px-6 sm:text-xl [&::-webkit-details-marker]:hidden">
        {q}
        <span
          aria-hidden
          className="grid size-8 shrink-0 place-items-center rounded-full border-2 border-ink bg-sun transition-transform duration-200 group-open:rotate-45"
        >
          <Plus className="size-4" strokeWidth={3} />
        </span>
      </summary>
      <p className="max-w-[68ch] px-5 pb-5 text-ink-soft sm:px-6 sm:pb-6">{a}</p>
    </details>
  );
}
