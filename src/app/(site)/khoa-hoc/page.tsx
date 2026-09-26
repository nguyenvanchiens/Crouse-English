import { Suspense } from "react";
import type { Metadata } from "next";
import { CourseCatalog } from "@/components/course/course-catalog";
import { getCourses } from "@/lib/content";

export const metadata: Metadata = {
  title: "Khóa học tiếng Anh | Crouse English",
  description: "Khóa học tiếng Anh giao tiếp, IELTS, TOEIC và tiếng Anh cho trẻ em.",
};

/** Neutral placeholder: the unfiltered grid would flash before the URL filter applies. */
function CatalogSkeleton({ count }: { count: number }) {
  return (
    <div className="mt-10 space-y-4" aria-hidden>
      <div className="h-11 w-full max-w-xl animate-pulse rounded-full bg-sky-deep" />
      <div className="h-11 w-full max-w-md animate-pulse rounded-full bg-sky-deep" />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="clay h-64 animate-pulse bg-card" />
        ))}
      </div>
    </div>
  );
}

export default async function CoursesPage() {
  const courses = await getCourses();
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-5xl font-extrabold leading-tight">Khóa học tiếng Anh</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-soft">
        Chọn khóa theo mục tiêu và trình độ. Chưa biết mình ở đâu? Làm bài kiểm tra trình độ 20 phút.
      </p>
      <Suspense fallback={<CatalogSkeleton count={courses.length} />}>
        <CourseCatalog courses={courses} />
      </Suspense>
    </div>
  );
}
