import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { productData } from "@/data/productData";
import { createWhatsAppLink } from "@/data/siteData";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Home",
  description: "Explore premium fresh chicken products and order instantly on WhatsApp.",
};

export default function HomePage() {
  const heroCtaLink = createWhatsAppLink("I want to place an order.");

  const familyPacks = productData.filter((product) => product.subCategory === "family-pack");

  return (
    <div className="bg-brand-cream">
      <section className="relative isolate overflow-hidden">
        <Image src="/images/hero.jpg" alt="Fresh chicken delivery hero background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-brand-dark/70" />
        <div className="relative mx-auto flex min-h-[60vh] md:min-h-[78vh] w-full max-w-7xl items-center px-6 md:py-20 py-6 sm:px-8 lg:px-10">
          <div className="max-w-2xl text-brand-white">
            <p className="mb-4 inline-flex rounded-full border border-brand-white/20 bg-brand-white/10 px-4 py-2 text-sm tracking-wide">Premium Poultry, Everyday Fresh</p>
            <h1 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">Fresh Chicken Delivered</h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-brand-white/85 text-sm sm:text-lg">
              Shop quality chicken cuts with a modern, hassle-free flow. Browse products, tap order, and confirm instantly on WhatsApp.
            </p>
            <div className="mt-8">
              <a
                href={heroCtaLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-brand-primary px-6 py-3 text-sm font-bold text-brand-white shadow-[0_10px_26px_rgba(218,5,8,0.35)] transition hover:-translate-y-0.5 hover:bg-[#b70406]"
              >
                Order Now on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">All Products</p>
            <h2 className="mt-3 font-display text-2xl md:text-3xl font-semibold text-brand-dark sm:text-4xl">Handpicked Chicken Cuts</h2>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productData.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full border-2 border-brand-primary px-8 py-3 text-sm font-bold text-brand-primary transition hover:bg-brand-primary hover:text-white!"
          >
            Browse Our Products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">Special Packs</p>
          <h2 className="mt-3 font-display text-2xl md:text-3xl font-semibold text-brand-dark sm:text-4xl">Family Packs</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {familyPacks.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
