import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "qua-va-khong-du",
  title: "Quá… và không đủ…",
  minutes: 30,
  lecture: {
    title: "Too, enough, too much và too many",
    blocks: [
      p("Đi mua giày, bạn thử một đôi và muốn nói với người bán: “Đôi này chật quá, không đủ rộng”. Hoặc đi ăn, bạn muốn nói món canh cay quá không ăn được. Để nói **vượt quá mức** hay **chưa đạt mức** mình cần, tiếng Anh dùng **too** và **enough**."),
      p("Cái bẫy lớn nhất với người Việt là chữ **“quá”**. Tiếng Việt nói “Đẹp quá!” để khen, nghĩa là **rất đẹp**. Nhưng **too + tính từ** trong tiếng Anh thường mang nghĩa **quá mức, gây ra vấn đề**. Khen thì dùng **very**, **really** hoặc **so**. (Chỉ vài câu lịch sự cố định như **You're too kind** mới dùng too để cảm ơn, khen.)"),
      table(
        ["Cấu trúc", "Nghĩa", "Ví dụ"],
        ["too + tính từ", "quá (gây vấn đề)", "These shoes are too small."],
        ["tính từ + enough", "đủ", "Is the room big enough?"],
        ["not + tính từ + enough", "không đủ", "The bag isn't big enough."],
        ["enough + danh từ", "đủ (bao nhiêu thứ)", "We have enough chairs."],
        ["too many + danh từ số nhiều", "quá nhiều (đếm được)", "There are too many cars."],
        ["too much + danh từ không đếm được", "quá nhiều (không đếm được)", "I have too much work."],
      ),
      ex("These shoes are too small for me. Do you have a bigger size?", "Đôi giày này chật quá so với tôi. Chị có cỡ lớn hơn không?"),
      ex("This room isn't big enough for six people.", "Phòng này không đủ rộng cho sáu người."),
      ex("We don't have enough chairs for everyone.", "Chúng ta không có đủ ghế cho mọi người.", "Enough đứng trước danh từ nhưng đứng sau tính từ: enough chairs, nhưng big enough."),
      ex("There are too many motorbikes in the city centre.", "Trung tâm thành phố có quá nhiều xe máy."),
      p("Muốn nói rõ **quá... nên không làm được gì**, hoặc **đủ... để làm gì**, thêm **to + động từ nguyên mẫu** vào sau."),
      ex("The tea is too hot to drink.", "Trà nóng quá, không uống được.", "Không nói “too hot to drink it”, vì chủ ngữ the tea đã là thứ được uống rồi."),
      ex("My son is old enough to go to school by bus.", "Con trai tôi đã đủ lớn để tự đi học bằng xe buýt."),
      p("Khi cần **phàn nàn lịch sự** ở nhà hàng hay cửa hàng, ghép ba mảnh: mở đầu bằng **Excuse me**, nêu vấn đề bằng **too** hoặc **not... enough**, rồi nhờ bằng **Could I...? / Could you...?** như ở bài Gọi điện thoại: **Excuse me, this soup is too salty. Could I have another one, please?** Ăn xong, gọi tính tiền: **Could we have the bill, please?**"),
      tip("Mẹo nhớ vị trí của **enough**: “**sau tính, trước danh**”: big **enough**, **enough** money. Còn phát âm: enough đọc là /ɪˈnʌf/, chữ **gh** đọc thành /f/ và trọng âm rơi vào âm sau: i-NÁP."),
      mistake("The view here is too beautiful!", "The view here is really beautiful!", "Tiếng Việt khen “Đẹp quá!”, nên người Việt dịch thành too beautiful. Nhưng too nghĩa là đẹp tới mức có vấn đề. Khen thì dùng really, very hoặc so."),
      mistake("He isn't enough old to drive.", "He isn't old enough to drive.", "Tiếng Việt nói “đủ lớn” (đủ đứng trước), nên người học đặt enough trước tính từ. Tiếng Anh ngược lại: tính từ + enough."),
      mistake("There is too much people here.", "There are too many people here.", "People là danh từ đếm được số nhiều, nên dùng too many và are."),
      teacher("Tôi đã chứng kiến không ít lần học viên khen chủ nhà người nước ngoài “Your house is too big!” và chủ nhà ngẩn người, tưởng mình bị chê. Nên các bạn nhớ kỹ: **too là lời phàn nàn, very là lời khen**. Cách luyện của tôi: mỗi ngày nhìn quanh và nói ba câu than phiền nhỏ bằng too, ba câu bằng not enough. Ví dụ: My coffee is too sweet. My desk isn't big enough. Nói thành tiếng, nhanh và vui, như đang càu nhàu thật."),
      summary(
        "Too + tính từ thường là quá mức, gây vấn đề (trừ câu cố định You're too kind); muốn khen thì dùng very, really hoặc so.",
        "Enough đứng sau tính từ, trước danh từ: big enough, enough money.",
        "Too many + danh từ đếm được số nhiều; too much + danh từ không đếm được.",
        "Thêm to + động từ để nói hậu quả hoặc mục đích: too hot to drink, old enough to drive.",
        "Phàn nàn lịch sự: Excuse me + vấn đề + Could I / Could you...?",
      ),
    ],
  },
  words: [
    word("enough", "/ɪˈnʌf/", "đủ", "Do we have enough time?", "e|nough", 1, "Chữ gh đọc là /f/, trọng âm ở âm thứ hai: i-NÁP."),
    word("tight", "/taɪt/", "chật, bó", "These jeans are too tight.", "tight", 0, "Chữ gh câm; nhớ giữ âm /t/ ở cuối, đừng bỏ."),
    word("loose", "/luːs/", "rộng, lỏng", "This shirt is a bit loose.", "loose", 0, "Loose kết thúc bằng âm /s/. Đừng nhầm với lose /luːz/ (mất, thua)."),
    word("sweet", "/swiːt/", "ngọt", "This coffee is too sweet for me.", "sweet", 0, "Nguyên âm dài /iː/ và nhớ giữ âm /t/ ở cuối, đừng bỏ."),
    word("salty", "/ˈsɒl.ti/", "mặn", "Excuse me, this soup is too salty.", "sal|ty", 0, "Đọc rõ âm /l/ trước /t/: “xon-ti”, đừng đọc thành “xa-ti”."),
    word("noisy", "/ˈnɔɪ.zi/", "ồn ào", "It's too noisy to sleep here.", "noi|sy", 0),
    word("spicy", "/ˈspaɪ.si/", "cay", "The soup is too spicy for me.", "spi|cy", 0),
    word("space", "/speɪs/", "chỗ, không gian", "There isn't enough space for a sofa.", "space", 0, "Nhớ âm /s/ ở cuối, không đọc thành “xpây”."),
  ],
  exercises: [
    mc("a2-n11-1", "This bag is ___. I can't carry it.", ["too heavy", "heavy enough", "enough heavy"], 0, "Nặng quá mức nên không mang được: too heavy."),
    mc("a2-n11-2", "Is the room ___ for four people?", ["enough big", "too big enough", "big enough", "too enough"], 2, "Enough đứng sau tính từ: big enough."),
    fill("a2-n11-3", "There are too ___ people on this bus.", ["many"], "People là danh từ đếm được số nhiều nên dùng too many."),
    fill("a2-n11-4", "I don't have ___ money to buy a new car. (đủ)", ["enough"], "Enough đứng trước danh từ: enough money."),
    reorder("a2-n11-5", "My suitcase is too heavy to carry.", "Too + tính từ + to + động từ nguyên mẫu: nặng quá, không mang được."),
    reorder("a2-n11-6", "She isn't old enough to drive.", "Not + tính từ + enough + to + động từ nguyên mẫu."),
    listen("a2-n11-7", "The soup is too spicy for me.", ["Món canh này cay vừa đủ với tôi.", "Món canh này không cay lắm.", "Món canh này cay quá đối với tôi."], 2, "Too spicy là cay quá mức, người nói thấy khó ăn."),
    listen("a2-n11-8", "Excuse me, this coffee is too sweet. Could I have another one, please?", ["Xin lỗi, cà phê này ngọt quá. Cho tôi cốc khác được không?", "Xin lỗi, cà phê này chưa đủ ngọt. Cho tôi thêm đường nhé?", "Cà phê này ngọt thật. Cho tôi thêm một cốc nữa nhé."], 0, "Too sweet là ngọt quá mức, đây là lời phàn nàn lịch sự: Excuse me + vấn đề + Could I have another one?"),
    correct("a2-n11-9", "This room isn't enough big for us.", ["This room isn't big enough for us."], "Enough đứng sau tính từ: big enough, không phải enough big."),
    correct("a2-n11-10", "There are too much cars in the city centre.", ["There are too many cars in the city centre."], "Cars là danh từ đếm được số nhiều nên dùng too many. Too much chỉ đi với danh từ không đếm được."),
  ],
  freeSpeaking: free(
    "Tell me about a hotel, a restaurant or a shop that wasn't very good.",
    "Kể về một nơi bạn từng đến mà chưa hài lòng (khách sạn, nhà hàng, cửa hàng): điều gì quá mức, điều gì chưa đủ, và một điểm tốt của nơi đó.",
    "Last year I stayed at a small hotel in Sa Pa. The room was very clean, but it was too cold at night, and there weren't enough blankets. The bathroom was too small, and the Wi-Fi wasn't fast enough to watch films. But the view from the window was really beautiful.",
  ),
  speaking: [
    say("This shirt is too big for me.", "Cái áo này rộng quá so với tôi."),
    say("The room isn't big enough for our family.", "Căn phòng không đủ rộng cho gia đình chúng tôi."),
    say("There are too many people here today.", "Hôm nay ở đây đông người quá."),
  ],
  dialogue: dialogue(
    "Mua giày",
    "Chị Hà vào một cửa hàng giày để mua một đôi đi làm. Chị thử vài đôi, nói với người bán đôi nào chật, đôi nào rộng, rồi hỏi giá.",
    { A: "Chị Hà, khách hàng", B: "Người bán hàng" },
    A("Excuse me, can I try these shoes in size thirty-eight?", "Chị ơi, cho tôi thử đôi này cỡ ba mươi tám được không?"),
    B("Of course. Here you are.", "Tất nhiên rồi. Của chị đây."),
    A("Hmm, they're too tight. Do you have a bigger size?", "Hừm, chật quá. Chị có cỡ lớn hơn không?"),
    B("Yes, here's size thirty-nine. How are they?", "Có, đây là cỡ ba mươi chín. Chị thấy thế nào?"),
    A("They're better, but they're a bit loose.", "Đôi này đỡ hơn, nhưng hơi rộng một chút."),
    B("What about these white ones? They're really beautiful.", "Chị thử đôi màu trắng này xem? Đẹp lắm ạ."),
    A("Yes, they're lovely, and they're big enough. How much are they?", "Ừ, đẹp thật, mà cũng vừa đủ rộng. Bao nhiêu tiền vậy?"),
    B("One million two hundred thousand dong.", "Một triệu hai trăm nghìn đồng ạ."),
    A("Oh, they're too expensive for me. I don't have enough money today.", "Ôi, đắt quá so với tôi. Hôm nay tôi không mang đủ tiền."),
    B("These black ones are on sale. They're only six hundred thousand. Try them on.", "Đôi màu đen này đang giảm giá. Chỉ sáu trăm nghìn thôi. Chị đi thử xem."),
    A("Oh, they're comfortable enough to wear all day. I'll take them.", "Ồ, đôi này đủ êm để đi cả ngày. Tôi lấy đôi này."),
    B("Good choice. Would you like a bag?", "Chị chọn hay đấy. Chị có cần túi không ạ?"),
    A("No, thanks. My bag is big enough.", "Không, cảm ơn chị. Túi của tôi đủ to rồi."),
  ),
  dialogueQuestions: [
    listenQ("a2-n11-d1", "Đôi giày cỡ ba mươi tám có vấn đề gì?", "Hmm, they're too tight. Do you have a bigger size?", ["Rộng quá", "Chật quá", "Đắt quá", "Không đẹp"], 1, "They're too tight: chật quá, nên chị Hà hỏi cỡ lớn hơn."),
    mc("a2-n11-d2", "Vì sao chị Hà không mua đôi giày màu trắng?", ["Vì đôi đó chật", "Vì chị không thích màu trắng", "Vì đôi đó đắt quá và chị không mang đủ tiền"], 2, "They're too expensive for me. I don't have enough money today."),
    mc("a2-n11-d3", "Cuối cùng chị Hà mua đôi nào?", ["Đôi màu trắng", "Đôi màu đen đang giảm giá", "Không mua đôi nào"], 1, "These black ones are on sale... I'll take them."),
  ],
  reading: reading({
    title: "Nhận xét về một homestay trên mạng",
    text: `Nice place, but not perfect

My husband and I stayed at Green Hill Homestay in Da Lat for three nights last month. We chose it because of the photos online.

The good things first. The garden was really beautiful, and the owner, Mrs Nguyen, was very kind. She cooked breakfast for us every morning. The coffee was strong enough to wake me up!

But there were some problems. Our room was too small for two big suitcases, and there wasn't enough space for a table. The bed was comfortable, but the walls were too thin, so we heard everything from the next room. At night, it was too noisy to sleep because of the street outside. There were also too many steps up to our room, so the homestay isn't good for old people.

Will we go back? Maybe. It's cheap, and the breakfast is great, but ask for a quiet room.`,
    glossary: [
      ["owner", "chủ nhà"],
      ["strong", "đậm, mạnh"],
      ["wake me up", "làm tôi tỉnh ngủ"],
      ["suitcases", "va li"],
      ["walls", "bức tường"],
      ["thin", "mỏng"],
      ["steps", "bậc thang"],
    ],
    questions: [
      mc("a2-n11-r1", "Nhìn chung, người viết đánh giá homestay thế nào?", ["Hoàn hảo, không có gì để chê", "Có điểm tốt nhưng cũng có vài vấn đề", "Rất tệ, chắc chắn không quay lại", "Đắt nhưng đáng tiền"], 1, "Tiêu đề đã nói ý chính: Nice place, but not perfect."),
      mc("a2-n11-r2", "Người viết khen điều gì?", ["Phòng rộng và yên tĩnh", "Đường phố bên ngoài yên tĩnh", "Có nhiều chỗ để đồ", "Khu vườn đẹp và chủ nhà tốt bụng"], 3, "The garden was really beautiful, and the owner, Mrs Nguyen, was very kind."),
      fill("a2-n11-r3", "Hoàn thành câu theo bài đọc: There wasn't enough ___ for a table.", ["space"], "Enough đứng trước danh từ: enough space, không đủ chỗ."),
      mc("a2-n11-r4", "Vì sao họ nghe thấy mọi thứ từ phòng bên cạnh?", ["Vì tường quá mỏng", "Vì cửa sổ luôn mở", "Vì phòng bên có trẻ con", "Vì giường không êm"], 0, "The walls were too thin, so we heard everything from the next room."),
      mc("a2-n11-r5", "Theo người viết, homestay này không hợp với ai?", ["Người già, vì có quá nhiều bậc thang", "Trẻ em", "Người thích cà phê", "Khách đi một mình"], 0, "There were also too many steps up to our room, so the homestay isn't good for old people."),
    ],
  }),
  task: task({
    prompt: "Bạn vừa ăn tối ở một nhà hàng và có vài điều chưa hài lòng. Viết một lời nhận xét ngắn (6–7 câu, ít nhất 55 từ) về đồ ăn, chỗ ngồi và phục vụ, có cả một điểm khen.",
    hints: [
      "Điều quá mức: too + tính từ (too salty, too noisy).",
      "Điều chưa đủ: not + tính từ + enough, hoặc not enough + danh từ.",
      "Phân biệt too many (đếm được) và too much (không đếm được).",
      "Khen một điểm tốt bằng very hoặc really, không dùng too.",
    ],
    model: "We had dinner at Lotus Restaurant last night. The food was really delicious, but the soup was too salty. There were too many people, and the restaurant was too noisy. There weren't enough chairs, so we waited for twenty minutes. The room wasn't big enough for our group. The waiter put too much sugar in my coffee, and it was too hot to drink. But the staff were very friendly.",
    checklist: [
      "Có ít nhất 2 câu với too + tính từ.",
      "Có ít nhất 1 câu với enough đặt đúng chỗ: sau tính từ, trước danh từ.",
      "Dùng đúng too many hay too much theo loại danh từ.",
      "Lời khen dùng very hoặc really, không dùng too.",
      "Có ít nhất 1 câu too hoặc enough + to + động từ.",
    ],
    minWords: 55,
  }),
});
