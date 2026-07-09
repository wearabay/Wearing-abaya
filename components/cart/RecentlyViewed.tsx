"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import type { Product } from "@/types/product";

import { products } from "@/data/products";
import { getRecentlyViewed } from "@/lib/recently-viewed";
import { formatPrice } from "@/lib/currency";
import ProductMiniCard from "@/components/product/ProductMiniCard";

export default function RecentlyViewed() {

const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {

  const slugs = getRecentlyViewed();

  const viewedProducts = slugs
    .map((slug) =>
      products.find((p) => p.slug === slug)
    )
    .filter(Boolean) as Product[];

  setItems(viewedProducts);

}, []);

  if (!items.length) return null;

  return (

    <section>

      <h2 className="mb-6 text-xl font-light">

        Recently Viewed

      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {items.map((product) => (

          <ProductMiniCard
  key={product.id}
  product={product}
/>

        ))}

      </div>

    </section>

  );

}