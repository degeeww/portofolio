/* experience.js — timeline category filter */
(function () {
  var $ = App.$;

  App.experience = {
    init: function () {
      $('.fbar button').forEach(function (btn) {
        btn.addEventListener('click', function () {
          $('.fbar button').forEach(function (b) { b.classList.toggle('on', b === btn); });
          $('.ex').forEach(function (item) {
            item.style.display = (btn.dataset.k === 'all' || item.dataset.k === btn.dataset.k) ? '' : 'none';
          });
        });
      });
    }
  };
})();
