(function () {

  /* ---- CSS ---- */
  var css = [
    '.om-footer{background:#6E5BFF;color:#fff;font-family:"Inter",system-ui,sans-serif;}',
    '.om-footer a{text-decoration:none;color:inherit;}',

    /* main grid */
    '.om-footer-main{display:grid;grid-template-columns:220px auto auto auto 1fr;gap:32px 48px;padding:64px clamp(24px,5vw,80px) 56px;align-items:start;}',

    /* left col */
    '.om-footer-logo{margin-bottom:28px;}',
    '.om-footer-logo img{height:32px;width:auto;display:block;}',
    '.om-footer-btns{display:flex;flex-direction:column;gap:10px;margin-bottom:auto;}',
    '.om-footer-btn{display:inline-flex;align-items:center;gap:9px;padding:11px 18px;border-radius:10px;font-size:.875rem;font-weight:600;color:#fff;border:1.5px solid rgba(255,255,255,.35);background:transparent;cursor:pointer;transition:background .15s,border-color .15s;text-decoration:none;}',
    '.om-footer-btn:hover{background:rgba(255,255,255,.12);border-color:rgba(255,255,255,.6);}',
    '.om-footer-social{display:flex;gap:10px;margin-top:40px;}',
    '.om-footer-soc-btn{width:38px;height:38px;border-radius:9px;border:1.5px solid rgba(255,255,255,.35);display:flex;align-items:center;justify-content:center;color:#fff;transition:background .15s,border-color .15s;}',
    '.om-footer-soc-btn:hover{background:rgba(255,255,255,.15);border-color:rgba(255,255,255,.6);}',

    /* link cols */
    '.om-footer-col-title{font-size:.8125rem;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:rgba(255,255,255,.55);margin-bottom:18px;}',
    '.om-footer-col-links{display:flex;flex-direction:column;gap:10px;}',
    '.om-footer-col-link{font-size:.9375rem;font-weight:500;color:rgba(255,255,255,.85);transition:color .15s;}',
    '.om-footer-col-link:hover{color:#fff;}',

    /* featured card */
    '.om-footer-card{background:#fff;border-radius:16px;padding:24px;display:flex;flex-direction:column;gap:14px;}',
    '.om-footer-card-img{width:100%;aspect-ratio:16/9;border-radius:10px;overflow:hidden;background:rgba(110,91,255,.10);}',
    '.om-footer-card-img img{width:100%;height:100%;object-fit:cover;display:block;}',
    '.om-footer-card-label{font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:rgba(44,46,77,.50);}',
    '.om-footer-card-text{font-size:.875rem;font-weight:500;color:#6E5BFF;line-height:1.45;flex:1;}',
    '.om-footer-card-btn{display:flex;align-items:center;justify-content:center;gap:8px;background:#6E5BFF;color:#fff;font-weight:600;font-size:.875rem;padding:10px 16px;border-radius:9px;text-decoration:none;transition:background .15s;}',
    '.om-footer-card-btn:hover{background:#5a48e8;}',

    /* bottom bar */
    '.om-footer-bar{border-top:1px solid rgba(255,255,255,.15);display:flex;align-items:center;justify-content:space-between;padding:20px clamp(24px,5vw,80px);gap:16px;flex-wrap:wrap;}',
    '.om-footer-copy{font-size:.8125rem;color:rgba(255,255,255,.50);}',
    '.om-footer-legal{display:flex;align-items:center;gap:16px;}',
    '.om-footer-legal a{font-size:.8125rem;color:rgba(255,255,255,.55);transition:color .15s;}',
    '.om-footer-legal a:hover{color:#fff;}',
    '.om-footer-legal-dot{width:4px;height:4px;border-radius:50%;background:rgba(255,255,255,.30);}',

    /* responsive */
    '@media(max-width:1100px){.om-footer-main{grid-template-columns:1fr 1fr 1fr;}.om-footer-card{display:none;}}',
    '@media(max-width:700px){.om-footer-main{grid-template-columns:1fr 1fr;gap:32px;padding:48px 24px 40px;}.om-footer-bar{flex-direction:column;align-items:flex-start;gap:12px;}}'
  ].join('');

  /* ---- SVG helper ---- */
  function svg(d, size) {
    return '<svg width="' + (size||16) + '" height="' + (size||16) + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">' + d + '</svg>';
  }

  /* ---- HTML ---- */
  var footerHtml = [
    '<footer class="om-footer" id="om-footer">',
      '<div class="om-footer-main">',

        /* — left col — */
        '<div>',
          '<div class="om-footer-logo">',
            '<img src="images/nouveau-logo-nlanc.png" alt="Odyssey">',
          '</div>',
          '<div class="om-footer-btns">',
            '<a href="https://calendly.com/etienne-odyssey-manager/30min" target="_blank" rel="noopener" class="om-footer-btn">',
              svg('<rect width="20" height="15" x="2" y="3" rx="2"/><polyline points="17 8 12 13 7 8"/>',16),
              'Planifiez une visio',
            '</a>',
            '<a href="a-propos.html" class="om-footer-btn">',
              svg('<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',16),
              'Contactez-nous',
            '</a>',
          '</div>',
          '<div class="om-footer-social">',
            '<a href="https://www.linkedin.com/company/odyssey-manager" target="_blank" rel="noopener" class="om-footer-soc-btn" aria-label="LinkedIn">',
              svg('<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',16),
            '</a>',
            '<a href="https://www.youtube.com/@odysseymanager" target="_blank" rel="noopener" class="om-footer-soc-btn" aria-label="YouTube">',
              svg('<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><polygon points="10 15 15 12 10 9"/>',16),
            '</a>',
          '</div>',
        '</div>',

        /* — Solutions — */
        '<div>',
          '<div class="om-footer-col-title">Solutions</div>',
          '<div class="om-footer-col-links">',
            '<a href="ulys.html" class="om-footer-col-link">ULYS</a>',
            '<a href="nest.html" class="om-footer-col-link">NEST</a>',
            '<a href="ithak.html" class="om-footer-col-link">ITHAK</a>',
            '<a href="echo.html" class="om-footer-col-link">ECHO</a>',
          '</div>',
        '</div>',

        /* — Secteurs — */
        '<div>',
          '<div class="om-footer-col-title">Secteurs</div>',
          '<div class="om-footer-col-links">',
            '<a href="destinations.html" class="om-footer-col-link">Destinations &amp; Territoires</a>',
            '<a href="patrimoine.html" class="om-footer-col-link">Sites &amp; Patrimoine</a>',
            '<a href="loisir.html" class="om-footer-col-link">Complexes &amp; Loisirs</a>',
            '<a href="bien-etre.html" class="om-footer-col-link">Bien-&ecirc;tre &amp; Sant&eacute;</a>',
            '<a href="operateur.html" class="om-footer-col-link">Op&eacute;rateurs &amp; M&eacute;dias</a>',
            '<a href="mice.html" class="om-footer-col-link">&Eacute;v&eacute;nementiel &amp; MICE</a>',
          '</div>',
        '</div>',

        /* — Objectifs — */
        '<div>',
          '<div class="om-footer-col-title">Objectifs</div>',
          '<div class="om-footer-col-links">',
            '<a href="trouver.html" class="om-footer-col-link">Devenir plus visible</a>',
            '<a href="monetiser.html" class="om-footer-col-link">G&eacute;n&eacute;rer des revenus</a>',
            '<a href="satisfaire.html" class="om-footer-col-link">Surprendre vos visiteurs</a>',
            '<a href="comprendre.html" class="om-footer-col-link">Piloter avec la data</a>',
          '</div>',
        '</div>',

        /* — Featured card — */
        '<div class="om-footer-card">',
          '<div class="om-footer-card-img">',
            '<img src="images/mission.jpg" alt="&Eacute;tude de cas">',
          '</div>',
          '<div class="om-footer-card-label">&Eacute;tude de cas</div>',
          '<div class="om-footer-card-text">D&eacute;couvrez comment odyssey a rendu son autonomie digitale &agrave; la 2&deg; ville h&ocirc;teli&egrave;re de France&nbsp;!</div>',
          '<a href="etude-de-cas-lourdes.html" class="om-footer-card-btn">',
            svg('<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="1"/>',15),
            'D&eacute;couvrir',
          '</a>',
        '</div>',

      '</div>',

      /* — bottom bar — */
      '<div class="om-footer-bar">',
        '<span class="om-footer-copy">&copy; 2026 ODYSSEY MANAGER &reg; | Tous droits r&eacute;serv&eacute;s.</span>',
        '<div class="om-footer-legal">',
          '<a href="#">Mentions l&eacute;gales</a>',
          '<span class="om-footer-legal-dot"></span>',
          '<a href="#">Politique de cookies</a>',
        '</div>',
      '</div>',

    '</footer>'
  ].join('');

  /* ---- INJECT ---- */
  var styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  function init() {
    document.body.insertAdjacentHTML('beforeend', footerHtml);
  }

  if (document.body) {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }

})();
