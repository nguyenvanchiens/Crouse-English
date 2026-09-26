import type { PlacementQuestion } from "../types";

/** More placement questions (A1–B1), so each attempt draws a different set. */
export const PLACEMENT_EXTRA_LOW: PlacementQuestion[] = [
  // ---- A1 ----
  { id: "p41", level: "A1", skill: "grammar", prompt: "I ___ got a new bike.", options: ["have", "has", "am", "is"], answer: 0 },
  { id: "p42", level: "A1", skill: "grammar", prompt: "There ___ three books on the table.", options: ["is", "are", "am", "be"], answer: 1 },
  { id: "p43", level: "A1", skill: "grammar", prompt: "My sister ___ swim, but she can't ride a bike.", options: ["is", "does", "can", "cans"], answer: 2 },
  { id: "p44", level: "A1", skill: "grammar", prompt: "The party is ___ Saturday.", options: ["in", "at", "to", "on"], answer: 3 },
  { id: "p45", level: "A1", skill: "grammar", prompt: "We live in a small town. ___ house is near the river.", options: ["Our", "We", "Us", "Ours"], answer: 0 },
  { id: "p46", level: "A1", skill: "grammar", prompt: "There are twenty ___ in my class.", options: ["child", "childs", "children", "childrens"], answer: 2 },
  { id: "p47", level: "A1", skill: "vocab", prompt: "“Expensive” nghĩa là:", options: ["Rẻ", "Mới", "Đắt", "Cũ"], answer: 2 },
  { id: "p48", level: "A1", skill: "vocab", prompt: "Bầu trời vào một ngày đẹp trời thường có màu gì?", options: ["green", "brown", "black", "blue"], answer: 3 },
  { id: "p49", level: "A1", skill: "vocab", prompt: "Từ trái nghĩa với “hot”:", options: ["cold", "tall", "new", "fast"], answer: 0 },
  { id: "p50", level: "A1", skill: "vocab", prompt: "Bạn ngủ ở phòng nào trong nhà?", options: ["bathroom", "bedroom", "living room", "garden"], answer: 1 },
  { id: "p51", level: "A1", skill: "vocab", prompt: "“Fifteen” là số mấy?", options: ["50", "5", "15", "14"], answer: 2 },
  { id: "p52", level: "A1", skill: "vocab", prompt: "Ai làm việc ở bệnh viện và chữa bệnh cho người ốm?", options: ["driver", "teacher", "waiter", "doctor"], answer: 3 },
  { id: "p53", level: "A1", skill: "listening", prompt: "Anh hoặc em trai của người nói bao nhiêu tuổi?", audioText: "My brother is ten years old.", options: ["2", "12", "10", "20"], answer: 2 },
  { id: "p54", level: "A1", skill: "listening", prompt: "Người nói muốn gì?", audioText: "I'd like a cup of tea, please.", options: ["Một cốc cà phê", "Một tách trà", "Một cốc nước", "Một cốc sữa"], answer: 1 },
  {
    id: "p55", level: "A1", skill: "reading",
    passage: "Hello! My name is Minh. I'm from Ha Noi, but now I live in Ho Chi Minh City with my sister. We have a small flat near a park. I work in a hotel. I start work at seven o'clock in the morning and finish at three in the afternoon. On Sundays I play football with my friends.",
    prompt: "Minh làm việc ở đâu?", options: ["Trong một nhà hàng", "Trong một khách sạn", "Ở công viên", "Ở trường học"], answer: 1,
  },
  {
    id: "p56", level: "A1", skill: "reading",
    passage: "Welcome to Green Park Swimming Pool. The pool is open every day from 6 a.m. to 9 p.m. Children under eight need an adult with them in the water. Please don't eat or drink near the pool. You can buy tickets at the door. A ticket is 40,000 dong.",
    prompt: "Trẻ em dưới tám tuổi cần làm gì khi bơi?", options: ["Mua vé ở quầy riêng", "Chỉ bơi vào buổi sáng", "Có người lớn đi cùng", "Bơi một mình"], answer: 2,
  },

  // ---- A2 ----
  { id: "p57", level: "A2", skill: "grammar", prompt: "While I ___ to work, I saw an accident.", options: ["walk", "am walking", "was walking", "walks"], answer: 2 },
  { id: "p58", level: "A2", skill: "grammar", prompt: "This is the ___ restaurant in our town.", options: ["best", "good", "better", "most good"], answer: 0 },
  { id: "p59", level: "A2", skill: "grammar", prompt: "We ___ visit our grandparents next weekend. We bought the train tickets yesterday.", options: ["going to", "are go to", "go to", "are going to"], answer: 3 },
  { id: "p60", level: "A2", skill: "grammar", prompt: "She ___ late for work. She always arrives early.", options: ["never is", "is never", "does never", "never does"], answer: 1 },
  { id: "p61", level: "A2", skill: "grammar", prompt: "You look tired. You ___ go to bed early tonight.", options: ["should to", "are should", "should", "shoulds"], answer: 2 },
  { id: "p62", level: "A2", skill: "grammar", prompt: "How ___ money do you need for the trip?", options: ["many", "lot", "few", "much"], answer: 3 },
  { id: "p63", level: "A2", skill: "vocab", prompt: "“Luggage” nghĩa là:", options: ["Hộ chiếu", "Vé máy bay", "Khách sạn", "Hành lý"], answer: 3 },
  { id: "p64", level: "A2", skill: "vocab", prompt: "Từ trái nghĩa với “dangerous”:", options: ["heavy", "safe", "noisy", "careful"], answer: 1 },
  { id: "p65", level: "A2", skill: "vocab", prompt: "“Journey” nghĩa là:", options: ["Chuyến đi, hành trình", "Kỳ nghỉ", "Bản đồ", "Nhật ký"], answer: 0 },
  { id: "p66", level: "A2", skill: "vocab", prompt: "Khi trời “cloudy”, trời:", options: ["có nắng", "có gió", "có mưa", "nhiều mây"], answer: 3 },
  { id: "p67", level: "A2", skill: "vocab", prompt: "“Crowded” nghĩa là:", options: ["Yên tĩnh", "Bẩn", "Đông đúc", "Sạch sẽ"], answer: 2 },
  { id: "p68", level: "A2", skill: "vocab", prompt: "I want to ___ my English, so I practise every day.", options: ["spend", "improve", "miss", "wear"], answer: 1 },
  { id: "p121", level: "A2", skill: "vocab", prompt: "“Neighbour” nghĩa là:", options: ["Người họ hàng", "Đồng nghiệp", "Người hàng xóm", "Bạn cùng lớp"], answer: 2 },
  { id: "p69", level: "A2", skill: "listening", prompt: "Người nói thường đi bơi khi nào?", audioText: "I usually go swimming on Tuesdays and Thursdays after work.", options: ["Thứ Hai và thứ Tư", "Thứ Ba và thứ Năm", "Cuối tuần", "Mỗi buổi sáng"], answer: 1 },
  { id: "p70", level: "A2", skill: "listening", prompt: "Người nói đã mua đôi giày với giá bao nhiêu?", audioText: "These shoes were forty pounds, but I only paid twenty-five in the sale.", options: ["15 bảng", "40 bảng", "65 bảng", "25 bảng"], answer: 3 },
  {
    id: "p71", level: "A2", skill: "reading",
    passage: "Last summer my family spent a week in Phu Quoc. We stayed in a small hotel near the beach. The weather was hot and sunny every day except Wednesday, when it rained all afternoon, so we played cards in our room. On Friday my brother and I went on a boat trip to a small island, but my mum stayed at the hotel because she doesn't like boats.",
    prompt: "Chuyện gì đã xảy ra vào thứ Tư?", options: ["Cả nhà đi thuyền ra đảo", "Trời mưa suốt buổi chiều", "Mẹ đi thuyền lần đầu tiên", "Họ chuyển sang khách sạn khác"], answer: 1,
  },
  {
    id: "p72", level: "A2", skill: "reading",
    passage: "Sunny Language Centre: new Saturday classes! From next month, we are going to have English classes for teenagers every Saturday morning from 9 to 11. The classes are small, with only ten students in each class. The first lesson is free. If you want to join, please call Ms Hoa or send us an email before 20 May.",
    prompt: "Điều nào đúng về các lớp học mới?", options: ["Lớp học vào chiều thứ Bảy", "Mỗi lớp có khoảng hai mươi học sinh", "Buổi học đầu tiên không mất tiền", "Phải đăng ký sau ngày 20 tháng 5"], answer: 2,
  },

  // ---- B1 ----
  { id: "p73", level: "B1", skill: "grammar", prompt: "When I was a child, I ___ play in the street with my friends every afternoon.", options: ["use to", "used to", "was used to", "am used to"], answer: 1 },
  { id: "p74", level: "B1", skill: "grammar", prompt: "If I ___ a lot of money, I would travel around the world.", options: ["have", "will have", "would have", "had"], answer: 3 },
  { id: "p75", level: "B1", skill: "grammar", prompt: "She asked me where I ___.", options: ["lived", "did I live", "do I live", "am I living"], answer: 0 },
  { id: "p76", level: "B1", skill: "grammar", prompt: "That's the man ___ car was stolen last night.", options: ["who", "which", "whose", "where"], answer: 2 },
  { id: "p77", level: "B1", skill: "grammar", prompt: "She has been working for twelve hours without a break. She ___ be very tired.", options: ["can't", "needs", "ought", "must"], answer: 3 },
  { id: "p78", level: "B1", skill: "grammar", prompt: "Would you mind ___ the window? It's very hot in here.", options: ["open", "to open", "opening", "opened"], answer: 2 },
  { id: "p79", level: "B1", skill: "vocab", prompt: "We've ___ milk, so I need to go to the shop.", options: ["run into", "run out of", "run over", "run away from"], answer: 1 },
  { id: "p80", level: "B1", skill: "vocab", prompt: "“Achieve” nghĩa là:", options: ["Từ bỏ", "Tránh", "Chuẩn bị", "Đạt được"], answer: 3 },
  { id: "p81", level: "B1", skill: "vocab", prompt: "Wear a hat to ___ your skin from the sun.", options: ["prove", "invent", "protect", "avoid"], answer: 2 },
  { id: "p82", level: "B1", skill: "vocab", prompt: "Lan is very ___. She always tells the truth, even when it is difficult.", options: ["generous", "honest", "patient", "polite"], answer: 1 },
  { id: "p83", level: "B1", skill: "vocab", prompt: "Could you ___ me a favour and carry this bag for me?", options: ["do", "make", "give", "take"], answer: 0 },
  { id: "p84", level: "B1", skill: "vocab", prompt: "Từ gần nghĩa nhất với “huge”:", options: ["tiny", "strange", "enormous", "heavy"], answer: 2 },
  { id: "p122", level: "B1", skill: "vocab", prompt: "I was really ___ when my favourite team lost the final.", options: ["relaxed", "disappointed", "delighted", "bored"], answer: 1 },
  { id: "p85", level: "B1", skill: "listening", prompt: "Cuối cùng người nói về nhà bằng cách nào?", audioText: "I was going to take the bus, but it didn't come, so in the end I walked home.", options: ["Đi xe buýt", "Đi taxi", "Đi bộ", "Được bạn chở về"], answer: 2 },
  { id: "p86", level: "B1", skill: "listening", prompt: "Theo người nói, khách hàng có thể làm gì?", audioText: "If you're not happy with the product, you can return it within thirty days and get your money back.", options: ["Được giảm giá 30%", "Đổi hàng bất cứ lúc nào", "Trả lại hàng trong vòng 30 ngày và được hoàn tiền", "Dùng thử miễn phí 30 ngày"], answer: 2 },
  {
    id: "p87", level: "B1", skill: "reading",
    passage: "Last month I joined a running club, although I had never run more than two kilometres before. At first I found it really hard, and I nearly gave up after the second week. However, the other members kept encouraging me, so I carried on. Next Sunday I'm taking part in my first ten-kilometre race. I'm nervous, but I feel much fitter than I did a month ago.",
    prompt: "Vì sao người viết không bỏ cuộc?", options: ["Vì chạy bộ ngay từ đầu đã rất dễ", "Vì các thành viên khác trong câu lạc bộ luôn động viên", "Vì trước đây đã từng chạy 10 km", "Vì muốn giành giải trong cuộc đua"], answer: 1,
  },
  {
    id: "p88", level: "B1", skill: "reading",
    passage: "Hi Sam, I'm writing about our trip to the mountains next weekend. Unfortunately, the hotel we booked has cancelled our reservation because of a problem with the water supply. I've found another place about five kilometres away. It's a bit more expensive, but breakfast is included. If you agree, I'll book it tonight. Could you let me know by six o'clock? Thanks, Jo",
    prompt: "Điều nào đúng về chỗ ở mới?", options: ["Rẻ hơn khách sạn cũ", "Nằm ngay cạnh khách sạn cũ", "Jo đã đặt phòng xong", "Giá phòng đã bao gồm bữa sáng"], answer: 3,
  },
];
