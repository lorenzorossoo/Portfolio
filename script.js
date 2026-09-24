document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!toggle || !navLinks) return;

  function closeMenu() {
    navLinks.classList.remove('open');
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }

  toggle.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');

    toggle.classList.toggle('active', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-open', isOpen);
  });

  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const splash = document.getElementById('splash-screen');
  if (!splash) return;

  document.body.classList.add('splash-active');

  const MIN_DISPLAY_TIME = 900;
  const start = Date.now();

  function hideSplash() {
    const elapsed = Date.now() - start;
    const wait = Math.max(MIN_DISPLAY_TIME - elapsed, 0);

    setTimeout(function () {
      splash.classList.add('fade-out');
      document.body.classList.remove('splash-active');

      setTimeout(function () {
        splash.remove();
      }, 650);
    }, wait);
  }

  if (document.readyState === 'complete') {
    hideSplash();
  } else {
    window.addEventListener('load', hideSplash);
  }
});