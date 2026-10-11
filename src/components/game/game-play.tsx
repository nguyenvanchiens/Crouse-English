"use client";

import { useState } from "react";
import type { GameBlank, GameId, GameSentence, GameWord } from "@/lib/game";
import { useProgress } from "@/lib/progress";
import { BlankGame, ListenGame } from "./choice-games";
import { MatchGame } from "./match-game";
import { SentenceGame } from "./sentence-game";

export interface GamePayload { words: GameWord[]; sentences: GameSentence[]; blanks: GameBlank[] }

/** Runs one game; a round is drawn on the device (once its saved progress is read), and again on "Chơi lượt mới". */
export function GamePlay({ game, level, data }: { game: GameId; level: string; data: GamePayload }) {
  const { ready } = useProgress();
  const [round, setRound] = useState(0);
  if (!ready) return <div className="clay h-96 animate-pulse bg-card" aria-hidden />;
  const again = () => setRound((n) => n + 1);
  if (game === "ghep-cap") return <MatchGame key={round} level={level} words={data.words} onAgain={again} />;
  if (game === "xep-cau") return <SentenceGame key={round} level={level} sentences={data.sentences} onAgain={again} />;
  if (game === "nghe-chon") return <ListenGame key={round} level={level} data={data} onAgain={again} />;
  return <BlankGame key={round} level={level} blanks={data.blanks} onAgain={again} />;
}
