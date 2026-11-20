'use strict';
const wedding = {
  names: '李有为 & 谢妍',
  welcome: '20270130T073000Z',
  banquet: '20270130T101800Z',
  address: '江苏省泰州市泰兴市国庆中路130号 金陵国际大酒店 四楼水晶厅',
};
let toastTimer;
function toast(message) {
  const box = document.getElementById('toast');
  box.textContent = message;
  box.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => box.classList.remove('visible'), 4200);
}
async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try { await navigator.clipboard.writeText(text); return true; } catch { /* Fall back for embedded browsers. */ }
  }
  const input = document.createElement('textarea');
  input.value = text;
  input.setAttribute('aria-label', '待复制的内容');
  input.style.cssText = 'position:fixed;left:-9999px;top:0';
  document.body.append(input);
  const focused = document.activeElement;
  input.select();
  let success = false;
  try { success = document.execCommand('copy'); } catch { /* Show the manual-copy instruction. */ }
  input.remove();
  focused?.focus();
  return success;
}
document.getElementById('copy-address').addEventListener('click', async () => {
  toast(await copyText(wedding.address) ? '完整地址已复制，期待与你在水晶厅相见。' : '请长按页面上的酒店地址进行复制。');
});
function calendarText() {
  const escape = value => value.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
  const stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const event = (id, start, title) => [
    'BEGIN:VEVENT', `UID:${id}@youweili-yanxie.github.io`, `DTSTAMP:${stamp}`,
    `DTSTART:${start}`, `SUMMARY:${escape(title)}`, `LOCATION:${escape(wedding.address)}`,
    'DESCRIPTION:2027年1月30日（丙午年腊月廿三），15:30迎宾，18:18开席。金陵国际大酒店四楼水晶厅，期待与你相见。', 'END:VEVENT',
  ];
  return ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Youwei and Yan//Wedding//CN', 'CALSCALE:GREGORIAN',
    ...event('welcome-20270130', wedding.welcome, `${wedding.names}的婚礼 · 迎宾`),
    ...event('banquet-20270130', wedding.banquet, `${wedding.names}的婚礼 · 开席`),
    'END:VCALENDAR', '',
  ].join('\r\n');
}
document.getElementById('calendar').addEventListener('click', () => {
  const url = URL.createObjectURL(new Blob([calendarText()], { type: 'text/calendar;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = '李有为与谢妍-婚礼日程.ics';
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 30000);
  toast('婚礼日历已生成；若微信限制下载，请在系统浏览器中打开。');
});
const musicTrack = document.getElementById('wedding-music');
// Preserve the original gain and whole song; only the viewing copy is compressed.
musicTrack.volume = 1;
let musicBusy = false;
let musicWanted = false;
let musicReady = false;
let musicController;
let musicObjectUrl;
let musicResumeOnReturn = false;
function updateMusicState(playing) {
  const button = document.getElementById('music');
  button.setAttribute('aria-pressed',String(playing));
  button.setAttribute('aria-label',playing?'暂停 A Thousand Years':'播放 A Thousand Years');
  button.title='A Thousand Years · 浅绯色的喵 · 钢琴与小提琴';
  document.getElementById('music-label').textContent=playing?'音乐播放中':'开启音乐';
}
function stopMusic(preserveResume = false) {
  if (!preserveResume) musicResumeOnReturn=false;
  musicWanted=false;
  musicController?.abort();
  musicTrack.pause();
  updateMusicState(false);
}
async function prepareMusic() {
  musicController=new AbortController();
  let timer=setTimeout(()=>musicController?.abort(),30000);
  document.getElementById('music-label').textContent='音乐准备中';
  try {
    const response=await fetchSavedMedia(musicTrack.dataset.src,{signal:musicController.signal});
    if (!response.ok) throw new Error('Music download failed');
    let blob;
    if (response.body?.getReader) {
      const reader=response.body.getReader(),parts=[];
      const total=Number(response.headers.get('content-length'));
      let received=0;
      for (;;) {
        const {done,value}=await reader.read();
        if (done) break;
        clearTimeout(timer);timer=setTimeout(()=>musicController?.abort(),30000);
        parts.push(value);received+=value.byteLength;
        if (total) document.getElementById('music-label').textContent='音乐准备 '+Math.min(100,Math.round(received/total*100))+'%';
      }
      blob=new Blob(parts,{type:'audio/mp4'});
    } else blob=await response.blob();
    if (!musicWanted) return;
    if (!blob.size) throw new Error('Empty music');
    const position=musicTrack.currentTime || 0;
    musicObjectUrl=URL.createObjectURL(blob);
    musicTrack.src=musicObjectUrl;
    musicTrack.load();
    musicTrack.currentTime=position;
    musicReady=true;
  } finally {clearTimeout(timer);musicController=undefined;}
}
async function startMusic() {
  if (musicBusy || !musicTrack.paused) return;
  musicBusy=true;
  musicWanted=true;
  try {
    if (!musicReady) await prepareMusic();
    if (!musicWanted || document.hidden) return;
    await musicTrack.play();
    if (!musicWanted || document.hidden) {musicTrack.pause();return;}
    updateMusicState(true);
  } catch {
    if (musicWanted) {
      musicWanted=false;
      updateMusicState(false);
      document.getElementById('music-label').textContent=musicReady?'轻触播放音乐':'重试音乐';
      toast(musicReady?'音乐已准备好，请轻触音乐按钮播放。':'音乐未能开启，可以点击重试。');
    }
  } finally {
    musicBusy=false;
    if (musicResumeOnReturn && !document.hidden) {musicResumeOnReturn=false;startMusic();}
  }
}
document.getElementById('music').addEventListener('click',()=>{
  if (!musicTrack.paused || musicBusy) stopMusic();
  else startMusic();
});
musicTrack.addEventListener('playing',()=>{if(musicWanted)updateMusicState(true);});
musicTrack.addEventListener('pause',()=>{
  if (musicWanted && !musicBusy && !document.hidden) {
    updateMusicState(false);
    document.getElementById('music-label').textContent='轻触继续音乐';
  }
});
musicTrack.addEventListener('error',()=>{
  if (!musicWanted) return;
  musicWanted=false;musicReady=false;
  if (musicObjectUrl) URL.revokeObjectURL(musicObjectUrl);
  musicObjectUrl=undefined;
  updateMusicState(false);
  document.getElementById('music-label').textContent='重试音乐';
});
document.addEventListener('visibilitychange',()=>{
  if (document.hidden) {musicResumeOnReturn=musicWanted;stopMusic(true);}
  else if (musicResumeOnReturn && !musicBusy) {musicResumeOnReturn=false;startMusic();}
});
