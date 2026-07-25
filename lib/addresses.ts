import { Address } from "@/types/address";

const STORAGE_KEY = "wearing-abaya-addresses";

export function getAddresses(): Address[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(STORAGE_KEY);

  return data ? JSON.parse(data) : [];
}

export function saveAddresses(addresses: Address[]) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(addresses)
  );
}

export function addAddress(address: Address) {
  const addresses = getAddresses();

  saveAddresses([
    ...addresses,
    address,
  ]);
}

export function updateAddress(updated: Address) {
  const addresses = getAddresses().map((item) =>
    item.id === updated.id ? updated : item
  );

  saveAddresses(addresses);
}

export function deleteAddress(id: string) {
  const addresses = getAddresses().filter(
    (item) => item.id !== id
  );

  saveAddresses(addresses);
}

export function setDefaultAddress(id: string) {
  const addresses = getAddresses().map((item) => ({
    ...item,
    isDefault: item.id === id,
  }));

  saveAddresses(addresses);
}

export const districts = {
  "Pekalongan": [
    "Pekalongan Barat",
    "Pekalongan Timur",
    "Pekalongan Selatan",
    "Pekalongan Utara"
  ],
};