import Link from "next/link";
import { Logo } from "./logo";

const LINKS = [
  { href: "/khoa-hoc", label: "Khóa học" },
  { href: "/ngu-phap", label: "Sổ tay ngữ pháp" },
  { href: "/bang-ipa", label: "Bảng IPA" },
  { href: "/kiem-tra-trinh-do", label: "Kiểm tra trình độ" },
  { href: "/cua-toi", label: "Khóa học của tôi" },
];

/** Logo and links on one row (stacked on a phone), the copyright on a strip below. Installing the app is in the account menu. */
export function SiteFooter() {
  return (
    <footer className="border-t-[2.5px] border-ink bg-card">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <Logo />
          <nav aria-label="Liên kết cuối trang">
            <ul className="flex flex-wrap gap-x-6 gap-y-1 font-semibold">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-flex min-h-11 items-center whitespace-nowrap hover:text-tangerine-deep">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-8 flex flex-col gap-1 border-t-2 border-ink/10 pt-6 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Crouse English</p>
          <p>Học tiếng Anh miễn phí từ A1 đến C1, cho người Việt.</p>
        </div>
      </div>
    </footer>
  );
}
