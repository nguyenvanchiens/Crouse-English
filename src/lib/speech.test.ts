import { afterEach, describe, expect, it, vi } from "vitest";
import { isEnglish, listenOnce, pickVoice, rankVoices } from "./speech";

type Handlers = { onerror: ((e: { error: string }) => void) | null; onend: (() => void) | null };

describe("listenOnce", () => {
  afterEach(() => vi.unstubAllGlobals());

  it("does not report the 'aborted' error caused by stopping a recording", () => {
    let rec: Handlers | null = null;
    class FakeRecognition {
      lang = ""; interimResults = false; maxAlternatives = 1;
      onresult = null; onerror = null; onend = null;
      constructor() { rec = this as unknown as Handlers; }
      start() {}
      abort() { rec?.onerror?.({ error: "aborted" }); rec?.onend?.(); }
    }
    vi.stubGlobal("window", { webkitSpeechRecognition: FakeRecognition });
    const onError = vi.fn();
    const stop = listenOnce({ onResult: () => {}, onError });
    stop();
    expect(onError).not.toHaveBeenCalled();
  });

  it("still reports real errors", () => {
    let rec: Handlers | null = null;
    class FakeRecognition {
      lang = ""; interimResults = false; maxAlternatives = 1;
      onresult = null; onerror = null; onend = null;
      constructor() { rec = this as unknown as Handlers; }
      start() {}
      abort() {}
    }
    vi.stubGlobal("window", { webkitSpeechRecognition: FakeRecognition });
    const onError = vi.fn();
    listenOnce({ onResult: () => {}, onError });
    rec!.onerror?.({ error: "not-allowed" });
    expect(onError).toHaveBeenCalledWith("not-allowed");
  });
});

describe("pickVoice", () => {
  const v = (lang: string, name = lang) => ({ lang, name }) as SpeechSynthesisVoice;
  it("prefers a voice of the requested accent", () => {
    const voices = [v("en-US"), v("en-GB"), v("vi-VN")];
    expect(pickVoice(voices, "GB")?.lang).toBe("en-GB");
    expect(pickVoice(voices, "US")?.lang).toBe("en-US");
  });
  it("falls back to any English voice, else none", () => {
    expect(pickVoice([v("vi-VN"), v("en-AU")], "GB")?.lang).toBe("en-AU");
    expect(pickVoice([v("vi-VN")], "GB")).toBeUndefined();
  });
  it("accepts underscore language tags used by some Android browsers", () => {
    expect(pickVoice([v("en_US"), v("en_GB")], "GB")?.lang).toBe("en_GB");
  });

  // the English voices an iPhone lists, in the order it lists them
  const ios = (lang: string, name: string, voiceURI: string) => ({ lang, name, voiceURI, default: false }) as SpeechSynthesisVoice;
  const iphone = [
    ios("en-GB", "Arthur", "com.apple.ttsbundle.siri_Arthur_en-GB_compact"),
    ios("en-GB", "Grandpa", "com.apple.eloquence.en-GB.Grandpa"),
    ios("en-GB", "Rocko", "com.apple.eloquence.en-GB.Rocko"),
    ios("en-GB", "Daniel", "com.apple.voice.compact.en-GB.Daniel"),
    ios("en-GB", "Eddy", "com.apple.eloquence.en-GB.Eddy"),
    ios("en-GB", "Martha", "com.apple.ttsbundle.siri_Martha_en-GB_compact"),
    ios("en-US", "Albert", "com.apple.speech.synthesis.voice.Albert"),
    ios("en-US", "Zarvox", "com.apple.speech.synthesis.voice.Zarvox"),
    ios("en-US", "Fred", "com.apple.speech.synthesis.voice.Fred"),
    ios("en-US", "Samantha", "com.apple.voice.compact.en-US.Samantha"),
    ios("en-GB", "Serena (Enhanced)", "com.apple.voice.enhanced.en-GB.Serena"),
  ];
  it("never picks the joke, MacinTalk or Eloquence voices an iPhone lists", () => {
    const gb = rankVoices(iphone, "GB").map((x) => x.name);
    expect(gb).not.toContain("Grandpa");
    expect(gb).not.toContain("Rocko");
    expect(gb).not.toContain("Eddy");
    expect(rankVoices(iphone, "US").map((x) => x.name)).not.toEqual(expect.arrayContaining(["Albert", "Zarvox", "Fred"]));
    // without the voiceURI (other browsers give only the name) the names still give them away
    expect(rankVoices([v("en-GB", "Grandpa"), v("en-GB", "Shelley (English (UK))")], "GB")).toEqual([]);
  });
  it("prefers an enhanced voice of the right accent, then the standard good ones", () => {
    expect(pickVoice(iphone, "GB")?.name).toBe("Serena (Enhanced)");
    // without it, a clear voice beats Arthur, the deep compact voice iPhones list first
    expect(pickVoice(iphone.filter((x) => !/Enhanced/.test(x.name)), "GB")?.name).toBe("Martha");
    expect(pickVoice(iphone.filter((x) => !/Enhanced|Martha/.test(x.name)), "GB")?.name).toBe("Daniel");
    expect(pickVoice(iphone, "US")?.name).toBe("Samantha");
  });
  it("uses the learner's chosen voice when this device has it", () => {
    expect(pickVoice(iphone, "GB", "com.apple.voice.compact.en-GB.Daniel")?.name).toBe("Daniel");
    expect(pickVoice(iphone, "GB", "gone")?.name).toBe("Serena (Enhanced)");
    // a poor voice cannot be chosen even if stored
    expect(pickVoice(iphone, "GB", "com.apple.eloquence.en-GB.Grandpa")?.name).toBe("Serena (Enhanced)");
  });
});

describe("isEnglish", () => {
  it("reads English words, options and sentences", () => {
    for (const t of ["friend", "I'm", "He isn't here.", "he / she / it", "Yes, I am.", "living room"]) expect(isEnglish(t)).toBe(true);
  });
  it("leaves Vietnamese, IPA and numbers silent", () => {
    for (const t of ["bạn bè", "Một tách trà", "Khẳng định", "I (tôi)", "/iː/ (i)", "/eɪ/ (ây)", "ˈkʌmf.tə.bəl", "15", ""]) expect(isEnglish(t)).toBe(false);
  });
});
