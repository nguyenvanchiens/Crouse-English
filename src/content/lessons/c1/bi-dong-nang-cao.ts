import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "bi-dong-nang-cao",
  title: "Người ta nói rằng…",
  minutes: 35,
  lecture: {
    title: "Bị động tường thuật trong văn báo chí và học thuật",
    blocks: [
      p("Mở một tờ báo tiếng Anh, bạn sẽ gặp những câu như **The minister is alleged to have been receiving payments for years.** Mở một bài nghiên cứu, bạn gặp **It has long been assumed that...** Người Việt quen nói “người ta nói rằng…”, “nghe đồn là…”, rồi dịch thẳng thành **People say that…**. Câu đó không sai, nhưng nghe đời thường. Có thể bạn đã biết hai dạng cơ bản **It is said that...** và **He is said to have left...**. Bài này đi tiếp lên C1: các dạng nguyên mẫu phức tạp hơn sau động từ tường thuật, thì hoàn thành của chính động từ tường thuật trong văn học thuật, **There is thought to be...** và **Having been + V3**. Đây cũng là nền cho bài Văn phong học thuật ở chương sau."),
      table(
        ["Sự việc so với lúc đưa tin", "Chủ ngữ tự làm", "Chủ ngữ bị làm"],
        ["Cùng lúc", "He is said to own three hotels.", "The hostages are said to be held in the north."],
        ["Đang diễn ra", "The two sides are thought to be negotiating.", "(to be being V3: rất hiếm, nên tránh)"],
        ["Xảy ra trước", "He is reported to have left the country.", "He is reported to have been arrested."],
        ["Kéo dài đến trước lúc đưa tin", "She is alleged to have been receiving payments.", "(hầu như không dùng)"],
      ),
      p("Muốn chọn đúng, hãy tự hỏi **hai câu**. Câu một: sự việc xảy ra **cùng lúc** với lời nhận định, **trước** đó, hay **kéo dài** đến trước đó? Câu hai: chủ ngữ **tự làm** hay **bị** làm? Kết hợp hai câu trả lời là ra đúng một dạng: to V, to be V-ing, to have V3, to have been V-ing hoặc to have been V3."),
      ex("The minister is alleged to have been receiving payments from the contractor for several years.", "Vị bộ trưởng bị cáo buộc là đã nhận tiền của nhà thầu suốt nhiều năm.", "To have been V-ing: hành động kéo dài nhiều năm, trước thời điểm có lời cáo buộc."),
      ex("Several paintings are reported to have been stolen from the museum overnight.", "Có tin nhiều bức tranh đã bị lấy cắp khỏi bảo tàng trong đêm.", "Tranh không tự lấy cắp (bị động), và việc đó xảy ra trước lúc đưa tin: to have been + V3."),
      mistake("The files are alleged to have deleted before the audit.", "The files are alleged to have been deleted before the audit.", "Tiếng Việt “bị cho là đã xóa” không cho thấy ai xóa ai, nên học viên quên mất rằng hồ sơ là thứ bị xóa. Chủ ngữ chịu tác động thì phải có been: to have been deleted."),
      mistake("The suspect is believed to live in Laos since 2021.", "The suspect is believed to have been living in Laos since 2021.", "Tiếng Việt không chia thì nên “được cho là sống ở Lào từ năm 2021” nghe rất ổn. Nhưng since + mốc thời gian báo hiệu một việc kéo dài từ quá khứ đến nay, nên cần to have been V-ing."),
      p("Khi muốn nói **có tồn tại** một điều gì, dùng **There is / are + V3 + to be**: **There are thought to be fewer than a hundred tigers left in the wild.** Cấu trúc này giúp bạn tránh câu dài dòng It is thought that there are... và rất hay gặp trong báo cáo, sách giáo khoa."),
      table(
        ["Văn học thuật", "Sắc thái", "Ví dụ"],
        ["It has been suggested that...", "có ý kiến cho rằng (chưa chắc chắn)", "It has been suggested that sleep plays a role in memory formation."],
        ["It has long been assumed that...", "từ lâu vẫn mặc nhiên cho rằng (thường để phản bác)", "It has long been assumed that bilingual children learn more slowly."],
        ["It is widely acknowledged that...", "ai cũng thừa nhận", "It is widely acknowledged that the method has limitations."],
        ["It was subsequently found that...", "về sau người ta phát hiện", "It was subsequently found that the data had been miscalculated."],
      ),
      mistake("It has been suggested regular exercise to improve memory.", "It has been suggested that regular exercise improves memory.", "Học viên trộn hai khung, ghép It has been suggested với tân ngữ + to V. Với suggest và propose, dạng an toàn là It + (has been) suggested + that + mệnh đề. Mẫu Chủ ngữ + is suggested + to V có gặp, nhưng chủ yếu trong văn khoa học (X has been suggested to play a role in…); các động từ quen thuộc cho mẫu này là believe, think, say, report, allege, consider, know, expect, estimate."),
      p("Cuối cùng là **Having been + V3**: phân từ hoàn thành bị động, gói một việc **đã xảy ra với chủ ngữ** vào đầu câu. Quy tắc bắt buộc: người hoặc vật bị tác động ở vế đầu phải chính là **chủ ngữ của mệnh đề chính**."),
      ex("Having been rejected by three journals, the paper was finally published in a small online review.", "Sau khi bị ba tạp chí từ chối, bài báo cuối cùng được đăng trên một tạp chí trực tuyến nhỏ.", "Thứ bị từ chối là the paper, và the paper cũng là chủ ngữ của mệnh đề chính."),
      mistake("Having been warned twice, the regulator fined the company.", "Having been warned twice, the company was fined by the regulator.", "Câu sai nghe như chính cơ quan quản lý bị cảnh báo. Tiếng Việt “bị nhắc hai lần, cơ quan quản lý phạt công ty” vẫn hiểu được nhờ ngữ cảnh, nhưng tiếng Anh gán vế Having been V3 cho chủ ngữ đứng ngay sau dấu phẩy."),
      tip("Trong câu nói nhanh, **to have been** nhẹ hẳn đi, nghe như /təv bɪn/: is thought to have been /ɪz ˈθɔːt təv bɪn/. Chữ **said** đọc là /sed/, không đọc /seɪd/. Khi luyện, hãy đọc cả khối như một từ dài: alleged-to-have-been."),
      teacher("Khi chấm bài luận và bản tin của học viên, lỗi tôi gặp nhiều nhất không phải là quên bị động, mà là **quên been**. Các bạn viết is said to have destroyed khi tài liệu mới là thứ bị tiêu hủy. Cách tôi dặn: sau khi viết xong, gạch chân mọi chữ **to have** và hỏi lại: chủ ngữ này **tự làm** hay **bị làm**? Nếu bị làm mà chưa có been thì thêm vào. Mỗi sáng, đọc một bản tin tiếng Anh và tìm một câu is alleged to, is thought to, It has been suggested that; chép lại và đổi sang dạng khác. Năm phút mỗi ngày là đủ."),
      summary(
        "Sau **is said / believed / thought / reported / alleged**: to V, to be V-ing, **to have V3**, **to have been V-ing**, **to have been V3**. Chọn theo thời điểm và theo chủ động hay bị động.",
        "Nói về sự tồn tại: **There is / are thought to be...** gọn hơn It is thought that there are...",
        "Văn học thuật: **It has been suggested / argued that**, **It has long been assumed that**, **It was subsequently found that**.",
        "Với **suggest, propose**, dạng an toàn là **It has been suggested that...**; Chủ ngữ + is suggested to V chủ yếu chỉ gặp trong văn khoa học.",
        "**Having been + V3**: việc đã xảy ra với chủ ngữ; đối tượng bị tác động phải là chủ ngữ của mệnh đề chính.",
      ),
    ],
  },
  words: [
    word("allegedly", "/əˈledʒ.ɪd.li/", "bị cho là, theo lời cáo buộc", "The director allegedly accepted bribes from suppliers.", "al|leg|ed|ly", 1, "Đọc đủ bốn âm tiết, đuôi ed đọc là /ɪd/: a-LEDGE-id-ly."),
    word("reportedly", "/rɪˈpɔː.tɪd.li/", "theo như tin tức đưa", "The singer has reportedly cancelled her world tour.", "re|port|ed|ly", 1),
    word("suspect", "/ˈsʌs.pekt/", "nghi phạm", "The suspect is believed to have been living abroad for years.", "sus|pect", 0, "Danh từ nhấn âm đầu SUS-pect; động từ nhấn âm sau: /səˈspekt/."),
    word("fraud", "/frɔːd/", "sự gian lận, lừa đảo", "The manager is alleged to have committed fraud.", "fraud", 0, "Nguyên âm /ɔː/ dài, cuối từ là /d/ rõ ràng, không đọc “phờ-rau”."),
    word("casualty", "/ˈkæʒ.ju.əl.ti/", "thương vong, người bị thương hoặc thiệt mạng", "No casualties have been reported so far.", "cas|u|al|ty", 0),
    word("evacuate", "/ɪˈvæk.ju.eɪt/", "sơ tán", "Thousands of residents are reported to have been evacuated before the storm.", "e|vac|u|ate", 1),
    word("authority", "/ɔːˈθɒr.ə.ti/", "chính quyền, cơ quan chức năng", "The local authorities are expected to issue a warning.", "au|thor|i|ty", 1, "Âm /θ/ đặt lưỡi giữa hai hàm răng, không đọc thành /t/ hay /s/."),
    word("detain", "/dɪˈteɪn/", "tạm giữ, giam giữ", "Two men are being detained in connection with the robbery.", "de|tain", 1, "Trọng âm ở âm sau: de-TAIN; nguyên âm đôi /eɪ/, không đọc thành “đi-ten”."),
  ],
  exercises: [
    mc("c1-n11-1", "The minister is believed ___ the country last night.", ["to leave", "to have left", "leaving", "that he left"], 1, "Việc rời đi xảy ra tối qua, trước thời điểm người ta tin, nên dùng to have + V3."),
    fill("c1-n11-2", "It is ___ that the talks have broken down. (report)", ["reported"], "It + is + V3 + that: bị động khách quan. Report chuyển thành reported."),
    mc("c1-n11-3", "Câu nào là cách viết bị động đúng của: People think that the company is planning job cuts?", ["The company is thought to be planning job cuts.", "The company thinks to be planning job cuts.", "It is thought the company to be planning job cuts.", "The company is thought that it is planning job cuts."], 0, "Việc lên kế hoạch đang diễn ra, nên dùng is thought to be + V-ing."),
    fill("c1-n11-4", "The two climbers are feared to have ___ in the storm. (die)", ["died"], "Sự việc xảy ra trước lúc người ta lo sợ, nên dùng to have + V3: to have died."),
    reorder("c1-n11-5", "The house is said to be haunted.", "Bị động cá nhân: chủ ngữ + is said + to V. Ngôi nhà bị ám bây giờ, cùng lúc với lời đồn."),
    reorder("c1-n11-6", "There are thought to be no survivors.", "There are + thought + to be: cách nói về sự tồn tại (ở đây là không còn ai sống sót) trong bản tin, gọn hơn It is thought that there are no survivors."),
    listen("c1-n11-7", "The suspect is reported to have been arrested at the airport.", ["Nghi phạm đã trốn thoát qua sân bay.", "Cảnh sát sẽ bắt nghi phạm tại sân bay.", "Có tin nghi phạm đã bị bắt tại sân bay."], 2, "To have been arrested: đã bị bắt, xảy ra trước lúc đưa tin."),
    listen("c1-n11-8", "Thousands of residents are expected to be evacuated tonight.", ["Hàng nghìn cư dân đã được sơ tán tối qua.", "Hàng nghìn cư dân từ chối sơ tán.", "Chính quyền không có kế hoạch sơ tán cư dân.", "Dự kiến hàng nghìn cư dân sẽ được sơ tán tối nay."], 3, "Are expected to be evacuated: dự kiến sẽ được sơ tán, việc chưa xảy ra."),
    correct("c1-n11-9", "The paintings are believed to have stolen during the night.", ["The paintings are believed to have been stolen during the night."], "Tranh là thứ bị lấy cắp, nên phải là bị động: to have been + V3. Thiếu been, câu thành ra những bức tranh đã đi ăn trộm."),
    correct("c1-n11-10", "The official is thought to be accepting bribes since 2020.", ["The official is thought to have been accepting bribes since 2020."], "Since 2020 cho biết việc kéo dài từ quá khứ đến lúc có nhận định, nên dùng to have been + V-ing, không dùng to be V-ing."),
  ],
  speaking: [
    say("It is said that the old bridge is over two hundred years old.", "Người ta nói rằng cây cầu cũ đã hơn hai trăm năm tuổi."),
    say("The singer is believed to have been living abroad for years.", "Người ta tin rằng nữ ca sĩ đã sống ở nước ngoài nhiều năm nay."),
    say("The documents are alleged to have been destroyed.", "Có cáo buộc rằng các tài liệu đã bị tiêu hủy."),
  ],
  freeSpeaking: free(
    "Tell me about a news story you have followed recently. What is known for certain, and what is only believed or alleged?",
    "Kể lại một tin tức gần đây như một phóng viên: tách rõ điều đã được xác nhận và điều chỉ được cho là, bị cáo buộc. Dùng ít nhất ba dạng bị động tường thuật khác nhau, trong đó có một dạng to have been.",
    "Recently I've been following a story about a food company in my province. Around forty children are reported to have fallen ill after eating its products at a school canteen. The factory is believed to have been operating without a valid hygiene certificate for months, and two of its managers are alleged to have hidden the problem from inspectors. It has also been suggested that the local authorities were warned last year, but nobody has confirmed that yet. What we know for certain is that the factory has been closed, and all the children are said to be recovering well.",
  ),
  dialogue: dialogue(
    "Biên tập một bản tin nóng",
    "Tại tòa soạn một báo điện tử tiếng Anh ở Hà Nội, chị Hạnh, biên tập viên, cùng phóng viên trẻ Duy sửa bản tin về vụ cháy xưởng ở Bình Dương trước khi đăng.",
    { A: "Chị Hạnh, biên tập viên", B: "Duy, phóng viên" },
    A("Duy, your draft says: people say the fire started in the warehouse. We can't publish that.", "Duy, bản nháp của em viết: người ta nói đám cháy bắt đầu từ nhà kho. Mình không đăng thế được."),
    B("Why not? That's exactly what the witnesses told me.", "Sao vậy chị? Đó đúng là điều nhân chứng kể với em mà."),
    A("Because it sounds like gossip. Write: the fire is believed to have started in the warehouse.", "Vì nghe như tin đồn. Em viết: đám cháy được cho là đã bắt đầu từ nhà kho."),
    B("Got it. And the workers? The police are still interviewing them.", "Em hiểu rồi. Còn công nhân thì sao? Cảnh sát vẫn đang lấy lời khai họ."),
    A("Then: police are understood to be questioning several workers. It's happening right now, so use to be plus ing.", "Vậy thì: theo những gì được biết, cảnh sát đang thẩm vấn một số công nhân. Việc đang diễn ra nên dùng to be cộng đuôi ing."),
    B("What about the owner? Some people say he's been ignoring safety warnings for months.", "Còn chủ xưởng? Có người nói ông ấy đã phớt lờ các cảnh báo an toàn suốt mấy tháng nay."),
    A("Careful. Write: the owner is alleged to have been ignoring safety warnings for months. Nothing has been proven yet.", "Cẩn thận nhé. Em viết: chủ xưởng bị cáo buộc là đã phớt lờ cảnh báo an toàn suốt nhiều tháng. Chưa có gì được chứng minh cả."),
    B("Okay. One worker also told me the fire alarm had been switched off weeks before the fire.", "Vâng. Một công nhân còn kể với em là chuông báo cháy đã bị tắt từ nhiều tuần trước vụ cháy."),
    A("If it's unconfirmed: the alarm is understood to have been disabled some weeks earlier. The alarm didn't switch itself off, so you need been.", "Nếu chưa được xác nhận thì viết: theo những gì được biết, chuông báo cháy đã bị vô hiệu hóa từ vài tuần trước. Chuông không tự tắt, nên phải có been."),
    B("Understood. And the insurance company thinks the damage is around two million dollars.", "Em hiểu. Còn công ty bảo hiểm cho rằng thiệt hại khoảng hai triệu đô la."),
    A("So: the damage is estimated to be around two million dollars. Now it reads like real news.", "Vậy viết: thiệt hại ước tính vào khoảng hai triệu đô la. Giờ thì nghe ra bản tin thật rồi đấy."),
    B("Thanks. I'll send you the revised version in ten minutes.", "Em cảm ơn chị. Mười phút nữa em gửi bản đã sửa."),
  ),
  dialogueQuestions: [
    listenQ("c1-n11-d1", "Why does Hạnh refuse to publish Duy's first version of the sentence?", "Why not? That's exactly what the witnesses told me. Because it sounds like gossip. Write: the fire is believed to have started in the warehouse.", ["The information is false.", "The wording sounds like gossip rather than news.", "The witnesses asked not to be named.", "The police have banned the story."], 1, "Because it sounds like gossip: câu People say nghe như tin đồn, không khách quan như bản tin."),
    mc("c1-n11-d2", "According to the insurance company, how much damage did the fire cause?", ["Around two million dollars", "Around two hundred thousand dollars", "More than five million dollars", "It has not given a figure yet."], 0, "The insurance company thinks the damage is around two million dollars, được viết lại thành is estimated to be around two million dollars."),
    mc("c1-n11-d3", "Why does Hạnh insist on writing “is alleged to have been ignoring”?", ["The owner has already been found guilty.", "The owner asked the newspaper to use polite language.", "The claim about the owner has not been proven.", "The police told her to use that phrase."], 2, "Nothing has been proven yet: lời cáo buộc chưa được chứng minh, nên dùng is alleged to để không khẳng định như một sự thật."),
  ],
  reading: reading({
    title: "Sinking ground: groundwater use and land subsidence in the Mekong Delta",
    text: `Abstract. It has long been assumed that rising sea levels represent the greatest threat to the Mekong Delta. Over the past decade, however, it has been suggested that a more immediate danger comes from below: the delta is thought to be sinking, in some areas by more than two centimetres a year. This study examines the relationship between groundwater extraction and land subsidence in three provinces between 2015 and 2023. Using satellite measurements and records from more than four hundred wells, we find that areas of intensive pumping are sinking significantly faster than areas where extraction is limited. The results suggest that subsidence, rather than sea-level rise, is likely to be the main driver of flooding in the delta over the coming decades.

Discussion. Our findings are broadly consistent with earlier research. Subsidence in the delta is estimated to have accelerated since the 1990s, when the expansion of rice farming and aquaculture led to a sharp increase in groundwater use. Until recently, however, the process was believed to be relatively slow and evenly distributed. Our data do not support that view. In the most affected districts, the ground appears to have been sinking at up to four times the regional average, and several towns are considered to be at serious risk of permanent flooding within fifty years.

Two limitations should be acknowledged. First, some of the wells in our sample are known to have been drilled without a licence, and their records are therefore incomplete. It is possible that extraction in these areas has been underestimated. Second, subsidence is also affected by the weight of new buildings and by the loss of sediment that was formerly carried by the river. The construction of dams upstream is widely believed to have reduced this supply, although the precise contribution of each factor is difficult to measure.

Having been identified as a national priority, the problem is now receiving far more attention from policymakers. Several measures have been proposed, including stricter licensing of wells and investment in rainwater storage. It has been argued that such measures could slow subsidence considerably within a decade, but there is thought to be little chance of reversing the damage that has already occurred.

Further research is needed on the social consequences of subsidence. Thousands of families are reported to have left the most vulnerable districts already, yet little is known about where they have gone or how they are coping. Without such data, it will be difficult for the authorities to plan an effective response.`,
    glossary: [
      ["subsidence", "sự sụt lún (đất)"],
      ["extraction", "sự khai thác (nước ngầm)"],
      ["aquaculture", "nuôi trồng thủy sản"],
      ["evenly distributed", "phân bố đều"],
      ["sediment", "phù sa, trầm tích"],
      ["upstream", "ở thượng nguồn"],
      ["licensing", "việc cấp phép"],
      ["vulnerable", "dễ bị tổn thương"],
    ],
    questions: [
      mc("c1-n11-r1", "What is the main finding of the study?", ["Sea-level rise is making the delta sink faster than expected.", "Areas with intensive groundwater pumping are sinking faster, and subsidence may be the main cause of future flooding.", "Unlicensed wells are the only cause of subsidence.", "The delta has stopped sinking since new policies were introduced."], 1, "Phần Abstract: areas of intensive pumping are sinking significantly faster..., subsidence... is likely to be the main driver of flooding."),
      mc("c1-n11-r2", "Why do the authors think that extraction may have been underestimated in some areas?", ["Some wells were drilled without a licence, so their records are incomplete.", "Satellite measurements were not available.", "Farmers refused to take part in the study.", "The study lasted only one year."], 0, "Some of the wells... are known to have been drilled without a licence, and their records are therefore incomplete."),
      mc("c1-n11-r3", "What does “Our data do not support that view” tell us about the earlier belief that subsidence was slow and even?", ["The study confirmed it.", "The study was unable to test it.", "The study found evidence against it.", "Nobody had ever held that belief."], 2, "Not support that view: số liệu mới đi ngược lại quan điểm cũ; ở một số huyện đất lún nhanh gấp bốn lần mức trung bình."),
      fill("c1-n11-r4", "According to the Discussion, dams upstream are widely believed to ___ reduced the supply of sediment.", ["have"], "Việc xây đập đã làm giảm phù sa trước thời điểm nhận định, nên dùng to have + V3: are widely believed to have reduced."),
      mc("c1-n11-r5", "How would you describe the authors' tone when they present their conclusions?", ["Emotional and alarmist", "Humorous and informal", "Completely certain about every claim", "Cautious: they acknowledge limitations and avoid overstating certainty"], 3, "Các tác giả dùng suggest, is likely to, appears to have been và có hẳn một đoạn nêu hạn chế (Two limitations should be acknowledged): giọng văn thận trọng."),
      mc("c1-n11-r6", "In the last paragraph, the “most vulnerable districts” are the districts that are", ["the wealthiest", "the most easily harmed", "the most crowded", "the most remote"], 1, "Vulnerable: dễ bị tổn thương. Ở đây là những huyện dễ bị ngập và sụt lún nhất."),
    ],
  }),
  task: task({
    prompt: "Hãy viết một bản tin (khoảng 230–280 từ) bằng tiếng Anh về một sự việc có thật hoặc tưởng tượng (bão lũ, cháy, một vụ gian lận...) theo văn phong báo chí khách quan. Đưa những thông tin chưa được xác nhận bằng bị động tường thuật, không nói ai là người nói.",
    hints: [
      "Mở đầu bằng sự việc chính, rồi đưa thông tin chưa được xác nhận bằng is reported to, is believed to, is thought to, is alleged to.",
      "Với mỗi câu, tự hỏi: cùng lúc, trước, hay kéo dài đến trước? Chủ ngữ tự làm hay bị làm? Chọn to V, to have V3, to have been V-ing hay to have been V3.",
      "Dùng ít nhất một câu There are thought to be..., một câu It has been suggested that... và một mệnh đề Having been + V3.",
      "Kết bài bằng dự báo và lời khuyến cáo của chính quyền.",
    ],
    model: "Hundreds evacuated as floods hit Da Nang\n\nHundreds of residents were evacuated from their homes in Da Nang last night after torrential rain caused the worst flooding the city has seen in a decade. At least two people are reported to have died, and several others are believed to be missing. There are thought to be more than a thousand households without electricity this morning.\n\nRescue teams are understood to be searching the worst-affected districts, where the water is said to have risen by almost a metre in less than three hours. One elderly man is reported to have been rescued from the roof of his house shortly before dawn. Having been trapped there for most of the night, he was taken to hospital suffering from cold and exhaustion.\n\nThe cause of the disaster is still unclear. It has been suggested that a blocked drainage system made the flooding worse, although officials have not yet confirmed this. A local construction company is alleged to have been dumping waste into the main canal for several months, and a number of complaints from residents are known to have been ignored. The company has denied any wrongdoing.\n\nThe city authorities, who had been warned about the storm three days in advance, have been criticised for failing to open emergency shelters sooner. It has also been argued that rapid construction on low-lying land has left many neighbourhoods increasingly exposed to flooding.\n\nThe total damage is estimated to exceed five million dollars. The storm is expected to move north later today, and residents have been urged to stay indoors until further notice.",
    checklist: [
      "Có ít nhất bốn dạng khác nhau sau be + V3: to V, to be V-ing, to have V3, to have been V-ing, to have been V3.",
      "Có ít nhất một câu There is / are + V3 + to be.",
      "Có ít nhất một câu It has been suggested / argued that + mệnh đề.",
      "Có một mệnh đề Having been + V3, và người chịu tác động chính là chủ ngữ của mệnh đề chính.",
      "Không dùng People say that; giọng văn khách quan, không khẳng định điều chưa được xác nhận.",
    ],
    minWords: 230,
  }),
});
