import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

type RelatedProductsProps = {
  currentSlug: string;
};

export default function RelatedProducts({
  currentSlug,
}: RelatedProductsProps) {

  const relatedProducts = products
    .filter((product) => product.slug !== currentSlug)
    .slice(0, 4);

  return (
    <section className="py-24">

      <Container>

        <SectionTitle
          eyebrow="You May Also Like"
          title="Related Products"
        />

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">

          {relatedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}