// =========================================================
// Portfolio script
//  1) 現在位置のナビ強調  2) スクロールで要素をふわっと表示
// =========================================================
(function () {
  'use strict';

  // 1) ナビ: 画面の中央にあるセクションに対応するリンクを強調
  var links = document.querySelectorAll('.nav a[data-nav]');
  var pages = document.querySelectorAll('.page');

  function keyOf(section) {
    // 詳細ページ(data-nav="project")は PROJECT として扱う
    return section.dataset.nav || section.id;
  }

  var navObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var key = keyOf(e.target);
      links.forEach(function (a) {
        a.classList.toggle('is-active', a.dataset.nav === key);
      });
    });
  }, { rootMargin: '-45% 0px -45% 0px' });

  pages.forEach(function (p) { navObserver.observe(p); });

  // 2) ふわっと表示
  var targets = document.querySelectorAll(
    '.title, .lead, .shots figure, .timeline li, .cert, .logos li, .hover-list li, .flow li, .arch li, .trouble__grid > div, .callout, .points li'
  );
  targets.forEach(function (el) { el.classList.add('reveal'); });

  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  targets.forEach(function (el) { revealObserver.observe(el); });

})();
