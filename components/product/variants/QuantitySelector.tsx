"use client";

type QuantitySelectorProps = {
  quantity: number;
  stock: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

export default function QuantitySelector({
  quantity,
  stock,
  onIncrease,
  onDecrease,
}: QuantitySelectorProps) {
  return (
    <div className="mt-10">

      <p className="mb-5 text-xs uppercase tracking-[0.35em] text-neutral-500">
        Quantity
      </p>

      <div className="inline-flex overflow-hidden rounded-full border border-neutral-300">

        <button
          type="button"
          onClick={onDecrease}
          disabled={quantity <= 1}
          className="flex h-11 w-11 items-center justify-center text-lg transition hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          −
        </button>

        <div className="flex h-11 min-w-[56px] items-center justify-center border-x border-neutral-300 text-sm font-medium">
          {quantity}
        </div>

        <button
          type="button"
          onClick={onIncrease}
          disabled={quantity >= stock}
          className="flex h-11 w-11 items-center justify-center text-lg transition hover:bg-neutral-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          +
        </button>

      </div>

    </div>
  );
}