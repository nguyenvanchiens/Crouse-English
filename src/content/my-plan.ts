/**
 * The owner's personal study plan: placed at A2, but gaps in grammar make whole sentences hard to follow
 * while reading. The plan fills the A1 grammar base first, trains reading sentence by sentence, then
 * works through A2, B1, B2 and C1 in order; each level counts as passed only with its certificate and a
 * placement retest that confirms the level.
 */

export interface SentenceDrill {
  id: string;
  /** the level whose grammar the sentence needs; drills are taken in level order */
  level: "A1" | "A2" | "B1" | "B2" | "C1";
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
    level: "B1",
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
    level: "A2",
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
    level: "B1",
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
    level: "A2",
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
    level: "A2",
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
    level: "A2",
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
    level: "B1",
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
    level: "A2",
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

/** Day 1 of the owner's plan (a Monday). Before it the daily page shows a preview of that first day. */
export const PLAN_START = "2026-10-05";

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

export interface OfficialCheck {
  exam: string;
  /** Cambridge's preparation page with the free digital and paper sample tests and answer keys */
  prepUrl: string;
  /** Cambridge English Scale score for the level */
  scale: number;
  /** marked with the answer key */
  sections: { id: string; label: string; max: number; pass: number }[];
  /** two tasks, each criterion 0–5 per task */
  writing: { max: number; pass: number; criteria: string[] };
  /** each criterion 0–5 (half marks allowed), multiplied by its weight */
  speaking: { max: number; pass: number; criteria: { id: string; label: string; weight: number }[] };
  /** the free official sample tests kept for the check that passes the level; each one counts once */
  samples: { id: string; label: string }[];
  /**
   * the "for Schools" sample tests, kept for the practice days so the samples above stay unseen until the
   * check. Empty for C1 Advanced, which has no "for Schools" version.
   */
  practice: { id: string; label: string }[];
}

/**
 * The free sample tests listed on each Cambridge preparation page (checked 2026-09 and 2026-10-04). The
 * "for Schools" versions are at the same CEFR level and follow the same format, with topics for school-age
 * learners: the plan practises on them, and keeps the standard samples unseen for the check itself.
 * C1 Advanced has no "for Schools" version.
 */
const samples = (exam: string, paper: number) => [
  { id: "digital", label: `Đề mẫu làm trên máy (${exam})` },
  ...Array.from({ length: paper }, (_, i) => ({ id: `paper-${i + 1}`, label: `Đề mẫu giấy${paper > 1 ? ` ${i + 1}` : ""} (${exam})` })),
];
const practiceSets = (exam: string, paper: number) => [
  { id: "schools-digital", label: `đề mẫu làm trên máy của ${exam} for Schools` },
  ...Array.from({ length: paper }, (_, i) => ({ id: `schools-paper-${i + 1}`, label: `đề mẫu giấy${paper > 1 ? ` ${i + 1}` : ""} của ${exam} for Schools` })),
];

/** Checked 2026-09 on cambridge.org: official practice-test books hold four authentic papers each (e.g. "B2 First 4"). */
export const AFTER_SAMPLES =
  "Đã dùng hết đề mẫu miễn phí. Làm lại một đề cũ thì điểm không còn đúng sức nữa, vì bạn đã nhớ đáp án. Để kiểm chứng tiếp, hãy mua sách đề chính thức của Cambridge University Press & Assessment (mỗi cuốn có 4 đề thi thật, ví dụ cuốn B2 First 4), hoặc đăng ký thi thật.";

export const CONVERSION_PDF =
  "https://www.cambridgeenglish.org/Images/210434-converting-practice-test-scores-to-cambridge-english-scale-scores.pdf";

const WRITING_B = ["Content", "Communicative Achievement", "Organisation", "Language"];
const GLOBAL = "Global Achievement";

/**
 * The official sample test for each plan level, the raw marks that reach the level and how writing and
 * speaking are marked, from Cambridge's "Converting practice test scores to Cambridge English Scale
 * scores" (Nov 2023; read 2026-09). The marks apply to official Cambridge practice tests only.
 */
export const OFFICIAL_CHECKS: Record<string, OfficialCheck> = {
  A2: {
    exam: "A2 Key",
    prepUrl: "https://www.cambridgeenglish.org/exams-and-tests/qualifications/key/preparation/",
    scale: 120,
    sections: [
      { id: "reading", label: "Reading (Parts 1–5)", max: 30, pass: 20 },
      { id: "listening", label: "Listening", max: 25, pass: 17 },
    ],
    writing: { max: 30, pass: 18, criteria: ["Content", "Organisation", "Language"] },
    samples: samples("A2 Key", 1),
    practice: practiceSets("A2 Key", 1),
    speaking: {
      max: 45,
      pass: 27,
      criteria: [
        { id: "gv", label: "Grammar and Vocabulary", weight: 2 },
        { id: "pron", label: "Pronunciation", weight: 2 },
        { id: "ic", label: "Interactive Communication", weight: 2 },
        { id: "ga", label: GLOBAL, weight: 3 },
      ],
    },
  },
  B1: {
    exam: "B1 Preliminary",
    prepUrl: "https://www.cambridgeenglish.org/exams-and-tests/qualifications/preliminary/preparation/",
    samples: samples("B1 Preliminary", 1),
    practice: practiceSets("B1 Preliminary", 1),
    scale: 140,
    sections: [
      { id: "reading", label: "Reading", max: 32, pass: 23 },
      { id: "listening", label: "Listening", max: 25, pass: 18 },
    ],
    writing: { max: 40, pass: 24, criteria: WRITING_B },
    speaking: {
      max: 30,
      pass: 18,
      criteria: [
        { id: "gv", label: "Grammar and Vocabulary", weight: 1 },
        { id: "dm", label: "Discourse Management", weight: 1 },
        { id: "pron", label: "Pronunciation", weight: 1 },
        { id: "ic", label: "Interactive Communication", weight: 1 },
        { id: "ga", label: GLOBAL, weight: 2 },
      ],
    },
  },
  B2: {
    exam: "B2 First",
    prepUrl: "https://www.cambridgeenglish.org/exams-and-tests/qualifications/first/preparation/",
    samples: samples("B2 First", 2),
    practice: practiceSets("B2 First", 2),
    scale: 160,
    sections: [
      { id: "reading", label: "Reading (Parts 1, 5, 6, 7)", max: 42, pass: 24 },
      { id: "use", label: "Use of English (Parts 2, 3, 4)", max: 28, pass: 18 },
      { id: "listening", label: "Listening", max: 30, pass: 18 },
    ],
    writing: { max: 40, pass: 24, criteria: WRITING_B },
    speaking: {
      max: 60,
      pass: 36,
      criteria: [
        { id: "gv", label: "Grammar and Vocabulary", weight: 2 },
        { id: "dm", label: "Discourse Management", weight: 2 },
        { id: "pron", label: "Pronunciation", weight: 2 },
        { id: "ic", label: "Interactive Communication", weight: 2 },
        { id: "ga", label: GLOBAL, weight: 4 },
      ],
    },
  },
  C1: {
    exam: "C1 Advanced",
    prepUrl: "https://www.cambridgeenglish.org/exams-and-tests/qualifications/advanced/preparation/",
    samples: samples("C1 Advanced", 2),
    practice: [],
    scale: 180,
    sections: [
      { id: "reading", label: "Reading (Parts 1, 5, 6, 7, 8)", max: 50, pass: 32 },
      { id: "use", label: "Use of English (Parts 2, 3, 4)", max: 28, pass: 16 },
      { id: "listening", label: "Listening", max: 30, pass: 18 },
    ],
    writing: { max: 40, pass: 24, criteria: WRITING_B },
    speaking: {
      max: 75,
      pass: 45,
      criteria: [
        { id: "gr", label: "Grammatical Resource", weight: 2 },
        { id: "lr", label: "Lexical Resource", weight: 2 },
        { id: "dm", label: "Discourse Management", weight: 2 },
        { id: "pron", label: "Pronunciation", weight: 2 },
        { id: "ic", label: "Interactive Communication", weight: 2 },
        { id: "ga", label: GLOBAL, weight: 5 },
      ],
    },
  },
};

/** What to paste into an AI chat so it marks the way Cambridge examiners do. */
export function writingPrompt(c: OfficialCheck): string {
  return [
    `Bạn là giám khảo chấm phần Writing của kỳ thi Cambridge ${c.exam}.`,
    `Chấm từng bài theo thang chính thức: mỗi tiêu chí cho 0–5 điểm, chỉ điểm nguyên: ${c.writing.criteria.join(", ")}.`,
    `Với mỗi bài: cho điểm từng tiêu chí, giải thích ngắn bằng tiếng Việt vì sao, chỉ ra lỗi cụ thể và cách sửa.`,
    `Cuối cùng cộng tổng của cả hai bài (tối đa ${c.writing.max} điểm). Chấm nghiêm như thi thật, không nâng điểm.`,
    ``,
    `Đề bài 1: [dán đề]`,
    `Bài làm 1: [dán bài]`,
    `Đề bài 2: [dán đề]`,
    `Bài làm 2: [dán bài]`,
  ].join("\n");
}

export function speakingPrompt(c: OfficialCheck): string {
  return [
    `Bạn là giám khảo chấm phần Speaking của kỳ thi Cambridge ${c.exam}. Tôi gửi bản ghi âm (hoặc bản chép lời) bài nói của tôi theo đề mẫu chính thức.`,
    `Cho điểm 0–5 (được cho nửa điểm) cho từng tiêu chí: ${c.speaking.criteria.map((x) => x.label).join(", ")}.`,
    `Giải thích ngắn bằng tiếng Việt vì sao, chỉ ra lỗi cụ thể và cách sửa. Chấm nghiêm như thi thật, không nâng điểm.`,
    `Nếu chỉ có bản chép lời thì nói rõ là không chấm được Pronunciation.`,
    ``,
    `Đề: [dán câu hỏi của đề mẫu]`,
    `Bài nói: [đính kèm bản ghi âm hoặc dán bản chép lời]`,
  ].join("\n");
}

export interface ExamPaper {
  id: string;
  /** the paper's official name */
  name: string;
  minutes: number;
  /** what the learner practises on that paper's day, in Vietnamese */
  practice: string;
}

/**
 * The papers of each official exam with their timing, from Cambridge's exam format pages (checked 2026-10-04,
 * see sources-checked.ts). The plan gives
 * each paper a practice day before the sample test, and splits a sample longer than SPLIT_MINUTES over two days.
 */
export const EXAM_PAPERS: Record<string, ExamPaper[]> = {
  A2: [
    { id: "reading-writing", name: "Reading and Writing", minutes: 60, practice: "Làm phần Reading and Writing trong 60 phút: 5 phần đọc, rồi viết email ngắn (25 từ trở lên) và kể chuyện theo 3 bức tranh (35 từ trở lên)." },
    { id: "listening", name: "Listening", minutes: 30, practice: "Làm phần Listening (5 phần), nghe mỗi bài hai lần như thi thật." },
    { id: "speaking", name: "Speaking", minutes: 10, practice: "Luyện 2 phần nói theo cặp (8–10 phút): trả lời câu hỏi về bản thân, rồi thảo luận theo tranh." },
  ],
  B1: [
    { id: "reading", name: "Reading", minutes: 45, practice: "Làm phần Reading, đúng 45 phút." },
    { id: "writing", name: "Writing", minutes: 45, practice: "Viết hai bài trong 45 phút: email khoảng 100 từ, rồi bài báo hoặc câu chuyện khoảng 100 từ." },
    { id: "listening", name: "Listening", minutes: 30, practice: "Làm phần Listening (4 phần), nghe mỗi bài hai lần." },
    { id: "speaking", name: "Speaking", minutes: 12, practice: "Luyện 4 phần nói theo cặp (10–12 phút), có tính giờ." },
  ],
  B2: [
    { id: "reading", name: "Reading and Use of English", minutes: 75, practice: "Làm phần Reading and Use of English, đúng 75 phút." },
    { id: "writing", name: "Writing", minutes: 80, practice: "Viết trong 80 phút: bài luận 140–190 từ (Part 1) và một bài Part 2 140–190 từ (bài báo, email hoặc thư, báo cáo hoặc bài đánh giá)." },
    { id: "listening", name: "Listening", minutes: 40, practice: "Làm phần Listening, nghe mỗi bài hai lần." },
    { id: "speaking", name: "Speaking", minutes: 14, practice: "Luyện bốn phần nói, có tính giờ." },
  ],
  C1: [
    { id: "reading", name: "Reading and Use of English", minutes: 90, practice: "Làm phần Reading and Use of English, đúng 90 phút." },
    { id: "writing", name: "Writing", minutes: 90, practice: "Viết trong 90 phút: bài luận 220–260 từ (Part 1) và một bài Part 2 220–260 từ (thư hoặc email, đề xuất, báo cáo hoặc bài đánh giá)." },
    { id: "listening", name: "Listening", minutes: 40, practice: "Làm phần Listening, nghe mỗi bài hai lần." },
    { id: "speaking", name: "Speaking", minutes: 15, practice: "Luyện bốn phần nói, có tính giờ." },
  ],
};
