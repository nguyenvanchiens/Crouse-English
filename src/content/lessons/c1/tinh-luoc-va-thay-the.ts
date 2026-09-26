import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "tinh-luoc-va-thay-the",
  title: "Nói gọn mà không mất ý",
  minutes: 35,
  lecture: {
    title: "Tỉnh lược và thay thế",
    blocks: [
      p("Bạn đang họp với đối tác người Úc. Anh ấy hỏi: “Will the shipment arrive on Friday?” Bạn trả lời: “Yes, I hope the shipment will arrive on Friday.” Câu đúng ngữ pháp, nhưng nghe như robot. Người bản xứ chỉ nói: **I hope so.** Ở trình độ C1, cái khó không phải là nói thêm, mà là biết **bỏ bớt** đúng chỗ. Bài này dạy hai kỹ thuật: **tỉnh lược** (ellipsis: lược bỏ phần đã rõ) và **thay thế** (substitution: dùng một từ ngắn thay cho cả cụm). Kỹ thuật đầu tiên: **so** và **not** thay cho cả một mệnh đề, sau các động từ chỉ suy nghĩ như think, hope, expect, suppose, believe, guess và cụm be afraid."),
      table(
        ["Động từ", "Khẳng định", "Phủ định thông dụng", "Phủ định trang trọng"],
        ["think / believe / expect / suppose", "I think so.", "I don't think so.", "I think not."],
        ["hope", "I hope so.", "I hope not.", "(không nói I don't hope so)"],
        ["be afraid", "I'm afraid so.", "I'm afraid not.", "(không nói I'm not afraid so)"],
        ["guess", "I guess so.", "I guess not.", "(thân mật, hay gặp ở Mỹ)"],
      ),
      ex("Is the director coming to the dinner? — I'm afraid not. She's still in Singapore.", "Giám đốc có đến bữa tối không? — Tiếc là không. Bà ấy vẫn đang ở Singapore.", "I'm afraid not là cách lịch sự để báo một tin không vui, không phải là “tôi sợ”."),
      mistake("Will it rain tomorrow? — I don't hope so.", "Will it rain tomorrow? — I hope not.", "Tiếng Việt nói “tôi không mong vậy”, nên học viên dịch thẳng thành I don't hope so. Với hope và be afraid, tiếng Anh chỉ đặt not ở cuối: I hope not, I'm afraid not."),
      p("Kỹ thuật thứ hai: **do so** thay cho cả một cụm động từ, hay gặp trong văn viết trang trọng, email công việc và báo cáo. Còn **one / ones** thay cho một danh từ đếm được đã nhắc trước đó."),
      ex("The board asked all departments to cut costs, and most of them did so within a month.", "Hội đồng quản trị yêu cầu mọi phòng ban cắt giảm chi phí, và phần lớn đã làm vậy trong vòng một tháng.", "Did so thay cho cut costs. Trong văn nói, người ta thường chỉ nói did."),
      ex("These chairs are too low. Have you got any higher ones?", "Mấy chiếc ghế này thấp quá. Anh có chiếc nào cao hơn không?", "Ones thay cho chairs. Đây chính là chữ “cái, chiếc” của tiếng Việt: cái màu xanh là the blue one."),
      tip("One / ones chỉ dùng cho **danh từ đếm được**. Với danh từ không đếm được, chỉ cần bỏ danh từ đi: I prefer red wine to white, không nói white one. Mẹo nhớ: nếu không đếm được “một cái” thì không có **one**."),
      p("Kỹ thuật thứ ba: **đồng tình bằng trợ động từ**. Khẳng định dùng **So + trợ động từ + chủ ngữ**; phủ định dùng **Neither / Nor + trợ động từ + chủ ngữ**. Trợ động từ phải khớp với thì của câu trước: am, do, have, can, did..."),
      table(
        ["Người A nói", "Đồng tình (tôi cũng vậy)", "Văn nói thân mật"],
        ["I love street food.", "So do I.", "Me too."],
        ["I've been to Japan.", "So have I.", "Me too."],
        ["I can't drive.", "Neither can I. / Nor can I.", "Me neither."],
        ["I didn't enjoy the film.", "Neither did I.", "Me neither."],
      ),
      mistake("I don't like durian. — Me too.", "I don't like durian. — Me neither. / Neither do I.", "Tiếng Việt chỉ có một câu “tôi cũng vậy” cho cả khẳng định lẫn phủ định. Tiếng Anh thì phân biệt: câu phủ định phải đáp bằng neither hoặc me neither."),
      p("Kỹ thuật thứ tư: **tỉnh lược sau trợ động từ**. Khi động từ chính đã rõ, người bản xứ dừng ở trợ động từ, hoặc ở **to** nếu là động từ nguyên mẫu có to."),
      ex("I haven't finished the report yet, but Minh has.", "Tôi chưa làm xong báo cáo, nhưng Minh thì xong rồi.", "Has thay cho has finished the report."),
      ex("Would you like to join us for lunch? — I'd love to.", "Anh có muốn ăn trưa cùng chúng tôi không? — Tôi rất muốn.", "Giữ lại to, không nói I'd love. Chữ to là dấu hiệu cho người nghe biết có động từ bị lược đi."),
      mistake("Have you sent the invoice? — Yes, I sent.", "Have you sent the invoice? — Yes, I have.", "Tiếng Việt trả lời “Rồi, tôi gửi rồi”, nên học viên giữ động từ và bỏ trợ động từ. Tiếng Anh làm ngược lại: giữ trợ động từ, bỏ động từ chính."),
      teacher("Khi đứng lớp, tôi hay thấy học viên giỏi ngữ pháp nói **quá đủ**, vì sợ thiếu là sai. Tôi dặn: mỗi khi định lặp lại nguyên cụm từ người kia vừa nói, hãy dừng lại và tự hỏi **“Mình có thể dừng ở trợ động từ không?”**. Mỗi tối, lấy năm câu hỏi Yes/No trong ngày và tập trả lời chỉ bằng trợ động từ: Yes, I have. No, she didn't. I hope so. Làm đủ hai tuần, miệng các bạn sẽ tự gọn lại."),
      summary(
        "**So / not** thay cho cả mệnh đề sau think, hope, expect, believe, be afraid: I hope not, I'm afraid so. Không nói I don't hope so.",
        "**Do so** thay cho cả cụm động từ (hợp văn trang trọng); **one / ones** thay danh từ đếm được. Danh từ không đếm được thì chỉ cần bỏ đi.",
        "Đồng tình: **So + trợ động từ + chủ ngữ** với câu khẳng định, **Neither/Nor + trợ động từ + chủ ngữ** với câu phủ định; trợ động từ khớp thì của câu trước.",
        "Câu trả lời ngắn: **giữ trợ động từ, bỏ động từ chính** (Yes, I have; Minh can). Với động từ nguyên mẫu, giữ lại **to** (I'd love to).",
      ),
    ],
  },
  words: [
    word("ellipsis", "/iˈlɪp.sɪs/", "phép tỉnh lược (lược bỏ phần đã rõ)", "Ellipsis makes spoken English sound natural and efficient.", "el|lip|sis", 1),
    word("substitution", "/ˌsʌb.stɪˈtjuː.ʃən/", "phép thay thế", "Using one instead of repeating the noun is a type of substitution.", "sub|sti|tu|tion", 2),
    word("redundant", "/rɪˈdʌn.dənt/", "thừa, không cần thiết", "The second half of your sentence is redundant.", "re|dun|dant", 1, "Ở Anh, be made redundant còn có nghĩa là bị cho nghỉ việc vì cắt giảm nhân sự."),
    word("repetition", "/ˌrep.əˈtɪʃ.ən/", "sự lặp lại", "Good writers avoid unnecessary repetition.", "rep|e|ti|tion", 2),
    word("concise", "/kənˈsaɪs/", "ngắn gọn, súc tích", "Keep your emails concise and to the point.", "con|cise", 1, "Nhớ đọc rõ âm cuối /s/, đừng nuốt thành “con-xai”."),
    word("omit", "/əˈmɪt/", "bỏ qua, lược đi", "You can omit the verb if the meaning is clear.", "o|mit", 1),
    word("auxiliary", "/ɔːɡˈzɪl.i.ər.i/", "trợ động từ; phụ trợ", "In short answers, we repeat the auxiliary, not the main verb.", "aux|il|i|a|ry", 1, "Chữ x đọc là /ɡz/: /ɔːɡˈzɪl/, không đọc là “ốc-xi”."),
    word("likewise", "/ˈlaɪk.waɪz/", "cũng vậy, tương tự", "Nice to meet you. — Likewise.", "like|wise", 0),
  ],
  exercises: [
    mc("c1-n02-1", "Will the meeting run late? — I hope ___.", ["not", "no", "don't", "not so"], 0, "Với hope, phủ định là I hope not. Không nói I hope no hay I don't hope so."),
    mc("c1-n02-2", "I haven't read the new contract yet. — ___", ["So have I.", "Me too.", "Neither have I.", "Neither I have."], 2, "Câu phủ định với have nên đáp Neither have I; trợ động từ đứng trước chủ ngữ. Me too chỉ dùng cho câu khẳng định."),
    fill("c1-n02-3", "These shoes are too small for me. Do you have any bigger ___? (dùng từ thay thế cho shoes)", ["ones"], "Shoes là danh từ đếm được số nhiều nên thay bằng ones."),
    fill("c1-n02-4", "I can't speak Japanese at all, but my sister ___.", ["can"], "Dừng ở trợ động từ can, lược bỏ speak Japanese."),
    reorder("c1-n02-5", "I asked him to apologise and he did so.", "Did so thay cho apologised; cách nói gọn và trang trọng."),
    reorder("c1-n02-6", "My husband loves jazz and so do I.", "So + trợ động từ + chủ ngữ để nói “tôi cũng vậy”. Loves ở hiện tại đơn nên dùng do."),
    listen("c1-n02-7", "Is the pharmacy still open? I'm afraid not.", ["Hiệu thuốc còn mở không? Tôi sợ lắm.", "Hiệu thuốc còn mở không? Tiếc là không.", "Hiệu thuốc còn mở không? Tôi nghĩ là còn."], 1, "I'm afraid not là lời báo tin không vui một cách lịch sự: tiếc là không."),
    listen("c1-n02-8", "I thought the flight would be delayed, and it was.", ["Tôi nghĩ chuyến bay sẽ đúng giờ, và quả thật vậy.", "Chuyến bay bị hoãn nên tôi không đi được.", "Tôi đã nghĩ chuyến bay sẽ bị hoãn, và đúng là nó bị hoãn thật."], 2, "And it was là tỉnh lược của and it was delayed."),
    correct("c1-n02-9", "Would you like to come to the launch party? — Yes, I'd love.", ["Would you like to come to the launch party? — Yes, I'd love to.", "Would you like to come to the launch party? — Yes, I would love to.", "Yes, I'd love to.", "Yes, I would love to."], "Khi lược động từ nguyên mẫu có to, phải giữ lại to: I'd love to. Chữ to báo cho người nghe biết phía sau có một động từ bị lược đi (come to the launch party)."),
    correct("c1-n02-10", "My manager hasn't read the proposal, and so have I.", ["My manager hasn't read the proposal, and neither have I.", "My manager hasn't read the proposal, and nor have I.", "My manager hasn't read the proposal, and I haven't either."], "Vế trước là phủ định (hasn't read), nên đồng tình bằng neither hoặc nor + trợ động từ + chủ ngữ. So have I chỉ dùng sau câu khẳng định."),
  ],
  speaking: [
    say("I hope so, but I'm not completely sure.", "Tôi hy vọng vậy, nhưng tôi không hoàn toàn chắc chắn."),
    say("I haven't finished yet, but Minh has.", "Tôi chưa xong, nhưng Minh thì xong rồi."),
    say("I don't eat spicy food, and neither does my wife.", "Tôi không ăn cay, và vợ tôi cũng vậy."),
  ],
  freeSpeaking: free(
    "Before the meeting starts, a colleague asks you: Have you read the agenda? Is the director coming? Could you take the minutes? And do you like the new office?",
    "Trả lời lần lượt bốn câu hỏi nhanh của đồng nghiệp trước giờ họp, mỗi câu thật gọn: dừng ở trợ động từ, dùng so hoặc not, one hoặc ones, neither hoặc so. Sau đó nói thêm một hai câu về ý kiến của bạn.",
    "Yes, I have, although I only skimmed the second half. Is the director coming? I'm afraid not. She's flying to Singapore this afternoon, but her deputy is, so we'll still have someone from the board. Could I take the minutes? I'd be happy to, as long as someone else does so next week. And the new office? Honestly, I love it. The old desks were tiny, and the new ones are much bigger. The only problem is the air conditioning. I don't like it, and neither does anyone else on my floor, I suspect.",
  ),
  dialogue: dialogue(
    "Giờ nghỉ giải lao ở hội nghị quốc tế",
    "Tuấn, nhà nghiên cứu năng lượng người Việt, gặp tiến sĩ Tan, đại biểu Singapore, trong giờ nghỉ uống cà phê ở một diễn đàn năng lượng tại Bangkok. Cuộc trò chuyện xã giao dần chuyển thành lời mời hợp tác. Để ý cách cả hai trả lời gọn mà không lặp lại câu hỏi.",
    { A: "Tiến sĩ Tan (đại biểu Singapore)", B: "Tuấn (nhà nghiên cứu)" },
    A("Have you been to the Asia Energy Forum before?", "Anh đã từng dự Diễn đàn Năng lượng châu Á chưa?"),
    B("Yes, I have. I came two years ago. My colleague hasn't, though, so I'm showing her around.", "Rồi, tôi đến đây hai năm trước. Nhưng đồng nghiệp tôi thì chưa, nên tôi đang dẫn cô ấy đi xem."),
    A("Lovely. Will you be presenting tomorrow?", "Hay quá. Ngày mai anh có trình bày không?"),
    B("I hope so. The organisers asked me to shorten my talk, and I've done so, but they haven't confirmed my slot yet.", "Tôi hy vọng vậy. Ban tổ chức yêu cầu tôi rút ngắn bài nói, tôi đã làm vậy, nhưng họ chưa xác nhận khung giờ cho tôi."),
    A("I heard the keynote speaker's flight was cancelled. Is that true?", "Tôi nghe nói chuyến bay của diễn giả chính bị hủy. Có đúng vậy không?"),
    B("I'm afraid so. She'll be joining online instead.", "Tiếc là đúng vậy. Thay vào đó bà ấy sẽ tham gia trực tuyến."),
    A("What a shame. I don't really enjoy online keynotes.", "Tiếc thật. Tôi không thích lắm những bài phát biểu chính qua mạng."),
    B("Neither do I. The energy in the room just isn't the same.", "Tôi cũng vậy. Không khí trong hội trường không thể giống được."),
    A("By the way, I've read your paper on solar storage.", "Nhân tiện, tôi đã đọc bài báo của anh về lưu trữ năng lượng mặt trời."),
    B("Have you? I'm flattered. Most people only read the abstract.", "Thật ạ? Tôi thấy vinh dự quá. Đa số chỉ đọc phần tóm tắt thôi."),
    A("I'd like to discuss a possible collaboration. Would you be interested?", "Tôi muốn bàn về khả năng hợp tác. Anh có quan tâm không?"),
    B("Very much so. Do you have a business card? My printed ones are gone, but I've got a digital one.", "Rất quan tâm chứ. Chị có danh thiếp không? Danh thiếp in của tôi hết rồi, nhưng tôi có một cái bản điện tử."),
    A("Here you are. Shall we talk over breakfast tomorrow, if you're free?", "Của anh đây. Sáng mai mình nói chuyện trong bữa sáng nhé, nếu anh rảnh?"),
    B("I think so. Let me check my schedule and message you tonight.", "Tôi nghĩ là được. Để tôi xem lại lịch rồi tối nay nhắn chị."),
  ),
  dialogueQuestions: [
    listenQ("c1-n02-d1", "Why hasn't Tuấn's presentation slot been confirmed yet?", "I hope so. The organisers asked me to shorten my talk, and I've done so, but they haven't confirmed my slot yet.", ["He refused to shorten his talk.", "He has shortened his talk, but the organisers have not confirmed the slot.", "The keynote speaker has taken his slot.", "He sent his slides too late."], 1, "I've done so = I've shortened my talk. Tuấn đã làm theo yêu cầu, chỉ là ban tổ chức chưa xác nhận."),
    mc("c1-n02-d2", "How will the keynote speaker take part in the forum?", ["She will arrive a day late.", "She has withdrawn from the forum.", "She will join online instead.", "Tuấn will present her paper."], 2, "Dr Tan hỏi chuyến bay bị hủy có đúng không; Tuấn đáp I'm afraid so. She'll be joining online instead."),
    mc("c1-n02-d3", "What does Tuấn imply when he says, “Most people only read the abstract”?", ["He is pleasantly surprised that Dr Tan has read more than the abstract.", "He suspects Dr Tan has not really read his paper.", "He is annoyed that his abstract was too short.", "He wants Dr Tan to read the abstract again."], 0, "Trước đó anh nói Have you? I'm flattered. Câu này ngụ ý: hiếm ai đọc kỹ như chị, nên tôi thấy vinh dự."),
  ],
  reading: reading({
    title: "The art of saying less",
    text: `Listen carefully to two old friends chatting over coffee and you will notice something odd: much of what they mean is never actually said. "Coming tonight?" "Might do." "Bring Lan if she's free." "Will do." Transcribed and handed to a stranger, the exchange looks almost like code. To the speakers, however, it is perfectly clear, and it is precisely this economy that makes their conversation sound natural.

Linguists call these techniques ellipsis and substitution. Ellipsis means leaving out words that the listener can easily recover; substitution means replacing them with a short form such as so, one or do so. Neither is a sign of laziness. On the contrary, studies of recorded conversation suggest that fluent speakers leave out or replace repeated material in a large proportion of their replies, and that listeners find such replies easier, not harder, to follow. A reply like "I hope not" shows that the speaker has understood the question well enough to compress it.

For learners, this presents a curious problem. Many are taught, quite rightly, to answer in complete sentences, because full answers are easier to mark and help beginners practise new structures. The habit, however, tends to outlive its usefulness. An advanced student who answers "Have you finished the report?" with "Yes, I have finished the report" is not making a grammatical mistake, yet the reply sounds stiff, even slightly irritated. Native listeners, one teacher told me, often hear such repetition as emphasis: the speaker seems to be insisting on something that nobody doubted.

The difficulty is that ellipsis follows rules, and the rules differ from language to language. Vietnamese speakers can often drop the subject altogether, so a reply such as "Finished already" feels perfectly acceptable to them. English rarely allows that. Instead, it keeps the subject and the auxiliary and drops what follows: "Yes, I have." "No, she didn't." With infinitives, the particle to is left standing on its own, like a signpost pointing back to the missing verb: "I'd love to." Leaving out the auxiliary, or the to, produces replies that are shorter but simply wrong.

Substitution has its own traps. One and ones can replace countable nouns only, which is why "I prefer white wine to red one" sounds odd to an English ear. Do so belongs mainly to formal writing; in relaxed conversation, a simple did is far more likely. And so after verbs of thinking works with think, expect and hope, but the negative forms are unpredictable: people say "I don't think so" but "I hope not", never "I don't hope so".

None of this can be mastered from a rule book alone. The most effective practice, according to several teachers interviewed for this article, is to listen for what is missing. Next time you watch an interview, pause after each short answer and ask yourself what has been left out. You may be surprised how often the answer is: quite a lot.`,
    glossary: [
      ["transcribe", "ghi lại thành văn bản"],
      ["economy", "(ở đây) sự tiết kiệm lời"],
      ["recover", "(ở đây) khôi phục lại, tự hiểu ra"],
      ["compress", "nén lại, rút gọn"],
      ["outlive its usefulness", "tồn tại lâu hơn lúc còn có ích"],
      ["particle", "tiểu từ (như to trong to go)"],
      ["signpost", "biển chỉ đường"],
    ],
    questions: [
      mc("c1-n02-r1", "What is the main point of the article?", ["Leaving words out is a skill that makes English sound natural, and it follows clear rules.", "Learners should always answer in complete sentences.", "Vietnamese and English leave out words in exactly the same way.", "Short replies are a sign that the speaker is not paying attention."], 0, "Bài báo lập luận rằng tỉnh lược và thay thế không phải lười biếng mà là kỹ năng, và nó có quy tắc riêng."),
      mc("c1-n02-r2", "According to the article, why are beginners taught to answer in full sentences?", ["Because short answers are considered rude.", "Because full answers are easier to mark and help them practise structures.", "Because native speakers prefer full answers.", "Because ellipsis is only used in writing."], 1, "Đoạn ba: because full answers are easier to mark and help beginners practise new structures."),
      mc("c1-n02-r3", "Why might “Yes, I have finished the report” sound slightly irritated to a native speaker?", ["It contains a grammatical mistake.", "It is too informal for the workplace.", "The repetition can sound as if the speaker is insisting on something nobody doubted.", "It does not answer the question."], 2, "Câu đầy đủ không sai ngữ pháp, nhưng người nghe bản xứ hiểu sự lặp lại là nhấn mạnh, như thể người nói đang cãi lại."),
      fill("c1-n02-r4", "The writer compares the particle to in “I'd love to” with a ___ that points back to the missing verb.", ["signpost"], "Đoạn bốn: like a signpost pointing back to the missing verb. To đứng một mình để chỉ về động từ bị lược."),
      mc("c1-n02-r5", "What is the writer's attitude towards ellipsis and substitution?", ["Critical: they make English harder to understand.", "Neutral: they are a matter of personal style.", "Suspicious: they are mostly used by lazy speakers.", "Positive: they show real understanding and are worth practising."], 3, "Tác giả nói Neither is a sign of laziness và khuyên người học luyện nghe những gì bị lược đi: thái độ tích cực."),
    ],
  }),
  task: task({
    prompt: "Đối tác nước ngoài gửi email hỏi sáu việc: bên bạn đã nhận hợp đồng đã ký chưa; bạn có dự được cuộc họp thứ Năm không; mẫu sản phẩm gửi sang có ổn không; phòng kỹ thuật có đồng ý tiến độ mới không; bên bạn có định tăng số lượng đơn hàng tới không; bạn có dự hội chợ ở Singapore tháng sau không. Hãy viết email trả lời trang trọng, khoảng 230–280 từ, trả lời đủ sáu ý mà không chép lại nguyên văn câu hỏi.",
    hints: [
      "Trả lời có/không bằng trợ động từ hoặc so/not: we have, I'm afraid not, my deputy can, I believe so, I very much hope so.",
      "Dùng one/ones để khỏi lặp lại danh từ chỉ mẫu sản phẩm; dùng do so cho một hành động vừa nhắc đến.",
      "Khi lược động từ nguyên mẫu, giữ lại to: we still intend to.",
      "Mỗi câu hỏi một đoạn ngắn, mở đầu bằng As for..., Regarding..., You also asked whether...",
    ],
    model:
      "Dear Ms Walker,\n\nThank you for your email of Monday and for your patience while I gathered the information you requested. I will take your questions in turn.\n\nFirst, you asked whether we have received the signed contract. We have, and our legal team has already reviewed it without raising any concerns. As for Thursday's meeting, I'm afraid I can't attend in person, as I will be visiting our factory in Hai Phong that day. My deputy, Mr Vu, can, and he will have full authority to approve the final specifications.\n\nRegarding the product samples, the grey ones arrived in perfect condition, whereas the blue ones were slightly damaged in transit, probably because the packaging was too thin. Could you possibly send us two new ones, in stronger boxes this time? You also wanted to know whether our engineers accept the revised timeline. I believe so. They would, however, prefer to confirm it in writing, and they have promised to do so by Friday.\n\nYour fifth question concerned the size of our next order. We had planned to increase it by twenty per cent, and we still intend to, provided that the new samples meet our standards. Finally, will I be at the trade fair in Singapore next month? I very much hope so. My flights are not booked yet, but if my schedule allows, I would be delighted to meet you there and discuss our plans for next year.\n\nI look forward to hearing from you.\n\nKind regards,\nHoa Tran",
    checklist: [
      "Có ít nhất hai câu dùng so hoặc not thay cho cả mệnh đề (I believe so, I'm afraid not, I very much hope so).",
      "Có ít nhất hai câu dừng ở trợ động từ (We have, Mr Vu can).",
      "Dùng one/ones đúng với danh từ đếm được (the grey ones, two new ones).",
      "Có do so thay cho một cụm động từ đã nhắc, và giữ lại to khi lược động từ nguyên mẫu (we still intend to).",
      "Trả lời đủ sáu ý và không câu nào lặp lại nguyên văn câu hỏi của đối tác.",
    ],
    minWords: 230,
  }),
});
