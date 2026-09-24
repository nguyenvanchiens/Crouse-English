import { BookOpenCheck, Briefcase, GraduationCap, Smile, type LucideIcon } from "lucide-react";
import type { Goal, Level } from "@/content/types";

export const GOAL_META: Record<Goal, { label: string; tone: string; icon: LucideIcon }> = {
  "giao-tiep": { label: "Giao tiếp", tone: "bg-sun", icon: Smile },
  ielts: { label: "IELTS", tone: "bg-grape-soft", icon: GraduationCap },
  toeic: { label: "TOEIC", tone: "bg-leaf-soft", icon: Briefcase },
  "tre-em": { label: "Trẻ em", tone: "bg-sky-deep", icon: BookOpenCheck },
};

export const LEVEL_LABEL: Record<Level, string> = {
  A1: "Mất gốc",
  A2: "Sơ cấp",
  B1: "Trung cấp",
  B2: "Trung cao",
  C1: "Thành thạo",
};
