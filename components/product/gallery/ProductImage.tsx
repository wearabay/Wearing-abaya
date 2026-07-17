"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ImageSkeleton from "@/components/ui/ImageSkeleton";

type ProductImageProps = {
  src: string;
  alt: string;
  onClick?: () => void;
};

export default function ProductImage({
  src,
  alt,
  onClick,
}: ProductImageProps) {
  const [zoom, setZoom] = useState({
    x: 50,
    y: 50,
  });

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [src]);

  function handleMove(
    e: React.MouseEvent<HTMLDivElement>
  ) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x =
      ((e.clientX - rect.left) / rect.width) * 100;

    const y =
      ((e.clientY - rect.top) / rect.height) * 100;

    setZoom({ x, y });
  }

  return (
    <div
      onClick={onClick}
      onMouseMove={handleMove}
      className="
        group
        relative
        aspect-[3/4]
        overflow-hidden
        rounded-sm
        bg-[#ECE8E2]
        cursor-zoom-in
      "
    >
      {!loaded && <ImageSkeleton />}

      <AnimatePresence mode="wait">

        <motion.div
          key={src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.3,
          }}
          className="absolute inset-0"
        >

          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="60vw"
            onLoad={() => setLoaded(true)}
            className={`
              object-cover
              transition-all
              duration-700
              ease-out
              group-hover:scale-[1.6]
              ${
                loaded
                  ? "opacity-100"
                  : "opacity-0"
              }
            `}
            style={{
              transformOrigin: `${zoom.x}% ${zoom.y}%`,
            }}
          />

        </motion.div>

      </AnimatePresence>
    </div>
  );
}