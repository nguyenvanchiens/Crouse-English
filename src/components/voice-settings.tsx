"use client";

import { Volume2 } from "lucide-react";
import { pickVoice, rankVoices, setVoicePref, speak, useVoices, type Accent } from "@/lib/speech";

const ACCENT_VI: Record<Accent, string> = { GB: "Anh–Anh (khóa phát âm, bảng IPA)", US: "Anh–Mỹ (các khóa học khác)" };
const ACCENT_SHORT: Record<Accent, string> = { GB: "Anh–Anh", US: "Anh–Mỹ" };
const SAMPLE: Record<Accent, string> = { GB: "Hello. This is how I sound. Think, three, ship, sheep.", US: "Hello. This is how I sound. I'd like a cup of coffee, please." };
// keeps quality hints such as "(Enhanced)"; drops a repeated language name such as "(English (UK))"
const label = (v: SpeechSynthesisVoice) => `${v.name.replace(/\s*\(English.*$/, "")} (${v.lang.replace("_", "-")})`;

/**
 * Choose the voice that reads English aloud on this device. Phones ship many voices of uneven quality; the
 * best one is picked automatically, and the learner can pick another and hear it first.
 */
export function VoiceSettings({ accents = ["GB", "US"], compact = false }: { accents?: Accent[]; compact?: boolean }) {
  const { voices, prefs } = useVoices();
  if (voices.length === 0) return compact ? null : <p className="text-ink-soft">Trình duyệt chưa cho biết các giọng đọc của máy. Mở lại trang này sau khi đã bấm nghe một từ.</p>;
  const current = accents.map((a) => pickVoice(voices, a, prefs[a]));

  const body = (
    <div className="space-y-4">
      {accents.map((a, i) => {
        const ranked = rankVoices(voices, a);
        const best = ranked[0];
        const id = `voice-${a}`;
        return (
          <div key={a} className="flex flex-wrap items-end gap-3">
            <label htmlFor={id} className="min-w-0 flex-1 basis-60">
              <span className="block text-sm font-semibold">Giọng {ACCENT_VI[a]}</span>
              <select
                id={id}
                value={prefs[a] && ranked.some((v) => v.voiceURI === prefs[a]) ? prefs[a] : ""}
                onChange={(e) => setVoicePref(a, e.target.value || null)}
                className="mt-1 w-full rounded-xl border-[2.5px] border-ink bg-card px-3 py-2.5"
              >
                <option value="">Tự động{best ? `: ${label(best)}` : ""}</option>
                {ranked.map((v) => (
                  <option key={v.voiceURI} value={v.voiceURI}>{label(v)}</option>
                ))}
              </select>
            </label>
            <button type="button" className="btn btn-ghost min-h-11" onClick={() => speak(SAMPLE[a], { accent: a })} aria-label={`Nghe thử giọng ${current[i] ? label(current[i]!) : ACCENT_VI[a]}`}>
              <Volume2 className="size-5" aria-hidden />
              Nghe thử
            </button>
          </div>
        );
      })}
      <p className="text-sm text-ink-soft">
        Giọng đọc là giọng có sẵn trong máy, nên mỗi máy nghe khác nhau. Trên iPhone, muốn giọng hay hơn: Cài đặt → Trợ năng → Nội dung được đọc → Giọng nói → Tiếng Anh,
        tải một giọng “Nâng cao” (ví dụ Daniel hoặc Serena cho Anh–Anh, Ava hoặc Samantha cho Anh–Mỹ), rồi mở lại trang và chọn ở đây nếu giọng đó hiện trong danh sách.
      </p>
    </div>
  );

  if (!compact) return body;
  // the summary names the accent, not the device's engine ("Microsoft David - English (United States)"):
  // the voice's own name is inside, for whoever wants to change it
  return (
    <details className="group mb-6 w-fit max-w-full rounded-full border-2 border-ink/15 bg-card px-4 open:w-full open:rounded-2xl">
      <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 text-sm font-semibold text-ink-soft [&::-webkit-details-marker]:hidden">
        <Volume2 className="size-4 shrink-0" aria-hidden />
        <span>
          Giọng đọc {ACCENT_SHORT[accents[0]]}
          {!current[0] && " (mặc định của máy)"}
        </span>
        <span aria-hidden>·</span>
        <span className="text-ink underline underline-offset-4">Đổi giọng</span>
      </summary>
      <div className="pb-4 pt-2">{body}</div>
    </details>
  );
}
