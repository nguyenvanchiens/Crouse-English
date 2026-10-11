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

const tag = (v: SpeechSynthesisVoice) => v.lang.replace("_", "-");

/*
 * iPhone and Mac list joke voices (Bubbles, Zarvox…), old MacinTalk voices (Fred, Ralph…) and the robotic
 * Eloquence voices (Eddy, Grandpa, Rocko…) next to the real ones, often first. Their identifiers are
 * com.apple.speech.synthesis.voice.* and com.apple.eloquence.*; other browsers only give the name.
 * Checked 2026-10-11 against an iOS voice list (gist asutekku/d5b09e52…).
 */
const POOR_URI = /speech\.synthesis\.voice|eloquence/i;
const POOR_NAMES = new Set([
  "Albert", "Bad News", "Bahh", "Bells", "Boing", "Bubbles", "Cellos", "Fred", "Good News", "Jester", "Junior", "Kathy", "Organ",
  "Ralph", "Superstar", "Trinoids", "Whisper", "Wobble", "Zarvox", "Eddy", "Flo", "Grandma", "Grandpa", "Reed", "Rocko", "Sandy", "Shelley",
]);
/**
 * Clear system voices, clearest first. The light female voices come before the deep male ones: on a phone
 * speaker the compact male voices (Arthur first of all, which iPhones list first for en-GB) sound muffled.
 */
const GOOD_ORDER = [
  "Serena", "Kate", "Martha", "Stephanie", "Samantha", "Ava", "Allison", "Susan", "Zoe", "Nicky", "Joelle", "Noelle",
  "Daniel", "Oliver", "Tom", "Evan", "Nathan", "Aaron", "Arthur",
];

const baseName = (v: SpeechSynthesisVoice) => v.name.replace(/\s*\(.*$/, "").trim();
const isPoor = (v: SpeechSynthesisVoice) => POOR_URI.test(v.voiceURI ?? "") || POOR_NAMES.has(baseName(v));

function voiceScore(v: SpeechSynthesisVoice, accent: Accent): number {
  const id = `${v.name} ${v.voiceURI ?? ""}`;
  let s = tag(v).startsWith(`en-${accent}`) ? 10 : 0;
  if (/premium/i.test(id)) s += 6;
  if (/enhanced/i.test(id)) s += 5;
  if (/natural|neural|online/i.test(id)) s += 5;
  if (/google/i.test(id)) s += 4;
  const good = GOOD_ORDER.indexOf(baseName(v));
  if (good >= 0) s += 3 - good * 0.1;
  if (v.default) s += 1;
  return s;
}

/** English voices fit for teaching, best first: the requested accent, then quality; joke and robotic voices left out. */
export function rankVoices(voices: SpeechSynthesisVoice[], accent: Accent): SpeechSynthesisVoice[] {
  return voices
    .filter((v) => tag(v).startsWith("en") && !isPoor(v))
    .sort((a, b) => voiceScore(b, accent) - voiceScore(a, accent));
}

/** The learner's chosen voice when this device has it, else the best ranked one. */
export function pickVoice(voices: SpeechSynthesisVoice[], accent: Accent, preferred?: string | null): SpeechSynthesisVoice | undefined {
  const ranked = rankVoices(voices, accent);
  return (preferred ? ranked.find((v) => v.voiceURI === preferred) : undefined) ?? ranked[0];
}

/* The voice chosen per accent, kept on this device. */
const VOICE_KEY = "ce:voice:v1";
type VoicePrefs = Partial<Record<Accent, string>>;
const voiceListeners = new Set<() => void>();
let prefsCache: VoicePrefs | null = null;

export function getVoicePrefs(): VoicePrefs {
  if (prefsCache) return prefsCache;
  try {
    const raw = JSON.parse(window.localStorage.getItem(VOICE_KEY) ?? "{}");
    prefsCache = typeof raw === "object" && raw ? Object.fromEntries(Object.entries(raw).filter(([k, v]) => (k === "GB" || k === "US") && typeof v === "string")) : {};
  } catch {
    prefsCache = {};
  }
  return prefsCache!;
}

export function setVoicePref(accent: Accent, voiceURI: string | null) {
  const next = { ...getVoicePrefs() };
  if (voiceURI) next[accent] = voiceURI;
  else delete next[accent];
  prefsCache = next;
  try {
    window.localStorage.setItem(VOICE_KEY, JSON.stringify(next));
  } catch {
    // private mode: the choice lasts for this visit
  }
  voiceListeners.forEach((l) => l());
}

/** Voices load late on Chrome and Android (getVoices() is empty at first): re-render when they arrive. */
const EMPTY: SpeechSynthesisVoice[] = [];
let voicesCache: SpeechSynthesisVoice[] = EMPTY;
const subscribeVoices = (cb: () => void) => {
  if (!canSpeak()) return () => {};
  const onChange = () => {
    voicesCache = window.speechSynthesis.getVoices();
    cb();
  };
  window.speechSynthesis.addEventListener("voiceschanged", onChange);
  voiceListeners.add(cb);
  return () => {
    window.speechSynthesis.removeEventListener("voiceschanged", onChange);
    voiceListeners.delete(cb);
  };
};
const readVoices = () => {
  if (!canSpeak()) return EMPTY;
  const now = window.speechSynthesis.getVoices();
  if (now.length !== voicesCache.length) voicesCache = now;
  return voicesCache;
};

/** The device's voices and the chosen ones, kept up to date. */
export function useVoices() {
  const voices = useSyncExternalStore(subscribeVoices, readVoices, () => EMPTY);
  const prefs = useSyncExternalStore(subscribeVoices, getVoicePrefs, () => ({}) as VoicePrefs);
  return { voices, prefs };
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
  const voice = pickVoice(synth.getVoices(), accent, getVoicePrefs()[accent]);
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
