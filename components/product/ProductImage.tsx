"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import Badge from "../ui/Badge";
import WishlistButton from "@/components/ui/WishlistButton";

import { openQuickView } from "@/lib/quick-view";

import type { Product } from "@/types/product";


type Props = {
  product: Product;
};


export default function ProductImage({
  product,
}: Props) {

  const router = useRouter();


  const primaryImage =
    product.images?.[0] ?? product.image;


  const secondaryImage =
    product.images?.[1] ?? primaryImage;



  return (

    <div
      onClick={() =>
        router.push(`/shop/${product.slug}`)
      }
      className="
        group
        relative
        aspect-[3/4]
        overflow-hidden
        rounded-xl
        bg-[#ECE8E2]
        cursor-pointer
        transition-all
        duration-500
        hover:shadow-xl
      "
    >


      {/* Badge */}

      {product.badge && (

        <div
          className="
            absolute
            left-4
            top-4
            z-20
          "
        >
          <Badge>
            {product.badge}
          </Badge>
        </div>

      )}




      {/* Wishlist */}

      <div
        className="
          absolute
          right-4
          top-4
          z-20
        "
        onClick={(e) =>
          e.stopPropagation()
        }
      >

        <WishlistButton
          productId={product.id}
        />

      </div>





      {/* Main Image */}

      <Image

        src={primaryImage}

        alt={product.name}

        fill

        sizes="
          (max-width:768px) 50vw,
          (max-width:1200px) 33vw,
          25vw
        "

        className="
          object-cover
          transition-all
          duration-700
          ease-out
          group-hover:opacity-0
          group-hover:scale-[1.03]
          group-hover:brightness-95
        "

      />





      {/* Hover Image */}

      <Image

        src={secondaryImage}

        alt={product.name}

        fill

        sizes="
          (max-width:768px) 50vw,
          (max-width:1200px) 33vw,
          25vw
        "

        className="
          object-cover
          opacity-0
          scale-[1.08]
          transition-all
          duration-700
          ease-out
          group-hover:scale-100
          group-hover:opacity-100
        "

      />






      {/* Gradient */}

      <div

        className="
          absolute
          inset-x-0
          bottom-0
          h-24
          bg-gradient-to-t
          from-black/20
          via-black/5
          to-transparent
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
        "

      />







      {/* Quick View */}

      <button

        onClick={(e) => {

          e.preventDefault();

          e.stopPropagation();

          openQuickView(product);

        }}

        className="
          absolute
          left-1/2
          bottom-2
          -translate-x-1/2
          translate-y-3
          scale-95
          rounded-full
          bg-white/95
          px-8
          py-3.5
          text-[11px]
          font-medium
          tracking-[0.22em]
          shadow-lg
          backdrop-blur-sm
          opacity-0
          transition-all
          duration-300
          hover:bg-black
          hover:text-white
          group-hover:bottom-6
          group-hover:translate-y-0
          group-hover:scale-100
          group-hover:opacity-100
        "

      >

        QUICK VIEW

      </button>



    </div>

  );
}