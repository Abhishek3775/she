import { motion } from "framer-motion";

// Real high-quality editorial fashion lookbook images
const looks = [
  {
    id: 1, title: "Effortless Brunch",
    desc: "Soft tones, relaxed silhouettes — made for lazy mornings and long brunches.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=90&fit=crop&crop=top",
  },
  {
    id: 2, title: "Evening Elegance",
    desc: "When the sun sets, let your outfit do the talking.",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&q=90&fit=crop&crop=top",
  },
  {
    id: 3, title: "Boardroom Power",
    desc: "Feminine strength — co-ord sets and blazers that mean business.",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=90&fit=crop&crop=top",
  },
  {
    id: 4, title: "Festival Glow",
    desc: "Embroidery, drapes, and sequins — celebrate every moment.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=90&fit=crop&crop=top",
  },
  {
    id: 5, title: "Golden Hour",
    desc: "Warm hues and flowing fabrics that move with every step.",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=90&fit=crop&crop=top",
  },
  {
    id: 6, title: "Weekend Wanderer",
    desc: "Linen, florals, and ease — dressed for wherever the day takes you.",
    image: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=800&q=90&fit=crop&crop=top",
  },
];

const LookbookPage = () => (
  <div className="bg-cream min-h-screen">
    <div className="bg-blush/50 py-16">
      <div className="container mx-auto px-4 text-center">
        <p className="font-body text-xs uppercase tracking-[0.2em] text-taupe mb-3">SS 2025 Collection</p>
        <h1 className="font-display text-4xl md:text-6xl text-charcoal italic">The Lookbook</h1>
        <p className="font-body text-sm text-taupe mt-3 max-w-md mx-auto">
          Six stories. Infinite ways to wear them. Each look is a mood — find yours.
        </p>
      </div>
    </div>

    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        {looks.map((look, i) => (
          <motion.div
            key={look.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-lg aspect-[3/4]"
          >
            <img
              src={look.image}
              alt={look.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <p className="font-body text-xs uppercase tracking-[0.15em] text-mauve mb-2">Look {look.id.toString().padStart(2, "0")}</p>
              <h3 className="font-display text-3xl text-cream italic mb-2">{look.title}</h3>
              <p className="font-body text-sm text-cream/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                {look.desc}
              </p>
              <button className="mt-4 font-body text-xs uppercase tracking-widest text-cream border-b border-cream/50 pb-0.5 hover:border-cream transition-colors opacity-0 group-hover:opacity-100">
                Shop this look →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default LookbookPage;
