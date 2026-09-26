import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "duoi-s-va-ed",
  title: "Đọc đuôi -s và -ed",
  minutes: 30,
  lecture: {
    title: "Ba cách đọc -s và ba cách đọc -ed",
    blocks: [
      p("Một học trò kể với sếp người Anh: “Yesterday I walk to the office”, dù trong email cậu ấy đã viết đúng **walked**. Vấn đề không nằm ở ngữ pháp mà ở miệng: tiếng Việt không có đuôi chia động từ, nên khi nói ta hay **bỏ mất -s và -ed**, hoặc ngược lại đọc thừa thành một âm tiết mới. Tin vui cho các bạn là cả hai đuôi đều theo quy tắc rất rõ, dựa vào **âm cuối** của từ gốc."),
      p("Trước hết cần nhớ: quy tắc dựa vào **âm**, không dựa vào **chữ cái**. Âm **vô thanh** là âm cổ không rung: /p/ /t/ /k/ /f/ /θ/ /s/ /ʃ/ /tʃ/. Âm **hữu thanh** là âm cổ rung: /b/ /d/ /ɡ/ /v/ /ð/ /z/ /ʒ/ /dʒ/ /m/ /n/ /ŋ/ /l/ và mọi nguyên âm."),
      table(
        ["Đuôi -s đọc là", "Khi từ gốc tận cùng bằng âm", "Ví dụ"],
        ["/ɪz/ (thêm một âm tiết)", "/s/ /z/ /ʃ/ /ʒ/ /tʃ/ /dʒ/", "watches, boxes, washes, pages"],
        ["/s/", "âm vô thanh còn lại: /p/ /t/ /k/ /f/ /θ/", "cooks, stops, gets, laughs"],
        ["/z/", "âm hữu thanh còn lại và nguyên âm", "dogs, plays, lives, sees"],
      ),
      ex("She watches TV every night.", "Tối nào cô ấy cũng xem ti vi.", "Watch tận cùng bằng /tʃ/ nên watches đọc /ˈwɒtʃ.ɪz/, thành hai âm tiết."),
      ex("My brother cooks and my sister plays the piano.", "Anh tôi nấu ăn còn chị tôi chơi đàn piano.", "Cooks /kʊks/ đọc /s/ vì /k/ vô thanh; plays /pleɪz/ đọc /z/ vì tận cùng là nguyên âm."),
      p("Đuôi **-ed** là dấu hiệu của thì quá khứ, các bạn sẽ học cách dùng ở khóa A1. Ở bài này, phần -ed là **chỉ luyện đọc**: các bạn chưa cần tự viết câu quá khứ, chỉ cần **đọc đúng và nghe ra** các từ như walked, played, wanted khi gặp trong sách hay khi người khác nói."),
      table(
        ["Đuôi -ed đọc là", "Khi từ gốc tận cùng bằng âm", "Ví dụ (chỉ luyện đọc)"],
        ["/ɪd/ (thêm một âm tiết)", "/t/ /d/", "wanted, needed, visited, decided"],
        ["/t/", "âm vô thanh còn lại: /p/ /k/ /f/ /θ/ /s/ /ʃ/ /tʃ/", "walked, stopped, washed, watched"],
        ["/d/", "âm hữu thanh còn lại và nguyên âm", "played, lived, cleaned, called"],
      ),
      ex("We walked for an hour, so we needed a rest.", "Chúng tôi đi bộ một tiếng nên cần nghỉ một chút.", "Chỉ luyện đọc. Walked /wɔːkt/ chỉ có một âm tiết; needed /ˈniː.dɪd/ có hai âm tiết vì need tận cùng bằng /d/."),
      ex("I wanted to call you, but I played football all afternoon.", "Tôi định gọi cho bạn nhưng cả buổi chiều tôi đá bóng.", "Chỉ luyện đọc. Wanted /ˈwɒn.tɪd/ thêm âm tiết; played /pleɪd/ vẫn một âm tiết."),
      mistake("walked đọc thành “uốc-kịt” /ˈwɔː.kɪd/", "walked /wɔːkt/, chỉ một âm tiết", "Thấy chữ -ed là người Việt đọc thành “ịt”. Nhưng chỉ sau /t/ và /d/ mới thêm âm tiết /ɪd/. Wanted có hai âm tiết, walked thì không."),
      mistake("He play football every Sunday.", "He plays /pleɪz/ football every Sunday.", "Tiếng Việt không chia động từ nên ta quên -s ở ngôi thứ ba. Khi nói, nhớ đọc ra âm /z/ ở cuối plays, cổ rung nhẹ."),
      mistake("boxes đọc thành “bóc” hoặc “bóc-x”", "boxes /ˈbɒk.sɪz/, hai âm tiết", "Box đã tận cùng bằng /s/ (chữ x đọc /ks/) nên phải thêm hẳn âm tiết /ɪz/. Bỏ đi thì người nghe tưởng chỉ có một cái hộp."),
      tip("Đặt tay lên cổ, đọc âm cuối của từ gốc: nếu cổ rung thì đuôi đọc /z/ hoặc /d/, không rung thì đọc /s/ hoặc /t/. Nhìn **âm**, đừng nhìn chữ: **laughs** đọc /lɑːfs/ vì gh đọc là /f/, **fixes** đọc /ˈfɪk.sɪz/ vì x là /ks/. Quy tắc -s cũng áp dụng cho **'s** sở hữu: Kate's /keɪts/, John's /dʒɒnz/."),
      teacher("Tôi dạy quy tắc này cho học trò ở mọi lứa tuổi, và cái bẫy lớn nhất luôn là **đọc thừa âm tiết**: walked thành “uốc-kịt”, cooked thành “cúc-kịt”. Các bạn chỉ cần nhớ hai câu: **-ed chỉ thành âm tiết mới sau /t/ và /d/**, **-s chỉ thành âm tiết mới sau các âm xì, âm rít** (/s/ /z/ /ʃ/ /ʒ/ /tʃ/ /dʒ/). Mỗi tối, các bạn nói to ba câu về thói quen của người thân (My mother cooks…, My father watches…), rồi đọc to mười động từ -ed trong bảng. Mỗi lần đọc, tự hỏi: đuôi của mình là /s/, /z/, /ɪz/ hay /t/, /d/, /ɪd/?"),
      summary(
        "Cách đọc đuôi dựa vào **âm cuối** của từ gốc, không dựa vào chữ cái.",
        "Đuôi -s: /ɪz/ sau /s/ /z/ /ʃ/ /ʒ/ /tʃ/ /dʒ/; /s/ sau âm vô thanh còn lại; /z/ sau âm hữu thanh và nguyên âm.",
        "Đuôi -ed (chỉ luyện đọc): /ɪd/ sau /t/ /d/; /t/ sau âm vô thanh còn lại; /d/ sau âm hữu thanh và nguyên âm.",
        "Chỉ /ɪz/ và /ɪd/ mới thêm âm tiết: walked là một âm tiết, wanted là hai.",
        "Đuôi 's sở hữu đọc theo đúng quy tắc của -s: Kate's /keɪts/, John's /dʒɒnz/.",
      ),
    ],
  },
  words: [
    word("watches", "/ˈwɒtʃ.ɪz/", "xem (ngôi thứ ba); những chiếc đồng hồ đeo tay", "He watches the news every morning.", "watch|es", 0, "Hai âm tiết: /ˈwɒtʃ/ + /ɪz/. Đừng nuốt âm tiết cuối."),
    word("boxes", "/ˈbɒk.sɪz/", "những cái hộp", "Put the boxes in the car.", "box|es", 0, "Box đã có /ks/ ở cuối, nên thêm hẳn một âm tiết /ɪz/."),
    word("cooks", "/kʊks/", "nấu ăn (ngôi thứ ba)", "My mother cooks very well.", "cooks", 0, "Một âm tiết, kết thúc bằng /ks/ vô thanh, không rung cổ."),
    word("dogs", "/dɒɡz/", "những con chó", "They have two dogs.", "dogs", 0, "Đuôi -s đọc /z/ vì /ɡ/ hữu thanh. Cổ rung ở cuối từ."),
    word("wanted", "/ˈwɒn.tɪd/", "đã muốn", "I wanted a cup of coffee.", "want|ed", 0, "Chỉ luyện đọc. Want tận cùng bằng /t/ nên -ed thành âm tiết /ɪd/."),
    word("needed", "/ˈniː.dɪd/", "đã cần", "We needed more time.", "need|ed", 0, "Chỉ luyện đọc. Need tận cùng bằng /d/ nên thêm âm tiết /ɪd/."),
    word("walked", "/wɔːkt/", "đã đi bộ", "She walked to the station.", "walked", 0, "Chỉ luyện đọc. Chỉ một âm tiết, không đọc thành “uốc-kịt”; chữ l không đọc."),
    word("played", "/pleɪd/", "đã chơi", "The children played in the park.", "played", 0, "Chỉ luyện đọc. Một âm tiết, kết thúc bằng /d/ nhẹ, cổ rung."),
  ],
  dialogue: dialogue(
    "Cuối tuần của gia đình bạn",
    "Giờ nghỉ trưa ở văn phòng, Hùng và Sarah, đồng nghiệp người Anh, kể cho nhau nghe mỗi người trong nhà thường làm gì vào cuối tuần.",
    { A: "Hùng", B: "Sarah" },
    A("Sarah, what does your family do at the weekend?", "Sarah, cuối tuần gia đình bạn thường làm gì?"),
    B("My husband cooks a big lunch, and my daughter plays the piano.", "Chồng tôi nấu một bữa trưa thật thịnh soạn, còn con gái tôi chơi đàn piano."),
    A("That sounds lovely. Does your son play the piano too?", "Nghe thật thích. Con trai bạn cũng chơi đàn à?"),
    B("No. He watches football on TV and plays games.", "Không. Nó xem bóng đá trên ti vi và chơi điện tử."),
    A("My son likes games too. He plays all day!", "Con trai tôi cũng thích trò chơi. Nó chơi cả ngày!"),
    B("And what about you, Hung?", "Còn anh thì sao, Hùng?"),
    A("I clean the flat and wash the dishes. My wife fixes things.", "Tôi dọn căn hộ và rửa bát. Vợ tôi thì sửa đồ đạc."),
    B("She fixes things? That's great.", "Chị ấy sửa đồ à? Hay quá."),
    A("Yes. She fixes lamps, clocks and bikes.", "Đúng vậy. Cô ấy sửa đèn, đồng hồ và xe đạp."),
    B("And your mother?", "Còn mẹ anh thì sao?"),
    A("She visits us on Sundays and watches the children.", "Chủ nhật bà đến thăm chúng tôi và trông bọn trẻ."),
    B("What a busy family! Mine just relaxes.", "Gia đình anh bận rộn thật! Nhà tôi thì chỉ nghỉ ngơi thôi."),
  ),
  dialogueQuestions: [
    listenQ("pa-n06-d1", "Con trai của Sarah làm gì vào cuối tuần?", "No. He watches football on TV and plays games.", ["Chơi đàn piano", "Xem bóng đá và chơi điện tử", "Nấu bữa trưa"], 1, "“He watches football on TV and plays games.” Watches có âm tiết /ɪz/, plays kết thúc bằng /z/."),
    mc("pa-n06-d2", "Vợ của Hùng thường làm gì?", ["Rửa bát", "Trông bọn trẻ", "Sửa đèn, đồng hồ và xe đạp"], 2, "Hùng nói “She fixes lamps, clocks and bikes.” Rửa bát là việc của Hùng, trông bọn trẻ là việc của mẹ Hùng."),
    mc("pa-n06-d3", "Ai đến thăm nhà Hùng vào Chủ nhật?", ["Mẹ của Hùng", "Sarah", "Con gái của Sarah"], 0, "“She visits us on Sundays and watches the children.” She ở đây là mẹ của Hùng."),
  ],
  reading: reading({
    title: "Chủ nhật ở nhà Mai",
    text: `On Sundays, our house is very busy. My father gets up early. He washes the car and fixes his old bike. My mother cooks lunch for the whole family. She makes fish soup and rice.

My little brother Nam loves music. He plays the guitar in his room, and our dog sings with him! My sister Lan reads books and watches films.

And me? I teach English to two kids next door. They practise the -ed words with me: walked, played, wanted. Then we eat cakes and laugh.

What happens in your house on Sundays?`,
    glossary: [["whole", "cả, toàn bộ"], ["guitar", "đàn ghi-ta"], ["next door", "nhà bên cạnh"], ["practise", "luyện tập"], ["laugh", "cười"]],
    questions: [
      mc("pa-n06-r1", "Bài viết kể về điều gì?", ["Một chuyến đi chơi xa của gia đình Mai", "Những việc mỗi người trong nhà Mai làm vào Chủ nhật", "Công việc của bố Mai ở văn phòng"], 1, "Mỗi đoạn kể việc của một người trong nhà vào ngày Chủ nhật."),
      mc("pa-n06-r2", "Bố của Mai làm gì vào Chủ nhật?", ["Rửa xe ô tô và sửa chiếc xe đạp cũ", "Nấu bữa trưa", "Đọc sách và xem phim"], 0, "“He washes the car and fixes his old bike.”"),
      fill("pa-n06-r3", "My mother makes fish ___ and rice. (món canh, súp)", ["soup"], "“She makes fish soup and rice.”"),
      mc("pa-n06-r4", "Trong các từ của bài, từ nào có đuôi -s đọc là /ɪz/?", ["plays", "reads", "washes", "gets"], 2, "Wash tận cùng bằng /ʃ/ nên washes đọc /ˈwɒʃ.ɪz/. Plays, reads đọc /z/; gets đọc /s/."),
      mc("pa-n06-r5", "Ai “hát” theo khi Nam chơi đàn?", ["Chị Lan", "Con chó", "Mẹ của Mai"], 1, "“He plays the guitar in his room, and our dog sings with him!”"),
    ],
  }),
  exercises: [
    mc("pa-n06-1", "Từ nào đọc đuôi -ed là /ɪd/?", ["walked", "played", "wanted", "watched"], 2, "Want tận cùng bằng /t/ nên wanted đọc /ˈwɒn.tɪd/. Walked và watched đọc /t/, played đọc /d/."),
    mc("pa-n06-2", "Đuôi -s trong “dogs” đọc là gì?", ["/s/", "/z/", "/ɪz/"], 1, "Dog tận cùng bằng /ɡ/ hữu thanh nên -s đọc /z/: /dɒɡz/."),
    listen("pa-n06-3", "She watches TV every night.", ["watch", "watches", "watched"], 1, "Các bạn nghe được âm tiết /ɪz/ ở cuối: watches /ˈwɒtʃ.ɪz/."),
    listen("pa-n06-4", "He walked home yesterday.", ["walked", "walks", "walk"], 0, "Chỉ luyện nghe. Cuối từ có âm /t/ nhẹ: walked /wɔːkt/, và yesterday cho biết đây là quá khứ. Walks sẽ kết thúc bằng /s/."),
    fill("pa-n06-5", "She ___ TV every night. (watch)", ["watches"], "Ngôi thứ ba số ít, watch tận cùng bằng ch nên thêm -es, đọc /ɪz/."),
    fill("pa-n06-6", "Kate ___ her grandparents every weekend. (visit)", ["visits"], "Ngôi thứ ba số ít nên thêm -s. Visit tận cùng bằng /t/ vô thanh nên visits đọc /s/: /ˈvɪz.ɪts/, không thêm âm tiết."),
    reorder("pa-n06-7", "My mother washes the dishes.", "Washes /ˈwɒʃ.ɪz/ có hai âm tiết, dishes /ˈdɪʃ.ɪz/ cũng vậy, vì cả hai tận cùng bằng /ʃ/."),
    reorder("pa-n06-8", "Kate's dog plays in the garden.", "Kate's đọc /keɪts/ (theo quy tắc -s: /t/ vô thanh nên đọc /s/), plays đọc /pleɪz/ với /z/ rung."),
    correct("pa-n06-9", "My sister watch TV every night.", ["My sister watches TV every night.", "My sisters watch TV every night.", "My sister watched TV every night."], "Chủ ngữ my sister là ngôi thứ ba số ít nên phải là watches, đọc thêm âm tiết /ɪz/."),
    correct("pa-n06-10", "There are three boxs on the table.", "There are three boxes on the table.", "Box tận cùng bằng x nên số nhiều thêm -es: boxes, đọc /ˈbɒk.sɪz/ với hai âm tiết."),
  ],
  speaking: [
    say("She watches TV every night.", "Tối nào cô ấy cũng xem ti vi."),
    say("Walked, played, wanted, needed.", "Chỉ luyện đọc: bốn động từ quá khứ, đuôi -ed đọc lần lượt là /t/, /d/, /ɪd/, /ɪd/."),
    say("My brother plays football and cooks dinner.", "Anh tôi đá bóng và nấu bữa tối."),
  ],
  freeSpeaking: free(
    "What do the people in your family do every day?",
    "Nói 3–4 câu về thói quen của người thân (bố, mẹ, anh chị em), dùng động từ có đuôi -s và đọc rõ /s/, /z/, /ɪz/.",
    "My father gets up at six and drinks coffee. My mother cooks breakfast for us. My sister washes the dishes, and my little brother watches cartoons.",
  ),
  task: task({
    prompt: "Viết 5–6 câu về thói quen hằng ngày của những người trong gia đình bạn, dùng ít nhất năm từ có đuôi -s thuộc đủ ba cách đọc /s/, /z/, /ɪz/. Ghi cách đọc đuôi bên cạnh từng từ, rồi đọc to. Cuối cùng, đọc to năm động từ -ed trong bảng (chỉ luyện đọc, không cần viết câu): walked, played, washed, wanted, needed.",
    hints: [
      "Đuôi /s/: cooks, gets, drinks, sleeps; đuôi /z/: plays, reads, cleans; đuôi /ɪz/: watches, washes, fixes.",
      "Có thể bắt đầu bằng: My mother gets up at six and…",
      "Trước khi đọc, đặt tay lên cổ và kiểm tra âm cuối của từ gốc.",
    ],
    model: "My mother gets up at six and cooks breakfast. My father reads the news and drinks tea. My sister washes the dishes after dinner. My brother plays football and watches TV. Our dog sleeps on the sofa all day.",
    checklist: [
      "Có ít nhất năm từ đuôi -s, đủ cả ba cách đọc: /s/ (gets, cooks), /z/ (reads, plays), /ɪz/ (washes, watches)",
      "Chỉ washes, watches, dishes (sau /ʃ/, /tʃ/) thêm âm tiết /ɪz/; cooks, gets chỉ một âm tiết",
      "Reads, plays kết thúc bằng /z/, tay trên cổ thấy rung",
      "Không quên -s ở động từ khi chủ ngữ là ngôi thứ ba số ít",
      "Đọc đúng năm động từ -ed: walked, washed /t/; played /d/; wanted, needed thêm âm tiết /ɪd/",
    ],
    minWords: 30,
  }),
});
