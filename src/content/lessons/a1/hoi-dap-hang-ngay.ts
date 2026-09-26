import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "hoi-dap-hang-ngay",
  title: "Hỏi đáp về thói quen",
  minutes: 28,
  lecture: {
    title: "Câu hỏi Wh- với do/does và cách nói tần suất",
    blocks: [
      p("Bạn đã biết hỏi **Do you work?** và trả lời Yes hoặc No. Nhưng trò chuyện thật thì cần nhiều hơn thế: Bạn sống ở đâu? Mấy giờ bạn đi làm? Bao lâu bạn về quê một lần? Những câu này dùng **từ để hỏi** đứng trước **do / does**."),
      p("Công thức chỉ có một: **Từ để hỏi + do / does + chủ ngữ + động từ nguyên mẫu?** Dùng **does** với he, she, it; dùng **do** với I, you, we, they. Khi đã có does, động từ chính **không thêm -s** nữa."),
      table(
        ["Từ để hỏi", "Câu hỏi", "Câu trả lời"],
        ["What", "What do you do?", "I'm a nurse."],
        ["Where", "Where does your sister live?", "She lives in Da Nang."],
        ["When", "When do you visit your grandparents?", "At the weekend."],
        ["What time", "What time does the bank open?", "At eight o'clock."],
        ["How often", "How often do you go to the gym?", "Three times a week."],
      ),
      ex("What do you do? I'm an engineer.", "Bạn làm nghề gì? Tôi là kỹ sư.", "What do you do? là câu hỏi về nghề nghiệp, không phải “bạn đang làm gì”."),
      ex("Where does your brother work? He works in a bank.", "Anh trai bạn làm việc ở đâu? Anh ấy làm ở ngân hàng.", "Câu hỏi có does nên work giữ nguyên; câu trả lời không có does nên works có -s."),
      mistake("Where your sister lives?", "Where does your sister live?", "Tiếng Việt chỉ cần thêm chữ “ở đâu” vào câu kể là thành câu hỏi, nên người Việt hay quên does. Câu hỏi Wh- với động từ thường bắt buộc phải có do hoặc does."),
      mistake("What time does he gets up?", "What time does he get up?", "Does đã mang -s thay cho động từ rồi. Một câu chỉ cần một chữ -s, đừng thêm hai lần."),
      p("Để trả lời câu hỏi **How often...?**, bên cạnh always, usually, sometimes, bạn còn dùng các **cụm chỉ tần suất**. Các cụm này thường đứng **ở cuối câu**, cũng có thể đứng đầu câu (Every day, I drink tea)."),
      table(
        ["Cụm tần suất", "Nghĩa", "Ví dụ"],
        ["every day / every Monday", "mỗi ngày / mỗi thứ Hai", "I drink tea every day."],
        ["once a week", "một lần một tuần", "We eat out once a week."],
        ["twice a month", "hai lần một tháng", "She visits her parents twice a month."],
        ["three times a year", "ba lần một năm", "They go to Hue three times a year."],
      ),
      mistake("I go to the market two time a week.", "I go to the market twice a week.", "Người Việt nói “hai lần” nên quên -s của times. Hai lần thường nói là twice (một lần là once); nếu dùng time với số từ hai trở lên thì phải là times: three times, four times."),
      mistake("I every day drink coffee.", "I drink coffee every day.", "Tiếng Việt nói “tôi ngày nào cũng uống cà phê”, nên người Việt hay nhét every day vào giữa. Cụm tần suất thường đứng ở cuối câu (hoặc đầu câu), không chen giữa chủ ngữ và động từ như always, usually."),
      ex("How often does your son play badminton? Every Saturday.", "Con trai bạn chơi cầu lông bao lâu một lần? Thứ Bảy nào cũng chơi."),
      tip("Trong câu hỏi, **do** và **does** được đọc rất nhẹ và nhanh, gần như dính vào từ sau: What do you do? nghe như /wɒt də jə duː/. Bạn không cần đọc to do, nhưng đừng bỏ nó đi."),
      teacher("Có một bài tập tôi giao cho mọi lớp A1: mỗi bạn hỏi **năm câu** về thói quen của một người thân rồi ghi lại câu trả lời. Where does my mother go every morning? What time does my father have dinner? Hỏi về người thật thì các bạn phải dùng **does** thật, và chỉ sau một tuần, lỗi quên does giảm hẳn."),
      summary(
        "Công thức: **Từ để hỏi + do / does + chủ ngữ + động từ nguyên mẫu?** Where do you live?",
        "**Does** đi với he, she, it. Đã có does thì động từ **không thêm -s**: What time does he get up?",
        "What do you do? hỏi nghề nghiệp; What time…? hỏi giờ; Where…? hỏi nơi chốn; How often…? hỏi bao lâu một lần.",
        "**Once** (một lần), **twice** (hai lần) là cách nói thông dụng; từ ba lần trở đi: **three times** a week.",
        "Cụm tần suất như every day, once a week thường đứng **ở cuối câu** (cũng có thể đứng đầu câu).",
      ),
    ],
  },
  words: [
    word("live", "/lɪv/", "sống", "Where do you live?", "live", 0, "Âm /ɪ/ ngắn. Đọc kéo dài thành /liːv/ là thành leave (rời đi)."),
    word("visit", "/ˈvɪz.ɪt/", "thăm", "I visit my grandparents every Sunday.", "vis|it", 0, "Chữ s ở đây đọc là /z/."),
    word("once", "/wʌns/", "một lần", "We go to the cinema once a month.", "once", 0, "Đọc là /wʌns/, bắt đầu bằng âm /w/, không đọc theo chữ viết “ôn-xơ”."),
    word("twice", "/twaɪs/", "hai lần", "She calls her mother twice a week.", "twice", 0),
    word("gym", "/dʒɪm/", "phòng tập thể dục", "How often do you go to the gym?", "gym", 0),
    word("market", "/ˈmɑː.kɪt/", "chợ", "My mother goes to the market every morning.", "mar|ket", 0, "Nhớ giữ âm /t/ ở cuối."),
    word("dinner", "/ˈdɪn.ə/", "bữa tối", "What time do you have dinner?", "din|ner", 0),
    word("often", "/ˈɒf.ən/", "thường, hay", "How often do you visit your parents?", "of|ten", 0, "Chữ t thường câm: /ˈɒf.ən/. Một số người đọc /ˈɒf.tən/, cũng được chấp nhận."),
  ],
  exercises: [
    mc("a1-n08-1", "Where ___ your brother work?", ["do", "does", "is"], 1, "Your brother là he, và work là động từ thường, nên dùng does."),
    mc("a1-n08-2", "How often do you play tennis?", ["Twice a week.", "At seven o'clock.", "In the park."], 0, "How often hỏi bao lâu một lần, nên trả lời bằng cụm tần suất. At seven o'clock trả lời What time; in the park trả lời Where."),
    fill("a1-n08-3", "What time ___ the film start? (hiện tại đơn)", ["does"], "The film là it nên dùng does; động từ start giữ nguyên."),
    fill("a1-n08-4", "I go to the market ___ a week. (một lần)", ["once", "one time"], "Một lần thường nói là once; one time cũng hiểu được nhưng ít dùng hơn."),
    reorder("a1-n08-5", "How often do you visit your parents?", "How often + do + chủ ngữ + động từ nguyên mẫu?"),
    reorder("a1-n08-6", "What time does your father get up?", "What time + does + chủ ngữ + động từ nguyên mẫu; get up không thêm -s vì đã có does."),
    listen("a1-n08-7", "When do you have dinner?", ["Bạn ăn tối ở đâu?", "Bạn ăn tối với ai?", "Bạn ăn tối khi nào?"], 2, "When là khi nào; where mới là ở đâu."),
    listen("a1-n08-8", "She goes to the gym three times a week.", ["Cô ấy đến phòng tập mỗi ngày.", "Cô ấy đến phòng tập ba lần một tuần.", "Cô ấy đến phòng tập ba lần một tháng."], 1, "Three times a week là ba lần một tuần."),
    correct("a1-n08-9", "Where does your mother works?", ["Where does your mother work?"], "Does đã mang -s rồi, nên động từ chính giữ nguyên: work, không phải works."),
    correct("a1-n08-10", "She visits her grandmother two time a month.", ["She visits her grandmother twice a month.", "She visits her grandmother two times a month."], "Hai lần thường nói là twice; nếu dùng time với số từ hai trở lên thì phải thêm -s: two times."),
  ],
  freeSpeaking: free(
    "What time do you get up, and how often do you visit your family?",
    "Kể về thói quen hằng ngày của bạn: mấy giờ dậy, mấy giờ đi làm hoặc đi học, và bao lâu bạn làm một việc nào đó một lần.",
    "I get up at six o'clock every day. I go to work at half past seven. I visit my parents twice a month, on Sundays. I go to the gym three times a week, and I have dinner with my family every evening.",
  ),
  speaking: [
    say("How often do you go to the market?", "Bạn đi chợ bao lâu một lần?"),
    say("I visit my parents twice a month.", "Tôi về thăm bố mẹ hai lần một tháng."),
    say("Where does your sister live?", "Chị gái bạn sống ở đâu?"),
  ],
  dialogue: dialogue(
    "Gặp hàng xóm mới trong thang máy",
    "Anh Nam gặp David, người hàng xóm người Anh mới chuyển đến chung cư, trong thang máy buổi sáng. Hai người hỏi nhau về thói quen hằng ngày.",
    { A: "David", B: "Nam" },
    A("Good morning, Nam! What time do you go to work?", "Chào buổi sáng, Nam! Mấy giờ anh đi làm?"),
    B("At seven o'clock. I start work at eight.", "Lúc bảy giờ. Tôi bắt đầu làm việc lúc tám giờ."),
    A("Where do you have breakfast?", "Anh ăn sáng ở đâu?"),
    B("At a small café. I eat pho there every day.", "Ở một quán cà phê nhỏ. Ngày nào tôi cũng ăn phở ở đó."),
    A("Every day? I love pho too. How often do you go to the gym?", "Ngày nào cũng ăn à? Tôi cũng mê phở. Anh đi tập gym bao lâu một lần?"),
    B("Twice a week, on Tuesdays and Fridays. What about you?", "Hai lần một tuần, vào các ngày thứ Ba và thứ Sáu. Còn anh?"),
    A("I go three times a week.", "Tôi đi ba lần một tuần."),
    B("Where does your wife work, David?", "Vợ anh làm việc ở đâu, David?"),
    A("She works at an international school. She teaches English.", "Cô ấy làm ở một trường quốc tế. Cô ấy dạy tiếng Anh."),
    B("What time does she finish work?", "Mấy giờ cô ấy tan làm?"),
    A("At four o'clock. Then she goes to the market.", "Lúc bốn giờ. Sau đó cô ấy đi chợ."),
    B("Great. See you at the gym on Friday!", "Hay quá. Hẹn gặp anh ở phòng tập vào thứ Sáu nhé!"),
  ),
  dialogueQuestions: [
    listenQ("a1-n08-d1", "Nam ăn sáng ở đâu?", "At a small café. I eat pho there every day.", ["Ở nhà", "Ở một quán cà phê nhỏ", "Ở công ty"], 1, "At a small café: ở một quán cà phê nhỏ, ngày nào anh cũng ăn phở ở đó."),
    listenQ("a1-n08-d2", "Nam đi tập gym bao lâu một lần?", "Twice a week, on Tuesdays and Fridays.", ["Hai lần một tuần", "Ba lần một tuần", "Mỗi ngày"], 0, "Twice a week là hai lần một tuần. Ba lần một tuần là David."),
    mc("a1-n08-d3", "Vợ David làm gì sau khi tan làm lúc bốn giờ?", ["Đi tập gym", "Đi chợ", "Dạy tiếng Anh ở nhà"], 1, "At four o'clock. Then she goes to the market."),
  ],
  reading: reading({
    title: "Email của gia đình nhận người ở trọ",
    text: `Hi Emma,

Welcome to our family! Here is some information about our days.

We get up at six o'clock and have breakfast at half past six. My husband goes to work at seven, and our son goes to school at quarter past seven. I work at home.

We have dinner at seven o'clock in the evening. On Sundays, we visit my parents in the countryside. We go to the market twice a week, on Wednesdays and Saturdays.

Where do you want to go in Hue? Please write to me soon!

Best wishes,
Hoa`,
    glossary: [
      ["information", "thông tin"],
      ["at home", "ở nhà"],
      ["countryside", "vùng quê"],
      ["soon", "sớm"],
      ["Best wishes", "Thân chúc (câu kết thư)"],
    ],
    questions: [
      mc("a1-n08-r1", "Chị Hoa viết email này để làm gì?", ["Để kể nếp sinh hoạt của gia đình cho Emma", "Để mời Emma đi ăn tối", "Để xin nghỉ làm"], 0, "Here is some information about our days: chị Hoa kể giờ giấc và thói quen của cả nhà."),
      mc("a1-n08-r2", "Cả nhà ăn sáng lúc mấy giờ?", ["6:00", "6:30", "7:15"], 1, "Have breakfast at half past six: sáu giờ rưỡi. Sáu giờ là lúc cả nhà thức dậy."),
      mc("a1-n08-r3", "Con trai chị Hoa đi học lúc mấy giờ?", ["7:00", "7:45", "7:15"], 2, "Our son goes to school at quarter past seven: bảy giờ mười lăm. Bảy giờ là giờ chồng chị đi làm."),
      fill("a1-n08-r4", "Cả nhà đi chợ hai lần một tuần: We go to the market ___ a week.", ["twice", "two times"], "Hai lần là twice."),
      mc("a1-n08-r5", "Chủ nhật, gia đình chị Hoa làm gì?", ["Đi chợ", "Về quê thăm bố mẹ chị Hoa", "Ở nhà nấu ăn"], 1, "On Sundays, we visit my parents in the countryside."),
    ],
  }),
  task: task({
    prompt: "Hãy tìm hiểu thói quen của một người thân (bố, mẹ, anh chị hoặc vợ chồng). Viết 3–4 câu hỏi Wh- về người đó rồi tự trả lời từng câu bằng một câu đầy đủ.",
    hints: [
      "Dùng does vì người đó là he hoặc she: Where does my mother work?",
      "Câu hỏi có does thì động từ giữ nguyên; câu trả lời thì động từ thêm -s.",
      "Có ít nhất một câu How often…? và trả lời bằng once, twice, three times hoặc every…",
    ],
    model: "Where does my mother work? She works in a hospital. What time does she get up? She gets up at five o'clock. How often does she go to the market? She goes to the market every morning. How often does she visit her parents? She visits them twice a month.",
    checklist: [
      "Mỗi câu hỏi có do hoặc does đứng sau từ để hỏi",
      "Câu hỏi có does thì động từ chính không thêm -s",
      "Câu trả lời về he hoặc she có động từ thêm -s (she works, she gets up)",
      "Có ít nhất một câu How often và trả lời bằng once, twice hoặc every",
      "Cụm tần suất đứng ở cuối câu",
    ],
    minWords: 25,
  }),
});
