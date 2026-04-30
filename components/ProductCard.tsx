import Image from "next/image";
import type { Product } from "@/data/productData";
import { createWhatsAppLink } from "@/data/siteData";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const orderLink = createWhatsAppLink(`I want to order ${product.name}`);

  return (
    <article className="group overflow-hidden rounded-2xl border border-brand-dark/10 bg-brand-white shadow-[0_10px_30px_rgba(16,2,2,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(16,2,2,0.14)]">
      <div className="relative h-52 overflow-hidden">
        <Image src={product.image} alt={product.name} fill className="object-cover transition duration-300 group-hover:scale-105" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-dark/18 to-transparent" />
      </div>

      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <h3 className="font-display text-2xl font-semibold text-brand-dark">{product.name}</h3>
          <p className="text-sm leading-7 text-brand-muted">{product.description}</p>
        </div>

        <p className="text-lg font-semibold text-brand-primary">{product.price}</p>

        <a
          href={orderLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center rounded-full bg-brand-primary px-4 py-3 text-sm font-bold text-brand-white shadow-[0_8px_20px_rgba(218,5,8,0.34)] transition hover:bg-[#b70406]"
        >
          Order on WhatsApp
        </a>
      </div>
    </article>
  );
}
