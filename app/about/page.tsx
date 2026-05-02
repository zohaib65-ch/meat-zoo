import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Meat Zoo",
  description: "Learn about Meat Zoo's commitment to fresh, hygienic, and premium-quality meat products.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 py-12">
      {/* 1. ABOUT US */}
      <section className="bg-brand-white">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">1. About Us</p>
            <h1 className="mt-3 font-display text-3xl font-extrabold text-brand-dark sm:text-4xl">
              Trusted Quality Today, <span className="text-brand-primary">Growing for Tomorrow.</span>
            </h1>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-brand-muted">
              <p>
                Meat Zoo is a quality-focused meat supply company committed to delivering fresh, hygienic, and premium-quality 
                meat products with a strong emphasis on trust and consistency. At present, Meat Zoo specializes exclusively in the 
                supply of fresh chicken, carefully processed to meet high standards of hygiene, taste, and nutritional value.
              </p>
              <p>
                We believe that excellence begins with specialization. By concentrating initially on chicken, Meat Zoo ensures 
                complete oversight of sourcing, handling, processing, and packaging. Every step of the process is designed to meet 
                halal requirements and modern food safety standards.
              </p>
              <p>
                As Meat Zoo continues to grow, our focus remains on strengthening processes and maintaining customer trust. 
                Our goal is not just to sell meat, but to deliver quality, reliability, and confidence with every order.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border-4 border-brand-cream bg-brand-cream shadow-xl">
            <div className="relative h-[350px] overflow-hidden rounded-2xl sm:h-[450px]">
              <Image 
                src="/products/about.jpg" 
                alt="Fresh poultry preparation illustration" 
                fill 
                className="object-cover" 
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR VISION & MISSION */}
      <section className="bg-brand-cream py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">2. Our Core</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-brand-dark">Vision & Mission</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-brand-white p-8 shadow-sm border border-brand-surface">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-1.5 w-6 bg-brand-primary rounded-full" />
                <h3 className="text-xl font-bold text-brand-dark">Our Vision</h3>
              </div>
              <p className="text-base leading-relaxed text-brand-muted font-medium">
                To become a leading and trusted meat brand, recognized for exceptional quality, hygiene, and customer-centric 
                service, while expanding our product range to meet the growing demands of households and businesses.
              </p>
            </div>

            <div className="rounded-2xl bg-brand-white p-8 shadow-sm border border-brand-surface">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-1.5 w-6 bg-brand-primary rounded-full" />
                <h3 className="text-xl font-bold text-brand-dark">Our Mission</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "To provide fresh, premium-quality, and halal-certified meat, starting with chicken and expanding to beef and mutton.",
                  "To maintain highest standards of hygiene and food safety at every stage of sourcing, processing, and delivery.",
                  "To offer reliable, timely, and flexible service to households, restaurants, and bulk buyers.",
                  "To foster long-term trust and transparency with customers and partners.",
                  "To continuously innovate and improve processes, ensuring sustainable growth and excellence in the meat industry."
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-brand-muted leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-primary/40" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR PRODUCTS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/2">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">3. Offerings</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-brand-dark">Our Products</h2>
            <p className="mt-5 text-base leading-relaxed text-brand-muted">
              At present, Meat Zoo specializes in fresh, premium-quality chicken, carefully sourced and processed 
              to meet the highest standards of hygiene, taste, and nutrition. Our chicken products are available 
              in various cuts to suit household cooking, restaurants, cafes, and bulk buyers.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-muted italic border-l-2 border-brand-primary/20 pl-4">
              Looking ahead, Meat Zoo plans to expand our product range to include fresh beef and mutton, 
              maintaining the same strict quality, halal compliance, and hygiene standards.
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-xl bg-brand-surface p-6 border border-brand-primary/10">
                <h4 className="text-lg font-bold text-brand-dark mb-1">Fresh Chicken</h4>
                <p className="text-sm text-brand-muted ">Available Now</p>
                <p className="text-sm text-brand-muted  mt-1">Whole, cuts, and custom orders.</p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6 border border-gray-200">
                <h4 className="text-lg font-bold text-gray-400 mb-1">Fresh Beef</h4>
                <p className="text-sm text-gray-400 italic">Coming Soon</p>
              </div>
              <div className="rounded-xl bg-gray-50 p-6 border border-gray-200 sm:col-span-2">
                <h4 className="text-lg font-bold text-gray-400 mb-1">Fresh Mutton</h4>
                <p className="text-sm text-gray-400 italic">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE MEAT ZOO */}
      <section className="bg-brand-dark py-16 text-white overflow-hidden relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">4. Excellence</p>
            <h2 className="mt-3 font-display text-3xl font-bold">Why Choose Meat Zoo</h2>
            <p className="mt-4 text-base text-gray-400">Choosing Meat Zoo means choosing freshness, quality, and reliability. We are committed to delivering meat that meets the highest standards.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Premium Quality", text: "We provide fresh, high-quality chicken today, with plans to expand to beef and mutton." },
              { title: "Hygiene & Safety", text: "Our meat is processed and packaged under strict hygiene standards for homes and businesses." },
              { title: "Halal & Ethical", text: "All our products come from trusted suppliers and meet halal compliance standards." },
              { title: "Customer-Focused", text: "Tailored solutions, custom cuts, and timely delivery for all our customers." },
              { title: "Trust & Reliability", text: "Consistency, transparency, and fair pricing form the foundation of our relationships." },
              { title: "Future-Ready", text: "Setting benchmarks in quality and service as we expand our meat offerings." }
            ].map((feature, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h4 className="text-lg font-bold mb-2 text-brand-primary">{feature.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. QUALITY & HYGIENE STANDARDS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="rounded-3xl bg-brand-surface p-8 md:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">5. Standards</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand-dark">Quality & Hygiene Standards</h2>
          <p className="mt-5 text-base text-brand-muted leading-relaxed max-w-4xl">
            At Meat Zoo, quality and hygiene are at the heart of everything we do. From sourcing to processing and delivery, 
            every step is carefully monitored to ensure our customers receive safe, fresh, and premium meat.
          </p>
          
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Strict Sourcing", text: "We work only with trusted and ethical suppliers, ensuring halal and quality standards." },
              { title: "Controlled Processing", text: "Our chicken is processed in clean, hygienic facilities under professional supervision." },
              { title: "Proper Handling", text: "Securely packaged to preserve quality, flavor, and safety during transportation." },
              { title: "Regular Checks", text: "Frequent inspections at every stage to guarantee consistency and compliance." }
            ].map((item, idx) => (
              <div key={idx} className="border-l-2 border-brand-primary/20 pl-5">
                <h5 className="font-bold text-brand-dark text-base">{item.title}</h5>
                <p className="text-sm text-brand-muted mt-2 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TARGET MARKET & COMMITMENT */}
      <section className="bg-brand-cream py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">6. Community</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-brand-dark mb-8">Who We Serve</h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Households", desc: "Seeking hygienic, premium chicken for family meals." },
                  { label: "Restaurants & Cafes", desc: "Consistent supply and professional custom cuts." },
                  { label: "Caterers & Bulk Buyers", desc: "Reliable partner for high-volume, quality orders." },
                  { label: "Retailers", desc: "Trusted meat supply chain for local shop owners." }
                ].map((market, idx) => (
                  <div key={idx} className="p-5 bg-brand-white rounded-xl border border-brand-surface shadow-sm transition-transform hover:translate-y-[-2px]">
                    <h4 className="font-bold text-brand-dark">{market.label}</h4>
                    <p className="text-sm text-brand-muted mt-1 leading-relaxed">{market.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-center border-t border-brand-primary/10 pt-10 lg:border-t-0 lg:pt-0 lg:border-l lg:pl-12">
              <h2 className="font-display text-2xl font-bold text-brand-dark">Our Commitment</h2>
              <p className="mt-5 text-base leading-relaxed text-brand-muted font-medium">
                Customer satisfaction is at the heart of Meat Zoo. We are dedicated to providing fresh, premium-quality meat 
                with reliable service, timely delivery, and personalized solutions.
              </p>
              <div className="mt-8 pt-6 border-t border-brand-surface">
                <p className="font-bold text-lg text-brand-dark">Meat Zoo</p>
                <p className="text-sm text-brand-primary font-semibold">Where Quality Meets Trust.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
