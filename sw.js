// Array of elements to cache 
let urlToCache = [
    './',
    './css/styles.css',
    './data/restaurants.json',
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg',
    './img/7.jpg',
    './img/8.jpg',
    './img/9.jpg',
    './img/10.jpg',
    './js/main.js',
    './js/restaurant_info.js',
    './js/dbhelper.js',
    './js/sw/index.js',
    './js/sw/sw.js',
    './index.html',
    './restaurant.html'
];

// Install service worker
self.addEventListener('install ', function(e) {
    e.waitUntil(
        caches.open('restaurant-cache-1').then(function(cache) {
            return cache.addAll(urlToCache);
        })
    );
});

// Fetch cache and add new elements to cache
self.addEventListener('fetch', function(e) {
    e.respondWith(
      caches.open('restaurant-cache-1').then(function(cache) {
        return cache.match(e.request).then(function (response) {
          return response || fetch(e.request).then(function(response) {
            cache.put(e.request, response.clone());
            return response;
          });
        });
      })
    );
  });