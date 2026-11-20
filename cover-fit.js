'use strict';
const letterCoverPhoto=document.querySelector('.letter-photo');
const letterCoverImage=letterCoverPhoto?.querySelector('img');
if (letterCoverImage) {
  letterCoverPhoto.classList.toggle('is-image-loading',!letterCoverImage.complete);
  for (const event of ['load','error']) letterCoverImage.addEventListener(event,()=>letterCoverPhoto.classList.remove('is-image-loading'));
}
const fittedCoverPage=document.getElementById('cover');
const fittedCoverComposition=fittedCoverPage?.querySelector('.cover-composition');
function fitCoverPage() {
  if (!fittedCoverComposition || fittedCoverPage.hidden || !fittedCoverPage.clientHeight) return;
  const scale=Math.max(.25,Math.min(1,(fittedCoverPage.clientWidth-24)/375,(fittedCoverPage.clientHeight-24)/760));
  fittedCoverComposition.style.setProperty('--cover-scale',String(scale));
  fittedCoverComposition.style.setProperty('--cover-touch-pad',Math.max(0,(44/scale-44)/2)+'px');
  fittedCoverComposition.dataset.fitted='true';
  if (!fittedCoverPage.contains(document.activeElement)) {
    const entry=document.getElementById('enter-invitation');
    (entry.hidden?document.getElementById('open-letter'):entry).focus({preventScroll:true});
  }
}
if (fittedCoverComposition) {
  if ('ResizeObserver' in window) new ResizeObserver(fitCoverPage).observe(fittedCoverPage);
  window.addEventListener('resize',fitCoverPage);
  for (const id of ['skip-intro','replay']) document.getElementById(id)?.addEventListener('click',()=>requestAnimationFrame(fitCoverPage));
  document.getElementById('intro-video')?.addEventListener('ended',()=>requestAnimationFrame(fitCoverPage));
  fitCoverPage();
}
