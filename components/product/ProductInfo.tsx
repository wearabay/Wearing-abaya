"use client";

import { useState } from "react";

import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/currency";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";

import ProductDetails from "./ProductDetails";
import ProductVariant from "./variants/ProductVariant";
import { addToCart } from "@/lib/cart";

type ProductInfoProps = {
  product: Product;
};

export default function ProductInfo({
  product,
}: ProductInfoProps) {
  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0] ?? ""
  );

  const [selectedSize, setSelectedSize] = useState(
    product.sizes?.[0] ?? ""
  );

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (quantity < (product.stock ?? 99)) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
  addToCart({
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
    quantity,
    color: selectedColor,
    size: selectedSize,
  });

  // optional UX: langsung buka cart
  window.dispatchEvent(new Event("cart-open"));
};

  return (
    <div>

      <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
        {product.category}
      </p>

      {product.badge && (
        <div className="mt-4">
          <Badge>{product.badge}</Badge>
        </div>
      )}

      <h1 className="mt-4 text-5xl font-light">
        {product.name}
      </h1>

      <p className="mt-6 text-2xl">
        {formatPrice(product.price)}
      </p>

      <Divider className="my-10" />

      <p className="leading-8 text-gray-600">
        {product.description}
      </p>

      <div className="mt-10 space-y-3 text-sm text-neutral-600">
        {product.features.map((feature) => (
          <p key={feature}>
            ✓ {feature}
          </p>
        ))}
      </div>

      <ProductVariant
        product={product}
        selectedColor={selectedColor}
        onColorChange={setSelectedColor}
        selectedSize={selectedSize}
        onSizeChange={setSelectedSize}
        quantity={quantity}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
        onAddToCart={handleAddToCart}
      />

      <div className="mt-14">
        <ProductDetails
          product={product}
        />
      </div>

    </div>
  );
}