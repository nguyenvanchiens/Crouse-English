import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "nho-va-sai-bao",
  title: "Nhờ và sai bảo",
  minutes: 35,
  lecture: {
    title: "Thể sai khiến: have / get something done, have someone do, get someone to do, make, let",
    blocks: [
      p("Một buổi sáng ở văn phòng, bạn sẽ nói những câu như: “Tôi sẽ **bảo trợ lý gửi** hợp đồng cho anh”, “Tôi đã **nhờ được** bên tòa nhà **sửa** điều hòa”, “Sếp **bắt** cả nhóm **làm lại** báo cáo”, “Công ty **cho** về sớm”. Tiếng Việt chỉ cần “bảo, nhờ, bắt, cho” rồi ghép động từ. Tiếng Anh thì **mỗi động từ sai khiến đòi một mẫu riêng**: có to hay không, động từ nguyên mẫu hay V3. Ở B1 các bạn đã gặp **have something done** (I had my hair cut). Bài này hoàn thiện cả hệ thống."),
      table(
        ["Mẫu", "Nghĩa", "Ví dụ"],
        ["have + vật + V3", "thuê hoặc nhờ người làm (không cần nói ai)", "We're having the office repainted."],
        ["get + vật + V3", "như trên, thân mật hơn; nhấn việc xoay xở cho xong", "I need to get my visa renewed."],
        ["have + người + V nguyên mẫu", "giao việc cho người (do vai trò, dịch vụ)", "I'll have my assistant send you the file."],
        ["get + người + to V", "thuyết phục, nhờ được ai làm", "I got the landlord to fix the air conditioner."],
        ["make + người + V nguyên mẫu", "bắt ai làm", "My manager made me rewrite the report."],
        ["let + người + V nguyên mẫu", "cho phép ai làm", "They let us leave early on Friday."],
      ),
      ex("I'll have my assistant send you the contract this afternoon.", "Chiều nay tôi sẽ bảo trợ lý gửi hợp đồng cho anh.", "Have + người + V nguyên mẫu: trợ lý làm theo phân công, không cần thuyết phục. Không có to."),
      ex("Could you get someone from IT to look at my laptop?", "Anh nhờ ai đó bên IT xem giúp máy tính của tôi được không?", "Get + người + to V: phải nhờ, phải thuyết phục người ta làm. Có to."),
      mistake("I'll have my assistant to send you the contract.", "I'll have my assistant send you the contract.", "Tiếng Việt “bảo ai làm gì” khiến học trò nghĩ phải có to như ask someone to do. Nhưng have, make, let + người đi thẳng với động từ nguyên mẫu."),
      mistake("I got the technician fix my laptop.", "I got the technician to fix my laptop.", "Ngược lại, get + người thì phải có to. Mẹo: get là “nhờ được”, cần một bước thuyết phục, nên có thêm to."),
      p("**Make** là bắt buộc, **let** là cho phép, cả hai đi với **V nguyên mẫu không to**. Khi đổi sang bị động, **make** lấy lại to: **be made to + V**. **Let** không có dạng bị động; muốn nói “được cho phép” thì dùng **be allowed to + V**."),
      ex("The new staff were made to repeat the safety training.", "Nhân viên mới bị bắt học lại khóa an toàn lao động.", "Chủ động: They made the new staff repeat… Bị động: were made to repeat, to xuất hiện trở lại."),
      mistake("My boss made me to work on Saturday.", "My boss made me work on Saturday.", "Dịch “bắt tôi phải làm” thành made me to work. Ở dạng chủ động, make + người + V nguyên mẫu, không có to."),
      mistake("We were let to leave the office early.", "We were allowed to leave the office early.", "Let không dùng ở bị động. “Được cho về sớm” phải là were allowed to leave."),
      p("**Have / get + vật + V3** còn dùng cho **chuyện không may xảy ra với mình** do người khác gây ra, không phải mình thuê: **I had my phone stolen on the bus.** Mẫu này chia được ở mọi thì: **We're having** the carpets cleaned. **I've just had** my car serviced. **You should get** your eyes tested. Muốn nói ai làm thì thêm **by**: I had the contract checked **by a lawyer**."),
      ex("She had her bag stolen at the airport.", "Cô ấy bị mất cắp túi ở sân bay.", "Không ai thuê kẻ trộm cả: đây là nghĩa “bị”, rất hay gặp khi kể chuyện."),
      tip("Hỏi một câu: **sau động từ sai khiến là vật hay người?** Vật thì **V3** (have the car serviced). Người thì xem động từ: **have, make, let + V nguyên mẫu**, còn **get + to V**. Câu thần chú: **“get cần to, ba bạn kia không”**. Khi nói, **had it done** đọc liền /hæd ɪt dʌn/; bật rõ /d/ cuối của had."),
      teacher("Nhiều bạn học viên hỏi tôi: dùng have hay get thì sếp người nước ngoài thấy lịch sự hơn? Thật ra cả hai đều tự nhiên; **have** nghe trang trọng hơn một chút, hợp với email. Cái cần tránh là **make** khi nói về đồng nghiệp: I'll make Minh send you the file nghe như bạn ép Minh. Hãy nói **I'll have Minh send it** hoặc **I'll ask Minh to send it**. Mỗi tối, viết lại ba việc bạn đã nhờ hoặc thuê người làm trong ngày bằng ba mẫu khác nhau, chỉ hai tuần là quen tay."),
      summary(
        "**have / get + vật + V3**: thuê, nhờ người làm (I had my laptop repaired), hoặc chuyện không may (I had my phone stolen).",
        "**have + người + V nguyên mẫu**: giao việc; **get + người + to V**: nhờ được, thuyết phục được.",
        "**make + người + V**: bắt làm; bị động **be made to + V**.",
        "**let + người + V**: cho phép; bị động dùng **be allowed to + V**, không có be let to.",
        "Chỉ **get** có to; have, make, let + người không có to.",
      ),
    ],
  },
  words: [
    word("courier", "/ˈkʊr.i.ə/", "người giao hàng, dịch vụ chuyển phát", "I'll have a courier pick up the documents at four.", "cour|i|er", 0, "Nhấn âm đầu: COUR-i-er. Chữ ou đọc /ʊ/ ngắn như trong book."),
    word("laundry", "/ˈlɔːn.dri/", "đồ giặt; tiệm giặt là", "I have my laundry collected every Thursday.", "laun|dry", 0, "Âm đầu /lɔːn/ kéo dài, không đọc thành “lao”."),
    word("tailor", "/ˈteɪ.lə/", "thợ may", "I'm having a suit made by a tailor in Hoi An.", "tai|lor", 0),
    word("maintenance", "/ˈmeɪn.tən.əns/", "sự bảo trì, bảo dưỡng", "The lift is closed today for maintenance.", "main|te|nance", 0, "Nhấn âm đầu: MAIN-te-nance. Âm giữa đọc nhẹ /tən/, khác hẳn động từ maintain nhấn âm sau."),
    word("appliance", "/əˈplaɪ.əns/", "thiết bị điện gia dụng", "We had all the kitchen appliances checked before we moved in.", "ap|pli|ance", 1),
    word("decorator", "/ˈdek.ər.eɪ.tə/", "thợ sơn sửa, trang trí nhà", "We got a decorator to paint the meeting rooms at the weekend.", "dec|o|ra|tor", 0, "Nhấn âm đầu: DEC-o-ra-tor."),
    word("proofread", "/ˈpruːf.riːd/", "đọc soát lỗi (bản in, văn bản)", "Please have the contract proofread before you send it.", "proof|read", 0, "Quá khứ và V3 viết giống hệt nhưng đọc là /ˈpruːf.red/."),
  ],
  exercises: [
    mc("b2-n19-1", "I'll have my assistant ___ you the contract this afternoon.", ["sends", "to send", "send", "sent"], 2, "Have + người + V nguyên mẫu: have my assistant send. Không thêm to, không chia động từ."),
    mc("b2-n19-2", "The door was locked, so we ___ the landlord to send someone with a key.", ["had", "made", "got", "let"], 2, "Chỉ get đi với người + to V: got the landlord to send. Had, made, let + người phải đi với V nguyên mẫu không to."),
    fill("b2-n19-3", "My manager wasn't happy, so she made me ___ the whole report again. (write)", ["write", "rewrite"], "Make + người + V nguyên mẫu: made me write. Không có to."),
    fill("b2-n19-4", "My laptop is very slow. I'm going to get it ___ before the trip. (repair)", ["repaired"], "Get + vật + V3: chiếc máy tính được người khác sửa, nên dùng repaired."),
    fill("b2-n19-5", "The new staff were made ___ the safety test twice. (repeat)", ["to repeat"], "Bị động của make cần to: be made to + V."),
    fill("b2-n19-6", "We had finished the project, so our manager ___ us leave early on Friday. (cho phép)", ["let"], "Let + người + V nguyên mẫu: let us leave. Quá khứ của let vẫn là let. Allowed cũng nghĩa là cho phép nhưng phải đi với to: allowed us to leave."),
    reorder("b2-n19-7", "We're having the meeting rooms painted.", "Have + vật + V3 ở thì hiện tại tiếp diễn: việc đã thuê người, đang hoặc sắp làm."),
    reorder("b2-n19-8", "Could you get someone to check the printer?", "Get + người + to V: nhờ ai đó làm giúp."),
    correct("b2-n19-9", "I'll have my assistant to send you the invoice.", ["I'll have my assistant send you the invoice.", "I will have my assistant send you the invoice.", "I'll get my assistant to send you the invoice."], "Have + người + V nguyên mẫu, không có to. Nếu muốn giữ to thì đổi sang get: get my assistant to send."),
    correct("b2-n19-10", "I got the technician fix my laptop.", ["I got the technician to fix my laptop.", "I had the technician fix my laptop."], "Get + người + to V: got the technician to fix."),
    correct("b2-n19-11", "My boss made me to work on Saturday.", ["My boss made me work on Saturday."], "Make + người + V nguyên mẫu ở dạng chủ động: made me work."),
    correct("b2-n19-12", "We were let to leave the office early.", ["We were allowed to leave the office early."], "Let không có bị động. Được phép làm gì: be allowed to + V."),
    listen("b2-n19-13", "She had her bag stolen at the airport.", ["Cô ấy nhờ người lấy túi ở sân bay.", "Cô ấy bị mất cắp túi ở sân bay.", "Cô ấy lấy trộm một chiếc túi ở sân bay.", "Cô ấy để quên túi ở sân bay."], 1, "Have + vật + V3 ở đây là chuyện không may: túi bị người khác lấy trộm."),
    listen("b2-n19-14", "I'll get the courier to call you when he arrives.", ["Tôi sẽ bảo người giao hàng gọi cho anh khi anh ta đến.", "Tôi sẽ gọi cho người giao hàng khi anh đến.", "Người giao hàng sẽ đến khi nào anh gọi.", "Tôi sẽ đi lấy hàng khi anh gọi."], 0, "Get + người + to V: nhờ người giao hàng gọi cho anh."),
  ],
  speaking: [
    say("I'll have my assistant send you the documents this afternoon.", "Chiều nay tôi sẽ bảo trợ lý gửi tài liệu cho anh."),
    say("We finally got the landlord to fix the air conditioner.", "Cuối cùng chúng tôi cũng nhờ được chủ nhà sửa điều hòa."),
    say("We're having our office repainted next week.", "Tuần sau chúng tôi thuê người sơn lại văn phòng."),
  ],
  freeSpeaking: free(
    "What things do you usually have done for you instead of doing them yourself?",
    "Kể những việc bạn thường thuê hoặc nhờ người khác làm (giặt đồ, sửa xe, cắt tóc, dọn nhà…), vì sao, và một lần bạn phải nhờ ai đó giúp. Dùng have / get + vật + V3, get + người + to V, và let hoặc make.",
    "I'm quite busy, so I have a lot of things done for me. I have my laundry collected every Thursday, and I get my motorbike serviced at a small garage near my office once every three months. Last month my air conditioner broke, and it took me a week to get the landlord to send someone. My parents think I'm lazy, but I'd rather spend my weekends with friends. My mother never lets me pay her for cooking, though, so I still go home for dinner every Sunday.",
  ),
  dialogue: dialogue(
    "Chuẩn bị chuyển văn phòng",
    "Công ty sắp chuyển sang văn phòng mới vào thứ Hai. Anh Tom, trưởng nhóm người Anh, hỏi chị Lan, người phụ trách hành chính, xem mọi việc đã sắp xếp đến đâu.",
    { A: "Tom, trưởng nhóm", B: "Lan, phụ trách hành chính" },
    A("Lan, the new office opens on Monday. Is everything ready?", "Lan này, thứ Hai văn phòng mới khai trương. Mọi thứ sẵn sàng chưa?"),
    B("Almost. We're having the meeting rooms painted this weekend.", "Gần xong rồi ạ. Cuối tuần này mình thuê người sơn các phòng họp."),
    A("Great. What about the internet?", "Tốt quá. Còn mạng internet thì sao?"),
    B("I got the building manager to send a technician on Saturday, so it'll be working by Monday.", "Em đã nhờ được quản lý tòa nhà cử kỹ thuật viên đến hôm thứ Bảy, nên đến thứ Hai là có mạng."),
    A("And the old furniture? We can't take all of it with us.", "Còn đồ đạc cũ? Mình đâu mang theo hết được."),
    B("The landlord won't let us leave anything behind, so I'm having it collected on Friday.", "Chủ nhà không cho để lại thứ gì, nên em đã thuê người đến chở đi vào thứ Sáu."),
    A("Good. Oh, and I need some documents delivered to a client before nine on Monday.", "Tốt. À, tôi cần gửi ít tài liệu cho khách hàng trước chín giờ sáng thứ Hai."),
    B("No problem. I'll have a courier pick them up from your desk on Friday afternoon.", "Không sao ạ. Em sẽ cho người giao hàng đến lấy ở bàn anh chiều thứ Sáu."),
    A("Thanks. Last time the courier made me wait at reception for an hour!", "Cảm ơn. Lần trước người giao hàng bắt tôi đợi ở quầy lễ tân cả tiếng đồng hồ!"),
    B("I remember. This time I'll get him to call you when he's on his way.", "Em nhớ mà. Lần này em sẽ bảo anh ta gọi cho anh khi đang trên đường đến."),
    A("Perfect. And could you have the contract proofread before it goes out?", "Tuyệt. Và em cho người soát lỗi hợp đồng trước khi gửi đi được không?"),
    B("Of course. I'll have Minh check it. He's the most careful person on the team.", "Tất nhiên ạ. Em sẽ bảo Minh kiểm tra. Cậu ấy cẩn thận nhất nhóm."),
  ),
  dialogueQuestions: [
    listenQ("b2-n19-d1", "Why is a technician coming on Saturday?", "Great. What about the internet? I got the building manager to send a technician on Saturday, so it'll be working by Monday.", ["To paint the meeting rooms", "To set up the internet", "To collect the old furniture", "To fix the air conditioning"], 1, "Lan nhờ quản lý tòa nhà cử kỹ thuật viên đến để mạng chạy được trước thứ Hai."),
    mc("b2-n19-d2", "Why is Lan having the old furniture collected?", ["The new office is too small for it.", "Tom asked her to sell it.", "The landlord won't let them leave anything behind.", "It was damaged during the move."], 2, "The landlord won't let us leave anything behind: chủ nhà không cho để lại gì."),
    mc("b2-n19-d3", "What can we infer from Tom's comment about the courier last time?", ["The courier lost his documents.", "It was a frustrating experience, and Lan wants to avoid it happening again.", "Tom prefers to deliver documents himself.", "The courier arrived too early."], 1, "Câu suy luận: Tom phải đợi cả tiếng ở quầy lễ tân (made me wait), và Lan đáp ngay rằng lần này sẽ bảo anh ta gọi trước. Vậy lần trước rất bực mình và Lan muốn tránh lặp lại."),
  ],
  reading: reading({
    title: "Too busy to do it yourself?",
    text: `Ten years ago, if the air conditioner in your flat stopped working, you probably asked a neighbour for the number of a repairman and then waited for him to turn up. Today, many young professionals in Hanoi and Ho Chi Minh City simply open an app. Within an hour, they can have the air conditioner cleaned, their clothes collected for washing and their motorbike taken for its regular service, all without leaving the office.

The growth of these services has been remarkable. One of the largest platforms says that it now has more than eighty thousand registered workers, from cleaners and electricians to tailors who come to your home to take your measurements. Most of its customers are between twenty-five and forty, work long hours and are happy to pay a small fee to save time. "I used to spend every Sunday doing housework," says Trang, a marketing manager who lives alone. "Now I have my flat cleaned twice a month and my laundry picked up on Thursdays. I've got my weekends back."

Businesses have noticed the trend too. Several companies in the city centre now let their staff book services through the office, so that a courier can collect a suit from the dry cleaner's or a phone from the repair shop and bring it straight to reception. Managers say that this small benefit makes employees less stressed and more loyal.

However, not everyone is convinced. Some older residents worry that young people are losing basic skills. "My son can write computer programs, but he can't change a light bulb," one father complained. Others point to the workers themselves, many of whom earn low wages and have no insurance. A survey last year found that some delivery riders were made to complete more than thirty orders a day to receive a bonus, often in heavy traffic and extreme heat.

There are also problems of trust. Letting a stranger into your home is not easy, and stories of damaged appliances or missing items spread quickly online. The better platforms now check every worker's identity and ask customers to rate each job, but mistakes still happen. Last month, one customer in Da Nang posted a video of a cleaner who had broken her washing machine and then refused to pay for the repair. The platform later apologised and had the machine replaced.

Still, the trend seems likely to continue. As incomes rise and working days get longer, more people will decide that their free time is worth more than the money they save by doing everything themselves. The real question is whether the people doing the work will share in the benefits.`,
    glossary: [
      ["turn up", "xuất hiện, đến"],
      ["platform", "nền tảng (ứng dụng)"],
      ["registered", "đã đăng ký"],
      ["measurements", "số đo"],
      ["dry cleaner's", "tiệm giặt khô"],
      ["loyal", "trung thành, gắn bó"],
      ["identity", "danh tính"],
    ],
    questions: [
      mc("b2-n19-r1", "What is the article mainly about?", ["How to repair an air conditioner yourself", "The growth of home and personal services in Vietnamese cities, with their benefits and problems", "Why young people in Vietnam work longer hours than their parents", "How delivery companies choose their riders"], 1, "Bài nói về sự bùng nổ các dịch vụ gọi qua ứng dụng, lợi ích (tiết kiệm thời gian) và các mối lo (mất kỹ năng, thu nhập người lao động, lòng tin)."),
      mc("b2-n19-r2", "What does Trang do now that she didn't do before?", ["She does all her housework on Sundays.", "She works for one of the service platforms.", "She has her flat cleaned and her laundry collected by other people.", "She repairs her own appliances."], 2, "Now I have my flat cleaned twice a month and my laundry picked up on Thursdays."),
      fill("b2-n19-r3", "Some delivery riders were ___ to complete more than thirty orders a day to receive a bonus. (bị bắt)", ["made"], "Bị động của make: were made to + V."),
      mc("b2-n19-r4", "Why does the father mention changing a light bulb?", ["To show that his son is very good with computers", "To complain that light bulbs are too expensive", "To recommend a repair service", "To suggest that young people who use these services may lose practical skills"], 3, "Câu suy luận: con ông viết được phần mềm nhưng không tự thay được bóng đèn, minh họa cho nỗi lo young people are losing basic skills."),
      mc("b2-n19-r5", "How are the better platforms trying to deal with problems of trust?", ["By checking workers' identities and asking customers to rate each job", "By offering free insurance to all customers", "By only sending workers who are over forty", "By letting customers watch the workers on video"], 0, "The better platforms now check every worker's identity and ask customers to rate each job."),
    ],
  }),
  task: task({
    prompt: "Tuần sau đối tác Nhật đến thăm văn phòng của bạn. Viết email khoảng 150–190 từ gửi sếp (chị Linh) báo cáo bạn đã và sẽ sắp xếp những gì: việc thuê dịch vụ, việc giao cho đồng nghiệp, và quy định của tòa nhà hoặc nhà hàng.",
    hints: [
      "Việc thuê dịch vụ: have / get + vật + V3 (I've had the projector replaced, we're having the carpets cleaned).",
      "Giao việc cho đồng nghiệp: have + người + V nguyên mẫu; nhờ người ngoài: get + người + to V.",
      "Quy định: The building won't let us… / We were made to… / Guests are not allowed to…",
      "Chia email theo từng mục: phòng họp, tài liệu, bữa trưa.",
    ],
    model: "Dear Ms Linh,\n\nHere is a quick update on the preparations for next Tuesday's visit from our partners in Osaka.\n\nFirst, the meeting room. I've had the old projector replaced, and we're having the carpets cleaned on Saturday morning. The building manager won't let visitors use the main entrance before eight, so I've asked security to open the side door for our guests.\n\nSecond, the documents. I'll have Minh print the presentation and the product brochures on Monday afternoon, and I've got our designer to add Japanese translations to the first two pages. The contract still needs to be checked, so I'm going to have it proofread by our lawyer before Friday.\n\nThird, lunch. I've booked a table at a restaurant near the office, and I'll get the manager to prepare a vegetarian option, as one of the guests doesn't eat meat. Last time the restaurant made us wait almost forty minutes for our food, so I've asked them to start cooking as soon as we arrive.\n\nPlease let me know if you would like me to arrange anything else.\n\nBest regards,\nHoa",
    checklist: [
      "Có ít nhất hai câu have / get + vật + V3 (thuê người làm).",
      "Có ít nhất một câu have + người + V nguyên mẫu (giao việc cho đồng nghiệp).",
      "Có ít nhất một câu get + người + to V (nhờ được ai đó).",
      "Có let hoặc make (hoặc be allowed to / be made to) để nói về quy định.",
      "Không có to sau have, make, let + người.",
    ],
    minWords: 150,
  }),
});
