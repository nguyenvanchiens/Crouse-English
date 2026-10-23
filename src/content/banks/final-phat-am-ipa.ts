import { correct, fill, listen, mc, reorder } from "../builders";
import type { Exercise } from "../types";

/** Extra final-test items for Bước 0: Phát âm, 10 per chapter (two of each kind), drawn at random with the original bank. */
export const FINAL_EXTRA_PHAT_AM_IPA: Exercise[][] = [
  [
    // chương 1: bảng IPA, nguyên âm ngắn, dài, nguyên âm đôi, phụ âm, những âm người Việt hay lẫn
    mc("pa-f11", "Phiên âm /ʃuː/ là của từ nào?", ["show", "she", "shoe", "shy"], 2, "Shoe /ʃuː/ có /uː/ dài, môi chúm tròn. Show /ʃəʊ/ có /əʊ/, she /ʃiː/ có /iː/, shy /ʃaɪ/ có /aɪ/."),
    mc("pa-f12", "Cặp phụ âm nào đặt lưỡi, môi giống hệt nhau, chỉ khác ở chỗ cổ họng có rung hay không?", ["/f/ và /θ/", "/f/ và /v/", "/s/ và /ʃ/", "/m/ và /n/"], 1, "/f/ và /v/ đều là răng trên chạm môi dưới; /f/ vô thanh, /v/ hữu thanh (fan /fæn/, van /væn/). Các cặp còn lại khác nhau ở chỗ đặt lưỡi hoặc môi."),
    fill("pa-f13", "Let's cross the ___ at the traffic lights. (đường phố, bắt đầu bằng ba phụ âm /str/)", ["street"], "Street /striːt/ chỉ có một âm tiết: xì /s/ rồi trượt thẳng sang /t/ và /r/, không chèn “ơ” thành “xờ-trít”."),
    fill("pa-f14", "Would you like a glass of orange ___? (nước ép, bắt đầu bằng /dʒ/)", ["juice"], "Juice /dʒuːs/: /dʒ/ có cổ họng rung, không phải “giu”; /uː/ kéo dài và cuối từ xì rõ /s/."),
    reorder("pa-f15", "She needs a big green bin.", "Needs và green có /iː/ dài (/niːdz/, /ɡriːn/), còn big và bin có /ɪ/ ngắn (/bɪɡ/, /bɪn/). Tính từ kích cỡ big đứng trước màu sắc green."),
    reorder("pa-f16", "Why does the boy cry?", "Why /waɪ/ và cry /kraɪ/ trượt “a-i”, boy /bɔɪ/ trượt “o-i”. Câu hỏi Why + does + chủ ngữ + động từ nguyên mẫu."),
    listen("pa-f17", "pan", ["pen", "pin", "pan"], 2, "Pan /pæn/ há miệng rộng, âm giữa “a” và “e”. Pen /pen/ có /e/ mở vừa, pin /pɪn/ có /ɪ/ ngắn."),
    listen("pa-f18", "vest", ["vest", "best", "west"], 0, "Vest /vest/ bắt đầu bằng /v/: răng trên chạm môi dưới, cổ họng rung. Best bắt đầu bằng /b/ (hai môi), west bắt đầu bằng /w/ (môi tròn)."),
    correct("pa-f19", "The night in the meeting room doesn't work. Can you fix it?", "The light in the meeting room doesn't work. Can you fix it?", "Cái đèn là light /laɪt/, hơi đi ra hai bên lưỡi; night /naɪt/ (ban đêm) có hơi ra mũi. Bịt mũi mà vẫn đọc được thì đó là /l/."),
    correct("pa-f20", "It's late. I have to live now.", ["It's late. I have to leave now.", "It is late. I have to leave now.", "It's late. I have to go now.", "It is late. I have to go now."], "Rời đi là leave /liːv/ với /iː/ dài; live /lɪv/ với /ɪ/ ngắn nghĩa là sống. Đọc sai độ dài nguyên âm là thành từ khác."),
  ],
  [
    // chương 2: âm cuối, đuôi -s và -ed, trọng âm, ngữ điệu, nối âm và giảm âm
    mc("pa-f21", "Bạn bắt chuyện: “It's a lovely day, isn't it?” Bạn chắc chắn trời đẹp và chỉ chờ người kia đồng ý. Giọng ở “isn't it” thường thế nào?", ["Lên giọng", "Xuống giọng", "Đều giọng, không lên không xuống", "Lên ở isn't, xuống ở it"], 1, "Câu hỏi đuôi để chờ đồng ý thì xuống giọng. Chỉ khi thật sự chưa biết câu trả lời mới lên giọng ở câu hỏi đuôi."),
    mc("pa-f22", "Từ nào nhấn trọng âm ở âm tiết thứ hai?", ["garden", "doctor", "morning", "begin"], 3, "Begin /bɪˈɡɪn/ nhấn be-GIN. Garden /ˈɡɑː.dən/, doctor /ˈdɒk.tə/, morning /ˈmɔː.nɪŋ/ đều nhấn âm đầu."),
    fill("pa-f23", "Laughs đọc là /lɑːf___/: đuôi -s sau /f/ vô thanh.", ["s"], "Chữ gh trong laugh đọc /f/, một âm vô thanh, nên đuôi -s đọc /s/: /lɑːfs/, không thêm âm tiết. Nhìn âm, đừng nhìn chữ."),
    fill("pa-f24", "My birthday is in ___, in the summer. (tháng Bảy, nhấn âm thứ hai)", ["July"], "July /dʒuˈlaɪ/ nhấn âm thứ hai: ju-LY, âm đầu đọc nhẹ và ngắn."),
    reorder("pa-f25", "Where did you put the keys?", "Nhấn WHERE, PUT, KEYS; did you và the đọc nhẹ, nhanh. Keys /kiːz/ có đuôi -s đọc /z/ vì key tận cùng bằng nguyên âm."),
    reorder("pa-f26", "Her mother baked a chocolate cake.", "Baked /beɪkt/ có đuôi -ed đọc /t/ vì bake tận cùng bằng /k/. Chocolate thường đọc hai âm tiết /ˈtʃɒk.lət/ (cũng có cách đọc ba âm tiết /ˈtʃɒk.əl.ət/), nhấn âm đầu. Cake /keɪk/ phải giữ âm /k/ cuối."),
    listen("pa-f27", "Pick it up, please.", ["Làm ơn đặt nó xuống.", "Làm ơn nhặt nó lên.", "Làm ơn mở nó ra."], 1, "Ba từ nối liền: pi‿ki‿tup /pɪ.kɪ.tʌp/. Pick up là nhặt lên; nghe ra chỗ nối thì không bị lạc nhịp."),
    listen("pa-f28", "The oranges are on the table.", ["Những quả cam ở dưới bàn.", "Một quả cam ở trên bàn.", "Những quả cam ở trên bàn."], 2, "Orange tận cùng bằng /dʒ/ nên oranges có thêm âm tiết /ɪz/, đi với are: nhiều quả cam. On the table là ở trên bàn."),
    correct("pa-f29", "I'll have a sanwich and a cup of tea.", ["I'll have a sandwich and a cup of tea.", "I will have a sandwich and a cup of tea."], "Khi nói, chữ d trong sandwich thường không đọc: /ˈsæn.wɪdʒ/. Nghe sao viết vậy thì dễ quên chữ d; chữ viết đúng vẫn là sandwich."),
    correct("pa-f30", "The word visited has two syllables.", ["The word visited has three syllables.", "The word visited has 3 syllables."], "Visit tận cùng bằng /t/ nên -ed thêm hẳn một âm tiết /ɪd/: visited /ˈvɪz.ɪ.tɪd/ có ba âm tiết VI-zi-tid."),
  ],
];
