import type { SelfStudyPlan, StudyResource } from "./types";

// Every link was checked to exist (2026-09): British Council LearnEnglish level pages, Cambridge's
// Write & Improve / Speak & Improve, YouGlish, TED, The Guardian, Project Gutenberg, Breaking News English,
// News in Levels; BBC Learning English and VOA Learning English were confirmed through search results.

const bc = (skill: "listening" | "reading" | "writing" | "speaking", level: string, how: string): StudyResource => ({
  name: `British Council LearnEnglish: ${skill === "listening" ? "Nghe" : skill === "reading" ? "Đọc" : skill === "writing" ? "Viết" : "Nói"} ${level.toUpperCase()}`,
  url: `https://learnenglish.britishcouncil.org/free-resources/${skill}/${level}`,
  how,
  kind: skill,
});

const writeAndImprove: StudyResource = {
  name: "Write & Improve (Cambridge)",
  url: "https://writeandimprove.com/",
  how: "Công cụ miễn phí của Đại học Cambridge: dán bài viết nhiệm vụ thực hành vào, máy chấm theo khung CEFR và chỉ ra chỗ cần sửa. Sửa rồi nộp lại đến khi hết lỗi.",
  kind: "writing",
};
const speakAndImprove: StudyResource = {
  name: "Speak & Improve (Cambridge)",
  url: "https://speakandimprove.com/",
  how: "Dự án nghiên cứu miễn phí của Đại học Cambridge: trả lời câu hỏi nói, máy chấm điểm bài nói, bạn nghe lại và nói lại để lên điểm. Dùng sau phần nói tự do của mỗi bài.",
  kind: "speaking",
};
const youglish: StudyResource = {
  name: "YouGlish",
  url: "https://youglish.com/",
  how: "Gõ một từ hoặc cụm từ để nghe người bản xứ nói nó trong video thật. Chọn giọng UK, nghe rồi nhại lại (shadowing).",
  kind: "speaking",
};
const cambridgeDictionary: StudyResource = {
  name: "Cambridge Dictionary",
  url: "https://dictionary.cambridge.org/",
  how: "Tra phiên âm Anh-Anh, nghe cách đọc và xem câu ví dụ cho mọi từ mới gặp khi đọc, nghe.",
  kind: "vocab",
};
const bbc6Minute: StudyResource = {
  name: "BBC Learning English: 6 Minute English",
  url: "https://www.bbc.co.uk/learningenglish/english/features/6-minute-english",
  how: "Mỗi tập 6 phút về một chủ đề, có bản ghi lời. Nghe một lần không nhìn chữ, rồi nghe lại có bản ghi và ghi 5 từ mới vào sổ.",
  kind: "listening",
};
const bbcEnglishWeSpeak: StudyResource = {
  name: "BBC Learning English: The English We Speak",
  url: "https://www.bbc.co.uk/learningenglish/english/features/the-english-we-speak",
  how: "Mỗi tập vài phút giải thích một thành ngữ, cách nói thân mật của người Anh. Rất hợp để hiểu tiếng Anh đời thường.",
  kind: "listening",
};
const voa: StudyResource = {
  name: "VOA Learning English",
  url: "https://learningenglish.voanews.com/",
  how: "Tin tức và bài học đọc chậm, có chữ. Mục Let's Learn English là loạt phim ngắn cho người mới bắt đầu.",
  kind: "listening",
};
const newsInLevels: StudyResource = {
  name: "News in Levels",
  url: "https://www.newsinlevels.com/",
  how: "Mỗi tin có ba mức độ khó, kèm âm thanh. Đọc mức 1 trước, rồi thử mức 2 cùng tin đó.",
  kind: "reading",
};
const breakingNews: StudyResource = {
  name: "Breaking News English",
  url: "https://breakingnewsenglish.com/",
  how: "Tin thời sự viết lại theo 7 mức độ, có nghe và bài tập. Chọn mức vừa sức, mỗi tuần đọc hai bài.",
  kind: "reading",
};
const ted: StudyResource = {
  name: "TED Talks",
  url: "https://www.ted.com/talks",
  how: "Bài nói 10–18 phút về khoa học, xã hội, công việc. Xem có phụ đề tiếng Anh, sau đó xem lại không phụ đề và tóm tắt ý chính.",
  kind: "listening",
};
const guardianLongRead: StudyResource = {
  name: "The Guardian: The Long Read",
  url: "https://www.theguardian.com/news/series/the-long-read",
  how: "Bài báo dài, văn phong báo chí chất lượng cao. Mỗi tuần đọc một bài, gạch chân lập luận chính và các kết hợp từ hay.",
  kind: "reading",
};
const gutenberg: StudyResource = {
  name: "Project Gutenberg",
  url: "https://www.gutenberg.org/",
  how: "Gần 80.000 sách miễn phí, chủ yếu là văn học kinh điển đã hết bản quyền. Chọn tiểu thuyết ngắn để đọc mở rộng 20–30 phút mỗi ngày, không tra từ nào đoán được nghĩa.",
  kind: "reading",
};

export const SELF_STUDY: Record<string, SelfStudyPlan> = {
  "phat-am-ipa": {
    weeklyHours: 2,
    routine: [
      "Mỗi ngày 10 phút: chọn 5 từ trong bài, nghe trên Cambridge Dictionary hoặc YouGlish rồi đọc to theo.",
      "Hai lần mỗi tuần: ghi âm mình đọc một đoạn ngắn, nghe lại và so với bản gốc, tìm âm cuối bị nuốt.",
      "Cuối tuần: xem lại bảng IPA và đọc phiên âm của 10 từ mới bất kỳ mà không nghe trước.",
    ],
    resources: [cambridgeDictionary, youglish, bc("listening", "a1", "Bài nghe ngắn có bản ghi lời, dùng để nhại lại từng câu."), bc("speaking", "a1", "Các đoạn hội thoại mẫu để luyện nói theo.")],
  },
  "tieng-anh-a1": {
    weeklyHours: 4,
    routine: [
      "Mỗi ngày 10 phút ở trang Ôn từ vựng và thêm dần các chủ đề trong kho từ vựng A1.",
      "Ba buổi mỗi tuần, mỗi buổi 20 phút: một bài nghe A1 của British Council hoặc một tập Let's Learn English trên VOA.",
      "Hai buổi mỗi tuần: một bài đọc A1 của British Council, đọc to một đoạn.",
      "Mỗi tuần: viết lại nhiệm vụ thực hành của bài vừa học và tự sửa theo tiêu chí, nói to câu trả lời nói tự do hai lần.",
    ],
    resources: [
      bc("listening", "a1", "Bài nghe tình huống hằng ngày có bản ghi lời và câu hỏi."),
      bc("reading", "a1", "Bài đọc ngắn: tin nhắn, thông báo, email đơn giản."),
      bc("writing", "a1", "Bài viết mẫu và bài tập viết ngắn."),
      bc("speaking", "a1", "Hội thoại mẫu có video để luyện nói theo."),
      voa,
      youglish,
    ],
  },
  "tieng-anh-a2": {
    weeklyHours: 5,
    routine: [
      "Mỗi ngày 10–15 phút ôn từ vựng, thêm 1–2 chủ đề A2 mỗi tuần.",
      "Ba buổi mỗi tuần: một bài nghe A2 của British Council hoặc một tin mức 1 trên News in Levels.",
      "Hai buổi mỗi tuần: một bài đọc A2 hoặc một tin mức dễ trên Breaking News English.",
      "Mỗi tuần: nộp bài viết thực hành lên Write & Improve, sửa theo nhận xét rồi nộp lại.",
    ],
    resources: [
      bc("listening", "a2", "Bài nghe hội thoại và thông báo có bản ghi lời."),
      bc("reading", "a2", "Bài đọc email, quảng cáo, bài blog ngắn."),
      bc("writing", "a2", "Bài viết mẫu email, tin nhắn và bài tập."),
      bc("speaking", "a2", "Hội thoại mẫu: mời, gợi ý, hỏi đường."),
      newsInLevels,
      writeAndImprove,
    ],
  },
  "tieng-anh-b1": {
    weeklyHours: 6,
    routine: [
      "Mỗi ngày 15 phút ôn từ vựng và kho từ vựng B1.",
      "Ba buổi mỗi tuần: một tập 6 Minute English, nghe không nhìn chữ trước rồi mới đọc bản ghi.",
      "Hai buổi mỗi tuần: một bài đọc B1 của British Council hoặc Breaking News English mức 3–4.",
      "Mỗi tuần: một bài viết 100–150 từ trên Write & Improve và 20 phút luyện nói trên Speak & Improve.",
    ],
    resources: [
      bbc6Minute,
      bc("listening", "b1", "Bài nghe dài hơn: phỏng vấn, thảo luận, có câu hỏi."),
      bc("reading", "b1", "Bài báo, bài blog và email trình độ B1."),
      breakingNews,
      writeAndImprove,
      speakAndImprove,
    ],
  },
  "tieng-anh-b2": {
    weeklyHours: 7,
    routine: [
      "Mỗi ngày 15 phút ôn từ vựng và kho từ vựng B2.",
      "Ba buổi mỗi tuần: một bài nói TED có phụ đề tiếng Anh, sau đó tóm tắt thành tiếng trong một phút.",
      "Hai buổi mỗi tuần: một bài đọc B2 của British Council, ghi lại 5 kết hợp từ hay.",
      "Mỗi tuần: một bài viết 150–200 từ trên Write & Improve và 30 phút trên Speak & Improve.",
    ],
    resources: [
      ted,
      bbcEnglishWeSpeak,
      bc("listening", "b2", "Bài nghe thảo luận, bài giảng ngắn và tin tức."),
      bc("reading", "b2", "Bài báo và bài bình luận trình độ B2."),
      bc("writing", "b2", "Bài viết mẫu email trang trọng, bài luận, báo cáo."),
      writeAndImprove,
      speakAndImprove,
    ],
  },
  "tieng-anh-c1": {
    weeklyHours: 8,
    routine: [
      "Mỗi ngày 20–30 phút đọc mở rộng: một tiểu thuyết trên Project Gutenberg hoặc một bài Long Read.",
      "Ba buổi mỗi tuần: một bài TED không phụ đề, ghi chú ý chính và lập luận như khi nghe giảng.",
      "Mỗi tuần: một bài luận 250 từ trở lên trên Write & Improve, viết lại sau khi sửa.",
      "Mỗi tuần: 30 phút luyện nói trên Speak & Improve và ôn kho từ vựng C1.",
    ],
    resources: [
      guardianLongRead,
      gutenberg,
      ted,
      bc("listening", "c1", "Bài nghe học thuật và thảo luận chuyên sâu."),
      bc("reading", "c1", "Bài đọc dài, lập luận phức tạp."),
      bc("writing", "c1", "Bài luận và báo cáo mẫu trình độ C1."),
      writeAndImprove,
      speakAndImprove,
    ],
  },
};
