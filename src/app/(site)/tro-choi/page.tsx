import type { Metadata } from "next";
import { Suspense } from "react";
import { GameHub } from "@/components/game/game-hub";
import { GAME_LEVELS, loadPath } from "@/lib/game-data";

export const metadata: Metadata = {
  title: "Trò chơi tiếng Anh | Crouse English",
  description: "Ghép cặp từ, xếp câu, nghe và chọn, điền từ nhanh: luyện tiếng Anh từ A1 đến C1 bằng trò chơi ngắn, lấy từ chính bài học.",
};

export default async function GamesPage() {
  // each level's path, small: slugs, titles and games only
  const paths = Object.fromEntries(
    await Promise.all(GAME_LEVELS.map(async (l) => [l, (await loadPath(l)).units.map(({ slug, title, games }) => ({ slug, title, games }))] as const)),
  );
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <Suspense fallback={<div className="clay h-96 animate-pulse bg-card" aria-hidden />}>
        <GameHub paths={paths} />
      </Suspense>
    </div>
  );
}
