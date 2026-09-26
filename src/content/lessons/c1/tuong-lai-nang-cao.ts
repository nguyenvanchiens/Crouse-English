import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "tuong-lai-nang-cao",
  title: "Sắp sửa, dự kiến, chắc chắn sẽ",
  minutes: 35,
  lecture: {
    title: "Các cách nói tương lai nâng cao",
    blocks: [
      p("Người Việt nói về tương lai chủ yếu bằng hai chữ: “sẽ” và “sắp”. Lên đến B2, các bạn đã dùng thạo will, be going to và thì tiếp diễn. Nhưng khi đọc báo tiếng Anh, nghe bản tin sân bay hay viết email cho đối tác, các bạn sẽ gặp một nhóm cấu trúc khác: **be about to**, **be due to**, **be bound to**, **be on the verge of**, **be set to**, **be to**. Mỗi cấu trúc là một sắc thái riêng của chữ “sắp” và chữ “sẽ”."),
      table(
        ["Cấu trúc", "Nghĩa", "Theo sau là", "Ví dụ"],
        ["be about to", "sắp sửa, ngay bây giờ", "V nguyên mẫu", "The film is about to start."],
        ["be on the verge of", "đứng bên bờ, sắp xảy ra (thường là việc lớn)", "danh từ / V-ing", "The company is on the verge of collapse."],
        ["be due to", "dự kiến theo lịch, theo thời gian biểu", "V nguyên mẫu (hoặc be due + thời gian)", "The flight is due to land at noon."],
        ["be bound to", "chắc chắn sẽ (người nói dự đoán)", "V nguyên mẫu", "Prices are bound to go up."],
        ["be set to", "dự kiến, được cho là sắp (văn báo chí)", "V nguyên mẫu", "The bank is set to cut interest rates."],
        ["be to", "kế hoạch chính thức, sắp xếp chính thức", "V nguyên mẫu", "The Prime Minister is to visit Hue next month."],
      ),
      p("**Be about to** nói về việc xảy ra **ngay tức khắc**, nên không đi với mốc thời gian cụ thể như tomorrow hay next week. Muốn nói việc đã lên lịch, hãy dùng **be due to**."),
      ex("Hurry up! The train is about to leave.", "Nhanh lên! Tàu sắp chạy rồi."),
      ex("I was just about to call you when your message came in.", "Tôi vừa định gọi cho anh thì tin nhắn của anh đến.", "Was about to... when: “vừa định làm gì thì...”. Cấu trúc kể chuyện rất hay dùng."),
      mistake("The conference is about to start next Monday.", "The conference is due to start next Monday.", "Tiếng Việt dùng “sắp” cho cả việc ngay trước mắt lẫn việc tuần sau. Tiếng Anh thì about to chỉ dành cho việc ngay tức khắc; việc theo lịch dùng due to."),
      ex("The two companies are on the verge of signing a major deal.", "Hai công ty sắp ký một thương vụ lớn.", "On the verge of (hoặc on the brink of) nhấn mạnh rằng một bước ngoặt sắp đến. Brink thường đi với điều xấu: on the brink of war."),
      mistake("The factory is on the verge to close.", "The factory is on the verge of closing.", "Of là giới từ, nên sau nó phải là danh từ hoặc V-ing. Người Việt quen “sắp + động từ” nên hay ghép với to."),
      ex("You've worked so hard. You're bound to pass the exam.", "Bạn đã học chăm như vậy. Chắc chắn bạn sẽ đỗ.", "Bound to thể hiện niềm tin rất mạnh của người nói, mạnh hơn will và likely to."),
      p("**Be set to** và **be to** là hai cấu trúc của báo chí và văn bản chính thức. **Be set to** là dự đoán gần như chắc chắn dựa trên thông tin hiện có. **Be to** là kế hoạch đã được cơ quan, tổ chức quyết định; ngoài ra còn dùng để ra chỉ thị: You are to report to reception at eight."),
      ex("Petrol prices are set to rise again next month.", "Giá xăng dự kiến sẽ lại tăng vào tháng tới."),
      mistake("The flight due to arrive at nine.", "The flight is due to arrive at nine.", "Tiếng Việt nói “chuyến bay dự kiến đến lúc chín giờ” mà không cần “là” hay “thì”. Tiếng Anh bắt buộc có động từ be trong tất cả các cấu trúc của bài này. Riêng tiêu đề báo được phép bỏ be: Bank set to cut rates."),
      tip("Mẹo nhớ theo mức độ gần: **about to** (vài giây, vài phút) → **on the verge of** (sắp đến bước ngoặt) → **due to** (theo lịch) → **set to / be to** (tin tức, kế hoạch chính thức). Còn **bound to** không nói về thời gian mà nói về **độ chắc chắn**."),
      teacher("Khi đứng lớp, tôi thấy cấu trúc bị học viên bỏ quên nhiều nhất là **be to**. Học trò đọc câu The President is to visit Vietnam rồi dịch là “Tổng thống là để thăm Việt Nam”, nghe rất ngô nghê. Tôi khuyên: mỗi sáng đọc năm tiêu đề trên một trang báo tiếng Anh, gạch chân mọi chữ **set to**, **due to**, **to + động từ** ngay sau danh từ, rồi tự dịch sang tiếng Việt kiểu bản tin thời sự. Một tháng thôi, các bạn sẽ đọc báo nhanh hơn hẳn."),
      summary(
        "**Be about to** + V: sắp sửa ngay tức khắc, không đi với tomorrow hay next week. **Was about to... when**: vừa định... thì...",
        "**Be on the verge / brink of** + danh từ hoặc V-ing (không đi với to): sắp đến một bước ngoặt; brink thường dành cho điều xấu.",
        "**Be due to**: theo lịch, thời gian biểu. **Be set to**: dự báo của báo chí. **Be to**: kế hoạch chính thức hoặc chỉ thị.",
        "**Be bound to** nói về **độ chắc chắn** của người nói, không nói về thời gian: You're bound to pass.",
        "Mọi cấu trúc đều cần động từ **be** chia đúng; chỉ tiêu đề báo mới được bỏ be.",
      ),
    ],
  },
  words: [
    word("imminent", "/ˈɪm.ɪ.nənt/", "sắp xảy ra, cận kề", "Forecasters warned that a typhoon was imminent.", "im|mi|nent", 0),
    word("inevitable", "/ɪˈnev.ɪ.tə.bəl/", "không thể tránh khỏi", "Some delays are inevitable in a project this large.", "in|ev|i|ta|ble", 1, "Trọng âm ở âm tiết thứ hai: in-NEV-i-ta-ble, đừng nhấn vào âm đầu."),
    word("verge", "/vɜːdʒ/", "bờ, ranh giới (be on the verge of: sắp)", "She was on the verge of tears.", "verge", 0, "Âm cuối /dʒ/ phải bật ra rõ, đừng nuốt thành “vơ”."),
    word("brink", "/brɪŋk/", "bờ vực", "The company was on the brink of bankruptcy.", "brink", 0),
    word("forthcoming", "/ˌfɔːθˈkʌm.ɪŋ/", "sắp tới, sắp diễn ra", "Details will be announced at the forthcoming conference.", "forth|com|ing", 1),
    word("unveil", "/ʌnˈveɪl/", "công bố, ra mắt", "The firm is set to unveil its new model next week.", "un|veil", 1),
    word("tentative", "/ˈten.tə.tɪv/", "tạm thời, dự kiến (chưa chốt)", "We have set a tentative date for the launch.", "ten|ta|tive", 0, "Trọng âm ở âm đầu: TEN-ta-tive; đuôi -tive đọc nhẹ /tɪv/, nhớ bật âm cuối /v/."),
    word("itinerary", "/aɪˈtɪn.ər.ər.i/", "lịch trình chuyến đi", "Our travel agent sent us the full itinerary.", "i|tin|er|a|ry", 1),
  ],
  exercises: [
    mc("c1-n03-1", "The lights are going down. The film is ___ start.", ["on the verge of", "about to", "bound", "due"], 1, "About to + V nguyên mẫu: sắp sửa ngay bây giờ. Bound và due thiếu to; on the verge of phải đi với danh từ hoặc V-ing."),
    mc("c1-n03-2", "According to the timetable, the ferry ___ arrive at half past ten.", ["is due to", "is on the verge of", "is bound", "is about"], 0, "Theo thời gian biểu thì dùng be due to + V."),
    fill("c1-n03-3", "After weeks of heavy rain, the river is on the ___ of flooding.", ["verge", "brink"], "On the verge of hoặc on the brink of + V-ing: sắp xảy ra."),
    fill("c1-n03-4", "Don't lend him your car. He's ___ to crash it. (chắc chắn sẽ)", ["bound", "sure", "certain"], "Be bound to (hoặc be sure to, be certain to): người nói tin chắc điều đó sẽ xảy ra."),
    reorder("c1-n03-5", "Ticket prices are set to rise sharply.", "Be set to + V: dự kiến sẽ, cách nói của báo chí."),
    reorder("c1-n03-6", "The company is on the verge of bankruptcy.", "On the verge of + danh từ: bên bờ vực."),
    listen("c1-n03-7", "The Prime Minister is to visit Da Nang next week.", ["Thủ tướng đã thăm Đà Nẵng tuần trước.", "Thủ tướng muốn thăm Đà Nẵng nhưng chưa chắc chắn.", "Theo kế hoạch chính thức, Thủ tướng sẽ thăm Đà Nẵng vào tuần tới."], 2, "Be to + V: kế hoạch chính thức, hay gặp trong bản tin."),
    listen("c1-n03-8", "I was just about to leave when the phone rang.", ["Tôi vừa đi khỏi thì điện thoại reo.", "Tôi vừa định đi thì điện thoại reo.", "Tôi không đi vì điện thoại cứ reo mãi.", "Điện thoại reo nên tôi quyết định đi luôn."], 1, "Was about to... when: vừa định làm gì thì có việc khác xen vào. Việc rời đi chưa xảy ra."),
    correct("c1-n03-9", "The two companies are on the verge to reach an agreement.", ["The two companies are on the verge of reaching an agreement.", "The two companies are on the verge of an agreement.", "The two companies are on the brink of reaching an agreement."], "Of là giới từ, nên sau on the verge of là V-ing hoặc danh từ: of reaching an agreement, hoặc gọn hơn là of an agreement."),
    correct("c1-n03-10", "The new bridge is about to open next year.", ["The new bridge is due to open next year.", "The new bridge is set to open next year.", "The new bridge is to open next year.", "The new bridge is expected to open next year.", "The new bridge is scheduled to open next year.", "The new bridge is going to open next year.", "The new bridge will open next year."], "About to chỉ việc xảy ra ngay tức khắc, không đi với mốc thời gian xa như next year. Việc theo lịch dùng be due to; tin tức hoặc kế hoạch chính thức dùng be set to, be to."),
  ],
  speaking: [
    say("The meeting is due to start in ten minutes.", "Cuộc họp dự kiến bắt đầu sau mười phút nữa."),
    say("Hurry up, the train is about to leave.", "Nhanh lên, tàu sắp chạy rồi."),
    say("If you keep working this hard, you're bound to succeed.", "Nếu bạn cứ chăm chỉ thế này, chắc chắn bạn sẽ thành công."),
  ],
  freeSpeaking: free(
    "What changes are about to happen, or are due to happen, in your life, your job or your city over the next year?",
    "Nói về ba bốn thay đổi sắp tới trong cuộc sống, công việc hoặc thành phố của bạn. Phân biệt rõ việc ngay trước mắt (be about to, be on the verge of), việc theo lịch (be due to), kế hoạch chính thức (be to, be set to) và điều bạn tin chắc (be bound to).",
    "Quite a lot is about to change for me, actually. My company is due to move to a new office in Thu Duc at the end of next month, so my commute is bound to get longer, at least at first. I've also been told that I'm to lead a small team from January, which is exciting but slightly frightening. In my city, the second metro line is set to open next year, although I suspect the date will slip again. And personally, I'm on the verge of booking my first trip to Japan. I just need to find the courage to press the button.",
  ),
  dialogue: dialogue(
    "Phỏng vấn giám đốc một hãng xe điện",
    "Ben, phóng viên kinh tế người Anh, phỏng vấn anh Quân, giám đốc điều hành một công ty khởi nghiệp xe điện ở Hà Nội, về các kế hoạch sắp tới. Mỗi câu trả lời cần phân biệt rõ việc nào ngay trước mắt, việc nào theo lịch, việc nào chỉ là dự đoán.",
    { A: "Ben (phóng viên kinh tế)", B: "Anh Quân (giám đốc điều hành)" },
    A("Mr Quan, thank you for your time. I understand you're about to announce something big.", "Anh Quân, cảm ơn anh đã dành thời gian. Tôi được biết anh sắp công bố một điều quan trọng."),
    B("That's right. We're on the verge of signing a partnership with a Korean battery maker.", "Đúng vậy. Chúng tôi sắp ký thỏa thuận hợp tác với một hãng pin Hàn Quốc."),
    A("When is the deal due to be signed?", "Theo lịch, thỏa thuận sẽ được ký khi nào?"),
    B("It's due to be signed on the fifteenth, in Seoul. Our chairman is to attend the ceremony in person.", "Theo lịch là ngày mười lăm, tại Seoul. Theo kế hoạch chính thức, chủ tịch của chúng tôi sẽ đích thân dự lễ ký."),
    A("Analysts say battery prices are set to fall next year. Will that affect you?", "Giới phân tích nói giá pin dự kiến sẽ giảm vào năm tới. Điều đó có ảnh hưởng đến anh không?"),
    B("If they fall, our costs are bound to drop as well, so it can only help us.", "Nếu giá giảm, chắc chắn chi phí của chúng tôi cũng giảm theo, nên chỉ có lợi cho chúng tôi."),
    A("Last year there were rumours that the company was on the brink of bankruptcy.", "Năm ngoái có tin đồn công ty đang đứng bên bờ vực phá sản."),
    B("I won't deny it. We were about to run out of cash when our second investor stepped in.", "Tôi không phủ nhận. Chúng tôi sắp cạn tiền mặt thì nhà đầu tư thứ hai xuất hiện."),
    A("And the new model? Is it set to launch this year?", "Còn mẫu xe mới? Nó dự kiến ra mắt trong năm nay chứ?"),
    B("We're set to unveil it at the forthcoming Hanoi Motor Show, although the date is still tentative.", "Chúng tôi dự kiến giới thiệu nó tại Triển lãm Ô tô Hà Nội sắp tới, dù ngày cụ thể vẫn chưa chốt."),
    A("Aren't your competitors bound to copy the design?", "Chẳng phải đối thủ của anh chắc chắn sẽ sao chép thiết kế sao?"),
    B("Some are bound to try. I'm sorry, my next meeting is about to start. Shall we continue by email?", "Chắc chắn sẽ có người thử. Xin lỗi anh, cuộc họp tiếp theo của tôi sắp bắt đầu. Mình tiếp tục qua email nhé?"),
  ),
  dialogueQuestions: [
    listenQ("c1-n03-d1", "According to Mr Quân, when and where is the partnership deal due to be signed?", "It's due to be signed on the fifteenth, in Seoul. Our chairman is to attend the ceremony in person.", ["On the fifteenth, in Hanoi", "On the fifteenth, in Seoul", "Next year, in Seoul", "At the Hanoi Motor Show"], 1, "It's due to be signed on the fifteenth, in Seoul: theo lịch là ngày mười lăm, tại Seoul."),
    mc("c1-n03-d2", "What does Mr Quân admit about the company's situation last year?", ["It was about to run out of cash when a second investor stepped in.", "It had already gone bankrupt.", "It had just signed a deal with a battery maker.", "It had copied a competitor's design."], 0, "I won't deny it. We were about to run out of cash when our second investor stepped in: suýt cạn tiền thì nhà đầu tư thứ hai xuất hiện."),
    mc("c1-n03-d3", "How does Mr Quân seem to feel about competitors copying the new model?", ["He is worried that it will ruin the launch.", "He thinks it is completely impossible.", "He expects some to try, but he does not seem troubled.", "He is planning to take them to court."], 2, "Some are bound to try: anh chắc chắn sẽ có người thử, nhưng rồi chuyển sang chuyện khác ngay, không tỏ ra lo lắng."),
  ],
  reading: reading({
    title: "Port city set to go electric",
    text: `The port city of Cang Xanh is set to become one of the first cities in Vietnam to run an entirely electric bus fleet, after the city council approved an ambitious plan on Tuesday. The first forty buses are due to enter service in March, and the remaining diesel vehicles are to be withdrawn by the end of 2028, according to the council's official timetable.

The decision marks a sharp change of direction. Only two years ago, the city's bus company was on the verge of collapse, having lost passengers steadily to motorbikes and ride-hailing apps. Ticket sales covered barely a third of its running costs, and several routes were on the brink of being cut altogether. Officials now argue that cleaner, quieter and more reliable buses will win those passengers back.

Not everyone is convinced. Transport economists point out that electric buses cost roughly twice as much as diesel ones to buy, and that the savings on fuel take years to appear. "Delays are inevitable in a project of this size," said one consultant, who asked not to be named. "The charging depots alone are bound to take longer than the council expects." Others worry that the city's power grid, already under pressure in the summer months, may struggle to cope with hundreds of buses charging overnight.

Supporters dismiss these concerns as exaggerated. The bus manufacturer, a Vietnamese firm that is about to open a second factory in the city, has guaranteed delivery dates in its contract and will pay penalties if it misses them. The council, meanwhile, is to publish a detailed charging plan next month, and the national electricity company is reportedly on the verge of approving a new substation near the main depot.

For passengers, the most visible changes are imminent. A tentative map of the new network, due to be unveiled at the forthcoming city transport fair, is expected to include three express routes linking the port, the airport and the city centre. Fares are set to remain unchanged for at least the first year, and residents over seventy are to travel free of charge on weekdays.

Whether the plan succeeds will depend less on the buses themselves than on the habits of the people who are meant to use them. "If the service is frequent and punctual, people are bound to try it," said Nguyen Thi Mai, a secondary school teacher who currently rides a motorbike to work. "But I gave up on the old buses years ago. The new ones will have to earn my trust."`,
    glossary: [
      ["fleet", "đội xe (tất cả xe của một hãng)"],
      ["ride-hailing app", "ứng dụng gọi xe"],
      ["running costs", "chi phí vận hành"],
      ["depot", "bến bãi, trạm (xe buýt)"],
      ["power grid", "lưới điện"],
      ["penalty", "tiền phạt"],
      ["substation", "trạm biến áp"],
    ],
    questions: [
      mc("c1-n03-r1", "What is the article mainly about?", ["A city's plan to switch to electric buses, and the doubts surrounding it", "The collapse of a city's bus company", "A new factory producing electric motorbikes", "Complaints about bus fares in the city"], 0, "Bài báo nêu kế hoạch chuyển sang xe buýt điện, rồi đưa cả ý kiến ủng hộ lẫn hoài nghi."),
      mc("c1-n03-r2", "According to the council's timetable, what is to happen by the end of 2028?", ["The first forty buses will enter service.", "Fares will go up.", "The remaining diesel buses will be withdrawn.", "A second bus factory will open."], 2, "The remaining diesel vehicles are to be withdrawn by the end of 2028: be to là kế hoạch chính thức."),
      mc("c1-n03-r3", "Why does the writer mention that the bus company was “on the verge of collapse” two years ago?", ["To show that electric buses have already failed once", "To explain why the city is making such a dramatic change", "To criticise the bus manufacturer", "To prove that motorbikes are cheaper than buses"], 1, "Công ty từng suýt sụp đổ vì mất khách; chi tiết này giải thích vì sao thành phố thay đổi mạnh như vậy (a sharp change of direction)."),
      fill("c1-n03-r4", "When the consultant says the depots are “bound to take longer”, he means he is ___ that they will be late. (chắc chắn)", ["certain", "sure", "convinced", "confident"], "Be bound to thể hiện niềm tin rất mạnh của người nói: chắc chắn sẽ trễ."),
      mc("c1-n03-r5", "What is Nguyen Thi Mai's attitude towards the new buses?", ["Enthusiastic: she has already sold her motorbike.", "Hostile: she will never use a bus again.", "Indifferent: she does not care about public transport.", "Cautiously open: she may try them, but they must prove reliable."], 3, "Chị nói người ta chắc chắn sẽ thử nếu xe chạy đều và đúng giờ, nhưng xe mới phải lấy lại được lòng tin của chị: thận trọng nhưng không phản đối."),
      mc("c1-n03-r6", "How would you describe the way the article is written?", ["Strongly in favour of the plan", "Balanced: it reports the views of both supporters and critics", "Strongly against the plan", "Humorous and informal"], 1, "Tác giả đưa ý kiến chuyên gia hoài nghi (Not everyone is convinced) và phía ủng hộ (Supporters dismiss these concerns), không tự đưa quan điểm."),
    ],
  }),
  task: task({
    prompt: "Viết một bài báo ngắn (khoảng 230–280 từ) về một dự án hoặc sự kiện lớn sắp diễn ra ở thành phố hoặc công ty của bạn: khai trương tuyến metro, hội chợ quốc tế, nhà máy mới... Nêu lịch trình, kế hoạch chính thức, dự báo của giới chuyên môn và cả ý kiến trái chiều. Dùng ít nhất năm cấu trúc tương lai khác nhau của bài.",
    hints: [
      "Tiêu đề có thể bỏ be (Da Nang set to host...), nhưng trong thân bài mọi cấu trúc đều phải có be.",
      "Nêu lịch cụ thể bằng be due to, kế hoạch chính thức của cơ quan bằng be to, dự báo bằng be set to.",
      "Thêm một dự đoán chắc chắn bằng be bound to và một việc sắp đến bước ngoặt bằng be on the verge / brink of + danh từ hoặc V-ing.",
      "Dùng be about to cho việc ngay sát (sắp mở đăng ký), không kèm mốc thời gian xa. Kết bài bằng một nhận định chung.",
    ],
    model:
      "Da Nang set to host first green energy expo\n\nDa Nang is set to host its first International Green Energy Expo next spring, in what organisers describe as the most ambitious business event in the city's history. The three-day exhibition is due to open on the twelfth of April at the city's main convention centre, and more than two hundred companies from fifteen countries are expected to take part.\n\nAccording to the official programme, the Minister of Industry and Trade is to deliver the opening speech, and the city's leaders are to sign a cooperation agreement with two Korean provinces on the second day. Several foreign investors are also on the verge of finalising major wind-power deals with local partners, and at least one of these is likely to be announced during the event.\n\nThe expo comes at an important moment for the region. Demand for electricity in central Vietnam is set to double within a decade, and experts warn that the region is on the brink of a serious power shortage unless new capacity is added quickly.\n\nNot everyone is enthusiastic, however. Some residents fear that traffic around the convention centre is bound to be chaotic, and hotel prices are certain to rise sharply during the week. Organisers insist that shuttle buses will run every ten minutes, but visitors are advised to reserve rooms early.\n\nOnline registration is about to open, and a tentative programme is due to be published next week. For a city that was once known mainly for its beaches, the expo is bound to be a turning point.",
    checklist: [
      "Có ít nhất năm cấu trúc khác nhau: be about to, be due to, be set to, be to, be bound to, be on the verge / brink of.",
      "Trong thân bài, mọi cấu trúc đều có động từ be chia đúng (chỉ tiêu đề mới được bỏ be).",
      "On the verge of hoặc on the brink of đi với danh từ hoặc V-ing, không đi với to.",
      "Be about to không đi kèm mốc thời gian xa như next month.",
      "Phân biệt rõ lịch trình (due to), kế hoạch chính thức (be to) và dự đoán (set to, bound to).",
      "Giọng văn khách quan như bản tin, có cả ý kiến trái chiều, không dùng I think.",
    ],
    minWords: 230,
  }),
});
