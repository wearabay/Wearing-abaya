export default function DeliveryMethod() {
  return (
    <section className="border-b border-neutral-200 py-8">
      <h2 className="mb-6 text-xl font-light">
        Delivery Method
      </h2>

      <div className="space-y-4">

        <label className="flex cursor-pointer items-center justify-between rounded-lg border border-neutral-300 p-5">
          <div>
            <p className="font-medium">
              Regular Delivery
            </p>

            <p className="text-sm text-neutral-500">
              2–5 Business Days
            </p>
          </div>

          <span>Rp25.000</span>
        </label>

        <label className="flex cursor-pointer items-center justify-between rounded-lg border border-neutral-300 p-5">
          <div>
            <p className="font-medium">
              Express Delivery
            </p>

            <p className="text-sm text-neutral-500">
              1–2 Business Days
            </p>
          </div>

          <span>Rp45.000</span>
        </label>

      </div>
    </section>
  );
}