import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "cua-ai",
  title: "Cái này của ai?",
  minutes: 30,
  lecture: {
    title: "Đại từ tân ngữ, đại từ sở hữu, whose và 's",
    blocks: [
      p("Cuối buổi họp, trên bàn còn một cái ô và một chùm chìa khóa. Bạn muốn hỏi “Cái này của ai?” và trả lời “Của tôi” hay “Của chị Lan”. Tiếng Việt chỉ cần chữ **“tôi”** và chữ **“của”** cho mọi vị trí. Tiếng Anh thì đổi hình thức theo **vị trí trong câu**, và đó là lý do người Việt hay lẫn."),
      table(
        ["Chủ ngữ", "Tân ngữ", "Tính từ sở hữu", "Đại từ sở hữu"],
        ["I", "me", "my", "mine"],
        ["you", "you", "your", "yours"],
        ["he", "him", "his", "his"],
        ["she", "her", "her", "hers"],
        ["it", "it", "its", "(ít dùng)"],
        ["we", "us", "our", "ours"],
        ["they", "them", "their", "theirs"],
      ),
      p("**Đại từ tân ngữ** (me, him, her, us, them) đứng **sau động từ** hoặc **sau giới từ** như with, for, to. Nói gọn: người làm hành động dùng I, người **nhận** hành động dùng me."),
      ex("My grandmother lives alone, so I call her every evening.", "Bà tôi sống một mình nên tối nào tôi cũng gọi điện cho bà."),
      ex("Can you come with us?", "Bạn đi cùng chúng tôi được không?"),
      p("**Đại từ sở hữu** (mine, yours, hers, ours, theirs) thay cho cả cụm **tính từ sở hữu + danh từ**, để khỏi lặp lại danh từ. My umbrella → **mine**. Sau đại từ sở hữu **không có danh từ** nữa."),
      ex("This isn't my umbrella. Mine is black.", "Đây không phải ô của tôi. Ô của tôi màu đen."),
      p("Muốn hỏi **của ai**, dùng **Whose + danh từ + is this / are these?** hoặc gọn hơn **Whose is this?** Trả lời bằng tên người + **'s**: **It's Lan's.** Với danh từ số nhiều đã có -s, chỉ thêm dấu **'**: my parents' house."),
      ex("Whose keys are these? They're Nam's.", "Chùm chìa khóa này của ai? Của Nam đấy."),
      ex("This is my parents' house.", "Đây là nhà của bố mẹ tôi.", "Parents đã có -s nên chỉ thêm dấu nháy: parents'. Khi đọc, parents' và parents nghe giống hệt nhau."),
      tip("**Whose** (của ai) và **who's** (= who is, ai là) đọc giống hệt nhau: /huːz/. Khi viết, hãy tự hỏi: thay bằng “who is” được không? Được thì viết who's, không được thì viết whose. Và nhớ: **hers, yours, ours, theirs** không bao giờ có dấu '."),
      mistake("Can you help I?", "Can you help me?", "Tiếng Việt dùng “tôi” cả khi làm chủ ngữ lẫn khi đứng sau động từ. Tiếng Anh thì sau động từ phải đổi sang tân ngữ: me."),
      mistake("This book is my.", "This book is mine.", "My luôn cần danh từ theo sau (my book). Đứng một mình ở cuối câu thì dùng mine."),
      mistake("the car of my father", "my father's car", "Người Việt dịch từng chữ “xe của bố tôi”. Với người, tiếng Anh dùng 's và đặt người sở hữu lên trước: my father's car."),
      mistake("Is this bag her's?", "Is this bag hers?", "Đại từ sở hữu không có dấu ': hers, yours, ours, theirs. Chỉ tên người và danh từ mới dùng 's."),
      teacher("Có một bài tập tôi hay cho học viên làm, và lớp nào làm đều cũng tiến bộ rõ: cầm một đồ vật trong nhà lên, hỏi to **Whose is this?**, rồi tự trả lời **It's mine.**, **It's my mum's.**, **It's theirs.** Làm với mười đồ vật mỗi tối. Miệng quen rồi thì các bạn sẽ không bao giờ nói “This is my” hay “help I” nữa. Ngữ pháp này phải thuộc bằng miệng, không phải bằng mắt."),
      summary(
        "Chủ ngữ dùng I, he, she, we, they; sau động từ và giới từ dùng me, him, her, us, them.",
        "My, your, her + danh từ; mine, yours, hers đứng một mình, không có danh từ theo sau.",
        "Hỏi của ai: Whose + danh từ + is this / are these? hoặc Whose is this?",
        "Người sở hữu thêm 's (Lan's, my father's); danh từ số nhiều đã có -s chỉ thêm ' (my parents').",
        "Hers, yours, ours, theirs không bao giờ có dấu '; whose (của ai) khác who's (ai là).",
      ),
    ],
  },
  words: [
    word("whose", "/huːz/", "của ai", "Whose phone is this?", "whose", 0, "Chữ w không đọc, âm cuối là /z/: “hu-z”."),
    word("mine", "/maɪn/", "của tôi", "That bag isn't mine.", "mine", 0, "Nhớ âm /n/ ở cuối, đừng đọc thành “mai”."),
    word("key", "/kiː/", "chìa khóa", "I can't find my keys.", "key", 0, "Đọc là /kiː/ như “ki” kéo dài, chữ e và y không đọc riêng."),
    word("wallet", "/ˈwɒl.ɪt/", "ví (đựng tiền)", "Is this your wallet?", "wal|let", 0),
    word("belong", "/bɪˈlɒŋ/", "thuộc về", "This umbrella belongs to my teacher.", "be|long", 1, "Belong luôn đi với to: belong to somebody."),
    word("charger", "/ˈtʃɑː.dʒə/", "cục sạc, dây sạc", "Is this phone charger yours?", "char|ger", 0, "Kiểu Anh-Anh không đọc âm r: /ˈtʃɑː.dʒə/, nghe như “cha-giơ”."),
    word("lend", "/lend/", "cho mượn", "Can you lend me your bike?", "lend", 0, "Borrow là mình mượn của người khác, lend là mình cho người khác mượn."),
    word("own", "/əʊn/", "của riêng; sở hữu", "She has her own room.", "own", 0, "Đọc là /əʊn/, chữ w không đọc thành âm riêng."),
  ],
  exercises: [
    mc("a2-n12-1", "___ bag is this? It's Hoa's.", ["Who's", "Who", "Whose"], 2, "Hỏi của ai dùng whose. Who's là who is, nghĩa khác hẳn."),
    mc("a2-n12-2", "This isn't my pen. ___ is blue.", ["My", "Mine", "Me", "I"], 1, "Mine thay cho my pen; sau mine không có danh từ."),
    fill("a2-n12-3", "My brother lives in Da Nang. I often visit ___ at the weekend. (anh ấy)", ["him"], "Sau động từ visit, he đổi thành tân ngữ him."),
    fill("a2-n12-4", "This is my ___ car. (father)", ["father's"], "Với người sở hữu, thêm 's: my father's car."),
    reorder("a2-n12-5", "Whose bag is on the chair?", "Whose + danh từ + động từ: Whose bag is...? Whose đứng ngay trước danh từ cần hỏi."),
    reorder("a2-n12-6", "Can you lend me your pen?", "Lend + người (tân ngữ me) + vật: lend me your pen."),
    listen("a2-n12-7", "Is this wallet yours?", ["Đây có phải ví của bạn không?", "Đây có phải ví của anh ấy không?", "Bạn có ví không?"], 0, "Yours là của bạn."),
    listen("a2-n12-8", "Those glasses are hers, not his.", ["Cặp kính đó là của anh ấy, không phải của cô ấy.", "Cặp kính đó là của cô ấy, không phải của anh ấy.", "Cặp kính đó là của họ."], 1, "Hers là của cô ấy, his là của anh ấy."),
    correct("a2-n12-9", "Please give this book to she.", ["Please give this book to her."], "Sau giới từ to phải dùng tân ngữ: her, không dùng she."),
    correct("a2-n12-10", "Is this umbrella your?", ["Is this umbrella yours?", "Is this your umbrella?"], "Your luôn cần danh từ theo sau (your umbrella). Đứng một mình ở cuối câu thì dùng yours."),
  ],
  freeSpeaking: free(
    "Look around your room. What things are yours, and what things belong to other people?",
    "Nhìn quanh phòng bạn và kể: những đồ vật nào là của bạn, đồ vật nào là của người khác trong nhà.",
    "This laptop is mine, but the chair belongs to my brother. The books on the table are my sister's, and the big lamp is my parents'. My mother gave me this bag, so now it's mine. The keys by the door are ours, because everyone in my family uses them.",
  ),
  speaking: [
    say("Excuse me, whose phone is this?", "Xin lỗi, điện thoại này của ai vậy?"),
    say("It isn't mine. I think it's my sister's.", "Không phải của tôi. Tôi nghĩ là của chị tôi."),
    say("Can you help me with this bag, please?", "Bạn giúp tôi mang cái túi này được không?"),
  ],
  dialogue: dialogue(
    "Đồ để quên sau buổi họp",
    "Họp xong, trên bàn phòng họp còn lại ô, chìa khóa, ví và điện thoại. Chị Hạnh và David, đồng nghiệp người Mỹ, xem từng món là của ai.",
    { A: "Chị Hạnh, trưởng phòng", B: "David, đồng nghiệp người Mỹ" },
    A("David, there are some things on the table. Whose umbrella is this?", "David ơi, trên bàn còn mấy thứ. Cái ô này của ai vậy?"),
    B("It isn't mine. Mine is black. I think it's Lan's.", "Không phải của tôi. Ô của tôi màu đen. Tôi nghĩ là của Lan."),
    A("OK, I'll give it to her later. And whose keys are these?", "Được, lát nữa tôi đưa cho cô ấy. Còn chùm chìa khóa này của ai?"),
    B("Oh, they're mine! Thank you. I looked for them everywhere.", "Ồ, của tôi đấy! Cảm ơn chị. Tôi tìm khắp nơi."),
    A("Is this wallet yours too?", "Cái ví này cũng của anh à?"),
    B("No, it isn't. I think it belongs to Mr Phan.", "Không phải đâu. Tôi nghĩ là của ông Phan."),
    A("Can you take it to him? His office is next to yours.", "Anh mang cho ông ấy được không? Phòng ông ấy cạnh phòng anh mà."),
    B("Sure. What about these two phones?", "Được chứ. Còn hai cái điện thoại này thì sao?"),
    A("The white one is mine, and the black one is Nam's.", "Cái màu trắng là của tôi, còn cái màu đen là của Nam."),
    B("And this pen? Can I borrow it? I didn't bring my own pen.", "Còn cái bút này? Tôi mượn được không? Tôi không mang bút của mình."),
    A("Of course. It's ours. It belongs to the office.", "Tất nhiên. Bút của chung phòng mình mà."),
    B("Thanks. I'll give it back to you tomorrow.", "Cảm ơn chị. Mai tôi trả lại chị."),
  ),
  dialogueQuestions: [
    listenQ("a2-n12-d1", "Cái ô trên bàn là của ai?", "It isn't mine. Mine is black. I think it's Lan's.", ["Của David", "Của chị Hạnh", "Của anh Tuấn", "Của Lan"], 3, "I think it's Lan's: David nghĩ là của Lan. Ô của David màu đen."),
    mc("a2-n12-d2", "Chùm chìa khóa là của ai?", ["Của David", "Của Nam", "Của anh Tuấn"], 0, "Oh, they're mine!: của David, anh ấy tìm khắp nơi."),
    mc("a2-n12-d3", "Cái điện thoại màu đen là của ai?", ["Của chị Hạnh", "Của Nam", "Của David"], 1, "The white one is mine, and the black one is Nam's."),
  ],
  reading: reading({
    title: "Thông báo đồ thất lạc ở văn phòng",
    text: `Lost and found: second floor

Hi everyone,

After the company party last Friday, we found a lot of things in the meeting room. They are now in the box next to the reception desk. Here is a list.

A red umbrella. We think it's Hoa's, because she always brings a red one. Hoa, is it yours?

A black wallet with some money and a bus card. The name on the card is Tran Van Duc. Duc, please come and get it.

Two phone chargers and a blue scarf. We don't know whose they are.

A pair of glasses. Long thinks they're his wife's. She came to the party with him.

If something is yours, please take it before Friday. After that, we'll give the things to a charity shop.

Thanks,
Mai, Reception`,
    glossary: [
      ["lost and found", "đồ thất lạc"],
      ["floor", "tầng"],
      ["reception desk", "quầy lễ tân"],
      ["scarf", "khăn quàng cổ"],
      ["a pair of glasses", "một cặp kính"],
      ["charity shop", "cửa hàng từ thiện"],
    ],
    questions: [
      mc("a2-n12-r1", "Thông báo này viết để làm gì?", ["Mời mọi người dự tiệc công ty", "Báo có đồ bỏ quên sau bữa tiệc và nhờ chủ đến nhận", "Nhắc mọi người dọn phòng họp", "Giới thiệu một cửa hàng từ thiện"], 1, "We found a lot of things in the meeting room... If something is yours, please take it."),
      mc("a2-n12-r2", "Vì sao mọi người nghĩ cái ô đỏ là của chị Hoa?", ["Vì chị hay mang một cái ô màu đỏ", "Vì trên ô có tên chị", "Vì chị ngồi gần chỗ để ô"], 0, "We think it's Hoa's, because she always brings a red one."),
      fill("a2-n12-r3", "Chiếc ví đen là của Đức: The black wallet is ___. (của anh ấy)", ["his", "Duc's"], "Đại từ sở hữu của he là his. Cũng có thể nói Duc's."),
      mc("a2-n12-r4", "Hai cục sạc và chiếc khăn xanh là của ai?", ["Của chị Hoa", "Của anh Long", "Chưa ai biết", "Của chị Mai"], 2, "We don't know whose they are: chưa biết là của ai."),
      mc("a2-n12-r5", "Nếu không ai đến nhận trước thứ Sáu thì sao?", ["Đồ sẽ được đem cho cửa hàng từ thiện", "Chị Mai giữ lại", "Đồ bị vứt đi"], 0, "After that, we'll give the things to a charity shop."),
    ],
  }),
  task: task({
    prompt: "Sau buổi liên hoan ở nhà bạn, khách về và để quên vài món đồ. Viết một tin nhắn 5–7 câu (ít nhất 45 từ) vào nhóm chat: hỏi món nào của ai, và nói những món bạn đã biết chủ.",
    hints: [
      "Hỏi bằng Whose + danh từ + is this / are these?",
      "Trả lời bằng tên + 's, hoặc mine, yours, his, hers, theirs.",
      "Sau động từ và giới từ dùng me, him, her, us, them.",
      "Không viết dấu ' trong hers, yours, ours, theirs.",
    ],
    model: "Hi everyone, thank you for coming to my party! Some of you left things at my house. Whose black jacket is this? I think the blue umbrella is Mai's, so I'll give it to her on Monday. Nam, are these keys yours? The two phone chargers aren't mine. Please call me or text me today.",
    checklist: [
      "Có ít nhất 1 câu hỏi với Whose.",
      "Dùng 's sau tên người (Mai's), không viết kiểu the umbrella of Mai.",
      "Có ít nhất 2 đại từ sở hữu (mine, yours, hers...) đứng một mình, không có danh từ theo sau.",
      "Sau động từ và giới từ dùng tân ngữ (me, her, them), không dùng I, she, they.",
      "Không có dấu ' trong hers, yours, ours, theirs.",
    ],
    minWords: 45,
  }),
});
