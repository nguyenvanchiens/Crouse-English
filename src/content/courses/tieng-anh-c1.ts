import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../builders";
import nTinhLuocVaThayThe from "../lessons/c1/tinh-luoc-va-thay-the";
import nTuongLaiNangCao from "../lessons/c1/tuong-lai-nang-cao";
import nCauTaoTu from "../lessons/c1/cau-tao-tu";
import nDieuKienNangCao from "../lessons/c1/dieu-kien-nang-cao";
import nBangThaiCach from "../lessons/c1/bang-thai-cach";
import nDongTuTuongThuat from "../lessons/c1/dong-tu-tuong-thuat";
import nBiDongNangCao from "../lessons/c1/bi-dong-nang-cao";
import nMenhDeQuanHeNangCao from "../lessons/c1/menh-de-quan-he-nang-cao";
import nTrangTuBinhLuan from "../lessons/c1/trang-tu-binh-luan";
import nVietLuanVaTomTat from "../lessons/c1/viet-luan-va-tom-tat";
import nTuDeNhamVaNgonNguUocLuong from "../lessons/c1/tu-de-nham-va-ngon-ngu-uoc-luong";
import { chapter } from "../review";
import type { Course, Exercise } from "../types";

const noiTuNhien = lesson({
  slug: "noi-tu-nhien",
  title: "Nói tự nhiên như người bản xứ",
  minutes: 35,
  lecture: {
    title: "Cụm động từ nhiều nghĩa và kết hợp từ mạnh",
    blocks: [
      p("Hãy hình dung bạn viết báo cáo cho sếp người Úc: “The agreement with the distributor was not successful, and this caused many changes in our plans.” Câu đúng ngữ pháp, nhưng một người bản xứ sẽ viết: “The deal **fell through**, and that **brought about** sweeping changes to our plans.” Ngắn hơn, sắc hơn, và nghe như người thật đang nói. Ở trình độ C1, khoảng cách giữa “đúng” và “tự nhiên” chính là thứ bài này muốn lấp đầy."),
      p("Ở B1, các bạn đã học cụm động từ đời thường (turn off, look for, give up) và quy tắc đại từ đứng giữa (turn it off). Bài này đi tiếp hai bước. Thứ nhất, **cụm động từ mang nghĩa trừu tượng hoặc nhiều nghĩa**, nhìn từng chữ không đoán được. Thứ hai, **kết hợp từ mạnh** (strong collocations): những cặp từ người bản xứ luôn dùng cùng nhau, khiến câu chính xác và giàu sắc thái hơn."),
      table(
        ["Cụm động từ", "Nghĩa", "Ví dụ", "Ghi chú"],
        ["bring about", "gây ra, tạo ra (thay đổi)", "The new law brought about sweeping changes.", "Tân ngữ thường là change, reform, improvement"],
        ["fall through", "đổ bể, không thành", "The deal fell through at the last minute.", "Nội động từ: không có tân ngữ, không có bị động"],
        ["set out", "trình bày rõ ràng; bắt tay làm (set out to + V)", "The report sets out three options. She set out to change the system.", "Còn có nghĩa là lên đường"],
        ["come across as", "tạo ấn tượng là, có vẻ là", "He comes across as arrogant, but he's just shy.", "Khác hẳn come across (tình cờ thấy)"],
        ["play down", "xem nhẹ, giảm nhẹ mức độ", "The company played down the risks.", "Trái nghĩa: play up (thổi phồng)"],
        ["live up to", "đáp ứng được (kỳ vọng)", "The sequel didn't live up to expectations.", "Không tách được"],
      ),
      ex("The merger fell through when the banks withdrew their support.", "Thương vụ sáp nhập đổ bể khi các ngân hàng rút lại sự hỗ trợ.", "Fall through tự nó đã mang nghĩa “bị đổ bể”, nên không cần và cũng không thể chia bị động."),
      mistake("The project was fallen through because of the budget.", "The project fell through because of the budget.", "Tiếng Việt nói “dự án bị đổ bể”, chữ “bị” khiến người Việt nghĩ ngay đến bị động. Nhưng fall through là nội động từ, không có tân ngữ nên không có dạng bị động. Tương tự: The meeting took place, không viết was taken place."),
      ex("She comes across as quite reserved, but she's actually very warm.", "Cô ấy trông có vẻ khá kín đáo, nhưng thật ra rất ấm áp.", "Come across một mình là tình cờ thấy (I came across an old photo). Thêm as, nghĩa đổi hẳn thành tạo ấn tượng."),
      mistake("He comes across very confident in interviews.", "He comes across as very confident in interviews.", "Tiếng Việt nói “trông có vẻ tự tin” không cần giới từ, nên người học hay bỏ as. Muốn nói về ấn tượng thì luôn là come across as + tính từ hoặc danh từ."),
      ex("The minister tried to play down the scale of the problem, but the figures spoke for themselves.", "Bộ trưởng cố xem nhẹ quy mô của vấn đề, nhưng số liệu đã nói lên tất cả."),
      p("Kết hợp từ là những từ người bản xứ **quen dùng cùng nhau**, không theo lý do logic nào. Tiếng Anh nói **heavy** rain chứ không nói big rain, nói a **heavy** smoker chứ không nói a strong smoker. Ở C1, bạn cần thêm những kết hợp **mạnh**, để một cụm ngắn thay cho cả câu giải thích."),
      table(
        ["Kết hợp mạnh", "Nghĩa", "Ví dụ"],
        ["bitterly disappointed", "vô cùng thất vọng", "Fans were bitterly disappointed by the result."],
        ["a far cry from", "khác xa với", "The hotel was a far cry from the photos online."],
        ["pose a threat / a risk (to)", "gây ra mối đe dọa, rủi ro", "Rising sea levels pose a threat to the delta."],
        ["draw a distinction (between)", "phân biệt rõ", "We must draw a distinction between fact and opinion."],
        ["sweeping changes / reforms", "thay đổi sâu rộng", "The new CEO announced sweeping changes."],
        ["deeply rooted", "ăn sâu, bám rễ", "The problem is deeply rooted in our culture."],
      ),
      table(
        ["Lỗi dịch từng chữ", "Cách nói tự nhiên", "Vì sao sai"],
        ["do a mistake", "make a mistake", "“Làm lỗi” dịch thành do; mistake luôn đi với make"],
        ["make a photo", "take a photo", "“Chụp ảnh” không phải “làm ảnh”; photo đi với take"],
        ["big rain", "heavy rain", "“Mưa to” dịch từng chữ; rain đi với heavy"],
        ["a strong smoker", "a heavy smoker", "Mức độ của một thói quen dùng heavy"],
        ["heavily disappointed", "bitterly disappointed / deeply disappointed", "“Thất vọng nặng nề” dịch từng chữ"],
      ),
      mistake("Plastic waste causes a serious threat to marine life.", "Plastic waste poses a serious threat to marine life.", "Tiếng Việt nói “gây ra mối đe dọa” nên người Việt chọn cause. Người bản xứ gần như luôn nói pose a threat, pose a risk, pose a challenge; cause thường đi với problems, damage, delays."),
      tip("Mẹo phát âm: trong cụm động từ, trọng âm thường rơi vào **tiểu từ**: bring a**BOUT**, fall **THROUGH**, play **DOWN**. Với fell through, đặt đầu lưỡi giữa hai hàm răng cho âm /θ/, đừng đọc thành “phen tru”. Khi nói come across as, nối âm liền: /kʌm.əˈkrɒs.əz/."),
      tip("Mỗi lần gặp một từ mới, hãy ghi **cả cụm** đi kèm: không ghi threat, mà ghi **pose a serious threat to**; không ghi disappointed, mà ghi **bitterly disappointed**. Khi không chắc, tra từ điển kết hợp từ (collocation dictionary) trước khi viết email quan trọng."),
      teacher("Khi đứng lớp, tôi hay gặp một nghịch lý: học viên giỏi ngữ pháp nhất lại thường nói cứng nhất, vì các bạn quen dịch từng chữ từ tiếng Việt. Cách chữa của tôi rất đơn giản. **Mỗi tuần chọn hai cụm động từ và ba kết hợp từ mạnh** trong bài báo mình đọc, chép lại nguyên câu chứa chúng, rồi đặt thêm hai câu về chính đời mình: công việc, gia đình, chuyến đi gần nhất. Cuối tuần, lấy một email mình đã viết, tìm những chỗ đang dịch từng chữ như cause a threat hay very disappointed, và tự hỏi: người bản xứ sẽ nói gì ở đây? Làm đều đặn, các bạn sẽ nghe chính mình khác hẳn."),
      summary(
        "Cụm động từ C1 thường mang **nghĩa trừu tượng**: bring about (gây ra), fall through (đổ bể), set out (trình bày; bắt tay làm), play down (xem nhẹ), live up to (đáp ứng kỳ vọng).",
        "Fall through là **nội động từ**: không có bị động, không viết was fallen through.",
        "**Come across as** + tính từ hoặc danh từ là tạo ấn tượng; thiếu as thì cả nghĩa lẫn ngữ pháp đều sai.",
        "Học **kết hợp từ mạnh** theo cụm: bitterly disappointed, a far cry from, pose a threat, draw a distinction, sweeping changes.",
        "Tránh lỗi dịch từng chữ: make a mistake, take a photo, heavy rain, a heavy smoker.",
      ),
    ],
  },
  words: [
    word("collocation", "/ˌkɒl.əˈkeɪ.ʃən/", "kết hợp từ (các từ thường đi cùng nhau)", "Heavy rain is a common collocation in English.", "col|lo|ca|tion", 2),
    word("idiomatic", "/ˌɪd.i.əˈmæt.ɪk/", "tự nhiên, đúng kiểu người bản xứ", "Her English is fluent and highly idiomatic.", "id|i|o|mat|ic", 3),
    word("sweeping", "/ˈswiː.pɪŋ/", "sâu rộng, toàn diện (thay đổi, cải cách)", "The new government promised sweeping reforms of the tax system.", "sweep|ing", 0),
    word("bitterly", "/ˈbɪt.ə.li/", "vô cùng, cay đắng (thất vọng, hối tiếc)", "The players were bitterly disappointed to lose in the final minute.", "bit|ter|ly", 0, "Đi với disappointed, regret, cold, complain. Không nói bitterly happy."),
    word("pose", "/pəʊz/", "đặt ra, gây ra (mối đe dọa, vấn đề, câu hỏi)", "Rising sea levels pose a serious threat to the Mekong Delta.", "pose", 0, "Đi với threat, risk, problem, challenge, question. Âm cuối là /z/, rung dây thanh."),
    word("connotation", "/ˌkɒn.əˈteɪ.ʃən/", "sắc thái nghĩa, hàm nghĩa", "“Cheap” often has a negative connotation, while “affordable” does not.", "con|no|ta|tion", 2),
    word("literal", "/ˈlɪt.ər.əl/", "theo nghĩa đen", "The literal meaning of “fall through” tells you nothing about a failed deal.", "lit|er|al", 0),
  ],
  exercises: [
    mc("c1-1-1", "In the first meeting, the new director ___ as rather cold, but the team soon grew to like her.", ["came up", "came across", "came into", "came about"], 1, "Come across as + tính từ: tạo ấn tượng là. Came about là xảy ra, came up là được nhắc đến, came into là thừa hưởng."),
    mc("c1-1-2", "Rising sea levels ___ a serious threat to farming in the Mekong Delta.", ["make", "do", "pose", "give"], 2, "Threat đi với pose: pose a threat to. Tiếng Việt “gây ra mối đe dọa” dễ làm ta chọn sai động từ."),
    fill("c1-1-3", "The new CEO ___ about sweeping changes in the company's culture. (bring, quá khứ)", ["brought"], "Bring about: gây ra, tạo ra thay đổi. Quá khứ của bring là brought."),
    fill("c1-1-4", "Everyone was ___ disappointed when the peace talks collapsed. (vô cùng)", ["bitterly", "deeply", "extremely", "terribly", "hugely", "profoundly", "incredibly"], "Bitterly disappointed hoặc deeply disappointed là kết hợp từ mạnh. Heavily disappointed là lỗi dịch từng chữ."),
    reorder("c1-1-5", "The minister tried to play it down.", "Play down tách được, nên đại từ it đứng giữa: play it down, nghĩa là xem nhẹ chuyện đó."),
    reorder("c1-1-6", "Their plans to expand abroad fell through.", "Fall through là nội động từ, đứng cuối câu và không có tân ngữ."),
    listen("c1-1-7", "The hotel was a far cry from the photos on its website.", ["Khách sạn khác xa những bức ảnh trên trang web của nó.", "Khách sạn đẹp đúng như ảnh trên trang web.", "Khách sạn ở rất xa so với địa chỉ trên trang web."], 0, "A far cry from: khác xa với, thường mang ý kém hơn mong đợi. Không liên quan đến khoảng cách hay tiếng khóc."),
    listen("c1-1-8", "The film didn't live up to the hype, but the soundtrack was brilliant.", ["Bộ phim hay hơn nhiều so với lời quảng cáo.", "Bộ phim không hay như lời quảng cáo, nhưng nhạc phim thì tuyệt.", "Nhạc phim không hay bằng bộ phim."], 1, "Live up to the hype: đáp ứng được sự kỳ vọng do quảng cáo tạo ra. Didn't live up to: không được như kỳ vọng."),
    correct("c1-1-9", "We did a serious mistake when we ignored the customers' complaints.", "We made a serious mistake when we ignored the customers' complaints.", "Mistake luôn đi với make. Tiếng Việt “làm lỗi” khiến nhiều bạn chọn do."),
    correct("c1-1-10", "The agreement was fallen through at the last minute.", "The agreement fell through at the last minute.", "Fall through là nội động từ, không có dạng bị động. Chữ “bị” trong “bị đổ bể” không có nghĩa là phải dùng bị động."),
  ],
  speaking: [
    say("The deal fell through at the last minute, and we were bitterly disappointed.", "Thương vụ đổ bể vào phút chót, và chúng tôi vô cùng thất vọng."),
    say("Rising costs pose a serious threat to small businesses.", "Chi phí tăng cao đang là mối đe dọa nghiêm trọng với các doanh nghiệp nhỏ."),
    say("He comes across as confident, but he's actually quite shy.", "Anh ấy trông có vẻ tự tin, nhưng thật ra khá nhút nhát."),
  ],
  freeSpeaking: free(
    "Tell me about a plan or project that didn't go the way you expected. What happened, and what did you learn?",
    "Kể về một kế hoạch hay dự án không diễn ra như bạn mong đợi: chuyện gì đã xảy ra, bạn cảm thấy thế nào và rút ra bài học gì. Dùng ít nhất ba cụm động từ hoặc kết hợp từ mạnh của bài.",
    "A couple of years ago, a colleague and I set out to launch a small English club for our company. We had a sponsor, a timetable and plenty of enthusiasm, but at the last minute the funding fell through. I was bitterly disappointed, and to be honest, I think I came across as quite negative in the meeting where we heard the news. Looking back, though, the setback brought about something useful. We learned to draw a clear distinction between what we could control and what we couldn't, and the next time we planned a project, we built in a backup budget from the start.",
  ),
  dialogue: dialogue(
    "Khi thương vụ đổ bể",
    "Sarah, trưởng dự án người Úc, hỏi Minh, trưởng nhóm kinh doanh ở TP.HCM, về hợp đồng phân phối với một công ty Singapore vừa đổ bể vào phút chót. Hai người cùng tìm nguyên nhân và bàn cách viết báo cáo cho ban giám đốc.",
    { A: "Sarah (trưởng dự án)", B: "Minh (trưởng nhóm kinh doanh)" },
    A("Minh, I hear the deal with the Singapore distributor fell through. What happened?", "Minh này, tôi nghe nói hợp đồng với nhà phân phối Singapore đổ bể rồi. Chuyện gì vậy?"),
    B("Their board pulled out at the last minute. Honestly, we're all bitterly disappointed.", "Hội đồng quản trị bên họ rút lui vào phút chót. Thật lòng mà nói, cả nhóm đều vô cùng thất vọng."),
    A("I can imagine. Did they give a reason, or did they just play it down?", "Tôi hiểu. Họ có đưa ra lý do không, hay chỉ nói giảm nhẹ cho qua?"),
    B("They played it down, but the real issue was price. A rival supplier offered terms that were a far cry from ours.", "Họ nói giảm nhẹ, nhưng vấn đề thực sự là giá. Một nhà cung cấp đối thủ đưa ra điều kiện khác xa của mình."),
    A("So it wasn't about quality. How did our team come across in the final meeting?", "Vậy là không phải chuyện chất lượng. Đội mình tạo ấn tượng thế nào trong buổi họp cuối?"),
    B("Confident, I think, although Lan felt I came across as a little defensive when they raised the delivery issue.", "Tôi nghĩ là tự tin, dù Lan thấy tôi có vẻ hơi phòng thủ khi họ nêu chuyện giao hàng."),
    A("That's worth knowing. In the report, I'd like you to set out exactly what went wrong.", "Điều đó đáng lưu ý đấy. Trong báo cáo, tôi muốn anh trình bày rõ chính xác điều gì đã không ổn."),
    B("Of course. I'll also draw a distinction between problems we could control and ones we couldn't.", "Tất nhiên. Tôi cũng sẽ phân biệt rõ những vấn đề mình kiểm soát được và những vấn đề không kiểm soát được."),
    A("Good. Rising freight costs pose a real threat to our other contracts, too.", "Tốt. Cước vận chuyển tăng cũng đang đe dọa thật sự các hợp đồng khác của mình."),
    B("Agreed. If we don't bring about some changes in our pricing, the same thing could happen again.", "Đồng ý. Nếu mình không tạo ra thay đổi nào trong cách định giá, chuyện này có thể lặp lại."),
    A("Then let's set out to fix that this quarter. Can you send me the report by Friday?", "Vậy thì mình bắt tay giải quyết việc đó ngay trong quý này. Anh gửi tôi báo cáo trước thứ Sáu được không?"),
    B("Absolutely. You'll have a first draft by Thursday.", "Chắc chắn rồi. Thứ Năm chị sẽ có bản nháp đầu tiên."),
  ),
  dialogueQuestions: [
    listenQ("c1-1-d1", "According to Minh, why did the deal really fail?", "They played it down, but the real issue was price. A rival supplier offered terms that were a far cry from ours.", ["The distributor disliked the quality of the product.", "A competitor offered much better terms.", "The delivery was late.", "The distributor's board never read the proposal."], 1, "A far cry from ours: khác xa điều kiện của mình, tức là đối thủ đưa ra điều kiện tốt hơn nhiều. Played it down: bên kia chỉ nói giảm nhẹ lý do."),
    mc("c1-1-d2", "What does Lan's comment suggest about Minh's performance in the final meeting?", ["He was rude to the distributor.", "He forgot to mention the delivery issue.", "He sounded more defensive than he intended.", "He was too relaxed about the price."], 2, "Lan felt I came across as a little defensive: Minh tự thấy mình tự tin, nhưng người khác thấy anh có vẻ phòng thủ."),
    mc("c1-1-d3", "What does Sarah ask Minh to do in the report?", ["Explain clearly what went wrong", "Propose a new price for the Singapore market", "Play down the loss for the board", "Blame the distributor for the failure"], 0, "Set out exactly what went wrong: trình bày rõ chính xác điều gì đã không ổn."),
  ],
  reading: reading({
    title: "The company words keep",
    text: `In 1957 the British linguist J. R. Firth offered a line that language teachers still quote: "You shall know a word by the company it keeps." At the time it sounded like a clever aphorism. Nearly seventy years later, it looks more like a prediction. Modern dictionaries are built from corpora, vast searchable collections of real speech and writing, and what those collections reveal again and again is that words do not float freely. They travel in pairs and small groups, and native speakers recognise these groupings instantly, even if they could never explain them.

Consider rain. English speakers talk about heavy rain, never big rain, although a big storm is perfectly acceptable. A smoker can be heavy but not strong; a disappointment can be bitter; a new technology poses a threat rather than causing one. None of this follows from grammar or logic. It is simply the way the language has settled, and learners who ignore it produce sentences that are correct in every technical sense yet strike listeners as slightly odd.

A simple thought experiment shows how much this matters. Imagine giving an examiner two sets of essays that have been matched for grammatical accuracy and range of vocabulary, so that the only systematic difference is the proportion of natural collocations. Most experienced examiners would mark the second group, which contains far fewer, lower, and describe those essays as "stilted" or "hard to follow", even without being able to point to a single error. Collocation, in other words, is not a decorative extra but part of what readers experience as fluency.

Phrasal verbs present a related but different challenge. Many learners avoid them, partly because a single verb can carry several unrelated meanings. Set out can mean to begin a journey, to present information in an organised way, or to begin a task with a clear aim. Come across describes finding something by chance, but come across as describes the impression a person makes. Learners who rely on formal single-word equivalents are rarely misunderstood, but they tend to sound as if they are reading from a report, which is fine in a report and rather less fine over coffee.

What, then, should learners do? The most effective strategy, and also the least glamorous, is to stop learning words in isolation. Instead of noting down threat, note down pose a serious threat to. Instead of memorising a list of phrasal verbs, collect them from articles and podcasts together with the sentence in which they appeared. It is slower at first. But a learner who takes this approach is building exactly what native speakers have: not a dictionary in the head, but a memory of how words behave in company.`,
    glossary: [
      ["aphorism", "câu cách ngôn"],
      ["corpora", "kho ngữ liệu (số ít: corpus)"],
      ["systematic", "có hệ thống, không phải ngẫu nhiên"],
      ["glamorous", "hào nhoáng, hấp dẫn"],
      ["in isolation", "một cách riêng lẻ, tách khỏi ngữ cảnh"],
    ],
    questions: [
      mc("c1-1-r1", "What is the main point of the article?", ["Grammar matters less than pronunciation for fluency.", "Knowing which words naturally go together is central to sounding fluent.", "Phrasal verbs should be avoided in formal writing.", "Modern dictionaries are less reliable than older ones."], 1, "Cả bài xoay quanh ý: biết từ nào đi với từ nào (collocation) là một phần cốt lõi của sự trôi chảy."),
      mc("c1-1-r2", "In the thought experiment, how do the two sets of essays differ?", ["In grammatical accuracy", "In the range of vocabulary", "In length", "In the proportion of natural collocations"], 3, "The only systematic difference is the proportion of natural collocations: hai nhóm bài được cân bằng về ngữ pháp và vốn từ."),
      mc("c1-1-r3", "What can be inferred about the essays in the second group?", ["Examiners found them unnatural without always being able to say why.", "They contained more grammar mistakes.", "They were written by native speakers.", "They used too many phrasal verbs."], 0, "Even without being able to point to a single error: giám khảo thấy bài gượng gạo dù không chỉ ra được lỗi cụ thể."),
      fill("c1-1-r4", "In paragraph three, the word ___ describes writing that sounds unnatural and too formal. (một từ)", ["stilted"], "Stilted: cứng nhắc, gượng gạo. Nghĩa này đoán được từ cụm đi kèm: hard to follow."),
      mc("c1-1-r5", "What is the writer's attitude to learning words in collocations?", ["It is fashionable but ineffective.", "It suits only advanced learners.", "It is slow and unexciting at first, but worth the effort.", "It should replace grammar study entirely."], 2, "The least glamorous và It is slower at first cho thấy người viết thừa nhận cách này chậm và không hấp dẫn, nhưng vẫn coi là hiệu quả nhất."),
    ],
  }),
  task: task({
    prompt: "Bạn là trưởng nhóm kinh doanh. Một thương vụ quan trọng vừa đổ bể. Hãy viết một bản báo cáo ngắn (230–280 từ) gửi ban giám đốc: trình bày nguyên nhân, rủi ro sắp tới và đề xuất thay đổi. Chia báo cáo thành các đề mục.",
    hints: [
      "Đặt tiêu đề và chia đề mục: mục đích, nguyên nhân, rủi ro, đề xuất.",
      "Dùng ít nhất ba cụm động từ của bài (set out, fall through, play down, come across as, bring about) đúng nghĩa và đúng dạng.",
      "Dùng ít nhất ba kết hợp từ mạnh: pose a threat, a far cry from, draw a distinction, bitterly disappointed.",
      "Giữ văn phong trung tính, rõ ràng: báo cáo gửi cấp trên, không phải tin nhắn cho bạn bè.",
    ],
    model:
      "Report: the failed Singapore distribution deal\n\nPurpose\nThis report sets out the main reasons why our proposed agreement with a Singapore distributor fell through in March, and recommends changes that could prevent a similar outcome.\n\nWhat went wrong\nAlthough negotiations began well, the distributor's board withdrew at the final stage. Their official explanation played down the role of price, but it later emerged that a rival supplier had offered terms that were a far cry from ours: a lower unit cost and free shipping for the first year. Our own proposal, by contrast, reflected freight costs that have risen sharply since last autumn.\n\nA second factor was presentation. Feedback from the distributor suggests that our team came across as inflexible when delivery times were discussed. This was not our intention, but it clearly damaged trust at a crucial moment.\n\nWider risks\nIt is important to draw a distinction between problems we can control and those we cannot. Freight prices are outside our control; however, they now pose a serious threat to our margins on at least three other contracts.\n\nRecommendations\nFirst, we should review our pricing model so that shipping costs are shared more flexibly with partners. Second, sales staff would benefit from negotiation training focused on handling objections calmly. If both steps are taken this quarter, they could bring about a real improvement in our success rate. Everyone involved was bitterly disappointed by this outcome, but it has given us a clear picture of what needs to change.",
    checklist: [
      "Báo cáo có tiêu đề và các đề mục rõ ràng (mục đích, nguyên nhân, rủi ro, đề xuất)",
      "Có ít nhất ba cụm động từ của bài, dùng đúng nghĩa (set out, fall through, played down, came across as, bring about)",
      "Có ít nhất ba kết hợp từ mạnh (a far cry from, draw a distinction, pose a serious threat, bitterly disappointed)",
      "Không chia bị động với fall through; nói về ấn tượng thì come across luôn có as",
      "Văn phong trung tính, trang trọng vừa phải, mỗi đề xuất đều cụ thể",
    ],
    minWords: 230,
  }),
});

const daoNgu = lesson({
  slug: "dao-ngu-de-nhan-manh",
  title: "Đảo ngữ để nhấn mạnh",
  minutes: 35,
  lecture: {
    title: "Đảo ngữ phủ định",
    blocks: [
      p("Bạn nghe một bài phát biểu tốt nghiệp và diễn giả mở đầu: “Never before have we faced such a challenge.” Hay bạn đọc một bài IELTS Writing điểm cao: “Not only does tourism create jobs, but it also...” Nhiều học viên Việt nhìn thấy trợ động từ đứng trước chủ ngữ thì tưởng là câu hỏi. Thật ra đó là **đảo ngữ**, công cụ để người viết đặt sức nặng vào ý mình muốn nói."),
      p("Khi một trạng từ hoặc cụm từ mang nghĩa phủ định hoặc hạn chế (**never**, **rarely**, **seldom**, **hardly**, **little**, **not only**, **only after**) được đưa lên đầu câu, trợ động từ phải đứng **trước** chủ ngữ, giống cấu trúc câu hỏi. Cách này tạo sức nặng và kịch tính, thường gặp trong văn viết, diễn văn và bài thi IELTS."),
      table(
        ["Cấu trúc", "Câu thường", "Câu đảo ngữ"],
        ["Never", "I have never seen such chaos.", "Never have I seen such chaos."],
        ["Rarely / Seldom", "We rarely get feedback this detailed.", "Rarely do we get feedback this detailed."],
        ["Not only ... but also", "She not only wrote the report but also presented it.", "Not only did she write the report, but she also presented it."],
        ["Hardly ... when", "I had hardly sat down when the phone rang.", "Hardly had I sat down when the phone rang."],
        ["No sooner ... than", "He had no sooner arrived than he was asked to leave.", "No sooner had he arrived than he was asked to leave."],
        ["Only after", "We understood the problem only after the audit.", "Only after the audit did we understand the problem."],
        ["Little", "I didn't realise how serious it was.", "Little did I realise how serious it was."],
      ),
      p("Hai điểm người Việt hay sai. Thứ nhất, câu ở thì hiện tại đơn và quá khứ đơn phải **mượn do/does/did**, và động từ chính trở về nguyên mẫu (riêng động từ be thì đảo trực tiếp: Never was I so nervous). Thứ hai, với **Only after**, **Only when** và **Not until**, đảo ngữ nằm ở **mệnh đề chính**, không nằm ở mệnh đề đi ngay sau only."),
      mistake("Rarely we see such dedication.", "Rarely do we see such dedication.", "Sau trạng từ phủ định ở đầu câu phải đảo trợ động từ lên trước chủ ngữ; thì hiện tại đơn thì mượn do."),
      mistake("Only after he left did I realised my mistake.", "Only after he left did I realise my mistake.", "Đã có did thì động từ chính phải ở nguyên mẫu. Đảo ngữ nằm ở mệnh đề chính (did I realise), không đảo ở he left."),
      ex("No sooner had we launched the product than competitors began to copy it.", "Chúng tôi vừa ra mắt sản phẩm thì đối thủ đã bắt đầu sao chép.", "Hardly đi với when, No sooner đi với than. Đừng trộn lẫn hai cặp này."),
      ex("Not only does the plan save money, but it also reduces waste.", "Kế hoạch này không chỉ tiết kiệm tiền mà còn giảm lãng phí."),
      ex("Seldom have I worked with such a committed team.", "Hiếm khi tôi được làm việc với một đội tận tâm như vậy.", "Thì hiện tại hoàn thành đã có have nên chỉ cần đảo have lên trước I."),
      ex("Under no circumstances should you share your password with anyone.", "Trong bất kỳ trường hợp nào bạn cũng không được chia sẻ mật khẩu cho ai.", "Under no circumstances và In no way cũng gây đảo ngữ. Câu có động từ khuyết thiếu thì đảo chính động từ đó: should you share."),
      mistake("Hardly had I sat down than the phone rang.", "Hardly had I sat down when the phone rang.", "Tiếng Việt chỉ có một cách nói “vừa... thì...”, nên người Việt hay trộn hai cặp. Hãy học thuộc theo cặp: Hardly/Scarcely đi với when, No sooner đi với than."),
      tip("Mẹo nhớ: hãy coi nửa sau của câu đảo ngữ như một **câu hỏi**. Từ câu hỏi Have I ever seen such chaos?, chỉ cần thay ever bằng Never đặt lên đầu: **Never have I seen such chaos.** Khi đọc thành tiếng, nhấn mạnh vào từ phủ định đầu câu rồi ngừng rất nhẹ sau từ đó."),
      tip("Về **register** (văn phong): đảo ngữ nghe trang trọng và mạnh. Trong bài luận hay bài phát biểu, dùng vài lần là đủ gây ấn tượng. Trong trò chuyện thường ngày, dùng quá nhiều sẽ nghe như đang **đọc diễn văn**."),
      teacher("Cái bẫy tôi gặp nhiều nhất ở học viên giỏi là thế này: các bạn đảo được trợ động từ, nhưng quên trả động từ chính về nguyên mẫu, thành ra viết Only then did I realised. Cách tự kiểm tra của tôi: cứ thấy **did** đứng trước chủ ngữ thì đưa mắt tìm ngay động từ phía sau, nó phải ở dạng nguyên mẫu trơn, không đuôi -ed, không đuôi -s. Mỗi tối, các bạn lấy ba câu bình thường mình đã nói trong ngày, viết lại thành ba câu đảo ngữ với Never, Rarely và Not only. Một tháng sau, cấu trúc này sẽ tự bật ra khi các bạn cần nhấn mạnh."),
      summary(
        "Từ phủ định hoặc hạn chế đứng đầu câu (Never, Rarely, Seldom, Little, Not only, Under no circumstances) thì **trợ động từ đứng trước chủ ngữ**, như câu hỏi.",
        "Hiện tại đơn và quá khứ đơn phải **mượn do/does/did**, động từ chính về nguyên mẫu: Only then did I realise, không viết did I realised.",
        "Với Only after, Only when, Not until: đảo ngữ nằm ở **mệnh đề chính**, không đảo ở mệnh đề ngay sau only.",
        "Học theo cặp: **Hardly/Scarcely ... when**, **No sooner ... than**; không trộn lẫn.",
        "Đảo ngữ thuộc văn phong trang trọng: vài câu ở chỗ then chốt của bài luận hay bài phát biểu là đủ.",
      ),
    ],
  },
  words: [
    word("inversion", "/ɪnˈvɜː.ʃən/", "sự đảo ngữ", "Negative inversion adds weight to a formal argument.", "in|ver|sion", 1),
    word("emphasis", "/ˈem.fə.sɪs/", "sự nhấn mạnh", "The speaker placed great emphasis on transparency.", "em|pha|sis", 0, "Danh từ đi với on (place emphasis on), nhưng động từ emphasise không có on: emphasise the point."),
    word("seldom", "/ˈsel.dəm/", "hiếm khi", "Seldom have I met such a dedicated team.", "sel|dom", 0),
    word("scarcely", "/ˈskeəs.li/", "vừa mới, hầu như không", "Scarcely had the meeting begun when the power went out.", "scarce|ly", 0),
    word("unprecedented", "/ʌnˈpres.ɪ.den.tɪd/", "chưa từng có tiền lệ", "The company faced unprecedented demand last year.", "un|prec|e|dent|ed", 1),
    word("register", "/ˈredʒ.ɪ.stə/", "văn phong, mức độ trang trọng", "Inversion belongs to a formal register.", "reg|is|ter", 0),
    word("rhetorical", "/rɪˈtɒr.ɪ.kəl/", "thuộc về tu từ", "Inversion is a powerful rhetorical device.", "rhe|tor|i|cal", 1),
  ],
  exercises: [
    mc("c1-2-1", "Never ___ such a well-organised conference.", ["I have attended", "have I attended", "I attended", "did I attended"], 1, "Never đứng đầu câu nên phải đảo trợ động từ have lên trước I."),
    mc("c1-2-2", "No sooner had the train left ___ it started to snow.", ["when", "that", "than"], 2, "No sooner luôn đi với than; hardly và scarcely mới đi với when."),
    fill("c1-2-3", "Rarely ___ we receive complaints about this product (trợ động từ của thì hiện tại đơn).", ["do"], "Thì hiện tại đơn nên mượn do để đảo ngữ."),
    fill("c1-2-4", "Only after the results were published ___ the scientists realise their error (trợ động từ của thì quá khứ đơn).", ["did"], "Đảo ngữ ở mệnh đề chính; động từ realise ở nguyên mẫu nên cần did."),
    reorder("c1-2-5", "Little did we know that the company was about to collapse.", "Little + did + chủ ngữ + know/realise: nhấn mạnh rằng lúc đó hoàn toàn không hề biết."),
    reorder("c1-2-6", "Not only did she miss the deadline, but she also lied.", "Not only + did + chủ ngữ + động từ nguyên mẫu, but + chủ ngữ + also + động từ quá khứ."),
    listen("c1-2-7", "Not until I moved abroad did I appreciate my hometown.", ["Tôi chưa bao giờ thích quê mình dù đã ra nước ngoài.", "Mãi đến khi ra nước ngoài sống, tôi mới trân trọng quê hương.", "Tôi chuyển ra nước ngoài vì không thích quê mình."], 1, "Not until... did I... nghĩa là mãi đến khi... tôi mới..."),
    listen("c1-2-8", "Seldom does the board approve a budget this large.", ["Hội đồng quản trị thường duyệt ngân sách lớn như vậy.", "Hội đồng quản trị đã từ chối ngân sách này.", "Hội đồng quản trị hiếm khi duyệt một ngân sách lớn như thế này."], 2, "Seldom nghĩa là hiếm khi, không phải thường xuyên."),
    correct("c1-2-9", "Never I have seen such a beautiful sunset.", ["Never have I seen such a beautiful sunset.", "I have never seen such a beautiful sunset."], "Never đứng đầu câu thì trợ động từ have phải đứng trước chủ ngữ I."),
    correct("c1-2-10", "Only when the manager arrived we could start the meeting.", ["Only when the manager arrived could we start the meeting.", "We could only start the meeting when the manager arrived."], "Với Only when, đảo ngữ nằm ở mệnh đề chính: could we start. Mệnh đề ngay sau only (the manager arrived) giữ trật tự bình thường."),
  ],
  speaking: [
    say("Never have I seen such a talented group of students.", "Tôi chưa bao giờ thấy một nhóm sinh viên tài năng như vậy."),
    say("Not only does this plan save time, but it also cuts costs.", "Kế hoạch này không chỉ tiết kiệm thời gian mà còn cắt giảm chi phí."),
    say("Only after the meeting did I understand the real problem.", "Chỉ sau cuộc họp tôi mới hiểu vấn đề thực sự."),
  ],
  freeSpeaking: free(
    "Describe a moment when you realised something important only afterwards.",
    "Kể về một lần bạn chỉ nhận ra điều quan trọng sau khi sự việc đã qua: lúc đó bạn nghĩ gì, sau đó bạn nhận ra điều gì, và nó thay đổi bạn ra sao. Dùng ít nhất hai câu đảo ngữ (Little did I know..., Only after... did I..., Never have I...).",
    "When I started my first job in Da Nang, I thought the hardest part would be the technical work. Little did I know that the real challenge would be speaking up in meetings. For months I stayed quiet, even when I had useful ideas. Only after my manager asked me directly for my opinion did I realise how much my silence had cost the team. Since then, I have tried to contribute in every meeting, and never have I regretted it. Not only has my confidence grown, but my colleagues also come to me for advice now.",
  ),
  dialogue: dialogue(
    "Tập dượt bài phát biểu tổng kết năm",
    "Chị Hà, giám đốc điều hành một công ty logistics ở TP.HCM, đang cùng Tom, chuyên gia viết diễn văn người Anh, sửa phần mở đầu bài phát biểu trong buổi tiệc tổng kết năm. Chị muốn câu chữ có sức nặng hơn.",
    { A: "Chị Hà (giám đốc điều hành)", B: "Tom (chuyên gia viết diễn văn)" },
    A("Tom, my opening feels flat. “We have never faced a year like this” sounds so ordinary.", "Tom, phần mở đầu của tôi nghe nhạt quá. Câu “Chúng ta chưa bao giờ đối mặt với một năm như thế này” nghe bình thường quá."),
    B("Then let's invert it: “Never have we faced a year like this.” The weight falls on never.", "Vậy mình đảo ngữ nhé: “Chưa bao giờ chúng ta đối mặt với một năm như thế này.” Sức nặng dồn cả vào chữ never."),
    A("Much better. Next, I want to say the team didn't just survive; it actually grew.", "Hay hơn nhiều. Tiếp theo, tôi muốn nói rằng đội ngũ không chỉ trụ vững mà còn thực sự lớn mạnh."),
    B("Try this: “Not only did our team survive the crisis, but it also doubled its client base.”", "Thử câu này: “Đội ngũ của chúng ta không chỉ vượt qua khủng hoảng mà còn tăng gấp đôi số khách hàng.”"),
    A("And the supply chain part? We only understood the risk after the audit.", "Còn đoạn về chuỗi cung ứng? Mãi sau đợt kiểm toán chúng ta mới hiểu được rủi ro."),
    B("“Only after the audit did we understand how fragile our supply chain was.” Remember: did we understand, not did we understood.", "“Chỉ sau đợt kiểm toán chúng ta mới hiểu chuỗi cung ứng của mình mong manh đến mức nào.” Nhớ nhé: did we understand, không phải did we understood."),
    A("Got it. Could I also say “Hardly had we recovered than prices rose again”?", "Hiểu rồi. Tôi có thể nói thêm “Hardly had we recovered than prices rose again” được không?"),
    B("Almost. Hardly goes with when; no sooner goes with than. So: “Hardly had we recovered when prices rose again.”", "Gần đúng. Hardly đi với when; no sooner mới đi với than. Vậy là: “Chúng ta vừa mới hồi phục thì giá lại tăng.”"),
    A("How many of these should I use? I don't want to sound like a politician.", "Tôi nên dùng bao nhiêu câu kiểu này? Tôi không muốn nghe như một chính trị gia."),
    B("A few, at the key moments. Seldom does an audience remember more than that.", "Vài câu ở những điểm then chốt thôi. Hiếm khi khán giả nhớ được nhiều hơn thế."),
    A("Fine. And under no circumstances should I read it word for word, right?", "Được. Và tôi tuyệt đối không nên đọc từng chữ, đúng không?"),
    B("Exactly. Little do most speakers realise how much eye contact matters.", "Chính xác. Hầu hết diễn giả hoàn toàn không nhận ra giao tiếp bằng mắt quan trọng đến mức nào."),
  ),
  dialogueQuestions: [
    listenQ("c1-2-d1", "Why does Tom suggest inverting Ha's first sentence?", "Then let's invert it: “Never have we faced a year like this.” The weight falls on never.", ["To make it shorter", "To make it sound less formal", "To avoid repeating the word year", "To put more emphasis on the word never"], 3, "The weight falls on never: đảo ngữ dồn sức nặng vào từ never ở đầu câu."),
    mc("c1-2-d2", "What mistake does Tom correct in Ha's sentence about prices?", ["She used than after hardly instead of when.", "She forgot to use did.", "She put the main verb in the past tense after did.", "She used never instead of seldom."], 0, "Hardly goes with when; no sooner goes with than."),
    mc("c1-2-d3", "What is Tom's advice about how often to use inversion in the speech?", ["Use it in almost every sentence to sound formal.", "Avoid it completely in speeches.", "Use it only a few times, at the key moments.", "Use it only in the closing sentence."], 2, "A few, at the key moments: dùng quá nhiều sẽ nghe như chính trị gia, khán giả cũng không nhớ nổi."),
  ],
  reading: reading({
    title: "Address to the graduating class",
    text: `Good morning, graduates, families and friends.

Rarely does a university see a year group quite like yours. You began your studies in lecture halls that were suddenly empty, attending seminars from bedrooms and kitchen tables, often on connections that failed at the worst possible moment. Few of you imagined that your first year would be spent staring at a screen. Fewer still imagined that you would one day be sitting here, together, in the same hall.

I want to be honest with you this morning. When the campus closed, many of us on the staff assumed that your group would struggle more than any before it. We worried about lost friendships, lost confidence and lost learning. Little did we know how wrong we would be. Not only did you adapt to online study, but you also reshaped it. It was your students' union that set up the peer tutoring network now used across the university, and it was your volunteers who delivered laptops to classmates who had none.

Only later did we understand what had happened. Deprived of the ordinary routines of student life, you had built new ones, and in many ways they were better. You learned to ask for help, to organise yourselves and to look after one another, skills that no course in this university has ever formally taught.

There were, of course, moments when things went badly wrong. Hardly had the first online examinations begun when the university's servers crashed, and hundreds of you had to sit your papers again a week later. I still remember the emails we received that night. Some were furious, many were funny, and almost all of them ended with an offer to help classmates who had lost their work.

I do not want to romanticise those years. They were hard, and for some of you they involved real loss. Under no circumstances should anyone pretend that the difficulties were a gift. But hardship does reveal character, and seldom have I seen character revealed so clearly.

So what should you take with you as you leave? Not your notes, which you will probably never read again, and not your grades, which most employers will ask about only once. Take instead the habit you formed when everything was uncertain: the habit of noticing who is struggling and doing something about it. Never will that habit be more useful than in the years ahead, when you will be the colleagues, managers and neighbours that other people depend on.

Congratulations, all of you. We could not be prouder.`,
    glossary: [
      ["seminar", "buổi thảo luận chuyên đề"],
      ["reshape", "định hình lại"],
      ["peer tutoring", "bạn kèm bạn học"],
      ["deprived of", "bị tước mất, thiếu"],
      ["romanticise", "lãng mạn hóa, tô hồng"],
      ["hardship", "gian khó"],
    ],
    questions: [
      mc("c1-2-r1", "What is the main message of the speech?", ["The graduates' difficult years gave them valuable habits of supporting each other.", "Online learning is better than classroom learning.", "Grades are the best predictor of future success.", "The university handled the campus closure perfectly."], 0, "Bài phát biểu nhấn mạnh những thói quen giúp đỡ nhau mà khóa sinh viên này hình thành trong thời gian khó khăn."),
      mc("c1-2-r2", "According to the speaker, who set up the peer tutoring network?", ["The university staff", "The graduates' students' union", "Local employers", "Volunteers from another university"], 1, "It was your students' union that set up the peer tutoring network: câu chẻ nhấn mạnh chính hội sinh viên của khóa này."),
      mc("c1-2-r3", "What does “Little did we know how wrong we would be” suggest about the staff?", ["They had expected the students to cope well.", "They knew from the start that the students would succeed.", "Their pessimistic expectations turned out to be mistaken.", "They did not know that the campus had closed."], 2, "Các giảng viên từng nghĩ khóa này sẽ gặp khó khăn nhất, nhưng họ đã hoàn toàn sai."),
      mc("c1-2-r4", "How does the speaker respond to the idea that the hard years were a gift?", ["The speaker thinks it is broadly accurate.", "The speaker has no clear view on it.", "The speaker encourages the graduates to see them that way.", "The speaker firmly rejects it."], 3, "Under no circumstances should anyone pretend that the difficulties were a gift: người nói bác bỏ dứt khoát."),
      fill("c1-2-r5", "The speaker advises the graduates to take with them the ___ of noticing who is struggling. (một từ)", ["habit"], "Take instead the habit you formed... the habit of noticing who is struggling."),
    ],
  }),
  task: task({
    prompt: "Viết một bài phát biểu hoàn chỉnh (240–290 từ) cho buổi tổng kết năm trước toàn công ty, hoặc cho lễ tốt nghiệp của lớp bạn. Bài có mở đầu, phần kể lại một năm, phần nhìn về phía trước và lời kết. Dùng bốn hoặc năm câu đảo ngữ, mỗi câu một cấu trúc khác nhau, đặt ở những khoảnh khắc quan trọng nhất.",
    hints: [
      "Mở đầu bằng Never have I... hoặc Rarely do we... để gây ấn tượng ngay câu đầu.",
      "Nêu hai thành tích cùng lúc bằng Not only did... but ... also.",
      "Kể một bước ngoặt bằng Only after... did..., Hardly had... when... hoặc Little did we know...",
      "Xen kẽ nhiều câu bình thường để đảo ngữ không bị lạm dụng.",
    ],
    model:
      "Good evening, everyone, and thank you for being here. Never have I been prouder to stand in front of this team. Twelve months ago, we were close to losing our biggest client, and few of us believed that this setback would become our turning point. Yet that is exactly what happened.\n\nNot only did we keep that client, but we also won four new contracts in markets we had never entered before. Each deal seemed to open the door to the next, and our partners began to notice the difference in the way we worked. I would like to thank the sales team in particular, who spent many evenings rewriting proposals until they were right.\n\nOf course, the year was not easy. Hardly had we recovered from the spring floods when fuel prices rose again, and there were weeks when I wondered whether our targets were realistic. Only after the final figures came in did I fully appreciate what you had achieved. Very few companies grow this fast without cutting corners, yet you managed it without ever compromising on safety or quality.\n\nLooking ahead, I will not pretend that next year will be simpler. Competition is increasing, and our customers expect more from us every month. But I am confident, because I have seen what this team can do under pressure. Rarely does a leader get to work with people who are so committed to each other.\n\nSo tonight, please relax and enjoy yourselves. You have more than earned it. Thank you.",
    checklist: [
      "Có bốn hoặc năm câu đảo ngữ, mỗi câu một cấu trúc khác nhau (không lạm dụng)",
      "Sau do/does/did đảo lên, động từ chính ở dạng nguyên mẫu",
      "Với Only after, Only when, Not until, đảo ngữ nằm ở mệnh đề chính",
      "Nếu dùng, Hardly đi với when và No sooner đi với than",
      "Bài có mở đầu, phần kể lại, phần nhìn về phía trước và lời kết; câu thường xen giữa các câu đảo ngữ",
    ],
    minWords: 240,
  }),
});

const cauChe = lesson({
  slug: "cau-che-va-nhan-manh",
  title: "Câu chẻ và nhấn mạnh",
  minutes: 35,
  lecture: {
    title: "Câu chẻ, do nhấn mạnh và đưa thành phần lên đầu câu",
    blocks: [
      p("Trong cuộc họp, sếp người nước ngoài nói với bạn: “So, Minh, you sent the report late.” Nhưng thực ra phần bị gửi muộn là của bộ phận tài chính, còn bạn gửi phần của mình đúng hạn. Bạn cần sửa lại thật rõ mà vẫn lịch sự: “Actually, **it was the finance team that** sent their part late. I did send mine on time.” Chỉ một câu, người nghe biết ngay đâu là thông tin cần sửa."),
      p("Tiếng Việt nhấn mạnh bằng giọng hoặc bằng từ “chính”, “chính là”. Khi viết tiếng Anh, bạn cần công cụ ngữ pháp: **câu chẻ** (cleft sentence), **do nhấn mạnh** và **fronting** (đưa một thành phần lên đầu câu)."),
      p("**It-cleft**: It + be + phần cần nhấn mạnh + that/who + phần còn lại. Dùng khi muốn sửa lại thông tin hoặc làm nổi bật một chi tiết."),
      table(
        ["Câu gốc", "Muốn nhấn mạnh", "Câu nhấn mạnh"],
        ["Linh sent the report on Monday.", "Người gửi", "It was Linh who sent the report on Monday."],
        ["Linh sent the report on Monday.", "Thứ được gửi", "It was the report that Linh sent on Monday."],
        ["Linh sent the report on Monday.", "Thời gian", "It was on Monday that Linh sent the report."],
        ["I need more time.", "Điều mình cần (wh-cleft)", "What I need is more time."],
        ["The price worries me.", "Điều khiến mình lo (wh-cleft)", "What worries me is the price."],
        ["I didn't understand the problem until the meeting.", "Thời điểm (Not until)", "It was not until the meeting that I understood the problem."],
      ),
      p("**Wh-cleft**: What + mệnh đề + be + phần nhấn mạnh. Cấu trúc này rất hữu ích để mở đầu ý chính khi thuyết trình: What we need to focus on is..."),
      ex("It wasn't the price that put customers off; it was the poor service.", "Không phải giá cả khiến khách hàng ngần ngại, mà là dịch vụ kém.", "Cấu trúc It wasn't X... it was Y dùng để bác bỏ và sửa thông tin."),
      mistake("What I need it is a break.", "What I need is a break.", "Trong câu wh-cleft, mệnh đề What I need đã là chủ ngữ, không thêm it."),
      ex("What we need is more staff, not more meetings.", "Cái chúng ta cần là thêm người, chứ không phải thêm cuộc họp.", "Dù phần sau mang nghĩa số nhiều (more staff), động từ be thường vẫn là is, vì chủ ngữ thực sự là cả mệnh đề What we need."),
      mistake("It was Linh sent the report.", "It was Linh who sent the report.", "Tiếng Việt nói “Chính Linh đã gửi báo cáo” mà không cần từ nối, nên người Việt hay bỏ who hoặc that. Khi phần nhấn mạnh là chủ ngữ (Linh là người gửi), phải có who (cho người) hoặc that. Chỉ khi phần nhấn mạnh là tân ngữ, văn nói mới hay bỏ that: It was the report I sent."),
      p("**Do nhấn mạnh**: thêm do/does/did trước động từ nguyên mẫu trong câu khẳng định để khẳng định mạnh hoặc phản bác điều người khác nghĩ."),
      ex("I did send the email. Please check your spam folder.", "Tôi đã gửi email thật mà. Bạn kiểm tra thư mục thư rác nhé."),
      mistake("She does works hard.", "She does work hard.", "Sau do/does/did nhấn mạnh, động từ trở về nguyên mẫu."),
      tip("**Fronting**: đưa tân ngữ lên đầu câu để tạo tương phản, ví dụ: Some of his ideas I agree with; others I find unrealistic. Cách này gặp cả trong bài luận lẫn **văn nói hằng ngày** khi muốn đối lập: That film I really liked, but the book was boring."),
      tip("Mẹo phát âm: khi nói, sức nặng của câu nhấn mạnh nằm ở **giọng**. Với do nhấn mạnh, đọc to và dài từ did: I **DID** send the email. Với câu chẻ, nhấn vào phần được làm nổi bật: It was **LINH** who sent it. Nếu đọc đều đều như câu thường, người nghe sẽ không nhận ra bạn đang sửa thông tin."),
      teacher("Người Việt mình vốn ngại nói thẳng “không phải thế”, nên nhiều bạn cứ im lặng khi bị hiểu nhầm trong cuộc họp. Tôi dặn các bạn: câu chẻ chính là cách **sửa sai mà không gây mất lòng**, vì nó nhắm vào thông tin chứ không nhắm vào người. Các bạn hãy thuộc lòng hai khung câu: It wasn't X that..., it was Y, và What I meant was... Tập nói to mỗi khung mười lần cho quen miệng, để đến lúc cần, câu tự ra chứ không phải nghĩ."),
      summary(
        "**It-cleft**: It + be + phần nhấn mạnh + who/that + phần còn lại. Phần nhấn mạnh là chủ ngữ thì phải giữ who/that; là tân ngữ thì văn nói có thể bỏ that.",
        "**Wh-cleft**: What + mệnh đề + is + phần nhấn mạnh (What we need is more time); không thêm it sau mệnh đề What.",
        "Muốn sửa thông tin mà không mất lòng: **It wasn't X that..., it was Y**. Câu nhắm vào sự việc, không nhắm vào người.",
        "**Do/does/did nhấn mạnh** + động từ nguyên mẫu để khẳng định hoặc phản bác: I did send it, không viết I did sent it.",
        "Khi nói, **nhấn giọng** vào phần được làm nổi bật; đọc đều đều thì câu chẻ mất tác dụng.",
      ),
    ],
  },
  words: [
    word("emphatic", "/ɪmˈfæt.ɪk/", "dứt khoát, mang tính nhấn mạnh", "Her answer was an emphatic no.", "em|phat|ic", 1),
    word("rectify", "/ˈrek.tɪ.faɪ/", "sửa chữa, khắc phục (sai sót)", "It was the finance team that rectified the error within an hour.", "rec|ti|fy", 0),
    word("salient", "/ˈseɪ.li.ənt/", "nổi bật, quan trọng nhất", "What is most salient here is the timing, not the cost.", "sa|li|ent", 0),
    word("pinpoint", "/ˈpɪn.pɔɪnt/", "xác định chính xác", "It was the audit that pinpointed the cause of the delay.", "pin|point", 0),
    word("misconception", "/ˌmɪs.kənˈsep.ʃən/", "quan niệm sai lầm", "It is a common misconception that grammar kills fluency.", "mis|con|cep|tion", 2),
    word("underlying", "/ˌʌn.dəˈlaɪ.ɪŋ/", "tiềm ẩn, nằm bên dưới", "What we need to address is the underlying cause.", "un|der|ly|ing", 2),
    word("crucial", "/ˈkruː.ʃəl/", "cực kỳ quan trọng", "What is crucial is that we act quickly.", "cru|cial", 0),
  ],
  exercises: [
    mc("c1-3-1", "Câu nào nhấn mạnh rằng chính Nam, không phải ai khác, đã phát hiện ra lỗi?", ["What Nam found was the error.", "Nam did find the error.", "It was Nam who found the error.", "The error was found by someone."], 2, "It was + người + who... nhấn mạnh người thực hiện hành động."),
    mc("c1-3-2", "What I really need ___ a long holiday.", ["is", "it is", "are", "that is"], 0, "Mệnh đề What I really need là chủ ngữ số ít, nên đi với is."),
    fill("c1-3-3", "It was in Hanoi ___ I first met my business partner.", ["that"], "Câu chẻ nhấn mạnh nơi chốn vẫn dùng that sau It was in Hanoi."),
    fill("c1-3-4", "I know you think I forgot, but I ___ call her yesterday.", ["did"], "Did nhấn mạnh để phản bác; động từ call giữ nguyên mẫu."),
    reorder("c1-3-5", "What we need to do is reduce our costs.", "Wh-cleft nhấn mạnh hành động: What + chủ ngữ + need to do + is + động từ nguyên mẫu."),
    reorder("c1-3-6", "It was not until midnight that I finished the report.", "It was not until + thời điểm + that + mệnh đề: mãi đến... mới..."),
    listen("c1-3-7", "It wasn't the software that failed; it was the training.", ["Phần mềm bị lỗi vì nhân viên chưa được đào tạo.", "Không phải phần mềm hỏng, mà là khâu đào tạo có vấn đề.", "Cả phần mềm lẫn khâu đào tạo đều thất bại."], 1, "It wasn't X... it was Y: không phải X, mà là Y."),
    listen("c1-3-8", "What surprised me was how quickly they agreed.", ["Điều làm tôi bất ngờ là họ đồng ý nhanh đến thế.", "Tôi bất ngờ vì họ không đồng ý.", "Họ bất ngờ vì tôi đồng ý quá nhanh."], 0, "Wh-cleft What surprised me was... đưa điều gây bất ngờ xuống cuối câu để nhấn mạnh."),
    correct("c1-3-9", "It was the new intern found the mistake in the contract.", ["It was the new intern who found the mistake in the contract.", "It was the new intern that found the mistake in the contract."], "Phần nhấn mạnh the new intern là chủ ngữ của found, nên phải có who (cho người) hoặc that nối với phần còn lại."),
    correct("c1-3-10", "I did told you about the meeting last week.", ["I did tell you about the meeting last week.", "I told you about the meeting last week."], "Sau did nhấn mạnh, động từ trở về nguyên mẫu: did tell, không viết did told."),
  ],
  speaking: [
    say("What I'd like to focus on today is customer feedback.", "Điều tôi muốn tập trung vào hôm nay là phản hồi của khách hàng."),
    say("It was my mother who taught me to love reading.", "Chính mẹ tôi là người đã dạy tôi yêu việc đọc sách."),
    say("I do understand your concerns, but we need to move forward.", "Tôi thực sự hiểu những lo ngại của bạn, nhưng chúng ta cần tiến lên."),
  ],
  freeSpeaking: free(
    "Tell me about a time when someone misunderstood the cause of a problem. How did you put them right?",
    "Kể về một lần ai đó hiểu sai nguyên nhân của một vấn đề (ở nơi làm việc, trường học hay gia đình) và bạn đã sửa lại thông tin như thế nào. Dùng ít nhất một câu It-cleft, một câu wh-cleft và một câu do nhấn mạnh.",
    "Last year my manager assumed that our team had missed a deadline because we were disorganised. I did understand why he thought so, because the report arrived two days late. But it wasn't our team that caused the delay; it was the supplier, who sent us the figures a week after they had promised. What I did was prepare a short timeline showing exactly when each piece of data had arrived. What surprised me was how quickly he changed his mind once he saw the dates. Since then, it's always been our team that he asks to plan the schedule.",
  ),
  dialogue: dialogue(
    "Họp rút kinh nghiệm sau đợt ra mắt sản phẩm",
    "David, giám đốc khu vực người Anh, họp với Minh, trưởng nhóm marketing ở Hà Nội, sau một đợt ra mắt sản phẩm có doanh số thấp. David hiểu nhầm nguyên nhân, và Minh cần sửa lại thông tin một cách rõ ràng nhưng lịch sự.",
    { A: "David (giám đốc khu vực)", B: "Minh (trưởng nhóm marketing)" },
    A("Minh, the launch figures are disappointing. I assume the campaign started late.", "Minh, số liệu ra mắt đáng thất vọng quá. Tôi đoán là chiến dịch bắt đầu muộn."),
    B("Actually, the campaign did start on time. It was the stock that arrived late.", "Thật ra chiến dịch đã bắt đầu đúng hạn. Chính hàng hóa mới là thứ về muộn."),
    A("I see. So it was the warehouse team that caused the delay?", "Tôi hiểu. Vậy chính đội kho gây ra sự chậm trễ?"),
    B("Not exactly. It was customs clearance that held everything up, not our warehouse.", "Không hẳn. Chính khâu thông quan làm mọi thứ bị kẹt lại, chứ không phải kho của mình."),
    A("Fair enough. What worries me, though, is the customer feedback.", "Cũng được. Tuy vậy, điều khiến tôi lo là phản hồi của khách hàng."),
    B("I do understand that. What customers complained about most was the waiting time, not the product itself.", "Tôi thực sự hiểu điều đó. Điều khách phàn nàn nhiều nhất là thời gian chờ, chứ không phải bản thân sản phẩm."),
    A("That's a crucial distinction. So what do we need to change?", "Đó là điểm khác biệt rất quan trọng. Vậy chúng ta cần thay đổi gì?"),
    B("What we need to do is book customs agents two weeks earlier. It was only in the final week that we saw how slow they were.", "Điều chúng ta cần làm là đặt đại lý hải quan sớm hơn hai tuần. Mãi đến tuần cuối chúng tôi mới thấy họ chậm đến mức nào."),
    A("And the discount codes? Some people say they confused customers.", "Còn mã giảm giá thì sao? Có người nói chúng làm khách bối rối."),
    B("Some of the codes did cause confusion, I admit. The rest, customers used without any problem.", "Tôi thừa nhận một số mã đúng là gây nhầm lẫn. Còn số còn lại thì khách dùng không có vấn đề gì."),
    A("Thanks for clarifying, Minh. What I'd like from you is a one-page summary by Friday.", "Cảm ơn Minh đã làm rõ. Điều tôi muốn ở anh là một bản tóm tắt dài một trang trước thứ Sáu."),
    B("You'll have it by Thursday, actually. The outline I've already finished.", "Thật ra thứ Năm anh đã có rồi. Dàn ý thì tôi làm xong rồi."),
  ),
  dialogueQuestions: [
    listenQ("c1-3-d1", "According to Minh, what actually held up the launch?", "Not exactly. It was customs clearance that held everything up, not our warehouse.", ["The warehouse team", "Customs clearance", "The late start of the campaign", "The discount codes"], 1, "It was customs clearance that held everything up: câu chẻ nhấn mạnh chính khâu thông quan, và phủ nhận kho hàng."),
    mc("c1-3-d2", "What did customers complain about most?", ["The price of the product", "The quality of the product", "The discount codes", "The waiting time"], 3, "What customers complained about most was the waiting time, not the product itself."),
    mc("c1-3-d3", "Which best describes Minh's attitude during the meeting?", ["Defensive and unwilling to admit any fault", "Polite but firm in correcting David's assumptions", "Uninterested in the results", "Apologetic about mistakes he did not make"], 1, "Minh sửa từng giả định sai của David, nhưng vẫn thừa nhận phần lỗi về mã giảm giá (I admit) và hứa gửi báo cáo sớm."),
  ],
  reading: reading({
    title: "It isn't the app that's failing our pupils",
    text: `When a school's new learning app fails to raise test scores, the headlines tend to write themselves: the technology did not work. Having followed several such projects closely, I would argue that this verdict is usually wrong. It is rarely the software that lets pupils down. What lets them down, far more often, is the way the software is introduced.

Take a scheme I observed last year in a group of secondary schools. The app itself was well designed: short exercises, instant feedback and a dashboard that showed teachers exactly where each pupil was struggling. Yet after two terms, results had barely moved. The district's first reaction was to blame the product and start looking for a replacement.

Nor was this an isolated case. Researchers who study similar programmes report the same pattern again and again: generous budgets for devices and licences, and almost nothing for the time teachers need to learn how to use them. What gets measured at the end of the year is the technology; what actually determines the outcome is everything around it.

What the evaluation actually revealed was more uncomfortable. It was not until the third month that most teachers received any training, and even then it lasted a single afternoon. Many had simply never been shown how to read the dashboard. Pupils, meanwhile, were using the app at home, if at all, because nobody had set aside time for it during lessons. The tool was there; the conditions for using it were not.

Some will object that good technology should be intuitive enough not to need training. There is some truth in this, and consumer apps do succeed without manuals. But a classroom is not a consumer market. What a teacher needs from a learning tool is not entertainment but information she can act on, and interpreting that information is a professional skill that has to be developed.

It is also worth noting where the scheme did work. In the two schools where head teachers had protected twenty minutes of every maths lesson for the app, scores rose noticeably. It was the same app, used by pupils from very similar backgrounds. What differed was the commitment of the adults around them.

None of this means that every piece of educational software deserves a second chance. Some products are genuinely poor, and schools do waste money on them. But before we write off another promising tool, we should ask ourselves a harder question: was it the technology that failed, or was it us?`,
    glossary: [
      ["verdict", "kết luận, phán quyết"],
      ["scheme", "chương trình, kế hoạch"],
      ["dashboard", "bảng theo dõi số liệu"],
      ["set aside", "dành riêng (thời gian)"],
      ["intuitive", "dễ dùng, không cần hướng dẫn"],
    ],
    questions: [
      mc("c1-3-r1", "What is the writer's main argument?", ["Educational apps are usually badly designed.", "Learning apps often fail because of how they are introduced, not because of the software itself.", "Schools should stop spending money on technology.", "Consumer apps are better designed than educational apps."], 1, "It is rarely the software that lets pupils down. What lets them down... is the way the software is introduced."),
      mc("c1-3-r2", "When did most teachers receive training in the scheme the writer observed?", ["Before the scheme started", "In the first week", "Not until the third month", "Never"], 2, "It was not until the third month that most teachers received any training."),
      mc("c1-3-r3", "What does the example of the two successful schools suggest?", ["Protected classroom time made a real difference.", "Their pupils came from wealthier families.", "They used a different, better app.", "Their pupils used the app mainly at home."], 0, "Cùng một ứng dụng, học sinh có hoàn cảnh tương tự; khác biệt duy nhất là nhà trường dành riêng hai mươi phút mỗi tiết toán."),
      mc("c1-3-r4", "How does the writer respond to the view that good technology should not need training?", ["The writer rejects it completely.", "The writer fully agrees with it.", "The writer does not mention it.", "The writer accepts part of it but argues that classrooms are different."], 3, "There is some truth in this... But a classroom is not a consumer market: người viết thừa nhận một phần rồi phản bác."),
      fill("c1-3-r5", "In the last paragraph, to “write off” a tool means to decide that it is a ___ and not worth more effort. (thất bại)", ["failure"], "Write off something: coi thứ gì là thất bại, không đáng đầu tư thêm."),
    ],
  }),
  task: task({
    prompt: "Cấp trên gửi email cho rằng nhóm bạn gây ra sự chậm trễ của một dự án, nhưng thực ra nguyên nhân nằm ở chỗ khác. Hãy viết email trả lời (230–280 từ): sửa lại thông tin cho rõ, thừa nhận phần trách nhiệm của mình (nếu có), giữ thái độ hợp tác, và đề xuất cách khắc phục cụ thể.",
    hints: [
      "Mở đầu bằng do nhấn mạnh để thể hiện bạn thật sự hiểu mối lo của họ: I do understand...",
      "Sửa thông tin sai bằng It wasn't X that..., it was Y.",
      "Nêu đề xuất bằng wh-cleft: What we propose is...",
      "Nhận phần trách nhiệm của mình để giọng thư công bằng, không đổ lỗi.",
    ],
    model:
      "Dear David,\n\nThank you for sharing the launch figures and for being so direct about your concerns. I do understand why the results look disappointing, and I agree that we need to learn from them. However, I would like to clarify one point, because I think it changes the picture considerably.\n\nIt was not the marketing campaign that started late. The campaign went live on the planned date, as the attached schedule shows. What arrived late was the stock: our first shipment reached the warehouse almost two weeks behind schedule. It was customs clearance, rather than our warehouse team, that held everything up, and that was largely outside our control.\n\nThat said, I do not want to suggest that my team did everything right. It was our responsibility to plan for this kind of risk, and we did not do so. What we underestimated was how slow the customs process becomes in the weeks before a public holiday.\n\nWhat we propose for the next launch is therefore quite simple. First, we will book customs agents at least a fortnight earlier. Second, we will not start any paid advertising until the stock has actually cleared customs. It is at the planning stage, not in the final week, that this kind of delay can be prevented.\n\nI will send you a one-page summary with the full timeline on Thursday. If it would help, I would be happy to go through it with you on a short call.\n\nBest regards,\nMinh",
    checklist: [
      "Có ít nhất hai câu It-cleft đầy đủ who/that",
      "Có ít nhất hai câu wh-cleft, không thừa it sau mệnh đề What",
      "Có một câu do/does/did nhấn mạnh với động từ nguyên mẫu",
      "Thông tin sai được sửa rõ ràng, có nhận phần trách nhiệm và không trách móc người đọc",
      "Thư kết thúc bằng đề xuất và hành động cụ thể",
    ],
    minWords: 230,
  }),
});

const lapLuan = lesson({
  slug: "lap-luan-va-phan-bien",
  title: "Lập luận và phản biện",
  minutes: 35,
  lecture: {
    title: "Nhượng bộ nâng cao: Much as, Granted, albeit, notwithstanding",
    blocks: [
      p("Ông Klein, giám đốc mua hàng người Đức, nói với bạn: “Your price is higher than your competitors'.” Ở B2, các bạn đã biết đáp: “Although our price is higher, our service is better.” Câu đúng, nhưng ai cũng nói được. Người đàm phán ở trình độ C1 sẽ nói: “**Granted**, our price is higher. **Much as** I understand your concern, the total cost is actually lower.” Cùng một ý nhượng bộ, nhưng giọng tự tin và chín chắn hơn hẳn."),
      p("Although, despite, while it is true that và on balance các bạn đã học ở B1 và B2. Bài này bổ sung những cấu trúc nhượng bộ **gọn hơn, trang trọng hơn và giàu sắc thái hơn**, thường gặp trong bài báo, báo cáo, bài luận IELTS điểm cao và các buổi đàm phán. Lưu ý: cấu trúc nào là **mệnh đề phụ** (Much as..., Tired as she was...) thì không đi với but; còn **Granted** và **Admittedly** mở một câu thừa nhận độc lập, nên có thể nối tiếp bằng but."),
      table(
        ["Cấu trúc", "Theo sau là", "Ví dụ", "Sắc thái"],
        ["Much as + S + V", "mệnh đề, thường với like, admire, understand, sympathise", "Much as I admire her, I can't support this plan.", "dù rất...; lịch sự, trang trọng"],
        ["Granted, ...", "một câu thừa nhận, rồi but hoặc câu mới để phản bác", "Granted, it's expensive, but it lasts for years.", "thừa nhận ngắn gọn; cả nói và viết"],
        ["albeit", "thường là tính từ, trạng từ, cụm danh từ hoặc cụm giới từ; mệnh đề đầy đủ hiếm gặp, nên tránh", "Sales rose, albeit slowly.", "dù là; trang trọng"],
        ["notwithstanding", "chủ yếu là cụm danh từ (như giới từ); rất trang trọng: notwithstanding that + mệnh đề", "Notwithstanding the risks, the board agreed.", "bất chấp; rất trang trọng, văn bản"],
        ["for all + danh từ", "cụm danh từ", "For all its flaws, the system works.", "dù có... đến đâu"],
        ["tính từ + as/though + S + V", "mệnh đề, tính từ đưa lên đầu", "Tired as she was, she kept working.", "dù... đến mấy; nhấn mạnh"],
      ),
      ex("Much as I sympathise with your position, we cannot extend the deadline again.", "Dù tôi rất thông cảm với hoàn cảnh của anh, chúng tôi không thể gia hạn thêm lần nữa.", "Much as đứng đầu câu nghĩa là dù rất..., hay đi với động từ chỉ cảm xúc hoặc thái độ: like, admire, respect, sympathise."),
      mistake("Much as I like the idea, but it is too expensive.", "Much as I like the idea, it is too expensive.", "Thói quen “Mặc dù... nhưng...” của tiếng Việt quay lại cả ở trình độ C1. Much as đã mang nghĩa mặc dù, nên vế sau không thêm but, giống hệt although."),
      ex("The project was completed, albeit three months behind schedule.", "Dự án đã hoàn thành, dù là chậm ba tháng so với kế hoạch.", "Sau albeit là một cụm ngắn (three months behind schedule), không có chủ ngữ và động từ chia."),
      mistake("Sales rose last year, albeit they rose slowly.", "Sales rose last year, albeit slowly.", "Tiếng Việt “dù là” có thể đi với cả một câu, nên người Việt hay nối cả mệnh đề sau albeit. Trong tiếng Anh, albeit thường đi với một cụm ngắn (tính từ, trạng từ, cụm danh từ hoặc cụm giới từ); mệnh đề đầy đủ sau albeit rất hiếm và nghe vụng, nên tránh. Muốn dùng mệnh đề thì chuyển sang although."),
      ex("Tired as she was, she stayed until the last client had left.", "Dù mệt đến mấy, cô ấy vẫn ở lại cho đến khi vị khách cuối cùng ra về.", "Tính từ đưa lên đầu, không có mạo từ hay very, rồi as + chủ ngữ + động từ. Với động từ, ta có mẫu cố định: Try as I might, I couldn't persuade him."),
      mistake("Notwithstanding he was ill, he attended the meeting.", "Notwithstanding his illness, he attended the meeting.", "Người Việt dịch “mặc dù” thành một từ nối câu, nên đặt cả mệnh đề sau notwithstanding. Trong tiếng Anh hiện đại, notwithstanding chủ yếu dùng như giới từ, theo sau là danh từ; nó cũng có thể đứng cuối câu như trạng từ (…, the plan went ahead notwithstanding). Muốn giữ mệnh đề thì cần that (Notwithstanding that he was ill, rất trang trọng) hoặc viết Although he was ill."),
      p("Ở B2, các bạn đã có khung đoạn phản biện: nêu ý đối lập, thừa nhận, phản bác, kết luận. Ở C1, điều giám khảo chú ý là **mức độ nhượng bộ**: bạn thừa nhận bao nhiêu, và chuyển ý mượt đến đâu. Nhượng bộ quá nhiều thì lập luận yếu; không nhượng bộ chút nào thì nghe cực đoan."),
      table(
        ["Chức năng", "Câu mẫu"],
        ["Thừa nhận có giới hạn", "Granted, this may be true in the short term."],
        ["Thừa nhận rồi lật lại ngay", "That said, the long-term costs are far higher."],
        ["Công nhận điểm mạnh của ý đối lập", "For all its appeal, the idea ignores one key fact."],
        ["Phản bác mạnh mà vẫn lịch sự", "Persuasive as that sounds, it rests on weak evidence."],
        ["Kết luận có cân nhắc", "Admittedly, the evidence is mixed. Even so, it points in one direction."],
      ),
      ex("Compelling as the argument may sound, it rests on a single, rather small survey.", "Lập luận ấy nghe thuyết phục đến đâu thì cũng chỉ dựa trên một khảo sát duy nhất, lại khá nhỏ.", "Tính từ + as + S + may + V (may sound, may seem) là cách nhượng bộ rồi phản bác rất hay gặp trong bài luận."),
      tip("Mẹo nhớ: **albeit = although it is/was**, nên sau albeit thường chỉ còn phần còn lại: albeit slowly, albeit briefly, albeit a small one. **Much as** thì đọc như “dù rất”: Much as I love my job... Còn **Tired as she was** thì nhớ theo nghĩa “mệt đến mấy”: tính từ lên đầu, as đứng ngay sau."),
      tip("Phát âm: **albeit** có ba âm tiết /ɔːlˈbiː.ɪt/, nhấn âm giữa, đừng đọc thành “al-bait”. **Notwithstanding** /ˌnɒt.wɪθˈstæn.dɪŋ/ nhấn vào stand. Trong câu Much as I'd like to, nhấn vào **much** để người nghe biết một lời phản bác sắp tới."),
      teacher("Khi chấm bài luận của học viên, lỗi tôi gặp nhiều nhất ở trình độ này không phải là sai ngữ pháp, mà là **nhồi cấu trúc**: một đoạn năm câu có cả albeit, notwithstanding, much as và granted. Giám khảo nhìn là biết bạn đang trình diễn. Cách tập của tôi: lấy một câu although các bạn đã viết, **viết lại theo ba cách** (Much as..., Granted..., tính từ + as...), đọc to cả ba và chọn cách hợp giọng đoạn văn nhất. Trong bài thật, hai ba cấu trúc đặt đúng chỗ là đủ. Và trước khi phản bác, luôn tự hỏi: người phản đối mình đúng ở điểm nào? Thừa nhận đúng điểm đó, bài của các bạn sẽ chín chắn hơn hẳn."),
      summary(
        "**Much as + S + V** và **tính từ + as + S + V** (Tired as she was) là mệnh đề nhượng bộ: vế sau không thêm but.",
        "**Albeit** thường + tính từ, trạng từ, cụm danh từ hoặc cụm giới từ (albeit slowly, albeit a small one); tránh mệnh đề đầy đủ.",
        "**Notwithstanding** và **for all** chủ yếu + danh từ (Notwithstanding the risks; For all its flaws). Muốn dùng mệnh đề thì quay về although (hoặc notwithstanding that, rất trang trọng).",
        "**Granted, ...** và **Admittedly, ...** là câu thừa nhận độc lập, rồi lật lại bằng but, That said hoặc Even so.",
        "Nhượng bộ **vừa đủ** rồi phản bác bằng lý do cụ thể; hai ba cấu trúc đặt đúng chỗ tốt hơn nhồi tất cả vào một đoạn.",
      ),
    ],
  },
  words: [
    word("albeit", "/ɔːlˈbiː.ɪt/", "dù là, mặc dù", "The economy recovered, albeit more slowly than expected.", "al|be|it", 1, "Ba âm tiết, nhấn âm giữa: al-BEE-it. Đừng đọc thành “al-bait”."),
    word("notwithstanding", "/ˌnɒt.wɪθˈstæn.dɪŋ/", "bất chấp, mặc dù", "Notwithstanding the delays, the project stayed within budget.", "not|with|stand|ing", 2),
    word("counterargument", "/ˈkaʊn.tər.ɑː.ɡju.mənt/", "lập luận phản bác", "A strong essay anticipates the main counterargument.", "coun|ter|ar|gu|ment", 0),
    word("acknowledge", "/əkˈnɒl.ɪdʒ/", "thừa nhận", "I acknowledge that the proposal has some weaknesses.", "ac|know|ledge", 1, "Chữ k câm, đọc là /əkˈnɒl.ɪdʒ/."),
    word("rebuttal", "/rɪˈbʌt.əl/", "sự bác bỏ", "Her rebuttal was calm, precise and convincing.", "re|but|tal", 1),
    word("valid", "/ˈvæl.ɪd/", "hợp lý, có cơ sở", "You raise a valid point, but it doesn't change the overall picture.", "val|id", 0),
    word("compelling", "/kəmˈpel.ɪŋ/", "thuyết phục, đầy sức nặng", "She presented compelling evidence for the change.", "com|pel|ling", 1),
    word("undermine", "/ˌʌn.dəˈmaɪn/", "làm suy yếu", "One weak example can undermine your whole argument.", "un|der|mine", 2),
  ],
  exercises: [
    mc("c1-4-1", "___ I admire his energy, I can't support his proposal.", ["Much as", "Despite", "Albeit", "Notwithstanding"], 0, "Phía sau là mệnh đề (I admire his energy), nên cần Much as. Despite không đi với mệnh đề; albeit thường đi với cụm ngắn và notwithstanding cần that mới nối được mệnh đề."),
    mc("c1-4-2", "Câu nào đúng?", ["The plan worked, albeit it was expensive.", "The plan worked, albeit at a high cost.", "The plan worked, albeit of the cost.", "Albeit the cost, the plan worked."], 1, "Albeit + cụm ngắn (at a high cost), đứng sau mệnh đề chính. Mệnh đề đầy đủ sau albeit hiếm và nên tránh; albeit không có of, không đứng đầu câu với danh từ."),
    fill("c1-4-3", "___ as she was, she refused to leave the office until the report was finished. (mệt mỏi)", ["Tired", "Exhausted", "Weary"], "Tính từ + as + chủ ngữ + động từ: dù mệt đến mấy. Tính từ đứng đầu, không có mạo từ hay very."),
    fill("c1-4-4", "For ___ its flaws, the new system is a huge improvement on the old one.", ["all"], "For all + danh từ: dù có... đến đâu. For all its flaws: dù còn nhiều thiếu sót."),
    reorder("c1-4-5", "We reached an agreement, albeit a temporary one.", "Albeit + cụm danh từ (a temporary one), đứng ngay sau mệnh đề chính."),
    reorder("c1-4-6", "That said, the long-term costs are far higher.", "That said đứng đầu câu để thừa nhận điều vừa nói rồi lật lại ngay."),
    listen("c1-4-7", "Much as I'd like to agree, the figures simply don't support your conclusion.", ["Tôi đồng ý với bạn vì số liệu rất rõ ràng.", "Tôi muốn có thêm số liệu trước khi đồng ý với bạn.", "Dù rất muốn đồng ý, số liệu đơn giản là không ủng hộ kết luận của bạn.", "Số liệu cho thấy kết luận của bạn hoàn toàn đúng."], 2, "Much as I'd like to agree: dù rất muốn đồng ý. Vế sau mới là ý chính: không đồng ý."),
    listen("c1-4-8", "For all his experience, he handled the crisis surprisingly badly.", ["Nhờ nhiều kinh nghiệm, ông ấy xử lý khủng hoảng rất tốt.", "Dù có nhiều kinh nghiệm đến đâu, ông ấy vẫn xử lý khủng hoảng tệ đến bất ngờ.", "Ông ấy thiếu kinh nghiệm nên xử lý khủng hoảng kém."], 1, "For all his experience: dù có nhiều kinh nghiệm, không phải nhờ kinh nghiệm."),
    correct("c1-4-9", "Much as I respect your opinion, but I cannot agree with it.", "Much as I respect your opinion, I cannot agree with it.", "Much as đã mang nghĩa mặc dù, nên vế sau không thêm but."),
    correct("c1-4-10", "Profits increased, albeit they increased only slightly.", ["Profits increased, albeit only slightly.", "Profits increased, albeit slightly.", "Profits increased, although they increased only slightly."], "Sau albeit nên dùng cụm ngắn thay vì mệnh đề có chủ ngữ và động từ chia (dạng này hiếm, nghe vụng và lặp): albeit only slightly. Nếu muốn giữ mệnh đề thì dùng although."),
  ],
  speaking: [
    say("Much as I understand your concern, we can't change the deadline.", "Dù tôi rất hiểu mối lo của anh, chúng tôi không thể đổi hạn chót."),
    say("Granted, the plan is expensive. That said, it will save us money in the long run.", "Phải công nhận là kế hoạch tốn kém. Dù vậy, về lâu dài nó sẽ giúp chúng ta tiết kiệm."),
    say("The project succeeded, albeit more slowly than we had hoped.", "Dự án đã thành công, dù là chậm hơn chúng tôi mong đợi."),
  ],
  freeSpeaking: free(
    "Some people say that working from home reduces productivity. What is your view?",
    "Trình bày quan điểm của bạn: thừa nhận phần hợp lý của ý kiến đối lập bằng ít nhất hai cấu trúc nhượng bộ của bài (Granted, Much as, albeit, for all...), rồi phản bác bằng lý do và ví dụ cụ thể.",
    "Granted, working from home isn't ideal for everyone. Some people find it hard to concentrate, and new employees can miss out on learning from their colleagues. That said, I don't think it reduces productivity overall. In my own team, we've actually completed more projects since we moved to a hybrid model, albeit with a few teething problems at the start. Much as I enjoy seeing my colleagues in person, I get far more focused work done at home, simply because I don't spend two hours a day in traffic. So, for all its drawbacks, I'd say remote work tends to improve productivity when it's managed well.",
  ),
  dialogue: dialogue(
    "Đàm phán giá với nhà nhập khẩu",
    "Ông Klein, giám đốc mua hàng của một công ty nội thất Đức, đang đàm phán hợp đồng năm tới với chị Hương, giám đốc kinh doanh một xưởng gỗ ở Bình Dương. Ông cho rằng giá của chị quá cao; chị cần thừa nhận điểm hợp lý rồi phản bác khéo léo.",
    { A: "Ông Klein (giám đốc mua hàng)", B: "Chị Hương (giám đốc kinh doanh)" },
    A("Ms Dinh, I'll be frank. Your price is twelve per cent higher than your competitors'.", "Chị Đinh, tôi nói thẳng nhé. Giá của chị cao hơn các đối thủ mười hai phần trăm."),
    B("Granted, our unit price is higher. That said, our defect rate is the lowest in the region.", "Phải công nhận là đơn giá của chúng tôi cao hơn. Dù vậy, tỷ lệ hàng lỗi của chúng tôi thấp nhất khu vực."),
    A("Much as I respect your quality record, my board looks at the invoice, not the defect rate.", "Dù tôi rất trân trọng thành tích chất lượng của chị, hội đồng quản trị của tôi nhìn vào hóa đơn chứ không nhìn vào tỷ lệ lỗi."),
    B("That's a valid concern. But once you count returns, the total cost is lower, albeit only slightly.", "Đó là mối lo có cơ sở. Nhưng khi tính cả hàng bị trả về, tổng chi phí lại thấp hơn, dù chỉ thấp hơn một chút."),
    A("Perhaps. Notwithstanding your quality, a late delivery last spring cost us a major customer.", "Có thể. Bất kể chất lượng của chị thế nào, đợt giao hàng trễ mùa xuân năm ngoái đã khiến chúng tôi mất một khách hàng lớn."),
    B("You're right, and I won't make excuses. For all our efforts, we simply didn't have enough storage then.", "Ông nói đúng, và tôi sẽ không bào chữa. Dù đã cố gắng hết sức, hồi đó chúng tôi đơn giản là không đủ kho chứa."),
    A("And now?", "Còn bây giờ?"),
    B("We've since opened a second warehouse in Hai Phong. Small as it is, it cuts our delivery times by a week.", "Từ đó chúng tôi đã mở thêm một kho ở Hải Phòng. Dù nhỏ, nó giúp rút ngắn thời gian giao hàng một tuần."),
    A("A warehouse is one thing. What guarantee can you actually offer?", "Có kho là một chuyện. Chị thực sự có thể đưa ra bảo đảm gì?"),
    B("We could add a penalty clause for late delivery. Unusual as that is in our industry, we're confident enough to offer it.", "Chúng tôi có thể thêm điều khoản phạt khi giao hàng chậm. Dù điều đó khá hiếm trong ngành, chúng tôi đủ tự tin để đưa ra."),
    A("That's compelling. Even so, I'd still need a small reduction to convince the board.", "Điều đó khá thuyết phục. Dù vậy, tôi vẫn cần giảm giá chút ít để thuyết phục hội đồng quản trị."),
    B("Tight as our margins are, we could offer three per cent on orders above ten thousand units.", "Dù biên lợi nhuận đã mỏng, chúng tôi có thể giảm ba phần trăm cho các đơn hàng trên mười nghìn sản phẩm."),
    A("It's less than I hoped for, but I think I can work with that.", "Mức đó ít hơn tôi mong đợi, nhưng tôi nghĩ tôi có thể chấp nhận."),
  ),
  dialogueQuestions: [
    listenQ("c1-4-d1", "What does Ms Dinh admit about the total cost?", "That's a valid concern. But once you count returns, the total cost is lower, albeit only slightly.", ["It is much lower than her competitors'.", "It is lower, but only by a small amount.", "It is the same as her competitors'.", "It is higher once returns are counted."], 1, "Albeit only slightly: tổng chi phí thấp hơn, nhưng chỉ thấp hơn một chút. Bà Đinh thừa nhận giới hạn của lập luận mình."),
    mc("c1-4-d2", "Why did Mr Klein's company lose a major customer last spring?", ["Because of poor product quality", "Because the price went up", "Because of a late delivery", "Because a warehouse closed"], 2, "A late delivery last spring cost us a major customer."),
    mc("c1-4-d3", "What does “Unusual as that is in our industry” tell us about the penalty clause?", ["Most suppliers in the industry do not offer one.", "It is illegal in the industry.", "Every supplier in the industry offers one.", "Mr Klein asked for it first."], 0, "Unusual as that is: dù điều đó hiếm gặp. Tức là phần lớn nhà cung cấp không đưa ra điều khoản này, nên đề nghị của chị Hương càng có sức nặng."),
  ],
  reading: reading({
    title: "Should Hanoi ban motorbikes from its centre?",
    text: `Few policy proposals divide Hanoi residents as sharply as the plan to ban motorbikes from the inner districts. For its supporters, the ban is overdue: the city's air quality is frequently among the worst in the region, and the streets of the Old Quarter are close to gridlock for much of the day. For its critics, it is an attack on the livelihoods of millions who depend on two wheels. Having weighed both positions, I believe the ban is justified, albeit only if it is introduced gradually and backed by serious investment in public transport.

Let me begin with the strongest objection. Motorbikes are not a luxury in Vietnam; they are how people get to work, deliver goods and take children to school. Granted, a family with one motorbike and no car will be hit far harder by a ban than a wealthy household with other options. Any honest case for the policy must start by acknowledging that its costs will fall unevenly.

Much as I sympathise with this concern, however, it is an argument for designing the ban carefully, not for abandoning it. The costs of doing nothing also fall unevenly. It is the street vendor, the delivery rider and the child walking to school who breathe the dirtiest air, not those who travel in air-conditioned cars. Inaction, in other words, is not neutral.

A second objection is that the alternatives are not ready. This is largely true. The metro network, for all the money spent on it, still covers only a fraction of the city, and many bus routes remain slow and unreliable. Tempting as it may be for officials to announce a date and hope that transport improves in time, such an approach would almost certainly fail. Commuters will not give up their bikes for a bus that arrives every forty minutes.

The answer, then, is sequencing. A ban should be phased in over several years, beginning with a small pedestrian zone and expanding only as each new metro line opens. Revenue from congestion charges could fund cheaper fares and more frequent buses, so that the people most affected are also those who benefit first. Notwithstanding the political difficulty, other Asian cities have managed transitions of this kind, and there is no obvious reason why Hanoi could not do the same.

None of this will be easy, and mistakes are inevitable. But a city of more than eight million people cannot keep choking on its own traffic. The real question is not whether Hanoi should reduce its dependence on motorbikes, but how fairly and how quickly it can do so.`,
    glossary: [
      ["gridlock", "tắc nghẽn hoàn toàn"],
      ["livelihood", "sinh kế, kế sinh nhai"],
      ["neutral", "trung lập, không gây tác động"],
      ["sequencing", "sắp xếp trình tự các bước"],
      ["phase in", "áp dụng dần dần"],
      ["congestion charge", "phí đi vào khu vực hay tắc đường"],
    ],
    questions: [
      mc("c1-4-r1", "Which statement best summarises the writer's position?", ["Motorbikes should be banned immediately.", "A ban would be unfair and should be abandoned.", "A ban is justified, but only if it is gradual and supported by better public transport.", "Hanoi should copy another city's plan exactly."], 2, "I believe the ban is justified, albeit only if it is introduced gradually and backed by serious investment in public transport."),
      mc("c1-4-r2", "According to the writer, who breathes the dirtiest air?", ["Wealthy car owners", "Street vendors, delivery riders and children walking to school", "City officials", "Metro passengers"], 1, "It is the street vendor, the delivery rider and the child walking to school who breathe the dirtiest air."),
      mc("c1-4-r3", "Why does the writer say “Much as I sympathise with this concern”?", ["To show that the objection is taken seriously before arguing against it", "To agree fully with the critics", "To change the subject", "To criticise the government"], 0, "Much as mở đầu một lời nhượng bộ: người viết thừa nhận mối lo của phe phản đối, rồi mới phản bác ở vế sau."),
      mc("c1-4-r4", "What does the writer imply about announcing a fixed date for the ban now?", ["It would encourage faster investment.", "It is the only realistic option.", "It has already worked well in Hanoi.", "It would probably fail because public transport is not ready."], 3, "Such an approach would almost certainly fail. Commuters will not give up their bikes for a bus that arrives every forty minutes."),
      fill("c1-4-r5", "The writer argues that ___, or doing nothing, is not neutral. (một từ, đoạn ba)", ["inaction"], "Inaction: việc không hành động. Nghĩa đoán được từ cụm the costs of doing nothing ngay phía trước."),
    ],
  }),
  task: task({
    prompt: "Viết bài luận kiểu IELTS Writing Task 2 (260–300 từ) cho đề: “Some people believe that working from home reduces employees' productivity. To what extent do you agree or disagree?” Bài có mở bài nêu rõ quan điểm, hai hoặc ba đoạn thân bài và kết bài. Dùng ít nhất bốn cấu trúc nhượng bộ khác nhau của bài.",
    hints: [
      "Mở bài: nêu quan điểm đối lập trong một câu, rồi nêu quan điểm của bạn.",
      "Thân bài một: thừa nhận nhược điểm thật bằng Granted..., rồi lật lại bằng Much as... hoặc That said.",
      "Thân bài hai: đưa lý do và bằng chứng, dùng albeit hoặc for all + danh từ.",
      "Kết bài: khẳng định lại quan điểm, có thể dùng Notwithstanding... hoặc That said, không thêm ý mới.",
    ],
    model:
      "In recent years, millions of office workers have discovered that much of their job can be done from a kitchen table. Some commentators argue that this shift has made employees less productive. While this concern is understandable, I would argue that remote work, when properly managed, tends to raise productivity rather than reduce it.\n\nGranted, working from home has genuine drawbacks. Without a clear routine, some employees struggle to separate work from family life, and spontaneous problem-solving with colleagues becomes less frequent. Newer staff in particular may find it harder to learn by watching experienced colleagues. Much as I value the energy of a shared office, however, these problems are largely a matter of management rather than an inevitable feature of remote work. Regular video meetings, clear targets and occasional office days can address most of them.\n\nWhat critics tend to ignore is the time and energy that employees regain. A worker who no longer spends two hours a day commuting has more time for focused tasks, and many surveys have found that remote staff report completing more work, albeit with considerable variation between sectors. For all the talk of distraction at home, the open-plan office is hardly a model of concentration either, with its constant noise and interruptions.\n\nAdmittedly, the evidence is not entirely one-sided, and some roles, such as those in manufacturing or hospitality, cannot be done remotely at all. Notwithstanding these exceptions, the balance of evidence suggests that for most office-based jobs, flexibility improves output.\n\nIn conclusion, remote work is not a solution for every employee or every organisation. That said, when it is supported by good management, it is far more likely to enhance productivity than to undermine it.",
    checklist: [
      "Bài có mở bài nêu quan điểm, hai hoặc ba đoạn thân bài và kết bài",
      "Có ít nhất bốn cấu trúc nhượng bộ khác nhau (Granted, Much as, albeit, for all, notwithstanding, tính từ + as...)",
      "Sau albeit dùng cụm ngắn, tránh mệnh đề đầy đủ; sau Much as không thêm but",
      "Mỗi lần nhượng bộ đều được phản bác bằng lý do hoặc bằng chứng cụ thể",
      "Kết bài khẳng định lại quan điểm, không thêm ý mới",
    ],
    minWords: 260,
  }),
});

const tinhTe = lesson({
  slug: "ngon-ngu-tinh-te",
  title: "Ngôn ngữ tinh tế",
  minutes: 35,
  lecture: {
    title: "Nói giảm, làm mềm lời nói và hàm ý",
    blocks: [
      p("Một học viên của tôi làm ở công ty kiểm toán nhận email của sếp người Anh: “Perhaps you might like to have another look at the figures.” Bạn ấy tưởng là lời gợi ý, để đến tuần sau mới xem. Hôm sau sếp hỏi sao chưa sửa. Thực ra câu đó là **yêu cầu sửa ngay**, chỉ được nói rất nhẹ nhàng. Bài này giúp bạn đọc được cái ý nằm dưới lớp chữ, và tự mình nói được như vậy."),
      p("Người bản xứ, nhất là người Anh, hiếm khi nói thẳng “Tôi không đồng ý” hay “Ý tưởng này tệ”. Họ dùng **nói giảm** (understatement) và **làm mềm** lời nói. Hiểu sai hàm ý là nguyên nhân của rất nhiều hiểu lầm trong môi trường làm việc quốc tế."),
      table(
        ["Câu nói", "Nghĩa đen", "Hàm ý thực sự"],
        ["It's not ideal.", "Nó chưa lý tưởng.", "Có vấn đề khá lớn."],
        ["I'm not entirely convinced.", "Tôi chưa hoàn toàn bị thuyết phục.", "Tôi không đồng ý."],
        ["That's an interesting idea.", "Ý tưởng thú vị đấy.", "Tôi nghi ngờ ý tưởng này."],
        ["With all due respect...", "Với tất cả sự tôn trọng...", "Tôi sắp phản bác bạn."],
        ["It's not exactly cheap.", "Nó không hẳn là rẻ.", "Nó đắt."],
        ["I'd have thought...", "Tôi cứ tưởng...", "Tôi nghĩ khác bạn."],
      ),
      p("**Làm mềm khi nói** ở trình độ C1 không dừng ở might hay a little (các bạn đã học ở B2). Người bản xứ dùng những khung câu có sẵn: **You might want to...** (bạn nên...), **It might be worth -ing** (có lẽ nên...), **I wonder whether...** (tôi e là...), **not exactly** + tính từ tích cực, **I'm not sure that's quite right** (chỗ này sai). Hình thức thì lịch sự, nhưng nội dung vẫn rõ ràng."),
      ex("You might want to double-check those figures before the meeting.", "Có lẽ bạn nên kiểm tra lại mấy con số đó trước cuộc họp.", "Nghe như gợi ý, nhưng thực chất là: số liệu có vấn đề, hãy sửa trước khi họp."),
      ex("I was a bit disappointed with the results.", "Tôi hơi thất vọng về kết quả.", "Với người Anh, a bit disappointed có thể có nghĩa là rất thất vọng."),
      ex("It might be worth running the survey again with a bigger sample.", "Có lẽ nên làm lại khảo sát với mẫu lớn hơn.", "It might be worth + V-ing. Người nghe hiểu: mẫu hiện tại chưa đủ tin cậy."),
      ex("Perhaps we could revisit the timeline before we commit.", "Có lẽ chúng ta nên xem lại tiến độ trước khi cam kết.", "Hình thức là gợi ý, nhưng trong họp hành, câu này thường có nghĩa là: tiến độ hiện tại không ổn."),
      mistake("Your plan is wrong.", "I'm not sure the plan fully addresses the problem.", "Trong môi trường chuyên nghiệp, câu phủ định thẳng thừng dễ bị coi là thô lỗ. Hãy làm mềm và nhắm vào vấn đề, không nhắm vào người."),
      mistake("It might be worth to check the contract again.", "It might be worth checking the contract again.", "Tiếng Việt “đáng để kiểm tra” khiến người học đặt to sau worth. Worth luôn đi với V-ing hoặc danh từ: worth checking, worth a try."),
      p("**Thành ngữ** cũng mang sắc thái riêng và cần đúng ngữ cảnh: **the elephant in the room** (vấn đề ai cũng biết nhưng né tránh), **a blessing in disguise** (trong cái rủi có cái may), **cut corners** (làm ẩu để tiết kiệm thời gian hoặc tiền)."),
      mistake("I think maybe perhaps this could possibly be a little wrong.", "This may not be entirely accurate.", "Vì sợ thất lễ, người Việt hay chồng nhiều lớp làm mềm lên một câu, nghe thành rụt rè và khó hiểu. Một lớp làm mềm đặt đúng chỗ là đủ lịch sự."),
      p("Lớp nghĩa ngầm cuối cùng là **mỉa mai** (sarcasm): người nói dùng một lời khen quá mức so với tình huống, kèm giọng kéo dài hoặc đều đều, để nói điều ngược lại. Máy in hỏng lần thứ ba trong tuần, đồng nghiệp thở dài: “Oh, **brilliant**. Just what I needed.” Nghĩa thật là: bực quá. Dấu hiệu để nhận ra: lời khen **không khớp** với sự việc, và ngữ điệu **không vui**. Trong email không có giọng nói nên mỉa mai rất dễ bị hiểu lầm; vì vậy đừng viết mỉa mai trong thư công việc."),
      tip("Khi nghe phản hồi, hãy chú ý **ngữ điệu** và các khung câu làm mềm. Trong tiếng Anh-Anh, quite good thường chỉ có nghĩa là **tạm được**, không phải “khá tốt” như người Việt hay hiểu."),
      teacher("Tôi hay nói với học viên: tiếng Việt mình cũng có nói giảm, như “để em xem lại” thay cho “không”, hay “cũng được” khi thật ra chưa hài lòng. Vậy nên các bạn **không thiếu sự tinh tế, chỉ thiếu vốn câu**. Mỗi khi nghe một người bản xứ nhận xét, hãy ghi câu họ nói vào sổ, bên cạnh ghi hai cột: nghĩa đen và điều họ thực sự muốn nói. Sau vài tháng, cuốn sổ ấy sẽ quý hơn bất kỳ cuốn sách ngữ pháp nào."),
      summary(
        "Người Anh hay **nói giảm**: It's not ideal nghĩa là có vấn đề đáng kể; not exactly cheap nghĩa là đắt; I'm not entirely convinced nghĩa là tôi không đồng ý.",
        "Lời gợi ý của cấp trên (Perhaps you might like to..., You might want to...) thường là **yêu cầu**: hãy làm ngay, đừng để sau.",
        "**Làm mềm khi nói** bằng khung câu: You might want to..., It might be worth + V-ing, I wonder whether..., I'm not sure that's quite right. Một lớp là đủ, đừng chồng nhiều lớp.",
        "Phê bình nhắm vào **vấn đề**, không nhắm vào người: I'm not sure the plan fully addresses..., không nói Your plan is wrong.",
        "Thành ngữ là cụm cố định (the elephant in the room, a blessing in disguise, cut corners). Mỉa mai là lời khen không khớp sự việc; đừng viết mỉa mai trong email công việc.",
      ),
    ],
  },
  words: [
    word("subtle", "/ˈsʌt.əl/", "tinh tế, khó nhận ra", "There's a subtle difference between confident and arrogant.", "sub|tle", 0, "Chữ b câm, không đọc âm /b/."),
    word("understatement", "/ˈʌn.dəˌsteɪt.mənt/", "cách nói giảm", "Calling the project a challenge is an understatement.", "un|der|state|ment", 0),
    word("hedge", "/hedʒ/", "nói rào đón, tránh cam kết", "Politicians often hedge when asked difficult questions.", "hedge", 0),
    word("implication", "/ˌɪm.plɪˈkeɪ.ʃən/", "hàm ý", "The implication was that we had made a mistake.", "im|pli|ca|tion", 2),
    word("diplomatic", "/ˌdɪp.ləˈmæt.ɪk/", "khéo léo, tế nhị", "She gave a diplomatic answer to avoid offending anyone.", "dip|lo|mat|ic", 2),
    word("tactful", "/ˈtækt.fəl/", "tế nhị, biết ý", "It was tactful of him not to mention the mistake.", "tact|ful", 0),
    word("blunt", "/blʌnt/", "thẳng thừng, bộc trực", "To be blunt, the proposal isn't good enough.", "blunt", 0),
    word("sarcastic", "/sɑːˈkæs.tɪk/", "mỉa mai", "When he said “great job”, he was being sarcastic.", "sar|cas|tic", 1),
  ],
  exercises: [
    mc("c1-5-1", "Quản lý người Anh nói về bản kế hoạch của bạn: “It's not ideal.” Ý thực sự là gì?", ["Kế hoạch rất tốt, chỉ cần sửa chút ít.", "Kế hoạch hoàn hảo.", "Kế hoạch có vấn đề đáng kể."], 2, "It's not ideal là cách nói giảm; thực tế vấn đề khá nghiêm trọng."),
    mc("c1-5-2", "Câu nào lịch sự và được làm mềm vừa phải nhất?", ["This idea is bad.", "This idea might need a little more work.", "I hate this idea.", "This idea is wrong."], 1, "Might và a little làm mềm lời phê bình, nhưng ý vẫn rõ: cần sửa thêm."),
    fill("c1-5-3", "The results were, to some ___, better than we expected.", ["extent", "degree"], "To some extent (ở một mức độ nào đó) là cụm làm mềm phổ biến."),
    fill("c1-5-4", "Nobody wanted to mention the elephant in the ___: the budget cuts.", ["room"], "The elephant in the room: vấn đề ai cũng biết nhưng không ai dám nói."),
    reorder("c1-5-5", "I'm not entirely convinced by this proposal.", "Cách lịch sự để nói rằng bạn không đồng ý."),
    reorder("c1-5-6", "Losing that job was a blessing in disguise.", "A blessing in disguise: trong cái rủi có cái may."),
    listen("c1-5-7", "With all due respect, I think we may be missing the bigger picture.", ["Với tất cả sự tôn trọng, tôi nghĩ có lẽ chúng ta đang bỏ qua bức tranh toàn cảnh.", "Tôi hoàn toàn đồng ý với bạn.", "Tôi rất tôn trọng bạn nên không có ý kiến gì thêm."], 0, "With all due respect thường báo hiệu một lời phản bác."),
    listen("c1-5-8", "The printer's broken again? Oh, brilliant. Just what I needed.", ["Người nói vui vì máy in đã được sửa xong.", "Người nói đang bực mình vì máy in lại hỏng.", "Người nói khen chiếc máy in mới rất tốt."], 1, "Brilliant ở đây là mỉa mai: lời khen không khớp với sự việc máy in hỏng, nên nghĩa thật là bực bội."),
    correct("c1-5-9", "We can't afford to cut the corners on safety.", "We can't afford to cut corners on safety.", "Cut corners là thành ngữ cố định, không có the. Thành ngữ không được thêm, bớt hay đổi từ."),
    correct("c1-5-10", "It might be worth to ask the client before we change the design.", "It might be worth asking the client before we change the design.", "Worth đi với V-ing: worth asking, không viết worth to ask."),
  ],
  speaking: [
    say("I'm not entirely convinced this is the best approach.", "Tôi chưa hoàn toàn bị thuyết phục rằng đây là cách tốt nhất."),
    say("It might be worth checking the figures again before we send them.", "Có lẽ nên kiểm tra lại số liệu trước khi gửi đi."),
    say("Let's address the elephant in the room.", "Hãy nói thẳng vào vấn đề mà ai cũng đang né tránh."),
  ],
  freeSpeaking: free(
    "How would you tell a colleague, politely, that their presentation needs a lot more work?",
    "Nói khoảng một phút: bạn sẽ góp ý thế nào với một đồng nghiệp có bài thuyết trình còn nhiều vấn đề. Ghi nhận điểm tốt, làm mềm lời phê bình bằng các khung câu của bài, và đưa ra một bước tiếp theo rõ ràng.",
    "I'd probably start by mentioning something I genuinely liked, maybe the opening story, because it really caught everyone's attention. Then I'd say something like, “I'm not sure the middle section quite works yet. It might be worth cutting a few of the slides with detailed figures.” I wouldn't say the presentation was bad, because that would only make them defensive. Instead, I'd suggest a specific next step: “You might want to run through it with me on Thursday, and we can look at the timing together.” That way the message is soft, but it's still perfectly clear.",
  ),
  dialogue: dialogue(
    "Nhận phản hồi về bản báo cáo",
    "James, quản lý người Anh ở một công ty tư vấn, góp ý bản nháp báo cáo khảo sát khách hàng của Linh, chuyên viên phân tích người Việt. Linh vừa phải đọc được hàm ý trong lời nhận xét của sếp, vừa phải tế nhị khi nói lên ý kiến của mình.",
    { A: "James (quản lý)", B: "Linh (chuyên viên phân tích)" },
    A("Thanks for the draft, Linh. It's an interesting approach.", "Cảm ơn em về bản nháp nhé Linh. Cách tiếp cận thú vị đấy."),
    B("Thank you. Should I take that to mean you have some doubts about it?", "Em cảm ơn anh. Em có nên hiểu là anh đang có chút nghi ngờ về nó không ạ?"),
    A("Well, I'm not entirely convinced the survey sample is large enough.", "Ờ, anh chưa hoàn toàn bị thuyết phục rằng mẫu khảo sát đủ lớn."),
    B("That's fair. To some extent, the sample size was limited by the budget.", "Hợp lý ạ. Ở một mức độ nào đó, cỡ mẫu bị giới hạn bởi ngân sách."),
    A("Understood. You might also want to have another look at the conclusions.", "Anh hiểu. Em cũng nên xem lại phần kết luận."),
    B("I'll revise them today. Are they too strong?", "Em sẽ sửa ngay trong hôm nay. Chúng có khẳng định mạnh quá không ạ?"),
    A("A little. “The campaign failed” is rather blunt. “The campaign had a limited effect” would be more diplomatic.", "Hơi mạnh. Câu “Chiến dịch đã thất bại” khá thẳng thừng. Câu “Chiến dịch có tác động hạn chế” sẽ khéo hơn."),
    B("Got it. And with all due respect, I wonder whether the deadline might be a little tight for a second survey.", "Em hiểu rồi. Và với tất cả sự tôn trọng, em e là hạn chót hơi gấp để làm thêm một đợt khảo sát nữa."),
    A("You're right. Let's not cut corners, then. I'll ask the client for another week.", "Em nói đúng. Vậy thì đừng làm ẩu. Anh sẽ xin khách thêm một tuần."),
    B("Thank you. Missing the first deadline might turn out to be a blessing in disguise.", "Em cảm ơn anh. Lỡ hạn chót đầu tiên biết đâu lại là trong cái rủi có cái may."),
    A("Quite possibly. Oh, and the old client logo on page two? Brilliant. Just what the report needed.", "Có khi thế thật. À, còn cái logo cũ của khách ở trang hai? Tuyệt thật. Đúng là thứ bản báo cáo đang cần."),
    B("I'll take that as sarcasm and replace it with the new one straight away.", "Em sẽ hiểu đó là câu mỉa mai và thay ngay bằng logo mới ạ."),
  ),
  dialogueQuestions: [
    listenQ("c1-5-d1", "What does James really mean when he calls the draft “an interesting approach”?", "Thanks for the draft, Linh. It's an interesting approach.", ["He is impressed and wants no changes.", "He has doubts about it.", "He has not read it yet.", "He finds it amusing."], 1, "That's an interesting idea/approach thường là cách nói giảm cho sự nghi ngờ. Linh đoán đúng, và James xác nhận ngay sau đó."),
    mc("c1-5-d2", "Why does James decide to ask the client for another week?", ["The client asked for more time.", "The logo needs to be replaced.", "The survey sample was large enough.", "Linh points out that the deadline is too tight for a second survey."], 3, "Linh nói tế nhị rằng hạn chót quá gấp, và James đồng ý: Let's not cut corners, then."),
    mc("c1-5-d3", "How does Linh interpret James's comment about the old logo?", ["As genuine praise", "As sarcasm meaning the logo is a mistake", "As a question about the design", "As a joke about the client"], 1, "Lời khen Brilliant không khớp với sự việc (logo cũ), nên đó là mỉa mai: logo cần được thay."),
  ],
  reading: reading({
    title: "Lost in politeness",
    text: `A few years ago, a Dutch engineer working for a British firm told me about the most confusing meeting of his career. He had presented a proposal to his new manager, who listened carefully and replied, "That's very interesting. You might want to think about the timing." The engineer went home pleased. A week later he discovered that the proposal had been quietly shelved. "Interesting," it turned out, had meant "unconvincing", and "you might want to think about the timing" had meant "this will not happen this year".

Stories like this are so common in international companies that they have become something of a cliché. Yet the misunderstandings they describe are real, and they are costly. When feedback is softened so heavily that the message disappears, deadlines are missed, work has to be redone and relationships suffer. The listener feels misled; the speaker feels that they were perfectly clear.

It would be easy to blame the speakers. British English in particular has a reputation for indirectness, and some commentators have argued that it is simply inefficient. I am not entirely convinced. Understatement and softening serve genuine purposes: they allow people to disagree without humiliating each other, to leave room for the other person's view, and to preserve working relationships over many years. A manager who says "that's not quite what we discussed" rather than "you got it wrong" is not being vague. He is being careful.

The difficulty lies not in softening itself but in the assumption that everyone decodes it in the same way. Listeners from cultures that value directness may take softened criticism at face value. Vietnamese professionals, interestingly, often face a different problem. Many of them are highly skilled at reading indirect messages in their own language, where "để em xem lại" can be a polite refusal, but they do not always recognise the English equivalents. The skill is there; the phrases are not.

So what can international teams do? The most effective managers I have worked with adopt a simple habit: they soften the delivery but not the content. They might begin with "I'm not sure this quite works", but they follow it immediately with a specific reason and a clear next step. For listeners, the advice is equally simple. When in doubt, ask. A question such as "Just to be clear, would you like me to change the timeline?" is never rude, and it may save a week of wasted work.`,
    glossary: [
      ["shelve", "gác lại (kế hoạch, đề xuất)"],
      ["cliché", "chuyện nhàm, sáo mòn"],
      ["misled", "bị dẫn dắt sai, bị đánh lừa"],
      ["humiliate", "làm bẽ mặt"],
      ["decode", "giải mã, hiểu ra"],
      ["at face value", "theo nghĩa bề ngoài"],
    ],
    questions: [
      mc("c1-5-r1", "What is the main idea of the article?", ["Softened feedback is useful, but it causes problems when listeners decode it differently.", "British managers should stop using understatement.", "Dutch engineers are poor at receiving feedback.", "Vietnamese professionals are more polite than British ones."], 0, "Bài viết vừa bảo vệ lối nói giảm, vừa chỉ ra rằng rắc rối nằm ở chỗ mỗi người giải mã một kiểu."),
      mc("c1-5-r2", "What had the manager really meant by “That's very interesting”?", ["Impressive", "Unconvincing", "Surprising", "Amusing"], 1, "Interesting, it turned out, had meant unconvincing."),
      mc("c1-5-r3", "What is the writer's view of indirectness?", ["It is inefficient and should be avoided.", "It is only a British habit.", "It serves real purposes, but the message itself must stay clear.", "It is always rude."], 2, "I am not entirely convinced (rằng nó kém hiệu quả)... they soften the delivery but not the content."),
      mc("c1-5-r4", "What does the writer suggest about many Vietnamese professionals?", ["They are too direct when they speak English.", "They never soften criticism.", "They prefer written feedback to spoken feedback.", "They understand indirectness but need to learn the English phrases for it."], 3, "The skill is there; the phrases are not: kỹ năng đọc hàm ý đã có, chỉ thiếu vốn câu tiếng Anh."),
      fill("c1-5-r5", "According to the writer, the best managers soften the delivery but not the ___. (nội dung)", ["content"], "They soften the delivery but not the content."),
    ],
  }),
  task: task({
    prompt: "Một đồng nghiệp gửi bạn bản đề xuất chương trình khách hàng thân thiết. Bạn thấy ngân sách đào tạo và ngày triển khai chưa thực tế. Hãy viết email phản hồi (230–280 từ): ghi nhận cụ thể điểm tốt, nêu điểm chưa đồng ý một cách tế nhị, và gợi ý hướng sửa.",
    hints: [
      "Mở đầu bằng một lời ghi nhận thật lòng và cụ thể về phần làm tốt.",
      "Nêu điểm chưa đồng ý bằng I'm not entirely convinced..., I wonder whether... hoặc It might not be...",
      "Dùng ít nhất ba cách làm mềm khác nhau, mỗi câu tối đa hai lớp.",
      "Kết bằng đề xuất cụ thể dạng gợi ý: Perhaps we could..., It might be worth + V-ing...",
    ],
    model:
      "Dear Sophie,\n\nThank you for sending over the proposal for the new customer loyalty scheme. It is clearly the result of a great deal of work, and the section on digital rewards is particularly strong. I especially liked the idea of letting customers donate their points to local charities, which could genuinely set us apart from our competitors.\n\nThat said, I'm not entirely convinced that the budget fully reflects the cost of staff training. As far as I can see, the plan assumes that one trainer can prepare all twelve branches in a single month. The figures seem to suggest that we would need at least two additional trainers, which might not be realistic given this year's hiring freeze. I also wonder whether the launch date is quite achievable, since it falls in the same week as the end-of-year stocktake.\n\nPerhaps we could revisit the timeline and run a smaller pilot in two branches first. That way, we could base the full budget on real data rather than estimates, and we would have time to deal with any problems before the national launch. It might also be worth asking the finance team to review the training costs before the proposal goes to the board.\n\nI would be happy to discuss this further whenever it suits you, and I'm sure the scheme will be a success once these details are settled.\n\nBest wishes,\nNam",
    checklist: [
      "Không có câu phủ định thẳng thừng như Your plan is wrong hay This is bad",
      "Có ít nhất ba cách làm mềm khác nhau (not entirely, I wonder whether, might, Perhaps we could, It might be worth), không câu nào chồng quá hai lớp",
      "Lời phê bình nhắm vào con số hoặc vấn đề, không nhắm vào người viết",
      "Có ít nhất hai đề xuất cụ thể thay cho lời chê chung chung",
      "Không có câu mỉa mai; sau worth là V-ing",
    ],
    minWords: 230,
  }),
});

const hocThuat = lesson({
  slug: "van-phong-hoc-thuat",
  title: "Văn phong học thuật",
  minutes: 35,
  lecture: {
    title: "Danh từ hóa, cấu trúc khách quan và ngôn ngữ dẫn nguồn",
    blocks: [
      p("Một nghiên cứu sinh gửi bản nháp bài báo cho giáo sư hướng dẫn ở Úc và nhận lại bản nháp với một lời phê lặp đi lặp lại ở khắp các trang: “too conversational”. Ý tưởng tốt, số liệu chắc, nhưng câu chữ nghe như đang kể chuyện: I think, a lot of, found out, so... Bài hôm nay dạy bạn chuyển giọng **từ nói chuyện sang viết học thuật**."),
      p("Ở B2, các bạn đã học mô tả số liệu (a sharp rise in prices). Ở C1, văn học thuật đòi hỏi ba kỹ năng khác: **danh từ hóa** (nominalisation) để gói cả một ý vào một cụm danh từ, **cấu trúc It khách quan** để tạo khoảng cách với người viết, và **ngôn ngữ dẫn nguồn** với mức độ chắc chắn khớp với bằng chứng."),
      p("**Danh từ hóa** là biến động từ hoặc tính từ thành danh từ. Cả một mệnh đề trở thành chủ ngữ, nên câu súc tích và mang tính khái niệm hơn. Danh từ hóa còn giúp **nối câu**: câu sau mở bằng **This + danh từ** để tóm lại ý câu trước."),
      ex("The scheme failed because it was poorly planned.", "Chương trình thất bại vì được lên kế hoạch kém.", "Văn nói: hai mệnh đề, nối bằng because."),
      ex("The failure of the scheme was largely attributed to poor planning.", "Sự thất bại của chương trình phần lớn được quy cho khâu lập kế hoạch kém.", "Văn học thuật: fail thành failure, cả ý trở thành chủ ngữ của câu."),
      table(
        ["Từ gốc", "Danh từ hóa", "Câu học thuật"],
        ["fail", "failure", "The failure of the reform surprised many observers."],
        ["analyse", "analysis", "Analysis of the data revealed two distinct patterns."],
        ["available", "availability", "The availability of cheap credit fuelled demand."],
        ["resist", "resistance", "Resistance to the policy was strongest in rural areas."],
        ["emerge", "emergence", "The emergence of online banking transformed the sector."],
        ["implement", "implementation", "Implementation of the plan has been uneven."],
      ),
      ex("Many participants reported feeling isolated. This isolation appears to have affected their performance.", "Nhiều người tham gia cho biết họ cảm thấy bị cô lập. Sự cô lập này dường như đã ảnh hưởng đến kết quả của họ.", "This isolation tóm lại cả câu trước, giúp đoạn văn liền mạch mà không lặp lại nguyên câu."),
      mistake("The analyse of the data shows a clear pattern.", "The analysis of the data shows a clear pattern.", "Tiếng Việt chỉ cần thêm “sự”, “việc” trước động từ là thành danh từ, nên người Việt quên đổi hình thái từ. Trong tiếng Anh, phải dùng đúng danh từ: analysis, failure, emergence, không viết the analyse, the fail."),
      p("**Cấu trúc It khách quan** giúp tránh I think mà vẫn nêu được lập luận. Cấu trúc bị động với động từ tường thuật (It is said that...) các bạn đã học ở bài “Người ta nói rằng…”; dưới đây là nhóm cấu trúc dùng để **dẫn dắt người đọc** trong bài học thuật."),
      table(
        ["Cấu trúc", "Chức năng", "Ví dụ"],
        ["It should be noted that...", "lưu ý người đọc một điểm quan trọng", "It should be noted that the sample was small."],
        ["It can be argued that...", "đưa ra lập luận mà không nhân danh cá nhân", "It can be argued that the policy came too late."],
        ["It remains unclear whether...", "nêu một câu hỏi còn bỏ ngỏ", "It remains unclear whether the effect is permanent."],
        ["It is worth noting that...", "làm nổi bật một chi tiết", "It is worth noting that attendance also rose."],
        ["There is evidence to suggest that...", "khẳng định có căn cứ", "There is evidence to suggest that the trend is slowing."],
      ),
      mistake("It remains unclear that the effect is permanent.", "It remains unclear whether the effect is permanent.", "Tiếng Việt nói “vẫn chưa rõ là” nên người Việt dịch thành that. Câu với that không sai ngữ pháp nhưng mang nghĩa khác: nghi ngờ rằng tác động là vĩnh viễn. Muốn nêu một câu hỏi còn bỏ ngỏ (có hay không), dùng whether hoặc if."),
      p("**Ngôn ngữ dẫn nguồn** có hai khung chính: **Tác giả (năm) + động từ dẫn + that...** hoặc **According to tác giả (năm), ...** Động từ dẫn cho thấy thái độ của bạn: **demonstrate, show** (bạn chấp nhận kết quả), **suggest** (thận trọng), **argue, contend** (trung tính, nêu một lập luận còn tranh cãi), **claim** (bạn giữ khoảng cách hơn, có thể sắp phản bác). Mức độ khẳng định phải **khớp với bằng chứng**: một khảo sát nhỏ thì chỉ suggest, nhiều nghiên cứu lớn mới demonstrate."),
      ex("Nguyen (2021) claims that online learning widens inequality, but her sample was limited to a single province.", "Nguyen (2021) cho rằng học trực tuyến làm gia tăng bất bình đẳng, nhưng mẫu nghiên cứu của bà chỉ giới hạn trong một tỉnh.", "Claims báo hiệu người viết giữ khoảng cách, và vế sau lập tức chỉ ra điểm yếu của bằng chứng."),
      mistake("According to Smith (2019) argues that tourism damages coral reefs.", "Smith (2019) argues that tourism damages coral reefs.", "Người Việt hay viết “Theo Smith cho rằng...”, trộn hai cách dẫn nguồn. Chọn một: According to Smith (2019), tourism damages... hoặc Smith (2019) argues that..."),
      tip("Mẹo phát âm: khi danh từ hóa, trọng âm thường **dịch chuyển**. Với đuôi -tion, trọng âm rơi vào âm tiết ngay trước nó: inˈvestigate thành investiˈgation, imˈplement (động từ) thành implemenˈtation. Với -sis cũng đổi: ˈanalyse thành aˈnalysis. Đọc sai trọng âm khi thuyết trình là lỗi người Việt rất hay mắc."),
      teacher("Tôi vẫn dặn các bạn nghiên cứu sinh một cách tự sửa rất hiệu quả: viết bản nháp đầu tiên thoải mái như đang nói, rồi **sửa ba lượt, mỗi lượt chỉ tìm một thứ**. Lượt một, tìm I think và thay bằng một cấu trúc It khách quan. Lượt hai, tìm những câu có hai ba động từ nối nhau bằng so, and, because, rồi thử danh từ hóa một vế. Lượt ba, soát từng chỗ dẫn nguồn: đúng khung chưa, động từ dẫn có khớp với độ mạnh của bằng chứng không. Sửa một lúc mọi thứ thì rối; sửa từng lượt thì bài sạch mà các bạn còn nhớ lâu. Và đừng danh từ hóa mọi thứ: mục tiêu là rõ ràng, không phải phức tạp."),
      summary(
        "**Danh từ hóa** gói cả mệnh đề vào một cụm danh từ (the failure of the scheme); câu sau mở bằng **This + danh từ** để nối ý. Đừng nhồi quá nhiều danh từ liền nhau.",
        "Dùng đúng danh từ: analysis, failure, emergence, availability; không viết the analyse, the fail.",
        "Cấu trúc khách quan: **It should be noted that..., It can be argued that..., It remains unclear whether...** (muốn nêu câu hỏi bỏ ngỏ thì unclear đi với whether hoặc if).",
        "Dẫn nguồn: **Tác giả (năm) argues that...** hoặc **According to tác giả (năm), ...**; không trộn thành According to X argues.",
        "Chọn động từ dẫn theo độ mạnh của bằng chứng: demonstrate (chấp nhận), suggest (thận trọng), argue, contend (nêu lập luận còn tranh cãi), claim (giữ khoảng cách).",
        "Danh từ hóa làm **dịch trọng âm**: inˈvestigate thành investiˈgation, ˈanalyse thành aˈnalysis.",
      ),
    ],
  },
  words: [
    word("nominalisation", "/ˌnɒm.ɪ.nəl.aɪˈzeɪ.ʃən/", "sự danh từ hóa", "Nominalisation makes academic writing more concise.", "nom|i|nal|i|sa|tion", 4, "Tiếng Anh-Mỹ viết là nominalization."),
    word("contend", "/kənˈtend/", "lập luận, cho rằng (khi có tranh cãi)", "Some economists contend that the policy came too late.", "con|tend", 1),
    word("objective", "/əbˈdʒek.tɪv/", "khách quan", "Academic writing should remain objective and balanced.", "ob|jec|tive", 1),
    word("impersonal", "/ɪmˈpɜː.sən.əl/", "không mang tính cá nhân, khách quan", "Impersonal structures help writers avoid sounding biased.", "im|per|son|al", 1),
    word("hypothesis", "/haɪˈpɒθ.ə.sɪs/", "giả thuyết", "The data support the original hypothesis.", "hy|poth|e|sis", 1, "Số nhiều là hypotheses /haɪˈpɒθ.ə.siːz/."),
    word("substantiate", "/səbˈstæn.ʃi.eɪt/", "chứng minh bằng bằng chứng", "The author fails to substantiate her main claim.", "sub|stan|ti|ate", 1),
    word("methodology", "/ˌmeθ.əˈdɒl.ə.dʒi/", "phương pháp luận", "The methodology section explains how the data were collected.", "meth|o|dol|o|gy", 2),
  ],
  exercises: [
    mc("c1-6-1", "The ___ of the new policy has been slower than expected.", ["implement", "implementation", "implementing of", "implemented"], 1, "Sau the và trước of cần một danh từ: implementation. Implementing of là lỗi trộn V-ing với of."),
    mc("c1-6-2", "Câu nào dẫn nguồn đúng?", ["According to Tran (2020) argues that remote learning widens inequality.", "According to Tran (2020) that remote learning widens inequality.", "Tran (2020) argues that remote learning widens inequality.", "Tran (2020) argues remote learning widens of inequality."], 2, "Hai khung đúng: Tran (2020) argues that... hoặc According to Tran (2020), ... Không trộn hai khung với nhau."),
    fill("c1-6-3", "It remains unclear ___ the effect will last beyond the first year.", ["whether", "if"], "Nêu một câu hỏi còn bỏ ngỏ thì unclear đi với whether hoặc if. Dùng that sẽ đổi nghĩa thành nghi ngờ rằng điều đó đúng."),
    fill("c1-6-4", "Many participants felt isolated during the study. This ___ appears to have affected their results. (danh từ của isolated)", ["isolation"], "This + danh từ tóm lại ý câu trước: isolated thành isolation."),
    reorder("c1-6-5", "The study aims to examine the impact of social media.", "Câu mở đầu điển hình của một bài nghiên cứu: The study aims to + động từ trang trọng (examine, determine, assess)."),
    reorder("c1-6-6", "It should be noted that the sample was small.", "It should be noted that... lưu ý người đọc về một hạn chế mà không cần nói I think."),
    listen("c1-6-7", "The findings indicate a strong correlation between sleep and academic performance.", ["Ngủ nhiều khiến kết quả học tập giảm sút.", "Kết quả cho thấy mối tương quan chặt chẽ giữa giấc ngủ và kết quả học tập.", "Nghiên cứu chưa tìm thấy mối liên hệ nào giữa giấc ngủ và học tập."], 1, "Indicate a strong correlation: cho thấy mối tương quan chặt chẽ. Tương quan chưa phải là quan hệ nhân quả."),
    listen("c1-6-8", "Further research is needed to substantiate these claims.", ["Những khẳng định này đã được chứng minh đầy đủ.", "Nghiên cứu này bác bỏ những khẳng định trước đó.", "Cần thêm nghiên cứu để chứng minh những khẳng định này."], 2, "Substantiate: chứng minh bằng bằng chứng."),
    correct("c1-6-9", "The fail of the project was attributed to poor communication.", "The failure of the project was attributed to poor communication.", "Fail là động từ; danh từ là failure. Thêm the trước động từ không biến nó thành danh từ."),
    correct("c1-6-10", "According to Le (2022) claims that the gap between cities and rural areas is widening.", ["According to Le (2022), the gap between cities and rural areas is widening.", "Le (2022) claims that the gap between cities and rural areas is widening."], "Không trộn According to với động từ dẫn. Chọn một khung: According to Le (2022), ... hoặc Le (2022) claims that..."),
  ],
  speaking: [
    say("It remains unclear whether the effect will last.", "Vẫn chưa rõ liệu tác động này có kéo dài hay không."),
    say("The findings indicate a significant increase in demand.", "Kết quả cho thấy nhu cầu tăng đáng kể."),
    say("Further research is needed to confirm this hypothesis.", "Cần thêm nghiên cứu để xác nhận giả thuyết này."),
  ],
  freeSpeaking: free(
    "Describe a piece of research or a report you have read recently. What did it find, and how convincing was it?",
    "Tóm tắt bằng lời một nghiên cứu, bài báo hoặc báo cáo bạn đã đọc: nó tìm ra điều gì, bằng chứng mạnh đến đâu, và còn hạn chế gì. Dùng danh từ hóa, ít nhất một cấu trúc It khách quan và một cách dẫn nguồn đúng.",
    "Recently I read a report by a Vietnamese education institute about the use of artificial intelligence in secondary schools. According to the authors, the introduction of AI tutors led to a noticeable improvement in maths scores, particularly among weaker students. That said, it should be noted that the study only lasted one semester and involved just four schools, so the findings may not apply more widely. It also remains unclear whether the improvement was caused by the technology itself or simply by the extra attention the students received. Overall, I found the report interesting but not entirely convincing, and I think further research is needed.",
  ),
  dialogue: dialogue(
    "Buổi gặp giáo sư hướng dẫn",
    "Hà, nghiên cứu sinh người Việt tại một trường đại học ở Úc, gặp giáo sư Clarke để sửa chương kết quả của luận án. Nội dung tốt nhưng văn phong còn giống văn nói; hai thầy trò cùng viết lại từng câu.",
    { A: "Giáo sư Clarke", B: "Hà (nghiên cứu sinh)" },
    A("Ha, your findings are solid, but the writing is still too conversational.", "Hà, kết quả của em rất chắc, nhưng cách viết vẫn còn quá giống văn nói."),
    B("I was afraid of that. Which sentences sound too informal?", "Em cũng lo như vậy. Những câu nào nghe quá thân mật ạ?"),
    A("Take this one: “I think social media is bad for sleep.”", "Lấy câu này làm ví dụ: “Tôi nghĩ mạng xã hội có hại cho giấc ngủ.”"),
    B("Perhaps: “It can be argued that social media use may have a negative impact on sleep quality.”", "Có lẽ là: “Có thể lập luận rằng việc sử dụng mạng xã hội có thể tác động tiêu cực đến chất lượng giấc ngủ.”"),
    A("Good. Now nominalise this: “Screen time went up, so students slept less.”", "Tốt. Giờ hãy danh từ hóa câu này: “Thời gian dùng màn hình tăng lên nên sinh viên ngủ ít đi.”"),
    B("“The increase in screen time led to a reduction in sleep duration.”", "“Sự gia tăng thời gian sử dụng màn hình đã dẫn đến sự suy giảm thời lượng ngủ.”"),
    A("Exactly. And in the next sentence, you can refer back with a noun: “This reduction...”", "Chính xác. Và ở câu tiếp theo, em có thể nhắc lại bằng một danh từ: “Sự suy giảm này...”"),
    B("So I could write: “This reduction appears to have affected concentration in class”?", "Vậy em có thể viết: “Sự suy giảm này dường như đã ảnh hưởng đến khả năng tập trung trên lớp” phải không ạ?"),
    A("Yes, that links the two ideas neatly. Next, your literature review says “According to Smith argues that...”.", "Đúng, như vậy hai ý nối với nhau rất gọn. Tiếp theo, phần tổng quan tài liệu của em viết “According to Smith argues that...”."),
    B("I see. It should be either “According to Smith” or “Smith argues that”. I'll fix every citation.", "Em hiểu rồi. Phải là “According to Smith” hoặc “Smith argues that”. Em sẽ sửa tất cả các chỗ dẫn nguồn."),
    A("And be careful with your verbs. One small survey only suggests something; it doesn't demonstrate it.", "Và cẩn thận với động từ dẫn. Một khảo sát nhỏ chỉ gợi ý điều gì đó, chứ chưa chứng minh được."),
    B("That's a useful distinction. I'll revise the whole chapter in three passes.", "Đó là sự phân biệt rất hữu ích. Em sẽ sửa cả chương theo ba lượt ạ."),
  ),
  dialogueQuestions: [
    listenQ("c1-6-d1", "What is Professor Clarke's main criticism of Ha's chapter?", "Ha, your findings are solid, but the writing is still too conversational.", ["The findings are weak.", "The style is too informal.", "The chapter is too long.", "The data are out of date."], 1, "Too conversational: văn phong quá giống văn nói. Còn kết quả thì solid, tức là chắc chắn."),
    mc("c1-6-d2", "Why does the professor suggest beginning the next sentence with “This reduction”?", ["To link it clearly to the idea in the previous sentence", "To make the paragraph longer", "To avoid using any verbs", "To make the writing sound more personal"], 0, "This + danh từ tóm lại ý câu trước: that links the two ideas neatly."),
    mc("c1-6-d3", "What does the professor say about the verbs Ha uses for citing research?", ["She uses too many different verbs.", "She should always use demonstrate.", "They should match the strength of the evidence.", "They are not needed in a literature review."], 2, "One small survey only suggests something; it doesn't demonstrate it: động từ dẫn phải khớp với độ mạnh của bằng chứng."),
  ],
  reading: reading({
    title: "Evening smartphone use and sleep among Hanoi undergraduates: abstract and discussion",
    text: `Abstract. This study examines the relationship between evening smartphone use and sleep among undergraduate students in Hanoi. A total of 412 students from three universities completed a questionnaire on their media habits, and 96 of them also wore activity trackers for two weeks. Analysis of the data revealed a moderate negative correlation between screen time after 10 p.m. and total sleep duration: students in the highest-use group slept, on average, 47 minutes less per night than those in the lowest-use group. However, no significant association was found between smartphone use and academic performance. These findings suggest that the effects of late-night screen use may be more immediate than cumulative, although further longitudinal research is required.

Discussion. The present findings are broadly consistent with earlier work in other Asian contexts. Studies of Korean undergraduates, for example, have reported a similar reduction in sleep duration, and surveys of Vietnamese students have found that most keep their phones within reach while sleeping. It should be noted, however, that such studies have typically relied entirely on self-reported data, which tend to overestimate sleep time. The use of activity trackers in the current study therefore provides somewhat stronger evidence for the link.

The absence of any relationship with academic performance is more difficult to interpret. One possible explanation is that students compensate for lost sleep by napping during the day, a practice that is widespread in Vietnam. An alternative explanation is that grades are simply too blunt a measure to detect subtle changes in concentration. It remains unclear which of these accounts is more plausible, and it is possible that both play a role.

Several limitations must be acknowledged. First, the sample was drawn from urban universities and may not be representative of students in rural provinces. Second, the correlational design does not permit conclusions about causation. It can be argued, for instance, that students who already sleep poorly turn to their phones because they cannot sleep, rather than the reverse. Third, grades were reported by the students themselves rather than taken from university records, which may have reduced their accuracy. Finally, the two-week tracking period may not have captured variation across the academic year, particularly during examinations.

Notwithstanding these limitations, the study has clear practical implications. Universities could incorporate information about healthy sleep habits into their orientation programmes, and the introduction of voluntary phone-free hours in student dormitories might be worth exploring. Future research should adopt a longitudinal design and include objective measures of cognitive performance, rather than relying on grades alone.`,
    glossary: [
      ["correlation", "mối tương quan"],
      ["cumulative", "tích lũy dần"],
      ["longitudinal", "theo dõi dài hạn (nghiên cứu)"],
      ["self-reported", "do người tham gia tự khai báo"],
      ["compensate", "bù đắp"],
      ["representative", "mang tính đại diện"],
      ["orientation programme", "chương trình định hướng cho tân sinh viên"],
    ],
    questions: [
      mc("c1-6-r1", "What is the main finding of the study?", ["Evening phone use was linked to shorter sleep but not to lower grades.", "Phone use causes students to fail their exams.", "Students who nap during the day get better grades.", "Activity trackers are less reliable than questionnaires."], 0, "Có tương quan giữa dùng điện thoại buổi tối và ngủ ít, nhưng no significant association với kết quả học tập."),
      mc("c1-6-r2", "Why do the authors say their evidence is “somewhat stronger” than that of earlier studies?", ["They used a much larger sample.", "They studied students in rural provinces.", "They tracked students for a whole academic year.", "They measured sleep with trackers instead of relying only on self-reports."], 3, "Các nghiên cứu trước chỉ dựa vào dữ liệu tự khai, vốn hay phóng đại thời gian ngủ; nghiên cứu này dùng thiết bị đo."),
      mc("c1-6-r3", "Which statement would the authors most likely agree with?", ["Phones definitely cause poor sleep.", "Grades are the best measure of concentration.", "It is possible that poor sleep leads to phone use, rather than the other way round.", "Universities should ban phones in dormitories."], 2, "It can be argued... that students who already sleep poorly turn to their phones because they cannot sleep, rather than the reverse."),
      fill("c1-6-r4", "The authors suggest that grades may be too ___ a measure to detect subtle changes in concentration. (thô, không đủ tinh)", ["blunt"], "Too blunt a measure: một thước đo quá thô, không bắt được thay đổi nhỏ."),
      mc("c1-6-r5", "How do the authors present their conclusions overall?", ["Cautiously, acknowledging limitations and calling for further research", "Aggressively, dismissing all earlier studies", "Emotionally, blaming students for poor habits", "Without any reference to other research"], 0, "Bài dùng suggest, may, it remains unclear và dành cả một đoạn cho các hạn chế: giọng thận trọng, khớp với bằng chứng."),
    ],
  }),
  task: task({
    prompt: "Dưới đây là ghi chú kết quả một khảo sát nhỏ của bạn. Hãy viết phần Discussion (230–280 từ) theo văn phong học thuật: diễn giải kết quả, so sánh với một nghiên cứu trước (tự đặt tên tác giả và năm), nêu hạn chế và đề xuất. Ghi chú: 150 sinh viên ở một trường đại học tại Đà Nẵng; ai học nhóm từ hai lần một tuần trở lên thì điểm cao hơn; nhưng nhóm này cũng đi học đầy đủ hơn; dữ liệu do sinh viên tự khai.",
    hints: [
      "Không dùng I think, a lot of, got, kids hay phrasal verb đời thường.",
      "Danh từ hóa ít nhất ba ý: the consistency of..., the introduction of..., the reliance on...",
      "Dùng ít nhất hai cấu trúc It khách quan khác nhau: It should be noted that..., It remains unclear whether..., It can be argued that...",
      "Dẫn nguồn đúng khung và chọn động từ dẫn phù hợp; không kết luận quan hệ nhân quả.",
    ],
    model:
      "The present study found that students who took part in group study at least twice a week achieved noticeably higher scores than those who studied alone. This finding is broadly consistent with the work of Pham (2020), who reported a similar advantage for collaborative learning among engineering students in Ho Chi Minh City. The consistency of these results across two cities suggests that the effect is not merely local.\n\nIt should be noted, however, that the relationship may be more complex than it first appears. Students who studied in groups also had considerably higher attendance rates, and it remains unclear whether their improved performance reflects the benefits of collaboration or simply a greater level of commitment. It can be argued that motivated students are more likely both to attend lectures and to join study groups, in which case group study would be a symptom of motivation rather than its cause.\n\nSeveral limitations must also be acknowledged. The sample of 150 students was drawn from a single university in Da Nang, and its composition may not be representative of students elsewhere in Vietnam. In addition, the reliance on self-reported study habits introduces a risk of inaccuracy, since participants may overestimate the time they spend studying.\n\nNotwithstanding these limitations, the findings have practical implications. The introduction of structured study groups in first-year courses would be a low-cost intervention that universities could evaluate relatively easily. Future research should adopt an experimental design, in which students are randomly assigned to group or individual study, in order to establish whether the observed association reflects a causal relationship.",
    checklist: [
      "Không còn I think, a lot of, got, kids hay phrasal verb đời thường",
      "Có ít nhất ba cụm danh từ hóa (the consistency of..., the reliance on..., the introduction of...)",
      "Có ít nhất hai cấu trúc It khách quan khác nhau, unclear đi với whether",
      "Dẫn nguồn đúng một khung (Tác giả (năm) reported that... hoặc According to tác giả (năm), ...)",
      "Có đoạn nêu hạn chế; kết luận thận trọng, không khẳng định quan hệ nhân quả",
    ],
    minWords: 230,
  }),
});

/** End-of-course test: 5 new items per chapter, never shown in a lesson. */
const finalTest: Exercise[] = [
  // Chương 1: cụm động từ và kết hợp từ, tỉnh lược và thay thế, tương lai nâng cao, cấu tạo từ, từ dễ nhầm
  mc("c1-f01", "The arrival of cheap smartphones has ___ a fundamental change in how people read the news.", ["brought up", "brought about", "brought back", "brought down"], 1, "Bring about: gây ra, tạo ra một thay đổi. Bring up là nêu ra hoặc nuôi dạy, bring back là mang trở lại, bring down là làm giảm."),
  mc("c1-f02", "Your suggestion is very ___: it is practical and will save us both time and money.", ["sensitive", "sensible", "sympathetic", "eventual"], 1, "Sensible: hợp lý, biết điều. Sensitive là nhạy cảm, sympathetic là cảm thông, eventual là cuối cùng (sau một thời gian)."),
  reorder("c1-f03", "We were on the verge of giving up.", "Be on the verge of + V-ing: sắp sửa làm gì, không dùng to V."),
  listen("c1-f04", "The committee seriously underestimated how long the renovation would take.", ["Ủy ban đã tính thời gian cải tạo rất chính xác.", "Ủy ban đã đánh giá quá thấp thời gian cần cho việc cải tạo.", "Ủy ban quyết định kéo dài thời gian cải tạo.", "Ủy ban cho rằng việc cải tạo sẽ mất quá nhiều thời gian."], 1, "Underestimate: đánh giá thấp. Tiền tố under- mang nghĩa dưới mức, chưa đủ."),
  correct("c1-f05", "I don't hope so, because I have already booked my holiday.", "I hope not, because I have already booked my holiday.", "Với hope, phủ định đặt not ở cuối: I hope not. Không nói I don't hope so."),
  // Chương 2: đảo ngữ, câu chẻ, điều kiện nâng cao, thể giả định
  mc("c1-f06", "___ I known about the strike, I would have taken the train instead.", ["If", "Had", "Should", "Were"], 1, "Đảo ngữ của câu điều kiện loại ba: Had + S + V3 thay cho If I had known."),
  fill("c1-f07", "The contract stipulates that the supplier ___ all goods within thirty days. (deliver)", ["deliver", "should deliver", "must deliver", "shall deliver"], "Sau stipulate that dùng thể giả định: động từ nguyên mẫu, không thêm -s (hoặc should + V theo lối Anh-Anh)."),
  reorder("c1-f08", "It was the delivery date that worried them.", "It-cleft: It was + phần nhấn mạnh + that + phần còn lại."),
  listen("c1-f09", "No sooner had the meeting started than the fire alarm went off.", ["Chuông báo cháy vang lên trước khi cuộc họp bắt đầu.", "Cuộc họp bắt đầu muộn vì chuông báo cháy.", "Cuộc họp vừa bắt đầu thì chuông báo cháy vang lên.", "Cuộc họp kết thúc sớm hơn dự kiến."], 2, "No sooner... than...: vừa... thì... Cuộc họp bắt đầu trước, chuông báo cháy vang lên ngay sau đó."),
  correct("c1-f10", "Not only she speaks French, but she also speaks Thai.", "Not only does she speak French, but she also speaks Thai.", "Not only đứng đầu câu thì phải đảo ngữ: mượn does, động từ speak về nguyên mẫu."),
  // Chương 3: nhượng bộ, động từ tường thuật, bị động tường thuật, mệnh đề quan hệ nâng cao
  mc("c1-f11", "The manager accused the driver ___ the accident.", ["for causing", "to cause", "of causing", "that he caused"], 2, "Accuse someone of + V-ing. Blame someone for mới đi với for."),
  fill("c1-f12", "The new bridge was finished on budget, ___ two months later than planned. (dù là)", ["albeit", "although", "though"], "Albeit + cụm ngắn: dù là trễ hai tháng. Although/though + cụm rút gọn cũng đúng."),
  reorder("c1-f13", "This is the scheme whereby staff can buy shares.", "Whereby: mà theo đó, đứng sau scheme, system, agreement."),
  listen("c1-f14", "The former director is thought to have left the country last month.", ["Cựu giám đốc đang nghĩ đến việc rời khỏi đất nước.", "Người ta cho rằng cựu giám đốc đã rời khỏi đất nước vào tháng trước.", "Cựu giám đốc sẽ rời khỏi đất nước vào tháng tới."], 1, "Be thought to have + V3: người ta cho rằng ai đó đã làm gì (việc xảy ra trước thời điểm nói)."),
  correct("c1-f15", "The applicants, most of them have teaching experience, will be interviewed on Monday.", ["The applicants, most of whom have teaching experience, will be interviewed on Monday.", "The applicants, most of them having teaching experience, will be interviewed on Monday."], "Sau dấu phẩy, lượng từ + of whom thay cho người: most of whom. Không nối hai mệnh đề bằng most of them."),
  // Chương 4: ngôn ngữ tinh tế, văn phong học thuật, trạng từ bình luận, viết luận và tóm tắt
  mc("c1-f16", "A British colleague says your plan is “not exactly cheap”. What does she mean?", ["It is very good value.", "It is surprisingly cheap.", "It costs nothing.", "It is quite expensive."], 3, "Not exactly + tính từ tích cực là cách nói giảm: not exactly cheap nghĩa là đắt."),
  fill("c1-f17", "The ___ of the new metro line has reduced traffic on several main roads. (danh từ của open)", ["opening"], "Danh từ hóa: open thành opening. The opening of the metro line là chủ ngữ của câu."),
  reorder("c1-f18", "A summary should not include personal opinions.", "Bản tóm tắt chỉ giữ ý chính của bản gốc, không thêm ý kiến cá nhân."),
  listen("c1-f19", "Presumably, the client has already seen the revised figures.", ["Chắc chắn khách hàng chưa xem số liệu mới.", "Khách hàng yêu cầu sửa lại số liệu.", "Thẳng thắn mà nói, khách hàng không thích số liệu mới.", "Tôi đoán là khách hàng đã xem số liệu đã sửa rồi."], 3, "Presumably: đoán là, có lẽ là, dựa trên suy luận hợp lý."),
  correct("c1-f20", "Arguably that the new system is the best option we have.", ["Arguably, the new system is the best option we have.", "The new system is arguably the best option we have."], "Trạng từ bình luận đứng đầu câu kèm dấu phẩy, không thêm that phía sau."),
];

export const tiengAnhC1: Course = {
  slug: "tieng-anh-c1",
  title: "Tiếng Anh C1: Thành thạo",
  level: "C1",
  goal: "lo-trinh",
  summary: "Cho người đã vững B2: nói và viết tự nhiên, tinh tế và chặt chẽ, từ cuộc họp, đàm phán quốc tế đến bài luận và báo cáo học thuật.",
  outcomes: [
    "Dùng cụm động từ nhiều nghĩa, kết hợp từ mạnh, tỉnh lược và thay thế để nói tự nhiên, gọn gàng",
    "Nhấn mạnh bằng đảo ngữ và câu chẻ; dùng câu điều kiện nâng cao và thể giả định",
    "Lập luận và nhượng bộ có sắc thái (Much as, albeit, notwithstanding), tường thuật đúng thái độ người nói",
    "Viết theo văn phong học thuật: danh từ hóa, cấu trúc khách quan, dẫn nguồn, tóm tắt và bố cục bài luận",
    "Đọc hiểu bài báo, bài luận và báo cáo dài 400–650 từ; viết bài dài 230–300 từ",
  ],
  audience: [
    "Người đã ở trình độ B2 muốn vượt qua giai đoạn “chững lại”",
    "Người đi làm và nghiên cứu sinh cần tiếng Anh cho họp, đàm phán, thuyết trình và viết báo cáo",
  ],
  teacher: {
    name: "Cô Diệu Linh",
    initials: "DL",
    bio: "Người dẫn dắt khóa C1. Chú trọng văn phong học thuật, lập luận và sắc thái diễn đạt.",
  },
  faqs: [
    { q: "Làm sao biết mình đủ trình độ để học C1?", a: "Bạn nên hoàn thành khóa B2 hoặc làm bài kiểm tra đầu vào. Nếu bạn đọc hiểu báo tiếng Anh mà không cần tra từ liên tục, bạn đã sẵn sàng." },
    { q: "Khóa này có giúp mình thi IELTS hay chứng chỉ C1 quốc tế không?", a: "Khóa dạy ngữ pháp, từ vựng và kỹ năng ở trình độ C1, có cả bài đọc dài và bài viết kiểu IELTS Writing Task 2, nên rất có ích khi bạn ôn thi. Tuy vậy, đây không phải khóa luyện đề và không cam kết điểm số." },
    { q: "Học xong C1 thì học gì tiếp?", a: "Nếu cần chứng chỉ, bạn có thể học tiếp khóa luyện thi IELTS để biến kỹ năng thành điểm số. Nếu không, hãy duy trì luyện tập hằng ngày: đọc báo, nghe podcast và viết thường xuyên để giữ vững trình độ." },
  ],
  status: "open",
  modules: [
    chapter(1, "Tiếng Anh tự nhiên", [noiTuNhien, nTinhLuocVaThayThe, nTuongLaiNangCao, nCauTaoTu, nTuDeNhamVaNgonNguUocLuong]),
    chapter(2, "Nhấn mạnh và giả định", [daoNgu, cauChe, nDieuKienNangCao, nBangThaiCach]),
    chapter(3, "Lập luận và tường thuật", [lapLuan, nDongTuTuongThuat, nBiDongNangCao, nMenhDeQuanHeNangCao]),
    chapter(4, "Văn phong tinh tế", [tinhTe, hocThuat, nTrangTuBinhLuan, nVietLuanVaTomTat]),
  ],
  finalTest,
};
