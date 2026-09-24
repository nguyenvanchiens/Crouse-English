import { SAMPLE_VIDEO_ID, fill, listen, mc, reorder, say, word } from "../builders";
import type { Course, Lesson, Step } from "../types";

function lesson(slug: string, title: string, minutes: number, free: boolean, steps: Step[]): Lesson {
  return { slug, title, minutes, free, steps };
}
const video = (title: string): Step => ({ type: "video", youtubeId: SAMPLE_VIDEO_ID, title });

export const giaoTiepA1: Course = {
  slug: "giao-tiep-a1",
  title: "Tiếng Anh giao tiếp cơ bản",
  level: "A1",
  goal: "giao-tiep",
  summary: "Cho người mất gốc và người đi làm muốn nói trôi chảy những tình huống hằng ngày.",
  outcomes: [
    "Chào hỏi, giới thiệu bản thân và gia đình",
    "Nói số, giờ và số điện thoại không nhầm",
    "Gọi món, mua sắm và hỏi giá",
    "Hỏi đường và hiểu người khác chỉ đường",
  ],
  audience: [
    "Người mất gốc hoặc đã quên gần hết kiến thức phổ thông",
    "Người đi làm cần nói tiếng Anh trong các tình huống đơn giản",
    "Người chuẩn bị đi du lịch nước ngoài",
  ],
  teacher: {
    name: "Cô Hà My",
    initials: "HM",
    bio: "8 năm dạy tiếng Anh giao tiếp cho người đi làm, chứng chỉ CELTA. Chuyên sửa phát âm cho người Việt.",
  },
  priceVnd: 1_290_000,
  durationWeeks: 12,
  rating: 4.9,
  reviews: [
    { name: "Minh Anh", role: "Nhân viên kế toán, Hà Nội", quote: "Mình mất gốc từ cấp 3. Sau 3 tháng mình đã tự gọi điện đặt phòng khách sạn khi đi Singapore." },
    { name: "Đức Long", role: "Kỹ sư phần mềm, Đà Nẵng", quote: "Bài học ngắn nên mình học được trên xe buýt. Phần luyện nói giúp mình bớt ngại hẳn." },
  ],
  faqs: [
    { q: "Mình mất gốc hoàn toàn thì học được không?", a: "Được. Khóa bắt đầu từ chào hỏi và phát âm cơ bản, mỗi bài chỉ khoảng 15 phút." },
    { q: "Mỗi tuần cần học bao nhiêu?", a: "Khoảng 4–5 bài ngắn và 1 buổi lớp nhóm với giáo viên." },
  ],
  status: "open",
  modules: [
    {
      id: "m1",
      title: "Chào hỏi và làm quen",
      lessons: [
        lesson("chao-hoi", "Chào hỏi mỗi ngày", 12, true, [
          video("Chào hỏi trong ngày"),
          { type: "vocab", words: [
            word("hello", "/həˈləʊ/", "xin chào", "Hello, I'm Lan.", "he|llo", 1),
            word("morning", "/ˈmɔː.nɪŋ/", "buổi sáng", "Good morning, everyone!", "mor|ning", 0),
            word("nice", "/naɪs/", "vui, dễ chịu", "Nice to meet you.", "nice", 0, "Kết thúc bằng âm /s/ rõ ràng, không đọc thành “nai”."),
            word("later", "/ˈleɪ.tər/", "sau, lát nữa", "See you later!", "la|ter", 0),
          ] },
          { type: "exercise", items: [
            mc("chao-hoi-1", "Buổi sáng gặp đồng nghiệp, bạn nói:", ["Good night", "Good morning", "Goodbye"], 1, "“Good night” chỉ dùng khi chào tạm biệt buổi tối hoặc đi ngủ."),
            fill("chao-hoi-2", "Nice to ___ you.", ["meet"]),
            reorder("chao-hoi-3", "See you later"),
            listen("chao-hoi-4", "How are you?", ["Tôi tên là Lan", "Bạn khỏe không?", "Hẹn gặp lại"], 1),
          ] },
          { type: "speaking", sentences: [
            say("Good morning, how are you?", "Chào buổi sáng, bạn khỏe không?"),
            say("Nice to meet you.", "Rất vui được gặp bạn."),
          ] },
        ]),
        lesson("gioi-thieu-ban-than", "Giới thiệu bản thân", 15, true, [
          video("Giới thiệu tên, quê quán và nghề nghiệp"),
          { type: "vocab", words: [
            word("name", "/neɪm/", "tên", "My name is Lan.", "name", 0),
            word("from", "/frɒm/", "từ, đến từ", "I'm from Vietnam.", "from", 0),
            word("student", "/ˈstjuː.dənt/", "sinh viên, học sinh", "I'm a student.", "stu|dent", 0, "Nhớ đọc âm /t/ cuối, không bỏ mất."),
            word("teacher", "/ˈtiː.tʃər/", "giáo viên", "She is a teacher.", "tea|cher", 0),
          ] },
          { type: "exercise", items: [
            mc("gioi-thieu-1", "Chọn câu đúng để nói tên mình:", ["My name Lan.", "My name is Lan.", "I name is Lan."], 1),
            fill("gioi-thieu-2", "I ___ from Vietnam.", ["am"], "Với “I” ta dùng “am”: I am = I'm."),
            reorder("gioi-thieu-3", "I am a student"),
            listen("gioi-thieu-4", "Where are you from?", ["Bạn tên là gì?", "Bạn đến từ đâu?", "Bạn làm nghề gì?"], 1),
          ] },
          { type: "speaking", sentences: [
            say("My name is Lan. I'm from Vietnam.", "Tên tôi là Lan. Tôi đến từ Việt Nam."),
            say("I'm a student.", "Tôi là sinh viên."),
          ] },
        ]),
        lesson("so-dem", "Số đếm và số điện thoại", 14, false, [
          video("Số đếm và cách đọc số điện thoại"),
          { type: "vocab", words: [
            word("three", "/θriː/", "số 3", "I have three sisters.", "three", 0, "Âm /θ/: đặt đầu lưỡi giữa hai hàm răng rồi thổi hơi."),
            word("thirteen", "/θɜːˈtiːn/", "số 13", "She is thirteen.", "thir|teen", 1, "Thirteen nhấn âm sau, thirty nhấn âm trước. Đây là cặp người Việt hay nghe nhầm."),
            word("thirty", "/ˈθɜː.ti/", "số 30", "It's thirty dollars.", "thir|ty", 0),
            word("number", "/ˈnʌm.bər/", "số", "What's your phone number?", "num|ber", 0),
          ] },
          { type: "exercise", items: [
            mc("so-dem-1", "Số 13 trong tiếng Anh là:", ["thirty", "thirteen", "three"], 1),
            listen("so-dem-2", "thirty", ["13", "30", "3"], 1, "Thirty nhấn vào âm đầu: THIR-ty."),
            fill("so-dem-3", "My phone ___ is 0912 345 678.", ["number"]),
            reorder("so-dem-4", "What is your phone number?"),
          ] },
          { type: "speaking", sentences: [
            say("My phone number is zero nine one two.", "Số điện thoại của tôi là 0912."),
            say("Thirteen, thirty.", "Mười ba, ba mươi."),
          ] },
        ]),
      ],
    },
    {
      id: "m2",
      title: "Cuộc sống hằng ngày",
      lessons: [
        lesson("gia-dinh", "Gia đình của tôi", 15, false, [
          video("Nói về các thành viên trong gia đình"),
          { type: "vocab", words: [
            word("mother", "/ˈmʌð.ər/", "mẹ", "My mother is a nurse.", "mo|ther", 0, "Âm /ð/ rung, đặt lưỡi giữa hai răng, không đọc thành “d”."),
            word("father", "/ˈfɑː.ðər/", "bố", "My father works in a bank.", "fa|ther", 0),
            word("brother", "/ˈbrʌð.ər/", "anh/em trai", "I have two brothers.", "bro|ther", 0),
            word("sister", "/ˈsɪs.tər/", "chị/em gái", "My sister is ten.", "sis|ter", 0),
          ] },
          { type: "exercise", items: [
            mc("gia-dinh-1", "“Chị gái của tôi” là:", ["my brother", "my sister", "my mother"], 1),
            fill("gia-dinh-2", "This ___ my father.", ["is"]),
            reorder("gia-dinh-3", "I have two brothers"),
            listen("gia-dinh-4", "She is my mother.", ["Cô ấy là mẹ tôi", "Cô ấy là chị tôi", "Cô ấy là bạn tôi"], 0),
          ] },
          { type: "speaking", sentences: [
            say("I have one sister and two brothers.", "Tôi có một chị gái và hai anh trai."),
            say("This is my family.", "Đây là gia đình tôi."),
          ] },
        ]),
        lesson("mot-ngay-cua-toi", "Một ngày của tôi", 16, false, [
          video("Kể về thói quen hằng ngày"),
          { type: "vocab", words: [
            word("breakfast", "/ˈbrek.fəst/", "bữa sáng", "I have breakfast at seven.", "break|fast", 0, "Chữ “ea” đọc là /e/, âm sau đọc rất nhẹ."),
            word("usually", "/ˈjuː.ʒu.ə.li/", "thường thường", "I usually walk to work.", "u|su|al|ly", 0),
            word("work", "/wɜːk/", "làm việc, chỗ làm", "I go to work by bus.", "work", 0),
            word("evening", "/ˈiːv.nɪŋ/", "buổi tối", "I read in the evening.", "eve|ning", 0, "Chỉ có 2 âm tiết, không đọc thành “e-ve-ning”."),
          ] },
          { type: "exercise", items: [
            mc("mot-ngay-1", "Chọn câu đúng:", ["She get up at 6.", "She gets up at 6.", "She getting up at 6."], 1, "Chủ ngữ là she/he/it thì động từ thêm -s."),
            fill("mot-ngay-2", "I usually ___ breakfast at 7.", ["have", "eat"]),
            reorder("mot-ngay-3", "I go to work by bus"),
            listen("mot-ngay-4", "I go to bed at eleven.", ["Tôi đi ngủ lúc 11 giờ", "Tôi đi làm lúc 11 giờ", "Tôi ăn tối lúc 11 giờ"], 0),
          ] },
          { type: "speaking", sentences: [
            say("I usually get up at six o'clock.", "Tôi thường dậy lúc 6 giờ."),
            say("I go to work by motorbike.", "Tôi đi làm bằng xe máy."),
          ] },
        ]),
        lesson("goi-mon", "Gọi món ở quán cà phê", 15, false, [
          video("Gọi đồ uống và hỏi giá"),
          { type: "vocab", words: [
            word("coffee", "/ˈkɒf.i/", "cà phê", "Can I have a coffee, please?", "cof|fee", 0, "Nhấn âm đầu: COF-fee, không nhấn âm sau như tiếng Pháp."),
            word("water", "/ˈwɔː.tər/", "nước", "A glass of water, please.", "wa|ter", 0),
            word("menu", "/ˈmen.juː/", "thực đơn", "Can I see the menu?", "me|nu", 0),
            word("please", "/pliːz/", "làm ơn", "Two teas, please.", "please", 0, "Kết thúc bằng âm /z/ rung nhẹ."),
          ] },
          { type: "exercise", items: [
            mc("goi-mon-1", "Cách gọi món lịch sự nhất:", ["Give me a coffee.", "I want coffee.", "Can I have a coffee, please?"], 2),
            fill("goi-mon-2", "How ___ is it?", ["much"], "“How much” dùng để hỏi giá tiền."),
            reorder("goi-mon-3", "Can I see the menu, please?"),
            listen("goi-mon-4", "That's forty thousand dong.", ["40.000 đồng", "14.000 đồng", "4.000 đồng"], 0),
          ] },
          { type: "speaking", sentences: [
            say("Can I have an iced coffee, please?", "Cho tôi một ly cà phê đá."),
            say("How much is it?", "Bao nhiêu tiền vậy?"),
          ] },
        ]),
      ],
    },
    {
      id: "m3",
      title: "Ra ngoài và đi lại",
      lessons: [
        lesson("hoi-duong", "Hỏi đường", 17, false, [
          video("Hỏi và chỉ đường"),
          { type: "vocab", words: [
            word("left", "/left/", "bên trái", "Turn left at the bank.", "left", 0),
            word("right", "/raɪt/", "bên phải", "It's on your right.", "right", 0),
            word("straight", "/streɪt/", "thẳng", "Go straight for 200 metres.", "straight", 0, "Chữ “gh” không đọc. Đọc như “streit”."),
            word("near", "/nɪər/", "gần", "Is it near here?", "near", 0),
          ] },
          { type: "exercise", items: [
            mc("hoi-duong-1", "“Đi thẳng” là:", ["Turn left", "Go straight", "Turn right"], 1),
            fill("hoi-duong-2", "The bank is ___ the hotel.", ["next to", "near"]),
            reorder("hoi-duong-3", "Excuse me, where is the station?"),
            listen("hoi-duong-4", "Turn right at the corner.", ["Rẽ phải ở góc đường", "Rẽ trái ở góc đường", "Đi thẳng qua góc đường"], 0),
          ] },
          { type: "speaking", sentences: [
            say("Excuse me, where is the bus station?", "Xin lỗi, bến xe buýt ở đâu?"),
            say("Go straight and turn left.", "Đi thẳng rồi rẽ trái."),
          ] },
        ]),
        lesson("mua-sam", "Đi mua sắm", 16, false, [
          video("Hỏi size, hỏi giá và thử đồ"),
          { type: "vocab", words: [
            word("shirt", "/ʃɜːt/", "áo sơ mi", "I like this shirt.", "shirt", 0),
            word("size", "/saɪz/", "cỡ, size", "What size are you?", "size", 0),
            word("expensive", "/ɪkˈspen.sɪv/", "đắt", "It's too expensive.", "ex|pen|sive", 1, "Nhấn âm giữa: ex-PEN-sive."),
            word("cheap", "/tʃiːp/", "rẻ", "This one is cheap.", "cheap", 0),
          ] },
          { type: "exercise", items: [
            mc("mua-sam-1", "“Cái này đắt quá” là:", ["It's too cheap.", "It's too expensive.", "It's very nice."], 1),
            fill("mua-sam-2", "Do you have this in a bigger ___?", ["size"]),
            reorder("mua-sam-3", "Can I try it on?"),
            listen("mua-sam-4", "It's on sale today.", ["Hôm nay đang giảm giá", "Hôm nay hết hàng", "Hôm nay đóng cửa"], 0),
          ] },
          { type: "speaking", sentences: [
            say("Can I try this shirt on?", "Tôi mặc thử áo này được không?"),
            say("Do you have a smaller size?", "Bạn có size nhỏ hơn không?"),
          ] },
        ]),
      ],
    },
  ],
};
