import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById, getProductsByCategory, products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Heart, Star, Share2, ChevronDown, ChevronRight, Eye, Flame, Check } from "lucide-react";
import { motion } from "framer-motion";
import ProductCard from "@/components/product/ProductCard";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = getProductById(id || "");
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]?.name || "");
  const [quantity, setQuantity] = useState(1);
  const [openSection, setOpenSection] = useState<string | null>("description");

  if (!product) return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-3xl text-charcoal">Product not found</h1>
        <Link to="/shop" className="font-body text-sm text-deep-rose hover:underline mt-4 inline-block">Back to shop</Link>
      </div>
    </div>
  );

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addToCart({ id: product.id, name: product.name, price: product.price, originalPrice: product.originalPrice, image: product.images[0], size: selectedSize, color: selectedColor, quantity });
  };

  const related = product.relatedProducts.map((rid) => products.find((p) => p.id === rid)).filter(Boolean);
  const completeLook = product.completeTheLook.map((rid) => products.find((p) => p.id === rid)).filter(Boolean);

  return (
    <div className="bg-cream min-h-screen">
      <div className="container mx-auto px-4 py-4">
        {/* Breadcrumb */}
        <nav className="font-body text-xs text-taupe flex items-center gap-1 mb-6">
          <Link to="/" className="hover:text-deep-rose">Home</Link> <ChevronRight size={10} />
          <Link to={`/category/${product.category}`} className="hover:text-deep-rose capitalize">{product.category}</Link> <ChevronRight size={10} />
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Image gallery - 3 cols */}
          <div className="lg:col-span-3">
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-blush mb-3">
              <img src={product.images[selectedImage]} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-2 overflow-x-auto hide-scrollbar">
              {product.images.map((img, i) => (
                <button key={i} onClick={() => setSelectedImage(i)} className={`w-16 h-20 rounded overflow-hidden shrink-0 border-2 transition-colors ${i === selectedImage ? "border-deep-rose" : "border-transparent"}`}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info - 2 cols */}
          <div className="lg:col-span-2 lg:sticky lg:top-24 lg:self-start">
            <p className="font-body text-[10px] uppercase tracking-[0.15em] text-taupe mb-1">She & Shades</p>
            <h1 className="font-display text-2xl md:text-3xl text-charcoal mb-2">{product.name}</h1>

            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} size={12} className={i < Math.round(product.rating) ? "fill-gold text-gold" : "text-mauve/40"} />)}</div>
              <span className="font-body text-xs text-taupe">({product.reviewCount} reviews)</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="font-body text-2xl font-medium text-deep-rose">₹{product.price.toLocaleString()}</span>
              {product.originalPrice > product.price && (
                <>
                  <span className="font-body text-base text-taupe line-through">₹{product.originalPrice.toLocaleString()}</span>
                  <span className="bg-gold/20 text-gold px-2 py-0.5 rounded font-body text-xs font-medium">SAVE {product.discount}%</span>
                </>
              )}
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 text-xs font-body text-taupe mb-5">
              <span className="flex items-center gap-1"><Eye size={12} /> 12 viewing now</span>
              {selectedSize && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-1 text-deep-rose"><Flame size={12} /> Only 3 left in {selectedSize}</motion.span>}
            </div>

            {/* Colors */}
            <div className="mb-5">
              <p className="font-body text-sm font-medium text-charcoal mb-2">Color: {selectedColor}</p>
              <div className="flex gap-2">
                {product.colors.map((c) => (
                  <button key={c.name} onClick={() => setSelectedColor(c.name)}
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${selectedColor === c.name ? "border-deep-rose" : "border-mauve/30"}`}
                    style={{ backgroundColor: c.hex }} title={c.name} aria-label={c.name}>
                    {selectedColor === c.name && <Check size={12} className="text-charcoal mix-blend-difference" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <p className="font-body text-sm font-medium text-charcoal">Size</p>
                <button className="font-body text-xs text-deep-rose hover:underline">Size Guide</button>
              </div>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((s) => {
                  const oos = product.outOfStockSizes.includes(s);
                  return (
                    <button key={s} onClick={() => !oos && setSelectedSize(s)} disabled={oos}
                      className={`font-body text-sm px-4 py-2 rounded border transition-colors ${
                        oos ? "border-mauve/20 text-taupe/30 line-through cursor-not-allowed" :
                        selectedSize === s ? "border-deep-rose bg-deep-rose text-cream" : "border-mauve/40 text-charcoal hover:border-deep-rose"
                      }`}>
                      {s}
                    </button>
                  );
                })}
              </div>
              {!selectedSize && <p className="font-body text-xs text-deep-rose mt-1">Please select a size</p>}
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-3 mb-5">
              <p className="font-body text-sm font-medium text-charcoal">Qty:</p>
              <div className="flex items-center border border-mauve/40 rounded">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-1.5 font-body text-sm hover:bg-blush">−</button>
                <span className="px-3 py-1.5 font-body text-sm border-x border-mauve/40">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-1.5 font-body text-sm hover:bg-blush">+</button>
              </div>
            </div>

            {/* Actions */}
            <button onClick={handleAddToCart} disabled={!selectedSize}
              className="w-full bg-deep-rose text-primary-foreground py-3.5 rounded font-body text-sm font-medium hover:bg-dusty-rose transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-2">
              Add to Bag
            </button>
            <button onClick={() => toggleWishlist(product.id)}
              className="w-full border border-deep-rose text-deep-rose py-3 rounded font-body text-sm flex items-center justify-center gap-2 hover:bg-deep-rose/5 transition-colors">
              <Heart size={16} className={isInWishlist(product.id) ? "fill-deep-rose" : ""} />
              {isInWishlist(product.id) ? "Saved to Wishlist" : "Save to Wishlist"}
            </button>

            {/* Delivery */}
            <p className="font-body text-xs text-taupe mt-4 leading-relaxed">
              Order before 5PM for same-day dispatch · Free delivery above ₹999
            </p>

            {/* Accordion sections */}
            <div className="mt-6 border-t border-mauve/20">
              {[
                { key: "description", title: "Product Description", content: product.description },
                { key: "fabric", title: "Fabric & Care", content: `${product.fabric}\n${product.care}` },
                { key: "shipping", title: "Shipping & Returns", content: "Free shipping on orders above ₹999. Standard delivery: 3-5 business days. Express delivery: 1-2 business days. Easy 7-day returns." },
              ].map(({ key, title, content }) => (
                <div key={key} className="border-b border-mauve/20">
                  <button onClick={() => setOpenSection(openSection === key ? null : key)} className="w-full flex items-center justify-between py-3 font-body text-sm text-charcoal">
                    {title}
                    <ChevronDown size={14} className={`transition-transform ${openSection === key ? "rotate-180" : ""}`} />
                  </button>
                  {openSection === key && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="pb-3 font-body text-sm text-taupe leading-relaxed whitespace-pre-line">
                      {content}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Share */}
            <div className="flex items-center gap-3 mt-4">
              <span className="font-body text-xs text-taupe">Share:</span>
              {["Instagram", "WhatsApp", "Copy Link"].map((s) => (
                <button key={s} className="font-body text-xs text-charcoal hover:text-deep-rose transition-colors">{s}</button>
              ))}
            </div>
          </div>
        </div>

        {/* Complete the look */}
        {completeLook.length > 0 && (
          <section className="mt-16">
            <h2 className="font-display text-2xl italic text-charcoal mb-6">Complete the Look</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {completeLook.map((p) => p && <ProductCard key={p.id} product={p} />)}
            </div>
          </section>
        )}

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-16 mb-8">
            <h2 className="font-display text-2xl italic text-charcoal mb-6">You May Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map((p) => p && <ProductCard key={p.id} product={p} />)}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
