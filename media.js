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
let invitationWarmup;
let invitationPhotoWarmup;
function preloadInvitationPhotos() {
  if (invitationPhotoWarmup) return invitationPhotoWarmup;
  invitationPhotoWarmup = (async()=>{
    const photos = photoCollections.flatMap(collection=>collection.photos);
    const urls = [...new Set([...photos.map(photo=>photo.preview),...photos.map(photo=>photo.src)].filter(Boolean))];
    let prepared = 0;
    // One low-priority download at a time leaves room for the visible photo and film.
    for (const url of urls) {
      try {
        const response = await fetchSavedMedia(url,{priority:'low'});
        if (!response.ok) continue;
        await response.arrayBuffer();
        prepared++;
      } catch { /* Opening the album can retry an interrupted download. */ }
    }
    return {prepared,total:urls.length};
  })();
  return invitationPhotoWarmup;
}
function preloadInvitationMedia() {
  if (invitationWarmup) return invitationWarmup;
  invitationWarmup = (async()=>{
    const [result] = await Promise.all([preloadInvitationPhotos(),prepareMusic().catch(()=>{})]);
    return result;
  })();
  return invitationWarmup;
}
window.addEventListener('DOMContentLoaded',preloadInvitationPhotos,{once:true});
window.addEventListener('load',() => {
  if ('serviceWorker' in navigator && window.isSecureContext) {
    navigator.serviceWorker.register('./sw.js',{updateViaCache:'none'}).catch(()=>{});
  }
});
