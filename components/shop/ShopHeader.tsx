import Image from "next/image";

import Container from "../ui/Container";

export default function ShopHeader() {
  return (
      <section className="relative overflow-hidden border-b border-neutral-200 py-32 lg:py-24">

      {/* Background */}

      <div className="absolute inset-0">

        <Image
          src="/images/shop/shop-header.jpg"
          alt="Shop Collection"
          fill
          priority
          className="object-cover"
        />

      </div>

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}

      <Container>

        <div className="relative flex h-[220px] items-center justify-center text-center lg:h-[320px]">

          <div>

            <p className="text-xs uppercase tracking-[0.45em] text-white/80">
              Collection
            </p>

            <h1 className="mt-5 text-4xl font-light tracking-[0.08em] text-white lg:text-6xl">
              Discover Our Collection
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/85 lg:text-base">
              Timeless pieces crafted with refined silhouettes,
              premium fabrics, and exceptional attention to detail.
            </p>

          </div>

        </div>

      </Container>

    </section>
  );
}