/* utils.js — global App namespace and shared helpers */
window.App = window.App || {};

App.$ = function (selector, ctx) {
  return Array.prototype.slice.call((ctx || document).querySelectorAll(selector));
};

App.byId = function (id) {
  return document.getElementById(id);
};

App.toast = function (text) {
  var el = App.byId('toast');
  if (!el) return;
  el.textContent = text;
  el.classList.add('on');
  setTimeout(function () { el.classList.remove('on'); }, 2200);
};
