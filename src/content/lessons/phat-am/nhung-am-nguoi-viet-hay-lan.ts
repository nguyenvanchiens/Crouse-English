import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "nhung-am-nguoi-viet-hay-lan",
  title: "Những âm người Việt hay lẫn",
  minutes: 35,
  lecture: {
    title: "L và n, r và z, ch và sh, w và v, cụm phụ âm đầu",
    blocks: [
      p("Một bạn lập trình viên kể với tôi: họp trực tuyến với khách hàng ở Úc, cậu ấy nói “I'll fix the night” và cả phòng im lặng. Cậu ấy định nói **light** (đèn), nhưng giọng quê cậu ấy lẫn **l** với **n**. Mỗi vùng miền của Việt Nam có vài cặp âm hay đọc giống nhau, và khi nói tiếng Anh, thói quen đó đi theo chúng ta. Bài này gom những cặp hay lẫn nhất để các bạn tự tìm ra “âm yếu” của mình."),
      p("Nguyên nhân nằm ở tiếng Việt: ở một số vùng miền Bắc, **l** và **n** đọc lẫn nhau; giọng Bắc đọc **r, d, gi** đều thành /z/; giọng Nam đọc **v** và **gi** gần như /j/ (“dạ”); chữ **ch** tiếng Việt chỉ chạm rồi mở, không xì hơi như /tʃ/; và tiếng Việt **không có cụm phụ âm đầu**, mỗi tiếng chỉ mở đầu bằng một phụ âm."),
      table(
        ["Cặp dễ lẫn", "Ai hay lẫn", "Cách phân biệt", "Cặp từ để luyện"],
        ["/l/ – /n/", "một số vùng miền Bắc", "/n/: hơi đi ra mũi; /l/: hơi đi ra hai bên lưỡi, bịt mũi vẫn nói được", "light – night, low – no"],
        ["/r/ – /z/", "giọng Bắc (r = d = gi)", "/r/: môi hơi tròn, lưỡi cong lên nhưng không chạm, không xì; /z/: xì hơi qua kẽ răng, cổ rung", "red – zed, rip – zip"],
        ["/tʃ/ – /ʃ/", "mọi miền", "/tʃ/: lưỡi chạm lợi rồi mới xì; /ʃ/: chỉ xì, lưỡi không chạm", "cheap – sheep, chip – ship"],
        ["/dʒ/ – /j/", "giọng Nam (gi đọc như “d” miền Nam)", "/dʒ/: lưỡi chạm lợi rồi xì có rung; /j/: lưỡi không chạm, như “y”", "jet – yet, jam – yam"],
        ["/w/ – /v/", "mọi miền (tiếng Việt không có chữ w)", "/w/: môi tròn, răng không chạm; /v/: răng trên chạm môi dưới", "wine – vine, west – vest"],
      ),
      ex("It's dark in here. Can you turn on the light?", "Trong này tối quá. Bạn bật đèn lên được không?", "Light /laɪt/: đầu lưỡi chạm lợi, hơi đi ra hai bên lưỡi, không đi qua mũi. Night /naɪt/ mới có hơi ra mũi."),
      ex("I'd like some rice and a glass of red wine.", "Cho tôi ít cơm và một ly vang đỏ.", "Rice và red bắt đầu bằng /r/ môi tròn, lưỡi không chạm, không đọc thành “zai”, “zét”. Wine bắt đầu bằng /w/: chu môi như “u”, răng không chạm môi."),
      ex("The sheep at this farm are not cheap.", "Cừu ở trang trại này không rẻ.", "Sheep /ʃiːp/ chỉ xì hơi; cheap /tʃiːp/ chạm đầu lưỡi vào lợi trước rồi mới xì, như “t” và “sh” dính liền."),
      p("Khó nhất với người Việt là **cụm phụ âm đầu**: hai, ba phụ âm đứng liền nhau trước nguyên âm. Vì tiếng Việt không có cụm này, ta hay **chèn “ơ”** vào giữa cho dễ đọc: street thành “xờ-trít”, class thành “cờ-lát”. Chèn một “ơ” là thêm một âm tiết, và người nghe phải đoán xem bạn muốn nói từ gì."),
      table(
        ["Cụm đầu", "Ví dụ", "Lỗi hay gặp", "Cách đọc đúng"],
        ["/pl/ /pr/", "play, price", "“pờ-lây”, “pờ-rai”", "đặt sẵn lưỡi cho /l/, /r/ rồi mới mở môi cho /p/"],
        ["/bl/ /br/", "blue, bread", "“bờ-lu”, “bờ-rét”", "/b/ và /l/, /r/ đọc liền trong một âm tiết"],
        ["/kl/ /kr/", "class, cream", "“cờ-lát”, “cờ-rim”", "không có “ơ” giữa /k/ và /l/, /r/"],
        ["/tr/", "train, tree", "đọc bằng “tr” tiếng Việt", "/t/ dính vào /r/ môi tròn, nghe gần “chr”"],
        ["/str/ /spr/ /skr/", "street, spring, screen", "“xờ-trít”, “xờ-pờ-rinh”", "xì /s/ rồi trượt thẳng sang hai âm sau, vẫn một âm tiết"],
      ),
      ex("Let's cross the street at the traffic lights.", "Mình sang đường ở chỗ đèn giao thông nhé.", "Street /striːt/, cross /krɒs/, traffic /ˈtræf.ɪk/: đều là cụm đầu, không chèn “ơ”. Street chỉ có một âm tiết."),
      mistake("Turn off the night, please. (định nói light)", "Turn off the light, please. light /laɪt/", "Ở một số vùng miền Bắc, l và n đọc lẫn nhau. Hãy bịt mũi và đọc light: nếu âm bị tắc, nghĩa là bạn đang đọc /n/."),
      mistake("rice đọc thành “zai”, red đọc thành “zét”", "rice /raɪs/, red /red/: môi hơi tròn, lưỡi cong lên, không chạm, không xì hơi", "Giọng Bắc đọc chữ r tiếng Việt thành /z/. Nhưng /z/ là một âm khác trong tiếng Anh (zoo, zed), nên rice nghe như một từ lạ."),
      mistake("street đọc thành “xờ-trít” (hai âm tiết)", "street /striːt/: một âm tiết, ba phụ âm liền nhau /str/", "Tiếng Việt không có cụm phụ âm đầu nên ta chèn “ơ” cho dễ đọc. Mỗi “ơ” chèn thêm là một âm tiết thừa."),
      mistake("wine đọc thành vine /vaɪn/, west thành vest", "wine /waɪn/, west /west/: môi tròn, răng không chạm môi", "Tiếng Việt không có chữ w, nên thấy w nhiều bạn dùng âm gần nhất là v. Nhưng vine là cây nho, vest là áo gi-lê."),
      tip("Ba phép thử tự làm ở nhà: **bịt mũi** để kiểm tra /l/ (vẫn nói được) và /n/ (bị tắc); **nhìn gương** để thấy môi tròn ở /w/, /r/ và răng chạm môi ở /v/; **đếm âm tiết** bằng ngón tay khi đọc street, spring, class: phải chỉ là một ngón."),
      teacher("Nhiều bạn học viên hỏi tôi: “Em có lẫn âm nào không?” Tôi luôn trả lời: **ghi âm rồi tự nghe**. Các bạn đọc chậm từng cặp light – night, rice – “zice”, cheap – sheep, wine – vine, nhờ một người bạn chỉ vào từ bất kỳ cho mình đọc, xem họ có đoán đúng không. Cặp nào họ đoán sai, đó là cặp các bạn luyện năm phút mỗi ngày. Mỗi người chỉ có hai, ba âm yếu thôi, đừng sửa tất cả cùng lúc."),
      summary(
        "/l/ hơi ra hai bên lưỡi, /n/ hơi ra mũi: **bịt mũi** để kiểm tra. light khác night.",
        "/r/ tiếng Anh môi hơi tròn, lưỡi không chạm, không xì: rice không phải “zai”.",
        "/tʃ/ chạm lưỡi rồi xì (cheap), /ʃ/ chỉ xì (sheep); /dʒ/ (jet) khác /j/ (yet).",
        "/w/ môi tròn, răng không chạm; /v/ răng trên chạm môi dưới: wine khác vine.",
        "Cụm phụ âm đầu (pl, br, kr, str, spr) đọc liền, **không chèn “ơ”**: street chỉ một âm tiết.",
      ),
    ],
  },
  words: [
    word("light", "/laɪt/", "ánh sáng; cái đèn", "Please turn off the light.", "light", 0, "Đầu lưỡi chạm lợi, hơi ra hai bên lưỡi; bịt mũi vẫn đọc được. Đừng đọc thành night."),
    word("night", "/naɪt/", "ban đêm", "I work late at night.", "night", 0, "/n/ hơi đi ra mũi. Chữ gh không đọc; cuối từ chặn lưỡi ở lợi cho /t/, đừng bỏ."),
    word("rice", "/raɪs/", "cơm, gạo", "We eat rice every day.", "rice", 0, "Môi hơi tròn, lưỡi cong lên không chạm cho /r/; không đọc thành “zai”. Cuối từ xì rõ /s/."),
    word("street", "/striːt/", "đường phố", "My office is on a busy street.", "street", 0, "Một âm tiết: /s/ trượt thẳng sang /t/ và /r/, không chèn “ơ” (“xờ-trít”)."),
    word("spring", "/sprɪŋ/", "mùa xuân", "Hanoi is lovely in spring.", "spring", 0, "Cụm /spr/ đọc liền một hơi; cuối từ là /ŋ/ như “ng”, không bật thêm “g”."),
    word("wine", "/waɪn/", "rượu vang", "Would you like some red wine?", "wine", 0, "Chu môi tròn như “u” rồi mở ra cho /w/; răng không chạm môi, nếu không sẽ thành vine."),
    word("chair", "/tʃeə/", "cái ghế", "Please take a chair.", "chair", 0, "/tʃ/ chạm lưỡi vào lợi rồi xì, môi chu tròn; trượt “e-ơ”, không đọc chữ r."),
    word("jeans", "/dʒiːnz/", "quần bò, quần jeans", "I wear jeans at the weekend.", "jeans", 0, "/dʒ/ có rung, lưỡi chạm lợi trước; không đọc thành “gin” hay “din”. Cuối từ là cụm /nz/ có rung."),
  ],
  dialogue: dialogue(
    "Rủ đồng nghiệp đi ăn tối",
    "Sarah, đồng nghiệp người Anh, rủ Minh, lập trình viên ở Hà Nội, đi ăn tối cùng cả nhóm. Minh hỏi về đồ ăn, trang phục và đường đi.",
    { A: "Sarah", B: "Minh" },
    A("Minh, are you free tomorrow night?", "Minh ơi, tối mai bạn rảnh không?"),
    B("Yes, I am. Why?", "Có, mình rảnh. Sao thế?"),
    A("The team is having dinner at a new restaurant on Spring Street.", "Cả nhóm đi ăn tối ở một nhà hàng mới trên phố Spring."),
    B("Great. Do they have rice dishes?", "Hay quá. Ở đó có món cơm không?"),
    A("Yes, they do. And they have very good wine.", "Có chứ. Và rượu vang ở đó rất ngon."),
    B("Can I wear jeans, or do I need a suit?", "Mình mặc quần jeans được không, hay phải mặc com-lê?"),
    A("Jeans are fine. It's not a fancy place.", "Quần jeans là được. Chỗ đó không sang trọng lắm đâu."),
    B("What time does it start?", "Mấy giờ bắt đầu?"),
    A("At seven. Let's take the train together after work.", "Bảy giờ. Tan làm mình đi tàu cùng nhau nhé."),
    B("OK. Is the restaurant near the station?", "Được. Nhà hàng có gần ga không?"),
    A("Yes. Turn right, walk to the traffic light, and it's on the left.", "Có. Rẽ phải, đi đến đèn giao thông, nhà hàng ở bên trái."),
    B("Perfect. Save me a chair next to you!", "Tuyệt. Giữ cho mình một cái ghế cạnh bạn nhé!"),
  ),
  dialogueQuestions: [
    listenQ("pa-n09-d1", "Bữa tối của cả nhóm ở đâu?", "The team is having dinner at a new restaurant on Spring Street.", ["Ở một nhà hàng mới trên phố Spring", "Ở nhà của Sarah", "Ở căng tin văn phòng"], 0, "“at a new restaurant on Spring Street”. Spring và street đều có cụm đầu /spr/, /str/, đọc liền không chèn “ơ”."),
    mc("pa-n09-d2", "Minh có cần mặc com-lê không?", ["Có, phải mặc com-lê", "Không, mặc quần jeans cũng được", "Phải mặc áo sơ mi trắng"], 1, "Sarah nói “Jeans are fine. It's not a fancy place.”"),
    mc("pa-n09-d3", "Hai người sẽ đến nhà hàng bằng gì?", ["Đi taxi", "Đi bộ từ văn phòng", "Đi tàu"], 2, "Sarah nói “Let's take the train together after work.” Train bắt đầu bằng cụm /tr/."),
  ],
  reading: reading({
    title: "Ba âm tôi từng đọc sai",
    text: `My name is Hoa, and I am from Hai Phong. When I started learning English, people did not understand three of my sounds.

First, I said night for light. In my town, many people mix up l and n. Now I hold my nose when I practise: n stops, but l does not.

Second, I said "zice" for rice. An English r has round lips, and the tongue does not touch anything.

Third, I put a small vowel in street, so it sounded like "suh-treet". My teacher said: start with s and slide straight to t and r.

I practise these words for five minutes every morning, and now my friends understand me.`,
    glossary: [["mix up", "lẫn lộn"], ["hold my nose", "bịt mũi"], ["round", "tròn"], ["tongue", "cái lưỡi"], ["slide", "trượt"]],
    questions: [
      mc("pa-n09-r1", "Bài viết chủ yếu kể về điều gì?", ["Quê hương Hải Phòng của Hoa", "Ba âm Hoa từng đọc sai và cách Hoa sửa", "Cách học từ vựng mỗi sáng"], 1, "Mỗi đoạn kể một âm Hoa từng đọc sai (light, rice, street) và cách sửa."),
      mc("pa-n09-r2", "Hoa bịt mũi khi luyện để làm gì?", ["Để kiểm tra mình đang đọc /n/ hay /l/", "Để đọc /r/ cho tròn môi", "Để không chèn nguyên âm vào street"], 0, "“I hold my nose when I practise: n stops, but l does not.” Bịt mũi thì /n/ bị tắc."),
      fill("pa-n09-r3", "An English r has ___ lips. (tròn)", ["round"], "“An English r has round lips, and the tongue does not touch anything.”"),
      mc("pa-n09-r4", "Lúc đầu Hoa đọc street nghe như thế nào?", ["Thiếu âm /t/ ở cuối", "Giống từ night", "Có thêm một nguyên âm nhỏ: “suh-treet”"], 2, "“I put a small vowel in street, so it sounded like suh-treet.”"),
      mc("pa-n09-r5", "Mỗi sáng Hoa luyện bao lâu?", ["Năm phút", "Mười lăm phút", "Một tiếng"], 0, "“I practise these words for five minutes every morning.”"),
    ],
  }),
  exercises: [
    listen("pa-n09-1", "light", ["night", "light", "right"], 1, "Light /laɪt/ bắt đầu bằng /l/: hơi ra hai bên lưỡi. Night /naɪt/ có /n/ hơi ra mũi, right /raɪt/ có /r/ môi tròn, lưỡi không chạm."),
    listen("pa-n09-2", "sheep", ["cheap", "jeep", "sheep"], 2, "Sheep /ʃiːp/ chỉ có tiếng xì, lưỡi không chạm. Cheap /tʃiːp/ có tiếng chạm lưỡi trước khi xì, jeep /dʒiːp/ có thêm độ rung."),
    listen("pa-n09-3", "wine", ["vine", "wine", "fine"], 1, "Wine /waɪn/ bắt đầu bằng môi tròn, răng không chạm môi. Vine /vaɪn/ và fine /faɪn/ đều có răng trên chạm môi dưới; fine không rung."),
    mc("pa-n09-4", "Cách nào giúp bạn tự kiểm tra mình đang đọc /n/ chứ không phải /l/?", ["Bịt mũi: /n/ sẽ bị tắc, /l/ vẫn nói được", "Đặt tay lên cổ: /n/ rung, /l/ không rung", "Nhìn gương: /n/ phải thò lưỡi ra ngoài", "Đặt tay trước miệng: /n/ có luồng gió mạnh"], 0, "Hơi của /n/ đi qua mũi nên bịt mũi là tắc; /l/ cho hơi ra hai bên lưỡi. Cả hai đều hữu thanh, nên đặt tay lên cổ không phân biệt được."),
    mc("pa-n09-5", "Từ “street” /striːt/ có mấy âm tiết?", ["Hai", "Một", "Ba"], 1, "Street chỉ có một nguyên âm /iː/ nên chỉ có một âm tiết. Đọc “xờ-trít” là chèn thêm “ơ”, thành hai âm tiết."),
    fill("pa-n09-6", "Phiên âm /naɪt/ là từ ___ (ban đêm).", ["night"], "/n/ đầu từ, /aɪ/ viết bằng igh, /t/ cuối từ: night. Light /laɪt/ chỉ khác ở âm đầu."),
    fill("pa-n09-7", "Phiên âm /laɪt/ là từ ___ (ánh sáng, cái đèn).", ["light"], "Light /laɪt/ bắt đầu bằng /l/, hơi đi ra hai bên lưỡi. Đọc nhầm thành /n/ thì thành night."),
    fill("pa-n09-8", "Đổi âm đầu /tʃ/ của chip /tʃɪp/ thành /ʃ/, ta được từ ___ (con tàu).", ["ship"], "Chip /tʃɪp/ và ship /ʃɪp/ chỉ khác nhau ở cú chạm lưỡi: /tʃ/ chạm lợi rồi mới xì, /ʃ/ chỉ xì."),
    fill("pa-n09-9", "Street /striːt/ bắt đầu bằng ba phụ âm liền nhau: /s/, /t/ và /___/.", ["r"], "Cụm /str/: xì /s/, chặn lưỡi cho /t/, rồi trượt sang /r/ môi tròn, không chèn “ơ” vào giữa."),
    reorder("pa-n09-10", "Let's cross the street here.", "Cross /krɒs/ và street /striːt/ có cụm phụ âm đầu: đọc liền, không chèn “ơ”."),
    reorder("pa-n09-11", "She wears blue jeans to work.", "Blue /bluː/ có cụm /bl/, jeans /dʒiːnz/ có /dʒ/ rung và cụm /nz/ cuối; work bắt đầu bằng /w/ môi tròn."),
    correct("pa-n09-12", "The shoes at this market are very sheep.", "The shoes at this market are very cheap.", "Rẻ là cheap /tʃiːp/: lưỡi chạm lợi rồi mới xì. Sheep /ʃiːp/ (con cừu) chỉ xì hơi. Bỏ cú chạm lưỡi là cheap biến thành sheep."),
    correct("pa-n09-13", "It's dark. Can you turn on the night?", ["It's dark. Can you turn on the light?", "It is dark. Can you turn on the light?", "It's dark. Can you turn the light on?"], "Bật đèn là turn on the light /laɪt/. Night /naɪt/ là ban đêm. Lẫn /l/ với /n/ là thói quen của một số vùng miền Bắc."),
    correct("pa-n09-14", "We'd like a bottle of red vine, please.", ["We'd like a bottle of red wine, please.", "We would like a bottle of red wine, please."], "Rượu vang là wine /waɪn/: môi tròn, răng không chạm môi. Vine /vaɪn/ là cây nho. Tiếng Việt không có chữ w nên nhiều bạn đọc thành /v/."),
  ],
  speaking: [
    say("Please turn on the light, it's dark tonight.", "Làm ơn bật đèn lên, tối nay tối quá."),
    say("I'd like some rice and a glass of red wine.", "Cho tôi ít cơm và một ly vang đỏ."),
    say("The sheep on this street are not cheap.", "Những con cừu trên phố này không rẻ."),
  ],
  freeSpeaking: free(
    "Which English sounds are hard for you, and how do you practise them?",
    "Nói 3–4 câu về những âm bạn hay lẫn (l và n, r, ch và sh, w và v, cụm phụ âm đầu) và cách bạn luyện chúng.",
    "For me, the hardest sounds are l and n, so I say light and night every morning. I also practise street and spring slowly, without an extra vowel. I record my voice and listen again.",
  ),
  task: task({
    prompt: "Viết 5 câu kể về buổi tối của bạn (đi đâu, ăn gì, mặc gì), dùng ít nhất sáu từ trong bài: light, night, rice, street, spring, wine, chair, jeans. Gạch chân mọi âm /l/, /n/, /r/, /w/, /tʃ/ và mọi cụm phụ âm đầu, rồi ghi âm và nghe lại.",
    hints: [
      "Có thể bắt đầu bằng: Last night I went to a restaurant on…",
      "Dùng ít nhất hai từ có cụm phụ âm đầu: street, spring, train, bread, cream.",
      "Đọc lại từng câu, bịt mũi ở những từ có /l/ để kiểm tra.",
    ],
    model: "At night I often walk along a busy street near my flat. The lights in the shops are bright and pretty. I usually eat rice and fish in a small restaurant. I wear jeans and sit on a chair near the window. In spring I sometimes have a glass of red wine.",
    checklist: [
      "Dùng ít nhất sáu từ trong bài (night, street, lights, rice, jeans, chair, spring, wine)",
      "Light, lights đọc /l/ (bịt mũi vẫn nói được), night đọc /n/",
      "Rice, red, restaurant: /r/ môi tròn, lưỡi không chạm, không đọc thành “z”",
      "Street, spring, bright: cụm phụ âm đầu đọc liền, không chèn “ơ”",
      "Wine, walk, window: môi tròn cho /w/, răng không chạm môi",
    ],
    minWords: 30,
  }),
});
