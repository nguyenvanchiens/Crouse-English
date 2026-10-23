import { AudioLines, BookOpenCheck, Briefcase, GraduationCap, Route, type LucideIcon } from "lucide-react";
import type { Goal, Level } from "@/content/types";

export const GOAL_META: Record<Goal, { label: string; tone: string; icon: LucideIcon }> = {
  "phat-am": { label: "Phát âm", tone: "bg-leaf-soft", icon: AudioLines },
  "lo-trinh": { label: "Lộ trình A1–C1", tone: "bg-sun", icon: Route },
  ielts: { label: "IELTS", tone: "bg-grape-soft", icon: GraduationCap },
  toeic: { label: "TOEIC", tone: "bg-leaf-soft", icon: Briefcase },
  "tre-em": { label: "Trẻ em", tone: "bg-sky-deep", icon: BookOpenCheck },
};

/** Each level's colour, used everywhere a level appears: strong for its badge, soft for a card's surface. */
export const LEVEL_TONE: Record<Level, { strong: string; soft: string }> = {
  A1: { strong: "bg-sun", soft: "bg-sun-soft" },
  A2: { strong: "bg-tangerine", soft: "bg-tangerine-soft" },
  B1: { strong: "bg-leaf-soft", soft: "bg-leaf-tint" },
  B2: { strong: "bg-grape-soft", soft: "bg-grape-tint" },
  C1: { strong: "bg-sky-deep", soft: "bg-sky-tint" },
};

export const LEVEL_LABEL: Record<Level, string> = {
  A1: "Mất gốc",
  A2: "Sơ cấp",
  B1: "Trung cấp",
  B2: "Trung cao",
  C1: "Thành thạo",
};
