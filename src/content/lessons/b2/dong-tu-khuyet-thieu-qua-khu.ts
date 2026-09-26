import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "dong-tu-khuyet-thieu-qua-khu",
  title: "Lẽ ra đã nên…",
  minutes: 35,
  lecture: {
    title: "Should have, could have, needn't have và didn't need to",
    blocks: [
      p("Dự án trễ hạn, sếp nhìn bạn và nói: **You should have told me earlier.** Nhiều bạn chỉ hiểu lờ mờ là mình bị trách. Người Việt diễn đạt ý này bằng chữ **“lẽ ra”**: lẽ ra nên, lẽ ra không nên, lẽ ra đã có thể. Tiếng Anh không có chữ “lẽ ra”, mà dùng **động từ khuyết thiếu + have + V3** để nói về quá khứ. Cấu trúc này có hai nhóm nghĩa: **suy đoán** (must have, might have, can't have: chắc hẳn đã, có lẽ đã, không thể nào đã, như ở bài Họp và thảo luận), và **trách, tiếc, rút kinh nghiệm** về một việc **thường trái với điều đã thật sự xảy ra**. Bài này tập trung vào nhóm thứ hai."),
      table(
        ["Cấu trúc", "Ý nghĩa", "Ví dụ"],
        ["should have + V3", "lẽ ra nên làm (nhưng đã không làm)", "We should have checked the figures."],
        ["shouldn't have + V3", "lẽ ra không nên làm (nhưng đã làm)", "I shouldn't have sent that email."],
        ["could have + V3", "lẽ ra đã có thể (có khả năng nhưng không làm); cũng dùng để đoán: có thể đã", "You could have asked me for help."],
        ["needn't have + V3", "đã làm, nhưng hóa ra không cần", "I needn't have printed the slides."],
        ["didn't need to + V", "không cần làm, và thường là đã không làm", "I didn't need to print the slides."],
      ),
      ex("We should have booked the tickets earlier. Now they're sold out.", "Lẽ ra chúng ta nên đặt vé sớm hơn. Giờ thì hết vé rồi.", "Sự thật là đã không đặt sớm. Khi dùng để trách hay tiếc, should have + V3 nói ngược với sự thật. Ngoại lệ: should have còn diễn tả điều được kỳ vọng (The parcel should have arrived by now: lẽ ra giờ này gói hàng phải đến rồi)."),
      ex("You shouldn't have shouted at the waiter. It wasn't his fault.", "Lẽ ra anh không nên quát người phục vụ. Đâu phải lỗi của anh ấy."),
      mistake("You should told me earlier.", "You should have told me earlier.", "Tiếng Việt chỉ cần thêm chữ “lẽ ra” hay “đã” là thành quá khứ, nên học trò đổi động từ sang quá khứ ngay sau should. Nhưng sau động từ khuyết thiếu không bao giờ có V2; muốn lùi về quá khứ phải dùng have + V3."),
      mistake("I failed the exam. I must have studied harder.", "I failed the exam. I should have studied harder.", "Chữ “lẽ ra phải” khiến nhiều bạn dịch thành must have. Nhưng must have + V3 nghĩa là “chắc hẳn đã”, dùng để suy đoán. Đã trượt mà đoán “chắc hẳn đã học chăm hơn” thì vô lý. Muốn tiếc hoặc tự trách, dùng should have."),
      p("**Could have + V3** có hai cách dùng hay gặp. Thứ nhất là **lời trách nhẹ**: người kia có khả năng làm mà không làm. Thứ hai là nói về **một khả năng đã không thành hiện thực**, cả chuyện tốt lẫn chuyện xấu. Ngữ cảnh sẽ cho bạn biết đó là trách hay là tiếc. Ngoài ra, could have + V3 còn dùng để **đoán về quá khứ** khi chưa chắc: **He could have taken the train, I'm not sure.** (Có thể anh ấy đã đi tàu, tôi không chắc.)"),
      ex("You could have told me the meeting was cancelled!", "Lẽ ra anh có thể báo tôi là cuộc họp bị hủy chứ!", "Lời trách: anh hoàn toàn có thể báo, nhưng anh đã không báo."),
      ex("She could have become a doctor, but she chose to be a teacher.", "Cô ấy đã có thể trở thành bác sĩ, nhưng cô ấy chọn làm giáo viên."),
      p("Cặp dễ nhầm nhất là **needn't have + V3** và **didn't need to + V**. Cả hai đều nói việc đó không cần thiết. Nhưng **needn't have** cho biết bạn **đã làm rồi** và giờ mới thấy là thừa; còn **didn't need to** thường cho biết bạn **biết trước là không cần nên không làm**."),
      table(
        ["Câu", "Có đi taxi không?", "Ý nghĩa"],
        ["I needn't have taken a taxi. The office was only five minutes away.", "Có", "Đã đi taxi, hóa ra phí tiền."],
        ["I didn't need to take a taxi because Nam gave me a lift.", "Không", "Không cần nên đã không đi."],
      ),
      mistake("I needn't to have bought so much food.", "I needn't have bought so much food.", "Need khi làm động từ khuyết thiếu (needn't) đi thẳng với have, không có to. Học trò lẫn với động từ thường need to nên chen to vào giữa."),
      tip("Khi nói, **should have** rút gọn thành **should've** /ˈʃʊd.əv/, **could have** thành **could've** /ˈkʊd.əv/. Vì nghe giống “should of” nên có người viết sai thành **should of**. Đừng bao giờ viết như vậy. Thêm một điều thú vị: khi được tặng quà, người Anh hay nói **Oh, you shouldn't have!** Đây là lời cảm ơn khách sáo, không phải lời trách."),
      teacher("Tôi hay giao cho học trò một bài tập rất đơn giản: tối nào trước khi ngủ cũng viết **ba câu rút kinh nghiệm** về ngày hôm đó, một câu với should have, một câu với shouldn't have, một câu với needn't have. Ví dụ: **I should have left home earlier. I shouldn't have drunk so much coffee. I needn't have brought my umbrella.** Chỉ mất hai phút, nhưng sau một tháng các bạn sẽ dùng cấu trúc này tự nhiên như nói tiếng mẹ đẻ. Điều quan trọng hơn: **luôn tự hỏi sự thật là gì**, vì khi dùng để trách hay tiếc, cấu trúc này thường nói ngược với điều đã xảy ra."),
      summary(
        "Động từ khuyết thiếu + have + V3 nói về quá khứ: must/might/can't have dùng để đoán; should/could have dùng để trách, tiếc và thường ngược với điều đã xảy ra.",
        "should have + V3: lẽ ra nên làm (nhưng đã không làm); shouldn't have + V3: lẽ ra không nên làm (nhưng đã làm).",
        "could have + V3: đã có thể làm mà không làm (trách nhẹ, tiếc); cũng dùng để đoán: có thể đã xảy ra.",
        "needn't have + V3: đã làm rồi mới thấy thừa; didn't need to + V: không cần, thường là đã không làm.",
        "Không viết should told hay should of; đừng nhầm must have (chắc hẳn đã) với should have (lẽ ra nên).",
      ),
    ],
  },
  words: [
    word("careless", "/ˈkeə.ləs/", "cẩu thả, bất cẩn", "It was careless of me to leave the door unlocked.", "care|less", 0),
    word("oversight", "/ˈəʊ.və.saɪt/", "sự sơ suất, thiếu sót do không để ý", "It was a simple oversight. We should have checked the invoice twice.", "o|ver|sight", 0, "Trọng âm ở âm tiết đầu: O-ver-sight. Âm đầu là nguyên âm đôi /əʊ/, đọc gần “âu”."),
    word("avoidable", "/əˈvɔɪ.də.bəl/", "có thể tránh được", "The delay was avoidable. We could have ordered the parts earlier.", "a|void|a|ble", 1, "Trọng âm ở âm tiết thứ hai: a-VOID-a-ble."),
    word("unnecessary", "/ʌnˈnes.ə.sər.i/", "không cần thiết", "We needn't have hired a car. It was completely unnecessary.", "un|nec|es|sa|ry", 1, "Trọng âm ở âm tiết thứ hai: un-NEC-es-sa-ry. Không nhấn vào âm cuối."),
    word("blame", "/bleɪm/", "đổ lỗi, trách", "Don't blame yourself. You couldn't have known.", "blame", 0),
    word("hindsight", "/ˈhaɪnd.saɪt/", "sự nhìn lại (sau khi việc đã xảy ra)", "With hindsight, we should have chosen a different supplier.", "hind|sight", 0),
    word("precaution", "/prɪˈkɔː.ʃən/", "biện pháp phòng ngừa", "We should have taken more precautions before the storm.", "pre|cau|tion", 1),
    word("criticise", "/ˈkrɪt.ɪ.saɪz/", "chỉ trích, phê bình", "The manager criticised the team for missing the deadline.", "crit|i|cise", 0),
  ],
  exercises: [
    mc("b2-n07-1", "I failed the test. I ___ harder.", ["must have studied", "should have studied", "needn't have studied", "had studied"], 1, "Tiếc nuối về việc đã không làm trong quá khứ: should have + V3. Must have studied nghĩa là “chắc hẳn đã học”, needn't have studied là “đã học nhưng hóa ra thừa”, còn had studied lại nói là đã học chăm hơn thật, trái với việc bị trượt."),
    correct("b2-n07-9", "You should of told me the meeting was cancelled.", ["You should have told me the meeting was cancelled."], "Should've nghe giống “should of” nhưng dạng viết đúng luôn là should have + V3."),
    correct("b2-n07-10", "The report was full of errors. We must have checked the figures before we sent it.", ["The report was full of errors. We should have checked the figures before we sent it.", "The report was full of errors. We ought to have checked the figures before we sent it."], "Báo cáo đầy lỗi, tức là đã không kiểm tra. Muốn nói “lẽ ra phải kiểm tra” (nhưng đã không làm) thì dùng should have. Must have checked nghĩa là “chắc hẳn đã kiểm tra”, là câu đoán."),
    mc("b2-n07-2", "Nam gave me a lift, so I ___ a taxi.", ["needn't have taken", "shouldn't have taken", "must have taken", "didn't need to take"], 3, "Được bạn chở nên không đi taxi. Didn't need to + V: không cần và đã không làm. Needn't have taken lại cho biết là đã đi taxi rồi."),
    fill("b2-n07-3", "You ___ have told me about the change. I waited for an hour! (lẽ ra nên)", ["should", "ought to"], "Should have + V3 (hoặc ought to have + V3): lẽ ra nên làm nhưng đã không làm."),
    fill("b2-n07-4", "I needn't have ___ so early. The shop didn't open until ten. (get up)", ["got up", "gotten up"], "Needn't have + V3: đã dậy sớm, nhưng hóa ra không cần."),
    reorder("b2-n07-5", "I should have listened to your advice.", "Should have + V3 để tự trách: lẽ ra tôi nên nghe lời khuyên của bạn."),
    reorder("b2-n07-6", "You could have told me the truth.", "Could have + V3 dùng làm lời trách nhẹ: anh hoàn toàn có thể nói thật với tôi."),
    listen("b2-n07-7", "We should have left home earlier.", ["Ngày mai chúng ta nên ra khỏi nhà sớm hơn.", "Lẽ ra chúng ta nên ra khỏi nhà sớm hơn.", "Chúng ta đã ra khỏi nhà rất sớm."], 1, "Should have left: lẽ ra nên đi sớm hơn, sự thật là đã đi muộn."),
    listen("b2-n07-8", "I needn't have cooked so much food.", ["Tôi biết không cần nấu nhiều nên đã không nấu.", "Tôi phải nấu thêm thức ăn.", "Tôi nấu ít quá nên mọi người vẫn đói.", "Tôi đã nấu rất nhiều nhưng hóa ra không cần thiết."], 3, "Needn't have cooked: đã nấu rồi, sau đó mới thấy là thừa."),
  ],
  speaking: [
    say("I should have checked the email more carefully.", "Lẽ ra tôi nên kiểm tra email cẩn thận hơn."),
    say("You could have asked me for help.", "Lẽ ra bạn có thể nhờ tôi giúp mà."),
    say("We needn't have hurried because the meeting started late.", "Hóa ra chúng ta vội vàng chẳng để làm gì, vì cuộc họp bắt đầu muộn."),
  ],
  freeSpeaking: free(
    "Tell me about something you did in the past that you would do differently now.",
    "Kể một việc trong quá khứ mà nếu được làm lại bạn sẽ làm khác: lẽ ra nên làm gì, lẽ ra không nên làm gì, lẽ ra có thể làm gì, và có việc gì bạn đã làm mà hóa ra không cần.",
    "A few years ago I bought a second-hand motorbike from a stranger online. I should have asked a mechanic to check it first, but I was in a hurry and I trusted the seller. Two weeks later the engine broke down. I could have saved a lot of money if I had been more patient. I also needn't have worried so much about the repair bill, because my uncle fixed it for free. Now I always take my time before I buy anything expensive.",
  ),
  dialogue: dialogue(
    "Rút kinh nghiệm sau buổi thuyết trình",
    "Sáng nay khách hàng không hài lòng với bài thuyết trình. Chị Linh, trưởng nhóm, nói chuyện riêng với Quân để rút kinh nghiệm cho lần sau.",
    { A: "Chị Linh, trưởng nhóm", B: "Quân, nhân viên" },
    A("Quan, the client wasn't happy with the presentation this morning.", "Quân này, sáng nay khách hàng không hài lòng với bài thuyết trình."),
    B("I know. I should have checked the sales figures again before the meeting.", "Em biết ạ. Lẽ ra em nên kiểm tra lại số liệu doanh số trước buổi họp."),
    A("Yes, and you shouldn't have used last year's slides.", "Đúng vậy, và lẽ ra em không nên dùng bộ slide của năm ngoái."),
    B("You're right. I could have asked Mai for the new version, but I didn't want to bother her.", "Chị nói đúng. Lẽ ra em có thể xin Mai bản mới, nhưng em ngại làm phiền cô ấy."),
    A("You could have asked me too. That's what I'm here for.", "Em cũng có thể hỏi chị mà. Chị ở đây là để giúp em."),
    B("I also printed fifty copies of the report, but nobody wanted them.", "Em còn in năm mươi bản báo cáo, nhưng chẳng ai lấy."),
    A("Well, you needn't have printed them. They had already received it by email.", "Ừ, hóa ra em in thừa rồi. Họ đã nhận báo cáo qua email."),
    B("At least I didn't need to book a meeting room, because they came to our office.", "Ít ra em không cần đặt phòng họp, vì họ đến văn phòng mình."),
    A("True. Don't worry too much. Next time, just send me the slides a day earlier.", "Đúng thế. Đừng lo quá. Lần sau em cứ gửi chị slide sớm một ngày nhé."),
    B("I will. Thanks for being so understanding.", "Em sẽ làm vậy. Cảm ơn chị đã thông cảm."),
  ),
  dialogueQuestions: [
    mc("b2-n07-d1", "Why didn't Quan ask Mai for the new version of the slides?", ["She was on holiday.", "He had already asked Linh.", "He didn't know she had them.", "He didn't want to bother her."], 3, "Quân nói: I could have asked Mai for the new version, but I didn't want to bother her."),
    listenQ("b2-n07-d2", "Why were the fifty printed copies unnecessary?", "I also printed fifty copies of the report, but nobody wanted them. Well, you needn't have printed them. They had already received it by email.", ["The printer made too many mistakes.", "The meeting was cancelled.", "The client had already received the report by email.", "Linh had printed copies too."], 2, "They had already received it by email: khách đã có báo cáo qua email, nên in ra là thừa (needn't have printed)."),
    mc("b2-n07-d3", "How does Linh treat Quan in this conversation?", ["She is angry and threatens to report him.", "She is understanding and gives him practical advice.", "She blames Mai for the problem.", "She is surprised that the client was unhappy."], 1, "Linh chỉ ra lỗi nhưng nói Don't worry too much và khuyên lần sau gửi slide sớm một ngày. Quân cũng cảm ơn chị vì đã thông cảm."),
  ],
  reading: reading({
    title: "Project review: the late launch of the Hai Phong warehouse",
    text: `In March, our logistics team opened a new warehouse in Hai Phong. The launch was planned for 1 March but actually took place on 22 March, three weeks late. This report looks at what went wrong, what went well and what we should do differently next time.

The main cause of the delay was the late delivery of the shelving system. The supplier had warned us in January that their factory was very busy. With hindsight, we should have placed the order at that point instead of waiting until February. We could also have asked a second supplier for a quote, but nobody did, because the first company had always been reliable in the past.

Communication was another weak point. The IT team found out about the new launch date from a customer, not from us. They should have been informed as soon as the delay was known. Several staff also felt that the weekly progress meetings were too long and that the key problems were not discussed clearly.

Not everything was negative, however. We had hired forty temporary workers for the first week, expecting a large number of orders. In the end, we needn't have hired so many, as demand was lower than forecast, but the extra staff helped us clear the backlog quickly. We also didn't need to rent extra trucks, because our regular transport partner was able to lend us two of theirs at no cost.

We have three recommendations. First, equipment with long delivery times must be ordered at least eight weeks before any launch. Second, one person should be responsible for sharing changes in the schedule with every department on the same day. Finally, progress meetings should last no more than thirty minutes and should end with a clear list of actions.

The delay was avoidable, and it cost us around four hundred million dong in lost business. However, if we follow these recommendations, we can make sure that it does not happen again.`,
    glossary: [
      ["logistics", "hậu cần, kho vận"],
      ["warehouse", "nhà kho"],
      ["shelving", "hệ thống giá kệ"],
      ["quote", "bản báo giá"],
      ["temporary", "tạm thời, thời vụ"],
      ["backlog", "lượng việc, đơn hàng tồn đọng"],
      ["forecast", "dự báo"],
    ],
    questions: [
      mc("b2-n07-r1", "What is the main purpose of this report?", ["To blame the supplier for the delay", "To review what went wrong with the launch and suggest improvements", "To announce the opening of a new warehouse", "To ask for money to hire more staff"], 1, "Câu cuối đoạn đầu: This report looks at what went wrong, what went well and what we should do differently next time."),
      mc("b2-n07-r2", "When does the writer think the shelving should have been ordered?", ["In January, after the supplier's warning", "In December", "In February", "In March"], 0, "We should have placed the order at that point, tức là tháng Một, khi nhà cung cấp báo trước là nhà máy đang rất bận. Thực tế công ty chờ đến tháng Hai."),
      fill("b2-n07-r3", "The company ___ have hired so many temporary workers, because demand was lower than expected. (đã thuê nhưng hóa ra không cần)", ["needn't", "need not"], "Công ty đã thuê bốn mươi người rồi mới thấy thừa: needn't have + V3."),
      mc("b2-n07-r4", "What can we infer about the IT team?", ["They were responsible for the delay.", "They didn't attend the progress meetings.", "They were probably unhappy that they heard the news from a customer.", "They ordered the shelving system."], 2, "Nhóm IT biết ngày khai trương mới qua khách hàng, và báo cáo nhận là lẽ ra phải báo cho họ ngay. Có thể suy ra họ không vui."),
      mc("b2-n07-r5", "Which statement about the trucks is true?", ["The company rented two extra trucks.", "The company rented trucks but later found it was unnecessary.", "Transport was the main cause of the delay.", "No trucks had to be rented, because the regular partner lent two for free."], 3, "We didn't need to rent extra trucks: không cần thuê và đã không thuê, vì đối tác vận chuyển cho mượn hai xe miễn phí."),
    ],
  }),
  task: task({
    prompt: "Viết một bài khoảng 140–180 từ kể lại một chuyện không suôn sẻ gần đây của bạn (lỡ chuyến bay, đi họp muộn, mua nhầm đồ…) và tự rút kinh nghiệm bằng các cấu trúc lẽ ra trong bài.",
    hints: [
      "Kể ngắn gọn chuyện gì đã xảy ra bằng thì quá khứ đơn.",
      "Dùng should have và shouldn't have để tự trách, could have để nói việc lẽ ra có thể làm.",
      "Thêm một câu needn't have hoặc didn't need to, rồi kết bằng một bài học cho lần sau.",
    ],
    model: "Last Friday I missed my flight to Da Nang, and it was completely my fault. I had a meeting with a new client there at four o'clock, so the trip was important.\n\nI should have left home earlier, because the traffic is always terrible on Friday afternoons. Instead, I finished some emails and ordered a taxi at the last minute. I shouldn't have stopped at the café near the airport, either, but I wanted a quick coffee. My colleague could have given me a lift, but I didn't ask him because I didn't want to bother him. By the time I reached the check-in desk, it had already closed.\n\nThe funny thing is that I needn't have packed so many clothes, since the trip was only two days long. Luckily, I didn't need to buy a new ticket, because the airline moved me to the next flight free of charge. I called the client, and we moved the meeting to the next morning.\n\nNext time, I will leave for the airport at least three hours before my flight.",
    checklist: [
      "Có ít nhất một câu should have + V3 và một câu shouldn't have + V3.",
      "Có một câu could have + V3.",
      "Có needn't have + V3 hoặc didn't need to + V, dùng đúng việc đã làm hay đã không làm.",
      "Khi nói về quá khứ, sau should, could, needn't là have + V3, không có V2 và không có to.",
      "Mỗi câu trách hay tiếc đều nói ngược với điều đã thật sự xảy ra.",
    ],
    minWords: 140,
  }),
});
