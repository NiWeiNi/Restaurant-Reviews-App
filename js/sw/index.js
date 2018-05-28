// Install service worker
self.addEventListener('install ', function(e) {
    event.waitUntil(
        caches.open('restaurant-cache').then(function(cache) {
            return cache.addAll(urlToCache);
        })
    )
})