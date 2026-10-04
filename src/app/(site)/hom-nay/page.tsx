import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { TodayPlan } from "@/components/today-plan";
import { loadPlanInput } from "@/lib/plan-data";

export const metadata: Metadata = { title: "Hôm nay học gì | Crouse English", robots: { index: false, follow: false } };

export default async function TodayPage() {
  const input = await loadPlanInput();
  if (!input) notFound();
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      {/* the day to show comes from ?ngay=, read in the browser */}
      <Suspense fallback={<div className="clay h-96 animate-pulse bg-card" aria-hidden />}>
        <TodayPlan input={input} />
      </Suspense>
    </div>
  );
}
