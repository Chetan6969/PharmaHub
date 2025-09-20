import zerodolPImg from "@/assets/zerodol-p-real.jpg";
import kuffdrylImg from "@/assets/kuffdryl-real.jpg";
import crocinImg from "@/assets/crocin-real.jpg";
import dettolImg from "@/assets/dettol-real.jpg";
import neemFacewashImg from "@/assets/himalaya-neem-real.jpg";
import iodexImg from "@/assets/iodex-real.jpg";
import honeyImg from "@/assets/dabur-honey-real.jpg";
import genericImg from "@/assets/mixed-medicines-real.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  buildDate: string;
  expiryDate: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Zerodol-P Tablet",
    price: 70,
    image: zerodolPImg,
    category: "Pain Relief",
    description: "Effective pain and inflammation relief for joints and muscles",
    buildDate: "2024-01-15",
    expiryDate: "2026-01-14"
  },
  {
    id: 2,
    name: "Zerodol-SP Tablet",
    price: 149,
    image: genericImg,
    category: "Pain Relief",
    description: "Advanced formula for severe pain and inflammation management",
    buildDate: "2024-02-10",
    expiryDate: "2026-02-09"
  },
  {
    id: 3,
    name: "Kuffdryl Syrup",
    price: 127,
    image: kuffdrylImg,
    category: "Cough & Cold",
    description: "Effective cough suppressant and expectorant for all ages",
    buildDate: "2024-01-20",
    expiryDate: "2025-01-19"
  },
  {
    id: 4,
    name: "Cheston Cold Tablet",
    price: 48,
    image: genericImg,
    category: "Cough & Cold",
    description: "Complete cold relief with antihistamine and decongestant",
    buildDate: "2024-03-05",
    expiryDate: "2026-03-04"
  },
  {
    id: 5,
    name: "Crocin Tablet",
    price: 20,
    image: crocinImg,
    category: "Pain Relief",
    description: "Trusted fever and pain relief for the whole family",
    buildDate: "2024-02-28",
    expiryDate: "2026-02-27"
  },
  {
    id: 6,
    name: "Cyclopam Tablet",
    price: 63,
    image: genericImg,
    category: "Digestive",
    description: "Effective antispasmodic for abdominal pain and cramps",
    buildDate: "2024-01-10",
    expiryDate: "2025-12-31"
  },
  {
    id: 7,
    name: "Orasore Gel",
    price: 85,
    image: genericImg,
    category: "Oral Care",
    description: "Soothing gel for mouth ulcers and oral pain relief",
    buildDate: "2024-02-15",
    expiryDate: "2025-08-14"
  },
  {
    id: 8,
    name: "Pet Safa Churn",
    price: 125,
    image: genericImg,
    category: "Digestive",
    description: "Natural digestive powder for stomach problems and acidity",
    buildDate: "2024-01-05",
    expiryDate: "2025-01-04"
  },
  {
    id: 9,
    name: "Sharifon Tablet",
    price: 50,
    image: genericImg,
    category: "General Health",
    description: "Ayurvedic formulation for general wellness and immunity",
    buildDate: "2024-02-20",
    expiryDate: "2025-11-19"
  },
  {
    id: 10,
    name: "Disprin Tablet",
    price: 10,
    image: genericImg,
    category: "Pain Relief",
    description: "Fast-acting aspirin for quick pain and fever relief",
    buildDate: "2024-03-01",
    expiryDate: "2026-02-28"
  },
  {
    id: 11,
    name: "CALPOL Tablet",
    price: 15,
    image: genericImg,
    category: "Pain Relief",
    description: "Gentle paracetamol for children and adults fever relief",
    buildDate: "2024-02-10",
    expiryDate: "2026-02-09"
  },
  {
    id: 12,
    name: "Glycerine",
    price: 60,
    image: genericImg,
    category: "Skin Care",
    description: "Pure glycerine for skin moisturizing and care",
    buildDate: "2024-01-15",
    expiryDate: "2025-07-14"
  },
  {
    id: 13,
    name: "Dettol Solution",
    price: 238,
    image: dettolImg,
    category: "Antiseptic",
    description: "Trusted antiseptic for wound cleaning and disinfection",
    buildDate: "2024-01-08",
    expiryDate: "2025-07-07"
  },
  {
    id: 14,
    name: "Himalaya Neem Facewash",
    price: 65,
    image: neemFacewashImg,
    category: "Skin Care",
    description: "Natural neem facewash for acne-prone and oily skin",
    buildDate: "2024-02-05",
    expiryDate: "2025-08-04"
  },
  {
    id: 15,
    name: "Clean & Care Facewash",
    price: 174,
    image: genericImg,
    category: "Skin Care",
    description: "Advanced formula facewash for deep cleansing and care",
    buildDate: "2024-01-25",
    expiryDate: "2025-07-24"
  },
  {
    id: 16,
    name: "AP Balm",
    price: 35,
    image: genericImg,
    category: "Pain Relief",
    description: "Traditional pain relief balm for muscular aches",
    buildDate: "2024-02-12",
    expiryDate: "2025-08-11"
  },
  {
    id: 17,
    name: "Iodex Balm",
    price: 92,
    image: iodexImg,
    category: "Pain Relief",
    description: "Effective pain relief balm for sprains and muscular pain",
    buildDate: "2024-01-30",
    expiryDate: "2025-07-29"
  },
  {
    id: 18,
    name: "Dabur Honey",
    price: 45,
    image: honeyImg,
    category: "Health Supplements",
    description: "Pure and natural honey for immunity and wellness",
    buildDate: "2024-01-12",
    expiryDate: "2025-07-11"
  },
  {
    id: 19,
    name: "Hajmola",
    price: 70,
    image: genericImg,
    category: "Digestive",
    description: "Digestive tablets for better digestion and appetite",
    buildDate: "2024-02-08",
    expiryDate: "2025-08-07"
  },
  {
    id: 20,
    name: "Gulabari Rose Water",
    price: 20,
    image: genericImg,
    category: "Skin Care",
    description: "Natural rose water for skin toning and refreshing",
    buildDate: "2024-01-18",
    expiryDate: "2025-07-17"
  },
  {
    id: 21,
    name: "Figaro Olive Oil",
    price: 225,
    image: genericImg,
    category: "Health Supplements",
    description: "Extra virgin olive oil for cooking and health benefits",
    buildDate: "2024-01-22",
    expiryDate: "2025-07-21"
  },
  {
    id: 22,
    name: "Cetaphil Cleanser",
    price: 429,
    image: genericImg,
    category: "Skin Care",
    description: "Gentle daily facial cleanser for sensitive skin",
    buildDate: "2024-02-01",
    expiryDate: "2025-08-01"
  },
  {
    id: 23,
    name: "Dabur Chyawanprash",
    price: 374,
    image: genericImg,
    category: "Health Supplements",
    description: "Ayurvedic immunity booster with herbs and nutrients",
    buildDate: "2024-01-14",
    expiryDate: "2025-07-13"
  },
  {
    id: 24,
    name: "Sensodent KF",
    price: 136,
    image: genericImg,
    category: "Oral Care",
    description: "Specialized toothpaste for sensitive teeth care",
    buildDate: "2024-02-18",
    expiryDate: "2025-08-17"
  },
  {
    id: 25,
    name: "Sensodyn",
    price: 140,
    image: genericImg,
    category: "Oral Care",
    description: "Advanced formula for sensitive teeth protection",
    buildDate: "2024-01-28",
    expiryDate: "2025-07-27"
  },
  {
    id: 26,
    name: "ENO",
    price: 10,
    image: genericImg,
    category: "Digestive",
    description: "Instant relief from acidity and indigestion",
    buildDate: "2024-03-02",
    expiryDate: "2026-03-01"
  },
  {
    id: 27,
    name: "Zandu Balm",
    price: 50,
    image: genericImg,
    category: "Pain Relief",
    description: "Ayurvedic pain relief balm for headaches and body aches",
    buildDate: "2024-02-14",
    expiryDate: "2025-08-13"
  },
  {
    id: 28,
    name: "Himalaya Baby Cream",
    price: 140,
    image: genericImg,
    category: "Baby Care",
    description: "Gentle moisturizing cream for baby's delicate skin",
    buildDate: "2024-01-11",
    expiryDate: "2025-07-10"
  },
  {
    id: 29,
    name: "Acne Star Facewash",
    price: 125,
    image: genericImg,
    category: "Skin Care",
    description: "Specialized facewash for acne treatment and prevention",
    buildDate: "2024-02-07",
    expiryDate: "2025-08-06"
  },
  {
    id: 30,
    name: "Acne Star Soap",
    price: 110,
    image: genericImg,
    category: "Skin Care",
    description: "Medicated soap for acne-prone skin cleansing",
    buildDate: "2024-01-26",
    expiryDate: "2025-07-25"
  },
  {
    id: 31,
    name: "Clinsol Facewash",
    price: 170,
    image: genericImg,
    category: "Skin Care",
    description: "Clinical formula facewash for deep pore cleansing",
    buildDate: "2024-02-11",
    expiryDate: "2025-08-10"
  },
  {
    id: 32,
    name: "D3 Capsule",
    price: 137,
    image: genericImg,
    category: "Vitamins",
    description: "Vitamin D3 supplement for bone health and immunity",
    buildDate: "2024-01-17",
    expiryDate: "2025-07-16"
  },
  {
    id: 33,
    name: "Limcee Vitamin",
    price: 25,
    image: genericImg,
    category: "Vitamins",
    description: "Vitamin C tablets for immune system support",
    buildDate: "2024-02-25",
    expiryDate: "2026-02-24"
  },
  {
    id: 34,
    name: "EVEION Vitamin E",
    price: 45,
    image: genericImg,
    category: "Vitamins",
    description: "Vitamin E capsules for skin and heart health",
    buildDate: "2024-01-21",
    expiryDate: "2025-07-20"
  },
  {
    id: 35,
    name: "ORS",
    price: 25,
    image: genericImg,
    category: "Digestive",
    description: "Oral rehydration salts for dehydration treatment",
    buildDate: "2024-02-29",
    expiryDate: "2026-02-28"
  },
  {
    id: 36,
    name: "Electral",
    price: 25,
    image: genericImg,
    category: "Digestive",
    description: "Electrolyte replacement solution for hydration",
    buildDate: "2024-03-03",
    expiryDate: "2026-03-02"
  },
  {
    id: 37,
    name: "Rumalya Active Spray",
    price: 60,
    image: genericImg,
    category: "Pain Relief",
    description: "Herbal pain relief spray for joint and muscle pain",
    buildDate: "2024-01-24",
    expiryDate: "2025-07-23"
  },
  {
    id: 38,
    name: "Omnigel Spray",
    price: 144,
    image: genericImg,
    category: "Pain Relief",
    description: "Topical pain relief gel spray for inflammation",
    buildDate: "2024-02-06",
    expiryDate: "2025-08-05"
  },
  {
    id: 39,
    name: "MOVE SPRAY",
    price: 186,
    image: genericImg,
    category: "Pain Relief",
    description: "Advanced pain relief spray for mobility support",
    buildDate: "2024-01-13",
    expiryDate: "2025-07-12"
  },
  {
    id: 40,
    name: "VOLINI SPRAY",
    price: 83,
    image: genericImg,
    category: "Pain Relief",
    description: "Fast-acting pain relief spray for muscles and joints",
    buildDate: "2024-02-16",
    expiryDate: "2025-08-15"
  },
  {
    id: 41,
    name: "ZINCOVIT Syrup",
    price: 180,
    image: genericImg,
    category: "Vitamins",
    description: "Multivitamin syrup with zinc for overall health",
    buildDate: "2024-01-09",
    expiryDate: "2025-07-08"
  },
  {
    id: 42,
    name: "B White Gel Facewash",
    price: 166,
    image: genericImg,
    category: "Skin Care",
    description: "Brightening gel facewash for radiant skin",
    buildDate: "2024-02-22",
    expiryDate: "2025-08-21"
  },
  {
    id: 43,
    name: "CETAPHIL Moisturising Lotion",
    price: 483,
    image: genericImg,
    category: "Skin Care",
    description: "Gentle moisturizing lotion for dry and sensitive skin",
    buildDate: "2024-01-06",
    expiryDate: "2025-07-05"
  },
  {
    id: 44,
    name: "EVEION Cream",
    price: 230,
    image: genericImg,
    category: "Skin Care",
    description: "Vitamin E enriched moisturizing cream for skin care",
    buildDate: "2024-02-13",
    expiryDate: "2025-08-12"
  },
  {
    id: 45,
    name: "Honitus Syrup",
    price: 130,
    image: genericImg,
    category: "Cough & Cold",
    description: "Herbal cough syrup for dry and wet cough relief",
    buildDate: "2024-01-19",
    expiryDate: "2025-07-18"
  },
  {
    id: 46,
    name: "Betadine Gargle",
    price: 203,
    image: genericImg,
    category: "Oral Care",
    description: "Antiseptic gargle solution for throat infections",
    buildDate: "2024-02-04",
    expiryDate: "2025-08-03"
  },
  {
    id: 47,
    name: "Cipladine Ointment",
    price: 100,
    image: genericImg,
    category: "Antiseptic",
    description: "Antiseptic ointment for wound healing and protection",
    buildDate: "2024-01-16",
    expiryDate: "2025-07-15"
  }
];

export const categories = [
  "All",
  "Pain Relief",
  "Cough & Cold",
  "Digestive",
  "Skin Care",
  "Antiseptic",
  "Oral Care",
  "General Health",
  "Health Supplements",
  "Vitamins",
  "Baby Care"
];