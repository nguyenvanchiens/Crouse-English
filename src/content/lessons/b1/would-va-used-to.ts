import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "would-va-used-to",
  title: "Ngày trước và bây giờ: used to, would, be used to, get used to",
  minutes: 34,
  lecture: {
    title: "Used to, would và quá khứ đơn cho thói quen cũ; be used to, get used to + V-ing cho chuyện đã quen, đang quen",
    blocks: [
      p("Bạn lớn lên ở quê, chiều nào cũng chạy chân đất ra đồng thả diều. Rồi bạn lên thành phố học đại học: tháng đầu nhớ nhà, không quen tiếng xe cộ, nửa đêm cứ giật mình tỉnh giấc. Vài năm sau, bạn ngủ ngon giữa phố đông. Kể lại câu chuyện ấy bằng tiếng Anh cần hai nhóm cấu trúc: **used to / would** cho những thói quen ngày trước, và **be used to / get used to** cho chuyện bây giờ đã quen hoặc đang dần quen."),
      p("Ở A2, bạn đã học **used to + V** cho thói quen và trạng thái trong quá khứ, nay không còn (I used to live in Hue). Hôm nay ta thêm **would + V**: cũng nói về **hành động lặp đi lặp lại** trong quá khứ, nhưng mang màu sắc kể chuyện, hoài niệm. Would không dùng cho trạng thái như be, have, live, like, know."),
      table(
        ["Cấu trúc", "Hành động lặp lại", "Trạng thái (be, have, live, like, know)", "Việc xảy ra một lần"],
        ["used to + V", "được", "được", "không"],
        ["would + V", "được", "không", "không"],
        ["quá khứ đơn", "được (thêm every day, often…)", "được", "được"],
      ),
      ex("Every evening, my grandmother would tell us stories.", "Ngày trước, tối nào bà tôi cũng kể chuyện cho chúng tôi nghe.", "Kể chuyện là hành động lặp lại mỗi tối, nên dùng được would. Used to tell hoặc told cũng đúng."),
      ex("I used to have long hair when I was at school.", "Hồi đi học tôi để tóc dài.", "Have ở đây là trạng thái (sở hữu), nên chỉ dùng used to hoặc quá khứ đơn (I had long hair), không dùng would."),
      p("Khi kể chuyện xưa, người bản ngữ thường đi theo một mạch: **mở đầu bằng used to** để dựng khung cảnh, **nối tiếp bằng would hoặc 'd** cho các việc lặp lại, rồi **chuyển sang quá khứ đơn** khi kể một sự việc chỉ xảy ra một lần (One day…, One summer…). **Wouldn't** trong chuyện xưa thường nghĩa là **không chịu**: My brother wouldn't eat vegetables (em tôi không chịu ăn rau)."),
      ex("When I was ten, we used to spend every summer by the river. We'd get up early and go fishing with my uncle. One summer, my cousin fell into the water.", "Hồi mười tuổi, mùa hè nào chúng tôi cũng về bên sông. Chúng tôi dậy sớm rồi theo chú đi câu cá. Có một mùa hè, em họ tôi bị ngã xuống nước.", "Used to dựng khung cảnh, 'd cho các việc lặp lại, fell (quá khứ đơn) cho sự việc chỉ xảy ra một lần."),
      mistake("I would have a red bicycle when I was young.", "I used to have a red bicycle when I was young.", "Tiếng Việt dùng chữ “hay”, “thường” cho cả việc làm lẫn việc sở hữu, nên người học tưởng would dùng được cho mọi thứ. Have (sở hữu) là trạng thái, nên dùng used to have hoặc had."),
      mistake("Last Sunday I would go to the market with my mother.", "Last Sunday I went to the market with my mother.", "Last Sunday là một lần duy nhất, không phải thói quen. Would chỉ dùng cho việc lặp đi lặp lại, nên ở đây phải dùng quá khứ đơn."),
      p("Bây giờ đến chuyện **hiện tại**. Hai cấu trúc trông rất giống used to nhưng nghĩa khác hẳn: **be used to + V-ing / danh từ** (đã quen với) và **get used to + V-ing / danh từ** (dần quen với, nhấn vào quá trình). Ở đây **to là giới từ**, nên sau nó là V-ing hoặc danh từ, không phải động từ nguyên mẫu. Be và get chia được ở mọi thì: I'm used to, I wasn't used to, I'm getting used to, I got used to."),
      table(
        ["Cấu trúc", "Nghĩa", "Ví dụ"],
        ["used to + V", "từng, hồi trước hay (nay không còn)", "I used to live in a village."],
        ["be used to + V-ing / danh từ", "đã quen với", "I'm used to getting up at five."],
        ["get used to + V-ing / danh từ", "dần quen với (quá trình)", "I'm getting used to the noise."],
      ),
      ex("It took me three months to get used to riding a motorbike in Hanoi.", "Tôi mất ba tháng mới quen đi xe máy ở Hà Nội.", "It took me + thời gian + to get used to + V-ing: mất bao lâu mới quen với việc gì."),
      ex("I'm not used to spicy food, so please don't add chilli.", "Tôi không quen ăn cay, nên làm ơn đừng cho ớt.", "Sau be used to có thể là danh từ (spicy food) hoặc V-ing (eating spicy food)."),
      mistake("I'm used to get up early.", "I'm used to getting up early.", "Người học thấy to là nghĩ ngay đến to + động từ nguyên mẫu. Trong be used to, to là giới từ, giống look forward to, nên theo sau là V-ing."),
      mistake("When I was a child, I was used to swim in the river.", "When I was a child, I used to swim in the river.", "Muốn nói thói quen cũ, nay không còn, thì dùng used to + V, không có was. Thêm was vào là thành “đã quen với”, khi đó phải là swimming, và nghĩa cũng khác."),
      tip("Mẹo nhớ: **có be hoặc get đứng trước thì là “quen”, sau đó là V-ing**; không có be / get thì là “từng”, sau đó là V. Would kể chuyện cần **mốc thời gian quá khứ** đi kèm (when I was a child, every summer), nếu không người nghe dễ hiểu là “sẽ”. Mẹo phát âm: used to đọc liền là **/ˈjuːs.tə/**, âm /s/ chứ không phải /z/; would khi kể gần như luôn rút gọn thành **'d** (we'd /wiːd/), giữ rõ âm /d/ cuối."),
      teacher("Khi đứng lớp, tôi hay thấy học trò kể chuyện tuổi thơ bằng một chuỗi used to, used to, used to, nghe như đọc danh sách. Các bạn chỉ cần **dùng used to một lần ở câu đầu**, sau đó chuyển sang 'd, câu chuyện lập tức có hồn. Bài tập tôi hay giao: viết năm câu về nơi bạn từng sống theo mạch used to, would, one day, rồi thêm hai câu về hiện tại: một câu **I'm used to…** và một câu **I'm still getting used to…** Viết về chính đời mình thì cấu trúc bám rất lâu."),
      summary(
        "**used to + V**: thói quen **và** trạng thái trong quá khứ, nay không còn (I used to live in Hue).",
        "**would / 'd + V**: chỉ cho **hành động lặp lại** trong quá khứ, không dùng cho trạng thái; wouldn't trong chuyện xưa thường là “không chịu”.",
        "Việc chỉ xảy ra **một lần** (one day, last Sunday) dùng **quá khứ đơn**.",
        "**be used to + V-ing / danh từ**: đã quen; **get used to + V-ing / danh từ**: dần quen. To ở đây là giới từ.",
        "Có be / get thì là “quen” + V-ing; không có be / get thì là “từng” + V.",
      ),
    ],
  },
  words: [
    word("barefoot", "/ˈbeə.fʊt/", "chân trần, đi chân đất", "We used to run barefoot on the beach.", "bare|foot", 0),
    word("harvest", "/ˈhɑː.vɪst/", "vụ mùa, mùa gặt", "At harvest time, the children would help in the fields.", "har|vest", 0, "Không đọc âm r; giữ âm cuối /st/."),
    word("nowadays", "/ˈnaʊ.ə.deɪz/", "ngày nay, thời nay", "Nowadays, children spend more time indoors.", "now|a|days", 0, "Âm cuối /z/, không phải /s/."),
    word("homesick", "/ˈhəʊm.sɪk/", "nhớ nhà", "I was very homesick in my first month in the city.", "home|sick", 0),
    word("adjust", "/əˈdʒʌst/", "thích nghi, điều chỉnh", "It took me a few weeks to adjust to the new timetable.", "ad|just", 1, "Cụm dj đọc là /dʒ/ như trong job, trọng âm ở âm sau: ə-JUST."),
    word("routine", "/ruːˈtiːn/", "nếp sinh hoạt, việc thường ngày", "My morning routine starts at six.", "rou|tine", 1, "Trọng âm ở âm sau: rou-TINE, chữ i đọc là /iː/."),
    word("commute", "/kəˈmjuːt/", "đi lại (giữa nhà và nơi làm)", "I'm used to commuting for an hour every day.", "com|mute", 1),
    word("unfamiliar", "/ˌʌn.fəˈmɪl.i.ə/", "xa lạ, chưa quen", "At first, everything in the city felt unfamiliar.", "un|fa|mil|i|ar", 2, "Âm cuối /ə/, không đọc âm r."),
  ],
  exercises: [
    mc("b1-n20-1", "When I was a child, I ___ a dog called Mit.", ["would have", "used to have", "was having", "use to have"], 1, "Have (sở hữu) là trạng thái, nên dùng used to have, không dùng would. Ở câu khẳng định phải có d: used to."),
    mc("b1-n20-2", "One night in 2010, a big storm ___ the roof of our house.", ["would damage", "used to damage", "damaged", "has damaged"], 2, "One night in 2010 là một lần duy nhất trong quá khứ, nên dùng quá khứ đơn: damaged."),
    fill("b1-n20-3", "Every afternoon after school, we ___ fly kites in the rice fields. (hay, thường, một từ)", ["would", "'d"], "Hành động lặp lại trong quá khứ, cần một từ: would + V. (Used to cũng đúng nghĩa nhưng là hai từ.)"),
    fill("b1-n20-4", "My grandfather ___ to be a teacher before he retired. (use)", ["used"], "Be là trạng thái, nên dùng used to be; would không dùng được ở đây."),
    reorder("b1-n20-5", "My grandmother would tell us ghost stories.", "Would + V: việc bà kể chuyện lặp lại nhiều lần ngày trước."),
    reorder("b1-n20-6", "Did you use to live in the countryside?", "Câu hỏi với used to: Did + chủ ngữ + use to + V (không có d sau use)."),
    listen("b1-n20-7", "My mother would wake us up at five every morning.", ["Sáng mai mẹ tôi sẽ đánh thức chúng tôi lúc năm giờ.", "Ngày trước sáng nào mẹ tôi cũng đánh thức chúng tôi lúc năm giờ.", "Nếu được, mẹ tôi sẽ đánh thức chúng tôi lúc năm giờ."], 1, "Would + every morning: thói quen lặp lại trong quá khứ."),
    listen("b1-n20-8", "She isn't used to working at night yet.", ["Cô ấy từng làm việc ban đêm.", "Cô ấy không muốn làm việc ban đêm nữa.", "Cô ấy vẫn chưa quen làm việc ban đêm."], 2, "Isn't used to + V-ing: chưa quen với việc gì. Yet: vẫn chưa."),
    correct("b1-n20-9", "When I was young, I would have a red bicycle.", ["When I was young, I used to have a red bicycle.", "When I was young, I had a red bicycle."], "Have (sở hữu) là trạng thái nên không dùng would; dùng used to have hoặc had."),
    correct("b1-n20-10", "Last Tet, we would visit my aunt in Can Tho.", "Last Tet, we visited my aunt in Can Tho.", "Last Tet là một lần duy nhất, nên dùng quá khứ đơn, không dùng would."),
    mc("b1-n20-11", "I've lived in Hanoi for ten years, so I ___ in heavy traffic.", ["am used to driving", "used to drive", "am used to drive", "use to driving"], 0, "Đã quen với việc gì ở hiện tại: be used to + V-ing. Used to drive nghĩa là “ngày trước hay lái”, nay không còn, sai nghĩa."),
    fill("b1-n20-12", "It took me a few months to get used to ___ up at five for my new job. (wake)", ["waking"], "Get used to + V-ing: to là giới từ, nên phải là waking."),
    correct("b1-n20-13", "I'm slowly getting used to live in a big city.", "I'm slowly getting used to living in a big city.", "Get used to + V-ing: to là giới từ, nên phải là living."),
    reorder("b1-n20-14", "Have you got used to your new job?", "Câu hỏi thì hiện tại hoàn thành với get used to: Have + chủ ngữ + got used to + danh từ."),
  ],
  speaking: [
    say("Every summer, we would visit our grandparents in the countryside.", "Mùa hè nào chúng tôi cũng về quê thăm ông bà."),
    say("My grandfather used to be a farmer.", "Ông tôi ngày trước là nông dân."),
    say("It took me a year to get used to the traffic in Hanoi.", "Tôi mất một năm mới quen với giao thông ở Hà Nội."),
  ],
  freeSpeaking: free(
    "How was your life different a few years ago, and what have you got used to since then?",
    "Kể về cuộc sống của bạn vài năm trước (used to, would), một chuyện xảy ra một lần (quá khứ đơn), rồi nói bây giờ bạn đã quen hoặc đang dần quen với điều gì (be used to, get used to + V-ing).",
    "A few years ago, I used to live with my parents in Nam Dinh. Every morning, my mother would cook breakfast for the whole family. Then I got a job in Hanoi and moved into a small flat. At first, I wasn't used to cooking for myself, and one night I burnt my rice. Now I'm used to living alone, but I'm still getting used to the traffic.",
  ),
  dialogue: dialogue(
    "Từ làng quê lên Hà Nội",
    "Ben, đồng nghiệp người Anh, hỏi Vy về tuổi thơ ở làng quê Thái Bình và chuyện cô làm quen với cuộc sống ở Hà Nội. Ben cũng kể chuyện mình tập quen với giao thông ở đây.",
    { A: "Ben, đồng nghiệp người Anh", B: "Vy" },
    A("Vy, did you grow up in Hanoi?", "Vy này, bạn lớn lên ở Hà Nội à?"),
    B("No, in a village in Thai Binh. I moved here for university eight years ago.", "Không, ở một ngôi làng ở Thái Bình. Mình lên đây học đại học từ tám năm trước."),
    A("What was life like there?", "Cuộc sống ở đó thế nào?"),
    B("Very quiet. Every afternoon, my friends and I would run barefoot to the fields and fly kites. And at harvest time, we'd all help my grandparents.", "Yên bình lắm. Chiều nào mình với lũ bạn cũng chạy chân đất ra đồng thả diều. Còn đến mùa gặt thì cả bọn ra phụ ông bà."),
    A("That sounds lovely. Was it hard to get used to Hanoi?", "Nghe thích quá. Thế quen với Hà Nội có khó không?"),
    B("At first, yes. I was really homesick, and I wasn't used to the noise. I used to wake up at three every night because of the traffic.", "Lúc đầu thì có. Mình nhớ nhà lắm, lại không quen tiếng ồn. Đêm nào mình cũng tỉnh giấc lúc ba giờ vì tiếng xe."),
    A("Three o'clock? Poor you! And now?", "Ba giờ sáng á? Tội bạn quá! Thế còn bây giờ?"),
    B("Now I'm used to it. I can sleep through anything! What about you? Have you got used to the motorbikes yet?", "Giờ thì quen rồi. Ồn mấy mình cũng ngủ được! Còn bạn? Bạn đã quen với xe máy chưa?"),
    A("Almost. In London, I used to take the Tube everywhere, so riding in this traffic was terrifying at first.", "Gần quen rồi. Ở London mình toàn đi tàu điện ngầm, nên lúc đầu chạy xe giữa dòng xe cộ này đáng sợ lắm."),
    B("Do you ride to work every day now?", "Giờ ngày nào bạn cũng đi xe máy đi làm à?"),
    A("Yes, I commute by motorbike, forty minutes each way. But I'm still not used to the rain in July!", "Ừ, mình đi làm bằng xe máy, mỗi chiều bốn mươi phút. Nhưng mình vẫn chưa quen với mưa tháng Bảy!"),
    B("Nobody is! My grandmother would always say, “Summer rain is good for the rice.”", "Có ai quen nổi đâu! Bà mình ngày trước lúc nào cũng bảo: “Mưa mùa hạ thì lúa tốt.”"),
    A("Do you go back to the village often?", "Bạn có hay về làng không?"),
    B("Only at Tet. Nowadays my routine is so busy. But whenever I go home, I sleep like a baby.", "Chỉ dịp Tết thôi. Bây giờ việc thường ngày bận quá. Nhưng lần nào về quê, mình cũng ngủ ngon như em bé."),
  ),
  dialogueQuestions: [
    listenQ("b1-n20-d1", "What would Vy and her friends do every afternoon?", "Very quiet. Every afternoon, my friends and I would run barefoot to the fields and fly kites. And at harvest time, we'd all help my grandparents.", ["Swim in the river", "Run to the fields and fly kites", "Help in the fields every day", "Watch TV at a friend's house"], 1, "Every afternoon, my friends and I would run barefoot to the fields and fly kites. Việc phụ ông bà chỉ vào mùa gặt."),
    mc("b1-n20-d2", "What was difficult for Vy when she first moved to Hanoi?", ["She couldn't find a room near the university.", "She didn't like the food.", "She wasn't used to the noise and woke up at night.", "She had to ride a motorbike in the rain."], 2, "I wasn't used to the noise. I used to wake up at three every night because of the traffic."),
    mc("b1-n20-d3", "Why does Vy probably sleep so well when she goes back to her village?", ["It is much quieter than Hanoi.", "She works at night in Hanoi.", "Her grandmother tells her stories.", "She only goes home in summer."], 0, "Câu suy luận: Vy kể làng rất yên tĩnh (very quiet), còn ở Hà Nội tiếng xe từng làm cô mất ngủ, nên về quê cô ngủ ngon vì yên tĩnh. Cô chỉ về dịp Tết, không phải mùa hè."),
  ],
  reading: reading({
    title: "From the river to the city",
    text: `When I was a child, my parents worked long hours in Da Nang, so every summer they sent me to my grandparents' house in a small village near Hoi An. The house was old and dark, and it didn't have air conditioning, but I loved it.

My grandfather used to be a fisherman, and even at seventy he would get up before the sun and walk down to the river. Sometimes he'd take me with him. We would sit in his little boat for hours without saying a word. My grandmother was the opposite. She talked all day while she was cooking, and in the afternoons the neighbours' children would gather in her yard for sweet potatoes and stories.

One summer, a big flood came. The water rose into the kitchen, and we spent two nights in the village school on the hill. My grandfather didn't complain once. When the water went down, he simply started to clean the house.

Three years ago, I moved to Ho Chi Minh City for my first job, and life changed completely. At first, everything felt strange. I wasn't used to the noise, the crowds or the heat that never seems to leave the streets. My flat is tiny, and I can hear my neighbours' television through the wall. For the first few months I was homesick, and I called my mother almost every evening.

Slowly, though, I adjusted. These days I'm used to riding to work through heavy traffic, and I've even started to enjoy the late-night food stalls near my building. My week is busy: work, the gym, and online English classes twice a week.

Still, there is one thing I can't get used to: I rarely see a river here. Whenever it rains heavily, I think of that flood and those long, quiet summers, and I feel strangely nostalgic.`,
    glossary: [
      ["air conditioning", "máy điều hòa"],
      ["fisherman", "người đánh cá"],
      ["sweet potato", "khoai lang"],
      ["flood", "trận lụt"],
      ["complain", "phàn nàn, kêu ca"],
      ["crowd", "đám đông"],
      ["food stall", "quầy hàng ăn"],
      ["nostalgic", "hoài niệm, nhớ về ngày xưa"],
    ],
    questions: [
      mc("b1-n20-r1", "What is the text mainly about?", ["How to stay safe during a flood", "The writer's childhood summers in a village and getting used to city life", "Why Ho Chi Minh City is better than the countryside", "The writer's grandparents' fishing business"], 1, "Bài có hai nửa: những mùa hè tuổi thơ ở nhà ông bà gần Hội An và quá trình người viết dần quen với cuộc sống ở TP Hồ Chí Minh."),
      fill("b1-n20-r2", "Before he got old, the writer's grandfather used to be a ___.", ["fisherman"], "Đoạn hai: My grandfather used to be a fisherman."),
      mc("b1-n20-r3", "Which of these happened only once?", ["The grandfather got up before the sun.", "The children gathered in the grandmother's yard.", "The writer called home almost every evening.", "The family spent two nights in the village school."], 3, "Trận lụt là sự việc một lần, nên người viết kể bằng quá khứ đơn (spent). Các việc còn lại là thói quen lặp lại."),
      mc("b1-n20-r4", "What is the writer used to now?", ["Riding to work through heavy traffic", "Seeing the river every day", "Living in a quiet flat", "Calling home every evening"], 0, "These days I'm used to riding to work through heavy traffic. Căn hộ thì ồn, và người viết hiếm khi thấy sông."),
      mc("b1-n20-r5", "What can we guess about the grandfather from the flood story?", ["He was afraid of water.", "He was calm and strong in difficult times.", "He wanted to move to the city.", "He was angry with his neighbours."], 1, "Ông không phàn nàn lần nào và lặng lẽ dọn nhà khi nước rút, nên ta đoán ông là người điềm tĩnh, mạnh mẽ."),
    ],
  }),
  task: task({
    prompt: "Bạn vừa chuyển đến một thành phố mới (hoặc bắt đầu một công việc mới) được vài tháng. Viết một email (khoảng 90–120 từ) cho một người bạn: cuộc sống ngày trước của bạn thế nào, bây giờ bạn đã quen và chưa quen với điều gì.",
    hints: [
      "Thói quen và trạng thái cũ: used to + V (I used to walk to work, I used to live…).",
      "Việc lặp lại ngày trước, kể cho có hồn: would hoặc 'd + V, kèm every evening, on Sundays.",
      "Chuyện bây giờ: I'm used to + V-ing, I'm getting used to + danh từ hoặc V-ing, I'm not used to…",
      "Thêm một sự việc chỉ xảy ra một lần bằng quá khứ đơn (One weekend…, Last week…).",
    ],
    model: "Hi Nga, sorry I haven't written for so long. I've been in Ho Chi Minh City for three months now, and life is getting better. In my home town, I used to walk to work, and every evening my sister and I would cook dinner together. Here I commute by bus for an hour every day, and I usually eat alone. At first I was really homesick, and I wasn't used to the noise or the heat. Now I'm used to getting up at six, and I'm slowly getting used to the crowds. Last weekend, I got lost in the city centre for three hours! Write soon, Thao",
    checklist: [
      "Có ít nhất 1 câu used to + V cho thói quen hoặc trạng thái cũ.",
      "Có ít nhất 1 câu would hoặc 'd + V cho việc lặp lại ngày trước, không dùng would với động từ trạng thái.",
      "Có ít nhất 1 câu be used to + V-ing hoặc danh từ (kể cả phủ định wasn't / I'm not used to).",
      "Có ít nhất 1 câu get used to + V-ing hoặc danh từ.",
      "Không viết be used to + động từ nguyên mẫu (I'm used to get up là sai).",
      "Có 1 sự việc chỉ xảy ra một lần, kể bằng quá khứ đơn.",
    ],
    minWords: 90,
  }),
});
