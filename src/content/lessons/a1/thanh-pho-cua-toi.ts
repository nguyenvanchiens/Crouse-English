import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "thanh-pho-cua-toi",
  title: "Thành phố của tôi",
  minutes: 28,
  lecture: {
    title: "Nơi chốn trong thành phố, giới từ và chỉ đường đơn giản",
    blocks: [
      p("Một du khách dừng bạn ở bờ hồ Hoàn Kiếm và hỏi: **Excuse me, where is the post office?** Hay bạn phải dặn một người giao hàng nước ngoài nhà mình ở đâu. Chỉ cần vài giới từ và ba bốn câu chỉ đường, bạn đã giúp được người ta và tự đi lại được khi ra nước ngoài."),
      p("Câu hỏi cơ bản là **Where is the…?** (…ở đâu?). Câu trả lời bắt đầu bằng **It's…** rồi đến giới từ. Với tên đường, dùng **on**; với số nhà cụ thể, dùng **at**; với thành phố hay quận, dùng **in**."),
      table(
        ["Giới từ", "Dùng với", "Ví dụ"],
        ["in", "thành phố, khu vực", "The museum is in the Old Quarter."],
        ["on", "tên đường (không có số nhà)", "The bank is on Le Loi Street."],
        ["at", "địa chỉ có số nhà", "My office is at twenty-five Hai Ba Trung Street."],
      ),
      ex("Where is the post office? It's on Dinh Tien Hoang Street.", "Bưu điện ở đâu? Nó ở đường Đinh Tiên Hoàng.", "Người Anh cũng hay nói in … Street; người Mỹ luôn nói on. Bạn dùng on là an toàn nhất."),
      mistake("Where the bank is?", "Where is the bank?", "Tiếng Việt nói “Ngân hàng ở đâu?”, chủ ngữ đứng trước. Câu hỏi tiếng Anh phải đảo is lên trước chủ ngữ: Where is the bank?"),
      p("Để nói một tòa nhà nằm ở đâu so với tòa nhà khác, dùng bốn giới từ quen thuộc nhất trên phố: **near** (gần), **next to** (ngay bên cạnh, sát vách, bạn đã gặp ở bài Nhà và nơi chốn), **opposite** (đối diện, bên kia đường) và **between… and…** (ở giữa hai nơi)."),
      table(
        ["Giới từ", "Nghĩa", "Ví dụ"],
        ["near", "gần (có thể cách vài nhà)", "The school is near the park."],
        ["next to", "ngay bên cạnh", "The café is next to the bank."],
        ["opposite", "đối diện, bên kia đường", "The pharmacy is opposite the hospital."],
        ["between… and…", "ở giữa hai nơi", "The bank is between the supermarket and the museum."],
      ),
      ex("Is there a supermarket near here? Yes, there's one next to the library.", "Gần đây có siêu thị không? Có, có một cái ngay cạnh thư viện.", "One thay cho a supermarket để khỏi lặp lại."),
      mistake("The pharmacy is opposite of the school.", "The pharmacy is opposite the school.", "Tiếng Việt nói “đối diện với”, nên người Việt hay thêm of hoặc to. Opposite đứng thẳng trước danh từ, không cần từ nào chen vào."),
      mistake("The bank is between the school with the park.", "The bank is between the school and the park.", "Tiếng Việt nói “giữa trường với công viên”. Tiếng Anh luôn là between… and…, không dùng with."),
      p("Muốn hỏi đường một cách lịch sự, nói **Excuse me, how do I get to the museum?** (Xin lỗi, đi đến bảo tàng thế nào ạ?). Chỉ đường đơn giản chỉ cần vài câu mệnh lệnh, tức là bắt đầu thẳng bằng động từ, không có chủ ngữ: **Go along this street** (đi dọc con đường này), **Turn left** (rẽ trái), **Turn right** (rẽ phải), **Take the first street on the left** (rẽ vào đường đầu tiên bên trái), dùng số thứ tự first, second, third như đã học ở bài Thời gian và lịch hẹn. Kết thúc bằng **It's on your left** hoặc **It's on your right**."),
      ex("Go along this street and turn right. The museum is on your left.", "Đi dọc đường này rồi rẽ phải. Bảo tàng ở bên tay trái bạn."),
      p("Để **tả thành phố** của mình, các bạn dùng to be cùng tính từ như ở bài Mô tả một người, và nhớ tính từ đứng **trước** danh từ như ở bài Mua sắm và màu sắc: **Hanoi is a big city. It's busy and noisy.** Thêm there is/there are để nói có gì ở đó: There are a lot of lakes."),
      ex("Hoi An is a small town. It's old and very beautiful.", "Hội An là một thị trấn nhỏ. Nó cổ kính và rất đẹp.", "Small đứng trước town; old và beautiful đứng sau it's."),
      tip("Left và right đều kết thúc bằng âm /t/, nhưng người Việt hay nuốt mất. Đọc **left** /left/ đọc /f/ rồi đóng /t/; đọc **right** /raɪt/ tròn môi ở /r/, đừng đọc thành “rai”. Không rõ âm cuối thì người nghe dễ đi nhầm hướng."),
      teacher("Học viên của tôi thuộc bảng giới từ rất nhanh nhưng đứng trước người nước ngoài thì cứng họng. Cách tôi luyện cho các bạn: mỗi sáng đi làm, tự nói về con đường mình đi qua, kiểu **The pharmacy is next to the bank. The school is opposite the park.** Còn khi chỉ đường mà không chắc, cứ nói chậm, chỉ tay, và kết thúc bằng **It's on your left**. Người hỏi đường cần câu rõ ràng, không cần câu dài."),
      summary(
        "Hỏi nơi chốn: **Where is the…?** (is đứng trước chủ ngữ). Trả lời: It's…",
        "**in** + thành phố, quận; **on** + tên đường; **at** + địa chỉ có số nhà.",
        "near, next to, **opposite** (không có of), **between… and…** (không dùng with).",
        "Chỉ đường bằng câu mệnh lệnh, bắt đầu bằng động từ: Go along…, Turn left, Take the first street on the right. Kết thúc: It's on your left.",
        "Tả thành phố: tính từ trước danh từ (a big city), hoặc to be + tính từ (It's busy).",
      ),
    ],
  },
  words: [
    word("street", "/striːt/", "đường phố", "I live on Tran Phu Street.", "street", 0, "Âm /str/ đọc liền một hơi, đừng chèn âm “xờ” thành “xờ-trít”; nhớ âm /t/ cuối."),
    word("pharmacy", "/ˈfɑː.mə.si/", "hiệu thuốc", "Is there a pharmacy near here?", "phar|ma|cy", 0),
    word("library", "/ˈlaɪ.brər.i/", "thư viện", "The library is next to the school.", "li|brar|y", 0, "Library là thư viện để mượn sách; hiệu sách để mua là bookshop."),
    word("supermarket", "/ˈsuː.pəˌmɑː.kɪt/", "siêu thị", "There's a supermarket on my street.", "su|per|mar|ket", 0, "Nhấn âm đầu: SU-per-mar-ket."),
    word("museum", "/mjuːˈziː.əm/", "bảo tàng", "The museum is opposite the park.", "mu|se|um", 1, "Nhấn âm thứ hai: mju-ZI-ơm, không nhấn âm đầu."),
    word("park", "/pɑːk/", "công viên", "We often walk in the park.", "park", 0, "Kết thúc bằng âm /k/ ngắn và gọn, đừng đọc thành “pa”."),
    word("near", "/nɪə/", "gần", "My house is near the market.", "near", 0),
    word("left", "/left/", "bên trái", "Turn left at the bank.", "left", 0),
  ],
  exercises: [
    mc("a1-n14-1", "The café is ___ the bank and the bookshop.", ["in front", "between", "next"], 1, "Có hai nơi được nối bằng and nên dùng cấu trúc between… and."),
    mc("a1-n14-2", "Chọn câu hỏi đúng:", ["Where is the museum?", "Where the museum is?", "The museum is where?"], 0, "Câu hỏi với where phải đảo is lên trước chủ ngữ."),
    fill("a1-n14-3", "The pharmacy is ___ the hospital. (đối diện)", ["opposite"], "Đối diện là opposite, không thêm of hay to."),
    fill("a1-n14-4", "My office is ___ Nguyen Trai Street. (nằm trên)", ["on", "in"], "Tên đường không có số nhà thường đi với on; người Anh cũng hay dùng in."),
    reorder("a1-n14-5", "How do I get to the museum?", "Câu hỏi đường lịch sự: How do I get to + nơi chốn?"),
    reorder("a1-n14-6", "Take the second street on the left.", "Câu mệnh lệnh chỉ đường: Take + the second street + on the left."),
    listen("a1-n14-7", "My city is big and very busy.", ["Thành phố của tôi nhỏ và yên tĩnh.", "Thành phố của tôi lớn và rất nhộn nhịp.", "Thị trấn của tôi lớn và rất đẹp."], 1, "Big là lớn; busy khi tả nơi chốn là đông đúc, nhộn nhịp; city là thành phố, town là thị trấn."),
    listen("a1-n14-8", "Turn right. It's on your left.", ["Rẽ trái. Nó ở bên tay phải bạn.", "Rẽ phải. Nó ở bên tay trái bạn.", "Rẽ phải. Nó ở bên tay phải bạn."], 1, "Turn right là rẽ phải; on your left là ở bên tay trái bạn."),
    correct("a1-n14-9", "The bank is opposite to the market.", ["The bank is opposite the market.", "The bank's opposite the market."], "Opposite đứng thẳng trước danh từ, không thêm to hay of như chữ “đối diện với” của tiếng Việt."),
    correct("a1-n14-10", "Go along this street and turn to left.", ["Go along this street and turn left.", "Go along this street and turn to the left."], "Rẽ trái là turn left, không cần to. Tiếng Việt nói “rẽ sang trái” nên người Việt hay thêm to."),
  ],
  freeSpeaking: free(
    "Where do you live, and what is near your house?",
    "Tả khu phố của bạn: bạn sống ở thành phố nào, đường nào, khu phố thế nào, và gần nhà có những nơi nào, nằm ở đâu.",
    "I live in Ho Chi Minh City, on Vo Van Ngan Street. My street is busy and noisy. There's a big supermarket near my house, and there's a pharmacy next to it. My son's school is opposite the park.",
  ),
  speaking: [
    say("Excuse me, where is the pharmacy?", "Xin lỗi, hiệu thuốc ở đâu ạ?"),
    say("It's on Le Loi Street, next to the bank.", "Nó ở đường Lê Lợi, ngay cạnh ngân hàng."),
    say("Go along this street and turn left.", "Đi dọc đường này rồi rẽ trái."),
  ],
  dialogue: dialogue(
    "Chỉ đường cho du khách ở bờ hồ Hoàn Kiếm",
    "Một du khách nước ngoài dừng bạn ở bờ hồ Hoàn Kiếm để hỏi đường đến hiệu thuốc. Bạn chỉ đường, nói lại khi họ chưa nghe kịp, và giới thiệu thêm một nơi gần đó.",
    { A: "Du khách", B: "Bạn" },
    A("Excuse me. Is there a pharmacy near here?", "Xin lỗi, gần đây có hiệu thuốc nào không?"),
    B("Yes, there is. It's on Trang Tien Street.", "Có ạ. Nó ở đường Tràng Tiền."),
    A("How do I get to Trang Tien Street?", "Đi đến đường Tràng Tiền thế nào ạ?"),
    B("Go along this street and turn right. Then take the first street on the left.", "Đi dọc đường này rồi rẽ phải. Sau đó rẽ vào đường đầu tiên bên trái."),
    A("Sorry, can you say that again, please?", "Xin lỗi, bạn nói lại được không?"),
    B("Of course. Go along this street, turn right, then take the first street on the left.", "Được chứ. Đi dọc đường này, rẽ phải, rồi rẽ vào đường đầu tiên bên trái."),
    A("Thank you. Where is the pharmacy on that street?", "Cảm ơn bạn. Hiệu thuốc nằm ở chỗ nào trên đường đó?"),
    B("It's opposite a big bookshop. It's on your right.", "Nó đối diện một hiệu sách lớn. Nó ở bên tay phải bạn."),
    A("Great. Is there a museum near here too?", "Tốt quá. Gần đây có bảo tàng nào không?"),
    B("Yes. The museum is between the bookshop and a small park.", "Có. Bảo tàng nằm giữa hiệu sách và một công viên nhỏ."),
    A("Thank you so much. Hanoi is a beautiful city!", "Cảm ơn bạn nhiều. Hà Nội là một thành phố đẹp quá!"),
    B("Yes, it's busy and noisy, but I love it. Have a nice day!", "Vâng, nó đông đúc và ồn ào, nhưng tôi rất yêu nó. Chúc bạn một ngày vui vẻ!"),
  ),
  dialogueQuestions: [
    listenQ("a1-n14-d1", "Hiệu thuốc ở đường nào?", "Yes, there is. It's on Trang Tien Street.", ["Đường Tràng Tiền", "Đường Lê Lợi", "Đường Đinh Tiên Hoàng"], 0, "It's on Trang Tien Street: ở đường Tràng Tiền."),
    listenQ("a1-n14-d2", "Hiệu thuốc nằm ở chỗ nào trên con đường đó?", "It's opposite a big bookshop. It's on your right.", ["Cạnh một hiệu sách, bên tay trái", "Đối diện một hiệu sách lớn, bên tay phải", "Giữa hiệu sách và công viên"], 1, "Opposite a big bookshop là đối diện một hiệu sách lớn; on your right là bên tay phải."),
    mc("a1-n14-d3", "Bảo tàng nằm ở đâu?", ["Đối diện hiệu thuốc", "Ngay cạnh bờ hồ", "Giữa hiệu sách và một công viên nhỏ"], 2, "The museum is between the bookshop and a small park."),
  ],
  reading: reading({
    title: "Email chỉ đường đến nhà",
    text: `Hi Sam,

Welcome to Hue! My flat is on Le Loi Street, near the Perfume River. It's a quiet street.

Here are the directions from the bus station. Go along the main road and turn left at the big hospital. Then take the second street on the right. That's Le Loi Street. My building is at forty-two Le Loi Street, between a pharmacy and a small café. The café is opposite a beautiful park.

Hue is not a big city, but it's very old and beautiful. There are a lot of good restaurants too.

See you soon!
Khoa`,
    glossary: [
      ["flat", "căn hộ"],
      ["Perfume River", "sông Hương"],
      ["quiet", "yên tĩnh"],
      ["directions", "lời chỉ đường"],
      ["building", "tòa nhà"],
      ["restaurant", "nhà hàng"],
    ],
    questions: [
      mc("a1-n14-r1", "Khoa viết email này để làm gì?", ["Để chỉ đường cho Sam đến nhà mình", "Để giới thiệu một nhà hàng mới", "Để mời Sam đi xem phim"], 0, "Here are the directions from the bus station: Khoa chỉ đường từ bến xe đến nhà mình."),
      mc("a1-n14-r2", "Đến bệnh viện lớn thì Sam phải làm gì?", ["Rẽ phải", "Rẽ trái", "Đi thẳng qua bệnh viện"], 1, "Turn left at the big hospital: rẽ trái ở chỗ bệnh viện lớn."),
      fill("a1-n14-r3", "Nhà Khoa ở số bốn mươi hai đường Lê Lợi: My building is ___ forty-two Le Loi Street.", ["at"], "Địa chỉ có số nhà dùng at."),
      mc("a1-n14-r4", "Tòa nhà của Khoa nằm ở đâu?", ["Ngay cạnh bệnh viện lớn", "Đối diện một công viên đẹp", "Giữa một hiệu thuốc và một quán cà phê nhỏ"], 2, "Between a pharmacy and a small café. Đối diện công viên là quán cà phê, không phải tòa nhà."),
      mc("a1-n14-r5", "Khoa tả Huế thế nào?", ["Không lớn, nhưng rất cổ kính và đẹp", "Lớn, đông đúc và ồn ào", "Nhỏ và không có nhiều nhà hàng"], 0, "Hue is not a big city, but it's very old and beautiful."),
    ],
  }),
  task: task({
    prompt: "Một người bạn nước ngoài sắp đến nhà bạn chơi. Viết 6–8 câu tả khu phố của bạn: nhà bạn ở đâu, gần đó có những nơi nào và chúng nằm ở đâu, kèm một câu chỉ đường từ bến xe buýt.",
    hints: [
      "in + thành phố hoặc khu vực, on + tên đường: I live in Hanoi. My house is on Tran Thai Tong Street.",
      "Dùng near, next to, opposite, between… and… để nói vị trí các nơi.",
      "Chỉ đường bằng câu bắt đầu bằng động từ: Go along…, Turn left… It's on your right.",
    ],
    model: "I live in Hanoi. It's a big, busy city. My house is on Tran Thai Tong Street. There is a supermarket near my house. The pharmacy is opposite the park, and the library is between the bank and the school. From the bus stop, turn left and go along Tran Thai Tong Street. My house is on your right.",
    checklist: [
      "Dùng in với thành phố hoặc khu vực, on với tên đường",
      "Dùng ít nhất 3 giới từ vị trí khác nhau (near, next to, opposite, between)",
      "Opposite đứng thẳng trước danh từ, không có of",
      "Between đi với and, không dùng with",
      "Có ít nhất một câu chỉ đường bắt đầu bằng động từ (Go, Turn, Take)",
      "Tính từ đứng trước danh từ (a big city, a small park)",
    ],
    minWords: 30,
  }),
});
