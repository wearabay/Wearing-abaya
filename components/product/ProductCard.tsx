import Link from "next/link";
import type { Product } from "@/types/product";

import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group block cursor-pointer transition duration-300 hover:-translate-y-1"
    >
      <ProductImage product={product} />

      <div className="mt-5">
        <h3 className="text-lg font-light">
          {product.name}
        </h3>

        <ProductPrice
          price={product.price}
        />
      </div>
    </Link>
  );
}