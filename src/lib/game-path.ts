/**
 * The game path: each lesson of a level's main course is a unit of up to four games, unlocked one after
 * another, as in Duolingo. A game is passed with 70% right without running out of hearts; it earns one to
 * three stars, and may be replayed for more. Pure functions; the stars are kept by path-store.ts.
 */
import type { GameId } from "./game";

export const PASS = 0.7;

export interface PathNode { id: string; unit: string; game: GameId }
export type NodeStatus = "done" | "current" | "locked";

export const nodeId = (level: string, unit: string, game: GameId) => `${level.toLowerCase()}/${unit}/${game}`;

/** Stars for a finished round: none below 70% or out of hearts; 1 from 70%, 2 from 85%, 3 when all right. */
export function starsFor(correct: number, total: number, outOfHearts: boolean): 0 | 1 | 2 | 3 {
  if (outOfHearts || total === 0) return 0;
  const r = correct / total;
  return r === 1 ? 3 : r >= 0.85 ? 2 : r >= PASS ? 1 : 0;
}

export function pathNodes(level: string, units: readonly { slug: string; games: readonly GameId[] }[]): PathNode[] {
  return units.flatMap((u) => u.games.map((game) => ({ id: nodeId(level, u.slug, game), unit: u.slug, game })));
}

/** Passed games are done; the first one not passed is the current one; everything after it is locked. */
export function nodeStatuses(nodes: readonly PathNode[], stars: Readonly<Record<string, number>>): NodeStatus[] {
  const current = nodes.findIndex((n) => !(stars[n.id] > 0));
  return nodes.map((n, i) => (stars[n.id] > 0 ? "done" : current === -1 || i === current ? "current" : i < current ? "done" : "locked"));
}

/** Whether a game may be played: passed already, or the current one. */
export function isOpen(nodes: readonly PathNode[], stars: Readonly<Record<string, number>>, id: string): boolean {
  const i = nodes.findIndex((n) => n.id === id);
  return i >= 0 && nodeStatuses(nodes, stars)[i] !== "locked";
}

/** The game to play next on the path, or null when the whole level is done. */
export function nextNode(nodes: readonly PathNode[], stars: Readonly<Record<string, number>>): PathNode | null {
  return nodes.find((n) => !(stars[n.id] > 0)) ?? null;
}
