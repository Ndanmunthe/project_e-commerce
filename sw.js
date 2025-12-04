const CACHE_NAME = "mahkota-cache-v1";
const urlsToCache = [
  "/project_e-commerce/",
  "/project_e-commerce/index.html",
  "/project_e-commerce/manifest.json",
  "/project_e-commerce/themes/bootstrap/bootstrap.min.css",
  "/project_e-commerce/themes/css/base.css",
  "/project_e-commerce/themes/css/bootstrap-responsive.min.css",
  "/project_e-commerce/themes/css/font-awesome-ie7.css",
  "/project_e-commerce/themes/css/font-awesome.css",
  "/project_e-commerce/themes/css/style.css",
  "/project_e-commerce/themes/font/fontawesome-webfont.eot",
  "/project_e-commerce/themes/font/fontawesome-webfont.svg",
  "/project_e-commerce/themes/font/fontawesome-webfont.ttf",
  "/project_e-commerce/themes/font/fontawesome-webfont.woff",
  "/project_e-commerce/themes/font/museo_slab_300-webfont.eot",
  "/project_e-commerce/themes/font/museo_slab_300-webfont.ttf",
  "/project_e-commerce/themes/font/museo_slab_500-webfont.eot",
  "/project_e-commerce/themes/font/museo_slab_500-webfont.ttf",
  "/project_e-commerce/themes/font/proximanova-webfont.eot",
  "/project_e-commerce/themes/font/proximanova-webfont.ttf",
  "/project_e-commerce/themes/images/facebook.png",
  "/project_e-commerce/themes/images/headerRepeat.png",
  "/project_e-commerce/themes/images/logo.png",
  "/project_e-commerce/themes/images/tabRepeatInactive.png",
  "/project_e-commerce/themes/images/twitter.png",
  "/project_e-commerce/themes/images/youtube.png",
  "/project_e-commerce/themes/images/carousel/1.jpg",
  "/project_e-commerce/themes/images/carousel/2.jpg",
  "/project_e-commerce/themes/images/carousel/3.jpg",
  "/project_e-commerce/themes/images/carousel/4.jpg",
  "/project_e-commerce/themes/images/carousel/5.jpeg",
  "/project_e-commerce/themes/images/carousel/6.jpg",
  "/project_e-commerce/themes/images/produk/sample1.jpg",
  "/project_e-commerce/themes/images/produk/sample2.jpg",
  "/project_e-commerce/themes/images/produk/sample3.png",
  "/project_e-commerce/themes/images/produk/sample4.jpg",
  "/project_e-commerce/themes/js/bootshop.js",
  "/project_e-commerce/themes/js/bootstrap.min.js",
  "/project_e-commerce/themes/js/jquery.js",
  "/project_e-commerce/themes/js/jquery.lightbox-0.5.js",
  "/project_e-commerce/themes/js/less.js",
  "/project_e-commerce/themes/js/google-code-prettify/prettify.css",
  "/project_e-commerce/themes/js/google-code-prettify/prettify.js"
];

// Install SW + Cache asset
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("Caching assets...");
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch handler (Offline support)
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Menggunakan cache jika tersedia
        return response || fetch(event.request);
      })
  );
});
