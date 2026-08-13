(function () {
  var html = document.documentElement;

  /* ---------- Idioma ---------- */
  var langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', function () {
      var next = html.getAttribute('data-lang') === 'es' ? 'en' : 'es';
      html.setAttribute('data-lang', next);
      html.setAttribute('lang', next);
      try { localStorage.setItem('jp-lang', next); } catch (e) {}
    });
  }

  /* ---------- Tema claro / oscuro ---------- */
  var themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      html.setAttribute('data-theme', next);
      try { localStorage.setItem('jp-theme', next); } catch (e) {}
    });
  }

  /* ---------- Menú móvil ---------- */
  var menuBtn = document.getElementById('menu-toggle');
  var nav = document.getElementById('site-nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ---------- Header transparente sobre el hero ---------- */
  var header = document.getElementById('site-header');
  var hero = document.querySelector('.hero');
  if (header && hero && document.body.classList.contains('has-hero')) {
    var setHeaderState = function () {
      var threshold = hero.offsetHeight - header.offsetHeight - 40;
      if (window.scrollY > threshold) {
        header.classList.add('is-solid');
      } else {
        header.classList.remove('is-solid');
      }
    };
    setHeaderState();
    window.addEventListener('scroll', setHeaderState, { passive: true });
    window.addEventListener('resize', setHeaderState);
  }

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
