import Link from "next/link";
import { Logo } from "./logo";

const NAV = [
  { href: "/khoa-hoc", label: "Khóa học" },
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
        <div className="flex items-center gap-3">
          <Link href="/cua-toi" className="font-semibold hover:text-tangerine-deep md:hidden">Của tôi</Link>
          <Link href="/hoc/giao-tiep-a1/chao-hoi" className="btn btn-primary min-h-11 px-4 text-base">
            Học thử miễn phí
          </Link>
        </div>
      </nav>
    </header>
  );
}
