import { afterEach, describe, expect, it, vi } from "vitest";

describe("progress store cross-tab sync", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.resetModules();
  });

  it("drops its cache when another tab clears storage (key === null)", async () => {
    const store = new Map<string, string>();
    let onStorage: ((e: { key: string | null }) => void) | null = null;
    vi.stubGlobal("window", {
      localStorage: {
        getItem: (k: string) => store.get(k) ?? null,
        setItem: (k: string, v: string) => void store.set(k, v),
      },
      addEventListener: (_: string, fn: (e: { key: string | null }) => void) => (onStorage = fn),
      removeEventListener: () => {},
    });
    const mod = await import("./progress");
    const { STORAGE_KEY } = await import("./progress-core");
    mod.progress.enroll("tieng-anh-a1");
    const unsubscribe = mod.__test.subscribe(() => {});
    expect(mod.__test.read().enrolled).toEqual(["tieng-anh-a1"]);
    store.delete(STORAGE_KEY); // another tab ran localStorage.clear()
    onStorage!({ key: null });
    expect(mod.__test.read().enrolled).toEqual([]);
    unsubscribe();
  });
});
