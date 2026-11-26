/* about.js — profile photo in the About me section */
(function () {
  var byId = App.byId;

  App.about = {
    init: function () {
      var frame = byId('photo'), img = byId('me-img'), input = byId('me-up');
      function setPhoto(src) { img.src = src; frame.classList.add('has'); }

      if (CONFIG.photo) setPhoto(CONFIG.photo);
      frame.addEventListener('click', function (e) { if (e.target !== input) input.click(); });
      input.addEventListener('change', function () {
        if (input.files[0]) setPhoto(URL.createObjectURL(input.files[0]));
      });
    }
  };
})();
