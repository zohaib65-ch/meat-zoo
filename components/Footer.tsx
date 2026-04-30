import Link from "next/link";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { createWhatsAppLink, siteData } from "@/data/siteData";

const quickLinks = [
  { label: "Products", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  {
    label: "WhatsApp",
    href: createWhatsAppLink("Hello, I want to know more about your products."),
    icon: MessageCircle,
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-dark text-brand-white">
      <div className="pointer-events-none absolute -left-14 -top-14 h-44 w-44 rounded-full bg-brand-primary/20 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-20 right-0 h-52 w-52 rounded-full bg-brand-white/8 blur-2xl" />
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-12 sm:px-8 lg:grid-cols-3 lg:px-10">
        <div>
          <p className="font-display text-3xl font-extrabold tracking-tight">
            {siteData.brandName}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-brand-white/80">
            Fresh chicken cuts delivered with a modern, premium experience and
            direct WhatsApp ordering.
          </p>
        </div>

        <div>
          <h3 className="font-display text-xl font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-brand-white/85">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-brand-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl font-semibold">Follow Us</h3>
          <div className="mt-4 flex items-center gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="rounded-full border border-brand-white/20 bg-brand-white/5 p-2 text-brand-white transition hover:border-brand-primary hover:text-brand-primary"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-t border-brand-white/10 px-6 py-5 text-center text-sm text-brand-white/70 sm:px-8 lg:px-10">
        &copy; {new Date().getFullYear()} {siteData.brandName}. All rights reserved.
      </div>
    </footer>
  );
}
