"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/** shown once the page has been scrolled this many screens down */
const SHOW_AFTER = 1;

/**
 * A round "back to the top" button, once a long page has been scrolled about a screen down. On a phone it sits
 * just above the tab bar. It scrolls smoothly (instantly with reduced motion, via the root scroll-behavior) and
 * then puts keyboard focus at the top of the page.
 */
export function BackToTop() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > window.innerHeight * SHOW_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    window.scrollTo({ top: 0 });
    // focus the first thing on the page, so the next Tab starts from the top too (without scrolling again)
    document.querySelector<HTMLElement>("header a, header button")?.focus({ preventScroll: true });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Lên đầu trang"
      title="Lên đầu trang"
      // hidden: out of the tab order and of what a screen reader reads
      inert={!shown}
      className={`fixed right-4 z-30 grid size-12 place-items-center rounded-full border-[2.5px] border-ink bg-card shadow-[0_4px_0_0_var(--color-ink)] transition-[opacity,transform] duration-200 hover:bg-sun-soft active:translate-y-0.5 active:shadow-none print:hidden bottom-[calc(5rem+env(safe-area-inset-bottom))] md:bottom-6 md:right-6 ${
        shown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp className="size-6" strokeWidth={2.5} aria-hidden />
    </button>
  );
}
