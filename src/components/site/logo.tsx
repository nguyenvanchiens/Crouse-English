import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 rounded-xl" aria-label="Crouse English, về trang chủ">
      <span className="grid size-10 place-items-center rounded-2xl border-[2.5px] border-ink bg-tangerine font-display text-xl font-extrabold shadow-[0_3px_0_0_var(--color-ink)]">
        Cr
      </span>
      <span className="whitespace-nowrap font-display text-lg font-bold leading-none max-[400px]:hidden sm:text-xl">
        Crouse <span className="text-ink-soft">English</span>
      </span>
    </Link>
  );
}
