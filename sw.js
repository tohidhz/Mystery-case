/* The Calloway Files — offline worker.
   Cache-first: the game is finished prose and art, not live data, so the
   right behaviour is "keep working forever once seen". Bump VERSION on
   deploy to invalidate. Registered only on http(s); file:// runs without. */
var VERSION = "calloway-v1";
var CORE = [
  "./",
  "./index.html",
  "./css/style.css",
  "./js/i18n.js",
  "./js/audio.js",
  "./js/case1.js",
  "./js/case2.js",
  "./js/case3.js",
  "./js/case4.js",
  "./js/game.js",
  "./icon.svg",
  "./manifest.webmanifest",
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(VERSION).then(function (c) { return c.addAll(CORE); }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(function (hit) {
      if (hit) return hit;
      return fetch(e.request).then(function (res) {
        // runtime-cache everything that arrives well: the lazy art/ev/fa
        // scripts and the fonts, so a case you have opened works offline
        if (res && (res.ok || res.type === "opaque")) {
          var copy = res.clone();
          caches.open(VERSION).then(function (c) { c.put(e.request, copy); });
        }
        return res;
      }).catch(function () {
        // offline and never seen: nothing sensible to substitute
        return hit;
      });
    })
  );
});
