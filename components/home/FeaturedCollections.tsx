import Link from "next/link";
import Image from "next/image";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const collections = [
  {
    title: "Abaya",
    description: "Elegant everyday luxury",
    image: "/images/products/abaya-07.jpg",
    href: "/shop?category=abaya",
  },
  {
    title: "Dress",
    description: "Modern modest fashion",
    image: "/images/products/abaya-08.jpg",
    href: "/shop?category=dress",
  },
  {
    title: "Mukena",
    description: "Premium prayer collection",
    image: "/images/products/abaya-10.jpg",
    href: "/shop?category=mukena",
  },
];

export default function FeaturedCollections() {
  return (
    <section className="bg-[#FAF8F5] py-24 lg:py-32">
      <Container>
        <div className="mx-auto mb-20 max-w-3xl text-center">

          <SectionTitle
            eyebrow="Shop by Collection"
            title="Discover Our Collections"
          />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-neutral-600">
            Discover timeless pieces crafted with elegance for every
            occasion, from everyday essentials to exclusive collections.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {collections.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group block"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/65
                    via-black/15
                    to-transparent
                    transition-all
                    duration-500
                    group-hover:from-black/75
                  "
                />

                <div
                  className="
                    absolute
                    bottom-8
                    left-8
                    text-white
                    transition-all
                    duration-500
                    group-hover:-translate-y-2
                  "
                >
                  <h3 className="text-3xl font-light tracking-wide">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-xs text-sm leading-6 text-white/85">
                    {item.description}
                  </p>

                  <span
                    className="
                      mt-7
                      inline-flex
                      items-center
                      gap-2
                      text-[11px]
                      uppercase
                      tracking-[0.28em]
                    "
                  >
                    Shop Now →
                  </span>
                </div>

              </div>
            </Link>
          ))}

        </div>
      </Container>
    </section>
  );
}