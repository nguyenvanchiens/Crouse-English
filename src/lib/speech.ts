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

export function speak(
  text: string,
  { rate = 0.9, onStart, onEnd }: { rate?: number; onStart?: () => void; onEnd?: () => void } = {},
) {
  if (!canSpeak()) return;
  const synth = window.speechSynthesis;
  synth.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  u.rate = rate;
  const voice = synth.getVoices().find((v) => v.lang.startsWith("en-US") || v.lang.startsWith("en-GB"));
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
  rec.lang = "en-US";
  rec.interimResults = false;
  rec.maxAlternatives = 1;
  rec.onresult = (e) => onResult(e.results[0]?.[0]?.transcript ?? "");
  rec.onerror = (e) => onError(e.error);
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
