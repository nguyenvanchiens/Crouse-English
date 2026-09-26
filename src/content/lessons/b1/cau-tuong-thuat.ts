import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "cau-tuong-thuat",
  title: "Câu tường thuật: kể lại lời người khác",
  minutes: 32,
  lecture: {
    title: "Say và tell, lùi thì, đổi đại từ và từ chỉ thời gian",
    blocks: [
      p("Sếp đi họp cả buổi sáng. Trong lúc đó, khách hàng gọi đến, anh kỹ thuật ghé qua, đồng nghiệp nhắn tin xin về sớm. Khi sếp quay lại và hỏi **Did anyone call?**, bạn phải **kể lại** lời của từng người. Trong tiếng Anh, việc này gọi là **câu tường thuật** (reported speech). Ở bài hỏi lịch sự, bạn đã gặp cách kể lại câu hỏi với asked (He asked me where I lived); hôm nay ta học trọn vẹn cách kể lại mọi loại lời nói."),
      p("Bước đầu tiên là chọn động từ tường thuật. **Say** và **tell** đều là “nói”, nhưng khác nhau ở chỗ: khi kể lại lời ai nói, **tell cần người nghe** đứng ngay sau (chỉ vài cụm cố định không cần: tell the truth, tell a lie, tell a joke, tell a story), còn **say không có người nghe** đứng ngay sau (muốn nhắc người nghe thì dùng say to someone). Muốn kể lại một lời đề nghị hay mệnh lệnh, dùng **tell someone (not) to + V**."),
      table(
        ["Động từ", "Cấu trúc", "Ví dụ"],
        ["say", "say (that) + câu", "She said (that) she was busy."],
        ["say", "say something to someone", "He said goodbye to everyone."],
        ["tell", "tell + người + (that) + câu", "She told me (that) she was busy."],
        ["tell", "tell + người + (not) to + V", "He told me not to worry."],
      ),
      ex("Mr Brown told us that the meeting was at three.", "Ông Brown bảo chúng tôi rằng cuộc họp lúc ba giờ.", "Có người nghe (us) ngay sau động từ nên dùng told. That có thể bỏ, nhất là khi nói."),
      p("Bước thứ hai là **lùi thì**. Khi động từ tường thuật ở quá khứ (said, told), động từ trong lời kể thường **lùi về quá khứ một bậc**. Tiếng Việt kể lại lời người khác mà không đổi gì ở động từ, nên đây là chỗ người Việt quên nhiều nhất."),
      table(
        ["Lời nói trực tiếp", "Câu tường thuật"],
        ["hiện tại đơn: “I work here.”", "quá khứ đơn: He said he worked there."],
        ["hiện tại tiếp diễn: “I'm leaving.”", "quá khứ tiếp diễn: She said she was leaving."],
        ["hiện tại hoàn thành: “I've finished.”", "quá khứ hoàn thành: He said he had finished."],
        ["quá khứ đơn: “I saw it.”", "quá khứ hoàn thành: She said she had seen it."],
        ["will / can: “I'll help.” “I can swim.”", "would / could: He said he would help. She said she could swim."],
      ),
      ex("“I'm working from home today,” Lan said. → Lan said she was working from home that day.", "“Hôm nay tôi làm việc ở nhà,” Lan nói. → Lan nói hôm đó cô ấy làm việc ở nhà.", "Ba thứ cùng đổi: thì (am working → was working), đại từ (I → she) và từ chỉ thời gian (today → that day)."),
      p("Bước thứ ba là **đổi đại từ và từ chỉ thời gian, nơi chốn** cho hợp với người kể và thời điểm kể. Chữ I của người nói trở thành he hoặc she, chữ my thành his hoặc her. Từ chỉ thời gian chỉ đổi khi **thời điểm đã qua**: nếu sáng nay khách nói “I'll call tomorrow” và chiều nay bạn kể lại thì vẫn giữ tomorrow."),
      table(
        ["Lời nói trực tiếp", "Câu tường thuật (khi thời điểm đã qua)"],
        ["now", "then"],
        ["today / tonight", "that day / that night"],
        ["tomorrow", "the next day / the following day"],
        ["yesterday", "the day before / the previous day"],
        ["next week", "the following week"],
        ["last week", "the week before"],
        ["here / this", "there / that"],
      ),
      ex("Last Monday my teacher said, “I'll send you the results tomorrow.” → She said she would send me the results the next day.", "Thứ Hai tuần trước cô giáo nói: “Ngày mai cô sẽ gửi em kết quả.” → Cô nói cô sẽ gửi tôi kết quả vào hôm sau.", "Thứ Hai đã qua lâu rồi nên tomorrow thành the next day; will thành would; I thành she, you thành me."),
      p("**Câu hỏi tường thuật** dùng asked và theo đúng quy tắc của câu hỏi gián tiếp: sau từ để hỏi là **trật tự câu kể**, bỏ do / does / did; câu hỏi Có / Không thêm **if** hoặc **whether**. Cuối cùng, **không cần lùi thì** khi điều được kể **vẫn còn đúng** ở hiện tại, hoặc khi động từ tường thuật ở hiện tại (She says…)."),
      ex("“Where do you work?” → He asked me where I worked.", "“Bạn làm ở đâu?” → Anh ấy hỏi tôi làm ở đâu.", "Không viết where did I work: câu hỏi tường thuật không đảo ngữ."),
      ex("Our guide said that the museum opens at nine.", "Hướng dẫn viên nói bảo tàng mở cửa lúc chín giờ.", "Bảo tàng vẫn mở lúc chín giờ, đó là sự thật vẫn đúng, nên giữ opens cũng được. Said the museum opened at nine cũng không sai."),
      mistake("He said me that he was tired.", "He told me that he was tired.", "Tiếng Việt nói “anh ấy nói với tôi” nên người học đặt me ngay sau said. Có người nghe thì dùng told me; muốn giữ said thì bỏ me: He said that he was tired."),
      mistake("She told that she would come.", "She said that she would come.", "Khi tường thuật lời nói, tell phải có người nghe theo sau: told me, told us. Không có người nghe thì phải dùng said. (Tell the truth / a lie / a joke / a story là cụm cố định, không cần người nghe.)"),
      mistake("He asked me where did I live.", "He asked me where I lived.", "Người học giữ nguyên trật tự câu hỏi trực tiếp. Trong câu tường thuật, phần sau asked là câu kể: chủ ngữ trước, động từ sau, không có did."),
      tip("Mẹo nhớ: **tell ai, say gì**. Khi kể lại lời nói, tell có “ai” đi liền sau (trừ tell the truth, tell a joke…), say thì đi thẳng vào nội dung. Mẹo phát âm: said đọc là **/sed/**, vần với red, không đọc thành /seɪd/ như say + d."),
      teacher("Lỗi tôi gặp nhiều nhất ở bài này không phải là quên lùi thì, mà là **quên đổi người**: học viên kể “He said I will call you”, nghe như chính mình hứa gọi. Cách luyện tôi hay giao: mỗi tối, kể lại cho người nhà ba câu mà đồng nghiệp hoặc bạn bè đã nói với bạn trong ngày, bằng tiếng Anh. Mỗi câu tự kiểm ba thứ: **động từ lùi chưa, đại từ đổi chưa, từ chỉ thời gian có cần đổi không**."),
      summary(
        "**Tell + người** (told me, told us); **say** không có người nghe ngay sau (said that…, said to me). Kể lời nhờ, lời khuyên: **told me (not) to + V**.",
        "Động từ tường thuật ở quá khứ thì lùi thì: hiện tại → quá khứ, hiện tại hoàn thành và quá khứ đơn → **had + V3**, will / can → **would / could**.",
        "Đổi đại từ theo người kể (I → he / she, my → his / her). Từ chỉ thời gian chỉ đổi khi thời điểm đã qua: tomorrow → **the next day**, yesterday → **the day before**.",
        "Câu hỏi tường thuật: **asked + từ để hỏi / if / whether + trật tự câu kể**, không có do / does / did.",
        "Sự thật vẫn còn đúng hoặc động từ tường thuật ở hiện tại (says) thì không cần lùi thì.",
      ),
    ],
  },
  words: [
    word("explain", "/ɪkˈspleɪn/", "giải thích", "He explained that his train was late.", "ex|plain", 1, "Explain something to someone: không nói explain me."),
    word("reply", "/rɪˈplaɪ/", "trả lời, hồi đáp", "I asked her about the price, and she replied that she didn't know.", "re|ply", 1, "Trọng âm ở âm sau: re-PLY."),
    word("whisper", "/ˈwɪs.pə/", "thì thầm", "She whispered that the manager was coming.", "whis|per", 0, "Chữ h không đọc; âm cuối /ə/, không đọc âm r."),
    word("shout", "/ʃaʊt/", "hét lên, la lớn", "The driver shouted that the bus was leaving.", "shout", 0, "Âm đầu /ʃ/ như trong she, không đọc thành /s/."),
    word("rumour", "/ˈruː.mə/", "tin đồn", "There's a rumour that our office is moving.", "ru|mour", 0, "Anh-Anh viết rumour, Anh-Mỹ viết rumor. Âm cuối /ə/, không có r."),
    word("gossip", "/ˈɡɒs.ɪp/", "chuyện ngồi lê đôi mách; buôn chuyện", "Don't believe the gossip in the canteen.", "gos|sip", 0),
    word("exaggerate", "/ɪɡˈzædʒ.ə.reɪt/", "phóng đại, nói quá", "He said he had waited for five hours, but I think he was exaggerating.", "ex|ag|ge|rate", 1, "Chữ x đọc là /ɡz/; hai chữ g chỉ đọc một âm /dʒ/: ig-ZA-jə-rate."),
  ],
  exercises: [
    mc("b1-n17-1", "“I'm hungry,” Nam said an hour ago. Then he ate two bowls of phở. → Nam said he ___ hungry.", ["is", "was", "had", "be"], 1, "Nam giờ đã no, điều đó không còn đúng nữa, nên phải lùi thì: am → was."),
    mc("b1-n17-2", "Last Friday, Hoa said, “I'll finish the report tomorrow.” → Hoa said she would finish the report ___.", ["tomorrow", "the next day", "yesterday", "the day before"], 1, "Thứ Sáu tuần trước đã qua, nên tomorrow của hôm đó phải đổi thành the next day (hoặc the following day)."),
    fill("b1-n17-3", "The doctor ___ me to drink more water. (say / tell)", ["told"], "Có người nghe (me) và kể lại một lời khuyên: told + người + to V. Say không đi với me ngay sau."),
    fill("b1-n17-4", "“I have lost my keys.” → Linh said she ___ lost her keys.", ["had", "'d"], "Hiện tại hoàn thành lùi thành quá khứ hoàn thành: have lost → had lost."),
    reorder("b1-n17-5", "She told me that she was leaving.", "Told + người nghe (me) + that + câu đã lùi thì (was leaving)."),
    reorder("b1-n17-6", "They asked us if we needed help.", "Câu hỏi Có / Không tường thuật: asked + người + if + trật tự câu kể (we needed), không đảo ngữ."),
    listen("b1-n17-7", "She said she would call me the next day.", ["Cô ấy nói hôm qua cô ấy đã gọi cho tôi.", "Cô ấy nói hôm sau cô ấy sẽ gọi cho tôi.", "Cô ấy bảo tôi gọi cho cô ấy vào ngày mai."], 1, "Would call là will call đã lùi thì; the next day là “hôm sau” tính từ lúc cô ấy nói."),
    listen("b1-n17-8", "He told me not to worry about the test.", ["Anh ấy nói anh ấy rất lo về bài kiểm tra.", "Anh ấy hỏi tôi có lo về bài kiểm tra không.", "Anh ấy bảo tôi đừng lo về bài kiểm tra.", "Anh ấy không kể với tôi về bài kiểm tra."], 2, "Told me not to + V: bảo tôi đừng làm gì."),
    correct("b1-n17-9", "She said me that she was busy.", ["She told me that she was busy.", "She told me she was busy.", "She said that she was busy.", "She said she was busy.", "She said to me that she was busy."], "Say không có người nghe đứng ngay sau. Có me thì dùng told me, hoặc giữ said và bỏ me (said to me cũng được)."),
    correct("b1-n17-10", "He said that he will call me the next day.", ["He said that he would call me the next day.", "He said he would call me the next day."], "Động từ tường thuật ở quá khứ (said) và đã đổi thành the next day, nên will phải lùi thành would."),
  ],
  speaking: [
    say("She said she was tired and wanted to go home.", "Cô ấy nói cô ấy mệt và muốn về nhà."),
    say("He told me that the meeting had finished.", "Anh ấy bảo tôi rằng cuộc họp đã kết thúc."),
    say("They asked me if I could help them the next day.", "Họ hỏi tôi liệu hôm sau tôi có thể giúp họ không."),
  ],
  freeSpeaking: free(
    "What did someone tell you recently? Can you report the conversation?",
    "Kể lại một cuộc nói chuyện gần đây: người đó nói gì, hỏi gì, bảo bạn làm gì. Dùng said, told, asked, và nhớ lùi thì, đổi đại từ.",
    "Yesterday my mother phoned me. She said she was cooking my favourite soup and asked if I could come home for dinner. I told her I was working late. She said it didn't matter and told me to come the next evening instead. She also said my brother had found a new job, so we were going to celebrate together.",
  ),
  dialogue: dialogue(
    "Ai đã gọi trong lúc sếp đi họp?",
    "Ông Brown, trưởng phòng người Anh, đi họp cả buổi sáng. Khi ông quay về, Mai, trợ lý của ông, kể lại những ai đã gọi điện, ghé qua và họ đã nói gì.",
    { A: "Ông Brown, trưởng phòng", B: "Mai, trợ lý" },
    A("Hi Mai. I was out all morning. Did anyone call?", "Chào Mai. Tôi đi vắng cả sáng. Có ai gọi không?"),
    B("Yes. Ms Lee from the Singapore office called. She said she was waiting for your report.", "Có ạ. Chị Lee ở văn phòng Singapore gọi. Chị ấy nói chị ấy đang chờ bản báo cáo của anh."),
    A("Oh no. Did she say when she needed it?", "Ôi không. Chị ấy có nói khi nào cần không?"),
    B("She told me she needed it by Friday. She also said she would call you again tomorrow.", "Chị ấy bảo em là chị ấy cần trước thứ Sáu. Chị ấy cũng nói ngày mai sẽ gọi lại cho anh."),
    A("OK. Anything else?", "Được. Còn gì nữa không?"),
    B("The technician came. He said the printer was broken and he couldn't repair it.", "Anh kỹ thuật có ghé. Anh ấy nói máy in bị hỏng và anh ấy không sửa được."),
    A("Did he tell you what we should do?", "Anh ấy có bảo mình nên làm gì không?"),
    B("He told me to order a new one. He also asked whether we had bought it from his company.", "Anh ấy bảo em đặt mua cái mới. Anh ấy còn hỏi mình có mua máy từ công ty anh ấy không."),
    A("I think we did, about two years ago. And where's Tom? I haven't seen him today.", "Tôi nghĩ là có, khoảng hai năm trước. Còn Tom đâu? Hôm nay tôi chưa thấy cậu ấy."),
    B("He sent a message. He explained that his train was late, so he'd arrive after lunch.", "Anh ấy nhắn tin. Anh ấy giải thích là tàu bị trễ nên anh ấy sẽ đến sau bữa trưa."),
    A("That's fine. By the way, there's a rumour that the office is moving. Have you heard anything?", "Không sao. À này, có tin đồn là văn phòng sắp chuyển. Em có nghe gì không?"),
    B("Only gossip. Nam whispered to me that we were moving to a new office in Thu Thiem, but I think he was exaggerating.", "Chỉ là chuyện buôn thôi ạ. Nam thì thầm với em là mình sắp chuyển sang văn phòng mới ở Thủ Thiêm, nhưng em nghĩ anh ấy nói quá."),
    A("Well, at the meeting, the director told us that she hadn't made a decision yet.", "À, trong cuộc họp, giám đốc bảo chúng tôi rằng bà ấy chưa quyết định gì cả."),
    B("Good to know. I'll reply to Ms Lee and tell her that you're back.", "Thế thì tốt ạ. Em sẽ trả lời chị Lee và báo là anh đã về."),
  ),
  dialogueQuestions: [
    listenQ("b1-n17-d1", "What did Ms Lee say?", "Yes. Ms Lee from the Singapore office called. She said she was waiting for your report.", ["She was waiting for Mr Brown's report.", "She was coming to the office.", "She had already sent the report.", "She was angry with Mai."], 0, "She said she was waiting for your report: chị Lee đang chờ báo cáo của ông Brown."),
    mc("b1-n17-d2", "What did the technician tell Mai to do?", ["Repair the printer herself", "Order a new printer", "Call him again tomorrow", "Move the printer to another room"], 1, "He told me to order a new one."),
    mc("b1-n17-d3", "What did the director say about the office move?", ["The office was moving to Thu Thiem.", "She hadn't made a decision yet.", "The move was cancelled."], 1, "The director told us that she hadn't made a decision yet. Chuyện chuyển sang Thủ Thiêm chỉ là lời Nam thì thầm."),
  ],
  reading: reading({
    title: "The message game",
    text: `Last month, our company had a team-building day by the sea. In the afternoon, our trainer asked us to stand in a long line and play a famous game. She whispered a message to the first person, and each person had to whisper it to the next one. The last person had to say it out loud.

The original message was simple: "The bus will leave at five, so please be in the car park by a quarter to five."

At first, everything went well. Hung told Linh that the bus would leave at five. Linh told Quan that everyone had to be in the car park at a quarter to five. But then things started to go wrong. Quan was laughing so much that he told Mai the bus was leaving at nine. Mai wasn't listening carefully, and she told the next person that there was no bus at all.

When the last person, our manager, finally spoke, everyone laughed. He said that we were staying at the beach until nine and that dinner was free!

The trainer explained that the game shows a real problem at work. When a message passes through many people, small changes become big mistakes. She told us to write important information down and to check it with the person who said it first.

That evening, we all arrived in the car park at a quarter to five. Nobody wanted to miss the bus.`,
    glossary: [
      ["team-building", "hoạt động gắn kết đội nhóm"],
      ["trainer", "người hướng dẫn, huấn luyện viên"],
      ["original", "ban đầu, gốc"],
      ["out loud", "thành tiếng, to lên"],
      ["pass through", "đi qua, truyền qua"],
    ],
    questions: [
      mc("b1-n17-r1", "What is the story mainly about?", ["A company trip that was cancelled", "A game that shows how a message changes when it passes through many people", "A manager who gave everyone a free dinner", "Why the bus left late"], 1, "Cả bài kể trò chơi truyền tin và bài học người hướng dẫn rút ra."),
      mc("b1-n17-r2", "What did Quan tell Mai?", ["That the bus was leaving at nine", "That there was no bus", "That dinner was free", "That the bus would leave at five"], 0, "Quan was laughing so much that he told Mai the bus was leaving at nine."),
      fill("b1-n17-r3", "The trainer told them to write important information ___.", ["down"], "She told us to write important information down."),
      mc("b1-n17-r4", "Why did everyone arrive on time that evening?", ["The manager told them that dinner was free.", "The game had shown them how easily a message can go wrong.", "The trainer drove the bus.", "They wanted to stay at the beach."], 1, "Sau trò chơi, ai cũng thấy tin nhắn dễ bị sai lệch, nên họ không tin lời đồn và có mặt đúng giờ theo tin gốc."),
      mc("b1-n17-r5", "What was the original message about?", ["The time and place to meet the bus", "Where to have dinner", "The rules of the game"], 0, "The bus will leave at five, so please be in the car park by a quarter to five."),
    ],
  }),
  task: task({
    prompt: "Sếp của bạn đi công tác cả tuần nên không dự được cuộc họp hôm thứ Hai với khách hàng. Viết một email (khoảng 85–110 từ) kể lại cho sếp những gì khách đã nói, đã hỏi và đã đề nghị.",
    hints: [
      "Dùng said (that)…, told us / told me…, asked if / whether… hoặc asked + từ để hỏi.",
      "Lùi thì: is → was, have / did → had + V3, will → would, can → could.",
      "Đổi đại từ theo người kể: I → he / she, our → their…",
      "Thứ Hai đã qua rồi, nên tomorrow của hôm đó thành the next day.",
    ],
    model: "Dear Ms Pham, I hope your trip is going well. Here is a short report on Monday's meeting with Mr Kato. He said that his company was happy with our first order, but he told us that some boxes had arrived late. He asked whether we could deliver the next order by the end of the month. I told him that we would do our best. He also said that he wanted to visit our factory, and he asked if you were free to meet him. Finally, he said he would send the new contract the next day, but it hasn't arrived yet. Should I call him? Best regards, Lan",
    checklist: [
      "Có ít nhất 3 câu said / told với động từ đã lùi thì (was, had arrived, would).",
      "Told luôn có người nghe theo sau (told us, told him); said không có người nghe ngay sau.",
      "Có ít nhất 1 câu hỏi tường thuật với asked whether / if hoặc từ để hỏi, theo trật tự câu kể.",
      "Từ chỉ thời gian được đổi cho đúng (tomorrow của hôm thứ Hai → the next day).",
      "Đại từ được đổi theo người kể (I, my của khách → he, his).",
    ],
    minWords: 85,
  }),
});
