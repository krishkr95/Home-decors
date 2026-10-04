/**
 * MAA PADMAWATI PLY & DECOR - MAIN JAVASCRIPT
 * Global UI interactions, Sticky Navbar, Mobile Menu, Active Nav,
 * Image Fallbacks, and Modal Handling.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initActiveNav();
  initModals();
  initImageFallbacks();
  initBackToTop();
  updateDynamicYear();
});

/**
 * Sticky Navbar on Scroll
 */
function initNavbar() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
}

/**
 * Mobile Fullscreen Menu Toggle
 */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger-btn');
  const mobileNav = document.querySelector('.mobile-nav-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-quote-btn');

  if (!hamburger || !mobileNav) return;

  const toggleMenu = () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  hamburger.addEventListener('click', toggleMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/**
 * Active Navigation Indicator on Scroll
 */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link, .mobile-nav-link');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-30% 0px -60% 0px'
  });

  sections.forEach(section => observer.observe(section));
}

/**
 * Global Modal System (Quick View & Quote Success)
 */
function initModals() {
  // Close modals on clicking overlay background
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeAllModals();
      }
    });
  });

  // Close modals on close button click
  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      closeAllModals();
    });
  });

  // Close on ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.classList.remove('active');
  });
  document.body.style.overflow = '';
}

/**
 * Image Fallback Handler
 * Prevents broken image icons and provides elegant fallback
 */
function initImageFallbacks() {
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function () {
      console.warn(`[Fallback] Image failed to load: ${this.src}`);
      // Elegant luxury fallback styling
      this.src = "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22600%22%20viewBox%3D%220%200%20800%20600%22%3E%3Crect%20fill%3D%22%231B1916%22%20width%3D%22800%22%20height%3D%22600%22%2F%3E%3Ctext%20fill%3D%22%23B38A52%22%20font-family%3D%22Georgia%2C%20serif%22%20font-size%3D%2224%22%20letter-spacing%3D%220.1em%22%20text-anchor%3D%22middle%22%20x%3D%22400%22%20y%3D%22290%22%3EMAA%20PADMAWATI%3C%2Ftext%3E%3Ctext%20fill%3D%22%23F4EFE7%22%20font-family%3D%22sans-serif%22%20font-size%3D%2214%22%20letter-spacing%3D%220.2em%22%20text-anchor%3D%22middle%22%20x%3D%22400%22%20y%3D%22330%22%3EPREMIUM%20SURFACE%3C%2Ftext%3E%3C%2Fsvg%3E";
      this.alt = "MAA Padmawati Architectural Material";
    });
  });
}

/**
 * Back To Top Button
 */
function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top-btn');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Dynamic Copyright Year
 */
function updateDynamicYear() {
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}
