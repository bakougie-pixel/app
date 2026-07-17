/* Service worker Bakougie
   1) Push notifications via OneSignal (obligatoire, ne pas retirer la ligne ci-dessous)
   2) Cache léger pour rendre la page installable et consultable hors-ligne */

importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

const CACHE = 'bakougie-site-v1';
const CORE = ['./', './index.html', './contenu.js', './manifest.webmanifest',
              './icon-192.png', './icon-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).catch(() => {}));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  let url;
  try { url = new URL(req.url); } catch (_) { return; }
  // On laisse passer normalement tout ce qui n'est pas notre domaine (dont OneSignal)
  if (url.origin !== self.location.origin) return;
  // Réseau d'abord (contenu frais), cache en secours (hors-ligne)
  e.respondWith(
    fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
      return res;
    }).catch(() => caches.match(req).then(m => m || caches.match('./index.html')))
  );
});
