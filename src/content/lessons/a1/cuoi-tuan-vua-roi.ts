import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "cuoi-tuan-vua-roi",
  title: "Cuối tuần vừa rồi",
  minutes: 26,
  lecture: {
    title: "Was, were và there was, there were",
    blocks: [
      p("Sáng thứ Hai, đồng nghiệp nước ngoài hỏi bạn: **How was your weekend?** (Cuối tuần của bạn thế nào?). Để trả lời, bạn cần quá khứ của động từ to be: **am** và **is** thành **was**, **are** thành **were**. Đây là bước đầu tiên để kể chuyện đã qua. Quá khứ của các động từ khác (went, had, visited…) bạn sẽ học ở khóa A2; chỉ với was và were, bạn đã kể được mình ở đâu, thấy thế nào, có gì và có ai."),
      table(
        ["Chủ ngữ", "Khẳng định", "Phủ định", "Câu hỏi", "Trả lời ngắn"],
        ["I / he / she / it", "I was tired.", "I wasn't tired.", "Was she tired?", "Yes, she was. / No, she wasn't."],
        ["you / we / they", "We were at home.", "We weren't at home.", "Were you at home?", "Yes, I was. / No, I wasn't."],
      ),
      ex("How was your weekend? It was great, thanks.", "Cuối tuần của bạn thế nào? Tuyệt lắm, cảm ơn bạn."),
      ex("Where were you last night? I was at my sister's house.", "Tối qua bạn ở đâu? Tôi ở nhà chị gái tôi.", "My sister's house là nhà của chị gái tôi; 's chỉ sở hữu."),
      mistake("Yesterday I am very tired.", "Yesterday I was very tired.", "Tiếng Việt không chia động từ theo thời gian: “hôm qua tôi mệt” và “hôm nay tôi mệt” dùng cùng một chữ. Tiếng Anh thì có yesterday rồi vẫn phải đổi am thành was."),
      mistake("They was at the beach.", "They were at the beach.", "Was chỉ đi với I, he, she, it. You, we, they luôn đi với were."),
      p("Muốn nói thời điểm trong quá khứ, dùng **yesterday** (hôm qua) hoặc **last** (vừa rồi, trước) cộng với tuần, tháng, năm, thứ trong tuần. Với nghĩa “vừa rồi” (last weekend, last Monday), không đặt the hay in trước last. (In the last week lại có nghĩa khác: trong bảy ngày qua.)"),
      table(
        ["Yesterday…", "Last…"],
        ["yesterday (hôm qua)", "last night (tối qua, đêm qua)"],
        ["yesterday morning (sáng hôm qua)", "last weekend (cuối tuần vừa rồi)"],
        ["yesterday afternoon (chiều hôm qua)", "last Sunday (chủ nhật vừa rồi)"],
        ["yesterday evening (tối hôm qua)", "last year (năm ngoái)"],
      ),
      mistake("I was at a party yesterday night.", "I was at a party last night.", "Tiếng Việt nói “tối hôm qua”, nên người Việt dịch thành yesterday night. Người bản xứ nói last night. Yesterday evening thì vẫn dùng được."),
      p("Tương tự **there is/there are** đã học, quá khứ là **there was** (số ít, không đếm được) và **there were** (số nhiều)."),
      table(
        ["", "Số ít / không đếm được", "Số nhiều"],
        ["Khẳng định", "There was a concert.", "There were a lot of people."],
        ["Phủ định", "There wasn't any rain.", "There weren't any taxis."],
        ["Câu hỏi", "Was there a party?", "Were there many tourists?"],
      ),
      ex("There were a lot of people at the market last Sunday.", "Chủ nhật vừa rồi chợ rất đông người.", "Tiếng Việt nói “chợ đông người”, tiếng Anh nói có nhiều người ở chợ: there were a lot of people."),
      ex("What was the weather like? It was sunny and hot.", "Thời tiết hôm đó thế nào? Trời nắng và nóng.", "What ... like? giống câu What does he look like? ở bài Mô tả một người, dùng để hỏi một thứ như thế nào."),
      tip("Trong câu khẳng định, **was** và **were** đọc nhẹ: /wəz/, /wə/. Trong câu trả lời ngắn thì đọc mạnh: **Yes, I was** /wɒz/. Wasn't đọc là /ˈwɒz.ənt/, nhớ giữ âm /t/ cuối để không lẫn với was."),
      teacher("Sáng thứ Hai nào đi dạy tôi cũng hỏi các bạn học viên một câu: **How was your weekend?** Và lần nào cũng có người trả lời “It is good”. Các bạn hãy tập cho mình phản xạ: nghe **How was…?** thì miệng trả lời bằng **It was…**. Tối chủ nhật, trước khi ngủ, viết ba câu về cuối tuần của mình: một câu với **was**, một câu với **were**, một câu với **there was/were**. Nhỏ thôi nhưng đều đặn, đó là cách người lớn tuổi như tôi đã học ngoại ngữ."),
      summary(
        "Quá khứ của to be: **I, he, she, it + was**; **you, we, they + were**.",
        "Phủ định **wasn't / weren't**; câu hỏi đảo lên đầu: Were you at home? Yes, I was.",
        "Có yesterday hay last… thì phải đổi am, is, are thành **was, were**.",
        "Nói **last night**, không nói yesterday night; với nghĩa “vừa rồi” thì không đặt the hay in trước last (last weekend).",
        "**There was** + số ít hoặc không đếm được; **there were** + số nhiều.",
        "Nghe **How was…?** thì trả lời bằng **It was…**, không trả lời It is…",
      ),
    ],
  },
  words: [
    word("weekend", "/ˌwiːkˈend/", "cuối tuần", "How was your weekend?", "week|end", 1, "Người Anh nhấn âm sau: week-END; người Mỹ hay nhấn âm đầu."),
    word("last", "/lɑːst/", "vừa rồi, trước; cuối cùng", "I was in Da Lat last week.", "last", 0, "Nhớ đọc cả /s/ lẫn /t/ ở cuối, đừng đọc thành “lát”."),
    word("beach", "/biːtʃ/", "bãi biển", "We were at the beach all day.", "beach", 0, "Kéo dài âm /iː/ như trong see và kết thúc bằng /tʃ/ nhẹ, đừng đọc thành “bích”."),
    word("party", "/ˈpɑː.ti/", "bữa tiệc", "There was a birthday party at my house.", "par|ty", 0),
    word("tired", "/taɪəd/", "mệt", "I was very tired after work.", "tired", 0, "Chỉ có một âm tiết: /taɪəd/, không đọc thành “tai-ơ-rét”."),
    word("crowded", "/ˈkraʊ.dɪd/", "đông đúc", "The market was very crowded.", "crowd|ed", 0),
    word("weather", "/ˈweð.ə/", "thời tiết", "The weather was lovely last weekend.", "weath|er", 0, "Âm /ð/ đặt đầu lưỡi giữa hai hàm răng, đừng đọc thành /d/."),
    word("concert", "/ˈkɒn.sət/", "buổi hòa nhạc", "Were you at the concert last night?", "con|cert", 0),
  ],
  exercises: [
    mc("a1-n16-1", "We ___ at the beach last Sunday.", ["are", "was", "were"], 2, "We đi với were; last Sunday là quá khứ nên không dùng are."),
    mc("a1-n16-2", "Chọn cách nói đúng cho “tối qua”:", ["last night", "yesterday night", "the last night"], 0, "Người bản xứ nói last night, không nói yesterday night. The last night lại là “đêm cuối cùng” (của chuyến đi), không phải “tối qua”."),
    fill("a1-n16-3", "I ___ at home last night. I was at a party. (không ở)", ["wasn't", "was not"], "I đi với was; phủ định là wasn't."),
    fill("a1-n16-4", "There ___ a lot of people at the concert. (be)", ["were"], "A lot of people là số nhiều nên dùng there were."),
    reorder("a1-n16-5", "How was your trip to Da Nang?", "Hỏi cảm nhận về việc đã qua: How + was + danh từ số ít? Trip là số ít nên dùng was."),
    reorder("a1-n16-6", "How many people were there at the party?", "How many + danh từ số nhiều + were there + nơi chốn?"),
    listen("a1-n16-7", "Were you tired after the trip?", ["Bạn đang mệt à?", "Chuyến đi có vui không?", "Sau chuyến đi bạn có mệt không?"], 2, "Were you…? là câu hỏi về quá khứ; tired là mệt."),
    listen("a1-n16-8", "There wasn't a hotel near the beach.", ["Gần bãi biển có một khách sạn.", "Gần bãi biển không có khách sạn nào.", "Khách sạn ở ngay trên bãi biển."], 1, "There wasn't là đã không có."),
    correct("a1-n16-9", "Last weekend we was at the zoo.", ["Last weekend we were at the zoo."], "We đi với were. Was chỉ đi với I, he, she, it."),
    correct("a1-n16-10", "There was a lot of tourists in Hoi An.", ["There were a lot of tourists in Hoi An."], "A lot of tourists là số nhiều nên dùng there were, không dùng there was."),
  ],
  freeSpeaking: free(
    "How was your weekend?",
    "Kể về cuối tuần vừa rồi: bạn ở đâu, với ai, thời tiết thế nào, ở đó có gì và bạn cảm thấy thế nào.",
    "My weekend was very nice. On Saturday, I was at home with my family. It was hot, but the evening was cool. On Sunday, we were at a small café near the lake. There were a lot of people there, and the coffee was great.",
  ),
  speaking: [
    say("I was at home last weekend.", "Cuối tuần vừa rồi tôi ở nhà."),
    say("How was your weekend?", "Cuối tuần của bạn thế nào?"),
    say("There were a lot of people at the market.", "Ở chợ có rất nhiều người."),
  ],
  dialogue: dialogue(
    "Sáng thứ Hai ở văn phòng",
    "Sáng thứ Hai, Mark, đồng nghiệp người Mỹ, hỏi Linh về cuối tuần vừa rồi. Linh kể chuyến đi biển Vũng Tàu cùng gia đình, rồi hỏi lại Mark.",
    { A: "Mark", B: "Linh" },
    A("Good morning, Linh! How was your weekend?", "Chào buổi sáng, Linh! Cuối tuần của em thế nào?"),
    B("It was great, thanks. I was in Vung Tau with my family.", "Tuyệt lắm, cảm ơn anh. Em ở Vũng Tàu với gia đình."),
    A("Oh, nice! Was the weather good?", "Ồ, hay quá! Thời tiết có đẹp không?"),
    B("Yes, it was. It was sunny and hot. We were at the beach all day.", "Có ạ. Trời nắng và nóng. Cả nhà em ở bãi biển cả ngày."),
    A("Was it crowded?", "Có đông không?"),
    B("Yes, it was very crowded. There were a lot of people from the city centre.", "Có, đông lắm. Có rất nhiều người từ trung tâm thành phố xuống."),
    A("And the hotel? Was it nice?", "Còn khách sạn? Có đẹp không?"),
    B("It was small, but it was clean. There was a good restaurant near the hotel.", "Nhỏ, nhưng sạch sẽ. Gần khách sạn có một nhà hàng ngon."),
    A("Were your children happy?", "Các con em có vui không?"),
    B("Yes, they were! But we were very tired on Sunday evening. How was your weekend, Mark?", "Có, chúng vui lắm! Nhưng tối chủ nhật cả nhà mệt lắm. Cuối tuần của anh thế nào, Mark?"),
    A("It wasn't very good. I was at home, and there was a lot of work.", "Không vui lắm. Anh ở nhà, và có rất nhiều việc."),
    B("Oh, I'm sorry, Mark.", "Ôi, tiếc quá, anh Mark."),
  ),
  dialogueQuestions: [
    listenQ("a1-n16-d1", "Cuối tuần vừa rồi Linh ở đâu, với ai?", "It was great, thanks. I was in Vung Tau with my family.", ["Ở Vũng Tàu với gia đình", "Ở nhà với bạn bè", "Ở Đà Lạt với đồng nghiệp"], 0, "I was in Vung Tau with my family."),
    mc("a1-n16-d2", "Khách sạn của gia đình Linh thế nào?", ["To và rất đẹp", "Nhỏ nhưng sạch sẽ", "Bẩn và ồn ào"], 1, "It was small, but it was clean."),
    listenQ("a1-n16-d3", "Vì sao cuối tuần của Mark không vui?", "It wasn't very good. I was at home, and there was a lot of work.", ["Vì trời mưa suốt hai ngày", "Vì anh ấy bị ốm", "Vì anh ấy ở nhà và có rất nhiều việc"], 2, "I was at home, and there was a lot of work."),
  ],
  reading: reading({
    title: "Bưu thiếp từ Đà Lạt",
    text: `Dear Grandma,

Greetings from Da Lat! Last weekend was wonderful. The weather was cool and sunny, and there were a lot of flowers everywhere.

Our hotel was small, but it was very clean. There was a nice café opposite the hotel. The coffee was great!

On Saturday evening, the night market was very crowded. There were a lot of tourists from Hanoi and Ho Chi Minh City. The food was cheap and delicious.

On Sunday, we were tired, but we were very happy. Da Lat is my favourite city now!

Love,
Nga`,
    glossary: [
      ["Greetings from…", "Gửi lời chào từ…"],
      ["wonderful", "tuyệt vời"],
      ["everywhere", "khắp nơi"],
      ["night market", "chợ đêm"],
      ["tourist", "khách du lịch"],
      ["delicious", "ngon"],
      ["favourite", "yêu thích nhất"],
    ],
    questions: [
      mc("a1-n16-r1", "Nga viết bưu thiếp cho ai, từ đâu?", ["Cho bà, từ Đà Lạt", "Cho mẹ, từ Hà Nội", "Cho bạn, từ Vũng Tàu"], 0, "Dear Grandma, Greetings from Da Lat!"),
      mc("a1-n16-r2", "Thời tiết ở Đà Lạt cuối tuần vừa rồi thế nào?", ["Nóng và nắng", "Mát và nắng", "Lạnh và mưa"], 1, "The weather was cool and sunny."),
      fill("a1-n16-r3", "Đối diện khách sạn có một quán cà phê đẹp: There ___ a nice café opposite the hotel.", ["was"], "A nice café là số ít, chuyện đã qua nên dùng there was."),
      mc("a1-n16-r4", "Chợ đêm tối thứ Bảy thế nào?", ["Vắng và yên tĩnh", "Đắt nhưng ngon", "Rất đông, có nhiều khách du lịch"], 2, "The night market was very crowded. There were a lot of tourists."),
      mc("a1-n16-r5", "Chủ nhật, Nga và gia đình cảm thấy thế nào?", ["Mệt nhưng rất vui", "Buồn vì phải về nhà", "Khỏe và không mệt chút nào"], 0, "We were tired, but we were very happy."),
    ],
  }),
  task: task({
    prompt: "Đồng nghiệp hỏi bạn: How was your weekend? Hãy viết 6–7 câu kể về cuối tuần vừa rồi: bạn ở đâu, với ai, thời tiết thế nào, ở đó có gì và bạn cảm thấy thế nào.",
    hints: [
      "Chỉ dùng was, were, there was, there were; các động từ quá khứ khác như went, had bạn sẽ học ở A2.",
      "Mở đầu bằng mốc thời gian: Last Saturday… / Last weekend…",
      "Tả nơi chốn bằng there was / there were: There were a lot of people.",
      "Thêm một câu phủ định: It wasn't hot.",
    ],
    model: "My weekend was great. Last Saturday I was at my grandmother's house in the countryside. The weather was cool and sunny. It wasn't hot. There were a lot of trees and flowers in the garden. My cousins were there too. On Sunday evening I was very tired, but I was happy.",
    checklist: [
      "I, he, she, it đi với was; you, we, they và danh từ số nhiều đi với were",
      "Không dùng am, is, are cho chuyện đã qua",
      "Có ít nhất một câu với there was hoặc there were",
      "Có mốc thời gian (last…, yesterday…), không viết yesterday night",
      "Có ít nhất một câu phủ định với wasn't hoặc weren't",
    ],
    minWords: 25,
  }),
});
