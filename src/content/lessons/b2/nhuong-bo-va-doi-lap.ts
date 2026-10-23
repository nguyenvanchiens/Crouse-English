import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "nhuong-bo-va-doi-lap",
  title: "Nhượng bộ và đối lập",
  minutes: 35,
  lecture: {
    title: "Although, even though, despite, in spite of, however, even so và while",
    blocks: [
      p("Đối tác gửi báo giá mới, đắt hơn mười hai phần trăm. Bạn muốn **ghi nhận điểm tốt của họ** nhưng vẫn **từ chối khéo**: **Although we value our partnership, we cannot accept this increase.** Ở B1 các bạn đã có **although** và **however**; bài Từ nối nâng cao đã luyện dấu câu của **nevertheless** và **whereas**. Bài này đi sâu vào một việc người đi làm làm hằng ngày: **nhượng bộ**, tức là thừa nhận một ý rồi nói điều ngược lại. Mấu chốt là **mỗi từ nối đòi một loại từ theo sau khác nhau**."),
      table(
        ["Từ nối", "Theo sau là", "Vị trí và dấu câu", "Ví dụ"],
        ["although / even though / though", "mệnh đề (S + V)", "đầu câu (có dấu phẩy) hoặc giữa câu", "Although the hotel was expensive, we stayed there."],
        ["though (cuối câu, văn nói)", "đứng sau cả câu", "dấu phẩy trước though", "It was expensive. We loved it, though."],
        ["despite / in spite of", "danh từ, V-ing, hoặc the fact that + mệnh đề", "đầu câu (có dấu phẩy) hoặc giữa câu", "Despite the price, we stayed there."],
        ["however / nevertheless / even so", "một câu mới", "đầu câu mới, có dấu phẩy phía sau", "The hotel was expensive. Even so, we stayed there."],
        ["while (= although)", "mệnh đề", "thường đứng đầu câu", "While I see your point, I can't agree."],
      ),
      p("**Even though** mạnh hơn **although**: nhấn vào sự trái ngược đáng ngạc nhiên của một **sự thật**. Đừng nhầm với **even if** (cho dù nếu), vốn nói về một **giả định**: Even though it's raining, we'll go (trời đang mưa thật). Even if it rains, we'll go (có thể mưa, có thể không)."),
      ex("Even though he had prepared for weeks, he didn't get the job.", "Dù đã chuẩn bị nhiều tuần liền, anh ấy vẫn không được nhận.", "Chuẩn bị kỹ là sự thật, kết quả trái ngược hẳn, nên even though nghe tự nhiên hơn although."),
      ex("Despite having a fever, she gave an excellent presentation.", "Dù đang sốt, cô ấy vẫn có một bài thuyết trình xuất sắc.", "Despite + V-ing khi hai vế cùng một chủ ngữ (she có sốt, she thuyết trình)."),
      ex("In spite of the fact that sales fell, the company paid everyone a bonus.", "Mặc dù doanh số giảm, công ty vẫn thưởng cho tất cả mọi người.", "Muốn dùng despite / in spite of với cả một mệnh đề thì chêm the fact that vào giữa."),
      mistake("Despite it was raining, we played football.", "Despite the rain, we played football. / Although it was raining, we played football.", "Tiếng Việt “mặc dù” đứng trước được cả cụm danh từ lẫn cả một câu, nên học trò coi despite và although là một. Sau despite không được có chủ ngữ + động từ: đổi thành danh từ (the rain), V-ing, hoặc dùng although."),
      mistake("Despite of the traffic, we arrived on time.", "Despite the traffic, we arrived on time. / In spite of the traffic, we arrived on time.", "Học trò trộn hai cụm despite và in spite of thành despite of. Nhớ: despite không có of; in spite of luôn có of."),
      mistake("Despite the low salary, but I enjoy my job.", "Despite the low salary, I enjoy my job.", "Đây vẫn là thói quen “Mặc dù… nhưng…” của tiếng Việt, chỉ là chuyển sang despite. Một câu chỉ cần một từ nối nhượng bộ: đã có despite, although hay even though thì bỏ but."),
      p("**However, nevertheless, even so** là trạng từ liên kết, **nối hai câu**, không nối hai vế trong một câu. **Nevertheless** trang trọng, hợp với báo cáo; **even so** và **still** thân mật hơn, hay gặp khi nói. **However** còn đứng được giữa câu, kẹp giữa hai dấu phẩy: The plan, however, is very expensive."),
      ex("The deadline is very tight. Even so, I think we can make it.", "Hạn chót rất gấp. Dù vậy, tôi nghĩ chúng ta vẫn kịp."),
      ex("While I understand your concern, we can't change the date now.", "Dù tôi hiểu nỗi lo của anh, giờ chúng ta không thể đổi ngày được nữa.", "While ở đầu câu mang nghĩa although: thừa nhận ý người kia trước, rồi mới từ chối. Đây là cách phản bác rất lịch sự trong họp."),
      mistake("However the price is high, we will buy it.", "Although the price is high, we will buy it.", "Vì cả hai đều dịch là “tuy nhiên, mặc dù”, học trò dùng however như liên từ. However không nối được hai vế trong một câu; muốn vậy phải dùng although. Hoặc tách hai câu: The price is high. However, we will buy it."),
      tip("Mẹo ba giây: nhìn ngay sau chỗ trống. Có **chủ ngữ + động từ** → **although / even though / though / while**. Chỉ có **danh từ hoặc V-ing** → **despite / in spite of**. Là **một câu mới** → **however / nevertheless / even so**. Phát âm: **though** /ðəʊ/ có âm /ð/ rung, chữ gh câm; **despite** /dɪˈspaɪt/ nhấn âm sau, bật rõ /t/ cuối."),
      teacher("Khi chấm bài viết, lỗi tôi gặp nhiều nhất ở bài này là **despite + một câu đầy đủ**: Despite the hotel was far… Nhiều bạn còn tưởng câu nghe sang hơn vì có despite. Bài tập tôi giao: viết **một ý theo ba cách**: Although it was late, we kept working. / Despite the late hour, we kept working. / It was late. Even so, we kept working. Làm vậy mỗi ngày với một chuyện có thật của bạn, sau một tuần tay bạn sẽ tự biết từ nào đi với gì."),
      summary(
        "**Although / even though / though / while** + mệnh đề. Even though nhấn mạnh hơn although; even if là giả định, không phải sự thật.",
        "**Despite / in spite of** + danh từ, V-ing hoặc the fact that + mệnh đề. Không có **despite of**.",
        "**However / nevertheless / even so** mở đầu câu mới và có dấu phẩy phía sau; không nối hai vế trong một câu.",
        "**Though** đứng được cuối câu trong văn nói: We loved it, though.",
        "Một câu chỉ một từ nối nhượng bộ: không dùng although… but, despite… but.",
      ),
    ],
  },
  words: [
    word("despite", "/dɪˈspaɪt/", "mặc dù, bất chấp", "Despite the heavy rain, the match went ahead.", "de|spite", 1, "Nhấn âm sau: de-SPITE. Bật rõ âm /t/ ở cuối."),
    word("reluctant", "/rɪˈlʌk.tənt/", "miễn cưỡng, không muốn", "The manager was reluctant to approve the extra budget.", "re|luc|tant", 1, "Thường đi với to + V: be reluctant to do something."),
    word("obstacle", "/ˈɒb.stə.kəl/", "trở ngại, chướng ngại", "Despite many obstacles, they opened the shop on time.", "ob|sta|cle", 0, "Nhấn âm đầu: OB-sta-cle. Âm cuối /kəl/ đọc nhẹ, không đọc thành “cờ-le”."),
    word("insist", "/ɪnˈsɪst/", "khăng khăng, nhất quyết", "He insisted on paying for dinner, even though I offered to share.", "in|sist", 1, "Insist on + V-ing hoặc insist that + mệnh đề. Bật rõ cụm /st/ cuối."),
    word("admit", "/ədˈmɪt/", "thừa nhận", "I admit that the plan is risky. Even so, I think we should try it.", "ad|mit", 1),
    word("valid", "/ˈvæl.ɪd/", "có cơ sở, hợp lý; còn hiệu lực", "That's a valid point, but we still need to reduce costs.", "val|id", 0, "Nhấn âm đầu: VAL-id. Âm /æ/ mở miệng rộng như trong cat."),
    word("criticism", "/ˈkrɪt.ɪ.sɪ.zəm/", "lời chỉ trích, phê bình", "Despite the criticism, the director refused to change the plan.", "crit|i|cism", 0, "Nhấn âm đầu: CRIT-i-cism. Chữ c thứ hai đọc là /s/."),
  ],
  exercises: [
    mc("b2-n18-1", "___ the heavy traffic, we arrived at the airport on time.", ["Although", "Despite", "However", "Even though"], 1, "Sau chỗ trống là cụm danh từ the heavy traffic, không có động từ, nên chỉ despite đứng được. Although và even though cần một mệnh đề; however không nối hai vế trong một câu."),
    mc("b2-n18-2", "The hotel was lovely. It was a bit noisy at night, ___.", ["although", "despite", "though", "even though"], 2, "Chỉ though đứng được ở cuối câu (văn nói), mang nghĩa “dù vậy”. Although, even though và despite phải có thêm một vế theo sau."),
    fill("b2-n18-3", "In spite ___ the bad weather, the concert went ahead.", ["of"], "In spite of luôn có of. Còn despite thì không bao giờ có of."),
    fill("b2-n18-4", "Despite ___ ill, she gave an excellent presentation. (feel)", ["feeling"], "Despite + V-ing khi hai vế cùng chủ ngữ: despite feeling ill."),
    fill("b2-n18-5", "The plan is expensive and risky. Even ___, I think we should try it.", ["so"], "Even so = dù vậy, mở đầu câu mới và có dấu phẩy phía sau."),
    fill("b2-n18-6", "___ I understand your concern, I can't change the deadline. (dù, đứng đầu câu)", ["While", "Although", "Though", "Even though", "Whilst"], "Sau chỗ trống là mệnh đề I understand… nên cần liên từ: while, although, though hoặc even though. While ở đầu câu rất hay dùng để phản bác lịch sự."),
    fill("b2-n18-7", "He insisted ___ paying for dinner, although I offered to share the bill.", ["on"], "Insist on + V-ing: nhất quyết làm gì."),
    reorder("b2-n18-8", "It was a great trip, though.", "Though đứng cuối câu trong văn nói, thêm ý “dù vậy” cho câu trước đó."),
    reorder("b2-n18-9", "I admit that the plan has some weaknesses.", "Admit that…: thừa nhận một điểm yếu trước, rồi mới bảo vệ quan điểm, đúng tinh thần nhượng bộ."),
    correct("b2-n18-10", "Despite it was raining, we played football.", ["Despite the rain, we played football.", "In spite of the rain, we played football.", "Although it was raining, we played football.", "Even though it was raining, we played football.", "Though it was raining, we played football.", "Despite the fact that it was raining, we played football.", "In spite of the fact that it was raining, we played football."], "Sau despite không được có chủ ngữ + động từ. Đổi thành danh từ (despite the rain), thêm the fact that, hoặc dùng although / even though."),
    correct("b2-n18-11", "Despite of the traffic, we arrived on time.", ["Despite the traffic, we arrived on time.", "In spite of the traffic, we arrived on time."], "Despite không đi với of. Muốn có of thì dùng in spite of."),
    correct("b2-n18-12", "Despite the low salary, but I really enjoy my job.", ["Despite the low salary, I really enjoy my job.", "In spite of the low salary, I really enjoy my job.", "The salary is low, but I really enjoy my job."], "Đã có despite thì không thêm but. Đây là lỗi “Mặc dù… nhưng…” dịch thẳng từ tiếng Việt."),
    listen("b2-n18-13", "Even though she had prepared for weeks, she didn't get the job.", ["Dù đã chuẩn bị nhiều tuần, cô ấy vẫn không được nhận.", "Vì chuẩn bị nhiều tuần nên cô ấy đã được nhận.", "Cô ấy không chuẩn bị nên không được nhận.", "Nếu chuẩn bị nhiều tuần thì cô ấy đã được nhận."], 0, "Even though nối hai sự thật trái ngược: đã chuẩn bị kỹ, vậy mà vẫn trượt."),
    listen("b2-n18-14", "While I see your point, I can't agree with you.", ["Trong lúc tôi nhìn vào điểm số của anh, tôi không đồng ý.", "Dù tôi hiểu ý anh, tôi không thể đồng ý với anh.", "Vì tôi hiểu ý anh nên tôi đồng ý.", "Khi tôi gặp anh, tôi sẽ nói là tôi không đồng ý."], 1, "While ở đầu câu ở đây nghĩa là although (dù). See your point: hiểu ý của anh, không phải “nhìn điểm số”."),
  ],
  speaking: [
    say("Despite the high price, I think it's worth buying.", "Dù giá cao, tôi nghĩ nó đáng mua."),
    say("Even though I was exhausted, I finished the report on time.", "Dù đã kiệt sức, tôi vẫn hoàn thành báo cáo đúng hạn."),
    say("While I understand your point, I'm afraid I can't agree.", "Dù tôi hiểu ý anh, tôi e là tôi không thể đồng ý."),
  ],
  freeSpeaking: free(
    "Tell me about a decision you made even though other people disagreed with you.",
    "Kể về một quyết định bạn đã đưa ra dù người khác phản đối (chọn trường, chọn việc, chuyển nhà…). Nói rõ người khác nghĩ gì, vì sao bạn vẫn quyết, và giờ bạn thấy thế nào. Dùng although / even though, despite / in spite of và however hoặc even so.",
    "Three years ago, I decided to leave my job at a bank and study design, even though my parents were strongly against it. They thought that a bank job was safe, and I admit that they had a valid point. Despite their worries, I spent a year on a full-time course, and it was really hard, because I had very little money. Even so, I never thought about giving up. Now I work for a small design studio. The salary is lower, though, so my parents still worry sometimes.",
  ),
  dialogue: dialogue(
    "Thương lượng lại báo giá",
    "Chị Hà, trưởng phòng mua hàng của một chuỗi siêu thị, gặp ông Becker, đại diện một nhà cung cấp người Đức, để bàn về báo giá mới cao hơn dự kiến.",
    { A: "Hà, trưởng phòng mua hàng", B: "Mr Becker, nhà cung cấp" },
    A("Thank you for your proposal, Mr Becker. Although the design is excellent, the price is much higher than we expected.", "Cảm ơn đề xuất của ông, ông Becker. Dù thiết kế rất tuyệt, giá lại cao hơn nhiều so với chúng tôi dự kiến."),
    B("I understand. Even so, our materials are the best on the market.", "Tôi hiểu. Dù vậy, nguyên liệu của chúng tôi tốt nhất trên thị trường."),
    A("That's a valid point. Despite that, our budget is fixed this year, so we're reluctant to go above it.", "Ý đó có cơ sở. Dù vậy, ngân sách năm nay của chúng tôi đã cố định, nên chúng tôi không muốn vượt quá."),
    B("While I see your point, I can't lower the price by fifteen per cent.", "Dù tôi hiểu ý chị, tôi không thể giảm giá mười lăm phần trăm."),
    A("What about ten per cent? Even though it's a large order, we'd be ready to sign today.", "Còn mười phần trăm thì sao? Dù đây là đơn hàng lớn, chúng tôi sẵn sàng ký ngay hôm nay."),
    B("To be honest, ten per cent is difficult, in spite of the size of the order. However, I could offer you free delivery.", "Thật lòng mà nói, mười phần trăm là khó, dù đơn hàng lớn. Tuy nhiên, tôi có thể miễn phí vận chuyển cho chị."),
    A("That helps. Nevertheless, I'd need to discuss it with my director first.", "Như vậy cũng đỡ. Tuy vậy, tôi cần bàn với giám đốc trước đã."),
    B("Of course. Our factory is very busy at the moment, though, so I can only hold this price until Friday.", "Tất nhiên rồi. Có điều nhà máy chúng tôi đang rất bận, nên tôi chỉ giữ được mức giá này đến thứ Sáu."),
    A("Understood. Despite the difference, I'm sure we can find a solution.", "Tôi hiểu. Dù còn khác biệt, tôi tin chúng ta sẽ tìm được giải pháp."),
    B("I'm sure we can. I'll send you the revised offer this afternoon.", "Tôi cũng tin vậy. Chiều nay tôi sẽ gửi chị bản chào giá đã sửa."),
  ),
  dialogueQuestions: [
    mc("b2-n18-d1", "What is Ha's main problem with the proposal?", ["She doesn't like the design.", "The price is higher than her budget allows.", "The delivery time is too long.", "The materials are poor quality."], 1, "Although the design is excellent, the price is much higher than we expected… our budget is fixed this year."),
    listenQ("b2-n18-d2", "What does Mr Becker offer instead of a bigger discount?", "To be honest, ten per cent is difficult, in spite of the size of the order. However, I could offer you free delivery.", ["A ten per cent discount", "A longer contract", "Free delivery", "Better materials"], 2, "However, I could offer you free delivery: ông không giảm mười phần trăm mà đề nghị miễn phí vận chuyển."),
    mc("b2-n18-d3", "Why does Mr Becker probably mention that his factory is very busy?", ["To apologise for late deliveries", "To explain why the quality is so high", "To encourage Ha to make a decision quickly", "To show that he doesn't need her order"], 2, "Câu suy luận: ông nói nhà máy đang bận nên chỉ giữ giá đến thứ Sáu. Đây là cách tạo áp lực nhẹ để chị Hà quyết sớm, chứ không phải xin lỗi hay từ chối đơn hàng."),
  ],
  reading: reading({
    title: "Why I turned down a higher salary",
    text: `Two years ago, I received two job offers in the same week. The first came from a large bank in Ho Chi Minh City. The salary was excellent, the office was five minutes from my flat, and my parents were delighted. The second came from a small software company with twelve employees and a tiny office above a noodle shop. It offered thirty per cent less money. I chose the second one, and although some of my friends still think I was crazy, I have never regretted it.

At first, the decision seemed obvious. I had student loans to repay, and my family had made real sacrifices so that I could study. Everyone around me insisted that the bank was the sensible choice. Despite all this, something about the interview at the bank worried me. The manager spent forty minutes describing the rules: the dress code, the working hours, the approvals needed before any change to the software. When I asked what I might learn in my first year, he looked surprised, as if nobody had ever asked him that before.

The interview at the start-up was completely different. The founder, a woman not much older than me, showed me the product, admitted that it still had serious problems and asked me how I would fix one of them. We argued about it for half an hour. I left the office feeling tired but excited. Even though the company could offer me no security at all, I knew I would learn more there in six months than in three years at the bank.

That is exactly what happened. In my first year, I worked on almost every part of the product, met customers in Singapore and Japan and made more mistakes than I can count. The hours were long, and in spite of my enthusiasm, there were weeks when I wondered whether I had made a terrible mistake. The company nearly ran out of money twice. However, every problem taught me something that no training course could.

I do not want to pretend that money is unimportant. I was lucky: I had no children and could live cheaply. For someone with a family to support, the bank might well have been the right choice, and I would never criticise anyone for making it. A higher salary is not everything, but it is not nothing either.

Still, if a younger colleague asked me for advice today, I would tell her this: look at what you will learn, not only at what you will earn. Salaries can change quickly. Skills stay with you.`,
    glossary: [
      ["turn down", "từ chối (lời mời, đề nghị)"],
      ["sacrifice", "sự hy sinh"],
      ["sensible", "khôn ngoan, hợp lý"],
      ["dress code", "quy định trang phục"],
      ["start-up", "công ty khởi nghiệp"],
      ["founder", "người sáng lập"],
      ["enthusiasm", "sự nhiệt huyết"],
      ["run out of", "cạn, hết (tiền, thời gian)"],
    ],
    questions: [
      mc("b2-n18-r1", "What is the main idea of the text?", ["Big companies always pay better than start-ups.", "The writer chose a job for what he could learn rather than for the money, and does not regret it.", "Young people should never work for banks.", "The writer's parents chose his first job for him."], 1, "Người viết chọn công ty nhỏ, lương thấp hơn ba mươi phần trăm, vì cơ hội học hỏi, và nói I have never regretted it."),
      mc("b2-n18-r2", "What worried the writer during the interview at the bank?", ["The office was too far from his flat.", "The salary was lower than he expected.", "The manager talked mainly about rules and seemed surprised by a question about learning.", "The manager asked him to fix a problem in the software."], 2, "Người quản lý nói bốn mươi phút về quy định, và khi được hỏi năm đầu sẽ học được gì thì he looked surprised. Việc sửa lỗi phần mềm là ở buổi phỏng vấn công ty khởi nghiệp."),
      fill("b2-n18-r3", "___ the start-up could offer no security, the writer knew he would learn more there. (mặc dù)", ["Even though", "Although", "Though"], "Sau chỗ trống là một mệnh đề (the start-up could offer…), nên cần liên từ: even though, although hoặc though. Không dùng despite."),
      mc("b2-n18-r4", "What can we infer about the founder of the start-up?", ["She wanted to hide the weaknesses of her product.", "She was much older and more experienced than the writer.", "She only cared about the candidate's qualifications.", "She was honest and interested in how the candidate thinks."], 3, "Câu suy luận: bà thừa nhận sản phẩm còn lỗi nghiêm trọng (admitted that it still had serious problems) và hỏi ứng viên sẽ sửa thế nào, rồi tranh luận nửa tiếng. Vậy bà thẳng thắn và quan tâm đến cách ứng viên suy nghĩ."),
      mc("b2-n18-r5", "What is the writer's attitude towards people who choose the higher salary?", ["Understanding: they may have good reasons, such as a family to support", "Critical: they are making a serious mistake", "Jealous: he wishes he had earned more", "Uninterested: he does not mention them"], 0, "For someone with a family to support, the bank might well have been the right choice, and I would never criticise anyone for making it."),
    ],
  }),
  task: task({
    prompt: "Nhà cung cấp của công ty bạn, ông Becker, vừa báo tăng giá mười hai phần trăm từ tháng Một. Viết email khoảng 150–190 từ trả lời ông: ghi nhận những điểm tốt của họ, giải thích vì sao bạn không thể chấp nhận toàn bộ mức tăng, đưa ra một đề nghị khác và đề xuất một cuộc gọi.",
    hints: [
      "Mở bằng một câu Although / Even though để vừa ghi nhận lý do của họ, vừa từ chối.",
      "Dùng despite hoặc in spite of + danh từ / V-ing để khen điểm tốt dù có vài vấn đề.",
      "Mở một câu mới bằng However, Nevertheless hoặc Even so để chuyển sang khó khăn của bạn.",
      "Đưa ra đề nghị khác bằng While we cannot…, we would be willing to…",
    ],
    model: "Dear Mr Becker,\n\nThank you for your email of 3 June and for explaining the reasons for the new prices. Although we understand that the cost of raw materials has risen, an increase of twelve per cent would be very difficult for us to accept this year.\n\nWe have been happy with your products for many years. Despite a few late deliveries last winter, the quality has always been excellent, and our customers trust your brand. However, our budget for the next twelve months is already fixed, and we are reluctant to pass higher prices on to our customers in such a competitive market.\n\nWhile we cannot agree to the full increase, we would be willing to accept five per cent from January, as long as delivery times stay the same. Even so, we would like to review the prices again in six months, in case the market changes.\n\nIn spite of this difference, I am confident that we can reach an agreement that works for both companies. Could we arrange a call next week to discuss it?\n\nBest regards,\nNguyen Thu Ha",
    checklist: [
      "Có ít nhất một câu although hoặc even though + mệnh đề.",
      "Có ít nhất một câu despite hoặc in spite of + danh từ hoặc V-ing (không có chủ ngữ + động từ ngay sau).",
      "Có ít nhất một câu mới mở đầu bằng However, Nevertheless hoặc Even so, có dấu phẩy phía sau.",
      "Có một câu While… để thừa nhận rồi đưa ra đề nghị khác.",
      "Không có câu nào dùng cùng lúc although / despite và but.",
    ],
    minWords: 150,
  }),
});
