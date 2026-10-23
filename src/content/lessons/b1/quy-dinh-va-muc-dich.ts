import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "quy-dinh-va-muc-dich",
  title: "Quy định và lý do đằng sau",
  minutes: 32,
  lecture: {
    title: "Bắt buộc, khuyên, quy định và mục đích",
    blocks: [
      p("Ngày đầu đi làm ở công ty mới, bạn sẽ nghe rất nhiều quy định: phải đeo thẻ, không được cắm USB cá nhân, nên mặc lịch sự khi gặp khách. Ở A2, bạn đã học **should, have to, must, don't have to, mustn't** ở mức cơ bản. Bài này đi sâu hơn: **must** khác **have to** ở chỗ nào, cách nói **không cần** và **cấm** cho khỏi nhầm, lời khuyên mạnh **had better**, cách nói “theo quy định thì phải” bằng **be supposed to**, và cách nêu **lý do, mục đích** của quy định."),
      table(
        ["Cấu trúc", "Nghĩa", "Dùng khi", "Ví dụ"],
        ["must + V", "phải", "Người nói tự thấy cần; quy định viết trên biển, văn bản", "I must call my mum tonight. Visitors must sign in."],
        ["have to + V", "phải", "Bị bắt buộc từ bên ngoài: luật, công ty, sếp", "I have to wear a badge at work."],
        ["had to / didn't have to + V", "đã phải / đã không cần", "Quá khứ (must không có dạng quá khứ)", "I had to wait two hours at the office."],
        ["don't have to / don't need to / needn't + V", "không cần, không bắt buộc", "Làm cũng được, không làm cũng được", "You don't have to bring a laptop."],
        ["mustn't + V", "không được, cấm", "Điều bị cấm", "You mustn't smoke in the building."],
      ),
      ex("I must get to bed earlier. I'm always tired.", "Tôi phải đi ngủ sớm hơn mới được. Lúc nào tôi cũng mệt.", "Must: chính người nói tự đặt ra yêu cầu cho mình."),
      ex("We have to renew our visas every year. It's the law.", "Năm nào chúng tôi cũng phải gia hạn thị thực. Luật quy định vậy.", "Have to: bắt buộc từ bên ngoài, người nói không quyết định được."),
      ex("You needn't print the form. You can send it by email.", "Bạn không cần in mẫu đơn đâu. Gửi qua email là được.", "Needn't = don't need to = don't have to: không bắt buộc, nhưng làm cũng không sai."),
      mistake("You don't have to use your phone during the exam.", "You mustn't use your phone during the exam.", "Tiếng Việt nói “không phải” cho cả hai nghĩa, nên người Việt hay dùng don't have to cho điều bị cấm. Câu sai nghĩa là “bạn không cần dùng điện thoại” (dùng cũng được). Muốn nói “cấm” phải dùng mustn't."),
      p("Muốn khuyên ai đó **thật mạnh**, kèm ngầm ý “không thì sẽ có chuyện”, dùng **had better + V** (thường rút gọn **'d better**), phủ định là **had better not + V**. Dù có chữ had, nghĩa vẫn là hiện tại hoặc tương lai gần. Còn **be supposed to + V** nói điều **theo quy định hoặc theo lẽ thường thì phải làm**, và hay ngầm ý thực tế không ai làm đúng như vậy."),
      table(
        ["Cấu trúc", "Nghĩa", "Ví dụ"],
        ["had better + V", "tốt nhất là nên (không thì…)", "You'd better leave now, or you'll miss the bus."],
        ["had better not + V", "tốt nhất là đừng", "You'd better not park there. They'll take your car."],
        ["be supposed to + V", "theo quy định thì phải", "We're supposed to clock in by eight, but the machine is often broken."],
        ["be not supposed to + V", "theo quy định thì không được", "You're not supposed to eat at your desk."],
      ),
      ex("Your visa expires next week. You'd better go to the immigration office tomorrow.", "Thị thực của anh hết hạn tuần sau. Tốt nhất là mai anh lên phòng xuất nhập cảnh đi.", "Had better mạnh hơn should: nếu không làm, hậu quả xảy ra ngay (quá hạn thị thực)."),
      ex("I was supposed to send the report yesterday, but I forgot.", "Lẽ ra hôm qua tôi phải gửi báo cáo, nhưng tôi quên mất."),
      p("Khi giải thích **lý do, mục đích** của một quy định, dùng **to + V** (thông dụng nhất), **in order to / so as to + V** (trang trọng hơn, hay gặp trong văn bản; phủ định **in order not to / so as not to**), hoặc **so that + mệnh đề** khi phía sau có chủ ngữ riêng, thường đi với **can / will** (hiện tại) và **could / would** (quá khứ)."),
      ex("Please lock the door when you leave so that nobody can get in at night.", "Khi về nhớ khóa cửa để ban đêm không ai vào được.", "So that + chủ ngữ mới (nobody) + can + V."),
      mistake("I went to the bank for open an account.", "I went to the bank to open an account.", "Tiếng Việt nói “để mở” hoặc “đi ngân hàng cho mở tài khoản”, nên người Việt hay dịch “để” thành for. Trước động từ, mục đích dùng to + V. For chỉ đi với danh từ: I went to the bank for a loan. Cũng đừng viết for to open."),
      mistake("I set two alarms so that to wake up on time.", "I set two alarms to wake up on time. / I set two alarms so that I wake up on time.", "So that phải theo sau bởi một mệnh đề có chủ ngữ và động từ, không bao giờ đi với to. Người Việt coi so that là một chữ “để” nên ghép luôn với to."),
      tip("Phát âm: **have to** đọc /ˈhæf.tə/, **has to** /ˈhæs.tə/, **had to** /ˈhæt.tə/: âm v, z, d bị biến thành âm vô thanh vì đứng trước /t/. **Supposed to** đọc /səˈpəʊs.tə/, âm d gần như mất, nên nhiều người viết nhầm thành suppose to. Còn **'d better** nói nhanh nghe gần như you better, nhưng khi viết luôn giữ 'd hoặc had."),
      teacher("Khi đứng lớp, tôi để ý học viên làm IT hay đọc quy định công ty bằng tiếng Anh nhưng không phân biệt được **don't have to** và **mustn't**. Một bạn từng mang laptop riêng vào phòng server vì tưởng biển ghi “không bắt buộc”. Cách tôi khuyên: mỗi lần gặp một quy định, hãy tự hỏi “nếu làm thì sao?”. Nếu làm vẫn được, đó là **don't have to**. Nếu làm là vi phạm, đó là **mustn't**. Rồi thêm một vế lý do bằng **to** hoặc **so that** để câu có sức thuyết phục."),
      summary(
        "Must: người nói tự thấy cần hoặc quy định viết; have to: bắt buộc từ bên ngoài; quá khứ của cả hai là had to.",
        "Don't have to / don't need to / needn't: không cần. Mustn't: cấm. Đừng dịch “không phải” thành don't have to khi muốn nói cấm.",
        "Had better (not) + V: lời khuyên mạnh, có hậu quả nếu không làm; sau had better không có to.",
        "Be supposed to + V: theo quy định thì phải, thường ngầm ý thực tế không làm đúng.",
        "Mục đích: to / in order to / so as to + V; so that + chủ ngữ + can / will / could / would. Không dùng for + V, không dùng so that to.",
      ),
    ],
  },
  words: [
    word("permit", "/ˈpɜː.mɪt/", "giấy phép", "Foreign staff need a work permit before they can start.", "per|mit", 0, "Danh từ nhấn âm đầu: PER-mit. Động từ permit (cho phép) lại nhấn âm sau: /pəˈmɪt/."),
    word("regulation", "/ˌreɡ.jəˈleɪ.ʃən/", "quy định, điều lệ", "Smoking in the building is against fire regulations.", "reg|u|la|tion", 2, "Trọng âm chính ở âm thứ ba: reg-yə-LAY-shən. Chữ g đọc /ɡ/, không đọc /dʒ/."),
    word("procedure", "/prəˈsiː.dʒə/", "thủ tục, quy trình", "The visa procedure takes about three weeks.", "pro|ce|dure", 1, "Nhấn âm giữa: prə-SEE-jə. Âm cuối /dʒə/, không đọc thành “đua”."),
    word("permission", "/pəˈmɪʃ.ən/", "sự cho phép", "You need your manager's permission to work from home.", "per|mis|sion", 1),
    word("submit", "/səbˈmɪt/", "nộp (hồ sơ, giấy tờ)", "Please submit your documents by Friday.", "sub|mit", 1, "Nhấn âm sau: səb-MIT. Âm /b/ cuối âm tiết đầu phải ngậm môi rõ."),
    word("expire", "/ɪkˈspaɪə/", "hết hạn", "My passport expires in March, so I need a new one.", "ex|pire", 1, "Đọc /ɪk.ˈspaɪə/: không có âm r ở cuối trong giọng Anh-Anh."),
    word("badge", "/bædʒ/", "thẻ (nhân viên), huy hiệu", "You must wear your badge at all times.", "badge", 0, "Chữ d không đọc riêng: /bædʒ/. Nhớ giữ âm /dʒ/ ở cuối, đừng nuốt mất."),
    word("essential", "/ɪˈsen.ʃəl/", "thiết yếu, bắt buộc phải có", "A valid passport is essential for the visa application.", "es|sen|tial", 1, "Nhấn âm giữa: i-SEN-shəl. Cụm ti đọc là /ʃ/."),
  ],
  exercises: [
    mc("b1-n21-1", "In our office, you ___ wear a uniform. It isn't a rule, but most people like to.", ["mustn't", "don't have to", "had better", "are supposed to"], 1, "Không phải quy định, mặc hay không đều được: don't have to. Mustn't là cấm; had better và are supposed to đều nói là nên hoặc phải mặc."),
    mc("b1-n21-2", "I'm saving money ___ I can study abroad next year.", ["for", "to", "so that", "in order to"], 2, "Phía sau có mệnh đề đầy đủ (I can study), nên dùng so that. To và in order to phải đi với động từ nguyên mẫu, for không đi với mệnh đề."),
    fill("b1-n21-3", "We ___ clock in by eight, but nobody really does. (theo quy định thì phải)", ["are supposed to", "are meant to"], "Theo quy định thì phải, nhưng thực tế không ai làm: be supposed to."),
    fill("b1-n21-4", "You'd better ___ late on your first day. (đừng đến)", ["not be", "not arrive", "not come"], "Phủ định của had better là had better not + V: You'd better not be late."),
    fill("b1-n21-5", "I set two alarms so as ___ oversleep. (để không)", ["not to"], "Phủ định của so as to là so as not to + V: not đứng trước to."),
    reorder("b1-n21-6", "You don't have to wear a tie.", "Don't have to + V: không bắt buộc. Câu này nghĩa là “Bạn không cần đeo cà vạt”."),
    reorder("b1-n21-7", "You'd better not tell the manager.", "Had better not + V: “tốt nhất là đừng”. Not đứng sau better, không đứng trước had."),
    reorder("b1-n21-8", "We're supposed to clock in by eight.", "Be supposed to + V: theo quy định thì phải. Clock in là quẹt thẻ hoặc chấm công lúc đến."),
    listen("b1-n21-9", "You don't have to come to the meeting, but you're welcome to join.", ["Bạn không cần đến cuộc họp, nhưng muốn tham gia thì cứ đến.", "Bạn không được phép đến cuộc họp.", "Bạn bắt buộc phải đến cuộc họp."], 0, "Don't have to: không bắt buộc. Vế sau you're welcome to join cho thấy đến cũng được."),
    listen("b1-n21-10", "We left early so as not to miss the train.", ["Chúng tôi bị lỡ tàu vì đi muộn.", "Chúng tôi đi sớm để không bị lỡ tàu.", "Chúng tôi đi sớm nhưng vẫn lỡ tàu."], 1, "So as not to + V: để không. Họ đi sớm với mục đích không lỡ tàu."),
    correct("b1-n21-11", "I went to the immigration office for renew my visa.", ["I went to the immigration office to renew my visa.", "I went to the immigration office in order to renew my visa.", "I went to the immigration office so as to renew my visa."], "Mục đích trước một động từ dùng to + V, không dùng for + V."),
    correct("b1-n21-12", "You mustn't bring your laptop. We have computers in the training room.", ["You don't have to bring your laptop. We have computers in the training room.", "You don't need to bring your laptop. We have computers in the training room.", "You needn't bring your laptop. We have computers in the training room.", "You need not bring your laptop. We have computers in the training room."], "Phòng đã có máy tính nên mang laptop là không cần, chứ không phải bị cấm: don't have to / don't need to / needn't."),
    correct("b1-n21-13", "I'll send you the form today so that to check it before Monday.", ["I'll send you the form today so that you can check it before Monday.", "I'll send you the form today so you can check it before Monday."], "So that phải đi với một mệnh đề có chủ ngữ và động từ (you can check), không đi với to."),
    correct("b1-n21-14", "You had better to wear your badge at all times.", ["You had better wear your badge at all times.", "You'd better wear your badge at all times."], "Sau had better là động từ nguyên mẫu không có to."),
  ],
  speaking: [
    say("You'd better not be late on your first day.", "Tốt nhất là đừng đi muộn vào ngày đầu tiên."),
    say("We're supposed to wear our badges at all times.", "Theo quy định thì lúc nào chúng tôi cũng phải đeo thẻ."),
    say("I'm learning English so that I can work with foreign clients.", "Tôi học tiếng Anh để có thể làm việc với khách hàng nước ngoài."),
  ],
  freeSpeaking: free(
    "What are the rules at your workplace or school? Which ones make sense to you, and why?",
    "Kể vài quy định ở nơi bạn làm việc hoặc học tập. Dùng must / have to, don't have to, mustn't, be supposed to, và giải thích lý do bằng to hoặc so that.",
    "At my company, we have to wear our badges all the time so that the guards know who we are. We're supposed to start at half past eight, but nobody checks very carefully. We don't have to wear formal clothes, which I like. However, we mustn't use personal USB drives, because a virus once stopped our system. I think that rule makes sense.",
  ),
  dialogue: dialogue(
    "Ngày đầu đi làm",
    "Daniel, một lập trình viên người Anh, đến làm ngày đầu tiên ở một công ty phần mềm tại Hà Nội. Ms Lan bên phòng nhân sự giải thích các quy định.",
    { A: "Daniel", B: "Ms Lan" },
    B("Welcome, Daniel. Before you start, let me go through a few rules.", "Chào mừng anh, Daniel. Trước khi bắt đầu, tôi nói qua vài quy định nhé."),
    A("Thanks. Do I have to wear a uniform?", "Cảm ơn chị. Tôi có phải mặc đồng phục không?"),
    B("No, you don't have to. But you must wear your badge at all times. Security won't let you in without it.", "Không, anh không cần. Nhưng anh phải đeo thẻ suốt thời gian ở đây. Bảo vệ sẽ không cho anh vào nếu không có thẻ."),
    A("Got it. And what time are we supposed to start?", "Tôi hiểu rồi. Theo quy định thì mấy giờ bắt đầu làm ạ?"),
    B("Officially at half past eight. The system isn't very strict, but you'd better not test it in your first month.", "Chính thức là tám rưỡi. Hệ thống không chặt lắm, nhưng tốt nhất anh đừng thử nó trong tháng đầu."),
    A("I'll be early, then. Can I use my own laptop?", "Vậy tôi sẽ đến sớm. Tôi dùng laptop riêng được không?"),
    B("You mustn't connect personal laptops to the network. It's a security regulation. We'll give you one so that you can access all the project files.", "Anh không được kết nối laptop cá nhân vào mạng. Đó là quy định bảo mật. Công ty sẽ cấp cho anh một máy để anh truy cập được mọi tài liệu dự án."),
    A("Great. HR also said I needed to submit some documents.", "Tốt quá. Phòng nhân sự cũng bảo tôi cần nộp một số giấy tờ."),
    B("Yes. We need a copy of your passport and your degree in order to apply for your work permit. The procedure takes about three weeks.", "Vâng. Chúng tôi cần bản sao hộ chiếu và bằng cấp của anh để xin giấy phép lao động. Thủ tục mất khoảng ba tuần."),
    A("Do I need to do anything else?", "Tôi có cần làm gì thêm không?"),
    B("No, you needn't worry about the rest. Just don't let your visa expire before then.", "Không, anh không cần lo phần còn lại. Chỉ đừng để thị thực hết hạn trước lúc đó là được."),
  ),
  dialogueQuestions: [
    listenQ("b1-n21-d1", "Why must Daniel wear his badge?", "But you must wear your badge at all times. Security won't let you in without it.", ["It's part of the company uniform.", "He can't get into the building without it.", "His manager needs to learn his name."], 1, "Security won't let you in without it: không có thẻ thì bảo vệ không cho vào."),
    mc("b1-n21-d2", "What does Ms Lan suggest about the start time?", ["Nobody ever arrives before half past eight.", "Daniel can start whenever he likes.", "The rule isn't checked carefully, but a new employee should still follow it.", "The office opens at nine in the first month."], 2, "Câu suy luận: The system isn't very strict, but you'd better not test it. Quy định không chặt, nhưng nhân viên mới vẫn nên đúng giờ."),
    mc("b1-n21-d3", "Why will the company give Daniel a laptop?", ["His own laptop is too old.", "So that he can access the project files.", "He has to take it home every evening.", "His visa doesn't allow him to bring one."], 1, "We'll give you one so that you can access all the project files."),
  ],
  reading: reading({
    title: "Your first week at Sao Mai Software",
    text: `Dear new colleagues,

Welcome to Sao Mai Software! We are very happy to have you with us. Before Monday, please take five minutes to read this email. It explains the main office rules and, more importantly, the reasons behind them.

Arrival. Our working day starts at 8.30, and you are supposed to swipe your card at the main entrance when you arrive. Some teams have flexible hours, so check with your manager. If you are going to be late, send a short message to your team leader. We don't count minutes, but we do notice when people disappear without a word.

Security. Please wear your staff badge at all times, even on the stairs. We share the building with three other companies, and the guards cannot remember every face. Never lend your badge to anyone, not even to a friend from another floor. If you lose it, tell reception on the same day so that we can block it.

Laptops and data. You will receive a company laptop on your first morning. You mustn't install your own software on it, and personal USB drives are not allowed. This is not because we don't trust you. Last year a virus from a single USB stick stopped our accounting system for two days.

Clothes. There is no uniform, and you don't have to wear a suit. Most people come in jeans and trainers. However, when you meet clients, you had better dress a little more formally. First impressions matter in our business.

Paperwork. Foreign staff need to send us a copy of their passport and degree by Friday so that we can start the work permit process. It usually takes about three weeks, so please don't leave it until the last minute.

If anything is unclear, just ask. Nobody expects you to remember everything in your first week.

Best wishes,
Nguyen Thu Ha
HR Manager`,
    glossary: [
      ["swipe", "quẹt (thẻ)"],
      ["lend", "cho mượn"],
      ["block", "khóa (thẻ, tài khoản)"],
      ["first impressions", "ấn tượng ban đầu"],
      ["paperwork", "giấy tờ, thủ tục hồ sơ"],
    ],
    questions: [
      mc("b1-n21-r1", "What is the main purpose of the email?", ["To advertise jobs at Sao Mai Software", "To explain office rules and the reasons for them to new staff", "To complain about staff who arrive late", "To describe the company's accounting system"], 1, "Ngay đoạn đầu: It explains the main office rules and, more importantly, the reasons behind them."),
      mc("b1-n21-r2", "Why do staff have to wear their badges all the time?", ["The guards can't recognise everyone in a shared building.", "Badges show which team each person works in.", "Clients like to see employees' names.", "Badges are part of the company uniform."], 0, "We share the building with three other companies, and the guards cannot remember every face."),
      fill("b1-n21-r3", "Personal USB drives are not allowed because a ___ once stopped the accounting system.", ["virus"], "Last year a virus from a single USB stick stopped our accounting system for two days."),
      mc("b1-n21-r4", "What should staff wear when they meet clients?", ["A uniform", "Jeans and trainers", "Something a little more formal than usual", "A suit every day of the week"], 2, "When you meet clients, you had better dress a little more formally."),
      mc("b1-n21-r5", "What can we infer about the company's attitude to arriving a little late?", ["Staff lose pay for every minute they are late.", "Being late is never accepted.", "It is fairly relaxed, as long as people let their team know.", "Managers check everyone's card every morning."], 2, "Câu suy luận: We don't count minutes, but we do notice when people disappear without a word. Muộn một chút không sao, miễn là báo trước."),
    ],
  }),
  task: task({
    prompt: "Một đồng nghiệp mới sắp vào nhóm bạn. Viết email chào mừng (90–120 từ) giới thiệu vài quy định của công ty và lý do của chúng.",
    hints: [
      "Phân biệt điều bắt buộc (must / have to), điều không cần (don't have to) và điều bị cấm (mustn't).",
      "Thêm một lời khuyên mạnh với 'd better và một quy định “trên giấy” với be supposed to.",
      "Giải thích lý do bằng to, in order to hoặc so that.",
    ],
    model: "Hi Tuan,\n\nWelcome to the team! Here are a few things you should know before Monday. We're supposed to start at half past eight, but the team meeting begins at nine, so you don't have to rush. You must wear your badge at all times because the guards check everyone at the door. You mustn't use personal USB drives on your laptop. It's a strict rule, so you'd better ask the IT team if you need to move files. You'll need to submit a copy of your ID card by Friday in order to get your staff account. Bring a jumper, too. The air conditioning is very cold, so I keep one at my desk so that I don't freeze.\n\nSee you soon!\nLan",
    checklist: [
      "Có ít nhất một câu với must hoặc have to cho điều bắt buộc.",
      "Phân biệt đúng don't have to (không cần) và mustn't (cấm).",
      "Có một câu với had better / 'd better và một câu với be supposed to.",
      "Có ít nhất hai câu nêu mục đích bằng to, in order to hoặc so that, không dùng for + V.",
      "Sau must, mustn't, had better là động từ nguyên mẫu không to.",
    ],
    minWords: 90,
  }),
});
