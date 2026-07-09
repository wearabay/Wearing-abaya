"use client";

import Link from "next/link";
import { formatPrice } from "@/lib/currency";

type Props = {
  subtotal: number;
  onViewCart?: () => void;
};

export default function CartSummary({
  subtotal,
  onViewCart,
}: Props) {
  return (
    <div
      className="
        border-t
        rounded-t-3xl
        bg-white
        px-6
        pt-4
        pb-[max(0.25rem,env(safe-area-inset-bottom))]
        shadow-[0_-10px_30px_rgba(0,0,0,0.05)]
        text-neutral-200
      "
    >
      <div className="mb-4 flex items-center justify-between text-neutral-900">
        <span className="text-neutral-500">
          Subtotal
        </span>

        <span className="text-lg font-medium">
          {formatPrice(subtotal)}
        </span>
      </div>

      <div className="space-y-3 border-t border-b py-3">

  <div className="flex justify-between text-sm text-neutral-500">

    <span className="text-neutral-500">
      Shipping
    </span>

    <span>
      Calculated at checkout
    </span>

  </div>

  <div className="flex justify-between text-sm text-neutral-500">

    <span className="text-neutral-500">
      Taxes
    </span>

    <span>
      Included where applicable
    </span>

  </div>

</div>

<div className="my-2 flex items-center justify-between text-neutral-900">

  <span className="text-lg">
    Total
  </span>

  <span className="text-xl font-medium">
    {formatPrice(subtotal)}
  </span>

</div>

      {/* Button */}

      <div className="grid grid-cols-2 gap-3">

        <Link
          href="/cart"
          onClick={onViewCart}
          className="
            rounded-full
            border
            border-stone-300
            py-4
            text-center
            text-xs
            uppercase
            tracking-[0.22em]
            text-neutral-500
            hover:border-black
          "
        >
          View Cart
        </Link>

        <button
          type="button"
          className="
            rounded-full
            bg-black
            py-4
            text-xs
            uppercase
            tracking-[0.22em]
            text-white
            hover:bg-neutral-800
          "
        >
          Checkout
        </button>

        </div>

        {/* Trust Badge*/}

        <div className="mt-2 flex flex-warp justify-center gap-x-5 gap-y-5 text-xs text-neutral-500">

  <span>✓ Secure Checkout</span>

  <span>✓ Premium Quality</span>

  <span>✓ Easy Returns</span>

</div>

    </div>
  );
}