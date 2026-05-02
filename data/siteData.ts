export const siteData = {
  brandName: "Meat Zoo",
  whatsappNumber: "923001772026",
  phoneDisplay: "+92 300 177 2026",
  address: "Bhaiwala Road Near Faislabad Pakwan Center Nishatabad, Faisalabad, Pakistan",
};

export const createWhatsAppLink = (message: string) => `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(message)}`;
