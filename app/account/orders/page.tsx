import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Container from "@/components/ui/Container";

import OrdersClient from "@/components/account/OrdersClient";


export default function OrdersPage() {

  return (
    <>
      <Navbar />

      <main>
        <Container className="py-24">

          <OrdersClient />

        </Container>
      </main>

      <Footer />
    </>
  );

}