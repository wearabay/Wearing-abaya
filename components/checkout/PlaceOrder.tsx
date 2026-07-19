"use client";

import Button from "@/components/ui/Button";

export default function PlaceOrder() {
  function handlePlaceOrder() {
    console.log("Order Created");
  }

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6">

      <Button
        fullWidth
        onClick={handlePlaceOrder}
      >
        Place Order
      </Button>

    </div>
  );
}