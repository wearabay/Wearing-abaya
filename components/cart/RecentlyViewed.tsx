"use client";

import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

import type { Product } from "@/types/product";

import { products } from "@/data/products";
import { getRecentlyViewed } from "@/lib/recently-viewed";

import ProductCard from "@/components/product/ProductCard";

type RecentlyViewedProps = {
  currentSlug?: string;
};

export default function RecentlyViewed({
  currentSlug,
}: RecentlyViewedProps) {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    const slugs = getRecentlyViewed().filter(
      (slug) => slug !== currentSlug
    );

    const viewedProducts = slugs
      .map((slug) => products.find((p) => p.slug === slug))
      .filter(Boolean) as Product[];

    setItems(viewedProducts);
  }, [currentSlug]);

  if (!items.length) return null;

  return (
    <section className="mt-28 border-t border-neutral-200 pt-24">
      <Container>
        <SectionTitle
          eyebrow="Continue Shopping"
          title="Recently Viewed"
        />

        <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {items.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}