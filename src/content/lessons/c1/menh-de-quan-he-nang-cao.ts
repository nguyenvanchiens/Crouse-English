import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "menh-de-quan-he-nang-cao",
  title: "Mệnh đề quan hệ nâng cao",
  minutes: 35,
  lecture: {
    title: "Giới từ + which/whom, whereby, lượng từ + of whom/which",
    blocks: [
      p("Ở cấp B2, bạn đã dùng who, which, that, whose để nối câu. Nhưng khi viết email trang trọng, báo cáo hay bài IELTS Writing, bạn sẽ cần những câu như **the conditions under which staff work** hay **two hundred applicants, most of whom were graduates**. Đây là các dạng mệnh đề quan hệ giúp câu văn gọn, chặt và nghe rất chuyên nghiệp."),
      table(
        ["Cấu trúc", "Văn nói", "Văn trang trọng"],
        ["Giới từ + which", "This is the company I work for.", "This is the company for which I work."],
        ["Giới từ + whom", "The man I spoke to was helpful.", "The man to whom I spoke was helpful."],
        ["in which thay cho where", "the city where I grew up", "the city in which I grew up"],
        ["whereby", "a system where users pay monthly", "a system whereby users pay monthly"],
      ),
      p("Quy tắc: khi đưa giới từ lên trước, chỉ được dùng **which** (cho vật) hoặc **whom** (cho người). **Không bao giờ** dùng that hay who ngay sau giới từ. Giới từ nào thì do động từ hoặc tính từ trong mệnh đề quyết định: rely **on**, responsible **for**, work **under** conditions."),
      ex("The conditions under which the staff work are unacceptable.", "Điều kiện làm việc của nhân viên là không thể chấp nhận được.", "Gốc là: the staff work under these conditions. Giới từ under được đưa lên trước which."),
      ex("She is the colleague on whom I rely most.", "Cô ấy là đồng nghiệp mà tôi dựa vào nhiều nhất.", "Rely on somebody, nên giới từ on đi cùng whom."),
      mistake("The person to who I spoke was very helpful.", "The person to whom I spoke was very helpful.", "Tiếng Việt chỉ có một chữ “mà” dù đứng ở đâu. Tiếng Anh đổi hình thức: đứng sau giới từ thì bắt buộc là whom. Cũng không dùng that sau giới từ: không nói in that I was born."),
      mistake("The hotel in which we stayed in was lovely.", "The hotel in which we stayed was lovely.", "Đã đưa giới từ in lên trước which thì phải bỏ in ở cuối. Người Việt hay đọc lại câu gốc “stay in” và quên xóa giới từ thừa."),
      p("**Whereby** nghĩa là “mà theo đó, nhờ đó”, dùng để mô tả **cách một hệ thống vận hành**. Nó thường đi sau những danh từ như **system, scheme, agreement, arrangement, process**. Whereby rất trang trọng; trong văn nói người ta dùng where hoặc in which."),
      ex("The government introduced a scheme whereby first-time buyers pay lower taxes.", "Chính phủ đưa ra một chương trình mà theo đó người mua nhà lần đầu được đóng thuế thấp hơn."),
      p("Khi muốn nói **một phần** của nhóm người hoặc vật vừa nhắc, ta dùng **lượng từ + of whom** (người) hoặc **lượng từ + of which** (vật). Lượng từ có thể là some, many, most, all, none, both, neither, each, half, one, two… Mệnh đề này luôn đứng **sau dấu phẩy**."),
      table(
        ["Hai câu riêng", "Gộp bằng mệnh đề quan hệ"],
        ["I have three brothers. None of them lives nearby.", "I have three brothers, none of whom lives nearby."],
        ["We received two hundred applications. Most of them were excellent.", "We received two hundred applications, most of which were excellent."],
        ["She wrote four novels. Two of them became films.", "She wrote four novels, two of which became films."],
      ),
      mistake("I invited ten friends, most of them came late.", "I invited ten friends, most of whom came late.", "Tiếng Việt nối hai câu bằng dấu phẩy rất thoải mái, nhưng tiếng Anh coi đó là lỗi nối câu. Hoặc dùng most of whom, hoặc tách thành hai câu: I invited ten friends. Most of them came late."),
      p("**Which** còn có thể thay cho **cả mệnh đề** phía trước, không chỉ một danh từ. Loại này luôn có dấu phẩy phía trước và không dùng that hay what thay được."),
      ex("The train was cancelled, which meant we had to take a taxi.", "Chuyến tàu bị hủy, điều đó có nghĩa là chúng tôi phải đi taxi.", "Which ở đây là “việc tàu bị hủy”. Người Việt hay viết nhầm what meant, vì dịch “điều mà”."),
      p("Văn trang trọng còn dùng **which** như một từ hạn định đứng trước danh từ để nối cả ý phía trước: **at which point** (đến lúc đó thì), **in which case** (nếu vậy thì), **by which time** (đến lúc ấy thì). Các cụm **the extent to which** (mức độ mà) và **the way in which** (cách mà) cũng rất hay gặp trong bài luận và báo cáo."),
      ex("The client may reject the design, in which case we will have to start again.", "Khách hàng có thể từ chối bản thiết kế, nếu vậy thì chúng ta sẽ phải làm lại từ đầu.", "In which case thay cho if that happens. Luôn có dấu phẩy phía trước, và which ở đây thay cho cả vế the client may reject the design."),
      tip("Mẹo chọn giới từ: tách mệnh đề ra thành một câu riêng. “I spoke **to** the man” thì viết **to whom**; “I work **for** the company” thì viết **for which**. Còn với lượng từ, hãy thử thay bằng **of them**: nếu “most of them” đúng thì “most of whom/which” cũng đúng."),
      teacher("Khi chấm bài viết, tôi thấy học viên thường mắc một trong hai tật: hoặc sợ không dám dùng, hoặc dùng quá tay đến mức câu nào cũng có **to whom**. Mỗi đoạn văn trang trọng chỉ cần **một hai câu** như vậy là đủ tạo ấn tượng. Cách luyện của tôi: mỗi ngày lấy hai câu ngắn trong bài báo, ví dụ “We interviewed ten people. None of them agreed.”, rồi gộp lại bằng **none of whom**. Làm đều một tháng, các bạn sẽ viết được mà không cần nghĩ."),
      summary(
        "Giới từ đứng trước thì chỉ dùng **which** (vật) hoặc **whom** (người), không bao giờ dùng that hay who.",
        "Đã đưa giới từ lên trước thì **bỏ giới từ ở cuối**: the hotel in which we stayed.",
        "**Whereby** nghĩa là mà theo đó, đi sau system, scheme, agreement, arrangement, process.",
        "**Lượng từ + of whom / of which** luôn đứng sau dấu phẩy: most of whom, none of which. Không nối hai câu bằng dấu phẩy + of them.",
        "**Dấu phẩy + which** có thể thay cho cả mệnh đề phía trước: The train was cancelled, which meant we took a taxi.",
        "Nối ý trong văn trang trọng: **at which point, in which case, by which time, the extent to which, the way in which**.",
      ),
    ],
  },
  words: [
    word("whereby", "/weəˈbaɪ/", "mà theo đó, nhờ đó (trang trọng)", "We have an arrangement whereby my neighbour feeds the cat when I travel.", "where|by", 1),
    word("respondent", "/rɪˈspɒn.dənt/", "người trả lời khảo sát", "The survey had five hundred respondents, most of whom were under thirty.", "re|spon|dent", 1),
    word("scheme", "/skiːm/", "chương trình, kế hoạch (của tổ chức)", "The company runs a scheme whereby staff can buy shares at a discount.", "scheme", 0, "Chữ ch đọc là /k/: /skiːm/, không đọc “xờ-chim”."),
    word("entitle", "/ɪnˈtaɪ.təl/", "cho quyền, cho phép hưởng", "All employees are entitled to twenty days of paid leave.", "en|ti|tle", 1),
    word("applicant", "/ˈæp.lɪ.kənt/", "người nộp đơn, ứng viên", "We interviewed six applicants, none of whom had enough experience.", "ap|pli|cant", 0),
    word("incentive", "/ɪnˈsen.tɪv/", "sự khuyến khích, động lực", "Lower taxes are an incentive for companies to invest.", "in|cen|tive", 1),
    word("framework", "/ˈfreɪm.wɜːk/", "khuôn khổ, khung", "This is the framework within which all decisions are made.", "frame|work", 0),
    word("beneficiary", "/ˌben.ɪˈfɪʃ.ər.i/", "người thụ hưởng, người được hưởng lợi", "The main beneficiaries of the scheme, most of whom are farmers, receive free training.", "ben|e|fic|iar|y", 2, "Trọng âm ở âm tiết thứ ba: ben-e-FISH-er-y; chữ c đọc là /ʃ/."),
  ],
  exercises: [
    mc("c1-n12-1", "The manager ___ I reported the problem was very understanding.", ["to who", "to whom", "to that", "whom to"], 1, "Report something to somebody, nên giới từ to đứng trước whom. Sau giới từ không dùng who hay that."),
    fill("c1-n12-2", "I have two sisters, both of ___ work as nurses.", ["whom"], "Both of whom: cả hai người trong số đó. Chỉ người nên dùng whom."),
    mc("c1-n12-3", "Chọn câu đúng.", ["The project on which we worked on was a success.", "The project on that we worked was a success.", "The project which we worked was a success.", "The project on which we worked was a success."], 3, "Work on a project: đưa on lên trước which và bỏ on ở cuối câu."),
    fill("c1-n12-4", "The bank introduced a system ___ customers can pay by phone. (mà theo đó, một từ)", ["whereby", "where"], "Whereby là cách viết trang trọng nhất; where cũng đúng nhưng mang tính văn nói hơn."),
    reorder("c1-n12-5", "They agreed on a plan whereby profits are shared.", "Whereby đứng sau danh từ plan và mở ra một mệnh đề đầy đủ: profits are shared."),
    reorder("c1-n12-6", "I have three cousins, none of whom lives nearby.", "Lượng từ none + of whom, đứng sau dấu phẩy, bổ sung thông tin về three cousins. Trong văn trang trọng, none đi với động từ số ít: lives."),
    listen("c1-n12-7", "We interviewed twenty candidates, none of whom had the right experience.", ["Không ai trong số hai mươi ứng viên được phỏng vấn có kinh nghiệm phù hợp.", "Cả hai mươi ứng viên đều có kinh nghiệm phù hợp.", "Chúng tôi chưa phỏng vấn ứng viên nào."], 0, "None of whom: không ai trong số họ."),
    listen("c1-n12-8", "He apologised in front of everyone, which I didn't expect.", ["Anh ấy không xin lỗi, đúng như tôi dự đoán.", "Anh ấy muốn tôi xin lỗi trước mặt mọi người.", "Tôi đã không ngờ anh ấy lại xin lỗi trước mặt mọi người."], 2, "Which thay cho cả mệnh đề trước: việc anh ấy xin lỗi trước mặt mọi người."),
    correct("c1-n12-9", "The colleague on who I rely most is leaving the company.", ["The colleague on whom I rely most is leaving the company.", "The colleague I rely on most is leaving the company.", "The colleague who I rely on most is leaving the company.", "The colleague whom I rely on most is leaving the company.", "The colleague that I rely on most is leaving the company."], "Ngay sau giới từ on chỉ được dùng whom (cho người), không dùng who hay that. Nếu muốn dùng who hoặc that thì phải đưa on về cuối: the colleague who I rely on most."),
    correct("c1-n12-10", "We received fifty applications, most of them were excellent.", ["We received fifty applications, most of which were excellent.", "We received fifty applications, and most of them were excellent."], "Hai mệnh đề độc lập không được nối bằng một dấu phẩy trơn. Dùng lượng từ + of which (vì applications là vật), hoặc thêm từ nối and."),
  ],
  speaking: [
    say("She is the person on whom I rely most.", "Cô ấy là người mà tôi dựa vào nhiều nhất."),
    say("I bought three books, none of which I have read yet.", "Tôi đã mua ba cuốn sách, chưa đọc cuốn nào cả."),
    say("The meeting ran late, which meant I missed my bus.", "Cuộc họp kéo dài, vì thế tôi lỡ chuyến xe buýt."),
  ],
  freeSpeaking: free(
    "Describe an organisation, club or team that you belong to. How does it work, and who are the people in it?",
    "Mô tả một tổ chức, câu lạc bộ hoặc nhóm mà bạn tham gia: nó vận hành thế nào, gồm những ai. Dùng giới từ + which/whom, lượng từ + of whom/which, whereby và dấu phẩy + which.",
    "I belong to a running club in Hanoi, which I joined about three years ago. There are around sixty members, most of whom are office workers in their thirties, although a few of us are over fifty. We have an arrangement whereby each member leads one Sunday run a year, which means everyone gets to choose a route at least once. The person to whom I owe the most is our coach, Minh, without whose advice I would probably have given up after the first month. We also organise charity races, two of which have raised money for a children's hospital.",
  ),
  dialogue: dialogue(
    "Trình bày kết quả khảo sát nhân viên",
    "Chị Phương, trưởng phòng nhân sự của một nhà máy may ở Đồng Nai, trình bày kết quả khảo sát nhân viên với bà Kim, giám đốc điều hành người Hàn Quốc.",
    { A: "Bà Kim, giám đốc điều hành", B: "Chị Phương, trưởng phòng nhân sự" },
    A("Phương, could you summarise the staff survey for me?", "Chị Phương, chị tóm tắt giúp tôi kết quả khảo sát nhân viên nhé?"),
    B("Of course. We received three hundred responses, most of which were very detailed.", "Vâng ạ. Chúng tôi nhận được ba trăm phiếu trả lời, phần lớn trong số đó rất chi tiết."),
    A("Impressive. What was the main complaint?", "Ấn tượng đấy. Phàn nàn chính là gì?"),
    B("The conditions under which the night shift works. Many respondents, half of whom work at night, mentioned poor lighting and a lack of hot meals.", "Điều kiện làm việc của ca đêm. Nhiều người trả lời, một nửa trong số đó làm ca đêm, nhắc đến ánh sáng kém và thiếu bữa ăn nóng."),
    A("That's serious. Is there a manager to whom they can report these problems?", "Chuyện này nghiêm trọng. Có người quản lý nào để họ báo cáo những vấn đề này không?"),
    B("There is, but only one, and she's responsible for two hundred people, which makes it almost impossible for her to respond quickly.", "Có, nhưng chỉ một người, và chị ấy phụ trách hai trăm người, điều đó khiến chị ấy gần như không thể phản hồi kịp."),
    A("Then let's appoint two more supervisors. What else did they suggest?", "Vậy ta bổ nhiệm thêm hai giám sát viên. Họ còn đề xuất gì nữa?"),
    B("A scheme whereby staff can swap shifts through an app. Three colleagues, none of whom works in IT, have even designed a prototype.", "Một chương trình mà theo đó nhân viên có thể đổi ca qua ứng dụng. Ba đồng nghiệp, không ai trong số họ làm công nghệ thông tin, thậm chí đã thiết kế thử một bản mẫu."),
    A("I love that. Who would be in charge of the project?", "Tôi rất thích ý này. Ai sẽ phụ trách dự án?"),
    B("Mr Hải, the operations manager. He approved the idea yesterday, which means we could launch it next month.", "Anh Hải, quản lý vận hành. Hôm qua anh ấy đã duyệt ý tưởng, nghĩa là tháng sau chúng ta có thể triển khai."),
    A("Excellent. Please send me the full report, including every recommendation.", "Tuyệt. Chị gửi tôi báo cáo đầy đủ nhé, kèm tất cả các đề xuất."),
    B("I'll send it to you this afternoon.", "Chiều nay tôi sẽ gửi cho bà."),
  ),
  dialogueQuestions: [
    listenQ("c1-n12-d1", "What was the main complaint in the staff survey?", "The conditions under which the night shift works. Many respondents, half of whom work at night, mentioned poor lighting and a lack of hot meals.", ["Low pay on the day shift", "Working conditions on the night shift", "The distance to the factory", "The new shift-swapping app"], 1, "The conditions under which the night shift works: điều kiện làm việc của ca đêm, cụ thể là ánh sáng kém và thiếu bữa ăn nóng."),
    mc("c1-n12-d2", "What is surprising about the prototype of the shift-swapping app?", ["It was bought from another company.", "It was designed by Ms Kim herself.", "It was designed by staff who do not work in IT.", "It has already been launched."], 2, "Three colleagues, none of whom works in IT, have even designed a prototype: ba người không ai làm công nghệ thông tin."),
    mc("c1-n12-d3", "Why is it almost impossible for the only night manager to respond quickly?", ["She is responsible for two hundred people.", "She works only during the day.", "She has just joined the company.", "She does not speak Korean."], 0, "She's responsible for two hundred people, which makes it almost impossible for her to respond quickly."),
  ],
  reading: reading({
    title: "Evaluation of the Mekong Rural Skills Scheme: summary of findings",
    text: `Introduction. The Mekong Rural Skills Scheme was launched as a three-year pilot programme whereby young people in rural districts could receive free vocational training in exchange for committing to work locally for at least two years after graduating. This report summarises the findings of an independent evaluation, the purpose of which was to assess the extent to which the scheme has met its original objectives.

Participation and completion. Over the three years, 2,400 young people enrolled on the scheme, most of whom were between eighteen and twenty-four. Courses were offered in six fields, the most popular of which were electrical installation, agricultural technology and hospitality. Completion rates were high: 81 per cent of trainees finished their course, a figure that compares favourably with similar programmes elsewhere in the region. Those who dropped out, a majority of whom were women, most often mentioned family responsibilities or the distance to training centres, neither of which the scheme had originally been designed to address.

Employment outcomes. The central question on which the evaluation focused was whether trainees found work in their home districts. Of the graduates contacted a year after finishing, 68 per cent were employed, two thirds of whom were working within their own province. This represents a significant improvement on the situation before the scheme, at which point fewer than half of young people without qualifications could find local work. Graduates in electrical installation were the most successful group, many of whom had been hired by solar energy companies that have recently expanded into the region.

Weaknesses. The evaluation also identified several weaknesses. The process by which trainees were matched with employers was described by many respondents as slow and informal, relying heavily on personal connections. In addition, the two-year commitment to work locally, which was intended to stop young people from leaving for the cities, proved almost impossible to enforce. Several employers, to whom trainees had been sent on placements, complained that they had received little information about the trainees' skills in advance.

Recommendations. On the basis of these findings, the evaluation recommends that the scheme be extended for a further five years, provided that three changes are made. First, a transport allowance should be introduced, without which many trainees from remote villages cannot attend regularly. Second, a digital system should be developed whereby employers can view trainees' qualifications before offering placements. Third, childcare should be provided at the larger centres, in which case the dropout rate among women is expected to fall considerably.

Overall, the scheme has delivered clear benefits to its beneficiaries and to the local economy, and the problems identified are ones that can be solved at modest cost.`,
    glossary: [
      ["pilot programme", "chương trình thí điểm"],
      ["vocational training", "đào tạo nghề"],
      ["enrol", "ghi danh, đăng ký học"],
      ["compare favourably with", "tốt hơn khi so với"],
      ["placement", "đợt thực tập tại doanh nghiệp"],
      ["enforce", "buộc thực hiện, thi hành"],
      ["allowance", "khoản trợ cấp"],
      ["modest", "vừa phải, không lớn"],
    ],
    questions: [
      mc("c1-n12-r1", "What is the overall conclusion of the evaluation?", ["The scheme has failed and should be closed.", "The scheme has been broadly successful and should continue with some changes.", "The scheme should be moved to the cities.", "The scheme is too expensive to continue."], 1, "Phần Recommendations đề nghị gia hạn thêm năm năm kèm ba thay đổi, và câu cuối khẳng định chương trình mang lại lợi ích rõ ràng."),
      mc("c1-n12-r2", "Why did most trainees who dropped out leave the scheme?", ["Family responsibilities or the distance to training centres", "The poor quality of the teaching", "They had found jobs in the cities", "The courses were too expensive"], 0, "Most often mentioned family responsibilities or the distance to training centres."),
      fill("c1-n12-r3", "The most successful group of graduates had trained in electrical ___.", ["installation"], "Graduates in electrical installation were the most successful group."),
      mc("c1-n12-r4", "What can be inferred about the two-year commitment to work locally?", ["It was the most popular part of the scheme.", "Employers enforced it strictly.", "In practice, trainees who wanted to leave could not easily be stopped.", "It was abolished in the first year."], 2, "Proved almost impossible to enforce: gần như không thể bắt buộc thực hiện, tức là ai muốn đi thì vẫn đi được."),
      mc("c1-n12-r5", "In the Recommendations, “in which case” means", ["in spite of this", "if that happens", "for this reason only", "at the same time"], 1, "In which case = if that happens: nếu có nhà trẻ ở các trung tâm lớn thì tỉ lệ bỏ học của nữ sẽ giảm."),
      mc("c1-n12-r6", "What is the tone of the report's final sentence?", ["Positive but realistic", "Deeply pessimistic", "Angry and critical", "Uncertain and confused"], 0, "Câu cuối vừa khẳng định lợi ích rõ ràng vừa thừa nhận có vấn đề, dù có thể giải quyết với chi phí vừa phải."),
    ],
  }),
  task: task({
    prompt: "Hãy viết một báo cáo trang trọng (khoảng 230–280 từ) tóm tắt kết quả một cuộc khảo sát (khách hàng hoặc nhân viên): nêu mục đích, điểm tích cực, vấn đề chính và đề xuất giải pháp. Dùng các dạng mệnh đề quan hệ nâng cao của bài để câu văn gọn và chặt.",
    hints: [
      "Nêu số người trả lời rồi gộp câu bằng most of whom, a third of whom, two of which.",
      "Nêu vấn đề bằng giới từ + which/whom: the areas in which, no one to whom, the process by which.",
      "Đề xuất giải pháp bằng a system / scheme whereby..., và dùng dấu phẩy + which để bình luận cả một ý.",
      "Nối ý bằng at which point, in which case, by which time hoặc the extent to which.",
    ],
    model: "Customer satisfaction survey: summary of results\n\nLast month we surveyed five hundred customers, most of whom had used our delivery service for more than a year. The purpose of the survey was to identify the areas in which our service falls short of expectations and to measure the extent to which recent changes have been noticed.\n\nOverall, the results were positive, which suggests that the new tracking system is working. Almost eighty per cent of respondents rated our drivers as polite and punctual, and a clear majority said they would recommend us to friends.\n\nHowever, the area in which we performed worst was customer support. Many respondents, a third of whom were small business owners, complained that there was no one to whom they could speak outside office hours. Several also criticised the process by which refunds are handled, describing it as slow and confusing. In some cases, customers waited more than a month for their money, by which time many had already moved to a competitor.\n\nTo address these issues, we propose a system whereby customers can request and track refunds online without having to call our office. We have also received three proposals for a night support team, two of which are already within our budget. The third would require additional funding, in which case it could only be introduced next year.\n\nFinally, we recommend repeating the survey in six months, at which point we will be able to measure the effect of these changes. The full data, on which this summary is based, are available from the customer service department.",
    checklist: [
      "Có ít nhất ba cấu trúc giới từ + which hoặc whom (the area in which, no one to whom, the process by which).",
      "Có ít nhất hai cấu trúc lượng từ + of whom / of which, đứng sau dấu phẩy.",
      "Có một câu dùng whereby sau system, scheme hoặc agreement.",
      "Có một câu dùng dấu phẩy + which thay cho cả mệnh đề trước.",
      "Có ít nhất một cụm at which point, in which case, by which time hoặc the extent to which.",
      "Không có giới từ thừa ở cuối mệnh đề và không dùng that hay who ngay sau giới từ.",
    ],
    minWords: 230,
  }),
});
