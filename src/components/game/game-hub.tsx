"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Ear, Map as MapIcon, Puzzle, Shuffle, SquarePen, Trophy } from "lucide-react";
import type { PathUnit } from "@/lib/game-data";
import { nextNode, pathNodes } from "@/lib/game-path";
import { usePathStars } from "@/lib/path-store";
import { ProgressBar } from "@/components/ui/progress-bar";
import type { Level } from "@/content/types";
import { POINTS } from "@/lib/points";
import { todayKey } from "@/lib/progress-core";
import { useProgress } from "@/lib/progress";
import { GAME_NAMES } from "./game-ui";

const LEVELS: Level[] = ["A1", "A2", "B1", "B2", "C1"];
const GAMES = [
  { id: "ghep-cap", icon: Puzzle, body: "Nối từ tiếng Anh với nghĩa tiếng Việt, 3 bảng 5 cặp, tính giờ." },
  { id: "xep-cau", icon: Shuffle, body: "Đọc nghĩa tiếng Việt, xếp các mảnh thành câu tiếng Anh đúng thứ tự. Luyện đọc hiểu cả câu." },
  { id: "nghe-chon", icon: Ear, body: "Nghe một từ hoặc một câu ngắn, chọn đúng điều bạn nghe được." },
  { id: "dien-tu", icon: SquarePen, body: "Chọn từ đúng điền vào chỗ trống: ngữ pháp trong bài và từ vựng trong câu." },
] as const;

/** Pick a level and a game. The level comes from ?cap=, else the placement result, else A1. */
export function GameHub({ paths }: { paths: Record<string, Pick<PathUnit, "slug" | "title" | "games">[]> }) {
  const { state, ready } = useProgress();
  const stars = usePathStars();
  const param = useSearchParams().get("cap")?.toUpperCase();
  const level: Level = LEVELS.find((l) => l === param) ?? (ready && state.placement ? state.placement.startLevel : "A1");
  const today = todayKey();
  const xpToday = state.points.gameToday.day === today ? state.points.gameToday.n : 0;
  const lv = level.toLowerCase();
  const units = paths[level] ?? [];
  const nodes = pathNodes(lv, units);
  const next = ready ? nextNode(nodes, stars) : nodes[0];
  const doneUnits = units.filter((u) => u.games.every((g) => (stars[`${lv}/${u.slug}/${g}`] ?? 0) > 0)).length;
  const nextUnit = next ? units.findIndex((u) => u.slug === next.unit) : -1;

  return (
    <div className="space-y-10">
      <header>
        <h1 className="font-display text-5xl font-extrabold leading-tight">Trò chơi</h1>
        <p className="mt-3 max-w-2xl text-lg text-ink-soft">
          Đi lộ trình từng bài một như Duolingo, hoặc luyện tự do. Mỗi lượt có 3 tim; đúng liền nhiều câu để giữ chuỗi; xong lượt nhận XP vào ví điểm (tối đa{" "}
          {POINTS.gameDailyCap} điểm mỗi ngày).
        </p>
        {ready && (
          <p className="mt-2 font-semibold">
            Hôm nay đã nhận {xpToday}/{POINTS.gameDailyCap} điểm từ trò chơi.
          </p>
        )}
      </header>

      <nav aria-label="Chọn cấp độ">
        <p className="font-semibold">Cấp độ</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {LEVELS.map((l) => (
            <li key={l}>
              <Link
                href={`/tro-choi?cap=${l.toLowerCase()}`}
                aria-current={l === level ? "true" : undefined}
                className="inline-flex min-h-11 min-w-14 items-center justify-center rounded-xl border-[2.5px] border-ink bg-card px-4 font-display text-lg font-extrabold hover:bg-sun-soft aria-[current=true]:bg-sun aria-[current=true]:shadow-[0_3px_0_0_var(--color-ink)]"
              >
                {l}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <section aria-labelledby="path-title" className="rounded-[1.5rem] border-[2.5px] border-ink bg-sun p-6 shadow-[0_6px_0_0_var(--color-ink)] sm:p-8">
        <h2 id="path-title" className="flex items-center gap-2 font-display text-3xl font-extrabold">
          <MapIcon className="size-7" aria-hidden />
          Lộ trình chinh phục {level}
        </h2>
        <p className="mt-2 max-w-2xl">
          {units.length} bài, mỗi bài là một chặng các trò chơi lấy từ chính bài học đó. Qua trò trước mới mở trò sau.
        </p>
        <p className="mt-4 font-semibold">Đã qua {doneUnits}/{units.length} bài</p>
        <ProgressBar className="mt-1.5 max-w-md" value={(doneUnits / Math.max(units.length, 1)) * 100} label={`Lộ trình ${level}: đã qua ${doneUnits}/${units.length} bài`} />
        <div className="mt-5 flex flex-wrap gap-3">
          {next ? (
            <Link href={`/tro-choi/lo-trinh/${lv}/${next.unit}?tro=${next.game}`} className="btn btn-primary">
              {doneUnits === 0 && next === nodes[0] ? "Bắt đầu" : "Tiếp tục"}: Bài {nextUnit + 1} · {GAME_NAMES[next.game]}
              <ArrowRight className="size-5" aria-hidden />
            </Link>
          ) : (
            <p className="flex items-center gap-2 font-display text-xl font-extrabold">
              <Trophy className="size-6" aria-hidden />
              Đã chinh phục xong {level}!
            </p>
          )}
          <Link href={`/tro-choi/lo-trinh/${lv}`} className="btn btn-ghost bg-card">Xem lộ trình</Link>
        </div>
      </section>

      <h2 className="font-display text-3xl font-extrabold">Luyện tự do</h2>
      <ul className="-mt-6 grid gap-5 sm:grid-cols-2">
        {GAMES.map((g) => (
          <li key={g.id}>
            <Link href={`/tro-choi/${g.id}/${level.toLowerCase()}`} className="clay flex h-full flex-col p-6 hover:-translate-y-0.5 hover:bg-sun-soft">
              <g.icon className="size-9 text-tangerine-deep" aria-hidden />
              <span className="mt-3 font-display text-2xl font-extrabold">{GAME_NAMES[g.id]}</span>
              <span className="mt-1 text-ink-soft">{g.body}</span>
              <span className="mt-4 font-semibold underline underline-offset-4">Chơi {level}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
