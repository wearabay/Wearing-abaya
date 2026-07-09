export default function JournalSection() {
  return (
    <section className="py-28 bg-[#f7f5f2]">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <div className="aspect-[4/5] bg-[#d9d6cf]" />

        <div>
          <p className="uppercase tracking-[0.35em] text-sm text-gray-500">
            Journal
          </p>

          <h2 className="text-5xl font-light text-black mt-5 leading-tight">
            Crafting Timeless
            <br />
            Modest Luxury
          </h2>

          <p className="mt-8 text-gray-600 leading-8">
            Every Wearing Abaya piece is designed with refined
            silhouettes, premium fabrics and meticulous craftsmanship.
            Our philosophy celebrates elegance that transcends trends.
          </p>

          <button className="mt-10 border border-black px-10 py-4 text-neutral-900 uppercase tracking-[0.25em] hover:bg-black hover:text-white transition">
            Read Journal
          </button>
        </div>

      </div>
    </section>
  );
}