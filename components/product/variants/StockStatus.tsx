type StockStatusProps = {
  stock: number;
};

export default function StockStatus({
  stock,
}: StockStatusProps) {
  if (stock <= 0) {
    return (
      <div className="mt-6">
        <p className="text-sm font-medium text-red-600">
          Out of Stock
        </p>

        <p className="mt-1 text-sm text-neutral-500">
          This item is currently unavailable.
        </p>
      </div>
    );
  }

  if (stock <= 3) {
    return (
      <div className="mt-6">
        <p className="text-sm font-medium text-amber-700">
          Only {stock} pieces left
        </p>

        <p className="mt-1 text-sm text-neutral-500">
          Order soon before it sells out.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <p className="text-sm font-medium text-emerald-700">
        ✓ Ready to Ship
      </p>

      <p className="mt-1 text-sm text-neutral-500">
        Ships within 24 hours
      </p>
    </div>
  );
}