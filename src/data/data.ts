import { productImgs } from "@/contains/fakeData";
import productVariantImg2 from "@/images/products/v2.jpg";
import productVariantImg3 from "@/images/products/v3.jpg";
import productVariantImg4 from "@/images/products/v4.jpg";
import productVariantImg5 from "@/images/products/v5.jpg";
import productVariantImg6 from "@/images/products/v6.jpg";
//
import productSport1 from "@/images/products/sport-1.png";
import productSport2 from "@/images/products/sport-2.png";
import productSport3 from "@/images/products/sport-3.png";
import productSport4 from "@/images/products/sport-4.png";
import productSport5 from "@/images/products/sport-5.png";
import productSport6 from "@/images/products/sport-6.png";
import productSport7 from "@/images/products/sport-7.png";
import productSport8 from "@/images/products/sport-8.png";
import { StaticImageData } from "next/image";

//

export interface ProductVariant {
  id: number;
  name: string;
  thumbnail?: StaticImageData | string;
  color?: string;
  featuredImage: StaticImageData | string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: StaticImageData | string;
  description: string;
  category: string;
  tags: string[];
  link: "/properties/";
  variants?: ProductVariant[];
  variantType?: "color" | "image";
  sizes?: string[];
  allOfSizes?: string[];
  status?: "New in" | "limited edition" | "Sold Out" | "50% Discount";
  rating?: string;
  numberOfReviews?: number;
}

const DEMO_VARIANTS: ProductVariant[] = [
  {
    id: 1,
    name: "Black",
    thumbnail: productVariantImg6,
    featuredImage: productImgs[0],
  },
  {
    id: 2,
    name: "White",
    thumbnail: productVariantImg2,
    featuredImage: productImgs[1],
  },
  {
    id: 3,
    name: "Orange",
    thumbnail: productVariantImg3,
    featuredImage: productImgs[2],
  },
  {
    id: 4,
    name: "Sky Blue",
    thumbnail: productVariantImg4,
    featuredImage: productImgs[3],
  },
  {
    id: 5,
    name: "Natural",
    thumbnail: productVariantImg5,
    featuredImage: productImgs[4],
  },
];
const DEMO_VARIANT_COLORS: ProductVariant[] = [
  {
    id: 1,
    name: "Violet",
    color: "bg-violet-400",
    featuredImage: productImgs[0],
  },
  {
    id: 2,
    name: "Yellow",
    color: "bg-yellow-400",
    featuredImage: productImgs[1],
  },
  {
    id: 3,
    name: "Orange",
    color: "bg-orange-400",
    featuredImage: productImgs[2],
  },
  {
    id: 4,
    name: "Sky Blue",
    color: "bg-sky-400",
    featuredImage: productImgs[3],
  },
  {
    id: 5,
    name: "Green",
    color: "bg-green-400",
    featuredImage: productImgs[4],
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Villa One Hyde Park",
    description: "148-37 88th Ave, Jamaica, NY 11435",
    price: 215000,
    image: productImgs[16],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/properties/",
    variants: DEMO_VARIANTS,
    variantType: "image",
    // sizes: ["XS", "S", "M", "L", "XL"],
    // allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    status: "New in",
    rating: "4.4",
    numberOfReviews: 98,
  },
  {
    id: 2,
    name: 'Home Pitt Street',
    description: "Classic green",
    price: 149500,
    image: productImgs[1],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/properties/",
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    status: "50% Discount",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 3,
    name: "Archer Hourse",
    description: "New blue aqua",
    price: 132000,
    image: productImgs[15],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/properties/",
    variants: DEMO_VARIANTS,
    variantType: "image",
    // sizes: ["S", "M", "L", "XL"],
    // allOfSizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 4,
    name: "Family House",
    description: "Dark pink 2023",
    price: 289000,
    image: productImgs[3],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    link: "/properties/",
    status: "Sold Out",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 5,
    name: "Luxury Building",
    description: "Perfect mint green",
    price: 426000,
    image: productImgs[4],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANTS,
    variantType: "image",
    // sizes: ["XS", "S", "M", "L", "XL"],
    // allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    link: "/properties/",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 6,
    name: "Business Apartment",
    description: "New design 2023",
    price: 305000,
    image: productImgs[5],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variantType: "color",
    variants: DEMO_VARIANT_COLORS,
    link: "/properties/",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 7,
    name: "Ground House",
    description: "Matte black",
    price: 128000,
    image: productImgs[8],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANTS,
    variantType: "image",
    link: "/properties/",
    status: "New in",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 8,
    name: "Villa bay view",
    description: "Cream pink",
    price: 145000,
    image: productImgs[7],
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variants: DEMO_VARIANTS,
    variantType: "image",
    // sizes: ["XS", "S", "M", "L", "XL"],
    // allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    link: "/properties/",
    status: "limited edition",
    rating: "4.9",
    numberOfReviews: 98,
  },
];

export const SPORT_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Archer House",
    description: "148-37 88th Ave, Jamaica, NY 11435",
    price: 815000,
    image: productSport1,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/properties/",
    // variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    // sizes: ["XS", "S", "M", "L", "XL"],
    // allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    // status: "New in",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 2,
    name: "Villa One Hyde Park",
    description: "148-37 88th Ave, Jamaica, NY 11435",
    price: 815000,
    image: productSport2,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/properties/",
    // variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    // status: "50% Discount",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 3,
    name: "Home Pitt Street",
    description: "148-37 88th Ave, Jamaica, NY 11435",
    price: 815000,
    image: productSport3,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    link: "/properties/",
    // variants: DEMO_VARIANTS,
    variantType: "image",
    // sizes: ["S", "M", "L", "XL"],
    // allOfSizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 4,
    name: "Archer House",
    description: "148-37 88th Ave, Jamaica, NY 11435",
    price: 815000,
    image: productSport4,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    // variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    link: "/properties/",
    status: "Sold Out",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 5,
    name: "Villa One Hyde Park",
    description: "148-37 88th Ave, Jamaica, NY 11435",
    price: 815000,
    image: productSport5,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    // variants: DEMO_VARIANTS,
    variantType: "image",
    // sizes: ["XS", "S", "M", "L", "XL"],
    // allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    link: "/properties/",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 6,
    name: "Archer House",
    description: "148-37 88th Ave, Jamaica, NY 11435",
    price: 815000,
    image: productSport6,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    variantType: "color",
    // variants: DEMO_VARIANT_COLORS,
    link: "/properties/",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 7,
    name: "Villa One Hyde Park",
    description: "148-37 88th Ave, Jamaica, NY 11435",
    price: 815000,
    image: productSport7,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    // variants: DEMO_VARIANTS,
    variantType: "image",
    link: "/properties/",
    status: "New in",
    rating: "4.9",
    numberOfReviews: 98,
  },
  {
    id: 8,
    name: "Archer House",
    description: "148-37 88th Ave, Jamaica, NY 11435",
    price: 815000,
    image: productSport8,
    category: "Category 1",
    tags: ["tag1", "tag2"],
    // variants: DEMO_VARIANT_COLORS,
    variantType: "color",
    // sizes: ["XS", "S", "M", "L", "XL"],
    // allOfSizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    link: "/properties/",
    status: "limited edition",
    rating: "4.9",
    numberOfReviews: 98,
  },
];
