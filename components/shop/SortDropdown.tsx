"use client";

import { ChevronDown } from "lucide-react";

export default function SortDropdown() {
  return (
    <div className="relative">

      <select
        defaultValue="newest"
        className="
          h-12
          appearance-none
          rounded-full
          border
          border-neutral-300
          bg-white
          pl-5
          pr-12
          text-xs
          uppercase
          tracking-[0.22em]
          outline-none
          transition
          hover:border-black
          focus:border-black
        "
      >
        <option value="newest">
          Newest
        </option>

        <option value="featured">
          Featured
        </option>

        <option value="best-selling">
          Best Selling
        </option>

        <option value="low-high">
          Price: Low to High
        </option>

        <option value="high-low">
          Price: High to Low
        </option>

        <option value="name">
          Alphabetically
        </option>

      </select>

      <ChevronDown
        size={16}
        className="
          pointer-events-none
          absolute
          right-5
          top-1/2
          -translate-y-1/2
          text-neutral-500
        "
      />

    </div>
  );
}