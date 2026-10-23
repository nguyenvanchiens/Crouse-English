import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "cau-tao-tu-va-ket-hop-tu",
  title: "Cấu tạo từ và kết hợp từ",
  minutes: 35,
  lecture: {
    title: "Hậu tố, tiền tố phủ định, họ từ và kết hợp từ công sở",
    blocks: [
      p("Tiếng Việt không đổi hình dạng từ: “tin cậy” vừa là tính từ, vừa đứng được sau “sự”. Tiếng Anh thì phải đổi: **rely, reliable, reliability, reliably**. Trong bài thi **B2 First (FCE), Use of English Part 3**, bạn được cho một từ gốc in hoa và phải đổi nó cho vừa chỗ trống. Trong email công việc, sai từ loại là lỗi khiến người đọc khựng lại ngay. Bài này luyện hai thứ: **cấu tạo từ** (hậu tố, tiền tố phủ định, họ từ) và **kết hợp từ** (động từ nào đi với danh từ nào: **make** a decision, **meet** a deadline)."),
      table(
        ["Từ loại", "Hậu tố thường gặp", "Ví dụ"],
        ["Danh từ", "-tion / -sion, -ment, -ness, -ity, -ance / -ence", "decide → decision, develop → development, aware → awareness, able → ability, perform → performance"],
        ["Danh từ chỉ người", "-er / -or, -ee, -ist, -ant", "employ → employer / employee, invest → investor, consult → consultant"],
        ["Tính từ", "-ful, -less, -ous, -ive, -able / -ible, -al", "help → helpful / helpless, danger → dangerous, attract → attractive, rely → reliable, profession → professional"],
        ["Động từ", "-ise (Anh-Anh), -ify", "modern → modernise, simple → simplify"],
        ["Trạng từ", "-ly (thêm vào tính từ)", "careful → carefully, efficient → efficiently"],
      ),
      p("Làm bài cấu tạo từ theo **ba bước**. **Một**: nhìn chữ xung quanh để biết từ loại: sau **the, a, his, of** cần danh từ; sau **be, seem, very** hoặc trước danh từ cần tính từ; bổ nghĩa cho động từ cần trạng từ. **Hai**: đọc ý cả câu xem có cần **nghĩa phủ định** hoặc **số nhiều** không. **Ba**: soát chính tả: bỏ e (create → creative), y thành i (happy → happiness), gấp đôi phụ âm (begin → beginner)."),
      ex("The client will make a final decision next week.", "Khách hàng sẽ đưa ra quyết định cuối cùng vào tuần sau.", "Đề cho DECIDE. Sau a final cần danh từ: decision. Đổi -de thành -sion."),
      ex("Her presentation was very impressive.", "Bài thuyết trình của cô ấy rất ấn tượng.", "Đề cho IMPRESS. Sau very cần tính từ: impressive."),
      mistake("The success of the project depends on the reliable of the team.", "The success of the project depends on the reliability of the team.", "Tiếng Việt chỉ cần thêm “sự”, từ gốc giữ nguyên, nên học trò để nguyên tính từ reliable sau the. Sau the… of phải là danh từ: reliability."),
      table(
        ["Tiền tố", "Dùng khi", "Ví dụ"],
        ["un-", "phổ biến nhất", "unhappy, unemployed, unreliable, unlikely"],
        ["in-", "nhiều từ gốc Latin", "inexperienced, inefficient, incorrect"],
        ["im- / il- / ir-", "trước p, m / trước l / trước r", "impatient, impossible / illegal / irresponsible, irregular"],
        ["dis-", "nhiều động từ và một số tính từ", "dishonest, disagree, dissatisfied"],
        ["mis-", "làm sai, hiểu sai", "misunderstand, mislead, misuse"],
      ),
      mistake("The manager was very unpatient with the new staff.", "The manager was very impatient with the new staff.", "Học trò quen un- nên gắn vào mọi tính từ. Trước p và m dùng im-, trước l dùng il-, trước r dùng ir-: impatient, illegal, irresponsible. Không có quy tắc tuyệt đối, nên học cả từ."),
      ex("Many customers were dissatisfied with the new booking system.", "Nhiều khách hàng không hài lòng với hệ thống đặt chỗ mới.", "Dis + satisfied: giữ cả hai chữ s. Lỗi chính tả dissatisfied rất hay gặp trong bài thi."),
      p("**Kết hợp từ** là những từ người bản xứ quen dùng cùng nhau, không theo logic dịch nghĩa. Tiếng Việt nói “làm quyết định, hoàn thành hạn chót, đưa ra lo ngại”, nhưng tiếng Anh nói **make** a decision, **meet** a deadline, **raise** a concern. Hãy học **cả cụm**, đừng học từ lẻ."),
      table(
        ["Động từ", "Đi với", "Đừng nói"],
        ["make", "a decision, a mistake, progress, an effort, a complaint", "do a decision, do a mistake"],
        ["do", "business, research, your best, a favour, overtime", "make business, make research"],
        ["meet", "a deadline, a target, customers' needs", "finish a deadline, reach a deadline"],
        ["raise", "a concern, a question, prices, money", "rise a question"],
        ["take", "responsibility, action, a break, notes", "get responsibility"],
        ["reach", "an agreement, a decision, a target", "arrive an agreement"],
      ),
      ex("We need to take action before the problem gets worse.", "Chúng ta cần hành động trước khi vấn đề tệ hơn.", "Take action là cụm cố định. Không nói do action."),
      mistake("We must do a decision by Friday.", "We must make a decision by Friday.", "“Làm quyết định” dịch từng chữ thành do. Tiếng Anh dùng make (hoặc take, reach) a decision. Do thường đi với công việc, nhiệm vụ: do the work, do research."),
      mistake("We worked all weekend to finish the deadline.", "We worked all weekend to meet the deadline.", "Hạn chót không phải thứ để “hoàn thành”; ta đáp ứng nó: meet the deadline. Nếu lỡ hạn thì nói miss the deadline."),
      tip("Ghi từ mới theo **cả họ từ** và đánh dấu trọng âm: reLY, reLIable, reliaBIlity. Hậu tố **-ity, -ion, -ic** kéo trọng âm về âm tiết **ngay trước nó**: ABle → aBIlity, deCIDE → deCIsion. Đọc to cả họ từ vài lần để tai quen với chuyện trọng âm dịch chuyển."),
      teacher("Khi chữa bài viết, tôi thấy học trò mất điểm vì **từ loại** nhiều hơn vì từ vựng: biết từ reliable nhưng đặt vào chỗ cần reliability. Bài tập tôi giao mỗi ngày: chọn **năm từ** trong email hoặc bài báo vừa đọc, viết ra **cả họ từ** (danh từ, tính từ, động từ, trạng từ, dạng phủ định), rồi đặt một câu công việc với từ khó nhất. Với kết hợp từ, mỗi tuần **gom mười cụm** từ email của đồng nghiệp nước ngoài vào một trang sổ riêng. Sau vài tháng, bạn sẽ viết như người bản xứ mà không cần tra từ điển."),
      summary(
        "Xác định từ loại từ chữ xung quanh: sau the / a / of là danh từ, sau be / very hoặc trước danh từ là tính từ, bổ nghĩa động từ là trạng từ.",
        "Hậu tố danh từ: -tion, -ment, -ness, -ity, -ance / -ence; tính từ: -ful, -less, -ous, -ive, -able, -al; trạng từ: -ly.",
        "Tiền tố phủ định: un-, in-, im- (trước p, m), il- (trước l), ir- (trước r), dis-; mis- là làm sai, hiểu sai.",
        "Kết hợp từ: **make** a decision, **do** business, **meet** a deadline, **raise** a concern, **take** responsibility, **reach** an agreement.",
        "Soát chính tả khi thêm phụ tố: bỏ e, y thành i, gấp đôi phụ âm, giữ đủ chữ (dissatisfied).",
      ),
    ],
  },
  words: [
    word("suffix", "/ˈsʌf.ɪks/", "hậu tố", "The suffix -ness turns an adjective into a noun: kind, kindness.", "suf|fix", 0),
    word("prefix", "/ˈpriː.fɪks/", "tiền tố", "Add the prefix un- to make the word negative.", "pre|fix", 0, "Nguyên âm đầu /iː/ kéo dài: PREE-fix."),
    word("efficiency", "/ɪˈfɪʃ.ən.si/", "hiệu suất, sự hiệu quả", "The new software has improved our efficiency.", "ef|fi|cien|cy", 1, "Nhấn âm thứ hai: ef-FI-cien-cy. Cụm ci đọc là /ʃ/."),
    word("concern", "/kənˈsɜːn/", "mối lo ngại; làm lo lắng", "Thank you for raising this concern so early.", "con|cern", 1, "Nhấn âm sau: con-CERN. Âm /ɜː/ kéo dài, không đọc chữ r."),
    word("misunderstanding", "/ˌmɪs.ʌn.dəˈstæn.dɪŋ/", "sự hiểu lầm", "I'm afraid there's been a misunderstanding about the price.", "mis|un|der|stand|ing", 3),
    word("reliability", "/rɪˌlaɪ.əˈbɪl.ə.ti/", "độ tin cậy", "Customers choose this brand because of its reliability.", "re|li|a|bil|i|ty", 3, "Hậu tố -ity kéo trọng âm về âm ngay trước nó: re-li-a-BIL-i-ty, khác với re-LI-a-ble."),
    word("dishonest", "/dɪˈsɒn.ɪst/", "không trung thực", "It would be dishonest to hide the problem from the client.", "dis|hon|est", 1, "Chữ h câm, giống honest: dis-ON-ist."),
    word("effective", "/ɪˈfek.tɪv/", "có hiệu quả", "Short, clear emails are usually the most effective.", "ef|fec|tive", 1),
  ],
  exercises: [
    mc("b2-n20-1", "We have to ___ the deadline, or we'll lose the client.", ["meet", "finish", "reach", "catch"], 0, "Kết hợp từ cố định: meet a deadline (kịp hạn). Finish và reach là dịch từng chữ từ “hoàn thành, đạt”; catch chỉ đi với xe, chuyến bay."),
    mc("b2-n20-2", "Which word is correct?", ["unpossible", "inpossible", "impossible", "dispossible"], 2, "Trước p dùng tiền tố im-: impossible, impatient, impolite."),
    fill("b2-n20-3", "The ___ of the new system has saved us a lot of time. (EFFICIENT)", ["efficiency"], "Sau the… of cần danh từ: efficient → efficiency."),
    fill("b2-n20-4", "Our new manager is very ___; she always explains things clearly. (HELP)", ["helpful"], "Sau very cần tính từ, và ý câu là khen: help → helpful. Helpless lại nghĩa là bất lực."),
    fill("b2-n20-5", "Please read the instructions ___ before you start. (CAREFUL)", ["carefully"], "Bổ nghĩa cho động từ read cần trạng từ: careful → carefully."),
    fill("b2-n20-6", "He lost his job because he had been ___ with the company's money. (HONEST)", ["dishonest"], "Ý câu là chê, nên cần nghĩa phủ định: honest → dishonest. Không có unhonest."),
    fill("b2-n20-7", "I'd like to ___ a concern about the new schedule. (nêu ra)", ["raise", "express", "voice"], "Raise a concern (nêu ra mối lo ngại) là kết hợp từ rất hay dùng trong họp. Express hoặc voice a concern cũng đúng."),
    reorder("b2-n20-8", "Who is responsible for this decision?", "Responsible for + danh từ: chịu trách nhiệm về việc gì. Decision là danh từ của decide."),
    reorder("b2-n20-9", "Could you pay attention to the details?", "Pay attention to: chú ý đến. Không nói give attention to hay make attention."),
    correct("b2-n20-10", "We must do a decision by Friday.", ["We must make a decision by Friday.", "We must take a decision by Friday.", "We must reach a decision by Friday."], "Decision đi với make (hoặc take, reach), không đi với do."),
    correct("b2-n20-11", "The manager was very unpatient with the new staff.", ["The manager was very impatient with the new staff."], "Trước p dùng im-: impatient."),
    correct("b2-n20-12", "The success of the project depends on the reliable of the team.", ["The success of the project depends on the reliability of the team."], "Sau the… of cần danh từ: reliability."),
    listen("b2-n20-13", "I'm afraid there's been a misunderstanding about the price.", ["Tôi e là đã có sự hiểu lầm về giá.", "Tôi e là giá đã bị tăng lên.", "Tôi không hiểu tại sao giá lại như vậy.", "Tôi sợ là chúng ta đã thương lượng sai giá."], 0, "Misunderstanding: mis (sai) + understand (hiểu) + -ing (danh từ) = sự hiểu lầm."),
    listen("b2-n20-14", "She took responsibility for the mistake and apologised to the client.", ["Cô ấy đổ lỗi cho khách hàng.", "Cô ấy được giao trách nhiệm sửa lỗi cho khách.", "Cô ấy nhận trách nhiệm về lỗi đó và xin lỗi khách hàng.", "Khách hàng xin lỗi cô ấy vì lỗi đó."], 2, "Take responsibility for: nhận trách nhiệm về điều gì."),
  ],
  speaking: [
    say("We need to make a decision before the end of the week.", "Chúng ta cần đưa ra quyết định trước cuối tuần."),
    say("Thank you for raising this concern so early.", "Cảm ơn anh đã nêu ra mối lo ngại này sớm như vậy."),
    say("The new system has really improved our efficiency.", "Hệ thống mới thực sự đã nâng cao hiệu suất của chúng ta."),
  ],
  freeSpeaking: free(
    "What qualities make someone a good colleague?",
    "Nói về những phẩm chất của một đồng nghiệp tốt, kèm ví dụ về một người bạn từng làm cùng. Dùng ít nhất năm từ có hậu tố hoặc tiền tố (reliable, helpful, responsibility…) và ba kết hợp từ công sở (meet deadlines, take responsibility, raise concerns…).",
    "For me, the most important quality is reliability. A good colleague always meets deadlines, and if there's a problem, they raise their concerns early instead of hiding it. I also think honesty is essential. My old team leader, Hoa, was a great example. She was extremely helpful and patient with inexperienced staff like me, and when our team made a mistake, she always took responsibility in front of the client. She was never dishonest, even when the truth was uncomfortable.",
  ),
  dialogue: dialogue(
    "Sửa bản đề xuất trước khi gửi khách",
    "Hà, nhân viên mới, nhờ anh Mark, trưởng nhóm người Anh, đọc bản đề xuất gửi khách hàng. Anh chỉ ra vài chỗ dùng sai từ loại và kết hợp từ.",
    { A: "Mark, trưởng nhóm", B: "Hà, nhân viên mới" },
    A("Ha, I've read your proposal. It's good, but a few words need changing.", "Hà này, anh đọc bản đề xuất của em rồi. Viết tốt, nhưng có vài từ cần sửa."),
    B("Thanks, Mark. Which parts?", "Cảm ơn anh Mark. Những chỗ nào ạ?"),
    A("Here you wrote “the reliable of our service”. After “the”, you need a noun: “the reliability”.", "Chỗ này em viết “the reliable of our service”. Sau “the” phải là danh từ: “the reliability”."),
    B("Oh, I see. I always forget to change the word form.", "À, em hiểu rồi. Em toàn quên đổi dạng từ."),
    A("Also, we don't “do” a decision in English. We make one.", "Còn nữa, tiếng Anh không “do” a decision. Mình make a decision."),
    B("Right. So, “The client will make a final decision next week.”", "Vâng. Vậy là “The client will make a final decision next week.”"),
    A("Perfect. And instead of “finish the deadline”, say “meet the deadline”.", "Chuẩn. Và thay vì “finish the deadline”, em nói “meet the deadline”."),
    B("Got it. What about “unpossible” in the last paragraph?", "Em nhớ rồi. Còn chữ “unpossible” ở đoạn cuối thì sao ạ?"),
    A("That should be “impossible”. Before p, we usually use im-.", "Chữ đó phải là “impossible”. Trước p thường dùng im-."),
    B("That's a useful rule. And “unhonest”?", "Quy tắc đó hay quá. Còn “unhonest” ạ?"),
    A("That one is “dishonest”. Some prefixes you just have to learn.", "Chữ đó là “dishonest”. Có những tiền tố phải học thuộc thôi."),
    B("Thank you so much. I'll correct everything and send it before lunch. I don't want any misunderstanding with the client.", "Em cảm ơn anh nhiều. Em sẽ sửa hết và gửi trước giờ ăn trưa. Em không muốn có hiểu lầm gì với khách."),
  ),
  dialogueQuestions: [
    mc("b2-n20-d1", "Why is “the reliable of our service” wrong?", ["Reliable is spelt incorrectly.", "A noun is needed after “the”.", "The sentence needs a negative prefix.", "Reliable should be an adverb."], 1, "Mark nói: After “the”, you need a noun: “the reliability”."),
    listenQ("b2-n20-d2", "Which verb does Mark say goes with “deadline”?", "Perfect. And instead of “finish the deadline”, say “meet the deadline”.", ["Finish", "Make", "Do", "Meet"], 3, "Meet the deadline: kịp hạn chót. Finish the deadline là lỗi dịch từ tiếng Việt."),
    mc("b2-n20-d3", "What can we infer about Mark as a team leader?", ["He is impatient with new staff.", "He rewrites his colleagues' work himself.", "He gives clear, specific feedback and explains the rules.", "He thinks Ha's proposal should not be sent."], 2, "Câu suy luận: Mark khen trước (It's good), rồi chỉ từng lỗi và giải thích vì sao (After “the”, you need a noun; Before p, we usually use im-). Anh không viết lại hộ và vẫn để Hà tự gửi."),
  ],
  reading: reading({
    title: "What employers really look for",
    text: `Every year, thousands of young Vietnamese graduates send out dozens of job applications, often with very similar CVs. Most list the same qualifications, the same computer skills and an English certificate. So what makes an employer choose one candidate rather than another? A recent survey of more than five hundred recruiters in Hanoi, Da Nang and Ho Chi Minh City offers some surprising answers.

Technical knowledge came lower on the list than many people expected. Only a third of the recruiters said it was the most important factor when they hired someone for a junior position. "We can teach people software," explained the head of recruitment at a logistics company. "What we can't easily teach is reliability. I need to know that a new employee will meet deadlines, arrive on time and tell me early if something goes wrong."

The ability to communicate clearly was the most frequently mentioned quality. Recruiters complained that many applicants wrote emails that were too long, too informal or simply confusing. Several said that a single careless message to a client could cause a misunderstanding that took weeks to repair. One recruiter said she now asks every candidate to write a short email during the interview, simply to check how clearly they can explain an idea. Others pointed out that good communication also means listening: employees who ask questions and raise concerns at the start of a project usually make fewer expensive mistakes later.

Many recruiters also valued people who take responsibility for their work. "Inexperienced staff are not a problem," said one manager at a bank. "Irresponsible staff are. If you make a mistake, admit it, explain what happened and suggest a solution. That's what I want to see." Interestingly, more than half of the recruiters said they would choose a candidate with weaker grades but a positive attitude over a top student who seemed unwilling to learn.

Flexibility came third. Companies are changing quickly, and employees are often asked to do tasks that were not in their original job description. Those who complain that something is "not my job" are, unsurprisingly, the first to be left behind. One hotel manager described a receptionist who offered to help in the restaurant during a staff shortage and, four years later, became the youngest supervisor in the company's history.

None of this means that qualifications are unimportant. A good degree still opens doors, and in some fields, such as medicine or engineering, it is essential. However, the survey suggests that once candidates reach the interview, it is their personal qualities that make the final difference. For young graduates, the message is clear: show employers not only what you know, but also how you work.`,
    glossary: [
      ["graduate", "người mới tốt nghiệp"],
      ["recruiter", "nhà tuyển dụng"],
      ["junior position", "vị trí cấp thấp, mới vào nghề"],
      ["applicant", "người nộp đơn"],
      ["attitude", "thái độ"],
      ["flexibility", "sự linh hoạt"],
      ["job description", "bản mô tả công việc"],
    ],
    questions: [
      mc("b2-n20-r1", "What is the main idea of the article?", ["Technical skills are the most important thing for employers.", "Recruiters increasingly value personal qualities such as reliability and communication, not only qualifications.", "Graduates in Vietnam send too many job applications.", "Top students always get the best jobs."], 1, "Bài cho thấy kiến thức kỹ thuật xếp thấp hơn dự kiến; nhà tuyển dụng coi trọng độ tin cậy, giao tiếp, tinh thần trách nhiệm và sự linh hoạt."),
      mc("b2-n20-r2", "What did the head of recruitment at the logistics company say he could not easily teach?", ["Software skills", "English", "Reliability", "Flexibility"], 2, "What we can't easily teach is reliability."),
      fill("b2-n20-r3", "Recruiters said that good ___ also means listening. (COMMUNICATE)", ["communication"], "Sau good cần danh từ: communicate → communication, đúng như trong bài."),
      mc("b2-n20-r4", "What can we infer about the bank manager's attitude to mistakes?", ["He never forgives staff who make mistakes.", "He prefers staff who hide small mistakes.", "He thinks mistakes only happen to inexperienced staff.", "He accepts mistakes if people are honest about them and suggest a solution."], 3, "Câu suy luận: ông nói nhân viên thiếu kinh nghiệm không phải vấn đề, vấn đề là thiếu trách nhiệm; nếu mắc lỗi thì hãy nhận, giải thích và đề xuất cách sửa."),
      mc("b2-n20-r5", "Which phrase from the text means “to tell people about a worry”?", ["Raise concerns", "Meet deadlines", "Take responsibility", "Make mistakes"], 0, "Raise a concern: nêu ra một mối lo ngại."),
    ],
  }),
  task: task({
    prompt: "Một đồng nghiệp cũ của bạn đang xin việc ở công ty khác và nhờ bạn viết thư giới thiệu. Viết email khoảng 150–190 từ gửi bà Wilson, người tuyển dụng, nêu rõ điểm mạnh của đồng nghiệp đó kèm ví dụ cụ thể.",
    hints: [
      "Dùng ít nhất sáu từ có hậu tố hoặc tiền tố: reliable, efficiency, effective, responsibility, inexperienced, honest…",
      "Dùng ít nhất bốn kết hợp từ công sở: meet deadlines, raise concerns, take responsibility, make progress…",
      "Mỗi điểm mạnh kèm một ví dụ có thật (đã làm gì, kết quả ra sao).",
      "Kết thư bằng một câu khẳng định và lời mời liên hệ.",
    ],
    model: "Dear Ms Wilson,\n\nI am writing to recommend Tran Minh Anh for the position of project coordinator at your company. Anh worked in my team for three years, and she was one of the most reliable people I have ever managed.\n\nHer greatest strength is her efficiency. She always met deadlines, even when the workload was heavy, and she rarely made careless mistakes in her reports. When she noticed a problem, she raised her concerns immediately instead of waiting until it was too late. As a result, we avoided several expensive misunderstandings with clients.\n\nAnh is also an effective communicator. Her emails are clear and polite, and she is patient with colleagues who are less experienced than she is. Last year she took responsibility for training four new members of staff, and all of them made rapid progress.\n\nI should add that she is completely honest. If something goes wrong, she admits it and suggests a solution.\n\nI have no doubt that Anh would make a valuable contribution to your team. Please feel free to contact me if you need any further information.\n\nYours sincerely,\nLe Van Duc",
    checklist: [
      "Có ít nhất sáu từ có hậu tố hoặc tiền tố, dùng đúng từ loại (reliable, efficiency, careless, effective, responsibility…).",
      "Có ít nhất bốn kết hợp từ công sở (met deadlines, raised concerns, took responsibility, made progress…).",
      "Sau the / a / her là danh từ, trước danh từ là tính từ, bổ nghĩa động từ là trạng từ.",
      "Không dùng do a decision, finish a deadline, unpatient, unhonest.",
      "Mỗi điểm mạnh có một ví dụ cụ thể.",
    ],
    minWords: 150,
  }),
});
