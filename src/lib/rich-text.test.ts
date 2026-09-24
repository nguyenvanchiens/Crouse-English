import { describe, expect, it } from "vitest";
import { parseBold } from "./rich-text";

describe("parseBold", () => {
  it("splits **bold** segments", () => {
    expect(parseBold("Dùng **am** với I")).toEqual([
      { text: "Dùng ", bold: false },
      { text: "am", bold: true },
      { text: " với I", bold: false },
    ]);
  });
  it("handles several bold parts and leading bold", () => {
    expect(parseBold("**I** am, **you** are")).toEqual([
      { text: "I", bold: true },
      { text: " am, ", bold: false },
      { text: "you", bold: true },
      { text: " are", bold: false },
    ]);
  });
  it("leaves an unmatched marker as literal text", () => {
    expect(parseBold("a ** b")).toEqual([{ text: "a ** b", bold: false }]);
  });
  it("returns nothing for empty text", () => {
    expect(parseBold("")).toEqual([]);
  });
});
