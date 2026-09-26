import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "would-va-used-to",
  title: "Ngày trước tôi hay…: would và used to",
  minutes: 30,
  lecture: {
    title: "Would + V cho thói quen trong quá khứ, used to và quá khứ đơn khi kể chuyện",
    blocks: [
      p("Tết về quê, ông bà lại kể: “Hồi ấy, chiều nào ông cũng dắt trâu ra đồng, tối nào bà cũng ngồi vá áo bên đèn dầu.” Một người Anh kể về tuổi thơ cũng có đúng giọng điệu ấy: **Every summer, we would go to my grandparents' farm. My grandfather would wake us up at five…** Bài này giúp bạn kể lại những ngày xưa như thế một cách tự nhiên, không lặp đi lặp lại mãi một cấu trúc."),
      p("Ở A2, bạn đã học **used to + V** cho thói quen và trạng thái trong quá khứ, nay không còn (I used to live in Hue). Hôm nay ta thêm **would + V**: cũng nói về **hành động lặp đi lặp lại** trong quá khứ, nhưng mang màu sắc kể chuyện, hoài niệm. Còn **be used to + V-ing** (đã quen với) là một cấu trúc khác hẳn, bạn sẽ học ở chương sau; đừng lẫn nó với hai cấu trúc hôm nay."),
      table(
        ["Cấu trúc", "Hành động lặp lại", "Trạng thái (be, have, live, like, know)", "Việc xảy ra một lần"],
        ["used to + V", "được", "được", "không"],
        ["would + V", "được", "không", "không"],
        ["quá khứ đơn", "được (thêm every day, often…)", "được", "được"],
      ),
      ex("Every evening, my grandmother would tell us stories.", "Ngày trước, tối nào bà tôi cũng kể chuyện cho chúng tôi nghe.", "Kể chuyện là hành động lặp lại mỗi tối, nên dùng được would. Used to tell hoặc told cũng đúng."),
      ex("I used to have long hair when I was at school.", "Hồi đi học tôi để tóc dài.", "Have ở đây là trạng thái (sở hữu), nên chỉ dùng used to hoặc quá khứ đơn (I had long hair), không dùng would."),
      ex("We lived in a small village near Thai Binh.", "Chúng tôi sống ở một ngôi làng nhỏ gần Thái Bình.", "Quá khứ đơn cũng nói được trạng thái trong quá khứ. Live là trạng thái nên không nói we would live."),
      p("Khi kể chuyện xưa, người bản ngữ thường đi theo một mạch: **mở đầu bằng used to** để dựng khung cảnh, **nối tiếp bằng would hoặc 'd** cho các việc lặp lại, rồi **chuyển sang quá khứ đơn** khi kể một sự việc chỉ xảy ra một lần, thường bắt đầu bằng One day… hoặc One summer…"),
      ex("When I was ten, we used to spend every summer by the river. We'd get up early and we'd go fishing with my uncle. One summer, my cousin fell into the water.", "Hồi mười tuổi, mùa hè nào chúng tôi cũng về bên sông. Chúng tôi dậy sớm rồi theo chú đi câu cá. Có một mùa hè, em họ tôi bị ngã xuống nước.", "Used to dựng khung cảnh, would cho các việc lặp lại, fell (quá khứ đơn) cho sự việc chỉ xảy ra một lần."),
      p("**Wouldn't** trong chuyện xưa thường mang nghĩa **không chịu**, không phải “sẽ không”. Còn khi muốn nói một thói quen **không có** ngày trước, hãy dùng **didn't use to** hoặc **never used to**."),
      ex("When he was small, my brother wouldn't eat vegetables.", "Hồi nhỏ em trai tôi không chịu ăn rau.", "Wouldn't ở đây là từ chối, không chịu làm, lặp đi lặp lại nhiều lần."),
      tip("Would kể chuyện cần có **mốc thời gian quá khứ** đi kèm (when I was a child, every summer, in those days). Thiếu mốc này, người nghe dễ hiểu would theo nghĩa câu điều kiện “sẽ”. Mẹo phát âm: khi kể, would gần như luôn rút gọn thành **'d**: we'd /wiːd/, she'd /ʃiːd/. Giữ rõ âm /d/ cuối, vì nếu nuốt mất, we'd go sẽ nghe thành we go."),
      mistake("I would have a red bicycle when I was young.", "I used to have a red bicycle when I was young.", "Tiếng Việt dùng chữ “hay”, “thường” cho cả việc làm lẫn việc sở hữu, nên người học tưởng would dùng được cho mọi thứ. Have (sở hữu) là trạng thái, nên dùng used to have hoặc had."),
      mistake("Last Sunday I would go to the market with my mother.", "Last Sunday I went to the market with my mother.", "Last Sunday là một lần duy nhất, không phải thói quen. Would chỉ dùng cho việc lặp đi lặp lại, nên ở đây phải dùng quá khứ đơn."),
      mistake("Every morning we would to walk to school.", "Every morning we would walk to school.", "Người học nhớ cụm used to rồi gắn to vào cả would. Sau would là động từ nguyên mẫu không có to."),
      teacher("Khi đứng lớp, tôi hay thấy học trò kể chuyện tuổi thơ bằng một chuỗi used to, used to, used to, nghe như đọc danh sách. Các bạn chỉ cần **dùng used to một lần ở câu đầu**, sau đó chuyển sang 'd, câu chuyện lập tức có hồn. Bài tập tôi hay giao: gọi điện hỏi ông bà hoặc bố mẹ về một ngày bình thường hồi xưa của họ, rồi viết lại năm câu bằng tiếng Anh theo mạch used to, would, would, one day, quá khứ đơn. Vừa luyện ngữ pháp, vừa có thêm một câu chuyện gia đình để giữ."),
      summary(
        "**used to + V**: thói quen **và** trạng thái trong quá khứ, nay không còn (I used to live in Hue, I used to swim every day).",
        "**would / 'd + V**: chỉ cho **hành động lặp lại** trong quá khứ, không dùng cho trạng thái: không nói I would have long hair.",
        "Việc chỉ xảy ra **một lần** (one day, last Sunday) dùng **quá khứ đơn**.",
        "Kể chuyện xưa: used to dựng khung cảnh, 'd cho việc lặp lại, quá khứ đơn cho sự việc đáng nhớ.",
        "Sau would không có to; wouldn't trong chuyện xưa thường là “không chịu”.",
      ),
    ],
  },
  words: [
    word("gather", "/ˈɡæð.ə/", "tụ họp, quây quần", "At Tet, the whole family would gather at my grandparents' house.", "gath|er", 0, "Chữ th đọc là /ð/, đặt đầu lưỡi giữa hai hàm răng, không đọc thành /d/."),
    word("barefoot", "/ˈbeə.fʊt/", "chân trần, đi chân đất", "We used to run barefoot on the beach.", "bare|foot", 0),
    word("harvest", "/ˈhɑː.vɪst/", "vụ mùa, mùa gặt", "At harvest time, the children would help in the fields.", "har|vest", 0, "Không đọc âm r; giữ âm cuối /st/."),
    word("buffalo", "/ˈbʌf.ə.ləʊ/", "con trâu", "My uncle used to have two buffalo.", "buf|fa|lo", 0, "Trọng âm ở âm đầu: BUF-ə-loh. Số nhiều có thể là buffalo hoặc buffaloes."),
    word("kite", "/kaɪt/", "con diều", "Every afternoon we would fly kites in the rice fields.", "kite", 0, "Giữ âm cuối /t/, không đọc thành “cai”."),
    word("nowadays", "/ˈnaʊ.ə.deɪz/", "ngày nay, thời nay", "Nowadays, children spend more time indoors.", "now|a|days", 0, "Âm cuối /z/, không phải /s/."),
  ],
  exercises: [
    mc("b1-n20-1", "When I was a child, I ___ a dog called Mit.", ["would have", "used to have", "was having", "would had"], 1, "Have (sở hữu) là trạng thái, nên dùng used to have, không dùng would."),
    mc("b1-n20-2", "One night in 2010, a big storm ___ the roof of our house.", ["would damage", "used to damage", "damaged", "was damage"], 2, "One night là một lần duy nhất, nên dùng quá khứ đơn: damaged."),
    fill("b1-n20-3", "Every afternoon after school, we ___ fly kites in the rice fields. (hay, thường, một từ)", ["would", "'d"], "Hành động lặp lại trong quá khứ, cần một từ: would + V. (Used to cũng đúng nghĩa nhưng là hai từ.)"),
    fill("b1-n20-4", "My grandfather ___ to be a teacher before he retired. (use)", ["used"], "Be là trạng thái, nên dùng used to be; would không dùng được ở đây."),
    reorder("b1-n20-5", "My grandmother would tell us ghost stories.", "Would + V: việc bà kể chuyện lặp lại nhiều lần ngày trước."),
    reorder("b1-n20-6", "Did you use to live in the countryside?", "Câu hỏi với used to: Did + chủ ngữ + use to + V (không có d sau use)."),
    listen("b1-n20-7", "My mother would wake us up at five every morning.", ["Sáng mai mẹ tôi sẽ đánh thức chúng tôi lúc năm giờ.", "Ngày trước sáng nào mẹ tôi cũng đánh thức chúng tôi lúc năm giờ.", "Nếu được, mẹ tôi sẽ đánh thức chúng tôi lúc năm giờ."], 1, "Would + every morning: thói quen lặp lại trong quá khứ."),
    listen("b1-n20-8", "When he was small, my brother wouldn't eat vegetables.", ["Hồi nhỏ em trai tôi không chịu ăn rau.", "Em trai tôi sẽ không ăn rau nữa.", "Em trai tôi chưa bao giờ được ăn rau."], 0, "Wouldn't trong chuyện xưa: không chịu làm gì."),
    correct("b1-n20-9", "When I was young, I would have a red bicycle.", ["When I was young, I used to have a red bicycle.", "When I was young, I had a red bicycle."], "Have (sở hữu) là trạng thái nên không dùng would; dùng used to have hoặc had."),
    correct("b1-n20-10", "Last Tet, we would visit my aunt in Can Tho.", "Last Tet, we visited my aunt in Can Tho.", "Last Tet là một lần duy nhất, nên dùng quá khứ đơn, không dùng would."),
  ],
  speaking: [
    say("Every summer, we would visit our grandparents in the countryside.", "Mùa hè nào chúng tôi cũng về quê thăm ông bà."),
    say("My grandfather used to be a farmer.", "Ông tôi ngày trước là nông dân."),
    say("After school, we'd run barefoot to the river.", "Tan học, chúng tôi hay chạy chân đất ra sông."),
  ],
  freeSpeaking: free(
    "What did you use to do in the summer holidays when you were a child?",
    "Kể về những kỳ nghỉ hè hồi nhỏ của bạn: bạn thường ở đâu, hay làm gì (used to, would), và một chuyện đáng nhớ xảy ra một lần (quá khứ đơn).",
    "When I was a child, I used to spend the summer holidays in my grandmother's village. Every morning, my cousins and I would go down to the river and swim. In the afternoons, we'd fly kites in the rice fields until dark. I didn't have a phone then, but I was never bored. One summer, I caught a big fish, and my grandmother cooked it for dinner.",
  ),
  dialogue: dialogue(
    "Về thăm làng của Vy",
    "Ben, bạn người Anh của Vy, cùng cô về thăm làng quê ở Thái Bình. Hai người đi dạo bên cánh đồng, và Vy kể về tuổi thơ của mình ở đây.",
    { A: "Ben, bạn người Anh", B: "Vy" },
    A("So this is your village! Did you use to live here?", "Vậy đây là làng của bạn! Ngày trước bạn sống ở đây à?"),
    B("Yes, until I was twelve. Then my family moved to Hanoi.", "Ừ, đến năm mười hai tuổi. Sau đó gia đình mình chuyển lên Hà Nội."),
    A("What was your childhood like?", "Tuổi thơ của bạn thế nào?"),
    B("Simple but fun. Every afternoon, my friends and I would run barefoot to the fields and fly kites.", "Đơn giản nhưng vui lắm. Chiều nào mình với lũ bạn cũng chạy chân đất ra đồng thả diều."),
    A("That sounds lovely. Did you have any chores?", "Nghe thích quá. Thế bạn có phải làm việc nhà không?"),
    B("Of course. I used to feed the chickens, and at harvest time we'd all help in the fields.", "Có chứ. Mình cho gà ăn, còn đến mùa gặt thì cả nhà ra đồng phụ một tay."),
    A("Did you ever ride a buffalo? I've seen that in photos.", "Bạn đã bao giờ cưỡi trâu chưa? Mình thấy trong ảnh rồi."),
    B("My cousin used to have a buffalo, and he would let me sit on its back. One day, it walked into the pond and I fell in!", "Anh họ mình có một con trâu, anh ấy hay cho mình ngồi trên lưng nó. Có một hôm, nó lội xuống ao và mình ngã tõm!"),
    A("Oh no! Were you hurt?", "Ôi không! Bạn có bị đau không?"),
    B("No, just very wet. My grandmother would tell that story every Tet.", "Không, chỉ ướt sũng thôi. Năm nào đến Tết bà mình cũng kể lại chuyện đó."),
    A("Do you miss those days?", "Bạn có nhớ những ngày đó không?"),
    B("Yes, I feel quite nostalgic. Nowadays, children here spend more time on their phones.", "Có, mình thấy khá hoài niệm. Bây giờ bọn trẻ ở đây dành nhiều thời gian cho điện thoại hơn."),
    A("It's the same in England. When I was a boy, we'd play outside until dark.", "Ở Anh cũng thế. Hồi mình còn bé, bọn mình hay chơi ngoài trời đến tối mịt."),
    B("So we had the same childhood in different countries!", "Vậy là tụi mình có chung một tuổi thơ ở hai đất nước khác nhau!"),
  ),
  dialogueQuestions: [
    listenQ("b1-n20-d1", "What would Vy and her friends do every afternoon?", "Simple but fun. Every afternoon, my friends and I would run barefoot to the fields and fly kites.", ["Swim in the river", "Feed the chickens", "Run to the fields and fly kites", "Watch TV at a friend's house"], 2, "Every afternoon, my friends and I would run barefoot to the fields and fly kites."),
    mc("b1-n20-d2", "What happened one day when Vy was sitting on the buffalo?", ["It walked into the pond and she fell in.", "Her cousin fell off and got hurt.", "It ran away from the village.", "Her grandmother took a photo."], 0, "One day, it walked into the pond and I fell in! Đây là sự việc xảy ra một lần nên Vy dùng quá khứ đơn."),
    mc("b1-n20-d3", "How are children in the village different nowadays, according to Vy?", ["They help more at harvest time.", "They spend more time on their phones.", "They play outside until dark."], 1, "Nowadays, children here spend more time on their phones."),
  ],
  reading: reading({
    title: "Summers at my grandparents' house",
    text: `When I was a child, my parents worked long hours in Ho Chi Minh City, so every summer they used to send me to my grandparents' house in a small village near Hoi An. The house was old and dark, and it didn't have air conditioning, but I loved it.

My grandfather was a quiet man. He used to be a fisherman, and even at seventy he would get up before the sun and walk down to the river. Sometimes he'd take me with him. We would sit in his little boat for hours, and he wouldn't say a word. I didn't use to like fishing, but I loved those silent mornings.

My grandmother was the opposite. She would talk all day while she was cooking, and she knew every family in the village. In the afternoons, the neighbours' children would gather in her yard, and she'd give us sweet potatoes and tell us stories about the old days. We used to believe every word.

Then, in the summer of 2009, a big flood came. The water rose into the kitchen, and we spent two nights in the village school on the hill. My grandfather didn't complain once. When the water went down, he simply started to clean the house.

My grandparents are gone now, and the house belongs to my cousin. Nowadays I live in a busy city and I rarely see a river. But whenever it rains heavily, I remember that flood and those long, quiet summers, and I feel strangely nostalgic.`,
    glossary: [
      ["air conditioning", "máy điều hòa"],
      ["fisherman", "người đánh cá"],
      ["silent", "im lặng"],
      ["sweet potato", "khoai lang"],
      ["flood", "trận lụt"],
      ["complain", "phàn nàn, kêu ca"],
      ["belong to", "thuộc về"],
      ["nostalgic", "hoài niệm, nhớ về ngày xưa"],
    ],
    questions: [
      mc("b1-n20-r1", "What is the text mainly about?", ["How to catch fish in a river", "The writer's childhood summers with grandparents in a village", "A dangerous flood in Ho Chi Minh City", "Why the writer's parents worked long hours"], 1, "Cả bài kể về những mùa hè tuổi thơ của người viết ở nhà ông bà gần Hội An."),
      fill("b1-n20-r2", "Before he got old, the writer's grandfather used to be a ___.", ["fisherman"], "Đoạn hai: He used to be a fisherman."),
      mc("b1-n20-r3", "What would the grandmother do in the afternoons?", ["Go fishing with the grandfather", "Sell vegetables at the market", "Give the children sweet potatoes and tell stories", "Sleep in a dark room"], 2, "Đoạn ba: she'd give us sweet potatoes and tell us stories about the old days."),
      mc("b1-n20-r4", "Which of these happened only once?", ["The grandfather got up before the sun.", "The children gathered in the yard.", "The family spent two nights in the village school.", "The grandmother talked while she was cooking."], 2, "Trận lụt năm 2009 là sự việc một lần, nên người viết kể bằng quá khứ đơn (spent). Các việc còn lại đi với would, là thói quen lặp lại."),
      mc("b1-n20-r5", "What can we guess about the grandfather from the flood story?", ["He was calm and strong in difficult times.", "He was afraid of water.", "He wanted to move to the city.", "He was angry with his neighbours."], 0, "Ông không phàn nàn lần nào và lặng lẽ dọn nhà khi nước rút, nên ta đoán ông là người điềm tĩnh, mạnh mẽ."),
    ],
  }),
  task: task({
    prompt: "Viết một đoạn văn (khoảng 90–120 từ) kể về một nơi hoặc một người gắn với tuổi thơ của bạn. Dùng used to cho trạng thái và thói quen, would cho các việc lặp lại, và quá khứ đơn cho một sự việc đáng nhớ chỉ xảy ra một lần.",
    hints: [
      "Mở đầu bằng used to để dựng khung cảnh: bạn sống ở đâu, nhà thế nào (used to live, used to have).",
      "Kể các việc lặp lại bằng would hoặc 'd, kèm every morning, in the evenings, on Sundays.",
      "Chuyển sang quá khứ đơn với One day… hoặc One summer… cho sự việc đáng nhớ.",
      "Kết bằng cảm xúc của bạn bây giờ, có thể dùng nowadays.",
    ],
    model: "When I was a child, my family used to live in a small house near the market in Nam Dinh. My mother used to sell vegetables there, and I had lots of chores. Every morning, I would sweep the yard and feed the chickens before school. In the evenings, my father would sit on the steps and teach me old songs. We didn't have a television, but we never felt bored. On Sundays, my cousins would come over, and we'd play football barefoot in the street. One Sunday, I kicked the ball through a neighbour's window. My father paid for it, and I had to wash his motorbike for a month. Nowadays, I often think about those simple days.",
    checklist: [
      "Có ít nhất 1 câu used to + V cho trạng thái hoặc khung cảnh (used to live, used to have, used to be).",
      "Có ít nhất 3 câu would hoặc 'd + V cho các việc lặp lại.",
      "Có 1 sự việc chỉ xảy ra một lần, kể bằng quá khứ đơn (One day…, One Sunday…).",
      "Không dùng would với động từ trạng thái (have, be, live, like, know).",
      "Có từ chỉ thói quen như every morning, in the evenings, on Sundays.",
    ],
    minWords: 90,
  }),
});
