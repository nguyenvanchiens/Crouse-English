import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "loi-moi-va-de-nghi",
  title: "Lời mời và đề nghị",
  minutes: 30,
  lecture: {
    title: "Would you like, Shall we, Let's, Why don't we và will để đề nghị giúp",
    blocks: [
      p("Có khách nước ngoài đến văn phòng: bạn mời họ uống nước, rủ cả nhóm đi ăn trưa, thấy họ xách đồ nặng thì muốn đỡ giúp. Ở bài Kế hoạch cuối tuần bạn đã biết **Would you like to...?** để mời đi chơi. Hôm nay ta học trọn bộ: **mời**, **rủ**, **đề nghị giúp**, và **nhận lời hay từ chối cho khéo**. Nhiều người Việt chỉ quen nói “Do you want...?”, nghe hơi thẳng khi nói với khách hay người lớn tuổi."),
      table(
        ["Mục đích", "Mẫu câu", "Ví dụ"],
        ["Mời đồ ăn, đồ uống", "Would you like + danh từ?", "Would you like some tea?"],
        ["Mời làm gì", "Would you like to + V?", "Would you like to join us?"],
        ["Rủ cùng làm", "Let's + V / Shall we + V? / Why don't we + V?", "Shall we take a taxi?"],
        ["Đề nghị giúp", "Shall I + V? / I'll + V", "Shall I open the window?"],
      ),
      p("Ba cách rủ có sắc thái hơi khác nhau: **Let's** là rủ thẳng, **Shall we...?** là hỏi ý người kia, **Why don't we...?** là gợi ý mềm mỏng. Cả ba đều theo sau bằng **động từ nguyên mẫu không có to**."),
      ex("Let's have lunch together.", "Mình cùng đi ăn trưa đi."),
      ex("Shall we meet at seven?", "Mình gặp nhau lúc bảy giờ nhé?"),
      ex("Why don't we try the new restaurant?", "Sao mình không thử nhà hàng mới nhỉ?", "Câu này có don't nhưng không phải hỏi “tại sao không”, mà là một lời gợi ý. Người nghe trả lời That's a good idea!, không trả lời Because..."),
      p("Khi thấy ai cần giúp và **quyết định ngay lúc đó** là giúp, tiếng Anh dùng **I'll + động từ nguyên mẫu**. Đây là cách dùng will rất tự nhiên, không phải dự đoán, cũng không phải kế hoạch có sẵn."),
      ex("Your bag looks heavy. I'll carry it for you.", "Túi của bạn trông nặng quá. Để tôi xách giúp."),
      ex("The phone's ringing. I'll get it.", "Điện thoại reo kìa. Để tôi nghe.", "I'll get it là câu cửa miệng khi nhận nghe điện thoại hoặc ra mở cửa giúp mọi người."),
      table(
        ["Lời mời, đề nghị", "Nhận lời", "Từ chối lịch sự"],
        ["Would you like some coffee?", "Yes, please.", "No, thanks. I'm fine."],
        ["Shall I help you?", "Yes, please. That's very kind of you.", "No, it's OK, thanks. I can do it."],
        ["Why don't we go out tonight?", "That's a good idea!", "I'd love to, but I'm really tired. Maybe another time."],
      ),
      tip("Nhớ theo cặp: có lời mời thì luôn có **please** khi nhận và **thanks** khi từ chối. **Yes, please** và **No, thanks** là hai câu ngắn nhất mà vẫn lịch sự, dùng được với bất kỳ ai."),
      mistake("Let's to go home.", "Let's go home.", "Nhiều người quen want to, need to nên thêm to sau Let's. Sau Let's, Shall we, Why don't we đều là động từ nguyên mẫu không có to."),
      mistake("I help you carry it.", "I'll help you carry it.", "Tiếng Việt “để tôi giúp” không cần chia thì. Tiếng Anh muốn đề nghị giúp ngay lúc nói thì phải có will: I'll help you."),
      mistake("A: Would you like some tea? B: Yes, I like.", "A: Would you like some tea? B: Yes, please.", "Yes, I like nghĩa là tôi thích (nói chung), không phải nhận lời mời. Nhận đồ ăn, đồ uống thì nói Yes, please."),
      teacher("Có một cái bẫy văn hóa mà khi đứng lớp tôi thấy học viên mắc rất nhiều: người Việt được mời thường **từ chối lần đầu cho khách sáo**, đợi mời lần hai mới nhận. Với người nói tiếng Anh, **No, thanks nghĩa là không thật**, và họ sẽ không mời lại đâu. Thế là các bạn ngồi nhìn người ta uống cà phê một mình. Muốn thì nói Yes, please ngay từ đầu, thế là lịch sự rồi."),
      summary(
        "Mời: Would you like + danh từ? (some tea) hoặc Would you like to + động từ? (to join us).",
        "Rủ: Let's + V, Shall we + V?, Why don't we + V?; sau cả ba không có to.",
        "Đề nghị giúp ngay lúc nói: Shall I + V? hoặc I'll + V.",
        "Nhận lời: Yes, please. / That's a good idea!; từ chối: No, thanks. / I'd love to, but...",
        "Muốn thì nhận ngay lần mời đầu: với người nói tiếng Anh, No, thanks là không thật.",
      ),
    ],
  },
  words: [
    word("suggest", "/səˈdʒest/", "gợi ý, đề xuất", "She suggested a new restaurant.", "sug|gest", 1),
    word("offer", "/ˈɒf.ə/", "đề nghị, mời", "He offered to help me.", "of|fer", 0),
    word("accept", "/əkˈsept/", "nhận, chấp nhận", "I'm happy to accept your invitation.", "ac|cept", 1, "Đọc rõ âm /k/ ở âm đầu: ơk-SEPT. Đừng nhầm với except /ɪkˈsept/ (ngoại trừ)."),
    word("refuse", "/rɪˈfjuːz/", "từ chối", "It's not polite to refuse too quickly.", "re|fuse", 1, "Âm cuối là /z/, không phải /s/."),
    word("join", "/dʒɔɪn/", "tham gia, đi cùng", "Would you like to join us for dinner?", "join", 0),
    word("carry", "/ˈkær.i/", "mang, xách", "I'll carry your bag for you.", "car|ry", 0),
    word("heavy", "/ˈhev.i/", "nặng", "This box is really heavy.", "heav|y", 0, "Chữ ea ở đây đọc là /e/ ngắn, không đọc là “hi-vi”."),
    word("kind", "/kaɪnd/", "tốt bụng, tử tế", "That's very kind of you.", "kind", 0, "Nhớ bật âm /nd/ ở cuối, đừng đọc thành “kai”."),
  ],
  exercises: [
    mc("a2-n07-1", "It's hot in here. ___ I open the window?", ["Shall", "Let's", "Why", "Would"], 0, "Đề nghị làm giúp người khác: Shall I + động từ nguyên mẫu?"),
    mc("a2-n07-2", "A: Would you like some coffee? B: ___", ["Yes, I like.", "Yes, I'd like.", "Yes, please."], 2, "Nhận đồ uống người khác mời: Yes, please. Hai câu còn lại đều sai ngữ pháp hoặc sai nghĩa."),
    fill("a2-n07-3", "Let's ___ a taxi. It's raining. (take)", ["take"], "Sau Let's là động từ nguyên mẫu không có to."),
    fill("a2-n07-4", "Your bags look heavy. I ___ help you. (sẽ, quyết định ngay lúc nói)", ["will", "'ll"], "Quyết định giúp ngay lúc nói thì dùng will: I will help you, nói tự nhiên là I'll help you."),
    reorder("a2-n07-5", "Why don't we have dinner together?", "Why don't we + động từ nguyên mẫu là một lời gợi ý mềm mỏng."),
    reorder("a2-n07-6", "Shall we go for a walk?", "Shall we + động từ nguyên mẫu: rủ và hỏi ý người kia. Go for a walk là đi dạo."),
    listen("a2-n07-7", "That's very kind of you, but I can do it myself.", ["Bạn làm giúp tôi nhé.", "Bạn tốt quá, nhưng tôi tự làm được.", "Tôi sẽ làm giúp bạn."], 1, "That's very kind of you là cảm ơn lời đề nghị, but I can do it myself là từ chối khéo."),
    listen("a2-n07-8", "I'd love to, but I'm really tired tonight. Maybe another time.", ["Tối nay mình rất muốn đi chơi.", "Mình không thích đi đâu cả.", "Mình rất muốn đi, nhưng tối nay mệt quá. Để lần khác nhé."], 2, "I'd love to, but... là cách từ chối lịch sự: tỏ ý muốn đi, rồi nêu lý do."),
    correct("a2-n07-9", "Why don't we to take the bus?", ["Why don't we take the bus?"], "Sau Why don't we là động từ nguyên mẫu không có to, giống như sau Let's và Shall we."),
    correct("a2-n07-10", "Wait, I carry that box for you.", ["Wait, I'll carry that box for you.", "Wait, let me carry that box for you.", "Wait, shall I carry that box for you?"], "Đề nghị giúp, quyết định ngay lúc nói thì cần will: I'll carry it for you. Cũng có thể nói Let me carry... hoặc hỏi Shall I carry...?"),
  ],
  freeSpeaking: free(
    "How would you invite a foreign friend to your home?",
    "Bạn mời một người bạn nước ngoài đến nhà chơi: mời họ, gợi ý thời gian, rủ làm một việc cùng nhau và đề nghị giúp họ một việc.",
    "Would you like to come to my house this Sunday? My mother wants to cook bun cha for you. Shall we meet at eleven o'clock? Your hotel is far from my house, so I'll pick you up. After lunch, why don't we go to the market together?",
  ),
  speaking: [
    say("Shall we have lunch together?", "Mình cùng đi ăn trưa nhé?"),
    say("Your bag looks heavy. I'll carry it for you.", "Túi của bạn trông nặng quá. Để tôi xách giúp."),
    say("Why don't we go for a walk after dinner?", "Sao mình không đi dạo sau bữa tối nhỉ?"),
  ],
  dialogue: dialogue(
    "Tiếp khách ở văn phòng",
    "Ông Brown, khách hàng người Úc, đến văn phòng họp. Linh ra đón, đỡ đồ, mời nước và rủ ông đi ăn trưa sau buổi họp.",
    { A: "Linh, nhân viên công ty", B: "Ông Brown, khách hàng người Úc" },
    A("Good morning, Mr Brown. Your bag looks heavy. Shall I carry it for you?", "Chào ông Brown. Túi của ông trông nặng quá. Để tôi xách giúp ông nhé?"),
    B("Oh, yes, please. That's very kind of you.", "Ồ, vâng, cảm ơn cô. Cô tốt quá."),
    A("Would you like some tea or coffee?", "Ông có muốn uống trà hay cà phê không ạ?"),
    B("Coffee, please. No sugar.", "Cho tôi cà phê. Không đường nhé."),
    A("Sure. It's a bit hot in here. Shall I open the window?", "Vâng. Trong này hơi nóng. Tôi mở cửa sổ nhé?"),
    B("No, it's OK, thanks. I'm fine.", "Không cần đâu, cảm ơn cô. Tôi thấy ổn."),
    A("After the meeting, would you like to join us for lunch?", "Sau buổi họp, ông có muốn đi ăn trưa cùng chúng tôi không?"),
    B("I'd love to. Where shall we go?", "Tôi rất muốn. Mình đi đâu nhỉ?"),
    A("Why don't we try the pho restaurant near here? It's very popular.", "Sao mình không thử quán phở gần đây nhỉ? Quán đó đông khách lắm."),
    B("That's a good idea! I love pho.", "Ý hay đấy! Tôi rất thích phở."),
    A("Great. Let's meet in the lobby at twelve.", "Tuyệt. Mình gặp nhau ở sảnh lúc mười hai giờ nhé."),
    B("Perfect. And after lunch, I'll buy the coffee.", "Được. Và sau bữa trưa, để tôi mời cà phê."),
  ),
  dialogueQuestions: [
    listenQ("a2-n07-d1", "Ông Brown muốn uống gì?", "Coffee, please. No sugar.", ["Trà có đường", "Cà phê không đường", "Cà phê sữa", "Nước lọc"], 1, "Coffee, please. No sugar: cà phê, không đường."),
    mc("a2-n07-d2", "Khi Linh đề nghị mở cửa sổ, ông Brown trả lời thế nào?", ["Nhận lời và cảm ơn Linh", "Nhờ Linh bật quạt", "Từ chối lịch sự vì ông thấy ổn"], 2, "No, it's OK, thanks. I'm fine: từ chối lịch sự."),
    mc("a2-n07-d3", "Sau bữa trưa, ông Brown đề nghị làm gì?", ["Mời mọi người uống cà phê", "Trả tiền bữa trưa", "Đi dạo quanh hồ"], 0, "I'll buy the coffee: để tôi mời cà phê. I'll ở đây là đề nghị ngay lúc nói."),
  ],
  reading: reading({
    title: "Email mời cả nhóm đi ăn tối",
    text: `Hi everyone,

Our big project finished last week, and our customers were very happy. Great work, team! Let's celebrate together.

Would you like to have dinner with us this Friday? I booked a table for fifteen people at Sen Restaurant on Tran Hung Dao Street. The dinner starts at seven o'clock. Why don't we meet in the lobby at half past six and walk there together? It's only ten minutes from the office.

Some of you live far from the city centre. If you need a lift home after dinner, tell me. I'll ask our driver, Mr Tran, to help. Shall I book a taxi for anyone?

Please reply by Wednesday, so I can tell the restaurant the number of people. If you can't come, that's OK. Maybe next time!

Best wishes,
Thu Trang`,
    glossary: [
      ["project", "dự án"],
      ["celebrate", "ăn mừng"],
      ["lobby", "sảnh"],
      ["a lift", "việc cho đi nhờ xe"],
      ["reply", "trả lời"],
      ["the number of", "số lượng"],
    ],
    questions: [
      mc("a2-n07-r1", "Thu Trang viết email này để làm gì?", ["Báo cáo kết quả dự án", "Mời cả nhóm đi ăn tối ăn mừng", "Xin nghỉ làm thứ Sáu", "Giới thiệu một nhà hàng mới mở"], 1, "Let's celebrate together. Would you like to have dinner with us this Friday?"),
      mc("a2-n07-r2", "Mọi người gặp nhau ở sảnh lúc mấy giờ?", ["Sáu giờ", "Bảy giờ", "Bảy giờ rưỡi", "Sáu giờ rưỡi"], 3, "Meet in the lobby at half past six. Bảy giờ là giờ bữa tối bắt đầu."),
      mc("a2-n07-r3", "Thu Trang đề nghị giúp những người sống xa trung tâm thế nào?", ["Cho họ về sớm", "Đặt phòng khách sạn cho họ", "Nhờ tài xế đưa họ về hoặc đặt taxi cho họ", "Đổi sang nhà hàng gần nhà họ"], 2, "I'll ask our driver, Mr Tran, to help. Shall I book a taxi for anyone?"),
      fill("a2-n07-r4", "Hoàn thành câu trong email: ___ I book a taxi for anyone?", ["Shall"], "Đề nghị làm giúp người khác: Shall I + động từ nguyên mẫu?"),
      mc("a2-n07-r5", "Nếu không đi được thì sao?", ["Phải báo trước thứ Hai", "Không sao, để lần sau", "Phải trả tiền đặt bàn"], 1, "If you can't come, that's OK. Maybe next time!"),
    ],
  }),
  task: task({
    prompt: "Viết một tin nhắn (ít nhất 45 từ) cho đồng nghiệp người nước ngoài: mời họ đến nhà bạn ăn tối cuối tuần này, gợi ý giờ gặp, và đề nghị giúp một việc (đón họ, gọi taxi...).",
    hints: [
      "Mời bằng Would you like to + động từ...?",
      "Gợi ý giờ hoặc cách đi bằng Shall we...?, Why don't we...? hoặc Let's...",
      "Đề nghị giúp bằng I'll + động từ hoặc Shall I...?",
      "Nhớ: sau Let's, Shall we, Why don't we, I'll không có to.",
    ],
    model: "Hi Emma, would you like to have dinner with my family this Saturday? My mother wants to cook some Vietnamese food for you. Shall we meet at half past six? Your hotel is quite far from my house, so I'll pick you up by motorbike. If you don't like motorbikes, why don't we take a taxi? Let me know. Linh",
    checklist: [
      "Có một lời mời với Would you like to + động từ.",
      "Có ít nhất 1 câu rủ với Let's, Shall we hoặc Why don't we.",
      "Có một lời đề nghị giúp với I'll hoặc Shall I.",
      "Không có to sau Let's, Shall we, Why don't we, I'll.",
      "Nói rõ thời gian hoặc cách gặp nhau.",
    ],
    minWords: 45,
  }),
});
