"use client";

import Input from "@/components/ui/Input";
import { useCheckout } from "@/context/CheckoutContext";

export default function ContactForm() {
  const {
    contact,
    errors,
    setContact,
  } = useCheckout();

  function updateField(
    field: keyof typeof contact,
    value: string | boolean
  ) {
    setContact((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  return (
    <section className="rounded-2xl border border-stone-200 bg-white p-6">
      <h2 className="mb-6 text-lg font-medium">
        Contact Information
      </h2>

      <div className="space-y-5">
        <Input
  id="email"
  label="Email Address"
  type="email"
  placeholder="you@example.com"
  value={contact.email}
  error={errors.email}
  onChange={(e) =>
    updateField("email", e.target.value)
  }
/>

<Input
  id="phone"
  label="Phone Number"
  type="tel"
  placeholder="+62 812 xxxx xxxx"
  value={contact.phone}
  error={errors.phone}
  onChange={(e) =>
    updateField("phone", e.target.value)
  }
/>

        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={contact.marketing}
            onChange={(e) =>
              updateField(
                "marketing",
                e.target.checked
              )
            }
            className="
              mt-1
              h-4
              w-4
              rounded
              border-stone-300
            "
          />

          <span className="text-sm leading-6 text-neutral-600">
            Email me with exclusive offers,
            new arrivals, and updates from
            Wearing Abaya.
          </span>
        </label>
      </div>
    </section>
  );
}