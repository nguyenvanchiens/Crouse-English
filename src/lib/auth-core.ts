/**
 * A personal sign-in for the owner's own study plan. The site is static, so this only decides what the
 * browser shows; it is not access control (the plan still ships in the page's JavaScript).
 * Passwords are kept as SHA-256 hashes so they do not appear in the bundle as plain text.
 */
export const AUTH_KEY = "ce:auth:v1";

/** username -> sha256("crouse-english:<username>:<password>") */
export const ACCOUNTS: Record<string, string> = {
  admin: "729a609c1936efd39dac2bf43dd84b92f1127d159511186c3ac6aa9bbbe23e20",
};

export interface Session { user: string; at: string }

export async function hashCredentials(user: string, password: string): Promise<string> {
  const data = new TextEncoder().encode(`crouse-english:${user}:${password}`);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

/** The signed-in username, or null when the name or password is wrong. */
export async function checkCredentials(user: string, password: string): Promise<string | null> {
  const name = user.trim().toLowerCase();
  const expected = Object.hasOwn(ACCOUNTS, name) ? ACCOUNTS[name] : undefined;
  if (!expected) return null;
  return (await hashCredentials(name, password)) === expected ? name : null;
}

export function parseSession(raw: string | null): Session | null {
  if (!raw) return null;
  try {
    const d: unknown = JSON.parse(raw);
    if (typeof d !== "object" || d === null) return null;
    const { user, at } = d as Record<string, unknown>;
    return typeof user === "string" && Object.hasOwn(ACCOUNTS, user) && typeof at === "string" ? { user, at } : null;
  } catch {
    return null;
  }
}
