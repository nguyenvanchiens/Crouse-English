import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "toi-co-the",
  title: "Tôi có thể…",
  minutes: 26,
  lecture: {
    title: "Can và can't: khả năng và xin phép",
    blocks: [
      p("Đi phỏng vấn xin việc, câu đầu tiên người ta hỏi thường là **Can you speak English?** Vào văn phòng mới, bạn cần hỏi **Can I use this computer?** Chỉ với một chữ **can**, bạn nói được hai việc: mình **biết làm gì** (khả năng) và mình **có được phép làm gì không** (xin phép)."),
      p("Quy tắc rất dễ: **can + động từ nguyên mẫu**. Can giữ nguyên với mọi chủ ngữ, không thêm -s, không có to phía sau. Phủ định là **can't** (viết đầy đủ là cannot, viết liền). Câu hỏi thì đảo **can** lên trước chủ ngữ."),
      table(
        ["Chủ ngữ", "Khẳng định", "Phủ định", "Câu hỏi", "Trả lời ngắn"],
        ["I / you / we / they", "I can swim.", "I can't swim.", "Can you swim?", "Yes, I can. / No, I can't."],
        ["he / she / it", "She can swim.", "She can't swim.", "Can she swim?", "Yes, she can. / No, she can't."],
      ),
      ex("My daughter can play the guitar.", "Con gái tôi biết chơi đàn ghi-ta."),
      ex("I can't drive a car, but I can ride a motorbike.", "Tôi không biết lái ô tô, nhưng tôi biết đi xe máy.", "Tiếng Việt nói “biết” cho kỹ năng học được, tiếng Anh vẫn dùng can."),
      mistake("She cans speak English.", "She can speak English.", "Học hiện tại đơn xong, nhiều bạn quen tay thêm -s sau she. Nhưng can là động từ khuyết thiếu, không bao giờ thêm -s, và động từ theo sau cũng giữ nguyên: không nói “she can speaks”."),
      mistake("I can to cook.", "I can cook.", "Người Việt hay thêm to vì nhớ mẫu want to, like to. Sau can là động từ nguyên mẫu trần, không có to."),
      p("Dùng **Can I…?** để xin phép. Dùng **You can…** để cho phép và **You can't…** để nói điều không được làm. Muốn nhờ người khác, dùng **Can you…?**"),
      ex("Can I sit here? Yes, of course.", "Tôi ngồi đây được không? Được chứ, bạn cứ ngồi."),
      ex("You can't park here.", "Bạn không được đỗ xe ở đây.", "Ở đây can't không nói về khả năng mà là lệnh cấm: xe vẫn đỗ được, nhưng không được phép."),
      ex("Sorry, can you say that again, please?", "Xin lỗi, bạn nói lại được không?", "Câu cứu cánh khi nghe không kịp. Muốn người ta nói chậm lại thì hỏi: Can you speak slowly, please?"),
      mistake("You can speak English?", "Can you speak English?", "Tiếng Việt hỏi bằng cách thêm “không” ở cuối câu, trật tự từ giữ nguyên. Tiếng Anh phải đảo can lên đầu câu."),
      table(
        ["Câu", "Can đọc là", "Cách nghe"],
        ["I can swim.", "/kən/", "nhẹ, ngắn, lướt qua, nhấn vào swim"],
        ["I can't swim.", "/kɑːnt/", "mạnh, dài, miệng mở rộng; âm /t/ cuối có nhưng rất nhẹ, lưỡi chạm lợi rồi dừng"],
        ["Yes, I can.", "/kæn/", "đọc mạnh vì đứng cuối câu"],
      ),
      tip("Âm /t/ cuối can't vẫn có nhưng thường rất nhẹ (lưỡi chạm lợi rồi dừng, không bật hơi), nên đừng chờ nghe chữ t. Hãy nghe **nguyên âm**: câu khẳng định đọc lướt **/kən/** như “cần” rất nhẹ, còn câu phủ định kéo dài và nhấn mạnh **/kɑːnt/** như “caaan”."),
      teacher("Khi đứng lớp, tôi thấy học viên người Việt nhầm can và can't nhiều hơn bất cứ cặp từ nào, vì các bạn cố nghe âm /t/ mà người ta chỉ đọc rất nhẹ. Mỗi tối, các bạn nói to ba câu về mình: **I can…**, **I can't…**, **Can I…?** Câu khẳng định đọc nhẹ can và nhấn vào động từ; câu phủ định thì nhấn chính chữ can't. Nói đúng nhịp thì tự khắc sẽ nghe ra."),
      summary(
        "**Can + động từ nguyên mẫu** với mọi chủ ngữ: she can swim (không nói cans, không nói can to).",
        "Phủ định là **can't**; câu hỏi đảo can lên đầu: Can you drive? Yes, I can. / No, I can't.",
        "Can nói **khả năng** (I can cook) và **xin phép** (Can I sit here?); nhờ người khác thì hỏi **Can you…?**",
        "**You can't…** còn có nghĩa là không được phép: You can't park here.",
        "Nghe bằng nguyên âm: can đọc nhẹ /kən/, can't đọc dài và mạnh /kɑːnt/.",
      ),
    ],
  },
  words: [
    word("ride", "/raɪd/", "đi (xe đạp, xe máy), cưỡi", "I can ride a motorbike.", "ride", 0, "Nhớ đọc âm /d/ ở cuối, để không lẫn với write /raɪt/ (viết)."),
    word("drive", "/draɪv/", "lái xe (ô tô)", "My wife can drive a car.", "drive", 0, "Nhớ đọc âm /v/ ở cuối, cắn nhẹ môi dưới."),
    word("cook", "/kʊk/", "nấu ăn", "My husband can cook very well.", "cook", 0, "Âm /ʊ/ ngắn, khác với /uː/ dài trong food."),
    word("language", "/ˈlæŋ.ɡwɪdʒ/", "ngôn ngữ, tiếng", "How many languages can you speak?", "lan|guage", 0, "Chỉ có hai âm tiết, nhấn âm đầu: LANG-gwidge; âm cuối là /dʒ/."),
    word("sing", "/sɪŋ/", "hát", "She can sing English songs.", "sing", 0, "Âm cuối /ŋ/ giống “ng” tiếng Việt, không bật thêm âm /ɡ/."),
    word("guitar", "/ɡɪˈtɑː/", "đàn ghi-ta", "He can play the guitar.", "gui|tar", 1, "Nhấn âm sau: gi-TAA, kéo dài /ɑː/ và không uốn lưỡi đọc âm r ở cuối."),
    word("speak", "/spiːk/", "nói (một ngôn ngữ)", "Can you speak Japanese?", "speak", 0, "Âm /sp/ đọc liền, không chèn âm “xờ” vào trước."),
    word("borrow", "/ˈbɒr.əʊ/", "mượn", "Can I borrow your pen?", "bor|row", 0),
  ],
  exercises: [
    mc("a1-n11-1", "My brother ___ speak three languages.", ["cans", "can", "can to"], 1, "Can giữ nguyên với mọi chủ ngữ và không có to phía sau."),
    mc("a1-n11-2", "Bạn muốn xin phép mở cửa sổ. Câu nào đúng?", ["I can open the window?", "Do I can open the window?", "Can I to open the window?", "Can I open the window?"], 3, "Xin phép: Can I + động từ nguyên mẫu? Không dùng do với can, không thêm to."),
    fill("a1-n11-3", "She ___ drive, so she goes to work by bus. (không biết)", ["can't", "cannot"], "Phủ định của can là can't hoặc cannot (viết liền)."),
    fill("a1-n11-4", "___ you swim? Yes, I can.", ["Can", "can"], "Câu trả lời ngắn Yes, I can cho biết câu hỏi bắt đầu bằng Can."),
    reorder("a1-n11-5", "What languages can you speak?", "Câu hỏi với từ để hỏi: What languages + can + chủ ngữ + động từ nguyên mẫu?"),
    reorder("a1-n11-6", "Where can I park my car?", "Where đứng đầu, sau đó đảo can lên trước I."),
    listen("a1-n11-7", "She can't cook, but she can sing.", ["Cô ấy biết nấu ăn nhưng không biết hát.", "Cô ấy không biết nấu ăn và không biết hát.", "Cô ấy không biết nấu ăn nhưng biết hát."], 2, "Can't đọc mạnh và dài; can sau but đọc nhẹ, nhấn vào sing."),
    listen("a1-n11-8", "Can I use your phone?", ["Tôi dùng điện thoại của bạn được không?", "Bạn có biết dùng điện thoại không?", "Bạn dùng điện thoại của tôi đi."], 0, "Can I…? là câu xin phép cho chính mình."),
    correct("a1-n11-9", "My father can drives a car.", ["My father can drive a car."], "Sau can là động từ nguyên mẫu: can drive. Không thêm -s cho động từ sau can, dù chủ ngữ là he."),
    correct("a1-n11-10", "Your sister can play the guitar?", ["Can your sister play the guitar?"], "Câu hỏi với can phải đảo can lên đầu câu, không giữ trật tự câu kể như tiếng Việt."),
  ],
  freeSpeaking: free(
    "What can you do, and what can't you do?",
    "Nói về ba việc bạn biết làm và hai việc bạn chưa biết làm.",
    "I can speak English and a little Korean. I can cook Vietnamese food, and I can ride a motorbike. I can't drive a car, and I can't swim very well. I want to learn next summer.",
  ),
  speaking: [
    say("I can speak a little English.", "Tôi nói được một chút tiếng Anh."),
    say("Excuse me, can I sit here?", "Xin lỗi, tôi ngồi đây được không?"),
    say("My son can swim, but he can't ride a bike.", "Con trai tôi biết bơi, nhưng chưa biết đi xe đạp."),
  ],
  dialogue: dialogue(
    "Phỏng vấn xin việc lễ tân",
    "Hoa đi phỏng vấn làm lễ tân ở một khách sạn tại Đà Nẵng. Người phỏng vấn là quản lý người Úc, hỏi Hoa biết làm những gì; cuối buổi Hoa xin phép hỏi một câu.",
    { A: "Quản lý khách sạn", B: "Hoa" },
    A("Good morning, Hoa. Can you speak English?", "Chào buổi sáng, Hoa. Em có nói được tiếng Anh không?"),
    B("Yes, I can. I can speak English and a little Chinese.", "Dạ được ạ. Em nói được tiếng Anh và một chút tiếng Trung."),
    A("Great. Can you use a computer?", "Tốt quá. Em có biết dùng máy tính không?"),
    B("Yes, I can. I can use Word and Excel.", "Dạ có. Em biết dùng Word và Excel."),
    A("Can you drive a car?", "Em có biết lái ô tô không?"),
    B("No, I can't. But I can ride a motorbike.", "Dạ không. Nhưng em biết đi xe máy."),
    A("That's OK. Can you work on Saturdays?", "Không sao. Em làm được vào các ngày thứ Bảy không?"),
    B("Yes, I can. Sorry, can I ask a question?", "Dạ được ạ. Xin lỗi, em hỏi một câu được không ạ?"),
    A("Of course.", "Tất nhiên rồi."),
    B("Can I park my motorbike here?", "Em có được để xe máy ở đây không ạ?"),
    A("Yes, you can. But you can't smoke here.", "Được chứ. Nhưng ở đây không được hút thuốc."),
    B("No problem. I don't smoke.", "Không sao ạ. Em không hút thuốc."),
  ),
  dialogueQuestions: [
    listenQ("a1-n11-d1", "Hoa nói được những thứ tiếng nào?", "Yes, I can. I can speak English and a little Chinese.", ["Tiếng Anh và một chút tiếng Nhật", "Tiếng Anh và một chút tiếng Trung", "Chỉ tiếng Anh"], 1, "English and a little Chinese: tiếng Anh và một chút tiếng Trung."),
    mc("a1-n11-d2", "Hoa biết đi loại xe nào?", ["Chỉ lái ô tô", "Cả ô tô và xe máy", "Chỉ đi xe máy"], 2, "No, I can't. But I can ride a motorbike: Hoa không biết lái ô tô, chỉ biết đi xe máy."),
    listenQ("a1-n11-d3", "Ở khách sạn, việc gì không được phép?", "Yes, you can. But you can't smoke here.", ["Để xe máy", "Làm việc vào thứ Bảy", "Hút thuốc"], 2, "You can't smoke here: ở đây không được hút thuốc. Để xe máy thì được (Yes, you can)."),
  ],
  reading: reading({
    title: "Nội quy bể bơi",
    text: `GREEN PARK SWIMMING POOL

Welcome! Please read our rules.

You can swim here from six o'clock in the morning to eight o'clock in the evening. Children under ten can't swim alone. They need an adult with them.

You can't eat or drink near the pool, but you can buy water and snacks at the café. You can't take photos in the changing rooms.

Can your children swim? No? Our teachers can help! We have swimming classes for children and adults on Saturdays and Sundays.

Questions? Please ask our staff at the front desk.`,
    glossary: [
      ["rules", "nội quy"],
      ["under", "dưới (tuổi)"],
      ["alone", "một mình"],
      ["adult", "người lớn"],
      ["snacks", "đồ ăn vặt"],
      ["changing rooms", "phòng thay đồ"],
      ["staff", "nhân viên"],
      ["front desk", "quầy lễ tân"],
    ],
    questions: [
      mc("a1-n11-r1", "Đây là loại văn bản gì?", ["Nội quy của một bể bơi", "Quảng cáo bán đồ bơi", "Tin nhắn của một người bạn"], 0, "Please read our rules: đây là nội quy của bể bơi Green Park."),
      mc("a1-n11-r2", "Bể bơi mở cửa từ mấy giờ đến mấy giờ?", ["Từ 8 giờ sáng đến 6 giờ chiều", "Từ 6 giờ sáng đến 8 giờ tối", "Từ 6 giờ sáng đến 10 giờ tối"], 1, "From six o'clock in the morning to eight o'clock in the evening."),
      mc("a1-n11-r3", "Trẻ em dưới mười tuổi phải làm gì?", ["Mua vé riêng", "Đi bơi cùng một người lớn", "Học bơi trước khi xuống bể"], 1, "Children under ten can't swim alone. They need an adult with them."),
      mc("a1-n11-r4", "Việc nào KHÔNG được làm ở bể bơi?", ["Mua nước ở quán cà phê", "Học bơi vào cuối tuần", "Chụp ảnh trong phòng thay đồ"], 2, "You can't take photos in the changing rooms. Mua nước ở quán cà phê thì được (you can buy water)."),
      fill("a1-n11-r5", "Bể bơi có giáo viên dạy bơi: Our teachers ___ help!", ["can"], "Can + động từ nguyên mẫu: can help (có thể giúp)."),
    ],
  }),
  task: task({
    prompt: "Bạn đang viết vài dòng giới thiệu bản thân cho một công việc làm thêm. Viết 5–6 câu về những việc bạn biết làm và chưa biết làm, rồi thêm một câu xin phép.",
    hints: [
      "Việc biết làm: I can… (speak English, cook, use a computer).",
      "Việc chưa biết làm: I can't… Dùng but để nối hai ý: I can cook, but I can't sing.",
      "Câu xin phép: Can I…, please?",
    ],
    model: "I can speak English and a little French. I can use a computer. I can cook, but I can't sing. I can ride a motorbike, but I can't drive a car. I can work at the weekend. Can I start next Monday, please?",
    checklist: [
      "Sau can là động từ nguyên mẫu, không có to (không viết can to cook)",
      "Can không thêm -s và động từ sau can cũng không thêm -s (she can speak)",
      "Có ít nhất 2 câu với can't",
      "Có ít nhất một câu xin phép Can I…?",
      "Câu hỏi đảo can lên đầu câu (không viết You can…?)",
    ],
    minWords: 25,
  }),
});
