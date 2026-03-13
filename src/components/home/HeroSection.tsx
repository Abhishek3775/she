import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, Star } from "lucide-react";

const HeroSection = () => (
  <section className="min-h-[90vh] bg-gradient-to-br from-blush via-cream to-blush/50 relative overflow-hidden">
    <div className="container mx-auto px-4 py-12 lg:py-0 flex flex-col lg:flex-row items-center min-h-[90vh]">
      {/* Left content */}
      <div className="lg:w-[55%] z-10 text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-body text-xs uppercase tracking-[0.15em] text-taupe mb-4">
          New Collection SS 2025
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-charcoal leading-tight mb-2">
          She Wears
        </motion.h2>
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="font-display text-5xl md:text-6xl lg:text-7xl font-light italic text-deep-rose leading-tight mb-6">
          Shades of You
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="font-body text-base text-taupe max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
          Premium fashion for the woman who knows herself. Curated styles that celebrate your unique essence.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
          <Link to="/shop?filter=new" className="bg-deep-rose text-primary-foreground px-8 py-3 rounded font-body text-sm font-medium hover:bg-dusty-rose transition-colors flex items-center gap-2">
            Shop New In <span>→</span>
          </Link>
          <Link to="/lookbook" className="border border-deep-rose text-deep-rose px-8 py-3 rounded font-body text-sm font-medium hover:bg-deep-rose hover:text-primary-foreground transition-colors">
            View Lookbook
          </Link>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="flex items-center gap-3 justify-center lg:justify-start">
          <div className="flex -space-x-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-mauve border-2 border-cream" />
            ))}
          </div>
          <div className="font-body text-sm text-taupe">
            <span className="text-charcoal font-medium">50,000+</span> women trust us
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-gold text-gold" />)}
              <span className="text-xs ml-1">4.9</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right image */}
      <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="lg:w-[45%] relative order-1 lg:order-2 flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-blush rounded-full scale-110 blur-3xl opacity-60" />
          <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=840&q=90&fit=crop&crop=top" alt="She & Shades Model" className="relative w-72 md:w-96 lg:w-[420px] aspect-[3/4] object-cover rounded-2xl" />
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }} className="absolute top-8 -right-2 bg-deep-rose text-primary-foreground px-4 py-1.5 rounded-full font-body text-xs font-medium shadow-lg">
            New In ✦
          </motion.div>
        </div>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute bottom-6 left-1/2 -translate-x-1/2">
      <ChevronDown size={24} className="text-taupe/50" />
    </motion.div>
  </section>
);

export default HeroSection;
