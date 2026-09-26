import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "cum-dong-tu-thong-dung",
  title: "Cụm động từ hằng ngày",
  minutes: 30,
  lecture: {
    title: "Cụm động từ: get up, look for, give up, turn on/off, find out, pick up",
    blocks: [
      p("Người Việt học tiếng Anh qua sách thường nói “I will discover the reason” hay “I will search for my keys”. Không sai, nhưng nghe cứng như văn viết. Người bản xứ nói chuyện hằng ngày gần như chỉ dùng **cụm động từ** (phrasal verbs): **find out**, **get up**. Một cụm động từ gồm **động từ + một tiểu từ** như up, on, off, out, for, và nghĩa của cả cụm thường khác hẳn nghĩa từng chữ."),
      table(
        ["Cụm động từ", "Nghĩa", "Ví dụ"],
        ["get up", "thức dậy, ra khỏi giường", "I get up at six every day."],
        ["look for", "tìm kiếm", "I'm looking for my keys."],
        ["give up", "bỏ (thói quen), từ bỏ", "He gave up smoking last year."],
        ["turn on / turn off", "bật / tắt (đèn, máy)", "Can you turn on the fan?"],
        ["find out", "tìm ra, biết được (thông tin)", "I found out the truth yesterday."],
        ["pick up", "nhặt lên; đón (ai đó)", "I'll pick you up at seven."],
      ),
      p("Có hai nhóm cần phân biệt. **Nhóm tách được** (turn on, turn off, pick up, give up): tân ngữ là danh từ có thể đứng giữa hoặc đứng sau, nhưng nếu là **đại từ** (it, him, her, them, me) thì **bắt buộc đứng giữa**. **Nhóm không tách được** (look for, look after): tân ngữ luôn đứng sau cả cụm. Riêng get up thường không có tân ngữ nên không phải lo chuyện này."),
      table(
        ["Kiểu câu", "Đúng", "Sai"],
        ["Tân ngữ là danh từ", "Turn off the light. / Turn the light off.", "(cả hai cách đều đúng)"],
        ["Tân ngữ là đại từ", "Turn it off.", "Turn off it."],
        ["Cụm không tách được", "I'm looking for it.", "I'm looking it for."],
      ),
      ex("The heater is still on. Could you turn it off?", "Máy sưởi vẫn đang bật. Bạn tắt nó đi được không?", "It là đại từ nên phải chen vào giữa: turn it off."),
      ex("My mother looks after my son when I'm at work.", "Mẹ tôi trông con trai tôi khi tôi đi làm.", "Look after: chăm sóc, trông nom. Không tách được."),
      p("Cùng một cụm có thể mang nhiều nghĩa, nên hãy **đoán nghĩa từ ngữ cảnh**. Pick up là ví dụ điển hình."),
      ex("Please pick up your rubbish.", "Làm ơn nhặt rác của bạn lên.", "Pick up một đồ vật: nhặt lên."),
      ex("Can you pick me up from the airport?", "Bạn đón tôi ở sân bay được không?", "Pick up một người: đón bằng xe."),
      ex("She picked up some Japanese while she was working in Osaka.", "Cô ấy học lỏm được chút tiếng Nhật khi làm việc ở Osaka.", "Pick up một ngôn ngữ, kỹ năng: học được một cách tự nhiên, không qua lớp học."),
      mistake("I'm looking my keys.", "I'm looking for my keys.", "Tiếng Việt nói “tìm chìa khóa” không cần giới từ, nên người Việt hay bỏ for. Look một mình là nhìn, look for mới là tìm."),
      mistake("It's too loud. Please turn off it.", "It's too loud. Please turn it off.", "Với cụm tách được, đại từ it phải đứng giữa động từ và tiểu từ. Tiếng Việt nói “tắt nó đi” theo thứ tự động từ trước, nên ta hay đặt it ra cuối."),
      mistake("My father gave up to smoke.", "My father gave up smoking.", "Sau give up, động từ phải ở dạng V-ing."),
      tip("Khi nói, **nhấn giọng vào tiểu từ** chứ không nhấn vào động từ: turn it OFF, pick me UP, give UP. Nếu tân ngữ là danh từ đứng sau thì nhấn vào danh từ: turn off the LIGHT."),
      teacher("Tôi khuyên các bạn đừng học cụm động từ theo danh sách dài hàng trăm cụm, học xong là quên. Hãy **học theo một ngày của chính mình**: sáng get up, turn off the alarm, tối turn on the TV, look for the remote. Mỗi hành động trong ngày, các bạn tự nói thầm cụm động từ tương ứng. Một tháng sau, những cụm này sẽ bật ra tự nhiên như tiếng mẹ đẻ."),
      summary(
        "Nghĩa của cụm động từ thường khác nghĩa từng chữ: find out là biết được, give up là từ bỏ.",
        "Cụm tách được (turn on / off, pick up, give up): đại từ bắt buộc đứng giữa, turn it off.",
        "Cụm không tách được (look for, look after): tân ngữ luôn đứng sau cả cụm.",
        "Look for mới là tìm, look một mình là nhìn. Sau give up dùng V-ing.",
        "Pick up có nhiều nghĩa (nhặt lên, đón ai, học lỏm được): đoán nghĩa theo ngữ cảnh.",
      ),
    ],
  },
  words: [
    word("alarm", "/əˈlɑːm/", "chuông báo thức, báo động", "I turned off the alarm and went back to sleep.", "a|larm", 1, "Trọng âm ở âm sau: a-LARM. Âm /ɑː/ kéo dài, không có âm r trong giọng Anh-Anh."),
    word("heater", "/ˈhiː.tə/", "máy sưởi", "Turn the heater on. It's cold in here.", "hea|ter", 0),
    word("habit", "/ˈhæb.ɪt/", "thói quen", "Smoking is a bad habit. You should give it up.", "hab|it", 0, "Nhớ giữ âm /t/ ở cuối."),
    word("cigarette", "/ˌsɪɡ.ərˈet/", "điếu thuốc lá", "He gave up cigarettes ten years ago.", "cig|a|rette", 2, "Giọng Anh-Anh nhấn âm cuối: ci-ga-RETTE."),
    word("truth", "/truːθ/", "sự thật", "I found out the truth from a friend.", "truth", 0, "Kết thúc bằng /θ/: đặt đầu lưỡi giữa hai hàm răng rồi thổi hơi, đừng đọc thành “trút”."),
    word("rubbish", "/ˈrʌb.ɪʃ/", "rác", "Please pick up your rubbish after the picnic.", "rub|bish", 0),
    word("airport", "/ˈeə.pɔːt/", "sân bay", "I'll pick you up at the airport.", "air|port", 0),
    word("switch", "/swɪtʃ/", "công tắc; chuyển, bật", "The light switch is next to the door.", "switch", 0),
  ],
  exercises: [
    mc("b1-n16-1", "It's dark in here. Can you turn ___ the light?", ["off", "on", "in", "for"], 1, "Trời tối thì cần bật đèn: turn on."),
    mc("b1-n16-2", "I've lost my glasses. Can you help me look ___ them?", ["after", "at", "for"], 2, "Bị mất kính thì cần tìm: look for. Look after là trông nom, look at là nhìn vào."),
    fill("b1-n16-3", "My father gave ___ smoking ten years ago.", ["up"], "Give up + V-ing: bỏ một thói quen."),
    fill("b1-n16-4", "The heater is on. Please turn ___ off. (nó)", ["it"], "Đại từ it phải đứng giữa turn và off."),
    reorder("b1-n16-5", "Could you pick me up from the airport?", "Đại từ me đứng giữa pick và up. Không nói pick up me."),
    reorder("b1-n16-6", "She is looking after her little brother.", "Look after là cụm không tách được: tân ngữ her little brother đứng sau cả cụm."),
    listen("b1-n16-7", "I found out that the shop was closed on Sundays.", ["Tôi tìm thấy cửa hàng vào chủ nhật.", "Cửa hàng mở cửa cả ngày chủ nhật.", "Tôi định đi cửa hàng vào chủ nhật.", "Tôi biết được rằng cửa hàng đóng cửa vào chủ nhật."], 3, "Find out: biết được, phát hiện ra một thông tin."),
    listen("b1-n16-8", "My grandfather gave up smoking when he was sixty.", ["Ông tôi bỏ thuốc lá khi ông sáu mươi tuổi.", "Ông tôi bắt đầu hút thuốc từ năm sáu mươi tuổi.", "Ông tôi vẫn hút thuốc dù đã sáu mươi tuổi."], 0, "Give up + V-ing: bỏ một thói quen. Gave up smoking là đã bỏ hút thuốc."),
    correct("b1-n16-9", "The TV is still on. Can you turn off it?", "The TV is still on. Can you turn it off?", "Turn off là cụm tách được: đại từ it bắt buộc đứng giữa turn và off."),
    correct("b1-n16-10", "He wants to give up to eat fast food.", "He wants to give up eating fast food.", "Sau give up, động từ phải ở dạng V-ing: give up eating."),
  ],
  speaking: [
    say("I usually get up at six and turn off my alarm straight away.", "Tôi thường dậy lúc sáu giờ và tắt chuông báo thức ngay."),
    say("I'm looking for my phone. Have you seen it?", "Tôi đang tìm điện thoại. Bạn có thấy nó không?"),
    say("Could you pick me up from the station at seven?", "Bạn đón tôi ở ga lúc bảy giờ được không?"),
  ],
  freeSpeaking: free(
    "Can you describe your typical morning, from the moment you get up?",
    "Kể về một buổi sáng bình thường của bạn, từ lúc thức dậy đến lúc ra khỏi nhà. Dùng ít nhất bốn cụm động từ: get up, turn on / off, look for, pick up…",
    "I usually get up at half past six. First, I turn off my alarm and turn on the radio to find out the news. Then I make breakfast for my son. Before we leave, I always spend a few minutes looking for his school bag. I take him to school at seven, and my husband picks him up in the afternoon.",
  ),
  dialogue: dialogue(
    "Buổi sáng vội vã",
    "Sáng thứ Hai, hai chị em cùng thuê nhà là Trang và Ngọc đang vội vàng chuẩn bị đi làm.",
    { A: "Trang", B: "Ngọc" },
    A("Ngoc, get up! It's already seven o'clock.", "Ngọc ơi, dậy đi! Bảy giờ rồi đấy."),
    B("Oh no! I didn't hear my alarm. Did you turn it off?", "Chết rồi! Em không nghe thấy báo thức. Chị tắt nó à?"),
    A("No, I didn't. What are you looking for now?", "Không, chị không tắt. Giờ em đang tìm gì thế?"),
    B("I'm looking for my phone. I can't find it anywhere.", "Em đang tìm điện thoại. Em tìm mãi không thấy."),
    A("It's on the floor next to the sofa. I'll pick it up for you. Here you are.", "Nó nằm dưới sàn cạnh ghế sofa. Để chị nhặt lên cho. Đây này."),
    B("Thanks. Can you pick me up after work? My motorbike is broken.", "Cảm ơn chị. Tan làm chị đón em được không? Xe máy em hỏng rồi."),
    A("Sure. By the way, did you find out what's wrong with it?", "Được. À mà em đã biết xe bị làm sao chưa?"),
    B("Not yet. The mechanic will call me this afternoon.", "Chưa chị. Chiều nay thợ sửa xe sẽ gọi cho em."),
    A("Okay. Oh, and please turn off the lights before you leave.", "Ừ. À, nhớ tắt đèn trước khi đi nhé."),
    B("Don't worry, I'll turn them off. And I promise to give up staying up late!", "Chị đừng lo, em sẽ tắt. Và em hứa sẽ bỏ thói thức khuya!"),
  ),
  dialogueQuestions: [
    listenQ("b1-n16-d1", "Why didn't Ngoc wake up on time?", "Oh no! I didn't hear my alarm. Did you turn it off?", ["She didn't hear her alarm.", "Trang turned her alarm off.", "Her phone had no battery."], 0, "Ngọc nói: I didn't hear my alarm. Trang trả lời No, I didn't, tức là Trang không tắt báo thức."),
    mc("b1-n16-d2", "Where was Ngoc's phone?", ["In her bag", "On the floor next to the sofa", "In the kitchen", "Under her pillow"], 1, "It's on the floor next to the sofa."),
    listenQ("b1-n16-d3", "Why does Ngoc need Trang to pick her up after work?", "Thanks. Can you pick me up after work? My motorbike is broken.", ["She has missed the bus.", "She is going to the airport.", "Her motorbike is broken.", "It is going to rain."], 2, "My motorbike is broken: xe máy của Ngọc bị hỏng."),
  ],
  reading: reading({
    title: "How I gave up my phone at night",
    text: `For years, my evenings looked the same. I got home, turned on the TV, picked up my phone and looked at it until midnight. In the morning, I couldn't get up. I turned off my alarm three or four times and always left home in a hurry, looking for my keys and my bag.

Last January, I found out that I was spending almost five hours a day on my phone. I was shocked, so I decided to change my habits.

First, I bought a cheap alarm clock. Now my phone stays in the kitchen at night, and the alarm clock wakes me up at six. When it rings, I have to get up and walk across the room to switch it off, so I can't go back to sleep.

Second, I turn off all notifications after nine o'clock. If my friends really need me, they can call. Most of the time, a message can wait until the morning.

Third, I picked up a new hobby: reading paper books. At first, I kept looking around for my phone, but after two weeks that feeling went away.

It wasn't easy to give up something I did every day. But I sleep much better now, and I've read eleven books this year. If you want to try, start small. Put your phone away for just one hour tonight and see how you feel.`,
    glossary: [
      ["in a hurry", "vội vàng"],
      ["shocked", "sốc, bàng hoàng"],
      ["notification", "thông báo (trên điện thoại)"],
      ["go away", "biến mất, qua đi"],
      ["put away", "cất đi"],
    ],
    questions: [
      mc("b1-n16-r1", "What is the blog post mainly about?", ["How the writer changed a bad phone habit", "How to choose a good alarm clock", "The best books to read at night", "Why the writer lost a job"], 0, "Cả bài kể người viết bỏ thói quen dùng điện thoại buổi tối như thế nào."),
      mc("b1-n16-r2", "Why can't the writer go back to sleep now?", ["The alarm clock is extremely loud.", "The writer has to get up and walk across the room to switch it off.", "A friend calls the writer every morning."], 1, "I have to get up and walk across the room to switch it off, so I can't go back to sleep."),
      fill("b1-n16-r3", "After nine o'clock, the writer turns ___ all notifications.", ["off"], "I turn off all notifications after nine o'clock: tắt hết thông báo."),
      mc("b1-n16-r4", "What new hobby has the writer picked up?", ["Running in the park", "Watching films", "Cooking dinner", "Reading paper books"], 3, "I picked up a new hobby: reading paper books. Pick up ở đây là bắt đầu một sở thích."),
      mc("b1-n16-r5", "How did the writer probably feel during the first two weeks?", ["Completely relaxed", "A little uncomfortable without the phone", "Angry with friends who called", "Bored with paper books"], 1, "Câu suy luận: người viết cứ tìm điện thoại (kept looking around for my phone), sau hai tuần cảm giác đó mới hết, nên lúc đầu hơi khó chịu."),
    ],
  }),
  task: task({
    prompt: "Viết một đoạn văn (90–120 từ) kể về một ngày bình thường của bạn, dùng ít nhất năm cụm động từ trong bài.",
    hints: [
      "Đi theo thứ tự thời gian: buổi sáng, trong ngày, buổi tối.",
      "Dùng đại từ với cụm tách được: turn it off, pick her up.",
      "Thêm một thói quen bạn muốn bỏ: I want to give up + V-ing.",
    ],
    model: "On weekdays, I get up at six o'clock. The first thing I do is turn off my alarm and turn on the kettle. Before I leave, I often spend five minutes looking for my keys. My mother looks after my daughter while I'm at the office. After work, I pick her up from my mother's house. In the evening, I turn on the TV to find out what is happening in the world. Before I go to bed, I turn off all the lights and pick up the toys from the floor. I want to give up checking my phone in bed, but it's hard!",
    checklist: [
      "Dùng ít nhất năm cụm động từ khác nhau.",
      "Đại từ (it, her, them) đứng giữa với cụm tách được: pick her up, turn it off.",
      "Look for và look after không bị tách ra.",
      "Không quên tiểu từ: looking for my keys, không phải looking my keys.",
      "Sau give up dùng V-ing.",
    ],
    minWords: 90,
  }),
});
