import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MyPlan } from "@/components/my-plan";
import { loadPlanInput } from "@/lib/plan-data";

export const metadata: Metadata = { title: "Lộ trình của tôi | Crouse English", robots: { index: false, follow: false } };

export default async function MyPlanPage() {
  const input = await loadPlanInput();
  if (!input) notFound();
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <MyPlan input={input} />
    </div>
  );
}
