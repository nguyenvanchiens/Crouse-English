import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "vua-moi-da-chua",
  title: "Vừa mới, đã, chưa",
  minutes: 30,
  lecture: {
    title: "Hiện tại hoàn thành với just, already và yet",
    blocks: [
      p("Người Việt gặp nhau hay hỏi “Ăn cơm chưa?”, sếp hỏi “Em gửi email chưa?”, bạn nhắn “Mình vừa mới tới nơi”. Ba chữ **“vừa mới”**, **“đã... rồi”** và **“chưa”** trong tiếng Anh là **just**, **already** và **yet**, và chúng đi cùng **thì hiện tại hoàn thành**: **have / has + V3**."),
      p("Ở bài “Bạn đã từng…?”, ta dùng hiện tại hoàn thành với **ever / never** để nói về **trải nghiệm trong cả đời**. Bài này dùng cùng thì đó nhưng cho những việc **vừa xảy ra gần đây**, mà **kết quả còn liên quan đến bây giờ**: email đã gửi rồi, nên sếp khỏi lo; tàu vừa chạy, nên ta lỡ tàu."),
      table(
        ["Từ", "Nghĩa", "Loại câu", "Vị trí", "Ví dụ"],
        ["just", "vừa mới", "khẳng định", "giữa have và V3", "I've just arrived."],
        ["already", "đã... rồi (sớm hơn dự kiến)", "khẳng định và câu hỏi", "giữa have và V3", "She's already left. Have you already eaten?"],
        ["yet", "chưa", "hầu hết là phủ định", "cuối câu", "I haven't finished yet."],
        ["yet", "... chưa?", "câu hỏi", "cuối câu", "Have you eaten yet?"],
      ),
      table(
        ["Nguyên mẫu", "Quá khứ", "Quá khứ phân từ (V3)"],
        ["do", "did", "done"],
        ["send", "sent", "sent"],
        ["leave", "left", "left"],
        ["buy", "bought", "bought"],
        ["write", "wrote", "written"],
        ["have", "had", "had"],
      ),
      ex("I've just arrived at the hotel. I'll call you later.", "Anh vừa mới đến khách sạn. Lát nữa anh gọi em nhé."),
      ex("Don't worry. I've already sent the email to the customer.", "Đừng lo. Em đã gửi email cho khách hàng rồi.", "Already hàm ý việc xong sớm hơn người kia nghĩ."),
      ex("Have you had lunch yet? No, not yet.", "Bạn ăn trưa chưa? Chưa, mình chưa ăn.", "Đây chính là câu “Ăn cơm chưa?” của người Việt. Trả lời ngắn “chưa” là Not yet."),
      ex("The train has just left. We missed it by one minute.", "Tàu vừa chạy mất rồi. Chúng ta lỡ chuyến chỉ vì một phút."),
      table(
        ["Muốn nói", "Dùng", "Ví dụ"],
        ["Đã từng... trong đời chưa", "ever / never", "Have you ever been to Japan?"],
        ["Việc gần đây đã làm chưa", "yet", "Have you done your homework yet?"],
        ["Vừa mới xảy ra", "just", "He's just gone out."],
      ),
      tip("Mẹo nhớ vị trí: **just** và **already** “chen vào giữa” have và V3, còn **yet** “đứng gác cuối câu”. Khi nói, người bản xứ gần như luôn nối âm: **I've just** đọc liền thành /aɪv dʒʌst/, **She's already** thành /ʃiːz ɔːlˈred.i/. Đừng tách rời từng chữ."),
      mistake("I didn't finish my report yet.", "I haven't finished my report yet.", "Tiếng Việt không chia thì, “chưa làm xong” nghe như quá khứ nên người Việt dùng didn't. Trong tiếng Anh-Anh, đi với yet là hiện tại hoàn thành: haven't + V3."),
      mistake("I have finished my homework yet.", "I have already finished my homework.", "Yet hầu như chỉ dùng trong câu phủ định và câu hỏi (câu khẳng định trang trọng have yet to lại mang nghĩa “vẫn chưa”). Câu khẳng định “đã... rồi” dùng already."),
      mistake("I've just seen him yesterday.", "I saw him yesterday.", "Có thời điểm cụ thể (yesterday) thì không dùng hiện tại hoàn thành, dù trong đầu bạn nghĩ “vừa mới”. Chuyển sang quá khứ đơn."),
      teacher("Học viên Việt Nam may mắn hơn người nước khác ở bài này, vì chúng ta đã có sẵn thói quen hỏi “**...chưa?**” mỗi ngày. Tôi dặn các bạn: **mỗi lần định hỏi “chưa” bằng tiếng Việt, hãy nói thầm câu tiếng Anh với yet**. Have you eaten yet? Have you finished yet? Have they arrived yet? Và mỗi tối, trước khi ngủ, liệt kê ba việc hôm nay đã làm rồi với already, ba việc chưa làm với haven't... yet. Một tháng thôi, cấu trúc này sẽ là của các bạn."),
      summary(
        "Việc vừa xảy ra, kết quả còn liên quan đến bây giờ: have / has + V3.",
        "Just (vừa mới) và already (đã... rồi) đứng giữa have và V3: I've just arrived, she's already left.",
        "Yet đứng cuối câu, hầu hết dùng trong câu phủ định và câu hỏi; already dùng trong câu khẳng định và cả câu hỏi. Trả lời ngắn “chưa” là Not yet.",
        "“Chưa làm” là haven't + V3 + yet, không dùng didn't: I haven't finished yet.",
        "Có thời điểm cụ thể như yesterday, last week thì dùng quá khứ đơn, không dùng hiện tại hoàn thành.",
      ),
    ],
  },
  words: [
    word("just", "/dʒʌst/", "vừa mới", "I've just got home.", "just", 0, "Nhớ đọc đủ cả /s/ và /t/ ở cuối, đừng đọc thành “giớt”."),
    word("already", "/ɔːlˈred.i/", "đã... rồi", "The film has already started.", "al|read|y", 1),
    word("yet", "/jet/", "chưa (trong câu hỏi và phủ định)", "Has the bus come yet?", "yet", 0, "Âm đầu là /j/, giống chữ “d” trong giọng miền Nam; nhớ giữ âm /t/ ở cuối, đừng bỏ."),
    word("arrive", "/əˈraɪv/", "đến nơi", "Our guests have just arrived.", "ar|rive", 1, "Nhớ âm /v/ ở cuối: cắn nhẹ môi dưới."),
    word("send", "/send/", "gửi", "Have you sent the photos yet?", "send", 0),
    word("leave", "/liːv/", "rời đi, rời khỏi", "The plane has already left.", "leave", 0, "Leave có nguyên âm dài /iː/, khác với live /lɪv/ (sống)."),
    word("tidy", "/ˈtaɪ.di/", "dọn dẹp, gọn gàng", "I've just tidied my desk.", "ti|dy", 0),
    word("book", "/bʊk/", "đặt (vé, phòng, bàn)", "We've already booked a table for dinner.", "book", 0),
  ],
  exercises: [
    mc("a2-n16-1", "I've ___ finished my homework. Can I go out now?", ["just", "yet", "ever"], 0, "Vừa mới làm xong: just, đứng giữa have và V3."),
    mc("a2-n16-2", "Have you sent the email ___?", ["just", "never", "yet"], 2, "Câu hỏi “đã... chưa?” dùng yet ở cuối câu."),
    fill("a2-n16-3", "I haven't had lunch ___. (chưa)", ["yet"], "Câu phủ định với nghĩa “chưa” dùng yet ở cuối câu."),
    fill("a2-n16-4", "The train has ___ left. We missed it by one minute. (vừa mới)", ["just"], "Vừa mới xảy ra dùng just, đứng giữa has và V3."),
    reorder("a2-n16-5", "Have you finished your homework yet?", "Have + chủ ngữ + V3 + tân ngữ + yet?"),
    reorder("a2-n16-6", "I have just arrived at the station.", "Just đứng giữa have và quá khứ phân từ arrived."),
    listen("a2-n16-7", "I haven't tidied my room yet.", ["Tôi đã dọn phòng rồi.", "Tôi vừa mới dọn phòng.", "Tôi chưa dọn phòng."], 2, "Haven't... yet nghĩa là chưa làm."),
    listen("a2-n16-8", "They've already booked the tickets.", ["Họ đã đặt vé rồi.", "Họ chưa đặt vé.", "Họ sắp đặt vé."], 0, "Already nghĩa là đã... rồi."),
    correct("a2-n16-9", "I didn't send the email yet.", ["I haven't sent the email yet."], "“Chưa làm” đi với yet thì dùng hiện tại hoàn thành: haven't + V3 (sent), không dùng didn't. (Tiếng Anh-Mỹ thân mật đôi khi nói didn't… yet, nhưng bài này theo tiếng Anh-Anh.)"),
    correct("a2-n16-10", "Have you yet had lunch?", ["Have you had lunch yet?"], "Trong câu hỏi và câu phủ định, yet thường đứng cuối câu. Just và already mới chen vào giữa have và V3."),
  ],
  freeSpeaking: free(
    "What have you done today, and what haven't you done yet?",
    "Kể về hôm nay của bạn: việc gì đã làm rồi, việc gì vừa mới làm xong, và việc gì chưa làm.",
    "I've already finished my work for today, and I've just had dinner with my family. I've already called my mother, too. But I haven't done my English homework yet, and I haven't washed the dishes yet. I'll do them after this.",
  ),
  speaking: [
    say("I've just arrived at the airport.", "Tôi vừa mới đến sân bay."),
    say("Have you had dinner yet?", "Bạn ăn tối chưa?"),
    say("I haven't finished my work yet.", "Tôi vẫn chưa làm xong việc."),
  ],
  dialogue: dialogue(
    "Chuẩn bị đón khách",
    "Mười giờ sáng nay khách hàng đến công ty họp. Anh Quang, trưởng phòng, hỏi Thảo xem việc nào đã xong, việc nào chưa.",
    { A: "Anh Quang, trưởng phòng", B: "Thảo, nhân viên" },
    A("Thao, the customers are coming at ten. Have you booked the meeting room yet?", "Thảo ơi, mười giờ khách đến. Em đặt phòng họp chưa?"),
    B("Yes, I've already booked it.", "Rồi ạ, em đặt rồi."),
    A("Great. Have you sent them the address yet?", "Tốt. Em gửi địa chỉ cho họ chưa?"),
    B("I've just sent it. They've already replied.", "Em vừa gửi xong. Họ trả lời rồi ạ."),
    A("And the report? Have you finished it yet?", "Còn bản báo cáo? Em làm xong chưa?"),
    B("Not yet. I haven't written the last part yet.", "Chưa ạ. Em chưa viết phần cuối."),
    A("That's OK. Can you finish it before ten?", "Không sao. Em làm xong trước mười giờ được không?"),
    B("Yes, of course. Have you had breakfast yet? There are some cakes in the kitchen.", "Được ạ. Anh ăn sáng chưa? Trong bếp có ít bánh đấy."),
    A("Yes, I've already eaten, thanks. Oh, a message. The customers have just left their hotel.", "Anh ăn rồi, cảm ơn em. Ồ, có tin nhắn. Khách vừa rời khách sạn."),
    B("Then they'll be here soon. I'll tidy the meeting room now.", "Vậy họ sắp tới rồi. Em đi dọn phòng họp ngay."),
    A("Don't worry. I've already tidied it. You only need to finish and print the report.", "Đừng lo. Anh dọn rồi. Em chỉ cần làm xong rồi in báo cáo thôi."),
    B("OK. I'll do it right now.", "Vâng. Em làm ngay đây ạ."),
  ),
  dialogueQuestions: [
    listenQ("a2-n16-d1", "Thảo đã gửi địa chỉ cho khách chưa?", "I've just sent it. They've already replied.", ["Chưa gửi", "Gửi từ hôm qua", "Quên gửi", "Vừa gửi xong, và khách đã trả lời rồi"], 3, "I've just sent it: vừa gửi xong. They've already replied: khách đã trả lời rồi."),
    mc("a2-n16-d2", "Việc nào Thảo chưa làm xong?", ["Đặt phòng họp", "Viết phần cuối bản báo cáo", "Gửi địa chỉ cho khách"], 1, "I haven't written the last part yet."),
    mc("a2-n16-d3", "Ai đã dọn phòng họp?", ["Thảo", "Anh Quang", "Khách hàng"], 1, "Anh Quang nói: Don't worry. I've already tidied it."),
  ],
  reading: reading({
    title: "Thư gửi mẹ trước ngày chuyển nhà",
    text: `Hi Mum,

Just a quick update about the move. We're moving into the new flat on Sunday, and we're nearly ready!

We've already packed most of our clothes and books. Khoa has just finished packing the kitchen, so all the plates and glasses are in boxes now. I've already booked a small truck for Sunday morning, and the driver has sent me a message about the time.

But we haven't done everything yet. We haven't cleaned the new flat yet, and Khoa hasn't found a new school for Bin. Also, the internet company hasn't called us back yet. I'll phone them again tomorrow.

Have you bought the curtains for the living room yet? Bin wants to help you choose the colour.

Love,
Ha`,
    glossary: [
      ["update", "tin cập nhật"],
      ["move", "việc chuyển nhà"],
      ["nearly", "gần như"],
      ["packed", "đã đóng gói, xếp đồ (pack)"],
      ["plates", "đĩa"],
      ["truck", "xe tải"],
      ["curtains", "rèm cửa"],
    ],
    questions: [
      mc("a2-n16-r1", "Hà viết thư cho mẹ để làm gì?", ["Mời mẹ đến ăn tối", "Báo cho mẹ việc chuẩn bị chuyển nhà đã đến đâu", "Nhờ mẹ tìm trường cho Bin", "Kể về căn hộ cũ"], 1, "Just a quick update about the move: Hà kể việc gì đã xong, việc gì chưa."),
      mc("a2-n16-r2", "Việc nào đã xong rồi?", ["Dọn dẹp căn hộ mới", "Tìm trường mới cho Bin", "Đặt xe tải cho sáng Chủ nhật", "Công ty mạng gọi lại"], 2, "I've already booked a small truck for Sunday morning. Ba việc còn lại đều là haven't / hasn't... yet."),
      fill("a2-n16-r3", "Hoàn thành câu theo bài đọc: Khoa has ___ finished packing the kitchen. (vừa mới)", ["just"], "Vừa mới xong: has just + V3."),
      mc("a2-n16-r4", "Ngày mai Hà sẽ làm gì?", ["Gọi lại cho công ty mạng", "Dọn căn hộ mới", "Đi mua rèm cửa", "Xếp quần áo vào thùng"], 0, "The internet company hasn't called us back yet. I'll phone them again tomorrow."),
      mc("a2-n16-r5", "Câu nào đúng theo bức thư?", ["Cả nhà đã chuyển sang căn hộ mới", "Họ chưa dọn dẹp căn hộ mới", "Bin đã có trường mới", "Mẹ đã mua rèm cửa rồi"], 1, "We haven't cleaned the new flat yet. Họ sẽ chuyển nhà vào Chủ nhật, và Hà còn đang hỏi mẹ về rèm cửa."),
    ],
  }),
  task: task({
    prompt: "Ngày mai bạn đi du lịch Đà Nẵng cùng một người bạn. Viết tin nhắn 6–7 câu (ít nhất 45 từ) cho bạn ấy: việc gì bạn đã làm rồi, việc gì vừa mới làm, việc gì chưa làm, và hỏi bạn ấy đã chuẩn bị chưa.",
    hints: [
      "Việc đã xong rồi: I've already + V3.",
      "Việc vừa mới xong: I've just + V3.",
      "Việc chưa làm: I haven't + V3 + yet.",
      "Hỏi bạn: Have you + V3 + yet?",
    ],
    model: "Hi Linh, I'm getting ready for our trip to Da Nang. I've already booked the hotel, and I've just bought the train tickets online. I've packed my clothes, but I haven't bought any snacks yet. Have you checked the weather yet? It might rain. Have you packed your bag yet? See you at the station tomorrow!",
    checklist: [
      "Câu nào có just, already hoặc yet đều dùng have / has + V3.",
      "Just và already đứng giữa have và V3.",
      "Yet đứng cuối câu, chỉ trong câu phủ định hoặc câu hỏi.",
      "Có ít nhất 1 câu hỏi Have you... yet?",
      "Không dùng hiện tại hoàn thành cùng yesterday hay last night.",
      "V3 bất quy tắc viết đúng (bought, sent, done, written).",
    ],
    minWords: 45,
  }),
});
