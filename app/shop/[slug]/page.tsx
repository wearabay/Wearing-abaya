import { getProduct } from "@/lib/product";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import Container from "@/components/ui/Container";

import ProductGallery from "@/components/product/gallery/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductDetails from "@/components/product/ProductDetails";
import RelatedProducts from "@/components/product/RelatedProducts";
import ProductTracker from "@/components/product/ProductTracker";
import RecentlyViewed from "@/components/cart/RecentlyViewed";

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
      <ProductTracker slug={product.slug} />

      <main className="py-24">
        <Container>

          <div className="grid items-start gap-16 lg:grid-cols-2">

            <ProductGallery
              images={product.images}
              name={product.name}
            />

            <div className="self-start">
              <div className="sticky top-28">
                <ProductInfo product={product} />
              </div>
            </div>

          </div>

          {/* Product Details */}

<div className="mt-2 grid gap-16 lg:grid-cols-2">

  <div />

  <ProductDetails
    product={product}
  />

</div>

{/* Recently Viewed */}

<RecentlyViewed
  currentSlug={product.slug}
/>

{/* Related Products */}

<RelatedProducts
  currentSlug={product.slug}
/>

        </Container>
      </main>

      <Footer />
    </>
  );
}