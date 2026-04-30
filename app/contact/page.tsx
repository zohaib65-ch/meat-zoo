import type { Metadata } from "next";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { createWhatsAppLink, siteData } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Meat Zoo for orders and inquiries through phone or WhatsApp.",
};

const contactItems = [
  {
    label: "Phone",
    value: siteData.phoneDisplay,
    icon: Phone,
    href: `tel:${siteData.phoneDisplay.replace(/\s+/g, "")}`,
  },
  {
    label: "Address",
    value: siteData.address,
    icon: MapPin,
    href: undefined,
  },
];

export default function ContactPage() {
  const whatsappOrderLink = createWhatsAppLink("Hello, I want to place an order.");

  return (
    <section className="bg-brand-cream">
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">Contact</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-brand-dark sm:text-5xl">Let&apos;s Get Your Order Ready</h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-brand-muted">Reach us directly for product availability, delivery timings, and quick support. We keep communication simple and fast.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className="rounded-2xl border border-brand-dark/10 bg-brand-white p-6 shadow-sm">
                <div className="mb-4 inline-flex rounded-full bg-brand-surface p-3 text-brand-primary">
                  <Icon size={20} />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-primary">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="mt-2 block text-lg font-semibold text-brand-dark transition hover:text-brand-primary">
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-2 text-lg font-semibold text-brand-dark">{item.value}</p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-brand-dark/10 bg-brand-white p-6 shadow-sm">
          <p className="text-sm leading-7 text-brand-muted">Prefer messaging? Tap below to order directly:</p>
          <a
            href={whatsappOrderLink}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-primary px-5 py-3 text-sm font-semibold text-brand-white transition hover:bg-[#b70406]"
          >
            <MessageCircle size={18} />
            Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
