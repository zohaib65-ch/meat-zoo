import type { Metadata } from "next";
import Image from "next/image";
import { partnerData } from "@/data/partnerData";
import { Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Partners | Meat Zoo",
  description: "Meet the trusted partners who help Meat Zoo deliver the best quality meat to you.",
};

export default function PartnersPage() {
  return (
    <div className="bg-brand-white min-h-screen md:py-16 py-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center justify-center rounded-full bg-brand-cream p-4 text-brand-primary mb-6">
            <Handshake size={32} />
          </div>
          <h1 className="font-display md:text-4xl text-2xl font-bold text-brand-dark">Our Trusted Partners</h1>
          <p className="mt-4 mx-auto max-w-2xl text-brand-muted">
            We work with the best in the industry to ensure that every product reaching your table is fresh, safe, and of the highest quality.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {partnerData.map((partner) => (
            <div key={partner.id} className="flex flex-col sm:flex-row gap-6 p-6 md:p-8 rounded-3xl bg-brand-cream border border-brand-surface shadow-sm transition-transform hover:-translate-y-1">
              <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 rounded-2xl bg-white shadow-inner overflow-hidden p-2">
                {/* Fallback to text if image doesn't exist yet */}
                <div className="text-brand-primary font-bold text-center text-xs">LOGO</div>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-brand-dark">{partner.name}</h3>
                <p className="text-xs mt-2 font-bold text-brand-primary uppercase tracking-wider mb-3">{partner.location}</p>
                <p className="text-brand-muted leading-relaxed text-sm md:text-lg">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-20 p-6 md:p-8  rounded-3xl bg-brand-dark text-white text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Want to partner with us?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm md:text-lg">
            We are always looking to collaborate with ethical suppliers and businesses who share our commitment to quality.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center rounded-full bg-brand-primary px-8 py-3 text-sm font-bold text-white transition hover:bg-[#b70406]"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
