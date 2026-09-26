# Crouse English

Khóa học tiếng Anh miễn phí cho người Việt: Bước 0 (phát âm với IPA) rồi lộ trình A1 → C1. Mỗi bài có bài giảng tiếng Việt, từ vựng có IPA và trọng âm, hội thoại đóng vai được, đọc hiểu, bài tập chấm ngay (kể cả sửa lỗi sai), luyện nói bằng nhận diện giọng nói và một nhiệm vụ viết tự chấm theo tiêu chí. Cuối mỗi chương có bài ôn tập; cuối khóa có đề kiểm tra riêng để nhận chứng chỉ.

## Chạy dự án

```bash
npm install
npm run dev      # http://localhost:3000
npm test         # kiểm tra logic và toàn bộ nội dung bài học
npm run lint
npm run build    # xuất trang tĩnh ra thư mục out/
npm run deploy   # build rồi đẩy lên Cloudflare (cần đăng nhập wrangler)
```

Next.js 16 (App Router) với `output: "export"`: mọi trang được dựng sẵn thành HTML tĩnh, không có máy chủ. Tiến độ học lưu trong `localStorage` của trình duyệt (không có tài khoản).

## Cấu trúc

| Thư mục | Nội dung |
|---|---|
| `src/content/types.ts` | Kiểu dữ liệu của khóa học, bài học, các bước và dạng bài tập |
| `src/content/builders.ts` | Hàm viết nội dung: `lesson()`, `reading()`, `mc()`, `fill()`, `reorder()`, `listen()`, `listenQ()`, `correct()`… |
| `src/content/courses/` | Mỗi file một khóa: thông tin khóa, chương, bài viết trực tiếp và đề cuối khóa `finalTest` |
| `src/content/lessons/<cấp>/` | Mỗi file một bài học |
| `src/content/review.ts` | Sinh bài ôn tập chương và bài kiểm tra cuối khóa |
| `src/content/placement.ts` | 40 câu kiểm tra trình độ (A1 → C1) |
| `src/content/wordbanks/` | Kho từ vựng thêm theo chủ đề cho từng cấp (khoảng 450 từ mỗi cấp, IPA và cấp CEFR đối chiếu Cambridge Dictionary) |
| `src/content/self-study.ts` | Kế hoạch tự học ngoài khóa và tài liệu miễn phí cho từng cấp |
| `src/lib/` | Chấm điểm, tiến độ, lịch ôn từ vựng, giọng nói |
| `src/components/lesson/` | Giao diện từng bước của bài học |

## Viết nội dung

Đọc `docs/superpowers/content-authoring-brief.md` trước khi viết hoặc sửa bài. Test `src/lib/content.test.ts` kiểm tra chuẩn của mọi bài: đủ 7 bước, số câu và dạng bài tập, độ dài bài đọc và bài viết theo cấp, IPA kiểu Anh-Anh, không dạy lại từ vựng của cấp dưới, và đề cuối khóa không chép câu hỏi trong bài.

Mỗi cấp có khoảng 9–12 giờ bài học. Cambridge English ước tính cần 90–100 giờ học để đạt A1 và 700–800 giờ để đạt C1 (tính từ đầu), nên trang khóa học ghi rõ số giờ đó kèm kế hoạch tự học ngoài khóa.

Giáo viên của mỗi khóa là nhân vật dẫn dắt; trang không hiển thị đánh giá hay số liệu học viên chưa có thật.
