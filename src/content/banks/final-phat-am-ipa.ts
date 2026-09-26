import { correct, fill, listen, mc, reorder } from "../builders";
import type { Exercise } from "../types";

/** Extra final-test items for Bước 0: Phát âm, 10 per chapter (two of each kind), drawn at random with the original bank. */
export const FINAL_EXTRA_PHAT_AM_IPA: Exercise[][] = [
  [
    // chương 1: bảng IPA, nguyên âm ngắn, dài, nguyên âm đôi, phụ âm
    mc("pa-f11", "Phiên âm /ʃuː/ là của từ nào?", ["show", "she", "shoe", "shy"], 2, "Shoe /ʃuː/ có /uː/ dài, môi chúm tròn. Show /ʃəʊ/ có /əʊ/, she /ʃiː/ có /iː/, shy /ʃaɪ/ có /aɪ/."),
    mc("pa-f12", "Cặp phụ âm nào đặt lưỡi, môi giống hệt nhau, chỉ khác ở chỗ cổ họng có rung hay không?", ["/f/ và /θ/", "/f/ và /v/", "/s/ và /ʃ/", "/m/ và /n/"], 1, "/f/ và /v/ đều là răng trên chạm môi dưới; /f/ vô thanh, /v/ hữu thanh (fan /fæn/, van /væn/). Các cặp còn lại khác nhau ở chỗ đặt lưỡi hoặc môi."),
    fill("pa-f13", "It's hot in here. Please open the ___. (cửa sổ, kết thúc bằng nguyên âm đôi /əʊ/)", ["window"], "Window /ˈwɪn.dəʊ/: âm cuối trượt từ “ơ” sang “u”, đừng đọc thành “ô” phẳng."),
    fill("pa-f14", "Would you like a glass of orange ___? (nước ép, bắt đầu bằng /dʒ/)", ["juice"], "Juice /dʒuːs/: /dʒ/ có cổ họng rung, không phải “giu”; /uː/ kéo dài và cuối từ xì rõ /s/."),
    reorder("pa-f15", "She needs a big green bin.", "Needs và green có /iː/ dài (/niːdz/, /ɡriːn/), còn big và bin có /ɪ/ ngắn (/bɪɡ/, /bɪn/). Tính từ kích cỡ big đứng trước màu sắc green."),
    reorder("pa-f16", "Why does the boy cry?", "Why /waɪ/ và cry /kraɪ/ trượt “a-i”, boy /bɔɪ/ trượt “o-i”. Câu hỏi Why + does + chủ ngữ + động từ nguyên mẫu."),
    listen("pa-f17", "pan", ["pen", "pin", "pan"], 2, "Pan /pæn/ há miệng rộng, âm giữa “a” và “e”. Pen /pen/ có /e/ mở vừa, pin /pɪn/ có /ɪ/ ngắn."),
    listen("pa-f18", "vest", ["vest", "best", "west"], 0, "Vest /vest/ bắt đầu bằng /v/: răng trên chạm môi dưới, cổ họng rung. Best bắt đầu bằng /b/ (hai môi), west bắt đầu bằng /w/ (môi tròn)."),
    correct("pa-f19", "Those three thin men is my brothers.", ["Those three thin men are my brothers.", "Those three thin men were my brothers."], "Chủ ngữ số nhiều (those three thin men) đi với are. Those /ðəʊz/ có /ð/ rung, three /θriː/ và thin /θɪn/ có /θ/ chỉ thổi hơi."),
    correct("pa-f20", "It's late. I have to live now.", ["It's late. I have to leave now.", "It is late. I have to leave now.", "It's late. I have to go now.", "It is late. I have to go now."], "Rời đi là leave /liːv/ với /iː/ dài; live /lɪv/ với /ɪ/ ngắn nghĩa là sống. Đọc sai độ dài nguyên âm là thành từ khác."),
  ],
  [
    // chương 2: âm cuối, đuôi -s và -ed, trọng âm, nhịp điệu
    mc("pa-f21", "Từ nào có đuôi -ed đọc là /d/?", ["laughed", "cleaned", "needed", "kissed"], 1, "Clean tận cùng bằng /n/ hữu thanh nên cleaned đọc /kliːnd/. Laughed /lɑːft/ và kissed /kɪst/ đọc /t/, needed /ˈniː.dɪd/ đọc /ɪd/."),
    mc("pa-f22", "Từ nào nhấn trọng âm ở âm tiết thứ hai?", ["garden", "doctor", "morning", "begin"], 3, "Begin /bɪˈɡɪn/ nhấn be-GIN. Garden /ˈɡɑː.dən/, doctor /ˈdɒk.tə/, morning /ˈmɔː.nɪŋ/ đều nhấn âm đầu."),
    fill("pa-f23", "My brother ___ in a bank in London. (làm việc, đuôi -s đọc /s/)", ["works"], "Chủ ngữ ngôi thứ ba số ít nên thêm -s. Work tận cùng bằng /k/ vô thanh nên works đọc /wɜːks/, không thêm âm tiết."),
    fill("pa-f24", "My birthday is in ___, in the summer. (tháng Bảy, nhấn âm thứ hai)", ["July"], "July /dʒuˈlaɪ/ nhấn âm thứ hai: ju-LY, âm đầu đọc nhẹ và ngắn."),
    reorder("pa-f25", "Where did you put the keys?", "Nhấn WHERE, PUT, KEYS; did you và the đọc nhẹ, nhanh. Keys /kiːz/ có đuôi -s đọc /z/ vì key tận cùng bằng nguyên âm."),
    reorder("pa-f26", "Her mother baked a chocolate cake.", "Baked /beɪkt/ có đuôi -ed đọc /t/ vì bake tận cùng bằng /k/. Chocolate /ˈtʃɒk.lət/ chỉ có hai âm tiết, và cake /keɪk/ phải giữ âm /k/ cuối."),
    listen("pa-f27", "nose", ["nose", "note", "know"], 0, "Nose /nəʊz/ kết thúc bằng /z/ rung. Note /nəʊt/ kết thúc bằng /t/, còn know /nəʊ/ không có phụ âm cuối."),
    listen("pa-f28", "The oranges are on the table.", ["Những quả cam ở dưới bàn.", "Một quả cam ở trên bàn.", "Những quả cam ở trên bàn."], 2, "Orange tận cùng bằng /dʒ/ nên oranges có thêm âm tiết /ɪz/, đi với are: nhiều quả cam. On the table là ở trên bàn."),
    correct("pa-f29", "She is waiting the bus.", ["She is waiting for the bus.", "She's waiting for the bus."], "Wait đi với for: wait for the bus. For đọc yếu /fə/ rất nhẹ nên người Việt hay bỏ sót, nhưng không được bỏ."),
    correct("pa-f30", "Yesterday we visit our grandparents.", ["Yesterday we visited our grandparents."], "Yesterday là quá khứ nên dùng visited. Visit tận cùng bằng /t/ nên -ed đọc /ɪd/: /ˈvɪz.ɪ.tɪd/, thêm một âm tiết."),
  ],
];
