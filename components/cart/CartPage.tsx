"use client";

import { useEffect, useState } from "react";

import {
  getCart,
  type CartItem,
} from "@/lib/cart";

import EmptyCart from "./EmptyCart";
import CartItemCard from "./CartItemCard";
import CartSummary from "./CartSummary";
import FreeShippingProgress from "./FreeShippingProgress";
import RecommendedProducts from "./RecommendedProducts";
import RecentlyViewed from "./RecentlyViewed";

export default function CartPage() {

  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {

    setItems(getCart());

    const update = () => {
      setItems(getCart());
    };

    window.addEventListener(
      "cart-updated",
      update
    );

    return () =>
      window.removeEventListener(
        "cart-updated",
        update
      );

  }, []);

  const subtotal = items.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (

  <div className="grid gap-12 lg:grid-cols-[1fr_380px]">

    <div className="space-y-6">

      {items.map((item) => (

        <CartItemCard
          key={`${item.id}-${item.color}-${item.size}`}
          item={item}
          onUpdate={() => setItems(getCart())}
        />

      ))}

    </div>

    <div className="lg:sticky lg:top-28 h-fit space-y-6">

      <FreeShippingProgress
        subtotal={subtotal}
      />

      <CartSummary
        subtotal={subtotal}
      />

    </div>

    <div className="mt-20">

  <RecommendedProducts />

<div className="mt-20">

  <RecentlyViewed />

</div>

</div>

  </div>

);

}