import { A, B, correct, dialogue, ex, fill, free, lesson, listen, listenQ, mc, mistake, p, reading, reorder, say, summary, table, task, teacher, tip, word } from "../../builders";

export default lesson({
  slug: "bi-dong-moi-thi",
  title: "Bị động ở mọi thì",
  minutes: 30,
  lecture: {
    title: "Bị động với hiện tại hoàn thành, tương lai, động từ khuyết thiếu và have something done",
    blocks: [
      p("Sáng thứ Hai, bạn mở email công ty: “The meeting **has been cancelled**.” Trên cửa thang máy dán tờ giấy: “This lift **will be repaired** tomorrow.” Ở quầy lễ tân: “Bags **must be left** here.” Ở bài trước (Tin tức và sự việc), bạn đã học bị động ở hiện tại đơn và quá khứ đơn. Hôm nay ta mở rộng ra các thì khác, vì thông báo, tin tức và biển báo dùng chúng hằng ngày."),
      p("Nguyên tắc chỉ có một: **be** luôn đứng trước **V3**, và chính chữ be này được chia theo thì. Phần V3 không bao giờ thay đổi."),
      table(
        ["Thì hoặc dạng", "Cấu trúc bị động", "Ví dụ"],
        ["Hiện tại hoàn thành", "have / has been + V3", "The meeting has been cancelled."],
        ["Tương lai đơn", "will be + V3", "The results will be sent by email."],
        ["Động từ khuyết thiếu", "can / must / should + be + V3", "This form must be completed today."],
        ["Phủ định", "hasn't been / won't be / can't be + V3", "The problem hasn't been solved yet."],
        ["Nghi vấn", "Has… been / Will… be / Can… be + V3?", "Has the parcel been delivered?"],
      ),
      ex("All the rooms have been cleaned.", "Tất cả các phòng đã được dọn xong.", "Hiện tại hoàn thành bị động: việc vừa xong, kết quả còn đến bây giờ."),
      ex("The new metro line will be opened next year.", "Tuyến tàu điện mới sẽ được khai trương vào năm sau."),
      ex("Mobile phones must be switched off during the exam.", "Điện thoại di động phải được tắt trong giờ thi."),
      ex("This medicine should be kept in a cool place.", "Thuốc này nên được bảo quản ở nơi thoáng mát."),
      p("Còn một cấu trúc rất đời thường: **have / get + đồ vật + V3**, nghĩa là **nhờ hoặc thuê người khác làm** việc gì đó cho mình. Get thân mật hơn have một chút."),
      table(
        ["Tự làm", "Thuê người làm"],
        ["I cut my hair. (hiểu chặt chẽ: tôi tự cắt tóc)", "I had my hair cut. (tôi đi cắt tóc ở tiệm)"],
        ["She repairs her motorbike.", "She gets her motorbike repaired."],
        ["We will paint the house.", "We will have the house painted."],
      ),
      ex("I'm going to have my car washed this afternoon.", "Chiều nay tôi sẽ mang xe đi rửa.", "Thì được chia ở động từ have, còn V3 đứng sau đồ vật: have my car washed."),
      mistake("The road has repaired.", "The road has been repaired.", "Tiếng Việt nói “đường sửa rồi” mà không cần chữ “được”, nên người Việt hay quên been. Con đường không tự sửa được, phải có been + V3."),
      mistake("This form must be fill in before Friday.", "This form must be filled in before Friday.", "Sau be luôn là V3. Nhiều bạn nhớ quy tắc “sau must là động từ nguyên mẫu” nên dùng fill, nhưng động từ nguyên mẫu ở đây chính là be."),
      mistake("I had my hair cutting yesterday. (ý là đi tiệm)", "I had my hair cut yesterday.", "Mẫu thuê người làm là have + đồ vật + V3 (cut), không dùng V-ing. Cũng đừng rút thành I cut my hair: hiểu chặt chẽ là tự tay cắt (văn nói thân mật đôi khi vẫn nói vậy khi đi tiệm), còn had my hair cut thì rõ nghĩa."),
      tip("Sau **can, must, should, will**, chữ be **luôn giữ nguyên là be**: must be done, will be done. Không bao giờ viết must is done hay will been done. Khi nói nhanh, been đọc nhẹ thành /bɪn/, đừng kéo dài thành “biiin”."),
      teacher("Tôi có một mẹo để các bạn kiểm tra câu bị động: **đếm xem có đủ hai mảnh chưa**, một mảnh be đã chia (is, has been, will be, must be) và một mảnh V3. Thiếu một mảnh là sai. Các bạn hãy chụp ảnh ba tấm biển thông báo bằng tiếng Anh ở sân bay, khách sạn hay siêu thị, rồi gạch chân hai mảnh đó. Nhìn thật nhiều là tự khắc viết đúng."),
      summary(
        "Bị động = be (chia theo thì) + V3. Phần V3 không bao giờ đổi.",
        "Hiện tại hoàn thành: has / have been + V3. Tương lai: will be + V3.",
        "Sau can / must / should / will, be giữ nguyên: must be filled in, không viết must is filled.",
        "Thuê hoặc nhờ người khác làm: have / get + đồ vật + V3 (I had my hair cut).",
        "Tự kiểm tra câu bị động: đủ hai mảnh, be đã chia và V3.",
      ),
    ],
  },
  words: [
    word("repair", "/rɪˈpeə/", "sửa chữa", "The lift will be repaired tomorrow.", "re|pair", 1),
    word("cancel", "/ˈkæn.səl/", "hủy bỏ", "The flight has been cancelled.", "can|cel", 0, "Trọng âm ở âm đầu: CAN-cel. Chữ c thứ hai đọc là /s/."),
    word("deliver", "/dɪˈlɪv.ə/", "giao hàng, chuyển đến", "Your order will be delivered on Monday.", "de|liv|er", 1),
    word("replace", "/rɪˈpleɪs/", "thay thế", "The old windows have been replaced.", "re|place", 1),
    word("renovate", "/ˈren.ə.veɪt/", "cải tạo, sửa sang lại", "Our school will be renovated this summer.", "ren|o|vate", 0),
    word("hairdresser", "/ˈheəˌdres.ə/", "thợ làm tóc; tiệm làm tóc", "I had my hair cut at the hairdresser's.", "hair|dress|er", 0),
    word("postpone", "/pəʊstˈpəʊn/", "hoãn lại", "The match has been postponed because of the rain.", "post|pone", 1, "Âm /t/ ở giữa thường đọc rất nhẹ. Hoãn là postpone, còn hủy hẳn là cancel."),
    word("complete", "/kəmˈpliːt/", "hoàn thành, điền đầy đủ", "The form must be completed in English.", "com|plete", 1),
  ],
  exercises: [
    mc("b1-n14-1", "The meeting ___ until next Monday.", ["has postponed", "has been postponed", "has being postponed", "was postpone"], 1, "Cuộc họp không tự hoãn, nên cần bị động: has been + V3."),
    mc("b1-n14-2", "I ___ my motorbike repaired yesterday.", ["made", "did", "had"], 2, "Thuê người khác sửa xe: have something done. Quá khứ của have là had."),
    fill("b1-n14-3", "The results will ___ sent to you by email.", ["be"], "Tương lai bị động: will be + V3."),
    fill("b1-n14-4", "This form must be ___ before Friday. (complete)", ["completed"], "Sau must be phải là V3: completed."),
    reorder("b1-n14-5", "Your parcel has been sent to the wrong address.", "Hiện tại hoàn thành bị động: has been + V3 (sent)."),
    reorder("b1-n14-6", "Where can I get my phone repaired?", "Get + đồ vật + V3: nhờ người khác sửa. Đồ vật my phone đứng trước repaired."),
    listen("b1-n14-7", "All the rooms have been cleaned.", ["Các phòng sẽ được dọn vào ngày mai.", "Chưa phòng nào được dọn.", "Tất cả các phòng đã được dọn xong.", "Bạn phải tự dọn phòng của mình."], 2, "Have been cleaned: đã được dọn, và bây giờ đã sạch."),
    listen("b1-n14-8", "Mobile phones must be switched off during the exam.", ["Điện thoại di động phải được tắt trong giờ thi.", "Bạn có thể dùng điện thoại trong giờ thi.", "Điện thoại sẽ được trả lại sau giờ thi."], 0, "Must be + V3: bắt buộc phải được làm."),
    correct("b1-n14-9", "The new bridge will be build next year.", "The new bridge will be built next year.", "Sau be luôn là V3. V3 của build là built."),
    correct("b1-n14-10", "My bike has stolen from the car park.", "My bike has been stolen from the car park.", "Chiếc xe không tự lấy trộm được, nên cần bị động: has been + V3. Thiếu been là thiếu mảnh be."),
  ],
  speaking: [
    say("The meeting has been cancelled.", "Cuộc họp đã bị hủy."),
    say("The new bridge will be finished next year.", "Cây cầu mới sẽ được hoàn thành vào năm sau."),
    say("I'm going to have my hair cut this weekend.", "Cuối tuần này tôi sẽ đi cắt tóc."),
  ],
  freeSpeaking: free(
    "What changes have been made in your neighbourhood or workplace recently, and what will be done next?",
    "Kể về những thay đổi gần đây ở khu bạn sống hoặc nơi bạn làm việc: việc gì đã được làm, việc gì sắp được làm. Dùng has been + V3, will be + V3, và have something done nếu được.",
    "A lot of changes have been made in my neighbourhood this year. The main road has been widened, and new trees have been planted along the river. A small park will be opened next month. At home, I've had my kitchen painted, and next week our old air conditioner will be replaced.",
  ),
  dialogue: dialogue(
    "Chuẩn bị đón đoàn khách",
    "Sáng thứ Hai, chị Mai (trưởng phòng) hỏi Đức (nhân viên) xem mọi việc chuẩn bị đón đoàn khách Nhật Bản đến thăm công ty đã xong chưa.",
    { A: "Chị Mai", B: "Đức" },
    A("Duc, have the meeting rooms been cleaned yet?", "Đức ơi, phòng họp đã được dọn chưa em?"),
    B("Yes, they have. They were cleaned early this morning.", "Dạ rồi ạ. Phòng được dọn từ sáng sớm."),
    A("Good. Has the projector been repaired?", "Tốt. Máy chiếu đã được sửa chưa?"),
    B("Not yet, I'm afraid. It will be fixed by lunchtime. The technician is on his way.", "Dạ chưa ạ. Máy sẽ được sửa xong trước giờ trưa. Thợ kỹ thuật đang đến."),
    A("It must be checked before the clients arrive at two.", "Máy phải được kiểm tra trước khi khách đến lúc hai giờ nhé."),
    B("Don't worry. I'll test it myself. What about the reports?", "Chị đừng lo. Em sẽ tự kiểm tra. Còn báo cáo thì sao ạ?"),
    A("They've already been printed. They should be put on the table in the big room.", "Báo cáo đã được in rồi. Nên đặt chúng lên bàn ở phòng lớn."),
    B("Sure. And the flowers? Have they been ordered?", "Vâng. Còn hoa thì sao chị? Đã đặt chưa ạ?"),
    A("Yes. I've arranged to have them delivered from the shop next door. They'll be brought up at one.", "Rồi. Chị đã hẹn cửa hàng bên cạnh giao tới. Hoa sẽ được mang lên lúc một giờ."),
    B("Great. I think everything will be done on time.", "Tuyệt. Em nghĩ mọi việc sẽ được làm xong kịp giờ."),
    A("Thanks, Duc. And please get your suit ironed. We want to look professional!", "Cảm ơn em. Nhớ mang bộ vest đi là cho phẳng nhé. Mình cần trông thật chuyên nghiệp!"),
  ),
  dialogueQuestions: [
    listenQ("b1-n14-d1", "When will the projector be ready?", "Not yet, I'm afraid. It will be fixed by lunchtime. The technician is on his way.", ["It has already been repaired.", "By lunchtime", "At two o'clock", "Tomorrow morning"], 1, "It will be fixed by lunchtime: máy sẽ được sửa xong trước giờ trưa."),
    mc("b1-n14-d2", "Which job has already been done?", ["The reports have been printed.", "The projector has been repaired.", "The flowers have been brought up."], 0, "They've already been printed: báo cáo đã được in. Máy chiếu chưa sửa xong, hoa một giờ mới mang lên."),
    listenQ("b1-n14-d3", "What does Mai ask Duc to do at the end?", "Thanks, Duc. And please get your suit ironed. We want to look professional!", ["Buy a new suit", "Clean the big meeting room", "Have his suit ironed", "Meet the clients at the airport"], 2, "Get your suit ironed: mang bộ vest đi là (nhờ người khác là)."),
  ],
  reading: reading({
    title: "Hoa Binh Market to reopen next month",
    text: `After eighteen months of work, the old Hoa Binh Market in the city centre will be reopened to the public on the first of June, the city council announced yesterday.

The market, which was built more than a hundred years ago, was badly damaged by a fire two years ago. Since then, the building has been completely renovated. The old roof has been replaced, and new fire alarms have been fitted in every corridor. More than three hundred stalls have been rebuilt, and each one has been given its own water supply.

However, not everything has been finished yet. The car park still hasn't been completed, and the new lifts must be checked before they can be used. According to the council, the car park will be opened in July.

Traders who had stalls in the old market will be offered the same places in the new building, and their rent will not be increased for the first year. "We've waited a long time for this," said Mrs Bui, who has sold fruit at the market since she was a young woman. "I've already had a new sign made for my stall."

Some changes have also been planned for shoppers. Plastic bags will not be given out for free, and all rubbish must be put into special bins. Visitors can be fined if they smoke inside the building.

The opening ceremony will be held at nine o'clock and will be shown live on local television.`,
    glossary: [
      ["council", "hội đồng (thành phố)"],
      ["damage", "làm hư hại"],
      ["fit", "lắp đặt"],
      ["stall", "sạp hàng, quầy hàng"],
      ["trader", "tiểu thương, người buôn bán"],
      ["fine", "phạt tiền"],
    ],
    questions: [
      mc("b1-n14-r1", "What is the news report mainly about?", ["A fire in the city centre last week", "The reopening of a renovated market", "How to rent a stall at a market", "A new television programme"], 1, "Bản tin nói về việc chợ Hòa Bình được cải tạo xong và sắp mở cửa lại."),
      mc("b1-n14-r2", "Which part of the market has NOT been finished yet?", ["The roof", "The fire alarms", "The car park", "The stalls"], 2, "The car park still hasn't been completed… will be opened in July."),
      fill("b1-n14-r3", "Traders from the old market will ___ offered the same places in the new building.", ["be"], "Tương lai bị động: will be + V3 (offered)."),
      mc("b1-n14-r4", "What will happen to plastic bags?", ["They will be sold at every stall.", "They won't be given out for free.", "They will be collected by the council."], 1, "Plastic bags will not be given out for free."),
      mc("b1-n14-r5", "Why has Mrs Bui probably had a new sign made?", ["She is moving to another city.", "She wants to sell flowers instead of fruit.", "The council paid for all the signs.", "She is sure that she will sell at the new market."], 3, "Câu suy luận: bà Bùi biết tiểu thương cũ sẽ được giữ chỗ, nên đã chuẩn bị biển hiệu mới cho sạp của mình."),
    ],
  }),
  task: task({
    prompt: "Bạn là ban quản lý một tòa chung cư. Viết một thông báo ngắn (90–120 từ) gửi cư dân về các việc sửa chữa, bảo trì trong tuần này.",
    hints: [
      "Dùng has / have been + V3 cho việc đã xong.",
      "Dùng will be + V3 cho việc sắp làm.",
      "Dùng must / should be + V3 cho quy định cư dân cần làm theo.",
      "Có thể thêm một câu have something done.",
    ],
    model: "Dear residents, here is an update on this week's repairs. The broken lift in Block A has been repaired, and the car park has been cleaned. However, the water pipes on the fifth floor haven't been replaced yet. They will be replaced on Thursday morning, so the water will be turned off from eight to eleven. All motorbikes must be moved out of the car park by Wednesday evening. Rubbish should be taken to the ground floor before nine at night. If you would like to have your air conditioner checked, please contact reception. Thank you for your patience.",
    checklist: [
      "Có ít nhất hai câu has / have been + V3.",
      "Có ít nhất một câu will be + V3.",
      "Có ít nhất một câu must / should / can be + V3.",
      "Mỗi câu bị động đủ hai mảnh: be đã chia và V3.",
      "Sau must / will / should, be giữ nguyên (không viết must is hay will been).",
    ],
    minWords: 90,
  }),
});
