import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "rut-gon-menh-de",
  title: "Rút gọn mệnh đề",
  minutes: 35,
  lecture: {
    title: "Mệnh đề phân từ và mệnh đề quan hệ rút gọn",
    blocks: [
      p("Mở một tờ giới thiệu công ty bằng tiếng Anh, bạn sẽ gặp ngay những câu như **Founded in 1995, our company…** hay **Having worked in Japan for ten years, Mr Tran…**. Đó là **mệnh đề phân từ**: người ta bỏ chủ ngữ và liên từ, chỉ giữ lại động từ ở dạng **V-ing**, **V3** hoặc **having + V3**. Câu gọn hơn, trang trọng hơn, rất hợp với báo cáo, email và bài thuyết trình. Bài này dựa trên hai thứ các bạn đã có: **mệnh đề quan hệ** (bài Thuyết trình) và **câu bị động** (B1)."),
      table(
        ["Câu đầy đủ", "Câu rút gọn", "Dạng dùng khi nào"],
        ["Because I felt tired, I went to bed early.", "Feeling tired, I went to bed early.", "V-ing: chủ động, cùng lúc hoặc nêu lý do"],
        ["After she had finished the report, she went home.", "Having finished the report, she went home.", "Having + V3: việc xong trước rồi mới đến việc sau"],
        ["The hotel, which was built in 1990, is very popular.", "Built in 1990, the hotel is very popular.", "V3: nghĩa bị động"],
        ["The man who is sitting next to me is a doctor.", "The man sitting next to me is a doctor.", "Mệnh đề quan hệ chủ động → V-ing"],
        ["Products which are made in Vietnam are cheap here.", "Products made in Vietnam are cheap here.", "Mệnh đề quan hệ bị động → V3"],
      ),
      p("Quy tắc sống còn: mệnh đề phân từ **mượn chủ ngữ của mệnh đề chính**. Vì vậy, người làm hành động trong phần rút gọn **phải chính là chủ ngữ** đứng ngay sau dấu phẩy. Nếu hai chủ ngữ khác nhau, đừng rút gọn. Ngoại lệ: vài cụm cố định như **Generally speaking**, **Judging by…**, **Considering…** không cần khớp chủ ngữ, và **mệnh đề độc lập** có chủ ngữ riêng (**Weather permitting**, we'll eat outside) cũng đứng được."),
      ex("Feeling nervous, she read her notes one more time.", "Vì thấy hồi hộp, cô ấy đọc lại ghi chú thêm một lần nữa.", "Người thấy hồi hộp là “she”, cũng là chủ ngữ của mệnh đề chính."),
      ex("Having checked all the figures, the accountant signed the report.", "Sau khi kiểm tra hết các số liệu, kế toán ký vào báo cáo.", "Having + V3 cho thấy việc kiểm tra xong hẳn rồi mới ký."),
      ex("Built in the nineteenth century, the church attracts many visitors.", "Được xây dựng từ thế kỷ mười chín, nhà thờ thu hút rất nhiều du khách.", "Nhà thờ không tự xây, nên dùng V3 mang nghĩa bị động."),
      ex("Anyone wanting to join the trip should sign up by Friday.", "Ai muốn tham gia chuyến đi thì đăng ký trước thứ Sáu.", "Anyone wanting = anyone who wants."),
      ex("Most of the vegetables sold at this market are grown locally.", "Phần lớn rau bán ở chợ này được trồng tại địa phương.", "Sold = which are sold: rút gọn mệnh đề quan hệ bị động."),
      mistake("Walking into the office, the phone started ringing.", "Walking into the office, I heard the phone ringing.", "Đây là lỗi “phân từ treo”: câu sai nghĩa là cái điện thoại tự đi vào văn phòng. Tiếng Việt cho phép bỏ chủ ngữ tùy ý (“Vừa bước vào phòng, điện thoại reo”), còn tiếng Anh thì phần rút gọn thông thường phải dính vào chủ ngữ ngay sau nó (trừ vài cụm cố định như Generally speaking)."),
      mistake("The car repairing yesterday is ready now.", "The car repaired yesterday is ready now.", "Tiếng Việt không đánh dấu bị động rõ ràng (“xe sửa hôm qua”), nên học trò hay dùng V-ing. Xe là thứ được sửa, vậy phải dùng V3: repaired."),
      mistake("Having finish the meeting, we went for lunch.", "Having finished the meeting, we went for lunch.", "Sau having luôn là V3. Người Việt hay nuốt âm cuối nên viết cũng quên luôn đuôi -ed."),
      tip("Tự hỏi một câu: **“Chủ ngữ tự làm hay bị làm?”** Tự làm thì **V-ing**, bị làm thì **V3**, làm xong trước rồi mới đến việc sau thì **Having + V3**. Rồi kiểm tra thêm: đọc cụm rút gọn ghép với chủ ngữ sau dấu phẩy, nếu nghe buồn cười thì câu đó đang bị “treo”."),
      teacher("Tôi có một bài tập nhỏ hay giao cho học trò: mỗi tối lấy **ba câu có because, after, which** trong email của chính mình rồi thử rút gọn. Có câu rút gọn được, có câu không, và **chính lúc thấy câu nào không rút gọn được bạn mới thật sự hiểu quy tắc**. Nhớ kỹ: rút gọn là để câu gọn và sang, không phải để khoe. Trong lúc nói chuyện, thỉnh thoảng dùng một câu là đủ, còn trong văn viết thì dùng thoải mái hơn."),
      summary(
        "V-ing: chủ ngữ tự làm (chủ động), xảy ra cùng lúc hoặc nêu lý do: Feeling tired, I went to bed early.",
        "V3: chủ ngữ bị làm (bị động): Built in 1990, the hotel is very popular.",
        "Having + V3: việc này xong hẳn rồi mới đến việc sau: Having finished the report, she went home.",
        "Rút gọn mệnh đề quan hệ: who is sitting thành sitting, which are made thành made.",
        "Phần rút gọn thường mượn chủ ngữ của mệnh đề chính; nếu hai chủ ngữ khác nhau thì đừng rút gọn (trừ cụm cố định như Generally speaking, Weather permitting).",
      ),
    ],
  },
  words: [
    word("clause", "/klɔːz/", "mệnh đề", "This sentence has two clauses.", "clause", 0, "Kết thúc bằng âm /z/, đọc gần “clo-z”, đừng nuốt mất âm cuối."),
    word("participle", "/pɑːˈtɪs.ɪ.pəl/", "phân từ", "“Broken” is the past participle of “break”.", "par|tic|i|ple", 1, "Trọng âm ở âm tiết thứ hai: par-TIC-i-ple."),
    word("found", "/faʊnd/", "thành lập", "The school was founded in 1998.", "found", 0, "Found (thành lập) là động từ có quy tắc: found, founded, founded. Đừng nhầm với found là quá khứ của find."),
    word("establish", "/ɪˈstæb.lɪʃ/", "thành lập, thiết lập", "Established in 2005, the firm now has three offices.", "es|tab|lish", 1),
    word("manufacture", "/ˌmæn.jəˈfæk.tʃə/", "sản xuất (quy mô lớn)", "Most of the parts are manufactured in Thailand.", "man|u|fac|ture", 2, "Trọng âm chính ở âm tiết thứ ba: man-u-FAC-ture."),
    word("refurbish", "/ˌriːˈfɜː.bɪʃ/", "tân trang, sửa sang lại", "Refurbished last year, the hotel looks brand new.", "re|fur|bish", 1, "Trọng âm ở âm tiết thứ hai: re-FUR-bish. Âm /ɜː/ kéo dài, không đọc chữ r."),
    word("locate", "/ləʊˈkeɪt/", "đặt ở (một vị trí); tìm ra vị trí", "Located near the airport, the factory is easy to reach.", "lo|cate", 1, "Hay dùng ở dạng bị động: be located in / near (nằm ở). Người Anh nhấn âm sau: lo-CATE."),
    word("brochure", "/ˈbrəʊ.ʃə/", "tờ giới thiệu, sách mỏng quảng cáo", "Could you send me a copy of the brochure?", "bro|chure", 0, "Chữ ch đọc là /ʃ/: BRÔU-shơ."),
  ],
  exercises: [
    mc("b2-n12-1", "Which sentence is correct?", ["Walking into the office, the phone started ringing.", "Walking into the office, I heard the phone ringing.", "Walked into the office, I heard the phone ringing."], 1, "Người bước vào văn phòng phải là chủ ngữ ngay sau dấu phẩy, và hành động chủ động nên dùng V-ing."),
    mc("b2-n12-2", "The bridge ___ in 1990 needs urgent repairs.", ["building", "was built", "built"], 2, "Cây cầu được xây, nghĩa bị động, nên rút gọn thành V3: built. “Was built” không đứng được ở đây vì câu đã có động từ chính needs."),
    fill("b2-n12-3", "___ tired, I went to bed early. (feel)", ["Feeling"], "Chủ ngữ “I” tự cảm thấy mệt, nghĩa chủ động, nên dùng V-ing."),
    fill("b2-n12-4", "Having ___ the contract, the client paid the deposit. (sign)", ["signed"], "Having + V3: ký hợp đồng xong rồi mới trả tiền đặt cọc."),
    reorder("b2-n12-5", "The man sitting next to me was a doctor.", "Sitting next to me = who was sitting next to me: mệnh đề quan hệ chủ động rút gọn thành V-ing."),
    reorder("b2-n12-6", "Most of the goods made here are exported.", "Made here = which are made here: mệnh đề quan hệ bị động rút gọn thành V3."),
    listen("b2-n12-7", "Built in 1990, the hotel was refurbished last year.", ["Khách sạn được xây năm 1990 và đã được tân trang vào năm ngoái.", "Khách sạn được xây dựng vào năm ngoái.", "Khách sạn sẽ được tân trang sau năm 1990."], 0, "Built in 1990 là phần rút gọn bị động, bổ sung thông tin cho “the hotel”."),
    listen("b2-n12-8", "Having lost his keys, he couldn't get into the flat.", ["Anh ấy tìm thấy chìa khóa và vào được căn hộ.", "Anh ấy để quên chìa khóa trong căn hộ của bạn.", "Vì đã làm mất chìa khóa nên anh ấy không vào được căn hộ."], 2, "Having lost: việc mất chìa khóa xảy ra trước và là lý do của việc không vào được nhà."),
    correct("b2-n12-9", "The report writing by our team was sent to the client yesterday.", ["The report written by our team was sent to the client yesterday.", "The report which was written by our team was sent to the client yesterday.", "The report that was written by our team was sent to the client yesterday."], "Bản báo cáo được viết (bị động), nên rút gọn bằng V3: written = which was written."),
    correct("b2-n12-10", "Anyone want to join the tour should sign up by Friday.", ["Anyone wanting to join the tour should sign up by Friday.", "Anyone who wants to join the tour should sign up by Friday."], "Rút gọn mệnh đề quan hệ chủ động thì dùng V-ing: anyone wanting = anyone who wants. Không để động từ nguyên mẫu đứng ngay sau danh từ."),
  ],
  speaking: [
    say("Having finished my work, I went home early.", "Làm xong việc, tôi về nhà sớm."),
    say("Founded in nineteen ninety-five, our company now has five hundred staff.", "Được thành lập năm một nghìn chín trăm chín mươi lăm, công ty chúng tôi hiện có năm trăm nhân viên."),
    say("The woman standing by the door is our new director.", "Người phụ nữ đứng cạnh cửa là giám đốc mới của chúng ta."),
  ],
  freeSpeaking: free(
    "Describe a place you know well, such as a hotel, a shop or a school, as if you were introducing it in a brochure.",
    "Giới thiệu một nơi bạn biết rõ như trong tờ giới thiệu: nằm ở đâu, thành lập khi nào, có gì đặc biệt. Dùng các cụm rút gọn như Located in…, Opened in…, Having + V3 và danh từ + V-ing / V3.",
    "Located in the old quarter of Hoi An, my aunt's guesthouse is a small yellow building with twelve rooms. Opened in two thousand and ten, it has become popular with backpackers from all over the world. Guests staying there can join a free cooking class every evening. Most of the vegetables used in the kitchen come from my aunt's own garden. Having stayed there many times myself, I can honestly say that it feels like home.",
  ),
  dialogue: dialogue(
    "Dẫn khách tham quan công ty",
    "Ông Lee, khách hàng từ Hàn Quốc, đến thăm trụ sở công ty. Vy, nhân viên phòng kinh doanh, dẫn ông đi tham quan và giới thiệu công ty.",
    { A: "Vy, nhân viên kinh doanh", B: "Ông Lee, khách hàng" },
    A("Welcome to our head office, Mr Lee. Founded in two thousand and five, our company now has three factories.", "Chào mừng ông Lee đến trụ sở chính. Được thành lập năm hai nghìn không trăm linh năm, công ty chúng tôi hiện có ba nhà máy."),
    B("Impressive. Who is the man standing by the window?", "Ấn tượng thật. Người đàn ông đang đứng cạnh cửa sổ là ai vậy?"),
    A("That's Mr Pham, our director. Having worked in Korea for ten years, he knows your market very well.", "Đó là ông Phạm, giám đốc của chúng tôi. Đã làm việc ở Hàn Quốc mười năm, ông ấy rất hiểu thị trường của ông."),
    B("That's useful. Are the products shown in this room made here?", "Hay quá. Các sản phẩm trưng bày trong phòng này có được sản xuất ở đây không?"),
    A("Yes. Most of the items displayed here are produced in our Binh Duong factory.", "Có ạ. Phần lớn sản phẩm trưng bày ở đây được sản xuất tại nhà máy Bình Dương."),
    B("And what about the packaging? It looks very good.", "Còn bao bì thì sao? Trông rất đẹp."),
    A("Designed by a local team, it is made from recycled paper.", "Do một nhóm trong nước thiết kế, bao bì này được làm từ giấy tái chế."),
    B("I like that. Customers buying our products in Korea care a lot about the environment.", "Tôi thích điều đó. Khách mua sản phẩm của chúng tôi ở Hàn Quốc rất quan tâm đến môi trường."),
    A("Then you'll enjoy the next part. Having seen the showroom, we'll now visit the design studio.", "Vậy chắc ông sẽ thích phần tiếp theo. Xem xong phòng trưng bày, giờ chúng ta sẽ đi thăm phòng thiết kế."),
    B("Great. Feeling a bit tired after my flight, I'd love a coffee first, if possible.", "Tuyệt. Vì hơi mệt sau chuyến bay, tôi muốn uống một tách cà phê trước, nếu được."),
    A("Of course. The café located on the ground floor makes excellent Vietnamese coffee.", "Tất nhiên rồi. Quán cà phê nằm ở tầng trệt pha cà phê Việt Nam rất ngon."),
  ),
  dialogueQuestions: [
    mc("b2-n12-d1", "Why does the director know the Korean market well?", ["He is Korean.", "He worked in Korea for ten years.", "He studied Korean at university.", "He visits Korea every month."], 1, "Having worked in Korea for ten years, he knows your market very well."),
    listenQ("b2-n12-d2", "What is the packaging made from?", "And what about the packaging? It looks very good. Designed by a local team, it is made from recycled paper.", ["Recycled paper", "Plastic from Korea", "Wood from Binh Duong", "Glass"], 0, "It is made from recycled paper. Designed by a local team cho biết ai thiết kế, không phải chất liệu."),
    mc("b2-n12-d3", "What does Mr Lee want to do before visiting the design studio?", ["Meet the director", "See the factory in Binh Duong", "Have a coffee", "Buy some products"], 2, "Feeling a bit tired after my flight, I'd love a coffee first."),
  ],
  reading: reading({
    title: "From a garage to three factories: the story of Mai Lan Woodcraft",
    text: `Founded in 1998 by two brothers in a small garage in Binh Duong, Mai Lan Woodcraft is now one of the best-known furniture exporters in southern Vietnam. Employing more than 1,200 people, the company sells tables, chairs and wardrobes to customers in twenty-five countries.

The early years were difficult. Having borrowed money from relatives to buy their first machines, the brothers worked sixteen hours a day, delivering orders themselves on a motorbike. Their big chance came in 2004, when a Japanese buyer visiting a trade fair in Ho Chi Minh City noticed a simple wooden chair made by their team. Impressed by its quality, he ordered five thousand of them.

Today, most of the furniture produced by Mai Lan is made from wood grown on certified plantations. Customers buying from the company can scan a code on each product to see exactly where the wood came from. Introduced in 2019, this system has helped the company win contracts with several large European retailers, who are under pressure to prove that their products are sustainable.

The company's head office, located on the outskirts of Thu Dau Mot, was refurbished last year. Designed by a young Vietnamese architect, the new building uses natural light and ventilation, cutting electricity costs by almost a third. Visitors arriving at the entrance are greeted by the original wooden chair that started it all, displayed in a glass case.

Not everything has gone smoothly. Faced with rising wood prices and strong competition from other countries, Mai Lan had to close one of its four factories in 2023. Nevertheless, the managing director, the daughter of one of the founders, remains optimistic. "Having survived those difficult early years, we are not afraid of challenges," she says. "Our customers want furniture that is beautiful, strong and responsibly made, and that is exactly what we do."`,
    glossary: [
      ["exporter", "nhà xuất khẩu"],
      ["trade fair", "hội chợ thương mại"],
      ["certified", "được chứng nhận"],
      ["plantation", "rừng trồng, đồn điền"],
      ["retailer", "nhà bán lẻ"],
      ["sustainable", "bền vững, thân thiện với môi trường"],
      ["ventilation", "sự thông gió"],
      ["optimistic", "lạc quan"],
    ],
    questions: [
      mc("b2-n12-r1", "What is the text mainly about?", ["How a small family workshop grew into a major furniture exporter", "Why wood prices are rising in Vietnam", "How to design an energy-saving office", "Why European retailers prefer Japanese furniture"], 0, "Bài kể lại chặng đường từ một gara nhỏ năm 1998 đến một công ty xuất khẩu hơn một nghìn hai trăm nhân viên."),
      mc("b2-n12-r2", "What led to the company's first big order?", ["A loan from relatives", "A Japanese buyer saw one of their chairs at a trade fair.", "A European retailer visited their garage.", "They won a design competition."], 1, "A Japanese buyer visiting a trade fair… noticed a simple wooden chair… he ordered five thousand of them."),
      fill("b2-n12-r3", "___ in 2019, the tracking system lets customers see where the wood came from. (introduce)", ["Introduced"], "Hệ thống được đưa vào sử dụng (bị động), nên cụm rút gọn đầu câu dùng V3: Introduced."),
      mc("b2-n12-r4", "Why is the tracking system probably important to European retailers?", ["It makes the furniture cheaper.", "It speeds up delivery.", "It lets them design their own furniture.", "It helps them prove that their products are sustainable."], 3, "Các nhà bán lẻ châu Âu are under pressure to prove that their products are sustainable, và mã quét cho biết gỗ đến từ đâu."),
      mc("b2-n12-r5", "How does the managing director feel about the company's future?", ["Worried that it will have to close", "Uninterested in new challenges", "Confident, despite recent problems", "Angry about foreign competition"], 2, "Dù phải đóng một nhà máy, bà remains optimistic và nói we are not afraid of challenges."),
    ],
  }),
  task: task({
    prompt: "Viết một bài khoảng 140–180 từ giới thiệu một khách sạn, cửa hàng, công ty hoặc trường học mà bạn biết, như trong tờ giới thiệu. Dùng ít nhất năm cụm rút gọn trong bài.",
    hints: [
      "Mở đầu bằng một cụm V3 như Founded in… hoặc Located in…",
      "Dùng một cụm Having + V3 để nói kinh nghiệm hoặc việc đã xong trước.",
      "Rút gọn ít nhất hai mệnh đề quan hệ: danh từ + V-ing hoặc danh từ + V3.",
      "Viết xong, ghép từng cụm rút gọn với chủ ngữ sau dấu phẩy và đọc lại xem có hợp lý không.",
    ],
    model: "Located in the centre of Da Nang, only five minutes from the beach, Green Leaf Hotel is a small family business with a big reputation. Opened in two thousand and twelve, it now has forty rooms, a rooftop café and a small swimming pool. Refurbished last year, the rooms are bright, modern and very comfortable.\n\nThe manager, Mr Vo, having worked in Singapore for many years, trains every new member of staff personally. Guests staying at the hotel can borrow bicycles for free and join a walking tour of the local market every Saturday morning. Most of the food served in the restaurant is bought from farmers living in the nearby villages, so the breakfast is always fresh.\n\nHaving tried the famous banana pancakes, many guests come back again and again. Families travelling with young children will appreciate the quiet location and the helpful staff.\n\nAnyone looking for a friendly, affordable place to stay in Da Nang will feel at home here. Rooms booked directly on our website include a free airport transfer.",
    checklist: [
      "Có ít nhất một cụm V3 mang nghĩa bị động (Founded, Built, Located…).",
      "Có ít nhất một cụm Having + V3.",
      "Có ít nhất hai mệnh đề quan hệ rút gọn (V-ing hoặc V3 đứng ngay sau danh từ).",
      "Mỗi cụm rút gọn đầu câu có người làm hành động chính là chủ ngữ sau dấu phẩy, không có phân từ treo.",
      "Sau having là V3 đầy đủ (đuôi -ed hoặc dạng bất quy tắc).",
    ],
    minWords: 140,
  }),
});
