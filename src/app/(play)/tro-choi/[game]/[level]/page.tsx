import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GAME_NAMES } from "@/components/game/game-ui";
import { GamePlay, type GamePayload } from "@/components/game/game-play";
import type { Level } from "@/content/types";
import type { GameId } from "@/lib/game";
import { GAME_LEVELS, loadGameData } from "@/lib/game-data";

const GAMES: GameId[] = ["ghep-cap", "xep-cau", "nghe-chon", "dien-tu"];

export const dynamicParams = false;

export function generateStaticParams() {
  return GAMES.flatMap((game) => GAME_LEVELS.map((l) => ({ game, level: l.toLowerCase() })));
}

export async function generateMetadata(props: PageProps<"/tro-choi/[game]/[level]">): Promise<Metadata> {
  const { game, level } = await props.params;
  return { title: `${GAME_NAMES[game] ?? "Trò chơi"} ${level.toUpperCase()} | Crouse English` };
}

export default async function GamePage(props: PageProps<"/tro-choi/[game]/[level]">) {
  const { game, level } = await props.params;
  const lvl = level.toUpperCase() as Level;
  if (!GAMES.includes(game as GameId) || !GAME_LEVELS.includes(lvl)) notFound();
  const all = await loadGameData(lvl);
  // each game page carries only what that game draws from
  const data: GamePayload = {
    words: game === "ghep-cap" || game === "nghe-chon" ? all.words : [],
    sentences: game === "xep-cau" || game === "nghe-chon" ? all.sentences : [],
    blanks: game === "dien-tu" ? all.blanks : [],
  };
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 pb-8 pt-2 sm:px-6 sm:pt-6">
      <GamePlay game={game as GameId} level={level} data={data} />
    </div>
  );
}
