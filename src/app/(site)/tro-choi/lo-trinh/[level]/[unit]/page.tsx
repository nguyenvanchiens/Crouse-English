import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { UnitPlay } from "@/components/game/unit-play";
import type { Level } from "@/content/types";
import { GAME_LEVELS, loadPath, loadUnit } from "@/lib/game-data";

export const dynamicParams = false;

export async function generateStaticParams() {
  const all = await Promise.all(GAME_LEVELS.map(async (l) => (await loadPath(l)).units.map((u) => ({ level: l.toLowerCase(), unit: u.slug }))));
  return all.flat();
}

export async function generateMetadata(props: PageProps<"/tro-choi/lo-trinh/[level]/[unit]">): Promise<Metadata> {
  const { level, unit } = await props.params;
  const u = await loadUnit(level.toUpperCase() as Level, unit);
  return { title: `${u?.unit.title ?? "Bài"} · Trò chơi ${level.toUpperCase()} | Crouse English` };
}

export default async function UnitPage(props: PageProps<"/tro-choi/lo-trinh/[level]/[unit]">) {
  const { level, unit } = await props.params;
  const lvl = level.toUpperCase() as Level;
  const u = await loadUnit(lvl, unit);
  if (!u) notFound();
  // the unlock order needs only each unit's slug and games
  const units = (await loadPath(lvl)).units.map(({ slug, games }) => ({ slug, games }));
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-8 sm:px-6">
      <Suspense fallback={<div className="clay h-96 animate-pulse bg-card" aria-hidden />}>
        <UnitPlay level={level} unit={u.unit} units={units} data={u.data} />
      </Suspense>
    </div>
  );
}
