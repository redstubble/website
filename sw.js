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
    "url": "webpack-runtime-732246cfbf389e01a834.js"
  },
  {
    "url": "app-44e3704f9ccfd941ad17.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-bf3d684f3bf3bd60d360.js"
  },
  {
    "url": "index.html",
    "revision": "c71ee74d8d40f3e9fb2a8f65b7b3d2c4"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "30c0a6e4de0ef1c543858f8640fb5941"
  },
  {
    "url": "component---src-pages-index-js.5c73c704542a8a048af6.css",
    "revision": "9b1b26dfeb7c7f01b6f2e682f51504ac"
  },
  {
    "url": "0-6c4dc353efd927a21a01.js"
  },
  {
    "url": "1-a2103f311492c14b0b99.js"
  },
  {
    "url": "component---src-pages-index-js-c5664c9855a5c480ba95.js"
  },
  {
    "url": "3-623b13f3dd17dc0eb5fe.js"
  },
  {
    "url": "2-3d285a9c7d1198c6b4ed.js"
  },
  {
    "url": "static/d/933/path---index-6a9-5GYDOSAWi0NugcHCf40gN8LaY.json",
    "revision": "b98223baf3f60b30e93a865d80b4586e"
  },
  {
    "url": "component---src-pages-404-js-b5b815a14b6df35813cb.js"
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
