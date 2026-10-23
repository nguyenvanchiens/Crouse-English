import Link from "next/link";
import { Hero } from "@/components/game/battle";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { TabBar } from "@/components/site/tab-bar";

/** Outside the (site) group, so it brings the site's header and footer itself: a lost visitor keeps the menu. */
export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 items-center px-4 py-16 sm:px-6">
        <div className="clay mx-auto max-w-xl px-6 py-10 text-center sm:px-10">
          <div className="mx-auto size-28" aria-hidden>
            <Hero />
          </div>
          <p className="mt-3 inline-block rounded-full bg-tangerine-soft px-3 py-0.5 font-display font-bold">Lỗi 404</p>
          <h1 className="mt-1 font-display text-3xl font-extrabold leading-tight sm:text-4xl">Hiệp sĩ đi lạc mất rồi</h1>
          <p className="mx-auto mt-3 max-w-md text-lg text-ink-soft">Không tìm thấy trang này. Đường dẫn có thể đã thay đổi hoặc khóa học không còn nữa.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/khoa-hoc" className="btn btn-primary">Xem các khóa học</Link>
            <Link href="/" className="btn btn-ghost">Về trang chủ</Link>
          </div>
        </div>
      </main>
      <SiteFooter />
      <TabBar />
    </>
  );
}
