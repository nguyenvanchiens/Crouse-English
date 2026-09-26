import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "dieu-kien-nang-cao",
  title: "Câu điều kiện nâng cao",
  minutes: 35,
  lecture: {
    title: "Were to, should, đảo ngữ, but for và supposing",
    blocks: [
      p("Các bạn đã thuộc lòng ba loại câu điều kiện từ B1, B2. Nhưng mở một email từ ngân hàng hay một hợp đồng tiếng Anh, các bạn sẽ thấy: **Should you have any questions, please contact us.** Không có chữ if nào cả. Ở trình độ C1, câu điều kiện có thêm những biến thể **trang trọng** và **tinh tế** hơn, giúp các bạn viết như người trong nghề và đọc hiểu văn bản chính thức."),
      table(
        ["Cấu trúc", "Dùng khi", "Câu thường", "Câu nâng cao"],
        ["If + were to + V", "giả định rất xa, khó xảy ra", "If the company moved abroad...", "If the company were to move abroad..."],
        ["If + should + V", "khả năng nhỏ, lịch sự", "If you need help...", "If you should need help..."],
        ["Should + S + V", "đảo ngữ của should, rất trang trọng", "If you need help...", "Should you need help..."],
        ["Were + S + to V / Were + S", "đảo ngữ của loại hai", "If I were you...", "Were I you... / Were I to accept..."],
        ["Had + S + V3", "đảo ngữ của loại ba", "If I had known...", "Had I known..."],
      ),
      p("**Đảo ngữ trong câu điều kiện** chỉ xảy ra với ba từ: **should**, **were**, **had**. Bỏ if, đưa từ đó lên trước chủ ngữ. Lưu ý: đây là đảo ngữ điều kiện, khác với đảo ngữ phủ định (Never have I...) các bạn đã học."),
      ex("Should you require any further information, please do not hesitate to contact me.", "Nếu quý vị cần thêm thông tin, xin đừng ngần ngại liên hệ với tôi.", "Câu kết kinh điển của email trang trọng. Nhớ: sau should là động từ nguyên mẫu (require), không phải requires."),
      ex("Were the government to raise taxes, many small businesses would struggle.", "Nếu chính phủ tăng thuế, nhiều doanh nghiệp nhỏ sẽ gặp khó khăn.", "Were to nhấn mạnh đây chỉ là giả định, người nói không cho rằng việc này sắp xảy ra."),
      ex("Had I known about the traffic, I would have left earlier.", "Nếu tôi biết trước chuyện kẹt xe thì tôi đã đi sớm hơn."),
      mistake("Hadn't I known the truth, I would have signed the contract.", "Had I not known the truth, I would have signed the contract.", "Trong đảo ngữ điều kiện, không dùng dạng rút gọn phủ định. Not phải tách ra, đứng sau chủ ngữ: Had I not, Should you not, Were it not."),
      mistake("Had we have known about the strike, we would have ordered earlier.", "Had we known about the strike, we would have ordered earlier.", "Tiếng Việt “nếu đã biết” khiến học viên nghĩ phải giữ cả cụm have known. Nhưng khi đảo ngữ, had đã được đưa lên đầu và chính là trợ động từ của quá khứ hoàn thành; sau chủ ngữ chỉ còn V3. Tương tự, sau Should luôn là động từ nguyên mẫu: Should you need, không viết Should you needed hay Should you will need."),
      ex("Had I accepted the offer from Singapore, I would be earning twice as much now.", "Nếu hồi đó tôi nhận lời mời làm việc ở Singapore thì giờ tôi đã kiếm được gấp đôi.", "Đảo ngữ cũng dùng được trong câu điều kiện hỗn hợp: vế đảo nói về quá khứ (Had + S + V3), vế chính nói về hiện tại (would + V)."),
      p("**But for** và **if it weren't for / if it hadn't been for** đều nghĩa là “nếu không có, nếu không nhờ”. **But for** chỉ đi với **danh từ**; hai cấu trúc với if đi với danh từ nhưng chia theo thời gian: weren't cho hiện tại, hadn't been cho quá khứ."),
      ex("If it weren't for my parents, I wouldn't be where I am today.", "Nếu không có bố mẹ, tôi đã không có được ngày hôm nay.", "Có thể viết đảo ngữ: Were it not for my parents... Trong văn nói thân mật, người ta còn nói If it wasn't for..."),
      mistake("But for you helped me, I would have failed.", "But for your help, I would have failed.", "But for là giới từ, chỉ đi với danh từ hoặc cụm danh từ, không đi với mệnh đề. Tiếng Việt “nếu không nhờ anh giúp” có động từ, nên học viên hay ghép nguyên cả mệnh đề vào."),
      p("**Supposing**, **suppose** (giả sử) và **what if** (nếu… thì sao) mở đầu một tình huống giả định, rất hay dùng khi bàn kế hoạch, cân nhắc rủi ro. Có thể dùng thì hiện tại cho khả năng thật, thì quá khứ cho giả định xa."),
      ex("Supposing the client rejects our offer, what's our plan B?", "Giả sử khách hàng từ chối đề nghị của mình, phương án dự phòng là gì?"),
      tip("Mẹo nhớ ba từ đảo ngữ điều kiện: **S-W-H**, tức là **Should, Were, Had**. Chỉ ba từ này được đứng đầu thay cho if. Không bao giờ đảo với will, would hay do."),
      teacher("Khi chữa email tiếng Anh thương mại cho học viên, tôi hay thấy các bạn viết rất lễ phép bằng tiếng Việt, nhưng sang tiếng Anh lại cụt lủn: If you need, call me. Tôi dặn các bạn: hãy học thuộc **một câu mẫu** cho mỗi cấu trúc, như Should you need anything, please let me know, rồi dùng nó ngay trong email tuần này. Ngữ pháp nâng cao chỉ trở thành của mình khi mình **dùng nó cho việc thật**, không phải khi làm đúng bài tập."),
      summary(
        "**If + were to + V** cho giả định rất xa; **If + should + V** cho khả năng nhỏ, nói lịch sự.",
        "Chỉ ba từ được đảo lên thay cho if: **Should, Were, Had**. Phủ định tách not ra sau chủ ngữ: **Had I not known**, không viết Hadn't I known.",
        "Sau **Should** là V nguyên mẫu, sau **Had + S** chỉ còn V3: Should you need, Had we known; không viết Should you needed, Had we have known. Đảo ngữ dùng được cả trong câu điều kiện hỗn hợp.",
        "**But for + danh từ**; **If it weren't for** cho hiện tại, **If it hadn't been for** cho quá khứ.",
        "**Supposing, suppose, what if** mở ra một tình huống giả định khi bàn kế hoạch và rủi ro.",
      ),
    ],
  },
  words: [
    word("proviso", "/prəˈvaɪ.zəʊ/", "điều kiện kèm theo (trong một thỏa thuận)", "They signed the contract with the proviso that prices stay fixed for two years.", "pro|vi|so", 1, "Chữ s đọc là /z/: prə-VAI-zəʊ. Hay đi thành cụm with the proviso that + mệnh đề."),
    word("contingency", "/kənˈtɪn.dʒən.si/", "tình huống bất ngờ, phương án dự phòng", "We need a contingency plan in case the supplier fails.", "con|tin|gen|cy", 1),
    word("scenario", "/sɪˈnɑː.ri.əʊ/", "kịch bản, tình huống", "In the worst-case scenario, we would lose the contract.", "sce|na|ri|o", 1, "Âm thứ hai là /nɑː/ kéo dài, không đọc là “xê-na-ri-ô” như tiếng Việt."),
    word("unforeseen", "/ˌʌn.fɔːˈsiːn/", "không lường trước được", "The event was cancelled due to unforeseen circumstances.", "un|fore|seen", 2),
    word("retrospect", "/ˈret.rə.spekt/", "sự hồi tưởng, nhìn lại (in retrospect: giờ nhìn lại thì)", "In retrospect, had we waited a month, we would have paid far less.", "ret|ro|spect", 0, "Trọng âm ở âm đầu: RET-ro-spect. Cụm cố định: in retrospect."),
    word("speculate", "/ˈspek.jə.leɪt/", "suy đoán, phỏng đoán", "It's too early to speculate about the cause of the accident.", "spec|u|late", 0),
    word("feasible", "/ˈfiː.zə.bəl/", "khả thi", "Is it feasible to finish the project by June?", "fea|si|ble", 0),
  ],
  exercises: [
    mc("c1-n07-1", "___ you require any further assistance, please contact our support team.", ["Should", "Would", "Had", "Were"], 0, "Should + S + V nguyên mẫu là đảo ngữ trang trọng của If you require."),
    mc("c1-n07-2", "___ known about the traffic jam, we would have taken the train.", ["If we", "Had we", "Should we", "Were we"], 1, "Đảo ngữ loại ba: Had + chủ ngữ + V3, thay cho If we had known."),
    fill("c1-n07-3", "But ___ your advice, I would never have found this job.", ["for"], "But for + danh từ: nếu không nhờ."),
    fill("c1-n07-4", "If it ___ for the rain, we would be at the beach now. (không có)", ["weren't", "were not", "wasn't", "was not"], "Now cho biết đây là hiện tại, nên dùng if it weren't for. Wasn't cũng được chấp nhận trong văn nói."),
    reorder("c1-n07-5", "What if the client were to cancel the order?", "Were to + V: giả định một khả năng khó xảy ra."),
    reorder("c1-n07-6", "Supposing the bank were to refuse the loan?", "Supposing mở đầu một câu hỏi giả định, thường dùng khi bàn phương án dự phòng."),
    listen("c1-n07-7", "Were the company to relocate, most of the staff would resign.", ["Công ty đã chuyển địa điểm và phần lớn nhân viên đã nghỉ việc.", "Nhân viên muốn công ty chuyển địa điểm.", "Nếu công ty chuyển địa điểm, phần lớn nhân viên sẽ nghỉ việc."], 2, "Were + S + to V là đảo ngữ của if the company were to relocate. Việc này chưa xảy ra."),
    listen("c1-n07-8", "Had it not been for the map, we would have got lost.", ["Nếu không nhờ tấm bản đồ, chúng tôi đã bị lạc rồi.", "Vì không có bản đồ nên chúng tôi bị lạc.", "Chúng tôi bị lạc dù có bản đồ.", "Chúng tôi làm mất tấm bản đồ."], 0, "Had it not been for = if it hadn't been for: nếu không nhờ. Thực tế là họ có bản đồ và không bị lạc."),
    correct("c1-n07-9", "Should you needed any help with the forms, please call me.", ["Should you need any help with the forms, please call me.", "If you need any help with the forms, please call me."], "Đảo ngữ với Should: Should + chủ ngữ + động từ nguyên mẫu. Không chia quá khứ (needed), không thêm -s."),
    correct("c1-n07-10", "But for they helped us, we would have lost the contract.", ["But for their help, we would have lost the contract.", "Had they not helped us, we would have lost the contract.", "If they hadn't helped us, we would have lost the contract.", "If it hadn't been for their help, we would have lost the contract.", "Had it not been for their help, we would have lost the contract."], "But for là giới từ, chỉ đi với danh từ: but for their help. Muốn giữ mệnh đề they helped us thì phải đổi sang Had they not helped us hoặc If they hadn't helped us."),
  ],
  speaking: [
    say("Should you need anything, just let me know.", "Nếu bạn cần gì, cứ báo cho tôi biết."),
    say("Had I known, I would have called you.", "Nếu tôi biết thì tôi đã gọi cho bạn rồi."),
    say("But for your help, I would have given up long ago.", "Nếu không nhờ bạn giúp, tôi đã bỏ cuộc từ lâu rồi."),
  ],
  freeSpeaking: free(
    "Think about an important choice you made in the past. How would your life be different now, had you chosen differently?",
    "Kể về một lựa chọn quan trọng trong quá khứ và hình dung cuộc sống hiện tại sẽ khác thế nào nếu bạn chọn khác. Dùng đảo ngữ Had..., Were... to, But for + danh từ và một câu với Should.",
    "About ten years ago, I was offered a place at a university in Australia, but I turned it down because my father was seriously ill. Had I accepted, I would probably be living in Melbourne now and working in a completely different field. In retrospect, I don't regret it at all. But for that decision, I would never have met my wife, who was studying in Hanoi at the time. Were I to face the same choice today, I think I would make it again. And should my own children ever face something similar, I'll tell them to put their family first.",
  ),
  dialogue: dialogue(
    "Bàn phương án dự phòng trước khi ký hợp đồng",
    "Anh Nam, giám đốc thu mua của một công ty nội thất ở Bình Dương, gặp bà Carter, đại diện nhà cung cấp gỗ từ Úc, để rà soát các rủi ro trước khi ký hợp đồng cung ứng ba năm.",
    { A: "Anh Nam, giám đốc thu mua", B: "Bà Carter, đại diện nhà cung cấp" },
    A("Before we sign, I'd like to go through a few scenarios. Supposing the shipment is held up at the port, what happens?", "Trước khi ký, tôi muốn rà qua vài tình huống. Giả sử lô hàng bị giữ lại ở cảng thì sao?"),
    B("Should that happen, we would cover the storage costs. It's all in clause seven.", "Nếu chuyện đó xảy ra, chúng tôi sẽ chịu chi phí lưu kho. Tất cả đã nằm trong điều khoản bảy."),
    A("And were your main factory to close for any reason, could another site take over?", "Còn nếu nhà máy chính của bà phải đóng cửa vì lý do nào đó, liệu một cơ sở khác có thay thế được không?"),
    B("In theory, yes, although it wouldn't be feasible for more than a month. We do have a contingency plan, though.", "Về lý thuyết thì được, dù không khả thi quá một tháng. Nhưng chúng tôi có phương án dự phòng."),
    A("Good. Had we known about the strike last year, we would have ordered much earlier. We lost nearly two weeks.", "Tốt. Nếu năm ngoái chúng tôi biết trước vụ đình công thì đã đặt hàng sớm hơn nhiều. Chúng tôi mất gần hai tuần."),
    B("I remember. But for your team's flexibility, we would have lost the contract altogether.", "Tôi nhớ chứ. Nếu không nhờ sự linh hoạt của đội anh, chúng tôi đã mất trắng hợp đồng."),
    A("Well, if it hadn't been for your engineers working overtime, we wouldn't have recovered so quickly either.", "Thật ra nếu không có các kỹ sư bên bà làm thêm giờ, chúng tôi cũng không phục hồi nhanh như vậy."),
    B("Then let's put all of this in writing. Should you have any further concerns, just email me before Friday.", "Vậy chúng ta ghi tất cả vào văn bản nhé. Nếu anh còn băn khoăn gì, cứ gửi email cho tôi trước thứ sáu."),
    A("One last thing: what if the exchange rate changes sharply before then?", "Một điều cuối: nếu tỷ giá biến động mạnh trước thời điểm đó thì sao?"),
    B("Were it to move by more than five per cent, we'd reopen the price discussion. That seems fair to both sides.", "Nếu tỷ giá biến động quá năm phần trăm, chúng ta sẽ đàm phán lại giá. Như vậy là công bằng cho cả hai bên."),
  ),
  dialogueQuestions: [
    listenQ("c1-n07-d1", "What will the supplier do if the shipment is held up at the port?", "Supposing the shipment is held up at the port, what happens? Should that happen, we would cover the storage costs. It's all in clause seven.", ["Pay the storage costs", "Cancel the contract", "Send the goods by air instead", "Lower the price by five per cent"], 0, "Should that happen, we would cover the storage costs: nếu chuyện đó xảy ra, bên cung cấp chịu phí lưu kho."),
    mc("c1-n07-d2", "Why did Mr Nguyen's company lose nearly two weeks last year?", ["The supplier's main factory closed.", "They did not know about a strike in time, so they ordered too late.", "The exchange rate changed sharply.", "A shipment failed the quality inspection."], 1, "Had we known about the strike last year, we would have ordered much earlier: thực tế là họ không biết trước nên đặt hàng muộn."),
    mc("c1-n07-d3", "What have the two sides agreed about the exchange rate?", ["The contract will be cancelled if it changes.", "Mr Nguyen's company will always pay the difference.", "They will discuss the price again if it moves by more than five per cent.", "The price will never change."], 2, "Were it to move by more than five per cent, we'd reopen the price discussion."),
  ],
  reading: reading({
    title: "Planning for the storm you cannot see",
    text: `Had anyone told the managers of a mid-sized furniture exporter in 2019 that, within a year, ports across Asia would be severely disrupted, shipping containers would cost several times their usual price and half their workforce would be unable to reach the factory, they would probably have laughed. Yet that is more or less what happened, and the firms that survived were, in many cases, not the largest or the richest but those that had bothered to ask uncomfortable questions in advance.

The practice is known as scenario planning, and it is less complicated than it sounds. A team sits down and asks a series of "what if" questions. What if our main supplier were to go out of business? What if demand fell by half? Supposing a key manager resigned tomorrow, who would take over? The aim is not to predict the future, which is impossible, but to rehearse responses to several possible futures, so that nobody has to improvise in a panic.

A popular variation is the "pre-mortem", an idea associated with the psychologist Gary Klein. Before a project begins, the team imagines that it has already failed and writes down every reason why. People find it surprisingly easy to explain an imagined failure, and the exercise tends to reveal risks that nobody had dared to mention in ordinary meetings. Were a junior employee to announce, "I think this plan will fail", she might be seen as disloyal; asked to explain why it did fail, she becomes a valuable source of information.

Critics argue that such exercises can turn into a ritual. Teams produce thick reports full of unlikely disasters, file them away and never look at them again. There is some truth in this. A contingency plan is only as good as the people who remember that it exists. Should an emergency arise, a two-page checklist that everyone has read is far more useful than a hundred-page document that nobody has.

There is also a cultural dimension. In many workplaces, including a good number in Vietnam, openly discussing the possibility of failure can feel inauspicious, or even disrespectful towards senior colleagues. But for this reluctance, many companies would identify problems much earlier. One solution is to present scenario planning not as pessimism but as a form of care: we prepare because we value the business and the people in it.

In retrospect, the firms that coped best with recent crises were rarely just lucky. They had simply asked, at some point, the question that most of us prefer to avoid: what would we do if things went badly wrong? Were more organisations to ask it regularly, fewer of them would be caught unprepared by the next storm.`,
    glossary: [
      ["rehearse", "diễn tập, tập dượt trước"],
      ["improvise", "ứng biến, làm mà không chuẩn bị"],
      ["pre-mortem", "buổi phân tích thất bại giả định trước khi bắt đầu dự án"],
      ["disloyal", "không trung thành"],
      ["ritual", "nghi thức, thủ tục làm cho có"],
      ["inauspicious", "không may, gở"],
      ["reluctance", "sự ngần ngại, miễn cưỡng"],
    ],
    questions: [
      mc("c1-n07-r1", "What is the main purpose of the article?", ["To argue that organisations benefit from preparing for several possible futures", "To describe the history of the furniture industry", "To criticise junior employees who predict failure", "To show that the future can be predicted accurately"], 0, "Cả bài bàn về scenario planning và pre-mortem, kết luận: tổ chức nào chịu hỏi what if thường xuyên sẽ ít bị bất ngờ."),
      mc("c1-n07-r2", "What does a team do in a “pre-mortem”?", ["It analyses a project after the project has failed.", "It imagines that the project has already failed and lists the reasons.", "It asks senior managers to predict next year's profits.", "It writes a hundred-page emergency report."], 1, "Before a project begins, the team imagines that it has already failed and writes down every reason why."),
      mc("c1-n07-r3", "Why might a junior employee speak more freely in a pre-mortem than in an ordinary meeting?", ["Her manager is never present.", "She is paid extra for taking part.", "Explaining an imagined failure does not make her seem disloyal.", "Everything said in a pre-mortem is anonymous."], 2, "Nói thẳng “kế hoạch sẽ thất bại” thì dễ bị coi là không trung thành; còn khi được yêu cầu giải thích vì sao nó “đã” thất bại, cô ấy trở thành nguồn thông tin quý."),
      fill("c1-n07-r4", "In paragraph 5, “But for this reluctance” means “If it ___ for this reluctance”.", ["were not", "weren't", "was not", "wasn't"], "But for + danh từ = if it weren't for + danh từ ở hiện tại. Wasn't cũng được chấp nhận trong văn nói."),
      mc("c1-n07-r5", "How does the writer respond to critics who call scenario planning “a ritual”?", ["The writer rejects their view completely.", "The writer agrees that planning is a waste of time.", "The writer ignores their criticism.", "The writer accepts there is some truth in it, but argues that a short plan everyone knows solves the problem."], 3, "There is some truth in this, rồi tác giả đưa giải pháp: một bảng kiểm hai trang ai cũng đọc có ích hơn tài liệu một trăm trang."),
    ],
  }),
  task: task({
    prompt: "Sau buổi họp với đối tác nước ngoài, hãy viết email trang trọng (khoảng 230–280 từ) xác nhận lại các phương án dự phòng hai bên đã thống nhất, nhắc lại bài học từ năm ngoái và nêu một tình huống cần bàn tiếp. Dùng các cấu trúc điều kiện nâng cao của bài để email nghe chuyên nghiệp.",
    hints: [
      "Mỗi rủi ro viết một câu: Should + S + V, Were + S + to V, hoặc If + S + were to V.",
      "Nhắc lại một sự việc trong quá khứ bằng Had + S + V3, và cảm ơn đối tác bằng But for + danh từ.",
      "Nêu thêm một tình huống cần bàn tiếp bằng What if hoặc Supposing.",
      "Kết thư bằng câu kinh điển Should you require any further information...",
    ],
    model: "Dear Ms Carter,\n\nThank you for a productive meeting on Tuesday and for the time your team spent explaining the new production schedule. I am writing to confirm the contingency arrangements we discussed, so that both sides have a clear written record before the contract is signed.\n\nShould a shipment be delayed at customs for more than five working days, your company will cover the additional storage costs. Were your main factory to close unexpectedly, production would move to your site in Penang for up to four weeks, and you would inform us within forty-eight hours. Should any shipment not pass our quality inspection, it will be replaced free of charge. We also agreed that, if the exchange rate were to change by more than five per cent, both sides would review the price, with the proviso that any new price would apply only to future orders.\n\nI would also like to reflect briefly on last year. Had we agreed on these terms at that time, we would have avoided considerable losses during the strike. But for your team's flexibility, the project would not have survived that crisis, and I remain grateful for it.\n\nFinally, one scenario remains open. Supposing demand doubles next spring, would your factory be able to increase production at short notice? I suggest that we discuss this at our next meeting in May.\n\nShould you require any further information, please do not hesitate to contact me.\n\nYours sincerely,\nNguyen Thanh Nam",
    checklist: [
      "Có ít nhất hai câu đảo ngữ Should + S + V nguyên mẫu.",
      "Có ít nhất một câu đảo ngữ với Were + S + to V và một câu với Had + S + V3.",
      "Có But for + danh từ, hoặc If it weren't for / If it hadn't been for.",
      "Sau Should là V nguyên mẫu, sau Had + S chỉ có V3 (không viết Should you needed, Had we have known).",
      "Phủ định trong đảo ngữ viết tách (Had we not, Should it not), không rút gọn.",
      "Giọng văn trang trọng, có câu mở đầu, câu kết lịch sự và một tình huống cần bàn tiếp (Supposing, What if).",
    ],
    minWords: 230,
  }),
});
