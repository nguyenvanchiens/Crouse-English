import { describe, expect, it } from "vitest";
import { SENTENCE_DRILLS } from "@/content/my-plan";
import { ACCOUNTS, checkCredentials, hashCredentials, parseSession } from "./auth-core";
import { parsePlan } from "./my-plan";

describe("checkCredentials", () => {
  it("accepts the owner's name and password, ignoring case and spaces around the name", async () => {
    expect(await checkCredentials("admin", "develop1")).toBe("admin");
    expect(await checkCredentials("  Admin ", "develop1")).toBe("admin");
  });
  it("rejects a wrong password, an unknown name and inherited object keys", async () => {
    expect(await checkCredentials("admin", "Develop1")).toBeNull();
    expect(await checkCredentials("admin", "")).toBeNull();
    expect(await checkCredentials("guest", "develop1")).toBeNull();
    expect(await checkCredentials("constructor", "x")).toBeNull();
  });
  it("keeps only hashes, never the password itself", async () => {
    expect(JSON.stringify(ACCOUNTS)).not.toContain("develop1");
    expect(ACCOUNTS.admin).toBe(await hashCredentials("admin", "develop1"));
  });
});

describe("parseSession", () => {
  it("reads a saved session and drops anything else", () => {
    expect(parseSession(JSON.stringify({ user: "admin", at: "2026-09-26T00:00:00Z" }))).toEqual({ user: "admin", at: "2026-09-26T00:00:00Z" });
    expect(parseSession(JSON.stringify({ user: "someone", at: "x" }))).toBeNull();
    expect(parseSession(JSON.stringify({ user: "admin" }))).toBeNull();
    expect(parseSession("{bad")).toBeNull();
    expect(parseSession(null)).toBeNull();
  });
});

describe("personal plan", () => {
  it("parses ticks robustly", () => {
    expect(parsePlan(JSON.stringify({ done: ["g:a", "g:a", 3, "d:b"] }))).toEqual(["g:a", "d:b"]);
    expect(parsePlan("[]")).toEqual([]);
    expect(parsePlan("nope")).toEqual([]);
  });
  it("has drills whose chunks rebuild the sentence", () => {
    expect(new Set(SENTENCE_DRILLS.map((d) => d.id)).size).toBe(SENTENCE_DRILLS.length);
    for (const d of SENTENCE_DRILLS) expect(d.chunks.join(" "), d.id).toBe(d.en.replace(/\.$/, ""));
  });
});
