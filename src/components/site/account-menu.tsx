"use client";

import Link from "next/link";
import { UserRound, UserRoundCheck } from "lucide-react";
import { auth, useAuth } from "@/lib/auth";
import { ITEM_CLASS, MY_CALENDAR, MY_PLAN, MY_TODAY, PANEL_CLASS, isActive, usePopover, type NavItem } from "./site-menu";

/** The account button on wide screens (xl and up); narrower screens get the same items in the site menu. */
export function AccountMenu() {
  const { pathname, shown, buttonRef, panelRef, toggle, close } = usePopover();
  const { session } = useAuth();
  const links: NavItem[] = session
    ? [MY_TODAY, MY_CALENDAR, MY_PLAN, { href: "/cua-toi", label: "Khóa học của tôi" }]
    : [{ href: "/cua-toi", label: "Khóa học của tôi" }, { href: "/dang-nhap", label: "Đăng nhập" }];
  const Icon = session ? UserRoundCheck : UserRound;

  return (
    <div className="hidden xl:block">
      <button
        ref={buttonRef}
        type="button"
        onClick={toggle}
        aria-expanded={shown}
        aria-controls="account-menu"
        aria-label={session ? `Tài khoản: ${session.user}` : "Tài khoản"}
        title="Tài khoản"
        className={`grid size-11 place-items-center rounded-full border-2 border-ink hover:bg-sun-soft ${session ? "bg-leaf-soft" : "bg-card"}`}
      >
        <Icon className="size-5" aria-hidden />
      </button>
      {shown && (
        <div ref={panelRef} id="account-menu" className={PANEL_CLASS}>
          {session && <p className="px-4 pb-2 pt-1 text-sm text-ink-soft">Đang đăng nhập: <strong className="text-ink">{session.user}</strong></p>}
          <ul className="grid gap-1">
            {links.map((n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={close} aria-current={isActive(pathname, n.href) ? "page" : undefined} className={ITEM_CLASS}>
                  {n.label}
                </Link>
              </li>
            ))}
            {session && (
              <li className="mt-1 border-t-2 border-ink/15 pt-1">
                <button
                  type="button"
                  className={ITEM_CLASS}
                  onClick={() => {
                    auth.logout();
                    close();
                  }}
                >
                  Đăng xuất
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
