"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import Button from "@/components/ui/Button";

import {
  getOrderById,
  type Order,
} from "@/lib/order";

import { formatPrice } from "@/lib/currency";


type Props = {
  orderId?: string;
};


export default function SuccessClient({
  orderId,
}: Props) {


  const [order, setOrder] =
    useState<Order | null>(null);



  useEffect(() => {

    if (!orderId) return;


    const data =
      getOrderById(orderId);


    setOrder(
      data ?? null
    );


  }, [orderId]);




  return (

    <div
      className="
        mx-auto
        max-w-xl
        text-center
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
        Order Confirmed
      </p>



      <h1
        className="
          mt-6
          text-4xl
          font-light
        "
      >
        Thank You For Your Order
      </h1>



      <p
        className="
          mt-4
          text-sm
          leading-7
          text-neutral-500
        "
      >
        Your order has been received.
        We will prepare your order from
        Wearing Abaya.
      </p>




      {order && (

        <div
          className="
            mt-10
            space-y-5
            rounded-2xl
            border
            border-stone-200
            p-8
            text-left
          "
        >

          <div>

            <p className="
              text-xs
              uppercase
              tracking-widest
              text-neutral-500
            ">
              Order Number
            </p>


            <p className="
              mt-2
              font-medium
            ">
              {order.id}
            </p>

          </div>




          <div className="
            flex
            justify-between
          ">

            <span className="text-neutral-500">
              Status
            </span>


            <span className="font-medium uppercase">
              {order.status}
            </span>


          </div>




          <div className="
            flex
            justify-between
          ">

            <span className="text-neutral-500">
              Total
            </span>


            <span className="font-medium">
              {formatPrice(order.subtotal)}
            </span>


          </div>


        </div>

      )}






      <div
        className="
          mt-10
          flex
          flex-col
          gap-4
        "
      >

        {order && (

          <Button
            href={`/account/orders/${order.id}`}
            fullWidth
          >
            View Order
          </Button>

        )}



        <Button
          href="/shop"
          variant="outline"
          fullWidth
        >
          Continue Shopping
        </Button>


      </div>



    </div>

  );

}