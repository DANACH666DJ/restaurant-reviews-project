let staticCacheName = 'restaurants-static-v1';

self.addEventListener("install", event => {
    event.waitUntil(caches.open(staticCacheName)
        .then(cache => cache.addAll([
            "./",
            "./sw_registration.js",
            "index.html",  
            "restaurant.html",
            "css/styles.css",
            "data/restaurants.json",
            "js/dbhelper.js",
            "js/main.js",
            "js/restaurant_info.js",
            "img/1.jpg",
            "img/2.jpg",
            "img/3.jpg",
            "img/4.jpg",
            "img/5.jpg",
            "img/6.jpg",
            "img/7.jpg",
            "img/8.jpg",
            "img/9.jpg",
            "img/10.jpg"
          ]))
          .then(self.skipWaiting())
    );
  });

  self.addEventListener("activate", event => {
    event.waitUntil(caches.keys().then(cacheNames => Promise.all(cacheNames.map(cache => {
        if (cache !== staticCacheName) {
          return caches.delete(cache);
        }
      })))
    )
  });

  self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
            return response ? response : fetch(event.request) 
		})
	);
});




  










