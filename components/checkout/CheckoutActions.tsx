"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import Button from "@/components/ui/Button";

import { useCheckout } from "@/context/CheckoutContext";

import {
  validateCheckout,
} from "@/lib/checkout-validation";


export default function CheckoutActions() {

  const router = useRouter();

  const {
    contact,
    address,
    setErrors,
  } = useCheckout();


  const [loading, setLoading] =
    useState(false);



  function handleContinue() {


    const errors =
      validateCheckout(
        contact,
        address
      );


    setErrors(errors);



    const firstError =
      Object.keys(errors)[0];



    if (firstError) {


      const element =
        document.getElementById(
          firstError
        );


      if (element) {

        setTimeout(() => {

          element.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });


          if (
            "focus" in element
          ) {

            (
              element as HTMLElement
            ).focus();

          }


        }, 100);

      }


      return;

    }



    setLoading(true);



    setTimeout(() => {

      router.push(
        "/checkout/review"
      );

    }, 300);


  }




  return (

    <div
      className="
        mt-10
        flex
        justify-end
      "
    >

      <Button
        onClick={handleContinue}
        disabled={loading}
      >

        {loading
          ? "Processing..."
          : "Continue to Payment"
        }

      </Button>


    </div>

  );

}