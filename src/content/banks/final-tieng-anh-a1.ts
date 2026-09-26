import { correct, fill, listenQ, mc, reorder } from "../builders";
import type { Exercise } from "../types";

/** Extra final-test items for Tiếng Anh A1, 10 per chapter (two of each kind), drawn at random with the original bank. */
export const FINAL_EXTRA_TIENG_ANH_A1: Exercise[][] = [
  // chương 1: to be, a/an, số nhiều, this/these, sở hữu, đại từ tân ngữ, số và tuổi, nghề và quốc tịch
  [
    mc("a1-f21", "___ my two sisters, Lan and Mai.", ["This is", "These are", "This are", "These is"], 1, "Hai người là số nhiều nên dùng these và are: These are my two sisters. This chỉ dùng cho một người hay một vật và đi với is."),
    mc("a1-f22", "Somchai and Nok are from Thailand. They're ___.", ["Thailand", "a Thai", "Thai", "from Thai"], 2, "Sau to be dùng quốc tịch Thai (người Thái), không dùng tên nước Thailand. Quốc tịch dùng như tính từ nên không có a; tên nước mới đi sau from."),
    fill("a1-f23", "Hoa and Minh are my friends. I'm with ___ now. (họ)", ["them"], "Sau giới từ with phải dùng đại từ tân ngữ: they đổi thành them."),
    fill("a1-f24", "My son is ___ years old. (14, viết bằng chữ)", ["fourteen"], "14 là four thêm -teen: fourteen, vẫn giữ chữ u. Chỉ forty (40) mới bỏ chữ u."),
    reorder("a1-f25", "What are your children's names?", "Children là số nhiều bất quy tắc của child, 's chỉ sở hữu. Names là số nhiều nên câu hỏi dùng What + are."),
    reorder("a1-f26", "Who are those two women?", "Hỏi người đó là ai: Who + are + chủ ngữ số nhiều? Those đứng trước số đếm two; women là số nhiều bất quy tắc của woman."),
    listenQ("a1-f27", "Số điện thoại của chị Thu là gì?", "Hi, I'm Thu. My phone number is oh nine seven eight, double one five, two three nine.", ["0978 155 239", "0987 115 239", "0978 115 293", "0978 115 239"], 3, "Oh nine seven eight là 0978; double one five là hai số 1 liền nhau rồi đến số 5: 115; cuối cùng là 239."),
    listenQ("a1-f28", "Anh Hùng làm nghề gì?", "This is my brother, Hung. He isn't a teacher. He's a doctor in Da Nang.", ["Bác sĩ", "Giáo viên", "Y tá", "Kỹ sư"], 0, "He isn't a teacher là anh ấy không phải giáo viên; He's a doctor là anh ấy là bác sĩ."),
    correct("a1-f29", "My sister has two babys.", ["My sister has two babies."], "Danh từ tận cùng bằng phụ âm + y thì đổi y thành -ies khi ở số nhiều: baby thành babies."),
    correct("a1-f30", "Yuki is from Japanese.", ["Yuki is from Japan.", "Yuki's from Japan.", "Yuki is Japanese.", "Yuki's Japanese."], "Sau from phải là tên nước: from Japan. Muốn dùng quốc tịch Japanese thì đặt ngay sau to be, không có from."),
  ],
  // chương 2: hiện tại đơn, trạng từ tần suất, giờ và giới từ thời gian, sở thích + V-ing, câu hỏi Wh- với do/does, How often
  [
    mc("a1-f31", "Chọn câu đúng để nói chị Lan thường uống trà:", ["She drinks usually tea.", "Usually she drink tea.", "She usually drink tea.", "She usually drinks tea."], 3, "Trạng từ tần suất đứng trước động từ thường, và với she thì động từ phải thêm -s: She usually drinks tea."),
    mc("a1-f32", "A: What does your wife do? B: ___", ["She's a nurse.", "Yes, she does.", "In Hanoi.", "At seven o'clock."], 0, "What does … do? là câu hỏi về nghề nghiệp, nên trả lời bằng nghề: She's a nurse. At seven o'clock trả lời What time, còn In Hanoi trả lời Where."),
    fill("a1-f33", "My daughter ___ English every evening. (study)", ["studies"], "My daughter là she nên động từ thêm -s; study tận cùng bằng phụ âm + y nên đổi y thành -ies: studies."),
    fill("a1-f34", "My son has a swimming class ___ Saturday morning. (vào)", ["on"], "Có tên thứ đi kèm buổi (Saturday morning) thì dùng on, dù có chữ morning."),
    reorder("a1-f35", "How often does your husband cook dinner?", "How often + does + chủ ngữ + động từ nguyên mẫu? Đã có does nên cook không thêm -s."),
    reorder("a1-f36", "What does your brother enjoy doing?", "Câu hỏi Wh- với he: What + does + chủ ngữ + enjoy? Sau enjoy là động từ thêm -ing: doing."),
    listenQ("a1-f37", "Bộ phim bắt đầu lúc mấy giờ?", "The film starts at ten to eight. Let's meet at half past seven.", ["8:10", "7:50", "7:30", "8:50"], 1, "Ten to eight là tám giờ kém mười, tức 7:50. Half past seven (7:30) là giờ hẹn gặp nhau, không phải giờ phim bắt đầu."),
    listenQ("a1-f38", "Chị Mai đi bơi bao lâu một lần?", "Hi, I'm Mai. I love swimming. I go to the pool twice a week, on Mondays and Thursdays.", ["Mỗi ngày", "Một lần một tuần", "Hai lần một tuần", "Ba lần một tuần"], 2, "Twice a week là hai lần một tuần: chị Mai đi bơi vào thứ Hai và thứ Năm."),
    correct("a1-f39", "What time do your son go to school?", ["What time does your son go to school?"], "Your son là he nên câu hỏi dùng does, không dùng do; động từ go giữ nguyên."),
    correct("a1-f40", "My mother every day goes to the market.", ["My mother goes to the market every day.", "Every day my mother goes to the market."], "Cụm tần suất every day đứng ở cuối câu (hoặc đầu câu), không chen giữa chủ ngữ và động từ như always, usually."),
  ],
  // chương 3: đếm được và không đếm được, đồ đựng, some/any, gọi món, màu sắc và tính từ, can, have got, tả người
  [
    mc("a1-f41", "Chọn câu đúng để tả anh Minh:", ["He has tall and slim.", "He is tall and slim.", "He has got tall and slim.", "He is got tall and slim."], 1, "Chiều cao và dáng người dùng to be + tính từ: He is tall and slim. Have got chỉ đi với danh từ như hair, eyes, glasses."),
    mc("a1-f42", "Bạn muốn nhờ người bán hàng nói chậm lại. Bạn nói:", ["Can I speak slowly, please?", "You can speak slowly, please?", "Can you speak slowly, please?", "Do you can speak slowly, please?"], 2, "Nhờ người khác làm gì dùng Can you + động từ nguyên mẫu? Can I…? là xin phép cho chính mình; câu hỏi với can đảo can lên đầu và không dùng do."),
    fill("a1-f43", "My parents ___ got a car. They go to work by bus. (không có)", ["haven't", "have not"], "My parents là they nên dùng have got; phủ định là haven't got."),
    fill("a1-f44", "Two ___ of tea, please. (tách)", ["cups"], "Tea không đếm được nên đếm bằng tách: a cup of tea. Có hai tách thì thêm -s vào cup, không thêm vào tea: two cups of tea."),
    reorder("a1-f45", "How many languages can your father speak?", "How many + danh từ số nhiều + can + chủ ngữ + động từ nguyên mẫu? Can đảo lên trước chủ ngữ, speak không thêm -s."),
    reorder("a1-f46", "I'd like three bottles of water, please.", "Water không đếm được nên đếm bằng bottle; có ba chai thì thêm -s vào bottle, water giữ nguyên."),
    listenQ("a1-f47", "Chị Hạnh trông thế nào?", "My sister Hanh is short and slim. She's got short curly black hair and glasses.", ["Cao, tóc đen ngắn và xoăn, đeo kính", "Thấp, tóc đen dài và thẳng, đeo kính", "Thấp, tóc nâu ngắn và xoăn, không đeo kính", "Thấp, tóc đen ngắn và xoăn, đeo kính"], 3, "Short and slim là thấp và thon thả; short curly black hair là tóc đen, ngắn và xoăn; she's got glasses là chị ấy đeo kính."),
    listenQ("a1-f48", "Cuối cùng người khách gọi những gì?", "Can I have a bowl of chicken pho and a cup of coffee, please? Sorry, we don't have any coffee today. OK, a glass of orange juice, then.", ["Một bát phở gà và một cốc nước cam", "Một bát phở gà và một cốc cà phê", "Một bát phở bò và một cốc nước cam", "Một bát phở gà và một chai nước"], 0, "Quán không có cà phê (we don't have any coffee today) nên khách đổi sang a glass of orange juice; món ăn vẫn là a bowl of chicken pho."),
    correct("a1-f49", "We need a bread for breakfast.", ["We need some bread for breakfast.", "We need bread for breakfast.", "We need a loaf of bread for breakfast."], "Bread không đếm được nên không đi với a; dùng some bread (hoặc a loaf of bread)."),
    correct("a1-f50", "I have two reds T-shirts.", ["I have two red T-shirts.", "I have got two red T-shirts."], "Tính từ, kể cả màu sắc, không bao giờ thêm -s; chỉ danh từ T-shirts mới ở số nhiều: two red T-shirts."),
  ],
  // chương 4: there is/are, a/an và the, giới từ vị trí, thành phố và chỉ đường, hiện tại tiếp diễn, was/were
  [
    mc("a1-f51", "There's a pharmacy on my street. ___ pharmacy is next to a café.", ["A", "An", "The", "Some"], 2, "Hiệu thuốc đã được nhắc ở câu trước, người nghe biết là cái nào, nên câu sau dùng the."),
    mc("a1-f52", "Ngân hàng nằm bên kia đường, đối diện trường học. Câu nào đúng?", ["The bank is in front the school.", "The bank is opposite of the school.", "The bank is between the school.", "The bank is opposite the school."], 3, "Đối diện, bên kia đường là opposite, đứng thẳng trước danh từ mà không có of. In front of là ngay phía trước và phải nói đủ cả cụm; between cần hai nơi."),
    fill("a1-f53", "___ your parents at home yesterday evening? (to be)", ["Were"], "Yesterday evening là quá khứ; your parents là số nhiều (they) nên dùng were, đảo lên đầu câu hỏi."),
    fill("a1-f54", "Mai is in her room now. She ___ an email. (write)", ["is writing", "'s writing"], "Now cho biết việc đang diễn ra: is + V-ing. Write tận cùng bằng e câm nên bỏ e rồi thêm -ing: writing."),
    reorder("a1-f55", "Who are you waiting for?", "Câu hỏi hiện tại tiếp diễn: Who + are + you + V-ing? Wait đi với for, và for đứng ở cuối câu."),
    reorder("a1-f56", "What was your hotel like?", "Hỏi một thứ trong quá khứ như thế nào: What + was + danh từ số ít + like? Like đứng ở cuối câu."),
    listenQ("a1-f57", "Để đến thư viện, bạn phải đi thế nào?", "Go along this street and take the second street on the right. The library is on your left.", ["Rẽ vào đường thứ hai bên phải, thư viện ở bên tay trái", "Rẽ vào đường thứ hai bên trái, thư viện ở bên tay phải", "Rẽ vào đường đầu tiên bên phải, thư viện ở bên tay trái", "Rẽ vào đường thứ hai bên phải, thư viện ở bên tay phải"], 0, "Take the second street on the right là rẽ vào đường thứ hai bên phải; on your left là ở bên tay trái bạn."),
    listenQ("a1-f58", "Hôm nay anh Nam đang làm gì?", "Hi, it's Nam. I usually play football on Sundays, but it's raining today. I'm watching a film at home.", ["Đang chơi bóng đá", "Đang xem phim ở nhà", "Đang đợi xe buýt dưới mưa", "Đang đọc sách ở nhà"], 1, "I usually play football là thói quen; hôm nay trời mưa nên anh ấy đang xem phim ở nhà: I'm watching a film at home."),
    correct("a1-f59", "The weather is very hot last weekend.", ["The weather was very hot last weekend.", "Last weekend the weather was very hot."], "Last weekend là chuyện đã qua nên is phải đổi thành was."),
    correct("a1-f60", "The café is next the library.", ["The café is next to the library.", "The café's next to the library."], "Next to là cụm cố định, phải có to: next to the library."),
  ],
];
