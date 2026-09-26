import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "tu-de-nham-va-ngon-ngu-uoc-luong",
  title: "Từ dễ nhầm và cách nói ước lượng",
  minutes: 38,
  lecture: {
    title: "Từ “quen mặt mà lạ nghĩa” và ngôn ngữ ước lượng",
    blocks: [
      p("Chị Hoa, trưởng phòng nhân sự một công ty phần mềm, gửi email cho đối tác ở London: **We are hiring ten freshers. Our shipper will send you the contracts.** Phía bên kia hỏi lại: sao công ty lại tuyển sinh viên năm nhất, và bên nào là bên gửi hàng? Cùng tuần đó, trong cuộc họp, anh Tuấn báo cáo **The meeting will last forty-seven minutes**, khiến cả phòng bật cười. Không câu nào sai ngữ pháp. Vấn đề nằm ở **nghĩa của từ** và ở **độ chính xác không hợp hoàn cảnh**. Đây là hai điểm mà ở trình độ C1, người học phải tự mình kiểm soát."),
      p("**Từ dễ nhầm** (false friends) với người Việt đến từ hai nguồn. Thứ nhất là những **từ tiếng Anh đã Việt hóa**: khi vào tiếng Việt, chúng đổi nghĩa, rồi người học mang nghĩa mới quay lại dùng trong tiếng Anh. Thứ hai là những **cặp từ trông na ná** hoặc bị từ điển dịch quá gọn, khiến ta gán cho chúng một nghĩa không có."),
      table(
        ["Người Việt nói", "Người bản xứ hiểu là", "Nên nói"],
        ["shipper (người giao hàng)", "công ty hoặc người gửi hàng", "delivery driver, courier"],
        ["fresher (nhân viên mới ra trường)", "sinh viên năm nhất đại học (Anh)", "graduate, junior, entry-level"],
        ["đi check-in Đà Lạt", "làm thủ tục ở khách sạn, sân bay", "take photos at, visit"],
        ["chef (tưởng là sếp, vì sếp mượn từ chef của tiếng Pháp)", "đầu bếp", "boss, manager"],
        ["sale off 50%", "không phải tiếng Anh chuẩn", "50% off, on sale, a sale"],
      ),
      ex("The courier left the parcel at reception because nobody was in.", "Anh giao hàng để gói hàng ở quầy lễ tân vì không có ai ở nhà.", "Trong tiếng Anh, shipper là bên gửi hàng, thường là một công ty. Người chạy xe mang hàng đến là courier hoặc delivery driver."),
      mistake("I started my career as a fresher at a software company.", "I started my career as a graduate developer at a software company.", "Trong các công ty công nghệ ở Việt Nam, fresher là cấp bậc của người mới ra trường. Người Anh nghe fresher sẽ nghĩ đến sinh viên năm nhất đang đi học. Trong CV, hãy viết graduate, junior hoặc entry-level."),
      table(
        ["Từ", "Nghĩa thật", "Người Việt hay hiểu nhầm là", "Muốn nói ý đó thì dùng"],
        ["sympathetic", "cảm thông, thông cảm", "dễ mến, dễ thương", "likeable, pleasant"],
        ["sensible", "biết điều, hợp lý", "nhạy cảm", "sensitive"],
        ["eventually", "cuối cùng thì (sau một thời gian dài)", "có thể, có lẽ", "possibly, perhaps"],
        ["actually", "thật ra (điều bất ngờ, trái với người kia nghĩ)", "hiện tại", "currently, at the moment"],
        ["economical", "tiết kiệm", "thuộc về kinh tế", "economic"],
      ),
      ex("She was very sympathetic when I told her about my father's illness.", "Chị ấy rất thông cảm khi tôi kể về bệnh tình của bố tôi.", "Với người thật, sympathetic gần như luôn có nghĩa là cảm thông. Chỉ trong bình luận phim, truyện, a sympathetic character mới gần với nhân vật dễ có cảm tình."),
      ex("We eventually found a supplier who could deliver on time.", "Cuối cùng thì chúng tôi cũng tìm được nhà cung cấp giao hàng đúng hạn.", "Eventually hàm ý đã mất nhiều thời gian hoặc công sức. Nó không mang nghĩa “có thể” như eventualmente trong tiếng Tây Ban Nha hay éventuellement trong tiếng Pháp."),
      mistake("Don't be so sensible. It was only a joke.", "Don't be so sensitive. It was only a joke.", "Sensible và sensitive cùng gốc, nhìn gần giống nhau, nên người học hay dùng lẫn. Sensible là khen (hợp lý, biết điều); sensitive mới là nhạy cảm, dễ tự ái. Nói nhầm ở đây biến lời an ủi thành một câu khó hiểu."),
      p("Phần thứ hai là **ngôn ngữ ước lượng** (vague language). Khi nói chuyện, người bản xứ hiếm khi đưa con số chính xác đến từng đơn vị. Họ làm tròn và **báo cho người nghe biết là mình đang làm tròn**, giống như tiếng Việt nói “tầm”, “cỡ”, “khoảng chừng”, “gì gì đó”, “các thứ”. Dùng đúng, bạn nghe thoải mái và tự nhiên; không dùng, bạn nghe cứng như máy. Nhưng mỗi cách nói thuộc một **văn phong** riêng."),
      table(
        ["Cách nói", "Nghĩa", "Văn phong", "Ví dụ"],
        ["about, around, roughly", "khoảng", "trung tính", "about fifty people"],
        ["or so, give or take", "tầm, xê dịch chút ít", "thân mật", "an hour or so; forty, give or take"],
        ["-ish", "tầm, hơi hơi", "rất thân mật, khi nói hoặc nhắn tin", "at sevenish; tallish"],
        ["something like, round about", "cỡ chừng", "thân mật", "something like two hundred"],
        ["sort of, kind of", "kiểu như, hơi", "thân mật", "It's sort of blue."],
        ["and so on, and stuff, and things like that", "vân vân, các thứ", "and so on trung tính; hai cụm còn lại thân mật", "maps, tickets and stuff"],
        ["a bit of a + danh từ", "hơi (làm nhẹ)", "thân mật", "a bit of a problem"],
        ["approximately, in the region of, an estimated", "xấp xỉ, ước tính", "trang trọng, văn viết", "in the region of two million"],
      ),
      ex("The renovation will cost in the region of three billion dong.", "Việc cải tạo sẽ tốn khoảng ba tỷ đồng.", "In the region of là cách ước lượng trang trọng, hợp với báo cáo và thư từ công việc. Trong nói chuyện thường ngày, dùng about three billion là đủ."),
      mistake("The repairs will cost about approximately five million dong.", "The repairs will cost approximately five million dong.", "Tiếng Việt quen chồng từ: “khoảng chừng tầm năm triệu”. Tiếng Anh chỉ đặt một từ ước lượng trước một con số. Chồng hai từ nghe lủng củng và thiếu chuyên nghiệp. Riêng give or take là cụm đuôi đứng sau con số, nên about forty, give or take vẫn tự nhiên."),
      mistake("Sales went up by twenty per cent or so, and costs went down and stuff.", "Sales rose by approximately twenty per cent, while costs fell slightly.", "Trong báo cáo viết, or so và and stuff là quá thân mật. Người Việt quen nghe những cụm này trong phim nên đưa cả vào văn bản. Văn viết dùng approximately, in the region of, an estimated."),
      tip("Khi nói nhanh, **sort of** đọc liền thành /ˈsɔː.təv/, **kind of** thành /ˈkaɪn.dəv/, nghe như “sorta”, “kinda”. Hãy nghe và nhận ra chúng, nhưng **đừng viết sorta, kinda** trong email. Với **-ish**, trọng âm vẫn ở từ gốc: **SEV**enish, **TALL**ish."),
      teacher("Nhiều bạn học viên hỏi tôi: sao em tra từ điển rồi mà vẫn dùng sai? Câu trả lời là **những từ bạn tưởng đã biết thì bạn không bao giờ tra**. Tôi khuyên mỗi bạn giữ một trang sổ tên là **“Từ đã lừa tôi”**: mỗi lần bị người khác hiểu nhầm hay sửa lại, ghi từ đó, nghĩa thật và một câu ví dụ. Với ngôn ngữ ước lượng, hãy tập một thói quen nhỏ: khi ai hỏi mất bao lâu, bao nhiêu tiền, bao nhiêu người, **đừng trả lời bằng con số trần**. Nói thành **about ten minutes**, **fifty or so**, **something like two million**. Trước khi gửi báo cáo thì làm ngược lại: soát từng cụm thân mật và đổi sang approximately."),
      summary(
        "**Từ Việt hóa đổi nghĩa**: shipper là bên gửi hàng (người giao là **courier, delivery driver**); fresher là sinh viên năm nhất (nhân viên mới là **graduate, junior**); sếp là **boss**, không phải chef.",
        "**Cặp từ dễ nhầm**: sympathetic là **cảm thông**, sensible là **hợp lý**, sensitive mới là nhạy cảm; eventually là **cuối cùng thì**, actually là **thật ra**, hiện tại là **currently**.",
        "**Ước lượng khi nói**: about, around, **or so**, **give or take**, **-ish**, **something like**, **sort of**, **and stuff**, **a bit of a**.",
        "**Ước lượng khi viết trang trọng**: **approximately**, **in the region of**, **an estimated**. Không đặt hai từ ước lượng liền nhau trước một con số (about approximately); give or take đứng sau con số thì được.",
        "Từ bạn **chắc chắn nhất** lại là từ nên nghi ngờ nhất: ghi lại mọi từ đã khiến bạn bị hiểu nhầm.",
      ),
    ],
  },
  words: [
    word("loanword", "/ˈləʊn.wɜːd/", "từ mượn (từ vay mượn của ngôn ngữ khác)", "Vietnamese has borrowed many French loanwords, such as cà phê and sơ mi.", "loan|word", 0),
    word("cognate", "/ˈkɒɡ.neɪt/", "từ cùng gốc (ở hai ngôn ngữ)", "English night and German Nacht are cognates.", "cog|nate", 0),
    word("deceptive", "/dɪˈsep.tɪv/", "dễ đánh lừa, gây ngộ nhận", "False friends are deceptive: they look familiar, but they mean something else.", "de|cep|tive", 1, "Trọng âm ở âm tiết thứ hai: de-CEP-tive; nhớ bật âm /p/ trước /t/."),
    word("misnomer", "/ˌmɪsˈnəʊ.mə/", "tên gọi sai, tên gọi không đúng bản chất", "Calling them freshers is a misnomer, because they have already graduated.", "mis|no|mer", 1, "Trọng âm ở âm tiết thứ hai: mis-NO-mer; chữ r cuối không đọc."),
    word("approximation", "/əˌprɒk.sɪˈmeɪ.ʃən/", "con số ước lượng, sự ước chừng", "Fifty is only an approximation; the real number may be higher.", "ap|prox|i|ma|tion", 3, "Trọng âm chính ở -MA-: ap-prox-i-MA-tion, như mọi từ đuôi -tion."),
    word("imprecise", "/ˌɪm.prɪˈsaɪs/", "không chính xác, thiếu rõ ràng", "Words like stuff are too imprecise for a formal report.", "im|pre|cise", 2, "Đuôi -cise đọc /saɪs/ với âm /s/, không đọc thành /z/."),
    word("ballpark", "/ˈbɔːl.pɑːk/", "(con số) ước chừng, sơ bộ", "Can you give me a ballpark figure for the cost?", "ball|park", 0),
    word("thereabouts", "/ˈðeə.rə.baʊts/", "khoảng chừng đó, xấp xỉ như thế", "The project will take six months or thereabouts.", "there|a|bouts", 0, "Trọng âm ở âm đầu: THERE-a-bouts; chữ r được nối sang nguyên âm phía sau."),
  ],
  exercises: [
    mc("c1-n17-1", "A colleague is upset about a joke you made in the meeting. What do you say to calm things down?", ["Please don't be so sensible, I didn't mean it.", "Please don't be so sympathetic, I didn't mean it.", "Please don't be so sensitive, I didn't mean it.", "Please don't be so economical, I didn't mean it."], 2, "Sensitive là nhạy cảm, dễ tự ái. Sensible là hợp lý, sympathetic là cảm thông, economical là tiết kiệm."),
    mc("c1-n17-2", "Which sentence is most suitable for a quarterly report to the board?", ["Costs went up by twenty per cent or so.", "Costs rose by approximately twenty per cent.", "Costs went up by twenty-ish per cent.", "Costs went up by, like, twenty per cent and stuff."], 1, "Văn bản trang trọng dùng approximately. Or so, -ish, and stuff là cách nói thân mật."),
    fill("c1-n17-3", "We're expecting about forty guests, give or ___.", ["take"], "Give or take: xê dịch một chút, cụm cố định thân mật khi ước lượng."),
    fill("c1-n17-4", "The new bridge will cost in the ___ of two trillion dong.", ["region"], "In the region of + con số: xấp xỉ, cách ước lượng trang trọng."),
    reorder("c1-n17-5", "It took us an hour or so.", "Or so luôn đứng ngay sau con số hoặc khoảng thời gian được ước lượng."),
    reorder("c1-n17-6", "Could you come round at sevenish?", "Đuôi -ish gắn vào giờ giấc để nói “tầm bảy giờ”, chỉ dùng khi nói hoặc nhắn tin thân mật."),
    listen("c1-n17-7", "We'll eventually move to a bigger office, but not this year.", ["Có thể chúng tôi sẽ chuyển sang văn phòng lớn hơn trong năm nay.", "Cuối cùng thì chúng tôi sẽ chuyển sang văn phòng lớn hơn, nhưng không phải trong năm nay.", "Chúng tôi vừa chuyển sang một văn phòng lớn hơn.", "Chúng tôi sẽ không bao giờ chuyển văn phòng."], 1, "Eventually là cuối cùng thì, sau một thời gian; không có nghĩa là có thể."),
    listen("c1-n17-8", "There were something like two hundred people at the launch, give or take.", ["Có đúng hai trăm người đến buổi ra mắt.", "Có hơn hai trăm người đến buổi ra mắt.", "Chỉ có vài người đến buổi ra mắt.", "Có khoảng hai trăm người đến buổi ra mắt, xê dịch chút ít."], 3, "Something like và give or take đều báo hiệu con số ước lượng."),
    correct("c1-n17-9", "The shipper rang me when he was outside my house.", ["The courier rang me when he was outside my house.", "The delivery driver rang me when he was outside my house.", "The delivery man rang me when he was outside my house.", "The delivery rider rang me when he was outside my house.", "The delivery person rang me when he was outside my house.", "The delivery guy rang me when he was outside my house."], "Trong tiếng Anh, shipper là bên gửi hàng. Người mang hàng đến tận nhà là courier hoặc delivery driver."),
    correct("c1-n17-10", "The repairs will take about approximately three weeks.", ["The repairs will take approximately three weeks.", "The repairs will take about three weeks.", "The repairs will take roughly three weeks.", "The repairs will take around three weeks."], "Trước một con số chỉ đặt một từ ước lượng. About approximately là chồng hai lớp, giống lối nói “khoảng chừng tầm” của tiếng Việt."),
  ],
  speaking: [
    say("The meeting should take an hour or so.", "Cuộc họp chắc mất tầm một tiếng."),
    say("Actually, I'm currently working as a junior developer.", "Thật ra hiện tôi đang làm lập trình viên cấp junior."),
    say("It will cost something like two million, give or take.", "Nó sẽ tốn cỡ hai triệu, xê dịch chút ít."),
  ],
  freeSpeaking: free(
    "Have you ever been misunderstood because of a word that looked familiar, or because you sounded too exact or too vague? What happened?",
    "Kể lại một lần bạn (hoặc người quen) bị hiểu nhầm vì một từ tưởng là quen, hoặc vì nói con số quá chính xác hay quá mơ hồ. Chuyện xảy ra thế nào, người kia hiểu ra sao, và bây giờ bạn nói thế nào cho đúng. Dùng ít nhất ba cách nói ước lượng.",
    "Actually, it happened to me quite recently. I was showing a British colleague round Hanoi, and I told her that we would go and check in at Hoan Kiem Lake. She looked confused and asked whether there was a hotel by the lake. I had to explain that, in Vietnam, checking in somewhere just means going there to take photos. We laughed about it for ten minutes or so. Later that day, she asked how far the restaurant was, and I said one point three kilometres. She teased me and said that about a kilometre would have been fine. Since then, I've tried to round my numbers when I'm speaking, with phrases like something like fifty people or sevenish, and I save the exact figures for emails and reports.",
  ),
  dialogue: dialogue(
    "Báo cáo tuyển dụng",
    "Chị Linh, trưởng nhóm nhân sự ở một công ty phần mềm tại Đà Nẵng, trao đổi với anh Oliver, giám đốc kỹ thuật người Anh, về đợt tuyển lập trình viên mới và cách viết báo cáo gửi ban giám đốc.",
    { A: "Oliver, giám đốc kỹ thuật", B: "Linh, trưởng nhóm nhân sự" },
    A("How many applications did we get for the junior developer post?", "Mình nhận được bao nhiêu hồ sơ cho vị trí lập trình viên junior?"),
    B("Something like sixty, give or take. Most of them describe themselves as freshers.", "Cỡ sáu mươi, xê dịch chút ít. Phần lớn tự giới thiệu là fresher."),
    A("Freshers? In Britain that means first-year university students. Are they still at university?", "Fresher à? Ở Anh từ đó nghĩa là sinh viên năm nhất. Họ vẫn còn đang đi học sao?"),
    B("No, sorry. In Vietnam we use it for recent graduates. I'll write graduates in the report.", "Không, xin lỗi anh. Ở Việt Nam bọn em dùng từ đó cho người mới tốt nghiệp. Em sẽ ghi graduates trong báo cáo."),
    A("Good idea. It's a bit of a trap, isn't it? What did you think of this morning's candidate?", "Ý hay đấy. Từ đó đúng là một cái bẫy nhỉ. Chị thấy ứng viên sáng nay thế nào?"),
    B("He was very sympathetic. Sorry, I mean likeable. Sympathetic is another false friend for us.", "Cậu ấy rất sympathetic. Xin lỗi, ý em là dễ mến. Sympathetic cũng là một từ dễ nhầm với bọn em."),
    A("It's deceptive, all right. A sympathetic person is someone who listens to your problems.", "Đúng là dễ lừa thật. Người sympathetic là người chịu lắng nghe chuyện của mình."),
    B("Exactly. Anyway, he seemed sensible. He asked sensible questions about training, the salary and so on.", "Đúng vậy. Dù sao thì cậu ấy có vẻ biết điều. Cậu ấy hỏi những câu hợp lý về đào tạo, lương, vân vân."),
    A("And how long did the interview last in the end?", "Rốt cuộc buổi phỏng vấn kéo dài bao lâu?"),
    B("An hour or so. We eventually agreed that he should do a coding test next week.", "Tầm một tiếng. Cuối cùng bọn em thống nhất để cậu ấy làm bài kiểm tra lập trình vào tuần sau."),
    A("Fine. In the report to the directors, though, avoid or so and give or take. Just write approximately sixty applications.", "Được. Nhưng trong báo cáo gửi ban giám đốc, tránh or so và give or take nhé. Cứ ghi khoảng sáu mươi hồ sơ, dùng approximately."),
    B("Understood. Formal language in the report, casual language in the corridor.", "Em hiểu rồi. Văn phong trang trọng trong báo cáo, cách nói thân mật thì để dành khi trò chuyện."),
  ),
  dialogueQuestions: [
    listenQ("c1-n17-d1", "Why is Oliver surprised by the word freshers?", "Freshers? In Britain that means first-year university students. Are they still at university?", ["He thinks the applicants have too much experience.", "In Britain the word refers to first-year university students.", "He has never heard the word before.", "He thinks it is a rude word."], 1, "In Britain that means first-year university students: ở Anh, fresher là sinh viên năm nhất."),
    mc("c1-n17-d2", "What did Linh really mean when she first called the candidate sympathetic?", ["He understood her problems.", "He was likeable.", "He was easily upset.", "He agreed with everything she said."], 1, "Linh tự sửa: Sorry, I mean likeable. Chị muốn nói ứng viên dễ mến, không phải cảm thông."),
    mc("c1-n17-d3", "What does Oliver advise about the report to the directors?", ["Use informal expressions to sound friendly", "Give an exact figure such as sixty-one", "Replace informal expressions like or so with approximately", "Leave out the number of applications"], 2, "Oliver nói: avoid or so and give or take. Just write approximately sixty applications."),
  ],
  reading: reading({
    title: "The words that smile at you and then lie",
    text: `Every language learner eventually meets a word that looks like an old friend and turns out to be a stranger. Linguists call such words false friends: a word in one language that resembles a word in another but means something different. For speakers of European languages, the classic examples are cognates that have drifted apart over the centuries. For Vietnamese learners, the problem is rather different, and in some ways more deceptive.

Vietnamese has borrowed hundreds of English words over the last thirty years or so, especially in business, technology and online shopping. Once a loanword enters Vietnamese, however, it begins a life of its own. A shipper, to most people in Hanoi, is the young man on a motorbike who brings your parcel; to a British logistics manager, it is the company that sends the goods in the first place. A fresher, in the software companies of Ho Chi Minh City, is a newly qualified developer; at a British university, it is an eighteen-year-old in their first week, probably lost and slightly homesick. Neither usage is wrong within its own community. The trouble starts when the two communities meet, in an email, a job interview or a contract.

What makes these words dangerous is precisely that they feel safe. A learner who does not know a word looks it up. A learner who thinks they already know it does not. In my work as an interpreter, the misunderstandings that cause the most damage are rarely about difficult vocabulary; they are about ordinary words used with confidence. I once watched a negotiation stall for a quarter of an hour because a Vietnamese manager described a price as "sensible", meaning that it was sensitive and should not be discussed in front of other suppliers. His British counterpart assumed he was accepting it.

A second, subtler trap lies not in individual words but in precision itself. Vietnamese professionals, trained to be careful, often give figures that are too exact for the situation: "The meeting will last forty-seven minutes"; "We have one thousand two hundred and thirteen customers." In conversation, native speakers tend to round such numbers and to signal that they are doing so: "about an hour", "twelve hundred or so", "something like twelve hundred, give or take". This vague language is not laziness. It tells the listener which details matter and which do not, and it makes the speaker sound relaxed rather than mechanical.

Vagueness has its limits, of course. Expressions such as "kind of", "sevenish" or "and stuff" belong in the corridor, not in a quarterly report, where "approximately" or "in the region of" does the same job in a more formal register. The skill, at an advanced level, is not to avoid approximation but to choose the right kind for the context.

My advice to learners is simple. Be most suspicious of the words you feel most sure of, and keep a list of the ones that have already caught you out. And when someone asks how long your presentation will be, resist the urge to say "twenty-three minutes". "Twenty minutes or so" will do perfectly well.`,
    glossary: [
      ["resemble", "trông giống, na ná"],
      ["drift apart", "dần dần khác xa nhau"],
      ["homesick", "nhớ nhà"],
      ["stall", "bị đình trệ, khựng lại"],
      ["counterpart", "người ở vị trí tương đương phía bên kia"],
      ["register", "văn phong, mức độ trang trọng"],
      ["catch someone out", "khiến ai mắc lỗi, mắc bẫy"],
    ],
    questions: [
      mc("c1-n17-r1", "What is the main purpose of the article?", ["To argue that Vietnamese should stop borrowing English words", "To warn learners about misleading familiar words and about being too precise, and to give advice", "To explain the history of European cognates", "To describe how interpreters are trained"], 1, "Bài viết nói về hai cái bẫy (từ quen mặt lạ nghĩa và độ chính xác thái quá) rồi kết bằng lời khuyên."),
      mc("c1-n17-r2", "According to the writer, what does fresher mean at a British university?", ["A newly qualified developer", "A delivery rider", "A new manager", "A first-year student"], 3, "At a British university, it is an eighteen-year-old in their first week: sinh viên năm nhất."),
      mc("c1-n17-r3", "Why does the writer say that false friends are dangerous precisely because they feel safe?", ["Learners do not check words they believe they already know.", "Dictionaries give the wrong meanings for them.", "Native speakers use them to trick learners.", "They only appear in legal contracts."], 0, "A learner who thinks they already know it does not (look it up): người học không tra những từ mình tưởng đã biết."),
      mc("c1-n17-r4", "What can we infer about the British counterpart in the negotiation?", ["He understood that the price was confidential.", "He believed the Vietnamese manager thought the price was reasonable.", "He refused to continue the negotiation.", "He asked an interpreter to explain the word."], 1, "Anh ta assumed he was accepting it: nghe sensible (hợp lý), anh ta tưởng phía Việt Nam đã chấp nhận mức giá."),
      fill("c1-n17-r5", "In a formal report, the writer suggests using approximately or in the ___ of instead of informal vague expressions.", ["region"], "Where approximately or in the region of does the same job in a more formal register."),
      mc("c1-n17-r6", "What is the writer's attitude towards vague language?", ["It is a sign of laziness and should be avoided.", "It is acceptable only in writing.", "It is useful, as long as its register suits the context.", "It is typical of careless native speakers."], 2, "This vague language is not laziness… The skill is not to avoid approximation but to choose the right kind for the context."),
    ],
  }),
  task: task({
    prompt: "Viết một email nội bộ (khoảng 230–290 từ) gửi các đồng nghiệp người Việt sắp sang làm việc với văn phòng ở London. Giải thích ít nhất bốn từ dễ nhầm (từ Việt hóa hoặc cặp từ na ná): nghĩa thật và từ nên dùng thay. Thêm một đoạn khuyên cách nói ước lượng: khi nào dùng cách nói thân mật, khi nào dùng cách nói trang trọng.",
    hints: [
      "Có tiêu đề, lời chào và một câu mở nêu mục đích email.",
      "Với mỗi từ: người Việt dùng nó thế nào, người Anh hiểu thế nào, nên nói gì thay.",
      "Đoạn về con số: đưa ví dụ cách nói thân mật (or so, give or take, -ish) và trang trọng (approximately, in the region of).",
      "Kết bằng một lời nhắn cụ thể (ví dụ: bổ sung vào danh sách chung của nhóm).",
    ],
    model: "Subject: Five words that could embarrass you in London\n\nHi everyone,\n\nBefore our team visits the London office next month, I'd like to share a few words that have caught me out over the years. They look perfectly familiar, which is exactly why they are deceptive.\n\nFirst, shipper. For us, it is the person who brings a parcel to the door; in Britain, it is the company that sends the goods. If you mean the person on the motorbike, say delivery driver or courier. Second, fresher. Our HR department uses it for new graduates, but a British colleague will picture a first-year university student, so graduate or junior is much safer.\n\nThird, sensible is not the same as sensitive. A sensible plan is reasonable, whereas a sensitive issue needs careful handling, and mixing them up in a negotiation could be costly. Fourth, sympathetic means understanding, not likeable. Finally, eventually means in the end, after a long time, not possibly.\n\nA word, too, about numbers. In meetings and over lunch, our British partners rarely give exact figures. They say an hour or so, about fifty people or something like two hundred, give or take, and we will sound more natural if we do the same. Expressions such as sevenish or and stuff are fine in conversation, but not in writing. In reports and proposals, please use approximately or in the region of instead, and never put two approximations in front of the same number, as in about approximately.\n\nIf you come across any other misleading words, please add them to the shared list in our team folder.\n\nBest wishes,\nHoa",
    checklist: [
      "Giải thích ít nhất bốn từ dễ nhầm, mỗi từ có nghĩa thật và từ nên dùng thay.",
      "Có một đoạn riêng về con số với ít nhất ba cách nói ước lượng khác nhau.",
      "Phân biệt rõ cách nói thân mật (or so, -ish, and stuff) và trang trọng (approximately, in the region of).",
      "Không đặt hai từ ước lượng liền nhau trước cùng một con số (about approximately).",
      "Email có tiêu đề, lời chào, các đoạn theo từng ý và lời kết rõ ràng.",
    ],
    minWords: 230,
  }),
});
