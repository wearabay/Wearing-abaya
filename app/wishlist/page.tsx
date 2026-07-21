"use client";

import Link from "next/link";
import { Trash2, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

import {
  getWishlist,
  clearWishlist,
} from "@/lib/wishlist";

import EmptyWishlist from "@/components/wishlist/EmptyWishlist";


export default function WishlistPage() {

  const [wishlist, setWishlist] = useState<number[]>([]);


  useEffect(() => {

    const loadWishlist = () => {
      setWishlist(getWishlist());
    };


    loadWishlist();


    window.addEventListener(
      "wishlist-updated",
      loadWishlist
    );


    return () =>
      window.removeEventListener(
        "wishlist-updated",
        loadWishlist
      );


  }, []);



  const wishlistProducts =
    products.filter((product) =>
      wishlist.includes(product.id)
    );



  const handleClearWishlist = () => {

    const confirmed = window.confirm(
      "Remove all products from your wishlist?"
    );


    if (!confirmed) return;


    clearWishlist();

  };



  return (

    <>

      <Navbar />


      <main
        className="
          mx-auto
          w-full
          max-w-[1450px]
          px-8
          py-24
        "
      >

        <h1
          className="
            text-5xl
            font-light
          "
        >
          Wishlist
        </h1>


        <p className="mt-3 text-neutral-500">
          {wishlistProducts.length} saved item
          {wishlistProducts.length !== 1 && "s"}
        </p>



        {wishlistProducts.length === 0 ? (

          <EmptyWishlist />

        ) : (

          <>


            <div
              className="
                mt-12
                flex
                items-center
                justify-between
                border-b
                border-stone-200
                pb-6
              "
            >


              <Link
                href="/shop"
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  uppercase
                  tracking-[0.18em]
                  text-neutral-500
                  hover:text-black
                "
              >

                <ArrowLeft size={16} />

                Continue Shopping

              </Link>



              <span className="text-sm text-neutral-400">

                {wishlistProducts.length} items

              </span>



              <button
                type="button"
                onClick={handleClearWishlist}
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  uppercase
                  tracking-[0.18em]
                  text-neutral-500
                  hover:text-red-500
                "
              >

                <Trash2 size={16}/>

                Clear All

              </button>


            </div>



            <div
              className="
                mt-14
                grid
                grid-cols-2
                gap-x-6
                gap-y-12
                md:grid-cols-3
                xl:grid-cols-4
              "
            >

              {wishlistProducts.map(
                (product) => (

                  <ProductCard
                    key={product.id}
                    product={product}
                  />

                )
              )}

            </div>


          </>

        )}


      </main>


      <Footer />

    </>

  );
}