"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Crosshair, Ear, Lock, Puzzle, Shuffle, SquarePen, Star, Trophy, type LucideIcon } from "lucide-react";
import type { GameId } from "@/lib/game";
import type { PathUnit } from "@/lib/game-data";
import { nodeStatuses, pathNodes, type NodeStatus } from "@/lib/game-path";
import { usePathStars } from "@/lib/path-store";
import { useProgress } from "@/lib/progress";
import { ProgressBar } from "@/components/ui/progress-bar";
import { GAME_NAMES } from "./game-ui";

export const GAME_ICONS: Record<GameId, LucideIcon> = { "ghep-cap": Puzzle, "nghe-chon": Ear, "dien-tu": SquarePen, "xep-cau": Shuffle };
/** the short names under the circles, so four fit side by side on a phone */
const SHORT: Record<GameId, string> = { "ghep-cap": "Ghép cặp", "nghe-chon": "Nghe", "dien-tu": "Điền từ", "xep-cau": "Xếp câu" };
/** each lesson's row of games sways a little left and right, like a winding path */
const SWAY = ["", "sm:translate-x-10", "sm:translate-x-16", "sm:translate-x-10", "", "sm:-translate-x-10", "sm:-translate-x-16", "sm:-translate-x-10"];

const unitHref = (level: string, unit: string, game: GameId) => `/tro-choi/lo-trinh/${level}/${unit}?tro=${game}`;

/**
 * A level's path, Duolingo style: lessons in order, each a row of up to four games, each game opening when
 * the one before is passed. Chapters fold away except the one being played, and a bar under the site header
 * jumps between chapters and to the game to play next, so the path never needs a long scroll.
 */
export function PathMap({ level, units }: { level: string; units: PathUnit[] }) {
  const { ready } = useProgress();
  const stars = usePathStars();
  const nodes = pathNodes(level, units);
  const status = nodeStatuses(nodes, ready ? stars : {});
  const starsOf = (u: string, g: GameId) => stars[`${level}/${u}/${g}`] ?? 0;
  const unitDone = (u: PathUnit) => u.games.every((g) => starsOf(u.slug, g) > 0);
  const doneUnits = ready ? units.filter(unitDone).length : 0;
  const allDone = ready && doneUnits === units.length;

  // where each unit's games start in the path, for their status
  const starts = units.map((_, ui) => units.slice(0, ui).reduce((n, x) => n + x.games.length, 0));
  const chapters = units.reduce<{ title: string; units: number[] }[]>((acc, u, ui) => {
    if (acc.length && acc[acc.length - 1].title === u.chapter) acc[acc.length - 1].units.push(ui);
    else acc.push({ title: u.chapter, units: [ui] });
    return acc;
  }, []);
  const currentIndex = ready ? status.indexOf("current") : -1;
  const currentUnit = currentIndex < 0 ? -1 : starts.findLastIndex((s) => s <= currentIndex);
  const currentChapter = chapters.findIndex((c) => c.units.includes(currentUnit));

  // chapters the learner opened or closed by hand; otherwise only the current one is open
  const [toggled, setToggled] = useState<Record<number, boolean>>({});
  const isOpen = (ci: number) => toggled[ci] ?? ci === currentChapter;
  const setOpen = (ci: number, open: boolean) => setToggled((t) => ({ ...t, [ci]: open }));

  const currentRef = useRef<HTMLAnchorElement>(null);
  const scrolled = useRef(false);
  // the bar sticks right under the site header, whose height changes with the screen width
  const [headerHeight, setHeaderHeight] = useState(79);
  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;
    const ro = new ResizeObserver(() => setHeaderHeight(Math.round(header.getBoundingClientRect().height)));
    ro.observe(header);
    return () => ro.disconnect();
  }, []);
  const goToCurrent = () => {
    if (currentChapter >= 0) setOpen(currentChapter, true);
    requestAnimationFrame(() => currentRef.current?.scrollIntoView({ block: "center", behavior: "smooth" }));
  };
  // coming back to a path already under way: start at the game to play next
  useEffect(() => {
    if (scrolled.current || currentIndex < 0) return;
    scrolled.current = true;
    if (currentIndex > 3) currentRef.current?.scrollIntoView({ block: "center" });
  }, [currentIndex]);

  return (
    <div>
      <div className="clay p-5">
        <p className="font-semibold">Đã qua {doneUnits}/{units.length} bài</p>
        <ProgressBar className="mt-2" value={(doneUnits / Math.max(units.length, 1)) * 100} label={`Đã qua ${doneUnits}/${units.length} bài`} />
      </div>

      <nav aria-label="Đi nhanh trong lộ trình" style={{ top: headerHeight }} className="sticky z-20 -mx-4 mt-6 border-b-2 border-ink/15 bg-sky/95 px-4 py-2 backdrop-blur sm:-mx-6 sm:px-6">
        <ul className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {currentIndex >= 0 && (
            <li className="shrink-0">
              <button type="button" onClick={goToCurrent} className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border-2 border-ink bg-tangerine px-3 text-sm font-extrabold">
                <Crosshair className="size-4" aria-hidden />
                Bài đang học
              </button>
            </li>
          )}
          {chapters.map((c, ci) => {
            const done = ready && c.units.every((ui) => unitDone(units[ui]));
            return (
              <li key={c.title} className="shrink-0">
                <a
                  href={`#chuong-${ci + 1}`}
                  onClick={() => setOpen(ci, true)}
                  className={`inline-flex min-h-11 items-center gap-1 rounded-xl border-2 border-ink px-3 text-sm font-bold ${ci === currentChapter ? "bg-sun" : "bg-card"}`}
                  aria-label={`Chương ${ci + 1}: ${c.title}${done ? ", đã qua" : ""}`}
                >
                  {done && <Check className="size-4" aria-hidden />}
                  Chương {ci + 1}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-6 space-y-4">
        {chapters.map((c, ci) => {
          const passed = ready ? c.units.filter((ui) => unitDone(units[ui])).length : 0;
          const open = isOpen(ci);
          return (
            <section key={c.title} id={`chuong-${ci + 1}`} aria-labelledby={`chuong-${ci + 1}-title`} className="scroll-mt-36 rounded-[1.5rem] border-[2.5px] border-ink bg-card">
              <h2 id={`chuong-${ci + 1}-title`}>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`chuong-${ci + 1}-body`}
                  onClick={() => setOpen(ci, !open)}
                  className={`flex min-h-14 w-full items-center gap-3 rounded-[1.3rem] px-5 py-3 text-left ${ci === currentChapter ? "bg-sun-soft" : "bg-grape-soft"}`}
                >
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-ink-soft">Chương {ci + 1}</span>
                    <span className="block font-display text-xl font-extrabold">{c.title}</span>
                  </span>
                  <span className="shrink-0 text-sm font-semibold">
                    {passed}/{c.units.length} bài
                  </span>
                  <ChevronDown className={`size-5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden />
                </button>
              </h2>
              <ol id={`chuong-${ci + 1}-body`} hidden={!open} className="space-y-6 px-2 pb-6 pt-4 sm:px-5">
                {c.units.map((ui) => {
                  const u = units[ui];
                  return (
                    <li key={u.slug} id={`bai-${u.slug}`} className="scroll-mt-36">
                      <h3 className="text-center font-display text-base font-bold sm:text-lg">
                        Bài {ui + 1}: {u.title}
                      </h3>
                      <ul className={`mt-3 flex justify-center gap-1.5 sm:gap-4 ${SWAY[ui % SWAY.length]}`}>
                        {u.games.map((g, gi) => {
                          const k = starts[ui] + gi;
                          const s: NodeStatus = status[k];
                          const got = starsOf(u.slug, g);
                          const Icon = GAME_ICONS[g];
                          const name = `Bài ${ui + 1}, ${GAME_NAMES[g]}`;
                          const circle = `grid size-14 place-items-center rounded-full border-[3px] border-ink sm:size-16 ${
                            s === "done" ? "bg-leaf-soft" : s === "current" ? "bg-tangerine shadow-[0_4px_0_0_var(--color-ink)]" : "bg-ink/10 text-ink/45"
                          }`;
                          return (
                            <li key={g} className="flex w-[3.75rem] flex-col items-center sm:w-20">
                              {s === "locked" ? (
                                <span className={circle} role="img" aria-label={`${name}: chưa mở, qua bài trước để mở`}>
                                  <Lock className="size-6" aria-hidden />
                                </span>
                              ) : (
                                <Link
                                  ref={s === "current" ? currentRef : undefined}
                                  href={unitHref(level, u.slug, g)}
                                  className={`${circle} hover:-translate-y-0.5 motion-safe:transition-transform ${s === "current" ? "motion-safe:animate-[bounce_2s_ease-in-out_infinite]" : ""}`}
                                  aria-label={`${name}${s === "done" ? `: đã qua, ${got} sao` : ": chơi"}`}
                                >
                                  <Icon className="size-7" aria-hidden />
                                </Link>
                              )}
                              <span className={`mt-1 text-center text-xs font-semibold leading-tight sm:text-sm ${s === "current" ? "font-extrabold" : ""}`}>{SHORT[g]}</span>
                              <span className="flex h-4 gap-0.5" aria-hidden>
                                {s === "done" && [1, 2, 3].map((n) => <Star key={n} className={`size-3.5 ${n <= got ? "fill-sun text-ink" : "text-ink/25"}`} />)}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ol>
            </section>
          );
        })}
      </div>

      <div className={`clay mt-10 p-6 text-center ${allDone ? "bg-sun-soft" : ""}`}>
        <Trophy className={`mx-auto size-12 ${allDone ? "text-tangerine-deep" : "text-ink/30"}`} aria-hidden />
        <p className="mt-2 font-display text-2xl font-extrabold">{allDone ? `Chinh phục xong ${level.toUpperCase()}!` : `Đích đến: chinh phục ${level.toUpperCase()}`}</p>
        <p className="mt-1 text-ink-soft">{allDone ? "Chơi lại các bài để lấy đủ 3 sao, hoặc sang cấp tiếp theo." : "Qua hết các bài để nhận cúp của cấp này."}</p>
      </div>
    </div>
  );
}
