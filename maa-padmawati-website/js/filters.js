/**
 * MAA PADMAWATI PLY & DECOR - FILTERS & INTERACTIVE SHOWCASE MODULE
 * Controls the Interactive Material Explorer and Interior Inspiration tabs.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMaterialExplorer();
  initInspirationTabs();
});

/**
 * Interactive Material Explorer ("TOUCH. FEEL. IMAGINE.")
 */
function initMaterialExplorer() {
  const tabButtons = document.querySelectorAll('.explorer-tab-btn');
  if (!tabButtons.length || typeof MATERIAL_EXPLORER_DATA === 'undefined') return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      tabButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const key = this.getAttribute('data-material-key');
      updateMaterialExplorer(key);
    });
  });

  // Wire up the Enquire About This Material button
  const enquireBtn = document.getElementById('explorer-enquire-btn');
  if (enquireBtn) {
    enquireBtn.addEventListener('click', () => {
      const activeBtn = document.querySelector('.explorer-tab-btn.active');
      const activeKey = activeBtn ? activeBtn.getAttribute('data-material-key') : 'veneer';
      const data = MATERIAL_EXPLORER_DATA[activeKey];
      const materialName = data ? data.categoryTitle : 'Architectural Material';
      
      // Auto pre-fill Quote Form material select or launch WhatsApp
      const quoteMaterialSelect = document.getElementById('quote-material');
      if (quoteMaterialSelect) {
        // Find matching option
        for (let i = 0; i < quoteMaterialSelect.options.length; i++) {
          if (quoteMaterialSelect.options[i].text.toLowerCase().includes(activeKey)) {
            quoteMaterialSelect.selectedIndex = i;
            break;
          }
        }
      }

      // Smooth scroll to Quote Form
      const quoteSection = document.getElementById('quote');
      if (quoteSection) {
        quoteSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

function updateMaterialExplorer(key) {
  const data = MATERIAL_EXPLORER_DATA[key];
  if (!data) return;

  const visualImg = document.getElementById('explorer-img');
  const badgeChip = document.getElementById('explorer-badge-chip');
  const title = document.getElementById('explorer-title');
  const tagline = document.getElementById('explorer-tagline');
  const desc = document.getElementById('explorer-desc');
  const specsContainer = document.getElementById('explorer-specs-container');
  const appsContainer = document.getElementById('explorer-apps-container');

  // Smooth image cross-fade
  if (visualImg) {
    visualImg.style.opacity = '0';
    setTimeout(() => {
      visualImg.src = data.image;
      visualImg.style.opacity = '1';
    }, 200);
  }

  if (badgeChip) badgeChip.textContent = `FEATURED MATERIAL: ${key.toUpperCase()}`;
  if (title) title.textContent = data.categoryTitle;
  if (tagline) tagline.textContent = data.tagline;
  if (desc) desc.textContent = data.description;

  if (specsContainer && data.specs) {
    specsContainer.innerHTML = data.specs.map(spec => `
      <div class="spec-cell">
        <div class="spec-cell-label">${spec.label}</div>
        <div class="spec-cell-val">${spec.value}</div>
      </div>
    `).join('');
  }

  if (appsContainer && data.applications) {
    appsContainer.innerHTML = data.applications.map(app => `
      <span class="app-chip">${app}</span>
    `).join('');
  }
}

/**
 * Interior Inspiration Tabs ("DESIGNED FOR REAL SPACES")
 */
function initInspirationTabs() {
  const tabs = document.querySelectorAll('.insp-tab');
  if (!tabs.length || typeof INSPIRATION_DATA === 'undefined') return;

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      const inspId = this.getAttribute('data-insp-id');
      updateInspirationView(inspId);
    });
  });
}

function updateInspirationView(id) {
  const item = INSPIRATION_DATA.find(i => i.id === id);
  if (!item) return;

  const img = document.getElementById('insp-feature-img');
  const roomTag = document.getElementById('insp-room-tag');
  const headline = document.getElementById('insp-headline');
  const desc = document.getElementById('insp-desc');
  const pillsContainer = document.getElementById('insp-materials-pills');

  if (img) {
    img.style.opacity = '0.3';
    setTimeout(() => {
      img.src = item.image;
      img.style.opacity = '1';
    }, 200);
  }

  if (roomTag) roomTag.textContent = item.title;
  if (headline) headline.textContent = item.headline;
  if (desc) desc.textContent = item.description;

  if (pillsContainer && item.materialsUsed) {
    pillsContainer.innerHTML = item.materialsUsed.map(mat => `
      <span class="insp-pill">${mat}</span>
    `).join('');
  }
}
