var CACHE_NAME = 'staticV2';

this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll([
                './',
                //
                 '../css/styles.css',
                 '../css/w3.css',
                 '../css/materialdesignicons.css',
                 '../css/materialdesignicons.css.map',
                 '../fonts/materialdesignicons-webfont.woff2?v=5.9.55',
                //
                '../assets/img/favicon.ico',
                '../assets/img/apresentacao.png',
                '../assets/img/icone.png',
                '../assets/img/perfil.jpg',
                //
                '../../manifest.json',
             ]);
        })
    );
});

self.addEventListener('activate', function activator(event) {
    event.waitUntil(
        caches.keys().then(function(keys) {
            return Promise.all(keys
                .filter(function(key) {
                    return key.indexOf(CACHE_NAME) !== 0;
                })
                .map(function(key) {
                    return caches.delete(key);
                })
            );
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(cachedResponse) {
            return cachedResponse || fetch(event.request);
        })
    );
});
