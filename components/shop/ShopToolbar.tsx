"use client";

import { SlidersHorizontal } from "lucide-react";

import Container from "../ui/Container";
import Input from "../ui/Input";
import SortDropdown from "./SortDropdown";

import { products } from "@/data/products";

export default function ShopToolbar() {
  return (
    <section className="sticky top-20 z-30 border-b border-neutral-200 bg-white/95 backdrop-blur-md">

      <Container>

        <div className="flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">

          {/* Left */}
          <div className="flex items-center gap-4">

            <button
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-neutral-300
                px-5
                py-3
                text-xs
                uppercase
                tracking-[0.22em]
                transition
                hover:border-black
              "
            >
              <SlidersHorizontal size={16} />
              Filter
            </button>

            <div className="hidden text-sm text-neutral-500 lg:block">
              Showing{" "}
              <span className="font-medium text-neutral-900">
                {products.length}
              </span>{" "}
              Products
            </div>

          </div>

          {/* Search */}
          <div className="w-full lg:max-w-md">
            <Input placeholder="Search collection..." />
          </div>

          {/* Sort */}
          <SortDropdown />

        </div>

        {/* Active Filters */}

        <div className="flex flex-wrap items-center gap-2 border-t border-neutral-100 py-3">

          <button
            className="
              rounded-full
              bg-neutral-100
              px-3
              py-1.5
              text-[11px]
              uppercase
              tracking-[0.18em]
            "
          >
            Abaya ×
          </button>

          <button
            className="
              rounded-full
              bg-neutral-100
              px-3
              py-1.5
              text-[11px]
              uppercase
              tracking-[0.18em]
            "
          >
            Black ×
          </button>

          <button
            className="
              text-[11px]
              uppercase
              tracking-[0.18em]
              text-neutral-500
              transition
              hover:text-black
            "
          >
            Clear All
          </button>

        </div>

      </Container>

    </section>
  );
}