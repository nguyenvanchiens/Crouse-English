import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlanOverview } from "@/components/plan-overview";
import { loadPlanInput } from "@/lib/plan-data";

export const metadata: Metadata = { title: "Tổng quan lộ trình | Crouse English", robots: { index: false, follow: false } };

export default async function OverviewPage() {
  const input = await loadPlanInput();
  if (!input) notFound();
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <PlanOverview input={input} />
    </div>
  );
}
