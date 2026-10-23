import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "cong-viec-va-phong-van",
  title: "Mỗi người, cả hai, không ai: nói về đội nhóm",
  minutes: 32,
  lecture: {
    title: "Each, every, both, either, neither và few, most, none",
    blocks: [
      p("Sau buổi phỏng vấn, hai trưởng nhóm bàn nhau: **Both candidates are good, but neither of them has led a team. Few people applied this time.** Chỉ trong ba câu, họ đã dùng ba từ chỉ số lượng. Ở chỗ làm, bạn sẽ phải nói như vậy hằng ngày: mỗi người trong nhóm làm gì, cả hai phương án ra sao, không ai đồng ý điều gì."),
      p("Ở A2 bạn đã học **much / many / a lot of / a few / a little** để nói nhiều hay ít. Bài này đi tiếp: chọn đúng **each** hay **every**, dùng **both / either / neither** khi nói về hai người hoặc hai thứ, phân biệt **few** với **a few**, và nói **most of / none of** cho đúng."),
      table(
        ["Từ", "Đi với", "Ví dụ"],
        ["each", "danh từ số ít; each of + the / my / them + số nhiều", "Each candidate has ten minutes. Each of them has ten minutes."],
        ["every", "danh từ số ít; không bao giờ có of ngay sau", "Every developer has a laptop."],
        ["every one of", "the / my / them + số nhiều", "Every one of my colleagues speaks English."],
        ["động từ", "luôn chia số ít sau each, every, each of", "Each of the rooms has a projector."],
      ),
      ex("The manager spoke to each candidate for twenty minutes.", "Trưởng phòng nói chuyện với từng ứng viên trong hai mươi phút.", "Each nhấn vào từng người một, riêng lẻ, và dùng được cả khi chỉ có hai người. Every nhìn cả nhóm (từ ba trở lên) như một tổng thể, gần với all."),
      ex("Every one of our engineers has worked abroad.", "Tất cả kỹ sư của chúng tôi, không trừ ai, đều đã từng làm việc ở nước ngoài.", "Muốn có of thì phải nói every one of, viết tách hai chữ. Động từ vẫn chia số ít: has."),
      table(
        ["Hai người / hai thứ", "Nghĩa", "Cấu trúc"],
        ["both", "cả hai", "both + số nhiều; both of + the / them; both A and B (động từ số nhiều)"],
        ["either", "một trong hai, cái nào cũng được", "either + số ít; either of + the / them; either A or B"],
        ["neither", "không ai / không cái nào trong hai", "neither + số ít; neither of + the / them; neither A nor B"],
      ),
      ex("Neither of them has led a team before.", "Cả hai người đều chưa từng dẫn dắt một nhóm.", "Văn viết và phỏng vấn dùng động từ số ít (has). Khi nói chuyện, người bản xứ cũng hay nói Neither of them have…, và cách này được chấp nhận trong giao tiếp thân mật. Chú ý neither đã mang nghĩa phủ định, nên không thêm not."),
      ex("She speaks both English and Japanese, so either team would be happy to have her.", "Cô ấy nói được cả tiếng Anh lẫn tiếng Nhật, nên nhóm nào trong hai nhóm cũng muốn có cô ấy.", "Cặp cố định: both… and, either… or, neither… nor. Không trộn lẫn, ví dụ không nói neither… and."),
      p("Chỉ một chữ **a** cũng đổi nghĩa cả câu. **A few / a little** mang nghĩa tích cực: có một ít, đủ dùng. **Few / little** (không có a) mang nghĩa tiêu cực: rất ít, gần như không có. Few đi với danh từ đếm được, little đi với danh từ không đếm được."),
      ex("A few people applied, so we can start interviewing. Few people applied, so we need to advertise again.", "Có vài người nộp đơn, nên mình có thể bắt đầu phỏng vấn. Rất ít người nộp đơn, nên mình phải đăng tuyển lại.", "Cùng một con số, nhưng người nói có a few thì đang hài lòng, còn người nói few thì đang thất vọng."),
      table(
        ["Cấu trúc", "Khi nào dùng", "Ví dụ"],
        ["most / all / some + danh từ", "nói chung chung, không chỉ nhóm cụ thể", "Most people prefer flexible hours."],
        ["most of / all of / some of + the / my / them", "một nhóm cụ thể đã biết", "Most of the people in my team are under thirty."],
        ["none of + the / my / them", "không ai, không cái nào (từ ba trở lên)", "None of the candidates has / have a degree in design."],
      ),
      mistake("Every of the developers has a laptop.", "Every one of the developers has a laptop.", "Tiếng Việt nói “mỗi một trong số các lập trình viên”, nên người học ghép every với of giống each of. Every không bao giờ đứng ngay trước of: nói every one of, hoặc đổi sang each of."),
      mistake("Each students must sign the contract.", "Each student must sign the contract.", "Tiếng Việt không có đuôi số nhiều, nên người học thêm -s theo cảm giác “tất cả học viên”. Each và every luôn đi với danh từ số ít, và động từ sau đó cũng chia số ít."),
      mistake("Most of people in my company are young.", "Most people in my company are young.", "Người Việt dịch từng chữ “phần lớn của mọi người” nên chèn of. Most of chỉ dùng khi sau nó có the, my, these hoặc đại từ: most of the people, most of them. Nói chung chung thì most + danh từ, không có of."),
      mistake("Don't worry, we still have few days before the deadline.", "Don't worry, we still have a few days before the deadline.", "Tiếng Việt “ít ngày” và “vài ngày” nghe gần nhau nên người học hay bỏ a. Few không có a nghĩa là gần như không còn ngày nào, nên câu trấn an lại nghe như đang báo động. Muốn nói tích cực thì phải có a."),
      tip("Phát âm: **either** đọc /ˈaɪ.ðə/ hoặc /ˈiː.ðə/, **neither** đọc /ˈnaɪ.ðə/ hoặc /ˈniː.ðə/; cả hai cách đều đúng, chỉ cần giữ một cách trong cả câu. Âm th ở giữa là /ð/ có rung: đặt đầu lưỡi giữa hai hàm răng, đừng đọc thành /d/ hay /z/. **Each** /iːtʃ/ phải bật âm /tʃ/ ở cuối, đừng đọc thành “ít”. **Every** /ˈev.ri/ chỉ có hai âm tiết, không đọc “e-vơ-ri”."),
      teacher("Khi tôi chấm bài nói ở phần mô tả đồng nghiệp, lỗi tôi gặp nhiều nhất không phải là từ vựng mà là **every of** và **most of people**. Mẹo của tôi rất đơn giản: trước of luôn phải có một con số hoặc một từ như each, both, most, none, và sau of luôn phải có the, my, these hoặc them. Hãy tập mô tả nhóm của bạn bằng năm câu, mỗi câu một từ trong bài: each, every, both, neither, a few. Nói to, chậm, và nghe xem động từ đã chia đúng chưa."),
      summary(
        "**Each / every** + danh từ số ít, động từ số ít. Có of thì dùng **each of** hoặc **every one of**, không bao giờ nói every of.",
        "Hai người hoặc hai thứ: **both** (cả hai, động từ số nhiều), **either** (cái nào cũng được), **neither** (không cái nào). Cặp đi kèm: both… and, either… or, neither… nor.",
        "**Neither of / none of** + số nhiều: văn viết chia động từ số ít (neither of them has), giao tiếp thân mật cũng hay chia số nhiều.",
        "**A few / a little** là có một ít (tích cực); **few / little** là gần như không có (tiêu cực).",
        "Nói chung chung: **most people**; nhóm cụ thể: **most of the people / most of them**.",
      ),
    ],
  },
  words: [
    word("interview", "/ˈɪn.tə.vjuː/", "buổi phỏng vấn", "Each interview lasted about forty minutes.", "in|ter|view", 0),
    word("salary", "/ˈsæl.ər.i/", "lương (theo tháng hoặc năm)", "Neither job offers a very high salary.", "sal|a|ry", 0),
    word("responsible", "/rɪˈspɒn.sə.bəl/", "chịu trách nhiệm", "Each of us is responsible for one part of the project.", "re|spon|si|ble", 1, "Đi với giới từ for: responsible for something."),
    word("confident", "/ˈkɒn.fɪ.dənt/", "tự tin", "Both candidates seemed confident in the interview.", "con|fi|dent", 0),
    word("strength", "/streŋθ/", "điểm mạnh", "Every candidate talked about their main strengths.", "strength", 0, "Kết thúc bằng /ŋθ/: đặt lưỡi giữa hai hàm răng ở âm cuối."),
    word("apply", "/əˈplaɪ/", "nộp đơn, ứng tuyển", "Only a few people applied for the job.", "ap|ply", 1, "Apply for a job: ứng tuyển vào một công việc."),
    word("efficient", "/ɪˈfɪʃ.ənt/", "làm việc hiệu quả, năng suất", "Both of our new developers are fast and efficient.", "ef|fi|cient", 1, "Trọng âm ở âm thứ hai: i-FI-shənt. Phần -cient đọc là /ʃənt/, không đọc “xi-ần”."),
  ],
  exercises: [
    mc("b1-n22-1", "___ of the candidates has a degree in computer science.", ["Every", "Each", "All", "Both"], 1, "Động từ has số ít và có of phía sau, nên chỉ each of đúng. Every không đi ngay trước of; all of và both of cần động từ số nhiều (have)."),
    mc("b1-n22-2", "We interviewed two people, but ___ of them was good enough for the job.", ["both", "none", "neither", "either"], 2, "Hai người và nghĩa phủ định (but… good enough) nên dùng neither. None dùng cho từ ba trở lên; both cần động từ số nhiều; either mang nghĩa khẳng định, trái với but."),
    fill("b1-n22-3", "The project is going well, but we have very ___ time left, so we can't add any new features. (ít, gần như không có)", ["little"], "Time không đếm được, nghĩa tiêu cực (gần như không còn) nên dùng little, không có a."),
    fill("b1-n22-4", "There are six people in our team, and ___ of them speaks Japanese, so we need a translator. (không ai)", ["none"], "Từ ba người trở lên và nghĩa phủ định thì dùng none of. Neither chỉ dùng cho hai người."),
    fill("b1-n22-5", "I can only accept one offer, and I'd be happy with ___ of them. (cái nào trong hai cũng được)", ["either"], "Chọn một trong hai, cái nào cũng được: either of them. Both không hợp vì chỉ nhận được một lời mời."),
    fill("b1-n22-6", "We sent the survey to forty staff, and ___ them replied within a day. (hầu hết)", ["most of", "almost all of", "nearly all of"], "Trước đại từ them phải có of: most of them. Không nói most them."),
    listen("b1-n22-7", "Few people applied, so we have to advertise the job again.", ["Có vài người nộp đơn, nên mình có thể bắt đầu phỏng vấn.", "Rất ít người nộp đơn, nên mình phải đăng tuyển lại.", "Nhiều người nộp đơn, nên mình phải đăng tuyển lại."], 1, "Few không có a mang nghĩa tiêu cực: rất ít, gần như không có."),
    listen("b1-n22-8", "Neither candidate speaks Japanese, but both of them speak good English.", ["Cả hai ứng viên đều nói được tiếng Nhật và tiếng Anh.", "Một trong hai ứng viên nói được tiếng Nhật.", "Không ứng viên nào nói được tiếng Nhật, nhưng cả hai đều nói tiếng Anh tốt."], 2, "Neither candidate: không ai trong hai ứng viên; both of them: cả hai người."),
    correct("b1-n22-9", "Every of the candidates has sent a CV.", ["Every one of the candidates has sent a CV.", "Each of the candidates has sent a CV.", "Each one of the candidates has sent a CV.", "All of the candidates have sent a CV.", "All the candidates have sent a CV."], "Every không đứng ngay trước of. Nói every one of hoặc each of, động từ vẫn chia số ít (has)."),
    correct("b1-n22-10", "Both of they work in the sales department.", ["Both of them work in the sales department.", "They both work in the sales department."], "Sau giới từ of phải dùng đại từ tân ngữ: both of them. Tiếng Việt không đổi dạng đại từ nên người học hay giữ they."),
    correct("b1-n22-11", "Neither Lan and Minh came to the meeting.", ["Neither Lan nor Minh came to the meeting."], "Neither luôn đi cặp với nor, giống either đi với or và both đi với and. Người Việt nghĩ “cả Lan và Minh đều không” nên dùng and."),
    reorder("b1-n22-12", "Neither of the candidates has worked abroad.", "Neither of the + danh từ số nhiều, động từ chia số ít trong văn viết: has worked."),
    reorder("b1-n22-13", "Each team member has a different role.", "Each + danh từ số ít (team member), động từ số ít (has)."),
    reorder("b1-n22-14", "Only a few people disagreed with the new plan.", "Only a few: chỉ một vài người, nhấn mạnh số lượng nhỏ nhưng vẫn có. Only đứng trước a few."),
  ],
  freeSpeaking: free(
    "Tell me about the people in your team or class. What do most of them do, and what does nobody do?",
    "Nói về nhóm làm việc hoặc lớp học của bạn: có bao nhiêu người, hầu hết họ làm gì, hai người nào đó giống hoặc khác nhau ra sao, và điều gì không ai làm. Dùng ít nhất bốn từ trong bài: each, every, both, neither, a few, most of, none of.",
    "There are eight people in my team, and each of us is responsible for a different part of our app. Most of my colleagues are developers, but two of them are designers. Both of the designers are very creative, and neither of them likes long meetings. A few people work from home on Fridays. None of us drinks tea, but every one of us loves coffee.",
  ),
  dialogueQuestions: [
    listenQ("b1-n22-d1", "Why is Hung a little worried about the two candidates?", "True. But neither of them has led a team before. That worries me a little.", ["Neither of them has led a team.", "Both of them want a very high salary.", "Neither of them speaks Japanese.", "Few of them answered the coding question."], 0, "Neither of them has led a team before."),
    mc("b1-n22-d2", "Why does Ms Clarke mention the Tokyo client?", ["To complain that the client pays too little", "To explain why Daniel is more confident", "To suggest that Linh's languages could be useful to the company", "To say that the team should move to Tokyo"], 2, "Bà Clarke nói Linh nói được cả tiếng Anh lẫn tiếng Nhật, điều mà khách hàng ở Tokyo sẽ rất thích. Ý ngầm: kỹ năng ngôn ngữ của Linh có ích cho công ty, bù lại mức lương cao hơn một chút."),
    mc("b1-n22-d3", "What will probably happen next?", ["The managers will offer the job to Daniel today.", "Both candidates will do a short task before the managers decide.", "The managers will interview all eight applicants again."], 1, "Họ định giao cho mỗi người một dự án thử nhỏ, gửi email ngay hôm nay và quyết định trước thứ Sáu."),
  ],
  reading: reading({
    title: "What you told us: results of our staff survey",
    text: `Last month, we asked all 120 people at Brightway Software to answer twelve short questions about their work. Thank you to everyone who took part: 96 of you replied, which is the highest number since we started the survey four years ago.

The good news first. Most of you enjoy working here, and nearly everyone said that their manager listens to them. Many people praised the new training programme, and several developers wrote that the Friday learning sessions had helped them move to a better position inside the company. Only a few people said they did not feel part of a team.

However, the survey also showed some problems. Few of you think that the office is a good place for quiet work. The open-plan space is noisy, and there are only two small meeting rooms for the whole building. Many of you also said that meetings go on for too long. One designer wrote, "I spend half my week in meetings and have little time left for real work."

We also asked whether you would prefer to work from home two days a week or keep the current plan of one day. The result was close, but more than half of you chose two days. Interestingly, neither the youngest nor the oldest employees felt strongly about it. The strongest support came from staff with young children.

So what happens next? From January, each team will be able to choose its own work-from-home days, and we are turning the old storage room into a quiet zone with six desks. Managers have also agreed to keep every regular meeting under thirty minutes.

None of these changes is final yet. We will hold an open meeting on 12 December, and we would love to hear from as many of you as possible before then.`,
    glossary: [
      ["took part", "tham gia"],
      ["praised", "khen ngợi"],
      ["open-plan", "(văn phòng) không gian mở, không có vách ngăn"],
      ["storage room", "phòng kho"],
      ["quiet zone", "khu vực yên tĩnh"],
      ["felt strongly", "có quan điểm rõ ràng, quan tâm nhiều"],
    ],
    questions: [
      mc("b1-n22-r1", "What is the main purpose of the article?", ["To advertise new jobs at Brightway Software", "To ask staff to spend less time at home", "To report the survey results and explain the company's plans", "To complain about the new training programme"], 2, "Bài báo tóm tắt kết quả khảo sát (điểm tốt, vấn đề) rồi nêu những thay đổi sắp tới."),
      mc("b1-n22-r2", "How many people replied to the survey?", ["Twelve", "Ninety-six", "A hundred and twenty", "Four"], 1, "96 of you replied."),
      fill("b1-n22-r3", "The designer complained that meetings leave very ___ time for real work.", ["little"], "I spend half my week in meetings and have little time left for real work. Time không đếm được, nghĩa tiêu cực: little."),
      mc("b1-n22-r4", "Which group will probably be happiest about the new work-from-home rule?", ["The youngest employees", "Developers who go to the Friday sessions", "Managers who run long meetings", "Staff with young children"], 3, "Bài viết nói nhóm ủng hộ làm việc tại nhà mạnh nhất là nhân viên có con nhỏ, nên quy định mới cho các nhóm tự chọn ngày làm tại nhà sẽ làm họ vui nhất."),
      mc("b1-n22-r5", "What does the writer mean by \"None of these changes is final yet\"?", ["Staff can still give their opinion before the plans are confirmed.", "The company has cancelled all the changes.", "Only one change will happen in January."], 0, "Ngay sau đó người viết mời mọi người đến buổi họp mở và muốn nghe ý kiến trước ngày đó, tức là kế hoạch vẫn còn có thể thay đổi."),
    ],
  }),
  speaking: [
    say("Each of us has a different role in the team.", "Mỗi người chúng tôi có một vai trò khác nhau trong nhóm."),
    say("Both of my managers are easy to talk to.", "Cả hai người quản lý của tôi đều dễ nói chuyện."),
    say("Most of the people in my team work from home on Fridays.", "Hầu hết mọi người trong nhóm tôi làm việc tại nhà vào thứ Sáu."),
  ],
  dialogue: dialogue(
    "Chọn ứng viên nào?",
    "Sau một ngày phỏng vấn tám người cho vị trí lập trình viên, bà Clarke, trưởng phòng nhân sự, và anh Hùng, trưởng nhóm kỹ thuật, bàn xem nên chọn ai trong hai ứng viên tốt nhất.",
    { A: "Bà Clarke, trưởng phòng nhân sự", B: "Anh Hùng, trưởng nhóm kỹ thuật" },
    A("So, we've interviewed all eight applicants. Who should we invite back?", "Vậy là mình đã phỏng vấn đủ tám ứng viên. Nên mời ai quay lại?"),
    B("Honestly, few of them really impressed me. Only two stood out: Linh and Daniel.", "Nói thật là rất ít người làm tôi ấn tượng. Chỉ có hai người nổi bật: Linh và Daniel."),
    A("I agree. Both of them have strong technical skills, and each of them gave a clear answer to the coding question.", "Tôi đồng ý. Cả hai đều có kỹ năng kỹ thuật tốt, và mỗi người đều trả lời rõ ràng câu hỏi lập trình."),
    B("True. But neither of them has led a team before. That worries me a little.", "Đúng. Nhưng cả hai đều chưa từng dẫn dắt một nhóm. Điều đó làm tôi hơi lo."),
    A("Does it matter? Every one of our team leaders started as a junior developer.", "Có quan trọng không? Tất cả trưởng nhóm của mình đều bắt đầu từ lập trình viên mới vào nghề."),
    B("Fair point. Linh's salary expectation is a bit higher, though.", "Cũng đúng. Có điều mức lương Linh mong muốn cao hơn một chút."),
    A("Only slightly. And she speaks both English and Japanese, which our Tokyo client would love.", "Chỉ cao hơn chút xíu. Mà cô ấy nói được cả tiếng Anh lẫn tiếng Nhật, khách hàng ở Tokyo của mình sẽ rất thích."),
    B("Daniel was more confident in the interview, but he answered a few questions too quickly.", "Daniel tự tin hơn trong buổi phỏng vấn, nhưng có vài câu anh ấy trả lời vội quá."),
    A("Most of the people in your team are quite quiet. Would a very confident person fit in?", "Hầu hết người trong nhóm anh khá ít nói. Một người rất tự tin có hòa hợp được không?"),
    B("I think either of them would fit in. Why don't we give each of them a small test project?", "Tôi nghĩ ai trong hai người cũng hòa hợp được. Sao mình không giao cho mỗi người một dự án thử nhỏ?"),
    A("Good idea. I'll email them both today.", "Ý hay đấy. Hôm nay tôi sẽ gửi email cho cả hai."),
    B("Great. Then let's make a decision by Friday.", "Tuyệt. Vậy mình quyết định trước thứ Sáu nhé."),
  ),
  task: task({
    prompt: "Bạn vừa nhận được hai lời mời làm việc. Viết một đoạn văn (khoảng 100–130 từ) so sánh hai công việc: điểm giống nhau, điểm khác nhau, những người bạn đã gặp ở mỗi nơi, và bạn sẽ chọn nơi nào, vì sao.",
    hints: [
      "Điểm giống và khác: Both companies… / Neither job… / Either of them…",
      "Nói về từng người hoặc cả nhóm: each of them…, every one of them… (động từ số ít).",
      "Nói số lượng: only a few people…, few of them…, most of the developers…, none of my friends…",
      "Không viết every of, most of people, neither… and.",
    ],
    model: "I have received two job offers, and I need to choose one by Monday. Both companies make software, and each of them offers a good salary. Neither job is in the city centre, so I will have to travel about forty minutes every day. The first company is small. Only a few people work there, but every one of them seemed friendly and confident. The second company is much bigger, and most of its developers work on projects for foreign clients. However, few of them stay longer than two years, which worries me. None of my friends works there, so I cannot ask anyone about it. In the end, I think I will choose the smaller company because I want to be responsible for real tasks from the first day.",
    checklist: [
      "Có ít nhất một câu với both và một câu với neither hoặc either để so sánh hai công việc.",
      "Dùng each of hoặc every one of với động từ số ít (each of them offers, every one of them seemed).",
      "Có cả a few (tích cực) và few (tiêu cực), dùng đúng nghĩa.",
      "Dùng most of hoặc none of + the / my / its / them, không viết most of people.",
      "Có câu nêu lựa chọn cuối cùng và lý do.",
    ],
    minWords: 100,
  }),
});
