import { afterEach, describe, expect, it, vi } from "vitest";
import { listenOnce } from "./speech";

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
