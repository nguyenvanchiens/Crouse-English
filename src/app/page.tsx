import {
  BookOpenCheck,
  Briefcase,
  Check,
  GraduationCap,
  Mic,
  Smile,
  Star,
  Users,
} from "lucide-react";
import { WordCard } from "@/components/word-card";

const LEVELS = [
  { code: "A1", name: "Mất gốc", can: "Chào hỏi, giới thiệu bản thân, gọi món" },
  { code: "A2", name: "Sơ cấp", can: "Hỏi đường, mua sắm, kể về một ngày của bạn" },
  { code: "B1", name: "Trung cấp", can: "Trò chuyện với người nước ngoài khi đi du lịch" },
  { code: "B2", name: "Trung cao", can: "Họp, thuyết trình, viết email công việc" },
  { code: "C1", name: "Thành thạo", can: "Tranh luận, học và làm việc hoàn toàn bằng tiếng Anh" },
];

const COURSES = [
  {
    icon: Smile,
    title: "Tiếng Anh giao tiếp",
    who: "Cho người mất gốc và người đi làm muốn nói trôi chảy",
    detail: "3 tháng, A1 đến B1, lớp 6 người",
    price: "1.290.000đ/tháng",
    tone: "bg-sun",
    featured: true,
    includes: [
      "Bài học 15 phút mỗi ngày trên điện thoại",
      "Chấm phát âm từng câu bạn nói",
      "1 buổi lớp nhóm với giáo viên mỗi tuần",
      "Báo cáo tiến độ sau mỗi cấp",
    ],
  },
  {
    icon: GraduationCap,
    title: "Luyện thi IELTS 6.5+",
    who: "Đủ 4 kỹ năng, chấm Writing và Speaking theo tiêu chí thật",
    detail: "4 tháng, đầu vào B1",
    price: "2.490.000đ/tháng",
    tone: "bg-grape-soft",
  },
  {
    icon: Briefcase,
    title: "TOEIC 750+",
    who: "Cho sinh viên sắp ra trường và người cần chứng chỉ để thăng tiến",
    detail: "10 tuần, đầu vào 350+",
    price: "1.590.000đ/tháng",
    tone: "bg-leaf-soft",
  },
  {
    icon: BookOpenCheck,
    title: "Tiếng Anh cho trẻ 6–12 tuổi",
    who: "Học qua trò chơi, bài hát và truyện tranh, có báo cáo cho phụ huynh",
    detail: "Theo năm học, 2 buổi/tuần",
    price: "990.000đ/tháng",
    tone: "bg-sky-deep",
    wide: true,
  },
];

const STEPS = [
  {
    icon: BookOpenCheck,
    title: "Học 15 phút mỗi ngày",
    body: "Bài học ngắn trên điện thoại: từ vựng, mẫu câu và nghe hiểu theo đúng trình độ của bạn.",
  },
  {
    icon: Mic,
    title: "Luyện nói, được chấm phát âm",
    body: "Đọc to từng câu và thấy ngay âm nào bạn đọc chưa chuẩn, trọng âm đặt sai ở đâu.",
  },
  {
    icon: Users,
    title: "Nói thật với giáo viên",
    body: "Mỗi tuần một buổi lớp nhóm 6 người qua video, dùng lại đúng những gì bạn đã học.",
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
    a: "Được. Lộ trình bắt đầu từ cấp A1 với bảng chữ cái, phát âm cơ bản và mẫu câu chào hỏi. Bài kiểm tra đầu vào sẽ xếp bạn vào đúng cấp.",
  },
  {
    q: "Bài kiểm tra trình độ mất bao lâu, có mất phí không?",
    a: "Khoảng 10 phút, miễn phí. Bạn làm phần nghe, đọc và nói vài câu ngắn, kết quả có ngay kèm lộ trình gợi ý.",
  },
  {
    q: "Lớp với giáo viên học vào giờ nào?",
    a: "Có lớp buổi tối các ngày trong tuần và lớp cuối tuần. Bạn chọn khung giờ khi đăng ký và có thể đổi lớp khi bận.",
  },
  {
    q: "Nếu học không hợp thì sao?",
    a: "Bạn được hoàn tiền 100% trong 7 ngày đầu nếu thấy khóa học không phù hợp, không cần nêu lý do.",
  },
];

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2 rounded-xl" aria-label="Crouse English, về trang chủ">
      <span className="grid size-10 place-items-center rounded-2xl border-[2.5px] border-ink bg-tangerine font-display text-xl font-extrabold shadow-[0_3px_0_0_var(--color-ink)]">
        Cr
      </span>
      <span className="font-display text-xl font-bold leading-none">
        Crouse <span className="text-ink-soft">English</span>
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-30 border-b-[2.5px] border-ink bg-sky/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Logo />
          <ul className="hidden items-center gap-7 font-semibold md:flex">
            <li><a className="hover:text-tangerine-deep" href="#khoa-hoc">Khóa học</a></li>
            <li><a className="hover:text-tangerine-deep" href="#lo-trinh">Lộ trình</a></li>
            <li><a className="hover:text-tangerine-deep" href="#cam-nhan">Cảm nhận</a></li>
            <li><a className="hover:text-tangerine-deep" href="#hoi-dap">Hỏi đáp</a></li>
          </ul>
          <a href="#kiem-tra" className="btn btn-primary min-h-11 px-4 text-base">
            Học thử miễn phí
          </a>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:pt-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border-[2.5px] border-ink bg-card px-4 py-1.5 font-semibold">
              <span className="size-2.5 rounded-full bg-leaf" aria-hidden />
              Khóa học tiếng Anh cho người Việt
            </p>
            <h1 className="mt-6 font-display text-[2.75rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.25rem]">
              Nói tiếng Anh tự tin, bắt đầu từ cách đọc đúng từng từ.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-soft">
              Bài học 15 phút mỗi ngày, luyện phát âm có chấm điểm và lớp nhóm nhỏ
              với giáo viên. Học đúng trình độ của bạn, từ mất gốc đến IELTS.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#kiem-tra" className="btn btn-primary text-lg">
                Kiểm tra trình độ trong 10 phút
              </a>
              <a href="#khoa-hoc" className="btn btn-ghost text-lg">
                Xem các khóa học
              </a>
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
                <li key={l.code} className="relative flex gap-4 md:flex-col">
                  <span
                    className={`z-10 grid size-14 shrink-0 place-items-center rounded-full border-[2.5px] border-ink font-display text-xl font-extrabold shadow-[0_4px_0_0_var(--color-ink)] ${
                      ["bg-sun", "bg-tangerine", "bg-leaf-soft", "bg-grape-soft", "bg-sky-deep"][i]
                    }`}
                  >
                    {l.code}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold">{l.name}</h3>
                    <p className="mt-1 text-ink-soft">{l.can}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Courses */}
        <section id="khoa-hoc" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <h2 className="max-w-2xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">
            Chọn khóa học theo mục tiêu của bạn
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {COURSES.map((c) => {
              const Icon = c.icon;
              return (
                <article
                  key={c.title}
                  className={`clay flex flex-col p-7 ${c.featured ? "md:col-span-2 md:row-span-2 md:p-10" : ""} ${c.wide ? "md:col-span-3 md:flex-row md:items-center md:gap-8" : ""} ${c.tone}`}
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl border-[2.5px] border-ink bg-card">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  {c.featured && (
                    <p className="mt-6 w-fit rounded-full bg-ink px-3 py-1 text-sm font-semibold text-card">
                      Được chọn nhiều nhất
                    </p>
                  )}
                  <div className={c.wide ? "md:flex-1" : ""}>
                    <h3
                      className={`mt-4 font-display font-extrabold leading-tight ${c.featured ? "text-4xl sm:text-5xl" : "text-2xl"} ${c.wide ? "md:mt-0" : ""}`}
                    >
                      {c.title}
                    </h3>
                    <p className={`mt-3 text-ink ${c.featured ? "max-w-md text-lg" : ""}`}>{c.who}</p>
                    <p className="mt-2 text-sm font-semibold text-ink-soft">{c.detail}</p>
                  </div>
                  {c.includes && (
                    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                      {c.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3 rounded-2xl border-[2.5px] border-ink bg-card px-4 py-3 font-medium">
                          <Check className="mt-0.5 size-5 shrink-0 text-leaf" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className={`mt-auto flex flex-wrap items-center justify-between gap-3 pt-6 ${c.wide ? "md:mt-0 md:gap-6 md:pt-0" : ""}`}>
                    <p className="font-display text-xl font-bold">{c.price}</p>
                    <a href="#kiem-tra" className="btn btn-ghost min-h-11 px-4 text-base">
                      Xem chi tiết
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* How it works — a real sequence, so numbered */}
        <section className="bg-ink py-24 text-card">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="max-w-2xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              Một tuần học diễn ra thế nào
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
            <a href="#" className="btn btn-ghost mt-8 text-lg">
              Bắt đầu bài kiểm tra
            </a>
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
      </main>

      <footer className="border-t-[2.5px] border-ink bg-card">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <Logo />
          <p className="text-ink-soft">Khóa học tiếng Anh giao tiếp, IELTS, TOEIC và tiếng Anh trẻ em.</p>
          <p className="text-sm text-ink-soft">© 2026 Crouse English</p>
        </div>
      </footer>
    </>
  );
}
