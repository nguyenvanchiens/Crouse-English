import type { Metadata } from "next";
import { RewardsShop } from "@/components/rewards-shop";

export const metadata: Metadata = {
  title: "Đổi quà bằng điểm học | Crouse English",
  description: "Tích điểm khi học xong bài, ôn từ vựng và giữ chuỗi ngày học, rồi đổi lấy ảnh đại diện, danh hiệu, khung chứng chỉ và thẻ đóng băng chuỗi.",
};

export default function RewardsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-5xl font-extrabold leading-tight">Đổi quà</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-soft">
        Mỗi bài học, mỗi từ nhớ được và mỗi ngày học đều đặn đều mang lại điểm. Dùng điểm để đổi quà cho hồ sơ học của bạn, hoặc
        thẻ đóng băng để giữ chuỗi ngày học. Điểm lưu trên trình duyệt bạn đang dùng.
      </p>
      <RewardsShop />
    </div>
  );
}
