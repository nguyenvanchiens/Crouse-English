"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Eye, EyeOff, Mic, Play, Volume2 } from "lucide-react";
import type { DialogueStep } from "@/content/types";
import { matchSpeech } from "@/lib/scoring";
import { listenOnce, speak, stopSpeaking, useSpeechSupport } from "@/lib/speech";

type Mode = "listen" | "A" | "B";

export function StepDialogue({ step, done, onComplete }: { step: DialogueStep; done: boolean; onComplete: () => void }) {
  const { tts, stt } = useSpeechSupport();
  const [showVi, setShowVi] = useState(true);
  const [mode, setMode] = useState<Mode>("listen");
  const [playing, setPlaying] = useState<number | null>(null);
  // role-play state
  const [turn, setTurn] = useState(0);
  const [results, setResults] = useState<Record<number, number | null>>({});
  const [listening, setListening] = useState(false);
  const stopRef = useRef<(() => void) | null>(null);
  const cancelled = useRef(false);

  useEffect(() => {
    // reset on (re)mount: StrictMode runs a mount-unmount-mount cycle in development
    cancelled.current = false;
    return () => {
      cancelled.current = true;
      if (timer.current) clearTimeout(timer.current);
      stopRef.current?.();
      stopSpeaking();
    };
  }, []);

  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  /** each playback gets a token; skipping or a newer playback invalidates older callbacks */
  const playSeq = useRef(0);

  function cancelPlayback() {
    playSeq.current++;
    if (timer.current) clearTimeout(timer.current);
    stopSpeaking();
    setPlaying(null);
  }

  function playLine(i: number, then?: () => void) {
    const token = ++playSeq.current;
    setPlaying(i);
    const finish = () => {
      if (token !== playSeq.current) return;
      playSeq.current++;
      if (timer.current) clearTimeout(timer.current);
      setPlaying(null);
      if (!cancelled.current) then?.();
    };
    const arm = (ms: number) => {
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(finish, ms);
    };
    const words = step.lines[i].en.split(/\s+/).length;
    if (!tts) {
      arm(1500 + words * 450); // no voice at all: give the learner time to read the line
      return;
    }
    // Some browsers never start or never finish an utterance (no voices, speech blocked).
    // Wait a few seconds for it to start; once it has started, rely on onend with a generous safety net
    // so a slow voice is never cut off mid-sentence.
    arm(4000);
    speak(step.lines[i].en, {
      rate: 0.9,
      onStart: () => token === playSeq.current && arm(5000 + words * 900),
      onEnd: finish,
    });
  }

  function playAll(from = 0) {
    if (from >= step.lines.length) return;
    playLine(from, () => playAll(from + 1));
  }

  /** In role-play, the computer reads the other role's lines until it is the learner's turn. */
  function advanceTo(i: number, role: "A" | "B") {
    if (i >= step.lines.length) {
      setTurn(i);
      return;
    }
    setTurn(i);
    if (step.lines[i].speaker !== role) playLine(i, () => advanceTo(i + 1, role));
  }

  function startRole(role: "A" | "B") {
    cancelPlayback();
    setMode(role);
    setResults({});
    advanceTo(0, role);
  }

  function sayMyLine() {
    stopSpeaking(); // never let the microphone hear the computer's voice
    setListening(true);
    stopRef.current = listenOnce({
      onResult: (heard) => setResults((r) => ({ ...r, [turn]: matchSpeech(step.lines[turn].en, heard).percent })),
      onError: () => setResults((r) => ({ ...r, [turn]: null })),
      onEnd: () => setListening(false),
    });
  }

  function nextTurn() {
    stopRef.current?.();
    stopRef.current = null;
    setListening(false);
    advanceTo(turn + 1, mode as "A" | "B");
  }

  const roleName = (sp: "A" | "B") => step.roles[sp];
  const finishedRole = mode !== "listen" && turn >= step.lines.length;
  const rolePlaying = mode !== "listen" && !finishedRole;
  const myTurn = rolePlaying && step.lines[turn].speaker === mode;

  // Each turn swaps the role-play buttons; keep keyboard focus on the current action.
  const actionRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (mode !== "listen") actionRef.current?.focus({ preventScroll: true });
  }, [mode, turn, myTurn, finishedRole]);

  return (
    <article className="clay p-6 sm:p-8">
      <h2 className="font-display text-3xl font-extrabold leading-tight">{step.title}</h2>
      <p className="mt-2 text-lg text-ink-soft">{step.context}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <button type="button" className="btn btn-primary" onClick={() => {
            setMode("listen");
            setResults({});
            playAll();
          }} disabled={!tts}>
          <Play className="size-5" aria-hidden />
          Nghe cả đoạn
        </button>
        <button type="button" className="btn btn-ghost" onClick={() => setShowVi((v) => !v)} aria-pressed={showVi}>
          {showVi ? <EyeOff className="size-5" aria-hidden /> : <Eye className="size-5" aria-hidden />}
          {showVi ? "Ẩn nghĩa tiếng Việt" : "Hiện nghĩa tiếng Việt"}
        </button>
      </div>

      <ol className="mt-6 space-y-3" aria-label="Lời thoại">
        {step.lines.map((l, i) => {
          const current = mode !== "listen" && i === turn;
          const score = results[i];
          return (
            <li
              key={i}
              className={`flex gap-3 ${l.speaker === "B" ? "flex-row-reverse text-right" : ""}`}
            >
              <span
                aria-hidden
                className={`grid size-11 shrink-0 place-items-center rounded-full border-2 border-ink font-display font-bold ${
                  l.speaker === "A" ? "bg-sun" : "bg-grape-soft"
                }`}
              >
                {l.speaker}
              </span>
              <div
                className={`max-w-[85%] rounded-2xl border-2 px-4 py-3 ${current ? "border-tangerine-deep bg-sun-soft" : "border-ink bg-card"} ${
                  playing === i ? "outline outline-3 outline-leaf" : ""
                }`}
              >
                <p className="text-sm font-semibold text-ink-soft">{roleName(l.speaker)}</p>
                <button
                  type="button"
                  onClick={() => playLine(i)}
                  // during role-play a manual replay would break the turn sequence
                  disabled={!tts || rolePlaying}
                  className="mt-1 inline-flex items-start gap-2 text-left font-display text-lg font-bold leading-snug hover:text-tangerine-deep disabled:hover:text-inherit"
                >
                  <Volume2 className="mt-1 size-4 shrink-0" aria-hidden />
                  <span lang="en">{l.en}</span>
                  <span className="sr-only">, bấm để nghe</span>
                </button>
                {showVi && <p className="mt-1 text-ink-soft">{l.vi}</p>}
                {score !== undefined && (
                  <p className="mt-1 text-sm font-semibold">{score === null ? "Không nhận được giọng nói" : `Khớp ${score}%`}</p>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      <section className="mt-8 rounded-2xl border-2 border-ink bg-sky p-5" aria-labelledby="roleplay">
        <h3 id="roleplay" className="font-display text-xl font-bold">Đóng vai</h3>
        <div aria-live="polite">
        {!stt ? (
          <p className="mt-2 text-ink-soft">Trình duyệt này chưa nhận được giọng nói. Hãy đọc to vai của bạn theo từng câu ở trên, dùng Chrome hoặc Edge để được chấm.</p>
        ) : mode === "listen" ? (
          <>
            <p className="mt-2 text-ink-soft">Chọn một vai. Máy đọc vai kia, đến lượt bạn thì bấm “Nói câu của tôi”.</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <button type="button" className="btn btn-ghost" onClick={() => startRole("A")}>Tôi là {step.roles.A}</button>
              <button type="button" className="btn btn-ghost" onClick={() => startRole("B")}>Tôi là {step.roles.B}</button>
            </div>
          </>
        ) : finishedRole ? (
          <div className="mt-2">
            <p className="font-semibold">Xong vai {roleName(mode)}.</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <button ref={actionRef} type="button" className="btn btn-ghost" onClick={() => startRole(mode === "A" ? "B" : "A")}>
                Đổi vai
              </button>
              <button type="button" className="btn btn-ghost" onClick={() => startRole(mode)}>Đóng vai lại</button>
            </div>
          </div>
        ) : myTurn ? (
          <div className="mt-2">
            <p>
              Đến lượt bạn: <strong lang="en">{step.lines[turn].en}</strong>
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <button ref={actionRef} type="button" className="btn btn-primary" onClick={sayMyLine} disabled={listening}>
                <Mic className="size-5" aria-hidden />
                {listening ? "Đang nghe…" : "Nói câu của tôi"}
              </button>
              <button type="button" className="btn btn-ghost" onClick={nextTurn}>
                {results[turn] !== undefined ? "Câu tiếp" : "Bỏ qua câu này"}
              </button>
            </div>
            {results[turn] !== undefined && (
              <p className="mt-2 font-semibold">
                {results[turn] === null ? "Không nhận được giọng nói, hãy thử lại." : `Khớp ${results[turn]}%`}
              </p>
            )}
          </div>
        ) : (
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <p className="text-ink-soft">Máy đang đọc lời của {roleName(step.lines[turn].speaker)}…</p>
            <button
              ref={actionRef}
              type="button"
              className="btn btn-ghost min-h-11 px-4 text-base"
              onClick={() => {
                cancelPlayback();
                advanceTo(turn + 1, mode);
              }}
            >
              Bỏ qua
            </button>
          </div>
        )}
        </div>
      </section>

      <button type="button" className="btn btn-ghost mt-8" onClick={onComplete} disabled={done}>
        {done && <Check className="size-5 text-leaf" aria-hidden />}
        Đã luyện xong hội thoại
      </button>
    </article>
  );
}
