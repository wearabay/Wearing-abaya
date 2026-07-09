"use client";

type SizeSelectorProps = {
  sizes: string[];
  selected: string;
  onChange: (size: string) => void;
};

export default function SizeSelector({
  sizes,
  selected,
  onChange,
}: SizeSelectorProps) {
  const isSingleSize =
    sizes.length === 1 &&
    sizes[0].toLowerCase() === "all size";

  return (
    <div className="mt-10">

      <p className="mb-5 text-xs uppercase tracking-[0.35em] text-neutral-500">
        Size
      </p>

      {isSingleSize ? (

        <div className="inline-flex rounded-full border border-black bg-black px-5 py-2 text-sm text-white">
          All Size
        </div>

      ) : (

        <div className="flex flex-wrap gap-3">

          {sizes.map((size) => (

            <button
              key={size}
              type="button"
              onClick={() => onChange(size)}
              className={`rounded-full border px-5 py-2 text-sm transition-all duration-300 ${
                selected === size
                  ? "border-black bg-black text-white"
                  : "border-neutral-300 hover:border-black"
              }`}
            >
              {size}
            </button>

          ))}

        </div>

      )}

    </div>
  );
}