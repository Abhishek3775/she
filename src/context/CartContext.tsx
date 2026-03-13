import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string, size: string, color: string) => void;
  updateQuantity: (id: string, size: string, color: string, qty: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setIsOpen: (open: boolean) => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try { return JSON.parse(localStorage.getItem("she-cart") || "[]"); } catch { return []; }
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => { localStorage.setItem("she-cart", JSON.stringify(items)); }, [items]);

  const addToCart = useCallback((item: CartItem) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id && i.size === item.size && i.color === item.color);
      if (existing) return prev.map((i) => i === existing ? { ...i, quantity: i.quantity + item.quantity } : i);
      return [...prev, item];
    });
    setIsOpen(true);
  }, []);

  const removeFromCart = useCallback((id: string, size: string, color: string) => {
    setItems((prev) => prev.filter((i) => !(i.id === id && i.size === size && i.color === color)));
  }, []);

  const updateQuantity = useCallback((id: string, size: string, color: string, qty: number) => {
    if (qty < 1) return;
    setItems((prev) => prev.map((i) => i.id === id && i.size === size && i.color === color ? { ...i, quantity: qty } : i));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);
  const toggleCart = useCallback(() => setIsOpen((p) => !p), []);
  const getCartTotal = useCallback(() => items.reduce((t, i) => t + i.price * i.quantity, 0), [items]);
  const getCartCount = useCallback(() => items.reduce((t, i) => t + i.quantity, 0), [items]);

  return (
    <CartContext.Provider value={{ items, isOpen, addToCart, removeFromCart, updateQuantity, clearCart, toggleCart, setIsOpen, getCartTotal, getCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
