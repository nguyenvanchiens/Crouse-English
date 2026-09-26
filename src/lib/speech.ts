"use client";

import { useSyncExternalStore } from "react";

interface RecognitionLike {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  start(): void;
  abort(): void;
  onresult: ((e: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null;
  onerror: ((e: { error: string }) => void) | null;
  onend: (() => void) | null;
}
type RecognitionCtor = new () => RecognitionLike;

export function canSpeak(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

function getRecognitionCtor(): RecognitionCtor | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as { SpeechRecognition?: RecognitionCtor; webkitSpeechRecognition?: RecognitionCtor };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

export type Accent = "US" | "GB";

/** Prefer a voice of the requested accent, then any English voice. */
export function pickVoice(voices: SpeechSynthesisVoice[], accent: Accent): SpeechSynthesisVoice | undefined {
  const tag = (v: SpeechSynthesisVoice) => v.lang.replace("_", "-");
  return voices.find((v) => tag(v).startsWith(`en-${accent}`)) ?? voices.find((v) => tag(v).startsWith("en"));
}

let defaultAccent: Accent = "US";

/** The pronunciation course and IPA chart teach British (RP) sounds, so they switch the default voice to en-GB. */
export function setDefaultAccent(accent: Accent) {
  defaultAccent = accent;
}

export function speak(
  text: string,
  {
    rate = 0.9,
    accent = defaultAccent,
    onStart,
    onEnd,
  }: { rate?: number; accent?: Accent; onStart?: () => void; onEnd?: () => void } = {},
) {
  if (!canSpeak()) return;
  const synth = window.speechSynthesis;
  synth.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = `en-${accent}`;
  u.rate = rate;
  const voice = pickVoice(synth.getVoices(), accent);
  if (voice) u.voice = voice;
  u.onstart = () => onStart?.();
  u.onend = () => onEnd?.();
  u.onerror = () => onEnd?.();
  synth.speak(u);
}

export function stopSpeaking() {
  if (canSpeak()) window.speechSynthesis.cancel();
}

export function listenOnce({
  onResult,
  onError,
  onEnd,
}: {
  onResult: (text: string) => void;
  onError: (code: string) => void;
  onEnd?: () => void;
}): () => void {
  const Ctor = getRecognitionCtor();
  if (!Ctor) {
    onError("not-supported");
    onEnd?.();
    return () => {};
  }
  const rec = new Ctor();
  // match the voice the learner is imitating (en-GB in the pronunciation course)
  rec.lang = `en-${defaultAccent}`;
  rec.interimResults = false;
  rec.maxAlternatives = 1;
  rec.onresult = (e) => onResult(e.results[0]?.[0]?.transcript ?? "");
  // "aborted" is what we cause ourselves when stop() is called; not a learner-facing error
  rec.onerror = (e) => {
    if (e.error !== "aborted") onError(e.error);
  };
  rec.onend = () => onEnd?.();
  try {
    rec.start();
  } catch {
    onError("start-failed");
    onEnd?.();
  }
  return () => rec.abort();
}

const noopSubscribe = () => () => {};

export function useSpeechSupport() {
  const tts = useSyncExternalStore(noopSubscribe, canSpeak, () => true);
  const stt = useSyncExternalStore(noopSubscribe, () => getRecognitionCtor() !== null, () => true);
  return { tts, stt };
}
