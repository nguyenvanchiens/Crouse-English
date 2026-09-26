import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../builders";
import nKyNghiCuaToi from "../lessons/a2/ky-nghi-cua-toi";
import nNgayXuaToiTung from "../lessons/a2/ngay-xua-toi-tung";
import nTieuSu from "../lessons/a2/tieu-su";
import nDuDoanTuongLai from "../lessons/a2/du-doan-tuong-lai";
import nLoiMoiVaDeNghi from "../lessons/a2/loi-moi-va-de-nghi";
import nGoiDienThoai from "../lessons/a2/goi-dien-thoai";
import nBaoNhieu from "../lessons/a2/bao-nhieu";
import nQuaVaKhongDu from "../lessons/a2/qua-va-khong-du";
import nCuaAi from "../lessons/a2/cua-ai";
import nVuaMoiDaChua from "../lessons/a2/vua-moi-da-chua";
import nDieuKienLoai01 from "../lessons/a2/dieu-kien-loai-0-va-1";
import nQuaKhuTiepDien from "../lessons/a2/qua-khu-tiep-dien";
import { FINAL_EXTRA_TIENG_ANH_A2 } from "../banks/final-tieng-anh-a2";
import { chapter, finalBank } from "../review";
import type { Course } from "../types";

const homQua = lesson({
  slug: "hom-qua-ban-lam-gi",
  title: "Hôm qua bạn làm gì",
  minutes: 30,
  lecture: {
    title: "Thì quá khứ đơn: kể chuyện đã xảy ra",
    blocks: [
      p("Sáng thứ Hai ở văn phòng, đồng nghiệp người nước ngoài hỏi bạn: “What did you do at the weekend?”. Bạn muốn kể mình về quê, đi ăn cưới, dọn nhà. Lúc này bạn cần **thì quá khứ đơn**, thì được dùng nhiều nhất mỗi khi kể chuyện đã xảy ra."),
      p("Tiếng Việt chỉ cần thêm “hôm qua”, “tuần trước” là người nghe hiểu chuyện đã qua. Tiếng Anh thì khác: **động từ phải đổi sang dạng quá khứ**. Với động từ có quy tắc, ta thêm **-ed**: work → worked, play → played. Nhiều động từ thông dụng lại là **bất quy tắc**, phải học thuộc: go → went, have → had, see → saw, buy → bought, eat → ate, get → got, make → made."),
      table(
        ["Dạng câu", "Cấu trúc", "Ví dụ"],
        ["Khẳng định", "chủ ngữ + V-ed / V2", "I worked late yesterday."],
        ["Phủ định", "chủ ngữ + didn't + V nguyên mẫu", "I didn't work yesterday."],
        ["Nghi vấn", "Did + chủ ngữ + V nguyên mẫu?", "Did you work yesterday?"],
        ["Có từ để hỏi", "Wh- + did + chủ ngữ + V nguyên mẫu?", "Where did you go?"],
      ),
      p("Điểm mấu chốt: **did chỉ xuất hiện một lần**. Khi did / didn't đã gánh nghĩa quá khứ, động từ chính quay về **dạng nguyên mẫu**. Riêng động từ to be dùng **was / were** như bạn đã học ở bài Cuối tuần vừa rồi của khóa A1, và không cần did: I was tired. Were you at home?"),
      table(
        ["Âm cuối của động từ", "-ed đọc là", "Ví dụ"],
        ["âm vô thanh: /p/, /k/, /s/, /ʃ/, /tʃ/, /f/, /θ/", "/t/", "worked, watched, finished, laughed"],
        ["nguyên âm và các âm hữu thanh còn lại", "/d/", "played, called, lived"],
        ["/t/, /d/", "/ɪd/", "wanted, visited, decided"],
      ),
      tip("Mẹo đọc -ed: chỉ khi động từ tận cùng bằng **/t/** hoặc **/d/** mới thêm một âm tiết /ɪd/. Còn lại, -ed chỉ là một âm nhẹ /t/ hoặc /d/ dính vào cuối từ: worked đọc gọn một âm tiết /wɜːkt/, không đọc thành “wơ-kờ-tết”."),
      ex("What did you do yesterday?", "Hôm qua bạn làm gì?"),
      ex("I didn't go out. I watched a film at home.", "Tôi không ra ngoài. Tôi xem phim ở nhà.", "Didn't go giữ nguyên mẫu vì đã có didn't; watched chia quá khứ vì là câu khẳng định."),
      ex("We moved to Da Nang three years ago.", "Chúng tôi chuyển đến Đà Nẵng ba năm trước.", "Ago đứng sau khoảng thời gian: three years ago, two days ago."),
      ex("Were you at home last night? No, I was at work.", "Tối qua bạn có ở nhà không? Không, tôi ở chỗ làm.", "Với to be không dùng did: nói Were you...?, không nói Did you be...?"),
      tip("Các cụm chỉ thời gian quá khứ hay gặp: **yesterday**, **last night**, **last week**, **last year**, **two days ago**. Không nói “yesterday night”, hãy nói **last night**."),
      mistake("I didn't went to school.", "I didn't go to school.", "Đã có didn't báo quá khứ rồi thì động từ chính giữ nguyên mẫu. Người Việt hay đổi cả hai vì sợ thiếu dấu hiệu quá khứ."),
      mistake("Yesterday I go to the market.", "Yesterday I went to the market.", "Tiếng Việt có “hôm qua” là đủ, động từ không đổi. Tiếng Anh có yesterday vẫn phải chia động từ ở quá khứ."),
      mistake("I was go to the market.", "I went to the market.", "Nhiều người nghĩ was nghĩa là “đã” nên ghép was với động từ. Was chỉ là quá khứ của to be; muốn nói “đã đi” thì chỉ cần went."),
      teacher("Khi đứng lớp, tôi thấy học viên người Việt thuộc quy tắc rất nhanh, nhưng mở miệng ra vẫn “Yesterday I go”, vì trong đầu vẫn nghĩ bằng tiếng Việt. Cách chữa của tôi: **tối nào trước khi ngủ, các bạn hãy nói to năm câu về những việc mình đã làm trong ngày**, bắt đầu bằng I woke up..., I had..., I went... Làm đều ba tuần, miệng các bạn sẽ tự bật ra went, had, bought mà không cần nghĩ. Và nhớ đọc rõ âm cuối: worked mà nuốt mất /t/ thì người nghe tưởng các bạn nói work, tức là chuyện hằng ngày chứ không phải chuyện hôm qua."),
      summary(
        "Kể chuyện đã qua thì động từ phải đổi sang quá khứ, kể cả khi câu đã có yesterday, last week, ago.",
        "Động từ có quy tắc thêm -ed (worked, played); động từ bất quy tắc phải thuộc (go → went, buy → bought).",
        "Phủ định và câu hỏi dùng didn't / did, động từ chính về nguyên mẫu: I didn't go. Did you go?",
        "To be dùng was / were, không cần did và không ghép với động từ khác: không nói I was go.",
        "Đuôi -ed chỉ đọc /ɪd/ sau âm /t/, /d/; còn lại đọc nhẹ /t/ hoặc /d/, và nhớ đọc rõ âm cuối.",
      ),
    ],
  },
  words: [
    word("yesterday", "/ˈjes.tə.deɪ/", "hôm qua", "I called my mum yesterday.", "yes|ter|day", 0),
    word("wedding", "/ˈwed.ɪŋ/", "đám cưới", "We went to a wedding in my hometown last Saturday.", "wed|ding", 0, "Nhớ âm /ŋ/ ở cuối, giống “ng” trong tiếng Việt: “wé-đing”, đừng bỏ mất thành “wé-đi”."),
    word("travel", "/ˈtræv.əl/", "đi du lịch, đi lại", "They travelled to Hue last summer.", "trav|el", 0),
    word("finish", "/ˈfɪn.ɪʃ/", "hoàn thành, kết thúc", "I finished work at six.", "fin|ish", 0, "Finished đọc là /ˈfɪn.ɪʃt/, chỉ thêm âm /t/, không đọc thành “fi-nít-sờ-đờ”."),
    word("decide", "/dɪˈsaɪd/", "quyết định", "She decided to stay at home.", "de|cide", 1),
    word("ago", "/əˈɡəʊ/", "cách đây, trước", "I started this job two years ago.", "a|go", 1),
    word("watch", "/wɒtʃ/", "xem", "We watched a football match last night.", "watch", 0),
  ],
  exercises: [
    mc("a2-1-1", "I ___ my grandparents last weekend.", ["visit", "visited", "visiting", "visits"], 1, "Last weekend là thời gian đã qua nên dùng quá khứ: visited."),
    mc("a2-1-2", "Từ nào có đuôi -ed đọc là /ɪd/?", ["played", "worked", "wanted"], 2, "Want kết thúc bằng âm /t/ nên wanted đọc là /ˈwɒn.tɪd/."),
    fill("a2-1-3", "She didn't ___ to the party yesterday. (go)", ["go"], "Sau didn't, động từ giữ nguyên mẫu: go, không dùng went."),
    fill("a2-1-4", "I ___ a new phone two days ago. (buy)", ["bought"], "Buy là động từ bất quy tắc: buy → bought."),
    reorder("a2-1-5", "What did you buy at the market?", "Từ để hỏi + did + chủ ngữ + động từ nguyên mẫu: What did you buy...?"),
    reorder("a2-1-6", "My mother made a birthday cake.", "Make là động từ bất quy tắc: make → made."),
    listen("a2-1-7", "I finished work at six yesterday.", ["Hôm nay tôi làm xong việc lúc sáu giờ.", "Hôm qua tôi làm xong việc lúc sáu giờ.", "Hôm qua tôi bắt đầu làm việc lúc sáu giờ."], 1),
    listen("a2-1-8", "Did you call your mother last night?", ["Tối nay bạn sẽ gọi cho mẹ chứ?", "Mẹ bạn có gọi cho bạn tối qua không?", "Tối qua bạn có gọi cho mẹ không?"], 2, "Did you call...? là câu hỏi quá khứ: bạn có gọi... không."),
    correct("a2-1-9", "We didn't saw the film last night.", "We didn't see the film last night.", "Đã có didn't báo quá khứ thì động từ chính về nguyên mẫu: didn't see, không phải didn't saw."),
    correct("a2-1-10", "Last Sunday my father cook dinner for us.", ["Last Sunday my father cooked dinner for us.", "My father cooked dinner for us last Sunday."], "Có last Sunday là chuyện đã qua, động từ phải chia quá khứ: cook → cooked."),
  ],
  speaking: [
    say("Yesterday I visited my friend in Hanoi.", "Hôm qua tôi đến thăm bạn tôi ở Hà Nội."),
    say("I didn't watch TV last night.", "Tối qua tôi không xem ti vi."),
    say("We went to Da Lat two years ago.", "Chúng tôi đã đi Đà Lạt hai năm trước."),
  ],
  freeSpeaking: free(
    "What did you do last weekend?",
    "Kể thành tiếng 4–5 câu về cuối tuần vừa rồi của bạn: bạn đi đâu, làm gì, có việc gì không làm, và bạn thấy cuối tuần đó thế nào.",
    "Last weekend I didn't go far. On Saturday morning I cleaned my flat, and then I went to the market with my mother. We bought some fruit and fish. In the evening my friends came to my house and we watched a film. It was a quiet but nice weekend.",
  ),
  dialogueQuestions: [
    listenQ("a2-1-d1", "Vì sao Lan về quê cuối tuần vừa rồi?", "I went back to my hometown. My cousin got married on Saturday.", ["Để thăm ông bà", "Để đi đám cưới em họ", "Để dọn nhà", "Để đi du lịch"], 1, "My cousin got married on Saturday: em họ của Lan cưới vào thứ Bảy."),
    mc("a2-1-d2", "Cuối tuần Mark đã làm gì?", ["Về quê ăn cưới", "Đi xem phim ở rạp với bạn", "Dọn nhà và xem một bộ phim ở nhà"], 2, "I didn't go out. I cleaned my flat and watched a film: Mark không ra ngoài, dọn nhà rồi xem phim."),
    listenQ("a2-1-d3", "Bạn của Mark kể cho anh ấy về bộ phim khi nào?", "An old Vietnamese film. My friend told me about it two weeks ago.", ["Hôm qua", "Tuần trước", "Hai tuần trước", "Hai tháng trước"], 2, "Two weeks ago là hai tuần trước."),
  ],
  reading: reading({
    title: "Blog: Chủ nhật ở làng gốm Bát Tràng",
    text: `Last Sunday my husband and I didn't stay at home. We took the bus to Bat Trang, a pottery village near Hanoi. The trip took about forty minutes.

We arrived at nine o'clock. First we walked around the old streets and watched the potters at work. Then we decided to make some cups. A young woman helped us. My cup was terrible, but my husband's cup was beautiful!

We had lunch at a small restaurant by the river. The food was cheap and very good. After lunch I bought six blue bowls for my mother. They weren't expensive.

We came back home at five. I was tired, but it was a great day. Next time I want to bring our children.`,
    glossary: [
      ["pottery village", "làng gốm"],
      ["potter", "thợ gốm"],
      ["at work", "đang làm việc"],
      ["terrible", "rất tệ"],
      ["bowl", "cái bát"],
    ],
    questions: [
      mc("a2-1-r1", "Bài blog chủ yếu kể về điều gì?", ["Một ngày đi chơi ở làng gốm Bát Tràng", "Cách làm cốc gốm ở nhà", "Một nhà hàng mới bên bờ sông", "Kế hoạch cho Chủ nhật tuần sau"], 0, "Cả bài kể lại những việc hai vợ chồng đã làm ở Bát Tràng vào Chủ nhật tuần trước."),
      mc("a2-1-r2", "Hai vợ chồng đến Bát Tràng bằng gì?", ["Xe máy", "Xe buýt", "Taxi"], 1, "We took the bus to Bat Trang."),
      mc("a2-1-r3", "Chiếc cốc của ai đẹp?", ["Của người viết", "Của người phụ nữ trẻ", "Của chồng người viết"], 2, "My cup was terrible, but my husband's cup was beautiful!"),
      fill("a2-1-r4", "Sau bữa trưa, người viết mua sáu cái bát màu xanh cho mẹ: I ___ six blue bowls for my mother. (buy)", ["bought"], "Buy là động từ bất quy tắc: buy → bought."),
      mc("a2-1-r5", "Lần sau người viết muốn làm gì?", ["Ở nhà nghỉ ngơi", "Đưa các con đi cùng", "Mua thêm bát cho mẹ"], 1, "Next time I want to bring our children."),
    ],
  }),
  dialogue: dialogue(
    "Sáng thứ Hai ở văn phòng",
    "Sáng thứ Hai, Mark, đồng nghiệp người Úc, hỏi Lan cuối tuần làm gì. Lan kể chuyện về quê ăn cưới rồi hỏi lại Mark.",
    { A: "Mark (đồng nghiệp)", B: "Lan" },
    A("Good morning, Lan. What did you do at the weekend?", "Chào Lan. Cuối tuần bạn làm gì?"),
    B("I went back to my hometown. My cousin got married on Saturday.", "Mình về quê. Thứ Bảy em họ mình cưới."),
    A("Oh, nice! Did you enjoy the wedding?", "Ồ, hay quá! Bạn đi đám cưới có vui không?"),
    B("Yes, I did. We ate a lot and danced until late.", "Vui lắm. Bọn mình ăn rất nhiều và nhảy đến khuya."),
    A("When did you come back?", "Bạn về lại lúc nào?"),
    B("I came back last night. What about you? What did you do?", "Tối qua mình mới về. Còn bạn? Bạn làm gì?"),
    A("I didn't go out. I cleaned my flat and watched a film.", "Mình không ra ngoài. Mình dọn nhà rồi xem phim."),
    B("Which film did you watch?", "Bạn xem phim gì?"),
    A("An old Vietnamese film. My friend told me about it two weeks ago.", "Một bộ phim Việt Nam cũ. Bạn mình kể cho mình về nó hai tuần trước."),
    B("Did you like it?", "Bạn có thích không?"),
    A("Yes, I did. It was really good!", "Có. Phim hay thật sự!"),
  ),
  task: task({
    prompt: "Viết 6–7 câu (khoảng 40–60 từ) kể lại những việc bạn đã làm vào cuối tuần vừa rồi, như thể đang trả lời đồng nghiệp hỏi “What did you do at the weekend?”.",
    hints: [
      "Mở đầu bằng một cụm thời gian quá khứ: Last weekend, On Saturday, Yesterday.",
      "Dùng vài động từ bất quy tắc quen thuộc: went, had, made, bought, ate, came.",
      "Thêm một câu về việc bạn không làm: I didn't + động từ nguyên mẫu.",
      "Kết bằng cảm nhận với was: It was a quiet but happy weekend.",
    ],
    model: "Last weekend I visited my grandparents in Nam Dinh. I went there by bus on Saturday morning. My grandmother made a big lunch, and we ate together in the garden. In the afternoon I helped my grandfather in the kitchen. I didn't watch TV at all. I came back home on Sunday evening. It was a quiet but happy weekend.",
    checklist: [
      "Mọi động từ kể chuyện đều ở dạng quá khứ (V-ed hoặc V2)",
      "Có ít nhất 2 động từ bất quy tắc (went, had, made, bought...)",
      "Có ít nhất 1 câu phủ định didn't + động từ nguyên mẫu (không viết didn't went)",
      "Có cụm chỉ thời gian quá khứ (last weekend, on Saturday, yesterday...)",
      "Không ghép was / were với động từ khác (không viết I was go)",
    ],
    minWords: 40,
  }),
});

const keHoach = lesson({
  slug: "ke-hoach-cuoi-tuan",
  title: "Kế hoạch cuối tuần",
  minutes: 28,
  lecture: {
    title: "Be going to và hiện tại tiếp diễn chỉ tương lai",
    blocks: [
      p("Chiều thứ Sáu, đồng nghiệp hỏi bạn: “What are you doing this weekend?”. Nhiều người Việt chỉ biết đáp bằng will: “I will go to Vung Tau”. Câu đó không sai ngữ pháp, nhưng nghe như bạn vừa mới quyết định. Khi kế hoạch đã nghĩ từ trước, người bản xứ dùng **be going to** hoặc **hiện tại tiếp diễn**."),
      p("Công thức: **am / is / are + going to + động từ nguyên mẫu**. Động từ to be chia theo chủ ngữ, còn động từ sau going to luôn giữ nguyên mẫu."),
      table(
        ["Chủ ngữ", "be going to", "Ví dụ"],
        ["I", "am going to", "I'm going to clean my room."],
        ["he / she / it", "is going to", "She's going to visit her aunt."],
        ["you / we / they", "are going to", "We're going to have a picnic."],
      ),
      table(
        ["Dạng câu", "Ví dụ"],
        ["Khẳng định", "She's going to visit her aunt."],
        ["Phủ định", "I'm not going to work on Sunday."],
        ["Nghi vấn", "Are you going to stay at home?"],
        ["Trả lời ngắn", "Yes, I am. / No, I'm not."],
      ),
      tip("Khi nói nhanh, người bản xứ đọc going to thành /ˈɡə.nə/, viết lóng là gonna. Bạn cần **nghe hiểu** cách đọc này, nhưng khi viết thì luôn viết đầy đủ **going to**."),
      p("Nếu kế hoạch đã **hẹn giờ, hẹn người, đặt vé** cụ thể, dùng **hiện tại tiếp diễn** kèm thời gian tương lai: I'm meeting Lan on Saturday. Chính thời gian trong câu cho biết đây là chuyện sắp tới, không phải chuyện đang diễn ra."),
      table(
        ["Cách nói", "Dùng khi", "Ví dụ"],
        ["be going to + V", "dự định đã nghĩ từ trước", "I'm going to learn to swim."],
        ["am / is / are + V-ing", "cuộc hẹn đã sắp xếp: có giờ, có người, có vé", "I'm meeting Lan at seven."],
        ["will + V", "quyết định ngay lúc nói", "It's raining. I'll take a taxi."],
      ),
      ex("What are you doing this weekend?", "Cuối tuần này bạn làm gì?", "Câu hỏi rất tự nhiên về kế hoạch, thường dùng trước khi rủ ai đó đi chơi."),
      ex("I'm going to see a film on Sunday.", "Chủ nhật tôi định đi xem phim."),
      ex("I'm not going to cook tonight. We're eating out.", "Tối nay tôi không định nấu. Chúng tôi đi ăn ngoài.", "Eat out là đi ăn ở nhà hàng, quán. We're eating out là hiện tại tiếp diễn chỉ kế hoạch đã định cho tối nay."),
      p("Muốn mời ai đó, dùng **Would you like to...?** hoặc **Do you want to...?** Nhận lời: **I'd love to.**, **Sounds great!** Từ chối lịch sự: **Sorry, I can't. I'm working on Saturday.**"),
      ex("Would you like to come to my party?", "Bạn có muốn đến bữa tiệc của mình không?", "Would you like to...? lịch sự hơn Do you want to...?, hợp khi mời đồng nghiệp hoặc người mới quen."),
      tip("Khi từ chối, người bản xứ thường nói **Sorry** và kèm một lý do ngắn. Chỉ nói “No” nghe rất cộc."),
      mistake("I going to visit my parents.", "I'm going to visit my parents.", "Tiếng Việt nói “tôi định đi” không cần động từ to be, nên người Việt hay bỏ am / is / are. Trong tiếng Anh, going to luôn cần to be đứng trước."),
      mistake("Would you like go to the cinema?", "Would you like to go to the cinema?", "Sau would like phải có to trước động từ. Người Việt hay quên vì câu “bạn có muốn đi” không có từ nối nào."),
      teacher("Học viên hay hỏi tôi: will và going to khác nhau thế nào, sao mỗi sách nói một kiểu? Tôi đúc kết cho các bạn dễ nhớ: **đã nghĩ từ trước thì going to, đã hẹn đã đặt thì -ing, vừa nghĩ ra thì will**. Chọn nhầm một chút người nghe vẫn hiểu. Cái làm các bạn nghe cứng nhắc là đáp lời mời bằng “Yes, I like” hay một chữ “No”. Các bạn hãy học thuộc hai câu nhận lời và hai câu từ chối trong bài như học số điện thoại, rồi dùng ngay lần tới có người rủ đi cà phê."),
      summary(
        "Dự định đã nghĩ từ trước: am / is / are + going to + động từ nguyên mẫu. Không được bỏ to be.",
        "Cuộc hẹn đã sắp xếp (có giờ, có người, có vé): hiện tại tiếp diễn kèm thời gian, như I'm meeting Lan at seven.",
        "Will dành cho quyết định ngay lúc nói: It's raining. I'll take a taxi.",
        "Mời: Would you like to + động từ? (nhớ có to). Nhận lời: I'd love to. Từ chối: Sorry, I can't. kèm một lý do ngắn.",
      ),
    ],
  },
  words: [
    word("plan", "/plæn/", "kế hoạch; lên kế hoạch", "Do you have any plans for the weekend?", "plan", 0),
    word("invite", "/ɪnˈvaɪt/", "mời", "She invited me to her birthday party.", "in|vite", 1),
    word("free", "/friː/", "rảnh", "Are you free on Saturday?", "free", 0, "Free còn có nghĩa là miễn phí, tùy ngữ cảnh."),
    word("busy", "/ˈbɪz.i/", "bận", "Sorry, I'm busy tomorrow.", "bus|y", 0, "Đọc là /ˈbɪz.i/, không đọc là “bớt-si”."),
    word("tomorrow", "/təˈmɒr.əʊ/", "ngày mai", "I'm meeting my friends tomorrow.", "to|mor|row", 1),
    word("cinema", "/ˈsɪn.ə.mə/", "rạp chiếu phim", "Let's go to the cinema tonight.", "cin|e|ma", 0),
    word("picnic", "/ˈpɪk.nɪk/", "buổi dã ngoại", "We're going to have a picnic in the park.", "pic|nic", 0),
  ],
  exercises: [
    mc("a2-2-1", "I ___ going to visit my aunt on Sunday.", ["is", "am", "are"], 1, "I đi với am: I am going to."),
    mc("a2-2-2", "A: Would you like to come to my party? B: ___", ["Yes, I like.", "No, I don't like.", "I'd love to!"], 2, "I'd love to là cách nhận lời tự nhiên nhất."),
    fill("a2-2-3", "We're ___ to have a picnic this weekend.", ["going"], "Cấu trúc be going to + động từ nguyên mẫu."),
    fill("a2-2-4", "Would you like ___ come with us?", ["to"], "Would like + to + động từ."),
    reorder("a2-2-5", "Who are you going to invite?", "Câu hỏi với going to: từ để hỏi + are + chủ ngữ + going to + động từ nguyên mẫu."),
    reorder("a2-2-6", "What time are you meeting Lan?", "Hiện tại tiếp diễn cho một cuộc hẹn đã sắp xếp: What time + are you + meeting...?"),
    listen("a2-2-7", "Sorry, I can't. I'm working on Saturday.", ["Xin lỗi, mình không đi được. Thứ Bảy mình phải làm việc.", "Xin lỗi, thứ Bảy mình rảnh.", "Mình rất muốn đi vào thứ Bảy."], 0),
    listen("a2-2-8", "Are you free tomorrow evening?", ["Tối nay bạn có rảnh không?", "Sáng mai bạn có rảnh không?", "Tối mai bạn có rảnh không?"], 2, "Tomorrow evening là tối mai."),
    correct("a2-2-9", "She going to buy a new bike next month.", ["She's going to buy a new bike next month.", "She is going to buy a new bike next month."], "Going to luôn cần to be đứng trước. She đi với is: She's going to buy..."),
    correct("a2-2-10", "Would you like come to my house for dinner?", "Would you like to come to my house for dinner?", "Sau would like phải có to trước động từ: Would you like to come...?"),
  ],
  speaking: [
    say("I'm going to visit my parents this weekend.", "Cuối tuần này tôi định về thăm bố mẹ."),
    say("Would you like to have dinner with us on Friday?", "Thứ Sáu bạn có muốn ăn tối với chúng tôi không?"),
    say("Sorry, I can't. I'm meeting my friend tomorrow.", "Xin lỗi, mình không đi được. Mai mình có hẹn với bạn."),
  ],
  freeSpeaking: free(
    "What are you going to do this weekend?",
    "Nói 4–5 câu về cuối tuần này của bạn: một việc bạn định làm (going to), một cuộc hẹn đã sắp xếp (hiện tại tiếp diễn) và một việc bạn không định làm.",
    "This weekend I'm going to stay in the city. On Saturday morning I'm going to clean my room and wash my clothes. In the afternoon I'm meeting my old friend Hanh at a café. On Sunday I'm having lunch with my parents. I'm not going to work at the weekend.",
  ),
  dialogueQuestions: [
    mc("a2-2-d1", "Sáng thứ Bảy Sarah định làm gì?", ["Đi dã ngoại", "Dọn nhà", "Ăn tối với bố mẹ", "Đi xem phim"], 1, "I'm going to clean my flat on Saturday morning: sáng thứ Bảy Sarah định dọn nhà."),
    listenQ("a2-2-d2", "Mọi người hẹn gặp nhau ở đâu, lúc mấy giờ?", "We're meeting at the park gate at three.", ["Ở cổng công viên, lúc ba giờ", "Ở quán cà phê, lúc ba giờ", "Ở cổng công viên, lúc hai giờ"], 0, "At the park gate at three: ở cổng công viên lúc ba giờ."),
    listenQ("a2-2-d3", "Vì sao Minh không đi xem phim tối Chủ nhật được?", "Sorry, I can't. I'm having dinner with my parents on Sunday.", ["Vì Minh phải đi làm", "Vì Minh không thích xem phim", "Vì Minh ăn tối với bố mẹ", "Vì Minh bị ốm"], 2, "I'm having dinner with my parents on Sunday: Minh đã có hẹn ăn tối với bố mẹ."),
  ],
  reading: reading({
    title: "Email: Chuyến đi Ba Vì của cả nhóm",
    text: `Hi everyone,

Our team is going to have a trip to Ba Vi next weekend! Here is the plan.

We're leaving the office at seven o'clock on Saturday morning. Mr Phan is driving the company bus, so please don't be late. On Saturday afternoon we're going to walk in the national park, and in the evening we're having a barbecue at the hotel.

On Sunday morning we're going to visit a dairy farm. You can try fresh milk and yoghurt there. We're coming back to Hanoi at about four o'clock.

Would you like to bring your family? Children are welcome, but please tell me by Wednesday. I'm going to book the rooms on Thursday.

Please bring sports shoes and a warm jacket. It's often cold in the mountains at night.

See you soon,
Hoa`,
    glossary: [
      ["national park", "vườn quốc gia"],
      ["barbecue", "tiệc nướng ngoài trời"],
      ["dairy farm", "trang trại bò sữa"],
      ["yoghurt", "sữa chua"],
      ["welcome", "được chào đón"],
      ["book", "đặt (phòng, vé)"],
    ],
    questions: [
      mc("a2-2-r1", "Hoa viết email này để làm gì?", ["Thông báo kế hoạch chuyến đi Ba Vì của cả nhóm", "Mời mọi người dự tiệc sinh nhật", "Xin nghỉ phép cuối tuần", "Hỏi ý kiến về khách sạn"], 0, "Our team is going to have a trip to Ba Vi next weekend! Here is the plan."),
      mc("a2-2-r2", "Cả nhóm rời văn phòng khi nào?", ["Bảy giờ sáng thứ Sáu", "Bảy giờ sáng thứ Bảy", "Bốn giờ chiều Chủ nhật"], 1, "We're leaving the office at seven o'clock on Saturday morning."),
      mc("a2-2-r3", "Tối thứ Bảy mọi người sẽ làm gì?", ["Đi bộ trong vườn quốc gia", "Thăm trang trại bò sữa", "Ăn tiệc nướng ở khách sạn"], 2, "In the evening we're having a barbecue at the hotel."),
      fill("a2-2-r4", "Muốn đưa gia đình đi cùng thì phải báo cho Hoa muộn nhất vào thứ mấy? Please tell me by ___.", ["Wednesday"], "Please tell me by Wednesday: báo trước hoặc muộn nhất vào thứ Tư."),
      mc("a2-2-r5", "Vì sao mọi người nên mang áo ấm?", ["Vì trên núi ban đêm thường lạnh", "Vì khách sạn không có chăn", "Vì trời sẽ mưa"], 0, "It's often cold in the mountains at night."),
    ],
  }),
  dialogue: dialogue(
    "Rủ đồng nghiệp đi dã ngoại",
    "Chiều thứ Sáu, Minh rủ Sarah, đồng nghiệp người Anh, đi dã ngoại ở công viên Thống Nhất. Sarah nhận lời, rồi rủ Minh đi xem phim nhưng Minh đã có hẹn.",
    { A: "Minh", B: "Sarah (đồng nghiệp)" },
    A("Hi Sarah, are you free this weekend?", "Chào Sarah, cuối tuần này bạn có rảnh không?"),
    B("Well, I'm going to clean my flat on Saturday morning. Why?", "Ừm, sáng thứ Bảy mình định dọn nhà. Sao thế?"),
    A("We're going to have a picnic in Thong Nhat Park on Saturday afternoon. Would you like to come?", "Chiều thứ Bảy bọn mình định đi dã ngoại ở công viên Thống Nhất. Bạn có muốn đi cùng không?"),
    B("I'd love to! Who are you going to invite?", "Mình rất muốn đi! Bạn định mời những ai?"),
    A("Just a few people from our team. Hoa is bringing some cakes.", "Chỉ vài người trong nhóm mình thôi. Hoa sẽ mang bánh đến."),
    B("Sounds great. What time are we meeting?", "Nghe hay quá. Mấy giờ mình gặp nhau?"),
    A("We're meeting at the park gate at three.", "Bọn mình hẹn nhau ở cổng công viên lúc ba giờ."),
    B("Great. Do you want to see a film on Sunday evening, too?", "Tuyệt. Tối Chủ nhật bạn có muốn đi xem phim nữa không?"),
    A("Sorry, I can't. I'm having dinner with my parents on Sunday.", "Xin lỗi, mình không đi được. Chủ nhật mình ăn tối với bố mẹ."),
    B("No problem. See you on Saturday, then!", "Không sao. Vậy hẹn gặp bạn thứ Bảy nhé!"),
  ),
  task: task({
    prompt: "Đồng nghiệp người nước ngoài nhắn tin hỏi: “What are you doing this weekend?”. Viết tin nhắn trả lời 5–6 câu (khoảng 40–60 từ): kể dự định của bạn, một cuộc hẹn đã sắp xếp, rồi mời bạn ấy tham gia một hoạt động.",
    hints: [
      "Dự định đã nghĩ từ trước: I'm going to + động từ nguyên mẫu.",
      "Cuộc hẹn đã có giờ, có người: I'm meeting... at... on Saturday.",
      "Mời lịch sự: Would you like to + động từ...?",
    ],
    model: "Hi Tom! This weekend I'm going to stay in Hanoi. On Saturday morning I'm going to clean my flat and do some shopping. In the afternoon I'm meeting my cousin at a café near Hoan Kiem Lake. I'm not going to do anything special on Sunday. Would you like to go to the cinema with me on Sunday evening?",
    checklist: [
      "Có ít nhất 2 câu be going to + động từ nguyên mẫu, không thiếu am / is / are",
      "Có 1 câu hiện tại tiếp diễn kèm thời gian cụ thể cho cuộc hẹn đã sắp xếp",
      "Câu mời có Would you like to + động từ (không quên to)",
      "Có từ chỉ thời gian tương lai (this weekend, on Saturday, tomorrow...)",
      "Không dùng will cho dự định đã có từ trước",
    ],
    minWords: 40,
  }),
});

const soSanh = lesson({
  slug: "so-sanh-va-mua-sam",
  title: "So sánh và mua sắm",
  minutes: 30,
  lecture: {
    title: "So sánh hơn, so sánh nhất và as...as",
    blocks: [
      p("Đi chợ Bến Thành hay vào trung tâm thương mại, bạn luôn phải so sánh: cái này rẻ hơn, cái kia đẹp hơn, chỗ nào rẻ nhất. Khi khách nước ngoài hỏi “Which one is better?”, bạn cũng cần trả lời bằng **câu so sánh**."),
      p("Tiếng Việt chỉ cần thêm “hơn” hoặc “nhất”. Tiếng Anh chia tính từ làm hai nhóm: **tính từ ngắn** thêm **-er / -est**, **tính từ dài** dùng **more / the most**. Khi nêu rõ vật được so sánh, dùng **than** trước vật đó: cheaper **than** that one."),
      table(
        ["Tính từ", "So sánh hơn", "So sánh nhất"],
        ["cheap (rẻ)", "cheaper", "the cheapest"],
        ["big (to)", "bigger", "the biggest"],
        ["easy (dễ)", "easier", "the easiest"],
        ["expensive (đắt)", "more expensive", "the most expensive"],
        ["good (tốt)", "better", "the best"],
        ["bad (tệ)", "worse", "the worst"],
      ),
      p("Quy tắc chính tả: tính từ một âm tiết tận cùng bằng **một nguyên âm + một phụ âm** thì gấp đôi phụ âm cuối: big → bigger, hot → hotter (trừ w, y: new → newer). Tận cùng bằng **-e** thì chỉ thêm -r: nice → nicer, large → larger."),
      ex("This bag is cheaper than that one.", "Cái túi này rẻ hơn cái kia.", "That one thay cho that bag, để khỏi lặp lại danh từ."),
      ex("It's the most expensive shop in the city.", "Đó là cửa hàng đắt nhất thành phố.", "So sánh nhất luôn có the, và hay đi với in + nơi chốn: in the city, in my class."),
      p("Muốn nói “bằng”, dùng **as + tính từ + as**: This shirt is as nice as that one. Phủ định **not as...as** nghĩa là “không bằng”."),
      ex("This shirt isn't as nice as that one.", "Cái áo này không đẹp bằng cái kia.", "Not as...as là cách chê nhẹ nhàng, lịch sự hơn nói thẳng worse."),
      p("Mẫu câu khi mua sắm: **How much is this?**, **Can I try it on?**, **Do you have it in a smaller size?**, **I'll take it.** (tôi lấy cái này). Lúc trả tiền: **Can I pay by card?** hoặc **Can I pay in cash?** Người bán sẽ hỏi lại **Anything else?**, bạn đáp **No, that's all, thanks.**"),
      ex("Do you have this in a bigger size?", "Bạn có cái này cỡ lớn hơn không?", "Câu hỏi rất hay dùng khi mua quần áo, giày dép."),
      tip("Tính từ hai âm tiết tận cùng bằng **-y** đổi y thành i rồi thêm -er / -est: happy → happier, easy → the easiest."),
      tip("Trong câu nói, **than** đọc nhẹ thành /ðən/ và **as** đọc thành /əz/. Đừng nhấn vào hai từ này; hãy nhấn vào tính từ: CHEAPER than, as NICE as."),
      mistake("This phone is more cheaper.", "This phone is cheaper.", "Tiếng Việt nói “rẻ hơn” chỉ có một từ “hơn”, nên người Việt thấy more và -er đều là “hơn” rồi dùng cả hai. Đã thêm -er thì không dùng more nữa."),
      mistake("It's the most good restaurant.", "It's the best restaurant.", "Good là bất quy tắc: good → better → the best. Không ghép most với good."),
      mistake("This bag is cheaper that bag.", "This bag is cheaper than that bag.", "Tiếng Việt nói “rẻ hơn cái kia” không cần từ nối, nên người Việt hay quên than. Trong tiếng Anh, có vật đem ra so thì phải có than."),
      teacher("Ở chợ Việt Nam ai cũng quen câu “bớt chút đi chị”, nên học viên của tôi nhớ chữ cheaper rất nhanh. Cái bẫy nằm ở tính từ dài. Mẹo tôi hay dạy: **vỗ tay đếm âm tiết**. Một tiếng (cheap, big) hoặc hai tiếng tận cùng bằng -y (easy, happy) thì thêm -er; phần lớn từ hai tiếng khác (bor-ing, fa-mous) và mọi từ ba tiếng trở lên (ex-pen-sive, beau-ti-ful) thì dùng more. Mẹo này đúng với hầu hết các từ, nhưng nhớ vài ngoại lệ hay gặp: **quiet, simple, narrow, clever** thường thêm -er (quieter, simpler, narrower, cleverer). Còn good và bad phải thuộc như thuộc tên người nhà: better, the best; worse, the worst. Lần tới đi siêu thị, các bạn hãy thầm so sánh hai món hàng bằng tiếng Anh trước khi bỏ vào giỏ."),
      summary(
        "Tính từ ngắn thêm -er / the -est (cheap → cheaper → the cheapest); tính từ dài dùng more / the most.",
        "Đã thêm -er thì không dùng more: không nói more cheaper.",
        "Có vật đem ra so thì phải có than: cheaper than that one.",
        "Bất quy tắc: good → better → the best; bad → worse → the worst.",
        "Bằng nhau: as + tính từ + as. Không bằng: not as + tính từ + as.",
      ),
    ],
  },
  words: [
    word("cheap", "/tʃiːp/", "rẻ", "This market is very cheap.", "cheap", 0),
    word("bargain", "/ˈbɑː.ɡɪn/", "món hời; mặc cả", "Only fifty thousand dong for this shirt? It's a bargain!", "bar|gain", 0, "Âm tiết sau đọc nhẹ /ɡɪn/, không đọc theo mặt chữ thành “ghên”. Chữ r không đọc: /ˈbɑː.ɡɪn/."),
    word("price", "/praɪs/", "giá", "What's the price of this jacket?", "price", 0, "Kết thúc bằng âm /s/, khác với prize /praɪz/ (giải thưởng)."),
    word("size", "/saɪz/", "cỡ, kích thước", "What size do you wear?", "size", 0),
    word("discount", "/ˈdɪs.kaʊnt/", "giảm giá", "Can I get a discount?", "dis|count", 0),
    word("customer", "/ˈkʌs.tə.mə/", "khách hàng", "The shop is full of customers.", "cus|to|mer", 0),
    word("comfortable", "/ˈkʌmf.tə.bəl/", "thoải mái, dễ chịu", "These shoes are more comfortable.", "comf|ta|ble", 0, "Chỉ có ba âm tiết, âm “for” gần như bị nuốt mất."),
  ],
  exercises: [
    mc("a2-3-1", "This phone is ___ than my old one.", ["more cheap", "cheaper", "cheapest", "more cheaper"], 1, "Cheap là tính từ ngắn: cheap → cheaper."),
    mc("a2-3-2", "It's the ___ restaurant in town.", ["better", "good", "best"], 2, "Có the và so sánh với cả thị trấn nên dùng so sánh nhất: the best."),
    fill("a2-3-3", "My brother is taller ___ me.", ["than"], "Sau so sánh hơn dùng than."),
    fill("a2-3-4", "This shirt is as cheap ___ that one.", ["as"], "Cấu trúc as + tính từ + as."),
    reorder("a2-3-5", "Where can I try it on?", "Try on là cụm động từ; đại từ it đứng giữa try và on."),
    reorder("a2-3-6", "It's the most expensive shop in town.", "Tính từ dài dùng the most."),
    listen("a2-3-7", "How much are these shoes?", ["Đôi giày này cỡ bao nhiêu?", "Đôi giày này bao nhiêu tiền?", "Bạn có đôi giày nào rẻ hơn không?"], 1, "How much hỏi về giá tiền."),
    listen("a2-3-8", "Do you have it in a bigger size?", ["Bạn có cỡ nhỏ hơn không?", "Bạn có màu khác không?", "Bạn có cỡ lớn hơn không?"], 2),
    correct("a2-3-9", "My new flat is more bigger than my old flat.", ["My new flat is bigger than my old flat.", "My new flat is bigger than my old one."], "Big là tính từ ngắn, đã thêm -er thì không dùng more: bigger than."),
    correct("a2-3-10", "This is the most cheap hotel in Da Lat.", "This is the cheapest hotel in Da Lat.", "Cheap là tính từ ngắn nên so sánh nhất là the cheapest, không dùng the most."),
  ],
  speaking: [
    say("This jacket is cheaper than that one.", "Cái áo khoác này rẻ hơn cái kia."),
    say("These are the most comfortable shoes in the shop.", "Đây là đôi giày thoải mái nhất trong cửa hàng."),
    say("Do you have this shirt in a smaller size?", "Bạn có cái áo này cỡ nhỏ hơn không?"),
  ],
  freeSpeaking: free(
    "Where do you like to shop: at the market, at a supermarket or online? Why?",
    "Nói 4–5 câu so sánh hai hoặc ba nơi bạn hay mua sắm (chợ, siêu thị, trên mạng), rồi nói bạn thích nơi nào nhất và vì sao.",
    "I usually shop at the market and at the supermarket near my office. The market is cheaper than the supermarket, and the fruit is fresher. But the supermarket is cleaner and more comfortable. Online shopping is the easiest, but it isn't as fun as the market. I think the market is the best.",
  ),
  dialogueQuestions: [
    listenQ("a2-3-d1", "Lúc đầu du khách chê cái áo khoác vì sao?", "Hmm, it's more expensive than the jacket in the other shop.", ["Vì nó đắt hơn áo ở cửa hàng kia", "Vì nó không ấm", "Vì màu không đẹp", "Vì nó quá rộng"], 0, "More expensive than the jacket in the other shop: đắt hơn áo ở cửa hàng kia."),
    mc("a2-3-d2", "Cuối cùng du khách mua áo màu gì, giá bao nhiêu?", ["Màu xanh, bốn trăm nghìn đồng", "Màu đen, ba trăm năm mươi nghìn đồng", "Màu đen, bốn trăm nghìn đồng", "Màu xanh, ba trăm năm mươi nghìn đồng"], 1, "I'll take the black one, và người bán giảm còn three hundred and fifty thousand."),
    listenQ("a2-3-d3", "Du khách trả tiền bằng cách nào?", "Can I pay by card? Sorry, cash only.", ["Bằng thẻ", "Chuyển khoản qua điện thoại", "Bằng tiền mặt"], 2, "Cash only: cửa hàng chỉ nhận tiền mặt."),
  ],
  reading: reading({
    title: "Blog: Chợ hay siêu thị?",
    text: `Where do you buy your food? In my family, we have different ideas about this.

My mother always goes to the small market near our house. She says the vegetables there are fresher and cheaper than in the supermarket. She knows all the sellers, and they sometimes give her some free herbs. But the market is hot and noisy in the summer.

I prefer the big supermarket in the city centre. It's cooler and more comfortable, and every product has a price on it, so I can see the prices easily. It's also open until ten at night.

My brother thinks online shopping is the best. For him, it's the easiest way, because he can buy things from his sofa. But last month he bought a pair of shoes online, and they were the wrong size!

For me, the market isn't as comfortable as the supermarket, but its food is the freshest. Where do you usually shop?`,
    glossary: [
      ["fresh", "tươi"],
      ["seller", "người bán hàng"],
      ["herbs", "rau thơm"],
      ["noisy", "ồn ào"],
      ["prefer", "thích hơn"],
      ["product", "sản phẩm, món hàng"],
      ["online shopping", "mua sắm trên mạng"],
    ],
    questions: [
      mc("a2-3-r1", "Bài blog chủ yếu nói về điều gì?", ["Mỗi người trong gia đình thích mua sắm ở một nơi khác nhau", "Cách nấu ăn với rau tươi", "Một siêu thị mới mở trong thành phố", "Cách mua giày trên mạng"], 0, "Bài lần lượt kể mẹ thích chợ, người viết thích siêu thị, anh trai thích mua trên mạng."),
      mc("a2-3-r2", "Theo mẹ người viết, rau ở chợ thế nào so với ở siêu thị?", ["Đắt hơn nhưng tươi hơn", "Tươi hơn và rẻ hơn", "Rẻ hơn nhưng không tươi bằng"], 1, "The vegetables there are fresher and cheaper than in the supermarket."),
      mc("a2-3-r3", "Người viết thích siêu thị vì sao?", ["Vì siêu thị rẻ nhất thành phố", "Vì người bán hay cho thêm rau thơm", "Vì siêu thị mát hơn, dễ chịu hơn và món hàng nào cũng ghi giá"], 2, "It's cooler and more comfortable, and every product has a price on it."),
      fill("a2-3-r4", "Anh trai người viết nghĩ mua sắm trên mạng là cách dễ nhất: it's the ___ way.", ["easiest"], "Easy tận cùng bằng -y: easy → the easiest."),
      mc("a2-3-r5", "Chuyện gì xảy ra với đôi giày anh trai mua trên mạng?", ["Giày bị hỏng", "Giày không đúng cỡ", "Giày đến muộn một tháng", "Giày đắt hơn ở cửa hàng"], 1, "They were the wrong size: giày sai cỡ."),
    ],
  }),
  dialogue: dialogue(
    "Bán áo khoác ở chợ Bến Thành",
    "Bạn bán quần áo ở chợ Bến Thành. Một du khách nước ngoài hỏi giá áo khoác, so sánh với cửa hàng khác, thử cỡ lớn hơn rồi mua.",
    { A: "Du khách", B: "Bạn (người bán hàng)" },
    A("Excuse me, how much is this jacket?", "Xin lỗi, cái áo khoác này bao nhiêu tiền?"),
    B("It's four hundred thousand dong.", "Bốn trăm nghìn đồng ạ."),
    A("Hmm, it's more expensive than the jacket in the other shop.", "Hừm, đắt hơn cái áo ở cửa hàng kia."),
    B("But this one is better. It's warmer and more comfortable. Try it on!", "Nhưng cái này tốt hơn. Nó ấm hơn và dễ chịu hơn. Anh mặc thử đi!"),
    A("It's nice, but it's a bit small. Do you have it in a bigger size?", "Đẹp đấy, nhưng hơi chật. Chị có cỡ lớn hơn không?"),
    B("Yes, here you are. This is the biggest size.", "Có ạ, đây anh. Đây là cỡ lớn nhất."),
    A("Perfect. Is the blue one as warm as the black one?", "Vừa quá. Cái màu xanh có ấm bằng cái màu đen không?"),
    B("Yes, it's the same jacket. But black is the most popular colour.", "Có ạ, cùng một loại áo. Nhưng màu đen là màu được mua nhiều nhất."),
    A("Then I'll take the black one. Can I get a discount?", "Vậy tôi lấy cái màu đen. Chị giảm giá được không?"),
    B("OK, three hundred and fifty thousand. That's the best price in the market!", "Được, ba trăm năm mươi nghìn. Đó là giá tốt nhất chợ rồi đấy!"),
    A("Great. Can I pay by card?", "Tốt quá. Tôi trả bằng thẻ được không?"),
    B("Sorry, cash only. Anything else?", "Xin lỗi, chỉ nhận tiền mặt thôi ạ. Anh cần gì nữa không?"),
    A("No, that's all, thanks.", "Không, thế thôi, cảm ơn chị."),
  ),
  task: task({
    prompt: "Bạn định mua một chiếc điện thoại mới và đang phân vân giữa hai mẫu (gọi là Phone A và Phone B). Viết 5–6 câu (khoảng 45–65 từ) so sánh hai mẫu đó rồi nói bạn chọn cái nào và vì sao.",
    hints: [
      "So sánh hơn: cheaper than, bigger than, more expensive than.",
      "So sánh nhất: the best, the most modern, the cheapest in the shop.",
      "Chê nhẹ nhàng bằng not as... as: Its camera isn't as good as...",
      "Kết bằng lựa chọn của bạn: I'm going to buy... hoặc I'll take...",
    ],
    model: "I want a new phone, and I like two models, Phone A and Phone B. Phone A is cheaper than Phone B, but its camera isn't as good as Phone B's camera. Phone B is bigger and more modern than Phone A. Its battery is also better. It's the most expensive phone in the shop, but I think it's the best. I'm going to buy Phone B.",
    checklist: [
      "Có ít nhất 2 câu so sánh hơn đi với than",
      "Có ít nhất 1 câu so sánh nhất có the",
      "Có 1 câu as... as hoặc not as... as",
      "Không dùng more cùng với -er (không viết more cheaper)",
      "Dùng đúng dạng bất quy tắc của good: better, the best",
    ],
    minWords: 45,
  }),
});

const hoiDuong = lesson({
  slug: "hoi-duong-va-di-lai",
  title: "Hỏi đường và đi lại",
  minutes: 28,
  lecture: {
    title: "Câu mệnh lệnh để chỉ đường và nói về phương tiện",
    blocks: [
      p("Bạn đang đứng ở phố cổ Hội An thì một du khách hỏi đường ra chợ đêm. Hoặc chính bạn đi du lịch Singapore và cần tìm ga tàu điện. Ở bài Thành phố của tôi (khóa A1), bạn đã làm quen với Turn left và Take the first street on the left. Bài này đi xa hơn: **hỏi đường lịch sự, chỉ đường nhiều bước, nói về phương tiện và mua vé tàu xe**."),
      p("Khi chỉ đường, người bản xứ dùng **câu mệnh lệnh**: bắt đầu bằng động từ nguyên mẫu, không có chủ ngữ. Đây không phải là bất lịch sự, mà là cách nói bình thường."),
      table(
        ["Tiếng Anh", "Nghĩa"],
        ["Go straight on.", "Đi thẳng."],
        ["Turn left / right.", "Rẽ trái / phải."],
        ["Take the second street on the left.", "Rẽ vào con phố thứ hai bên trái."],
        ["Cross the road.", "Băng qua đường."],
        ["It's next to / opposite the bank.", "Nó ở cạnh / đối diện ngân hàng."],
      ),
      p("Để hỏi đường, luôn mở đầu bằng **Excuse me** để thu hút sự chú ý một cách lịch sự, rồi dùng một trong các mẫu câu dưới đây."),
      table(
        ["Câu hỏi", "Nghĩa"],
        ["Excuse me, how do I get to...?", "Xin lỗi, đi đến... thế nào ạ?"],
        ["Is there a... near here?", "Gần đây có... không?"],
        ["Where is the nearest...?", "... gần nhất ở đâu?"],
        ["Is it far from here?", "Chỗ đó có xa đây không?"],
        ["What time does the next bus to... leave?", "Mấy giờ chuyến xe buýt tiếp theo đi... chạy?"],
        ["A single / return ticket to..., please.", "Cho tôi một vé một chiều / khứ hồi đi..."],
        ["Which platform does it leave from?", "Tàu chạy ở sân ga nào?"],
      ),
      ex("Excuse me, how do I get to the train station?", "Xin lỗi, cho tôi hỏi đến ga tàu đi thế nào?"),
      ex("Go straight on and turn right at the traffic lights.", "Đi thẳng rồi rẽ phải ở chỗ đèn giao thông.", "At the traffic lights, at the bank, at the corner: dùng at để chỉ điểm rẽ."),
      ex("Is there a pharmacy near here? Yes, there's one on the corner.", "Gần đây có hiệu thuốc không? Có, có một hiệu ở góc phố.", "Trả lời bằng there's one để khỏi lặp lại danh từ pharmacy. Ở góc phố là on the corner."),
      p("Nói về phương tiện: **by bus**, **by train**, **by taxi**, **by motorbike**, nhưng đi bộ là **on foot**. Khi nói phương tiện nói chung, sau **by** không dùng a hay the: nói by bus, không nói “by the bus”. Nói về một chuyến xe cụ thể thì dùng the / on: on the 8.15 train. Hỏi thời gian đi: **How long does it take?** Trả lời: **It takes about twenty minutes.**"),
      ex("It takes about ten minutes on foot.", "Đi bộ mất khoảng mười phút."),
      ex("A return ticket to Hue, please. What time does the next train leave?", "Cho tôi một vé khứ hồi đi Huế. Mấy giờ chuyến tàu tiếp theo chạy?", "Single là vé một chiều, return là vé khứ hồi. Hỏi giờ chạy dùng hiện tại đơn (does... leave) vì đó là lịch cố định."),
      tip("Khi chỉ đường, hãy nói chậm và chia thành từng bước bằng **first**, **then**, **after that**: First go straight on, then turn left at the bank. Người nghe dễ theo hơn nhiều."),
      mistake("I go to work by foot.", "I go to work on foot.", "Tiếng Việt nói “đi bằng xe buýt”, “đi bằng chân” cùng một kiểu, nên người Việt dùng by cho cả đi bộ. Đi bộ là on foot, các phương tiện khác mới dùng by."),
      mistake("How long it takes?", "How long does it take?", "Tiếng Việt hỏi “mất bao lâu?” chỉ cần thêm từ để hỏi. Câu hỏi tiếng Anh ở hiện tại đơn cần trợ động từ does đứng trước chủ ngữ."),
      mistake("Go straight and turn to left.", "Go straight and turn left.", "Tiếng Việt nói “rẽ sang trái” nên người Việt hay thêm to. Trong tiếng Anh, turn left và turn right đi liền, không có to."),
      teacher("Học viên của tôi đi du lịch về hay kể: hỏi đường thì nói được, nhưng người ta trả lời nhanh quá, nghe không kịp. **Các bạn đừng ngại nhờ họ nói lại**: Sorry, could you repeat that, please? hoặc Could you speak more slowly, please? (hai câu nhờ lịch sự mà các bạn đã học ở bài Gọi điện thoại). Rồi nhắc lại từng bước để kiểm tra: So, straight on, then left at the bank? Người bản xứ rất quý người hỏi lại cẩn thận. Ở nhà, các bạn hãy tập chỉ đường từ nhà mình ra chợ bằng tiếng Anh, vừa đi vừa nói thầm. Đó là cách luyện rẻ nhất mà lại hiệu quả nhất tôi từng biết."),
      summary(
        "Hỏi đường mở đầu bằng Excuse me, rồi hỏi How do I get to...? hoặc Is there a... near here?",
        "Chỉ đường bằng câu mệnh lệnh, động từ nguyên mẫu đứng đầu: Go straight on. Turn left. Cross the road. Turn left không có to.",
        "Chia từng bước bằng first, then, after that; chỗ rẽ dùng at: at the traffic lights, at the bank.",
        "Phương tiện nói chung: by bus, by train, by taxi (không có a, the); chuyến cụ thể: on the 8.15 train; đi bộ là on foot.",
        "Hỏi mất bao lâu: How long does it take? Trả lời: It takes about + thời gian.",
      ),
    ],
  },
  words: [
    word("straight", "/streɪt/", "thẳng", "Go straight on for two hundred metres.", "straight", 0),
    word("turn", "/tɜːn/", "rẽ", "Turn left at the bank.", "turn", 0),
    word("corner", "/ˈkɔː.nə/", "góc phố", "The café is on the corner.", "cor|ner", 0),
    word("opposite", "/ˈɒp.ə.zɪt/", "đối diện", "The pharmacy is opposite the school.", "op|po|site", 0, "Trọng âm ở âm đầu: ÓP-pơ-zít."),
    word("station", "/ˈsteɪ.ʃən/", "nhà ga, bến", "Where is the bus station?", "sta|tion", 0),
    word("bridge", "/brɪdʒ/", "cây cầu", "Cross the bridge and turn right.", "bridge", 0),
    word("ticket", "/ˈtɪk.ɪt/", "vé", "How much is a bus ticket?", "tick|et", 0),
  ],
  exercises: [
    mc("a2-4-1", "I go to work ___ foot.", ["by", "on", "in"], 1, "Đi bộ là on foot."),
    mc("a2-4-2", "How long ___ it take to get to the airport?", ["is", "do", "does", "takes"], 2, "It là ngôi thứ ba số ít nên dùng does."),
    fill("a2-4-3", "___ left at the traffic lights. (rẽ)", ["Turn", "turn"], "Câu mệnh lệnh bắt đầu bằng động từ nguyên mẫu: Turn left."),
    fill("a2-4-4", "It usually ___ about ten minutes by taxi.", ["takes"], "It takes + khoảng thời gian."),
    reorder("a2-4-5", "How do I get to the station?", "Mẫu hỏi đường: How do I get to + nơi muốn đến? Trợ động từ do đứng trước chủ ngữ I."),
    reorder("a2-4-6", "Take the first street on the right.", "Câu mệnh lệnh bắt đầu bằng động từ nguyên mẫu take."),
    listen("a2-4-7", "The museum is opposite the park.", ["Bảo tàng ở cạnh công viên.", "Bảo tàng ở đối diện công viên.", "Bảo tàng ở sau công viên."], 1, "Opposite nghĩa là đối diện."),
    listen("a2-4-8", "A single ticket to Hoi An, please.", ["Cho tôi một vé khứ hồi đi Hội An.", "Cho tôi một vé một chiều đi Hội An.", "Xe đi Hội An chạy lúc mấy giờ?"], 1, "Single ticket là vé một chiều; return ticket mới là vé khứ hồi."),
    correct("a2-4-9", "We go to school by the bus every day.", "We go to school by bus every day.", "Nói phương tiện nói chung (mỗi ngày đi bằng gì) thì sau by không dùng a hay the: by bus, by train, by taxi."),
    correct("a2-4-10", "Cross the road and turn to right at the bank.", "Cross the road and turn right at the bank.", "Turn left, turn right đi liền, không có to ở giữa."),
  ],
  speaking: [
    say("Excuse me, how do I get to the train station?", "Xin lỗi, cho tôi hỏi đến ga tàu đi thế nào?"),
    say("Go straight and turn left at the corner.", "Đi thẳng rồi rẽ trái ở góc phố."),
    say("It takes about fifteen minutes by bus.", "Đi xe buýt mất khoảng mười lăm phút."),
  ],
  freeSpeaking: free(
    "How do you get to work or school every day?",
    "Nói 4–5 câu: bạn đi làm hoặc đi học bằng gì, mất bao lâu, và chỉ đường ngắn gọn từ nhà bạn đến đó.",
    "I go to work by motorbike every day. It takes about twenty minutes. First I go straight on along Nguyen Trai Street. Then I turn left at the big traffic lights and cross the bridge. My office is on the corner, opposite a bank. When it rains, I go by bus.",
  ),
  dialogueQuestions: [
    listenQ("a2-4-d1", "Chợ đêm nằm ở đâu?", "Then turn left and take the second street on the right. The market is opposite a small bridge.", ["Cạnh bờ sông", "Đối diện một cây cầu nhỏ", "Ở góc phố", "Cạnh ngân hàng"], 1, "The market is opposite a small bridge: chợ ở đối diện một cây cầu nhỏ."),
    mc("a2-4-d2", "Đi bộ từ chỗ hai người đứng đến chợ đêm mất bao lâu?", ["Khoảng mười phút", "Khoảng năm phút", "Khoảng bốn mươi phút"], 0, "It takes about ten minutes on foot. Bốn mươi phút là thời gian đi taxi đến Đà Nẵng."),
    listenQ("a2-4-d3", "Chuyến xe buýt cuối đi Đà Nẵng chạy lúc mấy giờ?", "What time does the last bus to Da Nang leave? At nine.", ["Lúc tám giờ", "Lúc mười giờ", "Lúc chín giờ", "Lúc bốn giờ"], 2, "At nine: lúc chín giờ."),
  ],
  reading: reading({
    title: "Email: Đường đến homestay",
    text: `Dear Mr Brown,

Thank you for your booking. Here is how to get to Lotus Homestay.

If you come by train, get off at Hue Station. Our homestay isn't far from the station. It takes about fifteen minutes on foot. Go out of the station and turn right. Go straight on along Le Loi Street for about five hundred metres. Then cross the road at the traffic lights and take the first street on the left. Our homestay is the yellow house on the corner, opposite a small pharmacy.

If your bags are heavy, you can take a taxi. It's cheaper than a hotel car, and it only takes five minutes. Please don't pay more than fifty thousand dong.

Could you tell us your arrival time? We'd like to be at home when you arrive.

Best wishes,
Mai`,
    glossary: [
      ["booking", "việc đặt phòng"],
      ["homestay", "nhà nghỉ ở cùng chủ nhà"],
      ["get off", "xuống (tàu, xe)"],
      ["metre", "mét"],
      ["pharmacy", "hiệu thuốc"],
      ["arrival time", "giờ đến nơi"],
    ],
    questions: [
      mc("a2-4-r1", "Mai viết email này để làm gì?", ["Chỉ đường cho khách từ ga tàu đến homestay", "Xin lỗi vì homestay hết phòng", "Giới thiệu các món ăn ở Huế", "Mời khách đi tham quan thành phố"], 0, "Here is how to get to Lotus Homestay: đây là cách đến homestay."),
      mc("a2-4-r2", "Ra khỏi ga, khách phải rẽ hướng nào?", ["Rẽ trái", "Rẽ phải", "Đi thẳng qua đường"], 1, "Go out of the station and turn right."),
      mc("a2-4-r3", "Homestay nằm ở đâu?", ["Ngôi nhà màu vàng ngay cạnh ga tàu", "Ngôi nhà ở cuối phố Lê Lợi, cạnh đèn giao thông", "Ngôi nhà màu vàng ở góc phố, đối diện một hiệu thuốc nhỏ"], 2, "The yellow house on the corner, opposite a small pharmacy."),
      fill("a2-4-r4", "Đi taxi từ ga đến homestay mất bao lâu? It only takes ___ minutes. (viết bằng chữ)", ["five"], "It only takes five minutes: chỉ mất năm phút. Mười lăm phút là thời gian đi bộ."),
      mc("a2-4-r5", "Mai dặn khách điều gì khi đi taxi?", ["Không trả quá năm mươi nghìn đồng", "Gọi điện cho Mai trước khi lên xe", "Đi xe của khách sạn cho rẻ hơn"], 0, "Please don't pay more than fifty thousand dong."),
    ],
  }),
  dialogue: dialogue(
    "Chỉ đường ở phố cổ Hội An",
    "Buổi tối ở phố cổ Hội An, một du khách hỏi bạn đường ra chợ đêm và giờ chuyến xe cuối đi Đà Nẵng.",
    { A: "Du khách", B: "Bạn (người địa phương)" },
    A("Excuse me, how do I get to the night market?", "Xin lỗi, cho tôi hỏi đi ra chợ đêm thế nào?"),
    B("It's not far. First go straight on to the river.", "Không xa đâu. Đầu tiên anh đi thẳng ra bờ sông."),
    A("Straight on to the river. And then?", "Đi thẳng ra bờ sông. Rồi sao nữa?"),
    B("Then turn left and take the second street on the right. The market is opposite a small bridge.", "Sau đó rẽ trái, rồi rẽ vào con phố thứ hai bên phải. Chợ ở đối diện một cây cầu nhỏ."),
    A("Sorry, could you repeat that, please?", "Xin lỗi, bạn nhắc lại được không?"),
    B("Sure. Straight on, then left at the river, then the second street on the right.", "Được chứ. Đi thẳng, rẽ trái ở bờ sông, rồi vào con phố thứ hai bên phải."),
    A("Thank you. Is it far from here? How long does it take?", "Cảm ơn bạn. Có xa đây không? Mất bao lâu?"),
    B("It takes about ten minutes on foot.", "Đi bộ mất khoảng mười phút."),
    A("Great. What time does the last bus to Da Nang leave?", "Tốt quá. Chuyến xe buýt cuối đi Đà Nẵng chạy lúc mấy giờ?"),
    B("At nine. You can go by taxi, too. It takes about forty minutes.", "Lúc chín giờ. Anh cũng có thể đi taxi. Mất khoảng bốn mươi phút."),
    A("Thanks a lot!", "Cảm ơn bạn nhiều!"),
    B("You're welcome. Enjoy the market!", "Không có gì. Chúc anh đi chợ vui nhé!"),
  ),
  task: task({
    prompt: "Một đồng nghiệp người nước ngoài sẽ đến nhà bạn ăn tối. Viết tin nhắn 6–8 câu (khoảng 45–65 từ) chỉ đường từ bến xe buýt gần nhà đến nhà bạn, và cho biết đi bằng gì, mất bao lâu.",
    hints: [
      "Chia bước bằng First, Then, After that.",
      "Dùng câu mệnh lệnh: Go straight on, Turn left / right, Take the second street on the left.",
      "Tả vị trí nhà: next to, opposite, on the corner.",
      "Nói thời gian: It takes about... on foot / by taxi.",
    ],
    model: "Hi Anna! It's easy to get to my house from the bus stop. First go straight on along Tran Phu Street. Then turn right at the traffic lights. After that, take the second street on the left. My house is number twelve, opposite a small park. It takes about ten minutes on foot or five minutes by taxi. See you at seven!",
    checklist: [
      "Các câu chỉ đường bắt đầu bằng động từ nguyên mẫu (Go, Turn, Take, Cross)",
      "Có first, then, after that để chia bước",
      "Có ít nhất 1 cụm vị trí (next to, opposite, on the corner)",
      "Dùng by + phương tiện không có the, hoặc on foot cho đi bộ",
      "Có câu It takes about... để nói thời gian",
      "Viết turn left / turn right, không có to",
    ],
    minWords: 45,
  }),
});

const sucKhoe = lesson({
  slug: "suc-khoe-va-loi-khuyen",
  title: "Sức khỏe và lời khuyên",
  minutes: 30,
  lecture: {
    title: "Should, have to và must",
    blocks: [
      p("Bạn đi công tác nước ngoài và bị cảm, phải vào hiệu thuốc để mua thuốc. Hoặc đồng nghiệp than mệt, bạn muốn khuyên một câu. Bài này giúp bạn **nói mình bị bệnh gì** và **khuyên, nhắc, cấm** đúng mức."),
      p("Người Việt nói “Tôi bị đau đầu”, nhưng tiếng Anh dùng **have**: **I have a headache**, **I have a fever**. Đau họng là **a sore throat**."),
      table(
        ["Tiếng Việt", "Tiếng Anh"],
        ["bị đau đầu", "have a headache"],
        ["bị đau bụng", "have a stomach ache"],
        ["bị đau họng", "have a sore throat"],
        ["bị sốt", "have a fever / a temperature"],
        ["bị ho", "have a cough"],
        ["bị cảm", "have a cold"],
      ),
      p("Các từ trong bảng dưới đây đều đứng trước **động từ nguyên mẫu**, nhưng nghĩa khác nhau khá nhiều."),
      table(
        ["Từ", "Nghĩa", "Ví dụ"],
        ["should / shouldn't", "nên / không nên (lời khuyên)", "You should rest."],
        ["have to / has to", "phải (do quy định, hoàn cảnh)", "She has to take this medicine."],
        ["don't have to", "không cần, không bắt buộc", "You don't have to come tomorrow."],
        ["must", "phải (người nói thấy rất cần)", "I must see a doctor."],
        ["mustn't", "không được phép, cấm", "You mustn't smoke here."],
      ),
      ex("You look tired. You should go to bed early.", "Trông bạn mệt quá. Bạn nên đi ngủ sớm."),
      ex("Do you have anything for a cough? Yes, try this. You should take it twice a day.", "Chị có thuốc gì trị ho không? Có, anh dùng thử loại này. Anh nên uống ngày hai lần.", "Do you have anything for + tên bệnh? là câu hỏi mua thuốc tự nhiên nhất ở hiệu thuốc."),
      ex("It's Sunday, so I don't have to get up early.", "Hôm nay Chủ nhật nên tôi không cần dậy sớm.", "Don't have to là không bắt buộc: dậy sớm cũng được, không dậy cũng không sao."),
      ex("What should I do?", "Tôi nên làm gì?", "Câu hỏi xin lời khuyên: đưa should lên trước chủ ngữ, không cần do."),
      p("Còn câu hỏi với **have to** thì vẫn cần **do / does** như động từ thường: **Do I have to** pay now? **Does she have to** stay in hospital? Ở phòng khám, bác sĩ sẽ hỏi **What's the matter?** (bạn bị sao?), bạn đáp **I have...** hoặc **I've got...** như đã học ở bài Mô tả một người (A1). Muốn đặt lịch khám, gọi điện nói **I'd like to make an appointment, please.** Lấy thuốc xong, hỏi **How often should I take it?** (uống mấy lần?)."),
      tip("**Don't have to** và **mustn't** trông giống nhau nhưng nghĩa rất khác: don't have to là “không cần”, mustn't là “cấm”."),
      tip("Chữ l trong **should** không đọc: /ʃʊd/. Shouldn't đọc là /ˈʃʊd.ənt/. Must khi nói nhanh thường đọc nhẹ thành /məst/."),
      mistake("You should to rest.", "You should rest.", "Người Việt quen với want to, need to nên thêm to cả sau should. Sau should, must không có to."),
      mistake("I am headache.", "I have a headache.", "Dịch từng chữ “tôi bị đau đầu” nên dùng to be. Tiếng Anh dùng have + tên bệnh."),
      mistake("He have to work today.", "He has to work today.", "Tiếng Việt không chia động từ theo ngôi, nên người Việt hay quên. He, she, it đi với has to."),
      teacher("Khi đứng lớp, cặp từ tôi phải chữa nhiều nhất là **mustn't** và **don't have to**. Học viên dịch cả hai là “không phải” nên dùng lẫn lộn. Tôi dạy thế này: mustn't là **tấm biển cấm**, như biển cấm hút thuốc; don't have to là **được miễn**, như Chủ nhật được miễn đi làm. Gặp câu nào các bạn cũng tự hỏi: đây là biển cấm hay được miễn? Thêm một điều nữa: khuyên người lớn tuổi hay sếp mà nói You should... thì nghe hơi thẳng. Thêm I think phía trước cho mềm: I think you should rest."),
      summary(
        "Nói bệnh: have + a + tên bệnh (I have a headache, a sore throat), không nói I am headache.",
        "Should / shouldn't để khuyên; sau should và must không có to.",
        "Have to / has to là phải do hoàn cảnh; câu hỏi cần do / does: Do I have to pay now?",
        "Mustn't là cấm, don't have to là không cần. Hai nghĩa khác hẳn nhau.",
        "Khuyên người lớn tuổi hay sếp, thêm I think cho mềm: I think you should rest.",
      ),
    ],
  },
  words: [
    word("headache", "/ˈhed.eɪk/", "đau đầu", "I have a terrible headache.", "head|ache", 0, "Ache đọc là /eɪk/, không đọc là “át-chờ”."),
    word("stomach", "/ˈstʌm.ək/", "dạ dày, bụng", "My stomach hurts.", "stom|ach", 0, "Chữ ch ở đây đọc là /k/."),
    word("fever", "/ˈfiː.və/", "sốt", "The baby has a fever.", "fe|ver", 0),
    word("cough", "/kɒf/", "ho; cơn ho", "He has a bad cough.", "cough", 0, "Chữ gh đọc là /f/."),
    word("throat", "/θrəʊt/", "họng", "I have a sore throat.", "throat", 0),
    word("medicine", "/ˈmed.ɪ.sən/", "thuốc", "Take this medicine after meals.", "med|i|cine", 0),
    word("rest", "/rest/", "nghỉ ngơi", "You should rest for a few days.", "rest", 0),
    word("dentist", "/ˈden.tɪst/", "nha sĩ", "I have to see the dentist on Monday.", "den|tist", 0),
  ],
  exercises: [
    mc("a2-5-1", "You look tired. You ___ go to bed early.", ["should", "shouldn't", "don't have to"], 0, "Đây là lời khuyên nên dùng should."),
    mc("a2-5-2", "It's Sunday. I ___ get up early.", ["mustn't", "don't have to", "should"], 1, "Chủ nhật không phải đi làm, nên là “không cần”: don't have to."),
    fill("a2-5-3", "She ___ to take this medicine three times a day. (have)", ["has"], "She đi với has to."),
    fill("a2-5-4", "You ___ smoke in the hospital. (bị cấm)", ["mustn't", "must not", "can't", "cannot"], "Hút thuốc trong bệnh viện là bị cấm: mustn't (hoặc can't)."),
    reorder("a2-5-5", "I have a bad headache.", "Tiếng Anh nói bệnh bằng have + a + tên bệnh; tính từ bad đứng trước headache."),
    reorder("a2-5-6", "He has to stay in bed.", "He, she, it đi với has to + động từ nguyên mẫu."),
    listen("a2-5-7", "How often should I take this medicine?", ["Thuốc này giá bao nhiêu?", "Tôi có phải uống thuốc này không?", "Tôi nên uống thuốc này mấy lần?"], 2, "How often hỏi tần suất: bao lâu một lần, mấy lần. Should I...? là xin lời khuyên."),
    listen("a2-5-8", "I've got a sore throat and a cough.", ["Tôi bị đau đầu và sốt.", "Tôi bị đau họng và ho.", "Tôi bị đau bụng và ho."], 1, "I've got nghĩa là I have (hay dùng trong tiếng Anh-Anh). Sore throat là đau họng, cough là ho."),
    correct("a2-5-9", "You must to wear a helmet on a motorbike.", ["You must wear a helmet on a motorbike.", "You have to wear a helmet on a motorbike."], "Sau must không có to: must wear. Nếu muốn giữ to thì phải đổi sang have to wear."),
    correct("a2-5-10", "My son is a fever.", ["My son has a fever.", "My son has got a fever.", "My son's got a fever."], "Nói bệnh dùng have + a + tên bệnh, không dùng to be. My son đi với has: My son has a fever."),
  ],
  speaking: [
    say("I have a headache and a fever.", "Tôi bị đau đầu và sốt."),
    say("You should drink more water and rest.", "Bạn nên uống nhiều nước hơn và nghỉ ngơi."),
    say("You don't have to go to work tomorrow.", "Mai bạn không cần đi làm."),
  ],
  freeSpeaking: free(
    "Your friend has a bad cold. What advice can you give?",
    "Nói 4–5 câu khuyên một người bạn đang bị cảm nặng: bạn ấy nên làm gì, không nên làm gì, và việc gì không cần làm.",
    "I'm sorry you're ill. I think you should stay in bed and rest today. You should drink a lot of warm water and eat some hot soup. You shouldn't go out in the rain. You don't have to go to work tomorrow. If you have a fever, you should see a doctor.",
  ),
  dialogueQuestions: [
    mc("a2-5-d1", "Người khách bị những triệu chứng gì?", ["Đau họng, ho nhiều và đau đầu", "Sốt và đau bụng", "Đau họng và sốt", "Ho và đau bụng"], 0, "Khách hỏi thuốc trị sore throat, rồi nói: No, but I have a bad cough and a headache. Khách không bị sốt."),
    listenQ("a2-5-d2", "Dược sĩ dặn điều gì khi dùng thuốc?", "Do I have to take it after meals? Yes, you do. And you mustn't drink alcohol with it.", ["Uống trước bữa ăn và có thể uống rượu bia", "Uống sau bữa ăn và không được uống rượu bia", "Không cần uống sau bữa ăn"], 1, "Yes, you do: phải uống sau bữa ăn. You mustn't drink alcohol: không được uống rượu bia."),
    listenQ("a2-5-d3", "Vì sao người khách thấy khó làm theo lời khuyên không nói nhiều?", "That's hard. I have to give a presentation tomorrow!", ["Vì anh ấy phải gọi điện cho sếp", "Vì anh ấy có lớp học tiếng Anh", "Vì ngày mai anh ấy phải thuyết trình"], 2, "I have to give a presentation tomorrow: mai anh ấy phải thuyết trình."),
  ],
  reading: reading({
    title: "Thông báo: Mùa cảm cúm ở văn phòng",
    text: `To all staff,

A lot of people in our office have a cold or the flu this month. Here is some advice from the company doctor.

If you have a fever, you mustn't come to the office. Stay at home and rest. You don't have to bring a doctor's note for one or two days, but you have to call your manager before nine o'clock.

If you only have a cough or a sore throat, you can come to work, but you should wear a mask. You should also wash your hands often and drink a lot of warm water. Please don't share cups or bottles with other people.

Dr Lan is in Room 204 every Tuesday and Thursday morning. You don't have to make an appointment. Just come and see her.

Stay healthy!
The HR team`,
    glossary: [
      ["staff", "nhân viên"],
      ["the flu", "bệnh cúm"],
      ["advice", "lời khuyên"],
      ["doctor's note", "giấy xác nhận của bác sĩ"],
      ["mask", "khẩu trang"],
      ["share", "dùng chung"],
      ["HR team", "phòng nhân sự"],
    ],
    questions: [
      mc("a2-5-r1", "Thông báo này viết cho ai và để làm gì?", ["Cho nhân viên, đưa lời khuyên trong mùa cảm cúm", "Cho bác sĩ, mời đến làm việc", "Cho khách hàng, báo văn phòng đóng cửa", "Cho quản lý, xin nghỉ phép"], 0, "To all staff... Here is some advice from the company doctor."),
      mc("a2-5-r2", "Nếu bị sốt, nhân viên phải làm gì?", ["Đến văn phòng và đeo khẩu trang", "Ở nhà nghỉ và gọi cho quản lý trước chín giờ", "Mang giấy của bác sĩ đến công ty ngay hôm đó"], 1, "You mustn't come to the office. Stay at home and rest... you have to call your manager before nine o'clock."),
      mc("a2-5-r3", "Nghỉ ốm một hoặc hai ngày thì có cần giấy của bác sĩ không?", ["Có, luôn luôn cần", "Chỉ cần nếu bị sốt", "Không cần"], 2, "You don't have to bring a doctor's note for one or two days: không bắt buộc."),
      fill("a2-5-r4", "Nếu chỉ bị ho hoặc đau họng, bạn nên đeo khẩu trang: you ___ wear a mask.", ["should"], "Lời khuyên dùng should: you should wear a mask."),
      mc("a2-5-r5", "Muốn gặp bác sĩ Lan thì làm thế nào?", ["Đến phòng 204 vào sáng thứ Ba hoặc thứ Năm, không cần hẹn trước", "Gọi điện đặt lịch trước một ngày", "Gửi email cho phòng nhân sự"], 0, "Dr Lan is in Room 204 every Tuesday and Thursday morning. You don't have to make an appointment."),
    ],
  }),
  dialogue: dialogue(
    "Mua thuốc ở hiệu thuốc",
    "Bạn đi công tác ở Singapore và bị đau họng, ho. Bạn vào hiệu thuốc hỏi mua thuốc và xin lời khuyên của dược sĩ.",
    { A: "Bạn", B: "Dược sĩ" },
    A("Excuse me, do you have anything for a sore throat?", "Xin lỗi, chị có thuốc gì trị đau họng không?"),
    B("Yes. What's the matter? Do you have a fever, too?", "Có. Anh bị sao vậy? Anh có sốt không?"),
    A("No, but I have a bad cough and a headache.", "Không, nhưng tôi ho nhiều và đau đầu."),
    B("Try this medicine. You should take it three times a day.", "Anh dùng thử thuốc này. Anh nên uống ngày ba lần."),
    A("Do I have to take it after meals?", "Tôi có phải uống sau bữa ăn không?"),
    B("Yes, you do. And you mustn't drink alcohol with it.", "Có, anh phải uống sau ăn. Và anh không được uống rượu bia khi dùng thuốc."),
    A("OK. Should I see a doctor?", "Vâng. Tôi có nên đi khám bác sĩ không?"),
    B("You don't have to see a doctor now. But if you have a fever tomorrow, you should make an appointment.", "Bây giờ anh chưa cần đi khám. Nhưng nếu mai anh bị sốt thì anh nên đặt lịch khám."),
    A("Thank you. What else should I do?", "Cảm ơn chị. Tôi nên làm gì nữa?"),
    B("You should drink a lot of warm water and rest. You shouldn't talk too much.", "Anh nên uống nhiều nước ấm và nghỉ ngơi. Anh không nên nói nhiều."),
    A("That's hard. I have to give a presentation tomorrow!", "Khó quá. Mai tôi phải thuyết trình!"),
    B("Then rest tonight. I hope you feel better soon.", "Vậy tối nay anh nghỉ ngơi đi. Chúc anh mau khỏe."),
  ),
  task: task({
    prompt: "Đồng nghiệp người nước ngoài nhắn tin: “I have a bad cold and a headache. I have to work tomorrow. What should I do?”. Viết tin nhắn trả lời 5–6 câu (khoảng 40–60 từ): hỏi thăm, đưa lời khuyên, và nói điều bạn ấy không cần làm hoặc không được làm.",
    hints: [
      "Khuyên nhẹ nhàng: I think you should... / You shouldn't...",
      "Nói điều không cần làm: You don't have to...; điều bị cấm: You mustn't...",
      "Kết bằng lời chúc: Get well soon!",
    ],
    model: "Oh no, I'm sorry to hear that! I think you should go to bed early tonight and drink a lot of warm water. You shouldn't drink cold drinks. You don't have to come to the office tomorrow, because you can work from home. If you have a fever, you should see a doctor. Get well soon!",
    checklist: [
      "Có ít nhất 2 câu should / shouldn't + động từ nguyên mẫu (không có to)",
      "Có 1 câu don't have to hoặc mustn't dùng đúng nghĩa (không cần hoặc bị cấm)",
      "Có I think trước lời khuyên cho lịch sự",
      "Nếu nhắc đến bệnh, dùng have + a + tên bệnh",
      "Có câu hỏi thăm ở đầu và lời chúc ở cuối tin nhắn",
    ],
    minWords: 40,
  }),
});

const banDaTung = lesson({
  slug: "ban-da-tung",
  title: "Bạn đã từng…?",
  minutes: 32,
  lecture: {
    title: "Thì hiện tại hoàn thành với ever và never",
    blocks: [
      p("Làm quen với bạn mới, người ta hay hỏi: “Have you ever been to Ha Long Bay?”, “Have you ever tried bun cha?”. Đi phỏng vấn xin việc cũng gặp: “Have you ever worked in a team?”. Đây là những câu hỏi về **trải nghiệm**, và tiếng Anh có một thì riêng cho chúng."),
      p("Muốn hỏi ai đó “đã từng... bao giờ chưa”, tiếng Anh dùng **thì hiện tại hoàn thành**: **have / has + quá khứ phân từ (V3)**. Ta chỉ quan tâm việc đó có xảy ra trong đời hay chưa, không nói rõ khi nào."),
      table(
        ["Dạng câu", "Cấu trúc", "Ví dụ"],
        ["Khẳng định", "have / has + V3", "She has been to Paris."],
        ["Phủ định", "haven't / hasn't + V3", "He hasn't seen the film."],
        ["Chưa bao giờ", "have / has + never + V3", "I've never eaten durian."],
        ["Nghi vấn", "Have / Has + chủ ngữ + ever + V3?", "Have you ever tried pho?"],
      ),
      table(
        ["Nguyên mẫu", "Quá khứ", "Quá khứ phân từ"],
        ["go", "went", "been / gone"],
        ["eat", "ate", "eaten"],
        ["see", "saw", "seen"],
        ["meet", "met", "met"],
        ["try", "tried", "tried"],
        ["visit", "visited", "visited"],
      ),
      tip("Động từ có quy tắc thì V3 giống dạng quá khứ: visited, tried, worked. Chỉ cần học thêm V3 của động từ bất quy tắc, và hãy **đọc to theo bộ ba cho có nhịp**: go, went, gone; eat, ate, eaten; see, saw, seen."),
      p("Hỏi dùng **Have you ever + V3?** Trả lời ngắn: **Yes, I have.** / **No, I haven't.** Nói “chưa bao giờ” dùng **I've never + V3**. He, she, it đi với **has**: Has she ever...? No, she hasn't."),
      ex("Have you ever been to Japan?", "Bạn đã từng đến Nhật Bản chưa?", "Been to nghĩa là đã đến rồi và đã về. Gone to là đã đi và chưa về."),
      ex("I've never eaten durian.", "Tôi chưa bao giờ ăn sầu riêng.", "I've là viết tắt của I have. Never đứng giữa have và V3."),
      p("Khi kể tiếp chi tiết như **khi nào**, **với ai**, ta chuyển sang **quá khứ đơn**, vì lúc đó đã có thời điểm cụ thể."),
      ex("Yes, I have. I went there two years ago.", "Có, tôi từng đến. Tôi đến đó hai năm trước.", "Câu đầu là hiện tại hoàn thành (có trải nghiệm), câu sau là quá khứ đơn vì có two years ago."),
      ex("Has your brother ever met a famous person? No, he hasn't.", "Anh trai bạn đã từng gặp người nổi tiếng chưa? Chưa."),
      tip("Ever đặt giữa have và V3 trong câu hỏi. Câu khẳng định thường không dùng ever: nói **I've been to Hue**, không nói “I've ever been to Hue”. Ngoại lệ hay gặp là sau so sánh nhất: the best film I've ever seen."),
      mistake("I have visited Hue last year.", "I visited Hue last year.", "Tiếng Việt dùng “đã” cho mọi chuyện đã qua, nên người Việt tưởng have + V3 là “đã”. Có thời gian cụ thể (last year) thì phải dùng quá khứ đơn."),
      mistake("I haven't never seen snow.", "I've never seen snow.", "“Chưa bao giờ” nghe như câu phủ định nên nhiều người nghĩ phải thêm not. Never đã mang nghĩa phủ định, thêm not là phủ định hai lần."),
      mistake("I have been to abroad.", "I have been abroad.", "Tiếng Việt nói “ra nước ngoài” nên người Việt hay thêm to. Abroad đã có nghĩa là “ở nước ngoài”, không cần giới từ."),
      teacher("Tôi hay bảo các bạn học viên: thì hiện tại hoàn thành giống như **lật cuốn album cuộc đời**, chỉ hỏi có tấm ảnh đó hay không, chưa hỏi chụp lúc nào. Hễ có ai hỏi “khi nào”, “năm nào”, các bạn gấp album lại và kể bằng quá khứ đơn như ở bài Hôm qua bạn làm gì. Bài tập mỗi ngày tôi giao: viết ba câu I've never... về những điều các bạn chưa từng làm và ba câu Have you ever...? để hỏi bạn bè. Đó là bộ câu mở chuyện dễ nhất khi gặp người nước ngoài."),
      summary(
        "Trải nghiệm trong đời, không nói khi nào: have / has + V3 (I've been to Hue).",
        "Hỏi: Have you ever + V3? Trả lời ngắn: Yes, I have. / No, I haven't.",
        "Chưa bao giờ: I've never + V3. Never đã mang nghĩa phủ định, không thêm not.",
        "Kể tiếp chi tiết có thời gian cụ thể (last year, two years ago) thì chuyển sang quá khứ đơn.",
        "Been to là đã đến và đã về; abroad không có to đứng trước.",
      ),
    ],
  },
  words: [
    word("ever", "/ˈev.ə/", "đã từng (trong câu hỏi)", "Have you ever tried pho?", "ev|er", 0),
    word("never", "/ˈnev.ə/", "chưa bao giờ", "I've never been on a plane.", "nev|er", 0),
    word("abroad", "/əˈbrɔːd/", "ở nước ngoài, ra nước ngoài", "Have you ever worked abroad?", "a|broad", 1, "Abroad là trạng từ, không nói “go to abroad”."),
    word("experience", "/ɪkˈspɪə.ri.əns/", "trải nghiệm, kinh nghiệm", "It was a great experience.", "ex|pe|ri|ence", 1),
    word("festival", "/ˈfes.tɪ.vəl/", "lễ hội", "Have you ever been to a music festival?", "fes|ti|val", 0),
    word("delicious", "/dɪˈlɪʃ.əs/", "ngon", "The food was delicious.", "de|li|cious", 1),
    word("famous", "/ˈfeɪ.məs/", "nổi tiếng", "I've never met a famous person.", "fa|mous", 0),
    word("foreign", "/ˈfɒr.ən/", "nước ngoài", "Have you ever tried foreign food?", "for|eign", 0, "Chữ g không đọc: /ˈfɒr.ən/."),
  ],
  exercises: [
    mc("a2-6-1", "Have you ever ___ sushi?", ["ate", "eaten", "eat", "eating"], 1, "Sau have dùng quá khứ phân từ: eat → ate → eaten."),
    mc("a2-6-2", "I ___ to Hue last year.", ["have been", "have gone", "went"], 2, "Last year là thời điểm cụ thể nên dùng quá khứ đơn."),
    fill("a2-6-3", "She has never ___ a famous person. (meet)", ["met"], "Meet → met → met."),
    fill("a2-6-4", "A: Have you ever been to Japan? B: Yes, I ___.", ["have"], "Trả lời ngắn lặp lại trợ động từ have."),
    reorder("a2-6-5", "Have you ever been abroad?", "Câu hỏi trải nghiệm: Have + chủ ngữ + ever + V3. Abroad đứng cuối, không có to."),
    reorder("a2-6-6", "I have never tried Indian food.", "Never đứng giữa have và quá khứ phân từ."),
    listen("a2-6-7", "I've never seen snow.", ["Tôi chưa bao giờ thấy tuyết.", "Tôi đã từng thấy tuyết.", "Tôi muốn được thấy tuyết."], 0),
    listen("a2-6-8", "Has he ever worked abroad?", ["Anh ấy có muốn làm việc ở nước ngoài không?", "Anh ấy đã từng làm việc ở nước ngoài chưa?", "Anh ấy đang làm việc ở nước ngoài à?"], 1, "Has he ever...? hỏi về trải nghiệm: đã từng... chưa."),
    correct("a2-6-9", "I have seen that film last week.", ["I saw that film last week.", "I have seen that film."], "Có thời gian cụ thể last week thì dùng quá khứ đơn: I saw that film last week. Nếu muốn giữ have seen thì phải bỏ last week."),
    correct("a2-6-10", "Have you ever eat bun bo Hue?", "Have you ever eaten bun bo Hue?", "Sau have dùng quá khứ phân từ: eat → ate → eaten."),
  ],
  speaking: [
    say("Have you ever been to Da Nang?", "Bạn đã từng đến Đà Nẵng chưa?"),
    say("I've never eaten durian.", "Tôi chưa bao giờ ăn sầu riêng."),
    say("Yes, I have. I went there two years ago.", "Có, tôi từng đến. Tôi đến đó hai năm trước."),
  ],
  freeSpeaking: free(
    "Have you ever had a special experience? Tell me about it.",
    "Nói 4–5 câu về một trải nghiệm đáng nhớ: bạn đã từng làm gì, kể chi tiết khi nào, với ai bằng quá khứ đơn, và một điều bạn chưa bao giờ làm.",
    "Yes, I have. I've climbed Fansipan, the highest mountain in Vietnam. I went there with my friends three years ago. It was very cold, but the view was beautiful. I've been to Sa Pa many times, but I've never seen snow there. I'd love to see it one day.",
  ),
  dialogueQuestions: [
    mc("a2-6-d1", "Trước chuyến này, Emma đã từng đến những nước nào?", ["Nhật Bản và Hàn Quốc", "Thái Lan và Campuchia", "Singapore và Thái Lan", "Chưa từng đến nước châu Á nào"], 1, "I've been to Thailand and Cambodia: Thái Lan và Campuchia."),
    listenQ("a2-6-d2", "Hướng dẫn viên đi Singapore khi nào?", "Yes, I have. I went to Singapore two years ago.", ["Hai năm trước", "Năm ngoái", "Hai tháng trước"], 0, "Two years ago: hai năm trước. Câu có thời gian cụ thể nên dùng quá khứ đơn went."),
    listenQ("a2-6-d3", "Emma nghĩ gì về sầu riêng?", "Yes, I have. I tried it in Bangkok last year, but I didn't like the smell!", ["Cô ấy chưa ăn bao giờ", "Cô ấy rất thích và ăn nhiều lần rồi", "Cô ấy đã ăn thử nhưng không thích mùi của nó"], 2, "I tried it... but I didn't like the smell: đã ăn thử nhưng không thích mùi."),
  ],
  reading: reading({
    title: "Hồ sơ trên ứng dụng tìm bạn luyện tiếng Anh",
    text: `Hi! My name is Tuan, and I'm a tour guide from Ninh Binh. I'm looking for a friend to practise English with.

I love my job because I meet people from all over the world. I've shown visitors the rice fields of Tam Coc many times, and I've climbed the steps of Hang Mua more than fifty times!

I've been to many places in Vietnam, but I've never travelled abroad. Last year I nearly went to Japan, but my visa didn't arrive in time. I've never seen snow, and I really want to see it one day.

I've tried a lot of foreign food. My favourite is Indian curry. Some guests from Mumbai taught me to cook it two years ago. I've never eaten French cheese, but I'd like to try it.

Have you ever been to Ninh Binh? Write to me, and I'll tell you about the best places here!`,
    glossary: [
      ["tour guide", "hướng dẫn viên du lịch"],
      ["practise", "luyện tập"],
      ["rice field", "cánh đồng lúa"],
      ["step", "bậc thang"],
      ["nearly", "suýt, gần như"],
      ["visa", "thị thực"],
      ["in time", "kịp lúc"],
      ["curry", "món cà ri"],
    ],
    questions: [
      mc("a2-6-r1", "Tuấn viết bài này để làm gì?", ["Tìm một người bạn để luyện tiếng Anh", "Quảng cáo tour du lịch Ninh Bình", "Kể về chuyến đi Nhật Bản", "Xin việc làm hướng dẫn viên"], 0, "I'm looking for a friend to practise English with."),
      mc("a2-6-r2", "Điều nào đúng về Tuấn?", ["Anh ấy đã từng đi Nhật Bản", "Anh ấy chưa bao giờ ra nước ngoài", "Anh ấy đã từng thấy tuyết"], 1, "I've never travelled abroad. Năm ngoái anh suýt đi Nhật nhưng không đi được, và anh chưa bao giờ thấy tuyết."),
      mc("a2-6-r3", "Vì sao năm ngoái Tuấn không đi Nhật được?", ["Vì anh ấy bận dẫn khách", "Vì vé máy bay quá đắt", "Vì thị thực không đến kịp"], 2, "My visa didn't arrive in time: thị thực không đến kịp."),
      fill("a2-6-r4", "Những vị khách từ Mumbai dạy Tuấn nấu cà ri cách đây bao lâu? They taught him ___ years ago. (viết bằng chữ)", ["two"], "Some guests from Mumbai taught me to cook it two years ago."),
      mc("a2-6-r5", "Món nào Tuấn chưa từng ăn nhưng muốn ăn thử?", ["Cà ri Ấn Độ", "Pho mát Pháp", "Sushi Nhật Bản"], 1, "I've never eaten French cheese, but I'd like to try it."),
    ],
  }),
  dialogue: dialogue(
    "Làm quen với du khách",
    "Bạn là hướng dẫn viên, đang trò chuyện với Emma, một du khách người Anh, trên xe đi Hạ Long. Hai người hỏi nhau về những trải nghiệm đã từng có.",
    { A: "Bạn (hướng dẫn viên)", B: "Emma (du khách)" },
    A("Is this your first time in Vietnam, Emma?", "Đây là lần đầu chị đến Việt Nam à, Emma?"),
    B("Yes, it is. But I've been to Thailand and Cambodia.", "Đúng vậy. Nhưng tôi từng đến Thái Lan và Campuchia rồi."),
    A("Have you ever tried bun cha?", "Chị đã ăn bún chả bao giờ chưa?"),
    B("No, I haven't. What is it?", "Chưa. Món đó là gì vậy?"),
    A("It's grilled pork with noodles. It's delicious. You should try it in Hanoi.", "Là thịt nướng ăn với bún. Ngon lắm. Chị nên ăn thử ở Hà Nội."),
    B("I'd love to. And have you ever been abroad?", "Tôi rất muốn thử. Còn anh, anh đã từng ra nước ngoài chưa?"),
    A("Yes, I have. I went to Singapore two years ago.", "Rồi. Tôi đi Singapore hai năm trước."),
    B("Did you like it?", "Anh có thích không?"),
    A("Yes, it was great. But I've never seen snow. Have you ever seen it?", "Có, tuyệt lắm. Nhưng tôi chưa bao giờ thấy tuyết. Chị đã thấy tuyết bao giờ chưa?"),
    B("Yes, I have. It sometimes snows in England in winter.", "Rồi. Ở Anh mùa đông thỉnh thoảng có tuyết."),
    A("Have you ever eaten durian?", "Chị đã ăn sầu riêng bao giờ chưa?"),
    B("Yes, I have. I tried it in Bangkok last year, but I didn't like the smell!", "Rồi. Tôi ăn thử ở Bangkok năm ngoái, nhưng tôi không thích mùi của nó!"),
    A("I've eaten it many times, and I love it.", "Tôi ăn nhiều lần rồi, và tôi mê nó."),
  ),
  task: task({
    prompt: "Viết 5–6 câu (khoảng 45–65 từ) giới thiệu trải nghiệm của bạn với một người bạn nước ngoài: những điều bạn đã từng làm, những điều chưa bao giờ làm, kể chi tiết một trải nghiệm, rồi hỏi lại bạn ấy.",
    hints: [
      "Trải nghiệm: I've been to... / I've tried... / I've met...",
      "Điều chưa từng làm: I've never + V3.",
      "Kể chi tiết có thời gian cụ thể bằng quá khứ đơn: I went there last month.",
      "Kết bằng câu hỏi: Have you ever...?",
    ],
    model: "I've been to many places in Vietnam, but I've never been abroad. I've tried a lot of foreign food. For example, I've eaten sushi. I tried it for the first time last month at a Japanese restaurant in Ho Chi Minh City, and it was delicious. I've never seen snow, and I've never been on a plane. Have you ever travelled abroad?",
    checklist: [
      "Có ít nhất 2 câu have / has + V3 nói về trải nghiệm",
      "Có ít nhất 1 câu I've never + V3 (không thêm not)",
      "Câu có thời gian cụ thể (last month, two years ago...) dùng quá khứ đơn",
      "V3 của động từ bất quy tắc viết đúng (been, eaten, seen, met)",
      "Có 1 câu hỏi Have you ever + V3?",
    ],
    minWords: 45,
  }),
});

export const tiengAnhA2: Course = {
  slug: "tieng-anh-a2",
  title: "Tiếng Anh A2: Giao tiếp hằng ngày",
  level: "A2",
  goal: "lo-trinh",
  summary: "Kể chuyện đã qua, nói về kế hoạch, mua sắm, hỏi đường và chia sẻ trải nghiệm bằng những câu tiếng Anh tự nhiên.",
  outcomes: [
    "Kể lại những việc đã làm bằng thì quá khứ đơn",
    "Nói về kế hoạch, mời và nhận lời hoặc từ chối",
    "So sánh khi mua sắm, hỏi đường và nói về phương tiện",
    "Xin và cho lời khuyên về sức khỏe, kể về trải nghiệm đã từng có",
    "Nói về điều kiện có thật (if, unless) và kể việc đang diễn ra trong quá khứ (was / were + V-ing)",
  ],
  audience: [
    "Người đã học xong A1 hoặc nắm được thì hiện tại đơn và động từ to be",
    "Người muốn tự tin xử lý các tình huống giao tiếp hằng ngày khi đi làm, đi du lịch",
  ],
  teacher: {
    name: "Cô Ngọc Anh",
    initials: "NA",
    bio: "Người dẫn dắt khóa A2. Giải thích ngữ pháp bằng tình huống đời thường của người đi làm.",
  },
  faqs: [
    { q: "Mình chưa học khóa A1 thì có vào thẳng A2 được không?", a: "Được, nếu bạn đã dùng được động từ to be và thì hiện tại đơn. Nếu chưa chắc, hãy làm bài kiểm tra trình độ trước." },
    { q: "Học xong A2 thì học gì tiếp?", a: "Bạn học tiếp khóa B1: Tự tin trò chuyện, để kể chuyện dài hơn và bày tỏ quan điểm. Mỗi cấp có chứng chỉ riêng." },
  ],
  status: "open",
  modules: [
    chapter(1, "Chuyện đã qua", [homQua, nKyNghiCuaToi, nNgayXuaToiTung, nQuaKhuTiepDien, nTieuSu]),
    chapter(2, "Dự định và tương lai", [keHoach, nDuDoanTuongLai, nDieuKienLoai01, nLoiMoiVaDeNghi, nGoiDienThoai]),
    chapter(3, "Mua sắm và đồ vật", [soSanh, nBaoNhieu, nQuaVaKhongDu, nCuaAi]),
    chapter(4, "Ra ngoài và trải nghiệm", [hoiDuong, sucKhoe, banDaTung, nVuaMoiDaChua]),
  ],
  finalTest: finalBank(
    [
      // Chương 1: chuyện đã qua
      mc("a2-f01", "A: ___ did you stay in Nha Trang? B: For five days.", ["When", "How long", "Where", "Who"], 1, "Câu trả lời For five days là một khoảng thời gian, nên câu hỏi là How long."),
      fill("a2-f02", "When I was a child, I ___ to walk to school every morning. (use)", ["used"], "Thói quen ngày xưa, câu khẳng định: used to + động từ nguyên mẫu."),
      reorder("a2-f03", "What did your sister buy at the market?", "Từ để hỏi + did + chủ ngữ + động từ nguyên mẫu: What did your sister buy...?"),
      listenQ("a2-f04", "Ông của người nói nghỉ hưu khi nào?", "My grandfather was born in nineteen fifty. He became a teacher after he finished university, and he retired when he was sixty.", ["Khi ông tốt nghiệp đại học", "Năm một nghìn chín trăm năm mươi", "Khi ông sáu mươi tuổi", "Khi ông bắt đầu làm giáo viên"], 2, "He retired when he was sixty: ông nghỉ hưu khi sáu mươi tuổi. Năm 1950 là năm ông sinh ra."),
      correct("a2-f05", "My brother was play computer games when I got home.", ["My brother was playing computer games when I got home.", "When I got home, my brother was playing computer games."], "Việc đang diễn ra thì bị việc khác chen ngang: quá khứ tiếp diễn was + V-ing (was playing). Không ghép was với động từ nguyên mẫu."),
      // Chương 2: dự định và tương lai
      mc("a2-f06", "I'm not sure yet, but I ___ go to the party. It depends on my work.", ["will", "won't", "might", "am going to"], 2, "Người nói chưa chắc chắn (I'm not sure yet) nên dùng might. Will, won't và am going to đều nghe như đã chắc."),
      fill("a2-f07", "Your bag looks heavy. ___ I carry it for you?", ["shall", "can", "could", "may"], "Đề nghị làm giúp người khác: Shall I...? (Can I...?, Could I...? hoặc May I...? cũng đúng)."),
      reorder("a2-f08", "Are you going to take the train to Hue?", "Câu hỏi với going to: Are + chủ ngữ + going to + động từ nguyên mẫu?"),
      listenQ("a2-f09", "Vì sao Mai hỏi người gọi có muốn để lại lời nhắn không?", "Hello, this is Mai from Sen Travel. I'm afraid Mr Vu isn't available right now. Would you like to leave a message?", ["Vì ông Vũ đang không nghe máy được", "Vì đường dây bị hỏng", "Vì người gọi nói quá nhanh"], 0, "Mr Vu isn't available right now: lúc này ông Vũ không nghe máy được, nên Mai đề nghị ghi lại lời nhắn."),
      correct("a2-f10", "If you will study hard, you'll pass the exam.", ["If you study hard, you'll pass the exam.", "You'll pass the exam if you study hard."], "Điều kiện loại 1: vế if dùng hiện tại đơn dù nói về tương lai (If you study hard), will chỉ đứng ở vế kết quả."),
      // Chương 3: mua sắm và đồ vật
      mc("a2-f11", "Hurry up! We don't have ___ time. The film starts in five minutes.", ["much", "many", "a few"], 0, "Time không đếm được, câu phủ định nên dùng much. Many và a few đi với danh từ đếm được."),
      fill("a2-f12", "This T-shirt isn't big ___ for my father. (đủ)", ["enough"], "Enough đứng sau tính từ: big enough."),
      reorder("a2-f13", "It's the cheapest restaurant in our street.", "Cheap là tính từ ngắn: the cheapest. So sánh nhất luôn có the."),
      listenQ("a2-f14", "Theo Lan, cái ô là của ai?", "Whose umbrella is this? Is it yours, Lan? No, it isn't mine. I think it's Minh's.", ["Của Lan", "Của người hỏi", "Của Minh"], 2, "Lan nói It isn't mine. I think it's Minh's: không phải của Lan, chắc là của Minh."),
      correct("a2-f15", "There are too much people in this café.", "There are too many people in this café.", "People là danh từ đếm được số nhiều nên dùng too many, không dùng too much."),
      // Chương 4: ra ngoài và trải nghiệm
      mc("a2-f16", "A: Is the new bookshop far from here? B: No, it only takes five minutes ___.", ["by foot", "on foot", "in foot"], 1, "Đi bộ là on foot. By chỉ dùng với phương tiện: by bus, by taxi."),
      fill("a2-f17", "Have you finished your report ___? (chưa)", ["yet"], "Câu hỏi “đã... chưa?” ở hiện tại hoàn thành dùng yet ở cuối câu."),
      reorder("a2-f18", "Have you ever been to Phu Quoc?", "Câu hỏi trải nghiệm: Have + chủ ngữ + ever + V3?"),
      listenQ("a2-f19", "Ngày mai người nghe phải làm gì?", "You don't have to come to the office tomorrow. But you mustn't forget the online meeting at nine.", ["Phải đến văn phòng lúc chín giờ", "Không cần đến văn phòng, nhưng phải tham gia cuộc họp trực tuyến lúc chín giờ", "Không cần làm gì cả", "Phải gọi điện cho sếp lúc chín giờ"], 1, "Don't have to come là không cần đến văn phòng; mustn't forget the online meeting là không được quên cuộc họp trực tuyến."),
      correct("a2-f20", "I have already see this film.", ["I have already seen this film."], "Hiện tại hoàn thành: have + quá khứ phân từ. See → saw → seen: I have already seen this film."),
    ],
    FINAL_EXTRA_TIENG_ANH_A2,
  ),
};
