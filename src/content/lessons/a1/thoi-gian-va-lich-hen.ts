import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "thoi-gian-va-lich-hen",
  title: "Thời gian và lịch hẹn",
  minutes: 28,
  lecture: {
    title: "Nói giờ, thứ, tháng và giới từ in/on/at",
    blocks: [
      p("Đặt lịch khám bệnh, hẹn khách hàng, hỏi giờ tàu chạy: việc nào cũng cần nói đúng **giờ** và **ngày**. Hẹn nhầm “thứ Ba lúc chín giờ kém mười lăm” thành “chín giờ mười lăm” là bạn đã đến muộn nửa tiếng. Bài này dạy bạn cách nói giờ kiểu người Anh và ba giới từ **in, on, at** đi với thời gian."),
      p("Ở bài trước bạn đã biết cách đơn giản nhất: đọc giờ rồi đọc phút (seven fifteen). Người Anh còn một cách nữa rất phổ biến: dùng **past** (qua) cho nửa giờ đầu và **to** (kém) cho nửa giờ sau. **Quarter** là mười lăm phút, **half** là ba mươi phút."),
      table(
        ["Giờ", "Cách nói với past / to", "Nghĩa tiếng Việt"],
        ["7:00", "seven o'clock", "bảy giờ đúng"],
        ["7:10", "ten past seven", "bảy giờ mười"],
        ["7:15", "quarter past seven", "bảy giờ mười lăm"],
        ["7:30", "half past seven", "bảy giờ rưỡi"],
        ["7:45", "quarter to eight", "tám giờ kém mười lăm"],
        ["7:50", "ten to eight", "tám giờ kém mười"],
      ),
      mistake("6:45 = quarter to six", "6:45 = quarter to seven", "Nhiều người Việt thấy số 6 là nói ngay six. Nhưng to nghĩa là “kém”, giống hệt “bảy giờ kém mười lăm” của tiếng Việt, tức là 6:45."),
      tip("Mẹo nhớ: **past** là đã **qua** giờ đó, **to** là còn **tới** giờ đó. Và nhớ rằng chữ **l** trong **half** câm: đọc là /hɑːf/, không đọc âm /l/."),
      p("Tên **thứ** và **tháng** trong tiếng Anh luôn **viết hoa chữ cái đầu**: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday; January, February, March, April, May, June, July, August, September, October, November, December. Nói **ngày** thì dùng **số thứ tự**, không dùng số đếm: phần lớn chỉ cần thêm **-th** (fourth, sixth, tenth), trừ ba số đầu **first, second, third** và vài số đổi chính tả như **fifth, twelfth, twentieth**. Hỏi sinh nhật: **When is your birthday?** Trả lời: **It's on the fifth of May.**"),
      table(
        ["Số", "Số thứ tự", "Cách nói ngày"],
        ["1", "first (1st)", "the first of June"],
        ["2", "second (2nd)", "the second of June"],
        ["3", "third (3rd)", "the third of June"],
        ["5", "fifth (5th)", "the fifth of May"],
        ["12", "twelfth (12th)", "the twelfth of May"],
        ["20", "twentieth (20th)", "the twentieth of October"],
        ["21", "twenty-first (21st)", "the twenty-first of March"],
      ),
      mistake("See you on monday.", "See you on Monday.", "Tiếng Việt viết thường “thứ hai”, nên người Việt hay quên viết hoa. Trong tiếng Anh, thứ và tháng là danh từ riêng, luôn viết hoa."),
      p("Ba giới từ chỉ thời gian đi theo quy tắc **từ lớn đến nhỏ**: khoảng thời gian dài dùng **in**, một ngày cụ thể dùng **on**, một thời điểm chính xác dùng **at**."),
      table(
        ["Giới từ", "Dùng với", "Ví dụ"],
        ["in", "tháng, năm, mùa, buổi trong ngày", "in May, in 2026, in the summer, in the morning"],
        ["on", "thứ, ngày tháng, buổi của một thứ cụ thể", "on Monday, on the fifth of May, on Friday afternoon"],
        ["at", "giờ, và vài cụm cố định", "at six o'clock, at noon, at night, at the weekend"],
      ),
      ex("My appointment with the dentist is on Thursday at half past two.", "Lịch hẹn nha sĩ của tôi là thứ Năm lúc hai giờ rưỡi.", "Có cả thứ và giờ: on đi với thứ, at đi với giờ."),
      ex("Our office is closed in August.", "Văn phòng chúng tôi đóng cửa vào tháng Tám."),
      ex("I drink tea in the morning, but at night I only drink water.", "Tôi uống trà vào buổi sáng, nhưng ban đêm tôi chỉ uống nước.", "Nói in the morning, in the afternoon, in the evening, nhưng lại là at night."),
      ex("The class starts on Monday morning.", "Lớp học bắt đầu vào sáng thứ Hai.", "Có tên thứ đi kèm thì dùng on, dù có chữ morning."),
      mistake("in Monday / at May", "on Monday / in May", "Tiếng Việt chỉ dùng một chữ “vào” cho mọi trường hợp: vào thứ Hai, vào tháng Năm, vào lúc sáu giờ. Tiếng Anh tách thành ba giới từ, nên phải học theo nhóm."),
      teacher("Tôi dạy các bạn học viên nhớ in, on, at bằng hình **cái phễu**: miệng phễu rộng là **in** (tháng, năm), giữa phễu là **on** (ngày), đáy phễu nhọn là **at** (giờ). Mỗi tối trước khi ngủ, các bạn thử nói lịch của ngày mai bằng tiếng Anh, một câu thôi: I have a meeting on Tuesday at nine. Ba tháng sau các bạn sẽ không cần nghĩ nữa."),
      summary(
        "Nói giờ: **past** cho nửa giờ đầu (ten past seven), **to** cho nửa giờ sau (quarter to eight là 7:45). Quarter là mười lăm phút, half là ba mươi phút.",
        "Ngày nói bằng **số thứ tự**: the first, the fifth, the twelfth of May.",
        "**In** + tháng, năm, buổi trong ngày; **on** + thứ, ngày tháng; **at** + giờ (và at night).",
        "Có tên thứ đi kèm buổi thì dùng **on**: on Monday morning, on Friday afternoon.",
        "Tên thứ và tháng luôn **viết hoa**: Monday, May.",
      ),
    ],
  },
  words: [
    word("Monday", "/ˈmʌn.deɪ/", "thứ Hai", "See you on Monday.", "Mon|day", 0, "Phần Mon đọc là /mʌn/, không đọc “mon” như chữ viết."),
    word("Wednesday", "/ˈwenz.deɪ/", "thứ Tư", "We have English on Wednesday.", "Wednes|day", 0, "Chữ d đầu tiên câm: đọc là /ˈwenz.deɪ/, chỉ có hai âm tiết."),
    word("week", "/wiːk/", "tuần", "There are seven days in a week.", "week", 0),
    word("month", "/mʌnθ/", "tháng", "My birthday is next month.", "month", 0, "Âm cuối /nθ/: đưa đầu lưỡi ra giữa hai hàm răng, đừng đọc thành “mân”."),
    word("minute", "/ˈmɪn.ɪt/", "phút", "The bus comes in five minutes.", "min|ute", 0),
    word("quarter", "/ˈkwɔː.tə/", "mười lăm phút, một phần tư", "It's quarter past ten.", "quar|ter", 0),
    word("half", "/hɑːf/", "một nửa, rưỡi", "It's half past six.", "half", 0, "Chữ l câm: đọc là /hɑːf/."),
    word("appointment", "/əˈpɔɪnt.mənt/", "cuộc hẹn, lịch hẹn", "I have an appointment at ten o'clock.", "ap|point|ment", 1),
  ],
  exercises: [
    mc("a1-n06-1", "My birthday is ___ the twelfth of May.", ["in", "at", "on"], 2, "Có ngày cụ thể (the twelfth of May) thì dùng on; chỉ có tháng (in May) mới dùng in. Ngày nói bằng số thứ tự: twelfth, không nói twelve."),
    mc("a1-n06-2", "8:45 được nói là:", ["quarter to nine", "quarter past eight", "quarter to eight"], 0, "Còn mười lăm phút nữa tới chín giờ nên là quarter to nine (chín giờ kém mười lăm)."),
    fill("a1-n06-3", "My birthday is ___ May.", ["in"], "Tháng dùng in."),
    fill("a1-n06-4", "The meeting is ___ three o'clock. (lúc)", ["at"], "Giờ chính xác dùng at."),
    reorder("a1-n06-5", "What time is your appointment?", "Hỏi giờ của một sự việc: What time + is + sự việc?"),
    reorder("a1-n06-6", "Is the meeting on Friday afternoon?", "Câu hỏi với to be: Is đứng đầu. Buổi chiều của một thứ cụ thể dùng on: on Friday afternoon."),
    listen("a1-n06-7", "It's quarter to seven.", ["Bây giờ là bảy giờ mười lăm.", "Bây giờ là bảy giờ kém mười lăm.", "Bây giờ là sáu giờ kém mười lăm."], 1, "Quarter to seven là bảy giờ kém mười lăm, tức 6:45."),
    listen("a1-n06-8", "See you on Wednesday at ten.", ["Hẹn gặp bạn thứ Năm lúc mười giờ.", "Hẹn gặp bạn thứ Tư lúc hai giờ.", "Hẹn gặp bạn thứ Tư lúc mười giờ."], 2, "Wednesday là thứ Tư, at ten là lúc mười giờ."),
    correct("a1-n06-9", "My English class is in Friday.", ["My English class is on Friday."], "Tên thứ đi với on, không dùng in. In chỉ dùng với tháng, năm, buổi trong ngày."),
    correct("a1-n06-10", "Her birthday is on the twelve of June.", ["Her birthday is on the twelfth of June.", "Her birthday's on the twelfth of June."], "Nói ngày phải dùng số thứ tự: the twelfth, không dùng số đếm twelve."),
  ],
  freeSpeaking: free(
    "When is your birthday? And what are your appointments this week?",
    "Nói sinh nhật bạn vào ngày nào và kể hai, ba cuộc hẹn trong tuần này: thứ mấy, lúc mấy giờ.",
    "My birthday is on the fourteenth of July. This week, I have a meeting on Tuesday at nine o'clock. I have an appointment with the doctor on Thursday at quarter past three. On Saturday evening, I have dinner with my friends.",
  ),
  speaking: [
    say("My birthday is in October.", "Sinh nhật tôi vào tháng Mười."),
    say("The meeting is on Monday at half past nine.", "Cuộc họp vào thứ Hai lúc chín giờ rưỡi."),
    say("It's quarter to eight. We're late.", "Bây giờ là tám giờ kém mười lăm. Chúng ta muộn rồi."),
  ],
  dialogue: dialogue(
    "Đặt lịch khám răng qua điện thoại",
    "Anh Tuấn gọi điện đến một phòng khám nha khoa quốc tế ở Hà Nội để đặt lịch. Chị lễ tân nói tiếng Anh, hỏi anh muốn đến thứ mấy, lúc mấy giờ.",
    { A: "Chị lễ tân", B: "Anh Tuấn" },
    A("Good morning, City Dental Clinic.", "Chào buổi sáng, phòng khám nha khoa City xin nghe."),
    B("Good morning. I need an appointment with the dentist, please.", "Chào chị. Tôi cần đặt lịch hẹn với nha sĩ."),
    A("Of course. Is Tuesday OK?", "Vâng ạ. Thứ Ba có được không anh?"),
    B("Sorry, I have a meeting on Tuesday. What about Thursday?", "Xin lỗi, thứ Ba tôi có cuộc họp. Thứ Năm thì sao?"),
    A("Thursday, the twelfth of May, at quarter to ten. Is that OK?", "Thứ Năm, ngày mười hai tháng Năm, lúc mười giờ kém mười lăm. Có được không anh?"),
    B("Quarter to ten? So that's nine forty-five?", "Mười giờ kém mười lăm? Tức là chín giờ bốn mươi lăm phải không?"),
    A("Yes, that's right.", "Vâng, đúng rồi ạ."),
    B("Hmm, I start work at nine. Do you have anything in the afternoon?", "Hừm, tôi bắt đầu làm lúc chín giờ. Buổi chiều còn giờ nào không chị?"),
    A("Yes. We have half past four on Thursday afternoon.", "Có ạ. Chiều thứ Năm còn giờ bốn rưỡi."),
    B("Half past four on Thursday is great.", "Bốn rưỡi chiều thứ Năm thì tốt quá."),
    A("OK. Your appointment is on Thursday, the twelfth of May, at half past four. What's your name, please?", "Vâng. Lịch hẹn của anh là thứ Năm, ngày mười hai tháng Năm, lúc bốn giờ rưỡi. Anh tên là gì ạ?"),
    B("It's Tuan. See you on Thursday. Thank you!", "Tôi tên Tuấn. Hẹn gặp chị thứ Năm. Cảm ơn chị!"),
  ),
  dialogueQuestions: [
    listenQ("a1-n06-d1", "Vì sao anh Tuấn không đến vào thứ Ba?", "Sorry, I have a meeting on Tuesday. What about Thursday?", ["Anh ấy có một cuộc họp", "Phòng khám đóng cửa", "Anh ấy đi công tác"], 0, "I have a meeting on Tuesday: thứ Ba anh Tuấn có cuộc họp."),
    mc("a1-n06-d2", "Vì sao anh Tuấn không nhận giờ hẹn mười giờ kém mười lăm?", ["Anh ấy có cuộc họp lúc mười giờ", "Anh ấy bắt đầu làm việc lúc chín giờ", "Anh ấy thích đi buổi tối"], 1, "Anh Tuấn nói: I start work at nine. Chín giờ bốn mươi lăm thì anh đang ở chỗ làm."),
    listenQ("a1-n06-d3", "Lịch hẹn cuối cùng của anh Tuấn là khi nào?", "OK. Your appointment is on Thursday, the twelfth of May, at half past four.", ["Thứ Năm, 12 tháng Năm, lúc 4:30", "Thứ Năm, 12 tháng Năm, lúc 9:45", "Thứ Ba, 20 tháng Năm, lúc 4:30"], 0, "On Thursday, the twelfth of May, at half past four: thứ Năm, ngày mười hai tháng Năm, lúc bốn giờ rưỡi."),
  ],
  reading: reading({
    title: "Thông báo của trung tâm tiếng Anh",
    text: `Sunshine English Centre

New classes start on Monday, the fifth of September.

Our centre is open from Monday to Saturday. On weekdays, we open at half past seven in the morning and close at nine o'clock at night. On Saturdays, we close at noon. We are closed on Sundays.

Beginner classes are on Tuesday and Thursday evenings at quarter to seven. Each class is ninety minutes long.

The speaking club is on Saturday mornings at nine. It's free for all students!

Please note: the centre is closed for one week at Tet.`,
    glossary: [
      ["centre", "trung tâm"],
      ["open", "mở cửa"],
      ["weekdays", "các ngày trong tuần (thứ Hai đến thứ Sáu)"],
      ["close", "đóng cửa"],
      ["beginner", "người mới bắt đầu"],
      ["each", "mỗi"],
      ["free", "miễn phí"],
    ],
    questions: [
      mc("a1-n06-r1", "Bài đọc này là gì?", ["Một tin nhắn mời bạn đi ăn tối", "Thông báo giờ mở cửa và lịch học của một trung tâm", "Quảng cáo bán sách tiếng Anh"], 1, "Bài đọc nói giờ mở cửa, lịch các lớp và câu lạc bộ của Sunshine English Centre."),
      mc("a1-n06-r2", "Vào ngày thường, trung tâm mở cửa lúc mấy giờ?", ["7:15", "7:30", "9:00"], 1, "We open at half past seven in the morning: bảy giờ rưỡi sáng."),
      mc("a1-n06-r3", "Lớp cho người mới bắt đầu học lúc mấy giờ?", ["6:45 tối", "7:15 tối", "7:45 tối"], 0, "At quarter to seven là bảy giờ kém mười lăm, tức 6:45. To là “kém”, nên đừng chọn 7:15."),
      fill("a1-n06-r4", "Câu lạc bộ nói tiếng Anh vào sáng thứ Bảy: The speaking club is ___ Saturday mornings.", ["on"], "Có tên thứ đi kèm buổi thì dùng on: on Saturday mornings (các sáng thứ Bảy)."),
      mc("a1-n06-r5", "Trung tâm đóng cửa vào lúc nào?", ["Chủ nhật và một tuần dịp Tết", "Thứ Bảy và cả tháng Chín", "Chỉ vào tối thứ Sáu"], 0, "We are closed on Sundays; the centre is closed for one week at Tet."),
    ],
  }),
  task: task({
    prompt: "Hãy viết một tin nhắn 5–7 câu cho một người bạn nước ngoài, kể lịch tuần này của bạn: có cuộc hẹn gì, vào thứ mấy, lúc mấy giờ, và sinh nhật bạn vào ngày nào. Viết số bằng chữ.",
    hints: [
      "Dùng on + thứ và at + giờ: on Monday at nine o'clock.",
      "Thử nói giờ với past hoặc to: half past two, quarter to five.",
      "Nói ngày bằng số thứ tự: the fifth of May.",
      "Viết hoa tên thứ và tháng.",
    ],
    model: "Hi Tom. Here's my week. I have a meeting on Monday at nine o'clock. My appointment with the dentist is on Wednesday at half past two. On Friday evening, I have dinner with my family. My birthday is on the twentieth of October. See you on Saturday!",
    checklist: [
      "Thứ và ngày tháng dùng on, giờ dùng at (nếu có tháng đứng một mình thì dùng in)",
      "Có ít nhất một giờ nói bằng past hoặc to",
      "Ngày dùng số thứ tự (the twentieth, không viết the twenty)",
      "Tên thứ và tháng viết hoa",
      "Số viết bằng chữ, không dùng chữ số",
    ],
    minWords: 30,
  }),
});
