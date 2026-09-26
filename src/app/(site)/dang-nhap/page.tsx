import type { Metadata } from "next";
import { LoginForm } from "@/components/login-form";

export const metadata: Metadata = { title: "Đăng nhập | Crouse English", robots: { index: false, follow: false } };

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-5xl font-extrabold leading-tight">Đăng nhập</h1>
      <p className="mt-4 text-lg text-ink-soft">Đăng nhập để mở lộ trình học riêng của bạn.</p>
      <LoginForm />
    </div>
  );
}
