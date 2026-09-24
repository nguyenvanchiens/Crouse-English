import { describe, expect, it } from "vitest";
import { certificateCode, formatDateVi } from "./format";

describe("formatDateVi", () => {
  it("formats as dd/mm/yyyy", () => {
    expect(formatDateVi("2026-09-24T12:00:00.000Z")).toBe("24/09/2026");
  });
});

describe("certificateCode", () => {
  it("is deterministic and well-formed", () => {
    const a = certificateCode("giao-tiep-a1", "Lan", "2026-09-24T12:00:00.000Z");
    expect(a).toMatch(/^CE-GIAO-TIEP-A1-[0-9A-Z]{6}$/);
    expect(certificateCode("giao-tiep-a1", "Lan", "2026-09-24T12:00:00.000Z")).toBe(a);
    expect(certificateCode("giao-tiep-a1", "Minh", "2026-09-24T12:00:00.000Z")).not.toBe(a);
  });
});
