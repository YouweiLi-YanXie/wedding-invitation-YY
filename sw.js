'use strict';
const VERSION = '20261122-1';
const ROOT = self.registration.scope;
const SHELL_PREFIX = 'yy-shell:' + ROOT + ':';
const SHELL_CACHE = SHELL_PREFIX + VERSION;
const MEDIA_CACHE = 'yy-media-v1:' + ROOT;
const shell = ['./','./index.html','./cover-fit.css','./cover-fit.js','./style.css','./typography.css','./gallery.css','./intro.css',
  './app.js','./blessings.js','./interactions.js','./gallery.js','./page-curl.js','./media.js','./intro.js',
  './assets/fonts/PinyonScript-Regular.ttf','./assets/fonts/InvitationSong.woff2','./assets/fonts/LongCang-Names.woff2',
  './assets/monogram.svg','./assets/ribbon.svg',
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
  if (request.method!=='GET' || !url.href.startsWith(ROOT)) return;
  const media=/\/assets\/photos\/.*\.webp$/.test(url.pathname) || url.pathname.endsWith('/assets/video/wedding-prelude-mobile-lite.mp4') || url.pathname.endsWith('/assets/audio/a-thousand-years-mobile.m4a');
  const page=request.mode==='navigate' && (url.pathname===new URL(ROOT).pathname || url.pathname===new URL('index.html',ROOT).pathname);
  const range=request.headers.get('range');
  if (range && !media) return;
  if (!media && !page && !/\.(?:css|js|svg|ttf|woff2|webp)$/.test(url.pathname)) return;
  event.respondWith((async()=>{
    const key=page?ROOT:request;
    let cache;
    try {
      cache=await caches.open(media?MEDIA_CACHE:SHELL_CACHE);
      const saved=await cache.match(range?request.url:key);
      if (saved) {
        if (!range) return saved;
        const match=/^bytes=(\d*)-(\d*)$/.exec(range);
        if (!match || (!match[1] && !match[2])) return fetch(request);
        const blob=await saved.blob(),size=blob.size;
        const start=match[1]?Number(match[1]):Math.max(0,size-Number(match[2]));
        const end=match[1] && match[2]?Math.min(Number(match[2]),size-1):size-1;
        if (start>=size || end<start) return new Response(null,{status:416,headers:{'Content-Range':'bytes */'+size}});
        const headers=new Headers(saved.headers);
        headers.set('Content-Range',`bytes ${start}-${end}/${size}`);
        headers.set('Content-Length',String(end-start+1));
        headers.set('Accept-Ranges','bytes');
        return new Response(blob.slice(start,end+1),{status:206,headers});
      }
    } catch {return fetch(request);}
    const response=await fetch(request);
    const fullRange=/^bytes 0-(\d+)\/(\d+)$/.exec(response.headers.get('Content-Range') || '');
    if (response.status===200 || (response.status===206 && fullRange && Number(fullRange[1])+1===Number(fullRange[2]))) {
      let copy=response.clone();
      event.waitUntil((async()=>{
        try {
          if (copy.status===206) {
            const headers=new Headers(copy.headers);
            headers.delete('Content-Range');
            copy=new Response(await copy.blob(),{status:200,headers});
          }
          await cache.put(range?request.url:key,copy);
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
