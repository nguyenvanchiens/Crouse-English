import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, ExternalLink } from "lucide-react";
import { FaqItem } from "@/components/ui/faq-item";
import { EnrollPanel } from "@/components/course/enroll-panel";
import { GOAL_META, LEVEL_LABEL } from "@/components/course/goal-meta";
import { Syllabus } from "@/components/course/syllabus";
import { getCourse, getCourses } from "@/lib/content";
import { GUIDED_HOURS, contentHours, formatHours } from "@/lib/course-utils";
import type { StudyResource } from "@/content/types";
import Link from "next/link";

const RESOURCE_KIND: Record<StudyResource["kind"], string> = { listening: "Nghe", reading: "Đọc", speaking: "Nói", writing: "Viết", vocab: "Từ vựng" };

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
        <h1 className="mt-5 text-balance font-display text-[2.5rem] font-extrabold leading-[1.05] sm:text-6xl">{course.title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-soft">{course.summary}</p>
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
              <li key={o} className="clay-soft flex items-start gap-3 px-4 py-3 font-medium">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-leaf-soft"><Check className="size-4 text-leaf" strokeWidth={3} aria-hidden /></span>
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

        {course.wordBank?.length ? (
          <section aria-labelledby="word-bank" className="clay p-6 sm:p-8">
            <h2 id="word-bank" className="font-display text-3xl font-extrabold">Kho từ vựng {course.level}</h2>
            <p className="mt-3 text-lg">
              Ngoài từ trong bài, khóa có thêm <strong>{course.wordBank.reduce((n, t) => n + t.words.length, 0)} từ</strong> chia theo{" "}
              {course.wordBank.length} chủ đề, có phiên âm, nghĩa, ví dụ và lịch ôn lặp lại ngắt quãng.
            </p>
            <Link href={`/tu-vung/${course.slug}`} className="btn btn-primary mt-5">Mở kho từ vựng</Link>
          </section>
        ) : null}

        {course.selfStudy && (
          <section id="tu-hoc" aria-labelledby="self-study" className="scroll-mt-24">
            <h2 id="self-study" className="font-display text-3xl font-extrabold">Kế hoạch tự học ngoài khóa</h2>
            <p className="mt-3 max-w-2xl text-lg text-ink-soft">
              Bài học của khóa khoảng {formatHours(contentHours(course))} giờ. Để thật sự đạt {course.level}, Cambridge English ước tính cần
              khoảng {GUIDED_HOURS[course.level][0]}–{GUIDED_HOURS[course.level][1]} giờ học và luyện tập tính từ đầu, nên hãy dành thêm
              khoảng <strong className="text-ink">{course.selfStudy.weeklyHours} giờ mỗi tuần</strong> cho việc nghe, đọc, nói và viết thật.
            </p>
            <h3 className="mt-6 font-display text-xl font-bold">Một tuần gợi ý</h3>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-lg">
              {course.selfStudy.routine.map((r) => <li key={r}>{r}</li>)}
            </ul>
            <h3 className="mt-6 font-display text-xl font-bold">Tài liệu miễn phí nên dùng</h3>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {course.selfStudy.resources.map((r) => (
                <li key={r.url}>
                  {/* the whole card is the link: an easy target on a phone */}
                  <a href={r.url} target="_blank" rel="noopener noreferrer" className="clay-soft group flex h-full flex-col p-4 hover:bg-sun-soft">
                    <span className="flex items-start justify-between gap-3">
                      <span className="font-display text-lg font-bold leading-snug underline-offset-4 group-hover:underline">{r.name}</span>
                      <ExternalLink className="mt-1 size-4 shrink-0 text-ink-soft" aria-hidden />
                    </span>
                    <span className="mt-1 w-fit rounded-full bg-sky px-2 py-0.5 text-sm font-semibold">{RESOURCE_KIND[r.kind]}</span>
                    <span className="mt-2 text-ink-soft">{r.how}</span>
                    <span className="sr-only"> (mở trang mới)</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section aria-labelledby="teacher" className="clay flex flex-col gap-5 p-6 sm:flex-row sm:items-center">
          <span className="grid size-20 shrink-0 place-items-center rounded-full border-[2.5px] border-ink bg-sun font-display text-2xl font-extrabold">
            {course.teacher.initials}
          </span>
          <div>
            <h2 id="teacher" className="font-display text-2xl font-extrabold">{course.teacher.name}</h2>
            <p className="mt-1 text-ink-soft">{course.teacher.bio}</p>
          </div>
        </section>

        <section aria-labelledby="faq">
          <h2 id="faq" className="font-display text-3xl font-extrabold">Câu hỏi thường gặp</h2>
          <div className="mt-6 space-y-3">
            {course.faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
