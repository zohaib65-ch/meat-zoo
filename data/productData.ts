export type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
};

export const productData: Product[] = [
  {
    id: "whole-chicken",
    name: "Whole Farm Chicken",
    price: "Rs 1,450",
    image: "/products/whole-chicken.svg",
    description: "Fresh, tender, and perfect for roasting or grilling.",
  },
  {
    id: "boneless-breast",
    name: "Boneless Chicken Breast",
    price: "Rs 1,250",
    image: "/products/boneless-breast.svg",
    description: "Lean, juicy fillets ideal for quick healthy meals.",
  },
  {
    id: "chicken-mince",
    name: "Chicken Mince",
    price: "Rs 980",
    image: "/products/chicken-mince.svg",
    description: "Fine mince for kebabs, patties, and spicy dishes.",
  },
  {
    id: "chicken-wings",
    name: "Crispy Chicken Wings",
    price: "Rs 1,100",
    image: "/products/chicken-wings.svg",
    description: "Flavor-packed wings ready for frying or baking.",
  },
];
