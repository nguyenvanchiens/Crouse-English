import type { Metadata } from "next";
import Link from "next/link";
import { EmptyState } from "@/components/ui/empty-state";

export const metadata: Metadata = { title: "Không có mạng | Crouse English", robots: { index: false, follow: false } };

/** Shown by the service worker when a page is opened offline and was never saved on this device. */
export default function OfflinePage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-1 items-center px-4 py-20 sm:px-6">
      <EmptyState
        title="Không có kết nối mạng"
        body="Trang này chưa được lưu trên máy. Những trang bạn đã mở khi có mạng (Hôm nay, Tổng quan, Ôn từ vựng…) vẫn mở được; tiến độ học vẫn lưu trên máy và không mất."
      >
        <Link href="/hom-nay" className="btn btn-primary">Mở Hôm nay học gì</Link>
        <Link href="/" className="btn btn-ghost">Về trang chủ</Link>
      </EmptyState>
    </div>
  );
}
