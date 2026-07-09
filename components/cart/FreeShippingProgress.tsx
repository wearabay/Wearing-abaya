"use client";

import { formatPrice } from "@/lib/currency";

type Props = {
  subtotal: number;
};

const FREE_SHIPPING = 3000000;

export default function FreeShippingProgress({
  subtotal,
}: Props) {

  const remaining = Math.max(
    FREE_SHIPPING - subtotal,
    0
  );

  const percent = Math.min(
    (subtotal / FREE_SHIPPING) * 100,
    100
  );

  return (

    <div className="rounded-3xl bg-stone-100 p-6">

      {remaining > 0 ? (

        <p className="text-sm text-neutral-700">

          Spend{" "}

          <span className="font-medium">

            {formatPrice(remaining)}

          </span>

          {" "}more to enjoy

          <span className="font-medium">

            {" "}FREE Shipping

          </span>

        </p>

      ) : (

        <p className="text-sm font-medium text-emerald-700">

          ✓ Congratulations!

          Free Shipping unlocked.

        </p>

      )}

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white">

        <div
          className="h-full rounded-full bg-black transition-all duration-500"
          style={{
            width: `${percent}%`,
          }}
        />

      </div>

    </div>

  );

}