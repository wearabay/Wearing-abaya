import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Container from "@/components/ui/Container";

import PaymentClient from "@/components/checkout/PaymentClient";


type Props = {
  searchParams: Promise<{
    order?: string;
  }>;
};


export default async function PaymentPage({
  searchParams,
}: Props) {

  const {
    order,
  } = await searchParams;


  return (

    <>
      <Navbar />
      <main>
        <Container className="py-24">
          <PaymentClient
            orderId={order}
          />
        </Container>
      </main>
      <Footer />
    </>
  );

}