import { productData } from "@/data/productData";
import { createWhatsAppLink } from "@/data/siteData";
import { ProductCard } from "@/components/ProductCard";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, MessageCircle, ShieldCheck, Truck, Clock, CheckCircle2, Package, Store, Tag as TagIcon, Weight, Salad, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = productData.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const relatedProducts = productData.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  const orderLink = createWhatsAppLink(`I want to order ${product.name}`);

  return (
    <div className="min-h-screen bg-brand-white">
      {/* Back Navigation */}
      <div className="mx-auto max-w-7xl px-6 pt-14 sm:px-8 lg:px-10">
        <Link href="/products" className="inline-flex items-center gap-2 text-sm font-bold text-brand-muted hover:text-brand-primary transition-colors">
          <ChevronLeft size={16} />
          Back to Products
        </Link>
      </div>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: Product Image */}
          <div className="flex flex-col gap-6">
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-brand-surface bg-brand-cream/30 shadow-xl">
              <Image src={product.image} alt={product.name} fill className="object-cover" priority />
            </div>
            {product.isOrganic && (
              <div className="flex items-center gap-3 rounded-2xl bg-green-50 p-4 border border-green-100">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white">
                  <Salad size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-green-700">100% Organic</p>
                  <p className="text-xs text-green-600">Pure, fresh, and chemical-free meat</p>
                </div>
              </div>
            )}
          </div>

          {/* Right: Product Details */}
          <div className="flex flex-col">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-block rounded-full bg-brand-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-brand-primary">{product.category}</span>
                {product.subCategory && (
                  <span className="inline-block rounded-full bg-brand-dark/5 px-4 py-1 text-xs font-bold uppercase tracking-wider text-brand-dark">{product.subCategory.replace("-", " ")}</span>
                )}
                {product.stock && (
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider ${
                      product.stock === "Available" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    }`}
                  >
                    <CheckCircle2 size={12} />
                    {product.stock}
                  </span>
                )}
              </div>

              <h1 className="font-display text-2xl md:text-4xl font-bold text-brand-dark">{product.name}</h1>

              <div className="flex items-center gap-4">
                <p className="md:text-2xl text-xl font-bold text-brand-primary">Rs {product.price.toLocaleString()}</p>
                {product.weight && (
                  <div className="flex items-center gap-2 rounded-lg bg-brand-cream px-3 py-1 text-brand-dark">
                    <Weight size={18} />
                    <span className="font-bold">{product.weight}</span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-y-4 border-y border-brand-surface py-6 text-sm">
                <div className="flex items-center gap-3">
                  <Package size={18} className="text-brand-muted" />
                  <div>
                    <p className="text-xs text-brand-muted font-medium">Brand</p>
                    <p className="font-bold text-brand-dark">{product.brand || "Meat Zoo"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Store size={18} className="text-brand-muted" />
                  <div>
                    <p className="text-xs text-brand-muted font-medium">Vendor</p>
                    <p className="font-bold text-brand-dark">{product.vendor || "Farm & Local Store"}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-brand-dark">Product Description</h3>
                <p className="text-brand-muted md:text-base text-sm leading-relaxed">{product.description}</p>
              </div>

              {product.tags && product.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  <TagIcon size={16} className="text-brand-muted mt-1" />
                  {product.tags.map((tag) => (
                    <span key={tag} className="text-sm font-medium text-brand-muted hover:text-brand-primary cursor-default">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Order Button */}
              <div className="pt-8">
                <a
                  href={orderLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-brand-primary px-8 py-3 text-lg font-semibold text-white! shadow-xl shadow-brand-primary/20 transition-all hover:bg-[#b70406] hover:scale-[1.02]"
                >
                  <MessageCircle size={24} />
                  Order Now via WhatsApp
                </a>
                <p className="mt-4 text-center text-sm text-brand-muted">Clicking will open WhatsApp for direct ordering and delivery details.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-brand-white py-8 border-t border-brand-surface">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex items-center gap-4 rounded-2xl bg-brand-cream/50 p-6">
              <div className="rounded-full bg-green-100 p-3 text-green-600">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h4 className="font-bold text-brand-dark">Halal Certified</h4>
                <p className="text-sm text-brand-muted">100% Fresh & Halal</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl bg-brand-cream/50 p-6">
              <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                <Truck size={32} />
              </div>
              <div>
                <h4 className="font-bold text-brand-dark">Fast Delivery</h4>
                <p className="text-sm text-brand-muted">Same day delivery</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl bg-brand-cream/50 p-6">
              <div className="rounded-full bg-orange-100 p-3 text-orange-600">
                <Clock size={32} />
              </div>
              <div>
                <h4 className="font-bold text-brand-dark">Hygienic Packing</h4>
                <p className="text-sm text-brand-muted">Vacuum sealed packs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="bg-brand-cream/30 py-24 border-t border-brand-surface">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
            <div className="mb-12 flex items-end justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">Selection</p>
                <h2 className="mt-3 font-display md:text-3xl text-xl font-bold text-brand-dark">Related Products</h2>
              </div>
              <Link href="/products" className="hidden text-sm sm:flex  gap-2 items-center justify-between font-bold text-brand-primary hover:underline ">
                View all products <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export async function generateStaticParams() {
  return productData.map((product) => ({
    id: product.id,
  }));
}
