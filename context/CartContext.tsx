"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  getCart,
  saveCart,
  type CartItem,
} from "@/lib/cart";

type CartContextType = {
  items: CartItem[];
  count: number;
  subtotal: number;

  refreshCart: () => void;

  addItem: (item: CartItem) => void;

  removeItem: (
    id: number,
    color?: string,
    size?: string
  ) => void;

  updateQuantity: (
    id: number,
    color: string | undefined,
    size: string | undefined,
    quantity: number
  ) => void;

  clearCart: () => void;
};

const CartContext =
  createContext<CartContextType | null>(null);

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [items, setItems] = useState<CartItem[]>([]);

  const refreshCart = useCallback(() => {
    setItems(getCart());
  }, []);

  useEffect(() => {
    refreshCart();
  }, [refreshCart]);

  const persist = (cart: CartItem[]) => {
    saveCart(cart);
    setItems(cart);
  };

  const addItem = (item: CartItem) => {
    const cart = getCart();

    const index = cart.findIndex(
      (p) =>
        p.id === item.id &&
        p.color === item.color &&
        p.size === item.size
    );

    if (index >= 0) {
      cart[index].quantity += item.quantity;
    } else {
      cart.push(item);
    }

    persist(cart);
  };

  const removeItem = (
    id: number,
    color?: string,
    size?: string
  ) => {
    const updated = items.filter(
      (item) =>
        !(
          item.id === id &&
          item.color === color &&
          item.size === size
        )
    );

    persist(updated);
  };

  const updateQuantity = (
    id: number,
    color: string | undefined,
    size: string | undefined,
    quantity: number
  ) => {
    const updated = items.map((item) => {
      if (
        item.id === id &&
        item.color === color &&
        item.size === size
      ) {
        return {
          ...item,
          quantity: Math.max(1, quantity),
        };
      }

      return item;
    });

    persist(updated);
  };

  const clearCart = () => {
    persist([]);
  };

  const count = useMemo(
    () =>
      items.reduce(
        (sum, item) => sum + item.quantity,
        0
      ),
    [items]
  );

  const subtotal = useMemo(
    () =>
      items.reduce(
        (sum, item) =>
          sum + item.price * item.quantity,
        0
      ),
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        count,
        subtotal,
        refreshCart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}