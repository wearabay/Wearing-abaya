import Container from "../ui/Container";
import Input from "../ui/Input";
import CategoryFilter from "./CategoryFilter";
import { products } from "@/data/products";

export default function ShopToolbar() {
  return (
    <section className="border-b">
      <Container>

        <div className="flex flex-col gap-6 py-8">

    <CategoryFilter />

    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div className="w-full lg:w-80">
            <Input placeholder="Search products..." />
        </div>

        <div className="text-sm uppercase tracking-widest text-neutral-500">
    {products.length} Products
</div>

    </div>

</div>

      </Container>
    </section>
  );
}