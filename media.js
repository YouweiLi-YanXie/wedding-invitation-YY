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
const invitationPhotos = new Map();
const invitationPhotoQueue = [];
const invitationPhotoRequests = new WeakMap();
let invitationPhotoDownloads = 0;
let invitationVideoPriority = false;
function runInvitationPhotoQueue() {
  while (!invitationVideoPriority && invitationPhotoDownloads<2 && invitationPhotoQueue.length) {
    const job=invitationPhotoQueue.shift();
    job.started=true;
    invitationPhotoDownloads++;
    (async()=>{
      const response=await fetchSavedMedia(job.source,{priority:job.priority});
      if (!response.ok) throw new Error('Photo download failed');
      const blob=await response.blob();
      if (!blob.size) throw new Error('Empty photo');
      return URL.createObjectURL(blob);
    })().then(job.resolve,error=>{
      invitationPhotos.delete(job.source);
      job.reject(error);
    }).finally(()=>{invitationPhotoDownloads--;runInvitationPhotoQueue();});
  }
}
function setInvitationVideoPriority(active) {
  invitationVideoPriority=active;
  runInvitationPhotoQueue();
}
function prepareInvitationPhoto(source,priority='low') {
  let job=invitationPhotos.get(source);
  if (!job) {
    job={source,priority,started:false};
    job.promise=new Promise((resolve,reject)=>{job.resolve=resolve;job.reject=reject;});
    invitationPhotos.set(source,job);
    invitationPhotoQueue.push(job);
  }
  if (priority==='high' && !job.started) {
    job.priority='high';
    invitationPhotoQueue.splice(invitationPhotoQueue.indexOf(job),1);
    invitationPhotoQueue.unshift(job);
  }
  runInvitationPhotoQueue();
  return job.promise;
}
function displayInvitationPhoto(image,source) {
  // The same compressed blob serves preloading and viewing; stale requests cannot replace a newer page.
  const request={source};
  invitationPhotoRequests.set(image,request);
  image.removeAttribute('src');
  if (!source) return;
  prepareInvitationPhoto(source,'high').then(url=>{
    if (invitationPhotoRequests.get(image)===request) image.src=url;
  }).catch(()=>{
    if (invitationPhotoRequests.get(image)===request) image.dispatchEvent(new Event('error'));
  });
}
function preloadInvitationPhotos() {
  if (invitationPhotoWarmup) return invitationPhotoWarmup;
  invitationPhotoWarmup = (async()=>{
    const urls=[];
    const count=Math.max(0,...photoCollections.map(collection=>collection.photos.length));
    for (let index=0;index<count;index++) {
      for (const collection of photoCollections) {
        const source=collection.photos[index]?.src;
        if (source && !urls.includes(source)) urls.push(source);
      }
    }
    // Warm clear photos from both books first; tiny previews load only when needed.
    const results=await Promise.allSettled(urls.map(url=>prepareInvitationPhoto(url)));
    return {prepared:results.filter(result=>result.status==='fulfilled').length,total:urls.length};
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
