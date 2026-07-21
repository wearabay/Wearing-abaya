"use client";

import { useEffect, useState } from "react";

import Button from "@/components/ui/Button";

import { formatPrice } from "@/lib/currency";

import {
  getOrderById,
  updateOrderStatus,
  type Order,
} from "@/lib/order";

import { clearCart } from "@/lib/cart";


type Props = {
  orderId?: string;
};


export default function PaymentClient({
  orderId,
}: Props) {


  const [order, setOrder] =
    useState<Order | null>(null);


  const [loading, setLoading] =
    useState(false);



  useEffect(() => {

    if (!orderId) return;


    const data =
      getOrderById(orderId);


    setOrder(
      data ?? null
    );


  }, [orderId]);




  function handlePaymentSuccess() {

    if (!order) return;


    setLoading(true);


    // Update status order

    updateOrderStatus(
      order.id,
      "paid"
    );


    // kosongkan cart

    clearCart();


    // menuju success

    window.location.href =
      `/checkout/success?order=${order.id}`;

  }





  if (!order) {

    return (

      <div
        className="
          rounded-2xl
          border
          border-stone-200
          p-8
        "
      >

        <h1
          className="
            text-2xl
            font-light
          "
        >
          Order Not Found
        </h1>

        <p className="
          mt-3
          text-sm
          text-neutral-500
        ">
          This order may no longer exist.
        </p>


      </div>

    );

  }




  return (

    <div
      className="
        mx-auto
        max-w-2xl
        space-y-8
      "
    >


      {/* Header */}

      <section
        className="
          rounded-2xl
          border
          border-stone-200
          p-8
        "
      >

        <p
          className="
            text-xs
            uppercase
            tracking-[0.3em]
            text-neutral-500
          "
        >
          Payment
        </p>


        <h1
          className="
            mt-4
            text-3xl
            font-light
          "
        >
          Complete Your Payment
        </h1>


        <div className="mt-6 space-y-2">

          <p className="
            text-sm
            text-neutral-500
          ">
            Order Number
          </p>


          <p
            className="
              font-medium
            "
          >
            {order.id}
          </p>


          <p
            className="
              text-sm
              text-neutral-500
            "
          >
            Status: {order.status}
          </p>


        </div>


      </section>





      {/* Items */}


      <section
        className="
          rounded-2xl
          border
          border-stone-200
          p-8
        "
      >

        <h2
          className="
            mb-6
            text-lg
            font-medium
          "
        >
          Order Summary
        </h2>



        <div
          className="
            space-y-5
          "
        >

          {order.items.map(
            (item) => (

              <div
                key={`${item.id}-${item.color}-${item.size}`}
                className="
                  flex
                  justify-between
                  text-sm
                "
              >

                <div>

                  <p>
                    {item.name}
                  </p>


                  <p className="
                    text-neutral-500
                  ">
                    {item.color}
                    {item.color && item.size
                      ? " • "
                      : ""}
                    {item.size}
                    {" "}
                    x {item.quantity}
                  </p>

                </div>


                <p>
                  {
                    formatPrice(
                      item.price *
                      item.quantity
                    )
                  }
                </p>


              </div>

            )
          )}

        </div>




        <div
          className="
            mt-8
            flex
            justify-between
            border-t
            pt-6
            text-lg
            font-medium
          "
        >

          <span>
            Total
          </span>


          <span>
            {
              formatPrice(
                order.subtotal
              )
            }
          </span>


        </div>


      </section>





      {/* Payment Method */}


      <section
        className="
          rounded-2xl
          border
          border-stone-200
          p-8
        "
      >

        <h2
          className="
            mb-4
            text-lg
            font-medium
          "
        >
          Payment Method
        </h2>


        <p className="text-sm">
          {order.payment}
        </p>


      </section>





      {/* Button */}


      <Button
        fullWidth
        disabled={loading}
        onClick={handlePaymentSuccess}
      >

        {
          loading
            ? "Processing..."
            : "Confirm Payment"
        }

      </Button>


    </div>

  );

}