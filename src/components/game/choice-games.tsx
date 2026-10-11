"use client";

import { useEffect, useState } from "react";
import { Turtle, Volume2 } from "lucide-react";
import { FREE_ROUND, blankRound, listenRound, type GameBlank, type GameData, type RoundSize } from "@/lib/game";
import { getSeen } from "@/lib/seen";
import { speak } from "@/lib/speech";
import { OptionList } from "@/components/ui/option-list";
import { choiceStates } from "@/components/exercises/multiple-choice";
import { AddWordButton } from "@/components/add-word-button";
import { BattleStage } from "./battle";
import { CheckBar, GameEnd, GameHeader, GameTop, useSession, type PathInfo } from "./game-ui";
import type { GameWord } from "@/lib/game";

const toAdd = (w: GameWord, example?: string) => ({ word: w.word, meaning: w.meaning, ipa: w.ipa, example: example ?? w.example, courseKey: w.courseKey });

/** A one-answer question with the shared check bar. */
function useChoice() {
  const [choice, setChoice] = useState<number | null>(null);
  const [status, setStatus] = useState<"idle" | "right" | "wrong">("idle");
  return { choice, setChoice, status, setStatus, reset: () => (setChoice(null), setStatus("idle")) };
}

/** Hear a word or a short sentence, pick what was said. */
export function ListenGame({ level, data, onAgain, size = FREE_ROUND, path }: { level: string; data: Omit<GameData, "blanks">; onAgain: () => void; size?: RoundSize; path?: PathInfo }) {
  const [round] = useState(() => listenRound({ ...data, blanks: [] }, getSeen(`game:nghe-chon:${level}`), Math.random, size));
  const s = useSession(round.length);
  const c = useChoice();
  const q = s.done ? null : round[s.index];

  // play each new question once; the buttons replay it
  useEffect(() => {
    if (q) speak(q.audio);
  }, [q]);

  if (!q)
    return <GameEnd game="nghe-chon" level={level} correct={s.correct} total={round.length} best={s.best} outOfHearts={s.outOfHearts} seenIds={round.map((x) => x.id)} onAgain={onAgain} path={path} />;

  const locked = c.status !== "idle";
  return (
    <div>
      <GameTop>
        <GameHeader level={level} step={s.index} total={round.length} hearts={s.hearts} combo={s.combo} exitHref={path?.mapHref} />
        <BattleStage level={level} hp={round.length - s.correct} maxHp={round.length} event={s.event} combo={s.combo} />
      </GameTop>
      <h1 className="mt-6 font-display text-2xl font-extrabold sm:text-3xl">Bạn nghe thấy gì?</h1>
      <div className="mt-5 flex flex-wrap gap-3">
        <button type="button" className="btn btn-primary min-h-14 px-6 text-lg" onClick={() => speak(q.audio)}>
          <Volume2 className="size-6" aria-hidden />
          Nghe
        </button>
        <button type="button" className="btn btn-ghost min-h-14" onClick={() => speak(q.audio, { rate: 0.6 })}>
          <Turtle className="size-5" aria-hidden />
          Nghe chậm
        </button>
      </div>
      <div className="mt-6">
        <OptionList name={q.id} options={q.options} value={c.choice} onChange={c.setChoice} disabled={locked} states={choiceStates(q.options, q.answer, c.choice, locked)} />
      </div>
      <CheckBar
        status={c.status}
        canCheck={c.choice !== null}
        onCheck={() => {
          const ok = c.choice === q.answer;
          s.record(ok);
          c.setStatus(ok ? "right" : "wrong");
        }}
        onNext={() => {
          c.reset();
          s.next();
        }}
        message={
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <p>
              <span className="font-semibold">{q.options[q.answer]}</span>: {q.meaning}
            </p>
            {q.word && <AddWordButton word={toAdd(q.word)} />}
          </div>
        }
      />
    </div>
  );
}

/** Pick the word that fills the blank: grammar from the lessons, and words taken out of their example sentences. */
export function BlankGame({ level, blanks, onAgain, size = FREE_ROUND, path }: { level: string; blanks: GameBlank[]; onAgain: () => void; size?: RoundSize; path?: PathInfo }) {
  const [round] = useState(() => blankRound(blanks, getSeen(`game:dien-tu:${level}`), Math.random, size));
  const s = useSession(round.length);
  const c = useChoice();

  if (s.done)
    return <GameEnd game="dien-tu" level={level} correct={s.correct} total={round.length} best={s.best} outOfHearts={s.outOfHearts} seenIds={round.map((x) => x.id)} onAgain={onAgain} path={path} />;

  const q = round[s.index];
  const locked = c.status !== "idle";
  const [before, after] = q.prompt.split("___");
  const filled = q.prompt.replace("___", q.options[q.answer]);
  return (
    <div>
      <GameTop>
        <GameHeader level={level} step={s.index} total={round.length} hearts={s.hearts} combo={s.combo} exitHref={path?.mapHref} />
        <BattleStage level={level} hp={round.length - s.correct} maxHp={round.length} event={s.event} combo={s.combo} />
      </GameTop>
      <h1 className="mt-6 font-display text-2xl font-extrabold sm:text-3xl">Chọn từ điền vào chỗ trống</h1>
      <p className="mt-4 text-xl leading-relaxed">
        {before}
        <span className="mx-1 inline-block min-w-16 border-b-[3px] border-ink text-center font-bold">
          {locked ? q.options[q.answer] : <span className="sr-only">chỗ trống</span>}
        </span>
        {after}
      </p>
      <div className="mt-6">
        <OptionList name={q.id} options={q.options} value={c.choice} onChange={c.setChoice} disabled={locked} states={choiceStates(q.options, q.answer, c.choice, locked)} />
      </div>
      <CheckBar
        status={c.status}
        canCheck={c.choice !== null}
        onCheck={() => {
          const ok = c.choice === q.answer;
          s.record(ok);
          c.setStatus(ok ? "right" : "wrong");
          speak(filled);
        }}
        onNext={() => {
          c.reset();
          s.next();
        }}
        message={
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            {q.explain ? <p>{q.explain}</p> : <p className="font-semibold">{filled}</p>}
            {q.word && <AddWordButton word={toAdd(q.word, filled)} />}
          </div>
        }
      />
    </div>
  );
}
