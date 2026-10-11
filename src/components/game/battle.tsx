"use client";

import type { ReactNode } from "react";

/**
 * The battle above a game's question: a right answer sends the hero to strike the monster, a wrong one lets
 * the monster strike back; the monster falls when the round is won. Purely decorative (aria-hidden): the
 * game is the same without it, and with reduced motion the strikes don't move (globals.css).
 */
export type BattleEvent = { kind: "hit" | "crit" | "hurt"; key: number } | null;
export type BattleEnd = "win" | "lose" | null;

const INK = "#16213e";

export const MONSTERS: Record<string, { name: string; art: ReactNode }> = {
  a1: {
    name: "Slime Xanh",
    art: (
      <svg viewBox="0 0 100 100" className="size-full">
        <path d="M14 82 C10 52 30 24 50 24 C70 24 90 52 86 82 Z" fill="#7bd88f" stroke={INK} strokeWidth="3.5" strokeLinejoin="round" />
        <ellipse cx="34" cy="40" rx="7" ry="4" fill="#fff" opacity="0.7" />
        <circle cx="38" cy="56" r="7" fill="#fff" stroke={INK} strokeWidth="3" />
        <circle cx="62" cy="56" r="7" fill="#fff" stroke={INK} strokeWidth="3" />
        <circle cx="39" cy="57" r="3" fill={INK} />
        <circle cx="61" cy="57" r="3" fill={INK} />
        <path d="M42 70 Q50 76 58 70" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
        <path d="M14 82 H86" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
      </svg>
    ),
  },
  a2: {
    name: "Nấm Độc",
    art: (
      <svg viewBox="0 0 100 100" className="size-full">
        <path d="M38 56 H62 L66 86 H34 Z" fill="#fff3d6" stroke={INK} strokeWidth="3.5" strokeLinejoin="round" />
        <path d="M12 58 C12 30 32 14 50 14 C68 14 88 30 88 58 Z" fill="#ff5d5d" stroke={INK} strokeWidth="3.5" strokeLinejoin="round" />
        <circle cx="32" cy="38" r="6" fill="#fff" />
        <circle cx="54" cy="28" r="5" fill="#fff" />
        <circle cx="70" cy="44" r="6" fill="#fff" />
        <circle cx="44" cy="68" r="3.5" fill={INK} />
        <circle cx="56" cy="68" r="3.5" fill={INK} />
        <path d="M38 62 L48 64 M62 62 L52 64" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  b1: {
    name: "Bóng Ma",
    art: (
      <svg viewBox="0 0 100 100" className="size-full">
        <path d="M18 88 V46 C18 26 32 12 50 12 C68 12 82 26 82 46 V88 L72 80 L62 88 L50 80 L38 88 L28 80 Z" fill="#e7e3ff" stroke={INK} strokeWidth="3.5" strokeLinejoin="round" />
        <ellipse cx="38" cy="44" rx="6" ry="9" fill={INK} />
        <ellipse cx="62" cy="44" rx="6" ry="9" fill={INK} />
        <ellipse cx="50" cy="64" rx="7" ry="5" fill={INK} />
      </svg>
    ),
  },
  b2: {
    name: "Người Đá",
    art: (
      <svg viewBox="0 0 100 100" className="size-full">
        <rect x="26" y="14" width="48" height="34" rx="6" fill="#a8b3c4" stroke={INK} strokeWidth="3.5" />
        <rect x="16" y="46" width="68" height="40" rx="8" fill="#8f9bb0" stroke={INK} strokeWidth="3.5" />
        <rect x="6" y="50" width="14" height="28" rx="5" fill="#a8b3c4" stroke={INK} strokeWidth="3" />
        <rect x="80" y="50" width="14" height="28" rx="5" fill="#a8b3c4" stroke={INK} strokeWidth="3" />
        <rect x="36" y="26" width="9" height="6" rx="2" fill="#ffd43b" />
        <rect x="55" y="26" width="9" height="6" rx="2" fill="#ffd43b" />
        <path d="M30 60 L44 66 M56 70 L70 62 M40 78 L52 74" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  c1: {
    name: "Rồng Lửa",
    art: (
      <svg viewBox="0 0 100 100" className="size-full">
        <path d="M70 46 C88 30 96 40 92 56 C86 52 80 54 74 58 Z" fill="#ff8a3d" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        <path d="M30 46 C12 30 4 40 8 56 C14 52 20 54 26 58 Z" fill="#ff8a3d" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        <path d="M36 24 L30 8 L44 20 M64 24 L70 8 L56 20" fill="#ffd43b" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
        <path d="M22 60 C22 34 34 20 50 20 C66 20 78 34 78 60 C78 78 66 90 50 90 C34 90 22 78 22 60 Z" fill="#e8483f" stroke={INK} strokeWidth="3.5" />
        <ellipse cx="50" cy="72" rx="16" ry="11" fill="#ffb4a2" stroke={INK} strokeWidth="3" />
        <circle cx="45" cy="72" r="2.5" fill={INK} />
        <circle cx="55" cy="72" r="2.5" fill={INK} />
        <path d="M34 44 L46 50 M66 44 L54 50" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="40" cy="50" r="3" fill="#ffd43b" />
        <circle cx="60" cy="50" r="3" fill="#ffd43b" />
      </svg>
    ),
  },
};

function Hero() {
  return (
    <svg viewBox="0 0 100 100" className="size-full">
      {/* shield */}
      <path d="M14 50 H34 V66 C34 76 24 82 24 82 C24 82 14 76 14 66 Z" fill="#ff8a3d" stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      {/* body */}
      <rect x="32" y="50" width="34" height="32" rx="8" fill="#6c5ce7" stroke={INK} strokeWidth="3.5" />
      <rect x="34" y="82" width="10" height="10" rx="3" fill={INK} />
      <rect x="54" y="82" width="10" height="10" rx="3" fill={INK} />
      {/* head and helmet */}
      <circle cx="49" cy="34" r="17" fill="#ffd9b8" stroke={INK} strokeWidth="3.5" />
      <path d="M31 32 C31 16 67 16 67 32 Z" fill="#c9d3e3" stroke={INK} strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M49 14 L52 6 L56 14" fill="#ff5d5d" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="43" cy="38" r="2.5" fill={INK} />
      <circle cx="56" cy="38" r="2.5" fill={INK} />
      <path d="M45 45 Q50 48 55 45" fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
      {/* sword */}
      <path d="M70 60 L92 22" stroke="#c9d3e3" strokeWidth="6" strokeLinecap="round" />
      <path d="M70 60 L92 22" stroke={INK} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M64 56 L78 64" stroke="#ffd43b" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

/*
 * The hero varies the attack so a round doesn't look the same strike after strike: a plain hit takes turns
 * through four moves, a critical hit (three right answers in a row) through two big ones. The monster
 * answers a wrong answer with a charge or a spit.
 */
const HITS = [
  { hero: "hero-strike", monster: "monster-hit", effect: "slash" },
  { hero: "hero-jump", monster: "monster-knock", effect: "ring" },
  { hero: "hero-dash", monster: "monster-hit", effect: "slash" },
  { hero: "hero-cast", monster: "monster-knock", effect: "orb" },
] as const;
const CRITS = [
  { hero: "hero-spin", monster: "monster-knock", effect: "ring", name: "Xoáy kiếm!" },
  { hero: "hero-combo", monster: "monster-hit", effect: "slash", name: "Liên hoàn trảm!" },
] as const;
const HURTS = [
  { hero: "hero-hurt", monster: "monster-strike", effect: null },
  { hero: "hero-hurt", monster: "battle-bob", effect: "spit" },
] as const;

/** The move a strike plays: chosen in turn from the strike's number, so the same round replays the same way. */
export function battleMove(event: BattleEvent) {
  if (!event) return null;
  if (event.kind === "crit") return { ...CRITS[event.key % CRITS.length], kind: event.kind };
  if (event.kind === "hit") return { ...HITS[event.key % HITS.length], name: null, kind: event.kind };
  return { ...HURTS[event.key % HURTS.length], name: null, kind: event.kind };
}

/** The battle strip: hero left, monster right with its health, the last strike animated. */
export function BattleStage({ level, hp, maxHp, event, end = null, combo = 0 }: { level: string; hp: number; maxHp: number; event: BattleEvent; end?: BattleEnd; combo?: number }) {
  const monster = MONSTERS[level] ?? MONSTERS.a1;
  const shown = end === "win" ? 0 : Math.max(0, hp);
  const k = event?.key ?? 0;
  const move = end === null ? battleMove(event) : null;
  const strike = move?.kind === "hit" || move?.kind === "crit";
  const crit = move?.kind === "crit";
  return (
    <div aria-hidden className="relative mt-3 overflow-hidden rounded-2xl border-[2.5px] border-ink bg-gradient-to-b from-sky-deep to-sky">
      {/* ground */}
      <div className="absolute inset-x-0 bottom-0 h-3 border-t-[2.5px] border-ink bg-leaf-soft sm:h-5" />
      {/* a magic orb from the hero, or the monster's spit */}
      {move?.effect === "orb" && <span key={`orb-${k}`} className="orb-fly pointer-events-none absolute top-[55%] z-10 size-5 rounded-full border-2 border-ink bg-grape shadow-[0_0_12px_4px_#a99cff]" />}
      {move?.effect === "spit" && <span key={`spit-${k}`} className="orb-back pointer-events-none absolute top-[60%] z-10 size-5 rounded-full border-2 border-ink bg-[#7bd88f] shadow-[0_0_10px_3px_#b7f0c3]" />}
      <div className="relative flex h-28 items-end justify-between pb-2 pl-3 pr-5 sm:h-36 sm:px-10 sm:pb-3 [--reach:clamp(60px,22vw,180px)]">
        {/* hero */}
        <div className="relative z-10 size-14 sm:size-24">
          <div key={`hero-${k}-${end}`} className={`size-full ${end === "lose" ? "hero-fall" : move ? move.hero : "battle-bob"}`}>
            <Hero />
          </div>
          {combo >= 3 && end === null && (
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full border-2 border-ink bg-sun px-2 text-xs font-extrabold whitespace-nowrap">🔥 x{combo}</span>
          )}
        </div>

        {/* monster with its health */}
        <div className="relative flex flex-col items-end">
          <div className="mb-1 w-24 sm:w-36">
            <div className="flex items-baseline justify-between text-xs font-extrabold">
              <span className="truncate">{monster.name}</span>
              <span>
                {shown}/{maxHp}
              </span>
            </div>
            <div className="h-3 overflow-hidden rounded-full border-2 border-ink bg-card">
              <div className="h-full rounded-full bg-[#e8483f] transition-[width] duration-500" style={{ width: `${maxHp ? (shown / maxHp) * 100 : 0}%` }} />
            </div>
          </div>
          <div className="relative size-14 sm:size-24">
            <div key={`mon-${k}-${end}`} className={`size-full ${end === "win" ? "monster-die" : move ? move.monster : "battle-bob"}`}>
              {monster.art}
            </div>
            {strike && move?.effect === "slash" && (
              <span key={`slash-${k}`} className={`slash pointer-events-none absolute left-1/2 top-1/2 -ml-10 h-2 w-20 rounded-full ${crit ? "bg-tangerine" : "bg-card"} shadow-[0_0_0_2px_var(--color-ink)]`} />
            )}
            {strike && move?.effect === "ring" && (
              <span key={`ring-${k}`} className={`impact-ring pointer-events-none absolute left-1/2 top-1/2 size-20 rounded-full border-4 ${crit ? "border-tangerine" : "border-sun"}`} />
            )}
            {strike && (
              <span key={`dmg-${k}`} className={`damage-float pointer-events-none absolute left-0 top-0 font-display font-extrabold whitespace-nowrap text-[#e8483f] [text-shadow:0_2px_0_#fff] ${crit ? "text-xl sm:text-2xl" : "text-2xl"}`}>
                {move?.name ?? "-1"}
              </span>
            )}
          </div>
        </div>

        {end === "win" && (
          <span className="victory-pop absolute left-1/2 top-[42%] -translate-x-1/2 rounded-xl border-[2.5px] border-ink bg-sun px-3 py-1 font-display text-lg font-extrabold whitespace-nowrap">Hạ gục {monster.name}!</span>
        )}
        {end === "lose" && (
          <span className="victory-pop absolute left-1/2 top-[42%] -translate-x-1/2 rounded-xl border-[2.5px] border-ink bg-card px-3 py-1 font-display text-lg font-extrabold whitespace-nowrap">Thua rồi, thử lại nhé!</span>
        )}
      </div>
    </div>
  );
}
