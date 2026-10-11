"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { Download, Smartphone } from "lucide-react";

/** Chrome's install prompt event (not in the DOM typings) */
interface InstallPrompt extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const STANDALONE = "(display-mode: standalone)";
const subscribeStandalone = (cb: () => void) => {
  const m = window.matchMedia(STANDALONE);
  m.addEventListener("change", cb);
  return () => m.removeEventListener("change", cb);
};
const isStandalone = () => window.matchMedia(STANDALONE).matches || (navigator as Navigator & { standalone?: boolean }).standalone === true;
const noop = () => () => {};
const isIos = () => /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

/**
 * How to put the site on the phone's home screen as an app. Chrome and Edge on Android offer an install
 * button; Safari on iPhone has no prompt, so it gets the steps. Hidden when already opened as the app.
 */
export function InstallApp({ showWhenInstalled = false, withSteps = true }: { showWhenInstalled?: boolean; withSteps?: boolean }) {
  const standalone = useSyncExternalStore(subscribeStandalone, isStandalone, () => true);
  const ios = useSyncExternalStore(noop, isIos, () => false);
  const [prompt, setPrompt] = useState<InstallPrompt | null>(null);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const onPrompt = (e: Event) => {
      e.preventDefault();
      setPrompt(e as InstallPrompt);
    };
    const onInstalled = () => {
      setInstalled(true);
      setPrompt(null);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  if (standalone)
    return showWhenInstalled ? (
      <p role="status" className="clay p-6 text-lg font-semibold">Bạn đang mở Crouse English bằng app rồi. Học vui nhé!</p>
    ) : null;

  return (
    <section aria-labelledby="install-app" className="clay p-6 sm:p-8">
      <h2 id="install-app" className="flex items-center gap-2 font-display text-2xl font-bold">
        <Smartphone className="size-6 text-tangerine-deep" aria-hidden />
        Cài Crouse English lên điện thoại
      </h2>
      <p className="mt-2 max-w-3xl">
        Cài một lần là có biểu tượng trên màn hình chính, mở toàn màn hình như ứng dụng, và vẫn xem được các trang đã mở khi không có mạng. Tiến độ học dùng chung với
        trang web trên cùng trình duyệt đó.
      </p>
      {installed ? (
        <p role="status" className="mt-4 font-semibold">Đã cài xong. Mở Crouse từ màn hình chính để học.</p>
      ) : prompt ? (
        <button
          type="button"
          className="btn btn-primary mt-4"
          onClick={async () => {
            await prompt.prompt();
            const { outcome } = await prompt.userChoice;
            if (outcome === "accepted") setInstalled(true);
            setPrompt(null);
          }}
        >
          <Download className="size-5" aria-hidden />
          Cài app
        </button>
      ) : !withSteps ? (
        <p className="mt-4 font-semibold">{ios ? "Trên iPhone: làm theo các bước “Trên iPhone, iPad” bên dưới." : "Làm theo các bước bên dưới cho máy của bạn."}</p>
      ) : ios ? (
        <ol className="mt-4 list-decimal space-y-1.5 pl-6">
          <li>Mở trang này bằng Safari.</li>
          <li>Bấm nút Chia sẻ (hình vuông có mũi tên lên) ở thanh dưới.</li>
          <li>Chọn “Thêm vào Màn hình chính”, rồi bấm Thêm.</li>
        </ol>
      ) : (
        <ol className="mt-4 list-decimal space-y-1.5 pl-6">
          <li>Trên Android, mở trang này bằng Chrome.</li>
          <li>Bấm menu ⋮ ở góc trên bên phải.</li>
          <li>Chọn “Cài đặt ứng dụng” (hoặc “Thêm vào màn hình chính”).</li>
        </ol>
      )}
    </section>
  );
}
