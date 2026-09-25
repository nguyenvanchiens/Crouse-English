import type { Metadata } from "next";
import Link from "next/link";
import { IpaChart } from "@/components/ipa-chart";
import { IPA_SOUNDS } from "@/content/ipa";

export const metadata: Metadata = {
  title: "Bảng phiên âm IPA tiếng Anh có âm thanh | Crouse English",
  description: "44 âm tiếng Anh-Anh theo bảng IPA, có từ ví dụ để nghe, mẹo phát âm cho người Việt và cặp từ dễ nhầm.",
};

export default function IpaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-5xl font-extrabold leading-tight">Bảng phiên âm IPA</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-soft">
        44 âm của tiếng Anh-Anh. Bấm vào một ô để nghe từ ví dụ và xem cách đặt lưỡi, môi. Học thuộc bảng này, bạn tự đọc được
        phiên âm của mọi từ trong từ điển.
      </p>
      <p className="mt-3">
        Mới bắt đầu? Học khóa{" "}
        <Link href="/khoa-hoc/phat-am-ipa" className="font-semibold underline underline-offset-4 hover:text-tangerine-deep">
          Bước 0: Phát âm chuẩn với IPA
        </Link>{" "}
        trước khi vào A1.
      </p>
      <IpaChart sounds={IPA_SOUNDS} />
    </div>
  );
}
