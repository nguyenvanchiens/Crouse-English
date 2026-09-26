import { correct, fill, listenQ, mc, reorder } from "../builders";
import type { Exercise } from "../types";

/** Extra final-test items for Tiếng Anh B1, 10 per chapter (two of each kind), drawn at random with the original bank. */
export const FINAL_EXTRA_TIENG_ANH_B1: Exercise[][] = [
  // chapter 1: past continuous / past simple, for / since, past perfect, would / used to, present perfect continuous
  [
    mc("b1-f21", "Sorry about the mess. I ___ the living room, and I haven't finished yet.", ["have painted", "had painted", "have been painting", "paint"], 2, "Việc bắt đầu từ trước, kéo dài đến giờ và chưa xong (haven't finished yet): have been + V-ing. Have painted là đã sơn xong, trái với vế sau."),
    mc("b1-f22", "I ___ my colleague Hoa since we started university, and she's still my best friend.", ["have known", "have been knowing", "know", "knew"], 0, "Quen từ một mốc quá khứ đến giờ: hiện tại hoàn thành. Know là động từ chỉ trạng thái nên không dùng dạng tiếp diễn: have known."),
    fill("b1-f23", "She's been ___ overtime every evening this week, so she's exhausted. (do)", ["doing", "working"], "Has been + V-ing: hoạt động kéo dài liên tục đến bây giờ. Do overtime nghĩa là làm thêm giờ."),
    fill("b1-f24", "My grandmother ___ never used a smartphone before we gave her one last Tet. (chưa từng, một từ)", ["had", "'d"], "Chưa từng làm gì trước một mốc khác trong quá khứ (we gave her one): had never + V3."),
    reorder("b1-f25", "When did you realise that you had lost it?", "Nhận ra (did you realise) là mốc quá khứ; việc làm mất xảy ra trước đó nên dùng had lost."),
    reorder("b1-f26", "My little brother wouldn't share his toys with anyone.", "Wouldn't + V trong chuyện ngày xưa nghĩa là không chịu làm gì, lặp đi lặp lại nhiều lần."),
    listenQ("b1-f27", "Trời bắt đầu mưa lúc người nói đang làm gì?", "I was riding my motorbike to work when it suddenly started to rain. Luckily, I had a raincoat in my bag.", ["Đang đợi xe buýt ở bến", "Đang đi xe máy đi làm", "Đang ngồi trong văn phòng", "Đang đi mua áo mưa"], 1, "Was riding (quá khứ tiếp diễn) là việc đang diễn ra; started to rain (quá khứ đơn) là việc chen vào."),
    listenQ("b1-f28", "Người nói làm ở khách sạn này được bao lâu rồi?", "I moved to Da Nang in 2019, and I've worked at this hotel for three years.", ["Từ năm 2019", "Chưa đến một năm", "Mười năm", "Ba năm"], 3, "I've worked here for three years: làm ở khách sạn được ba năm và vẫn đang làm. Năm 2019 là lúc chuyển đến Đà Nẵng, nên dùng quá khứ đơn moved."),
    correct("b1-f29", "I have met my husband ten years ago.", "I met my husband ten years ago.", "Ago chỉ một thời điểm đã kết thúc nên dùng quá khứ đơn, không dùng hiện tại hoàn thành."),
    correct("b1-f30", "When we lived in Hue, we would have a big garden.", ["When we lived in Hue, we used to have a big garden.", "When we lived in Hue, we had a big garden."], "Have (sở hữu) là trạng thái, nên không dùng would; dùng used to have hoặc quá khứ đơn had. Would chỉ dùng cho hành động lặp lại."),
  ],
  // chapter 2: future continuous / perfect, deduction, question tags, conditionals, wish, be / get used to
  [
    mc("b1-f31", "Your parents didn't go to Da Lat last week, ___?", ["did they", "didn't they", "were they", "do they"], 0, "Câu chính phủ định ở quá khứ đơn (didn't go) nên đuôi khẳng định, mượn did: did they."),
    mc("b1-f32", "By the end of this month, Lan ___ in this company for exactly ten years.", ["will be working", "works", "has worked", "will have worked"], 3, "By + mốc tương lai, tính tròn một khoảng thời gian đến mốc đó: will have + V3."),
    fill("b1-f33", "I failed my driving test. If only I ___ more! (practise)", ["had practised", "'d practised", "had practiced", "'d practiced"], "Tiếc một việc đã qua (đã không luyện tập nhiều): if only + had + V3."),
    fill("b1-f34", "I'm slowly getting used to ___ up at five for my new job. (get)", ["getting"], "Get used to + V-ing: dần quen với việc gì. To ở đây là giới từ nên theo sau là V-ing."),
    reorder("b1-f35", "She must be waiting for someone.", "Must be + V-ing: đoán gần như chắc chắn về việc đang diễn ra ngay lúc này."),
    reorder("b1-f36", "You won't be using your laptop tonight, will you?", "Won't be + V-ing: hỏi lịch sự về kế hoạch của người khác. Câu chính phủ định (won't) nên đuôi khẳng định: will you."),
    listenQ("b1-f37", "Thực tế hiện nay của người nói là gì?", "If I earned a bit more, I'd rent a flat near the office. At the moment, I spend two hours a day on the bus.", ["Đã thuê được căn hộ gần công ty", "Sắp được tăng lương", "Chưa đủ tiền thuê căn hộ gần công ty", "Đi làm bằng xe máy mỗi ngày"], 2, "Câu điều kiện loại 2 (If + quá khứ đơn, would + V) nói điều không có thật ở hiện tại: thực tế là người nói chưa kiếm đủ tiền nên vẫn đi xe buýt hai tiếng mỗi ngày."),
    listenQ("b1-f38", "Từ hai đến bốn giờ chiều mai, người nói sẽ đang làm gì?", "Please don't call me between two and four tomorrow afternoon. I'll be having a job interview then.", ["Đang gọi điện cho bạn", "Đang phỏng vấn xin việc", "Đang ngủ trưa", "Đang đi đón con"], 1, "Will be + V-ing: việc sẽ đang diễn ra tại một thời điểm trong tương lai (từ hai đến bốn giờ chiều mai)."),
    correct("b1-f39", "I wish I didn't sell my old guitar last year.", "I wish I hadn't sold my old guitar last year.", "Tiếc một việc trong quá khứ (last year) phải lùi thêm một bậc: wish + had + V3. Sell có V3 là sold."),
    correct("b1-f40", "Unless you don't book early, the hotel will be full.", ["Unless you book early, the hotel will be full.", "If you don't book early, the hotel will be full."], "Unless đã mang nghĩa if… not, nên sau unless dùng câu khẳng định. Muốn giữ don't thì đổi unless thành if."),
  ],
  // chapter 3: -ed / -ing, experience, opinions, although / however, verb patterns, indirect questions, reported speech
  [
    mc("b1-f41", "Our manager ___ us that the office would close early on Friday.", ["said", "told", "spoke", "talked"], 1, "Có người nghe (us) đứng ngay sau động từ tường thuật thì dùng told. Say không đi với người nghe ngay sau."),
    mc("b1-f42", "Linh was ill, but she managed ___ the report before the deadline.", ["finishing", "finish", "to finish", "to finishing"], 2, "Manage đi với to + V: xoay xở làm được một việc khó."),
    fill("b1-f43", "It was a long and ___ day, so I went to bed at nine. (tire)", ["tiring"], "Mô tả cái ngày làm người ta mệt thì dùng -ing: tiring. Cảm giác của người mới dùng -ed: tired."),
    fill("b1-f44", "Last Saturday, Hoa said, “I can't come to the party tonight.” → Hoa said she ___ come to the party that night.", ["couldn't", "could not"], "Động từ tường thuật ở quá khứ và thời điểm đã qua (that night), nên can lùi thành could: couldn't."),
    reorder("b1-f45", "I wonder why she didn't reply.", "Sau I wonder why, phần câu hỏi theo trật tự câu kể: chủ ngữ she rồi mới đến didn't reply. Câu bắt đầu bằng I wonder kết thúc bằng dấu chấm."),
    reorder("b1-f46", "The receptionist asked us if we had a reservation.", "Câu hỏi Có / Không tường thuật: asked + người + if + trật tự câu kể, động từ đã lùi thì (had)."),
    listenQ("b1-f47", "Ông Hùng bảo mọi người làm gì?", "Mr Hung called this morning. He said he was in a traffic jam and told us to start the meeting without him.", ["Bắt đầu cuộc họp mà không cần đợi ông", "Hoãn cuộc họp sang buổi chiều", "Gọi lại cho ông ngay", "Ra đường đón ông"], 0, "Told us to + V: bảo chúng tôi làm gì. Ông Hùng bị tắc đường nên bảo mọi người họp trước."),
    listenQ("b1-f48", "Người nói nghĩ gì về việc chuyển sang văn phòng mới?", "Although the new office is further from my home, I think moving there is a good idea, because the rooms are much brighter.", ["Phản đối vì văn phòng mới xa nhà", "Chưa có ý kiến gì", "Thấy phòng ở văn phòng mới tối hơn", "Ủng hộ, dù văn phòng mới xa nhà hơn"], 3, "Although nối hai ý trái nhau trong một câu: văn phòng xa hơn, nhưng người nói vẫn thấy chuyển là ý hay vì phòng sáng hơn nhiều."),
    correct("b1-f49", "She avoided to answer my question about the salary.", "She avoided answering my question about the salary.", "Avoid luôn đi với V-ing, không đi với to V: avoided answering."),
    correct("b1-f50", "I'm really exciting about starting my new job next week.", "I'm really excited about starting my new job next week.", "Nói cảm xúc của bản thân thì dùng -ed: excited. I'm exciting nghĩa là tôi là người gây hào hứng cho người khác."),
  ],
  // chapter 4: passive, have something done, relative clauses, comparisons, so / such, phrasal verbs
  [
    mc("b1-f51", "Don't touch the door! It ___, and the paint is still wet.", ["has just painted", "was just painting", "is just paint", "has just been painted"], 3, "Cánh cửa không tự sơn được, nên cần bị động; việc vừa xong, kết quả còn đến bây giờ: has just been + V3."),
    mc("b1-f52", "It was ___ interesting talk that nobody wanted to leave.", ["such an", "so an", "so", "such"], 0, "Trước cụm a / an + tính từ + danh từ dùng such: such an interesting talk. So chỉ đứng trước tính từ đứng một mình."),
    fill("b1-f53", "This is the village ___ my mother grew up. (nơi)", ["where", "in which"], "Nói về nơi xảy ra sự việc thì dùng where (trang trọng hơn là in which)."),
    fill("b1-f54", "The ___ you leave, the less traffic there will be. (sớm hơn)", ["earlier", "sooner"], "Càng… càng…: the + so sánh hơn…, the + so sánh hơn…: the earlier (the sooner) you leave, the less traffic."),
    reorder("b1-f55", "We are having our old kitchen painted.", "Thuê người khác làm: have + đồ vật + V3 (have our old kitchen painted). Thì được chia ở have: are having."),
    reorder("b1-f56", "He picked it up from the floor.", "Pick up là cụm tách được: đại từ it bắt buộc đứng giữa picked và up."),
    listenQ("b1-f57", "Vì sao hồ bơi đóng cửa vào tuần sau?", "The swimming pool will be closed next week because the old showers will be replaced. It will be opened again the following Monday.", ["Vì có giải thi đấu bơi", "Vì các vòi sen cũ sẽ được thay mới", "Vì nhân viên nghỉ lễ", "Vì nước trong hồ bị bẩn"], 1, "Will be + V3: bị động ở tương lai. The old showers will be replaced: vòi sen cũ sẽ được thay mới."),
    listenQ("b1-f58", "So với căn hộ cũ, căn hộ mới thế nào?", "Our new flat is a bit smaller than the old one, but the rent is half as high, and it's much closer to my office.", ["Rộng hơn nhiều nhưng tiền thuê gấp đôi", "Rộng bằng căn cũ nhưng xa công ty hơn", "Nhỏ hơn một chút nhưng tiền thuê chỉ bằng một nửa", "Nhỏ hơn nhiều và tiền thuê đắt hơn"], 2, "A bit smaller: nhỏ hơn một chút; half as high: chỉ bằng một nửa; much closer: gần hơn nhiều."),
    correct("b1-f59", "Da Nang, that is famous for its beaches, is my hometown.", "Da Nang, which is famous for its beaches, is my hometown.", "Mệnh đề giữa hai dấu phẩy chỉ thêm thông tin (không xác định) nên không dùng that. Đà Nẵng là nơi chốn làm chủ ngữ của is, dùng which."),
    correct("b1-f60", "My new phone isn't as cheaper as my old one.", ["My new phone isn't as cheap as my old one.", "My new phone isn't so cheap as my old one."], "Cấu trúc không… bằng là not as + tính từ nguyên dạng + as: not as cheap as. Không dùng dạng so sánh hơn (cheaper) giữa as… as."),
  ],
];
