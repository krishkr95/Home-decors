/**
 * MAA PADMAWATI PLY & DECOR - GALLERY & LIGHTBOX MODULE
 * Responsive masonry gallery with category filters and keyboard/touch-friendly Lightbox.
 */

let activeGalleryCategory = 'all';
let currentLightboxIndex = 0;
let filteredGalleryItems = [];

document.addEventListener('DOMContentLoaded', () => {
  initGallery();
  initLightboxEvents();
});

/**
 * Initializes Gallery Rendering and Filter Controls
 */
function initGallery() {
  const container = document.getElementById('gallery-grid');
  if (!container || typeof GALLERY_DATA === 'undefined') return;

  filterGallery('all');

  const filterButtons = document.querySelectorAll('.gallery-filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      filterButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const cat = this.getAttribute('data-gallery-filter');
      filterGallery(cat);
    });
  });
}

function filterGallery(category) {
  activeGalleryCategory = category;
  const container = document.getElementById('gallery-grid');
  if (!container || typeof GALLERY_DATA === 'undefined') return;

  filteredGalleryItems = GALLERY_DATA.filter(item => {
    return category === 'all' || item.category === category;
  });

  container.innerHTML = filteredGalleryItems.map((item, index) => `
    <div class="gallery-item reveal-on-scroll" onclick="openLightbox(${index})">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <div class="gallery-hover-overlay">
        <span class="gallery-item-category">${item.categoryLabel}</span>
        <h4 class="gallery-item-title">${item.title}</h4>
        <div class="gallery-item-materials">${item.materials}</div>
        <span class="gallery-zoom-action">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 3 21 3 21 9"></polyline>
            <polyline points="9 21 3 21 3 15"></polyline>
            <line x1="21" y1="3" x2="14" y2="10"></line>
            <line x1="3" y1="21" x2="10" y2="14"></line>
          </svg>
          Expand View
        </span>
      </div>
    </div>
  `).join('');
}

/**
 * Opens Lightbox at specified index of filtered gallery items
 */
function openLightbox(index) {
  if (!filteredGalleryItems || filteredGalleryItems.length === 0) return;

  currentLightboxIndex = index;
  updateLightboxContent();

  const lightbox = document.getElementById('gallery-lightbox');
  if (lightbox) {
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('gallery-lightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function prevLightbox() {
  if (filteredGalleryItems.length <= 1) return;
  currentLightboxIndex = (currentLightboxIndex - 1 + filteredGalleryItems.length) % filteredGalleryItems.length;
  updateLightboxContent();
}

function nextLightbox() {
  if (filteredGalleryItems.length <= 1) return;
  currentLightboxIndex = (currentLightboxIndex + 1) % filteredGalleryItems.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const item = filteredGalleryItems[currentLightboxIndex];
  if (!item) return;

  const img = document.getElementById('lightbox-img');
  const title = document.getElementById('lightbox-title');
  const sub = document.getElementById('lightbox-sub');
  const counter = document.getElementById('lightbox-counter');

  if (img) img.src = item.image;
  if (title) title.textContent = item.title;
  if (sub) sub.textContent = `${item.categoryLabel} • ${item.materials}`;
  if (counter) counter.textContent = `${currentLightboxIndex + 1} / ${filteredGalleryItems.length}`;
}

/**
 * Keyboard Navigation & Mobile Swipe for Lightbox
 */
function initLightboxEvents() {
  const lightbox = document.getElementById('gallery-lightbox');
  if (!lightbox) return;

  const closeBtn = document.querySelector('.lightbox-close-btn');
  const prevBtn = document.querySelector('.lightbox-prev-btn');
  const nextBtn = document.querySelector('.lightbox-next-btn');

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', prevLightbox);
  if (nextBtn) nextBtn.addEventListener('click', nextLightbox);

  // Close when clicking outside image content
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevLightbox();
    if (e.key === 'ArrowRight') nextLightbox();
  });

  // Touch Swipe gestures for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      nextLightbox(); // Swiped left -> next
    }
    if (touchEndX > touchStartX + swipeThreshold) {
      prevLightbox(); // Swiped right -> prev
    }
  }
}
