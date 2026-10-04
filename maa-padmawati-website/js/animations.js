/**
 * MAA PADMAWATI PLY & DECOR - ANIMATIONS MODULE
 * IntersectionObserver scroll reveals, value counters, and subtle hero zoom.
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollObserver();
  initHeroParallax();
});

/**
 * Scroll Reveal via IntersectionObserver
 */
function initScrollObserver() {
  // Check prefers-reduced-motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const revealElements = document.querySelectorAll(
    '.reveal-on-scroll, .reveal-from-left, .reveal-from-right'
  );

  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/**
 * Hero Background Subtle Zoom on Page Load
 */
function initHeroParallax() {
  const heroImg = document.querySelector('.hero-bg-img');
  if (!heroImg) return;

  // Gentle initial reveal
  setTimeout(() => {
    heroImg.style.transform = 'scale(1)';
  }, 100);

  // Subtle mouse movement parallax on desktop
  const heroSection = document.querySelector('.hero-section');
  if (!heroSection || window.innerWidth <= 1024) return;

  heroSection.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const xPos = (clientX / window.innerWidth - 0.5) * 15;
    const yPos = (clientY / window.innerHeight - 0.5) * 15;
    heroImg.style.transform = `scale(1.03) translate(${xPos * -0.5}px, ${yPos * -0.5}px)`;
  });
}
