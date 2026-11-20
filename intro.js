'use strict';
const invitationUrl = new URL(window.location.href);
if (invitationUrl.searchParams.has('v')) {
  invitationUrl.searchParams.delete('v');
  window.history.replaceState(window.history.state,'',invitationUrl.pathname+invitationUrl.search+invitationUrl.hash);
}
const filmIntro = document.getElementById('film-intro');
const introVideo = document.getElementById('intro-video');
const playIntro = document.getElementById('play-intro');
const introPlayLabel = document.getElementById('intro-play-label');
const introStatus = document.getElementById('intro-status');
let introFinished = false;
let introReady = false;
let introController;
let introObjectUrl;
let introPreparation;
function finishIntro() {
  if (introFinished) return;
  introFinished=true;
  introController?.abort();
  introVideo.pause();
  introVideo.controls=false;
  introVideo.removeAttribute('src');
  introVideo.load();
  if (introObjectUrl) URL.revokeObjectURL(introObjectUrl);
  filmIntro.hidden=true;
  preloadInvitationMedia();
  document.getElementById('cover').hidden=false;
  window.scrollTo({top:0,behavior:'auto'});
  document.getElementById('open-letter').focus({preventScroll:true});
}
function prepareIntro() {
  if (introReady) return Promise.resolve();
  if (introPreparation) return introPreparation;
  introPreparation = (async()=>{
  introController=new AbortController();
  let timer=setTimeout(()=>introController?.abort(),30000);
  introPlayLabel.textContent='准备短片…';
  introStatus.textContent='正在准备完整短片，也可以直接拆开邀请。';
  try {
    const response=await fetchSavedMedia(introVideo.dataset.src,{signal:introController.signal});
    if (!response.ok) throw new Error('Video download failed');
    const total=Number(response.headers.get('content-length'));
    let blob;
    if (response.body?.getReader) {
      const reader=response.body.getReader(),parts=[];
      let received=0;
      for (;;) {
        const {done,value}=await reader.read();
        if (done) break;
        clearTimeout(timer);
        timer=setTimeout(()=>introController?.abort(),30000);
        parts.push(value);received+=value.byteLength;
        if (total) introPlayLabel.textContent='准备中 '+Math.min(100,Math.round(received/total*100))+'%';
      }
      blob=new Blob(parts,{type:'video/mp4'});
    } else blob=await response.blob();
    if (introFinished) return;
    if (!blob.size) throw new Error('Empty video');
    introObjectUrl=URL.createObjectURL(blob);
    introVideo.src=introObjectUrl;
    introVideo.load();
    introReady=true;
    preloadInvitationMedia();
  } finally {
    clearTimeout(timer);
    introController=undefined;
  }
  })().finally(()=>{introPreparation=undefined;});
  return introPreparation;
}
playIntro.addEventListener('click',async()=>{
  if (introFinished || playIntro.disabled) return;
  playIntro.disabled=true;
  stopMusic();
  try {
    if (!introReady) await prepareIntro();
    if (introFinished || document.hidden) return;
    introVideo.controls=true;
    await introVideo.play();
    if (introFinished || document.hidden) introVideo.pause();
  } catch {
    if (!introFinished) {
      playIntro.hidden=false;
      introPlayLabel.textContent=introReady?'轻触播放':'重试播放';
      introStatus.textContent=introReady?'短片已准备好，轻触开始播放。':'网络有些慢，可以重试或直接拆开邀请。';
    }
  } finally {playIntro.disabled=false;}
});
introVideo.addEventListener('play',()=>{
  if (introFinished) {introVideo.pause();return;}
  stopMusic();playIntro.hidden=true;
  introStatus.textContent='把这份欢喜，先讲给你听。';
});
introVideo.addEventListener('pause',()=>{
  if (introFinished || introVideo.ended) return;
  playIntro.hidden=false;introPlayLabel.textContent='继续播放';
  playIntro.setAttribute('aria-label','继续播放开场短片');
});
introVideo.addEventListener('error',()=>{
  if (introFinished) return;
  introReady=false;
  if (introObjectUrl) URL.revokeObjectURL(introObjectUrl);
  introObjectUrl=undefined;
  playIntro.hidden=false;introPlayLabel.textContent='重试播放';
  introStatus.textContent='短片暂时未能播放，可以重试或直接拆开邀请。';
});
// Complete original dialogue and the one-second final-frame hold remain embedded.
introVideo.addEventListener('ended',finishIntro);
document.getElementById('skip-intro').addEventListener('click',finishIntro);
document.addEventListener('visibilitychange',()=>{if (document.hidden && !introFinished) introVideo.pause();});
document.addEventListener('DOMContentLoaded',()=>{
  if (introFinished) return;
  prepareIntro().then(()=>{
    if (!introFinished && introVideo.paused) {
      introPlayLabel.textContent='轻触播放';
      introStatus.textContent='短片已准备好，轻触开始播放。';
    }
  }).catch(()=>{
    if (!introFinished) {
      introPlayLabel.textContent='重试播放';
      introStatus.textContent='网络有些慢，可以重试或直接拆开邀请。';
    }
  });
});
