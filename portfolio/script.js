(function () {
  const root = document.documentElement;
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storedTheme = localStorage.getItem('theme');

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  // Init theme quickly to avoid FOUC
  const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
  applyTheme(initialTheme);

  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navMenu.style.display = expanded ? 'none' : 'flex';
    });

    // Close on nav link click (mobile)
    navMenu.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        if (window.innerWidth <= 640) {
          navToggle.setAttribute('aria-expanded', 'false');
          navMenu.style.display = 'none';
        }
      });
    });

    // Reset on resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 640) {
        navMenu.style.display = 'flex';
        navToggle.setAttribute('aria-expanded', 'false');
      } else {
        navMenu.style.display = 'none';
      }
    });
  }

  // Current year
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();