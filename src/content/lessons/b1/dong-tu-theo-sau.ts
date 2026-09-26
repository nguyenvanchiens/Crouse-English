import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "dong-tu-theo-sau",
  title: "Động từ theo sau là gì?",
  minutes: 30,
  lecture: {
    title: "Động từ + to V và động từ + V-ing",
    blocks: [
      p("Tiếng Việt ghép hai động từ rất tự do: “tôi **thích nấu** ăn”, “tôi **quyết định nghỉ** việc”, không cần thêm gì. Tiếng Anh thì khác: động từ đứng sau phải có hình thức do **động từ đứng trước quyết định**, hoặc **to + V**, hoặc **V-ing**. Không có quy tắc tuyệt đối, nên ta học theo nhóm."),
      table(
        ["Theo sau là", "Động từ thường gặp", "Ví dụ"],
        ["to + V", "want, decide, hope, plan, promise, refuse, agree, learn, need, manage, would like", "I've decided to change my job."],
        ["V-ing", "enjoy, avoid, finish, mind, suggest, consider, keep, practise, delay, risk, give up", "I enjoy cooking for my family."],
        ["Cả hai, nghĩa gần như không đổi", "like, love, hate, start, begin", "It started raining. / It started to rain."],
      ),
      ex("She hopes to study abroad next year.", "Cô ấy hy vọng sẽ đi du học vào năm sau."),
      ex("We finished eating and asked for the bill.", "Chúng tôi ăn xong và gọi thanh toán."),
      ex("Would you mind closing the door?", "Bạn có phiền đóng cửa giúp tôi không?", "Would you mind + V-ing là cách nhờ rất lịch sự. Nếu đồng ý giúp, trả lời No, not at all (không phiền gì cả)."),
      p("Quy tắc chắc chắn nhất: **sau giới từ hầu hết là V-ing**. Các giới từ hay gặp: in, at, of, about, for, without, instead of, before, after. Ngoại lệ hiếm: sau but / except có thể dùng động từ nguyên mẫu (He did nothing but complain)."),
      table(
        ["Cụm", "Ví dụ"],
        ["be interested in + V-ing", "I'm interested in learning Japanese."],
        ["be good at + V-ing", "He's good at fixing computers."],
        ["thank you for + V-ing", "Thank you for helping me."],
        ["look forward to + V-ing", "I look forward to hearing from you."],
        ["before / after / without + V-ing", "Wash your hands before eating."],
      ),
      ex("He left without saying goodbye.", "Anh ấy bỏ đi mà không chào một tiếng."),
      tip("Mẹo nhớ: các động từ đi với **to V** thường hướng về **tương lai**, chuyện chưa làm (want, hope, plan, decide, promise). Các động từ đi với **V-ing** thường nói về **việc đang có, đang trải qua** (enjoy, finish, avoid, mind). Mẹo này đúng với phần lớn trường hợp, không phải tất cả, nên vẫn cần học thuộc danh sách."),
      p("Nhờ nhóm động từ đi với to V, bạn nói được về **ước mơ, hy vọng và dự định** của mình: **My dream is to…** (ước mơ của tôi là…), **I hope to…**, **I'd love to…**, **I'm planning to…**. Nếu kế hoạch còn đang cân nhắc, dùng **I'm thinking of + V-ing** hoặc **I'm considering + V-ing**. Of là giới từ, nên theo sau là V-ing."),
      ex("My dream is to open a small café by the sea. I'm thinking of taking a business course first.", "Ước mơ của tôi là mở một quán cà phê nhỏ bên bờ biển. Tôi đang tính học một khóa kinh doanh trước.", "My dream is + to V để nói ước mơ; think of + V-ing để nói dự định còn đang cân nhắc."),
      mistake("I enjoy to cook Vietnamese food.", "I enjoy cooking Vietnamese food.", "Tiếng Việt không đổi hình thức động từ nên người Việt hay chọn đại to V. Enjoy luôn đi với V-ing."),
      mistake("I look forward to hear from you.", "I look forward to hearing from you.", "Chữ to ở đây là giới từ, không phải to của động từ nguyên mẫu, nên theo sau phải là V-ing. Đây là lỗi rất hay gặp trong email công việc."),
      mistake("She decided going home early.", "She decided to go home early.", "Decide luôn đi với to V."),
      teacher("Khi đứng lớp, tôi chưa thấy ai nhớ được danh sách này bằng cách chép một trăm lần. Cách hiệu quả là **học động từ kèm luôn cái đuôi**: đừng học enjoy, hãy học **enjoy doing**; đừng học decide, hãy học **decide to do**. Các bạn viết vào sổ tay đúng như vậy. Mỗi khi viết email, trước khi gửi hãy dò lại những chữ look forward to, thank you for, interested in, xem sau chúng đã là V-ing chưa. Thói quen nhỏ này giúp các bạn tránh một lỗi mà sếp nước ngoài nhìn thấy ngay."),
      summary(
        "to + V sau want, decide, hope, plan, promise, refuse, agree, need, manage, would like.",
        "V-ing sau enjoy, avoid, finish, mind, suggest, consider, keep, practise, delay, risk, give up.",
        "Sau giới từ hầu hết là V-ing: interested in, good at, thank you for, before / after / without (ngoại lệ: nothing but / except + V nguyên mẫu).",
        "Look forward to + V-ing: chữ to ở đây là giới từ.",
        "Học động từ kèm luôn cái đuôi: enjoy doing, decide to do.",
      ),
    ],
  },
  words: [
    word("avoid", "/əˈvɔɪd/", "tránh", "I try to avoid driving in the rush hour.", "a|void", 1, "Luôn đi với V-ing: avoid doing something."),
    word("manage", "/ˈmæn.ɪdʒ/", "xoay xở được, làm được (việc khó)", "I finally managed to find a parking space.", "man|age", 0, "Theo sau là to V: manage to do. Âm cuối là /ɪdʒ/, không đọc thành “ma-nây”."),
    word("delay", "/dɪˈleɪ/", "trì hoãn, chần chừ", "Don't delay paying your electricity bill.", "de|lay", 1, "Động từ delay đi với V-ing: delay doing something."),
    word("promise", "/ˈprɒm.ɪs/", "hứa", "I promise to call you tonight.", "prom|ise", 0, "Trọng âm ở âm đầu; âm cuối là /ɪs/, không đọc thành “pro-mai”."),
    word("risk", "/rɪsk/", "liều, có nguy cơ; sự rủi ro", "I don't want to risk losing my job.", "risk", 0, "Động từ risk đi với V-ing: risk losing. Nhớ đọc đủ cụm /sk/ ở cuối."),
    word("mind", "/maɪnd/", "phiền, bận tâm", "Do you mind waiting a few minutes?", "mind", 0),
    word("consider", "/kənˈsɪd.ə/", "cân nhắc, xem xét", "We're considering moving to Da Nang.", "con|sid|er", 1),
    word("hesitate", "/ˈhez.ɪ.teɪt/", "do dự, ngần ngại", "Please don't hesitate to contact me.", "hes|i|tate", 0, "Chữ s ở đây đọc là /z/."),
  ],
  exercises: [
    mc("b1-n07-1", "I've decided ___ a new job.", ["looking for", "to look for", "look for", "to looking for"], 1, "Decide đi với to + V: decided to look for."),
    mc("b1-n07-2", "Would you mind ___ the window?", ["to open", "open", "opening"], 2, "Mind luôn đi với V-ing: Would you mind opening…?"),
    fill("b1-n07-3", "She finished ___ the report at midnight. (write)", ["writing"], "Finish đi với V-ing: finished writing."),
    fill("b1-n07-4", "I'm looking forward to ___ you next week. (see)", ["seeing"], "To trong look forward to là giới từ, nên theo sau là V-ing."),
    reorder("b1-n07-5", "She refused to answer my question.", "Refuse đi với to + V: refused to answer."),
    reorder("b1-n07-6", "He is very good at fixing computers.", "Sau giới từ at dùng V-ing: good at fixing."),
    listen("b1-n07-7", "I avoid driving in the rush hour.", ["Tôi thích lái xe vào giờ cao điểm.", "Tôi tránh lái xe vào giờ cao điểm.", "Tôi chưa bao giờ học lái xe."], 1, "Avoid + V-ing: tránh làm việc gì."),
    listen("b1-n07-8", "Thank you for coming to my birthday party.", ["Cảm ơn bạn đã đến dự tiệc sinh nhật của tôi.", "Bạn có đến dự tiệc sinh nhật của tôi không?", "Tôi xin lỗi vì không đến dự tiệc sinh nhật của bạn."], 0, "Thank you for + V-ing: cảm ơn vì đã làm gì."),
    correct("b1-n07-9", "We're thinking of to open a small shop next year.", "We're thinking of opening a small shop next year.", "Of là giới từ, mà sau giới từ (trừ but, except) là V-ing: thinking of opening."),
    correct("b1-n07-10", "She promised calling me when she got home.", "She promised to call me when she got home.", "Promise đi với to + V: promised to call."),
  ],
  speaking: [
    say("I enjoy walking in the park after dinner.", "Tôi thích đi dạo trong công viên sau bữa tối."),
    say("My dream is to open a small café by the sea.", "Ước mơ của tôi là mở một quán cà phê nhỏ bên bờ biển."),
    say("Thank you for helping me with my homework.", "Cảm ơn bạn đã giúp tôi làm bài tập."),
  ],
  freeSpeaking: free(
    "What do you enjoy doing in your free time, and what do you hope to do next year?",
    "Nói về những việc bạn thích làm lúc rảnh (enjoy, avoid, keep + V-ing) và dự định năm tới của bạn (hope, plan, decide + to V).",
    "In my free time, I enjoy cooking, and I love walking by the river after dinner. I try to avoid looking at my phone late at night. Next year, I hope to visit Japan with my sister, and I've decided to take a Japanese course before the trip. I'm really looking forward to trying real ramen!",
  ),
  dialogue: dialogue(
    "Dự định năm tới",
    "Nam và Vy gặp nhau ở quán cà phê cuối tuần, kể cho nhau nghe về công việc và dự định sắp tới.",
    { A: "Nam", B: "Vy" },
    A("So, how's your new job? Do you enjoy working there?", "Công việc mới thế nào? Bạn có thích làm ở đó không?"),
    B("Yes, I do. And I've decided to learn Japanese, because my company is planning to open an office in Osaka.", "Có chứ. Mình còn quyết định học tiếng Nhật, vì công ty mình đang có kế hoạch mở văn phòng ở Osaka."),
    A("That's great! Are you thinking of moving there?", "Hay quá! Bạn đang tính chuyển sang đó à?"),
    B("Maybe. My manager suggested applying for a job there. I'm considering it.", "Có thể. Sếp mình gợi ý nộp đơn vào vị trí ở đó. Mình đang cân nhắc."),
    A("I hope to change jobs too. I really want to avoid spending two hours in traffic every day.", "Mình cũng hy vọng đổi việc. Mình thật sự muốn tránh mất hai tiếng kẹt xe mỗi ngày."),
    B("Have you considered working from home? Many companies allow it now.", "Bạn đã cân nhắc làm việc ở nhà chưa? Giờ nhiều công ty cho phép lắm."),
    A("Good idea. I'm good at designing websites, so I could work online.", "Ý hay đấy. Mình giỏi thiết kế trang web, nên có thể làm trực tuyến."),
    B("Exactly. Don't hesitate to ask me if you need help with your CV.", "Đúng vậy. Đừng ngại hỏi mình nếu bạn cần giúp viết CV nhé."),
    A("Thanks for offering. I promise to buy you dinner when I find a new job!", "Cảm ơn bạn đã ngỏ ý. Mình hứa sẽ mời bạn ăn tối khi tìm được việc mới!"),
    B("Deal! I'm looking forward to having that dinner.", "Chốt nhé! Mình mong bữa tối đó lắm đấy."),
  ),
  dialogueQuestions: [
    listenQ("b1-n07-d1", "Why has Vy decided to learn Japanese?", "Yes, I do. And I've decided to learn Japanese, because my company is planning to open an office in Osaka.", ["She is going to Japan on holiday.", "Her company is planning to open an office in Osaka.", "Her manager only speaks Japanese.", "She wants to watch Japanese films."], 1, "Vy nói: because my company is planning to open an office in Osaka."),
    mc("b1-n07-d2", "What does Nam want to avoid?", ["Working from home", "Designing websites", "Asking friends for help", "Spending two hours in traffic every day"], 3, "Nam nói: I really want to avoid spending two hours in traffic every day."),
    listenQ("b1-n07-d3", "What does Nam promise to do?", "Thanks for offering. I promise to buy you dinner when I find a new job!", ["Buy Vy dinner when he finds a new job", "Help Vy write her CV", "Visit Vy in Osaka next year"], 0, "I promise to buy you dinner when I find a new job: Nam hứa mời Vy ăn tối khi tìm được việc mới."),
  ],
  reading: reading({
    title: "Ask Linh: should I leave my job?",
    text: `Dear Linh,

I'm twenty-six and I work as an accountant for a big company in Ho Chi Minh City. The salary is good, but I don't enjoy doing the same thing every day. I've always been interested in cooking, and my dream is to open a small restaurant. My parents keep telling me to stay in my job. They say I can't afford to lose a stable income. I've considered taking a cooking course at the weekend, but I keep delaying it. What should I do? Tuan

Dear Tuan,

Thank you for writing to me. Many young people feel the same way, so you are not alone.

First, don't rush. I suggest keeping your job for now and trying a weekend cooking course. That way, you won't risk losing your income, and you can find out whether you really enjoy cooking every day, not just for friends at home.

Second, stop delaying. Choose a course this week and promise yourself that you will finish it. After that, try working in a restaurant kitchen for a few evenings. It's hard, hot work, and many people give up quickly.

Finally, talk to your parents again. Avoid arguing with them. Instead, show them a clear plan. Parents usually worry less when they can see that their child has thought carefully.

I look forward to hearing how it goes! Linh`,
    glossary: [
      ["accountant", "kế toán viên"],
      ["stable", "ổn định"],
      ["income", "thu nhập"],
      ["rush", "vội vàng"],
      ["argue", "cãi nhau, tranh cãi"],
    ],
    questions: [
      mc("b1-n07-r1", "What is Tuan's main problem?", ["He has just lost his job.", "He can't decide whether to follow his dream or keep his job.", "He doesn't know how to cook.", "His restaurant is losing money."], 1, "Tuấn có việc lương tốt nhưng mơ mở nhà hàng, và chưa biết nên làm gì."),
      mc("b1-n07-r2", "What does Linh suggest doing first?", ["Leaving the job immediately", "Opening a restaurant with his parents", "Keeping the job and taking a weekend cooking course"], 2, "I suggest keeping your job for now and trying a weekend cooking course."),
      fill("b1-n07-r3", "Tuan has considered taking a cooking course, but he keeps ___ it.", ["delaying"], "Keep + V-ing: I keep delaying it."),
      mc("b1-n07-r4", "Why do Tuan's parents want him to stay in his job?", ["They think he can't afford to lose a stable income.", "They work for the same company.", "They don't like restaurant food.", "They want him to become a manager."], 0, "They say I can't afford to lose a stable income."),
      mc("b1-n07-r5", "Why does Linh probably suggest working in a restaurant kitchen for a few evenings?", ["To earn money for the cooking course", "Because his parents own a restaurant", "So that Tuan can see how hard restaurant work really is", "Because the cooking course is full"], 2, "Câu suy luận: Linh nói đó là việc vất vả và nhiều người bỏ cuộc nhanh, nên muốn Tuấn tự trải nghiệm trước khi quyết định."),
    ],
  }),
  task: task({
    prompt: "Viết một email ngắn (90–120 từ) gửi một người bạn, kể về những việc bạn thích làm dạo này và dự định của bạn trong năm tới.",
    hints: [
      "Dùng enjoy / avoid / keep + V-ing cho thói quen.",
      "Dùng hope / plan / decide + to V cho dự định.",
      "Thêm ít nhất một cụm giới từ + V-ing: interested in, good at, before / after.",
      "Kết thư bằng I look forward to hearing from you.",
    ],
    model: "Hi Lan, how are you? These days I really enjoy cooking for my family at the weekend, and I've started going to the gym after work. I try to avoid eating fast food, but it isn't easy! I've decided to take a baking course next year because I'm interested in opening a small cake shop one day. I also hope to visit you in Da Nang in the summer. I promise to bring you some of my cakes. My brother has suggested joining a swimming club with him, so I'm thinking of trying it too. I look forward to hearing from you. Best wishes, Hoa",
    checklist: [
      "Có ít nhất hai động từ + V-ing (enjoy, avoid, keep, finish…).",
      "Có ít nhất hai động từ + to V (hope, plan, decide, promise…).",
      "Sau giới từ (in, at, for, after…) dùng V-ing.",
      "Viết đúng look forward to hearing, không viết to hear.",
      "Không có lỗi kiểu enjoy to cook hay decided going.",
    ],
    minWords: 90,
  }),
});
