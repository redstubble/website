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

importScripts("workbox-v3.6.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.1"});

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
    "url": "webpack-runtime-67716280b3b28d42b611.js"
  },
  {
    "url": "app-c1cc3cf10c9ed72a8770.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-7077bb93fe46e7500f7d.js"
  },
  {
    "url": "index.html",
    "revision": "0d89f3b61d8eac1fefd31bee3fbf2682"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "799b514397585781f75073f88045dc15"
  },
  {
    "url": "component---src-pages-index-js.7bbcc24c27021dfadfd5.css"
  },
  {
    "url": "component---src-pages-index-js-ca8c1abda1bf2e7af1bc.js"
  },
  {
    "url": "0-11c84b579fafdcc463fc.js"
  },
  {
    "url": "1-5354b467105e69087567.js"
  },
  {
    "url": "3-ddeb37917a23dd2f21cd.js"
  },
  {
    "url": "2-45678b91a1469faf4c24.js"
  },
  {
    "url": "static/d/933/path---index-6a9-5GYDOSAWi0NugcHCf40gN8LaY.json",
    "revision": "b98223baf3f60b30e93a865d80b4586e"
  },
  {
    "url": "component---src-pages-404-js-9a19a98aa6f6970281c8.js"
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
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});