"use client";

import { useEffect, useState } from "react";
import { Timer } from "lucide-react";
import { BOARDS, matchBoards, type GameWord } from "@/lib/game";
import { getSeen } from "@/lib/seen";
import { speak } from "@/lib/speech";
import { WordList } from "./word-list";
import { BattleStage, type BattleEvent } from "./battle";
import { GameEnd, GameHeader, GameTop, type PathInfo } from "./game-ui";

type Side = "left" | "right";

/** Tap an English word and its Vietnamese meaning to pair them; three boards of five, against the clock. */
export function MatchGame({ level, words, onAgain, boardCount = BOARDS, path }: { level: string; words: GameWord[]; onAgain: () => void; boardCount?: number; path?: PathInfo }) {
  const [boards] = useState(() => matchBoards(words, getSeen(`game:ghep-cap:${level}`), Math.random, boardCount));
  const [board, setBoard] = useState(0);
  const [picked, setPicked] = useState<{ side: Side; text: string } | null>(null);
  const [matched, setMatched] = useState<string[]>([]);
  const [wrong, setWrong] = useState<string[]>([]);
  // pairs got wrong at least once, so they don't count as right
  const [missed, setMissed] = useState<string[]>([]);
  const [started] = useState(() => Date.now());
  const [event, setEvent] = useState<BattleEvent>(null);
  // pairs matched in a row without a mistake, for critical hits
  const [run, setRun] = useState(0);
  const [hits, setHits] = useState(0);
  const [now, setNow] = useState(started);
  const total = boards.reduce((n, b) => n + b.pairs.length, 0);
  const done = board >= boards.length;

  useEffect(() => {
    if (done) return;
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, [done]);

  if (done) {
    const correct = total - missed.length;
    const seconds = Math.round((now - started) / 1000);
    return (
      <GameEnd
        game="ghep-cap"
        level={level}
        correct={correct}
        total={total}
        best={correct}
        outOfHearts={false}
        seenIds={boards.flatMap((b) => b.pairs.map((p) => p.id))}
        extra={
          <>
            <p className="mt-4 font-semibold">Thời gian: {Math.floor(seconds / 60)} phút {seconds % 60} giây</p>
            <WordList words={boards.flatMap((b) => b.pairs)} missed={missed} />
          </>
        }
        onAgain={onAgain}
        path={path}
      />
    );
  }

  const b = boards[board];
  const pairOf = (side: Side, text: string) => b.pairs.find((p) => (side === "left" ? p.word : p.meaning) === text)!;

  const tap = (side: Side, text: string) => {
    setWrong([]);
    // an English word is read every time it is tapped, also when it completes a pair
    if (side === "left") speak(text);
    if (!picked || picked.side === side) {
      setPicked({ side, text });
      return;
    }
    const left = side === "left" ? text : picked.text;
    const right = side === "right" ? text : picked.text;
    const pair = pairOf("left", left);
    setPicked(null);
    if (pair.meaning === right) {
      // matched from the meaning side: still hear the word that was paired
      if (side === "right") speak(left);
      setEvent((e) => ({ kind: run + 1 >= 3 ? "crit" : "hit", key: (e?.key ?? 0) + 1 }));
      setRun((r) => r + 1);
      setHits((h) => h + 1);
      const next = [...matched, pair.id];
      setMatched(next);
      if (b.pairs.every((p) => next.includes(p.id))) {
        setTimeout(() => {
          setMatched([]);
          setBoard((n) => n + 1);
        }, 500);
      }
    } else {
      setEvent((e) => ({ kind: "hurt", key: (e?.key ?? 0) + 1 }));
      setRun(0);
      setWrong([left, right]);
      setMissed((m) => [...new Set([...m, pair.id, pairOf("right", right).id])]);
    }
  };

  const seconds = Math.round((now - started) / 1000);
  const tile = (side: Side, text: string) => {
    const id = pairOf(side, text).id;
    const isMatched = matched.includes(id);
    const isPicked = picked?.side === side && picked.text === text;
    const isWrong = wrong.includes(text);
    return (
      <li key={text}>
        <button
          type="button"
          disabled={isMatched}
          aria-pressed={isPicked}
          onClick={() => tap(side, text)}
          className={`min-h-14 w-full rounded-2xl border-[2.5px] px-3 py-2 text-left text-lg font-semibold transition-colors ${
            isMatched
              ? "border-ink/20 bg-leaf-soft text-ink/50"
              : isWrong
                ? "border-ink bg-tangerine/25"
                : isPicked
                  ? "border-ink bg-sun shadow-[0_3px_0_0_var(--color-ink)]"
                  : "border-ink bg-card shadow-[0_3px_0_0_var(--color-ink)] hover:bg-sun-soft"
          }`}
        >
          {text}
          {isMatched && <span className="sr-only"> (đã ghép)</span>}
        </button>
      </li>
    );
  };

  return (
    <div>
      <GameTop>
        <GameHeader
          level={level}
          exitHref={path?.mapHref}
          step={board * b.pairs.length + matched.length}
          total={total}
          right={
            <span className="flex shrink-0 items-center gap-1 font-semibold tabular-nums" aria-label={`Thời gian ${seconds} giây`}>
              <Timer className="size-5" aria-hidden />
              {Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, "0")}
            </span>
          }
        />
        <BattleStage level={level} hp={total - hits} maxHp={total} event={event} combo={run} />
      </GameTop>
      <h1 className="mt-6 font-display text-2xl font-extrabold sm:text-3xl">Ghép từ với nghĩa</h1>
      <p className="mt-2 text-ink-soft">
        Bảng {board + 1}/{boards.length}. Bấm một từ tiếng Anh rồi bấm nghĩa của nó.
      </p>
      <p role="status" aria-live="polite" className="sr-only">
        {wrong.length ? "Chưa đúng, thử lại." : picked ? `Đã chọn ${picked.text}` : ""}
      </p>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5">
        <ul className="grid content-start gap-3" aria-label="Từ tiếng Anh">{b.left.map((t) => tile("left", t))}</ul>
        <ul className="grid content-start gap-3" aria-label="Nghĩa tiếng Việt">{b.right.map((t) => tile("right", t))}</ul>
      </div>
    </div>
  );
}
