'use strict';
// Add {src, alt, caption} entries to a collection when the photos are ready.
const photoCollections = [
  {
    "id": "garden",
    "title": "苏式园林",
    "english": "IN THE GARDEN",
    "group": "婚纱照",
    "description": "一方园林，一起入画。",
    "photos": [
      {
        "src": "./assets/photos/garden-01-mobile.webp?v=664de6bcc16c",
        "preview": "./assets/photos/garden-01-preview.webp?v=5be99e54293a",
        "alt": "李有为与谢妍 · 苏式园林 · 第1张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/garden-02-mobile.webp?v=5707756c43c4",
        "preview": "./assets/photos/garden-02-preview.webp?v=4570b3d80dfa",
        "alt": "李有为与谢妍 · 苏式园林 · 第2张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/garden-03-mobile.webp?v=a115773ef09c",
        "preview": "./assets/photos/garden-03-preview.webp?v=de1ebfda2c22",
        "alt": "李有为与谢妍 · 苏式园林 · 第3张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/garden-04-mobile.webp?v=2584f09dc81b",
        "preview": "./assets/photos/garden-04-preview.webp?v=4ab9706290e1",
        "alt": "李有为与谢妍 · 苏式园林 · 第4张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/garden-05-mobile.webp?v=0ab3090bd8f7",
        "preview": "./assets/photos/garden-05-preview.webp?v=d87a67aa6e10",
        "alt": "李有为与谢妍 · 苏式园林 · 第5张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/garden-06-mobile.webp?v=683619050129",
        "preview": "./assets/photos/garden-06-preview.webp?v=1e94cbd83dfb",
        "alt": "李有为与谢妍 · 苏式园林 · 第6张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/garden-07-mobile.webp?v=06f35fb54aa0",
        "preview": "./assets/photos/garden-07-preview.webp?v=794d5369d578",
        "alt": "李有为与谢妍 · 苏式园林 · 第7张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/garden-08-mobile.webp?v=27b64aabf004",
        "preview": "./assets/photos/garden-08-preview.webp?v=4ee6767cf146",
        "alt": "李有为与谢妍 · 苏式园林 · 第8张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/garden-09-mobile.webp?v=aa91d99dce41",
        "preview": "./assets/photos/garden-09-preview.webp?v=2f79ff410293",
        "alt": "李有为与谢妍 · 苏式园林 · 第9张",
        "caption": "以爱为名，与你共赴。"
      }
    ]
  },
  {
    "id": "tang",
    "title": "盛唐大婚",
    "english": "TIMELESS LOVE",
    "group": "婚纱照",
    "description": "把相逢，写进古意里。",
    "photos": [
      {
        "src": "./assets/photos/tang-01-mobile.webp?v=a70794c067b6",
        "preview": "./assets/photos/tang-01-preview.webp?v=0faa35e1123d",
        "alt": "李有为与谢妍 · 盛唐大婚 · 第1张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/tang-02-mobile.webp?v=343b8a5b63ef",
        "preview": "./assets/photos/tang-02-preview.webp?v=d00d38316da9",
        "alt": "李有为与谢妍 · 盛唐大婚 · 第2张",
        "caption": "以爱为名，与你共赴。"
      }
    ]
  },
  {
    "id": "wedding-portrait",
    "title": "西式大婚",
    "english": "THE PORTRAITS",
    "group": "婚纱照",
    "description": "郑重定格，属于我们的模样。",
    "photos": [
      {
        "src": "./assets/photos/wedding-portrait-01-mobile.webp?v=d77ad6e8f6a1",
        "preview": "./assets/photos/wedding-portrait-01-preview.webp?v=fce014ec19a8",
        "alt": "李有为与谢妍 · 西式大婚 · 第1张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/wedding-portrait-02-mobile.webp?v=b6b009004c1c",
        "preview": "./assets/photos/wedding-portrait-02-preview.webp?v=d8be6d867b5d",
        "alt": "李有为与谢妍 · 西式大婚 · 第2张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/wedding-portrait-03-mobile.webp?v=7734810fd1a3",
        "preview": "./assets/photos/wedding-portrait-03-preview.webp?v=7aa04e3349fc",
        "alt": "李有为与谢妍 · 西式大婚 · 第3张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/wedding-portrait-04-mobile.webp?v=a49ee184e744",
        "preview": "./assets/photos/wedding-portrait-04-preview.webp?v=4b69add8cf1c",
        "alt": "李有为与谢妍 · 西式大婚 · 第4张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/wedding-portrait-05-mobile.webp?v=783ddcec27a4",
        "preview": "./assets/photos/wedding-portrait-05-preview.webp?v=765f54442210",
        "alt": "李有为与谢妍 · 西式大婚 · 第5张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/wedding-portrait-06-mobile.webp?v=2a051525fc46",
        "preview": "./assets/photos/wedding-portrait-06-preview.webp?v=a7ba70d8d77d",
        "alt": "李有为与谢妍 · 西式大婚 · 第6张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/wedding-portrait-07-mobile.webp?v=d4ab41090240",
        "preview": "./assets/photos/wedding-portrait-07-preview.webp?v=97242869bb8c",
        "alt": "李有为与谢妍 · 西式大婚 · 第7张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/wedding-portrait-08-mobile.webp?v=dbdb9009e621",
        "preview": "./assets/photos/wedding-portrait-08-preview.webp?v=096e1969a827",
        "alt": "李有为与谢妍 · 西式大婚 · 第8张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/wedding-portrait-09-mobile.webp?v=99474a03a507",
        "preview": "./assets/photos/wedding-portrait-09-preview.webp?v=7ec2bf96268b",
        "alt": "李有为与谢妍 · 西式大婚 · 第9张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/wedding-portrait-10-mobile.webp?v=92a17d80071f",
        "preview": "./assets/photos/wedding-portrait-10-preview.webp?v=e85fe268757a",
        "alt": "李有为与谢妍 · 西式大婚 · 第10张",
        "caption": "以爱为名，与你共赴。"
      }
    ]
  },
  {
    "id": "oil-painting",
    "title": "复古油画",
    "english": "LOVE ON CANVAS",
    "group": "婚纱照",
    "description": "让爱意，落在温柔的光里。",
    "photos": [
      {
        "src": "./assets/photos/oil-painting-01-mobile.webp?v=b14e4d7f5c3d",
        "preview": "./assets/photos/oil-painting-01-preview.webp?v=70800ea2f488",
        "alt": "李有为与谢妍 · 复古油画 · 第1张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/oil-painting-02-mobile.webp?v=5ffc1b10032c",
        "preview": "./assets/photos/oil-painting-02-preview.webp?v=3b5bd5b059e8",
        "alt": "李有为与谢妍 · 复古油画 · 第2张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/oil-painting-03-mobile.webp?v=965e6285ebd6",
        "preview": "./assets/photos/oil-painting-03-preview.webp?v=56324fad1370",
        "alt": "李有为与谢妍 · 复古油画 · 第3张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/oil-painting-04-mobile.webp?v=32c06d59877f",
        "preview": "./assets/photos/oil-painting-04-preview.webp?v=348dbeb92704",
        "alt": "李有为与谢妍 · 复古油画 · 第4张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/oil-painting-05-mobile.webp?v=c05ccbac7d26",
        "preview": "./assets/photos/oil-painting-05-preview.webp?v=271354dbf19c",
        "alt": "李有为与谢妍 · 复古油画 · 第5张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/oil-painting-06-mobile.webp?v=38a04e52cf1b",
        "preview": "./assets/photos/oil-painting-06-preview.webp?v=00512fc31eda",
        "alt": "李有为与谢妍 · 复古油画 · 第6张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/oil-painting-07-mobile.webp?v=60f99c45d332",
        "preview": "./assets/photos/oil-painting-07-preview.webp?v=7f868c0ed436",
        "alt": "李有为与谢妍 · 复古油画 · 第7张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/oil-painting-08-mobile.webp?v=f0e7cfc51929",
        "preview": "./assets/photos/oil-painting-08-preview.webp?v=1fb2af3a9d3c",
        "alt": "李有为与谢妍 · 复古油画 · 第8张",
        "caption": "以爱为名，与你共赴。"
      }
    ]
  },
  {
    "id": "castle",
    "title": "世纪城堡",
    "english": "OUR FAIRYTALE",
    "group": "婚纱照",
    "description": "故事的这一页，刚好是我们。",
    "photos": [
      {
        "src": "./assets/photos/castle-01-mobile.webp?v=e2f8efa26dd7",
        "preview": "./assets/photos/castle-01-preview.webp?v=91774d5817aa",
        "alt": "李有为与谢妍 · 世纪城堡 · 第1张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/castle-02-mobile.webp?v=856acd69376f",
        "preview": "./assets/photos/castle-02-preview.webp?v=5ef78c864807",
        "alt": "李有为与谢妍 · 世纪城堡 · 第2张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/castle-03-mobile.webp?v=5e168b280c07",
        "preview": "./assets/photos/castle-03-preview.webp?v=da33046796dc",
        "alt": "李有为与谢妍 · 世纪城堡 · 第3张",
        "caption": "以爱为名，与你共赴。"
      }
    ]
  },
  {
    "id": "certificate",
    "title": "领证",
    "english": "OUR PROMISE",
    "group": "人生的仪式",
    "description": "从这一天起，我们有了共同的名字。",
    "photos": [
      {
        "src": "./assets/photos/certificate/certificate-01-mobile.webp?v=28a59a57ce55",
        "preview": "./assets/photos/certificate/certificate-01-preview.webp?v=1bf15219d2e2",
        "alt": "李有为与谢妍 · 领证 · 第1张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-02-mobile.webp?v=039bf71316fa",
        "preview": "./assets/photos/certificate/certificate-02-preview.webp?v=912842726541",
        "alt": "李有为与谢妍 · 领证 · 第2张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-03-mobile.webp?v=45a6d0dd9f55",
        "preview": "./assets/photos/certificate/certificate-03-preview.webp?v=11db2dbc8068",
        "alt": "李有为与谢妍 · 领证 · 第3张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-04-mobile.webp?v=5a54fb967950",
        "preview": "./assets/photos/certificate/certificate-04-preview.webp?v=49196e4c6e23",
        "alt": "李有为与谢妍 · 领证 · 第4张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-05-mobile.webp?v=977fb73ecf88",
        "preview": "./assets/photos/certificate/certificate-05-preview.webp?v=851a32947c4d",
        "alt": "李有为与谢妍 · 领证 · 第5张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-06-mobile.webp?v=f36e135fef31",
        "preview": "./assets/photos/certificate/certificate-06-preview.webp?v=1c40952e7b0f",
        "alt": "李有为与谢妍 · 领证 · 第6张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-07-mobile.webp?v=f3308c17270a",
        "preview": "./assets/photos/certificate/certificate-07-preview.webp?v=a6c615ad9171",
        "alt": "李有为与谢妍 · 领证 · 第7张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-08-mobile.webp?v=0aaf780f39a7",
        "preview": "./assets/photos/certificate/certificate-08-preview.webp?v=45f4c8b89b08",
        "alt": "李有为与谢妍 · 领证 · 第8张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-09-mobile.webp?v=586dece2ab78",
        "preview": "./assets/photos/certificate/certificate-09-preview.webp?v=98fa112c1740",
        "alt": "李有为与谢妍 · 领证 · 第9张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-10-mobile.webp?v=4d564d733ab8",
        "preview": "./assets/photos/certificate/certificate-10-preview.webp?v=c5fe28a1535b",
        "alt": "李有为与谢妍 · 领证 · 第10张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-11-mobile.webp?v=7e87a5edfa6b",
        "preview": "./assets/photos/certificate/certificate-11-preview.webp?v=91b3f0bf512e",
        "alt": "李有为与谢妍 · 领证 · 第11张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-12-mobile.webp?v=d470c84d6328",
        "preview": "./assets/photos/certificate/certificate-12-preview.webp?v=7eb87b83a4ce",
        "alt": "李有为与谢妍 · 领证 · 第12张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-13-mobile.webp?v=dca0d0553a81",
        "preview": "./assets/photos/certificate/certificate-13-preview.webp?v=037cc41e87b8",
        "alt": "李有为与谢妍 · 领证 · 第13张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-14-mobile.webp?v=d320a8bc8ce5",
        "preview": "./assets/photos/certificate/certificate-14-preview.webp?v=21015abb438a",
        "alt": "李有为与谢妍 · 领证 · 第14张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-15-mobile.webp?v=56626db07ffe",
        "preview": "./assets/photos/certificate/certificate-15-preview.webp?v=4842657358d1",
        "alt": "李有为与谢妍 · 领证 · 第15张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-16-mobile.webp?v=36b82cc13001",
        "preview": "./assets/photos/certificate/certificate-16-preview.webp?v=93067e409ae7",
        "alt": "李有为与谢妍 · 领证 · 第16张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-17-mobile.webp?v=acc6e6a2a315",
        "preview": "./assets/photos/certificate/certificate-17-preview.webp?v=3c56935bf7c8",
        "alt": "李有为与谢妍 · 领证 · 第17张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-18-mobile.webp?v=0da943496aac",
        "preview": "./assets/photos/certificate/certificate-18-preview.webp?v=0ad7d9d2c334",
        "alt": "李有为与谢妍 · 领证 · 第18张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-19-mobile.webp?v=235cdf5f9128",
        "preview": "./assets/photos/certificate/certificate-19-preview.webp?v=55f0324aad39",
        "alt": "李有为与谢妍 · 领证 · 第19张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-20-mobile.webp?v=b12047eebee2",
        "preview": "./assets/photos/certificate/certificate-20-preview.webp?v=a46aa128db88",
        "alt": "李有为与谢妍 · 领证 · 第20张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-21-mobile.webp?v=3c73e5dd5c15",
        "preview": "./assets/photos/certificate/certificate-21-preview.webp?v=9260b3861163",
        "alt": "李有为与谢妍 · 领证 · 第21张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-22-mobile.webp?v=f6776f1c3235",
        "preview": "./assets/photos/certificate/certificate-22-preview.webp?v=80021239a6ed",
        "alt": "李有为与谢妍 · 领证 · 第22张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-23-mobile.webp?v=5558396b7ee8",
        "preview": "./assets/photos/certificate/certificate-23-preview.webp?v=36fc0cfa9381",
        "alt": "李有为与谢妍 · 领证 · 第23张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-24-mobile.webp?v=e41ba8def224",
        "preview": "./assets/photos/certificate/certificate-24-preview.webp?v=4daa950b7859",
        "alt": "李有为与谢妍 · 领证 · 第24张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-25-mobile.webp?v=4c7343584abf",
        "preview": "./assets/photos/certificate/certificate-25-preview.webp?v=88c1c3d8cbd6",
        "alt": "李有为与谢妍 · 领证 · 第25张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-26-mobile.webp?v=9e71862651be",
        "preview": "./assets/photos/certificate/certificate-26-preview.webp?v=d1b07366f291",
        "alt": "李有为与谢妍 · 领证 · 第26张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-27-mobile.webp?v=9b61666b2384",
        "preview": "./assets/photos/certificate/certificate-27-preview.webp?v=281512e8a938",
        "alt": "李有为与谢妍 · 领证 · 第27张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-28-mobile.webp?v=895dc5e985eb",
        "preview": "./assets/photos/certificate/certificate-28-preview.webp?v=13d97bcdd54b",
        "alt": "李有为与谢妍 · 领证 · 第28张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-29-mobile.webp?v=b514424e142f",
        "preview": "./assets/photos/certificate/certificate-29-preview.webp?v=573756e38196",
        "alt": "李有为与谢妍 · 领证 · 第29张",
        "caption": "以爱为名，与你共赴。"
      },
      {
        "src": "./assets/photos/certificate/certificate-30-mobile.webp?v=58c1a75355c6",
        "preview": "./assets/photos/certificate/certificate-30-preview.webp?v=ce182620ea8e",
        "alt": "李有为与谢妍 · 领证 · 第30张",
        "caption": "把相伴的日子，写进我们的故事。"
      }
    ]
  }
];

const memoryCloud = document.getElementById('memory-cloud');
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
let galleryScrollTop = 0;
let nextPhotoPrefetch;
let activeCollection;
let activePhoto = 0;
let lastBubble;
let lastBubbleWasKeyboard = false;
const memoryField = document.getElementById('memory-field');
const memoryButtons = new Map();
const floatingHearts = [];
let seenCollections = [];
try {
  const saved = JSON.parse(localStorage.getItem('wedding-gallery-seen') || '[]');
  if (Array.isArray(saved)) seenCollections = [...new Set(saved.filter(id => photoCollections.some(item => item.id === id)))];
} catch { /* Browsing still works when local storage is unavailable. */ }
const reducedHeartMotion = matchMedia('(prefers-reduced-motion: reduce)');
let heartBounds = {width:0,height:0};
let heartVisible = !('IntersectionObserver' in window);
let heartFocused = false;
let heartTouched = false;
let heartFrame = 0;
let heartTime = 0;

photoCollections.forEach(collection => {
  const bubble = document.createElement('button');
  bubble.type = 'button';
  bubble.className = 'memory-bubble';
  bubble.dataset.collection = collection.id;
  bubble.setAttribute('aria-label',`查看${collection.group} · ${collection.title}相册`);
  bubble.setAttribute('aria-haspopup','dialog');
  bubble.setAttribute('aria-controls','photo-dialog');
  const material = document.createElement('span');
  material.className = 'heart-material';
  material.setAttribute('aria-hidden','true');
  const glass = document.createElement('img');
  glass.className = 'heart-glass';
  glass.src = './assets/glass-heart.svg';
  glass.alt = '';
  glass.width = 120;
  glass.height = 112;
  const copy = document.createElement('span');
  copy.className = 'bubble-copy';
  const title = document.createElement('span');
  title.className = 'bubble-title';
  title.textContent = collection.title;
  const group = document.createElement('small');
  group.className = 'bubble-group';
  group.textContent = collection.group;
  copy.append(title,group);
  const seenMark = document.createElement('span');
  seenMark.className = 'heart-seen-mark';
  seenMark.textContent = '✓';
  seenMark.setAttribute('aria-hidden','true');
  bubble.append(material,glass,copy,seenMark);
  bubble.addEventListener('click',event => openPhotoCollection(collection.id,bubble,event.detail === 0));
  memoryButtons.set(collection.id,{button:bubble,group,seenMark,collection});
  memoryCloud.append(bubble);
  floatingHearts.push({button:bubble,x:0,y:0,vx:(Math.random()<.5?-1:1)*(18+Math.random()*12),vy:(Math.random()<.5?-1:1)*(15+Math.random()*12),phase:Math.random()*Math.PI*2,size:62,radius:37});
  updateViewedHeart(collection.id);
});

function updateViewedHeart(id) {
  const {button,group,seenMark,collection} = memoryButtons.get(id);
  const viewed = seenCollections.includes(id);
  button.classList.toggle('is-viewed',viewed);
  group.textContent = viewed ? '已看过' : collection.group;
  seenMark.hidden = !viewed;
  button.setAttribute('aria-label',`查看${collection.group} · ${collection.title}相册${viewed ? '，已看过，可再次查看' : ''}`);
}

function markMemoryHeart(button) {
  if (!button || seenCollections.includes(button.dataset.collection)) return;
  seenCollections.push(button.dataset.collection);
  updateViewedHeart(button.dataset.collection);
  try { localStorage.setItem('wedding-gallery-seen',JSON.stringify(seenCollections)); } catch { /* Keep the current session usable. */ }
}

function advanceMemoryHearts(hearts,bounds,seconds) {
  for (const heart of hearts) {
    heart.x += heart.vx*seconds;
    heart.y += heart.vy*seconds;
    heart.phase += seconds*.38;
    if (heart.x < heart.radius) { heart.x=heart.radius;heart.vx=Math.abs(heart.vx); }
    if (heart.x > bounds.width-heart.radius) { heart.x=bounds.width-heart.radius;heart.vx=-Math.abs(heart.vx); }
    if (heart.y < heart.radius) { heart.y=heart.radius;heart.vy=Math.abs(heart.vy); }
    if (heart.y > bounds.height-heart.radius) { heart.y=bounds.height-heart.radius;heart.vy=-Math.abs(heart.vy); }
  }
  for (let i=0;i<hearts.length;i++) for (let j=i+1;j<hearts.length;j++) {
    const a=hearts[i],b=hearts[j],dx=b.x-a.x,dy=b.y-a.y;
    const distance=Math.hypot(dx,dy),gap=a.radius+b.radius+3;
    if (distance >= gap) continue;
    const nx=distance?dx/distance:1,ny=distance?dy/distance:0,overlap=(gap-distance)/2;
    a.x-=nx*overlap;a.y-=ny*overlap;b.x+=nx*overlap;b.y+=ny*overlap;
    const approach=(b.vx-a.vx)*nx+(b.vy-a.vy)*ny;
    if (approach<0) {a.vx+=approach*nx;a.vy+=approach*ny;b.vx-=approach*nx;b.vy-=approach*ny;}
  }
  for (const heart of hearts) {
    heart.x=Math.max(heart.radius,Math.min(bounds.width-heart.radius,heart.x));
    heart.y=Math.max(heart.radius,Math.min(bounds.height-heart.radius,heart.y));
  }
}

function paintMemoryHearts() {
  for (const heart of floatingHearts) heart.button.style.transform=`translate3d(${heart.x-heart.size/2}px,${heart.y-heart.size*.46665}px,0) rotate(${Math.sin(heart.phase)*16}deg)`;
}

function sizeMemoryHearts() {
  const width=memoryCloud.clientWidth,height=memoryCloud.clientHeight;
  if (!width || !height) return;
  const previous=heartBounds;
  heartBounds={width,height};
  const slots=Array.from({length:9},(_,i)=>i);
  for (let i=slots.length-1;i>0;i--) {const j=Math.floor(Math.random()*(i+1));[slots[i],slots[j]]=[slots[j],slots[i]];}
  floatingHearts.forEach((heart,index)=>{
    heart.size=heart.button.offsetWidth;
    heart.radius=Math.min(heart.size*.6,width/2-1,height/2-1);
    heart.x=previous.width?heart.x*width/previous.width:((slots[index]%3)+.5)*width/3;
    heart.y=previous.height?heart.y*height/previous.height:(Math.floor(slots[index]/3)+.5)*height/3;
  });
  advanceMemoryHearts(floatingHearts,heartBounds,0);
  paintMemoryHearts();
  syncHeartMotion();
}

function canMoveHearts() {return !reducedHeartMotion.matches && !document.hidden && !photoDialog.open && heartVisible && !heartFocused && !heartTouched && !!floatingHearts.length && heartBounds.width>0;}
function tickMemoryHearts(time) {
  heartFrame=0;
  if (!canMoveHearts()) {heartTime=0;return;}
  advanceMemoryHearts(floatingHearts,heartBounds,heartTime?Math.min((time-heartTime)/1000,.04):0);
  heartTime=time;
  paintMemoryHearts();
  heartFrame=requestAnimationFrame(tickMemoryHearts);
}
function syncHeartMotion() {
  if (canMoveHearts() && !heartFrame) {heartTime=0;heartFrame=requestAnimationFrame(tickMemoryHearts);}
  else if (!canMoveHearts() && heartFrame) {cancelAnimationFrame(heartFrame);heartFrame=0;heartTime=0;}
}

function renderPhotoCollection(direction = 0) {
  const photos = activeCollection.photos;
  const photo = photos[activePhoto];
  const animate = direction && photoStage.classList.contains('is-photo-ready') && !reducedHeartMotion.matches;
  photoOutgoing.hidden = !animate;
  photoStage.classList.remove('is-turning');
  if (animate) {
    photoOutgoing.src = photoImage.currentSrc || photoImage.src;
    photoStage.dataset.turn = direction>0?'next':'previous';
  } else photoOutgoing.removeAttribute('src');
  document.getElementById('gallery-title').textContent = activeCollection.title;
  document.getElementById('gallery-group').textContent = activeCollection.group+' / '+activeCollection.english;
  document.getElementById('gallery-description').textContent = activeCollection.description;
  photoDialog.dataset.collection = activeCollection.id;
  photoImage.hidden = true;
  photoEmpty.hidden = !!photo;
  photoPreview.hidden = !photo?.preview;
  photoRetry.hidden = true;
  photoStage.classList.remove('is-photo-ready');
  nextPhotoPrefetch?.removeAttribute('src');
  nextPhotoPrefetch = undefined;
  if (photo) {
    if (photo.preview) photoPreview.src = photo.preview;
    else photoPreview.removeAttribute('src');
    photoImage.src = photo.src;
    photoImage.alt = photo.alt || activeCollection.title+' · 第'+(activePhoto+1)+'张照片';
    photoStatus.textContent = '照片准备中…';
  } else {
    photoImage.removeAttribute('src');
    photoPreview.removeAttribute('src');
    photoImage.alt = '';
    photoStatus.textContent = '';
  }
  photoCount.textContent = photo ? String(activePhoto+1).padStart(2,'0')+' / '+String(photos.length).padStart(2,'0') : '照片待续';
  photoCaption.textContent = photo ? (photo.caption || activeCollection.title) : '这一册，先为我们的故事留白。';
  photoPrevious.disabled = !photo || activePhoto === 0;
  photoNext.disabled = !photo || activePhoto === photos.length-1;
  if (animate) {
    void photoStage.offsetWidth;
    photoStage.classList.add('is-turning');
  }
}
photoOutgoing.addEventListener('animationend',() => {
  photoOutgoing.hidden = true;
  photoOutgoing.removeAttribute('src');
  photoStage.classList.remove('is-turning');
});
photoImage.addEventListener('load',() => {
  if (!photoDialog.open || !activeCollection?.photos.length) return;
  photoImage.hidden = false;
  photoStage.classList.add('is-photo-ready');
  photoStatus.textContent = '左右轻扫，翻看照片';
  photoRetry.hidden = true;
  const next = activeCollection.photos[activePhoto+1];
  // Only warm one adjacent photo after the visible photo finishes loading.
  if (next && typeof Image !== 'undefined') {
    nextPhotoPrefetch = new Image();
    nextPhotoPrefetch.decoding = 'async';
    nextPhotoPrefetch.fetchPriority = 'low';
    nextPhotoPrefetch.src = next.src;
  }
});
photoImage.addEventListener('error',() => {
  if (!photoDialog.open) return;
  photoStatus.textContent = '网络有些慢，轻触重试';
  photoRetry.hidden = false;
});
photoPreview.addEventListener('error',() => {photoPreview.hidden=true;});
photoRetry.addEventListener('click',() => {
  renderPhotoCollection();
  photoImage.src += (photoImage.src.includes('?')?'&':'?')+'retry='+Date.now();
});
function openPhotoCollection(id,bubble,fromKeyboard = false) {
  const collection = photoCollections.find(item => item.id === id);
  if (!collection || photoDialog.open) return;
  activeCollection = collection;
  activePhoto = 0;
  lastBubble = bubble;
  lastBubbleWasKeyboard = fromKeyboard;
  galleryScrollTop = window.scrollY || 0;
  renderPhotoCollection();
  markMemoryHeart(bubble);
  document.body.style.top = '-'+galleryScrollTop+'px';
  document.body.classList.add('gallery-open');
  photoDialog.showModal();
  syncHeartMotion();
  photoClose.focus({preventScroll:true});
}
function moveCollectionPhoto(step) {
  if (!activeCollection?.photos.length) return;
  const next = Math.max(0,Math.min(activeCollection.photos.length-1,activePhoto+step));
  if (next === activePhoto) return;
  activePhoto = next;
  renderPhotoCollection(step);
}
photoPrevious.addEventListener('click',() => moveCollectionPhoto(-1));
photoNext.addEventListener('click',() => moveCollectionPhoto(1));
photoClose.addEventListener('click',() => photoDialog.close());
photoDialog.addEventListener('close',() => {
  photoTouch = undefined;
  nextPhotoPrefetch?.removeAttribute('src');
  nextPhotoPrefetch = undefined;
  photoOutgoing.hidden = true;
  photoOutgoing.removeAttribute('src');
  photoStage.classList.remove('is-turning');
  document.body.classList.remove('gallery-open');
  document.body.style.top = '';
  window.scrollTo({top:galleryScrollTop,behavior:'instant'});
  lastBubble?.focus({preventScroll:true});
  heartFocused = lastBubbleWasKeyboard;
  syncHeartMotion();
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

memoryCloud.addEventListener('pointerdown',()=>{heartTouched=true;syncHeartMotion();});
document.addEventListener('pointerup',()=>{heartTouched=false;syncHeartMotion();});
document.addEventListener('pointercancel',()=>{heartTouched=false;syncHeartMotion();});
memoryCloud.addEventListener('focusin',event=>{heartFocused=event.target.matches(':focus-visible');syncHeartMotion();});
memoryCloud.addEventListener('focusout',event=>{if(!memoryCloud.contains(event.relatedTarget)){heartFocused=false;syncHeartMotion();}});
document.addEventListener('visibilitychange',syncHeartMotion);
document.getElementById('enter-invitation').addEventListener('click',sizeMemoryHearts);
if (reducedHeartMotion.addEventListener) reducedHeartMotion.addEventListener('change',syncHeartMotion);
else reducedHeartMotion.addListener(syncHeartMotion);
if ('ResizeObserver' in window) new ResizeObserver(sizeMemoryHearts).observe(memoryCloud);
else window.addEventListener('resize',sizeMemoryHearts);
if ('IntersectionObserver' in window) new IntersectionObserver(entries=>{heartVisible=entries[0].isIntersecting;syncHeartMotion();},{threshold:0}).observe(memoryField);
sizeMemoryHearts();
