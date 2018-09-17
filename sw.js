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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-187ba1e03c7a89acb1d4.js"
  },
  {
    "url": "app-24433d4a7c6d372460c0.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-17a8b5d42ebd493e4aa4.js"
  },
  {
    "url": "index.html",
    "revision": "8f5db919628db2cbfcc7660fe259b842"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "8daf602e2e78626911170ffebf6e43f8"
  },
  {
    "url": "component---src-pages-index-js.61e6e9a767191200cd2c.css",
    "revision": "379fea85e68df29fb6e7509ee05937cb"
  },
  {
    "url": "0-0680c5aadd992f8c44b4.js"
  },
  {
    "url": "1-dbaf707247ca1594db80.js"
  },
  {
    "url": "component---src-pages-index-js-cb0b48ae2708da12db44.js"
  },
  {
    "url": "3-2b0ff1dfffd01efeaebc.js"
  },
  {
    "url": "2-c609f38ad31b9f326f8a.js"
  },
  {
    "url": "static/d/933/path---index-6a9-5GYDOSAWi0NugcHCf40gN8LaY.json",
    "revision": "b98223baf3f60b30e93a865d80b4586e"
  },
  {
    "url": "component---src-pages-404-js-1883e4ce94d1c665f254.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "df17f25ea8ee956cbb496924ab1ffc74"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
