import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="border-t-[2.5px] border-ink bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Logo />
        <p className="text-ink-soft">Khóa học tiếng Anh giao tiếp, IELTS, TOEIC và tiếng Anh trẻ em.</p>
        <p className="text-sm text-ink-soft">© 2026 Crouse English</p>
      </div>
    </footer>
  );
}
