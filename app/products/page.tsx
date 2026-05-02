"use client";

import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { productData, ProductCategory } from "@/data/productData";
import { Beef, Bird, Utensils } from "lucide-react";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("chicken");

  const categories: { id: ProductCategory; label: string; icon: any }[] = [
    { id: "chicken", label: "Chicken", icon: Bird },
    { id: "beef", label: "Beef", icon: Beef },
    { id: "mutton", label: "Mutton", icon: Utensils },
  ];

  const filteredProducts = productData.filter(
    (product) => product.category === activeCategory
  );

  return (
    <div className="bg-brand-white min-h-screen">
      {/* Header Section */}
      <section className="bg-brand-cream py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">Our Selection</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-brand-dark sm:text-5xl">Our Products</h1>
          <p className="mt-4 max-w-xl text-brand-muted">
            Browse our premium selection of fresh meat, carefully processed and delivered to your doorstep.
          </p>
        </div>
      </section>

      {/* Category Switcher */}
      <section className="sticky top-[64px] z-20 border-b border-brand-surface bg-brand-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="flex items-center gap-4 py-4 overflow-x-auto no-scrollbar">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-3 whitespace-nowrap rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/30"
                      : "bg-brand-surface text-brand-muted hover:bg-brand-cream"
                  }`}
                >
                  <Icon size={18} />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-brand-dark capitalize">
            {activeCategory} {filteredProducts.length > 0 ? "Products" : ""}
          </h2>
          {filteredProducts.length > 0 && (
            <p className="mt-1 text-sm text-brand-muted">Showing {filteredProducts.length} items</p>
          )}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center rounded-3xl border-2 border-dashed border-brand-surface bg-brand-cream/30">
            <div className="mb-6 rounded-full bg-brand-cream p-8">
              {activeCategory === "beef" ? (
                <Beef size={64} className="text-brand-muted opacity-30" />
              ) : (
                <Utensils size={64} className="text-brand-muted opacity-30" />
              )}
            </div>
            <h2 className="text-2xl font-bold text-brand-dark">Coming Soon</h2>
            <p className="mt-3 max-w-sm text-brand-muted">
              We are currently finalizing our sourcing for premium fresh {activeCategory}. It will be available for order very soon!
            </p>
            <button
              onClick={() => setActiveCategory("chicken")}
              className="mt-8 rounded-full border border-brand-primary/20 px-6 py-2 text-sm font-bold text-brand-primary transition hover:bg-brand-primary hover:text-white"
            >
              Back to Fresh Chicken
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
