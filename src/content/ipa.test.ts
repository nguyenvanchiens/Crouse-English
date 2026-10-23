import { describe, expect, it } from "vitest";
import { IPA_SOUNDS } from "./ipa";

describe("IPA chart data", () => {
  it("has the 44 phonemes of British English: 12 monophthongs, 8 diphthongs, 24 consonants", () => {
    expect(IPA_SOUNDS).toHaveLength(44);
    const n = (g: string) => IPA_SOUNDS.filter((x) => x.group === g).length;
    expect(n("short") + n("long")).toBe(12);
    expect(n("diphthong")).toBe(8);
    expect(n("consonant")).toBe(24);
  });
  it("has unique symbols and pairs that point at real symbols", () => {
    const symbols = new Set(IPA_SOUNDS.map((x) => x.symbol));
    expect(symbols.size).toBe(44);
    for (const x of IPA_SOUNDS) {
      if (!x.pair) continue;
      expect(symbols.has(x.pair.symbol), `${x.symbol} → ${x.pair.symbol}`).toBe(true);
      expect(x.pair.symbol, `${x.symbol} is paired with itself`).not.toBe(x.symbol);
      const [a, b] = x.pair.words.map((w) => w.toLowerCase());
      expect(a, `${x.symbol}: the pair needs two different words`).not.toBe(b);
    }
  });
  it("does not tell learners to release final stops (they are often unreleased; the closure must not be dropped)", () => {
    for (const x of IPA_SOUNDS.filter((s) => ["p", "b", "t", "d", "k", "ɡ"].includes(s.symbol))) {
      expect(x.tip, x.symbol).not.toMatch(/cuối từ[^.]*phải (bật|phát ra)/i);
      expect(x.tip, `${x.symbol} explains the end of a word`).toMatch(/cuối từ/i);
    }
  });
  it("gives every sound 3 examples whose transcription contains the sound", () => {
    for (const x of IPA_SOUNDS) {
      expect(x.examples, x.symbol).toHaveLength(3);
      for (const e of x.examples) {
        expect(e.ipa, `${x.symbol} in ${e.word}`).toMatch(/^\/.+\/$/);
        expect(e.ipa, `${x.symbol} in ${e.word}`).toContain(x.symbol);
      }
      expect(x.tip.length).toBeGreaterThan(20);
    }
  });
  it("marks voicing on consonants only", () => {
    for (const x of IPA_SOUNDS) {
      if (x.group === "consonant") expect(typeof x.voiced, x.symbol).toBe("boolean");
      else expect(x.voiced, x.symbol).toBeUndefined();
    }
  });
});
