import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "viet-luan-va-tom-tat",
  title: "Viết luận và tóm tắt",
  minutes: 35,
  lecture: {
    title: "Diễn đạt lại, tóm tắt và bố cục bài luận",
    blocks: [
      p("Trong IELTS Writing, giám khảo trừ điểm khi bạn chép lại nguyên câu đề bài. Ở trường đại học nước ngoài, chép nguyên câu của người khác mà không ghi nguồn bị coi là **đạo văn** (plagiarism), có thể bị đánh trượt cả môn. Còn ở công ty, sếp cần bạn **tóm tắt** một báo cáo hai mươi trang thành vài dòng. Cả ba tình huống đều đòi hỏi một kỹ năng: nói lại ý của người khác **bằng lời của mình**."),
      p("Có ba kỹ thuật **diễn đạt lại** (paraphrase): **đổi từ đồng nghĩa**, **đổi từ loại** (động từ thành danh từ, tính từ thành trạng từ…) và **đổi cấu trúc câu** (chủ động sang bị động, mệnh đề sang cụm danh từ). Một câu diễn đạt lại tốt thường kết hợp **ít nhất hai** kỹ thuật, và phải giữ **nguyên ý** của câu gốc."),
      table(
        ["Kỹ thuật", "Câu gốc", "Câu diễn đạt lại"],
        ["Từ đồng nghĩa", "Many people are worried about rising house prices.", "A large number of people are concerned about increasing property prices."],
        ["Đổi từ loại", "The population grew rapidly.", "There was rapid growth in the population."],
        ["Chủ động sang bị động", "The government should fund public transport.", "Public transport should be funded by the government."],
        ["Mệnh đề sang cụm danh từ", "Because it rained heavily, the match was cancelled.", "Heavy rain led to the cancellation of the match."],
      ),
      ex("Daily reading is associated with better academic performance among children.", "Việc đọc sách hằng ngày gắn liền với kết quả học tập tốt hơn ở trẻ em.", "Câu gốc: Children who read every day tend to do better at school. Đã đổi từ loại (read thành reading), đổi từ (do better at school thành academic performance) và đổi cấu trúc câu."),
      mistake("The government should grab powerful measures.", "The government should take firm action.", "Tra từ điển Anh-Việt rồi thay từ đồng nghĩa một cách máy móc sẽ phá vỡ kết hợp từ. Tiếng Anh nói take action, take measures; không ai nói grab measures."),
      mistake("Scientists have proved that coffee is harmful.", "Some researchers believe that coffee may have negative effects on health.", "Câu gốc là Some scientists believe coffee may be harmful. Khi diễn đạt lại, người Việt hay “chốt” ý cho mạnh, biến có thể thành đã chứng minh. Paraphrase phải giữ đúng mức độ chắc chắn và phạm vi (some, may) của câu gốc."),
      p("**Tóm tắt** (summarise) khác diễn đạt lại ở chỗ bạn phải **rút ngắn**. Các bước: đọc hết đoạn gốc, gạch chân **ý chính**, bỏ ví dụ, số liệu phụ và chi tiết lặp lại, rồi viết lại bằng lời của mình, dài khoảng **một phần ba** bản gốc. Bản tóm tắt **không thêm ý kiến cá nhân**. Cụm mở đầu hay dùng: **The article argues that…**, **According to the author,…**, **The report concludes that…**"),
      ex("The author argues that remote work improves productivity but may weaken team relationships.", "Tác giả lập luận rằng làm việc từ xa giúp tăng năng suất nhưng có thể làm suy giảm quan hệ trong nhóm.", "Một bài báo dài được tóm trong một câu: động từ tường thuật, ý chính, và ý phụ quan trọng nhất."),
      p("Một bài luận chuẩn có ba phần. **Mở bài**: giới thiệu bối cảnh và nêu **thesis statement** (câu luận điểm, lập trường của cả bài). **Thân bài**: mỗi đoạn một ý, mở đầu bằng **topic sentence** (câu chủ đề), sau đó giải thích và đưa ví dụ. **Kết bài**: nhắc lại luận điểm **bằng từ khác** và tóm lại các ý chính."),
      table(
        ["Thành phần", "Chức năng", "Câu mẫu"],
        ["Thesis statement", "Nêu lập trường của cả bài", "This essay argues that cities should invest more in public transport."],
        ["Topic sentence", "Nêu ý chính của một đoạn thân bài", "The main advantage of public transport is that it reduces congestion."],
        ["Conclusion", "Khẳng định lại lập trường, tóm các ý", "In conclusion, public transport deserves greater investment because it benefits both people and the environment."],
      ),
      ex("One major drawback of fast fashion is the damage it causes to the environment.", "Một nhược điểm lớn của thời trang nhanh là tác hại nó gây ra cho môi trường.", "Topic sentence tốt nêu rõ ý chính và đủ cụ thể để người đọc đoán được cả đoạn sẽ nói về điều gì."),
      mistake("In conclusion, public transport is good. Another benefit is that it creates jobs.", "In conclusion, public transport reduces congestion and pollution, so it deserves greater investment.", "Văn nghị luận tiếng Việt quen “mở rộng vấn đề” ở kết bài, nên nhiều bạn đưa thêm ý mới vào đoạn cuối. Bài luận tiếng Anh không làm vậy: kết bài chỉ khẳng định lại và tóm tắt, không thêm lập luận mới."),
      p("Bài luận C1 còn phải **liền mạch** giữa các câu (cohesion). Ngoài từ nối đã học ở B2, hãy dùng **this / these + danh từ tóm ý** để gói cả câu trước thành một chủ ngữ mới: House prices rose by thirty per cent last year. **This increase** has pushed many young families out of the city. Kết hợp với phép thay thế (do so, one) của bài Nói gọn mà không mất ý và danh từ hóa của bài Văn phong học thuật, bài viết sẽ vừa chặt vừa không lặp từ."),
      p("Để **tránh đạo văn**: khi giữ nguyên câu chữ của tác giả, đặt trong **ngoặc kép** và ghi nguồn; khi diễn đạt lại, vẫn phải **ghi nguồn** (According to Smith…). Chỉ đổi vài từ mà giữ nguyên khung câu gốc (người ta gọi là **patchwriting**) vẫn bị coi là đạo văn."),
      tip("Mẹo **gập sách**: đọc đoạn gốc hai lần, rồi gập sách hoặc tắt màn hình, viết lại theo trí nhớ. Sau đó mở ra so sánh. Nếu thấy một chuỗi **ba bốn từ liền nhau** giống hệt bản gốc (trừ thuật ngữ chuyên môn), hãy viết lại chỗ đó."),
      teacher("Khi chấm bài luận, tôi thấy người Việt không thiếu ý, mà thiếu **thói quen viết lại**. Mỗi tuần, các bạn chọn một bài báo tiếng Anh ngắn, tóm nó trong **đúng ba câu**: một câu nêu ý chính, hai câu nêu hai ý phụ. Rồi viết lại câu tiêu đề theo **hai cách khác nhau**. Tự kiểm tra bằng câu hỏi: “Nếu tác giả đọc bản của mình, họ có thấy ý mình bị bóp méo không?”. Viết đủ mười tuần, các bạn sẽ thấy bài luận của mình gọn và chắc hơn rất nhiều."),
      summary(
        "Diễn đạt lại bằng cách kết hợp **ít nhất hai** kỹ thuật (từ đồng nghĩa, đổi từ loại, đổi cấu trúc câu) và giữ nguyên ý, nguyên mức độ chắc chắn của câu gốc.",
        "Thay từ đồng nghĩa phải giữ đúng **kết hợp từ**: take action, take measures; không có grab measures.",
        "Bản tóm tắt dài khoảng **một phần ba** bản gốc, bỏ ví dụ và số liệu phụ, **không thêm ý kiến cá nhân**.",
        "Bố cục: mở bài có **thesis statement**, mỗi đoạn thân bài có một **topic sentence**, kết bài **không thêm ý mới**.",
        "Tránh đạo văn: giữ nguyên câu chữ thì dùng ngoặc kép và ghi nguồn; diễn đạt lại vẫn phải ghi nguồn.",
      ),
    ],
  },
  words: [
    word("paraphrase", "/ˈpær.ə.freɪz/", "diễn đạt lại (bằng lời của mình)", "Try to paraphrase the question in your introduction.", "par|a|phrase", 0, "Trọng âm ở âm đầu: PAR-a-phrase; ph đọc là /f/."),
    word("condense", "/kənˈdens/", "rút gọn, cô đọng", "Try to condense the twenty-page report into a single paragraph.", "con|dense", 1, "Trọng âm ở âm sau: con-DENSE; đọc rõ âm cuối /s/."),
    word("plagiarise", "/ˈpleɪ.dʒər.aɪz/", "đạo văn", "Students who plagiarise may fail the course.", "pla|gia|rise", 0, "Chữ g đọc là /dʒ/: PLAY-jer-ize. Danh từ là plagiarism."),
    word("thesis", "/ˈθiː.sɪs/", "luận điểm; luận văn", "Your thesis should be clear from the first paragraph.", "the|sis", 0, "Âm /θ/ đặt lưỡi giữa hai hàm răng, không đọc “thi-sít”. Số nhiều là theses."),
    word("cohesive", "/kəʊˈhiː.sɪv/", "gắn kết, liền mạch (giữa các câu, các đoạn)", "A cohesive essay uses reference words such as this increase to link its sentences.", "co|he|sive", 1, "Danh từ là cohesion /kəʊˈhiː.ʒən/, chính là “sự liền mạch” trong bài giảng."),
    word("outline", "/ˈaʊt.laɪn/", "dàn ý; phác thảo", "Write a brief outline before you start your essay.", "out|line", 0, "Danh từ và động từ đều nhấn âm đầu: OUT-line."),
    word("synonym", "/ˈsɪn.ə.nɪm/", "từ đồng nghĩa", "Increase is a useful synonym for rise.", "syn|o|nym", 0),
    word("cite", "/saɪt/", "trích dẫn, dẫn nguồn", "Always cite your sources in academic writing.", "cite", 0, "Đọc giống hệt site và sight: /saɪt/."),
  ],
  exercises: [
    mc("c1-n16-1", "Câu nào diễn đạt lại tốt nhất: Many young people cannot afford to buy a house.", ["Many young people cannot afford to buy a home.", "A large number of young adults are unable to purchase property.", "Young people do not want to buy houses.", "All young people are too poor to buy a house."], 1, "Đổi từ và cấu trúc nhưng giữ nguyên ý. Phương án A chỉ đổi một từ; C đổi nghĩa; D phóng đại thành all."),
    fill("c1-n16-2", "The economy grew slowly. → There was slow economic ___.", ["growth"], "Đổi từ loại: động từ grow thành danh từ growth, trạng từ slowly thành tính từ slow."),
    mc("c1-n16-3", "Câu nào phù hợp nhất để làm thesis statement?", ["Technology is a very interesting topic.", "In this essay, I will talk about some things.", "Some people like social media and some do not.", "This essay argues that social media does more harm than good to teenagers."], 3, "Thesis statement phải nêu rõ lập trường có thể tranh luận được. Các câu còn lại quá chung chung."),
    fill("c1-n16-4", "If you use someone else's exact words, you must ___ the source. (trích dẫn, ghi nguồn)", ["cite", "acknowledge", "credit", "reference"], "Cite the source: ghi nguồn. Đồng thời phải đặt câu trích trong ngoặc kép."),
    reorder("c1-n16-5", "The article argues that tourism harms local communities.", "Cụm mở đầu bản tóm tắt: The article argues that + mệnh đề."),
    reorder("c1-n16-6", "Each paragraph should begin with a topic sentence.", "Mỗi đoạn thân bài mở đầu bằng một câu chủ đề nêu ý chính."),
    listen("c1-n16-7", "In summary, the report finds that online learning works best when combined with classroom teaching.", ["Báo cáo kết luận rằng học trực tuyến nên thay thế hoàn toàn học trên lớp.", "Báo cáo cho thấy học trên lớp không còn hiệu quả.", "Tóm lại, báo cáo cho thấy học trực tuyến hiệu quả nhất khi kết hợp với dạy trên lớp."], 2, "In summary: tóm lại. Combined with: kết hợp với."),
    listen("c1-n16-8", "Rents rose sharply last year. This increase has hit young families hardest.", ["Tiền thuê nhà tăng mạnh năm ngoái, và mức tăng này ảnh hưởng nặng nhất đến các gia đình trẻ.", "Tiền thuê nhà tăng mạnh nên các gia đình trẻ chuyển về quê.", "Các gia đình trẻ đã làm tiền thuê nhà tăng mạnh.", "Tiền thuê nhà năm nay sẽ tăng mạnh hơn năm ngoái."], 0, "This increase là danh từ tóm ý, gói lại cả câu trước (tiền thuê nhà tăng mạnh) để câu sau nối liền mạch mà không lặp lại."),
    correct("c1-n16-9", "The government should make actions to reduce air pollution.", ["The government should take action to reduce air pollution.", "The government should take steps to reduce air pollution.", "The government should take measures to reduce air pollution."], "Kết hợp từ cố định: take action, take steps, take measures. Không nói make actions dù tiếng Việt là “đưa ra hành động”."),
    correct("c1-n16-10", "According to the author's opinion, cities should ban private cars.", ["According to the author, cities should ban private cars.", "In the author's opinion, cities should ban private cars.", "In the author's view, cities should ban private cars."], "Dịch từng chữ “theo ý kiến của tác giả” sinh ra According to the author's opinion. Tiếng Anh nói According to the author hoặc In the author's opinion, không ghép hai cụm với nhau."),
  ],
  speaking: [
    say("This essay argues that cities should invest more in public transport.", "Bài luận này lập luận rằng các thành phố nên đầu tư nhiều hơn vào giao thông công cộng."),
    say("In other words, the problem is not money but time.", "Nói cách khác, vấn đề không phải là tiền mà là thời gian."),
    say("According to the author, reading every day improves concentration.", "Theo tác giả, đọc sách mỗi ngày giúp cải thiện khả năng tập trung."),
  ],
  freeSpeaking: free(
    "Summarise an article, a video or a book you have come across recently, and then give your own opinion of it.",
    "Tóm tắt ý chính của một bài báo, video hoặc cuốn sách gần đây bằng lời của bạn (The article argues that..., According to the author...), rồi mới nêu ý kiến cá nhân. Tách rõ hai phần: phần tóm tắt không có ý kiến riêng.",
    "Last week I read an article in an English newspaper about overtourism in historic towns. The author argues that tourism brings valuable jobs and income, but that the sheer number of visitors is gradually pushing local residents out of places like Venice and Hoi An. According to the article, some cities have responded with entry fees and limits on short-term rentals, although it is too early to say whether these measures work. Personally, I agree with the main argument. My aunt lives in Hoi An, and several of her neighbours have moved away because the rents have become impossible.",
  ),
  dialogue: dialogue(
    "Buổi góp ý bài luận với giảng viên",
    "Nam, học viên cao học người Việt tại một trường đại học ở Anh, gặp giảng viên hướng dẫn là tiến sĩ Evans để nhận góp ý cho bản nháp bài luận đầu tiên.",
    { A: "Tiến sĩ Evans, giảng viên", B: "Nam, học viên cao học" },
    A("Nam, I've read your draft. Your ideas are strong, but your introduction copies the question almost word for word.", "Nam, tôi đã đọc bản nháp của em. Ý tưởng rất tốt, nhưng mở bài gần như chép lại nguyên văn đề bài."),
    B("I see. How should I paraphrase it?", "Em hiểu rồi. Em nên diễn đạt lại thế nào ạ?"),
    A("Combine techniques: change the words and, ideally, the structure too. The question says: cities are growing rapidly. What could you write?", "Hãy kết hợp các kỹ thuật: đổi từ, và tốt nhất là đổi cả cấu trúc câu. Đề bài viết: các thành phố đang phát triển nhanh. Em có thể viết thế nào?"),
    B("Perhaps: urban areas are experiencing rapid growth.", "Có lẽ là: các khu vực đô thị đang tăng trưởng nhanh chóng."),
    A("Much better. You've changed the words, the word class and the structure. Now, where's your thesis statement?", "Tốt hơn nhiều. Em đã đổi từ, từ loại và cấu trúc. Giờ thì câu luận điểm của em nằm ở đâu?"),
    B("I think it's at the end of the second paragraph.", "Em nghĩ nó ở cuối đoạn thứ hai ạ."),
    A("Move it to the introduction. The reader should know your position from the very start.", "Hãy chuyển nó lên mở bài. Người đọc cần biết lập trường của em ngay từ đầu."),
    B("Understood. What about my summary of the Smith article? Is it too long?", "Em hiểu rồi. Còn phần tóm tắt bài báo của Smith thì sao ạ? Có quá dài không?"),
    A("It's almost as long as the original. Keep the main argument, drop the examples, and aim for about a third of the length.", "Nó dài gần bằng bản gốc. Giữ lập luận chính, bỏ các ví dụ, và cố gắng rút xuống khoảng một phần ba."),
    B("And I shouldn't add my own opinion there, should I?", "Và em không nên đưa ý kiến riêng vào phần đó, đúng không ạ?"),
    A("Exactly. Save your views for the body paragraphs. One more thing: your conclusion introduces a new argument.", "Chính xác. Để dành quan điểm của em cho phần thân bài. Còn một điều nữa: kết bài của em lại đưa ra một lập luận mới."),
    B("So the conclusion should only restate my thesis and summarise the main points. I'll revise it tonight.", "Vậy kết bài chỉ nên khẳng định lại luận điểm và tóm tắt các ý chính. Tối nay em sẽ sửa lại ạ."),
  ),
  dialogueQuestions: [
    listenQ("c1-n16-d1", "What is Dr Evans's first criticism of Nam's draft?", "Nam, I've read your draft. Your ideas are strong, but your introduction copies the question almost word for word.", ["His ideas are weak.", "His introduction repeats the question almost exactly.", "His essay is far too short.", "He uses too many statistics."], 1, "Your introduction copies the question almost word for word: mở bài gần như chép nguyên văn đề bài."),
    mc("c1-n16-d2", "Where does Dr Evans tell Nam to put his thesis statement?", ["In the conclusion", "At the end of the second paragraph", "In the introduction", "In a separate summary"], 2, "Move it to the introduction. The reader should know your position from the very start."),
    mc("c1-n16-d3", "What advice does Dr Evans give about Nam's summary of the Smith article?", ["Keep the main argument, drop the examples and cut it to about a third of the length.", "Add more of his own opinions to it.", "Quote the article word for word.", "Remove it from the essay completely."], 0, "Keep the main argument, drop the examples, and aim for about a third of the length."),
  ],
  reading: reading({
    title: "When tourists outnumber residents",
    text: `Hoi An's old town was once a quiet trading port where families lived above their shops. Today, on a busy evening, it can be difficult to walk along its narrow streets at all. Visitors float lanterns on the river, queue for photographs outside the Japanese Covered Bridge and fill every café and tailor's shop. An area with roughly a hundred thousand residents now welcomes millions of visitors a year. It is not alone. From Venice to Kyoto, places that were once celebrated as hidden treasures are struggling with what has come to be called overtourism.

The economic case for tourism is undeniable. In many destinations, visitors provide the main source of income, supporting not only hotels and restaurants but also farmers, craftspeople and transport workers. For a developing region, few industries create jobs so quickly or bring in foreign currency so reliably. It is hardly surprising, then, that local governments have often measured success simply by the number of arrivals.

Yet that number conceals a growing list of costs. As property owners discover that they can earn more from tourists than from residents, rents rise and long-established families move away, taking with them the everyday life that attracted visitors in the first place. Traffic, noise and waste increase, while fragile historic buildings suffer from the sheer volume of people. Perhaps most seriously, residents begin to feel like strangers in their own town. Surveys in several European cities have found that a majority of locals believe tourism has made their neighbourhoods worse places to live, even when they acknowledge its economic benefits.

Governments have responded in different ways. Some have introduced daily visitor limits or entry fees for historic centres; others have restricted short-term rentals or banned large coach parties from certain streets. Such measures are often unpopular with businesses, and their long-term effects are not yet clear. What does seem clear is that simply promoting a destination more aggressively is no longer a sustainable strategy.

The deeper question is who tourism is for. If a historic town becomes a stage set, carefully preserved but emptied of the people who gave it its character, both residents and visitors lose something important. The challenge for the coming decade is therefore not to stop tourism, which would be neither possible nor desirable, but to manage it in a way that allows communities to remain communities. This will require difficult choices, and it may mean welcoming fewer visitors who stay longer and spend more, rather than ever-larger crowds who pass through in a single afternoon.`,
    glossary: [
      ["outnumber", "đông hơn về số lượng"],
      ["undeniable", "không thể phủ nhận"],
      ["conceal", "che giấu"],
      ["fragile", "dễ hư hại, mong manh"],
      ["short-term rental", "nhà cho khách thuê ngắn ngày"],
      ["coach party", "đoàn khách đi xe du lịch"],
      ["sustainable", "bền vững"],
      ["stage set", "cảnh dựng trên sân khấu"],
    ],
    questions: [
      mc("c1-n16-r1", "Which sentence best summarises the whole article?", ["Tourism brings economic benefits, but it must be managed carefully so that local communities can survive.", "Tourism should be banned in historic towns.", "Hoi An is now more crowded than Venice.", "Entry fees are the best solution to overtourism."], 0, "Bản tóm tắt tốt nêu cả hai mặt (lợi ích kinh tế và cái giá phải trả) và kết luận của tác giả (quản lý chứ không cấm), không chứa chi tiết phụ."),
      mc("c1-n16-r2", "Which is the best paraphrase of paragraph 2?", ["Tourism is harmful to developing regions.", "Local governments dislike tourists.", "Because tourism creates jobs and income quickly, governments have tended to focus on visitor numbers.", "Farmers earn more from tourism than hotel owners do."], 2, "Đây là câu diễn đạt lại đúng ý đoạn hai bằng lời khác: đổi từ (create jobs, income), đổi cấu trúc (Because..., have tended to focus on)."),
      mc("c1-n16-r3", "According to the article, why do long-established families move away?", ["The government forces them to leave.", "They prefer to open shops elsewhere.", "They dislike the noise of the lantern festival.", "Rents rise because owners can earn more by renting to tourists."], 3, "As property owners discover that they can earn more from tourists than from residents, rents rise and long-established families move away."),
      mc("c1-n16-r4", "What does the writer mean by saying a historic town could become “a stage set”?", ["It would host more theatre performances.", "It would look authentic but lose the community life that gave it character.", "It would be rebuilt in a modern style.", "It would be closed to visitors."], 1, "Stage set: cảnh dựng trên sân khấu, đẹp nhưng không có người thật sống bên trong (emptied of the people who gave it its character)."),
      mc("c1-n16-r5", "What is the writer's position on stopping tourism altogether?", ["It is the only realistic solution.", "It should be tried in Hoi An first.", "It is neither possible nor desirable.", "The writer does not give a view."], 2, "Not to stop tourism, which would be neither possible nor desirable."),
      fill("c1-n16-r6", "Paraphrase: “The economic case for tourism is undeniable” = Nobody can ___ that tourism brings economic benefits.", ["deny", "dispute", "question"], "Đổi từ loại: tính từ undeniable thành động từ deny. Đây chính là kỹ thuật diễn đạt lại của bài."),
    ],
  }),
  task: task({
    prompt: "Viết một bài luận hoàn chỉnh (khoảng 250–300 từ) cho đề IELTS Writing Task 2: Some people believe that working from home is better for employees than working in an office. To what extent do you agree? Bài phải có mở bài diễn đạt lại đề và nêu thesis statement, hai đoạn thân bài có topic sentence, và kết bài khẳng định lại lập trường mà không thêm ý mới.",
    hints: [
      "Câu đầu mở bài diễn đạt lại đề bằng ít nhất hai kỹ thuật: đổi từ, đổi từ loại, đổi cấu trúc. Câu cuối mở bài là thesis statement.",
      "Thân bài một: nhượng bộ, nêu lợi ích của làm việc ở nhà (Admittedly...). Thân bài hai: nêu hạn chế chính, có số liệu và ghi nguồn.",
      "Dùng this hoặc these + danh từ (this time, these advantages, this sense of isolation) để nối các câu.",
      "Kết bài bắt đầu bằng In conclusion, nhắc lại lập trường bằng từ khác và tóm tắt hai ý chính.",
    ],
    model: "In recent years, a growing number of companies have allowed their staff to work remotely, a trend that accelerated sharply during the pandemic. While some argue that this arrangement benefits employees more than traditional office work, this essay argues that its advantages are real but often exaggerated, and that a hybrid model is the most effective option.\n\nAdmittedly, working from home offers employees considerable benefits. The most obvious is the time saved on commuting, which in large cities such as Hanoi or Bangkok can amount to two hours a day. This time can be spent with family, on exercise or simply on rest, all of which contribute to employees' well-being. Many people also find that they can concentrate better at home, away from the noise and interruptions of an open-plan office. These advantages explain why remote work has become so popular, particularly among parents of young children.\n\nHowever, the main weakness of full-time remote work is the damage it can do to relationships within a team. Many people who work entirely from home say that they feel isolated from their colleagues. This sense of isolation matters because informal conversations, such as a quick chat after a meeting, are often where problems are solved and trust is built. Video calls can replace formal meetings, but they rarely create these spontaneous moments. Younger employees, who learn a great deal by observing experienced colleagues, may be the ones who lose out most.\n\nIn conclusion, although remote work saves time and can improve concentration, it tends to weaken the personal connections on which effective teamwork depends. For this reason, employees are likely to benefit most from a balanced arrangement in which they divide their week between home and the workplace.",
    checklist: [
      "Câu mở bài diễn đạt lại đề bài, không có chuỗi ba bốn từ liền nhau chép từ đề.",
      "Cuối mở bài có thesis statement nêu rõ lập trường.",
      "Mỗi đoạn thân bài mở đầu bằng một topic sentence rõ ràng và chỉ phát triển một ý chính.",
      "Có ít nhất hai cụm this hoặc these + danh từ tóm ý để nối câu.",
      "Số liệu hay ý của người khác đều có ghi nguồn (According to...).",
      "Kết bài khẳng định lại lập trường bằng từ khác và không đưa thêm lập luận mới.",
    ],
    minWords: 250,
  }),
});
