const CACHE_NAME = 'imani-cache-v1';
const ASSETS_TO_CACHE = [
  './index.html',
  './manifest.json',
  './media/images/header-emblem.png',
  './media/images/Chatty Wisdom Header.png',
  './media/images/chatty-wisdom-landscape.png',
  './media/images/we-r-imani-poster.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});