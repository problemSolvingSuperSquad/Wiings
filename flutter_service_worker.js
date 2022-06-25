'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e1c2673fd5a1605cca53eb5fcd4c73c8",
"index.html": "69911c1dee8b4d98b6bdf11c24d88b83",
"/": "69911c1dee8b4d98b6bdf11c24d88b83",
"main.dart.js": "a5508825d782003d173a1cbe4c6bb3e0",
"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
".git/config": "2b8856a4daec523ef17f320b9ef56470",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/3e/740dbaea8a3d3067dcaa0e4f1e908f48870f63": "f52dad2c30771b83528c61522f828ce8",
".git/objects/9e/f2263c78e0f29d162a2d64ed92d000d3fae59c": "095e59a1df81e3ef5f098c479e038ee7",
".git/objects/9e/8cabe630537127ec5d784f678835f799f77abf": "f95ddc50e54773f8005765f88fe14b27",
".git/objects/34/97f37695ef3c6333af9f5d95e6908cea86a1b8": "6e26be02c572afe1fde37474bbfdea0e",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/ab/def37b865ada9483811d2908225543dde48323": "f23bce0f2c493e457979a3d4bcdce5c5",
".git/objects/e5/66a072a386e84579220912133648069c4a4fb2": "d391a72b10f926a2ef1581d4601eef25",
".git/objects/c7/d7f36168948207f62e1315c45ebb34d0d496b5": "ff34a0081a0ce3c55b5f10ed0f418432",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/e4/5a670da483faab10c174973b9b91380598d5c0": "4f4fa64a752145f2a02f0179a95570d8",
".git/objects/ed/94d241013d0d460138bd5c5bb4b6736e20a8c0": "29dddee12916c95044a2f47e62956ade",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/42/7ca09e5216f94066223f1cc3b6a29300eb5df4": "e884ce4632d1349b120cfcf32160b108",
".git/objects/80/9ce5fb539c72e3244bf616d120bff8efb27515": "32bfd96d9232cdf8f6b64b68fb63b939",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/43/c9a140dbf20892234a3f78fa184ceed3cb8ab4": "3cab967becb93ae75b873eeaec260c57",
".git/objects/97/543dac8f83dfed859f3da096608deeee7da7ca": "6ee97d0fd505894d2f6b9ae88fe25cc5",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/a7/b8c7b0530767b4fa058faf8bba2e5efe818d21": "11597d1de0edf86957332a465cf17bf4",
".git/objects/b8/f9a6007fed52036c3becbbea1adc142d03d03a": "15987362d5cfb56f9b1f896d85f8515b",
".git/objects/b6/2fc03cf198947c0c6729fba003e4a0429499f0": "d8dc6b105328dbf45dbb285c9283357a",
".git/objects/aa/9e512c2f83c7f4bb1ed7233f6649c9d39df777": "d111af3e4a872abf8bcb2b1a9bd3d119",
".git/objects/de/b875bde68867840fd8d6591d2ea045d6356162": "f2b928066daf45a32a5b77cbb9921cfe",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/9cb01e62757f5b76ac8f69fe443952d74e4baa": "6ee9c4f16d7b2ddc02c7f8e36fa43a5b",
".git/objects/a6/ec54b1b377de9760d6aace467cf36fc740c5f2": "d10d46f1ac65612f74cea5919d779878",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/cb/545bcf9869f563436c7f51ca1764448bc8e327": "2e42ca0bffc2e3825c74deedc49a693a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/77/cc782acf4309459c2a465d60d81df7429e3b67": "7263f890547d401e5bdd03902740931a",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/4f/72143307c8d992dba49e736084fc6acead7700": "8b65a83094e56ba6ddf92adceb5e2414",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/1c/38f4081e1c774cc77e1722ee8e763a38bea24e": "025671813bd44065545a593a2e375b3e",
".git/objects/82/9eda8fdcf133ab2083dbc880b6362b11d0c8ea": "72fd972bf7f0020b924435fc702e5219",
".git/objects/49/e78341293e9e2656610d50a93202bfc6f802c4": "28493cb7c9dceee88543fa5f8d0999f3",
".git/objects/7f/ef3a0645fe7715e31af07aa9bf68f5cce97330": "743299e2b05016b11d90488a00e180ac",
".git/objects/7a/fa956322a71fd5a5068d4da1781861b953bb4e": "55495eb4afd68e391fa241b653af384f",
".git/objects/7a/0409c2c9190497cc492401814098a7b66e4f0c": "02a7352fff0ed67a01cb4c46fb400326",
".git/objects/14/fdedc8f07aacf091418421f0add335ffdc9ef4": "8cf1818bee650724a12d5e03d7337d87",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0a5927c3b7d325f99b9f00e62c39acf0",
".git/logs/refs/heads/master": "0a5927c3b7d325f99b9f00e62c39acf0",
".git/logs/refs/remotes/origin/master": "5aa0d6a01013446467bf8e78230a3640",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "00aa1e0825fb14628aa10c812f032f8c",
".git/refs/remotes/origin/master": "00aa1e0825fb14628aa10c812f032f8c",
".git/index": "9502c77c008e9e5c1703721e61d28878",
".git/COMMIT_EDITMSG": "9a4d3e16cc996627a1caf53a13ac3779",
"assets/images/Loginpage.png": "41d3650dccd798be92f7008f78b8bc40",
"assets/images/Logo.png": "509fb75ea704b525681c81878871c8c6",
"assets/images/Signup.png": "713f6e44748d6c35efe20ed8c72deefb",
"assets/images/Homepage.png": "a570d3a55efd27a8984c003e47e6fd96",
"assets/AssetManifest.json": "aac81e1d99dcf18cca64488348cbfd97",
"assets/NOTICES": "884f3d03a47e9ca29a68025b92de6f3f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/background.jpg": "e33b6c9d5b4923dfe89a2d3ad8812a1d",
"assets/assets/fingerprint.png": "7226377348dada413b70bdfa02cfae4f",
"assets/assets/logo.png": "04faffa54e8b6b41e7793fc13ffae9d3",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
