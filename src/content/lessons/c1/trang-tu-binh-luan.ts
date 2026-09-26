import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "trang-tu-binh-luan",
  title: "Trạng từ bình luận",
  minutes: 35,
  lecture: {
    title: "Nói ra thái độ chỉ bằng một trạng từ",
    blocks: [
      p("Ở bài Lập luận và phản biện, các bạn đã dùng admittedly để nhượng bộ. Nó thuộc một nhóm lớn hơn. Người Việt khi nói tiếng Anh hay mở đầu câu nào cũng bằng **I think** hoặc **Maybe**. Người bản xứ thì gói thái độ của mình vào **một trạng từ** đứng đầu câu: **Frankly**, **Admittedly**, **Presumably**. Những trạng từ này không bổ nghĩa cho động từ, mà **bình luận cả câu**: người nói chắc chắn đến đâu, đang thừa nhận, đang đoán, hay đang nói thẳng."),
      table(
        ["Trạng từ", "Thái độ người nói", "Ví dụ"],
        ["undoubtedly, clearly, certainly", "rất chắc chắn", "Undoubtedly, this is her best novel."],
        ["arguably", "có cơ sở để khẳng định, dù có thể có người không đồng ý", "He is arguably the best player of his generation."],
        ["presumably", "đoán dựa trên logic", "Presumably, the meeting has been cancelled."],
        ["seemingly, apparently", "có vẻ như (theo bề ngoài hoặc nghe nói)", "The seemingly simple task took hours."],
        ["admittedly", "phải thừa nhận (nhượng bộ)", "Admittedly, the price is high."],
        ["frankly, honestly", "nói thẳng, thật lòng", "Frankly, I don't think it will work."],
      ),
      p("Về vị trí: phổ biến nhất là **đầu câu, có dấu phẩy**. Có thể đặt **giữa câu**, sau be hoặc trợ động từ và trước động từ chính: **He has undoubtedly improved.** Đặt **cuối câu** thì chủ yếu trong văn nói, như một lời nói thêm: **It was a mistake, frankly.** Một số trạng từ như seemingly và arguably còn đứng ngay trước tính từ hoặc cụm danh từ."),
      ex("Arguably, the internet has changed education more than any other invention.", "Có thể nói internet đã thay đổi giáo dục nhiều hơn bất kỳ phát minh nào khác.", "Arguably nghĩa là “có lý do để nói rằng”, một lời khẳng định mạnh nhưng khiêm tốn."),
      mistake("This is an arguably topic.", "This is a controversial topic.", "Thấy argue là “tranh cãi”, nhiều người Việt tưởng arguably là “gây tranh cãi”. Thực ra arguably là trạng từ, nghĩa là “có thể nói là”, và không dùng như tính từ. Muốn nói gây tranh cãi thì dùng controversial."),
      ex("Presumably, you've already heard the news.", "Chắc là anh chị đã nghe tin rồi.", "Presumably: tôi đoán vậy vì có lý do hợp lý, gần với I assume."),
      ex("The seemingly endless meeting finally ended at seven.", "Cuộc họp tưởng như dài vô tận rốt cuộc cũng kết thúc lúc bảy giờ.", "Seemingly đứng trước tính từ endless. Nó ngầm nói rằng bề ngoài là vậy, thực tế có thể khác."),
      mistake("Undoubtedly that he is the best candidate.", "Undoubtedly, he is the best candidate.", "Tiếng Việt nói “Chắc chắn rằng…”, nên người Việt hay thêm that sau trạng từ. Trạng từ bình luận không đi với that. Nếu muốn dùng that thì đổi cấu trúc: There is no doubt that he is the best candidate."),
      p("Trạng từ bình luận chia làm hai nhóm đối lập. Nhóm **rào đón** (hedging) làm lời nói mềm và thận trọng: **seemingly, apparently, presumably, arguably**. Nhóm **nhấn mạnh** (boosting) làm lời nói mạnh và dứt khoát: **undoubtedly, clearly, certainly, definitely**. Bài này là nơi chúng ta học kỹ cả hai nhóm, vì trong bài luận học thuật, chọn đúng nhóm cho thấy bạn biết **mức độ chắc chắn** của bằng chứng."),
      table(
        ["Mức độ chắc chắn", "Trạng từ", "Ví dụ"],
        ["Rất chắc", "undoubtedly, clearly", "The policy has clearly failed."],
        ["Khá chắc, có lập luận", "arguably", "The policy has arguably failed."],
        ["Đoán dựa vào logic", "presumably", "The policy has presumably been reviewed."],
        ["Chỉ theo bề ngoài", "seemingly, apparently", "The policy has seemingly worked."],
      ),
      mistake("Undoubtedly, it might possibly be true.", "It might be true. / It is undoubtedly true.", "Trộn trạng từ nhấn mạnh với từ rào đón khiến câu tự mâu thuẫn. Chọn một thái độ: chắc chắn hoặc thận trọng, không vừa chắc vừa ngờ."),
      p("Trạng từ chỉ là một trong **ba chỗ** để rào đón. Người viết học thuật còn rào bằng **động từ** (appear, seem, tend to, suggest, indicate) và bằng **động từ khuyết thiếu** (may, might, could, would). Nguyên tắc cân liều lượng: rào **một lớp** là lịch sự; rào **hai lớp** là cẩn trọng, hợp khi bằng chứng còn mỏng; rào **ba lớp trở lên** thì người đọc thấy bạn đang né tránh."),
      table(
        ["Mức độ", "Câu", "Công cụ rào đón"],
        ["Khẳng định tuyệt đối", "The policy caused the decline.", "không rào (chỉ dùng khi bằng chứng rất mạnh)"],
        ["Một lớp: động từ", "The policy appears to have caused the decline.", "appear, seem, tend to"],
        ["Một lớp: dữ liệu làm chủ ngữ", "The data suggest that the policy contributed to the decline.", "suggest, indicate, point to"],
        ["Một lớp: trạng từ", "The policy was arguably the main cause of the decline.", "arguably, probably, largely, partly"],
        ["Hai lớp: rất thận trọng", "The policy may well have been partly responsible for the decline.", "may well + partly"],
      ),
      ex("These findings would seem to suggest that the programme works best for older students.", "Những kết quả này dường như cho thấy chương trình hiệu quả nhất với sinh viên lớn tuổi.", "Would seem to suggest là cụm rào đón rất học thuật: người viết đưa ra kết luận nhưng để ngỏ khả năng sai. Đừng chồng thêm possibly hay perhaps vào câu này nữa."),
      ex("Admittedly, the new system is expensive, but it will undoubtedly save us time.", "Phải thừa nhận là hệ thống mới đắt, nhưng chắc chắn nó sẽ giúp chúng ta tiết kiệm thời gian.", "Admittedly nhượng bộ trước, undoubtedly nhấn mạnh lập trường sau. Đây là cặp rất hữu ích khi thuyết phục."),
      p("Chú ý **giọng điệu**: **frankly** và **honestly** báo hiệu sắp có một lời nói thẳng, thường là lời chê. Nói với khách hàng hay cấp trên, câu mở đầu bằng Frankly có thể nghe gay gắt. Muốn nhẹ hơn, dùng **To be honest** hoặc thêm từ làm mềm: **Frankly, I'm not sure it's the best option.**"),
      tip("Phát âm: **undoubtedly** có chữ b câm, đọc /ʌnˈdaʊ.tɪd.li/. **Presumably** đọc /prɪˈzjuː.mə.bli/, chữ s đọc là /z/. Khi trạng từ đứng đầu câu, hãy **ngắt nhẹ** sau nó, đúng chỗ dấu phẩy, để người nghe nhận ra đó là lời bình luận."),
      teacher("Khi đứng lớp, tôi nhận ra một điều: bạn nào bỏ được thói quen **I think** ở đầu mỗi câu thì tiếng Anh nghe lên hẳn một bậc. Các bạn hãy tự đặt luật: mỗi ngày viết năm câu nhận xét về tin tức hoặc công việc, mỗi câu mở đầu bằng **một trạng từ khác nhau** trong bài này. Rồi tự hỏi: “Mình đang chắc chắn, đang đoán hay đang thừa nhận?”. Trả lời được câu đó thì chọn trạng từ sẽ không bao giờ sai."),
      summary(
        "Trạng từ bình luận nói **thái độ** của người nói với cả câu: chắc chắn, đoán, thừa nhận hay nói thẳng. Dùng nó thay cho I think, Maybe.",
        "Vị trí: đầu câu kèm dấu phẩy; giữa câu sau be hoặc trợ động từ (has undoubtedly improved); cuối câu chủ yếu trong văn nói.",
        "Nhấn mạnh: **undoubtedly, clearly, certainly**. Rào đón: **arguably, presumably, seemingly, apparently**. Không trộn hai nhóm trong một câu.",
        "Rào đón ở ba chỗ: **trạng từ**, **động từ** (appear, suggest), **động từ khuyết thiếu** (may, might). Một lớp là lịch sự, hai lớp là cẩn trọng, ba lớp là né tránh.",
        "**Arguably** là có thể nói là, không phải gây tranh cãi; không thêm that sau trạng từ bình luận.",
        "**Frankly, honestly** báo trước một lời nói thẳng; với sếp và khách hàng, hãy làm mềm phần phía sau.",
      ),
    ],
  },
  words: [
    word("arguably", "/ˈɑːɡ.ju.ə.bli/", "có thể nói là, có cơ sở để cho rằng", "She is arguably the most talented designer in the company.", "ar|gu|a|bly", 0, "Trọng âm ở âm đầu: AR-gu-a-bly. Không liên quan đến nghĩa “gây tranh cãi”."),
    word("presumably", "/prɪˈzjuː.mə.bli/", "chắc là, có lẽ là (đoán có cơ sở)", "Presumably, the price includes breakfast.", "pre|sum|a|bly", 1, "Chữ s đọc là /z/: pri-ZYOO-ma-bly."),
    word("seemingly", "/ˈsiː.mɪŋ.li/", "có vẻ như, tưởng như", "They solved a seemingly impossible problem.", "seem|ing|ly", 0),
    word("undoubtedly", "/ʌnˈdaʊ.tɪd.li/", "chắc chắn, không còn nghi ngờ gì", "This is undoubtedly the best solution we have.", "un|doubt|ed|ly", 1, "Chữ b câm, giống trong doubt /daʊt/."),
    word("frankly", "/ˈfræŋ.kli/", "nói thẳng ra, thật lòng mà nói", "Frankly, the service was disappointing.", "frank|ly", 0),
    word("supposedly", "/səˈpəʊ.zɪd.li/", "nghe nói là, được cho là (nhưng có thể không đúng)", "The hotel is supposedly the best in town, but our room was tiny.", "sup|pos|ed|ly", 1, "Đọc đủ bốn âm tiết, đuôi ed đọc là /ɪd/. Tránh nói supposably."),
    word("stance", "/stɑːns/", "lập trường, quan điểm", "The company has taken a firm stance on climate change.", "stance", 0),
    word("ostensibly", "/ɒsˈten.sə.bli/", "bề ngoài là, trên danh nghĩa là (thực chất có thể khác)", "The trip was ostensibly for business, but he spent most of it on the beach.", "os|ten|si|bly", 1, "Trọng âm ở âm tiết thứ hai: os-TEN-si-bly."),
  ],
  exercises: [
    mc("c1-n15-1", "Bạn đoán (dựa vào logic) rằng đồng nghiệp đã nhận được email của mình. Bạn nói: “___, you've received my email.”", ["Frankly", "Presumably", "Undoubtedly", "Admittedly"], 1, "Presumably dùng khi đoán có cơ sở. Undoubtedly quá chắc chắn; Frankly và Admittedly không hợp nghĩa."),
    fill("c1-n15-2", "He is ___ the greatest footballer of his generation, though some would disagree. (có thể nói là)", ["arguably"], "Arguably: khẳng định mạnh nhưng thừa nhận có người không đồng ý, hợp với vế though some would disagree."),
    mc("c1-n15-3", "Câu nào vừa thừa nhận điểm yếu vừa giữ vững lập trường?", ["Frankly, the course is expensive, so nobody should take it.", "Presumably, the course is expensive.", "Admittedly, the course is expensive, but it is worth every penny.", "Seemingly, the course is worth every penny."], 2, "Admittedly nhượng bộ (thừa nhận giá cao), rồi but đưa ra lập trường (vẫn đáng đồng tiền)."),
    fill("c1-n15-4", "The ___ simple question turned out to be very difficult. (có vẻ như, tưởng như)", ["seemingly", "apparently", "deceptively"], "Seemingly (hoặc deceptively: đơn giản một cách đánh lừa) đứng trước tính từ simple: bề ngoài tưởng đơn giản, thực tế lại khó."),
    reorder("c1-n15-5", "They faced a seemingly impossible task.", "Seemingly đứng ngay trước tính từ impossible. Mạo từ a đi với seemingly vì từ này bắt đầu bằng phụ âm."),
    reorder("c1-n15-6", "It was an admittedly risky decision.", "Admittedly đứng trước tính từ risky; an đứng trước admittedly vì từ này bắt đầu bằng nguyên âm."),
    listen("c1-n15-7", "Frankly, I don't think this plan will work.", ["Nói thẳng là tôi không nghĩ kế hoạch này sẽ hiệu quả.", "Tôi tin kế hoạch này chắc chắn sẽ thành công.", "Có vẻ như kế hoạch này đã được thực hiện."], 0, "Frankly báo hiệu một lời nói thẳng, ở đây là lời nghi ngờ."),
    listen("c1-n15-8", "The shop is supposedly open until ten, but it was already closed.", ["Cửa hàng mở đến mười giờ và lúc đó vẫn còn mở.", "Cửa hàng đóng cửa lúc mười giờ như thường lệ.", "Cửa hàng không bao giờ mở cửa buổi tối.", "Nghe nói cửa hàng mở đến mười giờ, vậy mà lúc đó đã đóng rồi."], 3, "Supposedly: được cho là như vậy, nhưng thực tế lại khác."),
    correct("c1-n15-9", "Clearly that the project needs more funding.", ["Clearly, the project needs more funding.", "It is clear that the project needs more funding.", "It's clear that the project needs more funding."], "Trạng từ bình luận không đi với that. Hoặc bỏ that và đặt dấu phẩy sau clearly, hoặc đổi sang It is clear that + mệnh đề."),
    correct("c1-n15-10", "The hotel is supposably the best in town, but the rooms are tiny.", ["The hotel is supposedly the best in town, but the rooms are tiny."], "Supposably không phải là từ chuẩn. Trạng từ đúng là supposedly /səˈpəʊ.zɪd.li/: được cho là, nghe nói là (nhưng có thể không đúng)."),
  ],
  speaking: [
    say("Frankly, I think we need more time.", "Nói thẳng là tôi nghĩ chúng ta cần thêm thời gian."),
    say("Presumably, the train will be late again.", "Chắc là tàu lại đến muộn nữa rồi."),
    say("It is arguably the best café in town.", "Có thể nói đó là quán cà phê ngon nhất thị trấn."),
  ],
  freeSpeaking: free(
    "What do you think of a recent change in your city, school or workplace? How sure are you about its effects?",
    "Nhận xét một thay đổi gần đây ở thành phố, trường học hoặc nơi làm việc của bạn. Thể hiện rõ mức độ chắc chắn bằng trạng từ bình luận (undoubtedly, admittedly, presumably, arguably, frankly) và một cách rào đón bằng động từ; không mở câu bằng I think.",
    "My company recently introduced a four-day week for the design team, and it has undoubtedly made people happier. Admittedly, the days are longer, and some clients have complained that we're harder to reach on Fridays. Productivity appears to have stayed about the same, although we won't know for certain until the annual figures come out. Presumably, the management will extend the scheme if the numbers look good. Frankly, I'd be surprised if they didn't, because it's arguably the most popular decision they've made in years.",
  ),
  dialogue: dialogue(
    "Hội đồng tuyển dụng chọn ứng viên",
    "Sau một ngày phỏng vấn vị trí trưởng nhóm kinh doanh, anh Khoa, giám đốc kinh doanh, và Sarah, chuyên gia tuyển dụng người Anh, cân nhắc giữa hai ứng viên cuối cùng là Linh và Tuấn.",
    { A: "Anh Khoa, giám đốc kinh doanh", B: "Sarah, chuyên gia tuyển dụng" },
    A("So, Sarah, which candidate impressed you more?", "Vậy Sarah, ứng viên nào làm chị ấn tượng hơn?"),
    B("Linh, undoubtedly. She's arguably the strongest applicant we've interviewed this year.", "Chắc chắn là Linh. Có thể nói cô ấy là ứng viên mạnh nhất chúng ta phỏng vấn trong năm nay."),
    A("Admittedly, she has less experience than Tuấn.", "Phải thừa nhận là cô ấy ít kinh nghiệm hơn Tuấn."),
    B("True, but she has clearly achieved more in less time. Her last project apparently doubled the client's sales.", "Đúng vậy, nhưng rõ ràng cô ấy đạt được nhiều hơn trong thời gian ngắn hơn. Nghe nói dự án gần nhất của cô ấy đã giúp doanh số của khách hàng tăng gấp đôi."),
    A("Apparently? Have you checked that?", "Nghe nói thôi sao? Chị đã kiểm tra chưa?"),
    B("Not yet. Presumably her references can confirm it. I'll call them tomorrow.", "Chưa. Chắc là người giới thiệu của cô ấy có thể xác nhận. Mai tôi sẽ gọi cho họ."),
    A("And Tuấn? Frankly, I found him a little arrogant.", "Còn Tuấn? Nói thẳng là tôi thấy anh ta hơi kiêu ngạo."),
    B("To be honest, I felt the same, although he was supposedly very popular at his last company.", "Thật lòng thì tôi cũng thấy vậy, dù nghe nói anh ấy rất được quý ở công ty cũ."),
    A("He'd certainly be good with clients. I'm just not sure he'd fit our team.", "Chắc chắn anh ta sẽ làm việc tốt với khách hàng. Tôi chỉ không chắc anh ta hợp với đội mình."),
    B("Then presumably we're agreed on Linh, as long as her references are positive.", "Vậy có lẽ chúng ta thống nhất chọn Linh, miễn là người giới thiệu nhận xét tốt."),
    A("Definitely. Let's make her an offer by Friday.", "Nhất định rồi. Chúng ta gửi thư mời cho cô ấy trước thứ sáu nhé."),
  ),
  dialogueQuestions: [
    listenQ("c1-n15-d1", "Why does Khoa question Sarah's use of the word “apparently”?", "Her last project apparently doubled the client's sales. Apparently? Have you checked that?", ["He thinks the sales figures are too low.", "He wants to know whether the claim has actually been checked.", "He does not understand the word.", "He believes the claim came from Tuấn."], 1, "Apparently nghĩa là nghe nói, theo bề ngoài; Khoa nhận ra thông tin chưa được kiểm chứng nên hỏi Have you checked that?"),
    mc("c1-n15-d2", "What reservation do both interviewers have about Tuấn?", ["He seems a little arrogant and might not fit the team.", "He has no experience with clients.", "His references are negative.", "He asked for too high a salary."], 0, "Khoa: I found him a little arrogant... I'm just not sure he'd fit our team. Sarah: I felt the same."),
    mc("c1-n15-d3", "On what condition will they offer Linh the job?", ["That she accepts a lower salary", "That she can start on Friday", "That her references are positive", "That Tuấn turns down the offer"], 2, "As long as her references are positive: miễn là người giới thiệu nhận xét tốt."),
  ],
  reading: reading({
    title: "The trouble with certainty",
    text: `Few words do more damage in public debate than "proven". Headlines announce that coffee has been proven to prevent cancer, that screen time is proven to harm children, that a new diet is proven to work. Frankly, most of these claims are nothing of the kind. The studies behind them are usually far more cautious than the headlines suggest, and the scientists who wrote them would presumably be embarrassed to see their conclusions described in such terms.

Academic writers, by contrast, are trained to hedge. A typical research article does not say that a drug cures a disease; it says that the results suggest the drug may reduce symptoms in some patients. To an outsider, this can look like excessive caution, or even cowardice. Why not simply say what you found? The answer is that hedging is not a sign of weakness but of precision. Each qualifying word tells the reader something about the strength of the evidence: how large the sample was, how consistent the results were, and how far they can be generalised.

Admittedly, hedging can be overdone. A paper in which every claim is surrounded by "possibly", "to some extent" and "it could be argued" becomes almost impossible to read, and readers may reasonably conclude that the author is hiding behind the language rather than using it. Arguably, some academic fields have developed a style so cautious that their findings never reach the public at all. The skill lies in matching the strength of the language to the strength of the evidence, no more and no less.

This is precisely where many journalists, and many students, go wrong. When the evidence is strong, as it undoubtedly is for the link between smoking and lung cancer, there is no need to hedge; to write that smoking "may possibly be associated with" cancer would be misleading in the opposite direction. When the evidence is weak or preliminary, however, confident language turns a tentative finding into a seemingly established fact. Once such a "fact" has been repeated often enough, it is extraordinarily difficult to correct.

The consequences are not merely academic. During recent health crises, public trust in expert advice has seemingly declined, at least in part because advice presented as certain later had to be changed. Had officials been more willing to say "this is our best current estimate, and it may change", the later corrections would arguably have caused less anger.

None of this means that we should all start writing like nervous researchers. It does mean, though, that readers deserve to know how sure a writer is. A well-chosen adverb or a carefully placed "may" is not a sign of weakness. It is, quite simply, a form of honesty.`,
    glossary: [
      ["hedge", "rào đón, tránh khẳng định tuyệt đối"],
      ["cowardice", "sự hèn nhát"],
      ["qualifying word", "từ giới hạn, làm nhẹ nghĩa của câu"],
      ["generalise", "khái quát hóa"],
      ["overdone", "bị làm quá, lạm dụng"],
      ["preliminary", "sơ bộ, ban đầu"],
      ["misleading", "gây hiểu lầm"],
    ],
    questions: [
      mc("c1-n15-r1", "What is the writer's main argument?", ["Scientists should stop hedging their claims.", "The strength of the language should match the strength of the evidence.", "Newspapers should stop reporting on science.", "Hedging is always a sign of weak research."], 1, "Đoạn ba nêu thẳng: The skill lies in matching the strength of the language to the strength of the evidence."),
      mc("c1-n15-r2", "According to the writer, what does each qualifying word tell the reader?", ["How strong the evidence is", "Who paid for the study", "Where the study was published", "How long the study took"], 0, "Each qualifying word tells the reader something about the strength of the evidence."),
      mc("c1-n15-r3", "Why does the writer mention smoking and lung cancer?", ["To argue that research on smoking is unreliable", "To criticise doctors for being too cautious", "To give an example where hedging would be misleading because the evidence is strong", "To show that journalists exaggerate every health risk"], 2, "Bằng chứng về thuốc lá rất mạnh (undoubtedly), nên viết may possibly be associated with lại gây hiểu lầm theo chiều ngược lại."),
      fill("c1-n15-r4", "In paragraph 4, a “tentative” finding is one that is not yet ___. (chắc chắn, đã được khẳng định)", ["certain", "confirmed", "established", "definite", "proven"], "Tentative: tạm thời, còn dè dặt. Bài đọc đối lập tentative finding với established fact."),
      mc("c1-n15-r5", "What is the writer's attitude towards hedging?", ["It is useless and should be avoided.", "It is a sign of cowardice.", "It is only suitable for journalists.", "It is valuable when used in proportion to the evidence."], 3, "Tác giả bảo vệ việc rào đón (a form of honesty) nhưng cũng thừa nhận nó có thể bị lạm dụng (can be overdone)."),
      mc("c1-n15-r6", "In the first paragraph, the word “Frankly” signals that the writer is about to", ["make a direct, critical statement", "make a guess", "admit a weakness in the argument", "quote a scientist"], 0, "Frankly báo hiệu một lời nói thẳng, ở đây là lời chê: most of these claims are nothing of the kind."),
    ],
  }),
  task: task({
    prompt: "Hãy viết một bài bình luận (khoảng 230–280 từ) bằng tiếng Anh về một sản phẩm, một dịch vụ hoặc một chính sách mới ở nơi bạn sống. Thể hiện rõ mức độ chắc chắn của mình bằng trạng từ bình luận và các cách rào đón khác, thay vì lặp lại I think.",
    hints: [
      "Điều bạn đã tận mắt thấy: dùng clearly, undoubtedly, certainly.",
      "Điều bạn đoán hoặc nghe nói: dùng presumably, apparently, seemingly; nhận định có thể bị phản bác: dùng arguably.",
      "Nhượng bộ một nhược điểm bằng Admittedly..., rồi khẳng định lập trường bằng However hoặc but.",
      "Thêm một câu rào đón bằng động từ (appear to, would seem to suggest) hoặc may well; không rào quá hai lớp trong một câu.",
    ],
    model: "The new metro line in Ho Chi Minh City is undoubtedly the most important transport project the city has seen in decades. Admittedly, it opened years behind schedule and far over budget, and the ticket system was seemingly designed without much thought for older passengers, many of whom still struggle with the machines. Frankly, the first few weeks were chaotic, with long queues at almost every station.\n\nHowever, it would be unfair to judge the project on its difficult start. The trains are clean, fast and punctual, and they have clearly reduced traffic along the route, at least during the rush hour. Passenger numbers appear to have risen steadily since the opening, which suggests that the system is gradually winning people's trust.\n\nPresumably, the government will extend the network once more funding becomes available, although the timetable for the next lines remains uncertain. Arguably, the biggest change is cultural rather than practical: many young people are apparently choosing the metro over their motorbikes for the first time, something that would have seemed unthinkable only a few years ago.\n\nOf course, one line cannot solve the city's transport problems on its own. The evidence so far would seem to suggest that the metro works best when it is combined with good bus connections and safe walking routes, and these are still largely missing. If the city invests in them, the metro will certainly become the backbone of a cleaner, more pleasant city. If it does not, the line may well remain an impressive but underused symbol.",
    checklist: [
      "Dùng ít nhất sáu trạng từ bình luận khác nhau và không mở câu bằng I think.",
      "Có cả trạng từ nhấn mạnh (undoubtedly, clearly, certainly) lẫn trạng từ rào đón (arguably, presumably, seemingly, apparently).",
      "Trạng từ đầu câu có dấu phẩy phía sau; không thêm that sau trạng từ.",
      "Mức độ chắc chắn khớp với bằng chứng: điều đã thấy dùng clearly, điều suy đoán dùng presumably.",
      "Có một câu nhượng bộ bằng Admittedly rồi mới khẳng định lập trường.",
      "Có ít nhất một câu rào đón bằng động từ (appear to, would seem to suggest) hoặc may well, và không câu nào rào quá hai lớp.",
    ],
    minWords: 230,
  }),
});
