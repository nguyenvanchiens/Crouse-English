import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "bang-thai-cach",
  title: "Thể giả định",
  minutes: 35,
  lecture: {
    title: "Thể giả định sau động từ, tính từ và trong thành ngữ cố định",
    blocks: [
      p("Hãy đọc câu này trong một biên bản họp: **The director insisted that he be present.** Nhiều học viên giỏi của tôi đã sửa thành he is present hoặc he was present, vì nghĩ người viết quên chia động từ. Thật ra đây là **thể giả định** (subjunctive): sau một số động từ và tính từ mang nghĩa yêu cầu, đề nghị, tầm quan trọng, động từ trong mệnh đề that giữ nguyên **dạng nguyên mẫu**, bất kể chủ ngữ là ai và thì của câu chính là gì."),
      table(
        ["Nhóm", "Từ thường gặp", "Cấu trúc", "Ví dụ"],
        ["Động từ", "insist, recommend, demand, suggest, propose, request, require", "V + that + S + V nguyên mẫu", "The doctor recommended that she rest."],
        ["Tính từ", "essential, vital, crucial, important, imperative, necessary", "It is + adj + that + S + V nguyên mẫu", "It is vital that he be informed."],
        ["Phủ định", "(cả hai nhóm)", "that + S + not + V nguyên mẫu", "They insisted that we not leave."],
        ["Lối Anh-Anh", "(cả hai nhóm)", "that + S + should + V nguyên mẫu", "They insisted that we should not leave."],
      ),
      p("Ba điều cần nhớ khi dùng thể giả định: động từ **không thêm -s** dù chủ ngữ là he, she, it; động từ be luôn là **be**, không phải is, are, was; và phủ định chỉ cần đặt **not** trước động từ, không mượn do, does, did."),
      ex("The committee demanded that the report be rewritten.", "Ủy ban yêu cầu viết lại bản báo cáo.", "Be rewritten là bị động ở thể giả định: be + V3."),
      ex("It is essential that every employee complete the safety training.", "Điều thiết yếu là mọi nhân viên phải hoàn thành khóa huấn luyện an toàn.", "Complete không thêm -s dù chủ ngữ là every employee."),
      mistake("We recommend that he took more rest.", "We recommend that he take more rest. / We recommend that he should take more rest.", "Học viên lẫn với cấu trúc lùi thì của wish và It's time (I wish he took…) nên đổi take thành took. Câu chính ở hiện tại (recommend) mà động từ sau that lại ở quá khứ là sai trong mọi biến thể tiếng Anh. Dùng nguyên mẫu take (trang trọng) hoặc should take."),
      mistake("The board demanded the director to resign immediately.", "The board demanded that the director resign immediately. / The board demanded that the director should resign immediately.", "Tiếng Việt nói “yêu cầu ai làm gì”, nên học viên dùng demand + người + to V giống ask. Demand không có mẫu này: dùng demand that + S + V nguyên mẫu (hoặc should + V). Trong văn trang trọng, dù câu chính ở quá khứ, động từ sau that vẫn ở nguyên mẫu, không lùi thì."),
      p("Người Anh thường thay thể giả định bằng **should + V nguyên mẫu**: The doctor recommended that he should take more rest. Trong văn thân mật, tiếng Anh-Anh còn chấp nhận **động từ chia bình thường**: The doctor recommended that he took more rest; It is important that she doesn't miss it. Tất cả đều đúng. Thể giả định (nguyên mẫu) nghe trang trọng hơn, là chuẩn trong văn học thuật và tiếng Anh Mỹ; khi viết trang trọng, hãy dùng nguyên mẫu hoặc should."),
      tip("Coi chừng **insist** và **suggest** có hai nghĩa. Khi nghĩa là **yêu cầu**, dùng thể giả định: She insisted that he stay. Khi nghĩa là **khẳng định một sự thật** hoặc **ngụ ý**, chia động từ bình thường: He insisted that he was innocent (anh ta khăng khăng rằng mình vô tội)."),
      p("Thể giả định còn sống sót trong một số **thành ngữ cố định**. Không cần phân tích ngữ pháp, chỉ cần học thuộc như một khối:"),
      table(
        ["Thành ngữ", "Nghĩa", "Ví dụ"],
        ["if need be", "nếu cần", "We'll work through the weekend if need be."],
        ["be that as it may", "dù thế nào đi nữa, dẫu vậy", "Be that as it may, the deadline hasn't changed."],
        ["so be it", "thì cứ vậy đi, đành chấp nhận", "If they want to leave, so be it."],
        ["come what may", "dù có chuyện gì xảy ra", "Come what may, I'll support you."],
        ["suffice it to say", "chỉ cần nói rằng", "Suffice it to say, the meeting didn't go well."],
      ),
      ex("If need be, we can postpone the launch by a week.", "Nếu cần, chúng ta có thể lùi buổi ra mắt một tuần.", "Không nói if need is hay if needed be. Thành ngữ là cụm cố định, không chia động từ."),
      mistake("It is important that she don't miss the interview.", "It is important that she not miss the interview. / It is important that she should not miss the interview.", "Học viên biết thể giả định dùng nguyên mẫu nên đổi doesn't thành don't. Nhưng thể giả định phủ định không mượn do: chỉ cần not + V nguyên mẫu, hoặc should not. (Tiếng Anh-Anh thân mật cũng chấp nhận động từ chia bình thường, nhưng khi đó phải chia đúng: she doesn't miss.)"),
      teacher("Nói thật với các bạn, khi đứng lớp tôi thấy thể giả định là thứ học viên Việt **nhận ra khi đọc** nhưng **không dám dùng khi viết**, vì sợ bị chấm là quên chia động từ. Tôi dặn hai điều. Một: khi viết bài luận hay email trang trọng, cứ mạnh dạn viết It is essential that everyone be... Hai: nếu vẫn thấy chưa yên tâm, dùng lối **should** của người Anh, vừa đúng vừa an toàn. Mỗi ngày đặt ba câu với recommend, insist và It is vital that, đọc to lên cho quen tai."),
      summary(
        "Văn trang trọng và tiếng Anh Mỹ: sau **insist, recommend, demand, suggest, propose, request, require** + that, động từ ở **dạng nguyên mẫu**, không thêm -s, be giữ nguyên là be.",
        "Sau **It is essential / vital / crucial / important / imperative that** cũng dùng động từ nguyên mẫu.",
        "Phủ định chỉ cần **not + V nguyên mẫu** (that she not miss), không mượn do, does, did.",
        "Tiếng Anh-Anh còn dùng **should + V nguyên mẫu** hoặc động từ chia bình thường (thân mật). Trong văn trang trọng, câu chính ở quá khứ cũng **không lùi thì**: demanded that he resign.",
        "Khi insist, suggest nghĩa là khẳng định một sự thật thì chia động từ bình thường: He insisted that he was innocent.",
        "Học thuộc thành ngữ cố định: **if need be, be that as it may, so be it, come what may, suffice it to say**.",
      ),
    ],
  },
  words: [
    word("subjunctive", "/səbˈdʒʌŋk.tɪv/", "thể giả định", "The subjunctive is common in formal English.", "sub|junc|tive", 1),
    word("imperative", "/ɪmˈper.ə.tɪv/", "cấp bách, bắt buộc", "It is imperative that we act now.", "im|per|a|tive", 1),
    word("mandatory", "/ˈmæn.də.tər.i/", "bắt buộc (theo quy định)", "Wearing a helmet is mandatory on motorbikes.", "man|da|to|ry", 0),
    word("stipulate", "/ˈstɪp.jə.leɪt/", "quy định rõ (trong hợp đồng, luật)", "The contract stipulates that payment be made within thirty days.", "stip|u|late", 0),
    word("advisable", "/ədˈvaɪ.zə.bəl/", "nên làm, được khuyến nghị", "It is advisable that you book in advance.", "ad|vi|sa|ble", 1, "Chữ s đọc là /z/: /ədˈvaɪ.zə.bəl/."),
    word("compliance", "/kəmˈplaɪ.əns/", "sự tuân thủ", "The company must ensure full compliance with the new rules.", "com|pli|ance", 1),
    word("adamant", "/ˈæd.ə.mənt/", "kiên quyết, cứng rắn", "She was adamant that the rules be followed.", "ad|a|mant", 0),
  ],
  exercises: [
    mc("c1-n08-1", "(Văn phong trang trọng) The doctor recommended that he ___ more exercise.", ["takes", "take", "took", "taking"], 1, "Sau recommend that, động từ ở nguyên mẫu: take, không thêm -s."),
    mc("c1-n08-2", "(Văn phong trang trọng) It is vital that every passenger ___ a seat belt.", ["wears", "wore", "wear", "is wearing"], 2, "It is vital that + S + V nguyên mẫu. Nếu dùng lối Anh-Anh thì là should wear."),
    fill("c1-n08-3", "(Văn phong trang trọng) The manager insisted that the report ___ finished by Friday.", ["be", "should be"], "Thể giả định của be luôn là be, không phải is hay was. Should be cũng đúng theo lối Anh-Anh."),
    fill("c1-n08-4", "We can work through the weekend if need ___.", ["be"], "If need be là thành ngữ cố định: nếu cần."),
    reorder("c1-n08-5", "The customers demanded that the fee be refunded.", "Demand that + S + V nguyên mẫu. Ở dạng bị động, thể giả định là be + V3: be refunded, không phải is refunded."),
    reorder("c1-n08-6", "It is essential that everyone arrive on time.", "Everyone là số ít nhưng động từ vẫn ở nguyên mẫu: arrive."),
    listen("c1-n08-7", "The committee proposed that the fee not be increased.", ["Ủy ban đề xuất tăng phí.", "Ủy ban đề xuất không tăng phí.", "Ủy ban từ chối đề xuất giảm phí."], 1, "Not be increased là phủ định ở thể giả định: không bị tăng."),
    listen("c1-n08-8", "The report is late. Be that as it may, we still need to send it today.", ["Báo cáo trễ nên hôm nay không cần gửi nữa.", "Báo cáo đã gửi đúng hạn.", "Nếu báo cáo trễ thì mai hãy gửi.", "Báo cáo bị trễ. Dù vậy, hôm nay chúng ta vẫn phải gửi nó."], 3, "Be that as it may: dù thế nào đi nữa, dẫu vậy."),
    correct("c1-n08-9", "The auditors recommend that the company reviewed its safety procedures.", ["The auditors recommend that the company review its safety procedures.", "The auditors recommend that the company should review its safety procedures.", "The auditors recommend that the company reviews its safety procedures."], "Câu chính ở hiện tại (recommend) nên động từ sau that không thể ở quá khứ. Trang trọng: review (nguyên mẫu, không thêm -s); lối Anh-Anh: should review hoặc reviews."),
    correct("c1-n08-10", "The union demanded the overtime rate to be increased.", ["The union demanded that the overtime rate be increased.", "The union demanded that the overtime rate should be increased."], "Demand không đi với tân ngữ + to V như ask. Dùng demand that + S + V nguyên mẫu; bị động ở thể giả định là be + V3: be increased (hoặc should be increased)."),
  ],
  speaking: [
    say("I suggest that he take a few days off.", "Tôi đề nghị anh ấy nghỉ vài ngày."),
    say("It is essential that everyone be on time tomorrow.", "Điều thiết yếu là ngày mai mọi người phải đúng giờ."),
    say("We can stay late if need be.", "Chúng ta có thể ở lại muộn nếu cần."),
  ],
  freeSpeaking: free(
    "If you could introduce one new rule at your workplace or school, what would it be, and why is it important that people follow it?",
    "Đề xuất một quy định mới ở nơi làm việc hoặc trường học của bạn và giải thích vì sao nó quan trọng. Dùng ít nhất ba câu thể giả định (insist that, recommend that, it is essential that) và một thành ngữ cố định như be that as it may hoặc if need be.",
    "If I could introduce one rule at my company, I would insist that nobody send work messages after nine in the evening. At the moment, my manager often writes at eleven at night, and people feel they have to reply immediately. I would recommend that genuinely urgent problems be handled by phone instead, and only by the person on duty that week. It is essential that people have time to rest; otherwise they burn out and make mistakes. Some colleagues would complain, of course. Be that as it may, I'm convinced everyone would be more productive in the long run.",
  ),
  dialogue: dialogue(
    "Thực hiện khuyến nghị sau đợt kiểm tra an toàn",
    "Chị Thu, trưởng phòng nhân sự của một nhà máy điện tử ở Bắc Ninh, trao đổi với ông Weber, giám đốc nhà máy người Đức, về báo cáo của đoàn kiểm tra an toàn vừa gửi sáng nay.",
    { A: "Chị Thu, trưởng phòng nhân sự", B: "Ông Weber, giám đốc nhà máy" },
    A("The auditors' report arrived this morning. They recommend that every worker attend a refresher course on fire safety.", "Báo cáo của đoàn kiểm tra đến sáng nay. Họ khuyến nghị mọi công nhân phải tham gia khóa bồi dưỡng về an toàn phòng cháy."),
    B("Every worker? Including the office staff?", "Mọi công nhân sao? Kể cả nhân viên văn phòng?"),
    A("Yes. It is essential that everyone be trained, not just the people on the factory floor.", "Vâng. Điều thiết yếu là tất cả mọi người đều được huấn luyện, không chỉ những người đứng máy."),
    B("Fine. But I'd suggest that we run the sessions in small groups, so that production doesn't stop.", "Được. Nhưng tôi đề nghị chúng ta tổ chức theo nhóm nhỏ để sản xuất không bị gián đoạn."),
    A("Good idea. They also insist that the emergency exits not be blocked at any time. Last month two of them were.", "Ý hay ạ. Họ cũng yêu cầu lối thoát hiểm tuyệt đối không được để bị chắn. Tháng trước có hai lối bị chắn."),
    B("That's unacceptable. I'll request that the warehouse manager check them every morning.", "Không thể chấp nhận được. Tôi sẽ yêu cầu quản lý kho kiểm tra các lối đó mỗi sáng."),
    A("And head office requires that the action plan be submitted within a week.", "Và trụ sở chính yêu cầu nộp kế hoạch hành động trong vòng một tuần."),
    B("A week is tight. We'll work over the weekend if need be.", "Một tuần thì gấp đấy. Nếu cần, chúng ta sẽ làm cả cuối tuần."),
    A("Some supervisors will complain about the extra paperwork.", "Sẽ có vài tổ trưởng phàn nàn về giấy tờ tăng thêm."),
    B("Be that as it may, safety isn't optional. It's vital that we get this right.", "Dù vậy, an toàn không phải chuyện tùy chọn. Điều cực kỳ quan trọng là chúng ta phải làm cho đúng."),
  ),
  dialogueQuestions: [
    listenQ("c1-n08-d1", "What does Mr Weber propose so that production doesn't stop?", "Fine. But I'd suggest that we run the sessions in small groups, so that production doesn't stop.", ["Running the training only at weekends", "Training only the office staff", "Running the sessions in small groups", "Postponing the course until next year"], 2, "I'd suggest that we run the sessions in small groups: tổ chức theo nhóm nhỏ để sản xuất không bị gián đoạn."),
    mc("c1-n08-d2", "What problem with the emergency exits does Thu mention?", ["They were locked every night.", "Two of them were blocked last month.", "They had no signs.", "There were not enough of them."], 1, "Last month two of them were: tức là tháng trước có hai lối thoát hiểm bị chắn (were blocked)."),
    mc("c1-n08-d3", "How does Mr Weber react when Thu says some supervisors will complain about the paperwork?", ["He is firm: safety comes first, whatever the complaints.", "He agrees to reduce the paperwork.", "He asks Thu to deal with the complaints herself.", "He decides to ignore the auditors' report."], 0, "Be that as it may, safety isn't optional: dù vậy, an toàn không phải chuyện tùy chọn. Ông giữ lập trường cứng rắn."),
  ],
  reading: reading({
    title: "Is the subjunctive dying? Not quite",
    text: `Every few years, a newspaper columnist announces the death of the English subjunctive. The form, they argue, is a relic of older English that survives only in a handful of fossilised expressions such as "God save the King" and "be that as it may". Ordinary speakers, the argument goes, no longer say "I insist that he be present"; they say "I insist that he is present", or simply "he has to be there".

The evidence tells a more interesting story. Studies based on large collections of written English, known as corpora, suggest that the mandative subjunctive, the form used after verbs and adjectives of demand, recommendation and importance, actually became more frequent during the twentieth century, particularly in American English. In formal American writing, a sentence such as "The committee recommended that the plan be approved" is now the normal choice, not an old-fashioned one. British English, by contrast, long preferred the alternative with should: "The committee recommended that the plan should be approved". In recent decades, however, the subjunctive seems to have been gaining ground in Britain too, possibly under American influence.

Why has a supposedly dying form proved so resilient? One explanation is that it is useful. Because the verb does not change, the subjunctive clearly separates what someone wants to happen from what is actually true. Compare "She insisted that he stay" with "She insisted that he stayed". The first reports a demand; the second reports a claim about the past. In legal contracts, company regulations and official minutes, where the difference between an obligation and a fact matters, that clarity is extremely valuable. It is no coincidence that the form flourishes in precisely these genres.

The situation in everyday conversation is different. In casual speech, many speakers avoid the construction altogether, replacing it with need to, have to or an ordinary present tense: "It's important that everyone gets there early." Few listeners would object, and in a relaxed context the subjunctive can even sound pompous. The choice, in other words, is less about right and wrong than about register.

For learners, this has two practical consequences. First, it is worth recognising the subjunctive instantly when reading, because misunderstanding it can reverse the meaning of a sentence. Second, it is worth using it confidently in formal writing, where it signals control of an advanced structure. Examiners are unlikely to penalise a candidate for writing "It is essential that the report be submitted by Friday". They may, however, notice a sudden drop in register when a candidate writes "It's important that the report gets sent" in a letter that is otherwise highly formal.

The subjunctive, then, is not dying. It has simply found its natural home in formal writing, and it is a home that advanced learners will visit often.`,
    glossary: [
      ["relic", "tàn tích, thứ còn sót lại từ xưa"],
      ["fossilised", "bị “hóa thạch”, cố định không đổi"],
      ["corpora", "các kho ngữ liệu (số nhiều của corpus)"],
      ["mandative", "mang nghĩa yêu cầu, mệnh lệnh"],
      ["resilient", "bền bỉ, khó bị đào thải"],
      ["flourish", "phát triển mạnh"],
      ["pompous", "khoa trương, kiểu cách"],
      ["register", "(ở đây) văn phong, mức độ trang trọng"],
    ],
    questions: [
      mc("c1-n08-r1", "What is the main argument of the article?", ["The subjunctive is disappearing from all kinds of English.", "The subjunctive is still alive, especially in formal writing, and its use depends on register.", "British English uses the subjunctive more than American English.", "Learners should avoid the subjunctive because it sounds old-fashioned."], 1, "Tiêu đề và đoạn cuối: The subjunctive, then, is not dying. It has simply found its natural home in formal writing."),
      mc("c1-n08-r2", "According to the article, which form did British English traditionally prefer?", ["The version with should", "The ordinary past tense", "The version with need to", "The present continuous"], 0, "British English, by contrast, long preferred the alternative with should."),
      mc("c1-n08-r3", "Why does the writer compare “She insisted that he stay” with “She insisted that he stayed”?", ["To show that the two sentences mean the same thing", "To prove that the second sentence is ungrammatical", "To show that the subjunctive separates a demand from a statement of fact", "To explain why Americans prefer the subjunctive"], 2, "Câu thứ nhất là một yêu cầu, câu thứ hai là một khẳng định về quá khứ: thể giả định giúp phân biệt nghĩa vụ và sự thật."),
      fill("c1-n08-r4", "In casual speech, the writer says, the subjunctive can sound ___, that is, too formal and self-important.", ["pompous"], "Đoạn bốn: in a relaxed context the subjunctive can even sound pompous."),
      mc("c1-n08-r5", "What is the writer's attitude towards the claim that the subjunctive is dying?", ["Strong agreement", "Complete indifference", "Amusement at the columnists' ignorance", "Scepticism, based on the evidence"], 3, "The evidence tells a more interesting story: tác giả hoài nghi lời tuyên bố đó và dựa vào số liệu từ kho ngữ liệu để phản bác."),
    ],
  }),
  task: task({
    prompt: "Bạn là trưởng phòng. Sau một đợt kiểm tra nội bộ, hãy viết email (khoảng 230–280 từ) gửi cả nhóm thông báo các quy định mới, lý do và cách thực hiện. Dùng thể giả định sau động từ và tính từ chỉ yêu cầu, tầm quan trọng.",
    hints: [
      "Dùng recommend, request, require, stipulate, demand, propose + that + S + V nguyên mẫu.",
      "Dùng It is essential / vital / important that + S + V nguyên mẫu, có ít nhất một câu phủ định với not và một câu bị động be + V3.",
      "Mỗi quy định nêu kèm lý do; kể lại một sự việc đã xảy ra bằng thì quá khứ bình thường để phân biệt với thể giả định.",
      "Chèn một thành ngữ cố định như if need be hoặc be that as it may.",
    ],
    model: "Dear team,\n\nFollowing last week's internal inspection, the auditors have made several recommendations, and I would like to explain what they mean for us and why they matter.\n\nFirst, the auditors recommend that every member of staff complete the online data protection course by the end of the month. The course takes about two hours, and it is important that you do it during working time rather than at home. Second, it is essential that customer files not be left on desks overnight. Last month, two confidential contracts were found in the meeting room the next morning, which could have caused serious problems had a visitor seen them. Third, head office requested last week that each department appoint a compliance officer, and I propose that Minh take on this role for our team, as he already knows the new software well.\n\nIn addition, the auditors have stipulated that all passwords be changed every ninety days. I know that this is inconvenient. Be that as it may, the rule is mandatory, and it is vital that we follow it carefully, since our largest clients now demand that their data be handled to the highest standards.\n\nI realise that all this means extra work at a very busy time. If need be, I will reorganise our schedule so that nobody falls behind. I would also suggest that anyone who is struggling speak to me directly rather than wait until the deadline.\n\nThank you for your cooperation, and please let me know if you have any questions.\n\nBest wishes,\nHoa",
    checklist: [
      "Có ít nhất năm câu dạng động từ hoặc tính từ chỉ yêu cầu + that + S + V nguyên mẫu.",
      "Động từ sau that không thêm -s dù chủ ngữ là ngôi thứ ba (Minh take, every member complete, anyone speak).",
      "Có ít nhất một câu phủ định dạng not + V nguyên mẫu và một câu bị động be + V3 (not be left, be changed).",
      "Câu chính ở quá khứ (head office requested) thì động từ sau that vẫn không lùi thì, không chia (appoint, không phải appointed).",
      "Có ít nhất một thành ngữ cố định (if need be, be that as it may...).",
    ],
    minWords: 230,
  }),
});
