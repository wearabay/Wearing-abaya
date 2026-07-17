export default function ShippingAddress() {
  return (
    <section className="border-b border-neutral-200 py-8">
      <h2 className="mb-6 text-xl font-light">
        Shipping Address
      </h2>

      <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <input
            type="text"
            placeholder="First Name"
            className="w-full border border-neutral-300 px-4 py-3"
          />

          <input
            type="text"
            placeholder="Last Name"
            className="w-full border border-neutral-300 px-4 py-3"
          />
        </div>

        <input
          type="text"
          placeholder="Address"
          className="w-full border border-neutral-300 px-4 py-3"
        />

        <div className="grid gap-4 md:grid-cols-3">
          <input
            type="text"
            placeholder="City"
            className="w-full border border-neutral-300 px-4 py-3"
          />

          <input
            type="text"
            placeholder="Province"
            className="w-full border border-neutral-300 px-4 py-3"
          />

          <input
            type="text"
            placeholder="Postal Code"
            className="w-full border border-neutral-300 px-4 py-3"
          />
        </div>
      </div>
    </section>
  );
}