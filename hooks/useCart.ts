"use client";

import { useEffect, useMemo, useState } from "react";

import {
  getCart,
  type CartItem,
} from "@/lib/cart";

export default function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const update = () => setItems(getCart());

    update();

    window.addEventListener("cart-updated", update);

    return () => {
      window.removeEventListener("cart-updated", update);
    };
  }, []);

  const subtotal = useMemo(
    () =>
      items.reduce(
        (sum, item) =>
          sum + item.price * item.quantity,
        0
      ),
    [items]
  );

  const count = useMemo(
    () =>
      items.reduce(
        (sum, item) => sum + item.quantity,
        0
      ),
    [items]
  );

  return {
    items,
    subtotal,
    count,
  };
}