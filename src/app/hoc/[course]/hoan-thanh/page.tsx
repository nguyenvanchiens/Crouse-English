import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CompletionView } from "@/components/completion-view";
import { getCourse, getCourses } from "@/lib/content";

export const metadata: Metadata = { title: "Hoàn thành khóa học | Crouse English" };

export async function generateStaticParams() {
  return (await getCourses()).map((c) => ({ course: c.slug }));
}

export default async function CompletionPage(props: PageProps<"/hoc/[course]/hoan-thanh">) {
  const { course: slug } = await props.params;
  const course = await getCourse(slug);
  if (!course) notFound();
  return <CompletionView course={course} />;
}
