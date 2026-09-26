import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "am-cuoi",
  title: "Âm cuối: đừng nuốt mất",
  minutes: 30,
  lecture: {
    title: "Phụ âm cuối và cụm phụ âm cuối",
    blocks: [
      p("Giả sử các bạn vào quán ăn ở London, nói “Can I have some rice?” nhưng lại đọc thành “rai”. Người phục vụ không biết các bạn muốn cơm (**rice**), muốn đi xe (**ride**) hay đang nói “đúng” (**right**). Trong tiếng Anh, **âm cuối mang nghĩa**: chỉ cần mất một âm cuối là thành một từ khác."),
      p("Vì sao người Việt hay nuốt âm cuối? Tiếng Việt chỉ có một số ít phụ âm cuối (như p, t, c, m, n, ng) và các âm p, t, c đều **ngậm lại, không bật hơi**: nói “mát” thì lưỡi chạm lợi rồi dừng. Tiếng Việt không có âm cuối /s/, /z/, /l/, /v/, /d/, /ɡ/, và cũng không có cụm hai, ba phụ âm đứng cuối. Vì thế miệng chúng ta tự động bỏ bớt."),
      table(
        ["Âm cuối", "Người Việt hay đọc", "Cách đọc đúng", "Ví dụ"],
        ["/t/", "bỏ hẳn, “right” thành “rai”", "đầu lưỡi chạm lợi và dừng ở đó, không bỏ; cuối câu có thể bật nhẹ", "right /raɪt/, eight /eɪt/"],
        ["/d/", "đọc thành /t/ hoặc bỏ hẳn", "chạm lưỡi vào lợi, dây thanh rung", "ride /raɪd/, food /fuːd/"],
        ["/k/", "bỏ hẳn, “back” thành “be”", "nâng cuống lưỡi chặn hơi, không bỏ; cuối câu có thể bật nhẹ", "back /bæk/, book /bʊk/"],
        ["/s/", "bỏ mất", "xì hơi qua kẽ răng như tiếng rắn", "rice /raɪs/, bus /bʌs/"],
        ["/z/", "đọc thành /s/ hoặc bỏ", "xì hơi như /s/ nhưng cổ rung", "rise /raɪz/, nose /nəʊz/"],
        ["/l/", "đọc thành “n” hoặc “u”", "đầu lưỡi chạm lợi và giữ ở đó", "school /skuːl/, milk /mɪlk/"],
        ["/v/", "bỏ hoặc đọc thành “p”", "răng trên chạm môi dưới, cổ rung", "five /faɪv/, love /lʌv/"],
      ),
      p("Có một bí mật mà ít sách nói: với cặp /t/–/d/, /k/–/ɡ/, /s/–/z/ ở cuối từ, người bản xứ phân biệt chủ yếu nhờ **độ dài của nguyên âm đứng trước**. Trước phụ âm hữu thanh (/d/ /ɡ/ /z/), nguyên âm kéo **dài hơn**; trước phụ âm vô thanh (/t/ /k/ /s/), nguyên âm **ngắn và dứt khoát**."),
      table(
        ["Âm cuối vô thanh (nguyên âm ngắn)", "Âm cuối hữu thanh (nguyên âm dài hơn)"],
        ["right /raɪt/ (đúng)", "ride /raɪd/ (đi xe, cưỡi)"],
        ["back /bæk/ (phía sau)", "bag /bæɡ/ (cái túi)"],
        ["rice /raɪs/ (cơm, gạo)", "rise /raɪz/ (mọc lên, tăng lên)"],
        ["bet /bet/ (đánh cược)", "bed /bed/ (cái giường)"],
      ),
      ex("Can I have some rice, please?", "Cho tôi xin ít cơm được không?", "Rice kết thúc bằng /s/: đọc nguyên âm ngắn rồi xì hơi rõ, đừng dừng ở “rai”."),
      ex("I usually ride my bike to work.", "Tôi thường đạp xe đi làm.", "Ride kéo dài nguyên âm /aɪ/ một chút rồi chạm lưỡi ra /d/; bike thì phải đóng cuống lưỡi cho /k/ ở cuối, đừng bỏ."),
      ex("Put your bag at the back of the room.", "Để túi của bạn ở cuối phòng.", "Bag /bæɡ/ nguyên âm dài hơn, back /bæk/ nguyên âm ngắn và dứt khoát."),
      p("Khó hơn nữa là **cụm phụ âm cuối**: hai, ba phụ âm đứng liền nhau như /st/ trong **first**, /ks/ trong **six**, /nts/ trong **students**, /kst/ trong **next**. Phải đọc đủ từng âm, nối liền nhau, và **không chèn nguyên âm** vào giữa."),
      table(
        ["Cụm cuối", "Ví dụ", "Lỗi hay gặp"],
        ["/st/", "first /fɜːst/, last /lɑːst/", "đọc thành “phớt”, mất cả /s/ lẫn /t/"],
        ["/ks/", "six /sɪks/, box /bɒks/", "đọc thành “xíc”, mất /s/"],
        ["/nts/", "students /ˈstjuː.dənts/", "đọc thành “xờ-tiu-đần”, mất /ts/"],
        ["/kst/", "next /nekst/, text /tekst/", "đọc thành “néc”, mất /st/"],
      ),
      mistake("rice đọc thành “rai”", "rice /raɪs/, xì rõ /s/ ở cuối", "Tiếng Việt không có âm cuối /s/ nên miệng dừng ở nguyên âm. Nhưng “rai” thì người nghe có thể hiểu là rye (lúa mạch đen), hoặc đoán là right hay ride."),
      mistake("school đọc thành “xờ-cun” hoặc “xờ-kiu”", "school /skuːl/, đầu lưỡi chạm lợi ở cuối", "Tiếng Việt không có âm cuối /l/ nên ta thay bằng “n” hoặc “u”, lại còn chèn “xờ” vào cụm /sk/. Giữ lưỡi chạm lợi ở cuối từ, và đọc /sk/ liền một hơi."),
      mistake("students đọc thành “xờ-tiu-đần”", "students /ˈstjuː.dənts/, kết thúc bằng /ts/", "Âm /ts/ ở cuối cho biết có nhiều học sinh. Bỏ nó đi thì vừa sai phát âm vừa sai ngữ pháp số nhiều."),
      tip("Mẹo luyện: đặt tay lên cổ và đọc **rice – rise**. Với rise, cổ phải rung ở cuối và nguyên âm dài hơn. Với cụm cuối, hãy đọc chậm từng âm rồi nhanh dần: **nek – neks – nekst**."),
      teacher("Khi đứng lớp, tôi thấy âm cuối là chỗ người Việt mất điểm nhiều nhất, kể cả người đã học lâu. Tôi hay bảo các bạn: **đọc chậm mà đủ âm còn hơn đọc nhanh mà nuốt âm**. Mỗi ngày các bạn lấy mười từ trong bài, ghi âm giọng mình, rồi nghe lại xem có nghe thấy âm cuối không. Nếu chính các bạn còn không nghe thấy, thì người bản xứ cũng không nghe thấy đâu."),
      summary(
        "**Âm cuối mang nghĩa**: rice, rise, ride, right chỉ khác nhau ở âm cuối.",
        "/t/ và /k/ cuối từ **phải có**: đóng lưỡi ở đúng vị trí của âm, không được bỏ; ở cuối câu có thể bật nhẹ để người nghe rõ hơn.",
        "Nguyên âm **dài hơn** trước âm cuối hữu thanh (ride, bag), **ngắn** trước âm cuối vô thanh (right, back).",
        "Cụm cuối như /st/, /ks/, /kst/, /nts/ phải đọc đủ từng âm, không chèn “ơ”.",
        "/l/ cuối từ: giữ đầu lưỡi chạm lợi, không đọc thành “n” hay “u”.",
      ),
    ],
  },
  words: [
    word("ride", "/raɪd/", "đi (xe), cưỡi", "I ride my bike to school.", "ride", 0, "Kéo dài /aɪ/ rồi chạm lưỡi ra /d/, cổ rung. Đọc ngắn và ngậm lại thì thành right."),
    word("back", "/bæk/", "phía sau; trở lại", "Please come back in five minutes.", "back", 0, "Nguyên âm ngắn, kết thúc bằng /k/ (nâng cuống lưỡi chặn hơi, không bỏ). Đừng lẫn với bag /bæɡ/."),
    word("twelve", "/twelv/", "mười hai", "The shop opens at twelve.", "twelve", 0, "Cuối từ là cụm /lv/: lưỡi chạm lợi cho /l/, rồi răng trên chạm môi dưới cho /v/."),
    word("milk", "/mɪlk/", "sữa", "Do you want milk in your coffee?", "milk", 0, "Đừng đọc thành “miu”: đầu lưỡi chạm lợi cho /l/ rồi mới ra /k/."),
    word("desk", "/desk/", "bàn làm việc, bàn học", "My keys are on the desk.", "desk", 0, "Cụm /sk/ ở cuối: xì /s/ rồi đóng /k/, không đọc thành “đét”."),
    word("next", "/nekst/", "tiếp theo", "See you next week.", "next", 0, "Có tới ba phụ âm cuối /kst/. Luyện chậm: nek – neks – nekst."),
    word("cold", "/kəʊld/", "lạnh", "It's very cold today.", "cold", 0, "Cụm /ld/ ở cuối: giữ lưỡi ở lợi cho /l/, rồi ra /d/. Đọc thiếu thì nghe như coal hoặc code."),
  ],
  dialogue: dialogue(
    "Gọi đồ ăn ở quán cà phê",
    "Linh đi công tác ở London. Buổi trưa, cô vào một quán cà phê gần văn phòng và gọi đồ ăn với anh phục vụ.",
    { A: "Linh (khách)", B: "Anh phục vụ" },
    B("Hi there. What can I get you?", "Chào chị. Chị muốn dùng gì ạ?"),
    A("Can I have the chicken with rice, please?", "Cho tôi món gà với cơm nhé."),
    B("Sure. Would you like a drink?", "Vâng. Chị có muốn uống gì không?"),
    A("Yes, a glass of milk, please.", "Có, cho tôi một cốc sữa."),
    B("Hot or cold milk?", "Sữa nóng hay sữa lạnh ạ?"),
    A("Cold, please. And a small cake.", "Lạnh nhé. Và một cái bánh nhỏ."),
    B("OK. That's twelve pounds fifty.", "Vâng. Tất cả là mười hai bảng năm mươi xu."),
    A("Here you are. Can I sit at the back?", "Gửi anh. Tôi ngồi ở phía cuối được không?"),
    B("Of course. I'll bring your food soon.", "Tất nhiên rồi. Tôi sẽ mang đồ ăn ra ngay."),
    A("Thanks. I need to be back at work at two.", "Cảm ơn anh. Tôi phải về chỗ làm lúc hai giờ."),
    B("Don't worry. It only takes five minutes.", "Chị đừng lo. Chỉ mất năm phút thôi."),
    A("Great. Thanks a lot.", "Tuyệt quá. Cảm ơn anh nhiều."),
  ),
  dialogueQuestions: [
    listenQ("pa-n05-d1", "Linh gọi sữa nóng hay sữa lạnh, và gọi thêm món gì?", "Hot or cold milk? Cold, please. And a small cake.", ["Sữa nóng và một cái bánh nhỏ", "Sữa lạnh và một cái bánh nhỏ", "Sữa lạnh và một bát cơm"], 1, "Linh trả lời “Cold, please. And a small cake.” Cold kết thúc bằng cụm /ld/, cake bằng /k/."),
    mc("pa-n05-d2", "Linh phải trả bao nhiêu tiền?", ["Mười hai bảng năm mươi xu", "Hai mươi bảng", "Năm bảng mười hai xu"], 0, "Anh phục vụ nói “That's twelve pounds fifty.” Twelve kết thúc bằng cụm /lv/."),
    mc("pa-n05-d3", "Vì sao Linh cần đồ ăn nhanh?", ["Vì cô ấy rất đói", "Vì quán sắp đóng cửa", "Vì cô ấy phải về chỗ làm lúc hai giờ"], 2, "Linh nói “I need to be back at work at two.”"),
  ],
  reading: reading({
    title: "Quán cà phê của Jack",
    text: `Welcome to Jack's Café! We are next to the bus stop on King Street.

Our lunch menu is small but good. You can have chicken with rice, fish and chips, or a bowl of hot soup. All the food is fresh.

We have tea, coffee, cold milk and fruit juice. A cup of coffee is two pounds.

Students get a free cake with every lunch. Just show your student card.

We open at seven and close at six. There are twelve tables inside and six desks with computers at the back. Come in and relax!`,
    glossary: [["next to", "ngay cạnh"], ["fresh", "tươi"], ["bowl", "bát, tô"], ["juice", "nước ép"], ["relax", "thư giãn"]],
    questions: [
      mc("pa-n05-r1", "Bài đọc này là gì?", ["Lời giới thiệu một quán cà phê", "Một lá thư xin việc", "Một công thức nấu ăn"], 0, "Bài nói về vị trí, thực đơn, giá và giờ mở cửa của Jack's Café."),
      mc("pa-n05-r2", "Quán nằm ở đâu?", ["Đối diện trường học", "Ngay cạnh bến xe buýt", "Trong một khách sạn"], 1, "“We are next to the bus stop on King Street.” Next to nghĩa là ngay cạnh; next đứng một mình nghĩa là tiếp theo."),
      fill("pa-n05-r3", "A cup of coffee is ___ pounds. (giá)", ["two", "2"], "“A cup of coffee is two pounds.”"),
      mc("pa-n05-r4", "Học sinh, sinh viên được gì khi ăn trưa ở quán?", ["Một cốc cà phê miễn phí", "Giảm một nửa giá", "Một cái bánh miễn phí"], 2, "“Students get a free cake with every lunch.”"),
      mc("pa-n05-r5", "Bên trong quán có bao nhiêu cái bàn ăn (tables)?", ["Sáu", "Mười hai", "Mười tám", "Hai"], 1, "“There are twelve tables inside.” Sáu là số bàn có máy tính (desks) ở phía cuối."),
    ],
  }),
  exercises: [
    listen("pa-n05-1", "ride", ["right", "ride", "rice"], 1, "Các bạn nghe ride /raɪd/: nguyên âm kéo dài và kết thúc bằng /d/ hữu thanh. Right /raɪt/ có nguyên âm ngắn và /t/; rice /raɪs/ kết thúc bằng tiếng xì /s/."),
    listen("pa-n05-2", "bag", ["back", "bad", "bag"], 2, "Bag /bæɡ/ kết thúc bằng /ɡ/, nguyên âm dài hơn back /bæk/. Bad kết thúc bằng /d/."),
    mc("pa-n05-3", "Từ nào kết thúc bằng âm /z/?", ["rice", "rise", "nice", "price"], 1, "Rise /raɪz/ kết thúc bằng /z/, cổ rung. Rice, nice, price đều kết thúc bằng /s/ dù viết bằng chữ c."),
    mc("pa-n05-4", "Từ “next” /nekst/ kết thúc bằng những phụ âm nào?", ["/k/, /s/ và /t/", "chỉ có /t/", "chỉ có /k/", "/s/ và /t/"], 0, "Chữ x đọc là /ks/, cộng thêm /t/: cả cụm là /kst/. Phải đọc đủ cả ba âm."),
    fill("pa-n05-5", "Can I have some more ___, please? I'm still hungry. (cơm)", ["rice"], "Rice /raɪs/: nhớ xì rõ /s/ ở cuối để không lẫn với rise hay right."),
    fill("pa-n05-6", "Don't forget your school ___. Your books are in it. (cặp sách)", ["bag"], "Bag /bæɡ/ kết thúc bằng /ɡ/. Nếu ngậm lại thành /k/ thì nghe ra back."),
    reorder("pa-n05-7", "The students need five new desks.", "Luyện âm cuối: students /nts/, need /d/, five /v/, desks /sks/. Đọc đủ từng âm cuối."),
    reorder("pa-n05-8", "Can I have some cold milk?", "Câu hỏi bắt đầu bằng Can I have…? Chú ý cụm /ld/ trong cold và /lk/ trong milk."),
    correct("pa-n05-9", "I have two bag for the trip.", ["I have two bags for the trip.", "I have two bags for my trip."], "Hai cái túi thì phải là bags /bæɡz/, có /ɡz/ ở cuối. Người Việt quen nuốt âm cuối khi nói, nên viết cũng hay quên -s."),
    correct("pa-n05-10", "My sister ride her bike to school.", ["My sister rides her bike to school.", "My sister rode her bike to school."], "Chủ ngữ my sister (ngôi thứ ba số ít) nên động từ thêm -s: rides /raɪdz/. Đọc đủ cụm /dz/ ở cuối."),
  ],
  speaking: [
    say("Can I have some rice, please?", "Cho tôi xin ít cơm được không?"),
    say("I ride my bike to school.", "Tôi đạp xe đến trường."),
    say("The students need five new desks.", "Các học sinh cần năm cái bàn mới."),
  ],
  freeSpeaking: free(
    "What do you have for lunch?",
    "Nói 3–4 câu về bữa trưa thường ngày của bạn: ăn gì, uống gì, ăn ở đâu, với ai. Đọc rõ từng âm cuối như rice, milk, cold, desk.",
    "I usually have lunch at twelve. I eat rice with fish or chicken. I drink cold milk or a cup of tea. I sit at my desk and talk with my friends.",
  ),
  task: task({
    prompt: "Viết 5 câu kể về bữa trưa thường ngày của bạn: ăn gì, uống gì, ngồi ở đâu. Gạch chân mọi phụ âm cuối, rồi đọc to từng câu thật chậm, đọc đủ từng âm cuối.",
    hints: [
      "Dùng các từ có âm cuối khó: rice, milk, cold, back, desk, next, twelve.",
      "Có ít nhất một cụm phụ âm cuối như /lk/, /ld/, /st/ hoặc /kst/.",
      "Có thể bắt đầu bằng: I have lunch at…",
    ],
    model: "I have lunch at twelve every day. I eat rice and fish with my friend Nam. I drink a glass of cold milk. We sit at a desk at the back of the office. Next week we want to try the soup.",
    checklist: [
      "Không bỏ âm cuối nào: rice, fish, milk nghe rõ đến âm cuối",
      "Nguyên âm dài hơn trước âm cuối hữu thanh (cold, friend) và ngắn trước âm cuối vô thanh (back, sit)",
      "Cụm cuối như /lk/ (milk), /ld/ (cold), /kst/ (next) đọc đủ, không chèn “ơ”",
      "/l/ cuối từ giữ lưỡi chạm lợi, không đọc thành “n” hay “u”",
      "Ghi âm và nghe lại: chính bạn nghe thấy âm cuối của từng từ",
    ],
    minWords: 25,
  }),
});
