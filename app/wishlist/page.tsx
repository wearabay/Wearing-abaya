"use client";

import Link from "next/link";
import { Trash2, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { getWishlist } from "@/lib/wishlist";

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<number[]>([]);

  useEffect(() => {
    const loadWishlist = () => {
      setWishlist(getWishlist());
    };

    loadWishlist();

    window.addEventListener("wishlist-updated", loadWishlist);

    return () => {
      window.removeEventListener("wishlist-updated", loadWishlist);
    };
  }, []);

  const wishlistProducts = products.filter((product) =>
    wishlist.includes(product.id)
  );

  const handleClearWishlist = () => {
    const confirmed = window.confirm(
      "Remove all products from your wishlist?"
    );

    if (!confirmed) return;

    localStorage.removeItem("wearing-abaya-wishlist");

    setWishlist([]);

    window.dispatchEvent(new Event("wishlist-updated"));
  };

  return (
    <main className="mx-auto max-w-7xl px-6 py-24">

      {/* HEADER */}
      <h1 className="text-5xl font-light">
  Wishlist
</h1>

<p className="mt-3 text-neutral-500">
  {wishlistProducts.length} saved item
  {wishlistProducts.length !== 1 && "s"}
</p>

      {/* EMPTY STATE */}
      {wishlistProducts.length === 0 ? (
        <div className="py-28 text-center">
          <div className="text-6xl">♡</div>

          <h2 className="mt-6 text-3xl font-light">
            Your Wishlist is Empty
          </h2>

          <p className="mt-4 text-neutral-500">
            Save your favorite abayas and they'll appear here.
          </p>

          <Link
            href="/shop"
            className="mt-10 inline-flex rounded-full border border-black px-8 py-3 text-xs uppercase tracking-[0.3em] transition hover:bg-black hover:text-white"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          {/* ACTION BAR */}
          <div className="mt-12 flex items-center justify-between border-b border-stone-200 pb-6">

            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-sm tracking-[0.18em] uppercase text-neutral-500 transition hover:text-black"
            >
              <ArrowLeft size={16} />
              Continue Shopping
            </Link>

    <span className="text-sm text-neutral-400">
      {wishlistProducts.length} items
    </span>

            <button
              type="button"
              onClick={handleClearWishlist}
              className="inline-flex items-center gap-2 text-sm tracking-[0.18em] uppercase text-neutral-500 transition hover:text-red-500"
            >
              <Trash2 size={16} />
              Clear All
            </button>

          </div>

          {/* GRID */}
          <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 xl:grid-cols-4">
            {wishlistProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </>
      )}
    </main>
  );
}