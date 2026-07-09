"use client";

import { Heart } from "lucide-react";

type Props = {
  wishlist: boolean;
  onWishlist: () => void;
};

export default function ProductActions({
  wishlist,
  onWishlist,
}: Props) {
  return (
    <button
      onClick={onWishlist}
      className="transition duration-300 hover:scale-110"
    >
      <Heart
        size={19}
        strokeWidth={1.8}
        className={
          wishlist
            ? "fill-black"
            : ""
        }
      />
    </button>
  );
}