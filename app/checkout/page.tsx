import Container from "@/components/ui/Container";

import CheckoutHeader from "@/components/checkout/CheckoutHeader";
import ContactForm from "@/components/checkout/ContactForm";
import ShippingAddress from "@/components/checkout/ShippingAddress";
import DeliveryMethod from "@/components/checkout/DeliveryMethod";
import OrderSummary from "@/components/checkout/OrderSummary";
import CheckoutActions from "@/components/checkout/CheckoutActions";

export default function CheckoutPage() {
  return (
    <Container className="py-16 lg:py-20">
      <div className="grid gap-14 lg:grid-cols-[1.6fr_1fr]">

        <div className="space-y-10">
          <CheckoutHeader itemCount={2} />

          <ContactForm />

          <ShippingAddress />

          <DeliveryMethod />
        </div>

        <aside className="lg:sticky lg:top-28 self-start">
          <OrderSummary />

          <div className="mt-8">
            <CheckoutActions />
          </div>
        </aside>

      </div>
    </Container>
  );
}