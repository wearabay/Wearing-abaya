import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ShopHeader from "@/components/shop/ShopHeader";
import ShopToolbar from "@/components/shop/ShopToolbar";
import ProductGrid from "@/components/shop/ProductGrid";

export default function ShopPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">

        <ShopHeader />

        <section className="mx-auto max-w-7xl px-6 pb-24 text-neutral-600">

          <ShopToolbar />

          <ProductGrid />

        </section>

      </main>

      <Footer />
    </>
  );
}