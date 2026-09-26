import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "suy-doan-hien-tai",
  title: "Chắc là, có lẽ, không thể nào",
  minutes: 30,
  lecture: {
    title: "Động từ khuyết thiếu chỉ sự suy đoán ở hiện tại",
    blocks: [
      p("Đồng nghiệp nhìn đồng hồ, ngáp liên tục, mắt thâm quầng. Bạn nghĩ: “Chắc là anh ấy mệt lắm.” Khi **không biết chắc** mà phải **đoán dựa trên dấu hiệu**, tiếng Anh dùng các động từ khuyết thiếu: **must**, **might**, **could**, **can't**. Mỗi từ cho biết bạn chắc chắn đến mức nào. Ở A2, bạn đã gặp must với nghĩa “phải” và might để dự đoán tương lai; hôm nay chúng mang một nghĩa mới: **đoán về hiện tại**."),
      table(
        ["Mức độ chắc chắn", "Cấu trúc", "Nghĩa", "Ví dụ"],
        ["Gần như chắc chắn đúng", "must + V", "chắc hẳn là", "He must be tired."],
        ["Có thể đúng", "might / may / could + V", "có lẽ, có thể là", "She might be at the gym."],
        ["Gần như chắc chắn sai", "can't + V", "không thể nào", "That can't be true."],
      ),
      ex("He's been working for twelve hours. He must be exhausted.", "Anh ấy làm việc mười hai tiếng rồi. Chắc hẳn anh ấy kiệt sức."),
      ex("I'm not sure where Mai is. She might be in a meeting.", "Tôi không chắc Mai ở đâu. Có lẽ cô ấy đang họp."),
      ex("That can't be Minh. He's in Japan this week.", "Người đó không thể là Minh được. Tuần này anh ấy đang ở Nhật.", "Có bằng chứng ngược lại (Minh đang ở Nhật) nên ta loại bỏ khả năng này."),
      p("Muốn đoán về việc **đang diễn ra ngay lúc này**, dùng **must / might / can't + be + V-ing**."),
      ex("The lights are off. They must be sleeping.", "Đèn tắt rồi. Chắc họ đang ngủ."),
      p("Khi đoán, người bản xứ hay nêu **bằng chứng** đi kèm: **He's wearing a uniform, so he must be a guard.** (Anh ấy mặc đồng phục, nên chắc là bảo vệ.) Hoặc dùng **judging by** (căn cứ vào): Judging by her accent, she might be from the north."),
      tip("Mẹo nhớ: **must** và **can't** là hai đầu đối nghịch của cùng một cái cân. Must = 90% đúng, can't = 90% sai. Might, may, could nằm ở giữa, khoảng 50%. Khi nói, **can't** trong tiếng Anh-Anh đọc là /kɑːnt/, âm dài và rõ /t/ cuối để người nghe không nhầm với can."),
      mistake("He mustn't be at home. His car isn't here.", "He can't be at home. His car isn't here.", "Người Việt nghĩ ngược của must là mustn't. Nhưng mustn't nghĩa là “cấm, không được phép”. Trong tiếng Anh-Anh, đoán phủ định dùng can't. (Tiếng Anh-Mỹ đôi khi nghe must not với nghĩa đoán; bài này dùng can't.)"),
      mistake("She maybe is at the office.", "She may be at the office. / Maybe she is at the office.", "Maybe (một từ) là trạng từ, thường đứng đầu câu. May be (hai từ) là động từ khuyết thiếu + be, đứng sau chủ ngữ. Tiếng Việt chỉ có một chữ “có lẽ” nên người Việt hay trộn hai cách."),
      mistake("You must to be tired.", "You must be tired.", "Sau must, might, could, can't là động từ nguyên mẫu không có to."),
      teacher("Khi đứng lớp, tôi thấy người học Việt Nam chỉ biết must với nghĩa “phải”, nên nghe câu **You must be Lan's mother** thì tưởng người ta đang ra lệnh. Thật ra đó là câu đoán rất lịch sự: “Chắc chị là mẹ của Lan.” Bài tập mỗi ngày tôi giao cho các bạn: ngồi quán cà phê, nhìn người qua đường và thầm đoán bằng ba mức. **She must be a teacher. He might be a tourist. They can't be students.** Luyện năm phút mỗi ngày, phản xạ sẽ tự đến."),
      summary(
        "must + V: chắc hẳn là (gần như chắc chắn đúng); can't + V: không thể nào (gần như chắc chắn sai).",
        "might / may / could + V: có lẽ, chỉ là một khả năng.",
        "Đoán việc đang diễn ra ngay lúc này: must / might / can't + be + V-ing.",
        "Đoán phủ định dùng can't, không dùng mustn't (mustn't nghĩa là cấm). Tiếng Anh-Mỹ đôi khi dùng must not để đoán, nhưng bài này dùng can't.",
        "Sau must, might, could, can't là động từ nguyên mẫu không to. Maybe (một từ) đứng đầu câu, may be (hai từ) đứng sau chủ ngữ.",
      ),
    ],
  },
  words: [
    word("evidence", "/ˈev.ɪ.dəns/", "bằng chứng", "There's no evidence, so it might not be true.", "ev|i|dence", 0, "Không đếm được: không nói an evidence hay evidences."),
    word("certain", "/ˈsɜː.tən/", "chắc chắn", "I'm not certain, but he might be the new manager.", "cer|tain", 0),
    word("suspicious", "/səˈspɪʃ.əs/", "đáng ngờ; nghi ngờ", "That man looks suspicious. He can't be a real police officer.", "sus|pi|cious", 1, "Trọng âm ở âm tiết thứ hai: sə-SPI-shəs. Cụm ci ở đây đọc là /ʃ/."),
    word("obvious", "/ˈɒb.vi.əs/", "hiển nhiên, rõ ràng", "She keeps looking at her watch. It's obvious that she's in a hurry.", "ob|vi|ous", 0),
    word("guess", "/ɡes/", "đoán", "Guess who I met today!", "guess", 0, "Chữ u không đọc: /ɡes/, giống get đổi âm cuối thành /s/."),
    word("clue", "/kluː/", "manh mối, gợi ý", "I have no clue where my keys are.", "clue", 0),
    word("impossible", "/ɪmˈpɒs.ə.bəl/", "không thể", "It's impossible. He can't be here already.", "im|pos|si|ble", 1),
    word("uniform", "/ˈjuː.nɪ.fɔːm/", "đồng phục", "He's wearing a uniform, so he must work here.", "u|ni|form", 0, "Âm đầu là /juː/ như chữ you, nên nói a uniform, không nói an uniform."),
  ],
  exercises: [
    mc("b1-n06-1", "Nam has worked all night. He ___ be very tired.", ["can't", "must", "mustn't"], 1, "Có bằng chứng rõ ràng (làm cả đêm), nên đoán gần như chắc chắn: must."),
    mc("b1-n06-2", "That ___ be Minh. He's in Japan this week.", ["must", "might", "can't", "could"], 2, "Minh đang ở Nhật, nên người kia gần như chắc chắn không phải Minh: can't."),
    fill("b1-n06-3", "I'm not sure where Lan is. She ___ be at the gym. (có lẽ)", ["might", "may", "could"], "Không chắc chắn, chỉ là một khả năng: might, may hoặc could."),
    fill("b1-n06-4", "All the lights are off. They ___ be at home. (chắc chắn không)", ["can't", "cannot", "couldn't"], "Đoán phủ định dựa trên bằng chứng dùng can't, không dùng mustn't."),
    reorder("b1-n06-5", "You must be very proud of her.", "Must be + tính từ: lời đoán lịch sự về cảm xúc của người khác."),
    reorder("b1-n06-6", "You can't be serious about this.", "Can't be + tính từ: đoán gần như chắc chắn là không đúng. Câu này nghĩa là “Chắc bạn đùa thôi, không thể nào bạn nói thật được”."),
    listen("b1-n06-7", "Someone's knocking. It might be the postman.", ["Có người gõ cửa. Có lẽ là người đưa thư.", "Có người gõ cửa. Chắc chắn là người đưa thư.", "Người đưa thư không bao giờ gõ cửa."], 0, "Might: chỉ là một khả năng, không chắc chắn."),
    listen("b1-n06-8", "She can't be hungry. She's just had lunch.", ["Cô ấy chắc là đói lắm vì chưa ăn trưa.", "Cô ấy không được phép ăn trưa.", "Cô ấy không thể đói được. Cô ấy vừa ăn trưa xong."], 2, "Can't be: không thể nào, dựa trên bằng chứng vừa ăn trưa."),
    correct("b1-n06-9", "She mustn't be the manager. She looks too young.", ["She can't be the manager. She looks too young.", "She couldn't be the manager. She looks too young."], "Mustn't nghĩa là “cấm, không được phép”. Đoán rằng điều gì đó gần như chắc chắn sai thì dùng can't."),
    correct("b1-n06-10", "He must to be at home. His car is outside.", "He must be at home. His car is outside.", "Sau must là động từ nguyên mẫu không có to: must be."),
  ],
  speaking: [
    say("You must be tired after that long flight.", "Chắc hẳn bạn mệt lắm sau chuyến bay dài như vậy."),
    say("He might be stuck in traffic.", "Có lẽ anh ấy đang bị kẹt xe."),
    say("That can't be true.", "Chuyện đó không thể nào là thật."),
  ],
  freeSpeaking: free(
    "Think of a stranger you saw today. What can you guess about him or her?",
    "Đoán về một người lạ bạn nhìn thấy hôm nay: nghề nghiệp, tâm trạng, việc người đó đang làm. Dùng must, might / could, can't, và nêu dấu hiệu làm bằng chứng.",
    "There's a young woman at the next table in this café. She has a lot of thick books, so she must be a student. She keeps looking at her notes and she looks nervous. She might have an exam today. She can't be in her first year, because her books look very difficult. She could be studying medicine.",
  ),
  dialogue: dialogue(
    "Ai để quên điện thoại?",
    "Sau cuộc họp, Hà và Tuấn thấy một chiếc điện thoại bị bỏ quên trong phòng họp và cùng đoán xem nó là của ai.",
    { A: "Hà", B: "Tuấn" },
    A("Look, someone has left a phone on the table.", "Nhìn kìa, ai đó để quên điện thoại trên bàn."),
    B("It must be Mr Vu's. He was sitting here during the meeting.", "Chắc hẳn là của ông Vũ. Ông ấy ngồi ở đây trong cuộc họp."),
    A("It can't be his. He always uses a black phone, and this one is pink.", "Không thể là của ông ấy được. Ông ấy luôn dùng điện thoại màu đen, còn cái này màu hồng."),
    B("You're right. It might be Linh's, then. She loves pink.", "Chị nói đúng. Vậy có lẽ là của Linh. Cô ấy thích màu hồng."),
    A("Maybe, but Linh is on holiday this week. It could be the new intern's.", "Có thể, nhưng tuần này Linh nghỉ phép. Có khi là của bạn thực tập sinh mới."),
    B("Oh, it's ringing. The screen says “Mum”.", "Ôi, nó đang đổ chuông. Màn hình hiện chữ “Mẹ”."),
    A("Her mother must be worried. Should we answer it?", "Chắc mẹ bạn ấy đang lo lắm. Mình có nên nghe máy không?"),
    B("Wait, I can hear someone running down the corridor. That must be her.", "Khoan, tôi nghe có người đang chạy ngoài hành lang. Chắc là bạn ấy rồi."),
    A("Poor girl. She must be looking for it everywhere. Let's give it back.", "Tội nghiệp. Chắc bạn ấy đang tìm khắp nơi. Mình trả lại cho bạn ấy thôi."),
  ),
  dialogueQuestions: [
    listenQ("b1-n06-d1", "Why does Ha think the phone isn't Mr Vu's?", "It can't be his. He always uses a black phone, and this one is pink.", ["He wasn't at the meeting.", "His phone is a different colour.", "He has already gone home."], 1, "Ông Vũ luôn dùng điện thoại màu đen, còn chiếc này màu hồng, nên Hà nói It can't be his."),
    mc("b1-n06-d2", "Why can't the phone be Linh's?", ["She doesn't like pink.", "She always keeps her phone in her bag.", "She is on holiday this week.", "She was sitting next to Mr Vu."], 2, "Linh is on holiday this week: Linh không có mặt ở văn phòng tuần này."),
    listenQ("b1-n06-d3", "What makes Tuan think the owner is coming?", "Wait, I can hear someone running down the corridor. That must be her.", ["The phone stops ringing.", "The owner's mother calls again.", "The new intern sends a message.", "He hears someone running in the corridor."], 3, "Tuấn nghe thấy có người chạy ngoài hành lang nên đoán: That must be her."),
  ],
  reading: reading({
    title: "The mystery of the empty fridge",
    text: `When Hoa got home from work on Friday evening, she knew immediately that something was wrong. The front door was unlocked, and the kitchen light was on. She lived alone, and she was sure she had switched everything off that morning.

She walked slowly into the kitchen. There were two dirty cups on the table, and the fridge was almost empty. "Someone must be staying here," she thought. "But who? It can't be a thief. Thieves don't wash their hands and leave a clean towel by the sink!"

Hoa looked for more clues. Next to the cups, there was a paper bag from a bakery in Hai Phong, her hometown. A pair of small pink shoes was lying by the sofa. "They might be my niece's," she thought, "but she's only six, so she can't be here on her own."

Then she heard water upstairs. Someone was having a shower. Hoa picked up her phone and was ready to call the police when she noticed a message from her sister: "Surprise! Mai and I are in Hanoi for the weekend. I used the spare key under the plant pot. Hope you don't mind! We've eaten all your yoghurt."

Hoa laughed. Her sister must be the only person in the world who still remembers where that key is.`,
    glossary: [
      ["unlocked", "không khóa"],
      ["thief", "kẻ trộm"],
      ["towel", "khăn tắm, khăn lau"],
      ["niece", "cháu gái (con của anh chị em)"],
      ["spare", "dự phòng"],
      ["plant pot", "chậu cây"],
    ],
    questions: [
      mc("b1-n06-r1", "What is the story mainly about?", ["A thief who breaks into a flat", "A woman who finds signs of unexpected visitors at home", "A family trip to Hai Phong", "How to keep your home safe at night"], 1, "Cả câu chuyện là Hoa về nhà, thấy dấu vết của người lạ, rồi đoán xem là ai."),
      mc("b1-n06-r2", "Why did Hoa decide that the visitor couldn't be a thief?", ["The front door was locked.", "Nothing was missing from the fridge.", "The visitor had washed their hands and left a clean towel."], 2, "Hoa nghĩ: Thieves don't wash their hands and leave a clean towel by the sink!"),
      fill("b1-n06-r3", "Hoa thought the small pink shoes might belong to her ___.", ["niece"], "They might be my niece's: có lẽ là của cháu gái cô ấy."),
      mc("b1-n06-r4", "How did the visitors get into the house?", ["Hoa had left the door open.", "A neighbour let them in.", "They used a key under a plant pot.", "They came in through a window."], 2, "Tin nhắn của chị gái: I used the spare key under the plant pot."),
      mc("b1-n06-r5", "What can we infer about the spare key?", ["It has been under the plant pot for a long time.", "Hoa's sister hid it there that morning.", "Hoa uses it every day.", "Hoa gave it to her niece."], 0, "Câu suy luận: chị gái là người duy nhất vẫn còn nhớ chỗ để chìa, nghĩa là chiếc chìa đã nằm đó từ rất lâu."),
    ],
  }),
  task: task({
    prompt: "Hãy nhìn một người lạ trong quán cà phê hoặc trên xe buýt (hoặc tưởng tượng ra một người). Viết một đoạn (90–120 từ) đoán về người đó: nghề nghiệp, tâm trạng, việc người đó đang làm, và nêu dấu hiệu làm bằng chứng.",
    hints: [
      "Dùng đủ ba mức: must, might / could, can't.",
      "Mỗi lời đoán nên kèm bằng chứng: He's wearing…, so he must…",
      "Có ít nhất một câu đoán việc đang diễn ra: must be + V-ing.",
    ],
    model: "There's a man sitting near the window. He's wearing a smart suit and carrying a laptop, so he must work in an office nearby. He keeps looking at his watch. He might be waiting for a client, or he could be late for a meeting. He can't be a tourist, because he doesn't have a camera or a map. Now he's smiling at his phone. He must be reading a message from his family. His coffee is still full, so he might not like it very much. He can't be very hungry either, because he hasn't touched his cake.",
    checklist: [
      "Có ít nhất một câu với must, một câu với might hoặc could, và một câu với can't.",
      "Không dùng mustn't để đoán phủ định.",
      "Sau must / might / could / can't là động từ nguyên mẫu không to.",
      "Ít nhất hai lời đoán có nêu bằng chứng (so, because).",
      "Có ít nhất một câu must / might be + V-ing.",
    ],
    minWords: 90,
  }),
});
