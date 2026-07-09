import {
  Gem,
  Scissors,
  Globe,
  RefreshCcw,
} from "lucide-react";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const values = [
  {
    icon: Gem,
    title: "Premium Fabric",
    description:
      "Carefully selected materials that combine elegance, comfort and durability.",
  },
  {
    icon: Scissors,
    title: "Handcrafted Detail",
    description:
      "Every piece is finished with refined craftsmanship and meticulous attention.",
  },
  {
    icon: Globe,
    title: "Worldwide Shipping",
    description:
      "Delivering timeless modest fashion to customers around the world.",
  },
  {
    icon: RefreshCcw,
    title: "Easy Returns",
    description:
      "Enjoy a simple and worry-free shopping experience with flexible returns.",
  },
];

export default function BrandValues() {
  return (
    <section className="bg-white py-24 lg:py-24">
      <Container>

        <SectionTitle
          eyebrow="Our Values"
          title="Luxury Is Found In Every Detail"
          description="Every Wearing Abaya piece is created with quality, craftsmanship and timeless elegance."
        />

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 text-neutral-700">

          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="group text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-neutral-200 transition-all duration-300 group-hover:border-black">

                  <Icon
                    size={26}
                    strokeWidth={1.5}
                  />

                </div>

                <h3 className="mt-8 text-xl font-light text-neutral-900">
                  {value.title}
                </h3>

                <p className="mt-4 leading-8 text-neutral-500">
                  {value.description}
                </p>

              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}