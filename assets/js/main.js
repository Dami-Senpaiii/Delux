(() => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');
  const desktopMedia = window.matchMedia('(min-width: 1024px)');

  if (!toggle || !nav) return;

  const setNavState = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Hauptmenü schließen' : 'Hauptmenü öffnen');
    nav.classList.toggle('is-open', open);
  };

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    setNavState(!expanded);
  });

  nav.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      setNavState(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setNavState(false);
      toggle.focus();
    }
  });

  desktopMedia.addEventListener('change', () => {
    if (desktopMedia.matches) {
      setNavState(false);
    }
  });
})();
