/* router.js — hash routing between pages + intro loader */
(function () {
  var $ = App.$, byId = App.byId;
  var loaded = false;

  function route() {
    var key = location.hash.replace('#', '') || 'home';
    if (!byId('v-' + key)) key = 'home';
    $('.view').forEach(function (v) { v.classList.toggle('on', v.id === 'v-' + key); });
    $('nav a[data-v]').forEach(function (a) { a.classList.toggle('on', a.dataset.v === key); });
    byId('contact').style.display = key === 'kontak' ? 'none' : '';   // hide footer contact on the Contact page
    window.scrollTo(0, 0);
    if (key === 'home') {
      setTimeout(function () { byId('hero').classList.add('go'); }, loaded ? 100 : 1250);
    }
  }

  App.router = {
    init: function () {
      window.addEventListener('hashchange', route);
      window.addEventListener('load', function () {
        setTimeout(function () { byId('loader').classList.add('done'); loaded = true; }, 900);
      });
      route();
    }
  };
})();
