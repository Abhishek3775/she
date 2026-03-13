import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

interface WishlistContextType {
  items: string[];
  addToWishlist: (id: string) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  toggleWishlist: (id: string) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem("she-wishlist") || "[]"); } catch { return []; }
  });

  useEffect(() => { localStorage.setItem("she-wishlist", JSON.stringify(items)); }, [items]);

  const addToWishlist = useCallback((id: string) => setItems((p) => p.includes(id) ? p : [...p, id]), []);
  const removeFromWishlist = useCallback((id: string) => setItems((p) => p.filter((i) => i !== id)), []);
  const isInWishlist = useCallback((id: string) => items.includes(id), [items]);
  const toggleWishlist = useCallback((id: string) => {
    setItems((p) => p.includes(id) ? p.filter((i) => i !== id) : [...p, id]);
  }, []);

  return (
    <WishlistContext.Provider value={{ items, addToWishlist, removeFromWishlist, isInWishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
};
