import { getBestsellers } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { motion } from "framer-motion";

const Bestsellers = () => {
  const items = getBestsellers();
  return (
    <section className="py-16 bg-blush/30">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl italic text-charcoal text-center mb-10">Bestsellers</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.slice(0, 4).map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <ProductCard product={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
