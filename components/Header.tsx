"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { createWhatsAppLink, siteData } from "@/data/siteData";
import { useAppSelector } from "@/redux/hooks";

const navigation = [
  { label: "All Products", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const getLinkClasses = (isActive: boolean) =>
  [
    "rounded-full px-4 py-2 text-sm font-semibold transition duration-200",
    isActive ? "bg-brand-primary text-brand-white shadow-[0_6px_18px_rgba(218,5,8,0.35)]" : "text-brand-dark hover:bg-brand-surface hover:text-brand-primary",
  ].join(" ");

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const storeBanner = useAppSelector((state) => state.ui.bannerText);
  const whatsappSupportLink = createWhatsAppLink("I have a question about your products.");

  return (
    <header className="sticky top-0 z-50 border-b border-brand-dark/10 bg-brand-white backdrop-blur-md">
      <div className="border-b border-brand-dark/10 bg-brand-dark text-brand-white">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-2 text-xs sm:px-8 lg:px-10">
          <p className="tracking-wide text-brand-white/90">{storeBanner}</p>
          <a href={whatsappSupportLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-3 py-1 font-semibold transition hover:bg-[#b70406]">
            <MessageCircle size={14} />
            WhatsApp
          </a>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="overflow-hidden">
            <Image src="/logo.jpeg" alt={`${siteData.brandName} logo`} width={92} height={52} className="h-[52px] w-[200px] object-cover" priority />
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className={getLinkClasses(pathname === item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((value) => !value)}
          className="inline-flex rounded-md border border-brand-dark/15 p-2 text-brand-dark transition hover:bg-brand-surface md:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-brand-dark/10 bg-brand-white md:hidden">
          <nav className="mx-auto grid w-full max-w-7xl gap-2 px-6 py-4 sm:px-8">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className={getLinkClasses(pathname === item.href)} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
