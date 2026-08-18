/*
=========================================
  SV DESIGN STUDIO — MAIN INTERACTIONS
=========================================
*/

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Global Counters & Utilities
  initHeaderScroll();
  initMobileMenu();
  initWishlist();
  initToast();
  initQuickView();
  initWhatsAppWidget();
  initNewsletterForm();
  
  // Page-specific Initializations
  const pagePath = window.location.pathname;
  const pageName = pagePath.substring(pagePath.lastIndexOf('/') + 1);

  if (pageName === 'shop.html') {
    initShopCatalog();
  } else if (pageName === 'product.html') {
    initProductDetails();
  } else if (pageName === 'gallery.html') {
    initGalleryLookbook();
  } else if (pageName === 'custom.html') {
    initCustomOrdersForm();
  } else if (pageName === 'collaborate.html') {
    initCollaborationForms();
  } else if (pageName === 'contact.html') {
    initContactForm();
  }
});

/* --- Header Scroll Animation --- */
function initHeaderScroll() {
  const header = document.querySelector('header');
  if (!header) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* --- Mobile Menu Toggle --- */
function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close menu when clicking outside or on a link
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
      toggle.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
}

/* --- Toast Messaging System --- */
let toastContainer;
function initToast() {
  toastContainer = document.createElement('div');
  toastContainer.className = 'toast-container';
  document.body.appendChild(toastContainer);
}

function showToast(message) {
  if (!toastContainer) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerText = message;
  toastContainer.appendChild(toast);

  // Trigger reflow to run animation
  setTimeout(() => toast.classList.add('show'), 50);

  // Remove toast after 3.5s
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

/* --- Wishlist Logic --- */
let wishlist = [];
function initWishlist() {
  // Load from localStorage
  const stored = localStorage.getItem('sv_wishlist');
  if (stored) {
    wishlist = JSON.parse(stored);
  }
  
  updateWishlistBadges();

  // Delegation click handler for wishlist buttons
  document.addEventListener('click', (e) => {
    const wishlistBtn = e.target.closest('.wishlist-btn') || e.target.closest('.product-wishlist .wishlist-btn');
    if (wishlistBtn) {
      e.preventDefault();
      e.stopPropagation();
      const productId = wishlistBtn.dataset.id;
      toggleWishlist(productId, wishlistBtn);
    }
  });
}

function toggleWishlist(productId, btnElement) {
  if (!productId) return;
  const index = wishlist.indexOf(productId);
  let msg = '';
  
  if (index === -1) {
    wishlist.push(productId);
    msg = 'Added to wishlist ❤️';
    if (btnElement) btnElement.classList.add('active');
  } else {
    wishlist.splice(index, 1);
    msg = 'Removed from wishlist';
    if (btnElement) btnElement.classList.remove('active');
  }
  
  localStorage.setItem('sv_wishlist', JSON.stringify(wishlist));
  updateWishlistBadges();
  showToast(msg);
  
  // If we are on wishlist details, update icons matching it
  syncWishlistButtons();
}

function updateWishlistBadges() {
  const badges = document.querySelectorAll('.wishlist-badge-count');
  badges.forEach(b => {
    b.innerText = wishlist.length;
    b.style.display = wishlist.length > 0 ? 'flex' : 'none';
  });
}

function syncWishlistButtons() {
  const buttons = document.querySelectorAll('.wishlist-btn');
  buttons.forEach(btn => {
    const id = btn.dataset.id;
    if (wishlist.includes(id)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

/* --- WhatsApp Message Utilities --- */
function initWhatsAppWidget() {
  const widget = document.querySelector('.whatsapp-floating-widget');
  if (widget) {
    widget.addEventListener('click', () => {
      window.open('https://wa.me/919999999999?text=Hi%20SV%20Design%20Studio!%20I%27d%20love%20to%20learn%20more%20about%20your%20handcrafted%20collections.', '_blank');
    });
  }
}

function triggerWhatsAppInquiry(productId, productName) {
  const text = encodeURIComponent(`Hi SV Design Studio! I am interested in inquiring about the "${productName}" (Product ID: ${productId}). Please share availability and customization options.`);
  window.open(`https://wa.me/919999999999?text=${text}`, '_blank');
}

/* --- Quick View Modal Box --- */
function initQuickView() {
  // Create Modal Overlay Markup dynamically if not present
  let modal = document.querySelector('#quickview-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'quickview-modal';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-container">
        <span class="modal-close"><i class="fas fa-times"></i></span>
        <div class="quickview-grid">
          <div class="quickview-media">
            <img src="" alt="Product Preview" id="qv-img">
          </div>
          <div class="quickview-details">
            <span class="product-cat" id="qv-cat">Category</span>
            <h3 class="quickview-title" id="qv-title">Product Title</h3>
            <div class="quickview-price" id="qv-price">$0.00</div>
            <p class="quickview-desc" id="qv-desc">Loading details...</p>
            <div class="quickview-meta">
              <p><strong>Dimensions:</strong> <span id="qv-dims">-</span></p>
              <p><strong>Materials:</strong> <span id="qv-mats">-</span></p>
            </div>
            <div class="quickview-btns">
              <button class="btn btn-primary" id="qv-inquire-btn">WhatsApp Inquiry</button>
              <button class="btn btn-secondary" id="qv-view-btn">View Details</button>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const closeBtn = modal.querySelector('.modal-close');
  closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  // Delegate click for Quick View trigger buttons
  document.addEventListener('click', (e) => {
    const qvBtn = e.target.closest('.quick-view-btn');
    if (qvBtn) {
      e.preventDefault();
      const pId = qvBtn.dataset.id;
      const product = products.find(p => p.id === pId);
      if (product) {
        openQuickView(product, modal);
      }
    }
  });
}

function openQuickView(product, modalElement) {
  modalElement.querySelector('#qv-img').src = product.image;
  modalElement.querySelector('#qv-cat').innerText = product.category;
  modalElement.querySelector('#qv-title').innerText = product.name;
  modalElement.querySelector('#qv-price').innerHTML = `${product.price} <span class="product-price-inquiry">/ ${product.inquiryPrice}</span>`;
  modalElement.querySelector('#qv-desc').innerText = product.description;
  modalElement.querySelector('#qv-dims').innerText = product.dimensions;
  modalElement.querySelector('#qv-mats').innerText = product.materials;
  
  // Set up actions
  const inquireBtn = modalElement.querySelector('#qv-inquire-btn');
  inquireBtn.onclick = () => triggerWhatsAppInquiry(product.id, product.name);
  
  const viewBtn = modalElement.querySelector('#qv-view-btn');
  viewBtn.onclick = () => {
    window.location.href = `product.html?id=${product.id}`;
  };

  modalElement.classList.add('active');
}

/* --- Newsletter Validation --- */
function initNewsletterForm() {
  const form = document.querySelector('.newsletter-form');
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input');
    if (input && input.value.trim() !== '') {
      showToast('Thank you for joining our exclusive circle! ✨');
      input.value = '';
    } else {
      showToast('Please enter a valid email address.');
    }
  });
}

/* --- Shop / Catalog Filter and Render Logic --- */
let filteredProducts = [];
function initShopCatalog() {
  filteredProducts = [...products];
  renderCatalog();
  syncWishlistButtons();

  // Category Filtering
  const categoryFilters = document.querySelectorAll('.shop-filter-cat');
  categoryFilters.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      categoryFilters.forEach(f => f.classList.remove('active'));
      btn.classList.add('active');
      
      const cat = btn.dataset.cat;
      filterCatalog(cat);
    });
  });

  // Search filter
  const searchInput = document.querySelector('#shop-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase();
      applyAllFilters(query);
    });
  }

  // Price filter slider
  const priceSlider = document.querySelector('#price-range');
  const priceDisplay = document.querySelector('#price-val');
  if (priceSlider && priceDisplay) {
    priceSlider.addEventListener('input', (e) => {
      priceDisplay.innerText = `$${e.target.value}`;
      applyAllFilters();
    });
  }

  // Sorting
  const sortSelect = document.querySelector('#shop-sort');
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      applyAllFilters();
    });
  }
}

function filterCatalog(category) {
  const searchInput = document.querySelector('#shop-search');
  const searchQuery = searchInput ? searchInput.value.toLowerCase() : '';
  applyAllFilters(searchQuery, category);
}

function applyAllFilters(searchQuery = '', forceCat = '') {
  let cat = forceCat;
  if (!cat) {
    const activeCatBtn = document.querySelector('.shop-filter-cat.active');
    cat = activeCatBtn ? activeCatBtn.dataset.cat : 'all';
  }

  if (!searchQuery) {
    const searchInput = document.querySelector('#shop-search');
    searchQuery = searchInput ? searchInput.value.toLowerCase() : '';
  }

  const priceSlider = document.querySelector('#price-range');
  const maxPrice = priceSlider ? parseInt(priceSlider.value) : 500;

  // Filter processes
  filteredProducts = products.filter(p => {
    const matchCat = (cat === 'all' || p.category === cat);
    const matchSearch = p.name.toLowerCase().includes(searchQuery) || p.description.toLowerCase().includes(searchQuery);
    
    // Parse numeric price from "$120"
    const numPrice = parseInt(p.price.replace('$', ''));
    const matchPrice = numPrice <= maxPrice;
    
    return matchCat && matchSearch && matchPrice;
  });

  // Sorting process
  const sortSelect = document.querySelector('#shop-sort');
  if (sortSelect) {
    const val = sortSelect.value;
    if (val === 'price-low') {
      filteredProducts.sort((a,b) => parseInt(a.price.replace('$','')) - parseInt(b.price.replace('$','')));
    } else if (val === 'price-high') {
      filteredProducts.sort((a,b) => parseInt(b.price.replace('$','')) - parseInt(a.price.replace('$','')));
    } else {
      // Default / Popularity (Default orders)
      filteredProducts.sort((a,b) => (a.isBestseller === b.isBestseller) ? 0 : a.isBestseller ? -1 : 1);
    }
  }

  renderCatalog();
  syncWishlistButtons();
}

function renderCatalog() {
  const container = document.querySelector('.catalog-grid-container');
  if (!container) return;

  if (filteredProducts.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12">
        <i class="fas fa-search-minus text-4xl text-gray-300 mb-4" style="font-size: 2.5rem; color: var(--brand-brown); opacity: 0.5;"></i>
        <h4 style="font-family: var(--font-serif-cormorant); font-size: 1.8rem; margin-bottom: 10px;">No Products Found</h4>
        <p>Try adjusting your search criteria, selecting a different category, or resetting filters.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredProducts.map(p => {
    const isNewTag = p.isNew ? `<span class="badge badge-new">New</span>` : '';
    const isBestTag = p.isBestseller ? `<span class="badge badge-bestseller">Best Seller</span>` : '';
    
    return `
      <div class="product-card" data-aos="fade-up">
        <div class="product-media">
          <img src="${p.image}" alt="${p.name}">
          <div class="product-badges">
            ${isNewTag}
            ${isBestTag}
          </div>
          <div class="product-wishlist">
            <button class="wishlist-btn" data-id="${p.id}"><i class="far fa-heart"></i></button>
          </div>
          <div class="product-actions">
            <button class="quick-view-btn" data-id="${p.id}">Quick View</button>
            <button class="inquiry-btn-sm" onclick="triggerWhatsAppInquiry('${p.id}', '${p.name}')">Inquire</button>
          </div>
        </div>
        <div class="product-info">
          <span class="product-cat">${p.category}</span>
          <h4 class="product-name"><a href="product.html?id=${p.id}">${p.name}</a></h4>
          <div class="product-price-row">
            <span class="product-price">${p.price}</span>
            <span class="product-price-inquiry">/ ${p.inquiryPrice}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/* --- Product Details Dynamic Loader --- */
function initProductDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const pId = urlParams.get('id') || 'bag_1'; // fallback to first item
  
  const product = products.find(p => p.id === pId);
  if (!product) {
    // Redirect to Shop or show error
    showToast('Product not found! Loading default item.');
    return;
  }

  // 1. Populate details
  document.title = `${product.name} — SV Design Studio`;
  
  const breadcrumb = document.querySelector('.product-breadcrumb-active');
  if (breadcrumb) breadcrumb.innerText = product.name;

  const titleEl = document.querySelector('#p-title');
  if (titleEl) titleEl.innerText = product.name;

  const catEl = document.querySelector('#p-cat');
  if (catEl) catEl.innerText = product.category;

  const priceEl = document.querySelector('#p-price');
  if (priceEl) priceEl.innerHTML = `${product.price} <span class="product-price-inquiry">/ ${product.inquiryPrice}</span>`;

  const descEl = document.querySelector('#p-desc');
  if (descEl) descEl.innerText = product.description;

  const dimsEl = document.querySelector('#p-dims');
  if (dimsEl) dimsEl.innerText = product.dimensions;

  const matsEl = document.querySelector('#p-mats');
  if (matsEl) matsEl.innerText = product.materials;

  const careEl = document.querySelector('#p-care');
  if (careEl) careEl.innerText = product.care;

  // Set up Wishlist button for this details page
  const detailWishlistBtn = document.querySelector('.product-detail-wishlist');
  if (detailWishlistBtn) {
    detailWishlistBtn.dataset.id = product.id;
    if (wishlist.includes(product.id)) {
      detailWishlistBtn.classList.add('active');
    }
  }

  // 2. Set up Image gallery
  const mainImageEl = document.querySelector('#p-main-img');
  if (mainImageEl) {
    mainImageEl.src = product.image;
    mainImageEl.alt = product.name;
    
    // Zoom Hover Magnifier effect
    const zoomContainer = document.querySelector('.product-zoom-container');
    if (zoomContainer) {
      zoomContainer.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = zoomContainer.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        mainImageEl.style.transformOrigin = `${x}% ${y}%`;
        mainImageEl.style.transform = 'scale(1.8)';
      });

      zoomContainer.addEventListener('mouseleave', () => {
        mainImageEl.style.transform = 'scale(1)';
      });
    }
  }

  // Thumbnails rendering
  const thumbsContainer = document.querySelector('.product-thumbnails');
  if (thumbsContainer && product.thumbnails) {
    thumbsContainer.innerHTML = product.thumbnails.map((thumb, idx) => `
      <div class="thumb-item ${idx === 0 ? 'active' : ''}" onclick="selectProductThumbnail(this, '${thumb}')">
        <img src="${thumb}" alt="Thumbnail ${idx + 1}">
      </div>
    `).join('');
  }

  // 3. CTA Actions
  const waInquiryBtn = document.querySelector('#detail-wa-btn');
  if (waInquiryBtn) {
    waInquiryBtn.onclick = () => triggerWhatsAppInquiry(product.id, product.name);
  }

  const customRequestForm = document.querySelector('#product-inquiry-form');
  if (customRequestForm) {
    customRequestForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Customization inquiry submitted successfully! We will email you details soon. ✨');
      customRequestForm.reset();
    });
  }

  // 4. Render related products
  renderRelatedProducts(product);
  syncWishlistButtons();
}

// Global thumbnail selector click utility
window.selectProductThumbnail = function(element, imageSrc) {
  const mainImageEl = document.querySelector('#p-main-img');
  if (mainImageEl) mainImageEl.src = imageSrc;

  // Toggle active class
  const items = document.querySelectorAll('.thumb-item');
  items.forEach(item => item.classList.remove('active'));
  element.classList.add('active');
};

function renderRelatedProducts(currentProduct) {
  const container = document.querySelector('.related-products-grid');
  if (!container) return;

  const related = products
    .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
    .slice(0, 4);

  // If not enough related in same category, grab other bestsellers
  if (related.length < 4) {
    const extra = products
      .filter(p => p.id !== currentProduct.id && !related.includes(p))
      .slice(0, 4 - related.length);
    related.push(...extra);
  }

  container.innerHTML = related.map(p => `
    <div class="product-card">
      <div class="product-media">
        <img src="${p.image}" alt="${p.name}">
        <div class="product-wishlist">
          <button class="wishlist-btn" data-id="${p.id}"><i class="far fa-heart"></i></button>
        </div>
        <div class="product-actions">
          <button class="quick-view-btn" data-id="${p.id}">Quick View</button>
          <button class="inquiry-btn-sm" onclick="triggerWhatsAppInquiry('${p.id}', '${p.name}')">Inquire</button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-cat">${p.category}</span>
        <h4 class="product-name"><a href="product.html?id=${p.id}">${p.name}</a></h4>
        <div class="product-price-row">
          <span class="product-price">${p.price}</span>
        </div>
      </div>
    </div>
  `).join('');
}

/* --- Masonry Gallery / Lookbook Lightbox --- */
function initGalleryLookbook() {
  // Lightbox overlay create
  let lightbox = document.querySelector('#lightbox-modal');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'lightbox-modal';
    lightbox.className = 'modal-overlay';
    lightbox.innerHTML = `
      <div class="modal-container lightbox-container">
        <span class="modal-close" style="color: white;"><i class="fas fa-times"></i></span>
        <div class="lightbox-img-wrapper">
          <img src="" alt="Lightbox Preview" id="lightbox-img">
        </div>
        <p class="lightbox-caption" id="lightbox-caption">Captions</p>
      </div>
    `;
    document.body.appendChild(lightbox);
  }

  const closeBtn = lightbox.querySelector('.modal-close');
  closeBtn.addEventListener('click', () => lightbox.classList.remove('active'));
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.classList.remove('active');
  });

  // Filter Lookbook Masonry items
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-grid-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      filterBtns.forEach(f => f.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.dataset.filter;
      galleryItems.forEach(item => {
        if (filterVal === 'all' || item.dataset.cat === filterVal) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Clicks on images inside gallery to launch lightbox
  galleryItems.forEach(item => {
    const img = item.querySelector('img');
    const title = item.querySelector('.gallery-overlay-title') || {innerText: 'Handcrafted Art'};
    
    item.addEventListener('click', () => {
      lightbox.querySelector('#lightbox-img').src = img.src;
      lightbox.querySelector('#lightbox-caption').innerText = title.innerText;
      lightbox.classList.add('active');
    });
  });
}

/* --- Custom Orders Form Submit --- */
function initCustomOrdersForm() {
  const form = document.querySelector('#custom-order-form');
  const budgetRange = document.querySelector('#custom-budget');
  const budgetVal = document.querySelector('#budget-val');
  
  if (budgetRange && budgetVal) {
    budgetRange.addEventListener('input', (e) => {
      budgetVal.innerText = `₹${parseInt(e.target.value).toLocaleString()}`;
    });
  }

  // Drag and drop zone styles
  const dropzone = document.querySelector('.file-upload-zone');
  const fileInput = document.querySelector('#reference-img');
  
  if (dropzone && fileInput) {
    dropzone.addEventListener('click', () => fileInput.click());
    
    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.style.borderColor = 'var(--brand-brown)';
      dropzone.style.backgroundColor = 'rgba(231, 216, 201, 0.3)';
    });

    dropzone.addEventListener('dragleave', () => {
      dropzone.style.borderColor = 'rgba(139, 107, 82, 0.3)';
      dropzone.style.backgroundColor = 'transparent';
    });

    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.style.borderColor = 'rgba(139, 107, 82, 0.3)';
      dropzone.style.backgroundColor = 'transparent';
      
      if (e.dataTransfer.files.length > 0) {
        fileInput.files = e.dataTransfer.files;
        updateDropzoneLabel(dropzone, e.dataTransfer.files[0].name);
      }
    });

    fileInput.addEventListener('change', () => {
      if (fileInput.files.length > 0) {
        updateDropzoneLabel(dropzone, fileInput.files[0].name);
      }
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Your custom design order request has been received! 🎨');
      form.reset();
      if (budgetVal && budgetRange) {
        budgetVal.innerText = '₹5,000';
      }
      if (dropzone) {
        dropzone.innerHTML = `<i class="fas fa-cloud-upload-alt file-upload-icon"></i><p>Drag & drop reference image here, or <span>browse</span></p>`;
      }
    });
  }
}

function updateDropzoneLabel(dropzone, filename) {
  dropzone.innerHTML = `
    <i class="fas fa-check-circle file-upload-icon" style="color: var(--accent-emerald);"></i>
    <p>File selected: <strong style="color: var(--charcoal);">${filename}</strong></p>
  `;
}

/* --- Collaborations Forms Submit --- */
function initCollaborationForms() {
  const influencerForm = document.querySelector('#influencer-collab-form');
  if (influencerForm) {
    influencerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Application sent! We will review your profile shortly. 🌟');
      influencerForm.reset();
    });
  }

  const designerForm = document.querySelector('#designer-wholesale-form');
  if (designerForm) {
    designerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Trade account application submitted! Representative will contact you. 💼');
      designerForm.reset();
    });
  }
}

/* --- Contact Form Submit --- */
function initContactForm() {
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Message sent! Our customer experience team will reply within 24 hours. ✉️');
      form.reset();
    });
  }
}
