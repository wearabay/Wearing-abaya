import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function ShopHeader() {
  return (
    <section className="border-b py-20">
      <Container>
        <SectionTitle
          eyebrow="Collection"
          title="Shop"
          description="Explore our curated collection of premium abayas, dresses, mukena, and modest fashion."
        />
      </Container>
    </section>
  );
}