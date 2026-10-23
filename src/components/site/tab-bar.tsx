"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Gamepad2, House, Languages, UserRound, type LucideIcon } from "lucide-react";
import { isActive } from "./site-menu";

const TABS: { href: string; label: string; icon: LucideIcon }[] = [
  { href: "/", label: "Trang chủ", icon: House },
  { href: "/khoa-hoc", label: "Khóa học", icon: BookOpen },
  { href: "/tro-choi", label: "Trò chơi", icon: Gamepad2 },
  { href: "/tu-vung", label: "Từ vựng", icon: Languages },
  { href: "/cua-toi", label: "Của tôi", icon: UserRound },
];

/**
 * The app-style tab bar along the bottom of a phone screen (below md), so the main sections are one thumb
 * tap away, as in an installed app. The site menu keeps every page; this is the shortcut to the main five.
 */
export function TabBar() {
  const pathname = usePathname();
  return (
    <>
      <nav
        aria-label="Điều hướng nhanh"
        className="fixed inset-x-0 bottom-0 z-30 border-t-[2.5px] border-ink bg-card/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden print:hidden"
      >
        <ul className="mx-auto grid max-w-md grid-cols-5">
          {TABS.map((t) => {
            const on = t.href === "/" ? pathname === "/" : isActive(pathname, t.href);
            const Icon = t.icon;
            return (
              <li key={t.href}>
                <Link
                  href={t.href}
                  aria-current={on ? "page" : undefined}
                  className="group flex min-h-16 flex-col items-center justify-center gap-0.5 text-[0.8125rem] font-semibold text-ink-soft aria-[current=page]:text-ink"
                >
                  <span className="grid h-8 w-12 place-items-center rounded-full transition-colors group-aria-[current=page]:bg-sun">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  {t.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* keeps the end of the page (the footer) clear of the fixed bar */}
      <div aria-hidden className="h-[calc(4.25rem+env(safe-area-inset-bottom))] md:hidden print:hidden" />
    </>
  );
}
