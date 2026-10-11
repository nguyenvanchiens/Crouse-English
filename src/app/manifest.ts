import type { MetadataRoute } from "next";

// prerendered to out/manifest.webmanifest by the static export
export const dynamic = "force-static";

/** Lets the site be installed to a phone's home screen and open full screen, like an app. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Crouse English",
    short_name: "Crouse",
    description: "Lộ trình tiếng Anh miễn phí từ A1 đến C1 cho người Việt.",
    lang: "vi",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#eaf5ff",
    theme_color: "#ff8a3d",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    // long-press the app icon (Android) to jump straight to these
    shortcuts: [
      { name: "Hôm nay học gì", short_name: "Hôm nay", url: "/hom-nay", icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }] },
      { name: "Tổng quan lộ trình", short_name: "Tổng quan", url: "/tong-quan", icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }] },
      { name: "Ôn từ vựng", short_name: "Ôn từ", url: "/on-tap-tu-vung", icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }] },
    ],
  };
}
