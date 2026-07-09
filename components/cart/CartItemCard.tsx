"use client";

import Image from "next/image";
import { formatPrice } from "@/lib/currency";
import {
  updateCartQuantity,
  removeCartItem,
  getCart,
  type CartItem,
} from "@/lib/cart";

type Props = {
  item: CartItem;
  onUpdate: () => void;
};

export default function CartItemCard({
  item,
  onUpdate,
}: Props) {
  return (
    <div className="flex gap-4 border-b pb-6">

      <div className="relative h-28 w-20 overflow-hidden rounded-xl bg-stone-100">

        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />

      </div>

      <div className="flex flex-1 flex-col">

        <h3 className="font-medium text-neutral-900">
          {item.name}
        </h3>

        <p className="mt-1 text-sm text-neutral-500">
          {item.color}
          {item.color && item.size ? " • " : ""}
          {item.size}
        </p>

        <div className="mt-4 flex items-center gap-3">

          <button
            disabled={item.quantity === 1}
            onClick={() => {
              updateCartQuantity(
                item.id,
                item.color,
                item.size,
                item.quantity - 1
              );

              onUpdate();
            }}
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              border
              disabled:opacity-30
            "
          >
            −
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() => {
              updateCartQuantity(
                item.id,
                item.color,
                item.size,
                item.quantity + 1
              );

              onUpdate();
            }}
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              border
            "
          >
            +
          </button>

        </div>

        <div className="mt-4 flex items-center justify-between">

          <p className="font-medium">
            {formatPrice(item.price * item.quantity)}
          </p>

          <button
            onClick={() => {
              removeCartItem(
                item.id,
                item.color,
                item.size
              );

              onUpdate();
            }}
            className="text-xs uppercase tracking-[0.18em] text-red-500"
          >
            Remove
          </button>

        </div>

      </div>

    </div>
  );
}