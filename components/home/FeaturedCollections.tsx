import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function FeaturedCollections() {
  const collections = [
    {
      title: "Abaya",
      description: "Elegant everyday luxury",
    },
    {
      title: "Dress",
      description: "Modern modest fashion",
    },
    {
      title: "Mukena",
      description: "Premium prayer collection",
    },
    {
      title: "Kids",
      description: "Elegant for little ones",
    },
  ];

  return (
    <section className="bg-[#FAF8F5] py-15 lg:py-24">
      <Container>

        <SectionTitle
  eyebrow="Collections"
  title="Discover Our Collections"
/>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">

          {collections.map((item) => (
            <div
              key={item.title}
              className="group cursor-pointer transition-transform duration-300"
            >

              <div className="aspect-[3/4] overflow-hidden rounded-x1 bg-[#ECE8E2] transition duration-500 group-hover:scale-[1.03]">
              </div>

              <h3 className="mt-5 text-lg font-medium tracking-[0.05em] text-neutral-900 lg:mt-6 lg:text-xl">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-600">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}
