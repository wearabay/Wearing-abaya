import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function ShopHeader() {
  return (
    <section className="border-b border-neutral-200 bg-[#FAF8F5] py-20 lg:py-24">
      <Container>

        <SectionTitle
          eyebrow="Collection"
          title="Shop"
          description="Discover timeless modest fashion crafted with premium fabrics, elegant silhouettes and refined craftsmanship."
        />

        <div className="mt-10 flex flex-col items-center justify-center gap-4 text-sm text-neutral-500 md:flex-row md:gap-10">

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-neutral-900" />
            Premium Quality
          </div>

          <div className="hidden h-4 w-px bg-neutral-300 md:block" />

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-neutral-900" />
            Worldwide Shipping
          </div>

          <div className="hidden h-4 w-px bg-neutral-300 md:block" />

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-neutral-900" />
            New Collection
          </div>

        </div>

      </Container>
    </section>
  );
}