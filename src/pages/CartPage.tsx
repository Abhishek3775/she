import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, X, ArrowLeft } from "lucide-react";

const CartPage = () => {
  const { items, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const total = getCartTotal();
  const shipping = total >= 999 ? 0 : 99;

  return (
    <div className="bg-cream min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="font-display text-3xl text-charcoal mb-8">Shopping Bag</h1>
        {items.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-display text-2xl text-charcoal mb-4">Your bag is empty</p>
            <Link to="/shop" className="bg-deep-rose text-primary-foreground px-6 py-3 rounded font-body text-sm">Continue Shopping</Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-4 bg-blush/20 rounded-lg p-4 border border-mauve/20">
                  <img src={item.image} alt={item.name} className="w-24 h-32 object-cover rounded" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-display text-base text-charcoal">{item.name}</h3>
                        <p className="font-body text-xs text-taupe mt-0.5">{item.size} · {item.color}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.id, item.size, item.color)} aria-label="Remove"><X size={16} className="text-taupe hover:text-deep-rose" /></button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-mauve/40 rounded">
                        <button onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)} className="px-2.5 py-1"><Minus size={12} /></button>
                        <span className="px-3 py-1 font-body text-sm border-x border-mauve/40">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)} className="px-2.5 py-1"><Plus size={12} /></button>
                      </div>
                      <span className="font-body text-sm font-medium text-deep-rose">₹{(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
              <Link to="/shop" className="flex items-center gap-2 font-body text-sm text-taupe hover:text-deep-rose mt-4"><ArrowLeft size={14} /> Continue Shopping</Link>
            </div>

            <div className="bg-blush/30 rounded-lg p-6 border border-mauve/20 h-fit lg:sticky lg:top-24">
              <h3 className="font-display text-lg text-charcoal mb-4">Order Summary</h3>
              <div className="space-y-2 font-body text-sm">
                <div className="flex justify-between text-taupe"><span>Subtotal</span><span>₹{total.toLocaleString()}</span></div>
                <div className="flex justify-between text-taupe"><span>Shipping</span><span>{shipping === 0 ? "Free" : `₹${shipping}`}</span></div>
                <div className="border-t border-mauve/30 pt-2 flex justify-between text-charcoal font-medium"><span>Total</span><span>₹{(total + shipping).toLocaleString()}</span></div>
              </div>
              <Link to="/checkout" className="block w-full bg-deep-rose text-primary-foreground text-center py-3 rounded font-body text-sm font-medium hover:bg-dusty-rose transition-colors mt-4">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
