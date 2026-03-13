import { useParams } from "react-router-dom";
import { getProductsByCategory, categories } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { motion } from "framer-motion";

const CategoryPage = () => {
  const { slug } = useParams();
  const cat = categories.find((c) => c.slug === slug);
  const items = getProductsByCategory(slug || "");

  return (
    <div className="bg-cream min-h-screen">
      <div className="bg-blush/50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl text-charcoal">{cat?.name || slug}</h1>
          <p className="font-body text-sm text-taupe mt-2">{items.length} products</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        {items.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-display text-2xl text-charcoal">Coming soon</p>
            <p className="font-body text-sm text-taupe mt-2">We're curating the perfect collection for you.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((p, i) => (
              <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 6) * 0.05 }}>
                <ProductCard product={p} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
