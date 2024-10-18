// 使用 self.__WB_MANIFEST 进行预缓存
self.__WB_MANIFEST = self.__WB_MANIFEST || [];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        // 添加其他你想要缓存的资源
      ].concat(self.__WB_MANIFEST.map(entry => entry.url)));
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      return fetch(event.request).then((response) => {
        // 检查是否是有效的响应
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        // 克隆响应，因为响应是流，只能使用一次
        const responseToCache = response.clone();

        caches.open('v1').then((cache) => {
          if (event.request.url.startsWith('http')) {
            cache.put(event.request, responseToCache);
          }
        });

        return response;
      });
    })
  );
});

// 处理图片请求
self.addEventListener('fetch', (event) => {
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.open('images').then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response) return response;

          return fetch(event.request).then((networkResponse) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
  }
});

// 处理样式请求
self.addEventListener('fetch', (event) => {
  if (event.request.destination === 'style') {
    event.respondWith(
      caches.open('styles').then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response) return response;

          return fetch(event.request).then((networkResponse) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
  }
});

// 处理 API 请求
self.addEventListener('fetch', (event) => {
  if (event.request.url.startsWith('https://api.example.com')) {
    event.respondWith(
      caches.open('api-responses').then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response) return response;

          return fetch(event.request).then((networkResponse) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
  }
});