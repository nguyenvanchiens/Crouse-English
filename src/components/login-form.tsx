"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { auth, useAuth } from "@/lib/auth";

export function LoginForm() {
  const { session, ready } = useAuth();
  const router = useRouter();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);

  if (!ready) return <div className="clay mt-8 h-72 animate-pulse bg-card" aria-hidden />;

  if (session) {
    return (
      <div className="clay mt-8 p-6 sm:p-8">
        <p className="text-lg">
          Bạn đang đăng nhập với tên <strong>{session.user}</strong>.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/lo-trinh-cua-toi" className="btn btn-primary">Mở lộ trình của tôi</Link>
          <button type="button" className="btn btn-ghost" onClick={() => auth.logout()}>Đăng xuất</button>
        </div>
      </div>
    );
  }

  return (
    <form
      className="clay mt-8 grid gap-5 p-6 sm:p-8"
      onSubmit={async (e) => {
        e.preventDefault();
        setBusy(true);
        const ok = await auth.login(user, password);
        setBusy(false);
        if (ok) router.push("/lo-trinh-cua-toi");
        else {
          setError(true);
          setPassword("");
        }
      }}
    >
      <label>
        <span className="block font-semibold">Tên đăng nhập</span>
        <input
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
            setError(false);
          }}
          autoComplete="username"
          autoCapitalize="none"
          spellCheck={false}
          required
          aria-invalid={error || undefined}
          aria-describedby={error ? "login-error" : undefined}
          className="mt-2 w-full rounded-xl border-[2.5px] border-ink bg-card px-4 py-2.5 text-lg"
        />
      </label>
      <label>
        <span className="block font-semibold">Mật khẩu</span>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError(false);
          }}
          autoComplete="current-password"
          required
          aria-invalid={error || undefined}
          aria-describedby={error ? "login-error" : undefined}
          className="mt-2 w-full rounded-xl border-[2.5px] border-ink bg-card px-4 py-2.5 text-lg"
        />
      </label>
      <div role="alert">
        {error && (
          <p id="login-error" className="rounded-xl border-2 border-ink bg-sun-soft px-4 py-2.5 font-semibold">
            Sai tên đăng nhập hoặc mật khẩu.
          </p>
        )}
      </div>
      <button type="submit" className="btn btn-primary justify-self-start" disabled={busy || !user.trim() || !password}>
        {busy ? "Đang kiểm tra…" : "Đăng nhập"}
      </button>
      <p className="text-sm text-ink-soft">Đăng nhập chỉ lưu trên trình duyệt này. Không cần đăng nhập vẫn học được mọi khóa học.</p>
    </form>
  );
}
