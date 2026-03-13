import { Truck, Shield, Ruler, Star } from "lucide-react";

const items = [
  { icon: Truck, title: "Free Returns", sub: "Easy 7-day returns" },
  { icon: Shield, title: "Secure Payment", sub: "100% safe checkout" },
  { icon: Ruler, title: "Size Guide", sub: "Find your perfect fit" },
  { icon: Star, title: "50K+ Happy Women", sub: "Verified reviews" },
];

const TrustStrip = () => (
  <section className="border-y border-mauve/30 bg-cream py-6">
    <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map(({ icon: Icon, title, sub }, i) => (
        <div key={i} className="flex items-center gap-3 justify-center md:border-r last:border-r-0 border-mauve/20">
          <Icon size={20} className="text-deep-rose shrink-0" />
          <div>
            <p className="font-body text-sm font-medium text-charcoal">{title}</p>
            <p className="font-body text-xs text-taupe">{sub}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TrustStrip;
