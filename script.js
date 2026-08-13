(function () {
  "use strict";

  var html = document.documentElement;

  /* =========================================================
     LANGUAGE
     Priority: stored preference > browser language > 'es' default
  ========================================================= */
  var LANG_KEY = "jpt-lang";
  var langBtnEs = document.getElementById("lang-es-btn");
  var langBtnEn = document.getElementById("lang-en-btn");

  var TITLES = {
    es: "Jorge Luis Palacio Tello — Industrial Engineer · Process Improvement",
    en: "Jorge Luis Palacio Tello — Industrial Engineer · Process Improvement"
  };
  var DESCRIPTIONS = {
    es: "Ingeniero Industrial especializado en mejora de procesos, Lean Management y gestión de calidad. Portafolio, experiencia y evidencia verificable.",
    en: "Industrial Engineer specialized in process improvement, Lean Management, and quality management. Portfolio, experience, and verifiable evidence."
  };

  function applyLang(lang) {
    html.setAttribute("data-lang", lang);
    html.setAttribute("lang", lang);
    document.getElementById("page-title").textContent = TITLES[lang];
    document.getElementById("meta-description").setAttribute("content", DESCRIPTIONS[lang]);
    document.getElementById("og-title").setAttribute("content", TITLES[lang]);
    document.getElementById("og-description").setAttribute("content", DESCRIPTIONS[lang]);
    if (langBtnEs && langBtnEn) {
      langBtnEs.setAttribute("aria-pressed", String(lang === "es"));
      langBtnEn.setAttribute("aria-pressed", String(lang === "en"));
    }
  }

  function detectInitialLang() {
    try {
      var stored = localStorage.getItem(LANG_KEY);
      if (stored === "es" || stored === "en") return stored;
    } catch (e) { /* localStorage unavailable */ }

    var nav = (navigator.language || navigator.userLanguage || "es").toLowerCase();
    return nav.indexOf("en") === 0 ? "en" : "es";
  }

  function setLang(lang, persist) {
    applyLang(lang);
    if (persist) {
      try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }
    }
  }

  setLang(detectInitialLang(), false);

  if (langBtnEs) langBtnEs.addEventListener("click", function () { setLang("es", true); });
  if (langBtnEn) langBtnEn.addEventListener("click", function () { setLang("en", true); });

  /* =========================================================
     THEME
     Priority: stored preference > prefers-color-scheme > light
  ========================================================= */
  var THEME_KEY = "jpt-theme";
  var themeBtn = document.getElementById("theme-toggle");
  var iconSun = document.getElementById("icon-sun");
  var iconMoon = document.getElementById("icon-moon");
  var mql = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  function applyTheme(theme) {
    html.setAttribute("data-theme", theme);
    if (themeBtn) themeBtn.setAttribute("aria-pressed", String(theme === "dark"));
    if (iconSun && iconMoon) {
      iconSun.style.display = theme === "dark" ? "none" : "block";
      iconMoon.style.display = theme === "dark" ? "block" : "none";
    }
  }

  function getStoredTheme() {
    try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; }
  }

  function detectInitialTheme() {
    var stored = getStoredTheme();
    if (stored === "dark" || stored === "light") return stored;
    return (mql && mql.matches) ? "dark" : "light";
  }

  applyTheme(detectInitialTheme());

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var current = html.getAttribute("data-theme");
      var next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* ignore */ }
    });
  }

  // Follow system changes only if the user has not made a manual choice.
  if (mql) {
    mql.addEventListener("change", function (e) {
      if (!getStoredTheme()) applyTheme(e.matches ? "dark" : "light");
    });
  }

  /* =========================================================
     MOBILE MENU
  ========================================================= */
  var burger = document.getElementById("nav-burger");
  if (burger) {
    burger.addEventListener("click", function () {
      var open = document.body.classList.toggle("menu-open");
      burger.setAttribute("aria-expanded", String(open));
    });

    document.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () {
        document.body.classList.remove("menu-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* =========================================================
     SCROLL REVEAL (respects reduced motion via CSS)
  ========================================================= */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* =========================================================
     FOOTER YEAR
  ========================================================= */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
