"use client";

import type { JournalCategory } from "@/types/journal";

type CategoryTabsProps = {
  value: JournalCategory | "All";
  onChange: (
    value: JournalCategory | "All"
  ) => void;
};

const categories: (JournalCategory | "All")[] = [
  "All",
  "Style Guide",
  "Care Guide",
  "Lifestyle",
  "Ramadan",
  "Behind The Brand",
  "New Collection",
];

export default function CategoryTabs({
  value,
  onChange,
}: CategoryTabsProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-12">

      <div className="flex gap-3 overflow-x-auto">

        {categories.map((category) => (

          <button
            key={category}
            onClick={() => onChange(category)}
            className={`
              whitespace-nowrap
              rounded-full
              border
              px-5
              py-3
              text-sm
              tracking-[0.15em]
              uppercase
              transition-all
              duration-300

              ${
                value === category
                  ? "bg-black text-white border-black"
                  : "border-neutral-300 bg-white text-black hover:border-black"
              }
            `}
          >
            {category}
          </button>

        ))}

      </div>

    </section>
  );
}