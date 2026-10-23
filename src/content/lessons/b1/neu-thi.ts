import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "neu-thi",
  title: "Nếu… thì… và ước gì…",
  minutes: 32,
  lecture: {
    title: "Câu điều kiện loại 1, loại 2 và câu ước wish / if only + quá khứ đơn",
    blocks: [
      p("Bạn rủ đồng nghiệp người Úc cuối tuần đi Vũng Tàu, anh ấy hỏi: “Nhỡ trời mưa thì sao?” Một lúc sau cả nhóm lại mơ mộng: “Nếu trúng xổ số thì làm gì?” Hai câu nghe giống nhau trong tiếng Việt, nhưng tiếng Anh nói theo hai cách khác hẳn. Hiểu điều này, bạn vừa lên kế hoạch được, vừa đưa lời khuyên được."),
      p("Tiếng Việt dùng “nếu… thì…” cho mọi tình huống. Tiếng Anh tách ra hai loại: **loại 1** cho chuyện có thể xảy ra thật, **loại 2** cho chuyện không có thật hoặc khó xảy ra ở hiện tại."),
      table(
        ["Loại", "Mệnh đề if", "Mệnh đề chính", "Dùng khi"],
        ["Loại 1", "If + hiện tại đơn", "will + V", "chuyện có khả năng xảy ra"],
        ["Loại 2", "If + quá khứ đơn", "would + V", "chuyện không có thật, tưởng tượng"],
      ),
      p("Mệnh đề if có thể đứng đầu hoặc đứng sau. **Đứng đầu thì có dấu phẩy**, đứng sau thì không. Khi nói, will thường rút gọn thành **'ll**, would thành **'d**."),
      ex("If it rains tomorrow, we'll stay at home.", "Nếu mai trời mưa, chúng ta sẽ ở nhà."),
      ex("If I had more time, I would learn to play the guitar.", "Nếu có nhiều thời gian hơn, tôi sẽ học chơi đàn ghi-ta.", "Had là quá khứ về hình thức nhưng nói về hiện tại: thực tế là bây giờ tôi không có nhiều thời gian."),
      ex("I'd call her if I knew her number.", "Tôi sẽ gọi cho cô ấy nếu tôi biết số điện thoại.", "Mệnh đề if đứng sau nên không có dấu phẩy. Thực tế là tôi không biết số của cô ấy."),
      table(
        ["Câu", "Người nói nghĩ gì"],
        ["If I get the job, I'll move to Hanoi.", "Đã phỏng vấn, khả năng được nhận là có thật."],
        ["If I got the job, I'd move to Hanoi.", "Chưa nộp đơn hoặc thấy khó được nhận, chỉ đang tưởng tượng."],
      ),
      p("**Unless** nghĩa là “trừ khi”, tương đương if… not. Sau unless dùng câu khẳng định."),
      ex("You won't pass the exam unless you study harder.", "Bạn sẽ không đỗ kỳ thi trừ khi bạn học chăm hơn."),
      tip("Muốn khuyên ai đó, hãy dùng **If I were you, I would…** (Nếu tôi là bạn, tôi sẽ…). Trong câu điều kiện loại 2, văn viết chuẩn thường dùng **were** cho mọi chủ ngữ, kể cả I, he, she (văn nói hằng ngày có thể dùng was). Riêng cụm If I were you, các bạn nên luôn dùng were."),
      mistake("If it will rain, we will stay at home.", "If it rains, we will stay at home.", "Vì cả câu nói về ngày mai, người học nghĩ vế nào cũng phải có will. Nhưng trong câu điều kiện loại 1, mệnh đề if dùng hiện tại đơn để nói về tương lai; will chỉ nằm ở mệnh đề chính."),
      mistake("If I have a lot of money, I would buy a house.", "If I had a lot of money, I would buy a house.", "Tiếng Việt không có cách “lùi thì” để báo chuyện không có thật. Trong tiếng Anh, mệnh đề chính có would thì mệnh đề if phải lùi về quá khứ đơn."),
      mistake("Unless you don't hurry, you'll miss the train.", "Unless you hurry, you'll miss the train.", "Người Việt dịch “trừ khi bạn không nhanh lên” theo từng chữ. Unless đã mang nghĩa phủ định, không thêm don't."),
      p("Câu điều kiện loại 2 có một người anh em rất gần: **câu ước về hiện tại**. Khi muốn điều gì đó khác với thực tế bây giờ, dùng **I wish + quá khứ đơn**. Cũng như mệnh đề if loại 2, động từ lùi về quá khứ nhưng nghĩa vẫn là hiện tại: đó là tín hiệu “điều này không có thật”. Can thành **could**; với be, văn viết chuẩn dùng **were** cho mọi chủ ngữ. **If only** (giá mà) dùng y hệt wish nhưng mạnh hơn, hay đi với dấu chấm than. Còn tiếc nuối chuyện đã qua (wish + had + V3) thì bạn sẽ học ở B2."),
      table(
        ["Thực tế bây giờ", "Câu điều kiện loại 2", "Câu ước"],
        ["I don't have a car.", "If I had a car, I'd drive to work.", "I wish I had a car."],
        ["I can't swim.", "If I could swim, I'd go to the beach more.", "I wish I could swim."],
        ["My flat is far from work.", "If my flat were closer, I'd walk to work.", "I wish my flat were closer to work."],
      ),
      ex("If only I spoke Korean! I'd understand my new colleagues.", "Giá mà tôi nói được tiếng Hàn! Tôi sẽ hiểu các đồng nghiệp mới.", "Thực tế: bây giờ tôi không nói được tiếng Hàn. Spoke là quá khứ về hình thức nhưng nói về hiện tại, giống mệnh đề if loại 2."),
      mistake("I wish I can speak English well.", "I wish I could speak English well.", "Tiếng Việt nói “ước gì tôi có thể nói” mà không đổi gì ở động từ, nên người học giữ can. Sau wish, điều ước ở hiện tại phải lùi một thì: can thành could, have thành had, am thành were."),
      teacher("Khi chấm bài, tôi thấy người học sai câu điều kiện không phải vì không thuộc công thức, mà vì **không hỏi mình đang nghĩ gì**. Trước khi nói, hãy tự hỏi: “Chuyện này có thể xảy ra thật không?” Có thì dùng loại một, không thì lùi thì dùng loại hai. Mỗi tối, các bạn viết ba câu If I were you… để khuyên một người bạn. Lời khuyên có thật thì câu văn cũng nhớ lâu."),
      summary(
        "Chuyện **có thể xảy ra thật**: If + hiện tại đơn, will + V. Khi nói về tương lai, không đặt will trong mệnh đề if (ngoại lệ: lời nhờ lịch sự If you will wait here, …).",
        "Chuyện **không có thật, tưởng tượng**: If + quá khứ đơn, would + V.",
        "Khuyên ai đó: **If I were you, I'd…**, luôn dùng were.",
        "**Unless** = if not; sau unless dùng câu khẳng định, không thêm don't. Mệnh đề if đứng đầu câu thì có dấu phẩy.",
        "Ước về hiện tại: **I wish / If only + quá khứ đơn** (I wish I had a car); can thành **could**, be thành **were**. Không nói I wish I can.",
      ),
    ],
  },
  words: [
    word("afford", "/əˈfɔːd/", "đủ tiền, đủ khả năng chi trả", "I can't afford a new car.", "af|ford", 1, "Thường đi với can hoặc can't."),
    word("decision", "/dɪˈsɪʒ.ən/", "quyết định", "If I were you, I'd think about that decision again.", "de|ci|sion", 1),
    word("possible", "/ˈpɒs.ə.bəl/", "có thể, khả thi", "If possible, please call me before noon.", "pos|si|ble", 0),
    word("advice", "/ədˈvaɪs/", "lời khuyên", "Can I give you some advice?", "ad|vice", 1, "Advice là danh từ không đếm được, không nói an advice. Động từ là advise, đọc với âm /z/."),
    word("lottery", "/ˈlɒt.ər.i/", "xổ số", "What would you do if you won the lottery?", "lot|te|ry", 0),
    word("scholarship", "/ˈskɒl.ə.ʃɪp/", "học bổng", "If I got a scholarship, I would study in Australia.", "schol|ar|ship", 0, "Chữ ch đọc là /k/, trọng âm ở âm đầu: SKOL-ə-ship. Nhận học bổng là get / win a scholarship."),
    word("unless", "/ənˈles/", "trừ khi", "I won't go unless you come with me.", "un|less", 1),
    word("wish", "/wɪʃ/", "ước, mong ước", "I wish I lived closer to my parents.", "wish", 0, "Âm cuối /ʃ/, không đọc thành “uých”."),
  ],
  exercises: [
    mc("b1-3-1", "If she ___ the bus, she'll be late for work.", ["misses", "will miss", "missed"], 0, "Câu điều kiện loại 1: mệnh đề if dùng hiện tại đơn, không dùng will."),
    mc("b1-3-2", "If I ___ you, I would talk to the manager.", ["am", "were", "would be", "will be"], 1, "If I were you là cách khuyên quen thuộc, dùng were cho cả I."),
    fill("b1-3-3", "If I won the lottery, I ___ travel around the world.", ["would", "'d", "could", "might"], "Won ở quá khứ đơn nên mệnh đề chính dùng would + V (could hoặc might cũng đúng nếu muốn nói “có thể”)."),
    fill("b1-3-4", "We'll go to the beach tomorrow ___ it rains.", ["unless"], "Unless = if not: chúng ta sẽ đi biển trừ khi trời mưa."),
    reorder("b1-3-5", "What would you do with a million dollars?", "Would + V: hỏi về một tình huống tưởng tượng, không có thật."),
    reorder("b1-3-6", "I would buy a house near the sea.", "Mệnh đề chính của câu điều kiện loại 2: would + V."),
    listen("b1-3-7", "If I were you, I'd take the job.", ["Nếu bạn nhận việc, tôi sẽ rất vui.", "Nếu tôi là bạn, tôi sẽ nhận công việc đó.", "Tôi đã nhận công việc đó thay bạn."], 1, "If I were you, I'd…: lời khuyên."),
    listen("b1-3-8", "If we leave now, we'll catch the last train.", ["Dù đi bây giờ thì chúng ta cũng lỡ chuyến tàu cuối rồi.", "Chúng ta đã lỡ chuyến tàu cuối.", "Nếu đi bây giờ, chúng ta sẽ kịp chuyến tàu cuối."], 2),
    correct("b1-3-9", "If you will finish early, we'll have dinner together.", "If you finish early, we'll have dinner together.", "Câu điều kiện loại 1: mệnh đề if dùng hiện tại đơn dù nói về tương lai. Will chỉ nằm ở mệnh đề chính."),
    correct("b1-3-10", "If I knew the answer, I will tell you.", ["If I knew the answer, I would tell you.", "If I knew the answer, I'd tell you.", "If I know the answer, I will tell you."], "Mệnh đề if ở quá khứ đơn (knew) là chuyện không có thật, nên mệnh đề chính phải là would + V. Nếu chuyện có thể xảy ra thật thì dùng cả câu loại 1: If I know…, I will…"),
    fill("b1-3-11", "I don't have a car, so I take the bus every day. I wish I ___ a car. (have)", ["had"], "Ước điều trái với hiện tại: wish + quá khứ đơn. Have thành had."),
    correct("b1-3-12", "I wish I can speak Japanese.", "I wish I could speak Japanese.", "Điều ước ở hiện tại phải lùi thì: can thành could."),
    reorder("b1-3-13", "I wish my flat were closer to work.", "I wish + chủ ngữ + quá khứ đơn: với be, văn viết chuẩn dùng were cho mọi chủ ngữ."),
    correct("b1-3-14", "If I would have more money, I would buy a new laptop.", ["If I had more money, I would buy a new laptop.", "If I had more money, I'd buy a new laptop."], "Would chỉ nằm ở mệnh đề chính. Mệnh đề if loại 2 dùng quá khứ đơn: If I had…"),
  ],
  freeSpeaking: free(
    "What would you do if you had a whole month off work or school?",
    "Tưởng tượng bạn được nghỉ trọn một tháng: bạn sẽ làm gì (loại 2)? Thêm một kế hoạch có thể xảy ra thật (loại 1), một câu với unless và một điều ước về hiện tại (I wish…).",
    "If I had a whole month off, I would travel around the north of Vietnam by motorbike. I'd visit Ha Giang and Sa Pa, and I'd take lots of photos. That's only a dream, and I really wish I had more free time. But if the weather is good next spring, I'll do a short trip with my friends. I won't go far unless I save enough money first.",
  ),
  dialogueQuestions: [
    listenQ("b1-3-d1", "What will they do if it rains on Saturday?", "Yes, unless it rains. If it rains, we'll go to the cinema instead.", ["Stay at home", "Go to the cinema", "Go to Vung Tau by bus", "Move the trip to Sunday"], 1, "If it rains, we'll go to the cinema instead."),
    mc("b1-3-d2", "Why does Nam advise Jack to take the bus?", ["It's faster than a car.", "It's cheaper, and Jack won't need to drive.", "There is no parking in Vung Tau.", "Nam doesn't like driving."], 1, "Nam nói: It's cheaper, and you won't need to drive."),
    mc("b1-3-d3", "What can we guess about Nam?", ["He usually gets up at five.", "He doesn't want to go to Vung Tau.", "He doesn't like getting up very early.", "He has a lot of money."], 2, "Câu suy luận: Nam chê sáu giờ là quá sớm và nói nếu dậy lúc năm giờ thì cả ngày sẽ ngủ gật, nên anh ấy không thích dậy sớm. Anh ấy cũng than không đủ tiền mua cà phê, nên không phải người nhiều tiền."),
  ],
  reading: reading({
    title: "Ask Anna: Should I move to the city?",
    text: `Dear Anna,

I'm twenty-four, and I work in a small clothes shop in my home town. My cousin has offered me a job in her café in Ho Chi Minh City. The salary is higher, but I'm worried. If I move, I'll be far from my parents, and I don't know anyone there except my cousin. My job here is safe, but it's boring, and I wish I had more chances to learn new things. My parents say they will support me whatever I choose, but my mother cried a little when I told her about the offer. What should I do?

Minh Thu

Dear Minh Thu,

Thank you for your letter. It's a big decision, and it's normal to feel nervous. First, think about the life you want in five years. If you stay in your home town, you'll feel safe, but will you be happy? If you move, you'll learn a lot and meet new people.

If I were you, I'd visit the city for a week before you decide. Stay with your cousin, work a few shifts in the café and see how you feel. You won't know if you like city life unless you try it.

Don't worry too much about your parents. If you call them every evening, they won't feel so far away. And remember, the decision isn't forever. If city life doesn't suit you, you can always come home.

Also, think carefully about money. Rooms and food in a big city cost much more, so make a simple budget before you go. If the higher salary only pays for a more expensive room, the move won't help you save.

Many readers tell me, "If I had the chance to start again, I would take more risks." Perhaps this is your chance.

Good luck!

Anna`,
    glossary: [
      ["offer", "mời, đề nghị (một công việc)"],
      ["nervous", "hồi hộp, lo lắng"],
      ["shift", "ca làm việc"],
      ["suit", "hợp với (ai)"],
      ["forever", "mãi mãi"],
      ["take risks", "dám mạo hiểm"],
      ["budget", "kế hoạch chi tiêu, ngân sách"],
    ],
    questions: [
      mc("b1-3-r1", "What is Minh Thu's main problem?", ["She has lost her job in the clothes shop.", "She can't decide whether to take a job in another city.", "She doesn't get on with her cousin.", "Her parents want her to move."], 1, "Minh Thư phân vân có nên nhận việc ở quán cà phê của chị họ tại TP Hồ Chí Minh hay không."),
      mc("b1-3-r2", "What does Anna advise Minh Thu to do first?", ["Accept the job immediately", "Ask her parents for permission", "Spend a week in the city and work in the café", "Look for a job in a different shop"], 2, "If I were you, I'd visit the city for a week before you decide… work a few shifts in the café."),
      fill("b1-3-r3", "Anna says Minh Thu won't know if she likes city life ___ she tries it.", ["unless"], "You won't know if you like city life unless you try it."),
      mc("b1-3-r4", "According to Anna, how can Minh Thu stay close to her parents?", ["By going home every weekend", "By calling them every evening", "By asking them to move to the city"], 1, "If you call them every evening, they won't feel so far away."),
      mc("b1-3-r5", "What does Anna probably think about the job offer?", ["It's a good chance and worth trying.", "It's a bad idea because the salary is low.", "Minh Thu should say no because of her parents."], 0, "Anna khuyên đi thử, nhắc rằng có thể quay về, và kết thư bằng Perhaps this is your chance, nên bà thấy đây là cơ hội đáng thử."),
    ],
  }),
  speaking: [
    say("I wish I could speak Japanese.", "Ước gì tôi nói được tiếng Nhật."),
    say("If I had more time, I would learn to cook.", "Nếu có nhiều thời gian hơn, tôi sẽ học nấu ăn."),
    say("If I were you, I'd ask for help.", "Nếu tôi là bạn, tôi sẽ nhờ người giúp."),
  ],
  dialogue: dialogue(
    "Lên kế hoạch đi Vũng Tàu",
    "Nam và Jack, đồng nghiệp người Úc, bàn chuyến đi Vũng Tàu cuối tuần: nhỡ trời mưa thì sao, đi lúc nào, đi bằng gì. Nói chuyện một lúc, hai người lại mơ mộng chuyện trúng xổ số.",
    { A: "Jack, đồng nghiệp người Úc", B: "Nam" },
    A("Are we still going to Vung Tau on Saturday?", "Thứ Bảy mình vẫn đi Vũng Tàu chứ?"),
    B("Yes, unless it rains. If it rains, we'll go to the cinema instead.", "Có, trừ khi trời mưa. Nếu trời mưa thì mình đi xem phim thay vào đó."),
    A("Good plan. If we leave at six, we'll miss the traffic.", "Được đấy. Nếu mình đi lúc sáu giờ thì sẽ tránh được tắc đường."),
    B("Six is too early for me! If I got up at five, I'd be half asleep all day.", "Sáu giờ sớm quá với tôi! Nếu tôi dậy lúc năm giờ thì cả ngày tôi sẽ ngủ gật mất."),
    A("OK, seven then. Should I take the bus or rent a car?", "Vậy thì bảy giờ. Tôi nên đi xe khách hay thuê ô tô?"),
    B("If I were you, I'd take the bus. It's cheaper, and you won't need to drive.", "Nếu tôi là anh, tôi sẽ đi xe khách. Rẻ hơn, và anh không cần phải lái."),
    A("Good advice. I'll book two tickets tonight if you send me the time.", "Lời khuyên hay đấy. Tối nay tôi sẽ đặt hai vé nếu anh gửi tôi giờ xe chạy."),
    B("Sure. By the way, what would you do if you won the lottery?", "Được. À mà nếu trúng xổ số thì anh sẽ làm gì?"),
    A("If I won the lottery, I'd buy a house by the sea in Vung Tau!", "Nếu trúng xổ số, tôi sẽ mua một căn nhà sát biển ở Vũng Tàu!"),
    B("Me too. I wish I lived by the sea! But right now I can't even afford a coffee there.", "Tôi cũng thế. Ước gì tôi sống cạnh biển! Nhưng bây giờ thì đến cốc cà phê ở đó tôi còn chẳng đủ tiền."),
    A("Ha! Don't worry. If the weather is nice, I'll buy the coffee.", "Ha! Đừng lo. Nếu trời đẹp, tôi sẽ mời cà phê."),
    B("Deal. I'll text you the bus time unless I forget!", "Chốt nhé. Tôi sẽ nhắn giờ xe cho anh, trừ khi tôi quên!"),
  ),
  task: task({
    prompt: "Người bạn thân đang phân vân có nên nhận một công việc mới ở thành phố khác. Viết một tin nhắn (khoảng 90–120 từ) cho bạn ấy: điều gì sẽ xảy ra nếu bạn ấy nhận hoặc không nhận, bạn sẽ làm gì nếu bạn là bạn ấy, và một điều bạn ước (I wish…).",
    hints: [
      "Dùng câu điều kiện loại 1 (If + hiện tại đơn, will + V) cho điều có thể xảy ra thật.",
      "Dùng If I were you, I'd… để đưa lời khuyên.",
      "Thêm một câu loại 2 (If + quá khứ đơn, would + V) về điều bạn tưởng tượng.",
      "Thêm một câu với unless và một câu I wish + quá khứ đơn (had, were, could).",
    ],
    model: "Hi Mai, I've thought a lot about your job offer. If you take the job in Saigon, you'll earn a higher salary and you'll learn a lot from a bigger company. Of course, you'll miss your family, but you can fly home every month. If you stay here, nothing will change, and I think you'll feel bored soon. If I were you, I'd accept the offer. If I had a chance like that, I wouldn't wait! I wish I could come with you. But don't decide unless you feel ready. Talk to your parents first, because their support is important. Call me tonight if you want to talk. I'll always be here for you.",
    checklist: [
      "Có ít nhất 2 câu loại 1: If + hiện tại đơn, vế còn lại will / won't + V.",
      "Không có will trong mệnh đề if.",
      "Có câu If I were you, I'd… để khuyên.",
      "Có ít nhất 1 câu loại 2: If + quá khứ đơn, would + V.",
      "Có 1 câu unless, và sau unless là câu khẳng định.",
      "Có 1 câu I wish + quá khứ đơn (had, were, could), không dùng can hay will sau wish.",
    ],
    minWords: 90,
  }),
});
