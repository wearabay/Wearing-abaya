"use client";

import { sizes } from "@/data/sizes";
import { useShop } from "../context/ShopContext";

export default function SizeFilter() {
  const {
    sizes: selectedSizes,
    setSizes,
  } = useShop();

  function toggleSize(size: string) {
    if (selectedSizes.includes(size)) {
      setSizes(
        selectedSizes.filter(
          (item) => item !== size
        )
      );
    } else {
      setSizes([
        ...selectedSizes,
        size,
      ]);
    }
  }

  return (
    <div className="flex flex-wrap gap-3">

      {sizes.map((size) => {

        const active =
          selectedSizes.includes(size);

        return (
          <button
            key={size}
            onClick={() => toggleSize(size)}
            className={`
              rounded-full
              border
              px-5
              py-2
              text-sm
              transition

              ${
                active
                  ? "border-black bg-black text-white"
                  : "border-neutral-300 hover:border-black"
              }
            `}
          >
            {size}
          </button>
        );
      })}

    </div>
  );
}