import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "ke-lai-mot-chuyen",
  title: "Kể lại một chuyện đã xảy ra",
  minutes: 30,
  lecture: {
    title: "Quá khứ tiếp diễn và quá khứ đơn",
    blocks: [
      p("Sáng thứ Hai, đồng nghiệp người nước ngoài hỏi bạn: **What happened at the weekend?** Bạn có cả một câu chuyện hay: đang chạy xe trên đèo thì trời đổ mưa, xe hỏng, rồi được một bác nông dân giúp. Nhưng nếu chỉ nói được từng câu rời rạc ở một thì, câu chuyện sẽ mất hết cái hay. Bài này giúp bạn kể chuyện có **bối cảnh** và có **diễn biến**."),
      p("Ở A2, bạn đã học quá khứ tiếp diễn (was / were + V-ing) và cách nối với when, while. Bài này không học lại cấu trúc, mà dạy cách **ghép các thì thành một câu chuyện**: quá khứ tiếp diễn vẽ **cảnh nền** (lúc đó mọi thứ đang diễn ra thế nào), quá khứ đơn kể **các sự việc chính** nối tiếp nhau và việc bất ngờ chen vào. Tiếng Việt chỉ cần thêm chữ “đang” hoặc không cần gì, nên người Việt hay kể cả câu chuyện bằng một thì."),
      table(
        ["Phần của câu chuyện", "Thì", "Ví dụ"],
        ["Cảnh nền: thời tiết, không khí, mọi người đang làm gì", "quá khứ tiếp diễn", "It was raining, and people were hurrying home."],
        ["Sự việc chính, nối tiếp nhau", "quá khứ đơn", "I stopped, got off my bike and called for help."],
        ["Việc bất ngờ chen vào cảnh nền", "quá khứ đơn, thường sau when", "I was crossing the road when a dog ran out."],
      ),
      table(
        ["Giai đoạn", "Từ nối hay dùng", "Ví dụ"],
        ["Mở đầu", "last summer, one evening, a few years ago", "One evening last May, I was cycling home from work."],
        ["Diễn biến", "first, then, after that", "First, I checked my phone. Then I called my brother."],
        ["Bước ngoặt", "suddenly, just then", "Suddenly, the lights went out."],
        ["Kết thúc", "in the end, eventually", "In the end, we laughed about it."],
      ),
      p("Nhắc lại nhanh từ A2: **while** (trong lúc) thường đi với quá khứ tiếp diễn của cảnh nền, **when** (khi, thì) thường đi với việc ngắn ở quá khứ đơn chen vào. Điều mới ở B1 là biết **dừng lại**: cảnh nền chỉ cần một, hai câu, phần lớn câu chuyện vẫn là quá khứ đơn."),
      ex("I was cooking dinner when the phone rang.", "Tôi đang nấu bữa tối thì điện thoại reo."),
      ex("While we were waiting for the bus, it started to rain.", "Trong lúc chúng tôi đang đợi xe buýt thì trời bắt đầu mưa.", "Mệnh đề while đứng đầu câu thì có dấu phẩy ngăn cách."),
      ex("At nine o'clock last night, I was watching a football match.", "Lúc chín giờ tối qua, tôi đang xem một trận bóng đá.", "Có một thời điểm cụ thể trong quá khứ và việc đang dở dang lúc đó, nên dùng quá khứ tiếp diễn dù không có hành động nào chen vào."),
      p("Khi các việc **nối tiếp nhau**, việc này xong mới đến việc kia, hãy dùng quá khứ đơn cho tất cả và gắn từ nối chỉ trình tự: **first** (đầu tiên), **then / after that** (sau đó), **suddenly** (bỗng nhiên), **in the end** (cuối cùng). Đừng biến chuỗi sự việc thành was / were + V-ing."),
      ex("First, we got lost. Then my phone died. In the end, a kind stranger helped us.", "Đầu tiên, chúng tôi bị lạc. Sau đó điện thoại tôi hết pin. Cuối cùng, một người lạ tốt bụng đã giúp chúng tôi.", "Các việc nối tiếp nhau, việc này xong mới đến việc kia, nên đều dùng quá khứ đơn."),
      tip("**In the end** nghĩa là “cuối cùng, sau nhiều chuyện”. Còn **at the end of** phải có danh từ theo sau: at the end of the film (ở cuối bộ phim). Mẹo phát âm: đọc rõ âm cuối **-ed** và **-ing**, vì chính những âm cuối này giúp người nghe phân biệt đâu là cảnh nền, đâu là sự việc chen vào."),
      mistake("I was see an accident yesterday.", "I saw an accident yesterday.", "Tiếng Việt chỉ đặt “đã” hoặc “đang” trước động từ, nên người học tưởng was cũng là một chữ đặt trước động từ như vậy. Was phải đi với V-ing; còn hành động ngắn, đã kết thúc thì chỉ cần quá khứ đơn: saw."),
      mistake("While I walked home, I was seeing an old friend.", "While I was walking home, I saw an old friend.", "Việc kéo dài làm nền dùng was walking, việc ngắn chen vào dùng saw. Tiếng Việt không phân biệt hai loại việc này bằng hình thức động từ nên hay bị đảo ngược. Động từ see cũng hầu như không dùng ở dạng tiếp diễn."),
      mistake("Yesterday I go to the market and meet my old teacher.", "Yesterday I went to the market and met my old teacher.", "Tiếng Việt không chia động từ, chữ “hôm qua” đã đủ báo thời gian. Tiếng Anh thì mọi động từ trong câu chuyện quá khứ đều phải chia: went, met."),
      teacher("Khi đứng lớp, tôi thấy người học kể chuyện hay nhất không phải người thuộc nhiều từ, mà là người biết **dựng cảnh trước rồi mới tung sự việc**. Mỗi tối trước khi ngủ, các bạn hãy kể lại một chuyện trong ngày bằng ba câu: một câu was/were + V-ing làm nền, một câu có when chen vào, một câu in the end để kết. Làm đều một tháng, các bạn sẽ thấy miệng tự bật ra đúng thì mà không cần nghĩ."),
      summary(
        "**was / were + V-ing** dựng cảnh nền (việc đang diễn ra); **quá khứ đơn** cho việc ngắn chen vào hoặc các việc nối tiếp nhau.",
        "**While** thường đi với quá khứ tiếp diễn; **when** thường đi với hành động ngắn ở quá khứ đơn.",
        "Ở thì quá khứ tiếp diễn, was / were + V-ing, không đi với động từ nguyên mẫu: không nói I was see. (Was / were vẫn đi với tính từ, danh từ, V3: I was tired, It was built in 1990.)",
        "Đã có từ chỉ quá khứ như yesterday thì mọi động từ trong câu chuyện vẫn phải chia: went, met, saw.",
        "Kể mạch lạc bằng từ nối: **first, then, suddenly, in the end**.",
      ),
    ],
  },
  words: [
    word("suddenly", "/ˈsʌd.ən.li/", "bỗng nhiên, đột nhiên", "Suddenly, the lights went out.", "sud|den|ly", 0),
    word("accident", "/ˈæk.sɪ.dənt/", "tai nạn", "I saw an accident on my way to work.", "ac|ci|dent", 0, "Chữ cc đọc là /ks/, không đọc là /k/."),
    word("happen", "/ˈhæp.ən/", "xảy ra", "What happened after that?", "hap|pen", 0),
    word("journey", "/ˈdʒɜː.ni/", "chuyến đi, hành trình", "The journey took six hours.", "jour|ney", 0),
    word("realise", "/ˈrɪə.laɪz/", "nhận ra", "I suddenly realised that my bag was still on the bus.", "rea|lise", 0),
    word("eventually", "/ɪˈven.tʃu.ə.li/", "rốt cuộc, sau cùng", "We eventually found the hotel.", "e|ven|tu|al|ly", 1, "Không có nghĩa là “có thể”. Eventually là “sau cùng, sau một thời gian dài”."),
    word("unexpected", "/ˌʌn.ɪkˈspek.tɪd/", "bất ngờ, không lường trước", "We had an unexpected visitor last night.", "un|ex|pec|ted", 2),
    word("memory", "/ˈmem.ər.i/", "kỷ niệm, ký ức", "That trip is my favourite memory.", "mem|o|ry", 0),
  ],
  exercises: [
    mc("b1-1-1", "I ___ TV when you called me.", ["watch", "was watching", "am watching", "were watching"], 1, "Việc đang diễn ra thì bị chen ngang nên dùng quá khứ tiếp diễn. I đi với was, không đi với were."),
    mc("b1-1-2", "While she was driving to work, she ___ an accident.", ["was seeing", "sees", "saw"], 2, "Hành động ngắn chen vào dùng quá khứ đơn: saw."),
    fill("b1-1-3", "They ___ playing football when it started to rain.", ["were"], "They đi với were trong quá khứ tiếp diễn."),
    fill("b1-1-4", "We waited for two hours. ___, the bus arrived. (cuối cùng)", ["In the end", "Finally", "Eventually", "At last"], "Sau một thời gian dài chờ đợi, ta dùng in the end, finally, eventually hoặc at last."),
    reorder("b1-1-5", "Who were you waiting for?", "Câu hỏi ở quá khứ tiếp diễn: Who + were + you + V-ing, giới từ for đứng cuối câu."),
    reorder("b1-1-6", "Someone was knocking on the door.", "Câu kể ở quá khứ tiếp diễn: chủ ngữ + was + V-ing. Someone là số ít nên đi với was."),
    listen("b1-1-7", "What were you doing at eight last night?", ["Tối nay lúc tám giờ bạn định làm gì?", "Tối qua lúc tám giờ bạn đang làm gì?", "Tối qua bạn đi ngủ lúc mấy giờ?"], 1, "Were you doing: hỏi việc đang diễn ra tại một thời điểm trong quá khứ."),
    listen("b1-1-8", "At first I was nervous, but in the end I enjoyed the trip.", ["Tôi luôn thấy hồi hộp mỗi khi đi du lịch.", "Cuối chuyến đi tôi lại thấy lo lắng.", "Lúc đầu tôi hồi hộp, nhưng cuối cùng tôi rất thích chuyến đi."], 2),
    correct("b1-1-9", "I was take a shower when the lights went out.", "I was taking a shower when the lights went out.", "Ở thì quá khứ tiếp diễn, was + V-ing (không dùng động từ nguyên mẫu): was taking. Việc đang làm dở (đang tắm) là cảnh nền, việc mất điện chen vào dùng quá khứ đơn."),
    correct("b1-1-10", "Yesterday my sister buy a new laptop.", "Yesterday my sister bought a new laptop.", "Đã có yesterday thì động từ vẫn phải chia ở quá khứ đơn. Buy là động từ bất quy tắc: buy, bought, bought."),
    fill("b1-1-11", "I ___ along the beach when I found an old gold ring in the sand. (walk)", ["was walking"], "Đi dạo là cảnh nền đang diễn ra, việc tìm thấy chiếc nhẫn chen vào: was walking."),
    correct("b1-1-12", "When we arrived at the hotel, we were checking in and went straight to bed.", "When we arrived at the hotel, we checked in and went straight to bed.", "Làm thủ tục rồi đi ngủ là hai việc nối tiếp nhau, việc này xong mới đến việc kia, nên dùng quá khứ đơn: checked in. Quá khứ tiếp diễn chỉ dành cho cảnh nền."),
    reorder("b1-1-13", "I realised that someone was following me.", "Realised là việc chính ở quá khứ đơn; việc ai đó đang đi theo là cảnh nền: someone was following me."),
    correct("b1-1-14", "At the end, we found a small hotel near the station.", ["In the end, we found a small hotel near the station.", "Eventually, we found a small hotel near the station.", "Finally, we found a small hotel near the station.", "At last, we found a small hotel near the station."], "Muốn nói “cuối cùng, sau nhiều chuyện” thì dùng in the end (hoặc eventually, finally). At the end phải có of + danh từ theo sau: at the end of the day."),
  ],
  speaking: [
    say("I was walking home when I saw an old friend.", "Tôi đang đi bộ về nhà thì gặp một người bạn cũ."),
    say("While we were having dinner, the lights suddenly went out.", "Trong lúc chúng tôi đang ăn tối thì bỗng nhiên mất điện."),
    say("In the end, we laughed about it.", "Cuối cùng, chúng tôi lại cười về chuyện đó."),
  ],
  freeSpeaking: free(
    "Can you tell me about something unexpected that happened to you?",
    "Kể lại một chuyện bất ngờ đã xảy ra với bạn: lúc đó bạn đang làm gì, chuyện gì chen vào, và cuối cùng ra sao.",
    "Last summer, I was walking along the beach in Nha Trang with my friends. We were talking and laughing when suddenly a big wave hit us. All our bags got wet, and my phone stopped working. At first I was angry, but then we all started laughing. In the end, it became one of my favourite memories of the trip.",
  ),
  dialogueQuestions: [
    listenQ("b1-1-d1", "Why did the car stop?", "Yes. While we were going up the pass, the car stopped. I realised that the engine was too hot.", ["The engine was too hot.", "They had no petrol.", "It was raining too hard.", "A tyre was flat."], 0, "Lan nói: I realised that the engine was too hot."),
    mc("b1-1-d2", "Who helped Lan and her friends?", ["A mechanic from a garage", "A farmer who was working near the road", "Tom, her colleague", "A police officer"], 1, "Tiệm sửa xe không nghe máy; một bác nông dân đang làm ruộng gần đường đã đến giúp."),
    mc("b1-1-d3", "What can we guess about the farmer?", ["He worked at the garage that Lan called.", "He was going to Da Lat too.", "He knew quite a lot about cars.", "He was a friend of Tom's."], 2, "Không ai nói thẳng điều này, nhưng bác nông dân sửa xong chiếc xe chết máy chỉ trong hai mươi phút, nên ta đoán bác khá rành về xe."),
  ],
  reading: reading({
    title: "Readers' stories: the night the lights went out",
    text: `Every month we ask readers to send us a true story about an unexpected moment in their lives. This month's winner is Thu, a nurse from Hai Phong.

It was a Friday evening in July, and the hospital was unusually quiet. I was finishing my shift on the third floor, and my colleague Hanh was making tea in the staff room. Outside, a storm was coming in from the sea. The wind was getting stronger, and heavy rain was hitting the windows.

At about nine o'clock, the lights suddenly went out. For a few seconds, nobody said anything. Then a patient started to shout, and somewhere down the corridor a baby began to cry. We knew that the hospital had a generator, but nothing happened.

First, Hanh and I turned on the torches on our phones. Then we went from room to room and checked every patient. In room twelve, an old man was sitting up in bed. He wasn't frightened at all. "Don't worry about me," he said. "I lived through the war. A bit of darkness is nothing." He asked us to open the curtains, and for a minute the three of us watched the lightning over the city.

Twenty minutes later, the generator finally started, and the lights came back on. Everyone cheered, even the baby's tired mother. In the end, nobody was hurt, and the next morning the head nurse thanked us in front of the whole team.

Since that night, I always keep a small torch in my uniform pocket. I also think about that old man quite often. He taught me something important: in a frightening situation, one calm person can make everyone feel safer.`,
    glossary: [
      ["shift", "ca làm việc"],
      ["generator", "máy phát điện"],
      ["torch", "đèn pin"],
      ["lightning", "tia chớp"],
      ["cheered", "reo hò, hoan hô"],
      ["head nurse", "y tá trưởng"],
    ],
    questions: [
      mc("b1-1-r1", "What is Thu's story mainly about?", ["A storm that damaged a hospital in Hai Phong", "How the staff and patients got through a power cut at the hospital", "Why Thu decided to become a nurse", "An old patient who was afraid of the dark"], 1, "Cả bài kể lại đêm mất điện ở bệnh viện và cách Thu cùng đồng nghiệp xử lý."),
      mc("b1-1-r2", "What was Hanh doing when the lights went out?", ["Checking the patients on the third floor", "Opening the curtains in room twelve", "Making tea in the staff room", "Starting the generator"], 2, "Đoạn hai dựng cảnh nền: my colleague Hanh was making tea in the staff room. Đó là việc đang diễn ra lúc mất điện."),
      fill("b1-1-r3", "Thu and Hanh used the ___ on their phones to see in the dark.", ["torches", "torch"], "Đoạn bốn: Hanh and I turned on the torches on our phones."),
      mc("b1-1-r4", "What can we guess about the old man in room twelve?", ["He had lived through much harder times than a power cut.", "He worked at the hospital as a doctor.", "He could not see the storm from his bed.", "He was a member of Hanh's family."], 0, "Ông nói I lived through the war. A bit of darkness is nothing. Ta suy ra ông đã trải qua những lúc khó khăn hơn nhiều, nên mất điện chẳng làm ông sợ."),
      mc("b1-1-r5", "What does Thu do now because of that night?", ["She always works on the third floor.", "She keeps a small torch in her pocket.", "She never works on Friday evenings.", "She visits the old man every week."], 1, "Đoạn cuối: Since that night, I always keep a small torch in my uniform pocket."),
    ],
  }),
  dialogue: dialogue(
    "Cuối tuần của bạn thế nào?",
    "Sáng thứ Hai ở văn phòng, Tom, đồng nghiệp người Anh, hỏi Lan về chuyến đi Đà Lạt cuối tuần. Lan kể lại chuyện xe hỏng giữa đèo.",
    { A: "Tom, đồng nghiệp", B: "Lan" },
    A("Hi Lan! What happened at the weekend? You look tired.", "Chào Lan! Cuối tuần có chuyện gì thế? Trông bạn mệt quá."),
    B("It was an unexpected journey. We were driving to Da Lat when it suddenly started to rain.", "Một chuyến đi đầy bất ngờ. Bọn mình đang lái xe lên Đà Lạt thì bỗng nhiên trời đổ mưa."),
    A("Oh no! Were you driving in the mountains?", "Ôi không! Lúc đó các bạn đang đi trên núi à?"),
    B("Yes. While we were going up the pass, the car stopped. I realised that the engine was too hot.", "Ừ. Trong lúc bọn mình đang lên đèo thì xe chết máy. Mình nhận ra là động cơ nóng quá."),
    A("What did you do?", "Thế các bạn làm gì?"),
    B("First, we called a garage, but nobody answered. Then a farmer saw us and came to help.", "Đầu tiên, bọn mình gọi cho một tiệm sửa xe nhưng không ai nghe máy. Sau đó một bác nông dân nhìn thấy và đến giúp."),
    A("That was lucky! What was he doing there?", "May thế! Bác ấy đang làm gì ở đó vậy?"),
    B("He was working in his field near the road. He fixed the car in twenty minutes.", "Bác ấy đang làm ruộng gần đường. Bác sửa xe xong trong hai mươi phút."),
    A("So did you get to Da Lat eventually?", "Vậy rốt cuộc các bạn có đến được Đà Lạt không?"),
    B("Yes, eventually. We arrived very late, but in the end it became a great memory.", "Có, sau cùng thì cũng đến. Bọn mình đến rất muộn, nhưng cuối cùng đó lại thành một kỷ niệm tuyệt vời."),
    A("What a story! I was sleeping at home while you were having an adventure.", "Chuyện hay thật! Mình thì đang ngủ ở nhà trong lúc bạn đang phiêu lưu."),
    B("Next time, you should come with us!", "Lần sau bạn đi cùng bọn mình nhé!"),
  ),
  task: task({
    prompt: "Viết một đoạn văn (khoảng 90–120 từ) kể lại một chuyện bất ngờ đã xảy ra với bạn (trên đường đi làm, khi đi du lịch, ở nhà…). Hãy dựng cảnh nền trước, rồi kể sự việc chen vào và kết thúc câu chuyện.",
    hints: [
      "Mở đầu bằng một câu was / were + V-ing để dựng cảnh: lúc đó bạn đang làm gì, trời thế nào.",
      "Dùng when hoặc while để nối cảnh nền với sự việc chen vào.",
      "Nối các việc tiếp theo bằng first, then, suddenly, in the end.",
      "Kết bằng cảm xúc của bạn hoặc điều bạn nhớ nhất.",
    ],
    model: "Last month, something unexpected happened on my way to work. It was raining heavily, and people were hurrying to their offices. While I was riding my motorbike along a busy street, a small dog suddenly ran into the road. I stopped just in time, but the man behind me was looking at his phone, and he hit my bike. Luckily, nobody got hurt. First, we checked our bikes and moved to the side of the road. Then he said sorry and paid for the repair. The dog was sitting under a tree and watching us the whole time. In the end, we laughed about it, and now it is a funny memory.",
    checklist: [
      "Có ít nhất 2 câu was / were + V-ing để dựng cảnh nền.",
      "Có ít nhất 1 câu dùng when hoặc while nối cảnh nền với sự việc chen vào.",
      "Các sự việc chính đều ở quá khứ đơn (went, saw, stopped), không còn động từ nguyên mẫu.",
      "Không có câu nào kiểu was + động từ nguyên mẫu (was see, was go).",
      "Dùng ít nhất 3 từ nối trình tự: first, then, suddenly, in the end.",
    ],
    minWords: 90,
  }),
});
