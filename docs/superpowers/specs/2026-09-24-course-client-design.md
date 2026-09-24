# Crouse English — Phía học viên của một khóa học (client)

- **Ngày:** 2026-09-24
- **Trạng thái:** Đã duyệt thiết kế trong chat, chờ duyệt spec
- **Phạm vi:** Phía học viên (client). CMS quản trị, đăng nhập thật và thanh toán để giai đoạn sau.
- **Stack:** Next.js 16 (App Router) + Tailwind v4 + lucide-react, trong `web/`. Hệ thiết kế "clay" đã có ở `src/app/globals.css`.

## 1. Mục tiêu và tiêu chí thành công

Học viên có thể: tìm khóa học → xem chi tiết → học thử bài miễn phí → "đăng ký" → học từng bài (video, từ vựng, bài tập, luyện nói) → thấy tiến độ và chuỗi ngày học → hoàn thành và nhận chứng chỉ. Họ cũng có thể làm bài kiểm tra trình độ để được gợi ý khóa học phù hợp.

Tiêu chí thành công:
- Đi hết được một lượt học trọn vẹn khóa "Tiếng Anh giao tiếp A1" với dữ liệu mẫu, tiến độ còn nguyên sau khi tải lại trang.
- Mọi trang đều dùng được ở khổ 375px và 1440px, dùng được bằng bàn phím, có tôn trọng `prefers-reduced-motion`.
- Khi thay nguồn dữ liệu bằng CMS, chỉ phải viết lại `src/lib/content.ts`. Khi thay nơi lưu tiến độ bằng backend, chỉ phải viết lại `src/lib/progress.ts`.

## 2. Giả định (đã báo người dùng)

- Nút "Đăng ký" chỉ ghi nhận đã đăng ký trong localStorage, không có thanh toán.
- Chứng chỉ in tên do học viên tự nhập.
- Có nội dung đầy đủ cho 1 khóa (`giao-tiep-a1`: 3 chương, 8–9 bài). Các khóa còn lại (IELTS, TOEIC, Trẻ em) chỉ có giới thiệu và giáo trình, bài học bên trong ở trạng thái `soon` (sắp ra mắt).
- Luyện nói dùng Web Speech API (`SpeechRecognition`, có trên Chrome/Edge). Trình duyệt không hỗ trợ thì cho bỏ qua.
- Video dùng YouTube, nhúng qua `youtube-nocookie.com`, ID là video mẫu công khai.

## 3. Mô hình dữ liệu (`src/content/types.ts`)

Đây là hợp đồng mà CMS sau này phải trả về đúng như vậy.

```ts
type Level = "A1" | "A2" | "B1" | "B2" | "C1";
type Goal = "giao-tiep" | "ielts" | "toeic" | "tre-em";

interface Course {
  slug: string; title: string; level: Level; goal: Goal;
  summary: string; outcomes: string[]; audience: string[];
  teacher: { name: string; bio: string; initials: string };
  priceVnd: number; durationWeeks: number;
  rating: number; reviews: { name: string; role: string; quote: string }[];
  faqs: { q: string; a: string }[];
  status: "open" | "soon";
  modules: Module[];
}
interface Module { id: string; title: string; lessons: Lesson[] }
interface Lesson { slug: string; title: string; minutes: number; free: boolean; steps: Step[] }

type Step =
  | { type: "video"; youtubeId: string; title: string }
  | { type: "vocab"; words: VocabWord[] }
  | { type: "exercise"; items: Exercise[] }
  | { type: "speaking"; sentences: { text: string; meaningVi: string }[] };

interface VocabWord {
  word: string; ipa: string; meaning: string; example: string;
  syllables: string[]; stress: number; tip?: string;
}

type Exercise =
  | { kind: "multiple-choice"; id: string; prompt: string; options: string[]; answer: number; explain?: string }
  | { kind: "fill-blank"; id: string; prompt: string /* dùng "___" */; answers: string[]; explain?: string }
  | { kind: "reorder"; id: string; prompt: string; words: string[] /* đúng thứ tự */; explain?: string }
  | { kind: "listen-choose"; id: string; audioText: string; options: string[]; answer: number; explain?: string };

interface PlacementQuestion {
  id: string; level: Exclude<Level, "C1">; skill: "vocab" | "grammar" | "listening";
  prompt: string; audioText?: string; options: string[]; answer: number;
}
```

Lớp lấy dữ liệu `src/lib/content.ts` (async để sau này chuyển sang gọi CMS):
`getCourses(filter?)`, `getCourse(slug)`, `getLesson(courseSlug, lessonSlug)` → `{ course, module, lesson, prev, next }`, `getPlacementTest()`.

## 4. Đường dẫn

| URL | Trang | Render |
|---|---|---|
| `/` | Trang chủ (đã có), nối nút tới các trang mới | Static |
| `/khoa-hoc` | Danh sách khóa, lọc theo `?muc-tieu=` và `?trinh-do=` | Static + lọc phía client |
| `/khoa-hoc/[slug]` | Chi tiết khóa học | SSG (`generateStaticParams`) |
| `/hoc/[course]/[lesson]` | Trang học bài | SSG khung + trạng thái phía client |
| `/hoc/[course]/hoan-thanh` | Hoàn thành + chứng chỉ | Client |
| `/cua-toi` | Khóa học của tôi | Client |
| `/kiem-tra-trinh-do` | Kiểm tra trình độ | Client |

Nhóm route: `(site)` dùng header/footer chung; `hoc/` dùng bố cục học riêng.

## 5. Tiến độ (`src/lib/progress.ts`)

Khóa localStorage `ce:progress:v1`:

```ts
interface ProgressState {
  version: 1;
  learnerName: string | null;
  enrolled: string[];                                   // courseSlug
  lessons: Record<string /* "course/lesson" */, { done: boolean; score: number | null; completedAt: string }>;
  streak: { current: number; lastDay: string | null };  // YYYY-MM-DD theo giờ máy
  placement: { level: Level; score: number; takenAt: string } | null;
}
```

- Hook `useProgress()` dùng `useSyncExternalStore`, có đồng bộ giữa các tab qua sự kiện `storage`. Phía server trả trạng thái rỗng.
- Hàm ghi: `enroll`, `completeLesson(course, lesson, score)`, `setLearnerName`, `savePlacement`.
- Hàm thuần (để test): `nextStreak(streak, today)`, `courseProgress(course, state)` → `{ done, total, percent, nextLesson }`.
- Không đọc/ghi được, hoặc JSON hỏng, hoặc sai phiên bản: dùng trạng thái trong bộ nhớ và gắn cờ `persistent: false` để giao diện hiện dòng nhắc.

## 6. Trang học bài

- **Bố cục:** thanh trên (Thoát, tên khóa, thanh %, chuỗi ngày học). Mục lục bên trái (chương → bài, trạng thái ✓ / ▶ / ○ / 🔒); trên điện thoại là ngăn trượt. Nội dung ở giữa có dãy chấm các bước và nút Bước trước / Tiếp tục.
- **Luật mở bài:** bài có `free: true` học được khi chưa đăng ký. Bài khác chưa đăng ký thì hiện màn hình mời đăng ký. Đã đăng ký thì được nhảy bài, không khóa theo thứ tự.
- **Hoàn thành bài:** đi hết các bước. `score` = % câu bài tập đúng (bài không có bài tập thì `null`). Điểm nói chỉ để tham khảo. Hoàn thành bài cuối cùng của khóa thì chuyển sang `/hoan-thanh`.
- **Chuỗi ngày học:** cùng ngày thì giữ nguyên; hôm sau tính +1; cách hơn 1 ngày thì đặt lại về 1.

### Các bước
- **video:** iframe `youtube-nocookie`, `aspect-video`, `loading="lazy"`, nút "Đã xem xong".
- **vocab:** tách `WordCard` hiện có thành component dùng chung `PronounceCard` (nhận `VocabWord`), thêm câu ví dụ, bấm để lật hiện nghĩa, lưới xem trước cả bộ từ.
- **exercise:** mỗi lần hiện 1 câu, nút "Kiểm tra" rồi hiện kết quả đúng/sai kèm đáp án và giải thích, rồi "Câu tiếp". Tổng kết điểm ở cuối.
  - `multiple-choice`, `listen-choose`: nhóm radio dùng được bằng bàn phím. `listen-choose` có nút nghe (speechSynthesis).
  - `fill-blank`: chuẩn hóa (bỏ khoảng trắng thừa, không phân biệt hoa thường, bỏ dấu câu ở cuối), chấp nhận bất kỳ đáp án nào trong `answers`.
  - `reorder`: xáo các từ (tránh trùng thứ tự đúng), bấm từ để đưa lên hoặc bỏ khỏi hàng trả lời, so khớp chính xác theo thứ tự.
- **speaking:** "Nghe mẫu" và "Bấm để nói". `SpeechRecognition` `lang="en-US"`. So khớp từng từ (chuẩn hóa như trên, căn chỉnh theo LCS): từ khớp tô xanh, từ thiếu/sai tô cam, cho điểm %. Không hỗ trợ hoặc bị từ chối micro thì hiện hướng dẫn và nút "Bỏ qua bước này".

## 7. Các trang khác

- **`/khoa-hoc`:** hai hàng chip lọc (lưu trên URL), lưới `CourseCard`, nhãn "Sắp ra mắt".
- **`/khoa-hoc/[slug]`:** đầu trang (tên, cấp, thời lượng, học phí, "Đăng ký" / "Học thử bài 1"). Đã đăng ký thì nút đổi thành "Học tiếp". Các mục: bạn sẽ làm được gì, dành cho ai, giáo trình (xổ ra, nhãn học thử), giáo viên, đánh giá, hỏi đáp. Trên máy tính có thẻ đăng ký dính bên cạnh.
- **`/cua-toi`:** màn hình trống khi chưa đăng ký khóa nào (mời kiểm tra trình độ hoặc xem khóa học). Có khóa thì hiện thẻ với %, "Học tiếp: <bài>", chuỗi ngày học và kết quả kiểm tra trình độ.
- **`/hoc/[course]/hoan-thanh`:** chỉ hiện khi xong 100% (chưa xong thì mời học tiếp). Ô nhập tên nếu chưa có, chứng chỉ (tên, khóa, ngày, mã `CE-<course>-<hash ngắn>`), nút "In chứng chỉ" (`window.print()`, `@media print` chỉ in chứng chỉ).
- **`/kiem-tra-trinh-do`:** 20 câu (5 câu mỗi cấp A1–B2), thanh tiến độ, không quay lại. Chấm: cấp cao nhất mà đúng ≥ 60% câu của cấp đó và của mọi cấp thấp hơn; không đạt cấp nào thì ra A1. Kết quả hiện cấp, điểm từng cấp và khóa gợi ý, rồi lưu vào `placement`.

## 8. Cấu trúc code

```
src/content/    types.ts, placement.ts, courses/{giao-tiep-a1,ielts,toeic,tre-em}.ts, index.ts
src/lib/        content.ts, progress.ts, scoring.ts, speech.ts, format.ts (VND, ngày)
src/components/ site/{SiteHeader,SiteFooter,Logo}
                ui/{Chip,ProgressBar,EmptyState}
                course/{CourseCard,Syllabus,EnrollPanel}
                lesson/{LessonShell,LessonSidebar,StepVideo,StepVocab,StepExercise,StepSpeaking}
                exercises/{MultipleChoice,FillBlank,Reorder,ListenChoose}
                pronounce-card.tsx (tách từ word-card.tsx)
src/app/(site)/ page.tsx (trang chủ), khoa-hoc/, cua-toi/, kiem-tra-trinh-do/, layout.tsx
src/app/hoc/    [course]/[lesson]/page.tsx, [course]/hoan-thanh/page.tsx, layout.tsx
src/app/        not-found.tsx
```

Trang chủ dùng chung dữ liệu khóa học từ `src/content` thay cho mảng `COURSES` đang viết cứng.

## 9. Xử lý lỗi

- Sai slug thì `notFound()`, có trang 404 theo phong cách "clay".
- Bài bị khóa thì hiện màn hình mời đăng ký (không phải lỗi).
- Khóa `soon` thì trang chi tiết vẫn hiện, nút "Đăng ký" đổi thành "Báo tôi khi mở lớp" (tạm thời chỉ hiện một dòng xác nhận).
- Không có Speech API: nút nghe/nói bị tắt kèm giải thích; bước nói cho bỏ qua.
- Không lưu được localStorage: hiện một dòng nhắc, trang vẫn chạy bình thường.

## 10. Kiểm thử

- **Vitest** (`npm test`), viết test trước, làm theo TDD, cho:
  - `scoring.ts`: từng dạng bài tập, chuẩn hóa chuỗi, so khớp câu nói (LCS);
  - `progress.ts`: `nextStreak`, `courseProgress`, đọc dữ liệu hỏng hoặc sai phiên bản;
  - chấm bài kiểm tra trình độ;
  - `content.ts`: tìm bài, prev/next, lọc.
- Kiểm tra toàn vẹn dữ liệu mẫu: slug không trùng, đáp án nằm trong phạm vi, `stress` < số âm tiết.
- `npm run build`, `npm run lint`, chụp màn hình Playwright ở 1440px và 390px cho từng trang, chạy thử một lượt học từ đầu đến hoàn thành.

## 11. Ngoài phạm vi

CMS quản trị, đăng nhập/tài khoản, thanh toán, đồng bộ tiến độ lên máy chủ, phụ đề video, gửi email, đa ngôn ngữ giao diện.
