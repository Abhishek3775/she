import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

const FREE_SHIPPING_THRESHOLD = 999;

const SlideOutCart = () => {
  const { items, isOpen, setIsOpen, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();
  const total = getCartTotal();
  const progress = Math.min((total / FREE_SHIPPING_THRESHOLD) * 100, 100);
  const remaining = FREE_SHIPPING_THRESHOLD - total;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-charcoal/50 z-50" onClick={() => setIsOpen(false)} />
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "tween", duration: 0.3 }} className="fixed right-0 inset-y-0 w-full max-w-md bg-cream z-50 flex flex-col shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-mauve/30">
              <h2 className="font-display text-xl text-charcoal">Your Bag ({getCartCount()})</h2>
              <button onClick={() => setIsOpen(false)} aria-label="Close cart"><X size={20} className="text-charcoal" /></button>
            </div>

            {/* Shipping progress */}
            <div className="px-4 py-3 bg-blush/50">
              <div className="w-full h-1.5 bg-mauve/30 rounded-full overflow-hidden">
                <motion.div className="h-full bg-deep-rose rounded-full" initial={{ width: 0 }} animate={{ width: `${progress}%` }} />
              </div>
              <p className="font-body text-xs text-taupe mt-1.5">
                {remaining > 0 ? `Add ₹${remaining} more for free shipping!` : "🎉 You've unlocked free shipping!"}
              </p>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag size={48} className="text-mauve mb-4" />
                  <p className="font-display text-lg text-charcoal mb-1">Your bag is empty</p>
                  <p className="font-body text-sm text-taupe">Discover something beautiful</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-3">
                    <img src={item.image} alt={item.name} className="w-20 h-24 object-cover rounded bg-blush" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-sm text-charcoal truncate">{item.name}</h4>
                      <p className="font-body text-xs text-taupe">{item.size} · {item.color}</p>
                      <p className="font-body text-sm text-deep-rose font-medium mt-1">₹{item.price}</p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <button onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)} className="w-6 h-6 border border-mauve/40 rounded flex items-center justify-center hover:border-deep-rose"><Minus size={12} /></button>
                        <span className="font-body text-sm w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)} className="w-6 h-6 border border-mauve/40 rounded flex items-center justify-center hover:border-deep-rose"><Plus size={12} /></button>
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(item.id, item.size, item.color)} className="self-start text-taupe hover:text-deep-rose" aria-label="Remove"><X size={16} /></button>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-mauve/30 p-4 space-y-3">
                <div className="flex justify-between font-body text-sm">
                  <span className="text-taupe">Subtotal</span>
                  <span className="text-charcoal font-medium">₹{total}</span>
                </div>
                <Link to="/checkout" onClick={() => setIsOpen(false)} className="block w-full bg-deep-rose text-primary-foreground text-center py-3 rounded font-body text-sm font-medium hover:bg-dusty-rose transition-colors">
                  Proceed to Checkout
                </Link>
                <button onClick={() => setIsOpen(false)} className="w-full text-center font-body text-sm text-taupe hover:text-deep-rose transition-colors">
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SlideOutCart;
