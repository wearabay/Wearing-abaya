import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function Newsletter() {
  return (
    <section className="py-28 bg-white border-t">
      <Container>

        <SectionTitle
  eyebrow="Newsletter"
  title="Join Our Community"
  description="Be the first to discover new collections, exclusive launches and editorial stories."
/>

        <div className="mt-10 flex flex-col md:flex-row gap-4 text-neutral-400">
          <div className="flex-1">
  <Input
    type="email"
    placeholder="Enter your email"
  />
</div>

          <Button>
  Subscribe
</Button>
        </div>

      </Container>
    </section>
  );
}