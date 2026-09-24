import Link from "next/link";
import { UserRound } from "lucide-react";
import { Logo } from "./logo";

const NAV = [
  { href: "/khoa-hoc", label: "Khóa học" },
  { href: "/ngu-phap", label: "Ngữ pháp" },
  { href: "/kiem-tra-trinh-do", label: "Kiểm tra trình độ" },
  { href: "/cua-toi", label: "Khóa học của tôi" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b-[2.5px] border-ink bg-sky/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo />
        <ul className="hidden items-center gap-7 font-semibold md:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <Link className="hover:text-tangerine-deep" href={n.href}>{n.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/cua-toi"
            aria-label="Khóa học của tôi"
            className="grid size-11 place-items-center rounded-full border-2 border-ink bg-card hover:bg-sun-soft md:hidden"
          >
            <UserRound className="size-5" aria-hidden />
          </Link>
          <Link href="/hoc/tieng-anh-a1/chao-hoi-va-gioi-thieu" className="btn btn-primary min-h-11 whitespace-nowrap px-3 text-base sm:px-4">
            <span className="sm:hidden">Học ngay</span>
            <span className="hidden sm:inline">Bắt đầu từ A1</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
