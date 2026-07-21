import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Container from "@/components/ui/Container";

import OrderDetailClient from "@/components/account/OrderDetailClient";


type Props = {
  params: Promise<{
    id:string;
  }>;
};


export default async function Page({
  params,
}:Props){

  const {id}=await params;


  return (
    <>
      <Navbar />

      <main>
        <Container className="py-24">

          <OrderDetailClient
            orderId={id}
          />

        </Container>
      </main>

      <Footer />
    </>
  );
}