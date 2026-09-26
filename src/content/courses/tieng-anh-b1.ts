import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../builders";
import nQuaKhuHoanThanh from "../lessons/b1/qua-khu-hoan-thanh";
import nHienTaiHoanThanhTiepDien from "../lessons/b1/hien-tai-hoan-thanh-tiep-dien";
import nSuyDoanHienTai from "../lessons/b1/suy-doan-hien-tai";
import nDongTuTheoSau from "../lessons/b1/dong-tu-theo-sau";
import nMenhDeQuanHe from "../lessons/b1/menh-de-quan-he";
import nCauHoiGianTiep from "../lessons/b1/cau-hoi-gian-tiep";
import nSoSanhNangCao from "../lessons/b1/so-sanh-nang-cao";
import nBiDongMoiThi from "../lessons/b1/bi-dong-moi-thi";
import nTuongLaiTiepDienHoanThanh from "../lessons/b1/tuong-lai-tiep-dien-hoan-thanh";
import nCumDongTuThongDung from "../lessons/b1/cum-dong-tu-thong-dung";
import nCauTuongThuat from "../lessons/b1/cau-tuong-thuat";
import nWishVaUsedTo from "../lessons/b1/wish-va-used-to";
import nWouldVaUsedTo from "../lessons/b1/would-va-used-to";
import nCauHoiDuoi from "../lessons/b1/cau-hoi-duoi";
import { FINAL_EXTRA_TIENG_ANH_B1 } from "../banks/final-tieng-anh-b1";
import { chapter, finalBank } from "../review";
import type { Course } from "../types";

const keLaiMotChuyen = lesson({
  slug: "ke-lai-mot-chuyen",
  title: "Kể lại một chuyện đã xảy ra",
  minutes: 30,
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
      teacher("Khi đứng lớp, tôi thấy người học kể chuyện hay nhất không phải người thuộc nhiều từ, mà là người biết **dựng cảnh trước rồi mới tung sự việc**. Mỗi tối trước khi ngủ, các bạn hãy kể lại một chuyện trong ngày bằng ba câu: một câu was/were + V-ing làm nền, một câu có when chen vào, một câu in the end để kết. Làm đều một tháng, các bạn sẽ thấy miệng tự bật ra đúng thì mà không cần nghĩ."),
      summary(
        "**was / were + V-ing** dựng cảnh nền (việc đang diễn ra); **quá khứ đơn** cho việc ngắn chen vào hoặc các việc nối tiếp nhau.",
        "**While** thường đi với quá khứ tiếp diễn; **when** thường đi với hành động ngắn ở quá khứ đơn.",
        "Ở thì quá khứ tiếp diễn, was / were + V-ing, không đi với động từ nguyên mẫu: không nói I was see. (Was / were vẫn đi với tính từ, danh từ, V3: I was tired, It was built in 1990.)",
        "Đã có từ chỉ quá khứ như yesterday thì mọi động từ trong câu chuyện vẫn phải chia: went, met, saw.",
        "Kể mạch lạc bằng từ nối: **first, then, suddenly, in the end**.",
      ),
    ],
  },
  words: [
    word("suddenly", "/ˈsʌd.ən.li/", "bỗng nhiên, đột nhiên", "Suddenly, the lights went out.", "sud|den|ly", 0),
    word("accident", "/ˈæk.sɪ.dənt/", "tai nạn", "I saw an accident on my way to work.", "ac|ci|dent", 0, "Chữ cc đọc là /ks/, không đọc là /k/."),
    word("happen", "/ˈhæp.ən/", "xảy ra", "What happened after that?", "hap|pen", 0),
    word("journey", "/ˈdʒɜː.ni/", "chuyến đi, hành trình", "The journey took six hours.", "jour|ney", 0),
    word("realise", "/ˈrɪə.laɪz/", "nhận ra", "I suddenly realised that my bag was still on the bus.", "rea|lise", 0),
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
    correct("b1-1-9", "I was take a shower when the lights went out.", "I was taking a shower when the lights went out.", "Ở thì quá khứ tiếp diễn, was + V-ing (không dùng động từ nguyên mẫu): was taking. Việc đang làm dở (đang tắm) là cảnh nền, việc mất điện chen vào dùng quá khứ đơn."),
    correct("b1-1-10", "Yesterday my sister buy a new laptop.", "Yesterday my sister bought a new laptop.", "Đã có yesterday thì động từ vẫn phải chia ở quá khứ đơn. Buy là động từ bất quy tắc: buy, bought, bought."),
  ],
  speaking: [
    say("I was walking home when I saw an old friend.", "Tôi đang đi bộ về nhà thì gặp một người bạn cũ."),
    say("While we were having dinner, the lights suddenly went out.", "Trong lúc chúng tôi đang ăn tối thì bỗng nhiên mất điện."),
    say("In the end, we laughed about it.", "Cuối cùng, chúng tôi lại cười về chuyện đó."),
  ],
  freeSpeaking: free(
    "Can you tell me about something unexpected that happened to you?",
    "Kể lại một chuyện bất ngờ đã xảy ra với bạn: lúc đó bạn đang làm gì, chuyện gì chen vào, và cuối cùng ra sao.",
    "Last summer, I was walking along the beach in Nha Trang with my friends. We were talking and laughing when suddenly a big wave hit us. All our bags got wet, and my phone stopped working. At first I was angry, but then we all started laughing. In the end, it became one of my favourite memories of the trip.",
  ),
  dialogueQuestions: [
    listenQ("b1-1-d1", "Why did the car stop?", "Yes. While we were going up the pass, the car stopped. I realised that the engine was too hot.", ["The engine was too hot.", "They had no petrol.", "It was raining too hard.", "A tyre was flat."], 0, "Lan nói: I realised that the engine was too hot."),
    mc("b1-1-d2", "Who helped Lan and her friends?", ["A mechanic from a garage", "A farmer who was working near the road", "Tom, her colleague", "A police officer"], 1, "Tiệm sửa xe không nghe máy; một bác nông dân đang làm ruộng gần đường đã đến giúp."),
    mc("b1-1-d3", "What was Tom doing while Lan was having her adventure?", ["He was driving to Da Lat.", "He was working in the office.", "He was sleeping at home."], 2, "Tom nói: I was sleeping at home while you were having an adventure."),
  ],
  reading: reading({
    title: "The day I missed my flight",
    text: `Last April, I was travelling from Ho Chi Minh City to Hanoi for my cousin's wedding. My flight was at seven in the morning, so I set an alarm on my phone and went to bed early. Unfortunately, while I was sleeping, there was a power cut, and my phone didn't charge. When I woke up, the sun was shining and my phone was dead.

I jumped out of bed, got dressed in two minutes and called a taxi from my neighbour's phone. While we were driving to the airport, it suddenly started to rain heavily, and the traffic got worse and worse. I was checking the time every thirty seconds. When I finally arrived at the check-in desk, the woman there shook her head. The gate was already closed.

I felt terrible. I was standing in the middle of the airport, wet and tired, when an older man tapped me on the shoulder. He was also going to Hanoi, and he told me about a cheaper flight at eleven o'clock. I bought a ticket, and while we were waiting, we talked about our families and our jobs.

In the end, I arrived at the wedding just in time for the photos. My cousin laughed when she heard the story. Now, whenever I travel, I charge my phone the night before and keep a small alarm clock in my bag. It was a stressful journey, but it taught me an important lesson.`,
    glossary: [
      ["power cut", "sự cố mất điện"],
      ["charge", "sạc (pin)"],
      ["check-in desk", "quầy làm thủ tục"],
      ["gate", "cửa ra máy bay"],
      ["tap on the shoulder", "vỗ nhẹ vào vai"],
      ["just in time", "vừa kịp lúc"],
    ],
    questions: [
      mc("b1-1-r1", "What is the blog post mainly about?", ["How the writer planned a cousin's wedding", "A difficult morning when the writer missed a flight but still got to a wedding", "Why the writer is afraid of flying", "The best way to get to the airport in the rain"], 1, "Cả bài kể chuyện lỡ chuyến bay buổi sáng rồi vẫn kịp dự đám cưới."),
      mc("b1-1-r2", "Why didn't the alarm wake the writer up?", ["The writer forgot to set it.", "The phone was dead because of a power cut.", "The neighbour turned it off.", "The writer was too tired to hear it."], 1, "Đoạn một: while I was sleeping, there was a power cut, and my phone didn't charge."),
      fill("b1-1-r3", "When the writer arrived at the check-in desk, the gate was already ___.", ["closed"], "Đoạn hai: The gate was already closed."),
      mc("b1-1-r4", "What can we guess about the older man?", ["He worked at the airport.", "He was the writer's cousin.", "He was kind and happy to help a stranger.", "He also missed the wedding."], 2, "Ông không quen người viết nhưng chủ động mách chuyến bay khác và trò chuyện cùng, nên ta đoán ông tốt bụng."),
      mc("b1-1-r5", "What does the writer do now before a trip?", ["Takes a taxi the night before", "Charges the phone and carries a small alarm clock", "Always books the eleven o'clock flight"], 1, "Đoạn cuối: I charge my phone the night before and keep a small alarm clock in my bag."),
    ],
  }),
  dialogue: dialogue(
    "Cuối tuần của bạn thế nào?",
    "Sáng thứ Hai ở văn phòng, Tom, đồng nghiệp người Anh, hỏi Lan về chuyến đi Đà Lạt cuối tuần. Lan kể lại chuyện xe hỏng giữa đèo.",
    { A: "Tom, đồng nghiệp", B: "Lan" },
    A("Hi Lan! What happened at the weekend? You look tired.", "Chào Lan! Cuối tuần có chuyện gì thế? Trông bạn mệt quá."),
    B("It was an unexpected journey. We were driving to Da Lat when it suddenly started to rain.", "Một chuyến đi đầy bất ngờ. Bọn mình đang lái xe lên Đà Lạt thì bỗng nhiên trời đổ mưa."),
    A("Oh no! Were you driving in the mountains?", "Ôi không! Lúc đó các bạn đang đi trên núi à?"),
    B("Yes. While we were going up the pass, the car stopped. I realised that the engine was too hot.", "Ừ. Trong lúc bọn mình đang lên đèo thì xe chết máy. Mình nhận ra là động cơ nóng quá."),
    A("What did you do?", "Thế các bạn làm gì?"),
    B("First, we called a garage, but nobody answered. Then a farmer saw us and came to help.", "Đầu tiên, bọn mình gọi cho một tiệm sửa xe nhưng không ai nghe máy. Sau đó một bác nông dân nhìn thấy và đến giúp."),
    A("That was lucky! What was he doing there?", "May thế! Bác ấy đang làm gì ở đó vậy?"),
    B("He was working in his field near the road. He fixed the car in twenty minutes.", "Bác ấy đang làm ruộng gần đường. Bác sửa xe xong trong hai mươi phút."),
    A("So did you get to Da Lat eventually?", "Vậy rốt cuộc các bạn có đến được Đà Lạt không?"),
    B("Yes, eventually. We arrived very late, but in the end it became a great memory.", "Có, sau cùng thì cũng đến. Bọn mình đến rất muộn, nhưng cuối cùng đó lại thành một kỷ niệm tuyệt vời."),
    A("What a story! I was sleeping at home while you were having an adventure.", "Chuyện hay thật! Mình thì đang ngủ ở nhà trong lúc bạn đang phiêu lưu."),
    B("Next time, you should come with us!", "Lần sau bạn đi cùng bọn mình nhé!"),
  ),
  task: task({
    prompt: "Viết một đoạn văn (khoảng 90–120 từ) kể lại một chuyện bất ngờ đã xảy ra với bạn (trên đường đi làm, khi đi du lịch, ở nhà…). Hãy dựng cảnh nền trước, rồi kể sự việc chen vào và kết thúc câu chuyện.",
    hints: [
      "Mở đầu bằng một câu was / were + V-ing để dựng cảnh: lúc đó bạn đang làm gì, trời thế nào.",
      "Dùng when hoặc while để nối cảnh nền với sự việc chen vào.",
      "Nối các việc tiếp theo bằng first, then, suddenly, in the end.",
      "Kết bằng cảm xúc của bạn hoặc điều bạn nhớ nhất.",
    ],
    model: "Last month, something unexpected happened on my way to work. It was raining heavily, and people were hurrying to their offices. While I was riding my motorbike along a busy street, a small dog suddenly ran into the road. I stopped just in time, but the man behind me was looking at his phone, and he hit my bike. Luckily, nobody got hurt. First, we checked our bikes and moved to the side of the road. Then he said sorry and paid for the repair. The dog was sitting under a tree and watching us the whole time. In the end, we laughed about it, and now it is a funny memory.",
    checklist: [
      "Có ít nhất 2 câu was / were + V-ing để dựng cảnh nền.",
      "Có ít nhất 1 câu dùng when hoặc while nối cảnh nền với sự việc chen vào.",
      "Các sự việc chính đều ở quá khứ đơn (went, saw, stopped), không còn động từ nguyên mẫu.",
      "Không có câu nào kiểu was + động từ nguyên mẫu (was see, was go).",
      "Dùng ít nhất 3 từ nối trình tự: first, then, suddenly, in the end.",
    ],
    minWords: 90,
  }),
});

const daDuocBaoLau = lesson({
  slug: "da-duoc-bao-lau",
  title: "Đã… được bao lâu rồi",
  minutes: 30,
  lecture: {
    title: "Hiện tại hoàn thành với for và since",
    blocks: [
      p("Bạn ngồi cà phê với một vị khách nước ngoài, và câu hỏi đầu tiên gần như chắc chắn là: **How long have you lived here?** hoặc **How long have you worked there?** Đây là những câu hỏi làm quen quen thuộc nhất, nên trả lời trôi chảy là bạn đã ghi điểm ngay từ phút đầu."),
      p("Người Việt nói “Tôi sống ở Hà Nội được năm năm rồi” và rất dễ dịch thành “I live in Hanoi for five years”. Khi một việc bắt đầu trong quá khứ và **vẫn còn đến bây giờ**, tiếng Anh dùng **hiện tại hoàn thành**: have / has + V3. Ở A2, bạn đã dùng thì này với ever, never, just, already, yet để nói về trải nghiệm và việc vừa xong; hôm nay ta dùng nó cho việc **kéo dài đến bây giờ**."),
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
      tip("**Ago** thường đi với quá khứ đơn và không dùng với hiện tại hoàn thành. I moved here three years ago và I've lived here for three years có cùng ý, nhưng khác thì. Mẹo phát âm: đừng nuốt âm **'ve** và **'s**. Nếu bỏ mất, I've lived nghe thành I lived, và người nghe hiểu là bạn không còn sống ở đó nữa."),
      mistake("I am working here since 2021.", "I have worked here since 2021.", "Tiếng Việt chỉ cần thêm “từ năm 2021 đến giờ”, động từ không đổi hình thức, nên người học giữ nguyên thì hiện tại. Tiếng Anh thì khác: việc bắt đầu từ một mốc trong quá khứ và kéo dài đến bây giờ phải dùng hiện tại hoàn thành."),
      mistake("I have seen that film last week.", "I saw that film last week.", "Người Việt thấy chữ “đã” là nghĩ ngay đến have + V3. Nhưng có mốc thời gian đã kết thúc (last week) thì phải dùng quá khứ đơn."),
      mistake("I have lived here since five years.", "I have lived here for five years.", "Tiếng Việt nói “từ năm năm nay”, chữ “từ” khiến người học chọn since. Five years là một khoảng thời gian, nên dùng for."),
      teacher("Tôi hay bảo các bạn: trước khi chọn for hay since, hãy tự hỏi **“Cái này có ghi được lên lịch không?”** Nếu khoanh được trên tờ lịch như thứ Hai, năm 2020, hôm sinh nhật, thì dùng since. Nếu phải đếm như ba ngày, năm năm, rất lâu, thì dùng for. Và mỗi lần gặp người mới, các bạn hãy tập hỏi một câu How long have you…? Hỏi được thì mới nghe được câu trả lời."),
      summary(
        "Việc bắt đầu trong quá khứ và **vẫn còn đến bây giờ**: have / has + V3, không dùng hiện tại đơn hay hiện tại tiếp diễn.",
        "**for** + khoảng thời gian (for five years); **since** + mốc thời gian (since 2020, since Monday, since I was a child).",
        "Hỏi thời gian kéo dài: **How long have you + V3?**",
        "Có mốc thời gian đã kết thúc (yesterday, last week, in 2019, ago) thì dùng **quá khứ đơn**.",
        "Mẹo chọn nhanh: khoanh được trên lịch thì dùng since, phải đếm thì dùng for.",
      ),
    ],
  },
  words: [
    word("decade", "/ˈdek.eɪd/", "thập kỷ, mười năm", "I've worked in this industry for more than a decade.", "dec|ade", 0, "Trọng âm ở âm đầu: DEC-ade. Âm cuối /eɪd/, nhớ giữ /d/, đừng bỏ."),
    word("recently", "/ˈriː.sənt.li/", "gần đây", "I've recently started a new job.", "re|cent|ly", 0),
    word("settle", "/ˈset.əl/", "định cư, ổn định cuộc sống", "My parents settled in Can Tho in 2010, and they've lived there since then.", "set|tle", 0, "Chữ tt đọc là một âm /t/; âm cuối /əl/ rất nhẹ, không đọc thành “sét-tồ”."),
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
    correct("b1-2-9", "My parents have been married since thirty years.", "My parents have been married for thirty years.", "Thirty years là một khoảng thời gian phải đếm, nên dùng for. Since chỉ đi với một mốc như since 1996."),
    correct("b1-2-10", "I work in this bank since 2020.", ["I have worked in this bank since 2020.", "I have been working in this bank since 2020."], "Việc bắt đầu từ năm 2020 và vẫn còn đến bây giờ phải dùng hiện tại hoàn thành: I have worked (hoặc I have been working). Hiện tại đơn không đi với since."),
  ],
  freeSpeaking: free(
    "How long have you lived in your town, and what has changed there?",
    "Nói bạn sống ở nơi hiện tại được bao lâu rồi, chuyển đến từ khi nào, và nơi đó đã thay đổi thế nào. Dùng for, since và have + V3.",
    "I've lived in Bien Hoa for twelve years. I moved here in 2014 because my father got a new job. Since then, the town has changed a lot. Two big shopping centres have opened, and the roads have become much busier. I've known my best friend here since my first week at school, and we still meet every weekend.",
  ),
  dialogueQuestions: [
    listenQ("b1-2-d1", "How long has Hoa worked at her present company?", "I've worked here for four years. Before that, I worked in a bank for two years.", ["For two years", "For four years", "For six years"], 1, "I've worked here for four years: bốn năm ở công ty hiện tại; hai năm là thời gian ở ngân hàng trước đó."),
    mc("b1-2-d2", "When did Hoa start living in Hanoi?", ["When she was eighteen", "When she finished university", "Four years ago", "Six months ago"], 0, "Hoa nói: I've lived in Hanoi since I was eighteen."),
    mc("b1-2-d3", "Why hasn't Mark's Vietnamese improved much?", ["He doesn't like the language.", "He hasn't had much time lately.", "He has only been in Vietnam for a week."], 1, "Mark nói: I haven't had much time lately."),
  ],
  reading: reading({
    title: "The bookshop that has never closed",
    text: `Mr Tran Van Duc has sold books on Dinh Le Street in Hanoi since 1985. His shop is only three metres wide, but it has been a favourite place for students, teachers and writers for more than four decades.

Mr Tran opened the shop when he was twenty-five. At first, he sold only old textbooks. Over the years, he has added novels, dictionaries and even comics for children. "I've read almost every book on these shelves," he says with a smile.

A lot has changed on the street since then. Many bookshops have closed, and people buy more and more books online. But Mr Tran hasn't changed his opening hours for thirty years: he opens at seven every morning and closes at nine at night. He hasn't taken a long holiday since his daughter's wedding in 2010.

Some of his customers have known him for a very long time. Ms Nguyen, a university lecturer, has bought her books here since she was a first-year student. "He always remembers what I like," she says. "Last month he kept a new history book for me before it sold out."

Last year, Mr Tran's grandson built a website for the shop, and online orders have grown quickly. "I don't understand computers," Mr Tran laughs, "but I've learnt to answer emails. You're never too old to learn."`,
    glossary: [
      ["textbook", "sách giáo khoa"],
      ["shelf (shelves)", "giá sách, kệ sách"],
      ["opening hours", "giờ mở cửa"],
      ["lecturer", "giảng viên đại học"],
      ["sell out", "bán hết"],
      ["grow", "tăng lên"],
    ],
    questions: [
      mc("b1-2-r1", "What is the article mainly about?", ["A new bookshop that opened last year", "A man who has run the same small bookshop for a long time", "Why people prefer to buy books online", "How to build a website for a shop"], 1, "Cả bài nói về ông Đức và hiệu sách ông mở từ năm 1985 đến nay."),
      fill("b1-2-r2", "Mr Tran hasn't taken a long holiday ___ his daughter's wedding.", ["since"], "Đoạn ba: He hasn't taken a long holiday since his daughter's wedding in 2010. Đám cưới là một mốc thời gian nên dùng since."),
      mc("b1-2-r3", "How long has Ms Nguyen bought books at the shop?", ["Since last month", "Since she was a first-year student", "For thirty years", "Since 2010"], 1, "Đoạn bốn: Ms Nguyen has bought her books here since she was a first-year student."),
      mc("b1-2-r4", "Why did Mr Tran keep a new history book for Ms Nguyen?", ["She had already paid for it online.", "He knows her well and guessed that she would want it.", "It was the last book in the shop."], 1, "Bà Nguyễn nói He always remembers what I like, nên ta suy ra ông giữ sách vì biết rõ sở thích của bà."),
      mc("b1-2-r5", "What does Mr Tran's last sentence show about him?", ["He is tired of his job.", "He is happy to learn new things at his age.", "He wants his grandson to run the shop."], 1, "You're never too old to learn: không bao giờ là quá già để học. Ông vui vẻ học cách trả lời email dù đã lớn tuổi."),
    ],
  }),
  speaking: [
    say("I've lived in Hanoi for seven years.", "Tôi sống ở Hà Nội được bảy năm rồi."),
    say("How long have you worked here?", "Bạn làm việc ở đây được bao lâu rồi?"),
    say("I haven't seen my best friend since last summer.", "Từ mùa hè năm ngoái đến giờ tôi chưa gặp bạn thân."),
  ],
  dialogue: dialogue(
    "Làm quen trong giờ nghỉ cà phê",
    "Trong buổi gặp mặt đối tác, Hoa trò chuyện với Mark, một vị khách người Anh mới sang Việt Nam làm việc. Hai người hỏi nhau đã sống và làm việc ở đây bao lâu.",
    { A: "Mark, khách người Anh", B: "Hoa" },
    A("So, Hoa, how long have you worked at this company?", "Vậy Hoa làm ở công ty này được bao lâu rồi?"),
    B("I've worked here for four years. Before that, I worked in a bank for two years.", "Tôi làm ở đây được bốn năm rồi. Trước đó, tôi làm ở ngân hàng hai năm."),
    A("And have you always lived in Hanoi?", "Thế bạn sống ở Hà Nội từ trước đến giờ à?"),
    B("No. I grew up in Nam Dinh, but I've lived in Hanoi since I was eighteen.", "Không. Tôi lớn lên ở Nam Định, nhưng tôi sống ở Hà Nội từ năm mười tám tuổi."),
    A("How long have you known Minh? You two seem very close.", "Bạn quen Minh bao lâu rồi? Hai người có vẻ thân nhau lắm."),
    B("We've known each other since university. What about you? How long have you been in Vietnam?", "Chúng tôi quen nhau từ hồi đại học. Còn anh? Anh ở Việt Nam được bao lâu rồi?"),
    A("I've been here for six months. I moved here in March.", "Tôi ở đây được sáu tháng rồi. Tôi chuyển sang đây hồi tháng Ba."),
    B("Has your Vietnamese improved?", "Tiếng Việt của anh có tiến bộ không?"),
    A("A little! I haven't had much time lately, but I can order phở now.", "Một chút! Dạo này tôi không có nhiều thời gian, nhưng giờ tôi gọi được phở rồi."),
    B("That's the most important thing! Do you like your neighbourhood?", "Thế là quan trọng nhất rồi! Anh có thích khu phố mình ở không?"),
    A("Yes. I found a flat in Tay Ho last month, and I love it.", "Có. Tháng trước tôi tìm được một căn hộ ở Tây Hồ, và tôi rất thích."),
    B("I haven't been to Tay Ho for ages. Let's have coffee there sometime.", "Lâu lắm rồi tôi chưa đến Tây Hồ. Hôm nào mình đi cà phê ở đó nhé."),
  ),
  task: task({
    prompt: "Viết một đoạn giới thiệu bản thân (khoảng 90–120 từ) với đồng nghiệp mới: bạn sống ở đâu, làm công việc gì, học tiếng Anh, quen người bạn thân được bao lâu rồi.",
    hints: [
      "Dùng have / has + V3 cho những việc vẫn còn đến bây giờ.",
      "For + khoảng thời gian (for six years), since + mốc thời gian (since 2022, since I was a child).",
      "Thêm ít nhất một câu quá khứ đơn cho việc đã kết thúc, với ago, last year hoặc in + năm.",
    ],
    model: "Hi everyone, my name is Linh. I've lived in Da Nang for six years, and I really love this city. I moved here from Quang Ngai in 2020 because I wanted a better job. I've worked as a sales assistant at a travel company since 2022. Before that, I worked in a hotel for two years. I've studied English since I was a child, but my speaking has improved a lot recently. I've known my best friend, Thu, since secondary school. We met twenty years ago, and we still talk every day. I'm very happy to join this team.",
    checklist: [
      "Có ít nhất 3 câu have / has + V3 cho việc vẫn còn đến bây giờ.",
      "Dùng đúng cả for (với khoảng thời gian) và since (với mốc thời gian), mỗi từ ít nhất một lần.",
      "Có ít nhất 1 câu quá khứ đơn với ago, last hoặc in + năm cho việc đã kết thúc.",
      "Không có câu kiểu I am working here since… hoặc I have seen… last year.",
      "Không viết since + khoảng thời gian (since five years).",
    ],
    minWords: 90,
  }),
});

const neuThi = lesson({
  slug: "neu-thi",
  title: "Nếu… thì…",
  minutes: 32,
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
      tip("Muốn khuyên ai đó, hãy dùng **If I were you, I would…** (Nếu tôi là bạn, tôi sẽ…). Trong câu điều kiện loại 2, văn viết chuẩn thường dùng **were** cho mọi chủ ngữ, kể cả I, he, she (văn nói hằng ngày có thể dùng was). Riêng cụm If I were you, các bạn nên luôn dùng were."),
      mistake("If it will rain, we will stay at home.", "If it rains, we will stay at home.", "Vì cả câu nói về ngày mai, người học nghĩ vế nào cũng phải có will. Nhưng trong câu điều kiện loại 1, mệnh đề if dùng hiện tại đơn để nói về tương lai; will chỉ nằm ở mệnh đề chính."),
      mistake("If I have a lot of money, I would buy a house.", "If I had a lot of money, I would buy a house.", "Tiếng Việt không có cách “lùi thì” để báo chuyện không có thật. Trong tiếng Anh, mệnh đề chính có would thì mệnh đề if phải lùi về quá khứ đơn."),
      mistake("Unless you don't hurry, you'll miss the train.", "Unless you hurry, you'll miss the train.", "Người Việt dịch “trừ khi bạn không nhanh lên” theo từng chữ. Unless đã mang nghĩa phủ định, không thêm don't."),
      teacher("Khi chấm bài, tôi thấy người học sai câu điều kiện không phải vì không thuộc công thức, mà vì **không hỏi mình đang nghĩ gì**. Trước khi nói, hãy tự hỏi: “Chuyện này có thể xảy ra thật không?” Có thì dùng loại một, không thì lùi thì dùng loại hai. Mỗi tối, các bạn viết ba câu If I were you… để khuyên một người bạn. Lời khuyên có thật thì câu văn cũng nhớ lâu."),
      summary(
        "Chuyện **có thể xảy ra thật**: If + hiện tại đơn, will + V. Khi nói về tương lai, không đặt will trong mệnh đề if (ngoại lệ: lời nhờ lịch sự If you will wait here, …).",
        "Chuyện **không có thật, tưởng tượng**: If + quá khứ đơn, would + V.",
        "Khuyên ai đó: **If I were you, I'd…**, luôn dùng were.",
        "**Unless** = if not; sau unless dùng câu khẳng định, không thêm don't.",
        "Mệnh đề if đứng đầu câu thì có dấu phẩy, đứng sau thì không.",
      ),
    ],
  },
  words: [
    word("afford", "/əˈfɔːd/", "đủ tiền, đủ khả năng chi trả", "I can't afford a new car.", "af|ford", 1, "Thường đi với can hoặc can't."),
    word("decision", "/dɪˈsɪʒ.ən/", "quyết định", "If I were you, I'd think about that decision again.", "de|ci|sion", 1),
    word("possible", "/ˈpɒs.ə.bəl/", "có thể, khả thi", "If possible, please call me before noon.", "pos|si|ble", 0),
    word("advice", "/ədˈvaɪs/", "lời khuyên", "Can I give you some advice?", "ad|vice", 1, "Advice là danh từ không đếm được, không nói an advice. Động từ là advise, đọc với âm /z/."),
    word("lottery", "/ˈlɒt.ər.i/", "xổ số", "What would you do if you won the lottery?", "lot|te|ry", 0),
    word("scholarship", "/ˈskɒl.ə.ʃɪp/", "học bổng", "If I got a scholarship, I would study in Australia.", "schol|ar|ship", 0, "Chữ ch đọc là /k/, trọng âm ở âm đầu: SKOL-ə-ship. Nhận học bổng là get / win a scholarship."),
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
    correct("b1-3-9", "If you will finish early, we'll have dinner together.", "If you finish early, we'll have dinner together.", "Câu điều kiện loại 1: mệnh đề if dùng hiện tại đơn dù nói về tương lai. Will chỉ nằm ở mệnh đề chính."),
    correct("b1-3-10", "If I knew the answer, I will tell you.", ["If I knew the answer, I would tell you.", "If I knew the answer, I'd tell you.", "If I know the answer, I will tell you."], "Mệnh đề if ở quá khứ đơn (knew) là chuyện không có thật, nên mệnh đề chính phải là would + V. Nếu chuyện có thể xảy ra thật thì dùng cả câu loại 1: If I know…, I will…"),
  ],
  freeSpeaking: free(
    "What would you do if you had a whole month off work or school?",
    "Tưởng tượng bạn được nghỉ trọn một tháng: bạn sẽ làm gì (loại 2)? Thêm một kế hoạch có thể xảy ra thật (loại 1) và một câu với unless.",
    "If I had a whole month off, I would travel around the north of Vietnam by motorbike. I'd visit Ha Giang and Sa Pa, and I'd take lots of photos. That's only a dream, but if the weather is good next spring, I'll do a short trip with my friends. I won't go far unless I save enough money first.",
  ),
  dialogueQuestions: [
    listenQ("b1-3-d1", "What will they do if it rains on Saturday?", "Yes, unless it rains. If it rains, we'll go to the cinema instead.", ["Stay at home", "Go to the cinema", "Go to Vung Tau by bus", "Move the trip to Sunday"], 1, "If it rains, we'll go to the cinema instead."),
    mc("b1-3-d2", "Why does Nam advise Jack to take the bus?", ["It's faster than a car.", "It's cheaper, and Jack won't need to drive.", "There is no parking in Vung Tau.", "Nam doesn't like driving."], 1, "Nam nói: It's cheaper, and you won't need to drive."),
    mc("b1-3-d3", "What would Jack do if he won the lottery?", ["Buy a house by the sea in Vung Tau", "Travel around the world", "Buy coffee for everyone"], 0, "If I won the lottery, I'd buy a house by the sea in Vung Tau!"),
  ],
  reading: reading({
    title: "Ask Anna: Should I move to the city?",
    text: `Dear Anna,

I'm twenty-four, and I work in a small clothes shop in my home town. My cousin has offered me a job in her café in Ho Chi Minh City. The salary is higher, but I'm worried. If I move, I'll be far from my parents, and I don't know anyone there except my cousin. What should I do?

Minh Thu

Dear Minh Thu,

Thank you for your letter. It's a big decision, and it's normal to feel nervous. First, think about the life you want in five years. If you stay in your home town, you'll feel safe, but will you be happy? If you move, you'll learn a lot and meet new people.

If I were you, I'd visit the city for a week before you decide. Stay with your cousin, work a few shifts in the café and see how you feel. You won't know if you like city life unless you try it.

Don't worry too much about your parents. If you call them every evening, they won't feel so far away. And remember, the decision isn't forever. If city life doesn't suit you, you can always come home.

Many readers tell me, "If I had the chance to start again, I would take more risks." Perhaps this is your chance.

Good luck!

Anna`,
    glossary: [
      ["offer", "mời, đề nghị (một công việc)"],
      ["nervous", "hồi hộp, lo lắng"],
      ["shift", "ca làm việc"],
      ["suit", "hợp với (ai)"],
      ["forever", "mãi mãi"],
      ["take a risk", "dám mạo hiểm"],
    ],
    questions: [
      mc("b1-3-r1", "What is Minh Thu's main problem?", ["She has lost her job in the clothes shop.", "She can't decide whether to take a job in another city.", "She doesn't get on with her cousin.", "Her parents want her to move."], 1, "Minh Thư phân vân có nên nhận việc ở quán cà phê của chị họ tại TP Hồ Chí Minh hay không."),
      mc("b1-3-r2", "What does Anna advise Minh Thu to do first?", ["Accept the job immediately", "Ask her parents for permission", "Spend a week in the city and work in the café", "Look for a job in a different shop"], 2, "If I were you, I'd visit the city for a week before you decide… work a few shifts in the café."),
      fill("b1-3-r3", "Anna says Minh Thu won't know if she likes city life ___ she tries it.", ["unless"], "You won't know if you like city life unless you try it."),
      mc("b1-3-r4", "According to Anna, how can Minh Thu stay close to her parents?", ["By going home every weekend", "By calling them every evening", "By asking them to move to the city"], 1, "If you call them every evening, they won't feel so far away."),
      mc("b1-3-r5", "What does Anna probably think about the job offer?", ["It's a good chance and worth trying.", "It's a bad idea because the salary is low.", "Minh Thu should say no because of her parents."], 0, "Anna khuyên đi thử, nhắc rằng có thể quay về, và kết thư bằng Perhaps this is your chance, nên bà thấy đây là cơ hội đáng thử."),
    ],
  }),
  speaking: [
    say("If it rains tomorrow, I'll stay at home.", "Nếu mai trời mưa, tôi sẽ ở nhà."),
    say("If I had more time, I would learn to cook.", "Nếu có nhiều thời gian hơn, tôi sẽ học nấu ăn."),
    say("If I were you, I'd ask for help.", "Nếu tôi là bạn, tôi sẽ nhờ người giúp."),
  ],
  dialogue: dialogue(
    "Lên kế hoạch đi Vũng Tàu",
    "Nam và Jack, đồng nghiệp người Úc, bàn chuyến đi Vũng Tàu cuối tuần: nhỡ trời mưa thì sao, đi lúc nào, đi bằng gì. Nói chuyện một lúc, hai người lại mơ mộng chuyện trúng xổ số.",
    { A: "Jack, đồng nghiệp người Úc", B: "Nam" },
    A("Are we still going to Vung Tau on Saturday?", "Thứ Bảy mình vẫn đi Vũng Tàu chứ?"),
    B("Yes, unless it rains. If it rains, we'll go to the cinema instead.", "Có, trừ khi trời mưa. Nếu trời mưa thì mình đi xem phim thay vào đó."),
    A("Good plan. If we leave at six, we'll miss the traffic.", "Được đấy. Nếu mình đi lúc sáu giờ thì sẽ tránh được tắc đường."),
    B("Six is too early for me! If I got up at five, I'd be half asleep all day.", "Sáu giờ sớm quá với tôi! Nếu tôi dậy lúc năm giờ thì cả ngày tôi sẽ ngủ gật mất."),
    A("OK, seven then. Should I take the bus or rent a car?", "Vậy thì bảy giờ. Tôi nên đi xe khách hay thuê ô tô?"),
    B("If I were you, I'd take the bus. It's cheaper, and you won't need to drive.", "Nếu tôi là anh, tôi sẽ đi xe khách. Rẻ hơn, và anh không cần phải lái."),
    A("Good advice. I'll book two tickets tonight if you send me the time.", "Lời khuyên hay đấy. Tối nay tôi sẽ đặt hai vé nếu anh gửi tôi giờ xe chạy."),
    B("Sure. By the way, what would you do if you won the lottery?", "Được. À mà nếu trúng xổ số thì anh sẽ làm gì?"),
    A("If I won the lottery, I'd buy a house by the sea in Vung Tau!", "Nếu trúng xổ số, tôi sẽ mua một căn nhà sát biển ở Vũng Tàu!"),
    B("Me too. But right now I can't afford a coffee by the sea!", "Tôi cũng thế. Nhưng bây giờ thì đến cốc cà phê cạnh biển tôi còn chẳng đủ tiền!"),
    A("Ha! Don't worry. If the weather is nice, I'll buy the coffee.", "Ha! Đừng lo. Nếu trời đẹp, tôi sẽ mời cà phê."),
    B("Deal. I'll text you the bus time unless I forget!", "Chốt nhé. Tôi sẽ nhắn giờ xe cho anh, trừ khi tôi quên!"),
  ),
  task: task({
    prompt: "Người bạn thân đang phân vân có nên nhận một công việc mới ở thành phố khác. Viết một tin nhắn (khoảng 90–120 từ) cho bạn ấy: điều gì sẽ xảy ra nếu bạn ấy nhận hoặc không nhận, và bạn sẽ làm gì nếu bạn là bạn ấy.",
    hints: [
      "Dùng câu điều kiện loại 1 (If + hiện tại đơn, will + V) cho điều có thể xảy ra thật.",
      "Dùng If I were you, I'd… để đưa lời khuyên.",
      "Thêm một câu loại 2 (If + quá khứ đơn, would + V) về điều bạn tưởng tượng.",
      "Thêm một câu với unless.",
    ],
    model: "Hi Mai, I've thought a lot about your job offer. If you take the job in Saigon, you'll earn a higher salary and you'll learn a lot from a bigger company. Of course, you'll miss your family, but you can fly home every month. If you stay here, nothing will change, and I think you'll feel bored soon. If I were you, I'd accept the offer. If I had a chance like that, I wouldn't wait! But don't decide unless you feel ready. Talk to your parents first, because their support is important. Call me tonight if you want to talk. I'll always be here for you.",
    checklist: [
      "Có ít nhất 2 câu loại 1: If + hiện tại đơn, vế còn lại will / won't + V.",
      "Không có will trong mệnh đề if.",
      "Có câu If I were you, I'd… để khuyên.",
      "Có ít nhất 1 câu loại 2: If + quá khứ đơn, would + V.",
      "Có 1 câu unless, và sau unless là câu khẳng định.",
      "Mệnh đề if đứng đầu câu thì có dấu phẩy.",
    ],
    minWords: 90,
  }),
});

const congViecVaPhongVan = lesson({
  slug: "cong-viec-va-phong-van",
  title: "Công việc và phỏng vấn",
  minutes: 32,
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
      mistake("I graduated university in 2019.", "I graduated from university in 2019.", "Tiếng Việt nói “tốt nghiệp đại học” không cần giới từ, nên người học quên from. Cách chuẩn là graduate from + trường. (Tiếng Anh-Mỹ thân mật đôi khi nói graduated university, nhưng khi viết và phỏng vấn hãy dùng from.)"),
      teacher("Tôi đã ngồi hội đồng tuyển dụng nhiều lần, và điều tôi nhớ nhất là **người được chọn thường không nói hay nhất, mà nói cụ thể nhất**. Các bạn hãy chuẩn bị sẵn ba câu chuyện ngắn về công việc cũ, mỗi chuyện gồm tình huống, việc mình làm và kết quả. Tập nói to trước gương, bấm giờ không quá một phút. Và trước khi bước vào phòng, nhắc mình một câu: tôi thấy thì -ed, nó gây ra thì -ing."),
      summary(
        "**-ed** nói cảm xúc của người (I'm bored, I'm interested); **-ing** nói tính chất của việc gây ra cảm xúc (the job is boring).",
        "Kinh nghiệm tính đến bây giờ: **have / has + V3**; công việc cũ đã kết thúc: **quá khứ đơn** (worked there from 2018 to 2020).",
        "Nhớ giới từ đi kèm: interested **in**, experience **in**, responsible **for**, apply **for**, graduate **from**, work **as** + nghề.",
        "Nêu điểm mạnh luôn kèm một ví dụ cụ thể: One of my strengths is that… For example, …",
        "Đuôi -ed đọc /ɪd/ sau /t/ và /d/ (interested, excited); đừng nuốt âm cuối.",
      ),
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
    mc("b1-4-2", "I ___ as a waiter from 2015 to 2017. Then I became a teacher.", ["have worked", "worked", "work", "am working"], 1, "Công việc cũ đã kết thúc, có mốc thời gian rõ ràng (from 2015 to 2017), nên dùng quá khứ đơn: worked. Have worked chỉ dùng cho kinh nghiệm kéo dài đến bây giờ."),
    fill("b1-4-3", "I'm ___ in working with international customers. (interest)", ["interested"], "Cảm xúc của bản thân: interested in + V-ing."),
    fill("b1-4-4", "The news was very ___. We didn't get the contract. (disappoint)", ["disappointing"], "Tin tức là sự việc gây ra cảm xúc nên dùng -ing."),
    reorder("b1-4-5", "I have never worked in a bank.", "Hiện tại hoàn thành với never: nói về kinh nghiệm (chưa từng làm) tính đến bây giờ. Never đứng giữa have và V3."),
    reorder("b1-4-6", "My biggest strength is that I learn fast.", "My biggest strength is that + mệnh đề: cách nêu điểm mạnh quen thuộc trong phỏng vấn. Trạng từ fast luôn đứng sau động từ learn."),
    listen("b1-4-7", "I'm confident that I can do this job well.", ["Tôi không chắc mình làm được việc này.", "Tôi đã làm công việc này rất lâu rồi.", "Tôi tin rằng mình có thể làm tốt công việc này."], 2),
    listen("b1-4-8", "The salary is good, but the job is quite tiring.", ["Lương thấp nhưng công việc nhẹ nhàng.", "Lương tốt, nhưng công việc khá mệt.", "Công việc thú vị và lương cũng tốt."], 1, "Tiring: khiến người ta mệt, dùng để mô tả công việc."),
    correct("b1-4-9", "I was very boring at the meeting, so I nearly fell asleep.", "I was very bored at the meeting, so I nearly fell asleep.", "Nói cảm giác của bản thân thì dùng -ed: bored. I was boring nghĩa là “tôi là người nhàm chán”."),
    correct("b1-4-10", "I am responsible about a team of six people.", "I am responsible for a team of six people.", "Chịu trách nhiệm về ai, việc gì thì dùng responsible for. Tiếng Việt nói “chịu trách nhiệm về” nên người học hay chọn nhầm about."),
  ],
  freeSpeaking: free(
    "Tell me about a job or project you have done. What did you find interesting or tiring?",
    "Nói về một công việc hoặc dự án bạn đã làm: bạn làm bao lâu, điều gì thú vị hoặc mệt mỏi, và một điểm mạnh của bạn kèm ví dụ.",
    "I've worked as a receptionist at a hotel in Hoi An for two years. The job is sometimes tiring because I work long shifts, but it's never boring. I'm really interested in meeting guests from different countries. One of my strengths is that I stay calm when guests are angry. For example, last week I solved a booking problem in five minutes.",
  ),
  dialogueQuestions: [
    listenQ("b1-4-d1", "What did Tuan do before he worked in customer service?", "I worked as a receptionist at a hotel for one year. It was tiring, but I learnt a lot.", ["He was a receptionist at a hotel.", "He was a sales assistant.", "He was a tour guide.", "He worked in a bank."], 0, "I worked as a receptionist at a hotel for one year."),
    mc("b1-4-d2", "What example does Tuan give of his main strength?", ["He learnt Japanese in six months.", "He solved an angry customer's problem in ten minutes.", "He managed a team of twenty people."], 1, "Last month a customer was very angry, and I solved his problem in ten minutes."),
    mc("b1-4-d3", "What is Tuan a little worried about?", ["The salary", "The long hours", "Working with international customers", "His English"], 1, "I'm a little worried about the long hours."),
  ],
  reading: reading({
    title: "My worst interview and what it taught me",
    text: `When I graduated from university, I applied for a job at an international bank. I had good marks and I felt confident, so I didn't prepare much. That was my first mistake.

The interview started badly. I arrived late because I got lost, and I was so embarrassed that I forgot the manager's name. When she asked, "Why are you interested in this job?", I said, "Because the salary is good." She didn't smile.

Then she asked me about my strengths. I said, "I'm a hard worker and I'm good with people," but I couldn't give her a single example. I could see that she was bored. After twenty minutes, she thanked me and said goodbye. Of course, I didn't get the job. I was really disappointed, but the experience was useful.

Since then, I've had many interviews, and for the last three years I've worked as an interviewer myself. Here is my advice. First, find out about the company before you go. Second, prepare three short stories about problems you have solved. Finally, never say that money is your only reason. Interviewers want to hear that you find the work interesting and that you're excited to learn.

An interview can be a tiring experience, but with good preparation, it can also be an exciting one.`,
    glossary: [
      ["marks", "điểm số"],
      ["embarrassed", "ngượng, xấu hổ"],
      ["hard worker", "người chăm chỉ"],
      ["a single example", "dù chỉ một ví dụ"],
      ["interviewer", "người phỏng vấn"],
      ["preparation", "sự chuẩn bị"],
    ],
    questions: [
      mc("b1-4-r1", "What is the main purpose of the text?", ["To advertise a job at an international bank", "To tell a story about a bad interview and give advice", "To explain how banks choose new managers", "To complain about an unfriendly manager"], 1, "Người viết kể buổi phỏng vấn tệ nhất của mình rồi đưa ra lời khuyên."),
      mc("b1-4-r2", "Why did the writer arrive late?", ["The bus was late.", "The writer got lost.", "The interview time changed.", "The writer overslept."], 1, "I arrived late because I got lost."),
      fill("b1-4-r3", "When the writer couldn't give an example, the manager looked ___.", ["bored"], "I could see that she was bored. Người quản lý cảm thấy chán nên dùng -ed."),
      mc("b1-4-r4", "Why didn't the manager smile when the writer talked about the salary?", ["She thought the salary was too low.", "She wanted to hear a better reason for choosing the job.", "She didn't understand the answer.", "She was tired after a long day."], 1, "Đoạn bốn cho biết người phỏng vấn muốn nghe bạn thấy công việc thú vị, không phải chỉ vì tiền. Vì vậy câu trả lời về lương làm bà không hài lòng."),
      mc("b1-4-r5", "What does the writer do now?", ["Works at the same bank", "Interviews people for jobs", "Teaches at a university"], 1, "For the last three years I've worked as an interviewer myself."),
    ],
  }),
  speaking: [
    say("I've worked as an accountant for four years.", "Tôi đã làm kế toán được bốn năm."),
    say("I'm really interested in this position.", "Tôi thực sự quan tâm đến vị trí này."),
    say("One of my strengths is that I stay calm under pressure.", "Một trong những điểm mạnh của tôi là giữ được bình tĩnh khi chịu áp lực."),
  ],
  dialogue: dialogue(
    "Buổi phỏng vấn xin việc",
    "Tuấn phỏng vấn vào vị trí chăm sóc khách hàng ở một công ty nước ngoài. Bà Brown, trưởng phòng nhân sự, hỏi về kinh nghiệm, lý do ứng tuyển và điểm mạnh của anh.",
    { A: "Bà Brown, người phỏng vấn", B: "Tuấn, ứng viên" },
    A("Good morning, Tuan. Please tell me about yourself.", "Chào anh Tuấn. Anh hãy giới thiệu về bản thân nhé."),
    B("Good morning. I graduated from university five years ago, and I've worked in customer service for four years.", "Chào bà. Tôi tốt nghiệp đại học cách đây năm năm, và tôi làm dịch vụ khách hàng được bốn năm rồi."),
    A("And what did you do before that?", "Thế trước đó anh làm gì?"),
    B("I worked as a receptionist at a hotel for one year. It was tiring, but I learnt a lot.", "Tôi làm lễ tân ở một khách sạn một năm. Công việc khá mệt, nhưng tôi học được rất nhiều."),
    A("Why are you interested in this position?", "Vì sao anh quan tâm đến vị trí này?"),
    B("I'm really interested in working with international customers, and your projects are very exciting.", "Tôi thực sự thích làm việc với khách hàng quốc tế, và các dự án của công ty rất thú vị."),
    A("What are your main strengths?", "Điểm mạnh chính của anh là gì?"),
    B("One of my strengths is that I stay calm under pressure. For example, last month a customer was very angry, and I solved his problem in ten minutes.", "Một trong những điểm mạnh của tôi là giữ được bình tĩnh khi chịu áp lực. Ví dụ, tháng trước có một khách hàng rất tức giận, và tôi đã giải quyết vấn đề của anh ấy trong mười phút."),
    A("That's impressive. Have you ever been responsible for a team?", "Rất ấn tượng. Anh đã bao giờ phụ trách một nhóm chưa?"),
    B("Yes. I've been responsible for a team of five people since last year.", "Có. Từ năm ngoái đến giờ tôi phụ trách một nhóm năm người."),
    A("Is there anything that worries you about this job?", "Có điều gì ở công việc này khiến anh lo lắng không?"),
    B("I'm a little worried about the long hours, but I'm excited about the challenge.", "Tôi hơi lo về giờ làm dài, nhưng tôi rất hào hứng với thử thách này."),
    A("Thank you, Tuan. It was an interesting interview. We'll call you next week.", "Cảm ơn anh Tuấn. Buổi phỏng vấn rất thú vị. Tuần sau chúng tôi sẽ gọi cho anh."),
    B("Thank you very much. I'll wait for your call.", "Cảm ơn bà rất nhiều. Tôi sẽ chờ điện thoại của bà."),
  ),
  task: task({
    prompt: "Viết câu trả lời (khoảng 100–130 từ) của bạn cho yêu cầu phỏng vấn: “Tell me about yourself and your strengths.” Nói về học vấn, công việc cũ, kinh nghiệm hiện tại, lý do bạn quan tâm đến vị trí và một điểm mạnh.",
    hints: [
      "Kinh nghiệm đến bây giờ dùng have / has + V3; công việc cũ đã kết thúc dùng quá khứ đơn.",
      "Dùng đúng ít nhất hai tính từ -ed / -ing: cảm xúc của bạn là -ed, công việc là -ing.",
      "Nêu một điểm mạnh kèm một ví dụ cụ thể: One of my strengths is that… For example, …",
      "Nhớ giới từ: graduated from, interested in, responsible for, work as.",
    ],
    model: "I graduated from Hue University in 2018 with a degree in business. I worked as a sales assistant at a supermarket from 2018 to 2020. The job was tiring, but it taught me how to talk to customers. Since 2020, I've worked as a sales executive at an electronics company, and I've been responsible for ten big customers. I'm very interested in this position because I want to work with international clients. One of my strengths is that I stay calm under pressure. For example, last year a delivery was late, and I solved the problem before the customer got angry. I'm really excited about this opportunity.",
    checklist: [
      "Có ít nhất 1 câu have / has + V3 cho kinh nghiệm đến bây giờ và 1 câu quá khứ đơn cho công việc cũ.",
      "Dùng -ed cho cảm xúc của bạn (interested, excited) và -ing cho công việc hoặc sự việc (tiring, interesting).",
      "Có câu One of my strengths is that… kèm một ví dụ cụ thể.",
      "Đúng giới từ: graduated from, interested in, responsible for, work as.",
      "Không có câu I'm interesting hay I'm boring khi muốn nói về cảm xúc của mình.",
    ],
    minWords: 100,
  }),
});

const bayToYKien = lesson({
  slug: "bay-to-y-kien",
  title: "Bày tỏ ý kiến",
  minutes: 32,
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
      teacher("Nhiều bạn hay hỏi tôi: “Phản đối sếp có sao không?” Tôi luôn trả lời: **phản đối không sao, cách phản đối mới quan trọng**. Công thức tôi dạy ở mọi lớp chỉ có ba bước: công nhận ý người kia, nói ý mình, đưa một lý do. Các bạn hãy thuộc lòng ba câu I see your point, but…, I'm not so sure… và In my opinion…, rồi mỗi ngày dùng thử một lần, kể cả khi bàn chuyện ăn trưa."),
      summary(
        "Nêu ý kiến: **I think… / In my opinion… / As far as I'm concerned…**",
        "Phản đối lịch sự theo ba bước: công nhận ý người kia, nói ý mình, đưa lý do: **I see your point, but…**",
        "**Agree** là động từ: I agree with you, không nói I am agree.",
        "**Although** nối hai vế trong một câu và không đi kèm but; **however** đứng đầu câu mới, có dấu phẩy theo sau.",
        "Nói **I don't think it works**, tự nhiên và mềm hơn I think it doesn't work.",
      ),
    ],
  },
  words: [
    word("opinion", "/əˈpɪn.jən/", "ý kiến, quan điểm", "In my opinion, the plan is too expensive.", "o|pin|ion", 1),
    word("agree", "/əˈɡriː/", "đồng ý", "I agree with you completely.", "a|gree", 1),
    word("however", "/haʊˈev.ə/", "tuy nhiên", "The hotel was nice. However, it was far from the beach.", "how|ev|er", 1),
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
    correct("b1-5-9", "Although the film was long, but it was very interesting.", ["Although the film was long, it was very interesting.", "The film was long, but it was very interesting."], "Although và but không đi cùng nhau trong một câu. Giữ although thì bỏ but, hoặc bỏ although và giữ but."),
    correct("b1-5-10", "I'm not agree with this plan.", ["I don't agree with this plan.", "I disagree with this plan."], "Agree là động từ, nên phủ định bằng don't: I don't agree. Không dùng am / am not trước agree."),
  ],
  freeSpeaking: free(
    "Do you think students should be allowed to use phones in class? Why or why not?",
    "Nêu rõ quan điểm của bạn, đưa hai lý do, rồi công nhận và phản hồi lịch sự một ý kiến ngược lại. Dùng in my opinion, because, however, although.",
    "In my opinion, students should be allowed to use phones in class, but only for learning. Phones help us look up new words and find information quickly. However, some students play games or chat with friends. I see why teachers are worried, but I don't think a total ban is the answer. Although rules are important, teachers can also show us how to use phones wisely.",
  ),
  dialogueQuestions: [
    listenQ("b1-5-d1", "Why does Huong like the idea of working from home on Fridays?", "In my opinion, it's a great idea because we'll save a lot of time on the road.", ["They'll save time on the road.", "She feels lonely in the office.", "The internet is faster at home.", "Customers prefer online meetings."], 0, "Hương đưa lý do với because: we'll save a lot of time on the road."),
    mc("b1-5-d2", "What does Huong suggest about meetings with customers?", ["Holding all of them online", "Meeting customers on Thursday", "Cancelling them on Fridays and Mondays"], 1, "We can meet customers on Thursday and work from home on Friday."),
    mc("b1-5-d3", "What is the main disadvantage that Huong mentions?", ["Some people don't have a good internet connection at home.", "Customers will be angry.", "The office will be too quiet.", "The company will spend more money."], 0, "The main disadvantage is the internet. Some of us don't have a good connection at home."),
  ],
  reading: reading({
    title: "Letter to the editor: Car-free weekend evenings",
    text: `I am writing about the city's decision to keep cars and motorbikes out of the streets around Hoan Kiem Lake on weekend evenings. In my opinion, it is an excellent idea, and I hope the city will keep it and try it on Sunday mornings too.

Firstly, the city centre is too noisy and polluted. On a car-free evening, families can walk, children can play safely and old people can sit by the lake without breathing in smoke. Secondly, local businesses may earn more money, because people walk slowly and stop at cafés and shops.

However, not everyone agrees. Some shop owners say that their customers will not come if they cannot park nearby. I see their point, but I don't think this is a serious problem. Although parking is important, most visitors to the area come by bus, by taxi or on foot at weekends. The city could also open a few car parks outside the area.

Other people argue that the plan will cause traffic jams on nearby roads. This is a fair argument. As far as I'm concerned, the answer is better public transport, not more cars.

Many cities in Europe and Asia close their centres to traffic on certain days, and most people there are happy with the results. I believe Hanoi can do the same.

Nguyen Thanh Ha, Ba Dinh, Hanoi`,
    glossary: [
      ["editor", "tổng biên tập (báo)"],
      ["polluted", "ô nhiễm"],
      ["breathe in", "hít vào"],
      ["park", "đỗ xe"],
      ["traffic jam", "tắc đường"],
      ["fair", "hợp lý, công bằng"],
      ["public transport", "phương tiện công cộng"],
    ],
    questions: [
      mc("b1-5-r1", "What is the writer's main opinion?", ["Cars should be banned from Hanoi forever.", "Keeping traffic out of the streets around the lake is a good idea.", "Shop owners should get more parking spaces.", "Public transport in Hanoi is too expensive."], 1, "Ngay đoạn đầu: In my opinion, it is an excellent idea."),
      mc("b1-5-r2", "Why are some shop owners against the plan?", ["They think customers won't come if they can't park.", "They don't want to open on Sundays.", "They think the lake area is too noisy."], 0, "Some shop owners say that their customers will not come if they cannot park nearby."),
      fill("b1-5-r3", "The writer thinks the answer to traffic jams is better public ___.", ["transport"], "As far as I'm concerned, the answer is better public transport."),
      mc("b1-5-r4", "How does the writer feel about the shop owners' worry?", ["It is understandable but not very serious.", "It is the most important problem.", "It is completely silly.", "It is a good reason to cancel the plan."], 0, "I see their point, but I don't think this is a serious problem: người viết công nhận ý của họ nhưng cho rằng vấn đề không lớn."),
      mc("b1-5-r5", "Why does the writer mention cities in Europe and Asia?", ["To show that the idea has worked in other places", "To complain that Hanoi is behind other cities", "To suggest that tourists should visit them"], 0, "Người viết nhắc các thành phố khác, nơi mọi người hài lòng với kết quả, để chứng minh ý tưởng này khả thi: I believe Hanoi can do the same."),
    ],
  }),
  speaking: [
    say("In my opinion, reading is the best way to learn new words.", "Theo tôi, đọc là cách tốt nhất để học từ mới."),
    say("I see your point, but I don't completely agree.", "Tôi hiểu ý bạn, nhưng tôi không hoàn toàn đồng ý."),
    say("Although it's difficult, I really enjoy learning English.", "Mặc dù khó, tôi thực sự thích học tiếng Anh."),
  ],
  dialogue: dialogue(
    "Có nên làm việc tại nhà ngày thứ Sáu?",
    "Trong cuộc họp nhóm, anh David, trưởng nhóm người nước ngoài, hỏi ý kiến Hương về kế hoạch cho cả nhóm làm việc tại nhà mỗi thứ Sáu. Hương đồng ý một phần và phản đối lịch sự một phần.",
    { A: "David, trưởng nhóm", B: "Hương, nhân viên" },
    A("We're thinking about working from home every Friday. What do you think, Huong?", "Chúng ta đang tính làm việc tại nhà mỗi thứ Sáu. Hương thấy thế nào?"),
    B("In my opinion, it's a great idea because we'll save a lot of time on the road.", "Theo tôi, đó là ý rất hay vì chúng ta sẽ đỡ mất nhiều thời gian đi đường."),
    A("I agree. However, some people say they feel lonely at home.", "Tôi đồng ý. Tuy nhiên, một số người nói họ thấy cô đơn khi ở nhà."),
    B("I see your point, but it's only one day a week.", "Tôi hiểu ý anh, nhưng mỗi tuần chỉ có một ngày thôi."),
    A("That's true. What about meetings with customers?", "Đúng vậy. Thế còn các cuộc họp với khách hàng thì sao?"),
    B("I'm not so sure about that. Although online meetings are convenient, some customers prefer to meet face to face.", "Chuyện đó thì tôi không chắc lắm. Mặc dù họp trực tuyến tiện lợi, một số khách hàng vẫn thích gặp trực tiếp."),
    A("So what do you suggest?", "Vậy Hương đề xuất thế nào?"),
    B("As far as I'm concerned, we can meet customers on Thursday and work from home on Friday.", "Theo tôi thấy, mình có thể gặp khách vào thứ Năm và làm việc tại nhà vào thứ Sáu."),
    A("That's a strong argument. Are there any disadvantages?", "Lập luận thuyết phục đấy. Có bất lợi nào không?"),
    B("The main disadvantage is the internet. Some of us don't have a good connection at home.", "Bất lợi chính là mạng internet. Một số người trong nhóm không có mạng tốt ở nhà."),
    A("Good point. I don't think it's a big problem. The company can help with that.", "Ý hay. Tôi không nghĩ đó là vấn đề lớn. Công ty có thể hỗ trợ chuyện đó."),
    B("Then I completely agree with the plan.", "Vậy thì tôi hoàn toàn đồng ý với kế hoạch này."),
  ),
  task: task({
    prompt: "Công ty bạn đề xuất rút ngắn giờ nghỉ trưa từ chín mươi phút xuống ba mươi phút để mọi người được về sớm hơn một tiếng. Viết một đoạn nêu ý kiến (khoảng 100–130 từ) gửi cả nhóm: bạn đồng ý hay phản đối, vì sao, và phản hồi lịch sự một ý kiến ngược lại.",
    hints: [
      "Mở đầu bằng In my opinion hoặc As far as I'm concerned để nêu rõ quan điểm.",
      "Đưa ít nhất hai lý do với because.",
      "Công nhận ý ngược lại trước khi phản đối: I see their point, but…",
      "Dùng although trong một câu và however ở đầu một câu mới.",
    ],
    model: "In my opinion, a shorter lunch break is a good idea because we can go home one hour earlier and avoid the traffic. I also think it is good for our families because we will have more time together in the evening. However, some colleagues like a long break, and they say they need a nap after lunch. I see their point, but I don't think a nap is more important than a free evening. Although a short lunch can be tiring at first, we can take two small breaks in the afternoon. As far as I'm concerned, we should try it for one month and then decide together.",
    checklist: [
      "Câu đầu nêu rõ quan điểm bằng In my opinion, I think hoặc As far as I'm concerned.",
      "Có ít nhất 2 lý do với because.",
      "Có 1 câu công nhận ý ngược lại rồi mới phản đối (I see their point, but…).",
      "Dùng although mà không có but trong cùng câu.",
      "Có 1 câu however đứng đầu câu mới, có dấu phẩy theo sau.",
      "Không có câu I am agree hay You're wrong.",
    ],
    minWords: 100,
  }),
});

const tinTucVaSuViec = lesson({
  slug: "tin-tuc-va-su-viec",
  title: "Tin tức và sự việc",
  minutes: 32,
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
      tip("Câu bị động cần V3, nên hãy ôn kỹ những động từ bất quy tắc hay gặp trong tin tức: **build, built, built**; **write, wrote, written**; **sell, sold, sold**; **take, took, taken**. Khi đọc to, nhớ đọc rõ âm cuối của V3 như built, sold, damaged."),
      p("Mẹo đọc tin nhanh: **tiêu đề báo** thường bỏ be và mạo từ cho gọn. “Bridge opened in Da Nang” nghĩa là The bridge was opened in Da Nang; “Three injured in crash” nghĩa là Three people were injured in a crash. Khi đọc hoặc nghe một bản tin, hãy tìm năm ý chính: **what** (chuyện gì), **who** (ai), **where** (ở đâu), **when** (khi nào), **why** (vì sao). Nắm được năm ý này là bạn đã hiểu phần chính của bản tin, dù còn vài từ chưa biết."),
      mistake("The thief was arrest yesterday.", "The thief was arrested yesterday.", "Tiếng Việt động từ không đổi dạng, “bị bắt” vẫn là “bắt”, nên người học quên thêm -ed. Sau was / were phải là V3 (arrested), không dùng động từ nguyên mẫu."),
      mistake("The accident was happened at night.", "The accident happened at night.", "Người học thấy tai nạn là chuyện “không ai muốn”, giống như bị làm gì đó, nên thêm was. Nhưng happen là nội động từ, không có tân ngữ, nên không bao giờ dùng ở dạng bị động."),
      mistake("This house built in 1990.", "This house was built in 1990.", "Tiếng Việt nói “Ngôi nhà này xây năm 1990” mà không cần chữ “được”, nên người học bỏ luôn be. Tiếng Anh bắt buộc phải có was / were trước V3."),
      teacher("Có một bài tập tôi giao cho mọi lớp và chưa bao giờ thấy thừa: **mỗi sáng đọc một mẩu tin tiếng Anh ngắn, gạch chân mọi cụm be + V3**, rồi tự hỏi “Ai làm việc này, và vì sao bài báo không nói ra?” Làm vậy một tuần, các bạn sẽ thấy câu bị động không còn là công thức trong sách, mà là cách người bản xứ kể chuyện hằng ngày."),
      summary(
        "Câu bị động: **be + V3**. Hiện tại đơn: am / is / are + V3; quá khứ đơn: was / were + V3.",
        "Dùng bị động khi **sự việc quan trọng hơn người làm**; chỉ thêm **by** khi người làm là thông tin đáng chú ý.",
        "Sau be luôn là V3 (was arrested), và không được bỏ be (This house was built in 1990).",
        "**Happen** không có dạng bị động: The accident happened, không nói was happened.",
        "Bị động là trung tính: cả “được” và “bị” trong tiếng Việt đều là be + V3.",
      ),
    ],
  },
  words: [
    word("report", "/rɪˈpɔːt/", "đưa tin; bản tin", "The accident was reported on the news.", "re|port", 1),
    word("government", "/ˈɡʌv.ə.mənt/", "chính phủ", "The new law was announced by the government.", "gov|ern|ment", 0, "Chữ n ở giữa thường không đọc: GUV-ə-mənt. Từ điển Cambridge cũng ghi cách đọc chậm có /n/: /ˈɡʌv.ən.mənt/."),
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
    correct("b1-6-9", "The new school was build in 2021.", "The new school was built in 2021.", "Sau was / were phải là V3. Build là động từ bất quy tắc: build, built, built."),
    correct("b1-6-10", "A strange thing was happened at the station yesterday.", "A strange thing happened at the station yesterday.", "Happen là nội động từ, không có tân ngữ, nên không bao giờ ở dạng bị động. Bỏ was."),
  ],
  freeSpeaking: free(
    "What is an interesting piece of news from your town or city recently?",
    "Kể một tin gần đây ở nơi bạn sống như một phóng viên: chuyện gì, ở đâu, khi nào. Dùng câu bị động is / are + V3 và was / were + V3.",
    "Recently, a new park was opened near my house. It was built on an old car park, and hundreds of trees were planted there. Now the park is used by families every evening, and free exercise classes are held there on Sundays. Unfortunately, some rubbish is left on the grass at weekends, so more bins are needed.",
  ),
  dialogueQuestions: [
    listenQ("b1-6-d1", "Where were the families moved after the flood?", "Luckily, nobody was injured. Many families were moved to a school nearby.", ["To a hospital", "To a hotel in Da Nang", "To a school nearby", "To their relatives' homes"], 2, "Many families were moved to a school nearby."),
    mc("b1-6-d2", "Who built the new bridge in Da Nang?", ["A Japanese company", "A Vietnamese company", "The local government"], 1, "It was built by a Vietnamese company in only two years."),
    mc("b1-6-d3", "Why does Minh read the news in English?", ["It's good practice, because news stories use a lot of passive sentences.", "His boss asks him to.", "Vietnamese news is too short.", "He wants to become a journalist."], 0, "A lot of sentences in the news are written in the passive, so it's good practice for me."),
  ],
  reading: reading({
    title: "Old market reopens after fire",
    text: `SONG XANH – The Central Market in the small town of Song Xanh was reopened to the public last Saturday, eight months after a fire destroyed nearly half of its stalls.

The fire started early in the morning on the fourteenth of March. Luckily, the market was still closed at that time, and nobody was injured. More than sixty stalls were damaged, and many sellers lost everything they had. The cause of the fire was found a few days later: an old electrical cable behind a food stall.

After the fire, the market was rebuilt by a local company. The new building is made of steel and brick, and smoke alarms are fitted in every section. According to the city, around twenty billion dong was spent on the work. Part of the money was given by local businesses and tourists.

At the opening ceremony, flowers and small gifts were handed out to the sellers. Mrs Tran Thi Mai has sold fruit at the market for twenty years, and she was one of the first sellers to return. "I cried when I saw the fire on the news," she said. "Today I'm crying again, but this time I'm crying because I'm happy."

The market is open every day from six in the morning until seven in the evening. Visitors are asked to use the new car park behind the building.`,
    glossary: [
      ["stall", "sạp hàng, quầy hàng"],
      ["destroy", "phá hủy"],
      ["electrical cable", "dây điện"],
      ["steel", "thép"],
      ["brick", "gạch"],
      ["fit", "lắp đặt"],
      ["ceremony", "buổi lễ"],
      ["hand out", "phát, trao"],
    ],
    questions: [
      mc("b1-6-r1", "What is the news report mainly about?", ["A new market that was built for tourists", "The reopening of a market after a fire", "A fire that closed a market forever", "Why fires often happen in old markets"], 1, "Tiêu đề và câu đầu: chợ được mở cửa lại tám tháng sau vụ cháy."),
      mc("b1-6-r2", "What caused the fire?", ["A gas cooker in a food stall", "An old electrical cable", "A tourist's cigarette", "A storm"], 1, "The cause of the fire was found a few days later: an old electrical cable behind a food stall."),
      fill("b1-6-r3", "Nobody was ___ in the fire because the market was still closed.", ["injured", "hurt"], "Luckily, the market was still closed at that time, and nobody was injured."),
      mc("b1-6-r4", "What can we guess about the new building?", ["It is safer than the old one.", "It is smaller than the old one.", "It was paid for only by tourists.", "It is closed on Sundays."], 0, "Chợ mới xây bằng thép và gạch, có báo khói ở mọi khu, nên ta suy ra nó an toàn hơn chợ cũ. Chợ mở cửa mọi ngày, và tiền đến từ nhiều nguồn chứ không chỉ du khách."),
      mc("b1-6-r5", "Where should visitors leave their cars and motorbikes?", ["In front of the market", "In the new car park behind the building", "Near the river"], 1, "Visitors are asked to use the new car park behind the building."),
    ],
  }),
  speaking: [
    say("Thousands of books are sold online every day.", "Hàng nghìn cuốn sách được bán trực tuyến mỗi ngày."),
    say("The old market was rebuilt last year.", "Khu chợ cũ đã được xây lại vào năm ngoái."),
    say("Luckily, nobody was injured in the fire.", "May mắn là không ai bị thương trong vụ cháy."),
  ],
  dialogue: dialogue(
    "Bàn tin tức buổi sáng",
    "Giờ ăn sáng ở căng tin công ty, Minh và Sarah, đồng nghiệp người Anh, bàn về những tin tức vừa đọc: trận lũ ở miền Trung, cây cầu mới ở Đà Nẵng và một vụ trộm.",
    { A: "Minh", B: "Sarah, đồng nghiệp người Anh" },
    A("Did you see the news this morning? Hundreds of homes were damaged by the flood in Quang Tri.", "Chị đọc tin sáng nay chưa? Hàng trăm ngôi nhà bị lũ làm hư hại ở Quảng Trị."),
    B("Yes, I read about it. Was anyone injured?", "Rồi, tôi có đọc. Có ai bị thương không?"),
    A("Luckily, nobody was injured. Many families were moved to a school nearby.", "May mắn là không ai bị thương. Nhiều gia đình được chuyển đến một trường học gần đó."),
    B("That's good news. Were the roads closed?", "Thế thì tốt quá. Đường có bị đóng không?"),
    A("Yes, two main roads were closed, and some flights were cancelled.", "Có, hai tuyến đường chính bị đóng, và một số chuyến bay bị hủy."),
    B("I also read that a new bridge was opened in Da Nang last Sunday.", "Tôi còn đọc thấy một cây cầu mới được khánh thành ở Đà Nẵng hôm Chủ nhật tuần trước."),
    A("Right. It was built by a Vietnamese company in only two years.", "Đúng rồi. Cầu do một công ty Việt Nam xây chỉ trong hai năm."),
    B("Impressive! And what about the robbery at the jewellery shop? Was the thief arrested?", "Ấn tượng thật! Còn vụ trộm ở tiệm vàng thì sao? Tên trộm bị bắt chưa?"),
    A("Yes, he was arrested yesterday. The story was reported by a local journalist.", "Rồi, hắn bị bắt hôm qua. Chuyện này do một nhà báo địa phương đưa tin."),
    B("You read a lot of news in English, Minh. Is it difficult?", "Minh đọc nhiều tin bằng tiếng Anh nhỉ. Có khó không?"),
    A("Sometimes. A lot of sentences in the news are written in the passive, so it's good practice for me.", "Đôi khi. Rất nhiều câu trong bản tin được viết ở dạng bị động, nên đọc tin là cách luyện rất tốt cho tôi."),
    B("Good idea. Send me a story every morning, and I'll help you with the difficult words.", "Ý hay. Mỗi sáng anh gửi tôi một bản tin, tôi sẽ giúp anh những từ khó."),
  ),
  task: task({
    prompt: "Viết một bản tin ngắn (khoảng 90–120 từ) về một sự việc có thật hoặc tưởng tượng ở nơi bạn sống: một trận bão, một khu chợ hay cây cầu mới, một vụ trộm… Viết như một nhà báo: sự việc quan trọng hơn người làm.",
    hints: [
      "Trả lời đủ các ý what, where, when, và nếu có thể thì who, why.",
      "Dùng was / were + V3 cho sự việc đã xảy ra, is / are + V3 cho sự thật ở hiện tại.",
      "Chỉ thêm by khi người làm là thông tin quan trọng.",
      "Happen luôn ở dạng chủ động.",
    ],
    model: "A new night market was opened in Can Tho last Saturday. It was built by a local company in eighteen months, and it cost about fifty billion dong. More than two hundred stalls are rented to local sellers, and fresh food is brought from nearby farms every afternoon. The opening ceremony was attended by thousands of people, and the first customers were given free drinks. Unfortunately, a small accident happened in the car park, but nobody was injured. The market is open every day from five in the afternoon until midnight. Visitors are asked to leave their motorbikes in the car park behind the market.",
    checklist: [
      "Có ít nhất 3 câu was / were + V3 cho sự việc đã xảy ra.",
      "Có ít nhất 1 câu is / are + V3 ở hiện tại đơn.",
      "Sau be luôn là V3, không có câu kiểu was arrest hay was build.",
      "Không viết happen ở dạng bị động.",
      "By chỉ xuất hiện khi người làm là thông tin đáng chú ý.",
      "Bản tin trả lời được what, where và when.",
    ],
    minWords: 90,
  }),
});

export const tiengAnhB1: Course = {
  slug: "tieng-anh-b1",
  title: "Tiếng Anh B1: Tự tin trò chuyện",
  level: "B1",
  goal: "lo-trinh",
  summary: "Cho người đã giao tiếp cơ bản: kể chuyện mạch lạc, nói về kinh nghiệm, giả định và ước muốn, kể lại lời người khác, đọc hiểu tin tức và bày tỏ quan điểm của mình.",
  outcomes: [
    "Kể lại một câu chuyện hoặc trải nghiệm theo trình tự rõ ràng, dùng đúng các thì quá khứ và hoàn thành",
    "Nói về những việc đã làm được bao lâu, kế hoạch tương lai và điều có thể xảy ra",
    "Đưa ra giả định, lời khuyên, suy đoán; nói điều ước và điều tiếc nuối với wish",
    "Kể lại lời người khác bằng câu tường thuật và hỏi thông tin một cách lịch sự",
    "Trả lời phỏng vấn xin việc, nêu ý kiến, đồng ý và phản đối một cách lịch sự",
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
    chapter(1, "Kể chuyện và trải nghiệm", [keLaiMotChuyen, daDuocBaoLau, nQuaKhuHoanThanh, nWouldVaUsedTo, nHienTaiHoanThanhTiepDien]),
    chapter(2, "Tương lai, suy đoán và giả định", [nTuongLaiTiepDienHoanThanh, nSuyDoanHienTai, nCauHoiDuoi, neuThi, nWishVaUsedTo]),
    chapter(3, "Công việc và giao tiếp", [congViecVaPhongVan, bayToYKien, nDongTuTheoSau, nCauHoiGianTiep, nCauTuongThuat]),
    chapter(4, "Tin tức, mô tả và đời sống", [tinTucVaSuViec, nBiDongMoiThi, nMenhDeQuanHe, nSoSanhNangCao, nCumDongTuThongDung]),
  ],
  finalTest: finalBank(
    [
      // chapter 1: past continuous / past simple, for / since, past perfect, present perfect continuous
      mc("b1-f01", "When I got to the cinema, the film ___, so I missed the beginning.", ["started", "had already started", "has started", "is starting"], 1, "Phim bắt đầu trước khi tôi đến (việc xảy ra trước một mốc quá khứ): had + V3."),
      fill("b1-f02", "I've known my best friend ___ we were in primary school.", ["since"], "We were in primary school là một mốc bắt đầu, nên dùng since."),
      reorder("b1-f03", "How long has your brother been learning the piano?", "How long + has + chủ ngữ + been + V-ing: hỏi việc kéo dài liên tục đến bây giờ."),
      listen("b1-f04", "I was having a shower when my boss called.", ["Tôi đang tắm thì sếp gọi.", "Tôi gọi cho sếp sau khi tắm xong.", "Sếp gọi trước khi tôi đi tắm.", "Tôi đã tắm xong khi sếp gọi."], 0, "Was having: việc đang diễn ra; called: việc ngắn chen vào."),
      correct("b1-f05", "I am living in this flat since 2019.", ["I have lived in this flat since 2019.", "I have been living in this flat since 2019."], "Việc bắt đầu từ năm 2019 và vẫn còn đến bây giờ: have lived hoặc have been living, không dùng hiện tại tiếp diễn với since."),
      // chapter 2: future continuous / perfect, deduction, conditionals, wish and be used to
      mc("b1-f06", "Tom's car isn't outside, and his lights are off. He ___ be at home.", ["must", "can't", "mustn't", "has to"], 1, "Mọi dấu hiệu cho thấy anh ấy không ở nhà: can't + V (không thể nào). Mustn't nghĩa là cấm."),
      fill("b1-f07", "Don't call me at nine tomorrow. I ___ be flying to Tokyo then. (sẽ đang)", ["will", "'ll"], "Việc sẽ đang diễn ra tại một thời điểm trong tương lai: will be + V-ing."),
      reorder("b1-f08", "I wish I had a bigger kitchen.", "Ước về hiện tại: wish + quá khứ đơn (had). Thực tế là căn bếp bây giờ nhỏ."),
      listen("b1-f09", "If I had a car, I would drive you to the airport.", ["Nếu có ô tô, tôi sẽ chở bạn ra sân bay, nhưng tôi không có.", "Tôi sẽ chở bạn ra sân bay bằng ô tô của tôi.", "Nếu bạn có ô tô, hãy chở tôi ra sân bay.", "Tôi đã chở bạn ra sân bay bằng ô tô."], 0, "Câu điều kiện loại 2: If + quá khứ đơn, would + V, nói về chuyện không có thật ở hiện tại."),
      correct("b1-f10", "I'm not used to eat spicy food.", "I'm not used to eating spicy food.", "Be used to + V-ing: to là giới từ, nên phải là eating."),
      // chapter 3: -ed / -ing, although / however, verb patterns, indirect questions, reported speech
      mc("b1-f11", "Excuse me, do you know what time ___?", ["does the bank open", "the bank opens", "opens the bank", "the bank does open"], 1, "Câu hỏi gián tiếp: sau what time là trật tự câu kể, bỏ does và thêm -s: the bank opens."),
      fill("b1-f12", "I really enjoy ___ with customers from other countries. (work)", ["working"], "Sau enjoy là V-ing."),
      reorder("b1-f13", "He told me that he was moving to Hue.", "Told + người nghe (me) + that + câu đã lùi thì (was moving)."),
      listen("b1-f14", "The presentation was so boring that I nearly fell asleep.", ["Bài thuyết trình chán đến mức tôi suýt ngủ gật.", "Tôi thấy chán nên không đến buổi thuyết trình.", "Bài thuyết trình rất thú vị, tôi không buồn ngủ chút nào."], 0, "Boring mô tả bài thuyết trình gây ra cảm giác chán."),
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
