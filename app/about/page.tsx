import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Meat Zoo and our commitment to fresh, premium chicken delivery.",
};

export default function AboutPage() {
  return (
    <section className="bg-brand-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary">About Us</p>
          <h1 className="mt-4 font-display text-4xl font-semibold text-brand-dark sm:text-5xl">Trusted Fresh Chicken, Every Day</h1>
          <p className="mt-6 text-base leading-8 text-brand-muted">
            Meat Zoo was built to make quality poultry shopping simple, clean, and fast. We source carefully, process hygienically, and deliver fresh products designed for everyday family meals and
            premium home cooking.
          </p>
          <p className="mt-4 text-base leading-8 text-brand-muted">
            Our focus is clear: better cuts, better service, and a direct ordering experience through WhatsApp so customers can get what they need without unnecessary steps.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-brand-dark/10 bg-brand-cream p-3 shadow-sm">
          <div className="relative h-[360px] overflow-hidden rounded-2xl sm:h-[420px]">
            <Image src="/images/about.svg" alt="Fresh poultry preparation illustration" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
