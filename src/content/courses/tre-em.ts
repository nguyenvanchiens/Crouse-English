import type { Course } from "../types";

const soon = (slug: string, title: string, minutes: number) => ({ slug, title, minutes, free: false, steps: [] });

export const treEm: Course = {
  slug: "tre-em",
  title: "Tiếng Anh cho trẻ 6–12 tuổi",
  level: "A1",
  goal: "tre-em",
  summary: "Học qua trò chơi, bài hát và truyện tranh, có báo cáo hằng tuần cho phụ huynh.",
  outcomes: ["Từ vựng về gia đình, trường học, con vật", "Nghe và hát theo bài hát tiếng Anh", "Tự tin nói câu ngắn"],
  audience: ["Trẻ từ 6 đến 12 tuổi", "Phụ huynh muốn con học tiếng Anh tại nhà"],
  teacher: { name: "Cô Mai Linh", initials: "ML", bio: "Giáo viên tiểu học, 7 năm dạy tiếng Anh cho trẻ em." },
  priceVnd: 990_000,
  durationWeeks: 36,
  rating: 4.9,
  reviews: [{ name: "Thu Trang", role: "Phụ huynh bé Bin, 8 tuổi", quote: "Con tự mở bài học mỗi tối mà không cần nhắc." }],
  faqs: [{ q: "Phụ huynh có cần ngồi cùng con không?", a: "Không bắt buộc. Bài học được thiết kế để trẻ tự học." }],
  status: "soon",
  modules: [
    { id: "m1", title: "Xin chào!", lessons: [soon("mau-sac", "Màu sắc quanh em", 10), soon("con-vat", "Những con vật đáng yêu", 10)] },
    { id: "m2", title: "Trường học của em", lessons: [soon("do-dung", "Đồ dùng học tập", 10)] },
  ],
};
