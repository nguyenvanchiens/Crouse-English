import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "mua-sam-va-mau-sac",
  title: "Mua sắm và màu sắc",
  minutes: 26,
  lecture: {
    title: "Quần áo, màu sắc, How much is/are và tính từ đứng trước danh từ",
    blocks: [
      p("Đi mua quần áo ở chợ Bến Thành, ở trung tâm thương mại hay khi đi du lịch nước ngoài, bạn cần làm được ba việc: **gọi tên món đồ**, **tả màu sắc** và **hỏi giá**. Bài này dạy bạn làm cả ba việc bằng những câu ngắn, tự nhiên."),
      p("Trong tiếng Việt, tính từ đứng **sau** danh từ: “áo đỏ”, “giày đen”. Tiếng Anh thì ngược lại: tính từ (kể cả màu sắc) đứng **trước** danh từ. Và tính từ **không bao giờ thêm -s**, dù danh từ là số nhiều."),
      table(
        ["Tiếng Việt", "Tiếng Anh", "Ghi chú"],
        ["một cái áo sơ mi đỏ", "a red shirt", "a + màu + danh từ"],
        ["một cái áo khoác đen", "a black jacket", ""],
        ["hai chiếc váy vàng", "two yellow dresses", "yellow không thêm -s"],
        ["cái quần xanh da trời này", "these blue trousers", "trousers luôn là số nhiều"],
      ),
      mistake("I'd like a shirt white.", "I'd like a white shirt.", "Người Việt nói “áo trắng” nên hay đặt màu sau danh từ. Trong tiếng Anh, màu sắc đứng trước danh từ."),
      mistake("two reds dresses", "two red dresses", "Tính từ tiếng Anh không có dạng số nhiều. Chỉ danh từ mới thêm -s."),
      p("Để hỏi giá, dùng **How much is + danh từ số ít?** và **How much are + danh từ số nhiều?** Đi kèm là **this** (cái này) với số ít và **these** (những cái này) với số nhiều. Trả lời bằng **It's...** hoặc **They're...**"),
      table(
        ["", "Câu hỏi", "Câu trả lời"],
        ["Số ít", "How much is this jacket?", "It's five hundred thousand dong."],
        ["Số nhiều", "How much are these shoes?", "They're forty dollars."],
        ["Luôn số nhiều", "How much are these jeans?", "They're three hundred thousand dong."],
      ),
      mistake("How much is these shoes?", "How much are these shoes?", "Tiếng Việt hỏi “đôi giày này bao nhiêu” như một món. Nhưng shoes là số nhiều, nên phải dùng these và are."),
      tip("Những đồ có **hai ống** hoặc **hai phần** như **trousers** (quần dài), **jeans** (quần bò), **shorts** (quần đùi), **glasses** (kính) luôn là số nhiều trong tiếng Anh: **these jeans, they're**. Muốn nói một cái, dùng **a pair of**: a pair of jeans. **Shoes, socks** thì khác: thường nói theo đôi (a pair of shoes), nhưng một chiếc vẫn là **a shoe**."),
      table(
        ["Giá", "Cách đọc", "Ghi chú"],
        ["1.000 đồng", "one thousand dong / a thousand dong", "thousand là nghìn"],
        ["25.000 đồng", "twenty-five thousand dong", "thousand không thêm -s"],
        ["150.000 đồng", "one hundred and fifty thousand dong", "người Anh thêm and sau hundred"],
        ["2.000.000 đồng", "two million dong", "million là triệu, cũng không thêm -s"],
        ["$4.99", "four dollars ninety-nine / four ninety-nine", "số lẻ sau dấu chấm là cent"],
      ),
      ex("How much is this white T-shirt? It's ninety thousand dong.", "Cái áo phông trắng này bao nhiêu tiền? Chín mươi nghìn đồng."),
      ex("These black trousers are very expensive.", "Cái quần đen này đắt quá.", "Tiếng Việt nói “cái quần” là số ít, nhưng tiếng Anh dùng these và are."),
      ex("What colour is your new jacket? It's dark green.", "Áo khoác mới của bạn màu gì? Màu xanh lá đậm.", "Hỏi màu: What colour + is/are + đồ vật? Dark nghĩa là đậm, light nghĩa là nhạt."),
      ex("Can I try on this yellow dress, please?", "Cho tôi mặc thử chiếc váy vàng này được không?", "Can I try it on? và Can I try on…? tạm học như một cụm để xin mặc thử; cách dùng can sẽ học ở bài Tôi có thể…"),
      tip("Người Việt chỉ có một chữ “xanh” cho cả hai màu. Tiếng Anh tách hẳn: **blue** là xanh da trời, xanh nước biển; **green** là xanh lá cây. Nói nhầm hai từ này, người bán sẽ đưa bạn sai món."),
      teacher("Tôi hay dặn các bạn học viên: đi đường thấy gì thì **tả nhẩm bằng tiếng Anh**, và luôn theo thứ tự màu trước, đồ vật sau. A red car. A black bag. Two white shirts. Đó là cách rẻ nhất để sửa thói quen nói “áo đỏ” theo kiểu tiếng Việt. Và khi hỏi giá, hãy **nhìn món đồ trước**: một cái thì this và is, hai ống hay một đôi thì these và are."),
      summary(
        "Màu sắc và tính từ đứng **trước** danh từ: a red shirt, không nói a shirt red.",
        "Tính từ **không thêm -s**: two red dresses.",
        "**How much is this** + số ít? → It's… ; **How much are these** + số nhiều? → They're…",
        "Trousers, jeans, shorts, glasses luôn là số nhiều: these jeans, they're. Giày thường nói cả đôi (these shoes), nhưng vẫn có a shoe.",
        "**Blue** là xanh da trời, **green** là xanh lá; thousand và million không thêm -s.",
      ),
    ],
  },
  words: [
    word("shirt", "/ʃɜːt/", "áo sơ mi", "I'd like a white shirt, please.", "shirt", 0, "Âm /ʃ/ chu môi ra, và nhớ giữ âm /t/ ở cuối, đừng đọc thành “sơ”."),
    word("dress", "/dres/", "váy liền, đầm", "How much is this red dress?", "dress", 0),
    word("trousers", "/ˈtraʊ.zəz/", "quần dài", "These black trousers are very nice.", "trou|sers", 0, "Luôn ở dạng số nhiều; chữ s ở giữa đọc là /z/."),
    word("jacket", "/ˈdʒæk.ɪt/", "áo khoác", "My new jacket is dark blue.", "jack|et", 0),
    word("colour", "/ˈkʌl.ə/", "màu sắc", "What colour is your bag?", "col|our", 0, "Viết kiểu Anh là colour, kiểu Mỹ là color; đọc giống nhau."),
    word("black", "/blæk/", "màu đen", "He always wears black shoes.", "black", 0, "Phải có âm /k/ ở cuối (nâng cuống lưỡi chặn hơi), đừng đọc thành “blé”."),
    word("yellow", "/ˈjel.əʊ/", "màu vàng", "She loves her yellow dress.", "yel|low", 0),
    word("expensive", "/ɪkˈspen.sɪv/", "đắt", "This jacket is very expensive.", "ex|pen|sive", 1, "Nhấn vào âm giữa: ex-PEN-sive."),
  ],
  exercises: [
    mc("a1-n10-1", "How much ___ these sports shoes?", ["is", "are", "do"], 1, "These sports shoes là số nhiều nên dùng are."),
    mc("a1-n10-2", "Chọn cách nói đúng:", ["a shirt white", "a whites shirt", "a white shirt"], 2, "Màu sắc đứng trước danh từ và không thêm -s."),
    fill("a1-n10-3", "___ jacket is very nice. (cái này)", ["This", "this"], "Jacket là số ít, ở gần nên dùng this."),
    fill("a1-n10-4", "I'd like the ___ jeans, not the black ones. (xanh da trời)", ["blue"], "Xanh da trời là blue; xanh lá cây mới là green."),
    reorder("a1-n10-5", "How much are these black trousers?", "Trousers luôn số nhiều nên dùng are và these; màu black đứng trước trousers."),
    reorder("a1-n10-6", "What colour is your new car?", "Hỏi màu: What colour + is + đồ vật? Tính từ new đứng trước danh từ car."),
    listen("a1-n10-7", "They're three hundred thousand dong.", ["Chúng giá ba trăm nghìn đồng.", "Nó giá ba trăm nghìn đồng.", "Chúng giá ba mươi nghìn đồng."], 0, "They're dùng cho số nhiều; three hundred thousand là ba trăm nghìn."),
    listen("a1-n10-8", "How much is this green T-shirt?", ["Những cái áo phông xanh lá này bao nhiêu tiền?", "Cái áo phông xanh lá này bao nhiêu tiền?", "Cái áo phông xanh da trời này bao nhiêu tiền?"], 1, "Is và this cho biết chỉ có một cái; green là xanh lá cây."),
    correct("a1-n10-9", "I'd like a dress yellow, please.", ["I'd like a yellow dress, please.", "I would like a yellow dress, please."], "Màu sắc đứng trước danh từ: a yellow dress, không nói a dress yellow như “váy vàng” trong tiếng Việt."),
    correct("a1-n10-10", "This jacket is five hundred thousands dong.", ["This jacket is five hundred thousand dong."], "Sau một con số, thousand không thêm -s: five hundred thousand dong."),
  ],
  freeSpeaking: free(
    "What do you usually buy at a clothes shop?",
    "Nói về quần áo bạn hay mua: món gì, màu gì, và giá của một món đồ bạn thích.",
    "I usually buy white shirts and black trousers for work. I really like blue, so I have three blue T-shirts. My favourite jacket is dark green. It's five hundred thousand dong, and it's very nice.",
  ),
  speaking: [
    say("How much is this jacket?", "Cái áo khoác này bao nhiêu tiền?"),
    say("These black shoes are very expensive.", "Đôi giày đen này đắt quá."),
    say("I'd like a white shirt, please.", "Cho tôi một cái áo sơ mi trắng."),
  ],
  dialogue: dialogue(
    "Mua áo ở một cửa hàng khi đi du lịch",
    "Chị Lan đi du lịch Singapore và vào một cửa hàng quần áo. Chị hỏi giá, hỏi màu và mua một chiếc áo sơ mi. Câu Can I try it on? (tôi mặc thử được không?) học như một cụm; can sẽ học ở bài Tôi có thể…",
    { A: "Chị Lan", B: "Người bán hàng" },
    A("Excuse me. How much is this white shirt?", "Xin lỗi, cái áo sơ mi trắng này bao nhiêu tiền?"),
    B("It's twenty-five dollars.", "Hai mươi lăm đô la."),
    A("Do you have a blue shirt? I really like blue.", "Chị có áo sơ mi màu xanh da trời không? Tôi rất thích màu xanh da trời."),
    B("Yes, we do. This blue shirt is twenty-two dollars.", "Có ạ. Cái áo sơ mi xanh này hai mươi hai đô la."),
    A("It's very nice. Can I try it on, please?", "Đẹp quá. Tôi mặc thử được không?"),
    B("Of course. And these black trousers? They're new.", "Được chứ. Còn cái quần đen này thì sao? Hàng mới về đấy."),
    A("How much are they?", "Cái quần này bao nhiêu tiền?"),
    B("They're forty dollars.", "Bốn mươi đô la."),
    A("Oh, they're very expensive. Just the blue shirt, please.", "Ôi, đắt quá. Cho tôi lấy cái áo sơ mi xanh thôi."),
    B("OK. That's twenty-two dollars.", "Vâng. Của chị hết hai mươi hai đô la."),
    A("Here you are. Thank you!", "Tiền đây. Cảm ơn chị!"),
    B("Thank you. Have a nice day!", "Cảm ơn chị. Chúc chị một ngày vui vẻ!"),
  ),
  dialogueQuestions: [
    listenQ("a1-n10-d1", "Cái áo sơ mi trắng giá bao nhiêu?", "Excuse me. How much is this white shirt? It's twenty-five dollars.", ["22 đô la", "25 đô la", "40 đô la"], 1, "Twenty-five dollars là hai mươi lăm đô la. Hai mươi hai đô la là giá áo xanh."),
    mc("a1-n10-d2", "Vì sao chị Lan không mua cái quần đen?", ["Vì quần không vừa", "Vì chị không thích màu đen", "Vì quần đắt quá"], 2, "Chị Lan nói: Oh, they're very expensive."),
    listenQ("a1-n10-d3", "Cuối cùng chị Lan trả bao nhiêu tiền?", "OK. That's twenty-two dollars.", ["20 đô la", "22 đô la", "62 đô la"], 1, "Chị chỉ mua áo sơ mi xanh, giá twenty-two dollars."),
  ],
  reading: reading({
    title: "Quảng cáo giảm giá",
    text: `BIG SALE AT LOTUS FASHION!

Come to Lotus Fashion on Le Loi Street this weekend. Everything is cheap!

White T-shirts are only eighty thousand dong. Blue jeans are two hundred and fifty thousand dong. Our new yellow and green dresses are three hundred thousand dong. They're beautiful!

Do you need a warm jacket? Our black jackets are four hundred thousand dong, not six hundred thousand.

We open at nine o'clock in the morning and close at ten o'clock at night, every day.

Buy two T-shirts and get one free!`,
    glossary: [
      ["sale", "đợt giảm giá"],
      ["everything", "mọi thứ"],
      ["cheap", "rẻ"],
      ["only", "chỉ"],
      ["beautiful", "đẹp"],
      ["need", "cần"],
      ["warm", "ấm"],
      ["get one free", "được tặng một cái"],
    ],
    questions: [
      mc("a1-n10-r1", "Đây là loại văn bản gì?", ["Quảng cáo giảm giá của một cửa hàng quần áo", "Tin nhắn của một người bạn", "Thực đơn của một nhà hàng"], 0, "BIG SALE AT LOTUS FASHION: một cửa hàng quần áo quảng cáo đợt giảm giá."),
      mc("a1-n10-r2", "Một chiếc áo phông trắng giá bao nhiêu?", ["18.000 đồng", "800.000 đồng", "80.000 đồng"], 2, "Only eighty thousand dong: tám mươi nghìn đồng."),
      mc("a1-n10-r3", "Bây giờ một chiếc áo khoác đen giá bao nhiêu?", ["400.000 đồng", "600.000 đồng", "250.000 đồng"], 0, "Four hundred thousand dong, not six hundred thousand: giá mới là bốn trăm nghìn."),
      fill("a1-n10-r4", "Váy mới có màu vàng và xanh lá: Our new dresses are yellow and ___.", ["green"], "Xanh lá cây là green; blue là xanh da trời."),
      mc("a1-n10-r5", "Mua hai áo phông thì khách được gì?", ["Được giảm nửa giá", "Được tặng thêm một áo phông", "Được tặng một cái quần bò"], 1, "Buy two T-shirts and get one free: mua hai áo được tặng một áo."),
    ],
  }),
  task: task({
    prompt: "Bạn đang ở một cửa hàng quần áo. Viết 6–8 câu: nói bạn muốn mua gì (có màu sắc), hỏi giá hai ba món đồ và trả lời thay người bán.",
    hints: [
      "Màu đứng trước đồ vật: a white shirt, black shoes.",
      "Một món: How much is this…? It's… Hai ống hoặc một đôi: How much are these…? They're…",
      "Viết giá bằng chữ: two hundred thousand dong (thousand không thêm -s).",
    ],
    model: "I'd like a white shirt and a black jacket, please. How much is this white shirt? It's two hundred thousand dong. How much are these blue jeans? They're four hundred thousand dong. They're very expensive. How much are these yellow shoes? They're three hundred thousand dong.",
    checklist: [
      "Màu sắc luôn đứng trước danh từ (a white shirt, không viết a shirt white)",
      "Tính từ không thêm -s, kể cả khi danh từ là số nhiều",
      "Món số ít dùng this và is; jeans, trousers và một đôi shoes dùng these và are",
      "Có ít nhất 2 câu hỏi giá với How much",
      "Giá viết bằng chữ, thousand và million không thêm -s",
    ],
    minWords: 25,
  }),
});
