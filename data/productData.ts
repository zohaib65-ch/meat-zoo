export type ProductCategory = "chicken" | "beef" | "mutton";

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: ProductCategory;
};

export const productData: Product[] = [
  {
    id: "biryani-cuts",
    name: "Chicken Biryani Cuts",
    price: 899,
    image: "/products/biryani-cuts.jpeg",
    description: "Special cuts made for rich, tasty biryani.",
    category: "chicken",
  },
  {
    id: "chest-tikka",
    name: "Chicken Chest Tikka",
    price: 1249,
    image: "/products/chest-tikka.jpeg",
    description: "Tender chicken breast pieces perfect for tikka",
    category: "chicken",
  },
  {
    id: "drumsticks",
    name: "Chicken Drumsticks",
    price: 875,
    image: "/products/drumsticks.jpeg",
    description: "Juicy drumsticks perfect for frying or BBQ.",
    category: "chicken",
  },
  {
    id: "karahi-cuts",
    name: "Chicken Karahi Cuts",
    price: 889,
    image: "/products/karahi-cuts.jpeg",
    description: "Fresh cuts perfect for traditional chicken karahi.",
    category: "chicken",
  },
  {
    id: "leg-tikka",
    name: "Chicken Leg Tikka",
    price: 949,
    image: "/products/leg-tikka.jpeg",
    description: "Tender chicken leg pieces perfect for tikka.",
    category: "chicken",
  },
  {
    id: "lolipop",
    name: "Chicken Lolipop",
    price: 949,
    image: "/products/lolipop.jpeg",
    description: "Crispy chicken lolipops ideal for snacks",
    category: "chicken",
  },
  {
    id: "neck",
    name: "Chicken Neck",
    price: 499,
    image: "/products/neck.jpeg",
    description: "Flavorful neck pieces perfect for soups and curry.",
    category: "chicken",
  },
  {
    id: "whole-chicken",
    name: "Whole Chicken",
    price: 889,
    image: "/products/whole-chicken.jpeg",
    description: "Fresh whole chicken, perfect for roasting or curries.",
    category: "chicken",
  },
  {
    id: "wings",
    name: "Chicken Wings",
    price: 799,
    image: "/products/wings.jpeg",
    description: "Juicy wings perfect for frying or BBQ.",
    category: "chicken",
  },
];
