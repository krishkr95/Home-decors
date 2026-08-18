const products = [
  {
    id: "bag_1",
    name: "Embossed Macrame Tote",
    category: "bags",
    price: "$120",
    inquiryPrice: "₹9,500",
    image: "assets/images/bag_1.png",
    thumbnails: [
      "assets/images/bag_1.png",
      "assets/images/bag_cat.png",
      "assets/images/insta_3.png"
    ],
    isBestseller: true,
    isNew: true,
    description: "Carefully hand-woven using premium organic cotton cords, the Embossed Macrame Tote combines traditional craft techniques with modern silhouette aesthetics. Features sturdy circular wooden handles and a linen lining with inner zipper pockets.",
    materials: "Organic Cotton Thread, Recycled Driftwood Handles, Premium Linen Lining",
    dimensions: "14\" W x 12\" H x 4\" D (Handle Drop: 4\")",
    care: "Spot clean only with a damp cloth. Avoid submerging in water or using harsh detergents. Air dry flat away from direct sunlight."
  },
  {
    id: "bag_2",
    name: "Chic Embroidered Handbag",
    category: "bags",
    price: "$160",
    inquiryPrice: "₹12,500",
    image: "assets/images/bag_2.png",
    thumbnails: [
      "assets/images/bag_2.png",
      "assets/images/hero_2.png",
      "assets/images/insta_4.png"
    ],
    isBestseller: false,
    isNew: true,
    description: "A luxury shoulder bag featuring hand-stitched floral embroidery patterns inspired by heritage Indian motifs. Embellished with premium brass hardware, leather shoulder straps, and a soft velvet lining.",
    materials: "Hand-loomed Cotton Fabric, Natural Vegetable-Tanned Leather, Pure Brass Hardware",
    dimensions: "11\" W x 8.5\" H x 3\" D (Strap Drop: 20\")",
    care: "Keep in a dust bag when not in use. Clean leather details with specialized leather conditioner. Professional fabric dry-clean only."
  },
  {
    id: "cushion_1",
    name: "Tufted Bohemian Cushion Cover",
    category: "cushions",
    price: "$45",
    inquiryPrice: "₹3,500",
    image: "assets/images/cushion_1.png",
    thumbnails: [
      "assets/images/cushion_1.png",
      "assets/images/cushion_cat.png",
      "assets/images/insta_5.png"
    ],
    isBestseller: true,
    isNew: false,
    description: "Bring rich textures and cozy warmth to your living space with our Tufted Bohemian Cushion Cover. Features elaborate tufted patterns, tassels on all four corners, and a hidden high-quality zipper at the back.",
    materials: "80% Organic Cotton, 20% Wool Blend Tufting, Heavy-weight Duck Canvas Backing",
    dimensions: "18\" x 18\" (45cm x 45cm)",
    care: "Hand wash cold inside out using a gentle wool detergent. Do not bleach or tumble dry. Dry flat in shade. Cool iron on reverse if needed."
  },
  {
    id: "cushion_2",
    name: "Artisanal Textured Throw Pillow",
    category: "cushions",
    price: "$50",
    inquiryPrice: "₹4,000",
    image: "assets/images/cushion_2.png",
    thumbnails: [
      "assets/images/cushion_2.png",
      "assets/images/boho_cat.png",
      "assets/images/insta_6.png"
    ],
    isBestseller: false,
    isNew: false,
    description: "A stunning hand-loomed throw pillow featuring contrasting horizontal weave patterns, braided weave elements, and tactile fringed details. Ideal for layering on sofas or daybeds.",
    materials: "100% Cotton Yarn, Natural Indigo Dyes",
    dimensions: "20\" x 20\" (50cm x 50cm)",
    care: "Spot clean spillages immediately. Dry clean recommended to preserve the shape and color depth of natural indigo dyes."
  },
  {
    id: "decor_1",
    name: "Terracotta Sculptural Table Lamp",
    category: "decor",
    price: "$190",
    inquiryPrice: "₹15,000",
    image: "assets/images/decor_1.png",
    thumbnails: [
      "assets/images/decor_1.png",
      "assets/images/decor_cat.png",
      "assets/images/craft_bts.png"
    ],
    isBestseller: true,
    isNew: true,
    description: "Fired in local wood kilns, this table lamp features a modern organic double-curve silhouette that showcases the warm raw finish of natural terracotta. Topped with a custom-loomed cream linen shade that diffuses light beautifully.",
    materials: "Hand-thrown Terracotta Clay, Brass Electrical Fittings, Oatmeal Linen Lampshade",
    dimensions: "Base: 7\" W x 12\" H | Overall Height: 22\" (With Shade)",
    care: "Dust with a dry microfibre cloth. Avoid direct contact with liquids. Switch off and unplug before cleaning or replacing bulbs."
  },
  {
    id: "decor_2",
    name: "Artistic Glazed Ceramic Vase",
    category: "decor",
    price: "$85",
    inquiryPrice: "₹6,800",
    image: "assets/images/decor_2.png",
    thumbnails: [
      "assets/images/decor_2.png",
      "assets/images/textile_cat.png",
      "assets/images/insta_2.png"
    ],
    isBestseller: false,
    isNew: false,
    description: "An elegant, asymmetrical handcrafted ceramic vase finished in a soft white glaze with mustard slip accents. Each piece bears the unique fingerprints and shaping lines of the artist's hands.",
    materials: "Stoneware Clay, Food-safe Studio Glazes",
    dimensions: "5\" Diameter x 9.5\" Height",
    care: "Hand wash with mild soapy water. Inner surface is fully glazed and water-tight to support fresh botanical arrangements."
  },
  {
    id: "accessory_1",
    name: "Boho Wall Hanging Brass Mirror",
    category: "accessories",
    price: "$95",
    inquiryPrice: "₹7,500",
    image: "assets/images/accessory_cat.png",
    thumbnails: [
      "assets/images/accessory_cat.png",
      "assets/images/hero_1.png"
    ],
    isBestseller: true,
    isNew: false,
    description: "Add a touch of vintage bohemian luxury to your hallways or bedrooms. This decorative mirror features a hand-hammered brass frame with delicate fringe wire drops, suspended from an elegant brass chain.",
    materials: "Solid Cast Brass Frame, Premium HD Silvered Mirror Glass",
    dimensions: "12\" Diameter Frame | 24\" Overall Drop (Including Chain)",
    care: "Wipe glass with standard glass cleaner. Buff the brass frame with a dry soft cloth to maintain its warm metallic sheen."
  },
  {
    id: "textile_1",
    name: "Luxury Handwoven Wool Throw",
    category: "textiles",
    price: "$140",
    inquiryPrice: "₹11,000",
    image: "assets/images/textile_cat.png",
    thumbnails: [
      "assets/images/textile_cat.png",
      "assets/images/hero_3.png"
    ],
    isBestseller: false,
    isNew: true,
    description: "Wrap yourself in absolute luxury. Our heritage throws are loomed by master weavers using hand-spun Himalayan wool. The subtle herringbone weave pattern and hand-knotted fringe ends complement any bedding or sofa display.",
    materials: "100% Himalayan Merino Wool, Natural Plant Dyes",
    dimensions: "50\" W x 70\" L (127cm x 178cm)",
    care: "Dry clean only. Shake regularly to remove dust. If minor pulling occurs, snip with sharp scissors—do not pull the fibers."
  }
];
