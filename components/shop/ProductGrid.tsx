import ProductCard from "../product/ProductCard";
import { products } from "@/data/products";
import Container from "../ui/Container";

export default function ProductGrid() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {products.map((product) => (
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