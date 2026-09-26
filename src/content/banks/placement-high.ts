import type { PlacementQuestion } from "../types";

/** More placement questions (B2–C1), so each attempt draws a different set. */
export const PLACEMENT_EXTRA_HIGH: PlacementQuestion[] = [
  // ---- B2 ----
  // grammar
  { id: "p89", level: "B2", skill: "grammar", prompt: "If we had left ten minutes earlier, we ___ the train.", options: ["would catch", "would have caught", "had caught", "will catch"], answer: 1 },
  { id: "p90", level: "B2", skill: "grammar", prompt: "The author is said ___ the whole novel in just three weeks.", options: ["to write", "writing", "to have written", "having written"], answer: 2 },
  { id: "p91", level: "B2", skill: "grammar", prompt: "The ground is wet everywhere. It ___ during the night.", options: ["must have rained", "should have rained", "must rain", "can't have rained"], answer: 0 },
  { id: "p92", level: "B2", skill: "grammar", prompt: "My brother, ___ lives in Canada, is coming to visit us next month.", options: ["that", "which", "who", "whose"], answer: 2 },
  { id: "p93", level: "B2", skill: "grammar", prompt: "I'll never forget ___ the sea for the first time when I was six.", options: ["to see", "seeing", "see", "to have seen"], answer: 1 },
  { id: "p94", level: "B2", skill: "grammar", prompt: "My sister loves spicy food, ___ I can't stand it.", options: ["despite", "however", "unless", "whereas"], answer: 3 },
  // vocab
  { id: "p95", level: "B2", skill: "vocab", prompt: "She ___ the job offer because the salary was too low.", options: ["turned up", "turned out", "turned over", "turned down"], answer: 3 },
  { id: "p96", level: "B2", skill: "vocab", prompt: "“Crucial” nghĩa là:", options: ["Rất phức tạp", "Rất quan trọng, có tính quyết định", "Không cần thiết", "Đáng ngạc nhiên"], answer: 1 },
  { id: "p97", level: "B2", skill: "vocab", prompt: "“Cope with” gần nghĩa nhất với:", options: ["put off", "look after", "deal with", "give up"], answer: 2 },
  { id: "p98", level: "B2", skill: "vocab", prompt: "When you plan the trip, remember to ___ into account the cost of hotels.", options: ["make", "take", "put", "get"], answer: 1 },
  { id: "p99", level: "B2", skill: "vocab", prompt: "The ___ of the new bridge will take about three years.", options: ["construct", "constructive", "constructor", "construction"], answer: 3 },
  { id: "p100", level: "B2", skill: "vocab", prompt: "Be careful what you say to her. She's very ___ about her weight.", options: ["sensitive", "sensible", "sensational", "reasonable"], answer: 0 },
  { id: "p123", level: "B2", skill: "vocab", prompt: "Tuan is very ___. He wants to run his own company before he is thirty.", options: ["anxious", "generous", "cautious", "ambitious"], answer: 3 },
  // listening
  { id: "p101", level: "B2", skill: "listening", prompt: "Người nói muốn người nghe làm gì khi đến nơi?", audioText: "By the time your plane lands, I'll have left the office, so just take a taxi straight to my flat.", options: ["Đến văn phòng gặp người nói", "Chờ người nói ở sân bay", "Gọi điện trước khi lên máy bay", "Đi taxi thẳng đến căn hộ của người nói"], answer: 3 },
  { id: "p102", level: "B2", skill: "listening", prompt: "Điều gì đã xảy ra?", audioText: "If I'd known the museum was closed on Mondays, I wouldn't have driven all the way into town.", options: ["Người nói đã lái xe vào thành phố nhưng bảo tàng đóng cửa", "Người nói quyết định không vào thành phố", "Người nói đã tham quan bảo tàng vào thứ Hai", "Người nói đi xe buýt đến bảo tàng"], answer: 0 },
  // reading
  {
    id: "p103", level: "B2", skill: "reading",
    passage: "The director's latest film has been widely praised for its photography, and it is easy to see why: almost every scene looks like a painting. Unfortunately, the story does not live up to the visuals. The plot moves slowly for the first hour, and the main characters are so thinly drawn that it is hard to care what happens to them. Fans of the original novel may enjoy spotting familiar moments, but newcomers are likely to leave the cinema confused.",
    prompt: "Người viết đánh giá bộ phim thế nào?", options: ["Cả hình ảnh lẫn cốt truyện đều xuất sắc", "Hình ảnh đẹp nhưng cốt truyện và nhân vật còn yếu", "Phim hay hơn cuốn tiểu thuyết gốc", "Người chưa đọc tiểu thuyết sẽ dễ hiểu phim hơn"], answer: 1,
  },
  {
    id: "p104", level: "B2", skill: "reading",
    passage: "Many parents worry that video games are simply a waste of time. Yet some games require players to plan ahead, solve problems and work as a team. That does not mean children should be allowed to play for hours on end. The real issue is balance: a child who plays for an hour after finishing homework and spending time outdoors is unlikely to come to any harm, whereas one who sits in front of a screen every evening may be missing out on sleep and exercise.",
    prompt: "Quan điểm chính của người viết là gì?", options: ["Vấn đề không nằm ở trò chơi mà ở việc chơi có chừng mực", "Trò chơi điện tử hoàn toàn có hại cho trẻ em", "Trẻ em nên được chơi game bao lâu tùy thích", "Trò chơi điện tử bổ ích hơn các hoạt động ngoài trời"], answer: 0,
  },

  // ---- C1 ----
  // grammar
  { id: "p105", level: "C1", skill: "grammar", prompt: "Under no circumstances ___ the fire doors be left open.", options: ["they should", "should", "are", "should not"], answer: 1 },
  { id: "p106", level: "C1", skill: "grammar", prompt: "___ I find most irritating about him is his constant lateness.", options: ["That", "It", "What", "Which"], answer: 2 },
  { id: "p107", level: "C1", skill: "grammar", prompt: "The committee recommended that the proposal ___ rejected.", options: ["is being", "been", "to be", "be"], answer: 3 },
  { id: "p108", level: "C1", skill: "grammar", prompt: "___ in 1890, the bridge is still in use today.", options: ["Built", "Building", "Having built", "To build"], answer: 0 },
  { id: "p109", level: "C1", skill: "grammar", prompt: "You ___ bought me a present, but thank you, it's lovely!", options: ["mustn't have", "can't have", "needn't have", "didn't need"], answer: 2 },
  { id: "p110", level: "C1", skill: "grammar", prompt: "We've already missed the start of the film, so we ___ just stay at home and watch something here.", options: ["ought to have", "might as well", "needn't have", "must have"], answer: 1 },
  // vocab
  { id: "p111", level: "C1", skill: "vocab", prompt: "He was reluctant to lend them any more money. “Reluctant” nghĩa là:", options: ["Hăng hái, nhiệt tình", "Tự tin, quả quyết", "Miễn cưỡng, không sẵn lòng", "Bối rối, lúng túng"], answer: 2 },
  { id: "p112", level: "C1", skill: "vocab", prompt: "The campaign aims to ___ awareness of the dangers of plastic waste.", options: ["rise", "arise", "lift", "raise"], answer: 3 },
  { id: "p113", level: "C1", skill: "vocab", prompt: "Rising sea levels ___ a serious threat to coastal communities.", options: ["pose", "put", "set", "place"], answer: 0 },
  { id: "p114", level: "C1", skill: "vocab", prompt: "This stretch of road is notorious for accidents. “Notorious” gần nghĩa nhất với:", options: ["well known and respected", "famous for something bad", "rarely mentioned", "recently improved"], answer: 1 },
  { id: "p115", level: "C1", skill: "vocab", prompt: "The main drawback of living in the city centre is the noise. “Drawback” nghĩa là:", options: ["Nhược điểm, mặt hạn chế", "Sự rút lui", "Khoản tiền hoàn lại", "Lợi ích chính"], answer: 0 },
  { id: "p116", level: "C1", skill: "vocab", prompt: "Some job losses are ___ when two large companies merge.", options: ["inevitably", "inevitability", "inevitable", "inevitableness"], answer: 2 },
  // listening
  { id: "p117", level: "C1", skill: "listening", prompt: "Người nói đánh giá khách sạn thế nào?", audioText: "Well, the hotel was certainly convenient for the station, which is about the nicest thing I can say about it.", options: ["Rất hài lòng về mọi mặt", "Khách sạn ở quá xa nhà ga", "Người nói chưa từng ở khách sạn này", "Ngoài vị trí gần ga, khách sạn chẳng có gì đáng khen"], answer: 3 },
  { id: "p118", level: "C1", skill: "listening", prompt: "Người nói cảm thấy thế nào về khóa học?", audioText: "Had I realised how demanding the course would be, I might have thought twice about signing up, though I can't honestly say I regret it.", options: ["Khóa học vất vả hơn dự kiến nhưng người nói không hối tiếc", "Người nói hối hận vì đã đăng ký", "Khóa học dễ hơn người nói tưởng", "Người nói định bỏ khóa học giữa chừng"], answer: 0 },
  // reading
  {
    id: "p119", level: "C1", skill: "reading",
    passage: "There is no shortage of apps promising to make us more productive. Yet the irony is hard to miss: the hours we spend comparing to-do lists, colour-coding calendars and adjusting notifications are hours not spent on the work itself. Productivity, in other words, has become a hobby in its own right, one that offers the pleasant sensation of progress without its substance. None of this means such tools are worthless; for some people they are genuinely transformative. But anyone reorganising their task list for the third time in a day might ask what, exactly, they are avoiding.",
    prompt: "Ý chính của người viết là gì?", options: ["Các ứng dụng năng suất hoàn toàn vô dụng", "Việc mải mê chỉnh sửa công cụ năng suất có thể trở thành cách né tránh công việc thật", "Mọi người nên dùng nhiều ứng dụng năng suất hơn", "Sắp xếp lại danh sách việc cần làm nhiều lần trong ngày giúp làm việc hiệu quả hơn"], answer: 1,
  },
  {
    id: "p120", level: "C1", skill: "reading",
    passage: "The pilot scheme, which allowed staff at the regional office to work a four-day week, was intended to run for six months. Managers had expected output to fall; instead, it held steady, and sick leave dropped noticeably. The picture was less rosy in customer services, where the team struggled to cover the phones on Fridays and complaints about waiting times rose. The report therefore recommends extending the scheme, but only to departments that do not need to be available to the public throughout the week.",
    prompt: "Báo cáo đề xuất điều gì?", options: ["Chấm dứt chương trình thí điểm vì khiếu nại tăng", "Áp dụng tuần làm việc bốn ngày cho mọi bộ phận", "Mở rộng chương trình, nhưng chỉ cho các bộ phận không cần phục vụ khách hàng suốt cả tuần", "Tuyển thêm nhân viên chăm sóc khách hàng làm vào thứ Sáu"], answer: 2,
  },
];
