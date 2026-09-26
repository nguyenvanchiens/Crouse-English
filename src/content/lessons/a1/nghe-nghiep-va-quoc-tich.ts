import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "nghe-nghiep-va-quoc-tich",
  title: "Nghề nghiệp và quốc tịch",
  minutes: 25,
  lecture: {
    title: "a/an với nghề nghiệp, quốc tịch và câu hỏi Wh- với to be",
    blocks: [
      p("Gặp một người nước ngoài lần đầu, ở sân bay hay trong buổi họp với đối tác, hai câu bạn gần như chắc chắn sẽ được hỏi là **Bạn làm nghề gì?** và **Bạn là người nước nào?** Bài này giúp bạn trả lời hai câu đó cho đúng, và tự hỏi lại người khác bằng các từ để hỏi **What, Where, Who, How**."),
      p("Tiếng Việt nói “Tôi là bác sĩ”, không cần chữ “một”. Tiếng Anh thì khác: khi nói nghề của **một người**, bắt buộc phải có **a** hoặc **an** trước tên nghề. Khi nói về **nhiều người**, bỏ a/an và thêm **-s** vào tên nghề."),
      table(
        ["Chủ ngữ", "Cấu trúc", "Ví dụ"],
        ["Một người, nghề bắt đầu bằng âm phụ âm", "to be + a + nghề", "She's a doctor. He's a driver."],
        ["Một người, nghề bắt đầu bằng âm nguyên âm", "to be + an + nghề", "I'm an engineer. He's an accountant."],
        ["Nhiều người", "to be + nghề số nhiều (không a/an)", "They're nurses. We're teachers."],
      ),
      mistake("I am doctor.", "I am a doctor.", "Tiếng Việt không có mạo từ nên người Việt rất hay bỏ a. Với tiếng Anh, thiếu a trước nghề nghe như câu nói dở dang."),
      mistake("They are a nurses.", "They are nurses.", "A/an nghĩa là “một”, nên không bao giờ đi với danh từ số nhiều."),
      p("Tên nước và quốc tịch là **hai từ khác nhau**. Tên nước là danh từ, dùng sau **from** hoặc **in**. Quốc tịch dùng như tính từ thì đứng ngay sau **to be** mà **không có a/an** (I'm Vietnamese). Vài từ còn có dạng danh từ chỉ người nên có a/an: **an American, a Canadian**. Cả hai đều **viết hoa chữ cái đầu**."),
      table(
        ["Nước (danh từ)", "Quốc tịch (tính từ)", "Ví dụ"],
        ["Vietnam", "Vietnamese", "I'm from Vietnam. I'm Vietnamese."],
        ["Japan", "Japanese", "Kenji is Japanese."],
        ["China", "Chinese", "My boss is Chinese."],
        ["Korea", "Korean", "Min-ji is from Korea. She's Korean."],
        ["America (the USA)", "American", "Our teacher is American."],
        ["England", "English", "Tom is English."],
        ["Thailand", "Thai", "These students are Thai."],
      ),
      mistake("I am Vietnam.", "I am Vietnamese. / I am from Vietnam.", "Tiếng Việt dùng chung chữ “Việt Nam” cho cả nước lẫn người, nên người Việt hay nói I am Vietnam, nghe như “tôi là đất nước Việt Nam”. Sau am, is, are phải dùng quốc tịch; muốn dùng tên nước thì thêm from."),
      tip("Mẹo nhớ nhanh: các quốc tịch đuôi **-ese** (Vietnamese, Japanese, Chinese) khi đứng một mình nhấn trọng âm vào âm **-ese** cuối cùng: viet-na-MESE, ja-pa-NESE, chi-NESE. Đứng trước danh từ thì trọng âm thường lùi lên trước: a JA-pa-nese car. Đọc rõ âm /z/ ở cuối, đừng nuốt."),
      p("Muốn hỏi thêm thông tin, đặt từ để hỏi lên đầu rồi dùng mẫu câu hỏi của to be: **Từ để hỏi + am/is/are + chủ ngữ?** **What** hỏi cái gì, **Where** hỏi ở đâu, **Who** hỏi ai, **How** hỏi thế nào (sức khỏe, tình trạng)."),
      table(
        ["Từ để hỏi", "Câu hỏi", "Câu trả lời"],
        ["What", "What's your job?", "I'm an accountant."],
        ["Where", "Where is your boss from?", "He's from Korea."],
        ["Who", "Who is that man?", "He's my new manager."],
        ["How", "How is your mother?", "She's fine, thank you."],
      ),
      ex("What's his job? He's a taxi driver.", "Anh ấy làm nghề gì? Anh ấy là tài xế taxi."),
      ex("Where are your colleagues from? They're from Japan. They're Japanese.", "Đồng nghiệp của bạn đến từ đâu? Họ đến từ Nhật Bản. Họ là người Nhật.", "Nhiều người nên dùng are và they're; quốc tịch Japanese không thêm -s."),
      ex("Who is the woman in the photo? She's my aunt. She's a nurse.", "Người phụ nữ trong ảnh là ai? Đó là cô tôi. Cô ấy là y tá."),
      ex("How are your children? They're fine, thanks.", "Các con bạn thế nào? Các cháu khỏe, cảm ơn bạn.", "How hỏi về sức khỏe, tình trạng, không hỏi về nghề nghiệp."),
      teacher("Khi đứng lớp, tôi thấy học viên Việt mình mắc lỗi **I am doctor** nhiều đến mức tôi phải đặt ra một luật: **cứ nói nghề là phải nghe thấy chữ a hoặc an**. Mỗi sáng các bạn thử nói to ba câu về ba người trong nhà: My father is a..., My mother is a..., I'm a... Nói đủ một tuần, cái miệng sẽ tự nhớ chữ a thay cho cái đầu."),
      summary(
        "Nói nghề của một người phải có **a** hoặc **an**: I'm **a** doctor. He's **an** engineer.",
        "Nhiều người thì bỏ a, an và thêm -s: They're **nurses**.",
        "Tên nước đi sau **from**, quốc tịch (tính từ) đứng sau to be và không có a, an: I'm **from Vietnam**. I'm **Vietnamese**. Dạng danh từ như an American thì mới có a/an.",
        "Câu hỏi Wh-: **từ để hỏi + am/is/are + chủ ngữ?** What's your job? Where is he from? Who is that man?",
        "**How** hỏi sức khỏe, tình trạng; muốn hỏi nghề thì dùng **What's your job?**",
      ),
    ],
  },
  words: [
    word("job", "/dʒɒb/", "công việc, nghề nghiệp", "What's your job?", "job", 0, "Nhớ khép môi đọc âm /b/ ở cuối, đừng để mất âm này."),
    word("doctor", "/ˈdɒk.tə/", "bác sĩ", "My sister is a doctor.", "doc|tor", 0),
    word("nurse", "/nɜːs/", "y tá", "She's a nurse in a big hospital.", "nurse", 0, "Âm cuối là /s/, đọc rõ để không nghe thành “nơ”."),
    word("engineer", "/ˌen.dʒɪˈnɪə/", "kỹ sư", "He's an engineer.", "en|gi|neer", 2, "Trọng âm rơi vào âm cuối: en-gi-NIA, đọc /nɪə/, không uốn lưỡi đọc âm r ở cuối."),
    word("accountant", "/əˈkaʊn.tənt/", "kế toán", "My mother is an accountant.", "ac|count|ant", 1),
    word("driver", "/ˈdraɪ.və/", "tài xế, lái xe", "Mr Tran is a bus driver.", "dri|ver", 0, "Âm /dr/ đọc liền một hơi, không chèn âm “đơ” vào giữa."),
    word("Vietnamese", "/ˌvjet.nəˈmiːz/", "người Việt Nam, thuộc về Việt Nam", "I'm Vietnamese.", "Viet|nam|ese", 2, "Nhấn vào âm cuối /miːz/ và kết thúc bằng /z/."),
    word("Japanese", "/ˌdʒæp.ənˈiːz/", "người Nhật, thuộc về Nhật Bản", "Kenji is Japanese.", "Jap|an|ese", 2),
  ],
  exercises: [
    mc("a1-n04-1", "My brother is ___ engineer.", ["a", "an", "(không dùng mạo từ)"], 1, "Engineer bắt đầu bằng âm nguyên âm /e/ nên dùng an. Nói nghề của một người thì luôn phải có a hoặc an."),
    mc("a1-n04-2", "Chọn câu đúng:", ["I am Vietnam.", "I am from Vietnamese.", "I am Vietnamese."], 2, "Sau am dùng quốc tịch Vietnamese; sau from dùng tên nước Vietnam."),
    fill("a1-n04-3", "She is ___ nurse. (một)", ["a"], "Nurse bắt đầu bằng âm phụ âm /n/ nên dùng a. Đừng bỏ a như khi nói tiếng Việt."),
    fill("a1-n04-4", "___ is that woman? She's my teacher. (ai)", ["Who", "who"], "Hỏi người đó là ai dùng Who."),
    reorder("a1-n04-5", "What is your sister's job?", "Hỏi nghề: What + is + ...'s job? Từ để hỏi luôn đứng đầu câu."),
    reorder("a1-n04-6", "Who is the woman in the photo?", "Who + is + người được hỏi; cụm in the photo đứng sau danh từ the woman."),
    listen("a1-n04-7", "He's an engineer from Korea.", ["Anh ấy là kỹ sư người Hàn Quốc.", "Anh ấy là kỹ sư làm việc ở Nhật Bản.", "Cô ấy là kế toán người Hàn Quốc."], 0, "He's là anh ấy; engineer là kỹ sư; Korea là Hàn Quốc."),
    listen("a1-n04-8", "How is your father?", ["Bố bạn làm nghề gì?", "Bố bạn có khỏe không?", "Bố bạn là ai?"], 1, "How hỏi về sức khỏe, tình trạng. Hỏi nghề phải là What's his job?"),
    correct("a1-n04-9", "My father is engineer.", ["My father is an engineer.", "My father's an engineer."], "Nói nghề của một người phải có a hoặc an. Engineer bắt đầu bằng âm nguyên âm /e/ nên dùng an."),
    correct("a1-n04-10", "Where your boss is from?", ["Where is your boss from?", "Where's your boss from?"], "Câu hỏi Wh- với to be: từ để hỏi + is + chủ ngữ. Is phải đứng ngay sau Where, không nằm sau chủ ngữ như câu kể."),
  ],
  speaking: [
    say("I'm an accountant. I'm Vietnamese.", "Tôi là kế toán. Tôi là người Việt Nam."),
    say("What's his job? He's a taxi driver.", "Anh ấy làm nghề gì? Anh ấy là tài xế taxi."),
    say("Where is your boss from? She's from Japan.", "Sếp của bạn đến từ đâu? Cô ấy đến từ Nhật Bản."),
  ],
  freeSpeaking: free(
    "What's your job, and where are you from?",
    "Nói về nghề nghiệp và quốc tịch của bạn, rồi giới thiệu thêm nghề của hai người trong gia đình.",
    "I'm Lan. I'm from Vietnam, so I'm Vietnamese. I'm an accountant in Hanoi. My husband is an engineer. He's Vietnamese too. My sister is a nurse.",
  ),
  dialogue: dialogue(
    "Làm quen ở hội thảo",
    "Giờ giải lao ở một hội thảo tại TP. Hồ Chí Minh, chị Mai, kế toán người Việt, làm quen với Kenji, kỹ sư người Nhật. Hai người hỏi nhau nghề nghiệp, quốc tịch và về những người đi cùng.",
    { A: "Kenji, kỹ sư người Nhật", B: "Chị Mai, kế toán" },
    A("Hello. I'm Kenji. I'm from Japan.", "Xin chào. Tôi là Kenji. Tôi đến từ Nhật Bản."),
    B("Nice to meet you, Kenji. I'm Mai. I'm Vietnamese.", "Rất vui được gặp anh, Kenji. Tôi là Mai. Tôi là người Việt Nam."),
    A("What's your job, Mai?", "Chị làm nghề gì, Mai?"),
    B("I'm an accountant. What about you?", "Tôi là kế toán. Còn anh thì sao?"),
    A("I'm an engineer. I'm here with my boss, Ms Kim.", "Tôi là kỹ sư. Tôi đến đây cùng sếp tôi, chị Kim."),
    B("Where is she from? Is she Japanese too?", "Chị ấy đến từ đâu? Chị ấy cũng là người Nhật à?"),
    A("No, she isn't. She's from Korea. She's Korean.", "Không. Chị ấy đến từ Hàn Quốc. Chị ấy là người Hàn."),
    B("And who is that man with her?", "Còn người đàn ông đi cùng chị ấy là ai vậy?"),
    A("He's our driver. He's Vietnamese, from Da Nang.", "Anh ấy là tài xế của chúng tôi. Anh ấy là người Việt, quê Đà Nẵng."),
    B("How is your hotel?", "Khách sạn của anh thế nào?"),
    A("It's great, thank you. Nice to meet you, Mai.", "Rất tốt, cảm ơn chị. Rất vui được làm quen với chị, Mai."),
    B("Nice to meet you too, Kenji.", "Tôi cũng rất vui được làm quen với anh, Kenji."),
  ),
  dialogueQuestions: [
    listenQ("a1-n04-d1", "Chị Kim, sếp của Kenji, là người nước nào?", "No, she isn't. She's from Korea. She's Korean.", ["Người Nhật", "Người Hàn Quốc", "Người Việt Nam"], 1, "She's from Korea. She's Korean: chị Kim đến từ Hàn Quốc, là người Hàn."),
    mc("a1-n04-d2", "Người đàn ông đi cùng chị Kim là ai?", ["Tài xế người Việt, quê Đà Nẵng", "Một kỹ sư người Nhật", "Một kế toán người Hàn Quốc"], 0, "Kenji nói: He's our driver. He's Vietnamese, from Da Nang."),
    mc("a1-n04-d3", "Mai và Kenji làm nghề gì?", ["Mai là kỹ sư, Kenji là kế toán", "Cả hai đều là kế toán", "Mai là kế toán, Kenji là kỹ sư"], 2, "Mai nói I'm an accountant, Kenji nói I'm an engineer."),
  ],
  reading: reading({
    title: "Thông báo: đồng nghiệp mới",
    text: `Welcome to our new colleagues!

This is Linh. She's twenty-six years old. She's from Hue, and she's an accountant. Her office is on the second floor.

This is Mr Sato. He's Japanese. He's an engineer, and he's forty-two. His office is Room 305.

And these are Tom and Emma. They're English. They're teachers in our English club. Tom is thirty and Emma is twenty-nine. They're very friendly.

Questions? Ask Ms Pham, our manager. Her phone number is 0903 456 789.`,
    glossary: [
      ["colleague", "đồng nghiệp"],
      ["office", "văn phòng"],
      ["second floor", "tầng hai"],
      ["club", "câu lạc bộ"],
      ["friendly", "thân thiện"],
      ["manager", "người quản lý"],
    ],
    questions: [
      mc("a1-n04-r1", "Bài đọc này là gì?", ["Một thông báo giới thiệu đồng nghiệp mới", "Một quảng cáo tuyển nhân viên", "Một email xin nghỉ phép"], 0, "Câu đầu tiên: Welcome to our new colleagues! Bài giới thiệu những người mới vào công ty."),
      mc("a1-n04-r2", "Linh làm nghề gì?", ["Kỹ sư", "Kế toán", "Giáo viên"], 1, "She's from Hue, and she's an accountant."),
      mc("a1-n04-r3", "Ông Sato là người nước nào, bao nhiêu tuổi?", ["Người Hàn Quốc, 42 tuổi", "Người Nhật, 24 tuổi", "Người Nhật, 42 tuổi"], 2, "He's Japanese... he's forty-two: người Nhật, bốn mươi hai tuổi."),
      fill("a1-n04-r4", "Tom và Emma là người Anh: They're ___.", ["English", "British"], "Người Anh là English, viết hoa chữ cái đầu và không có a, an."),
      mc("a1-n04-r5", "Nếu có câu hỏi, nhân viên mới hỏi ai?", ["Chị Linh", "Bà Phạm, người quản lý", "Ông Sato"], 1, "Questions? Ask Ms Pham, our manager."),
    ],
  }),
  task: task({
    prompt: "Ở một buổi hội thảo, hãy viết 6–8 câu giới thiệu nghề nghiệp và quốc tịch của bạn và của một đồng nghiệp, rồi viết hai câu hỏi để hỏi lại người mới quen.",
    hints: [
      "Nói nghề với a hoặc an: I'm an accountant. She's a nurse.",
      "Quốc tịch đứng sau to be, không có a, an: I'm Vietnamese.",
      "Tên nước đứng sau from: He's from Japan.",
      "Đặt câu hỏi bằng What, Where hoặc Who: What's your job? Where are you from?",
    ],
    model: "Hello, I'm Hung. I'm Vietnamese. I'm an engineer. This is my colleague, Anna. She's from England. She's English. She's a teacher. What's your job? Where are you from?",
    checklist: [
      "Có a hoặc an trước nghề của một người",
      "Quốc tịch không có a, an; tên nước đứng sau from",
      "Tên nước và quốc tịch viết hoa chữ cái đầu",
      "Có ít nhất hai câu hỏi bắt đầu bằng What, Where, Who hoặc How",
      "Trong câu hỏi, am, is, are đứng ngay sau từ để hỏi",
    ],
    minWords: 25,
  }),
});
