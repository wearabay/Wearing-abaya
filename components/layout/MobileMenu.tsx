"use client";

import Link from "next/link";
import { X, Menu } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";

import { navigation } from "@/data/navigation";


type Props = {
  dark?: boolean;
};


export default function MobileMenu({
  dark = false,
}: Props) {

  const [open, setOpen] = useState(false);

  useEffect(() => {

  if(open){
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }


  return () => {
    document.body.style.overflow = "";
  };

},[open]);


  return (
    <>

      {/* HAMBURGER */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`
          md:hidden
          transition-opacity
          hover:opacity-60
          ${
            dark
              ? "text-neutral-900"
              : "text-white"
          }
        `}
        aria-label="Open menu"
      >

        <Menu
          size={24}
          strokeWidth={1.4}
        />

      </button>



      {open && (

        <div
          className="
            fixed
            inset-0
            z-[999]
            h-screen
            bg-white
            text-neutral-900
            overflow-hidden
          "
        >


          {/* HEADER */}
          <div
            className="
              flex
              h-24
              items-center
              justify-between
              px-8
              border-b
              border-neutral-200
            "
          >

            <span
              className="
                text-xl
                font-light
                tracking-[0.38em]
              "
            >
              WEARABAY
            </span>



            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >

              <X
                size={28}
                strokeWidth={1.3}
              />

            </button>


          </div>




          {/* MAIN MENU */}
          <nav
            className="
              flex
              flex-col
              px-8
              pt-12
              gap-10
            "
          >

            {navigation.map((item) => (

              <Link

                key={item.name}

                href={item.href}

                onClick={() =>
                  setOpen(false)
                }

                className="
                  text-[22px]
                  font-light
                  uppercase
                  tracking-[0.32em]
                "

              >

                {item.name}

              </Link>

            ))}


          </nav>




          {/* FOOTER MENU */}
<div
  className="
    absolute
    bottom-0
    left-0
    right-0
    px-8
    pb-10
    pt-8
    bg-white
  "
>

  <div
    className="
      h-px
      bg-neutral-200
      mb-8
    "
  />


  <p
    className="
      text-[11px]
      uppercase
      tracking-[0.35em]
      text-neutral-500
      mb-5
    "
  >
    Follow Our Journey
  </p>



  <div
    className="
      flex
      items-center
      gap-8
      text-sm
      uppercase
      tracking-[0.22em]
    "
  >


    <a
      href="https://instagram.com/wearing.abaya"
      target="_blank"
      rel="noopener noreferrer"
    >
      Instagram
    </a>



    <Link
      href="/account"
      onClick={() =>
        setOpen(false)
      }
    >
      Account
    </Link>



    <Link
      href="/cart"
      onClick={() =>
        setOpen(false)
      }
    >
      Cart
    </Link>



  </div>


</div>



        </div>

      )}

    </>
  );
}