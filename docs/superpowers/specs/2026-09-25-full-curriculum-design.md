# Giáo trình đầy đủ: 16 bài mỗi cấp, ôn tập chương, sổ tay ngữ pháp

- **Ngày:** 2026-09-25
- **Yêu cầu:** "cho nhiều bài học mỗi khóa học rồi ngữ pháp… như 1 khóa học thật sự". Người dùng cho phép làm trọn gói rồi báo lại.

## 1. Cấu trúc mỗi cấp

4 chương × 4 bài = 16 bài, cộng 1 bài "Ôn tập chương" cuối mỗi chương (tổng cộng 20 mục mỗi cấp). 6 bài hiện có được giữ nguyên nội dung và xếp lại vị trí. Soạn thêm 50 bài mới, mỗi bài một file: `src/content/lessons/<cấp>/<slug>.ts` (`export default lesson({...})`). Id bài tập của bài mới theo dạng `<cấp>-n<vị trí 2 chữ số>-<k>`, ví dụ `a1-n04-1`.

Bài ôn tập được tạo tự động (`buildReviewLesson`): lấy 3 câu bài tập của mỗi bài trong chương (ưu tiên đủ các dạng), id mang hậu tố `-r`, slug `on-tap-chuong-<n>`, và chỉ có một bước `exercise`. Lesson có thêm `review?: true`.

## 2. Giáo trình (✓ = bài đã có)

**A1: Nền tảng**
- Ch1 Làm quen: 1 ✓ chào hỏi (to be) · 2 ✓ gia đình và đồ vật · 3 ✓ số, tuổi · 4 nghe-nghiep-va-quoc-tich (a/an với nghề, câu hỏi Wh- với to be)
- Ch2 Cuộc sống hằng ngày: 5 ✓ một ngày của tôi (hiện tại đơn) · 6 thoi-gian-va-lich-hen (giờ, thứ, tháng, in/on/at chỉ thời gian) · 7 so-thich (like/love/hate + V-ing) · 8 hoi-dap-hang-ngay (câu hỏi Wh- với do/does, how often)
- Ch3 Đồ ăn, mua sắm và con người: 9 ✓ đồ ăn và gọi món · 10 mua-sam-va-mau-sac (How much/How many, màu sắc, quần áo) · 11 toi-co-the (can/can't chỉ khả năng và xin phép) · 12 mo-ta-nguoi (have got/has got, tính từ ngoại hình)
- Ch4 Nơi chốn và hoạt động: 13 ✓ nhà và nơi chốn · 14 thanh-pho-cua-toi (địa điểm, giới từ, chỉ đường cơ bản) · 15 dang-lam-gi (hiện tại tiếp diễn) · 16 cuoi-tuan-vua-roi (was/were)

**A2: Giao tiếp hằng ngày**
- Ch1 Chuyện đã qua: 1 ✓ hôm qua · 2 ky-nghi-cua-toi (quá khứ đơn: câu hỏi Wh-, động từ bất quy tắc) · 3 ngay-xua-toi-tung (used to) · 4 tieu-su (before/after/when + quá khứ, ngày tháng)
- Ch2 Dự định và tương lai: 5 ✓ kế hoạch cuối tuần · 6 du-doan-tuong-lai (will/won't, might, probably) · 7 loi-moi-va-de-nghi (Would you like, Shall we, Let's, will để đề nghị) · 8 goi-dien-thoai (câu nói qua điện thoại, can/could để nhờ)
- Ch3 Mua sắm và đồ vật: 9 ✓ so sánh · 10 bao-nhieu (much/many/a lot of/a few/a little) · 11 qua-va-khong-du (too/enough) · 12 cua-ai (đại từ tân ngữ, đại từ sở hữu, whose)
- Ch4 Ra ngoài và trải nghiệm: 13 ✓ hỏi đường · 14 ✓ sức khỏe · 15 ✓ bạn đã từng · 16 vua-moi-da-chua (hiện tại hoàn thành với just/already/yet)

**B1: Tự tin trò chuyện**
- Ch1 Kể chuyện và trải nghiệm: 1 ✓ kể lại một chuyện · 2 ✓ đã… được bao lâu · 3 qua-khu-hoan-thanh (had + V3) · 4 hien-tai-hoan-thanh-tiep-dien (have been + V-ing)
- Ch2 Khả năng và giả định: 5 ✓ nếu… thì · 6 suy-doan-hien-tai (must/might/can't be) · 7 dong-tu-theo-sau (động từ + to V / V-ing) · 8 menh-de-quan-he (who/which/that/where, mệnh đề xác định)
- Ch3 Công việc và giao tiếp: 9 ✓ công việc và phỏng vấn · 10 ✓ bày tỏ ý kiến · 11 cau-hoi-gian-tiep (Could you tell me…, Do you know if…) · 12 so-sanh-nang-cao (much/far + so sánh hơn, the… the…, not as… as)
- Ch4 Tin tức và xã hội: 13 ✓ tin tức và sự việc · 14 bi-dong-nang-cao (bị động với hiện tại hoàn thành, tương lai, động từ khuyết thiếu; have something done) · 15 tuong-lai-nang-cao (will be doing, will have done) · 16 cum-dong-tu-thong-dung (cụm động từ hằng ngày)

**B2: Tiếng Anh công việc**
- Ch1 Giao tiếp nơi công sở: 1 ✓ email · 2 ✓ họp · 3 ✓ tường thuật · 4 goi-dien-va-hop-truc-tuyen (điện thoại và họp video, lời đề nghị lịch sự)
- Ch2 Giả định và tiếc nuối: 5 ✓ tiếc nuối · 6 dieu-kien-nang-cao (unless, provided that, as long as, in case, otherwise) · 7 dong-tu-khuyet-thieu-qua-khu (should have, could have, needn't have) · 8 gia-dinh-khong-that (would rather, it's time, as if)
- Ch3 Trình bày và viết: 9 ✓ thuyết trình · 10 mo-ta-so-lieu (mô tả số liệu và biểu đồ) · 11 tu-noi-nang-cao (whereas, therefore, moreover…) · 12 rut-gon-menh-de (mệnh đề phân từ)
- Ch4 Thuyết phục và xử lý tình huống: 13 ✓ đàm phán · 14 mao-tu (a/an/the/không mạo từ, nâng cao) · 15 to-v-hay-v-ing (remember/stop/try…: đổi nghĩa khi đi với to V hay V-ing) · 16 than-phien-va-xu-ly (khiếu nại và phản hồi khiếu nại một cách trang trọng)

**C1: Thành thạo**
- Ch1 Tiếng Anh tự nhiên: 1 ✓ nói tự nhiên · 2 tinh-luoc-va-thay-the (tỉnh lược, thay thế: so/not/do so) · 3 tuong-lai-nang-cao (be about to, be due to, be bound to) · 4 cau-tao-tu (tiền tố, hậu tố, họ từ)
- Ch2 Nhấn mạnh và giả định: 5 ✓ đảo ngữ · 6 ✓ câu chẻ · 7 dieu-kien-nang-cao (were to, should, had đảo ngữ, but for) · 8 bang-thai-cach (thể giả định: insist that he be…)
- Ch3 Lập luận và tường thuật: 9 ✓ lập luận · 10 dong-tu-tuong-thuat (accuse of, urge to, deny + V-ing) · 11 bi-dong-nang-cao (It is said that / is said to have) · 12 menh-de-quan-he-nang-cao (whereby, in which, none of whom)
- Ch4 Văn phong tinh tế: 13 ✓ ngôn ngữ tinh tế · 14 ✓ văn phong học thuật · 15 trang-tu-binh-luan (arguably, admittedly, presumably) · 16 viet-luan-va-tom-tat (diễn đạt lại, tóm tắt, bố cục bài luận)

## 3. Sổ tay ngữ pháp

- `/ngu-phap`: danh sách toàn bộ tiêu đề bài giảng, nhóm theo cấp và chương, có ô lọc theo từ khóa.
- `/ngu-phap/[course]/[lesson]`: chỉ hiển thị bài giảng, có liên kết "Luyện tập bài này".
- `StepLecture` được tách ra thành `LectureContent` để dùng chung cho cả hai trang.

## 4. Kiểm thử

- Test lộ trình: mỗi cấp có 4 chương, mỗi chương gồm 4 bài thường + 1 bài ôn tập; bài thường theo đúng định dạng 4 bước.
- Bài ôn tập có 12 câu, đủ 4 dạng bài tập, id không trùng.
- Unit test cho `buildReviewLesson` và cho bộ lọc sổ tay ngữ pháp.
- Agent độc lập rà soát tiếng Anh cho 50 bài mới.
