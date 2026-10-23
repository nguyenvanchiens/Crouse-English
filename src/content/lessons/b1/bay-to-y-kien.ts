import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "bay-to-y-kien",
  title: "Bày tỏ ý kiến",
  minutes: 32,
  lecture: {
    title: "Nêu ý kiến, đồng ý và phản đối lịch sự",
    blocks: [
      p("Trong cuộc họp, sếp người nước ngoài quay sang hỏi: **What do you think?** Cả phòng im lặng. Nhiều người Việt có ý kiến rất hay nhưng không dám nói, vì sợ nói sai hoặc sợ làm người khác phật lòng. Bài này cho bạn những câu mẫu để nêu ý kiến, đồng ý và phản đối mà vẫn giữ được hòa khí."),
      p("Người Việt thường hoặc nói rất thẳng “You're wrong”, hoặc im lặng vì sợ mất lòng. Trong tiếng Anh, bạn hoàn toàn có thể phản đối, nhưng thường **làm mềm** câu nói trước khi đưa ra ý kiến khác."),
      table(
        ["Mục đích", "Thân mật", "Trang trọng hơn"],
        ["Nêu ý kiến", "I think… / I feel…", "In my opinion… / As far as I'm concerned…"],
        ["Đồng ý", "I agree. / Exactly.", "I completely agree with you."],
        ["Phản đối lịch sự", "I'm not so sure.", "I see your point, but…"],
      ),
      ex("In my opinion, working from home saves a lot of time.", "Theo tôi, làm việc tại nhà tiết kiệm được rất nhiều thời gian."),
      ex("I see your point, but I don't think it works for everyone.", "Tôi hiểu ý bạn, nhưng tôi không nghĩ nó phù hợp với tất cả mọi người.", "Thừa nhận ý người kia trước, rồi mới đưa ý mình. Chú ý người bản xứ thường nói I don't think it works, nghe tự nhiên và mềm hơn I think it doesn't work."),
      ex("I'm not so sure. What about the cost?", "Tôi không chắc lắm. Thế còn chi phí thì sao?", "Phản đối bằng một câu hỏi là cách rất mềm: người nghe tự nhận ra vấn đề mà không thấy bị bác bỏ."),
      p("Để lập luận rõ ràng, hãy dùng từ nối: **because** (vì) để nêu lý do, **however** (tuy nhiên) để nối hai câu trái ý nhau, **although** (mặc dù) để nối hai vế trong cùng một câu."),
      table(
        ["Từ nối", "Vị trí", "Ví dụ"],
        ["because", "trước vế nêu lý do", "I agree because it saves money."],
        ["however", "đầu câu mới, có dấu phẩy theo sau", "It's cheap. However, it's slow."],
        ["although", "đầu một vế, nối hai vế trong cùng một câu", "Although it's cheap, it's slow."],
      ),
      ex("Although the city is noisy, I love living here.", "Mặc dù thành phố ồn ào, tôi vẫn thích sống ở đây."),
      ex("Public transport is cheap. However, it is often crowded.", "Phương tiện công cộng rẻ. Tuy nhiên, nó thường rất đông."),
      tip("**However** thường đứng đầu câu mới và có dấu phẩy theo sau. **Although** phải nối hai vế trong một câu, không đứng một mình. Khi nói, hãy ngừng một nhịp ngắn sau however để người nghe biết ý sắp đổi chiều."),
      mistake("Although it was raining, but we went out.", "Although it was raining, we went out.", "Tiếng Việt nói “mặc dù… nhưng…”, còn tiếng Anh chỉ dùng một trong hai: although hoặc but."),
      mistake("I am agree with you.", "I agree with you.", "Người Việt quen khuôn “Tôi là…” = I am…, và dịch “tôi đồng ý” như một trạng thái. Nhưng agree là động từ, không cần thêm am."),
      mistake("You're wrong.", "I'm not sure that's right.", "Câu đúng ngữ pháp nhưng quá thẳng, trong công việc nghe như đang gây gổ. Giữa bạn bè thân nói thẳng thì không sao, nhưng nơi công sở, người nói tiếng Anh gần như luôn làm mềm lời phản đối."),
      teacher("Nhiều bạn hay hỏi tôi: “Phản đối sếp có sao không?” Tôi luôn trả lời: **phản đối không sao, cách phản đối mới quan trọng**. Công thức tôi dạy ở mọi lớp chỉ có ba bước: công nhận ý người kia, nói ý mình, đưa một lý do. Các bạn hãy thuộc lòng ba câu I see your point, but…, I'm not so sure… và In my opinion…, rồi mỗi ngày dùng thử một lần, kể cả khi bàn chuyện ăn trưa."),
      summary(
        "Nêu ý kiến: **I think… / In my opinion… / As far as I'm concerned…**",
        "Phản đối lịch sự theo ba bước: công nhận ý người kia, nói ý mình, đưa lý do: **I see your point, but…**",
        "**Agree** là động từ: I agree with you, không nói I am agree.",
        "**Although** nối hai vế trong một câu và không đi kèm but; **however** đứng đầu câu mới, có dấu phẩy theo sau.",
        "Nói **I don't think it works**, tự nhiên và mềm hơn I think it doesn't work.",
      ),
    ],
  },
  words: [
    word("opinion", "/əˈpɪn.jən/", "ý kiến, quan điểm", "In my opinion, the plan is too expensive.", "o|pin|ion", 1),
    word("agree", "/əˈɡriː/", "đồng ý", "I agree with you completely.", "a|gree", 1),
    word("however", "/haʊˈev.ə/", "tuy nhiên", "The hotel was nice. However, it was far from the beach.", "how|ev|er", 1),
    word("although", "/ɔːlˈðəʊ/", "mặc dù", "Although he was tired, he finished the report.", "al|though", 1, "Chữ gh không đọc. Âm th ở đây là /ð/, rung dây thanh."),
    word("argument", "/ˈɑːɡ.jə.mənt/", "lập luận; cuộc tranh cãi", "That's a strong argument.", "ar|gu|ment", 0),
    word("disadvantage", "/ˌdɪs.ədˈvɑːn.tɪdʒ/", "bất lợi, nhược điểm", "The main disadvantage is the price.", "dis|ad|van|tage", 2),
    word("concerned", "/kənˈsɜːnd/", "liên quan; lo ngại", "As far as I'm concerned, it's a good idea.", "con|cerned", 1, "As far as I'm concerned nghĩa là “theo tôi thấy”."),
  ],
  exercises: [
    mc("b1-5-1", "___ it was expensive, I bought it.", ["However", "Despite", "Although", "But"], 2, "Although nối hai vế trái ý trong cùng một câu. Despite phải đi với danh từ hoặc V-ing, không đi với cả một mệnh đề."),
    mc("b1-5-2", "I ___ with you. It's a great idea.", ["am agree", "am agreeing", "agree"], 2, "Agree là động từ: I agree with you. Không thêm am (am agree), và cũng không dùng thì tiếp diễn (am agreeing) vì agree là động từ chỉ trạng thái."),
    fill("b1-5-3", "In my ___, schools should start later in the morning. (ý kiến, quan điểm)", ["opinion", "view"], "In my opinion hoặc in my view: theo ý kiến của tôi."),
    fill("b1-5-4", "I stayed at home yesterday ___ I was ill. (vì)", ["because", "as", "since"], "Nêu lý do: because."),
    reorder("b1-5-5", "What do you think about this idea?", "Câu hỏi xin ý kiến: What do you think about + danh từ? Trợ động từ do đứng trước chủ ngữ you."),
    reorder("b1-5-6", "I see what you mean.", "I see what you mean: tôi hiểu ý bạn. Đây là câu thừa nhận ý người khác trước khi nói ý mình. Trong mệnh đề what you mean, chủ ngữ you đứng trước động từ, không đảo như câu hỏi."),
    listen("b1-5-7", "I'm not so sure about that.", ["Tôi hoàn toàn đồng ý.", "Tôi không chắc lắm về điều đó.", "Tôi chắc chắn về điều đó."], 1, "I'm not so sure là cách phản đối nhẹ nhàng."),
    listen("b1-5-8", "Working from home is convenient. However, it can be lonely.", ["Làm việc tại nhà tiện lợi và không bao giờ thấy cô đơn.", "Làm việc tại nhà bất tiện nhưng vui.", "Làm việc ở văn phòng thì cô đơn hơn.", "Làm việc tại nhà tiện lợi. Tuy nhiên, nó có thể khiến bạn cô đơn."], 3),
    correct("b1-5-9", "Although the film was long, but it was very interesting.", ["Although the film was long, it was very interesting.", "The film was long, but it was very interesting."], "Although và but không đi cùng nhau trong một câu. Giữ although thì bỏ but, hoặc bỏ although và giữ but."),
    correct("b1-5-10", "I'm not agree with this plan.", ["I don't agree with this plan.", "I disagree with this plan."], "Agree là động từ, nên phủ định bằng don't: I don't agree. Không dùng am / am not trước agree."),
    fill("b1-5-11", "___ the hotel was lovely, the beach was a long way away. (mặc dù)", ["Although", "Though", "Even though", "While", "Whilst"], "Hai vế trái ý trong cùng một câu, vế đầu mở bằng Although (hoặc Though, Even though). Không dùng However, vì however không nối hai vế trong một câu."),
    correct("b1-5-12", "Although the room was small, however it was very clean.", ["Although the room was small, it was very clean.", "The room was small. However, it was very clean.", "The room was small, but it was very clean."], "Tiếng Việt nói “mặc dù… nhưng / tuy nhiên…”, nên người học ghép although với however. Tiếng Anh chỉ dùng một từ nối: although nối hai vế trong cùng một câu, còn however đứng đầu câu mới, có dấu phẩy theo sau."),
    reorder("b1-5-13", "I don't think it is a good idea.", "Người bản xứ đặt phủ định ở think: I don't think it is…, tự nhiên và mềm hơn I think it isn't a good idea."),
    correct("b1-5-14", "As far as I concern, the plan is too risky.", ["As far as I'm concerned, the plan is too risky.", "As far as I am concerned, the plan is too risky."], "Cụm cố định là as far as I'm concerned (be + concerned), nghĩa là “theo tôi thấy”. Không nói as far as I concern."),
  ],
  freeSpeaking: free(
    "Do you think students should be allowed to use phones in class? Why or why not?",
    "Nêu rõ quan điểm của bạn, đưa hai lý do, rồi công nhận và phản hồi lịch sự một ý kiến ngược lại. Dùng in my opinion, because, however, although.",
    "In my opinion, students should be allowed to use phones in class, but only for learning. Phones help us look up new words and find information quickly. However, some students play games or chat with friends. I see why teachers are worried, but I don't think a total ban is the answer. Although rules are important, teachers can also show us how to use phones wisely.",
  ),
  dialogueQuestions: [
    listenQ("b1-5-d1", "Why does Huong like the idea of working from home on Fridays?", "In my opinion, it's a great idea because we'll save a lot of time on the road.", ["They'll save time on the road.", "She feels lonely in the office.", "The internet is faster at home.", "Customers prefer online meetings."], 0, "Hương đưa lý do với because: we'll save a lot of time on the road."),
    mc("b1-5-d2", "What does Huong suggest about meetings with customers?", ["Holding all of them online", "Meeting customers on Thursday", "Cancelling them on Fridays and Mondays"], 1, "We can meet customers on Thursday and work from home on Friday."),
    mc("b1-5-d3", "Why does Huong say she completely agrees at the end?", ["She is afraid to disagree with her manager.", "David has agreed to cancel all meetings with customers.", "David says the company can help with her worry about the internet.", "She wants to work from home every day."], 2, "Hương nói Then I completely agree ngay sau khi David bảo công ty có thể hỗ trợ chuyện mạng. Chữ Then cho thấy lý do: mối lo của cô đã được giải quyết."),
  ],
  reading: reading({
    title: "Letter to the editor: Car-free weekend evenings",
    text: `Dear Editor,

I am writing about the city's decision to keep cars and motorbikes out of the streets around Hoan Kiem Lake on weekend evenings. In my opinion, it is an excellent idea, and I hope the city will keep it and try it on Sunday mornings too.

Firstly, the city centre is too noisy and polluted. On a car-free evening, families can walk, children can play safely and old people can sit by the lake without breathing in smoke. Secondly, local businesses may earn more money, because people walk slowly and stop at cafés and shops.

I tried it myself last Saturday with my two children. We walked around the whole lake in about forty minutes, stopped for ice cream and watched a group of students playing traditional music. My son, who is nine, said it was the best evening of his summer.

However, not everyone agrees. Some shop owners say that their customers will not come if they cannot park nearby. I see their point, but I don't think this is a serious problem. Although parking is important, most visitors to the area come by bus, by taxi or on foot at weekends. The city could also open a few car parks outside the area.

Other people argue that the plan will cause traffic jams on nearby roads. This is a fair argument. As far as I'm concerned, the answer is better public transport, not more cars.

Many cities in Europe and Asia close their centres to traffic on certain days, and most people there are happy with the results. I believe Hanoi can do the same.

Nguyen Thanh Ha, Ba Dinh, Hanoi`,
    glossary: [
      ["editor", "tổng biên tập (báo)"],
      ["polluted", "ô nhiễm"],
      ["breathing in", "hít vào"],
      ["park", "đỗ xe"],
      ["traffic jam", "tắc đường"],
      ["fair", "hợp lý, công bằng"],
      ["public transport", "phương tiện công cộng"],
    ],
    questions: [
      mc("b1-5-r1", "What is the writer's main opinion?", ["Cars should be banned from Hanoi forever.", "Keeping traffic out of the streets around the lake is a good idea.", "Shop owners should get more parking spaces.", "Public transport in Hanoi is too expensive."], 1, "Ngay đoạn đầu: In my opinion, it is an excellent idea."),
      mc("b1-5-r2", "Why are some shop owners against the plan?", ["They think customers won't come if they can't park.", "They don't want to open on Sundays.", "They think the lake area is too noisy."], 0, "Some shop owners say that their customers will not come if they cannot park nearby."),
      fill("b1-5-r3", "The writer thinks the answer to traffic jams is better public ___.", ["transport"], "As far as I'm concerned, the answer is better public transport."),
      mc("b1-5-r4", "How does the writer feel about the shop owners' worry?", ["It is understandable but not very serious.", "It is the most important problem.", "It is completely silly.", "It is a good reason to cancel the plan."], 0, "I see their point, but I don't think this is a serious problem: người viết công nhận ý của họ nhưng cho rằng vấn đề không lớn."),
      mc("b1-5-r5", "Why does the writer mention cities in Europe and Asia?", ["To show that the idea has worked in other places", "To complain that Hanoi is behind other cities", "To suggest that tourists should visit them"], 0, "Người viết nhắc các thành phố khác, nơi mọi người hài lòng với kết quả, để chứng minh ý tưởng này khả thi: I believe Hanoi can do the same."),
    ],
  }),
  speaking: [
    say("In my opinion, reading is the best way to learn new words.", "Theo tôi, đọc là cách tốt nhất để học từ mới."),
    say("I see your point, but I don't completely agree.", "Tôi hiểu ý bạn, nhưng tôi không hoàn toàn đồng ý."),
    say("Although it's difficult, I really enjoy learning English.", "Mặc dù khó, tôi thực sự thích học tiếng Anh."),
  ],
  dialogue: dialogue(
    "Có nên làm việc tại nhà ngày thứ Sáu?",
    "Trong cuộc họp nhóm, anh David, trưởng nhóm người nước ngoài, hỏi ý kiến Hương về kế hoạch cho cả nhóm làm việc tại nhà mỗi thứ Sáu. Hương đồng ý một phần và phản đối lịch sự một phần.",
    { A: "David, trưởng nhóm", B: "Hương, nhân viên" },
    A("We're thinking about working from home every Friday. What do you think, Huong?", "Chúng ta đang tính làm việc tại nhà mỗi thứ Sáu. Hương thấy thế nào?"),
    B("In my opinion, it's a great idea because we'll save a lot of time on the road.", "Theo tôi, đó là ý rất hay vì chúng ta sẽ đỡ mất nhiều thời gian đi đường."),
    A("I agree. However, some people say they feel lonely at home.", "Tôi đồng ý. Tuy nhiên, một số người nói họ thấy cô đơn khi ở nhà."),
    B("I see your point, but it's only one day a week.", "Tôi hiểu ý anh, nhưng mỗi tuần chỉ có một ngày thôi."),
    A("That's true. What about meetings with customers?", "Đúng vậy. Thế còn các cuộc họp với khách hàng thì sao?"),
    B("I'm not so sure about that. Although online meetings are convenient, some customers prefer to meet face to face.", "Chuyện đó thì tôi không chắc lắm. Mặc dù họp trực tuyến tiện lợi, một số khách hàng vẫn thích gặp trực tiếp."),
    A("So what do you suggest?", "Vậy Hương đề xuất thế nào?"),
    B("As far as I'm concerned, we can meet customers on Thursday and work from home on Friday.", "Theo tôi thấy, mình có thể gặp khách vào thứ Năm và làm việc tại nhà vào thứ Sáu."),
    A("That's a strong argument. Are there any disadvantages?", "Lập luận thuyết phục đấy. Có bất lợi nào không?"),
    B("The main disadvantage is the internet. Some of us don't have a good connection at home.", "Bất lợi chính là mạng internet. Một số người trong nhóm không có mạng tốt ở nhà."),
    A("Good point. I don't think it's a big problem. The company can help with that.", "Ý hay. Tôi không nghĩ đó là vấn đề lớn. Công ty có thể hỗ trợ chuyện đó."),
    B("Then I completely agree with the plan.", "Vậy thì tôi hoàn toàn đồng ý với kế hoạch này."),
  ),
  task: task({
    prompt: "Công ty bạn đề xuất rút ngắn giờ nghỉ trưa từ chín mươi phút xuống ba mươi phút để mọi người được về sớm hơn một tiếng. Viết một đoạn nêu ý kiến (khoảng 100–130 từ) gửi cả nhóm: bạn đồng ý hay phản đối, vì sao, và phản hồi lịch sự một ý kiến ngược lại.",
    hints: [
      "Mở đầu bằng In my opinion hoặc As far as I'm concerned để nêu rõ quan điểm.",
      "Đưa ít nhất hai lý do với because.",
      "Công nhận ý ngược lại trước khi phản đối: I see their point, but…",
      "Dùng although trong một câu và however ở đầu một câu mới.",
    ],
    model: "In my opinion, a shorter lunch break is a good idea because we can go home one hour earlier and avoid the traffic. I also think it is good for our families because we will have more time together in the evening. However, some colleagues like a long break, and they say they need a nap after lunch. I see their point, but I don't think a nap is more important than a free evening. Although a short lunch can be tiring at first, we can take two small breaks in the afternoon. As far as I'm concerned, we should try it for one month and then decide together.",
    checklist: [
      "Câu đầu nêu rõ quan điểm bằng In my opinion, I think hoặc As far as I'm concerned.",
      "Có ít nhất 2 lý do với because.",
      "Có 1 câu công nhận ý ngược lại rồi mới phản đối (I see their point, but…).",
      "Dùng although mà không có but trong cùng câu.",
      "Có 1 câu however đứng đầu câu mới, có dấu phẩy theo sau.",
      "Không có câu I am agree hay You're wrong.",
    ],
    minWords: 100,
  }),
});
