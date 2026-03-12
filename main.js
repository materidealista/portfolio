/* ================================================================
   Luis Ernesto Prieto Amaro — Academic Portfolio
   assets/js/main.js
   ================================================================ */

// ── Intersection Observer: section fade-in ────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ── Active nav link on scroll ─────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('nav ul a');

function updateNav() {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}

// ── Scroll-to-top button ──────────────────────────────────────────
const topBtn = document.getElementById('top-btn');
if (topBtn) {
  topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

window.addEventListener('scroll', () => {
  updateNav();
  if (topBtn) topBtn.classList.toggle('show', window.scrollY > 500);
}, { passive: true });
