import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartPage from "@/components/cart/CartPage";

export default function Page() {

  return (

    <>

      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-16">

        <h1 className="mb-12 text-5xl font-light">
          Shopping Bag
        </h1>

        <CartPage />

      </main>

      <Footer />

    </>

  );

}