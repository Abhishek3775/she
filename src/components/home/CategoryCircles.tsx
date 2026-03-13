import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { categories } from "@/data/products";

const CategoryCircles = () => (
  <section className="py-16 bg-cream">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-3xl md:text-4xl italic text-charcoal text-center mb-10">Shop by Style</h2>
      <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-4 justify-start md:justify-center">
        {categories.map((cat, i) => (
          <motion.div key={cat.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
            <Link to={`/category/${cat.slug}`} className="flex flex-col items-center gap-3 group shrink-0">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-transparent group-hover:border-deep-rose transition-all duration-300 group-hover:scale-105 bg-blush">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              </div>
              <span className="font-body text-sm text-charcoal group-hover:text-deep-rose transition-colors">{cat.name}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CategoryCircles;
