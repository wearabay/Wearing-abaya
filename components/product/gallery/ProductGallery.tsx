"use client";

import { useEffect, useState } from "react";

import ProductImage from "./ProductImage";
import ProductThumbnail from "./ProductThumbnail";
import GalleryNavigation from "./GalleryNavigation";
import ProductLightbox from "./ProductLightbox";
import Image from "next/image";

type ProductGalleryProps = {
  images: string[];
  name: string;
};

export default function ProductGallery({
  images,
  name,
}: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const activeImage = images[currentIndex];
  const nextIndex =
  currentIndex === images.length - 1
    ? 0
    : currentIndex + 1;

const previousIndex =
  currentIndex === 0
    ? images.length - 1
    : currentIndex - 1;

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

  // Keyboard Navigation
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

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  // Swipe
  const minSwipeDistance = 50;

  function onTouchStart(e: React.TouchEvent) {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }

  function onTouchMove(e: React.TouchEvent) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function onTouchEnd() {
    if (touchStart === null || touchEnd === null) return;

    const distance = touchStart - touchEnd;

    if (distance > minSwipeDistance) {
      handleNext();
    }

    if (distance < -minSwipeDistance) {
      handlePrevious();
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[90px_1fr]">

      {/* Desktop Thumbnail */}

      <div className="hidden lg:block">
        <ProductThumbnail
          images={images}
          activeImage={activeImage}
          onSelect={(image) =>
            setCurrentIndex(images.indexOf(image))
          }
        />
      </div>

      {/* Main Image */}

      <div
        className="relative"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <ProductImage
          key={activeImage}
          src={activeImage}
          alt={name}
          onClick={() => setLightboxOpen(true)}
        />

        {/* Desktop Navigation */}

        <div className="hidden xl:block">
          <GalleryNavigation
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        </div>

        {/* Mobile Indicator */}

        <div className="mt-5 flex justify-center gap-2 lg:hidden">

          {images.map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Image ${index + 1}`}
              className={`
                h-2
                rounded-full
                transition-all
                duration-300
                ${
                  index === currentIndex
                    ? "w-8 bg-black"
                    : "w-2 bg-neutral-300"
                }
              `}
            />

          ))}

        </div>

        {/* Lightbox */}

        <ProductLightbox
          open={lightboxOpen}
          image={activeImage}
          alt={name}
          onClose={() => setLightboxOpen(false)}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />

      </div>
      {/* Preload next & previous image */}

<div
  aria-hidden
  className="absolute h-0 w-0 overflow-hidden opacity-0"
>

  <Image
    src={images[nextIndex]}
    alt=""
    width={1}
    height={1}
    loading="eager"
  />

  <Image
    src={images[previousIndex]}
    alt=""
    width={1}
    height={1}
    loading="eager"
  />

</div>

    </div>
  );
}