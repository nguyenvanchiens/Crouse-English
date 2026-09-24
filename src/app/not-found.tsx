import Link from "next/link";
import { EmptyState } from "@/components/ui/empty-state";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center px-4 py-20 sm:px-6">
      <EmptyState title="Không tìm thấy trang này" body="Đường dẫn có thể đã thay đổi hoặc khóa học không còn nữa.">
        <Link href="/khoa-hoc" className="btn btn-primary">Xem các khóa học</Link>
        <Link href="/" className="btn btn-ghost">Về trang chủ</Link>
      </EmptyState>
    </main>
  );
}
