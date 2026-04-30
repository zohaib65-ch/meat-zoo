export const siteData = {
  brandName: "Meat Zoo",
  whatsappNumber: "923001112233",
  phoneDisplay: "+92 300 111 2233",
  address: "23 Farmhouse Road, Model Town, Lahore",
};

export const createWhatsAppLink = (message: string) => `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(message)}`;
