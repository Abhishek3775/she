import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Heart, User, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { label: "New In", to: "/shop?filter=new" },
  { label: "Dresses", to: "/category/dresses" },
  { label: "Tops", to: "/category/tops" },
  { label: "Sets", to: "/category/sets" },
  { label: "Sale", to: "/shop?filter=sale" },
  { label: "Lookbook", to: "/lookbook" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { toggleCart, getCartCount } = useCart();
  const { items: wishlistItems } = useWishlist();
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <>
      <nav className={`sticky top-0 z-50 bg-cream border-b border-mauve/40 transition-all duration-300 ${scrolled ? "py-2 shadow-md" : "py-3"}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Left nav links (desktop) */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.slice(0, 3).map((link) => (
              <Link key={link.to} to={link.to} className="font-body text-sm tracking-wide text-taupe hover:text-deep-rose relative group transition-colors">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-deep-rose scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <Menu size={22} className="text-charcoal" />
          </button>

          {/* Center logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="She & Shades" className="h-10 w-10 rounded-full object-cover" />
            <div className="hidden sm:block">
              <h1 className="font-display text-xl text-deep-rose leading-tight">She & Shades</h1>
              <p className="font-body text-[9px] uppercase tracking-[0.15em] text-taupe">Fashion Fits For Her</p>
            </div>
          </Link>

          {/* Right nav links (desktop) + icons */}
          <div className="flex items-center gap-5">
            <div className="hidden lg:flex items-center gap-6 mr-4">
              {navLinks.slice(3).map((link) => (
                <Link key={link.to} to={link.to} className="font-body text-sm tracking-wide text-taupe hover:text-deep-rose relative group transition-colors">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-deep-rose scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              ))}
            </div>

            <button onClick={() => setSearchOpen(!searchOpen)} aria-label="Search" className="text-charcoal hover:text-deep-rose transition-colors">
              <Search size={20} />
            </button>
            <Link to="/wishlist" className="relative text-charcoal hover:text-deep-rose transition-colors" aria-label="Wishlist">
              <Heart size={20} />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-deep-rose text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-body">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            <Link to="/about" className="text-charcoal hover:text-deep-rose transition-colors hidden sm:block" aria-label="Account">
              <User size={20} />
            </Link>
            <button onClick={toggleCart} className="relative text-charcoal hover:text-deep-rose transition-colors" aria-label="Cart">
              <ShoppingBag size={20} />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-deep-rose text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-body">
                  {getCartCount()}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-mauve/30">
              <div className="container mx-auto px-4 py-3">
                <input type="text" placeholder="Search for dresses, tops, sets..." className="w-full bg-transparent font-body text-sm outline-none placeholder:text-taupe/60" autoFocus />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-charcoal/50 z-50" onClick={() => setMobileOpen(false)} />
            <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ type: "tween" }} className="fixed inset-y-0 left-0 w-80 bg-cream z-50 p-6 flex flex-col">
              <div className="flex justify-between items-center mb-8">
                <span className="font-display text-xl text-deep-rose">She & Shades</span>
                <button onClick={() => setMobileOpen(false)} aria-label="Close"><X size={22} /></button>
              </div>
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link key={link.to} to={link.to} className="font-display text-lg text-charcoal hover:text-deep-rose transition-colors">{link.label}</Link>
                ))}
                <Link to="/about" className="font-display text-lg text-charcoal hover:text-deep-rose">About</Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
