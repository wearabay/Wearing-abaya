import Image from "next/image";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
  <Image
    src="/images/hero/hero.jpg"
    alt="Wearing Abaya Hero"
    fill
    priority
    className="object-cover"
  />
</div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">

        <p className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-white/90">
          Premium Modest Fashion
        </p>

        <h1 className="text-6xl font-light tracking-[0.25em]">
          WEARING ABAYA
        </h1>

        <p className="mt-8 max-w-xl text-center text-lg opacity-90">
          Timeless elegance crafted for the modern woman.
        </p>

        <div className="mt-10">
  <Button href="/shop" variant="outline">
    Shop Collection
  </Button>
</div>

      </div>

    </section>
  );
}