import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ShopHeader from "../../components/shop/ShopHeader";
import ShopToolbar from "../../components/shop/ShopToolbar";
import ProductGrid from "../../components/shop/ProductGrid";

export default function ShopPage() {
  return (
    <>
      <Navbar />

      <main>
        <ShopHeader />
        <ShopToolbar />
        <ProductGrid />
      </main>

      <Footer />
    </>
  );
}