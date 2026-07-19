"use client";

import { useCheckout } from "@/context/CheckoutContext";

export default function ReviewInformation() {
  const {
    contact,
    address,
    delivery,
    payment,
  } = useCheckout();

  const deliveryLabel =
    delivery === "express"
      ? "Express Delivery"
      : "Regular Delivery";

  const paymentLabel =
    payment === "bank"
      ? "Bank Transfer"
      : payment === "ewallet"
      ? "E-Wallet"
      : payment === "qris"
      ? "QRIS"
      : "Cash on Delivery";

  return (
    <div className="space-y-8">

      {/* Contact */}

      <section className="rounded-2xl border border-stone-200 bg-white p-6">

        <h2 className="mb-5 text-lg font-medium">
          Contact Information
        </h2>

        <div className="space-y-3 text-sm">

          <div className="flex justify-between">
            <span className="text-neutral-500">
              Email
            </span>

            <span className="font-medium">
              {contact.email}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-neutral-500">
              Phone
            </span>

            <span className="font-medium">
              {contact.phone}
            </span>
          </div>

        </div>

      </section>

      {/* Shipping */}

      <section className="rounded-2xl border border-stone-200 bg-white p-6">

        <h2 className="mb-5 text-lg font-medium">
          Shipping Address
        </h2>

        <div className="space-y-3 text-sm">

          <p className="font-medium">
            {address.firstName} {address.lastName}
          </p>

          {address.company && (
            <p>{address.company}</p>
          )}

          <p>{address.street}</p>

          {address.apartment && (
            <p>{address.apartment}</p>
          )}

          <p>
            {address.city}, {address.province}
          </p>

          <p>{address.postalCode}</p>

          <p>{address.country}</p>

        </div>

      </section>

      {/* Delivery */}

      <section className="rounded-2xl border border-stone-200 bg-white p-6">

        <h2 className="mb-5 text-lg font-medium">
          Delivery Method
        </h2>

        <p className="text-sm font-medium">
          {deliveryLabel}
        </p>

      </section>

      {/* Payment */}

      <section className="rounded-2xl border border-stone-200 bg-white p-6">

        <h2 className="mb-5 text-lg font-medium">
          Payment Method
        </h2>

        <p className="text-sm font-medium">
          {paymentLabel}
        </p>

      </section>

    </div>
  );
}