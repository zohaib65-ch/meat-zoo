import type { Metadata } from "next";
import { Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Vision | Meat Zoo",
  description: "Learn about Meat Zoo's long-term vision and mission in the meat industry.",
};

export default function VisionPage() {
  return (
    <div className="bg-brand-white min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-10 md:mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">Company Goals</p>
          <h1 className="mt-3 font-display md:text-4xl text-2xl font-bold text-brand-dark">Our Vision & Mission</h1>
        </div>

        <div className="grid gap-16">
          {/* Vision Section */}
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Target size={24} className="text-brand-primary" />
              <h2 className="md:text-2xl text-xl font-bold text-brand-dark">Our Vision</h2>
            </div>
            <p className="md:text-xl text-sm md:leading-relaxed leading-normal text-brand-muted font-medium italic border-l-4 border-brand-primary/20 pl-6">
              "To become a leading and trusted meat brand, recognized for exceptional quality, hygiene, and customer-centric 
              service, while expanding our product range to meet the growing demands of households and businesses."
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-12">
             <div>
                <h2 className="text-2xl font-bold text-brand-dark mb-8">Our Mission</h2>
                <ul className="space-y-6">
                  {[
                    "To provide fresh, premium-quality, and halal-certified meat, starting with chicken and expanding to beef and mutton.",
                    "To maintain highest standards of hygiene and food safety at every stage of sourcing, processing, and delivery.",
                    "To offer reliable, timely, and flexible service to households, restaurants, and bulk buyers.",
                    "To foster long-term trust and transparency with customers and partners.",
                    "To continuously innovate and improve processes, ensuring sustainable growth and excellence in the meat industry."
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-4">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-surface text-xs font-bold text-brand-dark">
                        {idx + 1}
                      </span>
                      <p className="text-brand-muted text-sm md:text-lg leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
             </div>

             <div className="bg-brand-cream rounded-3xl p-6 md:p-8 flex flex-col justify-center">
                <h2 className="text-xl md:text-2xl font-bold text-brand-dark mb-6">The Meat Zoo Promise</h2>
                <div className="space-y-6 text-brand-muted leading-relaxed">
                  <p className="text-sm md:text-lg">
                    Every step we take is guided by our commitment to excellence. We don't just sell meat; we deliver peace of mind to your kitchen.
                  </p>
                  <p className="text-sm md:text-lg">
                    Our journey started with chicken, but our vision encompasses a complete range of premium meat products, all handled with the same care and discipline.
                  </p>
                  <p>
                    Meat Zoo is more than a brand; it's a promise of trusted quality today and growing for tomorrow.
                  </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
