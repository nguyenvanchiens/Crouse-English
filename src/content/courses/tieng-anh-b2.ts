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
    word("request", "/rɪˈkwest/", "yêu cầu, đề nghị", "We have received your request.", "re|quest", 1, "Trọng âm rơi vào âm tiết thứ hai: re-QUEST."),
    word("regarding", "/rɪˈɡɑː.dɪŋ/", "về việc, liên quan đến", "I am writing regarding your invoice.", "re|gard|ing", 1),
    word("enquiry", "/ɪnˈkwaɪə.ri/", "lời hỏi thông tin, yêu cầu thông tin", "Thank you for your enquiry about our training courses.", "en|quir|y", 1, "Trọng âm ở âm tiết thứ hai: en-QUI-ry. Động từ là enquire (hỏi thông tin)."),
    word("invoice", "/ˈɪn.vɔɪs/", "hóa đơn", "Please find attached the invoice for March.", "in|voice", 0, "Nhấn âm đầu IN-voice; đuôi /s/, không đọc thành “voi-dơ”."),
    word("confirm", "/kənˈfɜːm/", "xác nhận", "Could you confirm your attendance?", "con|firm", 1),
    word("recipient", "/rɪˈsɪp.i.ənt/", "người nhận", "Check the recipient's address before you click send.", "re|cip|i|ent", 1),
    word("urgent", "/ˈɜː.dʒənt/", "khẩn cấp", "This is an urgent matter, so please reply today.", "ur|gent", 0),
  ],
  exercises: [
    mc("b2-1-1", "Which opening is most suitable for an email to a new client?", ["Hey guys,", "Dear Ms Nguyen,", "Hi mate,"], 1, "Với khách hàng mới, dùng Dear + danh xưng + họ."),
    mc("b2-1-2", "Would you mind ___ the report before the meeting?", ["to check", "check", "checked", "checking"], 3, "Khi nhờ ai làm gì, Would you mind đi với V-ing."),
    fill("b2-1-3", "I look forward to ___ from you.", ["hearing"], "Look forward to + V-ing, vì “to” ở đây là giới từ."),
    fill("b2-1-4", "Please find ___ the invoice for March.", ["attached", "enclosed"], "Please find attached (hoặc enclosed) là cụm cố định khi gửi kèm tài liệu."),
    reorder("b2-1-5", "Would you mind checking the figures again?", "Would you mind + V-ing: nhờ ai làm gì một cách rất lịch sự. Again đứng cuối câu, sau tân ngữ."),
    reorder("b2-1-6", "I am following up on my previous email.", "Follow up on: nhắc lại, hỏi tiếp về một việc đã gửi trước đó."),
    listen("b2-1-7", "Could you confirm the delivery date by Thursday?", ["Anh/chị đã giao hàng vào thứ Năm chưa?", "Anh/chị có thể xác nhận ngày giao hàng trước thứ Năm không?", "Chúng tôi sẽ giao hàng vào thứ Năm."], 1),
    listen("b2-1-8", "I'm writing to enquire about your training courses.", ["Tôi viết thư để hỏi về các khóa đào tạo của quý công ty.", "Tôi viết thư để đăng ký một khóa đào tạo.", "Tôi viết thư để phàn nàn về khóa đào tạo."], 0, "Enquire about nghĩa là hỏi thông tin về điều gì."),
    correct("b2-1-9", "We look forward to receive your reply.", "We look forward to receiving your reply.", "Trong look forward to, “to” là giới từ nên động từ theo sau phải ở dạng V-ing: receiving."),
    correct("b2-1-10", "Would you mind to send me the agenda?", "Would you mind sending me the agenda?", "Would you mind luôn đi với V-ing, không đi với to V. Người Việt quen “phiền anh gửi giúp” nên hay chêm to vào."),
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
    mc("b2-1-d3", "What does Mark think of Thu's sentence about the delivery date?", ["It is polite and says exactly what to do and when.", "It is too informal for a German partner.", "It should be replaced by a phone call.", "It gives Mr Weber too little time."], 0, "Mark nói: Perfect. It's polite, and it tells him exactly what to do and when."),
  ],
  reading: reading({
    title: "Why your emails go unanswered",
    text: `Every working day, the average office employee receives more than a hundred emails. Most of them are opened, read for a few seconds and then answered, filed or forgotten. According to communication trainers, the emails that get forgotten usually share three problems: a vague subject line, an unclear purpose and a tone that makes the reader uncomfortable.

The subject line is the first thing a busy reader sees, and often the only thing. A subject such as "Hello" or "Urgent!!!" tells the reader nothing, so the message is easily left for later. A subject like "Revised quotation for order 245", on the other hand, allows the recipient to decide in a second whether the email needs attention today.

The second problem is purpose. Many writers spend a whole paragraph on greetings and background before they explain what they actually want. Trainers recommend stating the reason for writing in the very first sentence, for example "I am writing to enquire about your delivery times." The final sentence should then tell the reader exactly what to do and by when.

Tone is the most difficult area, especially for people who are writing in a second language. A direct instruction such as "Send me the report" may be perfectly normal in some languages, but in English it can sound rude, even when the word "please" is added. Polite forms such as "Could you…?" or "I would appreciate it if you could…" take only a few more words, yet they make the reader far more willing to help.

Interestingly, being polite does not mean being long. The most effective business emails are often under a hundred and fifty words. They are clear, they are friendly, and they respect the reader's time. As one trainer puts it, "A good email is like a good meeting: it starts on time, it has a clear goal and it finishes early."

So before you click send, read your message once more and ask yourself one question: would you be happy to receive it?`,
    glossary: [
      ["vague", "mơ hồ, không rõ ràng"],
      ["quotation", "bảng báo giá"],
      ["purpose", "mục đích"],
      ["tone", "giọng điệu, văn phong"],
      ["instruction", "lời chỉ thị, mệnh lệnh"],
      ["effective", "hiệu quả"],
    ],
    questions: [
      mc("b2-1-r1", "What is the main idea of the article?", ["Business emails should always be longer than a hundred and fifty words.", "A clear subject line, a clear purpose and a polite tone help emails get answered.", "Office workers should stop using email for important matters.", "Polite emails take too much time to write."], 1, "Cả bài xoay quanh ba vấn đề: tiêu đề, mục đích và giọng điệu."),
      mc("b2-1-r2", "According to the article, where should the writer state the reason for writing?", ["Only in the subject line", "In the last sentence", "In the first sentence", "After the greetings and background"], 2, "Trainers recommend stating the reason for writing in the very first sentence."),
      fill("b2-1-r3", "A specific subject line allows the ___ to decide in a second whether the email needs attention today.", ["recipient", "reader"], "Bài viết: allows the recipient to decide in a second…"),
      mc("b2-1-r4", "What can we infer about adding \"please\" to a direct instruction?", ["It always makes the instruction polite enough.", "It may not stop the instruction sounding rude.", "It is too formal for business English.", "It should only be used with close colleagues."], 1, "Bài viết nói câu mệnh lệnh vẫn có thể nghe thô lỗ even when the word please is added."),
      mc("b2-1-r5", "Why does the writer quote the trainer's comparison with a good meeting?", ["To show that meetings are more useful than emails", "To support the point that a good email is clear, focused and short", "To suggest that emails should be sent before meetings", "To criticise trainers who give too much advice"], 1, "Câu so sánh minh họa cho ý ngay trước đó: email tốt rõ ràng, có mục tiêu và ngắn gọn."),
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
    word("budget", "/ˈbʌdʒ.ɪt/", "ngân sách", "The project is already over budget.", "bud|get", 0),
    word("summarise", "/ˈsʌm.ər.aɪz/", "tóm tắt", "Let me summarise what we have agreed.", "sum|ma|rise", 0),
  ],
  exercises: [
    mc("b2-2-1", "The lights are off in his office. He ___ gone home.", ["must have", "can't have", "mustn't have"], 0, "Có bằng chứng rõ ràng nên dùng must have: chắc hẳn đã."),
    mc("b2-2-2", "She ___ sent the file. My inbox is empty.", ["must have", "can't have", "should"], 1, "Hộp thư trống nên gần như chắc chắn cô ấy chưa gửi: can't have."),
    reorder("b2-2-3", "Could you say that again?", "Cách hỏi lại lịch sự khi chưa nghe rõ, thay cho câu cộc lốc What? Có thể thêm Sorry ở đầu cho mềm hơn."),
    fill("b2-2-4", "I'm not sure why he's late. He might have ___ the bus. (miss)", ["missed"], "Sau might have là động từ ở dạng V3 (quá khứ phân từ): miss thành missed."),
    fill("b2-2-5", "Could you ___ what you mean by “flexible hours”? (làm rõ)", ["clarify", "explain"], "Clarify hoặc explain đều dùng để nhờ người khác giải thích rõ hơn."),
    reorder("b2-2-6", "Shall we move on to the next item?", "Câu chuyển sang mục tiếp theo trong chương trình họp."),
    listen("b2-2-7", "Sorry, I didn't quite catch that.", ["Xin lỗi, tôi không đồng ý.", "Xin lỗi, tôi đến muộn.", "Xin lỗi, tôi chưa nghe rõ lắm."], 2, "Catch ở đây nghĩa là nghe kịp, nghe rõ."),
    listen("b2-2-8", "They can't have read the proposal yet.", ["Chắc chắn họ đã đọc bản đề xuất.", "Họ không thể nào đã đọc bản đề xuất rồi.", "Họ không được phép đọc bản đề xuất."], 1),
    correct("b2-2-9", "She mustn't have seen my message. She hasn't opened it yet.", ["She can't have seen my message. She hasn't opened it yet.", "She couldn't have seen my message. She hasn't opened it yet."], "Khi suy đoán “không thể nào đã”, tiếng Anh Anh dùng can't have (hoặc couldn't have) + V3. Mustn't thường nghĩa là cấm; tiếng Anh Mỹ có dùng must not have, nhưng khóa này theo chuẩn Anh."),
    correct("b2-2-10", "The manager must have forget about the meeting.", "The manager must have forgotten about the meeting.", "Sau have phải là V3: forget, forgot, forgotten."),
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
    mc("b2-2-d2", "According to Lan, why has the client not replied yet?", ["They did not like the proposal.", "They are probably busy with an audit.", "They sent their reply to Tuan by mistake.", "They have changed their manager."], 1, "Lan đoán: They must have been busy with the audit this week."),
    mc("b2-2-d3", "What have Lan and David agreed to do at the end of the meeting?", ["David will call the client and Lan will update Tuan.", "Lan will call the client and David will update Tuan.", "They will wait for the client to reply.", "They will stop the meeting until Tuan arrives."], 0, "Lan chốt: you'll call the client, and I'll update Tuan."),
  ],
  reading: reading({
    title: "The silent participant",
    text: `When a British software company opened an office in Ho Chi Minh City three years ago, its managers were delighted with the quality of the local engineers. After a few months, however, they noticed a problem. In online meetings with the London team, the Vietnamese engineers rarely spoke. The London managers assumed that the engineers must have had nothing to add, or that they might not have understood the discussion.

Both assumptions were wrong. When the company asked an external consultant to interview the team, she discovered that the engineers had plenty of ideas. They simply did not feel comfortable interrupting. "In our culture, you wait until someone asks for your opinion," one engineer explained. "In London, nobody asked us, because they expected us to jump in."

The consultant also found that fast speech was a barrier. Several engineers admitted that they had missed important details because they had been too embarrassed to say "Sorry, I didn't quite catch that." Looking back, the managers realised that some expensive mistakes could have been avoided if the engineers had felt free to ask questions.

The company made three simple changes. First, every meeting now has an agenda that is sent out a day in advance, so that participants can prepare their comments. Second, the chair invites each office to speak in turn, instead of waiting for volunteers. Third, the team agreed on a few standard phrases, such as "Can I just come in here?" and "Could you clarify what you mean?", which everyone is encouraged to use.

The results have been impressive. Within six months, the number of comments from the Vietnamese team had tripled, and the London managers say that the quality of their decisions has improved. "We thought we had a language problem," one director said. "In fact, we had a meeting problem."

The lesson is clear: silence in a meeting does not always mean agreement.`,
    glossary: [
      ["assume", "cho rằng, giả định"],
      ["assumption", "sự giả định"],
      ["consultant", "chuyên gia tư vấn"],
      ["barrier", "rào cản"],
      ["embarrassed", "ngại ngùng, xấu hổ"],
      ["chair", "người chủ trì cuộc họp"],
      ["volunteer", "người xung phong"],
      ["triple", "tăng gấp ba"],
    ],
    questions: [
      mc("b2-2-r1", "What is the article mainly about?", ["Why a company closed its office in Ho Chi Minh City", "How a company found the real reason for its engineers' silence and solved it", "Why Vietnamese engineers need better technical training", "How to choose a good external consultant"], 1, "Bài kể vấn đề (kỹ sư im lặng), nguyên nhân thật và ba thay đổi đã giải quyết nó."),
      mc("b2-2-r2", "What did the London managers first believe about the silent engineers?", ["They were unhappy with their salaries.", "They had nothing to add or had not understood.", "They were too busy to attend the meetings.", "They disagreed with the London team."], 1, "The managers assumed that the engineers must have had nothing to add, or that they might not have understood."),
      fill("b2-2-r3", "Today every meeting has an agenda that is sent out a ___ in advance.", ["day"], "Bài viết: an agenda that is sent out a day in advance."),
      mc("b2-2-r4", "What does the director mean by \"In fact, we had a meeting problem\"?", ["The engineers' English was the main cause.", "The way the meetings were run was the real cause of the silence.", "The company should stop holding online meetings.", "The London managers spoke too slowly."], 1, "Khi đổi cách tổ chức họp, số ý kiến tăng gấp ba, nên vấn đề nằm ở cách họp chứ không ở ngôn ngữ."),
      mc("b2-2-r5", "What is the purpose of the last sentence of the article?", ["To give a general lesson that goes beyond this one company", "To criticise the Vietnamese engineers", "To advertise the consultant's services", "To suggest that meetings should be shorter"], 0, "Câu cuối rút ra bài học chung cho mọi cuộc họp: im lặng không có nghĩa là đồng ý."),
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
  title: "Tường thuật lời nói",
  minutes: 34,
  lecture: {
    title: "Câu tường thuật và lùi thì",
    blocks: [
      p("Vừa gặp khách hàng Nhật xong, sếp gọi điện hỏi: **So what did they say?** Bạn phải kể lại: khách nói gì, hỏi gì, yêu cầu gì. Nếu bạn nói “He say he want discount”, sếp vẫn hiểu, nhưng bạn sẽ mất điểm chuyên nghiệp. Kể lại lời người khác cho chính xác là việc người đi làm làm mỗi ngày: báo cáo cho sếp, viết biên bản họp, chuyển lời cho đồng nghiệp."),
      p("Khi kể lại lời người khác, ta dùng **câu tường thuật**. Tiếng Việt chỉ cần thêm “anh ấy nói là…”, nhưng tiếng Anh thường phải **lùi thì** một bậc khi động từ tường thuật ở quá khứ."),
      table(
        ["Lời nói trực tiếp", "Câu tường thuật"],
        ["“I work in sales.”", "She said (that) she worked in sales."],
        ["“We are reviewing the plan.”", "He said they were reviewing the plan."],
        ["“I have sent the invoice.”", "She said she had sent the invoice."],
        ["“I will call you tomorrow.”", "He said he would call me the next day."],
        ["“We can meet on Monday.”", "They said they could meet on Monday."],
      ),
      p("Khi kể lại vào một thời điểm khác, các từ chỉ **thời gian và nơi chốn** cũng phải đổi theo, vì “hôm nay” của người nói đã không còn là hôm nay nữa."),
      table(
        ["Lời nói trực tiếp", "Câu tường thuật"],
        ["today", "that day"],
        ["tomorrow", "the next day / the following day"],
        ["yesterday", "the day before / the previous day"],
        ["next week", "the following week"],
        ["here / this", "there / that"],
      ),
      p("Với câu hỏi, dùng **asked** và đưa câu về **trật tự câu kể** (chủ ngữ đứng trước động từ), giống hệt câu hỏi gián tiếp **Could you tell me…?** các bạn đã học ở B1. Câu hỏi Yes/No dùng **if** hoặc **whether**. Với lời yêu cầu, dùng **asked/told + tân ngữ + to V**; lời dặn đừng làm gì thì dùng **told + tân ngữ + not to V**: She told me not to worry."),
      ex("She asked me where the meeting room was.", "Cô ấy hỏi tôi phòng họp ở đâu.", "Câu gốc là “Where is the meeting room?”. Khi tường thuật, không viết “where was the meeting room” mà đưa chủ ngữ lên trước động từ."),
      ex("The manager asked if we had finished the report.", "Quản lý hỏi chúng tôi đã làm xong báo cáo chưa.", "Câu gốc là “Have you finished the report?”. Câu hỏi Yes/No nên dùng if, và have finished lùi thành had finished."),
      ex("He told me to send the file before noon.", "Anh ấy bảo tôi gửi tệp trước buổi trưa."),
      p("Động từ tường thuật khác **said** giúp câu chính xác hơn: **explain that**, **promise to V**, **suggest + V-ing** hoặc **suggest that + S + V**, **remind + sb + to V**."),
      ex("She reminded me to book the meeting room.", "Cô ấy nhắc tôi đặt phòng họp.", "Remind + người + to V. Một chữ reminded thay được cả câu dài “She said: Don't forget to book the room.”"),
      mistake("He suggested me to call the client.", "He suggested calling the client.", "Suggest không đi với “sb + to V”. Dùng suggest + V-ing hoặc suggest that I (should) call the client. Người Việt dịch từng chữ “anh ấy gợi ý tôi gọi” nên hay đặt tân ngữ ngay sau suggest."),
      mistake("She said me that the price was too high.", "She told me that the price was too high.", "Said không có tân ngữ chỉ người đứng ngay sau. Muốn nói với ai thì dùng told + người. Tiếng Việt “nói với tôi” và “bảo tôi” gần giống nhau nên người học hay dùng lẫn."),
      mistake("He asked me did I finish the report.", "He asked me if I had finished the report.", "Người Việt giữ nguyên câu hỏi vì tiếng Việt chỉ cần thêm “hỏi”. Tiếng Anh phải bỏ trợ động từ did, thêm if và lùi thì."),
      tip("Nếu thông tin **vẫn còn đúng** ở hiện tại, có thể không lùi thì: **She said the office opens at eight.** Nhưng trong văn viết trang trọng, lùi thì vẫn an toàn hơn."),
      teacher("Học trò của tôi hay cố nhớ cả bảng lùi thì rồi rối tung lên. Tôi dặn thế này: **cứ lùi một bậc về quá khứ**, hiện tại thành quá khứ, quá khứ thành quá khứ hoàn thành, will thành would, can thành could. Mỗi tối, hãy kể lại bằng tiếng Anh ba câu mà ai đó nói với bạn trong ngày, bắt đầu bằng **He said…**, **She asked…**, **My boss told me to…** Làm đều hai tuần, lùi thì sẽ thành phản xạ."),
      summary(
        "Động từ tường thuật ở quá khứ thì **lùi một bậc**: is → was, has sent → had sent, will → would, can → could.",
        "Đổi từ chỉ thời gian, nơi chốn: tomorrow → **the next day**, yesterday → **the day before**, here → **there**.",
        "Câu hỏi tường thuật dùng **trật tự câu kể**; câu hỏi Yes/No thêm **if / whether**: She asked if I had finished.",
        "Lời yêu cầu: **told / asked + người + (not) to V**. Said không có người đứng ngay sau; muốn có người thì dùng **told me**.",
        "Động từ chính xác hơn said: **suggest + V-ing**, **remind + người + to V**, **promise to V**, **explain that…**",
      ),
    ],
  },
  words: [
    word("claim", "/kleɪm/", "khẳng định, cho rằng (chưa chắc đúng)", "The supplier claimed that the goods had left the factory on time.", "claim", 0, "Nhớ bật âm /m/ ở cuối và đọc nguyên âm đôi /eɪ/: clay-m."),
    word("mention", "/ˈmen.ʃən/", "nhắc đến, đề cập", "She mentioned that the budget had been cut.", "men|tion", 0),
    word("deny", "/dɪˈnaɪ/", "phủ nhận", "He denied making the mistake.", "de|ny", 1),
    word("insist", "/ɪnˈsɪst/", "khăng khăng, nhất quyết", "The client insisted on a lower price.", "in|sist", 1),
    word("recommend", "/ˌrek.əˈmend/", "khuyên, đề xuất", "I recommend hiring an external consultant.", "rec|om|mend", 2),
    word("complain", "/kəmˈpleɪn/", "phàn nàn", "Several customers complained about the delay.", "com|plain", 1),
    word("admit", "/ədˈmɪt/", "thừa nhận", "She admitted that the figures were wrong.", "ad|mit", 1),
    word("warn", "/wɔːn/", "cảnh báo", "He warned us not to sign the contract yet.", "warn", 0, "Đọc giống “worn”, không đọc thành “wan”."),
  ],
  exercises: [
    mc("b2-3-1", "“I am working on the budget.” She said she ___ on the budget.", ["is working", "was working", "has worked"], 1, "Hiện tại tiếp diễn lùi thành quá khứ tiếp diễn."),
    mc("b2-3-2", "Which sentence is correct?", ["He asked me where was the file.", "He asked me where is the file.", "He asked me where the file was.", "He asked me where the file is it."], 2, "Câu hỏi tường thuật dùng trật tự câu kể: chủ ngữ trước động từ."),
    fill("b2-3-3", "“I will finish it tomorrow.” He promised he ___ finish it the next day.", ["would"], "Will lùi thì thành would."),
    fill("b2-3-4", "She suggested ___ the meeting to Friday. (dời lịch)", ["moving", "postponing", "rescheduling", "changing", "shifting", "pushing"], "Suggest + V-ing: moving, postponing hay rescheduling đều đúng."),
    reorder("b2-3-5", "The manager told us to finish the report.", "Told + người + to V dùng để tường thuật lời yêu cầu. Không dùng said us hay suggested us."),
    reorder("b2-3-6", "She asked if I had read the contract.", "Câu hỏi Yes/No trong tường thuật dùng if, và thì hiện tại hoàn thành lùi thành quá khứ hoàn thành."),
    listen("b2-3-7", "He explained that the shipment had been delayed.", ["Anh ấy hỏi vì sao lô hàng bị chậm.", "Anh ấy hứa sẽ giao hàng đúng hạn.", "Anh ấy phàn nàn về lô hàng.", "Anh ấy giải thích rằng lô hàng đã bị chậm."], 3),
    listen("b2-3-8", "She told me not to worry about the deadline.", ["Cô ấy bảo tôi đừng lo về hạn chót.", "Cô ấy lo lắng về hạn chót.", "Cô ấy hỏi tôi về hạn chót."], 0, "Told + người + not to V: bảo ai đừng làm gì."),
    correct("b2-3-9", "She said me that the contract was ready.", ["She told me that the contract was ready.", "She told me the contract was ready.", "She said to me that the contract was ready.", "She said that the contract was ready.", "She said the contract was ready."], "Said không đi với người đứng ngay sau. Muốn nói với ai thì dùng told me (hoặc said to me)."),
    correct("b2-3-10", "The client asked me when would the goods arrive.", "The client asked me when the goods would arrive.", "Câu hỏi tường thuật dùng trật tự câu kể: chủ ngữ the goods đứng trước would, không đảo như câu hỏi trực tiếp."),
  ],
  speaking: [
    say("She said she would send the report the next day.", "Cô ấy nói sẽ gửi bản báo cáo vào ngày hôm sau."),
    say("The client asked if we could offer a discount.", "Khách hàng hỏi liệu chúng tôi có thể giảm giá không."),
    say("My manager suggested hiring two more people.", "Quản lý của tôi đề xuất tuyển thêm hai người."),
  ],
  freeSpeaking: free(
    "Tell me about something important that someone said to you recently at work or at school.",
    "Kể lại một cuộc trò chuyện gần đây với sếp, đồng nghiệp hoặc thầy cô: người đó nói gì, hỏi gì, yêu cầu hoặc gợi ý gì. Dùng said, told, asked, suggested, reminded và nhớ lùi thì.",
    "Last Friday my manager called me into her office. She said that she was very happy with my work on the new website. Then she asked me whether I would like to lead a small team next year. I was surprised, so I told her that I needed some time to think. She suggested talking to two of the team leaders first, and she reminded me to give her an answer by the end of the month.",
  ),
  dialogueQuestions: [
    listenQ("b2-3-d1", "What did Mr Tanaka ask for?", "Yes. He asked if we could offer a five per cent discount on the next order.", ["Faster delivery for the next order", "A five per cent discount on the next order", "A meeting in Osaka next week", "A five-year contract"], 1, "He asked if we could offer a five per cent discount on the next order."),
    mc("b2-3-d2", "What problem did Mr Tanaka mention?", ["The first shipment arrived two weeks late.", "Two boxes had arrived damaged.", "The price was higher than agreed.", "The wrong products were sent."], 1, "Minh kể: He explained that two boxes had arrived damaged."),
    mc("b2-3-d3", "How does Sophie react to the news about the next order and the meeting in Osaka?", ["She is worried about the cost of the trip.", "She is pleased and plans to call Mr Tanaka.", "She wants Minh to cancel the meeting.", "She is angry that Minh promised a discount."], 1, "Sophie nói Great news và nhờ Minh nhắc chị gọi cho ông Tanaka vào thứ Sáu."),
  ],
  reading: reading({
    title: "Coffee chain promises to cut waiting times",
    text: `Hanoi-based coffee chain Morning Bean has promised to reduce waiting times at its busiest branches after a wave of complaints on social media.

At a press conference on Tuesday, the company's chief executive, Ms Pham Lan Anh, admitted that service had not kept up with the chain's rapid growth. She explained that the number of branches had doubled in two years, but that the ordering system had not changed at all. "Some customers are waiting twenty minutes for a coffee," she said. "That is simply not acceptable."

Ms Pham told reporters that the company would introduce a mobile ordering app in March. She said that customers would be able to order and pay before they arrived, and she promised that every branch would have at least two extra staff members during the morning rush.

Not everyone was convinced. One reporter asked whether the new app would really solve the problem, since many older customers preferred to order at the counter. Ms Pham insisted that the counters would stay open, and she denied that the company was trying to replace its staff with technology. "Our baristas are the heart of our business," she said.

Customer groups gave the plan a cautious welcome. The head of a local consumer organisation said that it sounded reasonable, but she warned that promises were easy to make. She suggested publishing average waiting times on the company website every month, so that customers could check whether the situation was really improving.

Morning Bean's share price rose by three per cent after the press conference. However, some analysts claimed that the real test would come in the summer, when demand for iced drinks usually reaches its peak.

In the meantime, the company has asked customers to send their feedback through its website, and it has promised to reply to every message within forty-eight hours.`,
    glossary: [
      ["press conference", "buổi họp báo"],
      ["rapid", "nhanh chóng"],
      ["rush", "giờ cao điểm"],
      ["convinced", "tin, bị thuyết phục"],
      ["barista", "nhân viên pha chế cà phê"],
      ["cautious", "thận trọng"],
      ["analyst", "nhà phân tích"],
      ["peak", "đỉnh điểm"],
    ],
    questions: [
      mc("b2-3-r1", "What is the report mainly about?", ["A coffee chain that is opening new branches in Hanoi", "A coffee chain's plan to deal with long waiting times", "Why customers prefer iced drinks in the summer", "A new law about service in cafés"], 1, "Cả bài tường thuật kế hoạch giảm thời gian chờ và phản ứng của mọi người."),
      mc("b2-3-r2", "According to Ms Pham, why had the service become slower?", ["The company had fewer staff than before.", "The number of branches had grown, but the ordering system had not changed.", "Customers had started ordering more complicated drinks.", "The mobile app had stopped working."], 1, "She explained that the number of branches had doubled… but that the ordering system had not changed."),
      fill("b2-3-r3", "The head of the consumer organisation suggested ___ average waiting times on the company website every month.", ["publishing"], "Suggest + V-ing: suggested publishing."),
      mc("b2-3-r4", "Why do some analysts think the real test will come in the summer?", ["The app will only be ready in the summer.", "The branches will be busier because more people buy iced drinks.", "The company will raise its prices in the summer.", "Many staff members go on holiday in the summer."], 1, "Mùa hè là lúc nhu cầu đồ uống đá lên đỉnh điểm, tức là quán đông nhất."),
      mc("b2-3-r5", "Which best describes the consumer organisation's attitude to the plan?", ["Completely against it", "Enthusiastic and fully confident", "Positive but careful", "Not interested at all"], 2, "Bà ấy nói kế hoạch nghe hợp lý (positive) nhưng cảnh báo hứa thì dễ (careful): đúng nghĩa a cautious welcome."),
    ],
  }),
  dialogue: dialogue(
    "Báo cáo lại cho sếp sau buổi gặp khách",
    "Anh Minh vừa gặp ông Tanaka, khách hàng Nhật, xong. Sếp của anh, chị Sophie, gọi điện hỏi khách đã nói gì, hỏi gì và yêu cầu gì.",
    { A: "Minh, nhân viên kinh doanh", B: "Sophie, trưởng phòng" },
    B("So, how did the meeting with Mr Tanaka go? What did he say?", "Thế buổi gặp ông Tanaka thế nào? Ông ấy nói gì?"),
    A("It went well. He said they were very happy with the first shipment.", "Suôn sẻ ạ. Ông ấy nói họ rất hài lòng với lô hàng đầu tiên."),
    B("Good. Did he mention the price?", "Tốt. Ông ấy có nhắc đến giá không?"),
    A("Yes. He asked if we could offer a five per cent discount on the next order.", "Có ạ. Ông ấy hỏi liệu mình có thể giảm năm phần trăm cho đơn hàng tới không."),
    B("And what did you tell him?", "Thế em trả lời ông ấy thế nào?"),
    A("I told him that I would discuss it with you first.", "Em bảo ông ấy là em sẽ bàn với chị trước."),
    B("Fine. Anything else?", "Được. Còn gì nữa không?"),
    A("He explained that two boxes had arrived damaged, and he asked us to replace them this month.", "Ông ấy giải thích rằng có hai thùng hàng đến nơi bị hỏng, và ông ấy nhờ mình thay trong tháng này."),
    B("I see. Did he say when they were planning the next order?", "Chị hiểu rồi. Ông ấy có nói khi nào họ định đặt đơn tiếp theo không?"),
    A("He said they were going to order again in December. He also suggested meeting in Osaka next spring.", "Ông ấy nói họ sẽ đặt hàng lại vào tháng Mười Hai. Ông ấy còn đề xuất gặp nhau ở Osaka vào mùa xuân tới."),
    B("Great news. Please remind me to call him on Friday.", "Tin vui đấy. Em nhớ nhắc chị gọi cho ông ấy vào thứ Sáu nhé."),
    A("Sure. I'll write up the notes and send them to you this afternoon.", "Vâng ạ. Em sẽ viết biên bản và gửi chị chiều nay."),
  ),
  task: task({
    prompt: "Sếp của bạn không dự được buổi họp với khách hàng sáng nay. Viết một email (khoảng 150–200 từ) tường thuật lại cho sếp: khách đã nói gì, hỏi gì, yêu cầu và đề xuất gì, và bạn đã trả lời, hứa gì với khách. Chia email thành các đoạn rõ ràng.",
    hints: [
      "Dùng nhiều động từ tường thuật: said, mentioned, explained, asked, suggested, promised.",
      "Nhớ lùi thì: is → was, has arrived → had arrived, will → would, can → could.",
      "Câu hỏi Yes/No dùng asked whether/if + trật tự câu kể; lời nhờ dùng asked me to + V.",
      "Không viết said me. Muốn nói với ai thì dùng told me.",
    ],
    model: "Hi Long,\n\nHere is a quick summary of this morning's meeting with Ms Carter from Green Farm, as you were not able to join us.\n\nOverall, the meeting went well. Ms Carter said that they were very happy with our service and that their customers liked the new packaging. However, she mentioned that the last delivery had arrived two days late, and she explained that this had caused problems in two of their shops.\n\nShe then asked whether we could deliver on Mondays instead of Wednesdays, because their stores were busiest at the start of the week. She also asked me to send her the new price list by the end of the week, and she suggested meeting again next month to discuss a longer contract.\n\nI told her that I would check the Monday delivery with our warehouse team. I also promised that I would give her a final answer by Friday. At the end, she said that she was looking forward to working with us for many more years.\n\nCould we discuss the delivery question tomorrow morning?\n\nBest regards,\nMinh",
    checklist: [
      "Dùng ít nhất bốn động từ tường thuật khác nhau.",
      "Mọi động từ sau said, mentioned, explained đã lùi thì đúng.",
      "Câu hỏi tường thuật dùng trật tự câu kể, có if hoặc whether cho câu Yes/No.",
      "Lời nhờ dùng asked/told + người + to V; suggest đi với V-ing.",
      "Không có lỗi said me hoặc suggested me to.",
      "Email chia đoạn (tổng quan, khách nói gì, khách hỏi và đề xuất gì, bạn trả lời gì), nối ý bằng However, then, also.",
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
    word("opportunity", "/ˌɒp.əˈtʃuː.nə.ti/", "cơ hội", "We missed a great opportunity to expand.", "op|por|tu|ni|ty", 2, "Trọng âm chính ở âm tiết thứ ba: op-por-TU-ni-ty."),
    word("regret", "/rɪˈɡret/", "hối tiếc", "I regret not asking for more details.", "re|gret", 1),
    word("investment", "/ɪnˈvest.mənt/", "khoản đầu tư", "The investment paid off within two years.", "in|vest|ment", 1),
    word("setback", "/ˈset.bæk/", "trở ngại, bước lùi", "Losing our biggest client was a serious setback.", "set|back", 0),
    word("consequence", "/ˈkɒn.sɪ.kwəns/", "hậu quả", "The delay had serious consequences for the company.", "con|se|quence", 0),
    word("outcome", "/ˈaʊt.kʌm/", "kết quả", "We are happy with the outcome of the negotiation.", "out|come", 0),
    word("promotion", "/prəˈməʊ.ʃən/", "sự thăng chức", "She would have got a promotion if she had stayed.", "pro|mo|tion", 1),
    word("overlook", "/ˌəʊ.vəˈlʊk/", "bỏ sót, bỏ qua", "We overlooked a small but important detail.", "o|ver|look", 2),
  ],
  exercises: [
    mc("b2-4-1", "If we ___ the risks, we would have avoided the problem.", ["had considered", "considered", "would consider"], 0, "Vế if của câu loại 3 dùng had + V3."),
    mc("b2-4-2", "If she had taken the job in Singapore, she ___ there now.", ["would have lived", "would live", "had lived"], 1, "Câu hỗn hợp: nguyên nhân ở quá khứ, kết quả ở hiện tại (now), nên dùng would + V."),
    fill("b2-4-3", "I wish I ___ asked more questions in the interview.", ["had", "'d"], "Wish + had + V3 để tiếc nuối về quá khứ."),
    fill("b2-4-4", "If the supplier had delivered on time, we would have ___ the order. (complete)", ["completed", "finished", "fulfilled", "delivered", "shipped"], "Would have + V3: complete thành completed."),
    reorder("b2-4-5", "I wish I hadn't sent that email.", "Wish + hadn't + V3: tiếc là hồi đó đã làm một việc không nên làm."),
    reorder("b2-4-6", "If only we had signed the deal earlier.", "If only + had + V3 diễn tả sự tiếc nuối mạnh."),
    listen("b2-4-7", "If I'd known about the problem, I would've called you.", ["Tôi biết có vấn đề nên đã gọi cho bạn.", "Nếu tôi mà biết có vấn đề thì tôi đã gọi cho bạn rồi.", "Nếu có vấn đề, tôi sẽ gọi cho bạn."], 1, "I'd known = I had known; would've = would have."),
    listen("b2-4-8", "I wish we hadn't cut the marketing budget.", ["Giá mà chúng ta đã không cắt giảm ngân sách tiếp thị.", "Chúng ta nên cắt giảm ngân sách tiếp thị.", "Tôi mong chúng ta sẽ tăng ngân sách tiếp thị."], 0),
    correct("b2-4-9", "If we would have checked the figures, we would have noticed the mistake.", ["If we had checked the figures, we would have noticed the mistake.", "If we'd checked the figures, we would have noticed the mistake."], "Vế if của câu loại 3 dùng had + V3; would have chỉ nằm ở vế chính."),
    correct("b2-4-10", "I wish I didn't accept that job last year.", "I wish I hadn't accepted that job last year.", "Tiếc về quá khứ (last year) dùng wish + had + V3, không dùng quá khứ đơn."),
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
    mc("b2-4-d3", "What is the main lesson they agree on for the next project?", ["Test every feature as soon as it is ready.", "Never work at weekends.", "Always ask the client for more money.", "Hire a new team for every project."], 0, "Emma: Test every feature as soon as it's ready, not at the end."),
  ],
  reading: reading({
    title: "Case study: the launch that came too soon",
    text: `In 2023, Rau Xanh Express, a small start-up in Da Nang, launched a grocery delivery app. The founders had raised enough money for eighteen months, and they were determined to reach the market before a much larger rival. They succeeded: Rau Xanh Express went live six weeks before its competitor. Within three months, however, the company had lost most of its customers.

What went wrong? According to the company's own review, the problem was not the idea but the timing. The app had been tested by the team itself, but never by real customers. When thousands of people started using it at the same time, orders disappeared, payments failed and drivers were sent to the wrong addresses. If the founders had invited even a small group of customers to try the app, they would have discovered most of these problems before the launch.

The founders also admit that they ignored early warnings. Two of their engineers had asked for another month of testing, but the request was refused. "I wish I had listened to them," one of the founders later wrote. "We were so afraid of being second that we forgot about being good."

The setback had long-term consequences. If Rau Xanh Express had launched a month later, it would probably be the market leader in Da Nang today. Instead, it spent most of its remaining money on refunds and on advertising to win customers back.

Fortunately, the story does not end badly. The company rebuilt the app, tested every feature with a group of two hundred users, and relaunched the following year. It is now profitable, although it is much smaller than its rival.

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
  minutes: 34,
  lecture: {
    title: "Mệnh đề quan hệ và cụm dẫn dắt khi thuyết trình",
    blocks: [
      p("Chị Hà lên thuyết trình trước ban giám đốc: “We have a new product. The product is cheap. The product sold well in Da Nang.” Ba câu ngắn, lặp chữ product ba lần, nghe như đọc danh sách. Người bản xứ sẽ nói: **Our new product, which is very affordable, sold well in Da Nang.** Một câu, gọn, trôi chảy. Bí quyết nằm ở **mệnh đề quan hệ**."),
      p("Bài thuyết trình tốt cần câu gọn và rõ. **Mệnh đề quan hệ** giúp bạn thêm thông tin về người hoặc vật mà không phải tách thành nhiều câu ngắn. Ở B1, bài **Người mà, cái mà**, các bạn đã học loại **xác định** (không có dấu phẩy, cho biết là người nào, cái nào). Trọng tâm hôm nay là loại **không xác định** (có dấu phẩy, chỉ thêm thông tin), loại mà người thuyết trình dùng nhiều nhất."),
      table(
        ["Đại từ", "Dùng cho", "Ví dụ"],
        ["who", "người", "The manager who leads the project is on holiday."],
        ["which", "vật, sự việc", "The report, which was published in May, shows strong growth."],
        ["that", "người hoặc vật (chỉ mệnh đề xác định)", "This is the product that sold best last year."],
        ["whose", "sở hữu (của ai, của cái gì)", "We work with a supplier whose prices are very competitive."],
      ),
      ex("The customers who took part in the survey were very positive.", "Những khách hàng đã tham gia khảo sát đều rất tích cực.", "Mệnh đề xác định: cho biết là khách hàng nào."),
      ex("Our Hanoi office, which opened in 2020, now has fifty staff.", "Văn phòng Hà Nội của chúng tôi, mở cửa năm 2020, hiện có năm mươi nhân viên.", "Mệnh đề không xác định: chỉ thêm thông tin, bỏ đi câu vẫn đủ nghĩa."),
      ex("The product that we launched in March is selling well.", "Sản phẩm mà chúng tôi ra mắt hồi tháng Ba đang bán rất chạy.", "Ở đây that làm tân ngữ (we launched the product), nên trong mệnh đề xác định có thể bỏ hẳn: The product we launched in March…"),
      mistake("Our CEO, that joined in 2019, will speak first.", "Our CEO, who joined in 2019, will speak first.", "Không dùng that sau dấu phẩy. Mệnh đề không xác định dùng who, which (hoặc whose, where…), không dùng that."),
      mistake("This is the chart which I showed it earlier.", "This is the chart which I showed earlier.", "Tiếng Việt nói “cái biểu đồ mà tôi đã cho xem nó” nghe vẫn được, nên người học hay giữ lại it. Trong tiếng Anh, which đã thay cho “the chart”, không lặp lại đại từ it."),
      mistake("The customers who buys our app are mostly students.", "The customers who buy our app are mostly students.", "Động từ trong mệnh đề quan hệ chia theo danh từ đứng trước who. Customers là số nhiều nên dùng buy. Tiếng Việt không có số nhiều nên người Việt hay bỏ sót chỗ này."),
      p("Cụm **dẫn dắt** (signposting) giúp người nghe biết bạn đang ở phần nào của bài nói."),
      table(
        ["Mục đích", "Cụm từ"],
        ["Mở đầu", "Today I'd like to talk about… / I've divided my talk into three parts."],
        ["Chuyển ý", "Moving on to… / Let's now turn to…"],
        ["Nhấn mạnh", "What's important here is… / I'd like to highlight…"],
        ["Kết thúc", "To sum up… / Thank you for listening. Are there any questions?"],
      ),
      tip("Khi chỉ vào slide, nói **As you can see on this slide…** thay vì **You see this slide**. Nghe tự nhiên và chuyên nghiệp hơn nhiều."),
      tip("Khi nói, mệnh đề không xác định được đọc như một **lời chen vào**: ngừng nhẹ ở dấu phẩy thứ nhất, hạ giọng khi đọc phần thông tin thêm, rồi ngừng nhẹ trước khi quay lại câu chính. **Our team, (ngừng) which has twelve members, (ngừng) works in three countries.**"),
      teacher("Tôi đã ngồi nghe rất nhiều bài thuyết trình của học trò. Bài nào cũng có đủ ý, nhưng bài hay là bài **người nghe biết mình đang ở đâu**. Vì vậy, hãy viết sẵn bốn câu dẫn dắt: mở đầu, chuyển ý, nhấn mạnh, kết thúc, và tập nói to chúng trước gương. Nội dung bạn có thể quên, nhưng bốn câu ấy sẽ giữ bạn không lạc. Và đừng đọc slide: slide để người nghe nhìn, còn bạn nói câu dài hơn, có mệnh đề quan hệ để giải thích."),
      summary(
        "**Who** cho người, **which** cho vật, **whose + danh từ** chỉ sở hữu, **that** chỉ dùng trong mệnh đề xác định.",
        "Mệnh đề **không xác định** đứng giữa hai dấu phẩy, chỉ thêm thông tin, và **không dùng that**.",
        "Đại từ quan hệ đã thay cho danh từ, nên **không lặp lại** it, him, them trong mệnh đề.",
        "Động từ trong mệnh đề chia theo danh từ đứng trước: customers who **buy**, a customer who **buys**.",
        "Dẫn dắt người nghe: **Today I'd like to talk about…**, **Moving on to…**, **What's important here is…**, **To sum up…**",
      ),
    ],
  },
  words: [
    word("audience", "/ˈɔː.di.əns/", "khán giả, người nghe", "Try to make eye contact with your audience.", "au|di|ence", 0),
    word("highlight", "/ˈhaɪ.laɪt/", "làm nổi bật, nhấn mạnh", "I'd like to highlight three key results.", "high|light", 0),
    word("illustrate", "/ˈɪl.ə.streɪt/", "minh họa", "This graph illustrates our sales trend.", "il|lus|trate", 0, "Trọng âm ở âm tiết đầu: IL-lus-trate."),
    word("revenue", "/ˈrev.ən.juː/", "doanh thu", "Revenue rose by ten per cent last quarter.", "rev|e|nue", 0),
    word("conclusion", "/kənˈkluː.ʒən/", "phần kết luận", "In conclusion, the project was a success.", "con|clu|sion", 1),
    word("overview", "/ˈəʊ.və.vjuː/", "cái nhìn tổng quan", "Let me start with a brief overview.", "o|ver|view", 0),
    word("slide", "/slaɪd/", "trang trình chiếu", "As you can see on this slide, costs have fallen.", "slide", 0, "Nhớ bật âm /d/ ở cuối."),
  ],
  exercises: [
    mc("b2-5-1", "Our director, ___ joined the company last year, will open the conference.", ["that", "who", "which"], 1, "Mệnh đề không xác định (giữa hai dấu phẩy) nói về người thì dùng who. Không dùng that sau dấu phẩy, còn which chỉ dùng cho vật."),
    reorder("b2-5-2", "We chose a partner whose experience is excellent.", "Whose chỉ sở hữu: kinh nghiệm của đối tác. Sau whose là danh từ, rồi mới đến động từ."),
    mc("b2-5-3", "Which sentence is punctuated correctly?", ["My boss, who lives in Da Nang, is visiting us.", "My boss who lives in Da Nang, is visiting us.", "My boss, that lives in Da Nang, is visiting us."], 0, "Mệnh đề không xác định đặt giữa hai dấu phẩy và dùng who, không dùng that."),
    fill("b2-5-4", "The new app, ___ was launched last month, has ten thousand users.", ["which"], "Sau dấu phẩy, chỉ vật dùng which."),
    fill("b2-5-5", "Now let's ___ to the second part of my presentation. (chuyển sang)", ["turn", "move", "go", "come", "proceed"], "Let's turn to / Let's move on to (hoặc go to, come to): chuyển sang phần tiếp theo."),
    reorder("b2-5-6", "I've divided my talk into three parts.", "Câu mở đầu giới thiệu bố cục bài thuyết trình."),
    listen("b2-5-7", "To sum up, our revenue has grown steadily.", ["Tóm lại, doanh thu của chúng ta đã tăng đều đặn.", "Trước hết, doanh thu của chúng ta giảm mạnh.", "Doanh thu của chúng ta cần tăng nhanh hơn."], 0, "To sum up dùng để tóm tắt ở phần kết."),
    listen("b2-5-8", "This is the client whose order we delayed.", ["Đây là khách hàng đã hủy đơn hàng.", "Đây là khách hàng có đơn hàng bị chúng ta giao chậm.", "Đây là khách hàng đã giao hàng chậm."], 1),
    correct("b2-5-9", "Our new manager, that comes from Singapore, will join us on Monday.", "Our new manager, who comes from Singapore, will join us on Monday.", "Sau dấu phẩy (mệnh đề không xác định) không dùng that; nói về người thì dùng who."),
    correct("b2-5-10", "This is the report which I sent it to you yesterday.", ["This is the report which I sent to you yesterday.", "This is the report that I sent to you yesterday.", "This is the report I sent to you yesterday."], "Which đã thay cho the report, nên không lặp lại it trong mệnh đề quan hệ."),
  ],
  speaking: [
    say("Today I'd like to talk about our results for this year.", "Hôm nay tôi muốn nói về kết quả năm nay của chúng ta."),
    say("Our team, which has twelve members, works in three countries.", "Nhóm của chúng tôi, gồm mười hai thành viên, làm việc ở ba quốc gia."),
    say("Thank you for listening. Are there any questions?", "Cảm ơn mọi người đã lắng nghe. Có ai có câu hỏi không?"),
  ],
  freeSpeaking: free(
    "Could you give a short introduction to your company, your school or a project you are working on?",
    "Nói phần mở đầu một bài thuyết trình ngắn về công ty, trường học hoặc dự án của bạn: giới thiệu chủ đề, nêu bố cục, dùng vài mệnh đề quan hệ và cụm dẫn dắt.",
    "Good morning, everyone. Today I'd like to talk about Sunrise Travel, a small company which organises tours in northern Vietnam. I've divided my talk into three parts: our tours, our customers and our plans. Let's start with our tours. Our most popular trip, which takes three days, goes to Ha Giang. Our customers, who mostly come from Europe, usually book online. Moving on to our plans, we would like to add cycling tours next year.",
  ),
  dialogueQuestions: [
    listenQ("b2-5-d1", "Who were the first customers to buy the water filter?", "Mostly young families whose children have allergies. As you can see on this slide, they make up sixty per cent of buyers.", ["Office workers in Da Nang", "Young families whose children have allergies", "Older people who live alone", "Hotels and restaurants"], 1, "Mostly young families whose children have allergies."),
    mc("b2-5-d2", "What advice does Peter give Ha about the way she speaks?", ["Speak faster so that she finishes on time.", "Pause a little at the commas.", "Read every word from the slides.", "Start with a joke."], 1, "Peter: Just pause a little at the commas."),
    mc("b2-5-d3", "How does Peter feel about Ha's presentation at the end?", ["He thinks it needs a lot more work.", "He is confident that she will do well.", "He thinks it is far too long.", "He is worried about the questions."], 1, "Peter: That's perfect. You'll be fine tomorrow."),
  ],
  reading: reading({
    title: "Stop reading your slides",
    text: `I have sat through hundreds of business presentations, and the ones I remember have one thing in common: the speaker talked to the audience, not to the screen. Unfortunately, these presentations are rare. Far too often, speakers who are perfectly confident in meetings suddenly turn their backs on the room and read their slides word for word.

Why does this happen? In my view, the problem starts with the slides themselves. Many people prepare a presentation by writing everything they want to say on the slides, which turns them into a document rather than a visual aid. The speaker, who is naturally nervous, then relies on this document to get through the talk. The audience, meanwhile, reads faster than the speaker can talk and quickly loses interest.

A good slide does something that the speaker cannot do alone. It shows a chart that illustrates a trend, a photo that makes a product real, or a single number that the audience needs to remember. It does not repeat what the speaker is about to say. A useful rule, which many professional trainers recommend, is to put no more than six words on a slide.

Signposting is the other half of the solution. Phrases such as "I've divided my talk into three parts" or "Moving on to costs" may seem obvious, but they give the audience a map of the talk. Listeners who know where they are in a presentation find it much easier to follow the argument, especially when they are listening in a second language.

Some of my colleagues disagree. They argue that detailed slides are useful because people can read them again after the meeting. That is true, but there is a simple answer: send a separate report whose purpose is to be read, and keep your slides for the talk.

Next time you present, try switching off the screen for one minute. If your audience is still listening, you are doing it right.`,
    glossary: [
      ["word for word", "từng chữ một"],
      ["visual aid", "công cụ hỗ trợ trực quan"],
      ["rely on", "dựa vào"],
      ["meanwhile", "trong khi đó"],
      ["trend", "xu hướng"],
      ["signposting", "cách dùng cụm dẫn dắt người nghe"],
      ["argument", "lập luận"],
    ],
    questions: [
      mc("b2-5-r1", "What is the writer's main argument?", ["Presentations should always include detailed slides.", "Speakers should use simple slides and talk to the audience instead of reading.", "Business presentations are no longer useful.", "Trainers give too much advice about slides."], 1, "Cả bài phản đối việc đọc slide và khuyên dùng slide đơn giản, nói với người nghe."),
      mc("b2-5-r2", "Why does the audience lose interest when a speaker reads detailed slides?", ["They cannot see the screen clearly.", "They read faster than the speaker talks.", "The slides are in a second language.", "The speaker talks too quietly."], 1, "The audience reads faster than the speaker can talk and quickly loses interest."),
      fill("b2-5-r3", "Many trainers recommend putting no more than ___ words on a slide.", ["six", "6"], "A useful rule… is to put no more than six words on a slide."),
      mc("b2-5-r4", "What can we infer about the writer from the first paragraph?", ["He or she rarely attends presentations.", "He or she has watched a great many presentations.", "He or she designs slides for a living.", "He or she prefers reports to meetings."], 1, "I have sat through hundreds of business presentations: người viết đã dự rất nhiều buổi thuyết trình."),
      mc("b2-5-r5", "How does the writer answer colleagues who want detailed slides to read later?", ["Print the slides for them", "Send them a separate written report", "Record the whole presentation", "Add more words to each slide"], 1, "Send a separate report whose purpose is to be read."),
      mc("b2-5-r6", "What is the purpose of the final paragraph?", ["To give the reader a practical test to try", "To admit that the writer's advice may be wrong", "To summarise the colleagues' opinion", "To explain how to design a chart"], 0, "Đoạn cuối đưa ra một phép thử cụ thể: tắt màn hình một phút."),
    ],
  }),
  dialogue: dialogue(
    "Tập thuyết trình trước buổi họp ban giám đốc",
    "Ngày mai chị Hà thuyết trình về sản phẩm mới trước ban giám đốc. Chị nhờ anh Peter, đồng nghiệp người Úc, nghe thử và góp ý.",
    { A: "Hà, chuyên viên tiếp thị", B: "Peter, đồng nghiệp" },
    A("Peter, could you listen to my opening? I'm presenting to the board tomorrow.", "Peter, anh nghe thử phần mở đầu của em được không? Mai em thuyết trình trước ban giám đốc."),
    B("Sure, go ahead.", "Được chứ, em bắt đầu đi."),
    A("Good morning. Today I'd like to talk about our new water filter, which we launched in Da Nang in May.", "Chào buổi sáng. Hôm nay tôi muốn nói về máy lọc nước mới, sản phẩm chúng ta ra mắt ở Đà Nẵng hồi tháng Năm."),
    B("Nice. One sentence instead of three short ones. It sounds much smoother.", "Hay đấy. Một câu thay cho ba câu ngắn. Nghe trôi chảy hơn nhiều."),
    A("Then I say: I've divided my talk into three parts: sales, customer feedback and next steps.", "Sau đó em nói: Tôi chia bài nói thành ba phần: doanh số, phản hồi của khách hàng và bước tiếp theo."),
    B("Very clear. Who are the customers that bought it first?", "Rất rõ ràng. Những khách hàng mua đầu tiên là ai?"),
    A("Mostly young families whose children have allergies. As you can see on this slide, they make up sixty per cent of buyers.", "Chủ yếu là các gia đình trẻ có con bị dị ứng. Như mọi người thấy trên trang này, họ chiếm sáu mươi phần trăm người mua."),
    B("Good. And what's the key result?", "Tốt. Còn kết quả chính là gì?"),
    A("What's important here is that our revenue, which was flat last year, has grown by twenty per cent.", "Điều quan trọng ở đây là doanh thu của chúng ta, vốn đi ngang năm ngoái, đã tăng hai mươi phần trăm."),
    B("Great. Just pause a little at the commas. How do you finish?", "Tuyệt. Chỉ cần ngừng nhẹ ở các dấu phẩy. Em kết thúc thế nào?"),
    A("To sum up, the product is selling well, and we'd like to open two more stores. Thank you for listening. Are there any questions?", "Tóm lại, sản phẩm đang bán chạy và chúng tôi muốn mở thêm hai cửa hàng. Cảm ơn mọi người đã lắng nghe. Có ai có câu hỏi không?"),
    B("That's perfect. You'll be fine tomorrow.", "Hoàn hảo. Mai em sẽ làm tốt thôi."),
  ),
  task: task({
    prompt: "Viết lời thuyết trình ngắn (khoảng 150–200 từ) giới thiệu công ty, sản phẩm hoặc dự án của bạn. Bài phải có câu giới thiệu chủ đề, câu nêu bố cục, mỗi phần một đoạn, vài câu có mệnh đề quan hệ và các cụm dẫn dắt.",
    hints: [
      "Mở đầu: Good morning, everyone. Today I'd like to talk about… rồi I've divided my talk into… parts.",
      "Gộp các câu ngắn bằng who, which, whose; thông tin thêm thì đặt giữa hai dấu phẩy.",
      "Dùng Let's start with…, What's important here is…, Moving on to… để người nghe biết bạn đang ở đâu.",
    ],
    model: "Good morning, everyone, and thank you for coming. Today I'd like to talk about Green Leaf, a small tea company which I started with two friends in 2021. I've divided my talk into three parts: our products, our customers and our plans for next year.\n\nLet's start with our products. Our best seller is a jasmine tea that comes from family farms in Thai Nguyen. We also sell green tea and lotus tea, which are especially popular as gifts during Tet. As you can see on this slide, jasmine tea makes up half of our sales.\n\nMoving on to our customers, most of them are office workers who buy our tea online. These customers, who are mainly between twenty-five and forty, care a lot about quality and packaging. What's important here is that we work directly with farmers whose families have grown tea for generations, so we can guarantee the quality of every box.\n\nFinally, let's turn to our plans. We would like to open our first shop in Hanoi next year, and I'll explain how we intend to pay for it.",
    checklist: [
      "Có câu giới thiệu chủ đề và một câu nêu bố cục bài nói.",
      "Có ít nhất ba mệnh đề quan hệ, trong đó có một mệnh đề không xác định giữa hai dấu phẩy.",
      "Không dùng that sau dấu phẩy và không lặp lại it, them trong mệnh đề quan hệ.",
      "Động từ trong mệnh đề quan hệ chia đúng theo danh từ đứng trước.",
      "Mỗi phần trong bố cục là một đoạn, mở đầu bằng một cụm dẫn dắt (Let's start with, Moving on to, Finally, let's turn to…).",
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
    word("contract", "/ˈkɒn.trækt/", "hợp đồng", "The contract will be signed next week.", "con|tract", 0, "Danh từ nhấn âm đầu: CON-tract. Động từ “contract” (co lại) nhấn âm sau."),
    word("flexible", "/ˈflek.sə.bəl/", "linh hoạt", "We can be flexible on the delivery date.", "flex|i|ble", 0),
    word("proposal", "/prəˈpəʊ.zəl/", "bản đề xuất", "They accepted our proposal after a long discussion.", "pro|pos|al", 1),
    word("concession", "/kənˈseʃ.ən/", "sự nhượng bộ", "We made a small concession on price.", "con|ces|sion", 1),
    word("deal", "/diːl/", "thỏa thuận, giao dịch", "I think we have a deal.", "deal", 0),
  ],
  exercises: [
    mc("b2-6-1", "Which request is the most polite?", ["Give us a better price.", "We want a better price now.", "We were wondering if you could improve your price.", "Your price is bad."], 2, "Was wondering if + S + could là cách đề nghị rất mềm mỏng."),
    mc("b2-6-2", "We can deliver next week as long as you ___ the order today.", ["will confirm", "confirm", "would confirm"], 1, "Sau as long as dùng hiện tại đơn khi nói về tương lai."),
    fill("b2-6-3", "Would you be ___ to share the costs? (sẵn lòng)", ["willing", "prepared", "happy"], "Would you be willing / prepared / happy to + V: anh/chị có sẵn lòng…? Không điền able: Would you be able to… chỉ hỏi anh/chị có làm được không, không hỏi có sẵn lòng hay không."),
    fill("b2-6-4", "I'm ___ that we can't accept those terms.", ["afraid", "sorry"], "I'm afraid… (hoặc I'm sorry…) giúp lời từ chối bớt gay gắt."),
    reorder("b2-6-5", "I was wondering if you could lower the price.", "Sau I was wondering if là trật tự câu kể: you đứng trước could, không đảo như câu hỏi."),
    reorder("b2-6-6", "We are prepared to offer a small discount.", "Be prepared to + V: sẵn sàng làm gì, thường dùng khi nhượng bộ."),
    listen("b2-6-7", "I see your point, but we need a longer contract.", ["Tôi hoàn toàn đồng ý với anh/chị.", "Chúng tôi không cần hợp đồng dài hạn.", "Tôi muốn xem lại bản hợp đồng.", "Tôi hiểu ý anh/chị, nhưng chúng tôi cần một hợp đồng dài hơn."], 3, "I see your point, but… vừa ghi nhận ý kiến đối phương vừa đưa ra quan điểm của mình."),
    listen("b2-6-8", "Would you be willing to pay half in advance?", ["Anh/chị có sẵn lòng trả trước một nửa không?", "Anh/chị đã trả trước một nửa chưa?", "Chúng tôi sẽ trả trước một nửa."], 0),
    correct("b2-6-9", "I was wondering if could you extend the payment period.", "I was wondering if you could extend the payment period.", "Sau I was wondering if là trật tự câu kể: you đứng trước could."),
    correct("b2-6-10", "We can offer free delivery as long as you will order before Friday.", "We can offer free delivery as long as you order before Friday.", "Sau as long as dùng hiện tại đơn để nói về tương lai, không dùng will."),
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
    mc("b2-6-d2", "How does Mr Lim first respond to the request for a ten per cent discount?", ["He accepts it immediately.", "He says it might be difficult and asks how many units Nam wants.", "He refuses to continue the negotiation.", "He offers twelve per cent instead."], 1, "I'm afraid ten per cent might be difficult for us. How many units are you planning to order?"),
    mc("b2-6-d3", "What have the two men agreed at the end?", ["Six per cent, a one-year contract and delivery in May", "Eight per cent, a two-year contract and delivery by March", "Ten per cent, a two-year contract and free delivery", "Eight per cent and payment in advance"], 1, "Nam tóm tắt: eight per cent, a two-year contract and delivery by March."),
  ],
  reading: reading({
    title: "Your request for revised terms",
    text: `Subject: Your request for revised terms, order 7781

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
    ],
    questions: [
      mc("b2-6-r1", "What is the main purpose of Mr Lim's email?", ["To accept Mr Tran's request for a fifteen per cent discount", "To refuse the original request politely and offer other terms", "To end the partnership with Mr Tran's company", "To complain about a late payment"], 1, "Ông Lim từ chối mức giảm mười lăm phần trăm rồi đưa ra một loạt đề xuất thay thế."),
      mc("b2-6-r2", "What must Mr Tran do to get an eight per cent reduction?", ["Pay within thirty days", "Increase the order to five hundred units", "Reply before 14 May", "Collect the chairs himself"], 1, "If you increase your order from three hundred to five hundred units, we could offer a reduction of eight per cent."),
      fill("b2-6-r3", "The first two hundred chairs can arrive by the end of July, as long as the supplier receives confirmation before 15 ___.", ["June"], "As long as we receive your confirmation before 15 June."),
      mc("b2-6-r4", "Why does Mr Lim mention the cost of steel?", ["To explain why he cannot offer a large discount", "To suggest that Mr Tran should buy steel chairs", "To announce a price increase for all customers", "To show that his company is about to close"], 0, "Giá thép tăng và biên lợi nhuận thấp là lý do ông không thể giảm mười lăm phần trăm."),
      mc("b2-6-r5", "Which phrase best describes the tone of the email?", ["Angry and impatient", "Polite and cooperative, but firm", "Casual and humorous", "Uncertain and confused"], 1, "Ông dùng ngôn ngữ mềm (To be honest, I'm afraid, I was wondering) nhưng vẫn giữ vững điều kiện của mình."),
    ],
  }),
  dialogue: dialogue(
    "Đàm phán giá với nhà cung cấp",
    "Anh Nam, trưởng nhóm mua hàng ở TP.HCM, đàm phán với ông Lim, đại diện nhà cung cấp Singapore, về giá và điều khoản của một đơn hàng ghế văn phòng.",
    { A: "Nam, trưởng nhóm mua hàng", B: "Mr Lim, nhà cung cấp" },
    A("Thank you for your proposal, Mr Lim. To be honest, your price seems a little high for us.", "Cảm ơn ông về bản đề xuất. Thật lòng mà nói, mức giá của ông hơi cao so với chúng tôi."),
    B("I see your point, but our chairs are of the best quality in the region.", "Tôi hiểu ý anh, nhưng ghế của chúng tôi có chất lượng tốt nhất khu vực."),
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
  // Chapter 1: email, meetings, reported speech, calls and online meetings
  mc("b2-f01", "The report isn't on my desk. Anna ___ it yet, because she only started it this morning.", ["must have finished", "can't have finished", "mustn't have finished", "should finish"], 1, "Mới bắt đầu sáng nay nên gần như chắc chắn chưa xong: can't have + V3. Trong tiếng Anh Anh, mustn't không dùng để suy đoán (người Mỹ có nói must not have)."),
  fill("b2-f02", "“Can you send the slides tonight?” My manager asked me if I ___ send the slides that night.", ["could"], "Câu tường thuật lùi thì: can thành could."),
  reorder("b2-f03", "How long had the client been waiting for us?", "Hỏi thời lượng tính đến một mốc quá khứ: How long + had + chủ ngữ + been + V-ing (quá khứ hoàn thành tiếp diễn)."),
  listenQ("b2-f04", "What will the speaker be doing at three o'clock tomorrow?", "I'm afraid I won't be able to join the call at three tomorrow, because I'll be flying to Singapore. Could we move it to Thursday morning?", ["Flying to Singapore", "Meeting a client in the office", "Joining the call", "Travelling to Thailand on holiday"], 0, "I'll be flying to Singapore: tương lai tiếp diễn, việc đang diễn ra vào lúc ba giờ ngày mai."),
  correct("b2-f05", "I look forward to meet you at the conference.", "I look forward to meeting you at the conference.", "Look forward to + V-ing, vì to là giới từ."),
  // Chapter 2: conditionals, unless / in case, modal perfects, unreal past
  mc("b2-f06", "Take an umbrella ___ it rains this afternoon.", ["unless", "in case", "provided that", "otherwise"], 1, "In case: làm ngay bây giờ để phòng khi trời mưa."),
  fill("b2-f07", "We ___ have booked a taxi. Our host was already waiting for us at the airport. (không cần, nhưng đã lỡ làm)", ["needn't", "need not"], "Needn't have + V3: đã làm rồi mới thấy không cần thiết."),
  reorder("b2-f08", "I would rather you didn't tell anyone.", "Would rather + người khác + quá khứ đơn: muốn người khác làm (hoặc không làm) gì."),
  listenQ("b2-f09", "What does the speaker regret?", "If I had checked the address before I left, I wouldn't be standing outside the wrong building now.", ["Arriving too early", "Not checking the address before leaving", "Taking the wrong bus", "Forgetting the time of the meeting"], 1, "Câu hỗn hợp: không kiểm tra địa chỉ (quá khứ) nên bây giờ đứng nhầm tòa nhà."),
  correct("b2-f10", "It's time we start preparing for the audit.", ["It's time we started preparing for the audit.", "It is time we started preparing for the audit.", "It's time for us to start preparing for the audit.", "It is time for us to start preparing for the audit."], "It's time + chủ ngữ + động từ dạng quá khứ (thường là quá khứ đơn): lẽ ra phải làm rồi. Muốn giữ nguyên mẫu thì dùng It's time for us to start…"),
  // Chapter 3: relative clauses, data, linkers, participle clauses
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
    "Tường thuật lời người khác và rút kinh nghiệm bằng câu điều kiện, wish, should have",
    "Thuyết trình, mô tả số liệu và viết đoạn văn mạch lạc với từ nối phù hợp",
    "Đàm phán bằng ngôn ngữ mềm mỏng và xử lý khiếu nại",
    "Đọc hiểu bài báo, báo cáo và email công việc dài khoảng 300–400 từ",
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
    chapter(2, "Giả định và tiếc nuối", [tiecNuoi, nDieuKienKhongChiIf, nDongTuKhuyetThieuQuaKhu, nGiaDinhKhongThat]),
    chapter(3, "Trình bày và viết", [thuyetTrinh, nMoTaSoLieu, nTuNoiNangCao, nRutGonMenhDe]),
    chapter(4, "Thuyết phục và xử lý tình huống", [damPhan, nMaoTu, nToVHayVIng, nThanPhienVaXuLy]),
  ],
};
