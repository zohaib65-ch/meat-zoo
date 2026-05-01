export const siteData = {
  brandName: "Meat Zoo",
  whatsappNumber: "923242024403",
  phoneDisplay: "+92 324 202 4430",
  address: "23 Farmhouse Road, Model Town, Lahore",
};

export const createWhatsAppLink = (message: string) => `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(message)}`;
