import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "gia-dinh-khong-that",
  title: "Giả định không có thật",
  minutes: 35,
  lecture: {
    title: "Would rather, it's time, as if và wish: quá khứ giả định",
    blocks: [
      p("Đồng nghiệp hay gọi điện cho bạn lúc mười một giờ đêm. Bạn muốn nhắc khéo mà không mất lòng: **I'd rather you didn't call me so late.** Để ý nhé: nói về chuyện **bây giờ và sau này**, nhưng động từ lại ở **thì quá khứ**. Đây là **quá khứ giả định**: tiếng Anh lùi thì một bước để cho biết điều đang nói **không phải sự thật**, hoặc chỉ là **mong muốn**. Tiếng Việt không chia thì nên đây là điểm người Việt thấy lạ nhất."),
      table(
        ["Cấu trúc", "Ví dụ", "Nghĩa"],
        ["wish + quá khứ đơn", "I wish I lived closer to the office.", "Ước gì tôi sống gần công ty hơn (thực tế: nhà xa)."],
        ["would rather + S + quá khứ đơn", "I'd rather you didn't call me after ten.", "Tôi mong anh đừng gọi cho tôi sau mười giờ."],
        ["it's (high/about) time + S + quá khứ đơn", "It's high time we updated the website.", "Đã đến lúc (lẽ ra phải làm từ lâu) chúng ta cập nhật trang web."],
        ["as if / as though + quá khứ đơn", "He talks as if he owned the company.", "Anh ta nói cứ như thể mình là chủ công ty (thực ra không phải)."],
      ),
      p("**Would rather** có hai mẫu. Khi nói về **chính mình**, dùng **would rather + V nguyên mẫu** (có thể thêm **than + V**). Khi muốn **người khác** làm gì, dùng **would rather + S + quá khứ đơn**. Phủ định: **I'd rather not + V** và **I'd rather you didn't + V**."),
      ex("I'd rather work late tonight than come in on Saturday.", "Tôi thà làm muộn tối nay còn hơn phải đi làm vào thứ Bảy.", "Cùng một chủ ngữ nên dùng nguyên mẫu: work, come. Không dùng to."),
      ex("Would you rather I sent the report today or tomorrow?", "Anh muốn tôi gửi báo cáo hôm nay hay ngày mai?", "Khác chủ ngữ (you và I) nên dùng quá khứ: sent, dù đang nói về tương lai."),
      mistake("I'd rather you won't tell anyone.", "I'd rather you didn't tell anyone.", "Vì đang nói chuyện sau này nên học trò dùng will. Nhưng sau would rather + một người khác, dạng chuẩn là lùi về quá khứ: didn't tell. (Trong văn nói thân mật đôi khi nghe I'd rather you don't…, nhưng khi viết hãy dùng quá khứ.)"),
      p("**It's time to + V** nói chung chung là đến giờ làm gì. **It's time + S + động từ dạng quá khứ** (thường là quá khứ đơn; cũng có thể quá khứ tiếp diễn: It's time we were leaving) thì mang ý **lẽ ra phải làm rồi, đang muộn**. Thêm **high** hoặc **about** là nhấn mạnh thêm, thường có ý phàn nàn."),
      ex("It's about time the company fixed the air conditioning.", "Đã đến lúc công ty phải sửa điều hòa rồi đấy.", "Có ý chê: lẽ ra phải sửa từ lâu."),
      mistake("It's time we go home.", "It's time we went home.", "Tiếng Việt “đến lúc mình về rồi” không có dấu hiệu thì nào, nên học trò dùng hiện tại. Sau It's time + chủ ngữ, động từ ở dạng quá khứ (thường là quá khứ đơn: went; hoặc quá khứ tiếp diễn: were going). Nếu không muốn chia thì, dùng It's time to go home."),
      p("**As if / as though** dùng thì quá khứ khi điều đó **không có thật**. Khi điều đó **có thể thật**, ta dùng thì bình thường, thường sau **look, seem, sound**. Trong văn trang trọng, dùng **were** cho mọi ngôi."),
      ex("She speaks English as if she were a native speaker.", "Cô ấy nói tiếng Anh cứ như người bản xứ.", "Thực tế cô ấy không phải người bản xứ. Văn nói hằng ngày cũng chấp nhận was."),
      ex("It looks as if the meeting is going to run late.", "Có vẻ như cuộc họp sẽ kéo dài quá giờ.", "Điều này rất có thể xảy ra nên dùng thì bình thường, không lùi thì."),
      mistake("I wish I can speak Japanese.", "I wish I could speak Japanese.", "Ước về hiện tại thì lùi một thì: can thành could, am thành were, have thành had. Nhớ phân biệt với bài Tiếc nuối: ước về quá khứ thì dùng had + V3."),
      tip("Mẹo nhớ: **lùi thì là lùi xa khỏi sự thật**. Hễ thấy **wish, would rather + người khác, it's time + chủ ngữ, as if (không thật)**, hãy lùi động từ một bậc: hiện tại thành quá khứ. Viết bốn cụm này lên một tấm thẻ và gọi chúng là **bốn chiếc chìa khóa lùi thì**."),
      teacher("Khi chấm bài, tôi thấy học trò không sai vì không biết quy tắc, mà vì **tai chưa quen**. Câu **It's time we went** nghe lạ tai nên nhiều bạn sửa thành **go**. Cách chữa duy nhất là nghe và nói thật nhiều. Tôi khuyên các bạn mỗi ngày tự nói về bản thân một câu **I wish…**, một câu **I'd rather…** và một câu **It's time I…** Ví dụ: **It's time I started exercising.** Nói to, nói thật lòng về đời mình, cấu trúc sẽ bám vào trí nhớ lâu hơn bất kỳ bảng công thức nào."),
      summary(
        "Quá khứ giả định: lùi động từ một thì để nói điều không có thật hoặc chỉ là mong muốn ở hiện tại.",
        "wish + quá khứ đơn (can thành could, am thành were): ước điều trái với hiện tại.",
        "would rather + V nguyên mẫu khi nói về mình; would rather + người khác + quá khứ đơn khi muốn người khác làm gì.",
        "It's time to + V: đến giờ làm gì; It's (high/about) time + chủ ngữ + động từ dạng quá khứ (thường là quá khứ đơn): lẽ ra phải làm rồi.",
        "as if + quá khứ: điều không có thật; as if + thì bình thường: điều có thể thật (thường sau look, seem, sound).",
      ),
    ],
  },
  words: [
    word("preference", "/ˈpref.ər.əns/", "sự ưa thích hơn, lựa chọn ưu tiên", "Do you have a preference for the meeting time?", "pref|er|ence", 0, "Trọng âm ở âm tiết đầu: PREF-er-ence, khác với động từ prefer nhấn âm sau."),
    word("reality", "/riˈæl.ə.ti/", "thực tế, hiện thực", "He talks as if he were rich, but the reality is very different.", "re|al|i|ty", 1),
    word("pretend", "/prɪˈtend/", "giả vờ", "She pretended that she hadn't seen the message.", "pre|tend", 1),
    word("imaginary", "/ɪˈmædʒ.ɪ.nər.i/", "tưởng tượng, không có thật", "The problem is imaginary, so stop worrying.", "i|mag|i|nar|y", 1),
    word("overdue", "/ˌəʊ.vəˈdjuː/", "quá hạn, lẽ ra phải có từ lâu", "These repairs are long overdue. It's high time the landlord fixed the roof.", "o|ver|due", 2, "Trọng âm chính ở âm tiết cuối: o-ver-DUE. Người Anh đọc /djuː/, gần “điu”."),
    word("punctual", "/ˈpʌŋk.tʃu.əl/", "đúng giờ", "I'd rather you were more punctual in the mornings.", "punc|tu|al", 0),
    word("annoyed", "/əˈnɔɪd/", "bực mình", "My boss looked annoyed when I arrived late.", "an|noyed", 1, "Âm cuối là /d/, nhớ đọc ra, đừng nuốt mất."),
    word("hypothetical", "/ˌhaɪ.pəˈθet.ɪ.kəl/", "mang tính giả định", "It's only a hypothetical question, so don't worry.", "hy|po|thet|i|cal", 2, "Trọng âm chính ở âm tiết thứ ba: hy-po-THET-i-cal. Âm /θ/ đặt đầu lưỡi giữa hai hàm răng."),
  ],
  exercises: [
    mc("b2-n08-1", "I'd rather you ___ your phone during the meeting.", ["don't use", "didn't use", "not to use", "won't use"], 1, "Would rather + người khác + quá khứ đơn: I'd rather you didn't use… (tôi mong anh đừng dùng…). Don't use đôi khi nghe trong văn nói thân mật, nhưng didn't use mới là dạng chuẩn."),
    mc("b2-n08-2", "It's already midnight. It's high time we ___ home.", ["go", "will go", "went"], 2, "It's high time + S + quá khứ đơn, mang ý đáng lẽ phải về từ trước rồi."),
    fill("b2-n08-3", "He acts as if he ___ the boss, but he's just an intern. (be)", ["were", "was"], "Điều không có thật sau as if dùng quá khứ. Were là dạng trang trọng cho mọi ngôi, was dùng trong văn nói."),
    fill("b2-n08-4", "I'd rather ___ at home tonight than go to the party. (stay)", ["stay"], "Cùng chủ ngữ: would rather + V nguyên mẫu, không thêm to."),
    reorder("b2-n08-5", "It's time we started the meeting.", "It's time + S + quá khứ đơn: đã đến lúc (hơi muộn rồi) chúng ta bắt đầu họp."),
    reorder("b2-n08-6", "I'd rather you didn't tell anyone.", "Lời đề nghị tế nhị: tôi mong anh đừng kể với ai."),
    listen("b2-n08-7", "He talks as if he knew everything.", ["Anh ta biết mọi thứ nên nói rất hay.", "Anh ta muốn biết mọi thứ.", "Anh ta nói cứ như thể mình biết hết mọi thứ."], 2, "Knew sau as if là quá khứ giả định: thực ra anh ta không biết hết."),
    listen("b2-n08-8", "I wish I had more free time.", ["Ước gì tôi có nhiều thời gian rảnh hơn.", "Giá mà hồi đó tôi có nhiều thời gian rảnh hơn.", "Tôi sẽ có nhiều thời gian rảnh hơn."], 0, "Wish + quá khứ đơn là ước về hiện tại. Tiếc về quá khứ phải là I wish I had had…"),
    correct("b2-n08-9", "It's high time the company gives us a proper meeting room.", ["It's high time the company gave us a proper meeting room.", "It is high time the company gave us a proper meeting room."], "Sau It's (high) time + chủ ngữ phải dùng quá khứ đơn: gave, dù đang nói về chuyện bây giờ."),
    correct("b2-n08-10", "I'd rather to stay at home tonight.", ["I'd rather stay at home tonight.", "I would rather stay at home tonight."], "Would rather đi thẳng với động từ nguyên mẫu, không có to."),
  ],
  speaking: [
    say("I'd rather you didn't call me after ten o'clock.", "Tôi mong anh đừng gọi cho tôi sau mười giờ."),
    say("It's high time we updated our website.", "Đã đến lúc chúng ta phải cập nhật trang web rồi."),
    say("She talks as if she knew everyone here.", "Cô ấy nói cứ như thể quen hết mọi người ở đây."),
  ],
  freeSpeaking: free(
    "If you could change one thing about your daily life, what would it be?",
    "Nói về một điều bạn ước khác đi trong cuộc sống hằng ngày: bạn ước gì, bạn thà làm gì, và đã đến lúc bạn hoặc người khác phải làm gì. Dùng I wish, I'd rather, it's time và as if.",
    "To be honest, I wish I lived closer to my office. At the moment I spend nearly two hours a day on my motorbike, and I often arrive at work feeling as if I had already done a full day. I'd rather spend that time with my family or at the gym. My wife thinks it's high time we moved to a flat in the city centre, and I agree. We just need to find one that we can afford.",
  ),
  dialogue: dialogue(
    "Văn phòng ồn quá",
    "Hai đồng nghiệp ngồi cạnh nhau trong văn phòng mở. Ông quản lý mới hay nói điện thoại rất to, và họ bàn cách góp ý khéo.",
    { A: "Hương, nhân viên", B: "Tuấn, đồng nghiệp" },
    A("I wish our office weren't so noisy. I can't concentrate at all.", "Ước gì văn phòng mình không ồn thế. Tôi chẳng tập trung được chút nào."),
    B("Me neither. Our new manager talks on the phone as if he were alone in the room.", "Tôi cũng vậy. Ông quản lý mới nói điện thoại cứ như thể chỉ có mình ông ấy trong phòng."),
    A("Maybe we should tell him. It's about time someone said something.", "Có lẽ mình nên nói với ông ấy. Đến lúc phải có người lên tiếng rồi."),
    B("I'd rather not be the one who tells him. He's only been here a week.", "Tôi thà không phải là người nói. Ông ấy mới đến có một tuần."),
    A("Then would you rather I spoke to him?", "Vậy anh có muốn tôi nói chuyện với ông ấy không?"),
    B("Yes, please. But I'd rather you didn't mention my name.", "Có, nhờ chị nhé. Nhưng tôi mong chị đừng nhắc tên tôi."),
    A("Don't worry. It looks as if he's quite friendly, so it should be fine.", "Đừng lo. Có vẻ ông ấy khá thân thiện, nên chắc sẽ ổn thôi."),
    B("I hope so. Honestly, it's high time the company gave us a quiet room for calls.", "Mong là vậy. Thật lòng mà nói, đã đến lúc công ty phải cho mình một phòng yên tĩnh để gọi điện rồi."),
    A("Agreed. I'd rather work from home than sit here all day with my headphones on.", "Đồng ý. Tôi thà làm ở nhà còn hơn ngồi đây cả ngày đeo tai nghe."),
    B("I wish I could, but my team needs me in the office.", "Ước gì tôi làm được thế, nhưng nhóm tôi cần tôi ở văn phòng."),
  ),
  dialogueQuestions: [
    mc("b2-n08-d1", "What is the main problem in the office?", ["The air conditioning is broken.", "There aren't enough desks.", "Tuan arrives late every day.", "The new manager talks very loudly on the phone."], 3, "Tuấn nói: Our new manager talks on the phone as if he were alone in the room. Ông ấy nói to như thể không có ai khác."),
    listenQ("b2-n08-d2", "What does Tuan ask Huong not to do?", "Then would you rather I spoke to him? Yes, please. But I'd rather you didn't mention my name.", ["Speak to the manager", "Mention his name", "Work from home", "Complain to the company"], 1, "I'd rather you didn't mention my name: tôi mong chị đừng nhắc tên tôi. Tuấn vẫn muốn Hương nói chuyện với quản lý."),
    mc("b2-n08-d3", "Why does Tuan say he can't work from home?", ["His manager won't allow it.", "He doesn't have a quiet room at home.", "His team needs him in the office.", "He prefers working in the office."], 2, "I wish I could, but my team needs me in the office."),
  ],
  reading: reading({
    title: "It's time we rethought the open-plan office",
    text: `Over the past few decades, walls have been disappearing from offices all over the world. Managers were told that open-plan spaces would encourage teamwork, speed up communication and, not least, save money on rent. Today, many of the people who work in them would rather have a door they could close.

I understand the theory. If everyone sits together, ideas should flow more freely. The reality, however, is rather different. A study at two large multinational companies found that when staff moved to an open-plan office, face-to-face conversations actually fell by around seventy per cent. People put on headphones, sent more emails and behaved as if their colleagues weren't there. They were not being rude. They were simply trying to concentrate.

Noise is the most common complaint. In a typical open office, you can hear phone calls, keyboards and the coffee machine all day long. Some colleagues speak on the phone as though they were alone in a field. It is hardly surprising that many employees say they wish they had somewhere quiet to think, or that they would rather work from home on days when they need to write a report.

I am not suggesting that we go back to long corridors of small, closed rooms. Teams do need space to meet and talk. But it is high time companies accepted that different tasks need different environments. A well-designed office might include an open area for team discussions, a few quiet rooms for focused work and small booths for video calls.

Some firms are already moving in this direction, and their staff say they feel less stressed and more productive. Others still act as if one large room were the answer to every problem. If you are a manager, ask your team where they do their best work. You may not like the answer, but it's time you heard it.`,
    glossary: [
      ["open-plan", "không gian mở, không có vách ngăn"],
      ["encourage", "khuyến khích"],
      ["not least", "và không kém phần quan trọng là"],
      ["concentrate", "tập trung"],
      ["corridor", "hành lang"],
      ["booth", "buồng nhỏ, bốt"],
      ["productive", "làm việc hiệu quả, năng suất"],
    ],
    questions: [
      mc("b2-n08-r1", "What is the writer's main argument?", ["Open-plan offices should be replaced by small, closed rooms.", "Companies should offer different spaces for different kinds of work.", "Employees should always work from home.", "Open-plan offices are cheaper, so they are the best choice."], 1, "It is high time companies accepted that different tasks need different environments. Người viết nói rõ không muốn quay lại kiểu phòng kín."),
      mc("b2-n08-r2", "What happened to face-to-face conversations in the American study?", ["They increased slightly.", "They stayed the same.", "They fell by about seventy per cent.", "They doubled."], 2, "Face-to-face conversations actually fell by around seventy per cent."),
      mc("b2-n08-r3", "What does the writer suggest about people who wear headphones at work?", ["They are rude to their colleagues.", "They are listening to music instead of working.", "They want to leave the company.", "They are trying to focus, not to be unfriendly."], 3, "They were not being rude. They were simply trying to concentrate."),
      fill("b2-n08-r4", "The writer says it is high time companies ___ that different tasks need different environments. (accept)", ["accepted"], "Sau It's high time + chủ ngữ dùng quá khứ đơn: accepted."),
      mc("b2-n08-r5", "How would you describe the writer's tone in the last paragraph?", ["Direct and slightly challenging", "Humorous and uncertain", "Angry and aggressive", "Neutral and uninterested"], 0, "Người viết nói thẳng với các nhà quản lý: You may not like the answer, but it's time you heard it. Giọng thẳng thắn, hơi thách thức nhưng không giận dữ."),
    ],
  }),
  task: task({
    prompt: "Viết một bài khoảng 140–180 từ về một điều bạn muốn thay đổi ở khu phố, trường học hoặc nơi làm việc của mình, dùng các cấu trúc quá khứ giả định trong bài.",
    hints: [
      "Mở bằng một câu I wish… về điều bạn chưa hài lòng.",
      "Dùng It's (high) time + chủ ngữ + quá khứ đơn để nói việc lẽ ra phải làm rồi.",
      "Thêm một câu would rather (về mình hoặc về người khác) và một câu as if.",
    ],
    model: "I wish my neighbourhood had more green spaces. At the moment, there is only one small garden near the temple, and it is always crowded. Children play football in the street as if it were a playground, which is very dangerous because of the motorbikes.\n\nIt's high time the local council built a proper park on the empty land near the market. The land has been empty for years, and it is now full of rubbish. I'd rather pay a little more tax than watch my son play next to busy traffic every afternoon.\n\nSome of my neighbours want to plant trees on the pavement themselves, but I'd rather they asked the council first, because the pavements are very narrow. My neighbour Mrs Tran talks about the problem as though she were the only person who cared, but in fact most families feel the same.\n\nIt looks as if our new ward leader is interested in the idea, so I'm hopeful. I think it's time we all went to the next local meeting together.",
    checklist: [
      "Có ít nhất một câu I wish + quá khứ đơn (hoặc could, were).",
      "Có It's time hoặc It's high time + chủ ngữ + động từ dạng quá khứ.",
      "Có would rather dùng đúng mẫu: nguyên mẫu khi nói về mình, quá khứ đơn khi nói về người khác.",
      "Có as if hoặc as though, lùi thì khi điều đó không có thật.",
      "Không còn động từ hiện tại nào sau wish, would rather + người khác, it's time + chủ ngữ.",
    ],
    minWords: 140,
  }),
});
