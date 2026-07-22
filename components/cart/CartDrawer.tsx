"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

import { closeCart } from "@/lib/cart-drawer";
import { useCart } from "@/context/CartContext";

import EmptyCart from "./EmptyCart";
import CartItemCard from "./CartItemCard";
import CartSummary from "./CartSummary";

export default function CartDrawer() {
  
  const [open, setOpen] = useState(false);
  const [addedBanner, setAddedBanner] = useState(false);

  const {
    items,
    subtotal,
    refreshCart,
  } = useCart();

  useEffect(() => {
    refreshCart();

    const openDrawer = () => {
      refreshCart();
      setOpen(true);
    };

    const closeDrawer = () => {
      setOpen(false);
    };

    const updateCart = () => {
      refreshCart();
    };

    const handleAdded = () => {
      refreshCart();
      setOpen(true);
      setAddedBanner(true);

      setTimeout(() => {
        setAddedBanner(false);
      }, 2000);
    };

    window.addEventListener("cart-open", openDrawer);
    window.addEventListener("cart-close", closeDrawer);
    window.addEventListener("cart-updated", updateCart);
    window.addEventListener("cart-added", handleAdded);

    return () => {
      window.removeEventListener(
        "cart-open",
        openDrawer
      );

      window.removeEventListener(
        "cart-close",
        closeDrawer
      );

      window.removeEventListener(
        "cart-updated",
        updateCart
      );

      window.removeEventListener(
        "cart-added",
        handleAdded
      );
    };
  }, [refreshCart]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Backdrop */}

      <div
        onClick={() => {
          closeCart();
          setOpen(false);
        }}
        className={`fixed inset-0 z-[90] bg-black/20 backdrop-blur-sm transition duration-300 ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      {/* Drawer */}

      <aside
        className={`fixed right-0 top-0 z-[91] flex h-dvh w-full max-w-md flex-col bg-white shadow-2xl transition duration-500 ease-out ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b p-6 text-neutral-900">
          <h2 className="text-xl font-light">
            Shopping Bag
          </h2>

          <button
            aria-label="Close cart"
            onClick={() => {
              closeCart();
              setOpen(false);
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Success Banner */}

        {addedBanner && (
          <div className="border-b bg-stone-50 px-6 py-4 text-sm text-emerald-700">
            ✓ Added to your bag
          </div>
        )}

        {/* Content */}

        <div className="flex-1 overflow-y-auto p-6 pb-10 text-neutral-900">
          {items.length === 0 ? (
            <EmptyCart />
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <CartItemCard
                  key={`${item.id}-${item.color}-${item.size}`}
                  item={item}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}

        {items.length > 0 && (
          <CartSummary
            subtotal={subtotal}
            onViewCart={() => closeCart()}
          />
        )}
      </aside>
    </>
  );
}