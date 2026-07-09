"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";

import { closeCart } from "@/lib/cart-drawer";

export default function EmptyCart() {
  return (
    <div className="flex h-full flex-col items-center justify-center px-8 text-center">

      <div className="mb-8 rounded-full bg-stone-100 p-6">
        <ShoppingBag
          size={34}
          strokeWidth={1.5}
        />
      </div>

      <h3 className="text-2xl font-light text-neutral-900">
        Your Bag is Empty
      </h3>

      <p className="mt-3 max-w-xs text-sm leading-7 text-neutral-500">
        Discover timeless pieces crafted for modern elegance.
      </p>

      <Link
        href="/shop"
        onClick={closeCart}
        className="
          mt-10
          rounded-full
          bg-black
          px-8
          py-4
          text-xs
          uppercase
          tracking-[0.22em]
          text-white
          transition
          hover:bg-neutral-900
        "
      >
        Continue Shopping
      </Link>

    </div>
  );
}