import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "cac-thi-hoan-thanh-tiep-dien",
  title: "Đã đang… được bao lâu: các thì hoàn thành tiếp diễn",
  minutes: 35,
  lecture: {
    title: "Quá khứ hoàn thành tiếp diễn và tương lai hoàn thành tiếp diễn",
    blocks: [
      p("Sáng thứ Hai, anh Nam vào họp muộn, mắt đỏ hoe, giọng khàn đặc. Chiều hôm đó sếp người Anh hỏi bạn chuyện gì đã xảy ra. Bạn muốn nói: “Lúc đó anh ấy mệt lắm, vì anh ấy **đã thức làm báo cáo suốt đêm**.” Nhiều bạn nói **He was tired because he worked all night**, nghe được nhưng mất đi ý quan trọng nhất: một việc **kéo dài liên tục** đến sát một thời điểm trong quá khứ và để lại **dấu vết**. Tiếng Anh có hẳn một thì cho ý này: **quá khứ hoàn thành tiếp diễn** (had been + V-ing)."),
      p("Ở B1, các bạn đã học **hiện tại hoàn thành tiếp diễn** (I have been waiting for an hour: tôi đợi được một tiếng rồi, tính đến bây giờ) và **quá khứ hoàn thành** (had + V3). Bài này ghép hai ý đó lại và dời mốc đi: mốc là **một thời điểm trong quá khứ** thì dùng **had been + V-ing**; mốc là **một thời điểm trong tương lai** thì dùng **will have been + V-ing**. Cả ba thì chung một câu hỏi: **tính đến mốc đó, việc này đã diễn ra được bao lâu?**"),
      table(
        ["Thì", "Công thức", "Tính đến mốc", "Ví dụ"],
        ["Hiện tại hoàn thành tiếp diễn", "have / has been + V-ing", "bây giờ", "I have been waiting for an hour."],
        ["Quá khứ hoàn thành tiếp diễn", "had been + V-ing", "một lúc trong quá khứ", "When the bus came, I had been waiting for an hour."],
        ["Tương lai hoàn thành tiếp diễn", "will have been + V-ing", "một lúc trong tương lai", "At six, I will have been waiting for an hour."],
      ),
      p("**Had been + V-ing** có hai cách dùng chính. Thứ nhất, nói **một việc đã kéo dài bao lâu** tính đến một mốc quá khứ, thường đi với **for, since, how long**. Thứ hai, giải thích **nguyên nhân** của một tình trạng nhìn thấy được ở quá khứ: người ướt, thở dốc, mắt đỏ, sàn nhà bừa bộn. Phủ định là **had not (hadn't) been + V-ing**, câu hỏi đảo **had** lên trước chủ ngữ: **How long had you been waiting?**"),
      ex("She was out of breath because she had been running.", "Cô ấy thở hổn hển vì cô ấy vừa chạy (một lúc lâu).", "Việc chạy đã dừng, nhưng dấu vết còn đó (thở hổn hển) tại mốc quá khứ was."),
      ex("By the time the ambulance arrived, we had been waiting for forty minutes.", "Đến lúc xe cứu thương tới thì chúng tôi đã đợi được bốn mươi phút.", "By the time + quá khứ đơn là mốc; had been waiting là quãng thời gian tính đến mốc đó."),
      ex("I hadn't been sleeping well for weeks, so I finally went to see a doctor.", "Tôi đã mất ngủ mấy tuần liền, nên cuối cùng tôi đi khám bác sĩ."),
      p("So với **quá khứ hoàn thành đơn** (had + V3), thì tiếp diễn nhấn vào **quá trình**, còn thì đơn nhấn vào **kết quả đã xong** hoặc **số lượng, số lần**."),
      table(
        ["Câu", "Nhấn vào", "Ý nghĩa"],
        ["He had painted the kitchen.", "Kết quả", "Bếp đã sơn xong."],
        ["He had been painting the kitchen.", "Quá trình, dấu vết", "Anh ấy sơn cả buổi, người còn dính sơn; có thể chưa xong."],
        ["She had written three reports by noon.", "Số lượng", "Đếm được: ba bản, đã xong."],
        ["She had been writing reports all morning.", "Thời lượng", "Cả buổi sáng ngồi viết."],
      ),
      ex("By next June, I will have been working here for ten years.", "Đến tháng Sáu năm sau là tôi làm ở đây được tròn mười năm.", "Will have been + V-ing: mốc tương lai đi với by, thời lượng đi với for. Tiếng Việt nói “được mười năm”, tiếng Anh cần cả hai phần."),
      mistake("She was drenched because she has been walking in the rain.", "She was drenched because she had been walking in the rain.", "Tiếng Việt không chia thì, chỉ cần “vì cô ấy đi dưới mưa” là đủ. Trong tiếng Anh, mốc ở đây là was (quá khứ), nên việc kéo dài đến mốc đó phải lùi về had been, không dùng has been."),
      mistake("We had been knowing each other for years before we worked together.", "We had known each other for years before we worked together.", "Know, believe, own, have (sở hữu), like là động từ chỉ trạng thái, không dùng ở dạng tiếp diễn. Người Việt dịch “đã quen nhau” theo khuôn “đã đang” nên thêm -ing. Với các động từ này, dùng had + V3."),
      mistake("Next month I will be working here for five years.", "Next month I will have been working here for five years.", "Câu tiếng Việt “tháng sau tôi làm ở đây được năm năm” không có chữ nào tương ứng với have been. Nhưng muốn nói thời lượng tính đến mốc tương lai, tiếng Anh bắt buộc dùng will have been + V-ing."),
      tip("Khi nói nhanh, **had been** rút thành **I'd been** /aɪd bɪn/, còn **will have been** thành **I'll have been** /aɪl əv bɪn/, chữ have chỉ còn /əv/. Chữ **been** trong các thì này đọc nhẹ /bɪn/, trọng âm dồn vào động từ chính: I'd been **wait**ing for ages."),
      teacher("Khi đứng lớp, tôi hay thấy học viên tránh hẳn thì này vì sợ câu dài. Mẹo của tôi là **đi từ dấu vết ngược về nguyên nhân**. Mỗi khi thấy ai ướt, mệt, khàn giọng, hãy tự hỏi thầm bằng tiếng Anh: **What had they been doing?** rồi tự trả lời: **He had been playing football. She had been crying.** Còn với thì tương lai, hãy tính thử bao giờ bạn tròn năm năm đi làm, tròn mười năm học tiếng Anh, và nói thành câu: **By June, I'll have been learning English for ten years.** Mỗi ngày ba câu như vậy, một tuần là miệng quen ngay."),
      summary(
        "**Had been + V-ing**: việc kéo dài liên tục đến một mốc quá khứ (for, since, how long), hoặc là nguyên nhân của dấu vết nhìn thấy lúc đó: She was tired because she had been running.",
        "**Will have been + V-ing**: thời lượng tính đến một mốc tương lai, thường có **by** + mốc và **for** + khoảng: By June, I'll have been working here for ten years.",
        "Chọn thì theo **mốc**: bây giờ thì have been, quá khứ thì had been, tương lai thì will have been.",
        "Thì tiếp diễn nhấn **quá trình**; had + V3 nhấn **kết quả đã xong** và **số lần**: had painted (đã sơn xong), had been painting (sơn suốt một lúc, người còn dính sơn, có thể chưa xong).",
        "Động từ trạng thái (**know, believe, own, have** sở hữu) không dùng -ing: had known, không phải had been knowing.",
      ),
    ],
  },
  words: [
    word("exhaustion", "/ɪɡˈzɔːs.tʃən/", "sự kiệt sức", "After twelve hours on the road, he was close to exhaustion.", "ex|haus|tion", 1, "Chữ h câm, x đọc là /ɡz/: ig-ZAWS-chần."),
    word("drenched", "/drentʃt/", "ướt sũng", "We were drenched because we had been waiting for a taxi in the rain.", "drenched", 0, "Đuôi -ed sau âm /tʃ/ đọc là /t/: nhớ bật cụm /ntʃt/ ở cuối, đừng nuốt thành “đren”."),
    word("breathless", "/ˈbreθ.ləs/", "hụt hơi, thở không ra hơi", "She arrived breathless because she had been running up the stairs.", "breath|less", 0, "Âm /θ/ đặt đầu lưỡi giữa hai răng, không đọc thành “brét”."),
    word("hoarse", "/hɔːs/", "khàn giọng", "His voice was hoarse because he had been shouting at the match.", "hoarse", 0, "Đọc giống hệt horse (con ngựa); chữ r không đọc."),
    word("drowsy", "/ˈdraʊ.zi/", "buồn ngủ, lơ mơ", "This medicine may make you drowsy, so don't drive.", "drow|sy", 0),
    word("stamina", "/ˈstæm.ɪ.nə/", "sức bền, sức dẻo dai", "You need a lot of stamina to work night shifts for months.", "stam|i|na", 0, "Trọng âm ở âm đầu: STAM-i-na."),
    word("sleepless", "/ˈsliːp.ləs/", "mất ngủ, không ngủ được (đêm)", "I had spent three sleepless nights before the interview.", "sleep|less", 0, "Nguyên âm dài /iː/ trong sleep phải kéo dài, và bật rõ âm /p/ trước /l/."),
    word("strain", "/streɪn/", "sự căng thẳng, áp lực quá sức", "The nurses had been working under enormous strain all winter.", "strain", 0, "Cụm phụ âm /str/ ở đầu đọc liền, không chêm nguyên âm thành “sờ-trên”."),
  ],
  exercises: [
    mc("b2-n17-1", "Her eyes were red when she came into the meeting because she ___ .", ["has been crying", "had been crying", "will have been crying", "is crying"], 1, "Dấu vết (mắt đỏ) ở mốc quá khứ were, nguyên nhân là việc kéo dài đến ngay trước đó: had been crying."),
    mc("b2-n17-2", "By the end of this year, my parents ___ the same noodle shop for thirty years.", ["had been running", "have been running", "will have been running", "are running"], 2, "Mốc tương lai by the end of this year và thời lượng for thirty years: will have been running."),
    fill("b2-n17-3", "We ___ been waiting for two hours when the manager finally appeared.", ["had"], "Mốc là appeared (quá khứ), việc đợi kéo dài đến lúc đó: had been waiting."),
    fill("b2-n17-4", "I ___ Lan for ten years before we started working together. (know)", ["had known"], "Know là động từ trạng thái, không dùng -ing. Thời lượng tính đến mốc quá khứ nên dùng had + V3: had known."),
    reorder("b2-n17-5", "How long had you been waiting for the bus?", "Câu hỏi thời lượng tính đến một mốc quá khứ: How long + had + chủ ngữ + been + V-ing."),
    reorder("b2-n17-6", "What had you been doing all morning?", "Hỏi về việc đã diễn ra suốt một khoảng thời gian trước một mốc quá khứ: What + had + chủ ngữ + been + V-ing."),
    listen("b2-n17-7", "By next June, I'll have been working here for five years.", ["Tôi đã làm ở đây năm năm rồi mới nghỉ.", "Tháng Sáu năm ngoái tôi bắt đầu làm ở đây.", "Đến tháng Sáu năm sau là tôi làm ở đây được năm năm.", "Tôi sẽ làm ở đây thêm năm năm nữa."], 2, "I'll have been working: tương lai hoàn thành tiếp diễn, tính đến mốc By next June."),
    listen("b2-n17-8", "His voice was hoarse because he had been shouting at the match.", ["Anh ấy khàn giọng vì đã hò hét suốt trận đấu.", "Anh ấy sẽ hò hét ở trận đấu tối nay.", "Anh ấy không hét được vì bị ốm.", "Anh ấy khàn giọng nên không đi xem bóng đá."], 0, "Had been shouting: việc kéo dài trước mốc quá khứ, để lại dấu vết là giọng khàn (hoarse)."),
    correct("b2-n17-9", "His hands were black because he has been repairing his motorbike.", ["His hands were black because he had been repairing his motorbike.", "His hands were black because he'd been repairing his motorbike.", "His hands were black because he was repairing his motorbike."], "Mốc là were (quá khứ), nên việc kéo dài ngay trước đó và để lại dấu vết phải dùng had been repairing, không dùng has been."),
    correct("b2-n17-10", "By the time we arrived, they had been knowing about the problem for a week.", ["By the time we arrived, they had known about the problem for a week.", "By the time we arrived, they'd known about the problem for a week."], "Know là động từ trạng thái, không chia tiếp diễn. Dùng had known cho thời lượng tính đến mốc quá khứ."),
  ],
  speaking: [
    say("She was out of breath because she had been running.", "Cô ấy thở hổn hển vì vừa chạy một lúc lâu."),
    say("How long had you been waiting when the bus finally came?", "Bạn đã đợi bao lâu thì xe buýt mới đến?"),
    say("By next June, I will have been living here for ten years.", "Đến tháng Sáu năm sau là tôi sống ở đây được mười năm."),
  ],
  freeSpeaking: free(
    "Tell me about a time when you were extremely tired. Why were you so tired, and what had you been doing?",
    "Kể về một lần bạn cực kỳ mệt (sau kỳ thi, chuyến đi, dự án gấp…): lúc đó bạn trông thế nào, bạn đã làm gì trong bao lâu trước đó (had been + V-ing), và kết bằng một câu về tương lai với will have been + V-ing.",
    "I remember the night before my university entrance exam very clearly. By the time my mother came into my room at two in the morning, I had been studying maths for almost seven hours without a break. My eyes were red, and I was so drowsy that I couldn't read the questions properly. I had been drinking coffee all evening, so I couldn't sleep either. Now I work as an accountant, and next year I will have been doing this job for five years, but I still never study late at night.",
  ),
  dialogue: dialogue(
    "Sáng thứ Hai ở văn phòng",
    "Anh Nam, nhân viên phân tích, vào họp với vẻ mặt mệt mỏi. Chị Sarah, trưởng nhóm người Anh, hỏi han và cùng anh tìm cách giảm tải cho cả nhóm, vì dự án đã kéo dài nhiều tháng.",
    { A: "Sarah, trưởng nhóm", B: "Nam, nhân viên phân tích" },
    A("Nam, you look exhausted. Is everything all right?", "Nam này, trông anh kiệt sức quá. Mọi chuyện ổn chứ?"),
    B("I'm fine, thanks. I was working on the Nova report until two in the morning, so I'm a bit drowsy.", "Em ổn, cảm ơn chị. Em làm báo cáo Nova đến hai giờ sáng nên giờ hơi buồn ngủ."),
    A("Until two? How long had you been working on it when you finally stopped?", "Đến hai giờ sáng á? Lúc anh dừng thì anh đã làm liền bao lâu rồi?"),
    B("About fourteen hours. I'd been trying to fix the sales figures since lunchtime.", "Khoảng mười bốn tiếng ạ. Em cố sửa số liệu doanh số từ giờ ăn trưa."),
    A("That's far too long. Why didn't you ask Minh for help?", "Thế thì lâu quá. Sao anh không nhờ Minh giúp?"),
    B("He had offered, but he'd been doing overtime all week too, so I didn't want to bother him.", "Cậu ấy có ngỏ ý rồi, nhưng cả tuần cậu ấy cũng làm thêm giờ, nên em ngại làm phiền."),
    A("I see. And on the client call on Friday, your voice sounded hoarse.", "Chị hiểu. Còn cuộc gọi với khách hôm thứ Sáu, giọng anh nghe khàn lắm."),
    B("Yes, I'd been talking to suppliers on the phone all morning before that.", "Vâng, trước đó em đã gọi điện cho các nhà cung cấp suốt cả buổi sáng."),
    A("Look, by the end of this month, the team will have been working on this project for six months without a real break.", "Anh xem, đến cuối tháng này là cả nhóm làm dự án này được sáu tháng mà chưa được nghỉ ngơi thực sự."),
    B("I know. And by Friday, I'll have been doing overtime for three weeks.", "Em biết. Và đến thứ Sáu là em làm thêm giờ được ba tuần rồi."),
    A("Then let's change that. From tomorrow, nobody stays after seven, and I'll ask HR for a temporary assistant.", "Vậy thì mình thay đổi thôi. Từ mai không ai ở lại sau bảy giờ, và chị sẽ đề nghị phòng nhân sự tuyển một trợ lý tạm thời."),
    B("Thank you, Sarah. That would really help all of us.", "Cảm ơn chị Sarah. Như vậy sẽ giúp cả nhóm rất nhiều."),
  ),
  dialogueQuestions: [
    listenQ("b2-n17-d1", "Why is Nam drowsy?", "I'm fine, thanks. I was working on the Nova report until two in the morning, so I'm a bit drowsy.", ["He worked on a report until two in the morning.", "He was at a party with clients.", "He was travelling all night.", "He was looking after a sick child."], 0, "I was working on the Nova report until two in the morning: anh làm báo cáo đến hai giờ sáng."),
    mc("b2-n17-d2", "Why didn't Nam accept Minh's offer of help?", ["Minh was on holiday.", "Minh had been doing overtime all week too.", "Minh did not understand the figures.", "Sarah had told him to work alone."], 1, "He'd been doing overtime all week too: Minh cũng đã làm thêm giờ cả tuần, nên Nam ngại làm phiền."),
    mc("b2-n17-d3", "What does Sarah decide to do?", ["Give Nam the rest of the week off", "Move the project deadline to next month", "Stop anyone staying after seven and ask HR for an assistant", "Ask Minh to finish the Nova report"], 2, "From tomorrow, nobody stays after seven, and I'll ask HR for a temporary assistant."),
  ],
  reading: reading({
    title: "Eleven hours at Gate 14",
    text: `By the time the flight to Seoul finally took off at six o'clock on Sunday morning, its two hundred passengers had been waiting at Gate 14 for more than eleven hours. Many of them had been sitting on the floor since midnight, because every seat in the area was taken. When I spoke to them, several were hoarse from arguing with staff, and almost all of them were drowsy and irritable.

The official explanation was a technical problem. A spokesperson told reporters that engineers had been checking the aircraft "for most of the night" and that safety had to come first. Nobody disputes that. What angered the passengers was not the delay itself, but the silence. For the first six hours, nobody from the airline had spoken to them at all. One young mother told me that she had been trying to get information for her elderly father, who needed his medicine, and had simply been told to "wait for an announcement".

This is not the first time. Passengers on the same route had been complaining about late departures for months before Sunday's incident, and a local consumer group had been collecting their stories since the spring. The airline, however, had not published a single report on the problem.

To be fair, the airline has now apologised and offered each passenger a voucher. But a voucher is not an answer. The staff at the gate were clearly under enormous strain; some of them had been working since the previous afternoon, and they had no more information than the passengers did.

Next month, the airline will have been flying this route for ten years, and it plans to celebrate with a special promotion. I would suggest a different way to mark the anniversary: a clear, public promise that passengers will be told what is happening, every hour, whenever a flight is delayed. It would cost almost nothing, and it would show that the company has finally been listening.`,
    glossary: [
      ["irritable", "cáu kỉnh, dễ nổi nóng"],
      ["spokesperson", "người phát ngôn"],
      ["dispute", "phản bác, tranh cãi"],
      ["incident", "sự cố, vụ việc"],
      ["consumer group", "hội bảo vệ người tiêu dùng"],
      ["voucher", "phiếu quà tặng, phiếu giảm giá"],
      ["anniversary", "ngày kỷ niệm"],
    ],
    questions: [
      mc("b2-n17-r1", "What is the writer's main point?", ["The flight was delayed because of bad weather.", "The airline's real failure was not keeping passengers informed.", "Airport staff behaved rudely to the passengers.", "Passengers should never accept vouchers."], 1, "Tác giả nói rõ: What angered the passengers was not the delay itself, but the silence. Cả bài xoay quanh việc hãng không thông tin cho khách."),
      mc("b2-n17-r2", "How long had the passengers been waiting when the flight took off?", ["About six hours", "Since the previous afternoon", "More than eleven hours", "Exactly ten hours"], 2, "Câu đầu tiên: its two hundred passengers had been waiting at Gate 14 for more than eleven hours."),
      fill("b2-n17-r3", "For the first six hours, nobody from the airline had ___ to the passengers.", ["spoken", "talked"], "Bài viết: For the first six hours, nobody from the airline had spoken to them at all."),
      mc("b2-n17-r4", "What can we infer from the fact that a consumer group had been collecting stories since the spring?", ["Sunday's delay was part of a longer pattern of problems.", "The consumer group caused the delay.", "The airline had published regular reports about delays.", "Delays on the route had stopped by the spring."], 0, "Khách đã phàn nàn nhiều tháng, hội người tiêu dùng thu thập câu chuyện từ mùa xuân: sự cố Chủ nhật không phải chuyện lần đầu (This is not the first time)."),
      mc("b2-n17-r5", "What is the writer's attitude towards the airline's voucher?", ["Grateful: it solves the problem.", "Neutral: the writer does not comment on it.", "Amused: the writer finds it funny.", "Critical: it does not deal with the real issue."], 3, "But a voucher is not an answer: tác giả cho rằng phiếu quà tặng không giải quyết được vấn đề thật là thiếu thông tin."),
    ],
  }),
  task: task({
    prompt: "Viết một bài khoảng 150–190 từ kể lại một ngày hoặc một tuần rất mệt mỏi của bạn (kỳ thi, chuyến đi, dự án gấp…). Giải thích vì sao bạn mệt, ướt, khàn giọng… bằng had been + V-ing, nói bạn đã làm việc đó bao lâu tính đến một mốc trong quá khứ, và kết bằng một câu will have been + V-ing.",
    hints: [
      "Mở bằng bối cảnh: chuyện xảy ra khi nào, bạn đang làm việc gì.",
      "Mỗi dấu vết (mệt, ướt, khàn giọng, mất ngủ) đi kèm một nguyên nhân dạng had been + V-ing, có for hoặc since.",
      "Thêm một câu had + V3 cho việc đã xong hoặc đếm được số lần, để thấy rõ sự khác biệt.",
      "Kết bằng By + mốc tương lai, I will have been + V-ing + for + khoảng thời gian.",
    ],
    model: "Last December I had the most exhausting week of my working life. Our team had been preparing a bid for a hospital project since October, and the deadline was Friday at noon.\n\nBy Wednesday evening, I had been working twelve hours a day for almost three weeks, and I had spent several sleepless nights in a row. I would lie in bed, but my mind kept going over the figures. On Thursday it rained heavily, and I arrived at the office completely drenched because I had been waiting for a taxi for twenty minutes. My voice was hoarse, too, since I had been talking to suppliers on the phone all morning.\n\nAt ten o'clock on Friday, our manager discovered a mistake in the budget. We had checked the table three times, but nobody had noticed it. We fixed it quickly and submitted the bid at five to twelve.\n\nWe won the contract, but I learned an important lesson about stamina. Next month I will have been working for this company for five years, and I have promised myself that I will never work like that again.",
    checklist: [
      "Có ít nhất ba câu had been + V-ing, mỗi câu giải thích một dấu vết hoặc nói một khoảng thời gian.",
      "Có ít nhất một câu had been + V-ing đi với for hoặc since, tính đến một mốc quá khứ rõ ràng (By Wednesday evening…).",
      "Có một câu had + V3 cho việc đã xong hoặc có số lần (had checked the table three times).",
      "Có một câu will have been + V-ing với mốc tương lai và for + khoảng thời gian.",
      "Không chia tiếp diễn với động từ trạng thái như know, believe, own.",
    ],
    minWords: 150,
  }),
});
