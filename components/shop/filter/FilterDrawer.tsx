"use client";

import { X } from "lucide-react";
import CategoryFilter from "./CategoryFilter";
import ColorFilter from "./ColorFilter";
import { useShop } from "../context/ShopContext";
import SizeFilter from "./SizeFilter";
import PriceFilter from "./PriceFilter";

type FilterDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export default function FilterDrawer({
  open,
  onClose,
}: FilterDrawerProps) {
    const { clearFilters } = useShop();
  return (
    <>
      {/* Overlay */}

      <div
        onClick={onClose}
        className={`
          fixed inset-0 left-0 right-0 top-20 bottom-0 z-40 bg-black/40 transition-all duration-300
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* Drawer */}

      <aside
        className={`
          fixed left-0 top-20 bottom-0 z-50
          h-screen
          w-full
          max-w-sm
          bg-white
          shadow-2xl
          transition-transform
          duration-300
          flex
          flex-col
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b px-6 py-5">

          <h2 className="text-lg font-medium uppercase tracking-[0.22em]">
            Filters
          </h2>

          <button
            onClick={onClose}
            className="rounded-full p-2 transition hover:bg-neutral-100"
          >
            <X size={20} />
          </button>

        </div>

        {/* Content */}

        <div className="absolute
    top-[81px]
    bottom-[96px]
    left-0
    right-0
    overflow-y-auto
    px-6
    py-6
    pb-10
  ">
            <div className="space-y-6">

          {/* Category */}

          <section className="border-b border-neutral-300 pb-4">

            <h3 className="mb-5 text-xs uppercase tracking-[0.25em] text-neutral-500">
              Category
            </h3>

            <CategoryFilter />

          </section>

          {/* Color */}

          <section className="border-b border-neutral-300 pb-4">

            <h3 className="mb-5 text-xs uppercase tracking-[0.25em] text-neutral-500">
              Color
            </h3>

            <ColorFilter />

          </section>

          {/* Size */}

          <section className="border-b border-neutral-300 pb-4">

            <h3 className="mb-5 text-xs uppercase tracking-[0.25em] text-neutral-500">
              Size
            </h3>

            <SizeFilter />

          </section>

          {/* Price */}

          <section>

            <h3 className="mb-5 text-xs uppercase tracking-[0.25em] text-neutral-500">
              Price
            </h3>

            <PriceFilter />

          </section>

        </div>

        {/* Footer */}

        <div className="mt-10 border-t border-neutral-300 pt-4">

          <div className="flex py-5 gap-3">

            <button
            onClick={clearFilters}
              className="
                flex-1
                rounded-full
                border
                border-neutral-300
                py-3
                text-xs
                uppercase
                tracking-[0.22em]
                transition
                hover:border-black
              "
            >
              Reset
            </button>

            <button
              onClick={onClose}
              className="
                flex-1
                rounded-full
                bg-black
                py-3
                text-xs
                uppercase
                tracking-[0.22em]
                text-white
                transition
                hover:opacity-90
              "
            >
              Done
            </button>

          </div>
</div>
        </div>

      </aside>
    </>
  );
}