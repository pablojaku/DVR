'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0263ce209561409ca999ff7ff5e9fe92",
".git/config": "c73e21f7d2b2739285cc61284a5f0e70",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b192b5ecfbf2bff2568f0505bba5fce3",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "f923583b270a87d9ca629a5e2e89cb98",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "007631ece8519722510c278c6bc34c57",
".git/logs/refs/heads/master": "007631ece8519722510c278c6bc34c57",
".git/logs/refs/remotes/origin/master": "50f99c5768f2f040cc66180d745bb1a6",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/14/e45d5c959745caee30946ba24d58ffdf9ae17e": "19e79b6dabfe2db7f67a672fc153def1",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/15/d9093e86d5afc6afd31a1aff5b2789276b60ea": "efa8c46b795e3510fad439b332f15a96",
".git/objects/1e/0c507408b3d1e5e0e40dc45e076f729cc3c2d4": "10d9b330c3333bcba5c4db274acff576",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/39/41b53b4edf210cee43aa8e1dd8ec6b37b2055d": "c3070935464f805f691a4846403a9bb7",
".git/objects/3a/46edda19e1dadd3404cf646a273c239845ccc9": "13b37a08434fbec895d1dea403ecc134",
".git/objects/49/f3d96108b6224a73576deec76bee45c1699730": "560801c58b3bd0902cb1ccf49bf7c564",
".git/objects/73/528045622bb7694e32f08191d724773c44070a": "98a4d9b7215f8a313f3915604b13ac52",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/60056c4fe0aef1adeddbe335da9ddbeb47d903": "2df1d13259a60364311e967055314b61",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/97/991fc9899b7365b0d06bc0d78b43f62ecac482": "7316930c878f80ffd73987252e2229df",
".git/objects/b0/94a18ab727f018cda685a25ab1844984470fd7": "0a5dce99a4ffecd2895b4ca8a04c7dbb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c5/15c13974b2b7dad874dc24df40cfc3b194646f": "8d4d5ff74ce2b2b60dcc0fea7712641d",
".git/objects/d9/d6f94d8af03cda9fa5457a2561f156d0fe0101": "b6540012729d7fa0e6a1ae99acd615a8",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/df/448aa9a5f04f7becf186770aae73a6e809a1c7": "4dddcfdefe3b218a64556c421d8ff17e",
".git/objects/f0/6bc9c82004cf0e7adf0a37eeff33324adaddfa": "91fe3e42ab0a2032f85599340a03d238",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/ORIG_HEAD": "bed344a973625b993e2b0be770dce6b5",
".git/refs/heads/master": "8385673edcacf0aca642d772f00b7d97",
".git/refs/remotes/origin/master": "8385673edcacf0aca642d772f00b7d97",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "0000d255865246c9b55862d96ffd3089",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "563f90c1e97a825849d6f3004c32f609",
"/": "563f90c1e97a825849d6f3004c32f609",
"LICENSE": "3ce43ee758f46f6db7233ad7b52bab89",
"main.dart.js": "d79c8b3c1e83973a2e30c4286a3654f9",
"manifest.json": "f087bce26a78fbf8af285584064d2d7e"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
