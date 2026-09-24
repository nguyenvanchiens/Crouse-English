"use client";

import { useProgress } from "@/lib/progress";

export function PersistNotice() {
  const { ready, persistent } = useProgress();
  if (!ready || persistent) return null;
  return (
    <p role="status" className="rounded-2xl border-2 border-ink bg-sun-soft px-4 py-2 text-sm font-medium">
      Trình duyệt này không cho lưu dữ liệu, nên tiến độ sẽ mất khi bạn đóng trang.
    </p>
  );
}
