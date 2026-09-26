import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "qua-khu-hoan-thanh",
  title: "Chuyện xảy ra trước đó",
  minutes: 30,
  lecture: {
    title: "Quá khứ hoàn thành: had + V3",
    blocks: [
      p("Bạn kể: “Hôm qua tôi ra đến ga thì tàu **đã chạy mất rồi**.” Trong câu này có hai việc trong quá khứ: tôi đến ga, và tàu chạy. Việc tàu chạy xảy ra **trước**. Ở bài đầu tiên, bạn đã kể chuyện bằng quá khứ đơn và quá khứ tiếp diễn; khi cần lùi thêm một bậc thời gian, tiếng Việt chỉ cần chữ “đã… rồi”, còn tiếng Anh dùng **quá khứ hoàn thành** (had + V3) để đánh dấu việc xảy ra trước một mốc khác trong quá khứ."),
      table(
        ["Dạng", "Cấu trúc", "Ví dụ"],
        ["Khẳng định", "S + had + V3", "The train had left."],
        ["Phủ định", "S + had not (hadn't) + V3", "I hadn't booked a ticket."],
        ["Nghi vấn", "Had + S + V3?", "Had you eaten before you came?"],
      ),
      p("Had dùng chung cho mọi chủ ngữ: I, you, he, she, we, they đều là **had**, không đổi. Khi nói, had thường rút gọn thành **'d**: I'd, she'd, they'd."),
      ex("When I got to the station, the train had already left.", "Khi tôi đến ga thì tàu đã chạy mất rồi.", "Tàu chạy trước (had left), tôi đến sau (got)."),
      ex("By the time we arrived, the meeting had started.", "Lúc chúng tôi đến nơi thì cuộc họp đã bắt đầu rồi.", "By the time: “đến lúc mà”. Vế còn lại thường dùng quá khứ hoàn thành, vì việc đó đã xảy ra trước."),
      ex("I had never seen snow before I went to Japan.", "Trước khi sang Nhật, tôi chưa từng thấy tuyết."),
      ex("She was upset because she had lost her phone.", "Cô ấy buồn vì cô ấy đã làm mất điện thoại.", "Mất điện thoại xảy ra trước, rồi mới buồn."),
      table(
        ["Câu", "Thứ tự sự việc"],
        ["When I arrived, she left.", "Tôi đến, rồi cô ấy mới đi (hai người gặp nhau)."],
        ["When I arrived, she had left.", "Cô ấy đi trước, tôi đến sau (không gặp nhau)."],
      ),
      p("Các từ hay đi cùng: **by the time** (đến lúc), **before** (trước khi), **after** (sau khi), **already** (đã… rồi), **never… before** (chưa từng… trước đó). Với before và after, thứ tự đã rõ nên người bản xứ cũng hay dùng quá khứ đơn cho cả hai vế: After I finished work, I went home. Dùng had finished cũng đúng."),
      tip("Hãy vẽ một đường thời gian trong đầu: chuyện kể đang ở quá khứ, việc nào xảy ra **sớm hơn nữa** thì lùi thêm một bậc thành **had + V3**. Mẹo nghe: sau **'d** mà có V3 (I'd gone, she'd left) thì 'd là had; sau 'd là động từ nguyên mẫu (I'd go) thì 'd là would."),
      mistake("When I arrived, the train already left.", "When I arrived, the train had already left.", "Tiếng Việt nói “tàu đã chạy rồi” mà không đổi hình thức động từ, nên người Việt quen dùng quá khứ đơn. Việc xảy ra trước một mốc quá khứ khác cần had + V3."),
      mistake("I had gone to Da Lat last year.", "I went to Da Lat last year.", "Chỉ kể một việc đơn lẻ trong quá khứ thì dùng quá khứ đơn. Quá khứ hoàn thành chỉ cần khi có một mốc quá khứ khác để so sánh trước sau."),
      teacher("Khi đứng lớp, tôi thấy người Việt học tiếng Anh mắc hai bệnh ngược nhau: hoặc **không bao giờ dùng** had, hoặc **dùng had cho mọi chuyện cũ** vì nghĩ “đã lâu rồi thì là quá khứ hoàn thành”. Các bạn nhớ giúp tôi: had + V3 không phải là “quá khứ xa”, mà là “quá khứ **trước** một quá khứ khác”. Mỗi tối, các bạn hãy kể lại một chuyện trong ngày bằng ba câu, trong đó có đúng một câu với had. Ví dụ: I got to work late. The meeting had already started. My boss wasn't happy."),
      summary(
        "**had + V3** cho việc xảy ra **trước** một mốc khác trong quá khứ; had dùng chung cho mọi chủ ngữ.",
        "Chỉ kể một việc đơn lẻ, không có mốc quá khứ thứ hai để so sánh, thì dùng quá khứ đơn: I went to Da Lat last year.",
        "Hay đi cùng **by the time, already, never… before, because**; với before / after, quá khứ đơn cho cả hai vế cũng được.",
        "When I arrived, she left: hai người gặp nhau. When I arrived, she **had left**: không gặp nhau.",
        "Nghe **'d + V3** là had (I'd gone); **'d + động từ nguyên mẫu** là would (I'd go).",
      ),
    ],
  },
  words: [
    word("forget", "/fəˈɡet/", "quên", "I realised I had forgotten my keys.", "for|get", 1, "Dạng quá khứ là forgot, V3 là forgotten."),
    word("miss", "/mɪs/", "lỡ (chuyến xe, chuyến bay); nhớ", "We missed the bus because we had left home late.", "miss", 0, "Nhớ đọc rõ âm /s/ ở cuối, đừng nuốt thành “mít”."),
    word("passport", "/ˈpɑːs.pɔːt/", "hộ chiếu", "He had lost his passport before the trip.", "pass|port", 0),
    word("departure", "/dɪˈpɑː.tʃə/", "sự khởi hành, giờ đi", "The departure had been delayed by two hours.", "de|par|ture", 1),
    word("relieved", "/rɪˈliːvd/", "nhẹ nhõm", "I was relieved because someone had found my wallet.", "re|lieved", 1, "Đuôi -ed ở đây đọc là /d/, một âm tiết: re-lieved, không đọc thành “re-li-vét”."),
    word("previous", "/ˈpriː.vi.əs/", "trước đó", "She had worked in a bank in her previous job.", "pre|vi|ous", 0),
    word("notice", "/ˈnəʊ.tɪs/", "để ý thấy, nhận thấy", "I didn't notice that it had stopped raining.", "no|tice", 0),
    word("luckily", "/ˈlʌk.əl.i/", "may mắn thay", "Luckily, I had brought an umbrella.", "luck|i|ly", 0),
  ],
  exercises: [
    mc("b1-n03-1", "When we got to the cinema, the film ___.", ["already started", "had already started", "has already started", "was already start"], 1, "Phim bắt đầu trước khi chúng tôi đến: had already started. Has already started là hiện tại hoàn thành, không hợp với câu kể quá khứ."),
    mc("b1-n03-2", "I couldn't pay for lunch because I ___ my wallet at home.", ["leave", "have left", "had left"], 2, "Để quên ví xảy ra trước lúc không trả được tiền, nên lùi thêm một bậc: had left."),
    fill("b1-n03-3", "By the time the police arrived, the thief ___ escaped.", ["had"], "By the time + quá khứ đơn, vế còn lại dùng had + V3: tên trộm đã chạy thoát trước khi cảnh sát đến."),
    fill("b1-n03-4", "She was very tired because she ___ all night. (not sleep)", ["hadn't slept", "had not slept", "hadn't been sleeping", "had not been sleeping"], "Không ngủ cả đêm xảy ra trước lúc thấy mệt: hadn't slept (sleep có V3 là slept). Bài này mong đợi dạng đơn hadn't slept; viết hadn't been sleeping cũng được chấp nhận, nhưng đó là một thì khác, không phải trọng tâm hôm nay."),
    reorder("b1-n03-5", "Had you ever been to Da Lat before?", "Câu hỏi quá khứ hoàn thành: Had + chủ ngữ + ever + V3, before đứng cuối câu."),
    reorder("b1-n03-6", "I realised that I had forgotten my passport.", "Nhận ra (realised) là mốc quá khứ, quên hộ chiếu xảy ra trước đó nên dùng had forgotten."),
    listen("b1-n03-7", "When I got home, my husband had already cooked dinner.", ["Khi tôi về đến nhà thì chồng tôi mới bắt đầu nấu cơm.", "Khi tôi về đến nhà thì chồng tôi đã nấu xong bữa tối rồi.", "Chồng tôi về nhà rồi nấu bữa tối cho tôi."], 1, "Had already cooked: việc nấu đã xong trước khi tôi về."),
    listen("b1-n03-8", "I hadn't met her before the wedding.", ["Trước đám cưới, tôi chưa từng gặp cô ấy.", "Tôi đã gặp cô ấy trước đám cưới.", "Tôi gặp cô ấy sau đám cưới một tuần."], 0, "Hadn't met … before: chưa từng gặp trước thời điểm đó."),
    correct("b1-n03-9", "When we arrived at the party, most of the guests already went home.", "When we arrived at the party, most of the guests had already gone home.", "Khách về trước lúc chúng tôi đến, nên việc về phải lùi thêm một bậc: had already gone. Nhớ V3 của go là gone, không phải went."),
    correct("b1-n03-10", "I had visited Hoi An with my family last summer.", "I visited Hoi An with my family last summer.", "Chỉ kể một việc đơn lẻ trong quá khứ, không có mốc quá khứ thứ hai để so sánh, nên dùng quá khứ đơn: visited."),
  ],
  speaking: [
    say("By the time I got to the station, the train had already left.", "Lúc tôi đến ga thì tàu đã chạy mất rồi."),
    say("I had never seen snow before I went to Japan.", "Trước khi sang Nhật, tôi chưa từng thấy tuyết."),
    say("She was upset because she had lost her phone.", "Cô ấy buồn vì đã làm mất điện thoại."),
  ],
  freeSpeaking: free(
    "Can you tell me about a time when something went wrong on a trip or at work?",
    "Kể lại một lần mọi việc trục trặc khi bạn đi xa hoặc đi làm. Dùng quá khứ đơn cho các việc chính, và had + V3 cho việc xảy ra trước một mốc khác.",
    "Last year, I went to Da Nang for a conference. When I got to the hotel, I realised that I had left my laptop charger at home. I had never felt so worried before a presentation. Luckily, the receptionist had a spare one, so I borrowed it, and in the end everything went well.",
  ),
  dialogue: dialogue(
    "Chuyến công tác suýt hỏng",
    "Phong vừa đi công tác Singapore về. Chị Lan, đồng nghiệp, hỏi thăm chuyến đi, và Phong kể lại một loạt chuyện trục trặc: việc nào xảy ra trước thì anh dùng had + V3.",
    { A: "Chị Lan, đồng nghiệp", B: "Phong" },
    A("Welcome back, Phong! How was your trip to Singapore?", "Chào mừng Phong về! Chuyến đi Singapore thế nào?"),
    B("Terrible at the start! By the time I got to the airport, all the other passengers had already checked in.", "Lúc đầu thì tệ lắm chị ạ! Lúc em đến sân bay thì các hành khách khác đã làm thủ tục xong hết rồi."),
    A("Oh no! Why were you so late?", "Ôi trời! Sao em đến muộn thế?"),
    B("I had forgotten my passport, so I went back home to get it.", "Em để quên hộ chiếu, nên phải quay về nhà lấy."),
    A("So did you miss the flight?", "Thế em có lỡ chuyến bay không?"),
    B("Luckily, no. The airline had delayed the flight by two hours, so check-in was still open.", "May mà không. Hãng bay đã hoãn chuyến hai tiếng, nên quầy thủ tục vẫn còn mở."),
    A("What luck! Had you ever been to Singapore before?", "May thật! Trước đó em đã từng đến Singapore chưa?"),
    B("No, I had never been there. It was my first time.", "Chưa, em chưa đến đó bao giờ. Đó là lần đầu tiên."),
    A("Did the meeting go well?", "Cuộc họp có suôn sẻ không?"),
    B("Not at first. When I arrived at the office, my colleague had already started the presentation.", "Lúc đầu thì không. Khi em đến văn phòng thì đồng nghiệp em đã bắt đầu bài thuyết trình rồi."),
    A("Were you upset?", "Em có bực không?"),
    B("A little. But I was relieved because she had prepared everything very well.", "Một chút ạ. Nhưng em thấy nhẹ nhõm vì chị ấy đã chuẩn bị mọi thứ rất kỹ."),
  ),
  dialogueQuestions: [
    listenQ("b1-n03-d1", "Why was Phong late for the airport?", "I had forgotten my passport, so I went back home to get it.", ["His taxi had broken down.", "He had left his passport at home.", "He had got up too late.", "He had gone to the wrong airport."], 1, "Phong nói: I had forgotten my passport, so I went back home to get it."),
    mc("b1-n03-d2", "Why didn't Phong miss his flight?", ["The flight had been moved two hours later.", "His colleague had checked in for him.", "He had bought a ticket for a later flight."], 0, "The airline had delayed the flight by two hours: chuyến bay bị lùi hai tiếng, nên quầy thủ tục vẫn mở."),
    listenQ("b1-n03-d3", "How did Phong feel at the meeting, and why?", "A little. But I was relieved because she had prepared everything very well.", ["Angry, because his colleague had started without him.", "Nervous, because he hadn't prepared anything.", "Relieved, because his colleague had prepared well."], 2, "Phong hơi bực lúc đầu, nhưng thấy nhẹ nhõm (relieved) vì đồng nghiệp đã chuẩn bị rất kỹ."),
  ],
  reading: reading({
    title: "The day I nearly missed my sister's wedding",
    text: `Last spring, my sister Lan got married in Hue, and I nearly missed the whole thing.

I had booked an early flight from Ho Chi Minh City, so I set two alarms on my phone and went to bed early. When I woke up, the room was very bright. My phone had died during the night, and neither alarm had rung. It was already eight o'clock, and my flight left at nine.

I jumped into a taxi, but by the time I reached the airport, the gate had closed. The woman at the desk was very kind. She told me that another passenger had cancelled his ticket for the eleven o'clock flight, so I could take his seat. I was so relieved that I almost cried.

The second flight landed on time, but I still had one problem. I had packed my suit in my brother's suitcase the week before, and he had already gone to the hotel. I called him, and luckily he answered and met me at the door.

When I finally walked into the restaurant, the ceremony had just finished. My sister laughed and said, "I knew you would come. You've never been on time in your life!" Since that day, I always charge my phone before I go to bed.`,
    glossary: [
      ["neither", "không cái nào (trong hai cái)"],
      ["gate", "cửa ra máy bay"],
      ["suit", "bộ com-lê, bộ vest"],
      ["ceremony", "buổi lễ, nghi lễ"],
      ["charge", "sạc (pin)"],
    ],
    questions: [
      mc("b1-n03-r1", "What is the blog post mainly about?", ["How the writer helped to plan a wedding", "Why the writer is afraid of flying", "A day when the writer nearly missed an important family event", "How to choose a good hotel in Hue"], 2, "Cả bài kể về ngày người viết suýt lỡ đám cưới của chị gái."),
      mc("b1-n03-r2", "Why didn't the alarms ring?", ["The writer's phone had run out of battery.", "The writer had set them for the wrong time.", "The writer had turned them off by mistake."], 0, "My phone had died during the night: điện thoại hết pin nên không báo thức nào reo."),
      fill("b1-n03-r3", "By the time the writer reached the airport, the gate had ___.", ["closed"], "Câu trong bài: by the time I reached the airport, the gate had closed."),
      mc("b1-n03-r4", "How did the writer get a seat on the eleven o'clock flight?", ["The airline added extra seats.", "The writer's brother had bought a second ticket.", "The writer paid for a more expensive ticket.", "Another passenger had cancelled his ticket."], 3, "Another passenger had cancelled his ticket, so I could take his seat."),
      mc("b1-n03-r5", "What can we guess about the writer from the sister's words at the end?", ["The writer often goes to weddings.", "The writer is usually late.", "The writer had never been to Hue before.", "The writer doesn't like the sister's husband."], 1, "Câu suy luận: chị gái nói You've never been on time in your life, nghĩa là người viết lúc nào cũng trễ."),
    ],
  }),
  task: task({
    prompt: "Viết một đoạn văn (90–120 từ) kể lại một ngày “mọi thứ đều trục trặc” của bạn: dậy muộn, lỡ xe, quên đồ, đến nơi thì việc đã bắt đầu… Hãy làm rõ việc nào xảy ra trước.",
    hints: [
      "Kể các việc chính theo thứ tự bằng quá khứ đơn.",
      "Việc nào xảy ra trước một mốc quá khứ khác thì dùng had + V3 (had forgotten, had already left).",
      "Dùng by the time, already, because, never… before.",
      "Kết bằng một chuyện may mắn hoặc một bài học.",
    ],
    model: "Last Monday was a terrible day. I woke up late because I had forgotten to set my alarm. By the time I got to the bus stop, the bus had already left, so I took a taxi. When I arrived at the office, the meeting had started twenty minutes earlier. Then I realised that I had left my laptop at home! My boss wasn't happy. Luckily, a colleague had saved the report on her computer, so we used hers. I had never had such a bad morning before. That evening, I set two alarms before I went to bed.",
    checklist: [
      "Có ít nhất 3 câu had + V3, và mỗi câu đều có một mốc quá khứ khác để so sánh trước sau.",
      "Các việc chính của câu chuyện ở quá khứ đơn (woke up, got, took), không dùng had cho mọi câu.",
      "Dùng ít nhất 2 trong số: by the time, already, because, never… before.",
      "V3 bất quy tắc viết đúng: forgotten, left, gone, seen.",
      "Had dùng chung cho mọi chủ ngữ, không có câu nào viết has + V3 trong chuyện quá khứ.",
    ],
    minWords: 90,
  }),
});
