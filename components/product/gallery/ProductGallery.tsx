"use client";

import { useEffect, useState } from "react";
import ProductImage from "./ProductImage";
import ProductThumbnail from "./ProductThumbnail";
import GalleryNavigation from "./GalleryNavigation";
import ProductLightbox from "./ProductLightbox";

type ProductGalleryProps = {
  images: string[];
  name: string;
};

export default function ProductGallery({
  images,
  name,
}: ProductGalleryProps) {

  const [lightboxOpen, setLightboxOpen] = useState(false);
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeImage = images[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };
  useEffect(() => {
  if (!lightboxOpen) return;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setLightboxOpen(false);
    }

    if (event.key === "ArrowLeft") {
      handlePrevious();
    }

    if (event.key === "ArrowRight") {
      handleNext();
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [lightboxOpen]);

return (
  <div className="grid grid-cols-[90px_1fr] gap-6">

    <ProductThumbnail
      images={images}
      activeImage={activeImage}
      onSelect={(image) =>
        setCurrentIndex(images.indexOf(image))
      }
    />

    <div className="relative">

      <ProductImage
        src={activeImage}
        alt={name}
        onClick={() => setLightboxOpen(true)}
      />

      <GalleryNavigation
        onPrevious={handlePrevious}
        onNext={handleNext}
      />

      <ProductLightbox
        open={lightboxOpen}
        image={activeImage}
        alt={name}
        onClose={() => setLightboxOpen(false)}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />

    </div>

  </div>
);
}