import Link from "next/link";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { createWhatsAppLink, siteData } from "@/data/siteData";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Our Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Vision", href: "/vision" },
  { label: "Partners", href: "/partners" },
  { label: "Meatzoo Club", href: "/club" },
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
    <footer className="bg-brand-dark text-brand-white pt-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Line 1: Logo and Quick Links */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-white/10">
          <div>
            <p className="font-display text-2xl font-extrabold tracking-tight">{siteData.brandName}</p>
            <p className="mt-1 text-sm text-brand-white/60">Trusted quality today, growing for tomorrow.</p>
          </div>
          <nav>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-brand-white/80">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition hover:text-brand-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Line 2: Socials and Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-6 text-sm text-brand-white/50">
          <div className="flex items-center gap-4">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="transition hover:text-brand-primary"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
          <p className="text-center">
            &copy; {new Date().getFullYear()} {siteData.brandName}. All rights reserved. | Designed and developed by <span className="text-brand-primary/80 font-semibold">Zohaib</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
