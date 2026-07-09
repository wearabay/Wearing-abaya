import ProductCard from "../product/ProductCard";
import Container from "../ui/Container";

import { products } from "@/data/products";

export default function ProductGrid() {
  if (products.length === 0) {
    return (
      <section className="py-24">
        <Container>

          <div className="text-center">

            <h2 className="text-3xl font-light text-neutral-900">
              No Products Found
            </h2>

            <p className="mt-5 text-neutral-500">
              Try another keyword or clear your filters.
            </p>

            <button
              className="
                mt-8
                rounded-full
                border
                border-black
                px-8
                py-3
                text-xs
                uppercase
                tracking-[0.25em]
                transition
                hover:bg-black
                hover:text-white
              "
            >
              Clear Filters
            </button>

          </div>

        </Container>
      </section>
    );
  }

  return (
    <section className="py-14 lg:py-16">
      <Container>

        {/* Product Count */}

        <div className="mb-10 flex items-center justify-between">

          <p className="text-sm text-neutral-500">
            Showing{" "}
            <span className="font-medium text-neutral-900">
              {products.length}
            </span>{" "}
            Products
          </p>

        </div>

        {/* Grid */}

        <div
          className="
            grid
            grid-cols-2
            gap-x-8
            gap-y-14
            lg:grid-cols-4
          "
        >
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