const values = [
  {
    title: "Premium Fabric",
    text: "Selected fabrics with exceptional comfort and graceful drape.",
  },
  {
    title: "Timeless Design",
    text: "Elegant silhouettes designed beyond seasonal trends.",
  },
  {
    title: "Craftsmanship",
    text: "Every detail is finished with precision and care.",
  },
];

export default function BrandValues() {
  return (
    <section className="py-24 bg-white border-y text-neutral-500">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.35em] text-sm text-gray-500">
            Our Philosophy
          </p>

          <h2 className="text-4xl font-light text-neutral-900 mt-3">
            Designed To Last
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {values.map((item) => (
            <div
              key={item.title}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full border mx-auto mb-6"></div>

              <h3 className="text-xl mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}