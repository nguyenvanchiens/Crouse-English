import type { PlacementQuestion } from "./types";

/** 8 questions per level, A1 to C1: each level has at least one listening and one reading item. */
export const PLACEMENT_QUESTIONS: PlacementQuestion[] = [
  // ---- A1 ----
  { id: "p01", level: "A1", skill: "vocab", prompt: "“Apple” nghĩa là gì?", options: ["Quả táo", "Quả cam", "Quả chuối", "Quả nho"], answer: 0 },
  { id: "p02", level: "A1", skill: "grammar", prompt: "She ___ a teacher.", options: ["am", "is", "are", "be"], answer: 1 },
  { id: "p03", level: "A1", skill: "grammar", prompt: "___ are you from?", options: ["What", "Who", "Where", "When"], answer: 2 },
  { id: "p04", level: "A1", skill: "listening", prompt: "Câu bạn nghe có nghĩa là gì?", audioText: "I have two cats.", options: ["Tôi có hai con chó", "Tôi có hai con mèo", "Tôi thích mèo", "Tôi có ba con mèo"], answer: 1 },
  { id: "p05", level: "A1", skill: "vocab", prompt: "Ngày ngay sau thứ Hai (Monday) là:", options: ["Sunday", "Wednesday", "Tuesday", "Friday"], answer: 2 },
  { id: "p06", level: "A1", skill: "grammar", prompt: "He ___ coffee every morning.", options: ["drinks", "drink", "drinking"], answer: 0 },
  { id: "p07", level: "A1", skill: "vocab", prompt: "Từ nào chỉ một người trong gia đình?", options: ["kitchen", "window", "breakfast", "daughter"], answer: 3 },
  {
    id: "p08", level: "A1", skill: "reading",
    passage: "Hi, I'm Lan. I'm twenty years old, and I live in Da Nang with my parents. I'm a student. Every morning I go to school by bike. In the evening I cook dinner with my mum.",
    prompt: "Lan đi học bằng gì?", options: ["Xe buýt", "Xe đạp", "Đi bộ", "Xe máy"], answer: 1,
  },

  // ---- A2 ----
  { id: "p09", level: "A2", skill: "grammar", prompt: "Yesterday I ___ to the cinema.", options: ["go", "goes", "went", "going"], answer: 2 },
  { id: "p10", level: "A2", skill: "grammar", prompt: "This bag is ___ than that one.", options: ["cheap", "cheaper", "cheapest", "more cheap"], answer: 1 },
  { id: "p11", level: "A2", skill: "vocab", prompt: "“Borrow” nghĩa là:", options: ["Cho mượn", "Mua", "Mượn", "Trả lại"], answer: 2 },
  { id: "p12", level: "A2", skill: "listening", prompt: "Tàu chạy lúc mấy giờ?", audioText: "The train leaves at half past seven.", options: ["7:00", "7:30", "7:15", "6:30"], answer: 1 },
  { id: "p13", level: "A2", skill: "grammar", prompt: "There isn't ___ milk in the fridge.", options: ["some", "many", "a", "any"], answer: 3 },
  { id: "p14", level: "A2", skill: "grammar", prompt: "I ___ my homework yet.", options: ["not finished", "haven't finished", "don't finish", "am not finish"], answer: 1 },
  { id: "p15", level: "A2", skill: "vocab", prompt: "I'm very ___. Can I have something to eat?", options: ["hungry", "angry", "tired", "thirsty"], answer: 0 },
  {
    id: "p16", level: "A2", skill: "reading",
    passage: "Dear Tom, thanks for your email. I'm sorry, but I can't come to your party on Saturday. My grandmother is ill, so I'm going to visit her in Hue this weekend. Can we meet next Tuesday instead? I'll bring your birthday present. Love, Mai",
    prompt: "Vì sao Mai không đến bữa tiệc được?", options: ["Cô ấy phải đi làm", "Cô ấy bị ốm", "Cô ấy đi thăm bà đang bị ốm", "Cô ấy không thích tiệc"], answer: 2,
  },

  // ---- B1 ----
  { id: "p17", level: "B1", skill: "grammar", prompt: "I've lived here ___ 2019.", options: ["for", "since", "from", "in"], answer: 1 },
  { id: "p18", level: "B1", skill: "grammar", prompt: "If it rains tomorrow, we ___ at home.", options: ["stay", "stayed", "would stay", "will stay"], answer: 3 },
  { id: "p19", level: "B1", skill: "vocab", prompt: "Từ gần nghĩa nhất với “reliable”:", options: ["dependable", "expensive", "famous", "careful"], answer: 0 },
  { id: "p20", level: "B1", skill: "listening", prompt: "Người nói muốn gì?", audioText: "Sorry, I can't make it tonight. Can we reschedule for Friday?", options: ["Hủy hẳn cuộc hẹn", "Dời cuộc hẹn sang thứ Sáu", "Đến sớm hơn", "Mời thêm người"], answer: 1 },
  { id: "p21", level: "B1", skill: "grammar", prompt: "The report ___ by the manager yesterday.", options: ["wrote", "has written", "was written", "is writing"], answer: 2 },
  { id: "p22", level: "B1", skill: "grammar", prompt: "When we arrived at the cinema, the film ___.", options: ["starts already", "had already started", "has already started", "was already start"], answer: 1 },
  { id: "p23", level: "B1", skill: "vocab", prompt: "Please ___ this form and give it to the receptionist.", options: ["fill in", "fill up", "look up", "give up"], answer: 0 },
  {
    id: "p24", level: "B1", skill: "reading",
    passage: "Our library is changing its opening hours. From 1 March, it will open at 9 a.m. instead of 8 a.m., but it will close later, at 8 p.m. The café on the ground floor will stay closed until the end of March while it is being repainted. Members can still borrow up to six books at a time.",
    prompt: "Theo thông báo, điều nào đúng?", options: ["Thư viện sẽ mở cửa sớm hơn trước", "Quán cà phê mở lại vào đầu tháng Ba", "Thành viên chỉ được mượn ba cuốn sách", "Thư viện sẽ đóng cửa muộn hơn trước"], answer: 3,
  },

  // ---- B2 ----
  { id: "p25", level: "B2", skill: "grammar", prompt: "I wish I ___ more time to travel.", options: ["have", "had", "will have", "am having"], answer: 1 },
  { id: "p26", level: "B2", skill: "grammar", prompt: "Hardly ___ the meeting started when the power went out.", options: ["had", "has", "did", "was"], answer: 0 },
  { id: "p27", level: "B2", skill: "vocab", prompt: "“To postpone” gần nghĩa nhất với:", options: ["to cancel", "to arrange", "to delay", "to attend"], answer: 2 },
  { id: "p28", level: "B2", skill: "listening", prompt: "Điều gì đã xảy ra?", audioText: "Despite the heavy traffic, she arrived just in time for the interview.", options: ["Cô ấy đến muộn", "Cô ấy đến vừa kịp", "Cô ấy hủy phỏng vấn", "Cô ấy đi tàu"], answer: 1 },
  { id: "p29", level: "B2", skill: "grammar", prompt: "He denied ___ the window.", options: ["break", "to break", "broke", "breaking"], answer: 3 },
  { id: "p30", level: "B2", skill: "grammar", prompt: "If I ___ harder at school, I would have a better job now.", options: ["had studied", "studied", "have studied", "would study"], answer: 0 },
  { id: "p31", level: "B2", skill: "vocab", prompt: "The new policy had a significant ___ on small businesses.", options: ["affect", "impact", "effort", "cause"], answer: 1 },
  {
    id: "p32", level: "B2", skill: "reading",
    passage: "Remote work was once seen as a perk offered by a handful of tech firms. Today, many companies treat it as standard. Supporters argue that employees save hours of commuting and are often more productive at home. Critics, however, point out that junior staff can miss out on the informal learning that happens when colleagues share an office.",
    prompt: "Theo đoạn văn, những người phản đối lo ngại điều gì?", options: ["Nhân viên sẽ mất nhiều thời gian đi lại hơn", "Các công ty công nghệ sẽ trả lương thấp hơn", "Nhân viên mới ít có cơ hội học hỏi không chính thức từ đồng nghiệp", "Làm việc ở nhà luôn kém hiệu quả hơn"], answer: 2,
  },

  // ---- C1 ----
  { id: "p33", level: "C1", skill: "grammar", prompt: "Not only ___ the deadline, but he also went over budget.", options: ["he missed", "did he miss", "he did miss", "missed he"], answer: 1 },
  { id: "p34", level: "C1", skill: "grammar", prompt: "___ I known about the delay, I would have taken a later train.", options: ["Had", "If", "Should", "Were"], answer: 0 },
  { id: "p35", level: "C1", skill: "vocab", prompt: "The minister's remarks ___ a heated debate in parliament.", options: ["made", "did", "sparked", "rose"], answer: 2 },
  { id: "p36", level: "C1", skill: "vocab", prompt: "The spokesperson ___ any wrongdoing, insisting that the company had followed every regulation.", options: ["refused", "objected", "disagreed", "denied"], answer: 3 },
  { id: "p37", level: "C1", skill: "grammar", prompt: "Câu nào diễn đạt thận trọng (hedging) phù hợp nhất với văn phong học thuật?", options: ["This proves that sugar causes obesity.", "These findings suggest that sugar may contribute to obesity.", "Sugar is definitely the cause of obesity.", "Everyone knows that sugar makes people fat."], answer: 1 },
  { id: "p38", level: "C1", skill: "vocab", prompt: "The government tried to play down the risks. “Play down” gần nghĩa nhất với:", options: ["exaggerate", "minimise", "investigate", "predict"], answer: 1 },
  { id: "p39", level: "C1", skill: "listening", prompt: "Người nói có thái độ thế nào với đề xuất?", audioText: "I wouldn't say the proposal is without merit, but I'd need to see far more convincing figures before I put my name to it.", options: ["Hoàn toàn ủng hộ và sẵn sàng ký tên", "Bác bỏ vì cho rằng đề xuất vô giá trị", "Thấy đề xuất có điểm hay nhưng chưa đủ thuyết phục để ủng hộ", "Không quan tâm đến đề xuất"], answer: 2 },
  {
    id: "p40", level: "C1", skill: "reading",
    passage: "When the city first proposed closing the old harbour road to traffic, shopkeepers predicted ruin. Two years on, footfall is up, and several of the loudest critics have quietly expanded their premises. Not everyone is convinced, of course: delivery firms still grumble about the detours, and rents have risen so sharply that some long-standing tenants are being priced out.",
    prompt: "Có thể suy ra điều gì từ đoạn văn?", options: ["Việc cấm xe đã khiến các cửa hàng phá sản như dự đoán", "Mọi người dân và doanh nghiệp đều hài lòng với thay đổi", "Một số người từng phản đối nay lại hưởng lợi từ thay đổi này", "Các công ty giao hàng ủng hộ việc cấm xe"], answer: 2,
  },
];
