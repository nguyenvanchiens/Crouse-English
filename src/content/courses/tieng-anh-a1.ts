import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../builders";
import nNgheNghiepVaQuocTich from "../lessons/a1/nghe-nghiep-va-quoc-tich";
import nThoiGianVaLichHen from "../lessons/a1/thoi-gian-va-lich-hen";
import nSoThich from "../lessons/a1/so-thich";
import nHoiDapHangNgay from "../lessons/a1/hoi-dap-hang-ngay";
import nMuaSamVaMauSac from "../lessons/a1/mua-sam-va-mau-sac";
import nToiCoThe from "../lessons/a1/toi-co-the";
import nMoTaNguoi from "../lessons/a1/mo-ta-nguoi";
import nThanhPhoCuaToi from "../lessons/a1/thanh-pho-cua-toi";
import nDangLamGi from "../lessons/a1/dang-lam-gi";
import nCuoiTuanVuaRoi from "../lessons/a1/cuoi-tuan-vua-roi";
import { FINAL_EXTRA_TIENG_ANH_A1 } from "../banks/final-tieng-anh-a1";
import { chapter, finalBank } from "../review";
import type { Course } from "../types";

const chaoHoi = lesson({
  slug: "chao-hoi-va-gioi-thieu",
  title: "Chào hỏi và giới thiệu",
  minutes: 25,
  lecture: {
    title: "Động từ to be: am, is, are",
    blocks: [
      p("Hãy hình dung bạn bước vào phòng họp có đối tác nước ngoài, hoặc một vị khách du lịch ở phố cổ bắt chuyện với bạn. Những câu đầu tiên bạn nói gần như chắc chắn là tên, nghề và quê: I'm Lan. I'm a nurse. I'm from Hanoi. Cả ba câu đều dựa vào một động từ duy nhất: **to be**."),
      p("**To be** giống chữ “là” trong tiếng Việt, nhưng có hai điểm khác. Thứ nhất, nó đổi hình thức theo chủ ngữ: **am**, **is** hoặc **are**. Thứ hai, tiếng Việt hay bỏ chữ “là” (“Tôi sinh viên”, “Tôi người Huế”), còn trong câu tiếng Anh chuẩn (nhất là khi viết) thì **không được bỏ**. Văn nói rất thân mật đôi khi rút gọn (You ready?), nhưng người học đừng bắt chước."),
      table(
        ["Chủ ngữ", "to be", "Viết tắt", "Ví dụ"],
        ["I (tôi)", "am", "I'm", "I'm Lan."],
        ["you (bạn)", "are", "you're", "You're a student."],
        ["he / she / it", "is", "he's / she's / it's", "She's my teacher."],
        ["we / they", "are", "we're / they're", "We're from Vietnam."],
      ),
      p("Muốn hỏi, đảo **to be** lên trước chủ ngữ. Muốn phủ định, thêm **not** sau **to be**. Câu trả lời ngắn chỉ cần Yes hoặc No, chủ ngữ và to be."),
      table(
        ["Loại câu", "I", "he / she / it", "you / we / they"],
        ["Khẳng định", "I'm a student.", "She's a doctor.", "They're from Hue."],
        ["Phủ định", "I'm not late.", "He isn't here.", "We aren't busy."],
        ["Câu hỏi", "Am I late?", "Is she your sister?", "Are you ready?"],
        ["Trả lời ngắn", "Yes, you are. / No, you aren't.", "Yes, she is. / No, she isn't.", "Yes, we are. / No, we aren't."],
      ),
      ex("Are you a teacher?", "Bạn có phải là giáo viên không?"),
      ex("No, I'm not. I'm a nurse.", "Không, tôi không phải. Tôi là y tá.", "Sau câu trả lời No, người bản xứ thường nói luôn thông tin đúng để câu chuyện tiếp tục."),
      ex("This is Hoa. She's my colleague.", "Đây là Hoa. Cô ấy là đồng nghiệp của tôi.", "Khi giới thiệu một người với người khác, câu đầu tiên dùng This is..., sau đó mới dùng He's hoặc She's."),
      ex("Nice to meet you, Minh.", "Rất vui được gặp bạn, Minh.", "Câu quen thuộc khi gặp ai đó lần đầu."),
      p("Ở quầy lễ tân khách sạn, ngân hàng hay khi đăng ký một lớp học, người ta sẽ hỏi **How do you spell that?** hoặc **How do you spell your name?** (Tên bạn đánh vần thế nào?). Các bạn cứ học thuộc cả câu như một câu chào; chữ do trong câu hỏi này sẽ được giải thích ở bài Một ngày của tôi. Trả lời bằng cách đọc **từng chữ cái**, ngắt nhẹ giữa các chữ: L-A-N, H-O-A."),
      table(
        ["Chữ cái", "Đọc là", "Người Việt hay nhầm với"],
        ["A", "/eɪ/ (ây)", "E"],
        ["E", "/iː/ (i)", "I"],
        ["I", "/aɪ/ (ai)", "A"],
        ["G", "/dʒiː/ (chi)", "J"],
        ["J", "/dʒeɪ/ (chây)", "G"],
        ["H", "/eɪtʃ/ (ếch)", "đọc “hát” như tiếng Việt"],
        ["W", "/ˈdʌb.əl.juː/ (đắp-bồ-diu)", "đọc “vê kép” như tiếng Việt"],
      ),
      tip("Khi nói, người bản xứ gần như luôn dùng dạng viết tắt: **I'm**, **you're**, **she's**. Dùng dạng đầy đủ nghe khá cứng. Đọc I'm thành một âm tiết /aɪm/ và nhớ ngậm môi ở cuối; she's đọc /ʃiːz/, âm cuối rung nhẹ như tiếng ong."),
      mistake("I from Vietnam.", "I'm from Vietnam.", "Tiếng Việt nói “Tôi từ Việt Nam” hay “Tôi người Việt Nam” mà không cần chữ “là”. Tiếng Anh thì câu nào cũng phải có động từ, nên không được bỏ to be."),
      mistake("She are my friend.", "She is my friend.", "Chữ “là” trong tiếng Việt không bao giờ đổi theo người nói, nên người Việt quen dùng một dạng cho tất cả. Trong tiếng Anh, he, she, it luôn đi với is."),
      mistake("Yes, I'm.", "Yes, I am.", "Dạng viết tắt không đứng ở cuối câu. Trả lời ngắn phải dùng dạng đầy đủ: Yes, I am. Yes, she is. Riêng câu phủ định thì viết tắt được: No, I'm not."),
      teacher("Khi đứng lớp, tôi thấy bỏ to be là lỗi “lì” nhất của người Việt, kể cả người đã học lên đại học. Cách chữa của tôi rất đơn giản: các bạn **mỗi sáng đứng trước gương nói ba câu về mình**, một câu về tên, một câu về nghề, một câu về quê, và gõ nhẹ ngón tay lên bàn mỗi khi nói am, is, are. Tay gõ mà miệng chưa nói ra to be là biết ngay mình vừa bỏ sót. Làm liền hai tuần, to be sẽ tự bật ra."),
      summary(
        "**To be** có ba dạng: I **am**; he, she, it **is**; you, we, they **are**.",
        "Câu tiếng Anh chuẩn không bỏ to be: **I'm from Vietnam**, không nói I from Vietnam.",
        "Câu hỏi đảo to be lên trước chủ ngữ (**Are you** a student?); phủ định thêm **not** sau to be (I'm not, he isn't, we aren't).",
        "Trả lời ngắn dùng dạng đầy đủ: **Yes, I am.** Không nói Yes, I'm.",
        "Giới thiệu người khác: **This is** Hoa. **She's** my friend.",
      ),
    ],
  },
  words: [
    word("hello", "/heˈləʊ/", "xin chào", "Hello, I'm Lan.", "hel|lo", 1),
    word("name", "/neɪm/", "tên", "My name is Minh.", "name", 0),
    word("student", "/ˈstjuː.dənt/", "sinh viên, học sinh", "I'm a student.", "stu|dent", 0, "Nhớ giữ âm /t/ ở cuối, đừng nuốt mất."),
    word("teacher", "/ˈtiː.tʃə/", "giáo viên", "She's my teacher.", "tea|cher", 0),
    word("country", "/ˈkʌn.tri/", "đất nước", "What country are you from?", "coun|try", 0),
    word("nice", "/naɪs/", "vui, dễ chịu", "Nice to meet you.", "nice", 0, "Kết thúc bằng âm /s/, không đọc thành “nai”."),
    word("friend", "/frend/", "bạn bè", "This is my friend, Hoa.", "friend", 0),
  ],
  exercises: [
    mc("a1-1-1", "I ___ from Vietnam.", ["is", "am", "are"], 1, "Với I ta luôn dùng am."),
    mc("a1-1-2", "They ___ students.", ["are", "is", "am"], 0, "They đi với are."),
    fill("a1-1-3", "She ___ my teacher.", ["is", "'s"], "He, she, it đi với is."),
    fill("a1-1-4", "Nice to ___ you.", ["meet", "see"], "Lần đầu gặp: Nice to meet you. Gặp lại người quen: Nice to see you."),
    reorder("a1-1-5", "Where are you from?", "Hỏi quê quán: Where + are + you + from? Giới từ from đứng ở cuối câu, không đứng liền với where như tiếng Việt “từ đâu”."),
    reorder("a1-1-6", "How do you spell your name?", "Câu hỏi cố định khi cần ghi tên: How do you spell + your name? Trả lời bằng cách đọc từng chữ cái: L-A-N."),
    listen("a1-1-7", "Are you a student?", ["Bạn có phải là sinh viên không?", "Bạn là giáo viên à?", "Bạn đến từ đâu?"], 0, "Are you...? là câu hỏi có hay không với to be; student là sinh viên."),
    listen("a1-1-8", "He's from Japan.", ["Anh ấy đến từ Nhật Bản.", "Cô ấy đến từ Nhật Bản.", "Anh ấy đang ở Nhật Bản."], 0, "He's là he is (anh ấy); from là đến từ, không phải đang ở."),
    correct("a1-1-9", "My sister a student.", ["My sister is a student.", "My sister's a student."], "Câu thiếu động từ to be. Tiếng Việt nói “Em gái tôi sinh viên” được, nhưng tiếng Anh phải có is: My sister is a student."),
    correct("a1-1-10", "Tom are my teacher.", ["Tom is my teacher.", "Tom's my teacher."], "Tom là một người (he) nên đi với is, không dùng are."),
  ],
  speaking: [
    say("Hello, my name is Lan.", "Xin chào, tên tôi là Lan."),
    say("I'm a student from Vietnam.", "Tôi là sinh viên đến từ Việt Nam."),
    say("Nice to meet you.", "Rất vui được gặp bạn."),
  ],
  freeSpeaking: free(
    "Tell me about yourself, please.",
    "Hãy tự giới thiệu bằng lời của bạn: tên, quê, bạn làm gì, một điều bạn không phải, rồi giới thiệu một người bạn.",
    "Hi, I'm Lan. I'm from Hue, but I'm a student in Hanoi now. I'm not a nurse. This is Nam. He's my friend. He's a teacher.",
  ),
  dialogueQuestions: [
    listenQ("a1-1-d1", "Hương đến từ đâu?", "Are you from Hanoi? No, I'm not. I'm from Hue.", ["Hà Nội", "Huế", "London"], 1, "Hương nói No, I'm not. I'm from Hue: cô ấy không phải người Hà Nội mà đến từ Huế."),
    mc("a1-1-d2", "Nam làm nghề gì?", ["Giáo viên", "Học viên", "Y tá"], 2, "Hương nói: No, he isn't. He's a nurse. Nam không phải học viên, anh ấy là y tá."),
    listenQ("a1-1-d3", "Thầy Tom đến từ đâu?", "I'm from London. Sorry, how do you spell your name?", ["London", "Huế", "Hà Nội"], 0, "Thầy Tom nói I'm from London."),
  ],
  reading: reading({
    title: "Thành viên mới của câu lạc bộ",
    text: `New members this week

Hello, everyone! My name is Thu. I'm from Hai Phong, but I'm a student in Hanoi now. I'm not a teacher. I'm a new member of the English club.

This is Kenji. He's from Japan. He's a teacher at a school in Hanoi. He's very friendly.

And this is Linh. She's a nurse. She isn't from Hanoi. She's from Can Tho. Linh and Kenji are friends.

Are you a new member too? Welcome to the club!`,
    glossary: [
      ["member", "thành viên"],
      ["this week", "tuần này"],
      ["everyone", "mọi người"],
      ["now", "bây giờ"],
      ["friendly", "thân thiện"],
      ["welcome to", "chào mừng đến với"],
    ],
    questions: [
      mc("a1-1-r1", "Bài đọc này giới thiệu điều gì?", ["Ba thành viên mới của câu lạc bộ tiếng Anh", "Một trường dạy tiếng Nhật ở Hà Nội", "Gia đình của Thu ở Hải Phòng"], 0, "Tiêu đề New members this week và cả ba đoạn đều giới thiệu người mới: Thu, Kenji và Linh."),
      mc("a1-1-r2", "Thu đến từ đâu?", ["Hà Nội", "Hải Phòng", "Cần Thơ"], 1, "Thu viết: I'm from Hai Phong, but I'm a student in Hanoi now. Cô ấy đến từ Hải Phòng, bây giờ học ở Hà Nội."),
      mc("a1-1-r3", "Kenji làm nghề gì?", ["Y tá", "Sinh viên", "Giáo viên"], 2, "He's a teacher at a school in Hanoi."),
      fill("a1-1-r4", "Hoàn thành câu theo bài đọc: Linh is a ___.", ["nurse"], "Bài đọc viết: She's a nurse."),
      mc("a1-1-r5", "Câu nào đúng theo bài đọc?", ["Thu là giáo viên.", "Linh và Kenji là bạn bè.", "Linh đến từ Hà Nội."], 1, "Linh and Kenji are friends. Thu viết I'm not a teacher, còn Linh isn't from Hanoi."),
    ],
  }),
  dialogue: dialogue(
    "Buổi đầu ở câu lạc bộ tiếng Anh",
    "Hương đến câu lạc bộ tiếng Anh lần đầu, đi cùng bạn là Nam. Thầy Tom, giáo viên người Anh, ra chào và hỏi tên, quê của Hương.",
    { A: "Thầy Tom, giáo viên", B: "Hương, học viên mới" },
    A("Hello! Are you a new student?", "Xin chào! Bạn là học viên mới à?"),
    B("Yes, I am. My name is Huong.", "Vâng, đúng vậy. Tên em là Hương."),
    A("Nice to meet you, Huong. I'm Tom. I'm your teacher.", "Rất vui được gặp bạn, Hương. Tôi là Tom. Tôi là giáo viên của bạn."),
    B("Nice to meet you too. Where are you from?", "Em cũng rất vui được gặp thầy. Thầy đến từ đâu ạ?"),
    A("I'm from London. Sorry, how do you spell your name?", "Tôi đến từ London. Xin lỗi, tên bạn đánh vần thế nào?"),
    B("H-U-O-N-G. Huong.", "H-U-O-N-G. Hương."),
    A("Thank you. Are you from Hanoi?", "Cảm ơn bạn. Bạn là người Hà Nội à?"),
    B("No, I'm not. I'm from Hue. And this is Nam. He's my friend.", "Không ạ. Em đến từ Huế. Còn đây là Nam. Anh ấy là bạn em."),
    A("Nice to meet you, Nam. Huong, is Nam a student too?", "Rất vui được gặp Nam. Hương này, Nam cũng là học viên à?"),
    B("No, he isn't. He's a nurse.", "Không ạ. Anh ấy là y tá."),
    A("Great. Welcome to the club, Huong and Nam!", "Tuyệt quá. Chào mừng Hương và Nam đến với câu lạc bộ!"),
  ),
  task: task({
    prompt: "Bạn vừa gặp một người bạn nước ngoài. Hãy viết 6–8 câu ngắn tự giới thiệu: tên, quê, bạn làm gì, một điều bạn không phải, rồi giới thiệu một người bạn đi cùng.",
    hints: [
      "Bắt đầu bằng Hello, my name is... hoặc I'm...",
      "Nói quê bằng I'm from...",
      "Giới thiệu người khác: This is... He's... hoặc She's...",
      "Thêm một câu phủ định với not, ví dụ I'm not a teacher.",
    ],
    model: "Hello, my name is Minh. I'm from Da Nang. I'm a student. I'm not a teacher. This is Hoa. She's my friend. She's from Hanoi.",
    checklist: [
      "Mỗi câu đều có am, is hoặc are (hoặc dạng viết tắt I'm, she's)",
      "Dùng đúng: I am; he, she is; you, we, they are",
      "Có ít nhất một câu phủ định với not",
      "Có một câu giới thiệu người khác bằng This is...",
      "Tên riêng và chữ đầu câu viết hoa",
    ],
    minWords: 20,
  }),
});

const giaDinh = lesson({
  slug: "gia-dinh-va-do-vat",
  title: "Gia đình và đồ vật",
  minutes: 28,
  lecture: {
    title: "a/an, số nhiều, this/that và my/your",
    blocks: [
      p("Khi cho đồng nghiệp nước ngoài xem ảnh gia đình trên điện thoại, hay dẫn bạn về nhà chơi, bạn sẽ cần những câu như: This is my mother. These are my two brothers. Bài này gom bốn thứ nhỏ nhưng dùng hằng ngày: **a/an**, **số nhiều**, **this/that** và **my/your**. Để nói ai **có** cái gì, các bạn dùng **have** (I have, you have, we have, they have) và **has** với he, she, it: She has a bag. Cách chia động từ này sẽ được học kỹ ở bài Một ngày của tôi."),
      p("Trước danh từ số ít đếm được, tiếng Anh luôn cần một từ đứng trước (a/an, the, my, this…); bài này học **a** hoặc **an** (một). Dùng **a** trước **âm** phụ âm và **an** trước **âm** nguyên âm. Hãy nghe âm đầu, đừng nhìn chữ cái."),
      table(
        ["Dùng", "Khi âm đầu là", "Ví dụ"],
        ["a", "phụ âm", "a bag, a phone, a university"],
        ["an", "nguyên âm", "an umbrella, an egg, an hour"],
      ),
      ex("I have a bag and an umbrella.", "Tôi có một cái túi và một cái ô."),
      tip("Nhìn âm chứ không nhìn chữ: **a university** (âm đầu /j/ là phụ âm) nhưng **an hour** (chữ h câm, âm đầu là nguyên âm /aʊ/)."),
      mistake("My mother is teacher.", "My mother is a teacher.", "Tiếng Việt không có mạo từ, nói “Mẹ tôi là giáo viên” là đủ. Tiếng Anh bắt buộc có một từ đứng trước danh từ số ít đếm được; khi nói nghề nghiệp, từ đó là a/an."),
      p("Khi có từ hai vật trở lên, danh từ phải đổi sang **số nhiều**. Phần lớn chỉ cần thêm **-s**, nhưng có vài quy tắc và vài từ bất quy tắc cần học thuộc."),
      table(
        ["Quy tắc", "Số ít", "Số nhiều"],
        ["Thường: thêm -s", "book, phone", "books, phones"],
        ["Tận cùng -s, -x, -ch, -sh: thêm -es", "box, watch", "boxes, watches"],
        ["Phụ âm + y: đổi y thành -ies", "baby, family", "babies, families"],
        ["Bất quy tắc", "child, man, woman, person", "children, men, women, people"],
      ),
      mistake("I have two book.", "I have two books.", "Tiếng Việt nói “hai quyển sách” mà danh từ không đổi, nhưng tiếng Anh bắt buộc thêm -s khi có từ hai vật trở lên."),
      p("Khi chỉ vào người hay vật, dùng **this, that, these, those**. Gần tay mình là this và these, xa hơn là that và those. Nhớ rằng these và those là số nhiều nên đi với **are**."),
      table(
        ["", "Ở gần", "Ở xa"],
        ["Số ít", "this (cái này)", "that (cái kia, cái đó)"],
        ["Số nhiều", "these (những cái này)", "those (những cái kia)"],
      ),
      ex("Are those your keys? Yes, they are.", "Kia có phải chìa khóa của bạn không? Đúng vậy.", "Trả lời câu hỏi có these hoặc those, ta dùng they: Yes, they are."),
      table(
        ["Chủ ngữ", "Tính từ sở hữu", "Ví dụ"],
        ["I", "my", "This is my phone."],
        ["you", "your", "Is that your bag?"],
        ["he", "his", "His name is Nam."],
        ["she", "her", "Her name is Hoa."],
        ["we", "our", "These are our children."],
        ["they", "their", "Those are their books."],
        ["tên người, danh từ chỉ người", "thêm 's", "This is Lan's phone. My brother's name is Nam."],
      ),
      ex("This is my brother. His name is Nam.", "Đây là anh trai tôi. Tên anh ấy là Nam.", "Tính từ sở hữu luôn đứng trước danh từ: my brother, không nói brother my."),
      mistake("She is my sister. His name is Hoa.", "She is my sister. Her name is Hoa.", "Tiếng Việt nói “tên bạn ấy” cho cả nam lẫn nữ, nên người Việt hay lẫn his và her. His dùng cho nam, her dùng cho nữ."),
      p("Tiếng Việt nói “tôi” ở mọi vị trí: tôi yêu mẹ, mẹ yêu tôi, quà cho tôi. Tiếng Anh thì khác: khi người hay vật đứng **sau động từ** hoặc **sau giới từ** (for, with, at, to), ta dùng **đại từ tân ngữ**. Vì vậy không nói “for I”, “with she”, mà nói **for me**, **with her**. Lưu ý **her** vừa là “của cô ấy” (her name) vừa là tân ngữ (with her)."),
      table(
        ["Chủ ngữ (trước động từ)", "Tân ngữ (sau động từ, giới từ)", "Ví dụ"],
        ["I", "me", "Is this bag for me?"],
        ["you", "you", "This phone is for you."],
        ["he", "him", "Nam is my brother. I'm with him now."],
        ["she", "her", "Look at her. She's my sister."],
        ["it", "it", "This is my umbrella. I have it in my bag."],
        ["we", "us", "Come with us!"],
        ["they", "them", "These are my books. I have them here."],
      ),
      teacher("Học viên người Việt của tôi hay sai số nhiều không phải vì không biết quy tắc, mà vì tai không nghe thấy âm -s. Tiếng Việt không có âm cuối /s/ hay /z/, nên miệng cũng lười đọc. Vì vậy tôi luôn dặn các bạn học viên **đọc âm -s thật rõ, thậm chí hơi quá lên**: books, bags, phones. Miệng quen đọc thì tay hết quên viết. Bài tập nhỏ mỗi ngày: các bạn nhìn quanh phòng và đếm to mọi thứ mình thấy, two chairs, three windows, four pens."),
      summary(
        "Danh từ số ít đếm được luôn cần một từ đứng trước (a/an, the, my, this…). Nói “một”: **a** (trước âm phụ âm) hoặc **an** (trước âm nguyên âm): a bag, an umbrella, an hour.",
        "Từ hai vật trở lên thì thêm **-s/-es** hoặc dùng dạng bất quy tắc: two books, two boxes, three children.",
        "**This, these** chỉ vật ở gần; **that, those** chỉ vật ở xa. These và those đi với **are**.",
        "**His** cho nam, **her** cho nữ, **their** cho nhiều người; tính từ sở hữu đứng trước danh từ: my brother.",
        "Nói ai có gì: I, you, we, they **have**; he, she, it **has**.",
        "Sau động từ và giới từ dùng **me, you, him, her, it, us, them**: for me, with him (không nói for I).",
      ),
    ],
  },
  words: [
    word("family", "/ˈfæm.əl.i/", "gia đình", "I have a big family.", "fam|i|ly", 0, "Người bản xứ thường nói nhanh thành hai âm tiết: /ˈfæm.li/."),
    word("mother", "/ˈmʌð.ə/", "mẹ", "My mother is a teacher.", "moth|er", 0, "Âm /ð/ đặt đầu lưỡi giữa hai hàm răng, đừng đọc thành /d/ hay /z/."),
    word("father", "/ˈfɑː.ðə/", "bố", "His father is a doctor.", "fa|ther", 0),
    word("brother", "/ˈbrʌð.ə/", "anh trai, em trai", "These are my two brothers.", "broth|er", 0),
    word("sister", "/ˈsɪs.tə/", "chị gái, em gái", "Her sister is a student.", "sis|ter", 0),
    word("bag", "/bæɡ/", "cái túi, cặp", "Is this your bag?", "bag", 0, "Nhớ giữ âm /ɡ/ ở cuối để không nghe nhầm thành back."),
    word("umbrella", "/ʌmˈbrel.ə/", "cái ô, cái dù", "I have an umbrella in my bag.", "um|brel|la", 1),
    word("phone", "/fəʊn/", "điện thoại", "That is his phone.", "phone", 0),
  ],
  exercises: [
    mc("a1-2-1", "This is ___ umbrella.", ["a", "an", "two"], 1, "Umbrella bắt đầu bằng âm nguyên âm /ʌ/ nên dùng an."),
    mc("a1-2-2", "I have two ___.", ["box", "boxs", "boxes"], 2, "Danh từ tận cùng bằng -x thêm -es."),
    fill("a1-2-3", "She is my sister. ___ name is Hoa.", ["Her", "her"], "Chủ ngữ là she (nữ) nên dùng her."),
    fill("a1-2-4", "They have three ___. (child)", ["children"], "Child là danh từ bất quy tắc: số nhiều là children."),
    reorder("a1-2-5", "My parents have three children.", "Tính từ sở hữu my đứng trước danh từ; child có số nhiều bất quy tắc là children."),
    reorder("a1-2-6", "Where are my books?", "Books là số nhiều nên dùng are; câu hỏi đảo are lên trước chủ ngữ my books."),
    listen("a1-2-7", "That is Nam's phone.", ["Đây là điện thoại của Nam.", "Đó là điện thoại của Nam.", "Đó là Nam và điện thoại của anh ấy."], 1, "That là cái ở xa (đó, kia); Nam's phone là điện thoại của Nam: 's sau tên người chỉ sở hữu."),
    listen("a1-2-8", "These are our children.", ["Đây là con của họ.", "Kia là các con của chúng tôi.", "Đây là các con của chúng tôi."], 2, "These là những cái ở gần (đây); our là của chúng tôi."),
    correct("a1-2-9", "Is this bag for I?", ["Is this bag for me?"], "Sau giới từ for phải dùng đại từ tân ngữ: for me, không nói for I."),
    correct("a1-2-10", "I have three sister.", ["I have three sisters."], "Có từ hai người trở lên thì danh từ phải thêm -s: three sisters."),
  ],
  speaking: [
    say("This is my mother.", "Đây là mẹ tôi."),
    say("These are my two brothers.", "Đây là hai anh trai của tôi."),
    say("She is my sister. Her name is Lan.", "Cô ấy là chị gái tôi. Tên chị ấy là Lan."),
  ],
  freeSpeaking: free(
    "Tell me about your family, please.",
    "Hãy nói về gia đình bạn: có những ai, tên và nghề của họ, và gia đình bạn có gì.",
    "This is my family. My father is a driver, and my mother is a nurse. I have a sister. Her name is Lan. She's a student. We have a small house and two cats.",
  ),
  dialogueQuestions: [
    listenQ("a1-2-d1", "Mẹ của Mai làm nghề gì?", "Is your mother a teacher? Yes, she is. And my father is a doctor.", ["Bác sĩ", "Giáo viên", "Y tá"], 1, "Anna hỏi Is your mother a teacher? và Mai trả lời Yes, she is. Người làm bác sĩ là bố của Mai."),
    mc("a1-2-d2", "Cô gái tên Linh trong ảnh là ai?", ["Em gái của Mai", "Bạn của em trai Mai", "Đồng nghiệp của Anna"], 1, "Mai nói: She's my brother's friend. Her name is Linh."),
    mc("a1-2-d3", "Ô của Anna ở đâu?", ["Trong túi của Anna", "Trên bàn của Mai", "Ở nhà Tom"], 0, "Anna nói: My umbrella is in my bag. Cái ô trên bàn có lẽ là của Tom."),
  ],
  reading: reading({
    title: "Tin nhắn gửi ảnh gia đình",
    text: `Hi Anna,

Thanks for your message. Here is a photo of my family for you. This is my father, Binh. He's a doctor. This is my mother, Hanh. She's a teacher.

These are my two brothers, Nam and Duc. They're students. Nam has a big dog, Lucky.

And this is me with my grandmother. She isn't in Hanoi. She has a small house in Nam Dinh. She's very kind.

Is that your family in your photo? Please send me a photo of them!

Love,
Mai`,
    glossary: [
      ["thanks for your message", "cảm ơn tin nhắn của bạn"],
      ["here is", "đây là (khi đưa cho ai cái gì)"],
      ["photo", "bức ảnh"],
      ["dog", "con chó"],
      ["grandmother", "bà"],
      ["kind", "tốt bụng"],
      ["send", "gửi"],
    ],
    questions: [
      mc("a1-2-r1", "Mai viết tin nhắn này để làm gì?", ["Gửi ảnh và giới thiệu gia đình mình", "Hỏi đường đến nhà Anna", "Mời Anna đến nhà bà"], 0, "Mai viết Here is a photo of my family for you, rồi giới thiệu từng người trong ảnh."),
      mc("a1-2-r2", "Bố của Mai làm nghề gì?", ["Giáo viên", "Bác sĩ", "Sinh viên"], 1, "This is my father, Binh. He's a doctor."),
      fill("a1-2-r3", "Hoàn thành câu theo bài đọc: Nam and Duc are Mai's ___.", ["brothers"], "These are my two brothers, Nam and Duc. Hai người nên brother thêm -s."),
      mc("a1-2-r4", "Bà của Mai có một ngôi nhà nhỏ ở đâu?", ["Hà Nội", "Đà Nẵng", "Nam Định"], 2, "She isn't in Hanoi. She has a small house in Nam Dinh."),
      mc("a1-2-r5", "Mai muốn Anna làm gì?", ["Gọi điện cho Mai", "Gửi ảnh gia đình của Anna", "Chăm sóc con chó Lucky"], 1, "Please send me a photo of them! Them ở đây là gia đình của Anna."),
    ],
  }),
  dialogue: dialogue(
    "Xem ảnh gia đình giờ nghỉ trưa",
    "Giờ nghỉ trưa ở văn phòng, Mai cho Anna, đồng nghiệp người Úc, xem ảnh gia đình trên điện thoại.",
    { A: "Anna, đồng nghiệp", B: "Mai" },
    A("Is that your family in the photo?", "Kia là gia đình bạn trong ảnh à?"),
    B("Yes, it is. This is my mother, and this is my father.", "Đúng rồi. Đây là mẹ tôi, còn đây là bố tôi."),
    A("Oh, nice! Is your mother a teacher?", "Ồ, hay quá! Mẹ bạn là giáo viên à?"),
    B("Yes, she is. And my father is a doctor.", "Đúng vậy. Còn bố tôi là bác sĩ."),
    A("And these two boys? Are they your brothers?", "Còn hai cậu bé này? Họ là em trai bạn à?"),
    B("Yes, they are. Their names are Nam and Duc. They're students.", "Đúng vậy. Tên các em ấy là Nam và Đức. Các em ấy là học sinh."),
    A("Is that girl your sister?", "Cô gái kia là em gái bạn à?"),
    B("No, she isn't. She's my brother's friend. Her name is Linh.", "Không phải. Cô ấy là bạn của em trai tôi. Tên cô ấy là Linh."),
    A("You have a big family!", "Bạn có một gia đình đông người thật!"),
    B("Yes, it's a big family. Oh, is this your umbrella?", "Vâng, gia đình tôi đông lắm. À, đây có phải ô của bạn không?"),
    A("No, it isn't. My umbrella is in my bag. Maybe it's Tom's umbrella.", "Không phải. Ô của tôi ở trong túi. Có lẽ đó là ô của Tom."),
  ),
  task: task({
    prompt: "Hãy viết 6–8 câu giới thiệu gia đình bạn cho một người bạn nước ngoài, như khi cho họ xem ảnh trên điện thoại.",
    hints: [
      "Dùng This is my... cho một người, These are my... cho nhiều người.",
      "Nói nghề với a hoặc an: My father is a doctor.",
      "Nói tên bằng his, her hoặc their: Her name is...",
      "Có ít nhất một danh từ số nhiều: two sisters, three children.",
    ],
    model: "This is my father. His name is Hung, and he is a doctor. This is my mother. Her name is Thu, and she is a teacher. These are my two sisters. Their names are Lan and Hoa. We have a small house and a cat.",
    checklist: [
      "Có a hoặc an trước nghề nghiệp và danh từ số ít",
      "Danh từ từ hai trở lên có -s hoặc dạng bất quy tắc",
      "This đi với is, these đi với are",
      "Dùng his cho nam, her cho nữ, their cho nhiều người",
      "Tính từ sở hữu đứng trước danh từ (my father, không viết father my)",
    ],
    minWords: 25,
  }),
});

const soTuoi = lesson({
  slug: "so-tuoi-va-so-dien-thoai",
  title: "Số, tuổi và số điện thoại",
  minutes: 25,
  lecture: {
    title: "Số đếm từ 1 đến 100",
    blocks: [
      p("Người Việt hỏi tuổi từ rất sớm để biết xưng anh, chị hay em. Còn khi đi làm, bạn phải đọc số điện thoại cho khách, nói giá tiền, số phòng, số tầng. Chỉ cần nói 15 thành 50 là có thể hỏng cả một cuộc hẹn. Bài này giúp bạn **đọc số chắc chắn** và **hỏi tuổi đúng cách**."),
      p("Các số từ 1 đến 12 cần học thuộc. Từ 13 đến 19 thêm đuôi **-teen**, còn các số tròn chục từ 20 đến 90 thêm đuôi **-ty**. Các số như 21, 35, 99 ghép chục với đơn vị bằng dấu gạch nối: twenty-one, thirty-five, ninety-nine."),
      table(
        ["Nhóm số", "Quy tắc", "Ví dụ"],
        ["1 đến 12", "học thuộc", "one, two, three, eleven, twelve"],
        ["13 đến 19", "thêm -teen", "thirteen, fourteen, fifteen, sixteen"],
        ["20 đến 90 (tròn chục)", "thêm -ty", "twenty, thirty, forty, fifty"],
        ["21 đến 99", "chục + gạch nối + đơn vị", "twenty-one, forty-five, ninety-nine"],
        ["100", "one hundred hoặc a hundred", "one hundred"],
      ),
      mistake("fourty, fiveteen", "forty, fifteen", "Người Việt quen viết theo mặt chữ của số gốc nên giữ chữ u của four trong forty và giữ nguyên five trong fifteen. Thật ra forty bỏ chữ u (dù fourteen vẫn giữ), còn five đổi thành fif- trong fifteen và fifty."),
      table(
        ["Số", "Cách viết", "Trọng âm"],
        ["13", "thirteen", "thir-TEEN (nhấn âm sau)"],
        ["30", "thirty", "THIR-ty (nhấn âm trước)"],
        ["14", "fourteen", "four-TEEN (nhấn âm sau)"],
        ["40", "forty", "FOR-ty (nhấn âm trước)"],
        ["15", "fifteen", "fif-TEEN (nhấn âm sau)"],
        ["50", "fifty", "FIF-ty (nhấn âm trước)"],
      ),
      tip("Cặp 13 và 30 rất dễ nghe nhầm. Với **-teen**, nhấn mạnh và kéo dài âm cuối /tiːn/, nhớ đọc rõ âm /n/. Với **-ty**, nhấn âm đầu và đọc âm cuối thật ngắn."),
      p("Để hỏi tuổi, dùng **How old are you?** Trả lời bằng động từ to be cộng số tuổi, có thể thêm years old hoặc không. Hỏi tuổi người khác thì đổi to be theo chủ ngữ: **How old is** your mother? **How old are** your children?"),
      ex("How old are you? I'm twenty-five.", "Bạn bao nhiêu tuổi? Tôi hai mươi lăm tuổi."),
      ex("My son is eight years old.", "Con trai tôi tám tuổi.", "Đã nói years thì phải có old: không nói “He is eight years.”"),
      ex("How old is your mother? She's sixty.", "Mẹ bạn bao nhiêu tuổi? Mẹ tôi sáu mươi tuổi.", "Your mother là she nên dùng is. Câu trả lời ngắn gọn chỉ cần She's sixty."),
      mistake("I have 25 years old.", "I'm 25 years old.", "Tiếng Việt nói “tôi có 25 tuổi”, nhưng tiếng Anh dùng to be (am, is, are), không dùng have."),
      mistake("How many years old are you?", "How old are you?", "Đừng dịch từng chữ “bao nhiêu tuổi”. Hỏi tuổi chỉ cần How old."),
      p("Số điện thoại được đọc **từng chữ số một**, ngắt nghỉ theo nhóm. Số 0 thường đọc là **oh** (kiểu Anh) hoặc zero. Hai chữ số giống nhau đứng liền nhau có thể đọc là **double**: 55 là double five."),
      ex("What's your phone number? It's oh nine oh four, double five six, seven eight one.", "Số điện thoại của bạn là gì? Là 0904 556 781.", "Ngắt nghỉ sau mỗi nhóm số giúp người nghe kịp ghi lại."),
      ex("What's your email address? It's lan dot nguyen at gmail dot com.", "Địa chỉ email của bạn là gì? Là lan.nguyen@gmail.com.", "Dấu chấm đọc là dot, @ đọc là at. Tên riêng lạ thì đánh vần từng chữ cái như đã học ở bài Chào hỏi và giới thiệu."),
      teacher("Tôi chưa gặp lớp nào không nhầm 13 với 30. Cách luyện của tôi: các bạn viết hai số lên hai tờ giấy, nhờ người nhà đọc ngẫu nhiên, mình giơ đúng tờ. Khi nghe điện thoại mà không chắc, các bạn **đừng ngại hỏi lại**: Sorry, is that thirteen or thirty? Người bản xứ cũng hỏi lại như vậy, chẳng có gì xấu hổ. Trong công việc, đọc lại con số cho người kia xác nhận là thói quen của người chuyên nghiệp."),
      summary(
        "13 đến 19 thêm **-teen** và nhấn âm sau (thir-TEEN); số tròn chục thêm **-ty** và nhấn âm trước (THIR-ty).",
        "Viết đúng chính tả: **forty** không có chữ u; **fifteen, fifty** không viết fiveteen, fivety.",
        "Hỏi tuổi: **How old are you?** Trả lời bằng to be: **I'm twenty-five** (years old), không dùng have.",
        "Số điện thoại đọc **từng chữ số**; số 0 đọc là **oh** (hoặc zero), hai số giống nhau liền nhau đọc là **double**.",
        "Nghe không chắc thì hỏi lại: **Sorry, is that thirteen or thirty?**",
      ),
    ],
  },
  words: [
    word("number", "/ˈnʌm.bə/", "số, con số", "What's your phone number?", "num|ber", 0),
    word("twelve", "/twelv/", "mười hai", "My daughter is twelve.", "twelve", 0, "Kết thúc bằng /lv/, đừng đọc thành “tu-eo”."),
    word("thirteen", "/θɜːˈtiːn/", "mười ba", "He is thirteen years old.", "thir|teen", 1, "Nhấn âm sau để phân biệt với thirty."),
    word("thirty", "/ˈθɜː.ti/", "ba mươi", "I'm thirty years old.", "thir|ty", 0, "Nhấn âm đầu, âm cuối đọc ngắn."),
    word("fifteen", "/ˌfɪfˈtiːn/", "mười lăm", "My son is fifteen years old.", "fif|teen", 1),
    word("hundred", "/ˈhʌn.drəd/", "trăm", "My grandmother is one hundred years old.", "hun|dred", 0, "Nói one hundred hoặc a hundred, không thêm -s: two hundred."),
    word("old", "/əʊld/", "già, cũ; (bao nhiêu) tuổi", "How old is your mother?", "old", 0),
    word("age", "/eɪdʒ/", "tuổi, độ tuổi", "Lan and I are the same age.", "age", 0, "Khi hỏi tuổi, người bản xứ thường nói How old are you? hơn là What's your age?"),
  ],
  exercises: [
    reorder("a1-3-1", "How old are your children?", "Children là số nhiều nên dùng are: How old + are + your children?"),
    listen("a1-3-2", "She's forty years old.", ["Cô ấy 14 tuổi.", "Cô ấy 4 tuổi.", "Cô ấy 40 tuổi."], 2, "Forty nhấn âm đầu (FOR-ty) nên là 40."),
    listen("a1-3-3", "My number is oh nine one two, double three four, five six seven.", ["0912 334 567", "0912 344 567", "0921 334 567"], 0, "Double three nghĩa là hai số 3 liền nhau."),
    mc("a1-3-4", "___ old are you?", ["What", "How", "How many"], 1, "Hỏi tuổi dùng How old."),
    mc("a1-3-5", "Trong số điện thoại, “77” thường được đọc là:", ["double seven", "seventy-seven", "two seven"], 0, "Hai chữ số giống nhau liền nhau đọc là double."),
    fill("a1-3-6", "I ___ twenty-two years old.", ["am", "'m"], "Nói tuổi dùng to be; với I là am."),
    fill("a1-3-7", "What's your phone ___?", ["number"], "Số điện thoại là phone number. Câu hỏi quen thuộc: What's your phone number?"),
    reorder("a1-3-8", "How old is your brother?", "Hỏi tuổi: How old + to be + chủ ngữ?"),
    correct("a1-3-9", "My father has sixty years old.", ["My father is sixty years old.", "My father's sixty years old.", "My father is sixty.", "My father's sixty."], "Nói tuổi dùng to be, không dùng have hay has: My father is sixty years old."),
    correct("a1-3-10", "My brother is fourty.", ["My brother is forty.", "My brother's forty."], "Forty (40) không có chữ u, dù four và fourteen có."),
  ],
  speaking: [
    say("I'm twenty-five years old.", "Tôi hai mươi lăm tuổi."),
    say("My sister is thirteen, not thirty.", "Em gái tôi mười ba tuổi, không phải ba mươi."),
    say("My phone number is oh nine one two, double three four, five six seven.", "Số điện thoại của tôi là 0912 334 567."),
  ],
  freeSpeaking: free(
    "How old are you, and what's your phone number?",
    "Hãy nói tên, tuổi, số điện thoại của bạn (có thể dùng một số giả) và tuổi của một người trong gia đình.",
    "My name is Tuan. I'm thirty-four years old. My phone number is oh nine seven two, double eight one, three four five. My daughter is seven.",
  ),
  dialogueQuestions: [
    listenQ("a1-3-d1", "Anh Nam bao nhiêu tuổi?", "I'm thirty. Sorry, is that thirteen or thirty? Thirty. Three, zero.", ["13", "30", "33"], 1, "Anh Nam nói thirty rồi nói rõ từng số: three, zero. Vậy là 30."),
    listenQ("a1-3-d2", "Số điện thoại của anh Nam là gì?", "It's oh nine eight three, double four five, six one two.", ["0983 445 612", "0983 455 612", "0938 445 612"], 0, "Double four là hai số 4 liền nhau: 0983 445 612."),
    mc("a1-3-d3", "Số thẻ tập của anh Nam là bao nhiêu?", ["15", "50", "55"], 2, "Chị lễ tân nói: Your card number is fifty-five."),
  ],
  reading: reading({
    title: "Quảng cáo câu lạc bộ tiếng Anh",
    text: `Sunshine English Club

Are you fifteen to twenty-five years old? Are you a student in Da Nang? Our English club is for you!

Our teachers are Emma and Paul. Emma is thirty-two, and she's from England. Paul is from Australia. Our club room is Room fourteen at Hoa Binh School.

One class is fifty thousand dong. Your first class is free!

Call Ms Tran on oh nine oh five, double two six, seven eight nine. Or email sunshine dot club at gmail dot com.`,
    glossary: [
      ["club", "câu lạc bộ"],
      ["room", "phòng"],
      ["class", "buổi học, lớp học"],
      ["first", "đầu tiên"],
      ["free", "miễn phí"],
      ["call", "gọi điện"],
    ],
    questions: [
      mc("a1-3-r1", "Đây là loại văn bản gì?", ["Quảng cáo một câu lạc bộ tiếng Anh", "Thư mời dự tiệc sinh nhật", "Thực đơn của một quán ăn"], 0, "Bài đọc giới thiệu Sunshine English Club: dành cho ai, giáo viên, giá và số điện thoại."),
      mc("a1-3-r2", "Câu lạc bộ dành cho người bao nhiêu tuổi?", ["Từ 5 đến 25 tuổi", "Từ 15 đến 25 tuổi", "Từ 15 đến 35 tuổi"], 1, "Are you fifteen to twenty-five years old? Fifteen là 15, twenty-five là 25."),
      mc("a1-3-r3", "Emma bao nhiêu tuổi?", ["23", "30", "32"], 2, "Emma is thirty-two: ba mươi hai tuổi."),
      fill("a1-3-r4", "Câu lạc bộ học ở phòng số mấy? Room ___ (viết số bằng chữ tiếng Anh)", ["fourteen", "14"], "Our club room is Room fourteen: phòng 14."),
      mc("a1-3-r5", "Số điện thoại của cô Trần là:", ["0950 226 789", "0905 226 789", "0905 266 789"], 1, "Oh nine oh five, double two six, seven eight nine: 0905 226 789."),
      mc("a1-3-r6", "Buổi học đầu tiên giá bao nhiêu?", ["Năm mươi nghìn đồng", "Mười lăm nghìn đồng", "Miễn phí"], 2, "Your first class is free: buổi đầu tiên miễn phí. Các buổi sau là năm mươi nghìn đồng."),
    ],
  }),
  dialogue: dialogue(
    "Đăng ký thẻ tập ở phòng gym",
    "Anh Nam đăng ký thẻ tập ở một phòng gym quốc tế. Chị lễ tân hỏi tên, tuổi, số điện thoại và email để làm thẻ. Để ý: tiếng Anh dùng Mr, Ms với họ, không dùng với tên, nên anh Trần Văn Nam được gọi là Mr Tran.",
    { A: "Chị lễ tân", B: "Anh Nam, khách" },
    A("Good morning. What's your name, please?", "Chào buổi sáng. Anh tên là gì ạ?"),
    B("It's Nam. Tran Van Nam.", "Tôi tên Nam. Trần Văn Nam."),
    A("Thank you. How old are you, Mr Tran?", "Cảm ơn anh. Anh bao nhiêu tuổi ạ?"),
    B("I'm thirty.", "Tôi ba mươi tuổi."),
    A("Sorry, is that thirteen or thirty?", "Xin lỗi, anh nói mười ba hay ba mươi ạ?"),
    B("Thirty. Three, zero.", "Ba mươi. Số ba, số không."),
    A("And what's your phone number?", "Còn số điện thoại của anh là gì ạ?"),
    B("It's oh nine eight three, double four five, six one two.", "Là 0983 445 612."),
    A("Oh nine eight three, double four five, six one two. Is that right?", "0983 445 612. Đúng không ạ?"),
    B("Yes, that's right.", "Vâng, đúng rồi."),
    A("And what's your email address?", "Còn địa chỉ email của anh là gì ạ?"),
    B("It's nam dot tran at gmail dot com.", "Là nam.tran@gmail.com."),
    A("Thank you, Mr Tran. Your card number is fifty-five.", "Cảm ơn anh Trần. Số thẻ của anh là năm mươi lăm."),
    B("Fifty-five. Great, thank you!", "Năm mươi lăm. Tốt quá, cảm ơn chị!"),
  ),
  task: task({
    prompt: "Bạn đăng ký một lớp học tiếng Anh. Hãy viết 4–5 câu cho cô giáo biết tên, tuổi, số điện thoại, email của bạn và tuổi của một người trong gia đình. Viết số bằng chữ.",
    hints: [
      "Nói tuổi bằng I'm + số (years old), không dùng have.",
      "Số điện thoại viết từng chữ số một, dùng oh cho số 0 và double cho hai số giống nhau.",
      "Email: dấu chấm là dot, @ là at.",
      "Nói tuổi người khác với is: My son is six.",
    ],
    model: "My name is Hoa. I'm twenty-eight years old. My phone number is oh nine one two, double three four, five six seven. My email is hoa dot le at gmail dot com. My son is six years old.",
    checklist: [
      "Nói tuổi bằng am, is hoặc are, không dùng have",
      "Số viết bằng chữ và đúng chính tả (forty, fifteen, twenty-eight)",
      "Số điện thoại đọc từng chữ số, có oh hoặc double",
      "Đã viết years thì phải có old",
      "Có ít nhất một câu về tuổi của người khác",
    ],
    minWords: 25,
  }),
});

const motNgay = lesson({
  slug: "mot-ngay-cua-toi",
  title: "Một ngày của tôi",
  minutes: 28,
  lecture: {
    title: "Thì hiện tại đơn và trạng từ tần suất",
    blocks: [
      p("Khi làm quen với đồng nghiệp nước ngoài, câu chuyện hay xoay quanh cuộc sống hằng ngày: bạn dậy lúc mấy giờ, đi làm bằng gì, cuối tuần có tập thể dục không. Để kể những thói quen ấy, ta dùng **thì hiện tại đơn**."),
      p("Thì **hiện tại đơn** dùng để nói về thói quen và những việc lặp lại hằng ngày. Với I, you, we, they, động từ giữ nguyên. Với **he, she, it**, động từ phải thêm **-s** hoặc **-es**. Câu phủ định và câu hỏi cần trợ động từ **do** hoặc **does**."),
      table(
        ["Chủ ngữ", "Khẳng định", "Phủ định", "Câu hỏi"],
        ["I / you / we / they", "I work.", "I don't work.", "Do you work?"],
        ["he / she / it", "She works.", "She doesn't work.", "Does she work?"],
      ),
      table(
        ["Quy tắc thêm -s", "Ví dụ"],
        ["Thường: thêm -s", "work → works, get → gets"],
        ["Tận cùng -o, -s, -ch, -sh, -x: thêm -es", "go → goes, watch → watches"],
        ["Phụ âm + y: đổi y thành -ies", "study → studies"],
        ["Bất quy tắc", "have → has"],
      ),
      tip("Đuôi -s có ba cách đọc: /s/ như works, /z/ như goes, /ɪz/ như watches. Ở trình độ này bạn chỉ cần nhớ một điều: **đừng bao giờ nuốt mất đuôi -s**. Đọc chưa chuẩn một chút vẫn hơn là không đọc."),
      ex("My brother lives in Da Nang. He doesn't live with our parents.", "Anh trai tôi sống ở Đà Nẵng. Anh ấy không sống cùng bố mẹ.", "Câu khẳng định có lives (thêm -s); câu phủ định đã có doesn't nên live trở về nguyên mẫu."),
      ex("Does your son like school? Yes, he does.", "Con trai bạn có thích đi học không? Có.", "Trả lời ngắn dùng does hoặc doesn't, không lặp lại động từ chính: không nói “Yes, he likes.”"),
      mistake("She work in a bank.", "She works in a bank.", "Động từ tiếng Việt không bao giờ đổi, nên người Việt rất hay quên -s sau he, she, it."),
      mistake("She doesn't works.", "She doesn't work.", "Khi đã có does hoặc doesn't, động từ chính quay về nguyên mẫu, không thêm -s nữa."),
      mistake("I am work in a bank.", "I work in a bank.", "Sợ quên to be, nhiều bạn thêm am vào mọi câu, giống như nói “tôi là làm”. Câu đã có động từ thường work thì không cần am nữa."),
      p("**Trạng từ tần suất** cho biết bạn làm việc gì thường xuyên đến mức nào: **always** (luôn luôn), **usually** (thường thường), **often** (hay), **sometimes** (thỉnh thoảng), **never** (không bao giờ). Chúng đứng **trước động từ thường** nhưng **sau to be**."),
      ex("I usually get up at six o'clock.", "Tôi thường dậy lúc sáu giờ."),
      ex("He is never late.", "Anh ấy không bao giờ đến muộn.", "Với to be, trạng từ đứng sau is, am, are."),
      p("Để hỏi giờ, dùng **What time is it?** Để nói làm việc gì lúc mấy giờ, dùng **at** trước giờ. Giờ chẵn thêm o'clock, giờ rưỡi là half past. Cách nói giờ dễ nhất là đọc giờ rồi đọc phút: 7:15 là **seven fifteen**, 9:40 là **nine forty**."),
      ex("What time do you have lunch? At half past twelve.", "Bạn ăn trưa lúc mấy giờ? Lúc mười hai giờ rưỡi.", "Câu hỏi What time do you...? các bạn học như một cụm để dùng ngay; bài Hỏi đáp về thói quen sẽ giải thích cách đặt câu hỏi có từ để hỏi với do, does."),
      teacher("Học viên cũ của tôi gọi mẹo này là “con rắn -s”: he, she, it giống con rắn, đi đâu cũng kêu “sss”. Nhưng con rắn chỉ có **một cái đuôi**: câu đã có does hay doesn't thì đuôi -s nằm ở đó rồi, động từ chính không thêm nữa. Mỗi tối, các bạn hãy kể ba việc mình làm trong ngày, rồi kể lại y như vậy về một người trong nhà: I cook dinner, rồi My mother cooks dinner. Đổi chủ ngữ mà tự nghe thấy tiếng -s bật ra là các bạn đã nắm bài."),
      summary(
        "Hiện tại đơn nói về thói quen: I, you, we, they **work**; he, she, it **works**.",
        "Phủ định và câu hỏi dùng **don't, doesn't, Do, Does**; đã có does hay doesn't thì động từ về nguyên mẫu: She **doesn't work**.",
        "Câu đã có động từ thường thì không thêm am, is, are: **I work**, không nói I am work.",
        "Trạng từ tần suất đứng **trước động từ thường** (I usually get up) nhưng **sau to be** (He is never late).",
        "Làm việc gì lúc mấy giờ dùng **at**: at six o'clock, at half past twelve.",
      ),
    ],
  },
  words: [
    word("morning", "/ˈmɔː.nɪŋ/", "buổi sáng", "I drink coffee in the morning.", "mor|ning", 0),
    word("breakfast", "/ˈbrek.fəst/", "bữa sáng", "I have breakfast at seven.", "break|fast", 0, "Phần break ở đây đọc là /brek/, không đọc /breɪk/ như từ break (làm vỡ)."),
    word("lunch", "/lʌntʃ/", "bữa trưa", "We have lunch at twelve.", "lunch", 0),
    word("work", "/wɜːk/", "làm việc; công việc", "She works in a hospital.", "work", 0, "Đừng nhầm với walk /wɔːk/ (đi bộ)."),
    word("always", "/ˈɔːl.weɪz/", "luôn luôn", "He always gets up early.", "al|ways", 0),
    word("usually", "/ˈjuː.ʒu.ə.li/", "thường thường", "I usually go to work by bus.", "u|su|al|ly", 0),
    word("sometimes", "/ˈsʌm.taɪmz/", "thỉnh thoảng", "We sometimes watch TV at night.", "some|times", 0),
    word("o'clock", "/əˈklɒk/", "giờ (đúng)", "It's nine o'clock.", "o'|clock", 1, "Chỉ dùng cho giờ chẵn: eight o'clock, không nói eight thirty o'clock."),
  ],
  exercises: [
    reorder("a1-4-1", "My sister always gets up early.", "Always đứng trước động từ thường; my sister là she nên get thêm -s thành gets."),
    mc("a1-4-2", "___ your sister work in Hanoi?", ["Do", "Is", "Does"], 2, "Your sister là she nên câu hỏi dùng Does."),
    mc("a1-4-3", "Chọn câu đúng:", ["I am always late.", "I always am late.", "Always I am late."], 0, "Với to be, trạng từ tần suất đứng sau am, is, are."),
    fill("a1-4-4", "She ___ like tea. (không thích)", ["doesn't", "does not"], "Phủ định với she dùng doesn't, động từ like giữ nguyên."),
    fill("a1-4-5", "He ___ to work at eight o'clock. (go)", ["goes"], "Go tận cùng bằng -o nên thêm -es."),
    reorder("a1-4-6", "My father never drinks coffee.", "Never đứng trước động từ thường drinks; my father là he nên drinks có -s."),
    listen("a1-4-7", "She never watches TV in the morning.", ["Cô ấy thường xem ti vi vào buổi sáng.", "Cô ấy không bao giờ xem ti vi vào buổi sáng.", "Cô ấy thỉnh thoảng xem ti vi vào buổi tối."], 1, "Never là không bao giờ."),
    listen("a1-4-8", "It's half past nine.", ["Bây giờ là chín giờ.", "Bây giờ là chín giờ mười lăm.", "Bây giờ là chín giờ rưỡi."], 2, "Half past nine là chín giờ ba mươi."),
    correct("a1-4-9", "My brother watch TV every night.", ["My brother watches TV every night."], "My brother là he nên động từ phải thêm -es: watches."),
    correct("a1-4-10", "Does she likes coffee?", ["Does she like coffee?"], "Câu hỏi đã có does thì động từ chính về nguyên mẫu: like, không thêm -s."),
  ],
  speaking: [
    say("I usually get up at six o'clock.", "Tôi thường dậy lúc sáu giờ."),
    say("My mother works in a hospital.", "Mẹ tôi làm việc ở bệnh viện."),
    say("Do you have breakfast every day?", "Bạn có ăn sáng mỗi ngày không?"),
  ],
  freeSpeaking: free(
    "Tell me about your day, please.",
    "Hãy kể một ngày bình thường của bạn: mấy giờ dậy, đi làm hay đi học bằng gì, ăn trưa lúc mấy giờ, buổi tối làm gì.",
    "I usually get up at half past six. I have breakfast at home. I go to work by motorbike. I have lunch at twelve. I sometimes work late, but I always cook dinner.",
  ),
  dialogueQuestions: [
    listenQ("a1-4-d1", "Linh thường dậy lúc mấy giờ?", "What time do you get up, Linh? I usually get up at six o'clock.", ["5 giờ", "6 giờ", "7 giờ"], 1, "Linh trả lời: I usually get up at six o'clock."),
    mc("a1-4-d2", "Ai đưa Linh đi làm?", ["Mẹ của Linh", "Mark", "Anh trai của Linh"], 2, "Linh nói: My brother takes me to work. He works near here."),
    listenQ("a1-4-d3", "Buổi sáng Mark thường ăn uống thế nào?", "I never have breakfast. I only drink coffee.", ["Anh ấy không ăn sáng, chỉ uống cà phê", "Anh ấy ăn bánh mì và uống cà phê", "Anh ấy ăn sáng ở nhà với mẹ"], 0, "Never là không bao giờ: Mark không bao giờ ăn sáng, chỉ uống cà phê."),
  ],
  reading: reading({
    title: "Một ngày của Hạnh",
    text: `My day

Hi, I'm Hanh. I'm a nurse in Hue. My day starts early. I always get up at five o'clock. I have breakfast at half past five, usually bread and tea. I go to work by motorbike.

I work in a big hospital. I usually have lunch at twelve with my friends. I never go home before six.

My husband, Khoa, is a teacher. He gets up at half past six. He doesn't have breakfast at home. He sometimes cooks dinner for us. After dinner, we watch TV or read. I go to bed at ten.`,
    glossary: [
      ["start", "bắt đầu"],
      ["early", "sớm"],
      ["hospital", "bệnh viện"],
      ["before", "trước (khi)"],
      ["husband", "chồng"],
      ["go to bed", "đi ngủ"],
    ],
    questions: [
      mc("a1-4-r1", "Bài đọc chủ yếu nói về điều gì?", ["Một ngày của Hạnh và vài thói quen của chồng cô", "Cách nấu bữa sáng ở Huế", "Bệnh viện lớn nơi Hạnh làm việc"], 0, "Hạnh kể cô dậy, ăn, đi làm, về nhà lúc nào, rồi kể thêm về chồng là Khoa."),
      mc("a1-4-r2", "Hạnh dậy lúc mấy giờ?", ["6 giờ 30", "5 giờ", "5 giờ 30"], 1, "I always get up at five o'clock. Lúc 5 giờ 30 là giờ cô ăn sáng; 6 giờ 30 là giờ Khoa dậy."),
      mc("a1-4-r3", "Hạnh đi làm bằng gì?", ["Xe buýt", "Đi bộ", "Xe máy"], 2, "I go to work by motorbike."),
      fill("a1-4-r4", "Hoàn thành câu theo bài đọc: Khoa ___ have breakfast at home.", ["doesn't", "does not"], "He doesn't have breakfast at home: Khoa là he nên phủ định dùng doesn't."),
      mc("a1-4-r5", "Câu nào đúng về Khoa?", ["Anh ấy là y tá.", "Thỉnh thoảng anh ấy nấu bữa tối.", "Anh ấy dậy lúc năm giờ."], 1, "He sometimes cooks dinner for us. Khoa là giáo viên, và dậy lúc sáu giờ rưỡi."),
    ],
  }),
  dialogue: dialogue(
    "Chuyện thói quen giờ nghỉ trưa",
    "Giờ nghỉ trưa, Mark, đồng nghiệp mới người Mỹ, hỏi Linh về một ngày bình thường của cô: mấy giờ dậy, ăn sáng ở đâu, đi làm bằng gì.",
    { A: "Mark, đồng nghiệp mới", B: "Linh" },
    A("What time do you get up, Linh?", "Linh dậy lúc mấy giờ?"),
    B("I usually get up at six o'clock.", "Tôi thường dậy lúc sáu giờ."),
    A("Six? That's early! Do you have breakfast at home?", "Sáu giờ à? Sớm thế! Bạn có ăn sáng ở nhà không?"),
    B("Yes, I do. My mother always cooks breakfast. What about you?", "Có. Mẹ tôi luôn nấu bữa sáng. Còn anh thì sao?"),
    A("I never have breakfast. I only drink coffee.", "Tôi không bao giờ ăn sáng. Tôi chỉ uống cà phê."),
    B("Do you go to work by bus?", "Anh có đi làm bằng xe buýt không?"),
    A("Yes, I usually do. And you? Do you go by motorbike?", "Có, tôi thường đi xe buýt. Còn bạn? Bạn đi xe máy à?"),
    B("No, I don't. My brother takes me to work. He works near here.", "Không. Anh trai tôi chở tôi đi làm. Anh ấy làm việc gần đây."),
    A("Do you sometimes work late?", "Thỉnh thoảng bạn có làm muộn không?"),
    B("Sometimes. But I usually go home at six. I watch TV with my family.", "Thỉnh thoảng. Nhưng tôi thường về nhà lúc sáu giờ. Tôi xem ti vi cùng gia đình."),
    A("Oh, it's half past twelve. Time to go back to work!", "Ồ, mười hai giờ rưỡi rồi. Đến giờ quay lại làm việc rồi!"),
  ),
  task: task({
    prompt: "Hãy viết 8–10 câu: 6–8 câu kể một ngày bình thường của bạn, và thêm hai câu về thói quen của một người trong gia đình.",
    hints: [
      "Dùng at + giờ: at six o'clock, at half past seven.",
      "Dùng ít nhất hai trạng từ tần suất: always, usually, sometimes, never.",
      "Viết câu về he hoặc she để nhớ thêm -s: My sister gets up at nine.",
      "Có một câu phủ định với don't hoặc doesn't.",
    ],
    model: "I usually get up at six o'clock. I have breakfast at half past six. I go to work by bus. I have lunch at twelve. I always go home at five thirty. I never watch TV at night. My sister gets up at nine. She doesn't like mornings.",
    checklist: [
      "Động từ sau he, she có -s hoặc -es (gets, goes, watches)",
      "Câu phủ định có don't hoặc doesn't và động từ nguyên mẫu",
      "Trạng từ tần suất đứng trước động từ thường",
      "Không có am, is, are trước động từ thường (không viết I am get up)",
      "Giờ đi với at",
    ],
    minWords: 25,
  }),
});

const doAn = lesson({
  slug: "do-an-va-goi-mon",
  title: "Đồ ăn và gọi món",
  minutes: 28,
  lecture: {
    title: "Danh từ đếm được, không đếm được và cách gọi món",
    blocks: [
      p("Vào một quán cà phê ở Singapore, hay mời khách nước ngoài đi ăn phở ở Hà Nội, bạn cần gọi món, hỏi giá và xin thêm nước. Muốn nói đúng, trước hết phải biết danh từ nào **đếm được** và danh từ nào **không đếm được**, vì mỗi loại đi với những từ khác nhau."),
      p("Danh từ **đếm được** là những thứ đếm từng cái: an apple, two eggs. Danh từ **không đếm được** là những thứ không đếm từng cái như nước, gạo, sữa, bánh mì. Danh từ không đếm được **không đi với a/an** và **không thêm -s**."),
      table(
        ["Đếm được", "Không đếm được"],
        ["an apple, two apples", "water, milk"],
        ["an egg, three eggs", "rice, bread"],
        ["a banana, four bananas", "tea, sugar"],
      ),
      mistake("I eat two rices.", "I eat two bowls of rice.", "Người Việt nghĩ “hai bát cơm” nhưng khi nói tiếng Anh lại bỏ mất chữ “bát”, rồi thêm -s vào rice. Rice không đếm được nên không có số nhiều; ta đếm bằng cái bát: two bowls of rice."),
      p("Muốn đếm thứ không đếm được, dùng từ chỉ **đồ đựng** hoặc **đơn vị**. Khi có từ hai trở lên, thêm -s vào đồ đựng chứ không thêm vào món: two cups of tea, three bottles of water."),
      table(
        ["Đồ đựng", "Thường đi với", "Ví dụ"],
        ["a glass of", "nước, nước ép, sữa", "a glass of water (một cốc nước)"],
        ["a cup of", "trà, cà phê", "a cup of tea (một tách trà)"],
        ["a bowl of", "cơm, phở, súp", "a bowl of rice (một bát cơm)"],
        ["a bottle of", "nước, nước mắm", "a bottle of water (một chai nước)"],
        ["a piece of", "bánh ngọt, thịt", "a piece of cake (một miếng bánh)"],
      ),
      ex("A bowl of pho, please.", "Cho tôi một bát phở.", "Phở cũng như cơm, ta đếm bằng bát: two bowls of pho."),
      p("Dùng **some** trong câu khẳng định và khi mời, xin. Dùng **any** trong câu phủ định và câu hỏi. Cả hai đi được với danh từ số nhiều và danh từ không đếm được."),
      table(
        ["Loại câu", "Dùng", "Ví dụ"],
        ["Khẳng định", "some", "I have some eggs."],
        ["Phủ định", "any", "We don't have any milk."],
        ["Câu hỏi", "any", "Do you have any bread?"],
        ["Lời mời, xin", "some", "Would you like some tea?"],
      ),
      ex("Would you like some tea? Yes, please.", "Bạn uống chút trà nhé? Vâng, cảm ơn.", "Đây là câu hỏi nhưng vẫn dùng some, vì là lời mời: người mời mong bạn nhận lời."),
      p("Khi gọi món, dùng **Can I have...?** hoặc **I'd like...** Hãy học hai câu này như một cụm cố định; chữ can sẽ được học kỹ ở bài Tôi có thể…. Muốn hỏi giá, nói **How much is it?** (một món) hoặc **How much are they?** (nhiều món)."),
      ex("Can I have a cup of coffee, please?", "Cho tôi một cốc cà phê nhé?"),
      ex("How much is it? It's thirty thousand dong.", "Bao nhiêu tiền vậy? Ba mươi nghìn đồng.", "Khi nói giá tiền, thousand không thêm -s: thirty thousand."),
      tip("Thêm **please** vào cuối câu để lịch sự hơn. Câu “Give me a coffee” nghe khá cộc lốc với người bản xứ. Lưu ý: khi gọi đồ uống ở quán, người ta vẫn nói **a coffee**, **two teas** với nghĩa một cốc, hai tách."),
      mistake("I'd like a bread.", "I'd like some bread.", "Bread không đếm được nên không dùng a. Muốn nói một ổ, dùng a loaf of bread hoặc a sandwich."),
      teacher("Hồi mới đi dạy, tôi tưởng học viên chỉ cần thuộc quy tắc đếm được và không đếm được. Về sau tôi hiểu: người Việt vốn nghĩ theo cái bát, cái cốc, chỉ cần dịch thẳng ra là đúng. Vì vậy lời khuyên của tôi là **gặp danh từ mới, học luôn cả cái đựng nó**. Đừng học water, hãy học a glass of water; đừng học rice, hãy học a bowl of rice. Lần tới đi ăn, các bạn nhẩm bằng tiếng Anh món mình gọi, cho đến khi câu tự bật ra mà không cần nghĩ."),
      summary(
        "Danh từ **không đếm được** (water, rice, bread, milk) không đi với a, an và không thêm -s.",
        "Đếm bằng đồ đựng: **a cup of** tea, **two bowls of** rice; -s thêm vào đồ đựng, không thêm vào món.",
        "**Some** dùng trong câu khẳng định và khi mời, xin; **any** dùng trong câu phủ định và câu hỏi.",
        "Gọi món lịch sự: **Can I have ..., please?** hoặc **I'd like ...**",
        "Hỏi giá: **How much is it?** cho một món, **How much are they?** cho nhiều món.",
      ),
    ],
  },
  words: [
    word("water", "/ˈwɔː.tə/", "nước", "Can I have a glass of water?", "wa|ter", 0),
    word("rice", "/raɪs/", "cơm, gạo", "I eat rice every day.", "rice", 0, "Nhớ đọc âm /s/ ở cuối, nếu không sẽ nghe thành “rai”."),
    word("bread", "/bred/", "bánh mì", "We have some bread for breakfast.", "bread", 0),
    word("egg", "/eɡ/", "quả trứng", "I'd like two eggs, please.", "egg", 0),
    word("chicken", "/ˈtʃɪk.ɪn/", "thịt gà, con gà", "Chicken rice, please.", "chick|en", 0),
    word("coffee", "/ˈkɒf.i/", "cà phê", "A cup of coffee, please.", "cof|fee", 0, "Nhấn âm đầu: COF-fee, khác với “cà phê” nhấn âm sau."),
    word("menu", "/ˈmen.juː/", "thực đơn", "Can I see the menu, please?", "men|u", 0),
    word("bottle", "/ˈbɒt.əl/", "cái chai", "A bottle of water is ten thousand dong.", "bot|tle", 0),
  ],
  exercises: [
    mc("a1-5-1", "I'd like ___ rice, please.", ["a", "an", "some"], 2, "Rice không đếm được nên không dùng a/an; dùng some."),
    reorder("a1-5-2", "Do you have any eggs?", "Câu hỏi dùng any; eggs là danh từ đếm được số nhiều. Câu hỏi hiện tại đơn: Do + you + have + any + danh từ?"),
    mc("a1-5-3", "Chọn cách gọi món lịch sự nhất:", ["Give me a coffee.", "Can I have a coffee, please?", "I want coffee now."], 1, "Can I have... please? là cách gọi món lịch sự và tự nhiên."),
    fill("a1-5-4", "We don't have ___ milk. (không có chút nào)", ["any"], "Câu phủ định dùng any."),
    fill("a1-5-5", "A ___ of rice, please. (bát)", ["bowl"], "Một bát cơm là a bowl of rice."),
    reorder("a1-5-6", "I'd like a bowl of rice.", "Mẫu câu gọi món: I'd like + a bowl of + danh từ không đếm được."),
    listen("a1-5-7", "How much is it?", ["Bao nhiêu tiền vậy?", "Cái này là gì?", "Bạn muốn ăn gì?"], 0, "How much is it? dùng để hỏi giá."),
    listen("a1-5-8", "Two glasses of orange juice, please.", ["Cho tôi hai chai nước cam.", "Cho tôi một cốc nước cam.", "Cho tôi hai cốc nước cam."], 2, "Glass là cái cốc thủy tinh; bottle mới là cái chai."),
    correct("a1-5-9", "I'd like two cup of tea, please.", ["I'd like two cups of tea, please.", "I would like two cups of tea, please."], "Có hai tách thì thêm -s vào đồ đựng: two cups of tea. Tea không đổi."),
    correct("a1-5-10", "I don't have some bread at home.", ["I don't have any bread at home."], "Câu phủ định dùng any, không dùng some."),
  ],
  speaking: [
    say("Can I have a bowl of pho, please?", "Cho tôi một bát phở nhé?"),
    say("I'd like some water, please.", "Cho tôi một ít nước."),
    say("How much is a cup of coffee?", "Một cốc cà phê bao nhiêu tiền?"),
  ],
  freeSpeaking: free(
    "What would you like to eat and drink?",
    "Bạn đang ở một quán ăn. Hãy gọi một món ăn, một đồ uống, hỏi quán có món gì không, rồi hỏi giá.",
    "Hello. Can I have a bowl of beef pho, please? And I'd like a glass of orange juice. Do you have any bread? How much is it?",
  ),
  dialogueQuestions: [
    listenQ("a1-5-d1", "Sarah gọi phở gì?", "Beef or chicken? Chicken, please.", ["Phở bò", "Phở gà", "Phở chay"], 1, "Minh hỏi phở bò hay phở gà, Sarah trả lời Chicken, please."),
    mc("a1-5-d2", "Vì sao Sarah không uống trà đá?", ["Vì hôm nay quán không có trà đá", "Vì trà đá đắt quá", "Vì cô ấy không thích trà"], 0, "Minh nói: Sorry, we don't have any iced tea today."),
    listenQ("a1-5-d3", "Sarah phải trả tất cả bao nhiêu tiền?", "The pho is fifty thousand dong, the juice is thirty thousand and the water is ten thousand. It's ninety thousand dong.", ["Năm mươi nghìn đồng", "Tám mươi nghìn đồng", "Chín mươi nghìn đồng"], 2, "Năm mươi nghìn tiền phở, ba mươi nghìn tiền nước cam, mười nghìn tiền nước lọc: tất cả là ninety thousand dong."),
  ],
  reading: reading({
    title: "Tin nhắn rủ đi ăn trưa",
    text: `Hi Nam,

I'm at Hoa Sen Café near our office. It's a nice place, and the menu is in English and Vietnamese.

A bowl of chicken pho is fifty thousand dong, and a cup of coffee is twenty-five thousand. The iced tea is free. They don't have any bread today, but they have some nice cakes. A piece of cake is thirty thousand dong.

I'd like a bowl of pho and a glass of orange juice. What about you? Would you like some lunch here? Please send me a message.

Linh`,
    glossary: [
      ["near", "gần"],
      ["office", "văn phòng"],
      ["place", "nơi, chỗ"],
      ["iced tea", "trà đá"],
      ["free", "miễn phí"],
      ["cake", "bánh ngọt"],
    ],
    questions: [
      mc("a1-5-r1", "Linh nhắn tin cho Nam để làm gì?", ["Rủ Nam đến quán ăn trưa cùng", "Hỏi đường đến văn phòng", "Nhờ Nam mua bánh mì"], 0, "Linh đang ở quán, kể về món ăn và giá, rồi hỏi Would you like some lunch here?"),
      mc("a1-5-r2", "Một bát phở gà giá bao nhiêu?", ["Hai mươi lăm nghìn đồng", "Năm mươi nghìn đồng", "Ba mươi nghìn đồng"], 1, "A bowl of chicken pho is fifty thousand dong. Hai mươi lăm nghìn là giá cà phê, ba mươi nghìn là giá bánh."),
      mc("a1-5-r3", "Hôm nay quán không có món gì?", ["Bánh ngọt", "Trà đá", "Bánh mì"], 2, "They don't have any bread today."),
      fill("a1-5-r4", "Hoàn thành câu theo bài đọc: A ___ of cake is thirty thousand dong.", ["piece"], "Bánh ngọt đếm bằng miếng: a piece of cake."),
      mc("a1-5-r5", "Linh muốn gọi gì?", ["Một miếng bánh và trà đá", "Một bát phở và một cốc cà phê", "Một bát phở và một cốc nước cam"], 2, "I'd like a bowl of pho and a glass of orange juice."),
    ],
  }),
  dialogue: dialogue(
    "Gọi món ở quán phở",
    "Sarah, một khách du lịch người Anh, vào một quán phở ở Hà Nội. Minh là nhân viên phục vụ, nói tiếng Anh với khách. Bạn có thể đóng vai người phục vụ hoặc vai khách.",
    { A: "Minh, nhân viên phục vụ", B: "Sarah, khách du lịch" },
    A("Hello. Here's the menu.", "Xin chào. Thực đơn đây ạ."),
    B("Thank you. Can I have a bowl of pho, please?", "Cảm ơn. Cho tôi một bát phở nhé."),
    A("Beef or chicken?", "Phở bò hay phở gà ạ?"),
    B("Chicken, please. Do you have any iced tea?", "Gà nhé. Quán có trà đá không?"),
    A("Sorry, we don't have any iced tea today. We have some orange juice.", "Xin lỗi, hôm nay quán không có trà đá. Quán có nước cam ạ."),
    B("OK. I'd like a glass of orange juice, please.", "Được. Cho tôi một cốc nước cam."),
    A("Would you like some water too?", "Chị có muốn thêm chút nước lọc không ạ?"),
    B("Yes, please. A bottle of water. How much is it?", "Có, cho tôi một chai nước. Bao nhiêu tiền vậy?"),
    A("The pho is fifty thousand dong, the juice is thirty thousand and the water is ten thousand. It's ninety thousand dong.", "Phở năm mươi nghìn, nước cam ba mươi nghìn, nước lọc mười nghìn. Tất cả là chín mươi nghìn đồng ạ."),
    B("Here you are. Thank you!", "Gửi anh. Cảm ơn nhé!"),
    A("Thank you. Enjoy your meal!", "Cảm ơn chị. Chúc chị ngon miệng!"),
  ),
  task: task({
    prompt: "Bạn vào một quán cà phê ở nước ngoài. Hãy viết 5–7 câu để gọi món: xin thực đơn, gọi đồ ăn và đồ uống, hỏi quán có món gì không, rồi hỏi giá.",
    hints: [
      "Gọi món bằng Can I have..., please? hoặc I'd like...",
      "Dùng đồ đựng cho thứ không đếm được: a cup of, a glass of, a bowl of.",
      "Hỏi quán có món gì bằng Do you have any...?",
      "Kết thúc bằng câu hỏi giá: How much is it?",
    ],
    model: "Hello. Can I have the menu, please? I'd like a bowl of chicken soup and some bread. Can I have a cup of coffee, please? Do you have any milk? And a bottle of water, please. How much is it?",
    checklist: [
      "Không dùng a, an hay -s với water, rice, bread, milk",
      "Dùng đồ đựng (a cup of, a bowl of, a glass of) ít nhất hai lần",
      "Câu hỏi quán có món gì dùng any (Do you have any...?); câu gọi món dùng some, a hoặc an",
      "Có please trong lời gọi món",
      "Có câu hỏi giá How much is it? hoặc How much are they?",
    ],
    minWords: 25,
  }),
});

const nhaNoiChon = lesson({
  slug: "nha-va-noi-chon",
  title: "Nhà và nơi chốn",
  minutes: 28,
  lecture: {
    title: "There is, there are và giới từ chỉ vị trí",
    blocks: [
      p("Bạn đi thuê nhà, tả căn hộ của mình cho bạn bè nước ngoài, khách ở homestay hỏi phòng tắm ở đâu, hay đồng nghiệp hỏi gần công ty có ngân hàng không. Tất cả đều cần hai công cụ: **there is, there are** để nói có cái gì, và **giới từ** để nói nó ở đâu."),
      p("Để nói ở đâu đó **có** cái gì, tiếng Anh dùng **there is** (với danh từ số ít hoặc không đếm được) và **there are** (với danh từ số nhiều). Đây là chữ “có” chỉ sự tồn tại, không phải “có” chỉ sở hữu."),
      table(
        ["", "Số ít / không đếm được", "Số nhiều"],
        ["Khẳng định", "There is (There's) a sofa.", "There are two chairs."],
        ["Phủ định", "There isn't a TV.", "There aren't any pictures."],
        ["Câu hỏi", "Is there a lamp?", "Are there any windows?"],
      ),
      ex("How many bedrooms are there? There are two.", "Có bao nhiêu phòng ngủ? Có hai phòng.", "Hỏi số lượng: How many + danh từ số nhiều + are there?"),
      mistake("In my room have a bed.", "There is a bed in my room.", "Tiếng Việt nói “Trong phòng tôi có một cái giường”, nên người Việt hay dịch “có” thành have. Khi nói về sự tồn tại, dùng there is/are."),
      mistake("There is two chairs.", "There are two chairs.", "Nhiều bạn học thuộc there is như một cụm cố định rồi dùng cho mọi trường hợp. Hãy nhìn danh từ đứng ngay sau: số nhiều thì phải là are."),
      ex("Is there a bank near here? Yes, there is.", "Gần đây có ngân hàng không? Có."),
      tip("Câu trả lời ngắn là **Yes, there is.** hoặc **No, there isn't.** Không viết tắt ở câu trả lời có: không nói “Yes, there's.”"),
      p("Để ý các ví dụ trong bài, bạn sẽ thấy chữ **the** xuất hiện liên tục: the table, the bed, the kitchen. **A/an** dùng khi nhắc đến một thứ **lần đầu**, hoặc một thứ bất kỳ. **The** dùng khi người nghe **đã biết** mình nói cái nào: vì vừa nhắc đến, vì nơi đó chỉ có một cái, hoặc vì cả hai cùng nhìn thấy. The dùng được với danh từ số ít, số nhiều và không đếm được. Trước âm nguyên âm, the thường đọc là /ði/: the apple, the umbrella."),
      table(
        ["Dùng", "Khi nào", "Ví dụ"],
        ["a / an", "nhắc lần đầu, một cái bất kỳ", "There is a sofa in my room."],
        ["the", "nhắc lại cái vừa nói", "The sofa is next to the window."],
        ["the", "nơi đó chỉ có một, ai cũng biết là cái nào", "The kitchen is behind the living room."],
        ["the", "hai người cùng biết, cùng thấy", "Where are the keys? They're on the table."],
      ),
      mistake("There is a lamp in my room. A lamp is on the desk.", "There is a lamp in my room. The lamp is on the desk.", "Tiếng Việt không có mạo từ, chỉ nói “cái đèn” cho mọi trường hợp. Lần thứ hai nhắc đến, người nghe đã biết là cái đèn nào, nên phải đổi a thành the."),
      p("**Giới từ chỉ vị trí** cho biết đồ vật ở đâu. Cấu trúc thường gặp: đồ vật + to be + giới từ + nơi chốn."),
      table(
        ["Giới từ", "Nghĩa", "Ví dụ"],
        ["in", "trong", "The keys are in the bag."],
        ["on", "trên (có chạm bề mặt)", "The phone is on the table."],
        ["under", "dưới", "The cat is under the bed."],
        ["next to", "bên cạnh", "The lamp is next to the sofa."],
        ["between", "ở giữa (hai vật)", "The table is between the two chairs."],
        ["behind", "phía sau", "The garden is behind the house."],
        ["in front of", "phía trước", "The car is in front of the house."],
      ),
      ex("My bag is on the chair, not under it.", "Túi của tôi ở trên ghế, không phải ở dưới ghế.", "It thay cho the chair để khỏi lặp lại danh từ."),
      mistake("The bank is in front the school.", "The bank is in front of the school.", "Tiếng Việt nói “trước trường”, “cạnh ghế” mà không cần từ nối, nên người Việt hay bỏ of hoặc to. In front of và next to là cụm cố định, phải đủ cả cụm."),
      tip("**In front of** nghĩa là ngay phía trước, không phải “đối diện” bên kia đường. Đối diện là **opposite**: The bank is opposite the school."),
      teacher("Bài tập tôi hay giao cho các bạn học viên và thấy hiệu quả nhất là **tả căn phòng các bạn đang ngồi**, ngay bây giờ, bằng năm câu: There is a desk next to the window. There are two books on the desk. Mỗi đồ vật một câu, có there is hoặc there are, có giới từ. Tối nay tả phòng ngủ, mai tả bếp, ngày kia tả phòng khách. Chỉ một tuần, các bạn sẽ không còn buột miệng “In my room have...” nữa."),
      summary(
        "Nói ở đâu đó có cái gì: **there is** + danh từ số ít hoặc không đếm được, **there are** + danh từ số nhiều.",
        "Không dịch “có” thành have khi nói về sự tồn tại: **There is a bed in my room.**",
        "Câu hỏi: **Is there...? Are there any...?** Trả lời ngắn: Yes, there is. No, there aren't.",
        "Vị trí: in, on, under, behind, between; **next to** và **in front of** phải nói đủ cả cụm.",
        "**In front of** là ngay phía trước; đối diện bên kia đường là **opposite**.",
        "Nhắc lần đầu dùng **a/an**; nhắc lại hoặc người nghe đã biết cái nào thì dùng **the**: There is a bed. The bed is new.",
      ),
    ],
  },
  words: [
    word("kitchen", "/ˈkɪtʃ.ən/", "nhà bếp", "There is a big table in the kitchen.", "kitch|en", 0),
    word("bedroom", "/ˈbed.ruːm/", "phòng ngủ", "There are two bedrooms in my flat.", "bed|room", 0),
    word("bathroom", "/ˈbɑːθ.ruːm/", "phòng tắm", "Is there a bathroom upstairs?", "bath|room", 0, "Âm /θ/ đặt đầu lưỡi giữa hai hàm răng, đừng đọc thành /t/."),
    word("table", "/ˈteɪ.bəl/", "cái bàn", "The keys are on the table.", "ta|ble", 0),
    word("chair", "/tʃeə/", "cái ghế", "There are four chairs in the room.", "chair", 0),
    word("sofa", "/ˈsəʊ.fə/", "ghế sô pha", "The cat is under the sofa.", "so|fa", 0),
    word("window", "/ˈwɪn.dəʊ/", "cửa sổ", "The desk is next to the window.", "win|dow", 0),
    word("between", "/bɪˈtwiːn/", "ở giữa", "The lamp is between the bed and the desk.", "be|tween", 1),
  ],
  exercises: [
    mc("a1-6-1", "There ___ two bedrooms in my flat.", ["is", "are", "be"], 1, "Two bedrooms là số nhiều nên dùng there are."),
    mc("a1-6-2", "___ there a TV in the living room?", ["Are", "Do", "Is"], 2, "A TV là số ít nên câu hỏi dùng Is there."),
    reorder("a1-6-3", "Is the cat under the bed?", "Hỏi vị trí với to be: Is + chủ ngữ + giới từ + nơi chốn? Under nghĩa là ở dưới."),
    fill("a1-6-4", "The lamp is next ___ the sofa.", ["to"], "Next to là cụm cố định, nghĩa là bên cạnh."),
    fill("a1-6-5", "There ___ a big window in the kitchen.", ["is", "'s"], "A big window là số ít nên dùng there is."),
    reorder("a1-6-6", "How many chairs are there?", "Hỏi số lượng: How many + danh từ số nhiều + are there? Chairs là số nhiều nên dùng are."),
    listen("a1-6-7", "The keys are on the table.", ["Chìa khóa ở dưới bàn.", "Chìa khóa ở trên bàn.", "Chìa khóa ở trong túi."], 1, "On là ở trên bề mặt."),
    listen("a1-6-8", "Is there a bank near here?", ["Ngân hàng ở đâu?", "Gần đây có chợ không?", "Gần đây có ngân hàng không?"], 2, "Is there...? dùng để hỏi ở đâu đó có cái gì không."),
    correct("a1-6-9", "I have a cat. A cat is under the sofa.", ["I have a cat. The cat is under the sofa.", "I have a cat. It is under the sofa.", "I have a cat. It's under the sofa."], "Con mèo đã được nhắc đến ở câu trước, người nghe biết là con nào, nên câu sau dùng the cat (hoặc thay bằng it)."),
    correct("a1-6-10", "In my kitchen have a big table.", ["There is a big table in my kitchen.", "There's a big table in my kitchen.", "In my kitchen there is a big table.", "In my kitchen there's a big table."], "Nói ở đâu có cái gì thì dùng there is, không dịch “có” thành have."),
  ],
  speaking: [
    say("There is a small kitchen in my house.", "Nhà tôi có một căn bếp nhỏ."),
    say("My phone is on the table.", "Điện thoại của tôi ở trên bàn."),
    say("Is there a bank near here?", "Gần đây có ngân hàng không?"),
  ],
  freeSpeaking: free(
    "What is in your bedroom?",
    "Hãy tả phòng ngủ hoặc phòng khách nhà bạn: có những gì và mỗi thứ ở đâu.",
    "There is a big bed in my bedroom. The bed is next to the window. There are two chairs and a small table. My books are on the table. There isn't a TV.",
  ),
  dialogueQuestions: [
    listenQ("a1-6-d1", "Bàn làm việc trong phòng ngủ ở đâu?", "Is there a desk in the bedroom? Yes, there is. It's next to the window.", ["Cạnh cửa sổ", "Dưới cửa sổ", "Cạnh giường"], 0, "Chị Hoa nói: It's next to the window. Next to là bên cạnh."),
    mc("a1-6-d2", "Gần tòa nhà có gì?", ["Một siêu thị ở ngay bên cạnh", "Một cái chợ ở đối diện", "Một ngân hàng ở phía sau"], 1, "Chị Hoa nói không có siêu thị: No, there isn't. But there's a market opposite the building."),
    listenQ("a1-6-d3", "David có thể để xe máy ở đâu?", "And is there a place for my motorbike? Yes. It's in front of the building.", ["Phía sau tòa nhà", "Trong bếp", "Phía trước tòa nhà"], 2, "In front of the building là phía trước tòa nhà."),
  ],
  reading: reading({
    title: "Quảng cáo cho thuê căn hộ",
    text: `Flat for rent in Cau Giay

Are you a student or a young worker? This flat is for you!

There are two bedrooms and one bathroom. The bathroom is between the bedrooms. There is a big window in the living room, and there is a sofa in front of it. The kitchen is small, but there is a new fridge. There isn't a washing machine.

There is a bus stop in front of the building, and there is a supermarket next to it. There isn't a car park, but there is a place for motorbikes behind the building.

The rent is five million dong a month. Call Mr Pham on oh nine one six, double two eight, four five nine.`,
    glossary: [
      ["for rent", "cho thuê"],
      ["worker", "người đi làm"],
      ["fridge", "tủ lạnh"],
      ["washing machine", "máy giặt"],
      ["bus stop", "trạm xe buýt"],
      ["rent", "tiền thuê nhà"],
      ["million", "triệu"],
      ["a month", "mỗi tháng"],
    ],
    questions: [
      mc("a1-6-r1", "Đây là loại văn bản gì?", ["Quảng cáo cho thuê căn hộ", "Thư mời dự tiệc tân gia", "Tin nhắn hỏi đường"], 0, "Tiêu đề Flat for rent: căn hộ cho thuê. Bài tả căn hộ, giá thuê và số điện thoại liên hệ."),
      mc("a1-6-r2", "Căn hộ có mấy phòng ngủ?", ["Một", "Hai", "Ba"], 1, "There are two bedrooms and one bathroom."),
      mc("a1-6-r3", "Phòng tắm ở đâu?", ["Phía sau tòa nhà", "Cạnh bếp", "Giữa hai phòng ngủ"], 2, "The bathroom is between the bedrooms."),
      mc("a1-6-r4", "Căn hộ không có gì?", ["Tủ lạnh", "Máy giặt", "Ghế sô pha"], 1, "There isn't a washing machine. Căn hộ có tủ lạnh mới và ghế sô pha trong phòng khách."),
      fill("a1-6-r5", "Hoàn thành câu theo bài đọc: The supermarket is ___ to the bus stop.", ["next"], "There is a supermarket next to it: it ở đây là trạm xe buýt."),
      mc("a1-6-r6", "Người đi xe máy để xe ở đâu?", ["Phía sau tòa nhà", "Phía trước tòa nhà", "Trong phòng khách"], 0, "There is a place for motorbikes behind the building. Behind là phía sau."),
    ],
  }),
  dialogue: dialogue(
    "Xem căn hộ cho thuê",
    "David, một kỹ sư người Canada, đến xem căn hộ cho thuê ở Đà Nẵng. Chị Hoa là chủ nhà, dẫn anh đi xem từng phòng.",
    { A: "David, người thuê nhà", B: "Chị Hoa, chủ nhà" },
    A("Hello. Is this the flat for rent?", "Xin chào. Đây có phải căn hộ cho thuê không ạ?"),
    B("Yes, it is. Come in, please. This is the living room.", "Đúng rồi. Mời anh vào. Đây là phòng khách."),
    A("It's nice. There's a big sofa. How many bedrooms are there?", "Đẹp quá. Có một cái ghế sô pha to. Có bao nhiêu phòng ngủ ạ?"),
    B("There are two bedrooms. There's a bathroom between them.", "Có hai phòng ngủ. Có một phòng tắm ở giữa hai phòng."),
    A("Is there a desk in the bedroom?", "Trong phòng ngủ có bàn làm việc không ạ?"),
    B("Yes, there is. It's next to the window.", "Có. Nó ở cạnh cửa sổ."),
    A("Great. And the kitchen? Are there any chairs?", "Tuyệt. Còn bếp thì sao? Có ghế không ạ?"),
    B("Yes, there are four chairs and a table. The kitchen is behind the living room.", "Có, có bốn cái ghế và một cái bàn. Bếp ở phía sau phòng khách."),
    A("Is there a supermarket near here?", "Gần đây có siêu thị không ạ?"),
    B("No, there isn't. But there's a market opposite the building.", "Không có. Nhưng có một cái chợ đối diện tòa nhà."),
    A("And is there a place for my motorbike?", "Còn có chỗ để xe máy của tôi không ạ?"),
    B("Yes. It's in front of the building.", "Có. Ngay phía trước tòa nhà."),
  ),
  task: task({
    prompt: "Hãy viết 5–7 câu tả căn phòng bạn đang ngồi (hoặc phòng ngủ của bạn) cho một người bạn nước ngoài: có những gì và mỗi thứ ở đâu.",
    hints: [
      "Mỗi đồ vật một câu với There is (số ít) hoặc There are (số nhiều).",
      "Dùng giới từ vị trí: on, under, next to, between, in front of.",
      "Thêm một câu phủ định: There isn't... hoặc There aren't any...",
      "Không dịch “có” thành have.",
    ],
    model: "This is my bedroom. There is a bed next to the window. There is a small table between the bed and the door. There are two books on the table. My bag is under the chair. There isn't a TV in my room.",
    checklist: [
      "Dùng there is với danh từ số ít, there are với danh từ số nhiều",
      "Không có câu nào dùng have để nói ở đâu đó có cái gì",
      "Mỗi câu tả vị trí có một giới từ đúng",
      "Nếu dùng next to hoặc in front of thì viết đủ cả cụm (không viết next the window)",
      "Có ít nhất một câu phủ định",
      "Đồ vật đã nhắc đến hoặc ai cũng biết là cái nào thì dùng the (the bed, the table)",
    ],
    minWords: 25,
  }),
});

export const tiengAnhA1: Course = {
  slug: "tieng-anh-a1",
  title: "Tiếng Anh A1: Nền tảng",
  level: "A1",
  goal: "lo-trinh",
  summary: "Cho người mất gốc: nói được những câu đầu tiên về bản thân, gia đình và cuộc sống hằng ngày.",
  outcomes: [
    "Giới thiệu bản thân và người khác",
    "Nói số, tuổi, giờ và số điện thoại",
    "Kể về một ngày của bạn và sở thích của bạn",
    "Gọi món, mua sắm và hỏi đồ vật ở đâu",
    "Đọc hiểu tin nhắn, quảng cáo và email ngắn",
    "Tự nói và viết vài câu đơn giản về bản thân, gia đình và cuối tuần vừa rồi",
  ],
  audience: [
    "Người mất gốc hoặc đã quên gần hết kiến thức phổ thông",
    "Người muốn học lại tiếng Anh từ đầu một cách bài bản",
  ],
  teacher: {
    name: "Cô Hà My",
    initials: "HM",
    bio: "Người dẫn dắt khóa A1. Giải thích từng bước bằng tiếng Việt, chú trọng sửa phát âm cho người mới bắt đầu.",
  },
  faqs: [
    { q: "Mình mất gốc hoàn toàn thì học được không?", a: "Được. Khóa A1 bắt đầu từ động từ to be và những câu chào hỏi đầu tiên." },
    { q: "Học xong A1 thì học gì tiếp?", a: "Bạn học tiếp khóa A2: Giao tiếp hằng ngày. Mỗi cấp có chứng chỉ riêng." },
  ],
  status: "open",
  modules: [
    chapter(1, "Làm quen", [chaoHoi, giaDinh, soTuoi, nNgheNghiepVaQuocTich]),
    chapter(2, "Cuộc sống hằng ngày", [motNgay, nThoiGianVaLichHen, nSoThich, nHoiDapHangNgay]),
    chapter(3, "Đồ ăn, mua sắm và con người", [doAn, nMuaSamVaMauSac, nToiCoThe, nMoTaNguoi]),
    chapter(4, "Nơi chốn và hoạt động", [nhaNoiChon, nThanhPhoCuaToi, nDangLamGi, nCuoiTuanVuaRoi]),
  ],
  finalTest: finalBank(
    [
      // chương 1: to be, a/an, số nhiều, sở hữu, số và tuổi, nghề và quốc tịch
      mc("a1-f01", "Minh and I ___ from Hue.", ["am", "is", "are"], 2, "Minh and I là we (chúng tôi) nên đi với are."),
      fill("a1-f02", "My aunt is ___ engineer. (một)", ["an"], "Engineer bắt đầu bằng âm nguyên âm /e/ nên dùng an. Nói nghề nghiệp luôn cần a hoặc an."),
      reorder("a1-f03", "Where is your new teacher from?", "Câu hỏi Wh- với to be: Where + is + chủ ngữ + from? Tính từ new đứng trước danh từ teacher, còn from đứng cuối câu."),
      listenQ("a1-f04", "Kate bao nhiêu tuổi và đến từ đâu?", "Hi, I'm Kate. I'm forty-three, and I'm from England.", ["43 tuổi, đến từ Anh", "34 tuổi, đến từ Anh", "43 tuổi, đến từ Hàn Quốc"], 0, "Forty-three là 43 (bốn mươi ba); England là nước Anh."),
      correct("a1-f05", "Her brothers is doctors.", ["Her brothers are doctors."], "Her brothers là số nhiều (they) nên dùng are."),
      // chương 2: hiện tại đơn, trạng từ tần suất, giờ và giới từ thời gian, sở thích, câu hỏi Wh- với do/does
      mc("a1-f06", "My English class starts ___ Monday.", ["in", "on", "at"], 1, "Trước thứ trong tuần dùng on: on Monday."),
      fill("a1-f07", "Where ___ your brother work? (hiện tại đơn)", ["does"], "Your brother là he nên câu hỏi Wh- dùng does, động từ work giữ nguyên."),
      reorder("a1-f08", "Does your mother like cooking?", "Câu hỏi với she dùng Does; sau like là động từ thêm -ing: like cooking."),
      listenQ("a1-f09", "Tom làm gì vào cuối tuần?", "Tom works from Monday to Friday. At the weekend, he loves playing football.", ["Anh ấy đi làm", "Anh ấy chơi bóng đá", "Anh ấy xem ti vi"], 1, "At the weekend, he loves playing football: cuối tuần anh ấy thích chơi bóng đá. Anh ấy đi làm từ thứ Hai đến thứ Sáu."),
      correct("a1-f10", "He don't like watching TV.", ["He doesn't like watching TV."], "Chủ ngữ he thì phủ định dùng doesn't, không dùng don't."),
      // chương 3: đếm được và không đếm được, some/any, mua sắm, How much, can, have got
      mc("a1-f11", "How much ___ these shoes?", ["is", "are", "am"], 1, "These shoes là số nhiều nên hỏi giá bằng How much are...?"),
      fill("a1-f12", "My sister ___ got long black hair.", ["has", "'s"], "My sister là she nên dùng has got (viết tắt 's got)."),
      reorder("a1-f13", "I'd like a red dress, please.", "Tính từ chỉ màu đứng trước danh từ: a red dress, không nói a dress red."),
      listen("a1-f14", "My sister can't swim, but she can ride a bike.", ["Em gái tôi biết bơi nhưng không biết đi xe đạp.", "Em gái tôi không biết bơi nhưng biết đi xe đạp.", "Em gái tôi không biết bơi và cũng không biết đi xe đạp."], 1, "Can't swim là không biết bơi; can ride a bike là biết đi xe đạp."),
      correct("a1-f15", "She can speaks English very well.", ["She can speak English very well."], "Sau can, động từ luôn ở nguyên mẫu: can speak, không thêm -s."),
      // chương 4: there is/are, giới từ vị trí, thành phố, hiện tại tiếp diễn, was/were
      mc("a1-f16", "___ there any shops near your house?", ["Is", "Are", "Do"], 1, "Any shops là số nhiều nên câu hỏi dùng Are there...?"),
      fill("a1-f17", "Look! The children ___ playing in the park.", ["are"], "Look! cho thấy việc đang xảy ra: hiện tại tiếp diễn. The children là số nhiều nên dùng are + playing."),
      reorder("a1-f18", "What is your sister doing?", "Hỏi ai đang làm gì: What + is + chủ ngữ + V-ing?"),
      listenQ("a1-f19", "Hôm qua thời tiết thế nào và Mai ở đâu?", "Hi, I'm Mai. It was very hot yesterday, so I was at home all day.", ["Trời nóng, Mai ở biển", "Trời nóng, Mai ở nhà cả ngày", "Trời lạnh, Mai ở văn phòng"], 1, "It was very hot yesterday: hôm qua trời rất nóng; I was at home all day: Mai ở nhà cả ngày."),
      correct("a1-f20", "There was three people in the shop.", ["There were three people in the shop."], "Three people là số nhiều nên dùng there were, không dùng there was."),
    ],
    FINAL_EXTRA_TIENG_ANH_A1,
  ),
};
