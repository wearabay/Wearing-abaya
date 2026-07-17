"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="
        fixed
        bottom-6
        right-6
        z-[999]
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-neutral-200
        bg-white/90
        shadow-lg
        backdrop-blur
        transition
        hover:-translate-y-1
        hover:border-black
      "
      aria-label="Back to top"
    >
      <ChevronUp size={18} />
    </button>
  );
}