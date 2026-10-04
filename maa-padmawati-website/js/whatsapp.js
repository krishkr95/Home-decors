/**
 * MAA PADMAWATI PLY & DECOR - WHATSAPP & QUOTE ENQUIRY INTEGRATION
 * Dynamic message composition, form validation, and automated WhatsApp redirection.
 */

// Business configuration placeholder (Configurable as specified in prompt)
const WHATSAPP_NUMBER = (typeof CONFIG !== 'undefined' && CONFIG.whatsappNumber) 
  ? CONFIG.whatsappNumber 
  : "YOUR_NUMBER_HERE";

document.addEventListener('DOMContentLoaded', () => {
  initQuoteForm();
  initFloatingWhatsApp();
  initDirectContactButtons();
});

/**
 * Builds formatted WhatsApp URL
 */
function buildWhatsAppUrl({ name = '', phone = '', projectType = '', material = '', message = '' }) {
  // If user hasn't set their real number yet, fallback to a clean universal link
  const targetNumber = (WHATSAPP_NUMBER === "YOUR_NUMBER_HERE" || !WHATSAPP_NUMBER) 
    ? "" 
    : WHATSAPP_NUMBER.replace(/[^0-9]/g, '');

  let text = `Hello MAA Padmawati Ply & Decor,\n\nI am interested in exploring materials for my project.\n\n`;

  if (material) {
    text += `Material: ${material}\n`;
  }
  if (projectType) {
    text += `Project Type: ${projectType}\n`;
  }
  if (name) {
    text += `My name: ${name}\n`;
  }
  if (phone) {
    text += `Phone: ${phone}\n`;
  }
  if (message) {
    text += `\nMessage:\n${message}\n`;
  }

  text += `\nPlease share catalogue details and a formal quote. Thank you.`;

  const encoded = encodeURIComponent(text);
  
  if (targetNumber) {
    return `https://wa.me/${targetNumber}?text=${encoded}`;
  } else {
    // If number is still placeholder, opens WhatsApp web with pre-filled text
    return `https://api.whatsapp.com/send?text=${encoded}`;
  }
}

/**
 * Quote Form Submission & Validation
 */
function initQuoteForm() {
  const form = document.getElementById('quote-request-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('quote-name');
    const phoneInput = document.getElementById('quote-phone');
    const emailInput = document.getElementById('quote-email');
    const projectSelect = document.getElementById('quote-project');
    const materialSelect = document.getElementById('quote-material');
    const messageInput = document.getElementById('quote-message');

    let isValid = true;

    // Reset error styling
    [nameInput, phoneInput, emailInput].forEach(inp => {
      if (inp) {
        inp.classList.remove('error');
        const err = inp.parentElement.querySelector('.form-error');
        if (err) err.style.display = 'none';
      }
    });

    // Name Validation
    if (!nameInput.value.trim()) {
      showError(nameInput, 'Full Name is required.');
      isValid = false;
    }

    // Phone Validation
    const phoneVal = phoneInput.value.trim();
    const phoneRegex = /^[0-9+() -]{7,15}$/;
    if (!phoneVal) {
      showError(phoneInput, 'Phone Number is required.');
      isValid = false;
    } else if (!phoneRegex.test(phoneVal)) {
      showError(phoneInput, 'Please enter a valid phone number.');
      isValid = false;
    }

    // Email validation (optional but validate if entered)
    const emailVal = emailInput ? emailInput.value.trim() : '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailVal && !emailRegex.test(emailVal)) {
      showError(emailInput, 'Please enter a valid email address.');
      isValid = false;
    }

    if (!isValid) return;

    // Build URL & launch
    const whatsappUrl = buildWhatsAppUrl({
      name: nameInput.value.trim(),
      phone: phoneInput.value.trim(),
      projectType: projectSelect ? projectSelect.value : '',
      material: materialSelect ? materialSelect.value : '',
      message: messageInput ? messageInput.value.trim() : ''
    });

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Show luxury success modal
    openModal('quote-success-modal');

    // Reset form
    form.reset();
  });
}

function showError(inputEl, msg) {
  inputEl.classList.add('error');
  const err = inputEl.parentElement.querySelector('.form-error');
  if (err) {
    err.textContent = msg;
    err.style.display = 'block';
  }
}

/**
 * Direct WhatsApp Enquiry for a specific product
 */
function enquireProductViaWhatsApp(productId) {
  if (typeof PRODUCTS_DATA === 'undefined') return;
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const url = buildWhatsAppUrl({
    material: `${product.name} (${product.categoryLabel})`,
    message: `I would like to inquire about specifications, pricing, and availability for "${product.name}".`
  });

  window.open(url, '_blank', 'noopener,noreferrer');
}

/**
 * Floating WhatsApp Button Trigger
 */
function initFloatingWhatsApp() {
  const floatBtn = document.querySelector('.floating-whatsapp');
  if (!floatBtn) return;

  floatBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const url = buildWhatsAppUrl({
      message: "Hello! I am visiting your website and would like to explore your luxury materials collection."
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  });
}

/**
 * Direct Contact and Call Buttons
 */
function initDirectContactButtons() {
  const callButtons = document.querySelectorAll('[data-action="call"]');
  callButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const phone = (typeof CONFIG !== 'undefined' && CONFIG.phone) ? CONFIG.phone : "+919876543210";
      window.location.href = `tel:${phone.replace(/[^0-9+]/g, '')}`;
    });
  });

  const waButtons = document.querySelectorAll('[data-action="whatsapp"]');
  waButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const url = buildWhatsAppUrl({
        message: "Hello MAA Padmawati team, I would like to schedule a showroom consultation."
      });
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  });
}
