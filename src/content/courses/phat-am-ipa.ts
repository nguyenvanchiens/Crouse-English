import { correct, fill, listen, mc, reorder } from "../builders";
import lamQuenBangIpa from "../lessons/phat-am/lam-quen-bang-ipa";
import nguyenAmNganVaDai from "../lessons/phat-am/nguyen-am-ngan-va-dai";
import nguyenAmDoi from "../lessons/phat-am/nguyen-am-doi";
import phuAmHuuThanhVoThanh from "../lessons/phat-am/phu-am-huu-thanh-vo-thanh";
import amCuoi from "../lessons/phat-am/am-cuoi";
import duoiSVaEd from "../lessons/phat-am/duoi-s-va-ed";
import trongAmTu from "../lessons/phat-am/trong-am-tu";
import nhanCauNoiAmNguDieu from "../lessons/phat-am/nhan-cau-noi-am-ngu-dieu";
import nhungAmNguoiVietHayLan from "../lessons/phat-am/nhung-am-nguoi-viet-hay-lan";
import noiAmVaGiamAm from "../lessons/phat-am/noi-am-va-giam-am";
import { FINAL_EXTRA_PHAT_AM_IPA } from "../banks/final-phat-am-ipa";
import { chapter, finalBank } from "../review";
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
    "Sửa những âm người Việt hay lẫn: l và n, r, ch và sh, w và v, cụm phụ âm đầu",
    "Phát âm rõ âm cuối, đuôi -s và -ed",
    "Nhấn đúng trọng âm từ, trọng âm câu và lên xuống giọng đúng chỗ",
    "Nối âm, đọc dạng yếu và nghe ra tiếng Anh nói nhanh",
  ],
  audience: [
    "Người mới bắt đầu muốn phát âm đúng ngay từ đầu",
    "Người đã học lâu nhưng nói người nước ngoài khó nghe",
  ],
  teacher: {
    name: "Cô Thu Hà",
    initials: "TH",
    bio: "Người dẫn dắt khóa Bước 0. Chú trọng cách đặt lưỡi, môi cho từng âm và những âm người Việt hay đọc sai.",
  },
  faqs: [
    { q: "Có bắt buộc học khóa này trước A1 không?", a: "Không bắt buộc, nhưng rất nên. Phát âm đúng từ đầu sẽ tiết kiệm cho bạn rất nhiều thời gian sửa sau này." },
    { q: "Học xong khóa này thì học gì?", a: "Bạn vào thẳng khóa A1: Nền tảng. Trong suốt lộ trình, bạn có thể mở lại bảng IPA bất cứ lúc nào." },
  ],
  status: "open",
  finalTest: finalBank(
    [
      // chương 1: bảng IPA, nguyên âm ngắn, dài, nguyên âm đôi, phụ âm, những âm người Việt hay lẫn
      mc("pa-f01", "Trong phiên âm /ˈteɪ.bəl/ của từ table, dấu ˈ cho biết điều gì?", ["Âm tiết ngay sau nó được nhấn mạnh", "Nguyên âm đứng trước nó được kéo dài", "Chỗ tách giữa hai âm tiết", "Âm cuối của từ không đọc"], 0, "Dấu ˈ đặt trước âm tiết được nhấn: TA-ble. Dấu ː mới là dấu kéo dài, dấu chấm là chỗ tách âm tiết."),
      listen("pa-f02", "seat", ["sit", "seat", "set"], 1, "Seat /siːt/ có /iː/ dài, môi căng như cười. Sit /sɪt/ có /ɪ/ ngắn, set /set/ có /e/."),
      fill("pa-f03", "I live in a big ___ near the river. (ngôi nhà, có nguyên âm đôi /aʊ/)", ["house"], "House /haʊs/: mở miệng cho /a/ rồi trượt sang /ʊ/, cuối từ xì rõ /s/."),
      reorder("pa-f04", "These three things are very cheap.", "These /ð/ có rung, three và things /θ/ chỉ có hơi, very /v/ răng trên chạm môi dưới, cheap /tʃ/ bật hơi."),
      correct("pa-f05", "Ten sheep are eating glass on the hill.", "Ten sheep are eating grass on the hill.", "Cỏ là grass /ɡrɑːs/, cụm đầu /ɡr/ với /r/ môi tròn, lưỡi không chạm. Glass /ɡlɑːs/ (thủy tinh, cái cốc) có /l/. Đọc lẫn /r/ và /l/ trong cụm phụ âm là đổi cả nghĩa."),
      // chương 2: âm cuối, đuôi -s và -ed, trọng âm, ngữ điệu, nối âm
      mc("pa-f06", "Đuôi -ed trong “stopped” đọc là gì?", ["/d/", "/ɪd/", "/t/"], 2, "Stop tận cùng bằng /p/ vô thanh nên -ed đọc /t/: stopped /stɒpt/, chỉ một âm tiết."),
      listen("pa-f07", "She fixes old bikes.", ["Cô ấy mua xe đạp cũ.", "Cô ấy sửa xe đạp cũ.", "Cô ấy bán xe đạp cũ."], 1, "Fixes /ˈfɪk.sɪz/ có hai âm tiết, nghĩa là sửa. Bikes kết thúc bằng /ks/."),
      fill("pa-f08", "Excuse me, where is the ___? I have a room there. (khách sạn, nhấn âm thứ hai)", ["hotel"], "Hotel /həʊˈtel/ nhấn âm thứ hai: ho-TEL, và nhớ âm /l/ ở cuối."),
      reorder("pa-f09", "My father washes his old car.", "Washes /ˈwɒʃ.ɪz/ có hai âm tiết vì wash tận cùng bằng /ʃ/. Nhấn FAther, WASHes, OLD, CAR; his đọc nhẹ."),
      correct("pa-f10", "The word fixed has two syllables.", ["The word fixed has one syllable.", "The word fixed has 1 syllable."], "Fix tận cùng bằng /s/ (chữ x đọc /ks/), một âm vô thanh, nên -ed đọc /t/: fixed /fɪkst/, chỉ một âm tiết. -ed chỉ thành âm tiết riêng sau /t/ và /d/."),
    ],
    FINAL_EXTRA_PHAT_AM_IPA,
  ),
  modules: [
    chapter(1, "Các âm của tiếng Anh", [lamQuenBangIpa, nguyenAmNganVaDai, nguyenAmDoi, phuAmHuuThanhVoThanh, nhungAmNguoiVietHayLan]),
    chapter(2, "Âm cuối, trọng âm, ngữ điệu và nối âm", [amCuoi, duoiSVaEd, trongAmTu, nhanCauNoiAmNguDieu, noiAmVaGiamAm]),
  ],
};
