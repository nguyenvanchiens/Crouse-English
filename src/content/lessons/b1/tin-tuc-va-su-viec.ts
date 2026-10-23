import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
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
    mc("b1-6-1", "The letters ___ every morning.", ["deliver", "are delivering", "are delivered", "delivered"], 2, "Thư không tự giao, mà được người khác giao, nên dùng bị động hiện tại đơn: are + V3. Are delivering là chủ động (thư đang đi giao), deliver và delivered thiếu be."),
    mc("b1-6-2", "Many houses ___ by the storm last night.", ["were damaged", "damaged", "are damaged", "was damaged"], 0, "Last night là quá khứ, chủ ngữ số nhiều (many houses): were damaged. Không bỏ were, và không dùng was với chủ ngữ số nhiều."),
    fill("b1-6-3", "Today, English ___ spoken in many countries.", ["is"], "English là danh từ số ít: is + V3."),
    fill("b1-6-4", "The report was written ___ a young journalist.", ["by"], "By dùng để chỉ người thực hiện hành động."),
    reorder("b1-6-5", "The new hospital was built by a Japanese company.", "Quá khứ đơn bị động: was + V3 (built), by + người thực hiện đứng cuối câu."),
    reorder("b1-6-6", "Two people were taken to hospital.", "Chủ ngữ số nhiều nên dùng were + V3. Take có V3 là taken. Tiếng Anh-Anh nói to hospital, không cần the."),
    listen("b1-6-7", "The flight was cancelled because of bad weather.", ["Chuyến bay bị hủy vì thời tiết xấu.", "Chuyến bay bị hoãn vì thời tiết xấu.", "Thời tiết xấu nhưng chuyến bay vẫn cất cánh."], 0, "Cancelled là hủy, còn hoãn là delayed."),
    listen("b1-6-8", "A new law was announced by the government yesterday.", ["Chính phủ sẽ công bố luật mới vào ngày mai.", "Hôm qua chính phủ đã công bố một luật mới.", "Luật mới đã được thông qua từ năm ngoái."], 1),
    correct("b1-6-9", "The new school was build in 2021.", "The new school was built in 2021.", "Sau was / were phải là V3. Build là động từ bất quy tắc: build, built, built."),
    correct("b1-6-10", "A strange thing was happened at the station yesterday.", "A strange thing happened at the station yesterday.", "Happen là nội động từ, không có tân ngữ, nên không bao giờ ở dạng bị động. Bỏ was."),
    fill("b1-6-11", "After the fire, the old library ___ last year. (rebuild)", ["was rebuilt"], "Thư viện không tự xây lại, last year là quá khứ: was + V3. Rebuild là động từ bất quy tắc: rebuild, rebuilt, rebuilt."),
    fill("b1-6-12", "Rice ___ in the Mekong Delta every year. (grow)", ["is grown"], "Sự thật lặp lại hằng năm, chủ ngữ rice không đếm được: is + V3. Grow có V3 là grown."),
    correct("b1-6-13", "The results announced on the radio this morning.", "The results were announced on the radio this morning.", "Kết quả không tự công bố, nên cần bị động. Tiếng Việt nói “kết quả công bố sáng nay” mà không cần “được”, nhưng tiếng Anh bắt buộc có were trước V3."),
    reorder("b1-6-14", "The museum is visited by thousands of tourists.", "Hiện tại đơn bị động: is + V3 (visited), by + người thực hiện đứng sau động từ."),
  ],
  freeSpeaking: free(
    "What is an interesting piece of news from your town or city recently?",
    "Kể một tin gần đây ở nơi bạn sống như một phóng viên: chuyện gì, ở đâu, khi nào. Dùng câu bị động is / are + V3 và was / were + V3.",
    "Recently, a new park was opened near my house. It was built on an old car park, and hundreds of trees were planted there. Now the park is used by families every evening, and free exercise classes are held there on Sundays. Unfortunately, some rubbish is left on the grass at weekends, so more bins are needed.",
  ),
  dialogueQuestions: [
    listenQ("b1-6-d1", "Where were the families moved after the flood?", "Luckily, nobody was injured. Many families were moved to a school nearby.", ["To a hospital", "To a hotel in Da Nang", "To a school nearby", "To their relatives' homes"], 2, "Many families were moved to a school nearby."),
    mc("b1-6-d2", "Who built the new bridge in Da Nang?", ["A Japanese company", "A Vietnamese company", "The local government"], 1, "It was built by a Vietnamese company in only two years."),
    mc("b1-6-d3", "Why does Sarah say “That's good news” about the flood?", ["Only a few homes were damaged.", "Nobody was hurt.", "The roads were opened again.", "The families went back home."], 1, "Sarah nói câu này ngay sau khi nghe nobody was injured. Hàng trăm ngôi nhà vẫn bị hư hại, nên điều khiến cô thấy may là không ai bị thương."),
  ],
  reading: reading({
    title: "Old market reopens after fire",
    text: `SONG XANH – Shoppers returned to Song Xanh Central Market last Saturday morning, eight months after a fire destroyed nearly half of its stalls.

The fire broke out at around four in the morning on the fourteenth of March. Luckily, the market was still closed at that time, and nobody was injured. However, more than sixty stalls were damaged, and many sellers lost their stock and their savings. Fire officers later said that the fire was caused by an old electrical cable behind a food stall.

Work on the new building started in May. It is made of steel and brick, and there are smoke alarms in every section. The town council says the work cost around twenty billion dong. About a quarter of the money came from local businesses, and visitors to the town left donations in boxes at the post office and in cafés.

Not everyone is happy with the changes. Rents for some stalls have gone up, and a few older sellers have decided not to come back. "I'm sixty-eight. I can't pay more and start again," said Mr Le Van Hoa, who sold rice and dried fish at the market for over thirty years. A council officer said they would look at the rents again at the end of the year.

For most sellers, though, Saturday was a day to celebrate. Mrs Tran Thi Mai, who has run a fruit stall here since 2006, was one of the first to open. "I cried when I saw the fire on the news," she said. "Today I'm crying again, but this time it's because I'm happy."

The market is open every day from six in the morning until seven in the evening. Shoppers are asked to use the new car park behind the building, as parking on Tran Phu Street is no longer allowed.`,
    glossary: [
      ["stall", "sạp hàng, quầy hàng"],
      ["destroyed", "phá hủy"],
      ["electrical cable", "dây điện"],
      ["steel", "thép"],
      ["brick", "gạch"],
      ["council", "hội đồng, chính quyền địa phương"],
      ["donations", "tiền quyên góp"],
      ["rents", "tiền thuê (sạp, nhà)"],
    ],
    questions: [
      mc("b1-6-r1", "What is the news report mainly about?", ["A new market that was built for tourists", "The reopening of a market after a fire", "A fire that closed a market forever", "Why older sellers are leaving the market"], 1, "Tiêu đề và câu đầu: người mua quay lại chợ tám tháng sau vụ cháy. Chuyện người bán lớn tuổi không quay lại chỉ là một ý nhỏ trong bài."),
      mc("b1-6-r2", "What caused the fire?", ["A gas cooker in a food stall", "An old electrical cable", "A tourist's cigarette", "A storm"], 1, "Fire officers later said that the fire was caused by an old electrical cable behind a food stall."),
      fill("b1-6-r3", "Nobody was ___ in the fire because the market was still closed.", ["injured", "hurt"], "Luckily, the market was still closed at that time, and nobody was injured."),
      mc("b1-6-r4", "What can we guess about the new building?", ["It is safer than the old one.", "It is smaller than the old one.", "It was paid for only by tourists.", "It is closed on Sundays."], 0, "Chợ mới xây bằng thép và gạch, có báo khói ở mọi khu, nên ta suy ra nó an toàn hơn chợ cũ. Chợ mở cửa mọi ngày, và tiền đến từ nhiều nguồn chứ không chỉ du khách."),
      mc("b1-6-r5", "Why has Mr Hoa probably decided not to return?", ["His stall was not damaged in the fire.", "He now sells fruit in another town.", "The council asked him to leave.", "The higher rent is too much for him at his age."], 3, "Ông Hoa không nói thẳng lý do, nhưng bài viết nhắc tiền thuê sạp tăng, và ông nói I'm sixty-eight. I can't pay more and start again. Ta suy ra tiền thuê mới quá sức với một người lớn tuổi."),
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
