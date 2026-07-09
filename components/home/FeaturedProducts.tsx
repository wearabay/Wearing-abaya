import ProductCard from "../product/ProductCard";
import QuickViewModal from "../product/QuickViewModal";
import { products } from "../../data/products";

export default function FeaturedProducts() {

  return (
  <>
    <section className="py-15 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.35em] text-sm text-gray-500">
            New Arrivals
          </p>

          <h2 className="text-4xl font-light text-neutral-900 mt-4">
            Featured Products
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-neutral-900">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>

    <QuickViewModal />
  </>
);
}