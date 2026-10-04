/**
 * MAA PADMAWATI PLY & DECOR - PRODUCTS MODULE
 * Handles rendering the product catalog, real-time live search,
 * category pill filtering, and the Quick View modal.
 */

let currentCategoryFilter = 'all';
let currentSearchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
  renderCategoriesGrid();
  renderProductsGrid();
  initProductSearch();
  initCategoryPills();
  initHeroFloatingCard();
});

/**
 * Renders the Asymmetric Category Grid
 */
function renderCategoriesGrid() {
  const container = document.getElementById('category-grid-container');
  if (!container || typeof CATEGORIES_DATA === 'undefined') return;

  container.innerHTML = CATEGORIES_DATA.map(cat => `
    <div class="category-card reveal-on-scroll" data-category="${cat.id}" onclick="filterProductsByCategory('${cat.id}')">
      <div class="category-bg">
        <img src="${cat.image}" alt="${cat.name} - MAA Padmawati" loading="lazy">
      </div>
      <div class="category-gradient"></div>
      <div class="category-top-info">
        <span class="category-number">${cat.number}</span>
        <span class="category-count">${cat.count}</span>
      </div>
      <div class="category-bottom-content">
        <div class="category-subtitle">${cat.subtitle}</div>
        <h3 class="category-name">${cat.name}</h3>
        <p class="category-desc">${cat.description}</p>
        <span class="category-action">
          Explore Collection 
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </span>
      </div>
    </div>
  `).join('');
}

/**
 * Renders the Material Edit Product Grid based on active filters
 */
function renderProductsGrid() {
  const grid = document.getElementById('products-grid');
  if (!grid || typeof PRODUCTS_DATA === 'undefined') return;

  const filtered = PRODUCTS_DATA.filter(item => {
    const matchesCategory = currentCategoryFilter === 'all' || item.category === currentCategoryFilter;
    const matchesSearch = currentSearchQuery === '' || 
      item.name.toLowerCase().includes(currentSearchQuery) ||
      item.shortDesc.toLowerCase().includes(currentSearchQuery) ||
      item.categoryLabel.toLowerCase().includes(currentSearchQuery);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="products-empty-state">
        <h4>No materials found</h4>
        <p>No products matching "${currentSearchQuery}". Try another keyword or reset the filter.</p>
        <button class="btn btn-outline" style="margin-top: 1.5rem;" onclick="resetProductFilters()">View All Materials</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => `
    <div class="product-card reveal-on-scroll">
      <div class="product-img-wrap">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <button class="product-quick-btn" onclick="openProductQuickView(${item.id})">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          Quick View
        </button>
      </div>
      <div class="product-body">
        <span class="product-category-tag">${item.categoryLabel}</span>
        <h4 class="product-name">${item.name}</h4>
        <p class="product-desc">${item.shortDesc}</p>
        <div class="product-footer">
          <button class="view-details-btn" onclick="openProductQuickView(${item.id})">
            View Details
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          <button class="product-enquire-icon-btn" title="Enquire via WhatsApp" onclick="enquireProductViaWhatsApp(${item.id})">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * Live Search Filter
 */
function initProductSearch() {
  const searchInput = document.getElementById('product-search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    currentSearchQuery = e.target.value.trim().toLowerCase();
    renderProductsGrid();
  });
}

/**
 * Category Pill Filter
 */
function initCategoryPills() {
  const pills = document.querySelectorAll('.category-pills-bar .pill-btn');
  pills.forEach(pill => {
    pill.addEventListener('click', function () {
      pills.forEach(p => p.classList.remove('active'));
      this.classList.add('active');
      currentCategoryFilter = this.getAttribute('data-filter');
      renderProductsGrid();
    });
  });
}

function filterProductsByCategory(categoryId) {
  currentCategoryFilter = categoryId;
  const pills = document.querySelectorAll('.category-pills-bar .pill-btn');
  pills.forEach(pill => {
    if (pill.getAttribute('data-filter') === categoryId) {
      pill.classList.add('active');
    } else {
      pill.classList.remove('active');
    }
  });

  // Scroll smoothly to products section
  const section = document.getElementById('collection');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }

  renderProductsGrid();
}

function resetProductFilters() {
  currentCategoryFilter = 'all';
  currentSearchQuery = '';
  const searchInput = document.getElementById('product-search-input');
  if (searchInput) searchInput.value = '';

  const pills = document.querySelectorAll('.category-pills-bar .pill-btn');
  pills.forEach((p, idx) => {
    if (idx === 0) p.classList.add('active');
    else p.classList.remove('active');
  });

  renderProductsGrid();
}

/**
 * Open Product Quick View Modal
 */
function openProductQuickView(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const modalImg = document.getElementById('modal-product-img');
  const modalCat = document.getElementById('modal-product-category');
  const modalTitle = document.getElementById('modal-product-title');
  const modalDesc = document.getElementById('modal-product-desc');
  const modalFinish = document.getElementById('modal-product-finish');
  const modalDims = document.getElementById('modal-product-dims');
  const modalThick = document.getElementById('modal-product-thickness');
  const modalApps = document.getElementById('modal-product-apps');
  const modalEnquireBtn = document.getElementById('modal-enquire-btn');

  if (modalImg) modalImg.src = product.image;
  if (modalCat) modalCat.textContent = product.categoryLabel;
  if (modalTitle) modalTitle.textContent = product.name;
  if (modalDesc) modalDesc.textContent = product.description;
  if (modalFinish) modalFinish.textContent = product.finish;
  if (modalDims) modalDims.textContent = product.dimensions;
  if (modalThick) modalThick.textContent = product.thickness;

  if (modalApps) {
    modalApps.innerHTML = product.applications.map(app => `
      <span class="quickview-chip">${app}</span>
    `).join('');
  }

  if (modalEnquireBtn) {
    modalEnquireBtn.onclick = () => {
      closeAllModals();
      enquireProductViaWhatsApp(product.id);
    };
  }

  openModal('quickview-modal');
}

/**
 * Floating Hero Card Click
 */
function initHeroFloatingCard() {
  const card = document.querySelector('.hero-floating-card');
  if (!card) return;

  card.addEventListener('click', () => {
    // Open product 1 (Natural Veneer)
    openProductQuickView(1);
  });
}
