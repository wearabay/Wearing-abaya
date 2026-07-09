"use client";

import Image from "next/image";

import Badge from "../ui/Badge";
import WishlistButton from "@/components/ui/WishlistButton";
import { openQuickView } from "@/lib/quick-view";
import type { Product } from "@/types/product";

type Props = {
  product: Product;
};

export default function ProductImage({
  product,
}: Props) {
  return (
    <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-[#ECE8E2] transition-all duration-500 group-hover:shadow-xl">

      {product.badge && (
        <div className="absolute left-4 top-4 z-20">
          <Badge>{product.badge}</Badge>
        </div>
      )}

      <div className="absolute right-4 top-4 z-20">
        <WishlistButton productId={product.id} />
      </div>

{/* Main Image */}
<Image
  src={product.images[0]}
  alt={product.name}
  fill
  sizes="(max-width:768px) 50vw, (max-width:1200px) 33vw, 25vw"
  className="
    object-cover
    transition-all
    duration-700
    group-hover:opacity-0
    group-hover:scale-105
  "
/>

{/* Hover Image */}
<Image
  src={product.images[1] ?? product.images[0]}
  alt={product.name}
  fill
  sizes="(max-width:768px) 50vw, (max-width:1200px) 33vw, 25vw"
  className="
    object-cover
    opacity-0
    transition-all
    duration-700
    group-hover:opacity-100
    group-hover:scale-105
  "
/>

<div
  className="
    absolute
    inset-x-0
    bottom-0
    h-24
    bg-gradient-to-t
    from-black/20
    to-transparent
    opacity-0
    transition
    duration-500
    group-hover:opacity-100
  "
/>

      <button
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
    openQuickView(product);
  }}
  className="
    absolute
    bottom-2
    left-1/2
    -translate-x-1/2
    rounded-full
    bg-white
    px-7
    py-3
    text-[11px]
    tracking-[0.22em]
    shadow-lg
    opacity-0
    transition-all
    duration-300
    hover:bg-black
    hover:text-white
    group-hover:bottom-6
    group-hover:opacity-100
    translate-y-3
    group-hover:translate-y-0
  "
>
  QUICK VIEW
</button>

    </div>
  );
}