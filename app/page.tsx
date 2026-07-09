import Navbar from "../components/layout/Navbar";
import CartDrawer from "@/components/cart/CartDrawer";
import Hero from "../components/home/Hero";
import FeaturedCollections from "../components/home/FeaturedCollections";
import FeaturedProducts from "../components/home/FeaturedProducts";
import JournalSection from "../components/home/JournalSection";
import BrandValues from "../components/home/BrandValues";
import InstagramGallery from "../components/home/InstagramGallery";
import Newsletter from "../components/home/Newsletter";
import Footer from "../components/layout/Footer";


export default function Home() {
  return (
<>
  <Navbar />
  <Hero />
  <FeaturedCollections />
  <FeaturedProducts />
  <JournalSection />
  <BrandValues />
  <InstagramGallery />
  <Newsletter />
  <Footer />
</>

  );
}