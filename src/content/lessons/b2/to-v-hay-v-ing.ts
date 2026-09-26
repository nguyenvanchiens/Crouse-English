import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "to-v-hay-v-ing",
  title: "Nhớ làm hay nhớ đã làm?",
  minutes: 35,
  lecture: {
    title: "Động từ đổi nghĩa khi đi với to V hay V-ing",
    blocks: [
      p("Một anh học trò của tôi khoe với đồng nghiệp người Anh: **I stopped to check emails at night.** Anh định nói “Tôi đã bỏ thói quen kiểm tra email buổi tối”, nhưng câu tiếng Anh lại có nghĩa “Buổi tối tôi dừng việc đang làm lại để kiểm tra email”, tức là ngược hẳn. Chỉ đổi **checking** thành **to check** mà nghĩa khác hoàn toàn. Có một nhóm động từ như vậy: **remember, forget, stop, try, regret, mean**. Ở trình độ B2, dùng sai chúng là lỗi người bản xứ nhận ra ngay."),
      table(
        ["Động từ", "+ to V", "+ V-ing"],
        ["remember", "nhớ để làm (việc chưa làm): Remember to call her.", "nhớ là đã làm: I remember calling her."],
        ["forget", "quên làm (nên không làm): I forgot to lock the door.", "quên là đã làm (thường dùng: never forget): I'll never forget meeting you."],
        ["stop", "dừng lại để làm việc khác: We stopped to have lunch.", "thôi, ngừng hẳn việc đang làm: He stopped smoking."],
        ["try", "cố gắng làm (việc khó): I tried to open the window.", "thử làm xem có hiệu quả không: Try restarting your computer."],
        ["regret", "lấy làm tiếc phải báo (trang trọng): We regret to inform you…", "hối tiếc vì đã làm: I regret leaving my job."],
        ["mean", "định làm, cố ý làm: I didn't mean to upset you.", "đồng nghĩa với việc, kéo theo: The new job means moving to Hanoi."],
      ),
      p("Ở B1, bài **Động từ theo sau là gì?**, các bạn đã học động từ chỉ đi với một dạng: want to V, enjoy V-ing. Nhóm hôm nay khó hơn vì đi được với **cả hai**, và mỗi dạng một nghĩa. Có một quy luật giúp bạn đoán được phần lớn: **to V thường hướng về phía trước** (việc chưa xảy ra, mục đích), còn **V-ing thường nhìn lại** việc đã hoặc đang xảy ra. Nhớ to V là nhớ để làm việc sắp tới; nhớ V-ing là nhớ lại việc đã làm."),
      ex("Did you remember to bring your passport?", "Anh có nhớ mang theo hộ chiếu không?", "Việc mang hộ chiếu xảy ra sau việc nhớ, nên dùng to V."),
      ex("I clearly remember putting my keys on the table.", "Tôi nhớ rõ là mình đã để chìa khóa trên bàn.", "Việc để chìa khóa xảy ra trước, bây giờ nhớ lại, nên dùng V-ing."),
      ex("On the way to Da Lat, we stopped to take some photos.", "Trên đường lên Đà Lạt, chúng tôi dừng xe để chụp vài tấm ảnh.", "Stop to V: dừng việc đang làm (lái xe) để làm việc khác (chụp ảnh)."),
      ex("If you can't sleep, try drinking warm milk before bed.", "Nếu mất ngủ, bạn thử uống sữa ấm trước khi ngủ xem sao.", "Try V-ing: thử một cách để xem có hiệu quả không."),
      ex("We regret to inform you that the event has been cancelled.", "Chúng tôi rất tiếc phải thông báo rằng sự kiện đã bị hủy.", "Regret to inform / to announce / to say: mẫu câu trang trọng trong thông báo."),
      mistake("I stopped to smoke last year and I feel much better now.", "I stopped smoking last year and I feel much better now.", "Tiếng Việt “dừng hút thuốc” và “dừng lại để hút thuốc” đều có chữ “dừng”, nên học trò hay nhầm. Muốn nói bỏ thuốc thì dùng stop + V-ing. Stop to smoke nghĩa là dừng lại để châm điếu thuốc."),
      mistake("The TV isn't working. Try to turn it off and on again.", "The TV isn't working. Try turning it off and on again.", "Tiếng Việt “thử” và “cố” khác nhau, nhưng tiếng Anh cùng dùng try. Nhớ quy tắc: “thử xem sao” là try + V-ing; “cố gắng” là try + to V."),
      mistake("Don't forget locking the door when you leave.", "Don't forget to lock the door when you leave.", "Việc khóa cửa chưa xảy ra, nên dùng to V. Forget + V-ing gần như chỉ dùng trong câu “I'll never forget + V-ing”."),
      tip("Mẹo ghi nhớ: **to** giống như **mũi tên chỉ về phía trước**. Thấy việc sắp làm, việc chưa xảy ra, mục đích thì dùng **to V**. Còn **-ing** giống **cuốn phim quay lại**: việc đã làm, thói quen đã có, một cách thử nghiệm."),
      teacher("Đừng học nhóm động từ này bằng cách chép bảng rồi đọc thuộc. Tôi luôn bảo học trò **tự đặt cho mỗi động từ hai câu về chính đời mình**, một câu to V, một câu V-ing, rồi dán lên gương: “I must remember to call Mum on Sunday.”, “I remember going to the beach with my father.” **Câu có kỷ niệm của bạn thì không bao giờ quên**. Còn khi viết email trang trọng, hãy nhớ riêng mẫu **We regret to inform you…**, thư từ chối và thông báo hủy nào cũng có nó."),
      summary(
        "to V nhìn về phía trước (việc chưa làm, mục đích); V-ing nhìn lại (việc đã làm hoặc đang làm).",
        "remember / forget to V: nhớ, quên làm việc sắp tới; remember V-ing, never forget V-ing: nhớ lại việc đã làm.",
        "stop V-ing: thôi hẳn việc đó; stop to V: dừng việc đang làm để làm việc khác.",
        "try to V: cố gắng làm một việc khó; try V-ing: thử một cách xem có hiệu quả không.",
        "regret V-ing: hối tiếc vì đã làm; regret to inform: tiếc phải báo; mean to V: định làm; mean V-ing: kéo theo việc gì.",
      ),
    ],
  },
  words: [
    word("recall", "/rɪˈkɔːl/", "nhớ lại", "I don't recall signing this contract.", "re|call", 1, "Giống remember khi nhìn lại quá khứ: recall + V-ing. Trọng âm ở âm sau: re-CALL, âm /ɔː/ tròn môi và kéo dài."),
    word("intend", "/ɪnˈtend/", "định, có ý định", "I didn't intend to stay so long.", "in|tend", 1),
    word("quit", "/kwɪt/", "bỏ (thói quen, công việc)", "He quit smoking when his son was born.", "quit", 0, "Đọc /kwɪt/ như “quýt” ngắn, nhớ âm /t/ cuối."),
    word("attempt", "/əˈtempt/", "cố gắng, thử làm", "She attempted to fix the printer herself.", "at|tempt", 1, "Cuối từ là cụm /mpt/: khép môi ở /m/, bật nhẹ /p/ rồi /t/."),
    word("inform", "/ɪnˈfɔːm/", "thông báo", "We regret to inform you that the tour is full.", "in|form", 1),
    word("reminder", "/rɪˈmaɪn.də/", "lời nhắc, tin nhắc", "I set a reminder on my phone to pay the bill.", "re|mind|er", 1),
    word("forgetful", "/fəˈɡet.fəl/", "hay quên", "My grandfather has become a little forgetful.", "for|get|ful", 1),
    word("unfortunately", "/ʌnˈfɔː.tʃən.ət.li/", "không may, đáng tiếc là", "Unfortunately, I forgot to bring my laptop.", "un|for|tu|nate|ly", 1, "Năm âm tiết, trọng âm ở âm thứ hai: un-FOR-tu-nate-ly."),
  ],
  exercises: [
    mc("b2-n15-1", "Please remember ___ the lights before you leave the office.", ["to turn off", "turning off", "turn off", "turned off"], 0, "Việc tắt đèn chưa xảy ra, cần nhớ để làm, nên dùng remember + to V."),
    mc("b2-n15-2", "On the way home, I stopped ___ some bread for breakfast.", ["buying", "to buy", "buy"], 1, "Dừng lại để mua bánh mì: stop + to V chỉ mục đích."),
    fill("b2-n15-3", "The printer isn't working. Try ___ it off and on again. (turn)", ["turning"], "Thử một cách xem có được không: try + V-ing."),
    fill("b2-n15-4", "We regret ___ you that your flight has been cancelled. (inform)", ["to inform"], "Regret + to V trong thông báo trang trọng: lấy làm tiếc phải báo tin."),
    reorder("b2-n15-5", "I will never forget meeting you.", "Never forget + V-ing: không bao giờ quên một việc đã xảy ra."),
    reorder("b2-n15-6", "I didn't mean to hurt your feelings.", "Mean + to V: cố ý, định làm. Đây là câu xin lỗi rất hay dùng."),
    listen("b2-n15-7", "I remember locking the door, but now it's open.", ["Tôi nhớ phải khóa cửa trước khi đi.", "Tôi quên khóa cửa nên cửa bị mở.", "Tôi nhớ là đã khóa cửa rồi, vậy mà giờ cửa lại mở."], 2, "Remember + V-ing: nhớ lại việc đã làm."),
    listen("b2-n15-8", "Taking the new job will mean moving to another city.", ["Tôi định chuyển đến thành phố khác để tìm việc.", "Nhận công việc mới đồng nghĩa với việc phải chuyển đến thành phố khác.", "Tôi không muốn chuyển đến thành phố khác."], 1, "Mean + V-ing: kéo theo, đồng nghĩa với việc."),
    correct("b2-n15-9", "I stopped to eat fast food last year, and I've lost five kilos.", ["I stopped eating fast food last year, and I've lost five kilos."], "Bỏ hẳn một thói quen là stop + V-ing. Stop to eat nghĩa là dừng việc đang làm lại để ăn."),
    correct("b2-n15-10", "Remember sending me the report before Friday.", ["Remember to send me the report before Friday."], "Việc gửi báo cáo chưa xảy ra, cần nhớ để làm, nên dùng remember + to V."),
  ],
  speaking: [
    say("Don't forget to call me when you arrive.", "Đừng quên gọi cho tôi khi bạn đến nơi nhé."),
    say("I remember visiting this temple when I was a child.", "Tôi nhớ là đã đến thăm ngôi chùa này hồi còn nhỏ."),
    say("If you feel tired, try going for a short walk.", "Nếu thấy mệt, bạn thử đi bộ một chút xem sao."),
  ],
  freeSpeaking: free(
    "Tell me about something you once forgot to do. What happened, and what do you do now so that you remember?",
    "Kể một lần bạn quên làm một việc quan trọng: chuyện gì xảy ra, bạn có hối tiếc không, và giờ bạn làm gì để không quên nữa. Chọn đúng to V hay V-ing sau remember, forget, regret, mean, try.",
    "Last year I forgot to renew my motorbike insurance. I remember seeing the email from the company, but I meant to deal with it later, and then I forgot all about it. A month later I had a small accident, and of course I wasn't covered. I really regret ignoring that email. Now I always set a reminder on my phone as soon as I get a bill, and I try to pay it on the same day.",
  ),
  dialogue: dialogue(
    "Chuẩn bị đi công tác",
    "Thảo và Đức sắp cùng đi Singapore gặp khách hàng. Trước ngày đi, hai người kiểm tra lại mọi việc cần chuẩn bị.",
    { A: "Thảo", B: "Đức" },
    A("Duc, did you remember to book the hotel for our trip to Singapore?", "Đức ơi, anh có nhớ đặt khách sạn cho chuyến đi Singapore không?"),
    B("Yes, I remember booking it last Monday. I got a confirmation email.", "Có, tôi nhớ là đã đặt hôm thứ Hai tuần trước. Tôi có nhận email xác nhận."),
    A("Great. I've tried to log in to the booking website, but it keeps saying my password is wrong.", "Tốt quá. Tôi đã cố đăng nhập vào trang đặt phòng, nhưng nó cứ báo sai mật khẩu."),
    B("Try resetting your password. That worked for me.", "Chị thử đặt lại mật khẩu xem. Tôi làm thế là được."),
    A("Good idea. By the way, the new schedule means leaving home at five in the morning.", "Ý hay đấy. À, lịch mới đồng nghĩa với việc phải ra khỏi nhà lúc năm giờ sáng."),
    B("Really? I didn't mean to choose such an early flight. Sorry!", "Thật à? Tôi không cố ý chọn chuyến sớm thế đâu. Xin lỗi nhé!"),
    A("It's fine. We can stop to have breakfast on the way.", "Không sao. Mình có thể dừng lại ăn sáng trên đường đi."),
    B("Good. And please don't forget to bring the samples for the client.", "Được. Và chị đừng quên mang hàng mẫu cho khách nhé."),
    A("I won't. Last time I forgot to pack them, and I still regret making that mistake.", "Tôi sẽ không quên đâu. Lần trước tôi quên đóng gói chúng, và đến giờ tôi vẫn hối tiếc vì sai lầm đó."),
    B("I'll never forget seeing your face in that meeting!", "Tôi sẽ không bao giờ quên được nét mặt chị trong buổi họp đó!"),
    A("Please stop reminding me. Let's just get ready for this trip.", "Thôi đừng nhắc nữa. Mình chuẩn bị cho chuyến này đi."),
  ),
  dialogueQuestions: [
    listenQ("b2-n15-d1", "How does Duc know that he has booked the hotel?", "Yes, I remember booking it last Monday. I got a confirmation email.", ["Thao reminded him.", "The hotel called him.", "He received a confirmation email.", "He wrote it in his diary."], 2, "I got a confirmation email: anh ấy nhận được email xác nhận, nên nhớ chắc là đã đặt (remember booking)."),
    mc("b2-n15-d2", "What does Duc suggest Thao should do about the booking website?", ["Call the hotel instead", "Try resetting her password", "Use his account", "Book a different hotel"], 1, "Try resetting your password. That worked for me. Try + V-ing: thử một cách xem có được không."),
    mc("b2-n15-d3", "What happened on their last business trip?", ["They missed their flight.", "Duc forgot to book the hotel.", "The client cancelled the meeting.", "Thao forgot to pack the samples."], 3, "Last time I forgot to pack them: lần trước Thảo quên đóng gói hàng mẫu."),
  ],
  reading: reading({
    title: "Did I remember to lock the door?",
    text: `Have you ever left home, walked to the end of the street and then stopped, suddenly unsure whether you had locked the door? You remember locking it, or at least you think you do, but you cannot be certain. So you go back to check, and of course it is locked. If this sounds familiar, you are not alone.

According to psychologists, the problem is not that we are becoming more forgetful. It is that we do many everyday actions on autopilot. Locking a door, switching off the cooker or picking up our keys are part of a daily routine, so the brain does not bother to store a clear memory of them. We did the action, but we did not notice doing it.

One simple solution is to try saying the action out loud. "I'm locking the front door" sounds silly, but studies show that people who describe what they are doing are much more likely to remember doing it later. Another trick is to add a small unusual detail, such as touching the lock twice. The brain notices anything unusual and stores it.

Forgetting to do things in the future is a different problem. Here, the most effective method is a reminder that appears at exactly the right moment. A note on the fridge saying "Remember to call the dentist" works much better than a long list of tasks on your phone that you never open. Some people even put the bag they need in front of the door, so that they cannot leave without it.

Of course, nobody remembers everything. If you often forget appointments, you might want to stop trying to keep everything in your head. Writing things down is not a sign of weakness. In fact, many successful people say they regret not starting the habit earlier. After all, a good system means spending less time worrying and more time on the things that really matter.`,
    glossary: [
      ["psychologist", "nhà tâm lý học"],
      ["on autopilot", "theo quán tính, không để ý"],
      ["bother", "chịu khó, mất công (làm gì)"],
      ["store", "lưu giữ"],
      ["effective", "hiệu quả"],
      ["appointment", "cuộc hẹn"],
    ],
    questions: [
      mc("b2-n15-r1", "What is the article mainly about?", ["Why we forget everyday actions, and how to remember things better", "How to choose a good lock for your front door", "Why successful people never forget anything", "How the brain stores memories of childhood"], 0, "Bài giải thích vì sao ta không nhớ những việc làm theo thói quen và đưa ra các mẹo để nhớ tốt hơn."),
      mc("b2-n15-r2", "According to the article, why do we often not remember locking the door?", ["We are becoming more forgetful with age.", "We do it automatically, so the brain doesn't store a clear memory.", "We are usually in too much of a hurry.", "We lock the door too many times."], 1, "We do many everyday actions on autopilot… so the brain does not bother to store a clear memory of them."),
      fill("b2-n15-r3", "The writer suggests that you try ___ the action out loud. (say)", ["saying"], "Try + V-ing: thử một cách để xem có hiệu quả không."),
      mc("b2-n15-r4", "Which method does the writer recommend for remembering to do something in the future?", ["A long list of tasks on your phone", "Touching the lock twice", "Saying the task out loud once", "A reminder that appears at exactly the right moment"], 3, "The most effective method is a reminder that appears at exactly the right moment. Chạm vào ổ khóa hai lần là mẹo để nhớ việc đã làm."),
      mc("b2-n15-r5", "What is the writer's attitude towards writing things down?", ["It makes people lazy.", "It is only necessary for old people.", "It is a sensible habit, not a sign of weakness.", "It works less well than keeping everything in your head."], 2, "Writing things down is not a sign of weakness, và nhiều người thành công còn tiếc vì không bắt đầu sớm hơn."),
    ],
  }),
  task: task({
    prompt: "Viết một bài khoảng 140–180 từ kể về một thói quen bạn đã bỏ hoặc đã thay đổi. Dùng ít nhất bốn động từ trong bài (remember, forget, stop, try, regret, mean) và chọn đúng to V hay V-ing.",
    hints: [
      "Dùng stop + V-ing để nói thói quen bạn đã bỏ.",
      "Kể một việc bạn đã try to V (cố gắng) và một cách bạn đã try V-ing (thử xem sao).",
      "Thêm remember hoặc regret, rồi tự hỏi hành động đó xảy ra trước hay sau.",
    ],
    model: "Two years ago, I stopped drinking coffee after lunch. I used to have three or four cups a day, and I often lay awake until two in the morning. I had tried to go to sleep earlier many times, but nothing worked, and I felt tired at work every day.\n\nThen a friend told me to try drinking herbal tea in the afternoon instead. At first it was hard. I remember feeling sleepy at my desk for a whole week, and I nearly gave up. My manager even asked me if I was ill.\n\nNow I always remember to make a cup of ginger tea at three o'clock, and I have set a reminder on my phone in case I forget. I sleep much better, and I no longer need a coffee to wake up in the morning.\n\nI don't regret changing my routine at all, even though it meant giving up my favourite drink. If you have trouble sleeping, you should try cutting down on coffee too.",
    checklist: [
      "Có stop + V-ing để nói bỏ hẳn một thói quen.",
      "Có cả try to V (cố gắng) và try V-ing (thử xem sao), dùng đúng nghĩa.",
      "Có remember to V hoặc remember V-ing, khớp với việc chưa làm hay đã làm.",
      "Có regret V-ing hoặc mean V-ing.",
      "Mỗi to V chỉ việc xảy ra sau, mỗi V-ing chỉ việc đã xảy ra hoặc đang diễn ra.",
    ],
    minWords: 140,
  }),
});
