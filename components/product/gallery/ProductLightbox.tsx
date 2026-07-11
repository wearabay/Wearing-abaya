"use client";

import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type ProductLightboxProps = {
  open: boolean;
  image: string;
  alt: string;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

export default function ProductLightbox({
  open,
  image,
  alt,
  onClose,
  onPrevious,
  onNext,
}: ProductLightboxProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-stone-900/75 backdrop-blur-sm p-6"
      onPointerDown={onClose}
    >
      <div
        className="relative w-full max-w-5xl"
        onPointerDown={(e) => e.stopPropagation()}
      >
        {/* Close */}

        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-2 top-2 z-50 rounded-full bg-black/50 p-3 text-white backdrop-blur transition hover:bg-black/70"
        >
          <X size={28} />
        </button>

        {/* Previous */}

        <button
  type="button"
  aria-label="Previous image"
  onClick={onPrevious}
  className="
    hidden xl:flex
    absolute
    left-2
    top-1/2
    z-50
    -translate-y-1/2
    items-center
    justify-center
    rounded-full
    bg-black/50
    p-3
    text-white
    backdrop-blur
    transition
    hover:bg-black/70
  "
>
  <ChevronLeft size={32} />
</button>

        {/* Next */}

        <button
  type="button"
  aria-label="Next image"
  onClick={onNext}
  className="
    hidden xl:flex
    absolute
    right-2
    top-1/2
    z-50
    -translate-y-1/2
    items-center
    justify-center
    rounded-full
    bg-black/50
    p-3
    text-white
    backdrop-blur
    transition
    hover:bg-black/70
  "
>
  <ChevronRight size={32} />
</button>

        {/* Image */}

        <div className="relative h-[85vh] w-full max-w-5xl overflow-hidden">

          <Image
            src={image}
            alt={alt}
            fill
            priority
            sizes="90vw"
            className="object-contain select-none"
            draggable={false}
          />

        </div>
      </div>
    </div>
  );
}