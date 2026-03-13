import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { motion } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";

const sortOptions = ["Featured", "Price: Low-High", "Price: High-Low", "Newest", "Rating"];
const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL"];
const categoryOptions = ["dresses", "tops", "sets", "bottoms", "festive", "accessories"];

const ShopPage = () => {
  const [searchParams] = useSearchParams();
  const filterParam = searchParams.get("filter");
  const [sort, setSort] = useState("Featured");
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let items = [...products];
    if (filterParam === "new") items = items.filter((p) => p.isNew);
    if (filterParam === "sale") items = items.filter((p) => p.isSale);
    if (selectedCategories.length) items = items.filter((p) => selectedCategories.includes(p.category));
    if (selectedSizes.length) items = items.filter((p) => p.sizes.some((s) => selectedSizes.includes(s)));
    
    switch (sort) {
      case "Price: Low-High": items.sort((a, b) => a.price - b.price); break;
      case "Price: High-Low": items.sort((a, b) => b.price - a.price); break;
      case "Newest": items.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); break;
      case "Rating": items.sort((a, b) => b.rating - a.rating); break;
    }
    return items;
  }, [filterParam, sort, selectedSizes, selectedCategories]);

  const toggleSize = (s: string) => setSelectedSizes((p) => p.includes(s) ? p.filter((x) => x !== s) : [...p, s]);
  const toggleCat = (c: string) => setSelectedCategories((p) => p.includes(c) ? p.filter((x) => x !== c) : [...p, c]);
  const clearFilters = () => { setSelectedSizes([]); setSelectedCategories([]); };
  const hasFilters = selectedSizes.length > 0 || selectedCategories.length > 0;

  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <div className="bg-blush/50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl text-charcoal">
            {filterParam === "new" ? "New Arrivals" : filterParam === "sale" ? "Sale" : "Shop All"}
          </h1>
          <p className="font-body text-sm text-taupe mt-2">{filtered.length} products</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filter bar */}
        <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
          <button onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2 border border-mauve/40 px-4 py-2 rounded font-body text-sm text-charcoal hover:border-deep-rose transition-colors">
            <SlidersHorizontal size={14} /> Filters
          </button>
          <div className="flex items-center gap-2 flex-wrap">
            {hasFilters && (
              <button onClick={clearFilters} className="flex items-center gap-1 text-xs font-body text-deep-rose hover:underline"><X size={12} /> Clear all</button>
            )}
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="bg-cream border border-mauve/40 rounded px-3 py-2 font-body text-sm outline-none focus:border-deep-rose">
              {sortOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
        </div>

        {/* Filters panel */}
        {showFilters && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="mb-6 p-4 bg-blush/30 rounded-lg border border-mauve/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-body text-sm font-medium text-charcoal mb-2">Category</h4>
                <div className="flex flex-wrap gap-2">
                  {categoryOptions.map((c) => (
                    <button key={c} onClick={() => toggleCat(c)} className={`font-body text-xs px-3 py-1.5 rounded-full border capitalize transition-colors ${selectedCategories.includes(c) ? "border-deep-rose text-deep-rose bg-deep-rose/5" : "border-mauve/40 text-taupe"}`}>
                      {c}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-body text-sm font-medium text-charcoal mb-2">Size</h4>
                <div className="flex flex-wrap gap-2">
                  {sizeOptions.map((s) => (
                    <button key={s} onClick={() => toggleSize(s)} className={`font-body text-xs px-3 py-1.5 rounded border transition-colors ${selectedSizes.includes(s) ? "border-deep-rose text-deep-rose bg-deep-rose/5" : "border-mauve/40 text-taupe"}`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Product grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-display text-2xl text-charcoal mb-2">No products found</p>
            <p className="font-body text-sm text-taupe mb-4">Try adjusting your filters</p>
            <button onClick={clearFilters} className="bg-deep-rose text-primary-foreground px-6 py-2 rounded font-body text-sm">Clear Filters</button>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((p, i) => (
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

export default ShopPage;
