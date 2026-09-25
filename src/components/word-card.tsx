"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { word } from "@/content/builders";
import { PronounceCard } from "@/components/pronounce-card";
import { stopSpeaking } from "@/lib/speech";

const WORDS = [
  word("comfortable", "/ˈkʌmf.tə.bəl/", "thoải mái", "This sofa is really comfortable.", "comf|ta|ble", 0,
    "Người Việt hay đọc đủ 4 âm “com-for-ta-ble”. Người bản xứ chỉ đọc 3 âm."),
  word("photographer", "/fəˈtɒɡ.rə.fər/", "nhiếp ảnh gia", "My sister is a photographer.", "pho|tog|ra|pher", 1,
    "Trọng âm rơi vào âm thứ hai, khác với “PHO-to” mà bạn quen đọc."),
  word("Wednesday", "/ˈwenz.deɪ/", "thứ Tư", "See you on Wednesday.", "wenz|day", 0,
    "Chữ “d” đầu tiên không đọc. Chỉ có hai âm: WENZ-day."),
  word("vegetable", "/ˈvedʒ.tə.bəl/", "rau củ", "Eat more vegetables.", "vedge|ta|ble", 0,
    "Chữ “e” ở giữa bị nuốt mất, nên đọc 3 âm chứ không phải 4."),
];

export function WordCard() {
  const [index, setIndex] = useState(0);
  const current = WORDS[index];

  return (
    <div className="relative mb-3 mr-3">
      <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 rotate-3 rounded-[1.5rem] border-[2.5px] border-ink bg-sun" />
      <div aria-hidden className="absolute inset-0 translate-x-1.5 translate-y-1.5 rotate-[1.5deg] rounded-[1.5rem] border-[2.5px] border-ink bg-grape-soft" />
      <PronounceCard key={current.word} word={current} label={`Từ hay đọc sai (${index + 1}/${WORDS.length})`} revealMeaning>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => {
            stopSpeaking();
            setIndex((i) => (i + 1) % WORDS.length);
          }}
        >
          Từ tiếp theo
          <ChevronRight className="size-5" aria-hidden />
        </button>
      </PronounceCard>
    </div>
  );
}
