import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const EmailCapture = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError("Please enter a valid email"); return; }
    setError("");
    setSubmitted(true);
  };

  return (
    <section className="py-16 bg-blush">
      <div className="container mx-auto px-4 text-center max-w-xl">
        {submitted ? (
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <div className="w-12 h-12 bg-deep-rose rounded-full flex items-center justify-center mx-auto mb-4">
              <Check size={24} className="text-cream" />
            </div>
            <h2 className="font-display text-2xl text-charcoal">Welcome to the She & Shades family ✦</h2>
            <p className="font-body text-sm text-taupe mt-2">Check your inbox for your exclusive discount code.</p>
          </motion.div>
        ) : (
          <>
            <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-2">Get 10% Off Your First Order</h2>
            <p className="font-body text-sm text-taupe mb-6">Join 50,000+ women. New arrivals, style tips, exclusive offers.</p>
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="flex-1 bg-cream border border-mauve/40 rounded px-4 py-3 font-body text-sm outline-none focus:border-deep-rose" />
              <button type="submit" className="bg-deep-rose text-primary-foreground px-6 py-3 rounded font-body text-sm font-medium hover:bg-dusty-rose transition-colors shrink-0">Subscribe</button>
            </form>
            {error && <p className="font-body text-xs text-deep-rose mt-2">{error}</p>}
          </>
        )}
      </div>
    </section>
  );
};

export default EmailCapture;
