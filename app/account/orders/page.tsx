

import Container from "@/components/ui/Container";

import OrdersClient from "@/components/account/OrdersClient";


export default function OrdersPage() {

  return (
    <>
      

      <main>
        <Container className="py-24">

          <OrdersClient />

        </Container>
      </main>

      
    </>
  );

}