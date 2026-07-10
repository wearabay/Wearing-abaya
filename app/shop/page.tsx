import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { ShopProvider } from "@/components/shop/context/ShopContext";
import ShopHeader from "@/components/shop/ShopHeader";
import ShopToolbar from "@/components/shop/ShopToolbar";
import ProductGrid from "@/components/shop/ProductGrid";

export default function ShopPage() {
  return (
    <>
      <Navbar />

      <ShopProvider>

        <main>
          <ShopHeader />
          <ShopToolbar />
          <ProductGrid />
        </main>

      </ShopProvider>

      <Footer />
    </>
  );
}