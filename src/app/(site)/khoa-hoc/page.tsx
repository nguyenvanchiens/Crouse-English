import { Suspense } from "react";
import type { Metadata } from "next";
import { CourseGrid } from "@/components/course/course-card";
import { CourseCatalog } from "@/components/course/course-catalog";
import { getCourses } from "@/lib/content";

export const metadata: Metadata = {
  title: "Khóa học tiếng Anh | Crouse English",
  description: "Khóa học tiếng Anh giao tiếp, IELTS, TOEIC và tiếng Anh cho trẻ em.",
};

export default async function CoursesPage() {
  const courses = await getCourses();
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-5xl font-extrabold leading-tight">Khóa học tiếng Anh</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-soft">
        Chọn khóa theo mục tiêu và trình độ. Chưa biết mình ở đâu? Làm bài kiểm tra trình độ 10 phút.
      </p>
      <Suspense fallback={<div className="mt-10"><CourseGrid courses={courses} /></div>}>
        <CourseCatalog courses={courses} />
      </Suspense>
    </div>
  );
}
