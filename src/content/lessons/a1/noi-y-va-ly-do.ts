import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "noi-y-va-ly-do",
  title: "Nối ý và nói lý do",
  minutes: 28,
  lecture: {
    title: "Từ nối and, but, or, so, because",
    blocks: [
      p("Đến bài này, các bạn đã nói được nhiều câu ngắn: I get up at six. I'm sleepy. I drink coffee. Câu nào cũng đúng, nhưng nói liền ba câu như vậy nghe giống người máy. Khi đồng nghiệp hỏi **Why are you late?** hay **Tea or coffee?**, bạn cần nối các ý lại và nói lý do. Chỉ với năm từ nhỏ **and, but, or, so, because**, câu của bạn sẽ tự nhiên hơn hẳn: I get up at six, **so** I'm sleepy, **but** I drink coffee."),
      table(
        ["Từ nối", "Nghĩa", "Dùng để", "Ví dụ"],
        ["and", "và", "thêm một ý cùng chiều", "I get up at six and I have breakfast at home."],
        ["but", "nhưng", "nối hai ý trái ngược", "I like tea, but my wife likes coffee."],
        ["or", "hoặc, hay", "nêu lựa chọn", "Do you go to work by bus or by motorbike?"],
        ["so", "nên, vì vậy", "đứng trước kết quả", "It's rainy, so I take a taxi."],
        ["because", "vì, bởi vì", "đứng trước lý do", "I take a taxi because it's rainy."],
      ),
      ex("My brother lives in Hue and works in a hotel.", "Anh trai tôi sống ở Huế và làm việc ở một khách sạn.", "Hai động từ cùng một chủ ngữ thì không cần nhắc lại chủ ngữ sau and; lives và works đều có -s."),
      ex("Our office is small, but it's very nice.", "Văn phòng của chúng tôi nhỏ, nhưng rất đẹp."),
      ex("Are you from Korea or Japan?", "Bạn là người Hàn hay người Nhật?", "Câu hỏi lựa chọn với or không trả lời bằng Yes hay No, mà chọn một ý: I'm from Japan."),
      p("Hai từ dễ nhầm nhất là **so** và **because**. Chúng nói cùng một chuyện nhưng nhìn từ hai phía: **because** đứng trước **lý do**, **so** đứng trước **kết quả**. Thử đổi chỗ hai vế: nếu câu vẫn đúng nghĩa thì bạn đã chọn đúng từ."),
      table(
        ["Lý do", "Kết quả", "Câu với so", "Câu với because"],
        ["It's cold.", "I stay at home.", "It's cold, so I stay at home.", "I stay at home because it's cold."],
        ["I'm sleepy.", "I drink coffee.", "I'm sleepy, so I drink coffee.", "I drink coffee because I'm sleepy."],
      ),
      mistake("Because it's rainy, so I take a taxi.", "Because it's rainy, I take a taxi. / It's rainy, so I take a taxi.", "Tiếng Việt nói “Vì trời mưa nên tôi đi taxi”, có cả “vì” lẫn “nên”. Tiếng Anh chỉ dùng một trong hai: because hoặc so, không dùng cả hai trong một câu."),
      mistake("I don't like milk and tea.", "I don't like milk or tea.", "Tiếng Việt nói “tôi không thích sữa và trà”. Trong câu phủ định, tiếng Anh dùng or để nói “cả hai đều không”: I don't like milk or tea."),
      p("Về dấu câu: thường có **dấu phẩy trước but và so** khi chúng nối hai câu (It's cold, so I stay at home). **Because** thì thường không cần dấu phẩy phía trước. Khi nói chuyện, người ta hay trả lời câu hỏi **Why…?** chỉ bằng một vế **Because…**; nhưng khi viết, hãy nối vế because vào câu chính."),
      ex("Why are you late? Because the traffic is bad.", "Sao bạn đến muộn? Vì đường đông quá.", "Trả lời miệng ngắn gọn bằng Because… là tự nhiên. Khi viết thì nối thành một câu: I'm late because the traffic is bad."),
      mistake("I'm tired. Because I work late.", "I'm tired because I work late.", "Khi viết, vế because không đứng một mình thành một câu riêng, vì nó chỉ là lý do của câu trước. Bỏ dấu chấm và nối hai vế lại."),
      tip("Khi nói, **and, but, or** đọc rất nhẹ: and gần như /ən/, but là /bət/, or là /ə/. Còn **because** nhấn âm sau: /bɪˈkɒz/, và khi nói nhanh người Anh hay rút thành /kəz/. Các bạn không cần đọc to những từ này, nhưng đừng bỏ chúng đi."),
      teacher("Bài tập tôi giao cho các lớp A1 gọi là **“ba câu thành một”**. Mỗi tối, các bạn viết ba câu ngắn thật về ngày hôm nay, rồi nối chúng lại thành một hoặc hai câu dài bằng and, but, so hoặc because. Ví dụ: I'm hungry. It's late. I eat noodles. thành **It's late and I'm hungry, so I eat noodles.** Viết xong, đọc to. Sau hai tuần, các bạn sẽ thấy mình nói chuyện trôi chảy hơn hẳn, dù vẫn chỉ dùng ngữ pháp rất đơn giản."),
      summary(
        "**and** thêm ý, **but** nối ý trái ngược, **or** nêu lựa chọn.",
        "**because** đứng trước lý do, **so** đứng trước kết quả: I stay at home **because** it's cold. It's cold, **so** I stay at home.",
        "Không dùng cả because và so trong một câu (không nói Because it's rainy, so…).",
        "Câu phủ định dùng **or**: I don't like milk **or** tea.",
        "Thường có dấu phẩy trước but và so; khi viết, vế because không đứng một mình thành câu.",
      ),
    ],
  },
  words: [
    word("because", "/bɪˈkɒz/", "vì, bởi vì", "I take a taxi because it's rainy.", "be|cause", 1, "Nhấn âm sau: bi-KOZ. Khi nói nhanh thường rút thành /kəz/."),
    word("walk", "/wɔːk/", "đi bộ", "I walk to work because my office is near.", "walk", 0, "Chữ l câm: đọc /wɔːk/, tròn môi. Đừng nhầm với work /wɜːk/ (làm việc)."),
    word("cold", "/kəʊld/", "lạnh", "It's cold, so I drink hot tea.", "cold", 0, "Giữ cụm /ld/ ở cuối, nếu không sẽ nghe thành coal hoặc code."),
    word("noodles", "/ˈnuː.dəlz/", "mì, bún, phở (sợi)", "It's late and I'm hungry, so I eat noodles.", "noo|dles", 0, "Thường dùng ở số nhiều: noodles. Nhớ đọc âm /z/ ở cuối."),
    word("sleepy", "/ˈsliː.pi/", "buồn ngủ", "I'm sleepy because I go to bed late.", "slee|py", 0, "Sleepy là buồn ngủ; tired là mệt. Hai từ khác nhau."),
    word("milk", "/mɪlk/", "sữa", "I drink tea with milk.", "milk", 0, "Đọc rõ cụm /lk/ ở cuối, đừng đọc thành “miu”."),
    word("bike", "/baɪk/", "xe đạp", "I go to work by bike because it's cheap.", "bike", 0, "Giữ âm /k/ ở cuối, đừng đọc thành “bai”. Đi xe đạp là go by bike hoặc ride a bike."),
  ],
  exercises: [
    mc("a1-n18-1", "I'm sleepy ___ I go to bed at one o'clock every night.", ["so", "because", "but", "or"], 1, "Đi ngủ lúc một giờ sáng là lý do, nên dùng because. So đứng trước kết quả, nên “I'm sleepy so I go to bed at one” sai nghĩa."),
    mc("a1-n18-2", "Chọn câu đúng:", ["Because it's rainy, so I take a taxi.", "It's rainy, so I take a taxi.", "It's rainy, because I take a taxi.", "So it's rainy, I take a taxi."], 1, "Mưa là lý do, đi taxi là kết quả: It's rainy, so I take a taxi. Không dùng cả because lẫn so trong một câu như “vì… nên…” của tiếng Việt."),
    fill("a1-n18-3", "Is your new teacher from England ___ America?", ["or"], "Hỏi để người nghe chọn một trong hai thì dùng or."),
    fill("a1-n18-4", "We stay at home ___ it's very cold. (lý do)", ["because"], "It's very cold là lý do của việc ở nhà, nên dùng because. So phải đứng trước kết quả."),
    reorder("a1-n18-5", "It's cold, so I drink hot tea.", "Vế lý do (It's cold) đứng trước, so đứng trước kết quả (I drink hot tea)."),
    reorder("a1-n18-6", "I like milk, but my son doesn't.", "But nối hai ý trái ngược. Vế sau rút gọn thành my son doesn't (không thích sữa) để khỏi lặp lại like milk."),
    listen("a1-n18-7", "I walk to work because my office is near my house.", ["Tôi đi bộ đi làm vì văn phòng gần nhà.", "Văn phòng gần nhà nên tôi đi xe máy đi làm.", "Tôi đi bộ đi làm nhưng văn phòng xa nhà."], 0, "Walk to work là đi bộ đi làm; because my office is near my house là vì văn phòng gần nhà."),
    listen("a1-n18-8", "It's rainy today, so I don't walk to work.", ["Hôm nay trời mưa nhưng tôi vẫn đi bộ đi làm.", "Hôm nay trời mưa nên tôi không đi bộ đi làm.", "Tôi không đi làm vì hôm nay trời mưa."], 1, "So đứng trước kết quả: trời mưa nên không đi bộ. Người nói vẫn đi làm, chỉ là không đi bộ."),
    correct("a1-n18-9", "Because I'm sleepy, so I drink coffee.", ["Because I'm sleepy, I drink coffee.", "I'm sleepy, so I drink coffee.", "I drink coffee because I'm sleepy."], "Tiếng Anh không dùng cả because và so trong một câu. Bỏ một trong hai từ."),
    correct("a1-n18-10", "I take a taxi so it's rainy.", ["I take a taxi because it's rainy.", "It's rainy, so I take a taxi."], "Trời mưa là lý do, đi taxi là kết quả. So phải đứng trước kết quả, nên ở đây dùng because (đứng trước lý do), hoặc đổi thứ tự: It's rainy, so I take a taxi."),
    fill("a1-n18-11", "It's very cold today, ___ I wear a jacket. (nối kết quả)", ["so"], "I wear a jacket là kết quả của trời lạnh, nên dùng so; trước so thường có dấu phẩy."),
    fill("a1-n18-12", "I love coffee, ___ I never drink it at night. (ý trái ngược)", ["but"], "Thích cà phê nhưng không bao giờ uống buổi tối: hai ý trái ngược nên dùng but."),
    reorder("a1-n18-13", "My office is near my house, so I walk to work.", "Vế đầu là lý do (văn phòng gần nhà), so đứng trước kết quả (tôi đi bộ đi làm)."),
    correct("a1-n18-14", "My father likes tea, so my mother likes coffee.", ["My father likes tea, but my mother likes coffee.", "My father likes tea, and my mother likes coffee."], "Bố thích trà không phải lý do để mẹ thích cà phê, nên không dùng so. Hai ý khác nhau thì dùng but (hoặc and nếu chỉ kể thêm)."),
  ],
  speaking: [
    say("I like tea, but my wife likes coffee.", "Tôi thích trà, nhưng vợ tôi thích cà phê."),
    say("It's rainy, so I take a taxi.", "Trời mưa nên tôi đi taxi."),
    say("I walk to work because my office is near.", "Tôi đi bộ đi làm vì văn phòng ở gần."),
  ],
  freeSpeaking: free(
    "How do you go to work or school, and why?",
    "Nói bạn đi làm hoặc đi học bằng gì và vì sao, buổi sáng bạn uống gì, và một điều bạn thích, một điều bạn không thích ở công việc hay việc học. Cố dùng and, but, or, so, because.",
    "I usually go to work by motorbike because my office is far from my house. I get up at six, so I'm often sleepy in the morning. I drink coffee or tea at work. I like my job, but I don't like the traffic.",
  ),
  dialogue: dialogue(
    "Buổi sáng mưa ở văn phòng",
    "Một buổi sáng trời mưa, Lan đến văn phòng muộn. Peter, đồng nghiệp người Anh, hỏi cô vì sao đến muộn, hai người nói chuyện về cách đi làm và mời nhau đồ uống.",
    { A: "Peter, đồng nghiệp", B: "Lan" },
    A("Good morning, Lan. You're late today!", "Chào buổi sáng, Lan. Hôm nay em đến muộn nhé!"),
    B("Yes, sorry. I'm late because it's rainy and the traffic is bad.", "Vâng, xin lỗi anh. Em đến muộn vì trời mưa và đường đông quá."),
    A("Do you usually come by motorbike or by bus?", "Em thường đi làm bằng xe máy hay xe buýt?"),
    B("By motorbike, but on rainy days I take a taxi.", "Bằng xe máy, nhưng những hôm mưa thì em đi taxi."),
    A("I walk to work because my flat is near here.", "Anh đi bộ đi làm vì căn hộ của anh ở gần đây."),
    B("Lucky you! Do you want tea or coffee?", "Sướng thế! Anh muốn uống trà hay cà phê?"),
    A("No, thanks. I'm not sleepy, so I don't need coffee.", "Thôi, cảm ơn em. Anh không buồn ngủ nên không cần cà phê."),
    B("I'm very sleepy. I go to bed late, so I'm always tired in the morning.", "Em buồn ngủ lắm. Em đi ngủ muộn nên sáng nào cũng mệt."),
    A("Why do you go to bed late?", "Sao em đi ngủ muộn thế?"),
    B("Because I watch films at night. It's a bad idea, I know!", "Vì tối nào em cũng xem phim. Không hay chút nào, em biết mà!"),
    A("Ha ha. It's cold today. Do you want some tea with milk?", "Ha ha. Hôm nay trời lạnh. Em có muốn uống trà sữa không?"),
    B("Good idea. Tea with milk, please!", "Ý hay đấy. Cho em trà sữa nhé!"),
  ),
  dialogueQuestions: [
    listenQ("a1-n18-d1", "Vì sao Lan đến muộn?", "Yes, sorry. I'm late because it's rainy and the traffic is bad.", ["Vì cô ấy dậy muộn", "Vì trời mưa và đường đông xe", "Vì xe máy của cô ấy bị hỏng"], 1, "Lý do đứng sau because: it's rainy and the traffic is bad, tức là trời mưa và đường đông xe."),
    mc("a1-n18-d2", "Vì sao Peter không cần cà phê?", ["Vì anh ấy không buồn ngủ", "Vì anh ấy không thích cà phê", "Vì anh ấy đã uống trà sữa"], 0, "Peter nói I'm not sleepy, so I don't need coffee: không buồn ngủ là lý do, không cần cà phê là kết quả."),
    mc("a1-n18-d3", "Vì sao sáng nào Lan cũng mệt?", ["Vì cô ấy đi làm bằng taxi", "Vì văn phòng ở xa nhà cô ấy", "Vì tối nào cô ấy cũng xem phim nên đi ngủ muộn"], 2, "Lan nói I go to bed late, so I'm always tired, rồi giải thích lý do đi ngủ muộn: Because I watch films at night."),
  ],
  reading: reading({
    title: "Bài blog: tôi đi làm bằng xe đạp",
    text: `My way to work

Hi, I'm Duc, and I'm an engineer in Hanoi. My office is five kilometres from my flat, but I don't go by car or by motorbike. I go by bike!

I love my bike because it's cheap and it's good for me. In the morning, the streets are very busy, so I leave home at seven. I'm never late.

On rainy days, I don't ride my bike, so I take the bus. In winter, it's cold, but I still enjoy my bike rides.

My wife thinks it's a bad idea because the traffic is bad. What do you think? Do you go to work by bike or by car?`,
    glossary: [
      ["way to work", "đường đi làm, cách đi làm"],
      ["kilometre", "ki-lô-mét"],
      ["cheap", "rẻ"],
      ["good for me", "tốt cho sức khỏe của tôi"],
      ["leave home", "rời nhà, ra khỏi nhà"],
      ["winter", "mùa đông"],
      ["think", "nghĩ"],
      ["traffic", "giao thông, xe cộ trên đường"],
    ],
    questions: [
      mc("a1-n18-r1", "Bài blog này chủ yếu nói về điều gì?", ["Công việc kỹ sư của Đức ở Hà Nội", "Vì sao Đức thích đi làm bằng xe đạp", "Giao thông ở Hà Nội vào mùa đông"], 1, "Cả bài kể Đức đi làm bằng xe đạp và giải thích vì sao anh ấy thích như vậy."),
      mc("a1-n18-r2", "Vì sao Đức rời nhà lúc bảy giờ?", ["Vì anh ấy bắt đầu làm việc lúc bảy giờ", "Vì buổi sáng đường rất đông", "Vì anh ấy phải bắt xe buýt"], 1, "The streets are very busy, so I leave home at seven: đường đông là lý do, rời nhà sớm là kết quả."),
      mc("a1-n18-r3", "Những ngày mưa, Đức đi làm bằng gì?", ["Xe đạp", "Ô tô", "Xe buýt"], 2, "On rainy days, I don't ride my bike, so I take the bus."),
      fill("a1-n18-r4", "Hoàn thành câu theo bài đọc: In winter, it's cold, ___ I still enjoy my bike rides.", ["but"], "Trời lạnh nhưng Đức vẫn thích đạp xe: hai ý trái ngược nên dùng but."),
      mc("a1-n18-r5", "Vợ Đức nghĩ gì về việc anh ấy đi xe đạp?", ["Đó là ý hay vì đi xe đạp rẻ", "Đó không phải ý hay vì đường đông xe", "Anh ấy nên đi làm bằng xe máy"], 1, "My wife thinks it's a bad idea because the traffic is bad."),
    ],
  }),
  task: task({
    prompt: "Một người bạn nước ngoài hỏi về một ngày bình thường của bạn. Viết 5–7 câu và dùng đủ năm từ nối and, but, or, so, because (mỗi từ ít nhất một lần).",
    hints: [
      "Lý do đi sau because: I'm sleepy because I go to bed late.",
      "Kết quả đi sau so: My office is far, so I go by motorbike.",
      "Lựa chọn dùng or: I drink tea or coffee.",
      "Hai ý trái ngược dùng but: I like my job, but I don't like the traffic.",
    ],
    model: "I get up at six and I have breakfast at home. I drink tea or coffee every morning. My office is far from my house, so I go to work by motorbike. I like my job, but I don't like the traffic. I'm often sleepy in the afternoon because I go to bed late.",
    checklist: [
      "Dùng đủ năm từ and, but, or, so, because",
      "Because đứng trước lý do, so đứng trước kết quả",
      "Không có câu nào dùng cả because và so",
      "Có dấu phẩy trước but và so khi chúng nối hai câu",
      "Vế because không đứng một mình thành câu riêng",
    ],
    minWords: 30,
  }),
});
