import { afterEach, describe, expect, it, vi } from "vitest";
import { listenOnce, pickVoice } from "./speech";

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
});
