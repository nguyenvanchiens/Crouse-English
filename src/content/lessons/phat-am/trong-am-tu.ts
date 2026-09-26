import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "trong-am-tu",
  title: "Trọng âm từ",
  minutes: 30,
  lecture: {
    title: "Trọng âm từ và nguyên âm yếu /ə/",
    blocks: [
      p("Một học trò của tôi hỏi đường ở London: “Where is the HÔ-TEN?”, đọc đều từng tiếng như tiếng Việt, và người Anh ngẩn ra. Họ quen nghe **ho-TEL**. Tiếng Việt dùng **thanh điệu**: mỗi âm tiết có dấu riêng và mạnh ngang nhau. Tiếng Anh không có thanh điệu mà có **trọng âm**: trong mỗi từ có một âm tiết được đọc **to hơn, dài hơn và cao hơn**, các âm tiết còn lại đọc nhẹ đi. Sai trọng âm thì dù các bạn đọc đúng từng âm, người nghe vẫn khó nhận ra từ."),
      table(
        ["Ký hiệu trong từ điển", "Ý nghĩa", "Ví dụ"],
        ["ˈ (dấu phẩy trên)", "trọng âm chính, đặt trước âm tiết được nhấn", "hotel /həʊˈtel/: ho-TEL"],
        ["ˌ (dấu phẩy dưới)", "trọng âm phụ, nhấn nhẹ hơn", "information /ˌɪn.fəˈmeɪ.ʃən/: in-for-MA-tion"],
        [". (dấu chấm)", "ranh giới giữa các âm tiết", "banana /bəˈnɑː.nə/: ba-NA-na"],
      ),
      p("Đi cùng trọng âm là **nguyên âm yếu /ə/** (schwa), âm phổ biến nhất trong tiếng Anh. Âm tiết không được nhấn thường co lại thành /ə/: một âm “ơ” rất ngắn, miệng thả lỏng. Chữ a, o, e, u đều có thể đọc là /ə/: **a**bout, phot**o**graph, happ**e**n, s**u**pport."),
      ex("Let's meet at the hotel at seven.", "Bảy giờ mình gặp nhau ở khách sạn nhé.", "Hotel /həʊˈtel/ nhấn âm thứ hai: ho-TEL."),
      ex("Can I have some information about the tour?", "Cho tôi xin thông tin về chuyến tham quan được không?", "Information /ˌɪn.fəˈmeɪ.ʃən/: âm “for” co lại thành /fə/, âm “MA” được nhấn."),
      table(
        ["Quy tắc", "Ví dụ"],
        ["Danh từ, tính từ hai âm tiết: thường nhấn âm đầu", "TAble, HAPpy, STUdent, MOther"],
        ["Động từ hai âm tiết: thường nhấn âm sau", "deCIDE, beGIN, forGET, reLAX"],
        ["Cùng một từ, danh từ nhấn đầu, động từ nhấn sau", "a PREsent / to preSENT, a REcord / to reCORD"],
        ["Đuôi -tion, -sion, -ic: thường nhấn ngay trước đuôi (ngoại lệ -ic: ARabic, CATHolic, POLitics, RHEToric, LUnatic)", "inforMAtion, deCIsion, photoGRAPHic"],
        ["Đuôi -ity: nhấn ngay trước đuôi", "uniVERsity, aBILity, elecTRIcity"],
        ["Danh từ ghép: thường nhấn phần đầu", "BUS stop, BOOKshop, CLASSroom"],
      ),
      ex("Thank you for the lovely present.", "Cảm ơn bạn vì món quà thật đẹp.", "Present là danh từ (món quà) nên nhấn âm đầu: /ˈprez.ənt/."),
      ex("She presents her report every Monday.", "Thứ Hai nào cô ấy cũng trình bày báo cáo.", "Present là động từ (trình bày) nên nhấn âm sau: /prɪˈzent/."),
      mistake("banana đọc thành “ba-na-na”, ba tiếng mạnh như nhau", "banana /bəˈnɑː.nə/: bơ-NAA-nơ", "Tiếng Việt đọc mỗi âm tiết rõ ràng như nhau. Tiếng Anh chỉ nhấn một âm, hai âm còn lại co thành /ə/ rất nhẹ."),
      mistake("photographer nhấn âm đầu giống photograph: PHO-to-gra-pher", "photographer /fəˈtɒɡ.rə.fə/: pho-TOG-ra-pher", "Người Việt hay giữ nguyên trọng âm của từ gốc. Nhưng khi thêm đuôi, trọng âm có thể dịch chuyển: PHOtograph, phoTOGrapher, photoGRAPHic."),
      tip("Mẹo kiểm tra: vừa đọc vừa **vỗ tay thật mạnh** ở âm tiết được nhấn, các âm khác chỉ gõ nhẹ ngón tay. Khi học một từ mới từ hai âm tiết trở lên, hãy tra từ điển và nhìn **dấu ˈ** trước tiên, rồi mới học nghĩa."),
      teacher("Nhiều học trò của tôi phát âm từng âm rất chuẩn mà người nước ngoài vẫn không hiểu, và lần nào nguyên nhân cũng là trọng âm. Tôi nói với các bạn điều tôi rút ra từ những giờ đứng lớp: **người bản xứ nhận ra từ nhờ trọng âm trước, nhờ từng âm sau**. Vì thế khi ghi từ mới vào sổ, các bạn hãy viết hoa âm tiết được nhấn ngay bên cạnh, ví dụ ho-TEL, ba-NA-na, in-for-MA-tion. Làm đều như vậy ba tháng, tai và miệng các bạn sẽ tự quen."),
      summary(
        "Mỗi từ nhiều âm tiết có **một âm nhấn chính**: to hơn, dài hơn, cao hơn các âm còn lại.",
        "Âm tiết không nhấn thường co lại thành **/ə/**: banana /bəˈnɑː.nə/, không phải “ba-na-na”.",
        "Danh từ, tính từ hai âm tiết thường nhấn âm đầu; động từ hai âm tiết thường nhấn âm sau: a PREsent, to preSENT.",
        "Đuôi -tion, -sion, -ic, -ity thường kéo trọng âm về âm tiết ngay trước nó (vài từ -ic là ngoại lệ: Arabic, politics).",
        "Thêm đuôi có thể dịch trọng âm: PHOtograph, phoTOGrapher, photoGRAPHic.",
      ),
    ],
  },
  words: [
    word("hotel", "/həʊˈtel/", "khách sạn", "Our hotel is near the beach.", "ho|tel", 1, "Nhấn âm thứ hai: ho-TEL. Đừng đọc đều như “hô-ten”, và nhớ âm /l/ cuối."),
    word("banana", "/bəˈnɑː.nə/", "quả chuối", "I eat a banana every morning.", "ba|na|na", 1, "Chỉ nhấn âm giữa, kéo dài /ɑː/; hai âm còn lại là /ə/ rất nhẹ."),
    word("decide", "/dɪˈsaɪd/", "quyết định", "I can't decide what to eat.", "de|cide", 1, "Động từ hai âm tiết nên nhấn âm sau: de-CIDE, và nhớ /d/ ở cuối."),
    word("photograph", "/ˈfəʊ.tə.ɡrɑːf/", "bức ảnh", "This is an old photograph of my family.", "pho|to|graph", 0, "Nhấn âm đầu: PHO-to-graph. Âm giữa co thành /ə/."),
    word("photographer", "/fəˈtɒɡ.rə.fə/", "nhiếp ảnh gia", "My uncle is a wedding photographer.", "pho|tog|ra|pher", 1, "Trọng âm chuyển sang âm thứ hai: pho-TOG-ra-pher; âm đầu co thành /fə/, chữ r cuối không đọc."),
    word("photographic", "/ˌfəʊ.təˈɡræf.ɪk/", "thuộc về nhiếp ảnh", "She has a photographic memory.", "pho|to|graph|ic", 2, "Đuôi -ic thường kéo trọng âm về ngay trước nó: pho-to-GRAPH-ic."),
    word("information", "/ˌɪn.fəˈmeɪ.ʃən/", "thông tin", "I need more information, please.", "in|for|ma|tion", 2, "Đuôi -tion: nhấn ngay âm trước, in-for-MA-tion."),
    word("university", "/ˌjuː.nɪˈvɜː.sə.ti/", "trường đại học", "My sister studies at a university in Hue.", "u|ni|ver|si|ty", 2, "Đuôi -ity: nhấn âm ngay trước, u-ni-VER-si-ty."),
  ],
  dialogue: dialogue(
    "Hỏi thông tin ở quầy lễ tân",
    "Chị Hoa sang Edinburgh dự hội thảo. Đến khách sạn, chị hỏi lễ tân về phòng, bữa sáng và đường đến trường đại học.",
    { A: "Chị Hoa (khách)", B: "Lễ tân" },
    B("Good evening. Welcome to the hotel.", "Chào buổi tối. Chào mừng chị đến khách sạn."),
    A("Hello. I have a reservation. My name is Hoa.", "Xin chào. Tôi đã đặt phòng. Tên tôi là Hoa."),
    B("Thank you. Your room is on the seventh floor.", "Cảm ơn chị. Phòng của chị ở tầng bảy."),
    A("Could I have some information about breakfast?", "Cho tôi hỏi thông tin về bữa sáng được không?"),
    B("Of course. Breakfast is from seven to ten in the restaurant.", "Tất nhiên rồi. Bữa sáng phục vụ từ bảy đến mười giờ ở nhà hàng."),
    A("Great. I have a conference at the university tomorrow.", "Tốt quá. Ngày mai tôi có hội thảo ở trường đại học."),
    B("The university is ten minutes by taxi.", "Trường đại học cách đây mười phút đi taxi."),
    A("When do I need to leave? I can't decide.", "Tôi cần đi lúc mấy giờ nhỉ? Tôi chưa quyết được."),
    B("When does the conference begin?", "Hội thảo bắt đầu lúc mấy giờ ạ?"),
    A("At nine. I present my report first.", "Chín giờ. Tôi trình bày báo cáo đầu tiên."),
    B("Then leave at eight thirty. Here is a map of the city.", "Vậy chị đi lúc tám rưỡi nhé. Đây là bản đồ thành phố."),
    A("Perfect. Thank you, you're very helpful.", "Tuyệt quá. Cảm ơn anh, anh giúp tôi nhiều lắm."),
    B("My pleasure. Enjoy your stay!", "Rất hân hạnh. Chúc chị ở đây vui vẻ!"),
  ),
  dialogueQuestions: [
    listenQ("pa-n07-d1", "Phòng của chị Hoa ở tầng mấy?", "Thank you. Your room is on the seventh floor.", ["Tầng bảy", "Tầng mười", "Tầng chín"], 0, "“Your room is on the seventh floor.” Seventh nhấn âm đầu: SE-venth."),
    listenQ("pa-n07-d2", "Bữa sáng được phục vụ khi nào, ở đâu?", "Of course. Breakfast is from seven to ten in the restaurant.", ["Từ sáu đến chín giờ, trong phòng", "Từ bảy đến mười giờ, ở nhà hàng", "Từ bảy đến mười giờ, ở trường đại học"], 1, "“Breakfast is from seven to ten in the restaurant.” Restaurant nhấn âm đầu: RES-tau-rant."),
    mc("pa-n07-d3", "Lễ tân khuyên chị Hoa đi lúc mấy giờ?", ["Chín giờ", "Bảy giờ", "Tám rưỡi"], 2, "“Then leave at eight thirty.” Hội thảo bắt đầu lúc chín giờ, đi taxi mất mười phút."),
  ],
  reading: reading({
    title: "Thông tin cho khách",
    text: `Welcome to the Castle View Hotel!

Here is some information for your stay. Breakfast is in the restaurant on the first floor, from seven to ten. There is a free bus to the university every morning at eight.

Do you need a photograph for a visa or a student card? Our photographer is in the lobby from two to five. The price is five pounds.

Please decide on your dinner before six and tell reception. Tonight there is fish, chicken or a vegetable pie. For dessert, there is banana cake.

Enjoy Edinburgh!`,
    glossary: [["stay", "thời gian lưu trú"], ["visa", "thị thực"], ["lobby", "sảnh"], ["reception", "quầy lễ tân"], ["pie", "bánh nướng có nhân"], ["dessert", "món tráng miệng"]],
    questions: [
      mc("pa-n07-r1", "Tấm thông báo này dành cho ai?", ["Khách đang ở khách sạn", "Sinh viên của trường đại học", "Nhân viên nhà hàng"], 0, "“Welcome to the Castle View Hotel! Here is some information for your stay.”"),
      mc("pa-n07-r2", "Xe buýt miễn phí đến trường đại học chạy lúc mấy giờ?", ["Bảy giờ sáng", "Mười giờ sáng", "Tám giờ sáng"], 2, "“There is a free bus to the university every morning at eight.”"),
      fill("pa-n07-r3", "The photographer is in the lobby from two to ___. (giờ)", ["five", "5"], "“Our photographer is in the lobby from two to five.”"),
      mc("pa-n07-r4", "Khách cần báo món ăn tối cho lễ tân trước mấy giờ?", ["Năm giờ", "Sáu giờ", "Mười giờ"], 1, "“Please decide on your dinner before six and tell reception.”"),
      mc("pa-n07-r5", "Món tráng miệng tối nay là gì?", ["Bánh chuối", "Kem", "Hoa quả"], 0, "“For dessert, there is banana cake.” Banana nhấn âm giữa: ba-NA-na."),
    ],
  }),
  exercises: [
    mc("pa-n07-1", "Từ “hotel” nhấn trọng âm ở đâu?", ["Âm thứ nhất: HO-tel", "Âm thứ hai: ho-TEL", "Nhấn đều cả hai âm", "Không nhấn âm nào"], 1, "Hotel /həʊˈtel/: dấu ˈ đứng trước âm thứ hai."),
    mc("pa-n07-2", "Từ nào có trọng âm khác với ba từ còn lại?", ["happy", "table", "decide", "student"], 2, "Decide là động từ, nhấn âm sau: de-CIDE. Happy, table, student đều nhấn âm đầu."),
    listen("pa-n07-3", "photographer", ["photograph", "photographer", "photographic"], 1, "Các bạn nghe pho-TOG-ra-pher: bốn âm tiết, nhấn âm thứ hai."),
    listen("pa-n07-4", "She presents her report on Monday.", ["Cô ấy tặng quà vào thứ Hai.", "Cô ấy nhận được quà vào thứ Hai.", "Cô ấy trình bày báo cáo vào thứ Hai."], 2, "Present ở đây là động từ, nhấn âm sau pre-SENT, nghĩa là trình bày."),
    fill("pa-n07-5", "Excuse me, I need some ___ about the train times. (thông tin)", ["information"], "Information nhấn âm thứ ba: in-for-MA-tion, vì đuôi -tion kéo trọng âm về ngay trước nó."),
    fill("pa-n07-6", "My sister is a ___. She takes wonderful pictures. (nhiếp ảnh gia)", ["photographer"], "Photographer nhấn pho-TOG-ra-pher, khác với PHO-to-graph."),
    reorder("pa-n07-7", "My mother has a lovely present for you.", "Present ở đây là danh từ nên nhấn âm đầu: PRE-sent."),
    reorder("pa-n07-8", "My brother studies at a big university.", "University nhấn u-ni-VER-si-ty; hai âm cuối đọc nhẹ /sə.ti/."),
    correct("pa-n07-9", "My sister is a photograph.", "My sister is a photographer.", "Photograph /ˈfəʊ.tə.ɡrɑːf/ là bức ảnh; người chụp ảnh là photographer /fəˈtɒɡ.rə.fə/. Thêm đuôi thì trọng âm cũng dịch sang âm thứ hai."),
    correct("pa-n07-10", "I need some informations about the tour.", "I need some information about the tour.", "Information là danh từ không đếm được, không thêm -s. Nhấn in-for-MA-tion."),
  ],
  speaking: [
    say("I'd like some information about the hotel.", "Tôi muốn biết thông tin về khách sạn."),
    say("My sister is a photographer.", "Chị tôi là nhiếp ảnh gia."),
    say("She presents her report every Monday.", "Thứ Hai nào cô ấy cũng trình bày báo cáo."),
  ],
  freeSpeaking: free(
    "Can you tell me about your job or your school?",
    "Nói 3–4 câu giới thiệu công việc hoặc trường học của bạn, dùng các từ nhiều âm tiết như hotel, university, information, photographer. Nhấn đúng âm tiết có dấu ˈ.",
    "I am a student at a big university in Da Nang. I study information technology. My university is near a hotel and a beautiful beach. I want to be a teacher one day.",
  ),
  task: task({
    prompt: "Viết 5 câu giới thiệu bản thân (tên, công việc, nơi học hoặc làm việc, dự định), dùng ít nhất năm từ có từ hai âm tiết trở lên. Viết hoa âm tiết được nhấn của các từ đó (ví dụ ho-TEL), rồi đọc to và vỗ tay ở âm nhấn.",
    hints: [
      "Tra dấu ˈ trong từ điển cho mọi từ nhiều âm tiết trước khi viết hoa âm nhấn.",
      "Thử dùng từ có đuôi -tion, -ic, -ity như information, photographic, university.",
      "Có thể bắt đầu bằng: My name is… and I am a…",
    ],
    model: "My name is Minh and I am a photographer. I live in Hanoi and work for a travel company near a big hotel. I take pictures for our travel guides, and I often give tourists information about the city. My sister studies at a university in Hue. One day I want to open my own studio.",
    checklist: [
      "Có ít nhất năm từ nhiều âm tiết và đã đánh dấu đúng âm nhấn",
      "Photographer đọc pho-TOG-ra-pher, khác PHO-to-graph",
      "Từ có đuôi -tion, -ity nhấn ngay âm trước: in-for-MA-tion, u-ni-VER-si-ty",
      "Âm tiết không nhấn đọc nhẹ thành /ə/, không đọc rõ đều mọi tiếng",
      "Danh từ hai âm tiết như TRA-vel nhấn âm đầu; hotel là ngoại lệ, luôn đọc ho-TEL",
    ],
    minWords: 25,
  }),
});
