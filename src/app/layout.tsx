import type { Metadata, Viewport } from "next";
import { Baloo_2, Be_Vietnam_Pro } from "next/font/google";
import { ServiceWorker } from "@/components/service-worker";
import { GoalToast } from "@/components/learner/goal-toast";
import "./globals.css";

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700", "800"],
});

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Crouse English — Học tiếng Anh miễn phí từ A1 đến C1",
  description:
    "Lộ trình tiếng Anh miễn phí từ A1 đến C1 cho người Việt: bài giảng tiếng Việt, bài tập chấm ngay, luyện phát âm và chứng chỉ từng cấp.",
  // installed to the home screen (see app/manifest.ts): the iPhone reads these instead of the manifest
  appleWebApp: { capable: true, title: "Crouse", statusBarStyle: "default" },
  icons: { apple: "/icons/apple-touch-icon.png" },
};

// cover: the phone tab bar pads itself by the home-indicator inset (env(safe-area-inset-bottom))
export const viewport: Viewport = { themeColor: "#ff8a3d", viewportFit: "cover" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      data-scroll-behavior="smooth"
      className={`${baloo.variable} ${beVietnam.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <GoalToast />
        <ServiceWorker />
      </body>
    </html>
  );
}
