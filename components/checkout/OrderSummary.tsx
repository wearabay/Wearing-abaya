export default function OrderSummary() {
  return (
    <section className="rounded-xl border border-neutral-200 p-6">
      <h2 className="text-xl font-light">
        Order Summary
      </h2>

      <div className="my-6 border-t border-neutral-200" />

      <div className="space-y-3">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>Rp1.299.000</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>Calculated later</span>
        </div>

      </div>

      <div className="my-6 border-t border-neutral-200" />

      <div className="flex justify-between text-lg font-medium">
        <span>Total</span>
        <span>Rp1.299.000</span>
      </div>
    </section>
  );
}