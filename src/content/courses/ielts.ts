import type { Course } from "../types";

const soon = (slug: string, title: string, minutes: number) => ({ slug, title, minutes, steps: [] });

export const ielts: Course = {
  slug: "ielts",
  title: "Luyện thi IELTS 6.5+",
  level: "B1",
  goal: "ielts",
  summary: "Đủ 4 kỹ năng, chấm Writing và Speaking theo đúng tiêu chí của kỳ thi thật.",
  outcomes: [
    "Nắm cấu trúc đề và chiến lược làm từng phần",
    "Viết Task 1 và Task 2 đạt band 6.5",
    "Trả lời Speaking Part 2 trôi chảy trong 2 phút",
    "Tăng tốc độ đọc và nghe hiểu",
  ],
  audience: ["Người có trình độ B1 trở lên", "Sinh viên cần IELTS để du học hoặc xét tốt nghiệp"],
  teacher: { name: "Thầy Daniel Brooks", initials: "DB", bio: "Cựu giám khảo IELTS, 10 năm luyện thi tại Việt Nam." },
  durationWeeks: 16,
  rating: 4.8,
  reviews: [{ name: "Ngọc Hân", role: "Sinh viên năm 3, Hà Nội", quote: "Được chấm Writing chi tiết từng tiêu chí nên mình biết chính xác phải sửa gì." }],
  faqs: [{ q: "Đầu vào cần trình độ nào?", a: "Khoảng B1. Bạn có thể làm bài kiểm tra trình độ miễn phí để biết." }],
  status: "soon",
  modules: [
    { id: "m1", title: "Làm quen với đề thi", lessons: [soon("cau-truc-de", "Cấu trúc đề IELTS", 20), soon("band-diem", "Cách tính band điểm", 15)] },
    { id: "m2", title: "Writing", lessons: [soon("task-1", "Writing Task 1: biểu đồ", 30), soon("task-2", "Writing Task 2: nghị luận", 35)] },
    { id: "m3", title: "Speaking", lessons: [soon("part-2", "Speaking Part 2", 25)] },
  ],
};
