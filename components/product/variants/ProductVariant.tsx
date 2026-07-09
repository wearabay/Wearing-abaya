"use client";

import { useState } from "react";
import type { Product } from "@/types/product";

import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";
import QuantitySelector from "./QuantitySelector";
import StockStatus from "./StockStatus";

type ProductVariantProps = {
  product: Product;
  selectedColor: string;
  onColorChange: (value: string) => void;
  selectedSize: string;
  onSizeChange: (value: string) => void;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onAddToCart: () => void;
};

export default function ProductVariant({
  product,
  selectedColor,
  onColorChange,
  selectedSize,
  onSizeChange,
  quantity,
  onIncrease,
  onDecrease,
  onAddToCart,
}: ProductVariantProps) {
  return (
    <div className="mt-10 mb-6 space-y-6">

      {/* COLOR */}
      {product.colors && (
        <ColorSelector
          colors={product.colors}
          selected={selectedColor}
          onChange={onColorChange}
        />
      )}

      {/* SIZE */}
      {product.sizes && (
        <SizeSelector
          sizes={product.sizes}
          selected={selectedSize}
          onChange={onSizeChange}
        />
      )}

      {/* QTY */}
      {product.stock && (
        <QuantitySelector
          quantity={quantity}
          stock={product.stock}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      )}

      {/* STOCK */}
      {product.stock && (
        <StockStatus stock={product.stock} />
      )}

      <div className="mt-10 space-y-4">

  {/* ADD TO BAG */}
  <button
    onClick={onAddToCart}
    className="w-full h-14 bg-black text-white text-xs uppercase tracking-[0.25em] rounded-full transition hover:bg-neutral-900"
  >
    Add to Bag
  </button>

</div>

    </div>
  );
}