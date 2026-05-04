import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/productData";
import { createWhatsAppLink } from "@/data/siteData";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const orderLink = createWhatsAppLink(`I want to order ${product.name}`);

  return (
    <article className="group overflow-hidden rounded-2xl border border-brand-dark/10 bg-brand-white shadow-[0_10px_30px_rgba(16,2,2,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(16,2,2,0.14)] flex flex-col">
      <Link href={`/products/${product.id}`} className="block relative h-52 overflow-hidden">
        <Image src={product.image} alt={product.name} fill className="object-cover transition duration-300 group-hover:scale-105" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-dark/18 to-transparent" />
      </Link>
      <div className="space-y-4 p-5 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <Link href={`/products/${product.id}`}>
            <h3 className="font-display text-lg font-semibold text-brand-dark hover:text-brand-primary transition-colors">{product.name}</h3>
          </Link>
          <p className="text-xs leading-5 text-brand-muted line-clamp-2">{product.description}</p>
        </div>

        <div className="space-y-4 mt-auto">
          <p className="text-lg font-bold text-brand-primary">Rs {product.price.toLocaleString()} /kg</p>

          <div className="grid grid-cols-1 gap-3">
            <Link
              href={`/products/${product.id}`}
              className="inline-flex items-center justify-center rounded-full border border-brand-primary px-4 py-3 text-sm font-bold text-brand-primary transition hover:bg-brand-primary/5"
            >
              View Details
            </Link>
            <a
              href={orderLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand-primary px-4 py-3 text-sm font-bold text-brand-white! shadow-[0_8px_20px_rgba(218,5,8,0.34)] transition hover:bg-[#b70406]"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
