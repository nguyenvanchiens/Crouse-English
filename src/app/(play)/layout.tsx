import type { ReactNode } from "react";

/** Games are played full screen, as in a lesson: no site menu or footer; the game's own ✕ leads back. */
export default function PlayLayout({ children }: { children: ReactNode }) {
  return <main className="flex min-h-full flex-1 flex-col">{children}</main>;
}
