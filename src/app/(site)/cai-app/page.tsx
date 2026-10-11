import type { Metadata } from "next";
import { InstallApp } from "@/components/install-app";

export const metadata: Metadata = {
  title: "Cài app Crouse English lên điện thoại | Crouse English",
  description: "Cài Crouse English lên màn hình chính của điện thoại Android hoặc iPhone: mở toàn màn hình như ứng dụng, miễn phí, không cần tài khoản.",
};

const FAQ = [
  {
    q: "Có mất phí hay cần tài khoản không?",
    a: "Không. App là chính trang web này được cài lên màn hình chính, miễn phí, không cần đăng nhập hay tải từ cửa hàng ứng dụng.",
  },
  {
    q: "Tiến độ học có bị mất không?",
    a: "Tiến độ được lưu trên máy, trong trình duyệt đã dùng để cài. Trên Android, app dùng chung tiến độ với Chrome. Trên iPhone, app có bộ nhớ riêng, nên tiến độ học trong tab Safari trước đó không tự chuyển sang app.",
  },
  {
    q: "App có tự cập nhật không?",
    a: "Có. Mỗi khi có bài hay tính năng mới, mở app lúc có mạng là có bản mới; nếu chưa thấy, đóng hẳn app rồi mở lại.",
  },
  {
    q: "Không có mạng có học được không?",
    a: "Những trang đã mở khi có mạng vẫn xem lại được. Trang chưa mở bao giờ thì cần có mạng.",
  },
  {
    q: "Gỡ app thế nào?",
    a: "Nhấn giữ biểu tượng Crouse trên màn hình chính rồi chọn Gỡ (Android) hoặc Xóa ứng dụng (iPhone).",
  },
];

export default function InstallPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">Cài app lên điện thoại</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-soft">
        Cài Crouse English lên màn hình chính: có biểu tượng riêng, mở toàn màn hình như ứng dụng, xem lại được trang đã mở khi không có mạng. Miễn phí, không cần
        tài khoản.
      </p>

      <div className="mt-8">
        <InstallApp showWhenInstalled withSteps={false} />
      </div>

      <section aria-labelledby="android" className="mt-10">
        <h2 id="android" className="font-display text-2xl font-extrabold">Trên Android</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-6 text-lg">
          <li>Mở trang này bằng Chrome.</li>
          <li>Bấm nút “Cài app” ở trên. Nếu không thấy nút, bấm menu ⋮ ở góc trên bên phải.</li>
          <li>Chọn “Cài đặt ứng dụng” (hoặc “Thêm vào màn hình chính”), rồi bấm Cài đặt.</li>
          <li>Mở Crouse từ màn hình chính.</li>
        </ol>
      </section>

      <section aria-labelledby="iphone" className="mt-8">
        <h2 id="iphone" className="font-display text-2xl font-extrabold">Trên iPhone, iPad</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-6 text-lg">
          <li>Mở trang này bằng Safari (iPhone chỉ cài được từ Safari).</li>
          <li>Bấm nút Chia sẻ (hình vuông có mũi tên lên) ở thanh dưới.</li>
          <li>Kéo xuống, chọn “Thêm vào Màn hình chính”, rồi bấm Thêm.</li>
          <li>Mở Crouse từ màn hình chính.</li>
        </ol>
      </section>

      <section aria-labelledby="faq" className="mt-10">
        <h2 id="faq" className="font-display text-2xl font-extrabold">Câu hỏi thường gặp</h2>
        <div className="mt-4 space-y-3">
          {FAQ.map((f) => (
            <details key={f.q} className="clay px-5 py-1">
              <summary className="flex min-h-12 cursor-pointer items-center font-semibold">{f.q}</summary>
              <p className="pb-4 text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
