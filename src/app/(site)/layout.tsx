import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { TabBar } from "@/components/site/tab-bar";
import { BackToTop } from "@/components/site/back-to-top";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <TabBar />
      <BackToTop />
    </>
  );
}
