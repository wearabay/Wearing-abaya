export default function InstagramGallery() {
  return (
    <section className="py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.35em] text-sm text-gray-500">
            Instagram
          </p>

          <h2 className="text-4xl font-light text-neutral-900 mt-4">
            @wearing.abaya
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[1,2,3,4].map((item)=>(
            <div
              key={item}
              className="aspect-square bg-[#ddd]"
            />
          ))}
        </div>

      </div>
    </section>
  );
}