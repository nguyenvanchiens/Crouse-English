import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "nguyen-am-ngan-va-dai",
  title: "Nguyên âm ngắn và dài",
  minutes: 30,
  lecture: {
    title: "Sáu cặp nguyên âm người Việt hay nhầm",
    blocks: [
      p("Một học trò của tôi đi phỏng vấn ở cảng, muốn nói “Tôi từng làm việc trên một con tàu” nhưng lại nói thành “Tôi từng làm việc trên một con cừu”. Lỗi nằm ở một nguyên âm: **ship** /ʃɪp/ (con tàu) và **sheep** /ʃiːp/ (con cừu). Trong tiếng Anh, đổi một nguyên âm là đổi cả nghĩa của từ."),
      p("Tiếng Việt cũng có cặp ngắn, dài (như “ă” và “a”), nhưng người Việt ít khi để ý đến chúng khi học tiếng Anh. Trong tiếng Anh, âm dài có dấu **ː** và phải được kéo dài rõ rệt. Quan trọng hơn: âm ngắn và âm dài còn khác nhau cả **khẩu hình miệng**, không chỉ khác độ dài. Bảng dưới có năm cặp ngắn – dài, cộng thêm cặp **/æ/ – /e/**: cả hai đều ngắn, nhưng người Việt nhầm nhiều nhất."),
      table(
        ["Cặp âm", "Từ ví dụ", "Khẩu hình miệng"],
        ["/ɪ/ và /iː/", "ship – sheep", "/ɪ/ ngắn, lưỡi và môi thả lỏng; /iː/ dài, môi căng sang hai bên như đang cười"],
        ["/ʊ/ và /uː/", "full – fool", "/ʊ/ ngắn, môi hơi tròn và lỏng; /uː/ dài, môi tròn và chu ra phía trước"],
        ["/ʌ/ và /ɑː/", "cut – cart", "/ʌ/ ngắn, gần “ă”; /ɑː/ dài, miệng mở to, lưỡi lùi sâu vào trong"],
        ["/ɒ/ và /ɔː/", "cot – caught", "/ɒ/ ngắn, môi tròn, gần “o” đọc nhanh; /ɔː/ dài, môi tròn hơn, gần “o” kéo dài"],
        ["/ə/ và /ɜː/", "about – bird", "/ə/ rất ngắn, rất nhẹ, không bao giờ nhấn; /ɜː/ dài, miệng thả lỏng, gần “ơ” kéo dài"],
        ["/æ/ và /e/ (đều ngắn)", "bad – bed", "/æ/ hàm hạ thấp, miệng mở rộng; /e/ miệng mở vừa, gần “e” tiếng Việt"],
      ),
      ex("The sheep are on the ship.", "Những con cừu ở trên con tàu.", "Sheep kéo dài và cười nhẹ; ship ngắn, dứt khoát."),
      p("Âm **/æ/** không có trong tiếng Việt nên khó nhất. Hãy há miệng như sắp nói “a”, rồi giữ nguyên hàm mà nói “e”: âm bật ra nằm giữa “a” và “e”. Còn **/ʌ/** thì gần với “ă” trong “ăn”, và **/ɜː/** gần với “ơ” kéo dài, miệng không tròn."),
      ex("My bag is on the bed.", "Cái túi của tôi ở trên giường.", "Bag /bæɡ/ mở miệng rộng; bed /bed/ mở vừa."),
      ex("Don't be a fool. The bus is full.", "Đừng ngốc thế. Xe buýt đầy rồi.", "Fool /fuːl/ môi chu tròn và kéo dài; full /fʊl/ ngắn và lỏng."),
      p("Riêng **/ə/** (schwa) là âm hay gặp nhất trong tiếng Anh. Nó chỉ xuất hiện ở âm tiết **không nhấn**, như chữ “a” trong **about** /əˈbaʊt/ hay hai chữ “a” đầu và cuối trong **banana** /bəˈnɑː.nə/. Đọc nó thật nhẹ, thật nhanh, như một tiếng “ơ” thoáng qua. Bài trọng âm từ sẽ quay lại âm này kỹ hơn."),
      mistake("sit đọc thành “xít” kéo dài, nghe như seat /siːt/", "sit /sɪt/: ngắn, gọn, môi không căng", "Người Việt hay kéo dài mọi chữ “i” như “i” tiếng Việt. Nói “Please sit down” mà kéo dài thì người nghe có thể hiểu thành seat."),
      mistake("bad đọc thành “bét”, nghe như bed", "bad /bæd/: miệng mở rộng, giữ âm /d/ ở cuối", "Tiếng Việt không có /æ/ nên người Việt thay bằng “e”, lại thêm thói quen nuốt phụ âm cuối. Kết quả là bad, bed, bat, bet nghe như nhau."),
      mistake("cart đọc thành “các” ngắn, hoặc cuộn lưỡi đọc cả chữ r", "cart /kɑːt/: há to, kéo dài /ɑː/, không đọc chữ r", "Thấy chữ “ar” người Việt hay đọc ngắn như “a” tiếng Việt, nên cart nghe như cut hay cat. Trong tiếng Anh-Anh, chữ r sau nguyên âm không đọc; nó chỉ báo hiệu nguyên âm dài."),
      tip("Luyện trước **gương**: với /iː/ môi phải kéo sang hai bên như cười; với /uː/ môi phải chu tròn; với /æ/ phải thấy **cằm hạ xuống**. Nếu miệng không thay đổi giữa hai âm của một cặp, nghĩa là các bạn đang đọc hai âm giống nhau."),
      teacher("Tôi hay cho học trò luyện theo **cặp từ tối thiểu**: ship và sheep, full và fool, bad và bed, cut và cart. Các bạn đọc chậm từng cặp, rồi nhờ người thân chỉ vào một từ bất kỳ để mình đọc, xem họ có đoán đúng không. Mỗi ngày năm phút thôi. Khi tai các bạn nghe ra sự khác biệt, miệng các bạn sẽ theo kịp."),
      summary(
        "Âm dài có dấu **ː**, nhưng ngắn và dài còn khác cả **khẩu hình**: /iː/ môi căng như cười, /ɪ/ thả lỏng.",
        "Năm cặp ngắn – dài: /ɪ/–/iː/, /ʊ/–/uː/, /ʌ/–/ɑː/, /ɒ/–/ɔː/, /ə/–/ɜː/.",
        "/æ/ và /e/ đều ngắn: /æ/ phải hạ cằm, mở miệng rộng, nếu không bad sẽ nghe như bed.",
        "/ə/ chỉ có ở âm tiết không nhấn: đọc thật nhẹ, thật nhanh.",
        "Tiếng Anh-Anh không đọc chữ r trong cart, bird: chỉ kéo dài nguyên âm.",
      ),
    ],
  },
  words: [
    word("ship", "/ʃɪp/", "con tàu", "The ship leaves at six.", "ship", 0, "Nguyên âm /ɪ/ ngắn và lỏng, đọc dứt khoát rồi khép môi cho /p/."),
    word("sheep", "/ʃiːp/", "con cừu", "There are many sheep on the farm.", "sheep", 0, "Kéo dài /iː/, môi căng như cười; số nhiều vẫn là sheep."),
    word("full", "/fʊl/", "đầy, no", "I can't eat any more. I'm full.", "full", 0, "/ʊ/ ngắn, môi hơi tròn; cuối từ đặt đầu lưỡi chạm lợi trên cho /l/, đừng đọc thành “phun” hay “phu”."),
    word("fool", "/fuːl/", "kẻ ngốc", "Don't be a fool.", "fool", 0, "/uː/ dài, môi chu tròn ra trước, dài hơn full rõ rệt."),
    word("bad", "/bæd/", "tệ, xấu", "The weather is bad today.", "bad", 0, "Hạ cằm, mở miệng rộng cho /æ/, và giữ âm /d/ ở cuối."),
    word("bed", "/bed/", "giường", "I go to bed at eleven.", "bed", 0, "Miệng mở vừa như “e” tiếng Việt; không mở rộng như bad."),
    word("cart", "/kɑːt/", "xe kéo (xe ngựa, xe bò)", "An old horse pulls the cart.", "cart", 0, "Trong tiếng Anh-Anh chữ “r” không đọc; kéo dài /ɑː/ từ sâu trong họng, rồi đóng lưỡi cho /t/, đừng bỏ."),
    word("bird", "/bɜːd/", "con chim", "A small bird is singing.", "bird", 0, "Kéo dài như “ơ”, môi không tròn, không cuộn lưỡi; không đọc thành “bớt”."),
  ],
  dialogue: dialogue(
    "Ở cửa hàng quà lưu niệm",
    "Một vị khách người Anh vào cửa hàng lưu niệm ở Hạ Long. Chị Mai, người bán hàng, giới thiệu mô hình con tàu bằng gỗ và con cừu nhồi bông.",
    { A: "Khách du lịch", B: "Chị Mai (người bán hàng)" },
    A("Hi. Can I see that little ship, please?", "Chào chị. Cho tôi xem con tàu nhỏ kia được không?"),
    B("This ship? Sure. It's made of wood.", "Con tàu này ạ? Vâng. Nó làm bằng gỗ."),
    A("It's nice. And is that a sheep?", "Đẹp đấy. Còn kia là con cừu à?"),
    B("Yes, it's a soft toy sheep. It's full of cotton.", "Vâng, đó là con cừu nhồi bông. Bên trong đầy bông."),
    A("My kids love soft toys. Is it cheap?", "Các con tôi thích thú nhồi bông lắm. Nó có rẻ không?"),
    B("Yes. The sheep is three dollars and the ship is six.", "Có ạ. Con cừu ba đô, còn con tàu sáu đô."),
    A("Not bad. Can I sit here and have a look?", "Cũng được đấy. Tôi ngồi đây xem một chút được không?"),
    B("Of course. Please take a seat.", "Tất nhiên rồi. Mời anh ngồi."),
    A("OK, I'll take the ship and the sheep.", "Được, tôi lấy con tàu và con cừu."),
    B("Great. Do you need a bag?", "Tốt quá. Anh có cần túi không?"),
    A("Yes, please. Here's ten dollars.", "Có, cảm ơn chị. Đây là mười đô."),
    B("Thank you. Here's your change. Enjoy your trip!", "Cảm ơn anh. Tiền thừa của anh đây. Chúc anh chuyến đi vui vẻ!"),
  ),
  dialogueQuestions: [
    listenQ("pa-n02-d1", "Con cừu nhồi bông giá bao nhiêu?", "The sheep is three dollars and the ship is six.", ["Sáu đô", "Ba đô", "Mười đô"], 1, "“The sheep is three dollars”: con cừu ba đô, con tàu sáu đô."),
    mc("pa-n02-d2", "Cuối cùng vị khách mua gì?", ["Chỉ mua con tàu", "Chỉ mua con cừu", "Mua cả con tàu và con cừu"], 2, "Vị khách nói “I'll take the ship and the sheep”."),
  ],
  reading: reading({
    title: "Quảng cáo chuyến tàu Hạ Long",
    text: `Take a trip on our big ship and see Ha Long Bay! The ship leaves at nine every morning, and it comes back at five.

On the ship, you can sit on the top deck and look at the sea. Our cook makes fresh fish and rice for lunch. Tea and cheese are free.

In the afternoon, the ship stops at a small island. There are birds and a little farm with ten sheep. Children can feed the sheep.

Tickets are forty dollars for adults and twenty dollars for children. The ship is often full at the weekend, so book early!`,
    glossary: [["deck", "boong tàu"], ["island", "hòn đảo"], ["feed", "cho ăn"], ["adult", "người lớn"], ["book", "đặt (vé, chỗ)"]],
    questions: [
      mc("pa-n02-r1", "Đây là loại văn bản gì?", ["Quảng cáo một chuyến đi tàu", "Thư gửi bạn bè", "Thực đơn nhà hàng"], 0, "Bài giới thiệu chuyến tàu, giờ chạy, giá vé và khuyên đặt vé sớm: đó là một quảng cáo."),
      mc("pa-n02-r2", "Tàu quay về lúc mấy giờ?", ["Chín giờ sáng", "Năm giờ chiều", "Bốn giờ chiều", "Mười hai giờ trưa"], 1, "“It comes back at five.” Chín giờ là giờ tàu chạy."),
      fill("pa-n02-r3", "Tea and ___ are free. (pho mát)", ["cheese"], "Cheese /tʃiːz/ có /iː/ dài, giống sheep."),
      mc("pa-n02-r4", "Trên đảo, trẻ em có thể làm gì?", ["Câu cá", "Bơi ở biển", "Cho cừu ăn"], 2, "“Children can feed the sheep.”"),
      mc("pa-n02-r5", "Vì sao nên đặt vé sớm?", ["Vì vé cuối tuần đắt hơn", "Vì cuối tuần tàu thường kín chỗ", "Vì tàu chỉ chạy vào cuối tuần"], 1, "“The ship is often full at the weekend, so book early!” Full ở đây là kín chỗ."),
    ],
  }),
  exercises: [
    listen("pa-n02-1", "sheep", ["ship", "sheep", "shape"], 1, "Âm các bạn nghe là /iː/ kéo dài, môi căng: sheep. Ship có /ɪ/ ngắn, shape có nguyên âm đôi /eɪ/."),
    listen("pa-n02-2", "cart", ["cut", "cat", "cot", "cart"], 3, "Cart /kɑːt/ có âm dài, mở to, lùi sâu. Cut /kʌt/ ngắn như “ă”, cat /kæt/ mở ngang, cot /kɒt/ tròn môi."),
    mc("pa-n02-3", "Từ nào có âm /iː/?", ["ship", "sit", "seat", "bit"], 2, "Seat /siːt/ có âm dài /iː/; ship, sit, bit đều có /ɪ/ ngắn."),
    mc("pa-n02-4", "Từ nào có nguyên âm /ɜː/ giống bird?", ["hurt", "heart", "hot"], 0, "Hurt /hɜːt/ giống bird. Heart /hɑːt/ có /ɑː/, hot /hɒt/ có /ɒ/."),
    fill("pa-n02-5", "Don't be a ___! The bus is full. (kẻ ngốc, có âm /uː/)", ["fool"], "Fool /fuːl/ kéo dài, môi chu tròn; full /fʊl/ ngắn. Hai từ chỉ khác nhau ở nguyên âm."),
    fill("pa-n02-6", "Can I have a ___ of water, please? (cốc thủy tinh, có âm /ɑː/)", ["glass"], "Trong tiếng Anh-Anh, glass đọc là /ɡlɑːs/, âm dài giống cart."),
    reorder("pa-n02-7", "The sheep is on the ship.", "Chủ ngữ + is + on the + nơi chốn. Đọc to để phân biệt sheep dài và ship ngắn."),
    reorder("pa-n02-8", "Put the bag on the bed.", "Câu mệnh lệnh: Put + vật + on the + nơi chốn. Bag mở miệng rộng, bed mở vừa."),
    correct("pa-n02-9", "There are six sheeps on the farm.", "There are six sheep on the farm.", "Sheep có số nhiều giống số ít: one sheep, six sheep. Đọc /ʃiːp/ với /iː/ dài, đừng thêm /s/."),
    correct("pa-n02-10", "I can't eat any more. I'm fool.", ["I can't eat any more. I'm full.", "I can't eat anymore. I'm full."], "No bụng là full /fʊl/ (ngắn), còn fool /fuːl/ (dài) là kẻ ngốc. Đọc sai nguyên âm thì viết cũng dễ nhầm."),
  ],
  speaking: [
    say("The sheep are on the ship.", "Những con cừu ở trên con tàu."),
    say("My bag is on the bed.", "Cái túi của tôi ở trên giường."),
    say("I can see a bird near the cart.", "Tôi thấy một con chim gần chiếc xe kéo."),
  ],
  freeSpeaking: free(
    "What do you usually eat and drink in the morning?",
    "Nói 3–4 câu về bữa sáng của bạn, dùng các từ có /iː/ và /ɪ/ như eat, tea, cheese, milk, fish, drink. Đọc /iː/ dài, /ɪ/ ngắn.",
    "I usually eat bread and cheese in the morning. I drink a cup of tea with milk. Sometimes I eat a little fish and rice. I sit in the kitchen and read the news.",
  ),
  task: task({
    prompt: "Viết 5 câu có các từ chứa âm /iː/ và /ɪ/, trong đó có ít nhất một cặp từ tối thiểu (ví dụ ship – sheep, sit – seat), và một câu dùng full hoặc fool. Rồi đọc to từng câu trước gương.",
    hints: [
      "Từ có /iː/: sheep, see, seat, eat, cheese, three, tea.",
      "Từ có /ɪ/: ship, sit, big, six, city, fish, live.",
      "Có thể viết về nơi bạn sống hoặc một chuyến đi biển.",
    ],
    model: "I live in a small city by the sea. Every week I see a big ship in the port. My uncle keeps six sheep on his farm. Please sit in this seat and eat some cheese. Don't be a fool: the bus is full.",
    checklist: [
      "Có ít nhất ba từ chứa /iː/ và ba từ chứa /ɪ/",
      "Đọc /iː/ dài, môi căng như cười; /ɪ/ ngắn, môi thả lỏng",
      "Có ít nhất một cặp từ tối thiểu và đọc hai từ khác nhau rõ ràng",
      "Full đọc /ʊ/ ngắn, fool đọc /uː/ dài và chu môi",
      "Ghi âm và nghe lại: người khác nghe có phân biệt được ship và sheep không",
    ],
    minWords: 25,
  }),
});
