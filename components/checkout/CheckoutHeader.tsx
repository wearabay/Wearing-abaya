type CheckoutHeaderProps = {
  itemCount?: number;
  title?: string;
  subtitle?: string;
};

export default function CheckoutHeader({
  itemCount,
  title = "Checkout",
  subtitle,
}: CheckoutHeaderProps) {
  return (
    <div className="border-b border-neutral-200 pb-6">
      <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
        Secure Checkout
      </p>

      <h1 className="mt-2 text-3xl font-light">
        {title}
      </h1>

      {subtitle ? (
        <p className="mt-2 text-sm text-neutral-500">
          {subtitle}
        </p>
      ) : itemCount !== undefined ? (
        <p className="mt-2 text-sm text-neutral-500">
          {itemCount} item
          {itemCount !== 1 ? "s" : ""} in your order
        </p>
      ) : null}
    </div>
  );
}