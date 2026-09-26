import Link from "next/link";
import { AccountMenu } from "./account-menu";
import { Logo } from "./logo";
import { PointsPill } from "@/components/points";
import { NavLinks, SiteMenu, type NavItem } from "./site-menu";

export const NAV: NavItem[] = [
  { href: "/bat-dau", label: "Bắt đầu" },
  { href: "/khoa-hoc", label: "Khóa học" },
  { href: "/ngu-phap", label: "Ngữ pháp" },
  { href: "/bang-ipa", label: "Bảng IPA" },
  { href: "/tu-vung", label: "Từ vựng" },
  { href: "/kiem-tra-trinh-do", label: "Kiểm tra trình độ" },
  { href: "/cua-toi", label: "Khóa học của tôi" },
  { href: "/doi-qua", label: "Đổi quà" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b-[2.5px] border-ink bg-sky/90 backdrop-blur">
      <nav aria-label="Menu chính" className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo />
        {/* one line only from xl up; "Khóa học của tôi" moves into the account menu on the right */}
        <NavLinks items={NAV.filter((n) => n.href !== "/cua-toi" && n.href !== "/doi-qua")} />
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <PointsPill />
          <AccountMenu />
          <Link href="/bat-dau" className="btn btn-primary min-h-11 whitespace-nowrap px-3 text-base sm:px-4">
            <span className="sm:hidden">Bắt đầu</span>
            <span className="hidden sm:inline">Bắt đầu học</span>
          </Link>
          <SiteMenu items={NAV} />
        </div>
      </nav>
    </header>
  );
}
