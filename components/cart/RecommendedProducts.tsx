"use client";

import Link from "next/link";
import ProductMiniCard from "@/components/product/ProductMiniCard";
import { products } from "@/data/products";

export default function RecommendedProducts() {

  const recommendations = products.slice(0,4);

  return (

    <section>

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-xl font-light">
          You may also like
        </h2>

        <Link
          href="/shop"
          className="text-sm text-neutral-500 hover:text-black"
        >
          View all
        </Link>

      </div>

      <div className="grid grid-cols-2 gap-5">

        {recommendations.map((product) => (
  <ProductMiniCard
    key={product.id}
    product={product}
  />
))}

      </div>

    </section>

  );

}