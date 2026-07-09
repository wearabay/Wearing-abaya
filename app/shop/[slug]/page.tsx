import { getProduct } from "@/lib/product";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import { formatPrice } from "@/lib/currency";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Divider from "@/components/ui/Divider";
import ProductGallery from "@/components/product/gallery/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import RelatedProducts from "@/components/product/RelatedProducts";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductDetail({ params }: Props) {
  const { slug } = await params;

  const product = getProduct(slug);
  
  if (!product) {
    return (
      <>
        <Navbar />
        <main className="py-40 text-center">
          <h1 className="text-4xl">Product Not Found</h1>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="py-24">
  <Container>

    <div className="grid lg:grid-cols-2 gap-16">

  <ProductGallery
    images={product.images}
    name={product.name}
  />

  <ProductInfo product={product} />

</div>

  </Container>
      </main>

<RelatedProducts
  currentSlug={product.slug}
/>

<Footer />
    </>
  );
}