import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({request}) => request.destination === 'image',
  new StaleWhileRevalidate({
    cacheName: 'images',
  })
);

registerRoute(
  ({request}) => request.destination === 'style',
  new StaleWhileRevalidate({
    cacheName: 'styles',
  })
);

registerRoute(
  ({url}) => url.origin === 'https://api.example.com',
  new StaleWhileRevalidate({
    cacheName: 'api-responses',
  })
);

self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('v1').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/manifest.json',
          // 添加其他你想要缓存的资源
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });