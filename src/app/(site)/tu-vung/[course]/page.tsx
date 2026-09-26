import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WordBank } from "@/components/word-bank";
import { getCourse, getCourses } from "@/lib/content";

export async function generateStaticParams() {
  return (await getCourses()).filter((c) => c.wordBank?.length).map((c) => ({ course: c.slug }));
}

export async function generateMetadata(props: PageProps<"/tu-vung/[course]">): Promise<Metadata> {
  const { course: slug } = await props.params;
  const course = await getCourse(slug);
  return course ? { title: `Từ vựng ${course.level} theo chủ đề | Crouse English` } : {};
}

export default async function CourseWordBankPage(props: PageProps<"/tu-vung/[course]">) {
  const { course: slug } = await props.params;
  const course = await getCourse(slug);
  if (!course?.wordBank?.length) notFound();
  const n = course.wordBank.reduce((k, t) => k + t.words.length, 0);
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <p className="font-semibold text-ink-soft">
        <Link href="/tu-vung" className="underline underline-offset-4">Kho từ vựng</Link> / {course.level}
      </p>
      <h1 className="mt-2 font-display text-5xl font-extrabold leading-tight">Từ vựng {course.level}</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-soft">
        {n} từ thêm cho khóa {course.title}, chia theo {course.wordBank.length} chủ đề. Đây là những từ không có trong bài học;
        hãy học song song với khóa.
      </p>
      <WordBank courseSlug={course.slug} topics={course.wordBank} />
    </div>
  );
}
