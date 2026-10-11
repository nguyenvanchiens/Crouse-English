/**
 * The 80/20 (Pareto) idea applied to English, with the figures it rests on.
 *
 * Coverage figures: Oxford University Press, "Unlock the Oxford 3000" (2014), read 2026-10-11 with Playwright:
 * "around 3000 words covered 80–85% of vocabulary in a general English text"; most frequent word families:
 * 1st 1000 74.1%, 2000 81.3%, 3000 85.2%, 4000 87.6%, 5000 89.4%; "12,500 word families cover 95% of text".
 * The table counts word families (work, works, worked, worker… are one family), not single words.
 * Comprehension threshold: Hu & Nation (2000), Reading in a Foreign Language 13(1): about 98% coverage for
 * unassisted comprehension of a fiction text. Kremmel, Indrarathne, Kormos & Suzuki (2023, Language Learning,
 * doi:10.1111/lang.12622) tried to replicate it and "the results of the original study could not be fully
 * replicated". Laufer & Ravenhorst-Kalovski (2010, Reading in a Foreign Language 22(1), ERIC EJ887873) give two
 * thresholds: a minimal 95% (4,000–5,000 word families) and an optimal 98% (8,000 families). The page gives
 * that range.
 */
export const COVERAGE: { words: string; percent: number }[] = [
  { words: "1.000 họ từ", percent: 74.1 },
  { words: "2.000 họ từ", percent: 81.3 },
  { words: "3.000 họ từ", percent: 85.2 },
  { words: "5.000 họ từ", percent: 89.4 },
  { words: "12.500 họ từ", percent: 95 },
];

export const PARETO_SOURCES = [
  { href: "https://www.oupjapan.co.jp/sites/default/files/contents/catalogue/oald/media/Unlock_the_Oxford_3000_2014.pdf", label: "Oxford: Unlock the Oxford 3000 (PDF)" },
  { href: "https://scholarspace.manoa.hawaii.edu/server/api/core/bitstreams/c5873d5c-23b5-41d1-99a5-fde539883ceb/content", label: "Hu & Nation (2000): độ phủ từ và đọc hiểu (PDF)" },
  { href: "https://files.eric.ed.gov/fulltext/EJ887873.pdf", label: "Laufer & Ravenhorst-Kalovski (2010): ngưỡng 95% và 98% (PDF)" },
  { href: "https://doi.org/10.1111/lang.12622", label: "Kremmel và cộng sự (2023): kiểm chứng lại Hu & Nation" },
];

/** What the plan does with the 20% that gives 80%, and what the 80/20 rule does not cover. */
export const PARETO_RULES: { title: string; body: string }[] = [
  {
    title: "Từ vựng: học theo tần suất",
    body: "2.000 họ từ thông dụng nhất đã phủ khoảng 81% chữ trong một văn bản thường. Danh sách Oxford 3000 được chọn theo tần suất, và theo Oxford giúp hiểu tới 80–85% chữ. Lộ trình cho bạn học từ của khóa trước, rồi theo danh sách đó.",
  },
  {
    title: "Ngữ pháp: vài cấu trúc dùng nhiều nhất",
    body: "Hiện tại đơn, quá khứ đơn, hiện tại hoàn thành, tương lai, động từ khuyết thiếu, bị động và mệnh đề quan hệ có mặt trong phần lớn câu bạn đọc. Đó là phần tách câu mỗi ngày luyện đi luyện lại.",
  },
  {
    title: "Công việc: 20% của riêng bạn",
    body: "Trong tài liệu, ticket và cuộc họp của bạn, một nhóm nhỏ thuật ngữ và mẫu câu lặp lại liên tục. Các đợt Tiếng Anh cho công việc nhắm đúng nhóm đó, và lưu chúng vào Từ của tôi.",
  },
  {
    title: "Giới hạn của 80/20",
    body: "Hiểu 80% chữ chưa phải là hiểu bài: các nghiên cứu cho thấy cần biết ít nhất 95% số chữ trong bài (khoảng 4.000–5.000 họ từ) mới tự đọc hiểu được, và 98% (khoảng 8.000 họ từ) thì đọc thoải mái. Phần cuối là phần dài nhất, nên đi tới C1 vẫn cần đủ giờ. 80/20 giúp bạn dùng được sớm, không thay được cả chặng đường.",
  },
];
