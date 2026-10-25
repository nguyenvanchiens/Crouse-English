"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Lock } from "lucide-react";
import { UNIT_ROUND, type GameData, type GameId } from "@/lib/game";
import type { PathUnit } from "@/lib/game-data";
import { isOpen, nodeId, pathNodes } from "@/lib/game-path";
import { usePathStars } from "@/lib/path-store";
import { useProgress } from "@/lib/progress";
import { BlankGame, ListenGame } from "./choice-games";
import { GAME_NAMES, type PathInfo } from "./game-ui";
import { MatchGame } from "./match-game";
import { SentenceGame } from "./sentence-game";
import { useStudyTimer } from "@/lib/use-study-timer";

/** One game of a path unit (?tro=…), open only once the game before it is passed. */
export function UnitPlay({ level, unit, units, data }: { level: string; unit: PathUnit; units: Pick<PathUnit, "slug" | "games">[]; data: GameData }) {
  useStudyTimer();
  const { ready } = useProgress();
  const stars = usePathStars();
  const asked = useSearchParams().get("tro") as GameId | null;
  const game: GameId = asked && unit.games.includes(asked) ? asked : unit.games[0];
  const [round, setRound] = useState(0);
  const mapHref = `/tro-choi/lo-trinh/${level}#bai-${unit.slug}`;

  if (!ready) return <div className="clay h-96 animate-pulse bg-card" aria-hidden />;

  const nodes = pathNodes(level, units);
  const id = nodeId(level, unit.slug, game);
  if (!isOpen(nodes, stars, id))
    return (
      <div className="clay mx-auto max-w-xl p-8 text-center">
        <Lock className="mx-auto size-10 text-ink-soft" aria-hidden />
        <h1 className="mt-4 font-display text-3xl font-extrabold">Bài này chưa mở</h1>
        <p className="mt-3 text-lg text-ink-soft">Qua các bài trước trên lộ trình để mở {GAME_NAMES[game]} của bài “{unit.title}”.</p>
        <Link href={mapHref} className="btn btn-primary mt-6">Về lộ trình</Link>
      </div>
    );

  const i = nodes.findIndex((n) => n.id === id);
  const next = nodes[i + 1];
  const path: PathInfo = { id, mapHref, nextHref: next ? `/tro-choi/lo-trinh/${level}/${next.unit}?tro=${next.game}` : null };
  const again = () => setRound((n) => n + 1);
  const key = `${game}-${round}`;

  return (
    <div>
      <p className="mb-4 text-sm font-semibold text-ink-soft">
        {unit.chapter} · {unit.title}
      </p>
      {game === "ghep-cap" ? (
        <MatchGame key={key} level={level} words={data.words} onAgain={again} boardCount={UNIT_ROUND.boards} path={path} />
      ) : game === "xep-cau" ? (
        <SentenceGame key={key} level={level} sentences={data.sentences} onAgain={again} n={UNIT_ROUND.sentences} path={path} />
      ) : game === "nghe-chon" ? (
        <ListenGame key={key} level={level} data={data} onAgain={again} size={UNIT_ROUND} path={path} />
      ) : (
        <BlankGame key={key} level={level} blanks={data.blanks} onAgain={again} size={UNIT_ROUND} path={path} />
      )}
    </div>
  );
}
