;
const CACHE_NAME='elote_cache',
urlToCache=[
    './',
    './script.js',
    './elote.css',
    './elote.jpg',
   
  
    './square.png',
    './star.png'
]

self.addEventListener('install',e=>{
e.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache=>{
        return cache.addAll(urlToCache)
        .then(()=>self.skipWaiting())
    })

)
})
self.addEventListener('activate',e=>{
  const cacheWhite=[CACHE_NAME]
  
  e.waitUntil(
      caches.keys()
      .then(cachesNames=>{
          cachesNames.map(cacheName=>{
              if(cacheWhite.indexOf(cacheName)===-1){
                  return caches.delete(cacheName)
              }
          })
      })
      .then(()=>self.clients.claim())
  )
})
self.addEventListener('fetch',e=>{
    e.respondWith(
        caches.match(e.request)
        .then(res=>{
            if(res){
                return res
            }
            return fetch(e.request)
        })
    )
})