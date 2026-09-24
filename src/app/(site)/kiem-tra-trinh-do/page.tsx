import type { Metadata } from "next";
import { PlacementTest } from "@/components/placement-test";
import { getCourses, getPlacementTest } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kiểm tra trình độ tiếng Anh miễn phí | Crouse English",
  description: "20 câu, khoảng 10 phút, biết ngay trình độ và khóa học phù hợp.",
};

export default async function PlacementPage() {
  const [questions, courses] = await Promise.all([getPlacementTest(), getCourses()]);
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <PlacementTest questions={questions} courses={courses} />
    </div>
  );
}
