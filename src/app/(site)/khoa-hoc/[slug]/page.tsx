import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, Star } from "lucide-react";
import { EnrollPanel } from "@/components/course/enroll-panel";
import { GOAL_META, LEVEL_LABEL } from "@/components/course/goal-meta";
import { Syllabus } from "@/components/course/syllabus";
import { getCourse, getCourses } from "@/lib/content";

export async function generateStaticParams() {
  return (await getCourses()).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(props: PageProps<"/khoa-hoc/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const course = await getCourse(slug);
  return course ? { title: `${course.title} | Crouse English`, description: course.summary } : {};
}

export default async function CoursePage(props: PageProps<"/khoa-hoc/[slug]">) {
  const { slug } = await props.params;
  const course = await getCourse(slug);
  if (!course) notFound();
  const meta = GOAL_META[course.goal];

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[minmax(0,1fr)_22rem]">
      <header>
        <p className="flex flex-wrap gap-2">
          <span className={`rounded-full border-2 border-ink px-3 py-1 text-sm font-semibold ${meta.tone}`}>{meta.label}</span>
          <span className="rounded-full border-2 border-ink bg-card px-3 py-1 text-sm font-semibold">
            Trình độ {course.level}, {LEVEL_LABEL[course.level].toLowerCase()}
          </span>
          {course.status === "soon" && (
            <span className="rounded-full border-2 border-ink bg-sun px-3 py-1 text-sm font-semibold">Sắp ra mắt</span>
          )}
        </p>
        <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.05] sm:text-6xl">{course.title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-soft">{course.summary}</p>
        <p className="mt-4 flex items-center gap-2 font-semibold">
          <Star className="size-5 fill-current text-tangerine-deep" aria-hidden />
          {course.rating.toLocaleString("vi-VN")} điểm đánh giá
        </p>
      </header>

      <aside className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <div className="lg:sticky lg:top-24">
          <EnrollPanel course={course} />
        </div>
      </aside>

      <div className="space-y-16">
        <section aria-labelledby="outcomes">
          <h2 id="outcomes" className="font-display text-3xl font-extrabold">Học xong bạn làm được</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {course.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-3 rounded-2xl border-[2.5px] border-ink bg-card px-4 py-3 font-medium">
                <Check className="mt-0.5 size-5 shrink-0 text-leaf" aria-hidden />
                {o}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="audience">
          <h2 id="audience" className="font-display text-3xl font-extrabold">Khóa học dành cho</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-lg">
            {course.audience.map((a) => <li key={a}>{a}</li>)}
          </ul>
        </section>

        <section aria-labelledby="syllabus">
          <h2 id="syllabus" className="font-display text-3xl font-extrabold">Giáo trình</h2>
          <div className="mt-6"><Syllabus course={course} /></div>
        </section>

        <section aria-labelledby="teacher" className="clay flex flex-col gap-5 p-6 sm:flex-row sm:items-center">
          <span className="grid size-20 shrink-0 place-items-center rounded-full border-[2.5px] border-ink bg-sun font-display text-2xl font-extrabold">
            {course.teacher.initials}
          </span>
          <div>
            <h2 id="teacher" className="font-display text-2xl font-extrabold">{course.teacher.name}</h2>
            <p className="mt-1 text-ink-soft">{course.teacher.bio}</p>
          </div>
        </section>

        <section aria-labelledby="reviews">
          <h2 id="reviews" className="font-display text-3xl font-extrabold">Cảm nhận học viên</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {course.reviews.map((r) => (
              <figure key={r.name} className="clay p-6">
                <blockquote className="text-lg leading-relaxed">“{r.quote}”</blockquote>
                <figcaption className="mt-4">
                  <span className="block font-semibold">{r.name}</span>
                  <span className="block text-sm text-ink-soft">{r.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section aria-labelledby="faq">
          <h2 id="faq" className="font-display text-3xl font-extrabold">Câu hỏi thường gặp</h2>
          <div className="mt-6 space-y-4">
            {course.faqs.map((f) => (
              <details key={f.q} className="clay group p-0 [box-shadow:var(--shadow-clay-sm)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[1.5rem] px-6 py-5 font-display text-xl font-bold">
                  {f.q}
                  <span aria-hidden className="grid size-8 shrink-0 place-items-center rounded-full border-[2.5px] border-ink bg-sun text-lg transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <p className="px-6 pb-6 text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
