# Lộ trình Tiếng Anh A1 → C1 (nội dung đầy đủ, chưa cần admin)

- **Ngày:** 2026-09-24
- **Trạng thái:** Người dùng đã duyệt hướng đi và cho phép làm trọn gói, báo lại khi xong
- **Phạm vi:** 5 khóa (A1, A2, B1, B2, C1) × 6 bài; thêm bước "Bài giảng"; bỏ khóa mẫu `giao-tiep-a1`; sửa 8 lỗi nhỏ còn tồn từ đợt review trước.

## 1. Cấu trúc

| Slug | Tên | Chương 1 | Chương 2 |
|---|---|---|---|
| `tieng-anh-a1` | Tiếng Anh A1: Nền tảng | Làm quen | Cuộc sống hằng ngày |
| `tieng-anh-a2` | Tiếng Anh A2: Giao tiếp hằng ngày | Chuyện đã qua và sắp tới | Ra ngoài và chăm sóc bản thân |
| `tieng-anh-b1` | Tiếng Anh B1: Tự tin trò chuyện | Kể chuyện và trải nghiệm | Công việc và quan điểm |
| `tieng-anh-b2` | Tiếng Anh B2: Tiếng Anh công việc | Giao tiếp nơi công sở | Lập luận và thuyết phục |
| `tieng-anh-c1` | Tiếng Anh C1: Thành thạo | Tiếng Anh tự nhiên | Lập luận tinh tế |

Mục tiêu (`goal`) của 5 khóa là `lo-trinh` ("Lộ trình A1–C1"), thay cho `giao-tiep`. Bài đầu của mỗi khóa là `free`. Mỗi bài gồm 4 bước: `lecture` → `vocab` (6–8 từ) → `exercise` (6–8 câu, trộn đủ 4 dạng) → `speaking` (3 câu).

## 2. Giáo trình

| Cấp | # | Bài | Trọng tâm |
|---|---|---|---|
| A1 | 1 | Chào hỏi và giới thiệu | to be (am/is/are), đại từ nhân xưng |
| A1 | 2 | Gia đình và đồ vật | a/an, số nhiều, this/that, my/your |
| A1 | 3 | Số, tuổi và số điện thoại | số 1–100, How old / What's your number |
| A1 | 4 | Một ngày của tôi | hiện tại đơn, trạng từ tần suất, giờ |
| A1 | 5 | Đồ ăn và gọi món | danh từ đếm được/không đếm được, some/any, Can I have |
| A1 | 6 | Nhà và nơi chốn | there is/are, giới từ chỉ vị trí |
| A2 | 1 | Hôm qua bạn làm gì | quá khứ đơn (có quy tắc/bất quy tắc) |
| A2 | 2 | Kế hoạch cuối tuần | be going to, hiện tại tiếp diễn chỉ tương lai |
| A2 | 3 | So sánh và mua sắm | so sánh hơn, so sánh nhất |
| A2 | 4 | Hỏi đường và đi lại | câu mệnh lệnh, chỉ đường, phương tiện |
| A2 | 5 | Sức khỏe và lời khuyên | should, have to, must |
| A2 | 6 | Bạn đã từng…? | hiện tại hoàn thành với ever/never |
| B1 | 1 | Kể lại một chuyện đã xảy ra | quá khứ tiếp diễn vs quá khứ đơn |
| B1 | 2 | Đã… được bao lâu rồi | hiện tại hoàn thành với for/since, so với quá khứ đơn |
| B1 | 3 | Nếu… thì… | câu điều kiện loại 1 và loại 2 |
| B1 | 4 | Công việc và phỏng vấn | tính từ -ed/-ing, mô tả kinh nghiệm |
| B1 | 5 | Bày tỏ ý kiến | I think / In my opinion, đồng ý/phản đối, từ nối |
| B1 | 6 | Tin tức và sự việc | câu bị động hiện tại/quá khứ |
| B2 | 1 | Viết email chuyên nghiệp | văn phong trang trọng, lời đề nghị lịch sự |
| B2 | 2 | Họp và thảo luận | động từ khuyết thiếu chỉ suy đoán, xen ngang lịch sự |
| B2 | 3 | Tường thuật lời nói | câu tường thuật, lùi thì |
| B2 | 4 | Tiếc nuối và giả định quá khứ | điều kiện loại 3, wish/if only |
| B2 | 5 | Thuyết trình | mệnh đề quan hệ, cụm dẫn dắt |
| B2 | 6 | Đàm phán và thuyết phục | nói giảm, ngôn ngữ mềm, đề xuất |
| C1 | 1 | Nói tự nhiên như người bản xứ | cụm động từ, collocation |
| C1 | 2 | Đảo ngữ để nhấn mạnh | Never have I…, Not only…, Hardly… when |
| C1 | 3 | Câu chẻ và nhấn mạnh | It is… that, What I need is… |
| C1 | 4 | Lập luận và phản biện | nhượng bộ (although, even so), dấu hiệu diễn ngôn |
| C1 | 5 | Ngôn ngữ tinh tế | thành ngữ, nói giảm, hàm ý |
| C1 | 6 | Văn phong học thuật | danh từ hóa, trang trọng vs thân mật |

## 3. Bước "Bài giảng"

```ts
type LectureBlock =
  | { kind: "text"; body: string }            // **đậm** được hỗ trợ
  | { kind: "table"; headers: string[]; rows: string[][] }
  | { kind: "example"; en: string; vi: string; note?: string }  // có nút nghe câu en
  | { kind: "tip"; body: string }
  | { kind: "mistake"; wrong: string; right: string; why: string };
interface LectureStep { type: "lecture"; title: string; blocks: LectureBlock[] }
```

Bài giảng viết bằng tiếng Việt, ví dụ bằng tiếng Anh kèm nghĩa. Người học bấm "Đã đọc xong" để hoàn thành bước.

## 4. Kiểm tra trình độ

`scorePlacement` trả thêm `startLevel`: không đạt cấp nào → A1; cấp cao nhất đạt được là L thì bắt đầu ở cấp kế tiếp (đạt B2 → C1). Gợi ý khóa = `tieng-anh-<startLevel>`.

## 5. Sửa 8 lỗi nhỏ

1. Nút từ ở bài sắp xếp câu: bỏ dấu câu, viết thường (trừ "I" và các cụm viết tắt bắt đầu bằng "I'"), chấm theo dạng chuẩn hóa.
2. `role="group"` cho hai khung của bài sắp xếp câu.
3. `/khoa-hoc` hiện skeleton trong lúc chờ lọc.
4. Streak: lệch lùi 1 ngày thì giữ nguyên, lệch lùi ≥ 2 ngày thì đặt lại.
5. Sự kiện `storage` với `key === null` (lệnh `clear()`) làm mới cache.
6. Rời bài tập giữa chừng rồi quay lại thì làm tiếp đúng chỗ.
7. Nút "Hủy" khi đổi tên trên chứng chỉ.
8. Chứng chỉ in căn giữa theo chiều dọc.

## 6. Kiểm thử

- Test toàn vẹn dữ liệu cho cả 30 bài: mỗi bài có đủ 4 bước theo đúng thứ tự, số từ, số câu bài tập và số câu nói nằm trong khoảng quy định, mỗi bài dùng đủ 4 dạng bài tập, bài giảng có ít nhất một ví dụ.
- Unit test cho: bộ phân tích `**đậm**`, `startLevel`, streak, `key === null`, chấm câu sắp xếp đã chuẩn hóa.
- Một agent độc lập rà soát tiếng Anh cho cả 30 bài (ngữ pháp, IPA, trọng âm, nghĩa, đáp án).
- `npm test`, `tsc`, lint, build; kiểm tra bằng Playwright ở khổ 390px và 1440px; chạy thử trọn một khóa.
