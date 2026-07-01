(function () {

  /* ---- CSS ---- */
  var css = [
    '.om-nav{position:sticky;top:0;z-index:9999;background:#fff;border-bottom:1px solid rgba(44,46,77,.08);font-family:"Inter",system-ui,sans-serif;}',
    '.om-nav-inner{display:flex;align-items:center;gap:8px;padding:0 clamp(24px,5vw,80px);height:68px;position:relative;}',
    '.om-logo{font-family:"Libre Baskerville",Georgia,serif;font-weight:700;font-size:1.35rem;color:#6E5BFF;letter-spacing:-.02em;flex-shrink:0;margin-right:16px;text-decoration:none;}',
    '.om-links{display:flex;align-items:center;gap:2px;flex:1;justify-content:center;}',
    '.om-drop{position:static;}',
    '.om-drop-btn,.om-plain-link{display:inline-flex;align-items:center;gap:5px;padding:8px 14px;border-radius:8px;font-size:.9375rem;font-weight:500;color:#2C2E4D;background:none;border:none;cursor:pointer;text-decoration:none;transition:background .15s,color .15s;white-space:nowrap;font-family:inherit;line-height:1;}',
    '.om-drop-btn:hover,.om-plain-link:hover,.om-drop.is-open .om-drop-btn{background:none;color:#6E5BFF;}',
    '.om-drop-btn .om-chev{transition:transform .2s;}',
    '.om-drop.is-open .om-drop-btn .om-chev{transform:rotate(180deg);}',
    '.om-ctas{display:flex;align-items:center;gap:10px;flex-shrink:0;margin-left:8px;}',
    '.om-ghost{display:inline-flex;align-items:center;padding:9px 18px;border-radius:10px;font-size:.9375rem;font-weight:600;color:#2C2E4D;border:1px solid rgba(44,46,77,.14);background:#fff;text-decoration:none;transition:border-color .15s,color .15s,background .15s;white-space:nowrap;}',
    '.om-ghost:hover{border-color:#6E5BFF;color:#6E5BFF;background:rgba(110,91,255,.06);}',
    '.om-primary{display:inline-flex;align-items:center;padding:9px 18px;border-radius:10px;font-size:.9375rem;font-weight:600;color:#fff;background:#6E5BFF;text-decoration:none;transition:background .15s;white-space:nowrap;}',
    '.om-primary:hover{background:#5a48e8;}',

    /* panels */
    '.om-panel{position:absolute;top:68px;left:50%;transform:translateX(-50%);background:#fff;border-radius:16px;box-shadow:0 8px 40px -8px rgba(44,46,77,.18),0 0 0 1px rgba(44,46,77,.06);padding:28px 32px;display:none;z-index:100;}',
    '.om-panel::before{content:"";position:absolute;top:-12px;left:0;right:0;height:12px;}',
    '.om-drop.is-open .om-panel{display:block;}',
    '.om-panel-hd{margin-bottom:20px;padding-bottom:16px;border-bottom:1px solid rgba(44,46,77,.08);}',
    '.om-panel-hd-label{font-size:.8125rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#6E5BFF;margin-bottom:4px;}',
    '.om-panel-hd-sub{font-size:.875rem;color:rgba(44,46,77,.60);line-height:1.4;}',
    '.om-panel-grid{display:grid;gap:4px;}',
    '.om-panel-item{display:flex;align-items:flex-start;gap:14px;padding:12px 14px;border-radius:10px;text-decoration:none;color:#2C2E4D;transition:background .15s;}',
    '.om-panel-item:hover{background:rgba(110,91,255,.06);}',
    '.om-panel-icon{width:38px;height:38px;border-radius:10px;flex-shrink:0;display:flex;align-items:center;justify-content:center;}',
    '.om-obj-icon{border-radius:50%!important;background:#6E5BFF!important;color:#fff!important;}',
    '.om-panel-item-body{display:flex;flex-direction:column;gap:3px;}',
    '.om-item-name{font-size:.9375rem;font-weight:600;color:#2C2E4D;line-height:1.2;}',
    '.om-item-sub{font-size:.8125rem;color:rgba(44,46,77,.60);line-height:1.4;}',

    /* secteur panel */
    '.om-secteur-layout{display:grid;grid-template-columns:1fr 1fr;gap:0 28px;align-items:start;}',
    '.om-secteur-col{display:flex;flex-direction:column;gap:2px;}',
    '.om-secteur-item{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;text-decoration:none;color:#2C2E4D;transition:background .15s;}',
    '.om-secteur-item:hover{background:rgba(110,91,255,.06);}',
    '.om-secteur-icon{width:32px;height:32px;background:rgba(110,91,255,.10);border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#6E5BFF;}',
    '.om-secteur-item-body{display:flex;flex-direction:column;gap:1px;}',
    '.om-secteur-name{font-size:.9375rem;font-weight:600;line-height:1.2;}',
    '.om-secteur-sub{font-size:.75rem;color:rgba(44,46,77,.55);line-height:1.3;}',

    /* featured card */
    '.om-featured{background:#FFEAD5;border-radius:14px;padding:20px 18px;width:190px;display:flex;flex-direction:column;gap:10px;align-self:stretch;}',
    '.om-featured-label{font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:rgba(44,46,77,.50);}',
    '.om-featured-title{font-size:.875rem;font-weight:600;color:#6E5BFF;line-height:1.35;flex:1;}',
    '.om-featured-btn{display:inline-block;background:#6E5BFF;color:#fff;font-weight:600;font-size:.8125rem;padding:8px 14px;border-radius:8px;text-decoration:none;text-align:center;transition:background .15s;}',
    '.om-featured-btn:hover{background:#5a48e8;}',

    /* mobile */
    '.om-hamburger{display:none;background:none;border:none;cursor:pointer;padding:8px;color:#2C2E4D;margin-left:auto;}',
    '.om-mobile-menu{display:none;position:fixed;inset:0;top:68px;background:#fff;z-index:9998;overflow-y:auto;padding:16px 24px 40px;}',
    '.om-mobile-menu.is-open{display:block;}',
    '.om-mobile-section{font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:rgba(44,46,77,.40);padding:20px 0 8px;}',
    '.om-mobile-link{display:block;font-size:.9375rem;font-weight:500;color:#2C2E4D;padding:11px 0;border-bottom:1px solid rgba(44,46,77,.06);text-decoration:none;}',
    '.om-mobile-link:hover{color:#6E5BFF;}',
    '.om-mobile-ctas{display:flex;flex-direction:column;gap:10px;margin-top:24px;}',
    '.om-mobile-ghost{display:block;text-align:center;padding:13px;border-radius:10px;font-weight:600;font-size:.9375rem;text-decoration:none;border:1px solid rgba(44,46,77,.14);color:#2C2E4D;}',
    '.om-mobile-primary{display:block;text-align:center;padding:13px;border-radius:10px;font-weight:600;font-size:.9375rem;text-decoration:none;background:#6E5BFF;color:#fff;}',

    '@media(max-width:900px){.om-links,.om-ctas{display:none;}.om-hamburger{display:flex;}}'
  ].join('');

  /* ---- SVG helpers ---- */
  function svg(paths, size, extra) {
    return '<svg width="' + (size||16) + '" height="' + (size||16) + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"' + (extra||'') + '>' + paths + '</svg>';
  }

  var P = {
    chev:    '<path d="m6 9 6 6 6-6"/>',
    bot:     '<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>',
    laptop:  '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/>',
    pin:     '<circle cx="12" cy="12" r="10"/><path d="M16.2 7.8l-2 6.3-6.4 2.1 2-6.3z"/>',
    bar:     '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    map:     '<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/>',
    castle:  '<line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/>',
    tent:    '<path d="M3.5 21 14 3"/><path d="M20.5 21 10 3"/><path d="M15.5 21 12 15l-3.5 6"/><path d="M2 21h20"/>',
    flower:  '<path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3H9m7.5 0H15m-3 4.5V15"/><circle cx="12" cy="12" r="3"/><path d="m8 16 1.5-1.5"/><path d="M14.5 9.5 16 8"/><path d="m8 8 1.5 1.5"/><path d="M14.5 14.5 16 16"/>',
    send:    '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    cal:     '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/>',
    eye:     '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="1"/>',
    pct:     '<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>',
    nav2:    '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
    msg:     '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="m19 9-5 5-4-4-3 3"/>',
    menu:    '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
    close:   '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'
  };

  function ic(name, size, color) {
    var extra = color ? ' stroke="' + color + '"' : '';
    return svg(P[name], size, extra);
  }

  /* ---- PANEL: Nos solutions ---- */
  var pSol = [
    '<div class="om-panel" style="width:800px">',
      '<div class="om-panel-hd">',
        '<div class="om-panel-hd-label">Services &amp; Outils</div>',
        '<div class="om-panel-hd-sub">Quatre solutions comp&eacute;l&eacute;mentaires pour les d&eacute;fis de votre destination.</div>',
      '</div>',
      '<div class="om-panel-grid" style="grid-template-columns:1fr 1fr">',
        '<a href="ulys.html" class="om-panel-item">',
          '<div class="om-panel-icon" style="background:rgba(110,91,255,.10);color:#6E5BFF">' + ic('bot',20,'#6E5BFF') + '</div>',
          '<div class="om-panel-item-body"><span class="om-item-name">ULYS</span><span class="om-item-sub">Votre guide IA, disponible 24/7 sur votre destination.</span></div>',
        '</a>',
        '<a href="ithak.html" class="om-panel-item">',
          '<div class="om-panel-icon" style="background:rgba(110,91,255,.10);color:#6E5BFF">' + ic('laptop',20,'#6E5BFF') + '</div>',
          '<div class="om-panel-item-body"><span class="om-item-name">ITHAK</span><span class="om-item-sub">Votre plateforme de r&eacute;servation directe, sans interm&eacute;diaire.</span></div>',
        '</a>',
        '<a href="nest.html" class="om-panel-item">',
          '<div class="om-panel-icon" style="background:rgba(110,91,255,.10);color:#6E5BFF">' + ic('pin',20,'#6E5BFF') + '</div>',
          '<div class="om-panel-item-body"><span class="om-item-name">NEST</span><span class="om-item-sub">Votre parcours d&eacute;couverte interactif qui fait vivre votre territoire.</span></div>',
        '</a>',
        '<a href="echo.html" class="om-panel-item">',
          '<div class="om-panel-icon" style="background:rgba(110,91,255,.10);color:#6E5BFF">' + ic('bar',20,'#6E5BFF') + '</div>',
          '<div class="om-panel-item-body"><span class="om-item-name">ECHO</span><span class="om-item-sub">Votre contenu SEO &agrave; grande &eacute;chelle, g&eacute;n&eacute;r&eacute; automatiquement.</span></div>',
        '</a>',
      '</div>',
    '</div>'
  ].join('');

  /* ---- PANEL: Votre secteur ---- */
  function sectItem(href, iconName, name, sub) {
    return '<a href="' + href + '" class="om-secteur-item"><div class="om-secteur-icon">' + ic(iconName,15,'#6E5BFF') + '</div><div class="om-secteur-item-body"><span class="om-secteur-name">' + name + '</span><span class="om-secteur-sub">' + sub + '</span></div></a>';
  }

  var pSec = [
    '<div class="om-panel" style="width:800px">',
      '<div class="om-panel-hd">',
        '<div class="om-panel-hd-label">Secteurs &amp; Activit&eacute;s</div>',
        '<div class="om-panel-hd-sub">Trouvez les solutions pens&eacute;es pour votre secteur et votre r&eacute;alit&eacute; terrain.</div>',
      '</div>',
      '<div class="om-secteur-layout">',
        '<div class="om-secteur-col">',
          sectItem('destinations.html','map','Destinations &amp; Territoires','OT &middot; CDT &middot; CRT'),
          sectItem('patrimoine.html','castle','Sites &amp; Patrimoine','Culturel &middot; Cultuel &middot; Nature'),
          sectItem('loisir.html','tent','Complexe &amp; Loisirs','Villages &middot; Parcs &middot; Campings'),
        '</div>',
        '<div class="om-secteur-col">',
          sectItem('bien-etre.html','flower','Bien-&ecirc;tre &amp; Sant&eacute;','Thalassos &middot; Spas &middot; Clubs'),
          sectItem('operateur.html','send','Op&eacute;rateurs &amp; M&eacute;dias','Agences &middot; Guides &middot; M&eacute;dias'),
          sectItem('mice.html','cal','&Eacute;v&eacute;nementiel &amp; MICE','Organisateurs &middot; &Eacute;v&eacute;nementiel'),
        '</div>',
      '</div>',
    '</div>'
  ].join('');

  /* ---- PANEL: Vos objectifs ---- */
  function objItem(href, iconName, name, sub) {
    return '<a href="' + href + '" class="om-panel-item"><div class="om-panel-icon om-obj-icon">' + ic(iconName,20,'#fff') + '</div><div class="om-panel-item-body"><span class="om-item-name">' + name + '</span><span class="om-item-sub">' + sub + '</span></div></a>';
  }

  var pObj = [
    '<div class="om-panel" style="width:800px">',
      '<div class="om-panel-hd">',
        '<div class="om-panel-hd-label">Enjeux &amp; ambitions</div>',
        '<div class="om-panel-hd-sub">Identifiez les outils qui correspondent &agrave; vos ambitions et &agrave; vos besoins.</div>',
      '</div>',
      '<div class="om-panel-grid" style="grid-template-columns:1fr 1fr">',
        objItem('trouver.html','eye','Trouver','Attirez de nouveaux visiteurs via Google et l&rsquo;exp&eacute;rience IA'),
        objItem('satisfaire.html','pct','Satisfaire','Surprenez vos visiteurs avec une exp&eacute;rience qu&rsquo;ils n&rsquo;attendaient pas'),
        objItem('monetiser.html','nav2','Mon&eacute;tiser','G&eacute;n&eacute;rez de nouveaux revenus sans d&eacute;pendre des plateformes'),
        objItem('comprendre.html','msg','Comprendre','Pilotez votre strat&eacute;gie avec les donn&eacute;es de l&rsquo;IA et de vos r&eacute;servations'),
      '</div>',
    '</div>'
  ].join('');

  /* ---- FULL NAV HTML ---- */
  var navHtml = [
    '<nav class="om-nav" id="om-nav">',
      '<div class="om-nav-inner">',
        '<a href="index.html" class="om-logo"><img src="images/nouveau-logo.png" alt="Odyssey" style="height:36px;width:auto;display:block"></a>',
        '<div class="om-links">',
          '<div class="om-drop" id="om-drop-sol">',
            '<button class="om-drop-btn">Nos solutions <span class="om-chev">' + ic('chev',14) + '</span></button>',
            pSol,
          '</div>',
          '<div class="om-drop" id="om-drop-sec">',
            '<button class="om-drop-btn">Votre secteur <span class="om-chev">' + ic('chev',14) + '</span></button>',
            pSec,
          '</div>',
          '<div class="om-drop" id="om-drop-obj">',
            '<button class="om-drop-btn">Vos objectifs <span class="om-chev">' + ic('chev',14) + '</span></button>',
            pObj,
          '</div>',
          '<a href="a-propos.html" class="om-plain-link">&Agrave; propos</a>',
        '</div>',
        '<div class="om-ctas">',
          '<a href="espace-client.html" class="om-ghost">Espace Client</a>',
          '<a href="https://calendly.com/etienne-odyssey-manager/30min" target="_blank" rel="noopener" class="om-primary">Demander une d&eacute;mo</a>',
        '</div>',
        '<button class="om-hamburger" id="om-hamburger" aria-label="Menu">' + svg(P.menu, 24) + '</button>',
      '</div>',
      '<div class="om-mobile-menu" id="om-mobile-menu">',
        '<div class="om-mobile-section">Nos solutions</div>',
        '<a href="ulys.html" class="om-mobile-link">ULYS</a>',
        '<a href="ithak.html" class="om-mobile-link">ITHAK</a>',
        '<a href="nest.html" class="om-mobile-link">NEST</a>',
        '<a href="echo.html" class="om-mobile-link">ECHO</a>',
        '<div class="om-mobile-section">Votre secteur</div>',
        '<a href="destinations.html" class="om-mobile-link">Destinations &amp; Territoires</a>',
        '<a href="patrimoine.html" class="om-mobile-link">Sites &amp; Patrimoine</a>',
        '<a href="loisir.html" class="om-mobile-link">Complexe &amp; Loisirs</a>',
        '<a href="bien-etre.html" class="om-mobile-link">Bien-&ecirc;tre &amp; Sant&eacute;</a>',
        '<a href="operateur.html" class="om-mobile-link">Op&eacute;rateurs &amp; M&eacute;dias</a>',
        '<a href="mice.html" class="om-mobile-link">&Eacute;v&eacute;nementiel &amp; MICE</a>',
        '<div class="om-mobile-section">Vos objectifs</div>',
        '<a href="trouver.html" class="om-mobile-link">Devenir plus visible</a>',
        '<a href="satisfaire.html" class="om-mobile-link">Surprendre vos visiteurs</a>',
        '<a href="monetiser.html" class="om-mobile-link">G&eacute;n&eacute;rer des revenus</a>',
        '<a href="comprendre.html" class="om-mobile-link">Piloter avec la data</a>',
        '<a href="a-propos.html" class="om-mobile-link">&Agrave; propos</a>',
        '<div class="om-mobile-ctas">',
          '<a href="#" class="om-mobile-ghost">Espace Client</a>',
          '<a href="https://calendly.com/etienne-odyssey-manager/30min" target="_blank" rel="noopener" class="om-mobile-primary">Demander une d&eacute;mo</a>',
        '</div>',
      '</div>',
    '</nav>'
  ].join('');

  /* ---- INJECT ---- */
  var styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  function init() {
    document.body.insertAdjacentHTML('afterbegin', navHtml);

  /* ---- INTERACTIONS ---- */
  var drops = document.querySelectorAll('.om-drop');
  drops.forEach(function (drop) {
    var timer;
    drop.addEventListener('mouseenter', function () {
      clearTimeout(timer);
      drops.forEach(function (d) { if (d !== drop) d.classList.remove('is-open'); });
      drop.classList.add('is-open');
    });
    drop.addEventListener('mouseleave', function () {
      timer = setTimeout(function () { drop.classList.remove('is-open'); }, 200);
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') drops.forEach(function (d) { d.classList.remove('is-open'); });
  });

  /* Mobile hamburger */
  var ham = document.getElementById('om-hamburger');
  var mob = document.getElementById('om-mobile-menu');
  ham.addEventListener('click', function () {
    var open = mob.classList.toggle('is-open');
    ham.innerHTML = open ? svg(P.close, 24) : svg(P.menu, 24);
  });

  /* Active page highlight */
  var page = (window.location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.om-nav a[href]').forEach(function (a) {
    if (a.getAttribute('href') === page) {
      a.style.color = '#6E5BFF';
      a.style.fontWeight = '600';
    }
  });

  /* Also highlight the parent dropdown label if a child is active */
  var dropMap = {
    'om-drop-sol': ['ulys.html','ithak.html','nest.html','echo.html'],
    'om-drop-sec': ['destinations.html','patrimoine.html','loisir.html','bien-etre.html','operateur.html','mice.html','etude-de-cas-lourdes.html','etude-de-cas-dododog.html'],
    'om-drop-obj': ['trouver.html','satisfaire.html','monetiser.html','comprendre.html']
  };
  Object.keys(dropMap).forEach(function (id) {
    if (dropMap[id].indexOf(page) !== -1) {
      var btn = document.getElementById(id);
      if (btn) btn.querySelector('.om-drop-btn').style.color = '#6E5BFF';
    }
  });
  } // end init()

  if (document.body) {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }

})();
