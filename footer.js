(function () {

  /* ---- CSS ---- */
  var css = [
    '.om-footer{background:#6E5BFF;color:#fff;font-family:"Inter",system-ui,sans-serif;}',
    '.om-footer a{text-decoration:none;color:inherit;}.om-footer .om-footer-btn{color:#6E5BFF!important;}.om-footer .om-footer-soc-btn{color:#6E5BFF!important;}',

    /* main grid */
    '.om-footer-main{display:flex;align-items:start;gap:48px;padding:64px clamp(24px,5vw,80px) 56px;}',
    '.om-footer-left{flex-shrink:0;width:220px;}',
    '.om-footer-cols{display:flex;gap:48px;flex:1;}',
    '.om-footer-col{flex-shrink:0;}',
    '.om-footer-right{flex-shrink:0;width:220px;}',

    /* left col */
    '.om-footer-logo{margin-bottom:28px;}',
    '.om-footer-logo img{height:32px;width:auto;display:block;}',
    '.om-footer-btns{display:flex;flex-direction:column;gap:10px;margin-bottom:auto;}',
    '.om-footer-btn{display:inline-flex;align-items:center;gap:9px;padding:11px 18px;border-radius:10px;font-size:.875rem;font-weight:600;color:#6E5BFF;border:none;background:#fff;cursor:pointer;transition:background .15s,box-shadow .15s;text-decoration:none;}',
    '.om-footer-btn:hover{background:#f0eeff;}',
    '.om-footer-social{display:flex;gap:10px;margin-top:40px;}',
    '.om-footer-soc-btn{width:38px;height:38px;border-radius:9px;border:none;background:#fff;display:flex;align-items:center;justify-content:center;color:#6E5BFF;transition:background .15s;}',
    '.om-footer-soc-btn:hover{background:#f0eeff;}',

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
        '<div class="om-footer-left">',
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
              '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
            '</a>',
            '<a href="https://www.youtube.com/@odysseymanager" target="_blank" rel="noopener" class="om-footer-soc-btn" aria-label="YouTube">',
              '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
            '</a>',
          '</div>',
        '</div>',

        /* — 3 link cols — */
        '<div class="om-footer-cols">',
        '<div class="om-footer-col">',
          '<div class="om-footer-col-title">Solutions</div>',
          '<div class="om-footer-col-links">',
            '<a href="ulys.html" class="om-footer-col-link">ULYS</a>',
            '<a href="nest.html" class="om-footer-col-link">NEST</a>',
            '<a href="ithak.html" class="om-footer-col-link">ITHAK</a>',
            '<a href="echo.html" class="om-footer-col-link">ECHO</a>',
          '</div>',
        '</div>',

        '<div class="om-footer-col">',
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

        '<div class="om-footer-col">',
          '<div class="om-footer-col-title">Objectifs</div>',
          '<div class="om-footer-col-links">',
            '<a href="trouver.html" class="om-footer-col-link">Devenir plus visible</a>',
            '<a href="monetiser.html" class="om-footer-col-link">G&eacute;n&eacute;rer des revenus</a>',
            '<a href="satisfaire.html" class="om-footer-col-link">Surprendre vos visiteurs</a>',
            '<a href="comprendre.html" class="om-footer-col-link">Piloter avec la data</a>',
          '</div>',
        '</div>',

        '</div>', /* end om-footer-cols */

        /* — Featured card — */
        '<div class="om-footer-right">',
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
        '</div>', /* end om-footer-right */

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
