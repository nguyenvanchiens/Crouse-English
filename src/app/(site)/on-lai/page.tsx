import type { Metadata } from "next";
import { Suspense } from "react";
import { ReviewDay } from "@/components/review-day";
import { notFound } from "next/navigation";
import { loadPlanInput, loadReviewBank } from "@/lib/plan-data";

export const metadata: Metadata = { title: "Ôn lại ngày đã học | Crouse English", robots: { index: false, follow: false } };

export default async function ReviewDayPage() {
  const [bank, input] = await Promise.all([loadReviewBank(), loadPlanInput()]);
  if (!input) notFound();
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      {/* the day to review comes from ?ngay=, read in the browser */}
      <Suspense fallback={<div className="clay h-96 animate-pulse bg-card" aria-hidden />}>
        <ReviewDay bank={bank} input={input} />
      </Suspense>
    </div>
  );
}
