'use strict';
const invitationMediaCache = 'yy-media-v1:' + new URL('./',window.location.href).href;
async function fetchSavedMedia(url,options) {
  let cache;
  try {
    if ('caches' in window) {
      cache = await caches.open(invitationMediaCache);
      const saved = await cache.match(url);
      if (saved) return saved;
    }
  } catch { /* Storage errors must not prevent playback. */ }
  const response = await fetch(url,options);
  if (cache && response.status===200) cache.put(url,response.clone()).catch(()=>{});
  return response;
}
window.addEventListener('load',() => {
  if ('serviceWorker' in navigator && window.isSecureContext) {
    navigator.serviceWorker.register('./sw.js',{updateViaCache:'none'}).catch(()=>{});
  }
});
