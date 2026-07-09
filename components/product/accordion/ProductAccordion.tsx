"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type ProductAccordionProps = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

export default function ProductAccordion({
  title,
  children,
  defaultOpen = false,
}: ProductAccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-stone-200">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-3"
      >
        <span className="text-[13px] font-medium uppercase tracking-[0.28em] text-neutral-800">
          {title}
        </span>

        <ChevronDown
          size={18}
          className={`transition duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <div className="leading-8 text-neutral-600">
          {children}
        </div>
      </div>
    </div>
  );
}