"use client";

import { useEffect, useState } from "react";

import Logo from "./Logo";
import NavbarMenu from "./NavbarMenu";
import NavbarIcons from "./NavbarIcons";

import CartDrawer from "@/components/cart/CartDrawer";
import SearchDrawer from "@/components/search/SearchDrawer";
import { openCart } from "@/lib/cart-drawer";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b text-neutral-900"
            : "bg-transparent text-white"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Logo dark={scrolled} />

          <NavbarMenu dark={scrolled} />

          <NavbarIcons
  dark={scrolled}
  onSearchClick={() => setSearchOpen(true)}
  onCartClick={() => openCart()}
/>
        </div>
      </header>

      <CartDrawer />

      <SearchDrawer
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
}