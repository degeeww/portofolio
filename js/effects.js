/* effects.js — custom cursor, magnetic buttons, 3D parallax, scroll reveal, progress bar */
(function () {
  var $ = App.$, byId = App.byId;
  var cur = byId('cur'), cx = 0, cy = 0, tx = 0, ty = 0;

  function initCursor() {
    document.addEventListener('mousemove', function (e) {
      tx = e.clientX; ty = e.clientY;
      if (!cur.classList.contains('big')) cur.style.opacity = 1;
    });
    (function loop() {
      cx += (tx - cx) * 0.18; cy += (ty - cy) * 0.18;
      cur.style.left = cx + 'px'; cur.style.top = cy + 'px';
      requestAnimationFrame(loop);
    })();
  }

  /* enlarge the cursor when hovering these elements (also used by the gallery) */
  App.hoverable = function (list) {
    list.forEach(function (el) {
      el.addEventListener('mouseenter', function () { cur.classList.add('big'); });
      el.addEventListener('mouseleave', function () { cur.classList.remove('big'); });
    });
  };

  function initMagnetic() {
    $('.mag').forEach(function (el) {
      el.addEventListener('mousemove', function (e) {
        var r = el.getBoundingClientRect();
        el.style.transform = 'translate(' + (e.clientX - r.left - r.width / 2) * 0.25 + 'px,' +
          (e.clientY - r.top - r.height / 2) * 0.35 + 'px)';
      });
      el.addEventListener('mouseleave', function () { el.style.transform = ''; });
    });
  }

  /* 3D hero scene follows the mouse */
  function initScene() {
    var sc = byId('scene');
    document.addEventListener('mousemove', function (e) {
      var x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5;
      $('.par', sc).forEach(function (p) {
        var d = +p.dataset.d;
        p.style.transform = 'translate(' + x * d * 2 + 'px,' + y * d * 2 + 'px)';
      });
      sc.style.transform = 'rotateY(' + x * 14 + 'deg) rotateX(' + -y * 14 + 'deg)';
    });
  }

  /* fade-in on scroll + animated skill bars */
  function initReveal() {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        el.classList.add('in');
        $('[data-w]', el).forEach(function (b) { b.style.width = b.dataset.w + '%'; });
        io.unobserve(el);
      });
    }, { threshold: 0.15 });
    $('.rv:not(.in)').forEach(function (el, i) {
      el.style.transitionDelay = (i % 4) * 0.08 + 's';
      io.observe(el);
    });
  }

  /* top progress bar + blob parallax */
  function initScroll() {
    var bar = byId('bar'), blobs = $('.blob');
    function onScroll() {
      var h = document.documentElement, y = scrollY;
      bar.style.width = (y / Math.max(h.scrollHeight - innerHeight, 1)) * 100 + '%';
      blobs.forEach(function (b) { b.style.transform = 'translateY(' + y * b.dataset.sp * -4 + 'px)'; });
    }
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  App.effects = {
    init: function () {
      initCursor();
      App.hoverable($('a,.sv,.chips span'));
      initMagnetic();
      initScene();
      initReveal();
      initScroll();
    }
  };
})();
