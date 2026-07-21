"use client";

import { useEffect, useState } from "react";
import {
  isWishlisted,
  toggleWishlist,
} from "@/lib/wishlist";

type WishlistButtonProps = {
  productId: number;
  size?: number;
};

export default function WishlistButton({
  productId,
  size = 22,
}: WishlistButtonProps) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {

  const update = () => {
    setLiked(isWishlisted(productId));
  };

  update();

  window.addEventListener(
    "wishlist-updated",
    update
  );

  return () =>
    window.removeEventListener(
      "wishlist-updated",
      update
    );

}, [productId]);

  function handleClick(
  e: React.MouseEvent<HTMLButtonElement>
) {
  e.preventDefault();
  e.stopPropagation();

  const updated =
    toggleWishlist(productId);

  setLiked(
    updated.includes(productId)
  );
}

  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md transition-all duration-300 hover:scale-110"
      aria-label="Wishlist"
    >
      <span
        style={{ fontSize: size }}
        className={`transition-all duration-300 ${
          liked
            ? "scale-110 text-red-500"
            : "text-neutral-700"
        }`}
      >
        {liked ? "♥" : "♡"}
      </span>
    </button>
  );
}