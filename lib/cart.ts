export type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  color?: string;
  size?: string;
};

const CART_KEY = "wearing-abaya-cart";

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveCart(cart: CartItem[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));

  window.dispatchEvent(new Event("cart-updated"));
}

export function addToCart(item: CartItem) {
  const cart = getCart();

  const existingIndex = cart.findIndex(
    (p) =>
      p.id === item.id &&
      p.color === item.color &&
      p.size === item.size
  );

  if (existingIndex >= 0) {
    cart[existingIndex].quantity += item.quantity;
  } else {
    cart.push(item);
  }

  saveCart(cart);

  window.dispatchEvent(new Event("cart-added"));
}

export function clearCart() {
  saveCart([]);
}

export function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.quantity, 0);
}

export function getCartTotal() {
  return getCart().reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
}

export function removeCartItem(
  id: number,
  color?: string,
  size?: string
) {
  const updated = getCart().filter(
    (item) =>
      !(
        item.id === id &&
        item.color === color &&
        item.size === size
      )
  );

  saveCart(updated);
}
export function updateCartQuantity(
  id: number,
  color: string | undefined,
  size: string | undefined,
  quantity: number
) {
  const cart = getCart();

  const updated = cart.map((item) => {
    if (
      item.id === id &&
      item.color === color &&
      item.size === size
    ) {
      return {
        ...item,
        quantity: Math.max(1, quantity),
      };
    }
    return item;
  });

  saveCart(updated);
}

export function isInCart(
  id: number,
  color?: string,
  size?: string
) {
  return getCart().some(
    (item) =>
      item.id === id &&
      item.color === color &&
      item.size === size
  );
}

export function getCartItem(
  id: number,
  color?: string,
  size?: string
) {
  return getCart().find(
    (item) =>
      item.id === id &&
      item.color === color &&
      item.size === size
  );
}

export function subscribeCart(callback: () => void) {
  window.addEventListener("cart-updated", callback);

  return () =>
    window.removeEventListener(
      "cart-updated",
      callback
    );
}