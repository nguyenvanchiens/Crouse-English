import type { Course } from "../types";

const soon = (slug: string, title: string, minutes: number) => ({ slug, title, minutes, steps: [] });

export const toeic: Course = {
  slug: "toeic",
  title: "TOEIC 750+",
  level: "A2",
  goal: "toeic",
  summary: "Cho sinh viên sắp ra trường và người cần chứng chỉ để thăng tiến trong công việc.",
  outcomes: [
    "Nắm 7 phần của bài thi Listening và Reading",
    "Học từ vựng theo chủ đề công sở",
    "Làm quen bẫy thường gặp trong đề",
  ],
  audience: ["Người có điểm TOEIC thử từ 350 trở lên", "Sinh viên cần chuẩn đầu ra tiếng Anh"],
  teacher: { name: "Cô Thanh Tâm", initials: "TT", bio: "TOEIC 990, 6 năm luyện thi cho sinh viên và người đi làm." },
  durationWeeks: 10,
  rating: 4.8,
  reviews: [{ name: "Quốc Huy", role: "Sinh viên năm 4, TP.HCM", quote: "Thi thử tăng từ 480 lên 785 sau một khóa." }],
  faqs: [{ q: "Khóa có luyện Speaking và Writing không?", a: "Khóa này tập trung vào Listening và Reading." }],
  status: "soon",
  modules: [
    { id: "m1", title: "Listening", lessons: [soon("part-1-2", "Part 1–2: tranh và hỏi đáp", 20), soon("part-3-4", "Part 3–4: hội thoại và bài nói", 25)] },
    { id: "m2", title: "Reading", lessons: [soon("part-5-6", "Part 5–6: ngữ pháp và từ vựng", 25), soon("part-7", "Part 7: đọc hiểu", 30)] },
  ],
};
