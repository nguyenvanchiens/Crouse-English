import { ex, fill, lesson, listen, mc, mistake, p, reorder, say, table, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "qua-khu-hoan-thanh",
  title: "Chuyện xảy ra trước đó",
  minutes: 22,
  lecture: {
    title: "Quá khứ hoàn thành: had + V3",
    blocks: [
      p("Bạn kể: “Hôm qua tôi ra đến ga thì tàu **đã chạy mất rồi**.” Trong câu này có hai việc trong quá khứ: tôi đến ga, và tàu chạy. Việc tàu chạy xảy ra **trước**. Tiếng Việt chỉ cần chữ “đã… rồi”, còn tiếng Anh dùng **quá khứ hoàn thành** (had + V3) để đánh dấu việc xảy ra trước một mốc khác trong quá khứ."),
      table(
        ["Dạng", "Cấu trúc", "Ví dụ"],
        ["Khẳng định", "S + had + V3", "The train had left."],
        ["Phủ định", "S + had not (hadn't) + V3", "I hadn't booked a ticket."],
        ["Nghi vấn", "Had + S + V3?", "Had you eaten before you came?"],
      ),
      p("Had dùng chung cho mọi chủ ngữ: I, you, he, she, we, they đều là **had**, không đổi. Khi nói, had thường rút gọn thành **'d**: I'd, she'd, they'd."),
      ex("When I got to the station, the train had already left.", "Khi tôi đến ga thì tàu đã chạy mất rồi.", "Tàu chạy trước (had left), tôi đến sau (got)."),
      ex("By the time we arrived, the meeting had started.", "Lúc chúng tôi đến nơi thì cuộc họp đã bắt đầu rồi.", "By the time: “đến lúc mà”. Vế còn lại thường dùng quá khứ hoàn thành, vì việc đó đã xảy ra trước."),
      ex("I had never seen snow before I went to Japan.", "Trước khi sang Nhật, tôi chưa từng thấy tuyết."),
      ex("She was upset because she had lost her phone.", "Cô ấy buồn vì cô ấy đã làm mất điện thoại.", "Mất điện thoại xảy ra trước, rồi mới buồn."),
      table(
        ["Câu", "Thứ tự sự việc"],
        ["When I arrived, she left.", "Tôi đến, rồi cô ấy mới đi (hai người gặp nhau)."],
        ["When I arrived, she had left.", "Cô ấy đi trước, tôi đến sau (không gặp nhau)."],
      ),
      p("Các từ hay đi cùng: **by the time** (đến lúc), **before** (trước khi), **after** (sau khi), **already** (đã… rồi), **never… before** (chưa từng… trước đó). Với before và after, thứ tự đã rõ nên người bản xứ cũng hay dùng quá khứ đơn cho cả hai vế: After I finished work, I went home. Dùng had finished cũng đúng."),
      tip("Hãy vẽ một đường thời gian trong đầu: chuyện kể đang ở quá khứ, việc nào xảy ra **sớm hơn nữa** thì lùi thêm một bậc thành **had + V3**. Mẹo nghe: sau **'d** mà có V3 (I'd gone, she'd left) thì 'd là had; sau 'd là động từ nguyên mẫu (I'd go) thì 'd là would."),
      mistake("When I arrived, the train already left.", "When I arrived, the train had already left.", "Tiếng Việt nói “tàu đã chạy rồi” mà không đổi hình thức động từ, nên người Việt quen dùng quá khứ đơn. Việc xảy ra trước một mốc quá khứ khác cần had + V3."),
      mistake("I had gone to Da Lat last year.", "I went to Da Lat last year.", "Chỉ kể một việc đơn lẻ trong quá khứ thì dùng quá khứ đơn. Quá khứ hoàn thành chỉ cần khi có một mốc quá khứ khác để so sánh trước sau."),
      teacher("Sau 50 năm dạy, tôi thấy học trò Việt mắc hai bệnh ngược nhau: hoặc **không bao giờ dùng** had, hoặc **dùng had cho mọi chuyện cũ** vì nghĩ “đã lâu rồi thì là quá khứ hoàn thành”. Nhớ giúp thầy: had + V3 không phải là “quá khứ xa”, mà là “quá khứ **trước** một quá khứ khác”. Mỗi tối, hãy kể lại một chuyện trong ngày bằng ba câu, trong đó có đúng một câu với had. Ví dụ: I got to work late. The meeting had already started. My boss wasn't happy."),
    ],
  },
  words: [
    word("forget", "/fəˈɡet/", "quên", "I realised I had forgotten my keys.", "for|get", 1, "Dạng quá khứ là forgot, V3 là forgotten."),
    word("miss", "/mɪs/", "lỡ (chuyến xe, chuyến bay); nhớ", "We missed the bus because we had left home late.", "miss", 0, "Nhớ đọc rõ âm /s/ ở cuối, đừng nuốt thành “mít”."),
    word("passport", "/ˈpɑːs.pɔːt/", "hộ chiếu", "He had lost his passport before the trip.", "pass|port", 0),
    word("departure", "/dɪˈpɑː.tʃər/", "sự khởi hành, giờ đi", "The departure had been delayed by two hours.", "de|par|ture", 1),
    word("relieved", "/rɪˈliːvd/", "nhẹ nhõm", "I was relieved because someone had found my wallet.", "re|lieved", 1, "Đuôi -ed ở đây đọc là /d/, một âm tiết: re-lieved, không đọc thành “re-li-vét”."),
    word("previous", "/ˈpriː.vi.əs/", "trước đó", "She had worked in a bank in her previous job.", "pre|vi|ous", 0),
    word("notice", "/ˈnəʊ.tɪs/", "để ý thấy, nhận thấy", "I didn't notice that it had stopped raining.", "no|tice", 0),
    word("luckily", "/ˈlʌk.əl.i/", "may mắn thay", "Luckily, I had brought an umbrella.", "luck|i|ly", 0),
  ],
  exercises: [
    mc("b1-n03-1", "When we got to the cinema, the film ___.", ["already started", "had already started", "has already started", "was already start"], 1, "Phim bắt đầu trước khi chúng tôi đến: had already started. Has already started là hiện tại hoàn thành, không hợp với câu kể quá khứ."),
    mc("b1-n03-2", "I couldn't pay for lunch because I ___ my wallet at home.", ["leave", "have left", "had left"], 2, "Để quên ví xảy ra trước lúc không trả được tiền, nên lùi thêm một bậc: had left."),
    fill("b1-n03-3", "By the time the police arrived, the thief ___ escaped.", ["had"], "By the time + quá khứ đơn, vế còn lại dùng had + V3: tên trộm đã chạy thoát trước khi cảnh sát đến."),
    fill("b1-n03-4", "She was very tired because she ___ all night. (not sleep)", ["hadn't slept", "had not slept"], "Không ngủ cả đêm xảy ra trước lúc thấy mệt: hadn't slept. Sleep có V3 là slept."),
    reorder("b1-n03-5", "Had you ever been to Da Lat before?", "Câu hỏi quá khứ hoàn thành: Had + chủ ngữ + ever + V3, before đứng cuối câu."),
    reorder("b1-n03-6", "I realised that I had forgotten my passport.", "Nhận ra (realised) là mốc quá khứ, quên hộ chiếu xảy ra trước đó nên dùng had forgotten."),
    listen("b1-n03-7", "When I got home, my husband had already cooked dinner.", ["Khi tôi về đến nhà thì chồng tôi mới bắt đầu nấu cơm.", "Khi tôi về đến nhà thì chồng tôi đã nấu xong bữa tối rồi.", "Chồng tôi về nhà rồi nấu bữa tối cho tôi."], 1, "Had already cooked: việc nấu đã xong trước khi tôi về."),
    listen("b1-n03-8", "I hadn't met her before the wedding.", ["Trước đám cưới, tôi chưa từng gặp cô ấy.", "Tôi đã gặp cô ấy trước đám cưới.", "Tôi gặp cô ấy sau đám cưới một tuần."], 0, "Hadn't met … before: chưa từng gặp trước thời điểm đó."),
  ],
  speaking: [
    say("By the time I got to the station, the train had already left.", "Lúc tôi đến ga thì tàu đã chạy mất rồi."),
    say("I had never seen snow before I went to Japan.", "Trước khi sang Nhật, tôi chưa từng thấy tuyết."),
    say("She was upset because she had lost her phone.", "Cô ấy buồn vì đã làm mất điện thoại."),
  ],
});
