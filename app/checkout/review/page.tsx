import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import CheckoutHeader from "@/components/checkout/CheckoutHeader";

import OrderSummary from "@/components/checkout/OrderSummary";
import ReviewInformation from "@/components/checkout/ReviewInformation";
import PlaceOrder from "@/components/checkout/PlaceOrder";

export default function ReviewPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-[1450px] px-8 py-16">

        <CheckoutHeader
          title="Review Order"
          subtitle="Please review your information before placing your order."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_420px]">

          <div className="space-y-8">

            <ReviewInformation />

            <PlaceOrder />

          </div>

          <OrderSummary />

        </div>

      </main>

      <Footer />
    </>
  );
}