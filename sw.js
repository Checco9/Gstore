// Service worker minimo: basta la sua presenza + il manifest perché
// i browser mostrino il prompt "Installa app" con l'icona di GalloStore.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
