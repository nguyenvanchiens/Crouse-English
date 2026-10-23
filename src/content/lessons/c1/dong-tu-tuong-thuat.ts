import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "dong-tu-tuong-thuat",
  title: "Tường thuật tinh tế",
  minutes: 38,
  lecture: {
    title: "Động từ tường thuật và lập trường của người viết",
    blocks: [
      p("Ở B2, các bạn đã học các mẫu cơ bản: agree, refuse, offer, promise + to V; advise, remind, warn, persuade + người + to V; suggest, recommend, admit, deny + V-ing; apologise for, insist on, blame somebody for; suggest that + (should) V. Bài này không học lại các mẫu đó. Ở C1, câu hỏi khó hơn: **người viết có tin lời người được tường thuật không?** Cùng một câu nói của vị giám đốc, báo này viết **pointed out**, báo kia viết **claimed**, báo thứ ba viết **conceded**. Ba động từ, ba thái độ. Đọc báo, đọc tài liệu học thuật mà không nhận ra điều này là bỏ lỡ một nửa thông điệp; viết mà chọn sai là vô tình nói điều mình không định nói."),
      table(
        ["Người viết muốn cho thấy", "Động từ", "Ví dụ"],
        ["trung lập, chỉ ghi nhận", "state, note, report, observe", "The report notes that exports fell."],
        ["đồng tình, coi là sự thật", "point out, show, demonstrate, confirm", "She pointed out that the figures were out of date."],
        ["giữ khoảng cách, chưa chắc đúng", "claim, allege, contend, assert, maintain", "He claims that the software is completely secure."],
        ["người nói nhượng bộ", "concede, acknowledge, grant", "The minister conceded that mistakes had been made."],
        ["bác bỏ, xem nhẹ", "dismiss… as, reject, downplay, refute (chứng minh là sai)", "She dismissed the report as speculation."],
      ),
      ex("The company claims that its new battery lasts twice as long as its rivals'.", "Công ty khẳng định pin mới của họ bền gấp đôi đối thủ.", "Claims cho người đọc biết đây là lời của công ty, người viết chưa kiểm chứng. Viết points out là người viết đã đứng về phía công ty."),
      ex("Despite mounting evidence, the chairman has consistently maintained that he knew nothing about the payments.", "Bất chấp bằng chứng ngày càng nhiều, ông chủ tịch vẫn một mực khẳng định mình không biết gì về các khoản tiền.", "Maintain that: tiếp tục khẳng định điều gì, thường khi bị người khác nghi ngờ. Contend gần nghĩa, trang trọng hơn, hay dùng trong tranh luận học thuật và pháp lý."),
      p("Mỗi động từ kéo theo một **mẫu câu** riêng, và đây là chỗ người Việt hay sai nhất vì tiếng Việt chỉ cần “cho rằng”, “bác bỏ”, “quy cho”. **Attribute X to Y** (quy X cho nguyên nhân Y), **dismiss X as Y** (gạt đi, coi X là Y), **cast doubt on X** (làm dấy lên nghi ngờ về X), **accuse somebody of V-ing** và **charge somebody with** (buộc tội), **urge / call on somebody to V** (kêu gọi), **commend somebody for** (biểu dương). Những động từ này còn rất hay đi với bị động: It is alleged that…, He is alleged to have…"),
      ex("Analysts attribute the fall in sales to rising interest rates rather than to the product itself.", "Giới phân tích cho rằng doanh số giảm là do lãi suất tăng chứ không phải do bản thân sản phẩm.", "Attribute + kết quả + to + nguyên nhân. Thứ tự này không đảo được."),
      mistake("Experts attributed the flooding for poor drainage.", "Experts attributed the flooding to poor drainage.", "Tiếng Việt nói “quy lỗi cho”, “đổ cho… vì”, nên học viên mượn for từ blame somebody for. Attribute luôn đi với to: attribute the result to the cause."),
      mistake("She dismissed that the report was nonsense.", "She dismissed the report as nonsense.", "Dismiss không đi với mệnh đề that. Mẫu đúng là dismiss + tân ngữ + as + danh từ hoặc tính từ: dismissed the idea as unrealistic."),
      mistake("A new study has cast doubt about the safety of the drug.", "A new study has cast doubt on the safety of the drug.", "Người Việt dịch “nghi ngờ về” thành doubt about. Thành ngữ cố định là cast doubt on (hoặc upon); tương tự call something into question."),
      ex("The spokesperson acknowledged that the delay had caused serious inconvenience, but rejected the allegation that passengers had been misled.", "Người phát ngôn thừa nhận việc chậm trễ đã gây bất tiện nghiêm trọng, nhưng bác bỏ cáo buộc rằng hành khách đã bị đánh lừa.", "Hai động từ trong một câu vẽ ra cả lập trường: nhượng bộ một điểm (acknowledged), giữ vững điểm khác (rejected)."),
      mistake("The minister refuted the claims but offered no evidence.", "The minister denied the claims but offered no evidence.", "Ở văn phong cẩn trọng, refute nghĩa là chứng minh một điều là sai, nên không thể refute mà không có bằng chứng. Chỉ nói “không đúng” thì dùng deny, reject hoặc dismiss. Báo chí đôi khi dùng refute lỏng hơn, nhưng bài viết C1 nên giữ nghĩa chặt."),
      tip("Đọc tin tức, hãy **soi động từ tường thuật trước khi soi nội dung**. Gặp claim, allege, contend: người viết đang giữ khoảng cách. Gặp point out, show, confirm: người viết đồng tình. Gặp concede, acknowledge: người nói đã phải nhượng bộ. Học theo **khối**: attribute-to, dismiss-as, cast doubt-on, accuse-of, charge-with, call on-to."),
      teacher("Nhiều bạn học viên hỏi tôi: em dùng claim cho “cho rằng” có sai không? Không sai ngữ pháp, nhưng có thể **sai thái độ**. Có bạn viết luận văn: Smith (2019) claims that sleep improves memory, trong khi chính bạn đang dùng Smith làm bằng chứng ủng hộ mình. Giám khảo đọc claim sẽ hiểu bạn nghi ngờ Smith. Bài tập tôi giao: lấy một bài báo tiếng Anh, gạch chân mọi động từ tường thuật, xếp vào ba cột **tin, không tin, nhượng bộ**, rồi viết lại một đoạn đổi hết sang cột khác để thấy giọng bài báo thay đổi thế nào."),
      summary(
        "Động từ tường thuật cho biết **lập trường của người viết**: point out, show, confirm (đồng tình); claim, allege, contend, maintain, assert (giữ khoảng cách); state, note, report (trung lập).",
        "**Concede / acknowledge that**: người nói nhượng bộ một điểm. **Reject, deny, dismiss… as, downplay**: bác bỏ, xem nhẹ; **refute** là chứng minh sai, cần có bằng chứng.",
        "Mẫu câu cố định: **attribute X to Y**, **dismiss X as Y**, **cast doubt on X**, **accuse sb of V-ing**, **charge sb with**, **call on / urge sb to V**, **commend sb for**.",
        "Nhóm allege, claim, report rất hay đi với bị động: It is alleged that… / He is alleged to have…",
        "Chọn động từ theo thái độ mình muốn thể hiện; dùng claim cho nguồn mình đang dựa vào là tự làm yếu lập luận của mình.",
      ),
    ],
  },
  words: [
    word("allege", "/əˈledʒ/", "cáo buộc (khi chưa có bằng chứng)", "The newspaper alleges that the mayor accepted bribes.", "al|lege", 1, "Trọng âm ở âm sau: a-LEDGE; âm cuối /dʒ/ bật rõ. Danh từ là allegation."),
    word("assert", "/əˈsɜːt/", "khẳng định mạnh mẽ", "The lawyer asserted that her client was innocent.", "as|sert", 1, "Chữ r không đọc: /əˈsɜːt/; âm cuối /t/ phải rõ."),
    word("refute", "/rɪˈfjuːt/", "bác bỏ bằng lập luận, chứng minh là sai", "The scientist refuted the theory with new data.", "re|fute", 1),
    word("downplay", "/ˌdaʊnˈpleɪ/", "xem nhẹ, giảm nhẹ tầm quan trọng", "The government tried to downplay the seriousness of the outbreak.", "down|play", 1),
    word("reiterate", "/riˈɪt.ər.eɪt/", "nhắc lại, khẳng định lại", "The minister reiterated that taxes would not rise.", "re|it|er|ate", 1, "Bốn âm tiết, trọng âm ở âm thứ hai: ri-IT-er-ate."),
    word("allegation", "/ˌæl.əˈɡeɪ.ʃən/", "lời cáo buộc (chưa được chứng minh)", "He strongly rejected the allegation of bribery.", "al|le|ga|tion", 2),
    word("commend", "/kəˈmend/", "khen ngợi, biểu dương (trang trọng)", "The report commended the staff for their quick response.", "com|mend", 1, "Commend + người + for + danh từ hoặc V-ing."),
    word("dismissive", "/dɪˈsmɪs.ɪv/", "gạt đi, coi thường (ý kiến của người khác)", "The manager was dismissive of our concerns about safety.", "dis|mis|sive", 1, "Dismissive of + danh từ: coi thường điều gì."),
  ],
  exercises: [
    mc("c1-n10-1", "Chọn động từ cho thấy người viết coi thông tin là sự thật: The inspectors' report ___ that the bridge had not been checked for ten years.", ["alleges", "contends", "points out", "claims"], 2, "Point out: người viết đồng tình, coi đó là sự thật. Allege, contend, claim đều giữ khoảng cách, ngầm nói “đó là lời họ, chưa chắc đúng”."),
    mc("c1-n10-2", "Asked about the leaked emails, the chief executive ___ them as “a fishing expedition by journalists”.", ["denied", "dismissed", "refuted", "objected"], 1, "Dismiss + tân ngữ + as: gạt đi, coi là. Deny và refute không đi với as; object phải đi với to."),
    fill("c1-n10-3", "Economists attribute the slowdown ___ weaker demand from abroad.", ["to"], "Attribute + kết quả + to + nguyên nhân. Không dùng for như blame."),
    fill("c1-n10-4", "A new study has cast serious doubt ___ the safety of the drug.", ["on", "upon"], "Cast doubt on (upon): làm dấy lên nghi ngờ về. Không nói doubt about trong thành ngữ này."),
    fill("c1-n10-5", "The former minister is accused ___ having misled Parliament.", ["of"], "Accuse somebody of V-ing; ở bị động: be accused of (having) done something."),
    fill("c1-n10-6", "Although she ___ that the project was over budget, she maintained that it had been worth every penny. (thừa nhận, miễn cưỡng)", ["conceded", "acknowledged", "admitted", "accepted", "granted"], "Vế although cần một động từ nhượng bộ: conceded, acknowledged (trang trọng hơn admitted). Maintained ở vế sau là giữ vững lập trường."),
    fill("c1-n10-7", "Campaigners have called ___ the government to ban single-use plastic bags.", ["on", "upon"], "Call on (upon) somebody to V: kêu gọi ai làm gì, trang trọng hơn ask, gần nghĩa urge."),
    reorder("c1-n10-8", "He dismissed the idea as unrealistic.", "Dismiss + tân ngữ + as + tính từ: gạt đi, coi là không thực tế."),
    reorder("c1-n10-9", "Police attributed the accident to dangerous driving.", "Attribute + kết quả (the accident) + to + nguyên nhân (dangerous driving)."),
    reorder("c1-n10-10", "Critics have questioned the reliability of the data.", "Question dùng như động từ tường thuật: đặt nghi vấn về điều gì, nhẹ hơn reject."),
    listen("c1-n10-11", "The spokesperson conceded that mistakes had been made, but insisted that no laws had been broken.", ["Người phát ngôn phủ nhận mọi sai sót và khẳng định công ty không vi phạm luật.", "Người phát ngôn thừa nhận đã có sai sót, nhưng khẳng định không có luật nào bị vi phạm.", "Người phát ngôn thừa nhận công ty đã vi phạm luật.", "Người phát ngôn từ chối bình luận về các sai sót."], 1, "Conceded that: thừa nhận một điểm (có sai sót). Insisted that: một mực khẳng định điểm còn lại (không phạm luật)."),
    listen("c1-n10-12", "The report attributes the rise in childhood obesity largely to sugary drinks.", ["Báo cáo cho rằng béo phì ở trẻ em tăng chủ yếu là do đồ uống có đường.", "Báo cáo cho rằng đồ uống có đường không liên quan đến béo phì.", "Báo cáo kêu gọi cấm đồ uống có đường trong trường học.", "Báo cáo nói béo phì ở trẻ em đang giảm nhờ bớt đồ uống có đường."], 0, "Attribute X to Y: quy X cho nguyên nhân Y. Largely: phần lớn, chủ yếu."),
    correct("c1-n10-13", "She dismissed that the rumours were completely untrue.", ["She dismissed the rumours as completely untrue.", "She dismissed the rumours as untrue.", "She insisted that the rumours were completely untrue.", "She maintained that the rumours were completely untrue.", "She said that the rumours were completely untrue."], "Dismiss không đi với mệnh đề that. Giữ dismiss thì viết dismissed the rumours as untrue; muốn giữ mệnh đề that thì đổi động từ: insisted, maintained that."),
    correct("c1-n10-14", "The company refuted the allegations, but it offered no evidence.", ["The company denied the allegations, but it offered no evidence.", "The company rejected the allegations, but it offered no evidence.", "The company dismissed the allegations, but it offered no evidence."], "Refute là chứng minh một điều là sai, nên mâu thuẫn với vế offered no evidence. Chỉ nói “không đúng” thì dùng deny, reject hoặc dismiss."),
  ],
  speaking: [
    say("She conceded that the figures were disappointing.", "Cô ấy thừa nhận các con số đáng thất vọng."),
    say("Critics have cast doubt on the official figures.", "Giới phê bình đã đặt nghi vấn về các số liệu chính thức."),
    say("The company attributed the delay to bad weather.", "Công ty cho rằng sự chậm trễ là do thời tiết xấu."),
  ],
  freeSpeaking: free(
    "Think of a recent news story or online controversy. What did the different people involved claim, and how did others respond?",
    "Kể lại một tin tức hoặc cuộc tranh cãi gần đây trên mạng bằng ít nhất năm động từ tường thuật C1 (claim, maintain, concede, acknowledge, dismiss… as, attribute… to, cast doubt on, call on… to), không dùng said. Chú ý: động từ bạn chọn cho biết bạn tin ai.",
    "Recently there was a heated debate in my city about a plan to cut down old trees to widen a road. The city council claimed that the project would reduce traffic jams by a third, but environmental groups cast doubt on those figures and called on the council to publish its data. At first, officials dismissed the protests as the work of a small minority. Later, however, the council conceded that it had not consulted residents properly, and it attributed the problem to a lack of time. Personally, I think the campaigners pointed out a real weakness in the plan.",
  ),
  dialogue: dialogue(
    "Đọc lại bài báo về vụ thu hồi sản phẩm",
    "Chị Thảo, trưởng phòng truyền thông một hãng sữa ở TP.HCM, cùng Daniel, cố vấn truyền thông người Anh, đọc lại một bài báo về vụ công ty thu hồi một lô sữa, để xem phóng viên đã tường thuật lời của công ty với thái độ thế nào.",
    { A: "Daniel, cố vấn truyền thông", B: "Chị Thảo, trưởng phòng truyền thông" },
    A("Have you seen the piece in the business review? The reporter's choice of verbs is quite revealing.", "Chị đọc bài trên tạp chí kinh doanh chưa? Cách phóng viên chọn động từ nói lên khá nhiều điều."),
    B("I've just read it. It says our director claimed that the problem was limited to one batch.", "Tôi vừa đọc xong. Bài viết rằng giám đốc của chúng ta “khẳng định” vấn đề chỉ giới hạn ở một lô hàng."),
    A("Exactly. Claimed suggests they don't quite believe him. If they did, they'd have written confirmed or pointed out.", "Đúng vậy. Claimed cho thấy họ không hẳn tin ông ấy. Nếu tin, họ đã viết confirmed hoặc pointed out."),
    B("And here: the company has been accused of downplaying the risk to children.", "Còn đây nữa: công ty bị cáo buộc là đã xem nhẹ nguy cơ đối với trẻ em."),
    A("That's the most damaging line. Who made that allegation?", "Đó là câu gây hại nhất. Ai đưa ra lời cáo buộc đó?"),
    B("A consumer group. They also cast doubt on our testing procedures.", "Một hội người tiêu dùng. Họ còn đặt nghi vấn về quy trình kiểm nghiệm của chúng ta."),
    A("Does the article mention that we acknowledged the labels were unclear?", "Bài báo có nhắc chuyện chúng ta đã thừa nhận nhãn mác không rõ ràng không?"),
    B("Only in the last paragraph, and it says we conceded the point only after pressure from the ministry.", "Chỉ ở đoạn cuối, và nó viết rằng chúng ta chỉ chịu nhận điểm đó sau khi bị bộ gây sức ép."),
    A("That's simply not true. We admitted it on the first day. Can we refute it with dates?", "Điều đó hoàn toàn sai. Chúng ta đã thừa nhận ngay từ ngày đầu. Mình có thể bác bỏ nó bằng ngày tháng cụ thể không?"),
    B("We can. Our press release from the third of May proves it.", "Được. Thông cáo báo chí của chúng ta ngày ba tháng năm chứng minh điều đó."),
    A("Then let's ask for a correction, and in our next statement, let's attribute the delay to the laboratory's backlog.", "Vậy mình đề nghị đính chính, và trong thông cáo tới, hãy nói rõ sự chậm trễ là do phòng thí nghiệm bị tồn đọng mẫu."),
    B("Agreed. I'll reiterate that no child has fallen ill, but I won't sound dismissive of parents' concerns.", "Đồng ý. Tôi sẽ nhắc lại rằng chưa có trẻ nào bị ốm, nhưng sẽ không tỏ ra coi nhẹ nỗi lo của phụ huynh."),
  ),
  dialogueQuestions: [
    listenQ("c1-n10-d1", "According to Daniel, what does the reporter's use of “claimed” suggest?", "Exactly. Claimed suggests they don't quite believe him. If they did, they'd have written confirmed or pointed out.", ["The reporter fully agrees with the director.", "The reporter is not entirely convinced by the director.", "The reporter made a grammar mistake.", "The reporter interviewed the director in person."], 1, "Claimed suggests they don't quite believe him: claim cho thấy người viết giữ khoảng cách, chưa tin hẳn."),
    mc("c1-n10-d2", "What evidence does Thảo have that part of the article is inaccurate?", ["A letter from the ministry", "A statement from the consumer group", "A company press release dated the third of May", "Test results from the laboratory"], 2, "Our press release from the third of May proves it: thông cáo ngày ba tháng năm chứng minh công ty đã thừa nhận từ ngày đầu."),
    mc("c1-n10-d3", "Why does Thảo say she won't sound dismissive of parents' concerns?", ["She thinks the parents' concerns are exaggerated.", "She wants to blame the laboratory instead.", "She has been told to apologise by the ministry.", "Seeming to brush their worries aside could make the company look even worse."], 3, "Bài báo đã cáo buộc công ty xem nhẹ nguy cơ (downplaying the risk). Nếu thông cáo lại tỏ ra coi thường phụ huynh, nó sẽ xác nhận đúng lời cáo buộc ấy. Đây là câu hỏi suy luận."),
  ],
  reading: reading({
    title: "Airline chief apologises but denies cover-up",
    text: `The chief executive of a regional airline apologised to passengers on Monday for weeks of cancelled flights, but firmly denied that the company had tried to hide the scale of its problems from regulators.

Speaking at a tense press conference in Ho Chi Minh City, Ms Tran Thu Ha acknowledged that the airline had "badly underestimated" the time needed to repair two of its aircraft, and she admitted cutting the number of engineers on night shifts last year in order to save money. She insisted, however, that the decision had not affected safety. "At no point were passengers at risk," she said, reiterating a statement that the company had issued on Friday.

Consumer groups were not satisfied. The head of the national passengers' association accused the airline of treating its customers "as an afterthought" and urged the aviation authorities to launch a full investigation. He also criticised the company for failing to inform passengers of cancellations until they had arrived at the airport, and he called on the government to introduce automatic compensation for delays of more than three hours.

The allegation that the airline had misled regulators first appeared in a newspaper report last week. According to the report, internal emails showed that senior managers had been warned about staff shortages months before the cancellations began. Asked directly whether she had seen those warnings, Ms Ha declined to comment, explaining that the matter was now in the hands of lawyers. She did, however, promise to publish an independent review of the airline's maintenance procedures before the end of the year.

Several analysts attributed the airline's troubles to a wider problem in the industry. Since air travel recovered after the pandemic, many carriers have struggled to recruit enough qualified engineers, and a number of smaller airlines have been reluctant to raise salaries for fear of losing their competitive prices. One former pilot, who asked not to be named, warned that other companies could soon face similar difficulties unless they invested in training.

The airline's largest shareholder, an investment fund based in Singapore, commended Ms Ha for her honesty but stopped short of expressing full confidence in her leadership. In a brief statement, the fund said that it expected the board to "take whatever steps are necessary" to restore passengers' trust, a phrase that some observers interpreted as a warning.

For the thousands of travellers whose holidays were disrupted, the apology may have come too late. On social media, many complained that they were still waiting for refunds, and one passenger who had missed her sister's wedding vowed never to fly with the airline again.`,
    glossary: [
      ["cover-up", "sự che đậy, bưng bít"],
      ["regulator", "cơ quan quản lý nhà nước"],
      ["afterthought", "thứ chỉ được nghĩ tới sau cùng, bị xem nhẹ"],
      ["compensation", "tiền bồi thường"],
      ["maintenance", "sự bảo dưỡng"],
      ["shareholder", "cổ đông"],
      ["stop short of", "dừng lại, không đi đến mức"],
      ["vow", "thề, quyết không"],
    ],
    questions: [
      mc("c1-n10-r1", "What is the report mainly about?", ["An airline's apology for cancelled flights and the criticism that followed", "The opening of a new airline in Ho Chi Minh City", "A former pilot's complaint about low salaries", "A court case about a missed wedding"], 0, "Đoạn đầu tóm ý chính: tổng giám đốc xin lỗi hành khách nhưng phủ nhận việc che giấu; các đoạn sau là phản ứng của các bên."),
      mc("c1-n10-r2", "What did Ms Ha admit?", ["Hiding problems from regulators", "Putting passengers at risk", "Reducing the number of engineers on night shifts", "Reading the internal warning emails"], 2, "She admitted cutting the number of engineers on night shifts. Bà phủ nhận việc che giấu, khẳng định hành khách không gặp nguy hiểm và từ chối bình luận về các email."),
      mc("c1-n10-r3", "What did the head of the passengers' association urge the aviation authorities to do?", ["Close the airline", "Launch a full investigation", "Pay compensation directly to passengers", "Replace Ms Ha"], 1, "Urged the aviation authorities to launch a full investigation: urge + người + to V."),
      fill("c1-n10-r4", "When asked whether she had seen the warnings, Ms Ha ___ to comment. (từ chối, một từ trong bài)", ["declined"], "Declined to comment: từ chối bình luận, cách nói rất hay gặp trên báo. Decline + to V, giống refuse nhưng lịch sự hơn."),
      mc("c1-n10-r5", "Why did some observers interpret the shareholder's statement as a warning?", ["It openly demanded Ms Ha's resignation.", "It praised the airline's safety record.", "It announced that the fund would sell its shares.", "It hinted that the board might have to take serious action, possibly including a change of leadership."], 3, "Quỹ khen sự trung thực nhưng không bày tỏ tin tưởng hoàn toàn, và yêu cầu hội đồng làm mọi thứ cần thiết: ngầm ý có thể thay người lãnh đạo."),
      mc("c1-n10-r6", "The fund “stopped short of expressing full confidence” in Ms Ha. This means that it", ["clearly said it trusted her completely", "did not go as far as saying it fully trusted her", "refused to speak to journalists", "criticised her for being dishonest"], 1, "Stop short of doing something: dừng lại, không đi đến mức làm việc đó."),
    ],
  }),
  task: task({
    prompt: "Bạn vừa dự một buổi họp báo căng thẳng (ví dụ: một công ty bị chỉ trích vì sự cố sản phẩm, hoặc thành phố công bố một dự án gây tranh cãi). Hãy viết bản tin ngắn (khoảng 230–280 từ) tường thuật lại các bên đã nói gì. Không dùng said; chọn động từ tường thuật cho thấy rõ bên nào bạn coi là đáng tin và bên nào bạn giữ khoảng cách.",
    hints: [
      "Dùng ít nhất một động từ của mỗi nhóm: giữ khoảng cách (claim, allege, maintain, contend), đồng tình (point out, confirm), nhượng bộ (concede, acknowledge), bác bỏ (dismiss… as, reject, downplay).",
      "Dùng đúng ít nhất ba mẫu câu cố định: attribute X to Y, cast doubt on, call on somebody to, accuse somebody of, commend somebody for.",
      "Thêm một câu bị động kiểu tin tức: It is alleged that… hoặc … is alleged to have…",
      "Giữ giọng khách quan của bản tin: không dùng I think; lập trường chỉ lộ ra qua động từ.",
    ],
    model: "Food company apologises for contaminated noodles\n\nThe chief executive of Bao Minh Foods apologised on Thursday for a batch of instant noodles that left dozens of customers ill, but maintained that the company's factories were among the safest in the country.\n\nSpeaking at a crowded press conference in Hanoi, Mr Le Van Thanh acknowledged that the contaminated products had reached supermarkets in three provinces, and he conceded that the recall had begun two days later than it should have. He attributed the delay to a fault in the company's tracking software rather than to any decision by managers.\n\nConsumer groups were unconvinced. The head of the national consumers' association accused the company of downplaying the scale of the problem and called on the health ministry to inspect all of its factories. She also cast doubt on the company's claim that only one production line had been affected, pointing out that the contaminated packets carried four different batch numbers.\n\nIt is alleged that staff at one factory had warned managers about a faulty cooling system weeks before the outbreak. Mr Thanh dismissed the report as speculation and declined to answer further questions on the subject, explaining that an internal investigation was under way.\n\nThe health ministry confirmed that all of the patients had now left hospital. A ministry spokesperson commended local doctors for their rapid response, but stopped short of clearing the company, saying only that inspectors would publish their findings within a month.\n\nShares in Bao Minh Foods fell by eight per cent in afternoon trading, and several supermarket chains have removed the brand from their shelves until the inspection is complete.",
    checklist: [
      "Dùng ít nhất bảy động từ tường thuật khác nhau và không dùng said.",
      "Có đủ bốn nhóm thái độ: giữ khoảng cách (claim, maintain), đồng tình (point out, confirm), nhượng bộ (concede, acknowledge), bác bỏ (dismiss… as, reject).",
      "Ít nhất ba mẫu câu cố định dùng đúng giới từ: attribute… to, cast doubt on, call on… to, accuse… of, commend… for.",
      "Có một câu bị động kiểu tin tức (It is alleged that…).",
      "Giọng khách quan: lập trường của người viết chỉ lộ ra qua việc chọn động từ.",
    ],
    minWords: 230,
  }),
});
