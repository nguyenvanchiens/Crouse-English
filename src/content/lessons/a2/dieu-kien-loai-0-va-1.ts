import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "dieu-kien-loai-0-va-1",
  title: "Nếu… thì…: điều kiện loại 0 và loại 1",
  minutes: 32,
  lecture: {
    title: "Câu điều kiện loại 0 và loại 1",
    blocks: [
      p("Mỗi ngày ta nói rất nhiều câu “nếu… thì…”: “Nếu trời mưa thì mình ở nhà”, “Không đặt báo thức là mình ngủ quên”, “Đun nước đến một trăm độ thì nước sôi”. Tiếng Anh có hai kiểu câu điều kiện cho những chuyện **có thật, có thể xảy ra**: **loại 0** cho sự thật, điều hễ cứ thế là xảy ra; **loại 1** cho một khả năng có thật ở tương lai."),
      p("**Loại 0**: **If + hiện tại đơn, hiện tại đơn**. Dùng cho sự thật khoa học, quy luật, thói quen luôn đúng. If ở đây gần nghĩa với when (hễ, mỗi khi)."),
      table(
        ["Loại", "Mệnh đề if", "Mệnh đề chính", "Dùng khi", "Ví dụ"],
        ["Loại 0", "If + hiện tại đơn", "hiện tại đơn", "sự thật, điều hễ cứ thế là xảy ra", "If you heat ice, it melts."],
        ["Loại 1", "If + hiện tại đơn", "will / won't + V", "khả năng có thật ở tương lai", "If it rains, I'll stay at home."],
      ),
      ex("If you heat ice, it melts.", "Hễ làm nóng đá là đá tan.", "Sự thật lúc nào cũng đúng, nên cả hai vế đều ở hiện tại đơn."),
      ex("If I drink coffee in the evening, I can't sleep.", "Cứ uống cà phê buổi tối là tôi không ngủ được.", "Đây là điều luôn xảy ra với người nói, không phải chuyện của riêng tối nay."),
      p("**Loại 1**: **If + hiện tại đơn, will / won't + động từ nguyên mẫu**. Dùng khi nói về một tình huống **có thể xảy ra** ở tương lai và kết quả của nó. Vế chính cũng có thể dùng **might**, **can** hoặc **câu mệnh lệnh**: If you feel cold, close the window."),
      ex("If it rains tomorrow, I'll stay at home.", "Nếu mai trời mưa, tôi sẽ ở nhà.", "Chuyện mai là tương lai, nhưng sau if vẫn dùng hiện tại đơn: rains, không phải will rain."),
      ex("If you don't hurry, you'll miss the bus.", "Nếu bạn không nhanh lên, bạn sẽ lỡ xe buýt."),
      ex("If she has time, she might call you tonight.", "Nếu có thời gian, tối nay có thể cô ấy sẽ gọi cho bạn.", "Chưa chắc chắn thì dùng might ở vế chính, như bạn đã học ở bài Dự đoán tương lai."),
      p("**Dấu phẩy**: mệnh đề if đứng đầu câu thì có dấu phẩy ngăn cách; mệnh đề if đứng sau thì không cần: If it rains, I'll stay at home. / I'll stay at home if it rains. **Unless** nghĩa là “trừ khi”, tức là **if… not**: Unless you hurry, you'll miss the bus = If you don't hurry, you'll miss the bus."),
      tip("Mẹo nhớ: **sau if không có will**. Will chỉ đứng ở vế kết quả. Khi nói, I'll, you'll, it'll đọc lướt thành một âm: /aɪl/, /juːl/, /ˈɪt.əl/. Nhớ đọc âm /l/ ở cuối, nếu không người nghe sẽ tưởng bạn nói I, you, it (chuyện hiện tại)."),
      mistake("If it will rain tomorrow, we'll stay at home.", "If it rains tomorrow, we'll stay at home.", "Tiếng Việt nói “nếu mai trời sẽ mưa” cũng được, nên học trò hay đưa will vào vế if. Trong tiếng Anh, vế if dùng hiện tại đơn dù nói về tương lai."),
      mistake("If I have time, I call you tonight.", "If I have time, I'll call you tonight.", "Tiếng Việt “có thời gian thì tối nay tôi gọi” không cần chữ “sẽ”. Nhưng đây là một lần cụ thể ở tương lai, nên vế chính cần will."),
      mistake("Unless you don't hurry, you'll miss the bus.", "Unless you hurry, you'll miss the bus.", "Unless đã mang nghĩa “nếu không” rồi. Thêm don't nữa là phủ định hai lần, câu mang nghĩa ngược lại."),
      p("Đôi khi bạn sẽ nghe người bán hàng hay lễ tân nói **If you'll wait here, I'll call the manager.** Đây là cách **nhờ lịch sự**, nghĩa là “Phiền anh chị đợi ở đây”. Đó là trường hợp đặc biệt; ở trình độ này, cứ nhớ quy tắc chính: **sau if không dùng will**."),
      teacher("Nhiều bạn học viên hỏi tôi: làm sao phân biệt loại 0 và loại 1 cho nhanh? Tôi bảo: **thử thay if bằng “hễ… là…”**. Câu tiếng Việt vẫn đúng và lúc nào cũng đúng thì dùng loại 0, như “hễ đun nước đến một trăm độ là nước sôi”. Còn nếu chỉ nói về một lần cụ thể, như “nếu mai mưa”, thì dùng loại 1 với will. Mỗi sáng xem dự báo thời tiết, các bạn hãy tự nói hai câu: If it rains today, I'll... và If it's sunny, I'll... Chỉ vài tuần là miệng sẽ tự bỏ will khỏi vế if."),
      summary(
        "Loại 0 (sự thật, hễ… là…): If + hiện tại đơn, hiện tại đơn. If you heat ice, it melts.",
        "Loại 1 (khả năng có thật ở tương lai): If + hiện tại đơn, will / won't + V. If it rains, I'll stay at home.",
        "Sau if không dùng will, dù câu nói về tương lai.",
        "Mệnh đề if đứng đầu thì có dấu phẩy; đứng sau thì không cần.",
        "Unless = if… not. Không dùng thêm not sau unless.",
      ),
    ],
  },
  words: [
    word("heat", "/hiːt/", "làm nóng, đun nóng; hơi nóng", "If you heat butter, it melts.", "heat", 0, "Nguyên âm dài /iː/ và nhớ âm /t/ cuối. Đọc ngắn thành /hɪt/ là ra hit (đánh)."),
    word("loud", "/laʊd/", "to, ồn (âm thanh)", "If the music is too loud, I can't sleep.", "loud", 0, "Kết thúc bằng /d/: giữ âm cuối, đừng đọc thành “lao”."),
    word("freeze", "/friːz/", "đóng băng, đông đá", "Water freezes at zero degrees.", "freeze", 0, "Kết thúc bằng âm /z/ rung, khác với free /friː/ (rảnh, miễn phí)."),
    word("boil", "/bɔɪl/", "sôi, đun sôi", "Water boils at one hundred degrees.", "boil", 0, "Nguyên âm đôi /ɔɪ/ như “oi” rồi thêm /l/: “boi-l”, đừng đọc thành “bôn”."),
    word("sunburn", "/ˈsʌn.bɜːn/", "cháy nắng", "If you stay on the beach all day, you'll get sunburn.", "sun|burn", 0, "Kiểu Anh-Anh không đọc âm r: /ˈsʌn.bɜːn/, nhấn vào sun."),
    word("oversleep", "/ˌəʊ.vəˈsliːp/", "ngủ quên, ngủ dậy muộn", "If I don't set an alarm, I'll oversleep.", "o|ver|sleep", 2, "Quá khứ là overslept /ˌəʊ.vəˈslept/."),
  ],
  exercises: [
    mc("a2-n17-1", "If you heat ice, it ___.", ["melt", "melts", "will melted", "melting"], 1, "Sự thật lúc nào cũng đúng: điều kiện loại 0, hai vế đều ở hiện tại đơn. It đi với melts."),
    mc("a2-n17-2", "If it ___ tomorrow, we'll stay at home.", ["rains", "will rain", "rained", "is rain"], 0, "Vế if dùng hiện tại đơn dù nói về ngày mai: If it rains..."),
    fill("a2-n17-3", "If you don't hurry, you ___ miss the bus. (sẽ)", ["will"], "Điều kiện loại 1: vế kết quả dùng will + động từ nguyên mẫu."),
    fill("a2-n17-4", "I won't go to the party ___ you come with me. (trừ khi)", ["unless"], "Unless = if… not: tôi sẽ không đi nếu bạn không đi cùng."),
    reorder("a2-n17-5", "Chocolate melts if you leave it in the sun.", "Sự thật nên dùng loại 0: melts, leave đều ở hiện tại đơn. It thay cho chocolate, nên vế có chocolate đứng trước; mệnh đề if đứng sau nên không có dấu phẩy."),
    reorder("a2-n17-6", "The ice cream will melt if you leave it outside.", "Loại 1: will melt ở vế chính, leave ở vế if (không viết if you will leave). It thay cho the ice cream, nên vế có the ice cream đứng trước."),
    listen("a2-n17-7", "If I drink coffee in the evening, I can't sleep.", ["Tối nay tôi sẽ uống cà phê để thức khuya.", "Cứ uống cà phê buổi tối là tôi không ngủ được.", "Nếu tối nay không uống cà phê, tôi sẽ không ngủ được."], 1, "Điều kiện loại 0: nói về điều luôn xảy ra với người nói."),
    listen("a2-n17-8", "Unless you set an alarm, you'll oversleep.", ["Nếu bạn đặt báo thức, bạn sẽ ngủ quên.", "Bạn đặt báo thức rồi mà vẫn ngủ quên.", "Nếu không đặt báo thức, bạn sẽ ngủ quên."], 2, "Unless = if… not: nếu không đặt báo thức."),
    correct("a2-n17-9", "If it will be sunny tomorrow, we'll go to the beach.", ["If it is sunny tomorrow, we'll go to the beach.", "If it's sunny tomorrow, we'll go to the beach.", "We'll go to the beach if it is sunny tomorrow.", "We'll go to the beach if it's sunny tomorrow."], "Sau if không dùng will, dù nói về ngày mai: If it is sunny tomorrow..."),
    correct("a2-n17-10", "Unless you don't wear a hat, you'll get sunburn.", ["Unless you wear a hat, you'll get sunburn.", "If you don't wear a hat, you'll get sunburn.", "You'll get sunburn unless you wear a hat.", "You'll get sunburn if you don't wear a hat."], "Unless đã có nghĩa “nếu không”, nên bỏ don't. Hoặc giữ don't và dùng if."),
  ],
  freeSpeaking: free(
    "What will you do this weekend if the weather is bad?",
    "Nói 4–5 câu: nếu cuối tuần trời đẹp bạn sẽ làm gì, nếu trời mưa thì sao, và một điều hễ gặp là luôn xảy ra với bạn hoặc người nhà (loại 0).",
    "If the weather is nice this weekend, I'll take my children to the park. We'll have a picnic by the lake. But if it rains, we'll stay at home and watch a film. My son always gets bored if he stays inside all day, so we might go to the cinema too.",
  ),
  speaking: [
    say("If you heat ice, it melts.", "Hễ làm nóng đá là đá tan."),
    say("If it rains tomorrow, I'll stay at home.", "Nếu mai trời mưa, tôi sẽ ở nhà."),
    say("I won't go out unless you come with me.", "Tôi sẽ không ra ngoài trừ khi bạn đi cùng tôi."),
  ],
  dialogue: dialogue(
    "Hỏi kinh nghiệm đi Sa Pa",
    "Emma, đồng nghiệp người Úc, định đi Sa Pa vào tháng Mười Hai. Cô hỏi Tuấn nên chuẩn bị gì và nên đi lại thế nào.",
    { A: "Emma (đồng nghiệp)", B: "Tuấn" },
    A("Tuan, I'm going to Sa Pa next weekend. Any advice?", "Tuấn ơi, cuối tuần sau mình đi Sa Pa. Bạn có lời khuyên gì không?"),
    B("It's very cold there in December. If you don't take a warm jacket, you'll be really cold at night.", "Tháng Mười Hai ở đó lạnh lắm. Nếu không mang áo khoác ấm, buổi tối bạn sẽ rét cóng."),
    A("Really? Does it snow?", "Thật à? Ở đó có tuyết không?"),
    B("Not often. But if it gets very cold, the water on the grass freezes. It's beautiful in the morning.", "Không thường xuyên. Nhưng hễ trời rất lạnh là nước trên cỏ đóng băng. Buổi sáng trông đẹp lắm."),
    A("I want to go up Fansipan. Is it difficult?", "Mình muốn lên Fansipan. Có khó không?"),
    B("If you walk, it'll take two days. If you take the cable car, it'll take about twenty minutes.", "Nếu đi bộ thì sẽ mất hai ngày. Nếu đi cáp treo thì mất khoảng hai mươi phút."),
    A("Then I'll take the cable car! What if it rains?", "Vậy mình sẽ đi cáp treo! Nhỡ trời mưa thì sao?"),
    B("If it rains, you won't see anything from the top. Check the forecast before you go.", "Nếu mưa thì bạn sẽ chẳng nhìn thấy gì từ trên đỉnh. Xem dự báo thời tiết trước khi đi nhé."),
    A("Good idea. And how do I get there from Hanoi? By night bus?", "Ý hay. Còn từ Hà Nội đi thế nào? Đi xe khách đêm à?"),
    B("You can. If you sleep on the bus, you won't lose a day.", "Được đấy. Nếu ngủ được trên xe, bạn sẽ không mất một ngày."),
    A("But I never sleep on buses. If I don't sleep, I get a headache.", "Nhưng mình chẳng bao giờ ngủ được trên xe. Cứ mất ngủ là mình bị đau đầu."),
    B("Then take the night train and book a bed. Have a great trip!", "Vậy thì đi tàu đêm và đặt giường nằm. Chúc bạn đi vui!"),
  ),
  dialogueQuestions: [
    listenQ("a2-n17-d1", "Tuấn khuyên Emma mang theo gì?", "It's very cold there in December. If you don't take a warm jacket, you'll be really cold at night.", ["Ô che mưa", "Áo khoác ấm", "Giày leo núi", "Thuốc đau đầu"], 1, "If you don't take a warm jacket, you'll be really cold at night."),
    mc("a2-n17-d2", "Nếu đi cáp treo lên Fansipan thì mất bao lâu?", ["Hai ngày", "Hai tiếng", "Một ngày", "Khoảng hai mươi phút"], 3, "If you take the cable car, it'll take about twenty minutes."),
    listenQ("a2-n17-d3", "Vì sao Emma không muốn đi xe khách đêm?", "But I never sleep on buses. If I don't sleep, I get a headache.", ["Vì cứ mất ngủ là cô ấy bị đau đầu", "Vì xe khách quá đắt", "Vì xe khách đi chậm"], 0, "If I don't sleep, I get a headache: điều kiện loại 0, điều luôn xảy ra với Emma."),
  ],
  reading: reading({
    title: "Blog: Sống sót qua mùa hè Hà Nội",
    text: `Summer in Hanoi is hot and wet. Here are my tips for visitors.

If the temperature goes above thirty-five degrees, the streets are almost empty at lunchtime. People stay inside and have a nap. If you go out at noon, you'll get tired very quickly, so plan your walks for the early morning or the evening.

Always carry water. If you don't drink enough, you'll get a headache. And don't forget a hat. If you walk around the lake without one, you'll probably get sunburn.

Summer storms come quickly. If it rains hard, some streets flood in half an hour. Don't ride a motorbike through deep water. If water gets into the engine, the bike stops.

Ice cream is a great way to cool down, but eat it fast. If you leave it on the table, it melts in two minutes!

Unless you love the heat, don't come in July. October is the perfect month for a visit.`,
    glossary: [
      ["temperature", "nhiệt độ"],
      ["nap", "giấc ngủ ngắn (ngủ trưa)"],
      ["flood", "ngập nước"],
      ["deep", "sâu"],
      ["engine", "động cơ, máy"],
      ["cool down", "làm mát, hạ nhiệt"],
    ],
    questions: [
      mc("a2-n17-r1", "Bài blog chủ yếu nói về điều gì?", ["Lời khuyên cho du khách về mùa hè ở Hà Nội", "Cách làm kem ở nhà", "Lịch sử hồ Hoàn Kiếm", "Cách sửa xe máy bị ngập nước"], 0, "Here are my tips for visitors: cả bài là mẹo cho du khách vào mùa hè."),
      mc("a2-n17-r2", "Theo bài viết, nếu ra ngoài lúc giữa trưa thì sao?", ["Sẽ gặp nhiều người trên phố", "Sẽ rất nhanh mệt", "Sẽ bị ướt mưa"], 1, "If you go out at noon, you'll get tired very quickly."),
      mc("a2-n17-r3", "Nếu nước vào động cơ xe máy thì chuyện gì xảy ra?", ["Xe chạy chậm hơn", "Xe kêu rất to", "Xe chết máy"], 2, "If water gets into the engine, the bike stops: điều kiện loại 0, lần nào cũng thế."),
      fill("a2-n17-r4", "Nếu đi quanh hồ mà không đội mũ, có lẽ bạn sẽ bị cháy nắng: you'll probably get ___.", ["sunburn"], "If you walk around the lake without one, you'll probably get sunburn."),
      mc("a2-n17-r5", "Tác giả khuyên người không thích nóng nên đến Hà Nội vào tháng nào?", ["Tháng Bảy", "Tháng Mười", "Tháng Sáu"], 1, "Unless you love the heat, don't come in July. October is the perfect month for a visit."),
    ],
  }),
  task: task({
    prompt: "Một người bạn nước ngoài sắp đến thành phố của bạn vào mùa hè. Viết tin nhắn 6–8 câu (ít nhất 45 từ) khuyên bạn ấy: nếu gặp tình huống này thì sẽ ra sao, nên làm gì.",
    hints: [
      "Khả năng có thật ở tương lai: If you + hiện tại đơn, you'll / you won't + V.",
      "Điều hễ cứ thế là xảy ra: If + hiện tại đơn, hiện tại đơn.",
      "Thêm một câu với unless (nhớ không dùng thêm not).",
      "Có thể dùng câu mệnh lệnh ở vế chính: If you see dark clouds, go inside.",
    ],
    model: "Hi Jake! Summer in Ho Chi Minh City is hot and rainy. If you go out at noon, you'll get tired very quickly. It usually rains in the afternoon, and if it rains hard, some streets flood. If you see dark clouds, go inside a café and wait. If you don't drink enough water, you get a headache, so always carry a bottle. Unless you love the heat, stay in your hotel at lunchtime. See you soon!",
    checklist: [
      "Có ít nhất 1 câu điều kiện loại 1: If + hiện tại đơn, will / won't + V (If you go out at noon, you'll get tired)",
      "Có ít nhất 2 câu điều kiện loại 0 cho điều hễ cứ thế là xảy ra (if it rains hard, some streets flood)",
      "Không có will trong mệnh đề if",
      "Có 1 câu với unless, không kèm not",
      "Mệnh đề if đứng đầu câu có dấu phẩy ngăn cách",
    ],
    minWords: 45,
  }),
});
