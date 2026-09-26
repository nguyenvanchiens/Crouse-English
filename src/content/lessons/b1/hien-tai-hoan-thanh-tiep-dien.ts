import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "hien-tai-hoan-thanh-tiep-dien",
  title: "Đã và đang làm gì đó",
  minutes: 30,
  lecture: {
    title: "Hiện tại hoàn thành tiếp diễn: have been + V-ing",
    blocks: [
      p("Bạn hẹn bạn bè ở quán cà phê, đợi mãi không thấy ai đến, rồi gọi điện: “Tớ **đợi** cậu **bốn mươi phút rồi** đấy!” Việc đợi bắt đầu từ trước, **kéo dài liên tục** và **bây giờ vẫn đang đợi**. Để nhấn mạnh quá trình kéo dài này, tiếng Anh dùng **hiện tại hoàn thành tiếp diễn**: have / has been + V-ing. Bài “Đã… được bao lâu rồi” đã dạy have / has + V3 với for và since; hôm nay ta thêm **been + V-ing** để nhấn mạnh quá trình."),
      table(
        ["Dạng", "Cấu trúc", "Ví dụ"],
        ["Khẳng định", "S + have / has been + V-ing", "I've been waiting for forty minutes."],
        ["Phủ định", "S + haven't / hasn't been + V-ing", "She hasn't been sleeping well."],
        ["Nghi vấn", "Have / Has + S + been + V-ing?", "How long have you been waiting?"],
      ),
      ex("I've been learning English for three years.", "Tôi học tiếng Anh được ba năm rồi.", "Bắt đầu từ ba năm trước và vẫn đang học."),
      ex("It has been raining since this morning.", "Trời mưa từ sáng đến giờ."),
      ex("How long have you been living in Saigon?", "Bạn sống ở Sài Gòn được bao lâu rồi?"),
      p("Thì này còn dùng khi ta **nhìn thấy dấu vết** của một việc vừa làm liên tục, dù việc đó có thể vừa dừng lại."),
      ex("Your eyes are red. Have you been crying?", "Mắt bạn đỏ quá. Bạn vừa khóc à?", "Người nói thấy dấu vết (mắt đỏ) nên đoán về hoạt động vừa diễn ra."),
      table(
        ["Hiện tại hoàn thành tiếp diễn", "Hiện tại hoàn thành đơn"],
        ["Nhấn mạnh hoạt động, quá trình kéo dài", "Nhấn mạnh kết quả, việc đã xong"],
        ["I've been painting the kitchen. (người dính sơn, có thể chưa xong)", "I've painted the kitchen. (bếp đã sơn xong)"],
        ["Trả lời How long…? (bao lâu)", "Trả lời How many / How much…? (bao nhiêu)"],
        ["I've been writing emails all morning.", "I've written ten emails this morning."],
      ),
      tip("Có **con số đếm được** (ten emails, three cups, two books) thì dùng hiện tại hoàn thành đơn. Có **khoảng thời gian** (all morning, for two hours) thì nghĩ đến have been + V-ing. Mẹo phát âm: khi nói nhanh, **been** đọc yếu thành /bɪn/, và I've been nghe như “ai-vbin”."),
      mistake("I'm learning English for three years.", "I've been learning English for three years.", "Tiếng Việt chỉ nói “tôi học tiếng Anh ba năm rồi”, không đổi động từ, nên người Việt hay dùng hiện tại tiếp diễn. Việc bắt đầu từ quá khứ và kéo dài đến giờ cần have been + V-ing."),
      mistake("I've been knowing her since high school.", "I've known her since high school.", "Know, like, want, believe, own là động từ chỉ trạng thái, thường không dùng dạng tiếp diễn. Với chúng, dùng hiện tại hoàn thành đơn. (Want đôi khi có dạng tiếp diễn để nói mong muốn đã ấp ủ lâu: I've been wanting to tell you.)"),
      mistake("I've been drinking three cups of coffee today.", "I've drunk three cups of coffee today.", "Có con số cụ thể (three cups) là nói kết quả, nên dùng hiện tại hoàn thành đơn."),
      teacher("Các bạn hay hỏi tôi: “Vậy I've lived here for five years và I've been living here for five years khác gì nhau?” Với những động từ như live, work, study, hai câu gần như **cùng nghĩa**, đừng lo chọn sai. Cái bẫy thật sự nằm ở hai chỗ: quên **been**, và dùng thì này với động từ trạng thái như know. Cách luyện của tôi: các bạn mỗi sáng tự hỏi mình một câu **How long have I been…?** rồi trả lời thành tiếng. I've been working at this company for two years. I've been reading this book since Sunday."),
      summary(
        "**have / has been + V-ing**: việc bắt đầu trong quá khứ, kéo dài liên tục đến bây giờ; nhấn mạnh **quá trình**.",
        "Dùng cả khi thấy **dấu vết** của hoạt động vừa diễn ra: Your eyes are red. Have you been crying?",
        "Có **con số đếm được** (three emails) thì dùng have + V3; có **khoảng thời gian** (all morning, for two hours) thì dùng have been + V-ing.",
        "Động từ trạng thái như know, like, want, own thường không dùng dạng tiếp diễn: I've known her, không nói I've been knowing her (ngoại lệ hay gặp: I've been wanting to tell you).",
        "Đừng quên **been**: I've been waiting, không nói I've waiting hay I'm waiting for an hour.",
      ),
    ],
  },
  words: [
    word("exhausted", "/ɪɡˈzɔː.stɪd/", "kiệt sức", "I'm exhausted. I've been working since six o'clock.", "ex|haus|ted", 1, "Chữ h không đọc, x đọc là /ɡz/: ig-ZAW-stid."),
    word("queue", "/kjuː/", "hàng người xếp hàng; xếp hàng", "We've been standing in this queue for half an hour.", "queue", 0, "Đọc giống hệt chữ cái Q. Bốn chữ ueue phía sau không đọc riêng."),
    word("practise", "/ˈpræk.tɪs/", "luyện tập", "She has been practising the piano every evening.", "prac|tise", 0, "Tiếng Anh-Anh viết practise cho động từ, practice cho danh từ."),
    word("overtime", "/ˈəʊ.və.taɪm/", "làm thêm giờ; giờ làm thêm", "I've been doing overtime every evening this week.", "o|ver|time", 0, "Trọng âm ở âm đầu: OH-və-taim. Chữ r không đọc trong giọng Anh-Anh."),
    word("project", "/ˈprɒdʒ.ekt/", "dự án", "We've been working on this project since March.", "proj|ect", 0, "Danh từ nhấn âm đầu: PRO-ject."),
    word("research", "/rɪˈsɜːtʃ/", "nghiên cứu", "He has been doing research on rice farming.", "re|search", 1),
    word("stressed", "/strest/", "căng thẳng", "She's been feeling stressed lately.", "stressed", 0, "Đuôi -ed đọc là /t/, cả từ chỉ một âm tiết: /strest/."),
    word("revise", "/rɪˈvaɪz/", "ôn bài, ôn tập", "I've been revising for my exam all week.", "re|vise", 1),
  ],
  exercises: [
    mc("b1-n04-1", "I ___ for you for forty minutes! Where are you?", ["wait", "am waiting", "have been waiting", "had waited"], 2, "Việc đợi bắt đầu từ trước, kéo dài đến giờ và vẫn đang đợi: have been waiting."),
    mc("b1-n04-2", "I ___ three emails this morning.", ["have been writing", "have written", "am writing"], 1, "Có con số cụ thể (three emails) là nói kết quả đã xong, nên dùng hiện tại hoàn thành đơn: have written."),
    fill("b1-n04-3", "She has been ___ English since she was ten. (learn)", ["learning"], "Has been + V-ing: learning."),
    fill("b1-n04-4", "How long ___ you been living here?", ["have"], "Câu hỏi: How long + have + you + been + V-ing."),
    reorder("b1-n04-5", "How long have you been waiting for the bus?", "How long đứng đầu, sau đó là have + you + been + waiting, cụm for the bus ở cuối."),
    reorder("b1-n04-6", "What have you been doing all day?", "Hỏi về hoạt động kéo dài suốt cả ngày: What + have + you + been + doing."),
    listen("b1-n04-7", "I've been cleaning the house all morning.", ["Tôi dọn nhà cả buổi sáng nay.", "Sáng mai tôi sẽ dọn nhà.", "Tôi dọn nhà vào mỗi buổi sáng."], 0, "I've been cleaning + all morning: hoạt động kéo dài suốt buổi sáng đến giờ."),
    listen("b1-n04-8", "We've been waiting for an hour, but the doctor hasn't come yet.", ["Bác sĩ đến muộn một tiếng nên chúng tôi đã về.", "Chúng tôi sẽ gặp bác sĩ sau một tiếng nữa.", "Chúng tôi đợi một tiếng rồi mà bác sĩ vẫn chưa đến."], 2, "Have been waiting: vẫn đang đợi; hasn't come yet: vẫn chưa đến."),
    correct("b1-n04-9", "I'm living in Da Nang since 2020.", ["I've been living in Da Nang since 2020.", "I've lived in Da Nang since 2020."], "Việc bắt đầu từ 2020 và kéo dài đến giờ, có since, nên không dùng hiện tại tiếp diễn. Dùng have been + V-ing (hoặc have lived, vì live dùng được cả hai dạng)."),
    correct("b1-n04-10", "I've been knowing Minh since we were at school.", "I've known Minh since we were at school.", "Know là động từ chỉ trạng thái, không dùng dạng tiếp diễn. Dùng hiện tại hoàn thành đơn: I've known."),
  ],
  speaking: [
    say("I've been learning English for two years.", "Tôi học tiếng Anh được hai năm rồi."),
    say("How long have you been waiting?", "Bạn đợi được bao lâu rồi?"),
    say("We've been working on this project since Monday.", "Chúng tôi làm dự án này từ thứ Hai đến giờ."),
  ],
  freeSpeaking: free(
    "What have you been doing lately, and how long have you been doing it?",
    "Kể về một việc bạn đang làm dạo gần đây (công việc, việc học, một sở thích mới): bắt đầu từ khi nào, làm được bao lâu rồi, và đến giờ đã đạt được gì.",
    "Lately, I've been learning to cook Japanese food. I've been taking an online course since January, and I've been practising every Sunday. So far, I've made sushi three times, and my family says it's getting better. I've also been reading a lot about Japanese culture, because I'm planning a trip there next year.",
  ),
  dialogue: dialogue(
    "Đến muộn ở quán cà phê",
    "Hà hẹn Nam ở quán cà phê sau giờ làm. Nam đến muộn hơn bốn mươi phút vì tắc đường. Hai người kể cho nhau nghe dạo này đang bận việc gì.",
    { A: "Hà", B: "Nam" },
    A("Nam! I've been waiting for forty minutes. Where have you been?", "Nam! Tớ đợi bốn mươi phút rồi đấy. Cậu đi đâu thế?"),
    B("I'm so sorry. I've been sitting in traffic since five o'clock.", "Tớ xin lỗi. Tớ bị kẹt xe từ năm giờ đến giờ."),
    A("You look exhausted. Have you been working late?", "Trông cậu kiệt sức quá. Dạo này cậu làm muộn à?"),
    B("Yes. We've been working on a big project all week, and I've written five reports today.", "Ừ. Cả tuần nay bọn tớ làm một dự án lớn, riêng hôm nay tớ đã viết xong năm bản báo cáo."),
    A("Poor you! How long have you been doing this job now?", "Tội cậu quá! Cậu làm công việc này được bao lâu rồi nhỉ?"),
    B("I've been working there for two years. And you? Have you been revising for your exam?", "Tớ làm ở đó được hai năm rồi. Còn cậu? Cậu vẫn đang ôn thi à?"),
    A("Yes, I've been revising every evening, but I've been feeling stressed lately.", "Ừ, tối nào tớ cũng ôn, nhưng dạo này tớ thấy căng thẳng lắm."),
    B("I know that feeling. Have you been sleeping well?", "Tớ hiểu cảm giác đó. Dạo này cậu có ngủ ngon không?"),
    A("Not really. I've drunk three cups of coffee today!", "Không hẳn. Hôm nay tớ uống ba cốc cà phê rồi!"),
    B("Then let's order tea this time. I've been coming here for years, and their tea is great.", "Vậy lần này mình gọi trà nhé. Tớ đến quán này mấy năm rồi, trà ở đây ngon lắm."),
    A("Good idea. And next time, please text me if you're late!", "Được đấy. Mà lần sau đến muộn thì nhắn cho tớ nhé!"),
    B("I promise. I've known you for ten years, and I don't want to lose my best friend!", "Tớ hứa. Tớ quen cậu mười năm rồi, không muốn mất bạn thân đâu!"),
  ),
  dialogueQuestions: [
    listenQ("b1-n04-d1", "Why is Nam late?", "I'm so sorry. I've been sitting in traffic since five o'clock.", ["He had to finish a report.", "He has been stuck in traffic.", "He forgot about the meeting.", "His motorbike has broken down."], 1, "Nam nói: I've been sitting in traffic since five o'clock, tức là bị kẹt xe từ năm giờ."),
    mc("b1-n04-d2", "What has Ha been doing every evening?", ["Working late at the office", "Drinking tea at this café", "Revising for her exam"], 2, "Hà nói: I've been revising every evening, vì Nam hỏi Have you been revising for your exam?"),
    listenQ("b1-n04-d3", "How long have Nam and Ha known each other?", "I promise. I've known you for ten years, and I don't want to lose my best friend!", ["For ten years", "For two years", "Since last week", "For forty minutes"], 0, "I've known you for ten years: hai người quen nhau mười năm rồi."),
  ],
  reading: reading({
    title: "Six months of running: what I've learnt",
    text: `Hi everyone! It's been a while since my last post. I've been very busy lately, and today I want to tell you why.

Six months ago, my doctor told me that I needed more exercise. I was sitting at a desk for ten hours a day and I rarely moved. So I started running. At first, I could only run for five minutes without stopping. I've been running three times a week since March, and last Sunday I ran ten kilometres for the first time!

I've also been getting up earlier. My alarm goes off at half past five, and I run around the lake near my flat before work. It hasn't always been easy. On some rainy mornings I've stayed in bed, and I've hurt my knee twice. But I've been feeling much less stressed, and I've been sleeping better too.

Lately, a few colleagues have been asking me for advice, so I've started a small running group at work. We've been meeting every Saturday for a month now, and so far eight people have joined.

If you've been thinking about starting a sport, my advice is simple: start slowly, buy good shoes, and don't give up after one bad week. Next month I'm running my first race, so I'll tell you all about it!`,
    glossary: [
      ["rarely", "hiếm khi"],
      ["knee", "đầu gối"],
      ["advice", "lời khuyên"],
      ["race", "cuộc thi chạy, cuộc đua"],
    ],
    questions: [
      mc("b1-n04-r1", "What is the main purpose of the post?", ["To sell running shoes to readers", "To share how running has changed the writer's life", "To complain about the writer's doctor", "To invite readers to a race next Sunday"], 1, "Cả bài kể người viết bắt đầu chạy bộ ra sao và cuộc sống thay đổi thế nào."),
      mc("b1-n04-r2", "When does the writer usually run?", ["After work in the evening", "At lunchtime with colleagues", "Early in the morning before work"], 2, "My alarm goes off at half past five, and I run around the lake… before work."),
      fill("b1-n04-r3", "The running group at work has been meeting every ___ for a month.", ["Saturday"], "We've been meeting every Saturday for a month now."),
      mc("b1-n04-r4", "Which change has the writer noticed?", ["The writer feels less stressed and sleeps better.", "The writer has started to enjoy rainy mornings.", "The writer now works fewer hours.", "The writer no longer needs an alarm."], 0, "I've been feeling much less stressed, and I've been sleeping better too."),
      mc("b1-n04-r5", "What can we infer from the post?", ["The writer ran ten kilometres in the first week.", "The writer's doctor runs in the same group.", "The writer has not taken part in a race yet.", "The writer only runs when the weather is good."], 2, "Câu suy luận: Next month I'm running my first race, nghĩa là người viết chưa từng chạy giải nào."),
    ],
  }),
  task: task({
    prompt: "Viết một tin nhắn (90–120 từ) gửi một người bạn lâu ngày không gặp, kể dạo này bạn đang làm gì: công việc, học tập, sở thích mới. Kết thúc bằng một câu hỏi thăm bạn ấy.",
    hints: [
      "Dùng have / has been + V-ing cho hoạt động kéo dài đến bây giờ, kèm for, since, lately hoặc all week.",
      "Dùng have / has + V3 khi có con số hoặc kết quả đã xong (three reports, two books).",
      "Với know, like, own thì thường dùng have + V3, không dùng dạng tiếp diễn.",
      "Kết bằng một câu hỏi: What have you been doing lately? hoặc How long have you been…?",
    ],
    model: "Hi Lan, it's been ages! Life has been busy lately. I've been working at a new company since March, and I've been learning a lot about marketing. We've been working on a big project for two months, and I've already finished three reports. Lately, I've also been practising yoga every morning, so I feel less stressed. I've read two English books this month too! I've known you for ten years, and I really miss our coffee chats. What have you been doing lately? How long have you been living in Hue now? Write back soon!",
    checklist: [
      "Có ít nhất 3 câu have / has been + V-ing kèm for, since, lately hoặc all week.",
      "Có ít nhất 1 câu have / has + V3 với con số hoặc kết quả đã xong.",
      "Không bỏ sót been (không viết I've working).",
      "Know, like, own không ở dạng tiếp diễn.",
      "Có ít nhất 1 câu hỏi What have you been doing…? hoặc How long have you been…?",
    ],
    minWords: 90,
  }),
});
