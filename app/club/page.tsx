import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meat Zoo Club | Coming Soon",
  description: "Join the Meat Zoo Club for exclusive offers and premium benefits. Coming soon!",
};

export default function ClubPage() {
  return (
    <div className="bg-brand-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary mb-4">Membership</p>
        <h1 className="font-display md:text-4xl text-2xl font-bold text-brand-dark mb-6">
          Meat Zoo Club
        </h1>
        
        <p className="text-md md:text-lg text-brand-muted mb-10 leading-relaxed">
          The ultimate membership for meat lovers. Exclusive rewards, early access to new cuts, and personalized delivery schedules.
        </p>
        <div className="inline-block px-8 py-3 bg-brand-primary! text-brand-white! rounded-2xl">
          <p className="md:text-xl text-lg font-bold">Coming Soon</p>
        </div>
      </div>
    </div>
  );
}
