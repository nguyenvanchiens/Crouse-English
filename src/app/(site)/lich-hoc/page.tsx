import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StudyCalendar } from "@/components/study-calendar";
import { loadPlanInput } from "@/lib/plan-data";

export const metadata: Metadata = { title: "Lịch học tới C1 | Crouse English", robots: { index: false, follow: false } };

export default async function CalendarPage() {
  const input = await loadPlanInput();
  if (!input) notFound();
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <StudyCalendar input={input} />
    </div>
  );
}
