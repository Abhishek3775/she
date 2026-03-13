import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Mail, Phone, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="bg-charcoal text-cream/80 border-t border-mauve/20">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <h3 className="font-display text-2xl text-cream mb-2">She & Shades</h3>
          <p className="font-body text-xs uppercase tracking-[0.15em] text-taupe mb-4">Fashion Fits For Her</p>
          <p className="font-body text-sm text-cream/60 mb-4">Premium fashion for the modern woman who knows her style.</p>
          <div className="flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-8 h-8 rounded-full border border-cream/20 flex items-center justify-center hover:border-deep-rose hover:text-deep-rose transition-colors" aria-label="Social">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Shop */}
        <div>
          <h4 className="font-display text-lg text-cream mb-4">Shop</h4>
          <div className="flex flex-col gap-2 font-body text-sm">
            {["New In", "Dresses", "Tops", "Co-ord Sets", "Sale"].map((item) => (
              <Link key={item} to="/shop" className="hover:text-deep-rose transition-colors">{item}</Link>
            ))}
          </div>
        </div>

        {/* Help */}
        <div>
          <h4 className="font-display text-lg text-cream mb-4">Help</h4>
          <div className="flex flex-col gap-2 font-body text-sm">
            {["Size Guide", "Track Order", "Returns", "FAQs", "Contact Us"].map((item) => (
              <a key={item} href="#" className="hover:text-deep-rose transition-colors">{item}</a>
            ))}
          </div>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-display text-lg text-cream mb-4">Connect</h4>
          <div className="flex flex-col gap-3 font-body text-sm">
            <a href="#" className="flex items-center gap-2 hover:text-deep-rose transition-colors"><Phone size={14} /> +91 98765 43210</a>
            <a href="#" className="flex items-center gap-2 hover:text-deep-rose transition-colors"><Mail size={14} /> hello@sheandshades.com</a>
            <a href="#" className="flex items-center gap-2 hover:text-deep-rose transition-colors"><MessageCircle size={14} /> Chat with us</a>
          </div>
          <div className="flex gap-2 mt-4 text-xs text-cream/40">
            <span>UPI</span> · <span>Visa</span> · <span>Mastercard</span>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10 mt-8 pt-6 text-center font-body text-xs text-cream/40">
        She & Shades © 2025. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
