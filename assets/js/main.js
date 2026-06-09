/* Aurora Dark — render functions (generated) + bootstrap */

/* ---- render: nav+hero ---- */
function renderNav(nav){
  var brandName = (nav && nav.brand && nav.brand.name) || "Pranav Grover";
  var brandHref = (nav && nav.brand && nav.brand.href) || "#hero";
  var parts = brandName.trim().split(/\s+/);
  var first = parts.shift() || brandName;
  var rest = parts.join(" ");
  var brandHtml = '<span>' + first + '</span>'
    + (rest ? ' <span class="nv-brand-sur accent-text">' + rest + '</span>' : '');

  var items = (nav && nav.menuItems) || [];
  var links = items.map(function(it){
    var icon = it.icon ? '<i class="' + it.icon + '" aria-hidden="true"></i>' : '';
    return '<li><a class="nv-link" href="' + it.href + '">' + icon
      + '<span>' + it.text + '</span></a></li>';
  }).join('');

  return ''
    + '<div class="container nv-inner">'
    +   '<a class="nv-brand" href="' + brandHref + '" aria-label="' + brandName + ' — home">'
    +     '<span class="nv-dot" aria-hidden="true"></span>' + brandHtml
    +   '</a>'
    +   '<ul class="nv-menu" id="nv-menu">' + links + '</ul>'
    +   '<button class="nv-toggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="nv-menu">'
    +     '<span></span><span></span><span></span>'
    +   '</button>'
    + '</div>';
}

function renderHero(hero){
  hero = hero || {};
  var greeting = hero.greeting || "Hi, I'm";
  var fullName = hero.name || "Pranav Grover";
  var nameParts = fullName.trim().split(/\s+/);
  var firstName = nameParts.shift() || fullName;
  var surname = nameParts.join(" ");
  var title = hero.title || "Data Analyst";
  var summary = hero.summary || "";

  // Kicker derived from title + program tag
  var kicker = '<p class="eyebrow hero-kicker">' + title + ' &middot; UT Dallas ’26</p>';

  // Name headline (clamped, surname accent, never clips)
  var nameHtml = '<h1 class="hero-name" id="hero-heading">'
    + '<span class="hero-greet">' + greeting + '</span>'
    + '<span class="hero-line">' + firstName + '</span>'
    + (surname ? '<span class="hero-line accent-text">' + surname + '</span>' : '')
    + '</h1>';

  // Role line under name
  var roleHtml = '<p class="hero-role"><span class="hero-role-dot" aria-hidden="true"></span>'
    + 'Available for full-time &middot; Dallas, TX</p>';

  // Lead paragraph (bold the discipline)
  var lead = summary
    .replace('Data Analyst', '<strong>Data Analyst</strong>')
    .replace('actionable insights', '<strong>actionable insights</strong>');
  var leadHtml = '<p class="hero-lead">' + lead + '</p>';

  // CTA buttons
  var buttons = (hero.cta && hero.cta.buttons) || [];
  var btnHtml = buttons.map(function(b){
    var cls = (b.type === 'primary') ? 'btn btn--primary' : 'btn btn--ghost';
    var ext = b.external ? ' target="_blank" rel="noopener noreferrer"' : '';
    var ic = (b.type === 'primary')
      ? '<i class="fas fa-paper-plane" aria-hidden="true"></i>'
      : '<i class="fas fa-arrow-right" aria-hidden="true"></i>';
    return '<a class="' + cls + '" href="' + b.href + '"' + ext + '>'
      + '<span>' + b.text + '</span>' + ic + '</a>';
  }).join('');
  // Extra résumé download button
  btnHtml += '<a class="btn btn--ghost" href="assets/files/resume.pdf" download>'
    + '<i class="fas fa-arrow-down-to-line" aria-hidden="true"></i>'
    + '<i class="fas fa-download" aria-hidden="true" style="display:none"></i>'
    + '<span>Download Résumé</span></a>';
  var ctaHtml = '<div class="hero-cta">' + btnHtml + '</div>';

  // Stat row from highlights
  var highlights = hero.highlights || [];
  var statHtml = highlights.map(function(h){
    return '<span class="hero-stat"><i class="' + h.icon + '" aria-hidden="true"></i>'
      + '<span>' + h.text + '</span></span>';
  }).join('');
  var statsHtml = '<div class="hero-stats">' + statHtml + '</div>';

  // Social links
  var socials = hero.socialLinks || [];
  var socHtml = socials.map(function(s){
    var isMail = /^mailto:/.test(s.url);
    var ext = (!isMail) ? ' target="_blank" rel="noopener noreferrer"' : '';
    return '<a class="hero-social" href="' + s.url + '"' + ext
      + ' aria-label="' + s.platform + '"><i class="' + s.icon + '" aria-hidden="true"></i></a>';
  }).join('');
  var socialsHtml = '<div class="hero-socials">' + socHtml + '</div>';

  var left = '<div class="hero-left">'
    + '<div class="reveal" style="--d:.04s">' + kicker + '</div>'
    + '<div class="reveal" style="--d:.10s">' + nameHtml + '</div>'
    + '<div class="reveal" style="--d:.16s">' + roleHtml + '</div>'
    + '<div class="reveal" style="--d:.22s">' + leadHtml + '</div>'
    + '<div class="reveal" style="--d:.28s">' + ctaHtml + '</div>'
    + '<div class="reveal" style="--d:.34s">' + statsHtml + '</div>'
    + '<div class="reveal" style="--d:.40s">' + socialsHtml + '</div>'
    + '</div>';

  // Right: portrait
  var right = '<div class="hero-right reveal" style="--d:.18s">'
    + '<div class="hero-portrait">'
    +   '<span class="hero-halo" aria-hidden="true"></span>'
    +   '<div class="hero-frame">'
    +     '<img class="hero-img" src="assets/images/profile.jpg" '
    +       'alt="Portrait of ' + fullName + ', ' + title + ', wearing a navy blazer over a light-blue shirt" '
    +       'width="820" height="876" loading="eager" decoding="async">'
    +   '</div>'
    + '</div>'
    + '</div>';

  // Scroll indicator
  var si = hero.scrollIndicator || { text:"Scroll to explore", icon:"fas fa-chevron-down" };
  var scroll = '<a class="hero-scroll" href="#about" aria-label="' + si.text + '">'
    + '<span>' + si.text + '</span>'
    + '<i class="' + si.icon + '" aria-hidden="true"></i></a>';

  return '<div class="hero-grid">' + left + right + '</div>' + scroll;
}

/* ---- render: about+experience ---- */
function renderAbout(about){
  var about_ = about || {};
  var paras = Array.isArray(about_.paragraphs) ? about_.paragraphs : [];
  var stats = Array.isArray(about_.statistics) ? about_.statistics : [];
  var cv = about_.downloadCV || {};

  function esc(s){
    return String(s == null ? '' : s)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;');
  }

  var introHtml = paras.map(function(p, i){
    var cls = 'ab-lead' + (i === 0 ? ' ab-lead--first' : '');
    return '<p class="' + cls + '">' + esc(p) + '</p>';
  }).join('');

  var ctaHtml = '';
  if (cv.text){
    ctaHtml =
      '<div class="ab-cta reveal" style="--d:.18s">' +
        '<a class="btn btn--primary" href="' + esc(cv.href || '#') + '"' +
          (cv.href ? ' download' : '') + '>' +
          (cv.icon ? '<i class="' + esc(cv.icon) + '" aria-hidden="true"></i>' : '') +
          esc(cv.text) +
        '</a>' +
      '</div>';
  }

  var statsHtml = stats.map(function(s, i){
    var raw = String(s.value == null ? '' : s.value).trim();
    var m = raw.match(/^([\d.,]+)(.*)$/);
    var num = m ? m[1].replace(/,/g,'') : '0';
    var suffix = m ? m[2] : raw;
    var color = s.color ? esc(s.color) : '';
    var delay = (0.06 * (i + 1)).toFixed(2);
    return (
      '<div class="ab-stat glass glass--hover reveal" style="--d:.' +
        String(delay).split('.')[1] + 's;' +
        (color ? '--ab-c:' + color + ';' : '') + '">' +
        '<span class="ab-ic">' +
          '<i class="' + esc(s.icon || 'fas fa-circle') + '" aria-hidden="true"></i>' +
        '</span>' +
        '<span class="ab-meta">' +
          '<span class="ab-num" data-count="' + esc(num) + '"' +
            (suffix ? ' data-suffix="' + esc(suffix) + '"' : '') + '>0</span>' +
          '<span class="ab-label">' + esc(s.label || '') + '</span>' +
        '</span>' +
      '</div>'
    );
  }).join('');

  return (
    '<div class="container">' +
      '<div class="section-head reveal">' +
        '<span class="eyebrow">About</span>' +
        '<h2 class="section-title">' + esc(about_.sectionTitle || 'About Me') + '</h2>' +
      '</div>' +
      '<div class="ab-wrap">' +
        '<div class="ab-intro reveal" style="--d:.06s">' +
          introHtml +
          ctaHtml +
        '</div>' +
        '<div class="ab-metrics">' +
          statsHtml +
        '</div>' +
      '</div>' +
    '</div>'
  );
}

function renderExperience(exp){
  var exp_ = exp || {};
  var roles = Array.isArray(exp_.experiences) ? exp_.experiences : [];

  function esc(s){
    return String(s == null ? '' : s)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;');
  }

  var itemsHtml = roles.map(function(r, i){
    var resp = Array.isArray(r.responsibilities) ? r.responsibilities : [];
    var bullets = resp.map(function(b){
      return '<li class="xp-li">' + esc(b) + '</li>';
    }).join('');

    var metaParts = [];
    if (r.company) metaParts.push('<span class="xp-co">' + esc(r.company) + '</span>');
    if (r.location) metaParts.push('<span>' + esc(r.location) + '</span>');
    if (r.period) metaParts.push('<span>' + esc(r.period) + '</span>');
    var meta = metaParts.join('<span class="xp-sep" aria-hidden="true">&bull;</span>');

    var delay = (0.08 * (i + 1)).toFixed(2);

    return (
      '<article class="xp-item reveal" style="--d:.' +
        String(delay).split('.')[1] + 's">' +
        '<div class="xp-card glass glass--hover">' +
          '<header class="xp-head">' +
            (r.logo ? '<span class="xp-logo"><img src="' + esc(r.logo) + '" alt="' +
              esc(r.company || '') + ' logo" loading="lazy" width="46" height="46"></span>' : '') +
            '<div class="xp-headtext">' +
              '<h3 class="xp-title">' + esc(r.title || '') + '</h3>' +
              '<p class="xp-meta">' + meta + '</p>' +
            '</div>' +
          '</header>' +
          '<ul class="xp-list">' + bullets + '</ul>' +
        '</div>' +
      '</article>'
    );
  }).join('');

  return (
    '<div class="container">' +
      '<div class="section-head reveal">' +
        '<span class="eyebrow">Experience</span>' +
        '<h2 class="section-title">' + esc(exp_.sectionTitle || 'Professional Experience') + '</h2>' +
      '</div>' +
      '<div class="xp-timeline">' +
        itemsHtml +
      '</div>' +
    '</div>'
  );
}

/* ---- render: skills+work ---- */
function renderSkills(skills){
  var data = skills || {};
  var cats = Array.isArray(data.categories) ? data.categories : [];
  var title = data.sectionTitle || 'The toolkit behind the analysis';

  var rows = cats.map(function(c, i){
    var color = c.color || 'var(--accent)';
    var list = Array.isArray(c.skills) ? c.skills : [];
    var icon = c.icon || 'fa-solid fa-layer-group';
    var n = list.length;
    var tags = list.map(function(s){
      return '<span class="pill sk-tag" style="--sk-c:' + color + '">' + esc(s) + '</span>';
    }).join('');
    var d = (0.06 + i * 0.05).toFixed(2);
    return ''+
      '<div class="glass sk-row reveal" style="--sk-c:' + color + ';--d:' + d + 's">'+
        '<div class="sk-rowhead">'+
          '<span class="sk-ico"><i class="' + esc(icon) + '" aria-hidden="true"></i></span>'+
          '<span>'+
            '<span class="sk-cat">' + esc(c.category || 'Skills') + '</span>'+
            '<span class="sk-count mono">' + n + ' ' + (n === 1 ? 'tool' : 'tools') + '</span>'+
          '</span>'+
        '</div>'+
        '<div class="sk-tags">' + tags + '</div>'+
      '</div>';
  }).join('');

  return ''+
    '<div class="container">'+
      '<div class="section-head reveal">'+
        '<span class="eyebrow">Stack</span>'+
        '<h2 class="section-title">' + esc(title) + '</h2>'+
      '</div>'+
      '<div class="sk-wrap">' + rows + '</div>'+
    '</div>';

  function esc(s){
    return String(s == null ? '' : s)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;')
      .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
}

function renderWork(projects){
  var data = projects || {};
  var list = Array.isArray(data.projects) ? data.projects : [];
  var title = data.sectionTitle || 'Selected work';

  var featured = list.filter(function(p){ return p && p.featured; });
  var rest = list.filter(function(p){ return !(p && p.featured); });

  var featHTML = featured.length
    ? '<div class="wk-featured">' + featured.map(function(p,i){ return card(p, true, i); }).join('') + '</div>'
    : '';
  var gridHTML = rest.length
    ? '<div class="wk-grid">' + rest.map(function(p,i){ return card(p, false, i + featured.length); }).join('') + '</div>'
    : '';

  return ''+
    '<div class="container">'+
      '<div class="section-head reveal">'+
        '<span class="eyebrow">Selected Work</span>'+
        '<h2 class="section-title">' + esc(title) + '</h2>'+
      '</div>'+
      featHTML + gridHTML +
    '</div>';

  function card(p, hero, idx){
    var color = p.color || 'var(--accent)';
    var icon = p.icon || 'fa-solid fa-chart-line';
    var techs = Array.isArray(p.technologies) ? p.technologies : [];
    var links = p.links || {};
    var stats = p.stats || {};
    var d = (0.06 + (idx || 0) * 0.05).toFixed(2);

    var tagHTML = techs.map(function(t){
      return '<span class="pill wk-tag">' + esc(t) + '</span>';
    }).join('');

    var gh = links.github && String(links.github).trim();
    var demo = (links.demo && String(links.demo).trim()) || (links.live && String(links.live).trim());
    var linkParts = [];
    if(gh){
      linkParts.push('<a class="wk-link" href="' + esc(gh) + '" target="_blank" rel="noopener noreferrer" aria-label="View source code for ' + esc(p.title || 'project') + ' on GitHub"><i class="fa-brands fa-github" aria-hidden="true"></i>Code</a>');
    }
    if(demo){
      linkParts.push('<a class="wk-link" href="' + esc(demo) + '" target="_blank" rel="noopener noreferrer" aria-label="Open live demo of ' + esc(p.title || 'project') + '"><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>Live Demo</a>');
    }
    var linksHTML = linkParts.length
      ? '<div class="wk-links">' + linkParts.join('') + '</div>'
      : '<span class="wk-case mono"><i class="fa-solid fa-book-open" aria-hidden="true"></i>Case study</span>';

    var status = stats.status ? '<span class="wk-status"><span class="wk-dot"></span>' + esc(stats.status) + '</span>' : '';
    var year = stats.year ? '<span class="wk-year">' + esc(stats.year) + '</span>' : '';
    var metaHTML = (status || year)
      ? '<span class="wk-meta">' + status + year + '</span>'
      : '';

    return ''+
      '<article class="glass glass--hover wk-card reveal' + (hero ? ' wk-hero' : '') + '" style="--wk-c:' + color + ';--d:' + d + 's">'+
        '<div class="wk-cardtop">'+
          '<div>'+
            '<span class="wk-cat">' + esc(p.category || 'Project') + '</span>'+
            '<h3 class="wk-title">' + esc(p.title || 'Untitled') + '</h3>'+
          '</div>'+
          '<span class="wk-ico"><i class="' + esc(icon) + '" aria-hidden="true"></i></span>'+
        '</div>'+
        (p.description ? '<p class="wk-desc">' + esc(p.description) + '</p>' : '')+
        (tagHTML ? '<div class="wk-tags">' + tagHTML + '</div>' : '')+
        '<div class="wk-foot">' + linksHTML + metaHTML + '</div>'+
      '</article>';
  }

  function esc(s){
    return String(s == null ? '' : s)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;')
      .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }
}

/* ---- render: edu+contact+footer ---- */
function renderEducation(edu) {
  edu = edu || {};
  var items = Array.isArray(edu.education) ? edu.education : [];
  var title = edu.sectionTitle || 'Education';

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  var cards = items.map(function (e, i) {
    var idx = ('0' + (i + 1)).slice(-2);
    var degree = esc(e.degree || '');
    var school = esc(e.school || e.institution || '');
    var period = e.period ? esc(e.period) : '';
    var details = e.details ? esc(e.details) : '';

    var periodHtml = period
      ? '<span class="edu-period"><i class="far fa-calendar" aria-hidden="true"></i>' + period + '</span>'
      : '';
    var gpaHtml = details
      ? '<span class="edu-gpa"><i class="fas fa-chart-line" aria-hidden="true"></i>' + details + '</span>'
      : '';
    var metaHtml = (periodHtml || gpaHtml)
      ? '<div class="edu-meta">' + periodHtml + gpaHtml + '</div>'
      : '';

    return '' +
      '<article class="edu-card glass glass--hover reveal" style="--d:' + (0.08 + i * 0.08).toFixed(2) + 's">' +
        '<div class="edu-card-top">' +
          '<span class="edu-index mono">' + idx + '</span>' +
          '<span class="edu-cap"><i class="fas fa-graduation-cap" aria-hidden="true"></i></span>' +
        '</div>' +
        '<h3 class="edu-degree">' + degree + '</h3>' +
        '<p class="edu-school">' + school + '</p>' +
        metaHtml +
      '</article>';
  }).join('');

  return '' +
    '<div class="container">' +
      '<div class="section-head reveal">' +
        '<span class="eyebrow">Education</span>' +
        '<h2 class="section-title">' + esc(title) + '</h2>' +
      '</div>' +
      '<div class="edu-grid">' + cards + '</div>' +
    '</div>';
}

function renderContact(contact) {
  contact = contact || {};
  var title = contact.sectionTitle || 'Get In Touch';
  var subtitle = contact.subtitle || '';
  var info = Array.isArray(contact.contactInfo) ? contact.contactInfo : [];
  var socials = Array.isArray(contact.socialMedia) ? contact.socialMedia : [];
  var form = contact.form || {};
  var fields = Array.isArray(form.fields) ? form.fields : [];

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function escAttr(s) { return esc(s); }

  var rows = info.map(function (c) {
    var color = c.color || '#5EE7FB';
    var icon = c.icon || 'fas fa-circle';
    var label = esc(c.label || '');
    var value = esc(c.value || '');
    var href = c.href || '#';
    var isLocation = c.type === 'location';
    var target = (!isLocation && /^https?:/i.test(href))
      ? ' target="_blank" rel="noopener noreferrer"' : '';
    var aria = label ? (label + ': ' + value) : value;

    return '' +
      '<a class="ct-row" href="' + escAttr(href) + '"' + target +
        ' aria-label="' + escAttr(aria) + '" style="--ct-tint:' + escAttr(color) + '">' +
        '<span class="ct-row-icon"><i class="' + escAttr(icon) + '" aria-hidden="true"></i></span>' +
        '<span class="ct-row-body">' +
          '<span class="ct-row-label">' + label + '</span>' +
          '<span class="ct-row-value">' + value + '</span>' +
        '</span>' +
      '</a>';
  }).join('');

  var socialHtml = socials.length
    ? '<div class="ct-socials">' + socials.map(function (s) {
        var icon = s.icon || 'fas fa-link';
        var platform = esc(s.platform || 'social');
        var url = s.url || '#';
        return '<a class="ct-social" href="' + escAttr(url) + '" target="_blank" rel="noopener noreferrer"' +
          ' aria-label="' + platform + '"><i class="' + escAttr(icon) + '" aria-hidden="true"></i></a>';
      }).join('') + '</div>'
    : '';

  var fieldsHtml = fields.map(function (f) {
    var name = escAttr(f.name || '');
    var id = 'ct-' + name;
    var label = esc(f.label || '');
    var ph = escAttr(f.placeholder || '');
    var req = f.required ? ' required aria-required="true"' : '';
    var reqMark = f.required ? ' <span aria-hidden="true">*</span>' : '';
    var icon = f.icon ? '<i class="' + escAttr(f.icon) + '" aria-hidden="true"></i>' : '';

    var control;
    if ((f.type || 'text') === 'textarea') {
      var rowsAttr = f.rows ? ' rows="' + parseInt(f.rows, 10) + '"' : ' rows="6"';
      control = '<textarea class="ct-textarea" id="' + id + '" name="' + name + '"' +
        rowsAttr + ' placeholder="' + ph + '"' + req + '></textarea>';
    } else {
      control = '<input class="ct-input" id="' + id + '" name="' + name +
        '" type="' + escAttr(f.type || 'text') + '" placeholder="' + ph + '"' + req + '>';
    }

    return '' +
      '<div class="ct-field">' +
        '<label class="ct-field-label" for="' + id + '">' + label + reqMark + '</label>' +
        '<div class="ct-input-wrap">' + icon + control + '</div>' +
      '</div>';
  }).join('');

  var submitText = esc(form.submitText || 'Send Message');
  var submitIcon = form.submitIcon
    ? '<i class="' + escAttr(form.submitIcon) + '" aria-hidden="true"></i>' : '';

  return '' +
    '<div class="container">' +
      '<div class="section-head reveal">' +
        '<span class="eyebrow">Contact</span>' +
        '<h2 class="section-title">' + esc(title) + '</h2>' +
        (subtitle ? '<p class="ct-sub">' + esc(subtitle) + '</p>' : '') +
      '</div>' +
      '<div class="ct-layout">' +
        '<div class="ct-left reveal" style="--d:.08s">' +
          rows +
          socialHtml +
        '</div>' +
        '<form id="ct-form" class="ct-form glass reveal" style="--d:.16s" novalidate>' +
          fieldsHtml +
          '<button type="submit" class="btn btn--primary ct-submit">' +
            submitText + submitIcon +
          '</button>' +
        '</form>' +
      '</div>' +
    '</div>';
}

function renderFooter(footer) {
  footer = footer || {};
  var copyright = footer.copyright || {};
  var tagline = footer.tagline || '';
  var socials = Array.isArray(footer.socialLinks) ? footer.socialLinks : [];
  var name = copyright.name || 'Pranav Grover';
  var copyText = copyright.text || '';

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function escAttr(s) { return esc(s); }

  var socialHtml = socials.length
    ? '<div class="ft-socials">' + socials.map(function (s) {
        var icon = s.icon || 'fas fa-link';
        var platform = esc(s.platform || 'link');
        var url = s.url || '#';
        var external = /^https?:/i.test(url)
          ? ' target="_blank" rel="noopener noreferrer"' : '';
        return '<a class="ft-social" href="' + escAttr(url) + '"' + external +
          ' aria-label="' + platform + '"><i class="' + escAttr(icon) + '" aria-hidden="true"></i></a>';
      }).join('') + '</div>'
    : '';

  return '' +
    '<div class="container">' +
      '<div class="ft-inner">' +
        '<span class="ft-wordmark">' + esc(name) + '</span>' +
        (tagline ? '<p class="ft-tagline mono">' + esc(tagline) + '</p>' : '') +
        socialHtml +
        (copyText ? '<p class="ft-copy">' + esc(copyText) + '</p>' : '') +
      '</div>' +
    '</div>';
}

/* =========================================================================
   BOOTSTRAP — data fetch, render wiring, and interactions
   (render functions are defined above this block)
   ========================================================================= */
(function () {
  'use strict';

  var REGIONS = [
    ['#site-nav',          'navigation', 'renderNav'],
    ['#hero-content',      'hero',       'renderHero'],
    ['#about-content',     'about',      'renderAbout'],
    ['#experience-content','experience', 'renderExperience'],
    ['#skills-content',    'skills',     'renderSkills'],
    ['#work-content',      'projects',   'renderWork'],
    ['#education-content', 'education',  'renderEducation'],
    ['#contact-content',   'contact',    'renderContact'],
    ['#site-footer',       'footer',     'renderFooter']
  ];

  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  async function getJSON(file) {
    var res = await fetch('data/' + file + '.json', { cache: 'no-cache' });
    if (!res.ok) throw new Error('Failed to load ' + file);
    return res.json();
  }

  async function boot() {
    var data = {};
    await Promise.all(REGIONS.map(async function (r) {
      try { data[r[1]] = await getJSON(r[1]); }
      catch (e) { console.error(e); data[r[1]] = null; }
    }));

    // Render each region with its function
    REGIONS.forEach(function (r) {
      var mount = $(r[0]);
      var fn = window[r[2]];
      if (mount && typeof fn === 'function' && data[r[1]]) {
        try { mount.innerHTML = fn(data[r[1]]); }
        catch (e) { console.error('render ' + r[2] + ' failed', e); }
      }
    });

    // Optional site-config driven meta/title
    try {
      var sc = await getJSON('site-config');
      if (sc && sc.title) document.title = sc.title;
    } catch (e) { /* non-fatal */ }

    initNav();
    initReveal();
    initCounters();
    initBackToTop();
    initContactForm(data.contact);
  }

  /* ---- Navigation: blur-on-scroll, active link, mobile menu, smooth scroll ---- */
  function initNav() {
    var nav = $('#site-nav');
    if (!nav) return;

    var onScroll = function () {
      nav.classList.toggle('scrolled', window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    var toggle = $('.nv-toggle', nav);
    var closeMenu = function () {
      nav.classList.remove('nv-open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    };
    if (toggle) {
      toggle.addEventListener('click', function () {
        var open = nav.classList.toggle('nv-open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }

    $all('a[href^="#"]', nav).forEach(function (link) {
      link.addEventListener('click', function (e) {
        var id = link.getAttribute('href');
        var target = id && id.length > 1 ? document.querySelector(id) : null;
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
          closeMenu();
        }
      });
    });

    // Active link via section observation
    var links = $all('a[href^="#"]', nav);
    var byId = {};
    links.forEach(function (l) { byId[l.getAttribute('href').slice(1)] = l; });
    var sections = $all('main section[id]');
    if ('IntersectionObserver' in window && sections.length) {
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            links.forEach(function (l) { l.classList.remove('active'); });
            var active = byId[en.target.id];
            if (active) active.classList.add('active');
          }
        });
      }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
      sections.forEach(function (s) { spy.observe(s); });
    }
  }

  /* ---- Scroll reveal ---- */
  function initReveal() {
    var els = $all('.reveal');
    if (reduceMotion || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); obs.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---- Count-up numbers ---- */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute('data-count')) || 0;
    var suffix = el.getAttribute('data-suffix') || '';
    if (reduceMotion) { el.textContent = String(target) + suffix; return; }
    var dur = 1400, start = null;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = Math.round(target * eased);
      el.textContent = String(val) + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = String(target) + suffix;
    }
    requestAnimationFrame(step);
  }
  function initCounters() {
    var nums = $all('[data-count]');
    if (!nums.length) return;
    if (!('IntersectionObserver' in window)) { nums.forEach(animateCount); return; }
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { animateCount(en.target); obs.unobserve(en.target); }
      });
    }, { threshold: 0.4 });
    nums.forEach(function (n) { io.observe(n); });
  }

  /* ---- Back to top ---- */
  function initBackToTop() {
    var btn = $('#back-to-top');
    if (!btn) return;
    var onScroll = function () { btn.classList.toggle('show', window.scrollY > 600); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }

  /* ---- Contact form -> mailto (no backend) ---- */
  function initContactForm(contact) {
    var form = $('#ct-form');
    if (!form) return;
    var email = 'pranavg0520@outlook.com';
    if (contact && Array.isArray(contact.contactInfo)) {
      var em = contact.contactInfo.filter(function (c) { return c.type === 'email'; })[0];
      if (em && em.value) email = em.value;
    }
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var get = function (n) { var f = form.elements[n]; return f ? f.value.trim() : ''; };
      var name = get('name'), from = get('email'), subject = get('subject'), message = get('message');
      var subj = subject || ('Portfolio enquiry' + (name ? ' from ' + name : ''));
      var body = message + '\n\n— ' + (name || '') + (from ? ' (' + from + ')' : '');
      window.location.href = 'mailto:' + email +
        '?subject=' + encodeURIComponent(subj) +
        '&body=' + encodeURIComponent(body);
      var note = $('.ct-status', form) || form.querySelector('[data-status]');
      if (note) note.textContent = 'Opening your email app…';
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
