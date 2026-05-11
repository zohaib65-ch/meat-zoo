import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Meat Zoo",
  description: "Join the Meat Zoo team and grow your career in the fresh food and meat industry.",
};

export default function CareerPage() {
  const benefits = [
    "Professional and supportive work environment",
    "Career growth and learning opportunities",
    "Competitive salary packages",
    "Team-oriented culture",
    "Opportunity to work with a fast-growing food brand",
  ];

  const roles = [
    "Store Operations",
    "Customer Support",
    "Delivery & Logistics",
    "Butchery & Meat Processing",
    "Marketing & Social Media",
    "Sales & Business Development",
    "Warehouse & Inventory Management",
  ];

  return (
    <div className="flex flex-col gap-10 sm:gap-16 py-8 sm:py-12">
      <section className="bg-brand-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 text-center">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">Careers</p>
          <h1 className="mt-2 sm:mt-3 font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-brand-dark">
            Careers at <span className="text-brand-primary">Meat Zoo</span>
          </h1>
          <p className="mt-4 sm:mt-6 mx-auto max-w-3xl text-sm sm:text-lg leading-relaxed text-brand-muted px-2">
            At Meat Zoo, we believe great people are the heart of a great brand. We are committed to building a professional, growth-driven, and customer-focused workplace where passionate individuals
            can grow their careers in the fresh food and meat industry.
          </p>
        </div>
      </section>

      <section className="bg-brand-cream py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 sm:gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-display text-xl sm:text-3xl font-bold text-brand-dark mb-4 sm:mb-8">Why Join Meat Zoo?</h2>
              <ul className="space-y-3 sm:space-y-4">
                {benefits.map((benefit, idx) => (
                  <li key={idx} className="flex gap-2 sm:gap-3 text-sm sm:text-base text-brand-muted">
                    <span className="mt-2 h-1.5 w-1.5 sm:h-2 sm:w-2 flex-shrink-0 rounded-full bg-brand-primary" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-xl sm:text-3xl font-bold text-brand-dark mb-4 sm:mb-8">Who We&apos;re Looking For</h2>
              <p className="mb-4 sm:mb-6 text-xs sm:text-base text-brand-muted">We are always looking for motivated, hardworking, and talented individuals in areas such as:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {roles.map((role, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-brand-dark bg-brand-white p-2.5 sm:p-3 rounded-lg shadow-sm border border-brand-surface">
                    <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-brand-primary" />
                    {role}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 text-center">
        <div className="rounded-2xl sm:rounded-3xl bg-brand-dark p-6 sm:p-12 text-white">
          <h2 className="font-display text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Mission</h2>
          <p className="text-sm sm:text-base text-brand-cream/80 mb-6 sm:mb-8">
            To deliver premium-quality fresh meat products with excellence, hygiene, and customer satisfaction at the core of everything we do.
          </p>
          <div className="h-px bg-white/10 w-full mb-6 sm:mb-8" />
          <h2 className="font-display text-lg sm:text-xl font-bold mb-3 sm:mb-4">Work With Us</h2>
          <p className="mb-4 sm:mb-6 text-xs sm:text-sm text-brand-cream/80">If you are passionate about quality service and want to be part of a growing team, we would love to hear from you.</p>
          <div className="inline-flex flex-col items-center">
            <span className="text-[10px] sm:text-sm text-brand-cream/60 uppercase tracking-widest mb-1">Send your CV</span>
            <a href="mailto:meatzoo.pk@gmail.com" className="text-lg sm:text-xl font-bold text-brand-primary hover:text-white transition-colors break-all">
              meatzoo.pk@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
