import type { PlacementQuestion } from "./types";

export const PLACEMENT_QUESTIONS: PlacementQuestion[] = [
  { id: "p01", level: "A1", skill: "vocab", prompt: "“Apple” nghĩa là gì?", options: ["Quả táo", "Quả cam", "Quả chuối", "Quả nho"], answer: 0 },
  { id: "p02", level: "A1", skill: "grammar", prompt: "She ___ a teacher.", options: ["am", "is", "are", "be"], answer: 1 },
  { id: "p03", level: "A1", skill: "grammar", prompt: "___ are you from?", options: ["What", "Where", "Who", "When"], answer: 1 },
  { id: "p04", level: "A1", skill: "listening", prompt: "Bạn nghe thấy câu nào?", audioText: "I have two cats.", options: ["Tôi có hai con mèo", "Tôi có hai con chó", "Tôi thích mèo", "Tôi có ba con mèo"], answer: 0 },
  { id: "p05", level: "A1", skill: "vocab", prompt: "Ngày ngay sau thứ Hai (Monday) là:", options: ["Sunday", "Wednesday", "Tuesday", "Friday"], answer: 2 },

  { id: "p06", level: "A2", skill: "grammar", prompt: "Yesterday I ___ to the cinema.", options: ["go", "goes", "went", "going"], answer: 2 },
  { id: "p07", level: "A2", skill: "grammar", prompt: "This bag is ___ than that one.", options: ["cheap", "cheaper", "cheapest", "more cheap"], answer: 1 },
  { id: "p08", level: "A2", skill: "vocab", prompt: "“Borrow” nghĩa là:", options: ["Cho mượn", "Mượn", "Mua", "Trả lại"], answer: 1 },
  { id: "p09", level: "A2", skill: "listening", prompt: "Tàu chạy lúc mấy giờ?", audioText: "The train leaves at half past seven.", options: ["7:00", "7:15", "7:30", "6:30"], answer: 2 },
  { id: "p10", level: "A2", skill: "grammar", prompt: "There isn't ___ milk in the fridge.", options: ["some", "any", "many", "a"], answer: 1 },

  { id: "p11", level: "B1", skill: "grammar", prompt: "I've lived here ___ 2019.", options: ["for", "since", "from", "in"], answer: 1 },
  { id: "p12", level: "B1", skill: "grammar", prompt: "If it rains tomorrow, we ___ at home.", options: ["stay", "will stay", "stayed", "would stay"], answer: 1 },
  { id: "p13", level: "B1", skill: "vocab", prompt: "Từ gần nghĩa nhất với “reliable”:", options: ["dependable", "expensive", "famous", "careful"], answer: 0 },
  { id: "p14", level: "B1", skill: "listening", prompt: "Người nói muốn gì?", audioText: "Sorry, I can't make it tonight. Can we reschedule for Friday?", options: ["Hủy hẳn cuộc hẹn", "Dời cuộc hẹn sang thứ Sáu", "Đến sớm hơn", "Mời thêm người"], answer: 1 },
  { id: "p15", level: "B1", skill: "grammar", prompt: "The report ___ by the manager yesterday.", options: ["wrote", "was written", "has written", "is writing"], answer: 1 },

  { id: "p16", level: "B2", skill: "grammar", prompt: "I wish I ___ more time to travel.", options: ["have", "had", "will have", "am having"], answer: 1 },
  { id: "p17", level: "B2", skill: "grammar", prompt: "Hardly ___ the meeting started when the power went out.", options: ["had", "has", "did", "was"], answer: 0 },
  { id: "p18", level: "B2", skill: "vocab", prompt: "“To postpone” gần nghĩa nhất với:", options: ["to cancel", "to delay", "to arrange", "to attend"], answer: 1 },
  { id: "p19", level: "B2", skill: "listening", prompt: "Điều gì đã xảy ra?", audioText: "Despite the heavy traffic, she arrived just in time for the interview.", options: ["Cô ấy đến muộn", "Cô ấy đến vừa kịp", "Cô ấy hủy phỏng vấn", "Cô ấy đi tàu"], answer: 1 },
  { id: "p20", level: "B2", skill: "grammar", prompt: "He denied ___ the window.", options: ["break", "to break", "breaking", "broke"], answer: 2 },
];
