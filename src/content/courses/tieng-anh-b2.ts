import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../builders";
import nGoiDienVaHopTrucTuyen from "../lessons/b2/goi-dien-va-hop-truc-tuyen";
import nDieuKienKhongChiIf from "../lessons/b2/dieu-kien-khong-chi-if";
import nDongTuKhuyetThieuQuaKhu from "../lessons/b2/dong-tu-khuyet-thieu-qua-khu";
import nGiaDinhKhongThat from "../lessons/b2/gia-dinh-khong-that";
import nMoTaSoLieu from "../lessons/b2/mo-ta-so-lieu";
import nTuNoiNangCao from "../lessons/b2/tu-noi-nang-cao";
import nRutGonMenhDe from "../lessons/b2/rut-gon-menh-de";
import nMaoTu from "../lessons/b2/mao-tu";
import nToVHayVIng from "../lessons/b2/to-v-hay-v-ing";
import nThanPhienVaXuLy from "../lessons/b2/than-phien-va-xu-ly";
import nCacThiHoanThanhTiepDien from "../lessons/b2/cac-thi-hoan-thanh-tiep-dien";
import nNhuongBoVaDoiLap from "../lessons/b2/nhuong-bo-va-doi-lap";
import nNhoVaSaiBao from "../lessons/b2/nho-va-sai-bao";
import nCauTaoTuVaKetHopTu from "../lessons/b2/cau-tao-tu-va-ket-hop-tu";
import { FINAL_EXTRA_TIENG_ANH_B2 } from "../banks/final-tieng-anh-b2";
import { chapter, finalBank } from "../review";
import type { Course, Exercise } from "../types";

const vietEmail = lesson({
  slug: "viet-email-chuyen-nghiep",
  title: "Viết email chuyên nghiệp",
  minutes: 32,
  lecture: {
    title: "Văn phong trang trọng và lời đề nghị lịch sự",
    blocks: [
      p("Chị Thu, nhân viên xuất nhập khẩu ở Hải Phòng, gửi cho đối tác Đức một email chỉ có một dòng: **Send me the price list.** Ba ngày không thấy trả lời. Không phải đối tác bận, mà vì câu ấy đọc lên nghe như **ra lệnh**. Trong tiếng Việt, ta làm mềm bằng “anh ơi”, “giúp em với”; tiếng Anh làm mềm bằng **cấu trúc câu**. Bài này dạy bạn viết một email vừa rõ ràng vừa lịch sự."),
      p("Email công việc bằng tiếng Anh có hai mức văn phong chính: **trang trọng** (gửi đối tác, khách hàng, cấp trên chưa quen) và **trung tính** (gửi đồng nghiệp đã quen). Người Việt hay viết email quá thân mật hoặc dịch từng chữ từ tiếng Việt, khiến câu nghe cộc lốc hoặc ra lệnh."),
      table(
        ["Phần email", "Trang trọng", "Trung tính"],
        ["Mở đầu", "Dear Mr Smith,", "Hi Anna,"],
        ["Lý do viết", "I am writing to enquire about…", "Just a quick note about…"],
        ["Đính kèm", "Please find attached the report.", "I've attached the report."],
        ["Nhắc lại", "I am following up on my email of 3 May.", "Just following up on this."],
        ["Kết thư", "I look forward to hearing from you. Kind regards,", "Speak soon. Best,"],
      ),
      p("Một email **rõ ràng và đủ chi tiết** luôn có bốn phần: **dòng tiêu đề** nói đúng việc (Subject: Revised quotation for order 245, không viết “Hello” hay “Urgent!!!”), **câu mở** nêu lý do viết, **thân thư** mỗi đoạn một ý kèm số liệu, ngày tháng cụ thể, và **câu cuối** nói rõ người nhận cần làm gì, trước khi nào. Người đọc bận rộn chỉ cần lướt tiêu đề và câu cuối là biết việc."),
      p("Khi nhờ ai làm gì, đừng dùng câu mệnh lệnh trần như **Send me the file.** Hãy dùng các mẫu lịch sự. Càng xuống dưới bảng, câu càng dài và càng lịch sự; với khách hàng mới hoặc cấp trên, hãy chọn hai dòng cuối."),
      table(
        ["Mức độ", "Mẫu câu", "Ví dụ"],
        ["Ra lệnh (tránh dùng)", "V + tân ngữ", "Send me the file."],
        ["Lịch sự", "Could you + V…?", "Could you send me the file?"],
        ["Rất lịch sự", "Would you mind + V-ing…?", "Would you mind sending me the file?"],
        ["Trang trọng nhất", "I would appreciate it if you could + V…", "I would appreciate it if you could send me the file."],
      ),
      ex("Could you send me the updated figures by Friday?", "Anh/chị có thể gửi tôi số liệu cập nhật trước thứ Sáu được không?"),
      ex("I would appreciate it if you could confirm the meeting time.", "Tôi rất cảm kích nếu anh/chị xác nhận giúp thời gian cuộc họp.", "Sau “I would appreciate it if you could” là động từ nguyên mẫu. Chữ “it” không được bỏ."),
      ex("Please find attached the signed contract.", "Xin gửi kèm theo đây bản hợp đồng đã ký.", "Đây là cụm cố định có trật tự đặc biệt: attached đứng trước tân ngữ. Cũng có thể viết The signed contract is attached."),
      ex("Would you mind checking the figures before I send them to the client?", "Anh/chị có phiền kiểm tra giúp các số liệu trước khi tôi gửi cho khách không?", "Would you mind + V-ing. Nghĩa đen là “anh/chị có phiền không”, nên muốn đồng ý thì trả lời “No, not at all.”"),
      mistake("I look forward to hear from you.", "I look forward to hearing from you.", "Trong cụm look forward to, “to” là giới từ nên động từ phía sau phải thêm -ing. Người Việt quen “to + V” nên hay viết sai câu kết thư quen thuộc nhất này."),
      mistake("Please send me the file as soon as possible!!!", "Could you send me the file when you have a moment?", "Câu mệnh lệnh kèm “as soon as possible” và nhiều dấu chấm than nghe gấp gáp, thiếu tôn trọng người nhận. Tiếng Việt thêm “ạ”, “giúp em” là đủ mềm, nhưng chữ please trong tiếng Anh không đủ để làm mềm một câu mệnh lệnh."),
      mistake("Dear Mr John,", "Dear Mr Smith,", "Người Việt quen gọi “anh Minh”, “chị Lan” bằng tên riêng. Trong tiếng Anh, Mr/Ms đi với họ (surname). Nếu muốn gọi tên riêng thì bỏ Mr: Dear John,"),
      tip("Khi nhờ người khác làm gì, **Would you mind** đi với **V-ing**: Would you mind checking this? Nếu đồng ý giúp, người ta trả lời “Not at all”, nghĩa là “Không phiền gì cả”."),
      tip("Khi không biết tên người nhận, dùng **Dear Sir or Madam** hoặc tốt hơn là **Dear Hiring Manager / Dear Customer Service Team**. Không viết “Dear Sir/Madam Lan”."),
      teacher("Khi chữa email cho học trò, tôi thấy lỗi lớn nhất không phải ngữ pháp mà là **giọng điệu**. Trước khi bấm gửi, hãy đọc to email lên và tự hỏi: **nếu sếp nói với mình câu này, mình có thấy khó chịu không?** Nếu có, hãy đổi câu mệnh lệnh thành Could you… hoặc I would appreciate it if you could… Mỗi ngày viết lại một email cũ theo cách lịch sự hơn, chỉ một tháng là tay bạn tự viết đúng."),
      summary(
        "Email có bốn phần: **tiêu đề** nói đúng việc, **câu mở** nêu lý do viết, **thân thư** mỗi đoạn một ý, **câu cuối** nói rõ người nhận cần làm gì và trước khi nào.",
        "Chọn văn phong theo người nhận: **Dear Mr/Ms + họ** cho đối tác, khách hàng mới; **Hi + tên** cho đồng nghiệp đã quen.",
        "Không ra lệnh trần. Nhờ việc bằng **Could you + V?**, **Would you mind + V-ing?** hoặc **I would appreciate it if you could + V**.",
        "**Look forward to + V-ing**: I look forward to hearing from you. Chữ to ở đây là giới từ.",
        "Gửi kèm tài liệu: **Please find attached…**; nhắc lại việc cũ: **I am following up on…**",
      ),
    ],
  },
  words: [
    word("attachment", "/əˈtætʃ.mənt/", "tệp đính kèm", "The attachment is too large to open.", "at|tach|ment", 1),
    word("regarding", "/rɪˈɡɑː.dɪŋ/", "về việc, liên quan đến", "I am writing regarding your invoice.", "re|gard|ing", 1),
    word("enquiry", "/ɪnˈkwaɪə.ri/", "lời hỏi thông tin, yêu cầu thông tin", "Thank you for your enquiry about our training courses.", "en|quir|y", 1, "Trọng âm ở âm tiết thứ hai: en-QUI-ry. Động từ là enquire (hỏi thông tin)."),
    word("invoice", "/ˈɪn.vɔɪs/", "hóa đơn", "Please find attached the invoice for March.", "in|voice", 0, "Nhấn âm đầu IN-voice; đuôi /s/, không đọc thành “voi-dơ”."),
    word("recipient", "/rɪˈsɪp.i.ənt/", "người nhận", "Check the recipient's address before you click send.", "re|cip|i|ent", 1),
    word("draft", "/drɑːft/", "bản nháp; soạn bản nháp", "I'll send you a first draft of the letter this afternoon.", "draft", 0, "Nguyên âm /ɑː/ kéo dài, cuối từ bật rõ cụm /ft/, đừng nuốt thành “đráp”."),
    word("signature", "/ˈsɪɡ.nə.tʃə/", "chữ ký; phần chữ ký cuối email", "Add your job title and phone number to your email signature.", "sig|na|ture", 0, "Ba âm tiết, nhấn âm đầu: SIG-nơ-chờ. Chữ g đọc là /ɡ/, không câm như trong sign."),
    word("forward", "/ˈfɔː.wəd/", "chuyển tiếp (email, tin nhắn)", "Could you forward this message to the finance team?", "for|ward", 0, "Không đọc âm r: /ˈfɔː.wəd/."),
  ],
  exercises: [
    mc("b2-1-1", "You are writing for the first time to a new client called Laura Nguyen. Which opening is correct?", ["Dear Ms Laura,", "Hello Ms Laura,", "Dear Ms Nguyen,", "Dear Sir or Madam,"], 2, "Mr/Ms đi với họ (Nguyen), không đi với tên riêng (Laura). Đã biết tên người nhận thì không dùng Dear Sir or Madam."),
    mc("b2-1-2", "Would you mind ___ the report before the meeting?", ["to check", "check", "to checking", "checking"], 3, "Khi nhờ ai làm gì, Would you mind đi với V-ing. Không chêm to vào trước."),
    fill("b2-1-3", "I look forward to ___ from you.", ["hearing"], "Look forward to + V-ing, vì “to” ở đây là giới từ."),
    fill("b2-1-4", "Please find ___ the invoice for March.", ["attached", "enclosed"], "Please find attached (hoặc enclosed) là cụm cố định khi gửi kèm tài liệu."),
    fill("b2-1-11", "I would appreciate ___ if you could send the signed contract by Monday.", ["it"], "Mẫu trang trọng là I would appreciate it if you could + V. Chữ it không được bỏ, dù tiếng Việt “tôi rất cảm kích nếu…” không có chữ nào tương ứng."),
    fill("b2-1-12", "I am writing to ___ about the training courses advertised on your website. (hỏi thông tin)", ["enquire", "inquire", "ask"], "I am writing to enquire about…: câu mở nêu lý do viết. Inquire là cách viết kiểu Mỹ."),
    reorder("b2-1-5", "Would you mind checking the figures again?", "Would you mind + V-ing: nhờ ai làm gì một cách rất lịch sự. Again đứng cuối câu, sau tân ngữ."),
    reorder("b2-1-6", "I am following up on my previous email.", "Follow up on: nhắc lại, hỏi tiếp về một việc đã gửi trước đó."),
    listen("b2-1-7", "Could you confirm the delivery date by Thursday?", ["Anh/chị đã giao hàng vào thứ Năm chưa?", "Anh/chị có thể xác nhận ngày giao hàng trước thứ Năm không?", "Chúng tôi sẽ giao hàng vào thứ Năm."], 1),
    listen("b2-1-8", "I'm writing to enquire about your training courses.", ["Tôi viết thư để hỏi về các khóa đào tạo của quý công ty.", "Tôi viết thư để đăng ký một khóa đào tạo.", "Tôi viết thư để phàn nàn về khóa đào tạo."], 0, "Enquire about nghĩa là hỏi thông tin về điều gì."),
    correct("b2-1-9", "We look forward to receive your reply.", "We look forward to receiving your reply.", "Trong look forward to, “to” là giới từ nên động từ theo sau phải ở dạng V-ing: receiving."),
    correct("b2-1-10", "Would you mind to send me the agenda?", "Would you mind sending me the agenda?", "Would you mind luôn đi với V-ing, không đi với to V. Người Việt quen “phiền anh gửi giúp” nên hay chêm to vào."),
    reorder("b2-1-13", "Could you forward this email to the whole team?", "Forward + email + to + người nhận. Tân ngữ this email đứng ngay sau động từ, người nhận đi sau to."),
    correct("b2-1-14", "Please find attach the updated price list.", ["Please find attached the updated price list.", "Please find the updated price list attached.", "Please find enclosed the updated price list."], "Trong cụm cố định Please find attached, attached là V3 (được đính kèm), không dùng động từ nguyên mẫu attach."),
  ],
  speaking: [
    say("I am writing regarding the meeting next week.", "Tôi viết thư về cuộc họp tuần tới."),
    say("Could you send me the report by Friday?", "Anh/chị có thể gửi tôi bản báo cáo trước thứ Sáu không?"),
    say("I look forward to hearing from you.", "Tôi mong sớm nhận được phản hồi của anh/chị."),
  ],
  freeSpeaking: free(
    "How do you usually ask a colleague or a client for help by email?",
    "Nói về cách bạn nhờ đồng nghiệp hoặc khách hàng giúp việc qua email: bạn mở đầu thế nào, dùng mẫu câu lịch sự nào, và kết thư ra sao.",
    "When I need help from a client, I always start with Dear and the person's surname, and I explain why I am writing in the first sentence. I never write a direct order. Instead, I say Could you send me the file, or I would appreciate it if you could check the figures. At the end, I give a clear date for the reply and finish with I look forward to hearing from you.",
  ),
  dialogueQuestions: [
    listenQ("b2-1-d1", "Why does Mark say that Thu's first line needs to change?", "That sounds like an order. Try: I am writing to enquire about your updated price list.", ["It is too long for a first line.", "It sounds like a command rather than a request.", "It gives the wrong order number.", "It does not mention the delivery date."], 1, "Mark nói “That sounds like an order”: câu Send me the price list nghe như ra lệnh."),
    mc("b2-1-d2", "What is wrong with Thu's original subject line?", ["It is written in capital letters.", "It mentions the wrong order.", "It only says Hello, so it gives no information.", "It is too long and detailed."], 2, "Mark nhận xét: your subject line just says Hello. Tiêu đề phải nói đúng việc."),
    mc("b2-1-d3", "What can we infer about the email Thu had written before Mark read it?", ["It was ready to send without any changes.", "It needed changes to the subject line, the opening and the closing.", "It was addressed to the wrong person.", "It was too formal for a partner like Mr Weber."], 1, "Mark sửa dòng tiêu đề (Hello), câu đầu (nghe như ra lệnh) và câu kết (to hear). Suy ra bản nháp của Thu cần sửa cả ba chỗ."),
  ],
  reading: reading({
    title: "Why your emails go unanswered",
    text: `Every working day, the average office employee receives more than a hundred emails. Most of them are opened, read for a few seconds and then answered, filed or forgotten. According to communication trainers, the emails that get forgotten usually share three problems: a vague subject line, an unclear purpose and a tone that makes the reader uncomfortable.

The subject line is the first thing a busy reader sees, and often the only thing. A subject such as "Hello" or "Urgent!!!" tells the reader nothing, so the message is easily left for later. A subject like "Revised quotation for order 245", on the other hand, allows the recipient to decide in a second whether the email needs attention today.

The second problem is purpose. Many writers spend a whole paragraph on greetings and background before they explain what they actually want. Trainers recommend stating the reason for writing in the very first sentence, for example "I am writing to enquire about your delivery times." The final sentence should then tell the reader exactly what to do and by when.

Structure matters too, although not in the way many people think. A long email is not a problem in itself; a long email without paragraphs is. If you need to cover three topics, give each one a short paragraph of its own, or use numbered points, so that the reader can respond to each of them. Writers who hide an important question in the middle of a dense paragraph often discover that it is the one question nobody answers.

Tone is the most difficult area, especially for people who are writing in a second language. A direct instruction such as "Send me the report" may be perfectly normal in some languages, but in English it can sound rude, even when the word "please" is added. Polite forms such as "Could you…?" or "I would appreciate it if you could…" take only a few more words, yet they make the reader far more willing to help.

And what if there is still no reply? Experienced writers wait two or three working days and then send a short follow-up in the same thread, so that the reader can see the original message without searching for it. A line such as "I am just following up on my email of 3 May regarding the revised quotation" is polite and easy to act on. Forwarding the whole conversation to the reader's manager, on the other hand, usually feels like a complaint and can damage a working relationship for months.

Interestingly, being polite does not mean being long. The most effective business emails are often under a hundred and fifty words. They are clear, they are friendly, and they respect the reader's time. As one trainer puts it, "A good email is like a good meeting: it starts on time, it has a clear goal and it finishes early."

So before you click send, read your message once more and ask yourself one question: would you be happy to receive it?`,
    glossary: [
      ["vague", "mơ hồ, không rõ ràng"],
      ["quotation", "bảng báo giá"],
      ["purpose", "mục đích"],
      ["tone", "giọng điệu, văn phong"],
      ["instruction", "lời chỉ thị, mệnh lệnh"],
      ["effective", "hiệu quả"],
      ["dense", "dày đặc, khó đọc"],
      ["thread", "chuỗi email trả lời nhau"],
    ],
    questions: [
      mc("b2-1-r1", "What is the main idea of the article?", ["Business emails should always be longer than a hundred and fifty words.", "A clear subject line, a clear purpose and a polite tone help emails get answered.", "Office workers should stop using email for important matters.", "Polite emails take too much time to write."], 1, "Cả bài xoay quanh ba vấn đề: tiêu đề, mục đích và giọng điệu."),
      mc("b2-1-r2", "According to the article, where should the writer state the reason for writing?", ["Only in the subject line", "In the last sentence", "In the first sentence", "After the greetings and background"], 2, "Trainers recommend stating the reason for writing in the very first sentence."),
      fill("b2-1-r3", "A specific subject line allows the ___ to decide in a second whether the email needs attention today.", ["recipient", "reader"], "Bài viết: allows the recipient to decide in a second…"),
      mc("b2-1-r4", "What can we infer about adding \"please\" to a direct instruction?", ["It always makes the instruction polite enough.", "It may not stop the instruction sounding rude.", "It is too formal for business English.", "It should only be used with close colleagues."], 1, "Bài viết nói câu mệnh lệnh vẫn có thể nghe thô lỗ even when the word please is added."),
      mc("b2-1-r5", "Why does the writer quote the trainer's comparison with a good meeting?", ["To show that meetings are more useful than emails", "To support the point that a good email is clear, focused and short", "To suggest that emails should be sent before meetings", "To criticise trainers who give too much advice"], 1, "Câu so sánh minh họa cho ý ngay trước đó: email tốt rõ ràng, có mục tiêu và ngắn gọn."),
      mc("b2-1-r6", "According to the article, why should a follow-up be sent in the same thread?", ["So that the reader's manager also receives a copy", "So that the reader can see the original message easily", "Because new emails are often treated as spam", "Because it allows the writer to send a longer message"], 1, "So that the reader can see the original message without searching for it."),
    ],
  }),
  dialogue: dialogue(
    "Sửa email trước khi gửi đối tác",
    "Chị Thu, nhân viên xuất nhập khẩu, soạn xong email gửi ông Weber bên đối tác Đức. Trước khi gửi, chị nhờ anh Mark, trưởng phòng người Anh, đọc giúp.",
    { A: "Thu, nhân viên xuất nhập khẩu", B: "Mark, trưởng phòng" },
    A("Hi Mark, would you mind having a quick look at my email to Mr Weber before I send it?", "Chào anh Mark, anh có phiền xem nhanh giúp em email gửi ông Weber trước khi em gửi không?"),
    B("Not at all. Hmm, your subject line just says Hello. What is the email about?", "Không phiền gì. Ừm, dòng tiêu đề của em chỉ ghi Hello. Email này về việc gì vậy?"),
    A("I'm asking for their new price list and the delivery date for order two four five.", "Em hỏi bảng giá mới của họ và ngày giao hàng của đơn hai bốn năm."),
    B("Then say exactly that: Price list and delivery date for order two four five.", "Vậy thì ghi đúng như thế: Bảng giá và ngày giao hàng cho đơn hai bốn năm."),
    A("Good idea. And the first line? I wrote: Send me the price list.", "Hay quá. Còn câu đầu tiên thì sao ạ? Em viết: Send me the price list."),
    B("That sounds like an order. Try: I am writing to enquire about your updated price list.", "Câu đó nghe như ra lệnh. Em thử viết: Tôi viết thư để hỏi về bảng giá cập nhật của quý công ty."),
    A("And for the date, could I write: Could you confirm the delivery date by Friday?", "Còn phần ngày giao hàng, em viết “Ông có thể xác nhận ngày giao hàng trước thứ Sáu không?” có được không ạ?"),
    B("Perfect. It's polite, and it tells him exactly what to do and when.", "Rất tốt. Câu đó lịch sự, lại nói rõ ông ấy cần làm gì và khi nào."),
    A("At the end I wrote: I look forward to hear from you.", "Cuối thư em viết: I look forward to hear from you."),
    B("Almost. It's look forward to hearing, with -ing. Then Kind regards and your full name.", "Gần đúng rồi. Phải là look forward to hearing, có -ing. Sau đó là Kind regards và họ tên đầy đủ của em."),
    A("Thanks, Mark. I'll fix it and send it this afternoon.", "Cảm ơn anh Mark. Em sẽ sửa và gửi ngay chiều nay."),
    B("Great. And don't forget the order form: Please find attached the order form.", "Tốt lắm. Và đừng quên phiếu đặt hàng: Xin gửi kèm theo đây phiếu đặt hàng."),
  ),
  task: task({
    prompt: "Viết một email trang trọng (khoảng 150–200 từ) gửi bà Sarah Lee, quản lý bên nhà cung cấp, nhờ bà gửi bảng giá cập nhật và xác nhận ngày giao hàng cho đơn hàng của công ty bạn. Có dòng tiêu đề, lời chào, lý do viết, các lời nhờ lịch sự, tài liệu đính kèm, hạn trả lời và câu kết thư. Chia email thành các đoạn, mỗi đoạn một ý.",
    hints: [
      "Dòng tiêu đề nói đúng việc, ví dụ: Updated price list and delivery date for order 312.",
      "Mở bằng Dear Ms Lee, rồi I am writing regarding… hoặc I am writing to enquire about…",
      "Dùng ít nhất hai mẫu nhờ việc khác nhau: Could you…?, Would you mind + V-ing…?, I would appreciate it if you could…",
      "Câu cuối nêu hạn trả lời cụ thể, rồi kết bằng I look forward to hearing from you. Kind regards,",
    ],
    model: "Subject: Updated price list and delivery date for order 312\n\nDear Ms Lee,\n\nI am writing regarding order 312, which we placed on 2 October for two hundred office desks. Thank you for confirming the order so quickly last week.\n\nFirst, could you send me your updated price list for the fourth quarter? Our finance team is preparing next year's budget, so we need the new prices as soon as possible. I would also appreciate it if you could confirm the delivery date for order 312, as our warehouse needs to plan the space in advance.\n\nIn addition, we are planning a second, smaller order in November. Would you mind letting us know whether the same prices would apply to it?\n\nPlease find attached a copy of the purchase order for your reference. If anything in it is unclear, I would be happy to explain.\n\nCould you possibly reply by Friday, 10 October? This would allow us to finalise our plans before the end of the month.\n\nI look forward to hearing from you.\n\nKind regards,\nNguyen Thu Ha\nPurchasing Officer",
    checklist: [
      "Dòng tiêu đề nói rõ việc cần trao đổi, không phải Hello hay Urgent.",
      "Lời chào dùng Dear Ms + họ, không dùng tên riêng sau Ms.",
      "Không có câu mệnh lệnh trần; mọi lời nhờ đều dùng Could you, Would you mind + V-ing hoặc I would appreciate it if you could.",
      "Email chia thành các đoạn, mỗi đoạn một ý, nối ý bằng First, also, In addition, as, so.",
      "Có câu nêu hạn trả lời cụ thể (ngày, thứ).",
      "Kết thư viết đúng I look forward to hearing from you, có -ing.",
    ],
    minWords: 150,
  }),
});

const hopThaoLuan = lesson({
  slug: "hop-va-thao-luan",
  title: "Họp và thảo luận",
  minutes: 34,
  lecture: {
    title: "Suy đoán về quá khứ và xen ngang lịch sự",
    blocks: [
      p("Chín giờ sáng, cuộc họp online với khách hàng Úc đã bắt đầu mà anh Tuấn chưa vào. Sếp hỏi: **Where's Tuan?** Nhiều bạn sẽ trả lời “Maybe he forget” hoặc chỉ nói “I don't know”. Người đi làm chuyên nghiệp sẽ nói: **He might have forgotten. He must have had a problem with his internet connection.** Đó chính là cách **suy đoán về quá khứ**, một kỹ năng dùng hằng ngày trong họp hành."),
      p("Ở B1, bài **Chắc là, có lẽ, không thể nào**, các bạn đã đoán về hiện tại với **must be, might be, can't be**. Hôm nay ta lùi về quá khứ: tiếng Anh dùng **modal + have + V3** để suy đoán về việc đã xảy ra. Mức độ chắc chắn vẫn thể hiện qua việc chọn **must**, **might/may/could** hay **can't**."),
      table(
        ["Cấu trúc", "Mức độ chắc chắn", "Ví dụ"],
        ["must have + V3", "Gần như chắc chắn là có", "He must have missed the train."],
        ["might / may / could have + V3", "Có thể đã xảy ra", "She might have forgotten the meeting."],
        ["can't / couldn't have + V3", "Gần như chắc chắn là không", "They can't have received the email."],
      ),
      ex("The client hasn't replied. They must have been busy.", "Khách hàng chưa trả lời. Chắc hẳn họ đã rất bận.", "Been là V3 của be, nên must have been = chắc hẳn đã (ở trạng thái)."),
      ex("Tom can't have finished the report already. He only started an hour ago.", "Tom không thể nào đã làm xong báo cáo rồi. Anh ấy mới bắt đầu một tiếng trước.", "Câu thứ hai là bằng chứng. Người bản xứ gần như luôn đưa lý do sau lời suy đoán."),
      ex("She might have sent it to the wrong address.", "Có thể cô ấy đã gửi nhầm địa chỉ.", "Might have, may have và could have gần như cùng nghĩa: có thể đã, nhưng chưa chắc."),
      mistake("He must missed the train.", "He must have missed the train.", "Tiếng Việt chỉ cần thêm chữ “đã” là thành quá khứ, nên học trò hay quên “have”. Khi suy đoán về quá khứ phải có đủ “have + V3”."),
      mistake("She mustn't have seen the message.", "She can't have seen the message.", "Trong tiếng Anh Anh, phủ định của “must have” khi suy đoán là “can't have”; mustn't thường mang nghĩa “cấm”. Người Mỹ có dùng must not have để đoán phủ định, nhưng khóa này theo chuẩn Anh và dùng can't have."),
      mistake("He must have went home.", "He must have gone home.", "Sau have luôn là V3 (quá khứ phân từ), không phải V2. Tiếng Việt không chia động từ nên người Việt hay lẫn went và gone; hãy học động từ bất quy tắc theo bộ ba: go, went, gone."),
      tip("Khi nói nhanh, **have** trong cấu trúc này đọc nhẹ thành /əv/: **must have** nghe như “must-tợv” /ˈmʌs.təv/, **might have** nghe như /ˈmaɪ.təv/. Đừng nhấn mạnh chữ have, hãy nhấn vào động từ chính: He must've **missed** it."),
      p("Muốn xen ngang hoặc hỏi lại trong cuộc họp, người Việt hay im lặng hoặc nói thẳng “No, wrong”. Hãy dùng các cụm mềm mỏng sau."),
      table(
        ["Mục đích", "Cụm từ"],
        ["Xen ngang", "Sorry to interrupt, but… / Can I just come in here?"],
        ["Hỏi lại cho rõ", "Could you clarify what you mean by…? / Sorry, I didn't quite catch that."],
        ["Đưa ý kiến", "From my point of view… / I'd like to suggest that…"],
        ["Đồng ý, phản đối", "I completely agree with Lan on this. / I see your point, but I'm not sure it will work."],
        ["Kéo về chủ đề", "Let's get back to the main point. / Shall we move on to the next item?"],
        ["Chốt việc cần làm", "So, to sum up, we've agreed to… / Who's going to take care of this?"],
      ),
      tip("Khi không nghe rõ, đừng nói **What?**. Hãy nói **Sorry, could you say that again?** hoặc **Sorry, I didn't quite catch that.**"),
      teacher("Khi dạy người đi làm, tôi thấy cái bẫy lớn nhất trong họp không phải là thiếu từ, mà là **sợ nói sai nên im lặng**. Người nước ngoài không đánh giá bạn vì một lỗi ngữ pháp, nhưng họ sẽ nghĩ bạn không có ý kiến nếu bạn ngồi im cả buổi. Hãy thuộc lòng ba câu: **Sorry to interrupt, but…**, **Could you clarify that?** và **I'd like to suggest that…** Trước mỗi cuộc họp, tự đặt mục tiêu nói ít nhất một câu. Nói được một câu hôm nay, tuần sau bạn sẽ nói được năm câu."),
      summary(
        "Suy đoán về quá khứ: **modal + have + V3**. **Must have** (chắc hẳn đã), **might / may / could have** (có thể đã), **can't have** (không thể nào đã).",
        "Phủ định của must have khi đoán là **can't have** (theo tiếng Anh Anh). Mustn't thường nghĩa là cấm; người Mỹ có dùng must not have để đoán.",
        "Sau have luôn là **V3**: must have gone, không phải must have went.",
        "Người bản xứ đưa **bằng chứng** ngay sau lời đoán: He must have left. His laptop isn't here.",
        "Trong họp: **Sorry to interrupt, but…**, **Could you clarify…?**, **Sorry, I didn't quite catch that.**, **So, to sum up…**",
      ),
    ],
  },
  words: [
    word("agenda", "/əˈdʒen.də/", "chương trình họp", "Let's look at the first item on the agenda.", "a|gen|da", 1),
    word("clarify", "/ˈklær.ɪ.faɪ/", "làm rõ", "Could you clarify the timeline for us?", "clar|i|fy", 0),
    word("delegate", "/ˈdel.ɪ.ɡeɪt/", "giao việc, ủy thác", "A good manager knows how to delegate tasks to the team.", "del|e|gate", 0, "Động từ đọc đuôi /ɡeɪt/; danh từ delegate (người đại biểu) đọc đuôi /ɡət/."),
    word("consensus", "/kənˈsen.səs/", "sự đồng thuận", "The team finally reached a consensus.", "con|sen|sus", 1),
    word("interrupt", "/ˌɪn.təˈrʌpt/", "ngắt lời, xen ngang", "Sorry to interrupt, but I have a quick question.", "in|ter|rupt", 2, "Trọng âm chính ở âm tiết cuối: in-ter-RUPT."),
    word("priority", "/praɪˈɒr.ə.ti/", "ưu tiên", "Customer feedback is our top priority.", "pri|or|i|ty", 1),
    word("attendee", "/ˌæt.enˈdiː/", "người tham dự (cuộc họp, hội nghị)", "Every attendee will receive the slides after the meeting.", "at|ten|dee", 2, "Đuôi -ee mang trọng âm: at-ten-DEE, giống employee, trainee."),
    word("summarise", "/ˈsʌm.ər.aɪz/", "tóm tắt", "Let me summarise what we have agreed.", "sum|ma|rise", 0),
  ],
  exercises: [
    mc("b2-2-1", "The lights are off in his office and his coat has gone. He ___ gone home.", ["must have", "can't have", "mustn't have", "must"], 0, "Có bằng chứng rõ ràng nên dùng must have + V3: chắc hẳn đã. Thiếu have (must gone) là lỗi người Việt hay mắc."),
    mc("b2-2-2", "She ___ sent the file yet. Her laptop has been switched off all morning.", ["must have", "can't have", "mustn't have", "needn't have"], 1, "Máy tắt cả buổi sáng nên gần như chắc chắn cô ấy chưa gửi: can't have. Mustn't have không dùng để suy đoán trong tiếng Anh Anh; needn't have nghĩa là đã làm một việc không cần thiết."),
    reorder("b2-2-3", "Could you say that again?", "Cách hỏi lại lịch sự khi chưa nghe rõ, thay cho câu cộc lốc What? Có thể thêm Sorry ở đầu cho mềm hơn."),
    fill("b2-2-4", "I'm not sure why he's late. He might have ___ the bus. (miss)", ["missed"], "Sau might have là động từ ở dạng V3 (quá khứ phân từ): miss thành missed."),
    fill("b2-2-5", "Could you ___ what you mean by “flexible hours”? (làm rõ)", ["clarify", "explain"], "Clarify hoặc explain đều dùng để nhờ người khác giải thích rõ hơn."),
    reorder("b2-2-6", "Shall we move on to the next item?", "Câu chuyển sang mục tiếp theo trong chương trình họp."),
    listen("b2-2-7", "Sorry, I didn't quite catch that.", ["Xin lỗi, tôi không đồng ý.", "Xin lỗi, tôi đến muộn.", "Xin lỗi, tôi chưa nghe rõ lắm."], 2, "Catch ở đây nghĩa là nghe kịp, nghe rõ."),
    listen("b2-2-8", "They can't have read the proposal yet.", ["Chắc chắn họ đã đọc bản đề xuất.", "Họ không thể nào đã đọc bản đề xuất rồi.", "Họ không được phép đọc bản đề xuất."], 1),
    correct("b2-2-9", "She mustn't have seen my message. She hasn't opened it yet.", ["She can't have seen my message. She hasn't opened it yet.", "She couldn't have seen my message. She hasn't opened it yet."], "Khi suy đoán “không thể nào đã”, tiếng Anh Anh dùng can't have (hoặc couldn't have) + V3. Mustn't thường nghĩa là cấm; tiếng Anh Mỹ có dùng must not have, nhưng khóa này theo chuẩn Anh."),
    correct("b2-2-10", "The manager must have forget about the meeting.", "The manager must have forgotten about the meeting.", "Sau have phải là V3: forget, forgot, forgotten."),
    fill("b2-2-11", "Sorry to ___, but could I just add one thing? (ngắt lời)", ["interrupt"], "Sorry to interrupt, but…: cụm xen ngang lịch sự trong cuộc họp."),
    fill("b2-2-12", "They ___ have received the parcel already. It only left our warehouse an hour ago. (không thể nào)", ["can't", "cannot", "couldn't", "could not"], "Bằng chứng (hàng mới rời kho một tiếng) cho thấy gần như chắc chắn là chưa nhận: can't have / couldn't have + V3."),
    reorder("b2-2-13", "He must have left his phone at home.", "Must have + V3 + tân ngữ (his phone) + nơi chốn (at home). Tân ngữ đứng ngay sau động từ, không chen at home vào giữa."),
    correct("b2-2-14", "Sorry, I didn't quite catch. Could you repeat it?", ["Sorry, I didn't quite catch that. Could you repeat it?", "Sorry, I didn't quite catch that. Could you repeat that?", "Sorry, I didn't quite catch it. Could you repeat it?"], "Catch ở nghĩa nghe kịp cần tân ngữ: I didn't quite catch that. Tiếng Việt “tôi chưa nghe kịp” không cần tân ngữ nên người học hay bỏ."),
  ],
  speaking: [
    say("Sorry to interrupt, but could I add something?", "Xin lỗi đã ngắt lời, tôi có thể bổ sung một ý không?"),
    say("He must have missed the train this morning.", "Chắc hẳn anh ấy đã lỡ chuyến tàu sáng nay."),
    say("Let's get back to the main point.", "Chúng ta hãy quay lại vấn đề chính."),
  ],
  freeSpeaking: free(
    "Think of a time when someone missed a meeting or did not reply to a message. What might have happened?",
    "Kể lại một lần ai đó vắng mặt trong cuộc họp hoặc không trả lời tin nhắn, rồi đưa ra vài suy đoán về lý do bằng must have, might have, can't have, kèm bằng chứng cho từng lời đoán.",
    "Last week my colleague Hoa didn't come to our Monday meeting, and she didn't answer her phone. At first I thought she might have overslept, but that seemed unlikely, because she is always early. She can't have forgotten about the meeting, because she had sent me the agenda the night before. In the end, we found out that her son was ill. She must have been really worried, so she forgot to call us.",
  ),
  dialogueQuestions: [
    listenQ("b2-2-d1", "Why does David think Tuan cannot have forgotten the meeting?", "He can't have forgotten. He accepted the new invitation last night.", ["He phoned to say he was on his way.", "He accepted the new meeting invitation the night before.", "He always arrives early.", "He sent an email this morning."], 1, "Bằng chứng David đưa ra: He accepted the new invitation last night."),
    mc("b2-2-d2", "Why does David think it is better to call the client than to keep waiting?", ["He thinks the client has rejected the proposal.", "The client may have put the email aside, so a call could get a quicker answer.", "Lan has asked him to take over the project.", "The client prefers phone calls to emails."], 1, "Câu hỏi suy luận: Lan vừa nói họ may have put our email aside, nên David đề xuất gọi điện thay vì ngồi chờ email trả lời."),
    mc("b2-2-d3", "What have Lan and David agreed to do at the end of the meeting?", ["David will call the client and Lan will update Tuan.", "Lan will call the client and David will update Tuan.", "They will wait for the client to reply.", "They will stop the meeting until Tuan arrives."], 0, "Lan chốt: you'll call the client, and I'll update Tuan."),
  ],
  reading: reading({
    title: "The silent participant",
    text: `When a British software company opened an office in Ho Chi Minh City three years ago, its managers were delighted with the quality of the local engineers. After a few months, however, they noticed a problem. In online meetings with the London team, the Vietnamese engineers rarely spoke. The London managers assumed that the engineers must have had nothing to add, or that they might not have understood the discussion.

Both assumptions were wrong. When the company asked an external consultant to interview the team, she discovered that the engineers had plenty of ideas. They simply did not feel comfortable interrupting. "In our culture, you wait until someone asks for your opinion," one engineer explained. "In London, nobody asked us, because they expected us to jump in."

The consultant also found that fast speech was a barrier. Several engineers admitted that they had missed important details because they had been too embarrassed to say "Sorry, I didn't quite catch that." Looking back, the managers realised that some expensive mistakes could have been avoided if the engineers had felt free to ask questions.

One example showed how costly the silence had been. During a call about a new payment system, a London manager described a change to the database in one long, fast sentence. Two engineers in Ho Chi Minh City were not sure whether he meant the test database or the live one, but neither of them asked. They updated the wrong one, and the team spent almost a week repairing the damage. "We were each waiting for the other to speak," one of them said afterwards.

The company made three simple changes. First, every meeting now has an agenda that is sent out a day in advance, so that participants can prepare their comments. Second, the chair invites each office to speak in turn, instead of waiting for volunteers. Third, the team agreed on a few standard phrases, such as "Can I just come in here?" and "Could you clarify what you mean?", which everyone is encouraged to use.

The London team had to change as well. Managers were asked to speak more slowly, to avoid idioms that only native speakers would understand, and to finish every discussion by summarising the decisions in writing. Several of them admitted that they had never thought about how their English sounded to colleagues who had learnt it as a second language.

The results have been impressive. Within six months, the number of comments from the Vietnamese team had tripled, and the London managers say that the quality of their decisions has improved. "We thought we had a language problem," one director said. "In fact, we had a meeting problem."

The lesson is clear: silence in a meeting does not always mean agreement.`,
    glossary: [
      ["assume", "cho rằng, giả định"],
      ["consultant", "chuyên gia tư vấn"],
      ["barrier", "rào cản"],
      ["embarrassed", "ngại ngùng, xấu hổ"],
      ["chair", "người chủ trì cuộc họp"],
      ["triple", "tăng gấp ba"],
      ["live", "(hệ thống) đang chạy thật, không phải bản thử"],
      ["idiom", "thành ngữ"],
    ],
    questions: [
      mc("b2-2-r1", "What is the article mainly about?", ["Why a company closed its office in Ho Chi Minh City", "How a company found the real reason for its engineers' silence and solved it", "Why Vietnamese engineers need better technical training", "How to choose a good external consultant"], 1, "Bài kể vấn đề (kỹ sư im lặng), nguyên nhân thật và ba thay đổi đã giải quyết nó."),
      mc("b2-2-r2", "What did the London managers first believe about the silent engineers?", ["They were unhappy with their salaries.", "They had nothing to add or had not understood.", "They were too busy to attend the meetings.", "They disagreed with the London team."], 1, "The managers assumed that the engineers must have had nothing to add, or that they might not have understood."),
      fill("b2-2-r3", "Today every meeting has an agenda that is sent out a ___ in advance.", ["day"], "Bài viết: an agenda that is sent out a day in advance."),
      mc("b2-2-r4", "What does the director mean by \"In fact, we had a meeting problem\"?", ["The engineers' English was the main cause.", "The way the meetings were run was the real cause of the silence.", "The company should stop holding online meetings.", "The London managers spoke too slowly."], 1, "Khi đổi cách tổ chức họp, số ý kiến tăng gấp ba, nên vấn đề nằm ở cách họp chứ không ở ngôn ngữ."),
      mc("b2-2-r5", "What is the purpose of the last sentence of the article?", ["To give a general lesson that goes beyond this one company", "To criticise the Vietnamese engineers", "To advertise the consultant's services", "To suggest that meetings should be shorter"], 0, "Câu cuối rút ra bài học chung cho mọi cuộc họp: im lặng không có nghĩa là đồng ý."),
      fill("b2-2-r6", "After the changes, London managers had to summarise the decisions in ___ at the end of every discussion.", ["writing"], "Bài viết: to finish every discussion by summarising the decisions in writing."),
    ],
  }),
  dialogue: dialogue(
    "Cuộc họp nhóm sáng thứ Hai",
    "Chín giờ sáng, chị Lan chủ trì cuộc họp dự án. Anh Tuấn chưa đến, khách hàng chưa trả lời bản đề xuất. Chị Lan và anh David, quản lý dự án người Anh, vừa đoán lý do vừa bàn bước tiếp theo.",
    { A: "Lan, trưởng nhóm", B: "David, quản lý dự án" },
    A("Shall we start? Tuan still isn't here.", "Mình bắt đầu nhé? Tuấn vẫn chưa đến."),
    B("He must have got stuck in traffic. It's been raining all morning.", "Chắc hẳn cậu ấy bị kẹt xe rồi. Trời mưa suốt cả sáng mà."),
    A("Or he might have forgotten. We moved the meeting to nine only yesterday.", "Hoặc có thể cậu ấy quên. Mới hôm qua mình dời cuộc họp sang chín giờ."),
    B("He can't have forgotten. He accepted the new invitation last night.", "Cậu ấy không thể quên được. Tối qua cậu ấy đã chấp nhận lời mời mới rồi."),
    A("OK, let's look at the first item on the agenda: the Lotus Hotel proposal.", "Được rồi, mình xem mục đầu tiên trong chương trình họp: bản đề xuất cho khách sạn Lotus."),
    B("Sorry to interrupt, but have they replied yet?", "Xin lỗi đã ngắt lời, nhưng họ đã trả lời chưa?"),
    A("Not yet. They must have been busy with the audit this week.", "Chưa. Chắc hẳn tuần này họ bận với đợt kiểm toán."),
    B("Sorry, I didn't quite catch that. Did you say audit?", "Xin lỗi, tôi chưa nghe rõ lắm. Chị nói kiểm toán à?"),
    A("Yes. Their finance team is checking everything, so they may have put our email aside.", "Đúng vậy. Bộ phận tài chính của họ đang rà soát mọi thứ, nên có thể họ đã tạm gác email của mình lại."),
    B("I see. From my point of view, we should call them instead of waiting.", "Tôi hiểu rồi. Theo tôi, mình nên gọi cho họ thay vì ngồi chờ."),
    A("I completely agree. So, to sum up, you'll call the client, and I'll update Tuan.", "Tôi hoàn toàn đồng ý. Vậy tóm lại, anh sẽ gọi cho khách, còn tôi sẽ cập nhật cho Tuấn."),
    B("Sounds good. Shall we move on to the next item?", "Được đấy. Mình chuyển sang mục tiếp theo nhé?"),
  ),
  task: task({
    prompt: "Viết lời bạn sẽ nói trong cuộc họp nhóm (khoảng 150–200 từ, chia ba đoạn): khách hàng chưa trả lời email bạn gửi từ tuần trước. Hãy xen vào lịch sự, đưa ra ba hoặc bốn suy đoán về lý do (kèm bằng chứng), đề xuất bước tiếp theo và chốt việc cần làm.",
    hints: [
      "Mở bằng Sorry to interrupt, but… hoặc Can I just come in here?",
      "Chọn must have, might/may have hay can't have tùy bằng chứng bạn có, và nêu bằng chứng ngay sau lời đoán.",
      "Đưa ý kiến bằng From my point of view… hoặc I'd like to suggest that…",
      "Kết thúc bằng So, to sum up… và nói rõ ai làm gì, khi nào.",
    ],
    model: "Sorry to interrupt, but can I just come in here? I'd like to add something about the Lotus Hotel project before we move on.\n\nAs you know, the client still hasn't replied to the proposal we sent last Monday. They can't have missed it, because the system shows that their manager opened it on Tuesday morning. They might have been busy with the opening of their new branch in Da Nang, which was on Wednesday. Alternatively, they may have passed our email to their finance department, since the proposal includes new prices. However, they must have had some concerns, because they usually reply within two days.\n\nFrom my point of view, we shouldn't wait any longer. If we wait until next week, a competitor might contact them first. I'd like to suggest that I call their manager tomorrow morning and ask whether they need any further information. So, to sum up, I'll call the client tomorrow, and Minh will check our prices again. I'll report back to everyone by Thursday.",
    checklist: [
      "Có ít nhất ba câu suy đoán dạng modal + have + V3.",
      "Chọn đúng mức độ: must have khi có bằng chứng mạnh, might/may have khi chưa chắc, can't have khi gần như chắc chắn không.",
      "Sau have là V3 (been, missed, passed, had), không phải V2.",
      "Có ít nhất một cụm xen ngang và một cụm đưa ý kiến lịch sự.",
      "Chia ba đoạn (xen vào, vấn đề và suy đoán, đề xuất và chốt việc), nối ý bằng because, since, however, so.",
      "Câu cuối chốt việc: ai làm gì, trước khi nào.",
    ],
    minWords: 150,
  }),
});

const tuongThuat = lesson({
  slug: "tuong-thuat-loi-noi",
  title: "Động từ tường thuật trong công việc",
  minutes: 35,
  lecture: {
    title: "Suggest, recommend, admit, refuse… và mẫu câu đi kèm",
    blocks: [
      p("Anh Minh viết biên bản họp gửi sếp: “The client said the price was high. He said he wanted a discount. I said I would ask you. He said we should meet again.” Câu nào cũng đúng ngữ pháp, nhưng bốn chữ **said** liền nhau khiến người đọc không biết đâu là lời phàn nàn, đâu là yêu cầu, đâu là lời hứa. Người viết chuyên nghiệp sẽ viết: **The client complained about the price and asked for a discount. I promised to discuss it with you, and he suggested meeting again.** Ngắn hơn, mà nói được cả **ý định** của người nói."),
      p("Ở B1, bài **Câu tường thuật**, các bạn đã học say, tell và cách lùi thì. Bài này đi tiếp một bước: chọn **động từ tường thuật** (reporting verb) tóm được ý của cả câu nói gốc. Khó khăn duy nhất là mỗi động từ đi với **một mẫu câu riêng**: to V, người + to V, V-ing, giới từ + V-ing hay that + mệnh đề. Học sai mẫu là sai cả câu."),
      table(
        ["Mẫu câu", "Động từ", "Ví dụ"],
        ["V + to V", "agree, refuse, offer, promise", "The supplier refused to lower the price."],
        ["V + người + to V", "advise, remind, warn, persuade, ask, tell", "She reminded me to send the invoice."],
        ["V + V-ing", "suggest, recommend, admit, deny", "He admitted making a mistake in the figures."],
        ["V + giới từ + V-ing", "apologise for, insist on", "The client insisted on speaking to the manager."],
        ["V + người + for + V-ing", "blame sb for, thank sb for", "They blamed the IT team for losing the data."],
        ["V + that + S + (should) V", "suggest, recommend, insist", "The consultant recommended that we (should) hire a lawyer."],
      ),
      ex("“Let's move the launch to May.” → She suggested moving the launch to May.", "Cô ấy đề xuất dời buổi ra mắt sang tháng Năm.", "Cũng có thể viết She suggested that we (should) move the launch to May. Không viết suggested us to move."),
      ex("“I'm sorry I didn't reply sooner.” → He apologised for not replying sooner.", "Anh ấy xin lỗi vì đã không trả lời sớm hơn.", "Phủ định của V-ing: not đứng ngay trước V-ing."),
      ex("“Don't sign anything until our lawyer has read it.” → Our manager warned us not to sign anything until the lawyer had read it.", "Quản lý dặn chúng tôi đừng ký gì cho đến khi luật sư đọc xong.", "Warn + người + not to V. Not đứng trước to, không đứng sau."),
      ex("“OK, the figures were wrong. That was my fault.” → She admitted making a mistake in the figures.", "Cô ấy thừa nhận đã làm sai số liệu.", "Admit có hai cách: admit + V-ing hoặc admit (that) + mệnh đề: She admitted that she had made a mistake."),
      mistake("He suggested me to call the client.", "He suggested calling the client. / He suggested that I (should) call the client.", "Người Việt dịch từng chữ “anh ấy gợi ý tôi gọi” nên đặt tân ngữ ngay sau suggest. Suggest không bao giờ đi với người + to V. Với recommend, cách an toàn nhất cũng là recommend + V-ing hoặc recommend that + S + (should) V."),
      mistake("She denied to change the figures.", "She denied changing the figures.", "Tiếng Việt “chối là không sửa” không cho biết động từ sau ở dạng nào, nên người học đoán bừa to V. Deny và admit đi với V-ing hoặc that + mệnh đề."),
      mistake("The client insisted to see the manager.", "The client insisted on seeing the manager.", "“Khăng khăng đòi gặp” dễ bị dịch thành insist to. Insist đi với on + V-ing, hoặc insist that + mệnh đề."),
      p("Còn lùi thì thì sao? Quy tắc ở B1 vẫn giữ: động từ tường thuật ở quá khứ thì lùi một bậc. Nhưng có hai trường hợp người bản xứ thường **không lùi**: khi thông tin **vẫn còn đúng** lúc bạn kể lại, và khi động từ tường thuật ở **hiện tại**."),
      table(
        ["Tình huống", "Ví dụ", "Ghi chú"],
        ["Thông tin vẫn còn đúng", "She told us that the warehouse is closed on Sundays.", "Kho vẫn nghỉ Chủ nhật, nên giữ is; dùng was cũng không sai."],
        ["Động từ tường thuật ở hiện tại", "The client says he needs the report by Friday.", "Vừa nhận tin, đang chuyển lời, nên không lùi thì."],
        ["Việc đã qua, không còn đúng", "He said he was in Da Nang that week.", "Bây giờ anh ấy không còn ở Đà Nẵng, nên phải lùi."],
      ),
      tip("**Refuse** và **deny** đã mang nghĩa phủ định, đừng thêm not: He refused to sign (anh ấy từ chối ký), không viết refused not to sign. Còn khi muốn kể một lời dặn **đừng** làm gì, đặt not trước to: warned us **not to** sign, advised me **not to** wait."),
      teacher("Khi chữa biên bản họp cho học viên, tôi thường khoanh tròn mọi chữ said rồi hỏi: **người ấy đang làm gì khi nói câu này?** Hứa thì là promise, xin lỗi là apologise for, thừa nhận là admit, khuyên là advise. Chép động từ vào sổ phải chép **cả khối**: không ghi suggest, mà ghi **suggest doing / suggest that we do**. Mỗi tối, hãy kể lại ba câu ai đó nói với bạn trong ngày bằng ba động từ khác nhau. Sau hai tuần, chữ said sẽ tự nhường chỗ."),
      summary(
        "Động từ tường thuật tóm **ý định** của người nói: promise, refuse, admit, apologise, suggest… thay cho một loạt said.",
        "**Agree, refuse, offer, promise + to V**; **advise, remind, warn, persuade + người + to V**.",
        "**Suggest, recommend, admit, deny + V-ing**; suggest / recommend còn đi với **that + S + (should) V**. Không nói suggest someone to V.",
        "**Apologise for, insist on, blame sb for + V-ing**. Lời dặn phủ định: warn / advise sb **not to** V.",
        "Không cần lùi thì khi thông tin **vẫn còn đúng** hoặc khi động từ tường thuật ở **hiện tại**.",
      ),
    ],
  },
  words: [
    word("reassure", "/ˌriː.əˈʃɔː/", "trấn an, làm yên lòng", "The manager reassured the staff that nobody would lose their job.", "re|as|sure", 2, "Trọng âm ở âm cuối: ree-ờ-SHAW. Reassure + người + that…: trấn an ai rằng…"),
    word("objection", "/əbˈdʒek.ʃən/", "sự phản đối, ý kiến phản đối", "Does anyone have any objection to moving the meeting?", "ob|jec|tion", 1),
    word("statement", "/ˈsteɪt.mənt/", "lời tuyên bố, bản thông cáo", "The company issued a short statement about the delay.", "state|ment", 0, "Bật rõ âm /t/ ở giữa: STATE-mợnt, đừng đọc thành “xtê-mần”."),
    word("dispute", "/dɪˈspjuːt/", "cuộc tranh chấp, bất đồng", "The two companies settled their dispute without going to court.", "dis|pute", 1),
    word("verbal", "/ˈvɜː.bəl/", "bằng lời nói (không phải văn bản)", "A verbal agreement is not enough; we need it in writing.", "ver|bal", 0, "Không đọc âm r: /ˈvɜː.bəl/."),
    word("apology", "/əˈpɒl.ə.dʒi/", "lời xin lỗi", "The airline sent every passenger a written apology.", "a|pol|o|gy", 1, "Danh từ là apology, động từ là apologise (for). Trọng âm cả hai ở âm thứ hai: a-POL-o-gy."),
    word("quote", "/kwəʊt/", "trích dẫn nguyên văn", "Can I quote you on that in the minutes?", "quote", 0, "Âm đầu là /kw/, đọc như “quâu-t”, nhớ bật /t/ cuối."),
  ],
  exercises: [
    mc("b2-3-1", "“Why don't we hire a freelance designer?” → She suggested ___ a freelance designer.", ["us to hire", "to hire", "hiring", "that we hiring"], 2, "Suggest + V-ing (hoặc suggest that we hire / should hire). Không dùng suggest + người + to V, cũng không dùng suggest + to V."),
    mc("b2-3-2", "“It wasn't me who deleted the file,” said Tom. → Tom ___ the file.", ["denied deleting", "refused deleting", "denied to delete", "refused to delete"], 0, "Tom phủ nhận việc đã làm nên dùng deny + V-ing. Refuse to delete nghĩa là từ chối không chịu xóa, sai nghĩa."),
    fill("b2-3-3", "“I'll definitely send the contract by Friday.” → She ___ to send the contract by Friday. (hứa)", ["promised"], "Promise + to V: tường thuật một lời hứa gọn trong một câu."),
    fill("b2-3-4", "The client insisted ___ speaking to the manager directly.", ["on", "upon"], "Insist on + V-ing. Upon trang trọng hơn on nhưng cùng nghĩa."),
    fill("b2-3-5", "Our lawyer advised us ___ to sign the contract until she had checked it.", ["not"], "Lời khuyên phủ định: advise + người + not to V. Not đứng trước to."),
    fill("b2-3-6", "The director blamed the IT team ___ the delay.", ["for"], "Blame + người + for + việc: đổ lỗi cho ai về việc gì."),
    reorder("b2-3-7", "The manager reminded us to update the client.", "Remind + người + to V: nhắc ai làm một việc chưa làm."),
    reorder("b2-3-8", "He admitted making a mistake in the report.", "Admit + V-ing: thừa nhận đã làm gì. Cụm in the report đi sau tân ngữ a mistake."),
    reorder("b2-3-9", "She refused to give us a discount.", "Refuse + to V. Refuse đã mang nghĩa phủ định, không cần thêm not."),
    listen("b2-3-10", "He offered to drive the client to the airport.", ["Anh ấy nhờ khách chở mình ra sân bay.", "Anh ấy từ chối đưa khách ra sân bay.", "Anh ấy đề nghị tự lái xe đưa khách ra sân bay.", "Anh ấy được khách mời đi cùng ra sân bay."], 2, "Offer + to V: tự đề nghị làm gì giúp người khác."),
    listen("b2-3-11", "Ms Lan persuaded the board to delay the launch.", ["Chị Lan cố gắng nhưng không thuyết phục được ban giám đốc.", "Chị Lan thuyết phục được ban giám đốc lùi ngày ra mắt.", "Ban giám đốc nhờ chị Lan lùi ngày ra mắt.", "Ban giám đốc buộc chị Lan phải lùi ngày ra mắt."], 1, "Persuaded nghĩa là đã thuyết phục thành công. Nếu chỉ mới cố gắng, người ta nói tried to persuade."),
    correct("b2-3-12", "My colleague suggested me to ask for an extension.", ["My colleague suggested asking for an extension.", "My colleague suggested that I ask for an extension.", "My colleague suggested that I should ask for an extension.", "My colleague suggested I ask for an extension.", "My colleague suggested I should ask for an extension."], "Suggest không đi với người + to V. Dùng suggest + V-ing hoặc suggest (that) I (should) ask."),
    correct("b2-3-13", "The finance manager denied to make any changes to the budget.", ["The finance manager denied making any changes to the budget.", "The finance manager denied having made any changes to the budget.", "The finance manager refused to make any changes to the budget."], "Deny đi với V-ing (denied making). Nếu ý là không chịu sửa thì phải đổi động từ: refused to make."),
    correct("b2-3-14", "He apologised to be late for the meeting.", ["He apologised for being late for the meeting.", "He apologised for having been late for the meeting.", "He apologised for arriving late for the meeting."], "Apologise for + V-ing. Tiếng Việt “xin lỗi vì đến muộn” không có giới từ rõ ràng nên người học hay dùng to V."),
  ],
  speaking: [
    say("She suggested moving the meeting to Thursday afternoon.", "Cô ấy đề xuất dời cuộc họp sang chiều thứ Năm."),
    say("The supplier apologised for sending the wrong documents.", "Nhà cung cấp xin lỗi vì đã gửi nhầm tài liệu."),
    say("Our manager reminded us to back up our files every evening.", "Quản lý nhắc chúng tôi sao lưu tệp mỗi tối."),
  ],
  freeSpeaking: free(
    "Tell me about a recent meeting or conversation at work or at school. What did people suggest, promise or ask for?",
    "Kể lại một cuộc họp hoặc cuộc trò chuyện gần đây: ai đề xuất gì, ai hứa gì, ai xin lỗi hay từ chối điều gì. Dùng ít nhất bốn động từ tường thuật khác nhau thay cho said.",
    "Last Friday we had a meeting about our new website. My manager admitted that the project was behind schedule, and she apologised for not giving us enough time. One of the designers suggested removing two pages to save time, but the sales team refused to accept that. In the end, my manager persuaded them to wait until the next version, and I promised to finish the testing by Wednesday.",
  ),
  dialogueQuestions: [
    listenQ("b2-3-d1", "What did Mr Tanaka insist on?", "He complained about two damaged boxes, and he insisted on getting replacements this month.", ["A refund for the damaged boxes", "Getting replacement boxes this month", "A visit to the warehouse", "A discount on the next shipment"], 1, "He insisted on getting replacements this month: ông ấy khăng khăng đòi được thay hàng trong tháng này."),
    mc("b2-3-d2", "Why did Minh refuse to agree to the discount during the meeting?", ["He thought five per cent was far too much.", "He wanted to discuss it with Sophie first.", "Mr Tanaka had not paid for the first order.", "The company never offers discounts."], 1, "Minh: I refused to agree to anything before talking to you."),
    mc("b2-3-d3", "What can we infer from Sophie's reply, “Then we'd better plan the delivery around that”?", ["The next delivery should not arrive in August.", "The meeting in Osaka must take place in August.", "Sophie wants to cancel the next order.", "Mr Tanaka will collect the goods himself."], 0, "Nhà máy của khách đóng cửa cả tháng Tám, nên Sophie ngụ ý phải xếp lịch giao hàng tránh tháng đó."),
  ],
  reading: reading({
    title: "Coffee chain promises to cut waiting times",
    text: `Hanoi-based coffee chain Morning Bean has promised to reduce waiting times at its busiest branches after a wave of complaints on social media.

At a press conference on Tuesday, the company's chief executive, Ms Pham Lan Anh, admitted that service had not kept up with the chain's rapid growth. She explained that the number of branches had doubled in two years, but that the ordering system had not changed at all. "Some customers are waiting twenty minutes for a coffee," she said. "That is simply not acceptable."

Ms Pham told reporters that the company would introduce a mobile ordering app in March. She said that customers would be able to order and pay before they arrived, and she promised that every branch would have at least two extra staff members during the morning rush.

Not everyone was convinced. One reporter asked whether the new app would really solve the problem, since many older customers preferred to order at the counter. Ms Pham insisted that the counters would stay open, and she denied that the company was trying to replace its staff with technology. "Our baristas are the heart of our business," she said.

Staff representatives were more positive. A spokesperson for the chain's baristas said that the extra staff were long overdue, and she reminded the company that many employees had been working overtime for months. She also recommended reviewing the training programme, since new staff were often sent to the busiest branches after only two days of preparation.

Customer groups gave the plan a cautious welcome. The head of a local consumer organisation said that it sounded reasonable, but she warned that promises were easy to make. She suggested publishing average waiting times on the company website every month, so that customers could check whether the situation was really improving.

The app has already been tried out at three branches in Hoan Kiem district. According to the company, the average wait there fell from eighteen minutes to seven during the trial, although some users complained that the app had crashed several times on the first weekend. Ms Pham apologised for the problems and reassured customers that they had been fixed before the wider launch.

Morning Bean's share price rose by three per cent after the press conference. However, some analysts claimed that the real test would come in the summer, when demand for iced drinks usually reaches its peak.

In the meantime, the company has asked customers to send their feedback through its website, and it has promised to reply to every message within forty-eight hours.`,
    glossary: [
      ["press conference", "buổi họp báo"],
      ["convinced", "tin, bị thuyết phục"],
      ["barista", "nhân viên pha chế cà phê"],
      ["cautious", "thận trọng"],
      ["analyst", "nhà phân tích"],
      ["peak", "đỉnh điểm"],
      ["long overdue", "lẽ ra phải có từ lâu"],
      ["overtime", "làm thêm giờ"],
    ],
    questions: [
      mc("b2-3-r1", "What is the report mainly about?", ["A coffee chain that is opening new branches in Hanoi", "A coffee chain's plan to deal with long waiting times", "Why customers prefer iced drinks in the summer", "A new law about service in cafés"], 1, "Cả bài tường thuật kế hoạch giảm thời gian chờ và phản ứng của mọi người."),
      mc("b2-3-r2", "According to Ms Pham, why had the service become slower?", ["The company had fewer staff than before.", "The number of branches had grown, but the ordering system had not changed.", "Customers had started ordering more complicated drinks.", "The mobile app had stopped working."], 1, "She explained that the number of branches had doubled… but that the ordering system had not changed."),
      fill("b2-3-r3", "The head of the consumer organisation suggested ___ average waiting times on the company website every month.", ["publishing"], "Suggest + V-ing: suggested publishing."),
      mc("b2-3-r4", "Why do some analysts think the real test will come in the summer?", ["The app will only be ready in the summer.", "The branches will be busier because more people buy iced drinks.", "The company will raise its prices in the summer.", "Many staff members go on holiday in the summer."], 1, "Mùa hè là lúc nhu cầu đồ uống đá lên đỉnh điểm, tức là quán đông nhất."),
      mc("b2-3-r5", "Which best describes the consumer organisation's attitude to the plan?", ["Completely against it", "Enthusiastic and fully confident", "Positive but careful", "Not interested at all"], 2, "Bà ấy nói kế hoạch nghe hợp lý (positive) nhưng cảnh báo hứa thì dễ (careful): đúng nghĩa a cautious welcome."),
      mc("b2-3-r6", "What can we infer from the baristas' spokesperson's comments?", ["Staff had been under pressure for a long time.", "Baristas were against the new app.", "The training programme had recently been improved.", "Most branches already had enough staff."], 0, "Câu hỏi suy luận: extra staff were long overdue và nhân viên làm thêm giờ nhiều tháng, nên nhân viên đã chịu áp lực từ lâu."),
    ],
  }),
  dialogue: dialogue(
    "Báo cáo lại cho sếp sau buổi gặp khách",
    "Anh Minh vừa gặp ông Tanaka, khách hàng Nhật, xong. Sếp của anh, chị Sophie, gọi điện hỏi khách đã nói gì, phàn nàn gì và đề xuất gì. Minh dùng động từ tường thuật để kể lại thật gọn.",
    { A: "Minh, nhân viên kinh doanh", B: "Sophie, trưởng phòng" },
    B("So, how did the meeting with Mr Tanaka go?", "Thế buổi gặp ông Tanaka thế nào?"),
    A("Quite well. He even admitted that our prices were fairer than his old supplier's.", "Khá tốt ạ. Ông ấy còn thừa nhận giá của mình hợp lý hơn nhà cung cấp cũ của ông ấy."),
    B("That's good to hear. Did he raise any problems?", "Nghe vui đấy. Ông ấy có nêu vấn đề gì không?"),
    A("He complained about two damaged boxes, and he insisted on getting replacements this month.", "Ông ấy phàn nàn về hai thùng hàng bị hỏng và khăng khăng đòi được thay trong tháng này."),
    B("Fair enough. What did you say?", "Cũng phải thôi. Em trả lời thế nào?"),
    A("I apologised for the damage and promised to send new boxes by the twentieth.", "Em xin lỗi về chỗ hàng hỏng và hứa gửi thùng mới trước ngày hai mươi."),
    B("Good. Did he ask for a discount?", "Tốt. Ông ấy có đòi giảm giá không?"),
    A("He did. He asked us to cut the price by five per cent, but I refused to agree to anything before talking to you.", "Có ạ. Ông ấy đề nghị mình giảm năm phần trăm, nhưng em từ chối hứa hẹn gì trước khi bàn với chị."),
    B("Quite right. Anything about the next order?", "Đúng đấy. Còn đơn hàng tiếp theo thì sao?"),
    A("He suggested meeting in Osaka next spring. He also mentioned that their factory closes for the whole of August.", "Ông ấy đề xuất gặp nhau ở Osaka vào mùa xuân tới. Ông ấy cũng nhắc là nhà máy của họ nghỉ cả tháng Tám."),
    B("Then we'd better plan the delivery around that. Please remind me to call him on Friday.", "Vậy mình phải xếp lịch giao hàng cho khéo. Em nhớ nhắc chị gọi cho ông ấy vào thứ Sáu nhé."),
    A("Sure. I'll write up the notes and send them to you this afternoon.", "Vâng ạ. Em sẽ viết biên bản và gửi chị chiều nay."),
  ),
  task: task({
    prompt: "Sếp của bạn không dự được buổi họp với khách hàng sáng nay. Viết một email (khoảng 150–200 từ) tường thuật lại cho sếp: khách thừa nhận, phàn nàn, đề nghị hay nhắc nhở điều gì, và bạn đã xin lỗi, hứa hoặc từ chối điều gì. Hạn chế dùng said; hãy chọn động từ tường thuật nói được ý định của người nói. Chia email thành các đoạn rõ ràng.",
    hints: [
      "Chọn động từ theo ý định: admit, complain about, insist on, suggest, remind, apologise for, promise, refuse, offer.",
      "Nhớ mẫu câu: promise / refuse / offer + to V; suggest / admit + V-ing; remind + người + to V; apologise for + V-ing.",
      "Việc đã qua thì lùi thì; thông tin vẫn còn đúng (giờ mở cửa, lịch nghỉ cố định) thì có thể giữ thì hiện tại.",
      "Không viết suggested me to hay denied to.",
    ],
    model: "Hi Long,\n\nAs you were not able to join this morning's meeting with Ms Carter from Green Farm, here is a short summary.\n\nOverall, the meeting went well. Ms Carter admitted that our prices were higher than her previous supplier's, but she explained that her customers loved our new packaging. However, she complained about the last delivery, which had arrived two days late, and she insisted on receiving a written explanation by Friday.\n\nI apologised for the delay and promised to send her the explanation tomorrow. She then asked whether we could deliver on Mondays instead of Wednesdays. I refused to commit to anything before checking with the warehouse, but I offered to call her with an answer this week.\n\nBefore she left, she suggested meeting again next month to discuss a two-year contract, and she reminded me to send her our new price list. She also mentioned that their shops close for a week in February.\n\nCould we discuss the Monday deliveries tomorrow morning?\n\nBest regards,\nMinh",
    checklist: [
      "Dùng ít nhất năm động từ tường thuật khác nhau ngoài said và told.",
      "Promise, refuse, offer đi với to V; suggest, admit đi với V-ing; insist on và apologise for đi với V-ing.",
      "Có ít nhất một câu remind, advise hoặc warn + người + (not) to V.",
      "Không có lỗi suggested me to hay denied to.",
      "Việc đã qua được lùi thì; thông tin vẫn còn đúng có thể giữ thì hiện tại.",
      "Email chia đoạn (tổng quan, khách phàn nàn gì, bạn trả lời gì, việc tiếp theo), nối ý bằng However, then, also.",
    ],
    minWords: 150,
  }),
});

const tiecNuoi = lesson({
  slug: "tiec-nuoi-va-gia-dinh",
  title: "Tiếc nuối và giả định quá khứ",
  minutes: 35,
  lecture: {
    title: "Câu điều kiện loại 3, câu hỗn hợp và wish",
    blocks: [
      p("Dự án ra mắt ứng dụng trễ hạn hai tuần, khách hàng phàn nàn. Trong buổi họp rút kinh nghiệm, trưởng nhóm nói: “Nếu mình kiểm thử sớm hơn thì đã không trễ” và “Giá mà mình đọc kỹ hợp đồng”. Người Việt nói những câu này rất tự nhiên, nhưng sang tiếng Anh lại hay chọn sai thì. Bài này giúp bạn nói về **những điều đã không xảy ra** một cách chính xác."),
      p("Ở B1, bài **Nếu… thì…**, các bạn đã học câu điều kiện loại 1 (có thể xảy ra) và loại 2 (không có thật ở hiện tại), và bài **Chuyện xảy ra trước đó** đã dạy **had + V3**. Hôm nay ghép hai thứ ấy lại. Khi rút kinh nghiệm, ta hay nói “Giá mà…” hoặc “Nếu hồi đó… thì đã…”. Tiếng Anh dùng **câu điều kiện loại 3** để nói về điều **không có thật trong quá khứ** và kết quả tưởng tượng của nó."),
      table(
        ["Loại câu", "Mệnh đề if", "Mệnh đề chính", "Ví dụ"],
        ["Loại 3", "If + had + V3", "would have + V3", "If we had started earlier, we would have met the deadline."],
        ["Hỗn hợp", "If + had + V3", "would + V", "If I had accepted the offer, I would be in London now."],
        ["Wish / If only", "wish + had + V3", "Không cần mệnh đề chính", "I wish I had read the contract more carefully."],
      ),
      ex("If they had tested the software, the launch wouldn't have failed.", "Nếu họ đã kiểm thử phần mềm thì buổi ra mắt đã không thất bại.", "Thực tế: họ không kiểm thử và buổi ra mắt thất bại."),
      ex("If only we had listened to the customers!", "Giá mà chúng ta đã lắng nghe khách hàng!"),
      p("**Câu hỗn hợp** nối một nguyên nhân trong quá khứ với một kết quả ở **hiện tại**: vế if dùng had + V3, vế chính dùng **would + V** (không có have)."),
      ex("If I had studied finance, I would understand these reports now.", "Nếu hồi đó tôi học tài chính thì bây giờ tôi đã hiểu những báo cáo này.", "Vế if nói về quá khứ (hồi đi học), vế chính nói về hiện tại (now), nên vế chính dùng would + V, không có have."),
      p("Ở bài Ước muốn và thói quen của B1, bạn đã học **wish + quá khứ đơn** và **wish + had V3**. Ở đây ta ôn nhanh hai mẫu đó và thêm **wish + would**: dùng để phàn nàn về hành động của **người khác** mà bạn muốn họ thay đổi. Mẹo chung vẫn là: xem bạn tiếc điều gì ở **hiện tại** hay ở **quá khứ**, rồi lùi thì một bậc so với thực tế."),
      table(
        ["Tiếc về", "Thực tế", "Câu với wish"],
        ["Hiện tại", "I don't speak Japanese.", "I wish I spoke Japanese."],
        ["Hiện tại", "I can't come to the meeting.", "I wish I could come to the meeting."],
        ["Quá khứ", "I didn't read the contract carefully.", "I wish I had read the contract carefully."],
        ["Quá khứ", "We cut the budget.", "I wish we hadn't cut the budget."],
        ["Phàn nàn về người khác", "The supplier keeps changing the date.", "I wish the supplier would stop changing the date."],
      ),
      mistake("If I would have known, I would have told you.", "If I had known, I would have told you.", "Tiếng Việt dùng “thì đã” ở cả hai vế nên học trò hay đặt would have vào cả hai. Trong câu điều kiện loại 3, vế if phải là had + V3, would have chỉ nằm ở vế chính."),
      mistake("I wish I didn't send that email yesterday.", "I wish I hadn't sent that email yesterday.", "Tiếc nuối về quá khứ phải dùng wish + had + V3. Wish + quá khứ đơn chỉ dùng cho hiện tại. Tiếng Việt không đổi thì nên người học chỉ nhìn chữ yesterday mà quên lùi thì."),
      mistake("If we had knew the price, we would have ordered more.", "If we had known the price, we would have ordered more.", "Sau had phải là V3. Know, knew, known là bộ ba bất quy tắc người Việt hay lẫn nhất."),
      tip("Khi nói nhanh, **would have** được đọc gần như **would've** /ˈwʊd.əv/, và **had** rút gọn thành **'d**: **If I'd known, I would've called.** Trong vế if, 'd là had chứ không phải would."),
      teacher("Với những học trò hay rối, tôi có một mẹo: trước khi nói, hãy **nói ra thực tế** trước đã. “Thực tế: mình không kiểm thử, dự án trễ.” Rồi **đảo ngược cả hai vế và lùi thì**: If we had tested it, we wouldn't have been late. Mỗi ngày làm như vậy với năm câu, chỉ sau một tuần bạn sẽ ít nhầm hẳn. Và nhớ: câu tiếc nuối dùng để **rút kinh nghiệm**, đừng dùng để đổ lỗi cho đồng nghiệp trong cuộc họp."),
      summary(
        "Loại 3, điều không có thật trong quá khứ: **If + had + V3, would have + V3**. Would have chỉ nằm ở vế chính, không bao giờ ở vế if.",
        "Câu hỗn hợp, nguyên nhân quá khứ và kết quả hiện tại: **If + had + V3, would + V** (thường có now).",
        "Tiếc về hiện tại: **wish + quá khứ đơn** (I wish I spoke Japanese). Tiếc về quá khứ: **wish / if only + had + V3**.",
        "Mẹo: nói **thực tế** trước, rồi đảo nghĩa cả hai vế và lùi thì.",
        "Khi nói nhanh: **If I'd known, I would've called.** Trong vế if, 'd là had.",
      ),
    ],
  },
  words: [
    word("foresee", "/fɔːˈsiː/", "lường trước, đoán trước", "Nobody could have foreseen such a sharp fall in demand.", "fore|see", 1, "Không đọc âm r: /fɔːˈsiː/. Bộ ba bất quy tắc: foresee, foresaw, foreseen."),
    word("regret", "/rɪˈɡret/", "hối tiếc", "I regret not asking for more details.", "re|gret", 1),
    word("investment", "/ɪnˈvest.mənt/", "khoản đầu tư", "The investment paid off within two years.", "in|vest|ment", 1),
    word("setback", "/ˈset.bæk/", "trở ngại, bước lùi", "Losing our biggest client was a serious setback.", "set|back", 0),
    word("consequence", "/ˈkɒn.sɪ.kwəns/", "hậu quả", "The delay had serious consequences for the company.", "con|se|quence", 0),
    word("outcome", "/ˈaʊt.kʌm/", "kết quả", "We are happy with the outcome of the negotiation.", "out|come", 0),
    word("misjudge", "/ˌmɪsˈdʒʌdʒ/", "đánh giá sai, tính sai", "We misjudged how long the testing would take.", "mis|judge", 1, "Tiền tố mis- mang nghĩa “sai”: misjudge, misunderstand, mislead."),
    word("overlook", "/ˌəʊ.vəˈlʊk/", "bỏ sót, bỏ qua", "We overlooked a small but important detail.", "o|ver|look", 2),
  ],
  exercises: [
    mc("b2-4-1", "If we ___ the risks, we would have avoided the problem.", ["had considered", "considered", "would have considered", "would consider"], 0, "Vế if của câu loại 3 dùng had + V3. Would have chỉ nằm ở vế chính; đặt would have vào vế if là lỗi do dịch “nếu đã… thì đã…”."),
    mc("b2-4-2", "If she had taken the job in Singapore, she ___ there now.", ["would have lived", "would live", "had lived", "will live"], 1, "Câu hỗn hợp: nguyên nhân ở quá khứ, kết quả ở hiện tại (now), nên dùng would + V (would be living cũng đúng)."),
    fill("b2-4-3", "I wish I ___ asked more questions in the interview.", ["had", "'d"], "Wish + had + V3 để tiếc nuối về quá khứ."),
    fill("b2-4-4", "If the supplier had delivered on time, we would have ___ the order. (complete)", ["completed", "finished", "fulfilled", "delivered", "shipped"], "Would have + V3: complete thành completed."),
    reorder("b2-4-5", "I wish I hadn't sent that email.", "Wish + hadn't + V3: tiếc là hồi đó đã làm một việc không nên làm."),
    reorder("b2-4-6", "If only we had signed the deal earlier.", "If only + had + V3 diễn tả sự tiếc nuối mạnh."),
    listen("b2-4-7", "If I'd known about the problem, I would've called you.", ["Tôi biết có vấn đề nên đã gọi cho bạn.", "Nếu tôi mà biết có vấn đề thì tôi đã gọi cho bạn rồi.", "Nếu có vấn đề, tôi sẽ gọi cho bạn."], 1, "I'd known = I had known; would've = would have."),
    listen("b2-4-8", "I wish we hadn't cut the marketing budget.", ["Giá mà chúng ta đã không cắt giảm ngân sách tiếp thị.", "Chúng ta nên cắt giảm ngân sách tiếp thị.", "Tôi mong chúng ta sẽ tăng ngân sách tiếp thị."], 0),
    correct("b2-4-9", "If we would have checked the figures, we would have noticed the mistake.", ["If we had checked the figures, we would have noticed the mistake.", "If we'd checked the figures, we would have noticed the mistake."], "Vế if của câu loại 3 dùng had + V3; would have chỉ nằm ở vế chính."),
    correct("b2-4-10", "I wish I didn't accept that job last year.", "I wish I hadn't accepted that job last year.", "Tiếc về quá khứ (last year) dùng wish + had + V3, không dùng quá khứ đơn."),
    fill("b2-4-11", "If the bank ___ approved our loan, we would have opened a second shop last year.", ["had"], "Vế if của câu loại 3: had + V3 (had approved). Không dùng would have ở vế if."),
    correct("b2-4-12", "If I had accepted the job in Singapore, I would have lived there now.", ["If I had accepted the job in Singapore, I would live there now.", "If I had accepted the job in Singapore, I would be living there now.", "If I'd accepted the job in Singapore, I would live there now.", "If I'd accepted the job in Singapore, I would be living there now.", "If I had accepted the job in Singapore, I'd live there now.", "If I had accepted the job in Singapore, I'd be living there now."], "Có now nên vế chính nói về hiện tại: câu hỗn hợp dùng would + V (hoặc would be + V-ing), không dùng would have + V3."),
    reorder("b2-4-13", "I wish my manager would stop changing the plan.", "Wish + người khác + would + V: phàn nàn về hành động của người khác mà mình muốn họ thay đổi."),
    fill("b2-4-14", "Thank goodness you checked the prices! If you hadn't, we ___ sent the wrong figures to the client. (kết quả đã không xảy ra)", ["would have", "would've", "'d have", "might have", "might've", "could have", "could've"], "Vế chính của câu loại 3: would / might / could have + V3. Thực tế: bạn đã kiểm tra, nên chúng tôi không gửi nhầm."),
  ],
  speaking: [
    say("If we had started earlier, we would have finished on time.", "Nếu chúng ta bắt đầu sớm hơn thì đã hoàn thành đúng hạn."),
    say("I wish I had read the contract more carefully.", "Giá mà tôi đã đọc hợp đồng kỹ hơn."),
    say("If I had accepted that offer, I would be a manager now.", "Nếu hồi đó tôi nhận lời đề nghị ấy thì giờ tôi đã là quản lý."),
  ],
  freeSpeaking: free(
    "Is there a choice you made in the past that you would make differently now?",
    "Nói về một lựa chọn trong quá khứ mà bạn tiếc: thực tế là gì, nếu hồi đó khác đi thì điều gì đã xảy ra, và bây giờ cuộc sống của bạn sẽ khác thế nào. Dùng câu loại 3, câu hỗn hợp và I wish.",
    "When I was at university, I had the chance to study in Japan for a year, but I didn't go because I was worried about the cost. Now I really regret it. If I had gone, I would have learnt Japanese and made friends from many different countries. I would probably have a more interesting job now, too. I wish I had been braver. Next time I get an opportunity like that, I will take it.",
  ),
  dialogueQuestions: [
    listenQ("b2-4-d1", "According to Emma, what would have happened if they had tested the payment feature earlier?", "If we had tested the payment feature earlier, we wouldn't have found that bug so late.", ["The client would have paid more.", "They would have found the bug earlier.", "They would have needed more testers.", "The launch would have been cancelled."], 1, "Wouldn't have found that bug so late: tức là đã phát hiện lỗi sớm hơn."),
    mc("b2-4-d2", "What does Hung regret?", ["Not asking for two more testers in March", "Signing the contract too quickly", "Choosing the wrong client", "Starting the coding too early"], 0, "Hùng nói: I wish I had asked for two more testers in March."),
    mc("b2-4-d3", "What can we infer about the team's situation at the moment?", ["They are working at weekends to catch up.", "They have finished the project and are on holiday.", "The client has cancelled the contract.", "They have already hired two more testers."], 0, "Câu hỗn hợp của Emma: If we had checked the deadlines properly, we wouldn't be working at weekends now. Suy ra thực tế hiện tại: nhóm đang phải làm cả cuối tuần."),
  ],
  reading: reading({
    title: "Case study: the launch that came too soon",
    text: `In 2023, Rau Xanh Express, a small start-up in Da Nang, launched a grocery delivery app. The founders had raised enough money for eighteen months, and they were determined to reach the market before a much larger rival. They succeeded: Rau Xanh Express went live six weeks before its competitor. Within three months, however, the company had lost most of its customers.

What went wrong? According to the company's own review, the problem was not the idea but the timing. The app had been tested by the team itself, but never by real customers. When thousands of people started using it at the same time, orders disappeared, payments failed and drivers were sent to the wrong addresses. If the founders had invited even a small group of customers to try the app, they would have discovered most of these problems before the launch.

The online reviews made the situation worse. In the first week alone, the app received hundreds of one-star ratings, and several popular food bloggers wrote about orders that had never arrived. Customers who had tried the service once rarely gave it a second chance. Looking back, the founders believe that a fast, honest response might have saved part of their reputation, but their support team had only three people, and they were completely overwhelmed by the number of messages.

The founders also admit that they ignored early warnings. Two of their engineers had asked for another month of testing, but the request was refused. "I wish I had listened to them," one of the founders later wrote. "We were so afraid of being second that we forgot about being good."

The setback had long-term consequences. If Rau Xanh Express had launched a month later, it would probably be the market leader in Da Nang today. Instead, it spent most of its remaining money on refunds and on advertising to win customers back. Two of its early investors also decided not to put in any more money, so for several months the founders were not sure whether the company would survive at all.

Fortunately, the story does not end badly. The company rebuilt the app, tested every feature with a group of two hundred users, and relaunched the following year. This time, the founders also postponed two features that were not ready, rather than releasing everything at once. The company is now profitable, although it is much smaller than its rival.

Today the founders often share their experience at start-up events. Their message is simple: being first is an opportunity, but only if the product works. As they put it, "Nobody remembers who arrived first. They remember who arrived ready."`,
    glossary: [
      ["start-up", "công ty khởi nghiệp"],
      ["founder", "nhà sáng lập"],
      ["determined", "quyết tâm"],
      ["rival", "đối thủ cạnh tranh"],
      ["refund", "tiền hoàn lại"],
      ["relaunch", "ra mắt lại"],
      ["profitable", "có lãi"],
    ],
    questions: [
      mc("b2-4-r1", "What is the main point of the case study?", ["Small start-ups should never compete with larger companies.", "Rau Xanh Express failed at first because it launched before the app was properly tested.", "Delivery apps cannot make a profit in Da Nang.", "The founders of Rau Xanh Express lost all their money."], 1, "Bài phân tích nguyên nhân thất bại: ra mắt quá sớm khi chưa thử với khách hàng thật."),
      mc("b2-4-r2", "Who had asked for more time to test the app?", ["The customers", "The rival company", "Two of the engineers", "The drivers"], 2, "Two of their engineers had asked for another month of testing."),
      fill("b2-4-r3", "If the founders had invited a small group of customers to try the app, they would have ___ most of the problems before the launch.", ["discovered", "found"], "Would have + V3: discovered."),
      mc("b2-4-r4", "What does the sentence \"it would probably be the market leader in Da Nang today\" tell us about Rau Xanh Express now?", ["It is the market leader in Da Nang.", "It is not the market leader in Da Nang.", "It has closed down.", "It has bought its rival."], 1, "Câu hỗn hợp nói điều trái với hiện tại: thực tế là bây giờ Rau Xanh Express không dẫn đầu thị trường."),
      mc("b2-4-r5", "Why does the writer end the case study with the founders' words?", ["To sum up the lesson of the story in a memorable way", "To show that the founders are still angry with their engineers", "To advertise the new version of the app", "To criticise the rival company"], 0, "Câu trích dẫn cuối đúc kết bài học của cả câu chuyện."),
    ],
  }),
  dialogue: dialogue(
    "Họp rút kinh nghiệm sau dự án trễ hạn",
    "Ứng dụng đặt vé của công ty ra mắt trễ hai tuần. Anh Hùng, trưởng nhóm, và chị Emma, phụ trách kiểm thử, ngồi lại rút kinh nghiệm cho dự án sau.",
    { A: "Hùng, trưởng nhóm", B: "Emma, phụ trách kiểm thử" },
    A("Let's be honest. The launch was two weeks late. What went wrong?", "Mình nói thẳng nhé. Buổi ra mắt trễ hai tuần. Sai ở đâu?"),
    B("If we had tested the payment feature earlier, we wouldn't have found that bug so late.", "Nếu mình kiểm thử tính năng thanh toán sớm hơn thì đã không phát hiện lỗi đó muộn như vậy."),
    A("I agree. I wish I had asked for two more testers in March.", "Tôi đồng ý. Giá mà hồi tháng Ba tôi đã xin thêm hai người kiểm thử."),
    B("And if the client had sent the final design on time, we would have started coding sooner.", "Và nếu khách hàng gửi bản thiết kế cuối đúng hạn thì mình đã bắt đầu viết mã sớm hơn."),
    A("True, but we overlooked a few details in the contract too. If only we had read it more carefully.", "Đúng, nhưng mình cũng bỏ sót vài chi tiết trong hợp đồng. Giá mà mình đọc nó kỹ hơn."),
    B("Yes. If we had checked the deadlines properly, we wouldn't be working at weekends now.", "Phải. Nếu mình kiểm tra hạn chót cẩn thận thì giờ đã không phải làm cả cuối tuần."),
    A("Exactly. So what's the main lesson for the next project?", "Chính xác. Vậy bài học chính cho dự án sau là gì?"),
    B("Test every feature as soon as it's ready, not at the end.", "Kiểm thử từng tính năng ngay khi làm xong, đừng để đến cuối."),
    A("Good. I wish we'd had this conversation before the project started.", "Hay đấy. Giá mà mình nói chuyện này trước khi dự án bắt đầu."),
    B("Well, at least we've learnt something. Let's write it down for the next team.", "Dù sao thì mình cũng rút ra được bài học. Ghi lại cho nhóm sau nhé."),
  ),
  task: task({
    prompt: "Viết một bài rút kinh nghiệm (khoảng 150–200 từ, 3–4 đoạn) về một việc trong công việc hoặc cuộc sống đã không diễn ra như ý (một sự kiện, một dự án, một kỳ thi). Kể thực tế ngắn gọn, rồi nói điều gì lẽ ra đã khác, bạn tiếc điều gì, và bài học cho lần sau.",
    hints: [
      "Viết một hoặc hai câu kể thực tế trước, rồi đảo nghĩa và lùi thì thành câu loại 3.",
      "Thêm một câu hỗn hợp nối việc trong quá khứ với tình hình hiện tại: If I had…, I would… now.",
      "Dùng I wish / If only + had + V3 cho một điều bạn tiếc.",
      "Kết thúc bằng một bài học cho lần sau, không đổ lỗi cho người khác.",
    ],
    model: "Last year our team organised a product launch in Da Nang, and unfortunately it did not go as planned.\n\nThe first problem was the venue. We booked it far too late, so we had to use a small hotel room instead of a proper conference hall. If we had booked the venue two months earlier, we would have got a much bigger space with better equipment. In addition, we sent the invitations only a week before the event. As a result, only forty guests came. If we had sent them sooner, many more customers would have attended.\n\nLooking back, I also think that my own lack of experience was part of the problem. If I had studied event planning properly, I would feel much more confident about organising events now. I wish I had asked an experienced colleague for advice at the start, instead of trying to do everything myself.\n\nHowever, the event taught us some useful lessons. Next time, we will start planning three months in advance, and we will create a clear timeline for every task.",
    checklist: [
      "Có ít nhất hai câu điều kiện loại 3 đúng dạng: If + had + V3, would have + V3.",
      "Có một câu hỗn hợp với kết quả ở hiện tại (would + V, thường có now).",
      "Có một câu I wish hoặc If only + had + V3.",
      "Vế if dùng had + V3 đúng (booked, sent, studied), không đặt would have trong vế if.",
      "Bài chia đoạn rõ (thực tế, điều lẽ ra đã khác, tiếc nuối, bài học), nối ý bằng In addition, As a result, However.",
      "Có một câu bài học cho lần sau.",
    ],
    minWords: 150,
  }),
});

const thuyetTrinh = lesson({
  slug: "thuyet-trinh",
  title: "Thuyết trình",
  minutes: 35,
  lecture: {
    title: "Dẫn dắt người nghe: chuyển ý, chỉ lại ý trước, câu hỏi tu từ và mô tả hình",
    blocks: [
      p("Chị Hà thuyết trình trước ban giám đốc. Số liệu đầy đủ, slide đẹp, nhưng đến phút thứ năm, ba người đã nhìn điện thoại. Vì sao? Chị chuyển ý bằng **And… and next slide…**, đọc hết mười hai con số trên biểu đồ, và kết thúc bằng **That's all.** Người nghe không biết chị đang ở đâu, cái gì quan trọng, và chị muốn họ nhớ điều gì. Bài này dạy bạn những câu nhỏ giúp người nghe **không bao giờ bị lạc**."),
      p("Người đọc có tiêu đề, có thể lật lại trang trước; người nghe thì không. Người thuyết trình phải **nói to cái khung của bài** bằng bốn công cụ: **cụm dẫn dắt** (signposting) khi mở đầu, chuyển ý và kết thúc; **, which means / which suggests…** để chỉ lại cả ý vừa nói và nêu ý nghĩa của nó; **câu hỏi tu từ** để chuẩn bị cho ý chính; và vài câu **mô tả hình ảnh** thật ngắn. Bạn đã biết mệnh đề quan hệ từ B1; ở đây ta chỉ dùng một mẫu cố định của nó."),
      table(
        ["Mục đích", "Cụm từ"],
        ["Nêu trọng tâm và bố cục", "What I'd like to focus on today is… / My talk is divided into three parts."],
        ["Chuyển ý", "Moving on to… / That brings me to… / Let's now turn to…"],
        ["Quay lại ý trước", "As I mentioned earlier,… / Going back to…"],
        ["Nhấn mạnh", "The key point here is… / I'd like to highlight…"],
        ["Tóm tắt và kết thúc", "To sum up,… / That brings me to the end of my talk. Are there any questions?"],
      ),
      ex("What I'd like to focus on today is the cost of delivery.", "Điều tôi muốn tập trung hôm nay là chi phí giao hàng.", "Học như một cụm cố định để mở đầu: What I'd like to focus on is + danh từ. Ở C1 bạn sẽ học đầy đủ kiểu câu nhấn mạnh này."),
      ex("That brings me to my second point: customer feedback.", "Điều đó đưa tôi đến ý thứ hai: phản hồi của khách hàng.", "Chuyển ý mượt mà, thay cho câu cộc lốc Next slide."),
      p("Khi vừa nêu một con số hay một sự việc, hãy nói luôn **nó có nghĩa là gì**: thêm **dấu phẩy + which means / which suggests / which explains why…**. Ở đây **which** thay cho **cả ý phía trước**, không thay cho một danh từ."),
      ex("Online orders doubled in the third quarter, which means we need more warehouse staff.", "Đơn hàng trực tuyến tăng gấp đôi trong quý ba, điều đó có nghĩa là chúng ta cần thêm nhân viên kho.", "Which = việc đơn hàng tăng gấp đôi. Luôn có dấu phẩy trước which."),
      ex("Complaints fell by half after the update, which suggests the new app is working.", "Số khiếu nại giảm một nửa sau bản cập nhật, điều này cho thấy ứng dụng mới đang có hiệu quả.", "Which suggests nhẹ hơn which means: đây là suy luận, chưa phải kết luận chắc chắn."),
      mistake("Sales fell by ten per cent, what means we must cut costs.", "Sales fell by ten per cent, which means we must cut costs.", "Tiếng Việt nói “điều đó có nghĩa là”, chữ “điều” dễ bị dịch thành what. Khi chỉ lại cả ý phía trước, dùng , which; không dùng what hay , that."),
      mistake("Moving on the second part, let's look at the costs.", "Moving on to the second part, let's look at the costs.", "“Chuyển sang” trong tiếng Việt không có giới từ riêng nên người học hay bỏ to. Cụm đúng là move on to + phần tiếp theo."),
      mistake("So why our customers are leaving? Because delivery is too slow.", "So why are our customers leaving? Because delivery is too slow.", "Tiếng Việt hỏi “tại sao khách hàng rời đi?” mà không đảo trật tự, nên người học giữ nguyên câu kể. Câu hỏi tu từ vẫn là câu hỏi thật về ngữ pháp: trợ động từ are đứng trước chủ ngữ."),
      p("**Câu hỏi tu từ** là câu bạn hỏi rồi tự trả lời ngay, để người nghe dừng lại một giây trước ý chính: **So why are customers leaving? The answer is simple: delivery takes too long.** Còn khi chiếu biểu đồ, đừng đọc hết mọi con số: giới thiệu hình, chỉ vào **một** chi tiết, rồi nói ý nghĩa của nó."),
      table(
        ["Bước", "Cụm từ"],
        ["Giới thiệu hình", "This chart shows… / Let's have a look at this graph."],
        ["Chỉ vào một chi tiết", "As you can see,… / If you look at the blue line,…"],
        ["Nêu ý nghĩa", "…, which suggests that… / The main point is that…"],
        ["Bỏ qua chi tiết thừa", "I won't go through every number, but…"],
      ),
      tip("Ngừng một nhịp **sau** mỗi cụm dẫn dắt và **sau** câu hỏi tu từ: **That brings me to costs.** (ngừng) **So why are costs rising?** (ngừng) Câu hỏi bắt đầu bằng why, what, how thường **xuống giọng** ở cuối, không lên giọng như câu hỏi Yes/No."),
      teacher("Tôi đã ngồi nghe rất nhiều bài thuyết trình của học viên. Bài nào cũng đủ ý, nhưng bài hay là bài **người nghe luôn biết mình đang ở đâu**. Trước mỗi buổi thuyết trình, hãy viết sẵn năm câu: câu nêu trọng tâm, câu nêu bố cục, hai câu chuyển ý và câu kết, rồi tập nói to trước gương. Nội dung bạn có thể quên một chút, nhưng năm câu ấy sẽ giữ bạn không lạc. Và đừng đọc slide: slide để người nghe nhìn, còn bạn nói cho họ biết **hình ấy có nghĩa là gì**."),
      summary(
        "Nêu trọng tâm và bố cục ngay đầu: **What I'd like to focus on today is…**, **My talk is divided into three parts.**",
        "Chuyển ý bằng **Moving on to…**, **That brings me to…**; có to sau move on.",
        "Chỉ lại cả ý trước và nêu ý nghĩa: **, which means / which suggests…** (có dấu phẩy, không dùng what).",
        "Câu hỏi tu từ vẫn đảo trợ động từ: **Why are customers leaving?** rồi tự trả lời ngay.",
        "Mô tả hình: giới thiệu, chỉ **một** chi tiết, nêu ý nghĩa. Kết bằng **To sum up…** và mời đặt câu hỏi.",
      ),
    ],
  },
  words: [
    word("handout", "/ˈhænd.aʊt/", "tài liệu phát tay", "I'll give you a handout with the main figures at the end.", "hand|out", 0),
    word("diagram", "/ˈdaɪ.ə.ɡræm/", "sơ đồ, biểu đồ minh họa", "This diagram shows how an order moves through our system.", "di|a|gram", 0, "Ba âm tiết, nhấn âm đầu: DAI-ơ-gram."),
    word("rehearse", "/rɪˈhɜːs/", "tập dượt trước", "We rehearsed the presentation twice before the meeting.", "re|hearse", 1, "Không đọc âm r trước s: /rɪˈhɜːs/. Danh từ là rehearsal."),
    word("visual", "/ˈvɪʒ.u.əl/", "hình ảnh minh họa; thuộc về thị giác", "A simple visual is often clearer than a long explanation.", "vis|u|al", 0, "Chữ s đọc là /ʒ/: VIZH-u-ơl, không đọc “vi-xu-ồn”."),
    word("recap", "/ˈriː.kæp/", "phần tóm tắt nhanh", "Let me give you a quick recap of the main points.", "re|cap", 0),
    word("digress", "/daɪˈɡres/", "nói lan man ra ngoài chủ đề", "Sorry, I'm digressing. Let's go back to the budget.", "di|gress", 1),
    word("pitch", "/pɪtʃ/", "bài trình bày thuyết phục (để bán sản phẩm, ý tưởng)", "Our sales pitch to the investors lasted ten minutes.", "pitch", 0),
  ],
  exercises: [
    mc("b2-5-1", "Sales doubled in May, ___ means we need more drivers.", ["what", "which", "that", "this"], 1, "Dấu phẩy + which chỉ lại cả ý phía trước (việc doanh số tăng gấp đôi). Không dùng what hay , that; còn , this means tạo thành hai câu nối sai bằng dấu phẩy."),
    mc("b2-5-2", "Which sentence moves correctly to the next part of a talk?", ["Moving on the costs, they rose slightly.", "That brings me to our second point: costs.", "Now I'd like to turn on the costs.", "Let's now move to on the costs."], 1, "That brings me to + ý tiếp theo. Các câu kia sai giới từ: moving on to, turn to (turn on là bật máy)."),
    fill("b2-5-3", "Moving on ___ the second part of my talk, let's look at customer feedback.", ["to"], "Move on to + phần tiếp theo. Bỏ to là lỗi rất hay gặp."),
    fill("b2-5-4", "What I'd like to ___ on today is our delivery costs. (tập trung)", ["focus", "concentrate"], "What I'd like to focus on is…: cụm cố định nêu trọng tâm của bài nói."),
    fill("b2-5-5", "Complaints have fallen by half, ___ suggests that the new app is working.", ["which"], "Which thay cho cả ý phía trước, có dấu phẩy ở trước."),
    fill("b2-5-6", "So why ___ our customers choosing other brands? The answer is simple: price.", ["are", "were"], "Câu hỏi tu từ vẫn đảo trợ động từ lên trước chủ ngữ: why are our customers choosing…?"),
    reorder("b2-5-7", "That brings me to the end of my talk.", "Câu báo hiệu sắp kết thúc, thường theo sau là lời cảm ơn và mời đặt câu hỏi."),
    reorder("b2-5-8", "Let's have a look at this chart.", "Have a look at: cụm giới thiệu hình, thân thiện hơn Please look at."),
    reorder("b2-5-9", "So why are our customers leaving?", "Câu hỏi tu từ: why + trợ động từ are + chủ ngữ + V-ing."),
    listen("b2-5-10", "As you can see, the red line shows our online sales.", ["Mọi người có thấy đường màu đỏ không? Đó là doanh số cửa hàng.", "Đường màu đỏ cho thấy doanh số trực tuyến đang giảm.", "Như mọi người thấy, đường màu đỏ thể hiện doanh số bán hàng trực tuyến của chúng ta.", "Như tôi đã nói, doanh số trực tuyến được tô màu đỏ."], 2, "As you can see: như mọi người có thể thấy, dùng khi chỉ vào hình."),
    listen("b2-5-11", "I won't go through every number, but the main point is that costs are rising.", ["Tôi sẽ đọc từng con số, vì chi phí đang tăng.", "Tôi sẽ không đi qua từng con số, nhưng ý chính là chi phí đang tăng.", "Tôi không có đủ số liệu, nhưng có vẻ chi phí đang tăng.", "Tôi sẽ không nói về chi phí vì nó không quan trọng."], 1, "Go through every number: đi qua từng con số. Người nói chủ động bỏ chi tiết để nêu ý chính."),
    correct("b2-5-12", "Our costs rose by twenty per cent, what explains the lower profit.", "Our costs rose by twenty per cent, which explains the lower profit.", "Chỉ lại cả ý phía trước dùng , which; không dùng what."),
    correct("b2-5-13", "Moving on the next slide, you can see our plans for next year.", ["Moving on to the next slide, you can see our plans for next year.", "Moving to the next slide, you can see our plans for next year."], "Move on to + phần tiếp theo: thiếu to thì câu sai."),
    correct("b2-5-14", "Why customers are choosing our competitors? Because their delivery is faster.", ["Why are customers choosing our competitors? Because their delivery is faster."], "Câu hỏi tu từ vẫn phải đảo trợ động từ: Why are customers choosing…?"),
  ],
  speaking: [
    say("That brings me to the second part of my talk.", "Điều đó đưa tôi đến phần thứ hai của bài nói."),
    say("Sales rose sharply in June, which means we need more staff.", "Doanh số tăng mạnh trong tháng Sáu, nghĩa là chúng ta cần thêm nhân viên."),
    say("So why are customers choosing us? Because we deliver faster.", "Vậy tại sao khách hàng chọn chúng ta? Vì chúng ta giao hàng nhanh hơn."),
  ],
  freeSpeaking: free(
    "Could you give a short introduction to your company, your school or a project you are working on?",
    "Nói phần mở đầu và một phần nội dung của một bài thuyết trình ngắn: nêu trọng tâm, nêu bố cục, dùng một câu chuyển ý, một câu , which means… và một câu hỏi tu từ.",
    "Good morning, everyone. What I'd like to focus on today is Sunrise Travel, a small company that organises tours in northern Vietnam. My talk is divided into three parts: our tours, our customers and our plans. Let's start with our tours. Last year we ran two hundred trips to Ha Giang, which means it is now our most popular route. So why do people choose Ha Giang? The answer is simple: the mountains are amazing. That brings me to our customers.",
  ),
  dialogueQuestions: [
    listenQ("b2-5-d1", "According to Ha, what does the sales chart show?", "A chart. As you can see, sales rose every month, which means the Da Nang shops are running out of stock.", ["Sales fell after May.", "Sales rose every month, and the shops are running short of stock.", "The shops have too much stock.", "Sales stayed flat until May."], 1, "Sales rose every month, which means the Da Nang shops are running out of stock."),
    mc("b2-5-d2", "Why does Peter tell Ha to pause after her question?", ["To give the board a moment to think", "Because she speaks too fast all the time", "So that she has time to change slides", "Because the board might want to answer it"], 0, "Peter: Just pause after it, so the board has a second to think."),
    mc("b2-5-d3", "What does Peter's last comment suggest about the ending Ha has prepared?", ["It does not invite questions from the audience.", "It is much too long.", "It thanks the audience twice.", "It does not sum up the main points."], 0, "Câu hỏi suy luận: Peter nhắc Don't forget to ask for questions, nghĩa là phần kết của Hà chưa có lời mời đặt câu hỏi."),
  ],
  reading: reading({
    title: "Why audiences get lost",
    text: `Most presentation advice is about slides: how many words to use, which colours to choose, whether to add photos. All of that matters, but in my experience as a presentation coach, it is rarely the reason a talk fails. Talks fail because the audience gets lost. Somewhere between the second and the fifth slide, listeners stop knowing where the speaker is going, and once they are lost, they stop listening.

Readers have a big advantage over listeners. A reader can see headings, look back at the previous page or skip to the conclusion. A listener cannot. The speaker has to provide the structure out loud, and the simplest way to do this is with signposts: short phrases that tell the audience what has just happened and what is coming next.

The first signpost belongs at the very start. Before you say anything about your topic, tell people how the talk is organised: "My talk is divided into three parts: the problem, our options and my recommendation." It takes ten seconds, yet it gives the audience a map. After that, every move should be marked. "That brings me to our options" or "Moving on to the costs" may feel unnecessary to the speaker, who knows the plan by heart, but for a listener in the back row they are the difference between following and guessing.

Visuals need signposts too. A common mistake is to show a complex chart and then read out every number on it. A better approach is to name the chart, point to one detail and explain what it means: "This chart shows our delivery times. If you look at the blue line, you'll see that they fell by half in March, which suggests the new system is working." The audience does not need every figure; they need to know why the chart is there.

Rhetorical questions are another useful tool, especially just before a key point. "So why are customers leaving?" makes the audience think for a moment, and when you give the answer, they are ready to hear it. Use them sparingly, though. One or two in a ten-minute talk can be powerful; a question on every slide quickly sounds like a television quiz.

Finally, plan your ending as carefully as your opening. Many speakers simply stop when they reach the last slide, or they say "That's all" and look at the floor. Instead, signal that you are finishing, sum up your main message in one or two sentences and invite questions. Audiences tend to remember beginnings and endings far better than anything in the middle.

None of this requires perfect English. Some of the clearest presenters I have coached spoke English as a second language and made small grammar mistakes throughout. What they never did was leave the audience wondering where they were.`,
    glossary: [
      ["signpost", "biển chỉ đường; cụm từ dẫn dắt người nghe"],
      ["out loud", "thành tiếng"],
      ["by heart", "thuộc lòng"],
      ["figure", "con số"],
      ["rhetorical question", "câu hỏi tu từ"],
      ["sparingly", "một cách dè sẻn, không lạm dụng"],
      ["signal", "báo hiệu"],
    ],
    questions: [
      mc("b2-5-r1", "What is the writer's main argument?", ["Most talks fail because the slides are badly designed.", "Talks usually fail when listeners lose track of the structure, and signposting prevents this.", "Speakers should never use charts in a presentation.", "Only native speakers can give really clear presentations."], 1, "Cả bài lập luận: người nghe bị lạc mới là lý do chính, và cụm dẫn dắt giúp họ không lạc."),
      mc("b2-5-r2", "Why do listeners need signposts more than readers do?", ["Listeners are usually less interested in the topic.", "Listeners cannot see headings or look back at earlier parts.", "Readers are better at understanding numbers.", "Readers usually know the speaker personally."], 1, "A reader can see headings, look back… A listener cannot."),
      fill("b2-5-r3", "According to the writer, the audience does not need every ___ on a chart; they need to know why the chart is there.", ["figure", "number"], "The audience does not need every figure."),
      mc("b2-5-r4", "Why might a speaker feel that signposts are unnecessary?", ["Because the speaker already knows the plan of the talk by heart", "Because the audience has read the slides in advance", "Because signposts make the talk too short", "Because coaches advise against them"], 0, "Câu hỏi suy luận: người nói thuộc lòng bố cục (knows the plan by heart) nên quên rằng người nghe thì không biết."),
      mc("b2-5-r5", "What is the writer's advice about rhetorical questions?", ["Use one on every slide to keep people awake.", "Avoid them in business presentations.", "Use a few of them, especially before key points.", "Let the audience answer them out loud."], 2, "Especially just before a key point… Use them sparingly."),
      mc("b2-5-r6", "What is the purpose of the final paragraph?", ["To reassure speakers that clear structure matters more than perfect grammar", "To criticise speakers who make grammar mistakes", "To advertise the writer's coaching services", "To explain how to design a chart"], 0, "Đoạn cuối trấn an người nói tiếng Anh như ngôn ngữ thứ hai: rõ ràng quan trọng hơn ngữ pháp hoàn hảo."),
    ],
  }),
  dialogue: dialogue(
    "Tập thuyết trình trước buổi họp ban giám đốc",
    "Ngày mai chị Hà thuyết trình về sản phẩm mới trước ban giám đốc. Chị nhờ anh Peter, đồng nghiệp người Úc, nghe thử và góp ý cách dẫn dắt.",
    { A: "Hà, chuyên viên tiếp thị", B: "Peter, đồng nghiệp" },
    A("Peter, could you listen to my opening? I'm presenting to the board tomorrow.", "Peter, anh nghe thử phần mở đầu của em được không? Mai em thuyết trình trước ban giám đốc."),
    B("Sure, go ahead.", "Được chứ, em bắt đầu đi."),
    A("Good morning. What I'd like to focus on today is our new water filter, which we launched in Da Nang in May.", "Chào buổi sáng. Điều tôi muốn tập trung hôm nay là máy lọc nước mới, sản phẩm chúng ta ra mắt ở Đà Nẵng hồi tháng Năm."),
    B("Good start. Do you tell them how the talk is organised?", "Mở đầu tốt. Em có nói cho họ biết bài nói được chia thế nào không?"),
    A("Yes. My talk is divided into three parts: sales, customer feedback and next steps.", "Có ạ. Bài nói của tôi chia làm ba phần: doanh số, phản hồi của khách hàng và bước tiếp theo."),
    B("Very clear. What's on your first slide?", "Rất rõ ràng. Trang đầu tiên của em có gì?"),
    A("A chart. As you can see, sales rose every month, which means the Da Nang shops are running out of stock.", "Một biểu đồ. Như mọi người thấy, doanh số tăng đều hằng tháng, điều đó có nghĩa là các cửa hàng ở Đà Nẵng đang thiếu hàng."),
    B("Nice. You explain the chart instead of reading out the numbers. How do you move on?", "Hay đấy. Em giải thích biểu đồ chứ không đọc từng con số. Em chuyển ý thế nào?"),
    A("That brings me to customer feedback. So why are families choosing our filter? Because it's quiet and easy to clean.", "Điều đó đưa tôi đến phản hồi của khách hàng. Vậy vì sao các gia đình chọn máy lọc của chúng ta? Vì nó chạy êm và dễ vệ sinh."),
    B("I like the question. Just pause after it, so the board has a second to think.", "Anh thích câu hỏi đó. Chỉ cần ngừng một chút sau câu hỏi, để ban giám đốc có một giây suy nghĩ."),
    A("OK. And at the end I say: To sum up, sales are strong, and we'd like to open two more stores. Thank you for listening.", "Vâng. Còn cuối bài em nói: Tóm lại, doanh số rất tốt và chúng tôi muốn mở thêm hai cửa hàng. Cảm ơn mọi người đã lắng nghe."),
    B("Don't forget to ask for questions. Then you're ready for tomorrow.", "Đừng quên mời mọi người đặt câu hỏi. Vậy là em sẵn sàng cho ngày mai rồi."),
  ),
  task: task({
    prompt: "Viết lời thuyết trình ngắn (khoảng 150–200 từ) giới thiệu kết quả một dự án, một sản phẩm hoặc một bộ phận của bạn. Bài phải có câu nêu trọng tâm, câu nêu bố cục, các cụm chuyển ý, một đoạn mô tả ngắn một biểu đồ, một câu hỏi tu từ và phần kết có lời mời đặt câu hỏi.",
    hints: [
      "Mở đầu: Good morning, everyone. What I'd like to focus on today is… rồi My talk is divided into… parts.",
      "Mô tả biểu đồ: This chart shows… As you can see,… , which means / which suggests…",
      "Chuyển ý bằng Let's start with…, That brings me to…, Moving on to…",
      "Đặt một câu hỏi tu từ đúng trật tự (Why are…? / What does this mean?) rồi tự trả lời ngay.",
    ],
    model: "Good morning, everyone, and thank you for coming. What I'd like to focus on today is our online shop, which we opened in January. My talk is divided into three parts: sales, customer feedback and our plans for next year.\n\nLet's start with sales. This chart shows our monthly online orders. As you can see, they rose steadily from January to June, which means the online shop now brings in a third of our revenue. I won't go through every number, but the main point is clear: customers like buying from us online.\n\nThat brings me to customer feedback. So why are customers happy with the shop? The answer is simple: delivery is fast and returns are free. However, some customers say that the website is slow on mobile phones, which suggests we need to improve it.\n\nMoving on to our plans, we would like to launch a mobile app next spring. To sum up, the shop is growing fast, and the app is the next step. Thank you for listening. Are there any questions?",
    checklist: [
      "Có câu nêu trọng tâm (What I'd like to focus on today is…) và câu nêu bố cục.",
      "Mỗi phần mở đầu bằng một cụm dẫn dắt (Let's start with, That brings me to, Moving on to), có to sau moving on.",
      "Có ít nhất một câu , which means / which suggests chỉ lại cả ý phía trước, có dấu phẩy.",
      "Có một câu hỏi tu từ đúng trật tự câu hỏi và được trả lời ngay sau đó.",
      "Mô tả biểu đồ ngắn gọn: giới thiệu hình, chỉ một chi tiết, nêu ý nghĩa, không đọc hết mọi con số.",
      "Kết thúc bằng To sum up và lời mời đặt câu hỏi.",
    ],
    minWords: 150,
  }),
});

const damPhan = lesson({
  slug: "dam-phan-va-thuyet-phuc",
  title: "Đàm phán và thuyết phục",
  minutes: 36,
  lecture: {
    title: "Ngôn ngữ mềm, đề xuất và nhượng bộ",
    blocks: [
      p("Anh Nam, trưởng nhóm kinh doanh ở TP.HCM, ngồi đàm phán với một nhà cung cấp Singapore. Anh mở lời: **Your price is too high. We want ten per cent discount.** Không khí lập tức căng thẳng, và đối phương không nhượng bộ đồng nào. Cùng yêu cầu ấy, nếu anh nói **We were wondering if you could be a little more flexible on price**, cuộc nói chuyện đã khác hẳn. Trong đàm phán, **cách nói** quyết định không kém **điều bạn nói**."),
      p("Người Việt khi đàm phán bằng tiếng Anh hay dùng câu quá thẳng như **We want a lower price.** Người nghe có thể thấy bạn thiếu thiện chí. Hãy **nói giảm, nói mềm** bằng cách dùng thì quá khứ tiếp diễn, động từ khuyết thiếu và từ giảm nhẹ."),
      table(
        ["Câu thẳng", "Câu mềm hơn"],
        ["We want a discount.", "We were wondering if you could offer a discount."],
        ["Your price is too high.", "Your price seems a little high for us."],
        ["Deliver it next week.", "Would you be willing to deliver it next week?"],
        ["That's impossible.", "I'm afraid that might be difficult for us."],
      ),
      table(
        ["Kỹ thuật làm mềm", "Cách dùng", "Ví dụ"],
        ["Quá khứ tiếp diễn", "I was wondering if…", "I was wondering if you could help."],
        ["Động từ khuyết thiếu", "could, might, would", "That might be a problem."],
        ["Từ giảm nhẹ", "a little, slightly, quite", "The price is slightly higher than we expected."],
        ["Lời rào đón", "I'm afraid…, To be honest…", "I'm afraid we can't accept that."],
      ),
      ex("I was wondering if we could extend the deadline.", "Tôi đang băn khoăn không biết chúng ta có thể lùi hạn chót được không.", "Quá khứ tiếp diễn “was wondering” làm lời đề nghị nhẹ nhàng hơn, không mang nghĩa quá khứ."),
      ex("Would you be willing to consider a two-year contract?", "Anh/chị có sẵn lòng cân nhắc một hợp đồng hai năm không?"),
      p("Khi đưa ra **đề xuất có điều kiện**, dùng **If you…, we could/would…** hoặc **provided that / as long as**, những từ các bạn đã học ở bài **Điều kiện không chỉ có if**. Khi **nhượng bộ**, dùng **We're prepared to… if…** để luôn đổi lại một điều có lợi."),
      ex("If you order five hundred units, we could offer a ten per cent discount.", "Nếu quý công ty đặt năm trăm sản phẩm, chúng tôi có thể giảm giá mười phần trăm.", "Vế if dùng hiện tại đơn, vế chính dùng could để lời đề xuất nghe như một khả năng, chưa phải lời hứa chắc chắn."),
      ex("We're prepared to lower the price, provided that you pay within thirty days.", "Chúng tôi sẵn sàng giảm giá, với điều kiện quý công ty thanh toán trong vòng ba mươi ngày.", "Nhượng bộ nhưng luôn kèm điều kiện. Provided that trang trọng hơn if một chút."),
      mistake("I was wondering if could you lower the price.", "I was wondering if you could lower the price.", "Sau “I was wondering if” là trật tự câu kể: chủ ngữ đứng trước động từ, không đảo như câu hỏi. Người Việt nghĩ đây là câu hỏi nên đảo could lên trước."),
      mistake("We will agree provided that you will pay in advance.", "We will agree provided that you pay in advance.", "Sau provided that / as long as dùng thì hiện tại đơn khi nói về tương lai, giống mệnh đề if. Tiếng Việt thêm “sẽ” ở cả hai vế nên người học hay thêm will vào cả hai."),
      mistake("We very want to cooperate with you.", "We would very much like to work with you.", "Dịch từng chữ “chúng tôi rất muốn”. Very không đứng trước động từ; hãy dùng would very much like to hoặc are very keen to."),
      table(
        ["Giai đoạn", "Cụm từ"],
        ["Thăm dò", "How flexible can you be on the price? / What would you say to a two-year contract?"],
        ["Gặp nhau ở giữa", "Could we meet you halfway? / Let's split the difference."],
        ["Chốt thỏa thuận", "So, to confirm, we've agreed on… / I'll put that in writing and send it to you today."],
      ),
      tip("Đừng từ chối bằng **No.** trơn. Hãy mở đầu bằng **I see your point, but…** hoặc **I'm afraid we can't…, but we could…** để giữ không khí hợp tác."),
      teacher("Học trò đi làm hay hỏi tôi: nói mềm như vậy có bị coi là yếu thế không? Không đâu. Kinh nghiệm của tôi là **mềm ở lời, chắc ở điều kiện**. Bạn có thể nói rất lịch sự, nhưng mỗi lần nhượng bộ phải đổi lấy một điều: **We could…, if you…** Trước mỗi buổi đàm phán, hãy viết ra ba câu đề xuất có điều kiện và một câu từ chối lịch sự, rồi tập nói đến khi trôi chảy. Chuẩn bị kỹ thì lúc căng thẳng bạn mới không quay về câu cộc lốc."),
      summary(
        "Làm mềm yêu cầu: **I was wondering if + S + could…**, **Would you be willing to + V?**, thêm **a little, slightly**.",
        "Sau I was wondering if là **trật tự câu kể**: if you could, không phải if could you.",
        "Đề xuất có điều kiện: **If you + hiện tại đơn, we could…**; nhượng bộ: **We're prepared to…, provided that / as long as + hiện tại đơn**.",
        "Từ chối lịch sự: **I'm afraid we can't…, but we could…**; ghi nhận ý kiến: **I see your point, but…**",
        "**Mềm ở lời, chắc ở điều kiện**: mỗi lần nhượng bộ phải đổi lấy một điều có lợi.",
      ),
    ],
  },
  words: [
    word("negotiate", "/nəˈɡəʊ.ʃi.eɪt/", "đàm phán", "We need to negotiate better terms with the supplier.", "ne|go|ti|ate", 1),
    word("compromise", "/ˈkɒm.prə.maɪz/", "sự thỏa hiệp", "Both sides had to make a compromise.", "com|pro|mise", 0),
    word("persuade", "/pəˈsweɪd/", "thuyết phục", "We finally persuaded the supplier to lower the price.", "per|suade", 1, "Trọng âm ở âm tiết sau: per-SUADE; âm đầu đọc nhẹ /pə/, không đọc r. Persuade + người + to V."),
    word("mutual", "/ˈmjuː.tʃu.əl/", "chung, của cả hai bên, lẫn nhau", "We reached an agreement that was to our mutual benefit.", "mu|tu|al", 0, "Ba âm tiết: MIU-chu-ơl. Chữ t đọc là /tʃ/."),
    word("flexible", "/ˈflek.sə.bəl/", "linh hoạt", "We can be flexible on the delivery date.", "flex|i|ble", 0),
    word("proposal", "/prəˈpəʊ.zəl/", "bản đề xuất", "They accepted our proposal after a long discussion.", "pro|pos|al", 1),
    word("concession", "/kənˈseʃ.ən/", "sự nhượng bộ", "We made a small concession on price.", "con|ces|sion", 1),
    word("haggle", "/ˈhæɡ.əl/", "mặc cả, trả giá", "Tourists often haggle over prices at the market.", "hag|gle", 0, "Haggle over / about + thứ đang mặc cả. Thường dùng cho mua bán nhỏ; trong kinh doanh lớn người ta nói negotiate."),
  ],
  exercises: [
    mc("b2-6-1", "Which request is both polite and grammatically correct?", ["Give us a better price, please.", "We want that you improve your price.", "We were wondering if you could improve your price.", "We are wondering if could you improve your price."], 2, "Was wondering if + S + could là cách đề nghị rất mềm mỏng. Câu cuối sai trật tự (could you); please không đủ làm mềm một câu mệnh lệnh; want that you là lỗi dịch từng chữ."),
    mc("b2-6-2", "We can deliver next week as long as you ___ the order today.", ["will confirm", "confirm", "would confirm", "will have confirmed"], 1, "Sau as long as dùng hiện tại đơn khi nói về tương lai."),
    fill("b2-6-3", "Would you be ___ to share the costs? (sẵn lòng)", ["willing", "prepared", "happy"], "Would you be willing / prepared / happy to + V: anh/chị có sẵn lòng…? Không điền able: Would you be able to… chỉ hỏi anh/chị có làm được không, không hỏi có sẵn lòng hay không."),
    fill("b2-6-4", "I'm ___ that we can't accept those terms.", ["afraid", "sorry"], "I'm afraid… (hoặc I'm sorry…) giúp lời từ chối bớt gay gắt."),
    reorder("b2-6-5", "I was wondering if you could lower the price.", "Sau I was wondering if là trật tự câu kể: you đứng trước could, không đảo như câu hỏi."),
    reorder("b2-6-6", "We are prepared to offer a small discount.", "Be prepared to + V: sẵn sàng làm gì, thường dùng khi nhượng bộ."),
    listen("b2-6-7", "I see your point, but we need a longer contract.", ["Tôi hoàn toàn đồng ý với anh/chị.", "Chúng tôi không cần hợp đồng dài hạn.", "Tôi muốn xem lại bản hợp đồng.", "Tôi hiểu ý anh/chị, nhưng chúng tôi cần một hợp đồng dài hơn."], 3, "I see your point, but… vừa ghi nhận ý kiến đối phương vừa đưa ra quan điểm của mình."),
    listen("b2-6-8", "Would you be willing to pay half in advance?", ["Anh/chị có sẵn lòng trả trước một nửa không?", "Anh/chị đã trả trước một nửa chưa?", "Chúng tôi sẽ trả trước một nửa."], 0),
    correct("b2-6-9", "I was wondering if could you extend the payment period.", "I was wondering if you could extend the payment period.", "Sau I was wondering if là trật tự câu kể: you đứng trước could."),
    correct("b2-6-10", "We can offer free delivery as long as you will order before Friday.", "We can offer free delivery as long as you order before Friday.", "Sau as long as dùng hiện tại đơn để nói về tương lai, không dùng will."),
    fill("b2-6-11", "We could extend the payment period to sixty days, ___ that the first payment arrives on time. (với điều kiện)", ["provided", "providing"], "Provided (that) / providing (that): với điều kiện là. Trang trọng hơn if một chút, hay dùng khi nhượng bộ."),
    reorder("b2-6-12", "Could we meet you halfway on the price?", "Meet somebody halfway: mỗi bên nhượng một nửa. On the price đứng cuối, chỉ điều đang đàm phán."),
    correct("b2-6-13", "If you will increase the order, we could offer eight per cent.", ["If you increase the order, we could offer eight per cent.", "If you increased the order, we could offer eight per cent."], "Vế if nói về tương lai dùng hiện tại đơn (hoặc quá khứ đơn nếu muốn nghe dè dặt hơn), không dùng will."),
    fill("b2-6-14", "What would you ___ to a two-year contract? (nghĩ sao về)", ["say"], "What would you say to + danh từ?: cách thăm dò lịch sự, hỏi đối phương có chấp nhận một đề xuất không."),
  ],
  speaking: [
    say("I was wondering if you could offer a small discount.", "Tôi đang nghĩ liệu anh/chị có thể giảm giá một chút không."),
    say("If you order two hundred units, we could deliver for free.", "Nếu anh/chị đặt hai trăm sản phẩm, chúng tôi có thể giao hàng miễn phí."),
    say("I see your point, but we need more time.", "Tôi hiểu ý anh/chị, nhưng chúng tôi cần thêm thời gian."),
  ],
  freeSpeaking: free(
    "Imagine you are buying ten laptops for your office. How would you ask the seller for a better deal?",
    "Nói bạn sẽ đàm phán thế nào để có giá tốt hơn khi mua mười máy tính xách tay cho văn phòng: làm mềm lời đề nghị, đưa ra một đề xuất có điều kiện và từ chối lịch sự một điều bạn không muốn.",
    "First, I would thank the seller and say that the laptops look very good. Then I would say: To be honest, the price seems a little high for us. I was wondering if you could offer a small discount. If we buy ten laptops instead of five, could you give us ten per cent off? If the seller wanted payment in advance, I would say: I'm afraid we can't pay everything now, but we could pay half today.",
  ),
  dialogueQuestions: [
    listenQ("b2-6-d1", "On what condition does Mr Lim accept eight per cent?", "We're prepared to accept eight per cent, provided that you sign a two-year contract.", ["Nam must pay the full amount in advance.", "Nam must sign a two-year contract.", "The first order must be delivered by March.", "Nam must order a thousand units."], 1, "Provided that you sign a two-year contract: với điều kiện ký hợp đồng hai năm."),
    mc("b2-6-d2", "Why does Mr Lim ask how many units Nam is planning to order?", ["He is looking for something he can get in return for a discount.", "He wants to end the negotiation quickly.", "He does not have enough chairs in stock.", "He has forgotten the size of the order."], 0, "Câu hỏi suy luận: ngay sau đó ông Lim đưa ra đề xuất có điều kiện (if you order five hundred units…). Ông hỏi số lượng để đổi một điều kiện lấy mức giảm giá."),
    mc("b2-6-d3", "What have the two men agreed at the end?", ["Six per cent, a one-year contract and delivery in May", "Eight per cent, a two-year contract and delivery by March", "Ten per cent, a two-year contract and free delivery", "Eight per cent and payment in advance"], 1, "Nam tóm tắt: eight per cent, a two-year contract and delivery by March."),
  ],
  reading: reading({
    title: "Your request for revised terms",
    text: `Email 1, 14 May. Subject: Order 7781 for our new office

Dear Mr Lim,

Our staff in Hanoi have been using your office chairs for two years, and they are very happy with them. We are now furnishing our new office in Ho Chi Minh City, and we would like to order three hundred chairs from you.

Having studied your quotation, however, I must say that the total is considerably higher than our budget for this project. We were wondering if you could reduce the price by fifteen per cent. We would also like to discuss the payment period, as thirty days is rather short for an order of this size.

Our new office opens in September, so delivery before the end of August would be essential.

Kind regards,
Tran Hoang Nam

Email 2, 16 May. Subject: Re: Order 7781 for our new office

Dear Mr Tran,

Thank you for your email of 14 May and for your interest in extending our partnership. We were pleased to hear that your staff have been satisfied with our office chairs, and we very much hope to continue working with you.

I have discussed your request with our sales director. To be honest, a fifteen per cent reduction would be very difficult for us at the moment. As you may know, the cost of steel has risen sharply this year, and our own margins are already quite low. I'm afraid we are therefore unable to accept your proposal in its current form.

However, we would like to suggest an alternative. If you increase your order from three hundred to five hundred units, we could offer a reduction of eight per cent on the full order. We would also be prepared to extend your payment period from thirty to sixty days, provided that the first payment arrives on time.

Regarding delivery, I understand that your new offices open in September. We could deliver the first two hundred chairs by the end of July, as long as we receive your confirmation before 15 June. The remaining chairs would follow in August.

I was also wondering whether you would be willing to sign a two-year agreement. A longer contract would allow us to reserve production capacity for you, and we would be happy to fix our prices for the whole period, which would protect you from any further increases.

I realise that this is not exactly what you had hoped for, but I believe it offers real value to both sides. Would you have time for a short call next week to discuss the details?

I look forward to hearing from you.

Kind regards,
Daniel Lim, Regional Sales Manager`,
    glossary: [
      ["partnership", "quan hệ hợp tác"],
      ["reduction", "mức giảm"],
      ["margin", "biên lợi nhuận"],
      ["alternative", "phương án thay thế"],
      ["payment period", "thời hạn thanh toán"],
      ["reserve", "giữ trước, dành riêng"],
      ["production capacity", "năng lực sản xuất"],
      ["furnish", "trang bị đồ đạc, nội thất"],
    ],
    questions: [
      mc("b2-6-r1", "What is the main purpose of Mr Lim's email?", ["To accept Mr Tran's request for a fifteen per cent discount", "To refuse the original request politely and offer other terms", "To end the partnership with Mr Tran's company", "To complain about a late payment"], 1, "Ông Lim từ chối mức giảm mười lăm phần trăm rồi đưa ra một loạt đề xuất thay thế."),
      mc("b2-6-r2", "What must Mr Tran do to get an eight per cent reduction?", ["Pay within thirty days", "Increase the order to five hundred units", "Reply before 14 May", "Collect the chairs himself"], 1, "If you increase your order from three hundred to five hundred units, we could offer a reduction of eight per cent."),
      fill("b2-6-r3", "The first two hundred chairs can arrive by the end of July, as long as the supplier receives confirmation before 15 ___.", ["June"], "As long as we receive your confirmation before 15 June."),
      mc("b2-6-r4", "Why does Mr Lim mention the cost of steel?", ["To explain why he cannot offer a large discount", "To suggest that Mr Tran should buy steel chairs", "To announce a price increase for all customers", "To show that his company is about to close"], 0, "Giá thép tăng và biên lợi nhuận thấp là lý do ông không thể giảm mười lăm phần trăm."),
      mc("b2-6-r5", "Which phrase best describes the tone of Mr Lim's reply?", ["Angry and impatient", "Polite and cooperative, but firm", "Casual and humorous", "Uncertain and confused"], 1, "Ông dùng ngôn ngữ mềm (To be honest, I'm afraid, I was wondering) nhưng vẫn giữ vững điều kiện của mình."),
      mc("b2-6-r6", "Why does Mr Lim offer to fix his prices for two years?", ["To make a longer contract more attractive to Mr Tran", "Because the cost of steel is expected to fall", "Because Mr Tran asked for fixed prices in his email", "To avoid having to deliver the chairs in July"], 0, "Câu hỏi suy luận: Mr Tran không hề hỏi về giá cố định. Ông Lim đưa ra lợi ích này để đổi lấy hợp đồng hai năm mà ông muốn."),
    ],
  }),
  dialogue: dialogue(
    "Đàm phán giá với nhà cung cấp",
    "Anh Nam, trưởng nhóm mua hàng ở TP.HCM, đàm phán với ông Lim, đại diện nhà cung cấp Singapore, về giá và điều khoản của một đơn hàng ghế văn phòng.",
    { A: "Nam, trưởng nhóm mua hàng", B: "Mr Lim, nhà cung cấp" },
    A("Thank you for your proposal, Mr Lim. To be honest, your price seems a little high for us.", "Cảm ơn ông về bản đề xuất. Thật lòng mà nói, mức giá của ông hơi cao so với chúng tôi."),
    B("I see your point, but our chairs last much longer than cheaper models.", "Tôi hiểu ý anh, nhưng ghế của chúng tôi bền hơn nhiều so với các mẫu rẻ hơn."),
    A("We don't doubt that. We were wondering if you could offer a ten per cent discount.", "Chúng tôi không nghi ngờ điều đó. Chúng tôi đang băn khoăn liệu ông có thể giảm giá mười phần trăm không."),
    B("I'm afraid ten per cent might be difficult for us. How many units are you planning to order?", "Tôi e rằng mười phần trăm hơi khó cho chúng tôi. Anh định đặt bao nhiêu chiếc?"),
    A("About five hundred units in the first year.", "Khoảng năm trăm chiếc trong năm đầu."),
    B("In that case, if you order five hundred units, we could offer six per cent.", "Nếu vậy, nếu anh đặt năm trăm chiếc, chúng tôi có thể giảm sáu phần trăm."),
    A("Could we meet you halfway at eight per cent?", "Chúng ta gặp nhau ở giữa, tám phần trăm được không?"),
    B("We're prepared to accept eight per cent, provided that you sign a two-year contract.", "Chúng tôi sẵn sàng chấp nhận tám phần trăm, với điều kiện anh ký hợp đồng hai năm."),
    A("That sounds reasonable. Would you be willing to deliver the first order by March?", "Nghe hợp lý. Ông có sẵn lòng giao đơn đầu tiên trước tháng Ba không?"),
    B("Yes, as long as you confirm the order this week.", "Được, miễn là anh xác nhận đơn hàng trong tuần này."),
    A("Great. So, to confirm, we've agreed on eight per cent, a two-year contract and delivery by March.", "Tuyệt. Vậy để xác nhận, chúng ta đã thống nhất giảm tám phần trăm, hợp đồng hai năm và giao hàng trước tháng Ba."),
    B("Exactly. I'll put that in writing and send it to you today.", "Chính xác. Tôi sẽ ghi lại bằng văn bản và gửi anh ngay hôm nay."),
  ),
  task: task({
    prompt: "Viết email (khoảng 150–200 từ) gửi nhà cung cấp để đàm phán về báo giá họ vừa gửi: làm mềm lời đề nghị giảm giá, đưa ra một đề xuất có điều kiện, và từ chối lịch sự một điều khoản bạn không chấp nhận được (kèm phương án thay thế). Chia email thành các đoạn, mỗi đoạn một ý.",
    hints: [
      "Mở lời mềm: To be honest, the price seems slightly higher than we expected.",
      "Đề nghị bằng We were wondering if you could… (chủ ngữ đứng trước could).",
      "Đề xuất có điều kiện: If you…, we could… hoặc We are prepared to…, provided that…",
      "Từ chối: I'm afraid we can't…, but we could…",
    ],
    model: "Dear Mr Lim,\n\nThank you for your quotation of 3 May for three hundred office chairs. We were very impressed with the samples, and our staff found them extremely comfortable.\n\nTo be honest, however, the price seems slightly higher than we expected. We have received two other offers which are about ten per cent lower. We were wondering if you could be a little more flexible, as we would very much like to work with your company.\n\nIf you offer a seven per cent discount, we could increase our order to three hundred and fifty units. We would also be happy to sign a two-year contract, provided that the prices stay the same for the whole period.\n\nRegarding payment, I'm afraid we can't pay the full amount in advance, as this is against our company policy. However, we are prepared to pay thirty per cent when we confirm the order and the rest within fifteen days of delivery, as long as the chairs arrive before 1 June.\n\nI look forward to hearing from you.\n\nKind regards,\nTran Hoang Nam\nPurchasing Manager",
    checklist: [
      "Không có câu yêu cầu thẳng như We want… hay Your price is too high.",
      "Có ít nhất một câu I/We were wondering if + chủ ngữ + could, đúng trật tự câu kể.",
      "Có một đề xuất có điều kiện dạng If you…, we could…",
      "Có một lời từ chối lịch sự bằng I'm afraid… kèm phương án thay thế.",
      "Sau provided that và as long as dùng hiện tại đơn, không dùng will.",
      "Email chia đoạn (cảm ơn, đề nghị giảm giá, đề xuất có điều kiện, điều khoản thanh toán), nối ý bằng however, as, also.",
    ],
    minWords: 150,
  }),
});

/** End-of-course test: 5 unseen items per chapter, written only for this test. */
const finalTestBase: Exercise[] = [
  // Chapter 1: email, meetings, reporting verbs, calls and online meetings
  mc("b2-f01", "The report isn't on my desk. Anna ___ it yet, because she only started it this morning.", ["must have finished", "can't have finished", "mustn't have finished", "should finish"], 1, "Mới bắt đầu sáng nay nên gần như chắc chắn chưa xong: can't have + V3. Trong tiếng Anh Anh, mustn't không dùng để suy đoán (người Mỹ có nói must not have)."),
  fill("b2-f02", "“Why don't we postpone the launch until June?” → Our designer suggested ___ the launch until June.", ["postponing", "delaying"], "Suggest + V-ing: suggested postponing. Không viết suggested us to postpone."),
  reorder("b2-f03", "How long had the client been waiting for us?", "Hỏi thời lượng tính đến một mốc quá khứ: How long + had + chủ ngữ + been + V-ing (quá khứ hoàn thành tiếp diễn)."),
  listenQ("b2-f04", "What will the speaker be doing at three o'clock tomorrow?", "I'm afraid I won't be able to join the call at three tomorrow, because I'll be flying to Singapore. Could we move it to Thursday morning?", ["Flying to Singapore", "Meeting a client in the office", "Joining the call", "Travelling to Thailand on holiday"], 0, "I'll be flying to Singapore: tương lai tiếp diễn, việc đang diễn ra vào lúc ba giờ ngày mai."),
  correct("b2-f05", "I look forward to meet you at the conference.", "I look forward to meeting you at the conference.", "Look forward to + V-ing, vì to là giới từ."),
  // Chapter 2: conditionals, unless / in case, modal perfects, unreal past
  mc("b2-f06", "Take an umbrella ___ it rains this afternoon.", ["unless", "in case", "provided that", "otherwise"], 1, "In case: làm ngay bây giờ để phòng khi trời mưa."),
  fill("b2-f07", "We ___ have booked a taxi. Our host was already waiting for us at the airport. (không cần, nhưng đã lỡ làm)", ["needn't", "need not"], "Needn't have + V3: đã làm rồi mới thấy không cần thiết."),
  reorder("b2-f08", "I would rather you didn't tell anyone.", "Would rather + người khác + quá khứ đơn: muốn người khác làm (hoặc không làm) gì."),
  listenQ("b2-f09", "What does the speaker regret?", "If I had checked the address before I left, I wouldn't be standing outside the wrong building now.", ["Arriving too early", "Not checking the address before leaving", "Taking the wrong bus", "Forgetting the time of the meeting"], 1, "Câu hỗn hợp: không kiểm tra địa chỉ (quá khứ) nên bây giờ đứng nhầm tòa nhà."),
  correct("b2-f10", "It's time we start preparing for the audit.", ["It's time we started preparing for the audit.", "It is time we started preparing for the audit.", "It's time for us to start preparing for the audit.", "It is time for us to start preparing for the audit."], "It's time + chủ ngữ + động từ dạng quá khứ (thường là quá khứ đơn): lẽ ra phải làm rồi. Muốn giữ nguyên mẫu thì dùng It's time for us to start…"),
  // Chapter 3: presentation language, data, linkers, participle clauses
  mc("b2-f11", "Profits fell ___ twelve per cent, from five million to 4.4 million dollars.", ["by", "to", "at", "of"], 0, "By chỉ mức thay đổi; to chỉ con số đạt được."),
  fill("b2-f12", "The first quarter was very difficult. ___, sales recovered strongly in the second quarter. (tuy nhiên)", ["However", "Nevertheless", "Nonetheless", "Even so", "Still"], "Trạng từ liên kết chỉ sự đối lập đứng sau dấu chấm, có dấu phẩy phía sau."),
  reorder("b2-f13", "Goods damaged during delivery will be replaced.", "Mệnh đề quan hệ rút gọn mang nghĩa bị động: which are damaged thành damaged."),
  listenQ("b2-f14", "What happened to online orders during the quarter?", "Online orders rose sharply in January and then remained stable for the rest of the quarter.", ["They fell slightly and then recovered.", "They increased quickly and then stayed at the same level.", "They stayed the same all quarter.", "They rose slowly every month."], 1, "Rose sharply: tăng mạnh; remained stable: giữ ổn định."),
  correct("b2-f15", "Although the product was expensive, but it sold very well.", ["Although the product was expensive, it sold very well.", "The product was expensive, but it sold very well."], "Đã có although thì không dùng but."),
  // Chapter 4: negotiation, articles, to V or V-ing, complaints
  mc("b2-f16", "I'll never forget ___ the director for the first time. I was so nervous.", ["to meet", "meeting", "meet", "to meeting"], 1, "Never forget + V-ing: nhớ mãi một việc đã làm."),
  fill("b2-f17", "We sincerely apologise ___ the delay in sending your order.", ["for"], "Apologise for + danh từ hoặc V-ing."),
  reorder("b2-f18", "Would you be willing to reduce the price?", "Would you be willing to + V: lời đề nghị mềm mỏng khi đàm phán."),
  listenQ("b2-f19", "What does the speaker offer the customer?", "I'm afraid we can't give you a full refund, but we could replace the damaged items free of charge this week.", ["A full refund", "Free replacement of the damaged items", "A discount on the next order", "Free delivery next month"], 1, "Không hoàn tiền toàn bộ, nhưng thay miễn phí các món bị hỏng."),
  correct("b2-f20", "She is engineer at a large car company.", ["She is an engineer at a large car company.", "She's an engineer at a large car company."], "Sau be, trước nghề nghiệp số ít thường có a/an: an engineer."),
];
const finalTest = finalBank(finalTestBase, FINAL_EXTRA_TIENG_ANH_B2);

export const tiengAnhB2: Course = {
  slug: "tieng-anh-b2",
  title: "Tiếng Anh B2: Tiếng Anh công việc",
  level: "B2",
  goal: "lo-trinh",
  summary: "Cho người đi làm: viết email, họp, thuyết trình và đàm phán bằng tiếng Anh tự tin, đúng văn phong công sở.",
  outcomes: [
    "Viết email công việc trang trọng, lịch sự và rõ ràng, dài khoảng 150–200 từ",
    "Tham gia họp và gọi điện: suy đoán, xen ngang và hỏi lại một cách khéo léo",
    "Tường thuật lời người khác bằng động từ tường thuật (suggest, admit, refuse, apologise for…) và rút kinh nghiệm bằng câu điều kiện, wish, should have",
    "Thuyết trình có dẫn dắt rõ ràng, mô tả số liệu và viết đoạn văn mạch lạc với từ nối phù hợp",
    "Đàm phán bằng ngôn ngữ mềm mỏng và xử lý khiếu nại",
    "Đọc hiểu bài báo, báo cáo và email công việc dài 400–600 từ",
  ],
  audience: [
    "Người đi làm cần dùng tiếng Anh với đồng nghiệp, khách hàng hoặc đối tác nước ngoài",
    "Người đã học xong B1 muốn nâng tiếng Anh lên mức làm việc chuyên nghiệp",
  ],
  teacher: {
    name: "Thầy Michael Grant",
    initials: "MG",
    bio: "Người dẫn dắt khóa B2. Chú trọng tiếng Anh công việc: họp, email, thuyết trình và xử lý tình huống.",
  },
  faqs: [
    { q: "Mình cần trình độ nào để học khóa B2?", a: "Bạn nên nắm chắc ngữ pháp B1 như thì hiện tại hoàn thành, câu bị động và câu điều kiện loại 1, 2. Nếu chưa chắc, hãy làm bài kiểm tra xếp lớp trước." },
    { q: "Học xong B2 thì học gì tiếp?", a: "Bạn học tiếp khóa C1 để luyện diễn đạt tinh tế và học thuật hơn." },
    { q: "Học xong có chứng chỉ không?", a: "Có. Khi học hết các bài và đạt từ 70% bài kiểm tra cuối khóa, bạn nhận chứng chỉ hoàn thành khóa B2 của trang. Chứng chỉ này ghi nhận việc bạn đã học xong khóa, không thay thế các chứng chỉ quốc tế như IELTS hay TOEIC." },
  ],
  finalTest,
  status: "open",
  modules: [
    chapter(1, "Giao tiếp nơi công sở", [vietEmail, hopThaoLuan, tuongThuat, nGoiDienVaHopTrucTuyen, nCacThiHoanThanhTiepDien]),
    chapter(2, "Giả định, tiếc nuối và mẫu động từ", [tiecNuoi, nDieuKienKhongChiIf, nDongTuKhuyetThieuQuaKhu, nGiaDinhKhongThat, nToVHayVIng]),
    chapter(3, "Trình bày và viết", [thuyetTrinh, nMoTaSoLieu, nTuNoiNangCao, nNhuongBoVaDoiLap, nRutGonMenhDe]),
    chapter(4, "Thuyết phục và xử lý tình huống", [damPhan, nMaoTu, nNhoVaSaiBao, nCauTaoTuVaKetHopTu, nThanPhienVaXuLy]),
  ],
};
