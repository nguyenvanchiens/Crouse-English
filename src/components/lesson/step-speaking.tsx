"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Mic, Volume2 } from "lucide-react";
import type { FreeSpeaking, SpeakingStep } from "@/content/types";
import { matchSpeech } from "@/lib/scoring";
import { listenOnce, speak, useSpeechSupport } from "@/lib/speech";

const ERRORS: Record<string, string> = {
  "not-allowed": "Trình duyệt chưa được phép dùng micro. Bấm biểu tượng ổ khóa trên thanh địa chỉ để cho phép, rồi thử lại.",
  "service-not-allowed": "Trình duyệt chưa được phép dùng micro. Bấm biểu tượng ổ khóa trên thanh địa chỉ để cho phép, rồi thử lại.",
  "no-speech": "Không nghe thấy giọng nói. Bấm “Bấm để nói” rồi nói to hơn một chút.",
  "audio-capture": "Không tìm thấy micro trên thiết bị này.",
  network: "Không kết nối được dịch vụ nhận giọng nói. Kiểm tra mạng rồi thử lại.",
  default: "Không nhận được giọng nói. Thử lại hoặc bỏ qua câu này.",
};

/** Errors that no retry will fix: offer to skip the whole step. */
const BLOCKING = new Set(["not-allowed", "service-not-allowed", "audio-capture"]);

function feedback(percent: number) {
  if (percent >= 80) return "Rất tốt!";
  if (percent >= 50) return "Gần đúng rồi. Nghe mẫu rồi thử lại nhé.";
  return "Thử nói chậm hơn và rõ từng từ.";
}

export function StepSpeaking({ step, onComplete }: { step: SpeakingStep; onComplete: () => void }) {
  const { tts, stt } = useSpeechSupport();
  const [i, setI] = useState(0);
  const [listening, setListening] = useState(false);
  const [heard, setHeard] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [allDone, setAllDone] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [freeStage, setFreeStage] = useState(false);
  const stopRef = useRef<(() => void) | null>(null);

  useEffect(() => () => stopRef.current?.(), []);

  function finishAll() {
    setAllDone(true);
    onComplete();
  }

  if (step.free && !allDone && (freeStage || blocked || !stt)) {
    return <FreeSpeakingCard free={step.free} stt={stt && !blocked} tts={tts} onDone={finishAll} />;
  }

  if (!stt) {
    return (
      <div className="clay p-6 sm:p-8">
        <p className="text-lg">
          Trình duyệt này chưa hỗ trợ nhận giọng nói. Hãy dùng Chrome hoặc Edge trên máy tính để luyện nói.
        </p>
        <button type="button" className="btn btn-ghost mt-6" onClick={onComplete} disabled={allDone}>Bỏ qua bước này</button>
      </div>
    );
  }

  if (allDone) {
    return (
      <div className="clay card-in p-8 text-center">
        <Check className="mx-auto size-10 text-leaf" aria-hidden />
        <p className="mt-3 font-display text-2xl font-bold">Đã xong phần luyện nói</p>
        <p className="mt-1 text-ink-soft">Bấm “Hoàn thành bài học” để lưu tiến độ.</p>
      </div>
    );
  }

  const s = step.sentences[i];
  const last = i === step.sentences.length - 1;
  const match = heard !== null ? matchSpeech(s.text, heard) : null;

  function record() {
    setError(null);
    setHeard(null);
    setListening(true);
    stopRef.current = listenOnce({
      onResult: (t) => setHeard(t),
      onError: (code) => {
        setError(ERRORS[code] ?? ERRORS.default);
        if (BLOCKING.has(code)) setBlocked(true);
      },
      onEnd: () => setListening(false),
    });
  }

  function advance() {
    stopRef.current?.();
    setListening(false);
    if (last && step.free) {
      setFreeStage(true);
    } else if (last) {
      setAllDone(true);
      onComplete();
    } else {
      setI(i + 1);
      setHeard(null);
      setError(null);
    }
  }

  return (
    <div className="clay p-6 sm:p-8">
      <p className="text-sm font-semibold text-ink-soft">Câu {i + 1}/{step.sentences.length}</p>
      <p className="mt-3 font-display text-3xl font-extrabold leading-snug">{s.text}</p>
      <p className="mt-1 text-ink-soft">{s.meaningVi}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <button type="button" className="btn btn-ghost" onClick={() => speak(s.text, { rate: 0.85 })} disabled={!tts}>
          <Volume2 className="size-5" aria-hidden />
          Nghe mẫu
        </button>
        <button type="button" className="btn btn-primary" onClick={record} disabled={listening} aria-pressed={listening}>
          <Mic className="size-5" aria-hidden />
          {listening ? "Đang nghe…" : "Bấm để nói"}
        </button>
      </div>

      <div role="status" aria-live="polite">
        {error && <p className="mt-5 rounded-2xl border-2 border-ink bg-sun-soft px-4 py-3">{error}</p>}
        {blocked && (
          <button
            type="button"
            className="btn btn-ghost mt-3"
            onClick={finishAll}
          >
            Bỏ qua bước này
          </button>
        )}
        {match && (
          <div className="mt-6 rounded-2xl border-[2.5px] border-ink bg-sky p-4">
            <p className="font-display text-xl font-bold">Khớp {match.percent}%. {feedback(match.percent)}</p>
            <p className="mt-3 flex flex-wrap gap-1.5 text-lg">
              {match.words.map((w, k) => (
                <span key={k} className={`rounded-lg px-1.5 ${w.matched ? "bg-leaf-soft" : "bg-tangerine/30 underline decoration-wavy"}`}>
                  {w.word}
                  {!w.matched && <span className="sr-only"> (chưa đúng)</span>}
                </span>
              ))}
            </p>
            <p className="mt-3 text-sm text-ink-soft">Máy nghe được: “{heard}”</p>
          </div>
        )}
      </div>

      <button type="button" className="btn btn-ghost mt-6" onClick={advance}>
        {last
          ? step.free
            ? "Sang phần nói tự do"
            : heard
              ? "Xong phần luyện nói"
              : "Bỏ qua và kết thúc"
          : heard
            ? "Câu tiếp"
            : "Bỏ qua câu này"}
      </button>
    </div>
  );
}

/** Open answer: the learner speaks freely; the app shows what it heard and a sample answer to compare with. */
function FreeSpeakingCard({ free, stt, tts, onDone }: { free: FreeSpeaking; stt: boolean; tts: boolean; onDone: () => void }) {
  const [parts, setParts] = useState<string[]>([]);
  const [listening, setListening] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showModel, setShowModel] = useState(false);
  const stopRef = useRef<(() => void) | null>(null);

  useEffect(() => () => stopRef.current?.(), []);

  const said = parts.join(" ");
  const words = said.split(/\s+/).filter(Boolean).length;

  function record() {
    setError(null);
    setListening(true);
    stopRef.current = listenOnce({
      onResult: (t) => t.trim() && setParts((p) => [...p, t.trim()]),
      onError: (code) => setError(ERRORS[code] ?? ERRORS.default),
      onEnd: () => setListening(false),
    });
  }

  return (
    <div className="clay p-6 sm:p-8">
      <p className="text-sm font-semibold text-ink-soft">Nói tự do</p>
      <p lang="en" className="mt-3 font-display text-3xl font-extrabold leading-snug">{free.question}</p>
      <p className="mt-2 text-lg text-ink-soft">{free.prompt}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <button type="button" className="btn btn-ghost" onClick={() => speak(free.question, { rate: 0.85 })} disabled={!tts}>
          <Volume2 className="size-5" aria-hidden />
          Nghe câu hỏi
        </button>
        {stt && (
          <button type="button" className="btn btn-primary" onClick={record} disabled={listening} aria-pressed={listening}>
            <Mic className="size-5" aria-hidden />
            {listening ? "Đang nghe…" : parts.length ? "Nói tiếp" : "Bấm để trả lời"}
          </button>
        )}
      </div>
      {!stt && (
        <p className="mt-4 rounded-2xl bg-sun-soft px-4 py-3">
          Trình duyệt này không nhận được giọng nói. Hãy trả lời thành tiếng, rồi mở bài nói mẫu để so sánh.
        </p>
      )}

      <div role="status" aria-live="polite">
        {error && <p className="mt-5 rounded-2xl border-2 border-ink bg-sun-soft px-4 py-3">{error}</p>}
        {said && (
          <div className="mt-6 rounded-2xl border-[2.5px] border-ink bg-sky p-4">
            <p className="text-sm font-semibold text-ink-soft">Máy nghe được ({words} từ)</p>
            <p lang="en" className="mt-1 text-lg">“{said}”</p>
            <p className="mt-2 text-sm text-ink-soft">
              Máy chỉ ghi lại lời bạn nói, không chấm ngữ pháp. Hãy tự đọc lại: đã trả lời đúng câu hỏi chưa, câu có đủ chủ ngữ và động từ chưa?
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button type="button" className="btn btn-ghost" onClick={() => setShowModel((v) => !v)} aria-expanded={showModel}>
          {showModel ? "Ẩn bài nói mẫu" : "Xem bài nói mẫu"}
        </button>
        <button type="button" className="btn btn-ghost" onClick={onDone}>
          {said || showModel ? "Xong phần luyện nói" : "Bỏ qua và kết thúc"}
        </button>
      </div>
      {showModel && (
        <div className="mt-4 rounded-2xl border-2 border-ink bg-leaf-soft p-4">
          <p lang="en" className="text-lg leading-relaxed">{free.model}</p>
          <button type="button" className="btn btn-ghost mt-3" onClick={() => speak(free.model, { rate: 0.9 })} disabled={!tts}>
            <Volume2 className="size-5" aria-hidden />
            Nghe bài mẫu
          </button>
        </div>
      )}
    </div>
  );
}
