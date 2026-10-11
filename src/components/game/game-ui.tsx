"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight, Check, Flame, Heart, RotateCcw, Sparkles, Star, X } from "lucide-react";
import { HEARTS, roundXp } from "@/lib/game";
import { PASS, starsFor } from "@/lib/game-path";
import { recordStars } from "@/lib/path-store";
import { POINTS } from "@/lib/points";
import { todayKey } from "@/lib/progress-core";
import { progress, useProgress } from "@/lib/progress";
import { addSeen } from "@/lib/seen";
import { ProgressBar } from "@/components/ui/progress-bar";
import { BattleStage, type BattleEvent } from "./battle";

/** A game played as a step of the path: where its stars go, and where to go next. */
export interface PathInfo { id: string; nextHref: string | null; mapHref: string }

export const GAME_NAMES: Record<string, string> = {
  "ghep-cap": "Ghép cặp từ",
  "xep-cau": "Xếp câu",
  "nghe-chon": "Nghe và chọn",
  "dien-tu": "Điền từ nhanh",
};

/** The running score of a round: questions done, hearts left, answers right, the current run of right answers. */
export function useSession(total: number, withHearts = true) {
  const [index, setIndex] = useState(0);
  const [hearts, setHearts] = useState(HEARTS);
  const [correct, setCorrect] = useState(0);
  const [combo, setCombo] = useState(0);
  const [best, setBest] = useState(0);
  // the last answer as a strike in the battle: a third right answer in a row is a critical hit
  const [event, setEvent] = useState<BattleEvent>(null);
  const record = (ok: boolean) => {
    setEvent((e) => ({ kind: ok ? (combo + 1 >= 3 ? "crit" : "hit") : "hurt", key: (e?.key ?? 0) + 1 }));
    if (ok) {
      setCorrect((n) => n + 1);
      setCombo((c) => {
        setBest((b) => Math.max(b, c + 1));
        return c + 1;
      });
    } else {
      setCombo(0);
      if (withHearts) setHearts((h) => h - 1);
    }
  };
  const outOfHearts = withHearts && hearts <= 0;
  // the round ends on "Tiếp tục" after the last heart, so the right answer is still shown first
  const [ended, setEnded] = useState(false);
  const next = () => (outOfHearts ? setEnded(true) : setIndex((i) => i + 1));
  return { index, next, hearts, correct, combo, best, record, event, done: index >= total || ended, outOfHearts };
}

/**
 * The top of a game, kept in view while the question scrolls: exit, progress, hearts and the battle. On a
 * phone the question and its options are taller than the screen, and the strike must still be seen.
 */
export function GameTop({ children }: { children: ReactNode }) {
  return <div className="sticky top-0 z-20 -mx-4 bg-sky/95 px-4 pb-2 pt-2 backdrop-blur sm:-mx-6 sm:px-6">{children}</div>;
}

export function GameHeader({ level, step, total, hearts, combo, right, exitHref }: { level: string; step: number; total: number; hearts?: number; combo?: number; right?: ReactNode; exitHref?: string }) {
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <Link href={exitHref ?? `/tro-choi?cap=${level}`} className="grid size-11 shrink-0 place-items-center rounded-xl hover:bg-sun-soft" aria-label="Thoát trò chơi">
        <X className="size-6" aria-hidden />
      </Link>
      <ProgressBar className="flex-1" value={(step / Math.max(total, 1)) * 100} label={`Câu ${Math.min(step + 1, total)}/${total}`} />
      {combo !== undefined && combo >= 2 && (
        <span className="flex shrink-0 items-center gap-1 font-display text-lg font-extrabold text-tangerine-deep" aria-label={`Chuỗi đúng ${combo} câu`}>
          <Flame className="size-5" aria-hidden />
          {combo}
        </span>
      )}
      {hearts !== undefined && (
        <span className="flex shrink-0 items-center gap-1 font-display text-lg font-extrabold" aria-label={`Còn ${hearts} tim`}>
          <Heart className="size-5 fill-tangerine text-tangerine-deep" aria-hidden />
          {hearts}
        </span>
      )}
      {right}
    </div>
  );
}

/**
 * The bar at the bottom of a question: "Kiểm tra" while answering, then right or wrong with the answer and
 * "Tiếp tục". Focus moves to "Tiếp tục" so Enter goes on.
 */
export function CheckBar({
  status,
  canCheck,
  onCheck,
  onNext,
  message,
}: {
  status: "idle" | "right" | "wrong";
  canCheck: boolean;
  onCheck: () => void;
  onNext: () => void;
  message?: ReactNode;
}) {
  const nextRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (status !== "idle") nextRef.current?.focus();
  }, [status]);
  const tone = status === "right" ? "bg-leaf-soft" : status === "wrong" ? "bg-[#ffe3d1]" : "bg-card";
  return (
    <div className={`sticky bottom-0 -mx-4 mt-8 border-t-[2.5px] border-ink px-4 py-4 sm:-mx-6 sm:px-6 ${tone}`}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div role="status" aria-live="polite" className="min-w-0 flex-1 basis-56">
          {status === "right" && (
            <p className="flex items-center gap-2 font-display text-xl font-extrabold">
              <Check className="size-6" aria-hidden />
              Chính xác!
            </p>
          )}
          {status === "wrong" && <p className="font-display text-xl font-extrabold">Chưa đúng</p>}
          {status !== "idle" && message && <div className="mt-1">{message}</div>}
        </div>
        {status === "idle" ? (
          <button type="button" className="btn btn-primary min-w-36" disabled={!canCheck} onClick={onCheck}>Kiểm tra</button>
        ) : (
          <button ref={nextRef} type="button" className="btn btn-primary min-w-36" onClick={onNext}>Tiếp tục</button>
        )}
      </div>
    </div>
  );
}

/** The end of a round: XP (paid as points, up to the daily cap), accuracy, play again or pick another game. */
export function GameEnd({
  game,
  level,
  correct,
  total,
  best,
  outOfHearts,
  seenIds,
  extra,
  onAgain,
  path,
}: {
  game: string;
  level: string;
  correct: number;
  total: number;
  best: number;
  outOfHearts: boolean;
  seenIds: string[];
  extra?: ReactNode;
  onAgain: () => void;
  path?: PathInfo;
}) {
  const { state } = useProgress();
  const xp = roundXp(correct, total);
  const stars = starsFor(correct, total, outOfHearts);
  const [paid] = useState(() => {
    const today = todayKey();
    const before = state.points.gameToday.day === today ? state.points.gameToday.n : 0;
    return Math.max(0, Math.min(xp, POINTS.gameDailyCap - before));
  });
  const saved = useRef(false);
  useEffect(() => {
    if (saved.current) return;
    saved.current = true;
    progress.gameRound(xp);
    addSeen(`game:${game}:${level}`, seenIds);
    if (path) recordStars(path.id, stars);
  }, [xp, game, level, seenIds, path, stars]);
  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => headingRef.current?.focus(), []);

  return (
    <div className="clay card-in mx-auto max-w-xl p-5 text-center sm:p-8">
      {/* the round ends with the monster down, or the hero when the hearts ran out */}
      <BattleStage level={level} hp={total - correct} maxHp={total} event={null} end={outOfHearts ? "lose" : "win"} />
      <Sparkles className="mx-auto mt-5 size-10 text-tangerine-deep" aria-hidden />
      <h2 ref={headingRef} tabIndex={-1} className="mt-3 font-display text-4xl font-extrabold outline-none">
        {path ? (stars > 0 ? (stars === 3 ? "Hoàn hảo!" : "Qua bài!") : "Chưa qua bài") : outOfHearts ? "Hết tim rồi!" : correct === total ? "Hoàn hảo!" : "Xong lượt chơi!"}
      </h2>
      {path && (
        <>
          <p className="mt-3 flex justify-center gap-1" aria-label={`${stars} trên 3 sao`}>
            {[1, 2, 3].map((k) => (
              <Star key={k} className={`size-10 ${k <= stars ? "fill-sun text-ink" : "text-ink/25"}`} aria-hidden />
            ))}
          </p>
          {stars === 0 && (
            <p className="mt-2">
              Cần đúng từ {Math.round(PASS * 100)}% {outOfHearts ? "và còn tim " : ""}để mở bài tiếp theo. Thử lại nhé!
            </p>
          )}
        </>
      )}
      <dl className="mt-6 grid grid-cols-3 gap-3">
        <div className="rounded-2xl border-[2.5px] border-ink bg-sun-soft p-3">
          <dt className="text-sm font-semibold">XP</dt>
          <dd className="font-display text-3xl font-extrabold">+{xp}</dd>
        </div>
        <div className="rounded-2xl border-[2.5px] border-ink bg-leaf-soft p-3">
          <dt className="text-sm font-semibold">Đúng</dt>
          <dd className="font-display text-3xl font-extrabold">{correct}/{total}</dd>
        </div>
        <div className="rounded-2xl border-[2.5px] border-ink bg-card p-3">
          <dt className="text-sm font-semibold">Chuỗi dài nhất</dt>
          <dd className="font-display text-3xl font-extrabold">{best}</dd>
        </div>
      </dl>
      {extra}
      <p className="mt-4 text-ink-soft">
        {paid > 0 ? `+${paid} điểm học vào ví điểm.` : `Hôm nay đã nhận đủ ${POINTS.gameDailyCap} điểm từ trò chơi; chơi tiếp vẫn giúp bạn nhớ bài.`}
      </p>
      {path ? (
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {stars > 0 && path.nextHref && (
            <Link href={path.nextHref} className="btn btn-primary">
              Bài tiếp theo
              <ArrowRight className="size-5" aria-hidden />
            </Link>
          )}
          <button type="button" className={stars > 0 && path.nextHref ? "btn btn-ghost" : "btn btn-primary"} onClick={onAgain}>
            <RotateCcw className="size-5" aria-hidden />
            {stars > 0 ? (stars < 3 ? "Chơi lại lấy thêm sao" : "Chơi lại") : "Thử lại"}
          </button>
          <Link href={path.mapHref} className="btn btn-ghost">Về lộ trình</Link>
        </div>
      ) : (
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button type="button" className="btn btn-primary" onClick={onAgain}>
            <RotateCcw className="size-5" aria-hidden />
            Chơi lượt mới
          </button>
          <Link href={`/tro-choi?cap=${level}`} className="btn btn-ghost">Chọn trò khác</Link>
        </div>
      )}
    </div>
  );
}
