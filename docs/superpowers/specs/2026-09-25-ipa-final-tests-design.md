# Bảng IPA, khóa phát âm, bài kiểm tra cuối khóa, rà soát sư phạm

- **Ngày:** 2026-09-25
- **Yêu cầu:** "cứ làm đầy đủ xong review lại để 1 người khi học xong có thể tự tin… chưa thấy bảng IPA".

## 1. Bảng IPA `/bang-ipa`
44 âm vị tiếng Anh-Anh (RP), chia thành 12 nguyên âm đơn, 8 nguyên âm đôi và 24 phụ âm. Mỗi âm gồm: ký hiệu, nhóm, 3 từ ví dụ (bấm vào để nghe bằng giọng đọc của trình duyệt), mẹo phát âm cho người Việt, và một cặp từ dễ nhầm (nếu có). Dữ liệu nằm ở `src/content/ipa.ts`, có test toàn vẹn. Thẻ từ vựng (`PronounceCard`) có liên kết "Tra bảng IPA".

## 2. Khóa "Bước 0: Phát âm chuẩn với IPA" (`phat-am-ipa`, goal `phat-am`)
2 chương × 4 bài, cộng 2 bài ôn tập và 1 bài kiểm tra cuối khóa. Bài học dùng đúng định dạng 4 bước của lộ trình.
- **Ch1 Âm:**
  - 1 lam-quen-bang-ipa (IPA là gì, cách đọc ký hiệu trong từ điển)
  - 2 nguyen-am-ngan-va-dai (/ɪ/–/iː/, /ʊ/–/uː/, /æ/–/e/, /ʌ/–/ɑː/, /ɒ/–/ɔː/, /ə/–/ɜː/)
  - 3 nguyen-am-doi (8 nguyên âm đôi)
  - 4 phu-am-huu-thanh-vo-thanh (các cặp p/b, t/d, k/g, f/v, s/z, ʃ/ʒ, tʃ/dʒ, cùng /θ/ /ð/)
- **Ch2 Âm cuối, trọng âm và nhịp điệu:**
  - 5 am-cuoi (phụ âm cuối, cụm phụ âm)
  - 6 duoi-s-va-ed (/s/ /z/ /ɪz/ và /t/ /d/ /ɪd/)
  - 7 trong-am-tu (quy tắc trọng âm, âm yếu /ə/)
  - 8 nhan-cau-noi-am-ngu-dieu (nhấn câu, nối âm, lên xuống giọng)

## 3. Bài kiểm tra cuối khóa
`buildFinalTest(modules)` lấy 5 câu mỗi chương. Các câu được chọn khác với câu đã dùng trong bài ôn tập chương khi có thể, và phủ đủ 4 dạng bài tập. Bài có slug `kiem-tra-cuoi-khoa`, `final: true`, và nằm trong một "chương" cuối riêng tên "Kiểm tra cuối khóa". Chứng chỉ chỉ cấp khi bài này đạt từ 70% trở lên (`FINAL_PASS = 70`). Nếu chưa đạt, màn hình kết thúc hiện điểm và nút "Làm lại bài kiểm tra"; trang chứng chỉ cũng báo cần đạt 70%.

## 4. Rà soát sư phạm (mỗi cấp một chuyên gia)
- **Chuẩn CEFR:** đối chiếu các "can-do" của cấp. Khi thiếu thì bổ sung vào bài phù hợp nhất (không thêm bài mới).
- **Thứ tự kiến thức:** không dùng ngữ pháp chưa học; các câu dẫn chiếu kiểu "như bạn đã học ở bài…" phải đúng với thứ tự bài mới.
- **Bài tập bám bài giảng:** mỗi câu bài tập kiểm tra đúng điều đã được dạy.
- **Giọng thầy cô:** thống nhất trong khối `teacher`, thầy cô xưng "tôi" và gọi người học là "các bạn".
- **Ràng buộc:** giữ nguyên mọi điều kiện của test định dạng.
