import { correct, fill, listen, mc, reorder } from "../builders";
import nKeLaiMotChuyen from "../lessons/b1/ke-lai-mot-chuyen";
import nDaDuocBaoLau from "../lessons/b1/da-duoc-bao-lau";
import nQuaKhuHoanThanh from "../lessons/b1/qua-khu-hoan-thanh";
import nWouldVaUsedTo from "../lessons/b1/would-va-used-to";
import nHienTaiHoanThanhTiepDien from "../lessons/b1/hien-tai-hoan-thanh-tiep-dien";
import nTuongLaiTiepDienHoanThanh from "../lessons/b1/tuong-lai-tiep-dien-hoan-thanh";
import nDongTuTheoSau from "../lessons/b1/dong-tu-theo-sau";
import nQuyDinhVaMucDich from "../lessons/b1/quy-dinh-va-muc-dich";
import nSuyDoanHienTai from "../lessons/b1/suy-doan-hien-tai";
import nNeuThi from "../lessons/b1/neu-thi";
import nCongViecVaPhongVan from "../lessons/b1/cong-viec-va-phong-van";
import nBayToYKien from "../lessons/b1/bay-to-y-kien";
import nCauHoiDuoi from "../lessons/b1/cau-hoi-duoi";
import nCauHoiGianTiep from "../lessons/b1/cau-hoi-gian-tiep";
import nCauTuongThuat from "../lessons/b1/cau-tuong-thuat";
import nTinTucVaSuViec from "../lessons/b1/tin-tuc-va-su-viec";
import nBiDongMoiThi from "../lessons/b1/bi-dong-moi-thi";
import nMenhDeQuanHe from "../lessons/b1/menh-de-quan-he";
import nSoSanhNangCao from "../lessons/b1/so-sanh-nang-cao";
import nCumDongTuThongDung from "../lessons/b1/cum-dong-tu-thong-dung";
import { FINAL_EXTRA_TIENG_ANH_B1 } from "../banks/final-tieng-anh-b1";
import { chapter, finalBank } from "../review";
import type { Course } from "../types";

export const tiengAnhB1: Course = {
  slug: "tieng-anh-b1",
  title: "Tiếng Anh B1: Tự tin trò chuyện",
  level: "B1",
  goal: "lo-trinh",
  summary: "Cho người đã giao tiếp cơ bản: kể chuyện mạch lạc, nói về kinh nghiệm, quy định, giả định và ước muốn, kể lại lời người khác, đọc hiểu tin tức và bày tỏ quan điểm của mình.",
  outcomes: [
    "Kể lại một câu chuyện hoặc trải nghiệm theo trình tự rõ ràng, dùng đúng các thì quá khứ và hoàn thành",
    "Nói về những việc đã làm được bao lâu, kế hoạch tương lai và điều có thể xảy ra",
    "Nói về quy định, việc bắt buộc và mục đích; đưa ra lời khuyên, suy đoán, giả định và điều ước với wish",
    "Kể lại lời người khác bằng câu tường thuật và hỏi thông tin một cách lịch sự",
    "Mô tả đội nhóm với each, every, both, neither, few; nêu ý kiến, đồng ý và phản đối một cách lịch sự",
    "Đọc hiểu bản tin và bài viết ngắn dùng câu bị động, mệnh đề quan hệ và cụm động từ",
  ],
  audience: [
    "Người đã học xong A2 hoặc đã nói được những câu giao tiếp hằng ngày",
    "Người đi làm cần tự tin trò chuyện, phỏng vấn và thảo luận bằng tiếng Anh",
  ],
  teacher: {
    name: "Thầy Quang Huy",
    initials: "QH",
    bio: "Người dẫn dắt khóa B1. Chú trọng luyện phản xạ nói và kể chuyện bằng tiếng Anh.",
  },
  faqs: [
    { q: "Làm sao biết mình đủ trình độ để học B1?", a: "Nếu bạn đã dùng được thì hiện tại, quá khứ đơn và nói được những câu giao tiếp hằng ngày, bạn có thể học B1. Bạn cũng có thể làm bài kiểm tra trình độ miễn phí để chắc chắn." },
    { q: "Học xong B1 thì học gì tiếp?", a: "Bạn học tiếp khóa B2: Tiếng Anh công việc, tập trung vào viết email, họp, thuyết trình và đàm phán. Mỗi cấp có chứng chỉ riêng." },
  ],
  status: "open",
  modules: [
    chapter(1, "Kể chuyện và trải nghiệm", [nKeLaiMotChuyen, nDaDuocBaoLau, nQuaKhuHoanThanh, nWouldVaUsedTo, nHienTaiHoanThanhTiepDien]),
    chapter(2, "Kế hoạch, quy định, suy đoán và giả định", [nTuongLaiTiepDienHoanThanh, nDongTuTheoSau, nQuyDinhVaMucDich, nSuyDoanHienTai, nNeuThi]),
    chapter(3, "Công việc và giao tiếp", [nCongViecVaPhongVan, nBayToYKien, nCauHoiDuoi, nCauHoiGianTiep, nCauTuongThuat]),
    chapter(4, "Tin tức, mô tả và đời sống", [nTinTucVaSuViec, nBiDongMoiThi, nMenhDeQuanHe, nSoSanhNangCao, nCumDongTuThongDung]),
  ],
  finalTest: finalBank(
    [
      // chapter 1: past continuous / past simple, for / since, past perfect, used to / would, present perfect continuous
      mc("b1-f01", "When I got to the cinema, the film ___, so I missed the beginning.", ["started", "had already started", "has started", "is starting"], 1, "Phim bắt đầu trước khi tôi đến (việc xảy ra trước một mốc quá khứ): had + V3."),
      fill("b1-f02", "I've known my best friend ___ we were in primary school.", ["since"], "We were in primary school là một mốc bắt đầu, nên dùng since."),
      reorder("b1-f03", "How long has your brother been learning the piano?", "How long + has + chủ ngữ + been + V-ing: hỏi việc kéo dài liên tục đến bây giờ."),
      listen("b1-f04", "I was having a shower when my boss called.", ["Tôi đang tắm thì sếp gọi.", "Tôi gọi cho sếp sau khi tắm xong.", "Sếp gọi trước khi tôi đi tắm.", "Tôi đã tắm xong khi sếp gọi."], 0, "Was having: việc đang diễn ra; called: việc ngắn chen vào."),
      correct("b1-f05", "I am living in this flat since 2019.", ["I have lived in this flat since 2019.", "I have been living in this flat since 2019."], "Việc bắt đầu từ năm 2019 và vẫn còn đến bây giờ: have lived hoặc have been living, không dùng hiện tại tiếp diễn với since."),
      // chapter 2: future continuous / perfect, verb patterns, obligation / purpose, deduction, conditionals and wish
      mc("b1-f06", "Tom's car isn't outside, and his lights are off. He ___ be at home.", ["must", "can't", "mustn't", "has to"], 1, "Mọi dấu hiệu cho thấy anh ấy không ở nhà: can't + V (không thể nào). Mustn't nghĩa là cấm."),
      fill("b1-f07", "Don't call me at nine tomorrow. I ___ be flying to Tokyo then. (sẽ đang)", ["will", "'ll"], "Việc sẽ đang diễn ra tại một thời điểm trong tương lai: will be + V-ing."),
      reorder("b1-f08", "I wish I had a bigger kitchen.", "Ước về hiện tại: wish + quá khứ đơn (had). Thực tế là căn bếp bây giờ nhỏ."),
      listen("b1-f09", "If I had a car, I would drive you to the airport.", ["Nếu có ô tô, tôi sẽ chở bạn ra sân bay, nhưng tôi không có.", "Tôi sẽ chở bạn ra sân bay bằng ô tô của tôi.", "Nếu bạn có ô tô, hãy chở tôi ra sân bay.", "Tôi đã chở bạn ra sân bay bằng ô tô."], 0, "Câu điều kiện loại 2: If + quá khứ đơn, would + V, nói về chuyện không có thật ở hiện tại."),
      correct("b1-f10", "We mustn't wear a suit on Fridays, so most of us come in jeans.", ["We don't have to wear a suit on Fridays, so most of us come in jeans.", "We don't need to wear a suit on Fridays, so most of us come in jeans.", "We needn't wear a suit on Fridays, so most of us come in jeans."], "Mặc vest vào thứ Sáu không bị cấm, chỉ là không bắt buộc, nên dùng don't have to (don't need to, needn't). Mustn't là cấm, trái với vế sau."),
      // chapter 3: quantifiers, opinions and although / however, question tags, indirect questions, reported speech
      mc("b1-f11", "Excuse me, do you know what time ___?", ["does the bank open", "the bank opens", "opens the bank", "the bank does open"], 1, "Câu hỏi gián tiếp: sau what time là trật tự câu kể, bỏ does và thêm -s: the bank opens."),
      fill("b1-f12", "___ of my two sisters lives in Hanoi. They both live in Hue. (không ai trong hai người)", ["Neither"], "Neither of + danh từ số nhiều: không ai trong hai người. Câu sau (They both live in Hue) cho biết cả hai đều không sống ở Hà Nội."),
      reorder("b1-f13", "He told me that he was moving to Hue.", "Told + người nghe (me) + that + câu đã lùi thì (was moving)."),
      listen("b1-f14", "Both candidates were good, but neither of them could start in May.", ["Cả hai ứng viên đều tốt, nhưng không ai bắt đầu làm được vào tháng Năm.", "Một trong hai ứng viên có thể bắt đầu làm vào tháng Năm.", "Cả hai ứng viên đều không tốt và không ai muốn làm.", "Chỉ một ứng viên tốt, nhưng người đó không đến được vào tháng Năm."], 0, "Both: cả hai; neither of them: không ai trong hai người."),
      correct("b1-f15", "Although the hotel was cheap, but the rooms were clean.", ["Although the hotel was cheap, the rooms were clean.", "The hotel was cheap, but the rooms were clean."], "Although và but không dùng cùng nhau trong một câu."),
      // chapter 4: passive, have something done, relative clauses, comparisons, phrasal verbs
      mc("b1-f16", "The Eiffel Tower ___ between 1887 and 1889.", ["built", "was built", "has built", "is built"], 1, "Tháp được xây từ năm 1887 đến 1889 (quá khứ, bị động): was + V3."),
      fill("b1-f17", "That's the woman ___ son plays for the national team.", ["whose"], "Whose + danh từ chỉ sở hữu: người phụ nữ mà con trai cô ấy chơi cho đội tuyển."),
      reorder("b1-f18", "My sister earns twice as much as I do.", "Gấp đôi: twice as + much + as. Cuối câu dùng I do để khỏi lặp lại động từ earn."),
      listen("b1-f19", "Could you look after my cat while I'm away?", ["Bạn trông con mèo giúp tôi khi tôi đi vắng được không?", "Bạn có thấy con mèo của tôi đâu không?", "Bạn tìm con mèo giúp tôi được không?", "Bạn có muốn nuôi một con mèo không?"], 0, "Look after: trông nom, chăm sóc. Tìm là look for."),
      correct("b1-f20", "The man who he lives next door is a doctor.", ["The man who lives next door is a doctor.", "The man that lives next door is a doctor.", "The man living next door is a doctor."], "Who đã thay cho chủ ngữ, nên không lặp lại he."),
    ],
    FINAL_EXTRA_TIENG_ANH_B1,
  ),
};
