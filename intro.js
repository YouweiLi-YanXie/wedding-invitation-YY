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
const introBuffering = document.getElementById('intro-buffering');
let introFinished = false;
let introPrepared = false;
let introReady = false;
function setIntroBuffering(active) {
  introBuffering.hidden=!active;
  filmIntro.classList.toggle('is-buffering',active);
  setInvitationVideoPriority(active || (!introVideo.paused && !introFinished));
}
function finishIntro() {
  if (introFinished) return;
  introFinished=true;
  introVideo.pause();
  introVideo.controls=false;
  introVideo.removeAttribute('src');
  introVideo.load();
  setIntroBuffering(false);
  filmIntro.hidden=true;
  preloadInvitationMedia();
  document.getElementById('cover').hidden=false;
  window.scrollTo({top:0,behavior:'auto'});
  document.getElementById('open-letter').focus({preventScroll:true});
}
function prepareIntro() {
  if (introPrepared || introFinished) return;
  introPrepared=true;
  introVideo.preload='auto';
  introVideo.src=introVideo.dataset.src;
  introVideo.load();
  introStatus.textContent='短片载入中，轻触即可播放，也可直接拆开邀请。';
}
playIntro.addEventListener('click',async()=>{
  if (introFinished || playIntro.disabled) return;
  playIntro.disabled=true;
  stopMusic();
  prepareIntro();
  setIntroBuffering(!introReady);
  introPlayLabel.textContent='载入中…';
  try {
    introVideo.controls=true;
    // Keep play() inside the tap gesture; the fast-start MP4 streams without waiting for its end.
    await introVideo.play();
    if (introFinished || document.hidden) introVideo.pause();
  } catch {
    if (!introFinished) {
      setIntroBuffering(false);
      playIntro.hidden=false;
      introPlayLabel.textContent=introReady?'轻触播放':'重试播放';
      introStatus.textContent=introReady?'短片已准备好，轻触开始播放。':'网络有些慢，可以重试或直接拆开邀请。';
    }
  } finally {playIntro.disabled=false;}
});
introVideo.addEventListener('loadeddata',()=>{
  if (introFinished) return;
  introReady=true;
  if (introVideo.paused && !playIntro.disabled) {
    introPlayLabel.textContent='轻触播放';
    introStatus.textContent='轻触播放，把这份欢喜先讲给你听。';
  }
});
introVideo.addEventListener('play',()=>{
  if (introFinished) {introVideo.pause();return;}
  stopMusic();playIntro.hidden=true;
  setInvitationVideoPriority(true);
});
introVideo.addEventListener('playing',()=>{
  if (introFinished) return;
  setIntroBuffering(false);
  introStatus.textContent='把这份欢喜，先讲给你听。';
});
introVideo.addEventListener('waiting',()=>{
  if (introFinished || introVideo.paused) return;
  setIntroBuffering(true);
  introStatus.textContent='正在缓冲，请稍候，也可以直接拆开邀请。';
});
introVideo.addEventListener('pause',()=>{
  if (introFinished || introVideo.ended) return;
  setIntroBuffering(false);
  playIntro.hidden=false;introPlayLabel.textContent='继续播放';
  playIntro.setAttribute('aria-label','继续播放开场短片');
});
introVideo.addEventListener('error',()=>{
  if (introFinished) return;
  introReady=false;introPrepared=false;
  setIntroBuffering(false);
  playIntro.hidden=false;introPlayLabel.textContent='重试播放';
  introStatus.textContent='短片暂时未能播放，可以重试或直接拆开邀请。';
});
// Complete original dialogue and the one-second final-frame hold remain embedded.
introVideo.addEventListener('ended',finishIntro);
document.getElementById('skip-intro').addEventListener('click',finishIntro);
document.addEventListener('visibilitychange',()=>{if (document.hidden && !introFinished) introVideo.pause();});
document.addEventListener('DOMContentLoaded',prepareIntro);
