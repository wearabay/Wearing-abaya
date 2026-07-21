"use client";

import Link from "next/link";
import {
  Search,
  Heart,
  ShoppingBag,
  UserRound,
} from "lucide-react";
import { useEffect, useState } from "react";

import { getWishlistCount } from "@/lib/wishlist";
import { getCartCount } from "@/lib/cart";

type NavbarIconsProps = {
  dark?: boolean;
  onCartClick: () => void;
  onSearchClick: () => void;
};

export default function NavbarIcons({
  dark = false,
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

  const iconClass =`transition-all duration-300 hover:opacity-60 ${ dark? "text-neutral-900" : "text-white"}`;
  
  return (
    <div className="flex items-center gap-6">

      {/* SEARCH */}
      <button
  type="button"
  onClick={onSearchClick}
  aria-label="Search"
  className={iconClass}
>
  <Search
    size={22}
    strokeWidth={1.8}
  />
</button>

      {/* WISHLIST */}
      <Link
        href="/wishlist"
        className={`relative ${iconClass}`}
        aria-label="Wishlist"
      >
        <Heart size={22} strokeWidth={1.8} />

        {wishlistCount > 0 && (
          <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#B99143] ring-2 ring-white text-[10px] font-semibold text-white">
            {wishlistCount}
          </span>
        )}
      </Link>

      {/* ACCOUNT */}

<Link
  href="/account"
  className={iconClass}
  aria-label="Account"
>
  <UserRound
    size={22}
    strokeWidth={1.8}
  />
</Link>

      {/* CART */}
      <button
        type="button"
        onClick={onCartClick}
        className={`relative ${iconClass}`}
        aria-label="Shopping Bag"
      >
        <ShoppingBag size={22} strokeWidth={1.8} />

        {cartCount > 0 && (
          <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#B99143] ring-2 ring-white text-[10px] font-semibold text-white">
            {cartCount}
          </span>
        )}
      </button>

    </div>
  );
}