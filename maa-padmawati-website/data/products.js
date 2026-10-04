/**
 * MAA PADMAWATI PLY & DECOR - DATA & CONFIGURATION
 * 
 * Central configuration file for business information, product catalog, 
 * interactive material explorer data, and gallery items.
 */

// ==========================================
// BUSINESS CONFIGURATION (Easily editable)
// ==========================================
const CONFIG = {
  businessName: "MAA PADMAWATI PLY & DECOR",
  tagline: "Premium Interior & Exterior Decorative Surfaces",
  // Change this to the real WhatsApp business number (with country code, e.g. "919876543210")
  whatsappNumber: "YOUR_NUMBER_HERE", 
  phone: "+91 98765 43210", // Placeholder until supplied
  email: "contact@maapadmawatidecor.com", // Placeholder
  address: "Showroom: Ring Road / Interior Decor Hub, City Center", // Placeholder
  workingHours: "Mon - Sat: 10:00 AM - 8:30 PM | Sun: 11:00 AM - 6:00 PM",
  // Placeholder Instagram profile URL as specified
  instagramUrl: "https://instagram.com/maapadmawati_ply_decor",
  // Google Maps embed URL placeholder
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.86107248554!2d85.078713!3d25.6081756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58dce6732867%3A0x4059f39a1ac82f21!2sInterior%20Showroom!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
};

// ==========================================
// HIGH-RESOLUTION IMAGE REGISTRY WITH FALLBACKS
// ==========================================
const IMAGES = {
  hero: "assets/images/hero/hero_luxury_interior.jpg",
  veneerTexture: "assets/images/products/featured_veneer_texture.jpg",
  
  // Curated architectural & luxury material imagery (Unsplash Direct High-Res)
  categories: {
    plywood: "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?q=80&w=1000&auto=format&fit=crop",
    veneers: "assets/images/products/featured_veneer_texture.jpg",
    laminates: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
    louvers: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    hardware: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop",
    wallpaper: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop",
    curtains: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop",
    sofaFabric: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop",
    wallPanels: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
    bathroom: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=1000&auto=format&fit=crop"
  }
};

// ==========================================
// CATEGORIES DATA
// ==========================================
const CATEGORIES_DATA = [
  {
    id: "plywood",
    number: "01",
    name: "PLYWOOD",
    subtitle: "Calibrated & Marine Grade",
    description: "High-density, calibrated boiling water-proof (BWP) and structural plywood engineered for enduring dimensional stability.",
    image: "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?q=80&w=1000&auto=format&fit=crop",
    count: "40+ Specifications"
  },
  {
    id: "veneers",
    number: "02",
    name: "NATURAL VENEERS",
    subtitle: "Architectural Wood Slices",
    description: "Hand-curated natural, smoked, dyed, and rough-cut wood veneers that impart irreplaceable organic warmth and grain richness.",
    image: "assets/images/products/featured_veneer_texture.jpg",
    count: "120+ Exotic Species"
  },
  {
    id: "laminates",
    number: "03",
    name: "LAMINATES",
    subtitle: "High Pressure & Textured",
    description: "Zero-reflection anti-fingerprint supermattes, synchronised wood grains, fluted surfaces, and tactile metallic finishes.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
    count: "350+ Patterns & Textures"
  },
  {
    id: "louvers",
    number: "04",
    name: "LOUVERS & FLUTED PANELS",
    subtitle: "Linear Architectural Slats",
    description: "Charcoal louvers, timber-polymer composite (WPC), and acoustic fluted panels designed for rhythmic feature walls and ceilings.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    count: "80+ Profiles"
  },
  {
    id: "hardware",
    number: "05",
    name: "ARCHITECTURAL HARDWARE",
    subtitle: "Bespoke Pulls & Systems",
    description: "Concealed hydraulic hinges, slim profile sliding door mechanisms, knurled solid brass pulls, and soft-close drawer slides.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop",
    count: "200+ Fittings"
  },
  {
    id: "wallpaper",
    number: "06",
    name: "WALLPAPER & WALLCOVERINGS",
    subtitle: "Textured & Metallic Leaf",
    description: "Heavy woven Belgian linens, metallic embossed foils, seamless panoramic murals, and bespoke tactile wall coverings.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop",
    count: "180+ Designer Rolls"
  },
  {
    id: "curtains",
    number: "07",
    name: "CURTAINS & DRAPERY",
    subtitle: "Luxury Sheers & Blackouts",
    description: "Custom tailored sheer linens, acoustic velvet blackouts, and whisper-quiet motorized drapery track solutions.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop",
    count: "90+ Drapery Fabrics"
  },
  {
    id: "sofa-fabric",
    number: "08",
    name: "SOFA & UPHOLSTERY FABRIC",
    subtitle: "Bouclé, Chenille & Velvets",
    description: "High-martindale abrasion-tested bouclés, stain-resistant microvelvets, jacquards, and leatherette for statement seating.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop",
    count: "250+ Colorways"
  },
  {
    id: "wall-panels",
    number: "09",
    name: "WALL & TV PANELS",
    subtitle: "Acoustic Slats & PU Stone",
    description: "Featherlight PU faux-rock masonry slabs, acoustic felt wood slats, and integrated LED backlit TV feature wall solutions.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
    count: "60+ Panel Systems"
  },
  {
    id: "bathroom",
    number: "10",
    name: "BATHROOM ACCESSORIES",
    subtitle: "Brushed Brass & PVD Finishes",
    description: "Solid brass towel rails, luxury niche organizers, concealed drains, and anti-corrosive PVD rose gold & matte black collections.",
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=1000&auto=format&fit=crop",
    count: "75+ Bath Details"
  }
];

// ==========================================
// PRODUCT CATALOG (Demo items for Material Edit & Quick View)
// ==========================================
const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Smoked American Oak Veneer",
    category: "veneers",
    categoryLabel: "Natural Veneers",
    image: "assets/images/products/featured_veneer_texture.jpg",
    shortDesc: "Deep fumed natural grain with authentic open-pore texture and matte lacquer finish.",
    description: "Carefully selected from sustainable American oak logs, deep fumed for rich caramel undertones. The open-pore natural surface reveals authentic medullary rays and tactile grain character, ideal for luxury architectural joinery.",
    finish: "Deep Fumed Matte Finish",
    thickness: "0.55mm on Gurjan Fleeced Back",
    dimensions: "8ft x 4ft (2440mm x 1220mm)",
    applications: ["Living Room Feature Walls", "Master Bedroom Wardrobes", "Executive Office Consoles", "Display Shelving"]
  },
  {
    id: 2,
    name: "Acoustic Slatted Charcoal Louver",
    category: "louvers",
    categoryLabel: "Louvers & Fluted Panels",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Linear charcoal slats mounted on sound-dampening acoustic PET felt backing.",
    description: "Contemporary vertical slats engineered from high-density composite with real wood veneer wrapping, set on an acoustic felt backing that reduces reverberation while delivering dramatic architectural verticality.",
    finish: "Charcoal Walnut / Acoustic Black Felt",
    thickness: "21mm overall depth",
    dimensions: "9.5ft x 600mm Modular Panels",
    applications: ["TV Media Walls", "Entrance Foyers", "Home Theatres", "Conference Rooms"]
  },
  {
    id: 3,
    name: "Calibrated 710 BWP Marine Plywood",
    category: "plywood",
    categoryLabel: "Plywood",
    image: "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Quad-press four-side calibrated marine grade core with zero core gap warranty.",
    description: "Manufactured from 100% selected hardwood timber and bonded with unextended phenol formaldehyde synthetic resin. Calibrated on high-precision imported sanders for perfectly uniform thickness across the entire sheet.",
    finish: "Four-Side Sanded Smooth Calibrated",
    thickness: "12mm, 16mm, 19mm, 25mm",
    dimensions: "8ft x 4ft / 7ft x 4ft",
    applications: ["Modular Kitchen Carcasses", "Wet-Area Bathroom Vanities", "Wardrobe Carcasses", "Under-Bed Storage"]
  },
  {
    id: 4,
    name: "Anti-Fingerprint Zero-Gloss Supermatte Laminate",
    category: "laminates",
    categoryLabel: "Laminates",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Velvety soft-touch surface engineered with microscopic nano-structure preventing smudges.",
    description: "Revolutionary high-pressure laminate with thermal self-healing micro-scratches and total light absorption. Delivers a pitch-pure, ultra-smooth touch without fingerprint marks, perfect for high-traffic luxury living.",
    finish: "Thermal Soft-Touch Supermatte",
    thickness: "1.0mm & 1.25mm",
    dimensions: "8ft x 4ft (2440mm x 1220mm)",
    applications: ["Kitchen Shutters", "Dining Table Surfaces", "Office Desktops", "Seamless Wall Cladding"]
  },
  {
    id: 5,
    name: "Knurled Solid Brass Architectural Pull Handles",
    category: "hardware",
    categoryLabel: "Architectural Hardware",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Precision diamond-knurled solid brass hardware in satin champagne gold and graphite.",
    description: "Machined from solid brass stock with precision diamond knurling for an unmistakable tactile grip. Treated with vacuum PVD coating to resist tarnishing, moisture, and everyday oxidation over decades.",
    finish: "PVD Champagne Gold & Satin Graphite",
    thickness: "Solid Brass Casting (12mm dia rod)",
    dimensions: "300mm, 600mm, 900mm Centre-to-Centre",
    applications: ["Main Entrance Pivot Doors", "Full-Height Wardrobe Doors", "Pantry Shutters"]
  },
  {
    id: 6,
    name: "Textured Belgian Linen Wallcovering",
    category: "wallpaper",
    categoryLabel: "Wallpaper & Wallcoverings",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Woven natural flax fibers with subtle slub texture and breathable non-woven backing.",
    description: "An authentic textile wallcovering woven from natural Belgian flax. Features delicate imperfections of genuine yarn and an earthy, serene drape that transforms bare drywall into cozy, tactile sophistication.",
    finish: "Natural Slub Flax Weave",
    thickness: "380 GSM Heavyweight Non-Woven",
    dimensions: "1.06m Width x 10m Continuous Rolls",
    applications: ["Master Bedroom Headboard Wall", "Formal Dining Room", "Meditation Alcoves"]
  },
  {
    id: 7,
    name: "Sculptural PU Lightweight Stone Masonry Panel",
    category: "wall-panels",
    categoryLabel: "Wall & TV Panels",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Hyper-realistic limestone cliff texture weighing just 3.5kg per slab for easy interior install.",
    description: "Crafted with high-density polyurethane molded directly from natural quarried travertine boulders. Achieves raw architectural stone depth and dramatic shadowplay without heavy masonry or structural reinforcements.",
    finish: "Raw Chiseled Travertine Relief",
    thickness: "30mm - 70mm Sculptural Relief",
    dimensions: "1200mm x 600mm Interlocking Panels",
    applications: ["Living Room Fireplace & TV Backdrops", "Stairwell Double-Height Walls", "Showroom Accent Backdrops"]
  },
  {
    id: 8,
    name: "Luxury Heavy Bouclé Upholstery Textile",
    category: "sofa-fabric",
    categoryLabel: "Sofa & Upholstery Fabric",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Plush looped textured yarn with stain-resistant nanotech coating and 75,000 rubs rating.",
    description: "Rich, tactile looped-yarn bouclé with high wool content. Delivers a soft, cloud-like aesthetic while boasting commercial-grade abrasion resistance and hydrophobic stain repellency for active family living.",
    finish: "Curled Looped Bouclé Texture",
    thickness: "620 GSM Heavy Upholstery",
    dimensions: "54 inches (137cm) Roll Width",
    applications: ["Curved Statement Sofas", "Accent Lounge Chairs", "Custom Headboards", "Ottomans"]
  },
  {
    id: 9,
    name: "Double-Weave Blackout & Sheer Drapery Ensemble",
    category: "curtains",
    categoryLabel: "Curtains & Drapery",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Whisper-soft motorized sheer paired with 100% thermal dimout woven jacquard backing.",
    description: "A dual-layer window dressing system. The ethereal sheer softly filters daylight into a gentle glow, while the heavyweight woven blackout ensures total light blockage and acoustic insulation during evening hours.",
    finish: "Slubbed Voile Sheer + Thermal Dimout",
    thickness: "Dual Layer Drapery Construction",
    dimensions: "Custom Floor-to-Ceiling Tailoring",
    applications: ["Penthouse Living Windows", "Bedrooms", "Hotel Suites", "Balcony Glass Partitions"]
  },
  {
    id: 10,
    name: "Architectural Concealed Flush Shower Channel & Niche",
    category: "bathroom",
    categoryLabel: "Bathroom Accessories",
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Tile-insert linear floor drain with brushed champagne gold PVD electroplating.",
    description: "Engineered from marine grade 304 stainless steel with a reversible tile-insert tray. Allows bathroom flooring to flow continuously into the walk-in shower zone without visible metal grates or intrusive curbs.",
    finish: "Brushed Champagne Gold PVD Coating",
    thickness: "1.5mm Gauge 304 Stainless Steel",
    dimensions: "600mm / 800mm / 1000mm Lengths",
    applications: ["Master Ensuite Walk-In Showers", "Powder Rooms", "Luxury Guest Bathrooms"]
  }
];

// ==========================================
// INTERACTIVE MATERIAL EXPLORER DATA
// ==========================================
const MATERIAL_EXPLORER_DATA = {
  plywood: {
    categoryKey: "plywood",
    categoryTitle: "CALIBRATED & BWP PLYWOOD",
    tagline: "The Uncompromising Foundation of Lasting Furniture",
    description: "Every enduring interior begins beneath the surface. Our calibrated marine and structural plywood features uniform thickness with micro-sanded core layers, zero gaps, and moisture-resistant bonding that guarantees flawless laminate and veneer adhesion without warping.",
    image: "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?q=80&w=1200&auto=format&fit=crop",
    specs: [
      { label: "Core Composition", value: "100% Selected Hardwood Timber" },
      { label: "Resin Technology", value: "BWP Phenol Formaldehyde" },
      { label: "Calibration", value: "4-Side Dual-Head Sanded" },
      { label: "Termite & Borer", value: "Vacuum Pressure Impregnated" }
    ],
    applications: ["Modular Kitchens", "Wardrobe Carcasses", "Ceiling Beams", "Bespoke Beds"]
  },
  veneer: {
    categoryKey: "veneer",
    categoryTitle: "NATURAL ARCHITECTURAL VENEERS",
    tagline: "Organic Warmth and One-of-a-Kind Grain Narratives",
    description: "Each veneer sheet is a natural portrait of time, sliced from rare sustainably sourced hardwood burls, quarters, and crowns. Smoked, dyed, and rough-cut finishes add depth and touchable luxury to feature walls, consoles, and portals.",
    image: "assets/images/products/featured_veneer_texture.jpg",
    specs: [
      { label: "Species", value: "Smoked Oak, Teak, Walnut, Santos Rosewood" },
      { label: "Slicing Methods", value: "Crown Cut, Quarter Cut, Burl" },
      { label: "Backing", value: "Gurjan Fleeced Backing" },
      { label: "Coating Pairing", value: "PU Matte, Polyester, Water-Based" }
    ],
    applications: ["Living Room Feature Walls", "Master Bedroom Wardrobes", "Executive Desks", "Main Doors"]
  },
  laminate: {
    categoryKey: "laminate",
    categoryTitle: "HIGH-PRESSURE & METALLIC LAMINATES",
    tagline: "High-Performance Aesthetics Engineered for Daily Living",
    description: "Fusing resilience with ultra-modern design. From anti-fingerprint thermal supermattes to synchronized fluted wood grains and real brushed metal foils, our laminate range empowers designers with endless creative freedom without maintenance anxieties.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    specs: [
      { label: "Surface Finish", value: "Anti-Fingerprint, Synchronized, Fluted, Metallic" },
      { label: "Density", value: "High-Pressure Compact Sheet (1mm / 1.25mm)" },
      { label: "Resistance", value: "Scratch, Heat, Steam, Stain Resistant" },
      { label: "Core Color", value: "Available in Matching Color Core" }
    ],
    applications: ["Kitchen Shutters", "Dining Surfaces", "Commercial Wall Liners", "Vanity Cabinets"]
  },
  louver: {
    categoryKey: "louver",
    categoryTitle: "LOUVERS & FLUTED WALL PANELS",
    tagline: "Linear Drama and Rhythm for Modern Feature Walls",
    description: "Fluted louvers transform blank plaster into dynamic visual focal points with dramatic shadows and acoustic dampening. Available in high-density charcoal composite, polymer WPC, and natural wood slats suited for dry and semi-exterior environments.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    specs: [
      { label: "Material Base", value: "Charcoal Composite / WPC / Natural Slats" },
      { label: "Profile Options", value: "U-Flute, V-Groove, Wave, Step Slat" },
      { label: "Installation", value: "Interlocking Tongue & Groove with Nails/Glue" },
      { label: "Acoustics", value: "Diffuses Sound and Reduces Echo" }
    ],
    applications: ["TV Console Walls", "Entrance Foyers", "Ceiling Louver Beams", "Column Wraps"]
  },
  "wall-panel": {
    categoryKey: "wall-panel",
    categoryTitle: "ARCHITECTURAL WALL & TV PANELS",
    tagline: "Instant Dimension with PU Stone and Acoustic Felt",
    description: "Say goodbye to messy masonry. Our ultra-realistic PU stone panels replicate chiseled canyon walls and rugged slate cliffs at a fraction of the weight, while integrated acoustic felt slats add contemporary warmth and quiet luxury.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    specs: [
      { label: "Composition", value: "Lightweight High-Density PU / Acoustic PET" },
      { label: "Weight", value: "Approx. 3.5kg per m² (Ultra Light)" },
      { label: "Fire Resistance", value: "Class B Fire Retardant Core" },
      { label: "Installation", value: "Direct Screw / Adhesive on Drywall" }
    ],
    applications: ["Double Height Atriums", "TV Media Consoles", "Restaurant Walls", "Master Bed Backdrops"]
  },
  hardware: {
    categoryKey: "hardware",
    categoryTitle: "BESPOKE ARCHITECTURAL HARDWARE",
    tagline: "The Jewelry of Architectural Millwork",
    description: "Hardware is the physical touchpoint where people connect with your spaces. We curate precision-engineered knurled brass handles, soft-close concealed systems, magnetic latch locks, and seamless aluminum profile glass door frameworks.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
    specs: [
      { label: "Metal Grade", value: "Forged Solid Brass & 304 Stainless Steel" },
      { label: "Surface PVD", value: "Titanium PVD Champagne Gold, Rose Gold, Matte Black" },
      { label: "Cycle Testing", value: "Tested up to 200,000 Open/Close Cycles" },
      { label: "Motion Control", value: "Hydraulic Damping and Push-to-Open" }
    ],
    applications: ["Grand Entrance Pivot Doors", "Wardrobe Profile Shutters", "Concealed Passages"]
  }
};

// ==========================================
// INTERIOR INSPIRATION SPACES
// ==========================================
const INSPIRATION_DATA = [
  {
    id: "living",
    title: "LIVING ROOM",
    headline: "Warm Natural Teak Veneer & Fluted Louver TV Wall",
    description: "A harmonious ensemble of warm smoked oak wall paneling, acoustic charcoal louvers behind the media console, and knurled brass pull accents creating an inviting haven of understated luxury.",
    materialsUsed: ["Smoked Oak Veneer", "Charcoal Fluted Louvers", "Champagne Gold Inlays", "Bouclé Seating"],
    image: "assets/images/hero/hero_luxury_interior.jpg"
  },
  {
    id: "bedroom",
    title: "MASTER BEDROOM",
    headline: "Serene Linen Wallcoverings & Soft Slat Headboard",
    description: "Designed for deep rest with sound-absorbing felt slats, tactile Belgian flax wallcoverings, and rich motorized velvet drapery that cocoons the space in acoustic calm.",
    materialsUsed: ["Natural Linen Wallcovering", "Fluted Wall Slats", "Blackout Drapery", "Soft-Touch Wardrobes"],
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "kitchen",
    title: "MODERN KITCHEN",
    headline: "Zero-Gloss Matte Laminates & BWP Marine Plywood Carcass",
    description: "Moisture-proof 710 calibrated marine plywood carcasses wrapped in anti-fingerprint slate grey matte laminates, paired with concealed hydraulic lift systems.",
    materialsUsed: ["Calibrated 710 Marine Ply", "Anti-Fingerprint Laminate", "Concealed Hinges", "Profile Pulls"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "bathroom",
    title: "SPA BATHROOM",
    headline: "Concealed PVD Brass Accents & Sculptural Stone Walls",
    description: "Travertine-look lightweight PU stone feature wall harmonized with brushed champagne gold hardware, recessed LED niches, and frameless fluted glass partitions.",
    materialsUsed: ["PVD Champagne Gold Fixtures", "Water-Resistant Louvers", "Tile-Insert Drains", "Fluted Glass"],
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "office",
    title: "EXECUTIVE OFFICE",
    headline: "Architectural Wood Wall Paneling & Concealed Hardware",
    description: "Prestigious executive suite featuring book-matched walnut veneer paneling, acoustic slatted ceilings, and minimalist solid brass hardware for an authoritative ambiance.",
    materialsUsed: ["Bookmatched Walnut Veneer", "Acoustic Slats", "Precision Hardware", "Executive Curtains"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "showroom",
    title: "LUXURY SHOWROOM & BOUTIQUE",
    headline: "Dramatic Interlocking Stone & Synchronized Fluted Displays",
    description: "Showcasing how dynamic lighting interacts with fluted louvers, chiseled PU stone, and metallic laminates to create magnetic commercial retail environments.",
    materialsUsed: ["Sculptural PU Travertine", "Synchronized Laminate", "Linear Louvers", "Custom PVD Brass"],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
  }
];

// ==========================================
// GALLERY DATA FOR MASONRY & LIGHTBOX
// ==========================================
const GALLERY_DATA = [
  {
    id: 1,
    title: "Panoramic Penthouse Living Salon",
    category: "living",
    categoryLabel: "Living Space",
    materials: "Smoked Veneer • Louvers • Brass Inlays",
    image: "assets/images/hero/hero_luxury_interior.jpg"
  },
  {
    id: 2,
    title: "Hand-Matched Natural Oak Veneer Swatches",
    category: "materials",
    categoryLabel: "Material Detail",
    materials: "Quarter-Sawn Natural Oak • Matte PU",
    image: "assets/images/products/featured_veneer_texture.jpg"
  },
  {
    id: 3,
    title: "Minimalist Master Suite with Slatted Screen",
    category: "bedroom",
    categoryLabel: "Bedroom",
    materials: "Timber Slats • Belgian Linen • Warm Coves",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Sculptural Travertine PU Stone Feature Wall",
    category: "living",
    categoryLabel: "Living Space",
    materials: "Lightweight Travertine • Linear Fireplace",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Precision Knurled Brass Door Hardware",
    category: "commercial",
    categoryLabel: "Hardware Detail",
    materials: "Solid Brass • Diamond Knurl • Satin PVD",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Gourmet Kitchen Island with Fluted Detailing",
    category: "kitchen",
    categoryLabel: "Kitchen",
    materials: "Calibrated 710 Marine Ply • Supermatte Finish",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Atmospheric Executive Boardroom Wall Paneling",
    category: "office",
    categoryLabel: "Executive Office",
    materials: "Smoked American Walnut • Acoustic Slatting",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Bespoke Dressing Wardrobe with Bronze Profiles",
    category: "bedroom",
    categoryLabel: "Bedroom",
    materials: "Zero-Gloss Laminate • Fluted Glass • LED Profiles",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "Contemporary Minimalist Bathroom Sanctuary",
    category: "commercial",
    categoryLabel: "Bath Detail",
    materials: "Champagne Brass • Tile-Insert Drain • Fluted Glass",
    image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=1200&auto=format&fit=crop"
  }
];
