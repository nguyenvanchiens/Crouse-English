import { ex, fill, lesson, listen, mc, mistake, p, reorder, say, table, teacher, tip, word } from "../builders";
import nQuaKhuHoanThanh from "../lessons/b1/qua-khu-hoan-thanh";
import nHienTaiHoanThanhTiepDien from "../lessons/b1/hien-tai-hoan-thanh-tiep-dien";
import nSuyDoanHienTai from "../lessons/b1/suy-doan-hien-tai";
import nDongTuTheoSau from "../lessons/b1/dong-tu-theo-sau";
import nMenhDeQuanHe from "../lessons/b1/menh-de-quan-he";
import nCauHoiGianTiep from "../lessons/b1/cau-hoi-gian-tiep";
import nSoSanhNangCao from "../lessons/b1/so-sanh-nang-cao";
import nBiDongNangCao from "../lessons/b1/bi-dong-nang-cao";
import nTuongLaiNangCao from "../lessons/b1/tuong-lai-nang-cao";
import nCumDongTuThongDung from "../lessons/b1/cum-dong-tu-thong-dung";
import { chapter } from "../review";
import type { Course } from "../types";

const keLaiMotChuyen = lesson({
  slug: "ke-lai-mot-chuyen",
  title: "Kể lại một chuyện đã xảy ra",
  minutes: 20,
  lecture: {
    title: "Quá khứ tiếp diễn và quá khứ đơn",
    blocks: [
      p("Sáng thứ Hai, đồng nghiệp người nước ngoài hỏi bạn: **What happened at the weekend?** Bạn có cả một câu chuyện hay: đang chạy xe trên đèo thì trời đổ mưa, xe hỏng, rồi được một bác nông dân giúp. Nhưng nếu chỉ nói được từng câu rời rạc ở một thì, câu chuyện sẽ mất hết cái hay. Bài này giúp bạn kể chuyện có **bối cảnh** và có **diễn biến**."),
      p("Khi kể chuyện, tiếng Anh cần hai thì phối hợp với nhau: **quá khứ tiếp diễn** (was/were + V-ing) để dựng bối cảnh, tức là việc đang diễn ra, và **quá khứ đơn** cho hành động ngắn chen vào. Tiếng Việt chỉ cần thêm chữ “đang” hoặc không cần gì, nên người Việt hay dùng một thì cho cả câu."),
      table(
        ["Thì", "Cấu trúc", "Dùng khi", "Ví dụ"],
        ["Quá khứ tiếp diễn", "was / were + V-ing", "hành động đang diễn ra, làm nền cho câu chuyện", "I was walking home."],
        ["Quá khứ đơn", "V-ed hoặc động từ cột 2", "hành động ngắn, xảy ra rồi kết thúc", "It started to rain."],
      ),
      table(
        ["Dạng", "I / he / she / it", "you / we / they"],
        ["Khẳng định", "She was working.", "They were working."],
        ["Phủ định", "She wasn't working.", "They weren't working."],
        ["Nghi vấn", "Was she working?", "Were they working?"],
      ),
      p("**While** (trong lúc) thường đi với quá khứ tiếp diễn. **When** (khi, thì) thường đi với hành động ngắn ở quá khứ đơn."),
      ex("I was cooking dinner when the phone rang.", "Tôi đang nấu bữa tối thì điện thoại reo."),
      ex("While we were waiting for the bus, it started to rain.", "Trong lúc chúng tôi đang đợi xe buýt thì trời bắt đầu mưa.", "Mệnh đề while đứng đầu câu thì có dấu phẩy ngăn cách."),
      ex("At nine o'clock last night, I was watching a football match.", "Lúc chín giờ tối qua, tôi đang xem một trận bóng đá.", "Có một thời điểm cụ thể trong quá khứ và việc đang dở dang lúc đó, nên dùng quá khứ tiếp diễn dù không có hành động nào chen vào."),
      p("Để câu chuyện mạch lạc, hãy dùng từ nối chỉ trình tự: **first** (đầu tiên), **then / after that** (sau đó), **suddenly** (bỗng nhiên), **in the end** (cuối cùng)."),
      ex("First, we got lost. Then my phone died. In the end, a kind stranger helped us.", "Đầu tiên, chúng tôi bị lạc. Sau đó điện thoại tôi hết pin. Cuối cùng, một người lạ tốt bụng đã giúp chúng tôi.", "Các việc nối tiếp nhau, việc này xong mới đến việc kia, nên đều dùng quá khứ đơn."),
      tip("**In the end** nghĩa là “cuối cùng, sau nhiều chuyện”. Còn **at the end of** phải có danh từ theo sau: at the end of the film (ở cuối bộ phim). Mẹo phát âm: đọc rõ âm cuối **-ed** và **-ing**, vì chính những âm cuối này giúp người nghe phân biệt đâu là cảnh nền, đâu là sự việc chen vào."),
      mistake("I was see an accident yesterday.", "I saw an accident yesterday.", "Tiếng Việt chỉ đặt “đã” hoặc “đang” trước động từ, nên người học tưởng was cũng là một chữ đặt trước động từ như vậy. Was phải đi với V-ing; còn hành động ngắn, đã kết thúc thì chỉ cần quá khứ đơn: saw."),
      mistake("While I walked home, I was seeing an old friend.", "While I was walking home, I saw an old friend.", "Việc kéo dài làm nền dùng was walking, việc ngắn chen vào dùng saw. Tiếng Việt không phân biệt hai loại việc này bằng hình thức động từ nên hay bị đảo ngược. Động từ see cũng hầu như không dùng ở dạng tiếp diễn."),
      mistake("Yesterday I go to the market and meet my old teacher.", "Yesterday I went to the market and met my old teacher.", "Tiếng Việt không chia động từ, chữ “hôm qua” đã đủ báo thời gian. Tiếng Anh thì mọi động từ trong câu chuyện quá khứ đều phải chia: went, met."),
      teacher("Sau năm mươi năm dạy, tôi thấy học trò kể chuyện hay nhất không phải người thuộc nhiều từ, mà là người biết **dựng cảnh trước rồi mới tung sự việc**. Mỗi tối trước khi ngủ, các em hãy kể lại một chuyện trong ngày bằng ba câu: một câu was/were + V-ing làm nền, một câu có when chen vào, một câu in the end để kết. Làm đều một tháng, các em sẽ thấy miệng tự bật ra đúng thì mà không cần nghĩ."),
    ],
  },
  words: [
    word("suddenly", "/ˈsʌd.ən.li/", "bỗng nhiên, đột nhiên", "Suddenly, the lights went out.", "sud|den|ly", 0),
    word("accident", "/ˈæk.sɪ.dənt/", "tai nạn", "I saw an accident on my way to work.", "ac|ci|dent", 0, "Chữ cc đọc là /ks/, không đọc là /k/."),
    word("happen", "/ˈhæp.ən/", "xảy ra", "What happened after that?", "hap|pen", 0),
    word("journey", "/ˈdʒɜː.ni/", "chuyến đi, hành trình", "The journey took six hours.", "jour|ney", 0),
    word("realise", "/ˈrɪə.laɪz/", "nhận ra", "I suddenly realised that I had left my bag on the bus.", "rea|lise", 0),
    word("eventually", "/ɪˈven.tʃu.ə.li/", "rốt cuộc, sau cùng", "We eventually found the hotel.", "e|ven|tu|al|ly", 1, "Không có nghĩa là “có thể”. Eventually là “sau cùng, sau một thời gian dài”."),
    word("unexpected", "/ˌʌn.ɪkˈspek.tɪd/", "bất ngờ, không lường trước", "We had an unexpected visitor last night.", "un|ex|pec|ted", 2),
    word("memory", "/ˈmem.ər.i/", "kỷ niệm, ký ức", "That trip is my favourite memory.", "mem|o|ry", 0),
  ],
  exercises: [
    mc("b1-1-1", "I ___ TV when you called me.", ["watched", "was watching", "am watching", "were watching"], 1, "Việc đang diễn ra thì bị chen ngang nên dùng quá khứ tiếp diễn. I đi với was."),
    mc("b1-1-2", "While she was driving to work, she ___ an accident.", ["was seeing", "sees", "saw"], 2, "Hành động ngắn chen vào dùng quá khứ đơn: saw."),
    fill("b1-1-3", "They ___ playing football when it started to rain.", ["were"], "They đi với were trong quá khứ tiếp diễn."),
    fill("b1-1-4", "We waited for two hours. ___, the bus arrived. (cuối cùng)", ["In the end", "Finally", "Eventually", "At last"], "Sau một thời gian dài chờ đợi, ta dùng in the end, finally, eventually hoặc at last."),
    reorder("b1-1-5", "Who were you waiting for?", "Câu hỏi ở quá khứ tiếp diễn: Who + were + you + V-ing, giới từ for đứng cuối câu."),
    reorder("b1-1-6", "Someone was knocking on the door.", "Câu kể ở quá khứ tiếp diễn: chủ ngữ + was + V-ing. Someone là số ít nên đi với was."),
    listen("b1-1-7", "What were you doing at eight last night?", ["Tối nay lúc tám giờ bạn định làm gì?", "Tối qua lúc tám giờ bạn đang làm gì?", "Tối qua bạn đi ngủ lúc mấy giờ?"], 1, "Were you doing: hỏi việc đang diễn ra tại một thời điểm trong quá khứ."),
    listen("b1-1-8", "At first I was nervous, but in the end I enjoyed the trip.", ["Tôi luôn thấy hồi hộp mỗi khi đi du lịch.", "Cuối chuyến đi tôi lại thấy lo lắng.", "Lúc đầu tôi hồi hộp, nhưng cuối cùng tôi rất thích chuyến đi."], 2),
  ],
  speaking: [
    say("I was walking home when I saw an old friend.", "Tôi đang đi bộ về nhà thì gặp một người bạn cũ."),
    say("While we were having dinner, the lights suddenly went out.", "Trong lúc chúng tôi đang ăn tối thì bỗng nhiên mất điện."),
    say("In the end, we laughed about it.", "Cuối cùng, chúng tôi lại cười về chuyện đó."),
  ],
});

const daDuocBaoLau = lesson({
  slug: "da-duoc-bao-lau",
  title: "Đã… được bao lâu rồi",
  minutes: 20,
  lecture: {
    title: "Hiện tại hoàn thành với for và since",
    blocks: [
      p("Bạn ngồi cà phê với một vị khách nước ngoài, và câu hỏi đầu tiên gần như chắc chắn là: **How long have you lived here?** hoặc **How long have you worked there?** Đây là những câu hỏi làm quen quen thuộc nhất, nên trả lời trôi chảy là bạn đã ghi điểm ngay từ phút đầu."),
      p("Người Việt nói “Tôi sống ở Hà Nội được năm năm rồi” và rất dễ dịch thành “I live in Hanoi for five years”. Khi một việc bắt đầu trong quá khứ và **vẫn còn đến bây giờ**, tiếng Anh dùng **hiện tại hoàn thành**: have / has + V3."),
      table(
        ["Dạng", "I / you / we / they", "he / she / it"],
        ["Khẳng định", "I've worked here for two years.", "She's worked here for two years."],
        ["Phủ định", "I haven't seen him since June.", "He hasn't called since June."],
        ["Nghi vấn", "How long have you lived here?", "How long has she lived here?"],
      ),
      table(
        ["Từ", "Đi với", "Ví dụ"],
        ["for", "một khoảng thời gian", "for three years, for a long time, for ages"],
        ["since", "một mốc thời gian", "since 2020, since Monday, since I was a child"],
      ),
      ex("I've lived in Da Nang for five years.", "Tôi sống ở Đà Nẵng được năm năm rồi.", "Đến giờ vẫn đang sống ở đó."),
      ex("How long have you worked here?", "Bạn làm việc ở đây được bao lâu rồi?"),
      ex("She has known him since university.", "Cô ấy quen anh ấy từ hồi đại học.", "University ở đây là mốc bắt đầu (từ hồi học đại học), nên dùng since. Know không dùng ở dạng tiếp diễn, nên không nói has been knowing."),
      p("So với **quá khứ đơn**: khi có một thời điểm đã kết thúc như yesterday, last week, in 2019 hay three days ago, ta dùng quá khứ đơn. Hiện tại hoàn thành không đi với những từ này."),
      ex("I lived in Hue for two years.", "Tôi từng sống ở Huế hai năm.", "Quá khứ đơn: bây giờ tôi không còn sống ở Huế nữa."),
      tip("**Ago** luôn đi với quá khứ đơn. I moved here three years ago và I've lived here for three years có cùng ý, nhưng khác thì. Mẹo phát âm: đừng nuốt âm **'ve** và **'s**. Nếu bỏ mất, I've lived nghe thành I lived, và người nghe hiểu là bạn không còn sống ở đó nữa."),
      mistake("I am working here since 2021.", "I have worked here since 2021.", "Tiếng Việt chỉ cần thêm “từ năm 2021 đến giờ”, động từ không đổi hình thức, nên người học giữ nguyên thì hiện tại. Tiếng Anh thì khác: việc bắt đầu từ một mốc trong quá khứ và kéo dài đến bây giờ phải dùng hiện tại hoàn thành."),
      mistake("I have seen that film last week.", "I saw that film last week.", "Người Việt thấy chữ “đã” là nghĩ ngay đến have + V3. Nhưng có mốc thời gian đã kết thúc (last week) thì phải dùng quá khứ đơn."),
      mistake("I have lived here since five years.", "I have lived here for five years.", "Tiếng Việt nói “từ năm năm nay”, chữ “từ” khiến người học chọn since. Five years là một khoảng thời gian, nên dùng for."),
      teacher("Tôi hay bảo học trò: trước khi chọn for hay since, hãy tự hỏi **“Cái này có ghi được lên lịch không?”** Nếu khoanh được trên tờ lịch như thứ Hai, năm 2020, hôm sinh nhật, thì dùng since. Nếu phải đếm như ba ngày, năm năm, rất lâu, thì dùng for. Và mỗi lần gặp người mới, các em hãy tập hỏi một câu How long have you…? Hỏi được thì mới nghe được câu trả lời."),
    ],
  },
  words: [
    word("experience", "/ɪkˈspɪə.ri.əns/", "kinh nghiệm, trải nghiệm", "Living abroad was a great experience.", "ex|pe|ri|ence", 1),
    word("recently", "/ˈriː.sənt.li/", "gần đây", "I've recently started a new job.", "re|cent|ly", 0),
    word("already", "/ɔːlˈred.i/", "đã, rồi", "I've already finished my report.", "al|rea|dy", 1, "Already thường đứng giữa have và V3."),
    word("colleague", "/ˈkɒl.iːɡ/", "đồng nghiệp", "I've known my colleague Mai since we started university.", "col|league", 0, "Trọng âm ở âm đầu, không đọc thành “cô-líg”."),
    word("neighbourhood", "/ˈneɪ.bə.hʊd/", "khu phố, khu dân cư", "How long have you lived in this neighbourhood?", "neigh|bour|hood", 0),
    word("improve", "/ɪmˈpruːv/", "cải thiện, tiến bộ", "My English has improved a lot this year.", "im|prove", 1),
    word("lately", "/ˈleɪt.li/", "dạo này, gần đây", "Have you seen Nam lately?", "late|ly", 0, "Lately không có nghĩa là “muộn”. Muộn là late."),
  ],
  exercises: [
    mc("b1-2-1", "I have lived here ___ 2018.", ["for", "since", "ago"], 1, "2018 là một mốc thời gian nên dùng since."),
    mc("b1-2-2", "We ___ each other for ten years, and we're still close friends.", ["know", "knew", "have known", "are knowing"], 2, "Quen nhau từ quá khứ đến giờ vẫn quen: hiện tại hoàn thành have known."),
    fill("b1-2-3", "She has worked at this company ___ six months.", ["for"], "Six months là một khoảng thời gian nên dùng for."),
    fill("b1-2-4", "I ___ to Japan in 2019. (go)", ["went"], "In 2019 là mốc thời gian đã kết thúc, nên dùng quá khứ đơn."),
    reorder("b1-2-5", "How long have you lived in this city?", "How long + have + you + V3: hỏi việc kéo dài bao lâu đến giờ."),
    reorder("b1-2-6", "I haven't seen him for ages.", "Phủ định của hiện tại hoàn thành: haven't + V3. For ages nghĩa là “lâu lắm rồi”, đứng cuối câu."),
    listen("b1-2-7", "I've been a nurse for twelve years.", ["Tôi từng làm y tá mười hai năm trước.", "Tôi muốn làm y tá trong mười hai năm tới.", "Tôi làm y tá được mười hai năm rồi."], 2, "I've been + for: đến bây giờ vẫn đang làm y tá."),
    listen("b1-2-8", "She hasn't called me since Monday.", ["Cô ấy đã gọi cho tôi hôm thứ Hai.", "Từ thứ Hai đến giờ cô ấy chưa gọi cho tôi.", "Cô ấy sẽ gọi cho tôi vào thứ Hai."], 1),
  ],
  speaking: [
    say("I've lived in Hanoi for seven years.", "Tôi sống ở Hà Nội được bảy năm rồi."),
    say("How long have you worked here?", "Bạn làm việc ở đây được bao lâu rồi?"),
    say("I haven't seen my best friend since last summer.", "Từ mùa hè năm ngoái đến giờ tôi chưa gặp bạn thân."),
  ],
});

const neuThi = lesson({
  slug: "neu-thi",
  title: "Nếu… thì…",
  minutes: 22,
  lecture: {
    title: "Câu điều kiện loại 1 và loại 2",
    blocks: [
      p("Bạn rủ đồng nghiệp người Úc cuối tuần đi Vũng Tàu, anh ấy hỏi: “Nhỡ trời mưa thì sao?” Một lúc sau cả nhóm lại mơ mộng: “Nếu trúng xổ số thì làm gì?” Hai câu nghe giống nhau trong tiếng Việt, nhưng tiếng Anh nói theo hai cách khác hẳn. Hiểu điều này, bạn vừa lên kế hoạch được, vừa đưa lời khuyên được."),
      p("Tiếng Việt dùng “nếu… thì…” cho mọi tình huống. Tiếng Anh tách ra hai loại: **loại 1** cho chuyện có thể xảy ra thật, **loại 2** cho chuyện không có thật hoặc khó xảy ra ở hiện tại."),
      table(
        ["Loại", "Mệnh đề if", "Mệnh đề chính", "Dùng khi"],
        ["Loại 1", "If + hiện tại đơn", "will + V", "chuyện có khả năng xảy ra"],
        ["Loại 2", "If + quá khứ đơn", "would + V", "chuyện không có thật, tưởng tượng"],
      ),
      p("Mệnh đề if có thể đứng đầu hoặc đứng sau. **Đứng đầu thì có dấu phẩy**, đứng sau thì không. Khi nói, will thường rút gọn thành **'ll**, would thành **'d**."),
      ex("If it rains tomorrow, we'll stay at home.", "Nếu mai trời mưa, chúng ta sẽ ở nhà."),
      ex("If I had more time, I would learn to play the guitar.", "Nếu có nhiều thời gian hơn, tôi sẽ học chơi đàn ghi-ta.", "Had là quá khứ về hình thức nhưng nói về hiện tại: thực tế là bây giờ tôi không có nhiều thời gian."),
      ex("I'd call her if I knew her number.", "Tôi sẽ gọi cho cô ấy nếu tôi biết số điện thoại.", "Mệnh đề if đứng sau nên không có dấu phẩy. Thực tế là tôi không biết số của cô ấy."),
      table(
        ["Câu", "Người nói nghĩ gì"],
        ["If I get the job, I'll move to Hanoi.", "Đã phỏng vấn, khả năng được nhận là có thật."],
        ["If I got the job, I'd move to Hanoi.", "Chưa nộp đơn hoặc thấy khó được nhận, chỉ đang tưởng tượng."],
      ),
      p("**Unless** nghĩa là “trừ khi”, tương đương if… not. Sau unless dùng câu khẳng định."),
      ex("You won't pass the exam unless you study harder.", "Bạn sẽ không đỗ kỳ thi trừ khi bạn học chăm hơn."),
      tip("Muốn khuyên ai đó, hãy dùng **If I were you, I would…** (Nếu tôi là bạn, tôi sẽ…). Trong câu điều kiện loại 2, văn viết chuẩn thường dùng **were** cho mọi chủ ngữ, kể cả I, he, she (văn nói hằng ngày có thể dùng was). Riêng cụm If I were you, các em nên luôn dùng were."),
      mistake("If it will rain, we will stay at home.", "If it rains, we will stay at home.", "Vì cả câu nói về ngày mai, người học nghĩ vế nào cũng phải có will. Nhưng trong câu điều kiện loại 1, mệnh đề if dùng hiện tại đơn để nói về tương lai; will chỉ nằm ở mệnh đề chính."),
      mistake("If I have a lot of money, I would buy a house.", "If I had a lot of money, I would buy a house.", "Tiếng Việt không có cách “lùi thì” để báo chuyện không có thật. Trong tiếng Anh, mệnh đề chính có would thì mệnh đề if phải lùi về quá khứ đơn."),
      mistake("Unless you don't hurry, you'll miss the train.", "Unless you hurry, you'll miss the train.", "Người Việt dịch “trừ khi bạn không nhanh lên” theo từng chữ. Unless đã mang nghĩa phủ định, không thêm don't."),
      teacher("Nhiều năm chấm bài, tôi thấy học trò sai câu điều kiện không phải vì không thuộc công thức, mà vì **không hỏi mình đang nghĩ gì**. Trước khi nói, hãy tự hỏi: “Chuyện này có thể xảy ra thật không?” Có thì dùng loại một, không thì lùi thì dùng loại hai. Mỗi tối, các em viết ba câu If I were you… để khuyên một người bạn. Lời khuyên có thật thì câu văn cũng nhớ lâu."),
    ],
  },
  words: [
    word("afford", "/əˈfɔːd/", "đủ tiền, đủ khả năng chi trả", "I can't afford a new car.", "af|ford", 1, "Thường đi với can hoặc can't."),
    word("decision", "/dɪˈsɪʒ.ən/", "quyết định", "If I were you, I'd think about that decision again.", "de|ci|sion", 1),
    word("possible", "/ˈpɒs.ə.bəl/", "có thể, khả thi", "If possible, please call me before noon.", "pos|si|ble", 0),
    word("advice", "/ədˈvaɪs/", "lời khuyên", "Can I give you some advice?", "ad|vice", 1, "Advice là danh từ không đếm được, không nói an advice. Động từ là advise, đọc với âm /z/."),
    word("lottery", "/ˈlɒt.ər.i/", "xổ số", "What would you do if you won the lottery?", "lot|te|ry", 0),
    word("abroad", "/əˈbrɔːd/", "ở nước ngoài, ra nước ngoài", "If I could, I would study abroad.", "a|broad", 1, "Không nói go to abroad, chỉ nói go abroad."),
    word("unless", "/ənˈles/", "trừ khi", "I won't go unless you come with me.", "un|less", 1),
  ],
  exercises: [
    mc("b1-3-1", "If she ___ the bus, she'll be late for work.", ["misses", "will miss", "missed"], 0, "Câu điều kiện loại 1: mệnh đề if dùng hiện tại đơn, không dùng will."),
    mc("b1-3-2", "If I ___ you, I would talk to the manager.", ["am", "was being", "were", "will be"], 2, "If I were you là cách khuyên quen thuộc, dùng were cho cả I."),
    fill("b1-3-3", "If I won the lottery, I ___ travel around the world.", ["would", "'d", "could", "might"], "Won ở quá khứ đơn nên mệnh đề chính dùng would + V (could hoặc might cũng đúng nếu muốn nói “có thể”)."),
    fill("b1-3-4", "We'll go to the beach tomorrow ___ it rains.", ["unless"], "Unless = if not: chúng ta sẽ đi biển trừ khi trời mưa."),
    reorder("b1-3-5", "What would you do with a million dollars?", "Would + V: hỏi về một tình huống tưởng tượng, không có thật."),
    reorder("b1-3-6", "I would buy a house near the sea.", "Mệnh đề chính của câu điều kiện loại 2: would + V."),
    listen("b1-3-7", "If I were you, I'd take the job.", ["Nếu bạn nhận việc, tôi sẽ rất vui.", "Nếu tôi là bạn, tôi sẽ nhận công việc đó.", "Tôi đã nhận công việc đó thay bạn."], 1, "If I were you, I'd…: lời khuyên."),
    listen("b1-3-8", "If we leave now, we'll catch the last train.", ["Dù đi bây giờ thì chúng ta cũng lỡ chuyến tàu cuối rồi.", "Chúng ta đã lỡ chuyến tàu cuối.", "Nếu đi bây giờ, chúng ta sẽ kịp chuyến tàu cuối."], 2),
  ],
  speaking: [
    say("If it rains tomorrow, I'll stay at home.", "Nếu mai trời mưa, tôi sẽ ở nhà."),
    say("If I had more time, I would learn to cook.", "Nếu có nhiều thời gian hơn, tôi sẽ học nấu ăn."),
    say("If I were you, I'd ask for help.", "Nếu tôi là bạn, tôi sẽ nhờ người giúp."),
  ],
});

const congViecVaPhongVan = lesson({
  slug: "cong-viec-va-phong-van",
  title: "Công việc và phỏng vấn",
  minutes: 22,
  lecture: {
    title: "Tính từ -ed và -ing, nói về kinh nghiệm",
    blocks: [
      p("Bạn được mời phỏng vấn ở một công ty nước ngoài. Người phỏng vấn mỉm cười: **Tell me about yourself** rồi hỏi tiếp **What are your strengths?** Đây là lúc bạn cần nói về cảm xúc, kinh nghiệm và điểm mạnh của mình một cách tự tin, và chỉ một lỗi nhỏ cũng có thể làm câu nói mang nghĩa ngược lại."),
      p("Lỗi người Việt hay gặp nhất là nhầm **-ed** và **-ing**: “I am boring” nghĩa là “Tôi là người nhàm chán”, chứ không phải “Tôi thấy chán”."),
      table(
        ["Đuôi", "Nghĩa", "Ví dụ"],
        ["-ed", "cảm xúc của người (tôi cảm thấy…)", "I'm interested in marketing."],
        ["-ing", "tính chất của sự việc hoặc người gây ra cảm xúc", "This job is interesting."],
      ),
      table(
        ["Người cảm thấy (-ed)", "Sự việc gây ra (-ing)", "Nghĩa"],
        ["bored", "boring", "chán / gây chán"],
        ["tired", "tiring", "mệt / gây mệt"],
        ["interested", "interesting", "quan tâm / thú vị"],
        ["excited", "exciting", "hào hứng / gây hào hứng"],
        ["disappointed", "disappointing", "thất vọng / gây thất vọng"],
      ),
      ex("I was very tired after the interview. It was a tiring day.", "Tôi rất mệt sau buổi phỏng vấn. Đó là một ngày mệt mỏi.", "Cùng một gốc tire: người thấy mệt thì dùng tired, còn cái ngày làm người ta mệt thì dùng tiring."),
      ex("I'm excited about this position.", "Tôi rất hào hứng với vị trí này."),
      p("Khi kể kinh nghiệm, dùng **hiện tại hoàn thành** cho kinh nghiệm tính đến bây giờ và **quá khứ đơn** cho công việc cũ đã kết thúc."),
      ex("I've worked in customer service for three years.", "Tôi đã làm dịch vụ khách hàng được ba năm.", "Đến bây giờ vẫn đang làm trong ngành này."),
      ex("I worked as a receptionist at a hotel from 2018 to 2020.", "Tôi làm lễ tân ở một khách sạn từ năm 2018 đến năm 2020.", "Công việc đã kết thúc, có mốc thời gian rõ ràng, nên dùng quá khứ đơn. Chú ý work as + nghề nghiệp."),
      ex("One of my strengths is that I work well under pressure.", "Một trong những điểm mạnh của tôi là làm việc tốt dưới áp lực.", "One of my + danh từ số nhiều (strengths), nhưng động từ là is vì chủ ngữ thật là one."),
      tip("Khi được hỏi về điểm mạnh, hãy nêu **một điểm mạnh kèm một ví dụ cụ thể**: I'm good at solving problems. For example, last year I… Nhà tuyển dụng tin ví dụ hơn là lời tự khen."),
      tip("Mẹo phát âm đuôi -ed: sau âm /t/ hoặc /d/ thì đọc thành **/ɪd/** (interested, excited, disappointed); sau âm vô thanh như /s/, /k/, /p/ thì đọc /t/ (relaxed, shocked); còn lại đọc /d/ (bored, tired). Đừng nuốt âm cuối, vì bỏ mất -ed thì I'm bored nghe thành I'm bore."),
      mistake("I'm very interesting in this job.", "I'm very interested in this job.", "Tiếng Việt chỉ có một chữ “thú vị” hay “quan tâm” cho cả người lẫn việc, nên người học không để ý đuôi. Nói về cảm xúc của bản thân thì dùng -ed. Interesting mô tả công việc, không mô tả bạn."),
      mistake("I have experience about sales.", "I have experience in sales.", "Người Việt dịch “kinh nghiệm về bán hàng” nên chọn about. Nói về kinh nghiệm trong một lĩnh vực, dùng experience in."),
      mistake("I graduated university in 2019.", "I graduated from university in 2019.", "Tiếng Việt nói “tốt nghiệp đại học” không cần giới từ, nên người học quên from. Trong tiếng Anh phải nói graduate from + trường."),
      teacher("Tôi đã ngồi hội đồng tuyển dụng nhiều lần, và điều tôi nhớ nhất là **người được chọn thường không nói hay nhất, mà nói cụ thể nhất**. Các em hãy chuẩn bị sẵn ba câu chuyện ngắn về công việc cũ, mỗi chuyện gồm tình huống, việc mình làm và kết quả. Tập nói to trước gương, bấm giờ không quá một phút. Và trước khi bước vào phòng, nhắc mình một câu: tôi thấy thì -ed, nó gây ra thì -ing."),
    ],
  },
  words: [
    word("interview", "/ˈɪn.tə.vjuː/", "buổi phỏng vấn", "I have a job interview on Friday.", "in|ter|view", 0),
    word("salary", "/ˈsæl.ər.i/", "lương (theo tháng hoặc năm)", "The salary is good, but the hours are long.", "sal|a|ry", 0),
    word("responsible", "/rɪˈspɒn.sə.bəl/", "chịu trách nhiệm", "I was responsible for a team of five people.", "re|spon|si|ble", 1, "Đi với giới từ for: responsible for something."),
    word("confident", "/ˈkɒn.fɪ.dənt/", "tự tin", "I'm confident that I can do this job.", "con|fi|dent", 0),
    word("strength", "/streŋθ/", "điểm mạnh", "What are your main strengths?", "strength", 0, "Kết thúc bằng /ŋθ/: đặt lưỡi giữa hai hàm răng ở âm cuối."),
    word("apply", "/əˈplaɪ/", "nộp đơn, ứng tuyển", "I'd like to apply for the marketing position.", "ap|ply", 1, "Apply for a job: ứng tuyển vào một công việc."),
    word("tiring", "/ˈtaɪə.rɪŋ/", "gây mệt mỏi", "My last job was quite tiring.", "ti|ring", 0),
    word("disappointed", "/ˌdɪs.əˈpɔɪn.tɪd/", "thất vọng", "I was disappointed when I didn't get the job.", "dis|ap|poin|ted", 2),
  ],
  exercises: [
    mc("b1-4-1", "The meeting was so long. I was really ___.", ["bored", "boring", "bore"], 0, "Nói về cảm giác của người thì dùng -ed: bored."),
    mc("b1-4-2", "Why do you want to ___ for this job?", ["join", "apply", "send", "work"], 1, "Ứng tuyển vào một công việc là apply for a job."),
    fill("b1-4-3", "I'm ___ in working with international customers. (interest)", ["interested"], "Cảm xúc của bản thân: interested in + V-ing."),
    fill("b1-4-4", "The news was very ___. We didn't get the contract. (disappoint)", ["disappointing"], "Tin tức là sự việc gây ra cảm xúc nên dùng -ing."),
    reorder("b1-4-5", "I have never worked in a bank.", "Hiện tại hoàn thành với never: nói về kinh nghiệm (chưa từng làm) tính đến bây giờ. Never đứng giữa have và V3."),
    reorder("b1-4-6", "My biggest strength is that I learn fast.", "My biggest strength is that + mệnh đề: cách nêu điểm mạnh quen thuộc trong phỏng vấn. Trạng từ fast luôn đứng sau động từ learn."),
    listen("b1-4-7", "I'm confident that I can do this job well.", ["Tôi không chắc mình làm được việc này.", "Tôi đã làm công việc này rất lâu rồi.", "Tôi tin rằng mình có thể làm tốt công việc này."], 2),
    listen("b1-4-8", "The salary is good, but the job is quite tiring.", ["Lương thấp nhưng công việc nhẹ nhàng.", "Lương tốt, nhưng công việc khá mệt.", "Công việc thú vị và lương cũng tốt."], 1, "Tiring: khiến người ta mệt, dùng để mô tả công việc."),
  ],
  speaking: [
    say("I've worked as an accountant for four years.", "Tôi đã làm kế toán được bốn năm."),
    say("I'm really interested in this position.", "Tôi thực sự quan tâm đến vị trí này."),
    say("One of my strengths is that I stay calm under pressure.", "Một trong những điểm mạnh của tôi là giữ được bình tĩnh khi chịu áp lực."),
  ],
});

const bayToYKien = lesson({
  slug: "bay-to-y-kien",
  title: "Bày tỏ ý kiến",
  minutes: 22,
  lecture: {
    title: "Nêu ý kiến, đồng ý và phản đối lịch sự",
    blocks: [
      p("Trong cuộc họp, sếp người nước ngoài quay sang hỏi: **What do you think?** Cả phòng im lặng. Nhiều người Việt có ý kiến rất hay nhưng không dám nói, vì sợ nói sai hoặc sợ làm người khác phật lòng. Bài này cho bạn những câu mẫu để nêu ý kiến, đồng ý và phản đối mà vẫn giữ được hòa khí."),
      p("Người Việt thường hoặc nói rất thẳng “You're wrong”, hoặc im lặng vì sợ mất lòng. Trong tiếng Anh, bạn hoàn toàn có thể phản đối, nhưng thường **làm mềm** câu nói trước khi đưa ra ý kiến khác."),
      table(
        ["Mục đích", "Thân mật", "Trang trọng hơn"],
        ["Nêu ý kiến", "I think… / I feel…", "In my opinion… / As far as I'm concerned…"],
        ["Đồng ý", "I agree. / Exactly.", "I completely agree with you."],
        ["Phản đối lịch sự", "I'm not so sure.", "I see your point, but…"],
      ),
      ex("In my opinion, working from home saves a lot of time.", "Theo tôi, làm việc tại nhà tiết kiệm được rất nhiều thời gian."),
      ex("I see your point, but I don't think it works for everyone.", "Tôi hiểu ý bạn, nhưng tôi không nghĩ nó phù hợp với tất cả mọi người.", "Thừa nhận ý người kia trước, rồi mới đưa ý mình. Chú ý người bản xứ thường nói I don't think it works, nghe tự nhiên và mềm hơn I think it doesn't work."),
      ex("I'm not so sure. What about the cost?", "Tôi không chắc lắm. Thế còn chi phí thì sao?", "Phản đối bằng một câu hỏi là cách rất mềm: người nghe tự nhận ra vấn đề mà không thấy bị bác bỏ."),
      p("Để lập luận rõ ràng, hãy dùng từ nối: **because** (vì) để nêu lý do, **however** (tuy nhiên) để nối hai câu trái ý nhau, **although** (mặc dù) để nối hai vế trong cùng một câu."),
      table(
        ["Từ nối", "Vị trí", "Ví dụ"],
        ["because", "trước vế nêu lý do", "I agree because it saves money."],
        ["however", "đầu câu mới, có dấu phẩy theo sau", "It's cheap. However, it's slow."],
        ["although", "đầu một vế, nối hai vế trong cùng một câu", "Although it's cheap, it's slow."],
      ),
      ex("Although the city is noisy, I love living here.", "Mặc dù thành phố ồn ào, tôi vẫn thích sống ở đây."),
      ex("Public transport is cheap. However, it is often crowded.", "Phương tiện công cộng rẻ. Tuy nhiên, nó thường rất đông."),
      tip("**However** thường đứng đầu câu mới và có dấu phẩy theo sau. **Although** phải nối hai vế trong một câu, không đứng một mình. Khi nói, hãy ngừng một nhịp ngắn sau however để người nghe biết ý sắp đổi chiều."),
      mistake("Although it was raining, but we went out.", "Although it was raining, we went out.", "Tiếng Việt nói “mặc dù… nhưng…”, còn tiếng Anh chỉ dùng một trong hai: although hoặc but."),
      mistake("I am agree with you.", "I agree with you.", "Người Việt quen khuôn “Tôi là…” = I am…, và dịch “tôi đồng ý” như một trạng thái. Nhưng agree là động từ, không cần thêm am."),
      mistake("You're wrong.", "I'm not sure that's right.", "Câu đúng ngữ pháp nhưng quá thẳng, trong công việc nghe như đang gây gổ. Giữa bạn bè thân nói thẳng thì không sao, nhưng nơi công sở, người nói tiếng Anh gần như luôn làm mềm lời phản đối."),
      teacher("Học trò hay hỏi tôi: “Thầy ơi, phản đối sếp có sao không?” Tôi luôn trả lời: **phản đối không sao, cách phản đối mới quan trọng**. Công thức tôi dạy suốt mấy chục năm chỉ có ba bước: công nhận ý người kia, nói ý mình, đưa một lý do. Các em hãy thuộc lòng ba câu I see your point, but…, I'm not so sure… và In my opinion…, rồi mỗi ngày dùng thử một lần, kể cả khi bàn chuyện ăn trưa."),
    ],
  },
  words: [
    word("opinion", "/əˈpɪn.jən/", "ý kiến, quan điểm", "In my opinion, the plan is too expensive.", "o|pin|ion", 1),
    word("agree", "/əˈɡriː/", "đồng ý", "I agree with you completely.", "a|gree", 1),
    word("however", "/haʊˈev.ər/", "tuy nhiên", "The hotel was nice. However, it was far from the beach.", "how|ev|er", 1),
    word("although", "/ɔːlˈðəʊ/", "mặc dù", "Although he was tired, he finished the report.", "al|though", 1, "Chữ gh không đọc. Âm th ở đây là /ð/, rung dây thanh."),
    word("argument", "/ˈɑːɡ.jə.mənt/", "lập luận; cuộc tranh cãi", "That's a strong argument.", "ar|gu|ment", 0),
    word("disadvantage", "/ˌdɪs.ədˈvɑːn.tɪdʒ/", "bất lợi, nhược điểm", "The main disadvantage is the price.", "dis|ad|van|tage", 2),
    word("concerned", "/kənˈsɜːnd/", "liên quan; lo ngại", "As far as I'm concerned, it's a good idea.", "con|cerned", 1, "As far as I'm concerned nghĩa là “theo tôi thấy”."),
  ],
  exercises: [
    mc("b1-5-1", "___ it was expensive, I bought it.", ["However", "Despite", "Although", "But"], 2, "Although nối hai vế trái ý trong cùng một câu. Despite phải đi với danh từ hoặc V-ing, không đi với cả một mệnh đề."),
    mc("b1-5-2", "I ___ with you. It's a great idea.", ["agree", "am agree", "agreeing"], 0, "Agree là động từ, không đi với am."),
    fill("b1-5-3", "In my ___, schools should start later in the morning.", ["opinion", "view"], "In my opinion hoặc in my view: theo ý kiến của tôi."),
    fill("b1-5-4", "I stayed at home yesterday ___ I was ill. (vì)", ["because", "as", "since"], "Nêu lý do: because."),
    reorder("b1-5-5", "What do you think about this idea?", "Câu hỏi xin ý kiến: What do you think about + danh từ? Trợ động từ do đứng trước chủ ngữ you."),
    reorder("b1-5-6", "I see what you mean.", "I see what you mean: tôi hiểu ý bạn. Đây là câu thừa nhận ý người khác trước khi nói ý mình. Trong mệnh đề what you mean, chủ ngữ you đứng trước động từ, không đảo như câu hỏi."),
    listen("b1-5-7", "I'm not so sure about that.", ["Tôi hoàn toàn đồng ý.", "Tôi không chắc lắm về điều đó.", "Tôi chắc chắn về điều đó."], 1, "I'm not so sure là cách phản đối nhẹ nhàng."),
    listen("b1-5-8", "Working from home is convenient. However, it can be lonely.", ["Làm việc tại nhà tiện lợi và không bao giờ thấy cô đơn.", "Làm việc tại nhà bất tiện nhưng vui.", "Làm việc ở văn phòng thì cô đơn hơn.", "Làm việc tại nhà tiện lợi. Tuy nhiên, nó có thể khiến bạn cô đơn."], 3),
  ],
  speaking: [
    say("In my opinion, reading is the best way to learn new words.", "Theo tôi, đọc là cách tốt nhất để học từ mới."),
    say("I see your point, but I don't completely agree.", "Tôi hiểu ý bạn, nhưng tôi không hoàn toàn đồng ý."),
    say("Although it's difficult, I really enjoy learning English.", "Mặc dù khó, tôi thực sự thích học tiếng Anh."),
  ],
});

const tinTucVaSuViec = lesson({
  slug: "tin-tuc-va-su-viec",
  title: "Tin tức và sự việc",
  minutes: 22,
  lecture: {
    title: "Câu bị động ở hiện tại đơn và quá khứ đơn",
    blocks: [
      p("Sáng nào bạn cũng lướt tin: “Hàng chục chuyến bay bị hủy vì bão”, “Cây cầu mới được khánh thành”. Khi đọc báo tiếng Anh hay nghe bản tin trên đài, bạn sẽ gặp những câu như thế liên tục. Nắm được câu bị động, bạn vừa đọc hiểu tin tức nhanh hơn, vừa kể lại được sự việc mà không cần biết ai là người làm."),
      p("Tin tức thường quan tâm **điều gì đã xảy ra** hơn là **ai làm**. Vì vậy báo chí dùng rất nhiều câu bị động: **be + V3** (quá khứ phân từ)."),
      table(
        ["Thì", "Chủ động", "Bị động"],
        ["Hiện tại đơn", "They make these phones in Vietnam.", "These phones are made in Vietnam."],
        ["Quá khứ đơn", "The storm damaged many houses.", "Many houses were damaged by the storm."],
      ),
      table(
        ["Dạng", "Hiện tại đơn", "Quá khứ đơn"],
        ["Khẳng định", "It is made in Vietnam.", "It was built in 1990."],
        ["Phủ định", "It isn't made in Vietnam.", "It wasn't built in 1990."],
        ["Nghi vấn", "Is it made in Vietnam?", "When was it built?"],
      ),
      p("Chỉ thêm **by + người hoặc vật thực hiện** khi thông tin đó quan trọng. Nếu không rõ ai làm, hoặc ai làm cũng không quan trọng, hãy bỏ by."),
      ex("The new bridge was opened last Sunday.", "Cây cầu mới được khánh thành vào Chủ nhật tuần trước.", "Không cần by vì người đọc chỉ quan tâm cây cầu đã mở, không cần biết ai cắt băng."),
      ex("Three people were injured in the accident.", "Ba người bị thương trong vụ tai nạn.", "Tiếng Việt dùng “bị” hoặc “được”, còn tiếng Anh đều dùng be + V3."),
      ex("The film was directed by a young Vietnamese woman.", "Bộ phim do một phụ nữ trẻ người Việt đạo diễn.", "Ở đây giữ by vì người đạo diễn chính là thông tin đáng chú ý."),
      ex("When was this temple built?", "Ngôi chùa này được xây khi nào?", "Câu hỏi bị động: từ để hỏi + was / were + chủ ngữ + V3."),
      tip("Nhiều người Việt nghĩ câu bị động chỉ dùng cho chuyện xấu vì chữ “bị”. Thực ra câu bị động **trung tính**: “được khen” và “bị phạt” đều là bị động trong tiếng Anh."),
      tip("Câu bị động cần V3, nên hãy ôn kỹ những động từ bất quy tắc hay gặp trong tin tức: **build, built, built**; **write, wrote, written**; **sell, sold, sold**; **take, took, taken**. Khi đọc to, nhớ bật âm cuối của V3 như built, sold, damaged."),
      mistake("The thief was arrest yesterday.", "The thief was arrested yesterday.", "Tiếng Việt động từ không đổi dạng, “bị bắt” vẫn là “bắt”, nên người học quên thêm -ed. Sau was / were phải là V3 (arrested), không dùng động từ nguyên mẫu."),
      mistake("The accident was happened at night.", "The accident happened at night.", "Người học thấy tai nạn là chuyện “không ai muốn”, giống như bị làm gì đó, nên thêm was. Nhưng happen là nội động từ, không có tân ngữ, nên không bao giờ dùng ở dạng bị động."),
      mistake("This house built in 1990.", "This house was built in 1990.", "Tiếng Việt nói “Ngôi nhà này xây năm 1990” mà không cần chữ “được”, nên người học bỏ luôn be. Tiếng Anh bắt buộc phải có was / were trước V3."),
      teacher("Có một bài tập tôi giao cho học trò suốt mấy chục năm và chưa bao giờ thấy thừa: **mỗi sáng đọc một mẩu tin tiếng Anh ngắn, gạch chân mọi cụm be + V3**, rồi tự hỏi “Ai làm việc này, và vì sao bài báo không nói ra?” Làm vậy một tuần, các em sẽ thấy câu bị động không còn là công thức trong sách, mà là cách người bản xứ kể chuyện hằng ngày."),
    ],
  },
  words: [
    word("report", "/rɪˈpɔːt/", "đưa tin; bản tin", "The accident was reported on the news.", "re|port", 1),
    word("government", "/ˈɡʌv.ən.mənt/", "chính phủ", "The new law was announced by the government.", "gov|ern|ment", 0, "Chữ n ở giữa thường gần như không đọc."),
    word("damage", "/ˈdæm.ɪdʒ/", "làm hư hại; sự thiệt hại", "Many roads were damaged by the flood.", "dam|age", 0, "Âm cuối là /ɪdʒ/, không đọc thành “đa-mết”."),
    word("flood", "/flʌd/", "lũ lụt", "The flood destroyed hundreds of homes.", "flood", 0, "Chữ oo ở đây đọc là /ʌ/, giống trong blood."),
    word("injured", "/ˈɪn.dʒəd/", "bị thương", "Nobody was injured in the fire.", "in|jured", 0),
    word("arrest", "/əˈrest/", "bắt giữ", "Two men were arrested last night.", "ar|rest", 1),
    word("announce", "/əˈnaʊns/", "thông báo, công bố", "The results will be announced tomorrow.", "an|nounce", 1),
    word("journalist", "/ˈdʒɜː.nə.lɪst/", "nhà báo", "The story was written by a local journalist.", "jour|na|list", 0),
  ],
  exercises: [
    mc("b1-6-1", "The letters ___ every morning.", ["deliver", "are delivered", "delivered", "are deliver"], 1, "Hiện tại đơn bị động: are + V3."),
    mc("b1-6-2", "Many houses ___ by the storm last night.", ["damaged", "are damaged", "were damaged"], 2, "Last night là quá khứ, nhà bị bão làm hư hại: were damaged."),
    fill("b1-6-3", "Today, English ___ spoken in many countries.", ["is"], "English là danh từ số ít: is + V3."),
    fill("b1-6-4", "The report was written ___ a young journalist.", ["by"], "By dùng để chỉ người thực hiện hành động."),
    reorder("b1-6-5", "The new hospital was built by a Japanese company.", "Quá khứ đơn bị động: was + V3 (built), by + người thực hiện đứng cuối câu."),
    reorder("b1-6-6", "Two people were taken to hospital.", "Chủ ngữ số nhiều nên dùng were + V3. Take có V3 là taken. Tiếng Anh-Anh nói to hospital, không cần the."),
    listen("b1-6-7", "The flight was cancelled because of bad weather.", ["Chuyến bay bị hủy vì thời tiết xấu.", "Chuyến bay bị hoãn vì thời tiết xấu.", "Thời tiết xấu nhưng chuyến bay vẫn cất cánh."], 0, "Cancelled là hủy, còn hoãn là delayed."),
    listen("b1-6-8", "A new law was announced by the government yesterday.", ["Chính phủ sẽ công bố luật mới vào ngày mai.", "Hôm qua chính phủ đã công bố một luật mới.", "Luật mới đã được thông qua từ năm ngoái."], 1),
  ],
  speaking: [
    say("Thousands of books are sold online every day.", "Hàng nghìn cuốn sách được bán trực tuyến mỗi ngày."),
    say("The old market was rebuilt last year.", "Khu chợ cũ đã được xây lại vào năm ngoái."),
    say("Luckily, nobody was injured in the fire.", "May mắn là không ai bị thương trong vụ cháy."),
  ],
});

export const tiengAnhB1: Course = {
  slug: "tieng-anh-b1",
  title: "Tiếng Anh B1: Tự tin trò chuyện",
  level: "B1",
  goal: "lo-trinh",
  summary: "Cho người đã giao tiếp cơ bản: kể chuyện mạch lạc, nói về kinh nghiệm, công việc và bày tỏ quan điểm của mình.",
  outcomes: [
    "Kể lại một câu chuyện hoặc trải nghiệm theo trình tự rõ ràng",
    "Nói về những việc đã làm được bao lâu và kinh nghiệm bản thân",
    "Trả lời phỏng vấn xin việc về điểm mạnh và kinh nghiệm",
    "Nêu ý kiến, đồng ý và phản đối một cách lịch sự",
  ],
  audience: [
    "Người đã học xong A2 hoặc đã nói được những câu giao tiếp hằng ngày",
    "Người đi làm cần tự tin trò chuyện, phỏng vấn và thảo luận bằng tiếng Anh",
  ],
  teacher: {
    name: "Thầy Quang Huy",
    initials: "QH",
    bio: "10 năm dạy tiếng Anh giao tiếp cho người đi làm, thạc sĩ TESOL, chuyên luyện phản xạ nói cho người Việt.",
  },
  durationWeeks: 16,
  rating: 4.8,
  reviews: [
    { name: "Thu Trang", role: "Nhân viên nhân sự, TP. Hồ Chí Minh", quote: "Trước đây mình cứ lẫn lộn các thì khi kể chuyện. Sau khóa này mình kể lại chuyến công tác cho sếp người nước ngoài trôi chảy hơn hẳn." },
    { name: "Hoàng Nam", role: "Chuyên viên kinh doanh, Hải Phòng", quote: "Bài phỏng vấn giúp mình chuẩn bị câu trả lời về điểm mạnh rất bài bản. Mình đã qua vòng phỏng vấn tiếng Anh đầu tiên." },
  ],
  faqs: [
    { q: "Làm sao biết mình đủ trình độ để học B1?", a: "Nếu bạn đã dùng được thì hiện tại, quá khứ đơn và nói được những câu giao tiếp hằng ngày, bạn có thể học B1. Bạn cũng có thể làm bài kiểm tra trình độ miễn phí để chắc chắn." },
    { q: "Học xong B1 thì học gì tiếp?", a: "Bạn học tiếp khóa B2: Tiếng Anh công việc, tập trung vào viết email, họp, thuyết trình và đàm phán. Mỗi cấp có chứng chỉ riêng." },
  ],
  status: "open",
  modules: [
    chapter(1, "Kể chuyện và trải nghiệm", [keLaiMotChuyen, daDuocBaoLau, nQuaKhuHoanThanh, nHienTaiHoanThanhTiepDien]),
    chapter(2, "Khả năng và giả định", [neuThi, nSuyDoanHienTai, nDongTuTheoSau, nMenhDeQuanHe]),
    chapter(3, "Công việc và giao tiếp", [congViecVaPhongVan, bayToYKien, nCauHoiGianTiep, nSoSanhNangCao]),
    chapter(4, "Tin tức và xã hội", [tinTucVaSuViec, nBiDongNangCao, nTuongLaiNangCao, nCumDongTuThongDung]),
  ],
};
