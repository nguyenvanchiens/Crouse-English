import { correct, fill, listenQ, mc, reorder } from "../builders";
import type { Exercise } from "../types";

/** Extra final-test items for Tiếng Anh A2, 10 per chapter (two of each kind), drawn at random with the original bank. */
export const FINAL_EXTRA_TIENG_ANH_A2: Exercise[][] = [
  // Chương 1: chuyện đã qua
  [
    mc("a2-f21", "A: ___ did you go to Hoi An with? B: With my two cousins.", ["Who", "Where", "When", "How"], 0, "Câu trả lời With my two cousins cho biết đi cùng ai, nên hỏi Who... with?, giới từ with đứng cuối câu."),
    mc("a2-f22", "A: What ___ you doing when I called you last night? B: I was cooking dinner.", ["did", "are", "were", "was"], 2, "Hỏi việc đang diễn ra ở một lúc trong quá khứ: What + were + you + V-ing? You đi với were."),
    fill("a2-f23", "There ___ to be a cinema in our street, but now it's a supermarket. (use)", ["used"], "Nơi chốn đã thay đổi, câu khẳng định: There used to be... (ngày xưa từng có, bây giờ không còn)."),
    fill("a2-f24", "We ___ our luggage at the airport, so we bought some new clothes. (lose)", ["lost"], "Kể chuyện đã qua nên dùng quá khứ đơn. Lose là động từ bất quy tắc: lose → lost."),
    reorder("a2-f25", "We didn't use to have a car.", "Phủ định của used to: didn't use to + động từ nguyên mẫu, bỏ chữ d vì đã có didn't."),
    reorder("a2-f26", "What was your brother doing in the garden?", "Câu hỏi ở quá khứ tiếp diễn: từ để hỏi + was / were + chủ ngữ + V-ing?"),
    listenQ("a2-f27", "Người nói ở Quy Nhơn bao lâu?", "Last summer we drove to Quy Nhon. We stayed there for six days, but it rained on the last two days.", ["Hai ngày", "Sáu ngày", "Bốn ngày", "Một tuần"], 1, "We stayed there for six days: ở đó sáu ngày. Hai ngày là số ngày cuối trời mưa."),
    listenQ("a2-f28", "Hồi còn sinh viên, người nói thường làm gì vào cuối tuần?", "When I was a student, I used to work in a café at the weekend. Now I work in a bank, and I usually rest on Sundays.", ["Làm việc ở ngân hàng", "Nghỉ ngơi ở nhà", "Đi học thêm", "Làm ở một quán cà phê"], 3, "I used to work in a café at the weekend: ngày xưa hay làm ở quán cà phê vào cuối tuần. Làm ngân hàng và nghỉ ngày Chủ nhật là chuyện bây giờ."),
    correct("a2-f29", "I used to visit Hue three times last year.", ["I visited Hue three times last year.", "Last year I visited Hue three times.", "I used to visit Hue three times a year."], "Có số lần cụ thể trong một khoảng thời gian đã qua (three times last year) thì dùng quá khứ đơn: I visited. Used to chỉ thói quen kéo dài ngày xưa, như three times a year."),
    correct("a2-f30", "After finish school, my uncle moved to Da Nang.", ["After my uncle finished school, he moved to Da Nang.", "After finishing school, my uncle moved to Da Nang.", "After he finished school, my uncle moved to Da Nang.", "My uncle moved to Da Nang after he finished school.", "My uncle moved to Da Nang after finishing school."], "Sau after không dùng động từ nguyên mẫu. Dùng mệnh đề đầy đủ (After he finished school) hoặc V-ing (After finishing school)."),
  ],
  // Chương 2: dự định và tương lai
  [
    mc("a2-f31", "If you mix red and white paint, you ___ pink.", ["got", "will got", "getting", "get"], 3, "Điều hễ làm là xảy ra, lúc nào cũng đúng: điều kiện loại 0, hai vế đều ở hiện tại đơn (you get pink)."),
    mc("a2-f32", "The sky is very clear. I ___ think it will rain this afternoon.", ["don't", "won't", "am not", "not"], 0, "Dự đoán nhẹ nhàng ở dạng phủ định: phủ định ở think, I don't think + chủ ngữ + will + động từ."),
    fill("a2-f33", "___ you tell Mr Hai that I called, please? (nhờ lịch sự)", ["Could", "Would", "Can"], "Nhờ người khác làm gì: Could you / Would you + động từ nguyên mẫu (Can you cũng đúng nhưng kém lịch sự hơn)."),
    fill("a2-f34", "My brother ___ getting married next month. He sent us the invitations yesterday. (be)", ["is", "'s"], "Việc đã sắp xếp xong (đã gửi thiệp mời) dùng hiện tại tiếp diễn chỉ tương lai: is + V-ing. My brother đi với is."),
    reorder("a2-f35", "Shall I book a taxi for you?", "Đề nghị làm giúp người khác: Shall I + động từ nguyên mẫu?"),
    reorder("a2-f36", "Do you think the shop will be open?", "Hỏi ý kiến người khác về tương lai: Do you think + chủ ngữ + will + động từ nguyên mẫu?"),
    listenQ("a2-f37", "Người nói rảnh khi nào?", "Sorry, I'm not free on Friday evening. I'm meeting a customer at seven. But I'm free on Saturday.", ["Tối thứ Sáu", "Cả tối thứ Sáu và thứ Bảy", "Thứ Bảy", "Chủ nhật"], 2, "I'm meeting a customer at seven: tối thứ Sáu đã có hẹn gặp khách. But I'm free on Saturday: thứ Bảy mới rảnh."),
    listenQ("a2-f38", "Chị Nga nhờ người nghe làm gì?", "Hello, this is Nga from the hotel. I'm calling about your booking. Could you call me back before four o'clock, please?", ["Đến khách sạn trước bốn giờ", "Gọi lại cho chị trước bốn giờ", "Hủy việc đặt phòng", "Gửi email cho khách sạn"], 1, "Could you call me back before four o'clock?: chị Nga nhờ gọi lại cho chị trước bốn giờ."),
    correct("a2-f39", "If I have time tomorrow, I help you with your homework.", ["If I have time tomorrow, I'll help you with your homework.", "I'll help you with your homework if I have time tomorrow.", "If I have time tomorrow, I can help you with your homework.", "I can help you with your homework if I have time tomorrow."], "Điều kiện loại 1 nói về một lần cụ thể ở tương lai: vế if dùng hiện tại đơn, vế kết quả cần will (I'll help you)."),
    correct("a2-f40", "My sister won't definitely come to the party.", ["My sister definitely won't come to the party.", "My sister will definitely not come to the party."], "Definitely đứng sau will nhưng đứng trước won't: she'll definitely come, she definitely won't come."),
  ],
  // Chương 3: mua sắm và đồ vật
  [
    mc("a2-f41", "It's raining and very cold today. The weather is ___ than yesterday.", ["bad", "worse", "worst", "more bad"], 1, "Bad là tính từ bất quy tắc: bad → worse → the worst. Có than nên dùng so sánh hơn: worse than."),
    mc("a2-f42", "Wait for me, please. I only need ___ minutes to get ready.", ["much", "a little", "a lot", "a few"], 3, "Minutes là danh từ đếm được số nhiều nên dùng a few (một vài). A little đi với danh từ không đếm được; a lot phải có of."),
    fill("a2-f43", "This isn't Nam's jacket. ___ is grey. (của anh ấy)", ["His", "Nam's"], "His thay cho his jacket, sau nó không có danh từ. Cũng có thể nói Nam's."),
    fill("a2-f44", "How ___ bottles of water do we need for the picnic?", ["many"], "Bottles là danh từ đếm được số nhiều nên hỏi How many."),
    reorder("a2-f45", "These jeans are too tight to wear.", "Too + tính từ + to + động từ nguyên mẫu: chật quá, không mặc được."),
    reorder("a2-f46", "Is this blue umbrella yours?", "Yours đứng một mình ở cuối câu, thay cho your umbrella."),
    listenQ("a2-f47", "Người nói chọn cái túi nào, vì sao?", "The red bag is cheaper, but the black one is bigger and stronger. I think I'll take the black one.", ["Túi đen, vì nó to hơn và chắc hơn", "Túi đỏ, vì nó rẻ hơn", "Túi đen, vì nó rẻ hơn", "Túi đỏ, vì nó to hơn"], 0, "The black one is bigger and stronger. I'll take the black one: chọn túi đen vì to hơn và chắc hơn. Túi đỏ chỉ rẻ hơn."),
    listenQ("a2-f48", "Khách phàn nàn điều gì về căn phòng?", "Excuse me, our room is too noisy. The window is next to a busy road. Could we have a quieter room, please?", ["Phòng quá nhỏ", "Phòng không đủ sạch", "Phòng quá ồn", "Phòng quá đắt"], 2, "Our room is too noisy: phòng ồn quá, vì cửa sổ sát một con đường đông xe."),
    correct("a2-f49", "We need to buy some furnitures for our new flat.", ["We need to buy some furniture for our new flat.", "We need to buy furniture for our new flat."], "Furniture là danh từ không đếm được nên không bao giờ thêm -s."),
    correct("a2-f50", "My grandparents live in Hue, so we visit they every summer.", ["My grandparents live in Hue, so we visit them every summer."], "Sau động từ visit phải dùng đại từ tân ngữ: them, không dùng they."),
  ],
  // Chương 4: ra ngoài và trải nghiệm
  [
    mc("a2-f51", "Tomorrow is a holiday, so the children ___ go to school.", ["mustn't", "should", "don't have to", "has to"], 2, "Ngày nghỉ thì không bắt buộc đi học: don't have to (không cần). Mustn't là bị cấm, nghĩa khác hẳn."),
    mc("a2-f52", "My parents ___ to Singapore in 2019.", ["went", "have been", "have gone", "has been"], 0, "Có thời điểm cụ thể (in 2019) thì dùng quá khứ đơn: went, không dùng hiện tại hoàn thành."),
    fill("a2-f53", "The bank is ___ the cinema, on the other side of the road. (đối diện)", ["opposite"], "Đối diện, ở phía bên kia đường là opposite: opposite the cinema."),
    fill("a2-f54", "My grandmother has ___ been on a plane, so she's a bit worried about her first flight. (chưa bao giờ)", ["never"], "Chưa bao giờ: have / has + never + V3. Never đứng giữa has và been."),
    reorder("a2-f55", "Do I have to take this medicine every day?", "Câu hỏi với have to cần do / does đứng trước chủ ngữ: Do I have to + động từ nguyên mẫu?"),
    reorder("a2-f56", "Has the film started yet?", "Câu hỏi “đã... chưa?”: Has + chủ ngữ + V3 + yet? Yet đứng cuối câu."),
    listenQ("a2-f57", "Bưu điện ở đâu?", "Go straight on and turn left at the traffic lights. The post office is next to a big bank, opposite the park.", ["Cạnh công viên, đối diện ngân hàng", "Ở góc phố, gần đèn giao thông", "Sau một ngân hàng lớn", "Cạnh một ngân hàng lớn, đối diện công viên"], 3, "Next to a big bank, opposite the park: cạnh một ngân hàng lớn, đối diện công viên. Đèn giao thông là chỗ rẽ trái."),
    listenQ("a2-f58", "Người trả lời đi Sa Pa khi nào, với ai?", "Have you ever been to Sa Pa? Yes, I have. I went there with my classmates three years ago.", ["Ba tháng trước, cùng gia đình", "Ba năm trước, cùng các bạn cùng lớp", "Năm ngoái, cùng các bạn cùng lớp", "Chưa đi bao giờ"], 1, "I went there with my classmates three years ago: đi cùng các bạn cùng lớp, ba năm trước. Kể chi tiết có thời gian cụ thể nên chuyển sang quá khứ đơn."),
    correct("a2-f59", "How long it takes to walk to the beach?", ["How long does it take to walk to the beach?"], "Câu hỏi ở hiện tại đơn cần trợ động từ does đứng trước chủ ngữ, động từ về nguyên mẫu: How long does it take...?"),
    correct("a2-f60", "She has just came home.", ["She has just come home.", "She's just come home."], "Hiện tại hoàn thành: has + quá khứ phân từ. Come → came → come, nên nói has just come."),
  ],
];
