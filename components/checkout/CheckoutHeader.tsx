type CheckoutHeaderProps = {
  itemCount: number;
};

export default function CheckoutHeader({
  itemCount,
}: CheckoutHeaderProps) {
  return (
    <div className="border-b border-neutral-200 pb-6">
      <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
        Secure Checkout
      </p>

      <h1 className="mt-2 text-3xl font-light">
        Checkout
      </h1>

      <p className="mt-2 text-sm text-neutral-500">
        {itemCount} item{itemCount !== 1 ? "s" : ""} in your order
      </p>
    </div>
  );
}