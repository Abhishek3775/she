import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Shield, RotateCcw, CheckCircle } from "lucide-react";

const CheckoutPage = () => {
  const { items, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const total = getCartTotal();
  const shipping = total >= 999 ? 0 : 99;

  const [form, setForm] = useState({ email: "", phone: "", name: "", address: "", city: "", state: "", pincode: "", payment: "upi" });
  const update = (key: string, val: string) => setForm((p) => ({ ...p, [key]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    navigate("/order-confirmation");
  };

  if (items.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <div className="bg-cream min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <h1 className="font-display text-3xl text-charcoal mb-8">Checkout</h1>
        <form onSubmit={handleSubmit} className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3 space-y-6">
            {/* Contact */}
            <div className="bg-blush/20 rounded-lg p-5 border border-mauve/20">
              <h3 className="font-display text-lg text-charcoal mb-4">Contact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input required value={form.email} onChange={(e) => update("email", e.target.value)} type="email" placeholder="Email" className="bg-cream border border-mauve/40 rounded px-4 py-2.5 font-body text-sm outline-none focus:border-deep-rose" />
                <input required value={form.phone} onChange={(e) => update("phone", e.target.value)} type="tel" placeholder="Phone" className="bg-cream border border-mauve/40 rounded px-4 py-2.5 font-body text-sm outline-none focus:border-deep-rose" />
              </div>
            </div>

            {/* Delivery */}
            <div className="bg-blush/20 rounded-lg p-5 border border-mauve/20">
              <h3 className="font-display text-lg text-charcoal mb-4">Delivery Address</h3>
              <div className="space-y-3">
                <input required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Full Name" className="w-full bg-cream border border-mauve/40 rounded px-4 py-2.5 font-body text-sm outline-none focus:border-deep-rose" />
                <input required value={form.address} onChange={(e) => update("address", e.target.value)} placeholder="Address" className="w-full bg-cream border border-mauve/40 rounded px-4 py-2.5 font-body text-sm outline-none focus:border-deep-rose" />
                <div className="grid grid-cols-3 gap-3">
                  <input required value={form.city} onChange={(e) => update("city", e.target.value)} placeholder="City" className="bg-cream border border-mauve/40 rounded px-4 py-2.5 font-body text-sm outline-none focus:border-deep-rose" />
                  <input required value={form.state} onChange={(e) => update("state", e.target.value)} placeholder="State" className="bg-cream border border-mauve/40 rounded px-4 py-2.5 font-body text-sm outline-none focus:border-deep-rose" />
                  <input required value={form.pincode} onChange={(e) => update("pincode", e.target.value)} placeholder="Pincode" className="bg-cream border border-mauve/40 rounded px-4 py-2.5 font-body text-sm outline-none focus:border-deep-rose" />
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-blush/20 rounded-lg p-5 border border-mauve/20">
              <h3 className="font-display text-lg text-charcoal mb-4">Payment Method</h3>
              <div className="grid grid-cols-2 gap-2">
                {[{ key: "upi", label: "UPI" }, { key: "card", label: "Credit/Debit Card" }, { key: "netbanking", label: "Net Banking" }, { key: "cod", label: "Cash on Delivery" }].map(({ key, label }) => (
                  <button key={key} type="button" onClick={() => update("payment", key)}
                    className={`p-3 rounded border font-body text-sm transition-colors ${form.payment === key ? "border-deep-rose bg-deep-rose/5 text-deep-rose" : "border-mauve/40 text-taupe"}`}>
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-2">
            <div className="bg-blush/30 rounded-lg p-5 border border-mauve/20 sticky top-24">
              <h3 className="font-display text-lg text-charcoal mb-4">Order Summary</h3>
              <div className="space-y-3 mb-4">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-3">
                    <img src={item.image} alt={item.name} className="w-14 h-18 object-cover rounded bg-blush" />
                    <div className="flex-1 min-w-0">
                      <p className="font-body text-sm text-charcoal truncate">{item.name}</p>
                      <p className="font-body text-xs text-taupe">{item.size} · Qty: {item.quantity}</p>
                      <p className="font-body text-sm text-deep-rose">₹{(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-mauve/30 pt-3 space-y-2 font-body text-sm">
                <div className="flex justify-between text-taupe"><span>Subtotal</span><span>₹{total.toLocaleString()}</span></div>
                <div className="flex justify-between text-taupe"><span>Shipping</span><span>{shipping === 0 ? "Free" : `₹${shipping}`}</span></div>
                <div className="border-t border-mauve/30 pt-2 flex justify-between text-charcoal font-medium text-base"><span>Total</span><span>₹{(total + shipping).toLocaleString()}</span></div>
              </div>
              <button type="submit" className="w-full bg-deep-rose text-primary-foreground py-3.5 rounded font-body text-sm font-medium hover:bg-dusty-rose transition-colors mt-4">
                Place Order →
              </button>
              <div className="flex items-center justify-center gap-4 mt-4 text-xs font-body text-taupe">
                <span className="flex items-center gap-1"><Shield size={12} /> SSL Secured</span>
                <span className="flex items-center gap-1"><RotateCcw size={12} /> 7-day Returns</span>
                <span className="flex items-center gap-1"><CheckCircle size={12} /> Authentic</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
