// `output: "export"` writes segment-prefetch payloads as nested folders
// (out/khoa-hoc/__next.!KHNpdGUp/khoa-hoc/__PAGE__.txt), but the client router requests them
// as one flat file name (/khoa-hoc/__next.!KHNpdGUp.khoa-hoc.__PAGE__.txt). A static host
// serves files as they are, so every prefetch 404s and links fall back to full page loads.
// This step adds the flat copies next to the folders.
import { copyFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.argv[2] ?? "out";
let copied = 0;

function filesUnder(dir, prefix = []) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? filesUnder(p, [...prefix, name]) : [[p, [...prefix, name]]];
  });
}

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (!statSync(p).isDirectory()) continue;
    if (name.startsWith("__next.")) {
      for (const [file, parts] of filesUnder(p)) {
        copyFileSync(file, join(dir, [name, ...parts].join(".")));
        copied++;
      }
    } else {
      walk(p);
    }
  }
}

walk(root);
console.log(`flatten-export-segments: ${copied} prefetch files`);
