import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PathMap } from "@/components/game/path-map";
import type { Level } from "@/content/types";
import { GAME_LEVELS, loadPath } from "@/lib/game-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return GAME_LEVELS.map((l) => ({ level: l.toLowerCase() }));
}

export async function generateMetadata(props: PageProps<"/tro-choi/lo-trinh/[level]">): Promise<Metadata> {
  const { level } = await props.params;
  return { title: `Lộ trình trò chơi ${level.toUpperCase()} | Crouse English` };
}

export default async function PathPage(props: PageProps<"/tro-choi/lo-trinh/[level]">) {
  const { level } = await props.params;
  const lvl = level.toUpperCase() as Level;
  if (!GAME_LEVELS.includes(lvl)) notFound();
  const { units } = await loadPath(lvl);
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <p className="font-semibold text-ink-soft">
        <Link href={`/tro-choi?cap=${level}`} className="underline underline-offset-4">Trò chơi</Link> / {lvl}
      </p>
      <h1 className="mt-2 font-display text-4xl font-extrabold leading-tight sm:text-5xl">Lộ trình chinh phục {lvl}</h1>
      <p className="mt-3 text-lg text-ink-soft">
        Mỗi bài học là một chặng với các trò chơi lấy từ chính bài đó. Đúng từ 70% để qua và mở trò tiếp theo; đúng hết được 3 sao.
      </p>
      <div className="mt-8">
        <PathMap level={level} units={units} />
      </div>
    </div>
  );
}
