import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Container from "@/components/ui/Container";

import SuccessClient from "@/components/checkout/SuccessClient";


type Props = {
  searchParams: Promise<{
    order?: string;
  }>;
};


export default async function SuccessPage({
  searchParams,
}: Props) {


  const {
    order,
  } = await searchParams;



  return (

    <>
      <Navbar />


      <main>

        <Container className="py-20">

          <SuccessClient
            orderId={order}
          />

        </Container>

      </main>


      <Footer />

    </>

  );

}