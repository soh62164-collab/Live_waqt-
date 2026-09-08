// Minimal service worker — required for PWA installability checks.
// Not doing offline caching for now; just passes requests through.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', () => {});
