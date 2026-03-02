document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.site-nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(anchor => {
    anchor.addEventListener('click', e => {
      const targetId = anchor.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const cookieBanner = document.querySelector('.cookie-banner');
  const cookieButton = document.querySelector('[data-cookie-accept]');
  const cookieKey = 'stsCookieConsent';
  if (cookieBanner && cookieButton) {
    if (localStorage.getItem(cookieKey) === 'true') {
      cookieBanner.classList.add('hidden');
    }
    cookieButton.addEventListener('click', () => {
      localStorage.setItem(cookieKey, 'true');
      cookieBanner.classList.add('hidden');
    });
  }
});
