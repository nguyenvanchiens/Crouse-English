import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "cau-hoi-gian-tiep",
  title: "Hỏi một cách lịch sự",
  minutes: 30,
  lecture: {
    title: "Câu hỏi gián tiếp: Could you tell me…, Do you know if…",
    blocks: [
      p("Bạn đứng ở ga tàu, hỏi một người lạ: “Where is the toilet?” Câu đúng ngữ pháp, nhưng nghe khá cộc, giống như ra lệnh. Người bản xứ khi hỏi người lạ, khách hàng hay cấp trên thường **bọc câu hỏi** trong một cụm mở đầu lịch sự: “Could you tell me where the toilet is?” Đó gọi là **câu hỏi gián tiếp**."),
      table(
        ["Cụm mở đầu", "Mức độ", "Ví dụ"],
        ["Could you tell me…?", "lịch sự, dùng nhiều nhất", "Could you tell me where the lift is?"],
        ["Do you know…?", "thân thiện, tự nhiên", "Do you know what time it is?"],
        ["Would you mind telling me…?", "rất lịch sự, trang trọng", "Would you mind telling me how old you are?"],
        ["I wonder… / I was wondering…", "hỏi khéo, như nói một mình", "I wonder why the bus is late."],
      ),
      p("Quy tắc vàng: sau cụm mở đầu, phần câu hỏi **trở về trật tự câu kể**: chủ ngữ đứng trước, động từ đứng sau. Trợ động từ **do / does / did** biến mất, động từ chính chia lại như câu bình thường."),
      table(
        ["Câu hỏi trực tiếp", "Câu hỏi gián tiếp"],
        ["Where is the bank?", "Could you tell me where the bank is?"],
        ["What time does the train leave?", "Do you know what time the train leaves?"],
        ["Why did she call?", "I wonder why she called."],
        ["Is the museum open today?", "Do you know if the museum is open today?"],
        ["Can I pay by card?", "Could you tell me whether I can pay by card?"],
      ),
      p("Với câu hỏi Có / Không (không có từ để hỏi như where, what, why), ta thêm **if** hoặc **whether**, nghĩa là “liệu… có… không”. Whether nghe trang trọng hơn một chút."),
      ex("Could you tell me how much this jacket costs?", "Anh có thể cho tôi biết cái áo khoác này giá bao nhiêu không?", "Câu trực tiếp là How much does this jacket cost? Khi gián tiếp, does biến mất và cost thêm -s."),
      ex("Do you know if Mr Do is in the office today?", "Chị có biết hôm nay ông Đỗ có ở văn phòng không?"),
      ex("I wonder whether they still have tickets for tonight.", "Không biết họ còn vé cho tối nay không nhỉ.", "Câu bắt đầu bằng I wonder là câu kể, nên kết thúc bằng dấu chấm, không phải dấu hỏi."),
      ex("Hello, I have a reservation under the name Nguyen. Could you tell me what time breakfast starts?", "Xin chào, tôi có đặt phòng tên Nguyễn. Anh có thể cho tôi biết mấy giờ bắt đầu bữa sáng không?", "Tình huống nhận phòng khách sạn. Câu trực tiếp là What time does breakfast start? Khi gián tiếp, bỏ does và thêm -s: starts."),
      p("Khi **kể lại** câu hỏi của người khác (He asked me where I lived), phần sau cũng theo **trật tự câu kể** giống hệt câu hỏi gián tiếp. Cách thuật lại lời nói và lùi thì được học riêng ở bài **Câu tường thuật**; hôm nay ta tập trung vào việc **tự mình hỏi** cho lịch sự."),
      mistake("Could you tell me where is the bank?", "Could you tell me where the bank is?", "Người Việt quen đảo is lên trước theo câu hỏi thường. Nhưng sau Could you tell me, phần sau là câu kể: the bank + is. Tiếng Việt không đảo trật tự khi hỏi nên ta dễ học vẹt công thức đảo rồi dùng mọi chỗ."),
      mistake("Do you know what time does the train leave?", "Do you know what time the train leaves?", "Đã có Do ở cụm mở đầu thì phần sau không được có does nữa. Bỏ does và nhớ trả lại đuôi -s cho động từ: leaves."),
      mistake("Can you tell me is the shop open?", "Can you tell me if the shop is open?", "Tiếng Việt nói “cho tôi hỏi cửa hàng có mở không” mà không cần từ nối. Tiếng Anh bắt buộc có if hoặc whether cho câu hỏi Có / Không."),
      tip("Nhìn cụm mở đầu để chọn dấu câu: **Could you tell me…? / Do you know…?** là câu hỏi, nên có dấu hỏi. **I wonder… / I'd like to know…** là câu kể, nên kết thúc bằng dấu chấm. Khi nói, hãy **lên giọng nhẹ ở cuối** câu Could you tell me… để nghe mềm mại."),
      teacher("Khi đứng lớp, tôi thấy cả những người giỏi ngữ pháp vẫn nói “Could you tell me where is…” vì miệng chạy nhanh hơn đầu. Cách chữa của tôi rất đơn giản: **nói câu kể trước trong đầu**, “the bank is”, rồi mới gắn cụm Could you tell me where vào phía trước. Mỗi ngày, các bạn lấy năm câu hỏi thường gặp, đi chợ, đi ngân hàng, hỏi đường, rồi tự đổi sang câu gián tiếp và đọc to. Một tuần là quen miệng."),
      summary(
        "Could you tell me / Do you know + từ để hỏi + chủ ngữ + động từ: Could you tell me where the bank is?",
        "Phần câu hỏi phía sau không đảo ngữ, bỏ do / does / did và chia lại động từ (leaves, called).",
        "Câu hỏi Có / Không: thêm if hoặc whether.",
        "Could you tell me…, Do you know… kết thúc bằng dấu hỏi; I wonder…, I'd like to know… kết thúc bằng dấu chấm.",
        "Mẹo chữa lỗi đảo ngữ: nói câu kể trước trong đầu (the bank is), rồi mới gắn cụm mở đầu vào phía trước.",
      ),
    ],
  },
  words: [
    word("wonder", "/ˈwʌn.də/", "tự hỏi, băn khoăn", "I wonder why she didn't come.", "won|der", 0, "Chữ o đọc là /ʌ/ như trong mother. Đừng nhầm với wander /ˈwɒn.də/ (đi lang thang)."),
    word("whether", "/ˈweð.ə/", "liệu… có… không", "I'm not sure whether the shop is open.", "wheth|er", 0, "Đọc giống hệt weather (thời tiết). Chữ h không đọc, âm th là /ð/."),
    word("enquire", "/ɪnˈkwaɪə/", "hỏi thông tin", "I'm calling to enquire whether you have a room for Friday.", "en|quire", 1, "Anh-Anh hay viết enquire, Anh-Mỹ viết inquire. Trọng âm ở âm sau: in-KWAI-ə, chữ r cuối không đọc."),
    word("reception", "/rɪˈsep.ʃən/", "quầy lễ tân", "Could you tell me where reception is?", "re|cep|tion", 1),
    word("platform", "/ˈplæt.fɔːm/", "sân ga, thềm ga", "Do you know which platform the train leaves from?", "plat|form", 0),
    word("polite", "/pəˈlaɪt/", "lịch sự", "It's more polite to ask, “Could you tell me where the toilet is?”", "po|lite", 1, "Trọng âm ở âm sau: po-LITE. Nhớ giữ âm /t/ ở cuối."),
    word("timetable", "/ˈtaɪmˌteɪ.bəl/", "lịch chạy tàu xe; thời khóa biểu", "Do you know where I can find the bus timetable?", "time|ta|ble", 0),
    word("exactly", "/ɪɡˈzækt.li/", "chính xác", "Do you know exactly when the film starts?", "ex|act|ly", 1),
  ],
  exercises: [
    mc("b1-n11-1", "Could you tell me where ___?", ["is the post office", "the post office is", "does the post office", "the post office does"], 1, "Sau Could you tell me where, phần sau theo trật tự câu kể: chủ ngữ the post office rồi mới đến is."),
    mc("b1-n11-2", "Do you know ___ the shop opens on Sundays?", ["that", "is", "if"], 2, "Câu hỏi Có / Không (cửa hàng có mở chủ nhật không) nên dùng if hoặc whether."),
    fill("b1-n11-3", "Do you know what time the train ___? (leave)", ["leaves"], "Câu trực tiếp là What time does the train leave? Khi gián tiếp, bỏ does và trả đuôi -s cho động từ: leaves."),
    fill("b1-n11-4", "I wonder ___ she will come to the party. (liệu… có… không)", ["if", "whether"], "Hỏi Có / Không một cách gián tiếp: if hoặc whether đều đúng."),
    reorder("b1-n11-5", "Could you tell me where the bank is?", "Cụm mở đầu Could you tell me + where + câu kể the bank is. Không đảo is lên trước the bank."),
    reorder("b1-n11-6", "Do you know what time the bank opens?", "Do you know + what time + câu kể the bank opens. Không còn does, và opens có đuôi -s."),
    listen("b1-n11-7", "Do you know if the museum is open on Mondays?", ["Bảo tàng đóng cửa vào thứ Hai phải không?", "Bạn có biết bảo tàng có mở cửa vào thứ Hai không?", "Bạn có biết bảo tàng ở đâu không?", "Thứ Hai này chúng ta đi bảo tàng nhé?"], 1, "Do you know if…: bạn có biết liệu… có… không."),
    listen("b1-n11-8", "Would you mind telling me how much this costs?", ["Bạn có phiền cho tôi biết cái này giá bao nhiêu không?", "Bạn có muốn mua cái này không?", "Cái này đắt quá, bạn có thể giảm giá không?"], 0, "Would you mind telling me… là cách hỏi rất lịch sự, hợp khi hỏi giá hoặc hỏi thông tin riêng."),
    correct("b1-n11-9", "Could you tell me what time does the museum open?", "Could you tell me what time the museum opens?", "Sau Could you tell me, phần câu hỏi trở về trật tự câu kể: bỏ does và trả đuôi -s cho động từ: the museum opens."),
    correct("b1-n11-10", "Do you know is there a pharmacy near here?", ["Do you know if there is a pharmacy near here?", "Do you know whether there is a pharmacy near here?"], "Câu hỏi Có / Không khi gián tiếp phải có if hoặc whether, và phần sau theo trật tự câu kể: there is."),
  ],
  speaking: [
    say("Excuse me, could you tell me where the nearest bus stop is?", "Xin lỗi, anh có thể cho tôi biết trạm xe buýt gần nhất ở đâu không?"),
    say("Do you know if this train goes to Hai Phong?", "Bạn có biết chuyến tàu này có đi Hải Phòng không?"),
    say("I wonder whether they have a table for two.", "Không biết họ còn bàn cho hai người không nhỉ."),
  ],
  freeSpeaking: free(
    "Imagine you have just arrived at a hotel in a new city. What questions would you ask the receptionist?",
    "Bạn vừa đến một khách sạn ở thành phố lạ. Hỏi lễ tân 4–5 thông tin bằng câu hỏi gián tiếp: Could you tell me…?, Do you know if…?, I'd like to know…",
    "Good evening. Could you tell me what time breakfast starts? I'd also like to know whether the hotel has a gym. Do you know if there is a pharmacy near here? I have a meeting tomorrow morning, so could you tell me how long it takes to get to the city centre by taxi? Thank you very much.",
  ),
  dialogue: dialogue(
    "Hỏi thông tin ở quầy lễ tân",
    "Chị Hương vừa nhận phòng ở một khách sạn tại Singapore và hỏi nhân viên lễ tân vài thông tin cần thiết cho chuyến công tác.",
    { A: "Chị Hương (khách)", B: "Nhân viên lễ tân" },
    A("Excuse me, could you tell me what time breakfast starts?", "Xin lỗi, anh có thể cho tôi biết mấy giờ bắt đầu bữa sáng không?"),
    B("Of course. Breakfast starts at half past six on the second floor.", "Dạ vâng. Bữa sáng bắt đầu lúc sáu rưỡi ở tầng hai."),
    A("Thank you. Do you know if the hotel has a gym?", "Cảm ơn anh. Anh có biết khách sạn có phòng tập không?"),
    B("Yes, it does. It's open from six in the morning until ten at night.", "Có ạ. Phòng tập mở từ sáu giờ sáng đến mười giờ tối."),
    A("Great. I'd also like to know how I can get to the conference centre.", "Tốt quá. Tôi cũng muốn biết làm sao để đến trung tâm hội nghị."),
    B("You can take the metro. Shall I show you where the station is on the map?", "Chị có thể đi tàu điện ngầm. Để tôi chỉ cho chị ga ở đâu trên bản đồ nhé?"),
    A("Yes, please. And could you tell me whether I can pay for a taxi by card?", "Vâng, làm ơn. Và anh có thể cho tôi biết đi taxi có trả bằng thẻ được không?"),
    B("Most taxis here accept cards, but you should ask the driver before you get in.", "Hầu hết taxi ở đây nhận thẻ, nhưng chị nên hỏi tài xế trước khi lên xe."),
    A("Good idea. One more thing. Do you know when the swimming pool closes?", "Ý hay đấy. Còn một việc nữa. Anh có biết mấy giờ bể bơi đóng cửa không?"),
    B("I'm not sure exactly, but I'll check and call your room.", "Tôi không chắc chính xác, nhưng tôi sẽ kiểm tra rồi gọi lên phòng chị."),
    A("Thank you so much. You've been very helpful.", "Cảm ơn anh nhiều. Anh đã giúp tôi rất nhiều."),
  ),
  dialogueQuestions: [
    listenQ("b1-n11-d1", "What time does breakfast start?", "Of course. Breakfast starts at half past six on the second floor.", ["At six o'clock", "At half past six", "At seven o'clock", "At half past seven"], 1, "Breakfast starts at half past six: sáu rưỡi."),
    mc("b1-n11-d2", "How can Huong get to the conference centre?", ["By hotel bus", "On foot", "By metro", "Only by taxi"], 2, "Lễ tân nói: You can take the metro."),
    listenQ("b1-n11-d3", "What will the receptionist do about the swimming pool?", "I'm not sure exactly, but I'll check and call your room.", ["Check when it closes and call her room", "Open the pool early for her", "Give her a map of the hotel"], 0, "I'll check and call your room: lễ tân sẽ kiểm tra giờ đóng cửa rồi gọi lên phòng."),
  ],
  reading: reading({
    title: "An email to a language centre",
    text: `Dear Sir or Madam,

I saw your advertisement for evening English courses on your website, and I am writing to ask for some more details.

I work in a bank from Monday to Friday, so I can only study after six o'clock. Could you tell me which days the evening classes take place? I would also like to know how many students there are in each class, because I learn better in small groups.

My company may pay for part of the course. Do you know if you can send the invoice directly to my company? I also wonder whether there is a test before the course starts. My English is not bad, but I haven't used it much since I left university, so I am not sure which level I should choose.

Finally, could you tell me whether I can try one lesson before I pay? I would like to see if the teaching style suits me.

I look forward to hearing from you.

Yours faithfully, Pham Thi Thu

Dear Ms Pham,

Thank you for your email. Our evening classes take place on Tuesdays and Thursdays, and there are no more than twelve students in each class. Yes, we can send the invoice to your company. There is a free level test, and you are welcome to join a trial lesson next Tuesday at half past six.

Best regards, Nguyen Van Hai, Student Services`,
    glossary: [
      ["advertisement", "quảng cáo"],
      ["take place", "diễn ra"],
      ["invoice", "hóa đơn"],
      ["suit", "hợp với (ai)"],
      ["trial", "dùng thử, học thử"],
    ],
    questions: [
      mc("b1-n11-r1", "Why did Thu write the first email?", ["To complain about her English teacher", "To ask for details about evening English courses", "To apply for a job at the language centre", "To cancel a class she had booked"], 1, "I am writing to ask for some more details: Thu hỏi thông tin về khóa học buổi tối."),
      mc("b1-n11-r2", "Why does Thu want to know how many students there are in each class?", ["She learns better in small groups.", "She wants to bring some colleagues.", "Her company needs the number for the invoice."], 0, "…because I learn better in small groups."),
      fill("b1-n11-r3", "Thu wonders ___ there is a test before the course starts.", ["whether", "if"], "I also wonder whether there is a test…: câu hỏi Có / Không gián tiếp dùng whether hoặc if."),
      mc("b1-n11-r4", "According to the reply, how many students can there be in a class?", ["Six at most", "Ten at most", "Twelve at most", "Twenty at most"], 2, "There are no more than twelve students in each class: tối đa mười hai người."),
      mc("b1-n11-r5", "What will Thu probably do next Tuesday evening?", ["Pay for the whole course", "Visit her company's office", "Start a new job at the bank", "Take a trial lesson"], 3, "Câu suy luận: Thu muốn học thử trước khi trả tiền, và trung tâm mời cô học thử tối thứ Ba tới."),
    ],
  }),
  task: task({
    prompt: "Bạn sắp tham gia một tour du lịch Đà Nẵng. Viết một email ngắn (90–120 từ) gửi công ty du lịch, hỏi 4–6 thông tin bạn cần biết bằng câu hỏi gián tiếp.",
    hints: [
      "Mở đầu: I'm writing to ask about…",
      "Dùng Could you tell me…?, Do you know if…?, I'd like to know…, I wonder whether…",
      "Nhớ trật tự câu kể sau từ để hỏi, và if / whether cho câu hỏi Có / Không.",
      "Kết thư lịch sự: Thank you for your help.",
    ],
    model: "Dear Sir or Madam, I'm writing to ask about the Da Nang tour on the fifteenth of June. Could you tell me what time the bus leaves from Hanoi? I'd also like to know whether the price includes breakfast. Do you know if children under six can join the tour for free? Could you tell me how much it costs to stay one more night at the hotel? Do you know how long the bus journey from Hanoi to Da Nang takes? Finally, I wonder whether I can pay by bank transfer. Thank you for your help. Best regards, Tran Thi Hoa",
    checklist: [
      "Có ít nhất bốn câu hỏi gián tiếp, dùng ít nhất ba cụm mở đầu khác nhau.",
      "Sau từ để hỏi là chủ ngữ + động từ, không đảo is / can lên trước chủ ngữ.",
      "Phần câu hỏi không còn do / does / did; động từ được chia lại (leaves, costs).",
      "Câu hỏi Có / Không có if hoặc whether.",
      "Câu bắt đầu bằng I'd like to know hoặc I wonder kết thúc bằng dấu chấm.",
    ],
    minWords: 90,
  }),
});
