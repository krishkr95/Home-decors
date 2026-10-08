/**
 * UVS Interior Solutions - Main JavaScript
 * Ultra-Modern Interactive Features:
 * - Before & After Transformation Slider
 * - Instant Room Cost Estimator Calculator
 * - Material & Palette Moodboard Switcher
 * - Mockup 6-Card Service Highlights
 * - Form Validation & WhatsApp Lead Forwarding
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initBeforeAfterSlider();
  initCostEstimator();
  initMoodboardSwitcher();
  initCoreServicesInteractions();
  initPortfolio();
  initLightbox();
  initTestimonials();
  initFAQ();
  initLeadForm();
  initScrollTop();
  initScrollReveal();
});

/* ----------------------------------------------------
   1. NAVBAR & MOBILE DRAWER
   ---------------------------------------------------- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburgerBtn');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const drawerLinks = drawer ? drawer.querySelectorAll('a') : [];

  const handleScroll = () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  const toggleDrawer = (open) => {
    const shouldOpen = open !== undefined ? open : !drawer.classList.contains('open');
    drawer.classList.toggle('open', shouldOpen);
    overlay.classList.toggle('open', shouldOpen);
    hamburger.classList.toggle('open', shouldOpen);
    document.body.style.overflow = shouldOpen ? 'hidden' : '';
  };

  if (hamburger) hamburger.addEventListener('click', () => toggleDrawer());
  if (overlay) overlay.addEventListener('click', () => toggleDrawer(false));
  drawerLinks.forEach(link => link.addEventListener('click', () => toggleDrawer(false)));
}

/* ----------------------------------------------------
   2. INTERACTIVE BEFORE & AFTER SLIDER
   ---------------------------------------------------- */
function initBeforeAfterSlider() {
  const container = document.getElementById('baContainer');
  const afterWrap = document.getElementById('baAfterWrap');
  const handle = document.getElementById('baHandle');

  if (!container || !afterWrap || !handle) return;

  let isDragging = false;

  function updateSlider(xPos) {
    const rect = container.getBoundingClientRect();
    let offsetX = xPos - rect.left;
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;

    const percentage = (offsetX / rect.width) * 100;
    afterWrap.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;
  }

  // Mouse Events
  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateSlider(e.clientX);
  });

  window.addEventListener('mouseup', () => { isDragging = false; });
  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  });

  // Touch Events
  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    updateSlider(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => { isDragging = false; });
  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    updateSlider(e.touches[0].clientX);
  }, { passive: true });
}

/* ----------------------------------------------------
   3. INSTANT ROOM COST ESTIMATOR CALCULATOR
   ---------------------------------------------------- */
function initCostEstimator() {
  const spacePills = document.querySelectorAll('.est-pill[data-space]');
  const scopePills = document.querySelectorAll('.est-pill[data-scope]');
  const tierPills = document.querySelectorAll('.est-pill[data-tier]');
  const amountEl = document.getElementById('estAmount');
  const durationEl = document.getElementById('estDuration');
  const consultWaBtn = document.getElementById('estWaBtn');

  if (!amountEl) return;

  let currentSpace = '2bhk';
  let currentScope = 'turnkey';
  let currentTier = 'premium';

  // Base pricing tables (Lakhs INR estimated for Auraiya/Etawah)
  const baseRates = {
    '1bhk': { turnkey: [2.2, 3.4], kitchen: [0.9, 1.4], ceiling: [0.5, 0.9], living: [0.8, 1.3] },
    '2bhk': { turnkey: [3.5, 5.2], kitchen: [1.2, 1.8], ceiling: [0.8, 1.4], living: [1.2, 1.9] },
    '3bhk': { turnkey: [4.8, 7.5], kitchen: [1.4, 2.2], ceiling: [1.1, 1.8], living: [1.5, 2.4] },
    '4bhk': { turnkey: [6.8, 10.5], kitchen: [1.8, 2.8], ceiling: [1.5, 2.5], living: [2.0, 3.2] },
    'office': { turnkey: [3.0, 5.5], kitchen: [0.8, 1.2], ceiling: [0.9, 1.6], living: [1.5, 2.8] }
  };

  const tierMultipliers = {
    'budget': 0.82,
    'premium': 1.0,
    'luxury': 1.38
  };

  const durationMap = {
    'turnkey': '35 - 50 Days Execution',
    'kitchen': '15 - 22 Days Execution',
    'ceiling': '10 - 15 Days Execution',
    'living': '18 - 25 Days Execution'
  };

  function recalculate() {
    const base = baseRates[currentSpace][currentScope] || [3.0, 4.5];
    const mult = tierMultipliers[currentTier] || 1.0;
    const minCost = (base[0] * mult).toFixed(1);
    const maxCost = (base[1] * mult).toFixed(1);

    amountEl.textContent = `₹${minCost}L - ₹${maxCost}L`;
    if (durationEl) durationEl.textContent = durationMap[currentScope] || '30 - 45 Days Handover';

    if (consultWaBtn) {
      const text = encodeURIComponent(
        `Hi UVS Interior Solutions! I estimated my project cost on your website:\n` +
        `• Space: ${currentSpace.toUpperCase()}\n` +
        `• Scope: ${currentScope}\n` +
        `• Finish Tier: ${currentTier}\n` +
        `• Estimated Quote: ₹${minCost}L - ₹${maxCost}L\n` +
        `Can we schedule an on-site consultation?`
      );
      consultWaBtn.href = `https://wa.me/919452000000?text=${text}`;
    }
  }

  function bindPillGroup(pills, callback) {
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        callback(pill);
        recalculate();
      });
    });
  }

  bindPillGroup(spacePills, (p) => { currentSpace = p.getAttribute('data-space'); });
  bindPillGroup(scopePills, (p) => { currentScope = p.getAttribute('data-scope'); });
  bindPillGroup(tierPills, (p) => { currentTier = p.getAttribute('data-tier'); });

  recalculate();
}

/* ----------------------------------------------------
   4. MOODBOARD & MATERIAL PALETTE SWITCHER
   ---------------------------------------------------- */
function initMoodboardSwitcher() {
  const tabs = document.querySelectorAll('.moodboard-tab');
  const imgEl = document.getElementById('moodboardImage');

  if (!imgEl || tabs.length === 0) return;

  const moodboardImages = {
    'warm': 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
    'charcoal': 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
    'scandi': 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80'
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const theme = tab.getAttribute('data-theme');
      if (moodboardImages[theme]) {
        imgEl.style.opacity = '0.3';
        imgEl.style.transform = 'scale(0.98)';
        setTimeout(() => {
          imgEl.src = moodboardImages[theme];
          imgEl.style.opacity = '1';
          imgEl.style.transform = 'scale(1)';
        }, 250);
      }
    });
  });
}

/* ----------------------------------------------------
   5. CORE SERVICES PALETTE INTERACTIONS
   ---------------------------------------------------- */
function initCoreServicesInteractions() {
  const cards = document.querySelectorAll('.palette-card');
  const serviceSelect = document.getElementById('serviceField');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const serviceName = card.getAttribute('data-service-name');
      if (serviceSelect && serviceName) {
        for (let i = 0; i < serviceSelect.options.length; i++) {
          if (serviceSelect.options[i].text.toLowerCase().includes(serviceName.toLowerCase())) {
            serviceSelect.selectedIndex = i;
            break;
          }
        }
      }

      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        const nameInput = document.getElementById('fullName');
        if (nameInput) setTimeout(() => nameInput.focus(), 500);
      }
    });
  });
}

/* ----------------------------------------------------
   6. PORTFOLIO FILTERING
   ---------------------------------------------------- */
function initPortfolio() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');

      items.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (cat === 'all' || itemCat === cat) {
          item.style.display = 'block';
          setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'scale(1)'; }, 20);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.92)';
          setTimeout(() => { item.style.display = 'none'; }, 200);
        }
      });
    });
  });
}

/* ----------------------------------------------------
   7. LIGHTBOX MODAL
   ---------------------------------------------------- */
function initLightbox() {
  const lightbox = document.getElementById('portfolioLightbox');
  const lightboxImg = document.getElementById('lightboxImage');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxClose = document.getElementById('lightboxClose');
  const items = document.querySelectorAll('.portfolio-item');

  if (!lightbox) return;

  items.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('h4')?.textContent || 'UVS Project';
      if (img) {
        lightboxImg.src = img.src;
        if (lightboxTitle) lightboxTitle.textContent = title;
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const close = () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (lightboxClose) lightboxClose.addEventListener('click', close);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}

/* ----------------------------------------------------
   8. TESTIMONIALS CAROUSEL
   ---------------------------------------------------- */
function initTestimonials() {
  const track = document.getElementById('testimonialTrack');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  const dotsContainer = document.getElementById('carouselDots');

  if (!track) return;

  const cards = track.querySelectorAll('.testimonial-card');
  let currentIndex = 0;

  function getCardsPerView() {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }

  function update() {
    const perView = getCardsPerView();
    const maxIndex = Math.max(0, cards.length - perView);
    currentIndex = Math.min(currentIndex, maxIndex);
    const offset = currentIndex * (100 / perView);
    track.style.transform = `translateX(-${offset}%)`;

    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      for (let i = 0; i <= maxIndex; i++) {
        const dot = document.createElement('div');
        dot.className = `carousel-dot ${i === currentIndex ? 'active' : ''}`;
        dot.addEventListener('click', () => { currentIndex = i; update(); });
        dotsContainer.appendChild(dot);
      }
    }
  }

  if (prevBtn) prevBtn.addEventListener('click', () => { currentIndex = Math.max(0, currentIndex - 1); update(); });
  if (nextBtn) nextBtn.addEventListener('click', () => {
    const maxIndex = Math.max(0, cards.length - getCardsPerView());
    currentIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
    update();
  });

  window.addEventListener('resize', update);
  update();
}

/* ----------------------------------------------------
   9. FAQ ACCORDION
   ---------------------------------------------------- */
function initFAQ() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const btn = item.querySelector('.faq-question');
    if (btn) {
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        items.forEach(i => i.classList.remove('open'));
        item.classList.toggle('open', !isOpen);
      });
    }
  });
}

/* ----------------------------------------------------
   10. LEAD CAPTURE FORM WITH VALIDATION & WHATSAPP
   ---------------------------------------------------- */
function initLeadForm() {
  const form = document.getElementById('leadCaptureForm');
  const successCard = document.getElementById('leadSuccessMsg');
  const nameField = document.getElementById('fullName');
  const phoneField = document.getElementById('phoneNumber');
  const locField = document.getElementById('projectLocation');
  const servField = document.getElementById('serviceField');
  const budField = document.getElementById('budgetRange');

  if (!form) return;

  function validateInput(input, condition, errorText) {
    const group = input.closest('.form-group');
    const errorEl = group ? group.querySelector('.form-error-msg') : null;
    if (!condition) {
      input.classList.add('error');
      if (group) group.classList.add('has-error');
      if (errorEl) errorEl.textContent = errorText;
      return false;
    } else {
      input.classList.remove('error');
      if (group) group.classList.remove('has-error');
      return true;
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameVal = nameField?.value.trim() || '';
    const phoneVal = phoneField?.value.trim().replace(/\D/g, '') || '';
    const locVal = locField?.value || 'Auraiya/Etawah';
    const servVal = servField?.value || 'Interior Work';
    const budVal = budField?.value || 'Standard';

    const validName = validateInput(nameField, nameVal.length >= 2, 'Please enter your name');
    const validPhone = validateInput(phoneField, phoneVal.length === 10, 'Valid 10-digit mobile number required');
    const validLoc = validateInput(locField, locVal !== '', 'Please select your location');
    const validServ = validateInput(servField, servVal !== '', 'Please select a service');

    if (!validName || !validPhone || !validLoc || !validServ) return;

    const waText = encodeURIComponent(
      `Hello UVS Interior Solutions!\n\nI want to book a free consultation for my space:\n` +
      `• Name: ${nameVal}\n` +
      `• Phone: ${phoneVal}\n` +
      `• Location: ${locVal}\n` +
      `• Service: ${servVal}\n` +
      `• Budget: ${budVal}\n\nPlease contact me with design layouts and estimated pricing.`
    );
    const waUrl = `https://wa.me/919452000000?text=${waText}`;

    form.style.display = 'none';
    if (successCard) {
      successCard.classList.add('show');
      const waLink = successCard.querySelector('.success-wa-link');
      if (waLink) waLink.href = waUrl;
    }
  });
}

/* ----------------------------------------------------
   11. SCROLL TO TOP & SCROLL REVEALS
   ---------------------------------------------------- */
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -50px 0px', threshold: 0.1 });
    reveals.forEach(el => observer.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('revealed'));
  }
}
