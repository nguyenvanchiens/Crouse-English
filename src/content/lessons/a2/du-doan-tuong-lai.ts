import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "du-doan-tuong-lai",
  title: "Dự đoán tương lai",
  minutes: 30,
  lecture: {
    title: "Will, won't và might để dự đoán",
    blocks: [
      p("Ở bài Kế hoạch cuối tuần, bạn dùng **be going to** cho những dự định đã tính sẵn. Nhưng hằng ngày ta còn hay **đoán**: “Chắc chiều nay mưa”, “Đội tuyển mình sẽ thắng”, “Giá nhà sẽ không giảm đâu”. Để nói điều mình nghĩ sẽ xảy ra, tiếng Anh dùng **will / won't + động từ nguyên mẫu**."),
      table(
        ["Thể", "Cấu trúc", "Ví dụ"],
        ["Khẳng định", "chủ ngữ + will ('ll) + V", "It'll be sunny tomorrow."],
        ["Phủ định", "chủ ngữ + won't + V", "Prices won't go down."],
        ["Nghi vấn", "Will + chủ ngữ + V?", "Will she pass the exam?"],
        ["Trả lời ngắn", "Yes, she will. / No, she won't.", "No, she won't. She didn't study."],
      ),
      p("Khi đoán, ta ít khi chắc chắn một trăm phần trăm. Tiếng Anh có sẵn các “nấc” để nói mình chắc đến đâu. **Might + V** nghĩa là có thể, khoảng năm mươi phần trăm."),
      table(
        ["Mức độ chắc chắn", "Ví dụ", "Nghĩa"],
        ["gần như chắc chắn", "She'll definitely pass.", "Chắc chắn cô ấy sẽ đỗ."],
        ["khá chắc", "She'll probably pass.", "Có lẽ cô ấy sẽ đỗ."],
        ["nửa nọ nửa kia", "She might pass.", "Cô ấy có thể đỗ."],
        ["khá chắc là không", "She probably won't pass.", "Có lẽ cô ấy sẽ không đỗ."],
        ["gần như chắc chắn không", "She definitely won't pass.", "Chắc chắn cô ấy sẽ không đỗ."],
      ),
      p("Để ý vị trí: **probably / definitely đứng sau will**, nhưng **đứng trước won't**. Muốn nói nhẹ nhàng, người bản xứ rất hay mở đầu bằng **I think...** hoặc **I don't think...**"),
      ex("I think it'll rain this afternoon.", "Tôi nghĩ chiều nay trời sẽ mưa."),
      ex("I don't think he'll come.", "Tôi nghĩ anh ấy sẽ không đến.", "Tiếng Việt nói “tôi nghĩ… sẽ không”, nhưng tiếng Anh tự nhiên hơn khi phủ định ở think: I don't think... will."),
      ex("Don't worry. You'll definitely find a good job.", "Đừng lo. Chắc chắn bạn sẽ tìm được việc tốt."),
      ex("I might be late tonight. The traffic is terrible.", "Tối nay tôi có thể về muộn. Đường tắc kinh khủng.", "Might đi thẳng với động từ nguyên mẫu, không có to và không thêm s: she might be, không phải she mights be."),
      ex("Will people live on Mars one day?", "Liệu một ngày nào đó con người có sống trên sao Hỏa không?"),
      p("Muốn **hỏi ý kiến** người khác về tương lai, dùng **Do you think + chủ ngữ + will + V?**: Do you think it'll rain? Để **đồng ý hay không đồng ý** với một dự đoán, chỉ cần những câu trả lời ngắn: **I think so.** (tôi nghĩ vậy), **I don't think so.** (tôi không nghĩ vậy), **I hope so.** (mong là vậy), **I hope not.** (mong là không), **Maybe.** (có thể)."),
      tip("**Won't** đọc là /wəʊnt/, nghe như “uơn-t”, miệng tròn và kéo dài. **Want** đọc là /wɒnt/, âm ngắn. Đọc lẫn hai từ này thì người nghe tưởng bạn nói want (muốn) chứ không phải won't (sẽ không), nghĩa ngược hẳn. Nhớ giữ âm /t/ ở cuối won't."),
      mistake("He won't probably come.", "He probably won't come.", "Probably đứng sau will (he'll probably come) nhưng đứng trước won't. Học trò hay đặt theo kiểu tiếng Việt “sẽ không có lẽ”, nghe rất lạ."),
      mistake("It will maybe rain tomorrow.", "It might rain tomorrow.", "Dịch từng chữ “trời sẽ có lẽ mưa” sẽ ra câu sai. Maybe thường đứng đầu câu (Maybe it'll rain), còn gọn nhất là dùng might."),
      mistake("It might to rain tonight.", "It might rain tonight.", "Quen nói want to, need to, học trò hay thêm to sau might. Might cũng như will, should: theo sau luôn là động từ nguyên mẫu không có to."),
      teacher("Khi đứng lớp, tôi để ý người Việt dùng will cho mọi thứ thuộc về tương lai, còn người bản xứ lại chọn rất kỹ: đoán thì will, dự định thì going to, không chắc thì might. Mỗi sáng đọc tin thời tiết, các bạn hãy tự nói ba câu: một câu với **will**, một câu với **probably won't**, một câu với **might**. Chỉ cần hai tuần là các “nấc” chắc chắn này sẽ bật ra tự nhiên."),
      summary(
        "Dự đoán dùng will / won't + động từ nguyên mẫu; chưa chắc chắn thì dùng might + động từ nguyên mẫu.",
        "Probably, definitely đứng sau will nhưng đứng trước won't: he'll probably come, he probably won't come.",
        "Sau will, won't, might không có to và động từ không thêm s.",
        "Nói nhẹ nhàng: I think... will, I don't think... will; hỏi ý kiến: Do you think... will...?",
        "Won't /wəʊnt/ khác want /wɒnt/: đọc nhầm là nghĩa ngược hẳn.",
      ),
    ],
  },
  words: [
    word("future", "/ˈfjuː.tʃə/", "tương lai", "What will you do in the future?", "fu|ture", 0),
    word("predict", "/prɪˈdɪkt/", "dự đoán", "Nobody can predict the future.", "pre|dict", 1, "Nhớ đọc rõ cả /k/ và /t/ ở cuối: /prɪˈdɪkt/."),
    word("forecast", "/ˈfɔː.kɑːst/", "dự báo (thời tiết)", "The forecast says it'll be sunny tomorrow.", "fore|cast", 0, "Kiểu Anh-Anh không đọc âm r: /ˈfɔː.kɑːst/, nhấn âm đầu. Nhớ đọc đủ cả /s/ và /t/ ở cuối."),
    word("probably", "/ˈprɒb.ə.bli/", "có lẽ, có khả năng", "It'll probably be cold tonight.", "prob|a|bly", 0),
    word("definitely", "/ˈdef.ɪ.nət.li/", "chắc chắn", "I'll definitely call you tomorrow.", "def|i|nite|ly", 0, "Bốn âm tiết, trọng âm ở âm đầu: ĐÉP-fi-nợt-li."),
    word("storm", "/stɔːm/", "cơn bão, giông", "There might be a storm tonight, so stay at home.", "storm", 0, "Không đọc âm r: /stɔːm/, nguyên âm dài rồi khép môi ở âm /m/."),
    word("win", "/wɪn/", "thắng", "Do you think Vietnam will win?", "win", 0),
    word("worry", "/ˈwʌr.i/", "lo lắng", "Don't worry. Everything will be fine.", "wor|ry", 0, "Âm /ʌ/ gần giống “ă” ngắn trong tiếng Việt, nghe như “uă-ri”, không đọc thành “uo-ri” theo mặt chữ."),
  ],
  exercises: [
    mc("a2-n06-1", "I'm sure Vietnam ___ the match tonight.", ["wins", "will win", "might win", "win"], 1, "Đã nói I'm sure (tôi chắc chắn) thì dùng will win. Might win chỉ là có thể, không hợp với sure."),
    mc("a2-n06-2", "Chọn câu đúng.", ["She probably won't come.", "She won't probably come.", "She will not probably come."], 0, "Probably đứng trước won't."),
    fill("a2-n06-3", "Take an umbrella. It ___ rain this afternoon. (có thể)", ["might", "may", "could"], "Không chắc chắn, chỉ là có thể: might rain (may, could cũng đúng)."),
    fill("a2-n06-4", "I don't think he ___ pass the exam. (sẽ)", ["will"], "Mẫu câu I don't think + chủ ngữ + will + động từ nguyên mẫu."),
    reorder("a2-n06-5", "I think she will love Hoi An.", "I think + chủ ngữ + will + động từ nguyên mẫu: cách dự đoán nhẹ nhàng, tự nhiên."),
    reorder("a2-n06-6", "Do you think prices will go up?", "Hỏi ý kiến người khác về tương lai: Do you think + chủ ngữ + will...?"),
    listen("a2-n06-7", "It probably won't be very hot tomorrow.", ["Mai chắc chắn sẽ rất nóng.", "Hôm nay có lẽ không nóng lắm.", "Mai có lẽ sẽ không nóng lắm."], 2, "Probably won't: có lẽ sẽ không. Tomorrow là ngày mai."),
    listen("a2-n06-8", "I might go to the party, but I'm not sure.", ["Có thể tôi sẽ đi dự tiệc, nhưng tôi chưa chắc.", "Chắc chắn tôi sẽ đi dự tiệc.", "Tôi không đi dự tiệc được đâu."], 0, "Might go: có thể sẽ đi, người nói chưa chắc chắn."),
    correct("a2-n06-9", "She won't probably call you tonight.", ["She probably won't call you tonight."], "Probably đứng sau will nhưng đứng trước won't: she'll probably call, she probably won't call."),
    correct("a2-n06-10", "I think it might to be cold tomorrow.", ["I think it might be cold tomorrow."], "Sau might là động từ nguyên mẫu không có to: might be, không phải might to be."),
  ],
  freeSpeaking: free(
    "What do you think your life will be like in ten years?",
    "Dự đoán cuộc sống của bạn mười năm nữa: công việc, nơi sống, gia đình. Dùng will, won't, might, probably, definitely.",
    "In ten years, I think I'll probably live in Da Nang, because I love the sea. I'll definitely have a better job, and I might start my own small business. I don't think I'll have a big house, but I'll have a happy family. I hope so!",
  ),
  speaking: [
    say("I think it will rain this evening.", "Tôi nghĩ tối nay trời sẽ mưa."),
    say("She'll definitely pass the exam.", "Chắc chắn cô ấy sẽ đỗ kỳ thi."),
    say("I might visit my parents next month, but I'm not sure.", "Tháng sau có thể tôi sẽ về thăm bố mẹ, nhưng tôi chưa chắc."),
  ],
  dialogue: dialogue(
    "Chuyến đi Hạ Long cuối tuần",
    "Công ty tổ chức cho cả phòng đi Hạ Long cuối tuần này. Anh Hùng, trưởng nhóm, hỏi Mai về thời tiết, người đi, đường xá và chi phí.",
    { A: "Anh Hùng, trưởng nhóm", B: "Mai, đồng nghiệp" },
    A("Do you think it'll rain in Ha Long this weekend?", "Em nghĩ cuối tuần này ở Hạ Long có mưa không?"),
    B("I don't think so. The weather app says it'll probably be sunny.", "Em không nghĩ vậy. Ứng dụng thời tiết bảo có lẽ trời sẽ nắng."),
    A("Great. Will everyone come on the trip?", "Tốt quá. Mọi người sẽ đi hết chứ?"),
    B("Most people will. But Nam might not come. His son is sick.", "Hầu hết sẽ đi. Nhưng anh Nam có thể không đi. Con trai anh ấy bị ốm."),
    A("Oh no. I hope his son will be OK. What about the traffic?", "Ôi. Mong là cháu sẽ ổn. Còn đường xá thì sao?"),
    B("It'll definitely be busy on Saturday morning. Let's leave at six.", "Sáng thứ Bảy chắc chắn sẽ đông. Mình đi lúc sáu giờ nhé."),
    A("Good idea. Do you think the boat trip will be expensive?", "Ý hay. Em nghĩ đi thuyền có đắt không?"),
    B("I don't think it'll be very expensive. We'll probably pay about five hundred thousand dong each.", "Em nghĩ sẽ không đắt lắm. Có lẽ mỗi người mất khoảng năm trăm nghìn đồng."),
    A("And will we be home early on Sunday?", "Thế chủ nhật mình có về nhà sớm không?"),
    B("We probably won't get home before nine.", "Có lẽ mình sẽ không về đến nhà trước chín giờ đâu."),
    A("That's fine. Don't worry, it'll be a great trip.", "Không sao. Đừng lo, chuyến đi sẽ tuyệt lắm."),
    B("I hope so!", "Mong là vậy!"),
  ),
  dialogueQuestions: [
    listenQ("a2-n06-d1", "Theo ứng dụng thời tiết, cuối tuần này ở Hạ Long thế nào?", "I don't think so. The weather app says it'll probably be sunny.", ["Chắc chắn sẽ mưa", "Có thể có bão", "Trời sẽ rất lạnh", "Có lẽ trời sẽ nắng"], 3, "It'll probably be sunny: có lẽ trời sẽ nắng."),
    mc("a2-n06-d2", "Vì sao anh Nam có thể không đi?", ["Con trai anh ấy bị ốm", "Anh ấy bận họp", "Anh ấy không thích đi thuyền"], 0, "Nam might not come. His son is sick."),
    mc("a2-n06-d3", "Mai đề nghị sáng thứ Bảy xuất phát lúc mấy giờ?", ["Năm giờ", "Sáu giờ", "Chín giờ"], 1, "Let's leave at six. Chín giờ là giờ Mai đoán cả nhóm về đến nhà hôm Chủ nhật."),
  ],
  reading: reading({
    title: "Ý kiến độc giả: cuộc sống năm 2050",
    text: `Last month we asked our readers one question: What will life in Vietnam be like in 2050? Here are three of the answers.

Minh, 24, engineer: I think most people will drive electric cars, so the air in Hanoi will be cleaner. But the traffic definitely won't disappear!

Lan, 35, teacher: Children will probably study at home on computers two or three days a week. They might not need paper books. I hope they'll still play outside with their friends.

Mr Hoang, 68, retired: I don't think people will cook much. Robots might make our meals. But I'm sure families will still eat together at Tet. Some things never change.

What do you think? Send us your ideas by email.`,
    glossary: [
      ["be like", "(sẽ) như thế nào"],
      ["electric", "chạy bằng điện"],
      ["air", "không khí"],
      ["disappear", "biến mất"],
      ["robots", "người máy"],
      ["meals", "bữa ăn"],
    ],
    questions: [
      mc("a2-n06-r1", "Bài viết này là gì?", ["Một bản tin dự báo thời tiết", "Dự đoán của độc giả về cuộc sống ở Việt Nam năm 2050", "Quảng cáo ô tô điện", "Một bài học về người máy"], 1, "Tòa soạn hỏi What will life in Vietnam be like in 2050? và đăng ba câu trả lời."),
      mc("a2-n06-r2", "Anh Minh chắc chắn điều gì?", ["Mọi người sẽ đi xe đạp", "Không khí sẽ bẩn hơn", "Ô tô sẽ biến mất", "Tắc đường vẫn sẽ còn"], 3, "The traffic definitely won't disappear: chắc chắn tắc đường sẽ không biến mất."),
      mc("a2-n06-r3", "Theo chị Lan, trẻ em có lẽ sẽ học như thế nào?", ["Có vài ngày trong tuần học ở nhà bằng máy tính", "Không đi học nữa", "Chỉ học bằng sách giấy", "Học cùng người máy ở trường"], 0, "Children will probably study at home on computers two or three days a week."),
      fill("a2-n06-r4", "Hoàn thành câu của ông Hoàng: Robots ___ make our meals. (có thể)", ["might"], "Ông Hoàng không chắc chắn, chỉ nói có thể: might + động từ nguyên mẫu."),
      mc("a2-n06-r5", "Ông Hoàng tin điều gì sẽ không thay đổi?", ["Mọi người vẫn tự nấu ăn", "Các gia đình vẫn ăn cùng nhau dịp Tết", "Người máy sẽ không nấu ăn", "Trẻ em vẫn chơi ngoài trời"], 1, "I'm sure families will still eat together at Tet. Some things never change."),
    ],
  }),
  task: task({
    prompt: "Một người bạn nước ngoài sắp sang Việt Nam du lịch vào tháng tới và hỏi bạn chuyến đi sẽ thế nào. Viết 5–7 câu (ít nhất 50 từ) dự đoán về thời tiết, giao thông, đồ ăn và chuyến đi của họ.",
    hints: [
      "Điều bạn khá chắc: will / won't; điều chưa chắc: might.",
      "Thêm probably hoặc definitely, nhớ: sau will nhưng trước won't.",
      "Mở đầu nhẹ nhàng bằng I think... hoặc I don't think...",
      "Kết thúc bằng một câu động viên: Don't worry...",
    ],
    model: "I think you'll love Vietnam. It'll probably be very hot in Ho Chi Minh City next month, and it might rain in the afternoon. The traffic will definitely be busy, but it won't be a big problem. I don't think the food will be expensive. You might not like some spicy dishes, but you'll definitely enjoy pho. Don't worry. You'll have a great time.",
    checklist: [
      "Có ít nhất 1 câu với will và 1 câu với won't.",
      "Có ít nhất 1 câu với might cho điều chưa chắc.",
      "Probably, definitely đặt đúng chỗ: sau will, trước won't.",
      "Sau will, won't, might là động từ nguyên mẫu, không có to.",
      "Có ít nhất 1 câu I think... hoặc I don't think...",
    ],
    minWords: 50,
  }),
});
