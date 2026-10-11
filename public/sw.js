/*
 * Crouse English service worker: makes the installed app open fast and keep working without a network.
 *
 * - Pages: network first (always the latest when online), falling back to the copy saved on the last visit,
 *   then to /offline. Query strings (?ngay=…) share one saved copy, since the page reads them on the client.
 * - Build files under /_next/static/ are content-hashed, so a saved copy never goes stale: cache first.
 * - Images and fonts: saved copy first, refreshed in the background.
 * - Everything else on this site (router data, the manifest): network first, saved copy when offline.
 * - Requests to other sites (YouTube, Cambridge, CDNs) are left alone.
 *
 * Progress lives in localStorage on the same origin, so the app and the site in the browser share it.
 * Bump VERSION to drop every saved copy (e.g. after changing this file's strategy).
 */
const VERSION = "v1";
const PAGES = `ce-pages-${VERSION}`;
const ASSETS = `ce-assets-${VERSION}`;
const PRECACHE = ["/", "/offline", "/hom-nay", "/tong-quan", "/lich-hoc", "/lo-trinh-cua-toi", "/on-tap-tu-vung", "/on-lai", "/manifest.webmanifest", "/icons/icon-192.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(PAGES)
      // one missing page must not stop the install
      .then((cache) => Promise.all(PRECACHE.map((url) => cache.add(url).catch(() => undefined))))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== PAGES && k !== ASSETS).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

const pageKey = (request) => {
  const url = new URL(request.url);
  return url.origin + url.pathname;
};

async function page(request) {
  const cache = await caches.open(PAGES);
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(pageKey(request), response.clone());
    return response;
  } catch {
    return (await cache.match(pageKey(request))) ?? (await cache.match("/offline")) ?? Response.error();
  }
}

async function networkFirst(request) {
  const cache = await caches.open(ASSETS);
  try {
    const response = await fetch(request);
    if (response.ok) cache.put(request, response.clone());
    return response;
  } catch {
    return (await cache.match(request)) ?? Response.error();
  }
}

async function hashed(request) {
  const cache = await caches.open(ASSETS);
  const saved = await cache.match(request);
  if (saved) return saved;
  const response = await fetch(request);
  if (response.ok) cache.put(request, response.clone());
  return response;
}

async function fresh(request) {
  const cache = await caches.open(ASSETS);
  const saved = await cache.match(request);
  const update = fetch(request)
    .then((response) => {
      if (response.ok) cache.put(request, response.clone());
      return response;
    })
    .catch(() => saved ?? Response.error());
  return saved ?? update;
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin || url.pathname === "/sw.js") return;
  if (request.mode === "navigate") event.respondWith(page(request));
  else if (url.pathname.startsWith("/_next/static/")) event.respondWith(hashed(request));
  else if (/\.(png|svg|ico|jpe?g|webp|woff2?)$/.test(url.pathname)) event.respondWith(fresh(request));
  else event.respondWith(networkFirst(request));
});
