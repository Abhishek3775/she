import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface ReviewItem {
  name: string;
  text: string;
  rating: number;
  product: string;
  verified: boolean;
  avatar: string;
}

const reviews = [
  {
    name: "Priya M.",
    text: "The quality is unmatched! I've been ordering from She & Shades for 2 years now and every piece feels premium.",
    rating: 5, product: "Blush Wrap Midi Dress", verified: true,
    avatar: "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?w=80&q=80&fit=crop&crop=face",
  },
  {
    name: "Ananya S.",
    text: "Obsessed with the co-ord sets! The fit is always perfect and I get compliments every time I wear them.",
    rating: 5, product: "Rose Co-ord Blazer Set", verified: true,
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&q=80&fit=crop&crop=face",
  },
  {
    name: "Kavya R.",
    text: "Finally found a brand that understands Indian women's bodies. The size guide is spot on!",
    rating: 5, product: "Dusty Rose Ruched Top", verified: true,
    avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=80&q=80&fit=crop&crop=face",
  },
];

const ReviewsSection = () => (
  <section className="py-16 bg-cream">
    <div className="container mx-auto px-4 text-center">
      <h2 className="font-display text-3xl md:text-4xl italic text-charcoal mb-2">50,000+ Women Love She & Shades</h2>
      <div className="flex items-center justify-center gap-2 mb-10">
        <span className="font-display text-4xl text-charcoal">4.9</span>
        <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-gold text-gold" />)}</div>
        <span className="font-body text-sm text-taupe">(12,847 reviews)</span>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r: ReviewItem, i: number) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-blush/30 rounded-lg p-6 text-left border border-mauve/20">
            <div className="flex gap-0.5 mb-3">{[...Array(r.rating)].map((_, j) => <Star key={j} size={12} className="fill-gold text-gold" />)}</div>
            <p className="font-body text-sm text-charcoal leading-relaxed mb-4">"{r.text}"</p>
            <div className="flex items-center gap-3">
              <img src={r.avatar} alt={r.name} className="w-8 h-8 rounded-full object-cover" />
              <div>
                <p className="font-body text-sm font-medium text-charcoal">{r.name} {r.verified && <span className="text-deep-rose text-xs">✓ Verified</span>}</p>
                <p className="font-body text-xs text-taupe">{r.product}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
