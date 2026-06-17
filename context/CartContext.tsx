"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Product = {
  id: string;
  name: string;
  nameLv?: string | null;
  nameRu?: string | null;
  nameEn?: string | null;
  description?: string | null;
  descriptionLv?: string | null;
  descriptionRu?: string | null;
  descriptionEn?: string | null;
  price: number;
  discountPrice?: number | null;
  image?: string | null;
  isDigital?: boolean | null;
  digitalFileUrl?: string | null;
  digitalDownloadLink?: string | null;
  /** Variable products: the selected variation's id + human label (e.g. "50 €"). */
  variationId?: string | null;
  variationLabel?: string | null;
};

type CartItem = Product & { quantity: number };

/** Unique cart-line key: distinguishes variations of the same product. */
export function getLineId(item: Pick<Product, "id" | "variationId">): string {
  return item.variationId ? `${item.id}:${item.variationId}` : item.id;
}

type CartContextType = {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (lineId: string) => void;
  updateQuantity: (lineId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setItems(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (product: Product) => {
    const lineId = getLineId(product);
    setItems((prev) => {
      const existing = prev.find((item) => getLineId(item) === lineId);
      if (existing) {
        return prev.map((item) =>
          getLineId(item) === lineId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (lineId: string) => {
    setItems((prev) => prev.filter((item) => getLineId(item) !== lineId));
  };

  const updateQuantity = (lineId: string, quantity: number) => {
    if (quantity < 1) return;
    setItems((prev) =>
      prev.map((item) => (getLineId(item) === lineId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => setItems([]);

  const total = items.reduce((sum, item) => {
    const price = item.discountPrice ?? item.price;
    return sum + price * item.quantity;
  }, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, total, itemCount, isCartOpen, setIsCartOpen }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
