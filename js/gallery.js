/* gallery.js — renders works, filters, lightbox, and session uploads */
(function () {
  var $ = App.$, byId = App.byId;
  var state = { design: 'all', 'foto-video': 'all' };
  var lb = byId('lb');

  function mediaThumb(it, i) {
    if (!it.src) {
      var n = i + 1;
      return '<div class="m" style="background:' + DATA.colors[i % 6] + '">' + (n < 10 ? '0' : '') + n + '</div>';
    }
    return it.t === 'video'
      ? '<video src="' + it.src + '" muted preload="metadata"></video>'
      : '<img src="' + it.src + '" alt="' + it.n + '" loading="lazy">';
  }

  function render(page) {
    var grid = byId('g-' + page), html = '';
    DATA.items.forEach(function (it, i) {
      if (it.p !== page || (state[page] !== 'all' && it.t !== state[page])) return;
      html += '<div class="it rv in' + (it.tall ? ' t' : '') + '" data-i="' + i + '">' +
        '<span class="badge">' + DATA.labels[it.t] + '</span>' + mediaThumb(it, i) +
        (it.t === 'video' ? '<span class="play"></span>' : '') +
        '<div class="cap"><h3>' + it.n + '</h3><small>' + it.s + '</small></div></div>';
    });
    grid.innerHTML = html || '<p class="note">No works in this category yet.</p>';
    var cards = $('.it', grid);
    App.hoverable(cards);
    cards.forEach(function (c) { c.addEventListener('click', function () { openItem(+c.dataset.i); }); });
  }

  function openItem(i) {
    var it = DATA.items[i], m;
    if (it.src) {
      m = it.t === 'video'
        ? '<video src="' + it.src + '" controls autoplay></video>'
        : '<img src="' + it.src + '" alt="' + it.n + '">';
    } else {
      m = '<div class="ph" style="background:' + DATA.colors[i % 6] + '">' +
        (it.t === 'video' ? '▶' : DATA.labels[it.t]) + '</div>';
    }
    lb.innerHTML = '<div class="box">' + m + '<p>' + it.n + ' — ' + it.s + '</p></div>';
    lb.classList.add('on');
  }

  function closeLightbox() { lb.classList.remove('on'); lb.innerHTML = ''; }

  function initLightbox() {
    lb.addEventListener('click', function (e) {
      if (e.target === lb || e.target.tagName === 'P') closeLightbox();
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLightbox(); });
  }

  function initFilters() {
    $('.bar').forEach(function (bar) {
      bar.addEventListener('click', function (e) {
        var f = e.target.dataset && e.target.dataset.f;
        if (!f) return;
        $('button', bar).forEach(function (b) { b.classList.toggle('on', b === e.target); });
        state[bar.dataset.page] = f;
        render(bar.dataset.page);
      });
    });
  }

  /* "+ Add" buttons: preview files in the current session only */
  function initUpload() {
    $('[data-up]').forEach(function (input) {
      input.addEventListener('change', function () {
        var page = input.dataset.up;
        Array.prototype.forEach.call(input.files, function (f) {
          var isVideo = f.type.indexOf('video') === 0;
          DATA.items.unshift({
            p: page,
            t: isVideo ? 'video' : (page === 'design' ? 'grafis' : 'foto'),
            n: f.name.replace(/\.[^.]+$/, ''),
            s: 'Added',
            src: URL.createObjectURL(f)
          });
        });
        state[page] = 'all';
        $('button', input.closest('.bar')).forEach(function (b, i) { b.classList.toggle('on', i === 0); });
        render(page);
      });
    });
  }

  App.gallery = {
    render: render,
    init: function () {
      initLightbox(); initFilters(); initUpload();
      render('design'); render('foto-video');
    }
  };
})();
