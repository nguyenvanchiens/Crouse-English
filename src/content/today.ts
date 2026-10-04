import type { Level } from "./types";

/**
 * The daily plan's fixed parts: what to do with each step of a lesson, and the self-study session for each
 * weekday at each level. The sessions spread the course's weekly self-study hours (SELF_STUDY) over the week
 * and use the same resources, whose links were checked when the self-study plans were written.
 */

/** How to work through each step of a regular lesson, in the order the lesson shows them. */
export const LESSON_HOW: string[] = [
  "Bài giảng: xem video minh họa trước (nếu bài có), rồi đọc bài giảng. Chép 3 ví dụ vào vở và tự đặt 2 câu của mình với cấu trúc vừa học.",
  "Từ vựng: bấm nghe từng từ, đọc to theo 2 lần, nhìn dấu trọng âm. Từ nào khó thì đặt một câu với nó.",
  "Hội thoại: nghe cả bài một lần không nhìn chữ, nghe lại có chữ, rồi đóng vai đọc to một vai. Trả lời các câu hỏi.",
  "Đọc hiểu: đọc một lượt không tra từ, đoán ý chính, rồi trả lời câu hỏi. Câu nào dài và khó, tách theo 4 bước (động từ chính, chủ ngữ, dạng động từ, từ nối).",
  "Bài tập: làm hết 10 câu. Câu sai thì đọc kỹ giải thích và ghi lỗi đó vào sổ lỗi, kèm câu đúng.",
  "Luyện nói: nói to từng câu, ghi âm phần nói tự do bằng điện thoại và nghe lại một lần.",
  "Thực hành: viết bài theo đề, xem bài mẫu, tự chấm theo các tiêu chí. Muốn chắc hơn thì nhờ AI sửa bài và giải thích lỗi.",
];

export const REVIEW_HOW: string[] = [
  "Làm bài ôn tập không mở lại bài giảng, như đi thi.",
  "Câu nào sai thì mở lại đúng bài đó trong chương, đọc lại phần bài giảng liên quan.",
  "Ghi các lỗi vào sổ lỗi, mai đọc lại một lần trước khi học bài mới.",
];

export const GRAMMAR_HOW = (title: string, video: boolean): string[] => [
  `Mở Sổ tay ngữ pháp, chủ điểm “${title}”.`,
  ...(video ? ["Xem video minh họa ở cuối trang (bật phụ đề nếu cần), không cần xem lại nhiều lần."] : []),
  "Đọc bài giảng, chép bảng công thức và 3 ví dụ vào vở. Chú ý phần lỗi hay gặp.",
  "Bấm “Luyện tập bài này”, làm phần Bài tập. Sai câu nào thì đọc giải thích rồi làm lại câu đó.",
  "Gấp vở lại, tự đặt 3 câu về chính bạn với cấu trúc này, đọc to.",
  "Đặt được 3 câu đúng thì vào Lộ trình của tôi, tích “Đã ôn” chủ điểm này. Chưa chắc thì để mai ôn lại.",
];

export const DRILL_HOW: string[] = [
  "Đọc câu tiếng Anh, tự tách trước theo 4 bước: tìm động từ chính, tìm chủ ngữ, nhìn dạng động từ để biết thời gian, cắt câu ở từ nối.",
  "Viết nghĩa câu ra giấy bằng tiếng Việt.",
  "Mở “Xem cách tách câu” để so. Sai chỗ nào thì mở bài ngữ pháp được gợi ý bên dưới câu.",
  "Hiểu rồi thì tích “Mình đã hiểu câu này”.",
];

export interface SelfStudySession {
  title: string;
  minutes: number;
  steps: string[];
  url?: string;
  urlLabel?: string;
}

/*
 * Every link below was loaded live on 2026-10-04 (see sources-checked.ts). www.bbc.co.uk does not load on
 * the learner's network, so BBC Learning English is linked on the BBC's own feeds.bbci.co.uk host.
 */
const BC = (skill: string, level: string) => `https://learnenglish.britishcouncil.org/free-resources/${skill}/${level}`;
const BBC = (path: string) => `https://feeds.bbci.co.uk/learningenglish/${path}`;
const WRITE = "https://writeandimprove.com/";
const SPEAK = "https://speakandimprove.com/";
const STORY = "https://learnenglish.britishcouncil.org/free-resources/general/story-zone";
const MAGAZINE = "https://learnenglish.britishcouncil.org/free-resources/general/magazine-zone";
const PRON = BBC("english/features/pronunciation/");

const listen = (where: string, url: string, minutes: number, extra?: string): SelfStudySession => ({
  title: `Nghe: ${where}`,
  minutes,
  url,
  urlLabel: `Mở ${where}`,
  steps: [
    "Nghe lần 1 không nhìn chữ, đoán ý chính.",
    "Nghe lần 2 có bản ghi lời (nếu có), gạch dưới câu chưa nghe ra.",
    "Chọn 3 câu, nghe từng câu rồi nói nhại lại (shadowing) cho đến khi theo kịp.",
    ...(extra ? [extra] : []),
    "Ghi 5 từ mới vào sổ, mỗi từ một câu ví dụ.",
  ],
});
const read = (where: string, url: string, minutes: number, extra?: string): SelfStudySession => ({
  title: `Đọc: ${where}`,
  minutes,
  url,
  urlLabel: `Mở ${where}`,
  steps: [
    "Đọc lướt một lượt, không tra từ, nói được ý chính bằng một câu.",
    "Đọc kỹ lần 2, câu nào khó thì tách theo 4 bước.",
    ...(extra ? [extra] : []),
    "Ghi số trang hoặc số bài đã đọc vào sổ (Chủ nhật cộng lại cả tuần), và 5 từ mới.",
  ],
});
/** writing for the exam's own task types, at the exam's word count */
const write = (genre: string, words: string, minutes: number): SelfStudySession => ({
  title: `Viết: ${genre} (${words})`,
  minutes,
  url: WRITE,
  urlLabel: "Mở Write & Improve",
  steps: [
    `Chọn trên Write & Improve một đề dạng ${genre} ở đúng cấp (hoặc viết lại nhiệm vụ Thực hành của bài trong tuần theo dạng này).`,
    `Viết ${words}, tính giờ như thi, không tra cứu.`,
    "Nộp, xem cấp CEFR và các chỗ bị đánh dấu; sửa rồi nộp lại ít nhất 2 lần.",
    "Chép các lỗi lặp lại vào sổ lỗi.",
  ],
});
const speakAndImprove = (minutes: number, extra: string): SelfStudySession => ({
  title: "Nói: luyện trên Speak & Improve",
  minutes,
  url: SPEAK,
  urlLabel: "Mở Speak & Improve",
  steps: [
    "Trả lời các câu hỏi nói của Speak & Improve (miễn phí, của Đại học Cambridge).",
    "Nghe lại bài nói, nói lại câu yếu nhất cho đến khi trôi chảy.",
    extra,
    "Ghi điểm CEFR vào sổ để theo dõi tiến bộ (đây là ước lượng, không phải điểm thi).",
  ],
});
const talk = (minutes: number): SelfStudySession => ({
  title: "Nói với người thật",
  minutes,
  url: "https://tandem.net/en",
  urlLabel: "Mở Tandem",
  steps: [
    "Nói chuyện 30 phút với một người thật: bạn trao đổi ngôn ngữ trên Tandem hoặc HelloTalk (có gói miễn phí), hoặc một giáo viên.",
    "Chuẩn bị trước 3 câu hỏi và 1 chủ đề của bài trong tuần để nói.",
    "Sau buổi nói, ghi lại 3 câu bạn muốn nói mà chưa nói được, tra cách nói đúng.",
    "Thi Cambridge nói theo cặp, có chấm cả cách tương tác; luyện với người thật là cách duy nhất tập được phần này.",
  ],
});
const weekReview = (minutes: number): SelfStudySession => ({
  title: "Ôn tuần và ghi giờ học",
  minutes,
  steps: [
    "Đọc lại sổ lỗi của cả tuần, tự sửa lại từng lỗi không nhìn câu đúng.",
    "Đọc lại sổ từ của tuần, nói to một câu với mỗi từ.",
    "Cộng số giờ đã học và số trang đã đọc trong tuần rồi ghi vào Nhật ký giờ học.",
    "Nghỉ ngơi phần còn lại của ngày: học đều quan trọng hơn học nhiều.",
  ],
});
const pron = (minutes: number): SelfStudySession => ({
  title: "Phát âm: một bài của BBC Learning English",
  minutes,
  url: PRON,
  urlLabel: "Mở bài phát âm BBC",
  steps: [
    "Làm một tập The Sounds of English hoặc Tim's Pronunciation Workshop.",
    "Nhại lại các câu mẫu, chú ý âm cuối, nối âm và trọng âm.",
    "Ghi âm một đoạn 30 giây, nghe lại và so với mẫu.",
  ],
});
const combine = (a: SelfStudySession, b: SelfStudySession): SelfStudySession => ({
  title: `${a.title}, rồi ${b.title.charAt(0).toLowerCase()}${b.title.slice(1)}`,
  minutes: a.minutes + b.minutes,
  url: a.url,
  urlLabel: a.urlLabel,
  steps: [...a.steps, ...b.steps],
});

type Week = Record<number, SelfStudySession>; // 0 = Sunday … 6 = Saturday

/**
 * Self-study by weekday: listening, extensive reading, writing in the exam's task types, speaking (from A2,
 * with a real person from B1) and pronunciation, adding up to each level's weekly self-study hours. The base
 * stage uses the A2 week: the learner is heading into A2.
 */
export const SELF_STUDY_WEEK: Partial<Record<Level, Week>> = {
  A2: {
    1: listen("BBC Real Easy English", BBC("english/features/real-easy-english"), 40),
    2: read("British Council, Đọc A2", BC("reading", "a2"), 40, "Làm phần câu hỏi đi kèm bài đọc."),
    3: combine(speakAndImprove(30, "Nói 1 phút về một chủ đề A2 Key: gia đình, công việc, sở thích."), pron(10)),
    4: read("News in Levels (mức 1–2)", "https://www.newsinlevels.com/", 40, "Đọc một tin ở mức 1, rồi đọc lại cùng tin đó ở mức 2."),
    5: listen("British Council, Nghe A2", BC("listening", "a2"), 40),
    6: write("email ngắn (A2 Key Part 6) và kể chuyện theo tranh (Part 7)", "25 và 35 từ trở lên", 60),
    0: weekReview(40),
  },
  B1: {
    1: listen("BBC 6 Minute English", BBC("english/features/6-minute-english"), 45),
    2: read("British Council, Đọc B1 hoặc Magazine zone", BC("reading", "b1"), 45, "Viết tóm tắt bài đọc trong 4–5 câu."),
    3: write("email (B1 Preliminary Part 1)", "khoảng 100 từ", 45),
    4: combine(talk(30), speakAndImprove(15, "Luyện phần nói về tranh của B1 Preliminary.")),
    5: listen("BBC The English We Speak", BBC("english/features/the-english-we-speak"), 45),
    6: combine(write("bài báo hoặc câu chuyện (B1 Preliminary Part 2)", "khoảng 100 từ", 60), pron(15)),
    0: weekReview(45),
  },
  B2: {
    1: listen("TED Talks", "https://www.ted.com/talks", 60, "Xem có phụ đề tiếng Anh, rồi tóm tắt bài nói thành tiếng trong một phút."),
    2: read("The Conversation", "https://theconversation.com/global", 50, "Ghi lại ý chính, quan điểm của người viết và 5 kết hợp từ hay."),
    3: write("bài luận (B2 First Part 1)", "140–190 từ", 60),
    4: combine(talk(40), speakAndImprove(20, "Nói 1 phút so sánh hai bức tranh như B2 First Part 2.")),
    5: listen("BBC Learning English from the News", BBC("english/"), 50, "Trên trang chủ BBC Learning English, mở mục Learning English from the News (mỗi năm một trang mới) và chọn bài mới nhất."),
    6: write("bài báo, email, báo cáo hoặc bài đánh giá (B2 First Part 2), mỗi tuần một dạng", "140–190 từ", 60),
    0: combine(pron(20), weekReview(45)),
  },
  C1: {
    1: listen("In Our Time (BBC Radio 4, qua Apple Podcasts)", "https://podcasts.apple.com/us/podcast/in-our-time/id73330895", 55, "Nghe không phụ đề, ghi chú ý chính và lập luận như nghe giảng."),
    2: read("Aeon: một bài tiểu luận", "https://aeon.co/essays", 60, "Gạch chân lập luận chính, viết tóm tắt 80–100 từ."),
    3: write("bài luận (C1 Advanced Part 1)", "220–260 từ", 60),
    4: combine(talk(45), speakAndImprove(15, "Nói 1 phút về ba bức tranh như C1 Advanced Part 2.")),
    5: read("The Guardian: The Long Read", "https://www.theguardian.com/news/series/the-long-read", 60, "Gạch chân lập luận chính và các kết hợp từ hay."),
    6: write("thư hoặc email, đề xuất, báo cáo hoặc bài đánh giá (C1 Advanced Part 2), mỗi tuần một dạng", "220–260 từ", 70),
    0: combine(pron(20), weekReview(50)),
  },
};

export const WEEKDAY_VI = ["Chủ nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];


/** How to work through a pronunciation lesson of the base stage. */
export const IPA_HOW: string[] = [
  "Đeo tai nghe. Ở mỗi âm, bấm nghe mẫu, nhìn khẩu hình được mô tả rồi đọc theo 3 lần.",
  "Đọc to các cặp từ dễ nhầm của bài (ví dụ ship / sheep), nghe lại để chắc mình phân biệt được.",
  "Ghi âm mình đọc 5 từ của bài, nghe lại và so với mẫu, đọc lại từ nào chưa giống.",
  "Làm hết phần Bài tập của bài.",
];

export const BASE_REVIEW_HOW = (titles: string[]): string[] => [
  `Trước khi mở bài, tự viết ra điểm chính của: ${titles.join("; ")}.`,
  "Mở từng bài, đọc lại phần Ghi nhớ cuối bài giảng và so với những gì bạn đã viết.",
  "Làm lại phần Bài tập của từng bài. Câu nào vẫn sai thì chép vào sổ lỗi.",
  "Đặt 2 câu mới về chính bạn cho mỗi bài và đọc to.",
];

/** Steps for a day spent on a section that failed in the official sample test. */
export const REMEDY_HOW: Record<string, string[]> = {
  reading: [
    "Đọc 2 bài trên trang Đọc của British Council ở đúng cấp, có tính giờ.",
    "Với mỗi câu trả lời sai, tìm câu trong bài chứa đáp án và tách câu đó theo 4 bước.",
    "Ghi lại vì sao bạn chọn sai: hiểu sai từ, sai cấu trúc câu, hay đọc không kịp.",
  ],
  use: [
    "Mở lại các bài ngữ pháp của cấp này có điểm thấp nhất, làm lại phần Bài tập.",
    "Làm 20 câu biến đổi câu (key word transformation) hoặc điền từ trong đề mẫu đã làm, che đáp án.",
    "Chép mọi kết hợp từ và cụm từ bạn sai vào sổ lỗi.",
  ],
  listening: [
    "Nghe 2 bài ở đúng cấp (British Council hoặc BBC), lần đầu không nhìn chữ, trả lời câu hỏi.",
    "Nghe lại có bản ghi lời, gạch chân đúng đoạn chứa đáp án bạn bỏ lỡ.",
    "Nghe và nhại lại đoạn đó cho đến khi theo kịp tốc độ.",
  ],
  writing: [
    "Viết 2 bài đúng dạng của đề thi, đúng số từ và đúng thời gian.",
    "Nộp lên Write & Improve, sửa rồi nộp lại đến khi đạt cấp cần.",
    "So với bài mẫu có điểm của Cambridge trong handbook để thấy khác biệt về bố cục và từ nối.",
  ],
  speaking: [
    "Trả lời các câu hỏi nói của đề mẫu, ghi âm, có tính giờ đúng như thi.",
    "Nghe lại, viết ra 3 chỗ ngập ngừng hoặc sai, chuẩn bị cách nói tốt hơn rồi nói lại.",
    "Nếu được, luyện 30 phút với một người thật (bạn trao đổi ngôn ngữ hoặc giáo viên).",
  ],
};

/**
 * New input for the days between lessons: graded reading and listening at the level, longer than the
 * self-study sessions, each with a task. The days rotate through the list.
 */
export const INPUT_SESSIONS: Partial<Record<Level, SelfStudySession[]>> = {
  A2: [
    read("British Council Story zone (truyện A2–B1)", STORY, 30, "Đọc một truyện, rồi kể lại bằng tiếng Anh trong 5 câu."),
    listen("British Council, Nghe A2", BC("listening", "a2"), 30, "Kể lại bằng lời những gì bạn nghe được trong 1 phút."),
    read("Breaking News English (mức 1–2)", "https://breakingnewsenglish.com/", 30, "Làm phần bài tập đi kèm bài đọc."),
    listen("ELLLO (hội thoại ngắn, mức A2)", "https://www.elllo.org/", 25, "Chọn một bài mức A2, làm câu hỏi đi kèm."),
  ],
  B1: [
    read("British Council Magazine zone", MAGAZINE, 35, "Viết tóm tắt bài đọc trong 4–5 câu."),
    listen("British Council, Nghe B1", BC("listening", "b1"), 30, "Kể lại nội dung trong 1 phút, dùng ít nhất 3 từ mới."),
    read("Breaking News English (mức 3–4)", "https://breakingnewsenglish.com/", 35, "Làm phần bài tập đi kèm bài đọc."),
    read("British Council Story zone (truyện mức B1)", STORY, 35, "Chọn truyện mức B1, đọc một chương rồi đoán chương sau sẽ ra sao."),
    listen("ELLLO (hội thoại ngắn, mức B1)", "https://www.elllo.org/", 30, "Chọn một bài mức B1, nghe không nhìn chữ trước."),
  ],
  B2: [
    read("British Council, Đọc B2", BC("reading", "b2"), 40, "Viết một đoạn nêu ý chính và quan điểm của người viết."),
    listen("All in the Mind (BBC Radio 4, qua Apple Podcasts)", "https://podcasts.apple.com/gb/podcast/all-in-the-mind/id643660675", 40, "Tóm tắt một tập thành tiếng trong 2 phút."),
    read("The Guardian: The Long Read", "https://www.theguardian.com/news/series/the-long-read", 45, "Đọc một nửa bài, ghi lại lập luận chính."),
    listen("TED-Ed: một bài giảng ngắn", "https://ed.ted.com/lessons", 30, "Xem không phụ đề, rồi làm phần Think đi kèm bài."),
  ],
  C1: [
    read("Aeon: một bài tiểu luận", "https://aeon.co/essays", 45, "Gạch chân lập luận chính, viết tóm tắt 80–100 từ."),
    listen("TED Podcasts", "https://www.ted.com/podcasts", 40, "Ghi chú ý chính và lập luận như khi nghe giảng."),
    read("The Conversation", "https://theconversation.com/global", 40, "So sánh hai bài cùng chủ đề: mỗi bài lập luận thế nào."),
    read("Psyche: một bài tiểu luận", "https://psyche.co/", 40, "Viết một đoạn đồng ý hoặc phản bác lập luận của bài, 120–150 từ."),
  ],
};
