"use client";

import Input from "@/components/ui/Input";
import { useCheckout } from "@/context/CheckoutContext";

export default function ShippingAddress() {
  const {
    address,
    errors,
    setAddress,
  } = useCheckout();

  function updateField(
    field: keyof typeof address,
    value: string
  ) {
    setAddress((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  return (
    <section className="rounded-2xl border border-stone-200 bg-white p-6">

      <h2 className="mb-6 text-lg font-medium">
        Shipping Address
      </h2>

      <div className="space-y-5">

        {/* First & Last Name */}

        <div className="grid gap-5 md:grid-cols-2">

          <Input
  id="firstName"
  label="First Name"
  value={address.firstName}
  error={errors.firstName}
  onChange={(e) =>
    updateField("firstName", e.target.value)
  }
/>

          <Input
  id="lastName"
  label="Last Name"
  value={address.lastName}
  error={errors.lastName}
  onChange={(e) =>
    updateField("lastName", e.target.value)
  }
/>

        </div>

        {/* Company */}

        <Input
          label="Company (Optional)"
          value={address.company}
          onChange={(e) =>
            updateField("company", e.target.value)
          }
        />

        {/* Country */}

        <Input
          label="Country"
          value={address.country}
          readOnly
        />

        {/* Province */}

        <Input
  id="province"
  label="Province"
  placeholder="Central Java"
  value={address.province}
  error={errors.province}
  onChange={(e) =>
    updateField("province", e.target.value)
  }
/>

        {/* City */}

        <Input
  id="city"
  label="City"
  placeholder="Pekalongan"
  value={address.city}
  error={errors.city}
  onChange={(e) =>
    updateField("city", e.target.value)
  }
/>

        {/* Postal */}

        <Input
  id="postalCode"
  label="Postal Code"
  placeholder="51111"
  value={address.postalCode}
  error={errors.postalCode}
  onChange={(e) =>
    updateField("postalCode", e.target.value)
  }
/>

        {/* Street */}

        <Input
  id="street"
  label="Street Address"
  placeholder="Jl. Example No.123"
  value={address.street}
  error={errors.street}
  onChange={(e) =>
    updateField("street", e.target.value)
  }
/>

        {/* Apartment */}

        <Input
          label="Apartment / Suite (Optional)"
          placeholder="Apartment, unit, floor"
          value={address.apartment}
          onChange={(e) =>
            updateField("apartment", e.target.value)
          }
        />

      </div>

    </section>
  );
}