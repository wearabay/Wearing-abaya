"use client";

import { useRouter } from "next/navigation";

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


      setTimeout(() => {


        const element =
          document.getElementById(
            firstError
          );


        if (element) {

          element.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });


          element.focus();

        }


      }, 100);



      return;

    }



    router.push(
      "/checkout/review"
    );

  }



  return (

    <div className="mt-10 flex justify-end">


      <Button
        onClick={handleContinue}
      >
        Continue to Payment
      </Button>


    </div>

  );

}