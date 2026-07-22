"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Logo from "./Logo";
import NavbarMenu from "./NavbarMenu";
import NavbarIcons from "./NavbarIcons";

import CartDrawer from "@/components/cart/CartDrawer";
import SearchDrawer from "@/components/search/SearchDrawer";

import { openCart } from "@/lib/cart-drawer";


export default function Navbar() {

  const pathname = usePathname();


  const [searchOpen, setSearchOpen] =
    useState(false);


  const [scrolled, setScrolled] =
    useState(false);



  useEffect(() => {

    const handleScroll = () => {

      setScrolled(
        window.scrollY > 80
      );

    };


    handleScroll();


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );


  }, []);




  const transparentPages = [
    "/",
    "/shop",
  ];



  const isTransparentPage =
    transparentPages.includes(
      pathname
    );



  const darkNavbar =
    !isTransparentPage ||
    scrolled;




  return (

    <>

      <header

        className={`
          fixed
          left-0
          right-0
          top-0
          z-50

          transition-all
          duration-500

          ${
            darkNavbar
              ? `
                bg-white/90
                backdrop-blur-md
                shadow-sm
                border-b
                border-neutral-200
                text-neutral-900
              `
              : `
                bg-transparent
                text-white
              `
          }
        `}

      >


        <div

          className="
            mx-auto
            flex
            h-20
            max-w-7xl
            items-center
            justify-between
            px-6
          "

        >


          <Logo
            dark={darkNavbar}
          />



          <NavbarMenu
            dark={darkNavbar}
          />



          <NavbarIcons

            dark={darkNavbar}

            onSearchClick={() =>
              setSearchOpen(true)
            }

            onCartClick={() =>
              openCart()
            }

          />


        </div>


      </header>




      <CartDrawer />


      <SearchDrawer

        open={searchOpen}

        onClose={() =>
          setSearchOpen(false)
        }

      />


    </>

  );

}