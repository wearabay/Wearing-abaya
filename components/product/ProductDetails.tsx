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
    <div className="mt-10 border-t border-neutral-200 pt-8">

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
          • Worldwide shipping available
</p>
<p>
• Processing time: 1–3 business days
</p>
<p>
• Estimated delivery:
  Indonesia: 2–5 days
  International: 5–10 days
</p>
<p>
• Easy 7-day return policy
        </p>
      </ProductAccordion>

      <ProductAccordion
        title="Care Instructions"
      >
        <ul className="space-y-2 text-neutral-600">

  <li>• Dry clean recommended</li>

  <li>• Steam only</li>

  <li>• Do not bleach</li>

  <li>• Store on padded hanger</li>

</ul>
</ProductAccordion>
<ProductAccordion
        title="Craftsmanship"
      >
        <p>
          Every Wearing Abaya piece is handcrafted using premium fabrics and refined finishing techniques to ensure timeless elegance and exceptional quality.
</p>
      </ProductAccordion>

    </div>

  );
}