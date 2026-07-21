"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Container from "@/components/ui/Container";

import CheckoutHeader from "@/components/checkout/CheckoutHeader";
import ContactForm from "@/components/checkout/ContactForm";
import ShippingAddress from "@/components/checkout/ShippingAddress";
import DeliveryMethod from "@/components/checkout/DeliveryMethod";
import PaymentMethod from "@/components/checkout/PaymentMethod";
import OrderSummary from "@/components/checkout/OrderSummary";
import CheckoutActions from "@/components/checkout/CheckoutActions";

import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { count } = useCart();

  return (
    <>
      <Navbar />

      <Container className="py-16 lg:py-24">
        <CheckoutHeader itemCount={count} />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.6fr_420px]">

          {/* Left */}
          <div className="space-y-8">

            <ContactForm />

            <ShippingAddress />

            <DeliveryMethod />

            <PaymentMethod />

          </div>


          {/* Right */}
          <aside className="h-fit space-y-6 self-start lg:sticky lg:top-28">

            <OrderSummary />

            <CheckoutActions />

          </aside>


        </div>

      </Container>

      <Footer />
    </>
  );
}