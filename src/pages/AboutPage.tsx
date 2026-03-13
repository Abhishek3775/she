import { motion } from "framer-motion";
import logo from "@/assets/logo.jpg";

const AboutPage = () => (
  <div className="bg-cream min-h-screen">
    <div className="bg-blush/50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl text-charcoal italic">Our Story</h1>
      </div>
    </div>
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
        <img src={logo} alt="She & Shades" className="w-32 h-32 rounded-full object-cover mx-auto mb-8 border-4 border-blush" />
        <h2 className="font-display text-3xl text-charcoal mb-4">She & Shades</h2>
        <p className="font-body text-[10px] uppercase tracking-[0.15em] text-deep-rose mb-8">Fashion Fits For Her</p>
        <div className="font-body text-base text-taupe leading-relaxed space-y-4 text-left">
          <p>She & Shades was born from a simple belief: every woman deserves fashion that fits — not just her body, but her personality, her mood, her moment.</p>
          <p>Founded in 2020, we started as a small team passionate about creating premium-quality clothing that celebrates femininity in all its shades. From the softest blush to the boldest deep rose, our collections are designed to make you feel confident, comfortable, and undeniably stylish.</p>
          <p>Every piece is carefully crafted with attention to detail — from the choice of fabrics to the precision of cuts. We believe in slow fashion, timeless pieces, and the power of dressing well.</p>
          <p>Today, over 50,000 women across India trust She & Shades for their wardrobe essentials. And we're just getting started.</p>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-12">
          {[{ num: "50K+", label: "Happy Customers" }, { num: "4.9★", label: "Average Rating" }, { num: "200+", label: "Styles" }].map(({ num, label }) => (
            <div key={label} className="text-center">
              <p className="font-display text-3xl text-deep-rose">{num}</p>
              <p className="font-body text-xs text-taupe mt-1">{label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

export default AboutPage;
