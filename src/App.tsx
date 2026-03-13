import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { AnimatePresence } from "framer-motion";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SlideOutCart from "@/components/layout/SlideOutCart";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";
import BackToTop from "@/components/ui/BackToTop";
import HomePage from "@/pages/HomePage";
import ShopPage from "@/pages/ShopPage";
import CategoryPage from "@/pages/CategoryPage";
import ProductDetailPage from "@/pages/ProductDetailPage";
import WishlistPage from "@/pages/WishlistPage";
import CartPage from "@/pages/CartPage";
import CheckoutPage from "@/pages/CheckoutPage";
import OrderConfirmationPage from "@/pages/OrderConfirmationPage";
import LookbookPage from "@/pages/LookbookPage";
import AboutPage from "@/pages/AboutPage";
import NotFound from "@/pages/NotFound";

const App = () => (
  <CartProvider>
    <WishlistProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-cream">
          <AnnouncementBar />
          <Navbar />
          <main className="flex-1">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/category/:slug" element={<CategoryPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
                <Route path="/lookbook" element={<LookbookPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
          <SlideOutCart />
          <WhatsAppWidget />
          <BackToTop />
        </div>
      </BrowserRouter>
    </WishlistProvider>
  </CartProvider>
);

export default App;
