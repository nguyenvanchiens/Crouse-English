import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "dang-lam-gi",
  title: "Bạn đang làm gì?",
  minutes: 28,
  lecture: {
    title: "Thì hiện tại tiếp diễn: am, is, are + V-ing",
    blocks: [
      p("Mẹ gọi điện lúc tám giờ tối: “Con đang làm gì đấy?” Bạn trả lời: “Con đang nấu cơm.” Tiếng Việt chỉ cần thêm chữ **đang**. Tiếng Anh cần hai phần đi cùng nhau: **am/is/are** và **động từ thêm -ing**. Đó là thì **hiện tại tiếp diễn**, dùng cho việc đang diễn ra ngay lúc nói."),
      table(
        ["Chủ ngữ", "Khẳng định", "Phủ định", "Câu hỏi"],
        ["I", "I'm working.", "I'm not working.", "Am I working?"],
        ["he / she / it", "She's working.", "She isn't working.", "Is she working?"],
        ["you / we / they", "They're working.", "They aren't working.", "Are they working?"],
      ),
      ex("What are you doing? I'm cooking dinner.", "Bạn đang làm gì thế? Mình đang nấu bữa tối."),
      ex("Be quiet! The baby is sleeping.", "Khẽ thôi! Em bé đang ngủ."),
      ex("I'm not watching TV. I'm reading a book.", "Tôi không xem ti vi. Tôi đang đọc sách."),
      mistake("I watching TV.", "I'm watching TV.", "Người Việt ghép “đang” với đuôi -ing rồi quên mất am/is/are. Hai phần phải luôn đi cùng nhau: thiếu to be là câu sai."),
      mistake("She is work now.", "She is working now.", "Ngược lại, có bạn nhớ is nhưng quên -ing. Is work không phải câu tiếng Anh: phải là is working."),
      p("Thêm **-ing** không phải lúc nào cũng chỉ việc gắn đuôi. Có vài quy tắc chính tả cần nhớ."),
      table(
        ["Quy tắc", "Ví dụ"],
        ["Thường: thêm -ing", "read → reading, play → playing"],
        ["Tận cùng bằng e câm: bỏ e, thêm -ing", "write → writing, make → making"],
        ["Một nguyên âm + một phụ âm ở cuối (từ một âm tiết): gấp đôi phụ âm", "run → running, sit → sitting, swim → swimming"],
        ["Tận cùng -ie: đổi thành -ying", "lie → lying, tie → tying"],
      ),
      tip("Mẹo gấp đôi: với từ một âm tiết, nhìn ba chữ cuối, nếu thấy **phụ âm, nguyên âm, phụ âm** (r-u-n, s-i-t) thì gấp đôi chữ cuối. Nhưng không bao giờ gấp đôi **w, x, y**: snow → snowing, fix → fixing, play → playing."),
      p("So sánh với **hiện tại đơn** đã học: hiện tại đơn nói về **thói quen, việc lặp lại** (every day, usually); hiện tại tiếp diễn nói về việc **đang xảy ra lúc này** (now, at the moment, Look!)."),
      table(
        ["Hiện tại đơn", "Hiện tại tiếp diễn"],
        ["I drink tea every morning.", "I'm drinking coffee now."],
        ["She usually walks to work.", "Look! She's running."],
        ["It often rains in June.", "It's raining at the moment."],
      ),
      ex("I usually go to work by motorbike, but today I'm taking the bus.", "Tôi thường đi làm bằng xe máy, nhưng hôm nay tôi đi xe buýt.", "Usually báo hiệu thói quen (hiện tại đơn), today báo hiệu việc khác thường đang diễn ra (tiếp diễn)."),
      mistake("Every day I am going to work at seven.", "Every day I go to work at seven.", "Tiếng Việt dùng chữ “đang” khá thoải mái, nên có bạn dùng -ing cho cả thói quen. Có every day, usually, always là thói quen: dùng hiện tại đơn."),
      teacher("Khi đứng lớp, tôi hay giao một bài tập mà bạn học viên nào làm cũng tiến bộ: các bạn ngồi ở quán cà phê hay trên xe buýt, nhìn quanh và nói thầm **She's talking on the phone. He's reading a newspaper. They're waiting for the bus.** Mỗi câu tự hỏi hai điều: đã có **am/is/are** chưa, động từ đã có **-ing** chưa. Thiếu một trong hai là phải nói lại. Làm vậy mười phút mỗi ngày, chỉ một tuần là hết quên."),
      summary(
        "**am / is / are + V-ing** cho việc đang diễn ra lúc nói: I'm cooking dinner.",
        "Luôn đủ hai phần: không nói I watching TV, cũng không nói she is work.",
        "Phủ định: I'm not, isn't, aren't. Câu hỏi đảo to be lên trước: **What are you doing?** Is she sleeping?",
        "Chính tả: write → writing, run → running, lie → lying; không gấp đôi w, x, y.",
        "Thói quen (every day, usually) dùng **hiện tại đơn**; now, at the moment, Look! dùng **hiện tại tiếp diễn**.",
      ),
    ],
  },
  words: [
    word("sleep", "/sliːp/", "ngủ", "The children are sleeping.", "sleep", 0, "Kéo dài âm /iː/ và giữ âm /p/ ở cuối."),
    word("wait", "/weɪt/", "đợi, chờ", "I'm waiting for my friend.", "wait", 0, "Đi với for khi có người hoặc vật được đợi: wait for the bus."),
    word("write", "/raɪt/", "viết", "She's writing an email.", "write", 0, "Chữ w câm, đọc giống hệt right; writing chỉ có một chữ t."),
    word("run", "/rʌn/", "chạy", "Look! The dog is running.", "run", 0, "Running gấp đôi chữ n."),
    word("listen", "/ˈlɪs.ən/", "nghe, lắng nghe", "I'm listening to music.", "lis|ten", 0, "Chữ t câm: đọc /ˈlɪs.ən/. Luôn đi với to khi có tân ngữ: listen to music."),
    word("rain", "/reɪn/", "mưa", "Take an umbrella. It's raining.", "rain", 0),
    word("now", "/naʊ/", "bây giờ", "What are you doing now?", "now", 0),
    word("moment", "/ˈməʊ.mənt/", "lúc, thời điểm", "She's busy at the moment.", "mo|ment", 0, "At the moment nghĩa là ngay lúc này, giống now."),
  ],
  exercises: [
    mc("a1-n15-1", "Look! It ___.", ["rains", "is raining", "raining"], 1, "Look! báo hiệu việc đang diễn ra trước mắt: dùng is + V-ing."),
    mc("a1-n15-2", "Chọn cách viết đúng của sit + -ing:", ["siting", "sitteing", "sitting"], 2, "Sit kết thúc bằng phụ âm, nguyên âm, phụ âm nên gấp đôi t: sitting."),
    fill("a1-n15-3", "She ___ her homework at the moment. (do)", ["is doing", "'s doing"], "At the moment là ngay lúc này; she đi với is: is doing."),
    fill("a1-n15-4", "I ___ to work by bus every day. (go)", ["go"], "Every day là thói quen nên dùng hiện tại đơn, không dùng -ing."),
    reorder("a1-n15-5", "What are your children doing?", "What + are + chủ ngữ + V-ing? Your children là số nhiều nên dùng are."),
    reorder("a1-n15-6", "Who is sitting next to you?", "Who làm chủ ngữ nên đi thẳng với is sitting, không cần đảo."),
    listen("a1-n15-7", "I'm waiting for the bus.", ["Tôi đang đợi xe buýt.", "Tôi thường đi xe buýt.", "Tôi đang ngồi trên xe buýt."], 0, "Waiting for là đang đợi."),
    listen("a1-n15-8", "She isn't sleeping. She's reading.", ["Cô ấy đang ngủ chứ không đọc sách.", "Cô ấy không ngủ. Cô ấy đang đọc sách.", "Cô ấy không đọc sách. Cô ấy đang ngủ."], 1, "Isn't sleeping là không ngủ; she's reading là đang đọc."),
    correct("a1-n15-9", "My mother cooking dinner now.", ["My mother is cooking dinner now.", "My mother's cooking dinner now."], "Thiếu to be: hiện tại tiếp diễn luôn cần đủ hai phần, is + V-ing."),
    correct("a1-n15-10", "Look! The children play in the garden.", ["Look! The children are playing in the garden."], "Look! báo hiệu việc đang diễn ra trước mắt, nên dùng hiện tại tiếp diễn: are playing."),
  ],
  freeSpeaking: free(
    "What are you doing now, and what are the people near you doing?",
    "Tả bạn đang ở đâu, đang làm gì, và những người xung quanh đang làm gì.",
    "I'm sitting at my desk in the office. I'm not working now. I'm studying English on my phone. My colleague is talking on the phone, and my boss is writing an email. Outside, it's raining.",
  ),
  speaking: [
    say("I'm studying English at the moment.", "Lúc này tôi đang học tiếng Anh."),
    say("What are you doing now?", "Bây giờ bạn đang làm gì?"),
    say("It's raining, so we're staying at home.", "Trời đang mưa nên chúng tôi ở nhà."),
  ],
  dialogue: dialogue(
    "Gọi điện cho bạn lúc trời mưa",
    "Bảy giờ tối, trời đang mưa. Mai ngồi chờ xe buýt trong một quán cà phê nhỏ cạnh bến xe và gọi điện cho Sarah, người bạn người Anh sống cùng thành phố. Hai người hỏi nhau đang làm gì.",
    { A: "Mai", B: "Sarah" },
    A("Hi Sarah, it's Mai. What are you doing?", "Chào Sarah, mình là Mai đây. Bạn đang làm gì thế?"),
    B("Hi Mai! I'm cooking dinner. Tom is watching TV.", "Chào Mai! Mình đang nấu bữa tối. Tom đang xem ti vi."),
    A("Is he watching football?", "Anh ấy đang xem bóng đá à?"),
    B("Yes, he is. He watches football every evening!", "Ừ, đúng rồi. Tối nào anh ấy cũng xem bóng đá!"),
    A("Ha ha. And the children? Are they sleeping?", "Ha ha. Còn bọn trẻ? Chúng đang ngủ à?"),
    B("No, they aren't. They're doing their homework. What about you?", "Không. Chúng đang làm bài tập về nhà. Còn bạn?"),
    A("I'm waiting for the bus. It's raining at the moment.", "Mình đang chờ xe buýt. Lúc này trời đang mưa."),
    B("Oh no! Are you standing in the rain?", "Ôi không! Bạn đang đứng dưới mưa à?"),
    A("No, I'm not. I'm sitting in a small café, and I'm drinking hot tea.", "Không. Mình đang ngồi trong một quán cà phê nhỏ và đang uống trà nóng."),
    B("Good. Come to our house for dinner! I'm making a lot of food.", "Tốt. Đến nhà mình ăn tối đi! Mình đang nấu nhiều đồ ăn lắm."),
    A("Really? Thank you! Oh, my bus is coming now.", "Thật à? Cảm ơn bạn! À, xe buýt của mình đang đến rồi."),
    B("Great. See you soon, Mai!", "Tuyệt. Lát gặp nhé, Mai!"),
  ),
  dialogueQuestions: [
    listenQ("a1-n15-d1", "Tom đang làm gì?", "Hi Mai! I'm cooking dinner. Tom is watching TV.", ["Đang nấu bữa tối", "Đang xem ti vi", "Đang làm bài tập"], 1, "Tom is watching TV: Tom đang xem ti vi. Người nấu bữa tối là Sarah."),
    mc("a1-n15-d2", "Bọn trẻ nhà Sarah đang làm gì?", ["Đang ngủ", "Đang xem bóng đá", "Đang làm bài tập về nhà"], 2, "No, they aren't. They're doing their homework."),
    listenQ("a1-n15-d3", "Mai đang ở đâu?", "No, I'm not. I'm sitting in a small café, and I'm drinking hot tea.", ["Ngồi trong một quán cà phê nhỏ", "Đứng dưới mưa ở bến xe", "Ở nhà Sarah"], 0, "I'm sitting in a small café: Mai đang ngồi trong một quán cà phê nhỏ, không đứng dưới mưa."),
  ],
  reading: reading({
    title: "Nhóm chat gia đình",
    text: `Dad: Hi everyone! Where are you? What are you doing?

Linh: I'm at the library. I'm studying for my English test. It's very quiet here.

Mum: I'm at the market with Grandma. We're buying fish and vegetables for lunch. The market is very busy today!

Nam: I'm at home. I'm not sleeping, Dad! I'm cleaning my room.

Dad: Great! I'm washing the car. It isn't raining now, and the sun is shining. Let's have lunch together at twelve o'clock.

Linh: OK. See you at twelve!`,
    glossary: [
      ["everyone", "mọi người"],
      ["test", "bài kiểm tra"],
      ["vegetables", "rau"],
      ["clean", "dọn dẹp"],
      ["wash", "rửa"],
      ["the sun is shining", "trời đang nắng"],
      ["Let's…", "Chúng ta hãy…"],
    ],
    questions: [
      mc("a1-n15-r1", "Đây là loại văn bản gì?", ["Tin nhắn trong nhóm chat của một gia đình", "Một email công việc", "Một bài báo về chợ"], 0, "Bố, mẹ, Linh và Nam nhắn cho nhau xem mỗi người đang ở đâu, đang làm gì."),
      mc("a1-n15-r2", "Linh đang làm gì?", ["Đang đi chợ với bà", "Đang ôn bài ở thư viện", "Đang dọn phòng"], 1, "I'm at the library. I'm studying for my English test."),
      mc("a1-n15-r3", "Mẹ đang ở đâu, với ai?", ["Ở nhà với Nam", "Ở thư viện với Linh", "Ở chợ với bà"], 2, "I'm at the market with Grandma."),
      fill("a1-n15-r4", "Nam không ngủ, Nam đang dọn phòng: I'm ___ my room. (clean)", ["cleaning"], "Hiện tại tiếp diễn: am + V-ing, clean thêm -ing thành cleaning."),
      mc("a1-n15-r5", "Cả nhà hẹn ăn trưa lúc mấy giờ?", ["Mười một giờ", "Mười hai giờ", "Mười giờ"], 1, "Let's have lunch together at twelve o'clock."),
    ],
  }),
  task: task({
    prompt: "Hãy nhìn quanh bạn lúc này (ở nhà, ở quán cà phê hoặc ở văn phòng). Viết 5–7 câu tả bạn và những người xung quanh đang làm gì, rồi thêm một câu so sánh với thói quen hằng ngày của bạn.",
    hints: [
      "Mỗi câu cần đủ hai phần: am, is hoặc are + V-ing.",
      "Có ít nhất một câu phủ định: I'm not working now.",
      "Câu so sánh: I usually… (hiện tại đơn), but today I'm… (tiếp diễn).",
    ],
    model: "It's eight o'clock in the evening. I'm sitting in a café near my house. I'm not working now. I'm writing in English. A young man is reading a book. Two girls are talking and drinking coffee. It's raining at the moment. I usually go home at seven, but today I'm staying here.",
    checklist: [
      "Mỗi câu tiếp diễn có đủ am, is hoặc are và động từ thêm -ing",
      "Dùng is với he, she, it và are với they hoặc danh từ số nhiều",
      "Có ít nhất một câu phủ định (I'm not, isn't, aren't)",
      "Viết đúng chính tả -ing (sitting, writing, running)",
      "Có một câu hiện tại đơn cho thói quen với usually hoặc every day",
    ],
    minWords: 30,
  }),
});
