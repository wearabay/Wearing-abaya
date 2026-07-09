import type { Product } from "@/types/product";

let currentProduct: Product | null = null;

export function openQuickView(product: Product) {
  currentProduct = product;

  window.dispatchEvent(
    new CustomEvent("quick-view-open")
  );
}

export function closeQuickView() {
  currentProduct = null;
}

export function getQuickViewProduct() {
  return currentProduct;
}