export function openCart() {
  window.dispatchEvent(
    new Event("cart-open")
  );
}

export function openCartWithBanner() {
  window.dispatchEvent(
    new Event("cart-added")
  );
}

export function closeCart() {
  window.dispatchEvent(
    new Event("cart-close")
  );
}