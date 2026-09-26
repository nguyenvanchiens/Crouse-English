import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "dieu-kien-khong-chi-if",
  title: "Điều kiện không chỉ có if",
  minutes: 35,
  lecture: {
    title: "Unless, provided that, as long as, in case, otherwise, suppose",
    blocks: [
      p("Sếp người Úc nhắn bạn: **Unless you hear from me, go ahead with the launch.** Nhiều bạn đọc xong vẫn không chắc: rốt cuộc là làm hay chờ? Trong công việc, hợp đồng, bảo hiểm, điều kiện được nói bằng rất nhiều từ khác ngoài **if**, và mỗi từ mang một sắc thái riêng. Hiểu sai một chữ **unless** hay **in case** có khi là làm sai cả một việc."),
      table(
        ["Từ nối", "Nghĩa", "Ví dụ"],
        ["unless", "trừ khi, nếu… không", "We'll start at nine unless the client calls."],
        ["provided / providing (that)", "với điều kiện là (chặt chẽ, trang trọng)", "You can work from home provided that you answer your emails."],
        ["as long as / so long as", "miễn là", "As long as you're honest with me, I'll support you."],
        ["in case", "phòng khi, để phòng trường hợp", "Take a charger in case your battery runs out."],
        ["otherwise", "nếu không thì", "Save the file now. Otherwise, you may lose it."],
        ["suppose / supposing (that)", "giả sử", "Suppose the flight is cancelled, what will we do?"],
      ),
      p("Quy tắc về thì giống hệt câu điều kiện với if: sau **unless, provided that, as long as, in case** ta dùng **hiện tại đơn** để nói về tương lai, không dùng will. Riêng **otherwise** không mở đầu mệnh đề điều kiện mà mở đầu **mệnh đề kết quả**, nên phía sau nó dùng will, may, would… bình thường. Về dấu câu, viết **. Otherwise,** hoặc **; otherwise,** chứ không nối hai mệnh đề chỉ bằng một dấu phẩy."),
      ex("Unless we receive the payment by Friday, we will stop the delivery.", "Nếu đến thứ Sáu chúng tôi không nhận được thanh toán, chúng tôi sẽ ngừng giao hàng.", "Unless = if… not. Câu này tương đương: If we don't receive the payment by Friday…"),
      mistake("Unless you don't hurry, you'll miss the train.", "Unless you hurry, you'll miss the train.", "Tiếng Việt nói “trừ khi… không thì…” rất quen miệng, nên học trò thêm don't vào sau unless. Nhưng unless đã mang sẵn nghĩa phủ định; thêm not nữa là phủ định hai lần, câu thành ngược nghĩa."),
      ex("I'll bring my laptop in case the projector doesn't work.", "Tôi sẽ mang theo máy tính xách tay phòng khi máy chiếu không chạy.", "Tôi mang máy tính dù thế nào đi nữa. In case nói về việc làm trước để đề phòng."),
      table(
        ["Câu", "Ý nghĩa thật"],
        ["I'll call you if I'm late.", "Chỉ gọi khi nào bị muộn. Không muộn thì không gọi."],
        ["I'll give you my number in case I'm late.", "Đưa số điện thoại ngay bây giờ, để phòng trường hợp bị muộn."],
      ),
      mistake("Take a jacket in case it will be cold.", "Take a jacket in case it gets cold.", "Tiếng Việt nói “phòng khi trời sẽ lạnh”, và chữ “sẽ” kéo theo will. Sau in case, cũng như sau if, dùng hiện tại đơn để nói về tương lai."),
      ex("We need to leave now. Otherwise, we'll be late for the meeting.", "Chúng ta phải đi ngay bây giờ. Nếu không thì sẽ trễ họp mất.", "Otherwise = nếu không làm điều vừa nói. Otherwise là trạng từ, nên đặt nó đầu câu mới (sau dấu chấm) hoặc sau dấu chấm phẩy, và có dấu phẩy phía sau: We need to leave now; otherwise, we'll be late. Muốn nối gọn trong một câu thì dùng or: Leave now or you'll be late."),
      p("**Suppose / supposing** dùng để đưa ra một giả thiết rồi hỏi tiếp, rất hay gặp khi bàn phương án dự phòng. Dùng **hiện tại** khi tình huống hoàn toàn có thể xảy ra, dùng **quá khứ** khi nó khó xảy ra hoặc chỉ là tưởng tượng."),
      ex("Supposing you lost your job tomorrow, what would you do?", "Giả sử ngày mai bạn mất việc, bạn sẽ làm gì?", "Lost là quá khứ giả định, đi với would ở vế sau, giống câu điều kiện loại 2."),
      mistake("Suppose if the client says no, what will we do?", "Suppose the client says no, what will we do?", "Dịch từng chữ “giả sử nếu” nên học trò đặt cả suppose lẫn if. Suppose đã làm nhiệm vụ của if, chỉ dùng một trong hai."),
      tip("Mẹo nhớ nhanh: **unless = if not**; **in case = chuẩn bị trước cho chắc**; **as long as = miễn là**; **otherwise = không thì…**. Khi làm bài, hãy thử thay unless bằng if… not. Nếu câu vẫn đúng nghĩa thì bạn đã chọn đúng."),
      teacher("Có một bẫy mà lớp nào tôi cũng thấy học trò rơi vào: nhầm **in case** với **if**. Tôi hay bảo các bạn tự hỏi một câu: **việc này làm bây giờ, hay chỉ làm khi chuyện kia xảy ra?** Làm ngay bây giờ để phòng hờ thì dùng in case, chờ chuyện xảy ra mới làm thì dùng if. Mỗi sáng trước khi ra khỏi nhà, hãy tự nói một câu với in case: **I'm taking a raincoat in case it rains.** Nói mãi thành quen, lúc cần sẽ tự bật ra đúng."),
      summary(
        "**Unless = if… not.** Không thêm not sau unless: Unless you hurry, không phải Unless you don't hurry.",
        "**In case** = làm ngay bây giờ để phòng hờ; **if** = chỉ làm khi chuyện đó xảy ra.",
        "**Provided (that)**, **as long as** = với điều kiện là, miễn là; provided that trang trọng hơn.",
        "Sau unless, provided that, as long as, in case dùng **hiện tại đơn** cho tương lai, không dùng will.",
        "**Otherwise** mở đầu mệnh đề **kết quả** (nếu không thì…), viết **. Otherwise,** hoặc **; otherwise,**; **suppose / supposing** đưa ra giả thiết và không đi kèm if.",
      ),
    ],
  },
  words: [
    word("condition", "/kənˈdɪʃ.ən/", "điều kiện", "You can take the day off on one condition: finish the report first.", "con|di|tion", 1),
    word("guarantee", "/ˌɡær.ənˈtiː/", "sự bảo đảm; bảo đảm", "We can't guarantee delivery unless you order today.", "guar|an|tee", 2, "Trọng âm ở âm tiết cuối: guar-an-TEE. Chữ u không đọc."),
    word("deposit", "/dɪˈpɒz.ɪt/", "tiền đặt cọc", "You'll get your deposit back provided that the flat is left clean.", "de|pos|it", 1, "Trọng âm ở âm tiết thứ hai: de-POS-it. Chữ s đọc là /z/."),
    word("insurance", "/ɪnˈʃɔː.rəns/", "bảo hiểm", "Buy travel insurance in case you get ill abroad.", "in|sur|ance", 1),
    word("emergency", "/ɪˈmɜː.dʒən.si/", "trường hợp khẩn cấp", "Keep this number in case of an emergency.", "e|mer|gen|cy", 1),
    word("backup", "/ˈbæk.ʌp/", "bản sao lưu, phương án dự phòng", "Always make a backup of your files.", "back|up", 0),
    word("penalty", "/ˈpen.əl.ti/", "tiền phạt, hình phạt", "There is a penalty if you cancel the contract early.", "pen|al|ty", 0),
    word("warranty", "/ˈwɒr.ən.ti/", "giấy bảo hành, chế độ bảo hành", "The laptop is still under warranty, so the repair is free.", "war|ran|ty", 0, "Âm đầu đọc là /wɒ/, gần “wo”, không đọc là “wa”."),
  ],
  exercises: [
    mc("b2-n06-1", "We won't sign the contract ___ they lower the price.", ["unless", "in case", "otherwise", "as long as"], 0, "Unless = if… not: nếu họ không hạ giá thì chúng ta không ký."),
    mc("b2-n06-2", "Take some cash ___ the card machine isn't working.", ["unless", "provided that", "in case"], 2, "Mang tiền mặt trước để phòng hờ, nên dùng in case."),
    fill("b2-n06-3", "Save your work regularly. ___, you might lose everything. (nếu không thì)", ["Otherwise", "If not"], "Otherwise (hoặc If not) mở đầu mệnh đề kết quả: nếu không làm điều vừa nói thì…"),
    fill("b2-n06-4", "You can borrow my car as long as you ___ it back by six. (bring)", ["bring"], "Sau as long as dùng hiện tại đơn để nói về tương lai, không dùng will bring."),
    reorder("b2-n06-5", "Suppose the client says no?", "Suppose + mệnh đề ở thì hiện tại, đọc lên giọng như một câu hỏi, nghĩa là: nhỡ khách hàng từ chối thì sao?"),
    reorder("b2-n06-6", "Leave now or you'll be late.", "Câu mệnh lệnh + or + kết quả: đi ngay đi, không thì sẽ muộn. Khi viết bằng otherwise thì tách câu: Leave now. Otherwise, you'll be late."),
    listen("b2-n06-7", "Unless you hear from me, start the meeting without me.", ["Khi nào tôi báo thì mới bắt đầu cuộc họp.", "Nếu tôi không báo gì thì cứ bắt đầu cuộc họp, không cần chờ tôi.", "Bạn nhớ nghe tôi nói xong rồi mới bắt đầu cuộc họp."], 1, "Unless you hear from me = if you don't hear from me: nếu không có tin gì từ tôi."),
    listen("b2-n06-8", "You can work from home provided that you're online by nine.", ["Bạn phải lên văn phòng trước chín giờ.", "Bạn được làm ở nhà nếu chín giờ mới lên mạng.", "Bạn không được làm ở nhà sau chín giờ.", "Bạn được làm ở nhà với điều kiện là có mặt trên mạng trước chín giờ."], 3, "Provided that: với điều kiện là. By nine: muộn nhất là chín giờ."),
    correct("b2-n06-9", "Unless the payment doesn't arrive by Friday, we will cancel the order.", ["Unless the payment arrives by Friday, we will cancel the order.", "If the payment doesn't arrive by Friday, we will cancel the order."], "Unless đã mang nghĩa phủ định (= if… not), nên bỏ doesn't. Hoặc giữ doesn't và đổi unless thành if."),
    correct("b2-n06-10", "Please book a bigger room in case more people will come.", ["Please book a bigger room in case more people come."], "Sau in case dùng hiện tại đơn để nói về tương lai, không dùng will: in case more people come."),
  ],
  speaking: [
    say("I'll send you a copy in case you need it.", "Tôi sẽ gửi anh một bản phòng khi anh cần đến."),
    say("We won't sign the contract unless they lower the price.", "Chúng tôi sẽ không ký hợp đồng trừ khi họ hạ giá."),
    say("As long as we work together, we'll finish on time.", "Miễn là chúng ta làm cùng nhau, chúng ta sẽ xong đúng hạn."),
  ],
  freeSpeaking: free(
    "What do you always take with you when you travel, just in case?",
    "Kể những thứ bạn luôn mang theo khi đi xa để phòng hờ, và những điều kiện để chuyến đi của bạn suôn sẻ. Dùng in case, as long as, unless và otherwise.",
    "When I travel, I always pack a small first-aid kit in case I get ill, and I carry some cash in case the card machines aren't working. I also take a power bank, because my phone battery never lasts all day. I'm quite relaxed about plans, and I don't book tours in advance unless they are very popular. As long as I have a good map and a comfortable pair of shoes, I'm happy. I always check the weather before I leave the hotel; otherwise, I might get caught in the rain.",
  ),
  dialogue: dialogue(
    "Lên phương án dự phòng cho buổi hội thảo",
    "Thứ Bảy này công ty tổ chức hội thảo khách hàng ở một khách sạn tại Đà Nẵng. Chị Mai, người phụ trách, và anh Tom, đồng nghiệp người Anh, rà lại các phương án dự phòng.",
    { A: "Mai, phụ trách sự kiện", B: "Tom, đồng nghiệp" },
    A("Tom, the workshop is on Saturday. Let's go through the backup plan.", "Tom, hội thảo diễn ra vào thứ Bảy. Mình rà lại phương án dự phòng nhé."),
    B("Good idea. Suppose it rains, can we still use the garden?", "Ý hay đấy. Giả sử trời mưa thì mình còn dùng khu vườn được không?"),
    A("No. The forecast says rain, so unless it changes, we'll move everything inside.", "Không. Dự báo nói trời sẽ mưa, nên trừ khi dự báo thay đổi, mình sẽ chuyển hết vào trong."),
    B("OK. I'll bring a second projector in case the hotel projector doesn't work.", "Được. Tôi sẽ mang thêm một máy chiếu phòng khi máy của khách sạn không chạy."),
    A("Great. The hotel will return our deposit provided that we cancel before Thursday.", "Tốt quá. Khách sạn sẽ trả lại tiền đặt cọc với điều kiện mình hủy trước thứ Năm."),
    B("So we have to decide by Wednesday. Otherwise, we'll pay a penalty.", "Vậy mình phải quyết định trước thứ Tư. Nếu không thì sẽ bị phạt."),
    A("Exactly. And our speaker from Singapore can join online as long as we send her the link by Friday.", "Đúng vậy. Còn diễn giả từ Singapore có thể tham gia trực tuyến, miễn là mình gửi đường link cho chị ấy trước thứ Sáu."),
    B("Supposing the internet went down during her talk, what would we do?", "Giả sử mạng bị mất khi chị ấy đang nói thì mình làm gì?"),
    A("We'd play her recorded talk. I've made a backup of it on my laptop, just in case.", "Mình sẽ phát bản ghi hình bài nói của chị ấy. Tôi đã sao lưu một bản trên máy tính, để phòng hờ."),
    B("You've thought of everything. I'll send her the link today in case she wants to test it.", "Chị tính hết cả rồi. Hôm nay tôi sẽ gửi link cho chị ấy, phòng khi chị ấy muốn thử trước."),
  ),
  dialogueQuestions: [
    listenQ("b2-n06-d1", "When do they have to cancel to get their deposit back?", "The hotel will return our deposit provided that we cancel before Thursday.", ["After the workshop", "Before Monday", "On Saturday morning", "Before Thursday"], 3, "Provided that we cancel before Thursday: khách sạn chỉ trả cọc với điều kiện hủy trước thứ Năm."),
    mc("b2-n06-d2", "Why is Tom bringing a second projector?", ["Because the hotel has asked him to", "In case the hotel's projector doesn't work", "Because the workshop has moved to the garden", "So that the speaker can show her slides online"], 1, "Tom nói: I'll bring a second projector in case the hotel projector doesn't work. Mang theo để phòng hờ."),
    mc("b2-n06-d3", "What will they do if the internet goes down during the speaker's talk?", ["Cancel the rest of the workshop", "Ask the speaker to fly in from Singapore", "Play a recording of her talk", "Move the audience into the garden"], 2, "Mai trả lời: We'd play her recorded talk. Chị đã sao lưu bản ghi trên máy tính."),
  ],
  reading: reading({
    title: "Before you sign: reading the small print",
    text: `Most of us sign contracts without reading them properly. We rent flats, buy travel insurance and accept warranties on new phones, and we only look at the conditions when something goes wrong. By then, of course, it is usually too late.

Take a typical rental agreement. It may say that your deposit will be returned in full provided that the flat is left in good condition. That sounds fair, but what does "good condition" mean? Unless the contract defines it, you and your landlord may disagree. Experts therefore recommend taking dated photos of every room on the day you move in, in case there is an argument later.

Travel insurance is another area where the wording matters. Many policies will pay for medical treatment abroad as long as you tell the company about any existing health problems. If you do not mention them, the insurer may refuse to pay, even for an illness that has nothing to do with your condition. Read the list of exclusions carefully; otherwise, you might discover that your "full cover" does not include the activities you had planned, such as diving or motorcycling.

Warranties on electronic goods can also surprise buyers. A two-year warranty sounds generous, but it often applies only if the product is repaired by an authorised service centre. Suppose your laptop stops working and you take it to a cheaper local shop. The warranty may then no longer be valid.

None of this means that companies are trying to trick you. Most conditions exist for good reasons. However, it is your responsibility to understand what you are agreeing to. Before you sign anything, ask yourself three questions. What exactly do I have to do? What happens if I don't do it? And what will I have to pay if I change my mind?

If you cannot answer all three, do not sign until you can.`,
    glossary: [
      ["small print", "điều khoản in chữ nhỏ (trong hợp đồng)"],
      ["landlord", "chủ nhà cho thuê"],
      ["define", "định nghĩa, nói rõ"],
      ["policy", "hợp đồng bảo hiểm"],
      ["exclusion", "điều khoản loại trừ (không được bảo hiểm)"],
      ["authorised", "được ủy quyền, chính hãng"],
      ["valid", "còn hiệu lực"],
    ],
    questions: [
      mc("b2-n06-r1", "What is the writer's main message?", ["Most contracts are designed to trick customers.", "You should understand the conditions of a contract before you sign it.", "Travel insurance is usually a waste of money.", "Landlords rarely return deposits."], 1, "Cả bài khuyên đọc kỹ điều khoản trước khi ký; đoạn cuối nói rõ công ty không cố lừa khách."),
      fill("b2-n06-r2", "Experts recommend taking dated photos of every room ___ there is an argument later. (phòng khi)", ["in case"], "Chụp ảnh ngay hôm dọn vào để phòng hờ tranh chấp sau này: in case."),
      mc("b2-n06-r3", "According to the text, when might an insurer refuse to pay for medical treatment?", ["If you travel for more than two weeks", "If you buy the policy online", "If the illness is very serious", "If you did not tell the company about an existing health problem"], 3, "Bảo hiểm chỉ trả as long as you tell the company about any existing health problems; không khai thì họ có thể từ chối."),
      mc("b2-n06-r4", "What can we infer about taking a laptop to a cheap local repair shop?", ["It may mean losing the free repairs that the warranty offers.", "It is always the best way to save money.", "It is not allowed by law.", "It will make the laptop work faster."], 0, "Bảo hành thường chỉ áp dụng khi sửa ở trung tâm được ủy quyền, nên sửa ở tiệm ngoài có thể mất bảo hành."),
      mc("b2-n06-r5", "What is the writer's attitude towards the companies that write these conditions?", ["Angry: they are trying to cheat customers", "Uninterested: the writer only cares about landlords", "Fair: most conditions have good reasons, but buyers must read them", "Admiring: companies always protect their customers"], 2, "None of this means that companies are trying to trick you… However, it is your responsibility…: người viết công bằng với cả hai phía."),
    ],
  }),
  task: task({
    prompt: "Viết email khoảng 140–180 từ gửi nhóm của bạn về kế hoạch dự phòng cho một chuyến thăm của khách hàng hoặc một sự kiện sắp tới. Nêu rõ việc gì sẽ diễn ra trừ khi có sự cố, cần chuẩn bị gì để phòng hờ, điều kiện của các bên và điều gì xảy ra nếu không làm đúng hạn.",
    hints: [
      "Dùng ít nhất bốn từ khác nhau: unless, in case, provided that / as long as, otherwise, suppose.",
      "Sau unless, in case, provided that, as long as dùng hiện tại đơn, không dùng will.",
      "Đặt otherwise sau dấu chấm hoặc dấu chấm phẩy để mở đầu phần kết quả, và có dấu phẩy phía sau.",
    ],
    model: "Hi team,\n\nHere is the backup plan for Friday's visit from our clients at Tanaka Hirose Motors. Please read it carefully and reply by Tuesday.\n\nThe clients will arrive at the office at nine unless their flight is delayed. Nam will meet them at the airport, and he will call me as soon as they land. Please print extra copies of the contract in case the printer in the meeting room breaks down again.\n\nAfter the meeting, we can take the clients to lunch at Sen Restaurant, provided that we book a table by Wednesday. Please tell me by Tuesday if there is any food you cannot eat; otherwise, I will order the set menu for everyone. The factory tour can go ahead as long as the weather is dry, because part of the route is outside.\n\nSuppose the clients want to stay longer, who could drive them back to their hotel in the evening? Please let me know if you are free.\n\nThanks for your help,\nMai",
    checklist: [
      "Dùng ít nhất bốn từ nối điều kiện khác nhau.",
      "Sau unless, in case, provided that, as long as dùng hiện tại đơn, không dùng will.",
      "Không có not thừa sau unless.",
      "In case chỉ dùng cho việc chuẩn bị trước để phòng hờ.",
      "Otherwise mở đầu mệnh đề kết quả và đứng sau dấu chấm hoặc dấu chấm phẩy.",
    ],
    minWords: 140,
  }),
});
