import clothe1 from "@/src/shared/images/clothe1.png";
import clothe12 from "@/src/shared/images/clothe12.png";
import clothe2 from "@/src/shared/images/clothe2.png";
import clothe3 from "@/src/shared/images/clothe3.png";
import clothe4 from "@/src/shared/images/clothe4.png";
import toy1 from "@/src/shared/images/toy1.png";
import toy2 from "@/src/shared/images/toy2.png";
import toy3 from "@/src/shared/images/toy3.png";
import toy4 from "@/src/shared/images/toy4.png";
import leashe1 from "@/src/shared/images/leashe1.png";
import leashe2 from "@/src/shared/images/leashe2.png";
import leashe3 from "@/src/shared/images/leashe3.png";
import leashe4 from "@/src/shared/images/leashe4.png";
import { StaticImageData } from "next/image";

export interface Product {
  id: string;
  name: string;
  category: "clothes" | "toys" | "leashes";
  price: number;
  image: StaticImageData;
  description: string;
  sizes: string[];
  featured?: boolean;
}

// Default fallback image for products
export const DEFAULT_PRODUCT_IMAGE =
  "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800";

export const products: Product[] = [
  // Clothes
  {
    id: "1",
    name: "Cozy Winter Sweater",
    category: "clothes",
    price: 39.99,
    image: clothe1,
    description:
      "Keep your furry friend warm and stylish with our cozy winter sweater. Made from soft, breathable fabric that provides comfort during cold weather walks.",
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: true,
  },
  {
    id: "2",
    name: "Waterproof Raincoat",
    category: "clothes",
    price: 45.99,
    image: clothe2,
    description:
      "Premium waterproof jacket to keep your dog dry during rainy walks. Features reflective strips for safety and adjustable straps for perfect fit.",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "3",
    name: "Breathable Summer Vest",
    category: "clothes",
    price: 24.99,
    image: clothe12,
    description:
      "Lightweight, breathable vest perfect for summer adventures. Made from moisture-wicking fabric to keep your dog cool and comfortable.",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "4",
    name: "Elegant Bow Tie Collar",
    category: "clothes",
    price: 19.99,
    image: clothe4,
    description:
      "Sophisticated bow tie collar for special occasions. Adjustable design with premium materials for comfort and style.",
    sizes: ["XS", "S", "M", "L", "XL"],
  },

  // Toys
  {
    id: "5",
    name: "Interactive Squeaky Ball",
    category: "toys",
    price: 12.99,
    image: toy1,
    description:
      "Durable rubber ball with engaging squeaker. Perfect for fetch, interactive play, and keeping your dog entertained for hours.",
    sizes: ["Small", "Medium", "Large"],
    featured: true,
  },
  {
    id: "6",
    name: "Natural Rope Toy",
    category: "toys",
    price: 15.99,
    image: toy2,
    description:
      "Hand-braided natural cotton rope toy. Great for tug-of-war, chewing, and helps maintain dental health naturally.",
    sizes: ["Small", "Large"],
  },
  {
    id: "7",
    name: "Soft Plush Companion",
    category: "toys",
    price: 18.99,
    image: toy3,
    description:
      "Ultra-soft plush toy perfect for cuddling and gentle play. Machine washable and made with pet-safe materials.",
    sizes: ["One Size"],
  },
  {
    id: "8",
    name: "Brain Training Puzzle",
    category: "toys",
    price: 29.99,
    image: toy4,
    description:
      "Advanced puzzle toy for mental stimulation. Dispenses treats as your dog solves challenges, promoting cognitive development.",
    sizes: ["One Size"],
    featured: true,
  },

  // Leashes
  {
    id: "9",
    name: "Premium Leather Leash",
    category: "leashes",
    price: 34.99,
    image: leashe1,
    description:
      "Handcrafted leather leash that improves with age. Features comfortable padded handle and solid brass hardware for durability.",
    sizes: ["4ft", "6ft"],
    featured: true,
  },
  {
    id: "10",
    name: "Retractable Freedom Leash",
    category: "leashes",
    price: 42.99,
    image: leashe2,
    description:
      "Advanced retractable leash with smooth brake system. Extends up to 16 feet, giving your dog freedom while maintaining control.",
    sizes: ["Small Dogs", "Large Dogs"],
  },
  {
    id: "11",
    name: "Safety Reflective Leash",
    category: "leashes",
    price: 28.99,
    image: leashe3,
    description:
      "High-visibility reflective leash for safe evening walks. Features 360-degree reflective stitching and comfortable grip handle.",
    sizes: ["4ft", "6ft"],
  },
  {
    id: "12",
    name: "Professional Training Leash",
    category: "leashes",
    price: 25.99,
    image: leashe4,
    description:
      "Extra-long training leash for recall practice and obedience training. Lightweight yet strong, perfect for professional trainers.",
    sizes: ["15ft", "30ft"],
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "all") return products;
  return products.filter((product) => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.featured);
};
