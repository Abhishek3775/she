import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const OrderConfirmationPage = () => (
  <div className="bg-cream min-h-screen flex items-center justify-center">
    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center max-w-md mx-auto px-4">
      <div className="w-16 h-16 bg-deep-rose rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle size={32} className="text-cream" />
      </div>
      <h1 className="font-display text-3xl text-charcoal mb-2">Order Confirmed! ✦</h1>
      <p className="font-body text-sm text-taupe mb-1">Thank you for shopping with She & Shades</p>
      <p className="font-body text-sm text-taupe mb-8">You'll receive a confirmation email with your order details shortly.</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link to="/shop" className="bg-deep-rose text-primary-foreground px-6 py-3 rounded font-body text-sm font-medium hover:bg-dusty-rose transition-colors">Continue Shopping</Link>
        <Link to="/" className="border border-deep-rose text-deep-rose px-6 py-3 rounded font-body text-sm hover:bg-deep-rose hover:text-primary-foreground transition-colors">Back to Home</Link>
      </div>
    </motion.div>
  </div>
);

export default OrderConfirmationPage;
