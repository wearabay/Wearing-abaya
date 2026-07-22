import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Container from "@/components/ui/Container";

import { getOrderById } from "@/lib/order";
import { formatPrice } from "@/lib/currency";


type Props = {
  params: Promise<{
    id:string;
  }>;
};


export default async function OrderDetailPage({
  params,
}:Props){

  const {id}=await params;


  const order =
    getOrderById(id);


  if(!order){

    return (
      <>
      <Navbar />

      <Container className="py-26">

        <h1 className="text-3xl font-light">
          Order Not Found
        </h1>

      </Container>

      <Footer />
      </>
    );

  }


  return(
    <>
    <Navbar />

    <main>

    <Container className="py-24">


      <div className="space-y-10">


        <div>
          <p className="
            text-xs
            uppercase
            tracking-[0.3em]
            text-neutral-500
          ">
            Order Status
          </p>

          <h1 className="
            mt-3
            text-4xl
            font-light
          ">
            {order.status}
          </h1>

          <p className="mt-2 text-sm text-neutral-500">
            {order.id}
          </p>

        </div>



        <section className="
          rounded-2xl
          border
          border-stone-200
          p-6
        ">

          <h2 className="mb-6 text-lg">
            Items
          </h2>


          <div className="space-y-5">

          {order.items.map(item=>(

            <div
              key={`${item.id}-${item.size}`}
              className="
                flex
                justify-between
                text-sm
              "
            >

              <span>
                {item.name}
                {" "}
                x {item.quantity}
              </span>


              <span>
                {
                formatPrice(
                  item.price *
                  item.quantity
                )
                }
              </span>


            </div>

          ))}

          </div>


        </section>



        <section className="
          rounded-2xl
          border
          border-stone-200
          p-6
        ">

          <h2 className="mb-4">
            Shipping Address
          </h2>


          <p>
            {order.address.firstName}
            {" "}
            {order.address.lastName}
          </p>

          <p>
            {order.address.street}
          </p>

          <p>
            {order.address.city},
            {" "}
            {order.address.province}
          </p>


        </section>


      </div>


    </Container>

    </main>


    <Footer />

    </>
  );

}