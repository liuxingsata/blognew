/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2020/08/17/SpringAop/index.html","f9588e8275821eba5cc57b49234c828b"],["2020/08/17/ffmepg常用命令/index.html","a06ca37f55ece10a8a89266c84c5e955"],["2020/08/17/gitlab搭建/index.html","4f5604c47e6680c359ed463b95b5e858"],["2020/08/17/k8s/index.html","6ab6ab648f88c82a678ada8e05885398"],["2020/08/17/kong/index.html","a2182ce6bfe7e4c46bd16cdde2172253"],["2020/08/17/lettuce/index.html","234e4e411e44049a95a6f433fc1c4f54"],["2020/08/17/redis基本数据结构/index.html","16d37f176662c778fe6dbe519d4151d7"],["2020/08/17/redlock/index.html","1ec329bb20d365617de784dc0ca803c5"],["2020/08/17/成都记忆/index.html","7531fb72f587a7f8b3a4d4564776b484"],["2020/08/17/跳表/index.html","744d1a48ad576c725d3f6d0aee92360a"],["2020/08/17/银河补习班/index.html","3f9f7caeffed521d567b22d0d2693ff7"],["about/index.html","b85c9de6dab95cb7e3188060e86c0a2a"],["archives/2020/08/index.html","33cee8da15cddcce2999d39e82520edb"],["archives/2020/08/page/2/index.html","0f271304c392eafdb285530cfd35061e"],["archives/2020/index.html","79624173f7ed2b7738223390fdc83492"],["archives/2020/page/2/index.html","59ef81ea21eaeb4471aee4b0b4488eb5"],["archives/index.html","2fa9d2754737f7ad425b2331fc0479bd"],["archives/page/2/index.html","20fbf2b17a7d9084aa9da92d5a2c8f86"],["assets/algolia/algoliasearch.js","61caddb3e91165f4a39231b58959ea65"],["assets/algolia/algoliasearch.min.js","d9ef9ebf6b31419239cff8047b30e15e"],["assets/algolia/algoliasearchLite.js","0fea8fbf28c472c562fcaed32fbe94e7"],["assets/algolia/algoliasearchLite.min.js","26355d018bb30d571119f4722036c0b6"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["books/index.html","f39ea3158e711e54410abd1b5dec4220"],["categories/ffmpeg/index.html","dbcfe83c0b817464ff5b7659c3467feb"],["categories/index.html","545a4d27b4f390195414afc9b50528d4"],["categories/k8s/index.html","fa21cc675e9c3188c8e9ad6eed75301d"],["categories/kong/index.html","b00e4c43efb5336e3bd3c002dccaedce"],["categories/redis/index.html","c220ae4db484950a73d0e2a178fc299b"],["categories/spring/index.html","101a2da5a3a8a37048a62e44d4165358"],["comment/index.html","c950a9e386434fcbbfd531842bdb01b9"],["css/index.css","ada9c9f3fc677de2fb2f970de3cfd19f"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["index.html","08c6de192a207e77f913c793701243b1"],["js/main.js","455fface5a0a3ff90766ca254affe502"],["js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["link/index.html","8292bd4c484f6a771e7ec7e56db15599"],["movies/index.html","26609be677b508058a6db2a25280c21c"],["music/index.html","7379e2b789de1f5254512a6f4f54a6a6"],["page/2/index.html","1ba083a339dbb3d7b4723261edde5ed7"],["tags/AOP/index.html","ae3ecd96d79a4e0ecccdacbac4e900f1"],["tags/Spring/index.html","8e56c4a7be2b69f3b37761c78aba4350"],["tags/ffmpeg/index.html","91b2eea02a54c85199b7c85c3f1c77ae"],["tags/gitlab/index.html","eb394a8ab74e00dd7127986288528371"],["tags/index.html","cdb86edbdda218d8b1b231f934605657"],["tags/k8s/index.html","7e7afcd3f4600b7840d0a00f6edcdd16"],["tags/kong/index.html","0cacffe2c3c3b84f2eb55620678a6f7e"],["tags/redis/index.html","e58c44f9c509ddfa188eae764da65a87"],["tags/容器/index.html","2c2c215c2a6960de6e4dbde49aaa8306"],["tags/数据结构/index.html","f6a1bfe0304dd838c94408a7c1c809af"],["tags/旅行/index.html","18e6350ae28a173c69140b400d0562e3"],["tags/电影/index.html","f976d40b106ef8b5f0e3ec227e7fc5a8"],["tags/网关/index.html","64b60283092bcaee5b25b63c0ea4d59c"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







