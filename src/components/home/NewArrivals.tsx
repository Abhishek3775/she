import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { getNewArrivals, products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

const tabs = ["All", "Dresses", "Tops", "Sets", "Bottoms"];

const NewArrivals = () => {
  const [activeTab, setActiveTab] = useState("All");
  const newItems = getNewArrivals();
  const filtered = activeTab === "All" ? newItems : newItems.filter((p) => p.category === activeTab.toLowerCase());
  // If not enough new items, fill from all products
  const displayed = filtered.length > 0 ? filtered : products.slice(0, 8);

  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <h2 className="font-display text-3xl md:text-4xl italic text-charcoal">New Arrivals</h2>
          <div className="flex gap-2 mt-4 md:mt-0 flex-wrap">
            {tabs.map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`font-body text-xs px-4 py-1.5 rounded-full border transition-colors ${activeTab === tab ? "border-deep-rose text-deep-rose bg-deep-rose/5" : "border-mauve/40 text-taupe hover:border-deep-rose"}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {displayed.slice(0, 8).map((product) => (
              <motion.div key={product.id} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-8">
          <Link to="/shop?filter=new" className="inline-block border border-deep-rose text-deep-rose px-8 py-3 rounded font-body text-sm hover:bg-deep-rose hover:text-primary-foreground transition-colors">
            View All New Arrivals →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
