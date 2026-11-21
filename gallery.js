'use strict';
// Add {src, alt, caption} entries to a collection when the photos are ready.
const photoCollections = [
  {
    "id": "portraits",
    "title": "大婚肖像",
    "english": "THE PORTRAITS",
    "group": "第一册",
    "description": "郑重定格，属于我们的模样。",
    "cover": "./assets/photos/portraits-cover.webp?v=ff13c4b56323",
    "photos": [
      {
        "src": "./assets/photos/castle-03-mobile.webp?v=db59f7ec2adf",
        "preview": "./assets/photos/castle-03-preview.webp?v=3487ddf621c6",
        "alt": "李有为与谢妍 · 大婚肖像 · 第1张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/wedding-portrait-01-mobile.webp?v=fce59b35d728",
        "preview": "./assets/photos/wedding-portrait-01-preview.webp?v=ad9cf29e7ead",
        "alt": "李有为与谢妍 · 大婚肖像 · 第2张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/garden-01-mobile.webp?v=d88940df88d8",
        "preview": "./assets/photos/garden-01-preview.webp?v=fb82b4332f46",
        "alt": "李有为与谢妍 · 大婚肖像 · 第3张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/oil-painting-01-mobile.webp?v=10cabf0a3dc2",
        "preview": "./assets/photos/oil-painting-01-preview.webp?v=a40362e0c96e",
        "alt": "李有为与谢妍 · 大婚肖像 · 第4张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/castle-01-mobile.webp?v=045ccdf6e463",
        "preview": "./assets/photos/castle-01-preview.webp?v=033c7dfb2bad",
        "alt": "李有为与谢妍 · 大婚肖像 · 第5张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/oil-painting-02-mobile.webp?v=a65e80082c44",
        "preview": "./assets/photos/oil-painting-02-preview.webp?v=e4aba1a4c899",
        "alt": "李有为与谢妍 · 大婚肖像 · 第6张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/castle-02-mobile.webp?v=1754eb5e396d",
        "preview": "./assets/photos/castle-02-preview.webp?v=6bb35b904fdd",
        "alt": "李有为与谢妍 · 大婚肖像 · 第7张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/wedding-portrait-02-mobile.webp?v=ccf3ec3bfdd5",
        "preview": "./assets/photos/wedding-portrait-02-preview.webp?v=49d36abe0ae5",
        "alt": "李有为与谢妍 · 大婚肖像 · 第8张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/garden-02-mobile.webp?v=a368d57b8998",
        "preview": "./assets/photos/garden-02-preview.webp?v=bd19223b4907",
        "alt": "李有为与谢妍 · 大婚肖像 · 第9张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/oil-painting-03-mobile.webp?v=eb86153b8858",
        "preview": "./assets/photos/oil-painting-03-preview.webp?v=11a34ccae623",
        "alt": "李有为与谢妍 · 大婚肖像 · 第10张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/garden-03-mobile.webp?v=4be1a70d2935",
        "preview": "./assets/photos/garden-03-preview.webp?v=9a844e1af7e2",
        "alt": "李有为与谢妍 · 大婚肖像 · 第11张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/wedding-portrait-03-mobile.webp?v=d322af2f8574",
        "preview": "./assets/photos/wedding-portrait-03-preview.webp?v=5eb69951a649",
        "alt": "李有为与谢妍 · 大婚肖像 · 第12张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/garden-04-mobile.webp?v=ccd623e077de",
        "preview": "./assets/photos/garden-04-preview.webp?v=ff842f49e295",
        "alt": "李有为与谢妍 · 大婚肖像 · 第13张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/wedding-portrait-04-mobile.webp?v=09d9d620caff",
        "preview": "./assets/photos/wedding-portrait-04-preview.webp?v=e77f30c94fb7",
        "alt": "李有为与谢妍 · 大婚肖像 · 第14张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/oil-painting-04-mobile.webp?v=f26bfb84ceac",
        "preview": "./assets/photos/oil-painting-04-preview.webp?v=d47a4ed8dcad",
        "alt": "李有为与谢妍 · 大婚肖像 · 第15张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/oil-painting-05-mobile.webp?v=1fb75b045f3c",
        "preview": "./assets/photos/oil-painting-05-preview.webp?v=d9c572685118",
        "alt": "李有为与谢妍 · 大婚肖像 · 第16张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/garden-05-mobile.webp?v=cd889e499e49",
        "preview": "./assets/photos/garden-05-preview.webp?v=3257fcbd3860",
        "alt": "李有为与谢妍 · 大婚肖像 · 第17张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/oil-painting-06-mobile.webp?v=ad178740479d",
        "preview": "./assets/photos/oil-painting-06-preview.webp?v=332b69de8567",
        "alt": "李有为与谢妍 · 大婚肖像 · 第18张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/garden-06-mobile.webp?v=d46869801fdd",
        "preview": "./assets/photos/garden-06-preview.webp?v=650ec6c34ee4",
        "alt": "李有为与谢妍 · 大婚肖像 · 第19张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/wedding-portrait-05-mobile.webp?v=b39d9c7e0b1a",
        "preview": "./assets/photos/wedding-portrait-05-preview.webp?v=542bc17d9fe6",
        "alt": "李有为与谢妍 · 大婚肖像 · 第20张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/wedding-portrait-06-mobile.webp?v=a27482fdfe67",
        "preview": "./assets/photos/wedding-portrait-06-preview.webp?v=1d9172f5244b",
        "alt": "李有为与谢妍 · 大婚肖像 · 第21张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/garden-07-mobile.webp?v=afc6acb9fae5",
        "preview": "./assets/photos/garden-07-preview.webp?v=5906e3396226",
        "alt": "李有为与谢妍 · 大婚肖像 · 第22张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/wedding-portrait-07-mobile.webp?v=b7aad504c961",
        "preview": "./assets/photos/wedding-portrait-07-preview.webp?v=395e60870311",
        "alt": "李有为与谢妍 · 大婚肖像 · 第23张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/wedding-portrait-08-mobile.webp?v=c5d1a1c2bcd7",
        "preview": "./assets/photos/wedding-portrait-08-preview.webp?v=c630dddf3b12",
        "alt": "李有为与谢妍 · 大婚肖像 · 第24张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/oil-painting-07-mobile.webp?v=42dfe7131f49",
        "preview": "./assets/photos/oil-painting-07-preview.webp?v=1b4cdd68b5d8",
        "alt": "李有为与谢妍 · 大婚肖像 · 第25张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/oil-painting-08-mobile.webp?v=a587a11f88e6",
        "preview": "./assets/photos/oil-painting-08-preview.webp?v=3436c1a8dbb6",
        "alt": "李有为与谢妍 · 大婚肖像 · 第26张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/garden-08-mobile.webp?v=0629b83d86d5",
        "preview": "./assets/photos/garden-08-preview.webp?v=6edcb0b3060a",
        "alt": "李有为与谢妍 · 大婚肖像 · 第27张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/wedding-portrait-09-mobile.webp?v=5f04a01e2a64",
        "preview": "./assets/photos/wedding-portrait-09-preview.webp?v=ff8e16e053a9",
        "alt": "李有为与谢妍 · 大婚肖像 · 第28张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/garden-09-mobile.webp?v=92ef3f799a40",
        "preview": "./assets/photos/garden-09-preview.webp?v=12beed57686c",
        "alt": "李有为与谢妍 · 大婚肖像 · 第29张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/wedding-portrait-10-mobile.webp?v=a0e2563e149c",
        "preview": "./assets/photos/wedding-portrait-10-preview.webp?v=9980440b2d21",
        "alt": "李有为与谢妍 · 大婚肖像 · 第30张",
        "caption": "以爱为名，与你共赴。"
      }
    ],
    "date": "2027年01月30日"
  },
  {
    "id": "certificate",
    "title": "领证全记",
    "english": "OUR PROMISE",
    "group": "第二册",
    "description": "从这一天起，我们有了共同的名字。",
    "cover": "./assets/photos/certificate-cover.webp?v=0b8f1bc9801c",
    "photos": [
      {
        "src": "./assets/photos/certificate/certificate-11-mobile.webp?v=dd9cd278fe8d",
        "preview": "./assets/photos/certificate/certificate-11-preview.webp?v=82aedd71c34f",
        "alt": "李有为与谢妍 · 领证全记 · 第1张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate-b1462dd3ea45-mobile.webp?v=e18204ce2309",
        "preview": "./assets/photos/certificate-b1462dd3ea45-preview.webp?v=2343db10f334",
        "alt": "李有为与谢妍 · 领证全记 · 第2张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-07-mobile.webp?v=b09583732f96",
        "preview": "./assets/photos/certificate/certificate-07-preview.webp?v=f32c0ff9125f",
        "alt": "李有为与谢妍 · 领证全记 · 第3张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate-a6fffee45030-mobile.webp?v=34eeee4164b0",
        "preview": "./assets/photos/certificate-a6fffee45030-preview.webp?v=46317b509ab7",
        "alt": "李有为与谢妍 · 领证全记 · 第4张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate-5282a5bddb27-mobile.webp?v=d800abfcfea9",
        "preview": "./assets/photos/certificate-5282a5bddb27-preview.webp?v=055b5466e979",
        "alt": "李有为与谢妍 · 领证全记 · 第5张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate-9e66226446ad-mobile.webp?v=d5c7342c4788",
        "preview": "./assets/photos/certificate-9e66226446ad-preview.webp?v=1c170f734fad",
        "alt": "李有为与谢妍 · 领证全记 · 第6张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-08-mobile.webp?v=20e345b30b94",
        "preview": "./assets/photos/certificate/certificate-08-preview.webp?v=2632ab7a9348",
        "alt": "李有为与谢妍 · 领证全记 · 第7张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate-1c54471fc3f2-mobile.webp?v=02ede14d8f6b",
        "preview": "./assets/photos/certificate-1c54471fc3f2-preview.webp?v=49e855ba9a2d",
        "alt": "李有为与谢妍 · 领证全记 · 第8张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-29-mobile.webp?v=95547474f2e1",
        "preview": "./assets/photos/certificate/certificate-29-preview.webp?v=549d50cb2919",
        "alt": "李有为与谢妍 · 领证全记 · 第9张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-06-mobile.webp?v=c2cf2b355118",
        "preview": "./assets/photos/certificate/certificate-06-preview.webp?v=91143cb93991",
        "alt": "李有为与谢妍 · 领证全记 · 第10张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-01-mobile.webp?v=2a89d7829c12",
        "preview": "./assets/photos/certificate/certificate-01-preview.webp?v=84f1aa1613e0",
        "alt": "李有为与谢妍 · 领证全记 · 第11张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-04-mobile.webp?v=a214a878768b",
        "preview": "./assets/photos/certificate/certificate-04-preview.webp?v=b3eca5ee9e6f",
        "alt": "李有为与谢妍 · 领证全记 · 第12张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-05-mobile.webp?v=af481864747c",
        "preview": "./assets/photos/certificate/certificate-05-preview.webp?v=08108db4ac58",
        "alt": "李有为与谢妍 · 领证全记 · 第13张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-02-mobile.webp?v=7bfdd8438939",
        "preview": "./assets/photos/certificate/certificate-02-preview.webp?v=698ab0472181",
        "alt": "李有为与谢妍 · 领证全记 · 第14张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate-e56c4418900f-mobile.webp?v=c1ac7c27a707",
        "preview": "./assets/photos/certificate-e56c4418900f-preview.webp?v=2d108b2e43ad",
        "alt": "李有为与谢妍 · 领证全记 · 第15张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-25-mobile.webp?v=c2cdd06b0722",
        "preview": "./assets/photos/certificate/certificate-25-preview.webp?v=42d71e7596df",
        "alt": "李有为与谢妍 · 领证全记 · 第16张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate-30795256fde6-mobile.webp?v=f7e255ead7d9",
        "preview": "./assets/photos/certificate-30795256fde6-preview.webp?v=240eecb7663d",
        "alt": "李有为与谢妍 · 领证全记 · 第17张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-20-mobile.webp?v=68f70853f782",
        "preview": "./assets/photos/certificate/certificate-20-preview.webp?v=3c99d645f9e6",
        "alt": "李有为与谢妍 · 领证全记 · 第18张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-19-mobile.webp?v=386481da6e02",
        "preview": "./assets/photos/certificate/certificate-19-preview.webp?v=7809cc527117",
        "alt": "李有为与谢妍 · 领证全记 · 第19张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-26-mobile.webp?v=ab9664960134",
        "preview": "./assets/photos/certificate/certificate-26-preview.webp?v=41b97e87f57f",
        "alt": "李有为与谢妍 · 领证全记 · 第20张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate-d58152345465-mobile.webp?v=05dac39dd7af",
        "preview": "./assets/photos/certificate-d58152345465-preview.webp?v=6932b0470879",
        "alt": "李有为与谢妍 · 领证全记 · 第21张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-16-mobile.webp?v=ded2b542a3ba",
        "preview": "./assets/photos/certificate/certificate-16-preview.webp?v=0c89da4fae14",
        "alt": "李有为与谢妍 · 领证全记 · 第22张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-17-mobile.webp?v=24d63a2004e8",
        "preview": "./assets/photos/certificate/certificate-17-preview.webp?v=ad6089f20da3",
        "alt": "李有为与谢妍 · 领证全记 · 第23张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-21-mobile.webp?v=6556edb68596",
        "preview": "./assets/photos/certificate/certificate-21-preview.webp?v=db60f8922919",
        "alt": "李有为与谢妍 · 领证全记 · 第24张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-18-mobile.webp?v=bffdfd2601a9",
        "preview": "./assets/photos/certificate/certificate-18-preview.webp?v=f6d9468f3e5e",
        "alt": "李有为与谢妍 · 领证全记 · 第25张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-23-mobile.webp?v=fee064945bc6",
        "preview": "./assets/photos/certificate/certificate-23-preview.webp?v=9005f1e3864b",
        "alt": "李有为与谢妍 · 领证全记 · 第26张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-24-mobile.webp?v=a8620515a928",
        "preview": "./assets/photos/certificate/certificate-24-preview.webp?v=4db7ab80306a",
        "alt": "李有为与谢妍 · 领证全记 · 第27张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-22-mobile.webp?v=5d66f1ab3d1b",
        "preview": "./assets/photos/certificate/certificate-22-preview.webp?v=7f230b92ecbf",
        "alt": "李有为与谢妍 · 领证全记 · 第28张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate-49339a2717df-mobile.webp?v=a30b7909450b",
        "preview": "./assets/photos/certificate-49339a2717df-preview.webp?v=5882820dbea8",
        "alt": "李有为与谢妍 · 领证全记 · 第29张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate-99655cd45783-mobile.webp?v=3c4bbc60ea27",
        "preview": "./assets/photos/certificate-99655cd45783-preview.webp?v=4b4a7a240b94",
        "alt": "李有为与谢妍 · 领证全记 · 第30张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate-039025a35931-mobile.webp?v=a0adb0933586",
        "preview": "./assets/photos/certificate-039025a35931-preview.webp?v=21d2b3325cc1",
        "alt": "李有为与谢妍 · 领证全记 · 第31张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-30-mobile.webp?v=5ff87f381236",
        "preview": "./assets/photos/certificate/certificate-30-preview.webp?v=bec1f4a949e9",
        "alt": "李有为与谢妍 · 领证全记 · 第32张",
        "caption": "以爱为名，与你共赴。"
      }
    ],
    "date": "2026年11月18日"
  }
];

const albumShelf = document.getElementById('album-shelf');
const photoDialog = document.getElementById('photo-dialog');
const photoImage = document.getElementById('gallery-photo');
const photoEmpty = document.getElementById('gallery-empty');
const photoPrevious = document.getElementById('gallery-previous');
const photoNext = document.getElementById('gallery-next');
const photoClose = document.getElementById('close-gallery');
const photoCount = document.getElementById('gallery-count');
const photoCaption = document.getElementById('gallery-caption');
const photoStage = document.getElementById('gallery-stage');
const photoPreview = document.getElementById('gallery-preview');
const photoOutgoing = document.getElementById('gallery-outgoing');
const photoStatus = document.getElementById('gallery-status');
const photoRetry = document.getElementById('gallery-retry');
const photoLoading = document.getElementById('gallery-loading');
const photoLeaf = document.getElementById('gallery-leaf');
const photoLeafImage = document.getElementById('gallery-leaf-photo');
const photoCurlCanvas = document.getElementById('gallery-curl-canvas');
let photoCurlAnimation;
const openingCover = document.getElementById('gallery-opening-cover');
let albumOpening = false;
let photoTurning = false;
let pendingPhotoTurn;
let photoTurnTimer;
let galleryScrollTop = 0;
let activeCollection;
let activePhoto = 0;
let lastAlbumButton;
const albumButtons = new Map();
const albumCoupleNames = '李有为 & 谢妍';
let seenCollections = [];
try {
  const saved = JSON.parse(localStorage.getItem('wedding-gallery-seen') || '[]');
  if (Array.isArray(saved)) seenCollections = [...new Set(saved.filter(id => photoCollections.some(item => item.id === id)))];
} catch { /* Browsing still works when local storage is unavailable. */ }
const reducedPhotoMotion = matchMedia('(prefers-reduced-motion: reduce)');

photoCollections.forEach(collection => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'album-book';
  button.dataset.collection = collection.id;
  button.setAttribute('aria-haspopup','dialog');
  button.setAttribute('aria-controls','photo-dialog');
  const inner = document.createElement('span');
  inner.className = 'album-book-inner';
  const cover = document.createElement('img');
  cover.src = collection.cover;
  cover.alt = collection.title;
  cover.width = 600;
  cover.height = 750;
  cover.decoding = 'async';
  const title = document.createElement('span');
  title.className = 'album-book-title';
  title.textContent = collection.title;
  const date = document.createElement('span');
  date.className = 'album-book-date';
  date.textContent = collection.date;
  const names = document.createElement('span');
  names.className = 'album-book-names';
  names.textContent = albumCoupleNames;
  const meta = document.createElement('span');
  meta.className = 'album-book-meta';
  inner.append(cover,title,date,names,meta);
  button.append(inner);
  button.addEventListener('click',() => openPhotoCollection(collection.id,button));
  albumButtons.set(collection.id,{button,meta,collection});
  albumShelf.append(button);
  updateViewedAlbum(collection.id);
});

function updateViewedAlbum(id) {
  const {button,meta,collection} = albumButtons.get(id);
  const viewed = seenCollections.includes(id);
  button.classList.toggle('is-viewed',viewed);
  meta.textContent = collection.photos.length+(viewed ? ' 张 · 已翻阅' : ' 张影像');
  button.setAttribute('aria-label','翻开'+collection.title+'相册，'+collection.photos.length+'张照片'+(viewed ? '，已翻阅，可再次查看' : ''));
}

function markAlbumViewed(button) {
  if (!button || seenCollections.includes(button.dataset.collection)) return;
  seenCollections.push(button.dataset.collection);
  updateViewedAlbum(button.dataset.collection);
  try { localStorage.setItem('wedding-gallery-seen',JSON.stringify(seenCollections)); } catch { /* Keep the current session usable. */ }
}

function renderPhotoCollection(direction = 0, retry = false) {
  const photos = activeCollection.photos;
  const photo = photos[activePhoto];
  const visibleSource = photoStage.classList.contains('is-photo-ready') ? photoImage.currentSrc || photoImage.src : pendingPhotoTurn?.source;
  const animate = direction && visibleSource && !reducedPhotoMotion.matches;
  finishPhotoTurn();
  pendingPhotoTurn = animate ? {direction,source:visibleSource} : undefined;
  photoOutgoing.hidden = !animate;
  if (animate) photoOutgoing.src = visibleSource;
  document.getElementById('gallery-title').textContent = activeCollection.title;
  document.getElementById('gallery-group').textContent = activeCollection.group+' / '+activeCollection.english;
  document.getElementById('gallery-description').textContent = activeCollection.description;
  photoDialog.dataset.collection = activeCollection.id;
  photoImage.hidden = true;
  photoEmpty.hidden = !!photo;
  photoPreview.hidden = !photo?.preview;
  photoRetry.hidden = true;
  photoLoading.hidden = !photo;
  photoStage.setAttribute('aria-busy',photo ? 'true' : 'false');
  photoStage.classList.toggle('is-photo-loading',!!photo);
  photoStage.classList.remove('is-photo-ready');
  if (photo) {
    if (photo.preview) photoPreview.src = photo.preview;
    else photoPreview.removeAttribute('src');
    const source=photo.src+(retry ? (photo.src.includes('?')?'&':'?')+'retry='+Date.now() : '');
    displayInvitationPhoto(photoImage,source);
    photoImage.alt = photo.alt || activeCollection.title+' · 第'+(activePhoto+1)+'张照片';
    photoStatus.textContent = '照片准备中…';
  } else {
    displayInvitationPhoto(photoImage);
    photoPreview.removeAttribute('src');
    photoImage.alt = '';
    photoStatus.textContent = '';
  }
  photoCount.textContent = photo ? String(activePhoto+1).padStart(2,'0')+' / '+String(photos.length).padStart(2,'0') : '照片待续';
  photoCaption.textContent = photo ? (photo.caption || activeCollection.title) : '这一册，先为我们的故事留白。';
  syncGalleryControls();
}
function syncGalleryControls() {
  const disabled = !activeCollection || activeCollection.photos.length<2 || albumOpening || photoTurning;
  photoPrevious.disabled = disabled;
  photoNext.disabled = disabled;
}
function finishPhotoTurn() {
  photoCurlAnimation?.cancel();
  photoCurlAnimation = undefined;
  clearTimeout(photoTurnTimer);
  photoTurning = false;
  pendingPhotoTurn = undefined;
  photoLeaf.hidden = true;
  photoLeafImage.removeAttribute('src');
  photoOutgoing.hidden = true;
  photoOutgoing.removeAttribute('src');
  photoStage.classList.remove('is-turning');
  syncGalleryControls();
}
photoImage.addEventListener('load',() => {
  if (!photoDialog.open || !activeCollection?.photos.length) return;
  photoImage.hidden = false;
  photoLoading.hidden = true;
  photoStage.setAttribute('aria-busy','false');
  photoStage.classList.remove('is-photo-loading');
  photoStage.classList.add('is-photo-ready');
  photoStatus.textContent = albumOpening ? '' : '左右轻扫，翻看照片';
  photoRetry.hidden = true;
  if (pendingPhotoTurn) {
    const {direction,source} = pendingPhotoTurn;
    pendingPhotoTurn = undefined;
    photoTurning = true;
    photoStage.dataset.turn = direction>0?'next':'previous';
    photoLeafImage.src = direction>0 ? source : photoImage.currentSrc || photoImage.src;
    photoLeaf.hidden = false;
    photoOutgoing.hidden = direction>0;
    void photoLeaf.offsetWidth;
    photoStage.classList.add('is-turning');
    syncGalleryControls();
    photoCurlAnimation = startAlbumPageCurl(photoCurlCanvas,direction>0?photoOutgoing:photoImage,direction,finishPhotoTurn);
    if(photoCurlAnimation)photoTurnTimer = setTimeout(finishPhotoTurn,1300);
    else finishPhotoTurn();
  }
  const next = activeCollection.photos.length > 1 ? activeCollection.photos[(activePhoto+1)%activeCollection.photos.length] : undefined;
  // Promote the next page in the shared queue instead of starting another image download.
  if (next) prepareInvitationPhoto(next.src,'high').catch(()=>{});
});
photoImage.addEventListener('error',() => {
  if (!photoDialog.open) return;
  photoLoading.hidden = true;
  photoStage.setAttribute('aria-busy','false');
  photoStage.classList.remove('is-photo-loading');
  photoStatus.textContent = '网络有些慢，轻触重试';
  photoRetry.hidden = false;
});
photoPreview.addEventListener('error',() => {photoPreview.hidden=true;});
photoRetry.addEventListener('click',() => {
  renderPhotoCollection(0,true);
});
function finishAlbumOpening() {
  albumOpening = false;
  openingCover.hidden = true;
  photoDialog.classList.remove('is-book-opening');
  photoDialog.classList.remove('is-cover-preview');
  const photos = activeCollection?.photos || [];
  if (photos.length) {
    photoCount.textContent = String(activePhoto+1).padStart(2,'0')+' / '+String(photos.length).padStart(2,'0');
    photoCaption.textContent = photos[activePhoto].caption || activeCollection.title;
    photoStatus.textContent = photoStage.classList.contains('is-photo-ready') ? '左右轻扫，翻看照片' : (photoRetry.hidden ? '照片准备中…' : '网络有些慢，轻触重试');
  }
  syncGalleryControls();
}
openingCover.addEventListener('click',finishAlbumOpening);
function openPhotoCollection(id,button) {
  const collection = photoCollections.find(item => item.id === id);
  if (!collection || photoDialog.open) return;
  activeCollection = collection;
  activePhoto = 0;
  lastAlbumButton = button;
  galleryScrollTop = window.scrollY || 0;
  renderPhotoCollection();
  markAlbumViewed(button);
  button?.classList.add('is-opening');
  document.body.style.top = '-'+galleryScrollTop+'px';
  document.body.classList.add('gallery-open');
  photoDialog.showModal();
  if (collection.photos.length) {
    if (!reducedPhotoMotion.matches && button) {
      const from = button.getBoundingClientRect(),to = photoDialog.getBoundingClientRect();
      photoDialog.style.setProperty('--book-from-x',(from.left+from.width/2-to.left-to.width/2)+'px');
      photoDialog.style.setProperty('--book-from-y',(from.top+from.height/2-to.top-to.height/2)+'px');
      photoDialog.style.setProperty('--book-from-scale',String(Math.min(from.width/to.width,from.height/to.height)));
      photoDialog.classList.add('is-book-opening');
    }
    photoDialog.dataset.book = collection.id;
    document.getElementById('gallery-opening-image').src = collection.cover;
    document.getElementById('gallery-opening-title').textContent = collection.title;
    document.getElementById('gallery-opening-date').textContent = collection.date;
    document.getElementById('gallery-opening-names').textContent = albumCoupleNames;
    openingCover.hidden = false;
    openingCover.setAttribute('aria-label','打开'+collection.title+'，查看照片');
    albumOpening = true;
    photoDialog.classList.add('is-cover-preview');
    photoCount.textContent = collection.photos.length+' 张照片';
    photoCaption.textContent = '';
    photoStatus.textContent = '';
    syncGalleryControls();
  }
  photoClose.focus({preventScroll:true});
}
function moveCollectionPhoto(step) {
  if (!activeCollection?.photos.length || albumOpening || photoTurning) return;
  const count = activeCollection.photos.length;
  const next = ((activePhoto+step)%count+count)%count;
  if (next === activePhoto) return;
  activePhoto = next;
  renderPhotoCollection(step);
}
photoPrevious.addEventListener('click',() => moveCollectionPhoto(-1));
photoNext.addEventListener('click',() => moveCollectionPhoto(1));
photoClose.addEventListener('click',() => photoDialog.close());
photoDialog.addEventListener('close',() => {
  finishAlbumOpening();
  finishPhotoTurn();
  photoTouch = undefined;
  displayInvitationPhoto(photoImage);
  photoOutgoing.hidden = true;
  photoOutgoing.removeAttribute('src');
  photoStage.classList.remove('is-turning');
  photoLoading.hidden = true;
  photoStage.setAttribute('aria-busy','false');
  photoStage.classList.remove('is-photo-loading');
  document.body.classList.remove('gallery-open');
  document.body.style.top = '';
  window.scrollTo({top:galleryScrollTop,behavior:'instant'});
  lastAlbumButton?.classList.remove('is-opening');
  lastAlbumButton?.focus({preventScroll:true});
});
window.addEventListener('resize',() => {
  if (albumOpening) photoDialog.classList.remove('is-book-opening');
  if (photoTurning) finishPhotoTurn();
});
// Only the close button dismisses this fixed album page.
photoDialog.addEventListener('cancel',event => event.preventDefault());
photoDialog.addEventListener('keydown',event => {
  if (!['ArrowLeft','ArrowRight'].includes(event.key)) return;
  event.preventDefault();
  moveCollectionPhoto(event.key === 'ArrowRight' ? 1 : -1);
});
let photoTouch;
photoStage.addEventListener('touchstart',event => {
  photoTouch=event.touches.length===1?{x:event.touches[0].clientX,y:event.touches[0].clientY}:undefined;
},{passive:true});
photoDialog.addEventListener('touchmove',event => event.preventDefault(),{passive:false});
photoStage.addEventListener('touchend',event => {
  if (!photoTouch) return;
  const touch=event.changedTouches[0],dx=touch.clientX-photoTouch.x,dy=touch.clientY-photoTouch.y;
  photoTouch=undefined;
  if (Math.abs(dx)>40 && Math.abs(dx)>Math.abs(dy)) moveCollectionPhoto(dx<0?1:-1);
},{passive:true});
photoStage.addEventListener('touchcancel',() => {photoTouch=undefined;},{passive:true});

