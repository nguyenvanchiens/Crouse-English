import lamQuenBangIpa from "../lessons/phat-am/lam-quen-bang-ipa";
import nguyenAmNganVaDai from "../lessons/phat-am/nguyen-am-ngan-va-dai";
import nguyenAmDoi from "../lessons/phat-am/nguyen-am-doi";
import phuAmHuuThanhVoThanh from "../lessons/phat-am/phu-am-huu-thanh-vo-thanh";
import amCuoi from "../lessons/phat-am/am-cuoi";
import duoiSVaEd from "../lessons/phat-am/duoi-s-va-ed";
import trongAmTu from "../lessons/phat-am/trong-am-tu";
import nhanCauNoiAmNguDieu from "../lessons/phat-am/nhan-cau-noi-am-ngu-dieu";
import { chapter } from "../review";
import type { Course } from "../types";

export const phatAmIpa: Course = {
  slug: "phat-am-ipa",
  title: "Bước 0: Phát âm chuẩn với IPA",
  level: "A1",
  goal: "phat-am",
  summary: "Học bảng phiên âm IPA và cách đặt lưỡi, môi cho từng âm, để tự đọc đúng mọi từ mới trước khi vào A1.",
  outcomes: [
    "Đọc được phiên âm IPA trong từ điển",
    "Phân biệt nguyên âm ngắn, dài và nguyên âm đôi",
    "Phát âm rõ âm cuối, đuôi -s và -ed",
    "Nhấn đúng trọng âm từ và nói có nhịp điệu",
  ],
  audience: [
    "Người mới bắt đầu muốn phát âm đúng ngay từ đầu",
    "Người đã học lâu nhưng nói người nước ngoài khó nghe",
  ],
  teacher: {
    name: "Cô Thu Hà",
    initials: "TH",
    bio: "Chuyên gia ngữ âm, nhiều năm luyện phát âm cho người Việt từ học sinh đến người đi làm.",
  },
  durationWeeks: 4,
  rating: 4.9,
  reviews: [
    { name: "Hải Yến", role: "Nhân viên văn phòng, Hà Nội", quote: "Học xong bảng IPA mình mới biết bao năm nay mình nuốt hết âm cuối. Giờ tra từ điển là tự đọc được." },
    { name: "Văn Toàn", role: "Kỹ sư, Bình Dương", quote: "Bài đuôi -ed và trọng âm giúp đồng nghiệp nước ngoài hiểu mình ngay từ lần nói đầu tiên." },
  ],
  faqs: [
    { q: "Có bắt buộc học khóa này trước A1 không?", a: "Không bắt buộc, nhưng rất nên. Phát âm đúng từ đầu sẽ tiết kiệm cho bạn rất nhiều thời gian sửa sau này." },
    { q: "Học xong khóa này thì học gì?", a: "Bạn vào thẳng khóa A1: Nền tảng. Trong suốt lộ trình, bạn có thể mở lại bảng IPA bất cứ lúc nào." },
  ],
  status: "open",
  modules: [
    chapter(1, "Các âm của tiếng Anh", [lamQuenBangIpa, nguyenAmNganVaDai, nguyenAmDoi, phuAmHuuThanhVoThanh]),
    chapter(2, "Âm cuối, trọng âm và nhịp điệu", [amCuoi, duoiSVaEd, trongAmTu, nhanCauNoiAmNguDieu]),
  ],
};
