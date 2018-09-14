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
    "url": "webpack-runtime-a1354bdcd86ee57b1a9a.js"
  },
  {
    "url": "app-1de1e58714ac983a7a9f.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-7b515047383a515c2c7f.js"
  },
  {
    "url": "index.html",
    "revision": "bbb800afd02e15ec278a0d75f93ff3e5"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "5e795292638267310d0a9d91e4f38b51"
  },
  {
    "url": "component---src-pages-index-js.ad3c4e61e7017afd6904.css",
    "revision": "8a6d5a6e4ac8b1e7535340988a384608"
  },
  {
    "url": "0-991169db6b2c2138e878.js"
  },
  {
    "url": "1-76478763eaf61030dea0.js"
  },
  {
    "url": "component---src-pages-index-js-8a7c34762ba0a099cc4b.js"
  },
  {
    "url": "3-748f12b265f06ae93cfc.js"
  },
  {
    "url": "2-8bc2d2d6e5220d78c408.js"
  },
  {
    "url": "static/d/933/path---index-6a9-5GYDOSAWi0NugcHCf40gN8LaY.json",
    "revision": "b98223baf3f60b30e93a865d80b4586e"
  },
  {
    "url": "component---src-pages-404-js-86970653f4a12a5bc71a.js"
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
