this.addEventListener('install', function(event) {
    event.waitUntil((async () => {
        let cache = await caches.open("a.1.0");
        await cache.addAll([
            "/",
            "index.html"
        ]);
    })());
});

this.addEventListener("fetch", event => {
  event.respondWith(
    (async () => {
      let cache = await caches.open("a.1.0");
      try {
        await cache.add(event.request);
      } catch (e) {
      }
      let response = await cache.match(event.request);
      if (!response) {
        response = await cache.match("index.html");
      }
      return response;
    })()
  );
});
