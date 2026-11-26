/* contact.js — message builder, WhatsApp / email links, copy buttons, live clock */
(function () {
  var byId = App.byId;

  function buildMessage() {
    var v = function (id) { return byId(id).value.trim(); };
    return 'Hello, I am ' + (v('c-n') || '(name)') + '.\n' +
      'Contact: ' + (v('c-k') || '-') + '\n' +
      'Service: ' + v('c-s') + '\n' +
      'Budget: ' + v('c-b') + '\n\n' +
      (v('c-m') || 'I would like to discuss a project.');
  }

  function copy(text, okMessage) {
    var p = navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject();
    p.then(function () { App.toast(okMessage); }, function () { App.toast('Could not copy automatically'); });
  }

  function tick() {
    byId('clock').textContent = new Date().toLocaleTimeString(CONFIG.locale, {
      timeZone: CONFIG.timezone, hour: '2-digit', minute: '2-digit'
    });
  }

  App.contact = {
    init: function () {
      byId('c-wa').onclick = function () {
        window.open('https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(buildMessage()), '_blank', 'noopener');
      };
      byId('c-em').onclick = function () {
        window.open('mailto:' + CONFIG.email + '?subject=' + encodeURIComponent('Project: ' + byId('c-s').value) +
          '&body=' + encodeURIComponent(buildMessage()), '_blank');
      };
      byId('c-cp').onclick = function () { copy(buildMessage(), 'Message copied'); };
      byId('c-ce').onclick = function () { copy(CONFIG.email, 'Email copied'); };
      tick();
      setInterval(tick, 30000);
    }
  };
})();
