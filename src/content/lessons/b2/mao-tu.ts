import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "mao-tu",
  title: "Mạo từ: a, an, the hay không gì cả",
  minutes: 35,
  lecture: {
    title: "Khi nào dùng the, khi nào không dùng mạo từ",
    blocks: [
      p("Nếu phải chọn **một** lỗi mà người Việt ở trình độ nào cũng mắc, tôi chọn **mạo từ**. Tiếng Việt không có a, an, the: ta nói “Tôi thích âm nhạc”, “Chị ấy là giáo viên”, “Mặt trời mọc” mà chẳng cần thêm gì. Vì vậy khi viết tiếng Anh, học trò hoặc **bỏ quên mạo từ**, hoặc **thêm the vào khắp nơi** cho chắc. Bài này giúp bạn có một cách nghĩ rõ ràng thay vì đoán mò."),
      table(
        ["Dùng", "Khi nào", "Ví dụ"],
        ["a / an", "Danh từ đếm được số ít, nhắc lần đầu, hoặc “một cái nào đó”; nghề nghiệp", "She is an engineer. I bought a laptop."],
        ["the", "Người nghe biết rõ cái nào: đã nhắc trước, có cụm xác định đi kèm, chỉ có một", "The laptop I bought is fast. The sun is hot."],
        ["the", "So sánh nhất, số thứ tự, only, same", "the best hotel, the first time, the same answer"],
        ["Không mạo từ", "Danh từ số nhiều nói chung", "Children need love."],
        ["Không mạo từ", "Danh từ không đếm được và danh từ trừu tượng nói chung", "Water is essential. Honesty matters."],
        ["Không mạo từ", "Hầu hết tên nước, thành phố, bữa ăn, môn học", "Vietnam, Hanoi, have lunch, study history"],
      ),
      p("Câu hỏi quan trọng nhất khi chọn mạo từ không phải “danh từ này là gì”, mà là **“người nghe có biết tôi đang nói đến cái cụ thể nào không?”**. So sánh: **Coffee is popular in Vietnam** (cà phê nói chung) với **The coffee in this café is excellent** (cà phê ở quán này, cụ thể)."),
      ex("Money can't buy happiness.", "Tiền không mua được hạnh phúc.", "Money và happiness đều nói chung, không đếm được, nên không có mạo từ."),
      ex("The money you lent me is in the drawer.", "Số tiền bạn cho tôi mượn nằm trong ngăn kéo.", "Có cụm “you lent me” xác định rõ là tiền nào, nên phải có the."),
      ex("I read an article about climate change. The article said sea levels are rising.", "Tôi đọc một bài báo về biến đổi khí hậu. Bài báo nói mực nước biển đang dâng.", "Nhắc lần đầu dùng an, lần sau người nghe đã biết nên dùng the."),
      p("Riêng với **trường học, bệnh viện, nhà tù, nhà thờ, đại học, giường ngủ**: nếu nói về **mục đích chính** của nơi đó thì **không dùng mạo từ**. Nếu chỉ nói về **tòa nhà, địa điểm** thì dùng **the**."),
      table(
        ["Mục đích chính (không mạo từ)", "Chỉ là địa điểm (the)"],
        ["My son goes to school by bus. (đi học)", "I went to the school to meet his teacher. (đến trường gặp cô giáo)"],
        ["He is in hospital with a broken leg. (nằm viện)", "I went to the hospital to visit him. (đến thăm)"],
        ["She was sent to prison for five years. (đi tù)", "The prison is near the river. (tòa nhà)"],
        ["It's late. I'm going to bed. (đi ngủ)", "Your phone is under the bed. (cái giường)"],
      ),
      ex("My father has been in hospital since Monday.", "Bố tôi nằm viện từ thứ Hai.", "Tiếng Anh-Anh nói in hospital. Người Mỹ thường nói in the hospital, cả hai đều được chấp nhận."),
      mistake("The life is short, so enjoy it.", "Life is short, so enjoy it.", "Tiếng Việt nói “cuộc sống”, “cuộc đời” nên học trò tưởng phải có mạo từ. Danh từ trừu tượng nói chung (life, love, success) không dùng the."),
      mistake("She is teacher at a high school.", "She is a teacher at a high school.", "Tiếng Việt nói “Cô ấy là giáo viên” không cần “một”. Tiếng Anh gần như luôn có a/an trước nghề nghiệp ở số ít. Ngoại lệ: chức danh chỉ một người giữ, sau be, become, appoint, elect hoặc as, thường không có mạo từ: She became captain; As chairman, he…"),
      mistake("I love the music, especially the jazz.", "I love music, especially jazz.", "Thích âm nhạc nói chung thì không có the. Chỉ nói “I love the music in this film” khi đó là âm nhạc cụ thể."),
      tip("Mẹo **“chỉ tay được không?”**: nếu bạn có thể chỉ tay hoặc nói thêm “cái đó, cái mà…” thì thường dùng **the**. Nếu bạn đang nói về cả một loại, chung chung khắp thế giới, thì bỏ mạo từ và dùng **số nhiều** hoặc **danh từ không đếm được**: **Dogs are loyal**, không phải **The dogs are loyal**."),
      teacher("Nói thật với các bạn, mạo từ là thứ **tôi chưa thấy học trò nào học xong trong một buổi**. Nó chỉ vào đầu bằng cách đọc thật nhiều và để ý. Cách tôi hay giao bài: mỗi ngày chép lại **một đoạn tin tiếng Anh ngắn**, rồi khoanh tròn mọi a, an, the và mọi danh từ đứng trơn không mạo từ, tự giải thích từng chỗ. Sau một tháng, tai và mắt bạn sẽ tự thấy “câu này thiếu cái gì đó”. Và đừng quá sợ: sai mạo từ ít khi làm người ta hiểu nhầm, nhưng **dùng đúng thì câu của bạn nghe chuyên nghiệp hẳn lên**."),
      summary(
        "a/an: danh từ đếm được số ít nhắc lần đầu, và hầu như luôn có trước nghề nghiệp: She is a teacher (trừ chức danh duy nhất: She became captain).",
        "the: người nghe biết rõ cái nào (đã nhắc, có cụm xác định đi kèm, chỉ có một), so sánh nhất, số thứ tự.",
        "Không mạo từ: danh từ số nhiều, không đếm được hoặc trừu tượng khi nói chung: Life is short. Dogs are loyal.",
        "school, hospital, prison, bed: nói mục đích chính thì không mạo từ; nói tòa nhà, địa điểm thì dùng the.",
        "Câu hỏi then chốt: người nghe có biết tôi đang nói đến cái cụ thể nào không?",
      ),
    ],
  },
  words: [
    word("article", "/ˈɑː.tɪ.kəl/", "mạo từ; bài báo", "“The” is called the definite article.", "ar|ti|cle", 0),
    word("specific", "/spəˈsɪf.ɪk/", "cụ thể, riêng biệt", "Could you give me a specific example?", "spe|cif|ic", 1, "Trọng âm ở âm tiết thứ hai: spe-CIF-ic. Âm /s/ đầu và âm /k/ cuối đều phải rõ."),
    word("unique", "/juˈniːk/", "duy nhất, độc nhất", "Each fingerprint is unique.", "u|nique", 1, "Âm đầu là /j/ giống chữ “you”: you-NEEK, trọng âm ở âm sau. Không đọc “u-ních”."),
    word("uncountable", "/ʌnˈkaʊn.tə.bəl/", "không đếm được", "“Advice” is an uncountable noun.", "un|count|a|ble", 1),
    word("institution", "/ˌɪn.stɪˈtjuː.ʃən/", "cơ quan, tổ chức, thiết chế", "Banks and universities are important institutions.", "in|sti|tu|tion", 2),
    word("prison", "/ˈprɪz.ən/", "nhà tù", "He spent two years in prison.", "pris|on", 0, "Chữ s ở đây đọc là /z/: PRIZ-ơn."),
    word("equipment", "/ɪˈkwɪp.mənt/", "thiết bị", "All the equipment in the lab is new.", "e|quip|ment", 1, "Equipment không đếm được: không nói “an equipment” hay “equipments”, mà nói “a piece of equipment”."),
    word("knowledge", "/ˈnɒl.ɪdʒ/", "kiến thức", "Knowledge is more valuable than money.", "knowl|edge", 0, "Chữ k câm: đọc NOL-ij, không đọc “nâu-lết”."),
  ],
  exercises: [
    mc("b2-n14-1", "___ is the most important thing in life.", ["The health", "A health", "Health"], 2, "Sức khỏe nói chung là danh từ trừu tượng, không đếm được, nên không dùng mạo từ."),
    mc("b2-n14-2", "My son has a fever, so he didn't go to ___ today.", ["the school", "school", "a school", "schools"], 1, "Đi học (mục đích chính của trường) thì không dùng mạo từ: go to school."),
    fill("b2-n14-3", "She works as ___ engineer at a factory in Da Nang.", ["an"], "Nghề nghiệp số ít phải có mạo từ; engineer bắt đầu bằng nguyên âm /e/ nên dùng an."),
    fill("b2-n14-4", "___ moon goes around the Earth about once a month.", ["The"], "Chỉ có một mặt trăng của Trái Đất, là thứ duy nhất, nên dùng the."),
    reorder("b2-n14-5", "The sun rises in the east.", "Mặt trời và phương đông đều là thứ duy nhất, nên cả hai có the."),
    reorder("b2-n14-6", "She is the most patient teacher I know.", "So sánh nhất luôn đi với the: the most patient."),
    listen("b2-n14-7", "My grandmother has been in hospital since Monday.", ["Bà tôi đi thăm bệnh viện hôm thứ Hai.", "Bà tôi nằm viện từ thứ Hai.", "Bà tôi làm việc ở bệnh viện từ thứ Hai."], 1, "In hospital không có mạo từ nghĩa là đang nằm viện, đang được điều trị."),
    listen("b2-n14-8", "I went to the school to talk to my daughter's teacher.", ["Tôi đi học cùng con gái.", "Con gái tôi là giáo viên ở trường.", "Tôi dạy ở trường của con gái.", "Tôi đến trường để nói chuyện với cô giáo của con gái tôi."], 3, "The school: người nói chỉ đến tòa nhà trường học, không phải đi học."),
    correct("b2-n14-9", "My sister is accountant at a bank in Hanoi.", ["My sister is an accountant at a bank in Hanoi."], "Nghề nghiệp số ít phải có mạo từ. Accountant bắt đầu bằng nguyên âm /ə/ nên dùng an."),
    correct("b2-n14-10", "I need an advice about my career.", ["I need some advice about my career.", "I need advice about my career.", "I need a piece of advice about my career."], "Advice là danh từ không đếm được: không dùng a/an. Nói some advice, advice, hoặc a piece of advice."),
  ],
  speaking: [
    say("Honesty is the best policy.", "Trung thực là thượng sách."),
    say("My brother is an engineer, and his wife is a doctor.", "Anh trai tôi là kỹ sư, còn vợ anh ấy là bác sĩ."),
    say("I went to the hospital to visit my uncle.", "Tôi đến bệnh viện để thăm chú tôi."),
  ],
  freeSpeaking: free(
    "Tell me about a place that is important in your daily life, such as a market, a school or your office.",
    "Kể về một nơi quan trọng trong cuộc sống hằng ngày của bạn: đó là nơi nào, bạn làm gì ở đó, có ai hoặc có gì đặc biệt. Chú ý a/an khi nhắc lần đầu, the khi đã rõ, và không dùng mạo từ khi nói chung chung.",
    "The most important place in my daily life is the market near my flat. I go there almost every morning before work. There is a woman at the market who sells the best bread in the area, and she always keeps a loaf for me. Food there is cheaper than in the supermarket, and the vegetables are fresher. I think markets are the heart of a Vietnamese neighbourhood, because people go there not only to shop but also to chat.",
  ),
  dialogue: dialogue(
    "Hỏi thăm đồng nghiệp",
    "Giờ nghỉ trưa, Phong thấy Sarah, đồng nghiệp người Anh, trông rất mệt. Anh hỏi thăm và biết mẹ cô đang nằm viện.",
    { A: "Phong", B: "Sarah, đồng nghiệp người Anh" },
    A("Sarah, you look tired. Is everything OK?", "Sarah, trông chị mệt quá. Mọi chuyện ổn chứ?"),
    B("Not really. My mother is in hospital. She had an operation on Monday.", "Không hẳn. Mẹ tôi đang nằm viện. Bà mới phẫu thuật hôm thứ Hai."),
    A("I'm sorry to hear that. Is it the hospital near our office?", "Tôi rất tiếc. Có phải bệnh viện gần văn phòng mình không?"),
    B("Yes. I go to the hospital every evening after work, so I usually go to bed after midnight.", "Đúng vậy. Tối nào tan làm tôi cũng đến bệnh viện, nên thường đi ngủ sau nửa đêm."),
    A("That's hard. Health is more important than work, you know.", "Vất vả quá. Sức khỏe quan trọng hơn công việc mà."),
    B("I know. Luckily, the doctor looking after her is excellent.", "Tôi biết. May là bác sĩ chăm sóc bà rất giỏi."),
    A("Would she like some fruit? I know a shop that sells the best mangoes in town.", "Bà có muốn ăn chút hoa quả không? Tôi biết một cửa hàng bán xoài ngon nhất thành phố."),
    B("That's kind of you. She loves fruit, especially mangoes.", "Anh tốt quá. Bà rất thích hoa quả, nhất là xoài."),
    A("Then I'll buy a box tomorrow. The shop is on the way to the hospital.", "Vậy mai tôi sẽ mua một hộp. Cửa hàng đó nằm trên đường đến bệnh viện."),
    B("Thank you. It's the first time anyone here has offered to help me.", "Cảm ơn anh. Đây là lần đầu tiên có người ở đây đề nghị giúp tôi."),
    A("That's what friends are for.", "Bạn bè là để giúp nhau mà."),
  ),
  dialogueQuestions: [
    mc("b2-n14-d1", "Why does Sarah look tired?", ["She has been working late on a project.", "She visits her mother in hospital every evening and goes to bed late.", "She has just had an operation.", "She has been travelling a lot for work."], 1, "I go to the hospital every evening after work, so I usually go to bed after midnight. Người phẫu thuật là mẹ cô, không phải cô."),
    listenQ("b2-n14-d2", "What does Phong offer to do?", "Would she like some fruit? I know a shop that sells the best mangoes in town. Then I'll buy a box tomorrow. The shop is on the way to the hospital.", ["Drive Sarah to the hospital", "Take Sarah's place at work", "Call the doctor", "Buy a box of mangoes for Sarah's mother"], 3, "Phong biết một cửa hàng bán xoài ngon nhất thành phố và hứa mai sẽ mua một hộp mang cho mẹ Sarah."),
    mc("b2-n14-d3", "How does Sarah feel about Phong's offer?", ["Embarrassed, because her mother doesn't like fruit", "Annoyed, because she wants to be alone", "Grateful, because nobody at work has offered to help before", "Surprised, because Phong has never met her mother"], 2, "It's the first time anyone here has offered to help me: cô cảm động và biết ơn."),
  ],
  reading: reading({
    title: "The smallest words cause the biggest problems",
    text: `If you ask English teachers in Vietnam, Japan or China which mistake their students make most often, many will give the same answer: articles. The words a, an and the are among the most common words in English, yet learners at every level find them difficult. Even people who have lived in an English-speaking country for years still leave them out or add them in the wrong places.

The reason is simple. Many Asian languages, including Vietnamese, Chinese and Japanese, have no articles at all. In Vietnamese, you can say the equivalent of "I bought book yesterday" without any problem, because the listener understands from the situation which book is meant. In English, however, the speaker must decide every time: is this the first time I have mentioned the book, or does the listener already know which one I mean?

Linguists point out that this is not really a question of grammar rules but of knowledge shared between the speaker and the listener. When a teacher says "Open the window", the students know exactly which window she means, because there is only one in the room. When a friend says "I've found a flat", you have no idea which flat it is, so a is needed.

Research also suggests that learners who read a lot improve faster than those who only study rules. By seeing thousands of examples in context, they slowly develop a feeling for what sounds right. This takes time. One study of university students found that their accuracy with articles was still improving after six years of study.

So what should learners do? First, do not panic. Mistakes with articles rarely stop people from understanding you. Second, pay attention to articles when you read, and notice where they are missing, too. Finally, learn fixed expressions as complete units: go to bed, in hospital, the same as, at the end of the day. These chunks will make your English sound natural long before the rules feel easy.`,
    glossary: [
      ["equivalent", "câu, từ tương đương"],
      ["linguist", "nhà ngôn ngữ học"],
      ["context", "ngữ cảnh"],
      ["accuracy", "độ chính xác"],
      ["panic", "hoảng hốt"],
      ["chunk", "cụm từ học trọn cả khối"],
    ],
    questions: [
      mc("b2-n14-r1", "What is the main idea of the article?", ["Articles are difficult for many Asian learners, but reading and noticing them helps.", "Vietnamese is more difficult to learn than English.", "Teachers should stop teaching grammar rules.", "Learners should avoid using articles when they are unsure."], 0, "Bài giải thích vì sao người châu Á thấy mạo từ khó, rồi khuyên đọc nhiều, để ý và học cả cụm."),
      mc("b2-n14-r2", "Why do the students know which window the teacher means in \"Open the window\"?", ["The teacher points at it.", "There is only one window in the room.", "The teacher has mentioned it before.", "It is the biggest window."], 1, "Because there is only one in the room: chỉ có một cái nên người nghe biết là cái nào, và dùng the."),
      fill("b2-n14-r3", "When a friend says \"I've found ___ flat\", you have no idea which flat it is.", ["a"], "Người nghe chưa biết căn hộ nào, nhắc lần đầu, nên dùng a."),
      mc("b2-n14-r4", "What does the study of university students suggest?", ["Articles can be learned in a few weeks.", "University students make no mistakes with articles.", "Reading does not help with articles.", "Learning to use articles accurately takes a very long time."], 3, "Sau sáu năm học, độ chính xác vẫn đang tiếp tục tăng: việc này cần rất nhiều thời gian."),
      mc("b2-n14-r5", "Why does the writer mention \"go to bed\" and \"in hospital\"?", ["To show that English grammar has no rules", "To explain why hospitals are important", "As examples of fixed expressions that learners should learn as a whole", "As examples of mistakes made by native speakers"], 2, "Learn fixed expressions as complete units: đây là các cụm cố định nên học trọn cả cụm."),
    ],
  }),
  task: task({
    prompt: "Viết một bài khoảng 140–180 từ giới thiệu một người thân của bạn: nghề nghiệp, nơi làm việc, sở thích và một quan niệm sống của người đó. Chú ý từng mạo từ.",
    hints: [
      "Nêu nghề nghiệp của người đó: nhớ a/an trước nghề.",
      "Nói về sở thích hoặc quan niệm chung (music, money, health) mà không dùng the.",
      "Nhắc một đồ vật lần đầu với a/an, lần sau với the.",
      "Dùng một cụm như in hospital, at school hoặc go to bed.",
    ],
    model: "My uncle Binh is a doctor at a hospital in Hue. He has worked there since he left university, and he is now the head of the children's department. He works long hours, but he says that helping people brings him happiness.\n\nLast year, he was in hospital himself for a week after a road accident. It was the first time he had seen the job from a patient's point of view, and he told me it changed the way he talks to families.\n\nIn his free time, he loves music, especially jazz. He has an old guitar and a small piano. The guitar was a present from my grandfather, and he plays it every weekend when the family meets for dinner. He also reads a lot, because he believes knowledge is more valuable than money.\n\nMy uncle always tells me that health is the most important thing in life. He goes to bed early, never smokes and walks to work every day. He is the kindest person I know.",
    checklist: [
      "Có a/an trước nghề nghiệp ở số ít.",
      "Danh từ trừu tượng hoặc không đếm được nói chung (life, music, money, health) không có the.",
      "Có ít nhất một danh từ nhắc lần đầu với a/an, lần sau với the.",
      "Có một cụm school, hospital hoặc bed dùng đúng: nói mục đích chính thì không mạo từ.",
      "Có the trước so sánh nhất hoặc số thứ tự (the best, the first).",
    ],
    minWords: 140,
  }),
});
