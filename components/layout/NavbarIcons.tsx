"use client";

import Link from "next/link";
import { Search, Heart, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

import { getWishlistCount } from "@/lib/wishlist";
import { getCartCount } from "@/lib/cart";

type NavbarIconsProps = {
  onCartClick: () => void;
  onSearchClick: () => void;
};

export default function NavbarIcons({
  onCartClick,
  onSearchClick,
}: NavbarIconsProps) {
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateWishlist = () => {
      setWishlistCount(getWishlistCount());
    };

    const updateCart = () => {
      setCartCount(getCartCount());
    };

    // initial load
    updateWishlist();
    updateCart();

    // listeners
    window.addEventListener("wishlist-updated", updateWishlist);
    window.addEventListener("cart-updated", updateCart);

    return () => {
      window.removeEventListener("wishlist-updated", updateWishlist);
      window.removeEventListener("cart-updated", updateCart);
    };
  }, []);

  return (
    <div className="flex items-center gap-6">

      {/* SEARCH */}
      <button
  type="button"
  onClick={onSearchClick}
  aria-label="Search"
  className="transition duration-300 hover:opacity-60"
>
  <Search
    size={20}
    strokeWidth={1.8}
  />
</button>

      {/* WISHLIST */}
      <Link
        href="/wishlist"
        className="relative transition hover:opacity-60"
        aria-label="Wishlist"
      >
        <Heart size={20} strokeWidth={1.8} />

        {wishlistCount > 0 && (
          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-[10px] font-medium text-white">
            {wishlistCount}
          </span>
        )}
      </Link>

      {/* CART */}
      <button
        type="button"
        onClick={onCartClick}
        className="relative transition hover:opacity-60"
        aria-label="Shopping Bag"
      >
        <ShoppingBag size={20} strokeWidth={1.8} />

        {cartCount > 0 && (
          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-[10px] font-medium text-white">
            {cartCount}
          </span>
        )}
      </button>

    </div>
  );
}