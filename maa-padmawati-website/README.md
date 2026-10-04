# MAA PADMAWATI PLY & DECOR — PREMIUM WEBSITE DEMO

A bespoke, responsive, luxury digital showcase created for **MAA PADMAWATI PLY & DECOR**, a supplier of premium interior and exterior architectural surfaces, natural veneers, calibrated plywood, louvers, and bespoke decorative solutions.

---

## 🏛️ Brand Aesthetic & Design Philosophy

- **Aesthetic**: Luxury Editorial, Architectural, Modern Indian Interior Brand.
- **Color Palette**:
  - `Primary (#11100E)`: Deep Charcoal / Near Black
  - `Secondary (#1B1916)`: Warm Dark Brown
  - `Background (#F4EFE7)`: Warm Ivory
  - `Secondary Background (#E8DFD2)`: Warm Sand
  - `Accent (#B38A52)`: Champagne Gold
  - `Text (#171614)`: Rich Charcoal
  - `Muted Text (#746D63)`: Architectural Slate
- **Typography**: 
  - `Cormorant Garamond`: Editorial luxury headlines & accents.
  - `Manrope`: Modern, high-legibility interface and body typography.

---

## 🚀 Key Features

1. **Full Viewport Cinematic Hero**:
   - High-resolution architectural photography with dark luxury overlay.
   - Floating interactive "Featured Material" card with subtle physics float.
   - Animated scroll indicator and primary CTA routing.
2. **Sticky Translucent Header**:
   - Transparent initial state with scroll transition to blurred dark luxury glassmorphism.
   - Fullscreen animated mobile navigation menu.
3. **Curated Collections Grid**:
   - 10 distinct architectural material categories arranged in an asymmetric editorial grid.
   - Hover zoom, gold line animation, and micro-interactions.
4. **The Material Edit (Live Search & Category Filtering)**:
   - Real-time client-side search across materials, finishes, and specs.
   - Category pill filters (Veneers, Louvers, Plywood, Laminates, Hardware, Wall Panels, Fabrics, etc.).
   - Interactive **Quick View Modal** featuring detailed thickness, dimensions, finish details, and application badges.
5. **Interactive Material Explorer ("TOUCH. FEEL. IMAGINE.")**:
   - Interactive tab selector (Plywood, Veneer, Laminate, Louver, Wall Panel, Hardware).
   - Crossfade image previews, technical specifications, and recommended applications.
6. **Interior Inspiration Spaces**:
   - Editorial showcases of real applications (Living Room, Bedroom, Kitchen, Spa Bathroom, Executive Office, Luxury Showroom).
7. **Filterable Masonry Gallery & Fullscreen Lightbox**:
   - Masonry layout with room filters.
   - Lightbox with next/previous image navigation, image counter, keyboard support (`ESC`, `ArrowLeft`, `ArrowRight`), and mobile touch swipe gestures.
8. **Dark Luxury "Why Choose Us" Section**:
   - 6 value propositions highlighted with bespoke SVG line icons.
9. **5-Step Project Journey Timeline**:
   - From initial consultation to final material delivery and execution.
10. **Dynamic Quote Form & WhatsApp Integration**:
    - Validated form fields with instant client-side error handling.
    - Automated WhatsApp URL generator pre-filling client name, phone, project type, and material requirement.
    - Luxury confirmation modal upon submission.
11. **LocalBusiness SEO & Accessibility**:
    - Schema.org JSON-LD structured data.
    - ARIA labels and keyboard accessible modals.
    - `prefers-reduced-motion` compliance.

---

## 📁 Project Structure

```
maa-padmawati-website/
├── index.html                  # Main Semantic HTML5 structure
├── README.md                   # Project documentation
├── css/
│   ├── style.css               # Core design tokens, components & layout
│   ├── animations.css          # Keyframes, scroll reveals & hover states
│   └── responsive.css          # Responsive design (320px to 1920px)
├── js/
│   ├── main.js                 # Header scroll, mobile menu & global modals
│   ├── products.js             # Catalog rendering, live search & quick view
│   ├── gallery.js              # Masonry gallery & touch-friendly lightbox
│   ├── filters.js              # Material explorer & inspiration tabs
│   ├── whatsapp.js             # Form validation & WhatsApp integration
│   └── animations.js           # Scroll reveals & parallax effects
├── assets/
│   ├── images/
│   │   ├── hero/               # Generated & high-res hero imagery
│   │   ├── products/           # Material texture closeups
│   │   ├── categories/         # Category imagery
│   │   ├── interiors/          # Interior showcases
│   │   ├── gallery/            # Project portfolio items
│   │   └── logo/               # Brand assets
│   └── icons/                  # Vector icons
└── data/
    └── products.js             # Single source of truth for all business data
```

---

## ⚙️ Easy Customization Guide

All business details, phone numbers, and WhatsApp numbers can be updated in a single file:
**`data/products.js`**:

```javascript
const CONFIG = {
  businessName: "MAA PADMAWATI PLY & DECOR",
  whatsappNumber: "919876543210", // Put client's real WhatsApp number here
  phone: "+91 98765 43210",        // Put client's call number here
  email: "contact@maapadmawatidecor.com",
  address: "Showroom Address Here",
  instagramUrl: "https://instagram.com/maapadmawati_ply_decor"
};
```

---

## 🖥️ Running Locally

Simply open `index.html` in any modern web browser (Chrome, Edge, Safari, Firefox). No backend or build step is required!
