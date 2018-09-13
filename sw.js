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
    "url": "webpack-runtime-6f777d50061f2d5bf083.js"
  },
  {
    "url": "app-58197aab6e7f7df323db.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-dc20a333dda77e4579f7.js"
  },
  {
    "url": "index.html",
    "revision": "32b8c2aabaf2eef563ff2ab8e4a80ab8"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "ab84415af82c964c04a9b2c0cbfdb24e"
  },
  {
    "url": "component---src-pages-index-js.5c73c704542a8a048af6.css",
    "revision": "9b1b26dfeb7c7f01b6f2e682f51504ac"
  },
  {
    "url": "0-2276b708e23fd6591a2f.js"
  },
  {
    "url": "1-b807a99430a6f8208700.js"
  },
  {
    "url": "component---src-pages-index-js-484fddf56a0dd4597f8e.js"
  },
  {
    "url": "3-88f1ef729ab06521c91c.js"
  },
  {
    "url": "2-9506741e663c3836e855.js"
  },
  {
    "url": "static/d/933/path---index-6a9-5GYDOSAWi0NugcHCf40gN8LaY.json",
    "revision": "b98223baf3f60b30e93a865d80b4586e"
  },
  {
    "url": "component---src-pages-404-js-0b25f78423c32a7f73cb.js"
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
