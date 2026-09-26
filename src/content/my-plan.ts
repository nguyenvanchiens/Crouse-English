/**
 * The owner's personal study plan: placed at A2, but gaps in grammar make whole sentences hard to follow
 * while reading. The plan fills the A1 grammar base first, trains reading sentence by sentence, then
 * works through A2, B1, B2 and C1 in order; each level counts as passed only with its certificate and a
 * placement retest that confirms the level.
 */

export interface SentenceDrill {
  id: string;
  en: string;
  /** the main verb of the whole sentence */
  verb: string;
  subject: string;
  /** the grammar signal that tells the time or the structure */
  sign: string;
  /** the sentence cut into meaningful chunks */
  chunks: string[];
  meaning: string;
  /** handbook page to review: /ngu-phap/<course>/<lesson> */
  review: { course: string; lesson: string; title: string };
}

export const SENTENCE_DRILLS: SentenceDrill[] = [
  {
    id: "since",
    en: "My brother has lived in Da Nang since 2019.",
    verb: "has lived",
    subject: "My brother",
    sign: "has + V3 (lived) là thì hiện tại hoàn thành. Since + mốc thời gian: việc bắt đầu từ năm 2019 và đến giờ vẫn vậy.",
    chunks: ["My brother", "has lived", "in Da Nang", "since 2019"],
    meaning: "Anh trai tôi sống ở Đà Nẵng từ năm 2019 (đến giờ vẫn sống ở đó).",
    review: { course: "tieng-anh-b1", lesson: "da-duoc-bao-lau", title: "Hiện tại hoàn thành với for và since" },
  },
  {
    id: "when-was-doing",
    en: "When I got home, my parents were watching TV.",
    verb: "got (vế đầu) và were watching (vế sau)",
    subject: "I (vế đầu), my parents (vế sau)",
    sign: "Câu có hai vế, cắt ở When. Were watching (were + V-ing, quá khứ tiếp diễn) là việc đang kéo dài làm nền. Got (quá khứ đơn của get) là việc ngắn xảy ra giữa chừng việc đó.",
    chunks: ["When I got home,", "my parents", "were watching", "TV"],
    meaning: "Khi tôi về đến nhà thì bố mẹ tôi đang xem TV.",
    review: { course: "tieng-anh-a2", lesson: "qua-khu-tiep-dien", title: "Thì quá khứ tiếp diễn với when và while" },
  },
  {
    id: "that-clause",
    en: "The book that you gave me is really interesting.",
    verb: "is (không phải gave)",
    subject: "The book",
    sign: "Cụm that you gave me chỉ nói rõ cuốn sách nào. Tạm bỏ cụm này ra, câu còn The book is really interesting.",
    chunks: ["The book", "that you gave me", "is", "really interesting"],
    meaning: "Cuốn sách bạn tặng tôi thật sự rất hay.",
    review: { course: "tieng-anh-b1", lesson: "menh-de-quan-he", title: "Mệnh đề quan hệ: who, which, that, where, whose" },
  },
  {
    id: "if-will",
    en: "If it rains tomorrow, we will stay at home.",
    verb: "rains (vế If) và will stay (vế chính)",
    subject: "it (vế If), we (vế chính)",
    sign: "If + hiện tại đơn, will + động từ nguyên mẫu: câu điều kiện loại 1, việc có thể xảy ra. Dù nói về ngày mai, sau If vẫn dùng rains, không dùng will.",
    chunks: ["If it rains tomorrow,", "we", "will stay", "at home"],
    meaning: "Nếu mai trời mưa thì chúng tôi sẽ ở nhà.",
    review: { course: "tieng-anh-a2", lesson: "dieu-kien-loai-0-va-1", title: "Câu điều kiện loại 0 và loại 1" },
  },
  {
    id: "didnt-because",
    en: "She didn't go to work yesterday because she was ill.",
    verb: "didn't go (vế đầu) và was (vế sau)",
    subject: "She",
    sign: "Didn't + động từ nguyên mẫu là phủ định của quá khứ đơn, nên go không thêm -ed. Because mở đầu vế nói lý do.",
    chunks: ["She", "didn't go", "to work", "yesterday", "because she was ill"],
    meaning: "Hôm qua cô ấy không đi làm vì bị ốm.",
    review: { course: "tieng-anh-a2", lesson: "hom-qua-ban-lam-gi", title: "Thì quá khứ đơn: kể chuyện đã xảy ra" },
  },
  {
    id: "going-to",
    en: "We're going to visit our grandparents next weekend.",
    verb: "are going to visit",
    subject: "We",
    sign: "Be going to + động từ nguyên mẫu: dự định đã có từ trước. We're là viết tắt của We are.",
    chunks: ["We're", "going to visit", "our grandparents", "next weekend"],
    meaning: "Cuối tuần tới chúng tôi sẽ đi thăm ông bà (đã lên kế hoạch).",
    review: { course: "tieng-anh-a2", lesson: "ke-hoach-cuoi-tuan", title: "Be going to và hiện tại tiếp diễn chỉ tương lai" },
  },
  {
    id: "who-clause",
    en: "The man who is talking to my teacher works at a bank.",
    verb: "works (không phải is talking)",
    subject: "The man",
    sign: "Cụm who is talking to my teacher chỉ nói rõ người đàn ông nào. Bỏ cụm này ra, câu còn The man works at a bank. Works có -s vì chủ ngữ là một người.",
    chunks: ["The man", "who is talking to my teacher", "works", "at a bank"],
    meaning: "Người đàn ông đang nói chuyện với thầy giáo tôi làm việc ở ngân hàng.",
    review: { course: "tieng-anh-b1", lesson: "menh-de-quan-he", title: "Mệnh đề quan hệ: who, which, that, where, whose" },
  },
  {
    id: "never-would-like",
    en: "I have never eaten sushi, but I would like to try it one day.",
    verb: "have never eaten (vế đầu) và would like to try (vế sau)",
    subject: "I",
    sign: "Have never + V3: chưa từng làm việc gì. Would like to + động từ nguyên mẫu: muốn, nói lịch sự. Cắt câu ở but.",
    chunks: ["I", "have never eaten", "sushi,", "but I", "would like to try it", "one day"],
    meaning: "Tôi chưa từng ăn sushi, nhưng một ngày nào đó tôi muốn thử.",
    review: { course: "tieng-anh-a2", lesson: "ban-da-tung", title: "Thì hiện tại hoàn thành với ever và never" },
  },
];

export const READING_STEPS: { title: string; body: string }[] = [
  { title: "Tìm động từ chính trước", body: "Động từ cho biết câu nói về việc gì. Câu dài thường có nhiều động từ; động từ chính là cái đi với chủ ngữ của cả câu." },
  { title: "Tìm chủ ngữ", body: "Ai hoặc cái gì làm việc đó. Chủ ngữ thường đứng ngay trước động từ chính, có khi kèm một cụm dài bổ nghĩa." },
  { title: "Nhìn dạng động từ để biết thời gian", body: "V-ed hoặc V2 là quá khứ, am/is/are + V-ing là đang diễn ra, have/has + V3 là đã từng hoặc từ trước đến giờ, will hoặc be going to là tương lai." },
  { title: "Cắt câu ở từ nối rồi hiểu từng cụm", body: "Cắt ở and, but, because, when, if, who, which, that. Hiểu từng cụm trước rồi mới ghép lại, đừng dịch từng từ từ trái sang phải." },
];

/** The courses to work through after the grammar base, in order; the last one ends at C1. */
export const PLAN_COURSES = ["tieng-anh-a2", "tieng-anh-b1", "tieng-anh-b2", "tieng-anh-c1"];

/** time on this site every day; each course's weekly self-study comes on top of it */
export const DAILY_MINUTES = 40;

export const DAILY_ROUTINE: { minutes: number; what: string; to: "vocab" | "grammar" | "lesson" | "reading" }[] = [
  { minutes: 5, what: "Ôn từ vựng đến hạn", to: "vocab" },
  { minutes: 10, what: "Ngữ pháp: chủ điểm của chặng nền, hoặc bài giảng của bài đang học", to: "grammar" },
  { minutes: 15, what: "Học tiếp một bài của khóa đang học", to: "lesson" },
  { minutes: 10, what: "Đọc và tách 1–2 câu khó theo 4 bước ở chặng nền", to: "reading" },
];

/**
 * Checked 2026-09 on ielts.org ("IELTS and the CEFR"): a C1 minimum threshold falls between bands 6.5
 * and 7, and 7 is suggested for a high degree of confidence. C1 Advanced is Cambridge's C1 exam.
 */
export const OFFICIAL_EXAMS =
  "Muốn có chứng nhận C1 được công nhận khi đi học, đi làm, hãy thi một chứng chỉ quốc tế như Cambridge C1 Advanced hoặc IELTS. Theo IELTS, ngưỡng C1 nằm giữa band 6.5 và 7, nên nhắm band 7 nếu cần chắc chắn là C1.";
