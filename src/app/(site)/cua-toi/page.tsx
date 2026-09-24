import type { Metadata } from "next";
import { MyCourses } from "@/components/my-courses";
import { getCourses } from "@/lib/content";

export const metadata: Metadata = { title: "Khóa học của tôi | Crouse English" };

export default async function MyCoursesPage() {
  const courses = await getCourses();
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-5xl font-extrabold leading-tight">Khóa học của tôi</h1>
      <MyCourses courses={courses} />
    </div>
  );
}
