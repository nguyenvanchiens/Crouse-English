import Link from "next/link";
import { BookOpenCheck, Gauge, Mic, PencilLine, Star } from "lucide-react";
import { CourseCard } from "@/components/course/course-card";
import { getCourses } from "@/lib/content";
import { WordCard } from "@/components/word-card";

const LEVELS = [
  { code: "A1", name: "Mất gốc", can: "Chào hỏi, giới thiệu bản thân, gọi món" },
  { code: "A2", name: "Sơ cấp", can: "Hỏi đường, mua sắm, kể về một ngày của bạn" },
  { code: "B1", name: "Trung cấp", can: "Trò chuyện với người nước ngoài khi đi du lịch" },
  { code: "B2", name: "Trung cao", can: "Họp, thuyết trình, viết email công việc" },
  { code: "C1", name: "Thành thạo", can: "Tranh luận, học và làm việc hoàn toàn bằng tiếng Anh" },
];

const STEPS = [
  {
    icon: BookOpenCheck,
    title: "Đọc bài giảng ngắn",
    body: "Ngữ pháp và cách dùng giải thích bằng tiếng Việt, có bảng tóm tắt, ví dụ bấm vào để nghe và những lỗi người Việt hay mắc.",
  },
  {
    icon: PencilLine,
    title: "Học từ và làm bài tập",
    body: "Từ vựng có phát âm và trọng âm, rồi 8 câu bài tập đủ dạng: trắc nghiệm, điền từ, sắp xếp câu, nghe chọn. Chấm ngay từng câu.",
  },
  {
    icon: Mic,
    title: "Luyện nói, được chấm phát âm",
    body: "Đọc to từng câu và thấy ngay từ nào bạn nói chưa rõ. Xong bài, tiến độ và chuỗi ngày học được lưu lại.",
  },
];

const REVIEWS = [
  {
    name: "Minh Anh",
    role: "Nhân viên kế toán, Hà Nội",
    quote:
      "Mình mất gốc từ cấp 3. Sau 3 tháng mình đã tự gọi điện đặt phòng khách sạn khi đi Singapore.",
    color: "bg-sun",
  },
  {
    name: "Quốc Huy",
    role: "Sinh viên năm 4, TP.HCM",
    quote:
      "Phần chấm phát âm chỉ ra đúng lỗi mình đọc sai 10 năm nay. Thi thử TOEIC tăng từ 480 lên 785.",
    color: "bg-leaf-soft",
  },
  {
    name: "Thu Trang",
    role: "Phụ huynh bé Bin, 8 tuổi",
    quote:
      "Con tự mở bài học mỗi tối mà không cần nhắc. Báo cáo hằng tuần giúp mình biết con đang học gì.",
    color: "bg-grape-soft",
  },
];

const FAQS = [
  {
    q: "Mình mất gốc hoàn toàn thì học được không?",
    a: "Được. Cấp A1 bắt đầu từ động từ to be và những câu chào hỏi đầu tiên. Bài kiểm tra trình độ sẽ gợi ý cấp phù hợp để bắt đầu.",
  },
  {
    q: "Bài kiểm tra trình độ mất bao lâu, có mất phí không?",
    a: "Khoảng 10 phút, miễn phí. Gồm 20 câu từ vựng, ngữ pháp và nghe; kết quả có ngay kèm cấp nên bắt đầu.",
  },
  {
    q: "Khóa học có mất phí không?",
    a: "Không. Cả 5 cấp từ A1 đến C1 đều miễn phí, học được toàn bộ bài và nhận chứng chỉ từng cấp.",
  },
  {
    q: "Có cần tạo tài khoản không?",
    a: "Chưa cần. Tiến độ được lưu ngay trên trình duyệt bạn đang dùng, vì vậy hãy học trên cùng một máy và một trình duyệt.",
  },
];

export default async function Home() {
  const courses = await getCourses();
  const pathCourses = courses.filter((c) => c.goal === "lo-trinh");
  const otherCourses = courses.filter((c) => c.goal !== "lo-trinh");
  return (
    <>
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:pt-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border-[2.5px] border-ink bg-card px-4 py-1.5 font-semibold">
              <span className="size-2.5 rounded-full bg-leaf" aria-hidden />
              Khóa học tiếng Anh miễn phí cho người Việt
            </p>
            <h1 className="mt-6 font-display text-[2.75rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.25rem]">
              Nói tiếng Anh tự tin, bắt đầu từ cách đọc đúng từng từ.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-soft">
              Lộ trình 30 bài từ A1 đến C1: bài giảng bằng tiếng Việt, bài tập chấm ngay
              và luyện phát âm có chấm điểm. Hoàn toàn miễn phí.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/kiem-tra-trinh-do" className="btn btn-primary text-lg">
                Kiểm tra trình độ trong 10 phút
              </Link>
              <Link href="/khoa-hoc" className="btn btn-ghost text-lg">
                Xem các khóa học
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3" aria-hidden>
                {["bg-sun", "bg-leaf-soft", "bg-grape-soft", "bg-sky-deep"].map((c, i) => (
                  <span
                    key={c}
                    className={`grid size-11 place-items-center rounded-full border-[2.5px] border-ink font-display font-bold ${c}`}
                  >
                    {["M", "H", "T", "L"][i]}
                  </span>
                ))}
              </div>
              <p className="text-ink-soft">
                <strong className="text-ink">12.400 học viên</strong> đang học mỗi ngày
              </p>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <p className="mb-4 font-display text-lg font-semibold text-ink-soft">
              Thử ngay: bấm để nghe
            </p>
            <WordCard />
          </div>
        </section>

        {/* Level path */}
        <section id="lo-trinh" className="border-y-[2.5px] border-ink bg-card py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="max-w-2xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              Lộ trình 5 cấp, bạn biết rõ mình đang ở đâu
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-ink-soft">
              Mỗi cấp có mục tiêu cụ thể: xong cấp này, bạn làm được gì bằng tiếng Anh.
            </p>

            <ol className="relative mt-14 grid gap-6 md:grid-cols-5 md:gap-4">
              <span
                aria-hidden
                className="absolute left-7 top-7 hidden h-[3px] w-[calc(100%-3.5rem)] bg-[repeating-linear-gradient(90deg,var(--color-ink)_0_12px,transparent_12px_22px)] md:block"
              />
              <span
                aria-hidden
                className="absolute bottom-7 left-7 top-7 w-[3px] bg-[repeating-linear-gradient(180deg,var(--color-ink)_0_12px,transparent_12px_22px)] md:hidden"
              />
              {LEVELS.map((l, i) => (
                <li key={l.code} className="relative">
                  <Link
                    href={`/khoa-hoc/tieng-anh-${l.code.toLowerCase()}`}
                    className="group flex gap-4 rounded-2xl md:flex-col"
                  >
                  <span
                    className={`z-10 grid size-14 shrink-0 place-items-center rounded-full border-[2.5px] border-ink font-display text-xl font-extrabold shadow-[0_4px_0_0_var(--color-ink)] ${
                      ["bg-sun", "bg-tangerine", "bg-leaf-soft", "bg-grape-soft", "bg-sky-deep"][i]
                    }`}
                  >
                    {l.code}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold group-hover:text-tangerine-deep">{l.name}</h3>
                    <p className="mt-1 text-ink-soft">{l.can}</p>
                  </div>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Courses */}
        <section id="khoa-hoc" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <h2 className="max-w-2xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">
            Bắt đầu đúng cấp của bạn
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">
            Mỗi cấp là một khóa 6 bài: bài giảng bằng tiếng Việt, từ vựng có phát âm, bài tập chấm ngay và luyện nói.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pathCourses.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
            <Link
              href="/kiem-tra-trinh-do"
              className="clay flex flex-col justify-between bg-tangerine p-6 transition-transform duration-200 hover:-translate-y-1"
            >
              <span className="grid size-12 place-items-center rounded-2xl border-[2.5px] border-ink bg-card">
                <Gauge className="size-6" aria-hidden />
              </span>
              <span>
                <span className="mt-5 block font-display text-2xl font-extrabold leading-tight">Chưa biết bắt đầu từ đâu?</span>
                <span className="mt-2 block">Làm bài kiểm tra 10 phút, hệ thống gợi ý cấp phù hợp.</span>
              </span>
            </Link>
          </div>
          {otherCourses.length > 0 && (
            <>
              <h3 className="mt-16 font-display text-2xl font-extrabold">Khóa luyện thi và tiếng Anh trẻ em</h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {otherCourses.map((c) => (
                  <CourseCard key={c.slug} course={c} />
                ))}
              </div>
            </>
          )}
        </section>

        {/* How it works — a real sequence, so numbered */}
        <section className="bg-ink py-24 text-card">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="max-w-2xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              Một bài học diễn ra thế nào
            </h2>
            <ol className="mt-12 grid gap-6 md:grid-cols-3">
              {STEPS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <li key={s.title} className="rounded-[1.5rem] border-[2.5px] border-card/80 p-7">
                    <div className="flex items-center gap-3">
                      <span className="grid size-11 place-items-center rounded-full bg-sun font-display text-lg font-extrabold text-ink">
                        {i + 1}
                      </span>
                      <Icon className="size-6 text-sun" aria-hidden />
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-bold">{s.title}</h3>
                    <p className="mt-2 text-card/80">{s.body}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* Reviews */}
        <section id="cam-nhan" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <h2 className="max-w-2xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">
            Học viên nói gì sau khóa học
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <figure
                key={r.name}
                className={`clay p-7 ${i === 1 ? "md:translate-y-8" : ""}`}
              >
                <div className="flex gap-1 text-tangerine-deep" aria-label="5 trên 5 sao">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="size-5 fill-current" aria-hidden />
                  ))}
                </div>
                <blockquote className="mt-4 text-lg leading-relaxed">“{r.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    className={`grid size-11 place-items-center rounded-full border-[2.5px] border-ink font-display font-bold ${r.color}`}
                    aria-hidden
                  >
                    {r.name[0]}
                  </span>
                  <span>
                    <span className="block font-semibold">{r.name}</span>
                    <span className="block text-sm text-ink-soft">{r.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Placement test CTA */}
        <section id="kiem-tra" className="mx-auto max-w-6xl px-4 pb-24 pt-8 sm:px-6">
          <div className="clay relative overflow-hidden bg-tangerine px-6 py-14 text-center sm:px-12">
            <h2 className="mx-auto max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              Chưa biết mình đang ở trình độ nào?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg">
              Làm bài kiểm tra 10 phút, nhận kết quả ngay kèm lộ trình học phù hợp.
              Miễn phí, không cần thẻ thanh toán.
            </p>
            <Link href="/kiem-tra-trinh-do" className="btn btn-ghost mt-8 text-lg">
              Bắt đầu bài kiểm tra
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section id="hoi-dap" className="mx-auto max-w-3xl px-4 pb-24 sm:px-6">
          <h2 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">
            Câu hỏi thường gặp
          </h2>
          <div className="mt-10 space-y-4">
            {FAQS.map((f) => (
              <details key={f.q} className="clay group p-0 [box-shadow:var(--shadow-clay-sm)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[1.5rem] px-6 py-5 font-display text-xl font-bold">
                  {f.q}
                  <span
                    aria-hidden
                    className="grid size-8 shrink-0 place-items-center rounded-full border-[2.5px] border-ink bg-sun text-lg transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="px-6 pb-6 text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
    </>
  );
}
