import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ReduxProvider } from "@/redux/ReduxProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://meat-zoo.example"),
  title: {
    default: "Meat Zoo | Fresh Chicken Delivered",
    template: "%s | Meat Zoo",
  },
  description: "Modern chicken delivery storefront with premium cuts and direct WhatsApp ordering.",
  keywords: ["chicken delivery", "fresh poultry", "whatsapp order", "meat zoo"],
  openGraph: {
    title: "Meat Zoo",
    description: "Browse premium chicken cuts and order instantly through WhatsApp.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-brand-white text-brand-dark antialiased">
        <ReduxProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
