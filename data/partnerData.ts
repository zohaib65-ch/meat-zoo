export type Partner = {
  id: string;
  name: string;
  logo: string;
  description: string;
  location: string;
};

export const partnerData: Partner[] = [
  {
    id: "royal-palate",
    name: "The Royal Palate",
    logo: "/partners/restaurant-1.png",
    location: "Faisalabad",
    description: "A premium fine-dining restaurant that relies on Meat Zoo for their daily supply of fresh, high-quality chicken cuts.",
  },
  {
    id: "spice-garden",
    name: "Spice Garden",
    location: "Faisalabad",
    logo: "/partners/restaurant-2.png",
    description: "A famous desi cuisine spot, partnering with us to ensure every dish is made with the freshest meat.",
  },
  {
    id: "tasty-treats",
    name: "Tasty Treats Cafe",
    location: "Faisalabad",
    logo: "/partners/restaurant-3.png",
    description: "Faisalabad's favorite cafe, serving premium chicken burgers and snacks sourced exclusively from Meat Zoo.",
  },
  {
    id: "urban-grill",
    name: "Urban Grill",
    location: "Faisalabad",
    logo: "/partners/restaurant-4.png",
    description: "Specializing in authentic BBQ and grilled chicken, Urban Grill trusts us for consistent quality and taste.",
  },
];
