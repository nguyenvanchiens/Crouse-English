import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "dong-tu-tuong-thuat",
  title: "Tường thuật tinh tế",
  minutes: 35,
  lecture: {
    title: "Động từ tường thuật và mẫu câu đi kèm",
    blocks: [
      p("Sau một cuộc họp căng thẳng, sếp hỏi bạn: “Vậy khách hàng nói gì?”. Nếu bạn chỉ lặp **he said… she said…**, người nghe không biết ai đang trách ai, ai xin lỗi, ai khăng khăng giữ ý. Người viết giỏi chọn đúng **động từ tường thuật** (accuse, deny, urge, insist…) để kể lại cả **thái độ** của người nói, không cần chép lại từng chữ. Ở cấp B2 bạn đã gặp suggest và tell; bài này đi trọn các mẫu câu khó hơn."),
      table(
        ["Mẫu câu", "Động từ thường gặp", "Ví dụ"],
        ["V + to V", "agree, refuse, offer, promise, threaten", "She refused to sign the contract."],
        ["V + người + to V", "urge, warn, advise, persuade, encourage, remind", "The doctor urged him to stop smoking."],
        ["V + V-ing", "deny, admit, suggest, recommend", "He denied taking the money."],
        ["V + giới từ + V-ing", "insist on, apologise for, confess to, object to", "She insisted on paying the bill."],
        ["V + người + giới từ + V-ing", "accuse sb of, blame sb for, congratulate sb on, thank sb for", "They accused him of lying."],
        ["V + that + mệnh đề", "admit, deny, insist, suggest, explain", "He admitted that he had made a mistake."],
      ),
      p("Nguyên tắc cốt lõi: động từ tường thuật **tóm lại ý định** của người nói. Câu “I didn't take it!” không cần kể lại nguyên văn; chỉ cần **He denied taking it.** Mỗi động từ kéo theo một mẫu câu riêng, nên phải học **cả khối**, không học riêng một chữ."),
      ex("She accused him of lying to the whole team.", "Cô ấy buộc tội anh ta đã nói dối cả nhóm.", "Lời gốc có thể là: “You lied to all of us!”. Accuse luôn đi với of, không đi với for hay about."),
      ex("My lawyer warned me not to sign anything until I had read it carefully.", "Luật sư dặn tôi đừng ký gì cho đến khi đọc kỹ.", "Lời khuyên phủ định: warn + người + not to V. Chữ not đứng ngay trước to."),
      ex("The minister denied having received any payment.", "Vị bộ trưởng phủ nhận việc đã nhận bất kỳ khoản tiền nào.", "Having + V3 nhấn mạnh việc đã xảy ra trong quá khứ. Denied receiving cũng đúng và phổ biến hơn trong văn nói."),
      mistake("They accused him for stealing the data.", "They accused him of stealing the data.", "Tiếng Việt nói “buộc tội ai vì…”, nên người Việt tự động dịch “vì” thành for. Nhưng accuse đi với of; còn blame mới đi với for: They blamed him for the leak."),
      mistake("He denied to take the money.", "He denied taking the money.", "Tiếng Việt “chối không lấy” không cho biết động từ sau ở dạng nào, nên nhiều người đoán bừa to V. Deny và admit đi với V-ing (hoặc that + mệnh đề)."),
      mistake("She insisted to pay for dinner.", "She insisted on paying for dinner.", "Dịch từ “khăng khăng đòi trả tiền” dễ sinh ra to V. Insist đi với on + V-ing, hoặc insist that + mệnh đề."),
      ex("He apologised to the customers for keeping them waiting.", "Anh ấy xin lỗi khách hàng vì đã để họ phải chờ.", "Apologise không có tân ngữ trực tiếp: phải nói apologise to someone for something, không nói apologise someone."),
      p("Riêng **suggest** có hai cách dùng ở trình độ cao (mẫu thứ hai chính là thể giả định các bạn vừa học ở chương trước): **suggest + V-ing** (thường người nói cũng tham gia) và **suggest that + chủ ngữ + (should) + động từ nguyên mẫu**. Ở mẫu thứ hai, động từ **không chia** theo chủ ngữ, kể cả khi chủ ngữ là ngôi thứ ba số ít."),
      ex("The consultant suggested that the firm reduce its overheads.", "Chuyên gia tư vấn đề xuất công ty cắt giảm chi phí vận hành.", "Reduce giữ nguyên mẫu dù chủ ngữ là the firm. Có thể viết the firm should reduce."),
      tip("Học động từ tường thuật theo **cặp động từ và giới từ**, đọc to như một chữ: **accuse-of**, **blame-for**, **apologise-for**, **insist-on**, **congratulate-on**. Mẹo nhớ: “buộc tội OF, đổ lỗi FOR, khăng khăng ON”. Còn nhóm **urge, warn, advise, persuade** thì thường là **người + to V**. Ngoại lệ hay gặp: **advise + V-ing** khi không nêu người (I'd advise waiting), **warn sb about/against** (warned us against signing), **persuade sb that + mệnh đề** (thuyết phục ai tin rằng)."),
      teacher("Khi đứng lớp, tôi thấy học viên giỏi ngữ pháp đến đâu thì khi kể chuyện vẫn chỉ dùng **said**. Mỗi tối, các bạn lấy một đoạn hội thoại trong ngày (tin nhắn của sếp, một cảnh cãi nhau trong phim) rồi viết lại bằng **ba động từ tường thuật khác nhau**. Khi chép vào sổ, đừng bao giờ ghi riêng chữ accuse; hãy ghi cả khối **accuse somebody of doing something**. Tự kiểm tra bằng một câu hỏi: “Sau động từ này là to V, V-ing hay giới từ?”. Trả lời được ngay thì mới là thuộc."),
      summary(
        "Động từ tường thuật kể lại cả **thái độ** người nói (accuse, deny, urge, insist, apologise), không chỉ said.",
        "Học **cả khối mẫu câu**: agree, refuse, offer, promise + to V; urge, warn, advise, persuade thường + người + to V; deny, admit + V-ing.",
        "Cặp động từ và giới từ + V-ing: **accuse of, blame for, apologise for, insist on, congratulate on, confess to**.",
        "Lời khuyên phủ định: warn someone **not to** V. Apologise **to** someone **for** something.",
        "**Suggest + V-ing**, hoặc suggest that + S + (should) + V nguyên mẫu; không nói suggest someone to V.",
      ),
    ],
  },
  words: [
    word("accuse", "/əˈkjuːz/", "buộc tội, cáo buộc", "The opposition accused the mayor of wasting public money.", "ac|cuse", 1, "Âm cuối là /z/, đừng nuốt mất; đọc /əˈkjuːz/, không đọc “ắc-kiu”."),
    word("urge", "/ɜːdʒ/", "thúc giục, kêu gọi mạnh mẽ", "Experts urge parents to limit their children's screen time.", "urge", 0, "Nguyên âm /ɜː/ kéo dài, cuối từ bật rõ âm /dʒ/."),
    word("reiterate", "/riˈɪt.ər.eɪt/", "nhắc lại, khẳng định lại", "The minister reiterated that taxes would not rise.", "re|it|er|ate", 1, "Bốn âm tiết, trọng âm ở âm thứ hai: ri-IT-er-ate. Đừng đọc dính thành “rai-tơ-rết”."),
    word("commend", "/kəˈmend/", "khen ngợi, biểu dương (trang trọng)", "The report commended the staff for their quick response.", "com|mend", 1, "Commend + người + for + danh từ hoặc V-ing, cùng mẫu với thank và praise."),
    word("allegation", "/ˌæl.əˈɡeɪ.ʃən/", "lời cáo buộc (chưa được chứng minh)", "He strongly rejected the allegation of bribery.", "al|le|ga|tion", 2),
    word("reluctant", "/rɪˈlʌk.tənt/", "miễn cưỡng, không muốn", "She was reluctant to admit that she had been wrong.", "re|luc|tant", 1),
    word("negligence", "/ˈneɡ.lɪ.dʒəns/", "sự cẩu thả, tắc trách", "The hospital was blamed for negligence.", "neg|li|gence", 0),
    word("confess", "/kənˈfes/", "thú nhận", "He finally confessed to breaking the vase.", "con|fess", 1, "Confess to + V-ing: to ở đây là giới từ, nên sau nó là V-ing."),
  ],
  exercises: [
    mc("c1-n10-1", "“It was you who leaked the report!” she said. → She accused him ___ the report.", ["to leak", "for leaking", "of leaking", "that he leaked"], 2, "Accuse + người + of + V-ing. Không dùng for, cũng không dùng to V."),
    fill("c1-n10-2", "The manager apologised ___ the misunderstanding.", ["for"], "Apologise for + danh từ hoặc V-ing. Nếu có người thì thêm to: apologised to us for the misunderstanding."),
    mc("c1-n10-3", "Chọn câu đúng.", ["He admitted to steal the money.", "He admitted stealing the money.", "He admitted steal the money.", "He admitted him stealing the money."], 1, "Admit + V-ing (hoặc admit to + V-ing). Không dùng to V hay động từ nguyên mẫu trần."),
    fill("c1-n10-4", "My doctor warned me ___ to eat so much salt.", ["not"], "Lời cảnh báo phủ định: warn + người + not to V."),
    reorder("c1-n10-5", "The teacher urged us to read more widely.", "Urge + người + to V: thúc giục ai làm gì. Trạng từ more widely đứng sau động từ read."),
    reorder("c1-n10-6", "She insisted on seeing the manager.", "Insist on + V-ing: sau giới từ on là V-ing, không dùng to see."),
    listen("c1-n10-7", "The spokesperson denied that the company had misled investors.", ["Người phát ngôn phủ nhận việc công ty đã đánh lừa nhà đầu tư.", "Người phát ngôn thừa nhận công ty đã lừa dối nhà đầu tư.", "Nhà đầu tư cáo buộc người phát ngôn nói dối."], 0, "Deny that + mệnh đề: phủ nhận rằng… Mislead nghĩa là đánh lừa, làm hiểu sai."),
    listen("c1-n10-8", "My colleague suggested that we ask the client for more time.", ["Khách hàng đề nghị chúng tôi làm nhanh hơn.", "Đồng nghiệp tôi đã xin khách hàng thêm thời gian.", "Đồng nghiệp tôi từ chối xin thêm thời gian.", "Đồng nghiệp tôi gợi ý chúng tôi xin khách hàng thêm thời gian."], 3, "Suggest that we ask: gợi ý rằng chúng tôi nên xin. Người đồng nghiệp chưa tự đi xin."),
    correct("c1-n10-9", "The director congratulated the team for winning the contract.", ["The director congratulated the team on winning the contract."], "Congratulate đi với on, không đi với for: congratulate somebody on doing something. Thank và blame mới đi với for."),
    correct("c1-n10-10", "He apologised me for the late delivery.", ["He apologised to me for the late delivery.", "He apologized to me for the late delivery."], "Apologise không có tân ngữ trực tiếp. Người nhận lời xin lỗi phải đi sau to: apologise to somebody for something."),
  ],
  speaking: [
    say("She accused me of taking her seat.", "Cô ấy buộc tội tôi đã chiếm chỗ của cô ấy."),
    say("The doctor urged him to get more sleep.", "Bác sĩ thúc giục anh ấy ngủ nhiều hơn."),
    say("I apologise for keeping you waiting.", "Tôi xin lỗi vì đã để anh chị phải chờ."),
  ],
  freeSpeaking: free(
    "Tell me about a disagreement you witnessed or took part in recently. Who said what, and how did it end?",
    "Kể lại một cuộc tranh luận hoặc bất đồng gần đây (ở nhà, ở công ty, trên mạng xã hội) bằng ít nhất năm động từ tường thuật khác nhau, không dùng said. Chú ý mẫu câu sau mỗi động từ.",
    "Last week my brother and his wife had a heated argument about where to spend Tet. My sister-in-law wanted to visit her parents in Hue, but my brother insisted on staying in Hanoi because of his work. At one point she accused him of always putting his job first, and he denied doing anything of the kind. My mother then urged them both to calm down and suggested that they spend the first two days in Hanoi and the rest in Hue. In the end, my brother apologised for raising his voice, and they both agreed to try her plan.",
  ),
  dialogue: dialogue(
    "Báo cáo lại một buổi họp căng thẳng với khách hàng",
    "Chi, quản lý khách hàng của một công ty phần mềm ở TP.HCM, vừa họp xong với một khách hàng Nhật đang không hài lòng vì dự án bị trễ. Chị báo cáo lại cho sếp là anh Quân.",
    { A: "Anh Quân, giám đốc dự án", B: "Chi, quản lý khách hàng" },
    A("So how did the meeting go? Were they still angry?", "Buổi họp thế nào rồi? Họ vẫn còn giận à?"),
    B("At first, yes. Their director accused us of missing the deadline on purpose.", "Lúc đầu thì có. Giám đốc bên họ buộc tội mình cố tình trễ hạn."),
    A("On purpose? That's absurd. What did you say?", "Cố tình ư? Vô lý quá. Em đã nói gì?"),
    B("I denied delaying anything deliberately, but I admitted that our testing had taken too long.", "Em phủ nhận chuyện cố tình trì hoãn, nhưng thừa nhận là khâu kiểm thử của mình đã kéo dài quá lâu."),
    A("Fair enough. Did you apologise?", "Vậy là hợp lý. Em có xin lỗi không?"),
    B("I apologised to them for not keeping them informed. That seemed to calm things down.", "Em xin lỗi họ vì đã không cập nhật tình hình thường xuyên. Có vẻ như vậy làm không khí dịu xuống."),
    A("Good. Did they threaten to cancel the contract?", "Tốt. Họ có dọa hủy hợp đồng không?"),
    B("Not directly, but their lawyer warned us not to miss another deadline.", "Không trực tiếp, nhưng luật sư của họ cảnh báo mình không được trễ hạn thêm lần nào nữa."),
    A("And the new timeline? Did they agree to it?", "Còn tiến độ mới thì sao? Họ có đồng ý không?"),
    B("Eventually. They insisted on receiving weekly progress reports, and they urged us to add more testers.", "Cuối cùng thì có. Họ khăng khăng đòi nhận báo cáo tiến độ hằng tuần, và thúc giục mình bổ sung thêm người kiểm thử."),
    A("That's reasonable. I suggest that you send the first report this Friday.", "Như vậy là hợp lý. Anh đề nghị em gửi bản báo cáo đầu tiên vào thứ sáu này."),
    B("Will do. Oh, and their director congratulated us on the new design, so it wasn't all bad news.", "Em sẽ làm ạ. À, giám đốc bên họ còn khen mình về thiết kế mới, nên cũng không toàn tin xấu."),
  ),
  dialogueQuestions: [
    listenQ("c1-n10-d1", "What did Chi admit during the meeting with the client?", "I denied delaying anything deliberately, but I admitted that our testing had taken too long.", ["That the delay had been deliberate", "That the testing had taken too long", "That the client had changed the requirements", "That the new design was poor"], 1, "Chi phủ nhận việc cố tình trì hoãn (denied delaying), nhưng thừa nhận khâu kiểm thử quá lâu (admitted that our testing had taken too long)."),
    mc("c1-n10-d2", "What did the client's lawyer warn them about?", ["Not to miss another deadline", "Not to contact the director again", "Not to add more testers", "Not to change the design"], 0, "Their lawyer warned us not to miss another deadline."),
    mc("c1-n10-d3", "Why does Chi say that it “wasn't all bad news”?", ["The client agreed to pay more.", "The contract was extended for a year.", "The client's director praised the new design.", "The lawyer apologised for his tone."], 2, "Their director congratulated us on the new design: giám đốc bên khách hàng khen thiết kế mới."),
  ],
  reading: reading({
    title: "Airline chief apologises but denies cover-up",
    text: `The chief executive of a regional airline apologised to passengers on Monday for weeks of cancelled flights, but firmly denied that the company had tried to hide the scale of its problems from regulators.

Speaking at a tense press conference in Ho Chi Minh City, Ms Tran Thu Ha acknowledged that the airline had "badly underestimated" the time needed to repair two of its aircraft, and she admitted cutting the number of engineers on night shifts last year in order to save money. She insisted, however, that the decision had not affected safety. "At no point were passengers at risk," she said, reiterating a statement that the company had issued on Friday.

Consumer groups were not satisfied. The head of the national passengers' association accused the airline of treating its customers "as an afterthought" and urged the aviation authorities to launch a full investigation. He also criticised the company for failing to inform passengers of cancellations until they had arrived at the airport, and he called on the government to introduce automatic compensation for delays of more than three hours.

The allegation that the airline had misled regulators first appeared in a newspaper report last week. According to the report, internal emails showed that senior managers had been warned about staff shortages months before the cancellations began. Asked directly whether she had seen those warnings, Ms Ha declined to comment, explaining that the matter was now in the hands of lawyers. She did, however, promise to publish an independent review of the airline's maintenance procedures before the end of the year.

Several analysts suggested that the airline's troubles reflected a wider problem in the industry. Since air travel recovered after the pandemic, many carriers have struggled to recruit enough qualified engineers, and a number of smaller airlines have been reluctant to raise salaries for fear of losing their competitive prices. One former pilot, who asked not to be named, warned that other companies could soon face similar difficulties unless they invested in training.

The airline's largest shareholder, an investment fund based in Singapore, commended Ms Ha for her honesty but stopped short of expressing full confidence in her leadership. In a brief statement, the fund said that it expected the board to "take whatever steps are necessary" to restore passengers' trust, a phrase that some observers interpreted as a warning.

For the thousands of travellers whose holidays were disrupted, the apology may have come too late. On social media, many complained that they were still waiting for refunds, and one passenger who had missed her sister's wedding vowed never to fly with the airline again.`,
    glossary: [
      ["cover-up", "sự che đậy, bưng bít"],
      ["regulator", "cơ quan quản lý nhà nước"],
      ["afterthought", "thứ chỉ được nghĩ tới sau cùng, bị xem nhẹ"],
      ["compensation", "tiền bồi thường"],
      ["maintenance", "sự bảo dưỡng"],
      ["shareholder", "cổ đông"],
      ["stop short of", "dừng lại, không đi đến mức"],
      ["vow", "thề, quyết không"],
    ],
    questions: [
      mc("c1-n10-r1", "What is the report mainly about?", ["An airline's apology for cancelled flights and the criticism that followed", "The opening of a new airline in Ho Chi Minh City", "A former pilot's complaint about low salaries", "A court case about a missed wedding"], 0, "Đoạn đầu tóm ý chính: tổng giám đốc xin lỗi hành khách nhưng phủ nhận việc che giấu; các đoạn sau là phản ứng của các bên."),
      mc("c1-n10-r2", "What did Ms Ha admit?", ["Hiding problems from regulators", "Putting passengers at risk", "Reducing the number of engineers on night shifts", "Reading the internal warning emails"], 2, "She admitted cutting the number of engineers on night shifts. Bà phủ nhận việc che giấu, khẳng định hành khách không gặp nguy hiểm và từ chối bình luận về các email."),
      mc("c1-n10-r3", "What did the head of the passengers' association urge the aviation authorities to do?", ["Close the airline", "Launch a full investigation", "Pay compensation directly to passengers", "Replace Ms Ha"], 1, "Urged the aviation authorities to launch a full investigation: urge + người + to V."),
      fill("c1-n10-r4", "When asked whether she had seen the warnings, Ms Ha ___ to comment. (từ chối, một từ trong bài)", ["declined"], "Declined to comment: từ chối bình luận, cách nói rất hay gặp trên báo. Decline + to V, giống refuse nhưng lịch sự hơn."),
      mc("c1-n10-r5", "Why did some observers interpret the shareholder's statement as a warning?", ["It openly demanded Ms Ha's resignation.", "It praised the airline's safety record.", "It announced that the fund would sell its shares.", "It hinted that the board might have to take serious action, possibly including a change of leadership."], 3, "Quỹ khen sự trung thực nhưng không bày tỏ tin tưởng hoàn toàn, và yêu cầu hội đồng làm mọi thứ cần thiết: ngầm ý có thể thay người lãnh đạo."),
      mc("c1-n10-r6", "The fund “stopped short of expressing full confidence” in Ms Ha. This means that it", ["clearly said it trusted her completely", "did not go as far as saying it fully trusted her", "refused to speak to journalists", "criticised her for being dishonest"], 1, "Stop short of doing something: dừng lại, không đi đến mức làm việc đó."),
    ],
  }),
  task: task({
    prompt: "Một đồng nghiệp vắng mặt trong buổi họp căng thẳng với nhà cung cấp hôm qua. Hãy viết email (khoảng 230–280 từ) kể lại cho người đó ai đã nói gì, với thái độ ra sao, cuộc họp kết thúc thế nào và việc gì cần làm tiếp. Không dùng said; hãy chọn đúng động từ tường thuật và mẫu câu đi kèm.",
    hints: [
      "Chọn động từ theo thái độ: accuse, blame, deny, admit, apologise, refuse, warn, remind, offer, agree, insist, urge, congratulate.",
      "Kiểm tra mẫu câu sau mỗi động từ: to V, người + to V, V-ing hay giới từ + V-ing.",
      "Kể theo trình tự cuộc họp, mỗi giai đoạn một đoạn văn; kết thúc bằng một đề xuất với suggest.",
    ],
    model: "Hi Tuan,\n\nSince you missed yesterday's meeting with the supplier, here is a summary of what happened, because several of the decisions affect your team directly.\n\nThings started badly. Their sales manager, Mr Park, accused us of changing the order at the last minute and blamed our purchasing team for the delay in production. Lan denied making any changes after the deadline and showed him the emails to prove it. After reading them, he admitted that there had been a mix-up on their side and apologised for causing so much confusion.\n\nThe discussion about costs was harder. Mr Park refused to lower the delivery fee, explaining that fuel prices had risen by almost twenty per cent since the spring. Lan warned him not to expect a long-term contract under those conditions and reminded him that two other suppliers had already sent us quotes. At that point, he offered to split the extra cost with us for the next three shipments, and we agreed to review the situation in December.\n\nBefore we left, he insisted on meeting again next month to discuss the new product range, and he urged us to confirm all future orders in writing so that there are no more misunderstandings. He also congratulated Lan on the way her team had handled last month's launch, which helped to end the meeting on a positive note.\n\nI suggest that we reply by Friday so that we don't lose momentum. Could you check whether your team can send the written confirmations he asked for?\n\nBest,\nMai",
    checklist: [
      "Dùng ít nhất bảy động từ tường thuật khác nhau và không dùng said.",
      "Mỗi động từ đi đúng mẫu câu (to V, người + to V, V-ing, giới từ + V-ing).",
      "Accuse đi với of, apologise đi với for, insist đi với on.",
      "Có ít nhất một câu phủ định dạng warn hoặc advise + người + not to V.",
      "Người đọc hiểu rõ ai nói gì, với thái độ nào, theo đúng trình tự.",
    ],
    minWords: 230,
  }),
});
