import Link from "next/link";
import { Logo } from "./logo";

const LINKS = [
  { href: "/khoa-hoc", label: "Khóa học" },
  { href: "/ngu-phap", label: "Sổ tay ngữ pháp" },
  { href: "/kiem-tra-trinh-do", label: "Kiểm tra trình độ" },
  { href: "/cua-toi", label: "Khóa học của tôi" },
];

export function SiteFooter() {
  return (
    <footer className="border-t-[2.5px] border-ink bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Logo />
        <nav aria-label="Liên kết cuối trang">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-semibold">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-11 items-center hover:text-tangerine-deep">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-sm text-ink-soft">© 2026 Crouse English</p>
      </div>
    </footer>
  );
}
