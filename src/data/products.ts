export interface ProductColor {
  name: string;
  hex: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
  avatar?: string;
  photo?: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  price: number;
  originalPrice: number;
  discount: number;
  images: string[];
  hoverImage: string;
  colors: ProductColor[];
  sizes: string[];
  outOfStockSizes: string[];
  badge: "NEW" | "SALE" | "BESTSELLER" | "";
  rating: number;
  reviewCount: number;
  isNew: boolean;
  isSale: boolean;
  isBestseller: boolean;
  description: string;
  fabric: string;
  care: string;
  tags: string[];
  reviews: Review[];
  relatedProducts: string[];
  completeTheLook: string[];
}

const sampleReviews: Review[] = [
  {
    id: "r1", name: "Priya M.", rating: 5,
    text: "Absolutely gorgeous! The fabric feels premium and the fit is perfect. Got so many compliments.",
    date: "2025-02-15", verified: true,
    avatar: "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?w=80&q=80&fit=crop&crop=face",
  },
  {
    id: "r2", name: "Ananya S.", rating: 4,
    text: "Beautiful dress, runs slightly small. Ordered one size up and it's perfect now.",
    date: "2025-02-10", verified: true,
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&q=80&fit=crop&crop=face",
  },
  {
    id: "r3", name: "Kavya R.", rating: 5,
    text: "The color is even more beautiful in person. Will definitely order more from this brand!",
    date: "2025-01-28", verified: true,
    avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=80&q=80&fit=crop&crop=face",
  },
];

export const products: Product[] = [
  {
    id: "prod_001", name: "Blush Wrap Midi Dress", category: "dresses", price: 1299, originalPrice: 1999, discount: 35,
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=85&fit=crop",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=85&fit=crop",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=85&fit=crop",
    ],
    hoverImage: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=85&fit=crop",
    colors: [{ name: "Blush", hex: "#F5D6D6" }, { name: "Deep Rose", hex: "#A0495E" }, { name: "Cream", hex: "#FDF8F6" }],
    sizes: ["XS", "S", "M", "L", "XL"], outOfStockSizes: ["XS"], badge: "NEW", rating: 4.8, reviewCount: 234,
    isNew: true, isSale: true, isBestseller: false,
    description: "A stunning wrap midi dress in soft blush tones. Features a flattering V-neckline, adjustable waist tie, and flowing skirt that moves beautifully.",
    fabric: "100% Viscose", care: "Hand wash cold, hang dry", tags: ["midi", "wrap", "casual", "festive"],
    reviews: sampleReviews, relatedProducts: ["prod_002", "prod_005"], completeTheLook: ["prod_008", "prod_012", "prod_015"],
  },
  {
    id: "prod_002", name: "Rose Satin Slip Dress", category: "dresses", price: 1599, originalPrice: 2199, discount: 27,
    images: [
      "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=600&q=85&fit=crop",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=85&fit=crop",
    ],
    hoverImage: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=85&fit=crop",
    colors: [{ name: "Rose", hex: "#C9748A" }, { name: "Champagne", hex: "#E8D5B7" }],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"], outOfStockSizes: [], badge: "BESTSELLER", rating: 4.9, reviewCount: 512,
    isNew: false, isSale: true, isBestseller: true,
    description: "Luxurious satin slip dress with delicate adjustable straps. The bias cut drapes beautifully and flatters every body type.",
    fabric: "95% Polyester Satin, 5% Elastane", care: "Machine wash cold, gentle cycle", tags: ["satin", "slip", "party", "evening"],
    reviews: sampleReviews, relatedProducts: ["prod_001", "prod_003"], completeTheLook: ["prod_009", "prod_014", "prod_016"],
  },
  {
    id: "prod_003", name: "Dusty Rose Ruched Top", category: "tops", price: 799, originalPrice: 1199, discount: 33,
    images: [
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=600&q=85&fit=crop",
      "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=600&q=85&fit=crop",
    ],
    hoverImage: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=600&q=85&fit=crop",
    colors: [{ name: "Dusty Rose", hex: "#C9748A" }, { name: "White", hex: "#FFFFFF" }, { name: "Black", hex: "#2C2020" }],
    sizes: ["XS", "S", "M", "L"], outOfStockSizes: [], badge: "NEW", rating: 4.6, reviewCount: 178,
    isNew: true, isSale: true, isBestseller: false,
    description: "A chic ruched top with a flattering gathered front detail. Made from soft stretch fabric for all-day comfort.",
    fabric: "92% Cotton, 8% Lycra", care: "Machine wash cold", tags: ["ruched", "casual", "daily"],
    reviews: sampleReviews, relatedProducts: ["prod_004", "prod_006"], completeTheLook: ["prod_010", "prod_013", "prod_017"],
  },
  {
    id: "prod_004", name: "Mauve Puff Sleeve Blouse", category: "tops", price: 899, originalPrice: 899, discount: 0,
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=85&fit=crop",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=85&fit=crop",
    ],
    hoverImage: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=85&fit=crop",
    colors: [{ name: "Mauve", hex: "#E8B4C0" }, { name: "Ivory", hex: "#FFFFF0" }],
    sizes: ["S", "M", "L", "XL"], outOfStockSizes: [], badge: "", rating: 4.7, reviewCount: 89,
    isNew: false, isSale: false, isBestseller: false,
    description: "Romantic puff-sleeve blouse with delicate button detailing. A wardrobe essential that pairs beautifully with everything.",
    fabric: "100% Cotton Poplin", care: "Machine wash, iron medium", tags: ["puff sleeve", "romantic", "workwear"],
    reviews: sampleReviews, relatedProducts: ["prod_003", "prod_006"], completeTheLook: ["prod_010", "prod_011", "prod_018"],
  },
  {
    id: "prod_005", name: "Charcoal A-Line Mini Dress", category: "dresses", price: 1499, originalPrice: 1499, discount: 0,
    images: [
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=85&fit=crop",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=85&fit=crop",
    ],
    hoverImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=85&fit=crop",
    colors: [{ name: "Charcoal", hex: "#2C2020" }, { name: "Deep Rose", hex: "#A0495E" }],
    sizes: ["XS", "S", "M", "L", "XL"], outOfStockSizes: ["XXL"], badge: "NEW", rating: 4.5, reviewCount: 67,
    isNew: true, isSale: false, isBestseller: false,
    description: "A sleek A-line mini dress in sophisticated charcoal. Features a square neckline, structured shoulders, and hidden zip closure.",
    fabric: "68% Polyester, 28% Viscose, 4% Elastane", care: "Dry clean recommended", tags: ["mini", "structured", "evening"],
    reviews: sampleReviews, relatedProducts: ["prod_001", "prod_002"], completeTheLook: ["prod_009", "prod_015", "prod_020"],
  },
  {
    id: "prod_006", name: "Cream Linen Relaxed Shirt", category: "tops", price: 999, originalPrice: 1399, discount: 29,
    images: [
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&q=85&fit=crop",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=85&fit=crop",
    ],
    hoverImage: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=85&fit=crop",
    colors: [{ name: "Cream", hex: "#FDF8F6" }, { name: "Sand", hex: "#C4A882" }],
    sizes: ["S", "M", "L", "XL"], outOfStockSizes: [], badge: "SALE", rating: 4.8, reviewCount: 201,
    isNew: false, isSale: true, isBestseller: true,
    description: "Effortlessly chic oversized linen shirt. Roll up the sleeves, pair with denim or trousers — endless possibilities.",
    fabric: "100% European Linen", care: "Machine wash cold, tumble dry low", tags: ["linen", "relaxed", "summer", "vacation"],
    reviews: sampleReviews, relatedProducts: ["prod_003", "prod_004"], completeTheLook: ["prod_010", "prod_011", "prod_013"],
  },
  {
    id: "prod_007", name: "Rose Co-ord Blazer Set", category: "sets", price: 2499, originalPrice: 3499, discount: 29,
    images: [
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600&q=85&fit=crop",
      "https://images.unsplash.com/photo-1580651315530-69c8e0026377?w=600&q=85&fit=crop",
    ],
    hoverImage: "https://images.unsplash.com/photo-1580651315530-69c8e0026377?w=600&q=85&fit=crop",
    colors: [{ name: "Rose", hex: "#C9748A" }, { name: "Cream", hex: "#FDF8F6" }],
    sizes: ["S", "M", "L", "XL"], outOfStockSizes: ["XS"], badge: "BESTSELLER", rating: 4.9, reviewCount: 342,
    isNew: false, isSale: true, isBestseller: true,
    description: "Power dressing meets feminine elegance. This co-ord blazer and trouser set is perfect for the boardroom or a night out.",
    fabric: "Crepe Suiting", care: "Dry clean only", tags: ["co-ord", "blazer", "power", "workwear"],
    reviews: sampleReviews, relatedProducts: ["prod_008", "prod_009"], completeTheLook: ["prod_004", "prod_014", "prod_019"],
  },
  {
    id: "prod_008", name: "Blush Crop Top & Skirt Set", category: "sets", price: 1799, originalPrice: 2299, discount: 22,
    images: [
      "https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?w=600&q=85&fit=crop",
      "https://images.unsplash.com/photo-1631947430066-48c30d57b943?w=600&q=85&fit=crop",
    ],
    hoverImage: "https://images.unsplash.com/photo-1631947430066-48c30d57b943?w=600&q=85&fit=crop",
    colors: [{ name: "Blush", hex: "#F5D6D6" }, { name: "Sage", hex: "#B2BFA8" }],
    sizes: ["XS", "S", "M", "L"], outOfStockSizes: [], badge: "NEW", rating: 4.7, reviewCount: 156,
    isNew: true, isSale: true, isBestseller: false,
    description: "A dreamy crop top and midi skirt set in soft blush. The fitted top pairs perfectly with the flowing A-line skirt.",
    fabric: "100% Rayon", care: "Hand wash cold", tags: ["co-ord", "crop", "skirt", "festive"],
    reviews: sampleReviews, relatedProducts: ["prod_007", "prod_009"], completeTheLook: ["prod_014", "prod_016", "prod_020"],
  },
  {
    id: "prod_009", name: "Deep Rose Palazzo Set", category: "sets", price: 1999, originalPrice: 1999, discount: 0,
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=85&fit=crop",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=85&fit=crop",
    ],
    hoverImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=85&fit=crop",
    colors: [{ name: "Deep Rose", hex: "#A0495E" }, { name: "Charcoal", hex: "#2C2020" }],
    sizes: ["S", "M", "L", "XL", "XXL"], outOfStockSizes: [], badge: "", rating: 4.6, reviewCount: 98,
    isNew: false, isSale: false, isBestseller: false,
    description: "Elegant palazzo set featuring a structured top and wide-leg palazzo pants. Sophisticated comfort for any occasion.",
    fabric: "Georgette", care: "Hand wash, drip dry", tags: ["palazzo", "elegant", "festive"],
    reviews: sampleReviews, relatedProducts: ["prod_007", "prod_008"], completeTheLook: ["prod_014", "prod_019", "prod_020"],
  },
  {
    id: "prod_010", name: "Taupe Wide Leg Trousers", category: "bottoms", price: 1099, originalPrice: 1099, discount: 0,
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4b4d4a?w=600&q=85&fit=crop",
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=85&fit=crop",
    ],
    hoverImage: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=85&fit=crop",
    colors: [{ name: "Taupe", hex: "#8A7070" }, { name: "Black", hex: "#2C2020" }],
    sizes: ["XS", "S", "M", "L", "XL"], outOfStockSizes: [], badge: "", rating: 4.7, reviewCount: 176,
    isNew: false, isSale: false, isBestseller: false,
    description: "Classic wide-leg trousers with a high waist and clean front pleat. The perfect foundation for any outfit.",
    fabric: "Polyester Blend", care: "Machine wash cold", tags: ["wide leg", "trousers", "workwear", "casual"],
    reviews: sampleReviews, relatedProducts: ["prod_011", "prod_013"], completeTheLook: ["prod_003", "prod_004", "prod_006"],
  },
  {
    id: "prod_011", name: "Cream Pleated Midi Skirt", category: "bottoms", price: 1199, originalPrice: 1599, discount: 25,
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=85&fit=crop",
      "https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=600&q=85&fit=crop",
    ],
    hoverImage: "https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=600&q=85&fit=crop",
    colors: [{ name: "Cream", hex: "#FDF8F6" }, { name: "Blush", hex: "#F5D6D6" }],
    sizes: ["XS", "S", "M", "L"], outOfStockSizes: [], badge: "SALE", rating: 4.8, reviewCount: 210,
    isNew: false, isSale: true, isBestseller: true,
    description: "A flowing pleated midi skirt in cream. The elegant accordion pleats create beautiful movement with every step.",
    fabric: "Chiffon", care: "Hand wash, hang dry", tags: ["pleated", "midi", "elegant"],
    reviews: sampleReviews, relatedProducts: ["prod_010", "prod_013"], completeTheLook: ["prod_003", "prod_004", "prod_006"],
  },
  {
    id: "prod_012", name: "Embroidered Festive Kurta", category: "festive", price: 1899, originalPrice: 2499, discount: 24,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=85&fit=crop",
      "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=600&q=85&fit=crop",
    ],
    hoverImage: "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=600&q=85&fit=crop",
    colors: [{ name: "Mauve", hex: "#E8B4C0" }, { name: "Gold", hex: "#C4A882" }],
    sizes: ["S", "M", "L", "XL", "XXL"], outOfStockSizes: [], badge: "NEW", rating: 4.9, reviewCount: 287,
    isNew: true, isSale: true, isBestseller: false,
    description: "Intricately embroidered kurta with threadwork detailing on the neckline and sleeves. Perfect for festivals and celebrations.",
    fabric: "Cotton Silk Blend", care: "Dry clean recommended", tags: ["festive", "kurta", "embroidered", "ethnic"],
    reviews: sampleReviews, relatedProducts: ["prod_013", "prod_014"], completeTheLook: ["prod_010", "prod_019", "prod_020"],
  },
  {
    id: "prod_013", name: "Gold Sequin Sharara Set", category: "festive", price: 2799, originalPrice: 3999, discount: 30,
    images: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=85&fit=crop",
      "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=600&q=85&fit=crop",
    ],
    hoverImage: "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=600&q=85&fit=crop",
    colors: [{ name: "Gold", hex: "#C4A882" }, { name: "Deep Rose", hex: "#A0495E" }],
    sizes: ["S", "M", "L", "XL"], outOfStockSizes: ["XS"], badge: "BESTSELLER", rating: 4.9, reviewCount: 398,
    isNew: false, isSale: true, isBestseller: true,
    description: "Show-stopping sequin sharara set with a fitted kurta top and flared sharara pants. Turn heads at every celebration.",
    fabric: "Georgette with Sequin Work", care: "Dry clean only", tags: ["sharara", "sequin", "party", "festive"],
    reviews: sampleReviews, relatedProducts: ["prod_012", "prod_014"], completeTheLook: ["prod_019", "prod_020", "prod_016"],
  },
  {
    id: "prod_014", name: "Pearl Drop Earrings", category: "accessories", price: 499, originalPrice: 499, discount: 0,
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=85&fit=crop",
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=85&fit=crop",
    ],
    hoverImage: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=85&fit=crop",
    colors: [{ name: "Pearl", hex: "#F5F0E8" }, { name: "Gold", hex: "#C4A882" }],
    sizes: ["One Size"], outOfStockSizes: [], badge: "", rating: 4.5, reviewCount: 89,
    isNew: false, isSale: false, isBestseller: false,
    description: "Delicate pearl drop earrings with a gold-plated base. A timeless accessory that elevates any look.",
    fabric: "Gold-plated brass, freshwater pearls", care: "Store in pouch, avoid moisture", tags: ["earrings", "pearl", "accessories"],
    reviews: sampleReviews, relatedProducts: ["prod_016", "prod_019"], completeTheLook: ["prod_001", "prod_002", "prod_012"],
  },
  {
    id: "prod_015", name: "Velvet Bodycon Mini Dress", category: "dresses", price: 1699, originalPrice: 2299, discount: 26,
    images: [
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&q=85&fit=crop",
      "https://images.unsplash.com/photo-1570976447640-ac859083963f?w=600&q=85&fit=crop",
    ],
    hoverImage: "https://images.unsplash.com/photo-1570976447640-ac859083963f?w=600&q=85&fit=crop",
    colors: [{ name: "Deep Rose", hex: "#A0495E" }, { name: "Black", hex: "#2C2020" }],
    sizes: ["XS", "S", "M", "L"], outOfStockSizes: [], badge: "NEW", rating: 4.7, reviewCount: 145,
    isNew: true, isSale: true, isBestseller: false,
    description: "A show-stopping velvet bodycon mini dress. The rich texture and body-hugging fit make this perfect for nights out.",
    fabric: "Stretch Velvet", care: "Hand wash cold, do not wring", tags: ["velvet", "bodycon", "party", "evening"],
    reviews: sampleReviews, relatedProducts: ["prod_001", "prod_005"], completeTheLook: ["prod_014", "prod_016", "prod_020"],
  },
  {
    id: "prod_016", name: "Statement Chain Necklace", category: "accessories", price: 699, originalPrice: 699, discount: 0,
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=85&fit=crop",
      "https://images.unsplash.com/photo-1601121141461-9d6647bef0a1?w=600&q=85&fit=crop",
    ],
    hoverImage: "https://images.unsplash.com/photo-1601121141461-9d6647bef0a1?w=600&q=85&fit=crop",
    colors: [{ name: "Gold", hex: "#C4A882" }, { name: "Silver", hex: "#C0C0C0" }],
    sizes: ["One Size"], outOfStockSizes: [], badge: "", rating: 4.4, reviewCount: 56,
    isNew: false, isSale: false, isBestseller: false,
    description: "Bold statement chain necklace that instantly transforms any outfit. Chunky links in a flattering length.",
    fabric: "Gold-plated stainless steel", care: "Avoid contact with perfume", tags: ["necklace", "chain", "statement"],
    reviews: sampleReviews, relatedProducts: ["prod_014", "prod_019"], completeTheLook: ["prod_002", "prod_005", "prod_015"],
  },
  {
    id: "prod_017", name: "Floral Print Maxi Dress", category: "dresses", price: 1799, originalPrice: 1799, discount: 0,
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=85&fit=crop",
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=600&q=85&fit=crop",
    ],
    hoverImage: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=600&q=85&fit=crop",
    colors: [{ name: "Blush Floral", hex: "#F5D6D6" }, { name: "Blue Floral", hex: "#A8C4D9" }],
    sizes: ["XS", "S", "M", "L", "XL"], outOfStockSizes: [], badge: "", rating: 4.6, reviewCount: 123,
    isNew: false, isSale: false, isBestseller: false,
    description: "A romantic floral print maxi dress with a tiered skirt and smocked bodice. Perfect for garden parties and vacations.",
    fabric: "100% Cotton Voile", care: "Machine wash cold, gentle", tags: ["floral", "maxi", "romantic", "vacation"],
    reviews: sampleReviews, relatedProducts: ["prod_001", "prod_002"], completeTheLook: ["prod_014", "prod_016", "prod_019"],
  },
  {
    id: "prod_018", name: "Ribbed Knit Cardigan", category: "tops", price: 1299, originalPrice: 1299, discount: 0,
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=85&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=85&fit=crop",
    ],
    hoverImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=85&fit=crop",
    colors: [{ name: "Cream", hex: "#FDF8F6" }, { name: "Mauve", hex: "#E8B4C0" }, { name: "Charcoal", hex: "#2C2020" }],
    sizes: ["S", "M", "L", "XL"], outOfStockSizes: [], badge: "", rating: 4.8, reviewCount: 167,
    isNew: false, isSale: false, isBestseller: true,
    description: "A cozy ribbed knit cardigan with pearl button closure. Layer it over everything for an instant style upgrade.",
    fabric: "Cotton Acrylic Blend", care: "Hand wash, lay flat to dry", tags: ["cardigan", "knit", "layering"],
    reviews: sampleReviews, relatedProducts: ["prod_003", "prod_004"], completeTheLook: ["prod_010", "prod_011", "prod_001"],
  },
  {
    id: "prod_019", name: "Structured Mini Tote Bag", category: "accessories", price: 899, originalPrice: 1299, discount: 31,
    images: [
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&q=85&fit=crop",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=85&fit=crop",
    ],
    hoverImage: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=85&fit=crop",
    colors: [{ name: "Blush", hex: "#F5D6D6" }, { name: "Black", hex: "#2C2020" }, { name: "Cream", hex: "#FDF8F6" }],
    sizes: ["One Size"], outOfStockSizes: [], badge: "SALE", rating: 4.6, reviewCount: 203,
    isNew: false, isSale: true, isBestseller: false,
    description: "A structured mini tote bag with clean lines and gold hardware. Fits your essentials with effortless style.",
    fabric: "Vegan Leather", care: "Wipe clean with damp cloth", tags: ["bag", "tote", "structured"],
    reviews: sampleReviews, relatedProducts: ["prod_014", "prod_016"], completeTheLook: ["prod_001", "prod_007", "prod_005"],
  },
  {
    id: "prod_020", name: "Silk Hair Scarf", category: "accessories", price: 399, originalPrice: 399, discount: 0,
    images: [
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&q=85&fit=crop",
      "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=600&q=85&fit=crop",
    ],
    hoverImage: "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=600&q=85&fit=crop",
    colors: [{ name: "Rose Print", hex: "#C9748A" }, { name: "Cream Print", hex: "#FDF8F6" }],
    sizes: ["One Size"], outOfStockSizes: [], badge: "", rating: 4.3, reviewCount: 78,
    isNew: false, isSale: false, isBestseller: false,
    description: "A luxurious silk hair scarf with a beautiful print. Tie it in your hair, on your bag, or around your neck.",
    fabric: "100% Mulberry Silk", care: "Hand wash cold, air dry", tags: ["scarf", "silk", "hair accessory"],
    reviews: sampleReviews, relatedProducts: ["prod_014", "prod_016"], completeTheLook: ["prod_001", "prod_017", "prod_012"],
  },
];

export const categories = [
  { slug: "dresses",     name: "Dresses",      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=300&q=85&fit=crop&crop=center" },
  { slug: "tops",        name: "Tops",          image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=300&q=85&fit=crop&crop=center" },
  { slug: "sets",        name: "Co-ord Sets",   image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=300&q=85&fit=crop&crop=center" },
  { slug: "bottoms",     name: "Bottoms",       image: "https://tse3.mm.bing.net/th/id/OIP.PI-6yzyDmVURa2fxFrQjHAHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { slug: "festive",     name: "Festive",       image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=300&q=85&fit=crop&crop=center" },
  { slug: "accessories", name: "Accessories",   image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&q=85&fit=crop&crop=center" },
];

export const getProductById        = (id: string)  => products.find((p) => p.id === id);
export const getProductsByCategory = (cat: string) => products.filter((p) => p.category === cat);
export const getNewArrivals        = ()             => products.filter((p) => p.isNew);
export const getBestsellers        = ()             => products.filter((p) => p.isBestseller);
export const getSaleProducts       = ()             => products.filter((p) => p.isSale);
