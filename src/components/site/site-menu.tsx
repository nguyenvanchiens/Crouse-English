"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { auth, useAuth } from "@/lib/auth";

export interface NavItem { href: string; label: string }

/** only shown to a signed-in learner */
export const MY_PLAN: NavItem = { href: "/lo-trinh-cua-toi", label: "Lộ trình của tôi" };
export const MY_TODAY: NavItem = { href: "/hom-nay", label: "Hôm nay học gì" };
export const MY_CALENDAR: NavItem = { href: "/lich-hoc", label: "Lịch học tới C1" };

export const isActive = (pathname: string, href: string) => pathname === href || pathname.startsWith(href + "/");

/** The one-line menu for wide screens (xl and up). */
export function NavLinks({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  return (
    <ul className="hidden items-center gap-5 font-semibold xl:flex">
      {items.map((n) => (
        <li key={n.href}>
          <Link
            href={n.href}
            aria-current={isActive(pathname, n.href) ? "page" : undefined}
            className="whitespace-nowrap hover:text-tangerine-deep aria-[current=page]:underline aria-[current=page]:decoration-tangerine-deep aria-[current=page]:decoration-[3px] aria-[current=page]:underline-offset-8"
          >
            {n.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Open state for a header drop-down: closes on Esc (focus back to the button), an outside click, or navigation. */
export function usePopover() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openedAt, setOpenedAt] = useState(pathname);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // navigating to another page closes the menu
  const shown = open && openedAt === pathname;

  useEffect(() => {
    if (!shown) return;
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!panelRef.current?.contains(t) && !buttonRef.current?.contains(t)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [shown]);

  return {
    pathname,
    shown,
    buttonRef,
    panelRef,
    toggle: () => {
      setOpenedAt(pathname);
      setOpen(!shown);
    },
    close: () => setOpen(false),
  };
}

export const PANEL_CLASS =
  "absolute inset-x-4 top-full mt-2 rounded-[1.5rem] border-[2.5px] border-ink bg-card p-3 shadow-[0_6px_0_0_var(--color-ink)] sm:left-auto sm:right-6 sm:w-72";
export const ITEM_CLASS = "flex min-h-11 w-full items-center rounded-xl px-4 text-left font-semibold hover:bg-sun-soft aria-[current=page]:bg-sun";

/** Menu button and drop-down panel for screens narrower than xl. */
export function SiteMenu({ items }: { items: NavItem[] }) {
  const { pathname, shown, buttonRef, panelRef, toggle, close } = usePopover();
  const { session } = useAuth();
  const all = session ? [MY_TODAY, MY_CALENDAR, MY_PLAN, ...items] : items;

  return (
    <div className="xl:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={toggle}
        aria-expanded={shown}
        aria-controls="site-menu"
        aria-label={shown ? "Đóng menu" : "Mở menu"}
        className="grid size-11 place-items-center rounded-full border-2 border-ink bg-card hover:bg-sun-soft"
      >
        {shown ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
      </button>
      {shown && (
        <div ref={panelRef} id="site-menu" className={PANEL_CLASS}>
          <ul className="grid gap-1">
            {all.map((n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={close} aria-current={isActive(pathname, n.href) ? "page" : undefined} className={ITEM_CLASS}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-2 border-t-2 border-ink/15 pt-2">
            {session ? (
              <button
                type="button"
                className={ITEM_CLASS}
                onClick={() => {
                  auth.logout();
                  close();
                }}
              >
                Đăng xuất ({session.user})
              </button>
            ) : (
              <Link href="/dang-nhap" onClick={close} aria-current={isActive(pathname, "/dang-nhap") ? "page" : undefined} className={ITEM_CLASS}>
                Đăng nhập
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
