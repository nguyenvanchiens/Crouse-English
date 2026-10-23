"use client";

import { useState } from "react";
import { Lightbulb, Volume2 } from "lucide-react";
import { ROUND, checkSentence, nextHint, sentenceRound, type GameSentence } from "@/lib/game";
import { getSeen } from "@/lib/seen";
import { speak, speakIfEnglish } from "@/lib/speech";
import { useDragReorder } from "@/components/ui/use-drag-reorder";
import { BattleStage } from "./battle";
import { CheckBar, GameEnd, GameHeader, GameTop, useSession, type PathInfo } from "./game-ui";

const PLACED =
  "min-h-11 cursor-grab select-none rounded-xl border-[2.5px] border-ink px-3 py-1.5 text-lg font-semibold shadow-[0_3px_0_0_var(--color-ink)] transition-transform active:cursor-grabbing disabled:cursor-default disabled:shadow-none";

/** pieces the hint button may place for the learner in one sentence */
const MAX_HINTS = 2;

/** Put the chunks of a sentence back in order, from its Vietnamese meaning. */
export function SentenceGame({ level, sentences, onAgain, n = ROUND, path }: { level: string; sentences: GameSentence[]; onAgain: () => void; n?: number; path?: PathInfo }) {
  const [round] = useState(() => sentenceRound(sentences, getSeen(`game:xep-cau:${level}`), Math.random, n));
  const s = useSession(round.length);
  // indexes into the question's tiles, in the order chosen
  const [chosen, setChosen] = useState<number[]>([]);
  const [status, setStatus] = useState<"idle" | "right" | "wrong">("idle");
  const [hints, setHints] = useState(0);
  const arrange = useDragReorder(chosen, setChosen, (k) => setChosen((c) => c.filter((_, j) => j !== k)));

  if (s.done)
    return <GameEnd game="xep-cau" level={level} correct={s.correct} total={round.length} best={s.best} outOfHearts={s.outOfHearts} seenIds={round.map((q) => q.item.id)} onAgain={onAgain} path={path} />;

  const q = round[s.index];
  const locked = status !== "idle";
  const check = () => {
    const ok = checkSentence(chosen.map((i) => q.tiles[i]), q.item);
    s.record(ok);
    setStatus(ok ? "right" : "wrong");
    speak(q.item.en);
  };
  const next = () => {
    setChosen([]);
    setHints(0);
    setStatus("idle");
    s.next();
  };

  return (
    <div>
      <GameTop>
        <GameHeader level={level} step={s.index} total={round.length} hearts={s.hearts} combo={s.combo} exitHref={path?.mapHref} />
        <BattleStage level={level} hp={round.length - s.correct} maxHp={round.length} event={s.event} combo={s.combo} />
      </GameTop>
      <h1 className="mt-6 font-display text-2xl font-extrabold sm:text-3xl">Xếp thành câu tiếng Anh</h1>
      <p className="mt-3 rounded-2xl border-[2.5px] border-ink bg-sun-soft px-4 py-3 text-lg font-semibold">{q.item.vi}</p>
      {!locked && (
        <div className="mt-3 flex flex-wrap gap-2">
          <button type="button" className="btn btn-ghost min-h-11 px-3 text-sm" onClick={() => speak(q.item.en)}>
            <Volume2 className="size-5" aria-hidden />
            Nghe câu
          </button>
          <button
            type="button"
            className="btn btn-ghost min-h-11 px-3 text-sm"
            disabled={hints >= MAX_HINTS || chosen.length === q.tiles.length}
            onClick={() => {
              setChosen((c) => nextHint(q.tiles, c, q.item));
              setHints((h) => h + 1);
            }}
          >
            <Lightbulb className="size-5" aria-hidden />
            Gợi ý ({MAX_HINTS - hints})
          </button>
        </div>
      )}


      <p className="sr-only" id="answer-label">Câu bạn đang xếp</p>
      <div role="group" aria-labelledby="answer-label" className="mt-6 flex min-h-16 flex-wrap gap-2 border-b-[2.5px] border-dashed border-ink/40 pb-3">
        {chosen.map((ti, k) => (
          <button
            // keyed by the tile, so a piece keeps its element while it is dragged to another place
            key={ti}
            type="button"
            disabled={locked}
            {...(locked ? {} : arrange.itemProps(k, q.tiles[ti]))}
            className={`${PLACED} ${arrange.dragging === k ? "z-10 scale-105 bg-sun shadow-[0_6px_0_0_var(--color-ink)]" : "bg-card"}`}
            aria-label={`${q.tiles[ti]}, bấm để bỏ ra, kéo hoặc dùng phím mũi tên để đổi chỗ`}
          >
            {q.tiles[ti]}
          </button>
        ))}
      </div>
      {!locked && chosen.length > 1 && <p className="mt-2 text-sm text-ink-soft">Kéo một mảnh để đổi chỗ, bấm để bỏ ra.</p>}
      <p role="status" className="sr-only">{arrange.status}</p>

      <p className="sr-only" id="bank-label">Các mảnh câu còn lại</p>
      <div role="group" aria-labelledby="bank-label" className="mt-5 flex flex-wrap gap-2">
        {q.tiles.map((t, i) => {
          const used = chosen.includes(i);
          return (
            <button
              key={i}
              type="button"
              disabled={used || locked}
              onClick={() => {
                setChosen((c) => [...c, i]);
                speakIfEnglish(t);
              }}
              className={`min-h-11 rounded-xl border-[2.5px] px-3 py-1.5 text-lg font-semibold ${used ? "border-ink/20 bg-ink/5 text-transparent" : "border-ink bg-card shadow-[0_3px_0_0_var(--color-ink)] hover:bg-sun-soft"}`}
              aria-hidden={used || undefined}
              tabIndex={used ? -1 : undefined}
            >
              {t}
            </button>
          );
        })}
      </div>

      <CheckBar
        status={status}
        canCheck={chosen.length === q.tiles.length}
        onCheck={check}
        onNext={next}
        message={
          <p className="flex flex-wrap items-center gap-2">
            {status === "wrong" && <span>Đáp án:</span>}
            <span className="font-semibold">{q.item.en}</span>
            <button type="button" className="inline-flex min-h-11 items-center gap-1 underline underline-offset-4" onClick={() => speak(q.item.en)}>
              <Volume2 className="size-4" aria-hidden />
              Nghe lại
            </button>
          </p>
        }
      />
    </div>
  );
}
