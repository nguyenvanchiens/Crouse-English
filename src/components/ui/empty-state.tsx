import type { ReactNode } from "react";

export function EmptyState({ title, body, children }: { title: string; body: string; children?: ReactNode }) {
  return (
    <div className="clay mx-auto max-w-2xl px-6 py-12 text-center sm:px-10">
      <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl">{title}</h2>
      <p className="mx-auto mt-3 max-w-lg text-lg text-ink-soft">{body}</p>
      {children && <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>}
    </div>
  );
}
