"use client";

import Link from "next/link";
import Image from "next/image";

import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/currency";

type Props = {
  product: Product;
};

export default function ProductMiniCard({
  product,
}: Props) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group block"
    >
      <div
        className="
          relative
          aspect-[4/5]
          overflow-hidden
          rounded-2xl
          bg-stone-100
        "
      >
        <Image
          src={product.images?.[0] ?? product.image}
          alt={product.name}
          fill
          className="
            object-cover
            transition
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      <h3
        className="
          mt-3
          transition
          group-hover:text-black
        "
      >
        {product.name}
      </h3>

      <p className="mt-1 text-neutral-500">
        {formatPrice(product.price)}
      </p>
    </Link>
  );
}