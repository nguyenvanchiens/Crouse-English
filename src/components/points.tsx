"use client";

import Link from "next/link";
import { Bird, Cat, Coins, Crown, Mountain, Rocket, Sun, UserRound, type LucideIcon } from "lucide-react";
import type { PointEntry } from "@/lib/points";
import { balance } from "@/lib/points";
import { useProgress } from "@/lib/progress";

export const AVATAR_ICON: Record<string, { icon: LucideIcon; tone: string }> = {
  "avatar-owl": { icon: Bird, tone: "bg-grape-soft" },
  "avatar-cat": { icon: Cat, tone: "bg-sun" },
  "avatar-sun": { icon: Sun, tone: "bg-sun-soft" },
  "avatar-mountain": { icon: Mountain, tone: "bg-leaf-soft" },
  "avatar-rocket": { icon: Rocket, tone: "bg-sky-deep" },
  "avatar-crown": { icon: Crown, tone: "bg-tangerine" },
};

export function Avatar({ id, size = "size-14" }: { id: string | null; size?: string }) {
  const a = id ? AVATAR_ICON[id] : undefined;
  const Icon = a?.icon ?? UserRound;
  return (
    <span className={`grid ${size} shrink-0 place-items-center rounded-full border-[2.5px] border-ink ${a?.tone ?? "bg-card"}`} aria-hidden>
      <Icon className="size-1/2" />
    </span>
  );
}

/** Points balance in the header; links to the rewards shop. */
export function PointsPill() {
  const { state, ready } = useProgress();
  const n = ready ? balance(state.points) : 0;
  return (
    <Link
      href="/doi-qua"
      aria-label={`Điểm học của bạn: ${n}. Mở trang đổi quà`}
      title="Điểm học, bấm để đổi quà"
      className="inline-flex min-h-11 items-center gap-1.5 rounded-full border-2 border-ink bg-card px-3 font-display font-bold hover:bg-sun-soft"
    >
      <Coins className="size-5 text-tangerine-deep" aria-hidden />
      <span className="tabular-nums">{n.toLocaleString("vi-VN")}</span>
    </Link>
  );
}

/** "+35 điểm" with the reasons, shown after finishing something. */
export function PointsEarned({ entries }: { entries: PointEntry[] }) {
  // the log is newest-first; list the reasons in the order they happened
  const gained = entries.filter((e) => e.amount > 0).reverse();
  const total = gained.reduce((n, e) => n + e.amount, 0);
  if (total === 0) return null;
  return (
    <div role="status" className="card-in mx-auto mt-5 max-w-md rounded-2xl border-[2.5px] border-ink bg-sun-soft px-5 py-4 text-left">
      <p className="flex items-center gap-2 font-display text-2xl font-extrabold">
        <Coins className="size-6 text-tangerine-deep" aria-hidden />+{total} điểm
      </p>
      <ul className="mt-1 text-ink-soft">
        {gained.map((e, i) => (
          <li key={i}>
            {e.reason}: +{e.amount}
          </li>
        ))}
      </ul>
      <Link href="/doi-qua" className="mt-2 inline-block font-semibold underline underline-offset-4">Đổi quà</Link>
    </div>
  );
}
