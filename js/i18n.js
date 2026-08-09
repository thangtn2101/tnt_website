/**
 * i18n.js
 * Minimal translation engine.
 *
 * Usage in HTML:
 *   <span data-i18n="hero.headline"></span>            -> textContent
 *   <span data-i18n="hero.headline" data-i18n-html></span> -> innerHTML (allows &amp; entities, <br>, etc.)
 *   <input data-i18n-placeholder="contact.form.namePh">
 *
 * Dynamic, list-based sections (solutions, workflow, customers, pricing)
 * are rendered separately in main.js, which listens for "tnt:languagechange".
 */
(function () {
  const STORAGE_KEY = "tnt-lang";
  const DEFAULT_LANG = "vi";
  const SUPPORTED = ["vi", "en"];

  function getPath(obj, path) {
    return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
  }

  function getInitialLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.includes(saved)) return saved;
    return DEFAULT_LANG;
  }

  let currentLang = getInitialLang();

  function applyStaticTranslations(lang) {
    const dict = TRANSLATIONS[lang];

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = getPath(dict, el.getAttribute("data-i18n"));
      if (value === undefined) return;
      if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const value = getPath(dict, el.getAttribute("data-i18n-placeholder"));
      if (value !== undefined) el.setAttribute("placeholder", value);
    });

    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang-toggle") === lang);
    });
  }

  function setLanguage(lang) {
    if (!SUPPORTED.includes(lang) || lang === currentLang) {
      if (!SUPPORTED.includes(lang)) return;
    }
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    applyStaticTranslations(lang);
    document.dispatchEvent(new CustomEvent("tnt:languagechange", { detail: { lang, dict: TRANSLATIONS[lang] } }));
  }

  function initLanguageSwitch() {
    document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => setLanguage(btn.getAttribute("data-lang-toggle")));
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initLanguageSwitch();
    applyStaticTranslations(currentLang);
    // Let other modules render dynamic content for the initial language too.
    document.dispatchEvent(new CustomEvent("tnt:languagechange", { detail: { lang: currentLang, dict: TRANSLATIONS[currentLang] } }));
  });

  window.TNT_I18N = { getLang: () => currentLang, setLanguage };
})();