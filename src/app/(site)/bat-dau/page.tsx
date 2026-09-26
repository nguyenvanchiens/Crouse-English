import type { Metadata } from "next";
import Link from "next/link";
import { NextStep } from "@/components/next-step";
import { GUIDED_HOURS, contentHours, formatHours } from "@/lib/course-utils";
import { getCourses } from "@/lib/content";

export const metadata: Metadata = {
  title: "Bắt đầu từ đâu? Hướng dẫn học cho người mới | Crouse English",
  description: "Nên học gì trước, học theo thứ tự nào và mỗi ngày học bao lâu: lộ trình từng bước từ kiểm tra trình độ, phát âm, A1 đến C1.",
};

const LESSON_STEPS = [
  ["Bài giảng", "Đọc hết, nghe các câu ví dụ, chú ý phần “Lỗi hay gặp” và “Ghi nhớ” ở cuối. Chưa hiểu thì đọc lại trước khi sang bước sau."],
  ["Từ vựng", "Bấm nghe từng từ, nhìn trọng âm (âm tiết in đậm) và đọc to theo. Đừng chỉ nhìn nghĩa."],
  ["Hội thoại", "Nghe cả đoạn, rồi đóng vai: máy đọc một vai, bạn nói vai còn lại. Cuối cùng trả lời câu hỏi hiểu hội thoại."],
  ["Đọc hiểu", "Đọc một lượt lấy ý chính, rồi mới làm câu hỏi. Bấm nghe từng đoạn để luyện cả nghe."],
  ["Bài tập", "10 câu đủ dạng, có giải thích ngay. Câu sai thì đọc kỹ lời giải thích; có thể làm lại cả phần."],
  ["Luyện nói", "Nghe mẫu, bấm nói và xem máy nghe được gì. Phần nói tự do: trả lời bằng lời của bạn rồi so với bài mẫu."],
  ["Thực hành", "Viết đủ số từ yêu cầu rồi mới xem bài mẫu, sau đó tự chấm theo từng tiêu chí. Muốn được chấm, dán bài vào Write & Improve."],
];

const WEEK = [
  ["Thứ Hai", "Bài mới: bài giảng, từ vựng, hội thoại (khoảng 15–20 phút)"],
  ["Thứ Ba", "Cùng bài đó: đọc hiểu, bài tập, luyện nói, thực hành (khoảng 20 phút)"],
  ["Thứ Tư", "Ôn từ vựng và làm lại những câu còn sai"],
  ["Thứ Năm, thứ Sáu", "Bài mới tiếp theo, chia hai buổi như trên"],
  ["Cuối tuần", "Tự học ngoài khóa: một bài nghe hoặc đọc thật ở đúng cấp (xem trang khóa học)"],
  ["Mỗi ngày", "10 phút ở trang Ôn từ vựng"],
];

const FAQS = [
  ["Có nhất thiết học theo thứ tự không?", "Nên. Mỗi bài dùng ngữ pháp và từ của các bài trước. Bạn có thể mở bài bất kỳ để xem, nhưng hãy học lần lượt theo giáo trình."],
  ["Mình đã học tiếng Anh ở trường, có phải học lại từ A1?", "Không. Làm bài kiểm tra trình độ: hệ thống gợi ý cấp để bắt đầu. Nếu cấp đó quá dễ, làm thử bài kiểm tra cuối khóa của cấp đó; đạt từ 70% trở lên thì chuyển lên cấp trên."],
  ["Một ngày nên học bao lâu?", "Đều đặn quan trọng hơn học dồn: 30–45 phút mỗi ngày, gồm bài học, ôn từ vựng và một chút nghe, đọc ngoài khóa. Chuỗi ngày học ở góc trên giúp bạn giữ thói quen."],
  ["Học trên điện thoại được không?", "Được. Tiến độ lưu trên trình duyệt, nên hãy học trên cùng một máy và một trình duyệt. Phần luyện nói cần Chrome hoặc Edge để nhận giọng nói."],
];

export default async function StartHerePage() {
  const courses = await getCourses();
  const pronunciation = courses.find((c) => c.goal === "phat-am");
  const path = courses.filter((c) => c.goal === "lo-trinh");
  const a1 = path.find((c) => c.level === "A1");

  const ROADMAP = [
    {
      title: "Kiểm tra trình độ",
      time: "20 phút",
      body: "40 câu từ A1 đến C1. Kết quả gợi ý cấp để bắt đầu. Mất gốc hoàn toàn thì có thể bỏ qua bước này.",
      href: "/kiem-tra-trinh-do",
      link: "Làm bài kiểm tra",
    },
    {
      title: "Bước 0: Phát âm với IPA",
      time: pronunciation ? `khoảng ${formatHours(contentHours(pronunciation))} giờ` : "",
      body: "Học đọc phiên âm, âm cuối, trọng âm. Rất nên học trước A1, và cả khi bạn đã học lâu mà nói người nước ngoài khó nghe.",
      href: pronunciation ? `/khoa-hoc/${pronunciation.slug}` : "/khoa-hoc",
      link: "Xem khóa Bước 0",
    },
    {
      title: "Học khóa đúng cấp, lần lượt từng bài",
      time: a1 ? `mỗi cấp khoảng ${formatHours(contentHours(a1))}–12 giờ bài học` : "",
      body: "Mỗi bài khoảng 30 phút, gồm 7 bước (xem bên dưới). Mỗi tuần 2–3 bài là nhịp vừa sức cho người đi làm.",
      href: "/khoa-hoc",
      link: "Xem các khóa học",
    },
    {
      title: "Ôn tập cuối mỗi chương",
      time: "15 phút",
      body: "Sau 4–5 bài có một bài ôn tập tổng hợp. Làm để biết phần nào còn yếu trước khi sang chương mới.",
    },
    {
      title: "Kiểm tra cuối khóa và nhận chứng chỉ",
      time: "25 phút",
      body: "Đề riêng, câu hỏi mới hoàn toàn. Đạt từ 70% và học xong mọi bài thì nhận chứng chỉ, rồi chuyển sang cấp tiếp theo.",
    },
    {
      title: "Song song mỗi ngày: từ vựng và tự học",
      time: "10–30 phút mỗi ngày",
      body: `Ôn từ vựng mỗi ngày, thêm dần các chủ đề trong kho từ vựng, và làm theo kế hoạch tự học ở trang từng khóa. Theo Cambridge English, cần khoảng ${GUIDED_HOURS.A2[0]}–${GUIDED_HOURS.A2[1]} giờ học để đạt A2 và ${GUIDED_HOURS.C1[0]}–${GUIDED_HOURS.C1[1]} giờ để đạt C1 (tính từ đầu), nên phần tự học rất quan trọng.`,
      href: "/tu-vung",
      link: "Mở kho từ vựng",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl space-y-14 px-4 py-16 sm:px-6">
      <header>
        <h1 className="font-display text-5xl font-extrabold leading-tight">Bắt đầu từ đâu?</h1>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          Lần đầu đến đây? Đây là thứ tự học nên theo, từ ngày đầu tiên cho đến khi xong C1, và cách học mỗi bài cho hiệu quả.
        </p>
      </header>

      <NextStep courses={courses} />

      <section aria-labelledby="roadmap">
        <h2 id="roadmap" className="font-display text-3xl font-extrabold">Lộ trình từng bước</h2>
        <ol className="mt-6 space-y-4">
          {ROADMAP.map((s, i) => (
            <li key={s.title} className="clay flex gap-4 p-5 sm:p-6">
              <span className="grid size-11 shrink-0 place-items-center rounded-full border-[2.5px] border-ink bg-sun font-display text-lg font-extrabold">
                {i + 1}
              </span>
              <div>
                <h3 className="font-display text-xl font-bold">
                  {s.title}
                  {s.time && <span className="ml-2 text-base font-semibold text-ink-soft">({s.time})</span>}
                </h3>
                <p className="mt-1 text-lg">{s.body}</p>
                {s.href && (
                  <Link href={s.href} className="mt-2 inline-block font-semibold underline underline-offset-4 hover:text-tangerine-deep">
                    {s.link}
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-5 text-ink-soft">
          Thứ tự các cấp: Bước 0 → {path.map((c) => c.level).join(" → ")}. Mỗi cấp có trang riêng với giáo trình, kho từ vựng và kế
          hoạch tự học.
        </p>
      </section>

      <section aria-labelledby="lesson-steps">
        <h2 id="lesson-steps" className="font-display text-3xl font-extrabold">Học một bài như thế nào</h2>
        <p className="mt-3 text-lg text-ink-soft">
          Mỗi bài có 7 bước, mở dần theo thứ tự. Tiến độ trong bài được lưu lại, nên bạn có thể dừng giữa chừng và học tiếp sau.
        </p>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2">
          {LESSON_STEPS.map(([title, body], i) => (
            <li key={title} className="rounded-2xl border-[2.5px] border-ink bg-card p-5">
              <p className="font-display text-lg font-bold">{i + 1}. {title}</p>
              <p className="mt-1">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="week">
        <h2 id="week" className="font-display text-3xl font-extrabold">Một tuần học mẫu cho người đi làm</h2>
        <div className="mt-6 overflow-x-auto rounded-2xl border-[2.5px] border-ink bg-card" tabIndex={0} role="region" aria-label="Bảng, cuộn ngang để xem hết">
          <table className="w-full min-w-[28rem] border-collapse text-left">
            <tbody>
              {WEEK.map(([day, what]) => (
                <tr key={day} className="border-b border-ink/15 last:border-0">
                  <th scope="row" className="w-44 px-4 py-3 align-top font-display font-bold">{day}</th>
                  <td className="px-4 py-3">{what}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="start-faq">
        <h2 id="start-faq" className="font-display text-3xl font-extrabold">Câu hỏi của người mới</h2>
        <div className="mt-6 space-y-4">
          {FAQS.map(([q, a]) => (
            <details key={q} className="clay group p-0 [box-shadow:var(--shadow-clay-sm)]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[1.5rem] px-6 py-5 font-display text-xl font-bold">
                {q}
                <span aria-hidden className="grid size-8 shrink-0 place-items-center rounded-full border-[2.5px] border-ink bg-sun text-lg transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <p className="px-6 pb-6 text-ink-soft">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
