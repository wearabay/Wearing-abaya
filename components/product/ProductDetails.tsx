import type { Product } from "@/types/product";
import ProductAccordion from "./accordion/ProductAccordion";
import ProductSpecification from "./ProductSpecification";
import { useEffect } from "react";
import { addRecentlyViewed } from "@/lib/recently-viewed";

type ProductDetailsProps = {
  product: Product;
};

export default function ProductDetails({
  product,
}: ProductDetailsProps) {

  useEffect(() => {
  addRecentlyViewed(product.slug);
}, [product.slug]);

  return (
    <div className="mt-6">

      <ProductAccordion
        title="Description"
        defaultOpen
      >
        {product.description}
      </ProductAccordion>

      <ProductAccordion
        title="Specifications"
      >
        <ProductSpecification
          specifications={product.specifications}
        />
      </ProductAccordion>

      <ProductAccordion
        title="Size Guide"
      >
        <p>
          Available in sizes XS, S, M, L and XL.
          Please contact us via WhatsApp for detailed
          measurements.
        </p>
      </ProductAccordion>

      <ProductAccordion
        title="Shipping & Returns"
      >
        <p>
          Worldwide shipping available.
          Orders are processed within 1–3 business days.
        </p>
      </ProductAccordion>

      <ProductAccordion
        title="Care Instructions"
      >
        <p>
          Dry clean recommended.
          Steam only.
          Do not bleach.
          Store on padded hanger.
        </p>
      </ProductAccordion>

    </div>

  );
}