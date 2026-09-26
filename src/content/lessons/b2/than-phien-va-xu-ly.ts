import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "than-phien-va-xu-ly",
  title: "Khiếu nại và xử lý khiếu nại",
  minutes: 36,
  lecture: {
    title: "Khiếu nại trang trọng, xin lỗi, đề xuất giải pháp và bị động khéo léo",
    blocks: [
      p("Bạn đặt một lô hàng từ đối tác nước ngoài và nhận về hàng lỗi. Hoặc bạn làm lễ tân khách sạn và gặp một vị khách người Đức đang rất bực. Cả hai tình huống đều cần **tiếng Anh vừa cứng rắn vừa lịch sự**. Người Việt thường rơi vào hai thái cực: hoặc quá nhún nhường nên không nói được điều mình muốn, hoặc dịch thẳng cơn giận thành câu buộc tội như **You sent me a broken phone!**"),
      table(
        ["Bước", "Người khiếu nại", "Người xử lý khiếu nại"],
        ["Mở đầu", "I am writing to complain about… / to express my dissatisfaction with…", "Thank you for bringing this to our attention."],
        ["Nêu vấn đề hoặc xin lỗi", "The item I received was damaged.", "We apologise for the inconvenience. / We are sorry for the delay."],
        ["Tin không vui", "I was told it would be fixed. However, nothing has been done.", "I'm afraid we are unable to… / We regret that…"],
        ["Yêu cầu hoặc giải pháp", "I would like a full refund. / I expect a replacement by…", "We would be happy to send a replacement. / As a gesture of goodwill, we would like to offer…"],
      ),
      p("Bí quyết của văn phong khiếu nại là **câu bị động** (các bạn đã học bị động ở mọi thì ở B1), cộng với giọng trang trọng của bài **Viết email chuyên nghiệp**. Khi dùng bị động, bạn **nói về sự việc mà không chỉ tay vào người**. Khách hàng viết **The wrong item was delivered** thay vì **You delivered the wrong item**; công ty viết **Mistakes were made** thay vì **Our staff made mistakes**. Câu vẫn rõ ràng nhưng bớt căng thẳng, và cuộc trao đổi dễ đi đến giải pháp hơn."),
      ex("I am writing to complain about the air conditioner I bought from your shop last week.", "Tôi viết thư này để khiếu nại về chiếc điều hòa tôi mua ở cửa hàng quý vị tuần trước."),
      ex("The package was left outside in the rain, and the contents were damaged.", "Kiện hàng bị để ngoài trời mưa và đồ bên trong đã bị hỏng.", "Hai động từ bị động giúp nêu sự việc mà không buộc tội trực tiếp người giao hàng."),
      ex("We apologise for sending you the wrong size.", "Chúng tôi xin lỗi vì đã gửi nhầm kích cỡ cho quý khách.", "Apologise for + V-ing hoặc + danh từ."),
      ex("I'm afraid the room you booked is not available, but we can offer you a suite at the same price.", "Tôi e là phòng quý khách đặt hiện không còn, nhưng chúng tôi có thể dành cho quý khách một phòng hạng sang với giá như cũ.", "I'm afraid + mệnh đề: báo tin không vui một cách mềm mỏng. Luôn kèm theo một giải pháp."),
      ex("We regret that your order was delayed due to a technical problem.", "Chúng tôi lấy làm tiếc vì đơn hàng của quý khách bị chậm do sự cố kỹ thuật."),
      mistake("I want you to give me my money back now.", "I would like a full refund, please.", "Dịch thẳng “Tôi muốn anh trả lại tiền” nghe như ra lệnh. Trong khiếu nại trang trọng, dùng I would like hoặc I would be grateful if you could…"),
      mistake("I'm afraid of we can't accept returns after thirty days.", "I'm afraid we can't accept returns after thirty days.", "I'm afraid of + danh từ nghĩa là “sợ cái gì”. Khi báo tin không vui, sau I'm afraid là cả một mệnh đề, không có of."),
      mistake("We apologise for send you the wrong invoice.", "We apologise for sending you the wrong invoice.", "For là giới từ nên động từ sau nó phải ở dạng V-ing. Tiếng Việt không chia động từ nên học trò hay để nguyên mẫu."),
      tip("Khi viết thư phản hồi khiếu nại, nhớ công thức **“Cảm ơn, xin lỗi, giải thích ngắn, giải pháp”**: Thank you for… / We apologise for… / This was due to… / We will… Đừng bao giờ chỉ xin lỗi mà không nói bạn sẽ **làm gì** tiếp theo."),
      teacher("Khi dạy các lớp cho nhân viên khách sạn và hãng hàng không, bài học tôi dặn đi dặn lại là: **người đang giận không cần nghe bạn giỏi ngữ pháp, họ cần thấy bạn hiểu họ**. Vì vậy câu đầu tiên luôn là ghi nhận: “I completely understand how frustrating this must be.” Luyện thế này: mỗi tuần tự viết **một thư khiếu nại** về một chuyện có thật (đồ ăn giao chậm, máy giặt hỏng), rồi đổi vai, tự viết **thư trả lời** của công ty. Viết được cả hai chiều thì bạn xử lý tình huống nào cũng vững."),
      summary(
        "Khiếu nại mở đầu bằng I am writing to complain about…; nêu yêu cầu bằng I would like… chứ không phải I want you to…",
        "Dùng bị động để nêu sự việc mà không chỉ tay vào người: The wrong item was delivered.",
        "apologise for + V-ing hoặc danh từ; I'm afraid + mệnh đề (không có of) để báo tin không vui.",
        "Trả lời khiếu nại theo công thức: cảm ơn, xin lỗi, giải thích ngắn, giải pháp.",
        "Luôn ghi nhận cảm xúc của khách trước, rồi mới đưa ra giải pháp cụ thể.",
      ),
    ],
  },
  words: [
    word("refund", "/ˈriː.fʌnd/", "khoản hoàn tiền", "I would like a full refund for the damaged item.", "re|fund", 0, "Danh từ nhấn âm đầu: RE-fund. Động từ “to refund” thường nhấn âm sau."),
    word("faulty", "/ˈfɔːl.ti/", "bị lỗi, hỏng", "The charger I received was faulty.", "fault|y", 0),
    word("inconvenience", "/ˌɪn.kənˈviː.ni.əns/", "sự bất tiện, phiền toái", "We apologise for any inconvenience caused.", "in|con|ve|ni|ence", 2, "Năm âm tiết, trọng âm ở âm thứ ba: in-con-VE-ni-ence."),
    word("replacement", "/rɪˈpleɪs.mənt/", "hàng thay thế", "We will send you a replacement free of charge.", "re|place|ment", 1),
    word("apologise", "/əˈpɒl.ə.dʒaɪz/", "xin lỗi", "The manager apologised for the long wait.", "a|pol|o|gise", 1, "Trọng âm ở âm tiết thứ hai: a-POL-o-gise."),
    word("compensation", "/ˌkɒm.penˈseɪ.ʃən/", "sự bồi thường", "The passengers received compensation for the delay.", "com|pen|sa|tion", 2),
    word("dissatisfied", "/dɪsˈsæt.ɪs.faɪd/", "không hài lòng", "Several guests were dissatisfied with the service.", "dis|sat|is|fied", 1),
    word("receipt", "/rɪˈsiːt/", "hóa đơn, biên lai", "Please keep your receipt in case you need to return the item.", "re|ceipt", 1, "Chữ p câm: đọc re-SEET /rɪˈsiːt/, không đọc “ri-xíp”."),
  ],
  exercises: [
    mc("b2-n16-1", "A customer typed the wrong delivery address. Which reply is the most tactful?", ["You typed the wrong address, so it's your fault.", "It seems that the wrong address was entered.", "Your address was wrong. Check it next time."], 1, "Câu bị động “the wrong address was entered” nêu sự việc mà không buộc tội khách hàng."),
    mc("b2-n16-2", "We apologise for ___ the wrong item.", ["send", "to send", "sending", "sent"], 2, "Apologise for + V-ing, vì for là giới từ."),
    fill("b2-n16-3", "I'm ___ we are unable to offer a refund on sale items.", ["afraid", "sorry"], "I'm afraid (hoặc I'm sorry) + mệnh đề: cách báo tin không vui lịch sự."),
    fill("b2-n16-4", "I am writing to ___ about the service I received at your hotel. (phàn nàn)", ["complain"], "I am writing to complain about… là câu mở đầu chuẩn của thư khiếu nại."),
    reorder("b2-n16-5", "We apologise for any inconvenience caused.", "Câu xin lỗi cố định trong thư trả lời khiếu nại. Caused = which has been caused, đúng kiểu rút gọn mệnh đề quan hệ bị động ở bài Rút gọn mệnh đề."),
    reorder("b2-n16-6", "Your order was sent to the wrong address.", "Câu bị động giúp công ty nhận lỗi mà không đổ cho một nhân viên cụ thể."),
    listen("b2-n16-7", "I'm afraid the item you ordered is out of stock.", ["Tôi e là mặt hàng quý khách đặt đã hết hàng.", "Tôi sợ mặt hàng quý khách đặt bị hỏng.", "Mặt hàng quý khách đặt sẽ về vào tuần sau."], 0, "I'm afraid ở đây không phải “tôi sợ” mà là “tôi e rằng”, báo tin không vui."),
    listen("b2-n16-8", "As a gesture of goodwill, we would like to offer you a free night.", ["Chúng tôi muốn quý khách trả thêm một đêm.", "Quý khách được giảm giá một nửa.", "Chúng tôi không thể hoàn tiền cho quý khách.", "Để thể hiện thiện chí, chúng tôi xin tặng quý khách một đêm nghỉ miễn phí."], 3, "As a gesture of goodwill: để thể hiện thiện chí, thường đi kèm một món đền bù."),
    correct("b2-n16-9", "I am writing to complain for the poor service at your restaurant.", ["I am writing to complain about the poor service at your restaurant."], "Complain đi với about (phàn nàn về điều gì). Tiếng Việt “phàn nàn vì…” dễ khiến học trò dùng for."),
    correct("b2-n16-10", "The parcel was deliver to the wrong address.", ["The parcel was delivered to the wrong address."], "Câu bị động là be + V3: was delivered. Người Việt hay nuốt âm cuối nên viết cũng quên đuôi -ed."),
  ],
  speaking: [
    say("I am writing to complain about the late delivery of my order.", "Tôi viết thư để khiếu nại về việc đơn hàng của tôi bị giao chậm."),
    say("We apologise for the delay and will send a replacement today.", "Chúng tôi xin lỗi vì sự chậm trễ và sẽ gửi hàng thay thế ngay hôm nay."),
    say("I'm afraid we are unable to offer a full refund.", "Tôi e là chúng tôi không thể hoàn lại toàn bộ tiền."),
  ],
  freeSpeaking: free(
    "Tell me about a time you complained about a product or a service. What happened, and how was it handled?",
    "Kể một lần bạn khiếu nại về sản phẩm hoặc dịch vụ: có chuyện gì, bạn nói hay viết gì, và phía bên kia xử lý ra sao. Dùng câu bị động để nêu sự việc và các cụm lịch sự trong bài.",
    "Last year I ordered a pair of running shoes online, but the wrong size was sent to me. I called the shop and explained the problem politely. The assistant apologised for the mistake and said that a replacement would be sent the next day. Unfortunately, it didn't arrive for a week. In the end, I was offered a small refund as a gesture of goodwill, so I was quite satisfied with the way the problem was handled.",
  ),
  dialogue: dialogue(
    "Khách phàn nàn ở quầy lễ tân",
    "Ông Weber, khách người Đức, xuống quầy lễ tân khách sạn để phàn nàn về phòng. Ngọc, nhân viên lễ tân, lắng nghe và xử lý.",
    { A: "Ông Weber, khách", B: "Ngọc, lễ tân" },
    A("Excuse me. I'd like to make a complaint about my room.", "Xin lỗi. Tôi muốn khiếu nại về phòng của tôi."),
    B("Of course, sir. Thank you for bringing this to our attention. What seems to be the problem?", "Vâng thưa ông. Cảm ơn ông đã báo cho chúng tôi. Có vấn đề gì vậy ạ?"),
    A("I booked a non-smoking room, but the room I was given smells of cigarettes.", "Tôi đặt phòng không hút thuốc, nhưng phòng tôi được giao lại có mùi thuốc lá."),
    B("I completely understand how frustrating this must be. We apologise for the inconvenience.", "Tôi hoàn toàn hiểu việc này gây khó chịu thế nào. Chúng tôi xin lỗi vì sự bất tiện."),
    A("Also, I was told the air conditioning would be fixed yesterday. However, nothing has been done.", "Thêm nữa, tôi được báo là điều hòa sẽ được sửa hôm qua. Thế nhưng chưa có gì được làm cả."),
    B("I'm very sorry. It seems the request was not passed on to our technical team.", "Tôi rất xin lỗi. Có vẻ yêu cầu đã không được chuyển đến đội kỹ thuật."),
    A("I would like to move to another room today, please.", "Tôi muốn được chuyển sang phòng khác ngay hôm nay."),
    B("I'm afraid all our standard rooms are full tonight. However, we would be happy to move you to a suite at no extra cost.", "Tôi e là tối nay tất cả phòng tiêu chuẩn đã kín. Tuy nhiên, chúng tôi rất sẵn lòng chuyển ông sang phòng hạng sang mà không tính thêm phí."),
    A("That would be acceptable. Thank you.", "Như vậy thì được. Cảm ơn cô."),
    B("As a gesture of goodwill, we would also like to offer you free breakfast for the rest of your stay.", "Để bày tỏ thiện chí, chúng tôi cũng xin mời ông ăn sáng miễn phí trong suốt thời gian còn lại."),
    A("That's very kind. I appreciate how quickly this was handled.", "Cô thật chu đáo. Tôi đánh giá cao việc này được xử lý nhanh như vậy."),
    B("You're welcome, sir. Your new key will be ready in ten minutes.", "Không có gì ạ. Chìa khóa phòng mới của ông sẽ sẵn sàng trong mười phút nữa."),
  ),
  dialogueQuestions: [
    mc("b2-n16-d1", "What are Mr Weber's two complaints?", ["His room is too small and too noisy.", "His room smells of cigarettes, and the air conditioning hasn't been fixed.", "The breakfast is poor and the staff are rude.", "His bill is wrong and the Wi-Fi doesn't work."], 1, "Phòng không hút thuốc lại có mùi thuốc lá, và điều hòa được hứa sửa hôm qua nhưng nothing has been done."),
    listenQ("b2-n16-d2", "Why can't Mr Weber move to another standard room?", "I would like to move to another room today, please. I'm afraid all our standard rooms are full tonight.", ["The hotel doesn't allow guests to change rooms.", "The standard rooms are being cleaned.", "He booked the cheapest room.", "All the standard rooms are full tonight."], 3, "I'm afraid all our standard rooms are full tonight. Vì vậy khách sạn chuyển ông sang phòng hạng sang mà không tính thêm tiền."),
    mc("b2-n16-d3", "What does the hotel offer as a gesture of goodwill?", ["A full refund", "A free airport transfer", "Free breakfast for the rest of his stay", "A discount on his next visit"], 2, "As a gesture of goodwill, we would also like to offer you free breakfast for the rest of your stay."),
  ],
  reading: reading({
    title: "A reply from customer relations",
    text: `Dear Ms Pham,

Thank you for your email of 14 October regarding your flight from Hanoi to Seoul on 9 October. I was very sorry to read about your experience, and I would like to apologise sincerely for the stress and inconvenience that it caused you and your family.

I have looked into the matter carefully. Our records show that the flight was delayed by just over five hours because of a technical problem with the aircraft. You mentioned in your email that passengers were given very little information at the airport. You are quite right. Updates should have been given every thirty minutes, but I understand that this did not happen, and I have passed your comments on to our airport team.

I also noted that your suitcase was damaged during the journey. I am afraid that we are unable to replace the suitcase itself, as it was more than five years old. However, we would be happy to pay for it to be repaired at any repair shop of your choice. Please send us the receipt, and the full cost will be refunded within ten working days.

Under our passenger policy, delays of more than five hours entitle passengers to compensation. I am therefore pleased to confirm that a payment of 250 US dollars per passenger has been approved for you and your two children. The money will be transferred to your bank account by the end of this month.

In addition, as a gesture of goodwill, we would like to offer you a voucher worth 100 US dollars, which can be used for any future booking within the next twelve months.

We value your custom and hope to have the opportunity to welcome you on board again soon. If you have any further questions, please do not hesitate to contact me directly.

Yours sincerely,

Daniel Hart, Customer Relations Manager, SkyLotus Airways`,
    glossary: [
      ["look into", "xem xét, tìm hiểu kỹ"],
      ["aircraft", "máy bay"],
      ["entitle", "cho (ai) quyền được hưởng"],
      ["transfer", "chuyển khoản"],
      ["voucher", "phiếu quà tặng, phiếu mua hàng"],
      ["custom", "sự ủng hộ, việc mua hàng của khách"],
      ["hesitate", "ngần ngại"],
    ],
    questions: [
      mc("b2-n16-r1", "What is the main purpose of this letter?", ["To respond to a complaint and explain what the airline will do", "To advertise new flights to Seoul", "To ask Ms Pham for more information about the delay", "To refuse all of Ms Pham's requests"], 0, "Thư cảm ơn, xin lỗi, giải thích nguyên nhân và nêu các giải pháp: đúng công thức trả lời khiếu nại."),
      mc("b2-n16-r2", "Why was the flight delayed?", ["Bad weather in Seoul", "A technical problem with the aircraft", "A strike by airport staff", "Passengers who arrived late"], 1, "The flight was delayed by just over five hours because of a technical problem with the aircraft."),
      mc("b2-n16-r3", "What will the airline do about the damaged suitcase?", ["Give Ms Pham a new suitcase", "Nothing, because the suitcase was too old", "Offer her a voucher instead", "Pay for the suitcase to be repaired"], 3, "Hãng không thay vali mới vì vali đã dùng hơn năm năm, nhưng we would be happy to pay for it to be repaired. Phiếu quà tặng là một món riêng để bày tỏ thiện chí."),
      fill("b2-n16-r4", "Ms Pham and each of her children will receive ___ US dollars in compensation.", ["250", "two hundred and fifty", "two hundred fifty"], "A payment of 250 US dollars per passenger: mỗi hành khách hai trăm năm mươi đô la."),
      mc("b2-n16-r5", "What does the manager admit about the airport staff?", ["They gave passengers enough information.", "They damaged the suitcase on purpose.", "They should have given passengers more regular updates.", "They were not responsible for anything."], 2, "You are quite right. Updates should have been given every thirty minutes, but… this did not happen."),
    ],
  }),
  task: task({
    prompt: "Bạn đặt mua một chiếc nồi cơm điện trên mạng. Hàng giao chậm hai tuần, hộp bị để ngoài mưa và nồi không dùng được. Bạn đã gọi điện cho cửa hàng một lần nhưng chưa ai liên lạc lại. Viết email khiếu nại khoảng 140–180 từ gửi bộ phận chăm sóc khách hàng.",
    hints: [
      "Mở đầu bằng I am writing to complain about…",
      "Dùng ít nhất hai câu bị động để nêu sự việc (was delivered, was damaged…).",
      "Nêu rõ yêu cầu bằng I would like… hoặc I would be grateful if you could…",
      "Kết thư bằng Yours faithfully khi không biết tên người nhận.",
    ],
    model: "Dear Sir or Madam,\n\nI am writing to complain about the rice cooker I ordered from your website on 3 May (order number 45821).\n\nWhen I placed the order, I was told that it would be delivered within three days. However, it arrived two weeks late, and the box had been left outside my building in the rain. As a result, the box was completely wet, the lid of the cooker was damaged and the cooker does not switch on. I have attached two photos of the damaged item.\n\nI also contacted your customer service team by phone on 20 May and was promised that someone would call me back. Unfortunately, nobody has contacted me since then.\n\nI would like a replacement to be sent by next Friday, 31 May. Alternatively, I would be grateful if you could give me a full refund. I have kept the receipt and the original packaging.\n\nI look forward to your prompt reply.\n\nYours faithfully,\nLan Nguyen",
    checklist: [
      "Câu mở đầu nói rõ mục đích khiếu nại.",
      "Có ít nhất hai câu bị động mô tả sự việc.",
      "Có một yêu cầu cụ thể: đổi hàng, hoàn tiền hoặc thời hạn giải quyết.",
      "Không dùng I want you to… hay câu buộc tội trực tiếp như You sent me…",
      "Giọng văn trang trọng, có lời chào và lời kết thư phù hợp.",
    ],
    minWords: 140,
  }),
});
