/*
=========================================
  SV DESIGN STUDIO — ANIMATIONS SYSTEM
=========================================
*/

document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
  initTestimonialSlider();
  initScrollReveal();
});

/* --- Hero Slide Fade Engine --- */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-slider-container .slider-dot');
  const prevBtn = document.querySelector('#hero-prev');
  const nextBtn = document.querySelector('#hero-next');
  
  if (slides.length === 0) return;

  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide, 7000);

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Handle loop boundary wrap
    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }

    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) {
      dots[currentSlide].classList.add('active');
    }
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  // Arrows clicks
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetInterval();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetInterval();
    });
  }

  // Dots clicks
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
      resetInterval();
    });
  });

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 7000);
  }
}

/* --- Testimonial Slide Fade Engine --- */
function initTestimonialSlider() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const indicators = document.querySelectorAll('.testimonial-indicator');
  
  if (slides.length === 0) return;

  let currentIndex = 0;
  let autoTimer = setInterval(nextTestimonial, 6000);

  function showTestimonial(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));

    if (index >= slides.length) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = slides.length - 1;
    } else {
      currentIndex = index;
    }

    slides[currentIndex].classList.add('active');
    if (indicators[currentIndex]) {
      indicators[currentIndex].classList.add('active');
    }
  }

  function nextTestimonial() {
    showTestimonial(currentIndex + 1);
  }

  // Indicators clicks
  indicators.forEach((ind, index) => {
    ind.addEventListener('click', () => {
      showTestimonial(index);
      clearInterval(autoTimer);
      autoTimer = setInterval(nextTestimonial, 6000);
    });
  });
}

/* --- Lightweight Intersection Observer Scroll Reveal --- */
function initScrollReveal() {
  // Elements with [data-aos] will be revealed cleanly
  const revealElements = document.querySelectorAll('[data-aos]');
  if (revealElements.length === 0) return;

  // Add initial state styles inline/classes
  revealElements.forEach(el => {
    const type = el.dataset.aos || 'fade-up';
    el.style.opacity = '0';
    el.style.transition = 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1)';
    
    if (type === 'fade-up') {
      el.style.transform = 'translateY(40px)';
    } else if (type === 'fade-down') {
      el.style.transform = 'translateY(-40px)';
    } else if (type === 'fade-left') {
      el.style.transform = 'translateX(40px)';
    } else if (type === 'fade-right') {
      el.style.transform = 'translateX(-40px)';
    } else if (type === 'zoom-in') {
      el.style.transform = 'scale(0.92)';
    }
  });

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.style.opacity = '1';
        el.style.transform = 'translateY(0) translateX(0) scale(1)';
        // stop observing once animate triggers
        observer.unobserve(el);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
}
