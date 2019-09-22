/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "92d0bd77559f00be21cbb735fb556e2a"
  },
  {
    "url": "assets/css/0.styles.cb6ccb2f.css",
    "revision": "55ad8e46631b6574d56733e82806f9b4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.04b9aa3f.js",
    "revision": "df9ebf83126fc3388e206519ec448844"
  },
  {
    "url": "assets/js/11.0b580f7a.js",
    "revision": "8448b4e84546723a292f79fa714c54bb"
  },
  {
    "url": "assets/js/12.86f9703e.js",
    "revision": "3bbc643e11245e42a07d95423d358e92"
  },
  {
    "url": "assets/js/13.93d244c0.js",
    "revision": "6a24f3f53c5de035cca234627ec227e3"
  },
  {
    "url": "assets/js/14.30267d57.js",
    "revision": "0b6e1ef2caaaa510d448cefe8110621d"
  },
  {
    "url": "assets/js/15.1adbe79f.js",
    "revision": "67aa5a4bf1fb0cfb7f96c4ec0a39b8c1"
  },
  {
    "url": "assets/js/16.73b2182f.js",
    "revision": "270bd18b74496feb3a301c5f77948130"
  },
  {
    "url": "assets/js/17.89685946.js",
    "revision": "d0cb442a31625a2d709c77770c51a2ed"
  },
  {
    "url": "assets/js/18.b851285d.js",
    "revision": "9ef859775a85df0c8acf41f131f1d3c9"
  },
  {
    "url": "assets/js/19.e4f74fa6.js",
    "revision": "fb05e8dc39e5f1e1e98a947bbda04409"
  },
  {
    "url": "assets/js/2.0f69efaa.js",
    "revision": "87f10116c06555296773c67392e13b51"
  },
  {
    "url": "assets/js/20.f0383529.js",
    "revision": "cc12a37a6605eee37217e7e7ce33fb3d"
  },
  {
    "url": "assets/js/3.cfd3e97d.js",
    "revision": "c24314a29ea561b8f0d278f0d0a40bc6"
  },
  {
    "url": "assets/js/4.0d8db9a5.js",
    "revision": "74f659d05e707f5f4cebb877626acfb4"
  },
  {
    "url": "assets/js/5.2a4cb15c.js",
    "revision": "092a1d033442971bf51ba5ad8c8aca71"
  },
  {
    "url": "assets/js/6.16400716.js",
    "revision": "f73f7e2fdf2ae090359fafb06ab582a1"
  },
  {
    "url": "assets/js/7.3732cf46.js",
    "revision": "2005b861fe465bb4455a3d0166288cf6"
  },
  {
    "url": "assets/js/8.457118bb.js",
    "revision": "3a136473e2e34c340efceb02281d936b"
  },
  {
    "url": "assets/js/9.f2f21d6e.js",
    "revision": "7a43f902681a6693801078c02b9e0759"
  },
  {
    "url": "assets/js/app.8dfe5b7d.js",
    "revision": "6415b14a8dbffa15f64c0a31c5d4790e"
  },
  {
    "url": "guide/battery.html",
    "revision": "1953648446a88bb8cac7c39a52777bec"
  },
  {
    "url": "guide/clipboard.html",
    "revision": "727c36d342c1f3ff46e6444f9c75cc2c"
  },
  {
    "url": "guide/device-light.html",
    "revision": "20af18a20139c2041867e2583d8d19dc"
  },
  {
    "url": "guide/device-motion.html",
    "revision": "dc70a4e4f6dfb4a393f01150c42881f9"
  },
  {
    "url": "guide/device-orientation.html",
    "revision": "5b331304ca4124565b33b1baf3ffc24e"
  },
  {
    "url": "guide/fullscreen.html",
    "revision": "8f46b539410f0d6ff9d0f61e8f0fde49"
  },
  {
    "url": "guide/geolocation.html",
    "revision": "60a9b6f85e11aa58365981cca9c383a3"
  },
  {
    "url": "guide/index.html",
    "revision": "bff4d47ff84a9a600675820c5056d898"
  },
  {
    "url": "guide/intersection-observer.html",
    "revision": "37714d90c0c62cbd630bc34a6ed39e8e"
  },
  {
    "url": "guide/network.html",
    "revision": "18faa8efc8db8760f87b73f2284aea5a"
  },
  {
    "url": "guide/script.html",
    "revision": "dc30751cc6a5aaa867a1c92138e287c2"
  },
  {
    "url": "guide/scroll-position.html",
    "revision": "d03c3606f988361be0d0ef6f97380ea0"
  },
  {
    "url": "guide/window-size.html",
    "revision": "0cc8ceb1e20fd5da63f8fa9e0f9b31f7"
  },
  {
    "url": "index.html",
    "revision": "e491fd7aff474a9d8db6c594e8ecc827"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
