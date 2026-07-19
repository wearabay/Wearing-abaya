"use client";

import { useRouter } from "next/navigation";

import Button from "@/components/ui/Button";

import { useCheckout } from "@/context/CheckoutContext";
import {
  validateCheckout,
  isCheckoutValid,
} from "@/lib/checkout-validation";

export default function CheckoutActions() {
  const router = useRouter();

  const {
    contact,
    address,

    setErrors,
  } = useCheckout();

  const valid = isCheckoutValid(
    contact,
    address
  );

  function handleContinue() {
    const errors = validateCheckout(
      contact,
      address
    );

    setErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    router.push("/checkout/review");
  }

  return (
    <div className="mt-10 flex justify-end">

      <Button
        onClick={handleContinue}
        disabled={!valid}
      >
        Continue to Payment
      </Button>

    </div>
  );
}