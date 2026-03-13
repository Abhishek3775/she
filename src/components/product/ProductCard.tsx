import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Star } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";

interface Props {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className = "" }: Props) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [hovered, setHovered] = useState(false);
  const [quickSize, setQuickSize] = useState<string | null>(null);
  const wishlisted = isInWishlist(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!quickSize) {
      const available = product.sizes.filter((s) => !product.outOfStockSizes.includes(s));
      if (available.length > 0) setQuickSize(available[0]);
      return;
    }
    addToCart({
      id: product.id, name: product.name, price: product.price, originalPrice: product.originalPrice,
      image: product.images[0], size: quickSize, color: product.colors[0]?.name || "", quantity: 1,
    });
    setQuickSize(null);
  };

  return (
    <div className={`group ${className}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => { setHovered(false); setQuickSize(null); }}>
      <Link to={`/product/${product.id}`} className="block">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-blush mb-3">
          <img src={hovered && product.hoverImage ? product.hoverImage : product.images[0]} alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

          {/* Badge */}
          {product.badge && (
            <span className={`absolute top-3 left-3 px-2.5 py-0.5 rounded-full font-body text-[10px] uppercase tracking-wider font-medium ${
              product.badge === "NEW" ? "bg-deep-rose text-cream" : product.badge === "SALE" ? "bg-gold text-cream" : "bg-charcoal text-cream"
            }`}>
              {product.badge}
            </span>
          )}

          {/* Wishlist */}
          <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlist(product.id); }}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-cream/80 backdrop-blur-sm flex items-center justify-center hover:bg-cream transition-colors"
            aria-label="Add to wishlist">
            <Heart size={14} className={wishlisted ? "fill-deep-rose text-deep-rose" : "text-charcoal"} />
          </button>

          {/* Quick Add */}
          <div className={`absolute bottom-0 left-0 right-0 bg-cream/95 backdrop-blur-sm p-3 transform transition-transform duration-300 ${hovered ? "translate-y-0" : "translate-y-full"}`}>
            {quickSize ? (
              <div className="flex gap-1.5 flex-wrap mb-2">
                {product.sizes.map((s) => (
                  <button key={s} onClick={(e) => { e.preventDefault(); e.stopPropagation(); setQuickSize(s); }}
                    disabled={product.outOfStockSizes.includes(s)}
                    className={`font-body text-[10px] px-2 py-1 rounded border transition-colors ${
                      product.outOfStockSizes.includes(s) ? "border-mauve/20 text-taupe/30 line-through cursor-not-allowed" :
                      quickSize === s ? "border-deep-rose bg-deep-rose text-cream" : "border-mauve/40 text-charcoal hover:border-deep-rose"
                    }`}>
                    {s}
                  </button>
                ))}
              </div>
            ) : null}
            <button onClick={handleQuickAdd} className="w-full bg-deep-rose text-cream font-body text-xs py-2 rounded hover:bg-dusty-rose transition-colors">
              {quickSize ? "Add to Bag" : "Quick Add"}
            </button>
          </div>

          {/* Color swatches */}
          {product.colors.length > 1 && (
            <div className="absolute bottom-14 left-3 flex gap-1">
              {product.colors.slice(0, 4).map((c) => (
                <div key={c.name} className="w-3.5 h-3.5 rounded-full border border-cream/60" style={{ backgroundColor: c.hex }} title={c.name} />
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <h3 className="font-display text-base text-charcoal group-hover:text-deep-rose transition-colors leading-tight">{product.name}</h3>
        <div className="flex items-center gap-1 mt-1">
          {[...Array(5)].map((_, i) => <Star key={i} size={10} className={i < Math.round(product.rating) ? "fill-gold text-gold" : "text-mauve/40"} />)}
          <span className="font-body text-[10px] text-taupe ml-1">({product.reviewCount})</span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="font-body text-sm font-medium text-deep-rose">₹{product.price.toLocaleString()}</span>
          {product.originalPrice > product.price && (
            <>
              <span className="font-body text-xs text-taupe line-through">₹{product.originalPrice.toLocaleString()}</span>
              <span className="font-body text-[10px] text-gold font-medium">SAVE {product.discount}%</span>
            </>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
