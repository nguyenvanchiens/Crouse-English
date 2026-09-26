/** The 44 phonemes of British English (RP) for the IPA chart. */

export type IpaGroup = "short" | "long" | "diphthong" | "consonant";

export interface IpaSound {
  symbol: string;
  group: IpaGroup;
  /** consonants only */
  voiced?: boolean;
  examples: { word: string; ipa: string }[];
  /** how a Vietnamese learner should make the sound */
  tip: string;
  /** a sound it is often confused with, and a minimal pair to practise */
  pair?: { symbol: string; words: [string, string] };
}

const s = (
  symbol: string,
  group: IpaGroup,
  examples: [string, string][],
  tip: string,
  pair?: [string, string, string],
  voiced?: boolean,
): IpaSound => ({
  symbol,
  group,
  ...(voiced === undefined ? {} : { voiced }),
  examples: examples.map(([word, ipa]) => ({ word, ipa })),
  tip,
  ...(pair ? { pair: { symbol: pair[0], words: [pair[1], pair[2]] as [string, string] } } : {}),
});

export const IPA_SOUNDS: IpaSound[] = [
  // ---- nguyên âm ngắn ----
  s("ɪ", "short", [["ship", "/ʃɪp/"], ["sit", "/sɪt/"], ["busy", "/ˈbɪz.i/"]],
    "Ngắn và thả lỏng, giữa “i” và “ê” của tiếng Việt. Đừng kéo dài thành “iii”.", ["iː", "ship", "sheep"]),
  s("e", "short", [["bed", "/bed/"], ["ten", "/ten/"], ["head", "/hed/"]],
    "Gần “e” trong “em” nhưng miệng mở vừa, không bẹt sang hai bên.", ["æ", "bed", "bad"]),
  s("æ", "short", [["cat", "/kæt/"], ["bad", "/bæd/"], ["apple", "/ˈæp.əl/"]],
    "Há miệng rộng như định nói “a” nhưng đọc “e”. Âm nằm giữa “a” và “e”.", ["e", "bad", "bed"]),
  s("ʌ", "short", [["cup", "/kʌp/"], ["love", "/lʌv/"], ["money", "/ˈmʌn.i/"]],
    "Gần “ă” trong “ăn”: ngắn, miệng mở vừa, lưỡi thả lỏng ở giữa.", ["ɑː", "cut", "cart"]),
  s("ɒ", "short", [["hot", "/hɒt/"], ["dog", "/dɒɡ/"], ["what", "/wɒt/"]],
    "Gần “o” trong “con” nhưng ngắn, môi hơi tròn, hàm hạ thấp.", ["ɔː", "cot", "caught"]),
  s("ʊ", "short", [["book", "/bʊk/"], ["put", "/pʊt/"], ["could", "/kʊd/"]],
    "Gần “u” nhưng ngắn và lỏng, môi tròn nhẹ. Đừng kéo thành “uuu”.", ["uː", "full", "fool"]),
  s("ə", "short", [["about", "/əˈbaʊt/"], ["teacher", "/ˈtiː.tʃə/"], ["banana", "/bəˈnɑː.nə/"]],
    "Âm “ơ” rất nhẹ và ngắn, luôn ở âm tiết KHÔNG nhấn. Đây là âm phổ biến nhất tiếng Anh."),
  // ---- nguyên âm dài ----
  s("iː", "long", [["see", "/siː/"], ["sheep", "/ʃiːp/"], ["people", "/ˈpiː.pəl/"]],
    "“i” kéo dài, môi bẹt như đang cười. Dấu ː nghĩa là âm dài.", ["ɪ", "sheep", "ship"]),
  s("ɑː", "long", [["car", "/kɑː/"], ["father", "/ˈfɑː.ðə/"], ["half", "/hɑːf/"]],
    "“a” dài, há miệng rộng, âm từ sâu trong họng. Kiểu Anh không đọc âm r.", ["ʌ", "cart", "cut"]),
  s("ɔː", "long", [["door", "/dɔː/"], ["walk", "/wɔːk/"], ["caught", "/kɔːt/"]],
    "“o” dài, môi tròn và hơi đẩy ra trước.", ["ɒ", "caught", "cot"]),
  s("uː", "long", [["food", "/fuːd/"], ["blue", "/bluː/"], ["school", "/skuːl/"]],
    "“u” dài, môi tròn chúm lại như thổi nến.", ["ʊ", "fool", "full"]),
  s("ɜː", "long", [["bird", "/bɜːd/"], ["work", "/wɜːk/"], ["learn", "/lɜːn/"]],
    "“ơ” kéo dài, môi không tròn, lưỡi ở giữa. Kiểu Anh không cuộn lưỡi.", ["ɑː", "heard", "hard"]),
  // ---- nguyên âm đôi ----
  s("eɪ", "diphthong", [["day", "/deɪ/"], ["name", "/neɪm/"], ["great", "/ɡreɪt/"]],
    "Trượt từ “ê” sang “i”: “ây”. Đừng đọc thành “ê” phẳng.", ["e", "late", "let"]),
  s("aɪ", "diphthong", [["my", "/maɪ/"], ["time", "/taɪm/"], ["light", "/laɪt/"]],
    "Trượt từ “a” sang “i”: giống “ai”, rõ cả hai phần."),
  s("ɔɪ", "diphthong", [["boy", "/bɔɪ/"], ["coin", "/kɔɪn/"], ["enjoy", "/ɪnˈdʒɔɪ/"]],
    "Trượt từ “o” sang “i”: giống “oi”."),
  s("aʊ", "diphthong", [["now", "/naʊ/"], ["house", "/haʊs/"], ["mouth", "/maʊθ/"]],
    "Trượt từ “a” sang “u”: giống “ao”.", ["əʊ", "now", "know"]),
  s("əʊ", "diphthong", [["go", "/ɡəʊ/"], ["phone", "/fəʊn/"], ["know", "/nəʊ/"]],
    "Trượt từ “ơ” sang “u”: “âu”. Lỗi phổ biến là đọc thành “ô” phẳng (“phôn”).", ["ɔː", "coat", "caught"]),
  s("ɪə", "diphthong", [["here", "/hɪə/"], ["near", "/nɪə/"], ["idea", "/aɪˈdɪə/"]],
    "Trượt từ “i” sang “ơ”: giống “ia”."),
  s("eə", "diphthong", [["hair", "/heə/"], ["care", "/keə/"], ["where", "/weə/"]],
    "Trượt từ “e” sang “ơ”: giống “eơ”, không đọc âm r."),
  s("ʊə", "diphthong", [["tour", "/tʊə/"], ["pure", "/pjʊə/"], ["cure", "/kjʊə/"]],
    "Trượt từ “u” sang “ơ”: giống “ua”. Nhiều người Anh trẻ đọc thành /ɔː/ (tour /tɔː/)."),
  // ---- phụ âm ----
  s("p", "consonant", [["pen", "/pen/"], ["happy", "/ˈhæp.i/"], ["stop", "/stɒp/"]],
    "Bật hơi mạnh ở đầu từ: đặt tay trước miệng phải thấy luồng gió. Ở cuối từ phải bật rõ, đừng nuốt.", ["b", "pen", "Ben"], false),
  s("b", "consonant", [["bag", "/bæɡ/"], ["baby", "/ˈbeɪ.bi/"], ["job", "/dʒɒb/"]],
    "Như “b” tiếng Việt, cổ họng rung. Ở cuối từ (job) vẫn phải phát ra.", ["p", "Ben", "pen"], true),
  s("t", "consonant", [["tea", "/tiː/"], ["water", "/ˈwɔː.tə/"], ["cat", "/kæt/"]],
    "Đầu lưỡi chạm lợi trên rồi bật hơi, mạnh hơn “t” tiếng Việt, gần với “th”. Cuối từ phải bật nhẹ.", ["d", "tin", "din"], false),
  s("d", "consonant", [["day", "/deɪ/"], ["ladder", "/ˈlæd.ə/"], ["bed", "/bed/"]],
    "Đầu lưỡi chạm lợi trên, cổ họng rung. KHÁC “đ” tiếng Việt: lưỡi đặt cao hơn, không bật ngược.", ["t", "bed", "bet"], true),
  s("k", "consonant", [["cat", "/kæt/"], ["school", "/skuːl/"], ["book", "/bʊk/"]],
    "Đầu từ là k bật hơi: đọc “k” rồi thổi nhẹ một luồng hơi (không phải “kh” tiếng Việt, vì “kh” là âm xát). Cuối từ phải phát ra, đừng dừng im như “c” tiếng Việt.", ["ɡ", "back", "bag"], false),
  s("ɡ", "consonant", [["go", "/ɡəʊ/"], ["bigger", "/ˈbɪɡ.ə/"], ["bag", "/bæɡ/"]],
    "Như “g” trong “ga”, cổ họng rung. Cuối từ (bag) phải nghe rõ để khác “back”.", ["k", "bag", "back"], true),
  s("f", "consonant", [["fish", "/fɪʃ/"], ["coffee", "/ˈkɒf.i/"], ["laugh", "/lɑːf/"]],
    "Răng trên chạm môi dưới, thổi hơi, giống “ph”.", ["v", "fan", "van"], false),
  s("v", "consonant", [["very", "/ˈver.i/"], ["seven", "/ˈsev.ən/"], ["love", "/lʌv/"]],
    "Như /f/ nhưng cổ họng rung. Cuối từ (love, five) vẫn phải giữ âm, đừng bỏ.", ["f", "van", "fan"], true),
  s("θ", "consonant", [["think", "/θɪŋk/"], ["three", "/θriː/"], ["mouth", "/maʊθ/"]],
    "Đặt đầu lưỡi GIỮA hai hàm răng rồi thổi hơi, không rung. Đừng đọc thành “th” (think ≠ “thinh”) hay “s”.", ["s", "think", "sink"], false),
  s("ð", "consonant", [["this", "/ðɪs/"], ["mother", "/ˈmʌð.ə/"], ["with", "/wɪð/"]],
    "Lưỡi giữa hai hàm răng như /θ/ nhưng cổ họng rung. Đừng đọc thành “d” hay “đ”.", ["d", "they", "day"], true),
  s("s", "consonant", [["see", "/siː/"], ["city", "/ˈsɪt.i/"], ["bus", "/bʌs/"]],
    "“x” trong tiếng Việt: xì hơi qua kẽ răng, không rung. Cuối từ phải kéo rõ tiếng “xì”.", ["z", "rice", "rise"], false),
  s("z", "consonant", [["zoo", "/zuː/"], ["busy", "/ˈbɪz.i/"], ["boys", "/bɔɪz/"]],
    "Như /s/ nhưng cổ họng rung, giống tiếng ong “zzz”. Rất hay gặp ở đuôi -s (boys, dogs).", ["s", "rise", "rice"], true),
  s("ʃ", "consonant", [["she", "/ʃiː/"], ["station", "/ˈsteɪ.ʃən/"], ["fish", "/fɪʃ/"]],
    "Môi chu ra như khi ra hiệu “suỵt” giữ im lặng, lưỡi lùi về sau hơn /s/, thổi hơi, cổ họng không rung.", ["s", "she", "see"], false),
  s("ʒ", "consonant", [["television", "/ˈtel.ɪ.vɪʒ.ən/"], ["usually", "/ˈjuː.ʒu.ə.li/"], ["garage", "/ˈɡær.ɑːʒ/"]],
    "Đặt lưỡi và chu môi y như /ʃ/ (“suỵt”), rồi cho cổ họng rung. Đừng đọc thành “gi” hay “d” tiếng Việt.", ["ʃ", "vision", "fission"], true),
  s("tʃ", "consonant", [["chair", "/tʃeə/"], ["teacher", "/ˈtiː.tʃə/"], ["watch", "/wɒtʃ/"]],
    "Gần “ch” nhưng môi chu ra và bật mạnh hơn. Cuối từ (watch) phải bật rõ.", ["dʒ", "cheap", "jeep"], false),
  s("dʒ", "consonant", [["job", "/dʒɒb/"], ["orange", "/ˈɒr.ɪndʒ/"], ["age", "/eɪdʒ/"]],
    "Như /tʃ/ nhưng cổ họng rung, giống “dj”. KHÔNG phải “gi” hay “z” tiếng Việt.", ["tʃ", "jeep", "cheap"], true),
  s("h", "consonant", [["hat", "/hæt/"], ["hello", "/heˈləʊ/"], ["behind", "/bɪˈhaɪnd/"]],
    "Hơi thở nhẹ như “h” tiếng Việt. Chú ý chữ h câm: hour, honest.", undefined, false),
  s("m", "consonant", [["man", "/mæn/"], ["summer", "/ˈsʌm.ə/"], ["time", "/taɪm/"]],
    "Như “m” tiếng Việt. Cuối từ ngậm môi lại cho rõ.", undefined, true),
  s("n", "consonant", [["no", "/nəʊ/"], ["dinner", "/ˈdɪn.ə/"], ["sun", "/sʌn/"]],
    "Như “n” tiếng Việt, đầu lưỡi chạm lợi trên.", ["ŋ", "thin", "thing"], true),
  s("ŋ", "consonant", [["sing", "/sɪŋ/"], ["thinking", "/ˈθɪŋ.kɪŋ/"], ["long", "/lɒŋ/"]],
    "Như “ng” cuối từ tiếng Việt. Không bật thêm “g” ở sau (sing ≠ “sing-gơ”).", ["n", "thing", "thin"], true),
  s("l", "consonant", [["leg", "/leɡ/"], ["hello", "/heˈləʊ/"], ["ball", "/bɔːl/"]],
    "Đầu từ như “l”. Cuối từ (ball, school) giữ đầu lưỡi chạm lợi trên, đừng bỏ hay đọc thành “u”.", ["r", "light", "right"], true),
  s("r", "consonant", [["red", "/red/"], ["sorry", "/ˈsɒr.i/"], ["very", "/ˈver.i/"]],
    "Cong lưỡi lên nhưng KHÔNG chạm vòm miệng, không rung như “r” tiếng Việt. Kiểu Anh chỉ đọc r trước nguyên âm.", ["l", "right", "light"], true),
  s("w", "consonant", [["we", "/wiː/"], ["window", "/ˈwɪn.dəʊ/"], ["quick", "/kwɪk/"]],
    "Chu môi tròn như “u” rồi mở nhanh: “uơ”. Đừng đọc thành /v/.", ["v", "wet", "vet"], true),
  s("j", "consonant", [["yes", "/jes/"], ["you", "/juː/"], ["music", "/ˈmjuː.zɪk/"]],
    "Như “d” miền Nam trong “dạ” hay “y” trong “yêu”.", undefined, true),
];
