"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

export default function EmptyWishlist() {

  return (

    <section
      className="
        flex
        min-h-[60vh]
        flex-col
        items-center
        justify-center
        px-6
        text-center
      "
    >

      <div
        className="
          mb-8
          rounded-full
          bg-stone-100
          p-7
        "
      >

        <Heart
          size={38}
          strokeWidth={1.4}
          className="text-neutral-700"
        />

      </div>

      <h1 className="text-3xl font-light">

        Your Wishlist is Empty

      </h1>

      <p
        className="
          mt-4
          max-w-md
          leading-7
          text-neutral-500
        "
      >
        Save your favourite abayas and timeless
        pieces so you can find them again anytime.
      </p>

      <Link
        href="/shop"
        className="
          mt-10
          rounded-full
          bg-black
          px-10
          py-4
          text-xs
          uppercase
          tracking-[0.22em]
          text-white
          transition
          hover:bg-neutral-800
        "
      >
        Continue Shopping
      </Link>

    </section>

  );

}