const STORAGE_KEY = "wearing-abaya-wishlist";

export function getWishlist(): number[] {
  if (typeof window === "undefined") return [];

  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveWishlist(ids: number[]) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(ids)
  );
}

export function isWishlisted(id: number) {
  return getWishlist().includes(id);
}

export function toggleWishlist(id: number) {
  const list = getWishlist();

  let updated: number[];

  if (list.includes(id)) {
    updated = list.filter((item) => item !== id);
  } else {
    updated = [...list, id];
  }

  saveWishlist(updated);

  window.dispatchEvent(
    new Event("wishlist-updated")
  );

  return updated;
}

export function getWishlistCount() {
  return getWishlist().length;
}

export function removeWishlist(id: number) {
  const updated = getWishlist().filter(
    (item) => item !== id
  );

  saveWishlist(updated);

  window.dispatchEvent(
    new Event("wishlist-updated")
  );
}

export function clearWishlist() {
  if (typeof window === "undefined") return;

  localStorage.removeItem(STORAGE_KEY);

  window.dispatchEvent(
    new Event("wishlist-updated")
  );
}