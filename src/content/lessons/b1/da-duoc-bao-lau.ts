import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "da-duoc-bao-lau",
  title: "Đã… được bao lâu rồi",
  minutes: 30,
  lecture: {
    title: "Hiện tại hoàn thành với for và since",
    blocks: [
      p("Bạn ngồi cà phê với một vị khách nước ngoài, và câu hỏi đầu tiên gần như chắc chắn là: **How long have you lived here?** hoặc **How long have you worked there?** Đây là những câu hỏi làm quen quen thuộc nhất, nên trả lời trôi chảy là bạn đã ghi điểm ngay từ phút đầu."),
      p("Người Việt nói “Tôi sống ở Hà Nội được năm năm rồi” và rất dễ dịch thành “I live in Hanoi for five years”. Khi một việc bắt đầu trong quá khứ và **vẫn còn đến bây giờ**, tiếng Anh dùng **hiện tại hoàn thành**: have / has + V3. Ở A2, bạn đã dùng thì này với ever, never, just, already, yet để nói về trải nghiệm và việc vừa xong; hôm nay ta dùng nó cho việc **kéo dài đến bây giờ**."),
      table(
        ["Dạng", "I / you / we / they", "he / she / it"],
        ["Khẳng định", "I've worked here for two years.", "She's worked here for two years."],
        ["Phủ định", "I haven't seen him since June.", "He hasn't called since June."],
        ["Nghi vấn", "How long have you lived here?", "How long has she lived here?"],
      ),
      table(
        ["Từ", "Đi với", "Ví dụ"],
        ["for", "một khoảng thời gian", "for three years, for a long time, for ages"],
        ["since", "một mốc thời gian", "since 2020, since Monday, since I was a child"],
      ),
      ex("I've lived in Da Nang for five years.", "Tôi sống ở Đà Nẵng được năm năm rồi.", "Đến giờ vẫn đang sống ở đó."),
      ex("How long have you worked here?", "Bạn làm việc ở đây được bao lâu rồi?"),
      ex("She has known him since university.", "Cô ấy quen anh ấy từ hồi đại học.", "University ở đây là mốc bắt đầu (từ hồi học đại học), nên dùng since. Know không dùng ở dạng tiếp diễn, nên không nói has been knowing."),
      p("So với **quá khứ đơn**: khi có một thời điểm đã kết thúc như yesterday, last week, in 2019 hay three days ago, ta dùng quá khứ đơn. Hiện tại hoàn thành không đi với những từ này."),
      ex("I lived in Hue for two years.", "Tôi từng sống ở Huế hai năm.", "Quá khứ đơn: bây giờ tôi không còn sống ở Huế nữa."),
      tip("**Ago** thường đi với quá khứ đơn và không dùng với hiện tại hoàn thành. I moved here three years ago và I've lived here for three years có cùng ý, nhưng khác thì. Mẹo phát âm: đừng nuốt âm **'ve** và **'s**. Nếu bỏ mất, I've lived nghe thành I lived, và người nghe hiểu là bạn không còn sống ở đó nữa."),
      mistake("I am working here since 2021.", "I have worked here since 2021.", "Tiếng Việt chỉ cần thêm “từ năm 2021 đến giờ”, động từ không đổi hình thức, nên người học giữ nguyên thì hiện tại. Tiếng Anh thì khác: việc bắt đầu từ một mốc trong quá khứ và kéo dài đến bây giờ phải dùng hiện tại hoàn thành."),
      mistake("I have seen that film last week.", "I saw that film last week.", "Người Việt thấy chữ “đã” là nghĩ ngay đến have + V3. Nhưng có mốc thời gian đã kết thúc (last week) thì phải dùng quá khứ đơn."),
      mistake("I have lived here since five years.", "I have lived here for five years.", "Tiếng Việt nói “từ năm năm nay”, chữ “từ” khiến người học chọn since. Five years là một khoảng thời gian, nên dùng for."),
      teacher("Tôi hay bảo các bạn: trước khi chọn for hay since, hãy tự hỏi **“Cái này có ghi được lên lịch không?”** Nếu khoanh được trên tờ lịch như thứ Hai, năm 2020, hôm sinh nhật, thì dùng since. Nếu phải đếm như ba ngày, năm năm, rất lâu, thì dùng for. Và mỗi lần gặp người mới, các bạn hãy tập hỏi một câu How long have you…? Hỏi được thì mới nghe được câu trả lời."),
      summary(
        "Việc bắt đầu trong quá khứ và **vẫn còn đến bây giờ**: have / has + V3, không dùng hiện tại đơn hay hiện tại tiếp diễn.",
        "**for** + khoảng thời gian (for five years); **since** + mốc thời gian (since 2020, since Monday, since I was a child).",
        "Hỏi thời gian kéo dài: **How long have you + V3?**",
        "Có mốc thời gian đã kết thúc (yesterday, last week, in 2019, ago) thì dùng **quá khứ đơn**.",
        "Mẹo chọn nhanh: khoanh được trên lịch thì dùng since, phải đếm thì dùng for.",
      ),
    ],
  },
  words: [
    word("decade", "/ˈdek.eɪd/", "thập kỷ, mười năm", "I've worked in this industry for more than a decade.", "dec|ade", 0, "Trọng âm ở âm đầu: DEC-ade. Âm cuối /eɪd/, nhớ giữ /d/, đừng bỏ."),
    word("recently", "/ˈriː.sənt.li/", "gần đây", "I've recently started a new job.", "re|cent|ly", 0),
    word("settle", "/ˈset.əl/", "định cư, ổn định cuộc sống", "My parents settled in Can Tho in 2010, and they've lived there since then.", "set|tle", 0, "Chữ tt đọc là một âm /t/; âm cuối /əl/ rất nhẹ, không đọc thành “sét-tồ”."),
    word("colleague", "/ˈkɒl.iːɡ/", "đồng nghiệp", "I've known my colleague Mai since we started university.", "col|league", 0, "Trọng âm ở âm đầu, không đọc thành “cô-líg”."),
    word("neighbourhood", "/ˈneɪ.bə.hʊd/", "khu phố, khu dân cư", "How long have you lived in this neighbourhood?", "neigh|bour|hood", 0),
    word("improve", "/ɪmˈpruːv/", "cải thiện, tiến bộ", "My English has improved a lot this year.", "im|prove", 1),
    word("lately", "/ˈleɪt.li/", "dạo này, gần đây", "Have you seen Nam lately?", "late|ly", 0, "Lately không có nghĩa là “muộn”. Muộn là late."),
  ],
  exercises: [
    mc("b1-2-1", "I have lived here ___ 2018.", ["for", "since", "ago"], 1, "2018 là một mốc thời gian nên dùng since."),
    mc("b1-2-2", "We ___ each other for ten years, and we're still close friends.", ["know", "knew", "have known", "are knowing"], 2, "Quen nhau từ quá khứ đến giờ vẫn quen: hiện tại hoàn thành have known."),
    fill("b1-2-3", "She has worked at this company ___ six months.", ["for"], "Six months là một khoảng thời gian nên dùng for."),
    fill("b1-2-4", "I ___ to Japan in 2019. (go)", ["went"], "In 2019 là mốc thời gian đã kết thúc, nên dùng quá khứ đơn."),
    reorder("b1-2-5", "How long have you lived in this city?", "How long + have + you + V3: hỏi việc kéo dài bao lâu đến giờ."),
    reorder("b1-2-6", "I haven't seen him for ages.", "Phủ định của hiện tại hoàn thành: haven't + V3. For ages nghĩa là “lâu lắm rồi”, đứng cuối câu."),
    listen("b1-2-7", "I've been a nurse for twelve years.", ["Tôi từng làm y tá mười hai năm trước.", "Tôi muốn làm y tá trong mười hai năm tới.", "Tôi làm y tá được mười hai năm rồi."], 2, "I've been + for: đến bây giờ vẫn đang làm y tá."),
    listen("b1-2-8", "She hasn't called me since Monday.", ["Cô ấy đã gọi cho tôi hôm thứ Hai.", "Từ thứ Hai đến giờ cô ấy chưa gọi cho tôi.", "Cô ấy sẽ gọi cho tôi vào thứ Hai."], 1),
    correct("b1-2-9", "My parents have been married since thirty years.", "My parents have been married for thirty years.", "Thirty years là một khoảng thời gian phải đếm, nên dùng for. Since chỉ đi với một mốc như since 1996."),
    correct("b1-2-10", "I work in this bank since 2020.", ["I have worked in this bank since 2020.", "I have been working in this bank since 2020."], "Việc bắt đầu từ năm 2020 và vẫn còn đến bây giờ phải dùng hiện tại hoàn thành: I have worked (hoặc I have been working). Hiện tại đơn không đi với since."),
    fill("b1-2-11", "I ___ my best friend since we were six. (know)", ["have known"], "Quen từ năm sáu tuổi và đến giờ vẫn quen: have known. Know là động từ chỉ trạng thái nên không dùng have been knowing."),
    correct("b1-2-12", "I have moved to Ho Chi Minh City three years ago.", "I moved to Ho Chi Minh City three years ago.", "Ago đánh dấu một thời điểm đã kết thúc, nên dùng quá khứ đơn: moved. Nếu muốn dùng hiện tại hoàn thành thì nói I have lived in Ho Chi Minh City for three years."),
    reorder("b1-2-13", "How long has your brother been a doctor?", "How long + has + chủ ngữ + been + danh từ: hỏi một người làm nghề đó được bao lâu rồi."),
    fill("b1-2-14", "My parents ___ in this house since 1998, and they never want to move. (live)", ["have lived", "have been living"], "Sống từ năm 1998 đến giờ vẫn sống: have lived (hoặc have been living, vì live dùng được cả hai dạng)."),
  ],
  freeSpeaking: free(
    "How long have you lived in your town, and what has changed there?",
    "Nói bạn sống ở nơi hiện tại được bao lâu rồi, chuyển đến từ khi nào, và nơi đó đã thay đổi thế nào. Dùng for, since và have + V3.",
    "I've lived in Bien Hoa for twelve years. I moved here in 2014 because my father got a new job. Since then, the town has changed a lot. Two big shopping centres have opened, and the roads have become much busier. I've known my best friend here since my first week at school, and we still meet every weekend.",
  ),
  dialogueQuestions: [
    listenQ("b1-2-d1", "How long has Hoa worked at her present company?", "I've worked here for four years. Before that, I worked in a bank for two years.", ["For two years", "For four years", "For six years"], 1, "I've worked here for four years: bốn năm ở công ty hiện tại; hai năm là thời gian ở ngân hàng trước đó."),
    mc("b1-2-d2", "When did Hoa start living in Hanoi?", ["When she was eighteen", "When she finished university", "Four years ago", "Six months ago"], 0, "Hoa nói: I've lived in Hanoi since I was eighteen."),
    mc("b1-2-d3", "How long has Mark lived in his flat in Tay Ho?", ["For six months", "Since March", "For about a month", "For ages"], 2, "Mark ở Việt Nam được sáu tháng, nhưng anh nói I found a flat in Tay Ho last month. Vậy anh mới sống ở căn hộ này khoảng một tháng."),
  ],
  reading: reading({
    title: "Forty years among the books",
    text: `This week, our reporter Linh visited Mr Tran Van Duc, who has run a tiny bookshop on Dinh Le Street in Hanoi since 1985.

Linh: Mr Tran, how long have you worked in this shop?
Mr Tran: For almost forty years. I opened it when I was twenty-five. It's only three metres wide, but it's my whole world.

Linh: Has the street changed much since then?
Mr Tran: Oh, a lot. When I started, there were about twenty bookshops here. Now there are five. Many people buy books online, and young people read on their phones.

Linh: So why have you stayed?
Mr Tran: Because of my customers. Some of them have come here every week for decades. Ms Nguyen, for example, teaches history at the university. She bought her first textbooks here when she was eighteen, and now she sends her own students to me. Last month, a new history book arrived, and I kept one copy for her before it sold out. I didn't even need to ask.

Linh: Do you ever take a holiday?
Mr Tran: Not really. I open at seven every morning and close at nine at night. My last long holiday was for my daughter's wedding in 2010.

Linh: I hear that your grandson has made some changes.
Mr Tran: Yes! Last year he built a website for the shop, and online orders have grown quickly. At first I didn't understand computers at all, but I've learnt to answer emails. I'm slow, but I'm getting better. You're never too old to learn.

Linh: What advice do you have for someone who wants to open a bookshop today?
Mr Tran: Love your customers more than your books. Books are easy to find. A shop where people know your name is not.`,
    glossary: [
      ["textbooks", "sách giáo khoa"],
      ["copy", "bản, cuốn (của một cuốn sách)"],
      ["sold out", "bán hết"],
      ["orders", "đơn đặt hàng"],
      ["grown", "tăng lên"],
    ],
    questions: [
      mc("b1-2-r1", "What is the interview mainly about?", ["A new bookshop that opened last year", "A man who has run the same small bookshop for a long time", "Why people prefer to buy books online", "How to build a website for a shop"], 1, "Cả bài phỏng vấn ông Đức về hiệu sách ông mở từ năm 1985 đến nay."),
      fill("b1-2-r2", "Mr Tran hasn't taken a long holiday since his daughter's ___.", ["wedding"], "Ông nói My last long holiday was for my daughter's wedding in 2010. Từ đám cưới đến giờ ông chưa nghỉ dài ngày lần nào."),
      mc("b1-2-r3", "How many bookshops are there on Dinh Le Street now?", ["About twenty", "Forty", "Three", "Five"], 3, "Ông nói: When I started, there were about twenty bookshops here. Now there are five."),
      mc("b1-2-r4", "Why did Mr Tran keep a copy of the new history book for Ms Nguyen?", ["She had already paid for it online.", "He knows her well and guessed that she would want it.", "It was the last book in the shop.", "Her students asked him to keep it."], 1, "Bà Nguyễn là khách quen từ năm mười tám tuổi và dạy lịch sử; ông nói I didn't even need to ask. Ta suy ra ông hiểu rõ sở thích của bà."),
      mc("b1-2-r5", "What does Mr Tran mean in his last answer?", ["Bookshops should sell fewer books.", "It is difficult to find good books today.", "Good relationships with customers matter more than the books.", "New shop owners should learn their customers' names online."], 2, "Books are easy to find. A shop where people know your name is not: sách thì ở đâu cũng có, cái quý là mối quan hệ với khách."),
    ],
  }),
  speaking: [
    say("I've lived in Hanoi for seven years.", "Tôi sống ở Hà Nội được bảy năm rồi."),
    say("How long have you worked here?", "Bạn làm việc ở đây được bao lâu rồi?"),
    say("I haven't seen my best friend since last summer.", "Từ mùa hè năm ngoái đến giờ tôi chưa gặp bạn thân."),
  ],
  dialogue: dialogue(
    "Làm quen trong giờ nghỉ cà phê",
    "Trong buổi gặp mặt đối tác, Hoa trò chuyện với Mark, một vị khách người Anh mới sang Việt Nam làm việc. Hai người hỏi nhau đã sống và làm việc ở đây bao lâu.",
    { A: "Mark, khách người Anh", B: "Hoa" },
    A("So, Hoa, how long have you worked at this company?", "Vậy Hoa làm ở công ty này được bao lâu rồi?"),
    B("I've worked here for four years. Before that, I worked in a bank for two years.", "Tôi làm ở đây được bốn năm rồi. Trước đó, tôi làm ở ngân hàng hai năm."),
    A("And have you always lived in Hanoi?", "Thế bạn sống ở Hà Nội từ trước đến giờ à?"),
    B("No. I grew up in Nam Dinh, but I've lived in Hanoi since I was eighteen.", "Không. Tôi lớn lên ở Nam Định, nhưng tôi sống ở Hà Nội từ năm mười tám tuổi."),
    A("How long have you known Minh? You two seem very close.", "Bạn quen Minh bao lâu rồi? Hai người có vẻ thân nhau lắm."),
    B("We've known each other since university. What about you? How long have you been in Vietnam?", "Chúng tôi quen nhau từ hồi đại học. Còn anh? Anh ở Việt Nam được bao lâu rồi?"),
    A("I've been here for six months. I moved here in March.", "Tôi ở đây được sáu tháng rồi. Tôi chuyển sang đây hồi tháng Ba."),
    B("Has your Vietnamese improved?", "Tiếng Việt của anh có tiến bộ không?"),
    A("A little! I haven't had much time lately, but I can order phở now.", "Một chút! Dạo này tôi không có nhiều thời gian, nhưng giờ tôi gọi được phở rồi."),
    B("That's the most important thing! Do you like your neighbourhood?", "Thế là quan trọng nhất rồi! Anh có thích khu phố mình ở không?"),
    A("Yes. I found a flat in Tay Ho last month, and I love it.", "Có. Tháng trước tôi tìm được một căn hộ ở Tây Hồ, và tôi rất thích."),
    B("I haven't been to Tay Ho for ages. Let's have coffee there sometime.", "Lâu lắm rồi tôi chưa đến Tây Hồ. Hôm nào mình đi cà phê ở đó nhé."),
  ),
  task: task({
    prompt: "Viết một đoạn giới thiệu bản thân (khoảng 90–120 từ) với đồng nghiệp mới: bạn sống ở đâu, làm công việc gì, học tiếng Anh, quen người bạn thân được bao lâu rồi.",
    hints: [
      "Dùng have / has + V3 cho những việc vẫn còn đến bây giờ.",
      "For + khoảng thời gian (for six years), since + mốc thời gian (since 2022, since I was a child).",
      "Thêm ít nhất một câu quá khứ đơn cho việc đã kết thúc, với ago, last year hoặc in + năm.",
    ],
    model: "Hi everyone, my name is Linh. I've lived in Da Nang for six years, and I really love this city. I moved here from Quang Ngai in 2020 because I wanted a better job. I've worked as a sales assistant at a travel company since 2022. Before that, I worked in a hotel for two years. I've studied English since I was a child, but my speaking has improved a lot recently. I've known my best friend, Thu, since secondary school. We met twenty years ago, and we still talk every day. I'm very happy to join this team.",
    checklist: [
      "Có ít nhất 3 câu have / has + V3 cho việc vẫn còn đến bây giờ.",
      "Dùng đúng cả for (với khoảng thời gian) và since (với mốc thời gian), mỗi từ ít nhất một lần.",
      "Có ít nhất 1 câu quá khứ đơn với ago, last hoặc in + năm cho việc đã kết thúc.",
      "Không có câu kiểu I am working here since… hoặc I have seen… last year.",
      "Không viết since + khoảng thời gian (since five years).",
    ],
    minWords: 90,
  }),
});
