import { Link } from "react-router-dom";
import { useWishlist } from "@/context/WishlistContext";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { Heart } from "lucide-react";

const WishlistPage = () => {
  const { items } = useWishlist();
  const wishlistProducts = items.map((id) => products.find((p) => p.id === id)).filter(Boolean);

  return (
    <div className="bg-cream min-h-screen">
      <div className="bg-blush/50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl text-charcoal">Your Wishlist</h1>
          <p className="font-body text-sm text-taupe mt-2">{wishlistProducts.length} saved items</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        {wishlistProducts.length === 0 ? (
          <div className="text-center py-20">
            <Heart size={48} className="text-mauve mx-auto mb-4" />
            <p className="font-display text-2xl text-charcoal mb-2">Your wishlist is empty</p>
            <p className="font-body text-sm text-taupe mb-6">Save your favourite pieces here</p>
            <Link to="/shop" className="bg-deep-rose text-primary-foreground px-6 py-3 rounded font-body text-sm">Browse Collection</Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {wishlistProducts.map((p) => p && <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
