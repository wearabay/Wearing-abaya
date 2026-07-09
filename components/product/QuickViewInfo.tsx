"use client";

import Badge from "@/components/ui/Badge";
import { formatPrice } from "@/lib/currency";
import type { Product } from "@/types/product";

type Props = {
  product: Product;
};

export default function QuickViewInfo({
  product,
}: Props) {

  return (

    <div className="flex h-full flex-col">

      {/* Badge */}

      {product.badge && (
        <div className="mb-5">
          <Badge>{product.badge}</Badge>
        </div>
      )}

      {/* Category */}

      <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
        {product.category}
      </p>

      {/* Name */}

      <h2 className="mt-3 text-3xl font-light leading-tight text-black">
        {product.name}
      </h2>

      {/* Price */}

      <p className="mt-6 text-2xl font-semibold text-black">
        {formatPrice(product.price)}
      </p>

      {/* Description */}

      <p className="mt-6 leading-8 text-neutral-600">
        {product.description}
      </p>

      {/* Stock */}

      <div className="mt-8">

        <span className="rounded-full bg-green-100 px-4 py-2 text-xs font-medium text-green-700">

          In Stock ({product.stock})

        </span>

      </div>

    </div>

  );

}