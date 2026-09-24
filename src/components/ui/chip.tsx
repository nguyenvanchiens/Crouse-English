import Link from "next/link";
import type { ReactNode } from "react";

export function Chip({ href, active, children }: { href: string; active: boolean; children: ReactNode }) {
  return (
    <Link
      href={href}
      scroll={false}
      aria-current={active ? "true" : undefined}
      className={`inline-flex min-h-11 items-center rounded-full border-[2.5px] border-ink px-4 font-semibold transition-colors ${
        active ? "bg-ink text-card" : "bg-card hover:bg-sun-soft"
      }`}
    >
      {children}
    </Link>
  );
}
