'use strict';
const VERSION = '20261120-7';
const ROOT = self.registration.scope;
const SHELL_PREFIX = 'yy-shell:' + ROOT + ':';
const SHELL_CACHE = SHELL_PREFIX + VERSION;
const MEDIA_CACHE = 'yy-media-v1:' + ROOT;
const shell = ['./','./index.html','./cover-fit.css','./cover-fit.js','./style.css','./typography.css','./gallery.css','./intro.css',
  './app.js','./blessings.js','./interactions.js','./gallery.js','./media.js','./intro.js',
  './assets/fonts/PinyonScript-Regular.ttf','./assets/fonts/InvitationSong.woff2','./assets/fonts/LongCang-Names.woff2',
  './assets/monogram.svg','./assets/ribbon.svg','./assets/glass-heart.svg','./assets/heart-mask.svg',
  './assets/video/wedding-prelude-poster-small.webp'];
const versioned = shell.map(path=>/\.(?:css|js|ttf|woff2)$/.test(path)?path+'?v='+VERSION:path);
self.addEventListener('install',event => event.waitUntil((async()=>{
  const cache=await caches.open(SHELL_CACHE);
  // An incomplete upgrade leaves the previous working version installed.
  await Promise.all(versioned.map(async path=>{
    const url=new URL(path,ROOT).href;
    const response=await fetch(url,{cache:path==='./' || path==='./index.html'?'reload':'default'});
    if (!response.ok) throw new Error('Incomplete invitation cache');
    await cache.put(url,response);
  }));
  await self.skipWaiting();
})()));
self.addEventListener('activate',event => event.waitUntil((async()=>{
  for (const key of await caches.keys()) if (key.startsWith(SHELL_PREFIX) && key!==SHELL_CACHE) await caches.delete(key);
  await self.clients.claim();
})()));
self.addEventListener('fetch',event => {
  const request=event.request,url=new URL(request.url);
  if (request.method!=='GET' || !url.href.startsWith(ROOT) || request.headers.has('range')) return;
  const media=/\/assets\/photos\/.*\.webp$/.test(url.pathname) || url.pathname.endsWith('/assets/video/wedding-prelude-mobile-lite.mp4') || url.pathname.endsWith('/assets/audio/a-thousand-years-mobile.m4a');
  const page=request.mode==='navigate' && (url.pathname===new URL(ROOT).pathname || url.pathname===new URL('index.html',ROOT).pathname);
  if (!media && !page && !/\.(?:css|js|svg|ttf|woff2|webp)$/.test(url.pathname)) return;
  event.respondWith((async()=>{
    const key=page?ROOT:request;
    let cache;
    try {
      cache=await caches.open(media?MEDIA_CACHE:SHELL_CACHE);
      const saved=await cache.match(key);
      if (saved) return saved;
    } catch {return fetch(request);}
    const response=await fetch(request);
    if (response.status===200) {
      const copy=response.clone();
      event.waitUntil((async()=>{
        try {
          await cache.put(key,copy);
          if (media) {
            const keys=await cache.keys();
            for (const old of keys.slice(0,Math.max(0,keys.length-256))) await cache.delete(old);
          }
        } catch { /* Keep the network response when storage is full. */ }
      })());
    }
    return response;
  })());
});
