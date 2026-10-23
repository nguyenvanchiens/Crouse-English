import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "tuong-lai-nang-cao",
  title: "Sắp sửa, dự kiến, chắc chắn sẽ",
  minutes: 38,
  lecture: {
    title: "Tương lai trang trọng và tương lai trong quá khứ",
    blocks: [
      p("Người Việt nói về tương lai chủ yếu bằng hai chữ: “sẽ” và “sắp”. Ở B2, các bạn đã dùng thạo will, be going to, be about to và be due to. Nhưng đọc một bản tin của Reuters, một thông báo nội bộ hay một cuốn tiểu sử, các bạn gặp cả một hệ thống tinh tế hơn: **be on the point / verge / brink of**, **be set to**, **be poised to**, **be to** (kế hoạch chính thức, chỉ thị, điều kiện), và **tương lai nhìn từ quá khứ**: was to, was to have done, was about to… when. Mỗi cấu trúc mang một sắc thái riêng về **thời điểm**, **độ chắc chắn** và **ai là người quyết định**."),
      table(
        ["Cấu trúc", "Sắc thái", "Theo sau là", "Ví dụ"],
        ["be about to / be on the point of", "ngay tức khắc, không kèm mốc thời gian xa", "V / V-ing", "She was on the point of resigning."],
        ["be on the verge / brink of", "sắp đến một bước ngoặt; brink nghiêng về kịch tính, nguy hiểm", "danh từ / V-ing", "on the brink of war; on the verge of tears"],
        ["be set to", "dự báo gần như chắc chắn (văn báo chí)", "V nguyên mẫu", "Fuel prices are set to rise."],
        ["be poised to", "đã ở thế sẵn sàng, chỉ chờ thời điểm", "V nguyên mẫu", "The firm is poised to enter the Thai market."],
        ["be to", "kế hoạch chính thức; chỉ thị; điều kiện (If… are to)", "V nguyên mẫu", "The minister is to resign. You are to wait here."],
        ["be bound to", "niềm tin chắc của người nói, không nói về thời gian", "V nguyên mẫu", "He's bound to find out."],
      ),
      p("**Be about to** và **be on the point of** đều chỉ việc ngay tức khắc, nên không đi với tomorrow hay next year. **On the point of** trang trọng hơn và đi với V-ing. Hai cấu trúc này rất hay dùng trong mẫu kể chuyện **was about to / was on the point of… when**: vừa định làm gì thì có việc khác xen vào."),
      ex("I was on the point of giving up when the email from the investor arrived.", "Tôi đã định bỏ cuộc thì email của nhà đầu tư đến.", "Việc bỏ cuộc không xảy ra. Đây là cấu trúc kể chuyện trang trọng hơn was just about to give up."),
      mistake("The conference is about to start next Monday.", "The conference is due to start next Monday.", "Tiếng Việt dùng “sắp” cho cả việc ngay trước mắt lẫn việc tuần sau. About to chỉ dành cho việc ngay tức khắc; việc theo lịch dùng due to, kế hoạch chính thức dùng be to."),
      ex("Scientists believe they are on the brink of a major breakthrough in malaria treatment.", "Các nhà khoa học tin rằng họ sắp có một bước đột phá lớn trong điều trị sốt rét.", "Brink thường gắn với điều nguy hiểm (on the brink of collapse, war, extinction), nhưng cũng dùng cho một khoảnh khắc kịch tính tích cực: on the brink of a breakthrough, of victory. Verge trung tính hơn: on the verge of tears, of signing a deal."),
      mistake("The factory is on the verge to close.", "The factory is on the verge of closing.", "Of là giới từ, nên sau nó phải là danh từ hoặc V-ing. Người Việt quen “sắp + động từ” nên hay ghép với to."),
      p("**Be set to** là dự báo dựa trên thông tin hiện có; **be poised to** nhấn mạnh mọi thứ đã sẵn sàng, chỉ chờ thời điểm. **Be to** có ba cách dùng ở C1: kế hoạch do một cơ quan quyết định (The President is to visit Hue), **chỉ thị** từ người có thẩm quyền (You are to report to reception; Staff are not to use the lift), và **điều kiện** trong If-clause: If we are to meet the deadline… nghĩa là “nếu muốn đạt được việc này thì…”."),
      ex("If the city is to reduce air pollution, it will have to restrict motorbikes in the centre.", "Nếu thành phố muốn giảm ô nhiễm không khí, thì sẽ phải hạn chế xe máy trong trung tâm.", "If + be to: điều kiện cần cho một mục tiêu. Không dịch là “nếu thành phố sẽ giảm”."),
      p("Cuối cùng là **tương lai nhìn từ quá khứ**: kể lại điều mà lúc đó còn ở phía trước. **Was / were to + V** nói về số phận đã xảy ra (He was to become president ten years later). **Was / were to have + V3** nói về kế hoạch **không thành** (We were to have signed the deal in May, but…). **Was due to / was supposed to** là lịch đã định, thường kèm ý không đúng lịch."),
      table(
        ["Cấu trúc", "Việc có xảy ra không?", "Ví dụ"],
        ["was to + V", "có, và người kể biết trước kết cục", "She was to become the first woman to run the company."],
        ["was to have + V3", "không, kế hoạch bị hủy hoặc hoãn", "The bridge was to have opened in 2024."],
        ["was about to / on the point of… when", "không, bị việc khác cắt ngang", "I was about to leave when the phone rang."],
        ["was due to / was supposed to", "lịch đã định, thường là không đúng lịch", "The train was due to arrive at six, but it was late."],
      ),
      ex("Nobody at the launch party could have guessed that the app was to change the way millions of people paid for their coffee.", "Không ai trong buổi tiệc ra mắt có thể đoán rằng ứng dụng ấy rồi sẽ thay đổi cách hàng triệu người trả tiền cà phê.", "Was to + V: người kể nhìn lại và biết điều đó đã xảy ra. Rất hay gặp trong tiểu sử và bài báo kể chuyện."),
      mistake("We were to have launched the app in May, and it was a great success.", "We launched the app in May, and it was a great success.", "Was to have + V3 luôn hàm ý kế hoạch không thành. Người Việt hay nghĩ “have + V3” chỉ là “đã”, nên dùng cho cả việc đã xảy ra. Nếu việc diễn ra đúng kế hoạch, chỉ cần quá khứ đơn hoặc was to + V."),
      tip("Ba câu hỏi để chọn đúng: **Bao giờ?** (ngay tức khắc: about to, on the point of; theo lịch: due to) → **Ai quyết định?** (cơ quan, sếp: be to; báo chí dự báo: set to, poised to) → **Có thành không?** (kể lại quá khứ: was to + V là có, was to have + V3 là không). Riêng **bound to** chỉ trả lời câu hỏi “chắc đến mức nào?”."),
      teacher("Khi đứng lớp, tôi thấy cấu trúc bị bỏ quên nhiều nhất là **be to**. Học trò đọc The President is to visit Vietnam rồi dịch “Tổng thống là để thăm Việt Nam”; gặp You are to wait here thì tưởng là lời mời. Cách luyện của tôi: mỗi sáng đọc năm tiêu đề trên BBC hoặc Reuters, gạch chân mọi chữ **set to**, **poised to**, **to + động từ** ngay sau danh từ (tiêu đề bỏ be: Minister to resign), rồi tự dịch theo giọng bản tin thời sự. Khi đọc tiểu sử, săn thêm **was to** và **was to have**. Một tháng thôi, các bạn sẽ nghe ra cả những điều người viết không nói thẳng."),
      summary(
        "**About to / on the point of**: ngay tức khắc, không kèm mốc thời gian xa. **Was about to / on the point of… when**: vừa định… thì…",
        "**On the verge / brink of** + danh từ hoặc V-ing, không đi với to; brink nghiêng về khoảnh khắc kịch tính, thường là nguy hiểm, nhưng cũng có on the brink of a breakthrough.",
        "**Set to**: báo chí dự báo; **poised to**: đã sẵn sàng; **be to**: kế hoạch chính thức, chỉ thị (You are not to…), điều kiện (If we are to…).",
        "**Was to + V**: điều đã xảy ra về sau; **was to have + V3**: kế hoạch không thành.",
        "**Bound to** nói về độ chắc chắn của người nói. Mọi cấu trúc cần be chia đúng; chỉ tiêu đề báo được bỏ be.",
      ),
    ],
  },
  words: [
    word("imminent", "/ˈɪm.ɪ.nənt/", "sắp xảy ra, cận kề", "Forecasters warned that a typhoon was imminent.", "im|mi|nent", 0),
    word("impending", "/ɪmˈpen.dɪŋ/", "sắp ập đến (thường là điều xấu)", "Nobody on the board seemed aware of the impending crisis.", "im|pend|ing", 1, "Trọng âm ở âm giữa: im-PEN-ding; bật rõ âm cuối /ŋ/, không đọc thành “in”."),
    word("poised", "/pɔɪzd/", "ở thế sẵn sàng (be poised to: sắp, đã sẵn sàng để)", "The company is poised to become the market leader.", "poised", 0, "Đuôi -sed đọc /zd/: /pɔɪzd/, một âm tiết."),
    word("verge", "/vɜːdʒ/", "bờ, ranh giới (be on the verge of: sắp)", "She was on the verge of tears.", "verge", 0, "Âm cuối /dʒ/ phải bật ra rõ, đừng nuốt thành “vơ”."),
    word("brink", "/brɪŋk/", "bờ vực (khoảnh khắc ngay trước một biến cố lớn)", "The company was on the brink of bankruptcy.", "brink", 0),
    word("forthcoming", "/ˌfɔːθˈkʌm.ɪŋ/", "sắp tới, sắp diễn ra", "Details will be announced at the forthcoming conference.", "forth|com|ing", 1),
    word("unveil", "/ʌnˈveɪl/", "công bố, ra mắt", "The firm is set to unveil its new model next week.", "un|veil", 1),
    word("tentative", "/ˈten.tə.tɪv/", "tạm thời, dự kiến (chưa chốt)", "We have set a tentative date for the launch.", "ten|ta|tive", 0, "Trọng âm ở âm đầu: TEN-ta-tive; đuôi -tive đọc nhẹ /tɪv/, nhớ bật âm cuối /v/."),
  ],
  exercises: [
    mc("c1-n03-1", "The Prime Minister ___ visit Japan next month, the government announced this morning.", ["is about to", "is to", "is bound to", "is on the point of"], 1, "Kế hoạch chính thức do chính phủ công bố: be to + V. About to và on the point of chỉ việc ngay tức khắc, không đi với next month (on the point of còn phải + V-ing). Bound to là niềm tin của người nói, không phải thông báo."),
    mc("c1-n03-2", "We were to have launched the app in May, ___", ["and it was a great success.", "so the launch went ahead in May.", "but the launch was postponed until the autumn.", "which is why it came out on time."], 2, "Was to have + V3 luôn hàm ý kế hoạch không thành, nên vế sau phải nói việc đó không diễn ra đúng dự định."),
    fill("c1-n03-3", "After weeks of heavy rain, the river is on the ___ of flooding.", ["verge", "brink", "point"], "On the verge of, on the brink of hoặc on the point of + V-ing: sắp xảy ra. Brink nhấn mạnh tính nguy hiểm, hợp với lũ lụt."),
    fill("c1-n03-4", "If we ___ to meet the deadline, we will need two more developers. (be)", ["are"], "If + be to + V: “nếu muốn đạt được điều này thì…”. Không dùng will trong mệnh đề if, và không viết If we want to be."),
    fill("c1-n03-5", "I ___ to call you when your message arrived. (vừa định… thì)", ["was about", "was just about"], "Was (just) about to + V… when: vừa định làm gì thì có việc khác xen vào. Việc gọi điện chưa xảy ra."),
    fill("c1-n03-6", "The new terminal ___ to have opened in 2024, but construction is still going on. (theo kế hoạch)", ["was", "was due", "was supposed", "was meant", "was scheduled", "was expected"], "Was (due / supposed) to have + V3: đáng lẽ đã… nhưng không thành. Vế but construction is still going on xác nhận kế hoạch bị trễ."),
    reorder("c1-n03-7", "The two countries are on the brink of war.", "On the brink of + danh từ: bên bờ vực. Brink rất hay đi với war, collapse, extinction."),
    reorder("c1-n03-8", "She was on the point of resigning.", "Be on the point of + V-ing: sắp sửa ngay tức khắc, trang trọng hơn be about to."),
    reorder("c1-n03-9", "Interest rates are poised to fall.", "Be poised to + V: đã ở thế sẵn sàng, sắp xảy ra. Văn phong báo chí kinh tế."),
    listen("c1-n03-10", "You are to report to reception at eight o'clock sharp.", ["Bạn được mời ghé quầy lễ tân lúc tám giờ nếu tiện.", "Bạn đã báo cáo với lễ tân lúc tám giờ đúng.", "Bạn phải có mặt ở quầy lễ tân đúng tám giờ: đây là chỉ thị."], 2, "You are to + V là một chỉ thị từ người có thẩm quyền, mạnh gần như must, không phải lời mời."),
    listen("c1-n03-11", "She was to have retired last year, but the board persuaded her to stay.", ["Đáng lẽ bà ấy nghỉ hưu từ năm ngoái, nhưng hội đồng quản trị đã thuyết phục bà ở lại.", "Bà ấy đã nghỉ hưu năm ngoái đúng như kế hoạch.", "Hội đồng quản trị buộc bà ấy nghỉ hưu năm ngoái.", "Bà ấy muốn ở lại nhưng hội đồng quản trị bắt bà nghỉ hưu."], 0, "Was to have retired: kế hoạch nghỉ hưu không thành. Persuaded her to stay: thuyết phục bà ở lại."),
    correct("c1-n03-12", "The two companies are on the verge to reach an agreement.", ["The two companies are on the verge of reaching an agreement.", "The two companies are on the verge of an agreement.", "The two companies are on the brink of reaching an agreement.", "The two companies are on the brink of an agreement.", "The two companies are on the point of reaching an agreement."], "Of là giới từ, nên sau on the verge of là V-ing hoặc danh từ: of reaching an agreement, hoặc gọn hơn là of an agreement. Brink cũng chấp nhận được khi muốn nhấn mạnh khoảnh khắc kịch tính."),
    correct("c1-n03-13", "The new bridge is about to open next year.", ["The new bridge is due to open next year.", "The new bridge is set to open next year.", "The new bridge is to open next year.", "The new bridge is expected to open next year.", "The new bridge is scheduled to open next year.", "The new bridge is going to open next year.", "The new bridge will open next year.", "The new bridge is poised to open next year."], "About to chỉ việc xảy ra ngay tức khắc, không đi với mốc thời gian xa như next year. Việc theo lịch dùng be due to; tin tức hoặc kế hoạch chính thức dùng be set to, be to."),
    correct("c1-n03-14", "Passengers are to not leave their luggage unattended.", ["Passengers are not to leave their luggage unattended."], "Chỉ thị phủ định với be to: be + not + to V (are not to leave). Not đứng trước to, giống như warn somebody not to do something."),
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
