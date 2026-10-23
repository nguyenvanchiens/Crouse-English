import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "cum-dong-tu-thong-dung",
  title: "Cụm động từ trong công việc và cuộc sống",
  minutes: 35,
  lecture: {
    title: "Cụm động từ B1: put off, turn down, deal with, run out of, come up with",
    blocks: [
      p("Ở các cấp trước bạn đã gặp vài cụm động từ đơn giản như get up, turn on, pick up. Lên B1, bạn cần những cụm mà người bản xứ dùng hằng ngày ở cơ quan và ở nhà để **hoãn, từ chối, xử lý, nghĩ ra** một việc gì đó. Điều khó nhất là **nghĩa của cả cụm thường không đoán được từ từng chữ**: put là đặt, off là tắt, nhưng put off lại là **hoãn**. Vì vậy hãy học mỗi cụm như một từ mới hoàn chỉnh."),
      table(
        ["Cụm động từ", "Nghĩa", "Cách nói trang trọng hơn", "Ví dụ"],
        ["look after", "chăm sóc, trông nom", "take care of", "My parents look after our son on weekdays."],
        ["deal with", "xử lý, giải quyết", "handle", "I'll deal with the complaint myself."],
        ["put off", "hoãn lại", "postpone", "Let's put off the meeting until Monday."],
        ["set up", "thành lập; bố trí, cài đặt", "establish", "She set up her own company last year."],
        ["turn down", "từ chối (lời mời, đề nghị)", "refuse, reject", "He turned down the job offer."],
        ["sort out", "giải quyết cho ổn thỏa", "resolve", "Can you sort out the problem with my laptop?"],
        ["find out", "tìm hiểu, biết được", "discover", "I found out that the shop was closed."],
        ["carry on", "tiếp tục", "continue", "Carry on working. I'll be back soon."],
        ["run out of", "hết, cạn", "have no … left", "We've run out of coffee."],
        ["get on with", "hợp với, hòa thuận với", "have a good relationship with", "I get on well with my manager."],
        ["come up with", "nghĩ ra (ý tưởng, giải pháp)", "think of, suggest", "Who came up with this idea?"],
        ["put up with", "chịu đựng", "tolerate", "I can't put up with the noise any more."],
      ),
      p("Muốn dùng đúng, bạn phải biết cụm đó thuộc nhóm nào. **Nhóm tách được** (put off, set up, turn down, sort out): tân ngữ là danh từ có thể đứng giữa hoặc đứng sau, nhưng nếu là **đại từ** (it, him, her, them) thì **bắt buộc đứng giữa**. **Nhóm không tách được** (look after, deal with): tân ngữ, kể cả đại từ, luôn đứng sau cả cụm. **Cụm ba thành phần** (run out of, get on with, come up with, put up with) không bao giờ tách ra. Carry on thường không có tân ngữ, sau nó dùng V-ing hoặc with + danh từ. Find out thường đi với mệnh đề: find out that…, find out whether…"),
      table(
        ["Nhóm", "Đúng", "Sai"],
        ["Tách được + danh từ", "put off the meeting / put the meeting off", "(cả hai cách đều đúng)"],
        ["Tách được + đại từ", "put it off, turn it down, sort it out", "put off it, turn down it"],
        ["Không tách được", "look after them, deal with it", "look them after, deal it with"],
        ["Ba thành phần", "run out of it, get on with her", "run out it, get on her with"],
        ["Không có tân ngữ", "carry on working, carry on with the report", "carry on the working"],
      ),
      ex("The client is ill, so we've put the meeting off until Friday.", "Khách hàng bị ốm nên chúng tôi đã hoãn cuộc họp đến thứ Sáu.", "Tân ngữ là danh từ: put the meeting off hay put off the meeting đều đúng."),
      ex("They offered me a job in Da Nang, but I turned it down.", "Họ mời tôi một công việc ở Đà Nẵng nhưng tôi đã từ chối.", "It là đại từ nên phải chen vào giữa: turned it down."),
      ex("My mother looks after them when we're at work.", "Mẹ tôi trông bọn trẻ khi chúng tôi đi làm.", "Look after không tách được: đại từ them đứng sau cả cụm."),
      ex("We've run out of printer paper. Can you order some more?", "Chúng ta hết giấy in rồi. Bạn đặt thêm được không?", "Cụm ba thành phần: run out of + thứ bị hết."),
      ex("I don't get on with my new flatmate. We argue about everything.", "Tôi không hợp với bạn cùng nhà mới. Chúng tôi cãi nhau về mọi chuyện.", "Get on with + người. Muốn nhấn mạnh thì thêm well: get on well with."),
      mistake("The deadline is too close. Can we put off it?", "The deadline is too close. Can we put it off?", "Tiếng Việt nói “hoãn nó lại” với động từ đứng trước, nên người Việt hay đặt it ra cuối. Với cụm tách được, đại từ bắt buộc đứng giữa: put it off."),
      mistake("My neighbour is away, so I'm looking her cat after.", "My neighbour is away, so I'm looking after her cat.", "Học xong quy tắc tách được, nhiều bạn tách luôn cả look after. Look after và deal with không bao giờ tách: look after it, deal with them."),
      mistake("We've run out paper, so I can't print the report.", "We've run out of paper, so I can't print the report.", "Tiếng Việt nói “hết giấy” không cần giới từ, nên người Việt hay bỏ of. Run out of là một khối ba chữ, thiếu of là sai."),
      p("Cụm động từ mang sắc thái **thân mật, tự nhiên**, rất hợp khi nói chuyện, nhắn tin hay viết email cho đồng nghiệp. Trong thông báo chính thức hoặc thư gửi khách hàng, người ta hay dùng động từ một chữ: **postpone** thay cho put off, **discover** thay cho find out, **refuse** thay cho turn down. Cũng nhớ lại bài Động từ theo sau: look forward to + V-ing và give up + V-ing, chữ to và up ở đây không kéo theo động từ nguyên mẫu."),
      ex("Because of the storm, the conference has been postponed. / They've put the conference off because of the storm.", "Vì cơn bão, hội nghị đã bị hoãn lại.", "Câu đầu dùng trong thông báo chính thức, câu sau dùng khi kể với đồng nghiệp."),
      tip("Khi nói, **nhấn giọng vào tiểu từ**, không nhấn vào động từ: put it OFF, turn it DOWN, sort it OUT. Với cụm ba thành phần, nhấn vào chữ giữa: run OUT of, come UP with, put UP with."),
      teacher("Lỗi tôi gặp nhiều nhất trong bài viết của học viên là đặt đại từ sai chỗ: put off it, turn down it. Cách sửa nhanh nhất là **học thuộc nguyên cụm có đại từ**, như học một câu: put it off, turn it down, look after them, deal with it. Mỗi tối, hãy nghĩ lại một việc bạn đã hoãn, đã từ chối hay đã xử lý trong ngày và nói một câu về nó. Sau vài tuần, những cụm này sẽ tự bật ra khi bạn cần."),
      summary(
        "Nghĩa của cụm động từ thường không đoán được từ từng chữ: put off là hoãn, turn down là từ chối.",
        "Cụm tách được (put off, set up, turn down, sort out): đại từ bắt buộc đứng giữa, put it off.",
        "Cụm không tách được (look after, deal with): tân ngữ luôn đứng sau cả cụm, look after them.",
        "Cụm ba thành phần (run out of, get on with, come up with, put up with) không bao giờ tách và không được bỏ chữ cuối.",
        "Cụm động từ nghe tự nhiên khi nói; văn bản trang trọng dùng postpone, discover, refuse.",
      ),
    ],
  },
  words: [
    word("request", "/rɪˈkwest/", "yêu cầu, lời đề nghị", "My manager turned down my request for a day off.", "re|quest", 1, "Kết thúc bằng cụm /st/: giữ cả /s/ lẫn /t/, đừng đọc thành “ri-quét”."),
    word("solution", "/səˈluː.ʃən/", "giải pháp", "We need to come up with a solution before Friday.", "so|lu|tion", 1, "Nhấn âm giữa: so-LU-tion. Âm cuối /ʃən/ đọc nhẹ và ngắn."),
    word("arrangement", "/əˈreɪndʒ.mənt/", "sự sắp xếp, sự chuẩn bị", "We have sorted out all the arrangements for the conference.", "ar|range|ment", 1, "Nhấn âm thứ hai: a-RANGE-ment. Đừng nuốt âm /dʒ/ ở giữa."),
    word("annoying", "/əˈnɔɪ.ɪŋ/", "gây khó chịu, phiền phức", "It's really annoying when the printer runs out of ink.", "an|noy|ing", 1),
    word("mess", "/mes/", "sự bừa bộn, tình trạng lộn xộn", "Sorry about the mess. I'll sort it out tonight.", "mess", 0, "Âm /e/ ngắn và kết thúc bằng /s/ rõ ràng, đừng đọc thành “mét”."),
    word("babysitter", "/ˈbeɪ.biˌsɪt.ə/", "người trông trẻ", "We need a babysitter to look after the kids on Saturday.", "ba|by|sit|ter", 0),
    word("issue", "/ˈɪʃ.uː/", "vấn đề (cần giải quyết)", "I'll deal with this issue first thing tomorrow.", "is|sue", 0, "Đọc /ˈɪʃ.uː/ với âm /ʃ/ (giống “s” uốn lưỡi), không đọc “i-xiu”."),
  ],
  exercises: [
    mc("b1-n16-1", "The printer isn't working because it has ___ ink.", ["run out", "run out of", "run off", "run out with"], 1, "Run out of + thứ bị hết: run out of ink. Thiếu of là lỗi người Việt hay mắc."),
    mc("b1-n16-2", "They offered Minh a better salary, but he ___ because he didn't want to move.", ["turned down it", "turned off it", "turned it off", "turned it down"], 3, "Turn down là từ chối, và đại từ it phải đứng giữa: turned it down. Turn off là tắt (máy, đèn)."),
    fill("b1-n16-3", "Don't worry about the children. My sister is looking ___ them this weekend. (trông nom)", ["after"], "Look after: trông nom, chăm sóc. Không tách được nên them đứng sau cả cụm."),
    fill("b1-n16-4", "The meeting was on Monday, but the client was ill, so we put ___ until Thursday. (hoãn nó)", ["it off"], "Put off là cụm tách được: đại từ it bắt buộc đứng giữa, put it off."),
    reorder("b1-n16-5", "She looks after her grandmother.", "Look after không tách được: tân ngữ her grandmother đứng sau cả cụm."),
    reorder("b1-n16-6", "We have run out of coffee.", "Run out of là một khối ba chữ, đứng liền nhau trước thứ bị hết."),
    listen("b1-n16-7", "We've put the meeting off until next Friday.", ["Chúng tôi đã hủy cuộc họp vào thứ Sáu tới.", "Chúng tôi đã hoãn cuộc họp đến thứ Sáu tuần sau.", "Chúng tôi đã tổ chức cuộc họp vào thứ Sáu.", "Chúng tôi đã kết thúc cuộc họp trước thứ Sáu."], 1, "Put off là hoãn lại, không phải hủy (cancel)."),
    listen("b1-n16-8", "She came up with a great solution to the problem.", ["Cô ấy đã nghĩ ra một giải pháp rất hay cho vấn đề.", "Cô ấy đã tìm thấy vấn đề trong giải pháp.", "Cô ấy đã đồng ý với giải pháp của chúng tôi.", "Cô ấy đã từ chối giải pháp đó."], 0, "Come up with: nghĩ ra một ý tưởng hoặc giải pháp."),
    correct("b1-n16-9", "The client is busy this week, so we have to put off it.", "The client is busy this week, so we have to put it off.", "Put off là cụm tách được: đại từ it bắt buộc đứng giữa put và off."),
    correct("b1-n16-10", "We've run out milk, so I'll buy some on the way home.", "We've run out of milk, so I'll buy some on the way home.", "Run out of không được bỏ of: run out of milk."),
    fill("b1-n16-11", "We need a new idea for the campaign. Can anyone come ___ a better one? (nghĩ ra)", ["up with"], "Come up with: nghĩ ra. Cụm ba thành phần, phải có đủ up và with."),
    fill("b1-n16-12", "Sorry I'm late. I had to deal ___ an angry customer. (xử lý)", ["with"], "Deal with: xử lý, giải quyết một người hoặc một việc."),
    reorder("b1-n16-13", "Who came up with this idea?", "Come up with + ý tưởng: ba chữ đứng liền nhau, tân ngữ this idea đứng sau."),
    correct("b1-n16-14", "My neighbour's son is ill, so I'm looking him after today.", "My neighbour's son is ill, so I'm looking after him today.", "Look after không tách được: đại từ him đứng sau cả cụm, looking after him."),
  ],
  speaking: [
    say("The client has put the meeting off until next Wednesday.", "Khách hàng đã hoãn cuộc họp đến thứ Tư tuần sau."),
    say("We've run out of paper, so I'll order some more today.", "Chúng ta hết giấy rồi, nên hôm nay tôi sẽ đặt thêm."),
    say("I get on well with my team, so I turned the offer down.", "Tôi rất hợp với nhóm của mình, nên tôi đã từ chối lời mời đó."),
  ],
  freeSpeaking: free(
    "Can you tell me about a problem you had to deal with recently, at work or at home? How did you sort it out?",
    "Kể về một vấn đề bạn vừa phải xử lý ở cơ quan hoặc ở nhà: chuyện gì xảy ra và bạn giải quyết thế nào. Dùng ít nhất bốn cụm động từ: deal with, find out, come up with, put off, carry on…",
    "Last month, the internet in our office stopped working two days before a big deadline. At first, we tried to carry on with our work on our phones, but it was too slow. My manager asked me to deal with it. I called the provider and found out that they were repairing a cable nearby. So I came up with a simple solution: we worked from a café for the afternoon, and we put the client meeting off until the next day.",
  ),
  dialogue: dialogue(
    "Một buổi sáng nhiều việc",
    "Sáng thứ Hai ở văn phòng, Mai và Duy cùng chuẩn bị một buổi đào tạo cho khách hàng thì nhận được email đổi lịch.",
    { A: "Mai", B: "Duy" },
    A("Duy, have you seen the email from the client? They want to put off Friday's training.", "Duy ơi, em đọc email của khách hàng chưa? Họ muốn hoãn buổi đào tạo hôm thứ Sáu."),
    B("Yes, I saw it. Their manager is ill, so they've asked to move it to next Wednesday.", "Em đọc rồi chị. Quản lý bên họ bị ốm nên họ xin dời sang thứ Tư tuần sau."),
    A("That's annoying. I've already set up the room and booked lunch for twenty people.", "Phiền thật. Chị đã bố trí phòng và đặt cơm trưa cho hai mươi người rồi."),
    B("Don't worry, I'll deal with the restaurant. I'm sure they can change the date.", "Chị đừng lo, để em xử lý bên nhà hàng. Em chắc họ đổi ngày được."),
    A("Thanks. And the printer has run out of ink again, so I can't print the handouts.", "Cảm ơn em. Mà máy in lại hết mực rồi, chị không in được tài liệu phát tay."),
    B("I'll order some more. By the way, did Lam accept the job in Ho Chi Minh City?", "Em sẽ đặt thêm. À, anh Lâm có nhận công việc ở Thành phố Hồ Chí Minh không chị?"),
    A("No, he turned it down. He gets on really well with everyone here, and his kids are still small.", "Không, anh ấy từ chối rồi. Anh ấy rất hợp với mọi người ở đây, mà con anh ấy còn nhỏ."),
    B("I can understand that. So who's going to look after the new project?", "Em hiểu mà. Vậy ai sẽ phụ trách dự án mới hả chị?"),
    A("Nobody knows yet. Ms Do is trying to come up with a plan this week.", "Chưa ai biết. Chị Đỗ đang cố nghĩ ra một phương án trong tuần này."),
    B("Well, we can't just wait. Let's carry on with the preparation for Wednesday.", "Thôi, mình không ngồi chờ được. Cứ tiếp tục chuẩn bị cho thứ Tư đã chị."),
    A("Good idea. I'll find out whether the trainer is free that day.", "Ý hay đấy. Chị sẽ hỏi xem hôm đó giảng viên có rảnh không."),
    B("Great. If she isn't, we'll have to sort something out quickly.", "Tuyệt. Nếu chị ấy không rảnh thì mình phải tìm cách giải quyết nhanh."),
  ),
  dialogueQuestions: [
    listenQ("b1-n16-d1", "Why does the client want to change the date of the training?", "Yes, I saw it. Their manager is ill, so they've asked to move it to next Wednesday.", ["Their manager is ill.", "The room is not ready.", "The trainer is busy."], 0, "Their manager is ill: quản lý bên khách hàng bị ốm."),
    mc("b1-n16-d2", "What will Duy probably do about the lunch?", ["Cancel it completely", "Call the restaurant and move the booking to Wednesday", "Ask Mai to pay for it", "Order lunch for Friday anyway"], 1, "Câu suy luận: Duy nói I'll deal with the restaurant và tin rằng họ đổi ngày được, nên anh sẽ liên hệ nhà hàng để dời đặt cơm sang thứ Tư."),
    mc("b1-n16-d3", "Why did Lam most likely turn down the job?", ["The salary was too low.", "He wanted to look after the new project.", "He didn't want to leave a team he likes or move his young family.", "Ms Do told him not to go."], 2, "Câu suy luận: Mai không nói thẳng lý do, nhưng nhắc rằng anh rất hợp với mọi người ở đây và con còn nhỏ."),
  ],
  reading: reading({
    title: "Advice column: living with a messy flatmate",
    text: `Dear Thu,

I'm twenty-four and I share a small flat in Hanoi with a girl from my office. When we moved in last year, we got on well, but things have changed. She never washes her dishes, she leaves her clothes all over the living room, and she plays loud music until midnight. Last month we ran out of rice three times because she uses things and never replaces them. I've tried to talk to her, but she always says she is too tired and puts the conversation off. I don't want to lose a friend, but I can't put up with this much longer. What should I do? Kim Anh

Dear Kim Anh,

First of all, you are not being difficult. Sharing a home is never easy, and most problems like yours start small and slowly get bigger.

My advice is to choose a calm moment, not the evening after a bad day at work, and ask for half an hour to talk. Don't start with a list of complaints. Instead, explain how you feel: "I find it hard to relax when the kitchen is messy." People listen more when they don't feel attacked.

Next, try to agree on a few simple rules together. Many flatmates make a weekly cleaning plan and keep a shared shopping fund, so nobody has to remember who bought what. Write the plan down and stick it on the fridge. It sounds childish, but it works.

If she says no to every suggestion, it may be time to think about your own future. Find out how much notice you need to give the landlord, and look at other flats quietly. You may never need them, but knowing you have a choice will make you feel stronger.

Good luck, and let me know how it goes.

Thu`,
    glossary: [
      ["attacked", "bị công kích, bị tấn công"],
      ["fund", "quỹ (tiền chung)"],
      ["childish", "trẻ con, ấu trĩ"],
      ["notice", "thông báo trước (khi chuyển đi)"],
    ],
    questions: [
      mc("b1-n16-r1", "What is the main purpose of Thu's reply?", ["To tell Kim Anh to move out immediately", "To give Kim Anh practical steps for dealing with her flatmate", "To explain how to find a cheap flat in Hanoi", "To say that the flatmate is a bad person"], 1, "Cả thư trả lời đưa ra từng bước cụ thể: chọn lúc bình tĩnh để nói chuyện, cùng đặt quy tắc, rồi mới tính đến chuyện chuyển nhà."),
      mc("b1-n16-r2", "Why does the flatmate keep putting off the conversation?", ["She says she is too tired.", "She is always at work.", "She doesn't speak to Kim Anh any more.", "She wants to move out."], 0, "She always says she is too tired and puts the conversation off."),
      fill("b1-n16-r3", "Thu suggests making a weekly cleaning ___ and sticking it on the fridge.", ["plan"], "Many flatmates make a weekly cleaning plan… stick it on the fridge."),
      mc("b1-n16-r4", "According to Thu, why should Kim Anh explain her feelings instead of listing complaints?", ["Her flatmate is too tired to listen to a list.", "The landlord prefers it.", "People listen more when they don't feel attacked.", "It is quicker."], 2, "People listen more when they don't feel attacked."),
      mc("b1-n16-r5", "Why does Thu suggest looking at other flats “quietly”?", ["Flats in Hanoi are very cheap at the moment.", "The landlord does not allow it.", "Her flatmate has already found a new flat.", "Kim Anh may not need to move, so there is no reason to start a fight."], 3, "Câu suy luận: Thu nói You may never need them, nên tìm nhà một cách lặng lẽ để không làm căng thẳng thêm với bạn cùng nhà."),
    ],
  }),
  task: task({
    prompt: "Viết email (90–120 từ) cho một đồng nghiệp, báo về vài vấn đề trong tuần ở văn phòng và cách bạn đang xử lý. Dùng ít nhất năm cụm động từ trong bài.",
    hints: [
      "Mỗi vấn đề một câu hoặc hai câu: First…, Second…, Finally…",
      "Dùng đại từ với cụm tách được: put it off, sort it out, turn it down.",
      "Kết thư bằng một lời nhờ: Could you…? và I'll deal with the rest.",
    ],
    model: "Hi Nam, I'm writing about a few issues in the office this week. First, we've run out of paper and printer ink again, so I've ordered some more. It should arrive on Thursday. Second, the client called this morning and asked to put off our meeting. I've moved it to next Monday at ten, so please don't forget. I've also set up a video call for Mr Ito, because he can't come in person. Finally, Ms Do has asked us to come up with some ideas for the new website. Could you think about it and send me two or three ideas by Friday? I'll deal with the rest. Thanks, Linh",
    checklist: [
      "Dùng ít nhất năm cụm động từ khác nhau trong bài.",
      "Đại từ đứng giữa với cụm tách được: put it off, sort it out.",
      "Look after và deal with không bị tách ra.",
      "Cụm ba thành phần có đủ chữ: run out of, come up with, get on with.",
      "Giọng thân mật, hợp với email gửi đồng nghiệp.",
    ],
    minWords: 90,
  }),
});
