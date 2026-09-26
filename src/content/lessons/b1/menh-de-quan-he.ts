import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "menh-de-quan-he",
  title: "Người mà, cái mà",
  minutes: 30,
  lecture: {
    title: "Mệnh đề quan hệ: who, which, that, where, whose",
    blocks: [
      p("Bạn muốn nói với khách nước ngoài: “Đây là **người mà** đã giúp tôi tìm khách sạn” hay “Đó là **quán mà** tôi hay ăn phở.” Để thêm thông tin xác định **người nào, cái nào, nơi nào**, tiếng Anh dùng **mệnh đề quan hệ**, đặt ngay sau danh từ. Tiếng Việt dùng một chữ “mà” cho mọi trường hợp, còn tiếng Anh chọn từ theo loại danh từ."),
      table(
        ["Từ", "Dùng cho", "Ví dụ"],
        ["who", "người", "The man who lives next door is a doctor."],
        ["which", "vật, con vật", "I lost the bag which my mother gave me."],
        ["that", "người hoặc vật (văn nói rất hay dùng)", "This is the phone that I bought last week."],
        ["where", "nơi chốn", "That's the café where we first met."],
        ["whose", "của người đó, của vật đó (sở hữu)", "I have a friend whose father is a pilot."],
      ),
      ex("A nurse is a person who looks after patients.", "Y tá là người chăm sóc bệnh nhân."),
      ex("Hanoi is the city where I was born.", "Hà Nội là thành phố nơi tôi sinh ra."),
      ex("She's the woman whose son won the competition.", "Bà ấy là người phụ nữ có cậu con trai đã thắng cuộc thi.", "Whose + danh từ: thay cho her son, his car, their house."),
      p("**Lược bỏ đại từ quan hệ**: khi who, which, that đóng vai **tân ngữ**, tức là theo sau nó đã có một chủ ngữ khác, ta có thể bỏ đi. Người bản xứ bỏ rất thường xuyên khi nói."),
      table(
        ["Đầy đủ", "Lược bỏ", "Có bỏ được không?"],
        ["The book that I'm reading is great.", "The book I'm reading is great.", "Được, vì sau that có chủ ngữ I."],
        ["The man who called you is my boss.", "(không bỏ được)", "Không, vì who chính là chủ ngữ của called."],
      ),
      ex("Is this the book you were talking about?", "Đây có phải cuốn sách mà bạn đã nhắc đến không?", "Đã lược bỏ that. Giới từ about được đẩy xuống cuối câu."),
      tip("Mẹo kiểm tra: che từ who / which / that đi rồi nhìn phía sau. Nếu ngay sau đó là **một chủ ngữ + động từ** (I bought, you met) thì bỏ được. Nếu ngay sau đó là **động từ** (lives, called) thì phải giữ lại. Mẹo phát âm: whose đọc là /huːz/, giống hệt who's; nghe theo ngữ cảnh để phân biệt."),
      mistake("The man who he lives next door is a doctor.", "The man who lives next door is a doctor.", "Người Việt quen nghĩ vế nào cũng phải có chủ ngữ riêng, nên thêm he vào sau who. Nhưng who đã làm chủ ngữ của lives rồi, không lặp lại he nữa."),
      mistake("I lost the bag which my mother gave it to me.", "I lost the bag which my mother gave me.", "Which đã thay cho the bag, nên không thêm it nữa."),
      mistake("That's the restaurant which we had dinner.", "That's the restaurant where we had dinner.", "Nói về nơi xảy ra sự việc thì dùng where (hoặc which … at, nhưng where tự nhiên hơn)."),
      p("**Mệnh đề quan hệ không xác định**: khi danh từ đã rõ là ai, cái gì (tên riêng, hoặc người chỉ có một như my mother), mệnh đề chỉ **thêm thông tin phụ**. Bỏ cả mệnh đề đi, câu vẫn đủ nghĩa. Loại này đặt giữa **hai dấu phẩy**, **không dùng that** và **không lược bỏ** đại từ được. Khi đọc, ngừng giọng nhẹ ở chỗ dấu phẩy."),
      ex("My mother, who is sixty, still goes to work every day.", "Mẹ tôi, năm nay sáu mươi tuổi, vẫn đi làm hằng ngày.", "Tôi chỉ có một mẹ, nên who is sixty chỉ là thông tin thêm, đặt giữa hai dấu phẩy. Không viết My mother, that is sixty."),
      ex("Da Lat, which is famous for its flowers, is cool all year round.", "Đà Lạt, nơi nổi tiếng với hoa, mát mẻ quanh năm."),
      ex("He passed the exam, which surprised everyone.", "Anh ấy thi đỗ, điều đó làm mọi người bất ngờ.", "Which ở đây thay cho cả vế trước (việc anh ấy thi đỗ), không thay cho một danh từ. Trước which luôn có dấu phẩy."),
      teacher("Tôi vẫn nhớ một học viên làm hướng dẫn viên du lịch, mỗi lần giới thiệu đều nói một chuỗi câu ngắn: “This is a temple. It is old. People built it in 1070.” Tôi chỉ dạy anh ấy ghép lại: **This is a temple which people built in 1070.** Khách nghe thấy chuyên nghiệp hơn hẳn. Lời khuyên của tôi: mỗi ngày các bạn lấy hai câu ngắn có chung một danh từ và **ghép thành một câu** bằng who, which, where hay whose. Làm đều tay một tháng, câu nói của các bạn sẽ dài và mượt hơn rất nhiều."),
      summary(
        "who cho người, which cho vật, that cho cả người lẫn vật, where cho nơi chốn, whose + danh từ chỉ sở hữu.",
        "Mệnh đề quan hệ đứng ngay sau danh từ mà nó bổ nghĩa.",
        "Không lặp lại chủ ngữ hay tân ngữ: the man who lives (không phải who he lives), the bag which my mother gave me (không thêm it).",
        "Bỏ được who / which / that khi ngay sau nó là chủ ngữ + động từ: the book I'm reading.",
        "Nói về nơi xảy ra sự việc thì dùng where: the café where we first met.",
        "Mệnh đề **không xác định** chỉ thêm thông tin: đặt giữa dấu phẩy, không dùng that, không lược bỏ (My mother, who is sixty, …). **, which** có thể thay cho cả vế trước.",
      ),
    ],
  },
  words: [
    word("landlord", "/ˈlænd.lɔːd/", "chủ nhà (cho thuê)", "The landlord who owns this building lives in Da Nang.", "land|lord", 0),
    word("recipe", "/ˈres.ɪ.pi/", "công thức nấu ăn", "This is the recipe my grandmother gave me.", "rec|i|pe", 0, "Có ba âm tiết, chữ e cuối được đọc: RES-i-pi, không đọc thành “ri-xíp”."),
    word("author", "/ˈɔː.θə/", "tác giả", "He's the author whose books are sold everywhere.", "au|thor", 0, "Âm th là /θ/: đặt đầu lưỡi giữa hai hàm răng và thổi hơi, đừng đọc thành /t/."),
    word("owner", "/ˈəʊ.nə/", "người chủ, chủ sở hữu", "I met the owner of the shop where I bought this.", "own|er", 0),
    word("device", "/dɪˈvaɪs/", "thiết bị", "A charger is a device that gives power to your phone.", "de|vice", 1, "Âm cuối là /s/. Đừng nhầm với động từ devise, âm cuối /z/."),
    word("tenant", "/ˈten.ənt/", "người thuê nhà", "The tenant who lives upstairs always pays the rent on time.", "ten|ant", 0, "Trọng âm ở âm đầu: TEN-ənt. Nhớ giữ âm /t/ ở cuối."),
    word("describe", "/dɪˈskraɪb/", "miêu tả", "Can you describe the man who took your bag?", "de|scribe", 1),
    word("tool", "/tuːl/", "công cụ, dụng cụ", "A hammer is a tool which you use for hitting nails.", "tool", 0, "Âm /l/ cuối cần nâng lưỡi chạm lợi trên, đừng bỏ mất."),
  ],
  exercises: [
    mc("b1-n08-1", "A nurse is a person ___ looks after patients.", ["which", "who", "where", "whose"], 1, "Danh từ chỉ người (a person) và đại từ làm chủ ngữ của looks: who."),
    mc("b1-n08-2", "That's the hotel ___ we stayed last summer.", ["which", "who", "where"], 2, "Nơi xảy ra việc (chúng tôi ở đó) nên dùng where."),
    fill("b1-n08-3", "I have a friend ___ father is a pilot.", ["whose"], "Bố của người bạn đó: whose + danh từ."),
    fill("b1-n08-4", "The phone ___ I bought last week has stopped working. (đại từ quan hệ chỉ vật)", ["that", "which"], "Danh từ chỉ vật: that hoặc which. Ở câu này cũng có thể bỏ hẳn đại từ đi vì sau nó có chủ ngữ I."),
    reorder("b1-n08-5", "Is this the book you were talking about?", "Đã lược bỏ that sau the book. Giới từ about đứng cuối câu."),
    reorder("b1-n08-6", "Do you know anyone who speaks Japanese?", "Anyone chỉ người nên dùng who; who là chủ ngữ của speaks nên không bỏ được."),
    listen("b1-n08-7", "The girl who is sitting next to Lan is my cousin.", ["Cô gái ngồi cạnh Lan là em họ tôi.", "Lan đang ngồi cạnh em họ tôi.", "Em họ tôi tên là Lan."], 0, "Mệnh đề who is sitting next to Lan xác định cô gái nào."),
    listen("b1-n08-8", "That's the restaurant where we had our first date.", ["Chúng tôi định hẹn hò lần đầu ở nhà hàng đó.", "Nhà hàng đó đã đóng cửa sau buổi hẹn đầu tiên.", "Đó là nhà hàng nơi chúng tôi có buổi hẹn hò đầu tiên."], 2, "Where + mệnh đề: nơi xảy ra sự việc."),
    correct("b1-n08-9", "My brother, that lives in Hue, is a doctor.", "My brother, who lives in Hue, is a doctor.", "Mệnh đề giữa hai dấu phẩy là mệnh đề không xác định (chỉ thêm thông tin), nên không dùng that. Anh trai là người, dùng who."),
    correct("b1-n08-10", "The man who he fixed my motorbike was very kind.", "The man who fixed my motorbike was very kind.", "Who đã làm chủ ngữ của fixed rồi, không thêm he nữa."),
  ],
  speaking: [
    say("My sister is a teacher who works in a village school.", "Chị gái tôi là giáo viên dạy ở một trường làng."),
    say("This is the phone I bought last week.", "Đây là chiếc điện thoại tôi mua tuần trước."),
    say("Hanoi is the city where I was born.", "Hà Nội là thành phố nơi tôi sinh ra."),
  ],
  freeSpeaking: free(
    "Can you describe a place in your hometown that a visitor should see?",
    "Giới thiệu một địa điểm ở quê bạn cho khách nước ngoài: đó là nơi nào, ai làm việc ở đó, có món gì hay đồ gì đặc biệt. Dùng who, which, where, whose.",
    "In my hometown, there is a night market where you can try a lot of street food. There's a woman who sells grilled rice paper, and her stall is always busy. My favourite snack is banh can, which is a small rice cake cooked in a clay pot. It's a place that every visitor should see.",
  ),
  dialogue: dialogue(
    "Dẫn khách dạo phố cổ",
    "Minh là hướng dẫn viên du lịch, đang dẫn chị Sarah, một du khách người Úc, đi dạo phố cổ Hà Nội.",
    { A: "Minh", B: "Sarah" },
    A("This is the street where you can buy traditional silk.", "Đây là con phố nơi chị có thể mua lụa truyền thống."),
    B("Lovely! Who is the old man who is sitting outside that shop?", "Đẹp quá! Ông cụ đang ngồi trước cửa hàng kia là ai vậy?"),
    A("He's the owner. He's a man whose family has run the shop for a hundred years.", "Ông ấy là chủ tiệm. Gia đình ông đã mở tiệm này suốt một trăm năm."),
    B("Amazing. And what's the dish that everyone is eating over there?", "Tuyệt thật. Còn món mà mọi người đang ăn đằng kia là gì?"),
    A("That's bun cha. It's the dish which President Obama tried in Hanoi.", "Đó là bún chả. Đó là món mà Tổng thống Obama đã ăn thử ở Hà Nội."),
    B("I read about that! Is this the restaurant where he ate it?", "Tôi có đọc về chuyện đó! Đây có phải nhà hàng nơi ông ấy đã ăn không?"),
    A("No, the restaurant he visited is on another street. I can take you there.", "Không, nhà hàng ông ấy ghé nằm ở phố khác. Tôi có thể đưa chị tới đó."),
    B("Great. I also need a shop that sells good coffee. It's for my friends at home.", "Tuyệt. Tôi cũng cần một cửa hàng bán cà phê ngon. Để làm quà cho bạn bè ở nhà."),
    A("I know a woman whose coffee shop is near the lake. Her coffee is the best I've ever tried.", "Tôi quen một chị có quán cà phê gần hồ. Cà phê của chị ấy ngon nhất mà tôi từng uống."),
    B("You're the kind of guide who knows everything! Let's go.", "Anh đúng là kiểu hướng dẫn viên cái gì cũng biết! Đi thôi."),
  ),
  dialogueQuestions: [
    listenQ("b1-n08-d1", "Who is the old man sitting outside the shop?", "He's the owner. He's a man whose family has run the shop for a hundred years.", ["A tourist from Australia", "The owner, whose family has run the shop for a long time", "A famous cook from another street", "Minh's grandfather"], 1, "He's the owner… whose family has run the shop for a hundred years."),
    mc("b1-n08-d2", "Why is bun cha special, according to Minh?", ["President Obama tried it in Hanoi.", "It is only sold on this street.", "It is the cheapest dish in the old quarter.", "Sarah's friends asked her to try it."], 0, "It's the dish which President Obama tried in Hanoi."),
    listenQ("b1-n08-d3", "Why does Sarah want to buy coffee?", "Great. I also need a shop that sells good coffee. It's for my friends at home.", ["She wants to drink it at her hotel.", "Minh asked her to buy some.", "It's a present for her friends at home."], 2, "It's for my friends at home: Sarah mua cà phê làm quà cho bạn bè."),
  ],
  reading: reading({
    title: "A weekend in Hoi An",
    text: `Hoi An, which is about thirty kilometres from the centre of Da Nang, is one of the most popular towns in Vietnam. Last month I spent a weekend there with my friend Anna, who was visiting from Germany.

We stayed in a small guesthouse that was run by a family of four. The owner, whose name was Mrs Dang, cooked breakfast for us every morning. Her cao lau, which is a noodle dish you can only find in Hoi An, was the best thing I ate all weekend.

On the first day, we walked around the old town, where many of the houses are more than two hundred years old. We visited the Japanese Covered Bridge, which appears on the twenty-thousand-dong note. Anna, who loves taking photos, took about three hundred pictures!

In the afternoon, we went to a tailor's shop that makes clothes in twenty-four hours. The woman who measured us was fast and friendly. Anna ordered a dress, and I ordered a shirt. Both were ready the next evening, which surprised us.

At night, the streets are full of lanterns. You can buy a small paper lantern with a candle and put it on the river, which people believe brings good luck.

If you are looking for a place where history, food and shopping meet, Hoi An is perfect. Just remember to bring an empty suitcase!`,
    glossary: [
      ["guesthouse", "nhà nghỉ, nhà trọ nhỏ"],
      ["note", "tờ tiền giấy"],
      ["tailor", "thợ may"],
      ["measure", "đo (số đo cơ thể)"],
      ["lantern", "đèn lồng"],
      ["candle", "cây nến"],
    ],
    questions: [
      mc("b1-n08-r1", "What is the text mainly about?", ["The history of the Japanese Covered Bridge", "The writer's weekend in Hoi An", "How to open a guesthouse", "Anna's life in Germany"], 1, "Cả bài kể về chuyến đi cuối tuần ở Hội An của người viết."),
      mc("b1-n08-r2", "Who cooked breakfast every morning?", ["Anna", "The woman at the tailor's shop", "Mrs Dang, the owner of the guesthouse"], 2, "The owner, whose name was Mrs Dang, cooked breakfast for us every morning."),
      fill("b1-n08-r3", "Cao lau is a noodle dish which you can only find in ___.", ["Hoi An"], "Her cao lau, which is a noodle dish you can only find in Hoi An…"),
      mc("b1-n08-r4", "What surprised the writer and Anna?", ["The price of the lanterns", "The number of tourists in the old town", "That Mrs Dang could speak German", "That their clothes were ready the next evening"], 3, "Both were ready the next evening, which surprised us: which thay cho cả vế trước."),
      mc("b1-n08-r5", "Why does the writer suggest bringing an empty suitcase?", ["The guesthouse has no cupboards.", "Visitors will probably buy clothes and other things there.", "Suitcases are very expensive in Hoi An.", "Airlines only allow empty bags."], 1, "Câu suy luận: Hội An có tiệm may đồ lấy ngay và nhiều thứ để mua, nên khách sẽ cần chỗ đựng đồ mang về."),
    ],
  }),
  task: task({
    prompt: "Viết một đoạn văn (90–120 từ) giới thiệu quê hương hoặc khu phố của bạn cho một người bạn nước ngoài: một địa điểm, một người và một món ăn đặc biệt.",
    hints: [
      "Dùng where cho địa điểm: the market where…",
      "Dùng who hoặc whose cho người: a woman whose son…",
      "Dùng which / that, hoặc lược bỏ đại từ, cho món ăn và đồ vật.",
      "Thêm một mệnh đề không xác định giữa hai dấu phẩy: My grandmother, who is eighty, …",
    ],
    model: "I come from Nam Dinh, which is about ninety kilometres from Hanoi. Near my house there is a market where people sell fresh fish every morning. My favourite person there is an old lady who has sold rice cakes for forty years. She has a son whose restaurant is famous for beef noodle soup. It's a dish that every visitor should try. The temple I visit every spring is also worth seeing. My grandmother, who is eighty, still goes there every week. I hope you can come and visit the city where I grew up.",
    checklist: [
      "Có ít nhất một câu với who và một câu với where.",
      "Có ít nhất một câu với whose + danh từ.",
      "Không lặp lại chủ ngữ hay tân ngữ trong mệnh đề (who he…, which… it).",
      "Có ít nhất một câu lược bỏ that / which đúng chỗ.",
      "Mệnh đề quan hệ đứng ngay sau danh từ mà nó bổ nghĩa.",
      "Có ít nhất một mệnh đề không xác định giữa hai dấu phẩy (…, who / which …), không dùng that.",
    ],
    minWords: 90,
  }),
});
